---
title: 交叉模
categories: [群论, 高阶代数]
---

**交叉模**是 [[$2$-群]]的一种表现形式。

## 定义

::: definition
**交叉模**指如下数据：

- [[群]]同态 $d\colon H\to G$；

- 群 $G$ 在群 $H$ 上的作用 ${}^{(-)}(-)\colon
  G\times H\to H$，使得：

  - $d$ 关于 $G$ 的共轭作用是 $G$-等变同态，
    即对 $x\in G$，$a\in H$，$d({}^xa)=xd(a)x^{-1}$；

  - 它沿 $d$ 限制在 $H$ 上之后是 $H$ 的[[共轭作用]]，
    即对 $a,b\in H$，${}^{d(b)}a=bab^{-1}$；

交叉模之间的同态是保持这些结构的映射。
说一个交叉模同态是**拟同构**，意思是它诱导
$\ker(d)$ 和 $\operatorname{coker}(d)$ 的同构。
:::

## 性质

给定交叉模 $d\colon H\to G$，可作幺半范畴 $[G/H]$ 如下：

- 取对象集为 $G$。
- 对 $x,y\in G$，定义 $\operatorname{Hom}(x,y)=
  \{a\in H\mid d(a)x=y\}$，态射复合为 $H$ 的乘法。
- 幺半结构在对象上为 $G$ 中乘法，在态射上为
  $$
  (a\colon x\to y)\otimes z=a\colon xz\to yz,
  $$
  $$
  z\otimes(a\colon x\to y)={}^za\colon zx\to zy.
  $$
  这构成 [[$2$-群]]。

::: theorem
上述构造给出交叉模范畴到 $2$-群范畴的函子，
它是交叉模范畴关于拟同构的[[局部化 (范畴论)|局部化]]。
换言之，$2$-群范畴自然等价于交叉模范畴关于拟同构的局部化。
:::

## 例子

- 设 $G$ 是[[约化群]]，$G^\mathrm{sc}$ 为其单连通部分，
  即导群 $D(G)$ 的万有覆叠。则 $G^\mathrm{sc}\to G$
  带交叉模结构，因为 $G$ 可沿映射 $G\to G^\mathrm{ad}
  =(G^\mathrm{sc})^\mathrm{ad}=\operatorname{Inn}(G^\mathrm{sc})$
  作用在 $G^\mathrm{sc}$ 上。

```terms
交叉模:
  en: crossed module
```
