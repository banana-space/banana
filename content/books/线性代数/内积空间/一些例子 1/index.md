---
title: 一些例子
notices:
  - name: 问题
    items:
      - '“Pauli矩阵与自旋”一节末尾的 $\text{Spin}(3,1)=SL^*(2,\mathbb{C})$ 似乎不成立：$\text{Spin}(3,1)$ 通常同构于 $SL(2,\mathbb{C})$，而 $\det A=-1$ 的矩阵 $A=iB$（$B\in SL(2,\mathbb{C})$）与 $B$ 给出相同的变换 $g_A=g_B$。'
---

## 极分解*

我们知道一个复数$z\in \mathbb{C} $可以写成
$$
z=re^{i\theta}
$$
这里$r\geq 0$表示$z$的长度，$e^{i\theta}$的模长为1。$(r,\theta)$称为复平面的极坐标。

$n$阶复方阵也可以作类似的分解。

::: proposition
设$A$是$n$阶复方阵。
则存在$n$阶半正定厄米方阵$R$（或$\tilde R$）和$n$阶酉矩阵$\Theta$（或$\tilde \Theta$）使得
$$
A=R\Theta\quad (=\tilde \Theta \tilde R)
$$
其中$R$（或$\tilde R$）由$A$唯一确定。这个称为矩阵的极分解。
:::

::: proof
设$A=U\Sigma \bar V^T$是$A$的奇异值分解。则
$$
A=U\Sigma \bar U^T U \bar V^T
$$
取$R=U\Sigma \bar U^T, \Theta=U \bar V^T$即满足要求。

另一方面
$$
A\bar A^T=R\bar R^T=R^2
$$
由 @prop:square-root-complex 知$R=\sqrt{A\bar A^T}$是唯一确定的。
:::

## Moore–Penrose逆* {@sec:Moore–Penrose}

在复数域的情形，一个$m\times n$矩阵$A$的广义逆$A^-$也是定义为满足
$$
A A^- A=A
$$
的$n\times m$矩阵$A^-$。广义逆总是存在而且并不唯一。
我们可以通过引入额外条件在所有广义逆中找一个唯一的代表元，称为Moore–Penrose逆。

::: proposition
设$A$是$m\times n$复矩阵。则存在唯一的$n\times m$复矩阵$X$满足如下条件
$$
\begin{cases}
 A X A=A &
 X A X =X\\
 \overline{(AX)}^T=AX &
 \overline{(XA)}^T=XA
\end{cases}
$$
这个$X$称为$A$的Moore–Penrose逆，记为$A^+$。
:::

::: proof
设$A$的奇异值分解为
$$
A=U\Sigma \bar V^T= U\begin{bmatrix}
\Sigma_r & 0\\
0 & 0
\end{bmatrix} \bar V^T
$$
考虑
$$
X=V\begin{bmatrix}
{\Sigma_r}^{-1} & 0\\
0 & 0
\end{bmatrix} \bar U^T
$$

直接计算易知
\[
\begin{aligned}
AXA&=U\begin{bmatrix}
\Sigma_r & 0\\
0 & 0
\end{bmatrix} \bar V^T
V\begin{bmatrix}
{\Sigma_r}^{-1} & 0\\
0 & 0
\end{bmatrix} \bar U^T
U\begin{bmatrix}
\Sigma_r & 0\\
0 & 0
\end{bmatrix} \bar V^T=A\\
XAX&=V\begin{bmatrix}
{\Sigma_r}^{-1} & 0\\
0 & 0
\end{bmatrix} \bar U^T
U\begin{bmatrix}
\Sigma_r & 0\\
0 & 0
\end{bmatrix} \bar V^T
V\begin{bmatrix}
{\Sigma_r}^{-1} & 0\\
0 & 0
\end{bmatrix} \bar U^T
=X
\end{aligned}
\]
并且
$$
AX=U \begin{bmatrix}
I_r & 0\\
0 & 0
\end{bmatrix} \bar U^T\quad \text{和}\quad XA= V \begin{bmatrix}
I_r & 0\\
0 & 0
\end{bmatrix} \bar V^T
$$
都是厄米方阵。因此$X$满足所述方程。下证唯一性。

