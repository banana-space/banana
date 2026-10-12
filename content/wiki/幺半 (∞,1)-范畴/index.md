---
title: '幺半 $(\infty,1)$-范畴'
categories: [高阶范畴论, 高阶代数]
navboxes: [高阶范畴论, 高阶代数]
---

**幺半 $(\infty,1)$-范畴**是[[幺半范畴]]在
[[$(\infty,1)$-范畴]]论中的对应物，
即带[[结合律|结合]]的张量积运算的 $(\infty,1)$-范畴。

由于 $(\infty,1)$-范畴里有任意高阶的同伦，
故陈述[[结合律]]时也要考虑任意高阶的同构。
此时如再像[[幺半范畴]]条目中一样手动写下一些公理表达结合律，
公理将变得极其麻烦，无法操作，
所以通常把结合律打包为[[纤维 $(\infty,1)$-范畴]]。

## 定义

先回忆单形范畴 $\mathbb{\Delta}$ 的定义。以下将要用它编码高阶的结合律。

::: definition [范畴 $\mathbb{\Delta}$]
**[[单形范畴]]** 是如下定义的[[范畴]] $\mathbb{\Delta}$：

- 其对象为所有形如 $[n] = \{0,\dotsc,n\}$ 的集合，
  其中 $n \geq 0$。

- 态射集 $\mathbb{\Delta}([m],[n])$
  由所有从 $[m]$ 到 $[n]$ 的保序映射
  （即保持 $\leq$ 关系的映射）构成。

:::

::: definition {@thm:定义}
**幺半 $(\infty,1)$-范畴**指
$(\infty,1)$-范畴的[[推出纤维化]]
$\mathcal{C}^\otimes\to\mathbb{\Delta}^\mathrm{op}$，满足：

- 对任意自然数 $n$，沿 $n$ 个含入映射 $\{0,1\},\{1,2\},
  \ldots,\{n-1,n\}\colon[1]\to[n]$ 之反做推出，
  在纤维上得到的函子 $\mathcal{C}^\otimes_{[n]}
  \to(\mathcal{C}^\otimes_{[1]})^n$ 是范畴等价。

称 $[1]\in\mathbb{\Delta}^\mathrm{op}$ 上的纤维 $\mathcal{C}^\otimes_{[1]}$
为幺半 $(\infty,1)$-范畴 $\mathcal{C}^\otimes\to\mathbb{\Delta}^\mathrm{op}$
的**底范畴**，记作 $\mathcal{C}$。没有歧义时，
常以 $\mathcal{C}^\otimes$ 甚至 $\mathcal{C}$ 代表幺半
$(\infty,1)$-范畴 $\mathcal{C}^\otimes\to\mathbb{\Delta}^\mathrm{op}$。

对 $n\in\mathbb{N}$ 以及 $X_1,\ldots,X_n\in\mathcal{C}$，
可将 $(X_1,\ldots,X_n)\in\mathcal{C}^n\cong\mathcal{C}^\otimes_{[n]}$
沿映射 $\{0,n\}\colon[1]\to[n]$ 之反做推出，所得对象记作
$$
X_1\otimes\cdots\otimes X_n\in\mathcal{C},
$$
称作 $X_1,\ldots,X_n$ 的**张量积**。当 $n=0$ 时，
此对象记作
$$
\mathbb{1}_\mathcal{C}\in\mathcal{C},
$$
称作幺半 $(\infty,1)$-范畴 $\mathcal{C}$ 的**幺元**；
无歧义时也可只写 $\mathbb{1}$。
:::

::: remark
记号承 @thm:定义。设 $I_1,\ldots,I_m\subseteq[n]$
是首尾相接的 $m$ 个非空子集，并起来是全部；换言之，
$I_1=\{0,1,\ldots,i_1\}$，$I_2=\{i_1,i_1+1,\ldots,
  i_1+i_2\}$，……，$I_m=\{i_1+\cdots+i_{m-1},
  i_1+\cdots+i_{m-1}+1,\ldots,i_1+\cdots+i_{m-1}+i_m=n\}$。
这给出表达式
$$
X_1\otimes\cdots\otimes X_n
$$
的一种加括号方式，即沿第 $i_1,i_1+i_2,\ldots,
  i_1+\cdots+i_{m-1}$ 个“$\otimes$”把上式切成
$m$ 段。注意含入映射 $\{0,m\}\colon[1]\to[m]$ 与
$\{0,i_1,\ldots,i_1+\cdots+i_m\}\colon[m]\to[n]$
的复合是含入映射 $\{0,n\}\colon[1]\to[n]$；
故由于推出纤维化中推出函子与复合相容，可得加括号前后的
$X_1\otimes\cdots\otimes X_n$ 给出典范同构的
$\mathcal{C}$ 中对象。由此可以直观理解 @thm:定义
对高阶结合律的编码。
:::

::: remark
$\mathbb{\Delta}^\mathrm{op}$ 可视为[[代数模式]] $\mathbb{\Delta}^{\mathrm{op},\flat}$，
其中惰性映射为区间含入，活性映射为保持最小元与最大元的映射，
初等对象只有 $[1]$。幺半 $(\infty,1)$-范畴实际上就是
$\mathbb{\Delta}^{\mathrm{op},\flat}$ 上的 Segal 纤维化。
:::

```terms
'幺半 $(\infty,1)$-范畴':
  en: 'monoidal $(\infty,1)$-category'
```
