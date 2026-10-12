---
title: 生象环
categories: [高阶代数]
navboxes: [高阶范畴论]
---

::: convention
在本文中，

- [[范畴]]均指 [[$(\infty,1)$-范畴]]。

:::

**生象环**是[[交换环]]的[[生象化]]，
也是[[导出代数几何]]的基本研究对象，
和[[环]]在经典代数几何中的地位一样。

## 定义

::: definition {@def}
令 $\mathsf{fPoly}$ 为 $\mathbb{Z}$ 上有限个变元的[[多项式|多项式环]]构成的范畴，
视为[[交换环]]范畴的[[满子范畴]]。$\mathsf{fPoly}$ 显然具有有限[[余积]]。
**生象环**指把有限余积变为有限积的[[反变函子]]
$$
R\colon\mathsf{fPoly}^{\mathrm{op}}\to\mathsf{Ani},
$$
其中 $\mathsf{Ani}$ 指[[生象]]构成的 $(\infty,1)$-范畴。
:::

::: remark
如在 @def 中把 $\mathsf{Ani}$ 换成[[集合范畴]] $\mathsf{Set}$，
不难发现得到的概念就是交换环：

- 每个交换环 $R$ 通过 [[Yoneda 引理]]给出函子
  $\mathsf{CRing}^{\mathrm{op}}\to\mathsf{Set}$，
  限制到 $\mathsf{fPoly}^{\mathrm{op}}$ 即给出保有限积的函子
  $\mathsf{fPoly}^{\mathrm{op}}\to\mathsf{Set}$。

- 反过来，从保有限积的函子 $R\colon
  \mathsf{fPoly}^{\mathrm{op}}\to\mathsf{Set}$ 出发，
  可作集合 $R(\mathbb{Z}[x])$ 上的交换环结构如下：

  - 为简明起见，我们滥用记号把 $R(\mathbb{Z}[x])$ 也记作 $R$；

  - 于是对 $n\in\mathbb{N}$，$R(\mathbb{Z}[x_1,\ldots,x_n])=
    \prod_{i=1}^nR(\mathbb{Z}[x_i])=R^n$；

  - $\mathbb{Z}[x]$ 到 $\mathbb{Z}[x_1,\ldots,x_n]$ 的映射
    $x\mapsto\sum_{i=1}^nx_i$ 与 $x\mapsto\prod_{i=1}^nx_i$
    分别给出底集 $R$ 上的加法与乘法，而关于 $\mathsf{fPoly}$
    的函子性给出加法与乘法的各种运算律。

由此可见 @def 是经典的交换环概念的一种自然推广。
它允许交换环的底集不再是集合而可以是[[生象]]，但仍然要求它有由范畴
$\mathsf{fPoly}^{\mathrm{op}}$ 所指定的运算律。
:::

以下是另一种定义，使用[[生象化]]。熟悉生象化的读者容易验证它与 @def 等价。

::: definition
令 $\mathsf{CRing}$ 为交换环范畴，
**生象环范畴**是指其生象化 $\mathsf{AnCRing} \coloneqq \mathsf{Ani}(\mathsf{CRing})$。
我们将 $\mathsf{AnCRing}$ 中对象称为**生象环**。
对于生象环 $R$，可取[[仰范畴]] $\mathsf{AnCRing}_{R/}$，
此时将其内对象称为**生象 $R$-代数**。
:::

## 性质

::: proposition
交换环为 $\mathsf{AnCRing}$ 中的 $0$-截断对象。
:::

::: remark
因此，在部分文献中，
将生象环称为**环**而将交换环称为**静止环**，
将静止环所构成的范畴记为 $\mathsf{Ring}^{\text{static}}$，
此处静止的意思即为“不生动”。
:::

::: proposition
生象环范畴 $\mathsf{AnCRing}$ 上带有来自于 $\mathsf{CRing}$ 的对称幺半结构，
具体而言，对于两个生象环 $A,B \in \mathsf{AnCRing}$，
有 $A \otimes B = A \sqcup B$。
而对于生象 $R$-代数 $A$ 和 $B$，此时 $A \otimes_R B = A \sqcup_R B$。
:::

