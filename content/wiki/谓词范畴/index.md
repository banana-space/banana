---
title: 谓词范畴
categories: [范畴逻辑]
---

**谓词范畴**是由[[集合]]配上一个[[子集]]
（作为“满足谓词”的表示）作为对象的[[范畴]]，
它到[[集合范畴]]的[[遗忘函子]]存在一个简单的[[纤维范畴]]。

谓词范畴中借助集合论的各种操作（如[[Descartes 积]]、[[无交并]]等）
即可定义各种[[Boole 代数]]里的逻辑连词。

谓词范畴中还可以定义经典的谓词，包括[[全称]]、[[存在]]和相等，
前两者分别是[[依值积]]和[[依值和]]的特殊情况。
除此之外，谓词范畴中还可以定义“商”，见[[二元谓词范畴]]。
如上四个定义和纤维范畴中的诱导函子都有[[伴随函子|伴随]]关系。

## 定义

::: definition [谓词范畴]
**谓词范畴** Pred 由如下数据组成：

- **对象**：为形如 $(I, X)$ 的二元组，其中 $I, X$ 都是[[集合]]，且 $X\subseteq I$。

- **态射**：对于对象 $(I, X), (J, Y)$，若函数 $f\colon I → J$ 满足
  \[
  ∀ i ∈ I, (i ∈ X \implies f(i) ∈ Y)
  \]
  那么 $f$ 为一个 $(I, X)$ 到 $(J, Y)$ 的态射。
  该关系可以被视为如下交换图中的虚线态射的唯一存在性：
  \[
  \begin{tikzcd}
    X \ar[r, dashed] \ar[d, hook] & Y \ar[d, hook] \\
    I \ar[r, "f"] & J
  \end{tikzcd}
  \]

:::

::: definition {@遗忘}
从谓词范畴到[[集合范畴]]间存在[[遗忘函子]]
$U\colon \mathsf{Pred} → \mathsf{Set}$，
将 $(I, X)$ 映射到 $I$、态射不变。
:::

::: theorem {@纤维化}
在 @遗忘 中定义的函子是[[纤维范畴]]。
其中，对于 $I ∈ \mathsf{Set}$，
它的纤维记作 $P(I)$，是对象形如 $(I, X)$
（其中 $X$ 任意）、态射被 $U$ 映射到[[恒同态射]]的 Pred 的[[子范畴]]。
:::

::: proof
对于映射 $f\colon I → J$，
可以诱导出[[函子]] $f^*$：
\[
\begin{aligned}
  P(J) &→ P(I) \\
  (J, Y) &↦ (I, \set{i| f(i) ∈ Y})
\end{aligned}
\]
验证函子律：若 $Y \subseteq Y'$，考虑 $(I, X) = f^*(J, Y)$、$(I, X') = f^*(J, Y')$，
根据 Pred 的定义，显然有 $X \subseteq X'$。
:::

简洁起见，当 $(I, X)$ 中的 $I$ 显然时，
我们直接用 $X$ 代替之。比如讨论 $P(I)$ 中的对象时，
就只用子集 $X$ 来代指二元组 $(I, X)$。

### 诱导函子

::: definition [弱化] {@弱化}
集合范畴中的[[积 (范畴论)|积]] $I × J$ 及其投影 $π\colon I × J → I$
诱导的态射 $π^*$ 叫做**弱化函子**：
\[
\begin{aligned}
  P(I) &→ P(I × J)\\
  X &↦ \set{(i, j) | i ∈ X, j ∈ J}
\end{aligned}
\]
这个函子本质上就是把 $i ∈ X$ 变成一个二元组 $(i, j) ∈ X × J$，
其中 $j$ 是任意的。
:::

::: definition [收缩] {@收缩}
[[集合范畴]]中的[[对角映射]] $Δ\colon I → I × I$ 诱导的态射 $Δ^*$
叫做**收缩函子**：
\[
\begin{aligned}
  P(I × I) &→ P(I)\\
  X &↦ \set{ i ∈ I | (i, i) ∈ X}
\end{aligned}
\]
这个函子接收 $I$ 的两个子集构成的[[积 (范畴论)|积]] $X$，
给出这两个子集的交集。
:::

### 逻辑函子

::: definition [全称与存在] {@量词}
对于 $(I×J, Y)∈\mathsf{Pred}$，定义如下两函子：
\[
\begin{aligned}
  ∀,∃ &\colon P(I×J) → P(I)\\
  ∀Y &= \set{i ∈ I | ∀j ∈ J, (i, j) ∈ Y }\\
  ∃Y &= \set{i ∈ I | ∃j ∈ J, (i, j) ∈ Y }
\end{aligned}
\]
容易验证函子律。
:::

::: definition [相等] {@相等}
对于 $(I, X) ∈ \mathsf{Pred}$，定义函子 $E$：
\[
\begin{aligned}
  P(I) &→ P(I × I)\\
  X &↦ \set{(i,i)|i ∈ X}
\end{aligned}
\]
容易验证函子律。
:::

## 性质

::: proposition
在 @纤维化 中的纤维 $P(I)$ 正好是 $I$
的子集由包含关系作为态射构成的范畴。
:::

### 伴随关系

::: theorem
对于 @量词、@弱化 中提到的函子，有如下三连[[伴随函子|伴随]]关系：
\[
∃ \dashv π^* \dashv ∀
\]
:::

::: proof
考虑 $Y \subseteq I × J$、$X \subseteq I$。

对于 $∃ \dashv π^*$，展开伴随的定义可知这是在说如下两命题等价：
\[
∃ Y \subseteq X \iff Y \subseteq π^*(X)
\]
对于 $π^* \dashv ∀$，对应的则是如下两命题等价：
\[
π^*(X) \subseteq Y \iff X \subseteq ∀ Y
\]
这两个等价关系都很容易验证。
:::

::: theorem
对于 @相等 和 @收缩 中提到的函子，有：
\[
E \dashv Δ^*
\]
:::

::: proof
考虑 $X \subseteq I, Y \subseteq I × I$，展开伴随的定义可知这是在说如下两命题等价：
\[
E(X) \subseteq Y \iff X \subseteq Δ^*(Y)
\]
容易验证以上命题。
:::
