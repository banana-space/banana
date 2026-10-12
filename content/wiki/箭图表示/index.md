---
title: 箭图表示
categories: [表示论]
navboxes: [非交换代数]
---

在[[非交换代数]]和[[表示论]]中，
[[箭图]] $Q$ 的**箭图表示**给 $Q$ 的每个顶点赋予一个[[向量空间]]，
给每个箭头赋予一个相应向量空间之间的[[线性映射]]。

[[箭图表示模空间]]是[[代数几何]]研究中的重要对象，
是模空间理论的基本例子。

## 定义

::: definition [箭图表示]
设 $Q$ 是[[箭图]]，
$\mathcal{C}$ 是[[范畴]]。
则 $Q$ 在 $\mathcal{C}$ 中的**箭图表示**是指[[函子]]
\[
X \colon \mathsf{Free} (Q) \longrightarrow \mathcal{C},
\]
其中 $\mathsf{Free} (Q)$ 是 $Q$ 生成的[[自由范畴]]。
$Q$ 在 $\mathcal{C}$ 中的**箭图表示范畴**是指[[函子范畴]]
\[
\mathsf{Rep} (Q, \mathcal{C}) =
\mathsf{Fun} (\mathsf{Free} (Q), \mathcal{C}).
\]

特别地，$Q$ 在[[域]] $k$ 上的**箭图表示**
是指 $Q$ 在 $k$-[[向量空间]]的范畴 $\mathcal{C} = \mathsf{Vect}_k$
上的箭图表示。
:::

具体而言，箭图 $Q = (V, E, s, t)$ 在范畴 $\mathcal{C}$ 中的表示由以下信息组成：

- 对 $Q$ 的每个顶点 $v \in V$，有 $\mathcal{C}$ 中的对象 $X_v$。

- 对 $Q$ 的每条边 $e \in E$，有 $\mathcal{C}$ 中的态射
  $f_e \colon X_{s(e)} \to X_{t(e)}$。

对于两个这样的表示 $X = ((X_v)_{v \in V}, (f_e)_{e \in E})$
与 $X' = ((X'_v)_{v \in V}, (f'_e)_{e \in E})$，
从 $X$ 到 $X'$ 的**箭图表示态射**，
即相应函子间的[[自然变换]]，
可以具体地写成以下信息：

- 对 $Q$ 的每个顶点 $v \in V$，有 $\mathcal{C}$ 中的态射
  $g_v \colon X_v \to X'_v$，使得对任意 $e \in E$，
  有 $\mathcal{C}$ 中的[[交换图]]
  \[
  \begin{tikzcd}
    X_{s (e)} \ar[r, "g_{s (e)}"] \ar[d, "f_e"'] & X'_{s (e)} \ar[d, "f'_e"] \\
    X_{t (e)} \ar[r, "g_{t (e)}"] & X'_{t (e)} \rlap{ .}
  \end{tikzcd}
  \]

```terms
箭图表示:
  en: quiver representation
  fr: représentation de carquois :f
  de: Köcherdarstellung :f
```
