---
title: 第二积分中值定理，Stieltjes 积分
---

## 第二积分中值定理

::: lemma [第二积分中值定理的弱形式]
假设 $I=[a,b]$，$g\in C(I)$，$f\in C^{1}(I)$，$f$ 单调递减（未必严格）
并且对任意的 $x\in I$，$f(x)\geqslant 0$。那么，一定存在 $c\in [a,b]$，使得
\[
\displaystyle \int_a^b fg= f(a)\int_{a}^c g.
\]
:::

::: proof
由于 $g\in C(I)$，我们可以定义它的原函数 $G(x)=\displaystyle \int_{a}^x g(y) dy$，
使得 $G\in C^1(I)$ 并且 $G(a)=0$。再根据 $f\in C^1(I)$，我们可以使用分部积分公式：
\[
\begin{aligned}
\int_a^b fg = f(b)G(b)+\int_a^b G (-f').
\end{aligned}
\]
由于 $f$ 是单调下降的，从而 $-f'\geqslant 0$，
我们可以利用第一积分中值定理，找到 $\xi \in [a,b]$ 使得
\[
\begin{aligned}
\int_a^b fg &= f(b)G(b)+G(\xi) \int_{a}^b(-f')\\
&=f(b)G(b)+G(\xi)(f(a)-f(b)).
\end{aligned}
\]
通过简单变形（我们明显可以假设 $f(a)\neq 0$），我们得到
\[
\begin{aligned}
\frac{1}{f(a)}\int_a^b fg=\frac{f(b)}{f(a)}G(b)
+\bigg(1-\frac{f(b)}{f(a)}\bigg)G(\xi).
\end{aligned}
\]
这表明 $\dfrac{1}{f(a)}\displaystyle\int_a^b fg$ 是
线段 $[G(b),G(\xi)]$ 或者 $[G(\xi),G(b)]$ 上的一个点，
对连续函数 $G$ 用中值定理，我们就得到 $c\in[\xi,b]$，使得
\[
\begin{aligned}
\frac{1}{f(a)}\int_a^b fg =G(c).
\end{aligned}
\]
这就是所要证明的结论。

我们还可以采取下面的方式来证明：令 $M=\displaystyle\sup_{x\in I}{G(x)}$，
$m=\displaystyle\inf_{x\in I}{G(x)}$，那么根据
\[
\begin{aligned}
\frac{1}{f(a)}\int_a^b fg =\frac{f(b)}{f(a)}G(b)
+\bigg(1-\frac{f(b)}{f(a)}\bigg)G(\xi).
\end{aligned}
\]
我们得到
\[
\begin{aligned}
m\leqslant \frac{1}{f(a)}\int_a^b fg \leqslant M.
\end{aligned}
\]
我们对 $G(x)$ 用介值定理即可。
:::

::: lemma [第二积分中值定理]
$I=[a,b]\subset \mathbb{R}$ 是闭区间，$f$ 和 $g$ 是 $I$ 上Riemann可积分的函数。
假设 $f$ 是递减的并且对任意的 $x\in I$，$f(x)\geqslant 0$。
那么，存在 $c\in [a,b]$，使得
\[
\displaystyle \int_a^b fg= f(a)\int_{a}^c g.
\]
:::

::: remark*
和上一个引理比较，我们不再假设 $f$ 和 $g$ 有较好的正则性（只假设可积性），
那么，引理中分部积分的技巧就不能再用了。我们之前提过，所谓的Abel求和法是分部积分的类比。
以下，我们用Darboux和代替积分，用Abel求和法代替分部积分，这是一个有启发性并且值得深究的证明。
:::

::: proof
我们不妨假设 $f(a)\neq 0$（否则 $f\equiv 0$，此时定理显然成立）。我们定义
\[
G(x)=\displaystyle \int_{a}^x g(y) dy.
\]
此时，$G(x)$ 是 $[a,b]$ 上面的连续函数（未必可微），而在引理中，这个函数是连续可微的。

根据引理的证明，我们只需要证明下面的不等式即可：
\[
\begin{aligned}
m f(a)\leqslant \int_a^b fg \leqslant M f(a),
\end{aligned}
\]
其中$M=\displaystyle\sup_{x\in I}{G(x)}$，$m=\displaystyle\inf_{x\in I}{G(x)}$，
这是因为我们可以利用 $G(x)$ 的介值定理来完成证明，参见上面引理的最后一步。

为了能够最大程度的保持之前的证明，在逼近的意义下，我们要给出如下的分部积分公式
\[
\int_a^b fg = f(b)G(b)+\int_a^b G (-f')
\]
的替代品。

我们先任意地选取一个分划 $\sigma=\{a=a_0<a_1<\cdots<a_n=b\}$
（最终，我们将令它的步长 $|\sigma|\rightarrow 0$）。
对于每个小区间 $[a_{i-1},a_{i}]$，我们定义
\[
m_i=\inf_{x\in [a_{i-1},a_i]}g(x), \ \ \ \ M_i=\sup_{x\in [a_{i-1},a_i]}g(x).
\]
根据第一中值定理，有 $\ell_i\in [m_{i},M_i]$，使得
\[
G(a_i)-G(a_{i-1})=\int_{a_{i-1}}^{a_i}g = \ell_i (a_i-a_{i-1}).
\]
特别地，我们知道（注意 $G(a _0)=0$）
\[
G(a_k)=\sum_{i=1}^k \ell_i (a_i-a_{i-1}).
\]

我们现在要用求和来代替积分 $\displaystyle \int_a^b fg $。
任意选取 $\xi_i\in [a_{i-1},a_i]$，如下成立：
\[
\bigg|\sum_{i=1}^n f(\xi_i) \ell_i (a_i-a_{i-1})
-\int_a^b fg\bigg|\rightarrow 0,
\ \ \text{当}~|\sigma| \rightarrow 0.\tag{$\star$}
\]
极限 $(\star)$ 成立并不明显。为此，我们用Darboux上下和来逼近积分：
当 $|\sigma|\rightarrow 0$，我们知道
\[
\begin{aligned}
\bigg|\sum_{i=1}^n f(\xi_i) g(\xi_i) (a_i-a_{i-1})
-\int_a^b fg\bigg|\rightarrow 0.
\end{aligned}
\]
所以，为了证明 $(\star)$，只需要说明
\[
\bigg|\sum_{i=1}^n f(\xi_i) \ell_i (a_i-a_{i-1})
-\sum_{i=1}^n f(\xi_i) g(\xi_i) (a_i-a_{i-1})\bigg|\rightarrow 0,
\ \ \text{当}~|\sigma| \rightarrow 0.
\]
我们有
\[
\begin{aligned}
\text{上式左边}&=\bigg|\sum_{i=1}^n f(\xi_i) \bigl(\ell_i -g(\xi_i)\bigr)(a_i-a_{i-1})\bigg|\\
&\leqslant \sum_{i=1}^n f(\xi_i) (M_i-m_i)(a_i-a_{i-1})\\
&\leqslant f(a) \left(\sum_{i=1}^n M_i(a_i-a_{i-1})-\sum_{i=1}^n m_i(a_i-a_{i-1})\right).
\end{aligned}
\]
后者为Darboux上下和之差，自然趋向于零，从而 $(\star)$ 得到证明。

为了证明 $\displaystyle m f(a)\leqslant \int_a^b fg \leqslant M f(a)$，
我们利用Abel求和法来代替分部积分，从而
\[
\begin{aligned}
\sum_{i=1}^n f(\xi_i) [\ell_i (a_i-a_{i-1})]
&=\sum_{i=1}^n f(\xi_i) (G(a_i)-G(a_{i-1}))\\
&=G(b)f(\xi_n)+\sum_{i=1}^{n-1} \bigl(f(\xi_i)-f(\xi_{i+1})\bigr) G(a_i).
\end{aligned}
\]
根据 $f$ 的性质以及 $G(b), G(a_i) \leqslant M$，我们有
\[
\begin{aligned}
\sum_{i=1}^n f(\xi_i) [\ell_i (a_i-a_{i-1})]
\leqslant M f(\xi_n)+\sum_{i=1}^{n-1} \bigl(f(\xi_i)-f(\xi_{i+1})\bigr) M
=f(\xi_1) M.
\end{aligned}
\]
类似地，
\[
\begin{aligned}
\sum_{i=1}^n f(\xi_i) [\ell_i (a_i-a_{i-1})]\geqslant f(\xi_1) m.
\end{aligned}
\]
另外，$\xi_1$ 的选取是任意的。特别地，我们令 $\xi_1=a$，
这就给出了 $\displaystyle m f(a)\leqslant \int_a^b fg \leqslant M f(a)$。
:::

## Stieltjes积分

给定有界闭区间 $I=[a,b]$ 上递增的函数 $\mu\colon [a,b]\rightarrow \mathbb{R}$。
我们重新定义有界**闭**区间 $[c,d]\subset [a,b]$ 的长度：
\[
\ell_\mu\bigl([c,d]\bigr)=\mu(d)-\mu(c).
\]

::: example*
- 1\) 如果 $\mu(x)=x$，那么，上面定义的区间长度就是我们所熟悉的长度。

- 2\) 对任意的 $\rho\in \mathcal{R}\bigl([a,b]\bigr)$，$\rho \geqslant 0$，我们令
  \[
  \mu(x)=\int_a^x \rho(t)dt.
  \]
  此时，
  \[
  \ell_\mu\bigl([c,d]\bigr)=\int_c^d \rho(x)dx.
  \]

:::

考虑一个有界函数 $f\colon [a,b]\rightarrow \mathbb{R}$ 和分划 $\sigma\in \mathcal{S}(I)$，
其中 $\sigma=\{a=a_0<a_1<\cdots<a_{n-1}<a_n=b\}$，
我们有上面这个新的长度 $\ell_\mu$ 所定义的Darboux上和以及Darboux下和。我们记
\[
M_i=\displaystyle\sup_{x\in [a_{i-1},a_i]}f(x),
\ \ m_i=\displaystyle\inf_{x\in [a_{i-1},a_i]}f(x).
\]
我们定义
\[
\begin{aligned}
\overline{S}_\mu(f;\sigma)&=\sum_{i=1}^n M_i\cdot \ell_\mu([a_{i-1},a_{i}])
=\sum_{i=1}^n(\mu(a_i)-\mu(a_{i-1}))M_i, \\
\underline{S}_\mu(f;\sigma)&=\sum_{i=1}^n m_i\cdot \ell_\mu([a_{i-1},a_{i}])
=\sum_{i=1}^n(\mu(a_i)-\mu(a_{i-1}))m_i.
\end{aligned}
\]
显然，我们有 $\overline{S}_\mu(f;\sigma)\geqslant \underline{S}_\mu(f;\sigma)$。
实际上，与Riemann积分的情形类似，我们可以证明：

::: lemma
Darboux上和与Darboux下和满足如下的性质：

- 1\) 如果 $\sigma\prec \sigma'$，那么
  \[
  \overline{S}_\mu(f;\sigma)\leqslant \overline{S}_\mu(f;\sigma'),
  \ \ \underline{S}_\mu(f;\sigma)\geqslant \underline{S}_\mu(f;\sigma').
  \]

- 2\) 对于任意两个分划 $\sigma,\sigma' \in \mathcal{S}(I)$，我们有
  \[
  \underline{S}_\mu(f;\sigma)\leqslant \overline{S}_\mu(f;\sigma').
  \]

:::

::: proof
1)是显然的。为了证明2)，只需要证明当 $\sigma\prec \sigma'$ 时，我们有
\[
\underline{S}_\mu(f;\sigma)\leqslant \overline{S}_\mu(f;\sigma'),
\ \ \underline{S}_\mu(f;\sigma')\leqslant \overline{S}_\mu(f;\sigma),
\]
我们在研究Riemann积分的时候就已经证明了类似的结论，这里就不再重复，留作课后的习题。
:::

仿照Riemann积分的情形，我们还可以定义**上积分**和**下积分**：
\[
\overline{\int}_{a}^b f d\mu
=\inf_{\sigma\in \mathcal{S}(I)} \overline{S}_\mu(f;\sigma),
\ \ \underline{\int}_{a}^b fd\mu
=\sup_{\sigma\in \mathcal{S}(I)} \underline{S}_\mu(f;\sigma).
\]
根据上面的引理，我们自然有
\[
\overline{\int}_{a}^b f d\mu \geqslant \underline{\int}_{a}^b fd\mu.
\]

::: definition [Stieltjes积分]
给定递增的函数 $\mu\colon [a,b]\rightarrow \mathbb{R}$
和有界函数 $f\colon [a,b]\rightarrow \mathbb{R}$，如果上述上下积分相等，即
\[
\overline{\int}_{a}^b f d\mu =  \underline{\int}_{a}^b fd\mu,
\]
我们就称 **$f$ 对于 $\mu$ 是Stieltjes可积的**并将上述数值记作
$\displaystyle \int_a^b fd\mu$。
我们用 $\mathcal{R}(I;\mu)$ 表示所有的Stieltjes可积函数的集合。
:::

::: remark*
我们注意到如果 $\mu(x)=x$，Stieltjes积分就是Riemann积分。
上述的构造中，我们通过 $\mu$ 重新定义了区间的长度（测度），
这种新的长度（测度）就给出了新的积分理论。
我们将证明Stieltjes积分满足很多与Riemann积分类似的性质，
比如说 $\mathcal{R}(I;\mu)$ 是 $\mathbb{R}$-线性空间并且
\[
\int_{a}^b \cdot ~d\mu\colon  \mathcal{R}(I;\mu)\rightarrow \mathbb{R},
\ \ f \mapsto \int_a^b fd\mu
\]
是 $\mathbb{R}$-线性映射。
:::

::: exercise*
对任意的 $\rho\in \mathcal{R}\bigl([a,b]\bigr)$，$\rho \geqslant 0$，
$\mu(x)=\displaystyle\int_a^x \rho(t)dt$。证明，对任意的 $f\in \mathcal{R}\bigl([a,b]\bigr)$，
都有 $f\in \mathcal{R}\bigl([a,b];\mu\bigr)$ 并且
\[
\int_a^b fd\mu= \int_a^b f(x)\rho(x)dx.
\]
据此，我们也把此时的 $d\mu$ 记作 $\rho dx$ 或者 $\rho(x)dx$，
$\rho$ 被称作是**密度函数**。特别地，假设 $\mu$ 连续可微（$\mu$ 默认是递增的），证明，
\[
\int_a^b f d\mu = \int_a^b f \mu'.
\]
:::

::: remark*
根据定义，一个函数是Stieltjes可积的可以用如下的方式判定：$f\in \mathcal{R}(I;\mu)$
当且仅当对任意的 $\varepsilon>0$，存在分划 $\sigma\in \mathcal{S}(I)$，使得
\[
\Bigl|\overline{S}_\mu(f;\sigma)
-\underline{S}_\mu(f;\sigma)\Bigr|<\varepsilon.
\]
:::

下面的命题表明，我们仍然可以用Riemann和来逼近Stieltjes积分：

::: proposition [Riemann和与Stieltjes积分]
给定一个Stieltjes可积的函数 $f\in \mathcal{R}(I;\mu)$，其中 $I=[a,b]$。
对任意的 $\varepsilon>0$，存在分划 $\sigma\in \mathcal{S}(I)$，
其中 $\sigma=\{a=a_0<a_1<\cdots<a_{n-1}<a_n=b\}$，
使得对任意的 $\xi_i \in [a_{i-1},a_i]$，都有
\[
\bigg|\sum_{i=1}^n f(\xi_i)\cdot \ell([a_{i-1},a_{i}])
-\int_a^b f d\mu \bigg|<\varepsilon.
\]
:::

::: proof
第一个不等式的证明是显然，我们只要选取分划 $\sigma$，使得
\[
\Bigl|\overline{S}_\mu(f;\sigma)
-\underline{S}_\mu(f;\sigma)\Bigr|<\varepsilon.
\]
此时，因为在每个区间 $[a_{i-1},a_i]$ 上，
有 $m_i\leqslant f(\xi_i)\leqslant M_i$，所以
\[
\underline{S}_\mu(f;\sigma)\leqslant
\sum_{i=1}^n f(\xi_i)\cdot \ell([a_{i-1},a_{i}])
\leqslant \overline{S}_\mu(f;\sigma).
\]
这立即就给出了所要的结论。
:::

我们来看几类Stieltjes可积函数的例子：

::: example*
证明下面的函数是Stieltjes可积的（$\mu$ 给定）

- 1\) $[a,b]$ 上的连续函数是Stieltjes可积的。

  用一致连续性来证明：假设 $f\in C([a,b])$，对任意的 $\varepsilon>0$，
  存在 $\delta>0$，使得当 $|x-y|<\delta$ 时，我们有 $|f(x)-f(y)|<\varepsilon$。
  特别地，当 $|\sigma|<\delta$ 时，我们有 $M_i-m_i<\varepsilon$，所以
  \[
  \begin{aligned}
  \bigl|\overline{S}_\mu(f;\sigma)-\underline{S}_\mu(f;\sigma)\bigr|
  &=\sum_{i=1}^n(\mu(a_i)-\mu(a_{i-1}))(M_i-m_i) \\
  &<\varepsilon\sum_{i=1}^n(\mu(a_i)-\mu(a_{i-1}))=\ell_\mu([a,b])\varepsilon.
  \end{aligned}
  \]

- 2\) 如果 $\mu$ 是连续的，那么 $[a,b]$ 上的单调函数是Stieltjes可积的。

  假设 $f$ 是 $[a,b]$ 上的递增（不妨假设）函数。根据 $\mu$ 的连续性，
  我们取一个特殊的分划，使得 $\mu(a_{i})-\mu(a_{i-1})=\dfrac{\mu(b)-\mu(a)}{n}$。
  此时，根据 $f$ 是递增的，我们知道 $M_i=f(a_i)$，$m_i=f(a_{i-1})$，所以选取
  \[
  \begin{aligned}
  \bigl|\overline{S}_\mu(f;\sigma)-\underline{S}_\mu(f;\sigma)\bigr|
  &=\sum_{i=1}^n(\mu(a_i)-\mu(a_{i-1}))(f(a_i)-f(a_{i-1})) \\
  &<\sum_{i=1}^n\dfrac{\mu(b)-\mu(a)}{n}(f(a_i)-f(a_{i-1}))\\
  &=\dfrac{\mu(b)-\mu(a)}{n}(f(b)-f(a)).
  \end{aligned}
  \]
  所以，当 $n\rightarrow \infty$ 时，我们有
  $\bigl|\overline{S}_\mu(f;\sigma)-\underline{S}_\mu(f;\sigma)\bigr|\rightarrow 0$，
  这就说明 $f\in \mathcal{R}\bigl([a,b];\mu\bigr)$。

