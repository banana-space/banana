---
title: Goldbach 猜想
categories: [问题, 解析数论]
---

Goldbach 猜想一般指下面两个 Goldbach 在和 Euler 书信来往时提出的两个假设：

::: conjecture [奇数 Goldbach 猜想] {@ternary-goldbach}
每个大于5的奇数都可被表为三个素数的和。
:::

::: conjecture [偶数 Goldbach 猜想] {@even-goldbach}
每个大于2的偶数都可被表为两个素数的和。
:::

## 历史进展

### 奇数 Goldbach 猜想

1937年 Vinogradov [@vinogradov1937]运用[[圆法]]率先证明 @ternary-goldbach 对于充分大的奇数成立。
1997年，Deshouillers、G. Effinger、
H. Te Riele 和 Zinoviev [@derz1997]在假定[[广义 Riemann 猜想]]的情况下证明了 Vinogradov 的结论可以被推广至所有大于
$5$的奇数。而 @ternary-goldbach 的无条件版本最终由 Helfgott 在2014年给出完整证明[@helfgott2014]。

### 偶数 Goldbach 猜想

为方便叙述 @even-goldbach 的历史进展，我们定义：

#### 命题$\{a,b\}$

::: definition [命题$\{a,b\}$]
存在$x_0>2$使得当偶数$x\ge x_0$时，存在整数$1<n_1,n_2<x$使得$x=n_1+n_2$。
其中$n_1$的素因子个数不超过$a$、$n_2$的素因子个数不超过$b$。
:::

::: remark
有时候命题$\{a,b\}$也会被称为命题$a+b$。
:::

1920年，Viggo Brun [@brun1920]通过对 Eratosthenes [[筛法]]进行改良，证明了$\{9,9\}$。
这个结果在1924年被 Rademacher 改进到$\{7,7\}$。1932年 Estermann 证明了$\{6,6\}$。
1937年 Ricci 证明了$\{5,7\}$、$\{4,9\}$、$\{3,15\}$和$\{2,366\}$。

通过将迭代法引入 Brun 筛，Buchstab在1938年证明了$\{5,5\}$。后来这个结果被他本人改进到$\{4,4\}$。
1956年王元通过用 Selberg 筛法[@selberg1947]改进 Buchstab 迭代法，得到了$\{3,4\}$[@wang1956]。
1957年 Vinogradov 证明了$\{3,3\}$，
这个结果次年被王元通过 Kuhn 的加权筛法[@kuhn1954]改进至$\{2,3\}$[@wang1958]。

#### 命题$\{1,c\}$

命题$\{a,b\}$在$a,b\ge2$时的研究方法均在使用初等筛法，
而命题$\{1,c\}$的研究由于用到了本质上不同的方法所以其进展将在这一节中单独讨论。

不同于之前在区间上筛素数，研究$\{1,c\}$时所用的筛法是在素数中进行筛选的：

\[
P_y(x,z)=\{p\le x:p\not\equiv y\pmod{p'}(p'\le z)\}
\]

其中$x$为偶数、$p,p'$为素数。通过设置特定的$y$和$z$我们就可以用这个筛函数来研究$\{1,c\}$了：

::: proposition
对于正实数$u$，当$P_y(x,x^{1/u})>0$对于所有充分大的$x$成立时，
命题$\{1,c\}$在$c=\lceil u\rceil-1$时成立。
:::

正是因此，在$\{1,c\}$问题的研究中会产生下列形式的误差项：

\[
R(x,z)=\sum_{q\le z}\max_{\xi\le x}\max_{(a,q)=1}\left| \pi(\xi;q,a)-{\operatorname{li}\xi\over\varphi(q)} \right|
\]

其中$\pi(x;q,a)$表示大小不超过$x$且$\equiv a\pmod q$的素数个数。
如果我们能够选取特定的$z$使得$R(x,z)\ll_Ax\log^{-A}x$就可以证明$x$充分大时$P_y(x,z)>0$。
因此为了方便后续的介绍，我们定义符号$\operatorname{EH}(\eta)$。

