# Sections

`##` headings are numbered, and not when they end with `*`; `{@label}` declares a label, and a reference to it reads "Section N" (第 N 节 on Chinese pages); an unnumbered heading is referred to by its text. Heading ids come from the text: formulas as text, accents and formatting punctuation removed, spaces as `-`; a repeated id gets a suffix.

Numbered and unnumbered headings.

```````````````````````````````` example
## 定义

## 参考文献*

### 小节
.
<h2 id="定义"><a class="bm-heading-link" href="#%E5%AE%9A%E4%B9%89" title="链接到本节">§</a><span class="bm-section-number">1</span> 定义</h2>
<h2 id="参考文献"><a class="bm-heading-link" href="#%E5%8F%82%E8%80%83%E6%96%87%E7%8C%AE" title="链接到本节">§</a>参考文献</h2>
<h3 id="小节"><a class="bm-heading-link" href="#%E5%B0%8F%E8%8A%82" title="链接到本节">§</a>小节</h3>
````````````````````````````````

References to headings.

```````````````````````````````` example
## 定义 {@sec:def}

### 细节 {@sub}

见 @sec:def 与 @sub。
.
<h2 id="定义"><a class="bm-heading-link" href="#%E5%AE%9A%E4%B9%89" title="链接到本节">§</a><span class="bm-section-number">1</span> 定义</h2>
<h3 id="细节"><a class="bm-heading-link" href="#%E7%BB%86%E8%8A%82" title="链接到本节">§</a>细节</h3>
<p>见<a href="#%E5%AE%9A%E4%B9%89">第 1 节</a>与<a href="#%E7%BB%86%E8%8A%82">细节</a>。</p>
````````````````````````````````

Heading ids: formulas, accents and repetition.

```````````````````````````````` example
## Gödel 定理与 $\infty$

## 例子

## 例子
.
<h2 id="godel-定理与-∞"><a class="bm-heading-link" href="#godel-%E5%AE%9A%E7%90%86%E4%B8%8E-%E2%88%9E" title="链接到本节">§</a><span class="bm-section-number">1</span> Gödel 定理与 <span class="bm-math-rendered" data-tex="\infty" data-display="false">…</span></h2>
<h2 id="例子"><a class="bm-heading-link" href="#%E4%BE%8B%E5%AD%90" title="链接到本节">§</a><span class="bm-section-number">2</span> 例子</h2>
<h2 id="例子-1"><a class="bm-heading-link" href="#%E4%BE%8B%E5%AD%90-1" title="链接到本节">§</a><span class="bm-section-number">3</span> 例子</h2>
````````````````````````````````

Links and formulas in headings are rendered as usual.

```````````````````````````````` example
## [[群]]与 $G$
.
<h2 id="群与-g"><a class="bm-heading-link" href="#%E7%BE%A4%E4%B8%8E-g" title="链接到本节">§</a><span class="bm-section-number">1</span> <a href="/wiki/%E7%BE%A4/" class="bm-wiki-link">群</a>与 <span class="bm-math-rendered" data-tex="G" data-display="false">…</span></h2>
````````````````````````````````

A literal asterisk is written `\*`.

```````````````````````````````` example
## 星号\*
.
<h2 id="星号"><a class="bm-heading-link" href="#%E6%98%9F%E5%8F%B7" title="链接到本节">§</a><span class="bm-section-number">1</span> 星号*</h2>
````````````````````````````````
