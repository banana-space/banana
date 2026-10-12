---
title: 可表现范畴
categories: [范畴论]
navboxes: [范畴论]
---

**可表现范畴**是一类[[范畴]]，它有任意[[余极限]]，
且被一小族小对象沿余极限生成。

## 定义

::: definition
设 $\mathcal{C}$ 是[[范畴]]。对[[正则基数]] $\kappa$，
称 $\mathcal{C}$ 为 **$\kappa$-可表现**，
指它为 $\kappa$-[[可达范畴|可达]]，且有任意余极限。
称 $\mathcal{C}$ 为**可表现范畴**，
指存在正则基数 $\kappa$，使得 $\mathcal{C}$
是 $\kappa$-可表现范畴。

$\kappa$-可表现范畴沿保余极限、保
$\kappa$-[[紧对象]]的函子构成的范畴记作
$\mathsf{Pr}^{\mathrm{L}}_\kappa$，
沿保极限、保 $\kappa$-滤余极限的函子构成的范畴则记作
$\mathsf{Pr}^{\mathrm{R}}_\kappa$。
可表现范畴沿保余极限的函子构成的范畴记作
$\mathsf{Pr}^{\mathrm{L}}$，
沿保极限的可达函子构成的范畴记作
$\mathsf{Pr}^{\mathrm{R}}$。
这里 $\mathrm{L}$、$\mathrm{R}$
是左、右[[伴随函子|伴随]]之意：由[[伴随函子定理]]，
取左、右伴随给出[[范畴等价]]
$\mathsf{Pr}^{\mathrm{R}}_\kappa\cong
  (\mathsf{Pr}^{\mathrm{L}}_\kappa)^{\mathrm{op}}$，
$\mathsf{Pr}^{\mathrm{R}}\cong
  (\mathsf{Pr}^{\mathrm{L}})^{\mathrm{op}}$。
:::

## 例子

[[可达范畴]]的例子中很多也是可表现范畴。

- [[集合]]范畴、[[群]]范畴、[[环]]范畴、
固定一个环上的[[模]]范畴，都是 $\aleph_0$-可表现范畴。

- [[紧空间|紧]] [[Hausdorff 空间]]范畴的[[反范畴]]，即交换
$\mathrm{C}^*$ 代数范畴，是 $\aleph_1$-可表现范畴。
整个 [[$\mathrm{C}^*$ 代数]]范畴也是 $\aleph_1$-可表现范畴。

## 性质

设 $\kappa$ 是正则基数。

::: theorem [Gabriel–Ulmer 对偶]
范畴 $\mathcal{C}$ 是 $\kappa$-可表现范畴，当且仅当
$\mathcal{C}^\kappa$ 是小范畴、有
[[$\kappa$-小]]余极限，而且
$\mathcal{C}=\mathsf{Ind}_\kappa(\mathcal{C}^\kappa)$。
事实上，我们有自然的[[伴随函子]]
$$
\mathsf{Ind}_\kappa\colon
\mathsf{Cat}_{\kappa\text{-}\mathrm{colim}}\rightleftarrows
\mathsf{Pr}^{\mathrm{L}}_\kappa:\!(-)^\kappa
$$
其中 $\mathsf{Cat}_{\kappa\text{-}\mathrm{colim}}$
指有 $\kappa$-小余极限的小范畴沿保
$\kappa$-小余极限的函子构成的范畴。这里
$(-)^\kappa$ 是[[满忠实函子]]，把
$\mathsf{Pr}^{\mathrm{L}}_\kappa$
等价到 $\mathsf{Cat}_{\kappa\text{-}\mathrm{colim}}$
中[[幂等完备范畴]]构成的满子范畴。
:::

::: remark
由于[[收缩]]是可数余极限，故当 $\kappa$ 不可数时，
$\mathsf{Pr}^{\mathrm{L}}_\kappa
  \cong\mathsf{Cat}_{\kappa\text{-}\mathrm{colim}}$。
:::

::: corollary
$\mathsf{Pr}^{\mathrm{L}}_\kappa$ 是
$\kappa$-可表现范畴，
$\mathcal{C}\in\mathsf{Pr}^{\mathrm{L}}_\kappa$ 是
$\kappa$-紧对象当且仅当 $\mathcal{C}^\kappa$
由少于 $\kappa$ 个对象沿 $\kappa$-小余极限和[[收缩]]生成。
:::

::: theorem
$\mathsf{Pr}^{\mathrm{L}}_\kappa$ 和
$\mathsf{Pr}^{\mathrm{L}}$
都有任意[[极限 (范畴论)|极限]]、[[余极限]]，
其中极限可作为范畴直接取，余极限是先换到
$\mathsf{Pr}^{\mathrm{R}}_\kappa$ 和
$\mathsf{Pr}^{\mathrm{R}}$ 中，再作为范畴直接取极限。
:::

::: theorem
设 $\mathcal{C}$ 是范畴。以下几条等价：

1. $\mathcal{C}$ 是 $\kappa$-可表现范畴。

2. [[米田函子]]在 $\mathcal{C}^\kappa$ 上的限制
   $y^\kappa\colon\mathcal{C}\to
      \mathsf{P}(\mathcal{C}^\kappa)$
   [[满忠实函子|满忠实]]，且有左伴随。

3. 存在小范畴 $\mathcal{D}$ 及满忠实函子
   $G\colon\mathcal{C}\to\mathsf{P}(\mathcal{D})$，
   保持 $\kappa$-滤余极限且有左伴随。
:::

::: corollary
可表现范畴中有任意极限。
:::

::: corollary
设 $\lambda>\kappa$ 是[[正则基数]]。
则 $\kappa$-可表现范畴都是 $\lambda$-可表现范畴。
:::

::: theorem
设 $\mathcal{C}$ 是（未必小的）[[偏序集]]，则
$\mathcal{C}$ 是可表现范畴当且仅当：

1. $\mathcal{C}$ 是小范畴。

2. $\mathcal{C}$ 有任意上确界。

反过来，小的可表现范畴是偏序集。
:::

::: remark
偏序集的 $\kappa$-可表现性陈述比较繁琐，
具体参见[[可达范畴]]条目中的相应定理。
:::

```terms
可表现范畴:
  en: presentable category
```
