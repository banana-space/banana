---
title: 代数数论
categories: [代数数论]
navboxes: [代数数论]
---

**代数数论**是使用代数工具研究[[数论]]的数学分支。
其经典论题为研究[[数域]]的结构，例如其[[代数整数环|整数环]]等，
而现代的主要论题则为研究[[数域]]的[[绝对 Galois 群]]以及它的表示论，
即 [[Galois 表示]]。

## 简介

代数数论大致起源于方程整数解的研究。
如果在解方程时在考虑一些“扩展”的整数，
即一般的[[代数整数环]]，
会使解方程变得更容易。
例如 [[Fermat 方程]] $x^3 + y^3 = z^3$
在[[环]] $\mathbb{Z}[\zeta_3]$ 中可以写为
$(x+y)(x+\zeta_3 y)(x+\zeta_3^2 y) = z^3$，
而在 $\mathbb{Z}[\zeta_3]$ 中，
之前一切素因数分解的理论仍然成立
（即它是[[主理想整环]]）。
就可以对此方程作如同 $\mathbb{Z}$ 中的处理：
不妨设 $x, y$ 互素，则 $x+y$、$x+\zeta_3 y$、$x+\zeta_3^2 y$
两两的公因数也很小，从而基本是立方数，等等。
又例如 [[Pell 方程]] $x^2 - dy^2 = 1$
相当于求环 $\mathbb{Z}[\sqrt{d}]$ 中的单位，从而能用系统的方法处理，
见 [[Dirichlet 单位定理]]。

不过代数整数环并不总表现得很好，
许多代数整数环没有[[唯一分解整环|唯一分解性质]]，
例如环 $\mathbb{Z}[\sqrt{-5}]$ 中，
$2\cdot 3 = (1+\sqrt{-5})(1-\sqrt{-5})$，
且二者均不能继续分解。
此时我们需要修改素数的定义而引入[[素理想]]的概念，
而重新使唯一分解性质成立。
不过理想和真正的数仍有差别，[[类群]]描述了二者的差别，
它是代数数论研究的重点之一。

除了研究方程的整数解之外，
数论也关心方程在模 $p$ 意义下的解，
即在[[有限域]] $\mathbb{F}_p$ 上的解。
例如给定一元多项式 $f(x) \in \mathbb{Z}[x]$，
要研究它模每个素数 $p$ 时根的行为
（例如是否有重根，是否每个根都落在 $\mathbb{F}_p$ 中，等等）。
在现代的语言中，
这等价于在研究环 $\mathbb{Z}[x]/(f(x))$ 在 $\mathbb{Z}$ 上分裂与[[分歧]]的情况。
如果相应的域扩张是 [[Galois 扩张]]，
这也等价于研究 [[Galois 群]]中的 [[Frobenius 元素]]。
神奇的结论（即 [[Artin 互反律]]）是，除了有限个素数外，
这些行为仅和 $p$ 模某个数的同余类有关。

以上大致提及了经典代数数论的研究论题，即代数整数环、
类群、扩张与分歧。现代代数数论的第一步是[[类域论]]，
它把域扩张的 Galois 群的[[交换化]]与代数数域和代数整数环本身的信息联系起来，
从而证明了 [[Artin 互反律]]以及类群的一些性质，
例如 [[Hilbert 类域]]、[[Kronecker 青春之梦]]等。
从此，代数数论的研究从研究代数整数环转为研究域扩张的 [[Galois 群]]。

如上所述，类域论研究 [[Galois 群]]的交换化，
也就是研究 Galois 群的一维[[群表示|表示]]。
为了得到 Galois 群的更多信息，还需要研究它的高维表示。
[[Langlands 纲领]]指出 Galois 群的表示对应于[[自守表示]]，
它的二维情形可以用[[模形式]]的语言重述出来，即[[模性定理]]，
此定理可以推出 [[Fermat 大定理]]。
在一般情况下 Langlands 纲领仍然未解，
一种解决思路是用几何对象描述或类比其中涉及到的对象，
并使用[[代数几何]]等手段来研究，这即是[[几何 Langlands 纲领]]。

