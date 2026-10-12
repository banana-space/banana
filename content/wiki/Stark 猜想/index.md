---
title: Stark 猜想
categories: [代数数论]
notices:
  - name: 问题
    items:
      - “简单情形”一节需要扩充。
---

**Stark 猜想**是[[代数数论]]中关于
[[Artin $L$ 函数]]特殊值的重要猜想，描述[[类数公式]]关于数域
[[Galois 扩张]]的分解，也是类数公式在 Artin $L$ 函数上的推广。

## 陈述

设 $L/K$ 是[[数域]]的 [[Galois 扩张]]，$G=
\operatorname{Gal}(L/K)$ 为 [[Galois 群]]，
$Z=Z(\mathbb{Q}[G])$ 为[[群环]]的[[中心]]。
由[[有限群的常表示论]]，
$$
\mathbb{C}[G]\cong\prod_{\rho}\mathrm{M}_{\dim(\rho)}(\mathbb{C}),
$$
其中 $\rho$ 取遍 $G$ 的不可约复表示。以 $e_\rho$ 记 $\rho$
对应的 $\mathbb{C}[G]$ 的中心幂等元，将
[[Artin $L$ 函数]]打包为
$$
\mathcal{L}(s,L/K)=\sum_\rho L(s,\rho,L/K)e_\rho,
$$
则其取值在 $Z(\mathbb{C}[G])=Z_{\mathbb{C}}$。
以下省去记号中的 $L/K$。记
$$
\mathcal{L}^*(0)=\sum_\rho L^*(0,\rho)e_\rho,
$$
其中 $L^*(0,\rho)$ 是 $L(s,\rho)$ 在 $0$ 处
[[Taylor 展开]]的首项系数，则 $\mathcal{L}^*(0)
\in Z_{\mathbb{R}}^\times$。另一方面，记
$U=\mathcal{O}_L^\times$ 为单位群，$S$ 为 $L$ 的
[[Archimedes 素点]]之集，则 [[Dirichlet 单位定理]]给出
$\mathbb{R}[G]$-模[[短正合列]]
\[
\begin{tikzcd}
  0\ar[r]&U_\mathbb{R}\ar[r,"\log"]&\mathbb{R} S\ar[r,"\Sigma_\mathbb{R}"]&\mathbb{R}\ar[r]&0,
\end{tikzcd}
\]
亦即 $\log$ 给出同构 $U_\mathbb{R}\cong\ker(\Sigma_\mathbb{R})$。由于
$\Sigma_\mathbb{R}$ 显然是 $\mathbb{Q}[G]$-模同态 $\Sigma\colon
\mathbb{Q}S\to\mathbb{Q}$ 的基变换，$\ker(\Sigma_\mathbb{R})
=\ker(\Sigma)_\mathbb{R}$，所以 $U_\mathbb{Q}$ 与 $\ker(\Sigma)$
作为 $\mathbb{Q}[G]$-模有不自然的同构。任取同构
$\varphi\colon\ker(\Sigma)\to U_\mathbb{Q}$，则
$\varphi_\mathbb{R}\circ\log\in\operatorname{Aut}_{\mathbb{R}[G]}(U_\mathbb{R})$。
于是半单代数的行列式构造给出元素
$\det_{\mathbb{R}[G]}(\varphi_\mathbb{R}\circ\log)\in Z_\mathbb{R}^\times$。
这依赖 $\varphi$ 的选取，但 $\varphi$ 定义在 $\mathbb{Q}$ 上，
所以该元素在 $Z_\mathbb{R}^\times/Z^\times$ 的像是典范的，记作
$\mathcal{R}$。Stark 猜想陈述如下：

::: conjecture
在 $Z_\mathbb{R}^\times/Z^\times$ 中，
$\mathcal{L}^*(0)=\mathcal{R}$。
:::

简而言之，Artin $L$ 函数在 $0$ 处的取值，
在差一个有理群环元素倍的意义下，由单位群的信息给出。

## 简单情形

```terms
Stark 猜想:
  en: Stark conjectures
```
