---
title: 作业：子流形与零测集，Stieltjes 测度，Borel–Cantelli 定理
---

## 课堂基本概念：$\sigma$-代数与可测映射

A0) 给定映射 $f\colon X\rightarrow Y$，验证如下集合论的基本事实：
    对于可数个（这个条件没有必要）$Y$ 的子集 $\{B_i\}_{i\geqslant 1}$，我们都有
    \[
    f^{-1}(\bigcup_{i\geqslant 1} B_i)=\bigcup_{i\geqslant 1} f^{-1}(B_i),\ \ f^{-1}(\bigcap_{i\geqslant 1} B_i)=\bigcap_{i\geqslant 1} f^{-1}(B_i).
    \]

A1) 假设 $U_1\in \mathbb{R}^m$，$U_2\in \mathbb{R}^n$ 是开集，$F_1\in \mathbb{R}^m$，
    $F_2\in \mathbb{R}^n$ 是闭集。证明，在 $\mathbb{R}^{m+n}$ 中，
    \[
    U_1\times U_2=\big\{(x,y)\bigm| x\in U_1, y\in U_2\big\}, \ \ F_1\times F_2=\big\{(x,y)\bigm| x\in F_1, y\in F_2\big\}
    \]
    分别也是开集和闭集。

A2) $J$ 是一个指标集。如果对每个 $j\in J$，$\mathcal{M}_j$ 都是 $X$ 上的单调类，那么
    \[
    \mathcal{M} \coloneqq\bigcap_{j\in J}\mathcal{M}_j
    \]
    也是 $X$ 上的单调类。

A3) $(Y,\mathcal{B})$ 是可测空间，$X$ 是集合，$f\colon X\rightarrow Y$ 是映射。证明，
    \[
    f^*\mathcal{B}=f^{-1}(\mathcal{B})=\{f^{-1}(B)\mid B\in \mathcal{B}\}
    \]
    是 $X$ 上的 $\sigma$-代数。利用这个结论证明如下的结论：如果 $Y'\subset Y$ 是子集，那么，
    \[
    \mathcal{B}\Big|_{Y'}=\big\{B\cap Y' \big|B\in \mathcal{B}\big\}
    \]
    是 $Y'$ 上的 $\sigma$-代数（我们称它为 $\mathcal{B}$ 在 $Y'$ 上的**限制**）。

A4) $(X,\mathcal{A})$ 是可测空间，$f$ 和 $g$ 是 $X$ 上的可测函数。
    证明，$|f|$ 是可测映射函数；令 $X_g=\{x\in X\mid g(x)\neq 0\}$，证明，
    函数 $\dfrac{f}{g}$ 是 $\left(X_g,\mathcal{A}\Bigm|_{X_g}\right)$ 上的可测函数。

A5) $(X,\mathcal{A})$ 是可测空间，$f\colon X\rightarrow Y$ 是映射，令
    \[
    \mathcal{B}=\big\{B\subset Y \bigm| f^{-1}(B)\in \mathcal{A}\big\},
    \]
    证明，$\mathcal{B}$ 为 $\sigma$-代数。

A6) $(X_1,d_1)$ 和 $(X_2,d_2)$ 是距离空间，$(X,d)$ 是它们的乘积距离空间。证明，单位映射
    \[
    \iota\colon (X,\mathcal{B}_X)\rightarrow (X,\mathcal{B}_{X_1} \otimes \mathcal{B}_{X_2}), \ \ \ x  \mapsto x
    \]
    是可测的。进一步证明 $\mathcal{B}_{X_1}\otimes \mathcal{B}_{X_2}\subset \mathcal{B}_X$。

A7) 给定测度空间 $(X,\mathcal{A},\mu)$，$\{A_i\}_{i\geqslant 1}$ 是 $\mathcal{A}$ 中下降的序列。
    假设对某个 $i_0$ 有 $\mu(A_{i_0})<\infty$，试证明
    \[
    \mu(\lim_{i\rightarrow \infty} A_i) = \lim_{i\rightarrow \infty} \mu(A_i).
    \]

A8) 给定测度空间 $(X,\mathcal{A},\mu)$ 和可测空间 $(Y,\mathcal{B})$ 以及它们之间的可测映射
    $f\colon X\rightarrow Y$，对每个 $B\in \mathcal{B}$，我们定义
    \[
    (f_*\mu)(B)\coloneqq\mu\bigl(f^{-1}(B)\bigr).
    \]
    证明，$f_*\mu$ 是 $(Y,\mathcal{B})$ 上的测度。
    我们将 $f_*\mu$ 称作是 **$\mu$ 在 $f$ 下的像测度**。

