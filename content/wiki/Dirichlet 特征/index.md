---
title: Dirichlet 特征
categories: [初等数论]
---

在[[数论]]中，**Dirichlet 特征**是指有限交换群
$(\mathbb{Z}/q\mathbb{Z})^\times$ 的[[特征 (群论)|特征]]。
Dirichlet 特征可以以自然的方式看成[[数论函数]]。
Dirichlet 特征的概念可以推广到[[数域]]上，成为 [[Hecke 特征]]。
从现代[[代数数论]]的观点看，Dirichlet 特征就是[[理元群]]
$\mathbb{I}_\mathbb{Q} = \mathrm{GL}_1(\mathbb{A}_\mathbb{Q})$
上的[[自守形式]]。

## 定义

::: definition
对正整数 $q$，模 $q$ 的 **Dirichlet 特征**是指交换群
$(\mathbb{Z}/q\mathbb{Z})^\times$ 的特征，一般用希腊字母 $\chi$ 记之。
可将 Dirichlet 特征 $q$ 自然地看成数论函数，对 $n \in \mathbb{Z}_+$：
\[
\chi(n) = \begin{cases}
  \chi(n \bmod q) & \gcd(n, q) = 1\\
  0 & \gcd(n, q) \ne 1,
\end{cases}
\]
其中 $n \bmod q$ 是指 $n$ 的剩余类看作 $(\mathbb{Z}/q\mathbb{Z})^\times$ 的元素。
:::

容易验证，Dirichlet 特征作为数论函数总是完全乘性的。

::: example [主特征]
模 $q$ 的**主特征**是指群 $(\mathbb{Z}/q\mathbb{Z})^\times$
的平凡特征，记作 $\mathbb{1}_q$，不引起歧义时将 $q$
略去。作为数论函数，它是
\[
\mathbb{1}(n) = \begin{cases}
  1 & \gcd(n, q) = 1\\
  0 & \gcd(n, q) \ne 1
\end{cases}
\]
:::

::: example [二次特征]
对整数 $d \equiv 0,1 \pmod 4$，$d \ne 0$，
可定义模 $|d|$ 的 Dirichlet 特征
$\chi(n) = \left(\frac{d}{n}\right)$，
其中 $\left(\frac{\cdot}{\cdot}\right)$
是 [[Kronecker 符号]]。
它只取值 $0, \pm 1$，故其对应 $(\mathbb{Z}/|d|\mathbb{Z})^\times$
的二次特征。对 $d \ne 1$ 无平方因子，记二次域
$K = \mathbb{Q}(\sqrt{d})$，有
\[
\chi(p) = \begin{cases}
  1 & \text{$p$ 在 $K$ 中分裂}\\
  -1 & \text{$p$ 在 $K$ 中不分裂}\\
  0 & \text{$p$ 在 $K$ 中分歧}.
\end{cases}
\]
:::

## 本原特征与导子

::: definition
对正整数 $q_1 \mid q$，有自然的同态
$\phi \colon (\mathbb{Z}/q\mathbb{Z})^\times \to (\mathbb{Z}/q_1\mathbb{Z})^\times$。
对模 $q_1$ 的 Dirichlet 特征 $\chi_1$，称其沿 $\phi$
的拉回 $\chi_1\circ\phi$ 为其**诱导**的模 $q$ 特征。
:::

::: definition
对模 $q$ Dirichlet 特征 $\chi$，若其不由任何模 $q_1$ 特征，
$q_1 \mid q$，$q_1 < q$ 诱导，称其为**本原特征**。
:::

::: theorem
对模 $q$ Dirichlet 特征 $\chi$，存在唯一正整数 $f$ 和模 $f$
本原特征 $\chi_0$，使得 $\chi$ 由 $\chi_0$ 诱导。正整数 $f$
称为 $\chi$ 的**导子**。
:::

::: proof
考虑所有对子 $(q_1, \chi_1)$ 使得 $\chi_1$ 是模 $q_1$
的 Dirichlet 特征，且 $\chi_1$ 诱导 $\chi$。选择其中 $q_1$
最小的，那么 $\chi_1$ 自动是本原特征。下面来证唯一性，假设
$(q_1, \chi_1)$ 和 $(q_2, \chi_2)$ 满足 $\chi_1, \chi_2$
皆本原，皆诱导 $\chi$。记 $q_3 = \gcd(q_1, q_2)$。我声称有如下
（有限交换群范畴中的）拉回图表：
\[
\begin{tikzcd}
  {\widehat{(\mathbb{Z}/q\mathbb{Z})^\times}} & {\widehat{(\mathbb{Z}/q_1\mathbb{Z})^\times}} \\
  {\widehat{(\mathbb{Z}/q_2\mathbb{Z})^\times}} & {\widehat{(\mathbb{Z}/q_3\mathbb{Z})^\times}}
  \arrow[from=1-2, to=1-1]
  \arrow[from=2-1, to=1-1]
  \arrow[from=2-2, to=1-2]
  \arrow[from=2-2, to=2-1]
\end{tikzcd}
\]
因为对偶是范畴等价，只需证如下方块是推出图表：
\[
\begin{tikzcd}
  {(\mathbb{Z}/q\mathbb{Z})^\times} & {(\mathbb{Z}/q_1\mathbb{Z})^\times} \\
  {(\mathbb{Z}/q_2\mathbb{Z})^\times} & {(\mathbb{Z}/q_3\mathbb{Z})^\times}
  \arrow[from=1-1, to=1-2]
  \arrow[from=1-1, to=2-1]
  \arrow[from=1-2, to=2-2]
  \arrow[from=2-1, to=2-2]
\end{tikzcd}
\]
即只需证
\[
(\mathbb{Z}/q_3\mathbb{Z})^\times
= ((\mathbb{Z}/q_1\mathbb{Z})^\times \times (\mathbb{Z}/q_2\mathbb{Z})^\times)
/\{(a \bmod q_1, a^{-1} \bmod q_2) : a \in (\mathbb{Z}/q\mathbb{Z})^\times\}
\]
然而由[[孙子定理]]容易知道
\(\{(a \bmod q_1, a^{-1} \bmod q_2) : a \in (\mathbb{Z}/q\mathbb{Z})^\times\}
  = \{(a_1, a_2) \in (\mathbb{Z}/q_1\mathbb{Z})^\times \times (\mathbb{Z}/q_2\mathbb{Z})^\times : a_1 \bmod q_3 = a_2^{-1} \bmod q_3\}\)，
从而上面的商群就是 $(\mathbb{Z}/q_3\mathbb{Z})^\times$。

从而，存在模 $q_3$ Dirichlet 特征 $\chi_3$ 诱导 $\chi_1$ 与 $\chi_2$。
由 $\chi_1, \chi_2$ 本原知 $q_1 = q_2 = q_3$，$\chi_1 = \chi_2 = \chi_3$。
:::

```terms
Dirichlet 特征:
  en: Dirichlet character
本原特征:
  en: primitive character
导子:
  en: conductor
```