记$X=V Y \bar U^T$，则$Y$满足
$$
\begin{cases}
 \Sigma Y \Sigma=\Sigma &
 Y \Sigma Y =Y\\
 \overline{(\Sigma Y)}^T=\Sigma Y &
 \overline{(Y\Sigma)}^T=Y\Sigma
\end{cases}
$$
写成分块矩阵的样子
$$
\Sigma=\begin{bmatrix}
{\Sigma_r} & 0\\
0 & 0
\end{bmatrix}\qquad Y=\begin{bmatrix}
B & C\\
D & E
\end{bmatrix}
$$

由方程$\Sigma Y \Sigma=\Sigma$和$
   Y \Sigma Y =Y$得到
$$
Y=\begin{bmatrix}
\Sigma_r^{-1} & C\\
D & D \Sigma_r C
\end{bmatrix}
$$
再由
$$
\Sigma Y=\begin{bmatrix}
I_r & \Sigma_r C\\
0 & 0
\end{bmatrix}\quad \text{和}\quad Y\Sigma=\begin{bmatrix}
I_r & 0\\
D\Sigma_r & 0
\end{bmatrix}
$$
的厄米性，得到$C=D=0$。唯一性得证。
:::

通过Moore–Penrose逆可以直接给出最小二乘问题的一个解。在复向量的情形，最小二乘问题为
$$
\min_{\mathbf{z}\in \mathbb{C} ^n}\|A\mathbf{z}-\mathbf{w}\|
$$

由Moore–Penrose逆$A^+$的性质可以得到
$$
\bar A^T=\overline{(A A^+ A)}^T=\bar A^T \overline{(A A^+)}^T=\bar A^T A A^+
$$
即

$$
\bar A^T(I_m -AA^+)=0
$$

因此对任意$\mathbf{y}\in \mathbb{C} ^n$
$$
\bar{\mathbf{y}}^T \bar A^T(I_m -AA^+) \mathbf{w}=0
$$
即
$$
\langle A\mathbf{y},\mathbf{w}-AA^+ \mathbf{w}  \rangle =0
$$
这说明$AA^+\mathbf{w}$是$\mathbf{w}$向$A$的像的投影，
即$\mathbf{z}_0=A^+\mathbf{w}$给出了最小二乘问题的一个解

$$
\| A\mathbf{z}_0-\mathbf{w} \|=\min_{\mathbf{z}\in \mathbb{C} ^n}\|A\mathbf{z}-\mathbf{w}\|
$$

## Pauli矩阵与自旋*

### $\operatorname{SU}(2)$群*

特殊酉群$\operatorname{SU}(2)$在物理中扮演着重要的角色，例如在量子力学中被用来描述粒子自旋的对称性。
在几何上，$\operatorname{SU}(2)$给出了3维空间转动$\operatorname{SO}(3)$的双重覆盖，
也称为3维自旋群$\operatorname{SU}(2)=\text{Spin}(3)$。
由定义，$\operatorname{SU}(2)$群由满足$\det(A)=1$的$2$阶酉矩阵$A$组成。

设
$
A=\begin{bmatrix}
 a & b \\
 c & d
\end{bmatrix}
$，则
\[
\begin{aligned}
A\bar A^T=\begin{bmatrix}
 a & b \\
 c & d
\end{bmatrix}\begin{bmatrix}
 \bar a & \bar c \\
 \bar b & \bar d
\end{bmatrix}=\begin{bmatrix}
a\bar a+b \bar b & a \bar c+b \bar d\\
c\bar a +d \bar b & c\bar c+d \bar d
\end{bmatrix}
\end{aligned}
\]
由酉方阵$A\bar A^T=I_2$得
$$
|a|^2+|b|^2=|c|^2+|d|^2=1\qquad a\bar c=-b\bar d
$$

