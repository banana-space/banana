---
title: 完美数
aliases: [完全数]
categories: [初等数论]
---

**完美数**，又称**完全数**，是一种特殊的自然数：
它所有的真因子（即除了自身以外的约数）的和，恰好等于它本身。
如 $6$ 和 $28$ 是完美数：$6=1+2+3$，$28=1+2+4+7+14$。

## 定义

::: definition [完美数]
**完美数**是满足 $\sigma(n) = 2n$ 的正整数，
其中 $\sigma$ 是[[约数和]]函数。
:::

## 分类

### 偶完美数

偶完美数具有如下好的性质。

::: theorem [Euclid–Euler]
若$p=2^n-1$为素数，
则$2^{n-1}(2^n-1)$ 乃一完美数，
且无其他偶完美数存在。
:::

::: proof
首先在 $2^n - 1$ 为素数时，
$\sigma(2^{n-1}(2^n-1)) =
  (1 + 2 + \cdots + 2^{n-1})(1 + (2^n-1))
  = 2^n(2^n - 1)$。因此 $(2^n - 1)2^{n-1}$ 是完美数。

若$a$为一偶完美数，
设 $a=2^{n-1}u$，其中 $u>1$，且 $2\nmid u$。
则 $2^nu=2a=\sigma(a)=\frac{2^n-1}{2-1}\sigma(u)$。
故$\sigma(u)=\frac{2^nu}{2^n-1}=u+\frac u{2^n-1}$。
注意到 $u$及$u\over2^n-1$皆为$u$之因数。
而$\sigma(u)$为$u$的所有因数之和。
故$u$只有两个因数，即$u$为素数。
即有 $u = 2^n-1$ 为素数，定理得证。
:::

由此，偶完美数与形如 $2^n-1$ 之素数，
即 [[Mersenne 素数]]一一对应。
人们猜想有无穷个 Mersenne 素数，从而有无穷个完美数。

由此还可以算出前几个完美数：$6$、$28$、$496$、$8128$、$33550336$，
它们分别相应于 $n = 2, 3, 5, 7, 13$。

### 奇完美数

现在已用计算机证实在$10^{1500}$以下没有奇完美数。
由此人们猜想奇完美数不存在。

下面列出了一些奇完美数要满足的条件。

::: theorem [1953, Jacques Touchard]
若存在奇完美数，其形式必如$12m+1$或$36q+9$。
:::

为证明此结论，我们首先证明如下两个引理。

::: lemma [Euler]
奇完美数的形式必如 $4j+1$。
:::

::: proof
使用反证法，设$n$为完美数，且$n ≡ −1 \pmod 4$。
对 $n$ 的任意正约数 $d$，
有 $d + \frac{n}{d}\equiv 0 \pmod 4$。
因此
\[
\sigma(n) =
\sum_{d \mid n, d < \sqrt{n}} \left(d + \frac{n}{d}\right)
\equiv 0 \pmod 4
\]
但 $n ≡ -1 \pmod 4$，因此 $2n \neq \sigma(n)$，矛盾。
:::

::: lemma
若$n = 3k-1$，$k$是正整数，则$n$非完美数。
:::

::: proof
使用反证法，设$n$为完美数，且$n ≡ −1 \pmod 3$。
对 $n$ 的任意正约数 $d$，有 $d + \frac{n}{d}\equiv 0 \pmod 3$。
因此
\[
2\sigma(n) = \sum_{d \mid n} \left(d + \frac{n}{d}\right)
\equiv 0 \pmod 3
\]
但 $n≡ -1 \pmod 3$，因此 $2n \neq \sigma(n)$，矛盾。
:::

回到定理的证明。

::: proof
对奇完美数 $n$，
如 $3 \nmid n$，则 $n \equiv 1 \pmod 6$。
由 $n \equiv 1 \pmod 4$ 可得 $n \equiv 1 \pmod {12}$。

当 $3 \mid n$ 时，如 $9 \nmid n$，
则由[[约数和]]之积性 $4 = \sigma(3)$ 整除 $\sigma(n) = 2n$，矛盾。
因此 $9 \mid n$。则由 $n \equiv 1 \pmod 4$ 可得
$n \equiv 9 \pmod {36}$。
:::

```terms
完美数:
  en: perfect number
  de: vollkommene Zahl
  fr: nombre parfait
  grc: τέλειος ἀριθμός
  la: numerus perfectus
```
