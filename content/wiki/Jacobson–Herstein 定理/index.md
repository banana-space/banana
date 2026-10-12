---
title: Jacobson–Herstein 定理
aliases: [Jacobson-Herstein 定理]
categories: [一般环论]
---

Jacobson–Herstein 定理是[[环]][[交换环|交换]]性的一种判别。

## 定理与证明

::: theorem
环 $R$ 交换，当且仅当对任意 $x,y\in R$，都存在整数 $n>1$，
使得 $(xy-yx)^n=xy-yx$。
:::

以下用“交换子”指形如 $xy-yx$ 的元素，“有限阶元”指乘法有限阶元，
即某个次方等于 $1$ 的元素。

::: proof
以 $J$ 记 $R$ 的 [[Jacobson 根]]。如果每个交换子 $c$
都属于 $J$，则对 $n>1$ 都有 $1-c^{n-1}\in R^\times$，
所以只要 $c^n=c$ 就有 $c=0$；故只需证每个交换子都属于 $J$。
由于
$$
J=\bigcap_{M\,是单左\,R\text{-}模}\operatorname{Ann}(M),
$$
故只需对每个[[单模|单]]左 $R$-模 $M$ 证明每个交换子都属于
$\operatorname{Ann}(M)$，即只需证每个 $R/\operatorname{Ann}(M)$
都是交换环。把 $R$ 换成 $R/\operatorname{Ann}(M)$，可设
$\operatorname{Ann}(M)=0$，即 $R$ 忠实作用在其单左模 $M$ 上。
以下说明这种情况下 $R$ 必须是除环。

记 $D=\operatorname{End}_R(M)$，则由 [[Schur 引理]]，
$D$ 为[[除环]]。如果 $\dim_DM>1$，
取 $\alpha,\beta\in M$ 在 $D$ 上线性无关。
取 $f,g\in\operatorname{End}_D(M)$ 使得 $f(\alpha)=\beta$，
$f(\beta)=0$，$g(\alpha)=\alpha$，$g(\beta)=0$。由
[[Jacobson 稠密性定理]]，存在 $x,y\in R$，使得它们在
$\alpha,\beta\in M$ 的作用分别与 $f,g$ 相同。
这样 $(xy-yx)\alpha=\beta$，$(xy-yx)\beta=0$，
显然不可能对 $n>1$ 有 $(xy-yx)^n=xy-yx$，矛盾！于是
$\dim_DM=1$，再由 Jacobson 稠密性定理易知
$R=\operatorname{End}_D(M)$ 为除环。

这样条件就是在说，每个交换子要么为 $0$，要么为有限阶元。
现在如果 $R$ 为特征 $0$，交换子必须为 $0$：如果
$xy-yx$ 是有限阶元，那么 $2(xy-yx)=(2x)y-y(2x)$ 也是有限阶元，
显然不可能。于是特征 $0$ 情形就证完了。下设 $R$ 为特征 $p$。

现如存在有限阶元 $a$ 不在中心里，则用以下 Herstein
引理取出非零交换子 $c$，使得 $cac^{-1}$ 是 $a$ 的幂但不等于 $a$。
由条件，$c$ 也有限阶，于是 $a$ 和 $c$ 在 $R^\times$
中生成非交换有限群。这样 $\mathbb{F}_p[a,c]\subseteq R$
是有限非交换子环，与 [[Wedderburn 小定理]]矛盾！
故有限阶元都在中心里。由条件，这说明交换子都在中心里。
现如果有不交换的 $x,y\in R$，由
$$
x(xy-yx)=x(xy)-(xy)x
$$
知 $x$ 是两个交换子相除，也在中心里，矛盾！故 $R$ 交换。
:::

::: lemma [Herstein]
设 $D$ 为特征 $p$ 的除环，$a\in D$ 是有限阶元，不在[[中心]]里。
则存在非零交换子 $c\in D$，使得 $cac^{-1}$ 是 $a$ 的幂，
但不等于 $a$。
:::

::: proof
记 $F=\mathbb{F}_p[a]$，则 $F\subseteq D$ 是有限子域，设其阶为 $q$。
考虑 $D$ 上的 $F$-线性变换
\[
\lambda(x) = ax,\,\rho(x) = xa,\,
\delta(x) = \lambda(x) - \rho(x) = ax-xa.
\]
由 [[Fermat 小定理]]，$\lambda^q-\lambda=\rho^q-\rho=0$。
由结合律，$\lambda$ 与 $\rho$ 交换，故由 $q$ 是 $p$ 的幂有
\[
\delta^q - \delta = (\lambda - \rho)^q - (\lambda - \rho)
= \lambda^q - \rho^q - \lambda + \rho = 0.
\]
而 $F$ 上多项式 $T^q-T=\prod_{t\in F}(T-t)$
分裂为互异一次式的乘积，故 $\delta$ 有特征子空间分解
\[
D = \bigoplus_{t\in F} D_t,
\]
其中 $D_t=\{x\in D\mid\delta(x)=tx\}$。由于 $a$ 不在中心里，
$\delta\ne0$，它有非零特征值。设 $t\in F^\times$
是个非零特征值，$x\in D^\times$ 是个特征向量，则 $ax-xa=tx$，
即 $xax^{-1}=a-t$。令 $c=ax-xa=tx$，则
\[
cac^{-1} = txax^{-1}t^{-1} = t(a-t)t^{-1}
= a - t \ne a.
\]
由于 $F$ 是[[有限域]]，其乘法群循环，$a$ 和 $cac^{-1}$
显然在 $F^\times$ 中同阶，故它们互相被对方生成，即 $cac^{-1}$
是 $a$ 的幂。此 $c$ 即为所求。
:::

以下显然推论的特殊情形常用作抽象代数习题：

::: corollary
如环 $R$ 满足对每个 $r\in R$ 都存在整数 $n>1$ 使得 $r^n=r$，
则 $R$ 交换。
:::

```terms
Jacobson–Herstein 定理:
  en: Jacobson–Herstein theorem
  de: Satz von Jacobson–Herstein
  fr: théorème de Jacobson–Herstein
```
