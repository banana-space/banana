---
title: 一些例子
---

## 可逆矩阵开根*

::: proposition
设$A$是$n$阶可逆复方阵。则存在可逆方阵$B$使得$A=B^2$。
:::

我们首先考虑$A=J_n(\lambda)$是一个Jordan块的情况，即
$$
  A=\lambda I_n + N \qquad  N=J_n(0)=
\begin{bmatrix}
0 & 1 & &0\\
&0 &\ddots&\\
&&\ddots&1\\
0&&&0
\end{bmatrix}
$$

我们把$A$写成$A=\lambda(I_n+\lambda^{-1}N)$。利用函数$(1+x)^{1/2}$在$x=0$处的Taylor展开
$$
(1+x)^{1/2}=1+\sum_{k=1}^\infty \frac{\frac{1}{2}\left(\frac{1}{2}-1\right)\cdots \left(\frac{1}{2}-k+1\right)}{k!}x^k
$$
我们得到级数恒等式
$$
1+x=\left(1+\sum_{k=1}^\infty \frac{\frac{1}{2}\left(\frac{1}{2}-1\right)\cdots \left(\frac{1}{2}-k+1\right)}{k!}x^k\right)^2
$$

代入矩阵$x=\lambda^{-1}N$并利用$N^n=0$，我们得到
$$
I_n+ \lambda^{-1}N=\left(I_n+\sum_{k=1}^{n-1} \frac{\frac{1}{2}\left(\frac{1}{2}-1\right)\cdots \left(\frac{1}{2}-k+1\right)}{k!}\lambda^{-k}N^k\right)^2
$$
因此我们可以取
$$
B=\sqrt{\lambda}\left(I_n+\sum_{k=1}^{n-1} \frac{\frac{1}{2}\left(\frac{1}{2}-1\right)\cdots \left(\frac{1}{2}-k+1\right)}{k!}\lambda^{-k}N^k\right)
$$

对于一般的情况，我们可以作相似变换
$$
A=P \begin{bmatrix}
J_{m_1}(\lambda_1) &  & 0\\
 & \cdots &  \\
0& \cdots  & J_{m_k}(\lambda_k)
\end{bmatrix} P^{-1}
$$
这里每个$J_{m_i}(\lambda_i)$都是Jordan块，因此可以如上构造$B_i$使得$J_{m_i}(\lambda_i)=B_i^2$。取
$$
B=P \begin{bmatrix}
B_1 &  & 0\\
 & \cdots &  \\
0& \cdots  & B_k
\end{bmatrix} P^{-1}
$$
则满足$B^2=A$。

::: remark*
类似的方法可以证明，对于$n$阶可逆复方阵和正整数$k$，存在可逆方阵$B$使得$A=B^k$。
:::

## 指数矩阵*

::: proposition
设$A$是$n$阶复方阵。则如下矩阵级数
$$
e^{A}:=\sum_{k=0}^\infty \frac{A^k}{k!}=I_n+A+\frac{A^2}{2!}+\cdots+\frac{A^m}{m!}+\cdots
$$
收敛到一个可逆矩阵，并且
$$
\det (e^A)= e^{\operatorname{Tr} A}
$$
:::

我们同样也是先考虑$A=J_n(\lambda)$是一个Jordan块的情况，即
$$
  A=\lambda I_n + N \qquad  N=J_n(0)=
\begin{bmatrix}
0 & 1 & &0\\
&0 &\ddots&\\
&&\ddots&1\\
0&&&0
\end{bmatrix}
$$
利用$N^n=0$易知$e^{A}$收敛到（计算留作练习）
\[
\begin{aligned}
e^{A}=
&e^{\lambda I_n}e^{N}
=e^{\lambda}\left(I_n+N+\frac{N^2}{2!}\cdots+ \frac{N^{n-1}}{(n-1)!}\right)\\
=&\begin{bmatrix}
e^{\lambda} & e^{\lambda} & \cdots  & \cdots& \frac{e^{\lambda}}{(n-2)!} & \frac{e^{\lambda}}{(n-1)!}\\
& e^{\lambda}& \cdots &\cdots & \cdots&\frac{e^{\lambda}}{(n-2)!}\\
&&\ddots\\
&&&\ddots\\
&&&& e^{\lambda} &e^{\lambda}\\
0&&&&&e^{\lambda}
\end{bmatrix}
\end{aligned}
\]
此时有$\det(e^A)=e^{n\lambda}=e^{\operatorname{Tr} A}$。