A9) $(X,\mathcal{A})$ 是可测空间，
    给定 $X$ 中可数个点 $\{x_k\}_{k\geqslant 1}$ 和正数的序列 $\{a_k\}_{k\geqslant 1}$。
    对任意的 $A\in \mathcal{A}$，我们定义
    \[
    \mu(A)=\left(\sum_{k=1}^\infty a_k \delta_{x_k}\right)(A)=\sum_{k=1}^\infty a_k \delta_{x_k}(A).
    \]
    其中，$\delta_{x_k}$ 是 $x_k$ 点定义的Dirac测度。证明，$\mu$ 是 $(X,\mathcal{A})$ 上的测度。

A10) 给定 $S\in \mathcal{A}(\mathbb{R}^n)$，$S$ 有多种方式写成两两不交的方块的并，例如
     \[
     S=C_1\cup C_2 \cup \cdots \cup C_m, \ \ S=C'_1\cup C'_2 \cup \cdots \cup C'_{m'}.
     \]
     证明，
     \[
     \sum_{i\leqslant m} m(C_i)=\sum_{i'\leqslant m'} m(C'_{i'}).
     \]
     （这验证了课堂上关于 $m\colon\mathcal{A}(\mathbb{R}^n)\rightarrow [0,\infty]$
     是良好定义的论断）

- A11)（经典必做题目）对任意正交矩阵 $R \in \mathbf{O}(n)$，我们定义 $\mathbb{R}^n$ 上的旋转变换：
  \[
  R\colon \mathbb{R}^n \rightarrow \mathbb{R}^n, \ \ x \mapsto R\cdot x.
  \]
  其中，$R\cdot x$ 是矩阵和列向量的乘法。
  那么，我们有 $R_* m =m$，即对任意的 $A\in \mathcal{B}(\mathbb{R}^n)$，
  我们有 $m\left(R(A)\right)= m(A)$。

- A12)（必须熟记的结论：
  紧集的区间套原理）假设 $\{K_i\}_{i\geqslant 1}$ 是 $\mathbb{R}^n$ 中一列下降的紧集并且
  $\displaystyle\cap_{i\geqslant 1}K_i=\emptyset$。
  证明，存在 $i_0$，使得当 $i\geqslant i_0$ 时，$K_i=\emptyset$。

A13) 对于 $\mathbb{R}^n$，我们用Euclid距离所定义的拓扑。证明，
     \[
     \mathcal{B}(\mathbb{R}^n)=\underbrace{\mathcal{B}(\mathbb{R})\otimes \mathcal{B}(\mathbb{R})\otimes \cdots \otimes  \mathcal{B}(\mathbb{R})}_{n~\text{个}}.
     \]

## 可测函数

证明如下关于可测函数的结论，其中我们假设 $ (X,\mathcal{A})$ 是可测空间。

- B1)（可测函数的极限也可测）
  给定实值可测函数的序列 $\{f_i\}_{i\geqslant 1}$，其中对于每个 $i$，
  $f_i\colon X \rightarrow \mathbb{R}$ 是可测函数。
  假设该序列逐点收敛，即对任意的 $x\in X$，
  都有 $\displaystyle\lim_{i\rightarrow \infty}f_i(x) =f(x)$。
  对任意的 $c\in \mathbb{R}$，$n\in \mathbb{Z}_{\geqslant 1}$，我们令
  \[
  U(c)=(c,\infty), \ \ U(c)_n =(c+\frac{1}{n},\infty).
  \]
  证明，
  \[
  f^{-1}(U(c))=\bigcup_{n=1}^\infty f^{-1}(U(c)_n)=\bigcup_{n=1}^{\infty}\bigcup_{m=1}^\infty \bigcap_{q\geqslant m} f_q^{-1}(U(c)_n),
  \]
  据此证明 $f$ 是可测的。

B2) 我们在 $\mathbb{R}$ 配备Borel-代数。
    证明，如果 $f\colon\mathbb{R}\rightarrow \mathbb{R}$ 是单调函数，那么 $f$ 是可测的。

B3) 假设 $f\colon(X,\mathcal{A})\rightarrow \mathbb{R}$ 和
    $g\colon(X,\mathcal{A})\rightarrow \mathbb{R}$ 均为可测函数，我们定义
    \[
    \begin{aligned}
    A_<&=\big\{x\in X\bigm| f(x)<g(x)\big\},\\
    A_>&=\big\{x\in X\bigm| f(x)>g(x)\big\},\\
    A_=&=\big\{x\in X\bigm| f(x)=g(x)\big\}.
    \end{aligned}
    \]
    证明，$A_<,A_>,A_=\in \mathcal{A}$。

