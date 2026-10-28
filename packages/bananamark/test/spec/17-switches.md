# Switches of the dialect

Wiki links, bibliographies and TikZ are each on only when the dialect says so (`wikiLinks`, `bibliography`, `tikz`, see the package's README, The dialect); bananamark's default is off. The examples' site has them all on; an example turns one off with its options.

Wiki links off: `[[…]]` is text.

```````````````````````````````` example {"wikiLinks": false}
见 [[群]] 与 [[集合|集]]。
.
<p>见 [[群]] 与 [[集合|集]]。</p>
````````````````````````````````

Bibliographies off: a `bibliography` block is an ordinary code block, and `@key` is a reference to a label like any other.

```````````````````````````````` example {"bibliography": false}
```bibliography
smith: {type: book, title: T, author: Smith, year: 2020}
```
.
<pre class="bm-code-block" data-highlight="bibliography"><code><span class="bm-hl-key">smith</span><span class="bm-hl-punctuation">:</span> <span class="bm-hl-bracket">{</span><span class="bm-hl-key">type</span><span class="bm-hl-punctuation">:</span> <span class="bm-hl-yaml-value">book</span><span class="bm-hl-punctuation">,</span> <span class="bm-hl-key">title</span><span class="bm-hl-punctuation">:</span> <span class="bm-hl-yaml-value">T</span><span class="bm-hl-punctuation">,</span> <span class="bm-hl-key">author</span><span class="bm-hl-punctuation">:</span> <span class="bm-hl-yaml-value">Smith</span><span class="bm-hl-punctuation">,</span> <span class="bm-hl-key">year</span><span class="bm-hl-punctuation">:</span> <span class="bm-hl-number">2020</span><span class="bm-hl-bracket">}</span></code></pre>
````````````````````````````````

TikZ off: a `tikz` block is an ordinary code block (highlighted as TeX).

```````````````````````````````` example {"tikz": false}
```tikz
\draw (0,0) -- (1,1);
```
.
<pre class="bm-code-block" data-highlight="tikz"><code><span class="bm-hl-command">\draw</span> <span class="bm-hl-bracket">(</span>0,0<span class="bm-hl-bracket">)</span> -- <span class="bm-hl-bracket">(</span>1,1<span class="bm-hl-bracket">)</span>;</code></pre>
````````````````````````````````

TikZ off: a `tikzcd` environment in a formula goes to KaTeX, which cannot render it.

```````````````````````````````` example {"tikz": false}
$$\begin{tikzcd} A \arrow[r] & B \end{tikzcd}$$
.
!error katex {"message":"No such environment: tikzcd at position 7: \\begin{̲t̲i̲k̲z̲c̲d̲}̲ A \\arrow[r] & …"}
````````````````````````````````
