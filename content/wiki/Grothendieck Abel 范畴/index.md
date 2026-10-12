---
title: Grothendieck Abel 范畴
categories: [同调代数]
---

**Grothendieck Abel 范畴**是一类 [[Abel 范畴]]，
包含了实践中大部分 Abel 范畴，总结了它们的优良性质。

## 定义

::: definition
**Grothendieck Abel 范畴**指的是满足 (AB5)
且有[[生成元 (范畴)|生成元]]的 Abel 范畴。具体地说，如 Abel 范畴
$\mathcal{A}$ [[余完备]]、[[滤余极限]][[正合函子|正合]]，又存在
$g\in\mathcal{A}$ 使得函子 $\mathcal{A}(g,-)$
[[忠实]]，则称其为 Grothendieck Abel 范畴。
:::

## 性质

::: lemma {@小}
如 Abel 范畴 $\mathcal{C}$ 有生成元 $g$，则：

- 如映射 $f\colon c\to d$ 不是满射，
  则存在映射 $g\to d$ 不穿过 $f$。

- 设 $c\in\mathcal{C}$，$a,b$ 是其[[子对象]]，
  将 $\mathcal{C}(g,a)$ 和 $\mathcal{C}(g,b)$
  视为 $\mathcal{C}(g,c)$ 的子集。则 $a\subseteq b$
  当且仅当 $\mathcal{C}(g,a)\subseteq\mathcal{C}(g,b)$。

- 对任意 $c\in\mathcal{C}$，
  $c$ 的所有子对象构成集合。

:::

::: proof
如映射 $f\colon c\to d$ 不是满射，考虑 $d$ 到
$\operatorname{coker}(f)$ 的自然映射与零映射，它们相异。
故由[[生成元 (范畴)|生成元]]的定义，存在映射 $g\to d$，
与它们复合之后仍相异。由[[余核]]的定义，此即所求。

如 $a\subseteq b$，显然
$\mathcal{C}(g,a)\subseteq\mathcal{C}(g,b)$。反过来，
$\mathcal{C}(g,a)\subseteq\mathcal{C}(g,b)$ 无非就是说，
$g$ 到 $c$ 的映射中穿过 $a$ 者都穿过 $b$。既然如此，
它们也都穿过 $a$ 和 $b$ 在 $c$ 上的[[纤维积]]，即 $a\cap b$。
于是由上一段，自然含入 $a\cap b\to a$ 是满射，换言之
$a\cap b=a$，即 $a\subseteq b$。

于是对 $c$ 的子对象 $a,b$，
只要 $\mathcal{C}(g,a)\hookrightarrow\mathcal{C}(g,c)$
与 $\mathcal{C}(g,b)\hookrightarrow\mathcal{C}(g,c)$
有同样的像，就有 $a\cong b$ 作为子对象。
所以 $c$ 的子对象类能嵌入 $\mathcal{C}(g,c)$
的幂集，故由[[替换公理]]这是集合。
:::

Grothendieck Abel 范畴中有 Baer 判别法。

::: proposition [Baer]
如 $\mathcal{A}$ 为 Grothendieck Abel 范畴，$g$ 为其生成元，
则只要 $I\in\mathcal{A}$ 满足对 $g$ 的任意子对象 $h$，
任意 $\varphi\colon h\to I$ 都能延拓至 $g\to I$，
就有 $I$ 内射。
:::

::: proof
要证明对 $a\in\mathcal{A}$ 及其子对象 $b$，任意
$\varphi\colon b\to I$ 都能延拓至 $a\to I$。为此考虑
$$
\{(c,\psi)\mid b\subseteq c\subseteq a,\,
\psi\colon c\to I,\,\psi|_b=\varphi\}
$$
并取偏序 $(c,\psi)\le(c',\psi')$ 指 $c\subseteq c'$
且 $\psi'|_c=\psi$。由以下引理，这构成偏序集。其显然非空，
因为 $(b,\varphi)$ 在其中。由 (AB5)，其中每条链并起来之后仍是其中元素，
故链有上界。所以由 [[Zorn 引理]]，其有极大元 $(c,\psi)$。
只需证明 $c=a$。

用反证法。如 $c\subsetneqq a$，则由 @小，
存在 $f\colon g\to a$ 不穿过 $c$。取 $h=f^{-1}(c)\subsetneqq g$，
则由条件 $\psi\circ f\colon h\to I$ 能延拓为 $g\to I$。
这和 $\psi\colon c\to I$ 合起来给出映射
$\psi'\colon c'=c\sqcup_hg\to I$。但 $c$ 含入 $a$ 的映射与 $f$ 合起来又给出
$c'\hookrightarrow a$，即
$c\subsetneqq c'\subseteq a$，与 $(c,\psi)$ 的极大性矛盾。
故 $c=a$。
:::

由 Baer 判别法能得到 Grothendieck Abel 范畴最重要的性质。

::: theorem [Grothendieck] {@足够内射}
Grothendieck Abel 范畴都有足够[[内射]]。
:::

::: proof
设 $\mathcal{A}$ 为 Grothendieck Abel 范畴，并取生成元
$g$。由 @小，$g$ 的所有子对象构成集合。取[[正则基数]]
$\kappa$ 大于该集合的[[基数|势]]。对 $a\in\mathcal{A}$，
我们要找内射对象 $I\in\mathcal{A}$ 以及单射 $a\to I$。
令 $a_0=a$，并对[[序数]] $i$ 归纳定义 $a_i$ 如下：
当 $i$ 为极限序数时为余极限 $a_i=\operatornamewithlimits{colim}_{j<i}a_j$，
当 $i=j+1$ 为后继序数时为推出
$a_i=a_j\sqcup_{\bigoplus_{(h,\varphi)}h}\bigoplus_{(h,\varphi)}g$，
其中下标取遍集合 $\{(h,\varphi)\mid h\subseteq g,\,
  \varphi\colon h\to a_j\}$，映射 $\bigoplus_{(h,\varphi)}h\to a_j$
