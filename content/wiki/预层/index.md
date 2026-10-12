---
title: 预层
categories: [层论]
navboxes: [层论]
---

**预层**赋予几何对象以代数结构。
例如，对[[拓扑空间]] $X$ 而言，
预层 $\mathcal{F}$ 给每个开集 $U \subset X$ 赋予一个[[集合]] $\mathcal{F} (U)$，
作为抽象的“$U$ 上所有[[函数]]的集合”。
例如，$\mathcal{F} (U)$ 可以是所有 $U \to \mathbb{R}$ 的函数的集合。
若两个开集互相包含：$U \subset V$，
则 $V$ 上的函数可以限制在 $U$ 上，
得到小开集上的函数，从而有限制映射 $\mathcal{F} (V) \to \mathcal{F} (U)$。
这样的结构就称为预层。
更一般地说，范畴 $\mathcal{C}$ 上的预层就是它上面的[[反变函子]]，
而上述拓扑空间的例子就是取它的[[开集范畴]]的特例。

如果预层上每个函数由它局部上的取值决定，也就是满足[[层公理]]，
它就会成为[[层]]。

## 定义

### 拓扑空间上的预层

::: definition [预层]
设 $X$ 是[[拓扑空间]]，$\mathcal{D}$ 是[[范畴]]。
则 $X$ 上取值于 $\mathcal{D}$ 的**预层** $\mathcal{F}$
由以下信息组成：

- 对每个开集 $U \subset X$，有一个对象
  \[
  \mathcal{F} (U) \in \mathcal{D},
  \]
  称为 $U$ 上 $\mathcal{F}$ 的所有**截面**构成的[[空间]]。

- 对任两个开集 $U \subset V \subset X$，有一个 $\mathcal{D}$ 中的态射
  \[
  \operatorname{res}_U^V
  \colon \mathcal{F} (V) \to \mathcal{F} (U),
  \]
  称为**限制映射**。
  这个映射通常也记为 $(-)|_U$。

  限制映射还满足如下[[函子性]]要求：

  - $\operatorname{res}_U^U = \mathbb{1}_{\mathcal{F} (U)}$。

  - 对于任意满足 $U \subset V \subset W$ 的开集，都有
    $\operatorname{res}_U^W = \operatorname{res}_U^V \circ
    \operatorname{res}_V^W$。

当 $\mathcal{D} = \mathsf{Set}$ 为[[集合范畴]]时，
通常称 $\mathcal{F}$ 为**集合预层**；
当 $\mathcal{D} = \mathsf{Ab}$ 为[[Abel 群范畴]]时，
通常称 $\mathcal{F}$ 为**Abel 预层**，以此类推。
:::

::: example
设 $X, Y$ 是两个拓扑空间。
对每个开集 $U \subset X$，定义
\[
\mathcal{F} (U) = \mathsf{Top} (U, Y)
\]
为 $U$ 到 $Y$ 的所有连续映射的集合。
则 $\mathcal{F}$ 是 $X$ 上的集合预层。
:::

::: remark
定义范畴 $\mathsf{Open}(X)$ 如下：
其对象为 $X$ 的开集，
其态射为开集之间的含入映射。
则 $X$ 上的预层等同于
$\mathsf{Open}(X)$ 上的预层（@def-presheaf-cats）。
:::

### 范畴上的预层

::: definition [预层] {@def-presheaf-cats}
设 $\mathcal{C}$、$\mathcal{D}$ 是[[范畴]]。
则 $\mathcal{C}$ 上取值于 $\mathcal{D}$
的**预层**就是一个函子
\[
\mathcal{F} \colon \mathcal{C}^{\mathrm{op}} \to \mathcal{D},
\]
也即 $\mathcal{C}$ 到 $\mathcal{D}$ 的一个[[反变函子]]。

当 $\mathcal{D} = \mathsf{Set}$ 为[[集合范畴]]时，
通常称 $\mathcal{F}$ 为一个**集合预层**；
当 $\mathcal{D} = \mathsf{Ab}$ 为[[Abel 群范畴]]时，
通常称 $\mathcal{F}$ 为一个 **[[Abel 预层]]**，以此类推。
:::

::: definition [预层态射]
设 $\mathcal{F}, \mathcal{G} \colon
\mathcal{C}^{\mathrm{op}} \to \mathcal{D}$
为 $\mathcal{C}$ 上两个取值于 $\mathcal{D}$ 的预层。
则 $\mathcal{F}$ 到 $\mathcal{G}$ 的**态射**
就是 $\mathcal{F}$ 到 $\mathcal{G}$ 的[[自然变换]]。
:::

::: definition [预层范畴]
设 $\mathcal{C}$、$\mathcal{D}$ 是范畴。
则 $\mathcal{C}$ 上所有取值于 $\mathcal{D}$ 的预层及其态射构成一范畴，
称为 $\mathcal{C}$ 上的 **$\mathcal{D}$-预层范畴**，记为
$\mathsf{PSh} (\mathcal{C}, \mathcal{D})$。

事实上，此范畴即是[[函子范畴]] $\mathsf{Fun} (\mathcal{C}^{\mathrm{op}}, \mathcal{D})$。
:::

## 性质

::: proposition
设有范畴 $\mathcal{C}$、$\mathcal{D}$、$\mathcal{I}$，
函子（视为[[交换图表]]）$F \colon \mathcal{I} \to \mathsf{PSh}(\mathcal{C}, \mathcal{D})$。
则 $F$ 的[[极限]]存在当且仅当对每个 $c \in \mathcal{C}$，极限
\[
\mathcal{F}(c) = \lim_{i \in \mathcal{I}} F(i)(c)
\]
的极限存在。此时 $F$ 的极限把 $c$ 打到 $\mathcal{F}(c)$，
把态射 $f \colon c \to c'$ 打到各 $F(i)(f) \colon F(i)(c') \to F(i)(c)$
在极限上诱导的态射。
换言之，预层的极限可以“逐点计算”。把 $\mathcal{D}$ 换成
$\mathcal{D}^{\rm op}$ 就得到对余极限的同样命题。
:::

```terms
预层:
  en: presheaf
  de: Prägarbe
  fr: préfaisceau
  la: praefascis
```
