---
title: 有限群常表示论
categories: [群表示论]
navboxes: [群论, 群表示论]
---

<problems>
- “有限循环群”的例子中，直接给出 $\mathbb{Q}[C_n]$ 不可约特征标的轨道和似乎应为 $\operatorname{Tr}_{\mathbb{Q}(\chi_j)/\mathbb{Q}}(\chi_j)$；$\operatorname{Tr}_{K/\mathbb{Q}}(\chi_j)$ 是它的 $[K : \mathbb{Q}(\chi_j)]$ 倍。
</problems>

**有限群常表示论**，简称**常表示论**，指的是[[有限群]] $G$
在 $k$-[[向量空间]]上的表示论，
其中 $k$ 的[[特征 (环论)|特征]]不整除 $G$ 的阶数。
此时所有[[群表示]]都[[半单模|半单]]，而较易研究。

以下列出此一理论中的重要结论，
具体证明见相应条目。

## 代数闭域情形

以下设 $G$ 是[[有限群]]，$k$ 是[[代数闭域]]，
且域 $k$ 的[[特征 (环论)|特征]]不整除 $G$ 的阶数。

### 半单性

如下的 [[Maschke 定理]]表明了常表示论中所有表示都是半单的。

::: theorem [Maschke]
$G$ 的任一 $k$-表示都半单。
等价地说，[[群代数]] $k[G]$ 是[[半单代数]]。
:::

从而由 [[Artin–Wedderburn 定理]]，
群代数 $k[G]$ 就是若干[[矩阵代数]]的直积。
每个矩阵代数对应于一个[[不可约表示]]。

### 特征标理论

<see>[[特征标]]</see>

由于有半单性作为基础，特征标理论是研究群表示论的有力工具。
它将表示对应于群上的函数，而后者有时更易研究。

::: definition [特征标]
群 $G$ 的表示 $(V,\rho)$ 的**特征标**是函数
\[
\begin{aligned}
  \chi_V &\colon G \to k \\
  g &\mapsto \operatorname{tr}(\rho(g)).
\end{aligned}
\]
:::

特征标理论的主要结论如下，
它给出了从表示到群上函数的对应。
大致来说，表示由其特征标唯一决定，
且表示的直和、张量积对应于特征标的逐点和与乘积。

::: theorem
特征标诱导的如下[[环]]同构：
\[
K_0(\mathsf{Rep}_k(G)) \otimes_{\mathbb{Z}} k
\to \mathcal{C}(G, k)^G
\]
这里 $K_0$ 一项表示 $G$ 的有限维 $k$-表示构成的范畴的
[[$K_0$ 群]]，它在表示的[[张量表示|张量]]积下成为环；
后者表示在 $G$-共轭作用下不变，取值在 $k$ 中的函数，
它在逐点加法和乘法下成为环。

在两空间上还可以自然地赋予[[对称双线性型]]。
前者上的对称双线性型为
\[
(V_1, V_2) \mapsto \dim\operatorname{Hom}_G(V_1, V_2),
\]
后者则为
\[
(\chi_1, \chi_2) \mapsto \frac{1}{|G|}
\sum_{g\in G}\chi_1(g^{-1})\chi_2(g).
\]
此环同构诱导对称双线性型之间的同构。
:::

### 诱导表示

<see>[[Artin 定理]]、[[Brauer 定理]]</see>

构造群表示的自然想法是使用它的子群表示的[[诱导表示]]。
下面一些定理则是这些想法的具体实现。
使用这些定理，可以将群表示的计算化归到较简单的群。

::: theorem [Artin]
记号同上。设 $X$ 是由 $G$ 的一些子群 $H$ 构成的集合，
则以下二条件等价：

- 对任意 $g \in G$，存在 $H \in X$ 和 $f \in G$，
  使得 $fgf^{-1} \in H$。
- 映射
  \[
  \bigoplus_{H\in X} \operatorname{Ind}_H^G \colon
  \bigoplus_{H \in X} K_0(\mathsf{Rep}_k(H))
  \to K_0(\mathsf{Rep}_k(G))
  \]
  的[[余核]]有限。

特别地，取 $X$ 为所有循环子群构成的集合，则它满足第一个条件，
因此满足第二个条件。
:::

