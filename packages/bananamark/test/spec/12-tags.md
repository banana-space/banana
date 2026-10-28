# HTML-style tags

bananamark's HTML-style tags: `<lang language>`, `<align right|center>`, `<spoiler title="…">`; the caller can add its own (the option `tags`, see the package's README). These examples have one tag of the caller's, `<note>…</note>`, written as `<div class="note">`. Other HTML tags are errors.

A tag of the caller's.

```````````````````````````````` example
<note>见 [[群]]、[[环]]</note>
.
<div class="note">见<a href="/wiki/%E7%BE%A4/" class="bm-wiki-link">群</a>、<a href="/missing/?title=%E7%8E%AF" title="条目尚未创建：环" class="bm-wiki-link bm-wiki-link-missing">环</a></div>
````````````````````````````````

Text in another language.

```````````````````````````````` example
德语 <lang de>Satz</lang>。
.
<p>德语 <span lang="de">Satz</span>。</p>
````````````````````````````````

Alignment.

```````````````````````````````` example
<align right>署名</align>
.
<div class="bm-align-right"><p>署名</p>
</div>
````````````````````````````````

Folded content.

```````````````````````````````` example
<spoiler title="证明">
证明的内容。
</spoiler>
.
<details>
  <summary>证明</summary>
  <div><p>证明的内容。</p>
</div>
</details>
````````````````````````````````

The title is text of the page: formulas, wiki links and references in it are read as in the page (a parameter with `markdown: true`).

```````````````````````````````` example
<spoiler title="关于 *有限* [[群]]">
内容。
</spoiler>
.
<details>
  <summary>关于<em>有限</em><a href="/wiki/%E7%BE%A4/" class="bm-wiki-link">群</a></summary>
  <div><p>内容。</p>
</div>
</details>
````````````````````````````````

An unknown tag is an error.

```````````````````````````````` example
<div>x</div>
.
!error tag_unknown {"name":"div","allowed":["<lang>","<align>","<spoiler>","<note>"]}
````````````````````````````````
