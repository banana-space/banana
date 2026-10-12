---
title: 紧支上同调
categories: [同调论]
notices:
  - name: 问题
    items:
      - “万有系数定理”一节的短正合列中，右端 Tor 项的上同调次数似乎应为 $n+1$ 而不是 $n-1$（例如对 $X = \mathbb{RP}^2$、$A = \mathbb{Z}/2$、$n = 1$ 时，按现在的写法会得到 $H^1 (X; \mathbb{Z}/2) = 0$）。
  - name: 消歧义
    about: '[[拓扑空间]]的紧支上同调'
    see:
      - topic: '[[层]]的紧支上同调'
        page: 紧支层上同调
navboxes: [代数拓扑]
---

在[[代数拓扑]]中，**紧支上同调**是[[拓扑空间]]的一种[[上同调]]理论，
是[[奇异上同调]]的紧支版本，
即仅考虑“[[支集]]包含于某个[[紧空间|紧集]]”的上链而得到的上同调。
一种直观的看法是，在[[光滑流形]]上，
普通的上同调等同于 [[de Rham 上同调]]，
即由[[微分形式]]给出的上同调，
而紧支上同调则等同于紧支微分形式组成的复形的上同调。

紧支上同调可以用来陈述非紧[[流形]]的 [[Poincaré 对偶]]。
对紧定向流形 $M$，Poincaré 对偶给出同构
$H^k (M) \simeq H_{n-k} (M)$，
其中 $n = \dim M$，
左边是奇异上同调，右边是[[奇异同调]]。
对非紧定向流形，则需将左边替换为紧支上同调：
$H_\mathrm{c}^k (M) \simeq H_{n-k} (M)$。

与奇异上同调不同，紧支上同调并不满足同伦不变性。
例如 [[Euclid 空间]] $\mathbb{R}^n$ 是[[可缩空间]]，
当 $n \geq 1$ 时其普通上同调 $H^n (\mathbb{R}^n; \mathbb{Z})$ 为零，
但由上述 Poincaré 对偶，有 $H_\mathrm{c}^n (\mathbb{R}^n; \mathbb{Z}) \simeq \mathbb{Z}$。
紧支上同调也不能沿任何连续映射拉回，
因为紧集的原像未必紧，
故它只能沿[[紧合映射]]拉回。

紧支上同调与 [[Borel–Moore 同调]]互为对偶，
正如奇异同调与奇异上同调互为对偶。
在合适的假设下，
紧支上同调也与[[常值层]]的[[紧支层上同调]]相同。

## 定义

### 通过奇异上链

设 $X$ 为[[拓扑空间]]，$A$ 为 [[Abel 群]]（常取为[[交换环]]）。
令 $C^n (X; A)$ 为 $X$ 的 $A$-系数 $n$ 维[[奇异上同调|奇异上链群]]，
$C_n (X; A)$ 为 $n$ 维[[奇异同调|奇异链群]]。

::: definition [紧支奇异上链]
设 $X$ 为[[拓扑空间]]，$A$ 为 [[Abel 群]]，$n$ 为[[自然数]]。
称奇异上链 $\varphi \in C^n (X; A)$ 为**紧支奇异上链**，
若满足以下条件：

- 存在[[紧空间|紧子集]] $K \subset X$，
  使得 $\varphi$ 在子群
  $C_n (X \setminus K; A) \subset C_n (X; A)$ 上恒为零。

所有紧支 $n$ 维奇异上链构成 $C^n (X; A)$ 的子群，
记为 $C_\mathrm{c}^n (X; A)$。
:::

奇异上链复形的余边界映射
$d \colon C^n (X; A) \to C^{n+1} (X; A)$
保持紧支性：
若 $\varphi$ 对紧子集 $K$ 满足上述性质，
则 $d \varphi$ 也对 $K$ 满足上述性质。
因此 $(C_\mathrm{c}^\bullet (X; A), d)$
构成奇异上链复形 $(C^\bullet (X; A), d)$ 的子复形。

