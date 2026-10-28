---
title: '$\bmod p$ 的理论'
---

<problems>
- “代数整数环的有限性”一节中“有限性”命题的证明里，$L=\big(A^\times\big)^{-1}B$ 中的 $A^\times$ 似乎应为 $A$ 的非零元之集 $A-\{0\}$。
</problems>

## 代数整数环的有限性

我们现在利用第 @sec:integral-extension 节关于整扩张的概念来研究$\!\!\!\mod p$约化的理论。
我们回忆以下关于整扩张的图像：
\[
\begin{tikzcd}
B \arrow[d,  dash,dashed] \arrow[r, dash,dashed]   &L \arrow[d,  dash]\\
A  \arrow[r, dash]   &K\\
 \end{tikzcd}
\]
$A$是整环，$K={\rm Frak}(A)$为其分式域，$
  {L/K}
$为代数扩张，$B$为$A$在$L$中的整闭包。

::: remark
根据 @prop:min-poly-is-integral，对任意的$x\in B$，其极小多项式$P(X)\in A[X]$。我们回忆${\rm Tr}_{_{
  {L/K}
}}$和${\rm N}_{_{
  {L/K}
}}$的定义[^1]。给定$x\in L$，对乘法定义的线性映射：
\[
m_x\colon L\longrightarrow L,  \ \ y\mapsto x\cdot y.
\]
其迹、行列式和特征多项式给出了${\rm Tr}_{_{
  {L/K}
}}$和${\rm N}_{_{
  {L/K}
}}$：
\[
{\rm Tr}_{_{
  {L/K}
}}(x)={\rm Tr}(m_x), \ {\rm N}_{_{
  {L/K}
}}(x)=\det(m_x), \ \ P_{_{
  {L/K}
},x}(X)=\det(X\cdot I-m_x).
\]
其中，
\[
P_{_{
  {L/K}
},x}(X)=P(X)^{[L:K(x)]}.
\]
从而，$P_{_{
  {L/K}
},x}(X)\in A[X]$。特别地，${\rm Tr}_{_{
  {L/K}
}}(x),{\rm N}_{_{
  {L/K}
}}(x)\in A$。
:::

::: proposition [有限性]
假设$A$是整闭的Noether环，$K={\rm Frak}(A)$，$
  {L/K}
$为有限可分扩张，$B$为$A$在$L$中的整闭包。那么，$B$是有限生成的$A$-模。

特别地，若$A$是主理想整环，则$B$是自由$A$-模且其秩为$[L:K]$。
:::

::: proof
作为$K$-线性空间，我们可以选取$L$的一组基$\{x_1,\cdots,x_n\}$，使得$\{x_1,\cdots,x_n\}\subset B$。
这是因为$L=\big(A^\times\big)^{-1}B$。
\[
\begin{tikzcd}
B'=\oplus_{j=1}^n Ay_j \arrow[d,  dash, dashed] \arrow[rd, "\subset",dash,dashed]   &\\
B \arrow[d,  dash,dashed] \arrow[r, dash,dashed]   & L \arrow[d,  dash]\\
A  \arrow[r, dash]   &K
 \end{tikzcd}
\]
由于$
  {L/K}
$可分，非退化的双线性型
\[
L\times L \longrightarrow K, \ \ (x,y)\mapsto {\rm Tr}_{_{
  {L/K}
}}(x\cdot y),
\]
给出$K$-线性空间的同构：
\[
L \longrightarrow  L^*, \ \ x\mapsto  \big(y\mapsto {\rm Tr}_{_{
  {L/K}
}}(x\cdot y)\big).
\]
据此，选取$\{y_i\}_{1\leqslant i\leqslant n}\subset L$为$\{x_1,\cdots,x_n\}$的对偶基，即
\[
{\rm Tr}_{_{
  {L/K}
}}(x_i\cdot y_j)=\delta_{i}^j,  \ \ 1\leqslant i, j\leqslant n.
\]
定义$B$的对偶模：
\[
B'=\{x\in L\mid {\rm Tr}_{_{
  {L/K}
}}(x\cdot x_j)\in A, 1\leqslant j\leqslant n\}.
\]
这显然是$A$-模并且$B\subset B'$。另外，对任意的$x\in B'$，我们有
\[
x=\sum_{j=1}^n{\rm Tr}_{_{
  {L/K}
}}(x\cdot x_j) y_j.
\]
这表明$B'$是有限生成的$A$-模，其中$\{y_i\}_{1\leqslant i\leqslant n}$是生成元。
由于$A$是Noether环，所以$B'$是Noether模，进而其子模$B$是有限生成的。

若$A$是主理想整环，由于$B\subset L$是无挠的，主理想整环上有限生成模的分类定理表明$B$是自由$A$-模。
再令$B'':=\oplus_{i=1}^n Ax_i$，则
\[
B''\subset B\subset B'.
\]
由于$B''$和$B'$都是秩为$[L:K]$的自由模，所以$B$也是。
:::

::: remark [数域的扩张]
考虑${\mathbb{Q}}$的有限扩张$K$，令$\mathcal{O}_K$为$K$的整数环；$L$为$K$的有限扩张，
$\mathcal{O}_L$为$\mathcal{O}_K$在$L$中的整闭包。
从而，$\mathcal{O}_L$也是${\mathbb{Z}}$在$L$中的整闭包，
即$\mathcal{O}_L$为$L$所对应的**代数整数环**。
\[
\begin{tikzcd}
\mathcal{O}_L \arrow[d,  dash,dashed] \arrow[r, dash,dashed]   &L \arrow[d,  dash]  \\
\mathcal{O}_K \arrow[d,  dash,dashed] \arrow[r, dash,dashed]   &K\arrow[d,  dash] \\
{\mathbb{Z}}  \arrow[r, dash]   &{\mathbb{Q}}   \end{tikzcd}
\]
根据以上命题，$\mathcal{O}_L$是秩为$[L:{\mathbb{Q}}]$的自由交换群。
:::

