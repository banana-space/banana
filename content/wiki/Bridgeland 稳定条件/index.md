---
title: Bridgeland 稳定条件
categories: [计数几何]
notices:
  - name: 问题
    items:
      - '“群作用”一节中 $\widetilde{\mathrm{GL}}{}^+(2,\mathbb{R})$ 似乎不是半直积 $\mathbb{Z} \rtimes \mathrm{GL}^+(2,\mathbb{R})$，而是 $\mathrm{GL}^+(2,\mathbb{R})$ 被 $\mathbb{Z}$ 的不分裂的中心扩张。'
navboxes: [计数几何]
---

在[[代数几何]]和[[同调代数]]中，
**Bridgeland 稳定条件**（有时简称**稳定条件**）
是[[三角范畴]]上的一种结构，
是[[稳定条件]]向[[导出范畴]]的推广，
以 [[Tom Bridgeland]] 命名。

三角范畴 $\mathcal{D}$ 上的 Bridgeland 稳定条件给每个对象 $E \in \mathcal{D}$
赋予一个[[复数]] $Z (E) \in \mathbb{C}$，称为其 **[[中心荷]]**；
该稳定条件也给出一族**半稳定对象**，
这些对象的中心荷的[[辐角]]称为其**相位**，
使得三角范畴中的任何对象都可唯一地按相位递减的顺序分解为有限个半稳定因子。

这一概念可看作[[向量丛]]的[[稳定向量丛|斜率稳定性]]向导出范畴的推广。
例如，对[[代数曲线|光滑射影曲线]]上的向量丛 $E$，
斜率 $\mu(E)=\deg(E)/{\operatorname{rk}(E)}$ 衡量其稳定性。
此时相应的 Bridgeland 稳定条件的中心荷定义为
$Z(E)=-{\deg(E)}+\mathrm{i}\operatorname{rk}(E)$，
从而比较斜率等价于比较 $Z(E)$ 在复平面中的辐角。

给定三角范畴 $\mathcal{D}$ 上 Bridgeland 稳定条件的集合
$\mathrm{Stab} (\mathcal{D})$ 具有自然的[[复流形]]结构。
当稳定条件在该复流形中移动时，
半稳定对象的集合（或[[模空间]]）只会在越过某些墙壁的时候发生跳跃，
这种跳跃由模空间和计数不变量的[[越壁现象]]描述。

## 定义

### 稳定条件

设 $\mathcal{D}$ 是[[本质小范畴|本质小]]的[[三角范畴]]，
其[[移位]]函子记为 $[1]$。

::: definition [切片]
$\mathcal{D}$ 的**切片**指一族[[加性范畴|加性]][[全子范畴]]
$\mathcal{P}(\varphi) \subset \mathcal{D}$，
其中 $\varphi \in \mathbb{R}$，满足以下条件：

- 对任意 $\varphi \in \mathbb{R}$，有
  $\mathcal{P}(\varphi+1)=\mathcal{P}(\varphi)[1]$。

- 若 $A \in \mathcal{P}(\varphi_1)$，
  $B \in \mathcal{P}(\varphi_2)$ 且 $\varphi_1>\varphi_2$，
  则 $\operatorname{Hom}_{\mathcal{D}}(A,B)=0$。

- 对任意对象 $E \in \mathcal{D}$，
  存在[[自然数]] $n$、实数 $\varphi_1>\cdots>\varphi_n$ 和一列态射
  \[
  0 = E_0 \longrightarrow E_1 \longrightarrow \cdots
  \longrightarrow E_n = E,
  \]
  使得对 $1 \leq i \leq n$，商对象 $A_i = E_i / E_{i-1}$ 满足
  $0 \not\simeq A_i \in \mathcal{P}(\varphi_i)$。
  这里商对象是由[[正合三角]]
  \[
  E_{i-1} \longrightarrow E_i \longrightarrow A_i
  \longrightarrow E_{i-1}[1]
  \]
  定义的。

:::

上述一列态射称为 $E$ 的
**[[Harder–Narasimhan 滤链]]**。
可以说明这样的滤链在同构意义下唯一。

