---
title: Jordan 标准型
---

## 幂零变换与循环子空间*

::: definition
一个线性映射$f:V\to V$称为幂零变换，如果存在正整数$m$使得$f$的$m$次复合$f^m=0$。
类似地，一个$n$阶方阵$A$称为幂零矩阵，如果存在正整数$m$使得$A^m=0$。
使得$f^m=0$（或$A^m=0$）成立的最小正整数$m$称为$f$（或$A$）的幂零指数，
此时也称$f$（或$A$）为$m$次幂零变换（或幂零方阵）。
:::

::: proposition {@prop:1-nil-inverse}
设$A$是一个$n$阶幂零矩阵，则$I_n-A$可逆。
:::

::: proof
设$A^m=0$，则
$$
(I_n-A)(I_n+A+\cdots+ A^{m-1})=I_n
$$
因此$(I_n-A)^{-1}=I_n+A+\cdots+ A^{m-1}$。
:::

::: proposition {@prop:nil-eigen}
一个$n$阶方阵$A$是幂零矩阵当且仅当$A$只有零特征值，即特征多项式为$\lambda^n$。
:::

::: proof
假设$A$是幂零矩阵。设$\lambda_0\neq 0$，则$\lambda_0^{-1}A$也是幂零矩阵。
由 @prop:1-nil-inverse $(I_n-\lambda_0^{-1}A)$可逆，
$\lambda_0I_n-A=\lambda_0(I_n-\lambda_0^{-1}A)$可逆，故$\lambda_0$不是$A$的特征值。
由$\lambda_0$的任意性，$A$的特征值只有$0$。

反之假设$A$只有零特征值，即特征多项式为$\lambda^n$。由Cayley–Hamilton定理知$A^n=0$。
:::

::: definition
设$f:V\to V$是一个线性变换（或$A$是一个$n$阶矩阵），$\vec{x}$是一个非零向量。
$$
C_{\vec{x}}=\operatorname{Span}\{\vec{x},f(\vec{x}),\cdots,f^m (\vec{x}),\cdots\} \quad (\quad \text{或}\quad
C_{\vec{x}}=\operatorname{Span}\{\vec{x},A\vec{x},\cdots,A^m \vec{x},\cdots\} \quad )
$$
称为在$A$作用下由$\vec{x}$生成的循环子空间。
:::

由Cayley–Hamilton定理知，
$\{\vec{x},A\vec{x},\cdots,A^{n-1} \vec{x}\}$已经可以张成整个$C_{\vec{x}}$。

::: proposition {@prop:cyclic-dim}
设$A$是幂零方阵，$r$是满足$A^r\vec{x}=0$的最小正整数。则    $\dim C_{\vec{x}}=r$，并且
$$
\{\vec{x},A\vec{x},\cdots,A^{r-1}\vec{x} \}
$$
构成这个在$A$作用下由$\vec{x}$生成的循环子空间 $C_{\vec{x}}$的一组基。
:::

::: proof
设$r$是满足$A^r\vec{x}=0$的最小正整数。我们只需证明$\{\vec{x},A\vec{x},\cdots,A^{r-1} \vec{x}\}
  $是线性无关的。

假设
$$
c_0 \vec{x}+c_1 A\vec{x}+\cdots+ c_{r-1}A^{r-1}\vec{x}=0
$$
并且系数$c_i$不全为零。假设$c_0=\cdots=c_{k-1}=0$，$c_k\neq 0$，$k\leq r-1$，不妨设$c_k=1$。则我们有
$$
A^{k}\vec{x}+c_{k+1}A^{k+1}\vec{x}+\cdots+ c_{r-1}A^{r-1}\vec{x}
=\bigg(I_n+g(A)\bigg)A^k \vec{x}=0
$$
这里$g(A)=c_{k+1}A+\cdots+c_{r-1}A^{r-1-k}$。
由于$A$是幂零方阵，$g(A)$也是幂零方阵，由 @prop:1-nil-inverse 知$I_n+g(A)$可逆。
两边乘以$\big(I_n+g(A)\big)^{-1}$，我们得到
$$
A^k\vec{x}=0
$$
这与$r$的最小性矛盾。
:::

::: definition
设$f$是幂零变换（或$A$是幂零方阵）。
定义向量$\vec{x}$在$f$（或$A$）作用下的深度$d_{\vec{x}}$为满足$f^r(\vec{x})=0$（或
$A^r\vec{x}=0$）的最小正整数$r$。由 @prop:cyclic-dim 知
$$
d_{\vec{x}}=\dim C_{\vec{x}}
$$
:::

::: proposition {@prop:cyclic-decomp}
设$V$是$n$维线性空间，$f:V\to V$是一个$m$次幂零变换。
则存在向量$\vec{\alpha}_1,\cdots,\vec{\alpha}_t\in V$使得
$$
V=C_{\vec{\alpha}_1}\oplus C_{\vec{\alpha}_2}\oplus \cdots \oplus C_{\vec{\alpha}_t}
$$
即$V$可以分解为循环子空间的直和。此时
$\max\{{d_{\vec{\alpha}_i}}\}
  =\max \{ {\dim C_{\vec{\alpha}_i}} \}
  ={\text{幂零指数 }}m
  $。
:::

::: proof
我们对$m$作归纳。当$m=1$时命题显然成立。考虑$V$的线性子空间
$$
f(V)=\operatorname{im} f \subset V
$$

易知$f(V)$是$V$的不变子空间，且$f$限制在$f(V)$上得到的线性变换
$$
f: f(V)\to f(V)
$$
是一个$m-1$次幂零变换。由归纳假设，存在$\vec{\gamma}_1,\cdots,\vec{\gamma}_r\in f(V)$使得
$$
f(V)=C_{\vec{\gamma}_1}\oplus\cdots \oplus C_{\vec{\gamma}_r}
$$

