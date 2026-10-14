---
title: 习题课：硬币空间的测度理论
notices:
  - name: 问题
    items:
      - 'A3) 中的 $\mathcal{F}_\infty \neq \Omega$ 似乎应为“$\mathcal{F}_\infty$ 不是 $\sigma$-代数”之类的结论。'
      - 'A11) 中的 $\Psi_* m=P = m$ 似乎应为 $\Psi_* m=P$。'
      - 'B7) 中 $s=(s_1,s_2,\cdots,s_n)\in \{0,1\}^{\mathbb{Z}_{>0}}$ 似乎应为 $s\in \{0,1\}^n$。'
---

::: -remark [寄语]
Happy Hunger Games! And may the odds be ever in your favor.
:::

## 硬币空间的测度理论

令 $\Omega = \{0,1\}^{\mathbb{Z}_{>0}}$，
其元素 $\omega$ 可用无限长的数列 $\omega=(\omega_1,\omega_2,\cdots)$ 来表示，
其中 $\omega_i$ 为 $0$ 或者 $1$。

A1) 按二进制方式定义映射
    \[
    \Phi\colon \Omega \rightarrow [0,1], \ \ \omega\mapsto \sum_{k=1}^\infty \frac{\omega_k}{2^k}.
    \]
    证明：这个映射是满射并且除了形如 $\frac{n}{2^k}\in (0,1)$ 的数之外，
    每个 $[0,1]$ 中的数的原像只有一个，并确定所有数的原像。

A2) 对于每个 $s=(s_1,\cdots,s_n)\in \{0,1\}^n$，我们定义
    \[
    C_s =\{\omega\in \Omega \mid\omega_1 =s_1,\cdots, \omega_n =s_n\}.
    \]
    证明，当 $s$ 遍历 $\{0,1\}^n$ 时，
    $C_s$ 构成了集合 $\Omega$ 的一个拆分（也就是说 $C_s$ 们两两不相交而且它们的并恰好是 $\Omega$）。
    再令 $\mathcal{F}_n$ 为由 $\{C_s\mid s\in\{0,1\}^n\}$
    所生成的代数（称作是*前 n 次扔硬币的代数*）。
    证明，我们可以建立一个从 $\mathcal{F}_n$ 到 $\mathcal{P}(\{0,1\}^n)$（幂集合）的一一对应。

A3) 证明，
    $\mathcal{F}_1 \subset \mathcal{F}_2 \subset \cdots$ 是上升的序列并且
    $\displaystyle\mathcal{F}_\infty=\bigcup_{n\geqslant 1} \mathcal{F}_n$ 也是代数但是
    $\mathcal{F}_\infty \neq \Omega$。

A4) 证明，对每个 $A\in \mathcal{F}_\infty$，总存在 $n$ 和 $s_1,\cdots, s_k \in \{0,1\}^n$，
    使得 $A=C_{s_1}\cup\cdots\cup C_{s_k}$。
    定义 $P(A)=\dfrac{k}{2^n}$，证明，这个定义不依赖于 $n$ 的选取。

A5) 证明，$P$ 是 $\mathcal{F}_\infty$ 上的一个加性函数且全空间测度为 $1$（概率测度）。

- A6)（非等概率分布，
  用来模拟第 $k$ 次扔硬币正面朝上的概率是 $p_k$）对于每个 $k\in \mathbb{Z}_{>0}$，
  我们给一个数 $0\leqslant p_k \leqslant 1$。
  证明，存在唯一一个 $\mathcal{F}_\infty$ 上的加性函数 $\widetilde{P}$ 使得，
  对 $s=(s_1,\cdots,s_n)$，我们有
  \[
  \widetilde{P}(C_s)=\prod_{k \leqslant n, \atop \\ s_k =1} p_k \prod_{k \leqslant n, \atop \\ s_k =0} (1-p_k).
  \]

A7) 我们定义 $\Omega$ 上的 Borel-代数
    $\mathcal{B}(\Omega) = \sigma(\mathcal{F}_\infty)$（我们后面会看到为什么叫它 Borel-代数）。
    证明，$\mathcal{B}(\Omega)$ 可以由所有的 $C_s$ 生成，
    其中 $s=(s_1,\cdots,s_n)$ 为一个有限长的字符串。
    试说明，对于任何一个 $\omega \in \Omega$，
    我们有 $\{\omega\} \notin \mathcal{F}_\infty$ 但是 $\{\omega\} \in \mathcal{B}(\Omega)$。

