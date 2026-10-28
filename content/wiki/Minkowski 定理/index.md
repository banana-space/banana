---
title: Minkowski 定理
categories: [晶格论]
---

<problems>
- “应用”一节需要扩充。
</problems>

**Minkowski 定理**是[[数的几何]]中的奠基性定理，
它保证 $\mathbb R^n$ 中一个[[体积]]大于 $2^n$ 的关于[[原点]]对称的[[凸集]]含非零[[整点]]。

Minkowski 定理最早由[[Hermann Minkowski]]在1889年证明。
该定理在[[代数数论]]的应用尤其广泛，如[[数域]]的[[类数]]有限，
[[Fermat 平方和定理]]和[[Lagrange 四平方和定理]]都是其推论。
简单推广到一般[[晶格|格]]上后，该定理还给出格中最短向量的长度上界，
进一步地，Minkowski 还证明了[[Minkowski 第二定理]]，
给出了关于凸集和格点相交情况更精确的刻画。

## 叙述

::: theorem
设 $L$ 是 $\mathbb R^n$ 中的一个完备格，
即一个同构于 $\mathbb Z^n$ 的离散子群，
那么对 $\mathbb R^n$ 中一个关于原点 $\mathbf 0$ 中心对称的凸集 $S$，若体积
\[
\operatorname{vol}(S)>2^nd(L),
\]
则 $S$ 中含有某非零格点 $x\in L\backslash\{\mathbf 0\}$，这里余体积 $d(L)$ 即 $L$ 的基本域的体积。
:::

::: remark
这个界是最优的，考虑最简单的情形 $L=\mathbb Z^n$，
若 $S=(-1,1)^n$ 即一个边长 $2$ 的开正方体，
则它尚且不包含任何 ${\bf 0}$ 以外的整点。
对上述 $S$ 作用一个[[一般线性群]] $\mathrm{GL}(n,\mathbb Z)$ 中的元素后仍只包含 ${\bf 0}$，
但此时 $S$ 的形状可能非常狭长，其[[直径]]并不具有一致的界，这也是定理应用常遇到的实际情形。

此外也不难检查，中心对称性和凸性两个条件不可或缺。
:::

## 证明

标准的证明技巧是将整个空间切成若干两倍基本域的并，
然后将切成的$S$的碎片平移到同一区域上，用体积的界说明碎片有重合，并由此推出$S$具有非平凡格点。

::: proof
由于问题在线性变换 $\mathrm{GL}(n,\mathbb R)$ 下不变，不妨设$L=\mathbb Z^n$，则$d(L)=1$。
用${\bf 1}_S(x)=\begin{cases}1,&x\in S;\\ 0,&x\not\in S, \end{cases}$表示$\mathbb R^n$上$S$
的示性函数，
再定义$f:[-1,1)^n\to\mathbb Z_{\ge 0}\cup\{+\infty\}$为
\[
f(x)=\sum_{y\in 2\mathbb Z^n}{\bf 1}_{S}(x+y).
\]
注意到
\[
\int_{[-1,1)^n}f(x)d\mu=\int_{\mathbb R^n}{\bf 1}_S(x)d\mu=\operatorname{vol}(S)>2^n=\int_{[-1,1)^n}1d\mu,
\]
其中$\mu$表示[[Lebesgue 测度]]。
这里第一个等号因为$\mathbb R^n$中的点每个分量模$2$后都在$[-1,1)^n$中有唯一代表元。
由此可知存在$x\in[-1,1)^n$使得$f(x)>1$，即有$f(x)\ge 2$。
换言之存在$y_1\ne y_2$于$2\mathbb Z^n$中使$x+y_i\in S$。

由于$S$关于${\bf 0}$对称且是凸集，
故$\frac12((-x-y_1)+(x+y_2))=\frac12(y_2-y_1)\in\mathbb Z^n\cap S\backslash\{{\bf 0}\}$。
:::

值得一提的是，这个证明是非构造性的，因此在具体问题中无法直接应用（即是非实效性的）。
不过对于定理的一些强推论，例如寻求格中短向量这类特殊问题，仍有[[LLL 算法]]这样的工具可用。

## 应用
