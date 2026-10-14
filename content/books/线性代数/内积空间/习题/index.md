---
title: 习题
---

1. 设$V$是由所有$m\times n$实矩阵构成的线性空间。定义$\langle \cdot,\cdot \rangle $ 如下
   $$
   \langle A, B\rangle=\text{Tr} (A^T B), \qquad A, B\in V
   $$
   证明$\langle \cdot,\cdot \rangle $是$V$上的一个内积。

2. 设$(V,\langle \cdot,\cdot\rangle)$是$n$维欧几里得空间。
   设内积$\langle \cdot,\cdot\rangle$在一组基$\{\vec{\alpha}_1,\cdots,\vec{\alpha}_n\}$
   下的Gram矩阵是$G$，在另一组基$\{\vec{\beta}_1,\cdots,\vec{\beta}_n\}$下的Gram矩阵是$G'$。
   设基$\{\vec{\alpha}_1,\cdots,\vec{\alpha}_n\}$到基$\{\vec{\beta}_1,\cdots,\vec{\beta}_n\}$
   的过渡矩阵是$P$。问$G, G', P$ 之间是什么关系？

3. 设$(V,\langle \cdot,\cdot\rangle)$是$n$维欧几里得空间。
   对于$V$中任意$n$个向量$\{\vec{\alpha}_1,\cdots,\vec{\alpha}_n\}$，
   我们定义其Gram矩阵$G=(G_{ij})$为
   $$
   G_{ij}=\langle \vec{\alpha}_i,\vec{\alpha}_j \rangle
   $$
   证明$\{\vec{\alpha}_1,\cdots,\vec{\alpha}_n\}$线性无关（即构成$V$的一组基）当且仅当$G$
   是可逆矩阵。

4. 证明2阶实对称方阵$A$是正定方阵当且仅当$
\text{Tr} A>0 \ \&\ \det A>0
$。

5. 证明欧几里得空间中的向量$\vec{x},\vec{y}$正交当且仅当
   $
\| \vec{x}+\vec{y}\|^2=\| \vec{x}\|^2+\| \vec{y} \|^2
$。

6. 设$(V,\langle \cdot,\cdot\rangle)$是$n$维欧几里得空间，
   $\{\vec{\alpha}_1,\cdots,\vec{\alpha}_n\}$是$V$的标准正交基。证明对任意$\vec{x},\vec{y}\in V$
   $$
   \langle \vec{x},\vec{y}\rangle =\sum\limits_{i=1}^n \langle\vec{x},\vec{\alpha}_i \rangle \langle \vec{\alpha}_i,\vec{y}\rangle \qquad \text{(Parseval等式)}
   $$

7. 设$V=\text{Span}\{1,x,x^2,x^3\}$是由所有次数小于等于$3$的实系数多项式构成的线性空间。定义
   $$
   \langle f, g\rangle:=\int_0^1 f(x)g(x) dx
   $$
   $(V,\langle \cdot,\cdot\rangle)$构成$4$维欧几里得空间。
   找一组$(V,\langle \cdot,\cdot\rangle)$的标准正交基。

8. 举例说明，方阵$A$的列向量两两相互正交，但$A$的行向量不一定两两相互正交。

9. 在标准欧几里得空间$\mathbb{R}^3$ 中，设$U$是由方程 $ x_1 + 2x_2 + 2x_3 = 0 $ 定义的平面。
   计算点 \( \mathbf{p}= (1, 2, 3) \) 在平面 \( U \) 上的正交投影 \( \mathbf{p'} \)。

10. 设$(V,\langle \cdot,\cdot\rangle)$是由所有$n$阶实方阵构成的欧几里得空间，
    其内积为$\langle A,B \rangle=\text{Tr} (A^T B)$。
    对于如下$V$的子空间$U$，计算$U$的正交补$U^{\perp}$以及正交投影$p_{U}:V\to U$。

    (a) $U=\text{Span}\{I_n\}$是由单位方阵张成的子空间

    (b) $U$ 是由所有对角方阵构成的线性子空间

    (c) $U$ 是由所有上三角方阵构成的线性子空间

11. 设$(V,\langle \cdot,\cdot\rangle)$是$n$维欧几里得空间，$U$是$V$的线性子空间。
    证明$(U^{\perp})^{\perp}=U$。

12. 设$(V,\langle \cdot,\cdot\rangle)$是$n$维欧几里得空间，$U_1, U_2$是$V$的线性子空间。证明
    $
(U_1+U_2)^{\perp}=U_1^{\perp}\cap U_2^{\perp}
$。

13. 设$\vec{\alpha},\vec{\beta}$是$n$维欧几里得空间$V$中的两个向量，
    满足$\|\vec{\alpha}\|=\|\vec{\beta}\|$。
    证明一定存在一个正交变换$T:V\to V$使得$T(\vec{\alpha})=\vec{\beta}$。

14. 找出所有使得$A \vec{\alpha}=\vec{\beta}$的$3$阶正交矩阵$A$。
    \[
    \begin{aligned}
    & a)\quad \vec{\alpha}=\begin{bmatrix}
    1 \\ 0 \\ 0
    \end{bmatrix}\quad \vec{\beta}=\begin{bmatrix}
    0 \\ 1 \\ 0
    \end{bmatrix} && b)\quad \vec{\alpha}=\begin{bmatrix}
    2 \\ 1 \\ 1
    \end{bmatrix}\quad \vec{\beta}=\begin{bmatrix}
    1 \\ 1 \\ 2
    \end{bmatrix}
    \end{aligned}
    \]

