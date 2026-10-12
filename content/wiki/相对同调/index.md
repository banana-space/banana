---
title: 相对同调
aliases: [相对上同调]
categories: [同调论]
notices:
  - name: 问题
    items:
      - “与商空间同调的比较”一节定理证明中“含入映射 $(X, Y) \to (X, N)$ 是空间对的同伦等价”似乎一般不成立；同构 $H_n (X, Y; A) \simeq H_n (X, N; A)$ 可由三元组长正合列与 $H_n (N, Y; A) = 0$ 得到。
navboxes: [代数拓扑]
---

在[[代数拓扑]]中，**相对同调**是[[奇异同调]]对[[空间对]]
$(X, Y)$ 的推广，其中 $Y$ 是[[拓扑空间]] $X$ 的[[子空间]]。
相对同调将完全落在 $Y$ 中的链视为 $0$，
例如若一条链的边界完全落在 $Y$ 中，
则在相对同调中，这样的链看起来就像没有边界一样。

相对同调群记作 $H_n (X, Y; A)$，
其中 $A$ 是 [[Abel 群]]。其与 $H_n (Y; A)$、$H_n (X; A)$
满足自然的[[长正合列]]。
在合适的假设下，相对同调同构于[[商空间]] $X / Y$ 的同调。

相应地，**相对上同调**是与相对同调对偶的[[上同调]]理论，
记作 $H^n (X, Y; A)$。它也满足相应的长正合列。

当 $Y$ 是[[单点空间]]时，
相对同调和相对上同调分别给出[[约化同调]]和[[约化上同调]]。

## 定义

::: definition [空间对]
设 $X$ 是拓扑空间，$Y \subset X$ 是赋予[[子空间拓扑]]的子集。
称 $(X, Y)$ 为**空间对**。

从空间对 $(X, Y)$ 到空间对 $(X', Y')$ 的**连续映射**
是指[[连续映射]] $f \colon X \to X'$，满足 $f (Y) \subset Y'$。

以空间对为对象、连续映射为态射的范畴记为 $\mathsf{Top}^{(2)}$。
:::

::: definition [相对链复形，相对同调]
设 $(X, Y)$ 是空间对，$A$ 是 Abel 群。
记 $(C_\bullet (X; A), \partial)$ 与
$(C_\bullet (Y; A), \partial)$ 为相应的[[奇异链复形]]。
通过[[含入映射]] $i \colon Y \hookrightarrow X$ 将 $C_\bullet (Y; A)$ 视为
$C_\bullet (X; A)$ 的子复形。

对[[自然数]] $n$，定义
$(X, Y)$ 的 $A$-系数 $n$ 维**相对奇异链**构成的 Abel 群为[[商群]]
\[
C_n (X, Y; A) = C_n (X; A) / C_n (Y; A),
\]
配以诱导的边界映射
\[
\partial_n \colon C_n (X, Y; A) \longrightarrow C_{n-1} (X, Y; A),
\quad [c] \longmapsto [\partial c].
\]
约定 $C_{-1} (X, Y; A) = 0$。
于是 $(C_\bullet (X, Y; A), \partial)$ 构成链复形，
称为 $(X, Y)$ 的**相对奇异链复形**。

定义 $(X, Y)$ 的 $A$-系数 $n$ 阶**相对同调**为该链复形的 $n$ 阶[[链同调]]：
\[
H_n (X, Y; A)
= \ker \partial_n / \operatorname{im} \partial_{n+1}.
\]
:::

上述定义也可以像定义[[奇异同调]]时一样用闭链和边界链写出来：
$n$ 维**相对闭链**即 $X$ 中边界落在 $Y$ 内的 $n$ 维奇异链所在的陪集；
$n$ 维**相对边界链**即 $X$ 中 $n + 1$ 维链的边界所在的陪集。

