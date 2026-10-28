---
title: 旋量群
aliases: [Spin(n)]
categories: [Lie 理论]
navboxes: [Lie 群]
---

<problems>
- “基本性质”一节的表格中，$\mathrm{SO}(p,q)$ 的单位连通分支与 $\mathrm{SO}(p)\times\mathrm{SO}(q)$ 同伦等价，因此 $p=2<q$ 或 $q=2<p$ 时基本群似乎应为 $\mathbb Z\times\mathbb Z_2$，$p,q>2$ 时似乎应为 $\mathbb Z_2\times\mathbb Z_2$；表格下方关于单连通性的结论似乎也需相应修改。
- “基本性质”一节中，按定义，$p,q\ge 1$ 时 $\mathrm{Spin}(p,q)$ 似乎映满 $\mathrm{SO}(p,q)$ 而有两个连通分支；文中所说连通、且为 $\mathrm{SO}(p,q)^0$ 的二重覆叠的，似乎应是它的单位连通分支。
</problems>

**旋量群** $\mathrm{Spin} (n)$
是一个[[实数|实]] [[Lie 群]]，
是实[[特殊正交群]] $\mathrm{SO} (n)=\mathrm{SO} (n;\mathbb R)$ 的二重[[覆叠空间|覆叠]]，
当 $n > 2$ 时是[[万有覆叠]]。
也就是说，有 Lie 群的[[正合列]]
\[
1 \to \mathbb{Z}_2 \to \mathrm{Spin} (n) \to \mathrm{SO} (n) \to 1.
\]

旋量群是[[旋量]]的变换群。
[[正交向量空间]]中保持[[单位向量]]的变换群是[[正交群]] $\mathrm{O} (n)$，
其中保持定向者构成的子群为 $\mathrm{SO} (n)$。
对应地，大致来说，保持单位旋量的变换群是[[扩旋量群]] $\mathrm{Pin} (n)$，
其中保持定向者构成的子群为 $\mathrm{Spin} (n)$。

## 定义

### 实旋量群

设 $V$ 是 $n$ 维实[[向量空间]]，带有[[二次型]] $Q \colon V \to \mathbb{R}$。
记 $\mathrm{Cl} (V)$ 为对应的 [[Clifford 代数]]，
$\mathrm{Cl} (V)^\times$ 为其中可逆元构成的乘法群。

::: definition [旋量群]
**旋量群**
\[
\mathrm{Spin} (V)
\subset \mathrm{Cl} (V)^\times
\]
定义为所有形如 $v_1 v_2 \cdots v_{2k}$
的元素构成的[[子群]]，
其中 $v_1, \dotsc, v_{2k} \in V$ 满足 $Q (v_i) = \pm 1$。

当 $Q$ [[正定二次型|正定]]时，得到的旋量群也记为 $\mathrm{Spin} (n)$。
若 $Q$ 非退化，且[[符号 (二次型)|符号]]为 $(p,q)$，得到的旋量群记为 $\mathrm{Spin} (p,q)$。
:::

### 复旋量群

::: definition [复旋量群]
**复旋量群** $\mathrm{Spin} (n; \mathbb{C})$
定义为旋量群 $\mathrm{Spin} (n)$ 的[[复化 (Lie 群)|复化]]。
:::

由于复二次型没有符号的区分，故 $\mathrm{Spin} (p, q)$
的复化就是 $\mathrm{Spin} (n; \mathbb{C})$，其中 $n = p + q$。

## 性质

### 基本性质

依定义 $\mathrm{Spin}(n)=\mathrm{Spin}(n,0)$。
另外，不定版本关于指标 $p,q$ 有对称性：
\[
\mathrm{Spin}(p,q)\cong\mathrm{Spin}(q,p).
\]

对于 $n=1$，旋量群 $\mathrm{Spin}(1)=\mathrm{Spin}(1;\mathbb C)=\{\pm 1\}\cong\mathbb Z_2$。

对于 $n=2$，旋量群 $\mathrm{Spin}(2)\cong\mathrm{SO}(2)$，
但它的具体作用在$V$上其实是 $\mathrm{SO}(2)$ 二重覆叠。
不定旋量群 $\mathrm{Spin}(1,1)\cong\mathrm{GL}(1;\mathbb R)=\mathbb R^\times$ 具有两个连通分支。
$\mathrm{Spin}(2;\mathbb C)\cong\mathrm{GL}(1;\mathbb C)=\mathbb C^\times$。

对于 $n=p+q>2$，
不定旋量群 $\mathrm{Spin}(p,q)$ 总是[[不定特殊正交群]]单位连通分支 $\mathrm{SO}(p,q)^0$ 的二重覆叠，
于是得到正合列
\[
1 \to \mathbb{Z}_2 \to \mathrm{Spin} (p,q) \to \mathrm{SO} (p,q)^0 \to 1.
\]
不过一般来说该覆叠未必是万有覆叠，因此在$p+q>2$的情况下$\mathrm{Spin}(p,q)$连通，但未必单连通。

