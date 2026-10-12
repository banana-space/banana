---
title: Hilbert 零点定理
categories: [代数几何]
---

**Hilbert 零点定理**是[[代数几何]]中的一个基本定理，
建立了[[代数闭域]]上的[[代数集]]与[[多项式环]]中的[[理想]]
（等价地说，多项式环的[[商环]]）的对应关系。

Hilbert 零点定理是从古典代数几何走向现代代数几何的重要一步。
它表明了我们可以使用[[交换代数]]的手段研究代数方程的解，
代数方程的解集的性质只是某一类特殊的交换环的性质。
从此代数几何的研究逐渐走向一般的[[交换环]]与[[概形]]的研究。

如果从现代代数几何的观点来看，
Hilbert 零点定理就是在阐明[[仿射概形]]的[[闭子概形]]的性质：
仿射概形 $\operatorname{Spec}(A)$
的闭子概形就是它的某个商环的谱 $\operatorname{Spec}(A/I)$，
而底集相同的闭子概形中，[[既约闭子概形]]相应的理想 $I$ 最大，
此时它是[[根理想]]。

## 定理与证明

::: theorem [Hilbert 零点定理]
设 $k$ 是[[代数闭域]]，以下三组数学对象有对应关系：
\[
\begin{tikzcd}[column sep=-1em]
  \{k[x_1, x_2, \cdots, x_n]\ 中理想\}
  \ar[rr, "\sim"] \ar[dr, shift left, "V"]
  & & \{k[x_1, x_2, \cdots, x_n]\ 的商环\}\ar[dl, "极大谱"] \\
  &\{k^n\ 中代数集\},\ar[ul, shift left, "I"]
\end{tikzcd}
\]
这里

- $V(J)$ 表示 $J$ 中元素的公共零点集。

- $I(V)$ 表示在 $V$ 中任意点均取 $0$ 的多项式之集。

- “[[极大谱]]”表示环所有极大理想构成的集合，
  它可以视为 $k^n$ 的子集
  （由 [[Zariski 引理]]，$k[x_1, \cdots, x_n]$ 的极大谱是 $k^n$）。

这些映射满足：

- 对任意理想 $J$，$I(V(J)) = \sqrt{J}$。

- $V \circ I$ 为恒等映射。

- 去掉映射 $I$ 后此图交换。

:::

::: proof
对于第一个命题，由定义 $I(V(J)) \supset \sqrt{J}$，
只需证明如果 $\forall\,r>0,f^r\notin J$，
那么存在 $\mathbf{x}\in V(J)$ 使得 $f(\mathbf{x})\ne 0$。

设 $A=k[x_1,\cdots,x_n]/J$，
由于 $f$ 在 $A$ 中非幂零，
局部化 $A_f$ 非零。
取 $\mathfrak{m}$ 为 $A_f$ 中的一个极大理想。
由 [[Zariski 引理]]，
$A_f/\mathfrak{m}$ 是 $k$ 的有限扩张，
故一定为 $k$。
取 $t_i$ 为 $x_i\in A_f$ 在 $A_f/\mathfrak{m}=k$ 中的像，
则由于 $f$ 在 $A_f$ 中可逆，
\[
f(t_1,\cdots,t_n)
=\left( f(x_1,\cdots,x_n) \bmod \mathfrak{m} \right)\ne0.
\]
此 $(t_1, \cdots, t_n)$ 即为所求。

对于第二个命题，由定义代数集就是多项式方程组的解集，
也就是这些多项式生成的理想在 $V$ 下的像，
因此只需证明 $V(I(V(J))) = V(J)$。
由第一个命题左端为 $V(\sqrt{J})$，
注意到在 $k$ 中幂零的数为零，结论成立。

由于 $(I \subset (x_1-t_1, \cdots, x_n-t_n))\iff ((t_1, \cdots, t_n) \in V(I))$，
且多项式环的所有极大理想均形如 $(x_1-t_1, \cdots, x_n-t_n)$
可知第三个命题成立。
:::

## 类比与推广

- [[射影零点定理]]
- [[解析零点定理]]

```terms
Hilbert 零点定理:
  en: Hilbert's Nullstellensatz
  de: hilbertsche Nullstellensatz
```
