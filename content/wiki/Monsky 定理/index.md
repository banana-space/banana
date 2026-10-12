---
title: Monsky 定理
categories: [组合几何]
---

Monsky 定理是个[[组合几何]]定理，说的是一个
$n$ 维[[立方体]]如被剖分成体积相等的[[单形]]，则单形的个数被 $n!$
整除。它的陈述十分初等，证明却不可思议地用到了 [[$p$ 进数]]，
且直至 20 世纪 70 年代才被发现。其二维情形由 [[Paul Monsky]]
于 1970 年证明，一般情形则由 [[David Mead]] 于 1979 年证明。

## 定理与证明

::: theorem
如一个 $n$ 维[[立方体]]被剖分成体积相等的[[单形]]，
则单形的个数被 $n!$ 整除。
:::

::: proof
可不妨设该立方体是 $[0,1]^n$。固定一个等体积剖分，
设单形的个数为 $N$，则每个单形的体积就是 $\frac{1}{N}$。
任取一素数 $p$，我们来证明 $v_p(n!)\le v_p(N)$。
取定[[域]]嵌入 $\mathbb{R}\hookrightarrow\overline{\mathbb{Q}_p}$，
其中 $\overline{\mathbb{Q}_p}$ 表示 [[$p$ 进数]]域的代数闭包，
并将 $\mathbb{R}$ 视为 $\overline{\mathbb{Q}_p}$ 的子域。
这样每个实数也都有取值在 $\mathbb{Q}$ 的 $p$ 进[[赋值]]，满足强三角不等式，
且其在有理数上与有理数的 $p$ 进赋值一样。

设剖分的顶点集为 $V$。给 $V$ 染上 $n+1$ 种颜色，名为
$0,1,\ldots,n$，规则如下：对于点 $(x_1,\ldots,x_n)\in V$，
记 $x_0=1$，然后令该点的颜色为最大的 $i\in\{0,1,\ldots,n\}$，
使得 $x_i$ 的 $p$ 进赋值在 $x_0,x_1,\ldots,x_n$ 中为最小。
换言之，颜色为 $i$ 的点的集合是
$$
\{(x_1,\ldots,x_n)\in V\mid\forall j\in\{0,\ldots,i-1\},\,v_p(x_j)\ge v_p(x_i);\;
\forall j\in\{i+1,\ldots,n\},\,v_p(x_j)>v_p(x_i)\},
$$
其中 $x_0=1$。这样，对于立方体的顶点，
其颜色就是其最后一个非零坐标的序号，而原点的颜色是 $0$。

记 $e_i$ 为第 $i$ 个坐标是 $1$，其余坐标是 $0$ 的点，
记 $e_0$ 为原点。将立方体看成一个组合单形，
其顶点为 $e_0,e_1,\ldots,e_n$，子集 $S\subseteq\{0,\ldots,n\}$
对应的面为
$$
\begin{cases}
  \{(x_1,\ldots,x_n)\in[0,1]^n\mid\forall i\notin S,\,x_i=0\},&0\in S;\\
  \{(x_1,\ldots,x_n)\in[0,1]^n\mid\max\{x_1,\ldots,x_n\}=1;\;\forall i\notin S,\,x_i=0\},&0\notin S;
\end{cases}
$$
则从定义容易看出，子集 $S$ 对应的面上只有颜色在 $S$ 里的点。
于是由 [[Sperner 引理]]，立方体的剖分中存在一个单形，其 $n+1$ 个顶点
$v_0,\ldots,v_n$ 的颜色各不相同。不妨设 $v_i$ 的颜色为 $i$，
记其坐标为 $(x_{ij})_{j=1}^n$。计算该单形的体积，有
$$
\frac{1}{n!}\left|\begin{matrix}
  x_{00}&x_{01}&\cdots&x_{0n}\\
  x_{10}&x_{11}&\cdots&x_{1n}\\
  \vdots&\vdots&\ddots&\vdots\\
  x_{n0}&x_{n1}&\cdots&x_{nn}
\end{matrix}\right|=\pm\frac{1}{N},
$$
其中 $x_{i0}=1$。由于 $v_i$ 为第 $i$ 色，
对 $j<i$ 有 $v_p(x_{ij})\ge v_p(x_{ii})$，
对 $j>i$ 有 $v_p(x_{ij})>v_p(x_{ii})$，
且取 $j=0$ 知 $v_p(x_{ii})\le0$。
于是在行列式的展开式中，主对角线项的 $p$
进赋值严格小于其它任一项，故行列式的赋值等于主对角线项的赋值，
为小于等于 $0$。所以 $v_p(n!)\le v_p(N)$。这对每个素数 $p$
成立，故 $n!\mid N$。
:::

```terms
Monsky 定理:
  en: Monsky's theorem
```
