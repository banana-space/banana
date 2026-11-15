---
title: 解析数论
categories: [解析数论]
---

**解析数论**是使用[[数学分析]]的方法研究[[数论]]问题的数学分支,
研究整数与素数的数量、平均值和分布规律。

例如，解析数论的经典结论是[[素数定理]]:
记 $\pi(x)$ 为不超过实数 $x$ 的素数个数。
素数定理表明，
当 $x \to \infty$ 时，
\[
\pi(x) \sim \frac{x}{\log x},
\]
即二者的比值趋于 $1$。
又如，[[Goldbach 猜想]]，
[[孪生素数猜想]]，
以及 [[Waring 问题]]等研究素数的和、差以及整数幂之和的问题，
也是解析数论中的重要问题。

## 历史

### 18 世纪

Euler 用无穷级数与乘积研究素数，
将整数的素因子分解与分析中的收敛、发散问题联系起来。
在后来称为 [[Euler 乘积]]的表达式中，
利用整数的唯一分解，整数倒数幂的级数在绝对收敛范围内可以写成遍历素数的乘积。
这使素数问题能够通过级数的性质来研究，
成为解析数论的早期原型，见 [@Euler1744]。

### 19 世纪上半叶

Gauß 和 Legendre 根据素数表的计算，
提出了素数计数的近似规律。
特别是用 $x/\log x$ 或对数积分近似 $\pi(x)$ 的想法，
成为后来[[素数定理]]的研究起点。

1837 年，Dirichlet 引入特征与 [[Dirichlet $L$ 函数]]，
证明了首项与公差互素的算术级数中有无穷多个素数。
这一工作把级数的解析性质用于同余类中的素数问题，
通常被视为解析数论形成的重要标志。

### 19 世纪后半叶

1859 年，Riemann 将[[复分析]]系统地用于 [[Riemann $\zeta$ 函数]]的研究，
提出把素数计数与该函数零点联系起来的显式公式，
并提出了 [[Riemann 猜想]]，见 [@Riemann1859]。
素数分布的主项与误差，因而与复平面上的解析性质建立了联系。

1896 年，Hadamard 和 de la Vallée Poussin 分别证明了素数定理。
证明中的关键，是排除 $\zeta$ 函数在直线 $\operatorname{Re}s=1$ 上的零点。
随后，对零点、无零区域与显式公式的研究，
进一步推动了素数计数误差和算术级数中素数分布的研究。

### 20 世纪前半叶

Hardy 和 Ramanujan 在 1918 年关于[[整数分拆]]的工作中发展了圆法的原型。
Hardy 与 Littlewood 随后将其用于 Waring 问题等加性问题，
把表示数写成积分，再区分贡献较大的主弧与需要控制的次弧。
1937 年，Vinogradov 用素数指数和的方法，
证明了每个充分大的奇数都能表示为三个素数之和。
这一时期圆法的发展可参见 [@Wooley2023, §1]。

与此同时，Brun 发展了[[筛法]]，
通过逐步排除具有指定小素因子的整数来研究素数与近素数问题。
Selberg 等人又发展了新的筛权与估计方法，
使筛法成为研究素数间隔、素数模式和计数上界的重要工具。

### 20 世纪中叶以来

1940 年代末，Selberg 和 Erdős 给出了素数定理的初等证明，
说明初等恒等式与实变量估计也能处理深刻的素数分布问题，
参见 [@Selberg1949]。
Erdős、Kac 等人的工作则将算术函数的分布与概率极限定律联系起来，
推动了[[概率数论]]的发展。

此后，大筛、自守形式的谱方法、调和分析与组合方法进一步发展，
也加强了解析数论与其他数学分支之间的联系。
2013 年，张益唐取得了有界素数间隔的无条件结果；
Maynard 与 Tao 随后独立发展了新的筛法，
使同一框架能够研究有界区间内出现多个素数的问题
[@Zhang2014; @Maynard2015]。

## 分支

### 主要工具

- **[[$\zeta$ 函数]]与[[$L$ 函数]]**把算术函数或素数处的信息编码为解析函数。
  通过研究解析延拓、极点、零点和函数方程，
  可以估计系数的部分和，并由此研究素数分布与其他算术计数问题。
  [[Riemann $\zeta$ 函数]]和 [[Dirichlet $L$ 函数]]是基本例子。

- **[[指数和]]与[[调和分析]]**研究带有振荡因子的算术求和，
  利用不同项之间的相消，得到比逐项取绝对值更精细的估计。
  这些估计用于研究计数误差和方程的解数，
  有限域上的指数和还与[[代数几何]]紧密联系。

- **[[筛法]]**利用整除条件筛选整数，
  估计素数、素因子个数受限制的整数以及素数模式的数量。
  [[Brun 筛]]、[[Selberg 筛]]和[[大筛]]等方法各有适用范围，
  常为素数分布与加性问题提供上界、下界或平均估计。

