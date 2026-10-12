---
title: Galois 群计算举例
notices:
  - name: 问题
    items:
      - '$X^4-5$、$X^6-2$、$X^6+3$ 三个例子中出现的 $\mathbf{Gal}(L/K)$ 里 $L$ 没有定义，似乎应为 $\mathbf{Gal}(K/\mathbb{Q})$。'
      - '$X^6-2$ 的例子中 $|(\mathbb{Z}/6\mathbb{Z})|=2$ 似乎应为 $|(\mathbb{Z}/6\mathbb{Z})^\times|=2$。'
      - '$X^6+3$ 的例子中等式 $a = i\sqrt{3}= g(-\alpha^3)=\cdots$ 的左边似乎应为 $a\cdot i\sqrt{3}$；其后“以上运算表明 $\alpha^3=i\sqrt{3}$”与前文 $-\alpha^3=i\sqrt{3}$ 不符，似乎应为 $-\alpha^3=i\sqrt{3}$。'
      - '$(X^5-2)(X^5-3)$ 的例子中，$\mathbf{Aff}_2(\mathbb{Z}/5\mathbb{Z})$ 的定义式之后的一句不完整；“给定 $g\in \mathbf{Gal}(K/\mathbb{Q})$，它由以下 $a,b_1,b_2$ 决定”似乎应为 $g\in \mathbf{Gal}(L/\mathbb{Q})$。'
      - '$X^6-3X^2+1$ 的例子中，$Q(X)=X^3-3X^2+1$ 时 $P(X)=Q(X^2)$ 似乎不成立（$Q(X^2)=X^6-3X^4+1$）；证明 $[K(\sqrt{\beta}):K]=2$ 时的 $\overline{\sigma}^2(\sqrt{\alpha})=\pm \gamma$ 似乎应为 $\overline{\sigma}^2(\sqrt{\beta})=\pm\sqrt{\alpha}$。'
---

::: example
令$K$为$P(X)=X^4+4$在${\mathbb{Q}}$上的分裂域，计算${\mathbf{Gal}}\left(
  {K/{\mathbb{Q}}}
\right)$。

我们观察到$P(X)=(X^2+2i)(X^2-2i)$，所以$P$的根为$\{\pm \sqrt{\pm2i}\}$。
再注意到$\sqrt{2i}=\sqrt{2}\cdot \frac{\sqrt{2}}{2}(1+i)=1+i$，
所以，这个根的极小多项式是二次的，即$P$是可约的。实际上，
\[
P(X)=(X^4+4X^2+4)-4X^2=(X^2+2X+2)(X^2-2X+2).
\]
我们可以把$P$的根都写成$\{\pm 1\pm i\}$，所以，$K={\mathbb{Q}}(i)$，
从而${\mathbf{Gal}}\left(
  {K/{\mathbb{Q}}}
\right)\simeq
  {{\mathbb{Z}}/2{\mathbb{Z}}}
$。
:::

::: example
令$K$为$P(X)=X^3-3X+1$在${\mathbb{Q}}$上的分裂域，计算${\mathbf{Gal}}\left(
  {K/{\mathbb{Q}}}
\right)$。

$P(X)=X^3-3X+1$在${\mathbb{Z}}[X]$上不可约，所以，${\mathbf{Gal}}\left(
  {K/{\mathbb{Q}}}
\right)\simeq \mathfrak{A}_3$或$\mathfrak{S}_3$。我们计算其判别式
\[
{\rm Disc}(P)=-4(-3)^3-27 \cdot 1^2=81=9^2.
\]
所以，${\mathbf{Gal}}\left(
  {K/{\mathbb{Q}}}
\right)\simeq \mathfrak{A}_3$。
:::

::: example
令$K$为$P(X)=X^3-3TX-T-T^2$在${\mathbb{C}}(T)$上的分裂域，计算${\mathbf{Gal}}\left(
  {K/{\mathbb{C}}(T)}
\right)$。

