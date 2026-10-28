import { createHash } from 'node:crypto';

/** A short digest of text or bytes, to tell whether a file's content changed (serve's record of its output). */
export const contentHash = content => createHash('sha1').update(content).digest('base64');