::: theorem
记号同上。设 $p$ 是固定的素数，
令 $X(p)$ 为 $G$ 的所有 [[$p$-基础子群]]构成的集合，
则有
\[
\bigoplus_{H\in X(p)} \operatorname{Ind}_H^G \colon
\bigoplus_{H \in X(p)} K_0(\mathsf{Rep}_k(H))
\to K_0(\mathsf{Rep}_k(G))
\]
的[[余核]]有限，且阶与 $p$ 互素。
:::

### 例子

<see>[[置换群表示论]]、[[Deligne–Lusztig 理论]]</see>

群表示的两个重要例子是[[置换群]]与 [[Lie 型有限群|Lie 型群]]的表示论。
其中前者的结构（如[[不可约表示]]、[[诱导表示]]、[[限制表示]]、[[特征标]]等）
可以用 [[Young 图]]这一组合对象很好地描述，
它也可以通过 [[Schur–Weyl 对偶]]与[[一般线性群]]的表示相联系。
后者通过 [[Deligne–Lusztig 理论]]可以用一些代数几何对象
（[[代数簇]]的 [[$\ell$ 进上同调]]）来描述。

## 一般域情形

<see>[[有理性理论(群表示论)]]</see>

以下仍设 $G$ 是[[有限群]]，$k$ 是域且 $k$ 的[[特征 (环论)|特征]]不整除 $G$ 的阶数。
当 $k$ 未必[[代数闭域]]时，前述多数结论可推广至此。

### 半单性与结构定理

::: theorem [半单性与结构]
$k[G]$ 是[[半单代数]]。
由 [[Artin–Wedderburn 定理]]，存在同构
\[
k[G] \cong \prod_{i=1}^r M_{n_i}(D_i),
\]
其中各 $D_i$ 是 $k$ 上的有限维[[除环|可除代数]]。
每个直积项 $M_{n_i}(D_i)$ 对应 $G$ 的一个[[不可约表示]] $V_i$，
且 $\operatorname{End}_G(V_i) \cong D_i^{\mathrm{op}}$。
:::

### 分裂域与绝对不可约表示

::: definition [分裂域与绝对不可约表示]
若 $G$ 在 $k$ 上的表示 $V$ 在基域扩张到任意域后仍不可约，
则称它为**绝对不可约表示**，
由上述结构定理，这等价于 $\operatorname{End}_G(V) \cong k$。

若 $G$ 在 $k$ 上每个不可约表示 $V$ 均是绝对不可约的，
则称 $k$ 为 $G$ 的**分裂域**。
此时 $k[G]$ 是 $k$ 上[[矩阵代数]]的直积。
:::

由此如 $k$ 是 $G$ 的分裂域，其上的表示论、特征标理论等与代数闭域情形完全相同。

分裂域的存在由下述定理给出。

::: theorem [分裂域的存在性]
存在 $G$ 在 $k$ 上的分裂域 $K$，且 $K/k$ 为有限 [[Galois 扩张]]。
若 $k$ 包含 $e$ 次[[本原单位根]]，其中 $e$ 为 $G$ 的[[指数 (群论)|指数]]，
则 $k$ 已经是 $G$ 的分裂域。
特别地，代数闭域总是分裂域。
:::

### Galois 作用与 Schur 指数

取定 $G$ 的分裂域 $K$，不妨设 $K/k$ 为 Galois 扩张。
记 $\operatorname{Irr}_K(G)$ 为 $G$ 在 $K$ 上的绝对不可约表示之集，
由之前代数闭域的理论，可以把表示均视为特征标。

::: definition [Galois 作用]
对 $\sigma \in \operatorname{Gal}(K/k)$ 与 $\chi \in \operatorname{Irr}_K(G)$，
定义 $\chi^\sigma(g) = \sigma(\chi(g))$。
则 $\chi^\sigma \in \operatorname{Irr}_K(G)$。
此作用称为特征标的**Galois 共轭**。
:::

不过，在 Galois 共轭下不变的特征标未必来源于 $G$ 在 $k$ 上的表示，
为此需要将它乘 Schur 指数。
以下定理刻画了一般基域上不可约特征标的结构。

::: theorem [$k$-不可约特征标的分类]
设 $\chi \in \operatorname{Irr}_K(G)$，记 $k(\chi)$ 为将其所有值添加至 $k$ 所得的子域。
轨道和
$\operatorname{Tr}_{k(\chi)/k}(\chi) = \sum_{\sigma \in \operatorname{Gal}(k(\chi)/k)} \chi^\sigma$
是取值在 $k$ 中的[[类函数]]。
存在唯一的最小正整数 $m_k(\chi)$，
称为 $\chi$ 相对于 $k$ 的**Schur 指数**，
使得 $m_k(\chi) \cdot \operatorname{Tr}_{k(\chi)/k}(\chi)$
恰为 $G$ 的某个 $k$-不可约表示 $V_\chi$ 的特征标。
反之，每个 $k$-不可约特征标均可唯一地表示为上述形式。
:::

