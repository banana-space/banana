---
title: 规范方法的收敛性
---

有了前面的准备，我们开始看谱聚类方法的相合性。
首先看规范方法，由于 $L_{sym}$ 和 $L_{rw}$ 的第二特征向量之间只差一个变换 $D^{-1}$，
而其是对角元为正的对角阵，故在 $K=2$ 的情形下的算法是等价的。
这里我们只考虑前者的收敛性，对后者类似。

## 第一步：构造与 $L_n'$ 对应的 $C(\cal X)$ 上算子 $U_n'$

注意到 $L_n' = D_n^{-1/2}L_nD_n^{-1/2} = I - D_n^{-1/2}W_nD_n^{-1/2}$，
我们以相似度函数 $s$ 对 $W_n$ 作**连续化**，则可作如下构造：

::: definition
- 度函数【degree functions】
  $$
  d_n(x) = \int_{\cal X}s(x,y)\,dP_n(y), \quad d(x) = \int_{\cal X} s(x,y)\,dP(y)
  $$

- 规范化相似度函数【normalized similarity functions】
  $$
  h_n(x,y) = \frac{s(x,y)}{\sqrt{d_n(x)d_n(y)}}, \quad h(x,y) = \frac{s(x,y)}{\sqrt{d(x)d(y)}}
  $$

- 积分算子【integral operators】
  $$
  T'_n:f\mapsto \int_{\mathcal X} h_n(x,y)f(y)\,dP_n(y), \quad
  T_n:f\mapsto\int_{\mathcal X} h(x,y)f(y)\,dP_n(y),\quad
  T: f\mapsto\int_{\mathcal X} h(x,y)f(y)\,dP(y)
  $$

- 最后得到 $C(\cal X)$ 上的算子
  $$
  U_n' = I - T_n', \quad U' = I-T,
  $$
  其中 $I$ 为恒等映射。

:::

以上构造具有如下性质：

::: proposition {@prop:normalized-construction}
在问题的预先假设下，有

1. $d_n, d\in C(\cal X)$，并且有一致的下界 $l>0$ 及上界 $\|s\|_\infty<+\infty$；

2. $T'_n, T_n, T$ 的算子范数具有一致的上界 $\|s\|_\infty/l$，且是 $C(\cal X)$ 上的紧算子；

3. 关系式 $L'_n\circ \rho_n = \rho_n\circ U'_n$ 成立。

:::

## 第二步：算子 $U'_n$ 与矩阵 $L_n'$ 的谱关系

