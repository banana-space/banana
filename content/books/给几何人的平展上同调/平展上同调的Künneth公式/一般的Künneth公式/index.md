---
title: 一般的Künneth公式
---

考虑纤维积
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
对于$E\in D(X_{\operatorname{ét}},\Lambda)$和
$K\in D(Y_{\operatorname{ét}},\Lambda)$（无界导出范畴可以定义这些函子，细节我们略去，
读者可以自行脑补成有界的），注意到有典范映射
\[
\begin{aligned}
&c^{-1}(Rf_*E\otimes_{\Lambda}^{\mathbb{L}}Rg_*K)\\
&=p^{-1}f^{-1}Rf_*E\otimes_{\Lambda}^{\mathbb{L}}q^{-1}g^{-1}Rg_*K\\
&\to p^{-1}E\otimes_{\Lambda}^{\mathbb{L}}q^{-1}K
\end{aligned}
\]
再取伴随即可得到映射
\[
Rf_*E\otimes_{\Lambda}^{\mathbb{L}}Rg_*K\to Rc_*(p^{-1}E\otimes_{\Lambda}^{\mathbb{L}}q^{-1}K).
\]

::: theorem [Künneth公式] {@Künneth}
考虑上述纤维积，若$\Lambda$挠环且$f,g$紧合，
则有
\[
Rf_*E\otimes_{\Lambda}^{\mathbb{L}}Rg_*K\cong Rc_*(p^{-1}E\otimes_{\Lambda}^{\mathbb{L}}q^{-1}K).
\]
:::

::: proof
我们根据投影公式和紧合基变换得到
\[
\begin{aligned}
&Rf_*E\otimes_{\Lambda}^{\mathbb{L}}Rg_*K\\
&=Rf_*(E\otimes_{\Lambda}^{\mathbb{L}}f^{-1}Rg_*K)\\
&=Rf_*(E\otimes_{\Lambda}^{\mathbb{L}}Rp_*q^{-1}K)\\
&=Rf_*(Rp_*(p^{-1}E\otimes_{\Lambda}^{\mathbb{L}}q^{-1}K))\\
&=Rc_*(p^{-1}E\otimes_{\Lambda}^{\mathbb{L}}q^{-1}K),
\end{aligned}
\]
得到结论。
:::

::: remark [杯积] {@CupProductDef}
考虑
\[
f^{-1}(Rf_*F\otimes^{\mathbb{L}}_{\Lambda}Rf_*L)=f^{-1}Rf_*F\otimes^{\mathbb{L}}_{\Lambda}f^{-1}Rf_*L
\to F\otimes^{\mathbb{L}}_{\Lambda}L,
\]
伴随性得到
\[
Rf_*F\otimes^{\mathbb{L}}_{\Lambda}Rf_*L\to Rf_*(F\otimes^{\mathbb{L}}_{\Lambda}L),
\]
称为杯积。用此和$Rf_*E\to Rc_*p^{-1}E$和$Rg_*K\to Rc_*q^{-1}K$也可构造Künneth公式。
:::
