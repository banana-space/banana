---
title: Auslander–Buchsbaum 公式
aliases: [Auslander-Buchsbaum 公式]
categories: [交换代数]
notices:
  - name: 问题
    items:
      - “推广”一节中链复形投射维数的定义里，$\sup\{i\mid P^{-i}=0\}$ 似乎应为 $\sup\{i\mid P^{-i}\ne 0\}$。
navboxes: [交换代数]
---

**Auslander–Buchsbaum 公式**是个[[交换代数]]等式，
联系 Noether 局部环上模的[[深度]]和[[投射维数]]两个同调不变量。

## 陈述与证明

::: theorem {@AB}
$(R,\mathfrak{m},k)$ 是 [[Noether 环|Noether]] [[局部环]]，$M$ 是其[[有限生成模]]。
如 $M$ [[投射维数]]有限，就有
$$
\operatorname{pd}(M)=\operatorname{depth}(R)-\operatorname{depth}(M).
$$
:::

::: proof
对 $\operatorname{pd}(M)$ 归纳。$\operatorname{pd}(M)=0$ 时显然。
$\operatorname{pd}(M)>0$ 时取一步极小消解
$$
0\to K\to F\to M\to0
$$
使得 $K\subseteq\mathfrak{m}F$，$F$ 是自由 $R$-模。
则 $\operatorname{pd}(K)=\operatorname{pd}(M)-1$，要证
$\operatorname{depth}(M)=\operatorname{depth}(K)-1$。
写它的 $\operatorname{Ext}(k,-)$ 长正合列，有
$$
\cdots\to\operatorname{Ext}^{i-1}(k,F)\to\operatorname{Ext}^{i-1}(k,M)\to
\operatorname{Ext}^i(k,K)\to\operatorname{Ext}^i(k,F)\to\cdots
$$
于是当 $i<\operatorname{depth}(K)\le\operatorname{depth}(R)$
时 $\operatorname{Ext}^{i-1}(k,M)=0$。要证
$i=\operatorname{depth}(K)$ 时
$\operatorname{Ext}^{i-1}(k,M)\ne0$。只需证此时映射
$\operatorname{Ext}^i(k,K)\to\operatorname{Ext}^i(k,F)$
为零，因这样便有 $\operatorname{Ext}^{i-1}(k,M)\cong\operatorname{Ext}^i(k,K)\ne0$。
下证之。

当 $\operatorname{pd}(K)>0$ 时，由归纳假设，
$\operatorname{depth}(K)<\operatorname{depth}(R)$，
于是 $\operatorname{Ext}^i(k,F)=0$，那个映射自然是 $0$。
当 $\operatorname{pd}(K)=0$ 时，$K$ 是自由模。由于
$K\subseteq\mathfrak{m}F$，把映射 $K\to F$ 写成矩阵，
矩阵元都在 $\mathfrak{m}$ 中。这样，把
$\operatorname{Ext}^i(k,K)\to\operatorname{Ext}^i(k,F)$
也写成矩阵，矩阵元是 $\operatorname{Ext}^i(k,R)$
的自映射“乘以映射 $K\to F$ 的矩阵元”，便知这一映射是 $0$，
因为 $\operatorname{Ext}^i(k,R)$ 是 $k$-线性空间，
乘以 $\mathfrak{m}$ 中元素当然是零映射。
:::

::: remark
[[正则局部环]]的[[整体维数]]有限。所以取 $R$ 为正则，
$\operatorname{depth}(M)=\operatorname{depth}(R)=\dim R$，
即得[[奇迹平坦]]的有限生成模情形。所以 Auslander–Buchsbaum
公式是有限生成模奇迹平坦的推广。
:::

## 推广

Auslander–Buchsbaum 公式可推广到[[链复形]]。仍设
$(R,\mathfrak{m},k)$ 是 Noether 局部环。
按[[深度]]条目所述定义链复形的深度，并对
$M^\bullet\in\mathsf{D}^-(R)$ 定义其**投射维数**为
$$
\operatorname{pd}(M)=\inf\{\sup\{i\mid P^{-i}=0\}
\mid P^\bullet\to M^\bullet\ 是投射消解\}.
$$
则 Auslander–Buchsbaum 公式有以下推广：

::: theorem [Foxby–Iyengar]
设 $M$ 为非零[[完美复形]]，$C\in\mathsf{D}(R)$。则
$$
\operatorname{depth}(C\otimes M)=
\operatorname{depth}(C)-\operatorname{pd}(M).
$$
:::

$M$ 的上同调集中在 $0$ 处且 $C=R$ 时，这就是 @AB。

::: proof
把 $M$ 换成极小消解，可设其为[[极小复形]]。平移，可设
$\operatorname{pd}(M)=0$。此时 $M$ 形如
$$
0\to M^0\to M^1\to\cdots
$$
其中 $M^i$ 有限秩自由，各边缘映射张量积到 $k$ 都是零，
$M^0\ne0$。要证明 $\operatorname{depth}(C\otimes M)=
  \operatorname{depth}(C)$。依定义，这相当于证明对任一
$d\in\mathbb{Z}$ 都有 $\operatorname{RHom}(k,C\otimes M)\in
  \mathsf{D}^{\ge d}(R)$ 当且仅当
$\operatorname{RHom}(k,C)\in\mathsf{D}^{\ge d}(R)$。
由 $M$ 是完美复形，容易发现
$$
\operatorname{RHom}(k,C\otimes M)=
\operatorname{RHom}(k,C)\otimes M=
\operatorname{RHom}(k,C)\otimes_k(M\otimes k).
$$
而 $M$ 各边缘映射张量积到 $k$ 都是零，所以 $M\otimes k$
是 $k$ 及其一些右平移的直和，且 $0$ 处有非零个 $k$。由此立得
$\operatorname{RHom}(k,C\otimes M)\in
  \mathsf{D}^{\ge d}(R)$ 当且仅当
$\operatorname{RHom}(k,C)\in\mathsf{D}^{\ge d}(R)$。
:::

```terms
Auslander–Buchsbaum 公式:
  en: Auslander–Buchsbaum formula
  de: Auslander–Buchsbaum-Formel
  fr: formule d'Auslander–Buchsbaum
```
