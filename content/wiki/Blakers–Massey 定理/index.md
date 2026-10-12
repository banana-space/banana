---
title: Blakers–Massey 定理
categories: [同伦论]
---

::: convention
在本文中，

- [[范畴]]都指 [[$(\infty,1)$-范畴]]。
- [[意象]]都指 [[$(\infty,1)$-意象]]。

:::

**Blakers–Massey 定理**是个[[同伦论]]定理，
说的是如果[[意象]]（例如[[生象]]范畴 $\mathsf{Ani}$）中一个[[推出]]方块
各边都充分[[连通]]，它就几乎是个[[拉回 (范畴论)|拉回]]方块。
此定理还有个对偶，说意象中一个拉回方块各边都充分连通，
它就几乎是个推出方块。

## 广义 Blakers–Massey 定理

::: theorem
设 $\mathcal{X}$ 是个意象，
$(\mathcal{L}, \mathcal{R})$ 是
$\mathcal{X}$ 上[[模态 (范畴论)|模态]]。
对 $\mathcal{X}$ 中推出方块
\[
\begin{tikzcd}
  T \ar[r, "{g}"] \ar[d, "{f}"]
  \ar[dr, phantom, pos=.8, "\lrcorner"]
  & Z \ar[d] \\
  Y \ar[r] & W
\end{tikzcd}
\]
若[[对角态射]]的[[推出积]] $\Delta_f \hat{\times} \Delta_g$
在左类 $\mathcal{L}$ 中，那么自然态射 $f \times_W g \colon T \to Y \times_W Z$
也在 $\mathcal{L}$ 中。
:::

