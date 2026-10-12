---
title: 仿射态射
aliases: [相对素谱]
categories: [概形论]
navboxes: [态射性质]
---

## 定义

::: definition
态射 $f \colon X \to S$ 为仿射态射，如果存在 $S$ 的仿射开覆盖
$S_\alpha$，使得 $X$ 的开子概形 $f^{-1}(S_\alpha)$ 都是[[仿射概形]]。
此时称 $X$ 为仿射 $S$ 概形。
:::

仿射 $S$ 概形是仿射概形的相对版本。如同从环构造其[[素谱]]，
对于 $(S,\mathcal{O}_S)$ 上的拟凝聚代数层 $\mathcal{A}$，也可以构造一个在
$S$ 上仿射的概形。

## 性质

::: proposition
- 仿射态射是[[拟紧态射]]、[[分离态射]]。

- 设 $f \colon X \to S$ 为仿射态射，则
  $f_*$ 正合，将[[拟凝聚层]]映到拟凝聚层。

- 仿射态射的复合还是仿射态射。

- 仿射态射的基变换还是仿射态射。

:::

::: proposition
若态射 $f \colon X \to S$ 为仿射态射，则对任何仿射开集 $U \subseteq S$，
都有 $f^{-1}(U)$ 是仿射概形。
:::

以下三个命题和[[仿射概形]]平行。

::: proposition
设 $X,Y$ 为 $S$ 概形，$f,g$ 分别为其结构态射。若 $X$ 为仿射 $S$-概形，则有
\[
\operatorname{Hom}_{S}(Y,X)=
\operatorname{Hom}_{\mathcal{O}_S}(f_*\mathcal{O}_X, g_*\mathcal{O}_Y).
\]
:::

::: proposition
设 $\mathcal{A}$ 为拟凝聚 $\mathcal{O}_S$ 代数层，
则存在一个仿射 $S$ 概形 $X$ 使得 $f_*(X) = \mathcal{A}$，
其在相差一个唯一 $S$ 同构的意义下被唯一确定，记作$\mathbf{Spec}(\mathcal{A})$，
称为 $\mathcal{A}$的**相对素谱**。
:::

::: proof
唯一性源自以上命题，下证存在性。对每个仿射开集 $U$，取
$X_U = \operatorname{Spec} \big(\Gamma(U,\mathcal{A})\big)$。
由于 $\Gamma(U,\mathcal{A})$ 是 $\Gamma(U,\mathcal{O}_S)$ 代数，
$X_U$ 是一个仿射 $U$ 概形，设 $f_U$ 是其结构态射。
由于 $\mathcal{A}$ 是拟凝聚的，有典范同构 $f_*(X_U) \simeq \mathcal{A}|_U$。

设 $V$ 是 $S$ 的另一仿射开集，且 $X_{U,V}$ 是 $X_U$ 的开子概形
$f_U^{-1}(U\cap V)$。则 $X_{U,V}, X_{V,U}$ 都在 $U\cap V$ 上
是仿射的，并且 ${f_U}_*(X_{U,V}), {f_{V}}_*(X_{V,U})$ 都
典范同构于 $\mathcal{A}|_{U\cap V}$。根据以上命题，这给出一个
同构 $ \theta_{U,V} \colon X_{U,V} \to X_{V,U} $。这些
同构通过 $\mathcal{A}$，自然满足上圈条件，因此得到一个概形
$X$，其被 $X_U$ 覆盖。每个 $X_U$ 都是 $U$ 概形，并且在重叠
部分的结构态射是相同的，因此 $X$ 是一个 $S$ 概形。由此构造，
易见 $X$ 是仿射 $S$ 概形，且 $f_*(\mathcal{O}_X) = \mathcal{A}$。
:::

::: proposition
$X\mapsto f_*\mathcal{O}_X$ 与
$\mathcal{A} \mapsto \mathbf{Spec}
(\mathcal{A})$
给出范畴等价
\[
\{ \text{仿射 $S$-概形} \} \simeq
\{ \text{拟凝聚 $\mathcal{O}_S$-代数层} \}.
\]
:::

## 例子

- [[闭浸入]]是仿射态射。

- [[整态射]]、[[有限态射]]依定义是仿射态射。

- 仿射概形间的态射是仿射态射；一般地，由[[对角态射]]论证，
  仿射概形到分离概形的态射是仿射态射。

- 仿射平面到双原点仿射平面的开浸入不是仿射态射。

```terms
仿射态射:
  en: affine morphism
  de: affiner Morphismus
  fr: morphisme affine
```
