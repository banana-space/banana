---
title: 余切复形
categories: [代数几何]
navboxes: [代数几何]
---

::: convention
在本文中，

- [[范畴]]均指 [[$(\infty,1)$-范畴]]。
- [[环]]可指 [[$\mathbb{E}_{\infty}$-环]]，
  也可指[[生象环]]，
  将环范畴记为 $\mathsf{CRing}$。
  经典的环称为静止环。

:::

**余切复形**是 [[Kähler 微分]]在[[高阶范畴论]]中的对应物。
由于在高阶范畴论中，
无法显式地刻画出[[导子]]，
因此需要使用[[平凡平方加厚]]来定义余切复形。

## 定义

::: definition [导子]
令 $B$ 为环，$A$ 为 $B$-代数，$M$ 为 $A$-模。
此时 $A$ 关于 $M$ 的平凡平方加厚 $A \oplus M$ 可由 $B \to A \to A \oplus M$ 视同 $B$-代数。
**$A$ 到 $M$ 的 $B$-导子**是指 $(\mathsf{CAlg}_{B})_{/A}$ 中的态射 $\eta \colon A \to A\oplus M$。
将全体 $A$ 到 $M$ 的 $B$-导子所构成[[生象]]记为
\[
\operatorname{Der}_{B}(A,M) \coloneqq \operatorname{Hom}_{(\mathsf{CAlg}_{B})_{/A}}(A,A\oplus M).
\]
:::

::: definition [（相对）余切复形]
令 $A,B$ 为环，$B \to A$ 为环同态，
$\mathbb{L}_{A/B}$ 为 $A$-模。
称 $A$ 到 $\mathbb{L}_{A/B}$ 的 $B$-导子 $\eta \colon A \to A\oplus \mathbb{L}_{A/B}$
使得 $\mathbb{L}_{A/B}$ 为 $A$ 在 $B$ 上的**相对余切复形**，
是指对于任意 $A$-模 $M$，典范态射
\[
\operatorname{Hom}_{A}(\mathbb{L}_{A/B},M) \to \operatorname{Der}_B(A,M), f \mapsto (A \oplus f) \circ \eta
\]
均为生象间的同构。
当 $B$ 为 $\mathsf{CRing}$ 中的始对象时，
记 $\mathbb{L}_A \coloneqq \mathbb{L}_{A/B}$，
并将其称为 $A$ 的 **（绝对）余切复形**。
:::

## 性质

::: proposition
对于每个环同态 $f \colon B \to A$，相对余切复形 $\mathbb{L}_{A/B}$ 总是存在，
并且有 $A$-模的正合列
\[
\mathbb{L}_B \otimes_B A \to \mathbb{L}_A \to \mathbb{L}_{A/B}.
\]
:::

::: proof [证明概要]
- 首先构造 $A$ 的绝对余切复形，
  根据[[伴随函子定理]]，
  平凡平方加厚函子 $A \oplus - \colon \mathsf{Mod}(A) \to \mathsf{CRing}_{/A}$ 具有左伴随，
  此时将 $\operatorname{id}_A$ 的像记为 $\mathbb{L}_A$，
  根据伴随性验证 $\mathbb{L}_A$ 的万有性质。
- 对于 $f \colon B \to A$，
  有 $\mathbb{L}_B \otimes_B A$ 余表出函子
  $M \mapsto \operatorname{Hom}_{\mathsf{CRing}_{/A}}(B, A \oplus M)$。
- 将 $\mathbb{L}_{A/B}$ 定义为 $\operatorname{cofib}(\mathbb{L}_B \otimes_B A \to \mathbb{L}_{A})$，
  从而对于任意 $M$，得到图表
  \[
  \begin{tikzcd}
    \operatorname{Hom}_{A}(\mathbb{L}_{A/B},M) \ar[r] \ar[d,dashed, "\simeq"] & \operatorname{Hom}_A(\mathbb{L}_A,M)  \ar[r]\ar[d,"\simeq"] & \operatorname{Hom}_A(\mathbb{L}_B \otimes_B A, M)\ar[d,"\simeq"]\\
    \operatorname{Hom}_{(\mathsf{CAlg}_{B})_{/A}}(A,A\oplus M) \ar[r] & \operatorname{Hom}_{\mathsf{CRing}_{/A}}(A,A\oplus M) \ar[r] & \operatorname{Hom}_{\mathsf{CRing}_{/A}}(B,A\oplus M),
  \end{tikzcd}
  \]
  由定义知上行为正合列，
  一切约化为说明下行也为正合列，
  而这一切可根据 $(\mathsf{CAlg}_B)_{/A} = (\mathsf{CRing}_{/A})_{B/}$
  配合切片范畴的 Hom 生象计算得到。

:::

::: proposition
- 对于 $\mathsf{CRing}$ 中的推出图表
  \[
  \begin{tikzcd}
    B \ar[d] \ar[dr,phantom,pos = 0.8,"\ulcorner"]\ar[r] & B'\ar[d] \\
    A \ar[r] & A'
  \end{tikzcd}
  \]
  有 $A'$-模的自然同构 $\mathbb{L}_{A'/B'} \simeq \mathbb{L}_{A/B} \otimes_{A} A'$。
- 对于 $\mathsf{CRing}$ 中的序列 $C \xrightarrow{g} B \xrightarrow{f} A$，
  有 $A$-模的正合列
  \[
  \mathbb{L}_{B/C} \otimes_{B} A \to \mathbb{L}_{A/C} \to \mathbb{L}_{A/B}.
  \]

:::

::: proposition
令 $f \colon B \to A$ 为环同态，
则 $f$ 为同构当且仅当其在 $\pi_0$ 上为同构且 $\mathbb{L}_{A/B}= 0$。
:::

## 例子

- 对于静止环 $B$ 以及静止 $B$-代数 $A$，有 $\Omega_{A/B} \simeq \pi_0\mathbb{L}_{A/B}$。