由$\det A=ad-bc=1$，我们得到联立方程组
$$
\begin{cases}
|a|^2+|b|^2=|c|^2+|d|^2=1\\
a\bar c=-b\bar d\\
ad-bc=1
\end{cases}
$$
由此解出
$$
d=\bar a \qquad c=-\bar b \qquad |a|^2+|b|^2=1
$$

因此
$$
\operatorname{SU}(2)=\left\{\left.\begin{bmatrix}
 a & b\\
 -\bar b & \bar a
\end{bmatrix}\right | a,b\in \mathbb{C}  \ \text{满足}\ |a|^2+|b|^2=1\right \}
$$
如果用实数来表示$a=x_1+ i x_2, b=x_3+i x_4$，则$SU(2)$中的元素一一对应于3维单位球面
$$
S^3=\{(x_1,x_2,x_3,x_4)\in \mathbb{R} ^4| x_1^2+x_2^2+x_3^2+x_4^2=1\}
$$

### Pauli矩阵*

Pauli 矩阵包括三个矩阵，定义如下：
\[
\sigma_1 = \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix} \quad
\sigma_2 = \begin{bmatrix} 0 & -i \\ i & 0 \end{bmatrix} \quad
\sigma_3 = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}
\]
这些矩阵都是厄米方阵并且满足代数关系
\[
\begin{aligned}
\begin{cases}\sigma_1^2=\sigma_2^2=\sigma_3^2=I_2 \\
\sigma_1\sigma_2=-\sigma_2\sigma_1=i\sigma_3\\
\sigma_2\sigma_3=-\sigma_3\sigma_2=i\sigma_1\\
\sigma_3\sigma_1=-\sigma_1\sigma_3=i\sigma_2
\end{cases}
\end{aligned}
\]

设$V$为所有迹为零的$2$阶厄米方阵构成的集合
$$
V=\{\text{$2$阶复方阵$A$}|\ \bar A^T=A, \operatorname{Tr} A=0\}
$$
容易验证，任一矩阵$Q\in V$可以写成
$$
Q=\begin{bmatrix}
x_3 & x_1-i x_2\\
x_1+ix_2 & -x_3
\end{bmatrix}=x_1\sigma_1+x_2\sigma_2+x_3\sigma_3
$$
这里$x_1, x_2, x_3$是实数。因此我们可以把$\mathbb{R} ^3$和$V$一一对应起来
\[
\begin{aligned}
\sigma: \mathbb{R} ^3 &\to V\\
    \vec{x}& \mapsto \sigma(\vec{x}):=x_1\sigma_1+x_2\sigma_2+x_3\sigma_3
\end{aligned}
\]
即$V$是3维实线性空间，Pauli矩阵给出一组基。

::: proposition
$\mathbb{R} ^3$中的向量长度可以通过Pauli矩阵实现为
$$
\|\vec{x}\|^2=-\det \sigma(\vec{x})
$$
:::

::: proof
$$
\det \sigma(\vec{x})=\begin{vmatrix}
x_3 & x_1-i x_2\\
x_1+ix_2 & -x_3
\end{vmatrix}=-(x_1^2+x_2^2+x_3^2)
$$
:::

::: proposition
设$\vec{x},\vec{y}\in \mathbb{R} ^3$，则
$$
\sigma(\vec{x})\sigma(\vec{y})=\langle \vec{x},\vec{y}\rangle I_2+ i\sigma(\vec{x}\times \vec{y})
$$
即Pauli矩阵同时表达了$3$维向量的内积和叉乘。
:::

::: proof
设$\epsilon_{ijk}$ $(i,j,k\in\{1,2,3\})$是$3$维Levi-Civita符号。
$\epsilon_{ijk}$关于指标$i,j,k$是全反对称的：
$$
\epsilon_{ijk}=-\epsilon_{jik}=-\epsilon_{kji}=-\epsilon_{ikj}
$$
$\epsilon_{ijk}$只有当$i,j,k$互不相同时才非零，它的值为置换$\{1,2,3\}\to \{i,j,k\}$的符号。
例如$\epsilon_{123}=1$。

