---
title: Peter–Weyl 定理
aliases: [Peter-Weyl 定理]
categories: [抽象调和分析]
notices:
  - name: 问题
    items:
      - '“推论”一节 Schur 正交关系的第二种情形中，右边似乎应为 $\frac{\langle v, v'' \rangle \overline{\langle w, w'' \rangle}}{\dim V}$，且应在 $\sigma = \sigma''$（而不仅是等价）时成立。'
      - “证明”一节需要扩充。
---

**Peter–Weyl 定理**是说[[紧]][[拓扑群]] $G$ 的不可约[[酉表示]]的[[矩阵系数]] 给出 $L^2(G)$
的一组[[正交基]]。
它是[[有限群]]的[[有限群常表示论|常表示理论]]的推广。

## 定理陈述

设 $G$ 是[[拓扑群]]，$V$ 是 [[Hilbert 空间]]。
$\sigma \colon G \to \mathop {GL}(V)$ 是[[拓扑群表示]]。

对 $v$、$w \in V$，我们称 $G$ 上的[[连续函数]]
$u _ {v,w}\colon g \mapsto \left \langle \sigma (g) v , w \right \rangle$
为矩阵系数。我们记所有矩阵系数线性张成的空间为 $C_\sigma$。

设 $G$ [[局部紧]]，令 $dg$ 表示 $G$ 的[[Haar 测度]] 满足 $\int _ G dg = 1$。
令 $L^2(G)$ 表示复值[[平方可积函数]]空间，其中内积定义为
$$
\left \langle u , u' \right \rangle = \int_G u(g)\overline {u'(g)} dg
$$

::: theorem [Peter–Weyl 定理]
设 $G$ 是紧群，则 $\sum_{\sigma\,有限维不可约酉表示} C_\sigma$
是 $C(G, \mathbb C)$ 的[[稠密]]子空间，
进而在 $L^2(G)$ 中稠密。
:::

::: remark
紧群的不可约酉表示都是有限维的。
:::

## 推论

下面引理告诉我们矩阵系数的正交关系。

::: lemma [Schur 正交关系]
设 $G$ 是紧群，$(\sigma , V)$、
$(\sigma', V')$ 是 $G$ 的有限维[[不可约酉表示]]，
$v$、$w\in V$，$v'$、$w'\in V'$。则

- 若 $\sigma$、$\sigma'$ 不等价，则
  $$
  \left \langle u_{v,w} , u_{v',w'} \right \rangle=0.
  $$

- 若 $\sigma$、$\sigma'$ 等价，则
  $$
  \left \langle u_{v,w} , u_{v',w'} \right \rangle =
  \frac  {\left \langle v,w \right \rangle\left \langle v',w'\right \rangle}
   {\mathop\mathrm{dim}V}.
  $$
:::

因此我们得到下面定理：

::: theorem
$\bigoplus_{\sigma\,有限维不可约酉表示} C_\sigma$ 是 $L^2(G)$ 的正交分解。
:::

## 证明

我们利用 [[Weierstraß–Stone 定理]]来证明此定理。

## 例子

::: example
紧群 $\mathbb{R}/\mathbb{Z}\simeq\mathbb{S}^1$ 上的 Peter–Weyl 定理给出
经典的 [[Fourier 级数]]理论。
:::

```terms
Peter–Weyl 定理:
  en: Peter–Weyl theorem
  de: Satz von Peter–Weyl
  fr: théorème de Peter–Weyl
```
