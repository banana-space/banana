---
title: 可达范畴
aliases: [紧生成范畴, 可达函子]
categories: [范畴论]
navboxes: [范畴论]
---

<problems>
- “可达 $(\infty,1)$-范畴”一节需要扩充。
</problems>

**可达范畴**是一类[[范畴]]，其本身可以是大范畴，
但被一小族对象沿[[滤余极限]]生成。

## 定义

::: definition [[[紧对象]]]
设 $\mathcal{C}$ 是[[范畴]]，$\kappa$ 是[[正则基数]]。
称对象 $c\in\mathcal{C}$ 为 **$\kappa$-紧对象**，
指函子 $\operatorname{Hom}(c,-)\colon\mathcal{C}\to
  \mathsf{Set}$ 与 $\kappa$-[[滤余极限]]交换，换言之，
对每个有余极限的 $\kappa$-滤图表 $X\colon I\to\mathcal{C}$，
自然映射
$$
\operatornamewithlimits{colim}_{i\in I}
\operatorname{Hom}(c,X_i)\to
\operatorname{Hom}\left(c,
\operatornamewithlimits{colim}_{i\in I}X_i\right)
$$
是[[同构]]。$\mathcal{C}$ 中所有
$\kappa$-紧对象构成的[[满子范畴]]记为 $\mathcal{C}^\kappa$。
:::

::: definition {@def-accessible}
设 $\mathcal{C}$ 是[[范畴]]。对[[正则基数]] $\kappa$，
称 $\mathcal{C}$ 为 **$\kappa$-可达**，
或称 **$\kappa$-紧生成**，指它满足以下条件：

1. $\mathcal{C}$ 有 $\kappa$-滤余极限。
   换言之，$\mathcal{C}$ 中每个 $\kappa$-滤图表都有余极限。

2. $\mathcal{C}^\kappa$ 是小范畴。

3. $\mathcal{C}^\kappa$ 沿 $\kappa$-滤余极限生成
   $\mathcal{C}$。换言之，$\mathcal{C}$ 中每个对象都是
   $\mathcal{C}^\kappa$ 中对象的 $\kappa$-[[滤余极限]]。

称 $\mathcal{C}$ 是**可达范畴**，指存在正则基数
$\kappa$，使得 $\mathcal{C}$ 是 $\kappa$-可达范畴。
称 $\mathcal{C}$ 是**紧生成范畴**，指它是
$\aleph_0$-紧生成范畴。
:::

::: remark* (警告)
在部分文献中（如[@HTT]），
将 $\kappa$-紧生成范畴
定义为 [[可表现范畴|$\kappa$-可表现范畴]]，
采用本页面中的定义更体现 $\mathsf{Ind}_{\kappa}(\mathcal{C}^{\kappa}) \simeq \mathcal{C}$
这一想法。
而定义为 $\kappa$-可表现范畴则更加方便，
此时 $\kappa$-紧生成范畴具有单调性，
即 @rmk-cardinal 中的缺陷不复存在。
读者在阅读其它文献时需留意定义。
:::

::: remark {@rmk-cardinal}
设 $\lambda>\kappa$ 是[[正则基数]]。
一般而言，$\kappa$-可达范畴未必是
$\lambda$-可达范畴。
:::

::: definition
设 $\mathcal{C}$、$\mathcal{D}$ 是范畴，
$F\colon\mathcal{C}\to\mathcal{D}$ 是[[函子]]。
设 $\kappa$ 为正则基数，$\mathcal{C}$、$\mathcal{D}$ 为
$\kappa$-可达。此时称 $F$ 为 **$\kappa$-可达**，指
$F$ 保持 $\kappa$-滤余极限。一般地，称
$F$ 为**可达函子**，指存在正则基数 $\lambda$，
使得 $\mathcal{C}$、$\mathcal{D}$ 为
$\lambda$-可达范畴，$F$ 为 $\lambda$-可达函子。
$\kappa$-可达范畴关于 $\kappa$-可达函子构成的范畴记作
$\mathsf{Acc}_\kappa$。可达范畴关于可达函子构成的
（不局部小）范畴记作 $\mathsf{Acc}$。
:::

## 例子

- 代数中自然出现的大范畴基本都是可达范畴，函子也都是可达函子。
比如[[集合]]范畴、[[群]]范畴、[[环]]范畴、[[域]]范畴、
固定一个环上的[[模]]范畴、[[平坦模]]范畴，都是
$\aleph_0$-可达范畴。固定一个环上关于固定一个[[理想]]的[[完备模]]范畴是
$\aleph_1$-可达范畴。

- [[拓扑空间]]范畴不是可达范畴。

