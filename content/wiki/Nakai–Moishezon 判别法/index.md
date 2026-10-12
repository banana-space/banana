---
title: Nakai–Moishezon 判别法
categories: [双有理几何, 相交论]
---

**Nakai–Moishezon 判别法**是用相交数来判别[[紧合态射|紧合]][[代数簇]]上[[代数线丛|线丛]][[丰沛线丛|丰沛性]]的方法，
说明了线丛的丰沛性是数值性质。

## 陈述与证明

::: theorem [Nakai–Moishezon 判别法] {@绝对}
设 $X$ 是域上紧合概形，$\mathcal{L}$ 是 $X$ 上的线丛。
则以下几条等价：

1. {@丰沛} $\mathcal{L}$ [[丰沛线丛|丰沛]]。

2. {@相交数} 对 $X$ 中任意的[[整概形|整]]的[[闭子概形]] $Z$，
   相交数 $(\mathcal{L}^{\dim(Z)}\cdot Z)$ 都是正数。

3. {@欧拉数} 对 $X$ 中任意的[[整概形|整]]的[[闭子概形]] $Z$，
   只要 $\dim(Z)>0$，就有
   $$
   \lim_{n\to+\infty}\chi(\mathcal{L}_Z^{\otimes n})=+\infty.
   $$

4. {@非零截面} 对 $X$ 中任意的[[整概形|整]]的[[闭子概形]] $Z$，
   只要 $\dim(Z)>0$，就存在 $n\in\mathbb{N}$，使得
   $\mathcal{L}_Z^{\otimes n}$ 的某个非零截面有零点。

:::

::: proof
用诺特归纳法，可设在 $X$ 的真[[闭子概形]]上定理已经成立。
此时如 $X$ 不是整概形，则由丰沛性的同调刻画容易看出，
$\mathcal{L}$ 丰沛等价于 $\mathcal{L}$ 在 $X$
的每个既约不可约分支上丰沛；而[条件 2](@相交数)、[3](@欧拉数)、
[4](@非零截面) 显然等价于它们在每个既约不可约分支上成立；
故此时由归纳假设定理成立。下设 $X$ 是整概形。

- [条件 1](@丰沛) 推[条件 2](@相交数)：我们来用诺特归纳证明对任意的非空闭子概形
  $Z\subseteq X$，相交数 $(\mathcal{L}^{\dim(Z)}\cdot Z)$
  都是正数。$\dim(Z)=0$ 时显然，下设 $\dim(Z)>0$。
  由于非整情形是整情形的正整数线性组合，可立即化归到
  $Z$ 整的情形。把 $\mathcal{L}$ 换成它的多次张量幂，
  可无妨设它极丰沛，则 $\mathcal{L}_Z$ 当然也极丰沛。
  任取其非零截面，对应非空除子 $D\subset Z$，用归纳假设即知
  $$
  (\mathcal{L}^{\dim(Z)}\cdot Z)=
  (\mathcal{L}^{\dim(Z)-1}\cdot D)=
  (\mathcal{L}^{\dim(D)}\cdot D)>0.
  $$

- [条件 2](@相交数) 推[条件 3](@欧拉数)：记 $d=\dim(Z)$。
  依定义
  $$
  \chi(\mathcal{L}_Z^{\otimes n})=
  \frac{(\mathcal{L}^d\cdot Z)}{d!}n^d+O(n^{d-1}),
  $$
  故 $d>0$ 时它随 $n\to+\infty$ 发散到 $+\infty$。

- [条件 3](@欧拉数) 推[条件 4](@非零截面)：不妨设 $Z=X$。
  以 $K(X)$ 记其分式域，并视为 $\mathcal{O}_X$-模层。
  取同构 $\mathcal{L}\otimes K(X)\cong K(X)$，
  以此把 $\mathcal{L}$ 视为 $K(X)$ 的子模，并取理想层
  $\mathcal{I}=\mathcal{O}_X\cap\mathcal{L}^{-1}$，
  $\mathcal{J}=\mathcal{O}_X\cap\mathcal{L}
      =\mathcal{I}\otimes\mathcal{L}$，分别对应闭子概形
  $Y$、$Z$。由归纳假设，$\mathcal{L}_Y$、$\mathcal{L}_Z$
  丰沛，故对任意正整数 $i$ 和充分大的正整数 $n$ 有
  $$
  H^i(Y,\mathcal{L}_Y^{\otimes n})=H^i(Z,\mathcal{L}_Z^{\otimes n})=0.
  $$
  考察正合列
  $$
  0\to\mathcal{I}\otimes\mathcal{L}^{\otimes n}\to
  \mathcal{L}^{\otimes n}\to\mathcal{L}_Y^{\otimes n}\to0
  $$
  $$
  0\to\mathcal{J}\otimes\mathcal{L}^{\otimes(n-1)}\to
  \mathcal{L}^{\otimes(n-1)}\to\mathcal{L}_Z^{\otimes(n-1)}\to0
  $$
  于是对任意正整数 $i>1$ 和充分大的正整数 $n$，
  它俩的上同调长正合列给出
  $$
  H^i(X,\mathcal{L}^{\otimes n})
  =H^i(X,\mathcal{I}\otimes\mathcal{L}^{\otimes n})
  =H^i(X,\mathcal{J}\otimes\mathcal{L}^{\otimes(n-1)})
  =H^i(X,\mathcal{L}^{\otimes(n-1)}).
  $$
  所以[条件 3](@欧拉数) 推出
  $$
  \lim_{n\to+\infty}(h^0(\mathcal{L}^{\otimes n})-h^1(\mathcal{L}^{\otimes n}))=+\infty,
  $$
  从而
  $$
  \lim_{n\to+\infty}h^0(\mathcal{L}^{\otimes n})=+\infty,
  $$
  也就推出[条件 4](@非零截面)。

