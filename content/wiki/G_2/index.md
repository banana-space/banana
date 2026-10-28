---
title: '$\mathrm{G}_2$'
aliases: [G2, '$\mathfrak{g}_2$']
categories: [Lie 理论]
navboxes: [Lie 群]
---

<problems>
- “复 Lie 群”“表示”“有限群”各节需要扩充。
</problems>

**$\mathbf{G}_2$** 是一个单[[根系]]，是五个例外单根系
（[[$\mathrm{E}_6$]]、[[$\mathrm{E}_7$]]、[[$\mathrm{E}_8$]]、[[$\mathrm{F}_4$]]、
$\mathrm{G}_2$）中最小的。
根系 $\mathrm{G}_2$ 的秩为$2$，维数为$14$。
记号 $\mathrm{G}_2$ 也指它对应的[[单 Lie 群]]，包括复 Lie 群及若干[[实形式]]。
对应的 [[单 Lie 代数]] 记为 $\mathfrak g_2$。

不同于其余四个例外单 Lie 群，紧 Lie 群$\mathrm{G}_2$ 可能出现于 [[Riemann 流形]]的[[环移群]]中。

## 描述

### 根系

$\mathrm{G}_2$根系对应的[[Dynkin 图]]为

```tikz
\begin{tikzpicture}
    \filldraw[fill=black] (-1,0) circle (0.14cm) node[anchor=north, yshift=0.6cm] {$\alpha$};
    \filldraw[fill=black] (1,0) circle (0.14cm) node[anchor=north, yshift=0.6cm] {$\beta$};
    \draw (-1, 0.1) -- (1, 0.1);
    \draw (-1, -0.1) -- (1, -0.1);
    \draw (-1, 0) -- (1, 0);
    \draw (0.2, 0.3) -- (-0.1, 0);
    \draw (0.2, -0.3) -- (-0.1, 0);
    \end{tikzpicture}
```

其 [[Cartan 矩阵]]为
\[
\left[ \begin{matrix}2&-3\\-1&2\end{matrix} \right].
\]
在 [[Euclid 空间]] $\mathbb R^2$中，可以选择一组单根
\[
\alpha=\left(-\frac{\sqrt2}{2},\frac{\sqrt6}6\right),\ \beta=(\sqrt 2, 0).
\]
如此一来，它们生成的根系$\mathrm{G}_2$一共具有$12$个元素，在$\mathbb R^2$的排布形如

```tikz
\begin{tikzpicture}[scale=1.5]
    \draw[fill=black] (0.75,1.3) circle (2pt) node[anchor=west] {\footnotesize $2\beta+3\alpha$};
    \draw[fill=black] (0.75,-1.3) circle (2pt) node[anchor=west] {\footnotesize $-\beta-3\alpha$};
    \draw[fill=black] (-0.75,1.3) circle (2pt) node[anchor=east] {\footnotesize $\beta+3\alpha$};
    \draw[fill=black] (-0.75,-1.3) circle (2pt) node[anchor=east] {\footnotesize $-2\beta-3\alpha$};
    \draw[fill=black] (1.5,0) circle (2pt) node[anchor=west] {\footnotesize $\beta$};
    \draw[fill=black] (-1.5,0) circle (2pt) node[anchor=east] {\footnotesize $-\beta$};
    \draw[fill=black] (0,0.87) circle (2pt) node[anchor=south] {\footnotesize $\beta+2\alpha$};
    \draw[fill=black] (0,-0.87) circle (2pt) node[anchor=north] {\footnotesize $-\beta-2\alpha$};
    \draw[fill=black] (0.75,0.43) circle (2pt) node[anchor=west] {\footnotesize $\beta+\alpha$};
    \draw[fill=black] (0.75,-0.43) circle (2pt) node[anchor=west] {\footnotesize $-\alpha$};
    \draw[fill=black] (-0.75,-0.43) circle (2pt) node[anchor=east] {\footnotesize $-\beta-\alpha$};
    \draw[fill=black] (-0.75,0.43) circle (2pt) node[anchor=east] {\footnotesize $\alpha$};
    \draw[thick] (0.75,1.3) -- (-0.75,-1.3);
    \draw[thick] (0.75,-1.3) -- (-0.75,1.3);
    \draw[thick] (-1.5,0) -- (1.5,0);
    \draw[thick] (0,0.87) -- (0,-0.87);
    \draw[thick] (0.75,0.43) -- (-0.75,-0.43);
    \draw[thick] (0.75,-0.43) -- (-0.75,0.43);
    \node at (0,-2) {$\mathrm{G}_2$};
    \end{tikzpicture}
```

