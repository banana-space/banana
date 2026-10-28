---
title: von Neumann 宇宙
aliases: [Von Neumann 宇宙, Von Neumann 层级]
categories: [集合论]
---

<problems>
- “性质”一节第一个定理的证明取“这些 $\alpha$ 中最大者”，但 $x$ 无限时这些序数似乎不一定有最大者，应取上确界（并用到替换公理）。
</problems>

[[集合论]]中，**von Neumann 宇宙**是
[[ZF 集合论]]里的所有[[集合]]构成的[[类]]，
带有 **von Neumann 层级**结构。通常将其记作
$V$ 或 $\mathbf{V}$。逻辑上，它是在
ZF 集合论的框架下定义的；认知上，它则是 ZF 集合论的直观解释。

## 定义

::: definition [von Neumann 层级]
对[[序数]] $\alpha$ [[超限归纳法|归纳]]定义集合 $V_\alpha$ 如下：

- $V_0=\emptyset$。

- $V_{\alpha+1}=\mathcal{P}(V_\alpha)$，
  其中 $\mathcal{P}$ 表示[[幂集]]。

- 对[[极限序数]] $\alpha$，$V_\alpha=\bigcup_{\beta<\alpha}V_\beta$。

由于 $y\subseteq x$ 推出 $\mathcal{P}(y)\subseteq\mathcal{P}(x)$，
不难归纳证明对 $\beta\le\alpha$ 有 $V_\beta\subseteq V_\alpha$。
这些 $V_\alpha$ 称为 **von Neumann 层级**。
:::

::: definition [von Neumann 宇宙]
定义类 $V=\bigcup_{\alpha\in\textbf{Ord}}V_\alpha$，
称为 **von Neumann 宇宙**。
:::

::: definition [层级]
如集合 $x$ 属于 $V_{\alpha+1}$ 但不属于 $V_\alpha$，
换言之其包含于 $V_\alpha$ 但对任意 $\beta<\alpha$ 都不包含于
$V_\beta$，则称 $x$ 的**层级**为 $\alpha$，记作
$\operatorname{rank}(x)=\alpha$。由以下 @良基 可以看到，每个集合都有层级。
:::

## 性质

以下定理是其最基本的性质，说明 von Neumann 层级的确穷尽
ZF 集合论中的所有集合。它需要用到[[良基公理]]。

::: theorem {@良基}
对任意集合 $x$ 都存在序数 $\alpha$ 使得 $x\in V_\alpha$。
:::

::: proof
以集合归纳法的形式使用良基公理。记
$P(x)=\exists\alpha(\alpha\in\textbf{Ord}\wedge x\in V_\alpha)$，
只需证
$$
\forall x(\forall y(y\in x\rightarrow P(y))\rightarrow P(x)).
$$
如 $x$ 的每个元素都属于某个 $V_\alpha$，取这些 $\alpha$
中最大者可设它们属于同一个 $V_\alpha$。此时依定义
$x\in V_{\alpha+1}$，命题得证。
:::

::: remark
反过来，如从 $\text{ZF}-\text{WF}$ 即 ZF 去掉良基公理出发，
作 von Neumann 层级构造，由以下 @层级
不难发现在所得 von Neumann 宇宙中良基公理成立。由此可见
$$
\operatorname{Con}(\text{ZF}-\text{WF})\implies
\operatorname{Con}(\text{ZF}).
$$
:::

::: proposition
每个 $V_\alpha$ 都是[[传递集合]]。
:::

::: proof
用归纳法。由一族传递集合之并仍传递，可得极限序数情形。
至于后继序数情形，注意 $x\in V_{\alpha+1}$ 推出
$x\subseteq V_\alpha\subseteq V_{\alpha+1}$，即得结论。
:::

::: proposition {@层级}
对 $y\in x$ 有 $\operatorname{rank}(y)<\operatorname{rank}(x)$。
事实上有更强的命题：
$$
\operatorname{rank}(x)=
\min\{\alpha\in\textbf{Ord}\mid\forall y(y\in x\rightarrow
\operatorname{rank}(y)<\alpha)\}.
$$
:::

::: proof
如 $y\in x$，$\operatorname{rank}(x)=\alpha$，
则由 $x\subseteq V_\alpha$ 知 $y\in V_\alpha$
从而 $\operatorname{rank}(y)<\alpha$。
反过来如序数 $\alpha'$ 满足对任意 $y\in x$
都有 $\operatorname{rank}(y)<\alpha'$ 即
$y\in V_{\alpha'}$，就有 $x\subseteq V_{\alpha'}$
从而 $\operatorname{rank}(x)\le\alpha'$。
:::

::: corollary
对任意序数 $\alpha$，$\operatorname{rank}(\alpha)=\alpha$，
$V_\alpha\cap\textbf{Ord}=\alpha$。
:::

::: proof
前半句话自然来自
$$
\min\{\alpha'\in\textbf{Ord}\mid\forall\beta(\beta\in\alpha\rightarrow
\beta<\alpha')\}=\alpha,
$$
因为序数 $\in$ 和 $<$ 是一回事。后半句话来自前半句话和
$\operatorname{rank}$ 的定义。
:::

还有一些简单的[[模型论]]性质。

::: proposition
$V_\omega$ 是 $\text{ZF}-\infty+\neg\infty$
即 ZF 把[[无穷公理]]换成其否定的[[模型]]。特别地，
$$
\text{ZF}\vdash\operatorname{Con}(\text{ZF}-\infty+\neg\infty).
$$
:::

::: proposition
对极限序数 $\alpha>\omega$，$V_\alpha$ 是
$\text{ZF}-\text{R}$ 即 ZF 去掉[[替换公理模式]]的模型。
:::

## 哲学观点

关于 von Neumann 宇宙和 ZF 公理系统，大致有两种不同的哲学观点，
一种认为后者是数学世界而前者是其中定义出的对象，
一种认为前者是实在的对象而后者是其性质的总结。
采用哪种看法是个主观选择，且对数学实践毫无影响。
编者在此采用前一种，正如在[[一阶语言]]词条中认为[[一阶逻辑]]比[[集合论]]更基本。

```terms
von Neumann 宇宙:
  en: von Neumann universe
  de: von Neumann-Universum :n
  fr: univers de von Neumann :m
von Neumann 层级:
  en: von Neumann hierarchy
  de: von Neumann-Hierarchie :f
  fr: hiérarchie de von Neumann :f
```
