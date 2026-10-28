---
title: 炼化
categories: [代数几何]
---

<problems>
- “应用”一节需要扩充。
</problems>

::: convention
在本文中，

- 范畴指 [[$(\infty,1)$-范畴]]。
- 环指[[生象环]]。
- 叠指生象环上的可达 $(\infty,1)$-预层，
  即[[可达函子]] $\mathsf{Ring}\to\mathsf{Ani}$。
  这里我们遇到的预层总会在适当的拓扑（如[[平坦拓扑]]）下是层，
  故称之为叠，但它是不是层并不重要。

:::

**炼化**是从环叠产生上同调理论的一般方法。
它不仅能够用来构造新的上同调理论，还能启发既有上同调理论的研究。

## 定义

回忆如下事实：对叠 $S\colon\mathsf{Ring}\to\mathsf{Ani}$，以 $\mathsf{Ring}_S$ 记环范畴
$\mathsf{Ring}$ 沿 [[Yoneda 嵌入]]
$\mathsf{Ring}\to\mathsf{Fun}^\mathrm{acc}(\mathsf{Ring},\mathsf{Ani})^\mathrm{op}$
在 $S$ 下的[[仰范畴]]，亦即函子 $S$ 的[[反直化]]；
以 $\mathsf{Stack}_S$ 记 $S$ 上叠的范畴，即 $\mathsf{Stack}$ 在 $S$ 上的[[俯范畴]]；
则有范畴等价
$$
\mathsf{Stack}_S\cong\mathsf{Fun}^\mathrm{acc}(\mathsf{Ring}_S,\mathsf{Ani}),
$$
$$
X\mapsto\operatorname{Hom}_S(-,X).
$$

::: definition {@trans}
设 $k$ 是环，$S$ 是叠。设 $A$ 是 $S$ 上的叠，带 $k$-代数结构；
换言之，$A$ 是[[可达函子]]
$$
\mathsf{Ring}_S\to\mathsf{Ring}_k.
$$

$A$ 的**炼化**指函子
$$
\mathsf{Stack}_k\to\mathsf{Stack}_S,
$$
$$
X\mapsto X^A(R):=X(A(R)).
$$
对 $k$ 上的叠 $X$，也称 $S$ 上的叠 $X^A$ 或 $\mathsf{D}(S)$
里的代数 $(X^A\to S)_*\mathcal{O}_{X^A}$ 为 $X$ 的**炼化**。
:::

::: remark
@trans 相当于说，
环叠 $A$ 给出 $\mathsf{Stack}_k$ 上取值在 $\mathsf{D}(S)$ 里的上同调理论，
而 $\mathsf{D}(X^A)$ 是 $X$ 关于此上同调的系数范畴。具体地说，
对系数 $M\in\mathsf{D}(X^A)$，$X$ 的 $M$-系数 $A$-上同调即为
$$
(X^A\to S)_*M\in\mathsf{D}(S).
$$
:::

::: remark
@trans 中 $\mathsf{Ring}_k$ 可推广为 $\mathsf{Stack}_k^\mathrm{op}$，
且 $k$ 也可以是一般的叠，但实践中的场景多为 @trans
中所述。
:::

## 例子

本节的例子中我们都取 $S=\operatorname{Spec}(k)$。
更复杂的例子参见 [[de Rham 叠]]、[[棱镜叠]]、[[合割叠]]。

::: example
取 $A=\mathbf{G}_{\mathrm{a}}$；换言之，
$A$ 为函子
$$
\operatorname{id}\colon\mathsf{Ring}_k\to\mathsf{Ring}_k.
$$
此时 $X^A=X$。
:::

::: example
取 $A=\mathbf{G}_{\mathrm{a}}/\widehat{\mathbf{G}_{\mathrm{a}}}$，其中
$$
\widehat{\mathbf{G}_{\mathrm{a}}}=\operatorname{Spf}(k[[x]])=
\operatorname*{colim}_{n\to\infty}\operatorname{Spec}(k[x]/x^n);
$$
换言之，$A$ 为既约化函子
$$
\mathsf{Ring}_k\to\mathsf{Ring}_k,
$$
$$
R\mapsto R_\mathrm{red}.
$$
此时 $X^A(R)=X(R_\mathrm{red})$，通常记 $X^A=X^{\inf}$，
称为无穷小叠，因为对应的上同调是[[无穷小上同调]]。在 $k$ 是
$\mathbb{Q}$-代数时这也是代数 de Rham 上同调，
但一般情况下以下 @drhat 给出的才是 de Rham 上同调。
:::

::: example {@dr}
取 $A=\mathbf{G}_{\mathrm{a}}/\mathbf{G}_{\mathrm{a}}^\sharp$，其中
$$
\mathbf{G}_{\mathrm{a}}^\sharp=
\operatorname{Spec}\left(k\left[\frac{x^m}{m!}\right]_{m\in\mathbb{N}}\right).
$$
此时通常记 $X^A=(X/k)^\mathrm{dR}$，称为 de Rham 叠，
因为对应的上同调是导出 de Rham 上同调。
当 $X/k$ 光滑时，$\mathsf{D}((X/k)^\mathrm{dR})$ 给出 $X$ 上 [[$p$-曲率]]幂零的
[[D-模]]范畴。
:::

::: example {@drhat}
取 $A=\mathbf{G}_{\mathrm{a}}/\widehat{\mathbf{G}_{\mathrm{a}}^\sharp}$，其中
$$
\widehat{\mathbf{G}_{\mathrm{a}}^\sharp}=\operatorname*{colim}_{n\to\infty}
\operatorname{Spec}\left(k\left[\frac{x^m}{m!}\right]_{m\in\mathbb{N}}
\middle/\left(\frac{x^m}{m!}\right)_{m\ge n}\right).
$$
此时通常记 $X^A=(X/k)^{\widehat{\mathrm{dR}}}$，称为完备 de Rham 叠，
因为对应的上同调是 Hodge 完备导出 de Rham 上同调。当 $X/k$ 光滑时，
$\mathsf{D}((X/k)^{\widehat{\mathrm{dR}}})$ 给出 $X$ 上 [[D-模]]的范畴。
:::

## 应用

```terms
炼化:
  en: transmutation
  fr: transmutation
  la: transmutatio
```