由每个 $\varphi$ 合起来得到。显然对每个序数 $i$ 都有自然的映射
$a\to a_i$。以下证明取 $I=a_\kappa$ 即为所求。

显然每个 $a_i\to a_{i+1}$ 都是单射。故由 (AB5) 即得 $a\to I$
也单。我们来用 Baer 判别法验证 $I$ 内射。取 $h\subseteq g$
以及 $\varphi\colon h\to I$。对每个序数 $i\le\kappa$，
把 $a_i$ 视为 $I$ 的子对象，并定义 $h_i=\varphi^{-1}(a_i)$，
则 $\{h_i\}_{i<\kappa}$ 是 $h$ 的子对象族，关于 $i$ 递增。
由于 $h$ 的子对象个数小于等于 $g$ 的子对象个数从而小于 $\kappa$，
此递增族在 $i$ 足够大时稳定，即存在 $k<\kappa$，对所有 $i\ge k$，
$h_i=h_k$。再由 (AB5) 有 $\bigcup_{i<\kappa}h_i=
  \varphi^{-1}\left(\bigcup_{i<\kappa}a_i\right)=
  \varphi^{-1}(I)=h$，故 $h=h_k$，也就是说 $\varphi$
实际上是 $h$ 到 $a_k$ 的映射。那么由 $a_{k+1}$ 的构造，
$\varphi$ 可延拓为 $g\to a_{k+1}$。这样就证明了任意的
$\varphi\colon h\to I$ 都可延拓到 $g\to I$，于是
$I$ 内射。
:::

::: corollary
Grothendieck Abel 范畴都有内射[[余生成元]]。
:::

::: proof
沿用以上记号。令 $a=\bigoplus_{h\subseteq g}g/h$ 并取
$a\hookrightarrow I$，$I$ 内射，下证 $I$ 是余生成元，
即函子 $\mathcal{A}(-,I)$ 忠实。由于这是[[正合函子]]，
要证它忠实，只需证它把非零对象打到非零对象。取非零的
$b\in\mathcal{A}$。则由于 $g$ 是生成元，存在非零映射
$g\to b$，即存在 $h\subsetneqq g$ 使得 $g/h\hookrightarrow b$。
由 $I$ 的构造，存在 $g/h\to I$ 的非零映射，于是由内射即知存在
$b\to I$ 的非零映射。
:::

::: proposition
Grothendieck Abel 范畴都是[[可表现范畴]]。从而
Grothendieck Abel 范畴都[[完备 (范畴)|完备]]。
:::

::: proof
设 $\mathcal{A}$ 为 Grothendieck Abel 范畴，并取生成元
$g$。依定义
$\mathcal{A}$ 余完备，故只需证存在小的[[满子范畴]]
$\mathcal{A}_0$ 使得 $\mathcal{A}$ 中每个对象都是一些
$\mathcal{A}_0$ 中的对象的余极限。事实上取 $\mathcal{A}_0$
为 $g^n$ 的[[商对象]]，$n$ 取遍自然数，生成的子范畴，即足。
由于 $\mathcal{A}$ 中每个对象的所有子对象都构成集合，故商对象亦然。
又由可数个集合的并仍是集合，即得 $\mathcal{A}_0$ 小。
由构造以及 $g$ 是生成元易得对每个 $a\in\mathcal{A}$ 都有
$a=\operatornamewithlimits{colim}_{\mathcal{A_0}\ni
  a_0\subseteq a}a_0$。
:::

## 例子

- [[Abel 群]]的范畴 $\mathsf{Ab}$
  是 Grothendieck Abel 范畴，
  $\mathbb{Z}$ 是其生成元。

- 设 $R$ 是[[环]]，
  则 $R$-[[模|左模]]构成的范畴 $R\text{-}\mathsf{Mod}$
  和 $R$-[[模|右模]]构成的范畴 $\mathsf{Mod}\text{-}R$
  都是 Grothendieck Abel 范畴，$R$ 是其生成元。

- 设 $(X, \mathcal{O}_X)$ 是[[赋环空间]]，
  则所有 $\mathcal{O}_X$-[[模层|左模]]构成的范畴
  $\mathcal{O}_X\text{-}\mathsf{Mod}$
  是 Grothendieck Abel 范畴，$\bigoplus_{U\subseteq X}
      (j_U)_!\mathcal{O}_U$ 是其生成元。

- 设 $(\mathcal{C},\mathcal{O}_\mathcal{C})$ 是[[赋环景]]，
  则所有 $\mathcal{O}_\mathcal{C}$-[[模层|左模]]构成的范畴
  $\mathcal{O}_\mathcal{C}\text{-}\mathsf{Mod}$
  是 Grothendieck Abel 范畴，$\bigoplus_{U\in\mathcal{C}}
      (j_U)_!\mathcal{O}_{\mathcal{C}_{/U}}$ 是其生成元。

```terms
Grothendieck Abel 范畴:
  en: Grothendieck abelian category
  de: Grothendieck-Abelschekategorie
  fr: catégorie abélienne de Grothendieck
```
