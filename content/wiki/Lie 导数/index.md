---
title: Lie 导数
categories: [微分几何]
navboxes: [微分几何]
---

在[[微分几何]]中，
**Lie 导数**是在[[光滑流形]]上对[[向量场]]、[[微分形式]]，
乃至一般的[[张量场]]，求[[方向导数]]的一种方法。
在流形上并没有自然的方向导数概念，
为了定义方向导数，常常需要选取将向量丛（这里是[[切丛]]、[[余切丛]]）
的[[纤维]]与相邻的纤维等同起来的方法，即选取一个[[联络]]。
而 Lie 导数则使用另一种方法，即向量场的[[流]]，来将相邻的纤维等同起来。
这并不给出联络，因为这只给出了将每个纤维与沿着该向量场方向的相邻纤维等同起来的方法，
但这些信息已经足以用来定义方向导数。
对张量场 $T$ 和向量场 $X$，
Lie 导数 $\mathcal{L}_X T$ 即 $T$
在 $X$ 的流下的导数，作为 $T$ 沿 $X$ 方向的导数。

向量场的 Lie 导数就是其 [[Lie 括号 (微分几何)|Lie 括号]]：
对向量场 $X$、$Y$ 而言，有 $\mathcal{L}_X Y = [X, Y]$。

## 定义

设 $M$ 是[[光滑流形]]，$p, q$ 是[[自然数]]。
回忆 $M$ 上的 $(p, q)$-[[张量场]]是指[[向量丛]]
\[
(\mathrm{T}^* M)^{\otimes p} \otimes (\mathrm{T} M)^{\otimes q}
\]
的[[光滑截面]]。
例如，$(0, 0)$-张量场就是光滑函数，
$(0, 1)$-张量场就是向量场，$(1, 0)$-张量场就是 [[微分形式|$1$-形式]]。

若 $\varphi \colon M \to M$ 是[[局部微分同胚]]，
则对任何 $x \in M$，有[[切空间]]之间和[[余切空间]]之间的同构
\[
\begin{alignedat}{2}
  \varphi_* \colon &&
  \mathrm{T}_x (M) & \simeq \mathrm{T}_{\varphi(x)} (M), \\
  \varphi^* \colon &&
  \mathrm{T}_{\varphi(x)}^* (M) & \simeq \mathrm{T}_x^* (M),
\end{alignedat}
\]
由此可以定义[[线性同构]]
\[
\tilde{\varphi}_x=
((\varphi^*)^{-1})^{\otimes p} \otimes
(\varphi_*)^{\otimes q}
\colon
(\mathrm{T}_x^* M)^{\otimes p} \otimes
(\mathrm{T}_x M)^{\otimes q}
\simeq
(\mathrm{T}_{\varphi (x)}^* M)^{\otimes p} \otimes
(\mathrm{T}_{\varphi (x)} M)^{\otimes q}.
\]
对 $(p, q)$-张量场 $T$，可以定义张量场 $\tilde{\varphi} (T)$ 为
\[
\tilde{\varphi} (T)_x =
\tilde{\varphi}_{\varphi^{-1}(x)} ( T_{\varphi^{-1}(x)} ),
\]
其中 $x \in M$。

::: definition [Lie 导数]
设 $M$ 是[[光滑流形]]，$X$ 是 $M$ 上的[[光滑向量场]]，
$T$ 是 $M$ 上的 $(p, q)$-[[张量场]]。
记 $\varphi_t$ 为 $X$ 生成的 $M$ 的局部[[流]]。
则张量场 $T$ 的关于向量场 $X$ 的**Lie 导数**
是 $(p, q)$-张量场 $\mathcal{L}_X T$，定义为
\[
(\mathcal{L}_X T)_x =
-\frac{d}{d t} \, \tilde{\varphi}_t (T)_x \, \Big|_{t = 0} ,
\]
其中 $x \in M$。
:::

## 性质

### 基本性质

设 $M$ 是光滑流形，$X$ 是 $M$ 上的光滑向量场。

- 对 $M$ 上的光滑函数 $f \in C^\infty (M)$，
  有 $\mathcal{L}_X f = X f$，
  即 $f$ 关于 $X$ 的方向导数。

- 对 $M$ 上的光滑向量场 $Y$，
  有 $\mathcal{L}_X Y = [X, Y]$，
  即向量场的 [[Lie 括号 (微分几何)|Lie 括号]]。

- $\mathcal{L}_X$ 满足 [[Leibniz 法则]]：
  对任意 $(p, q)$-张量 $T$ 和 $(p', q')$-张量 $T'$，有
  \[
  \mathcal{L}_X (T \otimes T') =
  (\mathcal{L}_X T) \otimes T' +
  T \otimes (\mathcal{L}_X T').
  \]

- 对向量场 $X$、$Y$，有
  $\mathcal{L}_{[X,Y]}=[\mathcal{L}_X,\mathcal{L}_Y]$。

- 设 $T$ 是 $(p,q)$-张量场，视为映射
  $(\mathrm{T} M)^{\otimes p} \to (\mathrm{T} M)^{\otimes q}$。
  则对向量场 $Y_1,\dotsc,Y_p$ 有
  \[
  (\mathcal{L}_X T)(Y_1,\dotsc,Y_p) =
  \mathcal{L}_X (T(Y_1,\dots,Y_p))
  - \sum_{i=1}^p T(Y_1,\dotsc,[X,Y_i],\dots,Y_p).
  \]

- （**[[Cartan 公式]]**）
  Lie 导数作用在[[微分形式]]，即反对称 $(p, 0)$-张量场，满足
  \[
  \mathcal{L}_X = d \circ \iota_X + \iota_X \circ d,
  \]
  其中 $\iota_X$ 是向量场 $X$ 与微分形式的[[缩并]]。

```terms
Lie 导数:
  en: Lie derivative
  fr: dérivée de Lie :f
  de: Lie-Ableitung :f
  ja: Lie 微<び>分<ぶん>
  ko: Lie 미분
```
