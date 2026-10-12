---
title: '$\mathrm{C}_k$ 域'
aliases: [Ck 域, 拟代数闭域, C k 域]
categories: [域论]
navboxes: [域论]
---

$\text{C}_k$ 域是[[代数闭域]]的减弱。相比代数闭性要求每个一元方程都有解，
它只要求变元数比次数大得多的多元方程有解。此概念由 [[Serge Lang]]
于 1952 年引入，推广了[[曾炯]] 1933 年的结果。

## 定义

::: definition
固定 $k\in\mathbb{N}$。称域 $F$ 为 **$\text{C}_k$ 域**，
意思是对 $d,N\in\mathbb{Z}_+$，只要 $N>d^k$，就有
$F$ 上 $N$ 元 $d$ 次齐次方程在 $F$ 中有非平凡解。
:::

::: remark
显然 $\text{C}_0$ 域就是[[代数闭域]]。
$\text{C}_1$ 域也称为**拟代数闭域**。
:::

## 性质

以下定理是 $\text{C}_k$ 性的来源。

::: theorem [曾–Lang–Nagata] {@扩张}
对 $k,n\in\mathbb{N}$，
$\text{C}_k$ 域上[[超越次数]] $n$ 的扩张为 $\text{C}_{k+n}$。
:::

我们要使用如下引理。

::: lemma {@公共解}
设 $\mathrm{C}_k$ 域 $F$，
$f_1, \ldots, f_m \in F[x_1, \ldots, x_N]$ 是 $F$ 上 $m$ 个齐 $d > 0$ 次多项式。
那么只要 $N > md^k$，$f_1, \ldots, f_m$ 在 $F^N$ 里就有非平凡公共零点。
:::

::: proof
如果 $F$ 代数闭，
$f_1, \ldots, f_m$ 在[[仿射空间]] $\mathbb{A}^N_F$ 里切出的[[代数簇]]维数至少为
$N - m > 0$（由 [[Krull 主理想定理]]，每增加一个方程维数至多减小 $1$），所以这个簇有不是原点的闭点；
[[Hilbert 零点定理]]推出闭点都在 $F$ 上定义。于是可设 $F$ 不是代数闭。

证明的关键是所谓的**范型**，定义为 $n$ 元齐 $n$ 次多项式，
使得它在 $F$ 上只有平凡零点 $(0, 0, \ldots, 0)$。
由 $F$ 不是代数闭，存在非平凡有限扩张 $K/F$；取 $K$ 在 $F$ 上一组基 $e_1, \ldots, e_n$，
那么 $f(x_1, \ldots, x_n) = N_{K/F}(x_1e_1 + \cdots + x_ne_n)$ 是 $n > 1$ 元范型。
另外，如果 $f$ 是 $n$ 元范型，$g_1, \ldots, g_n$ 是 $m$ 元范型，那么
\[
f(g_1(x_{11}, \ldots, x_{1m}), g_2(x_{21}, \ldots, x_{2m}), \ldots, g_n(x_{n1}, \ldots, x_{nm}))
\]
是 $nm$ 元范型。由此立见存在次数任意高的范型。

下面归纳构造一列齐次多项式 $F_0, F_1, \ldots$，使得每个 $F_i$ 只有平凡零点，
而且 $F_i$ 为 $N_i$ 元 $d_i$ 次。
只要 $i$ 充分大时 $N_i > d_i^k$ 我们由 $\mathrm{C}_k$ 的定义就胜利。
取 $F_0$ 是一个元数待定（充分大）的范型。归纳定义
\[
F_{i + 1} = F_i(f_1, f_2, \ldots, f_m, f_1, f_2, \ldots, f_m, \ldots\ldots, f_1, f_2, \ldots, f_m, 0, \ldots, 0)
\]
其中每一组“$f_1, f_2, \ldots, f_m$”里用相同的一组变量，但不同组用不同变量；
我们使用尽可能多的组（换言之，最后的 $0$ 个数小于 $m$）。
这样 $d_{i + 1} = dd_i$，且 $N_{i + 1} = N\lfloor N_i/m \rfloor \ge N(N_i/m - 1)$。
那么 $N_{i + 1} - Nm \ge (N/m)(N_i - m - m^2) \ge (N/m)(N_i - Nm)$；换言之，只要取 $N_0 > Nm$，
就有 $N_i \ge c(N/m)^i$ 对某常数 $c > 0$ 成立。
这样 $i$ 充分大时就有 $N_i > c(N/m)^i > d^{ik} = d_i^k$。
:::

