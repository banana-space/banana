---
title: Borel–Moore 同调
categories: [同调论]
navboxes: [代数拓扑]
---

在[[代数拓扑]]中，**Borel–Moore 同调**
（也称**局部有限同调**）
是[[拓扑空间]]的一种[[同调]]理论，
由 [[Armand Borel]] 与 [[John Moore]] 于 1960 年引入。

直观地说，若将[[奇异同调]]的元素设想为 $n$ 维闭链，
则 Borel–Moore 同调的元素可设想为
“允许延伸到无穷远的 $n$ 维闭链”：
它允许无穷个奇异单形的组合，只要其局部上看有限。
例如，实直线 $\mathbb{R}$ 的 Borel–Moore 同调中，
由无穷个单形 $[n, n+1]$（$n \in \mathbb{Z}$）拼接而成的闭链
给出了一维同调类，这也是 Borel–Moore 同调中的[[基本类]]。

Borel–Moore 同调不满足同伦不变性，这与普通的[[奇异同调]]截然不同。
例如，虽然 $\mathbb{R}$ 可缩，但其一维 Borel–Moore 同调非零。

Borel–Moore 同调与[[紧支上同调]]互为对偶，
正如[[奇异上同调]]与[[奇异同调]]互为对偶。
在合适假设下，[[紧空间]]的 Borel–Moore 同调与奇异同调相同。

Borel–Moore 同调也可通过[[层论]]中的[[对偶化复形]]定义，
因而与[[六函子理论]]联系密切。
在较好的空间上，两种定义等价。

## 定义

Borel–Moore 同调有两种常用定义。它们都能对局部紧 Hausdorff 空间定义，
但只有对于性质较好的空间才相同。为便于区分，我们分别记这两种定义为
$H_n^{\mathrm{lf}} (X; A)$ 与
$H_n^{\mathrm{BM}} (X; A)$。

### 通过局部有限链

设 $X$ 为[[局部紧空间|局部紧]] [[Hausdorff 空间]]，$A$ 为 [[Abel 群]]。
回忆[[奇异同调]]中 $X$ 的 $A$-系数 $n$ 维奇异链群
$C_n (X; A)$ 由所有形式和 $\sum_\sigma a_\sigma \sigma$ 构成，
其中 $\sigma$ 取遍 $n$ 维奇异单形，$a_\sigma \in A$，
且仅有限个 $a_\sigma$ 非零。

在定义 Borel–Moore 同调时，我们将上述“有限”替换为“局部有限”：

::: definition [局部有限奇异链]
设 $X$ 为局部紧 Hausdorff 空间，$A$ 为 Abel 群，$n$ 为自然数。
称形式和 $\sum_\sigma a_\sigma \sigma$ 为 $X$ 的 $A$-系数
$n$ 维**局部有限奇异链**，
若其满足以下条件：

- （**局部有限性**）
  对 $X$ 中每个[[紧集|紧子集]] $K$，
  只有有限个满足 $a_\sigma \neq 0$ 的 $\sigma$ 的像与 $K$ 相交。

所有 $n$ 维局部有限奇异链构成的 Abel 群记为
$C_n^{\mathrm{lf}} (X; A)$。
当 $A$ 为[[交换环]]时，它自然具有 $A$-[[模]]结构。
:::

边界映射 $\partial_n \colon C_n^{\mathrm{lf}} (X; A) \to
C_{n-1}^{\mathrm{lf}} (X; A)$ 的定义与奇异链相同：
对每个 $n$ 维奇异单形 $\sigma$，
\[
\partial_n \sigma = \sum_{j = 0}^n (-1)^j (\sigma \circ \delta_j),
\]
其中 $\delta_j$ 是第 $j$ 个面嵌入，再线性延拓。
由于每个单形的面像含于原单形的像，
局部有限性在边界映射下得以保持，
故该映射良定并满足 $\partial^2 = 0$。
因此 $(C_\bullet^{\mathrm{lf}} (X; A), \partial)$ 构成链复形，
称为 $X$ 的**局部有限奇异链复形**。

