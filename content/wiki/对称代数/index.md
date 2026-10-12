---
title: 对称代数
categories: [线性代数]
notices:
  - name: 问题
    items:
      - “分次对称代数”“性质”各节需要扩充。
---

[[向量空间]] $V$ 的**对称代数**是一个[[交换代数 (代数结构)|交换代数]]，
通常记为 $\operatorname{Sym} (V)$ 或 $\mathrm{S} (V)$，
它由形如
\[
v_1 \cdots v_n \quad (v_i \in V)
\]
的元素张成，其中 $n$ 是任何[[自然数]]，
并且乘积 $v_1 \cdots v_n$ 满足[[交换律]]，
即不取决于相乘的顺序。

## 定义

### 对称代数

::: definition [对称代数] {@def-symmetric-product}
设 $A$ 是[[交换环]]，$V$ 是 $A$-[[模]]。
则 $V$ 的**对称代数**定义为[[交换代数 (代数结构)|交换代数]]
\[
\operatorname{Sym}^\bullet (V) = \frac{\mathrm{T}^\bullet (V)}{(v \otimes w - w \otimes v)},
\]
其中 $\mathrm{T}^\bullet (V)$ 是 $V$ 的[[张量代数]]，
分母是由所有形如 $v \otimes w - w \otimes v$（$v, w \in V$）
的元素生成的 $\mathrm{T}^\bullet V$ 的双边理想。

这样，我们有
\[
\operatorname{Sym}^\bullet (V) \simeq \bigoplus_{n \geq 0} \operatorname{Sym}^n (V),
\]
其中 $\operatorname{Sym}^n (V)$ 是由形如
$v_1 \otimes \cdots \otimes v_n$（$v_i \in V$）的元素张成的子模，
称为 $V$ 的 $n$ 次 **[[对称积]]**。
:::

::: remark
在 @def-symmetric-product 中，
对称代数 $\operatorname{Sym}^\bullet (V)$
可以看成 $V$ 生成的**自由交换代数**，
它是[[遗忘函子]]
$A\text{-}\mathsf{CAlg} \to A\text{-}\mathsf{Mod}$
的[[伴随函子|左伴随]]，其中
$A\text{-}\mathsf{CAlg}$ 是 $A$-[[交换代数 (代数结构)|交换代数]]的范畴。
这是[[自由–遗忘伴随]]的一个例子。
:::

### 分次对称代数

## 性质

::: proposition [维数]
设 $A = \Bbbk$ 是域，$V$ 是 $m$ 维线性空间，
则 $\operatorname{Sym}^n (V)$ 的维数为
\[
\dim \operatorname{Sym}^n (V) = \left(
\begin{array}{c}
  n + m - 1 \\
  n
\end{array}
\right).
\]
$\operatorname{Sym}^\bullet(V)$ 的[[分次维数]]为
\[
\operatorname{gr} \dim \operatorname{Sym}^\bullet (V)
= \frac{1}{(1-q)^m}.
\]
:::

::: proposition
对 $A$-模 $W$，有自然的双射
\[
\operatorname{Hom}(\operatorname{Sym}^n(V),W)
\simeq S_n(V^n;W).
\]
其中 $S_n(V^n;W)$ 表示从 $V^n$ 到 $W$ 的 $n$ 重对称线性映射。
:::

::: proposition
复合映射 $\Gamma^n(V) \hookrightarrow \operatorname{T}^n(V)
  \to \operatorname{Sym}^n(V)$ 为乘以 $n!$，
其中 $\Gamma^n(V)$ 是对称 $n$ 张量，
即 $\operatorname{T}^n(V)$ 在对称群 $S_n$ 作用下不动的元素。
特别地，如 $n!$ 在 $A$ 中可逆，则它是同构。
:::

::: proposition
- $\operatorname{Sym}$ 与[[余极限]]交换。特别地，
  $\operatorname{Sym} (V \oplus W) \simeq \operatorname{Sym}(V) \otimes_A \operatorname{Sym}(W)$。

- 设 $B$ 是 $A$-代数，则
  $\operatorname{Sym} (V) \otimes_A B \simeq \operatorname{Sym} (V\otimes_A B)$。
  特别地，对 $A$ 乘法子集 $S$，有
  $S^{-1}\operatorname{Sym}(V) \simeq \operatorname{Sym} (S^{-1}V)$。

:::

::: proposition
设 $\mathcal{E}$ 是[[概形]] $X = \operatorname{Spec}(A)$
上的[[拟凝聚层]]，$\mathcal{E} = \widetilde{M}$，
则它对应的[[群概形]]即为 $\operatorname{Spec}(\operatorname{Sym} (M))$。
这是[[代数–几何对偶]]的一个例子。
:::

## 例子

- 对 $V = A^{\oplus n}$，$\operatorname{Sym}(V) = A[x_1, \dots, x_n]$。
  此时 $\operatorname{Sym}^n(V)$ 即为 $n$ 次齐次多项式构成的模。

```terms
对称代数:
  en: symmetric algebra
  de: symmetrische Algebra
  fr: algèbre symétrique
```
