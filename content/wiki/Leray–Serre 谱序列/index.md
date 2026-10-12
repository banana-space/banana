---
title: Leray–Serre 谱序列
aliases: [Serre 谱序列, Leray-Serre 谱序列]
categories: [纤维丛论]
notices:
  - name: 问题
    items:
      - “用 Grothendieck 谱序列”一节需要扩充。
---

**[[Leray]]–[[Serre]] 谱序列**是代数拓扑中的强大工具。
简单地说，给定 [[Serre 纤维化]] $F \to E \to B$，
Leray–Serre 谱序列将全空间 $E$ 的（上）同调与底空间 $B$ 和纤维 $F$
的（上）同调联系在了一起，以便计算一些同调群。

上同调 Leray–Serre 谱序列可视为[[层论]]中 [[Grothendieck 谱序列]]的推论。

## 定义

::: definition [Leray–Serre 同调谱序列]
给定交换群 $G$ 以及 [[Serre 纤维化]] $F \to E \to B$，
其中 $F$ 道路连通。存在自然的第一象限同调[[谱序列]]
$\{E^r_{*,*} , d^r\}$
收敛于 $H_*(E;G)$。此谱序列的第二页为
\[
E^2_{p,q}=H_p(B;\mathcal{H_q}(F;G)),
\]
其中 $H_p(B;\mathcal{H_q}(F;G))$ 为纤维化
$F \to E \to B$ 给出的局部系数同调。
特别地，当 $B$ 单连通时，它就是系数为 $H_q(F;G)$ 的[[奇异同调]]。
:::

同样地，我们有：

::: definition [Leray–Serre 上同调谱序列]
给定交换群 $R$ 以及 Serre 纤维化 $F \to E \to B$，
其中 $F$ 道路连通。
存在自然的第一象限上同调谱序列$\{E_r^{*,*} , d_r\}$收敛于$H^*(E;R)$。
此谱序列的第二页为
\[
E_2^{p,q}=H^p(B;\mathcal{H^q}(F;R)),
\]
其中$H^p(B;\mathcal{H^q}(F;R))$为纤维化$F \hookrightarrow E \rightarrow B$给出的
局部系数上同调。特别地，当 $B$ 单连通时，它就是系数为
$H^q(F;R)$ 的[[奇异上同调]]。
当 $R$ 是环时，$E_r^{*,*}$上有自然的乘法结构
\[
E_r^{p,q} \times E_r^{s,t} \rightarrow E_r^{p+s,q+t},
\]
在$E_2^{*,*}$上与杯积相差$(-1)^{qs}$，
且以上收敛保持乘法结构。当 $R$ 交换时此乘法结构交换。
:::

## 证明

### 用滤复形谱序列

取 $B$ 的 [[CW 逼近]] $B'\to B$，并将纤维化拉回到 $B'$，
得到 $F\to E'\to B'$。由[[同伦群长正合列]]，$E'\to E$
和 $B'\to B$ 一样是[[弱同伦等价]]，诱导同调、上同调的同构。
于是以 $B'$ 代 $B$，可设 $B$ 为 [[CW 复形]]。以 $B_p$
记 $B$ 的 $p$ 维骨架，$E_p$ 记 $B_p$ 的原像，约定 $p<0$
时 $B_p=E_p=\emptyset$。则奇异链复形 $C_\bullet(E;G)$
带有上升[[滤链]] $\{C_\bullet(E_p;G)\}_{p\in\mathbb{Z}}$。
作出此滤复形的谱序列，则其收敛到 $C_\bullet(E;G)$
的同调 $H_\bullet(E;G)$，且具有
$$
E^0_{p,q}=C_{p+q}(E_{p+1},E_p;G),
$$
$$
E^1_{p,q}=H_{p+q}(E_{p+1},E_p;G)=C_p(B;\mathcal{H}_q(F;G)),
$$
$$
E^2_{p,q}=H_p(B;\mathcal{H}_q(F;G)),
$$
其中 $E^1$ 那里的 $C_p$ 表示[[胞腔同调|胞腔链群]]。
显然从第一页开始，只在 $p,q\ge0$ 时才有非零项。

### 用 Grothendieck 谱序列

## 应用

一个经典的应用是计算 $\pi_4(S^3)$。

::: theorem
$\pi_4(S^3)=\mathbb{Z}/2$。从而[[球谱]]的一阶[[稳定同伦群]]
$\pi_1(\mathbb{S})$ 为 $\mathbb{Z}/2$。
:::

::: proof
取 $1\in H^3(S^3)$ 对应的映射 $S^3\to K(\mathbb{Z},3)$，
记其纤维为 $X$。则由[[同伦群长正合列]]，$\pi_4(X)=\pi_4(S^3)$、
$\pi_{<4}(X)=0$。于是由 [[Hurewicz 定理]]，$\pi_4(X)=H_4(X)$。
以下用 Serre 谱序列算 $X$ 的上同调，再用[[万有系数定理]]得到同调。

