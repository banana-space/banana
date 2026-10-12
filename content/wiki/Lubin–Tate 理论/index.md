---
title: Lubin–Tate 理论
aliases: [Lubin-Tate 理论]
categories: [代数数论]
notices:
  - name: 问题
    items:
      - “现代观点”一节需要扩充。
---

**Lubin–Tate 理论**是[[局部类域论]]的具体描述。正如
[[Kronecker 青春之梦]]具体刻画数域的 [[Abel 扩张]]，Lubin–Tate
理论刻画了局部域的 Abel 扩张。与整体情形不同的是，局部情形容易得多，
早已是个成熟的理论，且它还对非 Abel 情形——局部
Langlands 纲领的发展有所启发。

## 陈述

[[Kronecker 青春之梦]]用椭圆曲线的挠点生成 Abel 扩张，
Lubin–Tate 理论则用其局部类比——形式群的挠点生成之。

固定非 Archimedes [[局部域]] $K$，以 $q$ 记其剩余域元素个数。
以 $K^\text{un}$ 记 $K$ 的极大非分歧扩张，$\breve{K}$ 记其完备化，
$K^\text{ab}$ 记 $K$ 的极大 Abel 扩张。
对其素元 $\pi$，以 $\mathcal{F}_\pi$ 记 $\mathcal{O}_K[[X]]$
中模 $\pi X^2$ 余 $\pi X+X^q$ 者组成的集合。

::: proposition [Lubin–Tate 形式群]
对任意 $f\in\mathcal{F}_\pi$，存在唯一的形式
$\mathcal{O}_K$-模，使得 $a\in\mathcal{O}_K$ 的作用将一次项乘以 $a$，
而 $\pi$ 的作用是 $f$。具体地说，存在唯一[[形式幂级数]]
$F(X,Y)\in\mathcal{O}_K[[X,Y]]$ 以及对每个 $a\in\mathcal{O}_K$
一个 $[a](X)\in\mathcal{O}_K[[X]]$，满足：

- $F(0,X)=F(X,0)=X$。

- $F(X,F(Y,Z))=F(F(X,Y),Z)$。

- $F(X,Y)=F(Y,X)$。

- $[a](X)\equiv aX\pmod{X^2}$。

- $[a](F(X,Y))=F([a](X),[a](Y))$。

- $[0](X)=0$。

- $[1](X)=X$。

- $[a+b](X)=F([a](X),[b](X))$。

- $[ab](X)=[a]([b](X))$。

- $[\pi](X)=f(X)$。

此时也把 $F(X,Y)$ 记作 $X+_fY$，$[a](X)$ 记作 $[a]_fX$。
:::

以上结构称为 **Lubin–Tate 形式群**。注意它不只是形式群，
而是形式 $\mathcal{O}_K$-模。

::: proposition [关于 $f$ 的唯一性]
对 $f,g\in\mathcal{F}_\pi$，存在唯一 $h(X)\in X+X^2\mathcal{O}_K[[X]]$，
满足 $h\circ f=g\circ h$。此 $h$ 满足 $h(X+_fY)=h(X)+_gh(Y)$，
$h([a]_fX)=[a]_gh(X)$。换言之，$f$ 和 $g$ 的
Lubin–Tate 形式群之间有唯一同构。
:::

于是可对素元 $\pi$ 以 $(+_\pi,[a]_\pi)$ 记其 Lubin–Tate 形式群。

::: proposition [关于 $\pi$ 的唯一性]
对素元 $\pi,\varpi\in K$，$f\in\mathcal{F}_\pi$，$g\in\mathcal{F}_\varpi$，
存在唯一 $h(X)\in X+X^2\mathcal{O}_{\breve{K}}[[X]]$，
满足 $h(X+_fY)=h(X)+_gh(Y)$，$h([a]_fX)=[a]_gh(X)$。
换言之，Lubin–Tate 形式群 $(+_\pi,[\cdot]_\pi)$ 与 $(+_\varpi,[\cdot]_\varpi)$
在 $\breve{K}$ 上典范同构。
:::

用 Lubin–Tate 形式群可具体描述局部类域论如下：

::: theorem {@LT主定理}
以 $C$ 记 $K$ 的代数闭包的完备化，$\mathfrak{m}_C$ 记其极大理想。
则对素元 $\pi$，可用 $(+_\pi,[\cdot]_\pi)$ 把 $\mathfrak{m}_C$
做成 $\mathcal{O}_K$-模，由于幂级数在 $\mathfrak{m}_C$
上都收敛。对 $n\in\mathbb{N}$，以 $K_{\pi,n}$ 记 $\mathfrak{m}_C$
在此模结构下的 $\pi^n$-挠点在 $K$ 上生成的域扩张。则
$K_{\pi,n}/K$ 是有限 Galois 扩张，纯分歧。
$(\mathcal{O}_K/\pi^n)^\times$ 作用在 $\pi^n$-挠点上，
给出同构
$$
[\cdot]_\pi\colon(\mathcal{O}_K/\pi^n)^\times\cong\operatorname{Gal}(K_{\pi,n}/K).
$$
记 $K_\pi=\bigcup_{n\in\mathbb{N}}K_{\pi,n}$。则以上同构取极限给出
$$
[\cdot]_\pi\colon\mathcal{O}_K^\times\cong\operatorname{Gal}(K_\pi/K).
$$
另外，$K^\text{un}K_\pi=K^\text{ab}$，且映射
$$
\pi^\mathbb{Z}\times\mathcal{O}_K^\times=K^\times\to
\operatorname{Gal}(K^\text{ab}/K)=
\operatorname{Gal}(K^\text{un}/K)\times\operatorname{Gal}(K_\pi/K)
$$
$$
(\pi^m,a)\mapsto(\text{Frob}^m,[a^{-1}]_\pi)
$$
给出局部 Artin 互反律。特别地，此映射不依赖于 $\pi$ 的选取。
:::

这就是 Lubin–Tate 理论。

## 例子

取 $K=\mathbb{Q}_p$，
$\pi=p$，$f(X)=(1+X)^p-1$，则不难看出 $F(X,Y)=(1+X)(1+Y)-1$，
$[a](X)=(1+X)^a-1$ 满足条件，其中 $(1+X)^a$ 按二项式展开解释。
此即形式乘法群 $\widehat{\mathbb{G}_m}$，$p^n$ 阶挠点形如
$\zeta_{p^n}^k-1$。于是 $\mathbb{Q}_{p,n}=\mathbb{Q}_p(\mu_{p^n})$。
此时 @LT主定理 前半部分是个域论习题，后半部分给出
$$
\mathbb{Q}_p^\text{ab}=\mathbb{Q}_p(\mu_{p^\infty})\mathbb{Q}_p^\text{un}
=\mathbb{Q}_p(\mu_\infty).
$$
这就是局部 Kronecker–Weber 定理。

## 现代观点

```terms
Lubin–Tate 理论:
  en: Lubin–Tate theory
```
