---
title: 二元谓词范畴
categories: [范畴逻辑]
---

**二元谓词范畴**是由[[集合]] $I$ 配上一个 $I×I$ 的[[子集]]
（作为“满足[[关系]]”的表示）作为对象的[[范畴]]，
它到[[集合范畴]]的[[遗忘函子]]存在一个简单的[[纤维范畴]]。

二元谓词范畴可以看作[[谓词范畴]]的二元推广，
可以用于定义[[商集]]。

## 定义

::: definition [二元谓词范畴]
**二元谓词范畴** Rel 由如下数据组成：

- **对象**：为形如 $(I, R)$ 的二元组，其中 $I, R$ 都是[[集合]]，且 $R\subseteq I×I$。

- **态射**：对于对象 $(I, R), (J, S)$，
  若函数 $f\colon I → J$ 满足
  \[
  ∀ (i, j) ∈ I×I, ((i,j) ∈ R \implies (f(i), f(j)) ∈ S)
  \]
  那么 $f$ 为一个 $(I, R)$ 到 $(J, S)$ 的态射。

:::

::: definition {@遗忘}
从二元谓词范畴到[[集合范畴]]间存在[[遗忘函子]]
$U\colon \mathsf{Rel} → \mathsf{Set}$，
将 $(I, R)$ 映射到 $I$、态射不变。
:::

::: theorem {@纤维化}
在 @遗忘 中定义的函子是[[纤维范畴]]。
:::

证明类似[[谓词范畴]]。

::: definition [相等] {@相等}
定义函子 $E$：
\[
\begin{aligned}
  \mathsf{Set} &→ \mathsf{Rel}\\
  I &↦ (I, \set{ (i,i) | i ∈ I })
\end{aligned}
\]
容易验证函子律。
:::

其中 $\set{ (i,i) | i ∈ I }$ 便是[[谓词范畴]]版本的相等函子 $E(I)$。

::: definition [商集] {@商集}
对于[[二元关系]] $R \subseteq I × I$，可以定义如下函子 $Q$：
\[
\begin{aligned}
  \mathsf{Rel} &→ \mathsf{Set}\\
  (I, R) &↦ I/\overline R
\end{aligned}
\]
其中 $\overline R$ 是蕴涵 $R$ 的最小[[等价关系]]。
:::

## 性质

::: theorem
二元谓词范畴可以由如下[[拉回 (范畴论)|拉回]]方块定义：
\[
\begin{tikzcd}
  \mathsf{Rel} \ar[r, dashed] \ar[d, dashed, "U"'] \ar[dr, phantom, pos=.2, "\ulcorner"] &
  \mathsf{Pred} \ar[d, "U"] \\
  \mathsf{Set} \ar[r, "Δ"] &
  \mathsf{Set}
\end{tikzcd}
\]
其中的两个 $U$ 分别是 @遗忘 中的遗忘函子和[[谓词范畴]]的遗忘函子。
:::

::: theorem
在 @相等 和 @商集 中定义的函子是一对[[伴随函子]]：
\[
Q \dashv E
\]
:::

::: proof
考虑 $R \subseteq I×I$。

展开 $Q$ 和伴随函子的定义，这也就是说如下两集合关于 $I$ 和 $(I, R)$ [[自然同构]]：
\[
\mathsf{Set}(I/\overline R, J) \simeq \mathsf{Rel}((I, R), E(J))
\]
进一步展开二元谓词范畴中态射的定义，考虑[[集合映射]]$u\colon I → J$ 满足
\[
∀ i, j ∈ I, ((i, j) ∈ R \implies u(i) = u(j))
\]
这意味着 $u$ 是二元谓词范畴中的态射 $u ∈ \mathsf{Rel}((I, R), E(J))$。

这个伴随关系可以看作是如下交换图中的虚线 $v$ 对于 $u$ 唯一存在：
\[
\begin{tikzcd}
  I \ar[r, two heads] \ar[dr, "u"] & I/\overline R \ar[d, dashed, "v"] \\
  & J
\end{tikzcd}
\]
:::
