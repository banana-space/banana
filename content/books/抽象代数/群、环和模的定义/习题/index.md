---
title: 习题
---

## 乘积结构 {@section:product}

1. $(G_1,\cdot_{_1})$和$(G_2,\cdot_{_2})$是群，在$G_1\times G_2$上如下定义乘法：
   \[
   (g_1,g_2)\cdot(g'_1,g'_2):=\big(g_1\cdot_{_1}g'_1,g_2\cdot_{_2}g'_2\big).
   \]
   证明，在以上乘法下，$G_1\times G_2$是群并且其单位元为$(1_{_1},1_{_2})$。
   这个群被称为$G_1$与$G_2$的**乘积**。

2. {@item:group-product-hom} 证明，投影映射
   \[
   \pi_1\colon G_1\times G_2\rightarrow G_1, \ \ (g_1,g_2)\mapsto g_1,
   \]
   和
   \[
   \pi_2\colon G_1\times G_2\rightarrow G_2, \ \ (g_1,g_2)\mapsto g_2,
   \]
   是群同态。它们的核是什么？

3. {@item:group-product-universal} （泛性质）给定群$(G_1,\cdot_{_1})$和$(G_2,\cdot_{_2})$。
   证明，
   存在唯一的[^1]群$G$以及唯一的群同态$p_i\colon G\rightarrow G_i$（$i=1,2$）使得对任意的群$H$
   和任意的群同态$\varphi_i\colon H\rightarrow G_i$（$i=1,2$），
   存在唯一的$\psi\colon H\rightarrow G$，使得$p_i\circ \psi=\varphi_i$（$i=1,2$）。

    \[
    \begin{tikzcd}
      & & H \arrow[d, "\psi",dashed] \arrow[ddll, "\varphi_1",swap] \arrow[ddrr, "\varphi_2"]  &   & \\
     & & G\arrow[dll, "p_1" ]  \arrow[drr, "p_2", swap]&   & \\
    G_1 &  & & & G_2
      \end{tikzcd}
    \]
    特别地，我们有如下的集合之间的同构：
    \[
    {\rm Hom}(H,G_1\times G_2)\simeq {\rm Hom}(H,G_1)\times {\rm Hom}(H,G_2), \ \ \psi\mapsto \big(p_1\circ \psi,p_2\circ \psi \big).
    \]
   （提示：利用 [第 2 题](@item:group-product-hom) 给出$G$的存在性；
   利用$\psi$的唯一性证明$G$的唯一性）

4. 给定互素的正整数$n_1$和$n_2$。利用 [第 3 题](@item:group-product-universal) 证明，
   \[
     {\mathbb{Z}/n_1n_2\mathbb{Z}}
   \rightarrow
     {\mathbb{Z}/n_i\mathbb{Z}}
   , \ \ \overline{k}\mapsto k \ ({\rm mod}~n_i), \ \ \ i=1,2,
   \]
   给出了群同构
   \[
     {\mathbb{Z}/n_1n_2\mathbb{Z}}
   \stackrel{\simeq}{\longrightarrow}
     {\mathbb{Z}/n_1\mathbb{Z}}
   \times
     {\mathbb{Z}/n_2\mathbb{Z}}
   .
   \]
   以上，$
  {\mathbb{Z}/n\mathbb{Z}}
$表示的是（加法）循环群。

5. $C_1$和$C_2$是两个有限阶的循环群，那么，$C_1\times C_2$是否是循环群？

6. $(A_1,+_{_1},\cdot_{_1})$和$(A_2,+_{_2},\cdot_{_2})$是环。
   我们在$A_1\times A_2$上如下定义加法$+$和乘法$\cdot$：
   \[
   (a_1,a_2)+(a'_1,a'_2):=\big(a_1+_{_1}a'_1,a_2+_{_2}a'_2\big), \ \ (a_1,a_2)\cdot(a'_1,a'_2):=\big(a_1\cdot_{_1}a'_1,a_2\cdot_{_2}a'_2\big).
   \]
   证明，选取加法单位元$(0_{_1},0_{_2})$和乘法单位元$(1_{_1},1_{_2})$，
   $A_1\times A_2$在以上运算下是环。我们把这个环称作是$A_1$与$A_2$的**乘积**。进一步证明，投影映射
   \[
   \pi_1\colon A_1\times A_2\rightarrow A_1, \ \ (a_1,a_2)\mapsto a_1,
   \]
   和
   \[
   \pi_2\colon A_1\times A_2\rightarrow A_2, \ \ (a_1,a_2)\mapsto a_2,
   \]
   是环同态。

