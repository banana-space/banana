---
title: 环化意象
aliases: [Ringed topos, 赋环意象, 环化景, 赋环景]
categories: [层论]
navboxes: [层论]
---

环化意象指的是[[意象]]附带其中[[环对象]]，是[[环化空间]]的推广。

## 定义

::: definition
**环化意象**是二元组 $(\mathcal{X},\mathcal{O_X})$，
其中 $\mathcal{X}$ 为[[意象]]，$\mathcal{O_X}$
为其中[[环对象]]。
:::

::: remark
当意象来自于[[景]] $\mathcal{C}$ 时，
环化意象即是景上的环[[层]]，此时环化意象也称为**环化景**。
:::

::: definition
环化意象的**态射** $(\mathcal{X},\mathcal{O_X})\to
  (\mathcal{Y},\mathcal{O_Y})$ 是二元组 $(f,f^\sharp)$，
其中 $f\colon\mathcal{X}\to\mathcal{Y}$ 是[[意象]][[态射]]，
$f^\sharp\colon f^{-1}\mathcal{O_Y}\to\mathcal{O_X}$
是环同态。
:::

::: remark
由于 $f^{-1}$ 和 $f_*$ 伴随，$f^\sharp$ 也相当于环同态
$\mathcal{O_Y}\to f_*\mathcal{O_X}$。
:::

从现在开始，所有环都指[[交换环]]。

::: remark {@准备}
常对定义中的环对象提一些局部性条件。为此需做些准备。考虑 $\mathbb{Z}$
上有限型环的范畴 $\mathsf{fp}$。设 $\mathcal{A}$
是意象 $\mathcal{X}$ 中环对象，则它给出函子
$\operatorname{\underline{Hom}}_\mathcal{X}
  (-,\mathcal{A})\colon\mathsf{fp}^\text{op}\to
  \mathcal{X}$。反过来此种函子如保持有限极限，
则不难从中恢复出一个环对象 $\mathcal{A}$，
比如 $\mathcal{A}$ 的底层就由 $\operatorname
  {\underline{Hom}}_\mathcal{X}(\mathbb{Z}[x],\mathcal{A})$
给出。
:::

::: definition
意象 $\mathcal{X}$ 中**局部环**指意象态射
$\mathcal{A}\colon\mathcal{X}\to
  \mathsf{Sh}_\text{Zar}(\mathsf{fp}^\text{op})$，
**严格 Hensel 环**指意象态射
$\mathcal{A}\colon\mathcal{X}\to
  \mathsf{Sh}_\text{\'et}(\mathsf{fp}^\text{op})$。
此时 [[Yoneda 嵌入]] $\mathsf{fp}^\text{op}\to
  \mathsf{Sh}(\mathsf{fp}^\text{op})$ 复合
$\mathcal{A}^{-1}$ 保持有限极限，从而按 @准备 对应环对象，
也将其记作 $\mathcal{A}$。称局部（严格 Hensel）
环的同态 $f\colon\mathcal{A}\to\mathcal{B}$
为**局部同态**，指其满足对任意 Zariski（平展）环同态
$R\to S$，$\mathcal{X}$ 中图表
\[
\begin{tikzcd}
  \operatorname{\underline{Hom}}_\mathcal{X}
  (S,\mathcal{A})\ar[r,"f"]\ar[d]&\operatorname
  {\underline{Hom}}_\mathcal{X}(S,\mathcal{B})\ar[d]\\
  \operatorname{\underline{Hom}}_\mathcal{X}
  (R,\mathcal{A})\ar[r,"f"']&\operatorname
  {\underline{Hom}}_\mathcal{X}(R,\mathcal{B})
\end{tikzcd}
\]
为拉回图表。
:::

::: remark
局部环更初等的定义是要求对任意 $X\in\mathcal{X}$，
在 $\mathcal{A}(X)$ 中 $1\ne0$，且对任意
$a\in\mathcal{A}(X)$，存在 $U,V\in\mathcal{X}$
以及满射 $U\sqcup V\to X$，使得
$a|_U\in\mathcal{A}(U)^\times$，
$1-a|_V\in\mathcal{A}(V)^\times$，但这对严格 Hensel 不灵。

初等定义与上述抽象定义的等价性可这样看出：
如有上述意象态射，则 $\mathcal{A}^{-1}$ 保持余极限，
所以它保持始对象和[[余积]]。又已知 $\mathcal{A}^{-1}$
保持有限极限，所以它保持[[有效满射]]，于是
$\operatorname{\underline{Hom}}_\mathcal{X}
  (0,\mathcal{A})=\varnothing$，
且 Zariski 覆盖 $\mathbb{Z}[x]\to\mathbb{Z}[x]_x\times\mathbb{Z}[x]_{1-x}$
对应的映射 $\operatorname{\underline{Hom}}_\mathcal{X}
  (\mathbb{Z}[x]_x,\mathcal{A})\sqcup\operatorname{\underline{Hom}}_\mathcal{X}
  (\mathbb{Z}[x]_{1-x},\mathcal{A})\to\operatorname{\underline{Hom}}_\mathcal{X}
  (\mathbb{Z}[x],\mathcal{A})$ 为层满射，此即初等定义。
反过来也是类似的，因为 Zariski 覆盖由
$\mathbb{Z}[x]\to\mathbb{Z}[x]_x\times\mathbb{Z}[x]_{1-x}$ 生成。
这里的一般道理是，$\mathsf{Sh}_\text{Zar}(\mathsf{fp}^\text{op})$
是[[局部环]]这个[[一阶理论]]的[[分类意象]]。类似地，
$\mathsf{Sh}_\text{\'et}(\mathsf{fp}^\text{op})$
是[[严格 Hensel 环]]理论的分类意象，
只是严格 Hensel 环理论十分繁琐，而平展意象易于描述。
:::

::: remark
依定义，如 $\mathcal{A}$ 是意象 $\mathcal{Y}$ 中局部
（严格 Hensel）环，$f\colon\mathcal{X}\to\mathcal{Y}$
是意象态射，则意象态射复合自然给出局部（严格 Hensel）
环，记作 $f^{-1}\mathcal{A}$。不过环对象的 $f_*$
通常不保持这些环。
:::

::: remark
和经典[[交换代数]]中类似，环同态可以不是局部
（严格 Hensel）环同态。
:::

::: definition
**局部（严格 Hensel）环化意象**是二元组
$(\mathcal{X},\mathcal{O_X})$，其中 $\mathcal{X}$
是意象，$\mathcal{O_X}$ 是其上局部（严格 Hensel）环。
$(\mathcal{X},\mathcal{O_X})$ 到 $(\mathcal{Y},\mathcal{O_Y})$
的**态射**是二元组 $(f,f^\sharp)$，其中 $f$
是意象态射，$f^\sharp\colon f^{-1} \mathcal{O_Y}
  \to \mathcal{O_X}$ 是局部同态。
:::

```terms
环化意象:
  en: ringed topos
  de: geringter Topos
  fr: topos annelé
```