::: example [${\mathbb{Q}}(e^{\frac{2\pi i}{p}})$的整数环，$p$是素数]
令$\xi=e^{\frac{2\pi i}{p}}$，$L={\mathbb{Q}}(e^{\frac{2\pi i}{p}})$，
$\xi$在${\mathbb{Q}}$上的极小多项式为
\[
X^{p-1}+\cdots+X+1.
\]
特别地，
$\xi \in \mathcal{O}_L$并且
$\displaystyle\bigoplus_{j=0}^{p-2}{\mathbb{Z}}\cdot \xi^j\subset \mathcal{O}_L$。

容易看出，
\[
{\rm Tr}_{_{
  {L/{\mathbb{Q}}}
}}(\xi^k)=\begin{cases}
p,\ \ &k=0;\\
-1,\ \ &1\leqslant k\leqslant p-1.\\
\end{cases}
\]
我们现在证明
\[
{\rm N}_{_{
  {L/{\mathbb{Q}}}
}}(1-\xi)=(-1)^{p-1}p.
\]
我们可以利用$1,\xi,\cdots,\xi^{p-2}$为$
  {L/{\mathbb{Q}}}
$的基对$m_{\xi}$所对应的矩阵直接计算行列式；也可以对$1-\xi$在Galois群作用下的像取乘积。根据
\[
P(X)=X^{p-1}+\cdots+X+1=\frac{X^p-1}{X-1},
\]
我们考虑
\[
Q(X)= P(X+1)=\frac{(X+1)^p-1}{X}=X^{p-1}+\cdots+p.
\]
那么，$\xi-1$是$Q(X)$的根，从而，
\[
{\rm N}_{_{
  {L/{\mathbb{Q}}}
}}(\xi-1)=\prod_{\sigma\in \mathbf{Gal}(
  {L/{\mathbb{Q}}}
)}\sigma(\xi-1)=p.
\]
特别地，上述计算给出
\[
{\rm N}_{_{
  {L/{\mathbb{Q}}}
}}(\xi-1)=(-1)^{p-1}\prod_{k=1}^{p-1}(1-\xi^k)=(-1)^{p-1}p.
\]
从而，
\[
p=\prod_{k=1}^{p-1} (1-\xi^k).
\]
特别地，$p\in \mathcal{O}_L\cdot (1-\xi)$，其中，
$\mathcal{O}_L\cdot (1-\xi)$是$\mathcal{O}_L$的主理想。
由于$1-\xi\notin \mathcal{O}_L^\times$，所以，
$\mathcal{O}_L\cdot (1-\xi)\cap {\mathbb{Z}}=p{\mathbb{Z}}$（因为$\mathcal{O}_L\cdot (1-\xi)$
要包含在某个素理想$\mathfrak{p}$中而$\mathfrak{p}\cap {\mathbb{Z}}$是${\mathbb{Z}}$
中的素理想并且包含$p$）。

令$x\in \mathcal{O}_L$，那么，对任意的$\sigma\in \mathbf{Gal}(
  {L/{\mathbb{Q}}}
)$，$\sigma(x)\in  \mathcal{O}_L$（它们满足同一个首一整系数多项式）。从而，
\[
\sigma(x\cdot (1-\xi))=\sigma(x)\cdot (1-\xi^{k_\sigma}) =\sigma(x)\cdot (1+\xi+\cdots+\xi^{k_\sigma-1})(1-\xi)\in \mathcal{O}_L\cdot(1-\xi).
\]
据此，
\[
{\rm Tr}_{_{
  {L/{\mathbb{Q}}}
}}\big(x\cdot (1-\xi)\big)=\sum_{\sigma \in \mathbf{Gal}(
  {L/{\mathbb{Q}}}
)}\sigma(x\cdot (1-\xi))\in \mathcal{O}_L\cdot(1-\xi).
\]
另一方面，${\rm Tr}_{_{
  {L/{\mathbb{Q}}}
}}\big(x\cdot (1-\xi)\big)\in {\mathbb{Z}}$。从而，
\[
{\rm Tr}_{_{
  {L/{\mathbb{Q}}}
}}\big(x\cdot (1-\xi)\big)\in p{\mathbb{Z}}, \ \ \forall x\in \mathcal{O}_L.
\]
假设$x=a_0+a_1\xi+\cdots+a_{p-2}\xi^{p-2}\in \mathcal{O}_L$，其中，
$a_0,\cdots,a_{p-2}\in {\mathbb{Q}}$。那么，
\[
\begin{aligned}
{\rm Tr}_{_{
  {L/{\mathbb{Q}}}
}}\big(x\cdot (1-\xi)\big)&={\rm Tr}_{_{
  {L/{\mathbb{Q}}}
}}\big(a_0(1-\xi)+\sum_{i=1}^{p-2}a_i\xi^i-\sum_{i=1}^{p-2}a_i\xi^{i+1}\big)\\
&={\rm Tr}_{_{
  {L/{\mathbb{Q}}}
}}\big(a_0(1-\xi)\big)+\sum_{i=1}^{p-2}a_i\xi^i-\sum_{i=1}^{p-2}a_i\xi^{i+1}\\
&=pa_0.
\end{aligned}
\]
从而，$p a_0\in p\mathbb{Z}$，所以，$a_0\in {\mathbb{Z}}$。
另外，$\xi^{-1}=\xi^{p-1} \in \mathcal{O}_L$，从而，
\[
a_1+a_2\xi+\cdots+a_{p-2} \xi^{p-2}=(x-a_0)\cdot \xi^{-1} \in \mathcal{O}_L.
\]
从而，$a_1\in {\mathbb{Z}}$。重复这个过程，我们得到$a_i\in {\mathbb{Z}}$，$i=0,\cdots,p-2$。
最终，我们证明
\[
\mathcal{O}_{{\mathbb{Q}} (\xi)}={\mathbb{Z}}[\xi], \ \ \xi=e^{\frac{2\pi i}{p}}.
\]
:::

