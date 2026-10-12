---
title: 复数次幂形式级数
---

**复数次幂形式级数**允许形式变量的指数取任意复数。
它的一个主要用途是记录绕原点解析延拓时的变化。
例如，$z^{1/2}$ 绕原点一周后变号，而 $z^{\lambda+n}$（$n\in\mathbb Z$）
绕行一周后都乘以同一个因子 $e^{2\pi i\lambda}$。
因此，指数模 $\mathbb Z$ 的信息刻画了这类幂函数的非单值性。

将这种规律逐项用于形式级数，就得到下文的形式代入 $f(e^{2\pi ip}z)$。
它在不预设收敛性的情况下仍有定义，适合处理[[缠结算子]]中的展开。
所有允许复数次幂的 $U$-值形式级数所成的空间记为 $U\{z\}$。

## 定义

::: definition [复数次幂形式级数]
设 $U$ 为复向量空间。取值于 $U$ 的**复数次幂形式级数**是一个系数族
$(u_\alpha)_{\alpha\in\mathbb C}$，记作
\[
f(z)=\sum_{\alpha\in\mathbb C}u_\alpha z^\alpha.
\]
所有这样的系数族构成的空间记为 $U\{z\}$。
两个级数相等，当且仅当各个指数所对应的系数相等。
:::

这里 $z^\alpha$ 是形式符号，求和符号记录各项的系数。
定义不要求收敛，也不限制非零系数的个数或指数的范围。
加法与复数数乘均逐系数定义，因而 $U\{z\}$ 是复向量空间。

将非整数指数处的系数补为零，得到自然的包含关系
\[
U[[z]]\subseteq U((z))\subseteq U[[z,z^{-1}]]\subseteq U\{z\}.
\]
前三个空间分别是[[形式幂级数]]、[[形式 Laurent 级数]]
和[[形式分布]]的空间。

::: example [半整数次幂]
对 $u_0,u_1,\ldots\in U$，级数
\[
z^{1/2}(u_0+u_1z+u_2z^2+\cdots)
=\sum_{k\geq0}u_kz^{k+1/2}
\]
属于 $U\{z\}$，其非零项的指数属于 $\frac12+\mathbb Z$。
:::

## 下截断与指数平移

::: definition [按实部下截断]
设 $f(z)=\sum_{\alpha\in\mathbb C}u_\alpha z^\alpha\in U\{z\}$。
若存在实数 $B$，使得
\[
u_\alpha=0 \qquad (\operatorname{Re}\alpha<B),
\]
则称 $f$ **按实部下截断**。
:::

这是对 $U\{z\}$ 中元素另加的条件。
对于缠结算子所用的记号
\[
f(z)=\sum_{n\in\mathbb C}f_{(n)}z^{-n-1},
\]
由于 $\operatorname{Re}(-n-1)=-\operatorname{Re}n-1$，
该条件等价于 $f_{(n)}=0$ 对实部充分大的 $n$ 成立。

::: definition [指数平移]
对 $\lambda\in\mathbb C$ 和 $f(z)=\sum_\alpha u_\alpha z^\alpha\in U\{z\}$，
定义
\[
z^\lambda f(z)=\sum_{\alpha\in\mathbb C}u_\alpha z^{\alpha+\lambda}.
\]
:::

特别地，
\[
z^\lambda U((z))
=\left\{\sum_{k\geq N}u_kz^{\lambda+k}\;\middle|\;
  N\in\mathbb Z,\ u_k\in U\right\}
\subseteq U\{z\}.
\]
这个子空间中的级数均按实部下截断，且非零项的指数属于同一个陪集
$\lambda+\mathbb Z$。一般的 $U\{z\}$ 元素可以涉及多个这样的陪集。

## 绕行作用与非单值性

对复变量 $\zeta$，在选定对数分支后有 $\zeta^\alpha=e^{\alpha\log\zeta}$。
沿逆时针方向绕原点一周，对数增加 $2\pi i$，因而
\[
e^{\alpha(\log\zeta+2\pi i)}=e^{2\pi i\alpha}\zeta^\alpha.
\]
黄一知、James Lepowsky 和 Lin Zhang 在
[@Huang2010, 式 (3.47)]
中，对缠结算子的级数定义了形式代入 $z\mapsto e^{2\pi ip}z$，$p\in\mathbb Z$。
其中 $z^\alpha$ 变为 $e^{2\pi ip\alpha}z^\alpha$。
这个代入保留整数 $p$ 所记录的绕行次数，因而即使 $e^{2\pi ip}=1$，结果仍可随 $p$ 改变。
下面沿用这一形式代入记号。

