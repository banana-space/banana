---
title: 扭箭头范畴
categories: [范畴论]
navboxes: [范畴论]
---

**扭箭头范畴**是个[[范畴论]]一般构造，
是 $\operatorname{Hom}$ 函子的[[反直化]]。
粗略地说，[[范畴]] $\mathcal{C}$ 的扭箭头范畴的对象是
$\mathcal{C}$ 中的箭头，其映射对于箭头的定义域是反变的，
对其值域是协变的（@def）。

## 定义

::: definition {@def}
设 $\mathcal{C}$ 是范畴。$\mathcal{C}$
的**扭箭头范畴**，记作 $\mathsf{TwAr}(\mathcal{C})$，
指如下范畴：

- 其对象为 $\mathcal{C}$ 中的映射 $f\colon X_0\to X_1$。

- $f\colon X_0\to X_1$ 到 $g\colon Y_0\to Y_1$
  的映射 $F$ 为交换图表
  $$
  \begin{tikzcd}
    X_0\ar[r,"f"]&X_1\ar[d,"F_1"]\\
    Y_0\ar[u,"F_0"]\ar[r,"g"']&Y_1
  \end{tikzcd}
  $$

由构造我们有自然的函子 $\mathsf{TwAr}(\mathcal{C})\to
\mathcal{C}^\mathrm{op}\times\mathcal{C}$，即
$(f\colon X_0\to X_1)\mapsto(X_0,X_1)$。
扭箭头范畴的构造具有函子性，即它给出函子
$\mathsf{TwAr}\colon\mathsf{Cat}\to\mathsf{Cat}$。
:::

::: remark
对 [[$(\infty,1)$-范畴]] $\mathcal{C}$，
@def 不足以给出 $(\infty,1)$-范畴
$\mathsf{TwAr}(\mathcal{C})$。此时应当用 @st
作定义，其中 $\operatorname{Hom}$ 函子的陪域换成[[生象]]构成的
$(\infty,1)$-范畴 $\mathsf{Ani}$。
:::

::: definition [$(\infty,1)$-范畴中的扭箭头范畴]
对于 $(\infty,1)$-范畴 $\mathcal{C}$，
可将 $\mathsf{TwAr}(\mathcal{C})$ 刻画为以下单纯集
\[
\mathsf{TwAr}(\mathcal{C})_n \coloneqq \operatorname{Hom}_{\mathsf{sSet}}(\operatorname{N}([n]^{\operatorname{op}}\star[n]),\mathcal{C}),
\]
此处 $[n]^{\operatorname{op}} \star [n]$ 是指 $[n]^{\operatorname{op}}$  与 $[n]$
作为全序集的[[连并]]。
:::

::: remark
依据构造，$\mathsf{TwAr}(\mathcal{C})$ 中的对象为 $\mathcal{C}$ 中的映射 $f \colon C \to D$。
更进一步，其 $n$-单形为 $\mathcal{C}$ 中形如以下形状的 $(2n+1)$-单形。
\[
\begin{tikzcd}
  C_0 \ar[r]\ar[d] & C_1\ar[r]\ar[d] & \cdots \ar[r]& C_n\ar[d]\\
  D_0 & D_1\ar[l] & \cdots \ar[l] & D_n\ar[l].
\end{tikzcd}
\]
:::

## 性质

::: theorem {@st}
函子 $\mathsf{TwAr}(\mathcal{C})\to
\mathcal{C}^\mathrm{op}\times\mathcal{C}$
是[[推出纤维化]]，其[[直化]]是
$\operatorname{Hom}\colon\mathcal{C}^\mathrm{op}\times\mathcal{C}
\to\mathsf{Set}$。
:::

## 例子

::: example
对 $n\in\mathbb{N}$，以 $[n]$ 表示[[偏序集]]
$(\{0,1,\ldots,n\},\le)$，视为范畴。
则 $\mathsf{TwAr}[n]$ 也是偏序集，形状如下：
$$
\begin{tikzcd}
  (0,0)\ar[rd]&&(1,1)\ar[ld]\ar[rd]&&\cdots\ar[ld]\ar[rd]&&(n,n)\ar[ld]\\
  &(0,1)\ar[rd]&&\cdots\ar[ld]\ar[rd]&&\cdots\ar[ld]&\\
  &&\cdots\ar[rd]&&(1,n)\ar[ld]&&\\
  &&&(0,n)&&&
\end{tikzcd}
$$
这关于 $n$ 有函子性，构成[[余单纯对象|余单纯]]范畴 $\mathsf{TwAr}[\bullet]$。
:::

```terms
扭箭头范畴:
  en: twisted arrow category
```
