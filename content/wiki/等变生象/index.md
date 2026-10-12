---
title: 等变生象
aliases: [G-生象]
categories: [等变同伦论]
notices:
  - name: 问题
    items:
      - “关于群的函子性”一节需要扩充。
---

::: convention
在本文中，

- [[范畴]]都指 [[$(\infty,1)$-范畴]]。

:::

**等变生象**是带[[群作用]]的[[拓扑空间]]的等变同伦信息的记录。
它是[[等变同伦论]]的基本研究对象，
正如[[生象]]是[[同伦论]]的基本研究对象。

## 定义

传统上，等变生象范畴是直接用等变空间定义的，亦即对群 $G$，
考虑带 $G$ 作用的空间的范畴，以带[[紧开拓扑]]的
$G$-等变映射为映射空间把它做成拓扑空间充实范畴，
在其上做同伦论。这里我们不那么做，而直接采用现代的
[[$(\infty,1)$-范畴]]论定义，它和传统定义的等价性参见
[[Elmendorf 定理]]。

### 对离散群

设 $G$ 是[[群]]。考虑 $G$ 的[[轨道范畴]] $\mathsf{Orb}_G$，
其对象为传递 $G$-集合，映射为 $G$-等变映射。
换言之，$\mathsf{Orb}_G$ 是 $G$-集合的范畴
$\mathsf{Set}_G$ 的[[满子范畴]]，由形如 $G/H$ 的对象张成。

::: definition [$G$-生象] {@离散群}
**$G$-生象**指 $\mathsf{Orb}_G$ 的[[生象]]值[[预层]]。
所有的 $G$-生象自然构成 [[$(\infty,1)$-范畴]]，记作
$\mathsf{Ani}_G$ 或 $G\text{-}\mathsf{Ani}$，
依定义此即 $\mathsf{Fun}(\mathsf{Orb}_G^\mathrm{op},
  \mathsf{Ani})$。对 $G$-生象 $X$ 及子群 $H\subseteq G$，
称 $X(G/H)$ 为 $X$ 的 **$H$-不动点**，记作 $X^H$。
:::

::: remark {@传统}
设 $Y$ 是带 $G$ 作用的拓扑空间。则对任一子群 $H$，
不动点集 $Y^H$ 自然带有[[子空间拓扑]]，且由于
$Y^H=\operatorname{Map}_G(G/H,Y)$，它对 $G/H$
有函子性，给出 $\mathsf{Orb}_G$ 的拓扑空间值预层。
把拓扑空间忘成生象，这就给出一个 $G$-生象。由
[[Elmendorf 定理]]，上述构造给出带 $G$ 作用的拓扑空间的同伦
$(\infty,1)$-范畴到 $G$-生象范畴的等价。
这也解释了我们把 $X(G/H)$ 记作 $X^H$ 的原因。
:::

有时我们不考虑整个 $\mathsf{Orb}_G$，而是考虑其某个满子范畴，
换言之，固定 $G$ 的子群族 $\mathcal{F}$，设其在共轭下不变，
以 $\mathsf{Orb}_G^\mathcal{F}\subseteq\mathsf{Orb}_G$
记稳定子群属于 $\mathcal{F}$ 者构成的满子范畴。

::: definition [$(G,\mathcal{F})$-生象] {@子群族}
**$(G,\mathcal{F})$-生象**指
$\mathsf{Orb}_G^\mathcal{F}$ 的[[生象]]值[[预层]]，
它们构成的 $(\infty,1)$-范畴记作
$\mathsf{Ani}_G^\mathcal{F}$。对
$(G,\mathcal{F})$-生象 $X$ 以及 $H\in\mathcal{F}$，
仍称 $X(G/H)$ 为 $X$ 的 **$H$-不动点**，仍记作
$X^H$。
:::

### 对拓扑群