A8) 假设 $\{M_p\}_{p\geqslant 1} \in \mathcal{F}_\infty$ 是下降的序列并且
    $\displaystyle \bigcap_{p\geqslant 1} M_p = \emptyset$，证明，
    存在 $p_0$ 使得 $M_{p_0}=\emptyset$。

A9) 证明存在唯一一个 $\mathcal{B}(\Omega)$ 上的概率测度 $P$，
    使得对任何 $s=(s_1,\cdots,s_n)$ 我们都有 $P(C_s)=2^{-n}$。

A10) 证明，
     \[
     \Phi\colon (\Omega,\mathcal{B}(\Omega)) \rightarrow ([0,1],\mathcal{B}([0,1]))
     \]
     是可测映射（其中 $\mathcal{B}([0,1])$ 是 $[0,1]$ 上的 Borel-代数）并且
     \[
     \Phi_* P = m \ \ \text{（Lebesgue~测度）}
     \]

A11) 我们定义
     \[
     \Psi\colon ([0,1],\mathcal{B}([0,1]))\rightarrow (\Omega,\mathcal{B}(\Omega))
     \]
     如下：$\Psi(x)$ 为 $x$ 的二进制展开，如果展开方式超过一种，则取从某位开始都是零的那种展开。
     证明 $\Psi$ 是可测映射且 $\Psi_* m=P = m$。

     **注记。** 从而 $(\Omega,\mathcal{B}(\Omega),P)$ 作为测度空间与 $[0,1]$
     加上 Lebesgue 测度同构（在
     $\Omega$ 上去掉一个零测集后上述映射为双射）。

A12) 证明，
     第 6) 问中的加性函数也可以唯一地延拓成为 $(\Omega,\mathcal{B}(\Omega))$ 上的一个概率测度。

A13) 令
     \[
     \begin{aligned}
     A_m&=\{\omega\in\Omega\mid\omega_k=1,k\geqslant m\},\\
     B&=\{\omega\in\Omega\mid\text{有无限个~$k$~使得}~\omega_k=0\},\\
     C&=\{\omega\in\Omega\mid\text{有无限个~$k$~使得}~\omega_k=0，\text{还有无限个~$l$~使得}~\omega_l=1\}.
     \end{aligned}
     \]
     证明，它们都是 $\mathcal{B}(\Omega)$ 中的元素并计算它们的测度。

A14) 假设 $\{m_k\}_{k\geqslant 1}$ 为单调上升的自然数序列（可能是有限项的数列），
     $\{s_{m_k}\}_{k\geqslant 1}$ 为 $0$ 或者 $1$ 构成的序列，定义
     \[
     C(s_{m_1},s_{m_2},\cdots)=\{\omega\in \Omega \mid \omega_{m_k} = s_{m_k},k=1,2,\cdots\}.
     \]
     证明，$C(s_{m_1},s_{m_2},\cdots) \in \mathcal{B}(\Omega)$。
     证明，如果 $\{m_k\}_{k\geqslant 1}$ 仅含有 $N$ 项，那么其测度为 $2^{-N}$；
     如果 $\{m_k\}_{k\geqslant 1}$ 有无限项，那么其测度为零。