群 $\mathrm{SO}(p,q)$ 的[[基本群]]记录在如下表格中。

| $\pi_1(\mathrm{SO}(p,q))$ | $p=0$ | $p=1$ | $p=2$ | $p>2$ |
| --- | --- | --- | --- | --- |
| **$q=0$** | $-$ | $0$ | $\mathbb Z$ | $\mathbb Z_2$ |
| **$q=1$** | $0$ | $0$ | $\mathbb Z$ | $\mathbb Z_2$ |
| **$q=2$** | $\mathbb Z$ | $\mathbb Z$ | $\mathbb Z\times\mathbb Z$ | $\mathbb Z$ |
| **$q>2$** | $\mathbb Z_2$ | $\mathbb Z_2$ | $\mathbb Z$ | $\mathbb Z_2$ |

只有对该表格中出现 $\mathbb Z_2$ 的那些对子 $(p,q)$，
群 $\mathrm{Spin}(p,q)$ 才是单连通的。

### 中心

旋量群的[[中心]]如下列出：

对于实旋量群，$n\le 2$ 时都是交换群。下面总讨论$n=p+q\ge 3$的情形。

\[
Z(\mathrm{Spin}(p,q))=\begin{cases}
  \mathbb Z_2, & p\equiv 1\bmod 2 \text{ 或 } q\equiv 1\bmod 2; \\
  \mathbb Z_4, & n\equiv 2\bmod 4 \text{ 且 } p,q\equiv 0\bmod 2; \\
  \mathbb Z_2\oplus\mathbb Z_2, & n\equiv 0\bmod 4 \text{ 且 } p,q\equiv 0\bmod 2.
\end{cases}
\]

对于复旋量群，$n\le 2$ 时也都是交换群。下面总讨论$n\ge 3$的情形。

\[
Z(\mathrm{Spin}(n;\mathbb C))=\begin{cases}
  \mathbb Z_2, & n\equiv 1\bmod 2; \\
  \mathbb Z_4, & n\equiv 2\bmod 4; \\
  \mathbb Z_2\oplus\mathbb Z_2, & n\equiv 0\bmod 4.
\end{cases}
\]

结论皆表现出模 $4$ 的周期性。

## 例子

一些低维的旋量群同构于某些别的已知 Lie 群，
这些同构中的一部分也被称为[[例外同形]]。

### $\mathrm{Spin} (n)$ 的例外同形

- $\mathrm{Spin} (1) \simeq \mathrm{O} (1) \simeq \mathbb{Z}_2\,$。

- $\mathrm{Spin} (2) \simeq \mathrm{U} (1) \simeq \mathrm{SO} (2)$。

- $\mathrm{Spin} (3) \simeq \mathrm{USp} (1) \simeq \mathrm{SU} (2)$。

- $\mathrm{Spin} (4) \simeq \mathrm{SU} (2) \times \mathrm{SU} (2)$。

- $\mathrm{Spin} (5) \simeq \mathrm{USp} (2)$。

- $\mathrm{Spin} (6) \simeq \mathrm{SU} (4)$。

### $\mathrm{Spin} (p,q)$ 的例外同形

对 $p\ge q\ge 1$，我们有：

- $\mathrm{Spin} (1,1) \simeq \mathrm{GL} (1;\mathbb R)$。

- $\mathrm{Spin} (2,1) \simeq \mathrm{SL} (2;\mathbb R) \simeq \mathrm{SU} (1,1)$。

- $\mathrm{Spin} (3,1) \simeq \mathrm{SL} (2;\mathbb C) \simeq \mathrm{Sp} (2;\mathbb C)$。

- $\mathrm{Spin} (4,1) \simeq \mathrm{USp} (1,1)$。

- $\mathrm{Spin} (5,1) \simeq \mathrm{SL} (2;\mathbb H)$。

- $\mathrm{Spin} (9,1) \simeq$“$\mathrm{SL} (2;\mathbb O)$”（因为[[八元数]] $\mathbb O$ 不结合，
  但是其具有正确的类比）。

- $\mathrm{Spin} (2,2) \simeq \mathrm{SL} (2;\mathbb R)\times\mathrm{SL} (2;\mathbb R)$。

- $\mathrm{Spin} (3,2) \simeq \mathrm{Sp} (4;\mathbb R)$。

- $\mathrm{Spin} (4,2) \simeq \mathrm{SU} (2,2)$。

- $\mathrm{Spin} (3,3) \simeq \mathrm{SL} (4;\mathbb R)$。

```terms
旋量群:
  en: spin group
  fr: groupe spinoriel :m
  de: Spin-Gruppe :f
```
