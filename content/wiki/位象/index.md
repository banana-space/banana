---
title: 位象
categories: [层论]
notices:
  - name: 问题
    items:
      - “与拓扑空间的联系”一节缺少右伴随的构造。
      - “层范畴”一节需要扩充。
navboxes: [层论]
---

**位象**是[[无点拓扑]]里的基本概念，可以看作是[[拓扑空间]]的替代物，
它去掉了拓扑空间中的点集，只考虑[[开集]]与其间的包含关系。

## 定义

::: definition
**位象**是存在所有并、有限交，且所有的交都满足[[分配律]]的[[偏序集]]，即
\[
x \wedge \bigvee_{\alpha \in I} y_\alpha
= \bigvee_{\alpha \in I} (x \wedge y_\alpha)
\]

该偏序集的元素对应拓扑空间中的开集。
:::

将拓扑空间看作位象的时候，往往称之为**拓扑位象**。
将位象 $X$ 看作偏序集时，记作 $O(X)$。

::: definition
位象间的映射 $f\colon A → B$ 是将它们看作偏序集后的反向[[单调函数]] $O(B) → O(A)$，
保持有限交和无限并。
:::

拓扑位象之间的映射和[[连续函数]]的定义是一致的。

## 性质

位象类比为拓扑空间时，若将开集的包含关系视为态射，可以构成一个[[范畴]]，此时每个位象对应一个范畴。
而位象之间的连续映射也可以构成范畴，记作 $\textsf{Loc}$。

::: lemma {@积}
任一位象 $L$ 看作范畴时，范畴里的[[积]]对应了元素的交，
且[[函子]] $(-∧ v)\colon L → L$ 保持[[余极限]]。
:::

::: theorem
位象本身作为范畴时是[[积闭范畴]]。
:::

::: proof
由 @积 可知仅需证明函子 $(-∧ v)$ 有[[右伴随]]，可以通过[[伴随函子定理]]得到。
具体来说，构造
\[
(u \Rightarrow v) = \bigvee_{x \wedge u \le v} x.
\]
此时 \(x \wedge u \le v\) 即可推出 \(x \le (u \Rightarrow v)\)。
而另一方面，如果 \(y \le (u \Rightarrow v)\)，
那么由分配律，
\[
\begin{aligned}
  y \wedge u &\le (u \Rightarrow v) \wedge u\\
  &= \left[\bigvee_{x \wedge u \le v} x\right] \wedge u\\
  &= \bigvee_{x \wedge u \le v} x \wedge u\\
  &\le \bigvee_{x \wedge u \le v} v \\
  &= v.
\end{aligned}
\]
因此我们得到等价
\[
x \wedge u \le v \iff x \le (u\Rightarrow v).
\]
故[[指数对象]]总是存在。
:::

### 与拓扑空间的联系

将拓扑空间转化为对应的位象的操作显然构成[[函子]]，记作 $Ω\colon \textsf{Top} → \textsf{Loc}$。
该函子存在一[[右伴随]]，构造如下：

### 层范畴

位象上的[[层]]范畴是[[意象]]。

::: lemma
令 $0∈L$ 为最小元素，$F\colon L → \mathsf{Set}$ 为层，
则 $F(0)$ 为[[单点集]]。
:::

::: proof
$0$ 被空集覆盖，因此根据层公理，有[[等子]]图表
\[
F(0) → 单点集 ⇉ 单点集
\]
不难得知 $F(0)$ 也是单点集。
:::

::: lemma
$L$ 上的[[可表函子]]都是[[层]]。
:::

::: proof
对于 $u∈L$，对应的 [[Yoneda 函子]] $L(-,u)$ 对于 $v≤u$ 给出[[单点集]]，
对于其它元素则给出空集，因此层公理都是平凡的。可表函子自然同构于 Yoneda 函子，
因此也满足这样的条件。
:::

::: lemma
$L$ 上的层范畴有[[子对象分类子]]。
:::

::: proof
参见[[子对象分类子]]中的构造。
:::

```terms
位象:
  en: locale
```
