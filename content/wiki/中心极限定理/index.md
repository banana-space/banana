---
title: 中心极限定理
categories: [概率论]
notices:
  - name: 问题
    items:
      - “变形与推广”一节 Lindeberg 条件的证明中，$\sum_{m=1}^n |f_{n,m}-g_{n,m}|$ 的估计右端第二项似乎漏掉了求和 $\sum_{m=1}^n$。
      - “变形与推广”一节的注中，由此定理推出 Lindeberg–Lévy 中心极限定理时，所取的随机变量似乎应为 $X_{n,m}=\frac{X_m-\mu}{\sqrt{n}}$。
      - “Delta 法”一节的命题只假设 $g$ 在 $\mu$ 处有偏导数，但证明中的 Taylor 展开似乎需要 $g$ 在 $\mu$ 处可微。
navboxes: [概率论]
---

在[[概率论]]中，
**中心极限定理**是对一列[[独立同分布]]的[[随机变量]]之平均值的描述。

具体而言，[[大数定律]]表明，对一列独立同分布的随机变量而言，
当随机变量的个数 $n \to \infty$ 时，
其均值[[几乎必然收敛]]于其[[期望]]。
中心极限定理则表明，
其均值与期望的差大约满足 $1 / \sqrt{n}$ 倍的[[正态分布]]
$\mathcal{N} (0, \sigma^2)$，
其中 $\sigma^2$ 是原来随机变量的[[方差]]。

原先，此定理只是被称作极限定理。
随着人们发现它在概率论中有着极为重要的位置，才把它称之为中心极限定理。

## 叙述与证明

::: theorem [Lindeberg–Lévy 中心极限定理] {@Lindeberg–Lévy-中心极限定理}
设 $\{ X_n \}_{n > 0}$ 是一列[[独立同分布]]的[[随机变量]]，
具有有限的[[期望]] $\mu$ 和[[方差]] $\sigma^2$。
记 $\bar{X}_n = (X_1 + \cdots + X_n) / n$ 为其前 $n$ 项的均值。
则有[[依分布收敛]]
\[
\sqrt{n} \, (\bar{X}_n - \mu)
\overset{\mathrm{d}}{\longrightarrow}
\mathcal{N} (0, \sigma^2),
\]
其中 $\mathcal{N} (0, \sigma^2)$ 为方差 $\sigma^2$ 的[[正态分布]]。
:::

::: proof
注意 $\sqrt{n}(\bar{X}_n-\mu)$ 的特征函数为：
\[
f_n (t)=\bigl(1-\frac{t^2\sigma^2}{2n}+o\bigl(\frac{t^2}{n}\bigr)\bigr)^n
\]
固定 $t\in \mathbb{R}$，对充分大的 $n$，我们有
\[
|f_n(t)-\bigl(1-\frac{t^2\sigma^2}{2n}\bigr)^n|\leq \sum_{j=1}^n|o\bigl(\frac{t^2}{n}\bigr)|=o(1)
\]
故
\[
\lim_{n}f_n(t) = \lim_{n} \bigl(1-\frac{t^2\sigma^2}{2n}\bigr)^n=e^{-\frac{t^2\sigma^2}{2}}
\]
这说明
\[
\sqrt{n} \, (\bar{X}_n - \mu)
\overset{\mathrm{d}}{\longrightarrow}
\mathcal{N} (0, \sigma^2)
\]
:::

利用一元情形的中心极限定理可以容易地将其推广到多元。为此，我们先回忆下述事实。

::: lemma [Cramér–Wold]
$X_n= (X_n^{(1)},\cdots, X_n^{(k)})$ 为一列 $k$ 维随机向量。
$X_n\overset{\mathrm{d}}{\longrightarrow}X$
当且仅当 $c^T X_n \overset{\mathrm{d}}{\longrightarrow} c^T X$ 对任意 $c\in \mathbb R^k$ 成立。
:::

证明见页面 [[依分布收敛]]。

::: theorem [多元中心极限定理]
$(X_n)$ 是一列独立同分布的 $k$ 维随机变量，均值向量是 $\mu$，协方差矩阵是 $\Sigma$，
记 $S_n= \sum_{i=1}^n X_i$，则
\[
\sqrt{n} (\frac{S_n}{n}- \mu) \overset{\mathrm{d}}{\longrightarrow} N(0, \Sigma).
\]
:::

::: proof
任取 $k$ 维向量 $c$，则 $c^T X_n$ 独立同分布且它们均值为 $c^T \mu$，协方差矩阵是 $c^T \Sigma c$。
对 $(c^T X_n)$ 使用一元的中心极限定理得
$c^T \sqrt{n} (\frac{S_n}{n}- \mu) \overset{\mathrm{d}}{\longrightarrow} N(0, c^T \Sigma c).$
后者正是 $c^T Z$（其中 $Z\sim N(0, \Sigma)$）的分布。
由 Cramér–Wold 定理，
\[
\sqrt{n} (\frac{S_n}{n}- \mu) \overset{\mathrm{d}}{\longrightarrow} N(0, \Sigma).
\]
:::