首先，根据Eisenstein判别法以及考察${\mathbb{C}}[T]$的素理想$(T)$，
我们知道$P(X)$在${\mathbb{C}}[T]$上不可约，
从而$P(X)$在${\mathbb{C}}(T)={\rm Frac}\big({\mathbb{C}}[T]\big)$上不可约，所以${\mathbf{Gal}}\left(
  {K/{\mathbb{C}}(T)}
\right)\simeq \mathfrak{A}_3$或$\mathfrak{S}_3$。我们计算其判别式
\[
{\rm Disc}(P)=-4(-3T)^3-27 (-T-T^2)^2=-108T^2(T-1)^2=\big(\sqrt{-108}T(T-1)\big)^2.
\]
所以，${\mathbf{Gal}}\left(
  {K/{\mathbb{C}}(T)}
\right)\simeq \mathfrak{A}_3$。
:::

::: example
令$K$为$P(X)=X^{2^m}-1$在${\mathbb{Q}}$上的分裂域，其中，$m\geqslant 2$，计算${\mathbf{Gal}}\left(
  {K/{\mathbb{Q}}}
\right)$。

根据分圆扩张的理论，${\mathbf{Gal}}\left(
  {K/{\mathbb{Q}}}
\right)\simeq \left(
  {{\mathbb{Z}}/2^m{\mathbb{Z}}}
\right)^\times$。我们使用习题 @sec:premitive-roots 的结论，即存在群同构：
\[
  {\mathbb{Z}/2\mathbb{Z}}
\times
  {\mathbb{Z}/2^{m-2}\mathbb{Z}}
\longrightarrow\left(
  {\mathbb{Z}/2^m\mathbb{Z}}
\right)^\times,\ \  (a,b)\mapsto (-1)^a5^b \mod 2^m.
\]
所以，${\mathbf{Gal}}\left(
  {K/{\mathbb{Q}}}
\right)\simeq
  {\mathbb{Z}/2\mathbb{Z}}
\times
  {\mathbb{Z}/2^{m-2}\mathbb{Z}}
$。
:::

::: example
令$K$为$P(X)=X^4-5$在${\mathbb{Q}}$上的分裂域，计算${\mathbf{Gal}}\left(
  {K/{\mathbb{Q}}}
\right)$。

考虑域扩张的序列
${\mathbb{Q}}\subset   {\mathbb{Q}}(5^{\frac{1}{4}})\subset K={\mathbb{Q}}(5^{\frac{1}{4}}, i)$，
我们知道$[K:{\mathbb{Q}}]=8$。

根据 @exam:gal-Xn-a，$\mathbf{Gal}(
  {L/K}
)$是${\mathbf{Aff}_1\big(
  {{\mathbb{Z}}/4{\mathbb{Z}}}
\big)}$的子群。然而，$|{\mathbf{Aff}_1\big(
  {{\mathbb{Z}}/4{\mathbb{Z}}}
\big)}|=8$，所以，
\[
\mathbf{Gal}(
  {L/K}
)\simeq {\mathbf{Aff}_1\big(
  {{\mathbb{Z}}/4{\mathbb{Z}}}
\big)}.
\]

另外，$\mathbf{Aff}_1\big(
  {{\mathbb{Z}}/4{\mathbb{Z}}}
\big)\simeq \mathfrak{D}_4$。实际上，$\mathbf{Aff}_1$中的元素
\[
x\mapsto 3x, \ \ x\mapsto x+1
\]
恰好对应着$\mathfrak{D}_4$中的一个反射与一个旋转。
:::

::: example
令$K$为$P(X)=X^6-2$在${\mathbb{Q}}$上的分裂域，计算${\mathbf{Gal}}\left(
  {K/{\mathbb{Q}}}
\right)$。

