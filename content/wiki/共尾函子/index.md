---
title: 共尾函子
categories: [范畴论]
notices:
  - name: 问题
    items:
      - “定义”一节中共尾函子的条件似乎强于通常的定义（对每个对象 $A$，逗号范畴 $A \downarrow F$ 非空且连通），二者似乎并不等价。
      - “性质”一节需要扩充。
navboxes: [范畴论]
---

共尾函子是偏序的[[共尾类|共尾子集]]的推广。
若 \(F : \mathcal D' \to \mathcal D\) 共尾，则这两种形状的
图表之余极限的概念仅凭形状本身即可推断是完全等价的。

## 定义

::: definition
函子 \(F : \mathcal D' \to \mathcal D\) **共尾**，当且仅当其满足

- 对任何 \(\mathcal D\) 的对象 \(A\) 都有箭头 \(A \to F(B)\)，
其中 \(B\) 是 \(\mathcal D'\) 的某对象。

- 对于任何两个如上的箭头 \(A \to F(B), A \to F(C)\)，都存在
对象 \(D\) 与箭头 \(B \to D, C \to D\) 使得如下图表交换：
  \[
  \begin{tikzcd}
    A \ar[r] \ar[d] & F(B) \ar[d]\\
    F(C) \ar[r] & F(D)
  \end{tikzcd}
  \]

:::

::: definition
如果子范畴 \(\mathcal D' \subseteq \mathcal D\) 的含入函子是
共尾函子，那么称其为**共尾子范畴**。
:::

将偏序看作范畴，则共尾子集就是共尾子范畴的特殊情况。

## 性质

```terms
共尾函子:
  en: (co)final functor
```
