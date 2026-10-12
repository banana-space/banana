import tikzjax from 'node-tikzjax';
import { JSDOM } from 'jsdom';
import { preambleFor } from './preamble.mjs';

/** Separate the outer equation tag without interpreting diagram syntax. */
export function splitTag(source) {
  let depth = 0, tag, start, end;
  for (let i = 0; i < source.length; i++) {
    if (source[i] === '%') {
      const newline = source.indexOf('\n', i);
      if (newline < 0) break;
      i = newline;
    } else if (source[i] === '\\') {
      const command = source.slice(i).match(/^\\([A-Za-z]+|.)/s);
      if (!command) break;
      if (command[1] === 'tag' && depth === 0) {
        if (tag !== undefined) throw new Error('Only one outer equation tag is supported');
        start = i;
        let p = i + command[0].length;
        const star = source[p] === '*';
        if (star) p++;
        while (/\s/.test(source[p] ?? '') && p < source.length) p++;
        if (source[p] !== '{') throw new Error('Equation tag requires a braced argument');
        const valueStart = ++p;
        let nested = 1;
        for (; p < source.length && nested; p++) {
          if (source[p] === '\\') p++;
          else if (source[p] === '{') nested++;
          else if (source[p] === '}') nested--;
        }
        if (nested) throw new Error('Unclosed equation tag');
        const value = source.slice(valueStart, p - 1);
        tag = star ? value : `(${value})`;
        end = p;
        i = p - 1;
      } else i += command[0].length - 1;
    } else if (source[i] === '{') depth++;
    else if (source[i] === '}') depth--;
  }
  return { tex: tag === undefined ? source : source.slice(0, start) + source.slice(end), tag };
}

