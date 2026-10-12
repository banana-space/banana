---
title: 伴随（范畴论）
categories: [范畴论]
notices:
  - name: 问题
    items:
      - “定义”“例子”各节需要扩充。
---

**伴随**是个 [[$2$-范畴]]概念，是[[伴随函子]]的推广，
把它从 $2$-范畴 $\mathsf{Cat}$ 推广到任一 $2$-范畴。

## 定义

::: definition
设 $\mathcal{C}$ 是 $2$-范畴，
$f\colon x\to y$ 是其中的 $1$-态射。称 $f$ 为**左伴随**，
指的是存在 $1$-态射 $g\colon y\to x$ 和 $2$-态射
$\eta\colon\mathbb{1}_x\to gf$，
$\varepsilon\colon fg\to\mathbb{1}_y$，
使得 $f\eta$ 和 $\varepsilon f$ 的复合
$f\to fgf\to f$ 是 $\mathbb{1}_f$，
而 $\eta g$ 和 $g\varepsilon$ 的复合
$g\to gfg\to g$ 是同构。此时称 $g$
为 $f$ 的**右伴随**，$(f,g)$ 为**伴随对**，
$\eta$ 为此伴随对的**幺**，$\varepsilon$ 为**余幺**。
:::

::: remark
事实上复合 $2$-态射 $g\to gfg\to g$ 也会是 $\mathbb{1}_g$。
:::

## 例子

- （伴随函子）

- （幺半 $1$-范畴的对偶对象取分类 $2$-范畴）

```terms
伴随:
  en: adjoint
```
