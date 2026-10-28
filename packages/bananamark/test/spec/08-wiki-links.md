# Wiki links

`[[Target]]` and `[[Target|text]]` link to wiki articles; the target's matching key ignores spaces in formulas and the difference between full-width and half-width brackets. Whether an article exists, and where, is the hook `resolveWikiLink`'s to say (here only 群, 集合, 集 and Jean-Pierre Serre exist); missing articles link to `/missing/`.

Articles that exist, and aliases.

```````````````````````````````` example
[[群]]、[[集]]、[[集合|全体]]
.
<p><a href="/wiki/%E7%BE%A4/" class="bm-wiki-link">群</a>、<a href="/wiki/%E9%9B%86%E5%90%88/?from=%E9%9B%86" class="bm-wiki-link">集</a>、<a href="/wiki/%E9%9B%86%E5%90%88/" class="bm-wiki-link">全体</a></p>
````````````````````````````````

An article that does not exist.

```````````````````````````````` example
[[环]] 与 [[$\infty$-范畴]]
.
<p><a href="/missing/?title=%E7%8E%AF" title="条目尚未创建：环" class="bm-wiki-link bm-wiki-link-missing">环</a>与 <a href="/missing/?title=%E2%88%9E-%E8%8C%83%E7%95%B4&amp;source=%24%5Cinfty%24-%E8%8C%83%E7%95%B4" title="条目尚未创建：∞-范畴" class="bm-wiki-link bm-wiki-link-missing"><span class="bm-math-rendered" data-tex="\infty" data-display="false">…<span class="bm-math-end">…-</span></span>范畴</a></p>
````````````````````````````````

In tables the separator is written `\|`.

```````````````````````````````` example
| 甲 |
| --- |
| [[群\|文字]] |
.
<table>
<thead>
<tr>
<th>甲</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="/wiki/%E7%BE%A4/" class="bm-wiki-link">文字</a></td>
</tr>
</tbody>
</table>
````````````````````````````````

References in a link's text.

```````````````````````````````` example
[[群|@sec:a 中的群]]

## 甲 {@sec:a}
.
<p><a href="/wiki/%E7%BE%A4/" class="bm-wiki-link">第 1 节中的群</a></p>
<h2 id="甲"><a class="bm-heading-link" href="#%E7%94%B2" title="链接到本节">§</a><span class="bm-section-number">1</span> 甲</h2>
````````````````````````````````