由$\vec{\gamma}_i\in f(V)$，
存在向量$\vec{\alpha}_i$使得$\vec{\gamma}_i=f(\vec{\alpha}_i),i=1,\cdots,r$。我们首先说明
$$
C_{\vec{\alpha}_1}+\cdots+ C_{\vec{\alpha}_r}=C_{\vec{\alpha}_1}\oplus\cdots\oplus C_{\vec{\alpha}_r}
$$
是直和。
假设有$\vec{\beta}_i=c_{i,0}\vec{\alpha}_i+c_{i,1}f(\vec{\alpha}_i)+\cdots\in C_{\vec{\alpha}_i}$
使得
$$
\vec{\beta}_1+\vec{\beta}_2+\cdots+ \vec{\beta}_r=0
$$
两边作用$f$得到$f(V)$中的关系
$$
c_{1,0}\vec{\gamma}_1+\cdots+c_{r,0}\vec{\gamma}_r+\cdots=0
$$

由如上$f(V)$的直和分解，知$c_{1,0}=\cdots=c_{r,0}=0$。因此$\vec{\beta}_i\in C_{\vec{\gamma}_i}$。
再由直和分解知$\vec{\beta}_i=0$。这证明了$
C_{\vec{\alpha}_1}+\cdots+ C_{\vec{\alpha}_r}=C_{\vec{\alpha}_1}\oplus\cdots\oplus C_{\vec{\alpha}_r}
$是直和。

由于$f$是幂零变换，只有零特征值。考虑其对应的特征子空间
$$
V_0=\{\vec{x}\in V| f(\vec{x})=0\}
$$
设$d_i=d_{\vec{\alpha}_i},i=1,\cdots,r$。
则$\{f^{d_1-1}(\vec{\alpha}_1),\cdots,f^{d_r-1}(\vec{\alpha}_r)\}$是$V_0$中线性无关的向量。
我们添加向量$\{\vec{\alpha}_{r+1},\cdots,\vec{\alpha}_t\}$使得
$$
\{f^{d_1-1}(\vec{\alpha}_1),\cdots,f^{d_r-1}(\vec{\alpha}_r),\vec{\alpha}_{r+1},\cdots,\vec{\alpha}_t\}
$$
构成$V_0$的一组基。
注意到对于$i=r+1,\cdots,t$，$C_{\vec{\alpha}_i}=\operatorname{Span}\{\vec{\alpha}_i\}$。我们下面说明
$$
C_{\vec{\alpha}_1}+\cdots+ C_{\vec{\alpha}_r}+C_{\vec{\alpha}_{r+1}}+\cdots+C_{\vec{\alpha}_t}=C_{\vec{\alpha}_1}\oplus\cdots\oplus C_{\vec{\alpha}_r}\oplus C_{\vec{\alpha}_{r+1}}\oplus\cdots\oplus C_{\vec{\alpha}_t}
$$
是直和。假设有$\vec{\beta}_i\in C_{\vec{\alpha}_i}$使得
$$
\vec{\beta}_1+\cdots+\vec{\beta}_r+\vec{\beta}_{r+1}+\cdots+\vec{\beta}_t=0
$$

两边作用$f$得到$f(\vec{\beta}_1+\cdots+\vec{\beta}_r)=0$，
即$\vec{\beta}_1+\cdots+\vec{\beta}_r\in V_0$。因此我们有
$$
\vec{\beta}_1+\cdots+\vec{\beta}_r\in (C_{\vec{\alpha}_1}\oplus\cdots\oplus C_{\vec{\alpha}_r}) \cap V_0= \operatorname{Span}\{f^{d_1-1}(\vec{\alpha}_1),\cdots,f^{d_r-1}(\vec{\alpha}_r)\}
$$
因此
$$
\vec{\beta}_{r+1}+\cdots+\vec{\beta}_t=-(\vec{\beta}_1+\cdots+\vec{\beta}_r)\in \operatorname{Span}\{f^{d_1-1}(\vec{\alpha}_1),\cdots,f^{d_r-1}(\vec{\alpha}_r)\}
$$
因为
$\{f^{d_1-1}(\vec{\alpha}_1),\cdots,f^{d_r-1}(\vec{\alpha}_r),\vec{\alpha}_{r+1},\cdots,\vec{\alpha}_t\}$
线性无关，我们得到$\vec{\beta}_{r+1}=\cdots=\vec{\beta}_t=0$。于是
$$
\vec{\beta}_1+\cdots+\vec{\beta}_r=0
$$
又由于$C_{\vec{\alpha}_1}\oplus\cdots\oplus C_{\vec{\alpha}_r}$是直和，
我们进一步得到$\vec{\beta}_1=\cdots=\vec{\beta}_r=0$。这证明了如上的直和性质。

最后我们说明$\{C_{\vec{\alpha}_1},\cdots,C_{\vec{\alpha}_t}\}$张成了整个$V$。
实际上，对$V$中任一向量$\vec{x}$，
由$f(\vec{x})\in f(V)=C_{\vec{\gamma}_1}\oplus\cdots \oplus C_{\vec{\gamma}_r}$知存在
$\vec{y}\in C_{\vec{\alpha}_1}\oplus\cdots\oplus C_{\vec{\alpha}_r}$使得
$
f(\vec{x})=f(\vec{y})
$。这说明$\vec{x}-\vec{y}\in V_0$，即可以被$\{f^{d_1-1}(\vec{\alpha}_1),\cdots,f^{d_r-1}(\vec{\alpha}_r),\vec{\alpha}_{r+1},\cdots,\vec{\alpha}_t\}$线性表达。
因此
$$
\vec{x}=\vec{y}+(\vec{x}-\vec{y})\in C_{\vec{\alpha}_1}+\cdots+ C_{\vec{\alpha}_r}+C_{\vec{\alpha}_{r+1}}+\cdots+C_{\vec{\alpha}_t}
$$