对于一般的情况，我们可以作相似变换
$$
A=P \begin{bmatrix}
J_{m_1}(\lambda_1) &  & 0\\
 & \cdots &  \\
0& \cdots  & J_{m_k}(\lambda_k)
\end{bmatrix} P^{-1}
$$
则
$$
e^A=P \begin{bmatrix}
e^{J_{m_1}(\lambda_1)} &  & 0\\
 & \cdots &  \\
0& \cdots  & e^{J_{m_k}(\lambda_k)}
\end{bmatrix} P^{-1}
$$
并且
$$
\det (e^A)=e^{m_1\lambda_1+\cdots+m_k \lambda_k}=e^{\operatorname{Tr} A}
$$
成立。由于$e^{\operatorname{Tr} A}\neq 0$，$e^{A}$是可逆矩阵。实际上，$e^A$的逆易知是$e^{-A}$。

::: example
考虑方阵
$$
A=\begin{bmatrix}
 3 & -2 & 2\\
 0 & 1 & 2\\
 0 & -1/2 &3
\end{bmatrix}
$$
可以验证它相似于如下Jordan标准型
$$
A= P \begin{bmatrix}
 3 & 0 & 0\\
 0 & 2 & 1\\
 0 & 0 & 2
\end{bmatrix} P^{-1}\qquad \text{这里}\qquad P=\begin{bmatrix}
1 & 2 & 0\\
0 & 2 & 0\\
0 & 1 & 1
\end{bmatrix}\quad
P^{-1}=\begin{bmatrix}
1 & -1 & 0\\
0 & 1/2 & 0\\
0 & -1/2 & 1
\end{bmatrix}
$$
$A$有两个Jordan块。因此
$$
e^A= P \begin{bmatrix}
e^3 & 0 & 0\\
0 & e^2 & e^2 \\
0 & 0 & e^2
\end{bmatrix} P^{-1}=\begin{bmatrix}
1 & 2 & 0\\
0 & 2 & 0\\
0 & 1 & 1
\end{bmatrix} \begin{bmatrix}
e^3 & 0 & 0\\
0 & e^2 & e^2 \\
0 & 0 & e^2
\end{bmatrix}
\begin{bmatrix}
1 & -1 & 0\\
0 & 1/2 & 0\\
0 & -1/2 & 1
\end{bmatrix}=\begin{bmatrix}
e^3 & -e^3 & 2 e^2\\
0 & 0 & 2e^2\\
0 & -e^2/2 & 2e^2
\end{bmatrix}
$$
:::

## 极小多项式*

由Cayley–Hamilton定理，
我们知道$n$阶方阵$A$的特征多项式$\varphi(\lambda)=\det(\lambda I_n-A)$是$A$的一个化零多项式，即满足
$$
\varphi(A)=0
$$

实际上满足$f(A)=0$的多项式，即$A$的化零多项式中，特征多项式$\varphi(\lambda)$并不一定是次数最低的。
例如对于方阵
$$
A=\begin{bmatrix}
 2 & 1 & 0 & 0\\
 0 & 2 & 0 & 0\\
 0 & 0 & 3 & 0\\
 0 & 0 & 0 & 3
\end{bmatrix} \qquad \varphi(\lambda)=(\lambda-2)^2(\lambda-3)^2
$$
容易验证$A$满足一个3次代数方程
$$
(A-2 I_4)^2(A-3 I_4)=0
$$

::: definition
方阵$A$的所有非平凡化零多项式中次数最小的首一多项式称为$A$的极小多项式，记为$d_A(\lambda)$。
这里首一多项式指的是多项式最高次项的系数是$1$，即$d_A(\lambda)=\lambda^d+\cdots$。
:::

由Cayley–Hamilton定理知$A$有化零多项式，因此$A$的极小多项式是存在的且次数不超过$A$的阶数。
另一方面，$A$的极小多项式是唯一的。假设$d_A(\lambda)$和$d'_A(\lambda)$均为$A$的极小多项式。
则$d_A(\lambda)$和$d'_A(\lambda)$的次数相同，
并且$d_A(\lambda)-d'_A(\lambda)$是次数更低的化零多项式。
由极小多项式的次数最小性，说明$d_A(\lambda)-d'_A(\lambda)=0$是平凡的，
即$d_A(\lambda)=d'_A(\lambda)$。

