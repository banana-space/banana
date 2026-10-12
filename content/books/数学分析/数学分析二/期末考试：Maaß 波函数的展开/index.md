---
title: 期末考试：Maaß 波函数的展开
---

## 多重积分与曲面积分的计算（共100分）

- A1)（10分）令 $C$ 为 $\mathbb{R}^3$ 中顶点在 $(0,0,1)$ 处，
  对称轴为 $z$-轴并且底在 $z=0$ 平面上的圆锥：
  \[
  C=\left\{(x,y,z)\in \mathbb{R}^3\bigm|  z\in [0,1], \sqrt{x^2+y^2}=1-z\right\}.
  \]
  试计算 $C$ 的曲面面积。

- A2)（10分）计算二重积分：
  \[
  \iint_{[0,1]\times [0,1]}\Big| xy-\frac{1}{4}\Big|dxdy.
  \]

- A3)（10分）考虑 $\mathbb{R}^3$ 中的一个实心圆柱与球面的截面：
  \[
  S=\left\{(x,y,z)\bigm| x^2+\left(y-\frac{1}{2}\right)^2\leqslant \frac{1}{4}, \ x^2+y^2+z^2=1, z\geqslant 0\right\}.
  \]
  试计算 $S$ 的曲面面积。

- A4)（10分）令 $D$ 为 $\mathbb{R}^3$ 中球心在原点处的单位实心球，即
  \[
  D =\left\{(x,y,z)\bigm| x^2+y^2+z^2\leqslant 1\right\}.
  \]
  试计算三重积分：
  \[
  \iint_{D}z^2\, dxdydz.
  \]

- A5)（10分）令 $D$ 为 $\mathbb{R}^3$ 中球心在原点处的单位实心球，即
  \[
  D =\left\{(x,y,z)\bigm| x^2+y^2+z^2\leqslant 1\right\}.
  \]
  试计算三重积分：
  \[
  \iint_{D}z^3\, dxdydz.
  \]

- A6)（10分）考虑 $\mathbb{R}^3$ 中球心在原点处的八分之一单位实心球，即
  \[
  D_+ =\left\{(x,y,z)\bigm| x^2+y^2+z^2\leqslant 1,x\geqslant 0,y\geqslant 0,z\geqslant 0\right\}.
  \]
  试计算三重积分：
  \[
  \iint_{D_+} xyz\, dxdydz.
  \]

- A7)（20分）给定 $(a,b,c)\in \mathbb{R}^3$，$R>0$，考虑球面
  \[
  S =\left\{(x,y,z)\bigm| (x-a)^2+(y-b)^2+(z-c)^2=R^2\right\}.
  \]
  我们将 $S$ 上的外法向量取做指向球面的外部。试计算第二型曲面积分
  \[
  \iint_S x^2 dy dz +y^2 dx dz + z^2 dx dy.
  \]

- A8)（20分）假设 $X=(X_1(x,y,z),X_2(x,y,z),X_3(x,y,z))$ 是 $\mathbb{R}^3$
  中的光滑向量场并且散度为零，即 ${\rm div} X=0$。
  我们用 $\mathbf{S}_R$ 表示 $\mathbb{R}^3$ 中中心在原点半径为 $R$ 的球面，即
  \[
  \mathbf{S}_R=\left\{(x,y,z)\bigm|  x^2+y^2+z^2=R^2\right\}.
  \]
  证明，以下的量不依赖于 $R$ 的选取：
  \[
  I(R)=\frac{1}{R}\int_{\mathbf{S}_R} xX_1(x,y,z)+yX_2(x,y,z)+zX_3(x,y,z)d\sigma,
  \]
  其中 $d\sigma$ 是 $\mathbf{S}_R$ 的曲面测度。

## 具有非负Fourier系数的连续函数（共25分）

给定 $\mathbb{R}$ 上以 $2\pi$ 为周期的连续函数 $f\in C^0(\mathbf{T})$，
如果对任意的 $m\in \mathbb{Z}_{\geqslant 1}$，任意的 $x_a \in \mathbb{R}$，$c_a\in \mathbb{C}$，
$a=1,2,\cdots,m$，我们都有
\[
\sum_{a=1}^m \sum_{b=1}^m c_a\overline{c_b}f(x_a-x_b)\geqslant 0,
\]
我们就称 $f$ 是**正定的**。