B4) 假设 $\{f_n\colon(X,\mathcal{A})\rightarrow \mathbb{R}\}_{n\geqslant 1}$ 是一列可测实值函数，
    我们定义
    \[
    \begin{aligned}
    A_\infty&=\big\{x\in X\bigm|\lim_{n\rightarrow \infty}f_n(x)=+\infty\big\}, \\
    A_{b}&=\big\{x\in X\bigm|\text{数列}~\{f_n(x)\}_{n\geqslant b}~\text{是有界的} \big\}.
    \end{aligned}
    \]
    证明，$A_\infty,A_b \in \mathcal{A}$。

## 子流形与零测集

考虑 $E\subset \mathbb{R}^n$，如果对任意的 $\varepsilon>0$，存在可数个方块 $C_k$，使得
\[
E\subset \bigcup_{k=1}^\infty R_k \ \ \text{并且} \ \  \sum_{k=1}^\infty |R_k|<\varepsilon,
\]
我们就称 $E$ 是（$\mathbb{R}^n$ 中的）**零测集**。（这个定义没用到我们刚刚学过的测度理论）

C1) 证明，可数个 $\mathbb{R}^n$ 中的零测集的并还是 $\mathbb{R}^n$ 中的零测集。

C2) 举例说明，$\mathbb{R}^n$ 中的零测集可以是稠密的。

C3) 证明，$\mathbb{R}^n$ 中零测集在微分同胚下的像也是零测集，
    即若 $\Phi\colon\mathbb{R}^n \rightarrow \mathbb{R}^n$ 是微分同胚，
    $E\subset \mathbb{R}^n$ 是 $\mathbb{R}^n$ 中的零测集，
    那么 $\Phi(E)$ 也是 $\mathbb{R}^n$ 中的零测集。

C4) 假设 $M\subset \mathbb{R}^n$ 是子流形并且 $\operatorname{codim}M\geqslant 1$。
    证明，$M$ 是 $\mathbb{R}^n$ 中的零测集。

C5) 如果 $f\colon\mathbb{R}\rightarrow \mathbb{R}$ 是连续函数，
    我们用 $\Gamma_f =\{(x,y)\in \mathbb{R}^2\mid y = f(x)\}$ 表示它的图像。
    证明，$\Gamma_f$ 是 $\mathbb{R}^2$ 中的零测集。

- C6)* 给定 $n$ 个变元的实系数非零多项式 $F(x_1,\cdots,x_n)$。
  证明，$F^{-1}(0)$ 是 $\mathbb{R}^n$ 中的零测集。

## Carathéodory测度扩张定理应用举例：Stieltjes 测度的构造

如果 $(\mathbb{R}, \mathcal{B}(\mathbb{R}))$ 上的测度 $\mu$ 在所有紧集上都有限，
即对任意的有界闭集 $K\subset \mathbb{R}$，$\mu(K)<\infty$，我们就称 $\mu$ 为Stieltjes测度。
我们要刻画 $(\mathbb{R}, \mathcal{B}(\mathbb{R}))$ 上的所有Stieltjes测度。

D1) 假设 $\mu$ 为Stieltjes测度。如果点 $x\in \mathbb{R}$ 满足 $\mu(\{x\})>0$，
    我们就称 $x$ 是 $\mu$ 的一个**原子**。证明，$\mu$ 只有可数个原子。

D2) 假设 $\mu$ 为Stieltjes测度，我们定义 $\mathbb{R}$ 上的函数 $F$：
    \[
    F(x)=\begin{cases}
    \mu([0,x)),\ &x\geqslant 0;\\
    -\mu([x,0)),\ &x< 0.
    \end{cases}
    \]
    证明，$F$ 是 $\mathbb{R}$ 上增函数并且是左连续的。

D3) 证明，$x\in \mathbb{R}$ 是 $F$ 的不连续点当且仅当 $x$ 是原子。据此，给出D1)的一个新证明。

D4) 证明，任给左连续的增函数 $F(x)$，
    存在唯一的 $(\mathbb{R}, \mathcal{B}(\mathbb{R}))$ 上的测度 $\mu$，使得
    \[
    \mu([a,b))=F(b)-F(a).
    \]

D5) 证明，上述构造的 $\mu$ 是Stieltjes测度。

（这个习题把 $(\mathbb{R}, \mathcal{B}(\mathbb{R}))$ 上的Stieltjes测度的空间等价为 $\mathbb{R}^1$
上的左连续的增函数的空间，同学们应该对照上学期所学的Stieltjes积分）

## 测度理论的其它有趣应用举例一：Borel–Cantelli定理和无理数的逼近

给定 $X$ 中可数个子集 $\{A_n\}_{n\geqslant 1}$，我们定义：
\[
A^{\infty} =\{x\mid x~\text{属于无穷多个}~A_n\},\ \ A^{\infty+} =\{x\mid\text{只有有限多个 $A_n$，使得}~x\notin A_n\}.
\]
很明显，
我们有 $\displaystyle \bigcap_n A_n \subset A^{\infty+} \subset A^{\infty} \subset \bigcup_n A_n$。

