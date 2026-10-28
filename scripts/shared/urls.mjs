import { pathEscape } from 'bananamark';
import { config } from './config.mjs';

/**
 * The site's addresses: its base URL (site.yaml's baseURL; --baseURL or -b on the command line wins, and the build
 * gives every step the same arguments), and addresses below it.
 */

const argument = (() => {
  const args = process.argv.slice(2);
  for (let i = 0; i < args.length; i++) {
    const match = args[i].match(/^(?:--baseURL|-b)(?:=(.*))?$/i);
    if (match) return match[1] ?? args[i + 1];
  }
})();
export let baseURL, basePath;

/** Sets the base URL (a long-running process serving under another address: the preview service). */
export function setBaseURL(address) {
  baseURL = new URL(address);
  basePath = baseURL.pathname.endsWith('/') ? baseURL.pathname : `${baseURL.pathname}/`;
}
setBaseURL(argument ?? config.baseURL);

/** Hugo's relURL: an address below the site root (baseURL's path). */
export const relURL = path => basePath + String(path).replace(/^\//, '');

/** Hugo's absURL: the full address of a path below the site root. */
export const absURL = path => new URL(relURL(path), baseURL).href;

/** A page's address (its RelPermalink) from its URL path (pageURL's: unescaped, with a final slash). */
export const pageHref = url => pathEscape(relURL(url));

/** A page's full address (its Permalink). */
export const pagePermalink = url => `${baseURL.origin}${pageHref(url)}`;