::: definition [Borel–Moore 同调，链版本]
设 $X$ 为局部紧 Hausdorff 空间，$A$ 为 Abel 群，$n$ 为自然数。
定义 $X$ 的 $n$ 阶 $A$-系数 **Borel–Moore 同调**为链复形
$C_\bullet^{\mathrm{lf}} (X; A)$ 的[[链同调]]：
\[
H_n^{\mathrm{lf}} (X; A)
= \ker \partial_n / \operatorname{im} \partial_{n+1}.
\]
当 $A$ 为[[交换环]]时，它自然具有 $A$-[[模]]结构。
:::

若 $X$ 是紧空间，则取紧子集 $K = X$
使得局部有限链一定是有限链，
从而 $C_\bullet^{\mathrm{lf}} (X; A) = C_\bullet (X; A)$，
故此时 Borel–Moore 同调等于奇异同调。

### 通过层论

另一种定义方式使用[[层论]]。对局部紧 Hausdorff 空间 $X$，
令 $p_X \colon X \to \{*\}$ 为到单点空间的映射。
则 [[Verdier 对偶]]给出 $X$ 上的 **[[对偶化复形]]**
\[
\omega_X = \mathbb{D}_X \mathbb{Z}_X \simeq p_X^! \mathbb{Z}_{\{*\}},
\]
其中 $\mathbb{D}_X$ 是 $X$ 上 Abel 群层的 Verdier 对偶函子，
$\mathbb{Z}_X$ 和 $\mathbb{Z}_{\{*\}}$ 为[[常值层]]。我们考虑[[导出张量积]]
\[
\omega_X \otimes_\mathbb{Z}^\mathrm{L} A
\simeq p_X^! A_{\{*\}},
\]
其中 $A_{\{*\}}$ 为常值层。
若 $A$ 为交换环，这也是 $A$-模层的对偶化复形。

::: definition [Borel–Moore 同调，层论版本]
设 $X$ 为局部紧 Hausdorff 空间，$A$ 为 Abel 群，$n$ 为自然数。
定义 $X$ 的 $A$-系数 **Borel–Moore 同调**为对偶化复形的[[超上同调]]：
\[
H_n^{\mathrm{BM}} (X; A)
= H^{-n} (X, \omega_X \otimes_\mathbb{Z}^\mathrm{L} A)
= H^{-n} (\mathrm{R} \Gamma (X, \omega_X \otimes_\mathbb{Z}^\mathrm{L} A)).
\]
:::

### 比较

::: proposition [两种版本的比较]
设 $X$ 为局部紧 Hausdorff 空间，$A$ 为 Abel 群，$n$ 为自然数。
若 $X$ [[仿紧空间|仿紧]]、[[局部可缩空间|局部可缩]]、维数有限，则上述两种定义等价：
\[
H_n^{\mathrm{lf}} (X; A) \simeq H_n^{\mathrm{BM}} (X; A).
\]
这里 $X$ 的维数是指满足 $X$ 中某个开集的 $n$ 阶 $A$-系数[[紧支上同调]]非零的 $n$ 的[[上确界]]
（可能为 $\infty$）。
:::

见 [@Bredon1997, V, 12.21] 及 [@MathOverflow]。
例如，任何[[拓扑流形]]，以及有限维、局部有限的 [[CW 复形]]等，都满足这些性质。

一个两种定义不同的例子是 $X = \mathbb{N}^+ = \mathbb{N} \cup \{ \infty \}$，
即离散空间 $\mathbb{N}$ 的[[一点紧化]]。此时有
\[
\begin{aligned}
  H_0^{\mathrm{lf}} (X; A)
  & \simeq \bigoplus_{\mathbb{N} \cup \{ \infty \}} A,
  \\
  H_0^{\mathrm{BM}} (X; A)
  & \simeq \prod_{\mathbb{N} \cup \{ \infty \}} A.
\end{aligned}
\]
前者是因为 $\mathbb{N}^+$ 是紧空间，从而 $H_0^{\mathrm{lf}} (X; A) \simeq H_0 (X; A)$；
后者可以由 @prop:BM-局部化正合列 或 @thm:BM-Verdier-对偶 得出。