::: definition [形式代入]
对 $f(z)=\sum_{\alpha\in\mathbb C}u_\alpha z^\alpha\in U\{z\}$
及 $p\in\mathbb Z$，定义
\[
f(e^{2\pi ip}z)
:=\sum_{\alpha\in\mathbb C}e^{2\pi ip\alpha}u_\alpha z^\alpha.
\]
其中整数 $p$ 始终保留在记号中，表示带方向的绕行次数。
:::

指数属于同一个陪集的级数具有相同的绕行因子。
这也从绕行作用的角度刻画了前面的 $z^\lambda U((z))$。

::: proposition [绕行因子与指数陪集] {@prop-complex-series-monodromy}
设 $f=\sum_\alpha u_\alpha z^\alpha\in U\{z\}$，$\lambda\in\mathbb C$。
则
\[
f(e^{2\pi i}z)=e^{2\pi i\lambda}f(z)
\quad\Longleftrightarrow\quad
u_\alpha=0\ \text{对所有 }\alpha\notin\lambda+\mathbb Z.
\]
若 $f$ 还按实部下截断，则上述条件等价于 $f\in z^\lambda U((z))$。
:::

::: proof
比较 $z^\alpha$ 的系数，等式要求
$(e^{2\pi i\alpha}-e^{2\pi i\lambda})u_\alpha=0$。
由 $e^{2\pi i\alpha}=e^{2\pi i\lambda}$ 当且仅当 $\alpha-\lambda\in\mathbb Z$，
得到第一个结论。
当 $\alpha=\lambda+k$，$k\in\mathbb Z$ 时，
指数实部的下界等价于整数 $k$ 的下界，从而得到第二个结论。
:::

::: corollary [绕行有限次后不变]
对正整数 $N$，有 $f(e^{2\pi iN}z)=f(z)$ 当且仅当
$f$ 的所有非零项的指数均属于 $\frac1N\mathbb Z$。
特别地，$f(e^{2\pi i}z)=f(z)$ 当且仅当 $f\in U[[z,z^{-1}]]$。
:::

::: proof
逐项比较系数，条件为 $u_\alpha\neq0$ 时 $e^{2\pi iN\alpha}=1$，
即 $N\alpha\in\mathbb Z$。
:::

::: example [有限与无限绕行轨道]
级数 $f(z)=z^{1/2}(1+z+z^2+\cdots)$ 满足 $f(e^{2\pi i}z)=-f(z)$，
因而 $f(e^{4\pi i}z)=f(z)$。
对 $g(z)=z^{\sqrt2}$，则有
$g(e^{2\pi iN}z)=e^{2\pi iN\sqrt2}g(z)\neq g(z)$ 对每个正整数 $N$ 成立。
此外，对 $h(z)=z^i$，有 $h(e^{2\pi i}z)=e^{-2\pi}h(z)$，所以绕行因子的模也可以异于 $1$。
:::

::: remark [与解析延拓的联系]
一般的形式级数尚未指定所代表的解析函数。
当 $U=\mathbb C$ 且 $f(z)=z^\lambda g(z)$ 中的 Laurent 级数 $g$
在 $0<|\zeta|<R$ 收敛时，选定对数分支便得到解析函数
\[
F(\zeta)=e^{\lambda\log\zeta}g(\zeta).
\]
它沿原点逆时针绕行一周的解析延拓为 $e^{2\pi i\lambda}F(\zeta)$，
与形式代入 $f(e^{2\pi i}z)$ 一致。若 $g\neq0$，则 $F$ 在该穿孔圆盘上单值
当且仅当 $\lambda\in\mathbb Z$。
:::

::: remark [对数项]
对数的绕行规律为 $\log\zeta\mapsto\log\zeta+2\pi i$。
为记录这种加法变化，可以进一步引入独立的形式符号 $\log z$，
并沿用上述文献的代入规则
\[
z^\alpha(\log z)^k
\longmapsto e^{2\pi ip\alpha}z^\alpha(\log z+2\pi ip)^k
\qquad (p\in\mathbb Z,\ k\geq0).
\]
对数项的这一代入也见上述文献式 (3.47)。
:::

