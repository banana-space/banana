---
title: Noether 正规化
categories: [交换代数]
navboxes: [交换代数]
---

<problems>
- “应用”一节需要扩充。
</problems>

**Noether 正规化**是个[[交换代数]]定理，
说的是[[域]]上的[[有限生成代数]]都是多项式环的[[有限同态|有限扩张]]。
几何地看，这就是说仿射[[代数簇]]都能有限满射到[[仿射空间]]。

## 定理与证明

::: theorem
设 $k$ 是域，$A$ 是其上有限生成代数。则存在 $d\in\mathbb{N}$
以及环的[[有限同态|有限]]单射 $k[X_1,\ldots,X_d]\to A$。
也将这样的映射称为 $A$ 的 **Noether 正规化**。
:::

::: proof
取 $A$ 的生成元 $y_1,\ldots,y_n$，
写 $A=k[Y_1,\ldots,Y_n]/I$，$Y_i\mapsto y_i$。
对 $n$ 归纳。$I=0$ 时为显然，
故可设 $I\ne0$。以下先证明存在 $z_1,\ldots,z_{n-1}\in k[Y_1,\ldots,Y_n]$，
使得 $A$ 在 $k[z_1,\ldots,z_{n-1}]$ 上有限。

取非零元 $f\in I$。取 $N\in\mathbb{N}$ 使得 $f$ 对各变元的次数都小于 $N$。
令 $z_i=Y_i-Y_n^{N^{n-i}}$，则 $k[Y_1,\ldots,Y_n]$
也是关于 $z_1,\ldots,z_{n-1},Y_n$ 的多项式环。
将 $Y_i=z_i+Y_n^{N^{n-i}}$ 代入 $f(Y_1,\ldots,Y_n)$，
可以发现 $f$ 的各个单项都会展开出一个只含 $Y_n$ 的单项，
次数非常高且互异。于是如将 $f$ 看成关于 $Y_n$，
系数在 $k[z_1,\ldots,z_{n-1}]$ 中的多项式，
则其最高次项系数在 $k$ 中。这样由于 $f\in I$，就有
$y_n\in A$ 在 $k[z_1,\ldots,z_{n-1}]$ 上整；而
$A$ 又由 $z_1,\ldots,z_{n-1}$ 的像和 $y_n$ 生成，故
$A$ 在 $k[z_1,\ldots,z_{n-1}]$ 上有限。

现考虑复合映射 $k[Z_1,\ldots,Z_{n-1}]\to k[Y_1,\ldots,Y_n]\to A$，
其中第一个映射为 $Z_i\mapsto z_i$。设其像为 $A'\subseteq A$。
则由上一段所证，$A$ 在 $A'$ 上有限。对 $A'$ 用归纳假设，
即得有限单射 $k[X_1,\ldots,X_d]\to A'$。于是
$k[X_1,\ldots,X_d]\to A$ 也是有限单射，命题得证。
:::

还有个关于[[完备 (交换代数)|完备]] [[Noether 环|Noether]] [[局部环]]的版本。

::: theorem
设 $A$ 是完备 Noether 局部环。则存在完备正则局部环
$R$ 以及有限单射 $R\to A$，且 $R$ 可取得形如
$k[[X_1,\ldots,X_d]]$，其中 $k$ 是域或完备[[离散赋值环]]。
:::

## 应用

```terms
Noether 正规化:
  en: Noether normalization
  de: Noetherscher Normalisierung
  fr: normalisation de Noether
```