::: definition [紧支上同调]
设 $X$ 为拓扑空间，$A$ 为 Abel 群，$n$ 为自然数。
则 $X$ 的 $A$-系数 $n$ 阶**紧支上同调**定义为上链复形
$C_\mathrm{c}^\bullet (X; A)$ 的[[上同调]]：
\[
H_\mathrm{c}^n (X; A)
= H^n (C_\mathrm{c}^\bullet (X; A)).
\]
当 $A$ 为交换环时，它具有自然的 $A$-[[模]]结构。
:::

### 通过正向余极限

紧支上同调也可通过[[相对上同调]]的[[正向余极限]]来定义。

::: proposition {@prop:紧支上同调-正向余极限}
设 $X$ 为拓扑空间，$A$ 为 Abel 群，$n$ 为自然数。
则对每个紧子集 $K \subset X$，有自然的同态
\[
H^n (X, X \setminus K; A) \longrightarrow H_\mathrm{c}^n (X; A),
\]
它们诱导同构
\[
H_\mathrm{c}^n (X; A) \simeq
\mathop{\underset{\textstyle\smash\longrightarrow}{\mathrm{colim}}}
\limits_{K \subset X \text{ 紧}}
H^n (X, X \setminus K; A),
\]
其中[[正向余极限]]取遍 $X$ 的所有紧子集，
按含入关系构成[[正向系]]。
:::

::: proof
对每个紧子集 $K \subset X$，
相对上链复形 $C^\bullet (X, X \setminus K; A)$
可视为 $C^\bullet (X; A)$ 的子复形。
由定义，$C_\mathrm{c}^\bullet (X; A)$ 是所有这些子复形的并集，从而
\[
C_\mathrm{c}^\bullet (X; A)
= \mathop{\underset{\textstyle\smash\longrightarrow}{\mathrm{colim}}}
\limits_{K \subset X \text{ 紧}}
C^\bullet (X, X \setminus K; A).
\]
而 [[Abel 群范畴]]中的正向余极限是[[正合函子]]，
从而与取上同调交换，因此
\[
H_\mathrm{c}^n (X; A)
\simeq \mathop{\underset{\textstyle\smash\longrightarrow}{\mathrm{colim}}}
\limits_{K \subset X \text{ 紧}}
H^n (X, X \setminus K; A).
\]
:::

## 例子

- 若 $X$ 是[[紧空间]]，则由定义
  $C_\mathrm{c}^\bullet (X; A) = C^\bullet (X; A)$，
  从而 $H_\mathrm{c}^n (X; A) \simeq H^n (X; A)$。

- 若 $X$ 是 $n$ 维[[可定向流形]]（不必紧），
  则有[[Poincaré 对偶]]（@thm:紧支上同调-Poincare-对偶）给出的同构
  \[
  H^k_{\mathrm{c}} (X; A) \simeq H_{n - k} (X; A).
  \]
  特别地，对 [[Euclid 空间]] $\mathbb{R}^n$，有
  \[
  H^k_{\mathrm{c}} (\mathbb{R}^n; A)
  \simeq H_{n - k} (\mathbb{R}^n; A)
  \simeq \begin{cases}
    A, & k = n, \\
    0, & k \neq n.
  \end{cases}
  \]

## 性质

### 函子性

::: proposition [紧合拉回]
设 $f \colon X \to Y$ 是拓扑空间之间的[[紧合映射]]。
则对每个自然数 $n$，有拉回映射
\[
f^* \colon H_\mathrm{c}^n (Y; A)
\longrightarrow H_\mathrm{c}^n (X; A),
\]
满足 $(g \circ f)^* = f^* \circ g^*$。
:::

在上述情形下，$f$ 紧合保证了紧支上链的拉回仍是紧支上链，
从而得到紧支上链复形间的映射。

::: proposition [开嵌入延拓]
设 $X$ 为拓扑空间，
$j \colon U \hookrightarrow X$ 为[[开子空间]]的含入映射。
则对每个自然数 $n$，有延拓映射
\[
j_! \colon H_\mathrm{c}^n (U; A)
\longrightarrow H_\mathrm{c}^n (X; A).
\]
:::

