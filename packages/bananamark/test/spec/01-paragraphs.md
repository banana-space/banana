# Paragraphs and typographic replacements

CommonMark's paragraphs, emphasis and line breaks; straight quotation marks become curly ones (see below), and `--`, `---`, `...` become –, —, … (`<<` and `>>` stay as written); bare addresses become links. The output also goes through Chinese typography (spaces between Chinese and Western text and so on; see `14-typography.md`).

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

A bare address becomes a link; punctuation ending the sentence is not part of it.

```````````````````````````````` example
见 https://example.org/a?b=1。
www.example.org
.
<p>见 <a href="https://example.org/a?b=1" class="bm-external-link" target="_blank" rel="noopener">https://example.org/a?b=1</a>。<a href="https://www.example.org" class="bm-external-link" target="_blank" rel="noopener">www.example.org</a></p>
````````````````````````````````

An address is in ASCII: right beside Han characters it is still a link, and it ends where they start.

```````````````````````````````` example
见https://example.org/a和
.
<p>见 <a href="https://example.org/a" class="bm-external-link" target="_blank" rel="noopener">https://example.org/a</a> 和</p>
````````````````````````````````

Not inside a link's text, and not without a domain.

```````````````````````````````` example
[见 https://example.org](/a) http://localhost:3000/ ftp://example.org/
.
<p><a href="/a">见 https://example.org</a> http://localhost:3000/ ftp://example.org/</p>
````````````````````````````````

A quotation mark beside a space goes by that space.

```````````````````````````````` example
文字 "文字" 文字 '文字' 文字
.
<p>文字 “文字” 文字 ‘文字’ 文字</p>
````````````````````````````````

Without a space, a double one goes by pairing.

```````````````````````````````` example
他说"你好"然后"再见"。

文字 "文字""文字" 文字
.
<p>他说“你好”然后“再见”。</p>
<p>文字 “文字”“文字” 文字</p>
````````````````````````````````

A single one after a letter or digit is an apostrophe or a prime; one never closed is an apostrophe.

```````````````````````````````` example
it's Bayes' 赋' 'twas '90s
.
<p>it’s Bayes’ 赋’ ’twas ’90s</p>
````````````````````````````````

One that closes nothing, or stands between spaces, or is escaped, stays straight.

```````````````````````````````` example {"typography": false}
5" disk 与 a " b 与 \"c\"
.
<p>5&quot; disk 与 a &quot; b 与 &quot;c&quot;</p>
````````````````````````````````

Comments and declarations are left out, and only they are: what follows one on its line is text. At the start of a line one ends a paragraph.

```````````````````````````````` example
<!-- 说明 --> 文字

文字
<!-- 说明 -->
文字

<?说明?> <!DOCTYPE html> 文字
.
<p>文字</p>
<p>文字</p>
<p>文字</p>
<p>文字</p>
````````````````````````````````

A comment at the start of a line may run over any lines.

```````````````````````````````` example
<!-- 第一行

## 节

::: theorem
-- 最后一行 --> 文字
.
<p>文字</p>
````````````````````````````````

In a paragraph's text it ends with the paragraph.

```````````````````````````````` example
文字 <!-- 说明 -->文字 <!-- 说明
第二行 --> 文字
.
<p>文字文字文字</p>
````````````````````````````````

A literal `<` is written `&lt;` (an HTML tag is an error; see 12-tags.md).

```````````````````````````````` example
a &lt; b
.
<p>a &lt; b</p>
````````````````````````````````
