---
title: Bott 周期律
categories: [$K$ 理论]
notices:
  - name: 问题
    items:
      - “用 Morse 理论”“用算子 $K$ 理论”各节需要扩充。
      - “直接证明”一节中，证明的最后一步（$X_n\to X_1^n$ 是同伦等价）需要展开。
navboxes: [代数拓扑, 向量丛与 K 理论]
---

**Bott 周期律**是[[拓扑 $K$ 理论]]的基本定理，
说的是[[拓扑空间]]上复向量丛的 $K$ 理论具有周期 $2$，
实向量丛的 $K$ 理论具有周期 $8$。它最初由 [[Raoul Bott]]
用 [[Morse 理论]]证明，后来又有很多人给出了各种不同的证明。

## 陈述

::: theorem [复 Bott 周期律]
设 $\mathrm{KU}$ 表示[[拓扑 $K$ 理论]]，即
$[X,\mathrm{KU}]=K_{\mathbb{C}}(X)$。则有典范的同伦等价
$\beta\colon\mathrm{KU}\simeq\Omega^2\mathrm{KU}$。特别地，
对整数 $n$ 及拓扑空间 $X$，总有
$K^n_{\mathbb{C}}(X)=K^{n+2}_{\mathbb{C}}(X)$。
$\mathrm{KU}$ 的各阶[[环路空间]]伦型及各阶同伦群展示如下：
$$
\begin{array}{|c|c|c|}
  \hline
  n&\Omega^n\mathrm{KU}&\pi_n\mathrm{KU}\\
  \hline
  0&\mathbb{Z}\times\mathrm{BU}&\mathbb{Z}\\
  \hline
  1&\mathrm{U}&0\\
  \hline
\end{array}
$$
其中 $\mathrm{U}=\operatornamewithlimits{colim}_m\mathrm{U}(m)$，
$\mathrm{BU}=\operatornamewithlimits{colim}_m\mathrm{BU}(m)$。
:::

::: theorem [实 Bott 周期律] {@real}
设 $\mathrm{KO}$ 表示实向量丛拓扑 $K$ 理论，即
$[X,\mathrm{KO}]=K_\mathbb{R}(X)$。则有典范的同伦等价
$\beta_\mathbb{R}\colon\mathrm{KO}\simeq\Omega^8\mathrm{KO}$。特别地，
对整数 $n$ 及拓扑空间 $X$，总有
$K^n_\mathbb{R}(X)=K^{n+8}_\mathbb{R}(X)$。
$\mathrm{KO}$ 的各阶[[环路空间]]伦型及各阶同伦群展示如下：
$$
\begin{array}{|c|c|c|}
  \hline
  n&\Omega^n\mathrm{KO}&\pi_n\mathrm{KO}\\
  \hline
  0&\mathbb{Z}\times\mathrm{BO}&\mathbb{Z}\\
  \hline
  1&\mathrm{O}&\mathbb{Z}/2\\
  \hline
  2&\mathrm{O}/\mathrm{U}&\mathbb{Z}/2\\
  \hline
  3&\mathrm{U}/\mathrm{Sp}&0\\
  \hline
  4&\mathbb{Z}\times\mathrm{BSp}&\mathbb{Z}\\
  \hline
  5&\mathrm{Sp}&0\\
  \hline
  6&\mathrm{Sp}/\mathrm{U}&0\\
  \hline
  7&\mathrm{U}/\mathrm{O}&0\\
  \hline
\end{array}
$$
其中 $\mathrm{O}=\operatornamewithlimits{colim}_m\mathrm{O}(m)$，
$\mathrm{Sp}=\operatornamewithlimits{colim}_m\mathrm{Sp}(m)$，
分类空间类似。这里 $\mathrm{Sp}(m)$ 表示[[紧辛群]]，
即标准四元数内积空间 $\mathbb{H}^m$ 的自同构群，商空间
$\mathrm{O}/\mathrm{U}$ 和 $\mathrm{U}/\mathrm{Sp}$
由遗忘四元数结构和复结构给出的嵌入
$\mathrm{Sp}(m)\to\mathrm{U}(2m)\to\mathrm{O}(4m)$
定义，商空间
$\mathrm{Sp}/\mathrm{U}$ 和 $\mathrm{U}/\mathrm{O}$
则由沿 $\mathbb{R}\to\mathbb{C}\to\mathbb{H}$ 基变换给出的嵌入
$\mathrm{O}(m)\to\mathrm{U}(m)\to\mathrm{Sp}(m)$
定义。
:::

