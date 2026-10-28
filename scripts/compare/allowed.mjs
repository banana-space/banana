/**
 * Differences between the two builds that are allowed, each with its reason (docs/compare.md). Each entry rewrites
 * both sides' text before they are compared, so that only this difference disappears; it should be as narrow as it
 * can be.
 *
 * { reason: '为什么允许这个差异', normalize: (path, text) => text }
 *
 * path is the file's path in public/, or "search:<url>" for a page's search document.
 */
export const allowed = [
  {
    reason: '样式与脚本的文件名中的指纹与完整性校验值：它们的内容一变，每个页面都随之改变；文件本身按去掉指纹的名字比较',
    normalize: (path, text) => text.replace(/\.[0-9a-f]{64}\.(css|js|json)/g, '.FINGERPRINT.$1').replace(/integrity="sha256-[^"]*"/g, 'integrity="sha256-"'),
  },
];

/** The name a file is compared under: fingerprinted assets under one name each. */
export const allowedPath = path => path.replace(/\.[0-9a-f]{64}\.(css|js|json)$/, '.FINGERPRINT.$1');
