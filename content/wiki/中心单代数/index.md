---
title: 中心单代数
categories: [代数论]
navboxes: [非交换代数]
---

::: convention
在本文中，

- [[环]]和代数不必交换。

:::

一个域 $k$ 上的**中心单代数**指的是[[中心]]为 $k$ 且双边[[理想]]只有 $0$ 和自身的
$k$-[[结合代数|代数]]。$k$ 上的有限维中心单代数给出其 [[Brauer 群]]的元素。
[[Azumaya 代数]]是中心单代数在一般交换环乃至[[概形]]上的推广。

## 定义

::: definition
设 $k$ 是域。$k$ 上**中心单代数**指的是 $k$-代数 $A \ne 0$，其中心为 $k$
且双边理想只有 $0, A$。
:::

::: remark
若去掉 $A$ 中心为 $k$ 的条件，可设其中心为 $L$，则 $L$ 是（交换）域且为 $k$ 的[[域扩张|扩张]]，
$A$ 是 $L$ 上中心单代数。故只需研究中心单代数。

一般只考虑 $k$ 上有限维中心单代数。
:::

## 性质

其最重要的刻画是 [[Wedderburn 定理]]：

::: theorem [Wedderburn]
设 $A$ 是 $k$ 上有限维中心单代数，
则存在 $k$ 上除环 $D$ 使 $D$ 中心为 $k$ 且 $A = \mathrm{Mat}_n(D)$。
:::

事实上，$k$ 上有限维中心单代数有如下等价刻画：

::: theorem [等价刻画]
对 $k$ 上有限维代数 $A$，以下若干事等价：

1. $A$ 是 $k$ 上中心单代数；

2. 存在中心除环 $D$ 使 $A = \mathrm{Mat}_m(D)$；

3. $A \otimes \bar k$ 同构于某 $\mathrm{Mat}_n(\bar k)$；

4. $A \otimes k^{\rm sep}$ 同构于某 $\mathrm{Mat}_n(k^{\rm sep})$；

5. 存在 [[Galois 扩张]] $L/k$ 使 $A \otimes L = \mathrm{Mat}_n(L)$。

:::

::: theorem [模论]
若 $A = \mathrm{Mat}_n(D)$，$D$ 是除环，则任意 $A$-左模皆是若干 $D^{\oplus n}$ 的直和，
其中 $\mathrm{Mat}_n(D)$ 通过左乘作用在 $D^{\oplus n}$ 上。于是，$A$-左模的[[范畴]]与
$D$-左模的范畴[[范畴等价|等价]]。特别地，两个 $A$-左模若作为 $k$-模同构则作为 $A$-模也同构。
:::

::: lemma {@closed-under-mat}
设 $A$ 是 $k$ 上中心单代数，则 $\mathrm{Mat}_n(A)$ 亦然。
:::

::: proof
显然 $\mathrm{Mat}_n(A)$ 中心为 $k$。
取 $e_{ij}$ 为 $\mathrm{Mat}_n(A)$ 的标准基，设 $\mathrm{Mat}_n(A)$ 的双边理想 $I$ 包含非零元素
$x = \sum a_{ij} e_{ij}$。注意到 $e_{ui} x e_{jv} = a_{ij} e_{uv}$，取
$i,j$ 使 $a_{ij} \ne 0$，有 $a_{ij} e_{uv} \in I$，从而 $(A a_{ij} A) e_{uv} \subseteq I$。
由 $A$ 单得到 $A a_{ij} A = A$，故 $A e_{uv} \subseteq I$，即得 $I = \mathrm{Mat}_n(A)$。
:::

::: lemma {@two-sided-ideals-of-tensor}
设 $A$ 为 $k$ 上有限维代数，$D$ 为 $k$ 上有限维除环，中心为 $k$。
则 $A \otimes_k D$ 的双边理想 $I$ 作为左 $D$-向量空间被 $I \cap (A \otimes 1)$ 生成。
:::

