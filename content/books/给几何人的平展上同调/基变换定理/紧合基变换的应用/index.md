---
title: 紧合基变换的应用
---

::: proposition [相对上同调维数] {@RelCohDimPrp}
若紧合概形映射$f:X\to Y$满足纤维维数$\leq n$，
则对所有挠层$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}})$都有当$q>2n$时
$R^qf_*\mathscr{F}=0$。
:::

::: proof
当$n=0$时，因为紧合且拟有限，则$f$有限，故命题由 @FiniteHDV 得到。

当$n>0$时，只需要证明茎为零即可。对几何点映射运用紧合基变换（@-ProperBaseCh）和
上同调维数的结果（@-CohoDim-I）即可得到结论。
:::

::: lemma {@019}
设概形$X$拟紧拟分离，
设$\mathscr{E}\in\operatorname{Ab}(X_{\operatorname{ét}})$且$A\in\mathrm{AbGrps}$，则
\[
R\Gamma(X,\mathscr{E}\otimes^{\mathbb{L}}_{\mathbb{Z}}\underline{A})=R\Gamma(X,\mathscr{E})\otimes^{\mathbb{L}}_{\mathbb{Z}}A.
\]
:::

::: proof
更一般的情况考虑[@StacksProject, Tag 0F0E]。
参照上述Tag里的证明，可以不妨设$A$是平坦$\mathbb{Z}$-模。因此只需证明当$A$是平坦$\mathbb{Z}$-模时
有
$H^n_{\operatorname{ét}}(X,\mathscr{E}\otimes^{\mathbb{L}}_{\mathbb{Z}}\underline{A})=H^n_{\operatorname{ét}}(X,\mathscr{E})\otimes^{\mathbb{L}}_{\mathbb{Z}}A$。
根据一个有趣的代数结论，即平坦模都可以写成有限自由模的滤余极限（Lazard定理，
参考[@StacksProject, Tag 058G]），
故而不妨设$A$是有限自由$\mathbb{Z}$-模，而此时结论显然成立。
:::

::: proposition {@022}
假设$f:X\to Y$紧合，
对任何挠层$\mathscr{E}\in\operatorname{Ab}(X_{\operatorname{ét}})$和层
$\mathscr{G}\in\operatorname{Ab}(Y_{\operatorname{ét}})$
（对$D^+(X_{\operatorname{ét}})$内挠上同调的$\mathscr{E}$和$D^+(Y_{\operatorname{ét}})$内的
$\mathscr{G}$也行），我们有
\[
Rf_*\mathscr{E}\otimes_{\mathbb{Z}}^{\mathbb{L}}\mathscr{G}=Rf_*(\mathscr{E}\otimes_{\mathbb{Z}}^{\mathbb{L}}f^{-1}\mathscr{G}).
\]
:::

::: proof
更一般的情况考虑[@StacksProject, Tag 0F0F]。
映射不难由伴随性给出，因此只需要在茎上验证。首先注意到
\[
(\mathscr{E}\otimes_{\mathbb{Z}}^{\mathbb{L}}f^{-1}\mathscr{G})\otimes_{\mathbb{Z}}^{\mathbb{L}}\mathbb{Q}
=(\mathscr{E}\otimes_{\mathbb{Z}}^{\mathbb{L}}\mathbb{Q})\otimes_{\mathbb{Q}}^{\mathbb{L}}(f^{-1}\mathscr{G}\otimes_{\mathbb{Z}}^{\mathbb{L}}\mathbb{Q})=0,
\]
则满足紧合基变换的条件，因此运用 @ProperBaseCh 和 @019 即可。
:::

::: remark {@023}
对挠环$\Lambda$和$\mathscr{E}\in D(X_{\operatorname{ét}},\Lambda)$和
$\mathscr{G}\in D(Y_{\operatorname{ét}},\Lambda)$也对，
参考[@StacksProject, Tag 0F0G]。
:::
