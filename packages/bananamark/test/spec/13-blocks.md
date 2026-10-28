# Other blocks

Tables, footnotes, quotations, rules and code blocks. Code blocks are highlighted by language (lezer grammars; every language has the same `bm-hl-…` classes, and `data-highlight` gives the language); a language with no grammar is written as it is, or by the hook `renderCodeBlock`. ` ```tikz ` is a TikZ diagram, written as an empty span holding its source, compiled apart.

Tables and alignment.

```````````````````````````````` example
| 甲 | 乙 |
|:-:|--:|
| 1 | 2 |
.
<table>
<thead>
<tr>
<th style="text-align: center">甲</th>
<th style="text-align: right">乙</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center">1</td>
<td style="text-align: right">2</td>
</tr>
</tbody>
</table>
````````````````````````````````

Footnotes.

```````````````````````````````` example
正文[^1]，再引[^1]。

[^1]: 注释。
.
<p>正文<sup id="fnref:1"><a href="#fn:1" class="bm-footnote-ref" role="doc-noteref">1</a></sup>，再引<sup id="fnref1:1"><a href="#fn:1" class="bm-footnote-ref" role="doc-noteref">1</a></sup>。</p>
<div class="bm-footnotes" role="doc-endnotes">
<hr>
<ol>
<li id="fn:1">
<p>注释。&nbsp;<a href="#fnref:1" class="bm-footnote-backref" role="doc-backlink">↩︎</a>&nbsp;<a href="#fnref1:1" class="bm-footnote-backref" role="doc-backlink">↩︎</a></p>
</li>
</ol>
</div>
````````````````````````````````

Quotations and rules.

```````````````````````````````` example
> 引文

---
.
<blockquote>
<p>引文</p>
</blockquote>
<hr>
````````````````````````````````

Code blocks: highlighted in the dialect's own languages (its Markdown, YAML, TeX) and those the caller gives (`codeLanguages`; these examples have `bananamark/languages`, Python among them).

```````````````````````````````` example
```yaml
a: 1
```

```python
print("x")
```
.
<pre class="bm-code-block" data-highlight="yaml"><code><span class="bm-hl-key">a</span><span class="bm-hl-punctuation">:</span> <span class="bm-hl-number">1</span></code></pre>
<pre class="bm-code-block" data-highlight="python"><code><span class="bm-hl-variable">print</span><span class="bm-hl-bracket">(</span><span class="bm-hl-string">"x"</span><span class="bm-hl-bracket">)</span></code></pre>
````````````````````````````````

A language with no grammar, and a code block with no language.

```````````````````````````````` example
```text
a < b
```

```
x
```
.
<pre class="bm-code-block" data-highlight="text"><code>a &lt; b</code></pre>
<pre class="bm-code-block"><code>x</code></pre>
````````````````````````````````

` ```tikz ` is a TikZ diagram: an empty span holding its source, which a plugin compiles; `caption` is the figure's caption.

```````````````````````````````` example
```tikz {caption="图"}
\begin{tikzpicture}\draw (0,0)--(1,1);\end{tikzpicture}
```
.
<figure class="bm-content-figure"><span class="bm-math-rendered bm-math-display bm-tikz-source" data-tex="\begin{tikzpicture}\draw (0,0)--(1,1);\end{tikzpicture}" data-display="true" data-tikz-mode="text"><code class="bm-tikz-code">\begin{tikzpicture}\draw (0,0)--(1,1);\end{tikzpicture}</code></span><figcaption>图</figcaption></figure>
````````````````````````````````