::: proof
使用模态的术语，这里要证上述方块是 [[模态 (范畴论)|$\mathcal{L}$-拉回方块]]。
若将 $f$ 分解为 $j \circ s$，
其中 $s$ 是[[有效满态射|有效满射]]且 $j$ 是[[单射]]，
则 $\Delta_f$（在[[箭头范畴]]中）与 $\Delta_s$ 同构，
且 $f \times_W g$ 也与对应的自然态射 $s \times_{W'} g$ 同构，因而
总可以假设 $f$ 是有效满射。观察交换图
\[
\begin{tikzcd}
  T \times_Y T \ar[dr, phantom, pos=.2, "\ulcorner"]
  \ar[r, "\mathrm{pr}_2"] \ar[d, "\mathrm{pr}_1"] & T \ar[r, "g"] \ar[d, "f"] & Z \ar[d] \\
  T \ar[r, "f"] & Y \ar[r] & W
\end{tikzcd}
\]
其左侧方块是拉回且 $f$ 是有效满射，若能证明外部方块是 $\mathcal{L}$-拉回，
即可用模态的一般理论得到右侧方块也是 $\mathcal{L}$-拉回。
为此，考虑交换方体
\[
\begin{tikzcd}
  (T \times_Y T) \sqcup_T (T \times_Z T)
  \ar[rr, "{\mathrm{id} \
  \sqcup_T \ (\Delta_f \circ \mathrm{pr}_1})"]
  \ar[dd, "{\mathrm{pr}_2 \ \sqcup_T \ \mathrm{pr}_2}"]
  \ar[rd, pos = .7,
  "{(\Delta_g \circ \mathrm{pr}_1) \ \sqcup_T \ \mathrm{id}}"]
  && T \times_Y T \ar[rd, "{\mathrm{pr}_1}"]
  \ar[dd, pos=.3, "{g \circ \mathrm{pr}_1}"] \\
  & T \times_Z T \ar[rr, pos=.3,
  crossing over, "{\mathrm{pr}_1}"]
  \ar[dd, crossing over, pos=.3, "{f \circ \mathrm{pr}_1}"]
  && T \ar[dd, "{\mathrm{can}}"] \\
  T \ar[rr, "{g}"] \ar[rd, "{f}"] && Z \ar[rd] \\
  & Y \ar[rr] && W
\end{tikzcd}
\]
不难看出：

- 它的底面已假设为推出方块，且顶面依定义为推出方块。

- 它的左面是 $\mathcal{L}$-拉回方块，
  这是因为对应的自然态射同构于
  $\Delta_f \hat{\times} \Delta_g$
  （其[[到达域]]为 $(T \times_Y T) \times (T \times_Z T) $）沿
  \[
  (\mathrm{pr}_2 \times_Y \mathrm{pr}_1)
  \times (\mathrm{pr}_2 \times_Z \mathrm{pr}_3) \colon
  T \times_Y T \times_Z T \to
  (T \times_Y T) \times (T \times_Z T)
  \]
  的[[拉回（范畴论）|基变换]]。同理，它的后面也是 $\mathcal{L}$-拉回方块。

使用模态的 [[Mather 方体定理]]可知它的右面也是$\mathcal{L}$-拉回方块，
明所欲证。
:::

## 经典 Blakers–Massey 定理

::: theorem
设 $\mathcal{X}$ 是个意象。对 $\mathcal{X}$ 中推出方块
\[
\begin{tikzcd}
  T \ar[r, "{g}"] \ar[d, "{f}"]
  \ar[dr, phantom, pos=.8, "\lrcorner"]
  & Z \ar[d] \\
  Y \ar[r] & W
\end{tikzcd}
\]
如果 $f$ 为 $n$-连通且 $g$ 为 $m$-连通，
那么自然态射 $f \times_W g \colon T \to Y \times_W Z$
为 $(n + m)$-连通。
:::

::: proof
由映射 $f$ 为 $n$-连通，可知对角态射 $\Delta_f$ 为 $(n - 1)$-连通。
同理可得 $\Delta_g$ 为 $(m - 1)$-连通，故它们的推出积
$\Delta_f \hat{\times} \Delta_g$ 为 $(n + m)$-连通。
此时对连通-截断模态使用广义Blakers–Massey定理即可。
:::

## 对偶 Blakers–Massey 定理

::: theorem
设 $\mathcal{X}$ 是个意象，
$\mathcal{L}$ 是
$\mathcal{X}$ 中一族态射，其在[[拉回（范畴论）|基变换]]下封闭。
对 $\mathcal{X}$ 中拉回方块
\[
\begin{tikzcd}
  T \ar[r] \ar[d]
  \ar[dr, phantom, pos=.2, "\ulcorner"]
  & Z \ar[d, "{h}"] \\
  Y \ar[r, "{k}"] & W
\end{tikzcd}
\]
若推出积 $k \hat{\times} h$
在 $\mathcal{L}$ 中，那么自然态射
$k \sqcup_T h\colon Y \sqcup_T Z \to W$
也在 $\mathcal{L}$ 中。
:::

::: proof
推出积 $k \hat{\times} h$ 的到达域是 $W \times W$，
它沿对角态射 $\Delta_W\colon W \to W \times W$ 的基变换正是
自然态射 $k \sqcup_T h$，
且 $\mathcal{L}$ 在基变换下封闭，于是得证。
:::

::: corollary
设 $\mathcal{X}$ 是个意象。
对 $\mathcal{X}$ 中拉回方块
\[
\begin{tikzcd}
  T \ar[r] \ar[d]
  \ar[dr, phantom, pos=.2, "\ulcorner"]
  & Z \ar[d, "{h}"] \\
  Y \ar[r, "{k}"] & W
\end{tikzcd}
\]
若 $k$ 为 $n$-连通且 $h$ 为 $m$-连通，
那么自然态射 $k \sqcup_T h\colon Y \sqcup_T Z \to W$
为 $(n + m + 2)$-连通。
:::

## 参考文献

```bibliography
anel2020generalized:
  type: article
  title: A generalized Blakers–Massey theorem
  author: ['Anel, Mathieu', 'Biedermann, Georg', 'Finster, Eric', 'Joyal, André']
  journaltitle: Journal of Topology
  volume: 13
  number: 4
  pages: 1521–1553
  year: 2020
  publisher: Wiley Online Library
```

```terms
Blakers–Massey 定理:
  en: Blakers–Massey theorem
```
