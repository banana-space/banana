---
title: '链复形 $(\infty,1)$-范畴'
categories: [同调代数, 高阶代数]
navboxes: [同调代数]
---

**链复形 $(\infty,1)$-范畴**是[[链复形同伦范畴]]的高阶版本。
[[高阶范畴论]]中，我们不仅要记忆两个链映射是否[[链同伦|同伦]]，
还要记忆它们如何同伦，以及同伦之间如何同伦，……直至无穷。

为打包这些信息，一种办法是直接用[[链同伦]]条目中所述高阶同伦来定义，
但这需要 [[Rezk $\Theta$-空间]]，有牛刀杀鸡之嫌。
这里我们用 [[$(\infty,1)$-范畴]][[局部化 (范畴论)|局部化]]来定义。

## 定义

::: definition {@def}
设 $\mathcal{A}$ 是[[加性范畴]]，$\mathsf{Ch}(\mathcal{A})$
是其[[链复形]]范畴。$\mathcal{A}$
的**链复形 $(\infty,1)$-范畴**，
或称**链复形同伦 $(\infty,1)$-范畴**，记作
$\mathsf{K}(\mathcal{A})$，指 $(\infty,1)$-[[局部化 (范畴论)|局部化范畴]]
$\mathsf{Ch}(\mathcal{A})[\mathsf{W}^{-1}]$，其中
$\mathsf{W}\subseteq\mathsf{Ch}(\mathcal{A})$
为[[链同伦等价]]构成的[[宽子范畴]]。设满子范畴
$\mathcal{C}\subseteq\mathsf{Ch}(\mathcal{A})$
对链复形映射锥封闭。定义 $\mathcal{C}$ 的**同伦
$(\infty,1)$-范畴**为 $\mathcal{C}$ 到
$\mathsf{K}(\mathcal{A})$ 的像。当 $\mathcal{C}$ 为（上同调）
**上有界**、**下有界**、
**有界**链复形的满子范畴时，其同伦
$(\infty,1)$-范畴分别称为（上同调）
**上有界**、**下有界**、
**有界**链复形 $(\infty,1)$-范畴，记作
$\mathsf{K}^+(\mathcal{A})$、$\mathsf{K}^-(\mathcal{A})$、$\mathsf{K}^\mathrm{b}(\mathcal{A})$。
:::

::: remark
记号承 @def。用 [[dg 脉]]可以说明，
$\mathcal{C}$ 的同伦 $(\infty,1)$-范畴等价于
$\mathcal{C}[\mathsf{W}^{-1}]$。
:::

::: remark
这里的记号与[[链复形同伦范畴]]条目冲突。这通常不引起混淆，因为：

- 链复形同伦范畴是链复形 $(\infty,1)$-范畴的同伦范畴；

- 由于[[稳定无穷范畴]]远比[[三角范畴]]易于操作，
  在高阶范畴论场合很少把稳定无穷范畴忘成其同伦范畴，
  链复形 $(\infty,1)$-范畴也不例外。

:::

## 性质

::: theorem
$\mathsf{K}(\mathcal{A})$、$\mathsf{K}^+(\mathcal{A})$、
$\mathsf{K}^-(\mathcal{A})$、$\mathsf{K}^\mathrm{b}(\mathcal{A})$
都是[[稳定无穷范畴]]。
:::

::: theorem
对 $C,D\in\mathsf{Ch}(\mathcal{A})$，其在 $\mathsf{K}(\mathcal{A})$
中的映射生象可计算如下：
$$
\operatorname{Hom}_{\mathsf{K}(\mathcal{A})}(C,D)=\Omega^\infty
\operatorname{RHom}_{\mathsf{Ch}(\mathcal{A})}(C,D),
$$
其中 $\operatorname{RHom}_{\mathsf{Ch}(\mathcal{A})}(C,D)\in\mathsf{Ch}(\mathsf{Ab})$
指链复形
$$
\left(\prod_{m\in\mathbb{Z}}\operatorname{Hom}(C_m,D_{m+n}),
(\partial^D\circ)-(\circ\partial^C)\right)_{n\in\mathbb{Z}},
$$
$\Omega^\infty$ 指复合函子 $\mathsf{Ch}(\mathsf{Ab})\to\mathsf{D}(\mathbb{Z})\to\mathsf{Sp}
\to\mathsf{Ani}$，也可理解为把链复形截断到同调次数 $\ge0$，
然后用 [[Dold–Kan 对应|Dold–Kan 等价]]获得单纯交换群，
再忘成单纯集，取它代表的[[生象]]。
:::

::: theorem
$\mathsf{K}^\mathrm{b}(\mathcal{A})$ 是[[加性范畴]]
$\mathcal{A}$ 的稳定化（参见条目[[权结构]]），
即有典范的[[范畴等价]]
$$
\mathsf{K}^\mathrm{b}(\mathcal{A})=\mathsf{Fun}^\mathrm{add}(\mathcal{A}^\mathrm{op},\mathsf{Sp}^\mathrm{fin}).
$$
:::

```terms
'链复形 $(\infty,1)$-范畴':
  en: '$(\infty,1)$-category of chain complexes'
```
