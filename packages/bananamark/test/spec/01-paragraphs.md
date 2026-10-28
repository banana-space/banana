# Paragraphs and typographic replacements

CommonMark's paragraphs, emphasis and line breaks; straight quotation marks become curly ones (opening or closing by the characters around them; `'` inside a word is an apostrophe), and `--`, `---`, `...` become –, —, … (`<<` and `>>` stay as written); bare addresses become links. The output also goes through Chinese typography (spaces between Chinese and Western text and so on; see `14-typography.md`).

Paragraphs and soft line breaks.

```````````````````````````````` example
第一行
第二行

第二段
.
<p>第一行第二行</p>
<p>第二段</p>
````````````````````````````````

Emphasis; bold can stand right beside Chinese text and links.

```````````````````````````````` example
*斜体* **粗体** 文字**[[群]]**文字
.
<p><em>斜体</em><strong>粗体</strong>文字<strong><a href="/wiki/%E7%BE%A4/" class="bm-wiki-link">群</a></strong>文字</p>
````````````````````````````````

Two spaces or a backslash at the end of a line are a hard line break.

```````````````````````````````` example
甲  
乙\
丙
.
<p>甲<br>
乙<br>
丙</p>
````````````````````````````````

Straight quotation marks are curled by their context; an apostrophe is ’ too.

```````````````````````````````` example
"引文" '单' l'Hôpital Hilbert's Bayes' '90s
.
<p>“引文” ‘单’ l’Hôpital Hilbert’s Bayes’ ’90s</p>
````````````````````````````````

Dashes, ellipses and Chinese title marks.

```````````````````````````````` example
1--2，甲---乙，等等...，<<文>>
.
<p>1–2，甲—乙，等等…，&lt;&lt;文&gt;&gt;</p>
````````````````````````````````

Nothing is replaced in code.

```````````````````````````````` example
`"--"` 与 "--"
.
<p><code>"--"</code> 与 “–”</p>
````````````````````````````````

A bare address after a space or at a line's start becomes a link; punctuation ending the sentence is not part of it.

```````````````````````````````` example
见 https://example.org/a?b=1。
www.example.org
.
<p>见 <a href="https://example.org/a?b=1" class="bm-external-link" target="_blank" rel="noopener">https://example.org/a?b=1</a>。<a href="https://www.example.org" class="bm-external-link" target="_blank" rel="noopener">www.example.org</a></p>
````````````````````````````````

An address right beside Han characters does not become a link.

```````````````````````````````` example
见https://example.org
.
<p>见 https://example.org</p>
````````````````````````````````

A literal `<` is written `&lt;` (an HTML tag is an error; see 12-tags.md).

```````````````````````````````` example
a &lt; b
.
<p>a &lt; b</p>
````````````````````````````````
