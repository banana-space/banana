# Numbering and the page's label

The page option `numbering` changes how sections, theorems and formulas are numbered (the format: see the package's README, Numbering).

Numbered down to `###` headings; theorems numbered through the page (`depth: 0`); formulas without the section's number.

```````````````````````````````` example {"numbering": {"headings": {"depth": 2}, "theorems": {"depth": 0}, "equations": {"prefix": false, "depth": 0}}}
## 甲

### 乙

::: theorem
一
:::

## 丙

::: lemma
二
:::

```math {@eq:a}
x
```

见 @eq:a。
.
<h2 id="甲"><a class="bm-heading-link" href="#%E7%94%B2" title="链接到本节">§</a><span class="bm-section-number">1</span> 甲</h2>
<h3 id="乙"><a class="bm-heading-link" href="#%E4%B9%99" title="链接到本节">§</a><span class="bm-section-number">1.1</span> 乙</h3>
<div class="bm-env bm-envgroup-theorem bm-env-theorem"><p class="bm-envtitle">定理 1</p><div class="bm-envcontent">
<p>一</p>
</div>
</div>
<h2 id="丙"><a class="bm-heading-link" href="#%E4%B8%99" title="链接到本节">§</a><span class="bm-section-number">2</span> 丙</h2>
<div class="bm-env bm-envgroup-theorem bm-env-lemma"><p class="bm-envtitle">引理 2</p><div class="bm-envcontent">
<p>二</p>
</div>
</div>
<span id="eq:a" class="bm-math-rendered bm-math-display" data-tex="x
\tag{1}" data-display="true">…</span>
<p>见 <a href="#eq:a">(1)</a>。</p>
````````````````````````````````

With the page's `key` and `title`, a `{@label}` alone on the body's first line is the page's own label, and a reference to it shows the page's title (its number, when the page has one).

```````````````````````````````` example {"key": "p", "title": "群论"}
{@page}

见 @page。
.
<p>见<a href="#page-title">群论</a>。</p>
````````````````````````````````