根据 @exam:gal-Xn-a，$\mathbf{Gal}(
  {L/K}
)$是${\mathbf{Aff}_1\big(
  {{\mathbb{Z}}/6{\mathbb{Z}}}
\big)}$的子群。另外，由于$|\big(
  {{\mathbb{Z}}/6{\mathbb{Z}}}
\big)|=2$，所以，$|{\mathbf{Aff}_1\big(
  {{\mathbb{Z}}/6{\mathbb{Z}}}
\big)}|=12$并且$\mathbf{Aff}_1\big(
  {{\mathbb{Z}}/6{\mathbb{Z}}}
\big)\simeq \mathfrak{D}_6$。实际上，$\mathbf{Aff}_1$中的元素
\[
x\mapsto 5x, \ \ x\mapsto x+1
\]
对应$\mathfrak{D}_6$中的一个反射与一个旋转。

另外，
域扩张的序列
${\mathbb{Q}}\subset   {\mathbb{Q}}(2^{\frac{1}{6}})\subset K={\mathbb{Q}}(2^{\frac{1}{6}}, \xi_6)$
表明$[K:{\mathbb{Q}}]\geqslant 12$。所以，
\[
\mathbf{Gal}(
  {L/K}
)\simeq {\mathbf{Aff}_1\big(
  {{\mathbb{Z}}/6{\mathbb{Z}}}
\big)}\simeq \mathfrak{D}_6.
\]
:::

::: example
令$L$为$P(X)=X^n-T$在$K={\mathbb{C}}(T)$或$K={\mathbb{R}}(T)$上的分裂域，计算${\mathbf{Gal}}\left(
  {L/K}
\right)$。

根据Eisenstein判别法，$P(X)$在这两个域上均为不可约多项式。
当$K={\mathbb{C}}(T)$时，由于${\mathbb{C}}(T)$上包含所有$n$-次单位根，根据Kummer理论，
${\mathbf{Gal}}\left(
  {L/K}
\right)\simeq
  {{\mathbb{Z}}/n{\mathbb{Z}}}
$。

当$K={\mathbb{R}}(T)$，我们仍然有$L={\mathbb{C}}(\sqrt[n]{T})={\mathbb{R}}(T)(\sqrt[n]{T},i)$，
即${\mathbb{R}}(T)\subset{\mathbb{R}}(T)(\sqrt[n]{T})\subset{\mathbb{R}}(T)(\sqrt[n]{T},i)$，所以，
$[L:K]=2n$。另外，仿照 @exam:gal-Xn-a，对任意$g\in {\mathbf{Gal}}\left(
  {L/K}
\right)$，通过考虑$g$在$i$和$\sqrt[n]{T}$的作用，我们知道${\mathbf{Gal}}\left(
  {L/K}
\right)$是由映射
\[
\{(i,\sqrt[n]{T})\mapsto (\pm i,\xi_n^k \sqrt[n]{T})\}
\]
构成的群的子群。容易看出，这是$\mathfrak{D}_n$。由于${\mathbf{Gal}}\left(
  {L/K}
\right)$恰有$2n$个元素，所以，${\mathbf{Gal}}\left(
  {L/K}
\right)\simeq \mathfrak{D}_n$。
:::

::: example
令$K$为$P(X)=X^6+3$在${\mathbb{Q}}$上的分裂域，计算${\mathbf{Gal}}\left(
  {K/{\mathbb{Q}}}
\right)$。

根据Eisenstein判别法，$P$是不可约多项式，从而，$6\mid [K:{\mathbb{Q}}]$。
注意到$\alpha=i\sqrt[6]{3}$是$P$的根并且$K$包含$6$次单位根$\xi_6$，从而，
$K={\mathbb{Q}}(\alpha,\xi_6)$。

根据 @exam:gal-Xn-a，$\mathbf{Gal}(
  {L/K}
)$是${\mathbf{Aff}_1\big(
  {{\mathbb{Z}}/6{\mathbb{Z}}}
\big)}$的子群。然而，$|{\mathbf{Aff}_1\big(
  {{\mathbb{Z}}/6{\mathbb{Z}}}
\big)}|=12$，所以，$[K:{\mathbb{Q}}]=6$或$12$。通过考虑$\mathbf{Gal}(
  {L/K}
)$对$\alpha$和$\xi_6$的作用，我们来证明$[K:{\mathbb{Q}}]=6$。