7. （泛性质）给定环$A_1$和$A_2$。
   证明，
   存在唯一的[^2]环$A$以及唯一的环同态$p_i\colon A\rightarrow A_i$（$i=1,2$）使得对任意的环$B$
   和任意的环同态$\varphi_i\colon B\rightarrow A_i$（$i=1,2$），
   存在唯一的$\psi\colon B\rightarrow A$，使得$p_i\circ \psi=\varphi_i$（$i=1,2$）。

   \[
   \begin{tikzcd}
     & & B \arrow[d, "\psi",dashed] \arrow[ddll, "\varphi_1",swap] \arrow[ddrr, "\varphi_2"]  &   & \\
    & & A\arrow[dll, "p_1" ]  \arrow[drr, "p_2", swap]&   & \\
   A_1 &  & & & A_2
     \end{tikzcd}
   \]

8. 给定互素的正整数$m$和$n$。证明，我们有**环同构**[^3]
   \[
     {\mathbb{Z}/mn\mathbb{Z}}
   \stackrel{\simeq}{\longrightarrow}
     {\mathbb{Z}/m\mathbb{Z}}
   \times
     {\mathbb{Z}/n\mathbb{Z}}
   .
   \]
   （提示：使用中国剩余定理）

9. $A$和$B$是环，$A^\times$和$B^\times$是它们的乘法可逆元所构成的（乘法）群。证明，我们有群同构
   \[
   (A \times_{_{\rm ring}} B)^\times\simeq A^\times\times_{_{\rm group}}B^\times,
   \]
   其中，$\times_{_{\rm ring}}$代表着环的乘积，$\times_{_{\rm group}}$代表着群的乘积。

## 域的有限乘法子群是循环群 {@sec:premitive-roots}

给定正整数$n$，Euler的$\phi$-函数给出$1,\cdots,n$中与$n$互素的数的个数：
\[
\phi(n)=\big|\big\{1\leqslant k\leqslant n\big| (k,n)=1\big\}\big|.
\]

1. 证明，$\left|\left(
  {\mathbb{Z}/n\mathbb{Z}}
\right)^\times\right|=\phi(n)$，其中，$\left(
  {\mathbb{Z}/n\mathbb{Z}}
\right)^\times$是环$
  {\mathbb{Z}/n\mathbb{Z}}
$的可逆元组成的（乘法）子群。

2. 证明，$\phi$具有如下乘性：对任意互素的正整数$n$和$m$，有
   \[
   \phi(nm)=\phi(n)\phi(m).
   \]
   进一步，如果$n=p_1^{\alpha_1}\cdots p_k^{\alpha_k}$是它的素因子分解，其中，
   $p_i$为不同的素数而指标$\alpha_i$均为正整数，证明：
   \[
   \phi(n)=n(1-\frac{1}{p_1})(1-\frac{1}{p_2})\cdots(1-\frac{1}{p_k}).
   \]

3. 证明，对任意正整数$n$，对任意与$n$互素的整数$a$，有$a^{\phi(n)}\equiv 1 \ ({\rm mod}~n)$。
   特别地，当$p$为素数时，这给出了Fermat小定理。

4. （有限循环群子群的分类）证明，作为加法群，对每个$n$的因子$d$，$
  {\mathbb{Z}/n\mathbb{Z}}
$恰有一个阶为$d$的循环子群$C_d$。进一步，$
  {\mathbb{Z}/n\mathbb{Z}}
$的每个子群均形如$C_d$，其中，$d|n$。

5. 证明，对任意的正整数$n$，我们有公式
   \[
   n=\sum_{d|n}\phi(d).
   \]