该映射也可以直接对上链定义：
对 $U$ 上的上链 $\varphi$，其延拓 $j_! \varphi$ 在所有不包含于 $U$ 中的链上取值为 $0$。

### 局部化正合列

::: theorem [局部化正合列]
设 $X$ 为[[局部可缩空间|局部可缩]]、[[局部紧空间|局部紧]]的 [[Hausdorff 空间]]，
$Z \subset X$ 为[[闭集]]，
$U = X \setminus Z$ 为其补集。
则有自然长正合列
\[
\cdots \longrightarrow
H_\mathrm{c}^n (U; A)
\longrightarrow
H_\mathrm{c}^n (X; A)
\longrightarrow
H_\mathrm{c}^n (Z; A)
\longrightarrow
H_\mathrm{c}^{n+1} (U; A)
\longrightarrow \cdots .
\]
:::

这可以视为[[相对上同调]]长正合列在紧支上同调中的一种加强版本。
换言之，此时 $H_\mathrm{c}^n (U; A)$
等于相对紧支上同调 $H_\mathrm{c}^n (X, Z; A)$。

### 杯积与帽积

设 $A$ 为交换环。
紧支上同调具有[[杯积]]：
\[
\smallsmile \colon
H_\mathrm{c}^p (X; A) \otimes_A H_\mathrm{c}^q (X; A)
\longrightarrow H_\mathrm{c}^{p+q} (X; A),
\]
这是因为两个紧支上链的杯积仍然紧支。
该杯积不一定有单位元，因为 $0$ 维上同调类 $1$ 对应的上链不一定紧支。

还有一种混合杯积：
\[
\smallsmile \colon
H_\mathrm{c}^p (X; A) \otimes_A H^q (X; A)
\longrightarrow H_\mathrm{c}^{p+q} (X; A),
\]
这使得 $H_\mathrm{c}^\bullet (X; A)$ 成为
$H^\bullet (X; A)$ 上的[[分次模]]。

另外，紧支上同调与 [[Borel–Moore 同调]]之间有自然的[[帽积]]配对：
\[
\smallfrown \colon
H_\mathrm{c}^k (X; A) \otimes_A H_n^{\mathrm{lf}} (X; A)
\longrightarrow H_{n-k} (X; A).
\]

### Poincaré 对偶

<see>[[Poincaré 对偶]]</see>

::: theorem [Poincaré 对偶] {@thm:紧支上同调-Poincare-对偶}
设 $X$ 是 $n$ 维[[流形]]，$A$ 为[[交换环]]。
取 $X$ 的一个 $A$-[[定向]]，记对应的[[基本类]]为
$[X] \in H_n^{\mathrm{BM}} (X; A)$。
则与 $[X]$ 的帽积给出同构
\[
(-) \smallfrown [X] \colon
H_\mathrm{c}^k (X; A) \simeq H_{n-k} (X; A).
\]
:::

### 万有系数定理

::: proposition
设 $X$ 为局部有限 [[CW 复形]]，$A$ 是 Abel 群，$n$ 是自然数。
则存在[[万有系数定理]]给出的短正合列
\[
0 \longrightarrow
H_\mathrm{c}^n (X; \mathbb{Z}) \otimes_{\mathbb{Z}} A
\longrightarrow H_\mathrm{c}^n (X; A)
\longrightarrow
\operatorname{Tor}_1^{\mathbb{Z}} (H_\mathrm{c}^{n-1} (X; \mathbb{Z}), A)
\longrightarrow 0.
\]
该短正合列分裂，但分裂一般不是自然的。
:::

注意这里对 $X$ 有较强的假设，因为在此假设下可使用紧支[[胞腔上同调]]，
此时 $A$ 系数的紧支胞腔上链复形确实是 $\mathbb{Z}$ 系数的该复形与 $A$ 的张量积。
这一点对紧支奇异上链复形并不成立，
因为紧集上的 $A$ 系数上链也可能是无限个 $\mathbb{Z}$ 系数上链的线性组合，而不能写成有限线性组合。

另外，[[Borel–Moore 同调]]也通过万有系数定理由紧支上同调决定，
详见该文。

