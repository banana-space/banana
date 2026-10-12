---
title: Artin 环
categories: [一般环论, 交换代数]
notices:
  - name: 问题
    items:
      - “一般性质”一节中，命题 2.2 的“即等价于其上有限生成左模的子模也有限生成”似乎是 Noether 性的刻画，而不是 Artin 性的刻画。
navboxes: [交换代数]
---

**Artin 环**是具有一定有限性质的环，
满足任意理想族都有极小元（@artinianringdef）。

## 定义

::: definition {@artinianringdef}
称一个[[环]]为

- **左 Artin 环**，
  意思是其任一族左[[理想]]在包含偏序下都有[[极小元]]。

- **右 Artin 环**，
  意思是其任一族右理想在包含偏序下都有极小元。

- **Artin 环**，
  意思是其既是左 Artin 环也是右 Artin 环。

显然对于交换环，这些概念都是一样的。
:::

::: remark [理想链定义]
左 Artin 的一个等价定义是左理想降链都终止，即对任意左理想降链
\[
I_1 \supset I_2 \supset \cdots,
\]
都存在 $n$ 使得 $I_n=I_{n+1}=\cdots$。

左 Artin 显然推出降链终止，因为上面的降链必须终止于理想族
$\{I_n\}_{n\in\mathbb{Z}_+}$ 的极小元。反过来如不左 Artin，
则存在一族左理想没有极小元，便可归纳取出严格下降的左理想链。

对右 Artin 与 Artin 亦有完全一样的事情。
:::

## 性质

### 一般性质

以下只陈述左 Artin 环的性质。右边当然是完全一样的。
以下两条性质与 [[Noether 环]]对称。

::: proposition
左 Artin 环的[[商环]]总是左 Artin。
:::

::: proof
这是因为[[同构定理]]，$A/I$ 的左理想与 $A$ 中包含 $I$
的左理想一一对应。
:::

::: proposition
一个环左 Artin，等价于其上所有[[有限生成左模]]为左
[[Artin 模]]，即等价于其上有限生成左模的子模也有限生成。
:::

下面则是与 Noether 环不对称的性质。
对环而言，Artin 严格强于 Noether，这与 [[Artin 模]]和
[[Noether 模]]的关系大不相同。

::: proposition
[[半单环]]正是那些 [[Jacobson 根]]等于零的左 Artin 环。
:::

::: proof
由 [[Artin–Wedderburn 定理]]，半单环 Jacobson 根为 $0$；
且由该定理的证明，它作为自己的左模[[有限长模|有限长]]，知左 Artin。
反过来设 $R$ 为左 Artin 环，Jacobson 根为 $0$。
由左 Artin，所有极大左理想的交是它们中有限个的交，
故存在极大左理想 $\mathfrak{m}_1,\ldots,\mathfrak{m}_n$
交为 $0$。于是自然映射
$$
R\to\bigoplus_{i=1}^nR/\mathfrak{m}_i
$$
为单射，即 $R$ 是半单左 $R$-模的子模，为半单。
:::

::: theorem [Hopkins–Levitzki]
左 Artin 环一定是左 [[Noether 环]]，
即它作为自己的左模[[有限长模|有限长]]。
其 Jacobson 根等于幂零根。
:::

::: proof
考虑左 Artin 环 $R$。记其 Jacobson 根为 $J$。
首先对降链
$$
R\supseteq J\supseteq J^2\supseteq\cdots
$$
用 Artin 性，知存在 $n\in\mathbb{N}$ 使得 $J^n=J^{n+1}$。
先证 $J^n=0$。反证法，如 $J^n\ne0$，考虑非空的左理想集合
$$
\{\mathfrak{a}\subseteq R\mid J^n\mathfrak{a}\ne0\},
$$
由 Artin 性其有极小元。显然此极小元一定是主理想，设为 $Ra$。
由于 $J^{n+1}=J^n$，$J^n(Ja)=J^{n+1}Ra\ne0$，故由极小性
$Ja=Ra$。但依定义 $Ra\ne0$，这与 [[Nakayama 引理]]矛盾！
故 $J^n=0$。

所以，为证 $R$ 作为自己的左模有限长，
只需对每个自然数 $m$ 说明 $J^m/J^{m+1}$ 作为 $R/J$ 模有限长。
由以上命题，$R/J$ 为[[半单环]]，[[Morita 等价]]于有限个[[除环]]之积，
于是对其左模，有限长等价于 Artin。而 $R$ 左 Artin 自然推出左模
$J^m/J^{m+1}$ 为 Artin，即得定理。
:::

Artin 环上[[平坦模]]和[[投射模]]一样。

::: proposition
左 Artin 环的平坦右模投射。
:::

### 交换代数性质

[[交换环|交换]]的 Artin 环有些特有的性质。本小节中的环都指交换环。

::: proposition
交换环 Artin 当且仅当其 Noether 且零维。
:::

::: theorem [结构定理]
Artin 环都是 Artin [[局部环]]的有限乘积。
Artin 局部环是[[极大理想]][[幂零理想|幂零]]的 [[Noether 环]]。
:::

如果以[[代数几何]]的观点来看，
Artin 环代表着有限点型的 [[Noether 概形]]的谱：

::: proposition
Noether 环 $A$ 是 Artin 环等价于 $\operatorname{Spec}A$ 是有限离散的。
反过来离散的 Noether 概形都是 Artin 环的谱。
:::

但是 $\operatorname{Spec}A$ 在结构层上可能会有幂零的元素，
即在局部上构成无穷小邻域。

## 例子

- 域上有限维的[[结合代数]]是 Artin 环。
  特别地，
  有限群 $G$ 的 $k$-[[群代数]] $k[G]$ 是 Artin 环。

- $k[t]/(t^n)$ 是 Artin 环。

- 左 Artin 环可以不右 Artin，甚至不右 [[Noether 环|Noether]]。
  任取不[[有限扩张|有限]]的[[域扩张]] $E/F$，即 $E$ 作为
  $F$-向量空间为无穷维。则
  $$
  \left[\begin{matrix}F&0\\E&E\end{matrix}\right]
  $$
  就是这样的环。

```terms
Artin 环:
  en: Artinian ring
  de: artinscher Ring
  fr: anneau artinien
```
