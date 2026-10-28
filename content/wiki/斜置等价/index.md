---
title: 斜置等价
categories: [$p$ 进几何]
navboxes: [P 进几何]
---

<problems>
- “整完美胚环”一节尚未讲述几乎数学情形下的斜置等价。
- “解析空间”“例子”各节需要扩充。
</problems>

::: convention
在本文中，

- 所有环都指[[交换环]]。
- $p$ 为一固定[[素数]]。

:::

**斜置等价**是 [[$p$ 进几何]]中一类现象的统称，
指的是[[完美胚空间]]和[[完美胚环]]的拓扑性质由其纯特征对应物，
即**斜置**，所决定。起初 [[Jean-Marc Fontaine]]
等人注意到了该现象的特殊情形，见 [[Fontaine–Wintenberger 定理]]。
后来 [[Peter Scholze]] 在其博士论文中引入[[完美胚空间]]，
陈述并证明了其一般情形。

## 整完美胚环

本节讲述整完美胚环的斜置等价。

::: theorem [斜置等价] {@整}
设 $R=A/d$ 为[[完美胚环]]，其中 $(A,(d))$ 为完美[[棱镜]]，
$A=W(R^\flat)$，$d=\sum_{n=0}^\infty[d_n]p^n$。
则斜置给出从 $R$ 上完美胚环范畴到 $R^\flat$ 上的
$d_0$-完备完美环范畴的范畴等价。
它保持[[有限同态|有限]]、有限[[平展同态|平展]]，把
$p$-完备[[整同态|整]] $R$-代数对应到 $d_0$-完备整
$R^\flat$-代数。
:::

::: proof
考虑反方向的函子 $S\mapsto W(S)/d$，这里 $d$ 沿自然同态
$W(R^\flat)\to W(S)$ 视为 $W(S)$ 中元素。注意：

- 完美胚环范畴与完美棱镜范畴等价；

- $p$-完备完美 $\delta$-环范畴与特征 $p$
  [[完美环]]范畴等价；

- 对 $R^\flat$ 上完美环 $S$，$W(S)$ 为
  $d$-完备当且仅当 $S$ 为 $d_0$-完备；

即得这是范畴等价。接下来只需注意 $R/p=A/(p,d)=R^\flat/d_0$，
而有限、有限平展、完备整都可以在商环检验。
:::

::: remark
这里的 $d_0$ 就是一些文献中的 $p^\flat$。
:::

下面的命题是个形式上的推广。

::: proposition {@素元}
设 $R$ 为完美胚环，$\varpi\in R$ 满足 $R$ 为
$\varpi$-完备，且 $\varpi^p\mid p$。
取 $\varpi^\flat\in R^\flat$ 使其第 $0$ 个坐标是
$\varpi\bmod p$。则斜置给出从 $R$ 上
$\varpi$-完备完美胚环范畴到 $R^\flat$ 上的
$\varpi^\flat$-完备完美环范畴的范畴等价，
且其也保持有限、有限平展、完备整。此外，$R$ 为
$\varpi$-无挠当且仅当 $R^\flat$ 为 $\varpi^\flat$-无挠。
:::

::: proposition {@赋值}
完美胚环 $V$ 是[[赋值环]]当且仅当 $V^\flat$ 是赋值环，
且此时它们值群一样。所以 @素元 也给出
$R$ 上 $\varpi$-完备完美胚赋值环范畴和 $R^\flat$ 上
$\varpi^\flat$-完备完美胚赋值环范畴的等价。
:::

## 完美胚空间

本节讲述[[完美胚空间]]的斜置等价。

::: theorem [斜置等价]
对完美胚空间 $X$，有范畴等价
$\mathsf{Perfd}_X\cong\mathsf{Perfd}_{X^\flat}$、
$\mathsf{Ét}_X\cong\mathsf{Ét}_{X^\flat}$、
$\mathsf{FÉt}_X\cong\mathsf{FÉt}_{X^\flat}$，
即 $X$ 和 $X^\flat$ 上的完美胚空间范畴、平展完美胚空间范畴、
有限平展完美胚空间范畴各自等价。特别地，$X$ 和 $X^\flat$
的[[平展景]]等价。
:::

## 解析空间

## 例子

```terms
斜置等价:
  en: tilting equivalence
  fr: equivalence basculante
```
