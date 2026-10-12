---
title: $n$-范畴
categories: [高阶范畴论]
notices:
  - name: 问题
    items:
      - “一般的 $n$-范畴”一节需要扩充。
---

**$n$-范畴**是[[范畴]]、[[$2$-范畴]]等概念向更高[[同伦层级]]的推广，
是 [[$\infty$-范畴]]的特例，
这里 $n$ 是[[自然数]]。
大致来说，$n$-范畴由以下信息组成：

- 一族[[对象]]。

- 在对象 $x, y$ 之间，可以有 [[$1$-态射]] $f \colon x \to y$。

- 在 $1$-态射 $f, g \colon x \to y$ 之间，可以有 [[$2$-态射]]
  $\alpha \colon f \Rightarrow g$。

  \[
  \begin{tikzcd}[column sep=4em]
    x
    \ar[r, bend left=45, looseness=1.25, "f"]
    \ar[r, bend right=45, looseness=1.25, "g"']
    \ar[r, phantom, "\Downarrow"]
    \ar[r, phantom, pos=.65, "\scriptstyle \alpha"]
    & y
  \end{tikzcd}
  \]

- 在 $2$-态射 $\alpha, \beta \colon f \Rightarrow g$ 之间，
  可以有 $3$-态射 $\xi \colon \alpha \Rrightarrow \beta$。

  \[
  \begin{tikzcd}[column sep=6em]
    x
    \ar[r, bend left=45, looseness=1.25, "f"]
    \ar[r, bend right=45, looseness=1.25, "g"']
    \ar[r, phantom, pos=.35, "\Longrightarrow"{rotate=-90}]
    \ar[r, phantom, pos=.25, "\scriptstyle \alpha"]
    \ar[r, phantom, pos=.65, "\Longrightarrow"{rotate=-90}]
    \ar[r, phantom, pos=.75, "\scriptstyle \beta"]
    \ar[r, phantom, pos=.51, "\Rrightarrow"]
    \ar[r, phantom, pos=.5, shift left=3, "\scriptstyle \xi"]
    & y
  \end{tikzcd}
  \]

- 如此下去，直到 $n$-态射。

例如，

- $0$-范畴就是[[集合]]。

- $1$-范畴就是普通的[[范畴]]。

- [[$2$-范畴]]也是有用的概念。

在文献中，“$n$-范畴”有时也特指 [[$(n, 1)$-范畴]]，
即所有 $r$-态射当 $r > 1$ 时都可逆的 $n$-范畴。
我们不采用这种约定。

## 定义

[[范畴|$1$-范畴]]和 [[$2$-范畴]]都具有公认的较为简洁的定义。
然而当 $n > 2$ 时，$n$-范畴的定义变得十分复杂。
一个主要问题是，正如在 $2$-范畴中一样，
在 $n$-范畴中，$1$-态射的复合并不严格满足[[结合运算|结合律]]、[[单位律]]，
而相差一个可逆 $2$-态射，即 [[$2$-同构]]，例如
\[
h \circ (g \circ f) \simeq (h \circ g) \circ f.
\]
上述同构还需满足各维[[结合多面体]]所指定的公理，
以及其它繁复的公理。
当 $n > 4$ 时，完整写下所有这些公理并不可行。
因此，通常的做法是借助 [[$(\infty, n)$-范畴]]来定义 $n$-范畴。

尽管如此，但有一类较好定义的 $n$-范畴，称为**严格 $n$-范畴**，
也就是那些复合严格满足结合律、单位律的 $n$-范畴。
但当 $n > 2$ 时，并非所有 $n$-范畴都等价于某个严格 $n$-范畴，
所以该定义是不全面的。
我们先叙述这种不全面的定义。

### 严格 $n$-范畴

::: definition [严格 $n$-范畴]
我们对 $n$ 归纳，定义严格 $n$-范畴的概念。

**严格 $1$-范畴**就是普通的[[范畴]]。

假设有了严格 $(n-1)$-范畴的概念。
则**严格 $n$-范畴**是指一[[充实范畴]]，
充实于所有[[小范畴|小]]的严格 $(n-1)$-范畴构成的范畴，
配以[[积幺半范畴|积幺半结构]]。
:::

### $(n, 1)$-范畴

我们通过 [[$(\infty, 1)$-范畴]]来定义 $(n, 1)$-范畴。

::: definition [$(n, 1)$-范畴]
称 [[$(\infty, 1)$-范畴]] $\mathcal{C}$ 为 **[[$(n, 1)$-范畴]]**，
如果满足以下条件：

- 对任意 $x, y \in \mathcal{C}$，态射空间 $\mathcal{C} (x, y)$
  都是 $(n-1)$-[[截断空间]]，即 [[n-群胚|$(n-1)$-群胚]]。

:::

### 一般的 $n$-范畴

```terms
$n$-范畴:
  en: $n$-category
  fr: $n$-catégorie :f
```
