---
title: Frobenius 同态
aliases: [Frobenius 映射, Frobenius 自同态]
categories: [交换代数]
notices:
  - name: 问题
    items:
      - “推广”一节需要扩充，例如导出推广，以及代数数论中 Frobenius 同态的提升。
      - “定义”一节中，相对 Frobenius 同态 $A\otimes_{F,A} B\to B$ 的公式 $a\otimes b\mapsto a\otimes b^p$ 的像不在 $B$ 中，似乎应为 $a\otimes b\mapsto f(a)\,b^p$。
navboxes: [交换代数]
---

::: convention
在本文中，

- 所有环都指[[交换环]]。
- $p$ 为一固定[[素数]]。

:::

**Frobenius 同态**是特征 $p$ 环特有的[[自同态]]，
将元素映射到其 $p$ 次方。该自同态在[[交换代数]]、
[[代数数论]]、[[代数几何]]中都十分重要。

本条目侧重于环论。较为[[概形]]论的性质参见条目
[[Frobenius 态射]]。

## 定义

::: definition {@绝对}
$A$ 是 $\mathbb{F}_p$-代数。$A$ 的
**Frobenius 同态**指的是自同态 $a\mapsto a^p$。
其常见的记号有 $\operatorname{Frob}$、$F$、$\varphi$，
或需要区分时加个下标 $A$。
在需要与下文的相对 Frobenius 同态区分时，
也会称它为 **绝对 Frobenius 同态**。
:::

::: remark
$a\mapsto a^p$ 显然总是乘法[[幺半群]]同态。
它是环同态则是因为
$$
(a+b)^p=\sum_{n=0}^p\binom{p}{n}a^nb^{p-n}=a^p+b^p,
$$
其中交叉项的系数都是 $p$ 的倍数，而 $A$ 中 $p=0$，
它们都消失。
:::

::: remark
在一些场合中，
也会将 @绝对 中同态的 $n$ 次方，即
$a\mapsto a^q$ 称为 Frobenius 同态，其中 $q=p^n$。
尤其是在 $A$ 是 $\mathbb{F}_q$-代数时，
此时 Frobenius 同态是 $\mathbb{F}_q$-代数的同态。
:::

也会谈论相对的 Frobenius 同态。

::: definition [相对 Frobenius 同态] {@相对}
设 $f\colon A \to B$ 是 $\mathbb{F}_p$-代数的同态，
考虑交换图
\[
\begin{tikzcd}
  A \ar[r, "F_A"] \ar[d, "f"] \ar[dr, phantom, pos=.8, "\lrcorner"] &
  A \ar[d, "f'"] \ar[ddr, bend left = 20, "f"] \\
  B \ar[r, "F_A'"] \ar[drr, bend right = 20, "F_B"] &
  A\otimes_{F,A} B \ar[dr, dashed, "F_{B/A}"] \\
  & & B
\end{tikzcd}
\]
其中 $F_A$，$F_B$ 表示 $A$，$B$ 上的 Frobenius 同态。
则有唯一的同态 $A\otimes_{F, A} B\to B$ 使此图表交换，
称为**相对 Frobenius 同态**，记为 $F_{B/A}$。

等价地说，相对 Frobenius 同态是满足
$a\otimes b\mapsto a\otimes b^p$ 的唯一同态。
:::

在以上定义中，
在 $A$ 是 $\mathbb{F}_p$ 的[[代数闭包]] $\mathbb{F}$，
$B$ 形如 $\mathbb{F}\otimes_{\mathbb{F}_p} R$ 时，
有同构 $\mathbb{F}\otimes_{F, \mathbb{F}}
\mathbb{F}\otimes_{\mathbb{F}_p} R\simeq \mathbb{F}\otimes_{\mathbb{F}_p} R$
（约去中间的 $\mathbb{F}$），
由此得到的映射 $F_A'$，$F_{B/A}$ 分别称为算术、几何 Frobenius 同态。
以下的定义将这些构造具体写了出来。

::: definition [算术、几何 Frobenius 同态] {@几何}
设 $R$ 是 $\mathbb{F}_q$-代数，其中 $q=p^n$。
记 $\mathbb{F}$ 为 $\mathbb{F}_q$ 的[[代数闭包]]。
定义[[张量积]]
$\mathbb{F}\otimes_{\mathbb{F}_q} R$
的以下[[自同态]]：

- **算术 Frobenius 同态**是使得
  $\lambda\otimes r \mapsto \lambda^q\otimes r$ 的自同态。
- **几何 Frobenius 同态**是使得
  $\lambda\otimes r \mapsto \lambda\otimes r^q$ 的自同态。

:::

