---
title: 限制乘积
categories: [代数数论]
notices:
  - name: 问题
    items:
      - “限制乘积测度”“限制乘积表示”各节需要扩充。
---

**限制乘积**是构造[[加元环]]和[[理元群]]以及一般[[元群]]的工具。

一族[[拓扑群|局部紧群]]的[[乘积拓扑]]通常不再是局部紧的，
这样我们就无法应用[[调和分析]]，因此我们考虑限制乘积。

## 定义

::: definition
令 $G_v$，$v\in I$ 是一族局部紧群，
$H_v$ 是 $G_v$ 的闭子群，且除有限个 $v$ 之外，$H_v$ 均为[[拓扑|开紧集]]，
我们定义 $G_v$ 相对于 $H_v$ 的**限制乘积**为集合
$$
\prod_v {'} G_v = \left \{ ((g_v)_v)\in \prod_v G_v;\  除有限个\ v \ 外, g_v \in H_v \right \}
$$
:::

显然 $\prod _v ' G_v$ 在分量相乘下是一个群。

::: definition
设 $U_v$ 是 $G_v$ 中开集，且除有限个 $v$ 外 $U_v = H_v$。
容易验证 $\prod  _v ' G_v$ 中形如
$g \cdot \prod _v ' U_v$，
$g\in \prod  _v ' G_v$ 的集合构成一组[[拓扑基]]，
称其生成的拓扑为**限制乘积拓扑**。
:::

::: remark
$\prod _v ' G_v$ 的限制乘积拓扑并非 $\prod _v G_v$ 的限制拓扑。
:::

## 限制乘积测度

## 限制乘积表示

```terms
限制乘积:
  en: restricted direct product
```
