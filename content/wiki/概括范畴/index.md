---
title: 概括范畴
categories: [范畴逻辑]
navboxes: [类型论]
---

**概括范畴**是一种典型的[[依值类型论]]的[[范畴语义]]，
它在[[纤维范畴]]的基础上加入了一些条件来定义类型论中的依值类型。
它的意义在于建立一个范畴来解释类型论里的类型规则，
并用于证明类型论的性质。

## 定义

首先，记 $C^I$ 为 $C$ 的[[箭头范畴]]，于是 $C^I$ 中的对象便是 $C$ 中的箭头。
令 $\mathrm{cod}:C^I \to C$ 为将 $C$ 中的态射 $f\in C(a, b)$ 映射到 $b$ 的函子。

注意：下面的定义是纯粹的范畴论定义，在解释类型论时，需要加上严格的条件。

::: definition
对于范畴 $E, C$，[[函子]] $p:E\to C^I$ 在满足如下条件时，
叫做**概括**：

- $\mathrm{cod}\circ p:E\to C$ 是[[纤维范畴]]，它也叫**概括范畴**。
  为了便于定义下一条性质，记 $f:=\mathrm{cod}\circ p$。

- $p$ 将 $f$-拉回发送到 $C$ 中的[[拉回 (范畴论)|拉回]]，也就是 $C^I$ 中的 $\mathrm{cod}$-拉回。
  换言之，$p$ 保持态射的“纤维范畴-拉回”性质。

其中，$E$ 是解释类型用的范畴，$C$ 是[[语境]]构成的范畴。
:::

$E$ 中的对象被 $p$ 发送到 $C^I$ 中的过程，
就对应了依值类型 $A$ 被发送到它们所对应的[[形式丛]] $\pi_A$ 的过程。
这样的定义认为类型本身是独立存在的对象，只是它们可以被嵌入到语境的范畴里。
直接使用 $\pi_A$ 定义类型也是可行的。

### 相关定义

::: definition
如果概括范畴是[[全忠实函子]]，那么 $p$ 也叫**满概括范畴**。
:::

::: definition
如果概括范畴是[[分裂纤维化]]，那么 $p$ 也叫**分裂概括范畴**。
:::

分裂概括范畴就是能准确解释类型论的[[范畴语义]]。

## 性质

::: lemma
如果 $\mathrm{cod}$ 也是[[纤维范畴]]（也就是说 $C$ 包含所有的拉回），
那么这个对应的类型论将会拥有外延[[相等类型]]，该类型由 $C$ 中的[[等子]]给出。
:::

## 参考资料

```bibliography
Jacobs:
  type: article
  title: Categorical Logic and Type Theory
  author: Bart Jacobs
  year: 2001
  journaltitle: Studia Logica
  publisher: Springer
  volume: 69
  number: 3
  pages: 429–431
  doi: 10.1023/a:1017496327939
  url: https://people.mpi-sws.org/~dreyer/courses/catlogic/jacobs.pdf
```

```terms
概括范畴:
  en: comprehension category
```