:::

我们现在研究Stieltjes积分的性质。

::: proposition
给定有界闭区间 $I=[a,b]$ 和递增的函数 $\mu$，由此定义的Stieltjes可积函数具有如下的性质：

- 1\) $\mathcal{R}(I,\mu)$ 是 $\mathbb{R}$-线性空间，积分
  \[
  \displaystyle \int_{a}^b\cdot \,d\mu\colon  \mathcal{R}(I;\mu)\rightarrow \mathbb{R},
  \ \  f \mapsto \int_a^b fd\mu
  \]
  是线性映射。

- 2\) 如果对任意的 $x\in I$，我们都有 $f_1(x) \leqslant f_2(x)$，那么，
  \[
  \int_a^b f_1d\mu \leqslant \int_a^b f_2d\mu.
  \]

- 3\)（区间可加性）如果 $f\in \mathcal{R}([a,b];\mu)$，那么对任意的 $c\in [a,b]$，
  $f$ 在 $[a,c]$ 和 $[c,b]$ 上的限制都是Stieltjes可积的并且
  \[
  \int_a^b f d\mu=\int_a^c f d\mu+\int_c^b fd\mu.
  \]

- 4\) 如果 $f\in \mathcal{R}([a,b];\mu)$，
  那么对于 $|f| \in \mathcal{R}([a,b];\mu)$ 并且
  \[
  \bigg|\int_a^b f d\mu\bigg|\leqslant \int_a^b |f| d\mu.
  \]

