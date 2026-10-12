---
title: 自由模
aliases: [自由交换群, 自由左模, 自由右模]
categories: [模论]
navboxes: [模论]
---

**自由模**是各[[生成元]]没有约束条件的[[模]]。

## 定义

::: definition [自由模]
对[[集合]] $S$ 和[[环]] $A$，
由 $S$ 生成的**自由 $A$-左模**是[[直和]]
\[
A^{\oplus S}=\bigoplus_{i \in S} A,
\]
这里将 $A$ 视为自身上的左模。
$A$-左模 $M$ 称为**自由 $A$-左模**，
如果存在集合 $S$ 使得 $M$ 同构于 $S$ 生成的自由 $A$-左模。

类似地，可定义自由 $A$-右模。
当 $A$ 为[[交换环]]时，两种概念相同，称为自由 $A$-模。
:::

::: definition [秩]
上述定义中，$S$ 的[[势]]称为 $M$ 的**秩**。
:::

## 性质

::: proposition [秩的良定性]
对性质较好的环（例如[[交换环]]、[[除环]]、有限环、[[域]]上有限维[[结合代数|代数]]），
其上自由模 $M$ 的秩是唯一的。这样的环称为 **[[不变基数环]]**。
:::

在线性代数中，我们知道一个线性空间的子空间维数不大于原线性空间维数。
交换幺环上有限秩自由模也有类似的结论。

::: proposition
$A$ 是一个含幺交换环，$M$ 是 $A$ 上秩 $n$ 的自由模。如果 $M$ 的子模 $M_0$ 也是自由模，
则 $\text{rank }M_0\le n$。
:::

::: proof
只须证明如果 $m> n$，则不存在单射的模同态 $f: A^m\to A^n$。
其实，如果这样的 $f$ 存在，考虑 $\varphi= i\circ f: A^m\to A^m$，其中 $i: A^n\to A^m$
是含入映射 $(a_1,\cdots, a_n)\mapsto (a_1,\cdots, a_n, 0,\cdots, 0)$。
则 $\varphi$ 也是单射的模同态且对任意 $x\in A^m$，$\varphi(x)$ 的最后一个坐标为 $0$。
由 [[Cayley-Hamilton 定理]]，存在首一多项式 $p\in A[X]$ 零化 $\varphi$（即 $p(\varphi)= 0$）。
设 $p$ 是零化 $\varphi$ 的多项式中次数最小的。如果 $p$ 常数项是 $0$，
由 $\varphi$ 的单射性，$\frac{p(X)}{X}$ 也零化 $\varphi$，与 $p$ 次数最小矛盾。
所以 $p$ 常数项不为 $0$，于是对于 $y= (0,0,\cdots, 0,1)\in A^m$，$(p(\varphi))(y)$
最后一个坐标是 $p$ 的常数项，所以 $(p(\varphi))(y)\ne 0$，这与 $p(\varphi)=0$ 矛盾。
于是不存在单射的模同态 $f: A^m\to A^n$。
:::

::: proposition [万有性]
函子 $X\mapsto A^{\oplus X}$ 是 $A$-模范畴到[[集合范畴]]的[[遗忘函子]]的左[[伴随函子]]。
对集合 $S$ 和 $A$-模 $M$，存在同构
\[
A\text{-}\mathsf{Mod} (A^{\oplus S}, M) \simeq
\mathsf{Set} (S, M).
\]
这是[[自由–遗忘伴随]]的一个例子。
:::

::: proposition [同调性质]
自由模是[[投射模]]，也是[[平坦模]]。
:::

## 例子

- $A$ 本身是其上自由模。

```terms
自由模:
  en: free module
  de: freier Modul
  fr: module libre
  grc: ἐλεύθερον πρότυπον
  la: modulus liber
```
