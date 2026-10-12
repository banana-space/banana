---
title: Cartier 算子
aliases: [Cartier 同构]
categories: [上同调论]
notices:
  - name: 问题
    items:
      - “例子”“推广”各节需要扩充（例如 Cartier 算子与曲线情形的旧定义的关系、导出推广）。
---

::: convention
在本文中，

- 所有环都指[[交换环]]。
- 固定素数 $p$，所有环和概形都在 $\mathbb{F}_p$ 上。

:::

**Cartier 算子**是从特征 $p$ 概形之 Frobenius 扭转的
de Rham 复形到其本身的[[代数 de Rham 上同调]]的同态。
它在概形光滑时是同构，给出特征 $p$ 光滑概形的代数
de Rham 上同调的简单描述。

## 定义

::: proposition {@Cart}
$R\to A$ 是环同态。记
$A^{(p)}=A\otimes_{R,F_R}R$，即 $A$ 沿 $R$
的 [[Frobenius 同态]]基变换，并考虑 $R$-代数同态
$F_{A/R}\colon A^{(p)}\to A$，定义为
$F_{A/R}(a\otimes1)=a^p$，即[[相对 Frobenius]]。则有
$A$ 在 $R$ 上的 de Rham 复形 $\Omega_{A/R}^\bullet$
的微分沿 $F_{A/R}$ 为 $A^{(p)}$-线性，
且存在唯一 $A^{(p)}$-分次代数同态
$$
\operatorname{Cart}\colon\Omega_{A^{(p)}/R}^\bullet
\to H^\bullet(\Omega_{A/R}^\bullet),
$$
满足 $\operatorname{Cart}(a\otimes1)=[a^p]$、
$\operatorname{Cart}(\mathrm{d}(a\otimes1))
  =[a^{p-1}\mathrm{d}a]$。不严格地说，
$\operatorname{Cart}$ 的 $i$ 次部分等于 $F_{A/R}$ 在
$i$ 阶[[微分模]]诱导的映射除以 $p^i$。
:::

::: proof
由 $F_{A/R}$ 的定义以及 $\mathrm{d}(a^p)=
  pa^{p-1}\mathrm{d}a=0$ 便知复形 $\Omega_{A/R}^\bullet$
为 $A^{(p)}$-线性，且 $F_{A/R}(A^{(p)})\subseteq
  H^0(\Omega_{A/R}^\bullet)$，这样便确定了
$0$ 次部分。由于 $i$ 阶微分模是微分模的
$i$ 次外积，只需验证 $1$ 次部分良定义且唯一。
依定义 $A^{(p)}$ 作为 $R$-代数由形如 $a\otimes1$ 的元素生成，
所以 $\Omega_{A^{(p)}/R}$ 作为 $A^{(p)}$-模由形如
$\mathrm{d}(a\otimes1)$ 的元素生成，故有唯一性。
为验证良定义性，由[[微分模]]的万有性质，只需验证
$A^{(p)}$ 到 $A^{(p)}$-模 $H^1(\Omega_{A/R}^\bullet)$
的映射 $a\otimes1\mapsto[a^{p-1}\mathrm{d}a]$ 是 $R$-导子。
为此又只需验证 $A$ 到 $H^1(\Omega_{A/R}^\bullet)$
的映射 $a\mapsto[a^{p-1}\mathrm{d}a]$ 是沿 $F_R$
线性的导子，其中 $H^1(\Omega_{A/R}^\bullet)$
以 $F_A$ 视为 $A$-模。这样就简单了，我们逐条公理验证。

- **加性**
  $$
  a+b\mapsto[(a+b)^{p-1}\mathrm{d}(a+b)]=
  \left[\mathrm{d}\left(\frac{(a+b)^p-a^p-b^p}{p}\right)
  +a^{p-1}\mathrm{d}a+b^{p-1}\mathrm{d}b\right]
  =[a^{p-1}\mathrm{d}a]+[b^{p-1}\mathrm{d}b].
  $$

