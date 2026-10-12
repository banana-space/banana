---
title: Abel簇相关
---

## Abel簇的平展上同调

::: theorem
设$A$为域$k$上的阿贝尔簇而$\ell$是一个与特征互素的素数。那么

(i)有同构
$\bigwedge^rH^1_{\operatorname{ét}}(A,\mathbb{Z}_{\ell})\cong H^r_{\operatorname{ét}}(A,\mathbb{Z}_{\ell})$；

(ii)考虑Tate模$T_{\ell}A:=\varprojlim A[\ell^n]$，
有同构$H^1_{\operatorname{ét}}(A,\mathbb{Z}_{\ell})\cong (T_{\ell}A)^{\vee}$。
:::

::: remark
复的情况下，根据GAGA得知此对应为复环面，而其奇异上同调环也是这样的结构，细节参考[@Hatcher02]例3.11。
:::

考虑Kummer正合列$0\to\bm{\mu}_{\ell^n}\to\mathbb{G}_m\to\mathbb{G}_m\to0$。
考虑自由群$N(A):=\operatorname{Pic}(A)/\operatorname{Pic}^0(A)$，正合列诱导出
\[
0\to N(A)/\ell^n N(A)\to H^2_{\operatorname{ét}}(A,\bm{\mu}_{\ell^n})\to H^2_{\operatorname{ét}}(A,\mathbb{G}_m)[\ell^n].
\]
取逆极限得到
\[
0\to N(A)\otimes\mathbb{Z}_{\ell}\to H^2_{\operatorname{ét}}(A,\mathbb{Z}_{\ell})\to T_{\ell}H^2_{\operatorname{ét}}(A,\mathbb{G}_m).
\]
因为
$H^2_{\operatorname{ét}}(A,\mathbb{Z}_{\ell})=\bigwedge^2H^1_{\operatorname{ét}}(A,\mathbb{Z}_{\ell})=\bigwedge^2(T_{\ell}A)^{\vee}$，
故$H^2_{\operatorname{ét}}(A,\mathbb{Z}_{\ell})$内元素可以看作反对称双线性型
$T_{\ell}A\times T_{\ell}A\to\mathbb{Z}_{\ell}$（即为Weil配对）。
而映射$N(A)\otimes\mathbb{Z}_{\ell}\to H^2_{\operatorname{ét}}(A,\mathbb{Z}_{\ell})$
也可以由Weil配对给出，略去讨论。

## Abel簇和Jacobi簇

::: lemma
(i) Abel簇之间的映射由Tate模决定；

(ii)对光滑射影曲线$C$及其Jacobi簇$J$，
有$H^1_{\operatorname{ét}}(J,\mathbb{Z}_{\ell})\cong H^1_{\operatorname{ét}}(C,\mathbb{Z}_{\ell})$。
:::

::: proof
(i)略去；

(ii)注意到对任何代数簇都有
$H^1_{\operatorname{ét}}(X,\mathbb{Z}/n\mathbb{Z})=\operatorname{Pic}(X)[n]$，
且$C\to J$诱导同构$\operatorname{Pic}^0(J)\cong \operatorname{Pic}^0(C)$，
因此得到同构
$H^1_{\operatorname{ét}}(J,\mathbb{Z}/\ell^n\mathbb{Z})\cong H^1_{\operatorname{ét}}(C,\mathbb{Z}/\ell^n\mathbb{Z})$。
取极限即可。
:::

::: theorem
设$A$为阿贝尔簇，那么存在其上光滑曲线$C$的Jacobi簇$J$使得有一个满射$J\to A$，
即所有Abel簇都是Jacobi簇的商。
:::

::: proof
取嵌入$A\hookrightarrow \mathbb{P}^n$，根据多次Bertini定理会截出光滑曲线$C\subset A$。
根据Gysin序列得到
满射
\[
H^1_{\operatorname{ét}}(C,\mathbb{Z}/\ell^n\mathbb{Z})\twoheadrightarrow H^{2g-1}_{\operatorname{ét}}(A,\mathbb{Z}/\ell^n\mathbb{Z}(g-1)).
\]
再根据Poincaré对偶得到单射
$H^1_{\operatorname{ét}}(A,\mathbb{Z}_{\ell})\hookrightarrow H^1_{\operatorname{ét}}(C,\mathbb{Z}_{\ell})$。
由引理(ii)得到
$H^1_{\operatorname{ét}}(J,\mathbb{Z}_{\ell})\cong H^1_{\operatorname{ét}}(C,\mathbb{Z}_{\ell})$且
$H^1_{\operatorname{ét}}(J,\mathbb{Z}_{\ell})\cong(T_{\ell}J)^{\vee}$和
$H^1_{\operatorname{ét}}(A,\mathbb{Z}_{\ell})\cong(T_{\ell}A)^{\vee}$。
因此得到满射$T_{\ell}J\twoheadrightarrow T_{\ell}A$。根据引理(i)得到满射$J\to A$。
:::

## Mordell-Weil定理一瞥

用一些代数数论和平展上同调知识可以证明：

::: theorem [弱Mordell-Weil定理]
设$A$是整体域$K$上的一个阿贝尔簇，设$n$在$K$内可逆，那么$A(K)/nA(K)$是有限的。
:::

再用Weil的高度配对以及完全初等的泛函分析可以得到：

::: theorem [Mordell-Weil定理]
设$A$是整体域$K$上的一个阿贝尔簇，那么$A(K)$是有限生成的。
:::

这些证明可以参考笔记
[MW](https://zacharygardner.net/wp-content/uploads/2020/07/Abelian-Varieties-and-Mordell-Weil-Theorem-1.pdf)。
