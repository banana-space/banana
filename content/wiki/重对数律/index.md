---
title: 重对数律
categories: [概率论]
navboxes: [概率论]
---

<problems>
- “定理证明”一节中两个技术性估计引理（关于 $q_n(x)$ 的上界与下界）缺少证明。
- 本条目引用了其他条目中定理的编号，跨页定理引用功能暂未实现。
- “定理证明”一节第二步中，$(1 - r) \psi(n_k) - 2h(n_{k-1})$ 的渐近式按 $\psi(n_k) \sim \sqrt{\tau/(1+\tau)}\, h(n_k)$ 计算似乎应为 $\frac{(1 - r)\sqrt{\tau} - 2}{\sqrt{1 + \tau}} h(n_k)$，其后选取 $r$、$\tau$ 的不等式也相应如此。
</problems>

**重对数律**是概率极限理论中非常精细的结果，其程度比[[大数定律|强大数定律]]
更甚。它大致是说：独立[[随机变量]]序列的部分和在项数很大时几乎必然
被限制在一个区间内，这个区间的长度与[[函数]] $x \log\log x$ 有关。

最早的重对数律由 Khintchine 提出，那时这个结果是用于研究[[正规数]]的。
设 $N_n(\omega)$ 表示实数 $\omega\in[0,1]$ 的二进制表示前 $n$ 位小数中
数码 $1$ 出现的次数。由强大数定律不难得到：$N_n/n \xrightarrow{\mathrm{a.s.}} 1/2$。
而重对数律则给出更精细的结果：
\[
\limsup_{n \to \infty} \frac{N_n -\frac{n}{2}}{\sqrt{\frac{1}{2} n \log\log n}} = 1 \ \mathrm{a.s.}.
\]

## 定理描述

重对数律有很多版本，其中一个很强的版本由 Kolmogorov 给出。

::: theorem [Kolmogorov 重对数律] {@K}
设 $(X_n)_{n \geq 1}$ 是概率空间 $(\Omega, \mathcal{F}, \mathbb{P})$
中的相互独立的随机变量序列。如果
\[
\mathbb{E}(X_n) = 0, \quad \mathbb{E}(X_n^2) := \sigma_n^2, \quad B_n = \sum_{k=1}^n \sigma_k^2 \to \infty,
\]
且存在正数序列 $(M_n)$ 满足
\[
M_n = o\left((B_n / \log\log B_n)^{\frac12}\right), \quad |X_n|\leq M_n \ \mathrm{a.s.},
\]
记 $S_n = \sum_{k=1}^n X_k$，则
\[
\limsup_{n \to \infty} \frac{S_n}{(2 B_n \log\log B_n)^{\frac12}} = 1 \ \mathrm{a.s.}.
\]
:::

注意，如果 $(X_n)$ 服从上述定理的条件，则 $(-X_n)$ 也满足。于是还有
\[
\liminf_{n \to \infty} \frac{S_n}{(2 B_n \log\log B_n)^{\frac12}} = -1 \ \mathrm{a.s.}.
\]
于是，可以得到 $S_n$ 在几乎必然意义下的变化范围。两个式子可以联合写成
\[
\limsup_{n \to \infty} \frac{|S_n|}{(2 B_n \log\log B_n)^{\frac12}} = 1 \ \mathrm{a.s.}.
\]
另外，这个定理可以轻易地转化为[[期望]]非零的情形，只需把
$S_n$ 替换为 $S_n - \mathbb{E}(S_n)$，把 $\mathbb{E}(X_n^2)$
替换为 $\operatorname{Var}(X_n)$。

Kolmogorov 的定理条件比较复杂。下面的定理讨论了独立同分布
随机变量序列的情形。

::: theorem [Hartman–Wintner 重对数律] {@HW}
设 $(X_n)_{n \geq 1}$ 是独立同分布的随机变量序列。设
$\mathbb{E}(X_1) = 0, \operatorname{Var}(X_1) = 1$，
则
\[
\limsup_{n \to \infty}\frac{S_n}{\sqrt{2 n \log\log n}} = 1 \ \mathrm{a.s.}.
\]
:::