- 5\) $\lambda >0$ 是常数，那么
  \[
  \int_a^b f d(\lambda\mu)=\lambda\int_a^b f d\mu.
  \]
  假设 $\nu$ 也是 $[a,b]$ 上递增的函数并且
  $f\in \mathcal{R}(I;\mu)\cap \mathcal{R}(I;\nu)$，
  那么 $f\in \mathcal{R}(I;\mu+\nu)$ 并且
  \[
  \int_a^b f d(\mu+\nu)=\int_a^b f d\mu+\int_a^b fd\nu.
  \]

- 6\) 如果 $f,g\in  \mathcal{R}([a,b],\mu)$，
  那么 $f\cdot g\in  \mathcal{R}([a,b],\mu)$。

:::

::: proof
证明的想法非常简单：先用适当的Darboux上下和的序列逼近积分，
对这些序列证明相应的性质，最终取极限。

我们利用4)和5)来演示一下如何运用上述的想法：对任意的 $\varepsilon>0$，
选取分划 $\sigma\in \mathcal{S}([a,b])$，使得
\[
\overline{S}_\mu(f;\sigma)-\underline{S}_\mu(f;\sigma)<\varepsilon.
\]
考虑函数 $|f|$ 的Darboux上下和
\[
\begin{aligned}
\overline{S}_\mu(|f|;\sigma)&=\sum_{i=1}^n \tilde{M}_i\cdot \ell_\mu([a_{i-1},a_{i}]), \\
\underline{S}_\mu(|f|;\sigma)&=\sum_{i=1}^n \tilde{m}_i\cdot \ell_\mu([a_{i-1},a_{i}]),
\end{aligned}
\]
其中
\[
\begin{aligned}
{M}_i&=\displaystyle\sup_{x\in [a_{i-1},a_i]}f(x),
\ \ \ {m}_i=\displaystyle\inf_{x\in [a_{i-1},a_i]}f(x),\\
\tilde{M}_i&=\displaystyle\sup_{x\in [a_{i-1},a_i]}|f(x)|,
\ \ \ \tilde{m}_i=\displaystyle\inf_{x\in [a_{i-1},a_i]}|f(x)|.
\end{aligned}
\]
由于
\[
\tilde{M}_i-\tilde{m}_i\leqslant {M}_i-m_i,
\]
所以
\[
\overline{S}_\mu(|f|;\sigma)-\underline{S}_\mu(|f|;\sigma)
\leqslant \overline{S}_\mu(f;\sigma)-\underline{S}_\mu(f;\sigma)<\varepsilon.
\]
这表明，$|f|$ 是Stieltjes可积的。另外，对于有限的求和，我们自然有
\[
\Bigl|\underline{S}_\mu(f;\sigma)\Bigr|\leqslant \overline{S}_\mu(|f|;\sigma).
\]
然后，左右两边分别与 $\bigg|\displaystyle\int_a^b fd\mu\bigg|$ 和 $\displaystyle\int_a^b|f|d\mu$
差不超过 $\varepsilon$，令 $\varepsilon\rightarrow 0$，我们就得到了要证明的不等式4)。

