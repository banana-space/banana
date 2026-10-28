---
title: 代数 $K$ 理论
categories: [$K$ 理论]
navboxes: [代数 K 理论]
---

<problems>
- “例子”一节需要扩充。
</problems>

**代数 $K$ 理论**是[[环]]、[[概形]]，
乃至[[稳定 $\infty$-范畴]]的拓扑不变量，
取值在[[谱 (拓扑学)|谱]][[范畴]]中，
是 [[Grothendieck 群]] $K_0$ 的高阶推广。
代数 $K$ 理论的计算极为困难，但它所蕴藏的信息又十分深刻。
[[代数几何]]中它与[[母题上同调]]密切相关，
[[数论]]中亦猜想它反映 [[$L$ 函数]]的特殊值。

## 历史

人们对代数 $K$ 理论的追求始于对[[拓扑 $K$ 理论]]的类比，
试图把 Grothendieck 群推广为一整个[[上同调理论]]。
然而代数对象的刚性令当时人举步维艰。在 [[Grothendieck]] 定义
$K_0$ 群之后的十几年，[[Hyman Bass]] 定义了 $K_1$ 群，
[[John Milnor]] 定义了 $K_2$ 群。他们的定义都是手动的，
直接使用环的代数信息，看不到推广到更高阶的希望，不过 Bass 通过
$K_0$ 和 $K_1$ 的一个环论性质发现了负数阶 $K$ 群的定义。直到
1971 年，[[Daniel Quillen]] 才首次定义环的高阶代数 $K$ 理论，
并对[[有限域]]做了具体计算，是为 [[Quillen $+$ 构造]]。
后来 Quillen 本人的 [[Quillen Q 构造|$Q$ 构造]]把它推广到[[正合范畴]]，[[Friedhelm Waldhausen]]
的 [[Waldhausen S 构造|$S$ 构造]]又把它推广到
[[Waldhausen 范畴]]。

至此，[[环]]的代数 $K$ 理论有了正确的定义，
但人们仍不知道如何证明其若干基本性质，亦难以把它[[下降]]到[[概形]]。
直到 1990 年，[[Robert Wayne Thomason]] 受他死去的朋友
[[Thomas Trobaugh]] 托梦之启发，把
[[Waldhausen $S$ 构造]]用在[[完美复形]]范畴上，才得到了概形的
$K$ 理论，并证明了一批基本性质，例如[[正则概形]]负数阶 $K$ 群为
$0$，以及 [[Nisnevich 下降]]等。到了 21 世纪，在
[[André Joyal]]、[[Jacob Lurie]] 等人把
[[$\infty$-范畴]]的基本理论发展完善之后，代数 $K$
理论又有了接近 Grothendieck $K_0$ 原始精神的定义：
范畴的万有加性不变量。它由 [[Clark Barwick]] 对
[[Waldhausen $\infty$-范畴]]给出，以及由
[[Andrew Blumberg]]、[[David Gepner]]、[[Goncalo Tabuada]]
对[[稳定 $\infty$-范畴]]给出。

以下主要讲述代数 $K$ 理论的万有定义及其一般性质，
更具体的构造和性质在 [[Quillen $+$ 构造]]、[[Quillen $Q$ 构造]]、
[[Waldhausen $S$ 构造]]等条目给出。

## 定义

### $K_0$ 群

<see>[[$K_0$ 群]]</see>

::: definition [环的 $K_0$ 群] {@K0-定义}
对环 $R$，
记 $\mathsf{Proj}(R)$ 是 $R$ 上[[有限生成]][[投射模]]的范畴，
$\pi_0\mathsf{Proj}(R)$ 为它的同构类，
投射模的[[直和]]为它赋予了[[交换幺半群]]的结构。

环 $R$ 的 **$K_0$ 群** 是此幺半群的[[群化]]，
记作 $K_0(R)$。
换言之，$K_0(R)$ 是 $\mathsf{Proj}(R)$
这一[[加性范畴]]的[[Grothendieck 群]]。
:::

### 环的 $K$ 理论

<see>[[Quillen + 构造]]</see>

以上定义可以推广到一整套 $K$ 理论：
$K_0$ 群是先取同构类再取[[群化]]，
整个 $K$ 理论则是对上述范畴直接做[[群化]]，
变成 [[$\mathbb{E}_{\infty}$-群]]。

