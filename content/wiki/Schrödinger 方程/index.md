---
title: Schrödinger 方程
aliases: [薛定谔方程]
categories: [量子力学]
---

<problems>
- “动机”“例子”“求解”各节需要扩充。
</problems>

**Schrödinger 方程**是[[量子力学]]的[[公理]]之一，
它描述了量子力学框架下物理系统随时间的演化。

## 陈述

::: definition [方程：Schrödinger 方程]
给定一个[[量子力学]]系统，它满足如下 **Schrödinger 方程**：
\[
\mathrm{i}\hbar\frac{d\psi}{dt} = \hat{H}\psi.
\]
其中 $\psi(t)$ 表示系统在 $t$ 时的态；
$H$ 为经典 [[Hamilton 量]]，
$\hat{H}$ 为它在量子力学中对应的算子。
:::

我们接下来假设 $H$ 不随时间而变。

注意到如果 $\psi(0)$ 为 $\hat{H}$ 的特征值为 $E$ 的特征向量时，
方程化为[[常微分方程]]，其解为
\[
\psi(t) = \exp(-\frac{\mathrm{i}Et}{\hbar}) \psi(0).
\]
则对一般的 $\psi$，
由[[无界算子]]的[[谱理论]]可以将其写成若干 $\hat{H}$ 的特征向量之和
（这里的特征向量可能是广义的，求和也可能是积分）
\[
\psi(0) = \sum c_n \psi_n, \quad \hat{H}\psi_n = E_n\psi_n,
\]
则有
\[
\psi(t) = \sum c_n \exp(-\frac{\mathrm{i}E_nt}{\hbar})\psi_n.
\]
因此只要求出 $\hat{H}$ 的特征向量，就可以解出 Schrödinger 方程。
$\hat{H}$ 的特征方程即是所谓定态 Schrödinger 方程。

::: definition [方程：定态 Schrödinger 方程]
对给定的量子力学系统，设 $H$ 不随时间而变，
则能量 $E \in \mathbb{R}$ 的**定态 Schrödinger 方程**为
\[
\hat{H}\psi = E\psi.
\]
:::

## 动机

## 例子

下面列出了一些系统的 [[Hamilton 量]]的例子，
这些量给出了相应的 Schrödinger 方程。

- 对（非相对论的）单粒子系统，
  其 Hilbert 空间为 $L^2(\mathbb{R}^n)$，Hamilton 量为
  \[
  \hat{H}\psi = (\frac{\hat{p}^2}{2m} + V)\psi
  = -\frac{\hbar^2}{2m} \nabla^2 \psi + V\psi
  \]
  其中 $V$ 是 $\mathbb{R}^n$ 上函数，即[[势能]]，$m$ 为粒子的[[质量]]。

## 求解

```terms
Schrödinger 方程:
  en: Schrödinger equation
  de: Schrödingergleichung
  fr: équation de Schrödinger
```
