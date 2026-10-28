---
title: 谱序列
categories: [同调代数]
---

<problems>
- “正合偶”“双复形”“稳定 $\infty$-范畴中的滤对象”“超渡”“例子”“应用”各节需要扩充。
- “滤复形”一节需要一幅示意图，说明 $Z_r^{p,q}$ 与 $B_r^{p,q}$ 的含义。
- “滤复形”一节计算 $H_r^{p,q}$ 分子的公式中，最后一个分母里的 $F^{p+1}C^{p+q+1}$ 似乎应为 $F^{p+1}C^{p+q}$。
</problems>

**谱序列**是[[同调代数]]中计算[[同调群]]的重要手段。
它往往从一个粗糙的估计开始，渐次逼近想要计算的同调群。

## 定义

::: definition
固定 [[Abel 范畴]] $\mathcal{A}$。$\mathcal{A}$
中**上同调谱序列**指如下数据：

- 自然数 $r_0$。

- 对每个整数 $r\ge r_0$，整数 $p,q$，
  一个 $E_r^{p,q}\in\mathcal{A}$，以及它们之间的**边缘映射**
  $d_r=d_r^{p,q}\colon E_r^{p,q}\to E_r^{p+r,q-r+1}$，满足 $d_r^2=0$。
  数据 $(E_r,d_r)$ 称为谱序列的**第 $r$ 页**。
  这里 $p+q$ 称为**总次数**，边缘映射总把总次数增加 $1$。

- 对每个整数 $r\ge r_0$，整数 $p,q$，一个同构 $E_{r+1}^{p,q}\cong H_r^{p,q}$，
  其中
  $$
  H_r^{p,q}=\frac{\ker(d_r^{p,q}\colon E_r^{p,q}\to E_r^{p+r,q-r+1})}{\operatorname{im}(d_r^{p-r,q+r-1}\colon E_r^{p-r,q+r-1}\to E_r^{p,q})}.
  $$

