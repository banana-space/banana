---
title: 平坦态射
categories: [概形论]
navboxes: [态射性质]
---

在[[代数几何]]中，
**平坦态射**是一类[[概形态射]]。
直观上看，态射 $f \colon X \to S$ 平坦，
是说当 $s \in S$ 移动时，
纤维 $X_s$ 看起来像是在连续地变化，而不会跳跃。
这一描述并不是完全准确的，
例如[[开浸入]]都是平坦态射，
但其纤维可以从单点跳跃到空集。
但我们至少可以说，在 $X$ 的每点周围，
这些纤维在该点附近看起来像是在连续变化。
若对 $f$ 加上一些限制，例如假设 $f$ 为[[射影态射]]，则此种跳跃现象就不会发生，
并且上述直观还可以严格化：每个纤维的 [[Hilbert 多项式]]均相等。

这并不是说每个纤维 $X_s$ 都同构。
例如，考虑态射
\[
f \colon X = \{ (x, y, t) \in \mathbb{C}^3 \mid xy = t \}
\longrightarrow S = \mathbb{C},
\]
定义为 $f (x, y, t) = t$。
可以验证 $f$ 平坦。
而纤维 $X_0$ 是曲线 $x y = 0$，具有一个[[奇点]]；
其它纤维 $X_t$ 则是光滑曲线 $x y = t$。
这一族曲线看起来确实在连续地变化，虽然其纤维不全同构。

在[[代数–几何对偶]]下，平坦态射对应于环的[[平坦同态]]。

## 定义

::: definition
称[[概形态射]] $f \colon X \to Y$ 为**平坦态射**，
如果以下等价条件成立。

1. 对任意 $x \in X$，存在仿射开集
   $x \in U \simeq \operatorname{Spec} A$ 及
   $f (x) \in V \simeq \operatorname{Spec} R$，
   使得 $f (U) \subset V$，且诱导的环同态 $R \to A$ 是[[平坦同态]]。

2. 对任意仿射开集
   $U \simeq \operatorname{Spec} A \subset X$ 及
   $V \simeq \operatorname{Spec} R \subset Y$，
   若 $f (U) \subset V$，则诱导的环同态 $R \to A$ 是[[平坦同态]]。

3. 对任意 $x \in X$，[[茎]]的同态
   $\mathcal{O}_{Y, f (x)} \to \mathcal{O}_{X, x}$
   是[[平坦同态]]。

:::

## 性质

::: proposition
平坦态射的复合、基变换还是平坦态射。
:::

::: proof
由[[平坦同态]]的相应性质可得。
:::

::: proposition
[[开浸入]]、环[[局部化]]诱导的素谱的态射、
[[整概形]]的[[一般点]]到该概形的含入都是平坦态射。
:::

::: proof
这些映射都诱导茎的同构。
:::

```terms
平坦态射:
  en: flat morphism
  de: flacher Morphismus :m
  fr: morphisme plat :m
  la: morphismus planus :m
  grc: ἐπίπεδος μορφισμός :m
```
