---
title: '$(\infty,1)$-极限'
categories: [高阶范畴论]
navboxes: [高阶范畴论]
---

**$(\infty,1)$-极限**是[[极限 (范畴论)|极限]]在 [[$(\infty,1)$-范畴]]中的推广。

## 定义

::: definition [极限与余极限] {@def--co-lim}
令 $\mathcal{I}$ 以及 $\mathcal{C}$ 为 $(\infty,1)$-范畴。
令 $\underline{(-)}\colon \mathcal{C} \to \mathsf{Fun}(\mathcal{I},\mathcal{C})$
为将 $\mathcal{C}$ 中对象 $c$ 映为取值为 $c$ 的常值函子的函子。

1. 令 $F \colon \mathcal{I} \to \mathcal{C}$ 为 [[$(\infty,1)$-函子]]。
   则 $F$ 的**余极限** $\operatorname{colim} F$
   定义为 $F$ 在 $\underline{(-)}$ 下的左伴随对象。
   对偶地，$F$ 的**极限** $\operatorname{lim} F$ 定义为 $F$ 在 $\underline{(-)}$ 下的右伴随对象。

2. 称 $\mathcal{C}$ 具有全体 $\mathcal{I}$-型余极限（极限）是指全体 $\mathcal{I}$ 到 $\mathcal{C}$
   的 $(\infty,1)$-函子都存在余极限（极限）。

:::

## 性质

::: lemma
左伴随保余极限，而右伴随保极限。
:::

