import { createHash } from 'node:crypto';

// GitHub：登录只用来确认身份（OAuth，不请求任何权限，令牌用后即弃）；提交由机器人令牌
// （只对站点仓库有 Contents 与 Pull requests 写权限的 fine-grained token）完成，commit 的作者是
// 登录的用户。见 docs/preview.md。

export class GitHubError extends Error {
  constructor(status, message) { super(message); this.status = status; }
}

/** Git's blob id of a text: how GitHub names file contents, used to detect conflicting edits. */
export const blobId = text => createHash('sha1').update(`blob ${Buffer.byteLength(text)}\0`).update(text).digest('hex');

/** OAuth web flow. web and api default to github.com; tests point them at a stand-in. */
export function githubLogin({ clientId, clientSecret, web = 'https://github.com', api = 'https://api.github.com' }) {
  return {
    authorizeURL: ({ state, redirectURI }) => `${web}/login/oauth/authorize?${new URLSearchParams({ client_id: clientId, redirect_uri: redirectURI, state, scope: '', allow_signup: 'true' })}`,
    /** Exchanges the callback's code for the user's identity { id, login, name, avatar }. */
    async identify({ code, redirectURI }) {
      const response = await fetch(`${web}/login/oauth/access_token`, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code, redirect_uri: redirectURI }),
      });
      const token = await response.json().catch(() => ({}));
      if (!response.ok || !token.access_token) throw new GitHubError(401, `GitHub login failed: ${token.error_description ?? token.error ?? response.status}`);
      const user = await fetch(`${api}/user`, { headers: { Accept: 'application/vnd.github+json', Authorization: `Bearer ${token.access_token}`, 'User-Agent': 'banana-editor' } });
      if (!user.ok) throw new GitHubError(401, `GitHub login failed: /user ${user.status}`);
      const { id, login, name, avatar_url: avatar } = await user.json();
      return { id, login, name: name || login, avatar };
    },
  };
}

/**
 * The site repository, through the bot's token. repo is "owner/name"; base is the branch
 * pull requests target. Each user edits a page on one branch, edit/<login>/<hash of path>,
 * so a second submission of the same page updates the user's open pull request.
 */
