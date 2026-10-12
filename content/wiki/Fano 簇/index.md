---
title: Fano 簇
categories: [双有理几何]
navboxes: [代数几何, 双有理几何]
---

在[[代数几何]]中，
**Fano 簇**指[[反典范丛]]为[[丰沛线丛]]的[[光滑簇|光滑]][[射影簇]]，
以 [[Gino Fano]] 命名。

大致来说，Fano 簇是典范类为负的代数簇；
对于复光滑 Fano 簇，这表明第一[[陈类]]为正，
因而与正曲率的 [[Kähler 几何]]相关。
Fano 簇与 [[Calabi–丘簇]]、[[一般型簇]]并列为代数簇分类理论中的三种基本方向，
后两者大致对应典范类为零、为正的情况。

一维光滑 Fano 簇只有[[射影直线]] $\mathbb{P}^1$。
在代数闭域上，二维光滑 Fano 簇通常称为 [[del Pezzo 曲面]]，
且已有完全分类。
在复数域上，三维光滑 Fano 簇也已有完整分类。

复光滑 Fano 簇与正 [[Ricci 曲率]]的
[[Kähler–Einstein 度量]]密切联系。
这一情形下的**丘–田–Donaldson 猜想**已被证明
（@丘--田--Donaldson-定理），
它表明复光滑 Fano 簇具有 Kähler–Einstein 度量当且仅当它是
[[K-稳定性|K-多稳定]]的。

## 定义

### 光滑情形

::: definition [Fano 簇]
设 $X$ 是域 $k$ 上的[[光滑簇|光滑]][[射影簇]]，
其[[典范除子]]记为 $K_X$。
若反典范除子 $-K_X$ 为[[丰沛除子]]，
则称 $X$ 为**Fano 簇**。
:::

### 奇异情形

::: definition [$\mathbb{Q}$-Fano 簇]
称[[正规簇|正规]][[射影簇]] $X$ 为 **$\mathbb{Q}$-Fano 簇**，
如果它满足以下性质：

- $X$ 具有 [[klt 奇点]]；

- 典范除子 $K_X$ 是 $\mathbb{Q}$-[[Cartier 除子]]；

- 反典范除子 $-K_X$ 是丰沛 $\mathbb{Q}$-[[Cartier 除子]]。

:::

在极小模型纲领中，即使从光滑簇出发，
也会在双有理变换和收缩过程中遇到带奇点的簇。
因此研究 Fano 簇时通常允许 klt 奇点。
这一类奇点足够温和，许多双有理几何工具对其适用。

## 例子

### 基本例子

- [[射影空间]] $\mathbb{P}^n$ 是 Fano 簇。
  其典范丛为 $\mathcal{O}_{\mathbb{P}^n}(-n-1)$，
  因而
  \[
  -K_{\mathbb{P}^n} = (n+1)H > 0,
  \]
  其中 $H$ 是[[超平面类]]，“$> 0$”指除子丰沛。

- [[二次超曲面]] $Q^n \subset \mathbb{P}^{n+1}$ 是 Fano 簇。
  由[[伴随公式]]，
  \[
  -K_{Q^n} = -(K_{\mathbb{P}^{n+1}} + 2H)|_{Q^n}
  = nH|_{Q^n} > 0.
  \]

### del Pezzo 曲面

二维光滑 Fano 簇即 [[del Pezzo 曲面]]。
若 $X$ 为 del Pezzo 曲面，其次数定义为[[相交数]] $K_X^2$。
在代数闭域上，光滑 del Pezzo 曲面分类如下：

- $\mathbb{P}^2$，次数为 $9$。

- $\mathbb{P}^1 \times \mathbb{P}^1$，次数为 $8$。

- $\mathbb{P}^2$ 在 $r$ 个一般位置点处的[[爆破]]，
  其中 $1 \leq r \leq 8$，次数为 $9-r$。

