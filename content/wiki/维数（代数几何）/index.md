---
title: 维数（代数几何）
categories: [代数几何]
notices:
  - name: 消歧义
    see:
      - page: 维数
  - name: 问题
    items:
      - '“定义”一节中局部维数 $\dim_x X$ 定义为 $\operatorname{codim}_X \{ x \}$，这似乎与通常的定义（$x$ 的开邻域的维数的下确界）不同：例如对不可约曲线的普遍点，前者为 $0$，后者为 $1$。另外 $\{ x \}$ 在 $x$ 不是闭点时不是闭集，余维数似乎应对其闭包而言。'
navboxes: [代数几何]
---

[[代数几何]]中的**维数**是指
[[代数簇]]、[[概形]]等几何对象的维数，
是[[微分几何]]中[[流形]]的维数的类比。

在[[代数–几何对偶]]下，代数几何中的维数对应于[[交换代数]]中的 [[Krull 维数]]。

## 定义

### 对代数簇、概形

::: definition [维数]
设 $X$ 是[[拓扑空间]]。

- $X$ 的**维数**（或 **Krull 维数**）
  是指 $X$ 中[[不可约空间|不可约]][[闭集]]的[[链 (序论)|链]]
  \[
  X_0 \subsetneq X_1
  \subsetneq \cdots \subsetneq X_n
  \]
  的长度 $n$ 的[[上确界]]（可能为 $+\infty$），记作 $\dim X$。
  约定[[空空间]] $\varnothing$ 的维数为 $-\infty$。

- $X$ 的[[不可约空间|不可约]][[闭子空间]] $Z \subseteq X$
  在 $X$ 中的**余维数**是指
  $X$ 中[[不可约空间|不可约]][[闭集]]的[[链 (序论)|链]]
  \[
  Z = Z_0 \subsetneq \cdots \subsetneq Z_n \subseteq X
  \]
  的长度 $n$ 的[[上确界]]（可能为 $+\infty$），记作 $\operatorname{codim}_X Z$。

- $X$ 在一点 $x \in X$ 的**局部维数**是指该点的余维数，记为
  \[
  \dim_x X = \operatorname{codim}_X \{ x \}.
  \]

- 称 $X$ 具有**等维数** $n$，如果 $X$ 的每个[[不可约分支]]的维数均为 $n$。

[[代数簇]]、[[概形]]的维数是指其相应拓扑空间的维数，
这里采用 [[Zariski 拓扑]]。
相应地，可以定义不可约[[闭子簇]]或[[闭子概形]]的余维数，等等。
:::

由定义，[[仿射概形]] $\operatorname{Spec} A$
的维数即为[[交换环]] $A$ 的 [[Krull 维数]]。

## 例子

- [[域]] $k$ 上[[仿射空间 (代数几何)|仿射空间]] $\mathbb{A}_k^n$ 的维数是 $n$；
  [[射影空间 (代数几何)|射影空间]] $\mathbb{P}_k^n$ 的维数是 $n$。

```terms
维数:
  en: dimension
  de: Dimension :f
  fr: dimension :f
  grc: διάστασις :f
  la: dimensio :f
```