## 形式导数

::: definition [形式导数]
设 $f(z)=\sum_{\alpha\in\mathbb C}u_\alpha z^\alpha\in U\{z\}$。
定义其**形式导数**为
\[
\partial_z f(z)=\sum_{\alpha\in\mathbb C}\alpha u_\alpha z^{\alpha-1}.
\]
:::

每个指数处的系数只由原级数的一个系数决定，因而微分在整个 $U\{z\}$ 上都有定义。
微分将指数 $\alpha$ 变为 $\alpha-1$，保持其模 $\mathbb Z$ 的陪集。
由于 $e^{2\pi ip(\alpha-1)}=e^{2\pi ip\alpha}$（$p\in\mathbb Z$），有
\[
\partial_z\bigl(f(e^{2\pi ip}z)\bigr)=(\partial_zf)(e^{2\pi ip}z)\qquad(p\in\mathbb Z).
\]
因此，微分也保持绕行因子。

::: example
对 $u_0,u_1\in U$，有
\[
\partial_z\bigl(z^{1/2}u_0+z^{3/2}u_1\bigr)
=\tfrac12 z^{-1/2}u_0+\tfrac32 z^{1/2}u_1.
\]
:::

## 乘法与形式可求和性

::: definition [乘法]
设 $A$ 为复代数，$f(z)=\sum_\alpha a_\alpha z^\alpha$，
$g(z)=\sum_\beta b_\beta z^\beta$ 属于 $A\{z\}$。
若对每个 $\gamma\in\mathbb C$，满足
$\alpha+\beta=\gamma$ 且 $a_\alpha b_\beta\neq0$ 的指标对只有有限多个，则定义
\[
f(z)g(z)=\sum_{\gamma\in\mathbb C}
  \left(\sum_{\alpha+\beta=\gamma}a_\alpha b_\beta\right)z^\gamma.
\]
:::

这沿用了[[形式可求和性]]中每个系数只作有限求和的要求。

仅有实部下截断条件，仍可能出现无限多个指标对贡献到同一系数的情形。

::: example [下截断级数的乘积可能无定义]
在 $\mathbb C\{z\}$ 中取
\[
f(z)=\sum_{n\geq2}z^{1/n},
\qquad g(z)=\sum_{n\geq2}z^{1-1/n}.
\]
两者的指数均为正实数，但对每个 $n\geq2$，都有
$z^{1/n}z^{1-1/n}=z$。
因此，上述乘法规则无法定义 $f(z)g(z)$ 的 $z^1$ 系数。
:::

::: proposition [平移后的 Laurent 级数相乘]
设 $A$ 为复代数，$\lambda,\mu\in\mathbb C$。
若 $f\in z^\lambda A((z))$，$g\in z^\mu A((z))$，则乘积 $fg$ 有定义，且属于
$z^{\lambda+\mu}A((z))$。
:::

::: proof
设两个级数的整数指标分别满足 $k\geq N$、$l\geq M$。
固定 $k+l=r$ 后便有 $N\leq k\leq r-M$，所以每个系数只涉及有限项。
乘积的指数均为 $\lambda+\mu+r$，其中 $r\geq N+M$，
因而 $fg\in z^{\lambda+\mu}A((z))$。
:::

## 参考文献

```bibliography
Huang2004:
  type: preprint
  title: On the concepts of intertwining operator and tensor product module in vertex operator algebra theory
  author: [Yi-Zhi Huang, James Lepowsky, Haisheng Li, Lin Zhang]
  arxiv: math/0409364
Huang2010:
  type: preprint
  title: 'Logarithmic tensor category theory, II: Logarithmic formal calculus and properties of logarithmic intertwining operators'
  author: [Yi-Zhi Huang, James Lepowsky, Lin Zhang]
  arxiv: 1012.4196v2
```

$W\{x\}$ 记号及下截断条件见 [@Huang2004, 第 2 节, 定义 2.1]，对数项见 [@Huang2004, 定义 2.3]。
形式代入见 [@Huang2010, 第 18 页, 式 (3.47) 与注 3.28]；
更一般的代入 $z\mapsto e^\zeta z$ 见 [@Huang2010, 第 27 页, 式 (3.76)]。
