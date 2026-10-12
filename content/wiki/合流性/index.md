---
title: 合流性
aliases: [Church–Rosser 定理]
categories: [类型论, 重写系统]
---

**合流性**指[[重写系统]]中不同的重写路径终将归一的性质。

[[$\lambda$ 演算]]作为重写系统是满足合流性的，
这一定理叫做 **[[Alonzo Church|Church]]–Rosser** 定理。

## 定义

::: definition [合流性] {@def}
若对于[[重写系统]] $E$ 和任意 $a,b,c∈E$ 有 $b←^*a→^*c$，都存在 $d$ 使得 $b→^*d←^*c$，
那么 $E$ 是**合流**的。
:::

## 性质

在 @def 中，对 $a \to^* b$（即一串单步重写 $a = a_1 \to \dots \to a_n = b$）的长度做
归纳，就可以得到一个等价的描述：

::: lemma
[[重写系统]] $E$ 合流，等价于当对于任何 $a,b,c \in E$ 有 $b \leftarrow a \to^* c$，
都存在 $d$ 使得 $b \to^* d \leftarrow^* c$。
:::

但是需要注意的是，不能再将另一侧 $a \to^* c$ 也改进为 $a \to c$。
考虑有两个[[生成元]]的[[幺半群]]
\[
E = \langle u,v \mid uvv = vuu \rangle.
\]
在 $E$ 上定义重写关系：对任意元素 $a$ 有 $a \to au$，$a \to av$。
此时对于任何 $b \leftarrow a \rightarrow c$，唯一非平凡的情况是
$b = au, c = av$。因此，有如下重写关系：
\[
\begin{tikzcd}[column sep=0em]
  & a \ar[dl] \ar[dr] & \\
  au \ar[d] & & av \ar[d] \\
  auv \ar[d] & & avu \ar[d] \\
  auvv \ar[rr, equal] & & avuu
\end{tikzcd}
\]
但是这个系统没有合流性，例如 $uu \leftarrow^* e \rightarrow^* vv$，
但是不存在 $d$ 使得 $uu \to^* d \leftarrow^* vv$。

另一方面，如果已经知道重写系统有停机性，即任何链 \(a\to a_1 \to  a_2 \to \cdots\)
都必然在有限步停止，那么的确可以做此改进。

```terms
合流性:
  en: confluence
```
