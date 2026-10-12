---
title: 等价（类型论）
categories: [类型论]
navboxes: [类型论]
---

**等价**在类型论中指一些满足特定条件的[[函数 (类型论)|函数]]，
该性质一般记作 $\mathrm{isEquiv} : (A \to B) \to \operatorname{Prop}$，
[[命题宇宙]]保证一个函数的等价证明唯一，具体定义方式很多，下面会列举一些。

这个定义需要满足如下性质：$\operatorname{isEquiv}f$ 在逻辑上等价于（即两者能够互相推导）**拟等价**，
定义如下：

::: definition
函数 $f:A → B$ 在如下情况下是**拟等价**：

存在$g:B \to A$，使得能够给出
$\prod_{x:A}\operatorname{Id}(g(f~x), x)$与$\prod_{y:B} \operatorname{Id}(f(g~y), y)$。
:::

一般来说，拟等价并不是命题。
直觉上来说，若两类型等价，那么应该存在一组互逆的转换函数。

可以看出，在同构（即逻辑等价）意义下，这样的定义是唯一的。

## 定义

存在多种方式给出符合条件的定义，以下是一些例子。

::: definition [可缩纤维等价]
对于 $f:A → B$，$\operatorname{isEquiv}(f)$ 是说 $f$ 的（所有）纤维可缩。

纤维可缩的意思是存在如下类型的实例：

\[
\prod_{b:B} \operatorname{isContr}
\left( \sum_{a:A} \operatorname{Id}(f~a,b) \right)
\]
:::

::: definition [双可逆等价]
对于 $f:A → B$，$\operatorname{isEquiv}(f)$ 是指如下数据：

- 函数 $g₁ : B → A$，且有 $\prod_{x:A} \operatorname{Id}(g₁(f~x), x)$ 的实例，

- 函数 $g₂ : B → A$，且有 $\prod_{y:B} \operatorname{Id}(f(g₂~y), y)$ 的实例。

:::

::: definition [半伴随等价]
对于 $f:A → B$，$\operatorname{isEquiv}(f)$ 是指如下数据：

- 函数 $g : B → A$，且有

- $η : \prod_{x:A} \operatorname{Id}(g(f~x), x)$
  和 $ε : \prod_{y:B} \operatorname{Id}(f(g~y), y)$，

- 同伦 $τ : \prod_{x:A} \operatorname{Id}_{\operatorname{Id}(f(g(f~x)), f~x)}(
  \operatorname{ap}_f(η~x), ε(f~x))$。

:::

在有了等价的定义后，可以借助 [[$\Sigma$ 类型]]来定义类型之间的等价：

::: definition
类型 $A, B$ 之间的**等价**是指如下类型：
\[
\sum_{f:A\to B} (\operatorname{isEquiv}f)
\]
该类型记作 $A\simeq B$。
:::

## 性质

::: example
每一个类型到自身都有一个由[[恒同映射]]给出的等价，即有
\[
\operatorname{isEquiv}(λx.~x)
\]
:::

事实上，任何两个相等的类型$A,B$（即有一个元素 $p : \operatorname{Id}(A,B)$）都可以用[[J 公理]]
证明等价，即有函数 $\operatorname{coe}_\simeq:\operatorname{Id}(A,B) \to A\simeq B$。

而[[泛等公理]]说的就是上述函数本身也是等价。

## 参考文献

```bibliography
hott-book:
  type: book
  title: 'Homotopy type theory: Univalent foundations of mathematics'
  author: {literal: The Univalent Foundations Program}
  year: 2013
  publisher: Institute for Advanced Study
```

```terms
等价:
  en: equivalence
拟等价:
  en: quasi-equivalence
可缩纤维等价:
  en: contractible fiber equivalence
双可逆等价:
  en: bi-invertible equivalence
半伴随等价:
  en: half-adjoint equivalence
```
