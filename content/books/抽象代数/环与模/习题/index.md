---
title: 习题
---

## 分式域的推广：局部化

在此问题中，字母$A$表示是某个给定的交换环，

1. 给定子集$S\subset A$，如果

   - $1\in S$；

   - 对任意的$s_1,s_2\in S$，有$s_1\cdot s_2\in S$。

   我们就称$S$是**乘性子集**。
   证明，以下两个集合是乘性子集：$\{1,f,f^2,\cdots\}$，其中，$f\in A$；$A-\mathfrak{p}$，其中，
   $\mathfrak{p}$是素理想（特别地，如果$A$是整环，$A-\{0\}$是乘性子集）。

2. 我们在$A\times S$上定义等价关系：$(a,s)\sim (a',s')$指的是存在$t\in S$，
   使得$as'\cdot t=a's\cdot t$。证明，以上给出了$A\times S$上的一个等价关系。

   令$A_S={(A\times S)/\sim}$，我们用$\frac{a}{s}$表示$(a,s)$所在的等价类。
   证明，对任意的$s'\in S$，我们有$\frac{s'a}{s's}=\frac{a}{s}$。

3. 我们在$A_S$上定义如下的加法和乘法：
   \[
   \frac{a}{s}+\frac{b}{t}=\frac{at+bs}{st}, \ \ \frac{a}{s}\cdot\frac{b}{t}=\frac{ab}{st}.
   \]
   通过验证以上是良定义的来证明，$A_S$在以上运算下成为一个环并指出它的乘法和加法单位元。
   进一步，我们还有自然的环同态：
   \[
   \iota\colon A\rightarrow A_S, \ a\mapsto \frac{a}{1}.
   \]
   我们把$A_S$称作是$A$对乘性子集$S$的**局部化**。

4. 令$S_0=\{a\in A~|~ab= 0\Leftrightarrow b=0\}$。证明，$S_0$是乘性子集。
   我们称$A_{S_0}$为$A$的**全分式环**。
   进一步证明$\iota\colon A\rightarrow A_{S_0}$是单射并且此时$\frac{a}{s}=\frac{a'}{s'}$当且仅当
   $as'=a's$。

5. 给定乘性子集$S\subset A$。
   证明，${\rm Ker}(\iota)=\{a\in A\mid\text{存在}~s\in S, ~\text{使得}~as=0\}$。
   进一步证明，$\iota$为单射当且仅当$S\subset S_0$。

6. （局部化的泛性质）$A,S,A_S$和$\iota\colon A\rightarrow A_S$如上述。
   试验证，$\iota(S)\subset (A_S)^\times$。

   \[
   \begin{tikzcd}
   A \arrow[d, "\iota"] \arrow[r, "\varphi"] &  B \\
   A_S    \arrow[ur, "\psi",dashed,swap]\end{tikzcd}
   \]

   证明，对任意的环$B$和环同态$\varphi\colon A\rightarrow B$，如果$\varphi(S)\subset B^\times$，
   则存在唯一的环同态$\psi\colon A_S\rightarrow B$，使得$\psi\circ \iota=\varphi$。

7. $A,S,A_S$和$\iota\colon A\rightarrow A_S$如上述，
   $\widehat{S}=\{a\in A\mid\text{存在}~b\in A, ~\text{使得}~ab\in S\}$。
   证明，$\widehat{S}=\iota^{-1}\left((A_S)^\times\right)$。
   进一步证明环同构$A_S\stackrel{\simeq}{\longrightarrow}A_{\widehat{S}}$，其中，
   $\frac{a}{1}$的像是$\frac{a}{1}$。

8. $A$和$B$是交换环，$\varphi\colon A\rightarrow B$是环同态，
   $S\subset A$和$T\subset B$是乘性子集并且$\varphi(S)\subset T$。
   证明，存在唯一的环同态$\psi\colon A_S\rightarrow B_T$，使得如下图表交换[^1]：
   \[
   \begin{tikzcd}
   A \arrow[d, "\iota"] \arrow[r, "\varphi"] &  B \arrow[d, "\iota"] \\
   A_S    \arrow[r, "\psi",dashed] &B_T\end{tikzcd}
   \]

9. （理想与局部化）$I\subset A$是理想，令$I_S$为$\iota(I)$在$A_S$中生成的理想。

   - 证明，$I_S=\big\{\frac{a}{s}\bigm|a\in I,s\in S\big\}$。
     进一步证明，$I_S=A_S$当且仅当$S\cap I \neq \emptyset$。

   - $J\subset A_S$是理想，证明，$\big(\iota^{-1}(J)\big)_S=J$。

10. （素理想与局部化）我们证明$A_S$中的素理想与$A$中与$S$不交的素理想一一对应。

    - $\mathfrak{p}\subset A$是素理想并且$\mathfrak{p}\cap S=\emptyset$，证明，
      $\mathfrak{p}_S$为$A_S$中的素理想。

    - $\mathfrak{q}\subset A_S$是素理想，证明，
      $\iota^{-1}\mathfrak{q}$是$A$中唯一满足$\mathfrak{p}_S=\mathfrak{q}$的素理想。

11. $\mathfrak{p}\subset A$是素理想，$S=A-\mathfrak{p}$，令$A_\mathfrak{p}=A_S$。
    证明，$A_\mathfrak{p}$是局部环（即只有一个极大理想的环）并确定它的极大理想。

12. （局部化与商可交换）$I\subset A$是理想，$S\subset A$是乘性子集，
    $\pi\colon A\rightarrow{A/I}$是商映射，$\pi(S)\subset{A/I}$也是乘性子集。证明，存在自然的环同构
    \[
    \left({A/I}\right)_{\pi(S)}\stackrel{\simeq}{\longrightarrow}{A_S/I_S}.
    \]

13. 给定$f\in A$，$S=\{1,f,f^2,\cdots\}$，记$A_f=A_S$。证明，我们有环同构
    \[
    {A[X]/(1-fX)}\stackrel{\simeq}{\longrightarrow} A_f, \ \ X\mapsto \frac{1}{f}.
    \]

## $\mathbb{Z}\Big[\sqrt{d}\Big]^\times$与Pell方程，$d\neq \square,d>0$

假设$d\in \mathbb{Z}$不是完全平方数。令
\[
\mathbb{Z}\Big[\sqrt{d}\Big]=\{x+y\sqrt{d}\mid x,y\in \mathbb{Z}\},  \ \ \mathbb{Q}\Big[\sqrt{d}\Big]=\{x+y\sqrt{d}\mid x,y\in \mathbb{Q}\}.
\]

1. 证明，$\mathbb{Z}\Big[\sqrt{d}\Big]$是环而$\mathbb{Q}\Big[\sqrt{d}\Big]$为其分式域。

2. 证明，如果$d<0$，$\mathbb{Z}\Big[\sqrt{d}\Big]$是$\mathbb{C}$中的格点（从而是离散的）；
   如果$d>0$，$\mathbb{Z}\Big[\sqrt{d}\Big]$在$\mathbb{R}$中稠密。

3. 对任意的$z=x+y\sqrt{d}\in \mathbb{Q}\Big[\sqrt{d}\Big]$，
   我们定义$\overline{z}=x-y\sqrt{d}$（请注意，如果$d>0$，这不是复共轭）。
   证明，
   环$\mathbb{Z}\Big[\sqrt{d}\Big]$的自同构群${\mathbf{Aut}}\big(\mathbb{Z}\Big[\sqrt{d}\Big]\big)$
   恰有$2$个元素。

4. 对任意的$z\in \mathbb{Q}\Big[\sqrt{d}\Big]$，我们定义$N(z)=z\cdot \overline{z}$。
   证明，对任意的$a,b\in \mathbb{Q}\Big[\sqrt{d}\Big]$，
   $N(a\cdot b)=N(a)\cdot N(b)$并且$N(\mathbb{Z}\Big[\sqrt{d}\Big])\subset \mathbb{Z}$。
   据此证明：
   $\mathbb{Z}\Big[\sqrt{d}\Big]^\times=\big\{z\in \mathbb{Z}\Big[\sqrt{d}\Big]\big|N(z)=\pm 1\big\}$。

5. 对于$d<0$，试计算$\mathbb{Z}\Big[\sqrt{d}\Big]^\times$。

当$d>0$时，$\mathbb{Z}\Big[\sqrt{d}\Big]^\times$的结构要复杂得多。实际上，
\[
N(z=x+y\sqrt{d})=\pm 1  \ \ \Leftrightarrow \ \ x^2-dy^2=\pm 1.
\]
上述方程通常被称作是Pell方程。
研究$\mathbb{Z}\Big[\sqrt{d}\Big]^\times$可以给出以上方程所有的整数解。

1. 证明，$\mathbb{Z}\Big[\sqrt{2}\Big]^\times\cap (1,3)=\{1+\sqrt{2}\}$。

2. 证明，
   $\mathbb{Z}\Big[\sqrt{2}\Big]^\times=\{\pm\big(1+\sqrt{2}\big)^k \bigm|k\in \mathbb{Z}\}$
   并给出群同构
   $\mathbb{Z}\Big[\sqrt{2}\Big]^\times\simeq \mathbb{Z}\times{\mathbb{Z}/2\mathbb{Z}}$。

3. 如何刻画Pell方程$x^2-2y^2=1$和$x^2-2y^2=-1$的所有整数解？

以下假设$d>0$。

1. 证明，有序列$\{z_n\}_{n\geqslant 1}\subset \mathbb{Z}\Big[\sqrt{d}\Big]^\times$，
   使得$\displaystyle \lim_{n\rightarrow \infty}z_n=0$而$\{N(z_n)\}_{n\geqslant 1}$是有界的。

   （提示：使用标准的Dirichlet引理：对任意的$\alpha\in {\mathbb{R}}$，对任意的正整数$M$，
   存在整数$p$和正整数$q\leqslant M$，使得$|p-q\alpha|<\frac{1}{M}$。
   这个引理可以用抽屉原理直接证明或者请从文献中查阅证明）

2. 证明，存在上述序列的子序列$\{w_n\}_{n\geqslant 1}$以及整数$k$，使得对任意的$n,m\geqslant 1$，
   我们有$N(w_n)= k$并且$w_n\overline{w}_m \in k\mathbb{Z}\Big[\sqrt{d}\Big]$。
   （提示：考虑$w_n$在${\mathbb{Z}\Big[\sqrt{d}\Big]/k\mathbb{Z}\Big[\sqrt{d}\Big]}$中的像）

3. 证明，$\mathbb{Z}\Big[\sqrt{d}\Big]^\times$是无限集。

4. 证明，$\mathbb{Z}\Big[\sqrt{d}\Big]^\times\cap (0,\infty)$是乘法群$(0,\infty)$的离散子群，
   即对任意的$0<a<b<\infty$，$\mathbb{Z}\Big[\sqrt{d}\Big]^\times\cap (a,b)$是有限的。

5. 证明，存在$\eta_d\in (1,\infty)$（被称作是**基本单位**），
   使得$\eta_d$生成了$\mathbb{Z}\Big[\sqrt{d}\Big]^\times\cap (0,\infty)$。
   特别地，$\mathbb{Z}\Big[\sqrt{d}\Big]^\times\simeq \mathbb{Z}\times{\mathbb{Z}/2\mathbb{Z}}$。

   （注意到：对任意的$u\in \mathbb{Z}\Big[\sqrt{d}\Big]^\times-\{\pm 1\}$，
   四个点$\pm u,\pm \overline{u}$在区间$(-\infty,-1),(-1,0),(0,1),(1,\infty)$中各有一个）

## 关于$\mathbb{Z}[\sqrt{d}]$上的一些代数和算术性质

假设$d$是整数（目前不要求$d$不包含平方因子）。

1. （最大公约数与最小公倍数的概念）$A$是整环，$a_1,\cdots,a_n\in A$。
   假设存在$d\in A$使得对任意的$i$，$d \mid a_i$并且对任意的$d'\in A$，使得对任意的$i$，
   $d'\mid a_i$，就一定有$d'\mid d$，我们就称$d$是$a_1,\cdots,a_n$的一个**最大公约数**；
   假设存在$m\in A$使得对任意的$i$，$a_i\mid m$并且对任意的$m'\in A$，使得对任意的$i$，
   $a_i\mid m'$，就一定有$m\mid m'$，我们就称$d$是$a_1,\cdots,a_n$的一个**最小公倍数**。
   我们在课堂上证明了唯一分解整环中最大公约数和最小公倍数是存在的。

   - $A$是整环，$a,b,c\in A-\{0\}$。证明，$(a)\cap (b)=(c)$等价于$c$是$a,b$的一个最小公倍数。
     进一步证明，如果$a$是素元并且$a\nmid b$，那么，$ab$是$a,b$的一个最小公倍数。

   - $A$是整环，$a,b,c\in A-\{0\}$。如果$(a)+(b)=(c)$，证明$c$是$a,b$的一个最大公约数。
     然而，如果$c$是$a,b$的一个最大公约数，未必有$(a)+(b)=(c)$，请参考最后一小问。

   - 证明，在$\mathbb{Z}[\sqrt{-5}]$中，$2$和$1+\sqrt{-5}$有最大公约数。

   - 证明，在$\mathbb{Z}[\sqrt{-5}]$中，$2$和$1+\sqrt{-5}$没有最小公倍数。
     这表明$\mathbb{Z}[\sqrt{-5}]$不是唯一分解整环。

   - 证明，在$\mathbb{Z}[\sqrt{-5}]$中，$(2,1+\sqrt{-5})$不是主理想。

2. 我们按照以下步骤证明：如果$d<-2$，那么，$\mathbb{Z}[\sqrt{d}]$不是主理想整环。

   - 证明，$(1+\sqrt{-3},1-\sqrt{-3})$不是$\mathbb{Z}[\sqrt{-3}]$中的主理想。[^2]

   - 证明，$(2, \sqrt{-4})$不是$\mathbb{Z}[\sqrt{-4}]$中的主理想。[^3]

   - 令$\xi=\begin{cases}\sqrt{d}, \ \ &2\mid d;\\
1+\sqrt{d}, \ \ &2\nmid d
\end{cases}$。证明，$(2,\xi)=2\mathbb{Z}+\xi\mathbb{Z}$。

   - 证明，如果$d<-4$，$(2,\xi)$不是主理想。
     （提示：先证明$\mathbb{Z}[\sqrt{d}]$中$N(x)\leqslant 4$的元素只有$\pm 1,\pm 2$，其中，$d<-4$）

3. 假设$d$不是完全平方数，我们按照以下步骤证明$\mathbb{Z}[\sqrt{d}]$是Noether环：

   - 给定理想$0\neq I\subset \mathbb{Z}[\sqrt{d}]$，证明，存在正整数$n$，
     使得$I\cap \mathbb{Z}=(n)$。

   - 证明，作为加法群，$\mathbb{Z}[\sqrt{d}]$每个非零理想的指标是有限的。

   - 证明，对任意的正整数$n$，只有有限个理想$I\subset \mathbb{Z}[\sqrt{d}]$，
     使得$I\cap \mathbb{Z}=(n)$。

   - 证明，$\mathbb{Z}[\sqrt{d}]$是Noether环。

4. 当$d=-1,-2,2$时，$\mathbb{Z} [\sqrt{d}]$是Euclid整环，其中，
   我们取范数[^4]为$\|z\|=|N(z)|=\big|z\cdot \overline{z}|$。

   （提示：回忆课上关于Gauss整数环是Euclid整环：对$a,b\in \mathbb{Z}[\sqrt{-1}]$，
   选取$q\in \mathbb{Z}[\sqrt{-1}]$，使得
   \[
   |{\rm Re}(q)-{\rm Re}(\frac{a}{b})|<\frac{1}{2}, \ \ |{\rm Im}(q)-{\rm Im}(\frac{a}{b})|<\frac{1}{2}.
   \]
   此时，如果令$r=a-qb$，$N(r)<N(b)$。）

5. （一个Diophantine方程：Fermat）
   我们按照以下步骤证明$y^2=x^3-2$的整数解只有$(x,y)=(3,\pm5)$：

   - 证明，$\mathbb{Z} [\sqrt{-2}]^\times=\{\pm 1\}$。

   - 证明，如果$y$是奇数，那么，$y+\sqrt{-2}$与$y-\sqrt{-2}$互素。

   - 假设整数$(x,y)$满足$y^2=x^3-2$。
     证明，存在$a,b\in \mathbb{Z}$，使得$y+\sqrt{-2}=(a+b\sqrt{-2})^3$。

   - 利用上述表达式证明$(x,y)=(3,\pm5)$。

6. 试求$y^2=x^3-1$的所有整数解。

## 分圆多项式

对于$n\geqslant 1$，令$\xi_n=e^{\frac{1}{n}2\pi i}$，那么，
$\{\xi_n^k\}_{0\leqslant k\leqslant n-1}$给出了$X^n-1$在$\mathbb{C}$上的所有根，
我们把它们称作是（$\mathbb{C}$上的）$n$-次单位根。
如果$(k,n)=1$，
我们就称$\xi_n^k$是一个**本原的$n$-次单位根**并定义如下的首一（首项系数为$1$）的多项式
\[
\Phi_n(X)=\prod_{(k,n)=1,1\leqslant k\leqslant n}\big(X-\xi_n^k\big).
\]
这个$\Phi_n(X)\in \mathbb{C}[X]$被称作是 **$n$-次分圆多项式**。

1. 证明，$\displaystyle \prod_{d\mid n}\Phi_d(X)=X^n-1$。（请参考第一次作业）

2. 计算$\Phi_1(X)$和$\Phi_p(X)$，其中，$p$为素数。

3. 通过对$n$归纳证明，$\Phi_n(X)\in \mathbb{Z}[X]$。

4. 假设$z_0\in \mathbb{C}$。
   证明，$I_{z_0}=\{Q(X)\in \mathbb{Q}[X]\mid Q(z_0)=0\}$是$\mathbb{Q}[X]$中的主理想。
   进一步证明，如果$I_{z_0}\neq 0$，存在唯一的首一多项式$P(X)\in \mathbb{Q}[X]$，
   使得$I_{z_0}=\big(P\big)$并且$P(X)$是$\mathbb{Q}[X]$中的不可约多项式。
   我们把$P$称作是$z_0$的**极小多项式**。

5. $\zeta$是一个本原的$n$-次单位根，证明，其极小多项式$P(X)\in \mathbb{Z}[X]$。

6. $p$是素数并且$(p,n)=1$，我们按照如下方式证明$\zeta^p$也是$P(X)$的根：

   - 证明，
     $\mathbb{Z}[\zeta]=\displaystyle\big\{\sum_{\text{有限和}}a_k\zeta^k\bigm|a_k\in \mathbb{Z},k=1,2,\cdots\big\}$
     是整环。

   - 证明，在$\mathbb{Z}[\zeta]$中，$p\mid P(\zeta^p)$。（提示：考虑$P(X^p)-P(X)^p$）

   - 如果$P(\zeta^p)\neq 0$，证明，存在$Q\in \mathbb{Z}[X]$，使得
     \[
     X^n-1=P(X)Q(X).
     \]

   - 对上式中$X$求导数，证明，在环$\mathbb{Z}[\zeta]$中，$p\mid n$。继而推出矛盾。

7. 证明，$\Phi_n(X)$在$\mathbb{Q}[X]$不可约。（提示：研究$P$与$\Phi_n$的关系）

::: remark
在他1796年10月9日的数学日记中，Gauss记录了$\Phi_p(X)$在$\mathbb{Q}[X]$不可约的性质，其中，
$p$是素数；
在1808年6月12日的数学日记中，Gauss记录了$\Phi_n(X)$在$\mathbb{Q}[X]$不可约的性质。
文献中可考的关于$\Phi_n(X)$不可约的证明，较早一例可能是Kronecker在1854年的论文。
:::

## 用模的观点看线性代数

$K$是域，$n\geqslant 1$，$V$是$n$维$K$-线性空间，$T\in \mathbf{End}_K(V)$是$V$到自身的$K$-线性映射。
那么，$V$可以被视为$K[X]$-模：
\[
K[X]\times V\rightarrow V, \ \ P(X)\mapsto  \  ( v\mapsto P(T)v ).
\]
根据主理想整环$K[X]$上的有限生成模的分类定理，存在唯一的首一多项式$P_1,\cdots,P_s\in K[X]$，
使得$P_1\mid P_2, P_2\mid P_3, \cdots, P_{s-1}\mid P_s$并且有如下$K[X]$-模的分解：
\[
V\simeq{K[X]/(P_1(X))}\oplus{K[X]/(P_2(X))}\oplus \cdots \oplus{K[X]/(P_s(X))}.
\]
我们称$P_1,\cdots,P_s$为$T$的**不变因子**。

1. 证明，
   $\big\{P\in K[X]\big|P(T)=0\big\}$为$K[X]$的理想并且由其中唯一的首一且次数最低的多项式$m_T(X)$
   生成。这个多项式被称作是$T$的**极小多项式**。

2. 证明，$m_T(X)=P_s(X)$。

3. 令$p_T(X)$为$T$的特征多项式。证明，
   \[
   p_T(X)=P_1(X)P_2(X)\cdots P_s(X).
   \]

4. 给定$V$的一组基$\{e_i\}_{1\leqslant i\leqslant n}$，
   用$A=(a_{ij})_{1\leqslant i,j\leqslant n}\in \mathbf{M}_n(K)$表示$T$对应的矩阵，其中，
   $a_{ij}\in K$；$I$为$n\times n$的单位矩阵。
   令$L=X\cdot I-A=\begin{pmatrix} X-a_{11}&-a_{12} &\cdots &-a_{1n}\\
-a_{21}&X-a_{22} &\cdots &-a_{2n}\\
\vdots&\vdots &\ddots &\vdots\\
-a_{n1}&-a_{n2} &\cdots &X-a_{nn}
\end{pmatrix}\in \mathbf{M}_n(K[X])$。我们考虑$K[X]$-模之间的同态：
   \[
   L\colon K[X]^n\rightarrow K[X]^n,  \begin{pmatrix} F_1(X)\\
   F_2(X)\\
   \vdots\\
   F_n(X)\end{pmatrix}\mapsto \begin{pmatrix} X-a_{11}&-a_{12} &\cdots &-a_{1n}\\
   -a_{21}&X-a_{22} &\cdots &-a_{2n}\\
   \vdots&\vdots &\ddots &\vdots\\
   -a_{n1}&-a_{n2} &\cdots &X-a_{nn}
   \end{pmatrix}\begin{pmatrix} F_1(X)\\
   F_2(X)\\
   \vdots\\
   F_n(X)\end{pmatrix}
   \]
   以及
   \[
   \pi\colon K[X]^n\rightarrow V,  \begin{pmatrix} F_1(X)\\
   F_2(X)\\
   \vdots\\
   F_n(X)\end{pmatrix}\mapsto \sum_{i=1}^n F_i(T)\cdot e_i.
   \]
   证明，我们有$K[X]$-模之间的正合列：
   \[
   K[X]^n\stackrel{L}{\longrightarrow }K[X]^n\stackrel{\pi}{\longrightarrow } V\rightarrow 0,
   \]
   即证明${\rm Ker}(\pi)={\rm Im}(L)$并且$V\simeq{K[X]^n/{\rm Im}(L)}$。

   如果存在可逆的$P\in \mathbf{End}_K(V)$，使得$P\circ S\circ P^{-1}=T$，
   就称$S$与$T$是（通过$P$）**相似的**。
   \[
   \begin{tikzcd}
   V\arrow[r, "S"] \arrow[d, "P",swap] &  V \arrow[d, "P"]\\
   V\arrow[r, "T",swap]    &   V  \end{tikzcd}
   \]
   另外，根据$S$和$T$可分别在$V$上定义出（两个）$K[X]$-模的结构。第一个记作$V_S$：
   \[
   K[X]\times V\rightarrow V, \ \ P(X)\mapsto  \  ( v\mapsto P(S)v );
   \]
   第二个记作$V_T$：
   \[
   K[X]\times V\rightarrow V, \ \ P(X)\mapsto  \  ( v\mapsto P(T)v ).
   \]

5. 证明，若$S$与$T$是通过$P$相似的，则以下映射是$K[X]$-模同构：
   \[
   V_S\longrightarrow V_T, \ \ v\mapsto P(v).
   \]

6. 证明，$S$与$T$与$P$相似当且仅当$K[X]$-模$V_S$与$V_T$同构。

7. 证明，$S$与$T$与$P$相似当且仅当$S$与$T$具有同样的不变因子。

8. 给定$V$一组基使得$S$和$T$可以用矩阵表示（仍然记作$S$和$T$）证明，
   $S$与$T$与$P$相似当且仅当$X\cdot I-S$与$X\cdot I-T$在$\mathbf{M}_n(K[X])$中共轭，
   即存在$P\in \mathbf{GL}(n;K[X])$，使得$P\cdot (X\cdot I-S)\cdot P^{-1}=X\cdot I-T$。

9. 应用：试计算$\mathbf{GL}(2;\mathbb{F}_3)$的共轭类的个数。

10. 应用：给定域扩张${L/K}$以及$A,B\in \mathbf{M}_n(K)$。
    证明，若存在$P\in \mathbf{GL}(n;L)$使得$P A P^{-1}=B$，
    则存在$Q\in \mathbf{GL}(n;K)$使得$Q A Q^{-1}=B$。

    （提示：参考Smith标准型唯一性的证明）

11. 给定$\lambda\in K$。
    证明，$\lambda$是特征值等价于$X-\lambda \mid p_T(X)$，即$\lambda$为$p_T(X)$的根。
    令$V_\lambda$为$\lambda$对应的特征子空间（若$\lambda$不是特征值，则$V_\lambda=0$）。
    令$\mu_a(\lambda)$为$\lambda$作为$p_T(X)$的根的重数，我们称它为$\lambda$的**代数重数**；
    令$\mu_g(\lambda)=\dim_K V_\lambda$，我们称它为$\lambda$的**几何重数**。

12. 证明，$\mu_g(\lambda)=\big|\{i \bigm| X-\lambda \text{ 整除 } P_i(X) \}\big|$，其中，
    $\{P_i\}_{i\leqslant s}$为$T$的不变因子。

    （提示：可以将$K[X]$-模$V$进一步分解为
    \[
    V\simeq \left(\bigoplus_{\text{有限}}{K[X]/(X-\lambda)^e}\right)\oplus \left(\bigoplus_{\text{有限和，$Q$不可约，$Q(\lambda)\neq 0$}}{K[X]/(Q(X))^e}\right)
    \]
    并研究$X-\lambda$在分量上的作用
    ）

13. 证明，
    $\mu_g(\lambda)\leqslant \mu_a(\lambda)$并且
    $\displaystyle \sum_{\lambda}\mu_g(\lambda) \leqslant \dim_KV$。

14. 证明，$T$可被对角化当且仅当其极小多项式$m_T(X)$分裂成一次多项式的乘积。

## 练习题 {@section:ring-prac}

1. $A$是环（未必交换）。
   证明，如果$a\in A$是幂零元[^5]，$b\in A^\times$并且$ab=ba$，那么$a+b$可逆；
   如果$a,b\in A$是幂零元并且$ab=ba$，那么$a+b$是幂零元；

2. 证明，如果$ab\in A$是幂零元，那么，$ba$也是幂零元。
   据此，给出$(1-ab)^{-1}$与$(1-ba)^{-1}$之间的联系。
   据此证明，如果$1-ab\in A^{\times}$，那么，$1-ba\in A^\times$。

3. $A$是交换环，$\mathfrak{Nil}(A)=\{a\in A\mid\text{存在 $n\geqslant 1$，使得 $a^n=0$}\}$，
   ${\rm Spec}(A)$是$A$的所有素理想的集合。
   证明，$\mathfrak{Nil}(A)=\displaystyle \bigcap_{\mathfrak{p}\in {\rm Spec}(A)}\mathfrak{p}$。

4. $A$是交换环，${\rm SpecMax}(A)$是其极大理想的集合，
   其**Jacobson根式理想**被定义为
   $J(A)=\displaystyle \bigcap_{\mathfrak{m}\in {\rm SpecMax}(A)}\mathfrak{m}$。
   证明，$a\in J(A)$当且仅当对任意的$b\in A$，$1-ab\in A^\times$。

5. $A$是环，$I$是双边理想。那么，我们有如下的一一对应
   \[
   \big\{\text{$A$ 的左理想 $J\supset I$}\big\} \stackrel{1:1}{\longrightarrow} \big\{\text{${A/I}$ 的左理想}\big\}, \ \  J \mapsto{J/I}.
   \]

6. $A$和$B$是交换环，$\varphi\colon A\rightarrow B$是环同态。
   证明，对任意的理想$J\subset B$，$\varphi^{-1}(J)\subset A$是理想。

7. $A$和$B$是交换环，$\varphi\colon A\rightarrow B$是环同态。
   证明，如果$\mathfrak{q}\subset B$是素理想，$\varphi^{-1}(\mathfrak{q})\subset A$也是素理想。
   进一步利用$\mathbb{Z}\rightarrow \mathbb{Q}$的自然映射说明极大理想的逆像未必是极大的。

8. $A$是（交换）环，$\mathfrak{p}_1,\cdots,\mathfrak{p}_n$是素理想，$I$是理想。
   如果$I\subset \bigcup_{i=1}^n\mathfrak{p}_i$，证明，存在$i_0$，
   使得$I\subset \mathfrak{p}_{i_0}$。

9. $A$是（交换）环，$I_1,\cdots,I_n$是素理想，$\mathfrak{p}$是素理想。
   如果$\bigcap_{i=1}^nI_i\subset \mathfrak{p}$，证明，存在$i_0$，
   使得$I_{i_0}\subset \mathfrak{p}$。
   特别地，如果$\bigcap_{i=1}^nI_i=\mathfrak{p}$，那么，存在$i_0$，使得$I_{i_0}=\mathfrak{p}$。

10. $A$是环，$I$和$J$是理想并且$I$与$J$互素（即$I+J=A$）。
    证明，对任意的$n\geqslant 1$，$I^n$与$J^n$互素。

11. $A$是环（未必交换），
    子集$S\subset A$的中心化子$\mathbf{Z}_S(A)$是$A$中在乘法意义下与$S$
    中所有元素均交换的元素的集合。证明，$\mathbf{Z}_S(A)$是$A$子环。

12. $K$是域，$A=K[X]$是$K$上的多项式环，$V$是$K$-线性空间。
    给定线性映射$T\in {\rm End}_{K}(V)$可以给出$V$上的一个$K[X]$-模的结构：
    \[
    K[X]\times V\rightarrow V, \ \  (P(X), v)\mapsto P(T)v.
    \]
    证明，$V$上的每一个$K[X]$-模的结构都恰好由某个$T\in {\rm End}_{K}(V)$唯一决定。

13. $\mathbb{Z}[X]$是否是唯一分解整环，
    是否是主理想整环？主理想整环的子环是否是主理想整环？唯一分解整环的子环是否是唯一分解整环？

14. $A$是环（未必交换）。
    证明，$\mathbf{M}_n\left(A \right)$的双边理想必然形如$\mathbf{M}_n\left(I\right)$，其中，
    $I\subset A$是双边理想。如果$K$是域，试决定$\mathbf{M}_n\left(K \right)$的所有双边理想。

15. $K$是域，$V$是有限维$K$-线性空间，$\mathbf{End}_K(V)$是$V$上线性变换所定义的环。
    对任意的$V$的$K$-线性子空间$W\subset V$，我们定义
    \[
    {_{_W}}J=\big\{\varphi\in \mathbf{End}_K(V)\bigm| {\rm Ker}(\varphi)\supset W\big\}, \ \ J_{_W}=\big\{\varphi\in \mathbf{End}_K(V)\bigm| {\rm Im}(\varphi)\subset W\big\}.
    \]

    证明，${_{_W}}J$和$J_{_W}$分别是$\mathbf{End}_K(V)$中的左理想和右理想并且都是主理想。
    进一步证明，我们有如下的一一对应：
    \[
    \begin{aligned}
    &\big\{\text{$V$ 的线性子空间}\big\}\stackrel{1:1}{\longrightarrow}\big\{\text{$\mathbf{End}_K(V)$ 中左理想}\big\}, \ \ W\mapsto {_{_W}}J,\\
    &\big\{\text{$V$ 的线性子空间}\big\}\stackrel{1:1}{\longrightarrow}\big\{\text{$\mathbf{End}_K(V)$ 中右理想}\big\}, \ \ W\mapsto J_{_W}.
    \end{aligned}
    \]

16. 环$\mathbf{M}_n\left({\mathbb{Z}/p\mathbb{Z}}\right)$中一共有多少个极大的左理想？当$n=4$时，
    环$\mathbf{M}_4\left({\mathbb{Z}/p\mathbb{Z}}\right)$中一共有多少个左理想？

17. $A$是交换环，$I\subset A$是理想，$M$是$A$-模。
    验证，
    $I\cdot M=\displaystyle \{\sum_{\text{有限和}}a_i\cdot x_i\mid a_i\in I,x_i\in M\}$是$M$的子模。
    证明，${M/(I\cdot M)}$具有${A/I}$ -模的结构。
    特别地，${M/(\mathfrak{m}\cdot M)}$是${A/\mathfrak{m}}$线性空间，其中，
    $\mathfrak{m}$是极大理想。

18. $A$是交换环，$M$是$A$-模，$N\subset M$是子模。证明，我们有如下的一一对应
    \[
    \big\{\text{$N'$ 是 $M$ 的子模且 $N'\supset N$}\big\} \stackrel{1:1}{\longrightarrow} \big\{\text{${M/N}$ 的子模}\big\}, \ \  N' \mapsto{N'/N}.
    \]

