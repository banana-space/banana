---
title: 习题课：Riemann 积分的定义1
notices:
  - name: 问题
    items:
      - R15) 中的“$f,g \in \mathcal{E}(P)$”似乎应为 $f,g \in \mathcal{R}(P)$。
      - R20) 的结论中积分区域写作 $Q$，R21) 中函数定义在 $Q$ 上而上下积分写在 $P$ 上，似乎都应统一为矩形 $P$。
---

我们在课上从测度的观点定义了积分，这次习题目的是尽可能还原历史Riemann积分的（严格）定义。
我们不假设任何的测度理论。同学们与课堂内容作比较，就能体会为什么抽象积分实际上更简单更有效率。

::: remark* (寄语)
C'est pour la résolution de ces problèmes, et non par amour des complications, que j'ai introduit dans ce Livre une définition de l'intégrale plus générale que celle de Riemann et comprenant celle-ci comme cas particulier.

（此书新引入的积分定义比Riemann积分更广泛并且把它作为一个特例，这是为了要解决存在的那些问题，
而不是因为我们更偏爱复杂的对象。）

<align right>
Henri Lebesgue, *Leçons sur l'intégration et la recherche des fonctions primitives. Préface.*
</align>
:::

## 矩形上的Riemann积分

所谓 $\mathbb{R}^n$ 上的一个**矩形**$P$ 指的是形如 $[a_1,b_1]\times\cdots [a_n,b_n]$
的集合（都是有限区间）。
该矩形 $P$ 的内部指的是集合 $(a_1,b_1)\times\cdots (a_n,b_n)$，用 $\mathring{P}$ 表示；
它的边界定义为 $\partial P=P-\mathring{P}$。我们总假设矩形的内部是非空的。

对每个 $1\leqslant i\leqslant n$，给定 $[a_i,b_i]$ 的一个分划 $\sigma_i\in \mathcal{S}([a_i,b_i])$，
即给定一串数
\[
a_i=a_{i,0}<a_{i,1}<\cdots<a_{i,n_i-1}<a_{i,n_i}=b_i.
\]
我们称
\[
P_{\sigma_1,\cdots,\sigma_n}=\left\{[a_{\ell_1},a_{\ell_1+1}]\times\cdots \times [a_{\ell_n},a_{\ell_n+1}]\bigm| 0\leqslant \ell_1\leqslant n_1-1,\cdots,  0\leqslant \ell_n \leqslant n_n-1\right\}.
\]
是 $P$ 的一个（由 $(\sigma_1,\cdots,\sigma_n)$ 所定义的）**分划**。
很显然，$P$ 的一个分划是一些更小的矩形的并。
给定 $P$ 的两个分划 $P_{\sigma_1,\cdots,\sigma_n}$ 和 $P_{\sigma'_1,\cdots,\sigma'_n}$，
如果对于每个 $1\leqslant i \leqslant n$，
我们都有 $\sigma_i\prec \sigma'_i$（请参考上学期关于分划加细的概念），
我们就称 $P_{\sigma_1,\cdots,\sigma_n}$ 是 $P_{\sigma'_1,\cdots,\sigma'_n}$ 的**加细**并记作
$P_{\sigma_1,\cdots,\sigma_n} \prec P_{\sigma'_1,\cdots,\sigma'_n}$。
我们把 $P$ 的所有分划的全体用 $\mathcal{S}(P)$ 来表示。

如果不加任何说明，下面的字母 $P$ 代表一个给定的矩形。

R1) 给定矩形 $P=[a_1,b_1]\times\cdots [a_n,b_n]$，它的体积定义为
    \[
    m(P)=\displaystyle \prod_{1\leqslant i\leqslant n}(b_i-a_i).
    \]
    任给 $P$ 的分划 $P_{\sigma_1,\cdots,\sigma_n}$，证明，
    \[
    m(P)=\sum_{Q\in P_{\sigma_1,\cdots,\sigma_n}} m(Q).
    \]

