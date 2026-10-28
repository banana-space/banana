---
title: Kronecker 逼近定理
categories: [Diophantos 逼近]
---

<problems>
- “解析方法”一节中 $[f(t)]^k$ 的展开式及其后的积分式里，求和指标似乎应为 $r_1,\dots,r_n$（与 $z_1,\dots,z_n$ 对应），而不是 $r_1,\dots,r_k$。
</problems>

::: convention
在本文中，

- 对$x\in\mathbb R$，$\lfloor x\rfloor$表示[[取整]]，即不超过$x$的最大整数；
- $\{x\}=x-\lfloor x\rfloor$即取小数部分；
- $\|x\|$是$x$到最近整数的[[距离]]。
- 对向量$\alpha\in\mathbb R^n$，$\|\alpha\|_p$表示其$p$ [[范数]]。

:::

**Kronecker 逼近定理** 是 [[Leopold Kronecker]]
在1884年一篇论文中证明的 [[Diophantos 逼近]]定理，
一个经典版本的叙述是：如果$1,\alpha_1,\cdots,\alpha_n$在$\mathbb Z$ [[线性相关|线性无关]]，
那么当$q$取遍全体整数时，$(\{q\alpha_1\},\cdots,\{q\alpha_n\})\in[0,1)^n$ [[稠密]]。

## 叙述与证明

::: theorem [Kronecker] {@逼近}
同态 $f\colon\mathbb{Z}^n\to\mathbb{T}^m$ 像集稠密，
当且仅当对偶同态 $f^*\colon\mathbb{Z}^m\to\mathbb{T}^n$，即映射
$\operatorname{Hom}(\mathbb{T}^m,\mathbb{T})\to
  \operatorname{Hom}(\mathbb{Z}^n,\mathbb{T})$，
$g\mapsto g\circ f$，为单。
:::

### 用紧群理论

::: proof
由同构定理有 $\ker(f^*)=\operatorname{Hom}
  (\mathbb{T}^m/\overline{\operatorname{im}(f)},\mathbb{T})$，
所以当 $\overline{\operatorname{im}(f)}=\mathbb{T}^m$ 时显然有
$\ker(f^*)=0$，即 $f$ 的像稠密推出 $f^*$ 单。
反过来如 $f$ 的像不稠密，则 $\mathbb{T}^m/\overline{\operatorname{im}(f)}$
是非平凡、交换的紧群，由[[紧群]]的理论知它到 $\mathbb{T}$
有非平凡同态。（比如由 [[Peter–Weyl 定理]]知其有非平凡表示，
注意交换群不可约表示都是一维，所以非平凡不可约酉表示就给出群到
$\mathbb{T}=\mathrm{U}(1)$ 的非平凡同态。）于是
$\ker(f^*)\ne0$。
:::

### 用 Weyl 判别法

::: proof
如 $f$ 的像集稠密，则连续同态 $g\colon\mathbb{T}^m\to\mathbb{T}$
被其在 $f$ 的像集的限制决定，即 $f^*$ 单。反过来如对偶同态
$f^*$ 单，我们来说明更强的[[一致分布]]，即对开方块
$U\subseteq\mathbb{T}^m$ 都有
$$
\lim_{N_1,\ldots,N_n\to\infty}
\frac{\#\{a\in\mathbb{Z}^n\cap[0,N_1)\times\cdots\times[0,N_n)\mid
f(a)\in U\}}{N_1\cdots N_n}=\operatorname{vol}(U),
$$
其中 $\operatorname{vol}$ 表示 [[Lebesgue 测度]]。
由 [[Weyl 判别法]]，只需对任一 $k\in\mathbb{Z}^m\setminus0$ 证明
$$
\lim_{N_1,\ldots,N_n\to\infty}\frac{1}{N_1\cdots N_n}
\sum_{a\in\mathbb{Z}^n\cap[0,N_1)\times\cdots\times[0,N_n)}
\mathbf{e}(\left<k,f(a)\right>)=0,
$$
其中 $\mathbf{e}(x)=\exp(2\pi\mathrm{i} x)$，而
$\left<\cdot,\cdot\right>$ 表示内积 $\mathbb{Z}^m\times
  \mathbb{T}^m\to\mathbb{T}$。由 $f^*$ 的定义，