::: proposition
考虑遗忘函子
\[
\mathsf{CRing} \to \mathsf{Ab} \to \mathsf{Set}
\]
它们与[[筛余极限|筛 $1$-余极限]]交换，
并且具有左伴随
\[
\mathsf{Set} \xrightarrow{\mathbb{Z}[-]} \mathsf{Ab} \xrightarrow{\operatorname{Sym}} \mathsf{CRing}.
\]
由于 $\mathbb{Z}[-]$ 和 $\operatorname{Sym}$ 均保持紧投射对象，
因此给出函子
\[
\mathsf{Ani} \xrightarrow{\mathbb{Z}[-]}
\mathsf{D}_{\geq 0}(\mathsf{Ab}) \xrightarrow{\operatorname{LSym}} \mathsf{AnCRing}.
\]
这给出由生象得到生象环的方式。
:::

## 例子

- 对于空生象 $\varnothing \in \mathsf{Ani}$，有 $\mathbb{Z}[\varnothing] = 0$，
且 $\operatorname{LSym}(0) = \mathbb{Z}$。
- 考虑带点生象 $(X,\ast) \in \mathsf{Ani}_*$，
可构造函子 $\mathbb{Z}[(X,*)] = \operatorname{cofib}(\mathbb{Z} \to \mathbb{Z}[X])$。
根据[[纬悬]]函子为推出且 $\mathbb{Z}$ 作为左伴随保持余极限，
此时有 $\mathbb{Z}[(S^n,*)] = \mathbb{Z}[n]$。
从而得到
$\operatorname{Sym} \mathbb{Z}[n+1] = \mathbb{Z} \otimes_{\operatorname{LSym} \mathbb{Z}[n]} \mathbb{Z}$。
- 对于生象环 $A$，$f \in \pi_0(A)$ 可视为生象环间这样的态射 $\mathbb{Z}[X] \to A$，
它在连通分支上将 $X$ 映为 $f$，
因此可定义**商** $A/^{\mathbb{L}}(f)$ 为推出 $A \otimes_{\mathbb{Z}[X]} \mathbb{Z}$，
此时 $\mathbb{Z}[X] \to \mathbb{Z}$ 在连通分支上将 $X$ 映为 $0$。
类似定义对于有限多个元素的商。

## 生象环上的模

考虑 $1$-范畴 $\mathsf{Mod}$：
- 其对象为二元组 $(A,M)$，
其中 $A$ 为交换环，$M$ 为其上的模。
- 从 $(A,M)$ 到 $(A',M')$ 的态射是指这样的信息：
  - 环同态 $f \colon A \to A'$，
  - $A'$-模同态 $A' \otimes_A M \to M'$。

不难发现，遗忘函子
$\mathsf{Mod} \to \mathsf{CRing}$ 是[[推出纤维化]]。
对于该推出纤维化两侧进行生象化，
得到函子 $\mathsf{Ani}(\mathsf{Mod}) \to \mathsf{AnCRing}$，
这也是推出纤维化。
对其进行反直化，得到函子
\[
\mathsf{AnCRing} \to \mathsf{Cat}, A \mapsto \mathsf{D}_{\geq 0}(A).
\]

::: remark
对于熟悉[[高阶代数]]的读者，
容易看出 $\mathsf{D}_{\geq 0}(A)$ 即为取 $A$ 的底 $\mathbb{E}_{\infty}$-环后的模范畴
$\mathsf{Mod}(A)$
中连合对象所构成的全子范畴 $\mathsf{Mod}_{\geq 0}(A)$。
:::

::: definition
令 $A$ 为生象环，
**$A$-模**是指 $\mathsf{D}_{\geq 0}(A)$ 中的对象。
将 $\mathsf{D}_{\geq 0}(A)$ 的[[t 结构|右完备化]]记为 $\mathsf{D}(A)$，
称为 **$A$-模的导出范畴**。
:::

```terms
生象环:
  en: animated ring
  fr: anneau animé
```
