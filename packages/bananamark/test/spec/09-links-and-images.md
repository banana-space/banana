# Ordinary links and images

Ordinary links are written as given; protocol-relative and http(s) addresses are external links (opening in a new tab). Addresses can only be the site's own, http(s) and mailto. An image alone in a paragraph is shown as a figure (its caption below it), and `{width=…}` after an image gives its width.

Links within the site and to other hosts.

```````````````````````````````` example
[站内](/wiki/a/) [外部](https://example.org/) [邮件](mailto:a@example.org)
.
<p><a href="/wiki/a/">站内</a><a href="https://example.org/" class="bm-external-link" target="_blank" rel="noopener">外部</a><a href="mailto:a@example.org">邮件</a></p>
````````````````````````````````

An image alone in a paragraph, its width after it.

```````````````````````````````` example
![说明](图.png){width=200}
.
<figure class="bm-content-figure"><img src="%E5%9B%BE.png" alt="说明" width="200" loading="lazy"><figcaption>说明</figcaption></figure>
````````````````````````````````

Any image may have a width; braces not right after an image are text.

```````````````````````````````` example
文字 ![图](https://example.org/a.png?w=1){width=20} {width=3}
.
<p>文字 <img src="https://example.org/a.png?w=1" alt="图" width="20" loading="lazy">{width=3}</p>
````````````````````````````````

An address keeps its parameters, `width` among them (only `{width=…}` gives the width).

```````````````````````````````` example
![说明](图.png?width=200) ![远处](https://example.org/b.png?width=9)
.
<p><img src="%E5%9B%BE.png?width=200" alt="说明" loading="lazy"> <img src="https://example.org/b.png?width=9" alt="远处" loading="lazy"></p>
````````````````````````````````

A width is a whole number of pixels.

```````````````````````````````` example
![说明](图.png){width=wide}
.
!error image_width {"destination":"图.png"}
````````````````````````````````

Inline images.

```````````````````````````````` example
文字 ![图](a.png) 文字
.
<p>文字<img src="a.png" alt="图" loading="lazy">文字</p>
````````````````````````````````

An address not allowed is an error.

```````````````````````````````` example
[点](javascript:alert(1))
.
!error link_scheme {"destination":"javascript:alert(1)"}
````````````````````````````````
