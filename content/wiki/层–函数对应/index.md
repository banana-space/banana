---
title: 层–函数对应
categories: [代数几何]
---

::: convention
在本文中，

- $\mathbb{F}_q$ 是 $q$ 元[[有限域]]，$p$ 是其[[特征 (代数)|特征]]，
  $\mathbb{F}$ 是选定的[[代数闭包]]。
- $\ell$ 是不等于 $p$ 的[[素数]]，$\mathbb{Z}_\ell$、$\mathbb{Q}_\ell$
  表示 [[p 进数|$\ell$ 进数]]，$\overline{\mathbb{Q}_\ell}$
  表示 $\mathbb{Q}_\ell$ 的[[代数闭包]]。

:::

**层–函数对应**，或称**层–函数字典**，
指给 $\mathbb{F}_q$-[[代数簇]] $X_0$ 上的
$\ell$ 进[[平展景|平展]][[层]]或 [[Weil 层]]赋予
$X_0(\mathbb{F}_q)$ 上的函数的一种典范方法，大体上只记录
Frobenius 态射的[[迹]]。

## 定义

::: definition [层–函数对应]
设 $\Lambda$ 为 $\mathbb{Z}/\ell^n$-代数，或 $\mathbb{Q}_\ell$
的[[代数扩张]]，或 $\mathbb{Z}_\ell$ 在其中的整闭包；
或更一般地，设 $\Lambda$ 为 $\mathbb{Z}_\ell$-代数，
带有在 $\mathbb{Z}_\ell$ 上相对离散的凝聚态结构。
对 $\mathbb{F}_q$-代数簇 $X_0$，以 $\mathsf{D}(X_0;\Lambda)$ 表示
$X_0$ 上的 $\Lambda$-[[完美复形]]值 [[Weil 层]]的[[范畴]]。

**层–函数对应**指以下映射：
$$
\mathsf{D}(X_0;\Lambda)\to\operatorname{Fun}(X_0(\mathbb{F}_q);\Lambda)
$$
$$
(A,F_A)\mapsto(x\mapsto\operatorname{tr}(F_{A_x}))
$$
其中 $(A_x,F_{A_x})$ 指 $(A,F_A)$ 沿含入映射 $x\to X_0$
的上星拉回；由于 $x$ 是 $\operatorname{Spec}(\mathbb{F}_q)$，$A_x$ 是
$\Lambda$-完美复形，$F_{A_x}$ 是其自同构，
这里取出它的[[迹]]。
:::

## 性质

::: theorem [Grothendieck 迹公式]
对 $\mathbb{F}_q$-代数簇态射 $f\colon X_0\to Y_0$，定义
$f^*\colon\operatorname{Fun}(Y_0(\mathbb{F}_q);\Lambda)\to
\operatorname{Fun}(X_0(\mathbb{F}_q);\Lambda)$ 为沿 $f(\mathbb{F}_q)\colon
X_0(\mathbb{F}_q)\to Y_0(\mathbb{F}_q)$ 拉回函数；
定义 $f_!\colon\operatorname{Fun}(X_0(\mathbb{F}_q);\Lambda)\to
\operatorname{Fun}(Y_0(\mathbb{F}_q);\Lambda)$ 为沿 $f(\mathbb{F}_q)\colon
X_0(\mathbb{F}_q)\to Y_0(\mathbb{F}_q)$ 各纤维求和。
则层–函数对应与两边的 $f^*$、$f_!$ 交换。
:::

## 范畴论描述

本节中，[[范畴]]都指 [[$(\infty,1)$-范畴]]，
[[$n$-范畴]]都指 [[$(\infty,n)$-范畴]]。

层–函数对应可用一般[[六函子理论]]中的[[核 $2$-范畴]]描述。“函数”
其实是 Frobenius 在核 $2$-范畴中的[[迹 (范畴论)|迹]]。

::: proposition {@tr=fun}
设 $\mathcal{C}$ 是有有限极限的小范畴，
$\mathcal{D}\colon\mathsf{Span}(\mathcal{C})\to\mathsf{Cat}$
是三函子理论。设 $X$ 是 $\mathcal{C}$ 中的对象，
$f\colon X\to X$ 是其自映射；以 $X^f$ 记 $f$ 的不动点，
即 $\operatorname{id}_X$ 与 $f$ 的[[等子]]。

考虑函子 $f_!\colon\mathcal{D}(X)\to\mathcal{D}(X)$
在 $\mathcal{D}$ 的[[核 $2$-范畴]] $\mathsf{K}_{\mathcal{D}}$
中对应的态射 $(\operatorname{id}_X,f)_!(\mathbb{1}_X)\in\mathcal{D}(X\times X)
=\operatorname{Hom}_{\mathsf{K}_{\mathcal{D}}}(X,X)$。则此态射的迹为
$(X^f)_!(\mathbb{1}_{X^f})\in\mathcal{D}(\mathrm{pt})=
\operatorname{Hom}_{\mathsf{K}_{\mathcal{D}}}(\mathrm{pt},\mathrm{pt})$，
这里重载 $X^f$ 为到终对象的映射 $X^f\to\mathrm{pt}$。
:::

