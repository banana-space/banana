---
title: 半单 Lie 代数
categories: [Lie 理论]
navboxes: [Lie 理论]
---

<problems>
- “性质”一节需要扩充。
</problems>

**半单 Lie 代数**是一种特殊的[[Lie 代数]]，
它的结构可以被分类，
其[[Lie 代数表示|表示]]被研究得很透彻。
在[[Lie 群–Lie 代数对应]]下，
复半单 Lie 代数的表示对应于[[单连通]][[紧 Lie 群]]的表示。

除非特别说明，
我们总假定 $\mathbb{k}$ 是一个特征为 $0$ 的[[域]]，
$\mathfrak{g}$ 是 $\mathbb{k}$ 上的有限维 Lie 代数。
特征为 $p$ 的域的情况会对理论的建立产生一些阻碍。

## 定义

::: definition [半单 Lie 代数]
有限维 [[Lie 代数]] $\mathfrak{g}$ 称为**半单**的，
如果 $\mathfrak{g}$ 是[[单 Lie 代数]]的[[直和]]。
:::

半单 Lie 代数也有以下几种等价定义：

- $\mathfrak{g}$ 的 [[Killing 型]]是[[双线性型|非退化]]的
  （@Cartan'sCriterion）。

- $\mathfrak{g}$ 没有非零的 [[Abel Lie 代数|Abel]] [[理想 (Lie 代数)|理想]]。

- $\mathfrak{g}$ 没有非零的[[可解 Lie 代数|可解]][[理想 (Lie 代数)|理想]]。

- $\mathfrak{g}$ 的[[根 (Lie 代数)|根]]
  （即最大可解理想）
  $\operatorname{rad}\mathfrak{g}=0$
  （@LeviDecomposition）。

## 性质