## 素理想与Galois群

我们研究$A$与其整扩张$B$的素理想之间的关联。我们不加证明的引用如下定理：

::: theorem [Cohen-Seidenberg]
给定环的整扩张$A\subset B$，$\mathfrak{p}\subset A$是素理想。
\[
\begin{tikzcd}
\mathfrak{q}\arrow[d,  dash,dashed] \arrow[r, dash]   &B \arrow[d,  dash,"\text{整}"]\\
\mathfrak{p}  \arrow[r, dash]   &A\\
 \end{tikzcd}
\]
那么，存在素理想$\mathfrak{q}\subset B$，使得$\mathfrak{q}$在$\mathfrak{p}$之上，
即$\mathfrak{q}\cap A=\mathfrak{p}$。
:::

::: remark
Cohen-Seidenberg定理的证明并不困难，自然的想法是对$\mathfrak{p}$的局部化。
这个证明与课程的主旨关联不大，所以略去。
:::

::: remark
在Cohen-Seidenberg定理中，$\mathfrak{p}$是极大理想当且仅当$\mathfrak{q}$是极大理想。

实际上，我们有环的扩张$
  {A/\mathfrak{p}}
\hookrightarrow
  {B/\mathfrak{q}}
$，这是整扩张。

如果$\mathfrak{p}$是极大理想，那么，$
  {A/\mathfrak{p}}
$是域，从而，对任意的$x\in
  {B/\mathfrak{q}}
$，存在$a_0,\cdots, a_{n-1}\in
  {A/\mathfrak{p}}
$，其中，$a_0\neq 0$，使得
\[
x^n+a_{n-1}x^{n-1}+\cdots+a_1x+a_0=0 \ \Rightarrow \ x\cdot a_0^{-1}(x^{n-1}+a_{n-1}x^{n-2}+\cdots+a_1)=1.
\]
这说明$x$有逆，从而，$
  {B/\mathfrak{q}}
$是域，所以，$\mathfrak{q}$是极大理想。

反之，$\mathfrak{q}$是极大理想，那么，$
  {B/\mathfrak{q}}
$是域。对任意的$x\in
  {A/\mathfrak{p}}
$，$x^{-1}$在$
  {A/\mathfrak{p}}
$上是整的，从而，存在$a_0,\cdots, a_{n-1}\in
  {A/\mathfrak{p}}
$，其中，$a_0\neq 0$，使得
\[
x^{-n}+a_{n-1}x^{1-n}+\cdots+a_1x^{-1}+a_0=0 \ \Rightarrow \ x^{-1}=-\big(a_{n-1}+\cdots+a_1x^{n-2}+a_0x^{n-1}\big)\in
  {A/\mathfrak{p}}
.
\]
所以，$
  {A/\mathfrak{p}}
$是域，即$\mathfrak{p}$是极大理想。
:::

假设$K_0={\mathbb{Q}}$的有限扩张$K$，令$A$为$A_0={\mathbb{Z}}$在$K$中的整闭包，$L$为$K$的有限扩张，
$B$为$A$在$L$中的整闭包。[^2]
\[
\begin{tikzcd}
I_\mathfrak{p} \arrow[d,  dash] \arrow[r,  dash] &B \arrow[d,  dash] \arrow[r, dash]   &L \arrow[d,  dash]\\
\mathfrak{p} \arrow[r,  dash] & A \arrow[d,  dash] \arrow[r, dash]   &K\arrow[d,  dash]\\
 &A_0 \arrow[r, dash]   &K_0
  \end{tikzcd}
\]
令
$I_{\mathfrak{p}}=\big\{\mathfrak{q}\subset B\bigm| \text{$\mathfrak{q}$ 是素理想并且在 $\mathfrak{p}$ 之上}\big\}$。
根据Cohen-Seidenberg定理，$I_{\mathfrak{p}}\neq \emptyset$。

考虑$\mathfrak{p}\cap A_0$，这是$A_0$中的素理想，从而是$A_0$中的极大理想（因为$A_0$是主理想整环）。
从而，$\mathfrak{p}$是$A$中的极大理想。
特别地，每个$\mathfrak{q}\in I_{\mathfrak{p}}$都是$B$中的极大理想。这表明
\[
I_{\mathfrak{p}}=\big\{\mathfrak{q}\subset B\bigm| \text{$\mathfrak{q}$ 是素理想并且在 $\mathfrak{p}$ 之上}\big\}=\big\{\mathfrak{q}\supset \mathfrak{p}\cdot B\bigm| \text{$\mathfrak{q}$ 是素理想}\big\}.
\]

::: remark [有限性]
根据$A$和$B$是Noether环，我们可以证明$I_{\mathfrak{p}}$为有限集。以下只对$
  {L/K}
$是Galois扩张的情形证明此结果（据此也能推出一般的结论）。
:::

::: theorem
$A,B,K,L$和$\mathfrak{p}$如上所述，进一步假设$
  {L/K}