## 变形与推广

::: theorem [Lindeberg 条件]
对于每一个正整数 $n$，设 $\{X_{n,m}\mid 1\leq m\leq n\}$ 是一列独立的随机变量，
满足 $\mathbb{E}(X_{n,m})=0$。假设这些随机变量满足 Lindeberg 条件，即满足如下两条性质：
\[
\begin{aligned}
  &\lim_{n\to\infty}\sum_{m=1}^n \mathbb{E}(X^2_{n,m})=\sigma^2<\infty\\
  &\lim_{n\to\infty}\sum_{m=1}^n \mathbb{E}(X^2_{n,m}\mathbb{1}_{\{|X_{n,m}|>\epsilon\}})=0\quad 对任意
  的\epsilon>0
\end{aligned}
\]
那么 $S_n=\sum_{m=1}^nX_{n,m}$ 满足中心极限定理，即我们有[[依分布收敛]]
\[
S_n
\overset{\mathrm{d}}{\longrightarrow}
\mathcal{N} (0, \sigma^2)
\]
:::

::: proof
记 $\sigma_{n,m}^2=E(X^2_{n,m})$。对
任意 $\epsilon>0$，我们有估计：
\[
\sigma_{n,m}^2\leq \epsilon^2+E(X_{n,m}^2\mathbb{1}_{\{|X_{n,m}|>\epsilon\}})
\]
进而
\[
\max_{1\leq m\leq n} \sigma_{n,m}^2\leq  \epsilon^2+
\sum_{m=1}^n E(X_{n,m}^2\mathbb{1}_{\{|X_{n,m}|>\epsilon\}})
\]
由 Lindeberg 条件及 $\epsilon$ 的任意性，我们有
\[
\lim_{n\to \infty}  \max_{1\leq m\leq n} \sigma_{n,m}^2=0
\]
下记 $X_{n,m}$ 的特征函数为 $f_{n,m}(t)$，$g_{n,m}(t)=1-\frac{t^2\sigma_{n,m}^2}{2}$，利用 Taylor
展开，我们有
\[
\begin{aligned}
  |f_{n,m}-g_{n,m}|&\leq 10 E(\min\{|tX_{n,m}|^3,|tX_{n,m}|^2\})\\
  &\leq 10 E(|tX_{n,m}|^3 \mathbb{1}_{\{|X_{n,m}|\leq \epsilon\}})
  + 10 E(|tX_{n,m}|^2 \mathbb{1}_{\{|X_{n,m}|> \epsilon\}})\\
  &\leq 10|t|^3\epsilon E(|X_{n,m}|^2)+10t^2 E(|X_{n,m}|^2 \mathbb{1}_{\{|X_{n,m}|> \epsilon\}})
\end{aligned}
\]
故
\[
\sum_{m=1}^n |f_{n,m}-g_{n,m}|\leq 10|t|^3\epsilon \sum_{m=1}^n
E(|X_{n,m}|^2)+10t^2 E(|X_{n,m}|^2 \mathbb{1}_{\{|X_{n,m}|> \epsilon\}})
\]
结合 Lindeberg 条件及 $\epsilon$ 的任意性，我们有
\[
\lim_{n\to \infty}\sum_{m=1}^n |f_{n,m}-g_{n,m}|=0
\]
固定 $t\in \mathbb{R}$，对充分大的 $n$，我们有 $|f_{n,m}(t)|\leq 1$、$|g_{n,m}(t)|\leq 1$。此时有
\[
|\prod_{m=1}^n f_{n,m}(t)-\prod_{m=1}^n g_{n,m}(t)|\leq \sum_{m=1}^n
|f_{n,m}(t)-g_{n,m}(t)|
\]
故
\[
\lim_{n\to \infty}|\prod_{m=1}^n f_{n,m}(t)-\prod_{m=1}^n g_{n,m}(t)|=0
\]
由于 $\prod_{m=1}^n f_{n,m}(t)$ 为 $S_n$ 的特征函数，
我们只需证 $\lim_{n\to\infty}\prod_{m=1}^n g_{n,m}(t)
  =\exp{(-t^2\sigma^2/2)}$ 即可。