$\left<k,f(a)\right>=\left<a,f^*(k)\right>$，
其中等号右边 $\left<\cdot,\cdot\right>$ 表示内积
$\mathbb{Z}^n\times\mathbb{T}^n\to\mathbb{T}$。记
$f^*(k)=(t_1,\ldots,t_n)\in\mathbb{T}^n$，
则由乘法分配律，上式左边等于
$$
\lim_{N_1,\ldots,N_n\to\infty}\prod_{j=1}^n
\frac{1}{N_j}\sum_{a_j=0}^{N_j}\mathbf{e}(a_jt_j).
$$
由于 $f^*$ 单，$k\ne0$，存在 $i\in\{1,\ldots,n\}$
使得 $t_i\ne0$。于是对乘积式第 $i$ 个因子用等比数列求和，
其余用 $|\mathbf{e}(x)|\le1$ 粗犷放缩，有
$$
\limsup_{N_1,\ldots,N_n\to\infty}\left|\prod_{j=1}^n
\frac{1}{N_j}\sum_{a_j=0}^{N_j}\mathbf{e}(a_jt_j)\right|
\le\limsup_{N_i\to\infty}\frac{1}{N_i}
\frac{|1-\mathbf{e}(N_it_i)|}{|1-\mathbf{e}(t_i)|}\le
\limsup_{N_i\to\infty}\frac{1}{N_i}\frac{2}{|1-\mathbf{e}(t_i)|}=0,
$$
此即欲证。
:::

::: remark
事实上该证明的 $\mathbf{e}(\left<\cdot,x\right>)$
就是上一个证明的不可约表示。此种等分布问题一般都与群表示有关。
:::

### 初等方法

本小节中我们把 @逼近 初等地重述如下：

::: theorem [Kronecker] {@初等}
设$A\in\mathbb R^{m\times n}$是$m$行$n$列的实矩阵，那么如下两条件等价：

1. 对任意$\epsilon>0$和列向量$\beta\in\mathbb R^m$，
   存在$\alpha\in\mathbb Z^n,\gamma\in\mathbb Z^m$使得
   \[
   \|A\alpha-\beta-\gamma\|_\infty\le\epsilon,
   \]

2. $\{\gamma\in\mathbb Z^m:A^\mathrm T\gamma\in\mathbb Z^n\}=\{{\bf 0}\}$。

:::

为证明 2 推 1，我们引入一系列定义和数个引理。

::: definition
设$\Gamma$是$\mathbb R^n$的一个$n$维的[[晶格|完备格]]，
$C$是$\mathbb R^n$的一个关于${\bf0}$中心对称，维度$n$的有界[[凸集|凸]][[开集|闭集]]
（下文中遇见的凸集$C$和格$\Gamma$如无特别说明，始终要求这些条件）。记
\[
\begin{aligned}
\lambda(C,\Gamma)&:=\inf\{\lambda\in\mathbb R_+:\lambda C\cap\Gamma\ne\{{\bf0}\}\}, \\
\mu(C,\Gamma)&:=\inf\left\{\mu\in\mathbb R_+:\bigcup_{\gamma\in\Gamma}(\mu C+\gamma)=\mathbb R^n\right\}.
\end{aligned}
\]
再记
\[
\begin{aligned}
\Gamma^*&:=\{{\bf y}\in\mathbb R^n:{\bf y}^\mathrm T{\bf x}\in\mathbb Z,
\ \forall {\bf x}\in\Gamma\}\\
C^*&:=\{{\bf y}\in\mathbb R^n:{\bf y}^\mathrm T{\bf x}\le 1,
\ \forall {\bf x}\in C\}
\end{aligned}
\]
显然$\Gamma^*,C^*$也是符合条件的格和凸闭集。

