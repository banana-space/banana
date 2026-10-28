---
title: Cohen 结构定理
categories: [交换代数]
navboxes: [交换代数]
---

<problems>
- “Cohen 环的显式构造”一节需要扩充。
</problems>

[[Cohen]] 结构定理刻画了 Noether 完备局部环的结构。

## 定理

::: theorem
对特征为 $p > 0$ 的域 $k$，存在绝对非分歧的完备离散赋值环 $C(k)$，
使得 $C(k)$ 的剩余域为 $k$。这样的环称为 Cohen 环。

若有同构 $\iota \colon k \simeq k'$，则存在同构 $C(k) \simeq C(k')$
提升 $\iota$。这样的提升唯一当且仅当 $k$ 完美。
:::

::: definition
设 $(A,\mathfrak{m},k)$ 是完备局部环，子环 $\Lambda \subset A$ 称为系数环，如果

1. $\Lambda$ 为完备局部环。

2. $\mathfrak{m} \cap \Lambda = p \Lambda$，且为 $\Lambda$ 的极大理想。
   这里 $p$ 是 $k$ 的特征。

3. 典范映射 $\Lambda/p\Lambda \to k$ 为同构。

:::

::: example
有如下几种情形：

1. $A$ 包含域，即 $\mathbb{Q} \subset A$ 或 $\mathbb{F}_p \subset A$。
   则 $A$ 是等特征，$\Lambda$ 为剩余域的一个截面（的像）。

2. 对任何 $n \ge 1$，在 $A$ 中都有 $p^n \ne 0$。则 $\Lambda$
   是一个 Cohen 环 $C(k)$。

3. 存在 $n > 1$ 使得在 $A$ 中有 $p^{n} = 0$，$p^{n-1} \ne 0$。
   此时 $\Lambda$ 为一 Artin 环。

:::

::: theorem [Cohen 结构定理]
设 $(A,\mathfrak{m},k)$ 是完备局部环，则

- $A$ 有系数环。

- 若 $\mathfrak{m}$ 有限生成，则 $A$ 同构于 $\Lambda[[X_1,\dots,X_n]]$
  的商环，其中 $\Lambda$ 是域或 Cohen 环。

:::

## 证明

::: lemma
设 $(A,\mathfrak{m},k)$ 是局部环，则对于域扩张 $K/k$，总存在
局部环 $(B,\mathfrak{n},K)$ 以及平坦局部同态 $f \colon A \to B$
使得 $\mathfrak{m}B = \mathfrak{n}$。
:::

::: proof
首先考虑单扩张情形 $K = k(a)$。若 $a$ 在 $k$ 上超越，可取
$B = A[X]_{\mathfrak{m}[X]}$；若 $a$ 在 $k$ 上代数，设其
极小多项式为 $F$，则任取其首一提升 $\tilde F$，令 $B = A[X]/(\tilde F)$
即可。

在 $K$ 上赋予良序使得对 $y \in k, x \in K - k$ 有 $y < x$。对 $x \in K$，
令 $K_x$ 为 $k$ 以及所有 $x' \le x$ 所生成的子域。我们以超穷递归，
对每个 $x$ 构造符合引理要求的环 $B_x$，使得 $B_x$ 剩余域为 $K_x$，
以及对 $x'<x$，有符合引理要求的局部同态 $B_{x'} \to B_x$。