$是Galois扩张。那么，$\mathbf{Gal}(
  {L/K}
)$可以传递地作用在$I_{\mathfrak{p}}$上：
\[
\mathbf{Gal}(
  {L/K}
)\times I_{\mathfrak{p}}\rightarrow I_{\mathfrak{p}},  \ \ (\sigma,\mathfrak{q})\mapsto \sigma(\mathfrak{q}).
\]
特别地，$|I_{\mathfrak{p}}|\leqslant |\mathbf{Gal}(
  {L/K}
)|$。
:::

::: remark [Galois群对素理想的作用]
对于$x\in B$，$x$是$A$-系数的首一多项式的根，所以对任意的$\sigma \in \mathbf{Gal}(
  {L/K}
)$，$\sigma(x)$也是该方程的根。从而，$\sigma(x)\in B$。这就给出了环同构：
\[
\begin{tikzcd}
B\arrow[d,  dash] \arrow[r, "\sigma"]   &B \arrow[d,  dash]\\
 A  \arrow[r, dash, "="]   &A
  \end{tikzcd}
\]
特别地，对于$\mathfrak{q}\in I_{\mathfrak{p}}$，$\sigma(\mathfrak{q})$仍然是$B$中的素理想；
由于$\sigma|_{A}={\rm id}$，所以$\mathfrak{q}$仍在$\mathfrak{p}$之上。这就给出了定理中的群作用。
:::

::: proof
现在证明$\mathbf{Gal}(
  {L/K}
)$在$I_{\mathfrak{p}}$上的作用传递。如若不然，选取$\mathfrak{q},\mathfrak{q}'\in I_{\mathfrak{p}}$，使得$\mathfrak{q}\notin \{\sigma(\mathfrak{q}')\mid\sigma \in \mathbf{Gal}(
  {L/K}
)\}$。由于它们都是极大理想，所以是两两互素的。根据中国剩余定理，
\[
\pi\colon B\rightarrow
  {B/\mathfrak{q}}
\times \prod_{\sigma \in \mathbf{Gal}(
  {L/K}
)}
  {B/\sigma(\mathfrak{q}')}
\]
是满射，从而，存在$x\in B$，使得
\[
\begin{cases}&x\equiv 0 \mod \mathfrak{q};\\
 & x\equiv 1 \mod \sigma(\mathfrak{q}'), \ \ \forall \ \sigma \in \mathbf{Gal}(
  {L/K}
).
 \end{cases}
\]
根据范数映射的定义及上面第一个同余式，${\rm N}_{_{
  {L/K}
}}(x)\in \mathfrak{q}\cap  A=\mathfrak{p}$；根据第二个同余式，对任意的$\sigma \in \mathbf{Gal}(
  {L/K}
)$，$\sigma(x)\equiv 1 \mod  \mathfrak{q}'$，从而，${\rm N}_{_{
  {L/K}
}}(x)=\prod_{\sigma \in \mathbf{Gal}(
  {L/K}
)}\sigma(x)\notin \mathfrak{q}'$，特别地，${\rm N}_{_{
  {L/K}
}}(x)\notin \mathfrak{q}'\cap  A=\mathfrak{p}$，矛盾。
:::

::: definition
任意给定$\mathfrak{q}\in  I_{\mathfrak{p}}$，
定义$\mathfrak{q}$的**分解群**为以上作用在$\mathfrak{q}$处的稳定化子：
\[
\mathfrak{D}_{\mathfrak{q}}:=\big\{\sigma\in \mathbf{Gal}(
  {L/K}
)\bigm| \sigma(\mathfrak{q})=\mathfrak{q}\big\}.
\]
:::

::: remark
对其他$g(\mathfrak{q})\in  I_{\mathfrak{p}}$，其中，$g\in \mathbf{Gal}(
  {L/K}
)$，有
\[
G_{g(\mathfrak{q})}=g\mathfrak{D}_{\mathfrak{q}}g^{-1}.
\]
从而，每个$\mathfrak{q}\in  I_{\mathfrak{p}}$定义的分解群均同构。
:::

给定$\sigma \in \mathfrak{D}_{\mathfrak{q}}$，
根据$\sigma\colon B\rightarrow B$和$\sigma\colon\mathfrak{q}\rightarrow \mathfrak{q}$，
我们有域同构$\overline{\sigma}\colon
  {B/\mathfrak{q}}
  \rightarrow
  {B/\mathfrak{q}}
$。
\[
\begin{tikzcd}
B\arrow[d] \arrow[r, "\sigma"]   &B \arrow[d]\\
  {B/\mathfrak{q}}
  \arrow[r, dashed, "\overline{\sigma}"]   &
  {B/\mathfrak{q}}
  \end{tikzcd}
\]
另外，$\overline{\sigma}\colon
  {A/\mathfrak{p}}
  \rightarrow
  {A/\mathfrak{p}}
$是单位映射${\rm id}$。从而，
\[
\begin{tikzcd}
  {B/\mathfrak{q}}
  \arrow[rr,  "\overline{\sigma}"]  & &
  {B/\mathfrak{q}}
\\
 &
  {A/\mathfrak{p}}
 \arrow[lu, dash] \arrow[ru, dash]&
  \end{tikzcd}
\]

::: remark
当$A={\mathbb{Z}}$且$\mathfrak{p}=(p)$为素数$p$的素理想时，由于$B$为有限生成${\mathbb{Z}}$-模，
所以域扩张
\[
\begin{tikzcd}
  {B/\mathfrak{q}}
  \arrow[d,  dash]\\
  {{\mathbb{Z}}/(p)}
={\mathbb{F}}_p
  \end{tikzcd}
\]
是有限扩张。这表明$
  {B/\mathfrak{q}}
