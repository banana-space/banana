---
title: 应用I——Mayer-Vietoris 列
---

我们运用Čech上同调可以得到和代数拓扑里类似的结论：

::: theorem [Mayer-Vietoris]
设概形$X=U\cup V$为开集的并，给定$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}})$，
我们有正合列：
\[
\begin{tikzcd}[row sep=small, column sep=small]
\cdots \arrow[r] & H^{s}_{\operatorname{ét}}(X,\mathscr{F}) \arrow[r]\arrow[d, phantom, ""{coordinate, name=Z}] & H^{s}_{\operatorname{ét}}(U,\mathscr{F})\oplus H^{s}_{\operatorname{ét}}(V,\mathscr{F}) \arrow[dll, rounded corners, to path={ -- ([xshift=2ex]\tikztostart.east) |- (Z) [near end]\tikztonodes -| ([xshift=-2ex]\tikztotarget.west) -- (\tikztotarget)}] \\
H^{s}_{\operatorname{ét}}(U\cap V,\mathscr{F}) \arrow[r] & H^{s+1}_{\operatorname{ét}}(X,\mathscr{F})\arrow[r]&\cdots.
\end{tikzcd}
\]
:::

::: proof
设覆盖为$\mathfrak{U}=\{U\to X,V\to X\}$。根据Čech上同调定义，我们有如下正合列：
\[
\begin{tikzcd}[row sep=small, column sep=small]
0 \arrow[r] & \check{H}^{0}(\mathfrak{U},\underline{H}^s(\mathscr{F})) \arrow[r]\arrow[d, phantom, ""{coordinate, name=Z}] & H^{s}_{\operatorname{ét}}(U,\mathscr{F})\oplus H^{s}_{\operatorname{ét}}(V,\mathscr{F}) \arrow[dll, rounded corners, to path={ -- ([xshift=2ex]\tikztostart.east) |- (Z) [near end]\tikztonodes -| ([xshift=-2ex]\tikztotarget.west) -- (\tikztotarget)}] \\
H^{s}_{\operatorname{ét}}(U\cap V,\mathscr{F}) \arrow[r] & \check{H}^{1}(\mathfrak{U},\underline{H}^s(\mathscr{F}))\arrow[r]&0.
\end{tikzcd}
\]
另一方面，
考虑谱序列
$E_2^{p,q}=\check{H}^p_{\operatorname{ét}}(X,\underline{H}^q(\mathscr{F}))\Rightarrow H^{p+q}_{\operatorname{ét}}(X,\mathscr{F})$。
注意到当$r>1$时有$\check{H}^{r}(\mathfrak{U},\underline{H}^s(\mathscr{F}))=0$，
运用谱序列结论[@Ful06, 命题2.2.4]我们有
如下正合列
\[
0\to\check{H}^{1}(\mathfrak{U},\underline{H}^s(\mathscr{F}))\to H^{s+1}_{\operatorname{ét}}(X,\mathscr{F})\to
\check{H}^{0}(\mathfrak{U},\underline{H}^{s+1}(\mathscr{F}))\to 0.
\]
综合两个正合列即可得到结论。
:::

::: remark
直接证明参考[@StacksProject, Tag 0A50]。
还有相对版本的Mayer-Vietoris列，我们不再赘述，见[@StacksProject, Tag 0EYK]。
:::
