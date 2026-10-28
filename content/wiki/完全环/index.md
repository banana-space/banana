---
title: 完全环
aliases: [完美环]
categories: [交换代数]
navboxes: [交换代数]
---

<problems>
- “例子”一节第二项中“不是域的完全环都不是 Noether 环”似乎不成立：例如 $\mathbb{F}_p\times\mathbb{F}_p$ 是完全的 Noether 环但不是域，其中不可逆元 $a=(1,0)$ 满足 $a^{1/p}=a$，所给的理想升链并不严格。
</problems>

::: convention
在本文中，

- 所有环都指[[交换环]]。
- $p$ 为一固定[[素数]]。

:::

**完全环**（也称**完美环**）指的是 [[Frobenius 映射]]是双射的
$\mathbb{F}_p$-代数。

## 定义

::: definition
称 $\mathbb{F}_p$-代数 $R$ 为**完全环**，意思是其
[[Frobenius 同态]]是双射，换言之对任一 $r\in R$，
存在唯一 $s\in R$ 使得 $s^p=r$。
:::

::: remark
一些地方也把 $\mathbb{Q}$-代数全都称为完全环，
但这里不这么定义。
:::

::: definition
设 $R$ 为 $\mathbb{F}_p$-代数，$A$ 为 $R$-代数。称
$A$ 为**完全 $R$-代数**，意思是其[[相对 Frobenius]]
是双射，即 $A\otimes_{R,\operatorname{Frob}}R=A$。
:::

## 性质

::: proposition
完全环都既约。
:::

::: theorem
$R$ 是完全环，$A,B$ 是 $R$-代数，也都是完全环。则对 $i>0$，
$$
\operatorname{Tor}_i^R(A,B)=0.
$$
:::

::: theorem
$R$ 是 $\mathbb{F}_p$-代数，$A$ 是完全 $R$-代数，
则[[余切复形]] $L_{A/R}=0$。特别地，$A$ 在 $R$
上[[形式平展]]。
:::

以下命题说明完全环与[[万有同胚]]和 [[h 拓扑]]联系紧密。

::: proposition
$\mathbb{F}_p$-代数 $R$ 为完全环当且仅当其[[绝对弱正规]]，即

- 对 $x,y\in R$，如 $x^3=y^2$，则存在唯一 $a\in R$
  使得 $x=a^2$，$y=a^3$。

- 对 $x,y\in R$ 和素数 $\ell$，如 $\ell^\ell x
  =y^\ell$，则存在唯一 $a\in R$ 使得 $x=a^\ell$，
  $y=\ell a$。

:::

::: proposition
设 $R$ 是完全环，$X$ 是[[概形]]，
$X\to\operatorname{Spec}R$ 是[[万有同胚]]。则
$X=\operatorname{Spec}R$。
:::

### 完全化

有两个典范的把环变得完全的方法。

::: theorem
完全环的范畴到 $\mathbb{F}_p$-代数范畴的含入有两边伴随，
分别由 $R\mapsto\lim_{\operatorname{Frob}}R$ 与
$R\mapsto\operatornamewithlimits{colim}
_{\operatorname{Frob}}R$
给出，称为**极限完全化**与**余极限完全化**，
记作 $R^\text{perf}$ 与 $R_\text{perf}$。
:::

::: proposition
对 $\mathbb{F}_p$-代数 $R$，自然映射 $R\to R_\text{perf}$
在谱上是[[万有同胚]]，且是万有同胚中终止者。
:::

::: remark
但 $R^\text{perf}\to R$ 没有道理是万有同胚。取
$R=\mathbb{F}_p[x]$，则 $R^\text{perf}=\mathbb{F}_p$。
:::

## 例子

- $\mathbb{F}_p$ 是完全环。更一般地，
  [[有限域]]都完全。

- $\mathbb{F}_p[x^{p^{-\infty}}]=
  \bigcup_{n=0}^\infty\mathbb{F}_p[x^{p^{-n}}]$
  显然是完全环。也可把 $x$ 换成任意个变量。注意这不是
  [[Noether 环]]。其实不是域的完全环都不是 Noether 环，
  因为只要元素 $a$ 不可逆，就有理想升链
  $$
  (a)\subset(a^{1/p})\subset(a^{1/p^2})\subset\cdots
  $$

```terms
完全环:
  en: perfect ring
  de: vollkommener Ring
  fr: anneau parfait
  grc: τέλειος δακτύλιος
  la: anellus perfectus
```