- 若 $x$ 有前继 $x'$，则 $K_x = K_{x'}(x)$，可构造 $B_x/B_{x'}$ 如首段。

- 若 $x$ 无前继，则令 $B'_{x} = \operatorname{colim}_{x'<x} B_{x'}$，
  则 $B'_x$ 剩余域为 $K'_x = \cup_{x'<x}K_{x'}$。因 $K_x = K'_x(x)$，
  可构造 $B_x/B'_x$ 如首段。

:::

::: remark
使用 Zorn 引理构造似乎更为我们所熟悉，然而处理集合论问题可能有些麻烦。
:::

设 $k$ 为特征 $p > 0$ 的域。取平坦同态 $\mathbb{Z}_p \to R$
如引理。设 $\hat R$ 为 $R$ 的 $p$-进完备化，则 $\hat R$ 为 Noether 局部环，
在 $p$-进拓扑下完备，极大理想为 $p\hat R$。因 $p$ 在 $R$ 上正则，故
在 $\hat R$ 上也正则，从而 $\hat R$ 为离散赋值环。换言之，$\hat R$
为一 Cohen 环 $C(k)$。

::: lemma
设 $K/k$ 可分，则 $K/k$ 形式光滑。
:::

::: proof
由于形式光滑态射的滤余极限也形式光滑，只要证明有限生成扩张的情形。
而有限可分扩张是平展的；纯超越扩张 $k(X_1,\dots,X_n)/k$
是多项式环 $k[X_1,\dots,X_n]$ 的局部化，故形式光滑。
:::

::: lemma
$\mathbb{Z}/p^n\mathbb{Z} \to C(k)/p^nC(k)$ 形式光滑。
:::

::: proof
记 $C(k)/p^nC(k) = C_n(k)$。因 $\mathbb{F}_p$ 完美，结论对 $n = 1$ 成立。下面假设结论对
$k < n$ 成立，有三角
\[
\mathbb{Z}/p\mathbb{Z} \to \mathbb{Z}/p^n\mathbb{Z} \to \mathbb{Z}/p^{n-1}\mathbb{Z} \to
\]
与 $L_{C_n(k)/(\mathbb{Z}/p^n\mathbb{Z})}$ 做导出张量积$\otimes^L_{\mathbb{Z}/p^n\mathbb{Z}}$得
\[
L_{k/\mathbb{F}_p} \to L_{C_n(k)/(\mathbb{Z}/p^n\mathbb{Z})}
\to L_{C_{n-1}(k)/(\mathbb{Z}/p^{n-1}\mathbb{Z})} \to
\]
因两端复形的同调都集中在 $0$ 处，中间复形的同调也集中在 $0$ 处。
:::

::: proposition
设 $(A,\mathfrak{m},k)$ 是完备局部环，则 $A$ 有系数环。
:::

::: proof
若 $k$ 特征为 $0$，则 $\mathbb{Q} \hookrightarrow A$。要构造
截面 $k \to A$。为此只需归纳地构造相容的截面 $k \to A/\mathfrak{m}^n$，
而这是因为 $k/\mathbb{Q}$ 形式光滑：
\[
\begin{tikzcd}
  {A/\mathfrak{m}^{n-1}} & k \\
  {A/\mathfrak{m}^n} & {\mathbb{Q}}
  \arrow[from=2-1, to=1-1]
  \arrow[from=2-2, to=1-2]
  \arrow[from=2-2, to=2-1]
  \arrow[from=1-2, to=1-1]
  \arrow[dotted, from=1-2, to=2-1]
\end{tikzcd}
\]

若 $k$ 特征为 $p$，我们来证明存在 $C(k)$ 到 $A$ 的局部同态
诱导剩余域的同构；此同态的像即为所需系数环。同上，这是因为
$\mathbb{Z}/p^n\mathbb{Z} \to C(k)/p^nC(k)$ 形式光滑
\[
\begin{tikzcd}
  {A/\mathfrak{m}^{n-1}} & {C_n(k)} \\
  {A/\mathfrak{m}^n} & {\mathbb{Z}/p^n\mathbb{Z}}
  \arrow[from=2-1, to=1-1]
  \arrow[from=2-2, to=1-2]
  \arrow[from=2-2, to=2-1]
  \arrow[from=1-2, to=1-1]
  \arrow[dotted, from=1-2, to=2-1]
\end{tikzcd}
\]
:::

::: proposition
设 $(A,\mathfrak{m},k)$ 为完备 Noether 局部环，则存在满射
$\Lambda[[X_1,\dots,X_n]] \to A$，其中 $\Lambda$ 是系数环
或 Cohen 环。
:::

::: proof
设 $\mathfrak{m} = (x_1,\dots,x_n)$，$\Lambda'$ 是 $A$ 的系数
环。则有自然映射
\[
\Lambda'[[X_1,\dots,X_n]] \to A,\quad X_i \mapsto x_i.
\]
令 $I = (X_1,\dots,X_n)$，则两边都是 $I$-进完备的，因为在模 $I$ 之后
是满射，原来便是满射。
:::

## Cohen 环的显式构造

```terms
Cohen 结构定理:
  en: Cohen structure theorem
  fr: théorème de structure de Cohen
```