::: definition [$\operatorname{EH}(\eta)$]
我们称$\operatorname{EH}(\eta)$成立当且仅当对于所有$\varepsilon,A>0$均有：
\[
R(x,x^{\eta-\varepsilon})\ll_A{x\over\log^Ax}
\]
对充分大的$x$成立。
:::

由于二十世纪初期还没诞生强劲的工具来处理形如$R(x,z)$的均值误差项，
所以早期的$\{1,c\}$都是通过假定[[广义 Riemann 猜想]]成立的情况下进行的。

::: theorem {@thest}
若广义 Riemann 猜想成立，则$\operatorname{EH}(\frac12)$成立。
:::

基于 @thest，Estermann
证明了[[广义 Riemann 猜想|GRH]]成立时有$\{1,6\}$。1956年王元在此基础上证明了$\{1,4\}$[@wang1956-2]。
1962年时他通过引入 Kuhn 的加权筛法[@kuhn1954]从而将此结果再改进成$\{1,3\}$[@wang1962]。

1948年 Rényi 利用大筛法证明了存在$\eta>0$使$\operatorname{EH}(\eta)$成立从而证明存在正整数$c$使
$\{1,c\}$成立。1961年潘承洞证明了$\operatorname{EH}(\frac13)$从而得到了无条件的$\{1,5\}$。
1965年 Bombieri [@bombieri1965]和 Vinogradov [@vinogradov1965]独立给出了$\operatorname{EH}(\frac12)$
的无条件证明间接地将$\{1,3\}$变成了无条件结论。
因此$\operatorname{EH}(\frac12)$也被称为与 GRH 分庭抗礼的[[Bombieri–Vinogradov 定理]]。

#### 命题$\{1,2\}$

王元的$\{1,3\}$加权筛实际上给出的是以下三类素数的个数下界：

1. $x-p=p_1p_2p_3$，其中$x^{1\over10}<p_1\le x^{\frac13}<p_2<p_3\le x$。

2. $x-p=p_1p_2$，其中$x^{1\over10}<p_1<p_2\le x$。

3. $x-p=p_1$，其中$x^{1\over10}<p_1\le x$。

通过构造并运用 Selberg 筛法和大筛法来估计$\Omega$：

\[
\Omega=\sum_{\substack{x^{1\over10}<p_1\le x^{\frac13}<p_2\le\left( x\over p_1 \right)^{\frac12}\\p_3\le{x\over p_1p_2}\\x-p=p_1p_2p_3}}1
\]

陈景润意识到只要从$\{1,3\}$的加权筛法中减去$\frac\Omega2$就可以把第一类素数排除，从而得到$\{1,2\}$：

::: theorem [陈景润，1973] {@thchen}
当$x$为一个充分大的偶数时，其被表示成一个素数和一个不超过两个素数的乘积之和的方法数
\[
\ge0.67\prod_{\substack{p|x\\p>2}}{p-1\over p-2}\prod_{p>2}\left( 1-{1\over(p-1)^2} \right){x\over\log^2x}
\]
:::

@thchen 中的系数后来被多位数学家逐渐改进，迄今为止最好的系数$0.899$是由吴杰给出的[@wu2004]。

::: remark
陈景润这种构造$\Omega$的方法被后人[@fg1986]总结为*转化原理（switching principle）*。
:::

## 相关链接

