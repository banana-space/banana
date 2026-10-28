---
title: 母题无穷环路机
categories: [母题同伦论]
---

<problems>
- “解释”一节需要扩充：应解释母题谱如何成为标架移送预层，并陈述方程标架以及 Voevodsky 的关键引理。
- “应用”一节中的例子“代数配边”没有内容。
</problems>

::: convention
在本文中，

- [[范畴]]都指 [[$(\infty,1)$-范畴]]。
- [[概形]]全都[[拟紧概形|拟紧]][[拟分离概形|拟分离]]。
- 对概形 $S$，以 $\mathsf{Sch}_S$ 记其上概形构成的范畴，以
  $\mathsf{Sm}_S$ 记其中[[光滑态射|光滑]]者构成的满子范畴。

:::

**母题无穷环路机**是 [[$\mathbb{A}^1$-母题同伦论]]中里程碑式的成就，
由 [[Elden Elmanto|Elmanto]]、[[Marc Hoyois|Hoyois]]、
[[Adeel Khan|Khan]]、[[Vladimir Sosnilo|Sosnilo]]、
[[Maria Yakerson|Yakerson]] 做出，其证明本质地使用
[[Alexey Ananyevskiy|Ananyevskiy]]、[[Grigory Garkusha|Garkusha]]、
[[Alexander Neshitov|Neshitov]]、[[Ivan Panin|Panin]] 沿
[[Vladimir Voevodsky|Voevodsky]] 思路所做的具体计算。

母题无穷环路机是[[同伦论]]中
[[$\mathbb{E}_\infty$-群]]和[[连合谱]]的[[范畴等价]]
（有时称为 Segal 无穷环路机）在母题同伦论的类比（@segal），
能从带特定移送映射的预层（@framedtransfer）
出发恢复出[[母题谱]]，从而给出[[母题上同调]]、
[[代数配边]]等上同调理论的母题同伦论构造，
往往比以前的造法简明得多。

## 陈述

固定概形 $S$。

::: definition [带标架对应]
对 $X,Y\in\mathsf{Sch}_S$，$X$ 到 $Y$ 的**带标架对应**指如下数据：

1. $\mathsf{Sch}_S$ 中图表 $X\gets Z\to Y$，
   满足 $Z\to X$ [[有限态射|有限]][[合割态射|合割]]。

2. [[余切复形]] $\mathrm{L}_{Z/X}$ 的
   [[代数 K 理论|$K$ 类]]在 $K(Z)$ 中的零伦。

它们构成的[[生象]]记作 $\operatorname{Corr}_S^{\mathrm{fr}}(X,Y)$。
$S$ 上的概形沿带标架对应构成范畴，记作
$\mathsf{Corr}^{\mathrm{fr}}(\mathsf{Sch}_S)$，其中光滑者构成的满子范畴记作
$\mathsf{Corr}^{\mathrm{fr}}(\mathsf{Sm}_S)$。取 $Z\to X$
为 $\operatorname{id}_X$，可得函子
$\mathsf{Sch}_S\to\mathsf{Corr}^{\mathrm{fr}}(\mathsf{Sch}_S)$、
$\mathsf{Sm}_S\to\mathsf{Corr}^{\mathrm{fr}}(\mathsf{Sm}_S)$。
:::

::: definition [带标架移送] {@framedtransfer}
$\mathsf{Sm}_S$ 上**带带标架移送的预层**，或简称**标架移送预层**，
指 $\mathsf{Corr}^{\mathrm{fr}}(\mathsf{Sm}_S)$ 上的[[预层]]，
它们构成的范畴记作 $\mathsf{P}(\mathsf{Corr}^{\mathrm{fr}}(\mathsf{Sm}_S))$。
称一个标架移送预层满足 [[Nisnevich 下降]]、
[[$\mathbb{A}^1$-不变性]]，指它限制到 $\mathsf{Sm}_S$ 之后满足相应性质。
这些东西构成的范畴记作 $\mathsf{P}_{\mathrm{Nis},\mathbb{A}^1}
  (\mathsf{Corr}^{\mathrm{fr}}(\mathsf{Sm}_S))$。
:::

::: theorem [母题无穷环路机] {@milm}
我们有对称幺半范畴等价
$$
\mathsf{SH}^{\mathrm{eff}}(S)\cong
\mathsf{P}_{\mathrm{Nis},\mathbb{A}^1}
(\mathsf{Corr}^{\mathrm{fr}}(\mathsf{Sm}_S),\mathsf{Sp}),
$$
其中 $\mathsf{SH}^{\mathrm{eff}}(S)$ 指有效
$\mathbb{A}^1$-母题谱的范畴，即 $\mathbb{A}^1$-母题谱范畴
$\mathsf{SH}(S)$ 中包含 $\Sigma_{\mathbb{P}^1}^\infty\colon\mathsf{Sm}_S\to\mathsf{SH}(S)$ 的像、
在余极限下封闭的最小稳定子范畴。两边的幺半结构都是张量积。
:::

