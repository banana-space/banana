---
title: 拟紧态射
categories: [概形论]
notices:
  - name: 问题
    items:
      - “性质”一节最后的命题“拟紧概形至少有一个闭点”似乎需要假设概形非空。
navboxes: [态射性质]
---

**拟紧态射**是[[代数几何]]中的概念，
指[[紧集]]的[[原像]]是紧集的[[概形]]态射。

值得注意的是，由于 [[Zariski 拓扑]]很粗糙，
拟紧只是个较弱的有限性条件（它等价于仿射开集的原像是有限个仿射开集之并）。
微分几何中紧性概念的正确类比是[[紧合态射]]。

## 定义

::: definition [拟紧态射]
称概形态射 $f \colon X \to Y$ **拟紧**，
是指存在 $Y$ 的仿射开覆盖 $Y = \bigcup_i V_i$，
使得诸 $f^{-1}(V_i)$ 的底拓扑空间[[紧空间|紧]]。
:::

::: remark
这里“拟紧”一词是历史遗留，这个词曾经表示现代意义的“紧”。
而当时“紧”则相当于现在的“紧 [[Hausdorff 空间|Hausdorff]]”。
:::

拟紧概形则和通常一样，是拟紧态射的“绝对版本”。

::: definition [拟紧概形]
称概形 $X$ **拟紧**，是指 $X$ 在 $\mathbb{Z}$ 上拟紧，
即典范态射 $X \to \operatorname{Spec}(\mathbb{Z})$ 拟紧。
:::

## 性质

::: proposition
态射 $f \colon X \to Y$ 拟紧当且仅当对 $Y$ 中任意仿射开集 $V$，
$f^{-1}(V)$ 紧，这也等价于 $f^{-1}(V)$ 是有限个仿射开集之并。

特别地，概形 $X$ 拟紧当且仅当 $X$ 的底空间紧。
:::

::: proposition
- 拟紧态射的复合仍然拟紧。

- 拟紧态射的基变换也拟紧。

:::

::: proposition [平坦下降]
对概形态射 $f \colon X \to Y$ 与拟紧、[[忠实平坦态射]] $Y' \to Y$，
如基变换 $X \times_Y Y' \to Y'$ 拟紧，则 $f$ 拟紧。
:::

::: proposition
若态射 $f \colon X \to Y$ 拟紧，则 $f(X)$ 在 $Y$ 中闭
当且仅当 $f(X)$ 对[[特殊化]]封闭。
:::

::: proof
对任意概形闭集都在特殊化下封闭。
现只需证另一边，假设 $f(X)$ 在特殊化下封闭。
闭性对 $Y$ 是局部性质，可不妨设其仿射，
记为 $\operatorname{Spec}(B)$。
此时 $X$ 为有限个仿射开集之并，记为 $\operatorname{Spec}(A_i)$。
令 $A = \prod A_i$，它的谱是这些开集的无交并（这里用到有限性），
则有满射 $\operatorname{Spec}{A} \to X$。
用 $A$ 替换 $X$，可不妨设 $X$ 也仿射。

由于 $f(X)$ 在特殊化下封闭，其补集在一般化下封闭，
因此对 $f(X)$ 的补集中任意一点 $x$，
$\operatorname{Spec}(B_x) \cap f(X) = \varnothing$。
因此 $f^{-1}(B_x) = \operatorname{Spec}(B_x \otimes_B A)$
为空。因此 $B_x \otimes A = 0$。
由于 $B_x$ 为[[滤余极限]] $\lim_{f \notin x} B_f$
且张量积与滤余极限交换，必然存在某个 $f$ 使得 $B_f \otimes_B A$
为 $0$。即包含 $x$ 的主开集 $D(f)$ 与 $f(X)$ 不交。
由 $x$ 的任意性，$f(X)$ 为闭集。
:::

::: proposition
拟紧概形至少有一个闭点。
:::

```terms
拟紧态射:
  en: quasi-compact morphism
  fr: morphisme quasi-compact
  la: morphismus quasi-compactus
```