A15) 给定两个序列 $\{m_k\}_{k=1,2,\cdots}$ 和 $\{m'_k\}_{k=1,2,\cdots}$，
     如果它们没有公共的项（也就是说 $\{m_k\}\cap \{m'_k\}=\emptyset$），证明，
     \[
     P\bigl(C(s_{m_1},s_{m_2},\cdots)\cap C(s_{m'_1},s_{m'_2},\cdots)\bigr)=P\bigl(C(s_{m_1},s_{m_2},\cdots)\bigr)
     P\bigl(C(s_{m'_1},s_{m'_2},\cdots)\bigr).
     \]

A16) 给定两个有限长序列 $\{m_k\}_{k=1,2,\cdots,N}$ 和 $\{m'_k\}_{k=1,2,\cdots,N'}$，
     假定它们有 $\widetilde{N}$ 个共同的元素，证明，
     \[
     P\bigl(C(s_{m_1},s_{m_2},\cdots)\cap C(s_{m'_1},s_{m'_2},\cdots)\bigr)=2^{-(N+N'-\widetilde{N})}~\text{或}~0.
     \]

## 硬币空间上的移位算子及其遍历性

我们定义移位算子 $S\colon \Omega \rightarrow \Omega$：
对于 $\omega =(\omega_1,\omega_2,\cdots) \in \Omega$，有
\[
S(\omega) = (\omega_2,\omega_3, \cdots), \ \text{即}~S(\omega)_i = \omega_{i+1}.
\]
再定义 $\sigma$-代数 $\mathcal{G}_n$ 如下：对于每一个 $k\geqslant n$，
令 $\Omega_k=\{\omega \in \Omega \bigm| \omega_k=1\}$。定义
\[
\mathcal{G}_n = \sigma\bigl(\Omega_{n},\Omega_{n+1},\Omega_{n+2},\cdots \bigr),
\]
即包含所有 $\Omega_k$（其中 $k\geqslant n$）的最小的 $\sigma$-代数。

B1) 证明，对于 $\mathcal{B}(\Omega)$ 而言，$S$ 是可测映射。

B2) 证明，$\mathcal{G}_2 = S^{-1}\bigl(\mathcal{B}(\Omega)\bigr)$。

B3) 令 $S^n = \underbrace{S\circ S \circ \cdots \circ S}_{\text{复合~n~次}}$，
    证明 $\mathcal{G}_{n+1}= \bigl(S^n\bigr)^{-1}\bigl(\mathcal{B}(\Omega)\bigr)$。

B4) 证明，如下两个论断等价：

    (a) $f\colon(\Omega,\mathcal{G}_{n+1}) \rightarrow[0,\infty]$ 可测；

    (b) $f\colon(\Omega,\mathcal{B}(\Omega)) \rightarrow[0,\infty]$ 可测并且 $f(\omega)$ 不依赖于
    $\omega_1, \omega_2, \cdots,\omega_n$。

B5) 令 $\mathcal{G}_\infty = \bigcap_n \mathcal{G}_n$。证明，
    \[
    f\colon\Omega \rightarrow[0,\infty],\ \omega \mapsto \limsup_{n\rightarrow \infty}\frac{\omega_1+\cdots+\omega_n}{n},
    \]
    是 $\mathcal{G}_\infty$-可测的。

B6) 对每个 $\alpha\in[0,1]$，定义
    \[
    X_\alpha=\bigl\{\omega \in \Omega\bigm| \lim_{k\rightarrow \infty}\frac{\omega_1+\omega_2+\cdots+\omega_k}{k}=\alpha\bigr\}.
    \]
    证明：$X_\alpha$ 是一个不可数集合并且 $X_\alpha \in \mathcal{B}(\Omega)-\mathcal{F}_\infty$。

B7) 给定 $s=(s_1,s_2,\cdots,s_n)\in \{0,1\}^{\mathbb{Z}_{>0}}$，我们定义算子
    \[
    T_s\colon\Omega \rightarrow \Omega, \ \omega\mapsto (s_1,\cdots,s_n, \omega_1,\omega_2,\cdots).
    \]

    证明，对每个 $B\in \mathcal{B}(\Omega)$，
    我们都有 $T_s(B) \in \mathcal{B}(\Omega)$ 并且 $P(T_s(B))=2^{-n}P(B)$。

B8) 证明，如果 $A\in \mathcal{B}(\Omega)$ 使得 $S^{-1}(A)=A$，那么 $P(A \cap C_s) = 2^{-n}P(A)$。

B9) 证明，给定 $A\in \mathcal{B}(\Omega)$ 使得 $S^{-1}(A)=A$，证明，
    \[
    \widetilde{\mathcal{B}}=\{B\in \mathcal{B}\mid P(A\cap B)=P(A)P(B)\}
    \]
    是 $\sigma$-代数。

B10) 证明 $S$ 的遍历性，即对于满足 $S^{-1}(A)=A$ 的 $A\in \mathcal{B}(\Omega)$，
     我们一定有 $P(A)=0$ 或者 $P(A)=1$。