需先算 $K(\mathbb{Z},3)$ 的上同调。熟知 $K(\mathbb{Z},2)=\mathbb{CP}^\infty$，
上同调环为 $\mathbb{Z}[c]$，$|c|=2$。对纤维化 $K(\mathbb{Z},2)\to\ast\to K(\mathbb{Z},3)$
用 Serre 谱序列有
$$
E_2=\begin{matrix}
  \vdots&\vdots&\vdots&\vdots&\vdots&\vdots&\\
  \mathbb{Z} c^2&0&0&H^3c^2&H^4c^2&H^5c^2&\cdots\\
  0&0&0&0&0&0&\cdots\\
  \mathbb{Z} c&0&0&H^3c&H^4c&H^5c&\cdots\\
  0&0&0&0&0&0&\cdots\\
  \mathbb{Z}&0&0&H^3&H^4&H^5&\cdots
\end{matrix}\Rightarrow\mathbb{Z}
$$
图中 $H^p$ 表示 $H^p(K(\mathbb{Z},3))$，由 Hurewicz 定理它从 $3$ 开始有。
由于它收敛到 $H^\bullet(\ast)=\mathbb{Z}$，故只有左下角 $(0,0)$ 处的 $\mathbb{Z}$ 能留下来，
其他位置的群都会被边缘映射消掉。由于 $q$ 为奇数时只有 $0$，
$E_2$ 页的所有边缘映射都是 $0$，故 $E_3$ 页和 $E_2$ 页相同。
而 $(0,2)$ 处的 $\mathbb{Z} c$ 和 $(3,0)$ 处的 $H^3(K(\mathbb{Z},3))$
至迟在 $E_3$ 页就需要被消除，因为之后再也不能有边缘映射。
所以 $d_3^{0,2}\colon\mathbb{Z} c\to H^3$ 是同构。设 $c\mapsto b$，
则 $H^3=\mathbb{Z} b$，知 $(3,2q)$ 处的群为 $\mathbb{Z} bc^q$。
现由 Leibniz 法则，$d_3(c^2)=2cd_3c=2bc$，即映射
$d_3^{0,4}\colon\mathbb{Z} c^2\to\mathbb{Z} bc$ 为乘以 $2$；
注意 $(3,2)$ 和 $(6,0)$ 两个位置也至迟在 $E_3$ 页就需要被消除，
故 $0\to E_3^{0,4}\to E_3^{3,2}\to E_3^{6,0}\to 0$ 是短正合列，
即 $E_3^{6,0}=H^6=(\mathbb{Z}/2)b^2$。由于 $E_4$ 页上
$(0,4)$ 位置已经是 $0$，$(4,0)$、$(5,0)$ 这两个位置的群不会再有非零边缘映射，
所以它们一开始就是 $0$，即 $H^4=H^5=0$。
总结一下，我们得到 $H^3=\mathbb{Z} b$、$H^4=H^5=0$、$H^6=(\mathbb{Z}/2)b^2$。

再对纤维化 $X\to S^3\to K(\mathbb{Z},3)$ 用 Serre 谱序列有
$$
E_2=\begin{matrix}
  \vdots&\vdots&\vdots&\vdots&\vdots&\vdots&\vdots&\\
  H^5&0&0&H^5b&0&?&?&\cdots\\
  H^4&0&0&H^4b&0&?&?&\cdots\\
  0&0&0&0&0&0&0&\cdots\\
  0&0&0&0&0&0&0&\cdots\\
  0&0&0&0&0&0&0&\cdots\\
  \mathbb{Z}&0&0&\mathbb{Z} b&0&0&(\mathbb{Z}/2)b^2&\cdots
\end{matrix}\Rightarrow H^\bullet(S^3)
$$
图中 $H^q$ 表示 $H^q(X)$，$?$ 表示不关心。由于
$H^\bullet(S^3)=\mathbb{Z}\oplus\mathbb{Z} b$，$b\in H^3(S^3)$，
故只有 $(0,0)$ 处的 $\mathbb{Z}$ 和 $(3,0)$ 处的 $\mathbb{Z} b$ 能留下来，
其他位置都需被边缘映射消掉。由此立得 $H^4=0$、$H^5=\mathbb{Z}/2$。
由万有系数定理，$H_4(X)=\mathbb{Z}/2$，即 $\pi_4(S^3)=\mathbb{Z}/2$。
:::

```terms
Leray–Serre 谱序列:
  en: Leray–Serre spectral sequence
  fr: suite spectrale de Leray–Serre
```
