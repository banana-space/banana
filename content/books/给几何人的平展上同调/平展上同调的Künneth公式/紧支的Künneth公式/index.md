---
title: 紧支的Künneth公式
---

::: theorem {@CompactSuppKunneth}
考虑拟紧拟分离概形的纤维积
\[
\begin{tikzcd}
  {X\times_SY} & Y \\
  X & S
  \arrow["p"', from=1-1, to=2-1]
  \arrow["f", from=2-1, to=2-2]
  \arrow["q", from=1-1, to=1-2]
  \arrow["g"', from=1-2, to=2-2]
  \arrow["c"{description}, from=1-1, to=2-2]
\end{tikzcd}
\]
其中$f,g$为分离有限型映射。
设挠环$\Lambda$和$E\in D(X_{\operatorname{ét}},\Lambda)$和$K\in D(Y_{\operatorname{ét}},\Lambda)$，
我们有
\[
Rf_!E\otimes_{\Lambda}^{\mathbb{L}}Rg_!K\cong Rc_!(p^{-1}E\otimes_{\Lambda}^{\mathbb{L}}q^{-1}K).
\]
:::

::: proof
根据 @PrpDerivedLowerShriek-I (iii) 和 @PrpDerivedLowerShriek-II (ii) 得到
\[
\begin{aligned}
  &Rf_!E\otimes_{\Lambda}^{\mathbb{L}}Rg_!K\\
  &=Rf_!(E\otimes_{\Lambda}^{\mathbb{L}}f^{-1}Rg_!K)\\
  &=Rf_!(E\otimes_{\Lambda}^{\mathbb{L}}Rp_!q^{-1}K)\\
  &=Rf_!(Rp_!(p^{-1}E\otimes_{\Lambda}^{\mathbb{L}}q^{-1}K))\\
  &=Rc_!(p^{-1}E\otimes_{\Lambda}^{\mathbb{L}}q^{-1}K),
\end{aligned}
\]
得到结论。
:::

::: corollary
对于上述纤维积，设挠环$\Lambda$和$\Lambda$模$\mathscr{E}$以及$\mathscr{F}$，
则可以构造Künneth映射
\[
\bigoplus_{p+q=n}R^pf_!\mathscr{E}\otimes_{\Lambda}R^qg_!\mathscr{F}\to R^nc_!(p^{-1}\mathscr{E}\otimes_{\Lambda}q^{-1}\mathscr{F}).
\]
若$\mathscr{E}$和$\mathscr{F}$其中有一个有$\Lambda$-平坦的茎，
则Künneth映射即为如下谱序列从$E_2^{0,n}$起的边际映射：
\[
E_2^{r,s}=\bigoplus_{\alpha+\beta=s}\mathscr{T}or^{\underline{\Lambda}}_{-r}(R^{\alpha}f_!\mathscr{E},R^{\beta}g_!\mathscr{F})
\Rightarrow R^{r+s}c_!(p^{-1}\mathscr{E}\otimes_{\Lambda}q^{-1}\mathscr{F}).
\]
:::

::: proof
注意到Künneth映射不难经过Nagata紧化来定义。考虑高阶Tor谱序列
\[
E_2^{r,s}=\bigoplus_{\alpha+\beta=s}\mathscr{T}or^{\underline{\Lambda}}_{-r}(R^{\alpha}f_!\mathscr{E},R^{\beta}g_!\mathscr{F})
\Rightarrow H^{r+s}(Rf_!\mathscr{E}[0]\otimes_{\Lambda}^{\mathbb{L}}Rg_!\mathscr{F}[0]),
\]
设$\alpha$是上述谱序列从$E_2^{0,n}$起的边际映射，考虑复合
\[
\begin{tikzcd}
  {\bigoplus_{p+q=n}R^pf_!\mathscr{E}\otimes_{\Lambda}R^qg_!\mathscr{F}} & {H^{r+s}(Rf_!\mathscr{E}[0]\otimes_{\Lambda}^{\mathbb{L}}Rg_!\mathscr{F}[0])} \\
  {R^nc_!(p^{-1}\mathscr{E}\otimes_{\Lambda}q^{-1}\mathscr{F})} & {H^{r+s}(Rc_!(p^{-1}\mathscr{E}[0]\otimes_{\Lambda}^{\mathbb{L}}q^{-1}\mathscr{F}[0]))}
  \arrow["\alpha", from=1-1, to=1-2]
  \arrow["{\cong,\kappa}", from=1-2, to=2-2]
  \arrow["\beta"', from=2-2, to=2-1]
\end{tikzcd}
\]
其中同构$\kappa$由 @CompactSuppKunneth 给出。
由于$\mathscr{E}$和$\mathscr{F}$其中有一个有$\Lambda$-平坦的茎，则
$\beta$也是同构，故只需验证$\beta\circ\kappa\circ\alpha$是Künneth映射。
只需经过基变换直和考虑紧支上同调的情况，
我们忽略这个无聊的验证。
:::
