---
title: Boole 值 von Neumann 宇宙
categories: [集合论]
notices:
  - name: 问题
    items:
      - “ZFC 的模型”“函子性”“序数、基数不变性”各节需要扩充。
---

**Boole 值 von Neumann 宇宙**是 [[von Neumann 宇宙]]的
Boole 值推广，是 [[ZFC]] 的 [[Boole 值模型]]。

以下固定[[完备 Boole 代数]] $B$。

## 定义

::: definition [von Neumann 层级]
对[[序数]] $\alpha$ 归纳定义集合 $V_\alpha^{(B)}$ 如下：

- $V_0^{(B)}=\emptyset$。

- $V_{\alpha+1}^{(B)}=V_\alpha^{(B)}\cup
  B^{V_\alpha^{(B)}}$，其中 $B^{V_\alpha^{(B)}}$
  表示从 $V_\alpha^{(B)}$ 到 $B$ 的[[映射 (集合论)|映射]]，
  它依映射的集合论定义自动与 $V_\alpha^{(B)}$ 无交。

- 对[[极限序数]] $\alpha$，$V_\alpha^{(B)}
  =\bigcup_{\beta<\alpha}V_\beta^{(B)}$。

依定义，对 $\beta\le\alpha$ 有
$V_\beta^{(B)}\subseteq V_\alpha^{(B)}$。这些
$V_\alpha^{(B)}$ 称为 **$B$ 值 von Neumann 层级**
或**取值在 $B$ 的 Boole 值 von Neumann 层级**。
:::

::: definition [von Neumann 宇宙]
定义类 $V^{(B)}=\bigcup_{\alpha\in\textbf{Ord}}V_\alpha^{(B)}$，
称为 **$B$ 值 von Neumann 宇宙**或**取值在 $B$ 的 Boole 值 von Neumann 宇宙**，
其中元素称为 **$B$ 值集合**或**取值在 $B$ 的 Boole 值集合**。
:::

::: definition [层级]
如 $x\in B^{V_\alpha^{(B)}}$，则称 $x$ 的**层级**为
$\alpha$，记作 $\operatorname{rank}(x)=\alpha$。
容易发现 $V^{(B)}$ 中的每个元素都有唯一的层级。
:::

这里的设想是用函数 $f$ 代表以真值 $f(x)$ 含有元素 $x$
的 Boole 值集合。该设想固然美好，但它有个问题：
同一个集合会被很多不同的函数代表。例如不论定义域是什么，
只要函数为恒零，依[[外延公理]]这函数就应代表空集。
为解决这一问题，我们就要重新定义等于。这样一来，
[[等量代换]]就迫使我们重新定义属于。

::: definition [属于和等于]
归纳定义 $V_\alpha^{(B)}$ 中的属于和等于如下：

- 极限序数不用做。

- 对后继序数 $\alpha+1$，设 $V_\alpha^{(B)}$
  中的属于和等于已经定义，现先对 $x\in V_\alpha^{(B)}$，
  $y\in B^{V_\alpha^{(B)}}$，定义
  $$
  [x\in y]=\bigvee_{z\in V_\alpha^{(B)}}
  (y(z)\wedge[x=z]);
  $$
  再对 $x,y\in V_{\alpha+1}^{(B)}$，定义
  $$
  [x=y]=\bigwedge_{z\in V_\alpha^{(B)}}
  [z\in x\leftrightarrow z\in y];
  $$
  最后对 $x,y\in V_{\alpha+1}^{(B)}$，定义
  $$
  [x\in y]=\bigvee_{z\in V_\alpha^{(B)}}
  [z\in y\wedge x=z].
  $$

:::

::: remark
上面的定义有若干歧义，我们来解决之。
为此需归纳证明外延公理和等量代换。
:::

## ZFC 的模型

本节验证 $V^{(B)}$ 是 [[ZFC]] 的 [[Boole 值模型]]。
以下验证 ZF 部分时不需要用到选择公理，只有验证选择公理时需要。
注意由 Boole 值模型的定义，需验证这些公理的真值都是 $1$。

## 函子性

## 序数、基数不变性

```terms
Boole 值 von Neumann 宇宙:
  en: Boolean-valued von Neumann universe
```
