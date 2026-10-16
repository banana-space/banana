---
title: Peter Dirichlet
sort: dirichlet peter
aliases:
  - Dirichlet
  - Lejeune Dirichlet
  - Peter Gustav Lejeune Dirichlet
  - Johann Peter Gustav Lejeune Dirichlet
categories: [数学家]
---

**Johann Peter Gustav Lejeune Dirichlet**
<person lang="de" years="1805–1859"
  ipa="/ˈjoː.han ˈpeː.tɐ ˈɡʊs.taf lə.ˈʒœn di.ʁi.ˈkleː/" />，
德国数学家。
在[[数论]]中，他用[[分析学]]的方法证明了
[[Dirichlet 素数定理|等差数列中有无穷多个素数]]，开创了[[解析数论]]，
并证明了[[代数数论]]中的 [[Dirichlet 单位定理]]。
在分析学中，他给出了 [[Fourier 级数]]收敛的第一个严格证明，
并推动了现代[[函数]]概念的形成。
在[[位势论]]中，他研究了以他命名的 [[Dirichlet 问题]]，
其中的 [[Dirichlet 原理]]后来成为[[变分法]]的重要工具。

## 生平

Dirichlet 于 1805 年生于 Düren，当时该地属于法国。
1822 年，他赴巴黎求学，并结识了 [[Joseph Fourier]] 等数学家。
1825 年，他与 [[Adrien-Marie Legendre]] 各自完成了
[[Fermat 大定理]]在指数 $n = 5$ 时的证明，由此知名。

1826 年，他返回德国，1827 年起在 Breslau 任教，
1828 年起在柏林任教，1839 年成为柏林大学的正教授。
他在柏林指导的博士生包括 [[Leopold Kronecker]] 与 [[Rudolf Lipschitz]]，
[[Gotthold Eisenstein]]、[[Bernhard Riemann]] 也曾听他讲课。

1855 年，[[Carl Friedrich Gauß]] 去世后，Dirichlet 接任其在 Göttingen 的教席，
在那里与 [[Richard Dedekind]] 交往甚密。
他于 1859 年在 Göttingen 去世，其教席由 Riemann 接任。
他的数论讲义由 Dedekind 整理为
*Vorlesungen über Zahlentheorie*（《数论讲义》）出版 [@Dirichlet1863]，
Dedekind 在其增补中发展了[[理想]]的理论。

## 主要工作

### 数论

- **[[Fermat 大定理]]。**
  除了 $n = 5$ 的情形，他还在 1832 年证明了 $n = 14$ 的情形。

- **[[Dirichlet 素数定理|等差数列中的素数]]。**
  1837 年，他证明了 [[Dirichlet 素数定理]]：
  若正整数 $a$、$q$ [[互素]]，则存在无穷多个[[素数]] $p$
  满足 $p \equiv a \pmod q$。
  证明的关键是考察 [[Dirichlet 特征]] $\chi$ 对应的 [[Dirichlet $L$ 函数]]
  $L (s, \chi) = \sum_{n \geq 1} \chi (n) \, n^{-s}$，
  并证明当 $\chi$ 非平凡时 $L (1, \chi) \neq 0$。
  这一工作通常被视为解析数论的开端。

- **[[类数公式]]。**
  1839 年起，他用 $L (1, \chi)$ 的值表示[[二次型|二元二次型]]的[[类数]]，
  得到了[[类数公式]]的最初形式。

- **[[Dirichlet 单位定理|单位定理]]。**
  1846 年，他证明了 [[Dirichlet 单位定理]]：
  [[数域]] $K$ 的[[代数整数环]]的[[单位群]]是[[有限生成 Abel 群]]，
  其秩等于 $r_1 + r_2 - 1$，
  其中 $r_1$ 与 $r_2$ 分别是 $K$ 的实嵌入的个数与复嵌入的对数。