首先我们注意到，如果$\lambda_0$不是$A$的特征值，则线性方程组
$$
(A-\lambda_0 I_n)\vec{x}=0
$$
只有零解，即$A-\lambda_0 I_n$是可逆矩阵。
因此如果$f(\lambda)$是$A$的化零多项式且$\lambda_0$是$f$的一个根，
即有$f(\lambda)=(\lambda-\lambda_0)g(\lambda)$，则
$$
f(A)=(A-\lambda_0 I_n)g(A)=0\quad \stackrel{\text{左乘$(A-\lambda_0 I_n)^{-1}$}}{\Longrightarrow} \qquad g(A)=0
$$
故$g(\lambda)$也是$A$的化零多项式且次数比$f$低。这说明$d_A(\lambda)$的根只包含$A$的特征值。

::: example {@eg:jordan-min-pol}
设$A=J_n(\lambda_0)$是$n$阶Jordan块，则$A$的最小多项式为
$$
d_A(\lambda)=(\lambda-\lambda_0)^n
$$

实际上，$A$只有一个特征值$\lambda_0$，其最小多项式形如$(\lambda-\lambda_0)^m$。由于
$$
N=A-\lambda_0 I_n=\begin{bmatrix}
0 & 1 & &0\\
&0 &\ddots&\\
&&\ddots&1\\
0&&&0
\end{bmatrix}
$$
满足$N^{n-1}\neq 0, N^n=0$，我们得到$m=n$。此时$A$的极小多项式等于特征多项式。
:::

::: proposition
设$A$是$n$阶复方阵，$\lambda_1,\cdots,\lambda_s$是$A$的所有互不相同的特征值。则$A$的最小多项式为
$$
d_A(\lambda)=(\lambda-\lambda_1)^{d_1}\cdots (\lambda-\lambda_s)^{d_s}
$$
其中$d_i$是特征值$\lambda_i$的Jordan块的最大阶数，
即$(\lambda-\lambda_i)^{d_i}$是特征值$\lambda_i$最高次数的初等因子。
:::

::: proof
$A$相似于Jordan标准型
$$
  A= P  \begin{bmatrix}
J_1 & 0 & \cdots & 0\\
0 & J_2 & \cdots & 0\\
\cdots & \cdots & \cdots & \cdots\\
0 & \cdots & 0 & J_s
\end{bmatrix} P^{-1}
$$

对任何多项式$f(\lambda)$，我们有
$$
f(A)=P  \begin{bmatrix}
f(J_1) & 0 & \cdots & 0\\
0 & f(J_2) & \cdots & 0\\
\cdots & \cdots & \cdots & \cdots\\
0 & \cdots & 0 & f(J_s)
\end{bmatrix} P^{-1}
$$
因此$f(A)=0$当且仅当对每个$J_i$均有$f(J_i)=0$。而每个$J_i$是形如由Jordan块构成的方阵
$$
J_i=\begin{bmatrix}
J_{m^{(1)}_i}(\lambda_i) & 0 & \cdots & 0\\
0 & J_{m^{(2)}_i}(\lambda_i) & \cdots & 0\\
\cdots & \cdots & \cdots & \cdots\\
0 & \cdots & 0 & J_{m^{(t_i)}_{i}}(\lambda_i)
\end{bmatrix}
$$
因此$f(J_i)=0$当且仅当对每个$f(J_{m_i^{(k)}}(\lambda_i))=0$。由 @eg:jordan-min-pol 易知
$$
d_i=\max\{m_i^{(1)},m_i^{(2)},\cdots,m_i^{(t_i)}\}
$$
:::

::: example
方阵
$A=\begin{bmatrix}
 2 & 1 & 0 & 0\\
 0 & 2 & 0 & 0\\
 0 & 0 & 3 & 0\\
 0 & 0 & 0 & 3
\end{bmatrix} $
的极小多项式为$(\lambda-2)^2(\lambda-3)$。
:::

## Google PageRank*

PageRank是Google搜索引擎用来排名网页相关性和重要性的算法。
其核心思想是一个网页的重要性与其链接到的网页的重要性的数量和质量有关。
基本数学原理是通过网页数据得到一个大型的矩阵，然后通过求解最大特征值的特征向量得到排名数据。

我们将互联网看作一个巨大的有向图，每个节点代表一个网页，每条有向边代表一个链接，
边的方向表示链接的方向。