::: definition [Bridgeland 稳定条件]
设 $\Lambda$ 是有限秩[[自由 Abel 群]]，
$v \colon K_0 (\mathcal{D}) \to \Lambda$ 是群同态，
其中 $K_0 (\mathcal{D})$ 是 [[Grothendieck 群]]。

称二元组 $\sigma=(Z,\mathcal{P})$ 为
$\mathcal{D}$ 上关于 $(\Lambda,v)$ 的
**Bridgeland 稳定条件**，如果满足以下条件：

- $\mathcal{P}$ 是 $\mathcal{D}$ 的切片。

- $Z \colon \Lambda \to \mathbb{C}$ 是群同态，
  且对任意非零对象 $E \in \mathcal{P}(\varphi)$，
  存在 $m(E) \in \mathbb{R}_{> 0}$ 使得

  \[
  Z(v(E))=m(E)\exp(\mathrm{i}\pi\varphi).
  \]

- （**支集条件**）存在 $\Lambda_{\mathbb{R}}=
    \Lambda\otimes_{\mathbb{Z}}\mathbb{R}$ 上的范数
  $\|\cdot\|$ 和常数 $C>0$，使得对任意
  $\sigma$-半稳定对象 $E$（定义见下文），都有

  \[
  \|v(E)\| \leq C |Z(v(E))|.
  \]

我们还引入以下术语和记号：

- $Z$ 称为**中心荷**。

- 若 $E \in \mathcal{P}(\varphi)$，则称 $E$ 为
  **$\sigma$-半稳定对象**，
  称 $\varphi$ 为 $E$ 的**相位**。

- 若 $E$ 还是 [[Abel 范畴]] $\mathcal{P}(\varphi)$ 中的[[单对象]]，
  则称 $E$ 为 **$\sigma$-稳定对象**。

- 对[[区间]] $I \subset \mathbb{R}$，
  记 $\mathcal{P}(I)$ 为包含所有
  $\mathcal{P}(\varphi)$（$\varphi \in I$）的最小的[[扩张闭子范畴|扩张闭]][[全子范畴]]。

:::

这里，支集条件大概是说半稳定对象的中心荷应构成 $\mathbb{C}$ 的离散子集，而不能有[[聚点]]。
注意该不等式只要求对存在半稳定对象的类 $v (E) \in \Lambda$ 满足。

### 由心刻画

Bridgeland 稳定条件也可通过选取三角范畴的[[心]]，并在该 Abel 范畴上定义稳定函数来描述。
这也是文献中常用的构造稳定条件的方法。

令
\[
\mathbb{H}=\{ r\exp(\mathrm{i}\pi\varphi) \mid
r>0,\ 0<\varphi\leq 1 \}.
\]

::: proposition [心与稳定函数]
给定 $\mathcal{D}$ 上的 Bridgeland 稳定条件
$\sigma=(Z,\mathcal{P})$，子范畴
\[
\mathcal{A}=\mathcal{P}(\mathopen]0,1])
\]
是 $\mathcal{D}$ 上某个有界 [[t 结构]]的[[心]]，
且对任意非零对象 $E \in \mathcal{A}$ 有
$Z(v(E)) \in \mathbb{H}$。

反过来，若 $\mathcal{A} \subset \mathcal{D}$ 是某个有界
t 结构的心，且群同态 $Z \colon \Lambda \to \mathbb{C}$
满足对任意非零对象 $E \in \mathcal{A}$ 都有
$Z(v(E)) \in \mathbb{H}$，
并且由 $E \mapsto Z(v(E))$ 给出的稳定函数
具有 Harder–Narasimhan 性质，
并满足关于 $v$ 的支集性质，
则它给出 $\mathcal{D}$ 上关于 $(\Lambda,v)$ 的
Bridgeland 稳定条件，
使得 $\mathcal{A}=\mathcal{P}(\mathopen]0,1])$。
:::

这里，Harder–Narasimhan 性质与支集性质不难在 Abel 范畴 $\mathcal{A}$ 中陈述。

## 例子

### 光滑射影曲线