$是有限域。
:::

以上讨论给出了群同态
\[
{\rm Res}_{\mathfrak{q}}\colon \mathfrak{D}_{\mathfrak{q}}\longrightarrow  \mathbf{Gal}\big(
  {{B/\mathfrak{q}}/{A/\mathfrak{p}}}
\big).
\]
由于$
  {{B/\mathfrak{q}}/{A/\mathfrak{p}}}
$是有限域的有限扩张，$\mathbf{Gal}\big(
  {{B/\mathfrak{q}}/{A/\mathfrak{p}}}
\big)$是循环群。我们称以上同态的核$\mathfrak{I}_{\mathfrak{q}}$为$\mathfrak{q}$的**惯性群**：
\[
\mathfrak{I}_{\mathfrak{q}}:={\rm Ker}\Big({\rm Res}_{\mathfrak{q}}: \mathfrak{D}_{\mathfrak{q}}\longrightarrow  \mathbf{Gal}\big(
  {{B/\mathfrak{q}}/{A/\mathfrak{p}}}
\big)\Big).
\]

我们现在对$
  {L/K}
$使用Galois理论。根据Galois对应，令$L^\mathfrak{q}$为$G_\mathfrak{q}$的中间域，即
\[
\begin{tikzcd}
\mathfrak{q} \arrow[d,  dash]\arrow[r,  dash]& B \arrow[d,  dash]\arrow[r,  dash]  &L  \arrow[d,  dash] & & 1 \arrow[d,  dash] \\
\mathfrak{r}=\mathfrak{q}\cap B^\mathfrak{q}   \arrow[r,  dash] \arrow[d,  dash]&B^\mathfrak{q} =B\cap L^\mathfrak{q} \arrow[d,  dash]\arrow[r,  dash] &L^\mathfrak{q} \arrow[d,  dash] & &G_\mathfrak{q} \arrow[d,  dash] \\
\mathfrak{p}\arrow[r,  dash] & A \arrow[r,  dash] &K & & \mathbf{Gal}(
  {L/K}
)
 \end{tikzcd}
\]
令$B^\mathfrak{q} =B\cap L^\mathfrak{q}$，这是$A$在$L^\mathfrak{q}$中的整闭包；
令$\mathfrak{r}=\mathfrak{q}\cap B^\mathfrak{q}$，这是$B^\mathfrak{q}$的素理想，
它在$\mathfrak{p}$之上。
那么，$\mathfrak{q}$是唯一一个在$\mathfrak{r}$上的理想：实际上，$\mathbf{Gal}(
  {L/L^{\mathfrak{q}}}
)=G_\mathfrak{q}$在$\mathfrak{r}$上的素理想集上的作用传递，根据$G_\mathfrak{q}$的定义，只有一个这样的$\mathfrak{q}$。

::: lemma
域扩张$
  {{B^\mathfrak{q}/\mathfrak{r}}/{A/\mathfrak{p}}}
$是平凡的，即$
  {A/\mathfrak{p}}
  =
  {B^\mathfrak{q}/\mathfrak{r}}
$。
:::

::: proof
对$x\in B^\mathfrak{q}$，我们构造$z\in A$，使得$z\equiv x \mod \mathfrak{r}$：根据中国剩余定理，
存在$y\in B^\mathfrak{q}$，使得
\[
\begin{cases}
&y\equiv x \ \ \mod \mathfrak{r};\\
 & y\equiv 1 \ \ \mod \sigma^{-1}(\mathfrak{q})\cap B^\mathfrak{q} , \ \ \forall \ \sigma \in \mathbf{Gal}(
  {L/K}
)-\mathfrak{D}_{\mathfrak{q}}.
 \end{cases}
\]
以上，我们用到了$\mathfrak{q}$为$\mathfrak{r}$上唯一的素理想，从而，
$\sigma^{-1}(\mathfrak{q})\cap B^\mathfrak{q} \neq \mathfrak{r}$。根据以上同余关系，我们有
\[
\begin{cases}
&y\equiv x  \ \  \mod \mathfrak{r};\\
 & \sigma(y)\equiv 1 \ \ \mod \mathfrak{r} , \ \ \forall \ \sigma \in \mathbf{Gal}(
  {L/K}
)-\mathfrak{D}_{\mathfrak{q}}.
 \end{cases}
\]
从而，$z={\rm N}_{_{
  {L^\mathfrak{q}/K}
}}(y)\equiv x \mod \mathfrak{r}$。
:::

::: theorem
${\rm Res}_{\mathfrak{q}}$为满的群同态。
:::

::: proof
根据上述讨论，可以假设$L^{\mathfrak{q}}=K$。令$K_{\mathfrak{p}}=
  {A/\mathfrak{p}}
, L_{\mathfrak{q}}=
  {B/\mathfrak{q}}
$，那么，存在$x\in B$，使得它在$L_{\mathfrak{q}}$中的像$\overline{x}$满足$L_{\mathfrak{q}}=K_{\mathfrak{p}}(\overline{x})$（这是有限域的扩张）。令$P(X)\in A[X]$为$x$在$K$上的极小多项式，$Q(X)$为$\overline{x}$在$K_{\mathfrak{p}}$上的极小多项式。通过$\!\!\!\mod \mathfrak{p}$，我们有$\overline{P}(X)\in K_{\mathfrak{p}}[X]$并且$Q(X)\mid \overline{P}(X)$，这是因为$\overline{x}$是$\overline{P}(X)$的根。

