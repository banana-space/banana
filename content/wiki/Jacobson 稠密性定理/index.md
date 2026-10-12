---
title: Jacobson 稠密性定理
categories: [一般环论, 模论]
---

**Jacobson 稠密性定理**指的是，如一个模半单，
则环本身在环关于它的双中心化子当中稠密。

## 陈述与证明

::: theorem
$R$ 是[[环]]，$M$ 是[[半单模|半单]]左 $R$-模。
令 $R'=R'(M)=\operatorname{End}_R(M)$，即 $R$ 在
$\operatorname{End}_\mathbb{Z}(M)$ 中的[[中心化子]]；
再令 $R''=R''(M)=\operatorname{End}_{R'}(M)$。
则对任意 $f\in R''$ 以及 $m_1,\ldots,m_n\in M$，存在
$r\in R$，使得 $f(m_i)=rm_i$，$i=1,\ldots,n$。
:::

::: proof
先证 $n=1$ 情形，即只有一个元素 $m$。由于 $M$ 半单，
子模 $Rm\subseteq M$ 为直和项，故存在投影映射 $p\in\operatorname{End}_R(M)$，
即 $\operatorname{im}(p)=Rm$，$p|_{Rm}=\operatorname{id}_{Rm}$。
现在 $f\in R''$，故 $f\circ p=p\circ f$，
\[
f(m) = f(p(m)) = p(f(m)) \in Rm,
\]
于是存在 $r\in R$，$f(m)=rm$。

再将一般命题化归到 $n=1$ 情形。一般情况下，考虑
\[
m = \left(
\begin{matrix}
  m_1 \\
  \vdots \\
  m_n
\end{matrix}
\right)\in M^n.
\]
利用 $\operatorname{End}_\mathbb{Z}(M^n)=\mathrm{M}_n(\operatorname{End}_\mathbb{Z}(M))$
作矩阵具体计算，不难发现 $R'(M^n)$ 就是 $\mathrm{M}_n(R')$，
而 $R''(M^n)$ 是元素在 $R''$ 中的标量矩阵，等于 $R''$。
利用 $n=1$ 时结论，存在 $r\in R$，$f(m)=rm$，而这就是
$f(m_i)=rm_i$，$i=1,\ldots,n$。
:::

::: remark
按定理中的记号，这里有自然同态 $R\to R''$。如将 $R''$
视为 $M^M$ 的子集，赋予[[积拓扑]]，定理就是在说该自然同态的像集稠密。
:::

## 推论

沿用定理中的记号。

::: corollary
如果 $M$ 作为 $R'$-模有限生成，定理推出 $R\to R''$ 是满射。
:::

::: corollary
$k$ 是域，$V$ 是 $k$ 上有限维线性空间，$R$
是 $\operatorname{End}_k(V)$ 的[[半单环|半单]]子代数，则 $R=R''$。
:::

::: proof
把定理中的模取为 $V$。由于 $R$ 半单，$V$ 是半单左 $R$-模。
显然 $R'$ 也是 $k$ 上代数，故 $V$ 在 $R'$ 上有限生成，
从而 $R\to R''$ 是满射；依定义 $R$ 在 $V$ 上的作用忠实，
故它也是单射；从而 $R=R''$。
:::

```terms
Jacobson 稠密性定理:
  en: Jacobson density theorem
  de: Dichtheitssatz von Jacobson
  fr: théorème de densité de Jacobson
```