6. $K$是域，$G<K^\times$是有限群，$|G|=n$。对任意的$d|n$，令$G_d$为$G$中阶为$d$的元素组成的集合。
   证明，
   \[
   n=\sum_{d|n,G_d\neq \emptyset}\phi(d).
   \]

7. 证明，$G$是循环群。

8. 证明，$\left(
  {\mathbb{Z}/p\mathbb{Z}}
\right)^\times$是循环群，其中，$p$是素数。

9. 对于奇素数$p$和$m\geqslant 2$，我们证明$\left(
  {\mathbb{Z}/p^m\mathbb{Z}}
\right)^\times$是循环群：

   - 证明，$(1+p)^{p^k}\equiv 1+ p^{k+1} \mod p^{k+2}$，其中$k\geqslant 0$。
     据此证明$\overline{p+1}\in \left(
  {\mathbb{Z}/p^m\mathbb{Z}}
\right)^\times$的阶为$p^{m-1}$。

   - 证明，存在$\overline{k}\in \left(
  {\mathbb{Z}/p^m\mathbb{Z}}
\right)^\times$，其阶为$p-1$。

   - 证明，存在$\overline{l}\in \left(
  {\mathbb{Z}/p^m\mathbb{Z}}
\right)^\times$，使得$\langle \overline{l}\rangle =\left(
  {\mathbb{Z}/p^m\mathbb{Z}}
\right)^\times$。

10. 对于$m\geqslant 2$，我们给出$\left(
  {\mathbb{Z}/2^m\mathbb{Z}}
\right)^\times$的结构：

    - 证明，$(1+2^2)^{2^k}\equiv 1+ 2^{k+2} \mod 2^{k+3}$，其中$k\geqslant 0$。
      据此证明，$\overline{5}\in \left(
  {\mathbb{Z}/2^m\mathbb{Z}}
\right)^\times$的阶为$2^{m-2}$。

    - 证明，映射（以下左边是加法群，右边是乘法群）
      \[
        {\mathbb{Z}/2\mathbb{Z}}
      \times
        {\mathbb{Z}/2^{m-2}\mathbb{Z}}
      \longrightarrow\left(
        {\mathbb{Z}/2^m\mathbb{Z}}
      \right)^\times,\ \  (a,b)\mapsto (-1)^a5^b \mod 2^m.
      \]
      是群同构。

11. （Gauss）证明，对任意正整数$n$，$\left(
  {\mathbb{Z}/n\mathbb{Z}}
\right)^\times$是循环群当且仅当$n$形如$1,2,4, p^m$或$2p^m$，其中，$m\geqslant 1$而$p$为奇素数。此时，$\left(
  {\mathbb{Z}/n\mathbb{Z}}
\right)^\times$的每个生成元$\overline{l}$都被称为$n$的**原根**。

## 线性群中元素的阶的几个命题

1. 令$\mathbf{M}_n(\mathbb{Z})$为整系数的$n\times n$矩阵的集合，令
   \[
   \mathbf{GL}(n;\mathbb{Z})=\big\{A\in \mathbf{M}_n(\mathbb{Z})\big|~A~\text{可逆并且}~A^{-1}\in \mathbf{M}_n(\mathbb{Z})\big\}.
   \]

   - 证明，$\mathbf{GL}(n;\mathbb{Z})=\big\{A\in \mathbf{M}_n(\mathbb{Z})\big|\det(A)=\pm 1\big\}$。

   - 如果$A\in \mathbf{GL}(2;\mathbb{Z})$的阶有限，证明，${\rm ord}(A)\in \{1,2,3,4,6\}$。

   - 证明，存在只依赖于$n$的常数$C_n$，若$A\in \mathbf{GL}(n;\mathbb{Z})$的阶有限，
     则$\big|{\rm ord}(A)\big|\leqslant C_n$。

