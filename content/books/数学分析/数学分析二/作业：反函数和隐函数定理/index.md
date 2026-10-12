---
title: 作业：反函数和隐函数定理
notices:
  - name: 问题
    items:
      - 'D1 中的等式 $\|A\|=\sup_{k}|\lambda_k|$ 似乎只对正规矩阵（如对称矩阵）成立，对一般矩阵左边可以严格大于右边。'
      - 'D3 中的 $\mathbf{I}_{n^2\times n^2}$ 似乎应为 $3\,\mathbf{I}_{n^2\times n^2}$（因为 $d\mathcal{C}(\mathbf{I}_{n\times n})$ 是乘以 3）。'
      - 'D6 中的 $U$ 是单位矩阵，此时问题是平凡的；$U$ 似乎应为 $\bigl(\begin{smallmatrix}1 & 0 \\ 0 & -1\end{smallmatrix}\bigr)$。'
---

::: remark*
本次作业除了问题 C 之外，都与反函数定理相关。
:::

## A. 微分同胚与反函数定理的基本习题

- A1) 考虑映射函数 $f\colon \mathbb{R} \rightarrow \mathbb{R}$，其中
  \[
  f(x)=\begin{cases}
  x+x^2\sin\left(\frac{\pi}{x}\right), \ \ &x\neq 0;\\
  0, \ \ &x=0.
  \end{cases}
  \]
  证明，
  $f$ 在 $\mathbb{R}$ 上可微分并且 $df(0)\neq 0$ 但是在 $0$ 附近任意小的邻域上 $f$ 都不是单射。
  请对比反函数定理说明反函数定理中哪一个条件没有被满足。

- A2) 考虑映射
  \[
  f\colon \mathbb{R}^2\rightarrow \mathbb{R}^2, \ \ (x,y)\mapsto (e^x\cos(y),e^x \sin(y)).
  \]
  证明，$f$ 在每个 $(x,y)\neq (0,0)$ 处都满足反函数定理的要求但是 $f$ 不是单射也不是满射。

- A3) 我们考虑映射
  \[
  f\colon \mathbb{R}^2\rightarrow \mathbb{R}^2, \ \ (x,y)\mapsto (2x-y+x^2y-2y^5,x+3y-4x^2y^2).
  \]

  - 证明，存在 $0$ 的开邻域 $U$ 和 $V$，使得 $f\colon U\rightarrow V$ 是微分同胚。

  - 假设 $W=f(\mathbb{R}^2)$ 为 $f$ 的像，
    试问 $f\colon \mathbb{R}^2\rightarrow \mathbb{R}^2$ 是否为微分同胚？

- A4) 假设 $f\colon \mathbb{R}^n\rightarrow \mathbb{R}^n$ 是连续可微的。
  如果存在 $a>0$，使得对任意的 $x,y\in \mathbb{R}^n$，我们都有
  \[
  |f(x)-f(y)|\geqslant a|x-y|,
  \]
  那么，$f\colon \mathbb{R}^n\rightarrow \mathbb{R}^n$ 是 $C^1$ 的微分同胚。
  （注意：反函数定理只给出局部的同胚）

- A5) 假设 $f\colon \mathbb{R}\rightarrow \mathbb{R}$ 是 $C^\infty$ 的并且存在
  $0\leqslant \alpha<1$，使得 $|f'(x)|\leqslant \alpha$。定义
  \[
  F\colon \mathbb{R}^2\rightarrow \mathbb{R}^2, \ \ (x,y)\mapsto (x+f(y),y+f(x)).
  \]

  - 证明，$F$ 是 $C^\infty$ 的映射并且对任意的 $(x,y)\in \mathbb{R}^2$，$dF(x,y)$ 可逆。

  - 证明，对任意的 $(a,b)\in \mathbb{R}^2$，映射
    \[
    g_{a,b}\colon \mathbb{R}^2\rightarrow \mathbb{R}^2, \ (x,y)\mapsto (a-f(y),b-f(x))
    \]
    是压缩映像。（提示：请仔细研究反函数定理的证明）

  - 证明，$F\colon \mathbb{R}^2\rightarrow \mathbb{R}^2$ 是微分同胚。

## B. 从局部微分同胚到整体微分同胚

- B1) $f,g\in C^1(\mathbb{R})$ 是实值函数，我们假设对任意的 $x,y\in \mathbb{R}$，
  都有 $f'(x)\neq g'(y)$。我们定义 $F\colon \mathbb{R}^2 \rightarrow \mathbb{R}^2$：
  \[
  F\colon (x,y) \mapsto (x+y, f(x)+g(y))
  \]

  - 证明，$F$ 的像 $U=F(\mathbb{R}^2)\subset \mathbb{R}^2$ 是开集。

  - 证明，$F\colon  \mathbb{R}^2 \rightarrow  U$ 是微分同胚。

