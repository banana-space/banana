---
title: 特化和余特化映射
---

这里我们给这些映射一个简要介绍和构造。参考[@StacksProject, Tag 0GJ2, 0GJM, 0GJT]。

::: definition [局部零调]
设$f:X\to S$是概形映射，取几何点$\bar{x}\to X$和$\bar{s}=f(\bar{x})$。
取几何点$\bar{t}\to\operatorname{Spec}\mathscr{O}^{\mathrm{sh}}_{S,\bar{s}}$，
我们有交换图：
\[
\begin{tikzcd}
  {F_{\bar{x},\bar{t}}:=\bar{t}\times_{\operatorname{Spec}\mathscr{O}_{S,\bar{s}}^{\mathrm{sh}}}\operatorname{Spec}\mathscr{O}_{X,\bar{x}}^{\mathrm{sh}}} & {\operatorname{Spec}\mathscr{O}_{X,\bar{x}}^{\mathrm{sh}}} & X \\
  {\bar{t}} & {\operatorname{Spec}\mathscr{O}_{S,\bar{s}}^{\mathrm{sh}}} & S
  \arrow[from=1-1, to=1-2]
  \arrow[from=1-1, to=2-1]
  \arrow[from=2-1, to=2-2]
  \arrow[from=1-2, to=2-2]
  \arrow[from=2-2, to=2-3]
  \arrow[from=1-2, to=1-3]
  \arrow[from=1-3, to=2-3]
\end{tikzcd}
\]
我们称$F_{\bar{x},\bar{t}}$是$f$在$\bar{x}$的vanishing cycle。
取$K\in D(X_{\operatorname{ét}})$，
根据 @ColimSheaf 得到
$K_{\bar{x}}=R\Gamma(\operatorname{Spec}\mathscr{O}_{X,\bar{x}}^{\mathrm{sh}},K)$，
故得到映射
\[
\alpha_{K,\bar{x},\bar{t}}:K_{\bar{x}}\to R\Gamma(F_{\bar{x},\bar{t}},K).
\]
我们称$f$在$\bar{x}$关于$K$局部零调，如果$\alpha_{K,\bar{x},\bar{t}}$是同构。
:::

::: definition
设$f:X\to S$是概形映射，取几何点$\bar{x}\to X$和$\bar{s}=f(\bar{x})$。
取几何点$\bar{t}\to\operatorname{Spec}\mathscr{O}^{\mathrm{sh}}_{S,\bar{s}}$
和$K\in D^+(X_{\operatorname{ét}})$。假设$f$关于$K$局部零调。
考虑
\[
\begin{tikzcd}
  { X_{\bar{t}}} & {X\times_S\operatorname{Spec}\mathscr{O}_{S,\bar{s}}^{\mathrm{sh}}} & {X_{\bar{s}}} \\
  & X
  \arrow["q"', from=1-1, to=2-2]
  \arrow["h", from=1-1, to=1-2]
  \arrow["p", from=1-2, to=2-2]
  \arrow["i"', from=1-3, to=1-2]
  \arrow["r", from=1-3, to=2-2]
\end{tikzcd}
\]
伴随性给出$\beta_{K,\bar{s},\bar{t}}:p^{-1}K\to Rh_*(q^{-1}K)$。
可以证明此时$i^{-1}\beta_{K,\bar{s},\bar{t}}$是同构
（见[@StacksProject, Tag 0GJU]），故我们有余特化映射
\[
\begin{aligned}
\mathrm{cosp}:R\Gamma(X_{\bar{t}},q^{-1}K)&=R\Gamma(X\times_S\operatorname{Spec}\mathscr{O}_{S,\bar{s}}^{\mathrm{sh}},Rh_*(q^{-1}K))\\
&\stackrel{i^{-1}}{\longrightarrow}R\Gamma(X_{\bar{s}},i^{-1}Rh_*(q^{-1}K))\\
&\stackrel{(i^{-1}\beta_{K,\bar{s},\bar{t}})^{-1}}{\longrightarrow}R\Gamma(X_{\bar{s}},i^{-1}p^{-1}K)\\
&=R\Gamma(X_{\bar{s}},r^{-1}K).
\end{aligned}
\]
:::

::: definition
取几何点$\bar{s}=f(\bar{x})$和$\bar{t}\to\operatorname{Spec}\mathscr{O}^{\mathrm{sh}}_{S,\bar{s}}$，
取$K\in D^+(X_{\operatorname{ét}})$。
则显然可以诱导特化映射$\mathrm{sp}:K_{\bar{s}}\to K_{\bar{t}}$。
:::

::: proposition
设$f:X\to S$是概形映射，取几何点$\bar{x}\to X$和$\bar{s}=f(\bar{x})$。
取几何点$\bar{t}\to\operatorname{Spec}\mathscr{O}^{\mathrm{sh}}_{S,\bar{s}}$
和$K\in D^+(X_{\operatorname{ét}})$。假设$f$关于$K$局部零调且拟紧拟分离。

(i)有交换图
\[
\begin{tikzcd}
  {(Rf_*K)_{\bar{s}}} & {R\Gamma(X_{\bar{s}},K)} \\
  {(Rf_*K)_{\bar{t}}} & {R\Gamma(X_{\bar{t}},K)}
  \arrow["{\mathrm{sp}}", from=1-1, to=2-1]
  \arrow["{\mathrm{cosp}}"', from=2-2, to=1-2]
  \arrow[from=2-1, to=2-2]
  \arrow[from=1-1, to=1-2]
\end{tikzcd}
\]

(ii)若$f$紧合且$K\in D^+_{\operatorname{tor}}(X_{\operatorname{ét}})$，
则上图映射$\mathrm{sp}$和$\mathrm{cosp}$皆为同构。
:::

::: proof
证明见[@StacksProject, Tag 0GJT]。
:::

::: remark
@NearbyVanishingPrp 证明了光滑情况下用光滑基变换得到局部零调性，
于是紧合且光滑会得到特化和余特化同构，
这个会用到证明 @Proper-Smooth-BaseCh。
当然这里有循环论证嫌疑（因为很多都是从局部零调证明光滑基变换的），
但[@StacksProject]未使用局部零调来证明光滑基变换，因此不存在这个嫌疑。
这个侧面得到局部零调和光滑基变换的等价性，
直接证明都十分困难。
:::
