---
title: 非分歧态射
categories: [概形论]
navboxes: [态射性质]
---

在[[代数几何]]中，
**非分歧态射**是一类[[概形态射]]，
是指没有[[分歧点]]的态射，
是[[微分几何]]中[[流形]]之间[[浸入 (微分几何)|浸入]]的类比。

例如，考虑态射 $f \colon \mathbb{C} \to \mathbb{C}$，定义为
\[
f (z) = z^n,
\]
其中 $n \geq 2$。
则 $f$ 有一个分歧点 $z = 0$，但除此之外没有别的分歧点。
因此，$f|_{\mathbb{C} \setminus \{ 0 \}}$ 是非分歧态射。
事实上，该限制不仅非分歧，还是[[平展态射]]。
又例如，[[闭浸入]]都是非分歧态射，但一般不平展。

在[[代数–几何对应]]下，
非分歧态射对应于环之间的[[非分歧同态]]。

## 定义

::: definition [非分歧态射]
称[[概形态射]] $f \colon X \to Y$ 为**非分歧态射**，
如果下列等价条件成立。

1. $f$ [[局部有限型态射|局部有限型]]，且
   [[Kähler 微分]]层 $\Omega_{X/Y} = 0$。

2. 对任意 $x \in X$，存在仿射开集
   $x \in U \simeq \operatorname{Spec} A$ 及
   $f (x) \in V \simeq \operatorname{Spec} R$，
   使得 $f (U) \subset V$，且诱导的环同态 $R \to A$ 是[[非分歧同态]]。

3. 对任意仿射开集
   $U \simeq \operatorname{Spec} A \subset X$ 及
   $V \simeq \operatorname{Spec} R \subset Y$，
   若 $f (U) \subset V$，则诱导的环同态 $R \to A$ 是[[非分歧同态]]。

4. $f$ [[局部有限型态射|局部有限型]]、[[形式非分歧态射|形式非分歧]]。

5. $f$ [[局部有限型态射|局部有限型]]，
   且对任意 $y \in Y$，纤维 $X_y$ 是若干离散点，
   每个点是[[剩余域]] $\kappa (y)$ 的一个[[有限扩张|有限]][[可分扩张]]的[[素谱]]。

6. $f$ [[局部有限型态射|局部有限型]]，
   且对任意 $y \in Y$，[[几何纤维]] $X_{\overline{y}}$ 是若干离散点，
   每个点都同构于 $\operatorname{Spec} \overline{\kappa (y)}$，
   其中 $\overline{\kappa (y)}$ 是[[剩余域]] $\kappa (y)$ 的[[代数闭包]]。

:::

::: remark
在文献中，有时要求 $f$ [[局部有限表现]]，而不是上面定义中的局部有限型。
在环的[[非分歧同态]]的定义中，也有此区分。
但当 $Y$ [[局部 Noether 概形|局部 Noether]] 时，两者等价。
:::

## 性质

::: proposition
非分歧态射的复合、基变换仍是非分歧态射。
:::

::: proof
由[[非分歧同态]]的相应性质可得。
:::

::: proposition
概形间的[[开浸入]]、[[闭浸入]]、[[浸入 (代数几何)|浸入]]都是非分歧态射。
:::

::: proof
由于非分歧是局部性质，而开浸入是局部同构，故开浸入非分歧。
闭浸入对应环满射，而满射都是非分歧同态，故闭浸入非分歧。
浸入是开浸入与闭浸入的复合，故非分歧。
:::

::: proposition
态射 $f \colon X \to Y$ 非分歧，
当且仅当它[[局部有限型态射|局部有限型]]，
且[[对角态射]] $\Delta_f \colon X \to X \times_Y X$ 是[[开浸入]]。
:::

::: proof
由[[非分歧同态]]的相应性质可得。
:::

```terms
非分歧态射:
  en: unramified morphism
  fr: morphisme non-ramifié :m
```