export function githubRepository({ token, repo, base = 'main', api = 'https://api.github.com' }) {
  const [owner] = repo.split('/');
  const segments = path => path.split('/').map(encodeURIComponent).join('/');
  async function request(method, path, body) {
    const response = await fetch(`${api}/repos/${repo}${path}`, {
      method,
      headers: {
        Accept: 'application/vnd.github+json', Authorization: `Bearer ${token}`, 'X-GitHub-Api-Version': '2022-11-28',
        'User-Agent': 'banana-editor', ...(body ? { 'Content-Type': 'application/json' } : {}),
      },
      body: body ? JSON.stringify(body) : undefined,
    });
    const result = response.status === 204 ? undefined : await response.json().catch(() => undefined);
    if (!response.ok) throw new GitHubError(response.status, `GitHub ${method} ${path}: ${response.status} ${result?.message ?? ''}`.trim());
    return result;
  }
  const pathHash = path => createHash('sha1').update(path).digest('hex').slice(0, 12);
  const branchFor = (login, path) => `edit/${login}/${pathHash(path)}`;

  /** The file on a branch: { text, blob }, or undefined when it does not exist there. */
  async function readFile(path, ref) {
    try {
      const file = await request('GET', `/contents/${segments(path)}?ref=${encodeURIComponent(ref)}`);
      if (Array.isArray(file) || file.type !== 'file') throw new GitHubError(409, `${path} is not a file on ${ref}`);
      return { text: Buffer.from(file.content, 'base64').toString('utf8'), blob: file.sha };
    } catch (error) {
      if (error.status === 404) return;
      throw error;
    }
  }

  /**
   * The open pull requests the editor opened for a page, by anyone: [{ number, url, branch, author, title }], oldest
   * first. They are the ones from edit/<login>/<hash of path> in the repository itself.
   */
  async function pagePullRequests(path) {
    const suffix = `/${pathHash(path)}`;
    const found = [];
    for (let page = 1; page <= 10; page++) {
      const pulls = await request('GET', `/pulls?state=open&sort=created&direction=asc&per_page=100&page=${page}`);
      for (const pull of pulls) {
        const ref = pull.head?.ref ?? '';
        if (pull.head?.repo?.full_name?.toLowerCase() !== repo.toLowerCase() || !ref.startsWith('edit/') || !ref.endsWith(suffix)) continue;
        const author = ref.slice('edit/'.length, -suffix.length);
        if (/^[A-Za-z0-9-]+$/.test(author)) found.push({ number: pull.number, url: pull.html_url, branch: ref, author, title: pull.title });
      }
      if (pulls.length < 100) break;
    }
    return found;
  }

  /** The user's open pull request for a page: { number, url, branch }, or undefined. */
  async function openPullRequest(login, path) {
    const branch = branchFor(login, path);
    const [pull] = await request('GET', `/pulls?state=open&head=${encodeURIComponent(`${owner}:${branch}`)}`);
    return pull && { number: pull.number, url: pull.html_url, branch };
  }

  /**
   * Commits text to path for user { id, login, name } and opens (or updates) their pull request, or, with
   * target (a pull request number), adds to that pull request of the page, whoever opened it (410 when it is
   * no longer open). original is the blob id the edit started from (null for a new page): when the file has
   * changed since, nothing is written and a 409 error carries the current { text, blob }. body(number) is the
   * new pull request's description. Returns { number, url, updated, blob, author }.
   */
  async function submit({ user, path, text, original, message, title, body, target }) {
    let pull;
    if (target === undefined) pull = await openPullRequest(user.login, path);
    else {
      pull = (await pagePullRequests(path)).find(candidate => candidate.number === target);
      if (!pull) throw new GitHubError(410, `pull request #${target} is no longer open`);
    }
    const branch = pull?.branch ?? branchFor(user.login, path);
    const from = pull ? branch : base;
    const current = await readFile(path, from);
    if ((current?.blob ?? null) !== original) {
      throw Object.assign(new GitHubError(409, pull ? 'the page changed in your pull request since you opened it' : `the page changed on ${base} since you opened it`), { current: current ?? null });
    }
    if (!pull) {
      const { object: { sha } } = await request('GET', `/git/ref/heads/${segments(base)}`);
      // A branch left from a merged or closed pull request starts over from the base.
      try { await request('POST', '/git/refs', { ref: `refs/heads/${branch}`, sha }); }
      catch (error) {
        if (error.status !== 422) throw error;
        await request('PATCH', `/git/refs/heads/${segments(branch)}`, { sha, force: true });
      }
    }
    const written = await request('PUT', `/contents/${segments(path)}`, {
      message, branch, content: Buffer.from(text).toString('base64'), ...(current ? { sha: current.blob } : {}),
      author: { name: user.name, email: `${user.id}+${user.login}@users.noreply.github.com` },
    });
    let result = pull;
    if (!result) {
      // The description links back to the editor with the pull request's number, known once it exists.
      const created = await request('POST', '/pulls', { title, head: branch, base, body: body(), maintainer_can_modify: true });
      result = { number: created.number, url: created.html_url, author: user.login };
      await request('PATCH', `/pulls/${created.number}`, { body: body(created.number) })
        .catch(error => console.error(`[editor-api] ${error.message}`));
    }
    return { number: result.number, url: result.url, updated: Boolean(pull), blob: written.content.sha, author: result.author ?? user.login };
  }

  /** A comment on a pull request (failures are only logged: the commit is what matters). */
  async function comment(number, text) {
    await request('POST', `/issues/${number}/comments`, { body: text }).catch(error => console.error(`[editor-api] ${error.message}`));
  }
  return { readFile, openPullRequest, pagePullRequests, submit, comment, repo, base };
}
