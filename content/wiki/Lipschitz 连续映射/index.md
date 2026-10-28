---
title: Lipschitz 连续映射
categories: [实分析]
---

<problems>
- “延拓”一节 Kirszbraun 定理的证明中，$s$ 的定义似乎缺少条件，应为使 $\bigcap_{i=1}^N \overline{B}(f(x_i),t|y-x_i|)$ 非空的 $t$ 的下确界。
- “Rademacher 定理”一节中 Rademacher 定理的证明里，$\int_{\mathbb{R}^n} \partial_v f(x)\varphi(x)\, dx=\int_{\mathbb{R}^n} f(x)\partial_v \varphi(x)\, dx$ 的右边似乎缺少负号。
- “面积公式”一节中关于 $Jf=0$ 的引理的证明里，由 $Jf(x)=0$ 似乎不能推出 $|f(x)-f(y)|\le |x-y|/N$（这需要 $Df(x)=0$），证明需要另外的论证。
- “面积公式”一节中面积公式的证明里，极分解给出的似乎是对称正定矩阵而不是对角矩阵。
- “余面积公式”一节中第一个引理的证明里，$\mathcal{H}^n(f(F_i))\le \operatorname{Lip}(f)^n\mathcal{H}^n(F_i)\le \operatorname{Lip}(f)^n\omega_n(\operatorname{diam}(F_i)/2)^n$ 中间一项对 $\mathbb{R}^m$ 的子集似乎不成立，似乎应直接由等径不等式得到 $\mathcal{H}^n(f(F_i))\le \omega_n(\operatorname{Lip}(f)\operatorname{diam}(F_i)/2)^n$。
</problems>

**Lipschitz 连续映射**是[[度量空间]]之间的一类[[连续映射]]。

## 定义

::: definition [Lipschitz连续映射]
设$(X,d_X),(Y,d_Y)$是度量空间，如果映射$f\colon X\to Y$满足存在常数$L\ge 0$，
使得对任意$x_1,x_2\in X$，都有$d_Y(f(x_1),f(x_2))\le Ld_X(x_1,x_2)$，
则称$f$是**Lipschitz连续映射**。
满足上述条件的$L$的下确界被称为$f$的**Lipschitz常数**，记为$\operatorname{Lip}(f;X)$。
在不引起混淆的情况下，$\operatorname{Lip}(f;X)$简记为$\operatorname{Lip}(f)$。
:::

如果$X=Y=\mathbb{R}$，则Lipschitz连续性是说$|f(x)-f(y)|\le L|x-y|(\forall x,y\in \mathbb{R})$，
即$f(x)$图像上任何两点连线的斜率绝对值不超过$L$。
换言之，Lipschitz连续函数是指增长率有界的一类函数。

## 延拓

对于映射$f\colon \mathbb{R}\to \mathbb{R}$，如果$f$是Lipschitz连续函数，
过$f$的图像上一点$(x_0,f(x_0))$以$\pm L$为斜率作两条直线，
则$f$的图像应当包含在这两条直线形成的左右两个角形区域$|y-f(x_0)|\le L|x-x_0|$中；
反过来，如果对图像上任何一点而言，$f$的图像都包含在这两个角形区域中，则$f$是Lipschitz连续函数。
这一直观描述给出了如下的延拓定理，
从度量空间的任何子集（不需要是闭集）到$\mathbb{R}$
的Lipschitz连续映射都可以在保持Lipschitz常数的意义下延拓到整个空间。

::: theorem [McShane引理]
设$(X,d)$是度量空间，$A\subseteq X$是$X$的任意子集，$f\colon A\to \mathbb{R}$是Lipschitz连续映射，
则存在Lipschitz连续映射$F\colon X\to \mathbb{R}$，
满足$F|_A=f$且$\operatorname{Lip}(F;X)=\operatorname{Lip}(f;A)$。
:::

::: proof
记$L=\operatorname{Lip}(f;A)$，定义$F\colon X\to \mathbb{R}$为
\[
F(x)=\inf_{y\in A} (f(y)+Ld(x,y)).
\]
断言$F$满足所需的性质。

第一步：证明$F|_A=f$。
设$x\in A$，根据定义有$F(x)\le f(x)+Ld(x,x)=f(x)$。
反过来，对任意$y\in A$都有$|f(y)-f(x)|\le Ld(x,y)$，从而
\[
f(y)+Ld(x,y)\ge f(x),
\]
所以$F(x)\ge f(x)$。
综合两方面得到$F|_A=f$。

第二步：证明$\operatorname{Lip}(F;X)=L$。
因为$F|_A=f$，所以自动有$\operatorname{Lip}(F;X)\ge L$。
反过来，对任意$x_1,x_2\in X$，根据定义
\[
F(x_1)-F(x_2)=\sup_{y_2\in A}\inf_{y_1\in A}(f(y_1)-f(y_2)+Ld(x_1,y_1)-Ld(x_2,y_2)).
\]
将$y_1$取成$y_2$，并利用[[度量空间|三角不等式]]可得
\[
F(x_1)-F(x_2)\le \sup_{y_2\in A} (Ld(x_1,y_2)-Ld(x_2,y_2))\le Ld(x_1,x_2).
\]
交换$x_1,x_2$，就能得到$|F(x_1)-F(x_2)|\le Ld(x_1,x_2)$，所以$\operatorname{Lip}(F;X)\le L$。
综合两方面得到$\operatorname{Lip}(F;X)=L$。
:::

证明中用到了$\mathbb{R}$的线性结构，因此难以将$\mathbb{R}$推广为一般的度量空间，
但是否可以推广到$\mathbb{R}^n$呢？
一个直接的想法是对于每个分量使用上述延拓定理，
但局限性在于无法保持$\operatorname{Lip}(F;X)=\operatorname{Lip}(f;A)$成立，
只能得到较弱的估计$\operatorname{Lip}(F;X)\le \sqrt{n}\operatorname{Lip}(f;A)$。
事实上，如果要求$X=\mathbb{R}^m$，则确实可以进行保持Lipschitz常数的延拓。
这一定理的证明需要如下几何引理，其中$\overline{B}(x,r)$表示以$x$为球心、$r$为半径的闭球。

::: lemma {@ballintersect}
设$N\in \mathbb{N}$，给定$x_1,\dots ,x_N\in \mathbb{R}^n$和$r_1,\dots ,r_N>0$，对于$t\ge 0$，定义
\[
C_t:=\bigcap_{i=1}^N \overline{B}(x_i,tr_i).
\]
则$\{t\ge 0\mid C_t\not =\emptyset\}=[s,\infty)(s<\infty)$，且$C_s$恰好包含一个点。
进一步，设$C_s=\{x\}$，则$x$落在那些满足$|x-x_i|=sr_i$的点$x_i$形成的凸包中。
:::

::: proof
容易看出$s$的存在性以及$C_s\not =\emptyset$。
下面使用反证法，如果$C_s$包含两个不同的点$x,y$（此时$s>0$），则$z=(x+y)/2$满足（注意不等号是严格的）
\[
|x_i-z|<\min \{|x_i-x|,|x_i-y|\}\le sr_i,\ \forall 1\le i\le N.
\]
根据连续性可知存在$0<s'<s$使得$z\in C_{s'}$，与$s$的最小性矛盾！

进一步，反设$C_s=\{x\}$且$x$不落在那些使得$|x-x_i|=sr_i$的点$x_i$形成的凸包中（此时亦有$s>0$）。
不妨设这些点就是$x_1,\dots ,x_k(k\le N)$，
显然$k\ge 1$（否则将$s$略微减小依然有$C_s\not =\emptyset$）。
存在一条过$x$的直线$l$使得$x_1,\dots ,x_k$均位于$x$的同侧且不在$l$上。
考虑$x$沿垂直于$l$的方向朝着$x_1,\dots ,x_k$所在一侧移动少许所得的点$y$，则当$|x-y|$充分小时，
对$1\le i\le k$都有$|x_i-y|<|x_i-x|=sr_i$，并且根据连续性可知对$k<i\le N$也有$|x_i-y|<sr_i$。
所以$y\in C_s$，与$C_s=\{x\}$矛盾！
:::

