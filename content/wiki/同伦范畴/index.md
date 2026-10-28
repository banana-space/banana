---
title: 同伦范畴
categories: [高阶范畴论, 同伦代数]
navboxes: [同伦代数]
---

<problems>
- “对高阶范畴”一节需要扩充。
</problems>

**同伦范畴**是[[高阶范畴论]]中的一种构造，是[[截断范畴]]的特例。
给定 [[$(\infty, 1)$-范畴]] $\mathcal{C}$，
其同伦范畴是[[范畴|普通范畴]] $\mathsf{Ho} (\mathcal{C})$，
其对象与 $\mathcal{C}$ 中对象相同，态射是 $\mathcal{C}$ 中 $1$-态射的同伦类。

例如，对[[空间 $(\infty, 1)$-范畴]] $\mathsf{Top}$ 而言，
粗略地说，其对象是[[拓扑空间]]，态射之间的同伦就是普通意义下的[[同伦]]，
因此其同伦范畴就是[[拓扑空间同伦范畴]] $\mathsf{hTop}$。

当上述 $(\infty, 1)$-范畴 $\mathcal{C}$ 来自[[模型范畴]]时，
同伦范畴 $\mathsf{Ho} (\mathcal{C})$ 可以由模型范畴的结构来具体描述。
例如，该范畴就是模型范畴 $\mathcal{C}$ 对其中[[弱等价]] $\mathsf{W}$
的[[局部化 (范畴论)|局部化]] $\mathsf{Ho} (\mathcal{C}) \simeq \mathcal{C} [\mathsf{W}^{-1}]$。
并且，其中的态射对应于 $\mathcal{C}$ 中[[双纤维性对象]]间态射的[[同伦 (模型范畴)|同伦]]类，
因此可以通过对 $\mathcal{C}$ 中对象取[[纤维性替换|纤维性]]、[[余纤维性替换]]，
再考虑其间态射的同伦类，来完全确定同伦范畴中的态射。
在高阶范畴中，像这样的具体计算有时难以直接得到，
而模型范畴的上述性质能够帮助我们获知相应高阶范畴的性质。

## 定义

### 对高阶范畴

### 对模型范畴

::: definition [同伦范畴]
设 $(\mathcal{C}, \mathsf{Cof}, \mathsf{Fib}, \mathsf{W})$ 是[[模型范畴]]。
定义[[范畴]] $\mathsf{Ho} (\mathcal{C})$
为 $\mathcal{C}$ 对其中所有[[弱等价]] $\mathsf{W}$
构成的态射类的[[局部化 (范畴论)|局部化]]
\[
\mathsf{Ho} (\mathcal{C}) \simeq \mathcal{C} [\mathsf{W}^{-1}],
\]
称为 $\mathcal{C}$ 的**同伦范畴**。
:::

## 性质

### 双纤维性对象

在[[模型范畴]]中，[[双纤维性对象]]的同伦范畴等价于原范畴的同伦范畴。
并且，同伦范畴中的态射空间可以由双纤维性对象间的态射来描述。

::: theorem
令 $(\mathcal{C}, \mathsf{Cof}, \mathsf{Fib}, \mathsf{W})$ 为模型范畴，
$\mathcal{C}^\circ \subset \mathcal{C}$ 为 $\mathcal{C}$ 中[[双纤维性对象]]构成的[[全子范畴]]。
记 $Q$ 和 $R$ 分别为 $\mathcal{C}$ 中的[[余纤维性替换]]和[[纤维性替换]]函子。则

1. 含入函子 $\mathcal{C}^\circ \to \mathcal{C}$ 诱导范畴等价
   \[
   \mathcal{C}^\circ / {\sim} \simeq
   \mathcal{C}^\circ [\mathsf{W}^{-1}] \simeq \mathsf{Ho}(\mathcal{C}),
   \]
   其中 $\mathcal{C}^\circ / {\sim}$ 表示将 $\mathcal{C}^\circ$ 中每个态射集
   换成相应态射的[[同伦 (模型范畴)|同伦]]类的集合，而得到的范畴。

2. 对 $X, Y \in \mathcal{C}$，有集合间的自然同构
   \[
   \mathsf{Ho}(\mathcal{C})(X, Y)
   \simeq \mathcal{C}(QX,RY)/{\sim},
   \]
   其中 $\sim$ 表示[[同伦 (模型范畴)|同伦]]。
   特别地，若 $X$ 余纤维性且 $Y$ 纤维性，则
   $\mathsf{Ho}(\mathcal{C})(X, Y) \simeq \mathcal{C}(X, Y)/{\sim}$。

:::

参见 [@Hovey, 定理 1.2.10]。

## 参考文献

```bibliography
Hovey:
  type: book
  author: 'Hovey, M.'
  year: 1999
  title: Model categories
  series: Mathematical Surveys and Monographs
  number: 63
  publisher: American Mathematical Society
```

- [同伦代数与同调代数](/books/同伦代数与同调代数/)

```terms
同伦范畴:
  en: homotopy category
```