Galois 群的表示也可以用另一种手段来研究。
许多表示可以从几何对象中来，
具体地说，它们是[[代数簇]]的[[平展上同调]]。
平展上同调有时本身会满足一些性质（如 [[Grothendieck 单径化定理]]），
有时也可以通过[[比较定理]]与其它种类的上同调相联系，
例如[[代数 de Rham 上同调]]和[[晶体上同调]]
（研究这种联系的理论称为 [[$p$ 进 Hodge 理论]]）。
这启发我们考虑一般 Galois 表示是否有类似的性质或比较定理。
这一研究领域视情况称为 [[$\ell$ 进 Galois 表示论]]或
[[$p$ 进 Galois 表示论]]。

代数数论里经常用到的两个思想是[[函数域类比]]和[[局部–整体原理]]。
前者是说把[[代数数域]]视为[[曲线]]上的[[有理函数域]]，
从而能用几何直观想象数论中的构造，
也可以把数论中的构造类比到代数几何中（如[[几何 Langlands 纲领]]）。
后者则是说为了研究代数数域，也就是曲线整体的信息，
可以先研究曲线的每个局部，
也就是代数整数环的每个[[素理想]]（或[[赋值]]）处的[[局部域]]，
之后再把局部“拼合”得到整体的结论。
例如为了研究[[类域论]]，需要先研究[[局部类域论]]；
为研究 [[Langlands 纲领]]，需要先研究[[局部 Langlands 纲领]]。

## 历史

### 17 与 18 世纪

代数数论的早期问题来自整数方程与素数的研究。
Fermat 研究整数的平方和表示及高次方程，
Euler 和 Lagrange 则进一步发展了[[二次型]]、[[连分数]]与 [[Pell 方程]]的理论。
这些研究在具体计算中揭示了许多规律，
后来可以借助二次数域、单位和类群等概念来统一理解。

### 19 世纪上半叶

Gauß 在 1801 年出版的《算术研究》中，
系统研究了[[同余]]、[[二次互反律]]、二元二次型和[[分圆问题]]。
二次型的等价与复合为后来的[[理想类群]]提供了早期模型，
分圆问题则推动了单位根及其生成的数域的研究。

Dirichlet 进一步研究了数域中的单位，
并用 [[$L$ 函数|$L$ 级数]]把类数与解析方法联系起来。
与此同时，Galois 对方程可解性的研究，
为通过域扩张的对称性研究代数方程提供了语言。
研究的重点逐渐由单个方程的技巧，转向数域及其算术结构。
这一时期的背景可参见 [@MilneANT2020, 第 5–6 页]。

### 19 世纪中后期

在研究分圆域中的高次互反律时，
Kummer 需要处理代数整数的唯一分解失效的问题。
他发展了“理想数”的方法，并将其用于 [[Fermat 方程]]等问题。
Dedekind 随后用[[理想]]重新表述和推广这一思想，
在 1871 年出版的 Dirichlet 数论讲义第二版附录中，
建立了适用于一般数域整数环的理想理论。
这使理想分解、类群和单位成为代数数论的基本研究对象。
关于 Kummer 与 Dedekind 的工作，可参见 [@MilneANT2020, 第 67 页]。

19 世纪末，Minkowski 发展了[[数的几何]]，
用[[晶格]]与凸体研究数域的类数等不变量；
Hensel 引入 [[$p$ 进数]]，为逐个素数研究算术问题提供了新的局部方法。
Hilbert 在 1897 年的数域理论报告中系统整理了已有成果，
也提出了推动后来类域论发展的重要问题。

### 20 世纪前半叶

围绕数域的 [[Abel 扩张]]，
Kronecker、Weber 和 Hilbert 等人提出的问题逐渐发展为[[类域论]]。
Takagi 在 1920 年前后建立了存在性理论，
Artin 则在 1927 年证明了一般互反律，
将 Abel 扩张的 Galois 群与底域的算术结构联系起来。
这些工作把二次互反律等经典规律纳入了更广泛的框架。

Hasse 等人发展了[[局部域]]上的类域论，
Chevalley 引入[[理元群|理元]]的语言，
使整体类域论能够与各个局部域的乘法群联系起来。
局部与整体的相互作用由此成为代数数论的核心思想之一。
这一发展的历史与现代陈述可参见 [@MilneCFT2020, 引言]。

### 20 世纪后半叶

Tate 在 1950 年的博士论文中，
用[[加元环|加元]]上的[[调和分析]]研究 Hecke 的 $L$ 函数。
Artin 和 Tate 等人发展的上同调方法，
则为类域论及局部与整体的对偶关系提供了统一的表述。
Iwasawa 开创了对无穷数域塔中类群变化的研究，
将数域的算术与 $p$ 进分析联系起来。

