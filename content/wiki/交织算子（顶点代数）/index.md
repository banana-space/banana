---
title: 交织算子（顶点代数）
categories: [共形场论]
---

在[[顶点算子代数]]理论中，**交织算子**描述三个模之间依赖于形式变量的乘法。

给定三个模 $W_1,W_2,W_3$，我们希望对 $u\in W_1$ 和 $v\in W_2$
定义 $\mathcal Y(u,z)v$，使其各系数属于 $W_3$，并与 $V$ 在三个模上的作用相容。
这样的运算是研究模之间的[[算子乘积展开]]与融合的基本对象。

## 定义

设 $V$ 为顶点算子代数，共形态记为 $L$。
设 $(W_i,Y_i)$（$i=1,2,3$）为其底层[[顶点代数模|顶点代数的模]]，并记
\[
Y_i(L,z)=\sum_{n\in\mathbb{Z}}L_n^{(i)}z^{-n-2}.
\]
这里不对模另加分次条件。以下只考虑不含 $\log z$ 项的交织算子。

对复向量空间 $U$，记 $U\{z\}$ 为取值于 $U$ 的[[复数次幂形式级数]]空间。
求导按 $\partial_z z^\alpha=\alpha z^{\alpha-1}$ 定义。

::: definition [交织算子]
类型为 $\binom{W_3}{W_1\,W_2}$ 的**交织算子**是线性映射
\[
\mathcal Y\colon W_1\longrightarrow
  \operatorname{Hom}(W_2,W_3)\{z\},
\qquad
u\longmapsto\mathcal Y(u,z)=\sum_{n\in\mathbb C}u^{\mathcal Y}_{(n)}z^{-n-1},
\]
满足以下条件。

- （**下截断**）对任意 $u\in W_1$ 和 $v\in W_2$，存在实数 $R$，使得
  \[
  u^{\mathcal Y}_{(n)}v=0 \qquad (\operatorname{Re}n>R).
  \]
  $R$ 可以依赖于 $u,v$。

- （**平移导数公式**）对任意 $u\in W_1$，有
  \[
  \mathcal Y(L_{-1}^{(1)}u,z)=\partial_z\mathcal Y(u,z).
  \]

- （**Jacobi 恒等式**）对任意 $a\in V$、$u\in W_1$ 和 $v\in W_2$，有
  \[
  \begin{aligned}
    &x_0^{-1}\delta\left(\frac{x_1-x_2}{x_0}\right)
      Y_3(a,x_1)\mathcal Y(u,x_2)v \\
    &\quad-x_0^{-1}\delta\left(\frac{x_2-x_1}{-x_0}\right)
      \mathcal Y(u,x_2)Y_2(a,x_1)v \\
    &=x_2^{-1}\delta\left(\frac{x_1-x_0}{x_2}\right)
      \mathcal Y(Y_1(a,x_0)u,x_2)v.
  \end{aligned}
  \]
  这里 $x_0,x_1,x_2$ 为独立的形式变量，
  $\delta(t)=\sum_{k\in\mathbb{Z}}t^k$ 为[[形式 $\delta$ 函数]]。
  三个核中的差的整数次幂依次按 $x_2$、$x_1$、$x_0$ 的非负幂展开。

:::

::: remark [类型与作用空间]
类型记号的下方列出两个输入所属的模，上方标明输出系数所属的模。
Jacobi 恒等式中的三个 $Y_i$ 分别描述 $a$ 对输出、第二个输入和第一个输入的作用。
其中 $\mathcal Y(Y_1(a,x_0)u,x_2)$ 按 $x_0$ 的系数逐项定义。
:::

::: example [模作用]
设 $M$ 为 $V$-模。模作用 $Y_M$ 是类型为 $\binom{M}{V\,M}$ 的交织算子。
其下截断条件与 Jacobi 恒等式就是模的相应公理，
平移导数公式来自 $L_{-1}=T$ 及
[[顶点代数模|模的平移导数公式]]。
特别地，顶点算子代数自身的态场对应 $Y$ 给出类型为 $\binom{V}{V\,V}$ 的例子。
:::

## 基本性质

Jacobi 恒等式可以逐系数化为模式之间的关系。
其中共形态的模式给出权的约束，决定交织算子中可能出现的复数次幂。
以下设 $\mathcal Y$ 的类型为 $\binom{W_3}{W_1\,W_2}$，并记
\[
Y_i(a,x)=\sum_{r\in\mathbb{Z}}a^{(i)}_{(r)}x^{-r-1}.
\]

::: proposition [模式交换关系]
对任意 $a\in V$、$u\in W_1$ 和 $r\in\mathbb{Z}$，有
\[
a^{(3)}_{(r)}\mathcal Y(u,z)-\mathcal Y(u,z)a^{(2)}_{(r)}
=\sum_{j\geq0}\binom rj z^{r-j}\mathcal Y(a^{(1)}_{(j)}u,z).
\]
这里 $\binom r0=1$、$\binom rj=r(r-1)\cdots(r-j+1)/j!$（$j\geq1$）。
右侧因 $a^{(1)}_{(j)}u=0$ 对充分大的 $j$ 成立而成为有限和。
比较 $z^{-n-1}$ 的系数，对任意 $n\in\mathbb C$ 得到
\[
a^{(3)}_{(r)}u^{\mathcal Y}_{(n)}-u^{\mathcal Y}_{(n)}a^{(2)}_{(r)}
=\sum_{j\geq0}\binom rj
  (a^{(1)}_{(j)}u)^{\mathcal Y}_{(r+n-j)}.
\]
:::

