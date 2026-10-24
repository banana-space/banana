---
title: 代数 de Rham 上同调
categories: [上同调论]
navboxes: [同调与上同调]
---

**代数 de Rham 上同调**是
[[de Rham 上同调]]在[[代数几何]]中的对应物。
它在[[概形]][[光滑态射|光滑]]时表现良好，在基域特征 $0$ 时是
[[Weil 上同调理论]]，在[[复数]]域上还通过[[代数几何–解析几何对应]]
直接对应于微分几何的 [[de Rham 上同调]]。

## 定义

::: definition [代数 de Rham 复形]
[[概形]][[态射]] $f\colon X\to S$ 的**代数
de Rham 复形**，也称 $X$ 在 $S$ 上的 de Rham 复形，记作
$\Omega_{X/S}^\bullet$，指的是 $X$ 上的
$f^{-1}\mathcal{O}_S$-复形
$$
0\to\mathcal{O}_X\to\Omega_{X/S}\to\Omega^2_{X/S}
\to\cdots
$$
其中 $\Omega_{X/S}^i$ 是 $i$ 阶 [[Kähler 微分]]，
映射都是外微分。换言之，代数 de Rham 复形是映射
$\mathrm{d}\colon\mathcal{O}_X\to\Omega_{X/S}$ 的
[[Koszul 复形]]。
:::

::: definition [代数 de Rham 上同调]
概形态射 $f\colon X\to S$ 的**代数 de Rham
上同调**，也称 $X$ 在 $S$ 上的 de Rham 上同调，记作
$R\Gamma_\text{dR}(X/S)$ 与 $H^i_\text{dR}(X/S)$，
指的是复形 $\Omega_{X/S}^\bullet$ 的导出前推
$Rf_*(\Omega_{X/S}^\bullet)\in\mathsf{D}(\mathcal{O}_S)$
及其各阶上同调 $R^if_*(\Omega_{X/S}^\bullet)\in
  \mathsf{Mod}(\mathcal{O}_S)$。
:::

下面将会看到，只要 $f$ 满足非常松的有限性条件即[[拟紧拟分离态射|拟紧拟分离]]，
就有 $R\Gamma_\text{dR}(X/S)\in
\mathsf{D}_\mathsf{QCoh}(\mathcal{O}_S)$。

::: remark
有些地方用 $R\Gamma_\text{dR}(X/S)$ 指
$R\Gamma(X,\Omega_{X/S}^\bullet)$，与这里的定义大相径庭。
不过在 $S$ 仿射且 $f$ 拟紧拟分离时它俩一致。
:::

## 性质

::: proposition [Hodge 到 de Rham 谱序列]
对 $f\colon X\to S$，有谱序列收敛
$$
E_1^{p,q}=R^qf_*\Omega_{X/S}^p\Rightarrow
H^{p+q}_\text{dR}(X/S).
$$
:::

::: proposition [共轭谱序列]
对 $f\colon X\to S$，有谱序列收敛
$$
E_2^{p,q}=R^pf_*H^q(\Omega_{X/S}^\bullet)\Rightarrow
H^{p+q}_\text{dR}(X/S).
$$
:::

::: proposition [拟凝聚性]
如 $f\colon X\to S$ [[拟紧拟分离态射|拟紧拟分离]]，则
$R\Gamma_\text{dR}(X/S)\in
  \mathsf{D}_\mathsf{QCoh}(\mathcal{O}_S)$。
:::

::: proposition [凝聚性]
如 $f\colon X\to S$ [[紧合态射|紧合]]，
$S$ [[Noether 概形|Noether]]，则 $R\Gamma_\text{dR}(X/S)\in
  \mathsf{D}^b_\mathsf{Coh}(\mathcal{O}_S)$。
:::

::: proposition [万有性质]
环同态 $R\to A$ 的 de Rham 复形是 $0$ 次项为 $A$
的 $R$-[[微分分次代数]]中初始者。概形态射 $f\colon X\to S$
的 de Rham 复形是 $0$ 次项为 $\mathcal{O}_X$ 的
$f^{-1}\mathcal{O}_S$-微分分次代数层中初始者。
:::

下面的定理描述了代数 de Rham 上同调在不同基域的行为。
证明见相应主条目。

::: theorem [[[代数几何–解析几何对应]]]
设 $X$ 是 $\mathbb{C}$ 上光滑概形。以 $X^\text{an}$
记其对应的复解析流形，$\nu\colon X^\text{an}\to X$
记自然的连续映射。则 $\mathsf{D}(\mathcal{O}_X)$
中有自然同构
$$
\Omega_{X/\mathbb{C}}^\bullet=
R\nu_*\Omega_{X^\text{an}}^\bullet,
$$
其中 $\Omega_{X^\text{an}}^\bullet$ 指全纯微分形式复形。
特别地，两边取整体截面，由
[[Dolbeault 上同调|Dolbeault 消解]]有
$$
R\Gamma_\text{dR}(X/\mathbb{C})=
R\Gamma_\text{dR}(X^\text{an},\mathbb{C}).
$$
:::

::: theorem [[[Cartier 同构]]]
设 $f\colon X\to S$ 是 $\mathbb{F}_p$-概形的光滑态射。
考虑[[Frobenius 态射|相对 Frobenius]] $F_{X/S}\colon X\to X^{(p)}$
定义为
\[
\begin{tikzcd}
  X\ar[drr, bend left, "F_X"]
  \ar[ddr, bend right, "f"']\ar[dr,"F_{X/S}"]&&\\
  &X^{(p)}\ar[r]\ar[d]&X\ar[d,"f"]\\
  &S\ar[r,"F_S"']&S
\end{tikzcd}
\]
其中 $X^{(p)}$ 为拉回，$F_S$ 和 $F_X$ 分别为 $S$ 和
$X$ 的 [[Frobenius 态射]]。则 $\Omega_{X/S}^\bullet\in
  \mathsf{D}(F_{X/S}^{-1}\mathcal{O}_{X^{(p)}})$，
且对 $i\in\mathbb{N}$ 有保持外积的自然同构
$$
H^i(\Omega_{X/S}^\bullet)= F_{X/S}^{-1}\Omega^i_{X^{(p)}/S},
$$
这里右边到左边的映射是形式地除以 $p^i$。
:::

## 例子

::: example [仿射直线]
环同态 $R\to R[x]$ 的[[微分模]]为 $\Omega_{R[x]/R}=
  R[x]\mathrm{d}x$，秩一自由，故其 de Rham 复形为
$$
0\to R[x]\to R[x]\mathrm{d}x\to0
$$
$R$ 为 $\mathbb{Q}$-代数时，微分是满射，其上同调在
$0$ 处是 $R$，$1$ 处是 $0$，与复仿射直线的直观相符。
$R$ 为 $\mathbb{F}_p$-代数时，其上同调在 $0$ 处是
$R[x^p]$，$1$ 处是 $R[x^p]\frac{\mathrm{d}(x^p)}{p}$，
此处 $\frac{\mathrm{d}(x^p)}{p}$ 形式地表示
$x^{p-1}\mathrm{d}x$。
:::

## 推广

和 [[Kähler 微分]]一样，代数 de Rham 上同调在不光滑情形表现欠佳，
此时正确的对象是[[导出 de Rham 上同调]]。

和[[平展上同调]]一样，代数 de Rham 上同调也有带系数的版本，
为此需要引入 [[Grothendieck 联络]]的概念。

```terms
代数 de Rham 上同调:
  en: algebraic de Rham cohomology
  de: algebraische De-Rham-Kohomologie
  fr: cohomologie algébrique de de Rham
```