- **Leibniz 法则**
  $$
  ab\mapsto[(ab)^{p-1}\mathrm{d}(ab)]=
  a^p[b^{p-1}\mathrm{d}b]+b^p[a^{p-1}\mathrm{d}a]=
  F_A(a)[b^{p-1}\mathrm{d}b]+
  F_A(b)[a^{p-1}\mathrm{d}a].
  $$

- **沿 $F_R$ 线性**
  $$
  ra\mapsto[(ra)^{p-1}\mathrm{d}(ra)]=
  r^p[a^{p-1}\mathrm{d}a]=
  F_R(r)[a^{p-1}\mathrm{d}a].
  $$

:::

::: definition
环同态 $R\to A$ 的
**Cartier 算子**指的是 @Cart
中的分次代数同态 $\operatorname{Cart}$，也记作
$\operatorname{Cart}_{A/R}$。
由唯一性不难发现它和 $R$ 与 $A$ 的局部化都交换。
于是对[[概形]]态射 $X\to S$，
同样考虑 $X^{(p)}=X\times_{S,F_S}S$ 和 $F_{X/S}\colon
  X\to X^{(p)}$，则各个仿射开集的 Cartier 算子可以粘成
$\mathcal{O}_{X^{(p)}}$-分次代数同态
$$
\operatorname{Cart}_{X/S}\colon
\Omega_{X^{(p)}/S}^\bullet\to
H^\bullet((F_{X/S})_*\Omega_{X/S}^\bullet),
$$
称为 $X\to S$ 的 **Cartier 算子**。
:::

::: remark
由于历史原因，Cartier 算子也常记作 $C^{-1}$。
:::

## 性质

先是一些自然性。

