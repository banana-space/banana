---
title: 连合–截断分解系
categories: [高阶范畴论]
navboxes: [高阶范畴论]
---

::: convention
在本文中，

- [[范畴]]都指 [[$(\infty,1)$-范畴]]。
- [[意象]]都指 [[$(\infty,1)$-意象]]。

:::

**连合–截断分解系**是意象理论中的基本结果。
它表明，在意象中每个态射都可以本质唯一地分解为一个高连合态射后接一个低截断态射，
从而提供了一种“按同伦阶逐层分解态射”的系统方法。
这是经典范畴论中[[满单分解]]在高阶范畴论中的自然推广。

具体而言，在意象 $\mathcal{T}$ 中，
全体 $(n+1)$-[[连合]]态射所构成的类与全体
$n$-[[截断 (范畴论)|截断]]态射所构成的类构成了一个[[分解系]]。
特别地，取 $n = -1$ 时，
$0$-连合态射恰好是[[有效满态射]]，
$(-1)$-截断态射恰好是单态射，
由此恢复经典的满单分解。

## 陈述

::: theorem
令 $\mathcal{T}$ 为意象，$n \geq -2$。
记 $\mathsf{Conn}_{n+1}$ 为全体 $(n+1)$-连合态射所构成的类，
$\mathsf{Trun}_n$ 为全体 $n$-截断态射所构成的类。
则二元组 $(\mathsf{Conn}_{n+1},\mathsf{Trun}_n)$ 构成 $\mathcal{T}$ 上的[[分解系]]。
:::

::: remark
回顾[[分解系]]的定义，上述定理包含两部分内容：

1. **分解性**：$\mathcal{T}$ 中的每个态射 $f \colon X \to Y$ 都可以分解为
   \[
   X \xrightarrow{e} Z \xrightarrow{m} Y,
   \]
   其中 $e$ 为 $(n+1)$-连合态射，$m$ 为 $n$-截断态射。

2. **正交性**：每个 $(n+1)$-连合态射左正交于每个 $n$-截断态射。

分解系的一般理论保证了这一分解在同伦的意义下是唯一的。
:::

## 证明

### 分解性

对于态射 $f \colon X \to Y$，将 $f$ 视为切片意象 $\mathcal{T}_{/Y}$ 中的对象 $X/Y$。
定义其 $n$-截断为 $X_n \coloneqq \tau_n(X/Y)$，
从而得到分解
\[
X \to X_n \to Y.
\]
根据截断函子的定义，态射 $X_n \to Y$ 自然是 $n$-截断态射。
因此一切归结为说明典范态射 $X \to X_n$（在 $\mathcal{T}_{/Y}$ 中）为 $(n+1)$-连合态射。

换言之，我们需要说明对于任意 $n$-截断对象 $U \in (\mathcal{T}_{/X_n})_{\leq n}$，都有生象同构：
\[
\operatorname{Hom}_{/X_n}(X_n,U) \xrightarrow{\;\sim\;} \operatorname{Hom}_{/X_n}(X,U).
\]

由于 $\mathcal{T}_{/X_n} \simeq (\mathcal{T}_{/Y})_{/X_n}$，
可以将问题完全转移到 $\mathcal{T}_{/Y}$ 上。
上述同构对应于如下 $\operatorname{Hom}$ 生象交换图表的纵向同伦纤维：
\[
\begin{tikzcd}
  \operatorname{Hom}_{/Y}(X_n,U) \ar[r]\ar[d] & \operatorname{Hom}_{/Y}(X,U) \ar[d]\\
  \operatorname{Hom}_{/Y}(X_n,X_n) \ar[r] & \operatorname{Hom}_{/Y}(X,X_n)
\end{tikzcd}
\]

由于 $U$ 与 $X_n$ 均为 $\mathcal{T}_{/Y}$ 中的 $n$-截断对象，
根据截断伴随的泛性质，底部和顶部的水平态射均是生象同构。
从而它们诱导的同伦纤维之间也自然是同构。

### 正交性

