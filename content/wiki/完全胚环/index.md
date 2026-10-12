---
title: 完全胚环
aliases: [完美胚, 整完美胚环, 完美胚环]
categories: [交换代数, $p$ 进几何]
notices:
  - name: 问题
    items:
      - “历史”一节需要扩充。
navboxes: [P 进几何, 交换代数]
---

::: convention
在本文中，

- 所有环都指[[交换环]]。
- $p$ 为一固定[[素数]]。

:::

**完全胚环**（也称**完美胚环**）是[[完全环]]的混特征模拟，由
[[Bhargav Bhatt]]、[[Matthew Morrow]]、[[Peter Scholze]]
于 2016 年引入。

## 历史

## 定义

::: definition
称环 $R$ 为**完全胚环**，指的是存在完全[[棱镜]]
$(A,I)$ 使得 $R=A/I$。具体地说就是存在特征 $p$
[[完全环]] $S$ 及其 [[Witt 环]] 中的元素
$d=\sum_{i=0}^\infty[d_i]p^i$，满足 $S$ 为 $d_0$-完备，
$d_1\in S^\times$，$R=W(S)/d$。
:::

::: remark
特别地，由于 $d_0=0$ 时 $W(S)/d=S$，故而完全环都是完全胚环。
一般的完全胚环不要求 $d_0=0$ 而只要求 $S$ 为 $d_0$-完备，
故可看作完全环沿混特征方向的“形变”。
:::

::: remark
“完全胚环”一词在文献中还有一个含义：完全胚解析环，
指的是[[解析 Huber 对]] $(R,R^+)$，满足 $R^+$ 为完全胚环。
本条目中的概念，在需要与之区分时，常称为**整完全胚环**
（但这和[[整环]]毫无关系）。关于完全胚解析环的性质，
参见[[完全胚空间]]条目。
:::

## 性质

首先，完全胚环与完全棱镜所含信息一样。

::: theorem {@等于棱镜}
完全胚环范畴与完全棱镜范畴等价。两边的函子分别为
$(A,I)\mapsto A/I$ 与
$R\mapsto(A_{\inf}(R),\ker(\theta))$。这里
$A_{\inf}(R)=W(R^\flat)$，$\theta$ 为从 $A_{\inf}(R)$
到 $R$ 的自然映射，参见条目 [[$A_{\inf}$]]。
:::

以下是完全胚环的另一些刻画。

::: theorem
$R$ 为完全胚环等价于：

- $R$ 为 $p$-完备；

- 自然映射 $\theta\colon A_{\inf}(R)\to R$
  是满射，核为[[可逆理想]]；

也等价于：

- 存在 $\varpi\in R$，满足 $\varpi^p\mid p$ 且
  $R$ 为 $\varpi$-完备；

- $R/p$ 的 [[Frobenius 映射]]是满射；

- 自然映射 $\theta\colon A_{\inf}(R)\to R$
  的核为主理想；

事实上，上面这三条是完全胚环的原始定义。
:::

::: lemma {@相容根}
设 $R$ 为完全胚环。则：

1. 存在 $\varpi\in R$ 使得 $\varpi^p\in pR^\times$。

2. 对任一 $\varpi\in R$ 满足 $\varpi^p\mid p$ 且
   $R$ 为 $\varpi$-完备，存在 $u\in R^\times$ 使得
   $u\varpi$ 有相容的 $p^\infty$ 次方根。

:::

以下定理将完全胚环分解为 $\varpi$-无挠部分和
$\varpi^{p^{-\infty}}$-挠部分。

::: theorem
设 $\varpi\in R$ 满足 $\varpi^p\mid p$，
$R$ 为 $\varpi$-完备，$\varpi$ 有相容的 $p^\infty$ 次方根。
以 $\overline{R}$ 记 $R$ 商去其 $\varpi^\infty$-挠部分，
为 $\varpi$-无挠。则 $\overline{R}$、
$R/(\varpi^{p^{-\infty}})$、
$\overline{R}/(\varpi^{p^{-\infty}})$
三者都是完全胚环，且
$$
R=\overline{R}
\times_{\overline{R}/(\varpi^{p^{-\infty}})}
R/(\varpi^{p^{-\infty}}).
$$
:::

::: corollary
完全胚环都[[既约环|既约]]。
:::

## 例子

- 特征 $p$ 环完全胚当且仅当完全。

- 混特征的完全胚环最简单的例子便是
  $$
  \mathbb{Z}_p^\text{cycl}=\left(\bigcup_{n=0}^\infty
  \mathbb{Z}_p[\zeta_{p^n}]\right)_p^\wedge.
  $$
  它对应的棱镜是 $(\mathbb{Z}_p[[q-1]],([p]_q))$ 的完全化，其中
  $\delta(q)=0$，$[p]_q=1+q+\cdots+q^{p-1}$。

```terms
完全胚环:
  en: perfectoid ring
  de: perfektoider Ring
  fr: anneau perfectoïde
  grc: τελειοειδὴς δακτύλιος
  la: anellus perfectoides
```