- [条件 4](@非零截面) 推[条件 1](@丰沛)：把 $\mathcal{L}$ 换成它的多次张量幂，可设它有截面，
  对应除子 $D\subset X$。此时由归纳假设，@生成引理 的条件成立，故 $\mathcal{L}$
  由整体截面生成，给出映射
  $f\colon X\to\mathbb{P}(H^0(X,\mathcal{L}))$ 以及同构
  $\mathcal{L}=f^*\mathcal{O}(1)$。由于沿[[仿射态射]]拉回保持丰沛性，
  只需证 $f$ 仿射。我们来证明 $f$ [[有限态射|有限]]。显然 $f$
  [[紧合态射|紧合]]，故由 [[Zariski 主定理]]只需证其[[拟有限态射|拟有限]]。
  为此只需证闭点的纤维有限，因为紧合态射纤维维数上半连续。
  任取闭点纤维 $Y$。由于 $f$ 不是常映射，$Y$ 是 $X$
  的真闭子概形，故由归纳假设，$\mathcal{L}_Y$ 丰沛；
  而 $\mathcal{L}=f^*\mathcal{O}(1)$，故
  $\mathcal{L}_Y=\mathcal{O}_Y$；这推出 $Y$ 有限。

:::

::: lemma {@生成引理}
设 $X$ 是 Noether 环上紧合概形，$D\subset X$ 是[[除子|有效 Cartier 除子]]。
设对充分大的正整数 $n$，$H^1(D,\mathcal{O}_D(nD))=0$，
且 $\mathcal{O}_D(nD)$ 被整体截面生成。
则对充分大的正整数 $n$，$\mathcal{O}_X(nD)$
被整体截面生成。
:::

::: proof
考虑短正合列
$$
0\to\mathcal{O}_X((n-1)D)\to\mathcal{O}_X(nD)\to\mathcal{O}_D(nD)\to0
$$
的同调长正合列
$$
0\to H^0(X,\mathcal{O}_X((n-1)D))\to
H^0(X,\mathcal{O}_X(nD))\to
H^0(D,\mathcal{O}_D(nD))\to
H^1(X,\mathcal{O}_X((n-1)D))\to
H^1(X,\mathcal{O}_X(nD))\to
H^1(D,\mathcal{O}_D(nD))
$$
对充分大的 $n$，$H^1(D,\mathcal{O}_D(nD))=0$，从而
$H^1(X,\mathcal{O}_X((n-1)D))\to
  H^1(X,\mathcal{O}_X(nD))$ 是满射。由
[[Grothendieck 凝聚性]]，这些同调是 Noether 环上有限生成模，
故对充分大的 $n$，$H^1(X,\mathcal{O}_X((n-1)D))\to
  H^1(X,\mathcal{O}_X(nD))$ 是同构，从而
$H^0(X,\mathcal{O}_X(nD))\to
  H^0(D,\mathcal{O}_D(nD))$ 是满射，于是
$\mathcal{O}_X(nD)$ 在 $D$ 附近被整体截面生成；
但它显然在 $D$ 以外被整体截面生成，故它被整体截面生成。
:::

::: remark
由证明可以发现，该判别法对域上紧合[[代数空间]]也适用。
:::

::: theorem [相对 Nakai–Moishezon 判别法]
设 $f\colon X\to S$ 是 [[Noether 概形]]的[[紧合态射]]，
$\mathcal{L}$ 是 $X$ 上的线丛。则 $\mathcal{L}$ 为
$f$-丰沛当且仅当，对 $X$ 中任意[[整概形|整]]的[[闭子概形]]
$Z$，只要 $f(Z)$ 是一个点，就有
$(\mathcal{L}^{\dim(Z)}\cdot Z)$ 是正数。
:::

```terms
Nakai–Moishezon 判别法:
  en: Nakai–Moishezon criterion
```