::: proposition
$R\to A$、$R\to R'$ 是环同态，记 $A'=A\otimes_RR'$，
则 $A'^{(p)}=A'\otimes_{R',F_{R'}}R'
  =A\otimes_RR'\otimes_{R',F_{R'}}R'
  =A\otimes_{R,F_R}R\otimes_RR'=A^{(p)}\otimes_RR'$。
此时有交换图表
\[
\begin{tikzcd}
  \Omega_{A^{(p)}/R}^\bullet\otimes_RR'
  \ar[rr,"\operatorname{Cart}_{A/R}\otimes_RR'"]
  \ar[dd,equal]&&
  H^\bullet(\Omega_{A/R}^\bullet)\otimes_RR'\ar[d]\\
  &&H^\bullet(\Omega_{A/R}^\bullet\otimes_RR')
  \ar[d,equal]\\
  \Omega_{A'^{(p)}/R'}^\bullet
  \ar[rr,"\operatorname{Cart}_{A'/R'}"']&&
  H^\bullet(\Omega_{A'/R'}^\bullet)
\end{tikzcd}
\]
:::

::: proof
由于映射都是 $A'^{(p)}$-分次代数同态，
而高阶微分模是一阶微分模的外积，
故只需对左上角一次部分的一组生成元验证。
显然两条路都把 $\mathrm{d}(a\otimes1)\otimes1$ 映射到
$[(a\otimes1)^{p-1}\mathrm{d}(a\otimes1)]$。
:::

::: proposition {@张量积}
$R\to A$、$R\to B$ 是环同态，记 $C=A\otimes_RB$，
则 $C^{(p)}=A\otimes_RB\otimes_{R,F_R}R
  =(A\otimes_{R,F_R}R)\otimes_R(B\otimes_{R,F_R}R)
  =A^{(p)}\otimes_RB^{(p)}$。
此时有交换图表
\[
\begin{tikzcd}
  \operatorname{Tot}(\Omega_{A^{(p)}/R}^\bullet
  \otimes_R\Omega_{B^{(p)}/R}^\bullet)
  \ar[rrr,"\operatorname{Tot}(
  \operatorname{Cart}_{A/R}\otimes_R
  \operatorname{Cart}_{B/R})"]
  \ar[dd,equal,"\wedge"']&&&\operatorname{Tot}(
  H^\bullet(\Omega_{A/R}^\bullet)\otimes_R
  H^\bullet(\Omega_{B/R}^\bullet))\ar[d]\\
  &&&H^\bullet(\operatorname{Tot}(
  \Omega_{A/R}^\bullet\otimes_R\Omega_{B/R}^\bullet))
  \ar[d,equal,"\wedge"]\\
  \Omega_{C^{(p)}/R}^\bullet
  \ar[rrr,"\operatorname{Cart}_{C/R}"']&&&
  H^\bullet(\Omega_{C/R}^\bullet)
\end{tikzcd}
\]
:::

::: proof
由于映射都是 $C^{(p)}$-分次代数同态，
而高阶微分模是一阶微分模的外积，
故只需对左上角一次部分的一组生成元验证。
显然两条路都把 $\mathrm{d}(a\otimes1)\otimes1$ 映射到
$[(a\otimes1)^{p-1}\mathrm{d}(a\otimes1)]$，把
$1\otimes\mathrm{d}(b\otimes1)$ 映射到
$[(1\otimes b)^{p-1}\mathrm{d}(1\otimes b)]$。
:::

::: proposition {@复合}
$R\to A\to B$ 是环同态。分别沿 $F_{A/R}$、$F_{B/R}$ 把
$A^{(p)}$、$B^{(p)}$ 视为 $A$、$B$ 上代数，
则有自然同态 $A^{(p)}\otimes_AB\to B^{(p)}$。
此时有交换图表
\[
\begin{tikzcd}
  \Omega_{A^{(p)}/R}^\bullet\otimes_AB
  \ar[d]\ar[rr,"\operatorname{Cart}_{A/R}\otimes_AB"]&&
  H^\bullet(\Omega_{A/R}^\bullet)\otimes_AB\ar[d]\\
  \Omega_{A^{(p)}/R}^\bullet\otimes_{A^{(p)}}B^{(p)}
  \ar[d]&&
  H^\bullet(\Omega_{A/R}^\bullet\otimes_AB)
  \ar[d]\\
  \Omega_{B^{(p)}/R}^\bullet
  \ar[rr,"\operatorname{Cart}_{B/R}"']&&
  H^\bullet(\Omega_{B/R}^\bullet)
\end{tikzcd}
\]
:::

::: proof
由于映射都是 $A^{(p)}\otimes_AB$ 上分次代数同态，
而高阶微分模是一阶微分模的外积，
故只需对左上角一次部分的一组生成元验证。
显然两条路都把 $\mathrm{d}(a\otimes1)\otimes1$ 映射到
$[a^{p-1}\mathrm{d}a]$。
:::

最重要的性质是如下 **Cartier 同构**。

::: theorem
如环同态 $R\to A$ [[光滑同态|光滑]]，则
$\operatorname{Cart}_{A/R}$ 是同构。
:::

::: proof
先验证 $A=R[x]$ 为一元多项式环情形。
此时 $\Omega_{A/R}^\bullet$ 为
$$
0\to R[x]\to R[x]\mathrm{d}x\to0
$$
由于 $\mathrm{d}(x^n)=nx^{n-1}\mathrm{d}x$，容易发现
该复形的上同调在 $0$ 处为 $R[x^p]$，在 $1$ 处为
$R[x^p]x^{p-1}\mathrm{d}x$，由 Cartier
算子的定义立知它是同构。
这样由 @张量积 即得 $A$ 为多元多项式环情形。
现对一般的 $A$，适当局部化，可设有[[平展同态]]
$R[x_1,\ldots,x_n]\to A$。
对 $R\to R[x_1,\ldots,x_n]\to A$
用 @复合，由平展其中竖直箭头全都是同构，
即可从多项式环情形得到一般情形。
:::

::: remark
本节中这些对环陈述的命题显然对概形也都成立，
为简明起见就不逐一对概形再写一遍了。
:::

## 例子

## 推广

```terms
Cartier 算子:
  en: Cartier operator
  de: Cartier-Operator
  fr: opérateur de Cartier
```
