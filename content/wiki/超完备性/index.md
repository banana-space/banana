---
title: 超完备性
aliases: [超完备化, Postnikov 分离性]
categories: [高阶范畴论]
navboxes: [高阶范畴论]
---

::: convention
在本文中，

- [[范畴]]都指 [[$(\infty,1)$-范畴]]。
- [[意象]]都指 [[$(\infty,1)$-意象]]。

:::

**超完备性**（又称 **Postnikov 完备性**）是意象的一种分离性质。
直观上，超完备意象是指其中的对象完全由各阶 Postnikov 截断所确定的意象，
即“没有来自无穷远处的虚影”。

并非所有意象都是超完备的：
一般的意象中可能存在“$\infty$-连合”但不是同构的态射，
这意味着 Postnikov 塔无法检测到某些非平凡的区别。
超完备性恰好排除了这种现象。

超完备性可以通过[[超覆盖]]来判定：
意象超完备当且仅当其上全体超覆盖均有效。

## 定义

### $\infty$-连合与 $\infty$-截断

::: definition
令 $\mathcal{T}$ 为意象。

- 称态射 $f \colon X \to Y$ 为 **$\infty$-连合态射**，
  是指对于所有 $n \geq -1$，$f$ 均为 $n$-[[连合]]态射。

- 称态射 $f \colon X \to Y$ 为 **$\infty$-截断态射**（又称**超完备态射**），
  是指其[[分解系|右正交]]于全体 $\infty$-连合态射。

- 称对象 $X$ 为 **$\infty$-连合对象**，是指 $X \to \ast$ 为 $\infty$-连合态射。

- 称对象 $X$ 为**超完备对象**（又称 **$\infty$-截断对象**），
  是指 $X \to \ast$ 为 $\infty$-截断态射。

:::

::: remark
对于有限的 $n$，有[[连合–截断分解系]]，
因此 $n$-连合性等价于左正交于全体 $(n-1)$-截断态射。
$\infty$-连合态射是这一条件在 $n \to \infty$ 时的极限：
它要求态射在所有有限阶截断的层面上都是“不可见”的。

在[[生象]]范畴 $\mathsf{Ani}$ 中，$\infty$-连合态射恰好是同构
（因为 $\mathsf{Ani}$ 中的态射由其在所有同伦群上的效果完全确定）。
但在一般的意象中，可能存在非平凡的 $\infty$-连合态射。
:::

### 超完备意象

::: definition
称意象 $\mathcal{T}$ 为**超完备意象**，
是指 $\mathcal{T}$ 中全体 $\infty$-连合态射均为同构。
等价地，$\mathcal{T}$ 超完备当且仅当其中所有对象均为超完备对象。
:::

::: remark
超完备性的直观是：意象中的对象和态射完全由其 Postnikov 塔所确定。
若 $f$ 是 $\infty$-连合的，则 $f$ 在每一阶截断上都诱导同构，
超完备性要求此时 $f$ 本身就是同构。

这类似于完备度量空间中“[[Cauchy 列]]必须收敛”的条件：
Postnikov 塔扮演了 Cauchy 列的角色，超完备性保证了“收敛性”。
:::

## 例子

- 生象范畴 $\mathsf{Ani}$ 是超完备的。
  更一般地，任意预层范畴 $\mathsf{PSh}(\mathcal{C})$ 是超完备的。

- 对于具有有限同伦维数的拓扑空间 $X$（例如有限维 CW 复形），
  层范畴 $\mathsf{Shv}(X)$ 是超完备的。

- 并非所有意象都是超完备的。
  例如，某些具有无穷同伦维数的拓扑空间上的层范畴可以不是超完备的。

## 性质

### $\infty$-连合–截断分解系

::: proposition
令 $\mathcal{T}$ 为意象。
记 $\mathsf{Conn}_\infty$ 为全体 $\infty$-连合态射所构成的类，
$\mathsf{Trun}_\infty$ 为全体 $\infty$-截断态射所构成的类。

- $\mathsf{Conn}_\infty$ 为关于基变换以及取对角态射封闭的[[分解系|强饱和类]]。

- $(\mathsf{Conn}_\infty, \mathsf{Trun}_\infty)$ 构成 $\mathcal{T}$ 上的[[分解系]]。

:::

::: remark
这一分解系可以视为[[连合–截断分解系]]在 $n = \infty$ 时的极限情况。
对于有限的 $n$，分解系将态射分为“高连合部分”和“低截断部分”；
当 $n = \infty$ 时，分解系将态射分为“$\infty$-连合部分”和“超完备部分”。
:::

### 超完备化

::: proposition
令 $\mathcal{T}$ 为意象。
记 $\mathcal{T}^{\mathrm{hyp}} \coloneqq \mathcal{T}_{\leq \infty}$
为全体超完备对象所构成的全子范畴。

- 包含函子 $\mathcal{T}^{\mathrm{hyp}} \hookrightarrow \mathcal{T}$ 具有左正合的左伴随
  \[
  \tau_\infty \colon \mathcal{T} \to \mathcal{T}^{\mathrm{hyp}}.
  \]

- $\mathcal{T}^{\mathrm{hyp}}$ 仍为意象。

称 $\mathcal{T}^{\mathrm{hyp}}$ 为 $\mathcal{T}$ 的**超完备化**。
:::

::: remark
超完备化 $\tau_\infty$ 可以理解为“强制 Postnikov 塔收敛”的过程：
它将意象中的每个对象替换为其 Postnikov 塔的极限，
从而消除所有“$\infty$-连合的虚影”。

超完备化为左正合局部化，因此 $\mathcal{T}^{\mathrm{hyp}}$ 自然继承了意象结构。
意象 $\mathcal{T}$ 超完备当且仅当 $\tau_\infty$ 为范畴等价。
:::

### 超覆盖判据

以下定理将超完备性归结为[[超覆盖]]的有效性，是判定超完备性的主要工具。

::: theorem
令 $\mathcal{T}$ 为意象，以下条件等价：

1. $\mathcal{T}$ 是超完备的。

2. 对于每个 $X \in \mathcal{T}$，
   所有 $X$ 上的[[超覆盖]]均是有效的。

:::

::: remark
此定理提供了验证超完备性的具体途径。
例如，对于拓扑空间 $X$ 上的层范畴 $\mathsf{Shv}(X)$，
可以利用具体的拓扑开覆盖构造超覆盖，
然后通过检验这些超覆盖的有效性来判定 $\mathsf{Shv}(X)$ 是否超完备。
:::

```terms
超完备:
  en: hypercomplete
超完备化:
  en: hypercompletion
```