::: definition [相对上链复形，相对上同调]
设 $(X, Y)$ 是空间对，$A$ 是 [[Abel 群]]。
定义 $(X, Y)$ 的 $A$-系数 $n$ 维**相对奇异上链**构成的 Abel 群为
\[
C^n (X, Y; A)
= \operatorname{Hom}_\mathbb{Z} (C_n (X, Y; \mathbb{Z}), A).
\]
定义余边界映射
\[
d^n \colon C^n (X, Y; A) \longrightarrow C^{n+1} (X, Y; A)
\]
为相对边界映射的对偶，即
\[
(d^n \varphi) ([c]) = \varphi ([\partial c]).
\]
则 $(C^\bullet (X, Y; A), d)$ 构成[[上链复形]]，
称为 $(X, Y)$ 的**相对奇异上链复形**。

定义 $(X, Y)$ 的 $A$-系数 $n$ 阶**相对上同调**为
\[
H^n (X, Y; A) = \ker d^n / \operatorname{im} d^{n-1},
\]
其中约定 $C^{-1} (X, Y; A) = 0$ 且 $d^{-1} = 0$。
:::

通过考虑基元素，不难看出
\[
C^n (X, Y; A) \subset C^n (X; A),
\]
是 $C^n (X; A)$ 中所有在 $C_n (Y; A)$ 上取值为 $0$ 的元素构成的子群。

## 例子

- 有 $H_n (X, \varnothing; A) \simeq H_n (X; A)$ 且
  $H^n (X, \varnothing; A) \simeq H^n (X; A)$。
  另外有 $H_n (X, X; A) = 0$ 且 $H^n (X, X; A) = 0$。

- 对[[带点拓扑空间]] $X$，记 $* \in X$ 为其[[基点]]，则
  $H_n (X, *; A) \simeq \widetilde{H}_n (X; A)$ 且
  $H^n (X, *; A) \simeq \widetilde{H}^n (X; A)$，
  即分别为[[约化同调]]与[[约化上同调]]。

- 对 $k \geq 1$，令 $D^k$ 为 $k$ 维[[闭圆盘]]，
  $S^{k-1} = \partial D^k$ 为其边界[[球面]]。
  由 @thm:相对同调-商空间 与同胚
  $D^k / S^{k-1} \simeq S^k$，得到
  \[
  H_n (D^k, S^{k-1}; A) \simeq
  \begin{cases}
    A, & n = k, \\
    0, & n \neq k.
  \end{cases}
  \]
  相对上同调群满足相同的公式。

- 这是上例的推广。设 $X$ 是[[CW 复形]]，$X^{(k)}$ 是它的 $k$ 维[[骨架]]。
  由 @thm:相对同调-商空间，
  \[
  H_n (X^{(k)}, X^{(k-1)}; A) \simeq
  \begin{cases}
    \bigoplus_e A \cdot e, & n = k, \\
    0, & n \neq k.
  \end{cases}
  \]
  其中 $e$ 取遍 $X$ 的 $k$ 维胞腔。
  [[胞腔同调]]正是从这类空间对出发定义的。

## 性质

### 空间对长正合列

::: theorem [空间对长正合列] {@thm:相对同调-空间对长正合列}
设 $(X, Y)$ 是空间对，$A$ 是 Abel 群。
对每个[[自然数]] $n$，存在自然的长正合列
\[
\cdots \longrightarrow H_n (Y; A)
\xrightarrow{i_*}
H_n (X; A)
\xrightarrow{j_*}
H_n (X, Y; A)
\xrightarrow{\partial}
H_{n-1} (Y; A)
\longrightarrow \cdots,
\]
其中

- $i_*$ 由[[含入映射]] $i \colon Y \hookrightarrow X$ 诱导，

- $j_*$ 由商映射 $C_\bullet (X; A) \to C_\bullet (X, Y; A)$ 诱导，

- $\partial$ 是[[连接同态]]：
  若相对闭链由 $c \in C_n (X; A)$ 代表，则 $\partial c \in C_{n-1} (Y; A)$，
  且连接同态将 $H_n (X, Y; A)$ 中的类 $[c]$
  映到 $H_{n-1} (Y; A)$ 中的类 $[\partial c]$。
  这里前一个括号表示商模 $C_n (X; A) / C_n (Y; A)$ 中的陪集，
  后一个括号表示同调类。

