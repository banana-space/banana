---
title: 留数定理
categories: [复分析]
notices:
  - name: 问题
    items:
      - “计算积分”一节的例子过于技巧性，宜改用更简单直观的例子。
      - “计算积分”一节的例子中，围道绕开的是正实轴，$\sqrt[3]{z}$ 似乎应取以正实轴为割线的分支（$0 < \arg z < 2\pi$），而不是主支。
      - “计算级数”一节中，围道积分 $\frac1{2\pi\mathrm i} \int_{C_N} f(z) \mathrm dz$ 似乎只是 $O(N^{-1})$ 而非 $O(N^{-2})$（被积函数为 $O(N^{-2})$，围道长度为 $O(N)$），但结论不受影响。
navboxes: [复分析]
---

在[[复分析]]中，**留数定理**说明，
[[复平面]]上[[亚纯函数]]的[[环路积分]]，即形如
\[
\oint_\gamma f (z) \, \mathrm d z
\]
的环路积分，
可以写成亚纯函数 $f$ 在所有由环路 $\gamma$ 包围的[[极点]]处的[[留数]]之和。
因为留数的计算常常易于积分的计算，
所以这个定理被广泛地用于各种积分的计算中。
留数定理在[[解析数论]]等领域也有应用。

## 陈述

::: definition [留数]
设 $U \subset \mathbb{C}$ 是[[开集]]，
$f$ 是 $U$ 上的[[亚纯函数]]。
对每个 $a \in U$，将 $f$ 在 $a$ 的邻域内写成 [[Laurent 级数]]
\[
f (z) = \sum_{n=-N}^{\infty} c_n (z-a)^n,
\]
则称 $c_{-1}$ 为 $f$ 在点 $a$ 处的 **[[留数]]**，记为
\[
\operatorname{Res}(f,a) = c_{-1}.
\]
:::

留数可以写成[[环路积分]]
\[
\operatorname{Res}(f,a) =
\frac{1}{2\pi\mathrm i} \oint_{\gamma} f(z) \, \mathrm d z,
\]
其中环路 $\gamma$ 是逆时针绕 $a$ 行进一周得到的曲线，
常常取为[[圆周]] $|z - a| = \varepsilon$，其中 $\varepsilon > 0$ 是很小的正数。
为使上式成立，$\gamma$ 围成的区域不可包含其它极点。
留数定理则是这一结论的推广。

::: theorem [留数定理]
设 $U \subset \mathbb{C}$ 是[[开集]]，
$f$ 是 $U$ 上的[[亚纯函数]]。
设 $\gamma \colon [a, b] \to U$ 是[[可求长曲线]]，
满足 $\gamma (a) = \gamma (b)$，且 $\gamma$ 不经过 $f$ 的[[极点]]。
则
\[
\oint_{\gamma} f (z) \, \mathrm d z =
2 \pi \mathrm{i} \cdot \sum_{\text{极点 } z \in U}
n (\gamma, z) \cdot \operatorname{Res} (f, z),
\]
其中 $n (\gamma, z)$ 是[[环绕数]]，
$\operatorname{Res} (f, z)$ 是[[留数]]，
且求和中只有有限项非零。
:::

特别地，若 $\gamma$ 不自交，且以逆时针方向行进，
记 $\Gamma$ 为其围成的区域，
则定理中的环绕数当 $z$ 在 $\Gamma$ 内时为 $1$，在其外为 $0$。
此时，留数定理可写为
\[
\oint_{\gamma} f (z) \, \mathrm d z =
2 \pi \mathrm{i} \cdot \sum_{\text{极点 } z \in \Gamma}
\operatorname{Res} (f, z),
\]

## 应用

### 计算积分

留数定理一个很重要的应用就是计算各种实函数和复函数的积分，而这其中的
关键在于作出合适的积分围道。下面两个引理在计算中将会是有用的：

::: lemma [Jordan 引理]
设函数 $f$ 在 $\{z \mid R_0 \leq |z| < \infty\} \cap H$ 连续，
其中 $H = \{z \mid \operatorname{Im}(z) \geq 0\}$ 为上半平面，
满足
\[
\lim_{z \to \infty, z \in H} f(z) = 0,
\]
则对任意 $\alpha > 0$有
\[
\lim_{R \to +\infty} \int_{C_R} \mathrm e^{\mathrm i \alpha z} f(z) \mathrm dz = 0,
\]
其中 $C_R = \{R \mathrm e^{\mathrm i \theta} \mid \theta \in [0,\pi]\}, R \geq R_0$。
:::

::: lemma [圆弧引理]
设函数 $f$ 在扇形
$C_\rho = \{z_0 + \rho \mathrm e^{\mathrm i\theta} \mid \theta \in [\alpha,\beta]\}$
上连续。

- 如果 $\lim_{z \to +\infty} (z-z_0)f(z) = A$，则
  \[
  \lim_{\rho \to +\infty} \int_{C_\rho} f(z) \mathrm dz = \mathrm i (\beta - \alpha) A;
  \]