最后定义度量$d_C(x,y)=\inf\{d\in\mathbb R_+:x\in y+dC\}$，显然它满足正定、对称和三角不等式。
:::

::: lemma {@格引理}
给定$\Gamma$和$C$，记
\[
\mu_k=\inf\left\{\mu\in\mathbb R_+:\bigcup_{\gamma\in\Gamma}(\mu C+\gamma)\text{ 与一切 }n-k\text{ 维仿射子空间都相交}\right\}.
\]
则$2\mu_{k-1}\ge\mu_k$对一切$1< k\le n$。另外$\mu_1\le 1/\lambda(C^*,\Gamma^*)$。
:::

::: proof
对$2\mu_{k-1}\ge\mu_k$只需证$k=n$，其余情况投影即可。
记$\lambda=\lambda(C,\Gamma)$，
现取定$v\in(\lambda C\cap\Gamma)\backslash\{{\bf0}\}$
相当于格点中到$0$的$d_C$距离最小者，$V=\mathbb Rv$，
$\pi$是沿着$V$投到$V^\perp$的投影算子，以下为行文方便记$\pi(\bullet)=\bullet'$。
对任意$p\in\mathbb R^n$下证$p\in 2\mu_{n-1}C+\Gamma$，
换言之$d_C(p,\Gamma)\le 2\mu_{n-1}$。
分类讨论如下：

**情形 1：** 倘若$p'\not\in\Gamma'$。
此时$p'\in\mu_{n-1}C'+l_1'=S$对某$l_1\in\Gamma$。
设$w$在$S\subset V^\perp$的边界且在$l_1'p'$射线上。
因为$\mu_{n-1}C'+\Gamma'=V^\perp$故$w\in\mu_{n-1}C'+l_2'$
且$l_1'\ne l_2', l_2\in\Gamma$。
设$s_1,s_2$是过$l_1',l_2'$平行$v$的直线。我们声称：
$p$到$s_1$和$s_2$直线上的$\Gamma$格点$d_C$距离最小者不超过$2\mu_{n-1}$。
利用$w$过渡我们知道：
\[
d_C(s_1,s_2)\le d_C(p',l_1')+d_C(p',w)+d_C(w,l_2')\le 2\mu_{n-1}.
\]
由$\lambda$定义，$s_1$上的一个格点到$s_2$距离最近的两个格点的和
不超过$4\mu_{n-1}+\lambda\ge 2\lambda$，这推出$\lambda\le 4\mu_{n-1}$。
另一方面$p$到$s_1$和$s_2$距离最近的各两个，
共四个格点的距离和不超过$4\mu_{n-1}+2\lambda\le 8\mu_{n-1}$。
于是$p$到最近格点距离不超过$2\mu_{n-1}$。

**情形 2：** 倘若$p'\in\Gamma'$，因为$\lambda\le 4\mu_{n-1}$与$p$的选取无关故它仍然成立，
设$s$是过$p'$平行$v$的直线，
这次$p$到$s$上最近的两个格点距离的和是$\lambda$于是总有一个格点与$p$距离不超过$2\mu_{n-1}$。

对于$\mu_1\le 1/\lambda(C^*,\Gamma^*)$，
只需证明对$\lambda<\lambda(C^*,\Gamma^*)$，
总有$C/\lambda+\Gamma$和每个超平面都相交。
假如它与$\alpha^\mathrm T{\bf x}=b$不交，
可设$\alpha\in\Gamma^*$否则$\Gamma$中的点可任意逼近该平面。
再令此时$b$为$\alpha^\mathrm T{\bf x}=b$与$C^\circ/\lambda$不交的最小正实数。
此时$b\le 1$因为$b$加任意整数仍满足不交条件，此时$\lambda C^*$含$\alpha\in\Gamma^*$而矛盾。

至此，引理得证。
:::

::: corollary {@格推论}
$\lambda(C^*,\Gamma^*)\mu(C,\Gamma)\le 2^{n-1}$
对一切$\Gamma$和$C$成立。
:::

