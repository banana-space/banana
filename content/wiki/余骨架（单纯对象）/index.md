---
title: 余骨架（单纯对象）
categories: [高阶范畴论]
navboxes: [高阶范畴论]
---

<problems>
- “例子”一节中 $(\mathrm{cosk}_{1}X)_2 = X_1 \times_{X_0} X_1 \times_{X_0} X_1$ 只要求两处顶点相合；三条边首尾相连成三角形边界似乎还需要第一条边与最后一条边的端点相合。
</problems>

::: convention
在本文中，

- [[范畴]]也可指 [[$(\infty,1)$-范畴]]。

:::

**余骨架**是对于[[单纯对象]]的一种构造，
是[[骨架 (单纯对象)|骨架]]的对偶概念。
骨架可以视为单纯对象的某种截断，
余骨架则可以视为单纯对象在截断之后的自由延拓：
给定一个单纯对象的低阶数据，余骨架通过右 Kan 扩张“自由地填充”所有兼容的高维单形。

余骨架在[[超覆盖]]理论中起关键作用：
超覆盖条件正是通过余骨架所给出的配对态射来表述的。

## 定义

::: definition [余骨架]
对于 $n \geq 0$，
记 $\mathbb{\Delta}_{\leq n} \subset \mathbb{\Delta}$ 为由 $[0],\dots,[n]$ 所张成的全子范畴。
对于范畴 $\mathcal{C}$ 以及单纯对象
$X_{\bullet} \colon \mathbb{\Delta}^{\mathrm{op}} \to \mathcal{C}$：

- 称 $X_{\bullet}$ 的 **$n$-余骨架** $\mathrm{cosk}_n (X)_{\bullet}$ 为如下单纯对象，
  它是沿着包含函子的[[右 Kan 扩张]]：
  \[
  \begin{tikzcd}
    \mathbb{\Delta}_{\leq n}^{\mathrm{op}}\ar[d,hook] \ar[dr,"X|_{\mathbb{\Delta}_{\leq n}}"]\\
    \mathbb{\Delta}^{\mathrm{op}} \ar[r,"\mathrm{cosk}_n (X)_{\bullet}"'] & \mathcal{C}.
  \end{tikzcd}
  \]

- 称 $X_{\bullet}$ 为 **$n$-余骨架的**，
  是指典范态射
  \[
  X_{\bullet} \to \operatorname{cosk}_n(X)_{\bullet}
  \]
  为同构。

:::

::: remark
展开右 Kan 扩张的定义，对于 $m > n$，有
\[
(\operatorname{cosk}_n X)_m \simeq \operatorname{lim}_{[k] \to [m],\, k \leq n} X_k,
\]
其中极限取遍所有从 $\mathbb{\Delta}_{\leq n}$ 中的对象 $[k]$ 到 $[m]$ 的态射。
直观上，
$(\operatorname{cosk}_n X)_m$ 收集了由低阶数据 $X_0, \dots, X_n$ 所决定的全部“兼容的
$m$-单形边界数据”。
:::

::: remark
可以类似给出[[单纯对象|半单纯对象]]的 $n$-余骨架定义。
:::

### 配对对象与配对态射

::: definition
令 $U_{\bullet}$ 为范畴 $\mathcal{C}$ 中的单纯对象。
称 $(\operatorname{cosk}_n U)_{n+1}$ 为 $U_{\bullet}$ 的 $(n+1)$-阶**配对对象**。
典范态射
\[
U_{n+1} \to (\operatorname{cosk}_n U)_{n+1}
\]
称为 $(n+1)$-阶**配对态射**。
:::

::: remark
配对对象参数化了由低阶单形所给出的全部“$(n+1)$-单形的边界”，
而配对态射则将实际的 $(n+1)$-单形映为其边界。
因此，$X_{\bullet}$ 为 $n$-余骨架的等价于：对于所有 $m > n$，
配对态射 $X_m \to (\operatorname{cosk}_{m-1} X)_m$ 均为同构，
即每个兼容的边界都有唯一的填充。
:::

## 例子

以下列出一些低阶的余骨架计算。

- 对于任意单纯对象 $X_{\bullet}$，其 $(-1)$-余骨架定义为取值终对象的常值单纯对象。
  因此 $(\mathrm{cosk}_{-1}X)_0 = \ast$。

- $0$-余骨架由 $X_0$ 完全决定。
  计算可得 $(\mathrm{cosk}_{0}X)_1 = X_0 \times X_0$：
  一个“兼容的 $1$-单形边界”恰好是一对“顶点”，即 $X_0$ 的两个元素。

- 计算可得 $(\mathrm{cosk}_{1}X)_2 = X_1 \times_{X_0} X_1 \times_{X_0} X_1$：
  一个“兼容的 $2$-单形边界”恰好是三条首尾相连的“边”。

## 性质

### 半单纯对象的刻画

余骨架性可以仅从半单纯对象（即只考虑面映射，忽略退化映射）的数据判定。

::: proposition
记 $\mathbb{\Delta}_{单} \subset \mathbb{\Delta}$
为全体保序单射所给出的子范畴，
且记 $\mathbb{\Delta}_{\leq n, 单} = \mathbb{\Delta}_{单} \cap \mathbb{\Delta}_{\leq n}$。
则单纯对象 $X_{\bullet}$ 为 $n$-余骨架的，
当且仅当有右 Kan 扩张图表：
\[
\begin{tikzcd}
  \mathbb{\Delta}_{\leq n, 单}^{\mathrm{op}}\ar[d,hook] \ar[dr,"{X_{\bullet}\mid_{\mathbb{\Delta}_{\leq n, 单}}}"] \\
  \mathbb{\Delta}_{单}^{\mathrm{op}} \ar[r,"X_{\bullet}\mid_{\mathbb{\Delta}_{单}}"'] & \mathcal{C}
\end{tikzcd}
\]
换句话说，$X_{\bullet}$ 的 $n$-余骨架性只取决于其对应的半单纯对象。
:::

### 存在性

::: proposition
令 $\mathcal{C}$ 为带有有限极限的范畴，$n \geq 0$。
则 $\mathcal{C}$ 中的任意单纯对象 $X_{\bullet}$ 均具有 $n$-余骨架。
:::

::: remark
有限极限条件是自然的，因为余骨架的定义涉及右 Kan 扩张，
而沿有限范畴的右 Kan 扩张可以用有限极限来计算。
:::

```terms
余骨架:
  en: coskeleton
配对对象:
  en: matching object
```
