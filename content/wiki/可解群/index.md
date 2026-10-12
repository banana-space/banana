---
title: 可解群
categories: [群论]
navboxes: [群论]
---

**可解群**是[[群]]的一类，指其中存在有限长的[[正规子群]]链，
使得其中每一个[[子商]]都[[交换群|交换]]的群。
换言之，可解群是从 [[Abel 群]]出发，经由有限步[[群扩张]]而得到的群。

可解群的名称来自以下结果：
判定有理系数[[多项式方程]]是否[[根式可解]]等价于判定其对应的[[Galois 群]]是否是可解群。
这一结果是[[Galois]]的著名工作。

## 定义

::: proposition
设$G$是[[群]]，那么以下两个条件等价：

1. 存在正规子群链 $1=G_0\lhd G_1\lhd\cdots \lhd G_{n}=G$，
   并且对所有$1\leq i\leq n$，子商$G_{i}/G_{i-1}$交换。

2. 存在非负整数 $n\geq 0$，使得群$G$的$n$阶[[导群]]$G^{(n)}=1$。

:::

::: proof
1 $\Rightarrow$ 2。如果群$G$有正规子群$H$，且商群$G/H$交换，
那么$G$的导群$G^{\prime}$满足包含关系$G^{\prime}\subset H$。从而如果具有长度为$n$的
正规子群链，那么取$n$阶导群后必定有$G^{(n)}=1$。

2 $\Rightarrow$ 1。我们有正规子群链$1=G^{(n)}\lhd G^{(n-1)}\lhd \cdots \lhd G^{(1)}\lhd G$。
:::

::: definition [可解群]
群$G$称为**可解群**，如果它满足上述两个等价条件。
:::

## 性质

::: proposition [对扩张封闭]
假如有群的[[短正合列]]$1\rightarrow G_1\rightarrow G\rightarrow G_2\rightarrow 1$，
那么群$G$可解当且仅当$G_1$和$G_2$都可解。
:::

## 例子

- [[$p$-群]]和[[幂零群]]都可解。

- 假设有不可约有理系数多项式$f\in \mathbb{Q}[x]$，并记$f$在$\mathbb{Q}$
  上的分裂域为$K$，则[[Galois 扩张]]$K/\mathbb{Q}$的Galois群
  $\textup{Gal}(K/\mathbb{Q})$可解当且仅当方程$f(x)=0$根式可解。

```terms
可解群:
  en: solvable group
  de: auflösbare Gruppe
  fr: groupe résoluble
```