类似地，对相对上同调，存在自然的长正合列
\[
\cdots \longrightarrow H^{n-1} (Y; A)
\xrightarrow{\delta}
H^n (X, Y; A)
\xrightarrow{j^*}
H^n (X; A)
\xrightarrow{i^*}
H^n (Y; A)
\xrightarrow{\delta}
H^{n+1} (X, Y; A)
\longrightarrow \cdots .
\]
这两个长正合列关于空间对的连续映射都满足[[自然变换|自然性]]。
:::

::: proof
[[短正合列]]
\[
0 \longrightarrow C_\bullet (Y; A)
\longrightarrow C_\bullet (X; A)
\longrightarrow C_\bullet (X, Y; A)
\longrightarrow 0
\]
给出链复形短正合列。对它应用[[同调代数]]中的[[连接同态]]构造，
即得同调的长正合列。

对上同调，使用短正合列
\[
0 \longrightarrow C^\bullet (X, Y; A)
\longrightarrow C^\bullet (X; A)
\longrightarrow C^\bullet (Y; A)
\longrightarrow 0.
\]
这里最后一个映射是[[限制映射]]，它是[[满射]]，
因为 $C_n (Y; A)$ 由 $C_n (X; A)$ 的一部分基元素生成，
因此任意 $Y$ 上的上链都可通过在其他基元素上取值为 $0$
延拓为 $X$ 上的上链。对该短正合列取上同调，
即得上同调的长正合列。

自然性是由于上述短正合列满足相应的自然性。
:::

### 切除定理

<see>[[切除定理]]</see>

[[切除定理]]说明，从空间对的小空间中切除一块并不改变相对同调和相对上同调。

::: theorem [切除定理] {@thm:相对同调-切除}
设 $U \subset Y \subset X$，且 $\overline{U} \subset Y^\circ$，
其中两边分别为 $U$ 的[[闭包]]和 $Y$ 的[[内部]]。

则含入映射 $(X \setminus U, Y \setminus U) \hookrightarrow (X, Y)$
诱导同构
\[
H_n (X \setminus U, Y \setminus U; A)
\simeq H_n (X, Y; A)
\]
以及
\[
H^n (X, Y; A)
\simeq H^n (X \setminus U, Y \setminus U; A).
\]
:::

### 与商空间同调的比较

接下来，我们将相对同调与相应的[[商空间]]的同调联系起来。

::: definition [好空间对]
空间对 $(X, Y)$ 称为**好空间对**，
如果满足以下条件：

- $Y$ 是 $X$ 中的[[闭集]]。

- $Y$ 在 $X$ 中的某个邻域以 $Y$ 为[[形变收缩|形变收缩核]]。

:::

例如，若 $X$ 是 CW 复形且 $Y$ 是它的子复形，
则 $(X, Y)$ 是好空间对。

::: theorem [相对同调与商空间] {@thm:相对同调-商空间}
设 $(X, Y)$ 是好空间对，$A$ 是 Abel 群。
令 $q \colon X \to X / Y$ 为[[商空间|商映射]]，
并取基点 $* \in X / Y$ 为 $Y$ 的像。
则 $q$ 诱导自然同构
\[
q_* \colon H_n (X, Y; A)
\xrightarrow{\simeq}
\widetilde{H}_n (X / Y; A)
\]
以及
\[
q^* \colon \widetilde{H}^n (X / Y; A)
\xrightarrow{\simeq}
H^n (X, Y; A).
\]
:::

::: proof
取 $Y$ 在 $X$ 中的邻域 $N$，使 $Y$ 是 $N$ 的形变收缩核。
因此含入映射 $(X, Y) \to (X, N)$ 是空间对的同伦等价，
从而诱导同构 $H_n (X, Y; A) \simeq H_n (X, N; A)$。

商映射 $q$ 在 $X \setminus Y$ 上给出到 $(X / Y) \setminus \{*\}$ 的同胚。
对空间对 $(X, N)$ 与 $(X / Y, q (N))$ 应用切除定理，
可得 $H_n (X, N; A) \simeq H_n (X / Y, q (N); A)$。
又因为 $q (N)$ 形变收缩到基点 $*$，
有 $H_n (X / Y, q (N); A) \simeq H_n (X / Y, *; A)$，
后者即 $\widetilde{H}_n (X / Y; A)$。上同调版本同理。
:::

