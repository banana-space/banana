---
title: 紧态射
categories: [范畴论]
navboxes: [范畴论]
---

**紧态射**是[[范畴]]中一类[[态射]]，
是[[泛函分析]]中[[紧算子]]的范畴论类比。

## 定义

设 $\mathcal{C}$ 是[[范畴]]，有任意[[滤余极限]]。

::: definition [弱紧态射] {@弱紧}
称 $\mathcal{C}$ 中态射 $f\colon X\to Y$ 为**弱紧态射**，
指对 $\mathcal{C}$ 中任一[[滤图表]] $(Z_i)_{i\in I}$
以及任一态射 $g\colon Y\to\operatornamewithlimits{colim}_{i\in I}Z_i$，存在
$i_0\in I$ 以及态射 $h\colon X\to Z_{i_0}$，使图表
$$
\begin{tikzcd}
  X\ar[r,"f"]\ar[d,"h"']&Y\ar[d,"g"]\\
  Z_{i_0}\ar[r]&\operatornamewithlimits{colim}_{i\in I}Z_i
\end{tikzcd}
$$
交换。
:::

[[高阶范畴论]]中有时需要一个更强的、更同伦连贯的概念。
以下 $\mathcal{C}$ 是 [[$(\infty,1)$-范畴]]，仍有任意滤余极限。

::: definition [强紧态射] {@强紧}
称 $\mathcal{C}$ 中态射 $f\colon X\to Y$ 为**强紧态射**，
指对 $\mathcal{C}$ 中任一[[滤图表]] $(Z_i)_{i\in I}$，
存在虚线态射使图表
$$
\begin{tikzcd}
  \operatornamewithlimits{colim}_{i\in I}\operatorname{Hom}(Y,Z_i)\ar[d]\ar[r,"f^*"]\ar[d]&\operatornamewithlimits{colim}_{i\in I}\operatorname{Hom}(X,Z_i)\ar[d]\\
  \operatorname{Hom}(Y,\operatornamewithlimits{colim}_{i\in I}Z_i)\ar[r,"f^*"]\ar[ur,dashed]&\operatorname{Hom}(X,\operatornamewithlimits{colim}_{i\in I}Z_i)
\end{tikzcd}
$$
交换，其中 $\operatorname{Hom}$ 表示 $\mathcal{C}$ 的态射生象。
:::

还可以要求更强的同伦连贯性。

::: definition [紧态射生象]
对 $X,Y\in\mathcal{C}$，$X$ 到 $Y$ 的紧态射生象定义为
$$
\operatorname{Hom}^紧(X,Y)=\lim_{(Z_i)_{i\in I}\in\mathsf{Ind}(\mathcal{C}_{/Y})}
\operatornamewithlimits{colim}_{i\in I}\operatorname{Hom}(X,Z_i).
$$
注意由于范畴 $\mathsf{Ind}(\mathcal{C}_{/Y})$ 未必小，
这个极限未必存在。如它存在，
则显然有生象映射 $\operatorname{Hom}^紧(X,Y)\to\operatorname{Hom}(X,Y)$。
:::

## 性质

::: proposition {@理想}
设 $f\colon X\to Y$、$g\colon X'\to X$、$h\colon Y\to Y'$
是范畴 $\mathcal{C}$ 中态射。如 $f$ 弱紧，则
$h\circ f\circ g$ 弱紧。
:::

::: theorem
设 $\mathcal{C}$ 为紧聚集 $(\infty,1)$-范畴。
则对任意 $X,Y\in\mathcal{C}$，$\operatorname{Hom}^紧(X,Y)$ 存在，
且对任意态射 $f\colon X\to Y$，以下几条等价：

- $f$ 弱紧。

- $f$ 强紧。

- 存在 $\tilde{f}\in\operatorname{Hom}^紧(X,Y)$ 打到
  $f\in\operatorname{Hom}(X,Y)$。
:::

```terms
紧态射:
  en: compact morphism
弱紧态射:
  en: weakly compact morphism
```
