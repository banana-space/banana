# Bibliographies

A ` ```bibliography ` block (YAML) lists works, which the text cites with `@key`. Whether an author links to a biography is the hook `resolvePersonLink`'s to say (here only J. Serre); a `page` field is always written as a wiki link.

Books, and citations.

```````````````````````````````` example
见 @book。

```bibliography
book:
  type: book
  title: Algebra
  author: Lang, Serge
  year: 2002
  publisher: Springer
```
.
<p>见 <a href="#bib-book" class="bm-citation" data-reference="book">Lang 2002</a>。</p>
<div class="bm-bibliography">
<div class="bm-bibliography-entry" id="bib-book" lang="en">
<p><span class="bm-bibliography-names"><strong>Lang</strong>, Serge</span> (2002). <em>Algebra</em>. Springer.</p>
</div>
</div>
````````````````````````````````

Articles, links to authors and `page` fields.

```````````````````````````````` example
@a

```bibliography
a:
  type: article
  title: Faisceaux algébriques cohérents
  author: ["Serre, J.-P.", {family: Borel, page: 群}]
  journaltitle: Ann. of Math.
  volume: 61
  pages: 197--278
  year: 1955
```
.
<p><a href="#bib-a" class="bm-citation" data-reference="a">Serre–Borel 1955</a></p>
<div class="bm-bibliography">
<div class="bm-bibliography-entry" id="bib-a" lang="en">
<p><span class="bm-bibliography-names"><a href="/wiki/Jean-Pierre_Serre/" class="bm-wiki-link"><strong>Serre</strong></a>, J.-P.; <a href="/wiki/%E7%BE%A4/" class="bm-wiki-link"><strong>Borel</strong></a></span> (1955). Faisceaux algébriques cohérents. <em>Ann. of Math.</em> 61, 197–278.</p>
</div>
</div>
````````````````````````````````

Online sources.

```````````````````````````````` example
```bibliography
web:
  type: online
  title: Page
  site: Example
  url: https://example.org/page
  urldate: 2024-06-01
```
.
<div class="bm-bibliography">
<div class="bm-bibliography-entry" id="bib-web" lang="en">
<p><strong>Example</strong>. Page. <span class="bm-bibliography-links"><a href="https://example.org/page" class="bm-external-link" target="_blank" rel="noopener">example.org</a> · <span lang="zh-cn">访问于 2024-06-01</span></span></p>
</div>
</div>
````````````````````````````````

An unknown field is an error.

```````````````````````````````` example
```bibliography
b:
  type: book
  title: T
  colour: red
```
.
!error bibliography_unknown_field {"entry":"b","field":"colour"}
````````````````````````````````
