---
title: 加细
categories: [一般拓扑, 层论]
---

**加细**是[[拓扑学]]和[[层论]]中的概念，
指的是把开覆盖换成更细的开覆盖。

## 定义

::: definition [拓扑空间中的加细]
$X$ 是[[拓扑空间]]，$\{U_i\}_{i\in I}$ 和 $\{V_j\}_{j\in J}$
是其两个[[开覆盖]]。称 $\{U_i\}_{i\in I}$ 是
$\{V_j\}_{j\in J}$ 的**加细**，指的是每个
$U_i$ 都含在某个 $V_j$ 中，即前者比后者更“细小”。
换言之，这就是说存在映射 $\varphi\colon I\to J$，
使得 $U_i\subseteq V_{\varphi(i)}$。
:::

::: definition [Grothendieck 拓扑中的加细]
$\mathcal{C}$ 是[[景]]，$X\in\mathcal{C}$，
$\{U_i\to X\}_{i\in I}$ 和 $\{V_j\to X\}_{j\in J}$
是其两个开覆盖。称 $\{U_i\to X\}_{i\in I}$ 是
$\{V_j\to X\}_{j\in J}$ 的**加细**，
指的是存在映射 $\varphi\colon I\to J$ 和对每个 $i$
的态射 $U_i\to V_{\varphi(i)}$，使图表
\[
\begin{tikzcd}
  U_i\ar[rr]\ar[rd]&&V_{\varphi(i)}\ar[ld]\\
  &X&
\end{tikzcd}
\]
交换。
:::

```terms
加细:
  en: refinement
  de: Verfeinerung :f
  fr: raffinement :m
```
