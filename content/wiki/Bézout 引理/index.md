---
title: Bézout 引理
aliases: [Bézout 等式, Bézout 恒等式]
categories: [初等数论]
notices:
  - name: 消歧义
    about: '[[初等数论]]中关于最大公因子的结论'
    see:
      - topic: '[[代数几何]]中关于曲线交点个数的定理'
        page: 'Bézout 定理'
navboxes: [初等数论]
---

在[[初等数论]]中，**Bézout 引理**（又称 **Bézout 等式**）是说，
[[整数]] $a$、$b$ 的[[最大公因子]] $d$
可以写成 $a$、$b$ 的整系数的[[线性组合]]，
即存在整数 $x$、$y$，使得 $ax + by = d$。

## 陈述与证明

### 对整数

::: theorem [Bézout 引理] {@thm:bezout}
设 $a$、$b$ 是[[整数]]，$d = \gcd (a, b)$。则存在整数 $x$、$y$，使得
\[
ax + by = d .
\]
:::

::: proof
若 $a = b = 0$，结论显然成立。
否则，不妨设 $a \neq 0$（否则交换 $a$、$b$）。

考虑[[集合]]
\[
S = \{ ax + by \mid x, y \in \mathbb{Z} \} \cap \mathbb{Z}_{> 0} .
\]
因为 $a$、$-a$ 其一必属于 $S$，所以 $S$ [[空集|非空]]。
由于[[自然数]]具有[[良序集|良序性]]，$S$ 有[[最小元]]，设为 $m$。
下证 $m = \gcd (a, b)$。

考虑 $a$ 除以 $m$ 的[[带余除法]]，有 $a = mq + r$，其中 $0 \leq r < m$。
因为 $m \in S$，所以存在 $s, t \in \mathbb{Z}$，使得 $m = as + bt$，从而
\[
\begin{aligned}
  r
  &= a - mq \\
  &= a - (as + bt) q \\
  &= a (1 - sq) + b (-tq) \in S \cup \{ 0 \} .
\end{aligned}
\]
然而 $m$ 是 $S$ 中的最小元，这连同 $0 \leq r < m$ 说明 $r = 0$。
所以 $m \mid a$；同理可得 $m \mid b$。

下证 $m$ 是 $a$、$b$ 的所有公因子中最大者。
设 $c$ 是 $a$、$b$ 的公因子，$a = cu$，$b = cv$，则
\[
m = as + bt = cus + cvt = c (us + vt) ,
\]
即 $c \mid m$。由于 $m > 0$，这说明 $c \leq m$。
:::

上述证明只用到了带余除法，以及 $S$ 中存在“最小”的元素。
因此在 [[Euclid 整环]] $R$ 中，
同样的论证仍然成立：
例如，Bézout 引理对[[域]]上的一元[[多项式]]也成立。

### 对主理想整环

更一般地，Bézout 引理在[[主理想整环]]中成立。
回忆在一般的[[整环]]中，称 $d$ 是 $a$、$b$ 的 **[[最大公因子]]**，
是指 $d$ 是 $a$、$b$ 的公因子，
并且 $a$、$b$ 的任意公因子都整除 $d$。
最大公因子若存在，则在相差可逆元的意义下唯一。

::: theorem [主理想整环中的 Bézout 引理] {@thm:bezout-pid}
设 $R$ 是主理想整环，$a, b \in R$，
则 $a$、$b$ 的最大公因子存在，
并且对 $a$、$b$ 的任意最大公因子 $d$，存在 $x, y \in R$，使得
\[
ax + by = d .
\]
:::

::: proof
由于 $R$ 是主理想整环，[[理想]] $(a, b)$ 是[[主理想]]，
设 $(a, b) = (d_0)$。
由于 $d_0 \in (a, b)$，存在 $x_0, y_0 \in R$，使得 $a x_0 + b y_0 = d_0$。

由于 $a, b \in (d_0)$，$d_0$ 是 $a$、$b$ 的公因子。
若 $c$ 是 $a$、$b$ 的公因子，则 $c$ 整除 $a x_0 + b y_0 = d_0$。
因此 $d_0$ 是 $a$、$b$ 的最大公因子。

设 $d$ 是 $a$、$b$ 的任意最大公因子，则 $d \mid d_0$ 且 $d_0 \mid d$。
由于 $R$ 是整环，存在可逆元 $u \in R$，使得 $d = u d_0$
（若 $d_0 = 0$，则 $d = 0$，取 $u = 1$）。
令 $x = u x_0$，$y = u y_0$，即得 $ax + by = d$。
:::


```terms
Bézout 引理:
  en: Bézout's lemma

Bézout 等式:
  en: Bézout's identity
  fr: identité de Bézout :f
```
