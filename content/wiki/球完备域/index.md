---
title: 球完备域
aliases: [球完备]
categories: [代数数论]
notices:
  - name: 问题
    items:
      - “例子”一节第二个例子中，$\mathbb{C}[[T]]$ 是环而不是域，这里似乎应为 $\mathbb{C}((T))$。
---

## 定义

::: definition
称[[非 Archimedes 域]] $K$ **球完备**，
指的是其中任意闭球降链
$$
B_1\supseteq B_2\supseteq B_3\supseteq\cdots
$$
交非空。
:::

## 性质

对非 Archimedes 域 $K$，以 $\mathcal{O}_K$、$\mathfrak{m}_K$、
$k_K$ 分别记 $K$ 的整数环、极大理想、剩余域。

::: proposition
球完备域都完备。
:::

::: proposition
设 $K$ 的[[赋值]]不为离散。则 $K$ 球完备当且仅当
$\operatorname{Ext}^1_{\mathcal{O}_K}
  (\mathfrak{m}_K,\mathcal{O}_K)=0$。此时
$R{\operatorname{Hom}}_{\mathcal{O}_K}
  (\mathfrak{m}_K,\mathcal{O}_K)=\mathcal{O}_K$。
:::

::: theorem
对任一非 Archimedes 域 $K$，存在非 Archimedes 域的扩张
$K\subseteq L$，剩余域和值群都不变，而 $L$ 为球完备。
:::

::: remark
和[[完备化 (交换代数)|完备化]]不同，以上定理没有任何典范性。
:::

## 例子

::: example
[[局部紧]]的非Archimedes域是球完备的。特别地，
$\mathbb{Q}_p$的任一有限扩域是局部紧的，
从而是球完备的。
:::

::: example
任意[[完备 (交换代数)|完备]][[离散赋值域]]是球完备的。特别地，
$\mathbb{C}[[T]]$是离散赋值域，从而是球完备的。
:::

::: example [反例]
$p$ 进复数域$\mathbb{C}_p$不是球完备的。
:::

::: proof
我们固定$\mathbb{C}_p$中的一列数$\{a_n\} $，使得作为子集，$\{a_n\} $
在$\mathbb{C}_p$中稠密。再固定一列实数
$\{\epsilon_n\}$，
满足
$$
1>\epsilon_1>\epsilon_2>\cdots>\frac{1}{2}.
$$
考虑$\mathbb{C}_p$上的一个等价关系$\sim_1$：
$$
a\sim_1 b \iff |b-a|\leq \epsilon_1.
$$
显然该等价关系下等价类为球。由于值群$|\mathbb{C}_p^\times|=
p^\mathbb{Q}$在$\mathbb{R}^\times_+$中稠密，
从而球的直径为$\epsilon_1$。显然该等价关系下不止一个等价类，从而
可以固定一个等价类$B_1$，使得
$a_1\notin B_1$。

在$B_1$上定义一个等价关系$\sim_2$：
$$
a\sim_2 b \iff |b-a|\leq \epsilon_2.
$$
从而可以找到一个直径为$\epsilon_2$的球$B_2\subset B_1$，
使得
$a_2\notin B_2$。

不断重复该过程，我们得到一个球的降链：
$$
B_1\supseteq B_2\supseteq B_3\supseteq\cdots,
$$
其中球$B_n$的直径为$\epsilon_n$，
并且$a_n\notin B_n$。我们断言：
$$
\bigcap_n B_n=\emptyset.
$$
否则若存在$b\in  \bigcap_n B_n$，
则对每个$n$，有$B_n=B_{\epsilon_n}(b)$，从而
$$
B_{1/2}(b)\subseteq  \bigcap_n B_n .
$$
则对任意的$a_n$，$a_n\notin B_{1/2}(b)$，而$B_{1/2}(b)$
又是一个开集，
这矛盾于$\{a_n\} $在$\mathbb{C}_p$中稠密。
:::

```terms
球完备域:
  en: spherically complete field
```
