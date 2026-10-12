---
title: 逗号范畴
categories: [范畴论]
navboxes: [范畴论]
---

**逗号范畴**是[[范畴论]]中的一种构造。
给定[[范畴]] $\mathcal{C}$、$\mathcal{D}$、$\mathcal{E}$
及[[函子]] $f \colon \mathcal{C} \to \mathcal{E}$，
$g \colon \mathcal{D} \to \mathcal{E}$，
其逗号范畴 $\mathcal{C} \mathbin{\vec{\times}}_{\mathcal{E}} \mathcal{D}$ 是由形如
\[
(x, y, a) \colon \
x \in \mathcal{C}, \
y \in \mathcal{D}, \
a \colon f (x) \to g (y).
\]
的三元组构成的范畴。
例如，[[俯范畴]]、[[仰范畴]]、[[箭头范畴]]都是逗号范畴的特例。

逗号范畴与[[纤维积范畴]] $\mathcal{C} \times_{\mathcal{E}} \mathcal{D}$
的定义十分相似，只是后者要求三元组 $(x, y, a)$ 中的 $a$ 是同构，
而逗号范畴允许它是任何态射。
事实上，正如纤维积范畴满足纤维积的万有性质，
从而是[[范畴的范畴]] $\mathsf{Cat}$ 中的 [[$2$-极限]]，
逗号范畴也满足一个相似的万有性质。
该万有性质类似于[[松 $2$-极限]]，但不完全与之相同。

逗号范畴的名称来源于 [[Lawvere]] 的原始记号 $(f , g)$。

逗号范畴的构造也可以从 $\mathsf{Cat}$ 推广到一般的 [[$2$-范畴]]，
称为 $2$-范畴中的[[有向纤维积]]。

## 定义

::: definition [逗号范畴] {@逗号范畴}
设有[[范畴]] $\mathcal{C}$、$\mathcal{D}$、$\mathcal{E}$，
及[[函子]] $f \colon \mathcal{C} \to \mathcal{E}$，
$g \colon \mathcal{D} \to \mathcal{E}$。
则其**逗号范畴**是如下定义的范畴：

- 对象：形如 $(x, y, a)$ 的三元组，
  其中 $x \in \mathcal{C}$，$y \in \mathcal{D}$，
  $a \in \mathcal{E} (f (x), g (y))$。

