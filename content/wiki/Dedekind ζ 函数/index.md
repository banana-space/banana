---
title: 'Dedekind $\zeta$ 函数'
aliases: [Dedekind zeta 函数]
categories: [解析数论, 特殊函数]
---

<problems>
- “互反律”一节需要扩充。
</problems>

**Dedekind $\zeta$ 函数**是
[[Riemann $\zeta$ 函数]]在一般数域上的推广，
正如 Riemann $\zeta$ 函数是[[自然数]]的幂方和，
Dedekind $\zeta$ 函数是数域的整数环的[[理想]]的[[范数]]的幂方和，
以反映[[数域]]的信息。

## 定义

::: definition
对数域 $K$，其 Dedekind $\zeta$ 函数是下述在
$\Re(s) > 1$ 时[[绝对收敛]]的[[级数]]
\[
\zeta_K(s) = \sum_{I \subset \mathcal{O}_K}
\frac{1}{N_{K / \mathbb{Q}}(I)^{s}}
\]
（其中求和表示 $I$ 取遍 $K$ 整数环 $\mathcal{O}_K$ 的所有非零理想）
在 $\mathbb{C}$ 上的[[解析延拓]]，
它是 $\mathbb{C}$ 上的[[亚纯函数]]。
:::

::: remark
在取 $K = \mathbb{Q}$ 时，
Dedekind $\zeta$ 函数即为
[[Riemann $\zeta$ 函数]]。
这是因为 $\mathbb Q$ 的整数环 $\mathbb Z$ 的非零理想都形如$n\mathbb Z$，
其中 $n$ 是正整数。
:::

## 性质

::: notation*
我们在下面的叙述中采用如下记号：对数域 $K$，

- $\mathcal{O}_K$ 是 $K$ 的[[整数环]]；

- $r_1$ 为 $K$ 的实[[赋值理论|位点]]的个数，
  即 $i:K\to\mathbb R$ 的嵌入数量；

- $r_2$ 为 $K$ 的复位点的个数，
  即 $i:K\to\mathbb C$ 且 $i(K)\not\subset\mathbb R$ 的嵌入共轭对的数量；

- $\Delta_K$ 为 $K$ 的[[判别式]]；

- $C(K)$ 为 $K$ 的[[类群]]；

- $h(K)$ 为 $K$ 的类数，
  即类群的阶数 $\# C(K)$；

- $U_K$ 为 $K$ 的[[单位群]]，
  即 $\mathcal O_K^\times$ 在乘法下构成的群；

- $R(K)$ 为 $K$ 的[[调节子]]；

- $w(K)$ 为 $K$ 中[[单位根]]个数。

:::

### 其它形式

类比 Riemann $\zeta$ 函数的Euler 乘积，
借助 $\mathcal O_K$ 作为[[Dedekind 整环]] 上的素理想唯一分解以及理想范数的乘性，
得到如下公式。这便体现出对理想求和代替元素求和的优势。

::: proposition [Euler 乘积]
对 $\Re s>1$，Dedekind $\zeta$ 函数可表为如下的无穷乘积形式：
\[
\zeta_K(s) = \prod_{\mathfrak{p} \subset \mathcal{O}_K}
\frac{1}{1 - N_{K / \mathbb{Q}}(\mathfrak{p})^{-s}},
\]
$\mathfrak{p}$ 取遍 $\mathcal{O}_K$ 的所有[[素理想]]。
:::

此外可将对全体 $I\subset\mathcal O_K$ 求和分类为对每个理想类 $I\in C$ 的 $I$ 分别求和，
得到如下公式。

::: proposition
对 $\Re s>1$，设 $C$ 为 $K$ 的任意理想类，定义
$$
\zeta (C,s)
=\sum _ { I \in C } \frac 1 { N_{K/\mathbb Q} (I)^s}
=N_{K/\mathbb Q}(J)^s\sum _{ a \in J^* / U_K } \frac 1 { N_{K/\mathbb Q}(a)^s}.
$$
其中 $J$ 为 $C^{-1}$ 中任意整理想，$J^*/U_K$ 表示理想 $J$ 中非零元素模 $U_K$ 下的等价类，
给定 $J^*/U_K$ 类，其每个代表元都具有相同的范数。

那么，Dedekind $\zeta$ 函数可表为如下的求和形式：
$$
\zeta _K (s)  = \sum _{ C\in C(K)} \zeta (C,s).
$$
:::

只需注意到对 $I\in C$ 求和相当于对形如 $IJ$ 的全体主理想求和，
而 $IJ$ 的生成元恰遍历了 $J$ 中非零元，其中生成元的 $U_K$ 等价类不改变生成的理想。

::: remark
上述 $\zeta(C,s)$ 的第二个等号将对理想求和转化为对理想中的元素求和，考虑 $K=\mathbb Q$ 为例，
因为 $\mathbb Z$ 是主理想整环，
取$J=(1)$ 于是 $\zeta(s)=\zeta([(1)],s)$ 变为对全体$n\in\mathbb Z^*/\pm 1$ 求和 $|n|^{-s}$。
重新得到了 Riemann $\zeta$ 函数。

另外，注意类数有限，所以关于 $C\in C(K)$ 的求和是一个有限和。
:::

### 函数方程