R2) 给定 $A\subset \mathbb{R}^n$，如果存在有限个矩形 $P_1,\cdots, P_m$，
    使得 $A=\displaystyle \bigcup_{i\leqslant m}P_i$ 并且对于 $i\neq j$，
    $\mathring{P_i}\cap \mathring{P_j}=\emptyset$，我们就称 $A$ 是**可铺的**。
    对于可铺集 $A$，我们定义
    \[
    m(A)=\displaystyle \sum_{i\leqslant m}m(P_i).
    \]
    证明，$m(A)$ 的选取不依赖于上述 $\{P_i\}_{i\leqslant m}$ 的选取。

    （我们在乘积空间中构造矩形上的测度，也有类似的步骤）

R3) 证明，有限个可铺集的交和并都是可铺集。

    （这一点与 $\sigma$-代数或者代数类似）

R4) $A$ 和 $B$ 是可铺集。证明，
    \[
    \begin{aligned}
    &m(A\cap B)+m(A\cup B)=m(A)+m(B), \\
    &m(A-\mathring{B})=m(A)-m(A\cap B),
    \end{aligned}
    \]
    其中，你需要先说明 $A-\mathring{B}$ 也是可铺集。

    （这一点与测度或者加性函数类似）

R5) 任给有界函数（可以在赋范线性空间中取值）
    \[
    f\colon P\rightarrow \mathbb{C},
    \]
    如果存在 $P$ 的分划 $P_{\sigma_1,\cdots,\sigma_n}$，
    使得对任意的 $Q\in P_{\sigma_1,\cdots,\sigma_n}$，
    函数 $f$ 在 $Q$ 的内部 $\mathring{Q}$ 上的限制是常数，
    我们就称 $f$ 是 $P$ 上的**阶梯函数**或者**简单函数**。
    $P$ 上阶梯函数的全体记作 $\mathcal{E}(P)$。

    任给 $f\in \mathcal{E}(P)$，
    满足阶梯函数的定义中的分划 $P_{\sigma_1,\cdots,\sigma_n}$ 称作是一个*和 $f$ 相容的分划*。
    证明，任意一个和 $f$ 相容的分划，它的加细也是和 $f$ 相容的。
    进一步证明，$\mathcal{E}(P)$ 是 $\mathbb{C}$-线性空间。

R6) 假设 $P$ 的分划 $P_{\sigma_1,\cdots,\sigma_n}$ 与 $f\in \mathcal{E}(P)$ 相容，
    对于 $Q\in P_{\sigma_1,\cdots,\sigma_n}$，按照定义，$f$ 在 $\mathring{Q}$ 上的取值是常数，
    我们将这个常数记成 $f(\mathring{Q})$。定义
    \[
    \int_P f=\sum_{Q\in P_{\sigma_1,\cdots,\sigma_n}}f(\mathring{Q})m(Q).
    \]
    证明，
    $\displaystyle \int_P f$ 的定义不依赖于与之相容的分划 $P_{\sigma_1,\cdots,\sigma_n}$ 的选取。

R7) 证明，映射
    \[
    \displaystyle \int_P\colon \mathcal{E}(P)\rightarrow \mathbb{C}
    \]
    是 $\mathbb{C}$-线性映射。

R8) 证明，对任意的 $f\in\mathcal{E}(P)$，我们有
    \[
    \displaystyle \Big|\int_P f \Big|\leqslant \int_P \big|f\big|.
    \]
    如果 $f,g \in \mathcal{E}(P)$ 是实值的并且对任意的 $x\in P$，都有 $f(x)\leqslant g(x)$，证明，
    \[
    \displaystyle \int_P f\leqslant \int_P g.
    \]

R9) 任给简单函数 $f\in \mathcal{E}(P)$，
    任给 $P$ 的分划 $P_{\sigma_1,\cdots,\sigma_n}$（未必与 $f$ 相容）。
    证明，对每个 $Q\in P_{\sigma_1,\cdots,\sigma_n}$，
    $f$ 在 $Q$ 上的限制 $f\big|_Q \in \mathcal{E}(Q)$ 并且
    \[
    \int_P f = \sum_{Q\in P_{\sigma_1,\cdots,\sigma_n}} \int_{Q}f\big|_Q.
    \]

