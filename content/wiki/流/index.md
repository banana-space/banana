---
title: 流
categories: [微分几何]
---

**流**是微分几何中的概念，
直观地说，给定[[微分流形]]上一个[[向量场]]，
会有唯一一族流形的自同构（构成单参数子群），
使得此向量场是这一族自同构的无穷小生成元。
这一族自同构即称为流（有时也将一点在这一族自同构下的像称为流）。

在这样的观点之下，
微分流形的所有自同构构成一个（无穷维的）[[Lie 群]]，
此流形上所有向量场则构成它的 Lie 代数，
上述对应则是[[指数映射]]。

不过上面的直观未必严格，因为这一族自同构由[[微分方程]]的解给出，
而相应的微分方程未必有解。
找出微分方程有解的区域，则会有相应的一族映射（虽然未必是自同构），
这即是**局部流**。

在微分几何中流很常用，例如一个[[张量场]]（例如向量场）对于一个向量场的
[[Lie 导数]]就是它在这个向量场生成的流下的变化率。

## 定义

我们首先引入较强的流的定义。

::: definition [流]
对[[光滑流形]] $M$ 和它上面的向量场 $X$，
一族 $M$ 的自同构 $\{\theta_t\}_{t \in \mathbb{R}}$
称为向量场 $X$ 的**流**，如果：

- $\theta_t$ 是 $\mathbb{R} \to \operatorname{Aut}(M)$
  的同态，
  \[
  \theta_t ( \theta_s(p) ) =
  \theta_{t+s}(p), \quad \forall p \in M,
  \]
  且它诱导的映射 $\mathbb{R} \times M \to M$ 光滑。
  即这一族自同态构成了 $\operatorname{Aut}(M)$
  的[[单参数子群]]。

- $X$ 是此单参数子群的[[无穷小生成元]]，即
  \[
  X(p) = \frac{d \theta_t(p)}{dt}|_{t = 0},
  \quad \forall p \in M.
  \]

:::

::: remark
上面的定义可以推广到 [[Banach 流形]]，相应的理论是类似的。
:::

然而这样一族映射未必存在，例如：

::: example
取 $M = \mathbb{R}$，$X(x) = x^2$，
则可以看出相应的流是方程
\[
\frac{d\theta_t(x)}{dt} = (\theta_t(x))^2,
\quad \theta_0(x) = x
\]
的解，并不是对所有的 $t$ 都存在。
:::

不过（光滑的）常微分方程的解总是局部存在，
因此我们引入**局部流**的概念。

::: definition [局部流、流域]
对向量场 $X$，给定 $\mathbb{R} \times M$ 中包含
$0 \times M$ 的开集 $\mathcal{D}$，称为**流域**，
向量场 $X$ 在此流域 $\mathcal{D}$
上的**局部流**为光滑映射
$\theta \colon \mathcal{D} \to M$，满足

- $\theta(0, p) = p$，$\forall p \in M$。

- $\theta(t, \theta(s, p)) = \theta(t + s, p)$。
  对任意有定义的 $p \in M$，$t, s \in \mathbb{R}$ 成立。

:::

## 例子

[[Lie 代数]]到 [[Lie 群]]的[[指数映射]]即可通过流的方法构造。

::: example
设 $G$ 是 [[Lie 群]]，
$\mathfrak{g}$ 是它的 [[Lie 代数]]。
元素 $x \in \mathfrak{g}$ 对应于
$G$ 上的[[左不变向量场]] $X$。
则 $X$ 相应的流 $\theta_t$ 存在，且原点在流下的像
$\theta_t(e)$ 是（或者说定义为）指数映射 $\exp(tx)$。
:::

另一方面，通过类比也可以将 $M$ 的所有自同构视为一个 Lie 群，
$M$ 上的向量场视为它的 Lie 代数，则流相当于指数映射，
并满足相似的性质。

## 性质

由常微分方程理论，可以得到流的存在唯一性。

::: theorem [流的存在唯一性]
设 $X$ 是流形 $M$ 上的向量场，
则存在最大的流域 $\mathcal{D}\subset \mathbb{R} \times M$
与唯一的流
$\theta \colon \mathcal{D}\to M$ 对应于它。
如果流形 $M$ 是紧的，则流域可以取为 $\mathbb{R} \times M$，
即局部流成为真正的流。
:::

::: proof
可以看出 $\theta_t$ 满足条件当且仅当下面的常微分方程成立
（把局部坐标写出来，可以发现它确实是个常微分方程）：
\[
\frac{d\theta_t(p)}{dt} = X(\theta_t(p)),
\quad \forall t \in \mathbb{R}, p \in M.
\]
由常微分方程的解的存在唯一性，定理成立。
:::

正如上面所说，
流和[[指数映射]]有相似的性质
（或者说指数映射的性质由流的相应性质推出），例如

::: proposition
流的乘法交换子对应于相应向量场的 [[Lie 括号]]，
即对向量场 $X$、$Y$，设它们对应的（局部）流为
$\theta_X$、$\theta_Y$，则
\[
\frac{\partial^2 \theta_{X, s} \theta_{Y, t}
\theta_{X, -s} \theta_{Y, -t} (p)}
{\partial s \partial t}|_{s, t = 0}
= [X, Y](p).
\]
:::

```terms
流:
  en: flow
  de: Fluss :m
  fr: 'flot :m, coulée :f, courant :m'
  la: fluxus :m
无穷小生成元:
  en: infinitesimal generator
  fr: générateur infinitésimal
流域:
  en: flow domain
  fr: domaine de définition du flot
```