与此同时，[[平展上同调]]使几何对象成为 [[Galois 表示]]的重要来源。
Tate、Fontaine 等人发展的 [[$p$ 进 Hodge 理论]]，
进一步研究这些表示与几何、线性代数之间的联系。
Galois 表示因而成为数论、代数几何与表示论交汇的研究对象。

1967 年，Langlands 在致 Weil 的信中提出一系列猜想，
把 Galois 侧的算术信息与[[自守表示]]联系起来，
形成了 [[Langlands 纲领]]的起点，见 [@Langlands1967]。
1995 年发表的 Wiles 与 Taylor–Wiles 的工作，
证明了有理数域上半稳定椭圆曲线的模性；
结合 Ribet 先前的结果，由此完成了 [[Fermat 大定理]]的证明
[@Wiles1995; @TaylorWiles1995]。
这些发展使[[模形式]]、Galois 表示及其形变成为现代代数数论的重要工具。

## 分支

### 基本对象

- **整体对象**包括[[数域]]及其[[代数整数环]]，也包括有限域上整代数曲线的函数域。
  数域和后一类函数域统称[[整体域]]，许多算术理论可在两者之间作[[函数域类比]]。
  数域的算术着重研究理想分解、[[类群]]、单位群和[[判别式（代数数论）|判别式]]，
  [[交换代数]]与[[数的几何]]为这些对象的研究和计算提供了基本方法。

- **局部对象**主要是[[局部域]]及其有限扩张；
  对非 Archimedes 局部域，还研究其整数环和剩余域。
  通过[[赋值理论|赋值]]与[[完备化]]，可在某个素理想或无穷位处研究整体域，
  从而逐处考察方程的解、[[分歧]]与局部 Galois 群。

- **[[加元环]]与[[理元群]]**把整体域的各个完备化中的加法、乘法信息组织在一起，
  从而同时处理不同位置的局部信息，也能从局部信息推导出整体信息（即[[局部--整体原理]])。
  在这些对象上应用[[调和分析]]，可研究类域论、$L$ 函数与自守形式中的整体问题。

### $L$ 函数

- **[[$L$ 函数]]**把各个素数处的算术信息汇集为解析函数，
  例如数域的 [[Dedekind $\zeta$ 函数]]和 Galois 表示的 [[Artin $L$ 函数]]。
  这一方向研究 $L$ 函数的解析延拓、函数方程、零点与特殊值等，
  以及它们与类群、单位群、代数簇的有理点等算术结构的联系。

- **[[$p$ 进 $L$ 函数]]**对某些经典 $L$ 函数经过适当归一化、修正的特殊值作 $p$ 进插值，
  将这些离散的算术数据组织成 $p$ 进解析或亚纯函数。
  这一方向既研究插值函数的构造，也研究其零点和特殊值的算术意义，
  为 Iwasawa 理论提供解析侧的研究对象，见 [@Sharifi, §5.2，命题 5.2.15]。

- **[[Iwasawa 理论]]**研究无穷数域塔中类群、单位群和 [[Selmer 群]]等算术对象的变化，
  特别关注 Galois 群为 $\mathbb{Z}_p$ 的扩张。
  它把塔中类群、Selmer 群等的适当极限组织成 [[Iwasawa 代数]]上的模，
  并通过 [[Iwasawa 主猜想]]等问题研究这些模与 $p$ 进 $L$ 函数的联系
  [@Sharifi, 引言]。

### Langlands 纲领

- **[[类域论]]**研究[[局部域]]和[[整体域]]的 [[Abel 扩张]]，
  用局部域的乘法群或整体域的[[理元类群]]描述这些扩张的 Galois 群。
  其中的[[互反律]]把素数的分解、范数与 Galois 群联系起来，
  [[局部类域论]]与整体类域论则相互配合，给出 Abel 扩张的分类。

- **[[模形式]]与[[自守形式]]**的理论研究带有算术对称性的函数及其相关的表示。
  模形式的 Fourier 系数、[[Hecke 算子]]与 $L$ 函数包含丰富的算术信息，
  [[模性定理]]所描述的椭圆曲线与模形式的关系是其中的重要实例。
  自守形式及其对应的[[自守表示]]则将这类研究推广到更一般的代数群。

