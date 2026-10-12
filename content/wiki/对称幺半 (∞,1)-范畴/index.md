---
title: '对称幺半 $(\infty,1)$-范畴'
categories: [高阶范畴论, 高阶代数]
navboxes: [高阶范畴论, 高阶代数]
---

**对称幺半 $(\infty,1)$-范畴**是[[对称幺半范畴]]在
[[$(\infty,1)$-范畴]]论中的对应物，
即带[[交换律|交换]]、[[结合律|结合]]的张量积运算的 $(\infty,1)$-范畴。

由于 $(\infty,1)$-范畴里有任意高阶的同伦，
故陈述[[交换律]]、[[结合律]]时也要考虑任意高阶的同构。
此时如手动写公理表达交换律、结合律，将极其麻烦，无法操作，
所以通常把交换律、结合律打包为[[纤维 $(\infty,1)$-范畴]]。

## 定义

::: definition [范畴 $\mathsf{Fin}_*$]
考虑带基点有限集范畴 $\mathsf{Fin}_*$，
即其对象为选定了一个元素（称为基点）的有限集，
映射为保持基点的映射。

对自然数 $n$，以
$\left<n\right>$ 记集合 $\{0,\ldots,n\}$，基点为 $0$；
以 $\alpha_n$ 记映射 $\left<n\right>\to\left<1\right>$，
把 $0$ 映到 $0$，其它元素映到 $1$；对正整数 $i\le n$，以
$\iota_{n,i}$ 记映射 $\left<n\right>\to\left<1\right>$，
把 $i$ 映到 $1$，把其它元素映到 $0$。
:::

::: definition {@thm:定义}
**对称幺半 $(\infty,1)$-范畴**指
$(\infty,1)$-范畴的[[推出纤维化]]
$\mathcal{C}^\otimes\to\mathsf{Fin}_*$，满足：

- 对任意自然数 $n$，沿 $\iota_{n,1},\ldots,\iota_{n,n}$
  做推出，在纤维上得到的函子
  $\mathcal{C}^\otimes_{\left<n\right>}
    \to(\mathcal{C}^\otimes_{\left<1\right>})^n$
  是范畴等价。

称 $\left<1\right>\in\mathsf{Fin}_*$ 上的纤维
$\mathcal{C}^\otimes_{\left<1\right>}$
为对称幺半 $(\infty,1)$-范畴 $\mathcal{C}^\otimes\to\mathsf{Fin}_*$
的**底范畴**，记作 $\mathcal{C}$。没有歧义时，
常以 $\mathcal{C}^\otimes$ 甚至 $\mathcal{C}$ 代表对称幺半
$(\infty,1)$-范畴 $\mathcal{C}^\otimes\to\mathsf{Fin}_*$。

对 $n\in\mathbb{N}$ 以及 $X_1,\ldots,X_n\in\mathcal{C}$，
可将 $(X_1,\ldots,X_n)\in\mathcal{C}^n\cong\mathcal{C}^\otimes_{\left<n\right>}$
沿 $\alpha_n$ 做推出，所得对象记作
$$
X_1\otimes\cdots\otimes X_n\in\mathcal{C},
$$
称作 $X_1,\ldots,X_n$ 的**张量积**。当 $n=0$ 时，
此对象记作
$$
\mathbb{1}_\mathcal{C}\in\mathcal{C},
$$
称作对称幺半 $(\infty,1)$-范畴 $\mathcal{C}$ 的**幺元**；
无歧义时也可只写 $\mathbb{1}$。
:::

```terms
'对称幺半 $(\infty,1)$-范畴':
  en: 'symmetric monoidal $(\infty,1)$-category'
```
