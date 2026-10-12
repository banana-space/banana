---
title: 万有系数定理
categories: [同调代数, 同调论]
notices:
  - name: 问题
    items:
      - “应用”一节需要扩充。
navboxes: [同调代数, 代数拓扑]
---

**万有系数定理**描述了主理想整环上，
[[链复形]]的（上）[[同调]]和它与某个模的张量或同态后得到的链复形的（上）同调的关系。
特别地，由于拓扑空间的（上）同调由某个链复形的（上）同调给出，
万有系数定理可以给出拓扑空间的不同系数的（上）同调的关系。

## 定理与证明

::: theorem [同调万有系数定理]
设$R$是[[主理想整环]]，$M$为$R$-模，$C_{\bullet}$
是一个由[[自由模|自由$R$-模]]构成的链复形。
那么有典范 $R$-模短正合列
\[
0 \to H_n(C_{\bullet})\otimes_R M \to
H_n(C_{\bullet}\otimes_R M) \to
\operatorname{Tor}_1^R(H_{n-1}(C_{\bullet}),M) \to 0
\]
且它有不典范的分裂。
:::

::: proof
设$Z_n,B_n$分别为链复形$C_{\bullet}$的$n$-圈、$n$-边界。
由于$R$是主理想整环，任何自由$R$-模的子模都是自由的。
因此，短正合列
\[
0\to Z_n \to C_n \to B_{n-1} \to 0
\]
分裂。将$Z_{\bullet},B_{\bullet}$视作微分为$0$的链复形，
我们得到一个链复形的短正合列
\[
0 \to Z_{\bullet} \to C_{\bullet} \to B_{\bullet}[-1] \to 0,
\]
其中每一行分裂。因此，将每一项与$M$作张量积，得到
\[
0 \to Z_{\bullet}\otimes_R M \to C_{\bullet}\otimes_R M \to B_{\bullet}[-1]\otimes_R M \to 0
\]
每一行亦是分裂短正合列。将其展开成长正合列
\[
\begin{aligned}
\dots \to & B_n\otimes_R M \xrightarrow{i_n\otimes 1} Z_n\otimes_R M \to
H_n(C_{\bullet}\otimes_R M) \\ \to &
B_{n-1}\otimes_R M \xrightarrow{i_{n-1}\otimes 1} Z_{n-1}\otimes_R M \to \dots
\end{aligned}
\]
考察与$H_n(C_{\bullet}\otimes_R M)$相邻的几项，
有分裂短正合序列
\[
\begin{aligned}
  0 \to \operatorname{coker}(i_n\otimes 1) \to H_n(C_{\bullet}\otimes_R M)
  \to \ker(i_{n-1}\otimes 1) \to 0.
\end{aligned}
\]
因为$B_n,Z_n$均是自由的，
\[
\operatorname{coker}(i_n\otimes 1) = \operatorname{coker}(i_n)\otimes_R M = H_n(C_{\bullet})\otimes_R M.
\]
类似地，由 [[$\operatorname{Tor}$ 函子]]的定义有
$\ker(i_{n-1}\otimes 1) = \operatorname{Tor}_1^R(H_{n-1}(C_{\bullet}),M)$，定理得证。
:::

::: theorem [上同调万有系数定理] {@上同调万有系数定理}
设$R$是[[主理想整环]]，$M$为$R$-模，$C_{\bullet}$
是一个由[[自由模|自由$R$-模]]构成的链复形。
那么有典范 $R$-模短正合列
\[
0 \to\operatorname{Ext}_R^1(H_{n-1}(C_{\bullet}),M) \to
H^n\operatorname{Hom}_R(C_{\bullet},M) \to
\operatorname{Hom}_R(H_n(C_{\bullet}),M) \to 0
\]
且它有不典范的分裂。
:::

::: remark
考虑将$\mathbb{RP}^1$捏成一个点的映射$\mathbb{RP}^2 \to S^2$。
它诱导的映射$H_2(\mathbb{RP}^2;\mathbb{Z}) \to H_2(S^2;\mathbb{Z})$
显然为零映射，但$H_2(\mathbb{RP}^2;\mathbb{Z}/2\mathbb{Z}) \to H_2(S^2;\mathbb{Z}/2\mathbb{Z})$
为同构。这说明定理给出的分裂不典范。
:::

## 推广

万有系数定理是[[谱序列]]的特殊情形。

## 应用

该定理的一常见应用场景如下：
当已经得知某拓扑空间$X$具有有限生成的$\mathbb Z$-系数同调时，
就能使用 @上同调万有系数定理 确定$X$的$\mathbb Z$-系数上同调。
记$H_n(X;\mathbb Z)=\mathbb Z^{\beta_n}\oplus T_n$，
其中$T_n$是一个有限生成挠$\mathbb Z$-模，也就是一个有限Abel 群。
那么$H^n(X;\mathbb Z)=\mathbb Z^{\beta_n}\oplus T_{n-1}$，
这是因为$\operatorname{Ext}(\mathbb Z^{\beta_{n-1}}\oplus T_{n-1},\mathbb Z)=T_{n-1}$恰是其挠部分。
所以直观地说，整系数上同调相较下同调，整体往高一位平移了挠的部分。

```terms
万有系数定理:
  en: universal coefficient theorem
  de: universeller Koeffizientensatz
  fr: théorème des coefficients universels
  grc: θεώρημα καθολικὼν συντελέστων
  la: theorema de coefficientibus universalibus
```
