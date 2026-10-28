---
title: Milnor $K$ 理论
categories: [母题论, $K$ 理论]
navboxes: [母题论, 代数 K 理论]
---

<problems>
- “例子”一节需要扩充。
</problems>

**Milnor $K$ 理论**是[[域]]的不变量，由 [[John Milnor]]
定义，是定义高阶[[代数 $K$ 理论]]的一次尝试。虽然 Milnor $K$
理论最终被认为不是好的高阶 $K$ 理论定义，但它可以映射到高阶 $K$ 群，
且与[[二次型]]、[[Galois 上同调]]、[[母题上同调]]都有联系。

## 定义

::: definition {@def}
设 $F$ 是[[域]]。$F$ 的 **Milnor $K$ 理论**，
记作 $K^M(F)$，指[[分次环]]
$$
K^M_\bullet(F)=\frac{\operatorname{T}^\bullet(F^\times)}
{([a]\otimes[1-a])_{a\in F^\times\setminus1}},
$$
其中 $\operatorname{T}^\bullet(F^\times)$ 指乘法群 $F^\times$
作为 $\mathbb{Z}$-模的[[张量代数]]，$([a]\otimes[1-a])_{a\in F^\times\setminus1}$
指所有形如 $[a]\otimes[1-a]\in F^\times\otimes F^\times$
的元素生成的[[双边理想]]。这显然是齐次理想，故商环仍是分次环。
对 $n\in\mathbb{N}$，$F$ 的 **$n$ 阶 Milnor $K$ 理论**，
记作 $K^M_n(F)$，指的是 $K^M_\bullet(F)$ 的 $n$ 次部分。
:::

::: remark
@def 中的关系 $[a]\otimes[1-a]=0$ 常称为
[[Steinberg 关系]]。
:::

## 性质

本节中固定域 $F$。

::: proposition
$K_0^M(F)=\mathbb{Z}$，$K_1^M(F)=F^\times$。
:::

::: proof
这是因为 @def 中商去的理想由二次的元素生成，
故没有零次与一次部分。
:::

以下对 $a\in F^\times$，以 $[a]$ 记 $K_1^M(F)$
中的对应元素。

::: proposition
对任意 $a\in F^\times$，
$[a][-a]=0$。
:::

::: proof
$a=1$ 时 $[a]=0$。$a\ne1$ 时由
$-a=(1-a)(1-a^{-1})^{-1}$ 知
\[
\begin{aligned}
  [a][-a]&=[a]([1-a]-[1-a^{-1}])\\
  &=[a][1-a]+[a^{-1}][1-a^{-1}]=0.
\end{aligned}
\]
:::

::: corollary
对任意 $a,b\in F^\times$，
$[a][b]+[b][a]=0$。从而
$K^M_\bullet(F)$ 分次交换，即对 $x\in K^M_m(F)$，
$y\in K^M_n(F)$，$xy=(-1)^{mn}yx$。
:::

::: proof
第一句话是因为
\[
\begin{aligned}
  0&=[ab][-ab]\\
  &=[a][-ab]+[b][-ab]\\
  &=[a][-a]+[a][b]+[b][a]+[b][-b]\\
  &=[a][b]+[b][a].
\end{aligned}
\]
第二句话是因为 $K^M_\bullet(F)$ 由 $K^M_1(F)=F^\times$
生成。
:::

## 例子

## 与平展上同调的关系

以下定理由 Voevodsky、Rost 等人证明。

::: theorem [[[范数剩余同构]]]
对在域 $F$ 中可逆的正整数 $r$，有典范的分次同构
$$
K^M_n(F)/r\cong H^n_{\mathrm{ét}}
(F,\mu_r^{\otimes n}),
$$
且关于 $F$ [[自然变换|自然]]。这里 $\mu_r=\ker(r\colon
  \mathbb{G}_m\to\mathbb{G}_m)$ 指 $r$ 次单位根群。
:::

## 与母题上同调的关系

以下定理由 Nesterenko–Suslin 和 Totaro 独立证明。

::: theorem
有典范、关于域 $F$ 自然的分次同构
$$
K_n^M(F)=H^n(F,\mathbb{Z}(n)),
$$
其中等号右边是[[母题上同调]]。
:::

```terms
Milnor $K$ 理论:
  en: Milnor $K$-theory
```
