---
title: 句法范畴
aliases: [语型范畴, 句式范畴]
categories: [范畴逻辑]
---

<problems>
- “例子”一节需要扩充。
</problems>

**句法范畴**是[[范畴逻辑]]中的构造，给[[理论]]赋予[[范畴]]，
提取理论的句法信息。

## 定义

几种不同的理论都有句法范畴的构造。

### 一阶理论

::: definition [弱句法范畴] {@syn0}
$T=(L,\Phi)$ 是[[一阶理论]]。其**弱句法范畴**，
记作 $\operatorname{Syn}_0(T)$，定义如下：

- 对象为[[一阶语言]] $L$ 中的公式。

- 设公式 $\varphi$ 的[[自由变元]]为
  $x_1,\ldots,x_n$，简记为 $x$，公式 $\psi$ 的自由变元为
  $y_1,\ldots,y_m$，简记为 $y$，并适当改变名称，
  使这两组变元无交。则 $\varphi$ 到 $\psi$ 的态射定义为以
  $x_1,\ldots,x_n,y_1,\ldots,y_m$
  为自由变元的公式 $f$，满足
  $$
  T\vdash\forall x(\varphi(x)\rightarrow
  \exists!y(\psi(y)\wedge f(x,y)));
  $$
  其中两个这样的公式 $f,f'$ 如满足
  $$
  T\vdash\forall x\forall y((\varphi(x)\wedge\psi(y))
  \rightarrow(f(x,y)\leftrightarrow f'(x,y))),
  $$
  就视为同一个态射。

- 设 $f\colon\varphi\to\psi$，$g\colon\psi\to\chi$
  是首尾相接的态射。同样设三个公式 $\varphi,\psi,\chi$
  的自由变元组无交，分别为 $x,y,z$。则复合态射 $g\circ f$
  定义为公式
  $$
  \exists y(f(x,y)\wedge g(y,z)),
  $$
  带自由变元 $x,z$。不难验证它满足上一条中要求，
  且映射复合有结合律。

:::

::: remark [与语义的关系] {@模型}
如给定 $T$ 的[[模型]] $M$，则可把 $\operatorname{Syn}_0(T)$
的对象 $\varphi(x_1,\ldots,x_n)$ 对应到集合
$$
\{(x_1,\ldots,x_n)\in M^n\mid\varphi(x_1,\ldots,x_n)\},
$$
态射自然也对应于集合映射。由此可以看出态射和复合为什么这样定义。
于是 $T$ 的模型给出 $\operatorname{Syn}_0(T)$
到 $\mathsf{Set}$ 的函子。下面将会看到，
这种函子只要是[[凝聚范畴]]态射，就可以反过来给出模型。
:::

::: remark [带类型情形]
对[[带类型的一阶理论]]，@syn0 可以照搬，
给出带类型的一阶理论的句法范畴。@模型 自然也一样适用。
:::

::: definition [句法范畴]
$T=(L,\Phi)$ 是（带类型的）一阶理论。其**句法范畴**，
记作 $\operatorname{Syn}(T)$，
指的是其弱句法范畴作为[[凝聚范畴]]（@凝聚）
的[[预意象]]化。
:::

### 类型论

<see>[[概括范畴]]、[[范畴语义]]</see>

## 例子

## 性质

::: proposition {@凝聚}
（带类型的）一阶理论的弱句法范畴是[[凝聚范畴]]，且是 Boole 的。
:::

::: proposition
Boole 凝聚范畴都[[范畴等价|等价]]于带类型的一阶理论的弱句法范畴。
:::

::: proposition
Boole 凝聚范畴 $\mathcal{C}$ 等价于不带类型的一阶理论的弱句法范畴，
当且仅当存在 $X\in\mathcal{C}$，满足对任一 $Y\in\mathcal{C}$，
存在 $n\in\mathbb{N}$ 使得 $Y$ 到 $X^n$ 有单射。
:::

```terms
句法范畴:
  en: syntactic category
  de: syntaktische Kategorie
  fr: catégorie syntactique
  la: categoria syntactica
  grc: συντακτικὴ κατηγορία
```
