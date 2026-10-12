---
title: Sperner 引理
categories: [组合几何]
notices:
  - name: 问题
    items:
      - “推广”一节需要扩充。
---

Sperner 引理是个[[组合学]]定理，描述[[单形]]的[[单纯剖分]]在特定染色下的性质。
它是[[代数拓扑]]中 [[Brouwer 不动点定理]]的组合类比，
它们亦可互相推出。

## 陈述

以下固定 $n$ 维单形 $\Delta^n$ 及其[[单纯剖分]] $T$。
以 $0,1,\ldots,n$ 记 $\Delta^n$ 的顶点。

::: definition [Sperner 染色]
称 $T$ 的一种顶点染色为 **Sperner 染色**，
意思是其颜色取值在 $\{0,1,\ldots,n\}$，且对于子集
$S\subseteq\{0,1,\ldots,n\}$，单形 $\Delta^n$ 的面 $S$
上的点，其颜色都取值在 $S$ 中。特别地，$\Delta^n$ 的顶点 $i$
的颜色须为 $i$。
:::

::: theorem [Sperner 引理]
$\Delta^n$ 的任一单纯剖分的任一 Sperner 染色中，
都有顶点颜色互异的 $n$-单形。
:::

## 证明

这里呈现两个证明，一个是纯组合的，一个使用[[代数拓扑]]中的[[胞腔同调]]。

### 组合方法

用[[数学归纳法]]。需加强命题如下：

::: theorem
$\Delta^n$ 的任一单纯剖分 $T$ 的任一 Sperner 染色中，
顶点颜色互异的 $n$-单形个数为奇数。
:::

::: proof
对 $n$ 归纳。$n=0$ 时为显然。现设 $n>0$，命题对 $n-1$ 维成立，
来证明 $n$ 维情形。考虑[[图]] $G$，其顶点为 $T$ 中所有
$n$-单形，再加一个代表 $\Delta^n$ 外部的顶点 $*$；
两顶点间有边，当且仅当它们代表的区域沿着一个各顶点颜色为
$0,1,\ldots,n-1$ 的 $(n-1)$-单形相邻。依定义，
对单形 $t\in T$，设其顶点颜色集合为 $S(t)$，则其在图 $G$
中的[[度 (图论)|度]] $d(t)$ 与 $S(t)$ 关系如下：
$$
d(t)=\begin{cases}
  0,&S(t)\nsupseteq\{0,1,\ldots,n-1\};\\
  1,&S(t)=\{0,1,\ldots,n\};\\
  2,&S(t)=\{0,1,\ldots,n-1\};
\end{cases}
$$
而对 $\Delta^n$ 的面 $\{0,1,\ldots,n-1\}$ 用归纳假设，
知 $*$ 的度为奇数。由于图的顶点度数之和总是偶数，所以除
$*$ 之外的奇度点的个数为奇数，也即顶点颜色互异的 $n$-单形个数为奇数。
:::

::: remark
这一证明相当于使用拓扑中的[[模 2 度|模 $2$ 度]]。
如考虑单形的定向，并改用[[有向图]]，则可归纳证明，顶点颜色互异的
$n$-单形中，与 $\Delta^n$ 有相同定向者比相反定向者多一个。
:::

### 代数拓扑方法

还是加强命题归纳。

::: theorem
设 [[CW 复形]] $X$ 满足其每个胞腔的闭包都[[可缩空间|可缩]]。
设 $f\colon X\to X$ 是其自映射，把每个胞腔都映到自身的闭包内。
则 $f$ 在各胞腔链群上诱导的映射都是 $\operatorname{id}$。
:::

::: proof
只需对单个胞腔证明。取一个 $n$ 维胞腔 $e^n$，可设
$X=\overline{e^n}$。对 $n$ 归纳。$n=0$ 时为显然。
现设 $n>0$，命题对 $n-1$ 维成立，来证明 $n$ 维情形。
写出 $f$ 诱导的胞腔链复形映射
\[
\begin{tikzcd}
  0\ar[r]&C_n(X)\ar[r]\ar[d,"f_n"']&C_{n-1}(X)\ar[r]\ar[d,"f_{n-1}"]&\cdots\ar[r]&C_0(X)\ar[r]\ar[d,"f_0"]&0\\
  0\ar[r]&C_n(X)\ar[r]&C_{n-1}(X)\ar[r]&\cdots\ar[r]&C_0(X)\ar[r]&0
\end{tikzcd}
\]
由条件，$X=\overline{e^n}$ 可缩，$n>0$，故 $H_n(X)=0$，
$C_n(X)\hookrightarrow C_{n-1}(X)$。
由归纳假设，$f_0,\ldots,f_{n-1}$ 都是 $\operatorname{id}$。
所以 $f_n$ 也是 $\operatorname{id}$。
:::

回到原命题。取 $X=\Delta^n$ 附带标准胞腔结构，$f$ 取为将 $T$ 中各个顶点打到其颜色，
各个单形分别线性地打到 $\Delta^n$。则由 Sperner 染色的定义，
$f$ 将 $\Delta^n$ 的各个面映到自身。故由以上定理，
$f$ 在各胞腔链群上诱导的映射都是 $\operatorname{id}$，
特别地其在相对同调 $H_n(\Delta^n,\partial\Delta^n)$
上诱导的映射为 $\operatorname{id}$。如果没有顶点颜色互异的
$n$-单形，$f$ 就会把 $\Delta^n$ 映射到 $\partial\Delta^n$，
矛盾。

## 推广

```terms
Sperner 引理:
  en: Sperner's lemma
```
