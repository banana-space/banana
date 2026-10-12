---
title: 平方和问题（多项式）
aliases: [Hilbert 第十七问题]
categories: [域论]
notices:
  - name: 问题
    items:
      - “问题与动机”一节中“只有二次和二元三次者一定能表为多项式平方和”的“二元三次”似乎应为“二元四次”（恒非负的多项式次数总是偶数）。
navboxes: [域论]
---

**平方和问题**，又称 **Hilbert 第十七问题**，
是 [[Hilbert 的 23 个问题]]之一。
它问的是，实系数多元[[有理函数]]如恒非负，是否总能将其表为平方和？
此问题由 [[Emil Artin]] 于 1927 年用其[[序域]]理论解决。

## 问题与动机

注意一元实多项式如果恒非负，那么一定能表为平方和：
平方和之积仍是平方和；恒非负一元实多项式是恒非负二次多项式的乘积；
二次情形是显然的。多元情形并不那么简单。Hilbert 自己于 1888 年证明了，
恒非负的实多元多项式中，只有二次和二元三次者一定能表为多项式平方和，
其余不行。他的证明是非构造的，但后人给出反例
$$
x^4y^2+x^2y^4-3x^2y^2+1.
$$

既然在多项式范围内并不总能写平方和，Hilbert 便问允许分母行不行，
这就是平方和问题。它的严格陈述是：

::: theorem [平方和问题]
对[[实闭域]] $K$（例如实数 $\mathbb{R}$），
多项式 $f \in K[x_1, \cdots, x_n]$ 是若干分式
$g_i \in K(x_1, \cdots, x_n)$ 的平方之和
\[
f = g_1^2 + \cdots + g_m^2
\]
当且仅当对任意 $a_1, \cdots, a_n \in K$，
$f(a_1, \cdots, a_n)$ 非负。
:::

此问题现在得到了肯定的回答。

## 解决

这里呈现的证明是 Artin 的学生 [[Serge Lang]] 的简化，
使用以下实 [[Hilbert 零点定理]]：

::: theorem [Lang] {@同态}
设 $k$ 是[[实闭域]]，$K/k$ 是域扩张，$K$ [[形式实域|形式实]]。
则 $K$ 的任意有限生成 $k$-子代数都有到 $k$ 的 $k$-代数同态。
换言之，分式域形式实的[[代数簇]]都有实点。
:::

::: theorem [Artin] {@主定理}
$k$ 是实闭域，$f\in k(X_1,\ldots,X_n)$ 为 $n$ 元有理函数。
如对任意 $(x_1,\ldots,x_n)\in k^n$，只要 $f$ 在该点有定义，就有
$f(x_1,\ldots,x_n)\ge0$，则 $f$ 为平方和。
:::

::: proof
假设不然，则 $f\ne0$，且
$K=k(X_1,\ldots,X_n,\sqrt{-f})$ [[形式实域|形式实]]。令
$A=k[X_1,\ldots,X_n,\sqrt{-f},f^{-1}]$，
用 @同态 取出同态 $A\to k$。
设 $X_i\mapsto x_i\in k$，则由于 $f,f^{-1}\in A$，
有 $f(x_1,\ldots,x_n)$ 有定义且非零。由于 $\sqrt{-f}\in A$，
$f(x_1,\ldots,x_n)=-(\sqrt{-f}(x_1,\ldots,x_n))^2<0$，
与条件矛盾！故 $f$ 为平方和。
:::

## 后续

### 另一证明

随着[[数理逻辑]]的发展，
[[Abraham Robinson|Robinson]] 利用实闭域具有[[量词消去]]给出了一个简短证明。

::: proof [@主定理 的证明，通过数理逻辑]
假设不然，
则 $f\ne0$，
且 $K=k(X_1,\ldots,X_n,\sqrt{-f})$ 形式实。
从而可以取 $K$ 的[[实闭域|实闭包]] $R$ 使得 $f<0$。
那么有
\[
R\models\exists x_1\cdots x_n f(x_1,\cdots,x_n)<0,
\]
因为取 $x_i=X_i$ 满足 $f(x_1,\cdots,x_n)=f<0$。
由于 [[RCF|$\mathsf{RCF}$]] 具有[[量词消去]]和[[模型完备]]，
所以它[[完备]]，
故得到
\[
k\models\exists x_1\cdots x_n f(x_1,\cdots,x_n)<0,
\]
与条件矛盾。
:::

```terms
平方和问题:
  en: the sum-of-squares problem
  de: das Quadratsummen-Problem
  fr: le problème de somme des carrés
```
