---
title: 自反 Banach 空间
categories: [泛函分析]
notices:
  - name: 问题
    items:
      - “性质”一节中第二个定理的证明只说明了单位闭球中的序列有弱收敛子列（弱序列紧），由此得到弱紧性似乎还需要弱紧与弱序列紧的等价性（这正是 Eberlein–Šmulian 定理的内容），证明在这一步不完整。
navboxes: [泛函分析]
---

在[[泛函分析]]中，
称 [[Banach 空间]] $X$ 为**自反 Banach 空间**，
是说 $X$ 自然地同构于其双[[对偶 Banach 空间]] $X^{**}$，
即其对偶之对偶。
一般而言，Banach 空间 $X$ 可视为 $X^{**}$ 的子空间，
而若 $X$ 自反，则该子空间就是整个 $X^{**}$。

## 定义

::: definition [对偶 Banach 空间]
设 $X$ 是 Banach 空间，用 $X^*$ 表示
$X$ 上的连续[[线性泛函]] 全体。则 $X^*$ 也是
Banach 空间，称为 $X$ 的 **[[对偶 Banach 空间]]**。
:::

对偶空间的对偶空间 $X^{**}$ 称为**双对偶空间**。

::: definition
设 $X$ 是 [[Banach 空间]]。对任意 $x\in X$，
定义 $X^*$ 上的线性泛函 $\operatorname{ev}_x$ 为
\[
\operatorname{ev}_x (f)=f(x),
\]
其中 $f \in X^*$。
则不难发现 $\operatorname{ev}_x \in X^{**}$。由此得到的映射
\[
\operatorname{ev} \colon X \longrightarrow X^{**}
\]
称为**求值映射**。
:::

::: proposition
求值映射 $\operatorname{ev}$ 是 $X$ 与 $X^{**}$
的一个[[子向量空间|子空间]]之间的[[等距同构]]。
:::

::: proof
先证明线性。对 $x,y\in X$，有
\[
\begin{aligned}
  \operatorname{ev}_{ax+by}(f)& = f(ax+by)\\
         & = af(x)+bf(y)\\
         & = a \operatorname{ev}_x (f) + b \operatorname{ev}_y (f)\\
         & = (a \operatorname{ev}_x + b \operatorname{ev}_y)(f).
\end{aligned}
\]
再证明等距性。由定义，
\[
|\mathrm{ev}_x (f)| =
|f(x)|\leq\|f\|\cdot\|x\|
\]
即$\|\mathrm{ev}_x\|\leq \|x\|$；另一方面，由 [[Hahn–Banach 定理]]，
存在 $f\in X^*$ 使得 $\|f\|=1$ 且
$f(x)=\|x\|$。此时
\[
\|x\|=f(x)=\operatorname{ev}_x(f)\leq \|\mathrm{ev}_x\|
\]
于是 $\|\mathrm{ev}_x\|=\|x\|$。
:::

::: definition
设 $X$ 是 Banach 空间。如果求值映射
\[
\operatorname{ev} \colon X \longrightarrow X^{**}
\]
是[[双射]]，则称 $X$ 为**自反 Banach 空间**。
:::

此时，通常不再区分 $X$ 与 $X^{**}$。

::: remark
存在 Banach 空间 $X$ 与其二重对偶空间 $X^{**}$ 等距同构，
但求值映射 $\text{ev}$ 不是满射。
这样的例子最先由数学家 Robert C. James 于 1950 年发现，他给出的例子被称之为 [[James 空间]]。
:::

## 例子

- 有限维[[赋范线性空间]]都是自反 Banach 空间。这是因为
  对偶空间的维数与原空间维数相同，再结合[[秩–零度定理]]。

- [[Hilbert 空间]] 都是自反 Banach 空间。

- 对 $1<p<\infty$，[[$L^p$ 空间]] 是自反的，并且
  $(L^p)^*=L^q$，其中 $1/p+1/q=1$。而 $p=1,\infty$ 时则不是这样。

## 性质

::: theorem [Pettis 定理]
设 $X$ 是自反空间，$X_0$ 为其
闭子空间。则 $X_0$ 也是自反的。
:::