对于5)，假设 $f\in  \mathcal{R}([a,b];\mu)\cap  \mathcal{R}([a,b];\nu)$，
那么，对于任意给定的 $\varepsilon>0$，存在分划 $\sigma\in \mathcal{S}([a,b])$，使得
\[
\overline{S}_\mu(f;\sigma)-\underline{S}_\mu(f;\sigma)<\varepsilon,
\ \ \overline{S}_\nu(f;\sigma)-\underline{S}_\nu(f;\sigma)<\varepsilon.
\]
另外，根据定义，我们有
\[
\begin{aligned}
&\overline{S}_{\lambda\mu}(f;\sigma)=\lambda\overline{S}_\mu(f;\sigma),
\ \ \overline{S}_{\mu+\nu}(f;\sigma)=\overline{S}_\mu(f;\sigma)+\overline{S}_\nu(f;\sigma),\\
&\underline{S}_{\lambda\mu}(f;\sigma)=\lambda\underline{S}_\mu(f;\sigma),
\ \ \underline{S}_{\mu+\nu}(f;\sigma)=\underline{S}_\mu(f;\sigma)+\underline{S}_\nu(f;\sigma).
\end{aligned}
\]
从而，
\[
\overline{S}_{\lambda\mu}(f;\sigma)
-\underline{S}_{\lambda\mu}(f;\sigma)<\lambda\varepsilon,
\ \ \overline{S}_{\mu+\nu}(f;\sigma)
-\underline{S}_{\mu+\nu}(f;\sigma)<2\varepsilon.
\]
由于 $\varepsilon$ 是任意选取的，这就证明了可积性。
相应的等式由上述关于Darboux上下和的等式取极限立得。

其余几条的证明我们留作作业。
:::
