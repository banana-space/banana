---
title: 奇迹平坦
categories: [交换代数]
navboxes: [交换代数]
---

**奇迹平坦**是个[[交换代数]]定理，
说的是[[正则局部环]]上的模[[忠实平坦]]等价于[[大 Cohen–Macaulay 模|大 Cohen–Macaulay]]。

## 定理与证明

回忆称 Noether 局部环 $(R,\mathfrak{m})$ 的（未必有限生成）模 $M$
是**大 Cohen–Macaulay 模**，指的是 $\mathfrak{m}M\subsetneqq M$，
且 $R$ 的参数系都是 $M$-[[正则序列]]。

::: theorem {@奇迹平坦}
$(R,\mathfrak{m})$ 是 [[Cohen–Macaulay]] 局部环，
$M$ 是 $R$-模。则 $M$ 是忠实平坦模等价于 $M$
是[[平坦维数]]有限的[[大 Cohen–Macaulay 模]]。特别地，
由于[[正则局部环]]上所有的模平坦维数都有限，
其模忠实平坦等价于大 Cohen–Macaulay。
:::

::: proof
如 $M$ 忠实平坦，其平坦维数是 $0$，当然有限；
也自然有 $\mathfrak{m}M\subsetneqq M$；然后由于 $R$
Cohen–Macaulay，其参数系都是正则序列，而 $M$ 平坦，
$-\otimes_RM$ 保持单射，于是 $R$ 的参数系在 $M$
上仍是正则序列，故 $M$ 是大 Cohen–Macaulay 模。

反过来如 $M$ 是平坦维数有限的大 Cohen–Macaulay 模，
则首先 $\mathfrak{m}M\subsetneqq M$ 保证其忠实，
只需证其平坦。这相当于证明对任一有限生成 $R$-模 $N$，
$\operatorname{Tor}_i^R(M,N)$ 在 $i>0$ 时为零。我们对
$i$ 向下归纳。$i$ 充分大时这由平坦维数有限保证。
由[[结合素理想]]的理论，$N$ 具有滤链，其各项形如 $R/P$，
$P\in\operatorname{Spec}R$，故由 $\operatorname{Tor}$
的长正合列可不妨设 $N=R/P$。设 $\dim R=n$，
$\operatorname{ht}(P)=h$。由于 $R$ Cohen–Macaulay，
特别地[[悬链环|悬链]]，可取参数系 $r_1,\ldots,r_n$ 使得
$r_1,\ldots,r_h\in P$。由 $R$ Cohen–Macaulay，
它是 $R$ 的正则序列。由 $M$ 大 Cohen–Macaulay，它也是
$M$ 的正则序列。于是 $\operatorname{Tor}_i^R(M,
  R/(r_1,\ldots,r_h))$ 在 $i>0$ 时为 $0$。由
[[Krull 高度定理]]，$P$ 是 $(r_1,\ldots,r_h)$
上的极小素理想，特别地是结合素理想，于是存在短正合列
$$
0\to R/P\to R/(r_1,\ldots,r_h)\to C\to0
$$
写出其 $\operatorname{Tor}$ 长正合列，知在 $i>0$ 时有
$\operatorname{Tor}_i^R(M,R/P)=
  \operatorname{Tor}_{i+1}^R(M,C)$，于是由归纳假设即得结论。
:::

::: remark
如此操作是为了得到 $M$ 未必有限生成时的一般结论。
如有限生成，可简单使用平坦性的切片判别法，对 $\dim R$ 归纳证明定理。
:::

## 推论

下面的推论是奇迹平坦的常见应用形式。

::: corollary
设 $A$ 是[[正则环]]，$B$ 是 [[Noether 环]]，
单同态 $f\colon A\to B$ 满足纤维不超过 $0$ 维，
即对任意 $\mathfrak{p}\in\operatorname{Spec}A$，
$B_\mathfrak{p}/\mathfrak{p}B_\mathfrak{p}$ 是 [[Artin 环]]
（比如 $f$ 为[[有限同态|有限]]或[[拟有限同态|拟有限]]）。
则 $f$ 平坦当且仅当 $B$ 是 [[Cohen–Macaulay 环]]。
:::

::: proof
平坦和 Cohen–Macaulay 都是局部性质，故可设 $A,B$ 都是[[局部环]]，
$f$ 是局部同态。设 $A,B$ 的极大理想分别为 $\mathfrak{m},\mathfrak{n}$。
由条件，$B/\mathfrak{m}B$ 是 Artin 环，所以 $A$ 的参数系也是
$B$ 的参数系，于是 $B$ 是 Cohen–Macaulay 环，当且仅当它是大
Cohen–Macaulay $A$-模。这样由 @奇迹平坦 立得结论。
:::

::: corollary
设 $(A,\mathfrak{m})$ 是正则局部环，
$(B,\mathfrak{n})$ 是 Cohen–Macaulay 局部环，
$f\colon A\to B$ 是局部同态，满足
$\dim B=\dim A+\dim B/\mathfrak{m}B$。
则 $f$ 平坦。
:::

::: proof
条件中的等式说明 $A$ 的参数系与 $B/\mathfrak{m}B$ 的参数系的提升合起来是
$B$ 的参数系（见[[维数理论 (交换代数)|维数理论]]条目中纤维维数不等式的证明）。
这样，$B$ Cohen–Macaulay 就说明 $A$ 的参数系是 $B$
的正则序列。这样由 @奇迹平坦 便知 $f$ 平坦。
:::

```terms
奇迹平坦:
  en: miracle flatness
  de: wunderbare Flachheit
  fr: platitude miraculeuse
```