如 $G$ 是不离散的[[拓扑群]]，情况就复杂一些。此时
$\mathsf{Orb}_G$ 是个拓扑空间充实范畴，对象形如 $G/H$，
其中 $H$ 为 $G$ 的闭子群，映射空间为
$$
\operatorname{Map}(G/H,G/K)=\{g\in G/K\mid HgK=gK\},
$$
带 $G/K$ 的子空间拓扑。我们把 $\mathsf{Orb}_G$ 视为
$(\infty,1)$-范畴，以下和离散群完全一样：

::: definition [$G$-生象] {@拓扑群}
**$G$-生象**指 $\mathsf{Orb}_G$ 的[[生象]]值[[预层]]。
所有的 $G$-生象自然构成 [[$(\infty,1)$-范畴]]，记作
$\mathsf{Ani}_G$ 或 $G\text{-}\mathsf{Ani}$，
依定义此即 $\mathsf{Fun}(\mathsf{Orb}_G^\mathrm{op},
  \mathsf{Ani})$。对 $G$-生象 $X$ 及闭子群 $H\subseteq G$，
称 $X(G/H)$ 为 $X$ 的 **$H$-不动点**，记作 $X^H$。
:::

此时也有 Elmendorf 定理，陈述略去。
也可以固定在共轭下不变的闭子群族 $\mathcal{F}$ 然后考虑
$\mathsf{Orb}_G^\mathcal{F}$，定义
$\mathsf{Ani}_G^\mathcal{F}$，在此也略去。

### 对投射有限群

虽然投射有限群可以视为拓扑群，
但我们通常不把它视为拓扑群来定义等变生象。设 $G$ 是投射有限群，
此时定义 $\mathsf{Orb}_G$ 为传递连续 $G$-集合的范畴，
换言之其对象形如 $G/H$，其中 $H$ 是 $G$ 的开子群，
然后仍像 @离散群 一样定义 $G$-生象范畴
$\mathsf{Ani}_G$。或者也可以取 $\mathcal{F}$ 为
$G$ 的所有开子群之族，然后视 $G$ 为抽象群采用 @子群族。
投射有限群比拓扑群简单的地方在于 $\mathsf{Orb}_G$ 是 $1$-范畴。

## 运算与性质

### 与带作用生象的关系

设 $G$ 为拓扑群。把拓扑空间忘成生象，视之为
[[$\mathbb{E}_1$-群]]，可作[[分类空间]] $BG\in\mathsf{Ani}$，
并考虑带 $G$ 作用的生象，或称**朴素 $G$-生象**，其范畴依定义为
$\mathsf{Ani}^{BG}=\mathsf{Fun}(BG,\mathsf{Ani})$。
（$BG$ 可以看成只有一个对象，自同态为 $G$ 的范畴，从而
$\mathsf{Fun}(BG,\mathcal{C})$ 中的对象就是 $\mathcal{C}$
中对象带 $G$ 作用。）朴素 $G$-生象比 $G$-生象包含的信息少得多。

::: definition [遗忘函子] {@底空间}
注意在 $\mathsf{Orb}_G$ 中，对象 $G$ 的自同态为 $G$，
故其张成的满子范畴为 $BG$，且由于 $BG$ 是
[[$\infty$-群胚]]，它与自己的反范畴自然同构。于是沿含入映射
$BG\to\mathsf{Orb}_G$ 限制就给出函子
$\mathsf{Ani}_G\to\mathsf{Ani}^{BG}$，称为
$G$-生象到朴素 $G$-生象的**遗忘函子**，其值也称为一个
$G$-生象的**底生象**或**底空间**，记为
$X\mapsto X(*)$。

遗忘函子显然保持所有极限、余极限，故由[[伴随函子定理]]它有两边的伴随，
其实就是沿 $BG\to\mathsf{Orb}_G$ 作两边的 [[Kan 扩张]]。
由于沿满忠实函子的 Kan 扩张仍然满忠实，
该遗忘函子的两个伴随都满忠实。其右伴随的像称为
**Borel 完备 $G$-生象**，
左伴随的像称为**余 Borel 完备 $G$-生象**，
有时也省去“完备”二字。常把两个伴随相应地记作
$\operatorname{Bor},\operatorname{coBor}$。
:::

