---
title: Quillen 定理 A
categories: [范畴论, 同伦论]
navboxes: [高阶范畴论]
---

<problems>
- “陈述”一节中的推论“右纤维化是共尾的”似乎一般不成立（如空范畴到单点范畴的包含）。
</problems>

**Quillen 定理 A** 是 [[Daniel Quillen]]
提出的几个关于 [[$(\infty,1)$-范畴]]的[[几何实现]]的定理之一。

## 陈述

以下是其现代陈述。

::: theorem [Quillen 定理 A] {@thm-main}
对于 [[$(\infty,1)$-函子]] $\alpha \colon \mathcal{I} \to \mathcal{J}$，
以下条件等价：

1. $\alpha$ 是[[$(\infty,1)$-共尾函子]]。

2. 对于任意[[右纤维化]] $f \colon X \to \mathcal{J}$，都有自然同构
   \[
   \mathsf{Cat}_{\infty/\mathcal{J}}(\mathcal{I},X) \xrightarrow{\sim} \mathsf{Cat}_{\infty/\mathcal{J}}(\mathcal{J},X)
   \]

3. 对于任意 $j \in \mathcal{J}$，拉回
   \[
   \begin{tikzcd}
     \mathcal{I}_{j/} \mathrel{:=} \mathcal{I}\times_{\mathcal{J}}\mathcal{J}_{j/}\ar[r]\ar[d] & \mathcal{J}_{j/}\ar[d]\\
     \mathcal{I}\ar[r]& \mathcal{J}
   \end{tikzcd}
   \]
   均[[弱可缩]]，
   即 $|\mathcal{I}_{j/}| \simeq *$。

对偶地给出共首、左纤维化以及 $\mathcal{I}_{/j}$ 的情况。
:::

::: corollary
右纤维化是共尾的。
:::

## 证明

首先说明前两条的等价性（方便起见，证明共首版本），
令 $F \colon \mathcal{J} \to \mathsf{Ani}$ 是反直化为 $\mathcal{U} \to \mathcal{J}$ 的函子。
则拉回 $\alpha^*(\mathcal{U})\to \mathcal{I}$ 给出
$F \circ \alpha\colon \mathcal{I} \to \mathsf{Ani}$ 的反直化。
而由取值在 $\mathsf{Ani}$ 中的 [[$(\infty,1)$-极限]]刻画可知
\[
\operatorname{lim}_{j\in \mathcal{J}}F(j) \simeq
\mathsf{Cat}_{\infty/\mathcal{J}}(\mathcal{J},\mathcal{U}).
\]
同理再进行些微计算可得
\[
\operatorname{lim}_{i\in \mathcal{I}}F(\alpha(i)) \simeq
\mathsf{Cat}_{\infty/\mathcal{I}}(\mathcal{I},\alpha^*(\mathcal{U})) \simeq
\mathsf{Cat}_{\infty/\mathcal{I}}(\mathcal{I},\mathcal{U}).
\]
因此，条件 2 成立当且仅当条件 1 对于全体函子 $F \colon \mathcal{J} \to \mathsf{Ani}$ 成立。
而后令 $F \colon \mathcal{J} \to \mathcal{C}$ 为任意函子。
由于 [[Yoneda 嵌入]]
$y \colon \mathcal{C} \to \mathsf{Fun}(\mathcal{C}^{\operatorname{op}},\mathsf{Ani})$
与极限交换，且全忠实。
因此条件 1 关于函子 $F \colon \mathcal{J} \to \mathcal{C}$ 成立当且仅当
其关于 $y \circ F \colon \mathcal{J} \to \mathsf{Fun}(\mathcal{C}^{\operatorname{op}},\mathsf{Ani})$
成立，
而后者中极限是逐分量计算的，且等价也是如此，
因此约化到打向 $\mathsf{Ani}$ 的情况。从而说明了前两条的等价性。

