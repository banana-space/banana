# Labelled list items

Labels such as `(a)`, `a)`, `(iv)`, `(A1)` and `($\ast$)` can be list markers, and are written at the item's start; a `{@label}` at the item's start lets it be referred to, the reference's text being the label.

A labelled list.

```````````````````````````````` example
(a) 甲
(b) 乙
.
<ol start="0">
<li><span class="bm-item-label" style="--bm-outer: 0"><span>(a)</span></span>甲</li>
<li><span class="bm-item-label" style="--bm-outer: 0"><span>(b)</span></span>乙</li>
</ol>
````````````````````````````````

References to list items.

```````````````````````````````` example
(i) {@first} 甲
(ii) 乙

由 @first。
.
<ol start="0">
<li><span class="bm-item-label" style="--bm-outer: 0"><span>(i)</span></span><span id="first" class="bm-item-target"></span>甲</li>
<li><span class="bm-item-label" style="--bm-outer: 0"><span>(ii)</span></span>乙</li>
</ol>
<p>由 <a href="#first">(i)</a>。</p>
````````````````````````````````

Ordinary ordered and unordered lists.

```````````````````````````````` example
1. 甲
2. 乙

- 丙
- 丁
.
<ol>
<li>甲</li>
<li>乙</li>
</ol>
<ul>
<li>丙</li>
<li>丁</li>
</ul>
````````````````````````````````