- B1)（2分）给定有限的Fourier级数
  \[
  f(x)=\sum_{|k|\leqslant N} \widehat{f}(k) e^{ik\cdot x},
  \]
  如果对任意的 $|k|\leqslant N$，$ \widehat{f}(k)\geqslant 0$，证明，$f$ 是正定的。

- B2)（8分）假设 $f\in C^0(\mathbf{T})$ 并且对任意的 $k\in \mathbb{Z}$，
  $\widehat{f}(k)\geqslant 0$。证明，$f$ 是正定的。（提示：利用Fejér核）

- B3)（7分）假设 $f\in C^0(\mathbf{T})$ 是正定的。证明，对任意的 $g\in C^0(\mathbf{T})$，我们都有
  \[
  \int_{-\pi}^\pi \int_{-\pi}^\pi f(x-y)g(x)\overline{g(y)}\frac{dxdy}{(2\pi)^2}\geqslant 0.
  \]

- B4)（8分）假设 $f\in C^0(\mathbf{T})$ 是正定的。
  证明，对任意的 $k\in \mathbb{Z}$，$\widehat{f}(k)\geqslant 0$。

## Maaß 波函数（共45分）

我们用 $\mathbb{H}$ 表示上半平面
\[
\mathbb{H}=\bigl\{(x,y)\in \mathbb{R}^2\bigm|  y>0\bigr\}.
\]
对任意的 $\varepsilon>0$，令
\[
\mathbb{X}_\varepsilon =\bigl\{(x,y)\in \mathbb{R}^2\bigm|  x\in (0,1), y\in (\varepsilon,+\infty)\bigr\}\subset \mathbb{H}
\]
对于 $\mathbb{H}$ 上定义的复值函数 $f$，如果对任意的 $z=(x,y)\in \mathbb{H}$，都有
\[
f(x+1,y)=f(x,y),
\]
我们就称 $f$ 是**以 $\mathbb{Z}$ 为周期的**。我们定义
\[
\mathscr{E}=\bigl\{ f\colon \mathbb{H}\rightarrow \mathbb{C} \bigm|  \text{$f$ 以 $\mathbb{Z}$ 为周期并且对任意的 $\varepsilon>0$，$f\big|_{\mathbb{X}_\varepsilon}\in L^2(\mathbb{X}_\varepsilon,dxdy)$} \bigr\}.
\]
在 $\mathbb{H}$ 上，我们定义双曲的Laplace算子：
\[
\triangle_{_{\mathbb{H}}}=y^2\left(\frac{\partial^2}{\partial x^2}+\frac{\partial^2}{\partial y^2}\right).
\]
对任意的 $s\in \mathbb{R}$，我们定义
\[
\mathscr{E}_s=\bigl\{\psi \in C^2(\mathbb{H})\cap \mathscr{E}~\bigm| ~ \triangle_{_{\mathbb{H}}}\psi =(s^2-\frac{1}{4})\psi\bigr\}.
\]
这个题目的目标是给出 $\mathscr{E}_s$ 的刻画。

- M1)（2分）任给 $f\in \mathscr{E}$。证明，对几乎处处的 $y\in (0,+\infty)$，一元函数
  \[
  (0,1)\rightarrow \mathbb{C},  \ x\mapsto f(x,y)
  \]
  落在 $L^2\bigl((0,1),dx\bigr)$ 中。

- M2)（3分）任给 $f\in \mathscr{E}$，对任意的 $k\in \mathbb{Z}$，证明，积分
  \[
  a_k(f,y)=\int_0^1 f(x,y)e^{-2\pi i kx}dx
  \]
  对几乎处处 $y>0$ 有定义。
  将 $a_k(f,y)$ 视作是 $y$ 的函数，证明，对任意 $\varepsilon>0$，
  $a_k(f,y)\in L^2\bigl((\varepsilon,\infty),dy\bigr)$。

- M3)（4分）对任意的 $y>0$ 和 $s\in \mathbb{R}$，我们定义
  \[
  K_s(y)=\int_0^\infty e^{-y(u+u^{-1})}u^{s-1}du.
  \]
  证明，$K_s(y)$ 对一切 $y>0$ 有定义并且是光滑函数。我们还有公式
  \[
  K^{(n)}_s(y)=\left(\frac{d}{dy}\right)^nK_s(y)=(-1)^n\int_{1}^\infty e^{-y(u+u^{-1})}(u^{s-1}+u^{-s-1})(u+u^{-1})^n du.
  \]