这里“一般位置”表示这些点满足使反典范除子保持丰沛的条件。
例如没有三点共线，没有六点同在一条二次曲线上；
在八点情形还要排除通过八点且在其中一点奇异的三次曲线。
爆破得到的例外曲线及其严格变换给出曲面上的 $(-1)$-曲线，
这些曲线控制了 del Pezzo 曲面的双有理几何。

### 完全交

设 $X \subset \mathbb{P}^{n+s}$ 是 $s$ 个超曲面的光滑[[完全交]]，
其维数为 $n$，超曲面的次数分别为 $d_1,\dotsc,d_s$。
设 $H$ 为 $\mathbb{P}^{n+s}$ 的超平面类。由伴随公式，
\[
K_X = (K_{\mathbb{P}^{n+s}} + d_1H + \cdots + d_sH)|_X
= \mathcal{O}_X(d_1 + \cdots + d_s - n - s - 1).
\]
因此
\[
-K_X = \mathcal{O}_X(n+s+1-d_1-\cdots-d_s).
\]
于是 $X$ 为 Fano 簇当且仅当
\[
d_1 + \cdots + d_s \leq n+s.
\]

例如，三次曲面 $X \subset \mathbb{P}^3$ 满足 $d=3 \leq 3$，
故为 Fano 簇；这也是一个次数为 $3$ 的 del Pezzo 曲面。

### 旗簇

设 $G$ 为半单[[代数群]]，$P \subset G$ 为[[抛物子群]]。
则[[旗簇]] $G/P$ 是光滑射影簇，且是 Fano 簇。
当 $P$ 为极大抛物子群时，这给出许多 [[Picard 数]]为 $1$ 的 Fano 簇，
例如 [[Graßmann 簇]]和二次超曲面。

### Fano 环簇

[[环簇]]给出一类可由组合几何描述的 Fano 簇。
$n$ 维 Fano 环簇对应于 $n$ 维的格点多面体，称为 [[Fano 多面体]]，
因此 Fano 环簇的分类可转化为满足相应性质的格点多面体的分类。
三维 Gorenstein Fano 环簇的分类见
[@Batyrev1981]。

### 三维 Fano 簇

三维光滑 Fano 簇的分类是 Fano 簇理论的核心成果之一。
在复数域上，三维光滑 Fano 簇共有 $105$ 个形变族。
其中 Picard 数为 $1$ 的情形由 Iskovskikh 分类
[@Iskovskikh1977] [@Iskovskikh1978]，
其余情形由 Mori–Mukai 分类 [@MoriMukai1981]。

## 性质

### 上同调消失

::: proposition
设 $X$ 是特征零代数闭域上的光滑 Fano 簇。
则
\[
H^i(X, \mathcal{O}_X)=0, \quad i>0.
\]
特别地，$\chi(X,\mathcal{O}_X)=1$。
:::

::: proof
由定义，$-K_X$ 是丰沛除子。
对丰沛线丛 $\mathcal{O}_X(-K_X)$ 应用[[Kodaira 消失定理]]，
得到
\[
H^i(X,K_X \otimes \mathcal{O}_X(-K_X))=0, \quad i>0.
\]
左侧即 $H^i(X,\mathcal{O}_X)$。
:::

当 $X$ 为复光滑 Fano 簇时，
上述消失定理给出 $H^1(X,\mathcal{O}_X)=H^2(X,\mathcal{O}_X)=0$。
由[[指数层正合列]]可知，第一陈类给出同构
\[
\operatorname{Pic}(X) \simeq H^2(X,\mathbb{Z}).
\]
因此复光滑 Fano 簇的 [[Picard 群]]是离散的拓扑不变量。

### 有理连通性

::: theorem [Campana, Kollár–Miyaoka–Mori]
特征零代数闭域上的光滑 Fano 簇是[[有理连通簇|有理连通]]的。
:::

这一结果由 Campana 以及 Kollár–Miyaoka–Mori 独立证明
[@Campana1992] [@KollarMiyaokaMori1992]。
这里，有理连通是指对任意两点 $x,y \in X$，存在一条有理曲线经过它们。

在复数域上，有理连通的光滑射影簇是[[单连通空间|单连通]]的，
因此复光滑 Fano 簇也都单连通。

