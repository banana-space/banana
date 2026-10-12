---
title: 稳定同伦论
categories: [同伦论, 高阶代数]
---

**稳定同伦论**是[[同伦论]]的一种特例，
起源于[[代数拓扑]]中对[[拓扑空间]]的[[稳定同伦群]]，
及由此发展出的[[拓扑谱]]的研究。
经典的稳定同伦论就是拓扑谱的理论。

当代的稳定同伦论也就是[[稳定 $\infty$-范畴]]的理论，
它是拓扑谱理论的推广，因为拓扑谱构成稳定 $\infty$-范畴。
研究拓扑谱的诸多方法都可以应用于这类范畴中。
除拓扑谱之外，稳定同伦论最重要的例子是[[同调代数]]，
其中稳定 $\infty$-范畴取为[[导出 $\infty$-范畴]]，或一般的[[微分分次范畴]]。

## 想法

经典的稳定同伦论考虑以下的问题。

对任何[[带点拓扑空间]] $X$，
[[纬悬–环路伴随]]的[[伴随单位]] $X \to \Omega \Sigma X$
诱导了[[同伦群]]的映射
\[
\pi_n (X) \longrightarrow
\pi_n (\Omega \Sigma X) \simeq
\pi_{n+1} (\Sigma X).
\]
由此可以得到一串映射
\[
\pi_n (X) \to
\pi_{n+1} (\Sigma X) \to
\pi_{n+2} (\Sigma^2 X) \to \cdots .
\]
对某些 $X$，这些同伦群会趋于稳定。例如有[[球面同伦群]]
\[
\begin{aligned}
  & \pi_1 (S^1) \simeq \pi_2 (S^2) \simeq \pi_3 (S^3)
  \simeq \cdots \simeq \mathbb{Z}, \\
  & \pi_2 (S^1) \to \pi_3 (S^2) \to \pi_4 (S^3) \simeq \pi_5 (S^4)
  \simeq \cdots \simeq \mathbb{Z}/2.
\end{aligned}
\]
这时，最后稳定的部分就称为 $X$ 的[[稳定同伦群]]，记为 $\pi_n^{\mathrm{s}} (X)$。例如，
\[
\begin{aligned}
  \pi_1^{\mathrm{s}} (S^1) & \simeq \mathbb{Z}, \\
  \pi_2^{\mathrm{s}} (S^1) & \simeq \mathbb{Z}/2.
\end{aligned}
\]
对一般的空间 $X$，也可以定义其稳定同伦群为[[余极限]]
\[
\pi_n^{\mathrm{s}} (X) =
\operatornamewithlimits{colim}_{k \to \infty}
\pi_{n+k} (\Sigma^k X).
\]
这也不限于正的 $n$。

我们回忆，拓扑空间的[[弱同伦等价]]定义为诱导所有同伦群同构的映射。
我们也可以类似定义“稳定弱同伦等价”为诱导所有稳定同伦群同构的映射。
我们发现，与拓扑中不同，我们有
\[
\pi_n^{\mathrm{s}} (X) \simeq
\pi_n^{\mathrm{s}} (\Omega \Sigma X),
\]
另外，我们也想要有
\[
\pi_n^{\mathrm{s}} (X) \simeq
\pi_n^{\mathrm{s}} (\Sigma \Omega X),
\]
因为右边自然地等于 $\pi_{n-1}^{\mathrm{s}} (\Omega X)$。
也就是说，我们想要[[纬悬–环路伴随]]在稳定同伦的意义下互为逆函子。
但这并不能做到，因为当 $X$ 有多个道路连通分支时，
$\Omega X$ 只考虑了其中一个道路连通分支，故 $\Sigma \Omega X$ 也只基于该分支。
但如果想要一个“正确”的 $\Omega X$，它就应该满足
\[
\pi_{-1} (\Omega X) \simeq \pi_0 (X),
\]
这在拓扑空间范畴中是做不到的。

这个问题由[[拓扑谱]]的理论给出了合理的答案。
拓扑谱由一列拓扑空间 $X_0, X_1, X_2, \dotsc$ 构成，
并且对每个 $n$ 有一个映射 $\sigma_n \colon \Sigma X_n \to X_{n+1}$。
例如，在之前的例子中，我们取空间列 $X, \Sigma X, \Sigma^2 X, \dotsc$，
然后将 $\sigma_n$ 都取[[恒同映射]]。
我们可以定义拓扑谱的稳定同伦群为余极限
\[
\pi_n^{\mathrm{s}} (X) =
\operatornamewithlimits{colim}_{k \to \infty}
\pi_{n+k} (X_k).
\]
这样，拓扑谱可以有负数同伦群。
并且，最重要的一点是，[[纬悬–环路伴随]]在拓扑谱的范畴中确实是同伦意义下的逆函子。

拓扑谱的另一个性质是，
拓扑空间的[[广义上同调]]理论一定由拓扑谱表出。
例如，[[奇异上同调]]就由 [[Eilenberg–Mac Lane 谱]]表出。
也就是说，任何同调理论的所有信息都可以通过拓扑谱得到，
换言之，同调是稳定同伦论的特例。

上述拓扑谱的一些性质可以推广到一般的[[稳定 $\infty$-范畴]]中。
例如，[[导出范畴]]（准确地说，[[导出 $\infty$-范畴]]）是稳定 $\infty$-范畴的典型例子。
在导出范畴中，纬悬、环路函子就是链复形的向左、向右平移。
[[同调代数]]中的诸多构造都对应于稳定同伦论中更一般的构造，
其中典型一例是[[三角范畴]]，
它起源于同调代数的研究，但其本质来源于稳定同伦论：
稳定 $\infty$-范畴的同伦范畴具有自然的三角范畴结构。

```terms
稳定同伦论:
  en: stable homotopy theory
  fr: théorie de l'homotopie stable
```
