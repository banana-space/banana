---
title: Hurewicz 定理
categories: [同伦论]
navboxes: [代数拓扑]
---

<problems>
- “陈述与证明”一节中 $n = 1$ 情形的证明不完整：$\ker \Phi \subseteq [\pi_1, \pi_1]$ 一步只有概述，且“构造换位子 $[f_j]$ 使得 $\Phi([f_j]) = \partial \tau_j$”似乎不成立（换位子在 $\Phi$ 下的像为 $0$）。
- “推广”一节中引理的证明称附加 $k$-胞腔（$k \geq n+2$）对 $H_{n+1}$ 无影响，这似乎不对：附加 $(n+2)$-胞腔可能改变 $H_{n+1}$，只是使它变为商群。
- “推广”一节中定理的证明不完整：空间 $Y$ 的构造不清楚，$n = 1$ 时 $H_2(Y) \cong H_2(K(\pi_1(X), 1))$ 也没有说明理由。
</problems>

**Hurewicz 定理**是[[代数拓扑]]中的定理，
它联系了拓扑空间的[[同伦群]]与[[普通同调|同调群]]。

## 陈述与证明

::: theorem [Hurewicz]
对[[道路连通空间]] $X$，
如同伦群 $\pi_i(X) = 0$ 对 $i < n$ 成立，则

- $n = 1$，则[[普通同调|同调群]]
  $H_1(X)$ 为 $\pi_1(X)$ 的[[交换化]]。

- $n > 1$，则 $H_n(X) = \pi_n(X)$。

:::

::: proof
首先证明 $n = 1$ 的情况。

- 定义Hurewicz同态：将环路$f: S^1 \to X$视为1-链，其同调类即为$\Phi([f])$。
  \[
  \Phi: \pi_1(X,x) \to H_1(X),\quad [f] \mapsto [f_*(\gamma)]
  \]
  这里$\gamma$是$S^1$的生成元，$f_*$是同调中的诱导映射。

  由于环路拼接对应链的加法，$\Phi$是群同态。对于$[f][g] \in \pi_1(X)$，有：
  \[
  \Phi([f][g]) = \Phi([f \ast g]) = [(f \ast g)_*(\gamma)] = [f_*(\gamma)] + [g_*(\gamma)] \in H_1(X)
  \]
  因此$\Phi([f][g]) = \Phi([f]) + \Phi([g])$。

- 满射性：$H_1(X)$由1-圈生成。
  任意1-圈可分解为环路之和$\sum n_i \sigma_i \in Z_1(X)$，
  每个1-单形$\sigma_i$可视为环路（调整端点至基点），
  从而$\sum n_i [\sigma_i] \in \text{Im}(\Phi)$。

- 显然，换位子群包含于核：$[\pi_1, \pi_1] \subseteq \ker(\Phi)$。

  若$\Phi([f]) = 0$，则环路$f$对应的1-链是边界，
  即存在2-链$\sum m_j \tau_j$使得$\partial (\sum m_j \tau_j) =\Phi([f])$。
  通过分析2-单形 $\tau_j$ 的边界，
  可构造换位子$[f_j] \in [\pi_1, \pi_1]$使得 $\Phi([f_j])=\partial\tau_j$。

  因此$\ker\Phi= [\pi_1, \pi_1]$。

- 由同态基本定理，Hurewicz同态$\Phi$诱导同构：
  \[
  \pi_1(X)^{ab} = \pi_1(X)/\ker(\Phi) \cong \text{Im}(\Phi) = H_1(X)
  \]
  从而完成$n=1$情况的证明。

$n > 1$ 时，对 $n$ 归纳，
考虑[[纤维化]]
$\Omega X \to PX \to X$，它诱导了[[Leray–Serre 谱序列]]
\[
E^2_{pq} = H_p(X, H_q(\Omega X, \mathbb{Z}))
\Rightarrow H_{p+q}(PX, \mathbb{Z}).
\]
由于 $PX$ 可缩，
$H_{p+q}$ 只有在 $p = q = 0$ 时才不为 $0$。

注意到[[环路空间]] $\Omega X$ 满足 $n-1$ 时的条件，
由归纳假设，对 $0 < q < n-1$，$E^2_{pq} = 0$。
因此在谱序列中没有项可以和 $E^2_{p0}$，
$0 < p < n$ 抵消，那么这些项就都是 $0$；
此外唯一可能和 $E^2_{n0}$ 抵消的项是 $E^2_{0,n-1}$，
因此
\[
H_n(X, \mathbb{Z}) = H_{n-1}(\Omega X, \mathbb{Z})
= \pi_{n-1}(\Omega X) = \pi_n(X).
\]
:::

## 推论

::: corollary
对[[单连通空间]] $X$，
其最低阶不为 $0$ 的同伦群和最低阶不为 $0$ 的同调群阶数相同，
且同构。
:::

## 推广

下面的引理用于证明 Hurewicz 定理的推广。

::: lemma {@Hatcher-exercise-4.2.22}
设 $G$ 为群，$n > 1$，[[Eilenberg–MacLane 空间]] $K(G, n)$ 满足 $H_{n+1}(K(G, n);\mathbb{Z})=0$。
:::

::: proof
当 $n > 1$ 时[[Moore 空间]]$M(G, n)$ 是单连通的（$\pi_1(M(G, n)) = 0$）。
根据 Hurewicz 定理，$M(G, n)$是 $(n-1)$-连通的，则 $H_i(M(G, n)) = 0$ 对 $i < n$ 且
\[
\pi_n(M(G, n)) \cong H_n(M(G, n)) \cong G.
\]
为从 $M(G, n)$ 构造 $K(G, n)$，通过附加胞腔来逐步“杀死”高阶同伦群。具体而言：

