---
title: Euler–Maclaurin 公式
aliases: [Euler-Maclaurin 公式]
categories: [实分析, 复分析, 解析数论]
notices:
  - name: 问题
    items:
      - “通用形式”一节中，按注的取法计算 $\overline B_1(x)f(x)|_a^b$ 时，若 $b$ 为整数，定理左边的和式似乎不应包含 $n=b$ 一项；证明中第一个等式右边似乎缺少负号。
      - “常用形式”一节中逐次分部积分的推导似乎有下标错误，例如第一行右边的积分似乎应为 $\frac12\int_a^b\overline B_2(x)f''(x)\mathrm dx$。
---

在数学分析中，**Euler–Maclaurin 公式**是一个能用来表达函数在指定区间上的部分和与积分之差的公式。
这个公式在1735年前后由 Euler 和 Maclaurin 独立发现，前者用其估算级数的值而后者用其计算积分。

## 通用形式

::: theorem {@th-em}
当$a<b$为实数、$f(x)\in C^1[a,b]$，则有：
\[
\sum_{a<n\le b}f(n)=\int_a^bf(x)\mathrm dx-\overline B_1(x)f(x)|_a^b+\int_a^b\overline B_1(x)f'(x)\mathrm dx
\]
:::

::: remark {@rm-b1}
由于$\overline B_1(x)$不连续，所以在中间差分是这样计算的：
\[
\overline B_1(x)f(x)|_a^b=\lim_{\delta\to0^+}\overline B_1(x)f(x)|_{a+\delta}^{b-\delta}
\]
:::

::: proof
由$\overline B_1(x)$的定义可知$\mathrm d\lfloor t\rfloor=\mathrm d[t-\overline B_1(t)]$，故有：
\[
\sum_{a<n\le b}f(n)-\int_a^bf(x)\mathrm dx=\int_{a+}^{b-}f(x)\mathrm d\overline B_1(t)
\]
再做一次分部积分即得结论。
:::

## 常用形式

在更多的场景中，我们往往会要求区间的端点为整数，所以结合 @rm-b1 便可将 @th-em 化为：

::: theorem {@th-emc}
当$a<b$为整数、$f(x)\in C^1[a,b]$，则有：
\[
\sum_{a\le n\le b}f(n)=\int_a^bf(x)\mathrm dx+{f(a)+f(b)\over2}+\int_a^b\overline B_1(x)f'(x)\mathrm dx
\]
:::

如果$f(x)$具有连续的高阶导数，则通过分部积分法，
就可以结合[[Bernoulli 多项式|周期 Bernoulli 函数]]的性质将最后一个积分变成：

\[
\begin{aligned}
  \int_a^b\overline B_1(x)f'(x)\mathrm dx
  &={\overline B_2(x)\over2}f'(x)|_a^b-\frac12\int_a^b\overline B_3(x)f''(x)\mathrm dx \\
  &={B_2\over2}f'(x)|_a^b-\frac12\int_a^b\overline B_3(x)f''(x)\mathrm dx \\
  &={B_2\over2}f'(x)|_a^b-{B_3\over3!}f'(x)|_a^b+{1\over3!}\int_a^b\overline B_3(x)f'''(x)\mathrm dx \\
  &={B_2\over2}f'(x)|_a^b+{B_4\over4!}f'''(x)|_a^b+{B_6\over6!}f^{(5)}(x)|_a^b+\cdots \\
  &+{B_{2m}\over(2m)!}f^{(2m-1)}(x)|_a^b-{1\over(2m)!}\int_a^b\overline B_{2m}(x)f^{(2m)}(x)\mathrm dx
\end{aligned}
\]

于是 @th-emc 就可以化成：

::: theorem {@th-emc2}
当$a<b$为整数、$f(x)\in C^q[a,b]$，则有：
\[
\sum_{a\le n\le b}f(n)=\int_a^bf(x)\mathrm dx+{f(a)+f(b)\over2}+\sum_{1\le k\le q/2}{B_{2k}\over(2k)!}f^{(2k-1)}(x)|_a^b+R_q,
\]
其中：
\[
R_q={(-1)^{q+1}\over q!}\int_a^b\overline B_q(x)f^{(q)}(x)\mathrm dx.
\]
:::

## 应用

### 调和数

调和数的定义为：

\[
H_n=\sum_{1\le k\le n}\frac1k
\]

通过积分放缩法，易知$H_n$发散，但利用 Euler–Maclaurin 公式，
我们可以提取调和级数发散过程中的更多信息。

对调和数$H_n$使用 @th-emc，可知：

```math {@eqn-emhn}
H_n=\log n+\frac12+{1\over2n}-\int_1^n{\overline B_1(x)\over x^2}\mathrm dx.
```

利用性质$|\overline B_1(x)|\le1/2$，易知最右侧的积分在$n\to+\infty$时收敛，所以下列极限存在：

\[
\gamma=\lim_{n\to\infty}(H_n-\log n),
\]

其中极限值$\gamma$被称为[[Euler–Mascheroni 常数]]。利用这一点，就可以将 @eqn-emhn 化成：

```math {@eqn-emhn2}
H_n=\log n+\gamma+{1\over2n}-\int_n^\infty{-\overline B_1(x)\over x^2}\mathrm dx
```

利用幂函数求导法则，易知：

\[
{\mathrm d^q\over\mathrm dx^q}x^{-1}=(-1)^qq!x^{-1-q}
\]

所以类似于 @th-emc2，我们可通过分部积分得知：

\[
-\int_n^\infty{\overline B_1(x)\over x^2}\mathrm dx=\sum_{1\le k\le q/2}{B_{2k}\over(2k)!}(-1)^{2k-1}(2k-1)!x^{-2k}|_n^\infty-\int_n^\infty{\overline B_q(x)\over x^{q+1}}\mathrm dx
\]

综上所述，我们就可以把 @eqn-emhn2 化成：

\[
H_n=\log n+\gamma+{1\over2n}-\sum_{1\le k\le q/2}{B_{2k}\over2kn^{2k}}-\int_n^\infty{\overline B_q(x)\over x^{q+1}}\mathrm dx
\]