## 例子

- 由定义，若 $X$ 是[[紧空间]]，则
  $H_i^{\mathrm{lf}} (X; A) \simeq H_i (X; A)$。

- 若 $X$ 是 $n$ 维[[可定向流形]]（不必紧），
  则 $\omega_X \simeq \mathbb{Z}_X [n]$，
  从而对所有 $0 \leq i \leq n$ 有
  \[
  H_i^{\mathrm{BM}} (X; A) \simeq H^{n - i} (X; A),
  \]
  此即 [[Poincaré 对偶]]。
  此时两种 Borel–Moore 同调定义相同。
  当 $A$ 为[[交换环]]时，
  在同构 $H_n^{\mathrm{BM}} (X; A) \simeq H^0 (X; A)$
  下对应 $1 \in H^0 (X; A)$
  的元素是 $X$ 在 Borel–Moore 同调中的[[基本类]]。
  特别地，对 [[Euclid 空间]] $\mathbb{R}^n$，有
  \[
  H_i^{\mathrm{BM}} (\mathbb{R}^n; A)
  \simeq H^{n - i} (\mathbb{R}^n; A)
  \simeq \begin{cases}
    A, & i = n, \\
    0, & i \neq n.
  \end{cases}
  \]

## 性质

以下仍然以记号
$H_n^{\mathrm{lf}} (X; A)$ 与
$H_n^{\mathrm{BM}} (X; A)$
区分两种定义。

### 函子性

::: proposition [紧合前推]
设 $f \colon X \to Y$ 是局部紧 Hausdorff 空间之间的[[紧合映射]]。
则对每个自然数 $n$，有前推映射
\[
\begin{aligned}
  f_* \colon H_n^{\mathrm{lf}} (X; A)
  & \longrightarrow H_n^{\mathrm{lf}} (Y; A),
  \\
  f_* \colon H_n^{\mathrm{BM}} (X; A)
  & \longrightarrow H_n^{\mathrm{BM}} (Y; A),
\end{aligned}
\]
满足 $(g \circ f)_* = g_* \circ f_*$。
:::

局部有限链版本的前推映射可以直接对链定义，紧合性保证了前推仍局部有限。
而层论版本可由紧合映射的两种前推满足 $f_* = f_!$ 得出。

::: proposition [开嵌入拉回]
设 $X$ 是局部紧 Hausdorff 空间，
$j \colon U \hookrightarrow X$ 为[[开子空间]]。
则对每个自然数 $n$，有限制映射
\[
j^* \colon H_n^{\mathrm{BM}} (X; A)
\longrightarrow H_n^{\mathrm{BM}} (U; A).
\]
:::

当然，在 $H_n^{\mathrm{lf}} \simeq H_n^{\mathrm{BM}}$ 的情形下，
这也定义了 $H_n^{\mathrm{lf}}$ 的限制映射。

### 局部化正合列

::: proposition [局部化正合列] {@prop:BM-局部化正合列}
设 $X$ 为局部紧 Hausdorff 空间，$Z \subset X$ 为闭子集，
$U = X \setminus Z$ 为其补集。
则有自然的[[长正合列]]
\[
\cdots \longrightarrow
H_n^{\mathrm{BM}} (Z; A)
\xrightarrow{i_*}
H_n^{\mathrm{BM}} (X; A)
\xrightarrow{j^*}
H_n^{\mathrm{BM}} (U; A)
\xrightarrow{\partial}
H_{n-1}^{\mathrm{BM}} (Z; A)
\longrightarrow \cdots ,
\]
其中 $i \colon Z \to X$ 与 $j \colon U \to X$ 为含入映射。
:::