- **[[Langlands 纲领]]**试图给出一般的代数群 $G$ 上，
  Galois 表示与自守表示之间的对应，
  使对应的对象的 $L$ 函数等信息相同。
  类域论的互反关系可以视为它的一维情形 (即 $G=\mathrm{GL}_1$)，
  而模性定理则是二维情形 (即 $G=\mathrm{GL}_2$)。
  作为加强版本，
  [[范畴 Langlands 纲领]]试图建立两侧的对象构成的[[范畴]]之间的[[范畴等价]],
  这与[[几何 Langlands 纲领]]类似。

### Galois 表示论

- **[[Galois 表示]]论**通过绝对 Galois 群在线性空间上的连续作用研究算术，
  特别关注 [[l 进 Galois 表示|$\ell$ 进 Galois 表示]]的分歧、[[Frobenius 元素]]的作用及表示的形变。
  许多表示来自[[代数簇]]的[[平展上同调]]，因此与[[算术几何]]密切联系。
  [[Galois 上同调]]也为研究扩张和局部与整体之间的关系提供工具，
  相关观点可参见 [@Taylor2002]。

- **[[$p$ 进 Hodge 理论]]**借助 [[$p$ 进周期环]],
  研究 [[$p$ 进域]]上代数簇的不同种类的上同调的比较定理，
  例如平展上同调与[[代数 de Rham 上同调]]的比较，
  以及在好约化等条件下与特殊纤维的[[晶体上同调]]的比较。
  作为抽象和推广，它研究 $p$ 进局部域的 Galois 表示，
  并将 Galois 表示与其它数学对象 (如[[$(\phi,\Gamma)$-模]]等) 对应,
  以理解表示的几何性质与形变
  [@BrinonConrad2009, §1.3]。

### 算术几何

[[算术几何]]研究[[局部域]]和[[整体域]]上的几何对象及其算术性质，
典型对象包括[[代数曲线]]、[[椭圆曲线]]和[[Abel 簇]]。
整体理论关心有理点、选定整数模型后的整数点及其分布
[@Poonen2017, §0.3–§0.5]。

局部理论称为 [[$p$ 进几何]],
许多算术对象，如局部的自守表示，Galois 表示等都可在此框架下几何化，
实现为 [[Fargues--Fontaine 曲线]]上的对象。

## 参考文献

```bibliography
MilneANT2020:
  type: preprint
  author: 'Milne, James S.'
  title: Algebraic Number Theory
  year: 2020
  url: https://www.jmilne.org/math/CourseNotes/ANT.pdf

MilneCFT2020:
  type: preprint
  author: 'Milne, James S.'
  title: Class Field Theory
  year: 2020
  url: https://www.jmilne.org/math/CourseNotes/CFT.pdf

Langlands1967:
  type: preprint
  author: Robert Langlands
  title: Letter to André Weil
  year: 1967
  url: https://publications.ias.edu/sites/default/files/letter-to-weil-1967-01_rpl_5.pdf

Wiles1995:
  type: article
  author: Andrew Wiles
  title: Modular elliptic curves and Fermat's Last Theorem
  journaltitle: Annals of Mathematics
  volume: 141
  number: 3
  year: 1995
  pages: 443--551
  doi: 10.2307/2118559

TaylorWiles1995:
  type: article
  author: [Richard Taylor, Andrew Wiles]
  title: Ring-theoretic properties of certain Hecke algebras
  journaltitle: Annals of Mathematics
  volume: 141
  number: 3
  year: 1995
  pages: 553--572
  doi: 10.2307/2118560

Taylor2002:
  type: preprint
  author: Richard Taylor
  title: Galois representations
  year: 2002
  arxiv: math/0212403

BrinonConrad2009:
  type: preprint
  author: [Olivier Brinon, Brian Conrad]
  title: CMI Summer School Notes on p-adic Hodge Theory
  year: 2009
  url: https://math.stanford.edu/~conrad/papers/notes.pdf

Sharifi:
  type: preprint
  author: Romyar Sharifi
  title: Iwasawa Theory
  url: https://www.math.ucla.edu/~sharifi/notes/iwasawa.pdf

Poonen2017:
  type: book
  author: Bjorn Poonen
  title: Rational Points on Varieties
  year: 2017
  publisher: American Mathematical Society
  url: https://math.mit.edu/~poonen/papers/Qpoints.pdf
```

```terms
代数数论:
  en: algebraic number theory
  de: algebraische Zahlentheorie
  fr: théorie algébrique des nombres
  grc: μεταριθμικὴ θεωρία ἁριθμῶν
  la: theoria algebraica numerorum
```