::: theorem [Cartan 判别法] {@Cartan'sCriterion}
$\mathfrak{g}$ 是半单的等价于 $\mathfrak{g}$ 的[[Killing 型]]
$B$ 是[[双线性型|非退化]]的。
:::

::: theorem [Levi 分解] {@LeviDecomposition}
存在 $\mathfrak{g}$ 的半单子 Lie 代数 $\mathfrak{a}$ 使得
\[
\mathfrak{g}=\operatorname{rad}(\mathfrak{g})\rtimes\mathfrak{a}.
\]
其中“$\rtimes$”代表 Lie 代数的[[半直积 (Lie 代数)|半直积]]。
:::

## 结构

从现在起，
我们假设 $\mathfrak{g}$ 是 $\mathbb{C}$ 上的半单 Lie 代数。
通过对 [[Cartan 子代数]]在 $\mathfrak{g}$ 上作用的研究，
可以得到 $\mathfrak{g}$ 的结构。
具体来说，
即是

::: theorem [根空间分解]
设 $\mathfrak{h}$ 是 $\mathfrak{g}$ 的 Cartan 子代数（它一定存在），
那么有 $\mathfrak{h}$-表示的直和分解
\[
\mathfrak{g}=
\mathfrak{h}\oplus
\bigoplus_{\alpha\in\mathfrak{h}^*}\mathfrak{g}_{\alpha}.
\]
那些使得 $\mathfrak{g}_{\alpha}\ne0$ 的
$\alpha\in\mathfrak{h}^*$
叫做 $\mathfrak{g}$ 关于 $\mathfrak{h}$ 的**根**，
所有根收集起来记作 $\Delta$，
而相应的空间 $\mathfrak{g}_{\alpha}$ 叫做**根空间**。
这些根与根空间满足：

1. 若 $\alpha+\beta\ne0$，
   则 $[\mathfrak{g}_{\alpha},\mathfrak{g}_{\beta}]
        = \mathfrak{g}_{\alpha+\beta}$。

2. 如果 $\alpha\in\Delta$，
   则 $-\alpha\in\Delta$，
   且对 $|n|\ge 2$ 有 $n\alpha\notin\Delta$。

3. $\mathfrak{g}_{\alpha}\oplus
   [\mathfrak{g}_{\alpha},\mathfrak{g}_{-\alpha}]\oplus
   \mathfrak{g}_{-\alpha}$ 同构于 $\mathfrak{sl}_2$。

:::

现在，
在 $V=\operatorname{span}_{\mathbb{R}}(\Delta)$ 上赋予一个[[双线性型]]：
\[
\langle\phi,\psi\rangle=B(h_{\phi},h_{\psi}),
\]
其中 $B$ 是 $\mathfrak{g}$ 上的 [[Killing 型]]，
$h_{\phi},h_{\psi}$ 是 $\phi,\psi\in\mathfrak{h}^*$ 在 Cartan 判别法
（@Cartan'sCriterion）下保证的对应，
即 $h_{\phi}$ 是唯一满足下列性质的 $\mathfrak{h}$ 中的元素：
\[
B(h,h_{\phi})=\phi(h),\,\forall\,h\in\mathfrak{h}.
\]
可以验证此双线性型在 $V$ 上是正定的，
这使得 $V$ 成为一个内积空间。
有了内积结构，
便可以对所有 $\alpha\in\Delta$ 定义反射 $s_{\alpha}:V\rightarrow V$：
\[
s_{\alpha}(v)=
v-
\frac{2\langle v,\alpha\rangle}{\langle \alpha,\alpha\rangle}\alpha.
\]
如果把 $\Delta$ 的性质抽象出来，
即

- $V=\operatorname{span}_{\mathbb{R}}(\Delta)$。

- 对任意 $\alpha\in\Delta$，
  $s_{\alpha}(\Delta)=\Delta$。

- 对任意 $\alpha,\beta\in\Delta$，
  $\frac{2\langle \alpha,\beta\rangle}
      {\langle \alpha,\alpha\rangle}\in\mathbb{Z}$。

就可以得到 $\Delta$ 是 $V$ 中的一个（抽象）[[根系]]。
这对复半单 Lie 代数是至关重要的，
因为所有的根系是可以被枚举的，
并且 [[Serre 定理]]告诉我们，
根系可以与复半单 Lie 代数对应。

## 分类

<see>[[根系]]</see>

复半单 Lie 代数可以分解成[[单 Lie 代数]]的直和，
而单 Lie 代数对应于不可约的根系，
不可约的根系对应于连通的[[Dynkin 图]]。
除了五个特殊的例子 [[E6|$E_6$]]、[[E7|$E_7$]]、[[E8|$E_8$]]、[[F4|$F_4$]]、[[$\mathrm{G}_2$]] 外，
剩下的四类 Dynkin 图对应于[[经典 Lie 代数]]：

- $A_n$ 对应于 $\mathfrak{sl}(n+1)$。

- $B_n$ 对应于 $\mathfrak{so}(2n+1)$。

- $C_n$ 对应于 $\mathfrak{sp}(2n)$。

- $D_n$ 对应于 $\mathfrak{so}(2n)$。

实半单 Lie 代数可以类似地通过 [[Satake 图]]来实现。

## 表示论

<see>[[半单 Lie 代数表示论]]</see>

设 $\mathfrak{g}$ 是复半单 Lie 代数，
那么它的有限维[[不可约表示]]可以被[[最高权]]分类，
具体来说：

::: theorem
有一个双射

{$\mathfrak{g}$ 的有限维不可约表示} $\longleftrightarrow$
{$\mathfrak{h}^*$ 中的[[支配整权]]}，

由
\[
(\pi,V)\longmapsto V\text{ 的最高权}
\]
给出。
:::

::: theorem [Weyl 特征公式] {@WeylCharacterFormula}
设 $V$ 是最高权为 $\lambda$ 的不可约表示，
那么
\[
\operatorname{char}(V)=
\frac{\sum_{w\in W}\epsilon(w)e^{w(\lambda+\delta)}}
{\prod_{\alpha\in \Delta^+}(e^{\frac{\alpha}2}-e^{-\frac{\alpha}2})}.
\]
其中

- $W$ 是[[Weyl 群]]。

- $\epsilon(w)=(-1)^{l(w)}$，
  $l(w)$ 是 $w$ 的[[长度 (Weyl 群)|长度]]。

- $\operatorname{char}(V)=\sum_{\mu\in\mathfrak{h}^*}
  \dim V_{\mu}e^{\mu}\in\mathbb{Z}[\mathfrak{h}^*]$。

- $\delta=\frac1{2}\sum_{\alpha\in\Delta^+}\alpha$。

:::

从而 $\mathfrak{g}$ 上的所有表示也可以被分类，
因为：

::: theorem [Weyl] {@Weyl'sTheorem}
$\mathfrak{g}$ 上有限维表示构成的范畴 $\mathsf{Rep}(\mathfrak{g})$ 是[[半单范畴]]。
:::

对于某个特定的表示 $(\rho,W)$，
我们想找出它的不可约表示的分解形式，
一个算法是先找出它的特征空间分解，
然后利用 Weyl 特征公式（@WeylCharacterFormula）
找出最高权对应的不可约表示 $(\pi,V)$ 以及相应特征空间的维数，
由完全可约性（@Weyl'sTheorem）知
\[
W=V\oplus U,
\]
其中 $\dim U_{\mu}=\dim W_{\mu}-\dim V_{\mu}$。
对 $U$ 进行同样的操作，
这个分解将在有限步内停止。

```terms
半单 Lie 代数:
  en: semisimple Lie algebra
  de: halbeinfache Lie-Algebra
  fr: algèbre de Lie semi-simple
```
