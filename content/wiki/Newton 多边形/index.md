---
title: Newton 多边形
aliases: [Newton 折线, 牛顿多边形]
categories: [代数数论]
notices:
  - name: 问题
    items:
      - “性质”一节缺少收敛半径有限的幂级数的情形。
---

::: convention
在本文中，

- 所有环都指[[交换环]]。
- [[赋值]]的值群都包含于 $\mathbb{R}$。

:::

**Newton 多边形**是实值赋值域上一元[[多项式]]、
[[形式幂级数]]的数值不变量，用它可以快速看出零点的赋值。
它的理论推广了多项式素性的 [[Eisenstein 判别法]]。

## 定义

::: definition
设域 $K$ 带有[[赋值]] $v\colon K\to\mathbb{R}\cup\{\infty\}$，
$f(t)=\sum_{n=0}^\infty a_nt^n\in K[[t]]$。则
$f$ 的 **Newton 多边形**，记作
$\operatorname{NP}(f)$，指平面点集
$\{(n,v(a_n))\mid n\in\mathbb{N}\}$ 的下凸包，也即点集
$$
\{(n,y)\mid n\in\mathbb{N},\,y\in\mathbb{R},\,y\ge v(a_n)\}\subseteq\mathbb{R}^2
$$
的[[凸包]]。此凸包的下边界由一些线段组成，
称它们为 Newton 多边形的**边**，
并定义一条边的**长度**为其两端点横坐标之差。
如其左边界异于 $y$ 轴，则也把它称为**边**，
定义其**长度**为其横坐标。
显然，这些边的斜率从左到右递增。有时也用 Newton
多边形一词指这些边。
:::

## 性质

::: theorem
设 $K$ 是[[完备]]、[[代数闭]]的赋值域，
$f(t)=\sum_{n=0}^\infty a_nt^n\in K[[t]]$ 非零，满足
$\lim_{n\to\infty}\frac{v(a_n)}{n}=+\infty$，即
$f$ 的[[收敛半径]]为 $\infty$。则 $f(t)$ 各零点的赋值恰是其
Newton 多边形各边斜率的相反数，每个赋值出现的次数是其所对应边的长度。
:::

以下推论是 [[Eisenstein 判别法]]的加强。

::: corollary {@分解}
设 $K$ 是 [[Hensel 环|Hensel]] 赋值域，$f\in K[t]$ 是首一多项式。
则 $f$ 在[[代数闭包]] $K^\text{a}$ 中各个根的赋值恰是其
Newton 多边形各边斜率的相反数，
且每个赋值出现的次数是其所对应边的长度。此外，$f$
在 $K$ 上可以唯一分解为 Newton 多边形只有一条边的首一多项式之积。
而对 Newton 多边形只有一条边的 $f$，其各素因子的次数都被
$(\mathbb{Z}\times v(K))\cap\operatorname{NP}(f)$ 里点的横坐标间隔整除。
特别地，如 $(\mathbb{Z}\times v(K))\cap\operatorname{NP}(f)$
只有端点，则 $f$ 不可约。
:::

可将 Newton 多边形看成 $\mathbb{R}$ 上的[[凸函数]]，仍记作
$\operatorname{NP}(f)$，其中左右边界之外的点函数值定为
$+\infty$。这样便可考虑其 [[Legendre 变换]]，
它反映幂级数在不同圆盘内的上确界范数。以下对凸函数 $\varphi(x)$，
记其 Legendre 变换为 $\mathcal{L}(\varphi)(u)=
\inf_{x\in\mathbb{R}}(\varphi(x)+ux)$，它把凸函数一一映射到凹函数，
反变换为 $\widetilde{\mathcal{L}}(\psi)(x)=
\sup_{u\in\mathbb{R}}(\psi(u)-ux)$。注意这和
[[Legendre 变换]]的通常约定差一些符号。定义
$(\varphi*\psi)(x)=\inf_{a+b=x}(\varphi(a)+\psi(b))$，
则不难验证 $\mathcal{L}(\varphi*\psi)=\mathcal{L}(\varphi)
+\mathcal{L}(\psi)$。

::: proposition
$K$ 是赋值域，$f,g\in K[[t]]$。则 $\operatorname{NP}(fg)
  =\operatorname{NP}(f)*\operatorname{NP}(g)$，
$\mathcal{L}(\operatorname{NP}(fg))=
  \mathcal{L}(\operatorname{NP}(f))+
  \mathcal{L}(\operatorname{NP}(g))$。
:::

::: proposition
$K$ 是完备代数闭赋值域，$f\in K[[t]]$。则对 $u\in\mathbb{R}$，
$\mathcal{L}(\operatorname{NP}(f))(u)=\inf
  \{v(f(c))\mid c\in K,\,v(c)>u\}$。
:::

## 例子

::: example
用 Newton 多边形可以说明多项式 $E_n(t)=\sum_{j=0}^n
  \frac{t^j}{j!}$ 在 $\mathbb{Q}$ 上不可约。
对素数 $p$，考虑 $E_n$ 关于 $p$ 进赋值的 Newton 多边形。
由经典的 [[Kummer 定理]]，$v_p(j!)=\frac{j-s_p(j)}{p-1}$，
其中 $s_p(j)$ 为 $j$ 的 $p$ 进制展开各位数字之和。
由此不难发现该 Newton 多边形上的整点横坐标都是 $p^{v_p(n)}$
的倍数。于是由 @分解，$E_n$ 在 $\mathbb{Q}_p$
上素因子次数都被 $p^{v_p(n)}$ 整除。这对任意 $p$ 成立，
故 $E_n$ 在 $\mathbb{Q}$ 上素因子次数被
$\prod_pp^{v_p(n)}=n$ 整除，即 $E_n$ 不可约。

同样的办法还能说明对 $\alpha\in\mathbb{Q}\setminus\mathbb{Z}_-$，
Laguerre 多项式族 $L_n^{(\alpha)}(t)=\sum_{j=0}^n
  \binom{n+\alpha}{n-j}\frac{(-t)^j}{j!}$ 在 $n$
充分大时不可约。
:::

```terms
Newton 多边形:
  en: Newton polygon
  de: Newtonpolygon
  fr: polygone de Newton
```