给定$g\in \mathbf{Gal}(
  {L/K}
)$，由于$\xi_6$和$\xi_6^{-1}$是仅有的$6$次本原单位根，所以
\[
g(\xi_6)=\xi_6^a, \ \ g(\alpha)=\xi_6^b \cdot \alpha,
\]
其中，$a=\pm 1$，$b=0,1,\cdots,5$并且$a,b$的值决定了$g$。
由于$\xi_6=\frac{1}{2}+\frac{i\sqrt{3}}{2}$，
所以，$\xi_6$在$g$下的像由$g(i\sqrt{3})$决定，即$g(i\sqrt{3})=a\cdot i\sqrt{3}$。
另外，$-\alpha^3=i\sqrt{3}$，从而，
\[
a = i\sqrt{3}= g(-\alpha^3)=-g(\alpha)^3=-\xi_6^{3b} \alpha^3=\xi_6^{3b}\cdot i\sqrt{3}.
\]
所以，$a=\xi_6^{3b}$。当$a=1$时，$b=0,2,4$；当$a=-1$时，$b=1,3,5$。
所以，这样的$(a,b)$的个数不超过$6$。据此，$[K:{\mathbb{Q}}]=6$。
实际上，以上运算表明$\alpha^3=i\sqrt{3}$，从而$\xi_6=\frac{1}{2}-\frac{\alpha^3}{2}$，
这就直接证明了$K={\mathbb{Q}}(\alpha,\xi_6)={\mathbb{Q}}(\alpha)$。

令$X=\Big\{\{\alpha,-\alpha\},\{\xi_6\alpha,-\xi_6\alpha\},\{\xi^2_6\alpha,-\xi^2_6\alpha\}\Big\}$
为根的集合的一个分拆，不难看出，$\mathbf{Gal}(
  {L/K}
)$作用在$X$上，这就给出了$\mathbf{Gal}(
  {L/K}
)\simeq\mathfrak{S}_3$。
:::

::: example
令$L$为$P(X)=(X^5-2)(X^5-3)$在${\mathbb{Q}}$上的分裂域，计算${\mathbf{Gal}}\left(
  {L/{\mathbb{Q}}}
\right)$。

首先考虑$K={\mathbb{Q}}(\xi_5,\sqrt[5]{2})$，这是$X^5-2$的分裂域。
由于$K$有$4$次中间域${\mathbb{Q}}(\xi_5)$和$5$次中间域${\mathbb{Q}}(\sqrt[5]{2})$，所以，
$[K:{\mathbb{Q}}]=20$。根据 @exam:gal-Xn-a，$\mathbf{Gal}(
  {K/{\mathbb{Q}}}
)$是${\mathbf{Aff}_1\big(
  {{\mathbb{Z}}/5{\mathbb{Z}}}
\big)}$的子群，其中，$|{\mathbf{Aff}_1\big(
  {{\mathbb{Z}}/5{\mathbb{Z}}}
\big)}|=20$，所以，$\mathbf{Gal}(
  {K/{\mathbb{Q}}}
)\simeq {\mathbf{Aff}_1\big(
  {{\mathbb{Z}}/5{\mathbb{Z}}}
\big)}$。给定$g\in \mathbf{Gal}(
  {K/{\mathbb{Q}}}
)$，它由以下$a,b$决定：
\[
g(\xi_5)=\xi_5^a, \ \ g(\sqrt[5]{2})=\xi_5^b \cdot \sqrt[5]{2}, \ \ 1\leqslant a\leqslant 4, 0\leqslant b\leqslant 4.
\]

我们现在证明$X^5-3$在$K={\mathbb{Q}}(\xi_5,\sqrt[5]{2})$上不可约：