### 函子性

::: proposition [函子性]
设 $A$ 是 Abel 群。对每个[[自然数]] $n$，
相对同调给出从空间对范畴到 [[Abel 群范畴]]的[[函子]]
\[
H_n (-, -; A) \colon \mathsf{Top}^{(2)} \longrightarrow \mathsf{Ab}.
\]
也就是说，连续映射 $f \colon (X, Y) \to (X', Y')$
诱导同态
\[
f_* \colon H_n (X, Y; A) \longrightarrow H_n (X', Y'; A).
\]
相应地，相对上同调给出反变函子
\[
H^n (-, -; A) \colon (\mathsf{Top}^{(2)})^{\mathrm{op}}
\longrightarrow \mathsf{Ab},
\]
即 $f$ 诱导同态
\[
f^* \colon H^n (X', Y'; A) \longrightarrow H^n (X, Y; A).
\]
当 $A$ 为交换环时，上述构造也给出到 [[模范畴|$A$-模范畴]]的函子。
:::

### 相对杯积

::: proposition [相对杯积] {@prop:相对同调-杯积}
设 $(X, Y)$ 是空间对，$A$ 是交换环。
则 $C^\bullet (X; A)$ 上的杯积限制在子复形 $C^\bullet (X, Y; A)$ 上，
诱导相对上同调的杯积
\[
\smallsmile \colon
H^p (X, Y; A) \otimes_A H^q (X, Y; A)
\longrightarrow H^{p+q} (X, Y; A).
\]
该操作满足分次交换律、结合律，
但若 $Y \neq \varnothing$，则它可能没有单位元，
因为常值上链 $1$ 不属于 $C^0 (X, Y; A)$。
:::

### 三元组长正合列

::: proposition [三元组长正合列]
设 $Z \subset Y \subset X$ 是子空间，$A$ 是 Abel 群。
则存在自然的长正合列
\[
\cdots \longrightarrow H_n (Y, Z; A)
\longrightarrow H_n (X, Z; A)
\longrightarrow H_n (X, Y; A)
\xrightarrow{\partial}
H_{n-1} (Y, Z; A)
\longrightarrow \cdots .
\]
同样地，存在自然的长正合列
\[
\cdots \longrightarrow H^{n-1} (Y, Z; A)
\longrightarrow H^n (X, Y; A)
\longrightarrow H^n (X, Z; A)
\longrightarrow H^n (Y, Z; A)
\longrightarrow \cdots .
\]
:::

这些长正合列由链复形[[短正合列]]
\[
0 \longrightarrow C_\bullet (Y, Z; A)
\longrightarrow C_\bullet (X, Z; A)
\longrightarrow C_\bullet (X, Y; A)
\longrightarrow 0
\]
导出，而这一短正合列是由于 $C_\bullet (Z; A) \subset C_\bullet (Y; A)
\subset C_\bullet (X; A)$ 及[[第三同构定理]]。
对上同调的情形，可取对偶链复形，并由上述包含关系由基元素包含关系给出而推出。

```terms
相对同调:
  en: relative homology
  de: relative Homologie :f
  fr: homologie relative :f
  ja: 相<そう>対<たい>ホモロジー
  ko: 상대 호몰로지 (相對 homology)
相对上同调:
  en: relative cohomology
  de: relative Kohomologie :f
  fr: cohomologie relative :f
  ja: 相<そう>対<たい>コホモロジー
  ko: 상대 코호몰로지 (相對 cohomology)
空间对:
  en: pair of spaces
  de: Raumpaar :n
  fr: paire d'espaces :f
  ja: 空<くう>間<かん>対<つい>
  ko: 공간쌍 (空間雙)
好空间对:
  en: good pair
  de: gutes Paar :n
  fr: bonne paire :f
  ja: 良<よ>い対<つい>
  ko: 좋은 쌍 (좋은 雙)
```
