---
title: 周–Novikov t 结构
categories: [母题同伦论]
notices:
  - name: 问题
    items:
      - “性质”一节需要扩充，例如说明 $\mathrm{MGL}$ 同调集中的区域。
---

::: convention
在本文中，

- [[范畴]]都指 [[$(\infty,1)$-范畴]]。
- [[概形]]全都[[拟紧概形|拟紧]][[拟分离概形|拟分离]]。
- $k$ 是[[域]]，$e$ 是其[[特征 (代数)|指数特征]]，
  $\mathsf{Sm}_k$ 指[[光滑态射|光滑]] $k$-概形范畴。

:::

**周–Novikov t 结构**是[[域]]上[[母题谱]]范畴的一个
[[t 结构]]，其连合对象是可由紧光滑概形的 Thom
谱在扩张和余极限下生成者。

## 定义

::: definition [纯母题谱] {@pure}
考虑[[母题谱]]范畴 $\mathsf{SH}(k)$ 中满足以下条件的最小[[满子范畴]] $\mathsf{Pure}_0(k)$：

- 对任意[[光滑态射|光滑]][[紧合态射|紧合]]
  $k$-概形 $X$ 以及任意[[代数 K 理论|代数 $\mathrm{K}$ 类]]
  $\eta\in\mathrm{K}(X)$，[[母题 Thom 构造|Thom 谱]]
  $\operatorname{Th}_X(\eta)$ 属于 $\mathsf{Pure}_0(k)$。

- $\mathsf{Pure}_0(k)$ 对[[收缩]]和扩张封闭。

其中对象称为**完美纯母题谱**。如还要求对[[滤余极限]]封闭，
则所得范畴记作 $\mathsf{Pure}(k)$，称为**纯母题谱**。
:::

::: definition [周–Novikov t 结构]
考虑包含 $\mathsf{Pure}_0(k)$、在[[余极限]]下封闭的最小满子范畴
$\mathsf{SH}(k)_{c\ge0}\subset\mathsf{SH}(k)$。以它为连合部分给出的
$\mathsf{SH}(k)$ 上 t 结构就称为**周–Novikov t 结构**，
记作 $(\mathsf{SH}(k)_{c\ge0},\mathsf{SH}(k)_{c\le0})$。
:::

## 性质

```terms
周–Novikov t 结构:
  en: Chow–Novikov t-structure
```
