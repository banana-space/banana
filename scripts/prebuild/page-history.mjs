import { execFile, spawn } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import { promisify } from 'node:util';

const run = promisify(execFile);

/**
 * 每个页面的编辑历史，供页面历史（/history/?path=<页面>）使用：
 * - changes：合并进当前分支的 PR（及直接提交到分支的提交）中修改了它的那些，最新的在前，来自本地 Git 历史
 *   （git log --first-parent：每项是分支上的一次变化，与它的第一个父提交比较），跟随改名；
 * - legacy：从旧站迁移来的页面在旧站的修订，最新的在前（legacy/history.json，以导入提交中的路径为键，
 *   沿改名追溯到导入时的路径后取得）。旧站没有的页面（如帮助页面）为空。
 *
 * repository 为 GitHub 上的 owner/name，用来认出复刻中的分支的作者。返回 Map：仓库中的路径（content/…）
 * → { changes, legacy }，只含当前提交中存在的 content/ 中的 Markdown 文件；不是 Git 仓库时为空。
 */
export async function pageHistories(root, { repository } = {}) {
  let top;
  try {
    top = (await run('git', ['rev-parse', '--show-toplevel'], { cwd: root })).stdout.trim();
    await run('git', ['rev-parse', '--verify', 'HEAD'], { cwd: top });
  } catch (error) {
    if (error.code === 128) return new Map(); // A source export without Git history.
    throw error;
  }
  const owner = repository?.split('/')[0]?.toLowerCase();
  const git = args => run('git', args, { cwd: top, maxBuffer: 1024 * 1024 * 1024 }).then(result => result.stdout);

  const present = (await git(['ls-files', '-z', '--', 'content'])).split('\0').filter(path => path.endsWith('.md'));
  const commits = parseLog(await git(['log', '--first-parent', '-M', '--raw', '--numstat', '-z', '--format=%x1e%H%x1f%P%x1f%cI%x1f%an%x1f%s%x1f%b%x1d', 'HEAD', '--', 'content']));

  // A pull request's branch: who wrote it and when its latest commit was made (the time of the change, as on the
  // recent changes page; merging comes later).
  const heads = commits.map(commit => commit.parents[1]).filter(Boolean);
  const branchCommits = new Map();
  if (heads.length) {
    const output = await gitWithInput(top, ['log', '--no-walk=unsorted', '--stdin', '--format=%H%x1f%an%x1f%ae%x1f%cI'], heads.join('\n'));
    for (const line of output.split('\n').filter(Boolean)) {
      const [sha, name, email, time] = line.split('\x1f');
      branchCommits.set(sha, { name, email, time });
    }
  }
  const pullRequest = commit => {
    const match = commit.subject.match(/^Merge pull request #(\d+) from ([\w.-]+)\/(\S+)$/);
    if (!match || commit.parents.length < 2) return;
    const [, number, from, branch] = match, head = branchCommits.get(commit.parents[1]);
    // The online editor's branches are edit/<login>/<hash> (scripts/editor/github.mjs); a fork's owner wrote the
    // rest of its pull requests; otherwise the branch's last author, by GitHub login where the address gives one.
    const login = branch.match(/^edit\/([A-Za-z0-9-]+)\/[0-9a-f]{12}$/)?.[1]
      ?? (owner && from.toLowerCase() !== owner ? from : undefined)
      ?? head?.email.match(/^(?:\d+\+)?([A-Za-z0-9-]+)@users\.noreply\.github\.com$/)?.[1];
    return { number: Number(number), author: login ?? head?.name ?? null, time: head?.time ?? commit.time };
  };

  // Newest first: each page's name at that point in history (renames are followed back to where the page began).
  const histories = new Map(present.map(path => [path, { changes: [], legacy: [], origin: undefined }]));
  const names = new Map(present.map(path => [path, path]));
  for (const commit of commits) {
    const pull = pullRequest(commit);
    for (const change of commit.changes) {
      const page = names.get(change.path);
      if (!page) continue;
      const history = histories.get(page);
      const entry = {
        ...(pull ? { pr: pull.number } : { commit: commit.sha }),
        title: (pull ? commit.body.split('\n')[0].trim() : '') || commit.subject,
        author: pull ? pull.author : commit.author || null, time: pull ? pull.time : commit.time, merged: commit.time,
        status: change.status, add: change.add, del: change.del,
      };
      // The page's path then, where it differs from now (the diff page asks for the file as the pull request had it).
      if (change.path !== page) entry.path = change.path.replace(/^content\//, '');
      if (change.previous) entry.previous = change.previous.replace(/^content\//, '');
      // The first commit, which imported the site (and the legacy site's pages).
      if (!commit.parents.length) entry.import = true;
      history.changes.push(entry);
      names.delete(change.path);
      if (change.status === 'renamed') names.set(change.previous, page);
      else if (change.status !== 'added') names.set(change.path, page);
      else history.origin = change.path;
    }
  }

  let legacy = {};
  try { legacy = JSON.parse(await readFile(`${top}/legacy/history.json`, 'utf8')); }
  catch (error) { if (error.code !== 'ENOENT') throw error; }
  for (const history of histories.values()) {
    // Only a page that began in the import carries the legacy site's history; one created later under a name the
    // legacy site used is a new page.
    const imported = history.changes.at(-1)?.import;
    if (imported && legacy[history.origin]) history.legacy = legacy[history.origin].toReversed();
    delete history.origin;
  }
  return histories;
}

/** Runs git with input on its standard input (a list of commits too long for the command line). */
function gitWithInput(cwd, args, input) {
  return new Promise((resolve, reject) => {
    const child = spawn('git', args, { cwd, stdio: ['pipe', 'pipe', 'inherit'] });
    const chunks = [];
    child.stdout.on('data', chunk => chunks.push(chunk));
    child.on('error', reject);
    child.on('close', code => code === 0 ? resolve(Buffer.concat(chunks).toString('utf8')) : reject(new Error(`git ${args[0]} exited with ${code}`)));
    child.stdin.end(input);
  });
}

/**
 * Parses git log --raw --numstat -z with the format above into [{ sha, parents, time, author, subject, body, changes }]:
 * each change { path, previous, status, add, del } (add and del are null for binary files).
 */
function parseLog(output) {
  const statuses = { A: 'added', D: 'removed', M: 'modified', R: 'renamed', T: 'modified', C: 'added' };
  const commits = [];
  for (const chunk of output.split('\x1e').slice(1)) {
    const end = chunk.indexOf('\x1d');
    const [sha, parents, time, author, subject, body] = chunk.slice(0, end).split('\x1f');
    const tokens = chunk.slice(end + 1).split('\0').map(token => token.replace(/^\n/, ''));
    const changes = new Map(), counts = [];
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (!token) continue;
      if (token.startsWith(':')) {
        const status = token.split(' ').at(-1)[0];
        if (status === 'R' || status === 'C') {
          const previous = tokens[++i], path = tokens[++i];
          changes.set(path, { path, previous: status === 'R' ? previous : null, status: statuses[status] });
        } else {
          const path = tokens[++i];
          changes.set(path, { path, previous: null, status: statuses[status] ?? 'modified' });
        }
        continue;
      }
      const match = token.match(/^(\d+|-)\t(\d+|-)\t(.*)$/s);
      if (!match) continue;
      const path = match[3] === '' ? (i += 2, tokens[i]) : match[3];
      counts.push([path, match[1] === '-' ? null : Number(match[1]), match[2] === '-' ? null : Number(match[2])]);
    }
    for (const [path, add, del] of counts) Object.assign(changes.get(path) ?? {}, { add, del });
    commits.push({ sha, parents: parents ? parents.split(' ') : [], time, author, subject, body, changes: [...changes.values()].filter(change => change.path.endsWith('.md') || change.previous?.endsWith('.md')) });
  }
  return commits;
}
