---
title: Yoneda 嵌入
aliases: [米田函子, 米田嵌入, Yoneda 函子, Yoneda 预层, Yoneda 对应]
categories: [范畴论]
navboxes: [范畴论, 高阶范畴论]
---

<problems>
- “对充实范畴”一节需要扩充。
- “对 $(\infty,1)$-范畴”一节中，等价 $\mathsf{Fun}(\mathcal{C},\mathcal{D}_{/y}) \simeq \mathsf{Fun}(\mathcal{C},\mathcal{D})_{\underline{y}}$ 的记号似乎与前面的 $d \in \mathcal{D}$ 不一致，右边的下标似乎缺少斜线。
</problems>

**Yoneda 嵌入**（也称 **Yoneda 函子**，或**米田嵌入**、**米田函子**）
是由[[范畴]] $\mathcal{C}$ 嵌入其[[预层]]范畴
$\mathsf{Fun} (\mathcal{C}^{\mathrm{op}}, \ \mathsf{Set})$
的函子
\[
\begin{aligned}
  y \colon \mathcal{C}
  & \to \mathsf{Fun} (\mathcal{C}^{\mathrm{op}}, \ \mathsf{Set}), \\
  c & \mapsto \mathcal{C} (-, c).
\end{aligned}
\]
通过这一函子，范畴的[[对象]]可自然视作该范畴上预层。

[[Yoneda 引理]]说明 Yoneda 嵌入确实是嵌入，
即[[全忠实函子]]。

## 定义

::: definition [Yoneda 嵌入] {@def-yoneda-embedding}
设 $\mathcal{C}$ 是[[局部小范畴]]，
记 $\mathsf{Fun} (\mathcal{C}^\mathrm{op}, \ \mathsf{Set})$
为 $\mathcal{C}$ 到[[集合范畴]]的所有[[反变函子]]构成的[[函子范畴]]。
这个范畴也被称为 $\mathcal{C}$ 上[[预层]]的范畴。
函子
\[
\begin{aligned}
  y \colon \mathcal{C} & \to \mathsf{Fun} (\mathcal{C}^\mathrm{op}, \ \mathsf{Set}), \\
  c & \mapsto \mathcal{C} (-, c)
\end{aligned}
\]
称为 **Yoneda 嵌入**。
它把每个元素 $c \in \mathcal{C}$
映到一个函子 $y(c) = \mathcal{C} (-, c)$，通常记为
\[
h_c \colon \mathcal{C} ^\mathrm{op} \to \mathsf{Set},
\]
称为被 $c$ [[可表函子|表出]]的函子，
或被 $c$ 表出的预层。
:::

::: proposition
在 @def-yoneda-embedding 中，
Yoneda 嵌入 $y$ 确实是嵌入，即[[全忠实函子]]。
:::

::: proof
设 $c, d \in \mathcal{C}$。
对预层 $h_d$ 使用 [[Yoneda 引理]]，得到自然同构
\[
\mathsf{Fun} ( \mathcal{C} ^\mathrm{op}, \ \mathsf{Set} ) \ (h_c, h_d)
\simeq h_d (c)
\simeq \mathcal{C} (c, d).
\]
:::

::: definition [反变 Yoneda 嵌入]
在 @def-yoneda-embedding 中，
[[对偶范畴]] $\mathcal{C}^\mathrm{op}$ 的 Yoneda 嵌入常记为
\[
\begin{aligned}
  y \colon \mathcal{C}^\mathrm{op} & \to \mathsf{Fun} (\mathcal{C}, \ \mathsf{Set}), \\
  c & \mapsto h^c = \mathcal{C} (c, -),
\end{aligned}
\]
称为 $\mathcal{C}$ 的**反变 Yoneda 嵌入**。
:::

## 变体

### 对充实范畴

### 对 $(\infty,1)$-范畴

对于 $(\infty,1)$-范畴 $\mathcal{C}$，
Yoneda 嵌入可以通过以下方式描述：