15. 设$\lambda_0$是$n$阶正交方阵$A$的一个特征值（可能是复数）。

    (a) 证明$|\lambda_0|=1$。

    (b) 假设$\lambda_0\notin \mathbb{R} $，
        $\vec{z}\in \mathbb{C} ^n$是$\lambda_0$的一个复特征向量。
        记$\vec{z}=\vec{x}+i\vec{y}$，这里$\vec{x},\vec{y}\in \mathbb{R} ^n$。证明
        $$
        \vec{x}\perp \vec{y}\quad \text{并且}\quad \|\vec{x}\|=\|\vec{y}\|
        $$

16. 判断如下实对称方阵是否是正定方阵或者半正定方阵。
    \[
    \begin{aligned}
    & a) \begin{bmatrix}
    5 & 3 & 0 \\
    3 & 5 & 4 \\
    0 & 4 & 5
    \end{bmatrix}
    && b) \begin{bmatrix}
    1 & -1 & 0\\
    -1 & 1 & -1\\
    0 & -1 & 1
    \end{bmatrix}
    && c) \begin{bmatrix}
    2 & -1 & 0 & 0 \\
    -1 & 2 & -1 & 0 \\
    0 & -1 & 2 & -1 \\
    0 & 0 & -1 & 2
    \end{bmatrix}
    \end{aligned}
    \]

17. 设$A$是$n$阶反对称方阵，即$A^T=-A$。证明$e^A\in \text{SO}(n)$是$n$阶特殊正交方阵。

18. 设$A,B$是$n$阶正定实对称方阵。证明$AB$的特征值均为正实数。

19. 计算如下矩阵的奇异值分解
    \[
    \begin{aligned}
    & a)\quad =\begin{bmatrix}
    3 & 0\\
    4 & 5
    \end{bmatrix} && b) \quad =\begin{bmatrix}
    1 & -1\\
    -2 & 2\\
    2 & -2
    \end{bmatrix}
    \end{aligned}
    \]

20. 设$f: \mathbb{R} ^2\to \mathbb{R} ^2$是一个可逆线性映射，
    其在标准基下对应于矩阵$A=\begin{bmatrix}
a & b\\
c & d
\end{bmatrix}$，$\det A\neq 0$
    $$
    f: \begin{bmatrix}
    x_1\\
    x_2
    \end{bmatrix} \mapsto \begin{bmatrix}
    a & b\\
    c & d
    \end{bmatrix}\begin{bmatrix}
    x_1\\
    x_2
    \end{bmatrix}
    $$
    设$A$的奇异值为$\sigma_1\geq \sigma_2>0$。
    证明单位圆$\{x_1^2+x_2^2=1\}$在$f$的映射下变为一个椭圆，椭圆的长半轴长为$\sigma_1$，
    短半轴长为$\sigma_2$。

    ```tikz
    \begin{tikzpicture}
        \draw[thick] (0,0) circle(2);
        \draw[red, thick, rotate around={15:(0,0)}] (0,0) ellipse(3 and 1.5);
        \draw[blue,dashed] (-2,0) -- (2,0);
        \draw[green,dashed] (0,-2) -- (0,2);
        \draw[->,blue,rotate around={15:(0,0)}] (0,0) -- (3,0) node[right] {$\sigma_1$};
        \draw[->,green,rotate around={15:(0,0)}] (0,0) -- (0,1.5) node[above] {$\sigma_2$};
    \end{tikzpicture}
    ```

