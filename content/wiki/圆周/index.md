---
title: 圆周
aliases: [圆圈]
categories: [一般拓扑]
navboxes: [一般拓扑]
---

**圆周** $S^1$ 是如下图所示的[[拓扑空间]]：

```tikz
\begin{tikzpicture}[line width=1, scale=.6]
    \draw (0,0) circle (1.5);
\end{tikzpicture}
```

圆周是[[球面]]的一维特例，是一维[[光滑流形]]，
也是[[同胚]]、[[微分同胚]]意义下唯一的一维[[紧空间|紧]]、[[连通空间|连通]][[流形]]。

## 定义

::: definition
**圆周** $S^1$ 定义为 [[Euclid 空间]] $\mathbb{R}^2$ 的[[拓扑子空间|子空间]]
\[
S^1 = \set{ (x, y) \in \mathbb{R}^2 | x^2 + y^2 = 1 }.
\]
:::

上述具体的 $\mathbb{R}^2$ 的子空间也称为**单位圆周**，
而一般的圆周是指[[同胚]]于该空间的[[拓扑空间]]。

也常常将圆周视为[[复平面]] $\mathbb{C}$ 的子空间
\[
\set{ z \in \mathbb{C} | |z| = 1 }.
\]

## 性质

- 圆周的[[基本群]]是 $\pi_1 (S^1) \simeq \mathbb{Z}$，其[[万有覆叠]]由映射
  \[
  \begin{aligned}
    \mathbb{R} & \longrightarrow S^1, \\
    t & \longmapsto \mathrm{e}^{2 \pi \mathrm{i} t}
  \end{aligned}
  \]
  给出，这里将 $S^1$ 视为 $\mathbb{C}$ 的子空间。
  当 $n > 1$ 时，圆周的[[同伦群]] $\pi_n (S^1) \simeq 0$。

- 圆周是 $\mathbb{Z}$ 的[[分类空间]] $\mathrm{B} \mathbb{Z}$，
  也是 [[Eilenberg–Mac Lane 空间]] $K (\mathbb{Z}, 1)$。

- 圆周具有 [[Lie 群]]的结构，即[[酉群]] $\mathrm{U} (1)$。

```terms
圆周:
  en: circle
  fr: cercle :m
  de: Kreislinie :f
  ja: 円<えん>周<しゅう>
```