考虑由 $(\infty,1)$-范畴变为其某个对象的[[俯范畴]]的函子
$\mathcal{C}_{/-} \colon \mathcal{C} \to \mathsf{Cat}_{\infty}$。
对于每个 $c \in \mathcal{C}$，
都有投影函子 $\mathcal{C}_{/c} \to \mathcal{C}$。
因此接下来尝试说明 $\mathcal{C}_{/-}$ 给出提升
$\mathcal{C}_{/-} \colon \mathcal{C} \to \mathsf{Cat}_{\infty/\mathcal{C}}$。
为具体构造这一提升，
只需观察到对于全体 $(\infty,1)$-范畴 $\mathcal{D}$ 以及 $d \in \mathcal{D}$，
都有范畴等价
$\mathsf{Fun}(\mathcal{C},\mathcal{D}_{/y}) \simeq \mathsf{Fun}(\mathcal{C},\mathcal{D})_{\underline{y}}$。
此处 $\underline{y}$ 是指常值函子。
由于[[推出纤维化]]保持拉回，
因此对于任意 $(\infty,1)$-范畴 $\mathcal{C}$，
都有 $p_2 \colon \mathcal{D} \times \mathcal{C} \to \mathcal{C}$ 为推出纤维化，
而对其进行直化给出函子 $\underline{\mathcal{D}} \colon \mathcal{C} \to \mathsf{Cat}_{\infty}$。
因此再结合[[直化定理]]给出范畴等价
\[
\mathsf{Fun}(\mathcal{C},\mathsf{Cat}_{\infty/\mathcal{C}})\simeq\mathsf{Fun}(\mathcal{C},\mathsf{Cat}_{\infty})_{/\underline{\mathcal{C}}} \simeq \mathsf{Cocart}(\mathcal{C})_{/p_2 \colon \mathcal{C} \times \mathcal{C} \to \mathcal{C}}
\]
而后观察到有 $\mathsf{Cocart}(\mathcal{C})$ 中的交换图表
\[
\begin{tikzcd}
  \mathsf{Ar}(\mathcal{C}) \ar[r,"{(s,t)}"] \ar[d,"t"] &\mathcal{C} \times \mathcal{C} \ar[dl,"p_2"]\\
  \mathcal{C}
\end{tikzcd}
\]
此处 $\mathsf{Ar}(\mathcal{C})$ 为[[箭头范畴]]，
这说明 $\mathcal{C}_{/-}$ 确实可以提升到 $\mathsf{Cat}_{\infty/\mathcal{C}}$。
而 $\mathcal{C}_{/c} \to \mathcal{C}$ 对于每个 $c \in \mathcal{C}$ 均为[[右纤维化]]。
从而 $\mathcal{C}_{/-}$ 穿过
$\mathsf{Fun}(\mathcal{C}^{\operatorname{op}},\mathsf{Ani})\simeq \mathsf{Right}(\mathcal{C})\subset \mathsf{Cat}_{\infty/\mathcal{C}}$。
由此可以给出 $(\infty,1)$-版本的 Yoneda 嵌入。

::: definition
设 $\mathcal{C}$ 为 $(\infty,1)$-范畴，
则函子
\[
y \colon \mathcal{C} \xrightarrow{\mathcal{C}_{/-}} \mathsf{Right}(\mathcal{C}) \xrightarrow{直化} \mathsf{Fun}(\mathcal{C}^{\operatorname{op}},\mathsf{Ani}),
\]
为 **Yoneda 嵌入**。
它将每个对象 $c \in \mathcal{C}$ 映为函子 $y(c) = \mathcal{C}(-,c)$。
:::

::: remark
可以利用指数律恢复出 Hom 函子，
即
$\mathsf{Fun}(\mathcal{C},\mathsf{Fun}(\mathcal{C}^{\operatorname{op}},\mathsf{Ani}))\simeq \mathsf{Fun}(\mathcal{C}^{\operatorname{op}}\times\mathcal{C},\mathsf{Ani})$。
这给出[[扭箭头范畴]]作为右纤维化的定义。
:::

```terms
Yoneda 嵌入:
  en: Yoneda embedding
  de: Yoneda-Einbettung :f
  fr: plongement de Yoneda :m
```
