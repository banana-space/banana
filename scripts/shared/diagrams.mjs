import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { tikz } from 'bananamark-tikz';

const root = fileURLToPath(new URL('../../', import.meta.url));

/**
 * The site's TikZ diagrams (bananamark-tikz) for an output directory: compiled diagrams kept in .build/tikz-cache/
 * (shared by every build in this checkout; deploy/deploy.sh copies it to the API's checkout), fonts in
 * <output>/fonts/tikzjax/. options: as tikz()'s (timeout, totalTimeout, workerIdleTimeout).
 */
export const siteDiagrams = (output, options = {}) => tikz({
  cache: join(root, '.build/tikz-cache'), fonts: { directory: join(output, 'fonts/tikzjax') }, locale: 'zh-cn', ...options,
});
