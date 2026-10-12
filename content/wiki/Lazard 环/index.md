---
title: Lazard 环
categories: [代数群理论]
navboxes: [代数群理论]
---

::: convention
在本文中，

- 所有[[环]]都指[[交换环]]。
- 所有[[形式群律]]都指一维交换形式群律。

:::

**Lazard 环**由 [[Michel Lazard]] 引入，
是[[形式群律]]的分类环，换言之其上有个万有的形式群律。
它不典范地是[[整数环]]上可数个变元的[[多项式环]]。
由 [[Milnor–Quillen 定理]]，它典范同构于[[复配边环]]。

## 定义

::: definition {@thm:定义}
**Lazard 环**，通常记作 $L$，
是[[形式群律]]的分类环。具体地说，取自由变元
$\{c_{i,j}\}_{i,j\in\mathbb{Z}_+}$，记
$$
F(x,y)=x+y+\sum_{i,j}c_{i,j}x^iy^j\in
\mathbb{Z}[c_{i,j}][[x,y]];
$$
比较等式 $F(x,F(y,z))=F(F(x,y),z)$ 及 $F(x,y)=F(y,x)$
两边的各项系数，可得环 $\mathbb{Z}[c_{i,j}]$ 中的一族等式；
$L$ 就是 $\mathbb{Z}[c_{i,j}]$ 商去这些等式给出的关系。
依定义，对交换环 $R$，
$$
\operatorname{Hom}(L,R)=\{R\ 上形式群律\}.
$$
:::

::: remark
在 $F(x,y)=x+y+\sum_{i,j}c_{i,j}x^iy^j$ 中约定 $x,y$
均为 $-1$ 次，$c_{i,j}$ 为 $i+j-1$ 次，则 Lazard
环定义中的关系均为齐次等式，于是 Lazard 环自然地是[[分次环]]。
:::

## 计算

本节计算 Lazard 环的结构，即证明以下定理：

::: theorem [Lazard] {@lazard}
作为分次环，
$$
L\cong\mathbb{Z}[t_n]_{n\in\mathbb{Z}_+},
$$
其中 $t_n$ 为 $n$ 次。
:::

::: proof
考虑分次环 $\mathbb{Z}[b_n]_{n\in\mathbb{Z}_+}$，其中 $b_n$ 为 $n$ 次。
作万有坐标变换
$$
g(x)=x+\sum_nb_nx^{n+1}\in\mathbb{Z}[b_n][[x]].
$$
以 $g^{-1}$ 记 $g$ 的[[反函数]]，则
$g(g^{-1}(x)+g^{-1}(y))$ 显然是形式群律。由 $L$ 的定义，
这给出分次环同态 $\varphi\colon L\to\mathbb{Z}[b_n]_{n\in\mathbb{Z}_+}$。
分别以 $I$ 和 $J$ 记 $L$ 和 $\mathbb{Z}[b_n]_{n\in\mathbb{Z}_+}$
的正次数元组成的理想，则 $\varphi(I)\subseteq J=
(b_n)_{n\in\mathbb{Z}_+}$。对分次模 $M$，以 $M_n$ 记 $M$ 的
$n$ 次部分。于是由 @cocycle，可取一列
$t_n\in I$，使得 $t_n$ 为 $n$ 次，且被 $\varphi$
诱导的映射 $(I/I^2)_n\to(J/J^2)_n=\mathbb{Z} b_n$ 打到
$$
\begin{cases}
  pb_n,&n=p^d-1,\,p\ 为素数;\\
  b_n,&其它;
\end{cases}
$$
那么 $(I/I^2)_n=\mathbb{Z} t_n$。考虑从多项式环出发的映射
$\theta\colon\mathbb{Z}[t_n]_{n\in\mathbb{Z}_+}\to L$，下证 $\theta$
是同构。

- **满** 对 $n\in\mathbb{N}$ 归纳证明 $\theta$ 在 $n$
  次部分满。$n=0$ 时显然，因为由 @thm:定义 立得
  $L_0=\mathbb{Z}$。$n>0$ 时需证 $I_n$ 被映满。由归纳假设，
  $(I^2)_n$ 已经被低次元素的乘积映满，故只需证
  $(I/I^2)_n$ 被映满，而这由构造显然。

- **单** 只需证 $\varphi\circ\theta$ 单。由于
  $\mathbb{Z}[t_n]_{n\in\mathbb{Z}_+}$ 和 $\mathbb{Z}[b_n]_{n\in\mathbb{Z}_+}$ 都无挠，
  只需证 $\varphi\circ\theta$ 基变换到 $\mathbb{Q}$
  之后单。由于在 $\mathbb{Q}$ 上 $pb_n$ 可以生成 $b_n$，
  重复上面 $\theta$ 满的证明即可推出
  $(\varphi\circ\theta)_\mathbb{Q}$ 满。而
  $\mathbb{Q}[t_n]_{n\in\mathbb{Z}_+}$ 和
  $\mathbb{Q}[b_n]_{n\in\mathbb{Z}_+}$ 在各个次数上都是有限维线性空间，
  且维数相同，所以这就推出 $(\varphi\circ\theta)_\mathbb{Q}$
  单。

