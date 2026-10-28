---
title: 禁用子图问题
categories: [图论]
navboxes: [图论]
---

<problems>
- 不符合本站的写作风格。
- “例子”一节中 Mantel 定理的证明只给出了边数的上界，缺少说明该上界可以取到的构造。
</problems>

**禁用子图问题**是[[极值图论]]中的一类重要问题。
大致地说，它问当[[图]]中不出现某[[子图]]时其边数最多能取几。

## 定义

::: definition [极值函数]
$\operatorname{ex}(n,\,G):=
  \max\{|E(H)|:\, |V(H)| = n, \, G\nsubseteq H\}$，其中
- $n$是[[自然数]]。
- $G,\,H$是[[图]]。
- $V(\,\,·\,),\,E(\,\,·\,)$分别是顶点集和边集。
- $| \, \,·\, |$是[[集合]]的[[基数]]。

:::

在这个定义里，我们称$G$是**禁用子图**。

## 例子

::: proposition
$\operatorname{ex}(n,\,K_2) = 0$。
:::

::: proof
$K_2$仅有一边。若$K_2$是禁用子图，则图无边。
:::

::: proposition [Mantel]
$\operatorname{ex}(n, K_3) = \lceil\frac{n}{2}\rceil
 \lfloor\frac{n}{2} \rfloor$。
:::

这是禁用$K_3$时Turán定理的特殊情况（详见极值图论基础/禁用子图问题（一））。
简单来讲，该定理说若$n$-顶点图禁止三角形作为其子图，
那它的边数至多是$\lceil\frac{n}{2}\rceil \lfloor\frac{n}{2} \rfloor$。下面给出一个归纳证明。

::: proof
使用归纳法。

当$n<3$，显然任何图都不可能包含$K_3$。
故容易验证情况$\operatorname{ex}(1, K_3) = 0,\,
  \operatorname{ex}(2, K_3) = 1$，这是符合的。

当$n\geq 3$，我们假设$\forall k<n,\,\operatorname{ex}(k,\,K_3) =
  \lceil\frac{k}{2}\rceil \lfloor\frac{k}{2} \rfloor$都真。
现在令$G$是禁用$K_3$的$n$-顶点图。我们进行如下操作：首先，从$G$任取一边$\{u,\,v\}$并
删去$G$中顶点$u,v$和所有包含$u,v$的边得到图$H\subseteq G$。
显然$K_3\nsubseteq H,\, |V(H)| = n-2$。
根据归纳假设，
有$\operatorname{ex}(n-2,\,K_3) = \lceil\frac{n-2}{2}\rceil \lfloor\frac{n-2}{2} \rfloor$。
然后，把边$\{u,\,v\}$连回$H$，尽量多连。
为保证禁用$K_3$，$u$和$v$不能连接同一顶点，所以至多获得$n-2$条边。
外加$\{u,\,v\}$本身，我们总共至多获得$n-1$条边。
经此操作，我们说明了$G$的边数至多是
$\lceil\frac{n-2}{2}\rceil \lfloor\frac{n-2}{2} \rfloor + n-1 = \lceil\frac{n}{2}\rceil \lfloor\frac{n}{2} \rfloor$
，即$\operatorname{ex}(n,\,K_3) = \lceil\frac{n}{2}\rceil \lfloor\frac{n}{2} \rfloor$。

证完了。
:::

## 性质

### 基本性质

- $H,\,G$是图，
  $H\subseteq G \implies \operatorname{ex}(n,\,H)\leq \operatorname{ex}(n,\,G)$（不严谨地说：
  禁用小图限制更大，故边数更少）。

### 与染色的关系

$G$是图，
- $\chi(G) = 2$（$G$是二部图）$\implies \operatorname{ex}(n,\,G)$ 较小，
  不到$O(n^2)$（[[Kővári–Sós–Turán定理]]）；
- $\chi(G) \geq 3 \implies \operatorname{ex}(n,\,G)$较大，至少在$O(n^2)$；
- $\chi(G)$越大，$\operatorname{ex}(n,\,G)$越大。例如，若图$\chi(G) \geq 3 = \chi(K_3)$，
则
$\operatorname{ex}(n, G) \geq \lceil \frac n2 \rceil \lfloor \frac n2 \rfloor = \operatorname{ex}(n, K_3)$。

## 相关讲义

极值图论基础

```terms
禁用子图问题:
  en: forbidden subgraph problem
极值函数:
  en: extremal function
禁用子图:
  en: forbidden subgraph
```
