---
title: Clifford 代数
categories: [旋量几何]
notices:
  - name: 问题
    items:
      - “实数情形”一节需要补充上述同构的具体构造。
---

**Clifford 代数**是[[旋量几何]]中的基本构造。
给定[[向量空间]] $V$ 和其上[[二次型]] $Q$，
可以构造 Clifford 代数为
\[
\mathrm{Cl}(V, Q) := \frac{\mathrm{T}^\bullet(V)}{\langle v^2 = -Q(v) \rangle}
\]
也就是说，Clifford 代数由向量空间 $V$ 的元素生成，并满足某种反交换关系。

实数与复数上的 Clifford 代数有着良好的结构，
它们同构于[[矩阵代数]]或矩阵代数的乘积。
Clifford 代数的一组生成元在此同构下对应的矩阵即是物理学中常用的 [[$\gamma$ 矩阵]]。

从 Clifford 代数出发，可以构造[[旋量群]]和[[旋量表示]]。
Clifford 代数的单表示即为[[旋量表示]]。[[扩旋量群]]则是 Clifford 代数的乘法子群。

## 定义

::: definition [Clifford 代数]
设 $V$ 是域 $k$ 上的[[向量空间]]，
$Q$ 是 $V$ 上的非退化[[二次型]]，
**Clifford 代数**定义为[[商代数]]
\[
\mathrm{Cl}(V, Q) :=
\frac{\mathrm{T}^\bullet(V)}{\langle v^2 = -Q(v,v), v \in V \rangle}
\]
其中 $\mathrm{T}^\bullet(V)$ 为[[张量代数]]。

当 $k = \mathbb{R}$，$Q$ 的正、负指标分别为 $p, q$ 时，
Clifford 代数记为 $\mathrm{Cl}(p, q)$。
当 $k = \mathbb{C}$，$V$ 为 $n$ 维时，
Clifford 代数记为 $\mathrm{Cl}(n, \mathbb{C})$。
:::

::: definition [超代数结构]
Clifford 代数上有如下[[超代数]]结构：
\[
\mathrm{Cl}(V, Q) = \mathrm{Cl}(V, Q)^+ \oplus \mathrm{Cl}(V, Q)^-
\]

其中：
- 偶元素为形如 $v_1\cdots v_{k}$ 的元素的线性组合，
$v_i \in V$，$k$ 为偶数。
- 奇元素为形如 $v_1\cdots v_{k}$ 的元素的线性组合，
$v_i \in V$，$k$ 为奇数。

:::

## 例子

以下列出一些 $V$ 维数较小的情形。

- $\mathrm{Cl}(0,0) \simeq \mathbb{R}$。

- $\mathrm{Cl}(1,0) \simeq \mathbb{C}$，
$\mathrm{Cl}(0,1) \simeq \mathbb{R} \times \mathbb{R}$。

- $\mathrm{Cl}(2,0) \simeq \mathbb{H}$，
$\mathrm{Cl}(1,1) \simeq \mathrm{Cl}(0,2) \simeq \mathrm{M}_2(\mathbb{R})$。

## 性质

### 复数情形

复数域上的 Clifford 代数结构较为简单。

::: proposition [Clifford 代数的结构]
\[
\mathrm{Cl}(n, \mathbb{C}) \simeq
\left\{ \begin{array}{cc}
  M_d(\mathbb{C}) \times M_d(\mathbb{C}) & n \text{ 为奇数} \\
  M_d(\mathbb{C}) & \ n \text{ 为偶数},
\end{array} \right.
\]
其中 $n$ 为奇数时，$d = 2^{\frac{n-1}{2}}$；
$n$ 为偶数时，$d = 2^{\frac{n}{2}}$。

此外，
\[
\mathrm{Cl}(n, \mathbb{C})^+ \simeq \mathrm{Cl}(n-1, \mathbb{C}).
\]
:::

### 实数情形

实数域上，Clifford 代数满足如下递推关系。

::: proposition [递推关系]
- $\mathrm{Cl}(p, q) \otimes \mathrm{Cl}(1,1)
  \simeq \mathrm{Cl}(p+1, q+1)$。

- $\mathrm{Cl}(p, 0) \otimes \mathrm{Cl}(0, 2)
  \simeq \mathrm{Cl}(0, p+2)$。

- $\mathrm{Cl}(0, q) \otimes \mathrm{Cl}(2, 0)
  \simeq \mathrm{Cl}(q+2, 0)$。

- 如 $p \geq 1$，
$\mathrm{Cl}(p, q)^+ \simeq \mathrm{Cl}(p-1, q)$；
如 $q \geq 1$，
$\mathrm{Cl}(p, q)^+ \simeq \mathrm{Cl}(q-1, p)$。

:::

由此可以归纳证明下表列出的结构定理。

::: proposition [实 Clifford 代数的结构]
| $p - q$ 模 $8$ | $\mathrm{Cl}(p, q)$ | $d$ |
| --- | --- | --- |
| $0$ | $\mathrm{M}_d(\mathbb{R})$ | $2^{\frac{p+q}{2}}$ |
| $1$ | $\mathrm{M}_d(\mathbb{C})$ | $2^{\frac{p+q-1}{2}}$ |
| $2$ | $\mathrm{M}_d(\mathbb{H})$ | $2^{\frac{p+q-2}{2}}$ |
| $3$ | $\mathrm{M}_d(\mathbb{H}) \times \mathrm{M}_d(\mathbb{H})$ | $2^{\frac{p+q-3}{2}}$ |
| $4$ | $\mathrm{M}_d(\mathbb{H})$ | $2^{\frac{p+q-2}{2}}$ |
| $5$ | $\mathrm{M}_d(\mathbb{C})$ | $2^{\frac{p+q-1}{2}}$ |
| $6$ | $\mathrm{M}_d(\mathbb{R})$ | $2^{\frac{p+q}{2}}$ |
| $7$ | $\mathrm{M}_d(\mathbb{R}) \times \mathrm{M}_d(\mathbb{R})$ | $2^{\frac{p+q-1}{2}}$ |

| $p - q$ 模 $8$ | $\mathrm{Cl}(p, q)^+$ | $d$ |
| --- | --- | --- |
| $0$ | $\mathrm{M}_d(\mathbb{R}) \times \mathrm{M}_d(\mathbb{R})$ | $2^{\frac{p+q-2}{2}}$ |
| $1$ | $\mathrm{M}_d(\mathbb{R})$ | $2^{\frac{p+q-1}{2}}$ |
| $2$ | $\mathrm{M}_d(\mathbb{C})$ | $2^{\frac{p+q-2}{2}}$ |
| $3$ | $\mathrm{M}_d(\mathbb{H})$ | $2^{\frac{p+q-3}{2}}$ |
| $4$ | $\mathrm{M}_d(\mathbb{H}) \times \mathrm{M}_d(\mathbb{H})$ | $2^{\frac{p+q-4}{2}}$ |
| $5$ | $\mathrm{M}_d(\mathbb{H})$ | $2^{\frac{p+q-3}{2}}$ |
| $6$ | $\mathrm{M}_d(\mathbb{C})$ | $2^{\frac{p+q-2}{2}}$ |
| $7$ | $\mathrm{M}_d(\mathbb{R})$ | $2^{\frac{p+q-1}{2}}$ |
:::

这样的模 $8$ 周期也是 [[Bott 周期律]]的体现。

```terms
Clifford 代数:
  en: Clifford algebra
  de: Clifford-Algebra :f
  fr: algèbre de Clifford :f
```
