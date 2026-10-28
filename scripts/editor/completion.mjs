// Completion in the online editor (assets/js/editor/main.js): bananamark-codemirror's, with the site's settings
// (its environments, its data blocks and HTML-style tags, the entries and languages), and one source of the site's
// own: in the front matter's categories, a category. Entry names, categories, environments and language names come
// from a file the build writes (scripts/site/templates/special.mjs), fetched the first time they are needed.
import { defaultEnvironments } from 'bananamark/rules';
import { afterComposition as afterLink, completionSources as dialectSources } from 'bananamark-codemirror';
import { dataBlockNames, tagRules } from '../shared/syntax-rules.mjs';

// The words the package does not have: the site's tags, their parameters and its data blocks (the editor's strings).
const siteWords = ['completion_tag_see', 'completion_tag_problems', 'completion_tag_disambiguation', 'completion_tag_tip',
  'completion_tag_person', 'completion_parameter_original', 'completion_parameter_lang',
  'completion_parameter_translit', 'completion_parameter_ipa', 'completion_parameter_years', 'completion_terms'];

/**
 * The completion sources, for autocompletion({ override }). namesURL: the build's file of names; text(key):
 * the editor's strings; otherLabels(): the labels of the book's other pages ({ name, text, page }).
 */
export function completionSources(namesURL, text, otherLabels = () => []) {
  let names;
  const loadNames = () => names ??= fetch(namesURL).then(response => response.json()).catch(() => { names = undefined; return null; });
  const field = read => async () => { const data = await loadNames(); return data ? read(data) : null; };

  /** A category: in the front matter, after "categories:" (a flow list) or in its block list. */
  async function categories(context) {
    if (context.view?.composing) return null;
    const { state, pos } = context;
    const doc = state.doc, line = doc.lineAt(pos);
    if (doc.line(1).text !== '---') return null;
    let close = 0;
    for (let n = 2; n <= Math.min(doc.lines, 200); n++) if (doc.line(n).text === '---') { close = n; break; }
    if (!close || line.number >= close || line.number < 2) return null;
    const before = line.text.slice(0, pos - line.from);
    let match = before.match(/^categories:\s*\[(?:[^\]]*,)?\s*([^,\]]*)$/);
    if (!match) {
      // A block list item, under the categories key.
      match = before.match(/^\s+-\s+(.*)$/);
      if (match) {
        let key;
        for (let n = line.number - 1; n > 1 && !key; n--) key = doc.line(n).text.match(/^([\w-]+):/)?.[1];
        if (key !== 'categories') match = null;
      }
    }
    if (!match || !match[1]) return null;
    const data = await loadNames();
    if (!data) return null;
    return { from: pos - match[1].length, options: data.categories.map(name => ({ label: name, type: 'category' })), validFor: /^[^,\]\n]+$/ };
  }

  return [
    categories,
    ...dialectSources({
      // data/theorems.yaml as the names file lists it: [{ name, label }], the label the Chinese name.
      // Only the site's (bananamark's others false).
      environments: field(data => ({
        ...Object.fromEntries(Object.keys(defaultEnvironments).map(kind => [kind, false])),
        ...Object.fromEntries(data.environments.map(({ name, label }) => [name, { name: label }])),
      })),
      dataBlocks: dataBlockNames,
      tags: tagRules,
      // As the site's dialect (scripts/shared/syntax.mjs).
      tikz: true,
      wikiLinks: true,
      bibliography: true,
      entries: field(data => data.entries),
      languages: field(data => data.languages),
      otherLabels,
      locale: 'zh-cn',
      messages: { 'zh-cn': Object.fromEntries(siteWords.map(key => [key, text(key)])) },
    }),
  ];
}

/**
 * Whether completion should start once an input method has committed its text (sources offer nothing while it
 * composes): in a link's target or a category, where names are typed in Chinese.
 */
export function afterComposition(state) {
  const pos = state.selection.main.head, line = state.doc.lineAt(pos), before = line.text.slice(0, pos - line.from);
  return afterLink(state) || /^(?:categories:\s*\[.*|\s+-\s+.+)$/.test(before);
}
