---
title: 局部常纤维范畴
categories: [范畴论]
---

**局部常纤维范畴**是特殊的[[纤维范畴]]，
其底范畴的[[态射]]在纤维上诱导的[[函子]]都是[[范畴等价]]。

## 定义

::: definition {@def}
称函子 $p\colon\mathcal{E}\to\mathcal{C}$
为**局部常纤维范畴**，指它首先是[[纤维范畴]]
（即[[拉回纤维化]]），其次 $\mathcal{C}$ 中任一态射
$f\colon x\to y$ 在纤维上诱导的函子
$f^*\colon\mathcal{E}_y\to\mathcal{E}_x$
都是范畴等价。
:::

::: remark
显然，此时 $p$ 也会是[[推出纤维化]]，对应的推出函子
$f_!\colon\mathcal{E}_x\to\mathcal{E}_y$ 就是
$(f^*)^{-1}$。所以 @def
实际上关于推出和拉回两个方向是对称的。
:::

## $(\infty,1)$-范畴论性质

本节中[[范畴]]都指 [[$(\infty,1)$-范畴]]。
注意上面的内容都可以照搬到 $(\infty,1)$-范畴上。

对 $(\infty,1)$-范畴 $\mathcal{C}$，
以 $|\mathcal{C}|$ 表示 $\mathcal{C}$ 的几何实现，
即把 $\mathcal{C}$ 的所有映射逆掉得到的[[生象]]。
则以下命题依定义显然：

::: proposition {@lcst}
推出纤维化 $p\colon\mathcal{E}\to\mathcal{C}$
局部常当且仅当其[[直化]]函子 $\mathcal{C}\to\mathsf{Cat}$
穿过 $|\mathcal{C}|$；拉回纤维化类似。
:::

对于纤维是[[生象]]的函子，局部常还有以下刻画：

::: proposition {@lc=pb}
设函子 $p\colon\mathcal{E}\to\mathcal{C}$ 的纤维都是生象。
则 $p$ 是局部常纤维化，当且仅当
\[
\begin{tikzcd}
  \mathcal{E}\ar[d,"p"']\ar[r]&{|\mathcal{E}|}\ar[d,"|p|"]\\
  \mathcal{C}\ar[r]&{|\mathcal{C}|}
\end{tikzcd}
\]
是范畴的拉回方块。此时如 $E$ 是生象，
\[
\begin{tikzcd}
  \mathcal{E}\ar[d,"p"']\ar[r]&E\ar[d,"\bar{p}"]\\
  \mathcal{C}\ar[r]&{|\mathcal{C}|}
\end{tikzcd}
\]
是范畴的拉回方块，则 $(E,\bar{p})=(|\mathcal{E}|,|p|)$。
:::

::: proof
由 @lcst 和直化的函子性知“当”为显然，
且“仅当”化归到命题后一句话。下证之。
由[[直化]]的一般性质，
$|\mathcal{E}|=\operatornamewithlimits{colim}_{\mathcal{C}}p$，
$E=\operatornamewithlimits{colim}_{|\mathcal{C}|}\bar{p}$；
于是由 $\mathcal{C}\to|\mathcal{C}|$ 共尾即知
$(|\mathcal{E}|,|p|)=(E,\bar{p})$。
:::

## 相关概念

- 在[[伴随求值]]的范畴语义中，计算类型被解释到局部常纤维范畴中。

```terms
局部常纤维范畴:
  en: locally constantly fibred category
```
