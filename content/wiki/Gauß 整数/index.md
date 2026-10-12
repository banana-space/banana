---
title: Gauß 整数
aliases: [Gauss 整数]
categories: [数系, 代数数论]
navboxes: [数系]
---

**Gauß 整数**是在[[整数]]环中添加[[虚数单位]]
$\mathrm{i}$ 得到的数。它具有许多与整数类似的性质，
例如可以进行[[带余除法]]。

Gauß 整数环的[[分式域]]是[[二次域]] $\mathbb{Q}(\mathrm{i})$，
且它是 $\mathbb{Q}(\mathrm{i})$ 的[[整数环]]。
一些 Gauß 整数的理论可以推广至一般[[二次域]]理论中。

## 定义

::: definition [Gauß 整数]
**Gauß 整数**环是[[复数]] $\mathbb{C}$ 中，
由整数 $\mathbb{Z}$ 和[[虚数单位]] $\mathrm{i}$ 生成的[[子环]]，
即 $\mathbb{C}$ 的子环
\[
\{ a + b\mathrm{i} \mid a, b \in \mathbb{Z}\},
\]
其中的元素称为**Gauß 整数**。
Gauß 整数环通常记为 $\mathbb{Z}[\mathrm{i}]$。
:::

如果不利用[[复数]]，也可以抽象地定义 Gauß 整数环。

::: definition [Gauß 整数，抽象定义]
**Gauß 整数**环是多项式环 $\mathbb{Z}[x]$ 的[[商环]]
\[
\frac{\mathbb{Z}[x]}{(x^2 + 1)}.
\]
:::

这里的 $x$ 即对应于上面的虚数单位 $\mathrm{i}$。

## 性质

Gauß 整数环是 [[Euclid 整环]]，也就是可以在它上面定义带余除法。

::: proposition
在范数 $N(a + b\mathrm{i}) = a^2 + b^2$ 下，
Gauß 整数环 $\mathbb{Z}[\mathrm{i}]$ 是 [[Euclid 整环]]。
因此，它是[[主理想整环]]，也是[[唯一因子分解环]]。
:::

既然它是[[主理想整环]]，可以谈论它上面的素数，即[[素元]]。
也可以考虑[[整数]]中的素数在其上如何分解。
首先可以注意到

::: proposition [可逆元]
Gauß 整数环中可逆元仅有 $1$、$-1$、$\mathrm{i}$，
$-\mathrm{i}$。
:::

::: proposition [素元]
- 素数 $p$ 在 Gauß 整数环中是[[素元]]，
  当且仅当 $p$ 模 $4$ 余 $3$。

- $p$ 模 $4$ 余 $1$ 时，
  存在（在相差可逆元意义下）唯一一对元素
  $a + b\mathrm{i}$ 与 $a - b\mathrm{i}$，
  使得它们是[[素元]]，且乘积为 $p$。

- $2 = \mathrm{i} (1 - \mathrm{i})^2$，
  且 $1 - \mathrm{i}$ 为素元。

- 上面列举的素元是 $\mathbb{Z}[\mathrm{i}]$ 中全部素元。

:::

```terms
Gauß 整数:
  en: Gaussian integer
  de: Gaußsche Zahl
  fr: entier de Gauss
```
