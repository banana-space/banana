# Chinese typography

The output HTML goes through Chinese typography (the option `typography`, see the package's README, Typography): one space between Han characters and Latin letters, digits or inline formulas; ordinary spaces beside full-width punctuation and between Han characters removed; spaces go outside links and other inline elements.

Spaces between Chinese and Western text; spaces beside full-width punctuation removed.

```````````````````````````````` example
中文English中文，数字123与公式$x$之间 。 括号（ 内侧 ）去掉
.
<p>中文 English 中文，数字 123 与公式 <span class="bm-math-rendered" data-tex="x" data-display="false">…</span> 之间。括号（内侧）去掉</p>
````````````````````````````````

New spaces go outside links; code is not changed.

```````````````````````````````` example
见[[群]]与`代码a中文`
.
<p>见<a href="/wiki/%E7%BE%A4/" class="bm-wiki-link">群</a>与<code>代码a中文</code></p>
````````````````````````````````

`convertFullStop` writes 。 as ．.

```````````````````````````````` example {"typography": {"convertFullStop": true}}
句子。
.
<p>句子．</p>
````````````````````````````````

`spaceQuotes`: curly quotation marks as Western punctuation, with one space between them and Han characters outside.

```````````````````````````````` example {"typography": {"spaceQuotes": true}}
他说"你好"。
.
<p>他说 "你好"。</p>
````````````````````````````````

Japanese pages are left alone; `typography: false`, no typography.

```````````````````````````````` example {"lang": "ja"}
日本語English
.
<p>日本語English</p>
````````````````````````````````

```````````````````````````````` example {"typography": false}
中文English
.
<p>中文English</p>
````````````````````````````````