### 指数

::: definition [指数]
设 $X$ 是光滑 Fano 簇。
其**指数** $\iota(X)$ 是满足下述条件的最大正整数：
存在 Cartier 除子 $H$ 使得
\[
-K_X = \iota(X)H
\]
在 $\operatorname{Pic}(X)$ 中成立。
:::

::: theorem [Kobayashi–Ochiai]
设 $X$ 为 $n$ 维复光滑 Fano 簇。则
\[
\iota(X) \leq n+1.
\]
若 $\iota(X)=n+1$，则 $X \simeq \mathbb{P}^n$。
若 $\iota(X)=n$，则 $X \simeq Q^n \subset \mathbb{P}^{n+1}$，
其中 $Q^n$ 为光滑二次超曲面。
:::

该定理来自 Kobayashi–Ochiai 的刻画定理
[@KobayashiOchiai1973]，可视为正曲率复几何中的刚性结果。
射影空间与二次超曲面的例子表明上述界可取等号。

### 有界性

在特征零代数闭域上，固定维数后，
光滑 Fano 簇只形成有限多个形变族。
这是 Kollár–Miyaoka–Mori 有界性定理的结果
[@KollarMiyaokaMori1992]。
在维数 $\leq 3$ 时，这表现为例子一节中给出的显式分类。

更一般地，Birkar 证明了 Borisov–Alexeev–Borisov 猜想：
固定维数 $n$ 和正数 $\varepsilon$ 后，
具有 $\varepsilon$-[[对数典范奇点]]的 $n$ 维 $\mathbb{Q}$-Fano 簇构成[[有界族]]。
这一结果是极小模型纲领的重要组成部分 [@Birkar2021]。

### K-稳定性与 Kähler–Einstein 度量

在复几何中，光滑 Fano 簇的反典范类给出正的 Kähler 类。
若存在 Kähler 形式 $\omega \in c_1(X)$ 满足
\[
\operatorname{Ric}(\omega)=\omega,
\]
则称 $X$ 具有 [[Kähler–Einstein 度量]]。
这是一类非线性偏微分方程的解。

::: theorem [丘–田–Donaldson 定理] {@丘--田--Donaldson-定理}
复光滑 Fano 簇具有 Kähler–Einstein 度量，
当且仅当它是 [[K-稳定性|K-多稳定]]的。
:::

该定理由陈–Donaldson–孙和田证明
[@ChenDonaldsonSun2015a] [@ChenDonaldsonSun2015b]
[@ChenDonaldsonSun2015c] [@Tian2015]。
它把关于度量的分析问题转化为代数几何中的稳定性问题。

K-稳定性也用于构造 Fano 簇的[[模空间]]。
固定维数和反典范体积的 K-半稳定 $\mathbb{Q}$-Fano 簇形成[[代数叠]]，
K-多稳定对象对应其[[优模空间]]中的闭点。
综述见 [@Xu2021]。

[[$\delta$ 不变量]]是刻画 K-稳定性的一种数值工具。
对 $\mathbb{Q}$-Fano 簇 $X$，$\delta(X) \geq 1$ 对应 K-半稳定，
而 $\delta(X)>1$ 对应一致 K-稳定
[@BlumJonsson2020]。

## 参考文献

