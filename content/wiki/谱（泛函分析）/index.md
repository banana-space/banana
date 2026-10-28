---
title: 谱（泛函分析）
aliases: [Gelfand–Mazur 定理, Gelfand-Mazur 定理]
categories: [泛函分析]
navboxes: [泛函分析]
---

<disambiguation>
关于其他含义，请参见[[谱]]。
</disambiguation>

<problems>
- “性质”一节第一个定理的证明中，$(\lambda-a)^{-1}$ 关于 $\lambda$ 的导数似乎应为 $-(\lambda-a)^{-2}$（不影响论证）。
</problems>

**谱**是[[线性代数]]中算子[[特征值]]在[[泛函分析]]中的推广。

## 定义

::: definition [有界算子] {@有界算子}
设 $E$ 是 [[Banach 空间]]，$a\colon E\to E$ 是[[有界算子]]。
$a$ 的**谱**，记作 $\sigma(a)$，指 $\mathbb{C}$ 的子集
$$
\{\lambda\in\mathbb{C}\mid \lambda-a\ 不可逆\}.
$$
:::

该定义可推广到不同的情形。

::: definition [Banach 代数]
设 $A$ 是 [[Banach 代数]]。元素 $a\in A$ 的**谱**，
记作 $\sigma(a)$，指 $\mathbb{C}$ 的子集
$$
\{\lambda\in\mathbb{C}\mid \lambda-a\ 不可逆\}.
$$
:::

取 $A=\mathcal{L}(E)$ 为有界算子代数，就得到 @有界算子。

::: definition [无界算子]
设 $E$ 是 [[Banach 空间]]，$a\colon E\to E$
是[[稠定闭算子]]。$a$ 的**谱**，记作 $\sigma(a)$，
指 $\mathbb{C}$ 的子集
$$
\{\lambda\in\mathbb{C}\mid \lambda-a\ 不可逆\}.
$$
注意，说稠定闭算子 $T$ 可逆，指的是存在有界算子 $S$，
使得 $TS=\operatorname{id}$，
$ST=\left.\operatorname{id}\right|_{\mathcal{D}(T)}$。
:::

## 性质

::: theorem
非零 Banach 代数中元素的谱是非空[[紧集]]。
:::

::: proof
设 $A$ 是非零 [[Banach 代数]]，$a\in A$。注意 $\sigma(a)$
的补集是开集 $A^\times$ 在连续映射 $\mathbb{C}\to A$，
$\lambda\mapsto\lambda-a$ 的原像，为开集，知 $\sigma(a)$
为闭集。对 $|\lambda|>\|a\|$，用展开式
$(1-x)^{-1}=1+x+x^2+\cdots$ 容易发现 $\lambda-a$
可逆，故 $\sigma(a)\subseteq B_{\|a\|}(0)$，为 $\mathbb{C}$
中有界闭集，故为紧集。

如 $\sigma(a)=\varnothing$，考虑关于 $\lambda\in\mathbb{C}$，
取值在 $A$ 的函数 $(\lambda-a)^{-1}$。容易发现它复可导，
导数为 $(\lambda-a)^{-2}$，且在 $|\lambda|\to\infty$
时趋于 $0$。于是对 $A$ 上任意连续线性泛函 $f$，有
$f((\lambda-a)^{-1})$ 关于 $\lambda$ 为复平面上[[全纯函数]]，
在 $|\lambda|\to\infty$ 时趋于 $0$。由 [[Liouville 定理]]，
它为常数，故为恒零。现在 [[Hahn–Banach 定理]]说明
$(\lambda-a)^{-1}=0$，与 $A$ 非零矛盾。
:::

::: corollary [Gelfand–Mazur]
如非零 Banach 代数 $A$ 中每个非零元都可逆，则 $A=\mathbb{C}$。
:::

::: proof
对任意 $a\in A$，由 $\sigma(a)$ 非空及条件知存在
$\lambda\in\mathbb{C}$ 满足 $\lambda-a=0$，换言之 $a\in\mathbb{C}$。
:::

Banach 代数中元素的[[谱半径]]有如下计算方法，详见主条目。

::: theorem [谱半径]
设 $A$ 是非零 Banach 代数，$a\in A$。则
$$
\sup_{\lambda\in\sigma(a)}|\lambda|=
\lim_{n\to\infty}\|a^n\|^{1/n}.
$$
特别地，等号右边收敛。
:::

很多时候，算子的谱依算子的性质有其对应的性质，
且能反映算子的很多信息，这就是[[谱理论]]。
它包括[[正规算子的谱理论]]、[[紧算子的谱理论]]等。

```terms
谱:
  en: spectrum
  de: Spektrum :n
  fr: spectre :m
  grc: φάσμα :n
  la: spectrum :n
```
