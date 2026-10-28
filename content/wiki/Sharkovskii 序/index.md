---
title: Sharkovskii 序
aliases: [Sharkovsky 定理, Sharkovsky 序, Sharkovskii 定理]
categories: [动力系统]
---

<problems>
- “定理证明”“推广”各节需要扩充。
</problems>

::: convention
在本文中，

- $f^n$均指代$\underbrace{f\circ\cdots\circ f}_{n\text{个}f}$，即$f$迭代$n$次。

:::

**[[Sharkovskii]] 序**描述了$\mathbb R$上[[区间]]$I$（可以是无穷区间）到自身的[[连续]][[映射]]
$f:I\to I$的各长度周期之相生关系。简单来说，在某长度的周期存在的假设下，
我们总能推出另一些长度的周期存在。

## 描述

::: definition
我们定义正整数$\mathbb Z^+$上的**Sharkovskii 序**如下，
将正整数[[算术基本定理|分解]]为$2$的[[幂]]和一个[[奇数]]的乘积：
\[
\begin{aligned}
  1\prec 2\prec 2^2\prec 2^3\prec\cdots\prec 2^n\prec&\cdots\\
  &\cdots&\prec&\  7\cdot 2^n&\prec&\  5\cdot 2^n &\prec&\ 3\cdot 2^n&\prec&\\
  &\cdots\\
  &\cdots&\prec&\  7\cdot 2&\prec&\  5\cdot 2 &\prec&\ 3\cdot 2&\prec&\\
  &\cdots&\prec&\  7&\prec&\ 5&\prec&\ 3.
\end{aligned}
\]
:::

显然它是正整数上的[[全序]]。

::: definition
给定映射$f:X\to X$及$x_0\in X$。
若使得$f^k(x_0)=x_0$成立的最小正整数$k=m$，
则称$x_0$是$f$的一个 **$m$-周期点**。
$m=1$的特殊情形称 **[[不动点]]**。
:::

所谓 Sharkovskii 定理，一般指如下两个定理：

::: theorem [Sharkovskii 强迫定理]
区间$I\subset\mathbb R$，映射$f:I\to I$连续。若$f$存在$m$-周期点且$m\succ l$，
则$f$存在$l$-周期点。
:::

::: theorem [Sharkovskii 实现定理]
对任意 Sharkovskii 序的非空尾集$T$，
即一个满足对任意$a\in T$，若$b\prec a$则$b\in T$的非空集合，
存在区间$[0,1]$到自身的连续映射$f_T$，
使得$f_T$存在$m$-周期点当且仅当$m\in T$。
:::

## 历史

整个Sharkovskii 序关系中，$1\prec2$是最显然也是最早被重视的。
虽然本质是连续函数[[介值定理]]的简单应用，
但早在19世纪末Poincaré就用其研究二次[[常微分方程]]平面[[构形空间|相图]]的[[稳定点]]。
而关于$2\prec m$的研究则要到20世纪50年代，
在研究$\{f^n\}$作为函数列的[[收敛|收敛性]]时，
这一序关系就作为副产品出现了：
这方面最早的结果是Coppel在1955年发表的论文中提到的[[Coppel 定理|定理]]：
闭区间$I$到自身的连续映射，
要么$f^n(x_0)$收敛对一切$x_0\in I$成立，要么$f$有$2$-周期点。
而在1961年，Sharkovskii发现了$2^m\prec n$，其中$n$非$2$的幂。
到了1964年，Sharkovskii定理的完整形式和证明才被发表出来。

值得一提的是，Sharkovskii的结果在发表时并未受到重视，
直到1975年李天岩及其导师Yorke合作完成的《周期三蕴含混沌》一文中，[[混沌]]的概念才被正式提出，
其中周期点的周期无上界这一条件正是由$3\succ n$简单保证的。

## 定理证明

## 推广

```terms
Sharkovskii 序:
  en: Sharkovskii ordering
  de: Sharkovskii-Ordnung
  fr: ordre de Sharkovskii
```
