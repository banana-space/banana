---
title: Yoneda 引理
aliases: [米田引理]
categories: [范畴论]
notices:
  - name: 问题
    items:
      - “叙述和证明”一节中，Yoneda 引理的证明似乎不完整：只说明了自然变换由 $\eta_c (1_c)$ 确定（即映射是单射），没有说明满射性与同构的自然性。
navboxes: [范畴论]
---

**[[Nobuo Yoneda|Yoneda]] 引理**（或**米田引理**）
是[[范畴论]]中的一个基本的结论。
Yoneda 引理说明，[[范畴]]中的[[对象]]由所有别的对象到它的[[态射]]决定：
例如，如果有两个对象，使得任意别的对象到它们的态射集都（[[自然同构|自然]]地）同构，
那么这两个对象就同构（@cor-unique-representing）。

基于 Yoneda 引理，我们可以把范畴中的对象看作范畴上的[[预层]]，
这也被称为 [[Yoneda 嵌入]]（@cor-yoneda-embedding）。
基于这种观点，范畴上的预层常常被视为范畴中的[[广义对象]]。

Yoneda 引理也是[[伴随函子]]理论（从而，[[泛性质]]理论）、[[可表函子]]理论建立的基础。

## 叙述和证明

::: definition [Yoneda 嵌入] {@def-yoneda-embedding}
设 $\mathcal{C}$ 是[[范畴]]，
记 $\mathsf{Fun} (\mathcal{C}^{\mathrm{op}}, \ \mathsf{Set})$
为 $\mathcal{C}$ 到[[集合范畴]]的所有[[反变函子]]构成的[[函子范畴]]。
这个范畴也被称为 $\mathcal{C}$ 上[[预层]]的范畴。
函子
\[
\begin{aligned}
  y \colon \mathcal{C} & \to \mathsf{Fun} (\mathcal{C} ^{\mathrm{op}}, \ \mathsf{Set}), \\
  c & \mapsto \mathcal{C} (-, c)
\end{aligned}
\]
称为 **[[Yoneda 嵌入]]**。
（至于它为什么被称为“嵌入”，见 @cor-yoneda-embedding。）
它把每个元素 $c \in \mathcal{C}$
映到一个函子 $y(c) = \mathcal{C} (-, c)$，通常记为
\[
h_c \colon \mathcal{C} ^{\mathrm{op}} \to \mathsf{Set},
\]
称为被 $c$ [[可表函子|表出]]的函子，
或被 $c$ 表出的预层。
:::

::: remark
在[[乘积范畴–函子范畴伴随]]下，我们有
\[
\mathsf{Fun} \bigl( \mathcal{C} \times \mathcal{C} ^{\mathrm{op}}, \ \mathsf{Set} \bigr)
\simeq \mathsf{Fun} \bigl(
  \mathcal{C}, \
  \mathsf{Fun} ( \mathcal{C} ^{\mathrm{op}}, \ \mathsf{Set} )
\bigr).
\]
在这个对应关系下，Yoneda 嵌入对应于 [[Hom 函子]]
\[
\begin{aligned}
  \operatorname{Hom} \colon \mathcal{C} ^{\mathrm{op}} \times \mathcal{C} & \to \mathsf{Set}, \\
  (c, d) & \mapsto \mathcal{C} (c, d).
\end{aligned}
\]
:::

::: theorem [Yoneda 引理] {@thm-yoneda}
设 $\mathcal{C}$ 是[[范畴]]。对任意的
$X \in \mathsf{Fun} ( \mathcal{C} ^{\mathrm{op}}, \ \mathsf{Set} )$，
有[[自然同构]]
\[
\mathsf{Fun} ( \mathcal{C} ^{\mathrm{op}}, \ \mathsf{Set} ) \ (h_c, X)
\simeq X(c).
\]
换言之，预层 $X$ 在 $c$ 的取值等于“从 $c$ 到 $X$ 的态射集”。
:::

::: proof
假设我们有[[自然变换]]
\[
\eta \colon \mathcal{C}(-, c) \Rightarrow X.
\]
则对任意态射 $f \in \mathcal{C}(b, c)$，有交换图
\[
\begin{tikzcd}
  \mathcal{C}(c, c) \ar[r, "\eta_c"] \ar[d, "{\mathcal{C} (f, c)}"'] &
  X (c) \ar[d, "X(f)"] \\
  \mathcal{C}(b, c) \ar[r, "\eta_b"] &
  X (b) \rlap{\ .}
\end{tikzcd}
\]
考虑左上角的元素 $1_c \in \mathcal{C}(c, c)$。
若记 $\xi = \eta_c (1_c) \in X(c)$，
则 $1_c$ 在交换图中被映到下列元素：
\[
\begin{tikzcd}
  1_c \ar[r, |->] \ar[d, |->] & \xi \ar[d, |->] \\
  f \ar[r, |->] & X(f)(\xi) \rlap{\,.}
\end{tikzcd}
\]
这说明，自然变换 $\eta$ 被元素
$\xi \in X(c)$ 完全确定。
:::

::: remark
对于[[协变函子]]而言，同理，我们也有 Yoneda 嵌入
\[
\begin{aligned}
  y \colon \mathcal{C} ^{\mathrm{op}} & \to \mathsf{Fun} (\mathcal{C}, \ \mathsf{Set}), \\
  c & \mapsto h^c = \mathcal{C} (c, -).
\end{aligned}
\]
此时，Yoneda 引理说明对任意 $X \in \mathsf{Fun} (\mathcal{C}, \ \mathsf{Set})$，
有自然同构
\[
\mathsf{Fun} ( \mathcal{C}, \ \mathsf{Set} ) \ (h^c, X)
\simeq X (c).
\]
:::

## 推论 {@sect-corollaries}

::: corollary {@cor-yoneda-embedding}
设 $\mathcal{C}$ 是范畴。
则 Yoneda 嵌入（@def-yoneda-embedding）
\[
y \colon \mathcal{C} \to \mathsf{Fun} (\mathcal{C} ^{\mathrm{op}}, \ \mathsf{Set})
\]
是[[全忠实函子]]。
:::

::: proof
在 @thm-yoneda 中取 $X = h_d$，得到自然同构
\[
\mathsf{Fun} ( \mathcal{C} ^{\mathrm{op}}, \ \mathsf{Set} ) \ (h_c, h_d)
\simeq \mathcal{C}(c, d).
\]
:::

::: corollary {@cor-unique-representing}
设 $\mathcal{C}$ 是范畴，设 $c, d \in \mathcal{C}$。
如果有自然同构 $h_c \simeq h_d$，即
\[
\mathcal{C}(-, c) \simeq \mathcal{C}(-, d),
\]
那么 $c, d$ 在 $\mathcal{C}$ 中同构。
:::

## 推广

- [[充实范畴 Yoneda 引理]]
- [[$2$-范畴 Yoneda 引理]]
- [[$(\infty,1)$-范畴 Yoneda 引理]]

```terms
Yoneda 引理:
  en: Yoneda lemma
  de: Lemma von Yoneda
  fr: Lemme de Yoneda
```
