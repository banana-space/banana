---
title: 导出函子
aliases: [右导出函子, 左导出函子]
categories: [同调代数]
notices:
  - name: 消歧义
    about: '[[同调代数]]中的导出函子'
    see:
      - topic: 一般的导出函子
        page: 导出函子（范畴论）
---

**导出函子**是对不[[正合函子|正合]]的函子引入的概念，
使一些原来在一端不[[正合列|正合]]的序列可以在那一端延长，而成为[[长正合列]]。
例如[[左正合函子]]可能会将正合列变得在右端不正合，
此时在序列右端添加导出函子的作用项可使序列变为长正合列
（@long-exact-seq）。

在[[导出范畴]]的观点下，导出函子对原来的函子进行修改，
以使得它在[[拟同构]]的[[链复形]]上取值（作为链复形）仍然拟同构。
换言之，导出函子就是原来的函子所诱导的导出范畴之间的函子
（确切地说，原来的函子的 [[Kan 扩张]]）。

## 定义

### 通过消解

::: definition [右导出函子] {@def-right-der-via-res}
对 [[Abel 范畴]]间的[[左正合函子]]
$F \colon \mathcal{A} \to \mathcal{B}$，
如 $\mathcal{A}$ 含有足够多的[[内射对象]]，
对 $\mathcal{A}$ 中对象 $X$，
取 $X$ 的[[内射消解]] $X \to I^\bullet$，
定义
\[
R^i F(X) = H^i( F(I^\bullet) ).
\]
其中 $H^i$ 表示复形 $F(I^\bullet)$ 的第 $i$ 阶[[链上同调]]
（此定义不依赖于 $I^\bullet$ 的选取）。
:::

::: definition [左导出函子] {@def-left-der-via-res}
对 [[Abel 范畴]]间的[[右正合函子]]
$G \colon \mathcal{A} \to \mathcal{B}$，
如 $\mathcal{A}$ 含有足够多的[[投射对象]]，
对 $\mathcal{A}$ 中对象 $X$，
取 $X$ 的[[投射消解]] $P_\bullet \to X$，
定义
\[
L_i G(X) = H_i( G(P_\bullet) ).
\]
其中 $H_i$ 表示复形 $G(P_\bullet)$ 的第 $i$ 阶[[链下同调]]
（此定义不依赖于 $P_\bullet$ 的选取）。
:::

### 通过导出范畴

对 [[Abel 范畴]] $\mathcal{A}$，我们记

- $\mathcal{K}(\mathcal{A}) = \mathsf{hCh} (\mathcal{A})$ 为
  $\mathcal{A}$ 上的[[同伦链复形范畴]]。

- $\mathcal{D}(\mathcal{A})$ 为
  $\mathcal{A}$ 上的[[导出范畴]]。
  有一个自然的函子 $\mathcal{K}(\mathcal{A}) \to \mathcal{D}(\mathcal{A})$。

::: definition [超导出函子] {@def-der-via-cat}
设
$F \colon \mathcal{K} (\mathcal{A})
  \to \mathcal{K} (\mathcal{B})$
是一个[[函子]]。

- $F$ 的**右全超导出函子**
  \[
  \mathbb{R} F \colon
  \mathcal{D} (\mathcal{A}) \to
  \mathcal{D} (\mathcal{B})
  \]
  是函子
  $
  \mathcal{K} (\mathcal{A})
  \xrightarrow{F}
  \mathcal{K} (\mathcal{B})
  \to
  \mathcal{D} (\mathcal{B})
  $
  关于函子 $\mathcal{K}(\mathcal{A}) \to \mathcal{D}(\mathcal{A})$
  的[[Kan 扩张|左 Kan 扩张]]（如果存在）。

- $F$ 的**左全超导出函子**
  \[
  \mathbb{L} F \colon
  \mathcal{D} (\mathcal{A}) \to
  \mathcal{D} (\mathcal{B})
  \]
  是上述函子的[[Kan 扩张|右 Kan 扩张]]（如果存在）。

