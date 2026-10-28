---
title: 规范方法的收敛速度
---

<problems>
- 最后一段中 Gauss 相似度函数情形下特征函数的收敛速度 $O(1/n)$ 似乎应为 $O(1/\sqrt n)$。
</problems>

从上面的讨论我们已经知道，若 $\mu = 1-\lambda$ 是 $T = I-U'$ 的一个单特征值，
则当 $n$ 足够大时，$\mu_n = 1-\lambda_n$ 也是 $T_n' = I - U_n'$ 的一个单特征值，
从而关于 $\mu_n$ 的谱投影算子 $\text{Pr}_n$ 的像即为由其特征函数 $f_n$ 张成的一维线性空间。
设 $\|f_n\| = 1$，则它们的“极限函数”$f$ 也有 $\|f\| = 1.$

我们的目标是估计 $\|a_nf_n - f\|$：为此令 $\text{Pr}_n f = c_nf_n$，则有 $a_n = \text{sgn}~c_n$，
即 $c_n = a_n|c_n|$，从而

```math
\begin{aligned}
\|a_nf_n - f\| &\le \|a_nf_n - c_n f_n\| + \|\text{Pr}_nf - f\| \\
&={} \big|1-|c_n|\big| + \|\text{Pr}_nf - f\| \\
&={} \big|\|f\| - \|c_nf_n\|\big| + \|\text{Pr}_n f- f\| \\
&\le \|f-c_nf_n\| + \|\text{Pr}_nf - f\| = 2\|f-\text{Pr}_n f\|.
\end{aligned}
```

于是问题转化为估计 $\|f - \text{Pr}_nf\|$，而这可以利用如下定理得到：

