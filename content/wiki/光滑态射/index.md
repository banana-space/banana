---
title: 光滑态射
categories: [概形论]
notices:
  - name: 消歧义
    about: '[[代数几何]]中的概念'
    see:
      - topic: '[[微分几何]]中的同名概念'
        page: 光滑映射
navboxes: [态射性质]
---

在[[代数几何]]中，**光滑态射**是一类[[概形态射]]，
是[[微分几何]]中[[流形]]之间[[浸没]]的类比。
流形的映射 $f \colon X \to Y$ 是浸没，
意思是它在每个 $x \in X$ 附近看起来都像是投影映射
\[
\begin{aligned}
  \mathbb{R}^{m+n} & \longrightarrow \mathbb{R}^m, \\
  (x_1, \dotsc, x_{m+n}) & \longmapsto
  (x_1, \dotsc, x_m).
\end{aligned}
\]
概形之间的光滑态射也有类似的局部刻画：
下面的 @局部刻画 说明，局部地看，
到仿射开集 $V$ 的光滑态射是
$\mathbb{A}_V^n \simeq V \times \mathbb{A}^n$
中由一组多项式所刻画的子概形，
这组多项式需要保证该子概形上没有奇点。
而[[平展拓扑|平展局部]]地看，
光滑态射看起来直接像是投影 $\mathbb{A}_V^n \to V$。

在[[代数–几何对偶]]下，
光滑态射对应于环的[[光滑同态]]。

## 定义

::: definition [光滑态射]
[[概形态射]] $f \colon X \to Y$ 称为**光滑态射**，
如果以下等价条件成立。

1. 对任意 $x \in X$，存在仿射开集
   $x \in U \simeq \operatorname{Spec} A$ 及
   $f (x) \in V \simeq \operatorname{Spec} R$，
   使得 $f (U) \subset V$，且诱导的环同态 $R \to A$ 是[[光滑同态]]。

2. 对任意仿射开集
   $U \simeq \operatorname{Spec} A \subset X$ 及
   $V \simeq \operatorname{Spec} R \subset Y$，
   若 $f (U) \subset V$，则诱导的环同态 $R \to A$ 是[[光滑同态]]。

3. $f$ [[平坦态射|平坦]]、[[局部有限表现态射|局部有限表现]]，
   且对每个 $y \in Y$，[[几何纤维]]
   $X_{\overline{y}} =
   X \times_Y \operatorname{Spec} \overline{\kappa (y)}$
   都是[[正则概形]]。

4. $f$ [[局部有限表现态射|局部有限表现]]、[[形式光滑态射|形式光滑]]。

:::

## 性质

::: theorem
我们有以下性质。

- 光滑态射的复合是光滑态射。

- 光滑态射被拉回保持。

:::

::: theorem [局部刻画] {@局部刻画}
设 $f \colon X \to Y$ 是概形态射。则下列等价。

- $f$ 是光滑态射。

- 对每个 $x \in X$，存在仿射开集
  $x \in U \simeq \operatorname{Spec} S$
  及 $f (x) \in V \simeq \operatorname{Spec} R$，
  使得 $f (U) \subset V$，有 $R$-代数的同构
  \[
  S \simeq R [x_1, \dotsc, x_n] / (f_1, \dotsc, f_m),
  \]
  其中 $0 \leq m \leq n$，
  且 $f_1, \dotsc, f_m$ 满足以下条件：[[行列式]]
  \[
  \det \begin{pmatrix}
    \partial f_1 / \partial x_1
    & \partial f_2 / \partial x_1
    & \cdots
    & \partial f_m / \partial x_1
    \\ \partial f_1 / \partial x_2
    & \partial f_2 / \partial x_2
    & \cdots
    & \partial f_m / \partial x_2
    \\ \vdots
    & \vdots
    & & \vdots
    \\ \partial f_1 / \partial x_m
    & \partial f_2 / \partial x_m
    & \cdots
    & \partial f_m / \partial x_m
  \end{pmatrix}
  \]
  是 $S$ 中的可逆元。

- 对每个 $x \in X$，存在开集
  $x \in U$ 及 $f (x) \in V$，
  使得 $f (U) \subset V$，
  且有[[平展态射]] $g \colon U \to \mathbb{A}_V^n$，满足交换图
  \[
  \begin{tikzcd}
    U \ar[r, "g"] \ar[dr, "f|_U"']
    & \mathbb{A}_V^n \ar[d, "\pi"] \\
    & V \rlap{ ,}
  \end{tikzcd}
  \]
  其中 $\pi$ 是自然的投影态射。

:::

见 [@stacks, Tag 01V7, 054L]。

## 参考文献

```bibliography
stacks:
  type: online
  site: The Stacks project
  title: The Stacks project
  url: https://stacks.math.columbia.edu/
```

```terms
光滑态射:
  en: smooth morphism
  fr: morphisme lisse :m
```