- $F$ 的**右超导出函子**
  $\mathbb{R}^p F \colon \mathcal{D} (\mathcal{A}) \to \mathcal{B}$
  定义为
  \[
  \mathbb{R}^p F \colon
  \mathcal{D} (\mathcal{A})
  \overset{\mathbb{R} F}{\longrightarrow}
  \mathcal{D} (\mathcal{B})
  \overset{H^p}{\longrightarrow}
  \mathcal{B}.
  \]

- $F$ 的**左超导出函子**
  $\mathbb{L}_p F \colon \mathcal{D} (\mathcal{A}) \to \mathcal{B}$
  定义为
  \[
  \mathbb{L}_p F \colon
  \mathcal{D} (\mathcal{A})
  \overset{\mathbb{L} F}{\longrightarrow}
  \mathcal{D} (\mathcal{B})
  \overset{H_p}{\longrightarrow}
  \mathcal{B}.
  \]

对 [[Abel 范畴]]间的[[加性函子]]
$F \colon \mathcal{A} \to \mathcal{B}$，
它诱导的链复形范畴之间的函子
$F \colon \mathsf{Ch} (\mathcal{A}) \to \mathsf{Ch} (\mathcal{B})$
自动保持[[链同伦]]，因此诱导了函子
$F \colon \mathcal{K} (\mathcal{A}) \to \mathcal{K} (\mathcal{B})$。
从而，$F$ 的各种超导出函子可以像上面一样定义。
:::

以上几个函子被称为超导出函子，
因为它们作用在 $\mathcal{A}$ 的链复形上，而非对象上。

::: remark
在上述定义中，
$\mathcal{K}(\mathcal{A})$ 可以换成左有界链复形的满子范畴 $\mathcal{K}^+ (\mathcal{A})$
或右有界链复形的满子范畴 $\mathcal{K}^- (\mathcal{A})$。
此时，我们说相应的超导出函子在相应的导出范畴
$\mathcal{D}^+ (\mathcal{A})$ 或 $\mathcal{D}^- (\mathcal{A})$
上存在。
:::

::: definition [导出函子]
对 [[Abel 范畴]]间的[[加性函子]]
$F \colon \mathcal{A} \to \mathcal{B}$，我们记
\[
\begin{aligned}
  R F \colon &
  \mathcal{A}
  \overset{[0]}{\longrightarrow}
  \mathsf{Ch} (\mathcal{A})
  \longrightarrow
  \mathcal{D} (\mathcal{A})
  \overset{\mathbb{R} F}{\longrightarrow}
  \mathcal{D} (\mathcal{B}), \\
  L F \colon &
  \mathcal{A}
  \overset{[0]}{\longrightarrow}
  \mathsf{Ch} (\mathcal{A})
  \longrightarrow
  \mathcal{D} (\mathcal{A})
  \overset{\mathbb{L} F}{\longrightarrow}
  \mathcal{D} (\mathcal{B}), \\
  R^p F \colon &
  \mathcal{A}
  \overset{[0]}{\longrightarrow}
  \mathsf{Ch} (\mathcal{A})
  \longrightarrow
  \mathcal{D} (\mathcal{A})
  \overset{\mathbb{R}^p F}{\longrightarrow}
  \mathcal{B}, \\
  L_p F \colon &
  \mathcal{A}
  \overset{[0]}{\longrightarrow}
  \mathsf{Ch} (\mathcal{A})
  \longrightarrow
  \mathcal{D} (\mathcal{A})
  \overset{\mathbb{L}_p F}{\longrightarrow}
  \mathcal{B}
\end{aligned}
\]
（如果这些函子存在），
并分别称为 $F$ 的**右全导出函子**、**左全导出函子**、**右导出函子**、**左导出函子**，
其中 $[0] \colon \mathcal{A} \to \mathsf{Ch} (\mathcal{A})$
将对象 $A \in \mathcal{A}$ 映到链复形 $A[0] \in \mathsf{Ch} (\mathcal{A})$，
也就是在第 $0$ 个位置为 $A$，其余为 $0$ 的链复形。
:::