- 从 $(x, y, a)$ 到 $(x', y', a')$ 的态射是二元组 $(c, d)$，
  其中 $c \in \mathcal{C} (x, x')$，$d \in \mathcal{D} (y, y')$，
  使得 $\mathcal{E}$ 中的图表
  \[
  \begin{tikzcd}
    f (x) \ar[d, "f (c)"'] \ar[r, "a"]
    & g (y) \ar[d, "g (d)"]
    \\ f (x') \ar[r, "a'"]
    & g (y')
  \end{tikzcd}
  \]
  交换。

我们将这个范畴记为
\[
\begin{gathered}
  \mathcal{C} \underset{f, \, \mathcal{E}, \, g}{\mathbin{\vec{\times}}}
  \mathcal{D} \quad \text{或} \quad
  \mathcal{C} \mathbin{\underset{\mathcal{E}}{\mathbin{\vec{\times}}}}
  \mathcal{D} \\ \text{或} \quad
  (f \downarrow g) \quad \text{或} \quad (f \mathbin{/} g) .
\end{gathered}
\]
:::

我们有自然的投影态射
$p \colon \mathcal{C} \mathbin{\vec{\times}}_{\mathcal{E}} \mathcal{D} \to \mathcal{C}$
及
$q \colon \mathcal{C} \mathbin{\vec{\times}}_{\mathcal{E}} \mathcal{D} \to \mathcal{D}$，
它们将三元组 $(x, y, a)$ 分别映至 $x, y$。
我们有 $\mathsf{Cat}$ 中的图表
\[
\begin{tikzcd}
  \mathcal{C} \mathbin{\underset{\mathcal{E}}{\mathbin{\vec{\times}}}} \mathcal{D}
  \ar[r, "q"] \ar[d, "p"']
  & \mathcal{D} \ar[d, "g"]
  \\ \mathcal{C} \ar[r, "f"]
  \ar[ur, phantom, pos=.55, shift left=.5, "\Longrightarrow"{rotate=45}]
  \ar[ur, shift left=3, phantom, "\scriptstyle \alpha"]
  & \mathcal{E} \rlap{ ,}
\end{tikzcd}
\]
其中[[自然变换]] $\alpha$ 在对象
$(x, y, a) \in \mathcal{C} \mathbin{\vec{\times}}_{\mathcal{E}} \mathcal{D}$
上定义为
\[
\alpha_{(x, y, a)} = a \colon
f (x) \to g (y).
\]
需要注意的是，上述图表并不是相差[[自然同构]]意义下的交换图表，
因为 $\alpha$ 不是自然同构。

下面，我们来叙述逗号范畴的万有性质。

::: proposition
在 @逗号范畴 的情况下，
逗号范畴 $\mathcal{C} \mathbin{\vec{\times}}_{\mathcal{E}} \mathcal{D}$
满足以下万有性质：

- 给定任一范畴 $\mathcal{F}$，
  函子 $p' \colon \mathcal{F} \to \mathcal{C}$，
  $q' \colon \mathcal{F} \to \mathcal{D}$，
  及自然变换 $\alpha' \colon f \circ p' \Rightarrow g \circ q'$，
  如下图所示：
  \[
  \begin{tikzcd}
    \mathcal{F}
    \ar[r, "q'"] \ar[d, "p'"']
    & \mathcal{D} \ar[d, "g"]
    \\ \mathcal{C} \ar[r, "f"]
    \ar[ur, phantom, pos=.55, shift left=.5, "\Longrightarrow"{rotate=45}]
    \ar[ur, shift left=3, phantom, "\scriptstyle \alpha'"]
    & \mathcal{E} \rlap{ ,}
  \end{tikzcd}
  \]
  则存在“唯一”的函子
  $h \colon \mathcal{F} \to \mathcal{C} \mathbin{\vec{\times}}_{\mathcal{E}} \mathcal{D}$，
  及自然同构 $\beta \colon p \circ h \simeq p'$，
  $\gamma \colon q \circ h \simeq q'$，
  使得
  \[
  \alpha' =
  (g \circ \gamma) \star
  (\alpha \circ h) \star
  (f \circ \beta^{-1}),
  \]
  其中 $\star$ 是[[纵向复合]]。
  上述关系可以画成以下图表：
  \[
  \begin{tikzcd}
    \mathcal{F}
    \ar[ddr, bend right=40, "p'"']
    \ar[drr, bend left, "q'"]
    \ar[dr, "h"]
    \ar[drr, phantom, pos=.52, "\Longrightarrow"{rotate=60}]
    \ar[drr, phantom, pos=.45, "\scriptstyle \gamma"]
    \ar[ddr, phantom, pos=.52, "\Longleftarrow"{rotate=30}]
    \ar[ddr, phantom, pos=.45, "\scriptstyle \beta"]
    \\ & \mathcal{C} \mathbin{\underset{\mathcal{E}}{\mathbin{\vec{\times}}}} \mathcal{D}
    \ar[r, "q"] \ar[d, "p"']
    & \mathcal{D} \ar[d, "g"]
    \\ & \mathcal{C} \ar[r, "f"]
    \ar[ur, phantom, pos=.55, shift left=.5, "\Longrightarrow"{rotate=45}]
    \ar[ur, shift left=3, phantom, "\scriptstyle \alpha"]
    & \mathcal{E} \rlap{ ,}
  \end{tikzcd}
  \]
  其中三个 $2$-态射拼成大块的 $2$-态射 $\alpha'$。

  这里，上面的唯一性是指若有两组数据 $(h, \beta, \gamma)$
  与 $(h', \beta', \gamma')$ 满足要求，
  则存在唯一的自然同构 $\eta \colon h \simeq h'$，
  使得 $\gamma = \gamma' \star (q \circ \eta)$，
  $\beta = \beta' \star (p \circ \eta)$。

:::

## 例子

- 恒同函子 $\mathcal{C} \to \mathcal{C}$ 与一个函子
  $* \to \mathcal{C}$ 的逗号范畴
  $\mathcal{C} \mathbin{\vec{\times}}_{\mathcal{C}} {*}$ 就是[[俯范畴]]
  $\mathcal{C}_{/x}$，其中 $x$ 是函子 $* \to \mathcal{C}$ 的像。

- 类似地，${*} \mathbin{\vec{\times}}_{\mathcal{C}} \mathcal{C}$ 就是[[仰范畴]]
  $\mathcal{C}_{x/}$，其中 $x$ 是函子 $* \to \mathcal{C}$ 的像。

```terms
逗号范畴:
  en: comma category
  de: Kommakategorie :f
  fr: catégorie comma :f
```
