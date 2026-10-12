---
title: 群的半直积
notices:
  - name: 问题
    items:
      - “基本例子”一节 $pq$ 阶群的例子中，“存在 $1\leqslant m\leqslant q-1$，使得 $k\cdot m\equiv 1 \mod p$”似乎应为模 $q$；随后 $B=\{1,b',b'^2,\cdots,b'^{p-1}\}$ 中的最高次幂似乎应为 $q-1$。
---

## 基本定义

$G$是群，$K<G$是子群，$N\lhd G$是正规子群。通过共轭，$K$自然地作用在$N$上：
\[
{\rm Int}\colon K\rightarrow \mathfrak{S}_N, \ \ k \mapsto {\rm Int}(k)\colon  n \mapsto knk^{-1}.
\]

我们断言$N\cdot K=\{n\cdot k\mid n\in N, k\in K\}$是子群：对任意 $n,n'\in N, k,k'\in K$，有
\[
(nk)\cdot (n'k')=\big(n\cdot kn'k^{-1}\big)\cdot \big(kk'\big) \in N\cdot K
\]
以及
\[
(nk)^{-1}=\big(k^{-1}n^{-1}k\big) \cdot k^{-1} \in N\cdot K.
\]
以上计算的关键是利用$N$为正规子群。类似地，我们还得到$N\cdot K= K\cdot N$。
另外，注意到$(nk)\cdot (n'k') = nn' \cdot kk'$未必成立并且$N$与$K$中的元素相乘未必交换。

进一步假设$N\cdot K=G$并且$N\cap K=1$并定义映射
\[
\phi\colon N\times K \rightarrow G,  \ \ (g,k)\mapsto gk.
\]
我们证明，$\phi$是$N\times K$（这是群的乘积）与$G$之间的双射（未必是群同态）：根据$N\cdot K=G$，
$\phi$是满射；若$nk =n'k'$，则$n^{-1}n'=kk'^{-1}\in N\cap K=1$，从而，$n=n'，k=k'$，所以，
$\phi$是单射。

我们注意到，作为群$N\times K$与$G$未必同构：$N\times K$中，对任意$n\in N$和$k\in K$，
$(n,1)$与$(1,k)$交换；它们在$G$中的像为$n,k$，但是它们未必交换。
实际上，对任意的$x,x'\in G$，它们可以被唯一地表示成$x=nk,x'=n'k'$并且在$G$中的乘法应写成
\[
(nk)\cdot (n'k')=\big(n\cdot kn'k^{-1}\big)\cdot \big(kk'\big)=\big(n\cdot {\rm Int}(k)(n')\big)\cdot \big(k\cdot k'\big).
\]

::: definition [半直积]
给定如下的基本数据：群$N$，
群$K$以及$K$在$N$上的作用$\varphi\colon K\rightarrow \mathbf{Aut}(N)$（从而，对任意$k\in K$，
$\varphi(k)$是$N$到自身的同构）。作为集合，定义
\[
N\rtimes_\varphi K\stackrel{ \text{set}}{\coloneqq}N\times K.
\]
那么，$N\rtimes_\varphi K$中的元素可唯一表示为$(n,k)$，其中，$n\in N,k\in K$。
$N\rtimes_\varphi K$上的乘法定义如下：对任意$(n,k),(n',k')\in N\rtimes_\varphi K$，令
\[
(n,k)\cdot(n',k')=\big(n\cdot_{_N} \varphi(k)(n'), k\cdot_{_K} k'\big),
\]
并令$1=(1_{_N},1_{_K})$为单位元。以上下指标$K$和$N$强调使用$K$和$N$中的乘法。
我们称如上构造的$N\rtimes_\varphi K$为$N$和$K$在$\varphi$下的**半直积**。
:::

::: remark [验证群结构]
首先验证$1$是单位元：对任意$(n,k)\in N\rtimes_\varphi K$，有
\[
(n,k)\cdot (1_{_N},1_{_K})=\big(n\cdot_{_N} \varphi(k)(1_{_N}), k\cdot_{_K} 1_{_K}\big)=\big(n\cdot_{_N}  1_{_N}, k\big)=(n,k),
\]
和
\[
(1_{_N},1_{_K})\cdot(n,k)=\big(1_{_N}\cdot_{_N} \varphi(1_{_K})(n), 1_{_K}\cdot k\big)=\big(1_{_N}\cdot_{_N} {\rm id}(n), 1_{_K}\cdot k\big)=(n,k).
\]

其次，验证结合律：对任意的$(n,k),(n',k'),(n'',k'')\in N\rtimes_\varphi K$，我们有
\[
\begin{aligned}
\big((n,k)\cdot(n',k')\big)\cdot (n'',k'')&=\big(n  \varphi(k)(n'), k k'\big) (n'',k'')=\big(n  \varphi(k)(n')\cdot \varphi(kk')(n''), k k'k''\big),\\
(n,k)\cdot\big((n',k')\cdot (n'',k'')\big)&=(n,k)\cdot\big(n'\varphi(k')(n''), k' k''\big) =\Big(n\varphi(k)\big(n'\varphi(k')(n'')\big), kk' k''\Big)\\
&=\Big(n\varphi(k)(n')\cdot \varphi(k)\big(\varphi(k')(n'')\big), kk' k''\Big).
\end{aligned}
\]
利用$\varphi$是群同态，我们就有
\[
\varphi(k)\big(\varphi(k')(n'')\big)= \varphi(kk') (n'').
\]
从而，结合律成立。

最终，验证逆元的存在性。对任意$(n,k)\in N\rtimes_\varphi K$，有
\[
(n,k)^{-1}=(\varphi(k^{-1})(n^{-1}),k^{-1}).
\]
以上构造给出了半直积的构造。
:::

::: remark
若$K$对$N$的作用平凡，则$N\rtimes_\varphi K\simeq N\times K$。不难证明，双射
\[
\phi\colon N\times K \rightarrow N\rtimes_\varphi K, \ \ (n,k)\mapsto (n,k)
\]
是群同构当且仅当作用$\varphi$是平凡的。
:::

::: example
$G$是群，$K<G$是子群，若存在子群$H<G$，使得$H\cap K=1$且$H\cdot K=G$，
就称$H$是$K$在$G$中的**补子群**。

如果$N\lhd G$是正规子群，$K$在$G$中的补子群，那么，$K$可以通过共轭在$N$上作用。
此时，上面的讨论给出了群同构
\[
G\simeq N\rtimes_{^{K\stackrel{{\rm Int}}{\curvearrowright}} N} K.
\]
简单起见，人们常把上述同构写成$G=N\rtimes K$。
:::

::: remark
考虑自然的投影同态
\[
\pi_2\colon N\rtimes_\varphi K\rightarrow K, \ \ (n,k)\mapsto k.
\]
这是满同态并且${\rm Ker}(\pi_2)=N\times 1 \subset N\rtimes_\varphi K$。
很明显，${\rm Ker}(\pi_2)$与$N$同构。我们得到群同态的正合列：
\[
1\rightarrow N \longrightarrow N\rtimes_\varphi K \stackrel{\pi_2}{\longrightarrow}  K\rightarrow 1,
\]
其中，$ N \longrightarrow N\rtimes_\varphi K$由$n\mapsto (n,1)$给出。

另外，我们还有群同态
\[
\phi\colon K\rightarrow N\rtimes_\varphi K, \ \ k\mapsto (1,k).
\]
并且$\pi_2\circ \phi={\rm id}$。我们称这样的$\phi$是$\pi_2$的提升。
如果正合列有提升，则称它是**分裂的**。
如上提升的存在性可以用群的上同调理论来刻画，我们不再做深入的讨论。

关于上述正合列的讨论是提示如下的直观：给定$G$的正规子群$N$和商群$
  {G/N}
$，若清楚$
  {G/N}
$在$N$上的共轭作用，就可确定$G$的结构。
:::

::: remark [半直积的唯一性]
给定一组基本数据，即群$N$，群$K$以及$K$对$N$的作用$\varphi\colon K\rightarrow \mathbf{Aut}(N)$。
若存在群$N'$和群$K'$以及群同构
\[
\alpha\colon N'\stackrel{\simeq}{\longrightarrow} N, \ \ \beta\colon K'\stackrel{\simeq}{\longrightarrow} K,
\]
则可以构造$K'$在$N'$上的自然作用
\[
\varphi'\colon K'\rightarrow \mathbf{Aut}(N'), \ \ k'\mapsto \alpha^{-1}\circ \varphi\big(\beta(k')\big) \circ \alpha.
\]
以上由交换图给出：
\[
\begin{tikzcd}
N \arrow[rrr, "\varphi\big(\beta(k')\big)"]  & &&  N\\
N' \arrow[rrr, "\alpha^{-1}\circ \varphi\big(\beta(k')\big) \circ \alpha",dashed]  \arrow[u, "\alpha"]&&&  N'\arrow[u, "\alpha"] \\
\end{tikzcd}
\]
我们断言映射
\[
\Psi\colon N'\rtimes_{\varphi'} K'\longrightarrow N\rtimes_\varphi K, \ \ (n',k')\mapsto (\alpha(n'),\beta(k')),
\]
是群同构。这个群同构给出了半直积唯一性的含义。

很明显$\Psi$是双射，以下验证它是群同态：
\[
\begin{aligned}
\Psi\big((n_1',k_1')\cdot(n_2',k_2')\big)&=\Psi\Big(\big(n'_1 \varphi'(k_1')(n_2'), k'_1 k_2'\big)\Big)=\Psi\Big(\big(n'_1  \big(\alpha^{-1} \circ \varphi \big(\beta(k_1')\big) \circ \alpha\big) (n_2'), k'_1 k_2'\big)\Big)\\
&=\Big(\alpha\big[\big(n'_1  \big(\alpha^{-1} \circ \varphi \big(\beta(k_1')\big) \circ \alpha\big) (n_2')\big], \beta(k'_1 k_2')\big)\Big)\\
 &=\Big(\alpha(n'_1)  \big( \varphi \big(\beta(k_1')\big) (\alpha(n_2')) \big), \beta(k'_1 )\beta(k_2')\Big).
\end{aligned}
\]
另外，
\[
\begin{aligned}
\Psi(n_1',k_1')\cdot\Psi(n_2',k_2')&=(\alpha(n_1'),\beta(k_1'))\cdot (\alpha(n_2'),\beta(k_2'))=\Big(\alpha(n'_1)  \big( \varphi \big(\beta(k_1')\big) (\alpha(n_2')) \big), \beta(k'_1 )\beta(k_2')\Big).
\end{aligned}
\]
从而，$\Psi\big((n_1',k_1')\cdot(n_2',k_2')\big)=\Psi(n_1',k_1')\cdot\Psi(n_2',k_2')$。
:::

## 基本例子

::: example {@ex:semidirect-of-two-normal}
$G$是群，$N\lhd G, K\lhd G$均为正规子群，$N\cdot K=G$并且$N\cap K=1$。那么，
\[
G\simeq N\times K.
\]
我们知道$G\simeq N\rtimes_{^{K\stackrel{{\rm Int}}{\curvearrowright}} N} K$。
对任意$k\in K,n\in N$，有
\[
nkn^{-1}k^{-1}=\big(nkn^{-1}\big)k^{-1}=n\big(kn^{-1}k^{-1}\big)\in N\cap K=1.
\]
所以，群作用$^{K{{\rm Int} \atop \curvearrowright}} N$是平凡的。从而，$G\simeq N\times K$。
:::

::: example
二面体群$\mathfrak{D}_n$中旋转构成的子群$N=\{1,r,\cdots,r^{n-1}\}\simeq {
  {\mathbb{Z}/n\mathbb{Z}}
}$是正规的，
$K=\{1,s\}\simeq
  {{\mathbb{Z}}/2{\mathbb{Z}}}
$是某反射生成的子群。
根据$srs=srs^{-1}=r^{-1}$，$K$在$N$上的共轭由如下同态给出
\[
\varphi\colon
  {{\mathbb{Z}}/2{\mathbb{Z}}}
\rightarrow \mathbf{Aut}\big({
  {\mathbb{Z}/n\mathbb{Z}}
}\big), \ \ 0\mapsto {\rm id}, \ 1\mapsto (k\mapsto -k).
\]
所以，
\[
\boxed{\mathfrak{D}_n\simeq {
  {\mathbb{Z}/n\mathbb{Z}}
}\rtimes_{\varphi}
  {{\mathbb{Z}}/2{\mathbb{Z}}}
}.
\]
由于$\varphi$非平凡，$\mathfrak{D}_n\not\simeq{
  {\mathbb{Z}/n\mathbb{Z}}
}\times
  {{\mathbb{Z}}/2{\mathbb{Z}}}
$。
:::

::: example
$K$是域，线性空间$K^n$上的$n$维仿射变换群为
\[
\mathbf{Aff}_n(K)\coloneqq\big\{x\mapsto Ax+b\bigm|A\in {\mathbf{GL}}(n;K),\,b\in K^n\big\}.
\]
平移变换和线性变换
\[
{\rm Trans}(n;K)\coloneqq\big\{x\mapsto x+b\bigm|b\in K^n\big\}, \ \mathbf{GL}(n;K)\coloneqq\big\{x\mapsto Ax\bigm|A\in \mathbf{GL}(n;K)\big\},
\]
均为$\mathbf{Aff}_n(K)$的子群，其中，
${\rm Trans}(n;K)\simeq K^n$并且${\rm Trans}(n;K)\lhd\mathbf{Aff}_n(K)$。

我们计算$\mathbf{GL}(n;K)$在${\rm Trans}(n;K)$上的共轭作用：对任意$g(x)=Ax$和$T_b(x)=x+b$，有
\[
g\cdot T_b \cdot g^{-1}(x)=x+Ab \ \ \Rightarrow \ \ {\rm Int}(A)(b)=Ab.
\]
所以，
\[
\boxed{\mathbf{Aff}_n(K)\simeq K^n\rtimes_\varphi \mathbf{GL}(n;K)},
\]
其中，
\[
\varphi\colon\mathbf{GL}(n;K)\rightarrow \mathbf{Aut}(K^n), \ \ A\mapsto (x\mapsto A\cdot x).
\]
:::

::: example [阶较小群几何实现的例子]
$G=\mathbf{Aff}_2({\mathbb{F}}_2)$自然地作用在$X={\mathbb{F}}_2^2$上：
\[
\mathbf{Aff}_2({\mathbb{F}}_2)\times {\mathbb{F}}_2^2\rightarrow {\mathbb{F}}_2^2, \ \ \big((b,A),x\big)\mapsto (b,A)\cdot x = Ax+b.
\]
这给出群同态
\[
\varphi\colon\mathbf{Aff}_2({\mathbb{F}}_2)\longrightarrow \mathfrak{S}_{{\mathbb{F}}_2^2}.
\]
以上同态显然是单射。
我们计算$|\mathfrak{S}_{{\mathbb{F}}_2^2}|=4!$以及
$|{\mathbb{F}}_2^2 \rtimes_\varphi \mathbf{GL}(2;{\mathbb{F}}_2)|=4\cdot 6=24$，
所以$\varphi$是群同构，即
\[
\boxed{\mathbf{Aff}_2({\mathbb{F}}_2)\simeq \mathfrak{S}_{4}}.
\]
我们把${\mathbb{F}}_2^2$的元素按照如下方式标号：
$1\rightarrow (0,0),2 \rightarrow (1,0),3\rightarrow(0,1),4\rightarrow(1,1)$。

另外，$\mathbf{GL}(2;{\mathbb{F}}_2)$在$\mathbf{P}^1({\mathbb{F}}_2)$上的自然作用给出群同态
\[
\mathbf{GL}(2;{\mathbb{F}}_2)\rightarrow \mathfrak{S}_{\mathbf{P}^1({\mathbb{F}}_2)}\simeq \mathfrak{S}_{3}.
\]
通过计算元素个数可知$\mathbf{GL}(2;{\mathbb{F}}_2)\simeq \mathfrak{S}_{3}$。从而，
\[
\boxed{\mathfrak{S}_{4}\simeq \left(
  {{\mathbb{Z}}/2{\mathbb{Z}}}
\right)^2\rtimes_\varphi\mathfrak{S}_{3}}.
\]
我们可以具体分析同构：
\[
\psi\colon \left(
  {{\mathbb{Z}}/2{\mathbb{Z}}}
\right)^2 \rtimes_\varphi\mathfrak{S}_{3}  \longrightarrow \mathfrak{S}_{4}
\]
考虑$\mathfrak{S}_{4}$的正规子群$K_4\lhd \mathfrak{S}_4$：
\[
K_4=\{1,(1,2)(3,4),(1,3)(2,4),(1,4)(2,3)\}.
\]
我们有
\[
K_4={\rm Im}\left(\left(
  {{\mathbb{Z}}/2{\mathbb{Z}}}
\right)^2 \hookrightarrow \left(
  {{\mathbb{Z}}/2{\mathbb{Z}}}
\right)^2 \rtimes_\varphi\mathfrak{S}_{3}  \stackrel{\psi}{\longrightarrow} \mathfrak{S}_{4} \right).
\]
此时，
$\big\{(1,\sigma)\bigm|\sigma\in \mathfrak{S}_{3}\big\}$的像是$\mathfrak{S}_4$中固定$1$的那些置换，
请参考上述${\mathbb{F}}_2^2$中元素的标号方式并注意到$\mathbf{P}^1({\mathbb{F}}_2)$可以完全等同于
${\mathbb{F}}_2^2$中的非零向量。
:::

::: example [$pq$阶群的分类与实现]
$G$是有限群，$|G|=pq$，$q<p$均为素数，现在确定$G$的结构。

$G$只有一个Sylow $p$-子群 $N$（从而$N\lhd G$），
这因为Sylow $p$-子群的个数整除$q$并且除$p$余$1$而$p>q$；类似地，Sylow $q$-子群的个数为$1$或$p$。

我们分两种情形讨论：

- 1\) $q\nmid p-1$，$G\simeq
  {{\mathbb{Z}}/p{\mathbb{Z}}}
\times
  {{\mathbb{Z}}/q{\mathbb{Z}}}
\simeq
  {{\mathbb{Z}}/pq{\mathbb{Z}}}
$。

  由于Sylow $q$-子群的个数除$q$余$1$，所以恰有一个Sylow $q$-子群$K$。
  此时，$N$和$K$均为正规子群并且$N\cap K=1$（因为$|N\cap K|$整除$|N|$和$|K|$的最大公约数）。
  根据 @ex:semidirect-of-two-normal，$G= N\cdot K\simeq N\times K$。

- 2\) $q\mid p-1$，$G$为$
  {{\mathbb{Z}}/p{\mathbb{Z}}}
$与$
  {{\mathbb{Z}}/q{\mathbb{Z}}}
$的半直积，其中，$
  {{\mathbb{Z}}/q{\mathbb{Z}}}
$对$
  {{\mathbb{Z}}/p{\mathbb{Z}}}
$的作用参考如下证明。

  选定某个Sylow $q$-子群$K$（未必是正规子群），考虑$K$在$N$上的共轭作用：
  \[
  \varphi\colon K\rightarrow \mathbf{Aut}(N), \ \ k\mapsto (n\mapsto knk^{-1}).
  \]
  由于$N\simeq
  {{\mathbb{Z}}/p{\mathbb{Z}}}
$，$K\simeq
  {{\mathbb{Z}}/q{\mathbb{Z}}}
$，同态$\varphi$可被视作
  \[
  \varphi\colon
    {{\mathbb{Z}}/q{\mathbb{Z}}}
  \longrightarrow \mathbf{Aut}\left(
    {{\mathbb{Z}}/p{\mathbb{Z}}}
  \right)=\left(
    {{\mathbb{Z}}/p{\mathbb{Z}}}
  \right)^\times.
  \]
  我们对以上同态作如下的解释：

  - $\mathbf{Aut}\left(
  {{\mathbb{Z}}/p{\mathbb{Z}}}
\right)=\left(
  {{\mathbb{Z}}/p{\mathbb{Z}}}
\right)^\times$：因为
    指定$\mathbf{Aut}\left(
  {{\mathbb{Z}}/p{\mathbb{Z}}}
\right)$中某元素$w$等价于指定$w(1)\in \left(
  {{\mathbb{Z}}/p{\mathbb{Z}}}
\right)^\times$。

  - 给出群同态$\varphi$等价于指定$\mathbf{Aut}\left(
  {{\mathbb{Z}}/p{\mathbb{Z}}}
\right)$中某元素$w$并且要求$w^q=1$（因为$
  {{\mathbb{Z}}/q{\mathbb{Z}}}
$是循环群）。

  我们把$\varphi$形象地表示为
  \[
  \varphi\colon
    {{\mathbb{Z}}/q{\mathbb{Z}}}
  \rightarrow \big(\left(
    {{\mathbb{Z}}/p{\mathbb{Z}}}
  \right)^\times,\cdot\big), \ \  1\mapsto w \ (\text{要求 $w^q=1$}).
  \]
  由于$\left(
  {{\mathbb{Z}}/p{\mathbb{Z}}}
\right)^\times$为$p-1$阶循环群，所以$\left(
  {{\mathbb{Z}}/p{\mathbb{Z}}}
\right)^\times$中满足$w^q=1$的$w$恰好有$q$个并且构成$q$阶循环子群。进一步，该子群除$1$外任一元素均为生成元。另外，如果$w=\varphi(1) \neq 1$，通过选取$
  {{\mathbb{Z}}/q{\mathbb{Z}}}
$的生成元（即指定$K\simeq
  {{\mathbb{Z}}/q{\mathbb{Z}}}
$的同构方式），可以保证$\varphi(1)=w$取该子群的任意生成元。

  我们进而研究如下两种情形：

  - $\varphi(1)=1$。从而，$K$在$N$上的共轭作用平凡，所以，
    \[
    G\simeq
      {{\mathbb{Z}}/p{\mathbb{Z}}}
    \times
      {{\mathbb{Z}}/q{\mathbb{Z}}}
    .
    \]

  - $\varphi(1)=w\neq 1$。此时，$G\simeq
  {{\mathbb{Z}}/p{\mathbb{Z}}}
\rtimes_\varphi
  {{\mathbb{Z}}/q{\mathbb{Z}}}
$并且$G$不是交换群。进一步，这个半直积在群同构的意义下不依赖于$\varphi(1)=w$的选取：

    令$A={
  {\mathbb{Z}/p\mathbb{Z}}
}$，$B=
  {{\mathbb{Z}}/q{\mathbb{Z}}}
$，$\Sigma=\mathbf{Aut}(A)$，它们是循环群。我们用乘号标记$A,B$和$\Sigma$中的乘法并指定相应的生成元为$a\in A$，$b\in B$和$\sigma\in \Sigma$，
那么，
    \[
    A=\{1,a,a^2,\cdots,a^{p-1}\}, \ B=\{1,b,b^2,\cdots,b^{q-1}\}, \ \Sigma=\{1,\sigma,\sigma^2,\cdots,\sigma^{p-2}\}.
    \]
    由于$B$的阶为$q$，$b$在任一从$B$到$\Sigma$的同态下的像要满足$\sigma_0^q=1$。我们**指定**群同态：
    \[
    \varphi_0\colon B\longrightarrow \Sigma, \ \ b\mapsto \sigma_0=\sigma^{\frac{p-1}{q}}.
    \]
    这个同态给出了半直积${
  {\mathbb{Z}/p\mathbb{Z}}
}\rtimes_{\varphi_0}
  {{\mathbb{Z}}/q{\mathbb{Z}}}
$。

    现考虑另一非平凡的群同态：
    \[
    \varphi_1\colon B\longrightarrow \Sigma, \ \ b\mapsto \sigma_1.
    \]
    由于$\sigma_1^q=1$，存在$1\leqslant k \leqslant q-1$，使得$\sigma_1=\sigma^{k\frac{p-1}{q}}$；
    由于$(k,q)=1$互素，存在$1\leqslant m\leqslant q-1$，使得$k\cdot m\equiv 1 \mod p$。从而，
    \[
    \varphi_1(b^m)=\left(\sigma^{k\frac{p-1}{q}}\right)^m=\sigma^{km\frac{p-1}{q}}=\sigma^{\frac{p-1}{q}}=\sigma_0.
    \]
    令$b'=b^m$，$B$和$\varphi_1$可被重新写成
    \[
    B=\{1,b',b'^2,\cdots,b'^{p-1}\}, \ \ \ \varphi_1\colon B\longrightarrow \Sigma, \ \ b' \mapsto \sigma_0.
    \]
    它的形式与$\varphi_0$的一致。据此可见，半直积${
  {\mathbb{Z}/p\mathbb{Z}}
}\rtimes_{\varphi_1}
  {{\mathbb{Z}}/q{\mathbb{Z}}}
$与${
  {\mathbb{Z}/p\mathbb{Z}}
}\rtimes_{\varphi_0}
  {{\mathbb{Z}}/q{\mathbb{Z}}}
$同构。

::: remark
当$q\mid p-1$时，考虑$1$维仿射变换群$\mathbf{Aff}_1({\mathbb{F}}_p)$的子群
\[
\mathbf{Aff}_1({\mathbb{F}}_p;q)=\big\{x\mapsto ax+b\bigm|a\in {\mathbb{F}}_p^\times, a^q=1;b\in {\mathbb{F}}_p\big\}.
\]
那么，$\mathbf{Aff}_1({\mathbb{F}}_p;q)$恰有$pq$个元素并且非交换。
$\mathbf{Aff}_1({\mathbb{F}}_p;q)$是上述唯一的$pq$阶非交换群在几何上的实现并给出该群在$1$维仿射直线
${\mathbb{F}_p}$上的作用。
:::

综上所述，我们可以分类$pq$阶的群$G$：
\[
G\simeq \begin{cases}
  {{\mathbb{Z}}/pq{\mathbb{Z}}}
 ,\ \ &q\nmid p-1;\\
  {{\mathbb{Z}}/pq{\mathbb{Z}}}
 \ \ \text{或} \ \ \mathbf{Aff}_1({\mathbb{F}}_p;q),\ \ &q\mid p-1.
\end{cases}
\]
:::