对任意的$\overline{\sigma}\in\mathbf{Gal}(
  {L_{\mathfrak{q}}/K_{\mathfrak{p}}}
)$，$\overline{\sigma}$完全由$\overline{\sigma}(\overline{x})$决定。另外，$\overline{\sigma}(\overline{x})$仍然是$Q$的根，从而是$\overline{P}(X)$的根，所以，存在$P(X)$的根$y\in L$，使得$y=\overline{\sigma}(\overline{x}) \mod \mathfrak{q}$。先选定$\sigma'\in {\rm Hom}_{K}(K(x),L)$，使得$\sigma'(x)=y$，再将$\sigma'$扩张成$\sigma \in  {\rm Hom}_{K}(L,L)$。这个$\sigma$给出了$\overline{\sigma}$。
:::

::: remark
令$K_{\mathfrak{p}} =
  {A/\mathfrak{p}}
, L_\mathfrak{q}=
  {B/\mathfrak{q}}
$，我们有如下正合列：
\[
1\rightarrow \mathfrak{I}_{\mathfrak{q}} \longrightarrow \mathfrak{D}_{\mathfrak{q}}\longrightarrow  \mathbf{Gal}\big(
  {L_{\mathfrak{q}}/K_{\mathfrak{p}}}
\big)\rightarrow 1.
\]
:::

::: proposition
假设$L=K(x)$，$P(X)$为$x$在$K$上的极小多项式。若$\overline{P}(X)\in K_{\mathfrak{p}}[X]=
  {A/\mathfrak{p}}
[X]$可分，则惯性群$\mathfrak{I}_{\mathfrak{q}}$是平凡的。特别地，我们有群同构
\[
\mathfrak{D}_{\mathfrak{q}}\stackrel{\simeq}{\longrightarrow} \mathbf{Gal}\big(
  {L_{\mathfrak{q}}/K_{\mathfrak{p}}}
\big).
\]
:::

::: proof
$P(X)$在$L$中分裂，即$P(X)=(X-x_1)\cdots (X-x_n)$，其中，$x_1=x,x_2,\cdots,x_n\in L$。
通过$\!\!\mod \mathfrak{q}$，在$L_{\mathfrak{q}}$中，我们有
\[
\overline{P}(X)=(X-\overline{x_1})\cdots (X-\overline{x_n}), \ \ \overline{x_i}\neq \overline{x_j},\ 1\leqslant i<j\leqslant n.
\]
根据惯性群的定义，对任意的$\sigma\in \mathfrak{I}_{\mathfrak{q}}$，
$\overline{\sigma}(\overline{x_i})=\overline{x_i}$。
由于$L=K(x)$，为了决定$\sigma\in \mathfrak{I}_{\mathfrak{q}}$，我们只要考虑$\sigma(x)=x_j$。
根据$\overline{\sigma}(\overline{x_1})=\overline{x_1}$，$j=1$，从而$\sigma(x)=x$。这表明$\sigma=1$。
:::

用同样的想法也可以研究不可约多项式的分裂域：
\[
\begin{tikzcd}
\mathfrak{q} \arrow[d,  dash]\arrow[r,  dash]& B \arrow[d,  dash]\arrow[r,  dash]  &L  \arrow[d,  dash]  \\
\mathfrak{p}\arrow[r,  dash] & A \arrow[r,  dash] &K
 \end{tikzcd}
\]

::: theorem
$P(X)$为$A[X]$中首一不可约多项式，$L$为$P$的分裂域，$\mathfrak{p}\subset A$为素理想，
$\mathfrak{q},K_{\mathfrak{p}}=
  {A/\mathfrak{p}}
,L_{\mathfrak{q}}=
  {B/\mathfrak{q}}
$如前所述，$\overline{P}(X)$是$P$在$K_{\mathfrak{p}}[X]$中的像。

若$\overline{P}(X)$可分，
则$L_{\mathfrak{q}}$是$\overline{P}$在$K_{\mathfrak{p}}$
上的分裂域并且$\mathfrak{D}_{\mathfrak{q}}\simeq \mathbf{Gal}(
  {L_{\mathfrak{q}}/K_{\mathfrak{p}}}
)$。

进一步，
如果$\overline{P}(X)=\overline{P_1}(X)\overline{P_2}(X)\cdots \overline{P_l}(X)$是$\overline{P}$在
$K_{\mathfrak{p}}[X]$中的不可约分解，其中，$\overline{P_i}(X)$为不可约多项式。
根据可分性，$P$在$L$上根的集合$Z_P(L)$可以写成：
\[
Z_P(L)=Z_1\cup Z_2\cup \cdots \cup Z_l,
\]
使得$\!\!\mod \mathfrak{q}$之后$Z_i$恰好给出了
$Z_{\overline{P}_i}(L_{\mathfrak{q}})$（$\overline{P}_i$在$L_{\mathfrak{q}}$上根的集合）。
那么，对任意的$\sigma \in\mathfrak{D}_{\mathfrak{q}}$和$i\leqslant l$，$\sigma(Z_i)=Z_i$。
:::

::: remark
$\overline{P}$是可分的，所以$\overline{P}$没有重根。据此，$P$在$L$上无重根，这表明$
  {L/K}
$是Galois扩张。
:::

::: proof
在$L$中，我们有$P(X)=(X-x_1)\cdots (X-x_n)$，其中，$x_1,x_2,\cdots,x_n\in L$。
通过$\!\!\mod \mathfrak{q}$，在$L_{\mathfrak{q}}$中，我们有
\[
\overline{P}(X)=(X-\overline{x_1})\cdots (X-\overline{x_n}), \ \ \overline{x_i}\neq \overline{x_j}, \ 1\leqslant i<j\leqslant n.
\]
其中，$x_i\equiv \overline{x_j} \!\!\mod \mathfrak{q}$并且$\overline{x_j}\in L_{\mathfrak{q}}$。
我们考虑$
  {L_{\mathfrak{q}}/K_{\mathfrak{p}}}
