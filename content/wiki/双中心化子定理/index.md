---
title: 双中心化子定理
categories: [一般环论]
navboxes: [非交换代数]
---

设 $S$ 是环 $R$ 的子环，
考虑 $S$ 在 $R$ 中的中心化子
$$
C_R(S):=\{r\in R|rs=sr,\ \forall s\in S\}
$$
它是 $R$ 的子环。
**双中心化子定理**给出了 $C_R(C_R(S))=S$ 的充分条件。

## 定理陈述

固定 $k$ 为一个代数闭域。
下面若不特殊标明，
张量积和直和均在 $k$ 代数或 $k$ 模的意义下定义。

::: theorem
设 $E$ 是有限维线性空间，
$A$ 是 $\operatorname{End}_k(E)$ 的子代数。
令 $B=\operatorname{End}_A(E)$ 是 $A$ 的中心化子。
假设 $A$ 是[[半单环|半单代数]]，则

- (1) $A=\operatorname{End}_B(E)$。

- (2) $B$ 是半单的。

- (3) 作为 $A\otimes B$ 的表示，
  $E$ 具有直和分解 $\bigoplus V_i\otimes W_i$，
  其中 $V_i,W_i$ 分别跑遍 $A,B$ 的不可约表示。

:::

::: remark
由于 $A,B$ 在 $E$ 上的作用可交换，
我们定义 $A\otimes B$ 在 $E$ 上的作用如下：
$$
(a\otimes b)\cdot v=a(bv)\ .
$$
从而 $E$ 是 $A\otimes B$ 的表示。
:::
