---
title: 同伦拉回
navboxes: [高阶范畴论, 同伦代数]
---

<problems>
- “同伦类型论中”“例子”各节需要扩充。
- “性质”一节中最后一个命题的条件似乎应为 $X'$、$Y$、$Y'$ 是纤维性对象且 $f'$ 是纤维化。
</problems>

**同伦拉回**是[[拉回（范畴论）|拉回]]在[[同伦]]意义下的推广，
即在我们只关心同伦等价意义下不变的信息的拉回时，
我们所得到的概念就是同伦拉回。
[[模型范畴]]中的同伦拉回是一种辅助构造对应 [[$(\infty,1)$-范畴]]中拉回的有效手段。

## 定义

同伦拉回分为[[拓扑空间]]、模型范畴以及[[同伦类型论]]三种版本。

### 拓扑空间中

::: definition
给定[[拓扑空间范畴]] $\mathsf{Top}$ 中的图表
\[
\begin{tikzcd}
  & B\ar[d,"f"]\\
  C \ar[r,"g"] & D,
\end{tikzcd}
\]
该图表的**同伦拉回** $B \times^h_D C$ 定义为
\[
B \times^h_D C \coloneqq B \times_{D,s} D^{[0,1]}\times_{D,t} C
\]
此处 $s$ 和 $t$ 分别表示 $D$ 中道路的起点和终点，
更具体地，可以将 $B \times^h_D C$ 刻画为
\[
B \times^h_D C = \{(b,p,c) \in B \times D^{[0,1]} \times C \mid p(0) = f(b), p(1) = g(c) \}.
\]
记 $p_B \colon B \times^h_D C \to B$ 和 $p_C \colon  B \times^h_D C \to C$ 为投影态射，
记 $H\colon (B \times^h_D C) \times [0,1] \to D, ((b,p,c),t) \mapsto p(t)$
为由前述信息所给出的同伦。
则同伦拉回是指同伦意义下的交换图表
\[
\begin{tikzcd}
  B \times_D^h C \ar[d,"p_C"']\ar[r,"p_B"] & B\ar[d,"f"]\\
  C \ar[r,"g"]\ar[ur,Rightarrow,"H"] & D,
\end{tikzcd}
\]
它满足以下[[万有性质]]：对任意拓扑空间 $A$，
给定态射 $l \colon A \to B\times^h_D C$ 相当于给定一对态射 $(l_B \colon A \to B,l_C \colon A \to C)$
以及同伦 $h \colon f \circ l_B \simeq g \circ l_C$。
:::

### 模型范畴中

::: definition
令 $\mathcal{C}$ 为模型范畴，$I$ 为范畴，
则 $\mathsf{Fun}(I,\mathcal{C})$ 上的**内射模型结构**是指以下模型结构：

- 余纤维化逐点定义为 $\mathcal{C}$ 中的余纤维化；
- 弱等价逐点定义为 $\mathcal{C}$ 中的弱等价；
- 纤维化定义为关于平凡余纤维化具有右提升性质的态射。

:::

在模型范畴中，同伦拉回的定义需要使用到以下事实：

::: proposition
令 $\mathcal{C}$ 为模型范畴，$I$ 为由图表
\[
\begin{tikzcd}
   & (1,0) \ar[d]\\
  (0,1) \ar[r] & (1,1)
\end{tikzcd}
\]
所生成的范畴。
则 $\mathsf{Fun}(I,\mathcal{C})$ 上带有内射模型结构。
此时，有 [[Quillen 伴随]]
\[
\operatorname{const}\dashv \lim_I.
\]
此处 $\operatorname{const} \colon \mathcal{C} \to \mathsf{Fun}(I,\mathcal{C})$ 为常值函子。
因此对于任意函子 $F \colon I \to \mathcal{C}$ 以及任意对象 $X$，都有伴随
\[
\operatorname{Ho}(\mathsf{Fun}(I,\mathcal{C})) (\operatorname{const} X, F) \simeq
\operatorname{Ho}(\mathcal{C})(X,\mathbb{R}\operatorname{lim} F).
\]
:::

::: definition
令 $\mathcal{C}$ 为模型范畴，
称 $\mathcal{C}$ 中的交换图
\[
\begin{tikzcd}
  X \ar[r,"x"]\ar[d,"f"] & X'\ar[d,"f'"]\\
  Y \ar[r,"y"] & Y'
\end{tikzcd}
\]
为**同伦拉回**是指 $X$ 为函子 $X' \to Y' \leftarrow Y$ 的 $\mathbb{R}\operatorname{lim}$。
:::

### 同伦类型论中

## 性质

### 模型范畴中

::: proposition
由于[[组合模型范畴|组合]][[单纯模型范畴]]中的[[同伦极限]]即为对应 $(\infty,1)$-范畴中的极限，
因此同伦拉回也可转为对应 $(\infty,1)$-范畴中的拉回。
:::

以下命题可以辅助构造 $(\infty,1)$-范畴中的拉回。

::: proposition
令 $\mathcal{C}$ 为模型范畴，
考虑 $\mathcal{C}$ 中的拉回图表
\[
\begin{tikzcd}
  X \ar[r,"x"]\ar[d,"f"] & X'\ar[d,"f'"]\\
  Y \ar[r,"y"] & Y',
\end{tikzcd}
\]
若 $X$ 和 $X'$ 为纤维性对象，且 $f$ 为纤维化，则其为同伦拉回图表。
:::

## 例子

## 参考文献

```bibliography
HTT:
  type: book
  title: Higher Topos Theory
  author: Jacob Lurie
  year: 2009
  publisher: Princeton University Press
  url: https://www.math.ias.edu/~lurie/papers/HTT.pdf
CatLR:
  type: book
  title: Higher Categories and Homotopical Algebra
  author: Denis-Charles Cisinski
  year: 2019
  publisher: Cambridge University Press
  url: https://cisinski.app.uni-regensburg.de/CatLR.pdf
```

另可参见：

- [极限与伴随](/books/同伦代数与同调代数/极限与伴随/)
