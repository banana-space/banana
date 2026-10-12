---
title: 开映射定理（复分析）
categories: [复分析]
notices:
  - name: 消歧义
    see:
      - page: 开映射定理
navboxes: [复分析]
---

[[复分析]]中的**开映射定理**是说，
非[[常值函数|常值]]的[[全纯函数]]都是[[开映射]]，即把[[开集]]映为开集。

## 叙述

::: theorem [开映射定理]
设 $U \subset \mathbb{C}$ 是[[连通空间|连通]][[开集]]，
$f \colon U \to \mathbb{C}$ 是非[[常值函数|常值]]的[[全纯函数]]。
则 $f$ 是[[开映射]]。
:::

定理中，$U$ 连通的假设可以去掉，只需假设 $f$ 在 $U$ 的每个[[连通分支]]上都不是常值函数。
事实上，只需对每个连通分支分别应用定理，即可证明此结论。

## 证明

在以下证明中，我们只需证明 $f (U)$ 是开集，
因为可将 $U$ 替换为 $U$ 中任何连通开集，并重复证明，即可证明 $f$ 是开映射。

### 用局部表示

设 $z_0 \in U$。由全纯函数的局部表示，
存在自然数 $n > 0$，
以及 $z_0$ 和 $f (z_0)$ 各自附近的[[局部坐标]]，
即全纯函数 $\varphi \colon D \to U$ 和 $\psi \colon D \to \mathbb{C}$，
其中 $D \subset \mathbb{C}$ 是单位开圆盘，
使得 $\varphi (0) = z_0$，$\psi (0) = f (z_0)$，且有[[交换图]]
\[
\begin{tikzcd}
  D \ar[d, "\varphi"'] \ar[r, "{z \, \mapsto \, z^n}"]
  & D \ar[d, "\psi"]
  \\ U \ar[r, "f"]
  & \mathbb{C} \rlap{ .}
\end{tikzcd}
\]
并且，$\varphi, \psi$ 都是到其像的[[双全纯映射]]，从而是到其像的[[同胚]]。
由 $D$ 是开集，
知 $\psi (D) \subset \mathbb{C}$ 是包含 $f (z_0)$ 且包含于 $f (U)$ 的开集。
由于 $z_0$ 是任取的，这就说明了 $f (U)$ 是 $\mathbb{C}$ 中的开集。

### 用辐角原理

取 $w_0 \in f(U)$，则存在 $z_0 \in U$ 使得 $w_0 = f(z_0)$。需要证明 $w_0$ 是 $f(U)$ 的内点。
考虑函数 $f(z) - w_0$。
因为 $f$ 作为全纯函数的零点是孤立的（参见[[恒等定理]]），所以存在 $\rho > 0$ 使得
$f(z) - w_0$ 在 $\overline{B(z_0,\rho)} \subset U$ 中只有唯一的零点 $z_0$。记
$\gamma = \partial B(z_0,\rho)$，它是[[紧集]]，其上的[[连续函数]] $|f(z) - w_0|$ 必有最小值，
记为 $\delta > 0$（因为 $\gamma$ 上无零点）。对任意 $a \in B(w_0,\delta)$ 和
$z \in \gamma$，有
\[
|f(z) - w_0| \geq \delta > |a - w_0|.
\]

```tikz
\begin{tikzpicture}[scale=1.5, line width=1]
    \draw plot [smooth cycle, tension=0.7] coordinates {(0,0) (1,1) (2,0) (2,-1) (1,-2) (0,-1) (-1,-1) (-2,-1) (-1,0)};
    \fill (0.5,-0.5) circle (1pt) node[below] {$w_0$};
    \coordinate (closest) at (0.5,-0.5);
    \draw[cyan!80!black] (closest) circle (0.69);
    \fill[cyan!80!black] (0.5,0) circle (1pt) node[below] {$a$};
    \node[above=.3] at (1,1) {$\Gamma$};
\end{tikzpicture}
```

令 $\Gamma = f(\gamma)$，则上述结论说明 $n(\Gamma, a) = n(\Gamma, w_0)$，其中 $n$
表示[[环绕数]]。根据[[辐角原理]]，
\[
n(\Gamma, a) = \frac1{2\pi\mathrm i}\int_{\Gamma}\frac{\mathrm dw}{w - a} = \frac1{2\pi\mathrm i}\int_{\gamma} \frac{f'(z)}{f(z) - a} \mathrm dz,
\]
而右边是 $f(z) - a$ 所有零点对 $\gamma$ 的环绕数之和。对 $w_0$ 也是如此。
注意到 $n(\Gamma, a) = n(\Gamma, w_0)$，且 $f(z) - w_0$ 有唯一零点 $z_0$，环绕数大于零，
于是 $f(z) - a$ 在 $B(z_0, \rho)$ 中存在零点，这导致 $a \in f(B(z_0, \rho))$，也就是
$a \in f(U)$。从而
\[
B(w_0, \delta) \subset f(U),
\]
也就是 $w_0$ 是 $f(U)$ 的内点。所以 $f(U)$ 是开集。

```terms
开映射定理:
  en: open mapping theorem
  fr: théorème de l'image ouverte
  de: Offenheitsprinzip
  ja: 開<かい>写<しゃ>像<ぞう>定<てい>理<り>
```
