---
title: Birkhoff 分解
categories: [线性代数, 代数几何]
navboxes: [线性代数]
---

<problems>
- 导言中的 $k_1\ge \cdots\ge k_n$ 似乎应为整数，不一定是自然数（例如 $M=z^{-1}I_n$ 时 $k_1=\cdots=k_n=-1$）。
</problems>

在[[线性代数]]中，**Birkhoff 分解**是一种特殊的[[矩阵]]分解，
技术上与[[Gauß 消元法]]类似。
给定任意[[域]]$F$，以及以[[Laurent 多项式]]为系数的[[可逆矩阵]] $M\in\mathrm{GL}_n(F[z,z^{-1}])$，
则可将之写为三个矩阵乘积的形式：
\[
M=M_- M_0 M_+.
\]
其中 $M_+\in \mathrm{GL}_n(F[z])$，$M_-\in\mathrm{GL}_n(F[z^{-1}])$，
而 $M_0=\mathrm{diag}(z^{k_1},\cdots,z^{k_n})$，
其中 $k_1\ge \cdots\ge k_n$ 都是[[自然数]]。
而且对任意给定的 $M$，$M_0$ 具有唯一性：
$k_n+k_{n-1}+\cdots+k_{n-r+1}$就是
全体$r\times r$的[[子矩阵]]的[[行列式]]中$z$的幂次的最小可能值。

[[Birkhoff–Grothendieck 定理]]是该分解的直接推论，
即[[射影直线]] $\mathbb P^1$ 上的[[向量丛]]都是[[线丛]] $\mathcal O(k)$ 的[[直和]]。

这个分解最早由 George David Birkhoff 于1909年发现。
而一般来说，1957年[[Alexander Grothendieck]] 发现
该分解实则来自[[仿射群|仿射]][[Kac–Moody 群]]的[[Bruhat 分解]]，
于是可以将该分解推广到一些[[约化群|约化]][[代数群]]的情况。

此外该分解也有其他方向的推广，
例如可以将代数的Laurent 多项式环换成解析的$\mathbb C\backslash0$上收敛的Laurent 函数环，
进而得到全纯向量丛版本的Birkhoff–Grothendieck 定理。

## 算法

Birkhoff 分解问题具有以下有效算法：

1. 假设要分解的矩阵为$\tilde M$。
   首先，取$M:=z^m\tilde M$，保证$M$的系数都在$F[z]$中。
   $\det M$是Laurent 多项式环$F[z,z^{-1}]$中的可逆元，所以一定形如$c\cdot z^d$，
   其中$c\in F^\times,d\in\mathbb Z$。
   由于上述处理，现在$d$必须是非负整数。

2. 其次，我们作分解$M'=D^{-1}\cdot P\cdot M$，
   这里$P$是一个置换矩阵，$D=\mathrm{diag}(z^{s_1},\cdots,z^{s_n})$，
   满足$M'$的任意行不再有公共的因子$z$（即尽量提取$M$中每行能提取的最大$z$的幂次因式），
   然后通过$P$的置换使得$s_1\ge \cdots\ge s_n$。

3. 如果$s_1+\cdots+s_n=d$则这一步完成，否则说明$\det M'$还有$z$的幂次因子
   （或者等价地说$M'$的常数项对应的矩阵不可逆）。所以总存在下三角矩阵$E\in\mathrm{GL}_n(F)$，
   使得$E\cdot M'$中存在一行都转化为$z$的倍数。
   （通过将上面行的倍数加到下面的行，来Gauß 消元创造常数项通通为零的行）。

   现在回到第二步，用$M''=D\cdot E\cdot M'$代替原来的$M$，这里$D,E$是前文得到的。如此一来：

   我们得到了$M''=DED^{-1}\cdot P\cdot M$，由于$D$的$z$幂次下降以及$E$是下三角矩阵，
   由此可知$DED^{-1}\cdot P\in\mathrm{GL}_n(F[z^{-1}])$
   （检查矩阵元都位于$F[z^{-1}]$，而且行列式为$\pm\det E\in F^\times$）。
   而且经此操作，$M''$能提取出每行的$z$的幂次更多。所以第二第三步的循环必然在有限步骤内终止。