$的中间域：
\[
\begin{tikzcd}
L_{\mathfrak{q}}  \arrow[d,  dash] & & 1 \arrow[d,  dash] \\
K_{\mathfrak{p}}(\overline{x_1},\cdots,\overline{x_n}) \arrow[d,  dash] & &\mathbf{Gal}\big(
  {L_{\mathfrak{q}}/K_{\mathfrak{p}}(\overline{x_1},\cdots,\overline{x_n})}
\big)
 \arrow[d,  dash] \\
K_{\mathfrak{p}} & & \mathbf{Gal}\big(
  {L_{\mathfrak{q}}/K_{\mathfrak{p}}}
\big)
 \end{tikzcd}
\]

对任意的$\sigma\in \mathfrak{D}_{\mathfrak{q}}$，$\sigma$把$P$的根映射成$P$的根，
所以$\sigma$把每个$\overline{x_i}$映射成某个$\overline{x_j}$。据此，我们有群同态
\[
\mathfrak{D}_{\mathfrak{q}}\longrightarrow \mathbf{Gal}\big(
  {K_{\mathfrak{p}}(\overline{x_1},\cdots,\overline{x_n})/K_{\mathfrak{p}}}
\big), \ \ \sigma \mapsto \overline{\sigma}.
\]
由于$\{\overline{x}_i\}_{i\leqslant n}$两两不同，
所以$\overline{\sigma}(\overline{x}_i)=\overline{x}_j$决定了$\sigma(x_i)=x_j$，
从而上述群同态是单射。根据Galois对应以及${\rm Res}_{\mathfrak{q}}$为满射，我们有如下交换图表：
\[
\begin{tikzcd}
\mathfrak{D}_{\mathfrak{q}} \arrow[drr,hook,"\text{单}"] \arrow[rr,  "{\rm Res}_{\mathfrak{q}}", two heads]& &  \mathbf{Gal}\big(
  {L_{\mathfrak{q}}/K_{\mathfrak{p}}}
\big)  \arrow[d,  two heads, "\text{满}"]  \\
 & & \mathbf{Gal}\big(
  {K_{\mathfrak{p}}(\overline{x_1},\cdots,\overline{x_n})/K_{\mathfrak{p}}}
\big)
 \end{tikzcd}
\]
所以，所有的映射均为双射，
进而$K_{\mathfrak{p}}(\overline{x_1},\cdots,\overline{x_n}) =L_{\mathfrak{q}}$
并且$\mathfrak{D}_{\mathfrak{q}}\simeq\mathbf{Gal}\big(
  {L_{\mathfrak{q}}/K_{\mathfrak{p}}}
\big)$。

以下，
假设$\overline{P}(X)=\overline{P_1}(X)\overline{P_2}(X)\cdots \overline{P_l}(X)$是$\overline{P}$在
$K_{\mathfrak{p}}[X]$中的不可约分解，
我们证明对任意的$\sigma \in\mathfrak{D}_{\mathfrak{q}}$和$i\leqslant l$，
$\sigma\colon Z_i\rightarrow Z_i$。
实际上，对$\sigma$在$\mathbf{Gal}\big(
  {L_{\mathfrak{q}}/K_{\mathfrak{p}}}
\big)$中的像$\overline{\sigma}$而言，我们显然有$\overline{\sigma}\colon\overline{Z_i}\rightarrow \overline{Z_i}$，这里，$\overline{Z_i}$为$Z_i$中的元素$\!\!\mod \mathfrak{q}$之后的像，从而只能有$\sigma\colon Z_i\rightarrow Z_i$。
:::

作为推论，我们就得到了如下的著名定理：

::: theorem [Dedekind]
$P(X)$为首一的、整系数$n$次不可约多项式，$L$是$P$在${\mathbb{Q}}$上的分裂域，通过在$P$的根上的作用，
将$\mathbf{Gal}(
  {L/{\mathbb{Q}}}
)$视为$\mathfrak{S}_n$的子群。假设存在素数$p$，使得$\overline{P}(X)$是可分的，其中$\overline{P}$是$P$在${\mathbb{F}}_p[X]$中的像。

令$\overline{P}(X)=\overline{P_1}(X)\cdots \overline{P_l}(X)$为$\overline{P}$在${\mathbb{F}}_p[X]$
中的不可约分解，其中，对$i=1,\cdots,l$，$\deg(\overline{P_i})=n_i$。
那么，存在$(n_1,\cdots,n_l)$-型的$\sigma \in \mathbf{Gal}(
  {L/{\mathbb{Q}}}
)<\mathfrak{S}_n$（把$\sigma$写成两两不交的循环之积）。
:::

::: proof
这是上一个定理的直接推论：我们取$A={\mathbb{Z}},K={\mathbb{Q}},\mathfrak{p}=(p)$。
此时，$\mathfrak{D}_{\mathfrak{q}} \simeq \mathbf{Gal}\big(
  {L_{\mathfrak{q}}/{\mathbb{F}}_p}
\big)$。由于$\mathbf{Gal}\big(
  {L_{\mathfrak{q}}/{\mathbb{F}}_p}
\big)$是循环群，我们选取$\sigma\in \mathfrak{D}_{\mathfrak{q}} < \mathbf{Gal}(
  {L/{\mathbb{Q}}}
)<\mathfrak{S}_n$，使得$\sigma$给出该循环群的生成元。因为$\overline{P_i}(X)$是不可约的，$\sigma$在$Z_i$上的作用是传递的，从而，$\sigma$在$Z_i$这$d_i$个根上给出了一个$d_i$-循环。命题得证。
:::

