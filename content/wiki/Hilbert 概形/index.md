---
title: Hilbert 概形
categories: [模空间论]
navboxes: [计数几何]
---

[[概形]] $X$ 的 **[[Hilbert]] 概形**
是 $X$ 的[[闭子概形]]的[[模空间]]。
大致地说，即 Hilbert 概形的每个点对应于 $X$ 的一个闭子概形。

## 定义

设 $S$ 是[[概形]]，$X$ 是 [[相对概形|$S$-概形]]。
例如，常常取 $S = \operatorname{Spec} k$，其中 $k$ 为[[域]]。
定义[[函子]]
\[
\begin{aligned}
  & \operatorname{Hilb}_{X/S} \colon
  (\mathsf{Sch}_{/S})^{\mathrm{op}} \to \mathsf{Set}, \\
  & \operatorname{Hilb}_{X/S} (T) = \{
    \text{闭子概形 $Z \subset X \times_S T$} \mid
    \text{$Z \to T$ 紧合平坦}
  \}.
\end{aligned}
\]
我们将 $\operatorname{Hilb}_{X/S} (T)$
视为所有由 $T$ 参数化的 $X$ 的子概形族的集合。
根据引言所述的想法，
我们希望这个集合等同于 $T$ 到 Hilbert 概形的所有态射的集合。

::: definition [Hilbert 概形]
在上述情况下，
如果 $\operatorname{Hilb}_{X/S}$ 是[[可表函子]]，
也就是说，存在 $S$-概形
$\underline{\mathrm{Hilb}}_{X/S}$，
使得对任何 $T \in \mathsf{Sch}_{/S}$，都有自然的集合同构
\[
\operatorname{Hilb}_{X/S} (T) \simeq
\mathsf{Sch}_{/S} (T, \underline{\mathrm{Hilb}}_{X/S}),
\]
就称 $\underline{\mathrm{Hilb}}_{X/S}$ 为
$X$ 的（相对于 $S$ 的）**Hilbert 概形**。
:::

对[[拟射影概形]]而言，其 Hilbert 概形一定存在：

::: proposition
在上述记号下，若 $X$ 是 $S$ 上的[[拟射影概形]]，
则 Hilbert 概形 $\underline{\mathrm{Hilb}}_{X/S}$ 存在，
并且
\[
\underline{\mathrm{Hilb}}_{X/S} =
\coprod_{P} \, \underline{\mathrm{Hilb}}_{X/S} (P),
\]
其中 $P$ 取遍所有可能的 [[Hilbert 多项式]]，
而每个 $\underline{\mathrm{Hilb}}_{X/S} (P)$
也是 $S$ 上的[[拟射影概形]]，
对应着 Hilbert 多项式为 $P$ 的那些子概形。
:::

## 例子

几个例子：

(a) 设$C$是域$k$上的曲线，
    则
    \[
    \underline{\mathrm{Hilb}}^m_{C/k}\cong S^mC:=\underbrace{C\times\cdots\times C}_m/\mathfrak{S}_m.
    \]
    若$C$光滑，则$\underline{\mathrm{Hilb}}^m_{C/k}$也光滑。证明见[@FGAexplained]的Theorem 7.2.3(1)
    和Proposition 7.3.3。

(b) 设$S$是域$k$上的光滑曲面，
    则$\underline{\mathrm{Hilb}}^m_{S/k}$是$2m$维的光滑概形，
    故$\underline{\mathrm{Hilb}}^m_{S/k}\to S^mS$是
    奇点解消。注意到$S^mX$ 光滑当且仅当
    $X$光滑且$\dim X=1$或$m<2$。证明见[@FGAexplained] Theorem 7.2.3(2)
    和Theorem 7.3.4。

(c) 设$X$是非奇异代数簇。则当$m\leq3$时
    $\underline{\mathrm{Hilb}}^m_{X/k}$也非奇异。但是对任何非奇异$3$维代数簇，
    概形$\underline{\mathrm{Hilb}}^4_{X/k}$均奇异。见[@FGAexplained]的Remark 7.2.5和7.2.6。

(d) 设$\mathscr{E}$是$S$上秩$m+1$的向量丛
    且假设$P_d(n)=\binom{m+n}{m}-\binom{m+n-d}{m}$，则
    \[
    \underline{\mathrm{Hilb}}^{P_d}_{\mathbb{P}(\mathscr{E})/S}\cong\mathbb{P}((\mathrm{Sym}^d\mathscr{E})^{\vee}).
    \]

## 性质

(a) 我们有 $\underline{\mathrm{Hilb}}^1_{X/S}=X/S$。

(b) 考虑$Z\to S$，
    我们有$\underline{\mathrm{Hilb}}_{X\times_SZ/Z}\cong\underline{\mathrm{Hilb}}_{X/S}\times_SZ$。

(c) **Hartshorne 连通定理**：对任何连通诺特概形$S$，
    都有$\underline{\mathrm{Hilb}}^P_{\mathbb{P}^n_S/S}$连通。

(d) 设$X$是域$k$上的连通簇，
    则$\underline{\mathrm{Hilb}}^n_{X/k}$也连通，其中$n > 0$。

(e) **Murphy 定律**：Hilbert 概形的奇点之怪难以想象，准确点说，
    对任意在$\mathbb{Z}$上的有限型概形$X$和点$x\in X$，都存在某个Hilbert概形和上面的一个点
    $q\in\underline{\mathrm{Hilb}}^P_{\mathbb{P}^n/k}$使得有同构：
    \[
    \widehat{\mathscr{O}}_{X,x}[[x_1,...,x_s]]\cong \widehat{\mathscr{O}}_{\underline{\mathrm{Hilb}}^P_{\mathbb{P}^n/k},q}[[y_1,...,y_t]].
    \]
    见[@Vakil06]。

(f) 论文[@SS20]内作者给出了$\underline{\mathrm{Hilb}}^P_{\mathbb{P}^n/k}$何时光滑的
    完全分类。

## 参考文献

基本构造

```bibliography
FGAexplained:
  type: book
  author: ['Fantechi, Barbara', 'Göttsche, Lothar', 'Illusie, Luc', 'Kleiman, Steven L.', 'Nitsure, Nitin', 'Vistoli, Angelo']
  title: Fundamental algebraic geometry – Grothendieck's FGA explained
  publisher: American Mathematical Society
  year: 2005
```

更多参考

```bibliography
Vakil06:
  type: article
  title: "Murphy's law in algebraic geometry: badly-behaved deformation spaces"
  volume: 164
  journaltitle: Invent. Math.
  number: 3
  author: 'Vakil, Ravi'
  year: 2006
  pages: 569–590
SS20:
  type: preprint
  title: 'Smooth Hilbert schemes: their classification and geometry'
  arxiv: '2008.08938'
  author: ['Skjelnes, Roy', 'Smith, Gregory G.']
  year: 2020
```

```terms
Hilbert 概形:
  en: Hilbert scheme
  de: Hilbert-Schema :n
  fr: schéma de Hilbert :m
```
