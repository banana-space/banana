// Build-only rules. Prebuild uses them for lookup keys/IDs, postbuild for display.
// Only ASCII layout whitespace is mutable; every other space is author data.
const ordinary = /^[ \t\r\n]+$/;
const segmenter = new Intl.Segmenter(undefined, { granularity: 'grapheme' });
const characters = text => Array.from(segmenter.segment(text), entry => entry.segment);
const han = /\p{Script=Han}/u;
const western = /[\p{L}\p{N}]/u;
const eastAsian = /[\p{Script=Han}\p{Script=Hangul}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Bopomofo}]/u;
const westernLetter = char => western.test(char) && !eastAsian.test(char);
const opening = /[\p{Ps}\p{Pi}]/u;
const closing = /[\p{Pe}\p{Pf}]/u;
const punctuation = /\p{P}/u;
// Chinese punctuation blocks plus the Chinese dash and ellipsis. Shared
// Western quotation marks ‘ ’ “ ” deliberately keep their separate rules.
const chinesePunctuation = char => punctuation.test(char) && /[\u3001-\u303f\uff01-\uff65\u2014\u2015\u2026]/u.test(char);
// Hyphens, slashes and mathematical operators are not sentence separators.
const westernPunctuation = char => /^[()[\]{}"'‘’“”,.;:!?]$/.test(char);
const westernStop = /^[,.;:!?]$/;
const chinese = lang => /^zh(?:-|$)/i.test(lang ?? 'zh');
export const trimOrdinary = text => text.replace(/^[ \t\r\n]+|[ \t\r\n]+$/g, '');

/** Normalize editable text tokens around opaque inline atoms. Mutates tokens. */
export function normalizeTokens(tokens, { lang = 'zh', convertChineseFullStop = true, insertSpace } = {}) {
  const records = tokens.flatMap(token => {
    const context = { token, zh: token.enabled !== false && chinese(token.lang ?? lang) };
    if (token.math) return [{ ...context, char: '\ufffc', math: true }];
    return characters(token.text).map(char => ({ ...context, char, before: '', after: '', editable: !token.opaque }));
  });
  let previous;
  const quotes = new Set();
  for (let i = 0; i < records.length; i++) {
    const record = records[i];
    if (record.editable && record.zh && (record.token.convertChineseFullStop ?? convertChineseFullStop) && record.char === '。') record.char = '．';
    // Straight quotes need directional roles; apostrophes within words aren't quotes.
    if (record.char === '"' || record.char === "'") {
      const next = records[i + 1]?.char ?? '';
      const apostrophe = record.char === "'" && westernLetter(previous?.char ?? '')
        && (westernLetter(next) || (!quotes.has("'") && ordinary.test(next)));
      if (!apostrophe) {
        record.close = quotes.has(record.char);
        record.open = !record.close;
        if (record.close) quotes.delete(record.char);
        else quotes.add(record.char);
      }
    } else {
      record.open = opening.test(record.char);
      record.close = closing.test(record.char);
      // Curved apostrophes also occur inside Western words.
      if (record.char === '’' && westernLetter(previous?.char ?? '') && westernLetter(records[i + 1]?.char ?? '')) record.close = false;
    }
    previous = record;
  }
  // One decision for both existing whitespace and missing whitespace:
  // -1: remove ordinary whitespace, 1: use one space, 0: preserve as written.
  function spacing(left, right) {
    if ((left.open && left.zh) || (right.close && right.zh)) return -1;
    const text = record => record.math || westernLetter(record.char) || (record.zh && han.test(record.char));
    if ((left.zh && chinesePunctuation(left.char) && (text(right) || (right.zh && punctuation.test(right.char))))
      || (right.zh && chinesePunctuation(right.char) && (text(left) || (left.zh && punctuation.test(left.char))))) return -1;
    // Sentence punctuation attaches to the preceding text; its following
    // Han boundary still uses one space, as in "汉字, 汉字".
    if (right.zh && westernStop.test(right.char) && (text(left) || (left.zh && left.close))) return -1;
    if ((left.zh && right.zh && han.test(left.char) && han.test(right.char))
      || (left.zh && han.test(left.char) && right.open && !westernPunctuation(right.char))
      || (right.zh && han.test(right.char) && left.close && !westernPunctuation(left.char))) return -1;
    const separate = (left.zh && han.test(left.char) && (right.math || westernLetter(right.char)
        || (westernPunctuation(right.char) && right.open)))
      || (right.zh && han.test(right.char) && (left.math || westernLetter(left.char)
        || (westernPunctuation(left.char) && !left.open)));
    return separate ? 1 : 0;
  }
  for (let i = 0; i < records.length;) {
    if (!ordinary.test(records[i].char)) { i++; continue; }
    const start = i;
    while (i < records.length && ordinary.test(records[i].char)) i++;
    const left = records[start - 1], right = records[i];
    if (!left || !right || records.slice(start, i).some(record => !record.editable)) continue;
    const decision = spacing(left, right);
    if (decision === -1) for (let j = start; j < i; j++) records[j].char = '';
    else if (decision === 1) {
      records[start].char = ' ';
      for (let j = start + 1; j < i; j++) records[j].char = '';
    }
  }
  // Existing special spaces interrupt adjacency and suppress automatic insertion.
  const visible = records.filter(record => record.char);
  for (let i = 1; i < visible.length; i++) {
    const left = visible[i - 1], right = visible[i];
    if (spacing(left, right) !== 1) continue;
    if (left.token !== right.token && insertSpace?.(left.token, right.token)) continue;
    if (left.editable) left.after += ' ';
    else if (right.editable) right.before += ' ';
  }
  for (const token of tokens) if (!token.math && !token.opaque) token.text = '';
  for (const record of records) if (record.editable) record.token.text += record.before + record.char + record.after;
  return tokens;
}

export function normalizeText(text, options) {
  return normalizeTokens([{ text }], options)[0].text;
}

const blocks = new Set('html head body main article section header footer nav div p h1 h2 h3 h4 h5 h6 ul ol li dl dt dd table thead tbody tfoot tr th td blockquote figure figcaption details summary title'.split(' '));
const excluded = new Set('script style pre code textarea svg math template noscript select option button'.split(' '));
const ignoredClasses = new Set(['heading-link', 'section-number', 'toc-section-number', 'item-target', 'item-label']);

/** Normalize rendered HTML through a tree adapter. */
export function normalizeTree(root, adapter, options = {}) {
  let run = [];
  const flush = () => {
    normalizeTokens(run, { ...options, insertSpace: (left, right) => {
      // Across inline elements, put the space between their outer branches.
      // This keeps boundary spaces outside links and their underlines.
      const a = left.path, b = right.path;
      let i = 0;
      while (i < Math.min(a.length, b.length) && a[i] === b[i]) i++;
      if (i === a.length || i === b.length || !i) return false;
      adapter.insertBefore(a[i - 1], b[i], ' ');
      return true;
    } });
    for (const token of run) if (!token.math && !token.opaque) adapter.setText(token.node, token.text);
    run = [];
  };
  function visit(node, context, path) {
    const tag = adapter.tag(node);
    if (!tag) {
      const text = adapter.text(node);
      if (text !== undefined) run.push({ ...context, text, node, path: [...path, node] });
      else for (const child of adapter.children(node)) visit(child, context, [...path, node]);
      return;
    }
    const attr = name => adapter.attr(node, name);
    const classes = new Set((attr('class') ?? '').split(/\s+/));
    const next = { ...context, lang: attr('lang') ?? context.lang };
    // This container and its first paragraph are inline in a proof. Hugo's
    // leading layout newlines would otherwise add a space after the separator.
    const parent = path.at(-1);
    if (classes.has('theorem-content') && parent && adapter.tag(parent)
      && (adapter.attr(parent, 'class') ?? '').split(/\s+/).includes('theorem-proof')) {
      for (const child of adapter.children(node)) {
        const text = adapter.text(child);
        if (text === undefined || !ordinary.test(text)) break;
        adapter.setText(child, '');
      }
    }
    if (attr('data-typography-full-stop') !== undefined) next.convertChineseFullStop = attr('data-typography-full-stop') !== 'false';
    if (attr('data-typography') === 'off') next.enabled = false;
    if (tag === 'br' || tag === 'hr' || attr('data-typography-boundary') === 'true') { flush(); return; }
    // Link icons have no textual boundary; don't break the surrounding run.
    if (tag === 'svg') return;
    if (excluded.has(tag)) { flush(); return; }
    if ([...classes].some(name => ignoredClasses.has(name))) return;
    if (classes.has('math-rendered')) {
      if (attr('data-display') === 'true') flush();
      else run.push({ ...next, math: true, node, path: [...path, node] });
      return;
    }
    if (classes.has('katex-display')) { flush(); return; }
    if (classes.has('katex')) { run.push({ ...next, math: true, node, path: [...path, node] }); return; }
    const block = blocks.has(tag);
    if (block) flush();
    for (const name of ['title', 'alt', 'aria-label']) {
      if (attr(name) !== undefined && next.enabled !== false) adapter.setAttr(node, name, normalizeText(attr(name), next));
    }
    if (tag === 'meta' && /^(?:og:|twitter:)?(?:title|description)$/.test(attr('property') ?? attr('name') ?? '')) {
      adapter.setAttr(node, 'content', normalizeText(attr('content') ?? '', next));
    }
    for (const child of [...adapter.children(node)]) visit(child, next, [...path, node]);
    if (block) flush();
  }
  visit(root, { lang: options.lang ?? 'zh', enabled: true, convertChineseFullStop: options.convertChineseFullStop ?? true }, []);
  flush();
}