19. $A$是交换环，$M',M$和$M''$是$A$-模，假定我们有如下正合列[^6]：
    \[
    0\rightarrow M'\stackrel{\varphi}{\longrightarrow} M\stackrel{\psi}{\longrightarrow}  M''\rightarrow 0.
    \]
    证明，如下三个叙述等价：

    - 作为$A$-模，$M\simeq M'\oplus M''$；

    - 存在$A$-模同态$s\colon M''\rightarrow M$，使得$\psi\circ s={\rm id}_{M''}$；

    - 存在$A$-模同态$p\colon M\rightarrow M'$，使得$p\circ \varphi ={\rm id}_{M'}$。

    以上发生的话，我们就称该正合列是**分裂的**。

20. （五引理）给定$A$-模同态的交换图表：
    \[
    \begin{tikzcd}
    M_1 \arrow[r] \arrow[d, "\psi_1"] &M_2 \arrow[r] \arrow[d, "\psi_2"] & M_3 \arrow[r] \arrow[d, "\psi_3"] &M_4 \arrow[r] \arrow[d, "\psi_4"] &M_5 \arrow[d, "\psi_5"]\\
    N_1 \arrow[r]  &N_2 \arrow[r]  & N_3 \arrow[r] &N_4 \arrow[r] &N_5\end{tikzcd}
    \]
    假设上下两行都是正合列。

    - $\psi_1$是满射，$\psi_2,\psi_4$是单射。证明，$\psi_3$是单射。

    - $\psi_5$是单射，$\psi_2,\psi_4$是满射。证明，$\psi_3$是满射。

    特别地，如果$\psi_1,\psi_2,\psi_4,\psi_5$是同构，那么，$\psi_3$也是同构。

