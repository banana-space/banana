---
title: 正形式
categories: [复几何]
---

<problems>
- “对复流形”一节需要扩充。
- “性质”一节第一个命题的证明不完整：第 1 条只说明了需证强正锥是闭集，其余各条没有证明；第二个命题缺少证明。
</problems>

**正形式**是一类[[复微分形式]]。
对 $n$ 维[[复流形]] $X$ 而言，
$X$ 作为实流形具有典范的[[定向]]。
对 $X$ 上的实 [[微分形式|$2n$-形式]]，
可以谈论其在每点是否与该定向相符，
相符的形式就称为正形式。
这样的形式通常视为 $X$ 上的 [[复微分形式|$(n,n)$-形式]]。
类似的想法可以用来定义正 $(p, p)$-形式的概念。

## 定义

### 对向量空间

设 $V$ 是 $n$ 维[[复数|复]][[向量空间]]，
它的一组基记作$z^1,\cdots,z^n$，$V^\vee$的
对偶基记作 $\mathrm{d} z^1,\cdots, \mathrm{d} z^n$。

::: definition [正 $(n, n)$-形式]
[[复微分形式]]
\[
\tau=\mathrm{i}^n \mathrm{d} z^1 \wedge \mathrm{d} \bar z^1 \wedge\cdots \wedge \mathrm{d} z^n
\wedge \mathrm{d} \bar z^n
\]
为$\Lambda^{n,n} V^\vee$中的一非零元素。
可以验证$\mathbb{R}_{>0}\tau$不依赖于$V$中基的选取。
称 $\mathbb{R}_{\geq 0}\tau$ 中元素为 **正$(n,n)$-形式**。
:::

::: definition [强正形式]
称$(p,p)$-形式$\beta\in \Lambda^{p,p}$为**强正**的，如果
它可写为如下的形式：
\[
\beta=\sum_{s=1}^{N} r_s \mathrm{i}^{p} \alpha_{s,1}\wedge \bar \alpha_{s,1}
\wedge \cdots \wedge \alpha_{s,p}\wedge \bar \alpha_{s,p}
\]
其中 $\alpha_{s,1},\cdots,\alpha_{s,p}$为$(1,0)$-形式，$r_s\geq 0$。
:::

::: definition [正形式]
称$(p,p)$-形式$\gamma\in \Lambda^{p,p}$为**正**的，
如果对任一强正的$(n-p,n-p)$-形式
$\beta$ 都有
\[
\beta \wedge \gamma \in \mathbb{R}_{\geq 0} \tau
\]
:::

::: example
- 正的和强正的$(0,0)$-形式是非负实数$\mathbb{R}_{\geq 0}$。
  正的和强正的$(n,n)$-形式是典则定向$\mathbb{R}_{\geq 0}\tau$

- 设$(a_{i\bar{j}})$为非负[[Hermite 矩阵]]，则$\alpha=\mathrm{i}\sum_{i,j}a_{ij}
  \mathrm{d} z^i \wedge \mathrm{d} \bar z^j$为强正$(1,1)$-形式。

:::

### 对复流形

## 性质

::: proposition
1. 正$(p,p)$-形式和强正$(p,p)$-形式均为
   $\Lambda^{p,p} V^\vee$中的闭凸[[锥]]，且
   这两个凸锥通过如下配对互为对偶：
   $$
   \begin{array}{rcl}
   \Lambda^{p,p} V^\vee \times \Lambda^{n-p,n-p} V^\vee  &\to& \mathbb{C} \tau \\
     (\beta,\gamma) & \mapsto & \beta\wedge \gamma
   \end{array}
   $$
   具体来说，$\beta$是强正$(p,p)$-形式当且仅当对所有正$(n-p,n-p)$-形式$\gamma$
   ，我们有$\beta\wedge\gamma\geq 0$。

2. 强正形式都是正形式。

3. 正形式都是实形式。

4. 设$u_1,\cdots,u_s$均为正微分形式，若它们均为强正的，则$u_1\wedge \cdots \wedge u_s$
   是强正的，若它们除了一个之外均为强正的，则$u_1\wedge \cdots \wedge u_s$是正的。

:::

::: proof
(1) 记正锥为$P$，强正锥为$S$。由定义可知 $P=S^\vee$，$P=\overline{P}$。故为证$S=P^\vee$，
只需证$S=\overline{S}$，即要证$S$是一闭集。
:::

::: proposition
1. $(p,p)$-形式$\gamma$是正的当且仅当对$V$的任一复$p$维子空间$W$，$\gamma
   |_{W}$是$W$上的典则定向形式。

2. 设$f:V_1\to V_2$是两个维数分别为$n_1,n_2$的复线性空间之间的复线性映射，则对于
   $V_2$上的强正（或，正）$(p,p)$-形式$\beta$，我们有$f^*\beta$是$V_1$上的强正
   （或，正）$(p,p)$-形式。

:::

::: proposition
正的$(1,1)$-形式（或，$(n-1,n-1)$-形式）都是强正的，且它们与非负Hermite 矩阵有一一
对应。
:::

::: remark
具有高余维数的正形式不一定是强正的：考虑复$4$维的线性空间$V$以及$(2,0)$形式$\beta=
  \mathrm{d} z^1\wedge \mathrm{d} z^2+\mathrm{d} z^3\wedge \mathrm{d} z^4$。则
\[
\mathrm{i}^{2^2}\beta \wedge \bar \beta
\]
是正的形式。但它不是强正的：否则我们有
\[
\mathrm{i}^{2^2}\beta \wedge \bar \beta=\mathrm{i}^{2^2}
\sum_{i=1}^{N} \gamma_i\wedge \bar \gamma_i
\]
其中$\gamma_i$可写为两个$(1,0)$形式的外积，取$N$为最小的这样的数。我们将上述等式
两边视作是$\Lambda^{2,0} V$上的 Hermite 矩阵，则左边矩阵的秩是1，而由于$\gamma_i$
线性无关，右边矩阵的秩是$N$。因此$N=1$，$\beta=\lambda \gamma$，这导出矛盾。
:::

::: proposition
下述映射
\[
\begin{array}{rcl}
\Lambda^{1,1} V^\vee &\to& \Lambda^{n-1,n-1} V^\vee \\
  \beta & \mapsto & \beta^{n-1}
\end{array}
\]
诱导出正$(1,1)$-形式与正$(n-1,n-1)$形式之间的双射。
:::

```terms
正性:
  en: positivity
  fr: positivité
  grc: θετικότης
  la: positivitas
正形式:
  en: positive form
  fr: forme positive
  grc: θετικὴ μορφή
  la: forma positiva
强正形式:
  en: strongly positive forms
  fr: forme fortement positive
  grc: ἰσχυρῶς θετικὴ μορφή
  la: forma fortiter positiva
```
