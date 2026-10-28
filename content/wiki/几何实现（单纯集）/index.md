---
title: 几何实现（单纯集）
categories: [同伦代数]
navboxes: [同伦代数]
---

<disambiguation>
关于其他含义，请参见[[几何实现]]。
</disambiguation>

**几何实现**是一种将[[单纯集]]转化为[[拓扑空间]]的方式。
给定单纯集 $X$，其几何实现是将 $X$ 中每个 $n$ 维单形
赋予一个作为拓扑空间的[[标准单形|标准 $n$ 维单形]]，
再将这些标准 $n$ 维单形按 $X$ 的结构粘起来，而得到的拓扑空间。
此构造是[[Kan 扩张|左 Kan 扩张]]的特例。

例如，单纯集 $\Delta [n]$ 的几何实现就是标准 $n$ 维单形 $\Delta^n$。

## 定义

::: definition [几何实现] {@def-geo-realization}
单纯集的**几何实现**是指函子 $|{-}| \colon \mathsf{sSet} \to \mathsf{Top}$，
它定义为左 Kan 扩张
\[
\begin{tikzcd}
  \mathbb{\Delta} \ar[dr, "{[n]}\mapsto \Delta^n"]\ar[d,"y"] \\
  \mathsf{sSet} \ar[r,"|-|"'] & \mathsf{Top}
\end{tikzcd}
\]
其中 $y$ 为 Yoneda 嵌入。
从而 $|{-}| \coloneqq \operatorname{Lan}_{y}([n]\mapsto \Delta^n)$。
根据左 Kan 扩张的具体构造可知单纯集 $X$ 的几何实现可以刻画为
余极限 $|X| = \operatorname{colim}_{(n,x)} \Delta^n$。
此处 $(n,x)$ 所构成的范畴中态射为使得以下图表交换的态射 $f\in \mathbb{\Delta}([n],[m])$：
\[
\begin{tikzcd}
  \Delta[n] \ar[rr,"f"]\ar[dr,"x"] && \Delta[m]\ar[dl,"y"]\\
  &X
\end{tikzcd}
\]
这也相当于要求 $f^* \colon X_m \to X_n$ 满足 $f^*(y) = x$。
:::

根据上述构造，对于所有 $n \in \mathbb{N}$ 以及 $x \in X_n$，
根据余极限性质给出典范态射 $i_{n,x}\colon \Delta^n \to |X|$，
当 $(n,x)$ 变动时满足相容性。
由于在[[拓扑空间范畴]]中余极限可以体现为[[商空间]]，
由此几何实现可以具体地刻画为商空间
\[
{|X|} = \frac{\coprod_{n\geq 0} X_n \times \Delta^n}{(f^*(y),t)\sim (y,|f|(t))}, \,
\begin{tikzcd}
  (f^*(y),t)\ar[r,phantom,"\in"] & X_n \ar[r,phantom,"\times"] & \Delta^n\ar[d,"|f|"]& {[n]}\ar[d,"f"]\\
  (y,|f|(t))\ar[r,phantom,"\in"] & X_m\ar[u,"f^*"]\ar[r,phantom,"\times"] & \Delta^m& {[m]}
\end{tikzcd}
\]
依照几何直观，可将单纯集 $X$ 的几何实现试想为以下空间以及其粘接：
$X_0, \cdots, X_n$ 相当于 $X_0$ 的[[基数]]份的 $\Delta^0$，$\cdots$，
$X_n$ 的基数份的 $\Delta^n$，
依照 $f^* \colon X_m \to X_n$ 进行组装，
由于 $\mathbb{\Delta}$ 中的态射均可唯一地分解为保序满射和保序单射的合成，
因此后文中只给出面态射和退化态射所对应的组装方式。

- 取 $d^i \colon [n-1] \hookrightarrow [n]$，
  则 $|d^i|$ 将 $\{d_i(x)\}\times \Delta^{n-1}$ 嵌入 $\{x\} \times \Delta^n$。
  因此面态射 $d_i\colon X_n \to X_{n-1}$ 的效果等同于
  指定对应于 $x$ 的 $n$ 维单形的第 $i$ 个面（即 $d_i(x)$），
  依次黏合。
- 取 $s^j \colon [n+1] \twoheadrightarrow [n]$ 将 $\{s_j(x)\}\times \Delta^{n+1}$
  “压入”为 $\{x\}\times \Delta^n$。
  因此退化态射 $s_j \colon X_n \to X_{n+1}$ 的效果等同于
  指定对应于 $x$ 的 $n$ 维单形放在 $n+1$ 维“退化”单形的第 $j$ 个面。

由此可知退化 $n$ 维单形在粘合时是无关紧要的，
但是退化的信息仍是必要的。

## 性质

::: proposition
选定[[紧生成空间]]范畴 $\mathsf{CG}$，则几何实现函子保有限极限。
特别地，对于单纯集 $X$、$Y$，有典范同构
\[
|X \times Y| \simeq |X| \times |Y|
\]
若 $X$ 和 $Y$ 其中之一仅有有限多个非退化单形，
上述同构在 $\mathsf{Top}$ 中也成立。
:::

::: proposition {@prop-realization-singular}
几何实现函子是奇异集函子的[[伴随函子|左伴随]]。
:::

::: proof
由[[实现–脉伴随]]立知。
:::

```terms
几何实现:
  en: geometric realization
```