::: theorem
设 $(E,\|\cdot\|)$ 是 Banach 空间，$T_n'$ 和 $T$ 是其上的紧算子，
并且 $T_n' \xrightarrow{cc} T.$  取 $\mu\in\sigma(T)\backslash\{0\}$ 的逼近序列
$\mu_n\in\sigma(T_n')\backslash\{0\}$，
它们相应的谱投影算子为 $\text{Pr}_n.$  则存在只依赖于 $\mu$ 和 $\sigma(T)$ 的常数 $C>0$ 使得
$$
\|f - \text{Pr}_n f\| \le C\big(\|(T_n'-T)f\| + \|f\|\cdot\|(T-T_n')T_n'\|\big)
$$
对 $\mu$ 的任意特征向量 $f\in E$ 成立。
:::

（详见文章 The Numerical Solution of the Eigenvalue Problem for Compact Integral Operators [@atkinson67] 中的定理 3）

根据这个定理，我们只需要估计 $\|(T_n'-T)f\|$ 和 $\|(T-T_n')T_n'\|$ 两项：

- 第一项的估计已由上一节的命题证明过程给出：

  ```math
  \begin{aligned}
  \|T_n'f - Tf\| \le{}& \sup_{x\in\cal X}\left|\int_{\cal X}h(x,y)f(y)\,dP_n(y) - \int_{\cal X} h(x,y)f(y)\,dP(y) \right| \\
  &+ \frac{\|s\|^2}{l^3}\sup_{x\in\cal X}\left|\int_{\cal X}s(x,y)\,dP_n(y) - \int_{\cal X} s(x,y)\,dP(y) \right| \\
  \le{}& \left(1+\frac{\|s\|^2}{l^3}\right)\sup_{g\in (f\cdot\cal H)\cup S} \left|\int_{\cal X}g(y)\,dP_n(y) - \int_{\cal X} g(y)\,dP(y) \right|.
  \end{aligned}
  ```

- 对于第二项，我们将其拆解进行估计：

  ```math
  \begin{aligned}
  \|(T-T_n')T_n'\| &\le \|(T-T_n)T_n'\| + \|(T_n-T_n')T_n'\| \\
  &\le \|T(T_n'-T_n)\| + \|(T-T_n)T_n\| + \|T_n(T_n-T_n')\| + \|(T_n-T_n')T_n'\| \\
  &\le \|T_n'-T_n\| \big(\|T\| + \|T_n\| + \|T_n'\|\big) + \|(T-T_n)T_n\|.
  \end{aligned}
  ```

  根据上一节的命题证明，易见前一项有估计

  ```math
  \begin{aligned}
  \|T_n'-T_n\| \big(\|T\| + \|T_n\| + \|T_n'\|\big) &\le \frac{\|s\|^2}{l^3}\sup_{x\in\cal X}\left|\int_{\cal X}s(x,y)\,dP_n(y) - \int_{\cal X} s(x,y)\,dP(y) \right|\cdot\frac{3\|s\|}l \\
  &= \frac{3\|s\|^3}{l^4} \sup_{g\in\cal S} \left|\int_{\cal X}g(y)\,dP_n(y) - \int_{\cal X} g(y)\,dP(y) \right|,
  \end{aligned}
  ```

  故只需再估计后一项：从范数和算子的定义出发，我们有

  ```math
  \begin{aligned}
  & \|(T-T_n)T_n\| = \sup_{\|g\|=1} \sup_{x\in\cal X} |(T-T_n)T_ng(x)| \\
  &= \sup_{\|g\|=1} \sup_{x\in\cal X} \left|\int_{\cal X} h(x,z)\int_{\cal X} h(z,y)g(y)\,dP_n(y)\,dP(z) - \int_{\cal X} h(x,z)\int_{\cal X} h(z,y)g(y)\,dP_n(y)\,dP_n(z)\right| \\
  &= \sup_{\|g\|=1} \sup_{x\in\cal X}\left|\int_{\cal X} g(y)\int_{\cal X} h(x,z)h(z,y)\,dP(z)\,dP_n(y) - \int_{\cal X} g(y)\int_{\cal X} h(x,z)h(z,y)\,dP_n(z)\,dP_n(y)\right| \\
  &\le \sup_{x,y\in\cal X} \left|\int_{\cal X} h(x,z)h(y,z)\,dP(z) - \int_{\cal X}h(x,z)h(y,z)\,dP_n(z)\right| \\
  &= \sup_{g\in\cal H\cdot H} \left|\int_{\cal X} g(z)\,dP(z) - \int_{\cal X} g(z)\,dP_n(z)\right|,
  \end{aligned}
  ```

  其中最后的函数类定义为
  $$
  \cal H \cdot H := \{h(x,\cdot)h(y,\cdot): x,y\in X\}.
  $$
  综合起来我们得到
  $$
  \|(T-T_n')T_n'\| \le \left(1+\frac{3\|s\|^3}{l^4}\right)\sup_{g\in (\cal H\cdot H)\cup S} \left|\int_{\cal X}g(y)\,dP_n(y) - \int_{\cal X} g(y)\,dP(y) \right|.
  $$

综上，我们可以得到最终结果：

::: theorem
在上述假设和记号下，则存在只依赖于 $\mu, \sigma(T)$ 和相似度函数 $s$ 的常数 $C'>0$，
以及一列 $\{a_n\}\subset \{-1,1\}$，使得
$$
\|a_nf_n - f\| \le C'\sup_{g\in\cal G} \left|\int_{\cal X}g(y)\,dP_n(y) - \int_{\cal X} g(y)\,dP(y) \right|
$$
其中函数类 $\cal G = S\cup (f\cdot H)\cup (H\cdot H).$
:::

由此可见，特征函数的收敛速度被**经验分布的收敛速度**（由函数类 $\cal G$ 刻画）所控制，
而后者可由经验过程理论得到估计（参考书 Weak Convergence and Empirical Processes [@vandervaart-wellner96] 中第 2 章）。

例如，对于 Gauss 相似度函数 $s(x,y) = \exp(-\|x-y\|^2/\sigma^2)$，
我们可以用**覆盖数方法**得到特征函数的收敛速度为 $O(1/n).$
（详见 [@vonluxburg-belkin-bousquet08] 中的 Section 6.3）

## 参考文献*

```bibliography
atkinson67:
  type: article
  author: Kendall E. Atkinson
  title: The Numerical Solution of the Eigenvalue Problem for Compact Integral Operators
  journaltitle: Transactions of the American Mathematical Society
  volume: 129
  pages: 458–465
  year: 1967
```
