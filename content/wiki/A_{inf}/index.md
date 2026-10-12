---
title: '$A_{\inf}$'
aliases: [Ainf, Ainf(R)]
categories: [$p$ 进几何, 代数数论]
notices:
  - name: 问题
    items:
      - “推广”一节需要扩充。
---

::: convention
在本文中，

- 所有环都指[[交换环]]。
- $p$ 为一固定[[素数]]。

:::

$A_{\inf}$ 是 [[Jean-Marc Fontaine]] 引入的众多[[周期环]]中的一个，
是其中信息最多者。

## 定义

::: definition
对环 $R$，定义
$$
A_{\inf}(R)=W(R^\flat),
$$
其中 $W$ 指 [[Witt 环]]，$R^\flat$ 指 $R$ 的[[斜置等价|斜置]]，
即 $\lim_{\operatorname{Frob}}(\cdots\to R/p\to R/p)$。
也将 $A_{\inf}(\mathcal{O}_{\mathbb{C}_p})$ 记作
$A_{\inf}$，其中 $\mathbb{C}_p$ 为 [[$p$ 进复数]]，
$\mathcal{O}_{\mathbb{C}_p}$ 为其整数环。
:::

::: remark
和[[斜置等价|斜置]]一样，这只在 $R$ 为[[完美胚环]]时是合理的对象。
:::

## 性质

::: proposition
当 $R$ 为 $p$-完备时，存在唯一映射
$\theta\colon A_{\inf}(R)\to R$ 使图表
\[
\begin{tikzcd}
  A_{\inf}(R)\ar[r,"\theta"]\ar[d]&R\ar[d]\\
  R^\flat\ar[r]&R/p
\end{tikzcd}
\]
交换，下面的箭头是 $R^\flat=
\lim_{\operatorname{Frob}}(\cdots\to R/p\to R/p)$
投影到第 $0$ 个分量。
:::

::: proof
这是[[完美环]] [[Witt 环]]的万有性质。
:::

下面的命题表明了“$A_{\inf}$”之名的来源：
它是万有的无穷小加厚，“$\inf$”即无穷小。

::: proposition
如 $R$ 为 $p$-完备，$R/p$ 为[[半完美环]]，则
$\theta \colon A_{\inf}(R) \to R$ 是[[投射加厚]]，
且是其中万有者，即首先 $\theta$ 为满射，
$A_{\inf}(R)$ 为 $\ker(\theta)$-完备，其次对任一满射
$f \colon A \to R$，如 $A$ 为 $\ker(f)$-完备，
则存在唯一映射 $g \colon A_{\inf}(R) \to A$
使得 $f \circ g = \theta$。
:::

## 推广

（[[完美胚空间]]上的 $\mathbf{A}_{\inf}$ 层。）