```bibliography
Batyrev1981:
  type: article
  author: 'Batyrev, Victor V.'
  title: Toric Fano threefolds
  journaltitle: Izvestiya Akademii Nauk SSSR Seriya Matematicheskaya
  volume: 45
  number: 4
  pages: 704–717
  year: 1981
Birkar2021:
  type: article
  author: 'Birkar, Caucher'
  title: Singularities of linear systems and boundedness of Fano varieties
  journaltitle: Annals of Mathematics
  volume: 193
  number: 2
  pages: 347–405
  year: 2021
  arxiv: '1609.05543'
BlumJonsson2020:
  type: article
  author: ['Blum, Harold', 'Jonsson, Mattias']
  title: 'Thresholds, valuations, and K-stability'
  journaltitle: Advances in Mathematics
  volume: 365
  pages: 107062
  year: 2020
  arxiv: '1706.04548'
Campana1992:
  type: article
  author: 'Campana, Frederic'
  title: Connexite rationnelle des varietes de Fano
  journaltitle: Annales scientifiques de l'Ecole normale superieure
  volume: 25
  number: 5
  pages: 539–545
  year: 1992
ChenDonaldsonSun2015a:
  type: article
  author: ['Chen, Xiuxiong', 'Donaldson, Simon', 'Sun, Song']
  title: 'Kähler–Einstein metrics on Fano manifolds. I: Approximation of metrics with cone singularities'
  journaltitle: Journal of the American Mathematical Society
  volume: 28
  number: 1
  pages: 183–197
  year: 2015
  arxiv: '1211.4566'
ChenDonaldsonSun2015b:
  type: article
  author: ['Chen, Xiuxiong', 'Donaldson, Simon', 'Sun, Song']
  title: 'Kähler–Einstein metrics on Fano manifolds. II: Limits with cone angle less than $2\pi$'
  journaltitle: Journal of the American Mathematical Society
  volume: 28
  number: 1
  pages: 199–234
  year: 2015
  arxiv: '1212.4714'
ChenDonaldsonSun2015c:
  type: article
  author: ['Chen, Xiuxiong', 'Donaldson, Simon', 'Sun, Song']
  title: 'Kähler–Einstein metrics on Fano manifolds. III: Limits as cone angle approaches $2\pi$ and completion of the main proof'
  journaltitle: Journal of the American Mathematical Society
  volume: 28
  number: 1
  pages: 235–278
  year: 2015
  arxiv: '1302.0282'
Iskovskikh1977:
  type: article
  author: 'Iskovskikh, Vasilii A.'
  title: Fano threefolds. I
  journaltitle: Izvestiya Akademii Nauk SSSR Seriya Matematicheskaya
  volume: 41
  number: 3
  pages: 516–562
  year: 1977
Iskovskikh1978:
  type: article
  author: 'Iskovskikh, Vasilii A.'
  title: Fano threefolds. II
  journaltitle: Izvestiya Akademii Nauk SSSR Seriya Matematicheskaya
  volume: 42
  number: 3
  pages: 506–549
  year: 1978
KobayashiOchiai1973:
  type: article
  author: ['Kobayashi, Shoshichi', 'Ochiai, Takushiro']
  title: Characterizations of complex projective spaces and hyperquadrics
  journaltitle: Journal of Mathematics of Kyoto University
  volume: 13
  pages: 31–47
  year: 1973
KollarMiyaokaMori1992:
  type: article
  author: ['Kollar, Janos', 'Miyaoka, Yoichi', 'Mori, Shigefumi']
  title: Rational connectedness and boundedness of Fano manifolds
  journaltitle: Journal of Differential Geometry
  volume: 36
  number: 3
  pages: 765–779
  year: 1992
MoriMukai1981:
  type: article
  author: ['Mori, Shigefumi', 'Mukai, Shigeru']
  title: 'Classification of Fano 3-folds with $B_2 \geq 2$'
  journaltitle: Manuscripta Mathematica
  volume: 36
  number: 2
  pages: 147–162
  year: 1981
Tian2015:
  type: article
  author: 'Tian, Gang'
  title: K-stability and Kähler–Einstein metrics
  journaltitle: Communications on Pure and Applied Mathematics
  volume: 68
  number: 7
  pages: 1085–1156
  year: 2015
  arxiv: '1211.4669'
Xu2021:
  type: article
  author: 'Xu, Chenyang'
  title: 'K-stability of Fano varieties: An algebro-geometric approach'
  journaltitle: EMS Surveys in Mathematical Sciences
  volume: 8
  number: 1
  pages: 265–354
  year: 2021
  arxiv: '2011.10477'
```

```terms
Fano 簇:
  en: Fano variety
  de: Fano-Varietät :f
  fr: variété de Fano :f
```