:::

::: lemma {@cocycle}
对任意正整数 $n$，$\varphi$ 诱导的映射
$(I/I^2)_n\to(J/J^2)_n=\mathbb{Z} b_n$ 是单射，像集为
$$
\begin{cases}
  p\mathbb{Z} b_n,&n=p^d-1,\,p\ 为素数;\\
  \mathbb{Z} b_n,&其它.
\end{cases}
$$
:::

::: proof
我们沿 [[Yoneda 对应]]理解 $(I/I^2)_n$；换言之，
任取交换群 $M$，考察 $\operatorname{Hom}((I/I^2)_n,M)$。
为此作分次环 $\mathbb{Z}\oplus M$，其中 $M$ 集中在 $n$ 次，
任两个 $M$ 中元素乘积为 $0$。于是由于 $L_0=\mathbb{Z}$，不难发现
$$
\operatorname{Hom}((I/I^2)_n,M)=
\operatorname{Hom}(L,\mathbb{Z}\oplus M)=
\{\mathbb{Z}\oplus M\ 上齐次形式群律\}.
$$
展开定义，知 $\mathbb{Z}\oplus M$ 上齐次形式群律都形如
$$
F(x,y)=x+y+\sum_{i=1}^nm_ix^iy^{n+1-i},
$$
其中
$$
m_i=m_{n+1-i},\,
\binom{n+1-i}{j}m_i=\binom{n+1-j}{i}m_j.
$$
另一方面，对 $m\in M$，考虑映射 $(J/J^2)_n\to M$，
$b_n\mapsto m$。依定义，它与 $\varphi$ 诱导的映射
$(I/I^2)_n\to(J/J^2)_n$ 之复合对应于形式群律
$$
((x-mx^{n+1})+(y-my^{n+1}))+
m((x-mx^{n+1})+(y-my^{n+1}))^{n+1}=
x+y+\sum_{i=1}^n\binom{n+1}{i}mx^iy^{n+1-i}.
$$
也就是说，在 Yoneda 对应下，映射
$(I/I^2)_n\to(J/J^2)_n$ 把 $m\in M=
\operatorname{Hom}((J/J^2)_n,M)$ 打到
$\left(m_i=\binom{n+1}{i}m\right)_{i=1}^n$。
以下对每个素数 $p$，用 [[Kummer 定理]]考察该映射在
$\mathbb{Z}_{(p)}$ 上的行为，即设 $M$ 为 $\mathbb{Z}_{(p)}$-模。
对 $n$ 分类讨论：

- **$n+1=p^d$** 此时 $m_{p^{d-1}}$ 决定所有 $m_i$。
  这是因为对 $i\le n+1-p^{d-1}$，
  $\binom{n+1-i}{p^{d-1}}\in\mathbb{Z}_{(p)}^\times$，
  而对 $i>n+1-p^{d-1}$，总有 $n+1-i\le n+1-p^{d-1}$。
  注意 $\binom{n+1}{p^{d-1}}\in p\mathbb{Z}_{(p)}^\times$，
  所以映射 $(I/I^2)_n\to(J/J^2)_n$ 在 $\mathbb{Z}_{(p)}$
  上是单射，像集为 $p\mathbb{Z}_{(p)}b_n$。

- **$n+1\ne p^d$** 记 $k=v_p(n+1)$，则
  $m_{p^k}$ 决定所有 $m_i$。首先它决定所有
  $m_{p^\ell}$，$\ell>k$，因为
  $\binom{n+1-p^\ell}{p^k}\in\mathbb{Z}_{(p)}^\times$。
  其次对任意 $i\in\{1,\ldots,n\}$，$i$ 和 $n+1-i$
  中至少有一个的 $p$ 进制展开中 $p^\ell$ 项非零，
  对某个 $\ell\ge k$，不妨设 $n+1-i$ 如此；这样就有
  $\binom{n+1-i}{p^\ell}\in\mathbb{Z}_{(p)}^\times$，
  即 $m_{p^\ell}$ 决定 $m_i$。注意
  $\binom{n+1}{p^k}\in\mathbb{Z}_{(p)}^\times$，
  所以映射 $(I/I^2)_n\to(J/J^2)_n$ 在 $\mathbb{Z}_{(p)}$
  上是同构。

合起来即得欲证。
:::

由 @lazard 的证明立得

::: corollary
$\varphi_\mathbb{Q}$ 是同构。换言之，对
$\mathbb{Q}$-代数 $R$ 及其上形式群律 $F$，存在唯一
$f(x)\in R[[x]]$，首项为 $x$，使得
$$
F(x,y)=f(f^{-1}(x)+f^{-1}(y)).
$$
也就是说 $\mathbb{Q}$-代数上的形式群律都典范同构于
$\widehat{\mathbb{G}_a}$。
:::

@lazard 还有如下不平凡的推论：

::: corollary
形式群律可沿满射提升。具体地说，对环满射 $q\colon R\to S$
以及 $S$ 上形式群律 $F$，存在 $R$ 上形式群律 $\tilde{F}$，
使得 $q(\tilde{F})=F$。
:::

```terms
Lazard 环:
  en: Lazard ring
```