- B2) $\Omega=\{(x,y)\in \mathbb{R}^2|x>0\}\subset \mathbb{R}^2$ 是开集，$(x_0,y_0)\in \Omega$，
  $p\colon \Omega\rightarrow \mathbb{R}$ 是 $C^1$ 的函数，$p_0=p(x_0,y_0)$。我们定义函数
  \[
  F\colon \Omega \rightarrow \mathbb{R}, \ \ (x,y)\mapsto y-y_0+\frac{p(x,y)+p_0}{2}\big(\frac{1}{x}-\frac{1}{x_0}\big).
  \]

  - 证明，存在 $p_0$ 点处的一个开邻域 $U$ 以及 $U$ 上的 $C^1$ 函数 $\phi$，使得
    \[
    F(x,y)=0 ~\text{等价于}~y=\phi(x).
    \]

  - 假设 $p(x,y)=\alpha x y$，$\alpha>0$。
    证明下面极限的存在性并计算它（这个极限的几何意义是什么？）：
    \[
    \lim_{x\rightarrow x_0}\frac{p(x,\phi(x))-p_0}{x-x_0}.
    \]

- B3) 考虑映射
  \[
  \varphi\colon \mathbb{R}^2\rightarrow \mathbb{R}^2,\ \ (x,y)\mapsto \left (\sin\left(\frac{y}{2}\right)-x, \sin\left(\frac{x}{2}\right)-y\right)
  \]

  - 1\) 证明，这是一个光滑的单射。

  - 2\) 计算并证明在任何一个 $(x,y)\in \mathbb{R}^2$ 处，
    映射的Jacobi矩阵 ${\rm Jac}(\varphi)(x,y)$ 都是可逆的。

  - 3\) 证明，对任意的 $(x,y)\in \mathbb{R}^2$，总能找到开集 $U$ 和 $V$，使得 $(x,y)\in U$，
    $\varphi(x,y)\in V$，$\varphi\colon U\rightarrow V$ 是光滑的微分同胚。

  - 4\) 证明，$\varphi$ 的像是闭集。
    （提示：假设 $\{\varphi(x_n,y_n)\}_{n\geqslant 1}$ 是一个收敛的点列，
    证明可以找到 $\{(x_n,y_n)\}_{n\geqslant 1}$ 的子列也收敛）。

  - 5\) 证明，$\varphi$ 是光滑的微分同胚。

  - 6\) 证明，$\varphi^{-1}$ 是Lipschitz的映射，即存在 $C>0$，
    使得对任意的 $(x,y),(x',y')\in \mathbb{R}^2$，我们有
    \[
    \big|\varphi^{-1}(x,y)-\varphi^{-1}(x',y')\big|\leqslant C\sqrt{(x-x')^2+(y-y')^2}.
    \]
    （提示：先证明 $d\varphi^{-1}$ 是有界的）

## C. 实数上 $C^1$ 群结构的分类

对于实数集 $\mathbb{R}$，我们考虑上面的一个 $C^1$ 的群结构 $(\mathbb{R},\star)$。
按照定义，所谓的群结构指的是存在 $\mathfrak{e}\in \mathbb{R}$ 和 $C^1$ 的映射
\[
f\colon \mathbb{R}\times \mathbb{R} \rightarrow \mathbb{R}, \ \  (x,y)\mapsto x\star y,
\]
满足

- a) 对任意的 $x\in \mathbb{R}$，都有 $\mathfrak{e}\star x=x \star \mathfrak{e}=x$；

- b) 对任意的 $x,y,z\in \mathbb{R}$，都有 $(x\star y)\star z =x\star (y\star z)$；

- c) 对任意的 $x\in \mathbb{R}$，存在唯一的 $y\in \mathbb{R}$，
  使得 $x\star y =y \star x=\mathfrak{e}$。

我们习惯上把 $\mathfrak{e}$ 称作是单位元并且把 $c)$ 中的 $y$ 记作是 $x^{-1}$（请不要和倒数搞混）。
我们在 $\mathbb{R}\times\mathbb{R}$ 上用 $(x_1,x_2)$ 作为坐标并用 $\partial_1f$ 和 $\partial_2 f$
来简记 $f$ 的偏导数。
另外，在 $\mathbb{R}$ 上我们所熟知的加法和乘法我们用符号 $+$ 和 $\times$ 来表示。

- C1) 证明，对任意的 $x,y,z\in \mathbb{R}$，我们有
  \[
  (\partial_2 f)(x\star y, \mathfrak{e})=(\partial_2 f)(x, y)\times (\partial_2 f)(y, \mathfrak{e})
  \]

