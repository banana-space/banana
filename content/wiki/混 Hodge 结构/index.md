---
title: 混 Hodge 结构
categories: [复代数几何]
notices:
  - name: 问题
    items:
      - “例子”“性质”各节需要扩充。
---

**混 Hodge 结构**是[[复数域]]上未必[[光滑概形|光滑]][[紧合态射|紧合]]的[[代数簇]]的[[奇异上同调]]自然带有的结构的抽象。

## 定义

::: lemma {@abel}
设 $\mathcal{A}$ 是 [[Abel 范畴]]，
$(\mathcal{A}_n)_{n\in\mathbb{Z}}$ 是其一族[[满子范畴|满子]]
Abel 范畴，满足对任意 $n>n'$、$H\in\mathcal{A}_n$、
$H'\in\mathcal{A}_{n'}$，都有 $\operatorname{Hom}(H,H')=0$。
考虑[[加性范畴]] $\mathcal{WA}$，定义为 $\mathcal{A}$
的有限（上升）[[滤对象]]范畴的满子范畴，由满足如下条件的滤对象
$W_\bullet H$ 构成：

- 对任意 $n\in\mathbb{Z}$，${\operatorname{gr}}_n^WH\in\mathcal{A}_n$。

则 $\mathcal{WA}$ 是 Abel 范畴，且其中任一单射
$f\colon W_\bullet H\to W_\bullet H'$ 都是严格的，
也就是说 $W_nH=f^{-1}(W_nH')$。
:::

::: definition
设 $A\subseteq\mathbb{C}$ 是复数域的子 [[Noether 环]]。
暂以 $\mathcal{A}$ 记三元组
$(H_A,F^\bullet H,\bar{F}^\bullet H)$ 构成的
[[Abel 范畴]]，其中 $H_A$ 是 $A$-模，
$F^\bullet H$ 是一链 $\mathbb{C}$-线性空间
$$
\cdots\to F^1H\to F^0H\to F^{-1}H\to\cdots\to
H:=H_A\otimes_A\mathbb{C},
$$
$\bar{F}^\bullet H$ 是另一链。则对 $n\in\mathbb{Z}$，
权为 $n$ 的纯 $A$-Hodge 结构在 $\mathcal{A}$
中构成[[满子范畴]]，暂记作 $\mathcal{A}_n$。
由[[纯 Hodge 结构]]的性质，$\mathcal{A}$ 的满子范畴族
$(\mathcal{A}_n)_{n\in\mathbb{Z}}$ 满足 @abel 的条件。
**混 $A$-Hodge 结构**的 Abel 范畴便指 @abel
在这种情况下给出的范畴 $\mathcal{WA}$，通常记作
$\mathsf{MHS}(A)$。**混 Hodge 结构**指混 $\mathbb{Z}$-Hodge 结构，
其范畴记作 $\mathsf{MHS}$。

具体地说，**混 $A$-Hodge 结构**是四元组
$(H_A,W_\bullet H_A,F^\bullet H,\bar{F}^\bullet H)$，
其中 $H_A$ 是[[有限生成模|有限生成]] $A$-模，$W_\bullet H_A$
是其有限上升滤链，$F^\bullet H$ 和 $\bar{F}^\bullet H$
是 $H:=H_A\otimes_A\mathbb{C}$ 的有限下降滤链，满足对任意 $n\in\mathbb{Z}$，
$$
\left(\frac{W_nH_A}{W_{n-1}H_A},
\frac{F^\bullet H\cap W_nH}{F^\bullet H\cap W_{n-1}H},
\frac{\bar{F}^\bullet H\cap W_nH}{\bar{F}^\bullet H\cap W_{n-1}H}\right)
$$
是权为 $n$ 的纯 $A$-Hodge 结构。
:::

## 例子

## 性质

```terms
混 Hodge 结构:
  en: mixed Hodge structure
```