::: proof
[@Kerodon, [02KE](https://kerodon.net/tag/02KE)]
:::

::: lemma
令 $\mathcal{C}$，$\mathcal{D}$ 以及 $\mathcal{I}$ 均为 $(\infty,1)$-范畴。
且 $\mathcal{D}$ 具有全体 $\mathcal{I}$-型余极限。
则 $\mathsf{Fun}(\mathcal{C},\mathcal{D})$ 也具有全体 $\mathcal{I}$-型余极限，
且对于全体 $x \in \mathcal{C}$，求值函子
\[
\operatorname{ev}_x \colon \mathsf{Fun}(\mathcal{C},\mathcal{D})\to \mathsf{Fun}(\{x\},\mathcal{D})\simeq \mathcal{D}
\]
保持 $\mathcal{I}$-型余极限。
极限的版本即为对偶命题。
:::

::: proposition
令 $F\colon \mathcal{I}\to \mathcal{C}$ 为 $(\infty,1)$-函子，则以下条件等价：

1. $F$ 在 $\mathcal{C}$ 中存在极限。

2. [[逗号范畴]]
   $\mathcal{C} \mathbin{\underset{\mathsf{Fun}(\mathcal{I},\mathcal{C})}{\mathbin{\vec{\times}}}}\{F\} \to \mathcal{C}$
   有[[终对象]]。

3. 切片范畴 $\mathcal{C}_{/F}$ 存在终对象。

对偶地给出余极限情况。
:::

::: theorem
对于[[组合的]][[单纯模型范畴]] $A$，
其同伦脉 $\mathfrak{N}(A^{\circ})$ 具有全体极限以及余极限。
$(\infty,1)$-函子 $F \colon \mathcal{I} \to \mathfrak{N}(A^{\circ})$ 的余极限和极限分别刻画为
\[
\operatorname{colim}(F) \simeq R(\operatorname{hocolim}_{\mathfrak{C}(\mathcal{I})}\tilde{F}), \quad
\operatorname{lim}(F) \simeq Q(\operatorname{holim}_{\mathfrak{C}(\mathcal{I})}\tilde{F})
\]
此处 $\tilde{F} \colon \mathfrak{C}(\mathcal{I}) \to A^{\circ}$ 为 $F$ 的伴随，
$R$ 和 $Q$ 分别表示[[纤维性替换]]以及[[余纤维性替换]]函子。
:::

::: proof
[@HTT, [Theorem 4.2.4.1](https://www.math.ias.edu/~lurie/papers/HTT.pdf#theorem.4.2.4.1)]
:::

## $\mathsf{Cat}_{\infty}$ 以及 $\mathsf{Ani}$ 中的极限与余极限

::: definition [截面所构成的 $(\infty,1)$-范畴] {@def-section}
对于[[推出纤维化]] $p \colon E \to S$，
记 **[[截面]]所构成的 $(\infty,1)$-范畴** $\Gamma(p)$ 为拉回
\[
\begin{tikzcd}
  \Gamma(p) \ar[r]\ar[d] & \mathsf{Fun}(S,E)\ar[d,"p_*"]\\
  \{\mathbb{1}_{S}\}\ar[r]& \mathsf{Fun}(S,S).
\end{tikzcd}
\]
由推出纤维化均为[[同纤维化]]保证其为 $(\infty,1)$-范畴。
令 $\Gamma_{\operatorname{cocart}}(p) \subseteq \Gamma(p)$ 为
将 $S$ 中全体边映为 $E$ 中 $p$-推出态射的截面所构成的全子范畴。
:::

以下定理将说明如何刻画形如 $F \colon \mathcal{I}\to \mathsf{Cat}_{\infty}$ 的极限与余极限。

::: theorem {@thm-colim-in-Cat}
给定图表 $F \colon \mathcal{I} \to \mathsf{Cat}_{\infty}$，
记其反直化为 $\operatorname{Un}(F) = p \colon \mathcal{U}\to \mathcal{I}$，
其余极限与极限可被刻画为
\[
\operatorname{colim} F \simeq \operatorname{Un}(F)[\{p\text{-}推出态射\}^{-1}] , \quad
\operatorname{lim} F \simeq \Gamma_{\operatorname{cocart}}(\operatorname{Un}(F))
\]
更进一步，若 $F$ 穿过 $\mathsf{Ani}$，则
\[
\operatorname{colim} F \simeq |\operatorname{Un}(F)|, \quad
\operatorname{lim} F \simeq \Gamma(\operatorname{Un}(F))
\]
此处 $|\operatorname{Un}(F)|$ 指 $\operatorname{Un}(F)$ 的[[几何实现]]，
即对于全体 $1$-态射进行局部化。
:::

::: proof
只处理极限的情况，余极限也是类似的。
证明的核心在于利用常值函子 $\underline{\mathcal{C}}$ 的反直化为
$\mathcal{C} \times \mathcal{I}\to \mathcal{I}$。
考虑图表
\[
\begin{tikzcd}
              & \mathsf{Fun}(\mathcal{I},\mathsf{Cat}_{\infty}) \ar[dd, shift left = 1,"\operatorname{Un}"]\\
  \mathsf{Cat}_{\infty}\ar[ur,"\underline{(-)}"]\ar[dr]\\
              & \mathsf{Cocart}(\mathcal{I})\ar[uu, shift left = 1,"\operatorname{St}"]
\end{tikzcd}
\]
不难发现指向右下的箭头将 $\mathcal{C} \in \mathsf{Cat}_{\infty}$
映为 $\mathcal{I}$ 上的推出纤维化 $p_2 \colon \mathcal{C} \times \mathcal{I} \to \mathcal{I}$。
令 $X \simeq \operatorname{lim} F$，
则由 @def--co-lim 可知存在同构
$\mathsf{Fun}(\mathcal{I},\mathsf{Cat}_{\infty})(\underline{\mathcal{C}},F)
  \simeq \mathsf{Cat}_{\infty}(\mathcal{C},X)$。
对左侧进行反直化，给出同构
\[
\mathsf{Cocart}(\mathcal{I})(p_2,p) \simeq \mathsf{Cat}_{\infty}(\mathcal{C},X).
\]
给定 $\varphi \in \mathsf{Cocart}(\mathcal{I})(p_2,p)$，
根据指数律给出态射
$\tilde{\varphi} \in \mathsf{Fun}(\mathcal{C},\mathsf{Fun}(\mathcal{I},\mathcal{U}))$。
而由于 $\varphi$ 在 $\mathcal{I}$ 上给出可知 $\tilde{\varphi}$ 穿过 $\Gamma(p)$。
接下来只需说明 $\varphi$ 保持 $p_2$-推出态射
当且仅当 $\tilde{\varphi}$ 穿过 $\Gamma_{\operatorname{cocart}}(p)$ 即可，
不难看出 $p_2$-推出态射均形如 $(\mathcal{C} 中的同构, \mathcal{I} 中任意态射)$。
因此只需关于 $\mathcal{C}$ 中同构进行讨论。
考虑 $\mathcal{C}$ 中的同构 $f \colon c \to c'$，
其在 $\tilde{\varphi}$ 下的像为自然变换
$\eta \colon \tilde{\varphi}(c) \Rightarrow \tilde{\varphi}(c')$。
若 $\varphi$ 保持 $p_2$-推出态射，
则对于任意 $\mathcal{I}$ 中态射 $h \colon i \to i'$，复合
\[
\tilde{\varphi}(c)(i) \xrightarrow{\eta_i} \tilde{\varphi}(c')(i) \xrightarrow{h_*} \tilde{\varphi}(c')(i')
\]
为 $\mathcal{U}$ 中的 $p$-推出态射。
由 $f$ 为同构可知 $\eta_i$ 在 $\mathcal{U}$ 中为同构，
因此自动为 $p$-推出态射。
从而上述复合为 $p$-推出态射当且仅当 $h_*$ 为 $p$-推出态射。
这无异于说 $\tilde{\varphi}(c')$ 将 $\mathcal{I}$ 中全体态射映为 $\mathcal{U}$ 中的 $p$-推出态射，
根据 @def-section 可知 $\tilde{\varphi}$ 穿过 $\Gamma_{\operatorname{cocart}}(p)$。
而这无异于说 $X \simeq \Gamma_{\operatorname{cocart}}(p)$。
:::

::: corollary
令 $F \colon \mathcal{I} \to \mathcal{C}$ 为 $(\infty,1)$-函子，
则自然变换 $c_F \colon \underline{y}\Rightarrow F$ 使得 $y\in \mathcal{C}$ 为 $F$ 的极限
当且仅当对于每个 $x \in \mathcal{C}$ 自然态射
\[
c^*_F \colon \mathcal{C}(x,y) \xrightarrow{\sim} \operatorname{lim} \mathcal{C}(x,F(i))
\]
均为同构。
对偶版本的命题可以刻画余极限。
:::

::: proof
对于 $\mathcal{C}(x,F(-)) \colon \mathcal{I} \to \mathsf{Ani}$ 进行反直化给出左纤维化
$F^*(\mathcal{C}_{x/})\to \mathcal{I}$，
它是投影态射 $t \colon \mathcal{C}_{x/}\to \mathcal{C}$ 沿 $F$ 的拉回。
从而根据 @thm-colim-in-Cat 可知
$\operatorname{lim} \mathcal{C}(x,F(i)) \simeq \mathsf{Cat}_{\infty/\mathcal{I}}(\mathcal{I},F^*(\mathcal{C}_{x/}))$。
而
$\mathsf{Cat}_{\infty/\mathcal{I}}(\mathcal{I},F^*(\mathcal{C}_{x/})) \simeq \mathsf{Fun}(\mathcal{I},\mathcal{C})(\underline{x},F)$。
从而说明 $y$ 就为 $F$ 的极限。
:::

::: corollary
对于任意 $(\infty,1)$-范畴 $\mathcal{C}$，
$(\infty,1)$-函子 $\mathcal{C}(x,-) \colon \mathcal{C}\to \mathsf{Ani}$ 以及
$\mathcal{C}(-,y) \colon \mathcal{C}^{\operatorname{op}}\to \mathsf{Ani}$
对于全体 $x,y \in \mathcal{C}$ 保持极限。
同理 [[Yoneda 嵌入]]
$y \colon \mathcal{C} \to \mathsf{Fun}(\mathcal{C}^{\operatorname{op}},\mathsf{Ani})$ 保极限。
:::

## 参考资料

建立高阶范畴论的基础著作：

```bibliography
Kerodon:
  type: book
  title: Kerodon
  author: Jacob Lurie
  year: 2018
  url: https://kerodon.net
HTT:
  type: book
  title: Higher Topos Theory
  author: Jacob Lurie
  year: 2009
  publisher: Princeton University Press
  url: https://www.math.ias.edu/~lurie/papers/HTT.pdf
HA:
  type: book
  title: Higher Algebra
  author: Jacob Lurie
  year: 2017
  url: https://www.math.ias.edu/~lurie/papers/HA.pdf
```

入门读物：

```bibliography
InftyCats:
  type: article
  author: Ferdinand Wagner
  title: '$\infty$-Categories in Topology'
  url: https://florianadler.github.io/inftyCats/inftyCats.pdf
  year: 2024
KTheory:
  type: article
  author: Ferdinand Wagner
  title: Algebraic and Hermitian $K$-Theory
  year: 2021
  url: https://florianadler.github.io/AlgebraBonn/KTheory.pdf
```

- [同伦代数与同调代数](/books/同伦代数与同调代数/)

```terms
'$(\infty,1)$-极限':
  en: '$(\infty,1)$-limit'
```
