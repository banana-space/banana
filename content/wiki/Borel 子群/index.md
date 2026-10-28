---
title: Borel 子群
categories: [代数群理论]
navboxes: [代数群理论]
---

<problems>
- “性质”一节定理的第三条 $N_G(B) = B$ 似乎需要假设 $G$ 连通（例如 $G$ 为非平凡有限群时 $B$ 平凡，$N_G(B) = G$）。
</problems>

[[仿射代数群]]的 **[[Armand Borel|Borel]] 子群**是一类特殊的子群。
在[[一般线性群]] $\mathrm{GL} (n)$ 中，所有[[上三角矩阵]]构成的子群是 Borel 子群。
对一般的仿射代数群而言，Borel 子群是上三角矩阵的概念的类比。

## 定义

::: definition [Borel 子群]
设 $G$ 为[[代数闭域]] $k$ 上的[[仿射代数群]]。
其 **Borel 子群**是指
$G$ 中[[极大、极小元|极大]]的[[Zariski 拓扑|Zariski 闭]]、[[连通空间|连通]]、
[[既约概形|既约]]的[[可解子群]]。
对一般域上的仿射代数群，其 Borel 子群指的是基变换到代数闭域之后
Borel 的子群。
:::

::: remark
由于连通、既约的代数群都[[整概形|整]]，由域上有限型概形维数有限，
容易看出代数闭域上的仿射代数群都有 Borel 子群。不过一般域上未必，
有 Borel 子群的代数群称为 **[[拟分裂约化群|拟分裂]]** 的。
:::

## 性质

::: theorem
设 $G$ 为代数闭域 $k$ 上的仿射代数群，$B$ 是其一个 Borel 子群。则：

- $G/B$ 紧合。

- $G$ 的任意 Borel 子群都与 $B$ 共轭。

- 正规化子 $N_G(B) = B$。

:::

## 例子

以下基域 $k$ 是任意域。

- [[一般线性群]] $\mathrm{GL} (n)$、[[特殊线性群]] $\mathrm{SL} (n)$ 中，
  所有[[上三角矩阵]]构成的子群是 Borel 子群。

- [[分裂约化群|分裂]][[特殊正交群]] $\mathrm{SO} (n)$、
  [[辛群]] $\mathrm{Sp} (2n)$ 的 Borel 子群可以如下描述。记 $n \times n$ 矩阵
  \[
  J_n = \begin{pmatrix}
    & & 1 \\ & ⋰ \\ 1
  \end{pmatrix} .
  \]
  我们以下面的方式将特殊正交群、辛群的元素看作矩阵：
  \[
  \begin{aligned}
    \mathrm{SO} (n) & = \{
      A \in \mathrm{GL} (n) \mid
      A^\top \, J_n \, A = J_n, \ \det A = 1
    \}, \\
    \mathrm{Sp} (2 n) & = \{
      A \in \mathrm{GL} (2 n) \mid
      A^\top \, \bigl( \begin{smallmatrix}
        & J_n \\ -J_n
      \end{smallmatrix} \bigr) \, A =
      \bigl( \begin{smallmatrix}
        & J_n \\ -J_n
      \end{smallmatrix} \bigr)
    \}.
  \end{aligned}
  \]
  则由上三角矩阵构成的子群是它们的 Borel 子群
  [@MalleTesterman2011, Example 6.7]。

- 设有二次[[域扩张|扩张]] $K/k$，[[拟分裂约化群|拟分裂]][[特殊酉群]]中，
  \[
  \mathrm{SU} (n) = \{
    A \in \mathrm{GL} (n) \mid
    \bar{A}^\top \, J_n \, A = J_n, \ \det A = 1
  \}
  \]
  所有上三角阵构成的子群是 Borel 子群。

## 参考文献

```bibliography
MalleTesterman2011:
  type: book
  author: ['Malle, Gunter', 'Testerman, Donna']
  title: Linear Algebraic Groups and Finite Groups of Lie Type
  publisher: Cambridge University Press
  location: Cambridge
  series: Cambridge Studies in Advanced Mathematics
  number: 133
  doi: 10.1017/cbo9780511994777
  year: 2011
  zbmath: '1256.20045'
```

```terms
Borel 子群:
  en: Borel subgroup
  de: Borel-Untergruppe :f
  fr: sous-groupe de Borel :m
```
