---
title: Toda 括号
categories: [同伦论]
---

::: convention
在本文中，

- [[范畴]]都指 [[$(\infty,1)$-范畴]]。

:::

**Toda 括号**是[[带点范畴]]中多个映射之复合同伦连贯地为 $0$ 的障碍，准确地说是一个
$\partial\Delta^n$ 形状的图表延拓到 $\Delta^n$ 的障碍。

## 定义

::: definition
设 $\mathcal{C}$ 是带点范畴。对整数 $n>1$ 以及
$\mathcal{C}$ 中 $n$ 个首尾相接的映射 $f_i\colon X_{i-1}\to X_i$，
$i=1,\ldots,n$，归纳定义 **$n$ 元 Toda 括号**
$\left<f_1,\ldots,f_n\right>\in\Omega^{n-2}\operatorname{Hom}(X_0,X_n)$ 如下：

- $n=2$ 时，二元 Toda 括号 $\left<f_1,f_2\right>$ 即
  $f_2\circ f_1\in\operatorname{Hom}(X_0,X_2)$。考虑
  $f_1\colon X_0\to X_1$、$0\colon X_0\to X_2$、$f_2\colon X_1\to X_2$
  给出的图表 $\partial\Delta^2\to\mathcal{C}$，则 $\left<f_1,f_2\right>$
  的零伦给出它到 $\Delta^2$ 的延拓。

- $n>2$ 时，设对 $1\le i<j\le n$，$(i,j)\ne(1,n)$，
  $\left<f_i,f_{i+1},\ldots,f_j\right>$ 均已定义且都零伦。则这些零伦给出图表
  $\partial\Delta^n\to\mathcal{C}$（把映射 $0\to n$ 打到零映射）。由于
  $\operatorname{Hom}_{\partial\Delta^n}(0,n)=S^{n-2}$，该图表给出
  $\Omega^{n-2}\operatorname{Hom}(X_0,X_n)$ 中的点，这就是 $n$ 元 Toda 括号
  $\left<f_1,\ldots,f_n\right>$。它的零伦给出上述图表到 $\Delta^n$ 的延拓。

:::

```terms
Toda 括号:
  en: Toda bracket
```
