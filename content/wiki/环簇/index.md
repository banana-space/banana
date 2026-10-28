---
title: 环簇
categories: [代数几何]
navboxes: [代数几何]
---

<problems>
- “线丛”“周环”各节需要扩充。
- “定义”一节中对偶锥 $C^\vee$ 的定义里，条件 $\langle x,m \rangle \in \mathbb{N}$ 似乎应为 $\langle x,m \rangle \geq 0$（$C$ 中的 $m$ 不必是格点）。
</problems>

**环簇**是从[[组合几何]]对象出发构造的[[代数簇]]。
大致来说，给定[[扇]] $F$，对其中的每个锥 $C$，
都可以赋予[[仿射簇]] $k[C]$，环簇则是这些仿射簇的粘合。
在环簇中，
只包含原点的锥对应的代数簇是[[代数环面]]，
它是环簇中的稠密开集，且环簇上有典范的代数环面的作用。
这也就是“环簇”一词的来源。

扇上的许多性质和构造都对应于环簇上的性质与构造。
例如，扇完备当且仅当它对应的环簇[[紧合态射|紧合]]；
扇上的分段线性函数对应于环簇上的[[代数线丛|线丛]]。
由此，环簇上的许多构造，如[[周环]]、[[陈类]]等都有组合的表述；
许多组合几何问题都可以使用代数几何的方法来证明，
例如 [[Pick 定理]]、[[等周不等式]]等。

## 定义

设 $k$ 是[[域]]，$V$ 是有限维 $\mathbb{R}$-[[向量空间]]，
$M$ 是 $V$ 中[[晶格]]，$M^\vee \subset V^\vee$ 为对偶晶格，
$F$ 为 $V$ 中的有理[[扇]]。

::: definition [锥对应的环簇]
对 $F$ 中的[[锥]] $C$，记其对偶锥为
\[
C^\vee = \{ x \in M^\vee \mid \forall m \in C \langle x,m \rangle \in \mathbb{N} \}
\]
可以看出 $C^\vee$ 是[[幺半群]]。
记 $k[C^\vee]$ 为它生成的 $k$-代数。
定义代数簇 $X_C$ 为[[素谱|谱]] $\operatorname{Spec}(k[C^\vee])$，
称为 $C$ 对应的环簇。
:::

锥 $\{0\}$ 对应的子簇 $\operatorname{Spec}(k[M^\vee])$ 即是代数环面。

扇对应的环簇则是锥对应的环簇的粘合。
注意到对锥 $C_1 \subset C_2$，有自然环同态 $k[C_2^\vee]\to k[C_1^\vee]$，
它诱导了稠密[[开浸入]] $j_{C_1, C_2}\colon X_{C_1} \to X_{C_2}$。

::: definition [环簇]
$F$ 对应的**环簇** $X_F$ 是
\[
\coprod_{C \in F} X_C / \sim
\]
其中等价关系 $\sim$ 定义为：
$x_1 \in X_{C_1}$ 与 $x_2 \in X_{C_2}$ 等价当且仅当存在 $C \in F$
与 $x \in X_C$ 使得 $C \subset C_i$，$j_{C, C_i}(x) = x_i$
对 $i=1, 2$ 成立。
:::

由此，每个 $X_C \subset X_F$ 都是稠密开子簇。

## 例子

- 在晶格 $\mathbb{Z}^n \subset \mathbb{R}^n$ 中，由 $e_1, \dots, e_n$
生成的扇对应的环簇就是[[仿射空间]]。一般地，
如扇仅有一个极大锥且此[[锥]]幺模，则对应的环簇是仿射空间 $\mathbb{A}^n$。

- 在晶格 $\mathbb{Z}^n \subset \mathbb{R}^n$ 中，
由 $e_1, \dots, e_n, -(e_1 + \cdots + e_n)$
生成的扇对应的环簇为射影空间 $\mathbb{P}^n$。

- 在晶格 $\mathbb{Z}^n \subset \mathbb{R}^n$ 中，
由 $e_1, \dots, e_n, e_1 + \cdots + e_n$
生成的扇对应的环簇为仿射空间 $\mathbb{A}^n$ 爆破原点。

## 性质

### 基本性质

- 扇 $F$ 对应的环簇[[光滑簇|光滑]]当且仅当 $F$ 幺模。

- 扇 $F$ 对应的环簇[[紧合簇|紧合]]当且仅当 $F$ 完备。

### 线丛

### 周环

```terms
环簇:
  en: toric variety
  de: torische Varietät :f
  fr: variété torique :f
```
