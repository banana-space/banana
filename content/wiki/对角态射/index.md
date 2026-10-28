---
title: 对角态射
categories: [范畴论]
navboxes: [范畴论]
---

<problems>
- “无穷范畴中的对角线”一节需要扩充。
</problems>

对[[范畴]] $\mathcal{C}$ 中的[[对象]] $X$，
其**对角态射**是形如
\[
\begin{aligned}
  \Delta_X \colon X & \longrightarrow X \times X, \\
  x & \longmapsto (x, x)
\end{aligned}
\]
的态射。对角态射是[[对角映射]]在[[范畴论]]中的推广。

## 定义

::: definition [对象的对角线]
设[[范畴]] $\mathcal{C}$ 有有限[[积 (范畴论)|积]]，
$X\in\mathcal{C}$。则 $X$ 的**对角态射**，
或称**对角线**，指的是态射
$$
\Delta_X\colon X\to X\times X,
$$
由以下图表唯一确定：
\[
\begin{tikzcd}
  X \ar[dr, dashed, "\Delta_X"]
  \ar[ddr, bend right, "\mathbb{1}_X"']
  \ar[drr, bend left, "\mathbb{1}_X"] \\
  & X \times X \ar[r, "p_2"] \ar[d, "p_1"'] & X \\
  & X \rlap{ ,}
\end{tikzcd}
\]
其中 $p_1, p_2 \colon X \times X \to X$
是向各分量的投影。
:::

::: definition [态射的对角线]
设[[范畴]] $\mathcal{C}$ 有[[纤维积]]，$f\colon X\to Y$
是 $\mathcal{C}$ 中态射。则 $f$ 的**对角态射**，
或称**对角线**，指的是态射
$$
\Delta_f\colon X\to X\times_YX,
$$
由以下图表唯一确定：
\[
\begin{tikzcd}
  X \ar[dr, dashed, "\Delta_f"]
  \ar[ddr, bend right, "\mathbb{1}_X"']
  \ar[drr, bend left, "\mathbb{1}_X"] \\
  & X \times_Y X \ar[r, "p_2"] \ar[d, "p_1"'] \ar[dr, pos=.2, phantom, "\ulcorner"] & X \ar[d, "f"] \\
  & X \ar[r, "f"] & Y \rlap{ .}
\end{tikzcd}
\]
态射 $\Delta_f$ 也常常记为 $\Delta_{X/Y}$。
:::

::: remark
映射 $f\colon X\to Y$ 的对角线就是 $f$
作为[[俯范畴]] $\mathcal{C}_{/Y}$ 的对象的对角线，
因为 $\mathcal{C}_{/Y}$ 中的二元积就是
$\mathcal{C}$ 中在 $Y$ 上的纤维积。
反之如 $\mathcal{C}$ 有[[终对象]] $*$，则对象
$X\in\mathcal{C}$ 的对角线就是映射 $X\to*$
的对角线。
:::

## 性质

本节中总是假设所需的[[积 (范畴论)|积]]、[[纤维积]]存在。

::: proposition
对角态射总是单态射。
一个态射是[[单态射]]当且仅当其对角态射是[[同构]]。
:::

::: proof
注意往任一分量的投影都是对角态射的左逆，立得对角态射总是单。
至于后一句话，由于一个态射是单射（同构）当且仅当对任一对象 $c$
把 $\operatorname{Hom}(c,-)$ 作用上去之后是集合单射（同构），
而命题只涉及[[极限 (范畴论)|极限]]构造，故作用
$\operatorname{Hom}(c,-)$，可化归到[[集合范畴]]。
此时具体写出元素，结论便是显然的。
:::

以下命题将对角线、乘积、纤维积三者联系起来。
它被 [[Ravi Vakil]] 称为“魔法图表”。

::: proposition {@魔法图表}
$\mathcal{C}$ 是范畴，$f\colon X\to Z$，
$g\colon Y\to Z$ 是 $\mathcal{C}$ 中态射。则
\[
\begin{tikzcd}
  X\times_ZY\ar[r,"f\times g"]
  \ar[d,"\operatorname{id}\times\operatorname{id}"']
  &Z\ar[d,"\Delta_Z"]\\
  X\times Y\ar[r,"f\times g"']&Z\times Z
\end{tikzcd}
\]
是拉回图表。
:::

::: proof
依定义，一个图表是拉回当且仅当对任一 $c\in\mathcal{C}$，
其在作用 $\operatorname{Hom}(c,-)$ 之后是[[集合范畴]]的拉回。
而命题中所有东西都是极限，都和 $\operatorname{Hom}(c,-)$
交换，所以只需在集合范畴中验证。这样由集合纤维积的定义命题显然。
:::

以下元定理在[[代数几何]]中比较常用。

::: theorem
$\mathcal{C}$ 是范畴，$\mathcal{P}$ 是
$\mathcal{C}$ 中态射的一个性质，对[[复合]]和[[基变换]]封闭。
$f\colon X\to Y$ 和 $g\colon Y\to S$ 是
$\mathcal{C}$ 中映射。如复合态射 $gf$ 满足 $\mathcal{P}$，
对角线 $\Delta_g$ 也满足 $\mathcal{P}$，则有映射 $f$
满足 $\mathcal{P}$。
:::

::: proof
把 $f$ 分解为[[图像态射]] $\Gamma_f\colon X\to
  X\times_SY$ 和投影 $\pi\colon X\times_SY\to Y$ 的复合。
$\pi$ 是 $gf$ 的基变换，所以它满足 $\mathcal{P}$；
对 $\mathcal{C}_{/S}$ 中态射 $f$，
$\operatorname{id}_Y$ 用 @魔法图表，
知 $\Gamma_f$ 沿图表
\[
\begin{tikzcd}
  X\ar[r,"f"]\ar[d,"\Gamma_f"']&Y\ar[d,"\Delta_g"]\\
  X\times_SY\ar[r,"f\times\operatorname{id}"']&
  Y\times_SY
\end{tikzcd}
\]
是 $\Delta_g$ 的基变换，
所以它也满足 $\mathcal{P}$；所以它们的复合 $f$
满足 $\mathcal{P}$。
:::

## 无穷范畴中的对角线

（定义。关于 $n$-截断。如有 $\Delta_!=\Delta_*$ 则有
$f_!\to f_*$。从而要求对角线满足某性质是更基本的要求。）

```terms
对角态射:
  en: diagonal morphism
  de: diagonaler Morphismus
  fr: morphisme diagonal
  grc: διαγώνιος μορφισμός
  la: morphismus diagonalis
```
