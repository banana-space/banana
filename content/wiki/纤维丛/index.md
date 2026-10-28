---
title: 纤维丛
categories: [纤维丛论]
---

<problems>
- “与主丛的关系”“与纤维化的关系”各节需要扩充。
</problems>

**纤维丛**是一种几何结构。
粗略地说，[[拓扑空间]] $B$ 上的纤维丛是指一个映射
\[
p \colon E \to B,
\]
其中，$B$（当连通时）的每一点 $b \in B$ 的[[原像]] $p^{-1} (b)$ 都同胚，
记作 $F$，称为这个纤维丛的**纤维**。
直观上看，我们给 $B$ 的每一点粘上同一个形状 $F$，而得到空间 $E$。

例如，[[乘积空间]] $B \times F$ 总是 $B$ 上的纤维丛，这样的纤维丛称为平凡的。
再例如，[[Möbius 带]]是[[圆周]] $S^1$ 上的纤维丛，
其纤维是线段。

## 定义

::: definition [纤维丛]
设 $B$ 是[[拓扑空间]]。
则 $B$ 上的**纤维丛**是一个[[连续映射]]
\[
p \colon E \to B,
\]
它满足以下条件：

- （**局部平凡性**）
  对每个 $b \in B$，存在 $b$ 的邻域 $U$，
  使得有交换图
  \[
  \begin{tikzcd}[column sep={4em,between origins}]
    p^{-1}(U) \ar[rr, "\varphi", "\simeq"'] \ar[dr, "p"'] &&
    U \times F \ar[dl, "\operatorname{pr}_1"] \\
    & U \rlap{\ ,}
  \end{tikzcd}
  \]
  其中 $F = p^{-1}(b)$ 是映射 $p$ 的纤维，$\varphi$ 是同胚。

特别地，$B$ 的同一连通分支上的所有纤维都同胚。
当纤维为 $F$ 时，我们也将这个纤维丛记作
\[
\begin{tikzcd}[sep=small]
  F \ar[r] & E \ar[d] \\
  & B \rlap{,}
\end{tikzcd}
\]
或者记作
\[
F \hookrightarrow E \to B.
\]
:::

## 例子

- $E = B \times F$ 是 $B$ 上的纤维丛，称为纤维为 $F$ 的**平凡丛**。

- [[Möbius 带]]是[[圆周]] $S^1$ 上的纤维丛，其纤维是线段。

- [[覆叠映射]]是纤维为[[离散空间]]的纤维丛。

- [[Hopf 纤维化]]是一个映射 $p \colon S^3 \to S^2$，
  它是以 $S^1$ 为纤维的纤维丛。

- [[向量丛]]是纤维为[[向量空间]]的纤维丛（并满足一些额外条件）。
  这包括[[光滑流形]]的[[切丛]]、[[余切丛]]等。

## 性质

### 与主丛的关系

### 与纤维化的关系

```terms
纤维丛:
  en-gb: fibre bundle
  en-us: fiber bundle
  de: Faserbündel :n
  fr: fibré :m
  la: fibratum :n
```
