---
title: Iwahori–Hecke 代数
aliases: [Hecke 代数（Coxeter 群）]
categories: [代数群理论]
navboxes: [代数群理论]
---

<problems>
- “例子”“性质”各节需要扩充。
</problems>

在**代数群理论**中，
**Iwahori–Hecke 代数**（简称 **Hecke 代数**）
是 [[Coxeter 群]]的[[群代数]]的形变。
具体地说，对 Coxeter 群 $(W, S)$，
其 Iwahori–Hecke 代数 $\mathcal{H}(W, S)$
是环 $\mathbb{Z}[q^{\pm1}]$ 上[[结合代数]]
\[
\bigoplus_{w \in W} \mathbb{Z}[q^{\pm1}] T_w,
\]
这里 $T_w$ 表示一组基，不过 $T_w$ 之积并不是简单的将其指标相乘，
而是在此基础上多出一些其它项，例如对单反射 $s \in S$，有
\[
T_s^2 = (q-1) T_s + qT_1.
\]
如取 $q = 1$，则 Hecke 代数变为群代数 $\mathbb{Z}[W]$。

这里的 $\{T_w, w \in W\}$ 称为**标准基**。
在 Hecke 代数上可以定义对合，也有一组在对合下均不变的基，称为
**Kazhdan–Lusztig 基**。

Hecke 代数的影子在[[代数群]]相关的各种构造中出现，
如[[旗簇]]上的[[等变层|等变]][[错致层]]、
[[范畴 $\mathcal{O}$]]、[[Soergel 双模]]等。
Soergel 双模的 [[Grothendieck 群]]是 Hecke 代数，
范畴 $\mathcal{O}$ 中 [[Verma 模]]的分解以及
[[模表示论]]中[[余标准模]]的分解也与 Hecke 代数有关
（这即是 [[Kazhdan–Lusztig 猜想]]）。
对合则会对应于相应范畴中的对偶（如 [[Verdier 对偶]]、[[对偶表示]]）等。

## 定义

取定 [[Coxeter 系]] $(W,S)$。

### 基本定义

::: definition [Hecke 代数] {@def}
$(W, S)$ 的 **Hecke 代数** $\mathcal{H}(W, S)$
是 $\mathbb{Z}[q^{\pm1}]$ 上[[结合代数]]
\[
\mathbb{Z}[q^{\pm 1}]\langle T_s\rangle_{s\in S}/ \sim
\]
其中商去的关系为

- 对 $s \in S$，$T_s^2 = (q-1)T_s + q$。

- 对 $s,t \in S$，如 $m_{st}<\infty$，则
  $T_s T_t T_s \cdots = T_t T_s T_t \cdots$，
  其中等号两边都是共 $m_{st}$ 个 $T_s$ 与 $T_t$ 的交替乘积，
  左边从 $T_s$ 开始，右边从 $T_t$ 开始。如 $m_{st}=2$ 时即
  $T_sT_t=T_tT_s$，$m_{st}=3$ 时即 $T_sT_tT_s=T_tT_sT_t$。

无歧义时，$\mathcal{H}(W,S)$ 简记作 $\mathcal{H}_W$
或 $\mathcal{H}$，但它实际上依赖于 $S$ 的选取，
不只依赖于 Coxeter 群 $W$ 本身。
:::

::: remark {@degen}
注意 $W$ 由 $S$ 沿以下关系生成：

- **反射** 对 $s\in S$，$s^2=1$。

- **辫关系** 对 $s,t\in S$，如 $m_{st}<\infty$，
  则 $sts\cdots=tst\cdots$，两边各 $m_{st}$ 个。

所以 $q=1$ 时，@def 退化为[[群环]] $\mathbb{Z}[W]$。
:::

对 $w\in W$，回忆其**既约表示**指把 $w$ 写成 $S$
中元素乘积的最短写法，其**长度** $\ell(w)$ 指其既约表示的长度。

::: definition [标准基]
记号承 @def。对 $w \in W$
及其既约表示 $w = s_1 \cdots s_n$，
定义 $T_w = T_{s_1}\cdots T_{s_n}$。
由于不同的既约表示之间可由 @degen 中的辫关系沟通，
$T_w$ 与既约表示的选取无关。

回忆 Coxeter 群的如下性质：

- 对 $w\in W$，$s\in S$，如 $\ell(ws)\le\ell(w)$，
  则 $w$ 存在既约表示形如 $w=s_1\cdots s_{n-1}s$，
  此时 $\ell(ws)=\ell(w)-1$。

由此可得
$$
T_wT_s=\begin{cases}
  T_{ws},&\ell(ws)=\ell(w)+1;\\
  (q-1)T_w+qT_{ws},&\ell(ws)=\ell(w)-1;
\end{cases}
$$
故不难发现 $(T_w)_{w\in W}$ 构成 $\mathcal{H}(W, S)$ 在
$\mathbb{Z}[q^{\pm 1}]$ 上的一组基，称为**标准基**。
:::