::: proposition
设 $F \colon \mathcal{A} \to \mathcal{B}$
是 [[Abel 范畴]]间的[[加性函子]]。

- 如果 $\mathcal{A} = R\text{-}\mathsf{Mod}$ 是交换环上的模范畴，
  那么 $F$ 的各种超导出函子在 $\mathcal{D} (\mathcal{A})$ 上存在，
  从而 $F$ 的各种导出函子存在。

- 如果 $\mathcal{A}$ 含有[[足够内射对象]]，
  那么 $F$ 的右全超导出函子在 $\mathcal{D}^+ (\mathcal{A})$ 上存在，
  从而 $F$ 的各种右导出函子存在。
  如果 $F$ 的[[上同调维数]]有限，
  那么超导出函子在 $\mathcal{D} (\mathcal{A})$ 上存在。

- 如果 $\mathcal{A}$ 含有[[足够投射对象]]，
  那么 $F$ 的左全超导出函子在 $\mathcal{D}^- (\mathcal{A})$ 上存在，
  从而 $F$ 的各种左导出函子存在。
  如果 $F$ 的[[同调维数]]有限，
  那么超导出函子在 $\mathcal{D} (\mathcal{A})$ 上存在。

:::

## 性质

::: proposition
- 对[[左正合函子]] $F$，$R^0 F = F$。

- 对[[右正合函子]] $G$，$L_0 G = G$。

:::

使用无圈消解也可计算导出函子。

::: proposition
对左（右）正合函子 $F \colon \mathcal{A} \to \mathcal{B}$
以及 $\mathcal{A}$ 中对象 $A$，
如 $A \to C^\bullet$（$C_\bullet \to A$）
是无圈消解，
则 $RF(A)$（相应地，$LF(A)$）由 $F(C^\bullet)$
（$F(C_\bullet)$）计算。
:::

::: proposition {@long-exact-seq}
设有短正合列
\[
0 \to X \to Y \to Z \to 0,
\]
对左正合函子 $F$，有长正合列
\[
\begin{aligned}
  0 \to & F(X) \to F(Y) \to F(Z) \to R^1 F(X) \to R^1 F(Y) \to R^1 F(Z) \to \\
  \cdots & \to R^n F(X) \to R^n F(Y) \to R^n F(Z) \to R^{n+1} F(X) \to \cdots.
\end{aligned}
\]
对右正合函子 $G$，有长正合列
\[
\begin{aligned}
  & \cdots \to L_{n+1} G(Z) \to L_n G(X) \to L_n G(Y) \to L_n G(Z) \to \\
  \cdots \to & L_1 G(X) \to L_1 G(Y) \to L_1 G(Z) \to G(X) \to G(Y) \to G(Z) \to 0.
\end{aligned}
\]
:::

## 例子

- $\operatorname{Hom}$ 的导出函子是 [[Ext|$\operatorname{Ext}$]]。

- $\otimes$ 的导出函子是 [[Tor|$\operatorname{Tor}$]]。

- 对[[层]]的取[[全局截面]]函子 $\Gamma$，
  其 $i$ 阶导出函子为
  $R^i \Gamma (\mathcal{F}) = H^i(\mathcal{F})$，
  即层的 $i$ 阶上同调。

- 对[[群作用]]的取不变元素的函子 $(-)^G$，
  其 $i$ 阶导出函子在 $A$ 上作用为 $i$ 阶群上同调 $H^i(G, A)$。

```terms
导出函子:
  en: derived functor
  de: abgeleiteter Funktor
  fr: foncteur dérivé
```