::: proof
回忆对称幺半范畴中态射 $T\colon X\to X$ 的迹定义为
$$
\mathbb{1}\to X\otimes X^\vee\xrightarrow{T\otimes\operatorname{id}_{X^\vee}}
X\otimes X^\vee\to\mathbb{1}
$$
由于 $\mathsf{K}_{\mathcal{D}}$ 的对象都通过 $\Delta_!\mathbb{1}$ 自对偶，
命题中的迹是下图沿最下一路从左到右做上星下叹；
\[
\begin{tikzcd}
  &&&X^f\ar[ld]\ar[rd]&&&\\
  &&X\ar[ld,"\operatorname{id}_X"']\ar[rd,"\Delta_X"]&&X\ar[ld,"{(f,\operatorname{id}_X)}"']\ar[rd,"\operatorname{id}_X"]&&\\
  &X\ar[ld]\ar[rd,"\Delta_X"]&&X\times X\ar[ld,"\operatorname{id}_X\times\operatorname{id}_X"']\ar[rd,"f\times\operatorname{id}_X"]&&X\ar[ld,"\Delta_X"']\ar[rd]&\\
  \mathrm{pt}&&X\times X&&X\times X&&\mathrm{pt}
\end{tikzcd}
\]
由基变换，此即
$(X^f)_!(X^f)^*\mathbb{1}_\mathrm{pt}=(X^f)_!(\mathbb{1}_{X^f})\in\mathcal{D}(\mathrm{pt}).$
:::

::: remark [层–函数对应]
设 $X$、$Y$ 为对称幺半 $2$-范畴 $\mathcal{C}$ 的可对偶对象，
$T\colon X\to X$、$S\colon Y\to Y$ 为自映射，
$a$ 是 $(X,T)$ 到 $(Y,S)$ 的松态射，即有 $a\colon X\to Y$
附带 $2$-态射
\[
\begin{tikzcd}
  X\ar[r,"T"]\ar[d,"a"']&X\ar[d,"a"]\ar[ld,Rightarrow]\\
  Y\ar[r,"S"']&Y
\end{tikzcd}
\]
并设 $a\colon X\to Y$ 有右伴随 $a^R\colon Y\to X$。
则在 $\operatorname{Hom}_{\mathcal{C}}(\mathbb{1},\mathbb{1})$ 中有自然映射
$\operatorname{tr}(a)\colon\operatorname{tr}(T)\to\operatorname{tr}(S)$ 构造如下：
\[
\begin{tikzcd}
  &X\otimes X^\vee\ar[r,"T\otimes\operatorname{id}_{X^\vee}"]\ar[dd,"a\otimes(a^R)^\vee"']&X\otimes X^\vee\ar[dd,"a\otimes(a^R)^\vee"]\ar[ldd,Rightarrow]\ar[rd]&\\
  \mathbb{1}\ar[rd]\ar[ru]&&&\mathbb{1}\\
  &Y\otimes Y^\vee\ar[r,"S\otimes\operatorname{id}_{Y^\vee}"']&Y\otimes Y^\vee\ar[ru]&
\end{tikzcd}
\]
其中左右两个三角形的 $2$-态射分别由严格交换图表
\[
\begin{tikzcd}
  \mathbb{1}\ar[r]\ar[d]&X\otimes X^\vee\ar[d,"a\otimes\operatorname{id}_{X^\vee}"]\\
  Y\otimes Y^\vee\ar[r,"{\operatorname{id}_Y}\otimes a^\vee"']&Y\otimes X^\vee
\end{tikzcd}
\]
与
\[
\begin{tikzcd}
  X\otimes Y^\vee\ar[r,"{\operatorname{id}_X}\otimes a^\vee"]\ar[d,"a\otimes\operatorname{id}_{X^\vee}"']&X\otimes X^\vee\ar[d]\\
  Y\otimes Y^\vee\ar[r]&\mathbb{1}
\end{tikzcd}
\]
取伴随得到。

特别地，在 @tr=fun 的条件下取 $Y=\mathrm{pt}$，
则松态射 $a\colon(X,f^*)\to(\mathrm{pt},\operatorname{id}_\mathrm{pt})$ 可由
$A\in\mathcal{D}(X)=\operatorname{Hom}_{\mathsf{K}_{\mathcal{D}}}(X,\mathrm{pt})$
以及 $\mathcal{D}(X)$ 中的映射 $f^*A\to A$ 给出。
如它有右伴随，则它给出 $\mathcal{D}(\mathrm{pt})$ 中的映射
$\operatorname{tr}(A)\colon(X^f)_!(\mathbb{1}_{X^f})\to\mathbb{1}_\mathrm{pt}$。
把六函子理论 $\mathcal{D}$ 取成 $\mathbb{F}$ 上代数簇的
$\ell$ 进平展层，$f$ 取成 $X=X_0\otimes_{\mathbb{F}_q}\mathbb{F}$
的几何 Frobenius，则 Weil 层自带同构 $f^*A\cong A$，
且总是满足此右伴随条件。此时 $X^f=X_0(\mathbb{F}_q)$，
$\operatorname{Hom}_{\mathcal{D}(X^f)}((X^f)_!(\mathbb{1}_{X^f}),\mathbb{1}_\mathrm{pt})
=\operatorname{Fun}(X_0(\mathbb{F}_q),\Lambda)$，上述构造给出的 $\operatorname{tr}(A)$
就是层–函数对应。
:::

```terms
层–函数对应:
  en: sheaf-function correspondence
```
