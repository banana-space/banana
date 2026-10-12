---
title: 商环
categories: [一般环论]
navboxes: [非交换代数]
---

**商环**指将[[环]]商去[[双边理想]]得到的较小的环，
也就是将相差该理想元素的元素视为等同而得到的环。
其加法群是对应的[[商群]]。

例如，整数环商去理想 $n \mathbb{Z}$ 得到商环
$\mathbb{Z}/n \mathbb{Z}$，也常简记为 $\mathbb{Z}/n$ 或 $\mathbb{Z}_n$。
当 $n \neq 0$ 时，其元素为整数模 $n$ 的[[同余]]类，
而加法、乘法为整数模 $n$ 的相应运算。

## 定义

::: definition [商环]
设 $R$ 是[[环]]，$I \subset R$ 是[[双边理想]]。
考虑加法群的[[商群]] $R/I$，并在其上定义乘法
\[
(a + I)(b + I) = ab + I.
\]
赋予上述加法与乘法的环 $R/I$ 称为 $R$ 关于 $I$ 的**商环**。
:::

这里乘法的良定性用到了 $I$ 是双边理想。

自然的投影映射
\[
\pi \colon R \longrightarrow R/I, \qquad r \longmapsto r + I
\]
是[[满射|满]][[环同态]]，且 $\ker \pi = I$。
若 $R$ 是[[交换环]]，则 $R/I$ 也是交换环。
若 $R$ 的幺元为 $1_R$，则 $1_R + I$ 是 $R/I$ 的幺元。

若 $R$ 非交换且 $I \subset R$ 只是[[左理想]]而不是[[右理想]]，
则加法商群 $R/I$ 仍具有自然的左 $R$-[[模]]结构，
但 $R/I$ 上一般没有由 $R$ 的乘法诱导的环结构。
右理想的情形类似。

## 例子

- 对任意环 $R$，有 $R/(0) \simeq R$。
  又有 $R/R$ 是[[零环]]。

- 设 $n \in \mathbb{Z}_{\geq 0}$。
  整数环 $\mathbb{Z}$ 关于理想 $n \mathbb{Z}$ 的商环为
  $\mathbb{Z}/n \mathbb{Z}$。
  当 $n > 1$ 时，其元素为整数的同余类，
  加法和乘法由整数的加法和乘法取模 $n$ 得到。
  $\mathbb{Z}/n \mathbb{Z}$ 是[[域]]当且仅当
  $n$ 是[[素数]]。

- 商环 $\mathbb{R}[x]/(x^2 + 1)$ 同构于[[复数]]域 $\mathbb{C}$。
  事实上，同态
  $\mathbb{R}[x] \to \mathbb{C}$，$f \mapsto f (\mathrm{i})$
  的核为 $(x^2 + 1)$，像为 $\mathbb{C}$。
  由第一同构定理（@-thm:first-iso）得到该同构。

- 对任意 $a \in \mathbb{R}$，
  同态 $\mathbb{R}[x] \to \mathbb{R}$，$f \mapsto f (a)$
  的核为 $(x - a)$。
  因此 $\mathbb{R}[x]/(x - a) \simeq \mathbb{R}$。

- 设 $F$ 是域，$f \in F[x]$ 是次数为 $d > 0$ 的多项式。
  由带余除法，$F[x]/(f)$ 中每个元素都可唯一写成
  \[
  a_0 + a_1 x + \cdots + a_{d - 1} x^{d - 1} + (f),
  \qquad a_i \in F.
  \]
  换言之，每个陪集都有唯一的次数小于 $d$ 的代表元。

## 性质

### 泛性质

::: proposition [商环的泛性质]
设 $R$ 是环，$I \subset R$ 是双边理想，
$\pi \colon R \to R/I$ 是自然投影。
若 $f \colon R \to S$ 是[[环同态]]且 $f (I) = 0$，
则存在唯一的环同态
\[
\overline{f} \colon R/I \longrightarrow S
\]
使得 $f = \overline{f} \circ \pi$。
:::

### 同构定理

::: theorem [第一同构定理] {@thm:first-iso}
若 $f \colon R \to S$ 是[[环同态]]，则
\[
R/{\ker f} \simeq \operatorname{im} f,
\]
其中 $\operatorname{im} f$ 是 $f$ 的[[像]]。
这一同构由泛性质应用于 $f \colon R \to \operatorname{im} f$ 给出。
:::

::: theorem [第二同构定理]
设 $S \subset R$ 是[[子环]]，$I \subset R$ 是双边理想。
则 $S + I$ 是 $R$ 的子环，$S \cap I$ 是 $S$ 的双边理想，且
\[
S/(S \cap I) \simeq (S + I)/I.
\]
:::

::: theorem [第三同构定理]
设 $I \subset J \subset R$ 是双边理想。
则 $J/I$ 是 $R/I$ 的双边理想，且
\[
(R/I)/(J/I) \simeq R/J.
\]
:::

### 理想对应

::: theorem [理想对应定理]
设 $R$ 是环，$I \subset R$ 是双边理想。
自然投影 $\pi \colon R \to R/I$ 给出理想之间的一一对应：
\[
\{J \subset R \mid J \text{ 是双边理想且 } I \subset J\}
\simeq
\{K \subset R/I \mid K \text{ 是双边理想}\}.
\]
对应由 $J \mapsto J/I$ 给出。
:::

当 $R$ 是交换环时，上述对应将[[素理想]]映为素理想，
[[极大理想]]映为极大理想。
换言之，交换环 $R$ 中包含 $I$ 的素理想
与 $R/I$ 的素理想一一对应，
包含 $I$ 的极大理想与 $R/I$ 的极大理想一一对应。

### 整环与域

::: proposition [商环的整环判别]
设 $R$ 是交换环，$I \subset R$ 是理想。
则 $R/I$ 是[[整环]]当且仅当 $I$ 是素理想。
:::

::: proof
$R/I$ 是整环等价于 $R/I$ 非零（即 $I \neq R$），
且对任意 $a, b \in R$，若
\[
(a + I)(b + I) = 0,
\]
则 $a + I = 0$ 或 $b + I = 0$。
后一条件等价于：若 $ab \in I$，则 $a \in I$ 或 $b \in I$。
因此 $R/I$ 是整环当且仅当 $I \neq R$，
且对任意 $a, b \in R$，若 $ab \in I$，则 $a \in I$ 或 $b \in I$；
这恰为 $I$ 是[[素理想]]的定义。
:::

::: proposition [商环的域判别]
设 $R$ 是交换环，$I \subset R$ 是理想。
则 $R/I$ 是域当且仅当 $I$ 是极大理想。
:::

::: proof
若 $R/I$ 是域，则它只有两个理想 $(0)$ 与 $R/I$。
由理想对应定理，$R$ 中包含 $I$ 的理想只有 $I$ 与 $R$，
所以 $I$ 是极大理想。
反过来，若 $I$ 是极大理想，
则 $R/I$ 的理想只有 $(0)$ 与 $R/I$。
任取非零元 $\bar a \in R/I$，
其主理想 $(\bar a)$ 非零，故必为 $R/I$，
从而 $1 \in (\bar a)$，即 $\bar a$ 可逆。
因此 $R/I$ 是域。
:::

```terms
商环:
  en: quotient ring
  de: Quotientenring :m
  fr: anneau quotient :m
```