- $X^5-3$在$K$上没有根。

  我们注意到${\mathbb{Q}}(\xi_5^b \cdot \sqrt[5]{2})$是$K$的$5$个不同的$5$次中间域，其中，
  $b=0,1,\cdots,4$（如果有两个相同，则$\xi_5$和$\sqrt[5]{2}$都在这个中间域中），
  它们对应着$\mathbf{Gal}(
  {K/{\mathbb{Q}}}
)$的$5$个子群。
  由于$20$阶的群的Sylow $2$-子群最多有$5$个，所以，这是$K$的所有$5$次中间域。

  如果$\sqrt[5]{3}\in K={\mathbb{Q}}(\xi_5,\sqrt[5]{2})$，
  则${\mathbb{Q}}(\sqrt[5]{3})$为一个$5$次中间域并且落在${\mathbb{R}}$中，
  这表明${\mathbb{Q}}(\sqrt[5]{3})={\mathbb{Q}}(\sqrt[5]{2})=M$。
  据此，由于$\big\{\big(\sqrt[5]{2}\big)^{b}\big\}_{b=0}^{4}$是$
  {M/{\mathbb{Q}}}
$的基，所以，存在$l_0,\cdots,l_4\in {\mathbb{Q}}$，使得
  \[
  \sqrt[5]{3}=l_0+l_1\sqrt[5]{2}+l_2\big(\sqrt[5]{2}\big)^{2}+l_3\big(\sqrt[5]{2}\big)^{3}+l_4\big(\sqrt[5]{2}\big)^{4}.
  \]
  通过取迹${\rm Tr}_{_{
  {M/{\mathbb{Q}}}
}}$，则$l_0=0$。此时，考虑
  \[
  \sqrt[5]{3}\big(\sqrt[5]{2}\big)^4=2l_1+2l_2 \sqrt[5]{2} +2l_3\big(\sqrt[5]{2}\big)^{2}+2l_4\big(\sqrt[5]{2}\big)^{3}.
  \]
  那么，$\beta=\sqrt[5]{3}\big(\sqrt[5]{2}\big)^4=\sqrt[5]{3\cdot 2^4}$满足$\beta^5-3\cdot 2^4=0$，
  从而，$1, \beta,\cdots,\beta^4$也是$
  {M/{\mathbb{Q}}}
$的基，从而，取迹${\rm Tr}_{_{
  {M/{\mathbb{Q}}}
}}$给出$l_1=0$。以此类推，$l_0=\cdots=l_4=0$，矛盾。

- $X^5-3$在$K$上不能分解成一个二次与一个三次不可约多项式的乘积。

  如若不然，根据上述，$X^5-3=P(X)Q(X)$，其中，$P(X),Q(X)\in K[X]$并且$P,Q$是首一的并且是不可约的。
  那么，对任意的$\sigma\in \mathbf{Gal}(
  {K/{\mathbb{Q}}}
)$，我们有
  \[
  X^5-3=(X^5-3)^\sigma=P^\sigma(X)Q^\sigma(X).
  \]
  此时，$P^\sigma(X),Q^\sigma(X)$均为首一不可约多项式。
  根据$K[X]$是唯一分解整环以及$P$与$Q$的次数为$2$和$3$，
  我们必有$P^\sigma(X)=P(X), Q^\sigma(X)=Q(X)$，
  其中，$\sigma\in \mathbf{Gal}(
  {K/{\mathbb{Q}}}
)$。这说明$P,Q\in {\mathbb{Q}}[X]$，矛盾。

综上所述，我们得到$[L:{\mathbb{Q}}]=100$，其中，
$L=K(\sqrt[5]{3})={\mathbb{Q}}(\xi_5,\sqrt[5]{2},\sqrt[5]{3})$。