::: proof
在 Jacobi 恒等式中取 $x_2=z$，再取 $x_0^{-1}x_1^{-r-1}$ 的系数。
左侧得到所求差式。右侧先取 $x_1^{-r-1}$ 的系数，核的贡献为
\[
(z+x_0)^r=\sum_{j\geq0}\binom rj z^{r-j}x_0^j.
\]
再与 $Y_1(a,x_0)u$ 相乘并取 $x_0^{-1}$ 的系数，即得结论。
:::

::: corollary [$L_0$ 权关系]
对任意 $u\in W_1$，有
\[
L_0^{(3)}\mathcal Y(u,z)-\mathcal Y(u,z)L_0^{(2)}
=z\partial_z\mathcal Y(u,z)+\mathcal Y(L_0^{(1)}u,z).
\]
若 $L_0^{(1)}u=h_1u$、$L_0^{(2)}v=h_2v$，则
\[
L_0^{(3)}(u^{\mathcal Y}_{(n)}v)
=(h_1+h_2-n-1)u^{\mathcal Y}_{(n)}v.
\]
因此，每个非零系数 $u^{\mathcal Y}_{(n)}v$ 的权为 $h_1+h_2-n-1$。
:::

::: proof
在模式交换关系中取 $a=L$、$r=1$，利用
$L^{(i)}_{(0)}=L_{-1}^{(i)}$、$L^{(i)}_{(1)}=L_0^{(i)}$
及平移导数公式，得到第一个等式。
将它作用于 $v$，比较 $z^{-n-1}$ 的系数，即得第二个等式。
:::

::: remark [指数与权差]
沿用上述特征向量假设。若
$W_3=\bigoplus_{k\geq0}(W_3)_{h_3+k}$，
其中 $(W_3)_h$ 为 $L_0^{(3)}$ 的 $h$-特征子空间，则
\[
\mathcal Y(u,z)v
=z^{h_3-h_1-h_2}\sum_{k\geq0}w_kz^k,
\qquad w_k\in(W_3)_{h_3+k}.
\]
这是因为非零系数的权必须满足 $h_1+h_2-n-1=h_3+k$。
因而指数的非整数部分由输出模的权与两个输入的权之差决定。
:::

::: example [Ising 模之间的交织算子]
在[[Ising 手征共形场论]]中，记 $M_h=L(\tfrac12,h)$，
其中 $h=0,1/16,1/2$。
这里 $L(c,h)$ 表示中心荷 $c$、最高权 $h$ 的不可约 Virasoro 最高权模。
两个自旋模 $M_{1/16}$ 之间有分别取值于 $M_0$ 和 $M_{1/2}$ 的非零交织算子
$\mathcal Y_0$ 与 $\mathcal Y_{1/2}$。
对最高权向量 $\sigma\in M_{1/16}$，由权关系可得
\[
\mathcal Y_0(\sigma,z)\sigma\in z^{-1/8}M_0[[z]],
\qquad
\mathcal Y_{1/2}(\sigma,z)\sigma\in z^{3/8}M_{1/2}[[z]].
\]
两个指数分别为 $0-2\cdot\tfrac1{16}$ 与
$\tfrac12-2\cdot\tfrac1{16}$。
这给出了输入和输出属于不同模、且含分数次幂的具体例子。
显式[[共形块]]及系数计算见[[Ising 手征共形场论|该词条的后续计算]]。
:::

## 三点共形块

定义中的三个条件在线性组合下保持成立，
其中有限个交织算子的截断界可以取最大值。
因此，同一类型的交织算子构成复向量空间。
这是最简单的共形块。

::: definition [融合律]
将类型为 $\binom{W_3}{W_1\,W_2}$ 的交织算子空间记为
\[
I_V\binom{W_3}{W_1\,W_2}.
\]
其维数
\[
N_{W_1,W_2}^{W_3}=\dim_{\mathbb C}I_V\binom{W_3}{W_1\,W_2}
\]
称为相应的**融合律**。
:::

当这个维数有限时，它计数了从 $W_1,W_2$ 到 $W_3$ 的线性无关的交织算子。

## 参考文献

```bibliography
HLLZ2004:
  type: preprint
  author: [黄一知, James Lepowsky, 李海生, Lin Zhang]
  year: 2004
  title: On the concepts of intertwining operator and tensor product module in vertex operator algebra theory
  note: '第 2 节, 定义 2.1 与注 2.2, 尤其是式 (2.2)、(2.3)'
  arxiv: math/0409364
JiangLin2017:
  type: article
  author: [姜翠波, 林宗柱]
  year: 2017
  title: 顶点算子代数表示理论中的范畴和函子
  journaltitle: '中国科学: 数学'
  volume: 47
  pages: 1579–1594
  note: 第 3.7 节讨论交织算子
  doi: 10.1360/N012017-00150
HLZ2010II:
  type: preprint
  author: [黄一知, James Lepowsky, Lin Zhang]
  year: 2010
  title: 'Logarithmic tensor category theory, II: Logarithmic formal calculus and properties of logarithmic intertwining operators'
  note: '第 3 节式 (3.37) 给出 $L_0$ 权关系, 式 (3.47) 给出形式代入约定'
  arxiv: '1012.4196'
```

```terms
交织算子:
  en: intertwining operator
```
