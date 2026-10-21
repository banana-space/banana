---
title: Heisenberg 顶点代数
categories: [共形场论]
notices:
  - name: 问题
    items:
      - “高秩情形”一节开头说高秩的顶点代数由若干 Heisenberg 顶点代数“做直和”得到，而其后的例子说它同构于张量积；这里似乎应为张量积（或 Heisenberg 代数的直和）。
navboxes: [共形场论]
---

**Heisenberg 顶点代数**
是由无穷维 [[Heisenberg 代数]]的真空 [[Fock 表示]]
构造的[[顶点代数]]，
也称为**自由玻色子顶点代数**。
它也是个[[顶点代数|顶点算子代数]]，具有中心荷 $c = 1$。

它是具有非平凡[[算子乘积展开]]的最基本例子之一。
秩为 $1$ 时，它由一个场 $a(z)$ 生成，
其算子乘积展开为
\[
a(z)a(w)\sim\frac{\operatorname{id}}{(z-w)^2}.
\]
这里 $\sim$ 表示只写出在 $z=w$ 处的奇性部分。

以下先介绍秩为 $1$ 的情形，记为 $M(1)$。

## 定义

### 态空间与模算子

取态空间
\[
V=\mathbb C[x_n\mid n\in\mathbb Z_{>0}],
\]
即由变量 $x_1,x_2,x_3,\dotsc$ 生成的多项式空间。

真空态取为
\[
\ket{0}=1.
\]

::: proposition
在 $V$ 上定义整数指标的算子 $a_m$，$m\in\mathbb Z$。
对每个正整数 $n$，令
\[
a_{-n}(f)=x_nf,
\qquad
a_n(f)=n\frac{\partial f}{\partial x_n},
\]
并令 $a_0=0$。
它们满足
\[
[a_m,a_n]
=
m\delta_{m+n,0}\operatorname{id}_V.
\]
因此，$V$ 是 Heisenberg 代数的真空 Fock 表示。
:::

负模通过乘法产生新的态，
正模则通过求导消去变量。
特别地，
\[
a_n\ket{0}=0\qquad(n\geq0),
\]
而
\[
a_{-n_1}\cdots a_{-n_r}\ket{0}
=
x_{n_1}\cdots x_{n_r}.
\]

### 态场对应

令 $a=x_1=a_{-1}\ket{0}$，
并将它对应到场
\[
a(z)=\sum_{m\in\mathbb Z}a_mz^{-m-1}.
\]

::: definition [Heisenberg 顶点代数]
秩为 $1$ 的 **Heisenberg 顶点代数**
是上述空间 $V$ 上的顶点代数结构，
其真空态为 $\ket{0}=1$，
平移算子为
\[
T=
\sum_{n\geq1}
n x_{n+1}\frac{\partial}{\partial x_n},
\]
态场对应由
\[
Y(\ket{0},z)=\operatorname{id}_V
\]
以及
\[
Y(x_{n_1}\cdots x_{n_r},z)
=
:\prod_{i=1}^r
\frac{1}{(n_i-1)!}
\partial_z^{\,n_i-1}a(z):
\]
线性延拓得到。
这里 $n_1,\dotsc,n_r$ 都是正整数。
:::

冒号表示[[正规序]]。

## 例子

::: example [低阶态对应的场]
由定义直接得到
\[
Y(x_1,z)=a(z),
\qquad
Y(x_2,z)=\partial_z a(z),
\]
以及
\[
Y(x_3,z)=\frac12\partial_z^2a(z),
\qquad
Y(x_1^2,z)=:a(z)^2:.
\]

因此，态空间中的变量 $x_n$
对应生成场的不同阶导数，
而单项式对应这些导数的正规序乘积。
:::

::: example [具有奇性的乘积]
直接使用模算子的定义，可以计算
\[
Y(x_1,z)x_1
=
z^{-2}\ket{0}
+x_1^2
+z x_1x_2
+z^2x_1x_3+\cdots.
\]
其中的 $z^{-2}$ 项来自
\[
a_1x_1
=
\frac{\partial x_1}{\partial x_1}
=
\ket{0}.
\]

这说明，虽然态空间写成了多项式空间，
顶点代数乘积仍然包含普通多项式乘法所没有的奇性。
:::

## 性质

### 算子乘积展开与定域性

::: proposition
生成场满足
\[
a(z)a(w)\sim
\frac{\operatorname{id}_V}{(z-w)^2},
\]
并且
\[
(z-w)^2[a(z),a(w)]=0.
\]
:::

