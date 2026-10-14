---
title: 局部类域论
categories: [代数数论]
notices:
  - name: 问题
    items:
      - “证明”一节可以补充使用中心单代数的证明。
      - 自然性的交换图表 (b) 与 (c) 中，底边似乎应分别为 $\phi_{N/L}\colon L^\times \to \operatorname{Gal}(N/L)^{\text{ab}}$ 与 $\phi_{N/K}\colon K^\times \to \operatorname{Gal}(N/K)^{\text{ab}}$，否则右侧的竖直箭头 $\operatorname{Ver}$、$\kappa$ 的目标与底边不符。
      - “推论”一节需要扩充。
      - “推广”一节需要扩充，例如介绍局部 Langlands 纲领、高维类域论，以及用 Fargues–Fontaine 曲线的证明及相关发展。
---

**局部类域论**旨在刻画局部域的 [[Abel 扩张]]，
主流的陈述方式是建立局部域$K$的有限Abel扩张与
$K^\times$的有限指数开子群之间的一一对应，
此对应由下述**局部互反映射**与**存在性定理**给出。

## 定理陈述

### 局部互反映射

::: theorem [局部互反律]
对Galois扩张$L/K$，我们有自然的同构
\[
\phi_{L/K}: K^\times/\operatorname{Nm}L^\times
\to
\operatorname{Gal}(L/K)^{\text{ab}}.
\]
其中$\phi_{L/K}$被称作局部**互反映射**，
或**局部Artin映射**；
也常被称为范数剩余符号，记作$a\mapsto (a,L/K)$。
:::

其中自然性意谓与域扩张塔的交互，具体而言，对局部域的代数扩张
$N\supset L\supset K \supset F$，
其中$N/K$为Galois扩张，$K/F$为可分扩张，我们有如下的交换图表：

