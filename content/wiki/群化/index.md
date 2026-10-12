---
title: 群化
categories: [半群论, 高阶代数]
---

**群化**是[[群]][[范畴]]到[[幺半群]]范畴的[[遗忘函子]]之[[左伴随]]，
存在性可由[[伴随函子定理]]推出。它可用来定义
[[Grothendieck 群]]和一些 [[$K$ 理论]]。

## 经典情形

这里“经典”指的是限于 $1$-范畴，没有高阶同伦。
我们先介绍相对简明的[[交换群|交换]]情形，再介绍一般情形。

### 交换幺半群

::: definition
交换幺半群的**群化**指[[交换群]]范畴到交换幺半群范畴的遗忘函子之左伴随，
可具体构造如下：交换幺半群 $(A,+)$ 的群化为
$$
A^\text{gp}=\{a-b\mid a,b\in A\}/\sim,
$$
附带自然映射 $A\to A^\text{gp}$，$a\mapsto a-0$；
其中 $-$ 仅仅是形式记号，$a-b$ 应当视为 $(a,b)$ 的别称；
而 $a-b\sim c-d$ 指的是存在 $t\in A$ 使得 $a+d+t=b+c+t$。
:::

### 一般幺半群

::: definition
幺半群的**群化**指群范畴到幺半群范畴的遗忘函子之左伴随，
可具体构造如下：幺半群 $(M,\cdot)$ 的群化为
$$
M^\text{gp}=\{a_1b_1^{-1}\cdots a_nb_n^{-1}\mid
n\in\mathbb{N},\,a_1,\ldots,a_n,b_1,\ldots,b_n\in M\}/\sim,
$$
附带自然映射 $M\to M^\text{gp}$，$a\mapsto a1^{-1}$；
同样 ${}^{-1}$ 也是形式记号；而等价关系由
$aa^{-1}\sim1$、$b^{-1}b\sim1$、$1^{-1}\sim1$
及其左右同乘元素生成。
:::

## 高阶情形

::: definition
设 $k\in\mathbb{Z}_+\cup\{\infty\}$。[[$\mathbb{E}_k$-幺半群]]
（又叫 $\mathbb{E}_k$-空间）的**群化**指
[[$\mathbb{E}_k$-群]]（又叫群状 $\mathbb{E}_k$-空间）
范畴到 $\mathbb{E}_k$-幺半群范畴的遗忘函子之左伴随。
:::

::: remark
$\mathbb{E}_k$-幺半群的群化可用[[杠构造]]实现，
准确地说即 $X^\text{gp}=\Omega BX$，或严格按照
[@HA, 5.2.6] 的记号记作 $\operatorname{Cobar}(\operatorname{Bar}(X))$，
其中 $\operatorname{Bar}\colon\mathsf{Mon}_{\mathbb{E}_k}\to
  \mathsf{Mon}_{\mathbb{E}_{k-1}}$ 是杠构造，
$\operatorname{Cobar}$ 是其右伴随，在底空间上是[[环路空间]]函子 $\Omega$。
这是因为：

- 依定义，$\operatorname{Bar}$ 把 $\mathbb{E}_k$-幺半群打到连通
  $\mathbb{E}_{k-1}$-幺半群。

- $\operatorname{Cobar}\colon\mathsf{Mon}_{\mathbb{E}_{k-1}}
      \to\mathsf{Mon}_{\mathbb{E}_k}$ 的[[本质像]]是
  $\mathsf{Grp}_{\mathbb{E}_k}$，且限制在连通
  $\mathbb{E}_{k-1}$-幺半群的范畴上是[[范畴等价]]
  $(\mathsf{Mon}_{\mathbb{E}_{k-1}})_{\ge1}\to
      \mathsf{Grp}_{\mathbb{E}_k}$。

:::

## 例子

::: example
$\mathbb{N}$ 的群化是 $\mathbb{Z}$。一般地，
[[自由幺半群]]的群化是同样多生成元的[[自由群]]。
:::

::: example
群的群化是自身。
:::

::: example
[[环]] $R$ 的 [[Grothendieck 群]] $K_0(R)$
定义为[[有限生成模|有限生成]][[投射模|投射]]
$R$-模的同构类关于[[直和]]构成的交换幺半群的群化。
空间 $X$ 的[[拓扑 K 理论|拓扑 $K_0$ 群]]定义为 $X$
上有限维复向量丛的同构类关于直和构成的交换幺半群的群化。
:::

::: example
上例可推广到高阶。环 $R$ 上的有限生成投射模关于同构构成[[群胚]]，
又关于直和构成 $\mathbb{E}_\infty$-幺半群，其群化就是
$R$ 的[[代数 $K$ 理论]] $K(R)$。这是
[[Quillen $+$ 构造]]的现代叙述。类似地，把空间 $X$
上有限维复向量丛组成的 $\mathsf{Top}$-充实群胚视为
[[$\infty$-群胚]]，然后考虑其关于直和构成的
$\mathbb{E}_\infty$-幺半群，则其群化就是 $K_{\ge0}(X)$。
:::

::: example
一般地，对于对称幺半 $\infty$-范畴 $\mathcal{C}$，
$\infty$-群胚 $\operatorname{Obj}(\mathcal{C})$
关于 $\mathcal{C}$ 的幺半结构构成
$\mathbb{E}_\infty$-幺半群，其群化称为 $\mathcal{C}$
作为对称幺半范畴的 $K$ 理论。注意当 $\mathcal{C}$
是[[稳定 $\infty$-范畴]]，幺半结构取成直和时，
这并非 $\mathcal{C}$ 的[[代数 $K$ 理论]]；
后者的信息丰富得多。
:::

## 参考文献

```bibliography
HA:
  type: book
  author: Jacob Lurie
  year: 2017
  title: Higher Algebra
  url: https://www.math.ias.edu/~lurie/papers/HA.pdf
  label: HA
```

```terms
群化:
  en: group completion
  fr: symétrisation :f
  grc: ὁμαδισμός :m
  la: catervificatio :f
```