通常将其记作 $\{E_r\}_{r\ge r_0}$ 或 $\{E_r^{p,q}\}_{r\ge r_0}$，
或者简作 $E_{r_0}$ 或 $E_r$ 或 $E_r^{pq}$。
谱序列 $E_r$ 到 $E'_r$
的**态射**指的是与二者的边缘映射以及同构
$E_{r+1}^{p,q}\cong H_r^{p,q}$ 都对应交换的一族同态
$E_r^{p,q}\to {E'}_r^{p,q}$。

$\mathcal{A}$ 中**同调谱序列**指类似的数据 $\{E^r_{p,q}\}_{r\ge r_0}$，
满足 ${E'}_r^{p,q}=E^r_{-p,-q}$ 构成上同调谱序列。
也就是说，同调谱序列也是这样一族对象、映射、同构，只不过边缘映射为
$d^r\colon E^r_{p,q}\to E^r_{p-r,q+r-1}$。
:::

::: definition [收敛]
称谱序列 $\{E_r^{p,q}\}$ **收敛**，指对任意 $p,q\in\mathbb{Z}$，
存在 $R(p,q)\ge r_0$，使得对任意 $r\ge R(p,q)$，
$d_r^{p,q}=d_r^{p-r,q+r-1}=0$。于是 $r\ge R(p,q)$ 对应的对象
$E_r^{p,q}$ 都同构，记作 $E_\infty^{p,q}$。此时称 $\{E_r^{p,q}\}$
**收敛到** $\{E_\infty^{p,q}\}$，记作 $E_r^{pq}\Rightarrow E_\infty^{pq}$。

如 $\mathcal{A}$ 中一列对象 $\{H^n\}_{n\in\mathbb{Z}}$ 都带有穷竭[[滤链]]
$$
\cdots\supseteq F^{p-1}H^n\supseteq F^pH^n\supseteq F^{p+1}H^n\supseteq\cdots
$$
且对任意 $p,q$ 有 $E_\infty^{p,q}\cong F^pH^{p+q}/F^{p+1}H^{p+q}$，
则也称 $\{E_r^{p,q}\}$ **收敛到** $\{H^n\}$，记作
$E_r\Rightarrow H^n$ 或 $E_r^{pq}\Rightarrow H^{p+q}$。
实践中滤链基本会是有限的，即对任意 $n\in\mathbb{Z}$ 都有对
$p\gg0$，$F^pH^n=0$，$F^{-p}H^n=H^n$。

同调谱序列也有一样的概念，但滤链方向与上同调相反，为上升滤链，
即子对象随指标变大而变大。
:::

::: definition [退化]
称谱序列 $\{E_r^{p,q}\}$ **在第 $r$ 页退化**，
指对任意 $r'\ge r$ 以及任意 $p,q$ 都有 $d_{r'}^{p,q}=0$。
换言之其收敛，且 $E_\infty^{p,q}=E_r^{p,q}$ 对每个 $p,q$。
:::

::: definition [象限]
如对象 $E_r^{p,q}$ 只在 $(p,q)$ 属于某一固定[[象限]]时非零，
则称谱序列为对应象限谱序列。比如**第一象限谱序列**就是
对 $p<0$，$q<0$ 都有 $E_r^{p,q}=0$。同调谱序列也一样。
:::

::: definition [乘法结构]
设 Abel 范畴 $\mathcal{A}$ 带有幺半结构 $\otimes$。
谱序列 $E_r$ 的**乘法结构**指的是对每个 $r\ge r_0$，
$p,q,p',q'\in\mathbb{Z}$ 给定乘法
$$
E_r^{p,q}\otimes E_r^{p',q'}\to E_r^{p+p',q+q'},
$$
满足对 $a\in E_r^{p,q}$，$b\in E_r^{p',q'}$，
$$
d_r(ab)=(d_ra)b+(-1)^{p+q}a(d_rb),
$$
且第 $r+1$ 页的乘法与第 $r$ 页同调上的乘法一致。
换言之，$E_r=\bigoplus_{p,q}E_r^{p,q}$ 关于总次数构成[[微分分次代数]]，
且 $E_{r+1}$ 的代数结构与 $E_r$ 的上同调代数一致。
如 $(\mathcal{A},\otimes)$ 为对称幺半，且
$$
ba=(-1)^{(p+q)(p'+q')}ab,
$$
则称此乘法结构**交换**。换言之，$E_r$ 都是交换的微分分次代数。
带乘法结构谱序列之间的态射有显然的定义。

设 $\mathcal{A}$ 中一列过滤对象 $\{F^pH^n\}_{p,n\in\mathbb{Z}}$ 也带有乘法结构
$H^n\otimes H^{n'}\to H^{n+n'}$，且与滤链相容，即
$(F^pH^n)(F^{p'}H^{n'})\subseteq F^{p+p'}H^{n+n'}$。
如 $E_r\Rightarrow H^n$ 且 $H^n$ 乘法结构自然诱导的[[分次]]对象
$\{F^pH^n/F^{p+1}H^n\}_{p\in\mathbb{Z}}$ 的乘法与 $E_\infty^{p,q}$
的乘法相同，则称此谱序列收敛**保持乘法**。
:::

## 构造方法

谱序列有几种一般的构造方法。

### 滤复形

用滤复形构造谱序列，兼具一般性及直观。从中大致可以看到谱序列的“逼近”过程。
所谓滤复形，指的是[[链复形]] $\{C^n,d^n\}_{n\in\mathbb{Z}}$，对每个 $n$ 附带滤链
$$
\cdots\supseteq F^{p-1}C^n\supseteq F^pC^n\supseteq F^{p+1}C^n\supseteq\cdots
$$
满足滤链与边缘映射相容，即 $d(F^pC^n)\subseteq F^pC^{n+1}$。
我们假设滤链有界，即对每个 $n$ 都有 $p\gg0$ 时 $F^pC^n=0$，$F^{-p}C^n=C^n$，
来构造谱序列 $\{E_r^{p,q}\}_{r\ge0}$，满足
$E_0^{p,q}=F^pC^{p+q}/F^{p+1}C^{p+q}$ 为分次复形的链群，
$E_1^{p,q}=H^{p+q}(F^pC^\bullet/F^{p+1}C^\bullet)$ 为分次复形的同调群，
且它最终收敛到 $H^n(C^\bullet)$。以下将 $Z^n(C^\bullet)$、
$B^n(C^\bullet)$、$H^n(C^\bullet)$ 分别记作 $Z^n$、$B^n$、$H^n$。
下面这一段建议读者仅看 $E_r^{p,q}$ 的定义，而自己验证之后的事情，
因为只是看我做一遍，不论我写得多详细，也很难理解个中奥妙。

对 $0\le r\le\infty$，定义 $A_r^p=F^pC\cap d^{-1}(F^{p+r}C)$，
$Z_r^p=\operatorname{im}(A_r^p\to F^pC/F^{p+1}C)$，
$B_r^p=\operatorname{im}(d(A_{r-1}^{p-r+1})\to F^pC/F^{p+1}C)$，
详细写出来为
$$
A_r^{p,q}=\{x\in F^pC^{p+q}\mid dx\in F^{p+r}C^{p+q+1}\}\subseteq F^pC^{p+q},
$$
$$
Z_r^{p,q}=\{\bar{x}\in F^pC^{p+q}/F^{p+1}C^{p+q}\mid dx\in F^{p+r}C^{p+q+1}\}\subseteq F^pC^{p+q}/F^{p+1}C^{p+q},
$$
$$
B_r^{p,q}=\{\bar{x}\in F^pC^{p+q}/F^{p+1}C^{p+q}\mid\exists y\in F^{p-r+1}C^{p+q-1},\,\overline{dy}=\bar{x}\}\subseteq F^pC^{p+q}/F^{p+1}C^{p+q},
$$
大体上即 $F^pC^{p+q}/F^{p+1}C^{p+q}$ 中那些“$d$ 之后前进 $r$ 格”
以及“从后退 $r-1$ 格处 $d$ 来”的元素。
因 $d^2=0$，有 $B_r^{p,q}\subseteq Z_r^{p,q}$。令
$$
E_r^{p,q}=Z_r^{p,q}/B_r^{p,q}
=\frac{A_r^{p,q}+F^{p+1}C^{p+q}}{d(A_{r-1}^{p-r+1,q+r-2})+F^{p+1}C^{p+q}}
=\frac{A_r^{p,q}}{d(A_{r-1}^{p-r+1,q+r-2})+A_{r-1}^{p+1,q-1}}.
$$
由于 $r\gg0$ 时 $F^{p+r}C^{p+q}=0$，$F^{p-r+1}C^{p+q-1}=C^{p+q-1}$，
有 $r\gg0$ 时 $A_r^{p,q}$、$Z_r^{p,q}$、$B_r^{p,q}$、$E_r^{p,q}$ 都不再随 $r$ 变化，且
$$
Z_\infty^{p,q}=\operatorname{im}(Z^{p+q}\cap F^pC^{p+q}\to F^pC^{p+q}/F^{p+1}C^{p+q}),
$$
$$
B_\infty^{p,q}=\operatorname{im}(B^{p+q}\cap F^pC^{p+q}\to F^pC^{p+q}/F^{p+1}C^{p+q}),
$$
$$
E_\infty^{p,q}=\frac{\operatorname{im}(Z^{p+q}\cap F^pC^{p+q}\to F^pC^{p+q}/F^{p+1}C^{p+q})}{\operatorname{im}(B^{p+q}\cap F^pC^{p+q}\to F^pC^{p+q}/F^{p+1}C^{p+q})}.
$$
以 $F^pH^n$ 记那些可由 $F^pC^n$ 中元素代表的上同调类组成的子模，
则 $\{F^pH^n\}_{p\in\mathbb{Z}}$ 构成 $H^n$ 的有限滤链，
且 $E_\infty^{p,q}=F^pH^{p+q}/F^{p+1}H^{p+q}$。
这些 $E_r^{p,q}$ 就是我们的谱序列中的对象。

尚需指定边缘映射以及每一页的同调和下一页的对象之间的同构。由于
$$
E_r^{p,q}=\frac{A_r^{p,q}}{d(A_{r-1}^{p-r+1,q+r-2})+A_{r-1}^{p+1,q-1}},
$$
可直接令 $d_r=d_r^{p,q}\colon E_r^{p,q}\to E_r^{p+r,q-r+1}$
为由 $d\colon C^{p+q}\to C^{p+q+1}$ 诱导的映射；
依定义 $d$ 会把分子分母映射到对应的分子分母里面，且由 $d^2=0$ 自然有 $d_r^2=0$。
现在
$$
H_r^{p,q}=\frac{\ker(d_r^{p,q})}{\operatorname{im}(d_r^{p-r,q+r-1})}
=\frac{A_r^{p,q}\cap d^{-1}(d(A_{r-1}^{p+1,q-1})+A_{r-1}^{p+r+1,q-r})}{d(A_r^{p-r,q+r-1})+d(A_{r-1}^{p-r+1,q+r-2})+A_{r-1}^{p+1,q-1}};
$$
由于 $A_r^{p-r,q+r-1}\supseteq A_{r-1}^{p-r+1,q+r-2}$，
分母就是 $d(A_r^{p-r,q+r-1})+A_{r-1}^{p+1,q-1}$，
商去 $A_{r-1}^{p+1,q-1}$ 之后为
$$
\frac{d(A_r^{p-r,q+r-1})}{d(A_r^{p-r,q+r-1})\cap A_{r-1}^{p+1,q-1}}
=\frac{d(A_r^{p-r,q+r-1})}{d(A_r^{p-r,q+r-1})\cap F^{p+1}C^{p+q}}=B_{r+1}^{p,q};
$$
而分子商去 $A_{r-1}^{p+1,q-1}$ 之后为
$$
\frac{A_r^{p,q}}{A_{r-1}^{p+1,q-1}}\cap\frac{d^{-1}(d(A_{r-1}^{p+1,q-1})+A_{r-1}^{p+r+1,q-r})}{A_{r-1}^{p+1,q-1}}
=Z_r^{p,q}\cap\frac{d^{-1}(A_{r-1}^{p+r+1,q-r})}{d^{-1}(A_{r-1}^{p+r+1,q-r})\cap A_{r-1}^{p+1,q-1}}
=Z_r^{p,q}\cap\frac{d^{-1}(F^{p+r+1}C^{p+q+1})}{d^{-1}(F^{p+r+1}C^{p+q+1})\cap F^{p+1}C^{p+q+1}}
=Z_r^{p,q}\cap Z_{r+1}^{p,q}=Z_{r+1}^{p,q};
$$
所以
$$
H_r^{p,q}\cong\frac{Z_{r+1}^{p,q}}{B_{r+1}^{p,q}}=E_{r+1}^{p,q}.
$$
于是 $\{E_r^{p,q}\}_{r\ge0}$ 是谱序列，
且由上一段结尾的分析，有 $E_r^{pq}\Rightarrow H^{p+q}(C^\bullet)$。
容易验证 $E_0$ 和 $E_1$ 确如前述。

如 $C^\bullet$ 带有乘法结构，即它是[[微分分次代数]]，
且与滤链相容，即满足 $F^pC^\bullet\cdot F^{p'}C^\bullet\subseteq F^{p+p'}C^\bullet$，
则容易发现以上谱序列也具有乘法结构，且谱序列收敛 $E_r^{pq}\Rightarrow H^{p+q}(C^\bullet)$
保持乘法。

这一构造显然具有函子性，即对复形映射 $f\colon C^\bullet\to C'^\bullet$
以及相容的滤链，即满足 $f(F^pC^\bullet)\subseteq F^pC'^\bullet$，
作出的谱序列之间也有映射 $E_r^{pq}\to {E'}_r^{pq}$。
如两个滤复形都具有乘法结构而 $f$ 保持乘法，则谱序列映射也保持乘法。

### 正合偶

### 双复形

### 稳定 $\infty$-范畴中的滤对象

## 性质

### 低阶项正合列

设有第一象限谱序列 $E_r^{pq}$ 收敛到 $H^{p+q}$。
则 $p,q,r$ 较小的项可整理成几个正合列。

::: proposition
以下序列正合：
$$
0\to H^0\to E_1^{0,0}\to E_1^{1,0}
$$
$$
0\to E_2^{1,0}\to H^1\to E_2^{0,1}\to E_2^{2,0}\to H^2
$$
:::

::: proof
由于 $E_r^{pq}$ 在第一象限，即 $p<0$ 或 $q<0$ 时 $E_r^{p,q}=0$，
有 $H^0=E_\infty^{0,0}=\ker(d_1\colon E_1^{0,0}\to E_1^{1,0})$，
得第一个正合列。$H^1$ 的滤链只有两项，可写成短正合列
$$
0\to E_\infty^{1,0}\to H^1\to E_\infty^{0,1}\to0;
$$
而 $E_\infty^{1,0}=E_2^{1,0}$，$E_\infty^{0,1}=\ker(d_2\colon E_2^{0,1}\to E_2^{2,0})$，
然后 $\operatorname{coker}(d_2\colon E_2^{0,1}\to E_2^{2,0})=E_\infty^{2,0}$ 又是 $H^2$
滤链的最后一项，故有第二个正合列。
:::

### 超渡

## 例子

## 应用

## 参考文献

```bibliography
bott-tu:
  type: book
  author: [Raoul Bott, Loring Tu]
  year: 1982
  title: Differential Forms in Algebraic Topology
  series: Graduate Texts in Mathematics
  number: 82
  publisher: Springer
  label: Bott–Tu 1982
```

此书首先从正合偶出发构造谱序列，
由此推出滤复形和双复形的谱序列。
之后它给出了谱序列在拓扑学中的许多应用。

```bibliography
Weibel:
  type: book
  author: Charles Weibel
  year: 1994
  title: An Introduction to Homological Algebra
  series: Cambridge Studies in Advanced Mathematics
  number: 38
  publisher: Cambridge University Press
  label: Weibel 1994
```

此书直接从滤复形构造谱序列，并对滤链无界情形的收敛情况作了些讨论，
尔后介绍了谱序列在代数中的许多应用。

```bibliography
HA:
  type: book
  author: Jacob Lurie
  year: 2017
  title: Higher Algebra
  label: Higher Algebra
```

此书的 1.2.2 节给出从稳定 $\infty$-范畴中的滤对象得到谱序列的方法。

```terms
谱序列:
  en: spectral sequence
  de: Spectralsequenz
  fr: suite spectrale
  la: sequentia spectralis
```
