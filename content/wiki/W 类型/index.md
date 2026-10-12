---
title: '$\mathcal{W}$ 类型'
categories: [类型论]
navboxes: [类型论]
---

::: convention
在本文中，

- $\overline{X}$ 代表 $X_1, X_2,\cdots,X_n$ 这样的列表的简写。

:::

**$\mathcal W$ 类型**是[[Martin-Löf 类型论]]中的一个特殊的[[归纳类型]]，
大多数归纳类型都等价于它的某种特化。
它的动机是将值视为某种“树状结构”，这种树之间的包含关系构成了一种[[良基关系]]。
事实上归纳类型的通用定义差不多就长这样。
从范畴论的视角，它是[[多项式函子]]的始[[代数 (范畴论)|代数]]。

在数学研究中，时常会有“X 是 Y 的特殊情况”这样的发现，
然后关于 Y 的研究就会变得比 X 更通用。
在类型论中，如果某个类型 X 等价于另一个类型 Y 的特化，
那么在使用 X 的地方全部改为使用 Y 的特化的话，
依然能做原本能做的数学，但底层使用的定义就更少了，
从而使得底层理论更简洁。
$\mathcal W$ 类型正是这样的一个非常通用的类型。
例如，某个归纳类型可能有如下数据：

- 类型本身 $D: \mathcal U$，
- 构造子 $\mathrm{con}_i: C_i → D, i \in [0, n]$，
  其中 $C_i$ 可以使用 [[$\Pi$ 类型]]和 [[$\Sigma$ 类型]]也可以在满足[[严格正性]]的情况下使用 $D$。

接下来我们将它转化为一个单参数单构造子的等价的归纳类型：

- 首先处理[[无交并类型]]：考虑 $k$ 个类型的无交并，可以定义一个有 $k$ 个实例的类型 $K$，
  再用一个函数 $m:K → \mathcal U$ 表示这些类型的并。
- 任何多元函数都可以用 [[Curry 化]]的思想转化为一元函数，于是我们可以认为 $C_i$ 中仅包含一元函数，
  其中返回类型中允许出现 $D$，参数中不允许。
- 用无交并将多个函数合并为单个函数。现在可以认为 $C_i$ 只能是一种返回 $D$ 的一元函数或者普通类型了。
- 多个构造子可以直接取它们的无交并变成单个构造子。

事实也是如此，$\mathcal W$ 类型只需要一个构造子就可以表达丰富多彩的归纳类型。

在[[集合论]]模型中，可以证明 $\mathcal W$ 类型存在，
但在类型论的研究中，一般是将 $\mathcal W$ 类型作为底层构造引入的，
类似 [[$\Pi$ 类型]]和 [[$\Sigma$ 类型]]。
在[[观测类型论]]中就是这样处理的。

$\mathcal W$ 类型有[[归纳类型]]和[[归纳族]]的版本。
它的对偶是[[余归纳类型|余归纳]]的 [[$\mathcal M$类型]]。

## 类型规则

\[
\cfrac{
  Γ ⊢ A \quad Γ,x:A⊢ B}
  {Γ ⊢ \mathop{\Large{\mathcal W}}\limits_{x:A} B}
\]

这个[[形成规则]]最好配合[[构造规则]]一起理解。

### 构造规则

\[
\cfrac{
  Γ ⊢ a:A \quad
  Γ ⊢ t:B[x\mapsto a] → \mathop{\Large{\mathcal W}}\limits_{x:A} B
}{
  Γ ⊢ \mathsf{sup}(a, t): \mathop{\Large{\mathcal W}}\limits_{x:A} B
}
\]

其中，类型 $A$ 的实例数量代表了它对应的归纳类型有多少个构造子，
而 $t$ 代表了对应构造子接受的参数。

假设我们需要用 $\mathcal W$ 类型来模拟有两个构造子
$\operatorname{con}_1, \operatorname{con}_2$ 的类型，
并假设经过一番操作后我们已经让这两个构造子都只需要接受一个参数。
那么令 $A$ 为有两个实例 $a_1, a_2$ 的类型，
于是 $\mathsf{sup}(a_1, x)$ 就代表了 $\operatorname{con}_1(x)$，
$\mathsf{sup}(a_2, x)$ 则代表了 $\operatorname{con}_2(x)$。

### 消去规则

此处直接给出依值类型的版本。
为了简洁，以下直接将 $\mathop{\Large{\mathcal W}}\limits_{x:A} B$ 简写为 $\mathcal W$。

\[
\cfrac{
  Γ ⊢ C :\mathcal W → \mathcal U \quad
  Γ ⊢ w:\mathcal W \quad
  Γ,x:A,\fbox{$u:B → \mathcal W$},\fbox{$v:\prod_{y:B}C(u(y))$} ⊢ c(x,u,v) :
     C(\mathsf{sup}(x,u))
}{
  \operatorname{rec}_W(w, c):C(w)
}
\]

其中：

\[
\operatorname{rec}_W(\mathsf{sup}(x, u), c)=
c(x,u, λy.~\operatorname{rec}_W(u(y), c))
:C(w)
\]

## 范畴语义

回顾其类型规则
\[
\cfrac{
  Γ ⊢ A \quad Γ,x:A⊢ B}
  {Γ ⊢ \mathop{\Large{\mathcal W}}\limits_{x:A} B}
\]
在依值类型论的[[范畴语义]]中，用一个态射 \(p : A \to \Gamma\)
表示一族依赖于 \(\Gamma\) 的类型，可以看作[[纤维化]]中依赖于底空间的一族纤维。
而 \(\Gamma, x:A⊢ B\) 则表示为 \(q : B \to A\)，
即纤维化上的纤维化。这些数据给出了一个复合函子
\[
\mathcal C/\Gamma \xrightarrow{(p\circ q)^*}
\mathcal C/B \xrightarrow{\Pi_q}
\mathcal C/A \xrightarrow{\Sigma_p}
\mathcal C/\Gamma.
\]
这个复合函子称为[[多项式函子]]。\(\mathcal W\)类型是
多项式函子的“最小”不动点，这在范畴论中的严格表述是自函子
上的[[代数 (范畴论)|代数]]。