(a)
    \[
    \begin{tikzcd}
      K^\times \ar[r,"\phi_{N/K}"] \ar[d,"\mathrm{id}"']
      & \operatorname{Gal}(N/K)^{\text{ab}}\ar[d,"\pi"]\\
      K^\times \ar[r,"\phi_{L/K}"]
      & \operatorname{Gal}(L/K)^{\text{ab}}
    \end{tikzcd}
    \]
    这里$L/K$是正规扩张，$\pi$由典范的投影映射诱导。

(b)
    \[
    \begin{tikzcd}
      K^\times \ar[r,"\phi_{N/K}"] \ar[d,"\operatorname{incl}"']
      & \operatorname{Gal}(N/K)^{\text{ab}}\ar[d,"\operatorname{Ver}"]\\
      L^\times \ar[r,"\phi_{L/K}"]
      & \operatorname{Gal}(L/K)^{\text{ab}}
    \end{tikzcd}
    \]
    其中$\operatorname{Ver}$为转移映射。

(c)
    \[
    \begin{tikzcd}
      L^\times \ar[r,"\phi_{N/L}"] \ar[d,"\operatorname{Nm}"']
      & \operatorname{Gal}(N/L)^{\text{ab}}\ar[d,"\kappa"]\\
      K^\times \ar[r,"\phi_{L/K}"]
      & \operatorname{Gal}(L/K)^{\text{ab}}
    \end{tikzcd}
    \]
    其中$\kappa$由典范的嵌入映射诱导。

(d)
    \[
    \begin{tikzcd}
      K^\times \ar[r,"\phi_{N/K}"] \ar[d,"\sigma"]
      & \operatorname{Gal}(N/K)^{\text{ab}}\ar[d,"\sigma^*"]\\
      \sigma K^\times \ar[r,"\phi_{\sigma N/\sigma{K}}"]
      & \operatorname{Gal}(\sigma N/\sigma{K})^{\text{ab}}
    \end{tikzcd}
    \]
    其中$\sigma\in\operatorname{Gal}(F^\text{sep}/F)$。

::: corollary
对局部域$K$，称形如$\operatorname{Nm}(L^\times)$的子群为范数群。则
$L\mapsto \operatorname{Nm}L^\times$为Abel扩张与范数群之间的反序
同构。
:::

::: corollary
范数群构成了$K^\times$上一个拓扑在$1$处的邻域基，此拓扑称为范数拓扑。
:::

根据(a)，我们可以定义极限映射（万有范数符号）
\[
\begin{tikzcd}
  K^\times \ar[r,"\phi_{K}"]
  &\operatorname{Gal}(K^{\text{ab}}/K)
  \simeq
  \operatorname{Gal}(K^\text{sep}/K)^{\text{ab}}.
\end{tikzcd}
\]

::: corollary
我们有拓扑群的同构
\[
\begin{tikzcd}
  \widehat{K^\times} \ar[r,"\phi_{K}"]
  &\operatorname{Gal}(K^{\text{ab}}/K) .
\end{tikzcd}
\]
前者表示$K^\times$在范数拓扑下的完备化。
:::

::: proposition
对$K$的任何素元$\pi$，
\[
\phi_K(\pi)|_{K^{\text{un}}} = \operatorname{Frob}_K.
\]
:::

::: proposition [唯一性]
若有群同态$\phi:K^\times\to \operatorname{Gal}(K^{\text{ab}}/K)$
适合

1. $\phi(\pi)|_{K^{\text{un}}} = \operatorname{Frob}_K$，

2. 对任何Abel扩张$L$，$\phi|_{L}$诱导出同构
   \[
   K^\times/\operatorname{Nm} L^\times \simeq
   \operatorname{Gal}(L/K).
   \]

则$\phi = \phi_K$。
:::

### 存在性定理

::: theorem
$K^\times$中的范数群恰为全体有限指数开子群。
:::

::: remark
假设$K$是$p$进数域，则有限指数子群总是开的。这是因为有限指数
子群将含有$K^{\times m}$，$m > 0$。而对充分大的$n$我们有同构
\[
U^{(n)} \simeq \mathfrak{p}^n
\]
且右边中的元素除以$m$也被素元的高幂次整除。
因此$U^{(n)} \subset K^{\times m}$。

对函数域，我们有$1+\mathfrak{p} \simeq \prod_{\mathbb{N}}\mathbb{Z}_p$。
这穿过$\prod_{\mathbb{N}}\mathbb{F}_p$，根据线性代数我们知道存在
$\prod_{\mathbb{N}}\mathbb{F}_p$的有限指数真子群包含
$\bigoplus_{\mathbb{N}}\mathbb{F}_p$，因此存在有限指数的子群
并非开子群。
:::

::: corollary
范数拓扑是Hausdorff的。
:::

## 证明

### 互反映射

存在映射
\[
\begin{tikzcd}
  \operatorname{inv}_K: H^2(K^\text{sep}/K) \ar[r,"\simeq"] &\mathbb{Q}/\mathbb{Z}
\end{tikzcd}
\]
对于任何有限Galois扩张$L/K$，都有
\[
\begin{tikzcd}
  \operatorname{inv}_K: H^2(L/K) \ar[r,"\simeq"] & \frac{1}{[L:K]}\mathbb{Z}/\mathbb{Z}.
\end{tikzcd}
\]
根据[[Tate定理]]，对任何$r\in \mathbb{Z}$ 有同构
\[
H_T^r(G,\mathbb{Z}) \simeq H_T^{r+2}(G,L^\times).
\]
取$r = -2$，即有
\[
G^{ab} \simeq K^\times/\mathrm{Nm}L^\times.
\]
其逆即为局部Artin映射。

### 存在性定理

<see>[[Lubin–Tate 理论]]</see>

[[Lubin–Tate 理论]]具体地构造了足够多的Abel扩张，
以此证明存在性定理。

## 推论

### Weil群

::: definition
对局部域$K$，其Weil群$W_K$为拓扑群范畴中的拉回
\[
\begin{tikzcd}
  W_K \ar[r] \ar[d]
  & \operatorname{Frob}^\mathbb{Z}\ar[d]\\
  \operatorname{Gal}(K^{\mathrm{sep}}/K)\ar[r]
  & \operatorname{Gal}(K^{\mathrm{nr}}/K)
\end{tikzcd}
\]
其中$\operatorname{Frob}^\mathbb{Z}$赋予离散拓扑。
:::

::: theorem
存在拓扑群的同构
\[
r_K:
\begin{tikzcd}
  K^\times \ar[r,"\simeq"]
  & W_K^{\mathrm{ab}}
\end{tikzcd}.
\]
:::

局部 Langlands 对应将此推广到两边的高维表示。

设$L/K$为有限Galois扩张，则$W_L \subseteq W_K$，且
$W_K/W_L \simeq \operatorname{Gal}(L/K)$。相对Weil群为
$W_{L/K}:= W_K/{W_L^c}$。我们有正合列
\[
\begin{tikzcd}
  1 \ar[r] & L^\times \ar[r] & W_{L/K}
  \ar[r] & \operatorname{Gal}(L/K) \ar[r] & 1
\end{tikzcd}
\]
这个群扩张对应于$H^2(L/K)$中的基本类$u_{L/K}$。

## 推广

## 参考文献

使用[[群上同调]]语言和 [[Lubin–Tate 理论]]的证明可以参见 [@CF67]。

```bibliography
CF67:
  type: book
  label: CF67
  author:
    - J. W. S. Cassels
    - A. Fröhlich
  year: 1967
  title: Algebraic Number Theory
  publisher: Academic Press
```

```terms
局部类域论:
  en: local class field theory
  de: lokale Klassenkörpertheorie
  fr: théorie des corps de classes locaux
```