```tikz
\usetikzlibrary{arrows}
\begin{tikzpicture}[->,>=stealth',shorten >=1pt,auto,node distance=3cm,
  thick,main node/.style={circle,fill=blue!20,draw,font=\sffamily\Large\bfseries}]
  \node[main node] (1) {A};
  \node[main node] (2) [right of=1] {B};
  \node[main node] (3) [below of=2] {C};
  \node[main node] (4) [below of=1] {D};
  \path[every node/.style={font=\sffamily\small}]
    (1) edge node [right] {} (2)
        edge node [right] {} (3)
    (2) edge node [right] {} (3)
    (3) edge node [left] {} (1)
        edge node [left] {} (4)
    (4) edge node [left] {} (1);
\end{tikzpicture}
```

上图表示有4个网页 A、B、C、D，链接关系如下：

- A 链接到 B 和 C

- B 链接到 C

- C 链接到 A 和 D

- D 链接到 A

PageRank算法将给每个网页$i$匹配一个PageRank值$r_i$，$r_i$的值越大表示其越重要。
其基本思想是这个PageRank值是通过网络关系来体现的：如果更多更重要的网页关联到某个网页，
那么这个网页本身也更重要。具体而言，引入链接关系矩阵$M=(m_{ij})$：

- 如果网页$j$链接到网页$i$，则
  $$
  m_{ij} = \frac{1}{L(j)}
  $$
  其中 $L(j)$ 是所有从网页$j$链出的边数。

- 如果网页 $j$ 没有链接到网页$i$，则$m_{ij}=0$

$m_{ij}$表现了从网页$j$链接到网页$i$的权重。例如对上图所示4个网络，其链接关系矩阵为
$$
M=\begin{bmatrix}
 0  &  0 &   1/2  &  1  \\
 1/2  & 0 &   0  &  0  \\
1/2 &  1 &   0 &   0  \\
 0  &  0  &  1/2 &  0
\end{bmatrix}
$$
这里我们用$i=1,2,3,4$来分别表示网页 A、B、C、D。例如

- $m_{13}=1/2$，因为网页 C 链接到网页 A，且网页 C 的出链数量为 2（链接到A和D）。

- $m_{21}=1/2$，因为网页 A 链接到网页 B，且网页 A 的出链数量为 2（链接到B和C）。

- $m_{32}=1$，因为网页 B 链接到网页 C，且网页 B 的出链数量为 1（链接到C）。

- $m_{23}=0$，因为没有链接从网页C链接到网页B。

PageRank算法用来计算每个网页PageRank权重$r(i)$的方法为：
一个网页的PageRank值等于所有链接到它的网页的PageRank值的加权平均，权重为链接概率。具体公式为：
$$
r_i=\sum_{j}m_{ij}r_j
$$

我们把所有网页的PageRank权重$\{r_i\}$组合为列向量$\vec{r}$，则上述方程可以写成矩阵形式
$$
M \vec{r}=\vec{r}
$$
因此寻找网页的PageRank值即为求解链接关系矩阵$M$属于特征值$1$的特征向量。

上述4个网页的例子中，求解$M \vec{r}=\vec{r}$可以得到归一化的PageRank值
$$
\vec{r}=\begin{bmatrix}
1/3 \\ 1/6 \\ 1/3 \\ 1/6
\end{bmatrix}
$$
因此$A,C$重要性最高，$B,D$次之。这个结果和图示是相符合的。

### $M$是否有特征值$1$？*

首先观察到每个网页链出的总权重是$1$，即对每个$j$有
$$
\sum_i m_{ij}=1
$$
写成矩阵的形式为
$$
M^{T} \begin{bmatrix}
1 \\ 1 \\ \vdots \\ 1
\end{bmatrix}=\begin{bmatrix}
1 \\ 1 \\ \vdots \\ 1
\end{bmatrix}
$$
这表明$M$的转置$M^{T}$有一个属于特征值$1$的特征向量。
由于$M^T$和$M$具有相同的特征多项式，这说明$M$一定有特征值$1$，因此方程 $M \vec{r}=\vec{r}$是有解的。

### $M$的属于特征值$1$的特征子空间$V_1$是否是$1$维的？*

如果特征子空间$V_1$是$1$维的话，那么得到唯一的一个PageRank向量$\vec{r}$（不同特征向量差一个系数，
可以通过设置归一化条件$\sum_i r_i=1$把这个系数固定）。
然而实际上很容易找到$\dim V_1>1$的例子，这给用PageRank算法来准确地衡量网页的重要性造成了困难。