结合直和分解性质，我们得到
$$
V=C_{\vec{\alpha}_1}\oplus\cdots\oplus C_{\vec{\alpha}_r}\oplus C_{\vec{\alpha}_{r+1}}\oplus\cdots\oplus C_{\vec{\alpha}_t}
$$
由归纳知原命题成立。
:::

::: proposition {@prop:block-chain-dim}
设$V$是$n$维线性空间，$f:V\to V$是一个$m$次幂零变换。设
$$
V=C_{\vec{\alpha}_1}\oplus C_{\vec{\alpha}_2}\oplus \cdots \oplus C_{\vec{\alpha}_t}
$$
是 @prop:cyclic-decomp 给出的关于$f$的循环子空间的直和。则
$$
\dim \ker f^m-\dim \ker f^{m-1}=\text{集合 }\{i| \dim C_{\vec{\alpha}_i}\geq m\}\text{ 的元素个数}
$$
这里$\ker f^m=\{\vec{x}\in V| f^m(\vec{x})=0\}$。
:::

::: proof
留作练习。
:::

::: example
设$A$是一个幂零方阵，对应一个幂零线性映射$f$。假设如下的循环子空间分解

```tikz {caption="循环子空间分解"}
\begin{tikzpicture}[scale=1.5]
        \foreach \i in {0, 1, 2, 3, 4} {
            \draw[fill=blue!20] (0, \i * 1) rectangle (1, \i * 1+1);
            \ifnum\i=0
                \node at (0.5, \i * 1 + 0.5) {$\vec{\alpha}_1$};
            \else
                \node at (0.5, \i * 1 + 0.5) {$A^{\i}
            \vec{\alpha}_1$};
            \fi
        }
        \foreach \i in {0, 1, 2} {
            \draw[fill=green!20] (1, \i * 1) rectangle (1 + 1, \i * 1+1);
              \ifnum\i=0
                \node at (1.5, \i * 1 + 0.5) {$\vec{\alpha}_2$};
            \else
                \node at (1.5, \i * 1 + 0.5) {$A^{\i}
            \vec{\alpha}_2$};
            \fi
        }
        \foreach \i in {0, 1, 2} {
            \draw[fill=red!20] (2, \i * 1) rectangle (2 + 1, \i * 1+1);
             \ifnum\i=0
                \node at (2.5, \i * 1 + 0.5) {$\vec{\alpha}_3$};
            \else
                \node at (2.5, \i * 1 + 0.5) {$A^{\i}
            \vec{\alpha}_3$};
            \fi
        }
        \foreach \i in {0, 1} {
            \draw[fill=yellow!20] (3, \i * 1) rectangle (3 + 1, \i * 1+1);
             \ifnum\i=0
                \node at (3.5, \i * 1 + 0.5) {$\vec{\alpha}_4$};
            \else
                \node at (3.5, \i * 1 + 0.5) {$A^{\i}
            \vec{\alpha}_4$};
            \fi
        }
        \draw[fill=orange!20] (4, 0) rectangle (4 + 1, 1);
        \node at (4.5, 0.5) {$\vec{\alpha}_5$};
        \node at (0.5, -0.5) {$C_1$};
        \node at (1.5, -0.5) {$C_2$};
        \node at (2.5, -0.5) {$C_3$};
        \node at (3.5, -0.5) {$C_4$};
        \node at (4.5, -0.5) {$C_5$};
    \end{tikzpicture}
```