::: example
计算多项式$P(X)=X^4+4X^3+2X^2+3X-5$在${\mathbb{Q}}$上的分裂域$L$的Galois群$\mathbf{Gal}(
  {L/{\mathbb{Q}}}
)$。

在${\mathbb{F}}_2$中考虑，我们有$\overline{P}(X)=X^4+X+1$。
容易看出，$\overline{P}$在${\mathbb{F}}_2$和${\mathbb{F}}_4$中没有根，从而，
$\overline{P}$是不可约的。据此，$\mathbf{Gal}(
  {L/{\mathbb{Q}}}
)$中有$4$-循环。

在${\mathbb{F}}_3$中考虑，我们有$\overline{P}(X)=X^4+X^3+2X^2+1$。
容易看出，$\overline{P}$在${\mathbb{F}}_3$恰有一个根$-1$。从而，
\[
\overline{P}(X)=(X+1)(X^3-X+1).
\]
并且$X^3-X+1$是不可约的。据此，$\mathbf{Gal}(
  {L/{\mathbb{Q}}}
)$中有$3$-循环。

以上表明$|\mathbf{Gal}(
  {L/{\mathbb{Q}}}
)|\geqslant 3\times 4=12$，所以，$\mathbf{Gal}(
  {L/{\mathbb{Q}}}
)$为$\mathfrak{S}_4$或者$\mathfrak{A}_4$。

在${\mathbb{F}}_5$中考虑，我们有$\overline{P}(X)=X^4-X^3+2X^2-2X$，从而，
\[
\overline{P}(X)=X(X-1)(X^2+2).
\]
此时，$X^2+2$在${\mathbb{F}}_5[X]$上不可约。据此，$\mathbf{Gal}(
  {L/{\mathbb{Q}}}
)$中有对换。从而，$\mathbf{Gal}(
  {L/{\mathbb{Q}}}
)\neq\mathfrak{A}_4$。

综上所述，$\mathbf{Gal}(
  {L/{\mathbb{Q}}}
)\simeq\mathfrak{S}_4$。
:::

::: exercise
令$K$为$P(X)=X^4+2X^2+X+3$在${\mathbb{Q}}$上的分裂域，计算${\mathbf{Gal}}\left(
  {K/{\mathbb{Q}}}
\right)$。进一步，不用计算给出$P(X)=X^4+2X^2-59X-27$在${\mathbb{Q}}$上的分裂域的Galois群。
:::

::: lemma
$G$是$\mathfrak{S}_n$的子群，
考虑$\mathfrak{S}_n$在$\{1,\cdots,n\}$上的自然作用并假设$G$的作用是传递的。
如果$G$包含一个对换和一个$(n-1)$-循环，那么$G=\mathfrak{S}_n$。
:::

::: proof
不妨设$\sigma=(2,3,\cdots,n)\in G$以及$(a,b)\in G$。
由于$G$的作用传递，通过选取$g\in G$使得$g(a)=1$，则$g(a,b)g^{-1}=(1,g(b))$。
所以，我们不妨设$(1,b)\in G$。据此，
\[
\sigma^k (1,b) \sigma^{-k}=(\sigma^k (1),\sigma^k (b))=(1,\sigma^k(b)).
\]
所以，$(1,2),(1,3),\cdots,(1,n)\in G$，从而$G=\mathfrak{S}_n$。
:::

::: example
令$K$为$P(X)=X^6+22X^5+6X^4+12X^3-52X^2-14X-30$在${\mathbb{Q}}$上的分裂域，计算${\mathbf{Gal}}\left(
  {K/{\mathbb{Q}}}
\right)$。

通过$\mod 2$以及Eisenstein判别法，$P$不可约。这表明${\mathbf{Gal}}\left(
  {K/{\mathbb{Q}}}
\right)$是$\mathfrak{S}_6$的一个传递的子群。

在${\mathbb{F}}_3[X]$中，$P(X)=X^6+X^5-X^2+X=X(X^5+X^4-X+1)$。
然而，在${\mathbb{F}}_3[X]$中$X^5+X^4-X+1$不可约（利用$X^2+1,X^2\pm X-1$是唯一的二次不可约多项式），
从而${\mathbf{Gal}}\left(
  {K/{\mathbb{Q}}}
\right)$包含$5$-循环。

在${\mathbb{F}}_5[X]$中，
\[
P(X)=X^6+2X^5+X^4+2X^3-2X^2+X=X(X-1)(X+1)(X+2)(X^2+2).
\]
在${\mathbb{F}}_5[X]$中$X^2+2$不可约，从而${\mathbf{Gal}}\left(
  {K/{\mathbb{Q}}}
\right)$包含一个对换。

根据上述引理，${\mathbf{Gal}}\left(
  {K/{\mathbb{Q}}}
\right)\simeq\mathfrak{S}_6$。
:::

::: exercise
令$K$为多项式$P(X)=X^6+22X^5-9X^4+12X^3-37X^2-29X-15$在${\mathbb{Q}}$上的分裂域，
试计算${\mathbf{Gal}}\left(
  {K/{\mathbb{Q}}}
\right)$。
:::

::: exercise
令$K$为多项式$P(X)=X^6+18X^5+12X^4-6X^3+32X^2+13X+45$在${\mathbb{Q}}$上的分裂域，
试计算${\mathbf{Gal}}\left(
  {K/{\mathbb{Q}}}
\right)$。
:::

[^1]: 参考作业 @sec:trace-norm-exer。
[^2]: 在函数域的情形，我们会考虑$K_0={\mathbb{F}}_q(X)$。
