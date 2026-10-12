---
title: Galois 理论
categories: [域论]
navboxes: [域论]
---

**Galois 理论**是通过引入 [[Galois 群]]，以使用[[群论]]研究[[域扩张]]的理论。
其主定理给出了[[子群]]与[[子扩张]]的一一对应关系。

Galois 理论由 [[Évariste Galois]] 创立，
最初目的是解决[[多项式方程]]的[[根式求解]]问题。

## 主定理

### 有限情形

::: theorem
对有限 [[Galois 扩张]] $G = \operatorname{Gal}(L / K)$。下述二映射：
\[
H \mapsto L^H
\]
以及
\[
K' \mapsto \operatorname{Gal}(L / K')
\]
互逆，且建立了 $G$ 的[[子群]]与 $L / K$ 的[[子扩张]]之间的一一对应
（这里 $L^H$ 表示 $L$ 中在 $H$ 的任何元素作用下均不变的元素构成的[[子域]]）。
使得

- $H$ 的阶为 $L / L^H$ 的次数。$H$ 在 $G$ 中[[指数]]为 $L^H / K$ 的次数。

- [[正规子群]]对应于 Galois 子扩张。即 $H$ 正规当且仅当 $L^H / K$ 为
  [[Galois 扩张]]。同时，[[商群]] $G / H$ 与 $\operatorname{Gal}(L^H/K)$ 同构。

:::

### 一般情形

::: theorem
对 [[Galois 扩张]] $G = \operatorname{Gal}(L / K)$。下述二映射：
\[
H \mapsto L^H
\]
以及
\[
K' \mapsto \operatorname{Gal}(L / K')
\]
互逆，且建立了 $G$ 的[[闭子群]]与 $L / K$ 的[[子扩张]]之间的一一对应
（这里 $L^H$ 表示 $L$ 中在 $H$ 的任何元素作用下均不变的元素构成的[[子域]]）。
使得：

- [[开子群]]对应于[[有限扩张]]。

- $H$ 在 $G$ 中[[指数]]与 $L^H / K$ 的次数[[等势]]。

- [[正规闭子群]]对应于 Galois 子扩张。即 $H$ 是正规闭子群当且仅当 $L^H / K$ 为
  [[Galois 扩张]]。同时，[[商群]] $G / H$ 与 $\operatorname{Gal}(L^H/K)$ 同构。

:::

## 应用

在[[数论]]中，方程求根自然引入了[[数域]]的扩张，使得 Galois 理论
在解决古典问题（例如[[尺规作图]]、[[方程求根公式]]等）的同时也成为现代[[代数数论]]的基石。
这方面一个基础的结果是：

::: theorem [Galois]
域 $K$ 上一元多项式方程 $f(x)=0\quad  (f(x)\in K[x])$ 可根式解当且仅当
$f$ 在 $K$ 上的分裂域 $E$ 是 $K$ 的可解扩张，即 Galois 群 $\operatorname{Gal}(E/K)$ 是[[可解群]]。
:::

这也就是“可解群”这个名字的由来。

## 类比

Galois 理论与[[覆叠空间]] 理论具有良好的类比。

## 主要问题

::: exercise* [Galois 反问题]
对满足何种性质的[[射有限群]]，其同构于某个 $\mathbb{Q}$ 的扩张的 Galois 群？
:::

```terms
Galois 理论:
  en: Galois theory
  de: Galoistheorie :f
  fr: théorie de Galois :f
```