容易看出，为计算其[[Weyl 群]]只需考虑较长（或较短）的$6$根的[[对称群]]，于是
$W(\mathrm{G}_2)\cong D_{12}$是$12$阶的[[二面体群]]。

### 紧 Lie 群

将根系 $\mathrm{G}_2$ 对应的紧 Lie 群仍记为 $\mathrm{G}_2$。

紧 Lie 群 $\mathrm{G}_2$ 是[[八元数]]代数 $\mathbb O$
中所有保持范数的[[自同构]]构成的群。
$\mathrm{G}_2$ 在其虚部 $\operatorname{Im} \mathbb{O} \simeq \mathbb{R}^7$ 的作用是
$\mathrm{G}_2$ 最小的[[不可约表示]]，其维数为 $7$。

另一方面，$\mathrm{G}_2$ 也是[[特殊正交群]] $\mathrm{SO} (7)$
中保持 [[微分形式|$3$-形式]]
\[
\omega = d x^{123} + d x^{145} + d x^{167} + d x^{246} - d x^{257} - d x^{347} - d x^{356}
\]
的元素构成的子群，其中 $d x^{i j k} = d x^i \wedge d x^j \wedge d x^k$。
换言之，
\[
\mathrm{G}_2 = \{ g \in \mathrm{SO} (7) \mid g^* \omega = \omega \} .
\]

### 复 Lie 群

### Lie 代数

与 Lie 群$\mathrm{G}_2$相对应，Lie 代数$\mathfrak g_2$秩为$2$，维数为$14$。

Lie 代数$\mathfrak g_2$的一个分裂的实形式可以这样给出，记域$\mathbb F\in\{\mathbb R,\mathbb C\}$，
令$\times$为$\mathbb F^3$上的叉乘。记
\[
x=\left[\begin{matrix}x_1\\x_2\\x_3\end{matrix}\right]\in \mathbb F^3,\ l_x:=\left[\begin{matrix}0&-x_3&x_2\\x_3&0&-x_1\\-x_2&x_1&0\end{matrix}\right].
\]
定义 Lie 子代数$L\subset\mathfrak{gl}_7(\mathbb F)$为
\[
L:=\left\{M_{a,x,y}:=\left[\begin{matrix}0&-2y^\mathrm T&-2x^\mathrm T\\ x&a&l_y\\ y&l_x&-a^\text T\end{matrix}\right]:a\in\mathfrak{sl}_3(\mathbb F);x,y\in\mathbb F^3\right\}.
\]
显然维数上$\dim L=14$。
此外通过在$[A,B]:=AB-BA$中分别代入$A,B=M_{a,0,0},M_{0,x,0},M_{0,0,y}$，
逐个分析配对情况即可得知$L$在 Lie 括号下封闭。
有趣的是如果记$L_0:=\{M_{a,0,0}:a\in\mathfrak{sl}_3(\mathbb F)\}$，
$L_1:=\{M_{0,x,0}:x\in\mathbb F^3\}$，$L_2:=\{M_{0,0,y}:y\in\mathbb F^3\}$，
则我们计算 Lie 括号得到$L$的一个$\mathbb Z/3\mathbb Z$-分次：
\[
\begin{aligned}
  [L_0,L_0]=[L_1,L_2]=L_0,\\
  [L_2,L_2]=[L_0,L_1]=L_1,\\
  [L_1,L_1]=[L_0,L_2]=L_2.
\end{aligned}
\]
接下来我们指出$L$是单的 Lie 代数，且根系确实为$\mathrm{G}_2$。

以下我们记$\mathfrak{sl}_3(\mathbb F)$就是其中的子代数$\{M_{a,0,0}\}$，
我们取 [[Cartan 子代数]] $\mathfrak h$ 为 $\mathfrak{sl}_3(\mathbb F)$ 的 Cartan 子代数，即
\[
\mathfrak h=\{h(s_1,s_2,s_3):=\mathrm{diag}\{0,s_1,s_2,s_3,-s_1,-s_2,-s_3\}:s_1+s_2+s_3=0\}.
\]
那么$\epsilon_i:\mathfrak h\to\mathbb F$可取作$\epsilon_i(h(s_1,s_2,s_3)):=s_i$。
于是$\{\epsilon_1,\epsilon_2\}$成为$\mathfrak h^*$的一组基。
而且$\epsilon_1+\epsilon_2+\epsilon_3=0$。
不难计算得到$L$的根空间为
\[
\begin{aligned}
[h(s_1,s_2,s_3),M_{E_{ij},0,0}]&=(\epsilon_i-\epsilon_j)(h)M_{E_{ij},0,0},\\
[h(s_1,s_2,s_3),M_{0,e_i,0}]&=\epsilon_i(h)M_{0,e_i,0},\\
[h(s_1,s_2,s_3),M_{0,0,e_j}]&=-\epsilon_j(h)M_{0,0,e_j}.
\end{aligned}
\]
上面三类分别给出了根空间$L_{\epsilon_i-\epsilon_j},L_{\epsilon_i},L_{-\epsilon_j}$。
于是根分解，根集为
\[
L=\mathfrak h\oplus\bigoplus_{\alpha\in\Phi}L_\alpha,\ \Phi:=\{\epsilon_i-\epsilon_j:i\ne j\}\cup\{\pm\epsilon_i\}.
\]
取[[单根]] $\alpha:=\epsilon_2,\beta:=\epsilon_1-\epsilon_2$，
就得到了前面取的标准$\mathrm{G}_2$根系。