下面固定 $t\in \mathbb{R}$ 以及 $r>1$，
由于 $ \lim_{n\to \infty}  \max_{1\leq m\leq n} \sigma_{n,m}^2=0$，
存在 $N=N(t,r)$ 使得 $n>N$ 时有
\[
-r\frac{t^2\sigma_{n,m}^2}{2}\leq
\log(1-\frac{t^2\sigma_{n,m}^2}{2})\leq
-\frac{t^2\sigma_{n,m}^2}{2}
\]
于是
\[
-r\frac{t^2\sigma^2}{2}\leq
\liminf_{n\to\infty}\sum_{m=1}^n \log(1-\frac{t^2\sigma_{n,m}^2}{2})
\leq
\limsup_{n\to\infty}\sum_{m=1}^n \log(1-\frac{t^2\sigma_{n,m}^2}{2})
\leq -\frac{t^2\sigma^2}{2}
\]
由于 $r>1$ 是任一数，我们有
\[
\log \lim_{n\to\infty}\prod_{m=1}^n g_{n,m}(t) = -\frac{t^2\sigma^2}{2}
\]
结合上文讨论，记 $f_n(t)$ 为 $S_n$ 的特征函数，我们有
\[
\lim_{n\to\infty} f_{n}(t)=e^{-\frac{t^2\sigma^2}{2}}
\]
即证。
:::

::: remark
此定理可推出 @Lindeberg–Lévy-中心极限定理，只需取 $X_{m,n}=\frac{X_n-\mu}{\sqrt{m}}$
即可。
:::

### Delta 法

中心极限定理常与 Delta 法联用来计算极限分布。Delta 法描述 $X_n$ 依分布收敛时 $X_n$ 的函数 $g(X_n)$
的极限行为。

::: proposition [Delta 法]
$k$ 维随机变量 $X_n$ 满足 $\sqrt{n} (X_n- \mu)\overset{\mathrm{d}}{\longrightarrow} N(0, \Sigma)$，
其中 $\mu$ 为 $k$ 维列向量，$\Sigma$ 是 $k\times k$ 半正定矩阵。
$g: \mathbb R^k\to \mathbb R$ 在 $\mu$ 处对所有分量均有偏导数，则
\[
\sqrt{n} (g(X_n) - g(\mu)) \overset{\mathrm{d}}{\longrightarrow} N(0, \nabla g(\mu)^T \Sigma \nabla g(\mu)).
\]
:::

::: proof
由 Slutsky 定理，
$X_n- \mu= (\frac{1}{\sqrt{n}}) (\sqrt{n} (X_n- \mu)) \overset{\mathrm{d}}{\longrightarrow} 0$，
而极限为常随机变量时依分布收敛等价于依概率收敛，所以 $X_n$ 依概率收敛到 $\mu$。

由 Taylor 展开，

```math {@eq:Delta-methos-Taylor-expansion}
g(X_n)= g(\mu)+ \nabla g(\mu)^T (X_n- \mu)+ \alpha_n \| X_n- \mu\|.
```

其中余项 $\alpha_n$ 依概率趋于 $0$：对任意 $\epsilon$，存在 $\delta$ 使得 $|X_n- \mu|< \delta$
时 $|\alpha_n|< \epsilon$，故
\[
P(|\alpha_n|< \epsilon) \ge P(|X_n- \mu|< \delta)\to 1,
\]
最后一个极限是因为 $X_n$ 依概率收敛到 $\mu$。

由 @eq:Delta-methos-Taylor-expansion 得

```math {@eq:Delta-methos-Taylor-expansion-rearrange}
\sqrt{n} (g(X_n)- g(\mu))= \sqrt{n}\nabla g(\mu)^T (X_n- \mu)+ \alpha_n \sqrt{n} \| X_n- \mu\|.
```

由假设知
\[
\sqrt{n}\nabla g(\mu)^T (X_n- \mu)\overset{\mathrm{d}}{\longrightarrow} N(0, \nabla g(\mu)^T \Sigma \nabla g(\mu)),
\]
对于 $\alpha_n \sqrt{n} \| X_n- \mu\|$，
由连续映射定理知 $\sqrt{n} \| X_n- \mu\| \overset{\mathrm{d}}{\longrightarrow} \|Y\|$，
$Y\sim N(0, \Sigma)$。
又 $\alpha_n$ 依概率趋于 $0$，
所以由 Slutsky 定理得 $\alpha_n \sqrt{n} \| X_n- \mu\| \overset{\mathrm{p}}{\longrightarrow} 0$。
最后再对 @eq:Delta-methos-Taylor-expansion-rearrange 右边使用一次 Slutsky 定理得
@eq:Delta-methos-Taylor-expansion-rearrange 右边依分布收敛到
$N(0, \nabla g(\mu)^T \Sigma \nabla g(\mu))$，
从而左边亦是如此。
:::

```terms
中心极限定理:
  en: central limit theorem
  de: zentraler Grenzwertsatz
  fr: théorème central limite
```
