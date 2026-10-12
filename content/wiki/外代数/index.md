---
title: 外代数
categories: [线性代数]
notices:
  - name: 问题
    items:
      - “分次外代数”“性质”各节需要扩充。
      - “性质”一节中，交错 $n$ 张量经 $T^n(V) \to S^n(V)$ 的复合似乎应为到 $\Lambda^n(V)$ 的复合，才是乘以 $n!$。
---

[[向量空间]] $V$ 的**外代数**是一个[[结合代数]]，
通常记为 $\Lambda^\bullet (V)$，
它由形如
\[
v_1 \wedge \cdots \wedge v_n \quad (v_i \in V)
\]
的元素张成，其中 $n$ 是任何[[自然数]]，
并且乘积 $v_1 \wedge \cdots \wedge v_n$ 满足[[反交换律]]，
即在乘积中交换两个相邻元素会使乘积变为其相反数。

外代数有时也被称为 **Graßmann 代数**。

## 定义

### 外代数

::: definition [外代数] {@def-exterior-product}
设 $A$ 是[[交换环]]，$V$ 是 $A$-[[模]]。
则 $V$ 的**外代数**定义为[[结合代数]]
\[
\Lambda^\bullet (V) = \frac{\mathrm{T}^\bullet (V)}{(v \otimes v)},
\]
其中 $\mathrm{T}^\bullet (V)$ 是 $V$ 的[[张量代数]]，
分母是由所有形如 $v \otimes v$（$v \in V$）
的元素生成的 $\mathrm{T}^\bullet (V)$ 的双边理想。

这样，我们有
\[
\Lambda^\bullet (V) \simeq
\bigoplus_{n \geq 0} \Lambda^n (V),
\]
其中 $\Lambda^n V$ 是由形如
$v_1 \otimes \cdots \otimes v_n$（$v_i \in V$）的元素张成的子模，
称为 $V$ 的 $n$ 次 **[[外积]]**。
此时 $v_1 \otimes \cdots \otimes v_n$
在 $\Lambda^n V$ 中的像记为
$v_1 \wedge \cdots \wedge v_n$。
:::

### 分次外代数

## 性质

::: proposition [维数]
设 $A = \Bbbk$ 是域，$V$ 是 $m$ 维线性空间，
则 $\Lambda^n (V)$ 的维数为
\[
\dim \Lambda^n (V) = \binom{m}{n}.
\]
$\Lambda^\bullet (V)$ 的[[分次维数]]为
\[
\operatorname{gr} \dim \Lambda^\bullet (V)
= (1 + q)^m.
\]
:::

::: proposition
$\Lambda^\bullet $ 与基变换可交换：设 $B$ 是 $A$-代数，则
$\Lambda_B^\bullet (B \otimes_A M) \simeq
  B\otimes_A\Lambda_A^\bullet(M).
  $
:::

::: proposition
$\Lambda $ 与余极限可交换：设
$ A = \operatorname{colim} A_i $，$ M = \operatorname{colim} M_i $，
则 $ \Lambda (M)
  = \operatorname{colim}\Lambda_{A_i}^\bullet (M_i)$。
:::

::: proposition
对 $A$-模 $W$，有自然的双射
\[
\operatorname{Hom}(\Lambda^n(V),W)
\simeq A_n(V^n;W).
\]
其中 $A_n(V^n;W)$ 表示从 $V^n$ 到 $W$ 的 $n$ 重交错线性映射。
:::

::: proposition
复合 $A^{n}_t(V) \hookrightarrow T^n(V) \to S^n(V)$
为乘以 $n!$，其中 $A^{n}_t(V)$ 是交错 $n$ 张量。特别地，
若 $n!$ 在 $A$ 中可逆，则它是同构。
:::

::: proposition
对 $A$-模 $V,W$，以及[[双线性型]] $\alpha \colon V\times W \to A$，
$\alpha$ 可以延拓到
$\Lambda^\bullet V \times \Lambda^\bullet W$
上，
\[
\begin{aligned}
   \alpha_k \colon \Lambda^k V \times \Lambda^k W
   & \longrightarrow A,\\
   (v_1\wedge\cdots\wedge v_k, w_1\wedge\cdots\wedge w_k)
   & \longmapsto \det [\alpha(v_i,w_j)]_{1\le i,j \le k}.
\end{aligned}
\]
:::

如果 $V,W$ 都是有限秩自由模，且 $\alpha$ 是非退化的，那么
$\alpha_k$ 也是非退化的。这对有限秩自由模 $V$ 给出了同构
$\Lambda^k(V^\vee) \simeq \big(\Lambda^k V\big)^\vee \simeq A_k(V)$。
其中 $A_k(V)$ 是交错 $k$ 线性型。

## 例子

- $n$ 维环面 $\mathbb{T}^n$ 的[[上同调环]]
  $H^\bullet(\mathbb{T}^n, A)$ 即为外代数
  $\Lambda^\bullet(A^{\oplus n})$。

```terms
外代数:
  en: exterior algebra
  de: äußere Algebra
  fr: algèbre extérieure
```
