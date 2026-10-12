---
title: Steinberg 关系
categories: [母题论]
---

**Steinberg 关系**是[[母题上同调]]等上同调理论中 $1$
次生成元之间的一类关系，形如 $[a][1-a]=0$。

## 定义

::: definition {@def}
设 $F$ 是[[域]]，$H$ 是[[环]]（未必交换），
带有映射 $[\cdot]\colon F^\times\to H$，是 $F$
的乘法群到 $H$ 的加法群的同态。称 $(H,[\cdot])$ 满足
**Steinberg 关系**，指对任意 $a\in F\setminus\{0,1\}$，
$[a][1-a]=0$。
:::

::: remark
@def 相当于说，$F^\times$ 的[[张量代数]]
$\operatorname{T}(F^\times)$ 到 $H$
的自然同态穿过 [[Milnor $K$ 理论]]，得到同态
$K^M(F)\to H$。如 $H$ 是[[分次环]]，$[\cdot]$ 把
$F^\times$ 打到 $H_1$，则 $K^M(F)\to H$ 是分次同态。
:::

## 母题同伦论中

对 $\mathbb{A}^1$-不变的上同调理论，可用[[母题同伦论]]的方法，
从如下一般命题推出 Steinberg 关系。

::: theorem {@母题st}
设 $S$ 是[[概形]]，以 $\mathsf{H}_*(S)$ 记带基点 Zariski
局部母题同伦范畴，即 $\mathsf{H}_*(S)=\mathsf{Sh}_{\mathrm{Zar},\mathbb{A}^1}(\mathsf{Sm}_S)_*$。
考虑其中映射
$$
\mathfrak{st}\colon(\mathbb{A}^1\setminus\{0,1\})_+\to\mathbb{G}_m^{\wedge2}
$$
$$
a\mapsto(a,1-a)
$$
其中 $\mathbb{G}_m$ 的基点是 $1$。则其[[纬悬]] $\Sigma(\mathfrak{st})\colon
  \Sigma((\mathbb{A}^1\setminus\{0,1\})_+)\to\Sigma(\mathbb{G}_m^{\wedge2})$
零伦。
:::

::: proof
我们给 $\mathbb{G}_m^{\wedge2}$ 找个模型。考虑
$$
B=\operatorname{Bl}_{(1,0),(0,1)}(\mathbb{A}^2)\setminus(\mathbb{A}^1\times0\cup0\times\mathbb{A}^1),
$$
这里去掉的是 $\mathbb{A}^1\times0$ 和 $0\times\mathbb{A}^1$ 的严格变换。
由于 $\mathbb{A}^1$ 可缩，
$$
\mathbb{G}_m^{\wedge2}=\frac{\mathbb{G}_m^2}{\mathbb{G}_m\times1\sqcup_{1\times1}1\times\mathbb{G}_m}
=\mathbb{A}^1\times1\sqcup_{\mathbb{G}_m\times1}\mathbb{G}_m^2\sqcup_{1\times\mathbb{G}_m}1\times\mathbb{A}^1,
$$
含入映射 $\mathbb{A}^1\times1\to B$、$1\times\mathbb{A}^1\to B$ 给出映射
$\mathbb{G}_m^{\wedge2}\to B$。

注意 $\mathfrak{st}$ 复合该映射之后零伦，因为此复合映射可分解为
$$
(\mathbb{A}^1\setminus\{0,1\})_+\to\mathbb{A}^1\sqcup_1\mathbb{A}^1\sqcup_0\mathbb{A}^1\cong*\to B,
$$
其中 $\mathbb{A}^1\sqcup_1\mathbb{A}^1\sqcup_0\mathbb{A}^1$ 的基点是第三个
$\mathbb{A}^1$ 的 $1$，$\mathbb{A}^1\setminus\{0,1\}$ 沿第一个 $\mathbb{A}^1$
含入 $\mathbb{A}^1\sqcup_1\mathbb{A}^1\sqcup_0\mathbb{A}^1$，
而第二个箭头在三个 $\mathbb{A}^1$ 上分别是
$$
(a,1-a),\,(x-1)+ay=0,\,(1,a),
$$
这里把 $(1,0)$ 处例外除子上的点等同于 $\mathbb{A}^2$ 中过 $(1,0)$
的直线。

所以只需证上述映射 $\mathbb{G}_m^{\wedge2}\to B$ 的纬悬是同构。令
$$
U=\operatorname{Bl}_{(1,0)}(\mathbb{G}_m\times\mathbb{A}^1)\setminus\mathbb{G}_m\times0,\,
V=\operatorname{Bl}_{(0,1)}(\mathbb{A}^1\times\mathbb{G}_m)\setminus0\times\mathbb{G}_m,
$$
则 $B=U\sqcup_{\mathbb{G}_m^2}V$。故只需证自然映射
$$
\mathbb{G}_m^2\sqcup_{\mathbb{G}_m\times1}\mathbb{A}^1\times1\to U,\,
\mathbb{G}_m^2\sqcup_{1\times\mathbb{G}_m}1\times\mathbb{A}^1\to V
$$
的纬悬是同构。两个映射道理完全一样，故只需对第一个证明。
注意 $\mathbb{G}_m\times\mathbb{A}^1\sqcup_{\mathbb{G}_m\times1}\mathbb{A}^1\times1$
可缩，故
$\Sigma(\mathbb{G}_m^2\sqcup_{\mathbb{G}_m\times1}\mathbb{A}^1\times1)
  =(\mathbb{G}_m\times\mathbb{A}^1)/\mathbb{G}_m^2$；类似地
$\operatorname{Bl}_{(1,0)}(\mathbb{A}^2)\setminus\mathbb{A}^1\times0\cong\mathbb{A}^2$
可缩，故 $\Sigma U=
  (\operatorname{Bl}_{(1,0)}(\mathbb{A}^2)\setminus\mathbb{A}^1\times0)/U$；
最后注意 $\mathbb{G}_m\times\mathbb{A}^1$ 和 $U$ 构成
$\operatorname{Bl}_{(1,0)}(\mathbb{A}^2)\setminus\mathbb{A}^1\times0$ 的开覆盖，
交集正是 $\mathbb{G}_m^2$，所以
$\Sigma(\mathbb{G}_m^2\sqcup_{\mathbb{G}_m\times1}\mathbb{A}^1\times1)\cong\Sigma U$。
:::

::: corollary
记号承 @母题st。则 $\mathfrak{st}$ 在稳定母题同伦范畴
$\mathsf{SH}(S)$ 中零伦。因此，$\mathbb{A}^1$-不变的上同调理论都满足
Steinberg 关系。
:::

```terms
Steinberg 关系:
  en: Steinberg relation
```
