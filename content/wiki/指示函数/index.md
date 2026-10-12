---
title: 指示函数
categories: [集合论]
---

对[[集合]] $X$，其[[子集]] $Y \subset X$ 的**指示函数**
（也称为**特征函数**、**示性函数**）
是指[[映射 (集合论)|映射]]
\[
\begin{aligned}
  \mathbb{1}_Y \colon X & \longrightarrow \{ 0, 1 \}, \\
  x & \longmapsto \begin{cases}
    1, & x \in Y, \\
    0, & x \notin Y.
  \end{cases}
\end{aligned}
\]
指示函数也记为 $\chi_Y$。

## 例子

- 在[[概率论]]中，对[[概率空间]] $\Omega$ 中的[[事件]] $A$，
  指示函数 $\mathbb{1}_A \colon \Omega \to \{ 0, 1 \}$
  可以视为[[随机变量]]，称为 $A$ 的**指示变量**，
  它当事件 $A$ 发生时取值为 $1$，否则为 $0$。
  该随机变量的[[期望]]等于 $A$ 的[[概率]]，
  即 $\mathbb{E} (\mathbb{1}_A) = \mathbb{P} (A)$。

```terms
指示函数:
  en: indicator function
  fr: fonction indicatrice :f
  de: Indikatorfunktion :f
  ja: 指<し>示<じ>関<かん>数<すう>
  ko: 지시 함수 (指示函數)
```
