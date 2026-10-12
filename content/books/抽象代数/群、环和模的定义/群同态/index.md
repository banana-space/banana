---
title: 群同态
---

::: definition [群同态]
$(G_1,\cdot_{_1})$和$(G_2,\cdot_{_2})$是群，$\varphi\colon G_1\rightarrow G_2$是映射。
如果$\varphi$保持乘法，即对任意$g,h\in G_1$，有
\[
\varphi(g \cdot_{_1} h)=\varphi(g)\cdot_{_2} \varphi(h),
\]
就称$\varphi$是$(G_1,\cdot_{_1})$到$(G_2,\cdot_{_2})$的**群同态**。
我们用${\rm Hom}(G_1,G_2)$表示群同态组成的集合。

如果群同态$\varphi$是双射，就称$\varphi$是$G_1$到$G_2$的**群同构**。
:::

::: remark
同构的群首先作为集合是同构的（之间存在双射），进一步它们具有同样的乘法结构。
:::

::: remark
对于群同态$\varphi\colon G_1\rightarrow G_2$，
通过考虑$\varphi(1_{_{G_1}}\cdot 1_{_{G_1}})=\varphi(1_{_{G_1}})$即知
$\varphi(1_{_{G_1}})=1_{_{G_2}}$。另外，对任意$g\in G_1$，$\varphi(g^{-1})=\varphi(g)^{-1}$。
:::

::: remark
假设$\varphi\in {\rm Hom}(G_1,G_2)$是群同构，那么$\varphi^{-1}\in {\rm Hom}(G_2,G_1)$也是群同构。
:::

::: remark
若有$G_1$到$G_2$的群同构，就称它们是**同构的**并记作是$G_1\simeq G_2$。
注意到这个符号并不精确，因为没说明$\varphi$是如何定义的。
实际上，群$G_1$和$G_2$同构而它们之间的同构映射$\varphi$可能不唯一。

假设$G_1$和$G_2$均为${\mathbb{C}}^\times$，对任意的$\lambda\in {\mathbb{C}}^\times$，
映射$z\mapsto \lambda \cdot z$均为$G_1$到$G_2$的同构。
:::

::: remark [同态的复合]
群同态的复合仍为群同态，即有映射
\[
{\rm Hom}(G,G')\times {\rm Hom}(G',G'') \longrightarrow {\rm Hom}(G,G''), \ \ (\varphi,\psi)\mapsto\psi\circ \varphi .
\]
其中，$G,G',G''$是群。
换而言之，若$\varphi\in {\rm Hom}(G,G')$，$\psi\in {\rm Hom}(G',G'')$，
则$\psi\circ \varphi$也是群同态。
\[
\begin{tikzcd}
G \arrow[r, "\varphi"] \arrow[dr, "\psi\circ\varphi",swap] &  G' \arrow[d, "\psi"]\\
   &G''           \end{tikzcd}
\]
用$\mathbf{Aut}(G)$表示$G$到自身的群同构的集合，配有映射的复合作为$\mathbf{Aut}(G)$上的乘法，
那么$\mathbf{Aut}(G)$是群。我们称$\mathbf{Aut}(G)$是$G$的**自同构群**。

考虑集合$G$（忘掉其群结构）的对称群$\mathfrak{S}_G$，它由所有$G$到自身的双射构成。
${\rm Aut}(G)$中的元素还要尊重$G$的群结构，从而${\rm Aut}(G)<\mathfrak{S}_G$是子群。
:::

::: remark [群同态的像与核]
给定群同态$\varphi\in {\rm Hom}(G_1,G_2)$，
定义$\varphi$的**像**${\rm Im}(\varphi)$和**核**${\rm Ker}(\varphi)$分别为
\[
{\rm Im}(\varphi)=\big\{\varphi(g) \bigm|g\in G_1\big\}, \ \ {\rm Ker}(\varphi)=\big\{g\in G_1\bigm|\varphi(g)=1_{_{G_2}}\big\}.
\]
那么，${\rm Ker}(\varphi)<G_1$是子群，${\rm Im}(\varphi)<G_2$也是子群。

