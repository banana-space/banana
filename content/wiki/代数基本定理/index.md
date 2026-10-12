---
title: 代数基本定理
categories: [域论, 复分析]
notices:
  - name: 问题
    items:
      - “用线性代数”一节中矩阵范数 $\|A\| = \inf_{|x| = 1}|Ax|$ 的下确界似乎应为上确界。
navboxes: [域论]
---

**代数基本定理**是[[代数学]]中的重要结论。
该定理说明，[[复数]][[域]] $\mathbb{C}$ 是[[代数闭域]]。
也就是说，对任何形如
\[
a_n x^n + a_{n-1} x^{n-1} + \cdots + a_0 = 0
\]
的[[多项式]]方程，其中各系数 $a_i$ 为复数，若 $n > 0$ 且 $a_n \neq 0$，
则必存在复数 $x \in \mathbb{C}$ 满足该方程，
称为该方程的[[根]]。

注意到，类似的结论对[[实数]]域 $\mathbb{R}$、[[有理数]]域 $\mathbb{Q}$ 是不成立的。
例如，方程 $x^2 + 1 = 0$ 在这些域中没有解，
但在复数域中有解 $x = \pm \mathrm{i}$。

## 陈述

::: theorem [代数基本定理]
[[复数]][[域]] $\mathbb{C}$ 是[[代数闭域]]。
:::

## 证明

### 用初等分析

考虑多项式
$$
P(z)=a_nz^n+\cdots+a_0,\quad a_n\ne0.
$$
令 $m=\inf_{z\in\mathbb{C}}|P(z)|$，$R=1+\frac{m+|a_{n-1}|+\cdots+|a_0|}{|a_n|}$。
由于 $|z|>R$ 时
$$
|P(z)|>\left|\frac{P(z)}{z^{n-1}}\right|>|a_n||z|-|a_{n-1}|-\cdots-|a_0|>m,
$$
有 $m=\inf_{|z|\le R}|P(z)|$。由于[[紧集]]上[[连续函数]]有最小值，
故存在 $z_0$ 使得 $|P(z_0)|=m$，我们要证明 $m=0$。
用反证法，如 $m>0$，乘常数可设 $P(z_0)=m=1$；平移自变量可设 $z_0=0$，
即 $P(0)=1$ 为最小值。现在按次数从小到大写出
$$
P(z)=1+a_kz^k+\cdots+a_nz^n,\quad a_k\ne0,
$$
然后写极坐标形式 $a_k=-re^{-i\theta}$，$r>0$。
最后取 $z=\delta e^{i\theta/k}$，则在 $\delta>0$ 充分小时上式是
$1-r\delta^k+o(\delta^k)<1$，与 $1$ 是最小值矛盾。

### 用复分析

若多项式 $P$ 次数大于 $0$ 且没有复根，考虑函数 $f(z) = 1/P(z)$。
则 $f$ 为整个复平面上的[[全纯函数]]。与数学分析证明中的第一步类似，
不难发现 $|z|$ 充分大时 $|P(z)|$ 有正下界，故 $|f(z)|$ 有界；
而 $|f(z)|$ 在紧集内自然有界，故它是 $\mathbb{C}$ 上有界全纯函数，
由 [[Liouville 定理]]它是常数，显然不可能。

### 用线性代数

定理实际上等价于任何 $n$ 阶复[[矩阵|方阵]] $A$ 都有复[[特征值]]。假设不是这样，
考虑预解函数

\[
R(z) = (z I_n - A)^{-1},
\]
其中 $I_n$ 是 $n$ 阶[[单位阵]]。一般而言，它是[[亚纯函数]]，其特征值即为函数的[[极点]]。
而假设 $A$ 没有特征值，所以 $R(z)$ 是[[全纯函数]]。由 [[Cauchy 积分定理]]：
\[
\int_{\partial B(0,r)} R(z) \mathrm dz = 0.
\]
另一方面，对 $r > \|A\|$（其中 $\|A\| = \inf_{|x| = 1}|Ax|$ 是矩阵的[[范数]]），把 $R(z)$ 在
无穷远处展开：
\[
R(z) = z^{-1} (I_n - z^{-1}A)^{-1} = \sum_{k=0}^{\infty} \frac{1}{z^{k+1}} A^k,
\]
从而计算得
\[
\int_{\partial B(0,r)} R(z) \mathrm dz = \sum_{k=0}^{\infty} \int_{\partial B(0,r)} \frac{\mathrm dz}{z^{k+1}} A^k = 2\pi\mathrm i I_n,
\]
矛盾。

