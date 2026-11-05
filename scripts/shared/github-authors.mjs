// Who wrote a pull request or a commit, by GitHub login, as GitHub itself knows it: a commit's author is the account
// GitHub links to its address (none when the address belongs to no account). Used by the API (recent changes, the
// diff page: scripts/api/recent-changes.mjs) and the build (page history: scripts/prebuild/github-authors.mjs).

/**
 * The online editor opens its pull requests by the bot from edit/<login>/<hash of path> in the repository itself:
 * their author is that login, and the editor can add to them (scripts/api/github.mjs). repo is "owner/name".
 */
export const editorLogin = (pull, repo) => pull.head?.repo?.full_name?.toLowerCase() === repo.toLowerCase()
  && pull.head.ref.match(/^edit\/([A-Za-z0-9-]+)\/[0-9a-f]{12}$/)?.[1] || undefined;

/** A commit's author (GitHub's /commits or /pulls/<n>/commits item) by GitHub login; undefined for a bot or none. */
export const commitLogin = commit => commit.author && commit.author.type !== 'Bot' && !/\[bot\]$/.test(commit.author.login)
  ? commit.author.login : undefined;

/** Logins each once, the first spelling kept (GitHub's logins are case-insensitive). */
export const distinct = logins => logins.filter((login, i, all) => login && all.findIndex(other => other?.toLowerCase() === login.toLowerCase()) === i);

/**
 * Who wrote a pull request (GitHub's /pulls/<n>) with its commits (/pulls/<n>/commits): its author (the editor's user
 * for the editor's), then its commits' authors, each once; bots and commits GitHub links to no account are left out.
 */
export const pullAuthors = (pull, commits, repo) =>
  distinct([editorLogin(pull, repo) ?? (pull.user?.type === 'Bot' ? undefined : pull.user?.login), ...commits.map(commitLogin)]);
