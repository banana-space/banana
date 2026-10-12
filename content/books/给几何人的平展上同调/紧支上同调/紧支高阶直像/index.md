---
title: 紧支高阶直像
notices:
  - name: 问题
    items:
      - 第一个命题的证明最后一句中 (iv)、(v) 的说法似乎互换了：(v) 才是 Mayer–Vietoris 序列，(iv) 是零扩张与闭子概形的正合列的导出版本。
---

::: definition [紧支高阶直像]
设概形$S$拟紧拟分离且$f:X\to S$分离有限型，定义
\[
\begin{aligned}
&R^qf_!:=R^q\bar{f}_*\circ j_!:\operatorname{Ab}_{\operatorname{tor}}(X_{\operatorname{ét}})\to\operatorname{Ab}_{\operatorname{tor}}(S_{\operatorname{ét}}),\\
&Rf_!:=R\bar{f}_*\circ j_!:D^+_{\operatorname{tor}}(X_{\operatorname{ét}})\to D^+_{\operatorname{tor}}(S_{\operatorname{ét}}),\\
&Rf_!:=R\bar{f}_*\circ j_!:D(X_{\operatorname{ét}},\Lambda)\to D(S_{\operatorname{ét}},\Lambda),
\end{aligned}
\]
其中$f=\bar{f}\circ j$是Nagata紧化且$\operatorname{tor}$指具有挠上同调的范畴且$\Lambda$是挠环。
:::

::: remark
下述$D^+_{\operatorname{tor}}(X_{\operatorname{ét}})$均可换成
$D^+_{\operatorname{tor}}(X_{\operatorname{ét}},\Lambda)$，其中$\Lambda$是环。
:::

::: proposition {@PrpDerivedLowerShriek-I}
设概形$S$拟紧拟分离且$f:X\to S$分离有限型有

(i)紧支高阶直像$R^*f_!$和$Rf_!$定义和Nagata紧化选取无关；

(ii)设$f':X'\to X$也是分离有限型，则有典范同构$Rf_!\circ Rf'_!\cong R(f\circ f')_!$，
故有Leray谱序列$E_2^{p,q}:=R^pf_!R^qf'_!\mathscr{F}\Rightarrow R^{p+q}(f\circ f')_!\mathscr{F}$；

(iii)对于拟紧拟分离概形的纤维积
\[
\begin{tikzcd}
  {X'} & X \\
  {S'} & S
  \arrow["{f'}"', from=1-1, to=2-1]
  \arrow["g", from=2-1, to=2-2]
  \arrow["{g'}", from=1-1, to=1-2]
  \arrow["f"', from=1-2, to=2-2]
  \arrow["\ulcorner"{anchor=center, pos=0.125}, draw=none, from=1-1, to=2-2]
\end{tikzcd}
\]
有$g^{-1}\circ Rf_!\cong Rf'_!\circ (g')^{-1}$；

(iv)设$Z\to X$是闭子概形，补为$U$。设$f_Z:Z\to S,f_U:U\to S$是结构映射，则有好三角
\[
Rf_{U,!}(K|_U)\to Rf_!K\to Rf_{Z,!}(K|_Z)\to Rf_{U,!}(K|_U)[1],
\]
其中$K\in D^+_{\operatorname{tor}}(X_{\operatorname{ét}})$或$K\in D(X_{\operatorname{ét}},\Lambda)$
其中$\Lambda$是挠环。因此有
长正合列
\[
\cdots\to R^if_{U,!}(\mathscr{F}|_U)\to R^if_!\mathscr{F}\to R^if_{Z,!}(\mathscr{F}|_Z)\to\cdots;
\]

(v)若$X=U\cup V$为拟紧开集的并，设$a:U\to S,b:V\to S$和$c:U\cap V\to S$。对于
$K\in D^+_{\operatorname{tor}}(X_{\operatorname{ét}})$或$K\in D(X_{\operatorname{ét}},\Lambda)$其中
$\Lambda$是挠环，则有好三角
\[
Rc_!(K|_{U\cap V})\to Ra_!(K|_U)\oplus Rb_!(K|_V)\to Rf_!K\to Rc_!(K|_{U\cap V})[1];
\]

(vi)短正合列可以诱导$R^*f_!$的长正合列。
:::

::: proof
(i)(ii)(iii)颇为复杂，我们暂且略去，参考[@StacksProject, Tag 0F7I, 0F7J, 0F7L]；
(vi)是平凡的，只需注意到对开浸入，下叹号正合，然后直接引高阶直像的长正合列即可；
(iv)(v)虽然不太困难，但我懒得写了，大致是先对不导出的版本给出短正合列，然后得到好三角，
见[@StacksProject, Tag 0GKN, 0GKP]。
注意(iv)为MV-序列，而(v)为 @ExactExtensionZeroPull 的导出版本。
:::

::: proposition {@PrpDerivedLowerShriek-II}
设$f:X\to Y$是拟紧拟分离概形间的分离有限型映射，设$\Lambda$是挠环。

(i)设$K_i\in D^+_{\operatorname{tor}}(X_{\operatorname{ét}})$，若存在$a$使得对$n<a$有$H^n(K_i)=0$，
则
\[
Rf_!\left(\bigoplus_iK_i\right)=\bigoplus_iRf_!K_i;
\]

(ii)函子
$Rf_!:=R\bar{f}_*\circ j_!:D(X_{\operatorname{ét}},\Lambda)\to D(Y_{\operatorname{ét}},\Lambda)$
和直和交换；

(iii)若$E\in D(X_{\operatorname{ét}},\Lambda)$和$K\in D(Y_{\operatorname{ét}},\Lambda)$，则有
\[
Rf_!E\otimes^{\mathbb{L}}_{\Lambda}K=Rf_!(E\otimes^{\mathbb{L}}_{\Lambda}f^{-1}K).
\]
:::

::: proof
(i)(ii)只需要对开浸入和紧合映射分别考虑即可。开浸入因为是逆像的左伴随，故一定和直和交换。
对于紧合映射，当为挠环的模层时，首先不难得知其纤维维数有界，
故根据 @RelCohDimPrp 知道其相对上同调维数有限。
(i)是容易的，取内射预解即可；对(ii)需要取K-内射的，然后根据相对上同调维数有限，
运用滤余极限和导出推出交换等等，
细节略去，参考[@StacksProject, Tag 0F11]；

(iii)根据Nagata紧化分解成开浸入$j$和紧合映射$\bar{f}$，
而此投影公式对$j$成立是根据取$K$的K-平坦预解和直接计算而来，
参见[@StacksProject, Tag 0E8I]。而对$\bar{f}$只需运用一般版本的 @022 即可，
需要用 @RelCohDimPrp 知道其相对上同调维数有限，细节略去。
:::
