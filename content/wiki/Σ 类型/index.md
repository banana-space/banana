---
title: '$\Sigma$ 类型'
aliases: [Sigma 类型]
categories: [类型论]
navboxes: [类型论]
---

**$\Sigma$ 类型**是[[积类型]]在[[依值类型论]]中的升级，
使得第二个成员的类型可以随第一个成员的值的变化而变化。
也就是说，如果对 $A$ 中的每个实例 $x$ 都有类型 $B(x)$，
可以构造 $\Sigma$ 类型

\[
\sum_{x:A} B(x),
\]

它可以理解为这些 $B(x)$ 的并集：对于任何 $x:A, y:B(x)$，
都有实例 $\braket{x,y}:\sum_{x:A} B(x)$，因此用求和符号表示。
如果 $B(x)$ 不随 $x$ 而变，则它就是[[积类型]]。

在[[类型论–范畴论–逻辑学类比]]中，
$\Sigma$ 类型可以类比于一些熟悉的数学对象。

在[[范畴论]]中，$\Sigma$ 类型对应于[[纤维化]]。
例如在[[拓扑空间范畴]]中，$\Sigma$ 类型 $\sum_{x:A}B(x)$
就是把以 $x:A$“参数化”的一些空间 $B(x)$ 以某种方式粘了起来，
它可以理解为 $A$ 上[[纤维丛]]。
在[[同伦类型论]]中这种类比会更为具体：
它也会满足与纤维丛类似的“提升性质”。
如果 $B$ 不随 $x$ 而变化，
$\Sigma$ 类型就可以理解为一些相同的空间以最平凡的方式粘接起来，
也就是平凡丛的全空间 $A \times B$，即[[积空间]]。

在[[谓词逻辑]]中，$\Sigma$ 类型可以类比（但不能一视同仁，见 @ex:exists）为含有[[存在量词]]的命题：
可以想象每个 $B(x)$ 都是[[命题]]，
而 $\Sigma$ 类型 $\sum_{x:A}B(x)$ 可以理解为
“存在 $A$ 中的元素 $x$ 使得 $B(x)$ 成立”。
事实上如果在类型论的视角下看待命题，
则构造 $\Sigma$ 类型中实例的过程（也就是证明命题的过程），
就是要找到 $x:A$ 和 $y:B(x)$，也印证了上述存在量词的直观。

## 类型规则

\[
\cfrac{
  Γ ⊢ A \quad \Gamma,x:A\vdash B}{Γ ⊢ \sum_{x:A} B}
\]

在考虑变量名时，除了 $\sum_{x:A} B(x)$ 之外，也可以写作 $(x:A) \times B(x)$，
这样更能体现 $\Sigma$ 类型和积类型的联系。

以下规则均使用和[[积类型]]相同的语法和名称。

### 构造规则

\[
\cfrac{
\quad \Gamma\vdash u:A \quad \Gamma\vdash v:B[x\mapsto u]}{Γ ⊢ \braket{u,v}:\sum_{x:A} B}
\]

### 消去规则

\[
\cfrac{
Γ ⊢ u:\sum_{x:A} B} {Γ ⊢ u.1 : A \quad 以及 \quad Γ ⊢ u.2 : B[x\mapsto u.1]}
\]

消去规则满足如下计算规则：

\[
\cfrac{
\Gamma\vdash u:A \quad \Gamma\vdash v:B[x\mapsto u]}{Γ ⊢ \braket{u,v}.1 : A \quad 以及
 \quad Γ ⊢ \braket{u,v}.2 : B[x\mapsto u]}
\]

## 性质

$\Sigma$ 类型不能直接当作存在量词。

::: example {@ex:exists}
考虑函数 $f:X → Y$。如下类型**总是同构于 $X$**：
\[
\sum_{y:Y} \sum_{x:X} \operatorname{Id}(f~x, y)
\]
用集合论的语言写的话，可以看作：
\[
\Set{y : Y | \sum_{x:X} \operatorname{Id}(f~x, y)}
\]
这个类型看起来应该仅仅是 $f$ 的[[像]]，而像的大小应该小于等于 $X$，
因为不同的输入可以被映射到相同的输出，所以不应该总是同构于 $X$。

但考虑如下情形：存在不同的 $a, b : X$ 被 $f$ 映射到 $Y$ 中相同的元素，
即满足 $f(a)= f(b)$，方便起见记作 $y$。这种情况下，它们应该对应像中的同一个元素，
但实际上对于如上定义，$a, b$ 给出了两个不同的元素：
\[
\braket{y, \braket{a, \mathrm{refl}_y}} ~和~
\braket{y, \braket{b, \mathrm{refl}_y}}
\]
这是因为这两个元素中有不同的数据，分别是 $a$ 和 $b$。
:::

但和[[逻辑截断类型]]就可以正确定义存在量词：

::: definition [存在量词]
在类型论和[[Curry–Howard 对应]]的视角下，$∃x ∈ X, P(x)$ 对应如下类型：
\[
\left|\sum_{x:X} P(x)\right|
\]
:::

## 范畴语义

<see>[[依值和]]</see>

$\Sigma$ 类型的构造过程可以描述如下：首先有类型 $\Gamma\vdash A$，
然后对于任何类型 $\Gamma,A\vdash B$，都可以构造出类型 $\Gamma\vdash \Sigma_A B$，
这个过程可以看作一个映射 $\Sigma_A : \fbox{$\Gamma,A$}\to \Gamma$。

将依值类型论视为一个[[概括范畴]] $\mathcal C$ 的话，可以这么看待：
对于任何代表类型的态射 $\pi_A:\fbox{$\Gamma,A$}\to \Gamma$，
根据[[纤维范畴]]的性质，
它能引导出一个[[反变函子]] $\pi_A^*: \mathcal C_{/\Gamma} \to \mathcal C_{/\Gamma,A}$。
这个函子的[[伴随函子]]就是前面提到的 $\Sigma_A$ 函子。

这个左伴随的构造比起对应[[$\Pi$ 类型]]的右伴随要简单得多，只需要用态射的复合就能定义，
即给定 $\pi_A:\fbox{$\Gamma,A$}\to \Gamma$ 和 $\pi_B:\fbox{$\Gamma,A,B$}\to \fbox{$\Gamma,A$}$，
直接定义 $\pi_{\Sigma_A B}=\pi_A \circ \pi_B$ 就能通过 $\pi_A$ 和 $\pi_B$ 的性质构造出 $\Sigma_A B$
的相关规则的范畴解释。