- 对每个生成元 $[f] \in \pi_{n+1}(M(G, n))$，附加一个 $(n+2)$-胞腔，
  使得 $f: S^{n+1} \to M(G, n)$ 可延拓到 $D^{n+2}$ 上，从而在新建空间中 $[f]$ 变为零。

- 重复此过程，依次处理 $\pi_{n+2}, \pi_{n+3}, \ldots$，最终得到空间 $K(G, n)$，
  其同伦群仅剩 $\pi_n(K(G, n)) \cong G$。

附加 $k$-胞腔（$k \geq n+2$）仅影响同调群 $H_{k-1}$ 和 $H_k$，而对 $H_{n+1}$ 无影响。
由构造可知，$K(G, n)$ 的同调群满足：
\[
H_{n+1}(K(G, n); \mathbb{Z}) \cong H_{n+1}(M(G, n); \mathbb{Z}) = 0.
\]
:::

::: theorem
设 $X$ 为 $(n-1)$-连通的 CW 复形（$n \geq 1$），则：

- 当 $n > 1$ 时，Hurewicz 同态 $h: \pi_{n+1}(X) \to H_{n+1}(X)$ 是满射。

- 当 $n = 1$ 时，存在同构
  \[
  H_2(X) \big/ h(\pi_2(X)) \cong H_2(K(\pi_1(X), 1)),
  \]
  其中 $K(\pi_1(X), 1)$ 是以 $\pi_1(X)$ 为基本群的 [[Eilenberg–MacLane 空间]]。

:::

::: proof
我们构造一个与 $X$ 相关的空间 $Y$，其定义为将 $K(\pi_n(X), n)$ 的所有 $(n+2)$-维胞腔附加到 $X$ 上。
由于 $X$ 是 $(n-1)$-连通的，根据 Hurewicz 定理，$\pi_n(X) \cong H_n(X)$。

考虑相对同伦群与相对同调群的长正合序列，以及 Hurewicz 同态的自然性，得到以下交换图：
\[
\begin{tikzcd}
\pi_{n+2}(Y, X) \arrow[r] \arrow[d] & \pi_{n+1}(X) \arrow[r] \arrow[d, "h"'] & \pi_{n+1}(Y) \arrow[r] \arrow[d] & \pi_{n+1}(Y, X) \arrow[d] \\
H_{n+2}(Y, X) \arrow[r, "\partial"] & H_{n+1}(X) \arrow[r] & H_{n+1}(Y) \arrow[r] & 0
\end{tikzcd}
\]

- 由于 $Y$ 和 $X$ 在 $(n+1)$-维以下胞腔结构相同，相对链复形满足 $C_{n+1}(Y, X) = 0$，
  从而 $H_{n+1}(Y, X) = 0$。

- 根据长正合序列：
  \[
  H_{n+2}(Y, X) \xrightarrow{\partial} H_{n+1}(X) \to H_{n+1}(Y) \to 0,
  \]
  可得短正合序列：
  \[
  0 \to \mathrm{Im}(\partial) \to H_{n+1}(X) \to H_{n+1}(Y) \to 0.
  \]
  我们需证明 $\mathrm{Im}(\partial) = \mathrm{Im}(h)$：

- 对任意相对圈 $c \in H_{n+2}(Y,X)$，
  其边界 $\partial c \in H_{n+1}(X)$ 对应某个 $(n+2)$-胞腔的边界，
  而该胞腔的附着映射由 $\pi_{n+1}(X)$ 中元素 $[f]$ 定义，因此 $\partial c = h([f])$，
  即 $\mathrm{Im}(\partial) \subseteq \mathrm{Im}(h)$。

- 反之，对任意 $[f] \in \pi_{n+1}(X)$，构造对应的 $(n+2)$-胞腔附加到 $X$ 上，
  其对应的相对圈 $c$ 满足 $\partial c = h([f])$，
  故 $\mathrm{Im}(h) \subseteq \mathrm{Im}(\partial)$。

- 因此 $\mathrm{Im}(\partial) = \mathrm{Im}(h)$，进而有同构：
  \[
  H_{n+1}(X) \big/ \mathrm{Im}(h) \cong H_{n+1}(Y).
  \]

接下来分析 $H_{n+1}(Y)$：

- 当 $n > 1$ 时，构造 $Y$ 时仅附加了 $(n+2)$-维胞腔，由 @Hatcher-exercise-4.2.22，
  $K(\pi_n(X), n)$ 的$n+1$ 维同调群为零，故 $H_{n+1}(Y) = 0$，
  从而 $H_{n+1}(X) \big/ \mathrm{Im}(h) = 0$，即 $h$ 是满射。

- 当 $n = 1$ 时，$Y$ 的同调群 $H_{2}(Y) \cong H_{2}(K(\pi_1(X), 1))$，因此有
  \[
  H_2(X) \big/ h(\pi_2(X)) \cong H_2(K(\pi_1(X), 1)).
  \]

:::

## 参考文献

这里呈现的 $n > 1$ 情形的证明可以在以下教材中找到。

```bibliography
bott-tu:
  type: book
  author: [Raoul Bott, Loring Tu]
  year: 1982
  title: Differential forms in algebraic topology
  series: Graduate Texts in Mathematics
  number: 82
  publisher: Springer
```

```terms
Hurewicz 定理:
  en: Hurewicz theorem
  de: Satz von Hurewicz
  fr: théorème de Hurewicz
```
