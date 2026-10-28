---
title: Huber 环
aliases: [Huber 对]
categories: [$p$ 进几何]
navboxes: [P 进几何]
---

<problems>
- “性质”一节需要扩充。
- “定义”一节中 Huber 对的定义似乎缺少条件 $A^+ \subset A^\circ$（$A^+$ 由幂有界元构成）。
</problems>

**Huber 环**是 [[$p$ 进几何]]中的概念，
它是“带有 [[$p$ 进拓扑]]的环”这一直观的具体实现：
[[形式幂级数环]] $\mathbb{Z}_p[[T]]$ 和
[[Tate 代数]] $\mathbb{Q}_p\langle T \rangle$ 都是它的特例。
以此为基础，
可以定义[[进制空间]]的概念，
它是 $p$ 进几何中较为方便的[[空间]]模型。

## 定义

::: definition [Huber 环]
**Huber 环**是[[拓扑环]] $A$，
使得存在 $A$ 的开子环 $A_0$ 和 $A_0$ 的理想 $I$，
满足 $A_0$ 的子空间拓扑与 [[$I$ 进拓扑]]相同。
此时称 $A_0$ 为 $A$ 的**定义环**。
:::

::: definition [Huber 对]
**Huber 对**是二元组 $(A, A^+)$，
其中 $A$ 是 Huber 环，$A^+$ 是它的开子环，
且在 $A$ 中[[整闭]]。
:::

::: definition [态射]
- Huber 环之间的**态射**指连续环同态。
- Huber 对 $(A, A^+)$、$(B, B^+)$ 之间的**态射**指连续环同态
$f \colon A \to B$，满足 $f(A^+) \subset B^+$。

:::

## 例子

- 如环 $A$ 的拓扑为它的某个理想 $I$ 的 [[$I$ 进拓扑]]，
则它是 Huber 环：取 $A_0 = A$ 即可。此时 $(A, A)$ 是 Huber 对。
由此，$\mathbb{Z}_p[[T]]$、[[$A_{\inf}$]] 等都是 Huber 环。

- [[Tate 代数]] $A = \mathbb{Q}_p\langle T_1, \cdots, T_n \rangle$
是 Huber 环：可以取 $A_0 = \mathbb{Z}_p \langle T_1,\cdots, T_n \rangle$，
$I = (p)$。[[仿射胚代数]]在类似的构造下也是 Huber 环。
事实上，由于 $p$ 在 $A$ 中是[[拓扑幂零]][[可逆元]]，
此 Huber 环是 [[Tate 环]]。

## 性质

```terms
Huber 环:
  en: Huber ring
  fr: anneau de Huber
```
