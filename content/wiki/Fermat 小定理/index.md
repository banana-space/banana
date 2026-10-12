---
title: Fermat 小定理
categories: [初等数论]
notices:
  - name: 问题
    items:
      - 不符合本站的写作风格。
      - 行文风格不符合写作指引的要求。
      - 术语使用不符合术语规范。
      - “推广”一节的定理与 AKS 算法的通常表述相比，似乎缺少“$n$ 不是完全幂”的条件，以及 $r<n$ 时对 $1\leq a\leq r$ 的最大公因数条件。
navboxes: [初等数论]
---

**Fermat小定理**是[[初等数论]]中的核心定理之一，
由皮埃尔·德·费马在 17 世纪提出。
它刻画了素数模数下的幂运算性质，[[模运算]]的理论基础。

Fermat小定理大致是说，假如a是一个整数，p是一个质数，那么$ a^p - a $是p的倍数。

## 定义

::: theorem [费马小定理]
设 \( p \) 为素数，\( a \) 为整数
且满足 \( \gcd(a, p) = 1 \)（即 \( a \) 与 \( p \) 互质），则：
\[
a^{p-1} \equiv 1 \pmod{p}
\]
:::

::: theorem [欧拉定理]
推广到任意正整数模数 \( n \)：若 \( \gcd(a, n) = 1 \)，则：
\[
a^{\phi(n)} \equiv 1 \pmod{n}
\]
其中 \( \phi(n) \) 为[[Euler 函数|欧拉函数]]，表示小于 \( n \) 且与 \( n \) 互质的正整数的个数。
:::

## 证明

组合学证明

::: proof
考虑集合 \( S = \{a, 2a, 3a, \dots, (p-1)a\} \)。
由于 \( a \) 与 \( p \) 互质，模 \( p \) 下这些元素两两不同余且均不为零。因此：
\[
\prod_{k=1}^{p-1} ka \equiv \prod_{k=1}^{p-1} k \pmod{p}
\]
即：
\[
a^{p-1} \cdot (p-1)! \equiv (p-1)! \pmod{p}
\]
因 \( (p-1)! \) 与 \( p \) 互质，两边可约去，得 \( a^{p-1} \equiv 1 \pmod{p} \)。
:::

[[群论]]证明

::: proof
模 \( p \) 的缩剩余系 \( (\mathbb{Z}/p\mathbb{Z})^\times \) 构成一个 \( p-1 \) 阶乘法群。
根据拉格朗日定理，任意元素 \( a \) 的阶整除群阶，故 \( a^{p-1} \equiv 1 \pmod{p} \)。
:::

## 例子

::: example [数值验证]
取 \( p = 7 \)（素数），\( a = 3 \)（满足 \( \gcd(3,7)=1 \)）。计算：
\[
3^{7-1} = 3^6 = 729 \equiv 1 \pmod{7} \quad (\text{因 } 729 = 7 \times 104 + 1)
\]
:::

::: example [简化计算]
求 \( 2^{2024} \mod 11 \)。由于 \( 11 \) 是素数且 \( \gcd(2,11)=1 \)，根据费马小定理：
\[
2^{10} \equiv 1 \pmod{11} \Rightarrow 2^{2024} = 2^{10 \times 202 + 4} \equiv 1^{202} \cdot 2^4 = 16 \equiv 5 \pmod{11}
\]
:::

## 应用

- **素性检验**：费马素性测试（尽管存在伪素数如卡迈克尔数）。

- **RSA 加密**：用于生成公钥与私钥的逆元计算。

- **多项式同余**：快速化简高次多项式模素数表达式。

## 推广

AKS素性检测算法作为Fermat小定理的推广，适用于任意整数n的素性判断。

::: lemma
当且仅当对任意（或某个）与n互质的a，多项式同余式
$$
( x - a )^n \equiv x^n - a \pmod n
$$
成立时，整数$ n \geq 2$为素数。
:::

::: proof
根据[[Freshman之梦定理]]，n的素性等价于对所有（或某个）a，有
$$
( x - a )^n \equiv x^n - a^n \pmod n
$$
当$n$为素数时，由Fermat小定理可得
$$
a^n \equiv a \pmod n
$$
从而完成约简。
:::

设$r$为整数，$a$为与$r$互质的整数，定义$ \operatorname{ord}_{r} (a)  $为$a$模$r$的乘法阶
记$ \log n $为$n$的二进制对数，$ \phi $表示欧拉总计函数
（即 $ \phi (r)$ 表示环 $\mathbb{Z}/(r)$ 中可逆元的个数）

::: theorem
对给定$n$，设$r$为满足 $ \operatorname{ord}_r (n) \gt (\log n )^2$的最小正整数，
则$n$为素数当且仅当满足以下条件之一：

1. $n \leq r$，且对于任意 $1 \leq a \leq r$，$\gcd{ (a, n) }=1$ 或 $\gcd{ (a,n)}=n$；

2. $r < n$，且对任意满足 $1 \leq a \leq \sqrt{\phi (r)} · \log n$ 的整数 $a$，多项式同余式
   $$
   ( x - a )^n \equiv x^n - a \pmod{x^r - 1, n}
   $$
   成立。
:::

## 参考文献

```bibliography
HardyWright2008:
  type: book
  author: [G. H. Hardy, E. M. Wright]
  title: An Introduction to the Theory of Numbers
  year: 2008
  edition: 6
  publisher: Oxford University Press
Euler1736:
  type: article
  author: Leonhard Euler
  year: 1736
  title: Theorematum quorundam ad numeros primos spectantium demonstratio
  journaltitle: Commentarii academiae scientiarum Petropolitanae
  pages: 141–146
Koblitz1987:
  type: book
  author: Neal Koblitz
  title: A Course in Number Theory and Cryptography
  year: 1987
  publisher: Springer
```

```terms
Fermat 小定理:
  en: Fermat's little theorem
  fr: Petit théorème de Fermat
  el: Το μικρό θεώρημα του Φερμά
  de: Fermats kleines Theorem
```