设 $C$ 是复[[代数曲线|光滑射影曲线]]，
$\mathcal{D}=\mathsf{D}^{\mathrm{b}}(\mathsf{Coh}(C))$ 为其[[凝聚层导出范畴]]。
取心 $\mathcal{A}=\mathsf{Coh}(C)$，并定义
\[
Z(E)=-\deg(E)+\mathrm{i}\operatorname{rk}(E).
\]
则非零凝聚层 $E$ 的中心荷落在 $\mathbb{H}$ 中。
若 $E$ 是非零向量丛，则相位由斜率
$\mu(E)=\deg(E)/\operatorname{rk}(E)$ 决定；
斜率越大，相位越大。
经典的[[稳定向量丛]]理论说明该稳定函数满足 Harder–Narasimhan 性质，
从而给出 $\mathsf{D}^{\mathrm{b}}(\mathsf{Coh}(C))$ 上的稳定条件。
其半稳定对象是斜率半稳定凝聚层及其[[移位]]。

### K3 曲面

设 $X$ 是复射影 [[K3 曲面]]。
对 $E \in \mathsf{D}^{\mathrm{b}}(\mathsf{Coh}(X))$，
记 $v(E)$ 为 [[Mukai 向量]]，并记
$\langle -,-\rangle$ 为 [[Mukai 配对]]。
对满足某些条件的类
$\beta,\omega \in H^{1,1} (X; \mathbb{R})$，其中 $\omega$ 为[[丰沛线丛|丰沛]]类，
常考虑中心荷
\[
Z_{\beta,\omega}(E)=
\int_X \exp(-\beta-\mathrm{i}\omega) \cdot \mathrm{ch}(E) .
\]
其对应的心并非 $\mathsf{Coh}(X)$，
而是其沿某个[[挠对]][[斜置]]得到的 Abel 范畴。
可以说明 $\mathsf{Coh}(X)$ 不能是稳定条件对应的心。

Bridgeland 证明了 K3 曲面上稳定条件的存在性 [@Bridgeland2008]，
并描述了稳定条件流形 $\operatorname{Stab}(X)$
的一个连通分支 $\operatorname{Stab}^{\dagger}(X)$。
但 $\operatorname{Stab}(X)$ 是否连通仍然未知。

### 三维簇

对光滑射影三维簇，Bridgeland 稳定条件的构造更加复杂，
通常需要做两次斜置，
例如见 [@BayerMacriToda2014]。
该构造的关键要素之一是证明三维簇满足某个 Bogomolov–Gieseker 类型的不等式。
该不等式已在某些情形中得到证明 [@BayerMacriStellari2016]。

### 高维簇

对一般的光滑射影簇，
李纯毅在 2026 年的预印本中构造了稳定条件
[@Li2026]。

## 性质

### 稳定条件流形

固定有限秩自由 Abel 群 $\Lambda$ 和群同态
$v \colon K_0(\mathcal{D}) \to \Lambda$ 后，
记 $\operatorname{Stab}_{\Lambda}(\mathcal{D})$ 为关于 $(\Lambda,v)$ 的
局部有限 Bridgeland 稳定条件的集合。
其中局部有限性指对每个 $\varphi \in \mathbb{R}$，存在 $\eta>0$，
使得 $\mathcal{P}(\mathopen]\varphi-\eta,\varphi+\eta\mathclose[)$
是有限长度的[[拟 Abel 范畴]]。

::: theorem [Bridgeland 形变定理] {@Bridgeland-形变定理}
集合 $\operatorname{Stab}_{\Lambda}(\mathcal{D})$ 带有自然的拓扑，
并且映射
\[
\mathcal{Z} \colon
\operatorname{Stab}_{\Lambda}(\mathcal{D})
\longrightarrow
\operatorname{Hom}_{\mathbb{Z}}(\Lambda,\mathbb{C}),
\quad
(Z,\mathcal{P}) \longmapsto Z
\]
是到其像的[[局部同胚]]。
因此 $\operatorname{Stab}_{\Lambda}(\mathcal{D})$ 的每个连通分支
自然是[[复流形]]。
:::

见 [@Bridgeland2007]。

### 群作用

三角范畴的[[自等价群]]显然地作用在稳定条件流形上。

正[[行列式]]的[[一般线性群]] $\mathrm{GL}^+(2,\mathbb{R})$ 的[[万有覆叠]]
\[
\widetilde{\mathrm{GL}}{}^+(2,\mathbb{R}) =
\mathbb{Z} \rtimes \mathrm{GL}^+(2,\mathbb{R})
\]
也作用在稳定条件流形上。
其中 $\mathrm{GL}^+(2,\mathbb{R})$ 作用在中心荷上，
而 $\mathbb{Z}$ 的作用是将相位平移 $2$，而不改变中心荷。