我们现在将$\mathbf{Gal}(
  {L/{\mathbb{Q}}}
)$实现为${\mathbf{Aff}_2\big(
  {{\mathbb{Z}}/5{\mathbb{Z}}}
\big)}$的子群，
\[
{\mathbf{Aff}_2\big(
  {{\mathbb{Z}}/5{\mathbb{Z}}}
\big)}=\left\{f_{A,b}\colon{\mathbb{F}}_5^2\rightarrow {\mathbb{F}}^2_5\big| \text{对任意 $x\in {\mathbb{F}}_5^2$，}f_{A,b}(x)=A\cdot x+b,  A\in {\mathbf{GL}}(2;{\mathbb{F}}_5), b\in {\mathbb{F}}_5^2\right\}
\]
$\mathbf{Gal}(
  {K/{\mathbb{Q}}}
)\simeq {\mathbf{Aff}_1\big(
  {{\mathbb{Z}}/5{\mathbb{Z}}}
\big)}$。
给定$g\in \mathbf{Gal}(
  {K/{\mathbb{Q}}}
)$，它由以下$a,b_1,b_2$决定：
\[
g(\xi_5)=\xi_5^a, \  g(\sqrt[5]{2})=\xi_5^{b_1} \cdot \sqrt[5]{2}, \ g(\sqrt[5]{3})=\xi_5^{b_2} \cdot \sqrt[5]{3},\ 1\leqslant a\leqslant 4, 0\leqslant b_1,b_2\leqslant 4.
\]
按照定义，令$A=\begin{pmatrix} a&0\\ 0&a\end{pmatrix}, b=\begin{pmatrix} b_1\\b_2\end{pmatrix}$，
定义
\[
\varphi\colon \mathbf{Gal}(
  {L/{\mathbb{Q}}}
)\mapsto {\mathbf{Aff}_2\big(
  {{\mathbb{Z}}/5{\mathbb{Z}}}
\big)}, \ g\mapsto  \left(\begin{pmatrix} x_1\\x_2\end{pmatrix}\mapsto \begin{pmatrix} a&0\\ 0&a\end{pmatrix}\begin{pmatrix} x_1\\ x_2\end{pmatrix} +\begin{pmatrix} b_1\\b_2\end{pmatrix} \right)
\]
这样的元素恰好有$100$个。

特别地，${\mathbf{Aff}_2\big(
  {{\mathbb{Z}}/5{\mathbb{Z}}}
\big)}$的子群
\[
\left\{f_{A,b}\colon{\mathbb{F}}_5^2\rightarrow {\mathbb{F}}^2_5\big| A\in {\mathbf{GL}}(2;{\mathbb{F}}_5)\text{ 且是对角阵},b\in {\mathbb{F}}_5^2\right\}
\]
是可解群。实际上，$100$阶的群的Sylow $5$-子群都是正规子群。
由于$5$-群均可解，所以每个$100$阶的群都是可解群。
:::

::: example
令$L$为$P(X)=X^6-3X^2+1$在${\mathbb{Q}}$上的分裂域，计算${\mathbf{Gal}}\left(
  {L/{\mathbb{Q}}}
\right)$。

令$Q(X)=X^3-3X^2+1$，则$Q$是不可约多项式并且有三个实根依次记作$\alpha<0<\beta<\gamma$。
令$K$为$Q(X)$在${\mathbb{Q}}$上的分裂域，由于$\Delta(Q)=81=9^2$，所以${\mathbf{Gal}}\left(
  {K/{\mathbb{Q}}}
\right)\simeq \mathfrak{A}_3$，选取生成元$\sigma\in {\mathbf{Gal}}\left(
  {K/{\mathbb{Q}}}
\right)$，使得$\sigma(\alpha)=\beta,\sigma(\beta)=\gamma,\sigma(\gamma)=\alpha$。由于$[K:{\mathbb{Q}}]=3$，我们还有$K={\mathbb{Q}}(\alpha)={\mathbb{Q}}(\beta)={\mathbb{Q}}(\gamma)$。

由于$P(X)=Q(X^2)$，所以，
$L=K(\sqrt{\alpha},\sqrt{\beta},\sqrt{\gamma})={\mathbb{Q}}(\sqrt{\alpha},\sqrt{\beta},\sqrt{\gamma})$。
由于$\sqrt{\alpha}\notin {\mathbb{R}}$，所以，$[L:K(\sqrt{\beta},\sqrt{\gamma})]=2$。