注意到$\varphi$是单射当且仅当${\rm Ker}(\varphi)=\{1\}$；
$\varphi$是满射当且仅当${\rm Im}(\varphi)=G_2$。
在群论中常用的一个结论是为说明$\varphi$是单射只要验证$1\in G_2$的原像唯一。

实际上，如果${\rm Ker}(\varphi)=\{1\}$，假设$g,h\in G_1$使得$\varphi(g)=\varphi(h)$，那么，
$\varphi(gh^{-1})=\varphi(g)\varphi(h)^{-1}=1$，即$gh^{-1}\in {\rm Ker}(\varphi)$。
这表明$gh^{-1}=1$，即$g=h$。所以，$\varphi$是单射。
:::

::: example
我们有几个经典的群同态：

- $K$是域，$n\geqslant 1$，行列式映射
  \[
  \det\colon\mathbf{GL}(n;K)\rightarrow K^\times
  \]
  是群同态。
  令$\mathbf{SL}(n;K)={\rm Ker}\left(\det\right)$，这是行列式为$1$的$n\times n$的矩阵构成的群，
  被称为 **$K$上的特殊线性群**。

- 指数映射$\exp\colon{\mathbb{C}}\rightarrow {\mathbb{C}}^\times$是群同态，
  ${\rm Ker}(\exp)=2\pi i \mathbb{Z}$。

- 对数映射$\log\colon{\mathbb{R}}^\times\rightarrow {\mathbb{R}}$是群同态，${\rm Ker}(\log)=\{1\}$。

- $\mod n$映射。考虑除$n$的余数给出自然的群同态
  \[
  \begin{tikzcd}
  {\mathbb{Z}} \arrow[rr, "\mod n"]  &  &
    {\mathbb{Z}/n\mathbb{Z}}
  , &  k \mapsto \overline{k}.  \end{tikzcd}
  \]
  它的核是能被$n$整除的整数，即${\rm Ker}\big(\mathbb{Z}\rightarrow
  {\mathbb{Z}/n\mathbb{Z}}
  \big)=n\mathbb{Z}$。

:::

::: example
$G$是群，$g\in G$，则映射
\[
\varphi_g\colon\mathbb{Z}\rightarrow G, \ \ n\mapsto g^n
\]
是群同态，其像${\rm Im}(\varphi_g)$为$\langle g\rangle$。
:::

::: example
$G$是群，对任意$g\in G$，定义共轭映射${\rm Int}(g)$：
\[
{\rm Int}(g)\colon G\rightarrow G, \ \ h \mapsto {\rm Int}(g)(h)=ghg^{-1}.
\]
对任意$h_1,h_2\in G$，有$gh_1h_2g^{-1}=gh_1g^{-1}\cdot gh_2g^{-1}$，
从而${\rm Int}(g)\in {\rm Hom}(G,G)$；由于${\rm Int}(g)$可逆，其逆为${\rm Int}(g^{-1})$，
从而${\rm Int}(g)\in {\rm Aut}(G)$。所以，我们定义了映射：
\[
{\rm Int}\colon G\rightarrow {\rm Aut}(G), \ \ g\mapsto {\rm Int}(g).
\]
对任意$h,g_1,g_2\in G$，我们有
\[
{\rm Int}(g_1g_2)(h)=g_1(g_2hg_2^{-1})g_1^{-1}= {\rm Int}(g_1)(g_2hg_2^{-1})={\rm Int}(g_1)\circ {\rm Int}(g_2)(h).
\]
所以，${\rm Int}\colon G\rightarrow {\rm Aut}(G)$是群同态。
我们显然有${\rm Ker}({\rm Int})={\rm Z}(G)$。
我们称像${\rm Int}(G)< {\rm Aut}(G)$是$G$的**内自同构群**。
:::
