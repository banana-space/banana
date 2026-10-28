---
title: 正态分布
categories: [概率论]
navboxes: [概率论]
---

<problems>
- “基本性质”一节中 $r$ 阶原点绝对矩的公式似乎只对标准正态分布 $\mathcal{N} (0, 1)$ 成立；对 $\mathcal{N} (0, \sigma^2)$ 应再乘以 $\sigma^r$，$\mu \neq 0$ 时形式更复杂。
</problems>

在[[概率论]]中，
**正态分布**（或 **Gauß 分布**）是一种[[概率分布]]，
它在数学、统计学、自然科学、社会科学中具有广泛应用，
常常被视为已知[[期望]]和[[方差]]时“最自然”的分布。
正态分布记为 $\mathcal{N} (\mu, \sigma^2)$，
其中 $\mu, \sigma$ 分别为期望、[[标准差]]，从而 $\sigma^2$ 为方差。

下图绘制了正态分布的[[概率密度函数]]。
图中选了 $\mu = 0$ 作为正态分布的均值，
并且将标准差 $\sigma$ 也标注了出来。
一般的正态分布由该图像沿水平方向平移、拉伸得到。

```tikz
\begin{tikzpicture}
    \fill[domain=-3.5:3.5, smooth, cyan!5]
        plot ({\x}, {2 * exp(-\x*\x/2)});
    \draw[-stealth, line width=.75, black!30] (-4, 0) -- (4, 0);
    \draw[-stealth, line width=.75, black!30] (0, -.5)--(0, 2.7);
    \draw[line width=.5, cyan!80!black!70]
        (-1, 0) -- (-1, 1.21) (1, 0) -- (1, 1.21)
        (-2, 0) -- (-2, .27) (2, 0) -- (2, .27)
        (-3, 0) -- (-3, .02) (3, 0) -- (3, .02);
    \draw[domain=-3.5:3.5, smooth, line width=1.5, cyan!80!black]
        plot ({\x}, {2 * exp(-\x*\x/2)});
    \node[anchor=base] at (1, -.3) {$\sigma$};
    \node[anchor=base] at (2, -.3) {$2 \sigma$};
    \node[anchor=base] at (3, -.3) {$3 \sigma$};
    \node[anchor=base] at (-.15, -.3) {$0$};
    \node[anchor=base] at (-1, -.3) {$-\sigma$};
    \node[anchor=base] at (-2, -.3) {$-2 \sigma$};
    \node[anchor=base] at (-3, -.3) {$-3 \sigma$};
\end{tikzpicture}
```

对满足正态分布的随机变量而言，
其取值与期望的偏差在 $\sigma$、$2 \sigma$、$3 \sigma$ 以内的概率分别约为
$0.6827$、$0.9545$、$0.9973$。这也大致体现于上图中。
可以看出，偏差在 $3 \sigma$ 以外的[[概率]]很小。
这在统计学中也被称为“$3 \sigma$ 法则”。

正态分布的自然性可见于[[中心极限定理]]。
该定理说明，对一列实值[[独立同分布随机变量]] $X_1, X_2, \dotsc$，
其和 $X_1 + \cdots + X_n$ 近似满足正态分布 $\mathcal{N} (n \mu, n \sigma^2)$，
其中 $\mu, \sigma$ 分别是各 $X_i$ 的期望、标准差。
在自然科学中，如果将测量的误差视为多个微小误差的叠加，
则类似于上述结论，测量结果总是近似满足正态分布。
这阐述了正态分布为何在自然科学中普遍出现。

对[[随机向量]]而言，也有**多元正态分布**的概念。
多元正态分布由其均值 $\bm{\mu}$ 和[[协方差|协方差矩阵]] $\bm{B}$ 所确定，
随机向量的取值在均值附近呈[[椭球]]形，该椭球的形状由矩阵 $\bm{B}$ 确定。
例如，下图描绘了一个 $2$ 元正态分布，即平面 $\mathbb{R}^2$ 上的正态分布，
图中颜色深浅代表了相应[[概率密度函数]]的取值大小。

```tikz
\begin{tikzpicture}
    \begin{scope}[shift={(.5, 1)}, rotate=30, yscale=.5, xscale=1.125]
        \fill[cyan!5] (0, 0) circle (2);
        \fill[cyan!10] (0, 0) circle (1.4);
        \fill[cyan!15] (0, 0) circle (1.1);
        \fill[cyan!20] (0, 0) circle (.8);
        \fill[cyan!25] (0, 0) circle (.6);
    \end{scope}
    \draw[-stealth, line width=.75, black!30] (-3, 0) -- (3, 0);
    \draw[-stealth, line width=.75, black!30] (0, -1)--(0, 3);
\end{tikzpicture}
```

## 定义

::: definition [正态分布]
给定[[实数]] $\mu\in\mathbb R,\sigma>0$。
则以 $\mu$ 为均值（或[[期望]]），$\sigma$ 为[[标准差]]的**正态分布**是
$\mathbb{R}$ 上的[[概率分布]]，记为 $\mathcal{N} (\mu, \sigma^2)$，
由[[概率密度函数]]
\[
\varphi_{\mu,\sigma} (x) =
\frac{1}{\sqrt{2\pi} \, \sigma}
\exp \left(-\frac{(x-\mu)^2}{2\sigma^2}\right)
\]
给出。
正态分布 $\mathcal{N} (0, 1)$ 称为**标准正态分布**。
:::

