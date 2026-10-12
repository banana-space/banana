---
title: 余等子
categories: [范畴论]
navboxes: [范畴论]
---

在[[范畴论]]中，**余等子**（或**右等子**）是一种[[万有构造]]，
是[[余核]]的推广。
在某个[[范畴]]中，给定图表
\[
\begin{tikzcd}
X \ar[r, shift left, "f"] \ar[r, shift right, "g"'] & Y \rlap{ ,}
\end{tikzcd}
\]
则大致来说，[[态射]] $f,g$ 的余等子是将 $Y$ 中
形如 $f(x)$ 和 $g(x)$ 的元素认同后得到的商对象。

例如，在[[集合范畴]]中，余等子可以写成
\[
Q=Y/{\sim},
\]
其中 $\sim$ 是由所有关系 $f(x)\sim g(x)$ 生成的[[等价关系]]。
在一般范畴中，则需要通过万有性质定义这一构造。

余等子的[[对偶]]是[[等子]]。

## 定义

::: definition [余等子] {@def-coequalizer}
在[[范畴]] $\mathcal{C}$ 中，给定图表
\[
\begin{tikzcd}
X \ar[r, shift left, "f"] \ar[r, shift right, "g"'] & Y \rlap{ .}
\end{tikzcd}
\]
若该图表存在[[余极限]]，
则该余极限称为 $f,g$ 的**余等子**。

具体来说，$f,g$ 的余等子是 $\mathcal{C}$ 中的对象 $Q$，
带有态射 $q\colon Y\to Q$，从而有图表
\[
\begin{tikzcd}
X \ar[r, shift left, "f"] \ar[r, shift right, "g"'] &
Y \ar[r, "q"] & Q \rlap{ ,}
\end{tikzcd}
\]
使得 $q\circ f=q\circ g$。
并且，对于任意对象 $Q'$ 及任意态射 $q'\colon Y\to Q'$，
若
\[
q'\circ f=q'\circ g,
\]
那么存在唯一态射 $h\colon Q\to Q'$，使得
\[
q'=h\circ q.
\]
即有交换图
\[
\begin{tikzcd}
X \ar[r, shift left, "f"] \ar[r, shift right, "g"'] &
Y \ar[r, "q"] \ar[dr, "q'"'] &
Q \ar[d, dashed, "h"] \\
&& Q' \rlap{ .}
\end{tikzcd}
\]
:::

余等子有时记为 $\operatorname{coeq}(f,g)$。
严格来说，余等子的资料包括对象 $Q$ 及态射 $q\colon Y\to Q$。

## 例子

::: example [两个相同态射的余等子]
若 $f=g$，则 $f,g$ 的余等子是 $Y$ 自身，
配备恒等态射
\[
q=\operatorname{id}_Y.
\]
:::

::: example [集合中的余等子]
设 $f,g\colon X\to Y$ 是集合之间的映射。
令 $\sim$ 为 $Y$ 上包含所有关系
\[
f(x)\sim g(x),\qquad x\in X
\]
的最小等价关系。
则商映射
\[
q\colon Y\to Y/{\sim}
\]
是 $f,g$ 的余等子。

事实上，映射 $q'\colon Y\to Q'$ 满足 $q'f=q'g$，
当且仅当它在每个等价类上取相同的值。
这恰好意味着 $q'$ 唯一地通过 $Y/{\sim}$ 分解。
:::

::: example [群作用的轨道集]
设[[群]] $G$ 作用在集合 $X$ 上。
考虑作用映射和投影映射
\[
a,p\colon G\times X\to X,
\qquad
a(g,x)=g\cdot x,\quad p(g,x)=x.
\]
它们在集合范畴中的余等子是[[轨道]]集
\[
X/G.
\]
余等子映射将每个元素送到它所在的轨道。
这里施加的关系正是
\[
g\cdot x\sim x.
\]
:::

::: example [余核]
设 $\mathcal{C}$ 具有[[零对象]]，
$f\colon X\to Y$ 是态射。
若 $f$ 与[[零态射]] $0\colon X\to Y$ 的余等子存在，
则它就是 $f$ 的[[余核]]。
因为余等子条件在此化为
\[
q\circ f=q\circ0=0.
\]
:::

::: example [Abel 群中的余等子]
在[[Abel 群范畴]] $\mathsf{Ab}$ 中，
设 $f,g\colon A\to B$ 是群同态。
则它们的余等子为
\[
Q=B/\operatorname{im}(f-g),
\]
配备自然的商同态 $q\colon B\to Q$。

这是因为群同态 $q'\colon B\to Q'$ 满足 $q'f=q'g$，
当且仅当它在 $\operatorname{im}(f-g)$ 上为零。
因此
\[
\operatorname{coeq}(f,g)=\operatorname{coker}(f-g).
\]
同样的描述也适用于[[向量空间范畴]]和一般的[[模范畴]]。
:::

::: example [模的相对张量积]
设 $R$ 是含幺环，$M$ 是右 $R$-模，$N$ 是左 $R$-模。
它们的**相对张量积** $M\otimes_R N$
可以在 Abel 群范畴中构造为余等子
\[
\begin{tikzcd}[column sep=large]
M\otimes_{\mathbb{Z}}R\otimes_{\mathbb{Z}}N
\ar[r, shift left, "u"]
\ar[r, shift right, "v"'] &
M\otimes_{\mathbb{Z}}N
\ar[r, "q"] &
M\otimes_R N,
\end{tikzcd}
\]
其中两个平行态射分别由 $M$ 的右作用和 $N$ 的左作用给出：
\[
\begin{aligned}
u(m\otimes r\otimes n)&=(mr)\otimes n,\\
v(m\otimes r\otimes n)&=m\otimes(rn).
\end{aligned}
\]

由 Abel 群中余等子的描述，有
\[
M\otimes_R N
=
\frac{M\otimes_{\mathbb{Z}}N}
{\left\langle
(mr)\otimes n-m\otimes(rn)
\mid m\in M,\ r\in R,\ n\in N
\right\rangle}.
\]
因此，相对张量积是在底层 Abel 群的张量积上
进一步施加平衡关系
\[
(mr)\otimes_R n=m\otimes_R(rn)
\]
得到的商群。

它的万有性质是：
对于任意 Abel 群 $P$，
从 $M\otimes_R N$ 到 $P$ 的群同态，
等价于满足
\[
b(mr,n)=b(m,rn)
\]
的双加性映射 $b\colon M\times N\to P$。
这样的映射称为 $R$-**平衡映射**。

若 $R$ 是交换环，则 $M\otimes_R N$ 还自然地是 $R$-模。
若 $R$ 是域，这就是通常的向量空间张量积。
:::

::: example [幺半范畴中的相对张量积]
设 $(\mathcal{C},\otimes,\mathbb{1},\alpha,l,r)$ 是[[幺半范畴]]，
$A$ 是其中的[[代数对象]]。
设 $M$ 是右 $A$-[[模对象]]，$N$ 是左 $A$-模对象，
其作用态射分别为
\[
\rho_M\colon M\otimes A\to M,
\qquad
\lambda_N\colon A\otimes N\to N.
\]
考虑两个态射
\[
u,v\colon(M\otimes A)\otimes N\to M\otimes N,
\]
其中
\[
u=\rho_M\otimes\operatorname{id}_N,
\qquad
v=(\operatorname{id}_M\otimes\lambda_N)
\circ\alpha_{M,A,N}.
\]
若它们的余等子存在，则将其称为 $M,N$ 在 $A$ 上的
**相对张量积**，记为 $M\otimes_A N$：
\[
\begin{tikzcd}[column sep=large]
(M\otimes A)\otimes N
\ar[r, shift left, "u"]
\ar[r, shift right, "v"'] &
M\otimes N
\ar[r, "q"] &
M\otimes_A N.
\end{tikzcd}
\]
:::

## 性质

::: proposition
若 $q\colon Y\to Q$ 是某对态射 $f,g$ 的余等子，
则 $q$ 是[[满态射]]。
:::

::: proof
事实上，若 $u,v\colon Q\to Z$ 满足 $u\circ q=v\circ q$，
则 $u,v$ 都是同一个态射 $Y\to Z$ 通过 $q$ 的分解。
由余等子万有性质中的唯一性，得到 $u=v$。
:::

```terms
余等子:
  en: coequalizer
  fr: coégalisateur :m
  de: Koequalizer :m
```