- 如果 $\lim_{z \to z_0} (z-z_0)f(z) = A$，则
  \[
  \lim_{\rho \to 0} \int_{C_\rho} f(z) \mathrm dz = \mathrm i (\beta - \alpha) A.
  \]

:::

这里举一个例子：计算
\[
\int_{0}^{+\infty} \frac{\sqrt[3]{x}}{(1 + x)^2} \mathrm dx.
\]
令函数 $f(z) = \dfrac{\sqrt[3]{z}}{(1 + z)^2}$，其中根号取主支。画出如图所示的围道 $C$：

```tikz
\usetikzlibrary{arrows.meta,bending,decorations.markings,calc}
\begin{tikzpicture}[>={Stealth[length=0.3cm,bend]},
        decoration={markings,
        mark= at position .1 with {\arrow{>}},
        mark= at position .32 with {\arrow{>}},
        mark= at position .55 with {\arrow{>}},
        }
    ]
    \filldraw[postaction = {decorate}, thick ,fill=gray!40]
    let
        \n1 = {asin(0.3/2/3.4)},
        \n2 = {asin(0.3/2/0.5)}
    in
        (0+\n1:3.4) node[above right]{$R$}  arc (0+\n1:360-\n1:3.4) node[below left]{$C_{R}$} -- (0-\n2:0.5) arc (360-\n2:0+\n2:0.5) node[above right]{$\delta$} -- cycle;
        \draw[thick,->] (300:0.5) arc (300:130:0.5) node[above]{$C_{\delta}$};
        \fill (-1.2,0)  circle (3pt) ;
        \draw[->] (-1.2,-1) node[right]{pole} --(-1.2,-0.15);
        \draw[-Latex] (-1.5*3.4,0) -- (1.5*3.4,0) node[below]{$x$} ;
        \draw[-Latex] (0,-1.2*3.4) -- (0,1.2*3.4) node[right]{$y$};
\end{tikzpicture}
```

围道内仅存在一个极点 $(-1,0)$，留数为
\[
\operatorname{Res}(f,-1) = \frac{\mathrm d}{\mathrm dz} (z+1)^2 f(z)\bigg|_{z = -1} = \frac13 \mathrm e^{-\frac{2\pi\mathrm i}{3}}.
\]
根据留数定理：
\[
\oint_C f(z) \mathrm dz = \int_{\delta}^{R} f(z) \mathrm dz + \int_{C_R} f(z) \mathrm dz + \int_{R}^{\delta} f(z \mathrm e^{2\pi\mathrm i})\mathrm dz + \int_{C_\delta} f(z) \mathrm dz
            = \frac{2\pi\mathrm i}{3} \mathrm e^{-\frac{2\pi\mathrm i}{3}}.
\]
根据圆弧引理：$\delta \to 0, R \to +\infty$ 时
\[
\int_{C_R} f(z) \mathrm dz \to 0, \quad \int_{C_\delta} f(z) \mathrm dz \to 0,
\]
所以
\[
\left(1 - \mathrm e^{\frac{2\pi\mathrm i}{3}}\right) \int_0^{+\infty} f(x) \mathrm dx
= \frac{2\pi\mathrm i}{3} \mathrm e^{-\frac{2\pi\mathrm i}{3}},
\]
整理得
\[
\int_0^{+\infty} f(x) \mathrm dx = \frac{2\pi}{3\sqrt{3}}.
\]

### 计算级数

通过构造一些有无穷多个极点的函数，可以利用留数定理计算级数。
以下以计算 $\sum_{n=1}^{\infty} \frac{1}{n^2}$ 为例。

令
\[
f(z) = \frac{\pi \cot(\pi z)}{z^2},
\]
它以一切整数为奇点。$x = n(n \in \mathbb{Z} \backslash \{0\})$ 为一阶极点，有
\[
\operatorname{Res}(f, n) = \lim_{z \to n} \frac{\pi \cot(\pi z)}{z^2}(z - n) =\frac{1}{n^2};
\]
$x = 0$ 为三阶极点，有
\[
\operatorname{Res}(f, 0) = \frac{1}{2!}\lim_{z \to 0} \frac{\mathrm d^2}{\mathrm dz^2} \pi z\cot(\pi z)\bigg|_{z = 0} = -\frac{\pi^2}{3}.
\]
对正整数 $N$，考虑围道 $C_N$，它是正方形 $\partial [-N-1/2, N+1/2]^2$ 逆时针旋转的边界。由留数定理
\[
\frac1{2\pi\mathrm i} \int_{C_N} f(z) \mathrm dz = -\frac{\pi^2}{3} + 2\sum_{n = 1}^{N} \frac{1}{n^2}.
\]
而 $N \to \infty$ 时，等式左边为 $O(N^{-2})$，趋于零。故
\[
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}.
\]

### 在解析数论中的应用

[[解析数论]]常常通过分析的方法来研究数论函数，而这有时需要使用
留数定理。参见条目 [[Perron 公式]]和[[素数定理]]。

```terms
留数定理:
  en: residue theorem
  fr: théorème des résidus
  de: Residuensatz
```