::: theorem [Kirszbraun定理]
设$A\subseteq \mathbb{R}^m$，$f\colon A\to \mathbb{R}^n$是Lipschitz映射，
则存在Lipschitz映射$F\colon \mathbb{R}^m\to \mathbb{R}^n$，
使得$F|_A=f$且$\operatorname{Lip}(F;\mathbb{R}^m)=\operatorname{Lip}(f;A)$。
:::

::: proof
利用[[Zorn引理]]的一套抽象废话（参见[[Hahn–Banach定理]]的证明），
只需证明对任意一点$y\in \mathbb{R}^m\setminus A$，
可以将$f$保持Lipschitz常数地延拓到$A\cup \{y\}$上。
也就是说，
存在映射$g\colon A\cup \{y\}\to \mathbb{R}^n$满足$g|_A=f$且
$\operatorname{Lip}(g;A\cup \{y\})=\operatorname{Lip}(f;A)$。

通过乘上常数，可以不妨设$\operatorname{Lip}(f;A)=1$。
映射$g$由$z:=g(y)\in \mathbb{R}^n$唯一确定，需要满足的条件等价于
\[
|z-f(x)|\le |y-x|,\ \forall x\in A.
\]
也就是说，需要
\[
z\in \bigcap_{x\in A} \overline{B}(f(x),|y-x|).
\]
因为一族紧集的交为空集当且仅当其中有限个的交为空集，所以只需证明对有限个点$x_1,\dots ,x_N\in A$，有
\[
\bigcap_{i=1}^N \overline{B}(f(x_i),|y-x_i|)\not =\emptyset.
\]

记
\[
s=\inf \{t\ge 0\mid \overline{B}(f(x_i),t|y-x_i|)\}.
\]
只需证明$s\le 1$。
根据 @ballintersect，设$\bigcap_{i=1}^N \overline{B}(f(x_i),s|y-x_i|)=\{z\}$，
且使得$|f(x_i)-z|=s|y-x_i|$的$x_i$恰好是$x_1,\dots,x_k(1\le k\le N)$，
则存在$\lambda_1,\dots ,\lambda_k\in [0,1]$，
使得$\sum_{i=1}^k\lambda_i=1$且$z=\sum_{i=1}^k\lambda_if(x_i)$。
于是
\[
\begin{aligned}
  0&=2\left| \sum_{i=1}^k \lambda_i (z-f(x_i)) \right|^2=2\sum_{i,j=1}^k \lambda_i\lambda_j(z-f(x_i))(z-f(x_j))\\
  &=\sum_{i,j=1}^k \lambda_i\lambda_j (|z-f(x_i)|^2+|z-f(x_j)|^2-|f(x_i)-f(x_j)|^2)\\
  &\ge \sum_{i,j=1}^k \lambda_i\lambda_j (s^2|y-x_i|^2+s^2|y-x_j|^2-|x_i-x_j|^2)\\
  &=\sum_{i,j=1}^k \lambda_i\lambda_j (2s^2(y-x_i)(y-x_j)+(s^2-1)|x_i-x_j|^2)\\
  &=2s^2\left| \sum_{i=1}^k \lambda_i(y-x_i)\right|^2+(s^2-1)\sum_{i,j=1}^k \lambda_i\lambda_j |x_i-x_j|^2.
  \end{aligned}
\]
如果$s>1$，则后一项必须为$0$，也就是说只能$k=1$，但这种情况会导致$s=0$，故必须有$s\le 1$，
从而结论得证。
:::

## Rademacher定理

对于Lipschitz函数$f\colon \mathbb{R}\to \mathbb{R}$，因为$f$是[[绝对连续函数]]，
利用实分析中的[[微积分基本定理]]可知，$f$的导数几乎处处存在。
进一步，如果考虑定义域是$\mathbb{R}^n$上的情况，
是否会有Lipschitz函数$f\colon \mathbb{R}^n\to \mathbb{R}$一定几乎处处可微呢？
答案是肯定的，这就是Rademacher定理，下面给出一个直接的证明。
之后，还将利用[[Sobolev空间]]的理论再次得到这一结果。

::: theorem [Rademacher定理] {@rademacher}
设$f\colon \mathbb{R}^n\to \mathbb{R}$是Lipschitz函数，则

- 对于每个方向$v\in S^{n-1}$，方向导数$\partial_v f$几乎处处存在。

- 用$\partial_i$表示关于第$i$个坐标轴正方向的方向导数，如果$v=(v_1,\dots ,v_n)\in S^{n-1}$，
  则几乎处处成立
  \[
  \partial_v f(x)=v_1\partial_1 f(x)+\cdots +v_n\partial_n f(x).
  \]

- $f$几乎处处可微，且几乎处处成立$df(x)=(\partial_1 f(x),\dots ,\partial_n f(x))$。

:::

