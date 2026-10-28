---
title: Chern类和Chow环
---

<problems>
- 定义 Chern 类的方程组中 $c_0(\mathscr{E})=0$ 似乎应为 $c_0(\mathscr{E})=1$。
</problems>

接下来介绍一种定义上同调类里的Chern类的方法。

::: proposition
设$\mathscr{E}$是在$X_{\operatorname{Zar}}$上秩$m+1$局部自由层，
考虑对应的(Grothendieck-)射影丛$\pi:\mathbb{P}(\mathscr{E})\to X$。
设
$\xi=\mathrm{cl}_{\mathbb{P}(\mathscr{E})}(\mathscr{O}(1))\in H^2_{\operatorname{ét}}(\mathbb{P}(\mathscr{E}),\Lambda(1))$，
则$\pi^*$诱导出$H^*_{\operatorname{ét}}(\mathbb{P}(\mathscr{E}),\Lambda)$同构于基为$1,\xi,...,\xi^m$
的自由$H_{\operatorname{ét}}^*(X,\Lambda)$-模。
:::

::: proof
忽略，参考[@Mil80]命题VI.10.1，而Chow环的版本参考[@Fulton98]。
:::

因此存在唯一的$c_r(\mathscr{E})\in H^{2r}_{\operatorname{ét}}(X,\Lambda(r))$使得
\[
\left\{
\begin{array}{l}
\sum_{r=0}^{m+1}c_r(\mathscr{E})\xi^{m+1-r}=0,\\
c_0(\mathscr{E})=0.
\end{array}\right.
\]
我们称$c_r(\mathscr{E})$为$\mathscr{E}$第$r$个Chern类。
而$c(\mathscr{E}):=\sum_ic_i(\mathscr{E})$称为全Chern类，类似的
$c_t(\mathscr{E}):=\sum_ic_i(\mathscr{E})t^i$称为Chern多项式。

::: proposition [Grothendieck]
Chern类有如下性质：

(i)若$\pi:Y\to X$是光滑簇之间的映射且$\mathscr{E}$是$X$向量丛，则
\[
c_r(\pi^{-1}\mathscr{E})=\pi^{-1}(c_r(\mathscr{E}));
\]

(ii)若$\mathscr{L}$是$X$上线丛，则$c_1(\mathscr{L})$为$\mathscr{L}$在Kummer列诱导的
\[
\operatorname{Pic}(X)\to H^2_{\operatorname{ét}}(X,\Lambda(1))
\]
下的像；

(iii)若$0\to\mathscr{E}'\to\mathscr{E}\to\mathscr{E}''\to0$是向量丛正合列，则有
\[
c_t(\mathscr{E})=c_t(\mathscr{E}')c_t(\mathscr{E''}).
\]
:::

::: proof
参考文章[@AGChern58]。
:::

考虑Grothendieck群$K_0(X)$，因为$X$光滑，故任何凝聚层都有有限长的局部自由预解，因此有良定义的映射
\[
\gamma':C^*(X)\to K_0(X),\sum_iZ_i\mapsto \sum_i[\mathscr{O}_{Z_i}].
\]
考虑$K_0(X)$的典范滤过为$\cdots\subset F^rK_0X\subset F^{r-1}K_0X\subset\cdots$其中$F^iK_0X$
为被支撑在余维数$\geq i$的凝聚层生成的
子群（可以证明被$\mathscr{O}_Z$生成，其中$Z$余维数不小于$i$）。定义
\[
\operatorname{gr}^rK_0X:=F^{r}K_0X/F^{r+1}K_0X,\operatorname{gr} K_0X:=\bigoplus_r\operatorname{gr}^rK_0X.
\]
给集合$\operatorname{gr} K_0X$群结构为
\[
[\mathscr{M}]\cdot [\mathscr{N}]:=\sum_r(-1)^r[\mathscr{T}or_r^{\mathscr{O}}(\mathscr{M},\mathscr{N})].
\]
注意到$\gamma':C^*(X)\to K_0(X)$保持滤过结构，
因此有（满射）$\gamma'':C^*(X)\to\operatorname{gr} K_0X$。

::: proposition
同态$\gamma'':C^*(X)\to\operatorname{gr} K_0X$保持有理等价不变，故存在
\[
\gamma:\operatorname{CH}^*(X)\to \operatorname{gr} K_0X.
\]
:::

::: proof
因为只需考虑$X\times\mathbb{P}^1$的子簇到$\mathbb{P}^1$的支配映射，
故不妨设$X$就是那个子簇且有支配映射$f:X\to\mathbb{P}^1$。
设$D_0=f^{-1}(0),D_{\infty}=f^{-1}(\infty)$，我们有
\[
0\to f^*\mathscr{O}(-1)\to\mathscr{O}_X\to\mathscr{O}_{D_i}\to0.
\]
因此在$K_0(X)$内$[\mathscr{O}_{D_0}]=[\mathscr{O}_{D_{\infty}}]$，由于$f$平坦则维数没问题，故成立。
:::

接下来考虑$\gamma:\operatorname{CH}^*(X)\to \operatorname{gr} K_0X$是否是环同态。

::: lemma [Serre]
若$A,B\subset X$是光滑簇$X$的真相交（交概形分支的余维数是二者之和），
若$Z\subset A\cap B$是不可约分支，
则二者在$Z$的相交数为
\[
i(Z;A,B;X)
=\sum_{i=0}^{\dim X}(-1)^i\mathrm{length}_{\mathscr{O}_{A\cap B,Z}}
\left(\mathrm{Tor}_i^{\mathscr{O}_{X,Z}}(\mathscr{O}_{A,Z},\mathscr{O}_{B,Z})\right).
\]
:::

::: proof
参考[@Serre2000]。
:::

根据此引理则得到满的环同态
\[
\gamma:\operatorname{CH}^*(X)\to \operatorname{gr} K_0X.
\]
定义Chern特征标$\operatorname{ch}:K_0(X)\to H^*_{\operatorname{ét}}(X,\Lambda)$被如下特性决定：

- $\operatorname{ch}$是环同态；

- 对$f:Y\to X$有$\operatorname{ch}\circ f^*=f^*\circ\operatorname{ch}$；

- 对线丛$\mathscr{L}$有$\operatorname{ch}[\mathscr{L}]=\exp(c_1(\mathscr{L}))$。

::: remark
根据Chern root，不难得知这个是常规相交理论内的Chern特征标的扩展。
若$f$紧合，可能会研究其和$f_*$的交换关系，
这就会得到著名的Grothendieck-Riemann-Roch定理：
$\operatorname{ch}(f_*\mathscr{E})\mathrm{td}(T_Y)=f_*(\operatorname{ch}(\mathscr{E})\mathrm{td}(T_X))$。
:::

事实上这会诱导$\operatorname{ch}:\operatorname{gr} K_0X\to H^*_{\operatorname{ét}}(X,\Lambda)$，
但这不是环同态，我们重新考虑$H^*_{\operatorname{ét}}(X,\Lambda)'$
为定义乘法结构为
\[
x_r\cdot x_s:=\frac{-(r+s-1)!}{(r-1)!(s-1)!}x_r\cup x_s.
\]
则可以证明得到环同态
$\operatorname{ch}:\operatorname{gr} K_0X\to H^*_{\operatorname{ét}}(X,\Lambda)'$。

若$(2\dim X-1)!$在$\Lambda$内可逆，
则可以诱导$H^*_{\operatorname{ét}}(X,\Lambda)'\to H^*_{\operatorname{ét}}(X,\Lambda)$
为$x_r\mapsto x_r/(-1)^{r-1}(r-1)!$为同构。
给出复合
\[
\mathrm{cl}_X:\operatorname{CH}^*\stackrel{\gamma}{\longrightarrow}\operatorname{gr} K_0X\stackrel{\operatorname{ch}}{\longrightarrow}H^*_{\operatorname{ét}}(X,\Lambda)'
\to H^*_{\operatorname{ét}}(X,\Lambda).
\]

::: theorem
此时的$\mathrm{cl}_X$和之前定义的相同。
:::

::: proof
正确证明过于复杂，错误证明可参考[@Mil80]命题VI.10.6。
:::

若取$\Lambda=\underline{\mathbb{Z}/\ell^n\mathbb{Z}}$其中$\ell$是素数且在$k$内可逆。
若$\ell\geq 2\dim X$有
$\operatorname{CH}^*(X)\to\bigoplus_rH^{2r}_{\operatorname{ét}}(X,\mathbb{Z}_{\ell}(r))$。
若张量$\mathbb{Q}$，
则恒定有$\operatorname{CH}^*(X)\to\bigoplus_rH^{2r}_{\operatorname{ét}}(X,\mathbb{Q}_{\ell}(r))$。
