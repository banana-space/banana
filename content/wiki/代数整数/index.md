---
title: 代数整数
categories: [数系, 代数数论]
navboxes: [代数数论]
notices:
  - name: 问题
    items:
      - “一些不变量”一节需要扩充。
---

**代数整数**是指能作为整系数[[首一多项式]]的根的[[复数]]。
因此，所有代数整数都是[[代数数]]，但并非所有[[代数数]]都是代数整数。

例如，形如 $m + n \sqrt{-1}$（$m, n \in \mathbb{Z}$）的复数都是代数整数，
因为它是首一多项式 $x^2 - 2mx + (m^2 + n^2)$ 的根。
又例如，$\frac{1 + \sqrt{-3}}{2}$ 也是代数整数，
因为它是首一多项式 $x^2 - x + 1$ 的根。

## 定义

### 在复数域上

::: definition
称[[复数]] $\alpha\in \mathbb{C}$ 为**代数整数**，
若其满足以下条件：

- 存在最高次项系数为$1$的整系数多项式
  $P(x)\in\mathbb{Z}[x]$，使得$P(\alpha)=0$。

也就是说，代数整数就是 $\mathbb{C}$ 中 $\mathbb{Z}$ 上的[[整元]]。
:::

所有代数整数构成 $\mathbb{C}$ 的子环，
也就是 $\mathbb{Z}$ 在 $\mathbb{C}$ 中的[[整闭包]]。
等价地说，也是 $\mathbb{Z}$ 在[[代数数]]域 $\overline{\mathbb{Q}}$ 中的整闭包。

### 在数域上

我们也可以考察某个[[数域]]里的代数整数：

::: definition [数域的整数环]
[[数域]] $K$ 的**代数整数**是其中 $\mathbb{Z}$ 上[[整元]]。

$K$ 中所有代数整数构成子环 $\mathcal{O}_K \subset K$，
称为 $K$ 中 **[[代数整数环]]**，
也就是 $\mathbb{Z}$ 在 $K$ 中的[[整闭包]]。
:::

## 例子

- $\frac{1}{\sqrt{2}}$是[[代数数]]，但不是代数整数，因其在$\mathbb{Q}$上首一最小多项式
  为$P(x)=x^2-\frac{1}{2}$不是整系数多项式。

- $n$次单位根$\zeta_n$是代数整数。事实上[[分圆域]]$\mathbb{Q}(\zeta_n)$的整数环正是
  $\mathbb{Z}[\zeta_n]$。

## 性质

### 一般性质

[[整元]]的一般性质表明，
$\alpha \in \mathbb{C}$ 是代数整数这件事与以下性质均等价：

- $\alpha$在$\mathbb{Q}$上代数，且在$\mathbb{Q}$上首一最小多项式是整系数的。

- $\mathbb{Z}[\alpha]$是[[有限生成模|有限生成]]$\mathbb{Z}$-[[模]]。

- 存在[[有限生成模|有限生成]]$\mathbb{Z}$-[[模]]$ M\subseteq \mathbb{C}$
  使得$\alpha M\subseteq M$。

由上不难验证：

- 代数整数在加法、乘法下封闭。所以代数整数全体
  构成复数域的子环。

::: proposition
$\mathbb{C}$ 中所有代数整数构成 [[Bézout 整环]]。
:::

### 一些不变量

::: definition [次数]
:::

::: definition [迹]
:::

::: definition [范]
:::

```terms
代数整数:
  en: algebraic integer
  fr: entier algébrique :m
  la: integer algebraicus :m
  grc: μεταριθμικὸς ἀκέραιος :m
  ja: 代<だい>数<すう>的<てき>整<せい>数<すう>
```