Pauli矩阵相乘可以通过Levi-Civita符号表示为
$$
\sigma_j \sigma_k=\delta_{jk} I_2+i\sum_l\epsilon_{jkl}\sigma_l
$$
例如
$$
\sigma_2^2=I_2\qquad \sigma_1\sigma_3=i \epsilon_{132}\sigma_2=-i\sigma_2
$$

于是
\[
\begin{aligned}
\sigma(\vec{x})\sigma(\vec{y})=&\sum_j x_j\sigma_j \sum_k y_k \sigma_k\\
=&\sum_{j,k}x_jy_k\delta_{jk}I_2+i \sum_{j,k,l}\epsilon_{jkl}x_jy_k\sigma_l\\
=&\langle \vec{x},\vec{y} \rangle I_2+ i\sigma(\vec{x}\times \vec{y})
\end{aligned}
\]
这里我们用到叉乘$\vec{x}\times \vec{y}$的第$l$分量可以表达为
$\sum\limits_{j,k}\epsilon_{jkl}x_jy_k$。
:::

设$A\in\operatorname{SU}(2)$，$Q\in V$，则矩阵$AQ\bar A^T$满足
$$
\begin{cases}
\overline{AQ\bar A^T}^T=A\bar Q^T\bar A^T=AQ\bar A^T
\\
\operatorname{Tr}(AQ\bar A^T)=\operatorname{Tr}(Q\bar A^TA)=\operatorname{Tr} Q=0
\end{cases}
$$
即$AQ\bar A^T$也是$V$中的矩阵。因此给定$A\in\operatorname{SU}(2)$，我们可以定义映射
\[
\begin{aligned}
f_A: V &\to V\\
     Q & \mapsto f_A(Q):=AQ\bar A^T
\end{aligned}
\]

容易验证$f_A$是一个线性映射。
记$f_A$在$V$的基$\{\sigma_1,\sigma_2,\sigma_3\}$下的表示矩阵为$\rho(A)$，即
$$
f_A(\sigma_j)=\sum\limits_{i=1}^3\sigma_i \rho(A)_{ij}
$$
这里$\rho(A)_{ij}$表示矩阵$\rho(A)$的$(i,j)$分量。
则对于$\sigma(\vec{x})=x_1\sigma_1+x_2\sigma_2+x_3\sigma_3\in V$，我们有
$$
f_A(\sigma(\vec{x}))=\sum_j x_j f_A(\sigma_j)=\sum_{i,j}\sigma_i\rho(A)_{ij}x_j=\sum_i \sigma_i y_i
$$
这里$y_i=\sum\limits_j \rho(A)_{ij}x_j$，或写成向量形式$\vec{y}=\rho(A)\vec{x}$。

因此我们发现如下关系
$$
f_A(\sigma(\vec{x}))=\sigma(\rho(A)\vec{x})
$$

::: proposition
$\rho$定义了一个映射$\rho: \operatorname{SU}(2)\to \operatorname{SO}(3)$。
:::

::: proof
设$A\in \operatorname{SU}(2)$，需证明$\rho(A)\in \operatorname{SO}(3)$。由
$$
f_A(\sigma(\vec{x}))=\sigma(\rho(A)\vec{x})
$$
两边取行列式并利用$\det \sigma(\vec{x})=-\|\vec{x}\|^2$，我们得到
\[
\begin{aligned}
\|\rho(A)\vec{x}\|^2=-\det \sigma(\rho(A)\vec{x})
=-\det f_A(\sigma(\vec{x}))
=-\det (A \sigma(x)\bar A^T)
=-\det \sigma(x)=\|\vec{x}\|^2
\end{aligned}
\]
因此$\rho(A)$保持$\mathbb{R} ^3$的范数，故$\rho(A)\in \operatorname{O}(3)$。

由$\rho(A)\in \operatorname{O}(3)$知$\det \rho(A)=\pm 1$。
由于$\operatorname{SU}(2)$拓扑上和3维球面$S^3$一样，而$S^3$是连通的，
所以$A$可以在$\operatorname{SU}(2)$中连续变化到恒等矩阵$I_2$。因此
$$
\det \rho(A)=\det \rho(I_2)=1
$$
这说明$\rho(A)\in \operatorname{SO}(3)$。
:::