### 与普通上同调的联系

含入映射 $C_\mathrm{c}^\bullet (X; A) \hookrightarrow C^\bullet (X; A)$
诱导自然的映射
\[
H_\mathrm{c}^n (X; A) \longrightarrow H^n (X; A),
\]
当 $X$ 为[[紧空间]]时，该映射是同构，但它一般不是单射也不是满射。

另一方面，对性质较好的非紧空间，紧支上同调可写成[[一点紧化]]的[[约化上同调]]。

::: proposition {@prop:紧支上同调-与普通上同调}
设 $X$ 为局部紧 Hausdorff 空间，
$X^+ = X \cup \{\infty\}$ 为 $X$ 的[[一点紧化]]，
并假设 $X^+$ [[局部可缩空间|局部可缩]]。
设 $A$ 为 Abel 群。
则对每个自然数 $n$，有自然同构
\[
H_\mathrm{c}^n (X; A)
\simeq H^n (X^+, \{\infty\}; A)
\simeq \widetilde{H}^n (X^+; A),
\]
其中 $\widetilde{H}^n$ 表示[[约化上同调]]。
:::

### 与紧支层上同调的比较

::: proposition [与紧支层上同调的比较]
设 $X$ 为[[局部可缩空间|局部可缩]] [[Hausdorff 空间]]，
$A$ 为 Abel 群，
$A_X$ 为其对应的 $X$ 上的[[常值层]]。
则对每个自然数 $n$，有自然同构
\[
H_\mathrm{c}^n (X; A)
\simeq H_\mathrm{c}^n (X, A_X),
\]
其中右边是 $A_X$ 的[[紧支层上同调]]。
:::

::: proof
设 $K \subset X$ 为紧子集，记 $U = X \setminus K$。
因为 $X$ 是 Hausdorff 空间，所以 $K$ 是闭集，
故 $U$ 是开集，从而 $U$ 也局部可缩。

Sella 的比较定理 [@Sella2016]
对 $X$ 与 $U$ 分别给出自然同构
\[
H^m (X; A) \simeq H^m (X, A_X),
\qquad
H^m (U; A) \simeq H^m (U, A_U),
\]
其中 $A_U$ 为 $U$ 上的常值层。
这些同构与开嵌入 $U \hookrightarrow X$ 相容。
将奇异[[相对上同调]]的长正合列
\[
\cdots \longrightarrow
H^m (X, U; A)
\longrightarrow H^m (X; A)
\longrightarrow H^m (U; A)
\longrightarrow H^{m+1} (X, U; A)
\longrightarrow \cdots
\]
与[[带支集层上同调]]的长正合列
\[
\cdots \longrightarrow
H_K^m (X, A_X)
\longrightarrow H^m (X, A_X)
\longrightarrow H^m (U, A_U)
\longrightarrow H_K^{m+1} (X, A_X)
\longrightarrow \cdots
\]
比较，由[[五引理]]可得自然同构
\[
H^m (X, U; A)
\simeq H_K^m (X, A_X),
\]
其中右边表示支集在 $K$ 上的带支集层上同调。
对所有紧子集取正向余极限，并利用 @prop:紧支上同调-正向余极限，得
\[
H_\mathrm{c}^m (X; A)
\simeq
\mathop{\underset{\textstyle\smash\longrightarrow}{\mathrm{colim}}}
\limits_{K \subset X \text{ 紧}}
H_K^m (X, A_X)
= H_\mathrm{c}^m (X, A_X).
\]
这即为所需同构。
:::

## 参考文献

```bibliography
Sella2016:
  type: preprint
  author: 'Sella, Yehonatan'
  title: Comparison of sheaf cohomology and singular cohomology
  arxiv: '1602.06674'
```

```terms
紧支上同调:
  en: cohomology with compact support
  fr: cohomologie à support compact :f
  de: Kohomologie mit kompaktem Träger :f
  ja: コンパクト台<だい>付<つ>きコホモロジー
  ko: 콤팩트 지지 코호몰로지 (compact 支持 cohomology)
```
