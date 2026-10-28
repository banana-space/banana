---
title: 开映射定理（泛函分析）
categories: [泛函分析]
navboxes: [泛函分析]
---

<disambiguation>
关于其他含义，请参见[[开映射定理]]。
</disambiguation>

在[[泛函分析]]中，
**开映射定理**，也叫 **Banach–Schauder 定理**，
是说 [[Banach 空间]]之间[[满射|满]]的[[连续线性算子]]都是[[开映射]]，
也就是将[[开集]]映射为开集。

## 叙述与证明

先定义[[开映射]]的概念。

::: definition
设 $X,Y$ 是[[拓扑空间]]。若映射 $f\colon X\to Y$ 满足
对任意 $X$ 的开集 $U$，$f(U)$ 都是 $Y$ 的开集，
则称 $f$ 是**开映射**。
:::

下面的引理说明线性算子是开映射，只需原点处的单位球
映射后包含原点为中心的开球。

::: lemma {@lem}
设 $X,Y$ 是 Banach 空间，$T\colon X\to Y$ 是
线性算子，则 $T$ 是开映射当且仅当存在 $\delta>0$
满足
\[
TB(0,1)\supset U(0,\delta)
\]
这里用 $B(x,r),U(y,r)$ 分别指代 $X,Y$ 中的开球。
:::

::: proof
必要性是显然的，下证充分性。因为 $T$ 是线性的，
充分性的假设等价于
\[
TB(x_0,r)\supset U(Tx_0,r\delta),\quad\forall x_0\in X,r>0
\]
任取 $X$ 的开集 $W$ 和 $y_0\in TW$，则
存在 $x_0\in W$ 使得 $y_0=Tx_0$。
因为 $W$ 是开集，存在 $B(x_0,r)\subset W$。
此时
\[
U(Tx_0,r\delta)\subset TB(x_0,r)\subset TW
\]
即 $y_0$ 是 $TW$ 的内点。这表明 $TW$ 是开集。
:::

我们通过这个引理和 [[Baire 纲定理]]证明开映射定理。
其思路是：先证明一个比引理弱些的条件，然后用逼近法
得到引理条件成立。

::: theorem [开映射定理]
设 $X,Y$ 是 Banach 空间，$T\colon X\to Y$ 是
连续线性算子。若 $T$ 是满射，则 $T$ 是开映射。
:::

::: proof
- 首先证明：存在 $\delta>0$，使得
  \[
  \overline{TB(0,1)}\supset U(0,3\delta)
  \]
  因为 $T$ 是满射，故
  \[
  Y=TX=\bigcup_{n=1}^\infty TB(0,n)
  \]
  因为 $Y$ 是完备的，由 [[Baire 纲定理]]，$Y$
  是第二纲集，从而至少有一个 $TB(0,n)$ 不是
  无处稠密的，即 $\overline{TB(0,n)}$ 有内点。
  设 $U(y_0,r)\subset \overline{TB(0,n)}$，
  注意到 $TB(0,n)$ 是对称的凸集，故
  $U(-y_0,r)\subset \overline{TB(0,n)}$，从而
  \[
  U(0,r)\subset \frac12(U(y_0,r)+U(-y_0,r))
  \subset\overline{TB(0,n)}
  \]
  取 $\delta=r/(3n)$。由线性性，得
  $\overline{TB(0,1)}\supset U(0,3\delta)$。

- 再验证 @lem 的条件成立，从而证明 $T$
  是开映射。这也就是说，对任意 $y_0\in U(0,\delta)$，
  证明存在 $x_0\in B(0,1)$ 使得 $Tx_0=y_0$。
  根据第一步的结果，
  $U(0,\delta)\subset \overline{TB\left(0,\dfrac13\right)}$，
  从而存在 $x_1\in B\left(0,\dfrac13\right)$，
  使得
  \[
  \|y_0-Tx_1\|<\frac\delta 3
  \]
  令 $y_1=y_0-Tx_1$，则 $y_1\in U\left(0,\dfrac\delta 3\right)$。
  再次根据第一步的结果，存在
  $x_2\in B\left(0,\dfrac19\right)$，
  使得
  \[
  \|y_1-Tx_2\|\leq\frac\delta 9
  \]
  如此继续，得到两组序列 $\{x_n\},\{y_n\}$，其中
  $y_n=y_{n-1}-Tx_n\in U\left(0,\dfrac\delta{3^n}\right)$，
  且 $x_{n+1}\in B\left(0,\dfrac1{3^{n+1}}\right)$
  使得
  \[
  \|y_n-Tx_{n+1}\|<\frac\delta{3^{n+1}}
  \]
  这样 $\sum_{n=1}^\infty \|x_n\|\leq \dfrac12$。
  令 $x_0=\sum_{n=1}^\infty x_n$，则 $x_0\in B(0,1)$，
  且
  \[
  \|y_n\|=\|y_0-T(x_1+\cdots+x_{n})\|<\frac\delta{3^n}
  \]
  令 $S_n=\sum_{i=1}^n x_i$，则 $S_n\to x_0, TS_n\to y_0, n\to\infty$。
  因为 $T$ 是连续的，所以 $Tx_0=y_0$。这就证明了
  引理的条件成立。
:::

## 推论与应用

利用开映射定理，可以研究算子的逆的问题。

::: theorem [Banach 逆算子定理]
设 $X,Y$ 是 Banach 空间。如果 $T\colon X\to Y$
是连续线性算子，且是[[双射]]，则 $T^{-1}\colon Y\to X$
是连续线性算子。
:::

::: proof
线性性是显然的。由开映射定理和 @lem，有
\[
U(0,1)\subset TB\left(0,\frac1\delta\right)
\]
也就是
\[
T^{-1}U(0,1)\subset B\left(0,\frac1\delta\right)\quad
\Rightarrow \|T^{-1}y\|<\frac1\delta,\forall \|y\|<1
\]
对任意 $c>0,y\in Y$，有
$\left\|\dfrac{y}{(1+c)\|y\|}\right\|<1$，
故对上述元素使用结果得
\[
\|T^{-1}y\|<\dfrac{1+c}{\delta}\|y\|
\]
令 $c\to 0$，并由 $y$ 任意得
$\|T^{-1}\|\leq\dfrac1\delta<\infty$。
:::

用 Banach 逆算子定理可以证明[[闭图像定理]]和[[共鸣定理]]。
可参见对应条目。

把开映射定理与 [[Baire 纲定理]]相结合还可以得到：

::: theorem
设 $X,Y$ 是 Banach 空间，$T\colon X\to Y$ 是
连续线性算子。则要么 $T$ 是满射，从而是开映射；
要么 $TX$ 是第一纲集。
:::

如果 $X$ 上的两个范数 $\|\cdot\|_1,\|\cdot\|_2$
都与 $X$ 构成 Banach 空间，则可以通过考察它们之间的
恒等映射，并借助 Banach 逆算子定理得到

::: theorem [等价范数定理]
如果线性空间 $X$ 上的两个范数 $\|\cdot\|_1,\|\cdot\|_2$
都与 $X$ 构成 Banach 空间，且两个范数中一个比另一个强，
则它们等价。
:::

```terms
开映射定理:
  en: open mapping theorem
```
