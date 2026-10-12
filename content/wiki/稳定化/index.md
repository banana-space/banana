---
title: 稳定化
categories: [高阶范畴论]
notices:
  - name: 问题
    items:
      - “性质”一节中，函子 $\mathsf{Sp}(-) \colon \mathsf{Cat}_{\operatorname{lex}} \to \mathsf{Cat}_{\operatorname{st}}$ 似乎应是含入函子 $\iota$ 的右伴随（$\iota$ 是它的全忠实左伴随），而不是具有全忠实的右伴随 $\iota$。
navboxes: [高阶范畴论]
---

::: convention
在本文中，

- [[范畴]]都指 [[$(\infty,1)$-范畴]]。
- $\widehat{\mathsf{Cat}}$ 为全体[[大范畴]]所构成的（非常大）范畴。

:::

**稳定化**是一种通过对于[[环路函子]]进行[[局部化 (范畴论)|局部化]]
从而将（带有有限[[(∞,1)-极限|极限]]）范畴变为[[稳定 (∞,1)-范畴|稳定范畴]]的方式。

大概思路是仿照以下结果：令 $A$ 为交换环，$f \in A$ 为元素，
则[[局部化]] $A_f$ 可计算为余极限
\[
A_f = \operatorname{colim} \left( A \xrightarrow{\cdot f} A \xrightarrow{\cdot f} \cdots \right).
\]

## 定义

### 通过极限

::: definition {@定义-1}
令 $\mathcal{C}$ 为带有有限极限的范畴，
则 $\mathcal{C}$ 的**稳定化** $\mathsf{Sp}(\mathcal{C})$ 定义为 $\widehat{\mathsf{Cat}}$ 中极限
\[
\mathsf{Sp}(\mathcal{C}) \coloneqq \lim \left( \cdots \xrightarrow{\Omega} \mathcal{C}_* \xrightarrow{\Omega} \mathcal{C}_* \right).
\]
$\mathsf{Sp}(\mathcal{C})$ 中的对象称为 $\mathcal{C}$ 中的**谱对象**。
当 $\mathcal{C} = \mathsf{Ani}$ 为[[生象|生象范畴]]时，
将 $\mathsf{Sp}(\mathcal{C})$ 记为 $\mathsf{Sp}$，并称为[[拓扑谱|谱]]。
对于 $n \in \mathbb{N}$ 将 $\mathsf{Sp}(\mathcal{C})$ 到上述极限中倒数第 $n+1$ 项的投影函子
记为 $\Omega^{\infty-n} \colon \mathsf{Sp}(\mathcal{C}) \to \mathcal{C}_*$。
:::

### 通过切除函子

此外，也可以使用约化切除函子的方式给出稳定化。

::: definition
令 $F \colon \mathcal{C} \to \mathcal{D}$ 为函子，

- 假设 $\mathcal{C}$ 中具有任意推出。
  称 $F$ 为**切除**函子（或 $1$-切除函子），
  是指 $F$ 将 $\mathcal{C}$ 中的推出图表映为 $\mathcal{D}$ 中的拉回图表。
  记 $\mathsf{Exc}(\mathcal{C},\mathcal{D}) \subseteq \mathsf{Fun}(\mathcal{C},\mathcal{D})$
  为全体切除函子所张成的全子范畴。
- 假设 $\mathcal{C}$ 和 $\mathcal{D}$ 均有终对象，
  称 $F$ 为**约化**函子是指其将 $\mathcal{C}$ 的终对象映为 $\mathcal{D}$
  的终对象。
  记 $\mathsf{Fun}_{\ast}(\mathcal{C},\mathcal{D}) \subseteq \mathsf{Fun}(\mathcal{C},\mathcal{D})$
  为全体约化函子所张成的全子范畴。

记
$\mathsf{Exc}_{\ast}(\mathcal{C},\mathcal{D}) = \mathsf{Exc}(\mathcal{C},\mathcal{D}) \cap \mathsf{Fun}_{\ast}(\mathcal{C},\mathcal{D})$
为二者之交。
:::

考虑范畴 $\mathsf{Ani}_{\ast}^{\operatorname{fin}} \subseteq \mathsf{Ani}_{\ast}$，
它是 $\mathsf{Ani}_{\ast}$ 的包含 $S^0 = \ast \sqcup \ast$ 且关于有限余极限封闭的最小全子范畴。

::: definition {@定义-2}
令 $\mathcal{C}$ 为带有限极限的范畴。
$\mathcal{C}$ 的**稳定化**是指范畴
\[
\mathsf{Sp}(\mathcal{C}) \coloneqq
\mathsf{Exc}_{\ast}(\mathsf{Ani}_{\ast}^{\operatorname{fin}},\mathcal{C}).
\]
此时关于 $S^0$ 处求值给出函子
$\Omega^{\infty} = \operatorname{ev}_{S^0} \colon \mathsf{Sp}(\mathcal{C}) \to \mathcal{C}$。
:::

## 性质

::: proposition
令 $\mathcal{C}$ 为带有限极限的范畴，
@定义-1 与 @定义-2 所给出的 $\mathsf{Sp}(\mathcal{C})$ 是范畴等价的。
:::

::: proposition
令 $\mathcal{I}$ 和 $\mathcal{C}$ 为范畴，且 $\mathcal{C}$ 带有有限极限，则

- 若 $\mathcal{C}$ 有 $\mathcal{I}$-型极限，
  则 $\mathsf{Sp}(\mathcal{C})$ 也带有 $\mathcal{I}$-型极限，
  且 $\Omega^{\infty - n}$ 保持这些极限；
- 若 $\mathcal{C}$ 中有被 $\Omega \colon \mathcal{C}_* \to \mathcal{C}_*$ 所保持的
  $\mathcal{I}$-型余极限，
  则 $\mathsf{Sp}(\mathcal{C})$ 也带有 $\mathcal{I}$-型余极限，
  且 $\Omega^{\infty - n}$ 保持这些余极限。

:::

::: theorem
对于带有有限极限的范畴 $\mathcal{C}$，其稳定化 $\mathsf{Sp}(\mathcal{C})$ 是稳定范畴。
特别地，当 $\mathcal{C}$ 稳定时，
有范畴等价 $\mathsf{Sp}(\mathcal{C}) \simeq \mathcal{C}$。
:::

::: theorem
稳定化构成函子
\[
\mathsf{Sp}(-) \colon \mathsf{Cat}_{\operatorname{lex}} \to \mathsf{Cat}_{\operatorname{st}},
\]
其中 $\mathsf{Cat}_{\operatorname{lex}}$
是指带有有限极限的范畴及其间[[正合函子|左正合]]函子所构成的范畴，
$\mathsf{Cat}_{\operatorname{st}}$ 是指稳定范畴及其间正合函子所构成的范畴。
并且该函子具有全忠实的右伴随
$\iota \colon \mathsf{Cat}_{\operatorname{st}} \hookrightarrow \mathsf{Cat}_{\operatorname{lex}}$。
:::

利用[[可表现范畴]]中
$\mathsf{Pr}^{\mathrm{L}} \simeq (\mathsf{Pr}^{\mathrm{R}})^{\operatorname{op}}$ 可得

::: proposition
当 $\mathcal{C} \in \mathsf{Pr}^{\mathrm{L}}$ 为可表现范畴时，
$\mathsf{Sp}(\mathcal{C})$ 可计算为余极限
\[
\operatorname{colim}  \left( \mathcal{C}_* \xrightarrow{\Sigma} \mathcal{C}_* \xrightarrow{\Sigma} \cdots \right).
\]
:::