::: definition [环的 $K$ 理论]
记号同 @K0-定义，
范畴 $\mathsf{Proj}(R)$ 的所有对象和同构，
构成一个群胚，[[直和]]结构使它成为[[幺半群胚]]。

环 $R$ 的 **$K$ 理论**是此幺半群胚的
$\mathbb{E}_\infty$-[[群化]]，
记作 $K(R)$，它的 $n$ 阶[[同伦群]]记作 $K_n(R)$。
:::

不过群化是使用[[伴随函子]]的抽象定义，
更具体的定义可以参见 [[Quillen $+$ 构造]]。

### 连合 $K$ 理论

连合 $K$ 理论是 [[Waldhausen $\infty$-范畴]]的不变量，
取值为[[连合]][[谱 (拓扑学)|谱]]，即 [[$\mathbb{E}_\infty$-群]]。

::: definition {@wald}
**连合 $K$ 理论**是
[[Waldhausen $\infty$-范畴]]的范畴 $\mathsf{Wald}_\infty$
到[[生象]]范畴 $\mathsf{Ani}$ 的函子
$$
K\colon\mathsf{Wald}_\infty\to\mathsf{Ani},
$$
附带自然变换 $\operatorname{Obj}\to K$，其中
$\operatorname{Obj}(\mathcal{C})$ 指的是只看 $\mathcal{C}$
中同构得到的 $\infty$-群胚，满足：

- **群状** 对 $\mathcal{C}\in\mathsf{Wald}_\infty$，
  [[余积]] $\sqcup\colon\mathcal{C}\times\mathcal{C}
      \to\mathcal{C}$ 以及含入 $\mathcal{C}\times0,
      0\times\mathcal{C}\subseteq
      \mathcal{C}\times\mathcal{C}$ 自然给出的
  $K(\mathcal{C})$ 上
  [[$\mathbb{E}_\infty$-幺半群]]结构是
  [[$\mathbb{E}_\infty$-群]]。

- **加性** 对 $\mathcal{C}\in\mathsf{Wald}_\infty$，
  令 $\mathsf{F}_1(\mathcal{C})=\{f\in\mathsf{Fun}
      (\Delta^1,\mathcal{C})\mid\mathrm{h}(f)\in
      \mathcal{C}_\dag\}$ 为 $\mathcal{C}$ 中余纤维化组成的范畴，
  视为 $\mathsf{Fun}(\Delta^1,\mathcal{C})$ 的[[满子范畴]]。
  称 $\mathsf{F}_1(\mathcal{C})$ 的态射
  $(X\to Y)\to(X'\to Y')$ 为余纤维化，指的是它给出的
  $X\to X'$、$Y\to Y'$、$Y/X\to Y'/X'$ 都是余纤维化。
  则函子
  $$
  \mathsf{F}_1(\mathcal{C})\to\mathcal{C}\times
  \mathcal{C},
  $$
  $$
  (X\to Y)\mapsto(X,Y/X),
  $$
  诱导同构 $K(\mathsf{F}_1(\mathcal{C}))\to
      K(\mathcal{C})\times K(\mathcal{C})$。

且是满足这些、附带从 $\operatorname{Obj}$
来的自然变换中初始者。
:::

::: remark
注意 $\mathsf{Wald}_\infty$ 为[[紧生成]]，记其紧对象子范畴为
$\mathsf{Wald}_\infty^\omega$，则函子 $\operatorname{Obj}
  \colon\mathsf{Wald}_\infty\to\mathsf{Ani}$ 是它在
$\mathsf{Wald}_\infty^\omega$ 上限制的左 [[Kan 扩张]]。
不难发现范畴 $\mathsf{Fun}(\mathsf{Wald}_\infty^\omega,
  \mathsf{Ani})$ 与其中群状加性函子组成的满子范畴
$\mathsf{Fun}_+(\mathsf{Wald}_\infty^\omega,
  \mathsf{Ani})$ 均为[[可表现范畴|可表现]]，
含入函子可达且保持极限。于是由[[伴随函子定理]]即得连合
$K$ 理论在 $\mathsf{Wald}_\infty^\omega$ 上的存在性，
再左 Kan 扩张即得其存在性。这样还顺便得到它与[[滤余极限]]交换。
:::

::: remark {@右逆}
@wald 中的同构 $K(\mathsf{F}_1(\mathcal{C}))
  \to K(\mathcal{C})\times K(\mathcal{C})$ 的逆由
