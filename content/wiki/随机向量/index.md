---
title: 随机向量
categories: [概率论]
navboxes: [概率论]
---

在[[概率论]]中，
**随机向量**是指取值于[[向量空间]]的[[随机变量]]。
例如，对 $n$ 个实值随机变量 $X_1, \dotsc, X_n$，有随机向量
\[
\bm{X} = (X_1, \dotsc, X_n),
\]
它取值于向量空间 $\mathbb{R}^n$。
因此，随机向量也可以视为 $n$ 个实值随机变量组成的序列。

## 定义

::: definition [随机向量]
对有限维[[实数|实]]或[[复数|复]][[向量空间]] $V$，
我们将其配以 [[Borel $\sigma$-代数]]而使之成为[[可测空间]]。
则[[概率空间]] $(\Omega, \mathcal{F}, \mathbb{P})$ 上的**随机向量**
是指取值于上述可测空间 $V$ 的[[随机变量]]
\[
\bm{X} \colon \Omega \longrightarrow V.
\]

若 $V$ 是 $n$ 维空间，则也称 $\bm{X}$ 为 **$n$ 维随机向量**。
:::

当 $V = \mathbb{R}^n$ 或 $\mathbb{C}^n$ 时，
常常将 $\bm{X}$ 表示为[[行向量]]或[[列向量]]的形式，即
\[
\bm{X} = (X_1, \dotsc, X_n)
\quad \text{或} \quad
\bm{X} = (X_1, \dotsc, X_n)^\top,
\]
其中 $X_1, \dotsc, X_n$ 为实值或复值随机变量，
也就是映射 $\bm{X} \colon \Omega \to V$ 的各个分量。

```terms
随机向量:
  en: random vector
  fr: vecteur aléatoire :m
  de: Zufallsvektor :m
  ja: 確<かく>率<りつ>ベクトル
```