- **[[圆法]]**借助[[生成函数]]或 [[Fourier 级数]]，
  把加法表示的计数转化为圆周上的积分。
  它通常在主弧上求出预期的主要贡献，在次弧上估计误差，
  是研究 Waring 问题、素数加法表示和多变量方程的重要方法。

### 研究领域

- **[[乘性数论]]与素数分布**研究素数、素因子分解及[[乘性函数]]的平均行为。
  典型问题包括算术级数与短区间中的素数、素数间隔，
  以及 [[Möbius 函数（数论）|Möbius 函数]]等算术函数的部分和。
  [[孪生素数猜想]]是关于素数间隔的典型问题。

- **[[加性数论]]**研究整数能否写成指定集合中元素的和，以及这种表示的数目。
  [[Goldbach 猜想]]关注素数之和，[[Waring 问题]]关注整数幂之和。
  圆法、筛法及组合方法用于证明表示的存在性，
  也用于给出表示数的渐近公式与误差估计。

- **[[Diophantus 方程]]的解析理论**研究整数方程在给定大小或高度限制下的解数。
  例如，可以研究多变量多项式方程的整数解，
  或[[代数簇]]上有界高度的有理点。
  这一方向利用圆法、指数和与筛法等方法，
  并与[[算术几何]]联系，参见 [@IwaniecKowalski2004]。

- **[[Diophantus 逼近]]**研究实数的有理逼近精度及其与分母大小的关系，
  也研究数列的小数部分如何分布。
  指数和估计、度量方法和调和分析把这些问题联系起来，
  并可用于处理分数部分限制下的算术计数。

- **[[$L$ 函数]]与[[自守形式]]的解析理论**研究零点分布、均值、特殊值及参数变化时的大小。
  自守形式的 Fourier 系数和谱分解提供了新的算术信息与估计方法，
  使这一方向同时联系素数分布、表示论和代数数论。

- **[[概率数论]]**从 $1,\ldots,N$ 中均匀抽取整数，
  研究素因子个数等算术函数的典型大小、波动和极限分布。
  它把算术函数的求和与概率中的矩、相关性和极限定律联系起来，
  也关心随机模型能在多大程度上反映真实的算术规律
  [@Harper2015, §1]。

## 参考文献

```bibliography
IwaniecKowalski2004:
  type: book
  author: [Henryk Iwaniec, Emmanuel Kowalski]
  title: Analytic Number Theory
  year: 2004
  series: American Mathematical Society Colloquium Publications
  volume: 53
  publisher: American Mathematical Society

Kedlaya2007:
  type: preprint
  author: Kiran S. Kedlaya
  title: '18.785: Analytic Number Theory'
  year: 2007
  url: https://kskedlaya.org/18.785/

Euler1744:
  type: article
  author: Leonhard Euler
  title: Variae observationes circa series infinitas
  journaltitle: Commentarii academiae scientiarum Petropolitanae
  volume: 9
  year: 1744
  pages: 160--188
  url: https://scholarlycommons.pacific.edu/euler-works/72/

Riemann1859:
  type: article
  author: Bernhard Riemann
  title: Ueber die Anzahl der Primzahlen unter einer gegebenen Grösse
  journaltitle: Monatsberichte der Berliner Akademie
  year: 1859
  url: https://www.maths.tcd.ie/pub/HistMath/People/Riemann/Zeta/

Wooley2023:
  type: preprint
  author: Trevor D. Wooley
  title: 'Analytic Number Theory: Introduction to the Circle Method and its Application'
  year: 2023
  url: https://www.math.purdue.edu/~twooley/2023ant/2023antnotes.pdf

Selberg1949:
  type: article
  author: Atle Selberg
  title: An elementary proof of the prime-number theorem
  journaltitle: Annals of Mathematics
  volume: 50
  number: 2
  year: 1949
  pages: 305--313
  doi: 10.2307/1969455

Zhang2014:
  type: article
  author: 张益唐
  title: Bounded gaps between primes
  journaltitle: Annals of Mathematics
  volume: 179
  number: 3
  year: 2014
  pages: 1121--1174
  doi: 10.4007/annals.2014.179.3.7

Maynard2015:
  type: article
  author: James Maynard
  title: Small gaps between primes
  journaltitle: Annals of Mathematics
  volume: 181
  number: 1
  year: 2015
  pages: 383--413
  doi: 10.4007/annals.2015.181.1.7

Harper2015:
  type: preprint
  author: Adam J. Harper
  title: 'Lecture Notes 1 for Cambridge Part III Course on "Probabilistic Number Theory"'
  year: 2015
  url: https://warwick.ac.uk/fac/sci/maths/people/staff/harper/probntnotes1.pdf
```

```terms
解析数论:
  en: analytic number theory
  de: Analytische Zahlentheorie
  fr: théorie analytique des nombres
```
