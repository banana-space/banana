---
title: $3264$ 条曲线
categories: [计数几何]
notices:
  - name: 问题
    items:
      - '“证明 1”一节中的 $s(N_{T/\mathbb{P}^5})$ 与 $c(N_{D_i/\mathbb{P}^5}|_T)$ 似乎应分别为 Segre 类 $s(T,\mathbb{P}^5)$ 与超曲面 $H_{D_i}$ 的法丛的陈类。'
      - '“方法 2.1”一节中的被积式 $(2E+6b^*h)^5$ 似乎应为 $(6b^*h-2E)^5$（因为 $H''_{D_i}=b^*H_{D_i}-2E$）。'
      - “证明 3”一节中的记号 $M$ 没有定义，似乎应为 $L$。
navboxes: [计数几何]
---

**$3264$ 条曲线**是[[计数几何]]中的一个经典结论，是说在
平面$\mathbb{P}^2_k$上，与$5$条给定一般位置的圆锥曲线相切的圆锥曲线的
数目为 $3264$，其中$k$是代数闭域且$\mathrm{char}(k)\neq2$。

若$\mathrm{char}(k)=2$，类似可以得到结果应修正为$51$。

## 定理与证明

### 历史和证明之铺垫

不难看出平面$\mathbb{P}^2_k$上的圆锥曲线的模空间同构于$\mathbb{P}^5_k$
（例如将方程的$6$个系数拿出来即可，严谨的证明是因为其是[[Hilbert 概形]]的
简单特例），而给定一个圆锥曲线$D$，则所有和$D$相切的圆锥曲线构成
$\mathbb{P}^5_k$的一个$6$次超曲面$H_D$。

在1848年，[[Jakob Steiner]]猜测与$5$条给定一般位置的圆锥曲线相切的圆锥曲线的
数目为 $7776$（因为$6^5=7776$），事实说明这个猜测是错误的。
在1864年数学家[[Michel Chasles]]猜测了正确结果为$3264$。

那么不禁要问
直接$6^5=7776$有何错误之处？事实上即使$5$条圆锥曲线在一般位置上，
也会有重数为$2$的直线来冒充圆锥曲线。这是因为重数为2的直线一定和这
$5$条圆锥曲线相交，相交重数是$2$，因此会被认定为相切！所以我们需要排除掉
这一部分的干扰。

考虑[[Veronese 嵌入]]为$\mathbb{P}^2_k\to S\subset\mathbb{P}^5_k$，
我们发现所谓重数为2的直线被$(ax_0+bx_1+cx_2)^2$定义，所以所有的$2$重
直线的模空间在$\mathbb{P}^5_k$内就是刚刚的Veronese曲面$S\subset\mathbb{P}^5_k$。

接下来我们证明这一数字成立，证明有多种方法，这里我们给出两个证明（其中第二个证明
里我们又细分出两种证明），
并给出第三种证明的概要和出处。因此共有四种证明。

### 证明 1：例外相交公式

此处参考 [@Fulton98, Proposition 9.1.1]。

首先，[[例外相交公式]]告诉我们，即使我们知道要考虑Veronese曲面$S$，
我们仍需搞清楚$\bigcap_iH_{D_i}$在Veronese曲面$S$上的概形结构。
设$\mathscr{I}_S$是$S\subset\mathbb{P}^5$的理想层，事实上
$\bigcap_iH_{D_i}$在Veronese曲面$S$上的概形结构
为$T=V(\mathscr{I}_S^2)$！这里略去这个事实的证明。

首先假设$S\cong\mathbb{P}^2$的超平面类为$h$，
则很容易计算得到$s(N_{S/\mathbb{P}^5})=1-9h+51h^2$，
故而$s(N_{T/\mathbb{P}^5})=8-144h+1632h^2$。
且$c(N_{D_i/\mathbb{P}^5}|_T)=1+6\cdot 2h=1+12h$。

根据[[例外相交公式]]，在$S$内贡献的个数为

```math
\begin{aligned}
    &\int_S(H_{D_1}\cdots H_{D_5})^T\\
    &=\int_S\left(\prod_{i=1}^5c(N_{D_i/\mathbb{P}^5}|_T)\cap s(T,\mathbb{P}^5)\right)\\
    &=\int_S(1+12h)^5(8-144h+1632h^2)=4512.
\end{aligned}
```

故我们需要的结果为
\[
6^5-4512=7776-4512=3264.
\]

### 证明 2：直接计算

此处参考 [@Fulton98, 例 9.1.9]。

假设这$5$条给定一般位置的圆锥曲线为$D_1,...,D_5$，Fulton 指出我们此时的
“一般位置”是指满足如下条件：

- (1) 没有过同一个点的三条曲线；

- (2) 不存在这样的对$(\ell,p_1,p_2)$，其中$\ell$是直线且$p_i\in\ell$，使得
  这五条曲线要不与$\ell$相切，要不和$p_1$或$p_2$相交；

- (3) 这五条曲线两两不相切；