- C2) 证明，对任意的 $x\in \mathbb{R}$，$(\partial_2 f)(x, \mathfrak{e})>0$。

- C3) 假设 $\varphi$ 是 $(\mathbb{R},\star)$ 和 $(\mathbb{R},+)$ 这两个群之间的 $C^1$-群同态，即
  \[
  \varphi\colon  \mathbb{R}\rightarrow \mathbb{R}
  \]
  是 $C^1$ 的并且对于任意的 $x,y \in \mathbb{R}$，我们都有
  \[
  \varphi(x\star y)=\varphi(x)+\varphi(y).
  \]
  证明，存在常数 $a \in \mathbb{R}$，使得
  \[
  \varphi(x)=a\int_\mathfrak{e}^x\frac{d\tau}{(\partial_2 f)(\tau, \mathfrak{e})}.
  \]

- C4) 证明，对任意的 $a\neq 0$，映射
  \[
  \varphi_a\colon  \mathbb{R}\rightarrow \mathbb{R}, \ \ x\mapsto a\int_\mathfrak{e}^x\frac{d\tau}{(\partial_2 f)(\tau, \mathfrak{e})},
  \]
  是从 $(\mathbb{R},\star)$ 到 $(\mathbb{R},+)$ 的 $C^1$-群同构，
  即 $\varphi_a$ 是群同态并且是 $C^1$-的微分同胚（它的逆仍然是群同态）。

- C5) 证明，$\mathbb{R}$ 上任何一个 $C^1$ 的群结构 $(\mathbb{R},\star)$ 都是交换的，
  即对任意的 $x,y \in \mathbb{R}$，$x\star y = y\star x$。

- C6) 证明，映射
  \[
  f\colon \mathbb{R}^2\times \mathbb{R}^2 \rightarrow \mathbb{R}^2, \ \  \big((x_1,y_1),(x_2,y_2)\big) \mapsto x\star y =(x_1+x_2,y_1+e^{x_1}y_2),
  \]
  是 $\mathbb{R}^2$ 上的 $C^1$ 的群结构 $(\mathbb{R}^2,\star)$，它并不交换。

## D. 一个矩阵问题的研究

假设 $\mathbf{M}_n$ 为 $n\times n$ 的实系数矩阵的全体。对于 $A\in \mathbf{M}_n$，我们定义
\[
\|A\|=\sup_{x\in \mathbb{R}^n, x\neq 0}\frac{|A\cdot x|}{|x|}.
\]
其中 $|x|=\sqrt{|x_1|^2+\cdots+|x_n|^2}$。假设 $\lambda_1,\cdots,\lambda_n$ 是 $A$ 的特征值。

- D1) 试证明，$\|A\|=\sup_{k=1,\cdots,n}|\lambda_k|$。
  进一步证明这是一个范数并且和之前定义的 $\|\cdot \|_1$，
  $\|\cdot \|_2$ 和 $\|\cdot \|_\infty$ 都等价。

- D2) 令 $\mathbf{GL}_n(\mathbb{R})$ 是 $\mathbf{M}_n$ 中可逆矩阵的全体。
  证明，$\mathbf{GL}_n(\mathbb{R})$ 是 $\mathbf{M}_n$（这是一个 $\mathbb{R}^{n^2}$）中的开集并且映射
  \[
  {\rm inv}\colon  \mathbf{GL}_n(\mathbb{R}) \rightarrow \mathbf{GL}_n(\mathbb{R}), \ \ A\mapsto A^{-1}
  \]
  是 $C^1$ 的映射。进一步证明，对于 $X \in \mathbf{M}_n$，
  \[
  d\,{\rm inv}(A)(X)=-A^{-1}\cdot X \cdot A^{-1},
  \]
  （你可以将 $d\,{\rm inv}(A)$ 想象成是 $n^2\times n^2$ 的矩阵，为什么）

- D3) 我们定义立方运算 $\mathcal{C}\colon \mathbf{M}_n\rightarrow \mathbf{M}_n, \ A\mapsto A^3$。
  证明 $\mathcal{C}$ 是连续可微的并计算它的微分 $d\mathcal{C}(A)$。
  将 $d\mathcal{C}(A)$ 视为是 $n^2\times n^2$ 的矩阵，进一步证明
  \[
  \|d\mathcal{C}(A)-\mathbf{I}_{n^2\times n^2}\|\leqslant 6\|A-\mathbf{I}_{n\times n}\|+ 3\|A-\mathbf{I}_{n\times n}\|^2.
  \]

