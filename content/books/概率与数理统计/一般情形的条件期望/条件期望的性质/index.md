---
title: 条件期望的性质
---
本节将对 @theorem:conditional_expectation_properties
列出的部分条件期望的性质给出一般性的证明。

::: theorem
设$X,Y,Z$为随机变量，且$\mathbb{E}[X],\mathbb{E}[Y]$存在，
则如下命题成立：

1. 线性：对任意实数$\alpha,\beta$，有
   \[
       \mathbb{E}\!\left[\alpha X+\beta Y \mkern2mu|\mkern2mu Z\right]
       =\alpha\,\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Z\right]
       +\beta\,\mathbb{E}\!\left[Y \mkern2mu|\mkern2mu Z\right]\quad\mathrm{a.s.}
   \]

2. 若$X\geq 0$几乎必然成立，则$\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Z\right]\geq 0$
   几乎必然成立。

3. 全期望公式：
   \[
       \mathbb{E}\!\left[\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Z\right]\right]=\mathbb{E}[X].
   \]

4. 若函数$h:\mathbb{R}\rightarrow\mathbb{R}$使得
   $\mathbb{E}[h(Z)X]$存在，则
   \[
       \mathbb{E}\!\left[h(Z)X \mkern2mu|\mkern2mu Z\right]=h(Z)\,\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Z\right]
       \quad\mathrm{a.s.}
   \]

5. 若$X$与$Z$相互独立，则
   \[
       \mathbb{E}\!\left[X \mkern2mu|\mkern2mu Z\right] = \mathbb{E}[X]\quad\mathrm{a.s.}.
   \]

:::

::: proof
1. 为证明条件期望的线性，只需证明
   $\alpha\,\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Z\right]
+\beta\,\mathbb{E}\!\left[Y \mkern2mu|\mkern2mu Z\right]$（式中条件期望的版本任取）
   能够给出$\mathbb{E}\!\left[\alpha X+\beta Y \mkern2mu|\mkern2mu Z\right]$的一个版本即可。
   显然$\alpha\,\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Z\right]
+\beta\,\mathbb{E}\!\left[Y \mkern2mu|\mkern2mu Z\right]$依然是随机变量$Z$的一个函数。
   现任取有界函数$g:\mathbb{R}\rightarrow\mathbb{R}$，则
   \[
       \begin{aligned}
       & \mathbb{E}\!\left[
       (\alpha\,\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Z\right]
       +\beta\,\mathbb{E}\!\left[Y \mkern2mu|\mkern2mu Z\right])
       \cdot g(Z)
       \right] \\
       ={} &
       \alpha\,\mathbb{E}\!\left[\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Z\right]\cdot
        g(Z)\right]
       +\beta\,\mathbb{E}\!\left[\mathbb{E}\!\left[Y \mkern2mu|\mkern2mu Z\right]\cdot
        g(Z)\right] \\
       ={} &
       \alpha\,\mathbb{E}\!\left[X\cdot g(Z)\right]
       +\beta\, \mathbb{E}\!\left[Y\cdot g(Z)\right] \\
       ={} &
       \mathbb{E}\!\left[(\alpha X+\beta Y)\cdot g(Z)\right],
       \end{aligned}
   \]
   其中第二步用到了（非条件）期望的线性，第三步则来自于
   $\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Z\right]$与$\mathbb{E}\!\left[Y \mkern2mu|\mkern2mu Z\right]$
   作为条件期望的定义，第四步又再次利用了（非条件）期望的线性．
   由有界函数$g$的任意性，可得$\alpha\,\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Z\right]
+\beta\,\mathbb{E}\!\left[Y \mkern2mu|\mkern2mu Z\right]$给出了
   $\mathbb{E}\!\left[\alpha X+\beta Y \mkern2mu|\mkern2mu Z\right]$的一个版本。

2. 采用反证法，若$\mathbb{P}(\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Z\right]<0)>0$，
   则由概率的单调性，可知存在$\epsilon>0$使得
   $\mathbb{P}(\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Z\right]<-\epsilon)>0$。
   再令$g(Z)=\mathsf{1}_{\{\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Z\right]<-\epsilon\}}$，则
   \[
       \mathbb{E}[
       \mathbb{E}\!\left[X \mkern2mu|\mkern2mu Z\right]\cdot g(Z)
       ]
       \leq\mathbb{E}\!\left[
       (-\epsilon)\cdot \mathsf{1}_{\{\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Z\right]<-\epsilon\}}\right]
       =-\epsilon\,\mathbb{P}(\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Z\right]<-\epsilon)<0,
   \]
   但由于$X\cdot g(Z)\geq 0\ \ \mathrm{a.s.}$，故
   \[
       \mathbb{E}[X\cdot g(Z)]\geq 0,
   \]
   与$\mathbb{E}[X\cdot g(Z)]=\mathbb{E}[
\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Z\right]\cdot g(Z)
]$相矛盾。

3. 直接令$g$为取值为$1$的常函数并代入
   式 @eq:conditional_expectation_identity 中即可．

4. 先假设$h$本身为有界函数。任取有界函数
   $g:\mathbb{R}\rightarrow\mathbb{R}$，则有
   \[
       \begin{aligned}
       \mathbb{E}\!\left[
       \left(h(Z)\,
       \mathbb{E}\!\left[X \mkern2mu|\mkern2mu Z\right]\right)
       \cdot g(Z)
       \right]
       & =
       \mathbb{E}\!\left[
       \mathbb{E}\!\left[X \mkern2mu|\mkern2mu Z\right]
       \cdot (h(Z) g(Z))
       \right] \\
       & =
       \mathbb{E}\!\left[
       X
       \cdot (h(Z) g(Z))
       \right] \\
       & =
       \mathbb{E}\!\left[
       (h(Z) X)
       \cdot g(Z)
       \right]
       \end{aligned}
   \]
   其中第二步利用了$\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Z\right]$的定义并注意到$h\cdot g$
   为有界函数。再由有界函数$g$的任意性，可得
   $h(Z)\cdot\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Z\right]$为
   $\mathbb{E}\!\left[h(Z)X \mkern2mu|\mkern2mu Z\right]$的一个版本．

   对于一般情形的函数$h$，需要取用一列有界函数$h_1,h_2,\ldots$
   对$h$进行逼近，则有
   \[
       \mathbb{E}[h_n(Z)\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Z\right]\cdot g(Z)]
       =\mathbb{E}\!\left[(h_n(Z)X)\cdot g(Z)\right],
   \]
   再用期望的控制收敛定理（超出本讲义范围，读者可参阅
   [@williams1991probability][@billingsley1995probability]等文献）
   取$n\rightarrow\infty$的极限即可。具体的步骤这里略去。

5. 显然$\mathbb{E}[X]$可以看成$Z$的一个常函数。
   而对任意有界函数$g:\mathbb{R}\rightarrow\mathbb{R}$，有
   \[
       \mathbb{E}\!\left[X\cdot g(Z)\right]
       =\mathbb{E}[X]\cdot \mathbb{E}\!\left[g(Z)\right]
       =\mathbb{E}\!\left[\mathbb{E}[X]
       \cdot g(Z)\right],
   \]
   其中我们用到了$X$与$g(Z)$的独立性。
   故$\mathbb{E}[X]$给出了$\mathbb{E}\!\left[X \mkern2mu|\mkern2mu Z\right]$的一个版本。

:::
