// MathML → readable linear text, e.g. C^n(X; A) = Hom_Z(C_n(X; Z), A). Used for
// text to search (a site's index) and, through math-name.mjs, for plain-text
// names and lookup keys. KaTeX keeps MathML beside its HTML; the TeX annotation is
// ignored because command names (mathbb, to, colon) would match English
// queries, read poorly, and differ between equivalent spellings.

const elements = node => (node.childNodes ?? []).filter(child => child.tagName);
const textContent = node => node.nodeName === '#text' ? node.value : (node.childNodes ?? []).map(textContent).join('');
// Relations, arrows and binary operators read as separate words.
const spaced = /^[=<>≤≥≠≃≅≈≡∼≪≫→←↔⟶⟵⟷⇒⇐⇔⟹⟸⟺↦⟼↪↠↣×⊗⊕⊠⊞∘∈∉∋⊂⊆⊊⊃⊇⊋∪∩∧∨⊔⊓+−±∓⋅∖∣∤∥≺≻⪯⪰⊢⊣⊨≀]$/u;
// Accents and decorations over or under a base are dropped: \bar{X} reads X.
const accent = /^[\u0300-\u036f\u203e\u00af\u02c9^\u02c6~\u02dc\u02d9\u00a8\u2192\u20d7\u02c7\u02d8\u00b4`\u02ca\u02cb_]$|^[\u23de\u23df\u23b4\u23b5\ufe37\ufe38]$/u;

// \mathbb letters with a Basic Multilingual Plane character, which fonts render
// reliably: ℤ, ℝ. Others stay plain letters, like \mathfrak and \mathbf.
const doubleStruck = { C: 'ℂ', H: 'ℍ', N: 'ℕ', P: 'ℙ', Q: 'ℚ', R: 'ℝ', Z: 'ℤ' };

function group(text) {
  const value = text.trim();
  return [...value].length <= 1 || /^\(.*\)$|^\{.*\}$/.test(value) ? value : `{${value}}`;
}

const attribute = (node, name) => node.attrs?.find(item => item.name === name)?.value;
// KaTeX marks \bar, \hat, \vec, \underbrace and similar decorations explicitly.
const decoration = (node, name, script) => attribute(node, name) === 'true' || accent.test(textContent(script).trim());

// Scripts attach to a trimmed base. Operators and operator names (⊗_A, ∑_{i=1}^n,
// lim_{n → ∞}) stay separate words; a multi-word base is braced ({a + b}_n).
function scripted(base, scripts) {
  const value = linear(base), trimmed = value.replace(/\u2061/g, '').trim();
  const operator = base.tagName === 'mo' || /^\s|\s$|\u2061/.test(value) || !trimmed;
  const attached = (/\s/.test(trimmed) ? `{${trimmed}}` : trimmed) + scripts.map(([mark, node]) => {
    const script = linear(node).trim();
    // Primes read as written: x′, f″.
    return mark === '^' && /^[′″‴⁗']+$/.test(script) ? script : mark + group(script);
  }).join('');
  return operator ? ` ${attached} ` : attached;
}

function linear(node) {
  if (node.nodeName === '#text') return node.value;
  const [first, second, third] = elements(node);
  const all = () => elements(node).map(linear).join('');
  switch (node.tagName) {
    case 'annotation': case 'annotation-xml': case 'mphantom': case 'none': return '';
    case 'semantics': return first ? linear(first) : '';
    case 'mi': {
      const value = textContent(node);
      return attribute(node, 'mathvariant') === 'double-struck' ? doubleStruck[value] ?? value : value;
    }
    case 'mn': case 'mtext': case 'ms': return textContent(node);
    case 'mo': {
      const value = textContent(node).trim();
      // Function application (after lim, Hom, sin) marks an operator name; removed at the end.
      if (/^[\u2061-\u2064]$/.test(value)) return value === '\u2061' ? '\u2061' : '';
      if (spaced.test(value)) return ` ${value} `;
      if (/^[,;:]$/.test(value)) return `${value} `;
      return value;
    }
    case 'mspace': return ' ';
    case 'msup': return scripted(first, [['^', second]]);
    case 'msub': return scripted(first, [['_', second]]);
    case 'msubsup': return scripted(first, [['_', second], ['^', third]]);
    case 'mover': return decoration(node, 'accent', second) ? linear(first) : scripted(first, [['^', second]]);
    case 'munder': return decoration(node, 'accentunder', second) ? linear(first) : scripted(first, [['_', second]]);
    case 'munderover': return scripted(first, [['_', second], ['^', third]]);
    case 'mfrac': return group(linear(first)) + '/' + group(linear(second));
    case 'msqrt': return '√' + group(all());
    case 'mroot': return `√[${linear(second).trim()}]` + group(linear(first));
    case 'mtable': return elements(node).map(row => elements(row).map(cell => linear(cell).trim()).join(' ')).join('; ');
    case 'mmultiscripts': return all();
    default: return all();
  }
}

/**
 * Linear text of the first MathML <math> inside a parse5 node, or '' if none.
 * With `compatibility` (the default, for search) the text is NFKC-normalized:
 * ℤ and 𝔽 become Z and F.
 */
export function mathText(node, { compatibility = true } = {}) {
  const find = current => current.tagName === 'math' ? current : elements(current).map(find).find(Boolean);
  const math = find(node);
  if (!math) return '';
  const value = linear(math);
  return (compatibility ? value.normalize('NFKC') : value)
    .replace(/\u2061/g, ' ')
    .replace(/[\u2062-\u2064\u200b]/g, '')
    .replace(/\s+/g, ' ')
    .replace(/([([{]) /g, '$1')
    .replace(/ ([)\]},;])/g, '$1')
    // An operator name keeps its argument list: Hom_Z(A, B), not Hom_Z (A, B).
    .replace(/(\p{L}{2,}(?:_\S+)?) \(/gu, '$1(')
    .trim();
}