如果 $\mathbb{E}(X_1) = \mu, \operatorname{Var}(X_1) = \sigma^2$，则上述定理变为
\[
\limsup_{n \to \infty}\frac{S_n - n\mu}{\sigma\sqrt{2 n \log\log n}} = 1 \ \mathrm{a.s.}.
\]

## 定理证明

我们来证明 @K。证明中需要三个引理。

::: lemma [Lévy 不等式] {@1}
设 $(X_n)_{n \geq 1}$ 为相互独立的随机变量序列，令
$S_n = \sum_{k=1}^n X_k$。则对任意正数 $\varepsilon$：
\[
\mathbb{P}\left(\max_{1 \leq k \leq n} (S_k + m(S_n - S_k)) \geq \varepsilon\right) \leq 2\mathbb{P}(S_n \geq \varepsilon),\\
\mathbb{P}\left(\max_{1 \leq k \leq n} |S_k + m(S_n - S_k)| \geq \varepsilon\right) \leq 2\mathbb{P}(|S_n| \geq \varepsilon).
\]
其中 $m(X)$ 表示随机变量 $X$ 的[[分位数|中位数]]。
:::

证明参见条目[[几乎必然收敛]]中的引理 2.5。

接下来是两个技术性的估计引理。不失一般性，假设 $(M_n)$ 是不减数列。
令 $q_n(x) = \mathbb{P} (S_n \geq x)$。

::: lemma {@2}
如果实数 $x$ 满足 $0 \leq xM_n \leq B_n$，则
\[
q_n(x) \leq \exp\left(-\frac{x^2}{2B_n} \left(1 - \frac{xM_n}{2B_n}\right)\right);
\]
如果 $xM_n \geq B_n$，则
\[
q_n(x) \leq \exp\left(-\frac{x}{4M_n}\right).
\]
:::

::: lemma {@3}
如果正数数列 $(x_n)_{n \geq 1}$ 满足
\[
\lim_{n \to \infty} \frac{x_nM_n}{B_n} = 0, \quad \lim_{n \to \infty} \frac{x_n^2}{B_n} = \infty,
\]
则对任意正数 $\mu$ 和充分大的 $n$ 有
\[
q_n(x_n) \geq \exp\left(-\frac{x_n^2}{2B_n} (1 + \mu)\right).
\]
:::

::: proof [@K 的证明]
考虑充分大的 $n$。为简单起见，记 $h(n) = (2B_n \log\log B_n)^{\frac12}$。
接下来的证明分两步进行。不难发现，只要完成这两步，定理就已经得证。

第一步：证明对任意 $\varepsilon > 0$：
\[
\mathbb{P}(S_n > (1 + \varepsilon)h(n) \ \mathrm{i.o.}) = 0.
\]
为了之后的使用，先对 $B_n$ 的增长做一点研究。因为 $B_n \to \infty$，对任意的 $\tau > 0$，
存在一个正整数不减序列 $(n_k)_{k \geq 1}$，满足
\[
B_{n_k-1} \leq (1+\tau)^k < B_{n_k},
\]
故
\[
1 > \frac{(1 + \tau)^k}{B_{n_k}} \geq \frac{B_{n_k} - \sigma_{n_k}^2}{B_{n_k}} \to 1,
\]
即 $B_{n_k} \sim (1+\tau)^k$。进一步：
\[
B_{n_k} - B_{n_{k-1}} = B_{n_k} \left(1 - \frac{B_{n_{k-1}}}{B_{n_k}}\right) \sim B_{n_k} \cdot \frac{\tau}{1+\tau}.
\]
记 $\tilde S_{n_k} = \max_{n \leq n_k} S_n$。我们来证明：对任意 $r > 0$，

```math {@s}
\sum_{k=1}^{\infty} \mathbb{P}(\tilde S_{n_k} > (1 + r) h(n_k)) < \infty.
```

