---
title: 张量积复形
aliases: [链复形张量积]
categories: [同调代数]
navboxes: [同调代数]
---

::: convention
在本文中，

- 对[[加性范畴]] $\mathcal{A}$，以 $\mathsf{Ch}(\mathcal{A})$
  表示 $\mathcal{A}$ 的[[链复形]]范畴，使用同调记号。

:::

当[[链复形]]所取值的[[加性范畴]]有[[张量积]]操作时，
链复形也有张量积操作，是为**张量积复形**。

## 定义

::: definition [幺半结构] {@def}
设 $(\mathcal{A},\otimes)$ 是加性[[幺半范畴]]，有可数[[余积]]。
则链复形 $X,Y\in\mathsf{Ch}(\mathcal{A})$ 的**张量积**是如下链复形：
$$
(X\otimes Y)_n=\bigoplus_{i+j=n}X_i\otimes Y_j;
$$
$$
\partial(x_i\otimes y_j)=\partial x_i\otimes y_j
+(-1)^ix_i\otimes\partial y_j,\,\forall x_i\in X_i,\,y_j\in Y_j.
$$
更一般地，对 $k\in\mathbb{N}$ 及 $X^1,\ldots,X^k\in\mathsf{Ch}(\mathcal{A})$，
它们的张量积是
$$
(X^1\otimes\cdots\otimes X^k)_n=
\bigoplus_{i_1+\cdots+i_k=n}
X^1_{i_1}\otimes\cdots\otimes X^k_{i_k};
$$
$$
\partial(x^1_{i_1}\otimes\cdots\otimes x^k_{i_k})=
\partial x^1_{i_1}\otimes\cdots\otimes x^k_{i_k}+
(-1)^{i_1}x^1_{i_1}\otimes\partial x^2_{i_2}\cdots\otimes x^k_{i_k}+
\cdots+(-1)^{i_1+\cdots+i_{k-1}}x^1_{i_1}\otimes\cdots\otimes\partial x^k_{i_k},
$$
对 $x^1_{i_1}\in X^1_{i_1}$，……，$x^k_{i_k}\in X^k_{i_k}$。
容易发现 $\partial^2=0$，且 $(\mathcal{A},\otimes)$
的结合律推出 $(\mathsf{Ch}(\mathcal{A}),\otimes)$ 的结合律，
故它给出了 $\mathsf{Ch}(\mathcal{A})$ 的幺半范畴结构。
:::

::: definition [对称幺半结构] {@sym}
设 $(\mathcal{A},\otimes)$ 是加性[[对称幺半范畴]]，
有可数余积。则上面定义的幺半结构可升级为对称幺半结构如下：
对 $X,Y\in\mathsf{Ch}(\mathcal{A})$ 可作同构
$$
X\otimes Y\to Y\otimes X
$$
$$
x_i\otimes y_j\mapsto(-1)^{ij}y_j\otimes x_i
$$
其中 $x_i\in X_i$，$y_j\in Y_j$；更一般地，对 $k\in\mathbb{N}$，
$X^1,\ldots,X^k\in\mathsf{Ch}(\mathcal{A})$，
$\sigma\in\mathfrak{S}_k$，可作同构
$$
X^1_{i_1}\otimes\cdots\otimes X^k_{i_k}\to
X^{\sigma(1)}_{i_{\sigma(1)}}\otimes\cdots\otimes X^{\sigma(k)}_{i_{\sigma(k)}}
$$
$$
x^1_{i_1}\otimes\cdots\otimes x^k_{i_k}\mapsto
\operatorname{sgn}(\sigma(i_1,\ldots,i_k))x^{\sigma(1)}_{i_{\sigma(1)}}
\otimes\cdots\otimes x^{\sigma(k)}_{i_{\sigma(k)}}
$$
其中 $\sigma(i_1,\ldots,i_k)\in\mathfrak{S}_{i_1+\cdots+i_k}$
指置换
$$
\{1,\ldots,i_1+\cdots+i_k\}\to
\{(j,i)\mid1\le j\le k,\,1\le i\le i_j\}\to
\{1,\ldots,i_1+\cdots+i_k\},
$$
其中第一个箭头是按[[字典序]]给中间的集合排序，
第二个箭头是按 $(\sigma(j),i)$ 的字典序给它排序。
容易发现这确实是链复形同构，且与结合律、置换复合都相容，
故这给出 $\mathsf{Ch}(\mathcal{A})$ 的对称幺半范畴结构。
:::

::: remark
如考虑单边有界链复形的张量积，则不需要 $\mathcal{A}$
有可数余积，因为此时上面定义中的可数余积实为有限。
:::

## 性质

::: proposition
设 $(\mathcal{A},\otimes)$ 是加性幺半范畴，
$X,Y,Z\in\mathsf{Ch}(\mathcal{A})$。设 $X,Y,Z$ 都在同一边有界，
或 $\mathcal{A}$ 有可数余积。设 $f,g\colon X\to Y$
是链映射，$H\colon f\simeq g$ 是[[链同伦]]。则
$H\otimes Z\colon f\otimes Z\simeq g\otimes Z$、
$Z\otimes H\colon Z\otimes f\simeq Z\otimes g$
也是链同伦。
:::

::: corollary
链同伦等价构成[[理想 (范畴论)|理想]]。从而 @def
（@sym）的（对称）幺半范畴结构诱导[[链复形同伦范畴]]、
[[链复形 $(\infty,1)$-范畴]]的（对称）幺半结构。
:::

```terms
张量积复形:
  en: tensor product complex
```
