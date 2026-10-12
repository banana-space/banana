---
title: 张量代数
categories: [线性代数]
notices:
  - name: 问题
    items:
      - “性质”一节需要扩充。
---

[[向量空间]] $V$ 的**张量代数**是 $V$ 与自身的多重[[张量积]]的[[直和]]
\[
\mathrm{T} (V) = \bigoplus_{n \geq 0} V^{\otimes n},
\]
它由形如
\[
v_1 \otimes \cdots \otimes v_n
\]
的元素张成，其中 $n$ 是任何[[自然数]]，
每个 $v_i$ 是 $V$ 的元素。

## 定义

::: definition [张量代数] {@def-tensor-algebra}
设 $A$ 是[[交换环]]，$V$ 是 $A$-[[模]]。
则 $V$ 上的**张量代数**定义为[[分次代数|分次]] $A$-[[结合代数|代数]]
\[
\mathrm{T}^\bullet V =
\bigoplus_{n \geq 0} \mathrm{T}^n V =
\bigoplus_{n \geq 0} V^{\otimes n} ,
\]
其中 $\mathrm{T}^n V = V^{\otimes n}$
是 $V$ 关于 $A$ 的 $n$ 重张量积，
并约定 $V^{\otimes 0} = A$。
这个代数的乘法记为 $\otimes$，定义为
\[
(v_1 \otimes \cdots \otimes v_n) \otimes
(w_1 \otimes \cdots \otimes w_m) =
v_1 \otimes \cdots \otimes v_n \otimes
w_1 \otimes \cdots \otimes w_m ,
\]
其中 $v_i, w_i \in V$，
然后双线性地延拓到整个 $\mathrm{T}^\bullet V$ 上。
:::

::: remark
在 @def-tensor-algebra 中，
张量代数 $\mathrm{T}^\bullet V$ 可以看作 $V$ 生成的**自由代数**，
它是[[遗忘函子]] $A\text{-}\mathsf{Alg} \to A\text{-}\mathsf{Mod}$
的[[伴随函子|左伴随]]。
这是[[自由–遗忘伴随]]的一个例子。
:::

## 性质

::: proposition
设 $E$ 是 $A$-代数，$f\colon V \to E$ 是 $A$-线性映射，
则存在唯一的$A$-代数同态 $g \colon\operatorname{T}^\bullet(V) \to E$
延拓了$f$。如果 $E$ 是 $\mathbb{Z}$-分次的，并且 $f(V) \subset E_1$，
$g$ 也是[[分次环]] 之间的同态。
:::

因此对于 $ u \colon V \to W $，存在唯一的 $A$ 代数同态
$\operatorname{T}u \colon\operatorname{T}^\bullet(V) \to \operatorname{T}^\bullet(W)$
延拓了 $u$，并且是分次同态。如果 $u$ 是满射，那么
$\operatorname{T}u$ 也是满射，
并且 $\operatorname{T}u$ 的[[核]]就是 $u$ 的核生成的双边理想。

::: proposition
$\operatorname{T}^\bullet$ 将自由模映为自由模；投射模映为投射模。
:::

::: proposition
设 $K$ 是[[域]]，$V$ 是 $K$-向量空间，$M,N$ 是 $V$ 的子空间，则
$\operatorname{T}^\bullet(M)$ 是 $T(V)$ 的子代数，并且
\[
\operatorname{T}^\bullet(M \cap N) = \operatorname{T}^\bullet(M) \cap \operatorname{T}^\bullet(N).
\]
:::

::: proposition
$\operatorname{T}^\bullet $ 与基变换可交换：设 $B$ 是 $A$-代数，则
$\operatorname{T}_B^\bullet (B \otimes_A M) \simeq
B\otimes_A\operatorname{T}_A^\bullet(M).
$
:::

::: proposition
$\operatorname{T}^\bullet $ 与余极限可交换：设
$ A = \operatorname{colim} A_i $，$ M = \operatorname{colim} M_i $，
则 $ \operatorname{T}_A^\bullet (M)
= \operatorname{colim}\operatorname{T}_{A_i}^\bullet (M_i)$。
:::

```terms
张量代数:
  en: tensor algebra
  de: Tensoralgebra :f
  fr: algèbre tensorielle
```
