---
title: 切丛（范畴论）
---

::: convention
在本文中，

- [[范畴]]都指 [[$(\infty,1)$-范畴]]。

:::

范畴论中的**切丛**是 [[Goodwillie 微积分]]中关于[[流形]]上的[[切丛]]的类比。

## 定义

::: definition
令 $\mathcal{C}$ 为[[可表现范畴]]，
则 $\mathcal{C}$ 的**切丛**是指范畴 $T_{\mathcal{C}}$ 配上典范态射
$T_{\mathcal{C}} \to \mathcal{C}$。
其中范畴 $T_{\mathcal{C}}$ 是函子
$\mathsf{Sp}(\mathcal{C}_{/-}) \colon \mathcal{C}^{\operatorname{op}} \to \mathsf{Cat}$
的[[拉回纤维化|拉回反直化]]。
此时自然变换 $\Omega^{\infty} \colon \mathsf{Sp}(\mathcal{C}_{/-}) \Rightarrow \mathcal{C}_{/-}$
诱导出 $\mathcal{C}$ 上保持拉回态射的函子。
:::

## 直观

在 Goodwillie 微积分中，
具有以下对应关系。

| 流形上的微积分 | Goodwillie 微积分 |
| --- | --- |
| 黎曼流形 $M$ | 可表现范畴 $\mathcal{C}$ |
| 点 $x \in M$ | 对象 $X \in \mathcal{C}$ |
| 光滑函数 $f \colon M \to N$ | 保持滤余极限的函子 $F \colon \mathcal{C} \to \mathcal{D}$ |
| $\mathbb{R}$ | $\mathsf{Sp}$ |
| [[向量空间]] | [[稳定 (∞,1)-范畴\|稳定范畴]] |
| [[线性映射]] | [[正合函子]] |
| 微分 | [[切除逼近]] |

因此，在这一类比之下，$\mathcal{C}_{/X}$ 即为 $X$ 的全体邻域，
而其稳定化 $\mathsf{Sp}(\mathcal{C}_{/X})$ 即为在 $X$ 处的切空间。
从而 $T_{\mathcal{C}}$ 中的对象应当视为（点 $X$，$X$ 处的“切向量”$M$），
而此时“切向量”为 $\mathsf{Sp}(\mathcal{C}_{/X})$ 中的对象。

## 例子

- 考虑交换环谱范畴 $\mathsf{CAlg}$。
  则此时切丛 $T_{\mathsf{CAlg}}$ 即为全体交换环谱及其上的模所成范畴 $\mathsf{Mod}$。
  从而切丛 $T_{\mathsf{CAlg}}$ 可刻画如下：

  - 其对象为 $(A,M)$，其中 $A \in \mathsf{CAlg}$ 而 $M \in \mathsf{Mod}(A)$；
  - 态射 $(A,M) \to (B,N)$ 是指环同态 $f \colon A \to B$ 配上 $A$-模同态 $M \to f_* N$。

  此时 $\Omega^{\infty}(A,M)$ 即为[[平凡平方加厚]]所配有的典范态射 $A \oplus M \to A$。