则由上图容易看出
\[
\begin{aligned}
 \dim \ker A&=\dim \operatorname{Span}\{{\color{blue}A^4 \vec{\alpha}_1},{\color{green}A^2 \vec{\alpha}_2}, {\color{red}A^2\vec{\alpha}_3}, {\color{#ccaa00}A\vec{\alpha}_4}, {\color{orange}\vec{\alpha}_5}\}=5\\
  \dim \ker A^2&=\dim \operatorname{Span}\{{\color{blue}A^4 \vec{\alpha}_1,A^3 \vec{\alpha}_1},{\color{green}A^2 \vec{\alpha}_2,A \vec{\alpha}_2}, {\color{red}A^2\vec{\alpha}_3,A\vec{\alpha}_3}, {\color{#ccaa00}A\vec{\alpha}_4, \vec{\alpha}_4},{\color{orange}\vec{\alpha}_5}\}=5+4\\
  \dim \ker A^3&=\dim \operatorname{Span}\{{\color{blue}A^4 \vec{\alpha}_1,A^3 \vec{\alpha}_1,A^2 \vec{\alpha}_1},{\color{green}A^2 \vec{\alpha}_2,A \vec{\alpha}_2,\vec{\alpha}_2}, {\color{red}A^2\vec{\alpha}_3,A\vec{\alpha}_3,\vec{\alpha}_3}, {\color{#ccaa00}A\vec{\alpha}_4, \vec{\alpha}_4},{\color{orange}\vec{\alpha}_5}\}=5+4+3\\
    \dim \ker A^4&=\dim \operatorname{Span}\{{\color{blue}A^4 \vec{\alpha}_1,A^3 \vec{\alpha}_1,A^2 \vec{\alpha}_1,A \vec{\alpha}_1},{\color{green}A^2 \vec{\alpha}_2,A \vec{\alpha}_2,\vec{\alpha}_2}, {\color{red}A^2\vec{\alpha}_3,A\vec{\alpha}_3,\vec{\alpha}_3}, {\color{#ccaa00}A\vec{\alpha}_4, \vec{\alpha}_4},{\color{orange}\vec{\alpha}_5}\}\\&=5+4+3+1\\
    \dim \ker A^5&=\dim \operatorname{Span}\{{\color{blue}A^4 \vec{\alpha}_1,A^3 \vec{\alpha}_1,A^2 \vec{\alpha}_1,A \vec{\alpha}_1,\vec{\alpha}_1},{\color{green}A^2 \vec{\alpha}_2,A \vec{\alpha}_2,\vec{\alpha}_2}, {\color{red}A^2\vec{\alpha}_3,A\vec{\alpha}_3,\vec{\alpha}_3}, {\color{#ccaa00}A\vec{\alpha}_4, \vec{\alpha}_4},{\color{orange}\vec{\alpha}_5}\}\\
    &=5+4+3+1+1\\
     \dim \ker A^6&= \dim \ker A^5
\end{aligned}
\]
由这些维数信息不难反解出来有$1$个维数$5$的循环子空间，$2$个维数$3$的循环子空间，
$1$个维数$2$的循环子空间，$1$个维数$1$的循环子空间。
:::

给定$n$阶幂零方阵$A$，由 @prop:cyclic-decomp 我们知道$n$维空间可以分解为$A$的一些循环子空间的直和。
由 @prop:block-chain-dim，虽然这些循环子空间的选法并不唯一，
但是循环子空间的个数以及每个循环子空间的维数是由$A$决定的。
具体而言，可以通过解线性方程组依次计算维数
$$
\begin{cases}
\dim \ker A=\dim \{\vec{x}| A\vec{x}=0\}\\
\dim \ker A^2=\dim \{\vec{x}| A^2\vec{x}=0\}\\
\vdots\\
\dim \ker A^m=\dim \{\vec{x}| A^m\vec{x}=0\} \\
\vdots
\end{cases}
$$
得到。这里$\dim \ker A$即特征子空间的维数表示有多少个循环子空间$C_i$。然后依次有
$$
\dim \ker A^m-\dim \ker A^{m-1}=\sharp\{\text{维数至少是 $m$ 的 $C_i$ 的个数}\}
$$
如果发现当到达某个$N$使得
$$
\dim \ker A^{N+1}=\dim \ker A^{N}
$$
时就可以停止计算。由所有这些信息$\{\dim \ker A^m\}_{1\leq m\leq N}$可以推出每个循环子空间的维数。

## Jordan块*

::: definition
如下$m$阶方阵称为一个$m$阶Jordan块，记为
$$
J_m(\lambda):=\begin{bmatrix} \lambda & 1 & 0 & \cdots & 0\\
0 & \lambda & 1 & \cdots & 0\\
\cdots & \cdots & \cdots & \cdots& \cdots\\
0 & 0 & \cdots & \lambda & 1\\
0 & 0 & \cdots & 0 & \lambda\end{bmatrix}
$$
:::

::: proposition {@prop:nil-jordan}
设$A$是一个$n$阶幂零方阵。则存在正整数$m_1,\cdots,m_k$，使得$A$相似于由Jordan块构成的如下方阵
$$
\begin{bmatrix}
J_{m_1}(0) & 0 & \cdots & 0\\
0 & J_{m_2}(0) & \cdots & 0\\
\cdots & \cdots & \cdots & \cdots\\
0 & \cdots & 0 & J_{m_k}(0)
\end{bmatrix}
$$
这里$m_1+\cdots+m_k=n$，且$A$的幂零指数是$\max\{m_1,\cdots,m_k\}$。
:::

::: proof
由 @prop:cyclic-decomp，存在向量$\vec{\alpha}_1,\cdots,\vec{\alpha}_k$使得
$$
k^n=C_{\vec{\alpha}_1}\oplus\cdots\oplus C_{\vec{\alpha}_k}
$$

把这个直和分解中的基作为列向量排起来，构成
$n$阶可逆方阵$P$
$$
P=\begin{bmatrix}
A^{m_1-1}\vec{\alpha}_1 & \cdots & A\vec{\alpha}_1 & \vec{\alpha}_1 & \cdots \cdots
& A^{m_i-1}\vec{\alpha}_i & \cdots & A\vec{\alpha}_i & \vec{\alpha}_i & \cdots\cdots
 &A^{m_k-1}\vec{\alpha}_k & \cdots  & A\vec{\alpha}_k &  \vec{\alpha}_k &
\end{bmatrix}
$$
这里$m_i=d_{\vec{\alpha}_i}$。则易知
$$
A=P \begin{bmatrix}
J_{m_1}(0) & 0 & \cdots & 0\\
0 & J_{m_2}(0) & \cdots & 0\\
\cdots & \cdots & \cdots & \cdots\\
0 & \cdots & 0 & J_{m_k}(0)
\end{bmatrix} P^{-1}
$$
:::

::: proposition {@prop:eigen-sim-jordan}
设$A$是一个$n$阶方阵，且只有一个特征值$\lambda_0$。
则存在正整数$m_1,\cdots,m_k$，使得$A$相似于由Jordan块构成的如下方阵
$$
\begin{bmatrix}
J_{m_1}(\lambda_0) & 0 & \cdots & 0\\
0 & J_{m_2}(\lambda_0) & \cdots & 0\\
\cdots & \cdots & \cdots & \cdots\\
0 & \cdots & 0 & J_{m_k}(\lambda_0)
\end{bmatrix}
$$
这里$m_1+\cdots+m_k=n$。
:::

::: proof
$A-\lambda_0 I_n$只有$0$特征值，因此是幂零矩阵。
将 @prop:nil-jordan 用于$A-\lambda_0 I_n$，即得结论。
:::

## Jordan标准型*

### 复方阵的相似标准型*

我们首先考虑复数域上的方阵。

::: theorem {@thm:Jordan-form}
设$A$是$n$阶复方阵，$\lambda_1,\cdots,\lambda_s$是$A$的所有互不相同的特征值。则$A$相似于
$$
  \begin{bmatrix}
J_1 & 0 & \cdots & 0\\
0 & J_2 & \cdots & 0\\
\cdots & \cdots & \cdots & \cdots\\
0 & \cdots & 0 & J_s
\end{bmatrix}
$$
这里$J_i$是形如由Jordan块构成的方阵，$m_i^{(1)}+\cdots+m_i^{(t_i)} = \;\;\lambda_i$的代数重数
$$
J_i=\begin{bmatrix}
J_{m^{(1)}_i}(\lambda_i) & 0 & \cdots & 0\\
0 & J_{m^{(2)}_i}(\lambda_i) & \cdots & 0\\
\cdots & \cdots & \cdots & \cdots\\
0 & \cdots & 0 & J_{m^{(t_i)}_{i}}(\lambda_i)
\end{bmatrix}
$$
如上形式称为复方阵$A$在相似变换下的Jordan标准型。
:::

::: proof
由 @prop:root-span，我们有根子空间的直和分解
$$
\mathbb{C} ^n=R_{\lambda_1}\oplus\cdots \oplus R_{\lambda_s}
$$

设$\{\vec{\beta}^{(i)}_{1},\cdots, \vec{\beta}^{(i)}_{m_i}\}$为$R_{\lambda_i}$的一组基。
由 @prop:root-invariant-space，$R_{\lambda_i}$是$A$的不变子空间，我们有
$$
\begin{bmatrix}
A\vec{\beta}^{(i)}_{1} & \cdots & A \vec{\beta}^{(i)}_{m_i}
\end{bmatrix}=\begin{bmatrix}
\vec{\beta}^{(i)}_{1} & \cdots &  \vec{\beta}^{(i)}_{m_i}
\end{bmatrix}B_i
$$
这里$B_i$是$m_i$阶方阵，
是线性映射$A: R_{\lambda_i}\to R_{\lambda_i}$在$R_{\lambda_i}$的这组基下的表示矩阵。
记$P$为$n$阶可逆方阵
$$
P=\begin{bmatrix}
\vec{\beta}^{(1)}_{1} & \cdots &  \vec{\beta}^{(1)}_{m_1} & \cdots\cdots & \vec{\beta}^{(s)}_{1} & \cdots &  \vec{\beta}^{(s)}_{m_s}
\end{bmatrix}
$$
则我们得到相似变换
$$
A=P \begin{bmatrix}
B_1 & 0 & \cdots & 0\\
0 & B_2 & \cdots & 0\\
\cdots & \cdots & \cdots & \cdots \\
0 & \cdots & 0 & B_s
\end{bmatrix} P^{-1}
$$

由 @prop:root-rep-eigen，方阵$B_i$只有一个特征值$\lambda_i$，
其特征多项式为$(\lambda-\lambda_i)^{m_i}$。
由 @prop:eigen-sim-jordan，存在$m_i$阶可逆方阵$Q_i$使得
$$
B_i=Q_i J_i Q_{i}^{-1} \quad \text{其中}\quad  J_i=\begin{bmatrix}
J_{m^{(1)}_i}(\lambda_i) & 0 & \cdots & 0\\
0 & J_{m^{(2)}_i}(\lambda_i) & \cdots & 0\\
\cdots & \cdots & \cdots & \cdots\\
0 & \cdots & 0 & J_{m^{(t_i)}_{i}}(\lambda_i)
\end{bmatrix}
$$
因此我们得到相似变换
$$
A= P \begin{bmatrix}
Q_1 & 0 & \cdots & 0\\
0 & Q_2 & \cdots & 0\\
\cdots & \cdots & \cdots & \cdots\\
0 & \cdots & 0 & Q_s
\end{bmatrix}\begin{bmatrix}
J_1 & 0 & \cdots & 0\\
0 & J_2 & \cdots & 0\\
\cdots & \cdots & \cdots & \cdots\\
0 & \cdots & 0 & J_s
\end{bmatrix}\begin{bmatrix}
Q_1^{-1} & 0 & \cdots & 0\\
0 & Q_2^{-1} & \cdots & 0\\
\cdots & \cdots & \cdots & \cdots\\
0 & \cdots & 0 & Q_s^{-1}
\end{bmatrix} P^{-1}
$$
:::

::: definition
设$A$是$n$阶复方阵，其Jordan标准型如 @thm:Jordan-form 所示。
单项式$(\lambda-\lambda_i)^{m_i^{(j)}}$称为属于特征值$\lambda_i$的一个初等因子。初等因子的全体
$$
\{(\lambda-\lambda_1)^{m_1^{(1)}},\cdots,(\lambda-\lambda_1)^{m_1^{(t_1)}},\cdots,(\lambda-\lambda_s)^{m_s^{(1)}},\cdots,(\lambda-\lambda_s)^{m_s^{(t_s)}}\}
$$
称为$A$的初等因子组。
:::

::: proposition
初等因子组由方阵完全决定。两个方阵相似当且仅当它们具有相同的初等因子组。
:::

::: proof
略。
:::

::: example
考虑方阵
$$
A=\begin{bmatrix}
2 & 1 & 0 & 0 & 0 & 0\\
0 & 2 & 1 & 0 & 0 & 0\\
0 & 0 & 2 & 0 & 0 & 0\\
0 & 0 & 0 & 2 & 0 & 0\\
0 & 0 & 0 & 0 & 3 & 1\\
0 & 0 & 0 & 0 &0 & 3
\end{bmatrix}
\qquad
B=\begin{bmatrix}
2 & 1 & 0 & 0 & 0 & 0\\
0 & 2 & 0 & 0 & 0 & 0\\
0 & 0 & 2 & 1 & 0 & 0\\
0 & 0 & 0 & 2 & 0 & 0\\
0 & 0 & 0 & 0 & 3 & 1\\
0 & 0 & 0 & 0 &0 & 3
\end{bmatrix}
$$
$A$和$B$具有相同的特征多项式$(\lambda-2)^4(\lambda-3)^2$。
上述矩阵已经是Jordan标准型的样子，我们可以读出对应的初等因子组
\[
\begin{aligned}
&\text{$A$ 的初等因子组}=\{(\lambda-2)^3,(\lambda-2),(\lambda-3)^2\}\\
&\text{$B$ 的初等因子组}=\{(\lambda-2)^2,(\lambda-2)^2,(\lambda-3)^2\}
\end{aligned}
\]
$A$和$B$的初等因子组不同，因此$A$与$B$不相似。
:::

### 实方阵的相似标准型*

我们简要说明一下实数域上的Jordan标准型。

一个$n$阶实方阵$A$总是可以通过一个实可逆矩阵$P$相似变换为如下标准形
\[
A=P\begin{bmatrix}
\boxed{\begin{matrix}&&\end{matrix}}\\
&\boxed{\begin{matrix}&&\end{matrix}}\\
&&\ddots&\\
&&&\boxed{\begin{matrix}&&\end{matrix}}
\end{bmatrix}P^{-1}
\]
这里$\boxed{\begin{matrix}&&\end{matrix}}$是如下形式的Jordan块

- 对于$A$的实特征值$\lambda_i$，其Jordan块的形式为
  \[
  \boxed{\begin{matrix}&&\end{matrix}}=
  \begin{bmatrix}
  \lambda_i & 1 & &0\\
  &\lambda_i &\ddots&\\
  &&\ddots&1\\
  0&&&\lambda_i
  \end{bmatrix}
  \]

- 对于$A$的复特征值，其一定是成对出现$\lambda_j=\alpha\pm i\beta$。这对复特征值对应的实Jordan块为
  \[
  \boxed{\begin{matrix}&&\end{matrix}}=
  \begin{bmatrix}
  \begin{bmatrix}
  \alpha&-\beta\\
  \beta&\alpha
  \end{bmatrix}
   & \begin{bmatrix}
  1&0\\
  0&1
  \end{bmatrix}& &0\\
  &\begin{bmatrix}
  \alpha&-\beta\\
  \beta&\alpha
  \end{bmatrix}
   & \begin{bmatrix}
  1&0\\
  0&1
  \end{bmatrix}&\\
  &&\ddots&\begin{bmatrix}
  1&0\\
  0&1
  \end{bmatrix}\\
  0&&&\begin{bmatrix}
  \alpha&-\beta\\
  \beta&\alpha
  \end{bmatrix}
  \end{bmatrix}
  \]

特别地，如果实方阵$A$作为复方阵可以对角化的话，那么存在一个可逆的实矩阵$P$使得
\[
A=P\begin{bmatrix}
\lambda_1&&&&&&0\\
&\lambda_2\\
&&\ddots\\
&&&\lambda_k\\
&&&&\begin{bmatrix}
\alpha_1&-\beta_1\\
\beta_1&\alpha_1
\end{bmatrix}\\
&&&&&\begin{bmatrix}
\alpha_2&-\beta_2\\
\beta_2&\alpha_2
\end{bmatrix}\\
0&&&&&&\ddots
\end{bmatrix}P^{-1}
\]

## Jordan标准型的计算*

给定$n$阶复方阵$A$，通过它的特征多项式可以得到所有不同的特征值$\lambda_1,\cdots,\lambda_s$。
我们可以对特征值$\lambda_i$依次解线性方程组
$$
\begin{cases}
\ker (A-\lambda_i)= \{\vec{x}| ((A-\lambda_i))\vec{x}=0\}\\
\ker (A-\lambda_i)^2= \{\vec{x}| (A-\lambda_i)^2\vec{x}=0\}\\
\vdots\\
\ker (A-\lambda_i)^m= \{\vec{x}| (A-\lambda_i)^m\vec{x}=0\} \\
\vdots
\end{cases}
$$
直到$\ker(A-\lambda_i)^N=\ker (A-\lambda_i)^{N+1}$为止。
由 @prop:block-chain-dim，通过上述空间的维数可以解出$\lambda_i$的根子空间对应的Jordan块的大小，
即$\lambda_i$的初等因子组。由此可以得到$A$的Jordan标准型。
进一步通过上述方程组可以得到对应的可逆相似变换。我们通过例子来具体说明。

::: example {@eg:Jordan-1}
计算$A=\begin{bmatrix}
  3 & 1 & 0 & 1\\
  -1 & 5 & 4 & 1\\
  0 & 0 & 2 & 0\\
  0 & 0 & 0 & 4
  \end{bmatrix}$的Jordan标准型。$A$的特征多项式为
$$
\varphi(\lambda)=\begin{vmatrix}
  \lambda-3 & -1 & 0 & -1\\
  1 & \lambda-5 & -4 & -1\\
  0 & 0 & \lambda-2 & 0\\
  0 & 0 & 0 & \lambda-4
  \end{vmatrix}=(\lambda-2)(\lambda-4)^3
$$
因此$A$有两个不同的特征值$\lambda_1=2, \lambda_2=4$。

$\lambda_1$的代数重数是$1$，因此$\lambda_1$的根子空间是$1$维的，由特征向量张成。由
$$
(A-\lambda_1)\vec{\beta}_{1}=\begin{bmatrix}
  1 & 1 & 0 & 1\\
  -1 & 3 & 4 & 1\\
  0 & 0 & 0 & 0\\
  0 & 0 & 0 & 2
\end{bmatrix}\vec{\beta}_1=\vec{0} \quad \Longrightarrow \quad  \vec{\beta}_1=\begin{bmatrix}
1 \\ -1 \\ 1 \\ 0
\end{bmatrix} \text{且是 $A$ 的特征向量，}
$$
所以$\lambda_{1}$有一个$1$阶Jordan块，贡献一个$A$的特征向量；相应的，$\lambda_{1}$的几何重数是$1$。

$\lambda_2$的代数重数是$3$，因此$\lambda_{2}$的根子空间是$3$维的。解方程
$$
(A-\lambda_2)\vec{x}=\begin{bmatrix}
  -1 & 1 & 0 & 1\\
  -1 & 1 & 4 & 1\\
  0 & 0 & -2 & 0\\
  0 & 0 & 0 & 0
\end{bmatrix}\vec{x}=\vec{0}\quad \Longrightarrow \quad \vec{x}=\begin{bmatrix}
c_1 \\ c_1-c_2 \\ 0 \\ c_2
\end{bmatrix}
$$
解方程
$$
(A-\lambda_2)^2\vec{x}'=\begin{bmatrix}
  0 & 0 & 4 & 0\\
  0 & 0 & -4 & 0\\
  0 & 0 & 4 & 0\\
  0 & 0 & 0 & 0
\end{bmatrix}\vec{x}'=\vec{0}\quad \Longrightarrow \quad \vec{x}'=\begin{bmatrix}
c_1' \\ c_2' \\ 0 \\ c_3'
\end{bmatrix}
$$

$\ker (A-\lambda_2)^2$的维数是$3$，已经得到$\lambda_{2}=4$的根子空间。由
$$
\dim \ker (A-\lambda_2)=2\qquad \dim \ker (A-\lambda_2)^2=3
$$
所以$\lambda_2$有一个$2$阶Jordan块，一个$1$阶Jordan块，贡献两个$A$的特征向量；相应的，
$\lambda_{2}$的几何重数是$2$。

因此$A$的Jordan标准型可以写为
$$
\begin{bmatrix}
2 & 0 & 0 & 0\\
0 & 4 & 1 & 0\\
0 & 0 & 4 & 0\\
0 & 0 & 0 & 4
\end{bmatrix}
$$

通过上述方程组的解，可以把$\lambda_{2}$的根子空间的循环子空间分解找出来。

取向量$\vec{\alpha}_1$使得
$
\begin{cases}\vec{\alpha}_1\in\ker (A-\lambda_2)^2,\;\;
\vec{\alpha}_1\notin \ker (A-\lambda_2)\\
\ker (A-\lambda_2)^2= \text{Span}\{\vec{\alpha_1}\} \oplus \ker (A-\lambda_2)
\end{cases}
$
例如取$\vec{\alpha}_1=\begin{bmatrix}
0 \\ 1 \\ 0 \\ 0
\end{bmatrix}$，
然后取向量$\vec{\alpha}_2$使得
$
\begin{cases}
\vec{\alpha}_2\in\ker (A-\lambda_2)\\
\ker(A-\lambda_2)=\text{Span}\{(A-\lambda_2)\vec{\alpha}_1,\vec{\alpha}_2\}
\end{cases}
\quad$
例如取$\vec{\alpha}_2=\begin{bmatrix}
0 \\ -1 \\ 0 \\ 1
\end{bmatrix}$

则$\Big\{(A-\lambda_2)\vec{\alpha}_1,\vec{\alpha}_1,\vec{\alpha}_2\Big\}$构成$\lambda_2$
的根子空间的一组基，其循环子空间分解为
\[
\begin{aligned}
R_{\lambda_2} &= C_{\vec{\alpha_{1}}} \; \oplus \;C_{\vec{\alpha_{2}}} \\
&= \text{Span}
\{(A-\lambda_2)\vec{\alpha}_1,\vec{\alpha}_1\} \; \oplus \;
\text{Span} \{\vec{\alpha_{2}}\}
\end{aligned}
\]
且$(A-\lambda_2)\vec{\alpha}_1$，$\vec{\alpha}_2$是$\lambda_2$的两个特征向量。

由构造，按照对应顺序，则有
$$
A \; \begin{bmatrix}
\vec{\beta}_1 & (A-\lambda_2)\vec{\alpha}_1 & \vec{\alpha}_1  & \vec{\alpha}_2
\end{bmatrix}=\begin{bmatrix}
\vec{\beta}_1 & (A-\lambda_2)\vec{\alpha}_1 & \vec{\alpha}_1  & \vec{\alpha}_2
\end{bmatrix} \begin{bmatrix}
2 & 0 & 0 & 0\\
0 & 4 & 1 & 0\\
0 & 0 & 4 & 0\\
0 & 0 & 0 & 4
\end{bmatrix}
$$
记可逆矩阵$P$为
$$
P=\begin{bmatrix}
\vec{\beta}_1 & (A-\lambda_2)\vec{\alpha}_1 & \vec{\alpha}_1  & \vec{\alpha}_2
\end{bmatrix}=\begin{bmatrix}
1 & 1 & 0 & 0\\
-1 & 1 & 1 & -1\\
1 & 0 & 0 & 0\\
0 & 0 & 0 & 1
\end{bmatrix}
$$
得到$\;A$与$A$的Jordan标准型之间的相似变换
$$
A=P\begin{bmatrix}
2 & 0 & 0 & 0\\
0 & 4 & 1 & 0\\
0 & 0 & 4 & 0\\
0 & 0 & 0 & 4
\end{bmatrix} P^{-1}
$$
:::

::: example
计算$A=\begin{bmatrix}
   2& 1 & -1 & 8 & -3\\
   0&  2 & 0 & 7 & 5\\
   0& 0 & 2 & 7 & 5\\
   0 & 0 & 0 & 2 & 0\\
   0& 0 & 0 & 0 & 2
  \end{bmatrix}$的Jordan标准型。$A$为上三角方阵，只有一个特征值$\lambda_1=2$，代数重数是$5$。

解方程
$$
  (A-\lambda_1)\vec{x}=\begin{bmatrix}
   0& 1 & -1 & 8 & -3\\
   0&  0 & 0 & 7 & 5\\
   0& 0 & 0 & 7 & 5\\
   0 & 0 & 0 & 0 & 0\\
   0& 0 & 0 & 0 & 0
\end{bmatrix}\vec{x}=\vec{0}
\quad \Longrightarrow \quad \vec{x}=\begin{bmatrix}
   c_1 \\ c_2\\ c_2+ 61 c_3 \\ 5 c_3 \\ -7 c_3
  \end{bmatrix}
$$

计算得$(A-\lambda_1)^2=\mathbf{0}$，解方程
$(A-\lambda_1)^2\vec{x}=\vec{0}$，其解为整个空间，即$\ker (A-\lambda_1)^2=$整个空间。因此
$$
\dim \ker (A-\lambda_1)=3\qquad \dim \ker (A-\lambda_1)^2=5
$$
由此知$\lambda_1$有两个$2$阶Jordan块，一个$1$阶Jordan块，贡献三个$A$的特征向量；相应的，
$\lambda_1$的几何重数是$3$。

取两个向量使得
$$
\begin{cases}\vec{\alpha}_1,\vec{\alpha}_2\in\ker (A-\lambda_1)^2,\;\;
\vec{\alpha}_1,\vec{\alpha}_2 \notin \ker (A-\lambda_1)\\
\ker (A-\lambda_1)^2= \text{Span}\{\vec{\alpha_1}, \vec{\alpha_2} \} \oplus \ker (A-\lambda_1)
\end{cases}\qquad \text{例如取}\quad \vec{\alpha}_1=\begin{bmatrix}
0 \\ 1 \\ 0 \\ 0 \\ 0
\end{bmatrix}\quad
\vec{\alpha}_2=\begin{bmatrix}
0 \\ 0 \\ 0 \\ 0 \\ 1
\end{bmatrix}
$$
然后取一个向量$\vec{\alpha}_3$使得
$$
\begin{cases}
\vec{\alpha}_3\in \ker(A-\lambda_1)\\
\ker(A-\lambda_1)=\operatorname{Span}\{(A-\lambda_1)\vec{\alpha}_1,(A-\lambda_1)\vec{\alpha}_2,\vec{\alpha}_3\}
\end{cases}\qquad \text{例如取}\qquad \vec{\alpha}_3=\begin{bmatrix}
0 \\ 0 \\ 61 \\ 5 \\ -7
\end{bmatrix}
$$

则
$\big\{(A-\lambda_1)\vec{\alpha}_1,\; \vec{\alpha}_1,(A-\lambda_1)\vec{\alpha}_2, \;\vec{\alpha}_2, \;\vec{\alpha}_3\big\}$
构成$\lambda_1$的根子空间（即整个空间）的一组基，其循环子空间分解为
\[
\begin{aligned}
R_{\lambda_1} &= C_{\vec{\alpha_{1}}} \oplus C_{\vec{\alpha_{2}}} \oplus C_{\vec{\alpha_{3}}}\\
&= \text{Span} \{(A-\lambda_1)\vec{\alpha}_1,\; \vec{\alpha}_1\}  \oplus
\text{Span} \{(A-\lambda_1)\vec{\alpha}_2,\; \vec{\alpha}_2\} \oplus
\text{Span} \{\vec{\alpha}_3\}
\end{aligned}
\]
且$(A-\lambda_1)\vec{\alpha}_1$、$(A-\lambda_1)\vec{\alpha}_2$、
$\vec{\alpha}_3$是$\lambda_1$的三个特征向量。

由构造，按照对应顺序，则有
$$
A\begin{bmatrix}
(A-\lambda_1)\vec{\alpha}_1 & \vec{\alpha}_1 & (A-\lambda_1)\vec{\alpha}_2 & \vec{\alpha}_2 & \vec{\alpha}_3
\end{bmatrix}=\begin{bmatrix}
(A-\lambda_1)\vec{\alpha}_1 & \vec{\alpha}_1 & (A-\lambda_1)\vec{\alpha}_2 & \vec{\alpha}_2 & \vec{\alpha}_3
\end{bmatrix}\begin{bmatrix}
2 & 1 & 0 & 0 & 0\\
0 & 2 & 0 & 0 & 0\\
0 & 0 & 2 & 1 & 0\\
0 & 0 & 0 & 2 & 0\\
0 & 0 & 0 & 0 & 2
\end{bmatrix}
$$
记可逆矩阵$P$为
$$
P=\begin{bmatrix}
(A-\lambda_1)\vec{\alpha}_1 & \vec{\alpha}_1 & (A-\lambda_1)\vec{\alpha}_2 & \vec{\alpha}_2 & \vec{\alpha}_3
\end{bmatrix}=\begin{bmatrix}
1 & 0 & -3 & 0 & 0 \\
0 & 1 & 5 & 0 & 0\\
0 & 0 & 5 & 0 & 61 \\
0 & 0 & 0 & 0 & 5\\
0 & 0 & 0 & 1 & -7
\end{bmatrix}
$$
得到$A$与$A$的Jordan标准型之间的相似变换
$$
A=P \begin{bmatrix}
2 & 1 & 0 & 0 & 0\\
0 & 2 & 0 & 0 & 0\\
0 & 0 & 2 & 1 & 0\\
0 & 0 & 0 & 2 & 0\\
0 & 0 & 0 & 0 & 2
\end{bmatrix} P^{-1}
$$
:::