async function compileBox(tex, display, mode) {
  const math = tex.trim().replace(/\n[ \t]*\n/g, '\n');
  const body = mode === 'text' ? tex + '\n' : `$${display ? '\\displaystyle' : '\\textstyle'} ${math}\n$`;
  // The outer picture retains surrounding maths, multiple inner pictures and
  // native TeX delimiters. Box metrics give inline SVG its true math baseline.
  // No whitespace outside the outer picture: standalone would include it in
  // the page width, shrinking every glyph when fitted to the formula box.
  const source = String.raw`\begin{document}\newbox\BananaFormulaBox\setbox\BananaFormulaBox=\hbox{`
    + body + String.raw`}\begin{tikzpicture}[baseline=0pt]\node[anchor=base,inner sep=0pt,outer sep=0pt,minimum size=0pt] at (0,0) {\special{dvisvgm:raw <!--banana-box:\the\wd\BananaFormulaBox,\the\ht\BananaFormulaBox,\the\dp\BananaFormulaBox-->}\copy\BananaFormulaBox};\end{tikzpicture}\end{document}`;
  const raw = await tikzjax.default(source, {
    texPackages: { 'tikz-cd': '', amsmath: '', amssymb: '', array: '' },
    addToPreamble: '\\nonstopmode\n' + preambleFor(tex) + '\n',
    disableOptimize: true,
    showConsole: true,
  });
  const metrics = raw.match(/<!--banana-box:([\d.]+)pt,([\d.]+)pt,([\d.]+)pt-->/);
  if (!metrics) throw new Error('TeX did not return formula box metrics');
  const document = new JSDOM(raw, { contentType: 'image/svg+xml' }).window.document;
  const svg = document.documentElement;
  const fonts = new Set();
  for (const text of svg.querySelectorAll('text')) {
    if (text.classList.contains('tikz-glyph')) {
      const [, code, letter] = text.textContent.match(/^banana-(?:glyph-(\d+)|letter-([A-Za-z]))$/) ?? [];
      if (!code && !letter) throw new Error('Invalid glyph marker');
      text.textContent = letter ?? String.fromCodePoint(Number(code));
      text.removeAttribute('class');
    } else if (text.classList.contains('tikz-cjk')) {
      const code = text.textContent.match(/^banana-cjk-(\d+)$/)?.[1];
      if (!code) throw new Error('Invalid CJK text marker');
      text.textContent = String.fromCodePoint(Number(code));
      if (/^b/.test(text.getAttribute('data-series') ?? '')) text.setAttribute('font-weight', 'bold');
      if (/^(it|sl)$/.test(text.getAttribute('data-shape') ?? '')) text.setAttribute('font-style', 'italic');
      text.removeAttribute('data-series');
      text.removeAttribute('data-shape');
    } else {
      const font = text.getAttribute('font-family');
      if (font && /^[a-z][a-z0-9]*$/.test(font)) {
        fonts.add(font);
        text.setAttribute('font-family', `tikzjax-${font}`);
      }
    }
  }
  // A separate SVG text element for each Han glyph would put line breaks in
  // copied words. Join adjacent glyphs that TeX placed on the same baseline.
  for (const text of svg.querySelectorAll('text.tikz-cjk')) {
    if (!text.parentNode) continue;
    let next = text.nextElementSibling;
    while (next?.matches('text.tikz-cjk')) {
      const size = Number(text.getAttribute('font-size'));
      const count = [...text.textContent].length;
      const expectedX = Number(text.getAttribute('x')) + size * count;
      const sameStyle = ['y', 'font-size', 'font-weight', 'font-style', 'transform', 'fill']
        .every(name => text.getAttribute(name) === next.getAttribute(name));
      if (!sameStyle || Math.abs(Number(next.getAttribute('x')) - expectedX) > .001) break;
      text.textContent += next.textContent;
      next.remove();
      next = text.nextElementSibling;
    }
    text.setAttribute('textLength', String(Number(text.getAttribute('font-size')) * [...text.textContent].length));
    text.setAttribute('lengthAdjust', 'spacingAndGlyphs');
  }
  // Raw SVG specials are part of TikZ's driver. Keep the generated drawing,
  // but never turn authored TeX into scripts or external browser resources.
  for (const node of svg.querySelectorAll('script, foreignObject, style, image')) node.remove();
  for (const node of [svg, ...svg.querySelectorAll('*')]) {
    for (const attr of [...node.attributes]) {
      if (/^on/i.test(attr.name) || (/(?:^|:)href$/i.test(attr.name) && !attr.value.startsWith('#'))
        || /(?:javascript:|@import|url\(\s*['"]?(?:https?:|data:|\/\/))/i.test(attr.value)) node.removeAttribute(attr.name);
    }
  }
  const width = Number(metrics[1]), height = Number(metrics[2]) + Number(metrics[3]);
  const depth = Number(metrics[3]);
  // The bundled dvi2html driver uses TeX points (72.27/inch) for drawing
  // positions, but hardcodes a -72 viewport origin. Correct the 0.27pt
  // mismatch so the actual glyph baseline matches our TeX box metrics.
  const viewBox = svg.getAttribute('viewBox').split(/\s+/).map(Number);
  if (viewBox[0] === -72 && viewBox[1] === -72) {
    viewBox[0] = viewBox[1] = -72.27;
    svg.setAttribute('viewBox', viewBox.join(' '));
  }
  svg.setAttribute('width', `${width / 10}em`);
  svg.setAttribute('height', `${height / 10}em`);
  svg.setAttribute('style', `vertical-align: ${-depth / 10}em`);
  svg.setAttribute('class', 'tikz-svg');
  // Remove the private metrics comment after extracting it.
  const walker = document.createTreeWalker(svg, document.defaultView.NodeFilter.SHOW_COMMENT);
  const comments = [];
  while (walker.nextNode()) comments.push(walker.currentNode);
  for (const comment of comments) comment.remove();
  return { svg: svg.outerHTML, fonts: [...fonts], width, height, depth };
}

export async function compileTikz({ tex, display = false, mode = 'math' }) {
  const { tex: body, tag } = mode === 'math' ? splitTag(tex) : { tex };
  const main = await compileBox(body, display, mode);
  if (tag !== undefined) {
    if (!display) throw new Error('Equation tags require display maths');
    const label = await compileBox(tag, false, 'math');
    main.tagSvg = label.svg;
    main.tagWidth = label.width;
    main.fonts = [...new Set([...main.fonts, ...label.fonts])];
  }
  return main;
}