按照前面的分析，我们希望 $f_n\in C(\cal X)$ 是算子 $U_n'$ 的一个特征函数，
即 $U_n'f_n = \lambda f_n$，这样就有
$$
L_n'v_n = L_n'(\rho_n f_n) = \rho_n(U_n'f_n) = \lambda\rho_n f_n = \lambda v_n,
$$
即 $v_n = \rho_n f_n$ 为 $L_n'$ 关于特征值 $\lambda$ 的特征向量。
因此，我们的目标是找到 $U_n'$ 关于 $L_n'$ 第二特征值 $\lambda_2$ 的特征函数 $f_n\in C(\cal X)$：
将该特征值问题写成

```math
\begin{aligned}
(1-\lambda_2)f_n(x) = T_n'f_n(x) &= \int_{\mathcal X} h_n(x,y)f_n(y)\,dP_n(y) \\
&= \frac1n\sum_{i=1}^n h(x,X_i)f_n(X_i) = \frac1n\sum_{i=1}^n h(x,X_i)v_{n}^i,
\end{aligned}
```

故只要 $\lambda_2\ne 1$，我们就有
$$
f_n(x) = \frac{\sum_{i=1}^n h(x,X_i)v_n^i}{n(1-\lambda_2)}.
$$
由于 $v_n$ 在每次抽样后可由 $L_n'$ 的第二特征向量给出，故上式给出了 $f_n\in C(\cal X)$ 的确切定义。

上述推导过程可以在任意特征值上进行，结合算子 $T_n'$ 的紧性与矩阵 $L_n'$ 的对称半正定性，
我们可以总结得到：

::: proposition
算子 $U'_n$ 与矩阵 $L_n'$ 的谱具有如下对应关系：

1. 具有相同的特征值；

2. 关于同一个特征值 $\lambda\ne 1$ 的特征函数 $f\in C(\cal X)$ 及特征向量
   $v=(v^1,\cdots,v^n)\in\mathbb{R}^n$ 具有如下的一一对应关系：
   $$
   v = \rho_n f, \qquad f(x) = \frac{\sum_{i=1}^n h(x,X_i)v^i}{n(1-\lambda)};
   $$

3. $U_n' = I - T_n'$ 的谱 $\sigma(U_n') = \{1\}\cup \sigma(L_n')$ 由有限个重数有限的非负特征值和
   $\sigma_{ess}(U_n') = \{1\}$ 组成。

:::

对于特征值的非负性，与矩阵 $L_n'$ 的半正定性
$$
f^T L_n'f = \frac12\sum_{i,j=1}^n w_{ij}\left(\frac{f_i}{\sqrt{d_i}} - \frac{f_j}{\sqrt{d_j}}\right)^2 \ge 0, \qquad\forall f\in\mathbb{R}^n
$$
类似地，我们也可以将 $U_n'$ 视为 $L^2(P_n)$ 函数空间上的算子，利用函数内积

```math
\begin{aligned}
\lang U_n'f, f\rang &= \int_{\cal X} \left(f(x) - \int_{\cal X} h_n(x,y)f(y)\,dP_n(y)\right)f(x)\,dP_n(x) \\
&= \int_{\cal X}\int_{\cal X} s(x,y)\left(\frac{f(x)}{\sqrt{d_n(x)}}-\frac{f(y)}{\sqrt{d_n(y)}}\right)\frac{f(x)}{\sqrt{d_n(x)}}\,dP_n(y)\,dP_n(x) \\
&= \frac12\int_{\cal X}\int_{\cal X} s(x,y)\left(\frac{f(x)}{\sqrt{d_n(x)}}-\frac{f(y)}{\sqrt{d_n(y)}}\right)^2\,dP_n(y)\,dP_n(x) \ge 0, \qquad \forall f\in L^2(P_n)
\end{aligned}
```

直接得到算子 $U_n$ 的非负性。

同理，由空间 $\cal X$ 的紧性有 $C({\cal X})\subset L^2(P)$，于是可以推知，
$U' = I - T$ 的谱由至多可数个重数有限的非负特征值组成。
此外还可以得到其本性谱为 $\sigma_{ess}(U') = \{1\}.$

## 第三步：随机算子序列 $\{U_n'\}$ 的收敛性

由于紧收敛性能够带来谱的收敛性，我们考虑证明 $\{U_n'\}$ 紧收敛到 $U'.$
首先需要证明逐点收敛性，即对任意的 $f\in C(\cal X)$，应有 $\|U_n' f - U'f\|_{\infty} \to 0.$
为此，我们先考虑几个具有较好性质的函数集：

::: proposition
在预先假设下，以下 $C(\cal X)$ 的子集

```math
\begin{aligned}
\cal S &:= \{s(x,\cdot): x\in\cal X\} \\
\cal H &:= \{h(x,\cdot): x\in\cal X\} \\
g\cdot \cal H &:= \{g(\cdot)h(x,\cdot) : x\in \mathcal X\}, \quad\forall g\in C(\cal X)
\end{aligned}
```

均为 **Glivenko–Cantelli 类**，即成立
\[
\sup_{f\in\cal F} \left|\int_{\cal X} f(y)\,dP_n(y) - \int_{\cal X} f(y)\,dP(y)\right| \xrightarrow{n\to\infty} 0\quad \text{a.s.}, \quad {\cal F = S,H,g\cdot H}.
\]
:::

::: proof
以 $\cal S$ 为例进行证明，另两个类似：首先由 $s$ 是紧度量空间 $\cal X$ 上的连续函数，
可知 $s$ 在 $\cal X$ 上一致连续，从而对任意 $\varepsilon>0$，都存在 $\delta>0$，
只要 $x,x'\in\cal X$ 的距离小于 $\delta$，就有
$$
\|s(x,\cdot)-s(x',\cdot)\|_\infty < \varepsilon/2.
$$
而由 $\cal X$ 的紧性可知存在有限个点 $x_1,\cdots,x_k\in\cal X$，使得
$$
\mathcal X = \bigcup_{i=1}^k \big(B_\delta(x_i)\cap {\cal X\big)
\quad\Longrightarrow\quad S} \subset \bigcup_{i=1}^k B_{\varepsilon/2}\big(s(x_i,\cdot)\big).
$$
若记括号 $[l,u]$ 表示满足 $l\le f\le u$ 的函数 $f$，则有
$$
\mathcal S \subset \bigcup_{i=1}^k \left[s(x_i,\cdot)-\frac{\varepsilon}2, s(x_i,\cdot) + \frac\varepsilon2\right],
$$
其中每个括号的 $L^1(P)$-长度均为 $\varepsilon$，
故子集 $\cal S$ 的
$\|\cdot\|_{L^1(P)}$-括号数【bracketing number】$N_{[~]}(\varepsilon,\mathcal S, L^1(P)) = k < \infty.$
由 $\varepsilon$ 的任意性，
结合 **Glivenko–Cantelli 定理**（参考书 Weak Convergence and Empirical Processes [@vandervaart-wellner96] 中定理 2.4.1）即可得到结论。
:::

借助此命题我们可以证明：

::: proposition {@prop:normalized-pointwise}
在预先假设下，$T_n'\xrightarrow{p} T$  a.s.
:::

::: proof
对任意的 $f\in C(\cal X)$，我们有
$$
\|T_n'f - Tf\|_\infty \le \|T_n'f - T_nf\|_\infty + \|T_nf - Tf\|_\infty.
$$

- 第二项由定义即为
  $$
  \|T_nf - Tf\|_\infty = \sup_{x\in\cal X}\left|\int_{\cal X}h(x,y)f(y)\,dP_n(y) - \int_{\cal X} h(x,y)f(y)\,dP(y) \right|,
  $$
  根据 $f\cdot \cal H$ 是 Glivenko–Cantelli 类可知其 a.s. 收敛到 0；

- 对于第一项，由定义及 @prop:normalized-construction 中对度函数的下界估计，我们有

  ```math
  \begin{aligned}
  \|T_n'f - T_nf\|_\infty &\le \|f\|_\infty \sup_{x\in\cal X} \int_{\cal X} |h_n(x,y)-h(x,y)|\,dP_n(y) \\
  &\le \|f\|_\infty\|s\|_\infty \sup_{x,y\in\cal X} \left|\frac{1}{\sqrt{d_n(x)d_n(y)}} - \frac1{\sqrt{d(x)d(y)}}\right| \\
  &\le \frac{\|f\|_\infty\|s\|_\infty}{l^2} \sup_{x,y\in\cal X} \left|\sqrt{d(x)d(y)} - \sqrt{d_n(x)d_n(y)}\right| \\
  &\le \frac{\|f\|_\infty\|s\|_\infty}{l^2} \sup_{x,y\in\cal X} \left|\frac{d(x)d(y) - d_n(x)d_n(y)}{\sqrt{d(x)d(y)} + \sqrt{d_n(x)d_n(y)}}\right| \\
  &\le \frac{\|f\|_\infty\|s\|_\infty}{2l^3} \sup_{x,y\in\cal X} \left|d_n(x)d_n(y) - d(x)d(y)\right|,
  \end{aligned}
  ```

  而用同样的拆项技巧，借助 @prop:normalized-construction 中对度函数的上界估计，可以进一步得到

  ```math
  \begin{aligned}
  \sup_{x,y\in\cal X} \left|d_n(x)d_n(y) - d(x)d(y)\right| &\le \sup_{x,y\in\cal X} \Big(\left|d_n(x)d_n(y) - d_n(x)d(y)\right| + \left|d_n(x)d(y) - d(x)d(y)\right|\Big) \\
  &= \sup_{x,y\in\cal X} \Big(|d_n(x)|\left|d_n(y) - d(y)\right| + |d(y)|\left|d_n(x) - d(x)\right|\Big) \\
  &\le \|s\|_\infty \sup_{x,y\in\cal X} \Big(|d_n(y) - d(y)| + |d_n(x) - d(x)|\Big) \\
  &= 2\|s\|_\infty \sup_{x\in\cal X} |d_n(x) - d(x)| \\
  &= 2\|s\|_\infty\sup_{x\in\cal X} \left|\int_{\cal X} s(x,y)\,dP_n(y) - \int_{\cal X} s(x,y)\,dP(y)\right|,
  \end{aligned}
  ```

  进而根据 $\cal S$ 是 Glivenko–Cantelli 类，可知该项也 a.s. 收敛到 0。

:::

进一步我们可以得到：

::: proposition
在预先假设下，$T_n'\xrightarrow{cc} T$  a.s.
:::

::: proof
由 @prop:normalized-pointwise 我们已经得到逐点收敛性，故只需证明存在 $N\in\mathbb{N}$，
使得 $\bigcup_{n>N}(T_n'-T)B_{C(\cal X)}$ a.s. 是相对紧的。
注意到这是一个连续函数集合，我们考虑利用 **Arzelà–Ascoli 定理**加以证明：

- 一致有界性：根据 @prop:normalized-construction 中对 $T_n',T$ 的范数估计，可以得到
  $$
  \sup_{n\in\mathbb{N}, f\in B_{\cal X}} \|(T_n'-T)f\|_\infty = \sup_{n\in\mathbb{N}} \|T_n'-T\|_{\mathcal L(C(\cal X))} \le \frac{2\|s\|_\infty}{l};
  $$

- 等度连续性：我们需要对足够大的 $n$ 及所有 $f\in B_{C(\cal X)}$，估计
  $$
  \Big|[(T_n'-T)f](x) - [(T_n'-T)f](x')\Big| \le\, \Big|(Tf)(x) - (Tf)(x')\Big|
  + \,\Big|(T_n'f)(x) - (T_n'f)(x')\Big|.
  $$

  - 先看第一项，按照定义以及各函数的上下界估计可以得到

    ```math
    \begin{aligned}
    \Big|(Tf)(x) - (Tf)(x')\Big| &\le \|f\|_\infty \int_{\cal X} |h(x,y) - h(x',y)|\,dP(y) \\
    &\le \sup_{y\in\cal X} \left|\frac{s(x,y)}{\sqrt{d(x)d(y)}} - \frac{s(x',y)}{\sqrt{d(x')d(y)}}\right| \\
    &\le \frac1{l^{3/2}}\sup_{y\in\cal X} \left|s(x,y)\sqrt{d(x')} - s(x',y)\sqrt{d(x)}\right| \\
    &\le \frac1{l^{3/2}}\sup_{y\in\cal X} \left|\Big(s(x,y) - s(x',y)\Big)\sqrt{d(x')} - s(x',y)\left(\sqrt{d(x)}-\sqrt{d(x')}\right)\right| \\
    &\le \sqrt\frac{\|s\|_\infty}{l^3} \|s(x,\cdot) - s(x',\cdot)\|_\infty + \frac{\|s\|_\infty}{2l^2} |d(x) - d(x')|,
    \end{aligned}
    ```

    从而对任意 $\varepsilon>0$，存在 $\delta>0$，使得只要 $x,x'$ 的距离小于 $\delta_1$，就有
    $$
    \Big|(Tf)(x) - (Tf)(x')\Big| < \frac\varepsilon 3;
    $$

  - 对于第二项，作同样的处理可得
    $$
    \Big|(T_n'f)(x) - (T_n'f)(x')\Big| \le \sqrt\frac{\|s\|_\infty}{l^3} \|s(x,\cdot) - s(x',\cdot)\|_\infty + \frac{\|s\|_\infty}{2l^2} |d_n(x) - d_n(x')|,
    $$
    进一步我们需要将含 $d_n$ 的项关于足够大的 $n$ 作一致估计

    ```math
    \begin{aligned}
    |d_n(x) - d_n(x')| &\le |d_n(x) - d(x)| + |d(x) - d(x')| + |d(x') - d_n(x')| \\
    &\le 2\|d_n-d\|_\infty + |d(x) - d(x')|.
    \end{aligned}
    ```

  总之有
  $$
  \Big|[(T_n'-T)f](x) - [(T_n'-T)f](x')\Big| \le C_1\|s(x,\cdot) - s(x',\cdot)\|_\infty + C_2|d(x) - d(x')| + C_3\|d_n-d\|_\infty,
  $$
  其中前两项由空间 $\cal X$ 的紧性，可知连续函数 $s,d$ 都是一致连续的；
  最后一项在 @prop:normalized-pointwise 的证明中已经得到 a.s. 收敛到 0（由 $\cal S$
  是 Glivenko–Cantelli 类）。

:::

最后，根据各收敛性的关系，可知：

::: corollary
在预先假设下，$T_n' \xrightarrow{c} T$  a.s.
:::

## 第四步：谱的收敛性

现在我们已经得到了算子序列的**紧收敛性**，我们的最终目的是得到其**特征函数的收敛性**。

首先由上一节的结论，可知对任意 $z\in\rho(T)$，有 $T_n' - zI \xrightarrow{s} T-zI$  a.s.，
由此我们称算子 $T$ 的近似序列 $\{T_n'\}$ 在所有 $z\in\rho(T)$ 处是稳定的【stable】。

由此，对于 $U'$ 的孤立特征值 $\lambda \ne 1$，存在其邻域 $\Delta\subset\mathbb C$ 使得
$$
\lim_{n\to\infty} \sigma(L_n')\cap \Delta = \lim_{n\to\infty} \sigma(U_n')\cap \Delta = \{\lambda\}.
$$

但是 [@vonluxburg-belkin-bousquet08] 中给出了更强的结果：

::: theorem
在预先假设下，对于 $U'$ 的孤立特征值 $\lambda \ne 1$，
存在其邻域 $\Delta\subset \mathbb C$ 及 $N\in\mathbb{N}$，使得当 $n>N$ 时，
$\sigma(L_n')\cap \Delta = \{\lambda_n\}$，且 $\lambda_n\to \lambda$  a.s.

进一步，令算子 $\text{Pr}_n' : C(\mathcal X) \to C(\mathcal X)$ 是关于 $\lambda_n$ 的谱投影，
$\text{Pr}'$ 是关于 $\lambda$ 的谱投影，则 $\text{Pr}_n'\xrightarrow{p} \text{Pr}'$  a.s.

若 $\lambda$ 是一个单特征值，则还有特征向量的收敛性：
设 $v_n = (v_n^1,\cdots,v_n^n) = \rho_nf_n$ 是 $L_n'$ 关于 $\lambda_n$ 的特征向量，
$f$ 是 $U'$ 关于 $\lambda$ 的特征函数，则存在一列 $\{a_n\}\subset \{-1,1\}$，使得
$$
\sup_{i=1,\cdots,n} |a_nv_n^i - f(X_i)| = \|a_nv_n - \rho_nf\|_\infty \le \|a_nf_n-f\|_\infty \to 0 \quad \text{a.s.}
$$
特别地，对任意 $b\in\mathbb{R}$，集合 $\{a_nf_n>b\}$ 收敛到 $\{f>b\}$，即它们的对称差满足
$$
P(\{a_nf_n>b\} \triangle \{f>b\}) \to 0.
$$
:::

没有搞明白的问题：

1. 怎么保证在 $n$ 足够大时，这个邻域就只交出 $L_n'$ 的一个特征值？

2. 怎么保证 $\lambda$ 是单根时，
   $\lambda_n$ 也是单根？这样才能通过算子序列的强稳定性给出特征向量的收敛性。

## 参考文献*

```bibliography
vandervaart-wellner96:
  type: book
  author: [A. W. van der Vaart, Jon A. Wellner]
  title: 'Weak Convergence and Empirical Processes: With Applications to Statistics'
  series: Springer Series in Statistics
  publisher: Springer
  year: 1996
```
