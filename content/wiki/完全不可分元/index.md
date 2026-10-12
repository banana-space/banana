---
title: 完全不可分元
categories: [域论]
navboxes: [域论]
---

**完全不可分元** 是[[域扩张]]中扩域中的一类元素，
与[[可分元]]完全相反，
这类元素的[[极小多项式]]在扩域的[[代数闭包]]中只有一个根（见 @irr-def2）。

## 定义

::: definition
设 $K/k$ 是域扩张，$k$ 的[[特征]]是[[素数]] $p$。
如果对于 $K$ 的在 $k$ 上代数的元素 $u$，存在正整数 $m$
使得 $u^{p^m}\in k$，则称 $u$ 是 $k$ 上的**完全不可分元**。
:::

## 性质

@irr-def 和 @irr-def2 刻画了两个完全不可分元的等价定义。

### 基本性质

::: proposition {@irr-def}
记号同上，$u$ 是 $k$ 上的完全不可分元
$\iff$ $u$ 在 $k$ 上代数，且极小多项式是
$x^{p^l}-a$，$l$ 是某一非负整数。
:::

::: proof
$(\implies)$ 设正整数 $m$ 使得 $u^{p^m}=a\in k$。
则 $u$ 在 $k$ 上的极小多项式 $\psi$ 是 $x^{p^m}-a$ 的因式。
设 $\Omega$ 为 $k(u)$ 的一个代数闭包（从而也是 $k$ 的一个代数闭包）。
因为 $x^{p^m}-a=x^{p^m}-u^{p^m}=(x-u)^{p^m}$ 在 $\Omega$ 只有 $u$ 一个根，
所以$u$ 在 $k$ 上的极小多项式 $\psi$ 在 $\Omega$ 中只有 $u$ 一根。
设 $\psi(x)=\varphi(x^{p^l})$，其中 $\varphi(x)$ 在 $k$ 上可分。
如果 $\varphi$ 在 $\Omega$ 有两个不同零点 $x_1$ 和 $x_2$，
设 $y_1$，$y_2\in \Omega$ 满足 $y_1^{p^l}=x_1$，$y_2^{p^l}=x_2$，则 $y_1$，
$y_2$ 是 $\psi$ 的两个不相等的根，矛盾。
所以 $\varphi$ 在 $\Omega$ 中仅一根。
又因为  $\varphi$ 可分且它属于 $k[x]$，所以 $\varphi(x)=x-a$，$a\in k$，
从而 $\psi(x)=x^{p^l}-a$，$a\in k$。

$(\impliedby)$ $u^{p^l}\in k$。
:::

::: remark
如果 $u\in K$ 只满足存在正整数 $n$ 使得 $u^n\in k$，
不能推出 $u$ 在 $k$ 上完全不可分。
例如考虑三元域 $F_3=\{\bar{0},\ \bar{1}, \ \bar{2}\}$ 与其代数闭包 $\Omega$。
设 $u\in \Omega$ 使得 $u^2=\bar{2}$。
因为 $\psi(x)=x^2-\bar{2}$ 在 $F_3$ 上无解，所以它在 $F_3$ 上不可约，
从而是 $u$ 在 $F_3$ 上的极小多项式。
由 @irr-def 知 $u$ 不是 $F_3$ 上的完全不可分元。
:::

::: proposition {@irr-def2}
记号同上，$\Omega$ 是 $K$ 的一个代数闭包，$u\in K$ 在 $k$ 上极小多项式为 $\psi$。
$u$ 在 $k$ 上完全不可分 $\iff$
存在正整数 $m$，$\psi(x)=(x-u)^m$ $\iff$ 在
$\Omega$ 中，$\psi(x)$ 只有 $u$ 一根。
:::

::: proof
后一“$\iff$”是显然的。对于前一“$\iff$”：

$(\implies)$ 由 @irr-def，$\psi(x)=x^{p^l}-u^{p^l}=(x-u)^{p^l}$。

$(\impliedby)$ 设 $m=np^l$，$n,\ p$ 互素。
只须证 $n=1$。注意
\[
k[x]\ni(x-u)^m=(x-u)^{np^l}=((x-u)^{p^l})^n=(x^{p^l}-u^{p^l})^n .
\]
考察上式中 $(x^{p^l})^{n-1}$ 的系数知 $nu^{p^l}\in k$，
又 $n, \ p$ 互素，所以 $u^{p^l}\in k$，即 $x^{p^l}-u^{p^l}\in k[x]$。
因为 $(x-u)^m=(x^{p^l}-u^{p^l})^n$ 在 $k$ 上不可约，所以 $n=1$。
:::

::: proposition
记号同上，$u$ 在 $k$ 上可分且完全不可分
$\iff $ $u\in k$。
:::

::: proof
$(\implies)$ 由 $u$ 在$k$ 上完全不可分可设 $u$ 在 $k$ 上极小多项式是 $\psi(x)=x^{p^l}-a$，
$a\in k$（@irr-def）。因为 $u$ 在 $k$ 上可分，所以 $l=0$，
即  $u$ 在 $k$ 上极小多项式是 $\psi(x)=x-a$，$a\in k$，从而 $u=a\in k$。

$(\impliedby)$ 显然。
:::

## 完全不可分扩张

顾名思义，完全不可分扩张就是每个元素都不可分的扩张。

::: definition
如果域扩张 $k\subseteq K$ 是代数扩张，而且每一 $u\in K$ 均在 $k$ 上完全不可分，
则称 $k\subseteq K$ 是一个 **完全不可分扩张**。
:::

::: remark
我们回忆每个 $u\in k$ 平凡地在 $k$ 上完全不可分。
:::

::: theorem
对于代数扩张 $k\subseteq K$，下述断言等价：

(1) $k\subseteq K$ 是一个完全不可分扩张。

(2) 每个 $u\in K, u\notin k$，$u$ 都是 $k$ 上不可分元。

(3) $K= k(S)$，$S$ 中每个元素都是完全不可分元。
:::

::: proof
(1) $\implies$ (3)：显然。

(3) $\implies$ (1)：只须证明若 $x, y$ 是完全不可分元，那么 $x+y, xy, -x, x^{-1}$
亦是完全不可分元。对于 $x+y$，如果 $x^{p^n}, y^{p^m}\in k$，则
\[
(x+y)^{p^{\max(m, n)}}= x^{p^{\max(m, n)}}+ y^{p^{\max(m, n)}}\in k,
\]
所以 $x+y$ 完全不可分。验证其余元素完全不可分是容易的。

(1) $\implies$ (2)：显然。

(2) $\implies$ (1)：对每个 $u\in K$，熟知存在 $m\in\mathbb Z_+$ 使得 $u^{p^m}$ 在 $k$ 上可分，
从而由假设有 $u^{p^m}\in k$。
:::

```terms
完全不可分:
  en: purely inseparable
```
