---
title: 投影公式
categories: [层论]
notices:
  - name: 问题
    items:
      - “表示论”“周环”“$K$ 理论”各节需要扩充。
---

**投影公式**是[[层论]]、[[代数拓扑]]、
[[代数几何]]中关于乘积、拉回、推出的一类公式之统称，
通常形状如下：对映射 $f\colon X\to Y$ 以及 $X$ 上对象 $A$，
$Y$ 上对象 $B$，
$$
f_?(A\otimes f^?B)=f_?A\otimes B.
$$
其最初等的版本为 $X$ 和 $Y$ 是集合，$A$ 和 $B$
分别是它俩的子集，此时
$$
f(A\cap f^{-1}(B))=f(A)\cap B.
$$

## 模层

::: proposition
设 $X,Y$ 是[[环化空间]]或[[环化意象]]，$f\colon X\to Y$
是态射，$A$ 是 $\mathcal{O}_X$-[[模层]]，$B$
是 $\mathcal{O}_Y$-模层。则有自然映射
$$
f_*A\otimes B\to f_*(A\otimes f^*B),
$$
在 $B$ [[可对偶对象|可对偶]]时是同构。
:::

::: proof
[[伴随对]] $(f^*,f_*)$ 给出自然映射 $f^*f_*A\to A$。
两边张量积 $f^*B$，利用 $f^*$ 和张量积交换，再把它伴随过去，
即得自然映射
$$
f_*A\otimes B\to f_*(A\otimes f^*B).
$$
当 $B$ 可对偶时，上式两边分别相当于
$\operatorname{\underline{Hom}}(B^\vee,f_*A)$ 与 $f_*\operatorname{\underline{Hom}}(f^*B^\vee,A)$，
由伴随性和 $\operatorname{\underline{Hom}}$ 的定义知其同构。
:::

::: proposition
设 $X,Y$ 是[[概形]]或[[导出概形]]、[[谱概形]]，
$f\colon X\to Y$ 是[[拟紧拟分离态射]]，
$A\in\mathsf{D}(X)$，$B\in\mathsf{D}(Y)$ 分别是 $X,Y$
上拟凝聚复形。则
$$
f_*A\otimes B=f_*(A\otimes f^*B),
$$
其中所有函子都为导出。
:::

::: proof
同样伴随性给出左边到右边的自然映射。要证它是同构，只需局部验证，
故可设 $Y$ 仿射。此时 $B$ 是 $\mathcal{O}_Y$
一些平移的余极限，而由 $f$ 拟紧拟分离，$f_*$ 和余极限交换，
故可设 $B=\mathcal{O}_Y$。此时命题显然。
:::

## 可构造层

本节中设 $f\colon X\to Y$ 是[[概形]]的[[有限型态射]]或[[局部紧 Hausdorff 空间]]的[[连续映射]]，
对应地符号 $\mathsf{D}(X)$
分别表示 $X$ 上平展挠复形或 Abel 群层复形。
这里重要的是有[[六函子]]。以下所有函子都为导出。

::: lemma {@上叹}
对 $A,B\in\mathsf{D}(Y)$，有自然映射
$$
f^*A\otimes f^!B\to f^!(A\otimes B).
$$
:::

::: proof
只需作自然映射 $f^*A\to\operatorname{\underline{Hom}}(f^!B,f^!(A\otimes B))$，
也就是$A\to f_*\operatorname{\underline{Hom}}(f^!B,f^!(A\otimes B))=\operatorname{\underline{Hom}}
(f_!f^!B,A\otimes B)$。这就简单了，把自然映射
$A\to\operatorname{\underline{Hom}}(B,A\otimes B)$ 和 $f_!f^!B\to B$ 合起来即可。
:::

::: proposition {@下叹}
对 $A\in\mathsf{D}(X)$，$B\in\mathsf{D}(Y)$，有
$$
f_!(A\otimes f^*B)=f_!A\otimes B.
$$
:::

::: proof
[[伴随对]] $(f_!,f^!)$ 给出自然映射 $A\to f^!f_!A$。
两边张量积 $f^*B$，用 @上叹，再把 $f^!$ 伴随到左边，
即得自然映射
$$
f_!(A\otimes f^*B)\to f_!A\otimes B.
$$
要证它是同构，由[[紧合基变换]]可设 $Y$ 是单点。此时 $B$
是张量幺元的若干平移的余极限，公式中的函子都和余极限交换，
故可设 $B$ 是张量幺元。此时 $f^*B$ 也是张量幺元，命题显然。
:::

::: proposition
对 $A,B\in\mathsf{D}(Y)$，有
$$
\operatorname{\underline{Hom}}(f^*A,f^!B)=f^!\operatorname{\underline{Hom}}(A,B).
$$
特别地，@上叹 中自然映射当 $A$
[[可对偶对象|可对偶]]时是同构。
:::

::: proof
对 $C\in\mathsf{D}(X)$，用 @下叹 计算
\[
\begin{aligned}
  \operatorname{Hom}(C,f^!\operatorname{\underline{Hom}}(A,B))&=\operatorname{Hom}(f_!C,\operatorname{\underline{Hom}}(A,B))\\
  &=\operatorname{Hom}(f_!C\otimes A,B)\\
  &=\operatorname{Hom}(f_!(C\otimes f^*A),B)\\
  &=\operatorname{Hom}(C\otimes f^*A,f^!B)\\
  &=\operatorname{Hom}(C,\operatorname{\underline{Hom}}(f^*A,f^!B)),
\end{aligned}
\]
由 [[Yoneda 引理]]即得结论。
:::

## 表示论

## 周环

## $K$ 理论

```terms
投影公式:
  en: projection formula
  fr: formule de projection
  la: formula de projectione
```