::: proof
记 $I' = D(I \cap (A \otimes 1)) \subseteq I$，反设 $I \ne I'$，取 $x \in I - I'$，
取 $A / (I \cap (A \otimes 1))$ 在 $k$ 上一组基 $\bar a_i$ 并提升到 $a_i \in A$，设
\[
x \equiv \sum_i a_i \otimes k_i \pmod{I'}.
\]
这样 $k_i$ 不全为 $0$。现在固定 $a_i$，取形如上式的等式中 $k_i$ 非零者最少的
（$k_i$ 不全为 $0$，不要求 $x \notin I'$）。不妨 $k_1 \ne 0$，可左乘 $k_1^{-1}$ 使 $k_1 = 1$。
现任取 $\lambda \in D$，考虑
\[
I \ni \lambda x - x \lambda \equiv \sum_{i \ne 1} a_i \otimes (\lambda k_i - k_i \lambda) \pmod{I'}.
\]
若 $\lambda k_i - k_i \lambda$ 不全为 $0$，
则与上面 $x$ 与 $k_i$ 取法矛盾。
于是对任何 $\lambda$ 皆有 $\lambda k_i = k_i \lambda$，由假设 $D$ 中心为 $k$，
故 $k_i \in k$，$a_i \otimes k_i = a_ik_i \otimes 1$，故 $x \in I'$，矛盾。
:::

::: theorem
设 $A, B$ 是 $k$ 上有限维中心单代数，则 $A \otimes_k B$ 亦然。
:::

::: proof
先看中心，$A \otimes B$ 的中心与 $A \otimes 1$ 交换，故包含于 $k \otimes B$；
同理其也包含于 $A \otimes k$，二者之交即为 $k \otimes k = k$。

再看单性。由 Wedderburn 定理可取除环 $D$ 使 $B = \mathrm{Mat}_n(D)$。那么有
$A \otimes B = A \otimes D \otimes \mathrm{Mat}_n(k)  = \mathrm{Mat}_n(A \otimes D)$。
由 @closed-under-mat 可约化到 $B$ 为除环的情形。
设 $I$ 是 $A \otimes B$ 的双边理想，由 @two-sided-ideals-of-tensor
得 $I = B(I \cap (A \otimes 1))$，而 $I \cap (A \otimes 1)$ 是 $A$ 的双边理想，
故为 $0$ 或 $A$，即证。
:::

::: theorem [Skolem–Noether] {@Skolem--Noether}
$k$ 上有限维中心单代数的[[自同构]]都是[[内自同构]]。
:::

::: proposition [特征多项式]
设 $A$ 是 $k$ 上有限维中心单代数，$[A : k] = n^2$。则存在映射
$\mathop{\rm charpoly} \colon A \to k[t]_{\deg \le n}$ 使
$\mathop{\rm charpoly}(a)$ 每个系数均为 $a$ 在 $k$ 上坐标的多项式，
且基变换到 $\bar k$ 上后，
$\mathop{\rm charpoly}(a)$ 为 $a \in \mathrm{Mat}_n(\bar k)$ 的特征多项式
（@Skolem--Noether 给出这特征多项式良好定义）。
特别地，$\mathrm{trd}(a) = -[t^{n-1}]\mathop{\rm charpoly}(a)$
称为 $a$ 的**既约迹**，$\mathrm{nrd}(a) = (-1)^n[t^0]\mathop{\rm charpoly}(a)$
称为 $a$ 的**既约范数**。
:::

## 例子

- 对任意域 $k$，$\mathrm{Mat}_n(k)$ 是 $k$ 上中心单代数。
- [[四元数]]环是 $\mathbb{R}$ 上除环，所以是中心单代数。由实数域 Brauer 群的结论，
  $\mathbb{R}$ 上中心单代数只有 $\mathrm{Mat}_n(\mathbb{R})$ 和 $\mathrm{Mat}_n(\mathbb{H})$ 两种。
- 上面例子可推广如下：设 $\mathrm{char}(k) \ne 2$，对 $a, b \in k^\times$，考虑
  $A = k \oplus ki \oplus kj \oplus kij$，
  乘法满足 $i^2 = a$，$j^2 = b$，$ij = -ji$，则 $A$ 是中心单代数，称作**四元数代数**。
  $A$ 同构于 $\mathrm{Mat}_2(k)$ 当且仅当 $x^2 - a y^2 - b z^2 = 0$ 在 $k$ 上有非零解。
  将这构造与[[整体类域论]]给出的 $\mathbb{Q}$ 的 Brauer 群的刻画相结合就得到[[二次互反律]]
  （准确来讲是 [[Hilbert 符号]]的乘积公式）。

```terms
中心单代数:
  en: central simple algebra
  fr: algèbre simple centrale
```
