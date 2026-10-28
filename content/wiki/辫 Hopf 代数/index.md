---
title: 辫 Hopf 代数
categories: [代数论]
navboxes: [代数结构]
---

<problems>
- “性质”一节需要扩充。
</problems>

辫 Hopf 代数，又称准三角 Hopf 代数，在 [[Hopf 代数]]的基础上
配备了结构，对应其模范畴上张量积的[[辫范畴|辫结构]]。

定义
$\tau : X \otimes Y \to Y \otimes X$ 交换线性空间张量积的两个因子。
如果 Hopf 代数本身余交换，则 $\tau$ 本身构成 Hopf 代数模的同态，
即可作为其模范畴的对称幺半结构。
但一般来说 $\tau(\mu(x)) \ne \mu(x)$，因此 $\tau$ 不保持张量积上的模结构。

不失一般性，我们不妨考虑在 $\tau$ 的基础上复合一个线性空间的自同构
$\rho : X \otimes Y \to X \otimes Y$ 作为修正，
使得 $\tau \circ \rho$ 保持张量积。
假设这个自同构由 $A \otimes A$ 的某个元素 $R = \sum_i a_i \otimes b_i$ 左乘给出，
即 $\rho(x \otimes y) = \sum_i a_i x \otimes b_i y$，
或者写作 $\rho(X) = R X$。
将这个元素需要满足的要求展开，就得到辫 Hopf 代数的定义。

## 定义

::: definition
给定 [[Hopf 代数]] $(A, m, 1, \mu, \varepsilon, \iota)$，
其**辫结构**为一可逆元素 $R = \sum_i a_i \otimes b_i \in A \otimes A$，使得如下等式成立：
\[
\begin{aligned}
  \tau(\mu(x)) &= R \mu(x) R^{-1} \\
  (\mu \otimes \textrm{id}) (R) &= R_{13} R_{23} \\
  (\textrm{id} \otimes \mu) (R) &= R_{13} R_{12}.
\end{aligned}
\]
其中 $A \otimes A$ 上有自然的代数结构 $(a \otimes b) (c \otimes d) = ac \otimes bd$，
元素 $R_{1 3} = \sum_i a_i \otimes 1 \otimes b_i \in A^{\otimes 3}$，以此类推。
:::

## 性质

- 对合映射自动可逆。
- Drinfeld 元素 $u = \sum_i S(b_i) a_i$。

```terms
辫 Hopf 代数:
  en: braided Hopf algebra
准三角 Hopf 代数:
  en: quasitriangular Hopf algebra
```