Schur 指数与表示的自同态代数紧密相关。

::: proposition [Schur 指数]
设 $V_\chi$ 是上述 $G$ 在 $k$ 上的表示，
则有[[除环|可除代数]] $D_\chi$ 满足
$\operatorname{End}_G(V_\chi) \cong D_\chi^{\mathrm{op}}$，
此时 $D_\chi$ 在其中心上恰为 $m_k(\chi)^2$ 维。
:::

::: example [有限循环群]
设 $C_n$ 为 $n$ 阶[[循环群]]，考虑其在 $\mathbb{Q}$ 上的表示。
取分裂域 $K = \mathbb{Q}(\zeta_n)$，其中 $\zeta_n$ 为 $n$ 次本原单位根，
则 $\operatorname{Gal}(K/\mathbb{Q}) \cong (\mathbb{Z}/n\mathbb{Z})^\times$。
$C_n$ 在 $K$ 上的绝对不可约表示均为一维，
由生成元 $g \in C_n$ 映到 $\zeta_n^j$（$0 \le j < n$）给出，
记对应特征标为 $\chi_j$，满足 $\chi_j(g) = \zeta_n^j$。
Galois 群作用为 $\chi_j^\sigma = \chi_{j \cdot \sigma}$，
其中 $\sigma \in (\mathbb{Z}/n\mathbb{Z})^\times$。
轨道 $\{ \chi_{j \cdot \sigma} \mid \sigma \in (\mathbb{Z}/n\mathbb{Z})^\times \}$
即对应[[分圆多项式]] $\Phi_{n/\gcd(n,j)}$ 的根。

轨道和 $\operatorname{Tr}_{K/\mathbb{Q}}(\chi_j)$ 是取值在 $\mathbb{Q}$ 上的函数，
且直接给出了 $\mathbb{Q}[C_n]$ 的不可约表示的特征标
（此时所有 Schur 指数均为 $1$），这是因为 $\mathbb{Q}[C_n]$ 是[[交换代数]]，
其每个单分量均为 $\mathbb{Q}$ 的[[分圆扩张]]，为域。
因此 $\mathbb{Q}[C_n] \cong \prod_{d \mid n} \mathbb{Q}(\zeta_d)$，
且 $\mathbb{Q}$ 上的不可约特征标恰为绝对不可约特征标的 Galois 轨道和，
与数域 $\mathbb{Q}(\zeta_d)$ 上的迹映射一致。
:::

::: example [四元数群]
[[四元数群]] $Q_8$ 在 $\mathbb{C}$ 上有一个二维绝对不可约表示，
其特征标 $\chi$ 满足 $k(\chi) = \mathbb{Q}$。
此时 $\chi$ 本身在 Galois 作用下不变，但 $m_{\mathbb{Q}}(\chi) = 2$。
因此 $\mathbb{Q}$ 上的对应不可约特征标为 $2\chi$，它是一个四维表示的特征标，
其自同态环同构于有理[[四元数代数]]。
:::

### 诱导表示

<see>[[Artin 定理]]、[[Brauer 定理]]</see>

通过下降，可以将代数闭域情形的相应定理推广至一般域。

::: theorem [Artin]
设 $X$ 是由 $G$ 的一些子群构成的集合，满足对任意 $g \in G$，
存在 $H \in X$ 和 $f \in G$ 使得 $fgf^{-1} \in H$。
则
\[
\bigoplus_{H\in X} \operatorname{Ind}_H^G \colon
\bigoplus_{H \in X} K_0(\mathsf{Rep}_k(H))
\to K_0(\mathsf{Rep}_k(G))
\]
的[[余核]]有限。
:::

对于 Brauer 定理，则需要略微修改 [[$p$-基础子群]]的定义使其正确。

## 参考文献

经典的教科书：

```bibliography
Serre:
  type: book
  author: 'Serre, Jean-Pierre'
  title: Linear representations of finite groups
  series: Graduate Texts in Mathematics
  number: 42
  publisher: Springer New York
  year: 1977
```

```terms
常表示论:
  en: ordinary representation theory
  fr: théorie des représentations ordinaire
```