::: proof
将场分成产生部分与湮灭部分：
\[
a_-(z)=\sum_{n<0}a_nz^{-n-1},
\qquad
a_+(z)=\sum_{n\geq0}a_nz^{-n-1}.
\]
由 Heisenberg 关系，
\[
[a_+(z),a_-(w)]
=
\sum_{n\geq1}n z^{-n-1}w^{n-1}
\operatorname{id}_V.
\]
右边正是
\[
\frac{\operatorname{id}_V}{(z-w)^2}
\]
按 $w/z$ 的非负幂展开得到的形式级数。
将产生算子移到左边时，
这个交换子给出算子乘积展开的奇性部分。

交换 $z,w$ 后得到另一方向的展开。
两种展开在乘以 $(z-w)^2$ 后相同，
因此得到定域性等式。
:::

### 平移

::: proposition
平移算子满足
\[
T\ket{0}=0,
\qquad
[T,a_m]=-m a_{m-1},
\]
因而
\[
[T,a(z)]=\partial_z a(z).
\]
此外，
\[
x_n=\frac{1}{(n-1)!}T^{n-1}x_1.
\]
:::

::: proof
这些等式由
\[
T(x_n)=n x_{n+1}
\]
以及乘法、求导算子的交换关系直接得到。
:::

因此，所有变量 $x_n$ 都可以由生成态 $x_1$
反复作用平移算子得到。

### 共形结构

::: proposition
元素
\[
L=\frac12x_1^2
\]
是 $M(1)$ 的共形向量，
相应的中心荷为 $c=1$。
:::

对应的共形场是
\[
L(z)=Y(L,z)=\frac12:a(z)^2:
=
\sum_{n\in\mathbb Z}L_nz^{-n-2},
\]
其中
\[
L_n=\frac12\sum_{m\in\mathbb Z}:a_m a_{n-m}:.
\]
对于固定的 $n$，这个和作用于任意多项式时只有有限项非零。

由 [[Wick 定理]]可以计算
\[
L(z)L(w)
\sim
\frac{\operatorname{id}_V}{2(z-w)^4}
+
\frac{2L(w)}{(z-w)^2}
+
\frac{\partial_wL(w)}{z-w}.
\]
这就是中心荷为 $1$ 的 Virasoro 算子乘积展开。

特别地，
\[
L_{-1}=T,
\qquad
L_0=
\sum_{n\geq1}n x_n\frac{\partial}{\partial x_n}.
\]
因此，共形分次由
\[
\deg x_n=n
\]
给出。

### 分次维数

::: proposition
记 $M(1)_N$ 为共形权重 $N$ 的子空间。
则
\[
\dim M(1)_N=p(N),
\]
其中 $p(N)$ 是整数 $N$ 的[[分拆数]]，
并约定 $p(0)=1$。
因此，
\[
\sum_{N\geq0}\dim M(1)_N\,q^N
=
\prod_{n\geq1}\frac{1}{1-q^n}.
\]
:::

::: proof
单项式
\[
x_1^{k_1}x_2^{k_2}\cdots
\]
的权重是
\[
k_1+2k_2+3k_3+\cdots.
\]
所以权重为 $N$ 的单项式，
与 $N$ 的分拆一一对应。
:::

::: example [低权重子空间]
最初几个权重子空间为
\[
M(1)_0=\mathbb C\ket{0},
\qquad
M(1)_1=\mathbb Cx_1,
\]
\[
M(1)_2
=
\operatorname{span}\{x_2,x_1^2\},
\]
\[
M(1)_3
=
\operatorname{span}\{x_3,x_2x_1,x_1^3\}.
\]
它们的维数分别为 $1,1,2,3$。
:::

### 单性

::: proposition
$M(1)$ 是[[简单顶点代数]]。
:::

::: proof
设 $I$ 是非零顶点代数理想，
取非零多项式 $f\in I$。
由于 $I$ 对所有模算子 $a_n$ 封闭，
它对所有变量的偏导数以及乘以变量的操作都封闭。

在 $f$ 中选取一个总次数最大的单项式，
按它的各个变量次数进行偏导，
便得到一个非零常数。
因此 $\ket{0}=1$ 属于 $I$。

再反复作用负模，即乘以各个变量，
便得到所有单项式。
所以 $I=M(1)$。
:::

## 高秩情形

将若干 Heisenberg 顶点代数做直和，可以得到高秩的顶点代数。

::: example [秩为 $r$ 的 Heisenberg 顶点代数]
取 $r$ 个相互独立的生成场
$a^1(z),\dotsc,a^r(z)$，
满足
\[
a^i(z)a^j(w)
\sim
\frac{\delta_{ij}\operatorname{id}}{(z-w)^2}.
\]
它们生成秩为 $r$ 的 Heisenberg 顶点代数，
同构于 $r$ 个秩为 $1$ 的 Heisenberg 顶点代数的张量积。

其标准共形场为
\[
L(z)=\frac12\sum_{i=1}^r:a^i(z)^2:,
\]
中心荷为 $c=r$。
:::

```terms
Heisenberg 顶点代数:
  en: Heisenberg vertex algebra
```
