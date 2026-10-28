# English pages

When a page's language, `lang`, is `en…`, the text bananamark writes in the page is in English: reference text, environment names, proofs, the title of links to missing articles.

```````````````````````````````` example {"lang": "en"}
## Groups {@sec:g}

::: theorem [Lagrange] {@thm:l}
Text.
:::

::: proof
By @sec:g and @thm:l.
:::

See [[Ring]].
.
<h2 id="groups"><a class="bm-heading-link" href="#groups" title="Link to this section">§</a><span class="bm-section-number">1</span> Groups</h2>
<div class="bm-env bm-envgroup-theorem bm-env-theorem" id="thm:l"><p class="bm-envtitle">Theorem 1.1 (Lagrange)</p><div class="bm-envcontent">
<p>Text.</p>
</div>
</div>
<div class="bm-env bm-envgroup-proof bm-env-proof"><span class="bm-envtitle">Proof. </span><div class="bm-envcontent"><p>By <a href="#groups">Section 1</a> and <a href="#thm:l">Theorem 1.1</a>.</p>
</div>
</div>
<p>See <a href="/missing/?title=Ring" title="Article not yet created: Ring" class="bm-wiki-link bm-wiki-link-missing">Ring</a>.</p>
````````````````````````````````