::: remark
对一般的范畴 $\mathcal{C}$，也可考虑 $\mathsf{Orb}_G$
的 $\mathcal{C}$ 值预层范畴，姑且记作 $\mathcal{C}_G$，
则 @底空间 的第一段也对它适用，给出函子
$\mathcal{C}_G\to\mathcal{C}^{BG}$。如 $\mathcal{C}$
可表现，则 @底空间 的第二段也对它适用，给出函子
$\operatorname{Bor},\operatorname{coBor}\colon
  \mathcal{C}^{BG}\to\mathcal{C}_G$。

现如有两个可表现范畴 $\mathcal{C},\mathcal{D}$ 及可达函子
$F\colon\mathcal{C}\to\mathcal{D}$，则可配合上一段给出函子
$F_G\circ\operatorname{Bor},
  F_G\circ\operatorname{coBor}\colon
  \mathcal{C}^{BG}\to\mathcal{C}_G\to\mathcal{D}_G$。
当 $F$ 不保持极限、余极限时，$F_G\circ\operatorname{Bor},
  F_G\circ\operatorname{coBor}$ 相应地不再是
Borel 完备、余 Borel 完备的对象。
有趣的 $G$-生象常以这种方式产生。事实上，$\mathcal{C}=
  \mathsf{sSet}$，$\mathcal{D}=\mathsf{Ani}$，
$F$ 为“取伦型”时，$F_G\circ\operatorname{Bor}$
就对应于传统上把带 $G$ 作用单纯集视为等变生象的方法。
:::

### 关于群的函子性

## 例子

由 @传统，带 $G$ 作用的拓扑空间给出 $G$-生象。
下面部分例子以这种方式给出。

- 对 $G$ 的有限维实[[群表示|表示]] $V$，
  其[[一点紧化]] $S^V$ 是带 $G$ 作用的拓扑空间，
  给出 $G$-生象，称为 $V$ 的**表示球**。
  写成函子语言，这个 $G$-生象把轨道
  $A\in\mathsf{Orb}_G$ 打到实线性空间
  $\operatorname{Map}_G(A,V)$ 的一点紧化，视为生象。

- 常函子 $\varnothing$ 和 $*$ 显然都是 $G$-生象，
  且分别是始对象与终对象。一般地，设 $\mathcal{F}$ 是 $G$
  的共轭不变、向下封闭的闭子群族，则
  $$
  E\mathcal{F}(G/H)=\begin{cases}
    *,&H\in\mathcal{F};\\
    \varnothing,&H\notin\mathcal{F};
  \end{cases}
  $$
  给出 $G$-生象，因为 $\mathsf{Orb}_G$
  中稳定化子较大的轨道打不到稳定化子较小的轨道。显然
  $\mathcal{F}$ 为空族和全族时 $E\mathcal{F}$ 分别是
  $\varnothing$ 和 $*$，且这个 $E$ 构造是这样的
  $\mathcal{F}$ 的偏序集范畴到 $\mathsf{Ani}_G$
  的满忠实函子。另外，$\mathcal{F}$
  中仅有平凡群时，$E\mathcal{F}$ 可由被 $G$
  自由作用的可缩空间 $EG$ 给出。

  不难发现函子 $E\mathcal{F}\times-$ 和
  $\underline{\operatorname{Hom}}(E\mathcal{F},-)$
  都只依赖于 $G$-生象在 $\mathsf{Orb}_G^\mathcal{F}$
  上的取值，且若视为从 $\mathsf{Ani}_G^\mathcal{F}$
  出发的函子，则给出限制函子
  $\mathsf{Ani}_G\to\mathsf{Ani}_G^\mathcal{F}$
  的左伴随和右伴随。

```terms
等变生象:
  en: equivariant anima
$G$-生象:
  en: $G$-anima
朴素 $G$-生象:
  en: naïve $G$-anima
```