E1) 证明，$\displaystyle A^{\infty}=\bigcap_{n=1}^\infty \bigcup_{m\geqslant n} A_m$，
    $\displaystyle A^{\infty+}=\bigcup_{n=1}^\infty \bigcap_{m\geqslant n} A_m$。

E2) 证明，如果序列 $A_n$ 是上升或者下降的，
    那么 $\displaystyle A^{\infty}=A^{\infty+}=\lim_{n\rightarrow \infty} A_n$。

E3) 令 $B_n = (A_n)^c = X-A_n$。
    证明，$B^\infty = (A^{\infty+}\bigr)^c$ 和 $A^\infty = (B^{\infty+}\bigr)^c$。

从此往后，假设 $(X,\mathcal{A},\mu)$ 是测度空间并且 $\{A_n\} \subset \mathcal{A}$。

E4) 证明，$A^{\infty}\in \mathcal{A}$ 和 $A^{\infty+}\in \mathcal{A}$。

E5) 证明如下不等式：
    \[
    \lim_{n\rightarrow \infty} \mu(\bigcap_{m\geqslant n}A_m) = \mu(A^{\infty+})\leqslant \mu(A^{\infty}) \leqslant \lim_{n\rightarrow \infty}\sum_{m\geqslant n} \mu(A_m).
    \]

E6) 证明 **Borel–Cantelli 定理**：
    如果 $\{A_n\}\subset \mathcal{A}$ 满足 $\displaystyle \sum_{n}\mu(A_n)<\infty$，
    那么对几乎所有的 $x\in X$，它只出现在有限个 $A_n$ 中，即出现在无限多个 $A_n$ 中的点的测度是零：
    $\mu(A^{\infty})=0$。

E7) 证明，如果存在 $n_0$ 使得 $\displaystyle \mu(\bigcup_{m\geqslant n_0}A_m)<\infty$，那么有
    \[
    \mu(A^{\infty}) = \lim_{n\rightarrow \infty}\mu(\bigcup_{m\geqslant n}A_m).
    \]

E8) 证明（Dirichlet的一个定理），对每个实数 $\alpha$，有无限多不同的有理数 $\dfrac{p}{q}$，使得
    \[
    |\alpha-\frac{p}{q}|<\frac{1}{q^2}.
    \]
    （提示：用抽屉原理，请查阅文献。
    Hurwitz对于上述逼近有一个改进，可以证明有无限多不同的有理数 $\dfrac{p}{q}$，
    使得 $|\alpha-\dfrac{p}{q}|<\dfrac{1}{\sqrt{5}q^2}$。我们下面要说明这个逼近的精度是最好的。）

E9) 我们用 $I$ 表示开区间 $(0,1)$，用 $m$ 表示 $I$ 上的Lebesgue测度。
    假设正实数的序列 $\{a_{q}\}_{q\geqslant 1}$ 满足 $\displaystyle\sum_{q}\frac{1}{a_q}<\infty$。
    对每个 $q$，定义 Borel 集
    \[
    A_q =I\cap\Bigl(\bigcup_{0\leqslant p\leqslant q}\bigl(\frac{p}{q}-\frac{1}{q\cdot a_q}, \frac{p}{q}+\frac{1}{q\cdot a_q}\bigr)\Bigr).
    \]
    证明，$\displaystyle \sum_{q}m(A_q)<\infty$。

E10) 序列 $\{a_{q}\}_{q\geqslant 1}$ 如上所述。
     令
     $D=\big\{\alpha\in I \bigm|\text{存在无穷多个有理数~$\dfrac{p}{q}$，使得}~|\alpha-\dfrac{p}{q}|<\dfrac{1}{q\cdot a_q}\big\}$。
     证明，$D$ 是零测集。

E11) 任给 $\varepsilon>0$ 和 $a>0$。
     考虑满足下面性质的实数 $\alpha$：存在无穷多个有理数 $\dfrac{p}{q}$，
     使得 $|\alpha-\dfrac{p}{q}|<\dfrac{a}{q^{2+\varepsilon}}$。证明，这样的实数的测度为零。
     （这表明 Dirichlet 定理给出的逼近在某种意义上是最佳的）

::: -remark [寄语]
I remember one occasion when I tried to add a little seasoning to a review, but I wasn't allowed to. The paper was by Dorothy Maharam, and it was a perfectly sound contribution to abstract measure theory. The domains of the underlying measures were not sets but elements of more general Boolean algebras, and their range consisted not of positive numbers but of certain abstract equivalence classes. My proposed first sentence was: “The author discusses valueless measures in pointless spaces.”

<align right>
—— *I want to be a Mathematician* by Paul R. Halmos
</align>
:::