4. 当上述两步循环结束后，说明我们得到了某
   \[
   M_+:=D^{-1}P\cdot (D_lE_lD_l^{-1}P_l \cdots D_1E_1D_1^{-1}P_1)M\in\mathrm{GL}_n(F[z]).
   \]
   因为所有的$z$幂次已完全提出，再记：
   \[
   M_-:=(P\cdot D_lE_lD_l^{-1}P_l \cdots D_1E_1D_1^{-1}P_1)^{-1}\in\mathrm{GL}_n(F[z^{-1}]).
   \]
   以及$M_0:=z^{-m}D$（记得一开始乘的常数$z^m$），于是得到
   \[
   M_-M_0M_+=\tilde M.
   \]
   这即原矩阵的分解。

## 应用

也是1957年，Grothendieck 指出该定理推出如下的结果：

::: theorem [Birkhoff–Grothendieck]
任意$\mathbb P_F^1$上的（代数）向量丛$\mathcal E$都同构于线丛的直和。
而射影直线上的线丛必须形如$\mathcal O(k)$。由此，存在一系列（置换下唯一的）整数$k_i$使得
\[
\mathcal E\cong\mathcal O(k_1)\oplus\cdots\oplus\mathcal O(k_n).
\]
:::

::: proof [证明概要]
令$X=\mathbb P_F^1=\{[x:y]\}$并取标准[[开覆盖]]
$U_0=\{x\ne 0\}\cong\mathbb A^1=\operatorname{Spec}F[z]$以及
$U_\infty=\{y\ne 0\}\cong\mathbb A^1=\operatorname{Spec}F[z^{-1}]$，这里$z=y/x$。
于是$V:=U_0\cap U_\infty\cong\operatorname{Spec}F[z,z^{-1}]$。

因为$\mathcal E|_{U_0},\mathcal E|_{U_\infty}$都是向量丛，
由于在[[仿射直线]]上，
所以它们必须同构于[[平凡丛]] $\mathcal O_{U_0}^{\oplus n},\mathcal O_{U_\infty}^{\oplus n}$。
那么在交集$V$上，
两种[[平凡化]]
$\phi_0:\mathcal E|_{U_0}\stackrel{\sim}\to\mathcal O_{U_0}^{\oplus n},\phi_\infty:\mathcal E|_{U_\infty}\stackrel{\sim}\to\mathcal O_{U_\infty}^{\oplus n}$
差异给出过渡矩阵
\[
g:=\phi_\infty\circ\phi_0^{-1}\in\Gamma(V,\mathrm{GL}_n(\mathcal O_V))=\mathrm{GL}_n(F[z,z^{-1}])
\]
且注意到平凡化的改变相当于$g$变作$a_\infty ga_0^{-1}$，这里
\[
g\mapsto g_\mathrm{diag}:=a_\infty\cdot g\cdot a_0^{-1},\quad
a_0\in\mathrm{GL}_n(F[z]),a_{\infty}\in\mathrm{GL}_n(F[z^{-1}]).
\]
那么对$g$应用Birkhoff 分解，
说明通过适当选取$a_0,a_\infty$可以使得$g_\mathrm{diag}=\mathrm{diag}(z^{k_1},\cdots,z^{k_n})$。
而由于线丛$\mathcal O(k)$在上述开覆盖下的过渡矩阵就是$[z^k]_{1\times 1}$，
于是$\mathcal E$同构于线丛的直和
\[
\mathcal E\cong\mathcal O(k_1)\oplus\cdots\oplus\mathcal O(k_n).
\]
最后唯一性则可以通过分解中对角矩阵的对角元的$z$幂次唯一性确定。
这是因为，任意同构于线丛直和的平凡化选取，都相当于给出一个Birkhoff 分解。
:::

```terms
Birkhoff 分解:
  en: Birkhoff decomposition
  de: Birkhoff-Zerlegung
  fr: décomposition de Birkhoff
```