::: example
设$\vec{u}\in \mathbb{R} ^3$是一个单位向量，即$\|\vec{u}\|=1$。考虑
$$
A_{\vec{u}}:=\begin{bmatrix}
 i u_3 & i u_1+ u_2\\
 i u_1-u_2 & -i u_3
\end{bmatrix}\in \operatorname{SU}(2)
$$
我们可以用Pauli矩阵把它写为
$$
A_{\vec{u}}=i(u_1\sigma_1+u_2\sigma_2+u_3\sigma_3)=i\sigma(\vec{u})
$$
:::

因此
$$
f_{A_{\vec{u}}}(\sigma(\vec{x}))=A_{\vec{u}} \sigma(\vec{x}) \overline{A_{\vec{u}}}^T=\sigma(\vec{u})\sigma(\vec{x})\sigma(\vec{u})
$$
利用$\|\vec{u}\|=1$和Pauli矩阵的乘法性质
\[
\begin{aligned}
\sigma(\vec{u})\sigma(\vec{x})\sigma(\vec{u})=&(\langle \vec{u},\vec{x}\rangle I_2+i \sigma(\vec{u}\times \vec{x}))\sigma(\vec{u})\\
=&\sigma(\langle \vec{u},\vec{x}\rangle \vec{u})-\sigma((\vec{u}\times \vec{x})\times \vec{u})
\\
=&\sigma(2\langle \vec{x},\vec{u} \rangle \vec{u}-\vec{x})
 \end{aligned}
\]

写成矩阵表达式
$$
2\langle \vec{x},\vec{u} \rangle \vec{u}-\vec{x}=\begin{bmatrix}
2u_1u_1-1& 2u_1u_2 & 2u_1u_3\\
2u_2u_1 & 2u_2u_2-1 & 2u_2u_3\\
2u_3u_1 & 2u_3u_2 & 2u_3u_3-1
\end{bmatrix}\begin{bmatrix}
x_1\\ x_2\\ x_3
\end{bmatrix}
$$
我们得到
$$
\rho(A_{\vec{u}})=\begin{bmatrix}
2u_1u_1-1& 2u_1u_2 & 2u_1u_3\\
2u_2u_1 & 2u_2u_2-1 & 2u_2u_3\\
2u_3u_1 & 2u_3u_2 & 2u_3u_3-1
\end{bmatrix}
$$

观察到
$$
\begin{cases}
\rho(A_{\vec{u}})(\vec{u})=\vec{u} &\\
\rho(A_{\vec{u}})(\vec{x})=-\vec{x} & \text{若}\ \vec{x}\perp \vec{u}
\end{cases}
$$
因此$\rho(A_{\vec{u}})$表示在$\vec{u}$的正交补平面上作对径映射。

::: proposition
$\rho: \operatorname{SU}(2)\to \operatorname{SO}(3)$满足如下性质：

1. 保单位：$\rho(I_2)=I_3$

2. 保乘法结构：$\rho(AB)=\rho(A)\rho(B)$

3. 保逆结构：$\rho(A^{-1})=\rho(A)^{-1}$

:::

::: proof
保单位显然。我们只需证明$\rho$保乘法。则
$$
\rho(A)\rho(A^{-1})=\rho(I_2)=I_3 \quad \Longrightarrow  \quad \rho(A^{-1})=(\rho(A))^{-1}
$$

由
\[
\begin{aligned}
\sigma(\rho(A)\rho(B)\vec{x})
=&f_A(\sigma(\rho(B)\vec{x}))=f_A(f_B(\sigma(\vec{x})))\\
=& A(B\sigma(\vec{x})\bar B^T)\bar A^T=(AB)\sigma(x)\overline{AB}^T\\
=& f_{AB}(\sigma(\vec{x}))
= \sigma(\rho(AB)\vec{x})
 \end{aligned}
\]
即得
$$
\rho(A)\rho(B)=\rho(AB)
$$
:::

