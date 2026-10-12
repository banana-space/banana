---
title: Brunerie 数
categories: [同伦类型论]
---

[[Guillaume Brunerie]]使用[[同伦类型论]]证明了以下命题[@brunerie]：

::: proposition
存在整数$n$使得$π_4(S^3)=\mathbb Z/n\mathbb Z$。
:::

这个数被称为**Brunerie 数**。
经典[[同伦论]]表明$n$必须等于$\pm 2$，
Brunerie也在同伦类型论中证明了这一点。
需要强调的是，Brunerie数的定义是[[构造主义]]的。
因此，在具有计算意义的同伦类型论中，
计算机可以自动计算出该数的值。

Brunerie构造了一组函数，将其复合可以得到Brunerie数。
他的构造深度依赖于[[泛等公理]]的计算性质，
因此[[立方类型论]]由于[[Swan 问题]]而对计算该值有很大劣势。

\[
\begin{tikzcd}
  \mathbb{Z} \ar[r] & \Omega(S^1) \ar[r] & \Omega^2(S^2) \ar[r] & \Omega^3(S^3) \ar[llld] \\
  \Omega^3(S^1 * S^1) \ar[r, "\Omega^3\alpha"'] & \Omega^3(S^2) \ar[r] & \Omega^3(S^1 * S^1) \ar[r] & \Omega^3(S^3) \ar[llld] \\
  \Omega^2 \|S^2\|_2 \ar[r] & \Omega \|\Omega(S^2)\|_1 \ar[r] & \|\Omega^2(S^2)\|_0 \ar[r] & \Omega(S^1) \ar[d]\\
  &&& \mathbb Z
\end{tikzcd}
\]

[[Axel Ljungström]]对该表达式进行简化，避免使用[[同调论]]。这个版本的 Brunerie 数最终被计算出来，
但结果变成了 $n=-2$。

[[Anders Mörtberg]]发现，
对于一串函数 $\mathbb{Z} \simeq H^2(\mathbb{C}P^2) → H^4(\mathbb{C}P^2) \simeq \mathbb{Z}$，
若输入 $1$，应当返回 $\pm1$，但这个函数也没能计算出来。

目前只有 [[András Kovács]]仍尝试在[[立方类型论]]中计算最初的 Brunerie 数，
其他实验均因为表达式体积过大而以失败告终。
目前最狠的一次尝试是 [[Favonia]] 使用了一台 1TB 内存的电脑，
最终该程序在 90 小时后内存溢出。

## 影响

Guillaume Brunerie 为了构造这个数字，大力发展了[[综合同伦论]]，
将大量的经典结论翻译到了同伦类型论，并给出只使用类型论的证明。

为了编译和运行这个数字对应的程序，也启发了很多立方类型论中的研究，
例如泛等公理相关的内存优化等。

## 参考文献

```bibliography
brunerie:
  type: thesis
  degree: phd
  institution: Université Nice Sophia Antipolis
  title: On the homotopy groups of spheres in homotopy type theory
  author: 'Brunerie, Guillaume'
  year: 2016
  arxiv: '1606.05916'
```
