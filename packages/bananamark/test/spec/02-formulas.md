# Formulas

`$…$` and `\(…\)` are inline formulas, `$$…$$` and `\[…\]` display formulas; Markdown is not read inside formulas. KaTeX renders them; `data-tex` holds the TeX. Closing punctuation right after an inline formula is kept with the formula's last box (`span.bm-math-end`), so that a line does not start with it.

Inline formulas.

```````````````````````````````` example
设 $x^2$ 与 \(y_1\)。
.
<p>设 <span class="bm-math-rendered" data-tex="x^2" data-display="false">…</span> 与 <span class="bm-math-rendered" data-tex="y_1" data-display="false">…<span class="bm-math-end">…。</span></span></p>
````````````````````````````````

Closing punctuation right after an inline formula goes with KaTeX's last box (`katex-base`, between which lines may break) into `span.bm-math-end`, in a `.katex` of its own; the punctuation is outside it, in the text's font. The stylesheet makes `bm-math-end` one box on one line. A hyphen goes the same way, whatever follows it (`$p$-adic`): the line breaks after it. Not punctuation inside a word (`’s`).

```````````````````````````````` example
设 $a = b + c$，则 $x$）。$n$’s 不是，$A$-模与 $p$-adic 是。
.
<p>设 <span class="bm-math-rendered" data-tex="a = b + c" data-display="false">…<span class="bm-math-end">…，</span></span>则 <span class="bm-math-rendered" data-tex="x" data-display="false">…<span class="bm-math-end">…）。</span></span><span class="bm-math-rendered" data-tex="n" data-display="false">…</span>’s 不是，<span class="bm-math-rendered" data-tex="A" data-display="false">…<span class="bm-math-end">…-</span></span>模与 <span class="bm-math-rendered" data-tex="p" data-display="false">…<span class="bm-math-end">…-</span></span>adic 是。</p>
````````````````````````````````

Markdown and wiki links are not read inside formulas.

```````````````````````````````` example
$a_*b_* [[不是链接]]$
.
<p><span class="bm-math-rendered" data-tex="a_*b_* [[不是链接]]" data-display="false">…</span></p>
````````````````````````````````

A display formula splits its paragraph.

```````````````````````````````` example
前文
$$x + y$$
后文
.
<p>前文</p>
<span class="bm-math-rendered bm-math-display" data-tex="x + y" data-display="true">…</span>
<p>后文</p>
````````````````````````````````

`\[…\]` can span lines.

```````````````````````````````` example
\[
  a
  = b
\]
.
<span class="bm-math-rendered bm-math-display" data-tex="a
= b" data-display="true">…</span>
````````````````````````````````

A display formula written inside emphasis is shown inline.

```````````````````````````````` example
*定义 \[x\] 结束*
.
<p><em>定义 <span class="bm-math-rendered" data-tex="x" data-display="false">…</span> 结束</em></p>
````````````````````````````````

A literal dollar sign is written `\$`.

```````````````````````````````` example
价格 \$5 与 \$6
.
<p>价格 $5 与 $6</p>
````````````````````````````````
`$` in code is text.

```````````````````````````````` example
`$x$` 与 $x$
.
<p><code>$x$</code> 与 <span class="bm-math-rendered" data-tex="x" data-display="false">…</span></p>
````````````````````````````````

A formula that does not close is an error.

```````````````````````````````` example
这里 $x 没有闭合
.
!error formula_unclosed {"formula":"$x 没有闭合"}
````````````````````````````````