- M4)（3分）证明，对任意的 $n\geqslant 0$，$K_s(y)$ 在 $\infty$ 附近有如下的渐近行为：
  \[
  \lim_{y\rightarrow +\infty} \sqrt{y}e^{2y}K_s^{(n)}(y)=(-2)^n\sqrt{\pi}.
  \]
  （提示：可以考虑变量替换：$u\mapsto 1+\frac{v}{\sqrt{y}}$）

- M5)（4分）定义微分算子 $D$：
  \[
  Df(y) = y^2\dfrac{d^2f}{dy^2}+y\dfrac{df}{dy}-4y^2f.
  \]
  证明，
  \[
  D K_s= s^2 K_s.
  \]
  （所有代数运算，如果无相对具体的步骤而说经整理得到，视作无效）

- M6)（4分）假设在 $(0,+\infty)$ 上的定义的 $C^2$ 函数 $f$ 满足
  \[
  D f= s^2 f.
  \]
  证明，存在复常数 $c_1$ 和 $c_2$，使得

  \[
  f=\left(c_1+c_2\int_{0}^y \frac{dy'}{K_s(y')^2 \cdot y'}\right)K_s(y).
  \]

- M7)（3分）假设在 $(0,+\infty)$ 上的定义的 $C^2$ 函数 $f$ 满足
  \[
  D f= s^2 f.
  \]
  证明，极限 $\displaystyle \lim_{y\rightarrow +\infty}\sqrt{y}e^{-2y}f(y)$ 存在。
  进一步证明，
  $\displaystyle \lim_{y\rightarrow +\infty}\sqrt{y}e^{-2y}f(y)=0$ 当且仅当存在常数
  $c_3\in \mathbb{C}$，使得
  \[
  f(y)\equiv c_3\cdot K_s(y).
  \]

  以下我们假设 $s>1$。

- M8)（2分）证明，任给的 $f\in \mathscr{E}_s$，对任意的 $(x,y)\in \mathbb{H}$，
  级数 $\displaystyle \sum_{n\in \mathbb{Z}}a_k(f,y)e^{2\pi i kx}$ 收敛并且
  \[
  \sum_{n\in \mathbb{Z}}a_k(f,y)e^{2\pi i kx}=f(x,y).
  \]

- M9)（2分）任给的 $f\in \mathscr{E}_s$。
  证明，对任意的 $k\in \mathbb{Z}$，$a_k(f,y)e^{2\pi i kx} \in  \mathscr{E}_s$。

- M10)（4分）证明，如果 $k\in \mathbb{Z}$ 且 $k\neq 0$，那么，存在常数 $a_k(f)\in \mathbb{C}$，使得
  \[
  a_k(f,y)=a_k(f)\cdot y^{\frac{1}{2}}\cdot K_s(\pi \cdot |k|\cdot  y).
  \]

- M11)（4分）证明，存在常数 $a_0(f)\in \mathbb{C}$，使得
  \[
  a_0(f,y)=a_0(f)\cdot y^{\frac{1}{2}-s}.
  \]

- M12)（5分）证明，对任意的 $z\in \mathbb{C}$，$|z|<1$，级数
  \[
  \sum_{k=1}^\infty \left(|a_k(f)|+|a_{-k}(f)|\right)z^k
  \]
  收敛。

- M13)（5分）任意给定 $\{a_k\}_{k\in \mathbb{Z}}\subset\mathbb{C}$，假定对任意的 $z\in \mathbb{C}$，
  $|z|<1$，级数
  \[
  \sum_{k=1}^\infty \left(|a_k|+|a_{-k}|\right)z^k
  \]
  收敛。

  证明，对任意的 $(x,y)$，级数
  \[
  a_0y^{\frac{1}{2}-s}+\sum_{k\neq 0} a_k y^{\frac{1}{2}}K_s(\pi \cdot |k|\cdot y)e^{2\pi i kx}
  \]
  所定义的函数落在 $\mathscr{E}_s$ 中。
