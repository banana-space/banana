---
title: 平展-奇异比较定理
---

设$(X^{\operatorname{an}})_{\operatorname{ét}}$是解析空间间的局部同构构成的景，
对应意象为$\operatorname{Ét}(X^{\operatorname{an}})$。
类似于GAGA我们定义函子$\phi_{X,*}:\operatorname{Ét}(X^{\operatorname{an}})\to\operatorname{Ét}(X)$和
$\phi_X^*:\operatorname{Ét}(X)\to\operatorname{Ét}(X^{\operatorname{an}})$如下。

定义$\phi_{X,*}:\mathscr{G}\mapsto(U'\mapsto\mathscr{G}((U')^{\operatorname{an}}))$和
\[
\phi_X^*:\mathscr{F}\mapsto\mathscr{F}^{\operatorname{an}}:=\left(U\mapsto\varinjlim\mathscr{F}(U'\to X)\right)^{\sharp},
\]
其中余极限取自如下交换图：
\[
\begin{tikzcd}
  U & {U'} \\
  {X^{\operatorname{an}}} & X
  \arrow["{\phi_X}", from=2-1, to=2-2]
  \arrow[from=1-1, to=2-1]
  \arrow[from=1-1, to=1-2]
  \arrow[from=1-2, to=2-2]
\end{tikzcd}
\]
其中$U\to X^{\operatorname{an}}$局部同构且$U'\to X$平展。
不难验证有伴随性$(\phi_X^*,\phi_{X,*})$且$\phi_X^*$正合。

考虑代数$\mathbb{C}$概形和交换图
\[
\begin{tikzcd}
  {X^{\operatorname{an}}} & X \\
  {S^{\operatorname{an}}} & S
  \arrow["{\phi_X}", from=1-1, to=1-2]
  \arrow["{f^{\operatorname{an}}}", from=1-1, to=2-1]
  \arrow["{\phi_S}", from=2-1, to=2-2]
  \arrow["f", from=1-2, to=2-2]
\end{tikzcd}
\]
任取$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}})$和$V\in X_{\operatorname{ét}}$得到
$\mathscr{F}(V)\to\mathscr{F}^{\operatorname{an}}(V^{\operatorname{an}})$。
对平展映射$U\to S$取$V=f^{-1}(U)$得到
$f_*\mathscr{F}\to\phi_{S,*}(f_{\operatorname{ét},*}^{\operatorname{an}}\mathscr{F}^{\operatorname{an}})$，
根据伴随性得到
$(f_*\mathscr{F})^{\operatorname{an}}\to f_{\operatorname{ét},*}^{\operatorname{an}}\mathscr{F}^{\operatorname{an}}$。
根据$\phi_X^*$正合，不难诱导
\[
(Rf_*\mathscr{F})^{\operatorname{an}}\to R_{\operatorname{ét}}f_*^{\operatorname{an}}\mathscr{F}^{\operatorname{an}}.
\]
若$f$分离有限型，同理诱导
\[
(Rf_!\mathscr{F})^{\operatorname{an}}\to R_{\operatorname{ét}}f_!^{\operatorname{an}}\mathscr{F}^{\operatorname{an}}.
\]

::: theorem {@EtaleAnalysisCompare}
设$f:X\to S$是代数$\mathbb{C}$概形间的分离有限型映射，则有：

(i)对任何$\mathscr{F}\in\operatorname{Ab}_{\operatorname{tor}}(X_{\operatorname{ét}})$，都有
\[
(Rf_!\mathscr{F})^{\operatorname{an}}\cong R_{\operatorname{ét}}f_!^{\operatorname{an}}\mathscr{F}^{\operatorname{an}}\cong Rf_!^{\operatorname{an}}\mathscr{F}^{\operatorname{an}};
\]

(ii)对任何$\mathscr{F}\in\operatorname{Ab}_{\mathrm{cons}}(X_{\operatorname{ét}})$，都有
\[
(Rf_*\mathscr{F})^{\operatorname{an}}\cong R_{\operatorname{ét}}f_*^{\operatorname{an}}\mathscr{F}^{\operatorname{an}}
\cong Rf_*^{\operatorname{an}}\mathscr{F}^{\operatorname{an}}.
\]
:::

::: proof
(i)(ii)的前一个同构略去，参考[@SGA-IV, XVI.4]和[@Freitag88, I.11.6]。
后一个同构是因为局部同构根据反函数定理得知
存在开覆盖是其加细，因此成立。
:::

::: corollary [平展-奇异比较定理]
对于代数$\mathbb{C}$概形$X$和有限Abel群$G$，我们有
\[
H^i_{\operatorname{ét}}(X,\underline{G})\cong H^i_{\operatorname{sing}}(X^{\operatorname{an}},G),\quad H^i_{c,\operatorname{ét}}(X,\underline{G})\cong H^i_{c,\operatorname{sing}}(X^{\operatorname{an}},G).
\]
:::

::: proof
根据 @EtaleAnalysisCompare 和 @SheafCoh-SingularCoh-Compare 即可得到结论。
:::