我们需要说明 $(n+1)$-连合态射 $f \colon X \to Y$ 左正交于 $n$-截断态射 $g \colon A \to B$。
根据正交性的定义，需证明如下交换图表中虚线所示提升构成的生象可缩：
\[
\begin{tikzcd}
  X \ar[r]\ar[d,"f"'] & A \ar[d,"g"]\\
  Y \ar[r]\ar[ur,dashed] & B
\end{tikzcd}
\]

关键一步是利用基变换将问题简化。
由于 $n$-截断态射关于拉回封闭，可以沿底部的态射 $Y \to B$ 拉回，
从而将 $g$ 替换为投影态射 $p \colon A \times_{B} Y \to Y$：
\[
\begin{tikzcd}
  X \ar[d,"f"'] \ar[r] & A \times_B Y \ar[d,"p"'] \ar[dr,phantom,very near start,"\lrcorner"] \ar[r] & A \ar[d,"g"]\\
  Y \ar[r,equal] \ar[ur,dashed] & Y \ar[r] & B
\end{tikzcd}
\]

在左侧的方块中，$f$ 是 $(n+1)$-连合态射，
而 $p$ 作为 $n$-截断态射 $g$ 的拉回仍然是 $n$-截断的
（即 $A \times_B Y$ 是 $\mathcal{T}_{/Y}$ 中的 $n$-截断对象）。
根据连合态射对截断对象的正交定义，对角线提升存在且其生象可缩。

## 识别有效满态射

连合–截断分解系在 $n=-1$ 时给出了满单分解。
为了完成这一识别，需要独立地证明有效满态射与单态射也构成分解系，
然后利用分解系的唯一性进行比较。

### （有效满，单）-分解系

记 $\mathsf{EffEpi}$ 为全体有效满态射所构成的类，
$\mathsf{Mono}$ 为全体单态射所构成的类。
我们说明 $(\mathsf{EffEpi},\mathsf{Mono})$ 构成 $\mathcal{T}$ 上的分解系。

#### 分解性

考虑 $\mathcal{T}$ 中的态射 $f \colon U \to X$。
定义 $V \coloneqq \operatorname{colim}_{[n] \in \mathbb{\Delta}^{\mathrm{op}}} \check{C}_n(f)$，
即 $f$ 的 [[Čech 脉]] 的几何实现。
这自然给出分解
\[
U \xrightarrow{e} V \xrightarrow{m} X.
\]
由于 $\check{C}(e) \simeq \check{C}(f)$，
态射 $e \colon U \to V$ 为有效满态射。

接下来需说明 $m$ 是单态射，即对角态射 $\Delta_m \colon V \to V \times_X V$ 为同构。
考虑如下拉回方块：
\[
\begin{tikzcd}
  U \times_V U \ar[r]\ar[d]\ar[dr,phantom,very near start,"\lrcorner"] & V \ar[d,"\Delta_m"]\\
  U \times_X U \ar[r,"g"'] & V \times_X V
\end{tikzcd}
\]

底部态射 $g$ 可以分解为
\[
U \times_X U \xrightarrow{h} U \times_X V \xrightarrow{u} V \times_X V,
\]
其中 $h$ 与 $u$ 分别为 $e \colon U \to V$ 沿两个因子的拉回，因此都是有效满态射。
从而拉回函子的复合
\[
g^* = h^* \circ u^* \colon \mathcal{T}_{/V \times_X V} \xrightarrow{u^*} \mathcal{T}_{/U \times_X V} \xrightarrow{h^*} \mathcal{T}_{/U \times_X U}
\]
为保守函子（因为有效满态射的拉回函子是保守的）。
因此，要说明 $\Delta_m$ 为同构，只需说明其沿 $g$ 的拉回
$U \times_V U \to U \times_X U$ 为同构，
而这恰好由 $\check{C}_1(e) \xrightarrow{\sim} \check{C}_1(f)$ 给出。

#### 正交性

考虑如下交换图表：
\[
\begin{tikzcd}
  U \ar[r]\ar[d,"f"'] & A \ar[d,hook,"i"]\\
  X \ar[r]\ar[ur,dashed] & B
\end{tikzcd}
\]
其中 $f$ 为有效满射，$i \colon A \hookrightarrow B$ 为单态射。
需要说明全体对角线提升所构成的生象可缩。

由于 $i$ 为单态射，其诱导的映射生象之间的态射是纤维要么空要么可缩的，
因此只需说明存在至少一个提升 $X \to A$ 使得图表交换。

在切片意象 $\mathcal{T}_{/B}$ 中，$X$ 可以等同于 Čech 脉 $\check{C}_{\bullet}(f)$ 的余极限。
而 Čech 脉的每一项 $\check{C}_{n}(f) = U^{\times_X (n+1)}$ 均通过 $U \to A \to B$ 分解，
从而自然落在全子范畴 $\mathcal{T}_{/A} \subseteq \mathcal{T}_{/B}$ 中。
由于单态射 $i$ 的性质保证 $\mathcal{T}_{/A}$ 在 $\mathcal{T}_{/B}$ 中关于余极限封闭，
余极限 $X$ 必然也落在 $\mathcal{T}_{/A}$ 中，给出所需的提升。

### 有效满态射即 $0$-连合态射

由于 $\mathsf{Mono} = \mathsf{Trun}_{-1}$，
而 $(\mathsf{EffEpi},\mathsf{Trun}_{-1})$ 与 $(\mathsf{Conn}_0,\mathsf{Trun}_{-1})$
均构成分解系，且右半部分相同，
由分解系的唯一性即得 $\mathsf{EffEpi} = \mathsf{Conn}_{0}$。
也就是说，有效满态射恰好就是 $0$-连合态射。

::: remark
这一识别在实践中非常有用：
有效满态射的定义涉及 Čech 脉的余极限，
而 $0$-连合态射的定义仅涉及 $(-1)$-截断，即 $\tau_{-1}(f) \simeq \ast$。
根据情况的不同，可以选用更方便的刻画。
:::

```terms
连合–截断分解系:
  en: connectivity–truncation factorization system
```
