---
title: Heyting 代数
categories: [命题逻辑]
navboxes: [逻辑学, 代数结构]
---

**Heyting 代数**是一类具有[[蕴涵]]结构的[[格 (序论)|格]]，
构成了[[直觉主义逻辑]]的自然代数语义，
并在[[拓扑学]]（如[[开集格]]）与[[范畴论]]（[[意象]]）中扮演重要角色。

在[[类型论–范畴论–逻辑学类比]]下，
Heyting 代数精确内化了直觉主义命题演算的公理体系：
其上的运算完备地对应了[[命题逻辑]]中的“[[与]]”、“[[或]]”、“蕴涵”
以及常量“[[真]]”、“[[假]]”。
经典的 [[Boole 代数]] 可视为额外满足[[排中律]]的 Heyting 代数。

为了从[[命题逻辑]]进阶至[[一阶逻辑]]以处理量词，
需在 Heyting 代数基础上构建[[一阶超验理论]]。

## 定义

::: definition [Heyting 代数]
**Heyting 代数**是指四元组 $(H,\land,\lor,\Rightarrow)$，
其中
- $(H,\land,\lor)$ 构成格；
- 并且存在运算 $\Rightarrow \colon H^{\operatorname{op}} \times H \to H$，
  满足
  \[
  (x \land a) \leq b \quad \iff \quad x \leq (a \Rightarrow b),
  \]
  即 $a \Rightarrow -$ 为 $- \land a$ 的右伴随。

:::

::: definition
令 $(H, \land, \lor, \Rightarrow)$ 为 Heyting 代数，
则称其为**完备 Heyting 代数**，
是指其作为[[范畴]]余完备（等价地，也自动完备）。
:::

::: remark
不难发现完备 Heyting 代数即为[[位象]]。
:::

## 性质与证明

::: theorem
对任意 $a, b, c \in H$，以下等式成立：

1. $a \Rightarrow a = 1$

2. $a \wedge (a \Rightarrow b) = a \wedge b$

3. $a \Rightarrow (b \wedge c) = (a \Rightarrow b) \wedge (a \Rightarrow c)$

:::

### 与 Boole 代数的关系

::: theorem
Boole 代数是 Heyting 代数，其中伪补运算满足 $a \Rightarrow b = \neg a \vee b$，
且所有元素满足双重否定律 $\neg\neg a = a$。
:::

## 例子

- 设 $X$ 为[[拓扑空间]]，
  其所有开集构成的格 $(\operatorname{Open}(X), \cap, \cup, \varnothing, X)$ 构成 Heyting 代数，
  其中伪补运算定义为：
  \[
  U \Rightarrow V = \operatorname{int}( (X \setminus U) \cup V )
  \]

- 任何有限分配格都是 Heyting 代数，例如[[全序集]] $\{0, a, 1\}$ 满足 $0 < a < 1$，其伪补运算如下：
  \[
  \begin{array}{c|ccc}
  \Rightarrow & 0 & a & 1 \\
  \hline
  0 & 1 & 1 & 1 \\
  a & 0 & 1 & 1 \\
  1 & 0 & a & 1 \\
  \end{array}
  \]

## 参考文献

```bibliography
Heyting1930:
  type: article
  author: Arend Heyting
  year: 1930
  title: Die formalen Regeln der intuitionistischen Logik
  journaltitle: Sitzungsberichte der Preussischen Akademie der Wissenschaften
  pages: 42–56
Birkhoff1967:
  type: book
  author: Garrett Birkhoff
  year: 1967
  title: Lattice Theory
  edition: 3
  publisher: American Mathematical Society
Johnstone1986:
  type: book
  author: Peter Johnstone
  year: 1986
  title: Stone Spaces
  series: Cambridge Studies in Advanced Mathematics
  number: 3
  publisher: Cambridge University Press
Borceux1994:
  type: book
  author: Francis Borceux
  year: 1994
  title: 'Handbook of Categorical Algebra, Vol. 3'
  series: Encyclopedia of Mathematics and its Applications
  number: 52
  publisher: Cambridge University Press
```

```terms
Heyting 代数:
  en: Heyting algebra
  de: Heyting Algebra
  fr: algèbre de Heyting
  grc: Άλγεβρα Heyting
```