由于${\mathbf{Gal}}\left(
  {L/{\mathbb{Q}}}
\right)\stackrel{{\rm Res}}{\longrightarrow}{\mathbf{Gal}}\left(
  {K/{\mathbb{Q}}}
\right)$是满射，任选$\overline{\sigma}$为$\sigma$在${\mathbf{Gal}}\left(
  {L/{\mathbb{Q}}}
\right)$中的延拓。那么，$\overline{\sigma}(\sqrt{\alpha})=\pm\sqrt{\beta},\overline{\sigma}(\sqrt{\beta})=\pm\sqrt{\gamma},\overline{\sigma}(\sqrt{\gamma})=\pm\sqrt{\alpha}$。利用$\overline{\sigma}$，我们可以看出$[K(\sqrt{\beta}):K]=2$：否则$\sqrt{\beta}\in K$而$\overline{\sigma}(K)\subset K$，所以，$\overline{\sigma}^2(\sqrt{\alpha})=\pm \gamma\in K$，这与$K\subset {\mathbb{R}}$矛盾。类似地，$[K(\sqrt{\gamma}):K]=2$。

\[
\begin{tikzcd}
  &{\mathbb{Q}}(\sqrt{\alpha},\sqrt{\beta},\sqrt{\gamma})=L&  \\
   &{\mathbb{Q}}(\sqrt{\alpha},\sqrt{\beta})\arrow[u,"2",dash] \arrow[dl, dash, "2 ", swap]\arrow[dr, dash, "2 "]  &\\
{\mathbb{Q}}(\sqrt{\beta})  \arrow[ur,  dash]  \arrow[dr, dash, "2 ", swap]   &  &   {\mathbb{Q}}(\sqrt{\gamma})    \arrow[ul,  dash ]  \arrow[dl, "2", dash] \\
  &K & \\
   &{\mathbb{Q}}\arrow[u,"3", dash]  &
  \end{tikzcd}
\]
利用$\overline{\sigma}$，我们证明${\mathbb{Q}}(\sqrt{\beta})\neq {\mathbb{Q}}(\sqrt{\gamma})$：
若不然，令${\mathbb{Q}}(\sqrt{\beta})={\mathbb{Q}}(\sqrt{\gamma})=M$，
由于$\overline{\sigma}(\sqrt{\beta})=\pm\sqrt{\gamma}$，所以$\overline{\sigma}(M)\subset M$，从而，
$\overline{\sigma}^2(\sqrt{\beta})=\pm\sqrt{\alpha}\in M$，这与$M\subset {\mathbb{R}}$矛盾。
综合上述讨论，我们得到上述扩张的图表。

由于$
  {L/K}
$是$(X^2-\alpha)(X^2-\beta)(X^2-\gamma)$的分裂域，其Galois群的$8$个元素可以罗列如下：
\[
\big\{\alpha\mapsto \pm\sqrt{\alpha},\ \beta\mapsto \pm\sqrt{\beta}, \ \gamma\mapsto \pm\sqrt{\gamma}\big\}.
\]
所以，${\mathbf{Gal}}\left(
  {L/K}
\right)\simeq \left(
  {{\mathbb{Z}}/2{\mathbb{Z}}}
\right)^3$。特别地，我们有

```math {@eq:exact-seq-aux-1}
1\longrightarrow \left(
  {{\mathbb{Z}}/2{\mathbb{Z}}}
\right)^3\longrightarrow {\mathbf{Gal}}\left(
  {L/{\mathbb{Q}}}
\right)
\longrightarrow
  {{\mathbb{Z}}/3{\mathbb{Z}}}
\longrightarrow 1.
```

我们也可以将${\mathbf{Gal}}\left(
  {L/{\mathbb{Q}}}
\right)$的元素全部罗列出来：
\[
\begin{cases}&\alpha\mapsto \pm\sqrt{\alpha},\\
&\beta\mapsto \pm\sqrt{\beta}, \\
&\gamma\mapsto \pm\sqrt{\gamma}.
\end{cases}, \ \ \begin{cases}&\alpha\mapsto \pm\sqrt{\beta},\\
&\beta\mapsto \pm\sqrt{\gamma}, \\
&\gamma\mapsto \pm\sqrt{\alpha}.
\end{cases}, \ \ \begin{cases}&\alpha\mapsto \pm\sqrt{\gamma},\\
&\beta\mapsto \pm\sqrt{\alpha}, \\
&\gamma\mapsto \pm\sqrt{\beta}.
\end{cases}
\]
这自然给出了${\mathbf{Gal}}\left(
  {L/{\mathbb{Q}}}
\right)$的群结构。

