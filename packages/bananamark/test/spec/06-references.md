# Cross-references

`@label` and `{@label}` refer to targets in the page (headings, environments, formulas, list items, bibliography entries); `@-label` shows the number alone; `[text](@label)` refers with text of its own. A reference may point further down the page. Punctuation at a label's end is not part of it.

References to environments; punctuation is not part of the label.

```````````````````````````````` example
见 @thm:a，以及 {@thm:a}。

::: theorem {@thm:a}
甲
:::
.
<p>见<a href="#thm:a">定理 1</a>，以及<a href="#thm:a">定理 1</a>。</p>
<div class="bm-env bm-envgroup-theorem bm-env-theorem" id="thm:a"><p class="bm-envtitle">定理 1</p><div class="bm-envcontent">
<p>甲</p>
</div>
</div>
````````````````````````````````

The number alone.

```````````````````````````````` example
式 (@-eq:x)

```math {@eq:x}
x
```
.
<p>式 (<a href="#eq:x">1</a>)</p>
<span id="eq:x" class="bm-math-rendered bm-math-display" data-tex="x
\tag{1}" data-display="true">…</span>
````````````````````````````````

Text of its own.

```````````````````````````````` example
[上述定理](@thm:a)

::: theorem {@thm:a}
甲
:::
.
<p><a href="#thm:a">上述定理</a></p>
<div class="bm-env bm-envgroup-theorem bm-env-theorem" id="thm:a"><p class="bm-envtitle">定理 1</p><div class="bm-envcontent">
<p>甲</p>
</div>
</div>
````````````````````````````````

An unnumbered environment with a title is referred to as "Kind (Title)".

```````````````````````````````` example
@r

::: remark* [寄语] {@r}
甲
:::
.
<p><a href="#r">注（寄语）</a></p>
<div class="bm-env bm-envgroup-remark bm-env-remark" id="r"><p class="bm-envtitle">注（寄语）</p><div class="bm-envcontent">
<p>甲</p>
</div>
</div>
````````````````````````````````

An @ in an e-mail address or a URL is not a reference.

```````````````````````````````` example
a@example.org
.
<p><a href="mailto:a@example.org">a@example.org</a></p>
````````````````````````````````

A reference to a label that does not exist is an error.

```````````````````````````````` example
见 @nowhere。
.
!error label_missing {"name":"nowhere"}
````````````````````````````````

A repeated label is an error.

```````````````````````````````` example
::: theorem {@a}
甲
:::

::: lemma {@a}
乙
:::
.
!error label_duplicate {"name":"a","line":1}
````````````````````````````````