$\mathcal{C}\times\mathcal{C}\to\mathsf{F}_1
  (\mathcal{C})$，$(X,Z)\mapsto(X\to X\sqcup Z)$
诱导，因为该函子是 $(X\to Y)\mapsto(X,Y/X)$ 的右逆。
:::

### 不连合 $K$ 理论

不连合 $K$ 理论是[[幂等完备 (∞,1)-范畴|幂等完备]][[稳定 $\infty$-范畴]]的不变量，
取值为[[谱 (拓扑学)|谱]]。

具体构造见词条 [[Calkin 范畴]]。

## 性质

::: proposition {@映射加性}
设 $F,F',F''\colon\mathcal{D}\to\mathcal{C}$ 是
Waldhausen $\infty$-范畴的正合函子，且有对 $\mathcal{D}$
的对象自然的余纤维列 $F'\to F\to F''$。则它们诱导的 $K$
理论映射满足 $K(F)=K(F')+K(F'')$。
:::

::: proof
把 $\mathcal{D}$ 化归到万有情形，可设 $\mathcal{D}=
  \mathsf{F}_1(\mathcal{C})$，$F'(X\to Y)=X$，
$F(X\to Y)=Y$，$F''(X\to Y)=Y/X$。
这样它便是 @wald 中 $\mathbb{E}_\infty$-群结构的定义和 @右逆 合起来的推论。
:::

::: corollary
设 $\mathcal{C}$ 是 Waldhausen $\infty$-范畴，
满足形如 $X\to0$ 的映射都是余纤维化。以 $\Sigma X$ 记
$0\gets X\to0$ 的推出，不难发现 $\Sigma\colon
  \mathcal{C}\to\mathcal{C}$ 是 Waldhausen 范畴的正合函子。
则它诱导的 $K$ 理论映射 $K(\Sigma)=-1$。特别地，
如以 $\mathsf{SW}(\mathcal{C})$ 记其
[[Spanier–Whitehead 构造]]，即图表
$$
\mathcal{C}\xrightarrow{\Sigma}\mathcal{C}
\xrightarrow{\Sigma}\cdots
$$
的余极限，则 $K(\mathsf{SW}(\mathcal{C}))=
  K(\mathcal{C})$。
:::

::: proof
这是 @映射加性 的 $F'=\operatorname{id}$、
$F=0$ 情形。
:::

::: proposition
设 $\mathcal{C},\mathcal{D},\mathcal{E}$ 是 Waldhausen
$\infty$-范畴，函子 $p\colon\mathcal{E}\to\mathcal{C}$、
$q\colon\mathcal{E}\to\mathcal{D}$、$i\colon\mathcal{C}
  \to\mathcal{E}$、$j\colon\mathcal{D}\to\mathcal{E}$ 满足：

- $p\circ i=q\circ j=\operatorname{id}$，
  $p\circ j=q\circ i=0$。

- $i\circ p\to\operatorname{id}\to j\circ q$
  是 $\mathcal{E}$ 到自身的函子的余纤维列。

则 $K(\mathcal{E})=K(\mathcal{C})\times K(\mathcal{D})$。
特别地，取 $\mathcal{E}=\mathcal{C}\times\mathcal{D}$，
$p,q$ 和 $i,j$ 分别为两个投影和两个含入，即得
$K(\mathcal{C}\times\mathcal{D})=
  K(\mathcal{C})\times K(\mathcal{D})$。
:::

::: proof
$p,q$ 诱导 $K$ 理论的映射
$$
(K(p),K(q))\colon K(\mathcal{E})
\to K(\mathcal{C})\times K(\mathcal{D});
$$
$i,j$ 诱导 $K$ 理论的映射
$$
K(i)+K(j)\colon K(\mathcal{C})\times K(\mathcal{D})
\to K(\mathcal{E}).
$$
由于 $p\circ i=q\circ j=\operatorname{id}$，
$p\circ j=q\circ i=0$，显然有
$(K(p),K(q))\circ(K(i)+K(j))=\operatorname{id}$。
另一方面，由条件以及 @映射加性，
$K(i\circ p)+K(j\circ q)=\operatorname{id}$，即
$(K(i)+K(j))\circ(K(p),K(q))=\operatorname{id}$。
:::

## 例子

```terms
代数 $K$ 理论:
  en: algebraic $K$-theory
  de: algebraische $K$-Theorie
  fr: $K$-théorie algebrique
  la: $K$-theoria algebraica
```