首先指出一个事实：对任意期望为 $0$ 的随机变量 $X$，有
\[
m(X) \leq \sqrt{2\operatorname{Var}(X)},
\]
其中 $m(X)$ 的含义参考 @1。实际上，由 [[Chebyshev 不等式]]：
对任意 $\epsilon > 0$ 有
\[
\mathbb{P}\left(|X| \geq \sqrt{(2 + \epsilon) \operatorname{Var}(X)}\right) \leq (2 + \epsilon)^{-1} < \frac{1}{2},
\]
也就证明了这一事实。结合它与 @1 得：
\[
\begin{aligned}
  \mathbb{P}(\tilde S_{n_k} > (1 + r) h(n_k))
  &\leq 2\mathbb{P}\left(S_{n_k} > (1 + r) h(n_k) - \sqrt{2B_{n_k}}\right)\\
  &\leq 2\mathbb{P} (S_{n_k} > (1 + r_1)h(n_k)),
\end{aligned}
\]
其中第二个不等号对任意给定的 $r_1 \in (0,r)$ 和充分大的 $k$ 成立。
根据 @2，对任意 $\mu > 0$ 和充分大的 $k$：
\[
\begin{aligned}
  \mathbb{P} (S_{n_k} > (1 + r_1)h(n_k))
  &\leq (\log B_{n_k})^{-(1 - \mu)(1 + r_1)^2}\\
  &\leq (k \log(1 + \tau))^{-(1 - \mu)(1 + r_1)^2}\\
\end{aligned}
\]
取 $\mu$ 使得 $(1-\mu)(1+r_1)^2 > 1$，即证得 @s 式。
现在，对任意 $\varepsilon > 0$：
\[
\begin{aligned}
  \mathbb{P}(S_n > (1 + \varepsilon) h(n) \ \mathrm{i.o.})
  &\leq \mathbb{P} \left(\max_{n_{k-1} \leq n < n_k} S_n > (1 + \varepsilon) h(n_{k-1}) \ \mathrm{i.o.}\right)\\
  &\leq \mathbb{P} (\tilde S_{n_k} > (1 + \varepsilon) h(n_{k-1}) \ \mathrm{i.o.}).
\end{aligned}
\]
因为 $B_{n_k} \sim (1+\tau)^k$，由基本的计算知 $h(n_k) / h(n_{k-1}) < \sqrt{1+2\tau}$
对充分大的 $k$ 成立。于是
\[
\mathbb{P}(S_n > (1 + \varepsilon) h(n) \ \mathrm{i.o.})
\leq \mathbb{P} \left( \tilde S_{n_k} > \frac{1 + \varepsilon}{\sqrt{1 + 2\tau}} h(n_k) \ \mathrm{i.o.} \right).
\]
取合适的 $r, \tau$ 使得 $\dfrac{1+\varepsilon}{\sqrt{1+2\tau}} > 1+r$，得
\[
\mathbb{P}(S_n > (1 + \varepsilon) h(n) \ \mathrm{i.o.}) \leq \mathbb{P}(\tilde S_{n_k} > (1 + r) h(n_k) \ \mathrm{i.o.}).
\]
由 @s 式和 [[Borel–Cantelli 引理]]就证明了第一步。在这之后我们
还需要一小步。用 $-S_n$ 代替第一步结论中的 $S_n$，结合可得

```math {@z}
\mathbb{P}(|S_n| > (1 + \varepsilon) h(n) \ \mathrm{i.o.}) = 0.
```

这会在第二步证明中发挥作用。

