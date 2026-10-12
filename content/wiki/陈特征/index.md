---
title: 陈特征
categories: [示性类]
navboxes: [向量丛与 K 理论]
---

在[[代数拓扑]]中，
**陈特征**是对[[复数|复]][[向量丛]]定义的[[示性类]]，
通过[[陈类]]而定义。
陈特征与陈类的区别在于，
陈类满足 [[Whitney 乘积公式]]
\[
c (E \oplus F) = c (E) \, c (F),
\]
而陈特征 $\operatorname{ch}$ 则同时满足加性和乘性：
\[
\begin{aligned}
  \operatorname{ch} (E \oplus F) & = \operatorname{ch} (E) + \operatorname{ch} (F), \\
  \operatorname{ch} (E \otimes F) & = \operatorname{ch} (E) \operatorname{ch} (F).
\end{aligned}
\]

## 定义

::: definition [陈特征] {@陈特征}
设 $X$ 是[[仿紧空间]]，
$E \to X$ 是[[复数|复]][[向量丛]]。
定义 $E$ 的**陈特征**
\[
\operatorname{ch} (E) \in \prod_{k = 0}^{\infty} H^{2k} (X; \mathbb{Q})
\]
为
\[
\operatorname{ch} (E) =
\mathrm{rank} (E) + \sum_{k = 1}^{\infty} \frac{1}{k!}
\left| \begin{matrix}
  c_1    & 1       & 0      & \cdots & 0      \\[-.75ex]
  2 c_2  & c_1     & 1      & \ddots & \vdots \\[.5ex]
  3 c_3  & c_2     & c_1    & \ddots & 0      \\[-.75ex]
  \vdots & \vdots  & \ddots & \ddots & 1      \\
  k c_k  & c_{k-1} & \cdots & c_2    & c_1
\end{matrix} \right|,
\]
这里 $\mathrm{rank} (E)$ 是 $E$ 的秩，$c_i$ 代表 $c_i(E)$。
式中的[[行列式]]来自 [[Newton 恒等式]]：
若将 $c_i$ 视为第 $i$ 个[[初等对称多项式]]，
则该行列式（不含系数 $1/k!$）就是第 $k$ 个[[幂方和]]。

对 $k \geq 0$，我们也记
\[
\operatorname{ch}_k (E) \in H^{2k} (X; \mathbb{Q})
\]
为 $\operatorname{ch} (E)$ 中次数 $2k$ 的部分。
:::

上述定义可以如下理解。
如果 $E$ 是 $n$ 个[[线丛]]的直和 $E \simeq L_1 \oplus \cdots \oplus L_n$，
则 $E$ 的陈特征为
\[
\operatorname{ch} (E) =
\mathrm{e}^{c_1 (L_1)} + \cdots + \mathrm{e}^{c_1 (L_n)},
\]
这里指数的含义是形式幂级数。
对一般的 $E$，我们可以由[[分裂原理]]及上述关系定义其陈特征，
得到的定义与 @陈特征 是相同的。

例如，我们有
\[
\begin{aligned}
  \operatorname{ch}_0 (E) & = \operatorname{rank} (E), \\
  \operatorname{ch}_1 (E) & = c_1 (E), \\
  \operatorname{ch}_2 (E) & = \frac{1}{2} c_1 (E)^2 - c_2 (E), \\
  \operatorname{ch}_3 (E) & = \frac{1}{6} c_1 (E)^3 - \frac{1}{2} c_1 (E) \, c_2 (E) + \frac{1}{2} c_3 (E),
\end{aligned}
\]
如此等等。

## 性质

::: proposition
陈特征同时满足加性和乘性。
对[[仿紧空间]] $X$ 和复向量丛 $E, F \to X$，有
\[
\begin{aligned}
  \operatorname{ch} (E \oplus F) & = \operatorname{ch} (E) + \operatorname{ch} (F), \\
  \operatorname{ch} (E \otimes F) & = \operatorname{ch} (E) \operatorname{ch} (F).
\end{aligned}
\]
因此，陈特征的定义可以延拓到 $X$ 的[[拓扑 $K$ 理论]] $K (X)$ 上，
得到映射
\[
\operatorname{ch} \colon K (X) \longrightarrow H^\bullet (X; \mathbb{Q}),
\]
并且它是[[环同态]]。
:::

::: proof
[@Karoubi1978, 定理 V.3.23、定义 V.3.24]。
:::

::: proposition
若 $X$ 是[[紧空间]]，则
\[
\operatorname{ch} \colon K (X) \otimes \mathbb{Q}
\longrightarrow H^{2\bullet} (X; \mathbb{Q}),
\]
是[[同构]]，这里 $H^{2\bullet} (X; \mathbb{Q})$
指的是所有偶次上同调群的直积。
:::

::: proof
[@Karoubi1978, 定理 V.3.25]。
:::

## 参考文献

以下教材的 V.3 节阐述了陈特征与 $K$ 理论的联系。

```bibliography
Karoubi1978:
  type: book
  author: 'Karoubi, Max'
  title: $K$-theory. An introduction
  series: Grundlehren Math. Wiss.
  number: 226
  publisher: Springer-Verlag
  year: 1978
  zbmath: '0382.55002'
```

```terms
陈特征:
  en: Chern character
```
