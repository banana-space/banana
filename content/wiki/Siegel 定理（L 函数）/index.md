---
title: Siegel 定理（$L$ 函数）
categories: [解析数论]
---

Siegel 定理给出实特征 [[Dirichlet $L$ 函数]]在
$s=1$ 处的下界估计，并由此得到[[虚二次域]][[类数]]的下界。

## 陈述与证明

::: theorem [Siegel] {@thsiegel}
对于所有的$\varepsilon>0$均存在$C(\varepsilon)>0$使得对于所有只取实值的模$q$原特征$\chi$，均有：
\[
L(1,\chi)>C(\varepsilon)q^{-\varepsilon}
\]
:::

用[[类数公式]]，它立即给出如下推论，
解决 [[Gauss]] 提出的[[类数问题]]。此界是非实效结论中最佳者。

::: corollary
对任意 $\varepsilon>0$，存在 $c(\varepsilon)>0$，
满足[[判别式]]为 $-D$ 的[[虚二次域]]的[[类数]] $h(-D)$
不小于 $c(\varepsilon)D^{1/2-\varepsilon}$。特别地，
$\lim_{D\to+\infty}h(-D)=+\infty$。
:::

## 历史

@thsiegel 源于1935年 Siegel
对二次域类数的研究[@siegel1935]。
后来 Estermann [@estermann1948]和
Goldfeld [@goldfeld1974]各自给出了这个结论的纯解析数论证明，
后者还对其进行了大幅简化。刘子灏[@liu2022]
于2022年1月给出了另一个解析证明。

## 非实效性

不幸的是，@thsiegel 仅仅是说明了$C(\varepsilon)$的存在性。
时至今日$C(\varepsilon)$在$\varepsilon<\frac12$时仍然没有计算方法。
这意味着 Siegel 定理的许多推论涉及的常数都无法被实效计算出来。
而这是因为其推导过程中用到了这样一个关键的引理：

::: lemma
对于每个$\varepsilon>0$均存在一个$1-\varepsilon<\beta<1$和一个只取实值的原特征$\chi_1$使得当
\[
f(s)=\zeta(s)L(s,\chi_1)L(s,\chi_2)L(s,\chi_1\chi_2)
\]
时$f(\beta)\le0$对于一切实值原特征$\chi_2$均成立。
:::

::: proof
倘若存在实值原特征$\chi$使$L(s,\chi)$在$1-\varepsilon<s<1$有根$\beta$，
因此设置$\chi_1=\chi$便可发现$f(\beta)=0$对于一切实值原特征$\chi_2$均成立。

另一方面，假如不存在实值原特征$\chi$使$L(s,\chi)$在$1-\varepsilon<s<1$内有零点，
则对于任意一个$1-\varepsilon<\beta<1$，
根据$\zeta(\beta)<0$可知对于所有的实值原特征$\chi_2$均有$f(\beta)<0$。
:::

::: remark
我们可以发现这个推导仅仅用分类讨论的方式说明了$\beta$和$\chi_1$的存在性而没有对两者进行构造。
这也解释了为何 Siegel 定理是**非实效**的。
:::

## 应用

通过一些手段，我们可以将 Siegel 定理化为关于
[[Dirichlet $L$ 函数]]非零区域的结论，
从而用于探究等差数列上的素数分布：

::: theorem {@thsiegel2}
对于每个$\varepsilon>0$存在常数$C(\varepsilon)>0$
使得对于所有的模$q$实值原特征$\chi$，
其对应的$L(s,\chi)$在$s>1-C(\varepsilon)q^{-\varepsilon}$时无零点。
:::

利用 @thsiegel2，Walfisz [@walfisz1936]证明了带余项的
[[Dirichlet 素数定理]]：

::: theorem [Siegel–Walfisz] {@thsw}
对于所有的$A>0$和$(a,q)=1$均有：
\[
\pi(x;q,a)={\operatorname{Li}(x)\over\varphi(q)}+O\left(x\over\log^Ax\right)
\]
其中$\pi(x;q,a)$表示$\le x$且$\equiv a\pmod q$的素数个数，
$\operatorname{Li}$ 表示[[对数积分函数]]，
误差项中的隐含常数仅与$A$有关。
:::

## 参考文献

```bibliography
davenport1980:
  type: book
  label: Dav80
  author: Davenport, H.
  year: 1980
  title: Multiplicative Number Theory
  series: Graduate Texts in Mathematics
  volume: 74
  publisher: Springer New York
  doi: 10.1007/978-1-4757-5927-3
estermann1948:
  type: article
  label: Est48
  author: Estermann, T.
  year: 1948
  title: On Dirichlet’s L functions
  journaltitle: Journal of the London Mathematical Society
  volume: s1-23
  number: 4
  pages: 275–279
  doi: 10.1112/jlms/s1-23.4.275
goldfeld1974:
  type: article
  label: Gol74
  author: Goldfeld, D. M.
  year: 1974
  title: A simple proof of Siegel’s theorem
  journaltitle: Proceedings of the National Academy of Sciences
  volume: 71
  number: 4
  pages: 1055
  doi: 10.1073/pnas.71.4.1055
liu2022:
  type: preprint
  label: Liu22
  author: 刘子灏
  year: 2022
  title: A simple proof of Siegel’s theorem using Mellin transform
  arxiv: '2202.00635'
montgomery2007:
  type: book
  label: Mon07
  author: ["Montgomery, H. L.", "Vaughan, R. C."]
  year: 2007
  title: 'Multiplicative Number Theory I: Classical Theory'
  publisher: Cambridge University Press
siegel1935:
  type: article
  label: Sie35
  author: Siegel, C.
  year: 1935
  title: Über die Classenzahl quadratischer Zahlkörper
  journaltitle: Acta Arithmetica
  volume: 1
  number: 1
  pages: 83–86
walfisz1936:
  type: article
  label: Wal36
  author: Walfisz, A.
  year: 1936
  title: Zur additiven Zahlentheorie. II
  journaltitle: Mathematische Zeitschrift
  volume: 40
  number: 1
  pages: 592–607
  doi: 10.1007/BF01218882
```

```terms
Siegel 定理:
  en: Siegel's theorem
  de: Satz von Siegel
  fr: théorème de Siegel
```
