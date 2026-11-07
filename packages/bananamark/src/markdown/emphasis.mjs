import { MARK_CLOSE } from '../syntax/source-lines.mjs';

// The dialect's emphasis: a run of "*" (any number: *…*, **…**, ***…***) opens unless a space follows it, and closes
// unless a space comes before it (a line's start and end count as spaces). So emphasis and bold may stand against
// letters, links, formulas and punctuation, as in 文字*（注）*文字, a**(b)**c and text**[[link]]**text, where
// CommonMark's flanking rules would leave the stars as text. Runs are then paired as CommonMark pairs them (the
// nearest opening before a closing, and its rule of three); a run with no partner stays as written. "_" is
// CommonMark's. The editor's grammar reads runs the same way (../highlight/grammar.mjs, emphasisRun).

const star = 0x2a;
/**
 * markdown-it with the dialect's emphasis: its inline state's scanDelims, for "*" runs. A source-line mark (the
 * editor's preview, ../syntax/source-lines.mjs) stands where a line starts, and counts as a space.
 */
export function dialectEmphasis(md) {
  const { isWhiteSpace } = md.utils;
  const space = code => isWhiteSpace(code) || code === MARK_CLOSE.charCodeAt(0);
  md.inline.State = class extends md.inline.State {
    scanDelims(start, canSplitWord) {
      const scanned = super.scanDelims(start, canSplitWord);
      if (this.src.charCodeAt(start) !== star) return scanned;
      const end = start + scanned.length;
      const before = start > 0 ? this.src.charCodeAt(start - 1) : 0x20, after = end < this.posMax ? this.src.charCodeAt(end) : 0x20;
      return { ...scanned, can_open: !space(after), can_close: !space(before) };
    }
  };
}
