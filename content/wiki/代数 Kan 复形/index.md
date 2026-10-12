---
title: 代数 Kan 复形
categories: [同伦代数]
notices:
  - name: 问题
    items:
      - “性质”一节需要扩充。
      - 关于 $K_{2,2}$ 的低维例子中，由线段 $\overline{xy}$、$\overline{yz}$ 构成的角按本文的定义似乎是 $\Lambda_1[2]$（对应 $K_{2,1}$），而不是 $\Lambda_2[2]$。
---

**代数 Kan 复形**是 [[$\infty$-群胚]]的一种定义。

## 定义

::: definition
对于自然数 \(k \le n\)，[[单纯集]] \(\Delta[n]\) 的第 \(k\) 个
**角**定义为删去内部与第 \(k\) 个面得到的单纯集 \(\Lambda_k[n]\)。
:::

更具体地说，由于 \(\Delta[n]\) 定义为[[可表函子]]
\(\mathbb\Delta(-, [n])\)，它满足 \(\Delta[n]([n])
= \{\mathrm{id}\}\) 为恒等映射的单点集，并且
\(\Delta[n]([n-1])\) 为 \((n+1)\)-元集，分别是跳过第
\(0,1,\dots,n\) 个元素的单调映射 \([n-1]\to[n]\)。
\(\Lambda_k[n]\) 的定义与 \(\Delta[n]\) 一致，但是将
\(\Lambda_k[n]([n])\) 定义为空集，\(\Lambda_k[n]([n-1])\)
删去跳过第 \(k\) 个元素的单调映射。

\(\Lambda_k[n]\) 到 \(\Delta[n]\) 有明显的单态射。

::: definition
**代数Kan复形**定义为一个单纯集 \(X\) 配备一族操作
\(K_{n,k}\)。对于每个态射 \(h : \Lambda_k[n] \to X\)，
\(K_{n,k}(h)\) 是一个态射 \(\Delta[n] \to X\)，使得
以下图表交换。
\[
\begin{tikzcd}
{\Lambda_k[n]} \ar[r, "h"] \ar[d, hook] & X \\
{\Delta[n]} \ar[ru, "{K_{n,k}(h)}"']             &
\end{tikzcd}
\]
这族操作被称为**Kan填充**。

代数Kan复形之间的态射定义为单纯集的态射 \(f : X \to Y\)，
使得对应的Kan填充操作满足
\[
K_{n,k}(f \circ h) = f \circ K_{n,k}(h),
\]
其中左侧的 \(K\) 为 \(Y\) 上的 Kan 填充，右侧的则为 \(X\) 上的填充操作。
:::

代数 Kan 复形构成范畴。

我们取一些低维的例子说明其直觉。考虑 \(K_{2,2}\)，它的定义域
为所有的角 \(\Lambda_2[2] \to X\)，即 \(X\) 中的三个点
\(x,y,z\)，与两条线段 \(\overline{xy}, \overline{yz}\)。
操作 \(K_{2,2}\) 得到一条新线段 \(\overline{xz}\) 与对应的三角形
\(\triangle xyz\)。
考虑一个拓扑空间。它对应的奇异单纯集中，线段就是拓扑空间
里的道路，即从区间 \([0,1]\) 出发的连续函数；
三角形就是拓扑空间中的三角形，即从\(\mathbb{R}^2\)平面上的一个三角形
出发的连续函数。因此 \(\triangle xyz\) 可以看作两条道路
\(\overline{xy}, \overline{yz}\) 拼接后到 \(\overline{xz}\)
的[[同伦]]。我们可以选择 \(\overline{xz}\) 即为两条道路的
拼接，而同伦为平凡的同伦。

## 例子

- 任何拓扑空间对应的奇异单纯集都可以配备代数 Kan 复形结构。
- 假设[[选择公理]]成立，给定一个[[Kan 复形]]，我们为每个角选择
  一个填充即得到一个代数Kan复形。

## 性质

```terms
代数 Kan 复形:
  en: algebraic Kan complex
角:
  en: horn
```
