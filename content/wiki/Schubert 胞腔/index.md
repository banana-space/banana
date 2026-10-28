---
title: Schubert 胞腔
aliases: [Schubert 演算]
categories: [相交论, 计数几何]
navboxes: [相交论, 计数几何]
---

<problems>
- “Littlewood–Richardson 公式”“27 条直线和 2875 条直线”“推广”各节需要扩充。
- “Schubert 胞腔”一节的注中的公式使用了记号 $n$、$k$，与上文的 $N$、$n$ 不一致，似乎应把 $n-k$ 理解为 $N-n$。
- “一些特殊 Young 图”一节中 Plücker 嵌入的目标似乎应为 $\mathbb P^{\binom Nn-1}$。
- “Pieri 公式”一节最后一段中的 $A^*(\mathbf G(n,N-n))$ 与 $\sigma_{n^{N-n}}$ 似乎应为 $A^*(\mathbf G(n,N))$ 与 $\sigma_{(N-n)^n}$。
- “基本性质”一节中点的类 $[\mathrm{pt}]$ 似乎应位于 $A^{n(N-n)}$ 而不是 $A^0$；“$\mathbf G(2,4)$ 例子”一节的图中 $H^8$、$H^0$ 等标注的次数似乎与 $\sigma_a\in H^{2|a|}$ 的次数相反。
</problems>

**Schubert 胞腔** 是[[Graßmann 形]]中的一组特定的[[局部闭子概形]]。
具体来说，它刻画了Graßmann 形 $\mathbf G(n,V)$ 中，
与若干给定[[线性子空间]] $V_i\subset V$ 具有特定相交[[维数]]的那些[[闭点]] $[W]\in\mathbf G(n,V)$
构成的对象。
它最早由Hermann Schubert定义，用以研究[[射影几何]]中的若干经典的[[计数几何]]问题，
和[[Hilbert 第十五问题]]密切相关。

这些胞腔不仅给出了Graßmann 形完整的有限[[CW复形]]结构；
进一步地，它们的[[闭包]]作为[[上同调]]类，
在[[相交论]]的帮助下还完整给出了Graßmann 形的[[上同调环]]结构。
准确地说，它们的[[Zariski 拓扑|Zariski]] 闭包，称**Schubert 簇**，
对应的类**Schubert 类**张成Graßmann 形的整个[[周环]]，
而此时周环也环[[同构]]于上同调环。

通过适当的组合数学转化，整个上同调环的信息都来自对应[[Young 图]]的组合信息。
此时环乘法的具体计算手段被称为**Schubert 演算**或**Schubert 算术**，
对应在Young 图一侧即[[Littlewood–Richardson 公式]]。

## 定义

### Schubert 簇