::: proof
利用旋转，只需证明$\partial_n f$几乎处处存在。
将$\mathbb{R}^n$视为$\mathbb{R}^{n-1}\times \mathbb{R}$。
对任意$x'\in \mathbb{R}^{n-1}$，
关于$x_n$的函数$x_n\mapsto f(x',x_n)$是$\mathbb{R}$上的Lipschitz函数。
根据前文所述，其在$\mathbb{R}$上几乎处处可导。
这正是说对每个$x'\in \mathbb{R}^{n-1}$而言，
在$\{x'\}\times \mathbb{R}$上$\partial_n f$几乎处处存在。
结合[[Fubini定理]]可知$\partial_n f$几乎处处存在。

接下来，设$v=(v_1,\dots ,v_n)\in S^{n-1}$，对任意$\varphi\in C_c^\infty(\mathbb{R}^n)$和任意$h>0$，
有
\[
\int_{\mathbb{R}^n} \dfrac{f(x+hv)-f(x)}{h}\varphi(x)\, dx=-\int_{\mathbb{R}^n} f(x)\dfrac{\varphi(x)-\varphi(x-hv)}{h}\, dx.
\]
令$h\to 0+$，使用[[控制收敛定理]]可得
\[
\int_{\mathbb{R}^n} \partial_v f(x)\varphi(x)\, dx=\int_{\mathbb{R}^n} f(x)\partial_v \varphi(x)\, dx=-\sum_{i=1}^n v_i\int_{\mathbb{R}^n}f(x)\partial_i \varphi(x)\, dx.
\]
注意到右边的积分都是可以使用[[分部积分公式]]的。
以$i=n$为例，利用Fubini定理和$f(x)$关于每个分量的绝对连续性可得
\[
\begin{aligned}
  \int_{\mathbb{R}^n} f(x)\partial_n \varphi(x)\, dx&=\int_{\mathbb{R}^{n-1}}\left(\int_\mathbb{R} f(x',x_n)\partial_n \varphi(x',x_n)\, dx_n\right)\, dx'\\
  &=-\int_{\mathbb{R}^{n-1}}\left(\int_\mathbb{R} \partial_n f(x',x_n)\varphi(x',x_n)\, dx_n\right)\, dx'\\
  &=-\int_{\mathbb{R}^n}\partial_n f(x)\varphi(x)\, dx.
  \end{aligned}
\]
代入上式得到
\[
\int_{\mathbb{R}^n} \partial_v f(x)\varphi(x)\, dx=\int_{\mathbb{R}^n} \left(\sum_{i=1}^n v_i\partial_i f(x)\right)\varphi(x)\, dx.
\]
由$\varphi$的任意性可知，几乎处处成立
\[
\partial_v f(x)=v_1\partial_1 f(x)+\cdots +v_n\partial_n f(x).
\]

最后来证明$f$几乎处处可微。取$S^{n-1}$的稠密子集$v_1,v_2,\dots$，对每个$k\in \mathbb{N}$定义
\[
A_k=\{x\in \mathbb{R}^n\mid \partial_{v_k} f(x)=\sum_{i=1}^n (v_k)_i\partial_i f(x)\},
\]
则$|\mathbb{R}^n\setminus A_k|=0$。
再定义$A=\bigcap_{k\in \mathbb{N}} A_k$，则$|\mathbb{R}^n\setminus A|=0$，下面证明$f$在$A$上可微，
并且有
\[
df(x)=(\partial_1f(x),\dots ,\partial_nf(x)),\ \forall x\in A.
\]

对于$x\in A$，$v\in S^{n-1}$以及$h>0$，定义
\[
Q_x(v,h)=\dfrac{f(x+hv)-f(x)}{h}-\sum_{i=1}^n v_i \partial_i f(x).
\]
则已经证明了
\[
\lim_{h\to 0+} Q_x(v_k,h)=0.
\]
对于任意$\varepsilon>0$，取$v_1,\dots ,v_N\in S^{n-1}$，满足对任意$v\in S^{n-1}$，
存在$1\le k\le N$使得$|v-v_k|<\varepsilon$，从而
\[
Q_x(v,h)-Q_x(v_k,h)=\dfrac{f(x+hv)-f(x+hv_k)}{h}-\sum_{i=1}^n (v_i-(v_k)_i)\partial_i f(x).
\]
所以
\[
|Q_x(v,h)-Q_x(v_k,h)|\le \operatorname{Lip}(f)\varepsilon+n\operatorname{Lip}(f)\varepsilon=(n+1)\operatorname{Lip}(f)\varepsilon.
\]
当$h$充分小时，$|Q_x(v_k,h)|\le \varepsilon(\forall 1\le k\le N)$，于是对一切$v\in S^{n-1}$都有
\[
|Q_x(v,h)|\le ((n+1)\operatorname{Lip}(f)+1)\varepsilon.
\]
这就证明了当$h\to 0+$时$Q_x(v,h)$关于$v$一致收敛到$0$，故结论得证。
:::

::: remark
因为Lipschitz函数可以延拓，并且可微是局部性质，所以只要局部Lipschitz连续就足够保证几乎处处可微。
:::

仔细观察这个证明，其实关键在于方向导数的“平凡”性质
\[
\partial_v f(x)=\sum_{i=1}^n v_i\partial_i f(x).
\]
为了得到上式，考察了形如
\[
\tau_vf(h):=\dfrac{f(x+hv)-f(x)}{h}
\]
的式子，这在分析学中被称为[[差商]]。
在Sobolev空间的理论中，差商是十分有效的工具。
上面的证明中用到了差商的一个重要性质，即对于$\varphi\in C_c^\infty(\mathbb{R}^n)$，
通过换元可以得到（看起来像是离散版本的分部积分公式）
\[
\int_{\mathbb{R}^n} \tau_hf(x)\varphi(x)\, dx=-\int_{\mathbb{R}^n} f(x)\tau_{-h}\varphi(x)\, dx.
\]

下面将使用Sobolev空间的理论证明Rademacher定理。
为了与方向导数$\partial_i$区分，用$D_i$表示关于第$i$个分量的弱导数。

::: theorem {@W1infty}
$f\colon \mathbb{R}^n\to \mathbb{R}$几乎处处等于一个Lipschitz连续函数当且仅当
$f\in W^{1,\infty}(\mathbb{R}^n)$。
进一步，此时$D_i f(x)=\partial_i f(x)$对几乎所有$x\in \mathbb{R}^n$成立。
:::

::: proof
仔细观察 @rademacher 的证明，
会发现已经验证了Lipschitz连续函数$f\colon \mathbb{R}^n\to \mathbb{R}$具有弱导数，
且$D_if$几乎处处等于$\partial_i f$。
这就证明了“仅当”，下面证明“当”。

假设$f\in W^{1,\infty}(\mathbb{R}^n)$，取[[磨光化子]]$\rho$对$f$进行磨光，
即定义$f_\varepsilon=\rho_\varepsilon * f(\varepsilon>0)$。
根据磨光化子的一般性质，
有$\|Df_\varepsilon\|_{L^\infty(\mathbb{R}^n)}\le \|Df\|_{L^\infty(\mathbb{R}^n)}$，
并且存在子列$\varepsilon_1,\varepsilon_2,\dots \to 0+$，使得$f_{\varepsilon_k}$几乎处处收敛到$f$。
因为$f_\varepsilon\in C^\infty(\mathbb{R}^n)$，所以
\[
|f_\varepsilon(x)-f_\varepsilon(y)|\le \|Df_\varepsilon\|_{L^\infty(\mathbb{R}^n)}|x-y|\le \|Df\|_{L^\infty(\mathbb{R}^n)}|x-y|.
\]
记$A=\{x\in \mathbb{R}^n\mid \lim_{k\to \infty}f_{\varepsilon_k}(x)=f(x)\}$，
则$|\mathbb{R}^n\setminus A|=0$，
并且上式表明对任意$x,y\in A$有$|f(x)-f(y)|\le \|Df\|_{L^\infty(\mathbb{R}^n)}|x-y|$。
使用延拓定理可以将$f|_A$延拓为$\mathbb{R}^n$上的Lipschitz连续函数，
故$f$几乎处处等于一个Lipschitz连续函数。
:::

当$n<p\le \infty$时，根据[[Sobolev嵌入定理]]，$W^{1,p}$可以嵌入[[Hölder空间]]。
在下面的论述中，对于$f\in W^{1,p}(n<p\le \infty)$，总是不妨假设$f$是连续函数。
将要证明这种情况下，$f$总是几乎处处可微的，结合 @W1infty 就证明了Rademacher定理。

需要用到如下的[[Morrey不等式]]，它是证明Sobolev嵌入定理的工具之一。
其证明可以参见任何一本介绍Sobolev空间的教材。

::: lemma [Morrey不等式]
对于$n<p<\infty$，存在只与$p,n$有关而与$x,r$无关的常数$C$，
使得对任意$f\in W^{1,p}(B(x,2r))$和任意$y\in B(x,r)$，都有
\[
|f(x)-f(y)|\le C|x-y|^{1-n/p}\|Df\|_{L^p(B(x,2r))}.
\]
:::

::: theorem {@W^1,pdif}
设$f\in W^{1,p}_{loc}(\mathbb{R}^n)$，其中$n<p\le \infty$，则$f$几乎处处可微，
且$df(x)=Df(x)(a.e.\ x\in \mathbb{R}^n)$。
:::

::: proof
因为$W^{1,\infty}_{loc}$总是包含在$W^{1,p}_{loc}$中，只需处理$n<p<\infty$的情况。
根据Morrey不等式，存在常数$C$使得对任意$x,y\in \mathbb{R}^n$都有
\[
|f(x)-f(y)|\le C|x-y|^{1-n/p}\|Df\|_{L^p(B(x,2|x-y|))}.
\]

接下来，不是对$f$而是对$y\mapsto f(y)-Df(x)y$这个函数使用上式，得到
\[
|f(x)-f(y)-Df(x)(y-x)|\le C|x-y|^{1-n/p}\|Df(\cdot)-Df(x)\|_{L^p(B(x,2|x-y|))}.
\]
如果$x$是$Df$的[[Lebesgue点]]，则当$y\to x$时
\[
|f(x)-f(y)-Df(x)(y-x)|=C|x-y|^{1-n/p}o(|x-y|^{n/p})=o(|x-y|).
\]
因此$f$在$x$处可微且$df(x)=Df(x)$。
最后，因为几乎所有点都是$Df$的Lebesgue点，结论得证。
:::

::: remark
也许 @W^1,pdif 以及Sobolev嵌入定理$W^{1,p}\hookrightarrow C^{0,1-n/p}(n<p<\infty)$
会让人猜想Hölder连续函数也几乎处处可微。
但事实恰好相反，如果$\alpha\in (0,1)$，则存在$C^{0,\alpha}$但无处可微的函数。
本质上来说，这是因为$C^{0,\alpha}$允许很“陡”的函数，但Lipschitz函数的斜率是有界的。
:::

## 面积公式

任何学过微积分的人都应当知道如何求曲线的长度。
如果$u\colon [a,b]\to \mathbb{R}^n(n\ge 1)$是$C^1$单射，则参数曲线$u([a,b])$的长度为
\[
\int_a^b |u'(t)|\, dt.
\]
特别的，一类参数曲线由函数的图像给出。
设$f\colon [a,b]\to \mathbb{R}$是$C^1$函数，
则$f$的图像$\{(x,f(x))\mid x\in [a,b]\}$构成一条参数曲线$x\mapsto (x,f(x))$，其长度为
\[
\int_a^b |(1,f'(x))|\, dx=\int_a^b \sqrt{1+|f'(x)|^2}\, dx.
\]

更一般的，对于高维的曲面，如果$U$是$\mathbb{R}^m$中的开区域，
$u\colon U\to \mathbb{R}^n(n\ge m)$是$C^1$单射，则$m$维参数曲面$u(U)$的面积为
\[
\int_U Ju\, dx.
\]
其中$Ju$可以称为$u$的[[Jacobi行列式]]或者**面积因子**，其定义如下。

::: definition [面积因子]
对于$u\colon \mathbb{R}^m\to \mathbb{R}^n(n\ge m)$，如果$u$在$x$处可微，定义面积因子
\[
Ju(x)=\sqrt{\det (Du(x)^T Du(x))},\ Du(x)=(D_ju_i(x))_{1\le i\le n,\ 1\le j\le m}.
\]
:::

特别的，如果$f\colon U\to \mathbb{R}$是$C^1$函数，则$f$的图像是$m$维参数曲面，其面积是
\[
\int_U J(x_1,\dots ,x_m,f(x))\, dx=\int_U \sqrt{1+|Df(x)|^2}\, dx.
\]

实分析引入了[[测度]]这一概念来描述面积，因此一个自然的问题是上面定义的面积能否实现为某种测度。
答案是可以的，对应的测度是[[Hausdorff测度]]$\mathcal{H}^m$。
面积公式正是在描述这件事，并且将$C^1$映射推广为Lipschitz连续映射（回忆Rademacher定理，
$\mathbb{R}^n$上的Lipschitz连续函数几乎处处可微）。

::: remark
参数曲线的长度还可以用[[全变差]]定义，即对于连续单射$u\colon [a,b]\to \mathbb{R}^n$，
定义$\Gamma=u([a,b])$的长度为
\[
l:=\sup_{a=x_0<x_1<\cdots <x_n\le b,\ n\in \mathbb{N}} \sum_{i=1}^n|u(x_i)-u(x_{i-1})|.
\]
可以证明$l=\mathcal{H}^1(\Gamma)$，大致的方法如下：
一方面，因为投影不会增大Hausdorff测度，所以$\mathcal{H}^1(u[x_{i-1},x_i])\ge |u(x_i)-u(x_{i-1})|$，
这就得到$\mathcal{H}^1(\Gamma)\ge l$；
另一方面，可以取[[弧长参数]]$\widetilde{u}\colon [0,l]\to \mathbb{R}^n$，
有$\operatorname{Lip}(\widetilde{u})\le 1$，
所以$\mathcal{H}^1(\Gamma)\le \operatorname{Lip}(\widetilde{u}) \mathcal{H}^1([0,l])\le l$。

这个证明中用到了Hausdorff测度的一个简单性质，
\[
\mathcal{H}^m(f(E))\le \operatorname{Lip}(f)^m \mathcal{H}^m(E).
\]
这一性质将在今后反复使用。

注意这一等价性只需要$u$是连续单射。
如果$u$是$C^1$单射，则显然有$l=\int_a^b |u'|$。
而面积公式是说当$u$仅仅是Lipschitz单射时这件事情也成立。
:::

下面将陈述并证明完整形式的面积公式，作为推论得到参数曲面面积与Hausdorff测度的等价性。
证明方法是利用$f$在局部上近似于仿射变换$x\mapsto f(x_0)+Df(x_0)(x-x_0)$
（其中$x-x_0$视为列向量，$Df(x_0)(x-x_0)$是矩阵的乘积），
面积公式对仿射变换成立；
将$f$的定义域切成一些小块，每一小块上用近似的仿射变换去逼近。

首先给出几个引理，其中包含了面积公式的特例，将在证明中被使用。
因为有延拓定理，因此总是可以不妨设$f$是定义在整个$\mathbb{R}^m$上而非其子集上。

::: lemma {@measurable}
设$f\colon \mathbb{R}^m\to \mathbb{R}^n$是Lipschitz连续映射，$E$是Lebesgue可测集，
则$f(E)$是$\mathcal{H}^m$-可测集。
:::

::: proof
Lebesgue可测集$E$能够写成可数个紧集以及一个$\mathcal{H}^m$-零测集之并。
紧集在连续映射下的像还是紧集，从而$\mathcal{H}^m$-可测。
$\mathcal{H}^m$-零测集在Lipschitz映射下的像还是$\mathcal{H}^m$-零测集，从而也$\mathcal{H}^m$-可测。
:::

::: lemma {@critical}
设$f\colon \mathbb{R}^m\to \mathbb{R}^n(m\le n)$是Lipschitz连续映射，
$E\subseteq \mathbb{R}^m$是Lebesgue可测集，且对任意$x\in E$有$Jf(x)=0$（特别的，要求$Df(x)$存在），
则关于$y\in \mathbb{R}^n$的函数$y\mapsto \mathcal{H}^0(E\cap f^{-1}(y))$是$\mathcal{H}^m$-可测函数，
且
\[
\int_{\mathbb{R}^n}\mathcal{H}^0(E\cap f^{-1}(y))\, d\mathcal{H}^m(y)=0.
\]
:::

::: proof
只需证明$\mathcal{H}^m(E)<\infty$的情况，
一般的情况利用$\mathbb{R}^m$是$\sigma$-紧的以及单调收敛定理即可。

对任意$N\in \mathbb{N}$，对于每个点$x\in E$，存在$r>0$，使得对任意$y\in B(x,r)$有
\[
|f(x)-f(y)|\le |x-y|/N.
\]
定义$A_k(k\in \mathbb{N})$为
\[
A_k=\{x\in E\mid |f(x)-f(y)|\le |x-y|/N,\ \forall y\in B(x,1/k)\}.
\]
则$A_k\subseteq A_{k+1}$且$A_N,A_{N+1},\dots $构成$E$的可数覆盖。

将$A_N,A_{N+1},\dots $中每个$A_k$分成可数个直径小于$1/k$（更小于$1/N$）的可测集，
并且让这些集合两两不交，记为$B_{1,N},B_{2,N},\dots $。
每个$B_{i,N}$都包含在某个$A_k(k\ge N)$中，并且$B_{i,N}$中任意两个点的距离小于$1/k$，
所以对任意$x,y\in B_{i,N}$有
\[
|f(x)-f(y)|\le |x-y|/N.
\]
也就是说$\operatorname{Lip}(f;B_{i,N})\le 1/N$。

考虑$\mathcal{H}^m$-可测函数$\sum_{i=1}^\infty \chi_{f(B_{i,N})}$，根据单调收敛定理有
\[
\int_{\mathbb{R}^n} \sum_{i=1}^\infty \chi_{f(B_{i,N})}(y) d\mathcal{H}^m(y)=\sum_{i=1}^\infty \mathcal{H}^m(f(B_{i,N}))\le \sum_{i=1}^\infty \operatorname{Lip}(f;B_{i,N})^m\mathcal{H}^m(B_{i,N})\le \mathcal{H}^m(E)/N^m.
\]

最后，自然想要令$N\to \infty$。
为了求左边的极限，需要加上一个限制，即要求每个$B_{i,N+1}$都包含在某个$B_{j,N}$中。
因为$B_{i,N}$的半径小于$1/N$，
容易证明$\sum_{i=1}^\infty \chi_{f(B_{i,N})}(y)$递增地逐点收敛到
$\mathcal{H}^0(E\cap f^{-1}(y))$（见下方的注），利用单调收敛定理就完成了证明。
:::

::: remark
关键技巧之一在于将$\mathcal{H}^0(E\cap f^{-1}(y))$实现为$\sum_{i=1}^\infty \chi_{f(B_{i,N})}(y)$
的递增逐点极限，
其中$B_{1,N},B_{2,N},\dots $是$E$的可测划分，每个$B_{i,N+1}$都包含在某个$B_{j,N}$中，
且$B_{i,N}$的直径关于$N$一致趋于$0$。
这件事的证明如下：因为$B_{i,N}$是划分，
所以$\sum_{i=1}^\infty \chi_{f(B_{i,N})}\le \mathcal{H}^0(E\cap f^{-1}(y))$；
反过来，对任意$t$个不同的点$x_1,\dots ,x_t\in E\cap f^{-1}(y)$，只要$N$充分大，
它们就必须落在$t$个不同的$B_{i,N}$中，
由此得到$\lim_{N\to \infty} \sum_{i=1}^\infty \chi_{f(B_{i,N})}(y)\ge t$，由$t$的任意性即证。

对于Lipschitz映射而言，$f(B_{i,N})$的可测性得以保持（@measurable），
从而得到$\mathcal{H}^0(E\cap f^{-1}(y))$的可测性。
注意这件事并不依赖于在$E$上$Jf=0$，在面积公式中也会遇到这样的可测性结果。

如果$f$不是Lipschitz映射，并不能直接得到$f(B_{i,N})$的可测性。
比如说，容易构造可测函数$\varphi\colon [0,1]\to \mathbb{R}$，
使得一元函数$y\mapsto \mathcal{H}^0(\varphi^{-1}(y))$不可测。
但是，如果还要求$\varphi$是连续的，则$\mathcal{H}^0(\varphi^{-1}(y))$又是可测函数了。
这是因为可以将$[0,1]$分成$2^N$个长度为$1/2^N$的闭区间$I_{1,N},\dots ,I_{2^N,N}$，
利用紧集在连续函数下的像是紧集可以得到可测性。
虽然此时相邻两个小区间有一个公共点，但这样的点只有可数个，
从而$\sum_{i=1}^{2^N} \chi_{f(I_{i,N})}(y)$几乎处处收敛到$\mathcal{H}^0(f^{-1}(y))$。
:::

::: lemma {@singular}
设$f\colon \mathbb{R}^m\to \mathbb{R}^n(m\le n)$是Lipschitz连续映射，
对于Lebesgue可测集$E\subseteq \mathbb{R}^m$，
关于$y\in \mathbb{R}^n$的函数$y\mapsto \mathcal{H}^0(E\cap f^{-1}(y))$是$\mathcal{H}^m$-可测函数，且
\[
\int_{\mathbb{R}^n}\mathcal{H}^0(E\cap f^{-1}(y))\, d\mathcal{H}^m(y)\le \operatorname{Lip}(f)^m |E|.
\]
特别的，如果$|E|=0$，则$\int_{\mathbb{R}^n} \mathcal{H}^0(E\cap f^{-1}(y))\, d\mathcal{H}^m (y)=0$。
:::

::: proof
仿照 @critical 的证明，此时$B_{i,N}$可以选取任何直径小于$1/N$的子集，
总有$\mathcal{H}^m(f(B_{i,N}))\le \operatorname{Lip}(f)^m \mathcal{H}^m(B_{i,N})$，从而结论成立。
:::

::: theorem [面积公式]
设$f\colon \mathbb{R}^m\to \mathbb{R}^n(m\le n)$是Lipschitz连续映射，
则对于Lebesgue可测集$E\subseteq \mathbb{R}^m$，
关于$y\in \mathbb{R}^n$的函数$y\mapsto \mathcal{H}^0(E\cap f^{-1}(y))$是$\mathcal{H}^m$-可测函数，且
\[
\int_{\mathbb{R}^n}\mathcal{H}^0(E\cap f^{-1}(y))\, d\mathcal{H}^m(y)=\int_E Jf(x)\, dx.
\]
:::

::: remark
左边的被积函数$\mathcal{H}^0(E\cap f^{-1}(y))$等于$y$被$f|_E$映到的次数。
因为没有要求$f$是单射（单射的情况见 @injarea），所以左边应该是$f(E)$带有“重数”的面积。
:::

::: proof
先对$E$进行一些简化，根据Rademacher定理，$f$几乎处处可微，
$E$中使得$f$不可微的点构成$\mathcal{H}^m$-零测集，
根据 @singular 可知其对于结论左右两边的贡献都是$0$。
再考虑$E$中使得$Jf(x)=0$的点$x$组成的集合，则根据 @critical 可知这个子集对结论两边的贡献也都是$0$。
因此，可以不妨设$f$在$E$上处处可微且$Jf>0$。

用$\|\cdot \|$表示算子范数，定义
\[
G=\{S\text{是}n\times m\text{矩阵}\mid JS>0\},\ JS:=\sqrt{\det(S^TS)}.
\]
则$S\in G$是$\mathbb{R}^m$到$\mathbb{R}^n$中一个$m$维超平面的嵌入，并且成立
\[
\mathcal{H}^m(S(E))=JS\mathcal{H}^m(E).
\]
（这件事需要证明，但并不困难。
比如说利用[[极分解]]，$S$可以分解成$n\times m$的[[正交矩阵]]乘上一个$m\times m$的[[对角矩阵]]，
其中$n\times m$的正交矩阵是指$S^TS=I$。
上式对这两类矩阵都显然成立，并且$JS$也可以表示为这二者的面积因子的乘积。）

取$G$的稠密子集$S_1,S_2,\dots$。
对任意$0<\varepsilon<1$，对于每个点$x\in E$，存在某个$S_k$使得$\|Df(x)-S_k\|<\varepsilon$，于是
\[
(1-\varepsilon)^m JS_k<Jf(x)<(1+\varepsilon)^m JS_k.
\]
（作者的线性代数不太好，也可能不是$(1\pm \varepsilon)^m$，但总之是一个$1+O(\varepsilon)$的东西。）

当$|y-x|$充分小时，
\[
(1-\varepsilon)|S_k(y-x)|<|f(y)-f(x)|<(1+\varepsilon)|S_k(y-x)|.
\]

然后是 @critical 的故技重施，考虑$E$的覆盖
\[
A_k=\{x\in E\mid \|Df(x)-S_k\|<\varepsilon,\ \text{且}\forall y\in B(x,1/k),\ \text{上式成立}\},\ k\in \mathbb{N}.
\]
将这些$A_k$切成直径小于$1/k$的小块，即$B_1,B_2\dots$构成$E$的可测划分，
每个$B_i$都包含在某个$A_k$中且$B_i$的直径小于$1/k$。

根据构造，对任意$x,y\in B_i$，都有
\[
(1-\varepsilon)|S_k(y-x)|<|f(x)-f(y)|\le (1+\varepsilon)|S_k(y-x)|.
\]
由此可知$f|_{B_i}$是单射，
用$S_k^{-1}(x),S_k^{-1}(y)$代替$x,y$（回忆$S_k$是$\mathbb{R}^m$到$\mathbb{R}^n$中一个$m$
维超平面的嵌入），得到对任意$x,y\in S_k(B_i)$，有
\[
(1-\varepsilon)|x-y|<|(fS_k^{-1})(y)-(fS_k^{-1})(x)|<(1+\varepsilon)|x-y|.
\]
所以$1-\varepsilon\le \operatorname{Lip}(fS_k^{-1};S_k(B_i))\le 1+\varepsilon$，由此可得
\[
\mathcal{H}^m(f(B_i))\le \operatorname{Lip}(fS_k^{-1})^m \mathcal{H}^m(S_k(B_i))=(1+\varepsilon)^mJS_k\mathcal{H}^m(B_i)\le (1+\varepsilon)^m(1-\varepsilon)^{-m}\int_{B_i} Jf(x)\, dx.
\]
类似的，
\[
(1+\varepsilon)^{-m}\int_{B_i}Jf(x)\, dx\le J(S_k)\mathcal{H}^m(B_i)=\mathcal{H}^m(S_k(B_i))\le \operatorname{Lip}((fS_k^{-1})^{-1})^m\mathcal{H}^m(f(B_i))\le (1-\varepsilon)^{-m}\mathcal{H}^m(f(B_i)).
\]
结合上面两个式子得到
\[
(1-\varepsilon)^m(1+\varepsilon)^{-m}\int_{B_i}Jf(x)\, dx\le \mathcal{H}^m(f(B_i))\le (1+\varepsilon)^m(1-\varepsilon)^{-m}\int_{B_i} Jf(x)\ dx.
\]

将所有$B_i$加起来，注意$f|_{B_i}$是单射，利用单调收敛定理得到
\[
(1-\varepsilon)^m(1+\varepsilon)^{-m}\int_E Jf(x)dx\le \int_{\mathbb{R}^n} \mathcal{H}^0(E\cap f^{-1}(y))\, d\mathcal{H}^m(y)\le (1+\varepsilon)^m(1-\varepsilon)^{-m}\int_E Jf(x)\, dx.
\]
最后，令$\varepsilon\to 0+$就完成了证明。
:::

::: corollary {@injarea}
设$f\colon \mathbb{R}^m\to \mathbb{R}^n(m\le n)$是Lipschitz连续单射，
则对Lebesgue可测集$E\subseteq \mathbb{R}^m$，有$f(E)$是$\mathcal{H}^m$-可测集，且
\[
\mathcal{H}^m(f(E))=\int_E Jf(x)\, dx.
\]
也就是说，通常定义的$C^1$参数曲面面积确实等于$m$维Hausdorff测度。
:::

面积公式可以看成换元公式的推广。
如果$f\colon \mathbb{R}^m\to \mathbb{R}^n(m\le n)$是Lipschitz连续单射，则
\[
\int_{\mathbb{R}^n} \chi_{f(E)}(y)\, d\mathcal{H}^m(y)=\mathcal{H}^m (f(E))=\int_{\mathbb{R}^m} \chi_E(x)Jf(x)\, dx.
\]
这可以看成在左边做了通常的换元$y=f(x)$，右边的被积函数需要乘上Jacobi行列式$Jf$。
更一般的，利用单调收敛定理和简单函数的稠密性，可以得到如下推论。

::: corollary
设$f\colon \mathbb{R}^m\to \mathbb{R}^n(m\le n)$是Lipschitz连续映射，
$g$是$\mathbb{R}^m$上的Borel可测函数。如果$g$非负或者$g\in L^1$，则
\[
\int_{\mathbb{R}^n}\left(\sum_{x\in f^{-1}(y)}g(x)\right)\, d\mathcal{H}^m(y)=\int_{\mathbb{R}^n}\left(\int_{f^{-1}(y)} g(x)d\mathcal{H}^0(x)\right)\, d\mathcal{H}^m(y)=\int_{\mathbb{R}^m} g(x)Jf(x)\, dx.
\]
:::

## 余面积公式

Fubini定理是说，在满足一些相当一般的条件下，
\[
\int_{\mathbb{R}^{m+n}} f(x,y)\, d\mathcal{H}^{m+n}=\int_{\mathbb{R}^m}\left(\int_{\mathbb{R}^n} f(x,y)\, d\mathcal{H}^n(y)\right)\, d\mathcal{H}^m(x).
\]
特别的，
可测集$E$的体积等于先求切片$E_x:=\{y\in \mathbb{R}^n\mid (x,y)\in E\}(x\in \mathbb{R}^m)$的$n$
维体积，接着再对$x$进行积分。
切片$E_x$正是到前$m$个分量的投影映射的[[水平集]]。

一般的，考虑一个$C^1$函数$u\colon \mathbb{R}^n\to \mathbb{R}$，
水平集$u^{-1}(t)$通常是一个$n-1$维超曲面。
如果将$\mathcal{H}^{n-1}(u^{-1}(t))$对$t$积分，得到的结果其实是余面积公式的特例
\[
\int_\mathbb{R} \mathcal{H}^{n-1}(u^{-1}(t))\, dt=\int_{\mathbb{R}^n} |Du(x)|\, dx.
\]

为了理解这个式子，给出一个不严谨（但思路合理）的推导。
假设可以反解出$x_n=v(x',t)(x'=(x_1,\dots ,x_{n-1})\in \mathbb{R}^{n-1})$。
比如说当$\partial_n u\not =0$时，根据[[隐函数定理]]，在局部上就可以有这样的表示。
根据面积公式，
\[
\begin{aligned}
\int_{\mathbb{R}} \mathcal{H}^{n-1}(u^{-1}(t))\, dt&=\int_{\mathbb{R}} \int_{\mathbb{R}^{n-1}} \sqrt{1+|\partial_1 v|^2+\cdots +|\partial_{n-1} v|^2}\bigg|_{x_n=v(x',t)}\, d\mathcal{H}^{n-1}(x')\, dt\\
&=\int_{\mathbb{R}} \int_{\mathbb{R}^{n-1}} \sqrt{1+|-\partial_1 u/\partial_n u|^2+\cdots +|-\partial_{n-1} u/\partial_n u|^2}\bigg|_{x_n=v(x',t)}\, d\mathcal{H}^{n-1}(x')\, dt\\
&=\int_{\mathbb{R}}\int_{\mathbb{R}^{n-1}} |\partial_n u|^{-1} |Du|\bigg|_{x_n=v(x',t)}\, d\mathcal{H}^{n-1}(x')\, dt\\
&=\int_{\mathbb{R}^{n-1}}\int_{\mathbb{R}} |\partial_n u|^{-1}|Du|\bigg|_{x_n=v(x',t)}\, dt\, d\mathcal{H}^{n-1}(x')\\
&=\int_{\mathbb{R}^{n-1}}\int_{\mathbb{R}} |Du|\, dx_n\, d\mathcal{H}^{n-1}(x')=\int_{\mathbb{R}^n} |Du|.
\end{aligned}
\]
其中最后一行的第一个等号再次用到了面积公式以及
$|\partial_t v(x',t)|=|\partial_n u(x',v(x',t))|^{-1}$。

对于一般的情况，考虑映射$u\colon \mathbb{R}^m\to \mathbb{R}^n(m\ge n)$，
将水平集的$m-n$维Hausdorff测度进行积分，即
$\int_{\mathbb{R}^n} \mathcal{H}^{m-n}(u^{-1}(y))\, \mathcal{H}^n(y)$，
则结果应当等于$u$的Jacobi行列式或者**余面积因子**的积分。

::: definition [余面积因子]
对于$u\colon \mathbb{R}^m\to \mathbb{R}^n(m\ge n)$，如果$u$在$x$处可微，定义余面积因子
\[
Ju(x)=\sqrt{\det (Du(x) Du(x)^T)},\ Du(x)=(D_ju_i(x))_{1\le i\le n,\ 1\le j\le m}.
\]
:::

下面将给出余面积公式的陈述及证明，方法在精神层面和面积公式有些相似。同样首先给出若干引理。

::: lemma {@cosingular}
设$f\colon \mathbb{R}^m\to \mathbb{R}^n(m\ge n)$是Lipschitz连续映射，
则对Lebesgue可测集$E\subseteq \mathbb{R}^m$，
关于$y\in \mathbb{R}^n$的函数$y\mapsto \mathcal{H}^{m-n}(E\cap f^{-1}(y))$是$\mathcal{H}^n$-可测的，
且
\[
\int_{\mathbb{R}^n} \mathcal{H}^{m-n}(E\cap f^{-1}(y))\, d\mathcal{H}^n(y)\le \dfrac{\omega_n \omega_{m-n}}{\omega_m}\operatorname{Lip} (f)^n\mathcal{H}^m(E).
\]
其中$\omega_n$表示$\mathbb{R}^n$中单位球的体积，即$\omega_n=\pi^{n/2}/\Gamma(n/2+1)$。

特别的，如果$|E|=0$，则
\[
\int_{\mathbb{R}^n} \mathcal{H}^{m-n}(E\cap f^{-1}(y))\, d\mathcal{H}^n(y)=0.
\]
:::

::: proof
只需证明对任意$\delta>0$，
关于$y$的函数$\mathcal{H}^{m-n}_\delta (E\cap f^{-1}(y))$是$\mathcal{H}^n$-可测的，并且
\[
\int_{\mathbb{R}^n} \mathcal{H}^{m-n}_\delta (E\cap f^{-1}(y))\, d\mathcal{H}^n(y)\le \dfrac{\omega_n \omega_{m-n}}{\omega_m}\operatorname{Lip} (f)^n|E|.
\]
如果这件事得证，那么利用单调收敛定理就完成了证明。
于是证明分为两部分，一是证明可测性，二是证明不等式成立。
实际上，证明可测性是技巧性最强的，而且需要用到上面的不等式，因此先假设可测性成立并证明上面的不等式。

不妨设$|E|<\infty$，则对任意$\varepsilon>0$，存在直径小于$\delta$的可测集$F_1,F_2,\dots $覆盖$E$，且
\[
\sum_{i=1}^\infty \omega_m \left(\frac{\operatorname{diam}(F_i)}{2}\right)^m <|E|+\varepsilon.
\]
定义可测函数$g\colon \mathbb{R}^n\to \mathbb{R}$为
\[
g(y)=\sum_{i=1}^\infty \omega_{m-n} \left(\frac{\operatorname{diam}(F_i)}{2}\right)^{m-n}\chi_{f(F_i)}(y).
\]
因为使得$\chi_{f(F_i)}(y)=1$的$F_i$构成$E\cap f^{-1}(y)$的覆盖，所以
\[
g(y)\ge \mathcal{H}^{m-n}_\delta (E\cap f^{-1}(y)).
\]
对$y$积分得到
\[
\begin{aligned}
  \int_{\mathbb{R}^n} \mathcal{H}^{m-n}_\delta (E\cap f^{-1}(y))\, \mathcal{H}^n(y)&\le \int_{\mathbb{R}^n}g(y)\, d\mathcal{H}^n(y)\\
  &=\sum_{i=1}^\infty \omega_{m-n} \left(\dfrac{\operatorname{diam} (F_i)}{2}\right)^{m-n} \mathcal{H}^n(f(F_i))\\
  &\le \sum_{i=1}^\infty \omega_{m-n} \left(\dfrac{\operatorname{diam} (F_i)}{2}\right)^{m-n} \operatorname{Lip}(f)^n\mathcal{H}^n(F_i)\\
  &\le \sum_{i=1}^\infty \omega_{m-n} \left(\dfrac{\operatorname{diam} (F_i)}{2}\right)^{m-n} \operatorname{Lip}(f)^n \omega_n\left(\dfrac{\operatorname{diam}(F_i)}{2}\right)^n\\
  &=\omega_{m-n}\omega_n \operatorname{Lip}(f)^n\sum_{i=1}^\infty \left(\dfrac{\operatorname{diam}(F_i)}{2}\right)^m\\
  &\le \dfrac{\omega_n\omega_{m-n}}{\omega_m}\operatorname{Lip}(f)^n (|E|+\varepsilon).
  \end{aligned}
\]
由$\varepsilon$任意性即证。

最后来证明$\mathcal{H}^{m-n}(E\cap f^{-1}(y))$是关于$y$的可测函数。

第一步：如果$E$是紧集，则$E\cap f^{-1}(y)$是包含在$E$中的紧集，
根据下面的 @uppersemi 可知$\mathcal{H}^{m-n}(E\cap f^{-1}(y))$是上半连续函数，所以是可测函数。

第二步：如果$E$是开集，则$E$能够写成一列紧集的递增并，
即存在紧集$K_1\subseteq K_2\subseteq \cdots$使得$E=\bigcup_{i=1}^\infty K_i$。
于是$\mathcal{H}^{m-n}(E\cap f^{-1}(y))=\lim_{i\to \infty} \mathcal{H}^{m-n}(K_i\cap f^{-1}(y))$，
所以是可测函数。

第三步：如果$|E|<\infty$，
则存在一列紧集$K_1\subseteq K_2\subseteq \cdots $和开集$A_1\supseteq A_2\supseteq \cdots $，
满足$K_i\subseteq E\subseteq A_i$且$|A_i\setminus K_i|\to 0$。
根据前两步以及上面证明的不等式，有
\[
\begin{aligned}0&\le \int_{\mathbb{R}^n} (\mathcal{H}^{m-n}(A_i\cap f^{-1}(y))-\mathcal{H}^{m-n}(K_i\cap f^{-1}(y)))\, d\mathcal{H}^n(y)\\
  &=\int_{\mathbb{R}^n} \mathcal{H}^{m-n}((A_i\setminus K_i)\cap f^{-1}(y))\, d\mathcal{H}^n(y)\le \dfrac{\omega_n\omega_{m-n}}{\omega_m} \operatorname{Lip}(f)^n |A_i\setminus K_i|.\end{aligned}
\]
因为$\mathcal{H}^{m-n}(K_i\cap f^{-1}(y))$关于$i$单增，
$\mathcal{H}^{m-n}(A_i\cap f^{-1}(y))$关于$i$单减，且
\[
\mathcal{H}^{m-n}(K_i\cap f^{-1}(y))\le \mathcal{H}^{m-n}(E\cap f^{-1}(y))\le \mathcal{H}^{m-n}(A_i\cap f^{-1}(y)).
\]
根据[[Fatou引理]]有
\[
\int_{\mathbb{R}^n}\lim_{i\to \infty}(\mathcal{H}^{m-n}(A_i\cap f^{-1}(y))-\mathcal{H}^{m-n}(K_i\cap f^{-1}(y)))\, \mathcal{H}^n(y)=0.
\]
所以对几乎所有$y$成立
\[
\mathcal{H}^{m-n}(E\cap f^{-1}(y))=\lim_{i\to \infty}\mathcal{H}^{m-n}(K_i\cap f^{-1}(y))=\lim_{i\to \infty}\mathcal{H}^{m-n}(A_i\cap f^{-1}(y)),
\]
这就证明了$\mathcal{H}^{m-n}(E\cap f^{-1}(y))$的可测性。

第四步：对于一般的可测集$E$，将$E$写成一列有限测度集的递增并，
利用第二步的方法和第三步的结论便完成了整个证明。
:::

::: lemma {@uppersemi}
设$K_1,K_2,\dots $是$\mathbb{R}^n$中的紧集，且存在$R>0$使得$K_i\subseteq B(0,R)$。定义
\[
K=\{x\in \mathbb{R}^n\mid \exists \text{子列}n_k\to \infty\text{和}x_{n_k}\in K_{n_k},\ \text{使得}x_{n_k}\to x\}.
\]
则对任意$m,\delta>0$有
\[
\mathcal{H}^m_\delta (K)\ge \limsup_{i\to \infty} \mathcal{H}^m_\delta (K_i).
\]
:::

::: proof
对任意$\varepsilon>0$，取开集$G_1,G_2,\dots $是$K$的覆盖，满足$\operatorname{diam}(G_i)<\delta$，且
\[
\sum_{i=1}^\infty \omega_m \left(\dfrac{\operatorname{diam}(G_i)}{2}\right)^m \le \mathcal{H}^m_\delta (K)+\varepsilon.
\]

断言当$i$充分大时，$K_i$包含在开集$G=\bigcup_{i=1}^\infty G_i$中。
若不然，存在子列$i_k\to \infty$和$x_{i_k}\in K_{i_k}$，使得$x_{i_k}\not \in G$。
但是，因为$K_i\subseteq B(0,R)$，所以$x_{i_k}$有收敛子列$x_{i_{k'}}$，其极限落在$K$中，
所以当$k'$充分大时必然有$x_{i_{k'}}\in G$，矛盾！

因此，当$i$充分大时，
\[
\mathcal{H}^m_\delta (K_i)\le \sum_{i=1}^\infty \mathcal{H}^m_\delta (G_i)\le \sum_{i=1}^\infty \omega_m \left(\dfrac{\operatorname{diam}(G_i)}{2}\right)^m \le \mathcal{H}^m_\delta (K)+\varepsilon.
\]
由$\varepsilon$任意性即证。
:::

::: lemma {@cocritical}
设$f\colon \mathbb{R}^m\to \mathbb{R}^n(m\ge n)$是Lipschitz连续映射，
$E\subseteq \mathbb{R}^m$是Lebesgue可测集。如果对任意$x\in E$都有$Jf(x)=0$，
则关于$y\in \mathbb{R}^n$的函数$y\mapsto \mathcal{H}^{m-n}(E\cap f^{-1}(y))$是
$\mathcal{H}^n$-可测的，且
\[
\int_{\mathbb{R}^n} \mathcal{H}^{m-n}(E\cap f^{-1}(y))\, d\mathcal{H}^n(y)=0.
\]
:::

::: proof
仿照 @critical 的证明，可以将$E$切成若干小块，每一小块上$\operatorname{Lip}(f)$很小，
利用 @cosingular 的不等式进行放缩即可。
:::

现在可以来叙述并证明余面积公式，约定几个记号。

::: definition
对于$m\ge n$，将$x\in \mathbb{R}^m$等同于$(x',x'')\in \mathbb{R}^{m-n}\times \mathbb{R}^n$，
用$p(x)=x'$表示前$m-n$个分量的投影，$q(x)=x''$表示后$n$个分量的投影。
对于集合$E\subseteq \mathbb{R}^m$，定义$x'\in \mathbb{R}^{m-n}$对应的截面为
\[
E_{x'}=\{x''\in \mathbb{R}^n\mid (x',x'')\in E\}.
\]
类似的，定义$x''\in \mathbb{R}^n$对应的截面为
\[
E^{x''}=\{x'\in \mathbb{R}^{m-n}\mid (x',x'')\in E\}.
\]
:::

::: theorem [余面积公式]
设$f\colon \mathbb{R}^m\to \mathbb{R}^n(m\ge n)$是Lipschitz连续映射，
则对Lebesgue可测集$E\subseteq \mathbb{R}^m$，
关于$y\in \mathbb{R}^n$的函数$y\mapsto \mathcal{H}^{m-n}(E\cap f^{-1}(y))$是$\mathcal{H}^n$-可测的，
且
\[
\int_{\mathbb{R}^n} \mathcal{H}^{m-n}(E\cap f^{-1}(y))\, d\mathcal{H}^n(y)=\int_E Jf(x)\, dx.
\]
:::

::: proof
先对问题进行一些简化。
首先，根据 @cosingular 和 @cocritical，可以不妨设$f$在$E$上处处可微且$Jf>0$。
其次，对每个点$x\in \mathbb{R}^m$，存在$n$个不同的坐标$1\le i_1<\cdots <i_n\le m$，使得Jacobi行列式
\[
\det \dfrac{\partial (f_1,\dots ,f_n)}{\partial (x_{i_1},\dots ,x_{i_n})}\not =0.
\]
将$E$按照$i_1,\dots ,i_n$的不同进行划分，可以不妨设$f$在$E$上满足
\[
\det \dfrac{\partial (f_1,\dots ,f_n)}{\partial (x_{m-n+1},\dots ,x_m)}\not =0.
\]
最后，再像面积公式的证明里一样将$E$划分成小块，可以不妨设$f$在$E$上是单射，
并且$f^{-1}$也是Lipschitz连续映射。

定义$u\colon E\to \mathbb{R}^m$为
\[
u(x)=(x',f(x)),
\]
则$u$是Lipschitz单射，并且$u^{-1}\colon u(E)\to E$也是Lipschitz连续映射。
如果$u$在$x$处可微，且$u^{-1}$在$u(x)$处可微，则有
\[
Du^{-1}(u(x))=Du(x)^{-1}.
\]
这件事实际上对$a.e.\ x\in E$成立，因为不满足条件的点要么落在$u$不可微的点集中，
要么落在$u^{-1}$不可微的点集被$u^{-1}$映到的像中，二者都是零测集。

将$u^{-1}$写为$v(z,y)(z\in \mathbb{R}^{m-n},y\in \mathbb{R}^n)$。
对于固定的$y$，将其视为关于$z$的映射$v_y(z)\colon \mathbb{R}^{m-n}\to \mathbb{R}^m$。
对任意$y\in \mathbb{R}^n$，因为
\[
E\cap f^{-1}(y)=\{x\in E\mid f(x)=y\}=\{x\in E\mid qu(x)=y\}=v_y(u(E)^y).
\]
根据面积公式，有
\[
\mathcal{H}^{m-n}(E\cap f^{-1}(y))=\int_{u(E)^y} Jv_y(z)\, \mathcal{H}^{m-n}(z).
\]
对$y$积分，再次使用面积公式，得
\[
\begin{aligned}
  \int_{\mathbb{R}^n} \mathcal{H}^{m-n}(E\cap f^{-1}(y))\, d\mathcal{H}^n(y)&=\int_{\mathbb{R}^n}\int_{u(E)^y} Jv_y(z)\, d\mathcal{H}^{m-n}(z)\, d\mathcal{H}^n(y)\\
  &=\int_{u(E)} Jv_y(z)\, d\mathcal{H}^m(y,z)\\
  &=\int_E Jv_{qu(x)}(pu(x))Ju(x)\, \mathcal{H}^m(x).
  \end{aligned}
\]

最后只需要证明
\[
Jv_{qu(x)}(pu(x))Ju(x)=Jf(x),\ a.e.\ x\in E.
\]
（注意这里面$J$既表示面积因子又表示余面积因子。）

这个式子的验证这就是简单的矩阵计算。在几乎处处的意义下，记
\[
Du(x)=\left(\begin{matrix}
  1 & \cdots & 0 & 0 & \cdots & 0\\
  \vdots & & 0 & 0 &\cdots & 0\\
  0 & \cdots & 1 & 0 &\cdots &0\\
  \partial_1 f_1(x) & \cdots & \partial_{m-n} f_1(x) & \partial_{m-n+1} f_1(x) & \cdots & \partial_m f_1(x)\\
  \vdots & & \vdots & \vdots & & \vdots\\
  \partial_1 f_n(x) & \cdots & \partial_{m-n} f_n(x) & \partial_{m-n+1} f_n(x) & \cdots & \partial_m f_n(x)
  \end{matrix}\right)=:\left(\begin{matrix}
  I & 0\\
  B & A
  \end{matrix}\right),
\]
则
\[
Df(x)=\left(\begin{matrix}
  B & A
  \end{matrix}\right),
\]
\[
Dv(u(x))=Du(x)^{-1}=\left(\begin{matrix}
  I & 0\\
  -A^{-1}B & A^{-1}
  \end{matrix}\right),
\]
\[
Dv_{qu(x)}(pu(x))=\left(\begin{matrix}
  I\\
  -A^{-1}B
  \end{matrix}\right).
\]

需要用到一个简单行列式性质，即对任何矩阵$A$（未必是方阵），
有$\det (I+A^TA)=\det (I+AA^T)$（见下面的注）。则根据上面的表示有
\[
Ju(x)=|\det (A)|,
\]
\[
Jf(x)=\sqrt{\det (BB^T+AA^T)},
\]
\[
\begin{aligned}
  Jv_{qu(x)}(pu(x))&=\sqrt{\det(I+(A^{-1}B)^TA^{-1}B)}\\
  &=\sqrt{\det(I+A^{-1}BB^T(A^T)^{-1})}\\
  &=\sqrt{\det(A)^{-1}\det(AA^T+BB^T)\det(A^T)^{-1}}\\
  &=|\det (A)|^{-1}\cdot \sqrt{\det (AA^T+BB^T)}.\end{aligned}
\]
这就证明了$Jv_{qu(x)}(pu(x))Ju(x)=Jf(x)$。
:::

::: remark
看见$\det \partial (f_1,\dots ,f_n)/\partial (x_{i_1},\dots ,x_{i_n})\not =0$，
一个自然的想法是用隐函数定理。
但是这里的函数性质不足够好，不可能直接使用隐函数定理的结论。
证明采用的办法是构造Lipschitz双射$u(x)=(x',f(x))$，来代替隐函数定理的使用。

最后使用了一个矩阵恒等式$\det (I+A^TA)=\det (I+AA^T)$，这是因为两边都等于
\[
\det \left(\begin{matrix}
  I & A\\
  -A^T & I
  \end{matrix}\right).
\]
事实上，先考虑分块初等行变换，第二行加上第一行左乘$A^T$，得
\[
\det \left(\begin{matrix}
  I & A\\
  -A^T & I
  \end{matrix}\right)=\det \left(\begin{matrix}
  I & A\\
  0 & I+A^TA
  \end{matrix}\right)=\det (I+A^TA).
\]
再考虑初等列变换，第一列加上第二列右乘$A^T$，得
\[
\det \left(\begin{matrix}
  I & A\\
  -A^T & I
  \end{matrix}\right)=\det \left(\begin{matrix}
  I+AA^T & A\\
  0 & I
  \end{matrix}\right)=\det (I+AA^T).
\]
:::

::: corollary
设$f\colon \mathbb{R}^n\to \mathbb{R}$是Lipschitz连续函数，
$E\subseteq \mathbb{R}^n$是Lebesgue可测集，则
关于$t\in \mathbb{R}$的函数$t\mapsto \mathcal{H}^{n-1}(E\cap f^{-1}(t))$是可测函数，且
\[
\int_{\mathbb{R}} \mathcal{H}^{n-1}(E\cap f^{-1}(t))\, dt=\int_E |Df(x)|\, dx.
\]
:::

面积公式是换元公式的推广，而余面积公式是Fubini定理的推广。
事实上，由余面积公式能够得到对曲面积分进行切片的方法。
比如要求平面上单位圆的周长，应该是
\[
2\pi =\int_{\partial B(0,1)}\, \mathcal{H}^1(y)=\int_{-1}^1 \dfrac{2\, dx}{\sqrt{1-x^2}}.
\]
分子的$2$是因为每个$x$对应的纵截面有两个点，
而分母的$\sqrt{1-x^2}$则是单位外法向量在$y$轴方向上投影的长度。
具体的公式涉及到切向导数等概念，故略去。

```terms
Lipschitz 连续映射:
  en: Lipschitz continuous function
  fr: application lipschitzienne :f
  de: Lipschitzstetige Funktion :f
```
