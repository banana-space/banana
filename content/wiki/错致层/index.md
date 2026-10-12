---
title: 错致层
aliases: [反常层]
categories: [层论]
notices:
  - name: 问题
    items:
      - “性质”一节中定理“良定义”缺少证明。
      - “性质”一节缺少中介延拓与单层的内容。
      - “推广”一节需要扩充，例如推广到未必可构造的复形（可用可表现范畴直接取 $t$-结构的方法构造）、推广到正则概形、解析空间情形、一般的错致度。
navboxes: [层论]
---

**错致层**，又译**反常层**、**偏屈层**，
是[[代数簇]]上[[平展拓扑|平展]][[可构造层]]的修改，使其在[[六函子]]和
[[Verdier 对偶]]下表现良好，不论代数簇是否[[光滑态射|光滑]]。
具体地说，它是可构造层[[导出范畴]]的错致 [[$t$-结构]]的心；
此 $t$-结构和通常 $t$-结构不同，被 [[Verdier 对偶]]保持。
[[复解析空间]]上亦有同样理论，此时错致 $t$-结构在
[[Riemann–Hilbert 对应]]下对应于 [[$D$-模]]的通常 $t$-结构。

此概念的特殊情形由 [[MacPherson]] 和 [[Goresky]] 于 1977
年以[[相交上同调]]的名称引入，一般情形由 [[Beilinson]]、
[[Bernstein]]、[[Deligne]] 于 1982 年在著作
《[[Faisceaux pervers]]》中引入。

## 定义

考虑以下两种情形：

- $k$ 是[[代数闭域]]，$X$ 是 $k$ 上[[代数簇]]，
  $\ell$ 是[[素数]]，在 $k$ 中可逆，$\Lambda$ 是特征
  $\ell$ 的域或 $\mathbb{Q}_\ell$ 的[[代数扩张]]。
  记 $\mathsf{D}(X)=\mathsf{D}^b_\text{c}(X,\Lambda)$
  为 $X$ 的[[平展景|平展]]（实际上是[[投射平展景|投射平展]]）$\Lambda$
  系数有界可构造复形的[[三角范畴]]或[[稳定 $\infty$-范畴]]。

- $X$ 是[[复解析空间]]，$\Lambda$ 是域。
  记 $\mathsf{D}(X)=\mathsf{D}^b_\text{c}(X,\Lambda)$
  为 $X$ 的解析 $\Lambda$
  系数有界可构造复形的[[三角范畴]]或[[稳定 $\infty$-范畴]]。

它们都有[[六函子]]和 [[Verdier 对偶]]。以 $\mathrm{D}_X$
记 $X$ 上 Verdier 对偶，无歧义时省略下标。

::: definition {@thm:定义}
定义 $\mathsf{D}(X)$ 上**错致 $t$-结构**为
$$
{}^\text{p}\mathsf{D}^{\le0}(X)=
\{A\in\mathsf{D}(X)\mid\forall i\in\mathbb{Z},\,\dim
\operatorname{supp}H^i(A)\le-i\},\\
{}^\text{p}\mathsf{D}^{\ge0}(X)=
\{A\in\mathsf{D}(X)\mid\forall i\in\mathbb{Z},\,\dim
\operatorname{supp}H^i(\mathrm{D}A)\le-i\}.
$$
其心记为 $\mathsf{Perv}(X)$，是 [[Abel 范畴]]，
其中对象称为**错致层**。
:::

从定义可立即看出它自对偶，不过它是 $t$-结构这件事不显然，
我们在下面证明。

## 例子

- 设 $X$ 光滑 $n$ 维，$A$ 是其上[[光滑层]]，则
  $A[n]$ 是 $X$ 上错致层。

## 性质

::: theorem [良定义]
@thm:定义 确实给出 $\mathsf{D}(X)$ 上 $t$-结构。
:::

以下六函子记号都表示导出的。

::: proposition [浸入]
设 $i\colon X\to Y$ 是[[浸入 (代数几何)|浸入]]。则在错致 $t$-结构下，
$i_!$、$i^*$ 为右正合，$i_*$、$i^!$ 为左正合。
:::

::: theorem [Artin 消没]
设 $f\colon X\to Y$ 为[[仿射态射]]。则在错致 $t$-结构下，
$f_!$ 为左正合，$f_*$ 为右正合。
:::

## 推广

```terms
错致层:
  en: perverse sheaf
  fr: faisceau pervers
  de: perverse Garbe
```
