---
title: 有效满态射
aliases: [有效满射]
categories: [范畴论]
navboxes: [态射, 范畴论]
---

<problems>
- “例子”一节第一项“在 $1$-范畴中，每个满态射自动是有效满态射”似乎一般不成立（例如环范畴中的 $\mathbb{Z} \to \mathbb{Q}$ 是满态射但似乎不是有效满态射）。
</problems>

::: convention
在本文中，

- [[范畴]]都指 [[$(\infty,1)$-范畴]]，
  将经典的范畴称为 $1$-范畴。
- [[意象]]都指 [[$(\infty,1)$-意象]]。

:::

**有效满态射**是[[满态射]]的一种强化，
要求态射不仅是“满”的，而且可以从其“纤维积数据”中完全恢复。
在 $(\infty,1)$-范畴中，
这一条件自然推广为态射的目标是其 [[Čech 脉]]的[[几何实现 (单纯对象)|几何实现]]。

有效满态射在意象论中扮演“覆盖”的角色：
它与单态射共同构成了意象中的[[满单分解]]（参见[[连合–截断分解系]]），
并且恰好对应于 $0$-[[连合]]态射。

## 定义

### 在 $1$-范畴中

::: definition
令 $\mathcal{C}$ 为 $1$-范畴，$f \colon X \to Y$ 为 $\mathcal{C}$ 中的态射。
称 $f$ 为**有效满态射**，
是指纤维积 $X \times_Y X$ 存在，且 $f$ 为两个投影所构成的余等子：
\[
Y \simeq \operatorname{coeq}\left( X \times_Y X \rightrightarrows X \right).
\]
换句话说，如下拉回方块同时也是推出方块：
\[
\begin{tikzcd}
  X \times_Y X \ar[d] \ar[r] & X \ar[d,"f"]\\
  X \ar[r,"f"'] & Y
\end{tikzcd}
\]
:::

::: remark
直观上，有效满态射要求 $Y$ 可以从 $X$ 通过“粘合纤维积所给出的等价关系”来恢复。
这比一般的满态射（仅要求在态射层面右可消）更为严格。
:::

### 在 $(\infty,1)$-范畴中

在 $(\infty,1)$-范畴中，核对 $X \times_Y X \rightrightarrows X$ 不足以记录全部的高阶相容性信息，
需要将其替换为完整的 Čech 脉。

::: definition
令 $\mathcal{C}$ 为带有拉回的范畴。
称态射 $f \colon U \to X$ 为**有效满态射**，
是指 $f$ 的增广 Čech 脉 $\check{C}_{\bullet}^+(f)$ 为余极限图表。
换句话说，$X$ 为 Čech 脉的几何实现：
\[
X \simeq \operatorname{colim}_{[n] \in \mathbb{\Delta}^{\mathrm{op}}} \check{C}_n(f),
\]
其中 $\check{C}_n(f) = U^{\times_X (n+1)}$ 为 $U$ 在 $X$ 上的 $(n+1)$ 重纤维积。

记
\[
\mathsf{EffEpi}(\mathcal{C}) \subset \mathsf{Fun}([1],\mathcal{C})
\]
为全体有效满态射所构成的全子范畴。
:::

::: remark [两种定义的关系]
在 $1$-范畴中，Čech 脉的几何实现退化为核对的余等子。
这是因为 $1$-范畴中的 Čech 脉 $\check{C}_{\bullet}(f)$ 由其前两项 $\check{C}_0(f) = U$ 和
$\check{C}_1(f) = U \times_X U$ 完全决定
（更高阶的纤维积不携带额外信息），
因此其余极限恰好等同于余等子 $\operatorname{coeq}(U \times_X U \rightrightarrows U)$。
在 $(\infty,1)$-范畴中，高阶纤维积 $U^{\times_X (n+1)}$ 携带了非平凡的同伦信息，
必须全部纳入才能正确地“粘”出 $X$。
:::

### 在层范畴中

在[[(∞,1)-层|层范畴]]中，
有效满态射可以通过局部截面来刻画，
这使得有效满态射的判定可以归结为景上的具体计算。

::: definition
令 $(\mathcal{C},\tau)$ 为[[(∞,1)-景|景]]，
$f \colon X \to Y$ 为 $\mathsf{Shv}_{\tau}(\mathcal{C})$ 中的态射。

首先考虑 $Y = y(Y')$ 落在 [[Yoneda 嵌入]]的本质像中的情况。
称 $f$ 具有**局部截面**，
是指存在覆盖族 $\{U_i \to Y'\}_{i \in I}$ 使得对于每个 $i \in I$，
基变换
\[
\begin{tikzcd}
  X \times_Y y(U_i) \ar[r,"f_i"]\ar[d] \ar[dr,phantom,very near start,"\lrcorner"] & y(U_i) \ar[d]\\
  X \ar[r,"f"] & Y
\end{tikzcd}
\]
中的 $f_i$ 均存在[[截面]]。

对于一般的 $Y$，将 $Y$ 写为可表对象的余极限 $Y \simeq \operatorname{colim}_j y(Y'_j)$。
称 $f$ 具有**局部截面**，
是指对于每个 $j$，基变换 $X \times_Y y(Y'_j) \to y(Y'_j)$ 均具有局部截面。
:::

::: remark
直观上，“局部截面”意味着虽然 $f$ 未必整体具有截面，
但在覆盖拓扑意义下可以“局部地”找到截面。
:::

::: proposition
$\mathsf{Shv}_{\tau}(\mathcal{C})$ 中的态射 $f$ 为有效满态射，
当且仅当其具有局部截面。
:::

::: remark
此命题将层范畴中有效满态射的判定归结为景 $(\mathcal{C},\tau)$ 上的具体覆盖条件。
例如，在[[平展景]]上，
概形之间的态射是有效满态射当且仅当它平展局部地具有截面；
在 [[平坦景|fpqc 景]]上，则当且仅当它 fpqc 局部地具有截面。
:::

## 例子

- 在 $1$-范畴中，每个满态射自动是有效满态射。

- 在[[生象]]范畴 $\mathsf{Ani}$ 中，
  态射 $f \colon U \to X$ 为有效满态射当且仅当 $\pi_0(f) \colon \pi_0(U) \to \pi_0(X)$ 为满射。

- 在[[集合范畴]] $\mathsf{Set}$ 中，有效满态射恰好是满射。
  此时 Čech 脉的几何实现退化为商集 $U / (U \times_X U)$。

- 在意象中，有效满态射恰好是 $0$-[[连合]]态射（参见[[连合–截断分解系]]）。

## 性质

### 保守函子刻画

::: proposition
令 $\mathcal{C}$ 为意象。
态射 $f \colon U \to X$ 为有效满态射，当且仅当拉回函子
\[
f^* \colon \mathcal{C}_{/X} \to \mathcal{C}_{/U}
\]
是保守函子。
:::

::: remark
保守函子是指反射同构的函子：$f^*$ 保守意味着沿 $f$ 拉回后变为同构的态射原本就是同构。
直观上，这说明 $f$“覆盖”了 $X$ 的全部信息，没有丢失任何结构。
:::

### 封闭性

::: proposition
在意象中，有效满态射关于拉回封闭。
:::

::: remark
这一性质在意象论中至关重要：
它保证了“覆盖”这一概念在基变换下稳定，
是下降理论得以展开的基础。
:::

### 与群胚对象的等价

::: proposition
令 $\mathcal{C}$ 为意象。则 Čech 脉函子诱导出范畴等价
\[
\check{C}_{\bullet} \colon \mathsf{EffEpi}(\mathcal{C}) \xrightarrow{\;\sim\;} \mathsf{Grpd}(\mathcal{C}),
\]
其中 $\mathsf{Grpd}(\mathcal{C})$ 为 $\mathcal{C}$ 中全体[[(∞,1)-意象|群胚对象]]所构成的范畴。
其逆函子将群胚对象 $\mathcal{G}$ 映为典范态射 $\mathcal{G}_0 \to |\mathcal{G}|$。
:::

::: remark
此等价是意象中“有效性”的精确体现：
每个有效满态射都由其 Čech 脉（一个群胚对象）完全编码，
反过来每个群胚对象的几何实现都给出一个有效满态射。
这与经典意象论中“等价关系与其商之间的双射对应”完全类似。
:::

### 满单分解

::: proposition
令 $\mathcal{C}$ 为意象。
则 $(\mathsf{EffEpi}(\mathcal{C}),\mathsf{Mono}(\mathcal{C}))$ 构成 $\mathcal{C}$ 上的[[分解系]]，
其中 $\mathsf{Mono}(\mathcal{C})$ 为全体单态射所构成的类。
:::

::: remark
此分解系是[[连合–截断分解系]]在 $n = -1$ 时的特例，
也是经典范畴论中满单分解在 $(\infty,1)$-范畴框架下的推广。
对于意象中的任意态射 $f \colon U \to X$，分解为
\[
U \twoheadrightarrow V \hookrightarrow X,
\]
其中 $V$ 为 $f$ 的 Čech 脉的几何实现，$U \to V$ 为有效满态射，$V \hookrightarrow X$ 为单态射。
:::

```terms
有效满态射:
  en: effective epimorphism
  fr: épimorphisme effectif :m
```