R10) （矩形区域上Riemann积分的定义）$f\colon P\rightarrow \mathbb{C}$
     是映射（可以在赋范线性空间中取值）证明，下面的两个命题是等价的：

     - 1\) 对任意 $\varepsilon>0$，存在 $\Phi_\varepsilon,\Psi_\varepsilon \in \mathcal{E}(P)$，
       使得对任意的 $x\in P$，有
       \[
       \displaystyle \big|f(x)-\Phi_\varepsilon(x)\big|\leqslant \Psi_\varepsilon(x)
       \]
       并且
       \[
       \displaystyle \int_{P}\Psi_\varepsilon \leqslant \varepsilon;
       \]

     - 2\) 存在函数序列
       $\{\phi_k\}_{k\geqslant 1},\{\psi_k\}_{k\geqslant 1} \subset \mathcal{E}(P)$，
       使得对任意的 $x\in P$，我们都有
       \[
       \displaystyle \big|f(x)-\phi_k(x)\big|\leqslant \psi_k(x)
       \]
       并且
       \[
       \displaystyle \lim_{k\rightarrow \infty}\int_{P}\psi_k=0.
       \]

     如果一个函数 $f$ 满足上述条件之一，我们就称 $f$ 在 $P$ 上是**Riemann可积的**函数。
     我们用 $\mathcal{R}(P)$ 表示 $P$ 上所有Riemann可积的函数。

     （请与1维Riemann积分的定义做比较）

R11) 证明，如果 $f\in \mathcal{R}(P)$，那么 $f$ 是有界函数。

R12) 证明，$\mathcal{R}(P)$ 是 $\mathbb{C}$-线性空间。
     进一步证明，如果 $f,g\in \mathcal{R}(P)$，那么它们的乘积 $f\cdot g \in \mathcal{R}(P)$。

     （如果 $f,g$ 在Lebesgue的意义下可积分，我们不一定有 $f\cdot g$ 还是Lebesgue意义下可积的）

R13) 假设 $f\in \mathcal{R}(P)$，
     我们任选Riemann可积函数的定义（R10)）2)中的序列
     $\{\phi_k\}_{k\geqslant 1},\{\psi_k\}_{k\geqslant 1} \subset \mathcal{E}(P)$ 并定义
     \[
     \int_P f = \lim_{k\rightarrow \infty} \int_P \phi_k.
     \]
     证明，上述极限存在并且不依赖于序列的选取。从而，我们定义了积分映射
     \[
     \displaystyle \int_P\colon \mathcal{R}(P)\rightarrow \mathbb{C}.
     \]

R14) 证明，
     映射 $\displaystyle \int_P\colon \mathcal{R}(P)\rightarrow \mathbb{C}$ 是
     $\mathbb{C}$-线性映射。

     （这里线性的证明比抽象积分简单，原因是我们可以用序列逼近函数，实际上，在抽象积分的理论中，
     我们要先建立Beppo Levi定理，从而也可以用简单函数列的积分逼近函数的积分）

R15) 证明，对任意的 $f\in\mathcal{R}(P)$，我们有
     \[
     \displaystyle \Big|\int_P f \Big|\leqslant \int_P \big|f\big|.
     \]
     如果 $f,g \in \mathcal{E}(P)$ 是实值的并且对任意的 $x\in P$，都有 $f(x)\leqslant g(x)$，那么
     \[
     \displaystyle \int_P f\leqslant \int_P g.
     \]

R16) （区间可加性）任给函数 $f\colon P\rightarrow \mathbb{C}$ 和 $P$ 的分划
     $P_{\sigma_1,\cdots,\sigma_n}$。证明，如下两个叙述是等价的：

     - $f\in \mathcal{R}(P)$；

     - 对每个 $Q\in P_{\sigma_1,\cdots,\sigma_n}$，
       $f$ 在 $Q$ 上的限制 $f\big|_Q \in \mathcal{R}(Q)$。

     如果上面之一成立，证明，
     \[
     \int_P f = \sum_{Q\in P_{\sigma_1,\cdots,\sigma_n}} \int_{Q}f\big|_Q.
     \]

