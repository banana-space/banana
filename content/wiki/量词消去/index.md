---
title: 量词消去
categories: [模型论]
navboxes: [逻辑学]
---

量词消去是[[模型论]]中的性质。
一个[[理论]]具有量词消去表明，
任意[[一阶语句]]都等价于某不含[[量词]]的语句。
一个初等的例子是 $\mathbb{R}$ 上如下两个语句等价：
\[
\exists x (a\neq 0\wedge ax^2+bx+c=0)
\quad\text{ 和 }\quad
(a\neq 0)\wedge (b^2-4ac\geq0).
\]

## 定义

::: definition
一个理论 $T$ 具有**量词消去**，
如果对于所有[[公式]] $\varphi$，
存在一个不含量词的公式 $\chi$ 使得
\[
T\models\varphi\leftrightarrow\chi.
\]
:::

## 判别法

除了直接证明某个理论具有量词消去，
也可以使用如下判别法：

::: proposition {@typegivingelimination}
理论 $T$ 满足量词消去当且仅当：

对于其任两个模型 $\mathcal{M}$、$\mathcal{N}$，
任两个$\overline{a}\in M^n$、$\overline{b}\in N^n$，
如果它们的 $0$ 阶[[型(模型论)|型]]相同，
则它们的型相同。
:::

::: proof
若 $T$ 满足量词消去，
则对于任意公式 $\varphi\in\operatorname{tp}(\overline{a})$，
存在不含量词者 $\chi$ 使得 $T\models\varphi\leftrightarrow\chi$，
故 $\chi\in\operatorname{tp}(\overline{a})$，
即 $\chi\in\operatorname{tp}_0(\overline{a})$，
也就是说属于 $\operatorname{tp}_0(\overline{b})$，
从而 $\varphi\in\operatorname{tp}(\overline{b})$。
另一边的包含关系同理。

另一方面，
@typegivingelimination 中的条件说的是[[Stone 空间]] $S_n(T)$ 被
$\mathcal{A}=\{F_{\chi}\mid \chi\text{ 不含量词}\}$ 分离，
而由[[Stone 空间]]是[[射有限空间]]，
$\mathcal{A}$ 在有限交和有限并下封闭，
故 $\mathcal{A}$ 等于所有的[[闭开集]]组成的集合，
从而任意 $F_{\varphi}\in\mathcal{A}$，
也就是说 $F_{\varphi}=F_{\chi}$，
即 $T$ 具有量词消去。
:::

::: proposition {@saturatedcriterion}
如果所有 $T$ 的 [[饱和模型|$\omega$-饱和模型]]满足：

它们之间的 [[Alpha-同构|$0$-同构]]是 [[Alpha-同构|$\omega$-同构]]，

那么 $T$ 具有量词消去。
:::

::: proof
对于 $T$ 的任两个模型 $\mathcal{M}$、$\mathcal{N}$，
以及 $\overline{a}\in M^n$、
$\overline{b}\in N^n$ 满足它们的 $0$ 阶型相同，
即 $\operatorname{tp}_0(\overline{a})=\operatorname{tp}_0(\overline{b})$，
分别取 $\omega$-饱和初等扩张 $\mathcal{M}'$、$\mathcal{N}'$，
则有 $\overline{a}\cong_0\overline{b}$，
故由条件得，
在 $\mathcal{M}'$、$\mathcal{N}'$ 中有
$\overline{a}\cong_{\omega}\overline{b}$，
即 $\operatorname{tp}(\overline{a})=\operatorname{tp}(\overline{b})$。
由 @typegivingelimination 即得 $T$ 具有量词消去。
:::

利用 @saturatedcriterion 的判别法，
可以证明代数闭域理论 [[ACF|$\mathsf{ACF}$]]、
无界稠密全序理论 [[DLO|$\mathsf{DLO}$]] 等具有量词消去。

## 例子与应用

### 代数闭域理论

代数闭域理论 [[ACF|$\mathsf{ACF}$]] 具有量词消去：

::: proposition
理论 $\mathsf{ACF}$ 的所有 $\omega$-饱和模型形如 $F$，
使得[[超越度]] $\operatorname{trdeg}(F/F_0)\ge\aleph_0$，
其中 $F_0$ 是[[基域]]
\[
F_0=
\begin{cases}
  \overline{\mathbb{Q}},&\operatorname{char} F=0.\\
  \overline{\mathbb{F}}_p,&\operatorname{char} F=p.
\end{cases}
\]
由于 $0$-同构保证特征一样，
从而自动给出 $\omega$-同构。
由 @saturatedcriterion 得到 $\mathsf{ACF}$ 具有量词消去。
:::

它有如下[[交换代数]]方面的应用：

- 利用量词消去可以说明代数闭域的所有模型都是[[存在封闭模型]]，
  从而可以证明[[Hilbert 零点定理]]。

  <see>[[Hilbert 零点定理]]</see>

- 利用量词消去可以说明代数闭域 $K$ 上的[[可定义集]]和[[可构造集]]重合。
  这给出了[[Chevalley 定理(可构造集)|Chevalley 定理]]的证明。

  <see>[[Chevalley 定理(可构造集)]]</see>

### 实闭域理论

实闭域理论 [[RCF|$\mathsf{RCF}$]] 也具有量词消去，
从而具有[[模型完备]]。
因为任何实闭域都包含代数实数域 $\mathbb{R}\cap \mathbb{Q}^{\operatorname{alg}}$，
故得到 $\mathsf{RCF}$ 是[[完备]]的理论。

利用这个事实，
可以给出[[平方和问题]]的证明。

<see>[[平方和问题]]</see>

### 无界稠密全序理论

无界稠密全序理论 [[$\mathsf{DLO}$]] 也具有量词消去：

::: proposition
理论 $\mathsf{DLO}$ 的任两个模型都是 $\omega$-同构的。
由 @saturatedcriterion 得到 $\mathsf{DLO}$ 具有量词消去。
:::

```terms
量词消去:
  en: quantifier elimination
  de: Quantorenelimination
  fr: élimination des quantificateurs
  grc: ἀνάλειψις ποσοδείκτων
  la: eliminatio quantificatorum
```