21. $A$是交换环，$M,M'$和$N$是$A$-模，试描述${\rm Hom}_{A}(M,N)$上自然的$A$-模结构。
    给定$A$-模同态$\varphi\colon M'\rightarrow M$。证明，如下映射
    \[
    \widehat{\varphi}\colon{\rm Hom}_{A}(M,N)\rightarrow {\rm Hom}_{A}(M',N), \ \ f\mapsto f\circ \varphi,
    \]
    和
    \[
    \widehat{\varphi}\colon{\rm Hom}_{A}(N,M')\rightarrow {\rm Hom}_{A}(N,M), \ \ g\mapsto \varphi\circ g,
    \]
    是$A$-模同态。
    进一步证明所谓的${\rm Hom}_{A}(\cdot,\cdot)$的左正合性：

    - 给定$A$-模的正合列
      \[
      0\rightarrow M'\stackrel{\varphi}{\longrightarrow} M\stackrel{\psi}{\longrightarrow}  M'',
      \]
      我们有如下$A$-模的正合列
      \[
      0\rightarrow {\rm Hom}_{A}(N,M')\stackrel{\widehat{\varphi}}{\longrightarrow} {\rm Hom}_{A}(N,M)\stackrel{\widehat{\psi}}{\longrightarrow}  {\rm Hom}_{A}(N,M'').
      \]

    - 给定$A$-模的正合列
      \[
      M'\stackrel{\varphi}{\longrightarrow} M\stackrel{\psi}{\longrightarrow}  M''\rightarrow 0,
      \]
      我们有如下$A$-模的正合列
      \[
      0\rightarrow {\rm Hom}_{A}(M'',N)\stackrel{\widehat{\psi}}{\longrightarrow} {\rm Hom}_{A}(M,N)\stackrel{\widehat{\varphi}}{\longrightarrow}  {\rm Hom}_{A}(M',N).
      \]

22. $A$是整环，$M$是$A$-模，对于$x\in M$，如果存在$a\in A-\{0\}$，使得$a\cdot x=0$，
    我们就称$x$是**挠元素**。证明，挠元素的全体$T(M)$是$M$的子模。
    给定$A$-模同态$\varphi\colon M\rightarrow N$，证明，
    有自然的$A$-模同态$T(\varphi)\colon T(M)\rightarrow T(N)$。

    - 给定$A$-模的正合列
      \[
      0\rightarrow M'\stackrel{\varphi}{\longrightarrow} M\stackrel{\psi}{\longrightarrow}  M'',
      \]
      证明，我们有如下$A$-模的正合列
      \[
      0\rightarrow T(M')\stackrel{ T(\varphi)}{\longrightarrow}  T(M)\stackrel{ T(\psi)}{\longrightarrow}   T(M'').
      \]

    - 试构造$A$-模的满同态$M\stackrel{\psi}{\twoheadrightarrow}  M''$，
      使得$T(\psi)\colon T(M)\rightarrow T(M'')$不是满射。

[^1]: 请查阅图表交换的含义。
[^2]: 实际上，通过研究$2\cdot 2=(1+\sqrt{-3})(1-\sqrt{-3})$，
  我们知道$\mathbb{Z}[\sqrt{-3}]$不是唯一分解整环。
[^3]: 实际上，通过研究$-2\cdot 2=\sqrt{-4}\cdot \sqrt{-4}$，
  我们知道$\mathbb{Z}[\sqrt{-4}]$不是唯一分解整环。
[^4]: 按定义，对于$z=x+y\sqrt{d}$，$\overline{z}=x-y\sqrt{d}$，这未必是复共轭。
[^5]: 即存在$n\geqslant 1$，使得$a^n=0$。
[^6]: 这里指的是$\varphi\colon M'\rightarrow M$是单的$A$-模同态，
  $\psi\colon M\rightarrow M''$是满的$A$-模同态并且${\rm Ker}(\psi)={\rm Im}(\varphi)$。
  更一般地，所谓的$A$-模的正合列
  \[
  M_1\stackrel{\varphi_1}{\longrightarrow} M_2\stackrel{\varphi_2}{\longrightarrow}\cdots \stackrel{\varphi_{n-2}}{\longrightarrow}M_{n-1}\stackrel{\varphi_{n-1}}{\longrightarrow} M_n
  \]
  指的是$\varphi_j\colon M_j\rightarrow M_{j+1}$是$A$-模同态并且
  ${\rm Im}(\varphi_k)={\rm Ker}(\varphi_{k+1})$，其中，$j=1,2,\cdots,n-1$而$k=1,2,\cdots,n-2$。
  我们还经常省略掉映射而把正合列写成
  \[
  M_1 \longrightarrow  M_2 \longrightarrow \cdots \longrightarrow M_{n-1} \longrightarrow M_n.
  \]
