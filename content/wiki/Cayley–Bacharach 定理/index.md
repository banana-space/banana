---
title: Cayley–Bacharach 定理
aliases: [Cayley-Bacharach 定理]
categories: [相交论]
notices:
  - name: 问题
    items:
      - “推广”一节定理 2 中的 $\mathcal{O}_Y$ 未定义，似乎应为 $\mathcal{O}_\Gamma$。
---

::: convention
在本文中，

- 固定[[域]] $k$，所有的几何对象都在 $k$ 上。

:::

**Cayley–Bacharach 定理**是个[[代数几何]]定理，
说的是如两条[[三次曲线]]交于九个点，第三条三次曲线过其中八个，
则它必过第九个。它是[[射影几何]]中 [[Pascal 定理]]的推广。

## 陈述与证明

::: theorem {@33}
设 $X,Y\subset\mathbb{P}^2$ 是两条三次曲线，
交于互异九点 $p_0,p_1,p_2,p_3,p_4,p_5,p_6,p_7,p_8$。
如三次曲线 $Z\subset\mathbb{P}^2$ 过点
$p_1,p_2,p_3,p_4,p_5,p_6,p_7,p_8$，则它也过 $p_0$。
:::

::: proof
注意把 $X$ 换成它与 $Y$ 的非平凡线性组合不改变事情，
故由 [[Bertini 定理]]可设 $X$ 为[[光滑态射|光滑]]。
设 $Z$ 与 $X$ 的第九个交点为 $q_0$，要证 $p_0=q_0$。
为此考察[[代数线丛|线丛]] $\mathcal{O}_X(3)=
\mathcal{O}(3)|_X$。由 $Y$ 和 $Z$ 都是三次曲线，
对应于 $\mathcal{O}(3)$ 的截面，知 $X\cap Y$ 和 $X\cap Z$
都是对应于 $\mathcal{O}_X(3)$ 的[[有效 Cartier 除子]]。
相减知 $\mathcal{O}_X(p_0-q_0)=\mathcal{O}_X$。
如 $p_0\ne q_0$，该除子便给出次数为 $1$ 的映射
$X\to\mathbb{P}^1$，于是 $X\cong\mathbb{P}^1$，
与 $X\subset\mathbb{P}^2$ 是光滑三次曲线矛盾！所以
$p_0=q_0$。
:::

::: remark
在 [[Pascal 定理]]的情形取 $X,Y$ 为两组三条直线之并，
$Z$ 为二次曲线并上中间三个交点中两个的连线，即知
Cayley–Bacharach 定理推广 Pascal 定理。
:::

## 推广

以下命题是“[[完全交环]] [[Gorenstein 环|Gorenstein]]”的分次版本。

::: proposition
设 $R=k[x_0,\ldots,x_n]/(f_0,\ldots,f_c)$ 为完全交的
$n-c$ 维分次环，其中 $f_0,\ldots,f_c$ 为齐次多项式，
次数分别为 $d_0,\ldots,d_c$。记 $s=\sum_{i=0}^cd_i-n-1$，
以 $R_+$ 记正次数元组成的理想，即 $(x_0,\ldots,x_n)$。
则复形 $R\Gamma_{R_+}(R)$ 的上同调集中在 $n-c$ 处，且
$$
\operatorname{\underline{Hom}}_k(H^{n-c}_{R_+}(R),k)
\cong R(s),
$$
其中等号左边表示分次复形 $\bigoplus_{r\in\mathbb{N}}
\operatorname{Hom}_k(H^{n-c}_{R_+}(R)_{-r},k)$，
右边表示分次模 $R$ 平移 $s$ 次然后放到同调 $n-c$ 处。
:::

下面是 @33 的推广。

::: theorem
设 $\Gamma\subseteq\mathbb{P}^n$ 是零维[[闭子概形]]，
$I\subseteq k[x_0,\ldots,x_n]$ 是在 $\Gamma$
为零的多项式生成的理想，$R=k[x_0,\ldots,x_n]/I$
是一维分次环。设 $R$ 是 [[Gorenstein 环]]，
$s$ 是整数，且有同构
$$
\operatorname{\underline{Hom}}(H^1_{R_+}(R),k)=R(s),
$$
则 $\Gamma$ 是 Gorenstein 概形。设 $\Gamma',\Gamma''
\subseteq\Gamma$ 是对偶的闭子概形，即
$\mathcal{I}_{\Gamma''}=\operatorname{Ann}
_{\mathcal{O}_Y}(\mathcal{I}_{\Gamma'})$。
则对自然数 $r\le s$，下面两个线性空间自然对偶：

- 零点包含 $\Gamma'$ 的 $r$
  次多项式空间商去零点包含 $\Gamma$ 者；

- $\Gamma''$ 的函数环商去其上 $s-r$ 次多项式函数。

:::

::: remark
特别地，上述定理对 $\Gamma$ 是 $n$ 个超曲面的完全交成立。
:::

::: corollary
设 $X_1,X_2\subset\mathbb{P}^2$ 分别是 $d_1,d_2$ 次曲线，
交于互异的 $d_1d_2$ 个点。设 $Z$ 为一部分交点，$Z'$ 为其余。
记 $s=d_1+d_2-3$，设自然数 $r\le s$ 满足 $Z'$ 上的
$s-r$ 次多项式函数构成的线性空间维数是 $|Z'|$，例如
$|Z'|=1$ 且 $s-r=0$，或者 $Z'$ 中的点处于一般位置且
$|Z'|\le\binom{s-r+2}{2}$。则一条 $r$ 次曲线如包含 $Z$，
它也就包含 $Z'$。
:::

```terms
Cayley–Bacharach 定理:
  en: Cayley–Bacharach theorem
```