接下来说明条件 1 推条件 3，
现在考虑函子 $\mathcal{J}(j_0,-) \colon \mathcal{J} \to \mathsf{Ani}$，
不难发现其反直化为投影态射 $t \colon \mathcal{J}_{j_0/}\to \mathcal{J}$。
因此计算余极限给出
\[
\operatorname{colim}_{j\in \mathcal{J}} \mathcal{J}(j_0,j) \simeq |\mathcal{J}_{j_0/}|,
\]
而后者有始对象 $\mathbb{1}_{j_0}$ 这给出 $\{\mathbb{1}_{j_0}\}$ 与 $|\mathcal{J}_{j_0/}|$
之间的伴随对，
对其进行几何实现后给出同伦等价 $|\mathcal{J}_{j_0/}| \simeq *$。
而后由于 $\mathcal{J}(j_0,\alpha(-))$ 的反直化为 $\mathcal{I}_{j_0/} \to \mathcal{I}$。
从而给出
\[
|\mathcal{I}_{j_0/}|\simeq \operatorname{colim}_{i\in \mathcal{I}} \mathcal{J}(j_0,\alpha(i))
\simeq \operatorname{colim}_{j\in \mathcal{J}} \mathcal{J}(j_0,j) \simeq |\mathcal{J}_{j_0/}|
\simeq *.
\]
接下来说明条件 3 能推条件 2。
对于函子 $\alpha \colon \mathcal{I} \to \mathcal{J}$，
它可以分解为
\[
\mathcal{I} \xrightarrow{i\mapsto (i,\mathbb{1}_{\alpha(i)})}
\mathcal{I}\times_{\alpha,\mathcal{J},s}\mathsf{Ar}(\mathcal{J}) \xrightarrow{t} \mathcal{J}
\]
容易说明前半段为投影函子
$\mathcal{I} \times_{\alpha,\mathcal{J},s}\mathsf{Ar}(\mathcal{J}) \to \mathcal{I}$
的右伴随。
不难说明右伴随为共尾函子，因此其自动满足条件 2。
不难发现 $t \colon \mathcal{I}\times_{\alpha,\mathcal{J},s}\mathsf{Ar}(\mathcal{J}) \to \mathcal{J}$
为推出纤维化且对于任意 $j \in \mathcal{J}$，
纤维 $t^{-1}(\{j\})\simeq \mathcal{I}_{j/}$ 弱可缩。
因此根据 @lem-cartesianfib 说明其满足条件 2。
接下来推回 $\mathcal{I}$ 上。
给定任意右纤维化 $X \to \mathcal{J}$，根据前文以及 @lem-pullback-adjoint，有
\[
\mathsf{Cat}_{\infty/\mathcal{J}}(\mathcal{J},X) \simeq
\mathsf{Cat}_{\infty/\mathcal{J}}(\mathcal{I}\times_{\alpha,\mathcal{J},s}\mathsf{Ar}(\mathcal{J}),X)
\simeq
\mathsf{Cat}_{\infty/\mathcal{I}\times_{\alpha,\mathcal{J},s}\mathsf{Ar}(\mathcal{J})}(\mathcal{I}\times_{\alpha,\mathcal{J},s}\mathsf{Ar}(\mathcal{J}),t^*(X))
\]
由于右纤维化在拉回下稳定，因此
\[
\mathsf{Cat}_{\infty/\mathcal{I}\times_{\alpha,\mathcal{J},s}\mathsf{Ar}(\mathcal{J})}(\mathcal{I}\times_{\alpha,\mathcal{J},s}\mathsf{Ar}(\mathcal{J}),t^*(X))
\simeq
\mathsf{Cat}_{\infty/\mathcal{I}\times_{\alpha,\mathcal{J},s}\mathsf{Ar}(\mathcal{J})}(\mathcal{I},t^*(X))
\simeq
\mathsf{Cat}_{\infty/\mathcal{J}}(\mathcal{I},X).
\]
从而给出条件 3 推条件 2。

