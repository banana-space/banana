---
title: Kan 扩张
aliases: [左 Kan 扩张, 右 Kan 扩张]
categories: [范畴论]
notices:
  - name: 问题
    items:
      - “一般 $2$-范畴中”一节需要扩充。
navboxes: [范畴论]
---

在[[范畴论]]中，
**[[Daniel Kan|Kan]] 扩张**是一种重要的[[万有构造]]。
[[函子]] $F \colon \mathcal{C} \to \mathcal{D}$
沿函子 $f \colon \mathcal{C} \to \mathcal{C'}$
的 Kan 扩张是指 $F$ 的某种“最佳逼近”
$F' \colon \mathcal{C}' \to \mathcal{D}$，如下图所示。
\[
\begin{tikzcd}
  \mathcal{C} \ar[d, "f"'] \ar[r, "F"]
  & \mathcal{D}
  \\ \mathcal{C}' \ar[ur, dashed, "F'"']
\end{tikzcd}
\]
一般而言，我们并不能找到 $F'$ 使上图[[交换图|交换]]。
这是因为对每个 $x' \in \mathcal{C}'$，
其原像 $f^{-1} (x')$ 可能被 $F$ 映到 $\mathcal{D}$ 中的若干不同的对象。
这时，我们不再期望 $F' (x')$ 同构于这些对象（这意味着上图交换），
而只是期望 $F' (x')$ 有到这些对象的态射，
或者这些对象有到 $F' (x')$ 的态射。
并且，我们要求这些态射满足类似[[极限 (范畴论)|极限]]、[[余极限]]的万有性质。
这样，$F'$ 就能唯一确定下来。
前一种情况（类似极限）称为**右 Kan 扩张**，
而后一种情况（类似余极限）称为**左 Kan 扩张**。

范畴论中的诸多万有构造都是 Kan 扩张的特例，
包括[[极限 (范畴论)|极限]]、[[余极限]]、[[伴随函子]]、[[导出函子 (范畴论)|导出函子]]等。

## 定义

### 对于范畴

::: definition [Kan 扩张] {@Kan-扩张}
设给定[[范畴]]和[[函子]]
\[
\begin{tikzcd}
  \mathcal{C} \ar[d, "f"'] \ar[r, "F"]
  & \mathcal{D}
  \\ \mathcal{C}' \rlap{ .}
\end{tikzcd}
\]
则 $F$ 沿 $f$ 的**左 Kan 扩张**，如果存在，
是指函子 $G \colon \mathcal{C}' \to \mathcal{D}$，
带有[[自然变换]] $\alpha \colon F \Rightarrow G \circ f$，
满足以下万有性质：

- 对任何函子 $G' \colon \mathcal{C}' \to \mathcal{D}$
  以及任何自然变换 $\alpha' \colon F \Rightarrow G' \circ f$，
  存在唯一的自然变换 $\beta \colon G \Rightarrow G'$，
  使得 $\alpha' = \beta \star \alpha$，
  其中 $\star$ 指[[垂直复合]]，如下图所示。
  \[
  \begin{tikzcd}[row sep=3em, column sep=4em]
    \mathcal{C} \ar[d, "f"'] \ar[r, "F"]
    \ar[dr, phantom, pos=.2, shift right=1, "\Longrightarrow"{rotate=-55}]
    \ar[dr, phantom, pos=.15, shift right=3, "\scriptstyle \alpha"]
    \ar[dr, phantom, pos=.45, shift left=4, "= \! = \! \Longrightarrow"{rotate=-35}]
    \ar[dr, phantom, pos=.4, shift left=7, "\scriptstyle \alpha'"]
    \ar[dr, phantom, pos=.62, shift right=0, "\Longrightarrow"{rotate=-15}]
    \ar[dr, phantom, pos=.67, shift right=3, "{\scriptstyle \exists ! \, \beta}"]
    & \mathcal{D}
    \\ \mathcal{C}'
    \ar[ur, pos=.25, "G"']
    \ar[ur, bend right=60, looseness=1.5, shift right, pos=.65, "G'"']
    & {}
  \end{tikzcd}
  \]

此时，记 $G = \operatorname{Lan}_f (F)$。

与之对偶，$F$ 沿 $f$ 的**右 Kan 扩张**，如果存在，
是指函子 $G \colon \mathcal{C}' \to \mathcal{D}$，
带有自然变换 $\alpha \colon G \circ f \Rightarrow F$，
满足以下万有性质：

- 对任何函子 $G' \colon \mathcal{C}' \to \mathcal{D}$
  以及任何自然变换 $\alpha' \colon G' \circ f \Rightarrow F$，
  存在唯一的自然变换 $\beta \colon G' \Rightarrow G$，
  使得 $\alpha' = \alpha \star \beta$，如下图所示。
  \[
  \begin{tikzcd}[row sep=3em, column sep=4em]
    \mathcal{C} \ar[d, "f"'] \ar[r, "F"]
    \ar[dr, phantom, pos=.2, shift right=1, "\Longleftarrow"{rotate=-55}]
    \ar[dr, phantom, pos=.15, shift right=3, "\scriptstyle \alpha"]
    \ar[dr, phantom, pos=.45, shift left=4, "\Longleftarrow \! = \! ="{rotate=-35}]
    \ar[dr, phantom, pos=.4, shift left=7, "\scriptstyle \alpha'"]
    \ar[dr, phantom, pos=.62, shift right=0, "\Longleftarrow"{rotate=-15}]
    \ar[dr, phantom, pos=.67, shift right=3, "{\scriptstyle \exists ! \, \beta}"]
    & \mathcal{D}
    \\ \mathcal{C}'
    \ar[ur, pos=.25, "G"']
    \ar[ur, bend right=60, looseness=1.5, shift right, pos=.65, "G'"']
    & {}
  \end{tikzcd}
  \]

此时，记 $G = \operatorname{Ran}_f (F)$。
:::

### 一般 $2$-范畴中

## 例子

我们采用 @Kan-扩张 中的记号。

- 函子沿[[恒同函子]]的左、右 Kan 扩张均为其自身。

- 如果能找到一个真正的扩张，即 $G \colon \mathcal{C'} \to \mathcal{D}$
  使得 $G \circ f \simeq F$，
  则 $G$ 同时是 $F$ 沿 $f$ 的左、右 Kan 扩张。

- 若 $\mathcal{C}' = {*}$ 是[[单点范畴]]，
  则函子 $F \colon \mathcal{C} \to \mathcal{D}$ 沿
  $f \colon \mathcal{C} \to {*}$ 的左 Kan 扩张就是
  $F$ 的[[余极限]] $\operatorname{colim} F$；
  其右 Kan 扩张就是 $F$ 的[[极限 (范畴论)|极限]] $\lim F$。

- 恒同函子 $\mathbb{1}_{\mathcal{C}}$ 沿 $f \colon \mathcal{C} \to \mathcal{C'}$
  的左、右 Kan 扩张若被 $f$ 保持，则分别为 $f$ 的右、左[[伴随函子]]。

- 若 $f \colon \mathcal{C} \to \mathcal{C}'$ 是[[局部化 (范畴论)|局部化]]，
  则函子 $F \colon \mathcal{C} \to \mathcal{D}$
  沿 $f$ 的左、右 Kan 扩张分别是
  $F$ 的右、左[[导出函子 (范畴论)|导出函子]]。

```terms
Kan 扩张:
  en: Kan extension
  fr: extension de Kan :f
  de: Kan-Erweiterung :f
```
