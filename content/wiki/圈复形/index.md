---
title: 圈复形
aliases: [高阶周群]
categories: [母题论, 相交论]
navboxes: [母题论, 相交论]
---

<problems>
- “函子性”“$\mathbb{A}^1$-不变性”“移送映射”各节需要扩充；其中函子性要用到参考文献中的移动引理。
</problems>

::: convention
在本文中，

- 所有[[概形]]都指[[拟紧概形|拟紧]][[拟分离概形]]。
- 对概形 $S$，以 $\mathsf{Sm}_S$
  记其上[[光滑态射|光滑概形]]构成的范畴。

:::

[[代数簇]]的**圈复形**是其上[[仿射空间]]中的[[代数圈]]依特定限制映射构成的[[链复形]]，
是[[周群]]的推广，故其[[同调|同调群]]称为**高阶周群**。
它由 [[Spencer Bloch]] 首先引入，尔后由 [[Marc Levine]]
从[[域]]上推广到 [[Dedekind 环]]上。

圈复形给出域和 Dedekind 环上[[母题上同调]]的一种定义，
其好处是便于与显式不变量如 [[Milnor $K$ 理论]]作比较。

## 定义

对 $n\in\mathbb{N}$，考虑代数[[标准单形]] $\Delta^n=
\operatorname{Spec}(\mathbb{Z}[x_0,\ldots,x_n]/(\sum_{i=0}^nx_i-1))$。
显然 $[n]\mapsto\Delta^n$ 给出[[函子]] $\mathbb{\Delta}
\to\mathsf{Sm}_\mathbb{Z}$，其中 $\mathbb{\Delta}$ 指[[单形范畴]]。
对概形 $X$，记 $\Delta^n_X=\Delta^n\times X$。

设 $X$ 是[[Noether 概形|Noether]]、[[万有悬链]]、
有[[维数函数 (代数几何)|维数函数]]的概形。

::: definition [圈复形] {@cycle}
对 $n,i\in\mathbb{N}$，以 $z^i(X,n)$ 记 $\Delta^n_X$
的余 $i$ 维[[代数圈]]中与所有的 $m$
维面有好相交者自由生成的 $\mathbb{Z}$-模。换言之，
$$
z^i(X,n)=\mathbb{Z}\{余\ i\ 维整闭子概形\ Z\subseteq\Delta^n_X
\mid\forall[m]\hookrightarrow[n],\,
Z\cap\Delta^m_X\ 在\ \Delta^m_X\ 中余\ i\ 维\}.
$$
好相交条件保证了 $z^i(X,n)$ 关于 $n$ 构成[[单纯对象]]，
其按 [[Dold–Kan 对应|Dold–Kan 等价]]对应的链复形称为 $X$
的余 $i$ 维**圈复形**，记作 $z^i(X)$。其第 $n$
个同调称为 $X$ 的第 $n$ 个余 $i$ 维**高阶周群**，记作
$\operatorname{CH}^i(X,n).$
:::

::: remark
虽然 @cycle 很一般，但它只对域上光滑概形有良好表现。
:::

::: remark
依定义，$\operatorname{CH}^i(X,0)=\operatorname{CH}^i(X)$
为[[周群]]。
:::

## 性质

### 函子性

### $\mathbb{A}^1$-不变性

### 移送映射

## 与母题上同调的关系

设 $S$ 是[[正则概形|正则]] [[Noether 概形]]，维数不超过 $1$。
把 $z^i$ 视为 $\mathsf{Sm}_S$ 上带转送映射的 $\mathsf{D}(\mathbb{Z})$-值[[预层]]，
以 $\mathbb{Z}(i)^\mathrm{Bloch}[2i]$ 记其 Zariski 层化。

::: remark
$\dim(S)=0$ 时 $z^i$ 已经是层，
$\mathbb{Z}(i)^\mathrm{Bloch}[2i]=z^i$。
:::

::: theorem [Levine, Spitzweck]
$\mathbb{Z}(i)^\mathrm{Bloch}$ 表示[[母题上同调]]。
:::

## 参考文献

```bibliography
Levine2006:
  type: article
  author: 'Levine, Marc'
  doi: 10.1007/s10977-006-0004-5
  journaltitle: $K$-Theory
  number: '1-2'
  pages: '129-209'
  title: Chow’s Moving Lemma and the Homotopy Coniveau Tower
  volume: 37
  year: 2006
```

```terms
圈复形:
  en: cycle complex
```
