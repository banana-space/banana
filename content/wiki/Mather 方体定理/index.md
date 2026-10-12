---
title: Mather 方体定理
categories: [同伦论]
notices:
  - name: 问题
    items:
      - “陈述”一节中第一、第二方体定理的名称似乎与通常的用法相反：通常称“底面是推出方块且四个侧面都是拉回方块时，顶面是推出方块”为 Mather 第一方体定理，称“顶面和底面是推出方块、左面和后面是拉回方块时，前面和右面是拉回方块”为 Mather 第二方体定理。
---

::: convention
在本文中，

- [[范畴]]都指 [[$(\infty,1)$-范畴]]。
- [[意象]]都指 [[$(\infty,1)$-意象]]。

:::

**Mather 方体定理**是个[[同伦论]]定理，
说的是如果[[意象]]（例如[[生象]]范畴 $\mathsf{Ani}$）中
交换方体的某些面是[[推出]]/[[拉回 (范畴论)|拉回]]方块，
那么另一些面也是拉回/推出方块。

## 陈述

::: theorem [Mather]
设意象 $\mathcal{X}$ 中交换方体
\[
\begin{tikzcd}
  \bullet \ar[rr] \ar[dd] \ar[rd] && \bullet \ar[rd] \ar[dd] \\
  & \bullet \ar[rr, crossing over] \ar[dd, crossing over] && \bullet \ar[dd] \\
  \bullet \ar[rr] \ar[rd] && \bullet \ar[rd] \\
  & \bullet \ar[rr] && \bullet
\end{tikzcd}
\]
的底面是推出方块，且其左面和后面都是拉回方块。
那么方体的前面和右面是拉回方块当且仅当它的顶面是推出方块。
:::

人们一般将此定理的“当”方向称为 **Mather 第一方体定理**，
“仅当”方向称为 **Mather 第二方体定理**。

::: remark
反过来，若一个[[可表现范畴]] $\mathcal{X}$ 满足

- 范畴 $\mathcal{X}$ 中[[余极限]]都[[万有余极限|万有]]，就是说 $\mathcal{X}$ 中每个态射
  $f\colon A \to B$ 诱导的拉回函子
  $f^*\colon \mathcal{X}_{/B} \to \mathcal{X}_{/A}$
  都保持余极限。
- Mather 方体定理在 $\mathcal{X}$ 中成立。

那么 $\mathcal{X}$ 就是个意象。
注意此时 Mather 方体定理的“仅当”方向已经蕴含在
“余极限都万有”之中。
:::

## 用例

Mather 方体定理看起来有些抽象，这里试举一例来演示如何使用它。

::: proposition
设 $\mathcal{X}$ 是意象，
\[
\begin{tikzcd}
  T \ar[r] \ar[d, "{f}"]
  \ar[dr, phantom, pos=.8, "\lrcorner"]
  & Z \ar[d, "{f'}"] \\
  Y \ar[r] & W
\end{tikzcd}
\]
是 $\mathcal{X}$ 中推出方块。若 $f$ 是[[单射]]，则 $f'$ 也是单射，
且此方块也是拉回方块。
:::

::: proof
观察如下交换方体
\[
\begin{tikzcd}
  T \ar[rr] \ar[dd, equal] \ar[rd, equal]
  && Z \ar[rd, equal] \ar[dd, equal] \\
  & T \ar[rr, crossing over]
  \ar[dd, crossing over, "{f}" near start] &&
  Z \ar[dd, "{f'}"] \\
  T \ar[rr] \ar[rd, "{f}"] && Z \ar[rd, "{f'}"] \\
  & Y \ar[rr] && W
\end{tikzcd}
\]
它的顶面和后面依定义为推出-拉回方块，$f$ 是单射说明左面是拉回方块，
而命题假设底面是推出方块。于是可以应用 Mather 方体定理的“当”方向，
得到前面和右面也是拉回方块。这就是说原方块也是拉回方块，且 $f'$ 也是单射。
:::

## 推广

Mather 方体定理的“当”方向可以推广到一般的[[模态 (范畴论)|模态]]。

::: theorem
设 $\mathcal{X}$ 是意象，
$(\mathcal{L}, \mathcal{R})$ 是
$\mathcal{X}$ 上模态。如果 $\mathcal{X}$ 中交换方体
\[
\begin{tikzcd}
  \bullet \ar[rr] \ar[dd] \ar[rd] && \bullet \ar[rd] \ar[dd] \\
  & \bullet \ar[rr, crossing over] \ar[dd, crossing over] && \bullet \ar[dd] \\
  \bullet \ar[rr] \ar[rd] && \bullet \ar[rd] \\
  & \bullet \ar[rr] && \bullet
\end{tikzcd}
\]
的顶面和底面都是推出方块，且其左面和后面都是 [[模态 (范畴论)|$\mathcal{L}$-拉回方块]]，
那么方体的前面和右面也是$\mathcal{L}$-拉回方块。
:::

```terms
Mather 方体定理:
  en: Mather's cube theorem
```