这可以视为[[相对同调]]长正合列在 Borel–Moore 同调中的一种加强版本。
换言之，此时 $H_\bullet^{\mathrm{BM}} (U; A)$ 等于相对 Borel–Moore 同调
$H_\bullet^{\mathrm{BM}} (X, Z; A)$。

另一方面，上述命题对 $H_\bullet^{\mathrm{lf}}$ 不一定成立，
例如前面提到的 $X = \mathbb{N}^+$ 的例子即为一个反例，此时取 $Z = \{ \infty \}$，
并注意到 $Z$ 和 $U$ 都是 $0$ 维流形，从而两种定义对 $Z$ 和 $U$ 相同，但对 $X$ 不同。

### 与紧支上同调的对偶

Borel–Moore 同调与[[紧支上同调]]互为对偶，
正如奇异上同调与奇异同调互为对偶。

::: theorem [与紧支上同调的对偶] {@thm:BM-Verdier-对偶}
设 $X$ 为局部紧 Hausdorff 空间，$A$ 为 Abel 群，$n$ 为整数。
则存在[[万有系数定理]]给出的分裂短正合列
\[
0 \longrightarrow
\operatorname{Ext}^1_\mathbb{Z}
\bigl( H_\mathrm{c}^{n+1} (X; \mathbb{Z}), A \bigr)
\longrightarrow
H_n^{\mathrm{BM}} (X; A)
\longrightarrow
\operatorname{Hom}_\mathbb{Z}
\bigl( H_\mathrm{c}^n (X; \mathbb{Z}), A \bigr)
\longrightarrow 0.
\]
:::

类似地，$X = \mathbb{N}^+$ 的例子说明此命题对 $H_\bullet^{\mathrm{lf}}$ 不一定成立。

### Poincaré 对偶

<see>[[Poincaré 对偶]]</see>

::: proposition [Poincaré 对偶] {@prop:BM-Poincare-对偶}
设 $M$ 是 $n$ 维[[流形]]，$A$ 为[[交换环]]。
取 $M$ 的一个 $A$-[[定向]]，记对应的[[基本类]]为
$[M] \in H_n^{\mathrm{BM}} (M; A)$。
则与 $[M]$ 的帽积给出同构
\[
(-) \smallfrown [M] \colon
H^k (M; A) \simeq H_{n - k}^{\mathrm{BM}} (M; A).
\]
:::

### 与普通同调的联系

::: proposition [与普通同调的联系] {@prop:BM-比较}
设 $X$ 为局部紧 Hausdorff 空间，$A$ 为 Abel 群。
令 $X^+$ 为 $X$ 的[[一点紧化]]，$\infty$ 为新增点，
并假设 $X^+$ [[局部可缩空间|局部可缩]]。则有同构
\[
H_i^{\mathrm{BM}} (X; A)
\simeq H_i (X^+, \{\infty\}; A)
\simeq \widetilde{H}_i (X^+; A),
\]
其中 $\widetilde{H}_i$ 表示[[约化同调]]。
:::

## 参考文献

教材：

```bibliography
Bredon1997:
  type: book
  author: 'Bredon, Glen E.'
  title: Sheaf theory
  edition: 2
  doi: 10.1007/978-1-4612-0647-7
  series: Graduate Texts in Mathematics
  number: 170
  publisher: Springer
  year: 1997
```

原始论文：

```bibliography
BorelMoore1960:
  type: article
  author: ['Borel, Armand', 'Moore, John C.']
  title: Homology theory for locally compact spaces
  journaltitle: Michigan Mathematical Journal
  volume: 7
  number: 2
  pages: 137–159
  year: 1960
  doi: 10.1307/mmj/1028998385
```

关于两种定义的比较的讨论：

```bibliography
MathOverflow:
  type: online
  site: MathOverflow
  title: Two points of view about Borel–Moore homology
  url: https://mathoverflow.net/a/249347
```

```terms
Borel–Moore 同调:
  en: Borel–Moore homology
  fr: homologie de Borel–Moore :f
  de: Borel–Moore-Homologie :f
```
