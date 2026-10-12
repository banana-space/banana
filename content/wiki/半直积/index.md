---
title: 半直积
categories: [群论]
navboxes: [群论]
---

在[[群论]]中，
**半直积**是[[群]]的[[直积 (群论)|直积]]的推广，
是一种“带有扭转”的积。
具体而言，给定以下信息：

- [[群]] $N, H$。

- [[群同态]] $\varphi \colon H \to \mathrm{Aut} (N)$，
  其中后者是群 $N$ 的[[自同构群]]。
  换言之，$\varphi$ 是 $H$ 在 $N$ 上的[[群作用]]。

则可定义半直积 $G = N \rtimes_\varphi H$，
常常简记为 $G = N \rtimes H$ 或 $G = H \ltimes N$，
它满足[[分裂短正合列|分裂]][[短正合列]]
\[
1 \to N \to G \to H \to 1 ,
\]
其中 $1$ 表示[[平凡群]]。
换言之，有[[满射|满]][[群同态]] $G \to H$，
其[[核 (代数)|核]]为[[正规子群]] $N \lhd G$，
并且还有含入映射 $H \hookrightarrow G$，
它与上述满射 $G \to H$ 的复合为 $H$ 上的[[恒同映射]]。
这里，选取不同的 $\varphi$ 能得到不同的 $G$，均满足上述性质；
反过来，满足上述性质的 $G$ 一定能由半直积得到（@内半直积）。

在上述记号下，当 $\varphi$ 选取为取值为恒同映射 $\mathbb{1}_N$ 的[[常值映射]]时，
即取 $H$ 在 $N$ 上的平凡作用时，
半直积 $N \rtimes_\varphi H$ 与直积 $N \times H$ 相同。

半直积的构造也可以推广到带额外结构的群，
例如[[拓扑群]]、[[Lie 群]]、[[代数群]]等。

## 定义

::: definition
给定以下信息：

- [[群]] $N, H$。

- [[群同态]] $\varphi \colon H \to \mathrm{Aut} (N)$，
  其中后者是群 $N$ 的[[自同构群]]。
  换言之，$\varphi$ 是 $H$ 在 $N$ 上的[[群作用]]。

则 $N, H$ 关于 $\varphi$ 的**半直积**，
记为 $G = N \rtimes_\varphi H$，是以下定义的群：

- 其底[[集合|集]]为[[积集]] $N \times H$。

- 其[[单位元]]为 $e_G = (e_N, e_H)$，其中 $e_N, e_H$ 分别为 $N, H$ 的单位元。

- 其[[乘法]]定义为
  $(n_1, h_1) \cdot (n_2, h_2) = (n_1 \, \varphi (h_1) (n_2), \, h_1 \, h_2)$。

- 元素 $(n, h)$ 的[[逆元]]是 $(\varphi (h^{-1}) (n^{-1}), \, h^{-1})$。

:::

## 性质

::: theorem {@内半直积}
设 $G$ 是群，$N$、$H$ 是其子群，满足：

- $N$ 是 $G$ 的正规子群；

- $H\cap N=1$；

- $HN=G$；

定义 $\varphi\colon H\to\operatorname{Aut}(N)$ 为
$\varphi(h)(n)=hnh^{-1}$。则
$(n,h)\mapsto nh$ 给出群同构
$N\rtimes_\varphi H\cong G$。
:::

## 例子

- [[二面体群]] $\mathrm{D}_{2n}$ 是[[循环群]] $\mathrm{C}_n$ 与 $\mathrm{C}_2$ 的半直积，
  其中 $\mathrm{C}_2$ 作用于 $\mathrm{C}_n$，将后者的每个元素映至其逆元。

- [[正交群]] $\mathrm{O}_n$ 是[[特殊正交群]] $\mathrm{SO} (n)$ 与循环群 $\mathrm{C}_2$ 的半直积。

```terms
半直积:
  en: semidirect product
  fr: produit semi-direct :m
  de: semidirektes Produkt :n
  ja: 半<はん>直<ちょく>積<せき>
  ko: 반직접곱
```