::: proof
由 @格引理，注意到$\mu(C,\Gamma)=\mu_n$即得。
:::

::: lemma {@逼近引理}
若$Q,\epsilon$是正实数，使得对一切不全为$0$的整数$g_1,\cdots,g_m$总有
\[
Q\sum_{j=1}^n\|g_1A_{1j}+\cdots+g_mA_{mj}\|+\epsilon\sum_{i=1}^m|g_i|\ge 2^{m+n-1},
\]
那么对一切$\beta\in\mathbb R^m$，存在$\alpha\in\mathbb Z^n,\gamma\in\mathbb Z^m$使
\[
\|A\alpha-\beta-\gamma\|_\infty\le\epsilon,\ \|\alpha\|_\infty\le Q.
\]
其中$A_{ij}$表示矩阵$A$的$(i,j)$元素。
:::

::: proof
为了适用 @格推论，设$C=\{{\bf x}\in \mathbb R^{m+n}:\|{\bf x}\|_\infty\le 1\}$，
对应的$C^*=\{{\bf x}\in \mathbb R^{m+n}:\|{\bf x}\|_1\le 1\}$。
再令$\Gamma$是如下矩阵的列向量生成的完备格，对应的$\Gamma^*$则是逆矩阵转置的列向量生成的完备格：
\[
B=\left[ \begin{matrix} I_m & -A \\ {\bf 0} & \epsilon I_n/Q\end{matrix} \right],\
(B^{-1})^\text T=\left[ \begin{matrix} I_m & {\bf 0} \\ QA^\text T/\epsilon & \epsilon I_n/Q\end{matrix} \right].
\]
因此$\Gamma^*$者都形如
$\left[ \begin{matrix}{\bf a}\\Q(A^\mathrm T{\bf a}+{\bf c})/\epsilon\end{matrix} \right]$，
其中${\bf a}\in\mathbb Z^m,{\bf c}\in\mathbb Z^n$。
引理的条件式化作
$\left\| \left[ \begin{matrix}{\bf a}\\Q(A^\mathrm T{\bf a}+{\bf c})/\epsilon\end{matrix} \right] \right\|_1\ge 2^{m+n-1}/\epsilon$。
对一切${\bf a},{\bf c}$不同时为${\bf 0}$。于是$\lambda(C^*,\Gamma^*)\ge 2^{m+n-1}/\epsilon$，
由 @格推论 得$\mu(C,\Gamma)\le \epsilon$，这立刻转化为我们欲证的结论。
:::

::: proof [@初等 的证明]
先证较易的 1 推 2。
反设 2 不真，即存在$A^\mathrm T\gamma\in\mathbb Z^n,\gamma\in\mathbb Z^m\backslash\{{\bf0}\}$。
这说明$A\alpha$总落在 $S=\{{\bf x}\in\mathbb R^m:\gamma^\mathrm T{\bf x}\in\mathbb Z\}$内。
注意到这些[[超平面]]的距离两两不小于$\|\gamma\|_2^{-1}$，
故$S$不在整个$\mathbb R^m$稠密。
由$S$平移到每个整点取并还是$S$自身和$S$是非稠密闭集，1 的逼近无法对$\beta\not\in S$达成。

对于 2 推 1，我们应用 @逼近引理。
对任意$\epsilon>0$取$Q$充分大，使得$\sum_{i=1}^m|g_i|< 2^{m+n-1}/\epsilon$时
$\sum_{j=1}^n\|g_1A_{1j}+\cdots+g_mA_{mj}\|\ge1/Q$。这总能做到，因为这只涉及有限个值，
而且原条件 2 告诉我们它始终非零，进而有最小值。于是我们总能得到想要的逼近。
:::

### 解析方法

本小节我们将证明：

