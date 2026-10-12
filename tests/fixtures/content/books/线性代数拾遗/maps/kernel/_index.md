---
title: 核与单射
---

{@sec:kernel}

我们沿用 @chap:maps 中的记号，借助 @def:linear-map 定义映射的核。

## 核的定义 {@sec:kernel-definition}

::: definition {@def:kernel}
线性映射 $T\colon V\to W$ 的核为 $\ker T=\{v\in V\mid T(v)=0\}$。
:::

### 一个例子 {@sec:kernel-example}

投影 $K^2\to K$，$(x,y)\mapsto x$，其核为 $\{(0,y)\mid y\in K\}$。

## 单射判别 {@sec:injectivity}

::: theorem {@thm:kernel}
线性映射 $T$ 是单射，当且仅当 $\ker T=\{0\}$。
:::

::: proof
若 $T(v)=T(w)$，则 $T(v-w)=0$。因此零核恰好保证 $v=w$。
:::

关于基的存在性，请回顾 @thm:basis。符号约定见 @sec:notation。