第二步：证明对任意 $\varepsilon > 0$：
\[
\mathbb{P} (S_n > (1 - \varepsilon) h(n) \ \mathrm{i.o.}) = 1.
\]
记
\[
\psi(n_k) = \big(2(B_{n_k} - B_{n_{k-1}}) \log\log(B_{n_k} - B_{n_{k-1}})\big)^{\frac{1}{2}},
\]
利用不等式 $\mathbb{P}(A \cap B) \geq \mathbb{P}(A) - \mathbb{P}(\bar B)$，有
\[
\begin{aligned}
  \mathbb{P}(S_{n_k} - S_{n_{k-1}} > (1 - r) \psi(n_k))
  &\geq \mathbb{P}\big((S_{n_k} > (1 - r/2) \psi(n_k)) \cap (S_{n_{k-1}} < (r/2) \psi(n_k))\big)\\
  &\geq \mathbb{P}(S_{n_k} > (1 - r/2) \psi(n_k)) - \mathbb{P}(S_{n_{k-1}} \geq (r/2) \psi(n_k)).
\end{aligned}
\]
根据计算可以求得 $\psi(n_k) / h(n_{k-1}) \sim \tau^{1/2}$。应用 @2，
对充分大的 $k$：
\[
\begin{aligned}
  \mathbb{P}(S_{n_{k-1}} \geq (r/2) \psi(n_k))
  &\leq \mathbb{P}(S_{n_{k-1}} \geq (r \sqrt{\tau}/3) h(n_{k-1}))\\
  &\leq (\log B_{n_{k-1}})^{-r^2\tau / 5}.
\end{aligned}
\]
应用 @3，对任意 $\mu > 0$ 和充分大的 $k$：
\[
\begin{aligned}
  \mathbb{P}(S_{n_k} > (1 - r/2) \psi(n_k))
  &\geq \mathbb{P}(S_{n_k} > (1 - r/2) h(n_k))\\
  &\geq (\log B_{n_k})^{-(1 + \mu)(1 - r/2)^2}.
\end{aligned}
\]
所以，取 $\tau$ 充分大，结合 $\log B_{n_k} \sim k\log(1+\tau)$，得
\[
\begin{aligned}
  \mathbb{P}(S_{n_k} - S_{n_{k-1}} > (1 - r) \psi(n_k))
  &\geq c\left( k^{-(1+\mu)(1-r/2)^2} - k^{-r^2\tau/5} \right)\\
  &\geq \frac{c}{2} \cdot k^{-(1+\mu)(1-r/2)^2}.
\end{aligned}
\]
取 $\mu$ 使得 $(1+\mu)(1-r/2)^2 < 1$，则
\[
\sum_{k=1}^{\infty} \mathbb{P}(S_{n_k} - S_{n_{k-1}} > (1 - r) \psi(n_k)) = \infty.
\]
由 [[Borel–Cantelli 引理]]，对任意 $r \in (0,1)$：

```math {@q}
\mathbb{P}(S_{n_k} - S_{n_{k-1}} > (1 - r) \psi(n_k) \ \mathrm{i.o.}) = 1.
```

又当 $k \to \infty$ 时，计算得出：
\[
(1 - r) \psi(n_k) - 2h(n_{k-1}) \sim \frac{(1 + r)\sqrt{\tau} - 2}{\sqrt{1 + \tau}} h(n_k),
\]
由 @z 知：存在零概率事件 $A$，使得 $\omega \notin A$ 时，存在 $n_0(\omega)$，
只要 $n \geq n_0(\omega)$，就有 $|S_n(\omega)| \leq 2h(n)$。
对给定的 $\varepsilon > 0$，取 $r, \tau$ 使得
\[
\frac{(1 + r)\sqrt{\tau} - 2}{\sqrt{1+\tau}} > 1 - \varepsilon,
\]
则由 @z 和 @q 得
\[
\begin{aligned}
  \mathbb{P}(S_{n_k} > (1 - \varepsilon) h(n_k) \ \mathrm{i.o.})
  &\geq \mathbb{P}(S_{n_k} > (1 - r)\psi(n_k) - 2h(n_{k-1}) \ \mathrm{i.o.})\\
  &\geq \mathbb{P}(S_{n_k} - S_{n_{k-1}} > (1 - r) \psi(n_k) \ \mathrm{i.o.})\\
  &= 1.
\end{aligned}
\]
第二步得证。

综合第一步和第二步，定理得证。
:::

## 参考文献

```bibliography
概率极限理论基础:
  type: book
  author: [林正炎, 陆传荣, 苏中根]
  year: 1999
  title: 概率极限理论基础
  publisher: 高等教育出版社
```

```terms
重对数律:
  en: law of the iterated logarithm
  fr: loi du logarithme itéré :f
  de: Gesetz des iterierten Logarithmus :f
```