我们现在用矩阵群或者更为熟悉的群来表示${\mathbf{Gal}}\left(
  {L/{\mathbb{Q}}}
\right)$。实际上，我们有
\[
{\mathbf{Gal}}\left(
  {L/{\mathbb{Q}}}
\right)=\left\{\begin{pmatrix} \pm 1&0&0\\
 0&\pm 1& 0\\
 0&0&\pm 1\end{pmatrix}, \ \begin{pmatrix}
 0&\pm 1& 0\\
 0&0&\pm 1\\
  \pm 1&0&0\end{pmatrix}, \ \ \begin{pmatrix}
 0&0&\pm 1\\
  \pm 1&0&0\\
  0&\pm 1& 0\end{pmatrix}\right\}.
\]
:::

另外，根据正合列 @eq:exact-seq-aux-1，${\mathbf{Gal}}\left(
  {L/{\mathbb{Q}}}
\right)$中有$3$阶子群$H\simeq \langle \overline{\sigma}\rangle$（可能要重选$\overline{\sigma}$），其像为${\mathbf{Gal}}\left(
  {K/{\mathbb{Q}}}
\right)$；${\mathbf{Gal}}\left(
  {L/{\mathbb{Q}}}
\right)$中有同构于${\mathbb{F}}_2^3$的$8$阶子群$N$。由于它们的阶互素，所以，${\mathbf{Gal}}\left(
  {L/{\mathbb{Q}}}
\right)\simeq N \rtimes_\varphi  H$，其中，作用$\varphi$由如下映射给出：
\[
\varphi(\overline{\sigma})\colon (x_1,x_2,x_3)\mapsto (x_2,x_3,x_1), \ \ \forall (x_1,x_2,x_3) \in N\simeq {\mathbb{F}}_2^3.
\]
以上给出了
\[
{\mathbf{Gal}}\left(
  {L/{\mathbb{Q}}}
\right)\simeq \left(
  {{\mathbb{Z}}/2{\mathbb{Z}}}
\right)^3 \rtimes_\varphi
  {{\mathbb{Z}}/3{\mathbb{Z}}}
.
\]

我们还可以证明
\[
{\mathbf{Gal}}\left(
  {L/{\mathbb{Q}}}
\right)\simeq \mathfrak{A}_4\times
  {{\mathbb{Z}}/2{\mathbb{Z}}}
.
\]
首先观察到$H$在$N={\mathbb{F}}_2^3$上的作用有一个$1$维不变子空间：
\[
V={\mathbb{F}}_2\cdot (1,1,1)=\{(0,0,0),(1,1,1)\}\subset {\mathbb{F}}_2^3.
\]
注意到$V$在$ {\mathbb{F}}_2^3$中有一个$2$维的补空间$W$，它由$(1,1,0),(1,0,1)$和$(0,1,1)$张成。
实际上，
\[
W=\big\{(x_1,x_2,x_3)\in {\mathbb{F}}_2^3\big| x_1+x_2+x_3=0\big\}.
\]
此时，$ {\mathbb{F}}_2^3=V\oplus W$并且$W$在$H$的作用下也不变。此时，我们有
\[
{\mathbb{F}}_2^3 \rtimes_\varphi H\simeq (V\times W) \rtimes_\varphi H\simeq V\times \big( W \rtimes_\varphi H)\simeq
  {{\mathbb{Z}}/2{\mathbb{Z}}}
\times \big( W \rtimes_\varphi H).
\]
将$W$等同于$\mathfrak{A}_4$中的$\{1,(1,2)(3,4),(1,3)(2,4),(1,4)(2,3)\}$而$H$等同于某个
$3$-循环生成的子群，容易看出，$\mathfrak{A}_4\simeq W \rtimes_\varphi H$，这就完成了计算。