为了解决这个困难，PageRank 算法引入了一个阻尼因子 $d$（通常设置为 0.85）。
阻尼因子表示用户有$d$的概率点击链接，$1-d$的概率随机跳转到任意一个网页。改进后的链接关系矩阵为
$$
\widehat M= dM+(1-d)S
$$
这里$S$的每个矩阵元都是$1/n$（$n$是网页的总个数）
$$
S=\begin{bmatrix}
1/n & 1/n & \cdots & 1/n\\
1/n & 1/n & \cdots & 1/n\\
\cdots & \cdots & \cdots & \cdots \\
1/n & 1/n & \cdots & 1/n\\
\end{bmatrix}
$$
$\widehat M$的每一列加起来仍然是$1$，因此仍然有特征值$1$。改进的PageRank计算公式为
$$
\widehat M \vec{r}=\vec{r}
$$

::: proposition {@prop:pagerank-1}
$\widehat M $的特征子空间$V_1$是1维的。
:::

::: proof
首先观察到$\widehat M$的每个矩阵元$\hat m_{ij}>0$。假设$\vec{r}\in V_1$是任意一个特征向量，即满足
$$
\widehat M \vec{r}=\vec{r}
$$
我们说明$\vec{r}$的每个分量不可能既有正数又有负数。实际上，假如$r_i$中既有正数也有负数。
由于$\hat m_{ij}>0$，我们有
$$
|\sum_{j}\hat m_{ij}r_j|<\sum_{j}\hat m_{ij}|r_j|
$$

由特征向量方程$r_i=\sum_{j}\hat m_{ij}r_j$，得到
$$
|r_i|=|\sum_{j}\hat m_{ij}r_j|<\sum_{j}\hat m_{ij}|r_j|
$$
两边对$i$求和，并利用$\sum_i \hat m_{ij}=1$，我们得到
$$
\sum_i |r_i|<\sum_{i,j}\hat m_{ij}|r_j|=\sum_j|r_j|
$$
矛盾。这说明$\vec{r}$的每个分量不可能既有正数又有负数。

现在假设$\dim V_1>1$。设$\vec{r}$和$\vec{s}$是$V_1$中两个线性无关的特征向量。
不妨设$\vec{r},\vec{s}$的分量都是非负的，因此$\sum_i r_i>0, \sum_i s_i>0$。取非零实数$a,b$使得
$$
a(\sum_i r_i)+ b(\sum_i s_i)=0
$$

考虑线性组合$a\vec{r}+b\vec{s}$。
由于$a\vec{r}+b\vec{s}\in V_1$，上述讨论知它每个分量不可能既有正数又有负数。
由$a,b$的取法，向量$a\vec{r}+b\vec{s}$的所有分量求和是$0$，因此必然有$a\vec{r}+b\vec{s}=0$。
这与$\vec{r},\vec{s}$线性无关的假设矛盾。因此假设$\dim V_1>1$不成立，故$\dim V_1=1$。
:::

这个命题说明，在考虑阻尼因子后，用改进的算法的确得到一个确定的PageRank向量。
可以进一步证明（见习题），$\widehat M $的根子空间$R_1$也是$1$维的，即$V_1=R_1$。

### 如何计算PageRank向量？*

实际应用中网页的数量是非常多的，改进的链接关系矩阵$\widehat M$是一个巨大的矩阵。
如何有效的计算PageRank向量$\vec{r}$？这里关键的一个性质是如下命题。

::: proposition {@prop:pagerank-2}
设$\lambda$是改进的链接关系矩阵$\widehat M$的一个特征值，则$|\lambda|\leq 1$。
:::

::: proof
设复列向量$\vec{\alpha}\in \mathbb{C} ^n$是属于特征值$\lambda$的一个特征向量：
$\widehat M \vec{\alpha}=\lambda \vec{\alpha}$。考虑如下行向量
$$
E_{\vec{\alpha}}=\begin{bmatrix}
b_1 & b_2 & \cdots & b_n
\end{bmatrix}
\quad \text{这里}\quad b_i=\begin{cases}
\frac{\bar \alpha_i}{|\alpha_i|} & \alpha_i\neq 0\\
0 & \alpha_i=0
\end{cases}
$$

记
$$
E_{\vec{\alpha}}\widehat M=\begin{bmatrix}
 k_1 & k_2 & \cdots & k_n
\end{bmatrix}
$$
由于$\sum_{i}\hat m_{ij}=1$并且每个$\hat m_{ij}>0$知
$$
|k_j|=|\sum_i b_i \hat m_{ij}|\leq \sum_{i}\hat m_{ij}=1
$$