接下来我们检查$L$是单的，假设$0\ne I$是$L$的[[理想]]，即$[I,L]\subset I$。
假设$I$中有一个非零元素，按照根分解，存在两种情况，一种是这个元素$M\in I$位于$\mathfrak h$中，
另一种是$M$投影到某$L_\alpha$上非零。
对第一种情况来说，由于$\bigcap_i\ker\epsilon_i=0$，
于是存在某$\alpha$使得$[M,L_\alpha]\subset I$中有元素落入第二种情况。

不难检查满射$[L_\alpha,L_\beta]=L_{\alpha+\beta}$对$\alpha+\beta\ne 0$，所以对于第二种情况，
对$M\in I$，
取一个一般位置（不落在任何根的核中）的$h\in\mathfrak h$，现在$[M,h]$仍在某$L_\alpha$投影非零，
且没有$\mathfrak h$中的分量。
于是不断与诸$L_\alpha$做 Lie 括号，由于根集有限以及在加法下的传递性，
做足够多次 Lie 括号后可得到一个$L_\alpha$中的元素。
继续做 Lie 括号可知，对任意$\alpha\in\Phi$都有$L_\alpha\subset I$。
最后再用它们即可重新生成$\mathfrak h$中的所有元素，于是$I=L$。由此得知$L$是单的。

这一证明 Lie 代数是单代数的办法通常也适用于其他单 Lie 代数，先写出根分解，
然后机械地进行这一讨论即可。

另外，$\mathfrak g_2$的紧实形式则形如
\[
\left\{\left[\begin{matrix}
0&C&-B&E&-D&-G&F-M\\
-C&0&A&F&-G+N&D-K&-E-L\\
B&-A&0&-N&M&L&-K\\
-E&-F&N&0&-A+H&-B+I&C-J\\
D&G-N&-M&A-H&0&J&I\\
G&K-D&-L&B-I&-J&0&-H\\
-F+M&E+L&K&-C+J&-I&H&0
\end{matrix}\right]:A,\cdots,N\in\mathbb R\right\}\subset\mathfrak{so}_7(\mathbb R).
\]

实际上，$\mathfrak g_2$仅有两个实形式，我们已经将二者具体写出。

## 和叉积与八元数的关系

对于上述分裂实形式$L$，定义双线性形式
\[
N=\left[\begin{matrix}1&0&0\\0&0&2I_3\\0&2I_3&0\end{matrix}\right], N\left[\begin{matrix}s\\u\\v\end{matrix}\right]=s^2+4u\cdot v.
\]
那么$L\subset \mathfrak{so}(\mathbb F^7,N)$，
即$N(MX,Y)+N(X,MY)=0$对一切$M\in L$和$X,Y\in\mathbb F^7$。

此外如果再定义
\[
\left[\begin{matrix}s\\u\\v\end{matrix}\right]\times \left[\begin{matrix}t\\x\\y\end{matrix}\right]
:=\left[\begin{matrix}2u^\text Ty-2v^\text Tx\\sx-tu-2v\times y\\-sy+tv+2u\times x\end{matrix}\right].
\]
那么$N(X\times Y,X)=N(X\times Y,Y)=0$且
\[
N(X\times Y,X\times Y)=\det\left[\begin{matrix}N(X,X)&N(X,Y)\\ N(Y,X)&N(Y,Y)\end{matrix}\right].
\]
于是我们构造出了$\mathbb F^7$上关于双线性型$N$的叉积。而且我们有
\[
L=\operatorname{Der}(\mathbb F^7,\times)=\{M\in\mathfrak{gl}_7(\mathbb F):M(X\times Y)=M(X)\times Y+X\times M(Y)\}.
\]
另一方面，对于紧实形式，其也有类似的构造，这一点我们已经在“紧 Lie 群”一节中介绍过。