::: lemma {@lem-cartesianfib}
对于任意[[右纤维化]] $f \colon X \to \mathcal{J}$，
[[拉回纤维化]] $p \colon \mathcal{U}\to \mathcal{J}$ 满足
\[
\mathsf{Cat}_{\infty/\mathcal{J}} (\mathcal{U},X) \simeq  \mathsf{Cat}_{\infty/\mathcal{J}} (\mathcal{J},X)
\]
当且仅当对于任意 $j \in \mathcal{J}$ 都有 $|p^{-1}\{j\}| \simeq *$。
:::

::: proof
记 $p \colon \mathcal{U} \to \mathcal{J}$ 的直化为
$E \colon \mathcal{J}^{\operatorname{op}} \to \mathsf{Cat}_{\infty}$。
且右纤维化 $f \colon X \to \mathcal{J}$ 的直化为
$F \colon \mathcal{J}^{\operatorname{op}} \to \mathsf{Ani}$。
则直化定理给出同构
\[
\mathsf{Cat}_{\infty/\mathcal{J}}(\mathcal{U},X) \simeq \mathsf{Cart(\mathcal{J})}(\mathcal{U},X)
\simeq \mathsf{Fun}(\mathcal{J}^{\operatorname{op}},\mathsf{Cat}_{\infty})(E,F)
\]
此处第一个等价是因为 $X$ 中的全体态射均为 $f$-拉回态射，
从而 $\mathsf{Cat}_{\infty/\mathcal{J}}(\mathcal{U},X)$ 中函子自动保持拉回态射，
因此给出等价。
而后利用伴随 $|-| \dashv \iota$
（此处 $\iota \colon \mathsf{Ani} \to \mathsf{Cat}_{\infty}$ 为嵌入函子）给出同构
\[
\mathsf{Fun}(\mathcal{J}^{\operatorname{op}},\mathsf{Cat}_{\infty})(E,F) \simeq
\mathsf{Fun}(\mathcal{J}^{\operatorname{op}},\mathsf{Cat}_{\infty})(|E|,F)
\]
由于 $\mathbb{1}_{\mathcal{J}}$ 的直化为
$\underline{*}\colon \mathcal{J}^{\operatorname{op}} \to \mathsf{Ani}$。
这说明
\[
\mathsf{Cat}_{\infty/\mathcal{J}}(\mathcal{J},X) \simeq
\mathsf{Fun}(\mathcal{J}^{\operatorname{op}},\mathsf{Cat}_{\infty})(\underline{*},F).
\]
从而
$\mathsf{Cat}_{\infty/\mathcal{J}} (\mathcal{U},X) \to  \mathsf{Cat}_{\infty/\mathcal{J}} (\mathcal{J},X)$
为同构当且仅当 $|E| \Rightarrow \underline{*}$ 为同构，
而函子之间的同构可以逐点刻画，
因此这相当于说 $p$ 直化后逐点弱可缩，换句话说 $p$ 的纤维均弱可缩。
:::

::: lemma
令 $p \colon \mathcal{U} \to \mathcal{J}$ 为拉回纤维化，
则对于任意 $j \in \mathcal{J}$，
函子 $p^{-1}(\{j\}) \to \mathcal{U}\times_{\mathcal{J}}\mathcal{J}_{j/}$ 具有右伴随。
特别地，
有生象的同伦等价 $|p^{-1}(\{j\})| \simeq |\mathcal{U}\times_{\mathcal{J}} \mathcal{J}_{j/}|$。
:::

::: lemma {@lem-pullback-adjoint}
令 $F \colon \mathcal{C} \to \mathcal{D}$ 为 $(\infty,1)$-函子，则
拉回 $F^* \colon \mathsf{Cat}_{\infty/\mathcal{D}} \to \mathsf{Cat}_{\infty/\mathcal{C}}$
有左伴随，它将 $f \colon \mathcal{C}'\to\mathcal{C}$ 映为 $F \circ f$。
:::

```terms
Quillen 定理 A:
  en: Quillen's theorem A
```
