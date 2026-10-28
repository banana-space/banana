import { withLocale } from 'bananamark/messages';
import * as numbers from 'bananamark/internal/numbering.mjs';

export { defaultNumbering } from 'bananamark/internal/numbering.mjs';

// bananamark's helpers the site calls directly (numbering): outside bananamark's entry points they would report
// errors in its default language, English; the site's are in Chinese.
const inChinese = read => (...args) => withLocale('zh-cn', 'zh-cn', () => read(...args));
export const numbering = inChinese(numbers.numbering);
export const nextNumber = inChinese(numbers.nextNumber);