::: proposition
对数域 $K$，记
\[
\Gamma_{\mathbb{R}}(s) = \pi^{-\frac{s}{2}} \Gamma(\frac{s}{2})
\]
\[
\Gamma_{\mathbb{C}}(s) = 2 (2\pi)^{-s} \Gamma(s)
\]
（$\Gamma$ 表示 [[$\Gamma$ 函数]]），则
\[
\Lambda_K (s) =
|\Delta_K|^{\frac{s}{2}} \Gamma_{\mathbb{R}}(s)^{r_1}
\Gamma_{\mathbb{C}}(s)^{r_2} \zeta_K(s)
\]
可延拓至 $\mathbb{C}$ 上，且满足
\[
\Lambda_K(s) = \Lambda_K(1 - s).
\]
:::

比较方便的证明来自 [[Tate 论题]] 的整体版本，其核心技术概括如下。

::: proof [函数方程证明梗概]
对于 $f:\mathbb A_K\to\mathbb C$ 的一个[[Schwartz 函数]]，
如果它是局部上诸 $f_v:K_v\to\mathbb C$ 的乘积，
其中除了有限多个 $v$ 以外剩下的 $f_v={\bf 1}_{\mathcal O_v}$。
那么便得到 $\zeta$ 因子的乘积公式
\[
Z(f,s)=\prod_v Z_v(f_v,s),
\]
进而
\[
\frac{Z(f,s)}{L(s)}=\prod_v\frac{Z_v(f_v,s)}{L_v(s)}.
\]
这里$L(s)=\prod_v L_v(s)$。
它在 $\Re s>1$ 时绝对收敛。
现在对左式作Fourier 变换得到
\[
\prod_v\gamma_v(s)\frac{Z_v(\hat f_v,1-s)}{L_v(1-s)}.
\]
这将在整体上给出
\[
\frac{Z(f,s)}{L(s)}=\gamma(s)\frac{Z(\hat f,1-s)}{L(1-s)}.
\]
这里$\gamma(s)=\prod_v\gamma_v(s)$。
出于完全不同的原因（计算中使用了类似[[Poisson 求和公式]]的技术），
整体上我们也有 $Z(f,s)=Z(\hat f,1-s)$。
于是我们得到
\[
L(1-s)=\gamma(s)L(s).
\]
其中$\gamma(s)=|\Delta_K|^{s-1/2}$，因为$\gamma_v(s)$在局部上统计了全体分歧。
进而我们可以写出更对称的形式
\[
L(1-s)|\Delta_K|^{(1-s)/2}=L(s)|\Delta_K|^{s/2}.
\]
最后计算 $L$ 函数，它是全体局部的$L$ 因子的乘积，由此可知
\[
L(s)=\Gamma_{\mathbb R}(s)^{r_1}\Gamma_{\mathbb C}(s)^{r_2}\prod_{\mathfrak p\subset\mathcal O_K}(1-N_{K/\mathbb Q}(\mathfrak p)^{-s})^{-1},
\]
根据Euler 乘积即可得到命题的最终形式。
:::

### 特殊值

<see>[[类数公式]]</see>

::: proposition [类数公式]
$\zeta_K(s)$ 在 $1$ 处有单极点，且有渐近行为
\[
\lim_{s \to 1} (s - 1)\zeta_K(s) =
\frac{2^{r_1} (2\pi)^{r_2} R(K) h(K)}
{w(K) |\Delta_K|^{\frac{1}{2}}}.
\]
:::

通过函数方程，我们可以将 $s=0,1$ 处 $\zeta_K$ 的行为相联系，
于是得到如下重要推论。

::: corollary
$\zeta_K (s)$ 在 $s = 0$ 处的零点重数 $r$
为 $K$ 的[[单位群]] 的秩 $\operatorname{rk}U_K=r_1+r_2-1$，且有渐近行为
\[
\lim_{s \to 0} s^{-r} \zeta_K(s) =
-\frac{h(K) R(K)}{w(K)}.
\]
:::

### 互反律

## 例子

- 对 $K=\mathbb Q$，熟知它在$s=0,1$附近有：
  \[
  \zeta(s)=-\frac12+O(s), \zeta(s)=\frac{1}{s-1}+O(1).
  \]
  代入$r_1=1,r_2=0,R=1,h=1,w=2,\Delta=1$，发现类数公式给出一致的结果。

- 令 $K = \mathbb {Q} ( \sqrt {2} )$，
  则 $\mathcal {O}_ K = \mathbb Z [\sqrt {2}]$，
  它是[[主理想整环]]，单位群为 $\{\pm1\}\times (1+\sqrt{2})^{\mathbb{Z}}$，
  $\Delta_K = 8$。
  对素数 $p$，局部 $\zeta$ 函数
  \[
  \zeta_{K,p}(s):=\prod_{\mathfrak{p}\mid p}\frac{1}{1-N_{K/\mathbb{Q}}(\mathfrak{p})^{-s}}
  \]
  与 $p$ 的分歧、分裂情况有关，
  也就是要考虑 $x^2-2$ 在 $\mathbb{F}_p$ 上的分解。可以算出
  \[
  \zeta_{K, p}(s)=\frac{1}{(1-p^{-s})(1-\chi(p)p^{-s})}
  \]
  其中 $\chi(p) = \left( \frac{2}{p} \right) = (-1)^{\frac{p^2-1}{8}}$
  （如 $p = 2$ 则 $\chi(p) = 0$）。
  因此如下互反律成立。
  \[
  \zeta_K(s) = \zeta(s)L(\chi, s).
  \]

  通过类数公式可以算出 $(s-1)\zeta_K(s)$ 在 $1$ 处取值为
  $\frac{\log(\sqrt{2}+1)}{\sqrt{2}}$。
  可得
  \[
  L(\chi, 1) = 1 -\frac{1}{3} -\frac{1}{5} + \frac{1}{7}
  + \cdots = \frac{\log(\sqrt{2}+1)}{\sqrt{2}}
  \]
