---
title: Hecke 代数（双陪集）
categories: [表示论]
notices:
  - name: 问题
    items:
      - “例子”一节中与 Weyl 群的 Hecke 代数的关系及 Satake 同构等结论可能需要系数环满足一定条件，这些条件尚未写明。
---

对[[群]] $G$ 和子群 $H$，
[[双陪集]] $H\backslash G/H$ 的 **Hecke 代数**
是其上[[函数]]在[[卷积]]下构成的[[结合代数]]。
在一些特殊情况下，Hecke 代数的结构有较好的描述，
此类结论例如 [[Satake 同构]]。

Hecke 代数在数论和表示论中很常见，
[[模形式]]和[[自守形式]]上均有 Hecke 代数的作用，
称为 [[Hecke 算子]]。

当 $G$ 是 [[Lie 群]]或[[代数群]]，
且 $H$ 为相应的子结构时，
Hecke 代数可以做[[范畴化]]：
此时会考虑[[齐性空间]] $G/H$ 上 $H$-[[等变层]]构成的[[范畴]]，
层之间也可以定义[[卷积]]操作；
Hecke 代数的结构定理也可以推广，例如[[几何 Satake 等价]]；
[[自守形式]]上的 [[Hecke 算子]]也推广为 [[Hecke 对应]]。

## 定义

::: definition [Hecke 代数]
设 $G$ 是 [[群]]，$H$ 是它的[[子群]]，
满足以下有限条件：

- 对任意 $g \in G$，$HgH/H$ 有限。

$A$ 为[[交换环]]，**Hecke 代数** $\mathcal{H}(G/H, A)$
是如下 $A$-[[结合代数]]：

- 作为集合，它由所有有限支集映射 $H\backslash G/H \to A$ 构成。

- 作为 $A$-[[模]]，它的[[加法]]和[[数乘]]逐点定义。

- 它的[[乘法]]是如下[[卷积]]：将 $H\backslash G/H$ 上的函数视为
  $G/H \times G/H$ 上的 $G$-不变函数（这里 $G$ 对角作用），
  则
  \[
  u * v(x, z) = \sum_{y\in G/H} u(x, y)v(y, z).
  \]

- 它的乘法[[单位元]]是在双陪集 $H$ 取 $1$ 而在其它点取 $0$ 的映射。

:::

在[[卷积]]下，也有一类自然的 Hecke 代数的模。

::: definition [Hecke 代数的模]
在上述假设下，设 $K$ 是 $G$ 的子群，
将 $K\backslash G/H$ 上函数视为 $G/K \times G/H$
上 $G$-不变函数，
有限支集映射 $K\backslash G/H \to A$ 之集
$C_c(K\backslash G/H, A)$ 有如下
$\mathcal{H}(G/H, A)$-[[右模]]结构：
\[
u * v(x, z) = \sum_{y\in G/H} u(x, y)v(y, z),
\]
其中 $u \in C_c(K\backslash G/H, A)$，$v \in \mathcal{H}(G/H, A)$。
:::

## 例子

::: example
作为平凡的例子，当 $H$ 为[[平凡群]]时，$\mathcal{H}(G/H, A)$
即是[[群代数]] $A[G]$。
:::

以下两例阐述了双陪集的 Hecke 代数与 Weyl 群的 Hecke 代数的关系。

::: example
令 $G$ 为[[有限域]] $\mathbb{F}_{q}$ 上的[[约化群]]，
$B$ 是它的 [[Borel 子群]]，$W$ 是 $G$ 的[[Weyl 群]]，
则有同构
\[
\mathcal{H}(G(\mathbb{F}_q)/B(\mathbb{F_q}))
\simeq \mathcal{H}(W, q^{1/2}).
\]
其中后者表示 $W$ 的 [[Iwahori–Hecke 代数|Hecke 代数]]在 $q$ 处的[[特殊化]]。
:::

::: example
令 $G$ 为[[有限域]] $\mathbb{F}_{q}$ 上的[[约化群]]，
$I$ 是 $G(\mathbb{F}_q((t)))$ 的 [[Iwahori 子群]]，
则有同构
\[
\mathcal{H}(G(\mathbb{F}_q((t)))/I)
\simeq \mathcal{H}(W_{\text{aff}}, q^{1/2})
\]
这里 $W_{\text{aff}}$ 是 $W$ 对应的[[仿射 Weyl 群]]。
:::

下面一例则是著名的 [[Satake 同构]]。

::: example
令 $G$ 为[[有限域]] $\mathbb{F}_{q}$ 上的[[约化群]]，
则有同构
\[
\mathcal{H}(G(\mathbb{F}_q((t)))/G(\mathbb{F}_q[[t]]),
\mathbb{Z}[q^{\pm 1/2}])
\simeq \mathbb{Z}[q^{\pm 1/2}][\mathrm{X}_0(T)]^W.
\]
这里 $\mathrm{X}_0(T)$ 表示 $G$ 的[[余权格]]，
$W$ 表示 $G$ 的 [[Weyl 群]]。
:::

以上是函数域的 Satake 同构，
对数域也有类似结论。在模形式理论中用到的 Satake 同构则是

::: example
\[
\mathcal{H}(\mathrm{GL}_n(\mathbb{Q}_p)/\mathrm{GL}_n(\mathbb{Z}_p), \mathbb{Z}[q^{\pm 1/2}])
\simeq \mathbb{Z}[q^{\pm 1/2}][\sigma_1, \cdots, \sigma_n^{\pm 1}].
\]
这里的 $\sigma_1, \cdots, \sigma_n$ 即是 [[Hecke 算子]]，
它们可以作用在模形式上。
:::

```terms
Hecke 代数:
  en: Hecke algebra
  fr: algèbre de Hecke
```
