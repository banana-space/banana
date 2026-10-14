import { GitHubError } from './github.mjs';

// 最近更改（/recent-changes/）与差异页面（/diff/）的数据：站点仓库最近的 PR（待审阅与已合并，不含关闭未合并的）、
// 它们修改的文件，以及一个文件在 PR 前后的全文。只读，公开仓库不需要令牌（有令牌时 GitHub 的频率限制宽得多）。
// 文件列表与全文按 PR 的最新提交缓存（合并后的 PR 不再变化）；列表的每一页缓存 ttl 毫秒，同时到达的请求共用一次查询。

/**
 * repo is "owner/name". list(page) resolves to { pulls, more }: one page of the recent pull requests, most recently
 * updated first, each { number, url, title, state: 'open' | 'merged', draft, editor, author: { login }, time, created,
 * files: [{ path, status, previous, additions, deletions }], fileCount, truncated }; time is when the pull request
 * was merged, or for an open one when it was last updated; editor is whether the online editor opened it; mergeCommit is
 * the commit a merged pull request made on the base branch. diff(number, path) resolves to { pull, file, before,
 * after }: the file's text where the pull request started from and in it (null where it does not exist).
 */
export function recentPullRequests({ repo, token, api = 'https://api.github.com', perPage = 30, maxFiles = 1000, ttl = 60e3 }) {
  async function request(path, { raw = false } = {}) {
    const response = await fetch(`${api}/repos/${repo}${path}`, {
      headers: {
        Accept: raw ? 'application/vnd.github.raw+json' : 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28',
        'User-Agent': 'banana-editor', ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });
    if (raw && response.ok) return response.text();
    const result = await response.json().catch(() => undefined);
    if (!response.ok) throw new GitHubError(response.status, `GitHub GET ${path}: ${response.status} ${result?.message ?? ''}`.trim());
    return result;
  }
  const segments = path => path.split('/').map(encodeURIComponent).join('/');

  /** A cache of promises: concurrent requests share one; failures are forgotten. */
  function memo(limit) {
    const entries = new Map();
    return (key, load, maxAge = Infinity) => {
      const entry = entries.get(key);
      if (entry && Date.now() - entry.time < maxAge) return entry.value;
      const value = load().catch(error => { entries.delete(key); throw error; });
      entries.set(key, { value, time: Date.now() });
      if (entries.size > limit) entries.delete(entries.keys().next().value);
      return value;
    };
  }
  const cachedFiles = memo(500), cachedPages = memo(50), cachedPulls = memo(200), cachedTexts = memo(400);

  /** Every file a pull request changes, as of its latest commit. */
  const filesOf = pull => cachedFiles(`${pull.number}@${pull.head.sha}`, async () => {
    const files = [];
    // GitHub lists at most 3000 files, 100 a page.
    for (let page = 1; files.length < maxFiles; page++) {
      const batch = await request(`/pulls/${pull.number}/files?per_page=100&page=${page}`);
      files.push(...batch.map(file => ({
        path: file.filename, status: file.status, previous: file.previous_filename ?? null,
        additions: file.additions, deletions: file.deletions,
      })));
      if (batch.length < 100) break;
    }
    return { files: files.slice(0, maxFiles), truncated: files.length >= maxFiles };
  });

  /**
   * The online editor opens its pull requests by the bot from edit/<login>/<hash of path> in the repository itself:
   * their author is that login, and the editor can add to them (scripts/editor/github.mjs).
   */
  const editorLogin = pull => pull.head.repo?.full_name?.toLowerCase() === repo.toLowerCase()
    && pull.head.ref.match(/^edit\/([A-Za-z0-9-]+)\/[0-9a-f]{12}$/)?.[1];
  const summary = pull => ({
    number: pull.number, url: pull.html_url, title: pull.title,
    state: pull.merged_at ? 'merged' : 'open', draft: Boolean(pull.draft), editor: Boolean(editorLogin(pull)),
    author: { login: editorLogin(pull) || pull.user.login }, time: pull.merged_at ?? pull.updated_at, created: pull.created_at,
    mergeCommit: pull.merged_at ? pull.merge_commit_sha ?? null : null,
  });

  /** One page of pull requests, by GitHub's order (most recently updated first). */
  const list = (page = 1) => cachedPages(page, async () => {
    const batch = await request(`/pulls?state=all&sort=updated&direction=desc&per_page=${perPage}&page=${page}`);
    const pulls = batch.filter(pull => pull.state === 'open' || pull.merged_at);
    const result = [];
    // A few at a time: the first load after a restart lists the files of every pull request.
    for (let i = 0; i < pulls.length; i += 6) {
      result.push(...await Promise.all(pulls.slice(i, i + 6).map(async pull => {
        const { files, truncated } = await filesOf(pull);
        return { ...summary(pull), files, fileCount: files.length, truncated };
      })));
    }
    return { pulls: result, more: batch.length === perPage };
  }, ttl);

  /** A file at a commit, or null where it does not exist. */
  const textAt = (path, ref) => cachedTexts(`${ref}:${path}`, () => request(`/contents/${segments(path)}?ref=${ref}`, { raw: true })
    .catch(error => { if (error.status === 404) return null; throw error; }));

  async function diff(number, path) {
    const pull = await cachedPulls(number, () => request(`/pulls/${number}`), ttl);
    if (!(pull.state === 'open' || pull.merged_at)) throw new GitHubError(404, `pull request #${number} was closed without merging`);
    const file = (await filesOf(pull)).files.find(file => file.path === path);
    if (!file) throw new GitHubError(404, `pull request #${number} does not change ${path}`);
    // As GitHub shows a pull request: from where its branch left the base, to its latest commit.
    const { merge_base_commit: { sha: base } } = await cachedPulls(`${pull.base.sha}...${pull.head.sha}`, () => request(`/compare/${pull.base.sha}...${pull.head.sha}?per_page=1`));
    const [before, after] = await Promise.all([
      file.status === 'added' ? null : textAt(file.previous ?? file.path, base),
      file.status === 'removed' ? null : textAt(file.path, pull.head.sha),
    ]);
    return { pull: summary(pull), file, before, after };
  }
  return { list, diff };
}
