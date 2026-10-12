---
title: Cartan 公式
aliases: [Cartan 魔术公式]
categories: [微分几何]
navboxes: [微分几何]
---

**Cartan 公式**（也称为**Cartan 魔术公式**或**Cartan 同伦公式**）
是[[微分几何]]中的重要公式，以[[Élie Cartan]]命名。
该公式说明，[[微分形式]]的[[Lie 导数]]
等于外微分 $d$ 和[[缩并]]算子 $\iota$ 的[[交换子|分次交换子]]。

## 公式

::: theorem [Cartan 公式]
对任意[[光滑流形]] $M$，非负整数 $p$，
$M$ 上的非零[[向量场]] $X$ 以及[[微分形式]] $\omega\in\mathcal A^p(M)$，
如下的等式恒成立：
\[
\mathcal L_X\omega=d(\iota_X\omega)+\iota_X(d\omega).
\]
这里 $\mathcal L_X$、$\iota_X$、$d$ 分别表示求 Lie 导数、缩并、外微分。
:::

换言之，有算子的等式
\[
\mathcal L_X=d\iota_X+\iota_Xd.
\]

## 证明

### 计算方法

我们只需在局部计算以证明这一公式。
由于向量场的局部[[可积性]]，
取坐标卡 $(\xi^1,\cdots,\xi^n)$ 使 $X=\partial_1=\frac{\partial}{\partial \xi^1}$。
结合Lie 导数、外微分和缩并的线性性，只需对单项的 $p$-形式证明即可。
按照其形式是否包含$d\xi^1$，可以分成两种情况讨论：

- 对包含 $d\xi^1$ 者，不妨设 $\omega=f\ d\xi^1\wedge d\xi^2\wedge\cdots\wedge d\xi^p$，
  此时计算得到
  \[
  \begin{aligned}
  \iota_X\omega &= f\ d\xi^2\wedge\cdots\wedge d\xi^p, \\
  d(\iota_X\omega) &= (\partial_1 f)\ d\xi^1\wedge d\xi^2\wedge\cdots\wedge d\xi^p+\sum_{i=p+1}^n(\partial_i f)\ d\xi^i\wedge d\xi^2\wedge\cdots\wedge d\xi^p, \\
  d\omega &= \sum_{i=p+1}^n (\partial_i f)\ d\xi^i\wedge d\xi^1\wedge d\xi^2\wedge \cdots\wedge d\xi^p, \\
  \iota_X(d\omega) &= -\sum_{i=p+1}^n (\partial_i f)\ d\xi^i\wedge d\xi^2\wedge \cdots\wedge d\xi^p, \\
  \mathcal L_X\omega &= (\partial_1 f)\ d\xi^1\wedge d\xi^2\wedge\cdots\wedge d\xi^p.
  \end{aligned}
  \]

- 对不包含 $d\xi^1$ 者，不妨设 $\omega=f\ d\xi^2\wedge\cdots\wedge d\xi^{p+1}$，
  此时计算得到
  \[
  \begin{aligned}
  \iota_X\omega &= 0, \\
  d(\iota_X\omega) &= 0, \\
  d\omega &= (\partial_1 f)\ d\xi^1\wedge d\xi^2\wedge\cdots\wedge d\xi^{p+1}+\sum_{i=p+2}^n (\partial_i f)\ d\xi^i\wedge d\xi^2\wedge \cdots\wedge d\xi^{p+1}, \\
  \iota_X(d\omega) &= (\partial_1 f)\ d\xi^2\wedge\cdots\wedge d\xi^{p+1}, \\
  \mathcal L_X\omega &= (\partial_1 f)\ d\xi^2\wedge\cdots\wedge d\xi^{p+1}.
  \end{aligned}
  \]

由此不难检查公式成立。

### 内蕴方法

[[陈省身]]给出了Cartan 公式的一种内蕴证明方法。
对于[[外代数]] $\mathcal A^\bullet:=\bigoplus_k\mathcal A^k(M)$，注意到：

- 取外微分 $d:\mathcal A^k\to\mathcal A^{k+1}$ 是一个反微分，即它满足线性性以及反乘积公式：
  对 $\alpha\in\mathcal A^k(M)$、$\beta\in\mathcal A^l(M)$，
  \[
  d(\alpha\wedge\beta)=(d\alpha)\wedge\beta+(-1)^k\alpha\wedge(d\beta).
  \]

- 取缩并 $\iota_X:\mathcal A^{k+1}\to\mathcal A^k$ 也是一个反微分。

- 取Lie 导数 $\mathcal L_X:\mathcal A^k\to\mathcal A^k$ 是一个微分，
  即它满足线性性以及乘积公式（即标准的[[Leibniz 法则]]）：
  \[
  \mathcal L_X(\alpha\wedge\beta)=(\mathcal L_X\alpha)\wedge\beta+\alpha\wedge(\mathcal L_X\beta).
  \]

- 另一方面，反交换子 $(d\circ\iota_X+\iota_X\circ d):\mathcal A^k\to\mathcal A^k$ 是一个微分。

因此为了检查 $(d\iota_X+\iota_Xd)$ 和 $\mathcal L_X$ 两个微分相等，只需对生成元检查，
局部上这些生成元为光滑函数 $f$ 和恰当 $1$-形式 $df$。
再注意到 $(d\iota_X+\iota_Xd)$ 和 $\mathcal L_X$ 都和取外微分可交换，由此只需对 $f$ 检查：
\[
\mathcal L_Xf=X(f)=\iota_X(df), \quad \iota_X(f)=0.
\]
故Cartan 公式对外代数中一般的微分都成立。

```terms
Cartan 公式:
  en: Cartan formula
  de: Cartan-Formel
```