大致来说，算术 Frobenius 同态作用在系数上，
而几何 Frobenius 同态作用在环的“主体”上。
可以看出，几何 Frobenius 同态是 $\mathbb{F}$-代数的同态。

## 性质

::: proposition [函子性]
对任一 $\mathbb{F}_p$-代数同态 $f\colon A\to B$，
$f\circ\operatorname{Frob}_A=
  \operatorname{Frob}_B\circ f$。
:::

::: proof
环同态保持乘法，自然也保持 $p$ 次方。
:::

::: proposition [不动点]
在 $\mathbb{F}_p$ 上有多项式等式
$x^p-x=\prod_{i\in\mathbb{F}_p}(x-i)$。
对 $\mathbb{F}_p$-代数 $A$ 及其元素 $a$，
$\operatorname{Frob}(a)=a$ 当且仅当存在直积分解
$A=\prod_{i\in\mathbb{F}_p}A_i$，满足 $a$ 在
$A_i$ 中的像等于 $i$。特别地，如 $A$ 不能写成两个非零环的直积，
比如它是[[整环]]，则 $\operatorname{Frob}(a)=a$
当且仅当 $a\in\mathbb{F}_p$。
:::

::: proof
由 Frobenius 映射是环同态立知 $\mathbb{F}_p$
的元素都是其不动点，换言之，每个 $i\in\mathbb{F}_p$
都是 $x^p-x$ 的根。由此立得在 $\mathbb{F}_p[x]$ 中有
$x^p-x=\prod_{i\in\mathbb{F}_p}(x-i)$。
命题后一句话中“当”为显然，下证“仅当”。
设 $a\in A$ 满足 $\operatorname{Frob}(a)=a$ 即 $a^p=a$，
则 $\prod_{i\in\mathbb{F}_p}(a-i)=0$。显然对不同的
$i,j\in\mathbb{F}_p$，$a-i$ 和 $a-j$ 生成的理想是 $1$。
于是由[[中国剩余定理]]，
$$
A=\prod_{i\in\mathbb{F}_p}A/(a-i).
$$
显然 $a$ 在 $A/(a-i)$ 中的像等于 $i$。
:::

::: proposition [整同态]
Frobenius 同态是[[整同态]]。
:::

::: proof
依定义显然。
:::

::: proposition [既约环]
$\mathbb{F}_p$-代数 $A$ 为[[既约环|既约]]当且仅当
$\operatorname{Frob}_A$ 为单射。如 $A$ 的[[幂零根]]
$I$ 满足 $I^{p^n}=0$，则 $\operatorname{Frob}_A^n$
穿过既约化 $A_\text{red}$，给出单射 $A_\text{red}\to A$。
:::

::: proof
如 $A$ 既约，则一个元素 $p$ 次方为 $0$ 自己就是 $0$，
即 $\operatorname{Frob}_A$ 为单射。
如 $A$ 不既约，则其中必有平方为 $0$ 的元素，该元素就在
$\ker(\operatorname{Frob}_A)$ 中。如 $A$ 的幂零根
$I$ 满足 $I^{p^n}=0$，则
$I=\ker(\operatorname{Frob}_A^n)$，所以
$\operatorname{Frob}_A^n$ 穿过 $A/I=A_\text{red}$，
且给出单射 $A_\text{red}\to A$。
:::

## 例子

- $\mathbb{F}_p$ 的 Frobenius 是
  $\operatorname{id}$。

- 对[[有限域]] $\mathbb{F}_q$，
  由其 Frobenius 是单射，数元素知它是双射。一般地，
  Frobenius 是双射的 $\mathbb{F}_p$-代数称为[[完美环]]。

- 考虑多项式代数 $\mathbb{F}_p[x_i]_{i\in I}$。
  其 Frobenius 是单射，像为
  $\mathbb{F}_p[x_i^p]_{i\in I}$。
  $\mathbb{F}_p[x_i]_{i\in I}$ 作为
  $\mathbb{F}_p[x_i^p]_{i\in I}$-模[[自由模|自由]]，
  一组生成元为
  $$
  \left\{\prod_{i\in I}x_i^{a_i}\biggm|
  0\le a_i<p,\,只有有限个非零\right\}.
  $$
  故当 $|I|=n\in\mathbb{N}$ 时其秩为 $p^n$，Frobenius
  为[[有限同态]]；当 $I$ 无穷时其秩为 $|I|$，
  Frobenius 仅整而不有限。

## 推广

```terms
Frobenius 同态:
  en: Frobenius homomorphism
  de: Frobeniushomomorphismus
  fr: homomorphisme de Frobenius
  la: homomorphismus Frobenii
```
