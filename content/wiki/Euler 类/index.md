---
title: Euler 类
categories: [示性类]
notices:
  - name: 问题
    items:
      - 开头一段与“性质”一节都称定向实向量丛存在处处非零截面当且仅当 Euler 类为 $0$，这似乎只在纤维维数不小于底空间维数（如底空间是 $n$ 维 CW 复形）时成立；一般情形下 Euler 类为 $0$ 只是必要条件（例如 $S^4$ 上非平凡的 $3$ 维定向向量丛的 Euler 类为 $0$，但没有处处非零截面）。
navboxes: [向量丛与 K 理论]
---

**Euler 类**是定向实[[向量丛]]的一个[[示性类]]。
它刻画了向量丛的“扭曲程度”：它是向量丛的处处非零截面存在的障碍，
即向量丛存在处处非零截面当且仅当其 Euler 类为 $0$。

Euler 类的名称来源于[[Euler 示性数]]：
定向[[微分流形]]的[[切丛]]的 Euler 类的积分即为此微分流形的 Euler 示性数。

## 定义

::: definition
设 $E \to B$ 是 $n$ 维定向实向量丛。
设 $u \in H^n(E, E \backslash B)$ 为 $E$ 的[[Thom 同构定理|Thom 类]]。

则 $E$ 的 **Euler 类** 定义为
$$
e(E) = i^* u \in H^n(B).
$$
其中 $i \colon B \to E$ 是 $0$ 截面。
:::

::: remark
按定义，若将向量丛的定向反向，则 Euler 类变为原来的 $(-1)$ 倍。
:::

::: remark
在上述定义中，亦可将上同调 $H^n$ 改为 $R$-系数奇异上同调 $H^n(-; R)$。
若 $R = \mathbb{Z} / 2\mathbb{Z}$，得到的类就是 $n$ 次[[Stiefel–Whitney 类]]。
:::

## 性质

::: proposition [函子性]
对任意映射 $f \colon B' \to B$，$e(f^*(E)) = f^*(e(E))$。
:::

::: proposition
设 $E \to B, E' \to B'$ 是两个 $n$ 维定向实向量丛，
则 $E \times E' \to B \times B'$ 的 Euler 类为
$$
e(E \times E') = e(E) \boxtimes e(E').
$$
:::

::: proposition [Whitney 乘积公式]
设 $E, E' \to B$ 是两个 $n$ 维定向实向量丛，
则 $E \oplus E' \to B$ 的 Euler 类为
$$
e(E \oplus E') = e(E) \cup e(E').
$$
:::

::: proposition
实定向向量丛 $E \to B$ 具有处处非零截面当且仅当 $e(E) = 0$。
:::

::: proposition
Euler 类刻画了“一般截面的零点”，严格叙述如下。

设 $B$ 为 $m$ 维定向光滑流形，
$E \to B$ 是 $n$ 维定向实光滑向量丛，$n \leq m$。
设 $\sigma \colon B \to E$ 是与零截面[[横截相交]]的光滑截面，
$Z = \{ x \in B \colon \sigma(x) = 0 \}$。
则 $Z$ 是余 $n$ 维子流形，
且 $e(E)$ 即为 $Z$ 在 [[Poincaré 对偶]] 下的上同调类。
:::