- D4) 令
  $B_{\frac{1}{3}}(\mathbf{I}_{n\times n})=\{X\in \mathbf{M}_n| \|X-\mathbf{I}_{n\times n}\|<\dfrac{1}{3}\}$。
  证明，
  $\mathcal{C}\big(B_{\frac{1}{3}}(\mathbf{I}_{n\times n})\big)$ 是 $\mathbf{M}_n$ 中的开集并且
  \[
  \mathcal{C}\colon B_{\frac{1}{3}}(\mathbf{I}_{n\times n})\rightarrow \mathcal{C}\big(B_{\frac{1}{3}}(\mathbf{I}_{n\times n})\big)
  \]
  是微分同胚。
  （提示：为了证明 $\mathcal{C}$ 是单射，
  可以考虑 $\mathcal{D}(A)=\mathcal{C}(A)-3A$ 并证明
  $\|\mathcal{D}(A)-\mathcal{D}(B)\|\leqslant \dfrac{7}{3}\|A-B\|$）

- D5) 我们定义平方运算 $\Theta\colon \mathbf{M}_n\rightarrow \mathbf{M}_n, \ A\mapsto A^2$。
  证明 $\Theta$ 是连续可微的并计算它的微分 $d\Theta(A)$。
  据此证明，存在 $\varepsilon>0$，当 $\|B-\mathbf{I}_{n\times n}\|<\varepsilon$ 时，
  存在 $A\in \mathbf{M}_n$，使得 $A^2=B$。

- D6) 假设 $n=2$，$U=\bigl(\begin{smallmatrix}1 & 0 \\ 0 & 1\end{smallmatrix}\bigr)$，
  是否存在 $\mathbf{I}_{2\times 2}$ 的邻域 $\mathcal{I}\subset \mathbf{M}_2$，
  $U$ 的邻域 $\mathcal{U}\subset \mathbf{M}_2$ 以及连续可微的映射
  $\Psi\colon  \mathcal{I}\rightarrow \mathcal{U}$，
  使得 $\Psi(\mathbf{I}_{2\times 2})=U$ 并且对任意的 $A\in \mathcal{I}$，
  都有 $\Psi(A)^2=A$？（提示：
  考虑 $H=\bigl(\begin{smallmatrix}0 & 1 \\ 1 & 1\end{smallmatrix}\bigr)$ 并计算 $d\Theta(U)H$）

## E. 利用反函数定理来证明一个和隐函数定理相关的命题

令 $E=\mathbb{R}^m$，$F=\mathbb{R}^n$，其中 $m,n\geqslant 1$。我们考虑如下的连续可微的映射
\[
f\colon F\times E\rightarrow E, (\lambda, x)\mapsto f(\lambda,x).
\]
我们假设存在非负常数 $k<1$，使得对任意的 $(\lambda, x)\in F\times E$，
我们都有 $\|d_2f(\lambda,x)\|<k$，其中，我们认为 $\lambda$ 是固定的，
$d_2$ 代表对后面 $E$ 的变量求微分。

- E1) 利用Banach不动点定理证明，对任意的 $\lambda \in F$，存在唯一的 $x_\lambda\in E$，
  使得 $f(\lambda, x_\lambda)=x_\lambda$。这定义出映射：
  \[
  \varphi\colon  F\rightarrow E, \lambda \mapsto x_\lambda.
  \]

- E2) 选定 $\lambda_0\in F$，令 $x_0=\varphi(\lambda_0)$，证明，
  存在 $\lambda_0$ 在 $F$ 中的邻域 $U$ 和 $C^1$ 的映射 $\psi\colon U\rightarrow E$，
  使得对任意的 $\lambda\in U$，我们都有 $f(\lambda, \psi(\lambda))=\psi(\lambda)$。
  （提示：考虑映射 $g\colon F\times E\rightarrow E, (\lambda, x)\mapsto x- f(\lambda,x)$。）

- E3) 证明，第一步定义的 $\varphi$ 是 $C^1$ 的并计算它的微分。

- E4) 证明，对任意的 $t\in \mathbb{R}$，
  存在唯一的 $C^1$ 映射 $t\mapsto (x(t),y(t))\in \mathbb{R}^2$，使得
  \[
  \begin{cases}
  x&=\frac{1}{2}\sin(x+y)+t-1,\\
  y&=\frac{1}{2}\cos(x-y)-t+\frac{1}{2}.
  \end{cases}
  \]
  进一步证明 $(x(t),y(t))=(0,0)$ 当且仅当 $t=1$ 并计算 $x'(1)$ 和 $y'(1)$。

::: -remark [寄语]
Technical skill is mastery of complexity while creativity is mastery of simplicity.

<align right>
——E. C. Zeeman，*Catastrophe Theory*，1977
</align>
:::