R17) （Riemann和）任给 $P$ 的分划 $\sigma=P_{\sigma_1,\cdots,\sigma_n}$，
     其中对任意的 $i\leqslant n$，$\sigma_i\in \mathcal{S}([a_i,b_i])$ 并且对应着
     \[
     a_i=a_{i,0}<a_{i,1}<\cdots<a_{i,n_i-1}<a_{i,n_i}=b_i.
     \]

     我们定义分划的 $\sigma$步长$|\sigma|$ 为
     \[
     |\sigma|=\displaystyle \sup_{1\leqslant i\leqslant n,\atop \\ 1\leqslant j \leqslant n_i}|a_{i, j-1}-a_{i,j}|.
     \]
     任给 $P$ 的分划 $\sigma$，我们在每个 $Q\in \sigma$ 中任意指定一个点 $\xi_Q \in Q$，据此，
     我们定义**Riemann和**：
     \[
     S(f,\sigma,(\xi_Q)_{Q\in \sigma})=\sum_{Q\in \sigma}m(Q)f(\xi_Q).
     \]
     假设 $\{\sigma^{(\ell)}\}_{\ell\geqslant 1}$ 是 $P$ 的一列分划并且对每个 $\sigma^{(\ell)}$
     都指定了一族 $(\xi_{Q})_{Q\in \sigma^{(\ell)}}$。
     我们要求对任意的 $\ell$，$\sigma^{(\ell+1)}$ 是 $\sigma^{(\ell)}$ 的加细并且
     \[
     \displaystyle \lim_{\ell \rightarrow \infty} |\sigma^{(\ell)}|=0.
     \]
     证明，如果 $f\in \mathcal{R}(P)$，那么
     \[
     \lim_{\ell\rightarrow \infty}S(f,\sigma^{(\ell)},(\xi_Q)_{Q\in \sigma^{(\ell)}})=\int_P f.
     \]

     （传统上，更多的教科书用这种Riemann和或者下面的Darboux上下和来定义积分）

R18) 假设 $f\colon P\rightarrow \mathbb{R}$ 是有界函数，我们定义
     \[
     \begin{aligned}
     & \overline{\mathcal{E}_f}(P)=\{\varphi \in \mathcal{E}(P)\mid\varphi(x)\geqslant f(x)\}, \\
     & \underline{\mathcal{E}_f}(P)=\{\varphi \in \mathcal{E}(P)\mid\varphi(x)\leqslant f(x)\}.
     \end{aligned}
     \]
     证明，这两个集合是非空的。据此，我们定义
     \[
     \begin{aligned}
     & \overline{\int}_{P}f=\inf_{\varphi \in \overline{\mathcal{E}_f}(P)}\int_P \varphi, \\
     & \underline{\int}_{P}f=\sup_{\varphi \in \underline{\mathcal{E}_f}(P)}\int_P \varphi.
     \end{aligned}
     \]
     证明，上面的两个数值是有限的（称作是有界函数 $f$ 的**上积分**和**下积分**）并且满足
     \[
     \displaystyle\overline{\int}_{P}f\geqslant \underline{\int}_{P}f.
     \]