::: remark
从 @real 可立即看出，如设 $\mathrm{KSp}$
表示四元数向量丛的拓扑 $K$ 理论，即 $[X,\mathrm{KSp}]=K_{\mathbb{H}}(X)$，
则有典范的同伦等价 $\beta_{\mathbb{H}}\colon\mathrm{KSp}\to\Omega^8\mathrm{KSp}$，
从而也有 $K_{\mathbb{H}}^n(X)=K_{\mathbb{H}}^{n+8}(X)$。
$\mathrm{KSp}$ 的各阶环路空间伦型及各阶同伦群展示如下：
$$
\begin{array}{|c|c|c|}
  \hline
  n&\Omega^n\mathrm{KSp}&\pi_n\mathrm{KSp}\\
  \hline
  0&\mathbb{Z}\times\mathrm{BSp}&\mathbb{Z}\\
  \hline
  1&\mathrm{Sp}&0\\
  \hline
  2&\mathrm{Sp}/\mathrm{U}&0\\
  \hline
  3&\mathrm{U}/\mathrm{O}&0\\
  \hline
  4&\mathbb{Z}\times\mathrm{BO}&\mathbb{Z}\\
  \hline
  5&\mathrm{O}&\mathbb{Z}/2\\
  \hline
  6&\mathrm{O}/\mathrm{U}&\mathbb{Z}/2\\
  \hline
  7&\mathrm{U}/\mathrm{Sp}&0\\
  \hline
\end{array}
$$
:::

## 证明

### 用 Morse 理论

### 用算子 $K$ 理论

### 直接证明

复 Bott 周期律形式简单：依定义
$\Omega(\mathbb{Z}\times\mathrm{BU})=\mathrm{U}$，
故只需证 $\Omega\mathrm{U}=\mathbb{Z}\times\mathrm{BU}$。
这件事有些直接的证明，难以移植到实 Bott 周期律上。

::: proof
回忆[[拓扑 $K$ 理论]]是向量丛沿直和构成的半群的[[群化]]，
故而 $\mathrm{KU}=\mathbb{Z}\times\mathrm{BU}$ 是
$\bigsqcup_{m\in\mathbb{N}}\mathrm{BU}(m)$ 的群化，
这里半群结构是直和。一般而言，幺半群 $M$ 的群化等价于
$\Omega\mathrm{B}M$，故只需证
$\mathrm{U}=\mathrm{B}\left(\bigsqcup_{m\in\mathbb{N}}\mathrm{BU}(m)\right)$。
用[[杠构造]]计算[[分类空间]]，得
$$
\mathrm{B}\left(\bigsqcup_{m\in\mathbb{N}}\mathrm{BU}(m)\right)
=\operatornamewithlimits{colim}_{n\in\mathbb{\Delta}^\mathrm{op}}\left(\bigsqcup_{m\in\mathbb{N}}\mathrm{BU}(m)\right)^n;
$$
以下给等号右边找个模型，以看出它等价于 $\mathrm{U}$。

考虑可数维复内积空间 $V=\mathbb{C}^{\oplus\mathbb{N}}=
  \operatornamewithlimits{colim}_m\mathbb{C}^m$，
其中 $\mathbb{C}^m$ 取标准内积，$\mathbb{C}^m\to\mathbb{C}^{m+1}$
取标准含入。令 $X_n$ 为 $V$ 中 $n$ 个两两正交的有限维子空间
$(V_1,\ldots,V_n)$ 组成的集合，带自然的拓扑，并定义
$X_n$ 到 $X_{n-1}$ 的 $n+1$ 个面映射分别为扔掉首项、
把相邻两项直和、扔掉末项。显然这些 $X_n$ 构成单纯拓扑空间，
以下分别证明其几何实现等价于 $\mathrm{U}$ 与
$\operatornamewithlimits{colim}_{n\in\mathbb{\Delta}^\mathrm{op}}\left(\bigsqcup_{m\in\mathbb{N}}\mathrm{BU}(m)\right)^n$。

- 把子空间等同于正交投影算子，可把 $X_n$ 视为有限秩正交投影算子组
  $(E_1,\ldots,E_n)$ 的集合，其中对 $i\ne j$，$E_iE_j=0$。
  这样面映射就是扔掉首项、把相邻两项相加、扔掉末项。把标准单形
  $\Delta^n$ 等同于
  $$
  \{(t_1,\ldots,t_n)\mid0\le t_1\le\cdots\le t_n\le1\},
  $$
  并把 $\operatornamewithlimits{colim}_{n\in\mathbb{\Delta}^{\mathrm{op}}}X_n$ 实现为
  $\bigsqcup_{n\in\mathbb{N}}(\Delta^n\times X_n)$ 的商空间。
  则由酉变换的谱分解，容易验证以下公式给出这个商空间到
  $\mathrm{U}$ 的同胚：
  $$
  ((t_1,\ldots,t_n),(E_1,\ldots,E_n))\mapsto
  \exp(2\pi\mathrm{i}(t_1E_1+\cdots+t_nE_n)).
  $$

- 只需证 $X_n$ 和 $\left(\bigsqcup_{m\in\mathbb{N}}\mathrm{BU}(m)\right)^n$
  构成的单纯空间等价。依定义
  $$
  X_1=\bigsqcup_{m\in\mathbb{N}}\mathrm{Gr}(V,m)\simeq
  \bigsqcup_{m\in\mathbb{N}}\mathrm{BU}(m);
  $$
  于是只需证 $\mathbb{\Delta}^\mathrm{op}$ 中
  $[1]\to[n]$ 的 $n$ 个映射
  $\{0,1\},\ldots,\{n-1,n\}\subseteq
      \{0,1,\ldots,n\}$ 所诱导的 $X_n\to X_1^n$
  是同伦等价。由 $V$ 无穷维不难看出这件事。

:::

```terms
Bott 周期律:
  en: Bott periodicity
```