由方程$\widehat M \vec{\alpha}=\lambda \vec{\alpha}$得到
$E_{\vec{\alpha}}\widehat M \vec{\alpha}=\lambda E_{\vec{\alpha}}\vec{\alpha}$，即
$$
\sum_i k_i \alpha_i =\lambda \sum_i |\alpha_i|
$$
因此
$$
\lambda=\frac{\sum\limits_i k_i \alpha_i}{\sum\limits_i |\alpha_i|} \quad \Longrightarrow \quad |\lambda|\leq \frac{\sum\limits_i |k_i| |\alpha_i|}{\sum\limits_i |\alpha_i|} \leq 1
$$
:::

可以进一步证明，满足$|\lambda|=1$的特征值只有$\lambda=1$（见习题）。
由 @prop:pagerank-1 和 @prop:pagerank-2 以及Jordan标准型知，改进的链接关系矩阵$\widehat M$相似于
$$
\widehat M= P \begin{bmatrix}
1 &  0 & \cdots  &  0 \\
0 &  J_{m_1}(\lambda_1) & \cdots & \cdots \\
\cdots &  \cdots & \cdots & \cdots \\
0 & \cdots & \cdots & J_{m_k}(\lambda_k)\\
\end{bmatrix} P^{-1}
$$
这里Jordan块$J_{m_i}(\lambda_i)$ 对应的特征值$\lambda_i$均满足$|\lambda_i|<1$。
对于这样的Jordan块，可以证明（见习题）
$$
\lim_{N\to \infty} J_{m_i}(\lambda_i)^N=0
$$

因此
$$
\lim_{N\to \infty} \widehat M^N=\lim_{N\to \infty}  P \begin{bmatrix}
1 &  0 & \cdots  &  0 \\
0 &  J_{m_1}(\lambda_1)^N & \cdots & \cdots \\
\cdots &  \cdots & \cdots & \cdots \\
0 & \cdots & \cdots & J_{m_k}(\lambda_k)^N\\
\end{bmatrix} P^{-1}= P \begin{bmatrix}
1 &  0 & \cdots  &  0 \\
0 &  0 & \cdots & \cdots \\
\cdots &  \cdots & \cdots & \cdots \\
0 & \cdots & \cdots & 0\\
\end{bmatrix} P^{-1}
$$

设$P$的列向量为
$$
P= \begin{bmatrix}
\vec{\beta}_1 & \vec{\beta}_2 & \cdots & \vec{\beta}_n
\end{bmatrix}
$$
由构造知$\vec{\beta}_1$是特征值$1$的特征向量。我们得到
$$
\lim_{N\to \infty} \widehat M^N=\begin{bmatrix}
\vec{\beta}_1 & 0 & \cdots & 0
\end{bmatrix} P^{-1}
$$

现在取一个初始向量$\vec{r}_0$，设
$$
P^{-1}\vec{r}_0=\begin{bmatrix}
a_1 \\ a_2 \\ \cdots \\ a_n
\end{bmatrix}
$$
并且$a_1\neq 0$。则
$$
\lim_{N\to \infty} \widehat M^N \vec{r}_0= a_1 \beta_1
$$
收敛到特征值$1$的一个特征向量！

这给出了如下计算 PageRank向量$\vec{r}$的算法：取初始向量
$$
\vec{r}_0=\begin{bmatrix}
1/n \\ 1/n \\ \vdots \\ 1/n
\end{bmatrix}
$$
即初始时把所有网页的PageRank值都设置为$1/n$。然后开始迭代计算
\[
\begin{aligned}
\vec{r}_1&=\widehat M \vec{r}_0\\ \vec{r}_2&=\widehat M\vec{r}_1=\widehat M^2\vec{r}_0\\
&\vdots \\
\vec{r}_N&= \widehat M^N \vec{r}_0
\end{aligned}
\]

注意到
\[
\begin{aligned}
\begin{bmatrix}
1 & 1 & \cdots & 1
\end{bmatrix} \vec{r}_k
=&\begin{bmatrix}
1 & 1 & \cdots & 1
\end{bmatrix} \widehat M \vec{r}_{k-1}\\
=&\begin{bmatrix}
1 & 1 & \cdots & 1
\end{bmatrix} \vec{r}_{k-1}\\
=&\cdots\\
=&\begin{bmatrix}
1 & 1 & \cdots & 1
\end{bmatrix} \vec{r}_0=1
\end{aligned}
\]
因此每个迭代的向量$\vec{r}_k$的所有分量的和都是$1$，即都是归一化的。
当$N$充分大时，多次迭代得到的向量$\vec{r}_N$即给出了PageRank向量$\vec{r}$的近似值。