2. $p$是素数，$q$是$p$的幂，域$\mathbb{F}_q$有$q$个元素。
   我们已知$\mathbf{GL}(n;\mathbb{F}_q)$共有$\displaystyle \prod_{k=0}^{n-1}(q^n-q^k)$个元素。

   - 对任意的$A\in \mathbf{GL}(n;\mathbb{F}_q)$，证明，
     集合$\big\{P(A)\big| P\in \mathbb{F}_q[X]\big\}$至多有$q^n$个元素。
     以上，对于$P(X)=\displaystyle\sum_{k=0}^n a_k X^k$，其中，$a_k\in \mathbb{F}_q$，
     我们定义$P(A)=\displaystyle\sum_{k=0}^n a_k\cdot A^k$。

   - 证明，对任意的$A\in \mathbf{GL}(n;\mathbb{F}_q)$，${\rm ord}(A)\leqslant q^n-1$。

   - 给定如下的结论：存在$K=\mathbb{F}_q$的域扩张$L=\mathbb{F}_{q^n}$，使得$[L:K]=n$。
     证明，存在$A\in \mathbf{GL}(n;\mathbb{F}_q)$，${\rm ord}(A)=q^n-1$。

   所以，$\mathbf{GL}(n;\mathbb{F}_q)$中元素的阶的最大值恰好是$q^n-1$。

## 有限群乘积的消去定理

在练习题部分，我们将证明如下的**子群对应定理**：$\varphi\colon G\twoheadrightarrow G'$是满的群同态，
我们有如下双射：
\[
\big\{H\big|H<G, H\supset {\rm Ker}(\varphi)\big\}\stackrel{1:1}{\longrightarrow} \big\{H'\big| H'<G'\big\}, \ \ H\mapsto \varphi(H).
\]
进一步，假设以上对应把$H$映射成$H'$，那么，$H$是$G$的正规子群当且仅当$H'$是$G'$的正规子群。

这个定理可以用来研究有限群乘积的消去定理。

给定有限群$G,G'$，以下两个数值是非负整数：
\[
M\big(G,G'\big)=|{\rm Hom}(G,G')|, \ \ I\big(G,G'\big)=\left|\big\{\varphi\in {\rm Hom}(G,G')\big| \varphi ~\text{为单射}\big\}\right|.
\]

