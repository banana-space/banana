---
title: 完备模
categories: [交换代数]
navboxes: [交换代数]
---

::: convention
在本文中，

- 所有环都指[[交换环]]。

:::

**完备模**是[[交换代数]]中的常见概念，
指的是模中的元素可作特定的无穷和，其收敛性良定义，
也相当于模关于特定的度量构成[[完备度量空间]]。

## 定义

::: definition [完备模] {@完备}
设 $A$ 是[[环]]，$I$ 是其[[有限生成模|有限生成]][[理想]]。称
$A$-[[模]] $M$ 关于 $I$ **完备**，或称 $M$ 为
**$I$-完备模**，指的是
$$
M=\lim_{n\to\infty}M/I^nM.
$$
:::

::: remark
这是[[滤链]]的完备性的特殊情形。$M$ 关于 $I$
完备也就是说
$$
M\supseteq IM\supseteq I^2M\supseteq\cdots
$$
是完备滤链。
:::

::: definition [完备化] {@完备化}
记号同 @完备。$M$ 关于 $I$ 的**完备化**，
通常记作 $M^\wedge_I$ 或 $\widehat{M}$，指的是 $A$-模
$\lim_nM/I^nM$。
:::

::: remark
@完备 和 @完备化 本身固然不需要理想 $I$
有限生成；但当 $I$ 无限生成时，它的表现实在太差，
完备化所得的模都未必是完备的；所以我们只讨论 $I$ 有限生成的情形。
:::

## 性质

::: proposition [与完备度量的关系]
记号同 @完备。在 $M$ 上定义 **$I$ 进度量**
$$
d(x,y)=\exp(-{\min\{n\in\mathbb{N}\mid x-y\in I^nM\}}).
$$
则 $M$ 关于 $I$ 完备当且仅当 $M$
在这个度量下是[[完备度量空间]]。特别地，对任一列
$(x_n\in I^nM)_{n\in\mathbb{N}}$，存在唯一
$X=:\sum_{n=0}^\infty x_n$，使得对任意 $m\in\mathbb{N}$，
$X-\sum_{n=0}^mx_n\in I^{m+1}M$。
:::

::: proposition
完备化是完备模构成的[[满子范畴]]的含入函子的[[左伴随]]。
:::

::: proposition
完备化保持满射。
:::

::: theorem
设 $A$ 是 [[Noether 环]]，$I$ 是其理想。则
$I$-完备化限制在有限生成 $A$-模的[[满子范畴]]上是[[正合函子]]。
也就是说，对有限生成 $A$-模的[[短正合列]]
$$
0\to N\to M\to Q\to0
$$
其完备化
$$
0\to\widehat{N}\to\widehat{M}\to\widehat{Q}\to0
$$
仍然正合。
:::

::: proof
见条目 [[Artin–Rees 引理]]。
:::

## 例子

- [[$p$ 进数]] $\mathbb{Z}_p$ 是 $p$-完备的 $\mathbb{Z}$-模，是 $\mathbb{Z}$
  的 $p$-完备化。
- 对任意的环 $k$，[[形式幂级数环]] $k[[x]]$ 是 $x$-完备的
  $k[x]$-模，是 $k[x]$ 的 $x$-完备化。

::: example {@不正合}
对无限生成的模，完备化可以不正合，甚至不右正合。考虑短正合列
$$
0\to\bigoplus_{n=1}^\infty\mathbb{Z}\to
\bigoplus_{n=1}^\infty\mathbb{Z}\to
\bigoplus_{n=1}^\infty\mathbb{Z}/p^n\to0
$$
其中左边的映射在第 $n$ 个坐标上是乘以 $p^n$。把它 $p$-完备化，
考虑中间的完备化里的元素 $(p^n)_{n=1}^\infty$。
它被右边的映射打到 $0$，但它不来自左边，因为左边的完备化里并没有元素
$(1,1,\ldots)$。

对不 Noether 的环，即便模有限生成甚至有限表现，
完备化也可以不正合，甚至不右正合。这个例子比较麻烦，参见
[@stacks, Tag 05JF]。

这些病态表现主要是因为有高阶同伦信息出现，
而朴素完备化对此没有记录，要用[[导出完备化]]把它记下来。
导出完备化对非常一般的环和模都有良好的表现。
:::

::: example
@不正合 中映射
$$
\operatorname{diag}(p^n)_{n=1}^\infty\colon
\bigoplus_{n=1}^\infty\mathbb{Z}\to
\bigoplus_{n=1}^\infty\mathbb{Z}
$$
的 $p$-完备化还说明完备模之间同态的核和余核未必完备。
但它们[[导出完备]]。
:::

```bibliography
stacks:
  type: online
  site: The Stacks project
  title: The Stacks project
  url: https://stacks.math.columbia.edu/
```

```terms
完备模:
  en: complete module
```