::: theorem {@解析}
若$a_1,a_2,\dots,a_n$为关于$\mathbb{Z}$线性无关的实数组，$b_1,b_2,\dots,b_n$为任意实数组，
则对于任意$\varepsilon,T_0>0$均存在$t\ge T_0$使得：
\[
\|a_mt-b_m\|<\varepsilon,\quad m=1,2,\dots,n.
\]
:::

证明需要用到如下引理。

::: lemma {@积分引理}
若$\phi\in C[a,b]^n$非负，则有：
\[
\lim_{p\to+\infty}\left(\int_{[a,b]^n}[\phi(x_1,x_2,\dots,x_n)]^p\mathrm dx_1\mathrm dx_2\cdots\mathrm dx_n\right)^{\frac1p}=\max_{(x_1,x_2,\dots,x_n)\in[a,b]^n}\phi(x_1,x_2,\dots,x_n).
\]
:::

::: proof [@解析 的证明]
现定义$z_m=e^{2\pi i(a_mt-b_m)}$，
\[
f(t)=1+z_1+z_2+\dots+z_n,
\]
则只需证明
\[
L=\limsup_{t\to\infty}|f(t)|=n+1.
\]
对于任意$k\in\mathbb{N}$，均有整数$C_{r_1,r_2,\dots,r_k}$使得：
\[
[f(t)]^k=\sum_{\substack{r_1,r_2,\dots,r_k\ge0\\r_1+r_2+\dots+r_k\le k}}C_{r_1,r_2,\dots,r_k}z_1^{r_1}z_2^{r_2}\dots z_n^{r_n}.
\]
根据 @积分引理 可知
\[
L=\lim_{k\to+\infty}\lim_{T\to+\infty}\left(\frac1T\int_{T_0}^T|f(t)|^{2k}\mathrm dt\right)^{1/2k},
\]
所以我们希望通过计算右侧积分来证明$L=n+1$：
\[
\int_{T_0}^T|f(t)|^{2k}\mathrm dt=\sum_{r_1,r_2,\dots,r_k}\sum_{r_1',r_2',\dots,r_k'}C_{r_1,r_2,\dots,r_k}C_{r_1',r_2',\dots,r_k'}\int_{T_0}^Tz_1^{r_1-r_1'}z_2^{r_2-r_2'}\cdots z_n^{r_n-r_n'}\mathrm dt.
\]
根据$a_1,a_2,\dots,a_n$的$\mathbb{Z}$线性无关性，可知右侧积分在所有$r_m-r_m'$为零时取值$T-T_0$，
反之则有界，所以有：
\[
\lim_{T\to+\infty}\frac1T\int_{T_0}^T|f(t)|^{2k}\mathrm dt=\sum_{r_1,r_2,\dots,r_k}C_{r_1,r_2,\dots,r_k}^2=\int_{[0,1]^n}|g(x_1,x_2,\dots,x_n)|^{2k}\mathrm dx_1\mathrm dx_2\cdots\mathrm dx_n,
\]
其中
\[
g(x_1,x_2,\dots,x_n)=1+e^{2\pi ix_1}+e^{2\pi ix_2}+\dots+e^{2\pi ix_n}.
\]
由于$g(0,0,\dots,0)=n+1$且$|g(x_1,x_2,\dots,x_n)|\le n+1$在$[0,1]^n$中成立，
所以结合 @积分引理 便得：
\[
L=\lim_{k\to+\infty}\left(\int_{[0,1]^n}|g(x_1,x_2,\dots,x_n)|^{2k}\mathrm dx_1\mathrm dx_2\cdots\mathrm dx_n\right)^{1/2k}=n+1.
\]
故定理得证。
:::

## 推论

::: corollary
取$n=1$，如果$1,\alpha_1,\cdots,\alpha_m$在$\mathbb Z$线性无关，
则$(\{q\alpha_1\},\cdots,\{q\alpha_m\})\in[0,1)^m$稠密。
:::

```terms
Kronecker 逼近定理:
  en: Kronecker's approximation theorem
  de: Kroneckerscher Approximationssatz
  fr: théorème d'approximation de Kronecker
```