::: proof
任取 $z_0\in X_0^{**}$，要证明
$z_0\in X_0$，只要证存在 $x\in X_0$
使得
\[
z_0(f_0)=f_0(x),\quad\forall f_0\in X_0^*
\]
对任意 $f\in X^*$，考虑 $f$ 在 $X_0$
上的限制 $Tf=f_0$。因为$\|f_0\|\leq\|f\|$，所以
$T\colon X^*\to X_0^*$ 是有界线性算子。这样
$z=T^* z_0\in X^{**}$，其中 $T^*$ 为[[对偶算子]]。
因为 $X$是自反的，故存在 $x\in X$使得
\[
z(f)=f(x),\quad\forall f\in X^*
\]
现在证明 $x\in X_0$。若不然，根据
[[Hahn–Banach 定理]]，存在 $f\in X^*$ 使得
\[
f(X_0)=0,\quad f(x)=1
\]
即 $Tf=0$。但这不可能：
\[
0=z_0(Tf)=(T^* z_0)(f)=z(f)=f(x)=1
\]
于是 $x\in X_0$。

还需证明 $x$ 满足 $z_0(f_0)=f_0(x)$。
对任意 $f_0\in X_0^*$，由 Hahn–Banach 定理，
存在 $f\in X^*$ 使得 $f_0=Tf$。
从而
\[
z_0(f_0)=z_0(Tf)=(T^* z_0)(f)=z(f)=f(x)=f_0(x)
\]
得证。
:::

::: theorem [Eberlein–Šmulian 定理]
自反 Banach 空间的单位闭球是弱紧的。
:::

这里，“弱紧”是指在[[弱拓扑]]下[[紧空间|紧]]。在弱拓扑下的收敛
可以表述为
\[
\lim_{n\to\infty}f(x_n)=f(x),\quad \forall f\in X^*
\]

::: proof
先证明：$X$ 中的任何有界点列 $\{x_n\}$
有弱收敛子列。令
\[
X_0=\overline{\operatorname{span}\{x_n\}}
\]
它是闭线性子空间。根据 Pettis 定理，$X_0$
是自反的。而 $X_0$ 显然是[[可分空间|可分]]的，故 $X_0^{**}$
是可分的。根据 Banach 的定理（如果对偶空间可分，则原空间可分），
$X_0^*$ 可分。令 $g_n\in X_0^{**}$
满足
\[
g_n(f)=f(x_n),\quad \forall f\in X_0^*
\]
则$\{\|g_n\|\}$有界。设 $M_0^*$ 是 $X_0^*$
的可数稠密子集，则可用[[对角线法则]]选出子列 $\{g_{n_k}\}$
和 $g\in X_0^{**}$ 使得
\[
\lim_{k\to\infty} g_{n_k}(f)=g(f),\quad \forall f\in M_0^*
\]
根据 [[Banach–Steinhaus 定理]]，上式对任意 $f\in X_0^*$
成立。因 $X_0$ 是自反的，有 $x_0\in X_0$
满足
\[
g(f)=f(x_0),\quad\forall f\in X_0^*
\]
所以
\[
\begin{aligned}
  \lim_{k\to\infty} f(x_{n_k})&=\lim_{k\to\infty} g_{n_k}(f)\\
                &=f(x_0),\quad\forall f\in X_0^*
\end{aligned}
\]
现在令 $f\in X^*$。记 $\tilde f$ 为
$f$ 在 $X_0$ 上的限制，则因为
$x_{n_k},x_0\in X_0$，有
\[
\begin{aligned}
  \lim_{k\to\infty} f(x_{n_k})&=\lim_{k\to\infty} \tilde f(x_{n_k})\\
                &=\tilde f(x_0)=f(x_0)\\
\end{aligned}
\]
故 $\{x_{n_k}\}$ 弱收敛于 $x_0$。

现在证明单位闭球弱紧。设 $\{x_n\}$ 为单位闭球内的序列，
则上述证明表示它有弱收敛子列，记为 $\{x_{n_k}\}$。
记弱极限为 $x_0$，由 [[Hahn–Banach 定理]]，
存在 $f\in X^*$ 满足 $\|f\|=1,f(x_0)=\|x_0\|$。
故
\[
\|x_0\|=f(x_0)=\lim_{k\to\infty}f(x_{n_k})
\leq\sup_{k\in\mathbb N}\|x_{n_k}\|\leq 1
\]
即 $x_0$ 也在单位闭球内。这就证明了弱紧性。
:::

```terms
自反 Banach 空间:
  en: reflexive Banach space
```
