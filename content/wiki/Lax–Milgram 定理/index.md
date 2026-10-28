---
title: Lax–Milgram 定理
categories: [泛函分析]
navboxes: [泛函分析]
---

<problems>
- 引言中双线性型 $B[u,v]$ 的一阶项似乎应为 $b_i u_{x_i} v$，以与算子 $L$ 对应。
- “定理与证明”一节中证明 $R(A)$ 是闭集时，似乎应设 $Au_i$ 收敛于任意的 $w\in H$，再证明 $w=Au'\in R(A)$；现在的写法预先假定了极限属于 $R(A)$。
</problems>

在[[泛函分析]]中，
**[[Peter Lax|Lax]]–[[Arthur Milgram|Milgram]] 定理**是 [[Riesz 表示定理]]的推广。
它说的是，给定 [[Hilbert 空间]]上一个有界强制[[双线性型]]，
则该空间上任一[[有界线性泛函]]都可通过该双线性型由一个元素表出。和 [[Riesz 表示定理]]不同之处在于，
我们不要求这个双线性型是对称的。

Lax–Milgram 定理在函数空间和[[偏微分方程]]理论中有重要意义。
例如，对于[[椭圆方程]]
\[
\begin{cases}
  Lu=f,& x\in \Omega,\\
  u=0,&x\in\partial\Omega,
\end{cases}
\]
其中 $\Omega \subset \mathbb{R}^n$ 是有界开区域，$f \in L^2(\Omega) \subset H^{-1}(\Omega)$，
\[
Lu=-\sum_{i,j=1}^n (a_{ij}u_{x_i})_{x_j}+\sum_{i=1}^n b_iu_{x_i}+cu
\]
为满足一致椭圆条件的散度型[[椭圆算子]]，
定义双线性型
\[
B[u,v] =
\int_\Omega \left(
  \sum_{i,j=1}^n a_{ij}u_{x_i}v_{x_j}+
  \sum_{i=1}^n b_i u_{x_i}v_{x_i}+
  cuv
\right) dx,
\]
则满足 $B[u,v]=(f,v)_{L^2(\Omega)}$ 的
$u\in H_0^1(\Omega)$ 就是方程的 **[[弱解]]**。当 $a_{ij}$、$b_i$、$c$ 满足一定的光滑性条件时，
Lax–Milgram 定理告诉我们弱解是存在并且唯一的。

## 定理与证明

::: definition
设 $H$ 为（实）Hilbert 空间，$(\cdot,\cdot)$ 为其内积，
$\|\cdot\|=(\cdot,\cdot)^{1/2}$ 为其范数，
$B[\cdot,\cdot]:H\times H\to \mathbb{R}$ 为
其上一个双线性型。

- 如果存在常数 $\alpha>0$，对于任意 $u,v\in H$，$|B[u,v]|\le \alpha \|u\|\|v\|$，
  则称 $B$ 是**有界**的；

- 如果存在常数 $\beta>0$，对于任意 $u\in H$，$|B[u,u]|\ge \beta \|u\|^2$，则称 $B$ 是**强制**的。

:::

::: theorem [Lax–Milgram 定理]
条件如上，假设 $B$ 是有界强制的。则对 $H$ 上任意有界线性泛函 $f$，存在唯一的 $u\in H$ 使得
\[
B[u,v]=\langle f,v\rangle, \quad \forall v\in H,
\]
这里 $\langle \cdot,\cdot\rangle$ 是 $H$ 的对偶空间和 $H$ 间的配对。
:::

::: proof
对于固定的 $u$，$B[u,v]$ 是 $H$ 上的有界线性泛函。由 Riesz 表示定理，存在唯一的
$w\in H$ 使 $B[u,v]=(w,v)$。定义映射 $A\colon H\to H, u\mapsto w$。
由 Riesz 表示定理的唯一性、$B$ 的双线性，可得 $A$ 是单射、线性映射；
由 $B$ 的有界性，可得 $A$ 是有界线性算子。

下面证明 $R(A):=A(H)$ 是闭的。我们观察
\[
\begin{aligned}
  \beta\|u_m-u_n\|^2
  & \le |B[u_m-u_n,u_m-u_n]| \\
  & = |(Au_m-Au_n,u_m-u_n)| \\
  & \le \|Au_m-Au_n\| \|u_m-u_n\|.
\end{aligned}
\]
如果 $u_m\ne u_n$，则有 $\beta\|u_m-u_n\|\le  \|Au_m-Au_n\|$。如果
$u_m=u_n$，则自然有 $Au_m=Au_n$，从而 $\beta\|u_m-u_n\|\le\|Au_m-Au_n\|$
自动成立。

设 $Au_i\to Au\in H\ (i\in\mathbb{N})$，则 $\{Au_i\}$是 Cauchy 列，
由上面的不等式，这时 $\{u_i\}$ 也是 Cauchy 列，
从而存在 $u'\in H$ 使 $u_i\to u'$。
由于 $A$ 连续，则 $Au=Au'\in R(A)$。故 $R(A)$ 是 $H$ 的闭子空间。

下面证明 $R(A)=H$。为此用反证法，设 $u\in R(A)^\bot, u\ne 0$。则 $0=(Au,u)=B[u,u]\ge \beta\|u\|^2$。
这和 $u\ne 0$ 矛盾。所以 $R(A)=H$。

对于 $H$ 上任何一个有界线性泛函 $f$，由 Riesz 表示定理，
存在唯一的 $u$ 使 $\langle f,v\rangle=(u,v)$。
则 $B[A^{-1}u,v]=(u,v)=\langle f,v\rangle$ 即为所求，其中 $A^{-1}u$ 也是唯一的。
:::

```terms
Lax–Milgram 定理:
  en: Lax–Milgram theorem
  fr: théorème de Lax–Milgram
  de: Satz von Lax–Milgram
```