::: definition
设域$k$上的$N$维[[线性空间]] $V$，对于 $V$ 中给定的[[旗]] $\mathcal{V}$，也就是线性子空间列
\[
0 \subsetneq V_1 \subsetneq V_2
\cdots \subsetneq V_N = V,
\]
以及满足
\[
N-n \geq a_1 \geq a_2 \cdots \geq a_n \geq 0
\]
的一组[[自然数]] $a = (a_1, a_2, \cdots, a_n)$，
**Schubert 簇** 是 $\mathbf G(n,V)$ 的如下子集
\[
\Sigma_a(\mathcal{V}):=\left\{ [W] \in \mathbf{G}(n, V)
\mid \forall i, \dim(V_{N-n+i-a_i} \cap W)\geq i \right\}.
\]
它们也可看作$\mathbf G(n,V)$的[[闭子概形]]。
通常语境下$\mathcal V$是事先对全体$a$统一给定的，因此也将$\Sigma_a(\mathcal V)$
简记作$\Sigma_a$或$\Sigma_{a_1,\cdots,a_{n'}}$，
其中$a_{n'+1}=a_{n'+2}=\cdots=0$（即去掉$a$末尾的$0$）。
:::

注意到两个旗$\mathcal V_1,\mathcal V_2$之间只差一个$V$的自同构$\tau\in\mathrm{GL}(V)$，
由此可知给定$a$，
周环里的类$\sigma_a:=[\Sigma_a(\mathcal V)]\in A^*(\mathbf G(n,V))$和$\mathcal V$的选取无关。

::: definition
对序列$a$，任取旗$\mathcal V$，类
\[
\sigma_a:=[\Sigma_a(\mathcal V)]\in A^*(\mathbf G(n,V))
\]
被称为一个**Schubert 类**。
:::

### Schubert 胞腔

::: definition
对自然数的不增序列$a=(a_i)_{i=1}^n$，它自然对应一个Young 图，
即看作一个第$i$行具有$a_i$个方格的图形。
用相同的字母$a$表示序列$a$对应的Young 图。

简记$|a|:=\sum_{i=1}^na_i$，以及对自然数$p$和正整数$k$，
定义序列$(p^k):=(\underbrace{p,\cdots,p}_{k\text { 个}})$。

对两个序列$a=(a_i)_{i=1}^n,a'=(a_i')_{i=1}^n$，如果
\[
a_i\le a_i',\ i=1,2,\cdots,n,
\]
则记$a\le a'$，这定义了序列间的[[偏序]]关系，实则也是对应Young 图间的包含偏序关系。
:::

如上构造的 $\mathbf G(n,V)$ 的Schubert 闭子簇 $\Sigma_a$ 具有与指标$a$偏序相容的（反向）包含关系。
具体地说，给定$\mathcal V$，这些$\Sigma_a$满足对任意$a'\ge a$，
有$\Sigma_{a'}\subset\Sigma_{a}$是闭子集，由此定义：

::: definition
对旗$\mathcal V$和序列$a$，$\mathbf G(n,V)$的如下子集
\[
X_a(\mathcal V):=\Sigma_a(\mathcal V)\backslash\left(\bigcup_{a'\ge a}\Sigma_{a'}(\mathcal V)\right)
\]
被称为一个**Schubert 胞腔**，它们也可看作$\mathbf G(n,V)$的局部闭子概形。
:::

::: remark
不难检查，可采取如下的等价定义
\[
X_a(\mathcal V)=\{[W]\mid\dim(V_j\cap W)=i,\ \forall i,j,\ n-k-a_i+i\le j\le n-k-a_{i+1}+i\}.
\]
:::

## 性质

### 基本性质

- 通过将$n$维子空间$W\subset V$与$\mathcal V$相交，得到
  \[
  W_0=0\subset W_1=(V_1\cap W)\subset W_2=(V_2\cap W)\subset\cdots\subset W_N=(V_N\cap W)=W.
  \]
  随着下标$i$从$0$增加到$N$，维数$\dim W_i$将从$0$增长到$n$，
  而且由旗的性质，$\dim W_{i}-\dim W_{i-1}\in\{0,1\}$。
  也就是说恰好存在$n$个下标$0<j_1<\cdots<j_n\le N$，使得$W_i$在这里维数发生跳变，
  即$\dim W_{j_{s}}-\dim W_{j_{s}-1}=1$。

- 最一般的情况下，如果$W$相对$\mathcal V$处于一般位置，那么跳变一定发生得尽量晚。
  即有$j_s=s+(N-n)$，一般地总有$j_s\le s+(N-n)$，因此定义$j_s':=N-n+s-j_s\ge 0$。
  由于$j_{s+1}\ge j_s+1$，因此序列$j_s'$不增。
  那么给定不增的自然数序列$a_s$，
  满足$j_s'\ge a_s$对每个$s$都成立的$[W]\in\mathbf G(n,V)$构成的集合正是$\Sigma_a(\mathcal V)$，
  满足$j_s'=a_s$对每个$s$都成立的$[W]\in\mathbf G(n,V)$构成的集合正是$X_a(\mathcal V)$。

- $\Sigma_a(\mathcal V)$是$X_a(\mathcal V)$的Zariski 闭包；
  每个$X_a(\mathcal V)$都是$\Sigma_a(\mathcal V)$中的一个同构于$\mathbb A_k^{n(N-n)-|a|}$
  的[[仿射概形|仿射]][[开集]]。
  故$\Sigma_a,X_a$皆不可约，且在$\mathbf G(n,V)$中的余维数皆为$|a|$。
  而整个$\mathbf G(n,V)$作为集合是全体$X_a$的无交并。

- 具体写出元素进行观察，例如$n=4,N=9$时，
  对$[W]\in\mathbf G(4,9)$，
  $W$的一组基$w_1,\cdots,w_4$在$k^9$的典范基$\{e_i\}_{i=1}^9$下构成的$4\times 9$矩阵，
  我们对列从右往左（从$e_9$到$e_1$）进行[[Gauss 消元]]（做初等行变换），
  从而得到如下的最简行阶梯矩阵，
  每个这样的矩阵和$\mathbf G(4,9)$中的元素一一对应。
  对最一般的$a=(0,0,0,0)$，所有非零元素都不能在$V_5$中，因此最简行阶梯矩阵形如
  \[
  \left[\begin{matrix}*&*&*&*&*&1&0&0&0\\
  *&*&*&*&*&0&1&0&0\\
  *&*&*&*&*&0&0&1&0\\
  *&*&*&*&*&0&0&0&1
  \end{matrix}\right].
  \]
  故$X_a\cong \mathbb A_k^{20}$。又如$a=(3,2,2,1)$对应的是
  \[
  \left[\begin{matrix}*&*&1&0&0&0&0&0&0\\
  *&*&0&*&1&0&0&0&0\\
  *&*&0&*&0&1&0&0&0\\
  *&*&0&*&0&0&*&1&0
  \end{matrix}\right].
  \]
  简单来说，第$i$行比起$(0,0,0,0)$要多$a_i$个额外的$0$。
  于是其中未定元素$4\times(9-4)-3-2-2-1=12$个，这表明$X_a\cong\mathbb A_k^{12}$。
  而本质上$\Sigma_a$恰包含存在基形如下列矩阵者：
  \[
  \left[\begin{matrix}*&*&*&0&0&0&0&0&0\\
  *&*&*&*&*&0&0&0&0\\
  *&*&*&*&*&*&0&0&0\\
  *&*&*&*&*&*&*&*&0
  \end{matrix}\right].
  \]
  而这样一个元素在$X_a$中当且仅当$3,5,6,8$列构成的子阵行列式非零，
  由此可知$X_a\subset\Sigma_a$开而且$X_a$的闭包是$\Sigma_a$。

- 考虑$V$的两个旗$\mathcal V,\mathcal W$处于一般位置。
  也就是说$V_i\cap W_{N+1-i}$皆一维，而且其中非零元$e_i$随$i$变化构成$V$的一组基。
  为简便，设$V_i=\langle e_1,\cdots,e_i\rangle$而$W_j=\langle e_{N+1-j},\cdots,e_N\rangle$。
  那么对两个序列$a,b$满足$|a|+|b|=n(N-n)$，
  交$\Sigma_a(\mathcal V)\cap\Sigma_b(\mathcal W)$分为两种情况：

  1. 如果$a_i+b_{n+1-i}=N-n$对全体$i$，
     则$\Sigma_a(\mathcal V)\cap\Sigma_b(\mathcal W)$只有唯一闭点，
     该闭点位于$a,b$对应的Schubert 胞腔$X_a(\mathcal V),X_b(\mathcal W)$中，
     且在该点处$X_a(\mathcal V),X_b(\mathcal W)$ [[横截相交]]。

  2. 对上述情况以外的序列$a,b$，Schubert 簇$\Sigma_a(\mathcal V),\Sigma_b(\mathcal W)$不交。

  实际上对第一种情况，二者交的元素对应的行简化基矩阵恰是第$i$行第$N-n+i-a_i=b_{n+1-i}+i$列非零，
  其他格为$0$的矩阵。
  仍以上述$a=(3,2,2,1)$情况为例，相交非平凡情况对应的$b=(4,3,3,2)$，
  $\Sigma_a(\mathcal V),\Sigma_b(\mathcal W)$对应的矩阵分别为
  \[
  \begin{aligned}
    &\left[\begin{matrix}*&*&1&0&0&0&0&0&0\\
    *&*&0&*&1&0&0&0&0\\
    *&*&0&*&0&1&0&0&0\\
    *&*&0&*&0&0&*&1&0
    \end{matrix}\right]\in\Sigma_a(\mathcal V), \\
    &\left[\begin{matrix}0&0&1& \star & 0 & 0 & \star & 0 & \star \\
    0&0& 0 &0&1& 0 & \star & 0 & \star \\
    0&0& 0 &0& 0 &1& \star & 0 & \star \\
    0&0& 0 &0& 0 & 0 &0&1& \star
    \end{matrix}\right]\in\Sigma_b(\mathcal W).
  \end{aligned}
  \]
  从所剩的$*,\star$位置可知对应的切空间直和是$\operatorname{Hom}(W,V/W)$，从而得到横截相交性。
  组合数学的角度看，此时$a,b$对应的Young 图互补：

  ```tikz
  \begin{tikzpicture}
      \draw[thick] (0,0) rectangle (0.5, -0.5);
      \draw[thick] (0.5 ,0) rectangle (1, -0.5);
      \draw[thick] (1 ,0) rectangle (1.5, -0.5);
      \draw[thick, fill=gray] (1.5 ,0) rectangle (2, -0.5);
      \draw[thick, fill=gray] (2 ,0) rectangle (2.5, -0.5);
      \draw[thick] (0,-0.5) rectangle (0.5, -1);
      \draw[thick] (0.5 ,-0.5) rectangle (1, -1);
      \draw[thick, fill=gray] (1 ,-0.5) rectangle (1.5, -1);
      \draw[thick, fill=gray] (1.5 ,-0.5) rectangle (2, -1);
      \draw[thick, fill=gray] (2 ,-0.5) rectangle (2.5, -1);
      \draw[thick] (0,-1) rectangle (0.5, -1.5);
      \draw[thick] (0.5 ,-1) rectangle (1, -1.5);
      \draw[thick, fill=gray] (1 ,-1) rectangle (1.5, -1.5);
      \draw[thick, fill=gray] (1.5 ,-1) rectangle (2, -1.5);
      \draw[thick, fill=gray] (2 ,-1) rectangle (2.5, -1.5);
      \draw[thick] (0,-1.5) rectangle (0.5, -2);
      \draw[thick, fill=gray] (0.5 ,-1.5) rectangle (1, -2);
      \draw[thick, fill=gray] (1 ,-1.5) rectangle (1.5, -2);
      \draw[thick, fill=gray] (1.5 ,-1.5) rectangle (2, -2);
      \draw[thick, fill=gray] (2 ,-1.5) rectangle (2.5, -2);
  \end{tikzpicture}
  ```

  即，对$b$作中心对称后和$a$可以拼成一个$n\times(N-n)$的矩形。

- 全体满足$(0)^n\le a\le ((N-n)^n)$的$a$，
  即满足$N-n\ge a_1\ge\cdots\ge a_n\ge 0$者，
  对应的Schubert 类$\sigma_a$构成$A^*(\mathbf G(n,V))$的一组自由基。
  因为$X_a$给出的Schubert 胞腔结构，由周群的短正合列，
  我们知道$A^*(\mathbf G(n,V))$被这些$\sigma_a$打满，
  而我们通过上述相交讨论证明了对任意$a$，
  有且仅有唯一的$b$使得相交类$\sigma_a\cdot\sigma_b$给出非平凡的$[\mathrm{pt}]\in A^0$。
  因此这些$\sigma_a$间不能具有任何非平凡关系。

- 满足前述条件的Young 图恰有$\binom N n$个，
  这一点从先前$X_a$的矩阵意义更容易理解，
  每个$X_a$对应的恰是在$N$个$\dim W_i$中的某给定的$n$个处跳变的那些$[W]$构成的集合。
  由此作为Abel 群有$A^*(\mathbf G(n,N))\cong\mathbb Z^{\binom Nn}$。

- 倘若考虑基域$k=\mathbb C$的情况，$\mathbf G(n,V)$被看作[[紧集|紧]][[复流形]]，
  对应的Schubert 胞腔都是偶数维欧氏开圆盘，因此边界映射平凡。
  那么解析拓扑下，[[胞腔同调]]的计算以及[[代数几何–解析几何对应]]给出周群和上同调群的同构。
  由于[[相交积]]和[[杯积]]具有[[Poincaré 对偶]]，因此二者作为环也是同构的。

### 一些特殊Young 图

- 考虑两个特殊的Young 图，分别是恰有一整行的$(N-n)$和恰有一整列的$(1^n)$。
  对应两个Schubert 簇$\Sigma_{N-n}$和$\Sigma_{1^n}$，
  前者作为概形，同构于$\mathbf G(n-1,N-1)$；
  后者作为概形，同构于$\mathbf G(n,N-1)$。
  具体实现上，
  前者对应的是$V=k^N$中那些包含$e_1$的$n$维子空间，所以商掉$e_1$后，即$k^{N-1}$中的$n-1$维子空间；
  后者对应的是$V=k^N$中那些含于$V_{N-1}=\langle e_1,\cdots,e_{N-1}\rangle$的$n$维子空间。

- 实际上，
  $\mathbf G:=\mathbf G(n,N)$上的平凡丛$k^N$中具有秩$n$的[[重言丛]]$\tau\to\mathbf G$作为子丛。
  这样就得到秩$N-n$的重言商丛$\xi=k^N/\tau\to\mathbf G$。
  此时顶阶[[陈类]] $c_\mathrm{top}(\tau)=c_n(\tau)=(-1)^n\sigma_{1^n}$；
  而$c_\mathrm{top}(\xi)=c_{N-n}(\xi)=\sigma_{N-n}$。完整的结果是：
  \[
  \begin{aligned}
  c(\tau)=& 1-\sigma_1+\sigma_{1^2}+\cdots+(-1)^n\sigma_{1^n}. \\
  c(\xi)=& 1+\sigma_1+\sigma_2+\cdots+\sigma_{N-n}.
  \end{aligned}
  \]

- 还有一个特殊的Young 图，是只有唯一方格的$(1)$。
  对应的Schubert 簇$\Sigma_1\subset\mathbf G(n,V)$是余一维的超曲面。
  根据周环的计算，这里$\Sigma_1$对应的是$A^1(\mathbf G(n,V))\cong\mathbb Z$的生成元。

- 实际上，[[Plücker 嵌入]] 下，设某$W$的基矩阵$M_W\in \mathrm M_{n\times N}$，
  那么$\Sigma_1$对应最右侧的$n\times n$的行列式为$0$者。
  换言之，
  $\Sigma_1$是嵌入$i:\mathbf G(n,V)\hookrightarrow\mathbb P:=\mathbb P^{\binom Nn}$后与超平面$Y_0=0$
  的交。
  也就是说看作除子$\sigma_1=i^*\mathcal O_{\mathbb P}(1)$。

## Schubert 演算

通过以下一些来自组合数学的公式，我们能比较便捷地计算Schubert 类的相交积。

### Pieri 公式

若其中一个Schubert 类的Young 图只有一行，即形如$\sigma_b\ (b\in\mathbb N)$，
那么此时的乘积由[[Pieri 公式]]给出：

\[
\sigma_b\cdot\sigma_{a_1,\cdots,a_n}=\sum_{\scriptsize\begin{matrix}|c|=|a|+b\\ a_i\le c_i\le a_{i-1}\end{matrix}}\sigma_c.
\]

换言之，乘积结果中每个Schubert 类系数为$1$，
且恰是那些从$a$的Young 图添加$b$个两两不在同一列的那些方块所得者。例如：
\[
\begin{aligned}
\sigma_1\cdot\sigma_{4,2,1}&=\sigma_{5,2,1}+\sigma_{4,3,1}+\sigma_{4,2,2}+\sigma_{4,2,1,1}, \\
\sigma_2\cdot\sigma_{4,3}&=\sigma_{4,3,2}+\sigma_{4,4,1}+\sigma_{5,3,1}+\sigma_{5,4}+\sigma_{6,3}.
\end{aligned}
\]
注意当在$A^*(\mathbf G(n,N-n))$计算时，需要直接抛弃不含于$\sigma_{n^{N-n}}$中的结果。

类似地，关于$\sigma_{1^b}$的乘法也有一样的组合意义。
会得到那些从$a$的Young 图添加$b$个两两不在同一行的那些方块所得者。
也可以通过转置变成前述情况。

### Giambelli 公式

如果只希望具体得到一个Schubert 类的表示方法，那么可以使用如下的[[Giambelli 公式]]：
\[
\sigma_{a_1,\cdots,a_n}=\left|\begin{matrix}
\sigma_{a_1} & \sigma_{a_1+1} & \sigma_{a_1+2} & \cdots & \sigma_{a_1+n-1}\\
\sigma_{a_2-1} & \sigma_{a_2} & \sigma_{a_2+1} & \cdots & \sigma_{a_2+n-2}\\
\sigma_{a_3-2} & \sigma_{a_3-1} & \sigma_{a_3} & \cdots & \sigma_{a_3+n-3}\\
\vdots & \vdots & \vdots & \ddots & \vdots \\
\sigma_{a_n-n+1} & \sigma_{a_n-n+2} & \sigma_{a_n-n+3} & \cdots & \sigma_{a_n}
\end{matrix}\right|.
\]
用多项式的看法，这即将Schur 多项式表示为[[初等对称多项式]]的多项式。
理论上说，这公式加上Pieri 公式已经足够决定两个一般的Schubert 类的乘积：
因为只需将其一转化为若干$\sigma_b\ (b\in\mathbb N)$的多项式即可。
不过对于具体计算问题，这一公式并不实用。

### Littlewood–Richardson 公式

### 其他公式

- 对于两个特殊的类$\sigma_{N-n}$和$\sigma_{1^n}$：
  和前者相交即在Young 图最顶上加一满行，
  和后者相交即在Young 图最左边加一满列，
  然后如果所得的Young 图超出$(N-n)^n$，则结果为$0$。

- 该周环$A^*(\mathbf G(n,N))$有一个[[表现]]，作为分次环，由前面重言丛和其商的关系给出：
  \[
  \begin{aligned}
    A^*(\mathbf G(n,N))=&\frac{\mathbb Z[c_1(\tau),\cdots,c_n(\tau),c_1(\xi),\cdots,c_{N-n}(\xi)]}
    {(c(\tau)c(\xi)=1)}\\
    =&\frac{\mathbb Z[\sigma_1,\sigma_{1^2},\cdots,\sigma_{1^n},\sigma_1,\sigma_2,\cdots,\sigma_{N-n}]}
    {((1-\sigma_1+\sigma_{1^2}+\cdots+(-1)^n\sigma_{1^n})(1+\sigma_1+\sigma_2+\cdots+\sigma_{N-n})-1)}.
  \end{aligned}
  \]

## 例子

我们以Graßmann 形$\mathbf G(n,4)$为例展示有关的结构与性质。
总以$V=k^4$为例，以下取定典范基$e_1,e_2,e_3,e_4\in V$对应的旗$\mathcal V$：
\[
0\subset\langle e_1\rangle\subset\langle e_1,e_2\rangle\subset\langle e_1,e_2,e_3\rangle\subset\langle e_1,e_2,e_3,e_4\rangle=V.
\]

### 射影空间例子

当$n=1,3$时$\mathbf G:=\mathbf G(n,V)$即射影空间$\mathbb P^3$。
此时两者具有自然的对偶关系，表现类似于Young 图的转置。

- 对$n=1$，对应的Schubert 概形$\Sigma_0=\mathbf G=\mathbb P^3$，
  其中具有$\Sigma_1=\mathbb P^2=\{X_3=0\}$，
  其中具有$\Sigma_2=\mathbb P^1=\{X_2=X_3=0\}$，
  其中具有$\Sigma_3=\mathbb P^0=\{X_1=X_2=X_3=0\}$。
  由此计算得到射影空间的上同调环
  $H^*(\mathbb P^3)=\mathbb Z\sigma_3\oplus\mathbb Z\sigma_2\oplus\mathbb Z\sigma_1\oplus\mathbb Z\sigma_0$。
  其中$\sigma_1^2=\sigma_2,\sigma_1^3=\sigma_3$由于Pieri 公式保证。

- 对$n=3$，首先利用Plücker 嵌入，假设$[W]\in\mathbf G$具有的基矩阵
  \[
  M_W=\left[\begin{matrix}
  X_{10}&X_{11}&X_{12}&X_{13}\\
  X_{20}&X_{21}&X_{22}&X_{23}\\
  X_{30}&X_{31}&X_{32}&X_{33}
  \end{matrix}
  \right].
  \]
  再记对应的行列式
  \[
  Y_k=\det[X_{ij}]_{i,j;j\ne k}. k=0,1,2,3.
  \]
  对应的嵌入为$\mathbf G\to\mathbb P^3,[W]\mapsto[Y_0:Y_1:Y_2:Y_3]$，这实则是同构映射。
  对应的Schubert 概形$\Sigma_0=\mathbf G=\mathbb P^3$，
  其中具有$\Sigma_1=\mathbb P^2=\{Y_0=0\}$，
  其中具有$\Sigma_{1,1}=\mathbb P^1=\{Y_0=Y_1=0\}$，
  其中具有$\Sigma_{1,1,1}=\mathbb P^0=\{Y_0=Y_1=Y_2=0\}$。
  类似地，上同调环和$n=1$时一致，只需对全体Young 图取转置即可。

### $\mathbf G(2,4)$例子

- 先构造全体$2\times(4-2)$中的Young 图：

  ```tikz
  \begin{tikzpicture}
      \node at (-0.3,1) {$(0)=\varnothing$};
      \draw[thick] (0,0) rectangle (0.5, -0.5);
      \node at (-0.5,-0.25) {$(1)=$};
      \draw[thick] (-1.5,-1) rectangle (-1, -1.5);
      \draw[thick] (-1.5,-1.5) rectangle (-1, -2);
      \draw[thick] (0.5,-1.25) rectangle (1, -1.75);
      \draw[thick] (1,-1.25) rectangle (1.5, -1.75);
      \node at (-2.1,-1.5) {$(1^2)=$};
      \node at (2, -1.5) {$=(2)$};
      \draw[thick] (-0.25,-2.5) rectangle (0.25, -3);
      \draw[thick] (0.25,-2.5) rectangle (0.75, -3);
      \draw[thick] (-0.25,-3) rectangle (0.25, -3.5);
      \node at (-1,-3) {$(2,1)=$};
      \draw[thick] (-0.25,-4) rectangle (0.25, -4.5);
      \draw[thick] (0.25,-4) rectangle (0.75, -4.5);
      \draw[thick] (-0.25,-4.5) rectangle (0.25, -5);
      \draw[thick] (0.25,-4.5) rectangle (0.75, -5);
      \node at (-0.85,-4.5) {$(2^2)=$};
      \node at (-4,1) {$H^8(\mathbf G)$};
      \node at (-4,-0.25) {$H^6(\mathbf G)$};
      \node at (-4,-1.5) {$H^4(\mathbf G)$};
      \node at (-4,-3) {$H^2(\mathbf G)$};
      \node at (-4,-4.5) {$H^0(\mathbf G)$};
  \end{tikzpicture}
  ```

  由此可知$H^*(\mathbf G)$作为自由Abel 群生成元有
  $\sigma_0,\sigma_1,\sigma_{1^2},\sigma_2,\sigma_{2,1},\sigma_{2^2}$六个。

- 为了确定上同调环，加上已知的$H^n$和$H^{8-n}$的配对结果，
  核心是计算内积$\sigma_1^2,\sigma_{1^2}\sigma_1,\sigma_{2}\sigma_1$。
  根据Pieri 公式，易知
  \[
  \begin{aligned}
  \sigma_1\cdot\sigma_1&=\sigma_{1^2}+\sigma_2, \\
  \sigma_{1^2}\cdot\sigma_1&=\sigma_{2,1}, \\
  \sigma_{2}\cdot\sigma_1&=\sigma_{2,1}.
  \end{aligned}
  \]

- 如果仅是为了确定分次环的结构，那么
  \[
  \begin{aligned}
    &(1-\sigma_1+\sigma_{1^2})(1+\sigma_1+\sigma_2)-1\\
    =&(\sigma_{1^2}+\sigma_2-\sigma_1^2)+(\sigma_{1^2}\sigma_1-\sigma_2\sigma_1)+(\sigma_{1^2}\sigma_2).
  \end{aligned}
  \]
  这些关系能确认例如
  \[
  \begin{aligned}
  \sigma_2^2=\sigma_2(\sigma_1^2-\sigma_{1^2})
  =\sigma_2\sigma_1^2=\sigma_{1^2}\sigma_1^2=\sigma_{1^2}^2.
  \end{aligned}
  \]
  此外$\sigma_2^2\sigma_1=\sigma_2\sigma_{1^2}\sigma_1=0$以及$\sigma_2^3=\sigma_2^2\sigma_1^2=0$。
  这些表达式足够决定分次$A^4\cong\mathbb Z$以及$A^n=0$对一切$n\ge 5$成立。

- 为了应用上述结果，考虑$\mathbb P^3$中的一个处于一般位置的$\mathbb A^3$开集，
  或换言之，观察$k^4$中一个（不过原点的）一般位置的仿射超平面，
  此时$\mathbb P^3$中的旗$\mathcal V$限制在$\mathbb A^3$中就成为$p\subset l\subset \alpha$。
  即一个点（它代表的原本是$V_1$，不过该直线与超平面交于一点），含于一条线，含于一个平面。
  而一般位置的$[W]\in\mathbf G(2,4)$现在是一条直线，记之为$l_W$。
  那么诸$\Sigma_a$对应$l_W$需满足如下条件：

  - $\Sigma_0$：不对$l_W$作任何要求。

  - $\Sigma_1$：$l_W$与$l$相交。

  - $\Sigma_2$：$l_W$经过点$p$。

  - $\Sigma_{1^2}$：$l_W$含于$\alpha$。

  - $\Sigma_{2,1}$：$l_W$含于$\alpha$且经过$p$。

  - $\Sigma_{2^2}$：$l_W$和$l$重合。

- 一个经典的初等相交论问题是询问三维空间中有多少直线和处于一般位置的四条直线相交，
  根据上同调环的计算，$\sigma_1^4=2\sigma_{2^2}$，因此如果基变换到$\mathbb C$，
  那么一般位置下确实存在两条直线符合条件，即便在$\mathbb R$上，
  在至少一个欧氏开条件下这两条直线也能被找到。
  实际上对$\mathbb R^3$一般位置下三条直线$l_1,l_2,l_3$，存在一个[[单叶双曲面]]经过它们。
  由于这曲面是[[直纹面]]，此时和诸$l_i$相交的直线恰是双曲面上所有和$l_i$直纹方向不同的直线。
  现在一般位置的$l_4$如果和双曲面相交，那么过两个交点，各存在唯一符合条件的直线。

### 27 条直线和2875 条直线

- Schubert 演算的一个著名应用就是计算[[27 条直线]]中涉及的相交数。
  根据对应条目中的结果，$X\subset\mathbb P^3$一般位置的三次超曲面具有的直线数被
  [[Euler 类]] $c_4(\operatorname{Sym}^3(\tau^\vee))$ 决定，其中$\tau\to\mathbf G(2,4)$为重言丛。
  注意到由重言丛的全陈类出发能得到对偶的
  \[
  c(\tau^\vee)=1+\sigma_1+\sigma_{1,1}.
  \]
  如果设它是形式线丛的直和$\mathcal L_1\oplus\mathcal L_2$，
  其中$c(\mathcal L_i)=1+\alpha_i$，那么$\alpha_1+\alpha_2=\sigma_1,\alpha_1\alpha_2=\sigma_{1,1}$。
  且
  \[
  c(\operatorname{Sym}^3(\tau^\vee))=(1+3\alpha_1)(1+2\alpha_1+\alpha_2)(1+\alpha_1+2\alpha_2)(1+3\alpha_2).
  \]
  由此可知
  \[
  \begin{aligned}
  c_4(\operatorname{Sym}^3(\tau^\vee))=&3\alpha_1(2\alpha_1+\alpha_2)(\alpha_1+2\alpha_2)3\alpha_2 \\
  =& 9\alpha_1\alpha_2(2(\alpha_1+\alpha_2)^2+\alpha_1\alpha_2) \\
  =& 9\sigma_{1,1}(2\sigma_1^2+\sigma_{1,1})\\
  =& 27\sigma_{2,2}.
  \end{aligned}
  \]

- 类似$27$条直线的计算，可以检查$X\subset\mathbb P^4$一般位置的五次超曲面具有[[2875 条直线]]。
  这次需要计算
  $c_6(\operatorname{Sym}^5(\tau^\vee))$，其中$\tau\to\mathbf G(2,5)$为重言丛。
  由此可知
  \[
  \begin{aligned}
  c_6(\operatorname{Sym}^5(\tau^\vee))=&5\alpha_1(4\alpha_1+\alpha_2)(3\alpha_1+2\alpha_2)(2\alpha_1+3\alpha_2)(\alpha_1+4\alpha_2)5\alpha_2\\
  =&25\alpha_1\alpha_2(4(\alpha_1+\alpha_2)^2+9\alpha_1\alpha_2)(6(\alpha_1+\alpha_2)^2+\alpha_1\alpha_2)\\
  =&25\sigma_{1,1}(4\sigma_1^2+9\sigma_{1,1})(6\sigma_1^2+\sigma_{1,1})\\
  =&25\sigma_{1,1}(13\sigma_{1,1}+4\sigma_2)(7\sigma_{1,1}+6\sigma_2)\\
  =&25(13\cdot 7+4\cdot 6)\sigma_{3^2}=2875\sigma_{3^2}.
  \end{aligned}
  \]
  这方法完全能推广到计算$\mathbb P^{n+1}$的$2n-1$次超曲面上的直线数量。

## 推广

```terms
Schubert 胞腔:
  en: Schubert cell
```