::: remark
Iwahori–Hecke 代数的记号比较混乱。很多文献只考虑
$\mathbb{Z}[q^{\pm1/2}]$ 上以同样关系定义的 Hecke 代数，
即这里的 $\mathcal{H}\otimes_{\mathbb{Z}[q^{\pm1}]}\mathbb{Z}[q^{\pm1/2}]$，
并把它记作 $\mathcal{H}$，此时也记 $v=q^{1/2}$。
这个基变换在定义以下 Kazhdan–Lusztig 基时比较方便。

如令 $\delta_s=v^{-1}T_s$，更一般地
$\delta_w=v^{-\ell(w)}T_w$，则
$\delta_s^2=(v-v^{-1})\delta_s+1$。显然
$(\delta_w)_{w\in W}$ 也构成
Hecke 代数在 $\mathbb{Z}[v^{\pm1}]$ 上的一组基，
这被一些文献称为**标准基**，
也有一些文献用 $T_w$ 表示这里的 $\delta_w$。
:::

::: remark
当 $W$ 取为[[仿射 Weyl 群]]时，这里的 Hecke
代数也称为**仿射 Hecke 代数**。
:::

### 对合

::: definition [对合]
$\mathcal{H}(W, S)$ 的**对合**
$\bar{\ }\colon\mathcal{H}\to\mathcal{H}$
定义为以下自同构：

- $\bar{q}=q^{-1}$；

- $\overline{T_s}=q^{-1}T_s+q^{-1}-1$；

考虑 $\mathbb{Z}[v^{\pm1}]=\mathbb{Z}[q^{\pm1/2}]$ 上的 Hecke 代数时，
定义 $\bar{v}=v^{-1}$。

注意 $\overline{T_s}=T_s^{-1}$；由此不难发现对任意
$w\in W$，$\overline{T_w}=T_{w^{-1}}^{-1}$。
:::

::: definition [Kazhdan–Lusztig 基] {@klb}
**Kazhdan–Lusztig 基** $(H_w)_{w\in W}$
是 $\mathcal{H}$ 作为 $\mathbb{Z}[q^{\pm1}]$-模的另一组基，
由以下性质刻画：

- $\overline{H_w}=q^{-\ell(w)}H_w$。

- 如把 $(H_w)_{w\in W}$ 用标准基展开
  $$
  H_w=\sum_{x\in W}P_{x,w}T_x,
  $$
  则系数 $P_{x,w}\in\mathbb{Z}[q^{\pm1}]$ 满足

  - 如 $x\not\le w$，则 $P_{x,w}=0$。

  - $P_{w,w}=1$。

  - 如 $x<w$，则 $P_{x,w}\in\mathbb{Z}[q]$
    且次数不大于 $\frac{1}{2}(\ell(w)-\ell(x)-1)$。

  这里不等号指的是 Bruhat 偏序。

常称多项式 $(P_{x,w})_{x,w\in W}$ 为
**Kazhdan–Lusztig 多项式**。
:::

::: remark
基变换到 $\mathbb{Z}[q^{\pm1/2}]=\mathbb{Z}[v^{\pm1}]$ 之后令
$b_w=v^{-\ell(w)}H_w$，则 $\overline{b_w}=b_w$。
很多文献把这里的 $b_w$ 记作 $H_w$ 或 $\underline{H}_w$，
称之为 **Kazhdan–Lusztig 基**。
:::

::: remark
不难解出对 $s\in S$，
$$
H_s=T_s+1;
$$
类似地，整个 Kazhdan–Lusztig 基的存在唯一性也可手动证明。
:::

以下定理十分深刻，需用 [[Soergel 双模]]将
Iwahori–Hecke 代数范畴化才能证明。

::: theorem [Kazhdan–Lusztig 正性]
Kazhdan–Lusztig 多项式的系数非负。
:::

除此之外，Kazhdan–Lusztig 多项式便没有其它限制。

::: remark
对任意 $P\in 1+q\mathbb{N}[q]$，如令 $d=\deg(P)$，$n=1+d+P(1)$，则存在
$S_n$ 中元素 $x<w$，满足 $\ell(w)-\ell(x)=2d+P(1)-1$，且
$P_{x,w}=P$。这里 $W=S_n$ 带标准的 Coxeter 系结构，即
$S=\{(12),\ldots,(n-1\ n)\}$。
:::

## 例子

## 性质

## 参考文献

```bibliography
intro-soergel:
  type: book
  label: EMTW
  author: ['Elias, Ben', 'Makisumi, Shotaro', 'Thiel, Ulrich', 'Williamson, Geordie']
  title: Introduction to Soergel bimodules
  series: RSME Springer Series
  volume: 5
  publisher: 'Springer, Cham'
  year: 2020
  pages: xxv+588
  doi: 10.1007/978-3-030-48826-0
MR1698201:
  type: article
  author: 'Polo, Patrick'
  title: Construction of arbitrary Kazhdan-Lusztig polynomials in symmetric groups
  journaltitle: Represent. Theory
  volume: 3
  year: 1999
  pages: 90–104
  doi: 10.1090/S1088-4165-99-00074-6
```

```terms
Iwahori–Hecke 代数:
  en: Iwahori–Hecke algebra
  fr: algèbre d'Iwahori–Hecke
```