::: remark {@comparetransfer}
显然可以忘掉带标架对应中的“标架”$[\mathrm{L}_{Z/X}]=0$，
获得**合割对应**；甚至可以把合割性忘掉，
获得**有限局部自由对应**。换言之，我们有自然的函子
$$
\mathsf{Corr}^{\mathrm{fr}}(\mathsf{Sm}_S)\to
\mathsf{Corr}^{\mathrm{fsyn}}(\mathsf{Sm}_S)\to
\mathsf{Corr}^{\mathrm{flf}}(\mathsf{Sm}_S);
$$
相应地，带带更少数据移送的预层自然成为带带更多数据移送的预层。
事实上我们有
$$
\mathsf{Mod}_{\mathrm{MGL}}(\mathsf{SH}^{\mathrm{eff}}(S))
\cong\mathsf{P}_{\mathrm{Nis},\mathbb{A}^1}
(\mathsf{Corr}^{\mathrm{fsyn}}(\mathsf{Sm}_S),\mathsf{Sp}),
$$
其中 $\mathrm{MGL}$ 表示代数配边理论，见 @mgl；此外我们猜想
$$
\mathsf{Mod}_{\mathbb{Z}(0)}(\mathsf{SH}^{\mathrm{eff}}(S))
\cong\mathsf{P}_{\mathrm{Nis},\mathbb{A}^1}
(\mathsf{Corr}^{\mathrm{flf}}(\mathsf{Sm}_S),\mathsf{Sp}),
$$
其中 $\mathbb{Z}(0)$ 表示母题上同调，见 @zmot。
:::

::: remark {@segal}
暂时令 $S$ 是[[生象]]，以 $\mathsf{Ani}_S$ 表示[[俯范畴|俯]]于
$S$ 上的生象构成的范畴。对 $X,Y\in\mathsf{Ani}_S$，$X$ 到 $Y$
的**有限对应**指 $\mathsf{Ani}_S$ 中图表 $X\gets Z\to Y$，
满足 $Z\to X$ 是有限覆叠，即纤维都是有限集。类似地把 $\mathsf{Ani}_S$
沿有限对应构成的范畴记作 $\mathsf{Corr}^{\mathrm{fin}}(\mathsf{Ani}_S)$。
则我们有对称幺半范畴等价
$$
(\mathsf{Sp}_S)_{\ge0}\cong\mathsf{P}_{\operatornamewithlimits{colim}}
(\mathsf{Corr}^{\mathrm{fin}}(\mathsf{Ani}_S),\mathsf{Ani}),
$$
其中等号左边指被 $S$ 参数化的一族连合谱，
右边指限制到 $\mathsf{Ani}_S$ 之后把余极限打到极限的预层。
@milm 可视为此事在 $\mathbb{P}^1$ 方向的类比。
:::

## 解释

## 应用

固定概形 $S$。

::: example [母题上同调] {@zmot}
考虑 $\mathsf{Sm}_S$ 上的 $\mathbb{Z}$-模预层
$X\mapsto H^0_{\mathrm{Zar}}(X,\mathbb{Z})$，
即整值 Zariski 局部常函数。它显然满足 Nisnevich 下降、
$\mathbb{A}^1$-不变，且带有限局部自由移送，
因为有限局部自由态射的次数局部常。特别地，它是取值在
$\mathsf{D}(\mathbb{Z})$ 的标架移送预层
（@comparetransfer），给出 $\mathbb{Z}$-线性母题谱
$\mathbb{Z}(0)\in\mathsf{SH}(S)$。对 $n\in\mathbb{Z}$，令
$\mathbb{Z}(n)[2n]=\Sigma_{\mathbb{P}^1}^n\mathbb{Z}(0)\in\mathsf{SH}(S)$，
则它表示的上同调就是 $\mathbb{A}^1$-母题上同调。当
$S$ [[正则概形|正则]]时这就给出母题上同调。
:::

::: example [代数配边] {@mgl}

:::

## 参考文献

```bibliography
MR4325285:
  type: article
  author: ['Elmanto, Elden', 'Hoyois, Marc', 'Khan, Adeel A.', 'Sosnilo, Vladimir', 'Yakerson, Maria']
  title: Motivic infinite loop spaces
  journaltitle: Camb. J. Math.
  volume: 9
  year: 2021
  number: 2
  pages: 431–549
  doi: 10.4310/CJM.2021.v9.n2.a3
MR4215649:
  type: article
  author: 'Hoyois, Marc'
  title: The localization theorem for framed motivic spaces
  journaltitle: Compos. Math.
  volume: 157
  year: 2021
  number: 1
  pages: 1–11
  doi: 10.1112/s0010437x20007575
```

```terms
母题无穷环路机:
  en: motivic infinite loop machine
带标架对应:
  en: framed correspondence
带带标架移送的预层:
  en: presheaf with framed transfers
```
