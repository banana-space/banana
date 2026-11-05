import { mkdir, readFile, rename, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import { commitLogin, pullAuthors } from '../shared/github-authors.mjs';

/**
 * 页面历史中每次修改的作者，取自 GitHub（scripts/shared/github-authors.mjs）：合并的 PR 的作者与它的提交的作者，直接提交的作者。
 * 合并后的 PR 与提交都不再变化，所以每个只向 GitHub 读取一次，存在 cacheFile 中（服务器的 build/.build/ 在构建之间保留），
 * 之后的构建只读取新合并的 PR。没有令牌时只用缓存（不向 GitHub 读取：未登录的频率限制每小时只有 60 个请求）；
 * 读取失败（网络、频率限制）时那些修改没有作者，构建照常完成，下一次构建再读取。
 *
 * repo is "owner/name"; pulls the merged pull requests' numbers, commits the commits straight on the branch. Resolves to
 * { pulls: Map(number → logins), commits: Map(sha → logins) } with only what is known (logins may be empty: a
 * commit GitHub links to no account).
 */
export async function githubAuthors({ repo, token, api = 'https://api.github.com', cacheFile, pulls = [], commits = [], concurrency = 6, timeout = 20e3, log = console.warn }) {
  let cache = { version: 1, repo, pulls: {}, commits: {} };
  if (cacheFile) {
    try {
      const saved = JSON.parse(await readFile(cacheFile, 'utf8'));
      if (saved.version === 1 && saved.repo === repo) cache = saved;
    } catch (error) {
      if (error.code !== 'ENOENT') log(`[github authors] ${cacheFile}: ${error.message}; starting with an empty cache`);
    }
  }

  async function request(path) {
    const response = await fetch(`${api}/repos/${repo}${path}`, {
      headers: { Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28', 'User-Agent': 'banana-build', Authorization: `Bearer ${token}` },
      signal: AbortSignal.timeout(timeout),
    });
    const result = await response.json().catch(() => undefined);
    if (!response.ok) throw new Error(`GET ${path}: ${response.status} ${result?.message ?? ''}`.trim());
    return result;
  }
  /** A pull request's commits: GitHub lists at most 250, 100 a page. */
  async function commitsOf(number) {
    const all = [];
    for (let page = 1; page <= 3; page++) {
      const batch = await request(`/pulls/${number}/commits?per_page=100&page=${page}`);
      all.push(...batch);
      if (batch.length < 100) break;
    }
    return all;
  }

  const missing = [
    ...[...new Set(pulls)].filter(number => !(number in cache.pulls)).map(number => ['pulls', number, async () => {
      const [pull, list] = await Promise.all([request(`/pulls/${number}`), commitsOf(number)]);
      // Only what is merged stays as it is (a number in the branch's history is; this guards a wrong repository).
      return pull.merged_at ? pullAuthors(pull, list, repo) : undefined;
    }]),
    ...[...new Set(commits)].filter(sha => !(sha in cache.commits)).map(sha => ['commits', sha, async () => {
      const login = commitLogin(await request(`/commits/${sha}`));
      return login ? [login] : [];
    }]),
  ];
  if (missing.length && token) {
    const failures = [];
    let next = 0;
    await Promise.all(Array.from({ length: Math.min(concurrency, missing.length) }, async () => {
      while (next < missing.length) {
        const [kind, key, load] = missing[next++];
        try {
          const logins = await load();
          if (logins) cache[kind][key] = logins;
        } catch (error) {
          failures.push(error.message);
        }
      }
    }));
    if (failures.length) log(`[github authors] ${failures.length} of ${missing.length} lookups failed, their changes have no authors until the next build: ${failures[0]}`);
    if (cacheFile && failures.length < missing.length) {
      await mkdir(dirname(cacheFile), { recursive: true });
      await writeFile(`${cacheFile}.tmp`, JSON.stringify(cache));
      await rename(`${cacheFile}.tmp`, cacheFile);
    }
  }
  return {
    pulls: new Map(Object.entries(cache.pulls).map(([number, logins]) => [Number(number), logins])),
    commits: new Map(Object.entries(cache.commits)),
  };
}
