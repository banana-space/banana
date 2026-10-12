---
title: 骨架（单纯对象）
categories: [高阶范畴论]
navboxes: [高阶范畴论]
---

::: convention
在本文中，

- [[范畴]]也可指 [[$(\infty,1)$-范畴]]。

:::

**骨架**是对于[[单纯对象]]的一种构造，
是[[余骨架 (单纯对象)|余骨架]]的对偶概念。
直观上，骨架只保留单纯对象在特定阶数以下的全体单形，
并删去高阶的非平凡胞腔，
因此可以将其理解为单纯对象的[[截断 (范畴论)|截断]]。

## 定义

::: definition [骨架]
对于 $n \geq 0$，
记 $\mathbb{\Delta}_{\leq n} \subset \mathbb{\Delta}$ 为由 $[0],\dots,[n]$ 所张成的全子范畴。
对于范畴 $\mathcal{C}$ 以及单纯对象
$X_{\bullet} \colon \mathbb{\Delta}^{\mathrm{op}} \to \mathcal{C}$：

- 称 $X_{\bullet}$ 的 **$n$-骨架** $\mathrm{sk}_n (X)_{\bullet}$ 为如下单纯对象，
  它是沿着包含函子的[[左 Kan 扩张]]：
  \[
  \begin{tikzcd}
    \mathbb{\Delta}_{\leq n}^{\mathrm{op}}\ar[d,hook] \ar[dr,"X|_{\mathbb{\Delta}_{\leq n}}"]\\
    \mathbb{\Delta}^{\mathrm{op}} \ar[r,"\mathrm{sk}_n (X)_{\bullet}"'] & \mathcal{C}.
  \end{tikzcd}
  \]

- 称 $X_{\bullet}$ 为 **$n$-骨架的**，
  是指典范态射
  \[
  \operatorname{sk}_n(X)_{\bullet} \to X_{\bullet}
  \]
  为同构。

:::

::: remark
与余骨架通过右 Kan 扩张定义相对，骨架通过左 Kan 扩张定义。
直观上，余骨架“自由填充”高维单形（取极限），而骨架“自由粘合”低维单形（取余极限）。
:::

::: remark
可以类似给出[[单纯对象|半单纯对象]]的 $n$-骨架定义。
:::

## 直观

为构建直观，取 $\mathcal{C} = \mathsf{Set}$ 为[[集合范畴]]，
此时单纯对象 $X_{\bullet}$ 就是[[单纯集]]。
记 $\Delta[n]$ 为标准 $n$-单形（即 $[n]$ 在 [[Yoneda 嵌入]]下的像），
则 $\mathrm{sk}_n(X)_k$ 可以描述为由所有形如 $\Delta[k] \to \Delta[m] \to X$（其中
$m \leq n$）的单形所构成的集合。

换言之，$\mathrm{sk}_n(X)$
就是取出 $X$ 中所有维数不超过 $n$ 的非退化单形，
连同所有退化到它们的退化单形，所构成的子单纯集。
由此可见，骨架构成了一条自然的滤链：
\[
\mathrm{sk}_0(X) \hookrightarrow \mathrm{sk}_1(X) \hookrightarrow \mathrm{sk}_2(X) \hookrightarrow \cdots
\]

接下来说明如何从 $(n-1)$-骨架逐步恢复 $n$-骨架。
记 $X^{\mathrm{nd}}_n$ 为 $X$ 中全体非退化 $n$-单形所构成的集合。
每个 $\tau \in X^{\mathrm{nd}}_n$ 对应一个态射 $\tau \colon \Delta[n] \to \mathrm{sk}_n(X)$，
而 $\Delta[n]$ 自身的 $(n-1)$-骨架 $\mathrm{sk}_{n-1}(\Delta[n])$ 恰好是 $\Delta[n]$ 的“边界”。
由此存在态射 $\bar{\tau}$ 使得如下图表交换：
\[
\begin{tikzcd}
  \mathrm{sk}_{n-1}(\Delta[n]) \ar[d,dashed,"\bar{\tau}"]\ar[r,hook]& \Delta[n]\ar[d,"\tau"]\\
  \mathrm{sk}_{n-1}(X)\ar[r,hook]& \mathrm{sk}_n(X)
\end{tikzcd}
\]

对所有非退化 $n$-单形取余积，即得到如下推出方块：
\[
\begin{tikzcd}
  \coprod_{\tau \in X^{\mathrm{nd}}_n}\mathrm{sk}_{n-1}(\Delta[n]) \ar[d]\ar[dr,phantom,very near end,"\ulcorner"]\ar[r,hook] & \coprod_{\tau \in X^{\mathrm{nd}}_n}\Delta[n]\ar[d]\\
  \mathrm{sk}_{n-1}(X)\ar[r] & \mathrm{sk}_n(X)
\end{tikzcd}
\]

直观地说，$\mathrm{sk}_n(X)$ 是在 $\mathrm{sk}_{n-1}(X)$ 的基础上，
沿每个非退化 $n$-单形的边界粘入一个 $n$-胞腔所得。
这正是 CW 复形逐维构造的范畴论类比。

## 性质

### 存在性

::: proposition
令 $\mathcal{C}$ 为带有推出的范畴，$n \geq 0$。
则 $\mathcal{C}$ 中的每个单纯对象都具有 $n$-骨架。
:::

::: remark
推出条件是自然的，因为骨架的定义涉及左 Kan 扩张，而沿有限范畴的左 Kan 扩张可以用有限余极限来计算。
这与余骨架需要有限极限条件恰好对偶。
:::

### 骨架滤链

::: proposition
令 $\mathcal{C}$ 为带有推出的范畴，
$X_{\bullet} \colon \mathbb{\Delta}^{\mathrm{op}} \to \mathcal{C}$
为单纯对象。
则有典范的态射链
\[
\mathrm{sk}_0(X) \to \mathrm{sk}_1(X) \to \mathrm{sk}_2(X) \to \cdots
\]
且 $X_{\bullet}$ 为此链的余极限。
:::

::: remark
此命题表明每个单纯对象都可以被其骨架过滤所逼近。
事实上，在[[稳定范畴]]中，
我们可以将稳定范畴中的单纯对象通过上述方式对应于[[滤链]]，
详见[[稳定 Dold–Kan 对应]]。
:::

```terms
骨架:
  en: skeleton
```