1. 证明如下等式，其中，以下是对所有$G$的正规子群$H$来求和：
   \[
   M\big(G,G'\big)=\sum_{H\lhd G} I\left(
     {G/H}
   ,G'\right)
   \]

2. 证明，对每个$G$的正规子群$H$存在整数$\lambda_H$，使得
   \[
   I\big(G,G'\big)=\sum_{H\lhd G} \lambda_H\cdot M\left(
     {G/H}
   ,G'\right).
   \]
   特别地，以上等式中的系数$\big\{\lambda_H \big|H\lhd G\big\}$不依赖于$G'$。

3. 假设$G_1,G_2,G'$是有限群并且$G_1\times G'\simeq G_2\times G'$。
   证明，$I\big(G_1,G'\big)=I\big(G_2,G'\big)$。

4. （消去定理）证明，若$G_1,G_2,G'$是有限群并且$G_1\times G'\simeq G_2\times G'$，
   则$G_1\simeq G_2$。

5. 令$G_1$和$G_2$为有限维$\mathbb{F}_2$-线性空间，
   $G'$为$\mathbb{F}_2$-线性空间且其基有可数无限个元素。证明，$G_1\times G'\simeq G_2\times G'$。
   特别地，这一组$G_1,G_2,G'$不满足消去定理。

## 练习题 {@section:group-exer}

1. $G$是群，$H\subset G$是有限子集并且对乘法封闭[^4]。证明，$H$是子群。

2. 假设$\{G_i\}_{i\in I}$是$G$的一族正规子群，那么，$\bigcap_{i\in I}G_i$也是正规子群。

3. 有限集$G$上定义了满足结合律的乘法$G\times G\rightarrow G,  \ \ (g_1,g_2)\mapsto g_1\cdot g_2$。
   假设以下两点成立：

   - 对任意的$g,x,y\in G$，有 $g\cdot x=g\cdot y \ \ \Rightarrow \ \ x =y$；

   - 对任意的$g,x,y\in G$，有 $x\cdot g=y\cdot g \ \ \Rightarrow \ \ x =y$。

   证明，$G$在此乘法下是群。

4. 试给出所有（在同构意义下）阶数不超过$5$的群。

5. $G$是群，$H<G$是子群并且$[G:H]=2$。证明，$H\lhd G$是正规子群。
   如果$[G:H]=n$，其中，$n\geqslant 3$，结论是否成立？

6. $G$是群，$H<G$是子群并且$[G:H]=n$。
   证明，如果$H$是唯一的指标为$n$的子群，那么$H\lhd G$是正规子群。

7. （循环群的分类）$G$是循环群。证明，或$G\simeq \mathbb{Z}$，或有正整数$n$使得$G\simeq
  {\mathbb{Z}/n\mathbb{Z}}
$，二者必居其一。

8. $G$是$mn$阶的交换群，其中，$m,n$为互素。
   如果存在$g,h\in G$，使得其阶分别为$m$和$n$，证明，$G$为循环群。

9. $G$是群并且它只有有限个子群。证明，$G$是有限群。

10. $G$是群。对任意的$g\in G$，共轭映射${\rm Int}(g)$的定义如下：
    \[
    {\rm Int}(g)\colon G\rightarrow G, \ \ h \mapsto {\rm Int}(g)(h)=ghg^{-1}.
    \]
    证明，以上映射给出群同态：
    \[
    G\rightarrow {\rm Aut}(G), \ \ g\mapsto {\rm Int}(g).
    \]
    并且${\rm Ker}({\rm Int})={\rm Z}(G)$而${\rm Im}({\rm Int})\lhd {\rm Aut}(G)$是正规子群。

11. 试在二面体群$\mathfrak{D}_4$中找到两个子群$K<H<\mathfrak{D}_4$，使得$K\lhd H$，
    $H\lhd \mathfrak{D}_4$，但是$K$不是$\mathfrak{D}_4$的正规子群？这表明正规子群的关系并不传递。

12. $G$是群，$K$和$H$为其子群并且$K\lhd H$，$H\lhd G$。证明，如果$H$是循环群，那么$K\lhd G$。

13. （四元数群）令$\mathbf{Q}_8=\{\pm 1,\pm i, \pm j, \pm k\}$，一共有$8$个元素。
    定义$1$为单位元；对任意的$\pm x\in \mathbf{Q}_8$，
    令$(-1)\cdot (\pm x)=(\pm x)\cdot (-1)=\mp x$；定义乘法：
    \[
    i\cdot j=-j\cdot i= k,\ j\cdot k = - k\cdot j = i, \ k\cdot i = -i\cdot k=j, \ i^2=j^2=k^2=-1.
    \]
    证明，以上给出群结构。试找出它所有的子群并证明这些子群都是正规子群。
    $\mathbf{Q}_8$与二面体群$\mathfrak{D}_4$是否同构？

14. （Cayley定理：每个（有限）群都同构于（有限）对称群的子群）$G$是群。令$X=G$，定义映射：
    \[
    \varphi\colon G\rightarrow \mathfrak{S}_X, \ \ g\mapsto \varphi(g)\colon  x\mapsto g\cdot_{_G} x, \ \ \forall x\in X.
    \]
    证明，$\varphi$是单的群同态（从而，$G\simeq {\rm Im}(\varphi)$）。

15. 证明，$
  {\mathbb{Q}/\mathbb{Z}}
$是无限群但是每个元素的阶都是有限的。

16. $G$是群，定义映射
    \[
    {\rm Inv}\colon G\rightarrow G, \  g\mapsto g^{-1}.
    \]
    证明，$G$是交换群当且仅当${\rm Inv}$是群同态。

17. $G$是群，如果对任意的$g\in G$，$g^2=1$，证明，$G$是交换群。

18. $
  {\mathbb{Z}/p\mathbb{Z}}
$是$p$-阶加法循环群，其中，$p$是素数。证明，${\rm Aut}\big(
  {\mathbb{Z}/p\mathbb{Z}}
\big)$是循环群。如果把$p$替换成$6$或者$8$，结论是否成立？

19. $G$是群，$H,K$为其子群。我们定义$H\cdot K =\{h\cdot k| h\in H, k\in K\}$。
    证明，$H\cdot K$为子群当且仅当$H\cdot K=K\cdot H$。

20. $G$是群，$H,K$为其有限子群。证明，
    \[
    |H\cdot K|=\frac{|H||K|}{|H\cap K|}.
    \]

21. $G$是群，$H,K$为其子群。证明，$H\cap K<H$并且
    \[
    [H:H\cap K]\leqslant [G:K].
    \]
    假设$[G:K]$有限，进一步证明以上等号成立当且仅当$G=K\cdot H$。

22. $G$是群，$H,K$为其有限指标的子群。证明，
    \[
    [G:H\cap K]\leqslant [G:H][G:K].
    \]
    并且等号成立当且仅当$G=K\cdot H$。

23. $\varphi\colon G\rightarrow A$是群同态，$A$是交换群。
    证明，$G$中任意的包含${\rm Ker}(\varphi)$的子群都是正规子群。

24. 证明，${\rm Z}(\mathfrak{S}_n)=1$，其中，$n\neq 2$。

25. 试找出二面体群$\mathfrak{D}_n$的所有正规子群，
    计算${\rm Z}(\mathfrak{D}_n)$并找出$\mathfrak{D}_n$的所有共轭类。

26. 四元数群$\mathbf{Q}_8$有多少共轭类？（参考第一次作业练习题13）

27. $\mathfrak{S}_4$中有多少个子群同构于$\mathfrak{S}_3$，有多少个子群同构于$\mathfrak{S}_2$？

28. $\mathfrak{A}_4$中是否有$6$阶子群？

29. $G$是群，$H<G$是子群。证明，$H$是正规子群当且仅当$H$的每个左陪集都是右陪集。

30. （第二同构定理）$G$是群，$K<G$，$N\lhd G$。证明，$N\cap K\lhd K$并且有自然的群同构：
    \[
      {K/(N\cap K)}
    \stackrel{\simeq}{\longrightarrow}
      {NK/N}
    .
    \]

31. （第三同构定理）$G$是群，$K\lhd G$，$H\lhd G$并且$K<H$。证明，$
  {H/K}
\lhd
  {G/K}
$并且有自然的群同构：
    \[
      {\small \left({G/K}\right)/\small \left({H/K}\right)}
    \stackrel{\simeq}{\longrightarrow}
      {G/H}
    .
    \]

32. （子群对应定理）$\varphi\colon G\twoheadrightarrow G'$是满的群同态，我们有如下双射：
    \[
    \big\{H\big|H<G, H\supset {\rm Ker}(\varphi)\big\}\stackrel{1:1}{\longrightarrow} \big\{H'\big| H'<G'\big\}, \ \ H\mapsto \varphi(H).
    \]
    进一步，假设以上对应把$H$映射成$H'$，那么，$H$是$G$的正规子群当且仅当$H'$是$G'$的正规子群。

    假设$N\lhd G$是正规子群，对$G\rightarrow
  {G/N}
$使用子群对应定理，你得到什么结论？

33. $G_i$是群，$N_i\lhd G_i$是正规子群，其中，$i=1,2$。
    证明，$N_1\times N_2$是$G_1\times G_2$的正规子群并且有同构
    \[
      {G_1/N_1}
    \times
      {G_2/N_2}
     \stackrel{\simeq}{\longrightarrow}
      {(G_1\times G_2)/(N_1\times N_2)}
    .
    \]

34. （半直积：初见）$G$是群，$K\lhd G$，$H\lhd G$，$K\cap H=1$并且$\langle K\cup H\rangle=G$。
    证明，$
  {G/K}
\simeq H$。

35. 请给出$8$阶群（在同构意义下）的清单。

[^1]: 在同构的意义下
[^2]: 在同构的意义下
[^3]: 请与第四问对比
[^4]: 即对任意的$h_1,h_2\in H$，$h_1\cdot h_2\in H$。