21. 计算如下矩阵的QR分解
    \[
    \begin{aligned}
    & a) \quad \begin{bmatrix}
    -1 & 3\\
    1 & 5
    \end{bmatrix} && b) \quad \begin{bmatrix}
    1 & 1 & 0\\
    1 & 0 & 1\\
    0 & 1  & 1
    \end{bmatrix}
    \end{aligned}
    \]

22. 用最小二乘法找出最佳拟合如下数据的线性方程$y=at+b$

    | $t_i$ | $-2$ | $-1$ | $0$ | $2$ |
    | --- | --- | --- | --- | --- |
    | $y_i$ | $4$ | $3$ | $1$ | $0$ |

23. 证明矩阵范数的如下两个性质：

    (a) 三角不等式：$\|A+B\|\leq \|A\|+\|B\|$

    (b) 乘积性质：$\|AB\|\leq \|A\|\|B\|$

24. 设$A$是一个$n$阶正定方阵。证明$\lim\limits_{t\to +\infty}e^{-tA}=0$。

25. 假设函数$x(t),y(t)$满足如下微分方程组
    $$
    \begin{cases}
    x'(t)=-4x(t)+y(t)\\
    y'(t)=-2x(t)-y(t)
    \end{cases}
    $$
    证明$\lim\limits_{t\to +\infty}x(t)=\lim\limits_{t\to +\infty}y(t)=0$。

26. 酉空间中两个向量$\vec{\alpha}, \vec{\beta}$正交当且仅当对任意复数$a,b\in \mathbb{C} $，
    $$
    \|a \vec{\alpha}+b\vec{\beta}\|^2=\|a\vec{\alpha}\|^2+\|b\vec{\beta}\|^2
    $$

27. 设$V$是由所有$m\times n$复矩阵构成的复线性空间。定义$\langle \cdot,\cdot \rangle $ 如下
    $$
    \langle A, B\rangle=\text{Tr} (\bar A^T B), \qquad A, B\in V
    $$
    证明$\langle \cdot,\cdot \rangle $是$V$上的一个厄米内积。

28. 设$A, B$是$n$阶厄米方阵。证明$\text{Tr}(AB)^2$和$\text{Tr}(A^2 B^2)$都是实数并且
    $$
    \text{Tr}(AB)^2\leq \text{Tr}(A^2 B^2)
    $$
    等号成立当且仅当$AB=BA$。

29. 证明任意一个$2$阶酉方阵可以表达为如下形式
    $$
    \begin{bmatrix}
    e^{i\theta_1} & 0 \\
    0 & e^{i\theta_2}
    \end{bmatrix} \begin{bmatrix}
    \cos \theta & -\sin \theta\\
    \sin \theta & \cos \theta
    \end{bmatrix}\begin{bmatrix}
    e^{i\theta_3} & 0 \\
    0 & e^{i\theta_4}
    \end{bmatrix}
    $$
    这里$\theta_1,\theta_2,\theta_3,\theta_4,\theta$均是实数。

30. 设$A$是一个$n$阶复方阵。定义一个$2n$阶实方阵$\varphi(A)$如下：
    $$
    \varphi(A)=\begin{bmatrix}
    B & C\\
    -C & B
    \end{bmatrix}\qquad \text{这里$A= B + i C$, $B$和$C$是实方阵}
    $$
    证明$\varphi$满足如下性质：

    (a) $\varphi(A_1A_2)=\varphi(A_1)\varphi(A_2)$，$\varphi(\bar A^T)=\varphi(A)^T$

    (b) $A$是厄米方阵当且仅当$\varphi(A)$是对称方阵

    (c) $A$是酉方阵当且仅当$\varphi(A)$是正交方阵

31. 设$n$阶复方阵$A$有如下分块结构
    $$
    A=\begin{bmatrix}
     B & C\\ 0 & D
    \end{bmatrix}\qquad \text{$B$ 是 $m$ 阶复方阵, $D$ 是 $n-m$ 阶复方阵}
    $$
    证明$A$是酉方阵当且仅当$B, D$是酉方阵并且$C=0$。

32. 设$n$阶复方阵$A$的所有特征值为$\lambda_1,\cdots,\lambda_n$。证明
    $$
    \sum_{i=1}^n |\lambda_i|^2\leq \text{Tr}(\bar A^T A)
    $$
    等号成立当且仅当$A$是正规矩阵。

33. 设$A$是$n$阶厄米方阵。证明$A$是正定方阵当且仅当存在$n$阶可逆矩阵$P$使得$A=\bar P^TP$。

34. 计算矩阵$\begin{bmatrix}
1 & 1 & 1\\
1 & 1 & -1\\
-2 & 1 & 0
\end{bmatrix}$的极分解。
