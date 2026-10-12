---
title: 超几何函数
categories: [特殊函数]
notices:
  - name: 问题
    items:
      - “超几何方程在正则奇点处的解”“变换公式”各节需要扩充。
      - “积分表示”一节中 $z = 1$ 时的公式似乎还需要条件 $\operatorname{Re}(c-a-b) > 0$。
---

**超几何函数**是一种由超几何级数定义的特殊函数，
它可以用来表示很多种类的函数。

## 定义

::: definition [超几何方程]
**超几何方程**定义为
\[
z(1-z)\frac{\mathrm{d}^2w}{\mathrm{d}z^2}+(c-(a+b+1)z)\frac{\mathrm{d}w}{\mathrm{d}z}-abw=0
\]
容易求出其在$0$邻域的级数解：
\[
\begin{aligned}
  w_1&=\sum_{n\geq 0}\frac{(a)_n(b)_n}{n!(c)_n}z^n\\
  w_2&=\sum_{n\geq 0}\frac{(a-c+1)_n(b-c+1)_n}{n!(2-c)_n}z^{n+1-c}
\end{aligned}
\]
其中$(\cdot)_n$是 Pochhammer 符号，定义为$(x)_n=\Gamma(n+x)/\Gamma(x)$。
:::

::: definition [超几何函数]
我们将超几何方程第一个解$w_1$定义为**超几何函数**${\operatorname{_2F}_1}(a,b;c;z)$，
在级数的收敛域内有
\[
{\operatorname{_2F}_1}(a,b;c;z)=\sum_{n\geq 0}\frac{(a)_n(b)_n}{n!(c)_n}z^n
\]
那么此时超几何方程的两个解可以分别被表示为
\[
\begin{aligned}
  w_1&={\operatorname{_2F}_1}(a,b;c;z)\\
  w_2&=z^{1-c}{\operatorname{_2F}_1}(a-c+1,b-c+1;2-c;z)
\end{aligned}
\]
:::

## 例子

可以用超几何函数表示许多特殊函数。下面列举了一些例子，
它们有些是初等函数，有些不是。

- $\dfrac{\log(1+z)}{z} = \operatorname{_2F}_1 (1,1;2;-z); $

- $\dfrac{1}{2z}\log\left(\dfrac{1+z}{1-z}\right) = \operatorname{_2F}_1 \left(\dfrac{1}{2},1;\dfrac{3}{2};z^2\right); $

- $\dfrac{\arcsin z}{z} = \operatorname{_2F}_1 \left(\dfrac{1}{2},\dfrac{1}{2};\dfrac{3}{2};z^2\right); $

- $\dfrac{\arctan z}{z} = \operatorname{_2F}_1 \left(\dfrac{1}{2},1;\dfrac{3}{2};-z^2\right); $

- $K(k) = \dfrac{\pi}2 \operatorname{_2F}_1 \left(\dfrac{1}{2},\dfrac{1}{2};1;k^2\right); $

- $E(k) = \dfrac{\pi}2 \operatorname{_2F}_1 \left(\dfrac{1}{2},-\dfrac{1}{2};1;k^2\right). $

其中 $K(k)$、$E(k)$ 分别表示第一、第二类完全[[椭圆积分]]：

\[
K(k) = \int_{0}^{1} \frac{\mathrm dt}{\sqrt{(1-t^2)(1-k^2t^2)}}, \quad E(k) = \int_{0}^{1} \sqrt{\frac{1-k^2t^2}{1-t^2}} \mathrm dt.
\]

## 性质

### 导数

通过逐项求导可以计算出超几何函数的导数：
\[
\frac{\mathrm d^n}{\mathrm dz^n} \operatorname{_2F}_1 (a,b;c;z) = \frac{(a)_n (b)_n}{(c)_n} \operatorname{_2F}_1 (a+n,b+n;c+n;z).
\]

### 解析延拓

通过计算，可以得出超几何级数的收敛半径是 $1$。如果 $|z| \geq 1$，仍可以
通过解析延拓得到超几何函数的值，这需避开支点 $0$、$1$。具体公式为：
\[
\operatorname{_2F}_1 (a,b;c;z) = {\frac {\Gamma (b-a)\Gamma (c)(-z)^{-a}}{\Gamma (b)\Gamma (c-a)}}\sum _{k=0}^{\infty }{\frac {(a)_{k}(a-c+1)_{k}z^{-k}}{k!(a-b+1)_{k}}}+{\frac {\Gamma (a-b)\Gamma (c)(-z)^{-b}}{\Gamma (a)\Gamma (c-b)}}\sum _{k=0}^{\infty }{\frac {(b)_{k}(b-c+1)_{k}z^{-k}}{k!(-a+b+1)_{k}}},
\]
其中 $|z| \geq 1$，$a - b \notin \mathbb{Z}$。

### 积分表示

超几何函数可以用 [[Euler 积分]]表示。

::: theorem
如果 $|\arg(1 - z)| < \pi$，$0 < \operatorname{Re}(a) < \operatorname{Re}(c)$，则
\[
\operatorname{_2F}_1 (a,b;c;z) = \frac{1}{\mathrm{B} (a, c-a)} \int_{0}^{1} t^{a-1} (1 - t)^{c-a-1} (1 - tz)^{-b} \mathrm dt.
\]
:::

如果令 $z = 1$，则不难得出
\[
\operatorname{_2F}_1 (a,b;c;1) = \frac{\Gamma(c) \Gamma(c-a-b)}{\Gamma(c-a) \Gamma(c-b)},
\]
它被称为 Gauss 原理。

### 超几何方程在正则奇点处的解

### 变换公式

```terms
超几何函数:
  en: hypergeometric function
  fr: fonction hypergéométrique
  de: hypergeometrische Funktion
  ja: 超<ちょう>幾<き>何<か>関<かん>数<すう>
```
