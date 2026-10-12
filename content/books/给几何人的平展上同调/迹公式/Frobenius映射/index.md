---
title: Frobenius映射
---

::: lemma {@025}
设$X$是概形且$g:X\to X$是自同态，若对所有的平展映射$\phi:U\to X$都存在关于$U$有函子性的同构
\[
\begin{tikzcd}
  U && {U\times_{\phi,X,g}X} \\
  & X
  \arrow["\cong", from=1-1, to=1-3]
  \arrow["\phi"', from=1-1, to=2-2]
  \arrow["{\mathrm{pr_2}}", from=1-3, to=2-2]
\end{tikzcd}
\]
则$g$诱导对所有层所有平展上同调的单位映射（identity）。
:::

::: proof
这就是定义而已，平凡。
:::

::: theorem [Baffling定理] {@BafflingThm}
设$X$是特征$p$域上的概形，绝对Frobenius映射$F_X$诱导所有上同调的平凡同构（identity）。
:::

::: proof
由 @025 知只需验证上述引理的条件。对于下图
\[
\begin{tikzcd}
  U \\
  & {U\times_{\phi,X,F_X}X} & U \\
  & X & X
  \arrow["{F_X}", from=3-2, to=3-3]
  \arrow["{\mathrm{pr}_2}", from=2-2, to=3-2]
  \arrow["{\mathrm{pr}_1}"', from=2-2, to=2-3]
  \arrow["\phi", from=2-3, to=3-3]
  \arrow["\phi"', bend right=25, from=1-1, to=3-2]
  \arrow["{F_U}", bend left=25, from=1-1, to=2-3]
  \arrow["f"{description}, dashed, from=1-1, to=2-2]
\end{tikzcd}
\]
不难得到$f$平展且万有同胚，故同构。
:::

::: definition
设$k=\mathbb{F}_{q}$其中$q=p^f$，其中$p=\mathrm{char}(k)$，
对$k$上的概形$X$定义几何Frobenius映射$\pi_X:X\to X$
即为$F_X^f$。基变换到$\bar{k}$时也写作$\pi_X$。
:::

::: lemma
设$\mathscr{F}\in\operatorname{Sh}(X_{\operatorname{ét}})$，
我们有典范同构$\pi_X^{-1}\mathscr{F}\cong\mathscr{F}$和$\mathscr{F}\cong\pi_{X,*}\mathscr{F}$。
:::

::: proof
类似上述定理的证明以及定义即可证明。
:::

下面假设$k=\mathbb{F}_{q}$其中$q=p^f$，
其中$p=\mathrm{char}(k)$和代数闭包$\bar{k}$及绝对Galois群$G_k:=\operatorname{Gal}(\bar{k}/k)$。
考虑$k$上有限型概形$X$。
设$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}})$，任取$\sigma\in G_k$，考虑交换图
\[
\begin{tikzcd}
  {X_{\bar{k}}} && {X_{\bar{k}}} \\
  & X
  \arrow[from=1-1, to=2-2]
  \arrow["{\operatorname{Spec}\sigma\times\mathrm{id}_X}", from=1-1, to=1-3]
  \arrow[from=1-3, to=2-2]
\end{tikzcd}
\]
任取$\xi\in H^j_{\operatorname{ét}}(X_{\bar{k}},\mathscr{F}|_{X_{\bar{k}}})$，定义作用为
\[
\sigma\cdot\xi=(\operatorname{Spec}\sigma\times\mathrm{id}_X)^*\xi\in H^j_{\operatorname{ét}}(X_{\bar{k}},(\operatorname{Spec}\sigma\times\mathrm{id}_X)^{-1}\mathscr{F}|_{X_{\bar{k}}}).
\]
根据交换性得到
$H^j_{\operatorname{ét}}(X_{\bar{k}},(\operatorname{Spec}\sigma\times\mathrm{id}_X)^{-1}\mathscr{F}|_{X_{\bar{k}}})=H^j_{\operatorname{ét}}(X_{\bar{k}},\mathscr{F}|_{X_{\bar{k}}})$，
因此后者被赋予了左$G_k$-模结构。

::: lemma
在上述情况下，设$\alpha:X\to\operatorname{Spec} k$是结构映射，
注意到$(R^j\alpha_*\mathscr{F})_{\operatorname{Spec}\bar{k}}$有自然的$G_k$作用，
根据 @HigherDirectStalk-II 得到
$(R^j\alpha_*\mathscr{F})_{\operatorname{Spec}\bar{k}}\cong H^j_{\operatorname{ét}}(X_{\bar{k}},\mathscr{F}|_{X_{\bar{k}}})$。
则此同构也是$G_k$模同构。
（对挠层和$(R^j\alpha_!\mathscr{F})_{\operatorname{Spec}\bar{k}}$及
$H^j_{c,\operatorname{ét}}(X_{\bar{k}},\mathscr{F}|_{X_{\bar{k}}})$也对）
:::

::: proof
平凡，自行验证。
:::

::: definition
定义算术Frobenius映射为$G_k$内的$\operatorname{frob}_k:\bar{k}\to\bar{k},x\mapsto x^q$。
:::

::: theorem
设$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}})$，则对任何$j\geq 0$，
映射$\operatorname{frob}_k$在$H^j_{\operatorname{ét}}(X_{\bar{k}},\mathscr{F}|_{X_{\bar{k}}})$
的作用和下述作用$\pi_X^*$的逆相同：
\[
H^j_{\operatorname{ét}}(X_{\bar{k}},\mathscr{F}|_{X_{\bar{k}}})\to H^j_{\operatorname{ét}}(X_{\bar{k}},(\pi_X^{-1}\mathscr{F})|_{X_{\bar{k}}})
\cong H^j_{\operatorname{ét}}(X_{\bar{k}},\mathscr{F}|_{X_{\bar{k}}})
\]
其中最后一个等号因为$\pi_X^{-1}\mathscr{F}\cong\mathscr{F}$。
:::

::: proof
注意到
$X_{\bar{k}}\stackrel{\operatorname{Spec}\operatorname{frob}_k}{\longrightarrow}X_{\bar{k}}\stackrel{\pi_X}{\longrightarrow}X_{\bar{k}}$
复合即为$F^f_{X_{\bar{k}}}$，故根据Baffling定理（@-BafflingThm）即可。
:::

::: definition
设$x\in X(k)$和相应几何点$\bar{x}:\operatorname{Spec}\bar{k}\to X$，
考虑$\operatorname{frob}_k^{-1}$作用为$\pi_x:\mathscr{F}_{\bar{x}}\to\mathscr{F}_{\bar{x}}$，
我们还称之为几何Frobenius。
:::