R19) 给定有界实值函数 $f\colon P\rightarrow \mathbb{R}$，$\sigma$ 是 $P$ 的一个分划。
     对任意 $Q\in \sigma$，我们定义
     \[
     M_Q=\sup_{x\in Q}f(x),\ \ m_Q=\inf_{x\in Q}f(x)
     \]
     。
     我们令
     \[
     \begin{aligned}
     & \overline{S}(f;\sigma)=\sum_{Q\in \sigma} M_Q m(Q), \\
     &\underline{S}(f;\sigma)=\sum_{Q\in \sigma} m_Q m(Q).
     \end{aligned}
     \]
     上述两个值被称为是 $f$ 对于分划 $\sigma$ 的**Darboux上和**和**Darboux下和**。

     证明，对于 $P$ 的任两个分划 $\sigma$ 和 $\sigma'$，我们有
     \[
     \underline{S}(f;\sigma)\leqslant \overline{S}(f;\sigma').
     \]
     进一步证明，如果分划 $\sigma\prec \sigma'$，那么
     \[
     \overline{S}(f;\sigma)\leqslant \overline{S}(f;\sigma'), \ \ \underline{S}(f;\sigma)\geqslant \underline{S}(f;\sigma').
     \]

R20) （Darboux上（下）和的下（上）极限是上（下）积分）假设 $f\colon P\rightarrow \mathbb{R}$
     是有界函数。定义
     \[
     \begin{aligned}
     & \overline{D}(f)=\inf_{\sigma\in \mathcal{S}(P)} \overline{S}(f;\sigma), \\
     &\underline{D}(f)=\sup_{\sigma\in \mathcal{S}(P)} \underline{S}(f;\sigma).
     \end{aligned}
     \]
     证明，
     \[
     \overline{D}(f)=\overline{\int}_{Q} f, \ \ \underline{D}(f)=\underline{\int}_{Q}f.
     \]

R21) （矩形上实值Riemann可积函数的刻画）给定实值函数 $f\colon Q\rightarrow \mathbb{R}$。
     证明，如下四条性质是等价的：

     - 甲) $f\in \mathcal{R}(Q)$；

     - 乙) 存在常数 $\mathbf{I}$，对任意的 $\varepsilon>0$，存在 $\delta>0$，
       使得对任意满足 $|\sigma|<\delta$ 的分划 $\sigma$，对任意的 $\xi_Q \in Q$，
       其中 $Q\in \sigma$，
       我们都有
       \[
       \big|S(f,\sigma,(\xi_Q)_{Q\in \sigma})-\mathbf{I}\big|<\varepsilon.
       \]

     - 丙) $f$ 是有界函数并且 $\underline{D}(f)=\overline{D}(f)$；

     - 丁) $f$ 是有界函数并且 $\displaystyle\underline{\int}_P f=\overline{\int}_P f$。

R22) 证明，如果R21)中某一条件成立，那么
     \[
     \displaystyle \underline{D}(f)=\overline{D}(f)=\underline{\int}_P f=\overline{\int}_P f=\int_P f.
     \]

R23) 给定有界实值函数 $f,g\colon P\rightarrow \mathbb{R}$，我们假设它们是Riemann可积的。
     证明，$P$ 上的函数
     \[
     \max(f,g)(x)=\max(f(x),g(x)), \ \ \min(f,g)(x)=\min(f(x),g(x))
     \]
     是Riemann可积的并且
     \[
     \int_P \min(f,g)\leqslant \min(\int_P f,\int_P g), \ \max(\int_P f,\int_P g) \leqslant \int_P \max(f,g).
     \]

R24) 假设正函数 $f\colon P\rightarrow \mathbb{R}_{\geqslant 0}$ 是Riemann可积的。如果
     \[
     \displaystyle \int_P f=0,
     \]
     证明，对任意的 $x^*\in P$，$f$ 在 $x^*$ 处连续，我们都有 $f(x^*)=0$。

R25) 证明，$P$ 上的连续函数是Riemann可积的，即 $C(P;\mathbb{C})\subset \mathcal{R}(P)$。

R26) 假设 $f,g\colon P\rightarrow \mathbb{R}$ 是连续函数并且对任意的 $x\in P$，
     我们都有 $f(x)\leqslant g(x)$。证明，如果
     \[
     \displaystyle \int_P f=\int_P g,
     \]
     那么，$f\equiv g$。

R27) 证明Cauchy–Schwarz不等式：对任意的 $f,g\in \mathcal{R}(P)$，我们有
     \[
     \Big| \int_P f \cdot \overline{g}\Big|\leqslant \Bigl(\int_P |f|^2\Bigr)^{\frac{1}{2}}\Bigl(\int_P |g|^2\Bigr)^{\frac{1}{2}}.
     \]