::: definition [多元正态分布]
设 $n$ 为[[自然数]]。
给定向量 $\bm{\mu} \in \mathbb{R}^n$ 和 $n \times n$ [[正定矩阵]] $\bm{B}$，
则以 $\bm{\mu}$ 为均值，$\bm{B}$ 为[[协方差|协方差矩阵]]的
**$n$ 元正态分布**是 $\mathbb{R}^n$ 上的[[概率分布]]，
记为 $\mathcal{N} (\bm{\mu}, \bm{B})$，
由[[概率密度函数]]
\[
\varphi_{\bm{\mu}, \bm{B}} (\bm x) =
\frac{1}{(2\pi)^{n/2}\det(\bm B)^{1/2}}
\exp \left(-\frac12(\bm x-\bm\mu)^\top \bm B^{-1}(\bm x-\bm\mu)\right)
\]
给出，其中自变量 $\bm{x} \in \mathbb{R}^n$。
正态分布 $\mathcal{N} (0, \bm{I}_n)$ 称为 **$n$ 元标准正态分布**，
其中 $\bm{I}_n$ 为[[单位矩阵]]。
:::

注意到，若实值[[随机变量]] $X_1, \dotsc, X_n$ [[独立同分布随机变量|独立同分布]]，
且满足标准正态分布 $\mathcal{N} (0, 1)$，
则[[随机向量]] $(X_1, \dotsc, X_n)$ 满足 $n$ 元标准正态分布。

## 性质

### 基本性质

- 若实值[[随机变量]] $X$ 满足正态分布 $\mathcal{N} (\mu, \sigma^2)$，则

  - $X$ 的[[期望]]是 $\mathbb{E} (X) = \mu$。

  - $X$ 的[[方差]]是 $\operatorname{Var} (X) = \sigma^2$。

  - $X$ 的 $r$ 阶原点绝对[[矩]]是
    \[
    \mathbb{E}(|X|^r) = \sqrt{\frac{2^r}{\pi}}\Gamma\left(\frac{r+1}{2}\right).
    \]

  - $X$ 的[[累积分布函数]]是
    \[
    F (x) = \frac{1}{2} \Bigl(
      1 + \operatorname{erf} \frac{x - \mu}{\sqrt{2} \, \sigma}
    \Bigr),
    \]
    其中 $\operatorname{erf}$ 是[[误差函数]]。

  - $X$ 的[[特征函数 (概率论)|特征函数]]是
    \[
    \phi_X(t) = \exp \Bigl(
      \mathrm{i} \mu t - \frac{1}{2} \sigma^2 t^2
    \Bigr).
    \]

  - 对实数 $a \neq 0$ 和 $b$，
    实值随机变量 $a X + b$ 满足正态分布
    $\mathcal{N} (a \mu + b, a^2 \sigma^2)$。

- 若[[随机向量]] $\bm{X}$ 满足 $n$ 元正态分布
  $\mathcal{N} (\bm{\mu}, \bm{B})$，则

  - $\bm{X}$ 的[[期望]]是 $\mathbb{E} (\bm{X}) = \bm{\mu}$。

  - $\bm{X}$ 的[[协方差|协方差矩阵]]是 $\operatorname{Cov} (\bm{X}) = \bm{B}$。

  - $\bm{X}$ 的[[特征函数 (概率论)|特征函数]]是
    \[
    \phi_{\bm{X}} (\bm{t}) = \exp \Bigl(
      \mathrm{i} \bm{\mu}^{\top} \bm{t} -
      \frac{1}{2} \bm{t}^{\top} \bm{B} \bm{t}
    \Bigr).
    \]

  - 对[[秩]] $m$ 的 $m \times n$ 矩阵 $\bm{C}$ 和 $m$ 维向量 $\bm{v}$，
    随机向量 $\bm{C} \bm{X} + \bm{v}$ 满足 $m$ 元正态分布
    $\mathcal{N} (\bm{C} \bm{\mu} + \bm{v}, \bm{C} \bm{B} \bm{C}^{\top})$。

- 若 $X_1, X_2$ 为独立的随机变量，
  且 $X_1 \sim \mathcal{N} (\mu_1, \sigma_1^2)$，
  $X_2 \sim \mathcal{N} (\mu_2, \sigma_2^2)$，则
  $X_1 + X_2 \sim \mathcal{N}(\mu_1 + \mu_2,\sigma_1^2 + \sigma_2^2)$。

- 若 $X_1, \dotsc, X_n$ 独立，且都满足标准正态分布 $\mathcal{N} (0, 1)$，
  则 $X_1^2 + \cdots + X_n^2$ 满足自由度为 $n$ 的 [[$\chi^2$ 分布]]。

### 中心极限定理

[[中心极限定理]]说明，大量[[独立同分布随机变量]]的均值近似满足正态分布。

::: theorem [中心极限定理]
设 $X_1,X_2,\cdots$ 独立同分布，满足
$\mathbb{E}(X_1)=\mu,\operatorname{Var}(X_1)=\sigma^2<\infty$。
记均值 $\bar X_n=\frac1n(X_1+\cdots+X_n)$，则有依分布收敛
\[
\sqrt{n}(\bar X_n-\mu)\overset{\mathrm{d}}{\longrightarrow}
\mathcal{N} (0, \sigma^2)
\]
:::

```terms
正态分布:
  en: normal distribution
  fr: loi normale :f
  de: Normalverteilung :f
  ja: 正<せい>規<き>分<ぶん>布<ぷ>
  ko: 정규 분포 (正規分布)
```