我们称$\rho:\operatorname{SU}(2)\to \operatorname{SO}(3)$是一个群同态，
即保持群结构（乘法和逆）的映射。进一步分析容易验证$\rho$是一个$2:1$的覆盖映射。例如
$$
\rho(\pm I_2)=I_3
$$
实际上对任意$A\in \operatorname{SU}(2)$有
$$
\rho(A)=\rho(-A)
$$
这个$2:1$的覆盖解释了一个非常有趣的现象：即自旋$1/2$粒子绕某一轴旋转$360$度后，状态不完全恢复，
而是变为原状态的负号。

例如考虑$\operatorname{SU}(2)$矩阵
\[
\begin{aligned}
R_{\theta}=\cos(\theta/2)I_2+ i\sin(\theta/2)\sigma_1
=\begin{bmatrix}
\cos(\theta/2) & i \sin(\theta/2)\\
i \sin(\theta/2) & \cos(\theta/2)
\end{bmatrix}
\end{aligned}
\]
直接计算易知
$$
\rho(R_{\theta})=\begin{bmatrix}
 1 & 0 & 0\\
 0 & \cos \theta & \sin \theta\\
 0 & -\sin\theta & \cos \theta
\end{bmatrix}
$$
因此$\rho(R_\theta)$对应于在$3$维空间中以$x_1$-方向为轴在$x_2x_3$-平面旋转$\theta$角度。
在旋量空间或者在$\operatorname{SU}(2)$矩阵中，$\rho(R_\theta)$相当于旋转$\theta/2$。可以看出
$$
R_{2\pi }=-R_{0}=-I_2 \qquad \rho(R_{2\pi})=I_3
$$

Pauli矩阵还可以实现$4$维时空的Lorentz变换。设$M$为所有$2$阶厄米方阵构成的集合
$$
M=\{\text{$2$阶复方阵$A$}| \bar A^T=A\}
$$
$M$中任一矩阵$T$可以写成
$$
T=\begin{bmatrix}
x_0+x_3 & x_1-i x_2\\
x_1+ix_2 & x_0-x_3
\end{bmatrix}=x_0 I_2+x_1\sigma_1+x_2\sigma_2+x_3\sigma_3
$$
这里$x_0,x_1,x_2,x_3\in \mathbb{R} $。
因此$M$是$4$维实线性空间，矩阵$\{I_2,\sigma_1,\sigma_2,\sigma_3\}$构成$M$的一组基。

我们可以把$M$中的矩阵和$4$维时空对应起来，其中$x_0$表示时间，$x_1,x_2,x_3$表示空间。用
$$
\mathbf{x}=\begin{bmatrix}
x_0\\ x_1 \\ x_2 \\ x_3
\end{bmatrix}
$$
来表示$4$维时空向量。记
$$
T(\mathbf{x})=\begin{bmatrix}
x_0+x_3 & x_1-i x_2\\
x_1+ix_2 & x_0-x_3
\end{bmatrix}
$$
则
$$
\det T(\mathbf{x})=x_0^2-x_1^2-x_2^2-x_3^2
$$
给出$4$维时空的Minkowski长度。
因此保持$M$中矩阵行列式不变的线性变换都将给出Minkowski空间的Lorentz变换。

例如设$A$是一个$2$阶复方阵，满足$\det A=\pm 1$。对$2$阶厄米方阵$T\in M$，矩阵
$
 A T \bar A^T
$
也是厄米方阵，并且
$$
\det (A T \bar A^T)=|\det A|^2 \det T =\det T
$$

因此我们得到保行列式的线性映射
\[
\begin{aligned}
g_A: M &\to M\\
  T & \mapsto A T \bar A^T
\end{aligned}
\]
这个线性映射在基$\{I_2,\sigma_1,\sigma_2,\sigma_3\}$下的表示矩阵是一个Lorentz变换。
这个实际上给出了$4$维时空Lorentz群的旋量构造。记
$$
SL^*(2,\mathbb{C} ):=\{2\text{ 阶可逆复方阵}| \det A=\pm 1\}
$$
则上述构造给出了$4$维Minkowski时空的旋量群
$\text{Spin}(3,1)=SL^*(2,\mathbb{C} )$。
