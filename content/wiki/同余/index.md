---
title: 同余
categories: [初等数论]
navboxes: [初等数论]
---

**同余**是[[初等数论]]中的基本概念，大致来说是[[模算术]]下的一种等价关系。

## 定义

::: definition [同余的[[整除]]定义]
设 $a,b,m$ 为整数，若 $m$ [[整除]] $a - b$，
则称 $a$ 与 $b$ 关于模 $m$ **同余**。记为
\[
a \equiv b \pmod{m}.
\]
:::

::: definition [同余的[[模算术]]定义]
设 $a,b,m$ 为整数，若 $a \bmod m = b \bmod m$，
则称 $a$ 与 $b$ 关于模 $m$ **同余**。记为
\[
a \equiv b \pmod{m}.
\]
:::

## 例子

- 任意两个整数关于模 $\pm 1$ 同余。

- $r, m + r, 2m + r, \dots, km + r$ 两两关于模 $m$ 同余，其中 $k, r$ 为整数，$m$ 为非零整数。

## 性质

如无特别说明，本节 $a, b, c, d, k$ 均为整数，$m$ 为非零整数。

### 基本性质

- 自反性：$a \equiv a \pmod{m}$。

- 对称性：若 $a \equiv b \pmod{m}$，则 $b \equiv a \pmod{m}$。

- 传递性：
  若 $a \equiv b \pmod{m}$ 且 $b \equiv c \pmod{m}$，
  则 $a \equiv c \pmod{m}$。

### 算术性质

若 $a \equiv b \pmod{m}$，$c \equiv d \pmod{m}$，则有如下性质：

- 模意义下加减法：$a \pm c \equiv b \pm d \pmod{m}$。

- 模意义下乘法：$ac \equiv bd \pmod{m}$。
