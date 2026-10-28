# Numbered formulas

A ` ```math ` block is a numbered display formula, and `{@label}` declares a label for it; numbers start again at each numbered `##` heading. A `\tag` written by hand is an error.

Numbered formulas and references to them.

```````````````````````````````` example
```math {@eq:a}
x = 1
```

由 @eq:a。
.
<span id="eq:a" class="bm-math-rendered bm-math-display" data-tex="x = 1
\tag{1}" data-display="true">…</span>
<p>由 <a href="#eq:a">(1)</a>。</p>
````````````````````````````````

Under a `##` heading, numbers start with the section's.

```````````````````````````````` example
## 节

```math
y
```
.
<h2 id="节"><a class="bm-heading-link" href="#%E8%8A%82" title="链接到本节">§</a><span class="bm-section-number">1</span> 节</h2>
<span class="bm-math-rendered bm-math-display" data-tex="y
\tag{1.1}" data-display="true">…</span>
````````````````````````````````

A `\tag` written by hand is an error.

```````````````````````````````` example
```math
x \tag{1}
```
.
!error math_manual_tag {}
````````````````````````````````