更加一般地，对于一个$3$-形式$\omega\in\Omega^3(\mathbb C^7)=(\wedge^3\mathbb C^7)^*$，
如果它处于一般位置（$\mathrm{GL}_7(\mathbb C)$作用的开轨道内），那么
\[
\begin{aligned}
  \{g\in\mathrm{GL}_7(\mathbb C):(g\omega)(X,Y,Z)&:=\omega(gX,gY,gZ)=\omega(X,Y,Z),\forall X,Y,Z\in\mathbb C^7\}\cong \mathrm{G}_2(\mathbb C), \\
  \{M\in\mathfrak{gl}_7(\mathbb C):(M\omega)(X,Y,Z)&:=\omega(MX,Y,Z)+\omega(X,MY,Z)+\omega(X,Y,MZ)=0,\forall X,Y,Z\in\mathbb C^7\}\cong\mathfrak g_2(\mathbb C).
\end{aligned}
\]
实际上对于$L$，我们确实具有$\omega(X,Y,Z):=N(X\times Y,Z)$带来
\[
\begin{aligned}
  &N((MX)\times Y,Z)+N(X\times(MY),Z)+N(X\times Y,MZ)\\
  =&N((MX)\times Y,Z)+N(X\times(MY),Z)-N(M(X\times Y),Z)=0.
\end{aligned}
\]

最后我们也计算维数作为参考。
$\mathrm{GL}_7(\mathbb C)$具有复$49$维，而$\Omega^3(\mathbb C^7)$具有复$\binom 73=35$维。
两者相差的维数$49-35=14$正是$\mathrm{G}_2$的维数。

## 表示

在“Lie 代数”一节中，我们具体给出了$\mathfrak g_2$的七维表示，
考虑记$V=\mathbb F^7=\mathbb F\oplus\mathbb F^3\oplus\mathbb F^3$，那么
\[
\begin{aligned}
  h(s_1,s_2,s_3)\left[\begin{matrix}1\\0\\0\end{matrix}\right]=\left[\begin{matrix}0\\0\\0\end{matrix}\right], &&
  h(s_1,s_2,s_3)\left[\begin{matrix}0\\e_i\\0\end{matrix}\right]=s_i\left[\begin{matrix}0\\e_i\\0\end{matrix}\right], &&
  h(s_1,s_2,s_3)\left[\begin{matrix}0\\0\\e_j\end{matrix}\right]=-s_j\left[\begin{matrix}0\\0\\e_j\end{matrix}\right].
\end{aligned}
\]
这说明该表示的[[权空间]]为$V_0,V_{\epsilon_i},V_{-\epsilon_j}$，
$V$在前述$\alpha=\epsilon_2,\beta=\epsilon_1-\epsilon_2$的单根选取下是[[最高权]]
$-\epsilon_3=\epsilon_1+\epsilon_2=2\alpha+\beta$的[[最高权表示]]。
实际上由于$L_\alpha V_\beta=V_{\alpha+\beta}$，不难检查$V$是不可约的。
此外$L$具有[[伴随表示]]，这显然也是一个不可约表示，
它的权空间分解自然就是$L$的根空间分解，所以其最高权为$\epsilon_1-\epsilon_3=3\alpha+2\beta$。

从正根的[[Weyl 腔]]可以看出，
全体不可约表示的最高权对应了$2\alpha+\beta, 3\alpha+2\beta$的任意有限和。
于是这两者是$\mathrm{G}_2$的两个[[基本表示]]。一般地，$\mathrm{G}_2$的不可约表示维数从低到高为：
\[
\begin{aligned}
&1, 7, 14, 27, 64, 77 \ (\text{两次}), 182, 189, 273, 286, 378, 448, 714, 729, 748, 896, 924, 1254, \\
&1547, 1728, 1729, 2079 \ (\text{两次}), 2261, 2926, 3003, 3289, 3542, 4096, 4914, 4928 \ (\text{两次}), \\
&5005, 5103, 6630, 7293, 7371, 7722, 8372, 9177, 9660, 10206, 10556, 11571, 11648, \\
&12096, 13090, 14756, 15625, 17017, 17472, 18304, 19019, 19096, 19278, 19683, \cdots
\end{aligned}
\]

其中$77$维的不可约表示有不同构的两个，分别是权$6\alpha+3\beta$和$6\alpha+4\beta$对应的最高权表示。
类似地，$2079$ 维、$4928$ 维、$30107$ 维……有一列维数，它们对应的不可约表示恰有两个。

## 有限群

有限群$\mathrm{G}_2(q)$是[[代数群]] $\mathrm{G}_2$的$\mathbb F_q$-点构成的群。
阶数为$q^6(q^6-1)(q^2-1)$。
对$q\ne 2$均有$\mathrm{G}_2(q)$为[[单群]]，
而$\mathrm{G}_2(2)$则有一个指数$2$的子群${}^2A_2(3^2)$是单群。