- (4) 如果有两条直线分别和两个圆锥曲线相切，那么它们不可以同时相交于第五个圆锥曲线上。

然后我们来解释一下想法，我们的想法是既然$H_{D_i}$都交于$S$，所以
我们无法得到正确的相交数，那么我们就考虑将$S$ [[爆破]] 掉，此时
$H_{D_i}$的严格变换会在爆破后分开，于是可以得到正确的结果。

考虑爆破为$b:\mathrm{Bl}_S\mathbb{P}^5\to\mathbb{P}^5$，例外除子
为$E$。
假设$H_{D_i}$的严格变换为$H'_{D_i}$，
我们断言$b^*H_{D_i}=2E+H'_{D_i}$（这个实际上可以从上述的
$T=V(\mathscr{I}_S^2)$看出，但我们也可以直接计算）。
这里我们需要一个爆破的常用结果：

::: theorem
假设$X\to Y$是代数概形之间的正则嵌入，考虑爆破
$b:\mathrm{Bl}_XY\to Y$和纤维积：
\[
\begin{tikzcd}
  E & {\mathrm{Bl}_XY} \\
  X & Y
  \arrow["j", hook, from=1-1, to=1-2]
  \arrow["g", from=1-1, to=2-1]
  \arrow["\ulcorner"{anchor=center, pos=0.125}, draw=none, from=1-1, to=2-2]
  \arrow["b", from=1-2, to=2-2]
  \arrow["i", hook, from=2-1, to=2-2]
\end{tikzcd}
\]
设$V\subset Y$是$k$维子簇，设$V'$是其严格变换，
则
$$
b^*[V]=[V']+j_*(c(g^*N_{i}/\mathscr{O}(-1))\cap s(V\cap X,V))_k
$$
:::

::: proof
见 [@Fulton98, 定理 6.7]。
:::

根据这个结果很容易算出上述断言，这里略去。

我们再次考虑上述给“一般位置”的说明，
其中(1)(2)告诉我们$\bigcap H_{D_i}'\cap E=\emptyset$，
而(3)(4)告诉我们$\bigcap H_{D_i}$在$S$之外都是重数为$1$的离散点，
因此可以放心地计算了。

#### 方法 2.1：直接计算

首先假设
$\mathbb{P}^5$的超平面类为$h$，因此$h$拉回到$S$上是$2h_S$，
此时我们想要的结果就是
$$
\int_{\mathrm{Bl}_S\mathbb{P}^5}\prod_{i=1}^5H_{D_i}'
=\int_{\mathrm{Bl}_S\mathbb{P}^5}(2E+6b^*h)^5.
$$
不难计算得到是$3264$，此处我们也运用了
射影丛的Chow环结构，将计算转移到$E=\mathbb{P}(N_{S/\mathbb{P}^5})$
之内。

#### 方法 2.2：转化到 Segre 类

再次考虑
\[
\begin{tikzcd}
  E & {\mathrm{Bl}_S\mathbb{P}^5} \\
  S & {\mathbb{P}^5}
  \arrow["j", hook, from=1-1, to=1-2]
  \arrow["g", from=1-1, to=2-1]
  \arrow["\ulcorner"{anchor=center, pos=0.125}, draw=none, from=1-1, to=2-2]
  \arrow["b", from=1-2, to=2-2]
  \arrow["i", hook, from=2-1, to=2-2]
\end{tikzcd}
\]
我们熟知Segre类和爆破有如下关系：
$$
s(S,\mathbb{P}^5)=\sum_{k\geq1}(-1)^{k-1}g_*(E^k).
$$
故而由 (1)(2) 给出的$\bigcap H_{D_i}'\cap E=\emptyset$
得到（缩小$\mathrm{Bl}_S\mathbb{P}^5$使得交没有$S$之外的分支）
$$
0=g_*\left( \prod_{i=1}^5(b^*H_{D_i}-2E)\right).
$$
故而展开得到：

```math
\begin{aligned}
    (H_{D_1}\cdots H_{D_5})^S
    &=2^5s(S,\mathbb{P}^5)_0+2^4\sum_iH_{D_i}\cdot
    s(S,\mathbb{P}^5)_1+2^3\sum_{i\neq j}H_{D_i}H_{D_j}
    s(S,\mathbb{P}^5)_2.
\end{aligned}
```

故而

```math
\begin{aligned}
    &\int_S(H_{D_1}\cdots H_{D_5})^S\\
    &=\int_S(2^5\cdot 51h^2-5\cdot 2^4\cdot 2\cdot 6\cdot 9h^2+10\cdot 2^3\cdot(6\cdot 2)^2)=4512.
\end{aligned}
```

因此我们再次得到
\[
6^5-4512=7776-4512=3264.
\]

### 证明 3：更好的模空间紧化（概要）

此处参考 [@3264andallthat, 第 8 章]。我们同样只简述思路、定义和结果。

这里有两种模空间紧化可供选择（其实是同构的），
一种是稳定映射的模空间$\overline{\mathcal{M}}_{0}(\mathbb{P}^2,2)$，
一种是完备圆锥曲线模空间$X$（其实这两个空间一样，甚至都同构于
$\mathrm{Bl}_S\mathbb{P}^5$，但思考的角度已经截然不同）。
这两者的本质类似，都是给一组圆锥曲线形变时候的极限带来更多的信息
（实际上这两种带来的信息等价）。

先说完备圆锥曲线模空间。

事实上一个射影簇的很多性质和形变关系可以从其[[对偶簇]]反映出来，
比如说给一簇圆锥曲线$C_t$，其对偶的极限$\lim\limits_{t\to0}C_t^*$
是被$\lim\limits_{t\to0}C_t$的变化决定，而非被$C_0$决定。
不过$C_0$光滑时极限确实由$C_0$决定，所以我们需要考虑退化的情况。

例如如果一组光滑圆锥曲线退化成两条不同直线的并，此时其对偶簇会退化成
一个二重直线，对应于上述两条直线的交点，因为此时这两条直线的切线在退化过程中
的切线依旧包含所有方向的直线，所以只会退化到过交点的所有直线；

而如果一组光滑圆锥曲线退化成一个二重直线，此时其对偶簇会退化成
两条直线（可以相同也可以不同）的并，也就是考虑$f_t:\mathbb{P}^1\to\mathbb{P}^2$
为这一族曲线，那么$f_0$的像只是个（二重）直线，故而对应于
$W\subset H^0(\mathscr{O}_{\mathbb{P}^1}(2))$的二维子空间。
那么对偶簇就是这个线性系诱导映射的基点。

一个合理的模空间紧化构造为：
$$
X=\overline{\{(C,C^*)\in\mathbb{P}^5\times\mathbb{P}^{5*}:
C\text{光滑且}C^*\textsf{为其对偶簇}\}}\subset\mathbb{P}^5\times\mathbb{P}^{5*}.
$$
这就是完备圆锥曲线模空间。

之后我们考虑和五个一般位置的圆锥曲线相切的情况。
考虑$Z_D$为$X$内和$D$相切的光滑对象对应的除子的闭包，
那么实际上最多只有两种完备圆锥曲线能同时出现在
这五个除子内：$(C,C^*)$光滑；$(2L,2p^*)$全二重。
事实上第二种也不可能出现，这是因为找一族光滑的逼近它，
会得到：这个点在$Z_D$内只可能发生在$p\in D$或$M\in D^*$的情况内！
显然五个一般位置的圆锥曲线不可能满足。

因此出现在$\bigcap_{i=1}^5 Z_{D_i}$的只有光滑的完备圆锥曲线！
于是我们计算其Chow环即可。

对于$\overline{\mathcal{M}}_{0}(\mathbb{P}^2,2)$，
也考虑退化到二重直线的情况即可。考虑一组$C_t$光滑且$\lim\limits_{t\to0}C_t=C_0=2L$，
则稳定映射$f_t$会退化到$\mathbb{P}^1\stackrel{2:1}{\to}L$
或者$\mathbb{P}^1\cup\mathbb{P}^1\to L$，这取决于映射的分歧点个数。
因此这和对偶簇观点是一样的。

## 更多的推广

我们有如下结论：

::: theorem
为了方便，假设域的特征为零。
给定$r$维的平面曲线族和$r$个在一般位置的平面曲线$D_1,...,D_r$，
假设$\deg D_i=n_i$且$m_i$为过一个一般点且和$D_i$相切的直线数量，
则在这个平面曲线族里和$D_1,...,D_r$相切的曲线数量为
$$
\prod_{i=1}^r(m_i\mu+n_i\nu).
$$
其中$\mu^k\nu^{r-k}$为这个曲线族内过$k$个一般点且和$r-k$个一般位置直线相切的个数。
:::

此定理的证明更接近上面 $3264$ 条曲线的第三种证明，这里例外相交公式失效，
所以需要更细致的分析和极限逼近的方法，
见 [@Fulton98, 第 10.4 节]。一些直接推论：

::: corollary
假设特征$0$。在$\mathbb{P}_k^2$里和$5$个一般位置的$n$次光滑曲线相切的
圆锥曲线的个数为
$$
N=n^5((n-1)^5+10(n-1)^4+40(n-1)^3+40(n-1)^2+10(n-1)+1).
$$
:::

::: example
假设特征$0$。在$\mathbb{P}_k^2$里和$5$个一般位置的$3$次光滑曲线相切的
圆锥曲线的个数为$168399$，$11$次为$39312710151$个。
:::

## 参考文献

```bibliography
3264andallthat:
  type: book
  author: ['Eisenbud, David', 'Harris, Joe']
  year: 2016
  title: '3264 and All That: A Second Course in Algebraic Geometry'
  publisher: Cambridge University Press
Fulton98:
  type: book
  author: 'Fulton, William'
  year: 1998
  title: Intersection Theory
  publisher: Springer
```

```terms
$3264$ 条曲线:
  en: $3264$ curves
  de: $3264$ Kurven
  fr: $3264$ courbes
  grc: $3264$ καμπύλες
  la: $3264$ curvas
```
