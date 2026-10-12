---
title: 商空间
aliases: [商映射, 商拓扑]
categories: [一般拓扑]
notices:
  - name: 消歧义
    about: '[[拓扑空间]]的商空间'
    see:
      - topic: '[[向量空间]]的商空间'
        page: 商向量空间
navboxes: [一般拓扑]
---

在[[拓扑学]]中，[[拓扑空间]]的**商空间**是其[[商集]]，
带有自然的拓扑空间结构。

## 定义

::: definition [商空间]
设 $X$ 为[[拓扑空间]]，$\sim$ 为 $X$ 上[[等价关系]]。
考虑[[商集]] $X / {\sim}$，并记 $p \colon X \to X / {\sim}$ 为投影映射。
在 $X / {\sim}$ 上定义如下拓扑，称为**商拓扑**：

- [[子集]] $U \subset X / {\sim}$ 为[[开集]]，
  当且仅当 $p^{-1} (U)$ 是 $X$ 中开集。

这使得 $X / {\sim}$ 成为拓扑空间，称为 $X$ 的**商空间**。
映射 $p$ 称为**商映射**。
:::

这里，商拓扑也可以描述为使映射 $p$ 连续的最细（即开集最多）的拓扑。

以下一类商空间尤其常用。

::: definition [关于子空间的商]
设 $X$ 是[[拓扑空间]]，$A \subset X$ 是[[拓扑子空间|子空间]]。
定义 $X$ 上等价关系 $\sim_A$ 如下：

- 对 $x, y \in X$，有 $x \sim_A y$ 当且仅当 $x = y$ 或 $x, y \in A$。

则商空间 $X / {\sim_A}$ 通常记为 $X / A$，
称为 $X$ 关于 $A$ 的**商空间**。
:::

直观地看，$X / A$ 就是在 $X$ 中将 $A$ 缩成一个点，而得到的空间。

## 例子

- 对 $n \geq 1$，考虑 $n$ 维[[圆盘]] $D^n$ 及其边界 $\partial D^n \simeq S^{n-1}$。
  则商空间 $D^n / \partial D^n$ 同胚于[[球面]] $S^n$。

- 粘连空间。设 $X, Y$ 是[[拓扑空间]]，
  $U \subset X$ 及 $V \subset Y$ 为子空间，并有[[同胚]] $\varphi \colon U \simeq V$。
  则可以将 $X, Y$ 沿着 $U, V$ 粘起来，
  得到空间 $(X \sqcup Y)/{\sim}$，
  这里 $\sim$ 由以下关系生成：对 $u \in U$，有 $u \sim \varphi (u)$。

## 性质

### 等价刻画

以下是商映射的等价刻画。

::: proposition
设 $X, Y$ 为[[拓扑空间]]，
$p \colon X \to Y$ 为[[连续映射]]。则下列二者等价：

- 存在 $X$ 上等价关系 $\sim$，
  及[[同胚]] $Y \simeq X / {\sim}$，
  使得 $p$ 就是对应的商映射。

- $p$ 是[[满射]]，且对任意子集 $U \subset Y$，
  $U$ 是 $Y$ 中开集当且仅当 $p^{-1} (U)$ 是 $X$ 中开集。

有时也直接将满足上述条件的映射 $p$ 称为**商映射**，
而不提及等价关系。
:::

```terms
商空间:
  en: quotient space
  fr: espace quotient :m
  de: Quotientenraum :m
商拓扑:
  en: quotient topology
  fr: topologie quotient :f
  de: Quotiententopologie :f
商映射:
  en: quotient map
  fr: application quotient :f
  de: Quotientenabbildung :f
```