### 用基本群

设 $P(z) = a_n z^n + \cdots + a_0, \quad a_n \neq 0$。如果 $P$ 没有根，首先 $a_0 \neq 0$，
否则 $0$ 是根。不妨设 $a_n = 1$。对任意 $r > 0$，定义
$f_r \colon S^1 \to S^1$ 为
\[
f_r(z) = \frac{P(rz)}{|P(rz)|}.
\]
不难看出 $f_r \simeq f_0$，而 $f_0(z) = {a_0}/{|a_0|}$
是常值，故 $f_r$ 是[[零伦]]的。通过计算可以得出
\[
\lim_{r \to +\infty} f_r(z) = z^n,
\]
令 $h \colon S^1 \to S^1, z \mapsto z^n$，则 $r$ 充分大时有
$f_r(z) + h(z) \neq 0$。考虑 $H \colon S^1 \times I \to S^1$ 为
\[
H(z,t) = \frac{(1-t)f_r(z) + th(z)}{|(1-t)f_r(z) + th(z)|},
\]
不难看出 $H$ 是 $f_r$ 与 $h$ 之间的[[同伦]]。这样 $h$ 也是零伦的。
但这并不成立，因为 $h_* \colon \pi_1(S^1) \to \pi_1(S^1)$ 非平凡。

### 用 Galois 理论

我们来证明 $\mathbb C = \mathbb{R}[\mathrm i]$ 是代数闭域。考虑 $\mathbb C$
的一个[[有限扩张|有限]] [[Galois 扩张]] $E$。只需证明
$E = \mathbb C$。取 $G = \operatorname{Gal}(E/\mathbb{R})$ 的
[[Sylow 子群|Sylow]] $2$-[[子群]] $H$，考察 $E^H$。注意到
$[E^H : \mathbb{R}]$ 是奇数，而[[实闭域]]没有奇次扩张，故 $E^H = \mathbb{R}$，
得到 $[E : \mathbb{R}]$ 是 $2$ 的幂，$[E : \mathbb{C}]$ 也如此。
设 $[E : \mathbb{C}] = 2^n$，只要证明 $n = 0$。若不然，根据 [[Sylow 定理]]，
可以取 $\operatorname{Gal}(E/\mathbb{C})$ 的 $2^{n-1}$ 阶
子群 $N$，考察 $E^N$。因为 $[E^N : \mathbb{C}] = 2$，且
$\operatorname{char} \mathbb{C} \neq 2$，得 $E^N = \mathbb{C}[\sqrt d]$，
其中 $d \in \mathbb{C}$ 在 $\mathbb{C}$ 中无平方根。但 $\mathbb{C}$ 中任何元素
都有平方根，矛盾。

## 推论

通过代数基本定理，可以得到多项式复数根的个数。

::: proposition
设 $n$ 是正整数，$P$ 是复数域 $\mathbb{C}$ 上的 $n$ 次多项式，
则在计算重数的意义下，$P$ 恰有 $n$ 个复数根。这是说 $P$ 一定能分解为
\[
P (z) = c (z - z_1) \cdots (z - z_n)
\]
的形式，其中 $c, z_1, \dotsc, z_n \in \mathbb{C}$，且 $c \neq 0$。
:::

::: proof [证明概要]
用数学归纳法。$n = 1$ 时，不难直接解出根。对 $n$ 次多项式 $P$，根据代数基本定理，
它有复数根 $z_0$。此时可以进行因式分解：$P(z) = (z - z_0) Q(z)$，其中 $Q$ 是
$n - 1$ 次多项式。对 $Q$ 用归纳假设即可。
:::

```terms
代数基本定理:
  en: fundamental theorem of algebra
  fr: théorème fondamental de l'algèbre :m
  de: Fundamentalsatz der Algebra :m
  ja: 代<だい>数<すう>学<がく>の基<き>本<ほん>定<てい>理<り>
  ko: 대수학의 기본 정리 (代數學의 基本 定理)
```