## 应用

### 模空间与计数不变量

在许多已能构造稳定条件的几何情形，
固定数值类的 Bridgeland 半稳定对象形成[[代数叠]]，
并常常具有[[优模空间]]，
后者可用于构造各种[[计数不变量]]。

对 K3 曲面，Bayer–Macrì 证明了一般稳定条件下的
Bridgeland 模空间是[[射影簇]]，
并利用[[越壁现象]]研究这些模空间的双有理几何 [@BayerMacri2014]。

对 [[Calabi–丘流形|Calabi–丘三维簇]]，稳定对象的计数给出
[[Donaldson–Thomas 不变量]]。
稳定条件变化时，不变量满足[[越壁公式]]
[@KontsevichSoibelman2008]。

### 与物理的联系

[[弦论]]中的 [[D 膜]]稳定性是考虑 Bridgeland 稳定条件的原始想法之一。
[[凝聚层导出范畴]]中的对象对应 [[B 模型]]中的 D 膜。

[[同调镜像对称]]预测，
稳定条件流形与镜像一侧的[[复结构模空间]]相联系。

## 参考文献

基本文献：

```bibliography
Bridgeland2007:
  type: article
  author: 'Bridgeland, Tom'
  year: 2007
  title: Stability conditions on triangulated categories
  journaltitle: Annals of Mathematics
  volume: 166
  number: 2
  pages: 317–345
  doi: 10.4007/annals.2007.166.317
  arxiv: math/0212237
```

物理直观：

- nLab: [Bridgeland stability condition](https://ncatlab.org/nlab/show/Bridgeland+stability+condition).

代数簇上的稳定条件：

```bibliography
Bridgeland2008:
  type: article
  author: 'Bridgeland, Tom'
  year: 2008
  title: Stability conditions on K3 surfaces
  journaltitle: Duke Mathematical Journal
  volume: 141
  number: 2
  pages: 241–291
  doi: 10.1215/S0012-7094-08-14122-5
  arxiv: math/0307164
BayerMacri2014:
  type: article
  author: ['Bayer, Arend', 'Macrì, Emanuele']
  year: 2014
  title: Projectivity and birational geometry of Bridgeland moduli spaces
  journaltitle: Journal of the American Mathematical Society
  volume: 27
  number: 3
  pages: 707–752
  doi: 10.1090/S0894-0347-2014-00790-6
  arxiv: '1203.4613'
BayerMacriToda2014:
  type: article
  author: ['Bayer, Arend', 'Macrì, Emanuele', 'Toda, Yukinobu']
  year: 2014
  title: 'Bridgeland stability conditions on threefolds I: Bogomolov–Gieseker type inequalities'
  journaltitle: Journal of Algebraic Geometry
  volume: 23
  number: 1
  pages: 117–163
  doi: 10.1090/S1056-3911-2013-00617-7
  arxiv: '1103.5010'
BayerMacriStellari2016:
  type: article
  author: ['Bayer, Arend', 'Macrì, Emanuele', 'Stellari, Paolo']
  year: 2016
  title: 'The space of stability conditions on abelian threefolds, and on some Calabi–Yau threefolds'
  journaltitle: Inventiones Mathematicae
  volume: 206
  number: 3
  pages: 869–933
  doi: 10.1007/s00222-016-0665-5
  arxiv: '1410.1585'
Li2026:
  type: preprint
  author: 'Li, Chunyi'
  title: A remark on stability conditions on smooth projective varieties
  arxiv: '2601.22994'
```

物理和越壁现象：

```bibliography
KontsevichSoibelman2008:
  type: preprint
  author: ['Kontsevich, Maxim', 'Soibelman, Yan']
  title: 'Stability structures, motivic Donaldson–Thomas invariants and cluster transformations'
  arxiv: '0811.2435'
```

```terms
Bridgeland 稳定条件:
  en: Bridgeland stability condition
切片:
  en: slicing
中心荷:
  en: central charge
支集性质:
  en: support property
稳定条件流形:
  en: stability manifold
```
