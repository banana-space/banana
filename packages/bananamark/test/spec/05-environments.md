# Theorem-like environments

From `::: kind [Title] {@label}` to `:::` is an environment; numbered environments share a count in each section, `*` leaves one unnumbered, and `(Name)` replaces the kind's name. `::: proof` is a proof; with a title, only the title is shown.

Definitions and theorems share their numbers.

```````````````````````````````` example
::: definition [群]
正文。
:::

::: theorem
正文。
:::
.
<div class="bm-env bm-envgroup-definition bm-env-definition"><p class="bm-envtitle">定义 1（群）</p><div class="bm-envcontent">
<p>正文。</p>
</div>
</div>
<div class="bm-env bm-envgroup-theorem bm-env-theorem"><p class="bm-envtitle">定理 2</p><div class="bm-envcontent">
<p>正文。</p>
</div>
</div>
````````````````````````````````

Names of their own, and unnumbered ones.

```````````````````````````````` example
::: definition (条件)
甲
:::

::: remark*
乙
:::
.
<div class="bm-env bm-envgroup-definition bm-env-definition"><p class="bm-envtitle">条件 1</p><div class="bm-envcontent">
<p>甲</p>
</div>
</div>
<div class="bm-env bm-envgroup-remark bm-env-remark"><p class="bm-envtitle">注</p><div class="bm-envcontent">
<p>乙</p>
</div>
</div>
````````````````````````````````

Proofs, and proofs with titles.

```````````````````````````````` example
::: theorem {@thm:a}
命题。
:::

::: proof
证。
:::

::: proof [@thm:a 的证明]
证。
:::
.
<div class="bm-env bm-envgroup-theorem bm-env-theorem" id="thm:a"><p class="bm-envtitle">定理 1</p><div class="bm-envcontent">
<p>命题。</p>
</div>
</div>
<div class="bm-env bm-envgroup-proof bm-env-proof"><span class="bm-envtitle">证明　</span><div class="bm-envcontent"><p>证。</p>
</div>
</div>
<div class="bm-env bm-envgroup-proof bm-env-proof"><span class="bm-envtitle"><a href="#thm:a">定理 1</a> 的证明　</span><div class="bm-envcontent"><p>证。</p>
</div>
</div>
````````````````````````````````

An environment can hold any block.

```````````````````````````````` example
::: example
- 甲
- 乙

$$x$$
:::
.
<div class="bm-env bm-envgroup-example bm-env-example"><p class="bm-envtitle">例 1</p><div class="bm-envcontent">
<ul>
<li>甲</li>
<li>乙</li>
</ul>
<span class="bm-math-rendered bm-math-display" data-tex="x" data-display="true">…</span>
</div>
</div>
````````````````````````````````

An unknown kind is an error.

```````````````````````````````` example
::: axiom
甲
:::
.
!error environment_unknown {"header":"axiom"}
````````````````````````````````

An environment that does not end is an error.

```````````````````````````````` example
::: theorem
甲
.
!error environment_unclosed {}
````````````````````````````````
