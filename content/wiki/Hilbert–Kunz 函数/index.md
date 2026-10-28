---
title: Hilbert–Kunz 函数
aliases: [Hilbert-Kunz 函数]
categories: [交换代数]
navboxes: [交换代数]
---

<problems>
- “定义”中的局部环记作 $A$，其后又写作 $R$，记号不一致。
- “性质”一节需要扩充。
</problems>

::: convention
在本文中，

- 所有环都指[[交换环]]。

:::

在正特征[[交换代数]]中，**Hilbert–Kunz 函数**是通常
[[Hilbert–Samuel 函数]]的类似物，此时我们可以类似地定义[[Hilbert–Kunz 重数]]。
Hilbert–Kunz 函数在正特征时的交换代数和[[代数几何]]均有应用。
Ernst Kunz 最早引入该概念并利用其给出了[[Kunz 定理]]，即正特征
Noether 局部环 $R$ 的正则性等价于 $R$ 上[[Frobenius 同态]]是[[平坦同态]]。

## 定义

::: definition {@thm:定义}
$(A,\mathfrak{m},k)$ 是正特征 $p>0$ 的局部环，设 $I$ 是 $R$ 的一个
$\mathfrak{m}$-准素理想。对一个
[[Krull 维数]]为$d$的有限生成非零 $R$-模 $M$，定义其关于 $I$ 的
**Hilbert–Kunz 函数**为取值在所有 $p$ 的幂次 $p^n,n\in\mathbb{N}$
上的函数
$$
f(p^n)=\ell_A(M/I^{[p^n]}M),
$$
其中 $\ell$ 表示[[长度 (模论)|长度]]，$I^{[p^n]}$ 表示由 $I$ 中
所有元素的 $p^n$ 次幂生成的理想。下面我们用 $q$ 来记 $p^n$。注意到
当 $q$ 充分大时，$f(q)$ 未必是关于变量 $q$ 的多项式，这是与 Hilbert–Samuel 函数所不同的地方。
:::

## 性质

## 例子

- 设 $R=(\mathbb{Z}/5\mathbb{Z})[[W,X,Y,Z]]/(W^4+X^4+Y^4+Z^4)$，
  其极大理想为 $\mathfrak{m}$。设 $q=5^n$ 则 $R$ 关于极大理想 $\mathfrak{m}$ 的
  Hilbert–Kunz 函数为
  $$
  f(5^n)=\ell_A(R/\mathfrak{m}^{[5^n]})=\frac{168}{61}(5^n)^3-\frac{107}{61}(3^n)
  $$
  这个例子告诉我们 Hilbert–Kunz 函数并不一定是关于 $q$ 的多项式。

```terms
Hilbert–Kunz 函数:
  en: Hilbert–Kunz function
```
