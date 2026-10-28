---
title: 左纤维化
aliases: [右纤维化]
categories: [高阶范畴论]
navboxes: [高阶范畴论]
---

<problems>
- “覆叠空间”一节的定义中，左纤维化写作 $p \colon X \to Y$，而随后记 $\mathsf{Cov}(X) \subseteq \mathsf{LFib}(X)$，似乎应为 $p \colon Y \to X$。
</problems>

::: convention
在本文中，

- [[范畴]]均指 [[$(\infty,1)$-范畴]]。

:::

**左纤维化**是[[群胚异纤维范畴]]的高阶版本，
即[[推出纤维化|反直化]]穿过[[生象]]范畴的那些推出纤维化。

## 定义

::: definition
考虑函子 $p \colon \mathcal{E} \to \mathcal{C}$，

- 称 $p$ 为**左纤维化**，
  是指交换图表
  \[
  \begin{tikzcd}
    \{0\}\ar[d]\ar[r] & \mathcal{E}\ar[d,"p"]\\
    [1] \ar[r]\ar[ur,dashed] & \mathcal{C}
  \end{tikzcd}
  \]
  中虚线所示箭头所构成的生象是可缩的。
- 称 $p$ 为**右纤维化**，
  是指交换图表
  \[
  \begin{tikzcd}
    \{1\}\ar[d]\ar[r] & \mathcal{E}\ar[d,"p"]\\
    [1] \ar[r]\ar[ur,dashed] & \mathcal{C}
  \end{tikzcd}
  \]
  中虚线所示箭头所构成的生象是可缩的。

等价地说，$p$ 为左纤维化或右纤维化是指其对应的图表
\[
\begin{tikzcd}
  \operatorname{Hom}_{\mathsf{Cat}}([1],\mathcal{E}) \ar[r,"p_*"]\ar[d] & \operatorname{Hom}_{\mathsf{Cat}}([1],\mathcal{C})\ar[d]\\
  \mathcal{E}^{\simeq} \ar[r] & \mathcal{C}^{\simeq}
\end{tikzcd}
\]
为拉回图表，
此处

- 当 $p$ 为左纤维化时，
  $\operatorname{Hom}_{\mathsf{Cat}}([1],\mathcal{C}) \to \mathcal{C}^{\simeq}$ 为来源函子 $s$。
- 当 $p$ 为右纤维化时，
  $\operatorname{Hom}_{\mathsf{Cat}}([1],\mathcal{C}) \to \mathcal{C}^{\simeq}$ 为指向函子 $t$。
:::

::: remark
不难看出：

- 左纤维化总是推出纤维化，
  因此记
  $\mathsf{LFib}(\mathcal{C}) \subseteq \mathsf{Cocart}(\mathcal{C})$
  为全体 $\mathcal{C}$ 上的左纤维化张成的全子范畴。
- 右纤维化总是拉回纤维化，
  因此记
  $\mathsf{RFib}(\mathcal{C}) \subseteq \mathsf{Cart}(\mathcal{C})$
  为全体 $\mathcal{C}$ 上的右纤维化张成的全子范畴。
:::

## 例子

- 对于任意对象 $x \in \mathcal{C}$，
  函子 $\mathcal{C}_{x/} \to \mathcal{C}$ 为左纤维化，
  函子 $\mathcal{C}_{/x} \to \mathcal{C}$ 为右纤维化。

## 性质

::: proposition
函子 $p \colon \mathcal{E} \to \mathcal{C}$ 为左纤维化
当且仅当 $p^{\operatorname{op}}$ 为右纤维化。
:::

::: proposition
令 $\mathcal{C}$ 为生象，
那么函子 $p \colon \mathcal{E} \to \mathcal{C}$ 为左/右纤维化当且仅当 $\mathcal{E}$ 也为生象。
特别地，生象间的函子自动为左/右纤维化。
:::

::: proposition
如果函子 $p \colon \mathcal{E} \to \mathcal{C}$ 为左/右纤维化，
那么对于任意范畴 $\mathcal{D}$，
函子 $p_* \colon \mathsf{Fun}(\mathcal{D},\mathcal{E}) \to  \mathsf{Fun}(\mathcal{D},\mathcal{C})$
也为左/右纤维化。
:::

::: proposition
函子 $p \colon \mathcal{E} \to \mathcal{C}$ 为左纤维化当且仅当对于每个 $e \in \mathcal{E}$，
都有 $\mathcal{E}_{e/} \to \mathcal{C}_{p(e)/}$ 为范畴等价。
:::

::: proposition
考虑推出纤维化 $p \colon \mathcal{E} \to \mathcal{C}$，则以下几条等价：

- $p$ 为左纤维化。
- $\mathcal{E}$ 中每个态射均为 $p$-推出态射。
- $p$ 是保守函子，即对于 $\mathcal{E}$ 中态射 $f$，
  有 $p(f)$ 为同构当且仅当 $f$ 为同构。
- 对于每个对象 $c \in \mathcal{C}$，纤维 $\mathcal{E}_c$ 均为生象。
:::

因此，可给出左纤维化的直化定理。

::: theorem [直化定理，左纤维化]
对于范畴 $\mathcal{C}$，
函子 $\mathsf{St}^{\operatorname{cocart}}_{\mathcal{C}}$ 限制在 $\mathsf{LFib}(\mathcal{C})$
上给出范畴等价
\[
\mathsf{St}^{\operatorname{L}}_{\mathcal{C}} \colon \mathsf{LFib}(\mathcal{C}) \simeq \mathsf{Fun}(\mathcal{C},\mathsf{Ani}).
\]
此时将 $\mathsf{St}^{\operatorname{L}}$ 称为直化，
其逆记为 $\mathsf{Un}^{\operatorname{L}}$，称为反直化。
:::

根据对偶性给出右纤维化的直化定理。

## 覆叠空间

::: definition
令 $X$ 和 $Y$ 为生象，考虑左纤维化 $p \colon X \to Y$，
如果 $p$ 的直化穿过 $\mathsf{Set}$，
则称其为[[覆叠空间]]。
记 $\mathsf{Cov}(X) \subseteq \mathsf{LFib}(X)$
为全体覆叠空间所张成的全子范畴。
:::

不难发现，利用[[几何实现(单纯集)]]，
可知 $|p|$ 恰为拓扑空间的覆叠空间。
直化定理限制在 $\mathsf{Cov}(X)$ 上给出范畴等价
\[
\mathsf{Cov}(X) \simeq \mathsf{Fun}(X,\mathsf{Set}).
\]
两侧过渡到同伦范畴上给出[[覆叠空间基本定理]]：

::: theorem [覆叠空间基本定理，生象版本]
令 $X$ 为生象，则有 $1$-范畴的等价
\[
\operatorname{Ho}(\mathsf{Cov}(X)) \simeq \mathsf{Fun}(\Pi_1|X|,\mathsf{Set}).
\]
:::

```terms
左纤维化:
  en: left fibration
右纤维化:
  en: right fibration
```
