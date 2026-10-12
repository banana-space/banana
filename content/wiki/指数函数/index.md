---
title: 指数函数
categories: [复分析, 特殊函数]
notices:
  - name: 消歧义
    see:
      - topic: 几何学中的概念
        page: 指数映射
  - name: 问题
    items:
      - “性质”一节需要扩充。
---

**指数函数** $\exp \colon \mathbb{C} \to \mathbb{C}$
是一个[[全纯函数]]，它的两个最重要的性质是
\[
\begin{aligned}
  \exp (x + y) & = \exp (x) \exp (y), \\
  \exp' (x) & = \exp (x).
\end{aligned}
\]
指数函数也常常被记为 $\mathrm{e}^x$，
其中 [[$\mathrm{e}$]]${} = \mathrm{e}^1$
是指数函数在 $1$ 的取值。

## 定义

### 通过幂级数

::: definition [指数函数]
**指数函数** $\exp \colon \mathbb{C} \to \mathbb{C}$
定义为下面的[[幂级数]]：
\[
\exp (x) = \sum_{n=0}^\infty \frac{1}{n!} x^n
\quad (x \in \mathbb{C}).
\]
:::

### 通过微分方程

::: definition [指数函数]
**指数函数** $\exp \colon \mathbb{R} \to \mathbb{R}$
是以下[[常微分方程]]的[[初值问题]]的解：
\[
\begin{cases}
  \exp' (x) = \exp (x) \quad (x \in \mathbb{R}), \\
  \exp(0) = 1.
\end{cases}
\]
:::

## 性质

```terms
指数函数:
  en: exponential function
  de: Exponentialfunktion
  fr: fonction exponentielle
  grc: ἐκθετικὴ συνάρτησις
  la: functio exponentialis
```