- [[紧空间|紧]] [[Hausdorff 空间]]范畴的[[反范畴]]，即交换
$\mathrm{C}^*$ 代数范畴，是 $\aleph_1$-可达范畴。
整个 [[$\mathrm{C}^*$ 代数]]范畴也是 $\aleph_1$-可达范畴。

- [[度量空间]]在保距映射下构成 $\aleph_1$-可达范畴，
其中[[完备度量空间|完备]]者亦然。

## 性质

设 $\kappa$ 是正则基数。

::: proposition
可达范畴都[[幂等完备范畴|幂等完备]]。反过来，幂等完备的小范畴都可达。
:::

::: theorem
范畴 $\mathcal{C}$ 是 $\kappa$-可达范畴，当且仅当
$\mathcal{C}^\kappa$ 是小范畴，而且
$\mathcal{C}=\mathsf{Ind}_\kappa(\mathcal{C}^\kappa)$。
事实上，我们有自然的[[伴随函子]]
$$
\mathsf{Ind}_\kappa\colon\mathsf{Cat}
\rightleftarrows\mathsf{Acc}_\kappa:\!(-)^\kappa
$$
其中 $\mathsf{Cat}$ 指小范畴构成的范畴。这里
$(-)^\kappa$ 是[[满忠实函子]]，把 $\mathsf{Acc}_\kappa$
等价到[[幂等完备范畴]]构成的满子范畴
$\mathsf{Cat}^\mathrm{idem}\subset\mathsf{Cat}$。
:::

::: corollary
$\mathsf{Acc}_\kappa$ 是 $\aleph_0$-[[可表现范畴]]，
$\mathcal{C}\in\mathsf{Acc}_\kappa$ 是紧对象当且仅当
$\mathcal{C}^\kappa\in\mathsf{Cat}$
是[[有限范畴]]的幂等完备化。
:::

::: theorem
$\mathsf{Acc}_\kappa$ 有任意[[极限 (范畴论)|极限]]、[[余极限]]，
其中极限是作为范畴直接取的，但余极限一般不是。设 $I$
是小范畴，$\mathcal{C}\colon I\to\mathsf{Acc}_\kappa$
是图表。如 $|I|<\operatorname{cf}(\kappa)$，
则 $\mathcal{C}$ 的余极限也是作为范畴直接取的。
:::

::: corollary
$\mathsf{Acc}$ 有任意极限、余极限，且都是作为范畴直接取的。
:::

::: theorem
设 $\mathcal{C}$ 是（未必小的）[[偏序集]]，则
$\mathcal{C}$ 是 $\kappa$-可达范畴当且仅当：

1. $\mathcal{C}$ 是小范畴。

2. 对任意[[正则基数]] $\lambda\ge\kappa$，
   任意偏序集嵌入
   $X\colon\lambda\hookrightarrow\mathcal{C}$
   的像集都有[[上确界]]。

3. 记 $\mathcal{C}^\kappa=
      \{c\in\mathcal{C}\mid\operatorname{cf}
      (\mathcal{C}_{<c})<\kappa\}$。则对任意
   $x\in\mathcal{C}$ 都有
   $x=\operatornamewithlimits{sup}
      \mathcal{C}^\kappa_{\le x}$。

:::

::: theorem {@kappa-ca}
设范畴 $\mathcal{C}$ 有 $\kappa$-滤余极限，并设
$\kappa$ 不可数。则以下几条等价：

1. $\mathcal{C}$ 为 $\kappa$-可达。

2. 函子 $\operatornamewithlimits{colim}\colon
   \mathsf{Ind}_\kappa(\mathcal{C})\to
   \mathcal{C}$ 有左伴随。

3. 存在 $\lambda\ge\kappa$，使 $\mathcal{C}$
   为 $\lambda$-可达，且函子
   $\operatornamewithlimits{colim}\colon
      \mathsf{Ind}_\kappa(\mathcal{C}^\lambda)\to
      \mathcal{C}$ 有左伴随。

:::

::: remark
$\kappa=\aleph_0$ 时，@kappa-ca 不成立，
参见[[紧聚集范畴]]。
:::

## 可达 $(\infty,1)$-范畴

## 参考文献*

```bibliography
HTT:
  type: book
  title: Higher Topos Theory
  author: Jacob Lurie
  year: 2009
  publisher: Princeton University Press
  url: https://www.math.ias.edu/~lurie/papers/HTT.pdf
Kerodon:
  type: online
  site: Kerodon
  title: Kerodon
  author: Jacob Lurie
  year: 2018
  url: https://kerodon.net
```

```terms
可达范畴:
  en: accessible category
可达函子:
  en: accessible functor
紧生成范畴:
  en: compactly generated category
```
