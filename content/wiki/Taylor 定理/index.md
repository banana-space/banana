---
title: Taylor 定理
aliases: [Taylor 展开]
categories: [实分析, 复分析]
notices:
  - name: 问题
    items:
      - “对单变量函数”“对多变量函数”两节中的定理缺少证明。
navboxes: [微积分学, 复分析]
---

在[[微积分]]中，
**Taylor 定理**说明，
[[函数]]在一点附近能被它的 [[Taylor 多项式]]很好地逼近。

## 定理和证明

### 对单变量函数

::: theorem [Taylor 定理，单变量函数]
设 $f \colon \mathbb{R} \to \mathbb{R}$ 是一个[[函数]]，
并且在 $a \in \mathbb{R}$ 的一个邻域内具有 $n$ 阶[[导数]]。
则 $f (x)$ 能写成
\[
f (x) =
f (a) +
\frac {f' (a)} {1!} (x - a) +
\cdots +
\frac {f^{(n)} (a)} {n!} (x - a)^n +
r_n (x),
\]
其中 $f^{(n)}$ 表示 $f$ 的 $n$ 阶导数，
$r_n (x)$ 称为**余项**，
它可以用以下几种方式描述：

- （**Peano 余项**）
  \[
  r_n (x) = o ((x - a)^n) \quad (x \to a),
  \]
  其中 $o$ 是[[小 o 记号|小 $o$ 记号]]。

如果 $f$ 还在 $a \in \mathbb{R}$ 的一个邻域内有 $n + 1$ 阶导数，那么还有：

- （**积分余项**）
  如果 $f^{(n + 1)}$ [[Riemann 可积]]，那么
  \[
  r_n (x) =
  \frac {1} {n!}
  \int _{a} ^{x}
  f^{(n + 1)} (t) \,
  (x - t) ^n \,
  d t.
  \]

- （**Lagrange 余项**）
  对任意实数 $x$，存在介于 $a$ 与 $x$ 之间的实数 $\xi$，使得
  \[
  r_n (x) =
  \frac {f^{(n + 1)} (\xi)} {(n + 1)!}
  (x - a)^{n + 1}.
  \]

- （**Cauchy 余项**）
  对任意实数 $x$，存在介于 $a$ 与 $x$ 之间的实数 $\xi$，使得
  \[
  r_n (x) =
  \frac {f^{(n + 1)} (\xi)} {n!}
  (x - \xi)^n \, (x - a).
  \]

:::

### 对多变量函数

多变量函数的 Taylor 定理与单变量情形类似。对[[多重指标]] $\alpha \in \mathbb{N}^n$，
做出如下约定：
\[
|\alpha| = \alpha_1 + \cdots + \alpha_n, \quad \alpha! = \alpha_1! \cdots \alpha_n!,
\]
对 $x = (x_1, \cdots, x_n) \in \mathbb{R}^n$ 和 $f \colon \mathbb{R}^n \to \mathbb{R}$ 有
\[
x^\alpha = x_1^{\alpha_1} \cdots x_n^{\alpha_n}, \quad \frac{\partial^\alpha f}{\partial x^\alpha} = \frac{\partial^{|\alpha|} f}{\partial x_1^{\alpha_1} \cdots \partial x_n^{\alpha_n}}.
\]

::: theorem [Taylor 定理，多变量函数]
设 $f \colon \mathbb{R}^n \to \mathbb{R}$ 是[[函数]]，在 $a \in \mathbb{R}^n$ 的一个邻域
内 $m$ 阶[[连续可微映射|连续可微]]，则对邻域内的 $x$ 有
\[
f(x) = \sum_{|\alpha| \leq m} \frac{1}{\alpha!} \frac{\partial^\alpha f(a)}{\partial x^\alpha} (x - a)^\alpha + r_m(x),
\]
余项 $r_m(x)$ 描述如下：

- （**Peano 余项**）
  \[
  r_m(x) = o(|x - a|^m), \quad x \to a.
  \]

如果 $f$ 还 $m+1$ 阶连续可微，则

- （**积分余项**）
  \[
  r_m(x) = \sum_{|\beta| = m+1} r_{\beta}(x) (x - a)^{\beta},\\
  r_{\beta}(x) = \frac{|\beta|}{\beta!} \int_0^1 (1-t)^{|\beta|-1} \frac{\partial^\beta f}{\partial x^\beta}(a + t(x - a)) \mathrm dt.
  \]

- （**Lagrange 余项**）
  \[
  r_m(x) = \sum_{|\beta| = m+1} r_{\beta}(x) (x - a)^{\beta},\\
  r_{\beta}(x) = \frac{1}{\beta!} \frac{\partial^\beta f}{\partial x^\beta}(a + \theta(x - a)), \quad \theta \in (0,1).
  \]

:::

### 对单复变函数

[[全纯函数]]在一点的邻域内总能展开为收敛的 [[Taylor 级数]]。

::: theorem [Taylor 定理，全纯函数]
设 $U \subset \mathbb{C}$ 是开集，$f \colon U \to \mathbb{C}$ 是[[全纯函数]]。
给定 $z_0 \in U$ 及实数 $r > 0$，使得开圆盘 $B_r (z_0) \subset U$。
则对任意 $z \in B_r (z_0)$，有
\[
f(z) = \sum_{n=0}^{\infty} \frac{f^{(n)}(z_0)}{n!} (z - z_0)^n.
\]
:::

::: proof
按照 [[Cauchy 积分公式]] 的证明，$f$ 在 $B_r (z_0)$ 内可以写成形如
\[
f (z) = \sum_{n=0}^{\infty} a_n \, (z - z_0)^n
\]
的收敛幂级数。只需再证明 $a_n = f^{(n)} (z_0) / n!$。
对等式两边分别求 $n$ 阶导数，得
\[
f^{(n)} (z) = \sum_{k=n}^{\infty} k^{\underline{n}} a_k \, (z - z_0)^{k-n},
\]
其中 $k^{\underline{n}}$ 是[[降阶乘]]，
再令 $z = z_0$ 即得到 $f^{(n)} (z_0) = n! \, a_n$。
这里可以对级数逐项求导，因为求导后的幂级数仍具有同样的[[收敛半径]]，
在半径小于它的圆盘内一致收敛。
:::

```terms
Taylor 定理:
  en: Taylor's theorem
  de: Satz von Taylor
  fr: théorème de Taylor
```