命题$\{9,9\}$、$\{5,5\}$、$\{4,4\}$、$\{3,4\}$、$\{2,3\}$、$\{1,7\}$、$\{1,4\}$、
$\{1,3\}$以及$\{1,2\}$
的证明可见于用户TravorLZH的[专栏](https://www.zhihu.com/column/c_1453864291032600576)。

## 参考文献

```bibliography
bombieri1965:
  type: article
  label: Bom65
  author: "Bombieri, E."
  year: 1965
  title: On the large sieve
  journaltitle: Mathematika
  volume: 12
  number: 2
  pages: 201–225
  doi: 10.1112/S0025579300005313
brun1920:
  type: article
  label: Bru20
  author: "Brun, V."
  year: 1920
  title: Le crible d’Eratosthène et le théorème de Goldbach
  journaltitle: Skr. Norske Vid. Akad.
  volume: 3
  pages: 1–36
derz1997:
  type: article
  label: DERZ97
  author: ["Deshouillers, J.-M.", "Effinger, G.", "te Riele, H.", "Zinoviev, D."]
  year: 1997
  title: A complete Vinogradov 3-primes theorem under the Riemann hypothesis
  journaltitle: ERA Amer. Math. Soc.
  volume: 3
  pages: 99–104
estermann1932:
  type: article
  label: Est32
  author: "Estermann, T."
  year: 1932
  title: Eine neue Darstellung und neue Anwendungen der Viggo Brunschen Methode
  journaltitle: J. Reine Angew. Math.
  volume: 168
  pages: 106–116
  doi: 10.1515/crll.1932.168.106
fg1986:
  type: article
  label: FG86
  author: ["Fouvry, E.", "Grupp, F."]
  year: 1986
  title: On the switching principle in sieve theory
  journaltitle: J. Reine Angew. Math.
  volume: 370
  pages: 101–126
  doi: 10.1515/crll.1986.370.101
helfgott2014:
  type: preprint
  label: Hel14
  author: "Helfgott, H. A."
  year: 2014
  title: The ternary Goldbach conjecture is true
  arxiv: "1312.7748"
kuhn1954:
  type: incollection
  label: Kuh1954
  author: "Kuhn, P."
  year: 1954
  title: Über die Primteiler eines Polynoms
  booktitle: Proc. Intern. Cong. Math.
  volume: 2
  pages: 35–37
selberg1947:
  type: article
  label: Sel47
  author: "Selberg, A."
  year: 1947
  title: On an Elementary Method in the Theory of Primes
  journaltitle: Norske Vid. Selsk. Forh. Trondhjem
  volume: 19
  pages: 64–67
vinogradov1937:
  type: article
  label: Vin37
  author: "Vinogradov, I. M."
  year: 1937
  title: Representation of an odd number as a sum of three primes
  journaltitle: Dokl. Akad. Nauk SSSR
  volume: 15
  pages: 291–294
vinogradov1965:
  type: article
  label: Vin65
  author: "Vinogradov, A. I."
  year: 1965
  title: Über die Dichtehypothese für die Dirichletschen L-Reihen
  journaltitle: Izv. Akad. Nauk SSSR, Ser. Mat.
  volume: 29
  pages: 903–934
wang2002:
  type: book
  label: Wan02
  editor: "Wang, Y."
  year: 2002
  title: The Goldbach Conjecture
  edition: 2
  publisher: World Scientific
wang1956:
  type: article
  label: Wan56
  author: 王元
  year: 1956
  title: 表大偶數為一個不超過三個素數的乘積及一個不超過四個素數的乘積之和
  journaltitle: 数学学报
  volume: 6
  number: 3
  pages: 500–513
wang1956-2:
  type: article
  label: Wan56-2
  author: 王元
  year: 1956
  title: 表大偶數為一個素數及一個不超過四個素數的乘積之和——廣義Riemann猜測下之結果
  journaltitle: 数学学报
  volume: 6
  number: 4
  pages: 565–582
wang1958:
  type: article
  label: Wan58
  author: 王元
  year: 1958
  title: 论筛法及其有关的若干应用(I)——表大整数为殆素数之和
  journaltitle: 数学学报
  volume: 8
  number: 3
  pages: 413–429
wang1962:
  type: article
  label: Wan62
  author: "Wang, Y."
  year: 1962
  title: On the representation of large integer as a sum of a prime and an almost prime
  journaltitle: Scientia Sinica
  volume: 11
  number: 8
  pages: 1033–1054
wu2004:
  type: article
  label: Wu04
  author: "Wu, J."
  year: 2004
  title: Chen’s double sieve, Goldbach’s conjecture and the twin prime problem
  journaltitle: Acta Arithmetica
  volume: 114
  number: 3
  pages: 215–273
```