- **[[Diophantus 逼近]]。**
  1842 年，他用[[抽屉原理]]证明了 [[Dirichlet 逼近定理]]：
  对任意[[无理数]] $\alpha$，存在无穷多个有理数 $p/q$ 满足
  $\lvert \alpha - p/q \rvert < 1/q^2$。
  因此，抽屉原理在一些语言中也以他的名字命名。

### 分析学

- **[[Fourier 级数]]。**
  1829 年，他证明了：若以 $2 \pi$ 为周期的[[有界函数]] $f$
  在一个周期中只有有限个间断点，且只有有限个极值点，
  则 $f$ 的 [[Fourier 级数]]在每一点 $x$ 处收敛到
  $\bigl( f (x^+) + f (x^-) \bigr) / 2$。
  这是 Fourier 级数收敛的第一个严格证明，
  其中的条件现在称为 **Dirichlet 条件**。
  在同一篇论文中，他举出了处处不连续的 [[Dirichlet 函数]]，
  即[[有理数]]集的[[指示函数]]。

- **[[函数]]的概念。**
  通常认为，他在 1837 年的论文中明确提出了现代的函数概念：
  只要对区间中的每个 $x$ 都对应确定的值 $y$，
  就称 $y$ 是 $x$ 的函数，而不必由解析式给出。

- **[[级数]]的收敛。**
  以他命名的 [[Dirichlet 判别法]]给出了级数
  $\sum_n a_n b_n$ 收敛的一个[[充分条件]]。

### 位势论与数学物理

- **[[Dirichlet 问题]]与 [[Dirichlet 原理]]。**
  他研究了在区域 $\Omega$ 的边界上给定取值、
  求 $\Omega$ 内的[[调和函数]] $u$ 的问题，
  即 [[Dirichlet 问题]]。
  他在讲课中用到如下想法：
  这样的调和函数是使 [[Dirichlet 能量]]
  $\int_\Omega \lvert \nabla u \rvert^2 \, dx$
  取最小值的函数。
  Riemann 将这一方法称为 [[Dirichlet 原理]]，
  并用它研究 [[Riemann 面]]。
  这一原理的严格证明后来由 [[David Hilbert]] 给出。

- **[[Lagrange–Dirichlet 定理]]。**
  他证明了 [[Joseph-Louis Lagrange]] 关于平衡稳定性的断言：
  若力学系统的势能在某个平衡位置取严格极小值，则该平衡是稳定的。

## 以他命名

- [[Dirichlet 素数定理]]
- [[Dirichlet 特征]]
- [[Dirichlet $L$ 函数]]
- [[Dirichlet 级数]]
- [[Dirichlet 卷积]]
- [[Dirichlet 单位定理]]
- [[Dirichlet 逼近定理]]
- [[Dirichlet 密度]]
- [[Dirichlet 除数问题]]
- [[Dirichlet 函数]]
- [[Dirichlet 核]]
- [[Dirichlet 判别法]]
- [[Dirichlet 问题]]
- [[Dirichlet 原理]]
- [[Dirichlet 边界条件]]
- [[Dirichlet 能量]]
- [[Dirichlet 分布]]

## 参考文献

```bibliography
Dirichlet1863:
  type: book
  author: Peter Gustav Lejeune Dirichlet
  editor: Richard Dedekind
  title: Vorlesungen über Zahlentheorie
  year: 1863
  publisher: Vieweg

MacTutor:
  type: online
  site: MacTutor
  author: ["J. J. O'Connor", E. F. Robertson]
  title: Johann Peter Gustav Lejeune Dirichlet 的 MacTutor 传记
  url: https://mathshistory.st-andrews.ac.uk/Biographies/Dirichlet/
```

```terms
Johann Peter Gustav Lejeune Dirichlet:
  lang: de
  zh: 约翰·彼得·古斯塔夫·勒热纳·狄利克雷
  ja: ヨハン・ペーター・グスタフ・ルジューヌ・ディリクレ
```
