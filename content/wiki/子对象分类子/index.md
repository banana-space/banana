---
title: 子对象分类子
categories: [层论]
notices:
  - name: 问题
    items:
      - “性质”一节需要扩充。
navboxes: [层论]
---

**子对象分类子**是[[子对象]]（即[[单态射]]）的[[分类子]]。

在 $\mathsf{Set}$ 中，任何子集 $A \subset X$ 对应一个特征映射 $χ_A\colon X → \set{0,1}$，
将 $A$ 中的元素发送到 $1$，其余元素发送到 $0$。
该映射使得如下交换图是[[拉回 (范畴论)|拉回]]：

\[
\begin{tikzcd}
  A \ar[d, hook] \ar[r,shorten >=2pt] \ar[dr, phantom, pos=.2, "\ulcorner"] & \{1\} \ar[d, hook, "子对象分类子"] \\
  X \ar[r, "χ_A"] & \{0,1\}
\end{tikzcd}
\]

这可以看作一种对 $X$ 的元素“分类”的过程。

## 定义

::: definition
在某个[[范畴]]中，子对象分类子（若存在）是一个特定的单态射 $P → Ω$，其中：

- $Ω$ 叫做**真值对象**，

- 对于任意[[单态射]] $A \hookrightarrow X$ 都存在对应的**特征态射**
  $χ_A\colon X → Ω$ 使得如下图表为[[拉回 (范畴论)|拉回]]：
  \[
  \begin{tikzcd}
    A \ar[d, hook] \ar[r]
    \ar[dr, phantom, pos=.2, "\ulcorner"]
      & P \ar[d, hook, "子对象分类子"] \\
    X \ar[r, "χ_A"] & Ω
  \end{tikzcd}
  \]

:::

::: remark
子对象分类子一旦存在，$P$ 就必然是[[终对象]]。
:::

## 例子

### 在集合范畴中

[[集合范畴]]中的真值对象是 $\set{0,1}$，子对象分类子是 $\set1 \hookrightarrow \set{0,1}$。

### 在位象的层范畴中

::: theorem
令 $L$ 为[[位象]]，其[[层]]范畴 $\mathsf{Sh}(L)$ 的真值对象为如下层：
\[
\begin{aligned}
  Ω&\colon L → \mathsf{Set}\\
   &u ↦ \set{v∈L | v≤u}
\end{aligned}
\]
那么如下[[自然变换]]便是 $\mathsf{Sh}(L)$ 的子对象分类子：
\[
\begin{aligned}
  1 &→ Ω\\
  \star & ↦ u
\end{aligned}
\]
子层 $S \subseteq F$ 对应的特征态射 $χ_S\colon F → Ω$ 对于 $a∈F(u)$
给出满足 $a|_v ∈ S(v)$ 的最大元素 $v$。
:::

$Ω(u)$ 给出比 $u$ 小的所有元素的集合，而子层 $S \subseteq F$
满足对于任意 $u$ 有 $S(u) \subseteq F(u)$。

### 在有向图范畴中

::: theorem
[[有向图]]范畴中的真值对象如下所示：

```tikz
\begin{tikzpicture}
    \node[circle, fill=blue] (In) at (0,0) {};
    \node[circle, fill=gray] (Out) at (3,0) {};
    \draw[->, very thick, gray] (In) to[bend left] (Out);
    \draw[->, very thick, gray] (Out) to[bend left] (In);
    \draw[->, very thick, gray] (In) to[loop left, in=120, out=170, looseness=30] (In);
    \draw[->, very thick, blue] (In) to[loop left, in=-120, out=-170, looseness=30] (In);
    \draw[->, very thick, gray] (Out) to[loop right, in=25, out=-25, looseness=30] (Out);
    \end{tikzpicture}
```

[[子图]] $H \subseteq G$ 对应的特征态射 $χ_H$ 为如下[[图同态]]：

- 将 $H$ 中的[[顶点]]映射到蓝色的顶点，其余映射到灰色的顶点。

- 将 $H$ 中的边映射到蓝色的[[边]]，其余映射到灰色的边。
  注意灰色的边有四条，分别对应边的两个顶点属于或不属于 $H$ 的情况。

:::

## 性质

```terms
子对象分类子:
  en: subobject classifier
特征态射:
  en: characteristic morphism
真值对象:
  en: object of truth values
```