::: proof [@扩张 的证明]
设 $F$ 是 $\mathrm{C}_k$ 域，$K/F$ 是超越次数 $n$ 扩张。
取超越基 $t_1, \ldots, t_n$，那么 $K/F(t_1, \ldots, t_n)$ 代数；
所以只要分别证明 $K/F$ 代数和 $K = F(t)$ 两种情况。

$K/F$ 代数：设正整数 $d, N$ 满足 $N > d^k$，$f \in K[x_1, \ldots, x_N]$ 齐 $d$ 次。
因为 $f$ 只有有限多个系数，可以把 $K$ 换成这些系数在 $F$ 上生成的域，从而可设 $K/F$ 是有限扩张。
取 $K$ 在 $F$ 上的基 $e_1, \ldots, e_m$，待定系数 $x_i = \sum_{1 \le j \le m} y_{ij} e_j$；那么将
\[
f\left(\sum_{1 \le j \le m} y_{1j} e_j, \sum_{1 \le j \le m} y_{2j} e_j, \ldots, \sum_{1 \le j \le m} y_{Nj} e_j \right) = 0
\]
的左边用 $K$ 里的乘法、加法法则展开，是关于 $Nm$ 个变量 $y_{ij}$ 的齐 $d$ 次方程组，共 $m$ 个方程。
那么因为 $Nm > m \cdot d^k$，由 @公共解 知道它有非平凡解。

$K = F(t)$：设正整数 $d, N$ 满足 $N > d^{k + 1}$，$f \in F(t)[x_1, \ldots, x_N]$ 齐 $d$ 次。
那么乘以公分母可设 $f$ 的系数都属于 $F[t]$，设 $f$ 的各项系数作为关于 $t$ 的多项式最高为 $d_0$ 次。
这样，待定 $x_i = \sum_{0 \le j \le d_1} c_{ij} t^j$，
有 $f(x_1, \ldots, x_n)$ 是关于 $t$ 的至多 $dd_1 + d_0$ 次多项式，
各项系数为关于各 $c_{ij}$ 的 $F$ 系数齐 $d$ 次多项式。
一共有 $N(d_1 + 1)$ 个自由变量 $c_{ij}$，
所以一旦 $d_1$ 充分大就有 $N(d_1 + 1) > (dd_1 + d_0 + 1) d^k$，
由 @公共解 知道 $f(x_1, \ldots, x_n) = 0$ 作为关于 $c_{ij}$ 的方程组有非平凡解。
:::

这一概念主要的好处是以下定理，证明参见主条目[[曾定理]]。

::: theorem [曾] {@Br}
$\text{C}_1$ 域上有限维[[可除代数]]都是域。换言之，
其 [[Brauer 群]]平凡。
:::

## 例子

- [[代数闭域]]是 $\text{C}_0$ 域。由 @扩张，
  其上超越次数 $n$ 的域是 $\text{C}_n$ 域。特别地，
  其上[[代数曲线]]的有理函数域是 $\text{C}_1$ 域。
  这一点对于发展[[平展上同调]]理论十分重要。

- 由 [[Chevalley–Warning 定理]]，[[有限域]]是
  $\text{C}_1$ 域。它与 @Br 合起来给出
  [[Wedderburn 小定理]]的另证。

```terms
'$\text{C}_k$ 域':
  en: '$\text{C}_k$ field'
  de: '$\text{C}_k$-Körper'
  fr: 'corps $\text{C}_k$'
```
