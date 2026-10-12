---
title: 指数函数与三角函数的构造与性质
---

## 两道经典习题

在讲解指数函数的构造之前，我们先讲解两道经典的极限习题：

::: example*
当 $\alpha>1$ 时，级数 $\displaystyle \sum_{k=1}^\infty \frac{1}{k^\alpha}$ 是收敛的。

这是一个正项的级数，我们利用我们之前的分析：找一个能够控制这个级数并且同时它比较方便计算，
为此我们再次利用调和级数中庄子的二分法的想法。对于 $n=2^{k}-1$，我们有

\[
\begin{aligned}
\sum_{k=1}^{n-1}\frac{1}{k^\alpha}&=\underbrace{\frac{1}{1}}_{1\text{个},~\leqslant 1}+\underbrace{\left(\frac{1}{2^\alpha}+\frac{1}{3^\alpha}\right)}_{2\text{个},~\leqslant \frac{1}{2^\alpha}}+\underbrace{\left(\frac{1}{4^\alpha}+\frac{1}{5^\alpha}+\frac{1}{6^\alpha}+\frac{1}{7^\alpha}\right)}_{4\text{个},~\leqslant \frac{1}{2^{2\alpha}}}+\cdots+\underbrace{\left(\frac{1}{2^{(k-1)\alpha}}+\frac{1}{\bigl(2^{k-1}+1\bigr)^\alpha}+\cdots+\frac{1}{\bigl(2^{k}-1\bigr)^\alpha}\right)}_{2^{k-1}\text{个},~\leqslant \frac{1}{2^{(k-1)\alpha}}}\\
&\leqslant \sum_{k=1}^{n-1}\frac{1}{2^{(k-1)\alpha}}\times 2^{k-1}=\sum_{k=1}^{n-1} 2^{(1-k)(\alpha-1)}.
\end{aligned}
\]
由于 $\alpha-1>0$，根据等比数列的求和公式，上面的求和是有限的。
:::

::: example*
$\{x_n\}_{n\geqslant 1}$ 是由非负实数构成数列。
假设对任意的自然数 $m$ 和 $n$，都有 $x_{m+n}\leqslant x_m+x_n$。
证明，数列 $\bigl\{\dfrac{x_n}{n}\bigr\}_{n\geqslant 1}$ 有极限。
:::

::: proof
先固定一个自然数 $k$。对任意的 $n=\ell k +r$，其中 $r=0,1,\cdots,k-1$。
根据题目中所给的不等式，我们有
\[
\frac{x_n}{n}\leqslant \frac{\ell x_k+x_r}{n}=\frac{\ell x_k+x_r}{\ell k+r}.
\]
据此可知，数列 $\bigl\{\dfrac{x_n}{n}\bigr\}_{n\geqslant 1}$ 有界。
我们可以选取 $n_i\rightarrow \infty$（这是本次作业的一个题目），使得
\[
\displaystyle\lim_{i\rightarrow \infty}\dfrac{x_{n_i}}{{n_i}}= \limsup_{n\rightarrow \infty}\dfrac{x_n}{n}.
\]
根据上述的不等式（把 $n$ 换成 $n_i$，$\ell$ 换成 $\ell_i$，$r$ 换成 $r_i$），
令 $i\rightarrow \infty$，即 $n_i\rightarrow \infty$，
从而，$\dfrac{\ell_i x_k+x_{r_i}}{\ell_i k+r_i}\rightarrow \dfrac{x_k}{k}$。
所以，我们得到
\[
\limsup_{n\rightarrow \infty}\frac{x_n}{n}\leqslant \frac{x_k}{k}.
\]
现在允许 $k$ 变化，对上面左右两边同时取下极限，我们得到
\[
\limsup_{n\rightarrow \infty}\frac{x_n}{n}\leqslant \liminf_{k\rightarrow \infty}\frac{x_k}{k}.
\]
所以所研究的极限存在。
:::

## 指数函数的构造

目前，我们在实数 $\mathbb{R}$ 上能够定义的函数非常有限：根据 $\mathbb{R}$ 上的乘法和加法结构，
我们目前只能定义多项式函数
\[
\mathbb{R}\rightarrow \mathbb{R},  \  \  x\mapsto a_d x^d+a_{d-1}x^{d-1}+\cdots +a_1 x + a_0,
\]
其中 $a_0,\cdots, a_d$ 是实数。

利用级数（取极限的概念），我们可以定义

::: definition
我们定义**指数函数**$\exp\colon \mathbb{R}\rightarrow \mathbb{R}$ 如下：
\[
x\mapsto \exp(x)=e^x=\sum_{k=0}^\infty \frac{x^k}{k!}.
\]
:::

我们必须要说明指数函数是良好定义，即对任意的 $x\in \mathbb{R}$，
级数 $\displaystyle \sum_{k=0}^\infty \frac{x^k}{k!}$ 是收敛的：
这是因为对任意给定的 $x \in \mathbb{R}$，我们假设 $|x|=M$，
此时，一定存在 $N>0$，使得 $k\geqslant N$ 时，我们有（请证明这一点）
\[
\Big|\frac{x^k}{k!}\Big|\leqslant \frac{1}{2^k} (\Leftrightarrow (2M)^k\leqslant k!, \ \ \text{如果 $k\geq N$})
\]
此时，我们可以用 $\displaystyle \sum_{k\geqslant N}\frac{1}{2^k}$
来控制 $\displaystyle \sum_{k\geqslant N} \frac{x^k}{k!}$，
这表明级数 $\displaystyle \sum_{k=0}^\infty \frac{x^k}{k!}$ 收敛。

::: exercise*
（重要！）
证明，我们可以定义 $\mathbb{C}$ 上的指数函数：
\[
\exp\colon  \mathbb{C}\rightarrow \mathbb{C}, \ \ z\mapsto \exp(z)=e^z=\sum_{k=0}^\infty \frac{z^k}{k!}.
\]
:::

为了进一步了解 $e^x$ 的性质，比如说对任意的 $x\in \mathbb{R}$，我们都有 $e^x>0$，
我们需要关于级数的进一步的性质。
事实上，为了证明 $\exp\colon \mathbb{R}\rightarrow \mathbb{R}_{>0}$，
我们需要证明 $\exp$ 的一个代数性质：对任意的 $x,y\in \mathbb{R}$，
我们都有 $e^{x+y}=e^x\cdot e^y$（即 $\exp\colon (\mathbb{R},+)\rightarrow (\mathbb{R}_{>0},\times)$
是群同态）。

我们需要研究双指标的数列。
所谓的双指标的数列 $\{x_{i,j}\}_{i,j\geqslant 1}$（我们目前先假设这是实数序列即可，
其余的情况可以简单地推广过去），就是一个映射
\[
F\colon \mathbb{Z}_{\geqslant 1}\times \mathbb{Z}_{\geqslant 1}\rightarrow \mathbb{R}, \ \ (i,j)\mapsto F(i,j)=x_{i,j}.
\]
一个双指标序列的重排 $\{y_n\}_{n\geqslant 1}$ 直观上说我们要求当每个
$x_{i,j}$（位置不同的时候视作是不同的）都在数列 $\{y_n\}_{n\geqslant 1}$ 中出现且只出现一次并且
$\{y_n\}_{n\geqslant 1}$ 中不再出现别的项。
我们用映射的语言严格定义重排的概念：
所谓的**重排**指的是一个双射
$\Phi\colon  \mathbb{Z}_{\geqslant 1} \rightarrow \mathbb{Z}_{\geqslant 1}\times \mathbb{Z}_{\geqslant 1}$，
从而对任意的 $n\geqslant 1$，我们令 $y_n=x_{\Phi(n)}$，
其中 $\Phi(n)\in \mathbb{Z}_{\geqslant 1}\times \mathbb{Z}_{\geqslant 1}$ 是一个双指标。

我们用双指标的序列来研究两个级数的乘积：

::: proposition
$\displaystyle \sum_{k=1}^\infty a_k$ 和 $\displaystyle \sum_{k=1}^\infty b_k$
是收敛的正项（实数）级数，$\{c_n\}_{n\geqslant 1}$ 是 $\{a_ib_j\}_{i,j\geqslant 1}$ 的一个重排，
那么，级数 $\displaystyle \sum_{n=1}^\infty c_n$ 收敛并且（无论采取何种重排）有
\[
\sum_{n=1}^\infty c_n=\bigl( \sum_{k=1}^\infty a_k\bigr)\bigl( \sum_{k=1}^\infty b_k\bigr).
\]
特别地（通过选取 $45^\circ$ 线的重排），
级数 $\displaystyle \sum_{k=2}^\infty \bigl(\sum_{j=1}^{k-1} a_jb_{k-j}\bigr)$ 是收敛的，并且
\[
\sum_{k=2}^\infty \bigl(\sum_{j=1}^{k-1} a_jb_{k-j}\bigr)=\bigl( \sum_{k=1}^\infty a_k\bigr)\bigl( \sum_{k=1}^\infty b_k\bigr).
\]

进一步，
如果 $\displaystyle \sum_{k=1}^\infty a_k$ 和 $\displaystyle \sum_{k=1}^\infty b_k$
是绝对收敛的实数级数（未必是正项的），那么上面的结论仍然成立。
:::

::: proof
先处理正项级数的情形：对任意 $N>0$，一定存在 $N_1'$ 和 $N_2'$，使得部分和
\[
\displaystyle C_N=\sum_{n=1}^N c_n\leqslant  \Bigl(\sum_{k=1}^{N_1'} a_k\Bigr)\Bigl(\sum_{\ell=1}^{N_2'} b_\ell\Bigr)\leqslant \Bigl( \sum_{k=1}^\infty a_k\Bigr)\Bigl( \sum_{k=1}^\infty b_k\Bigr).
\]
即部分和是有界的，从而 $\displaystyle \sum_{n=1}^\infty c_n$ 收敛。

其次，我们先任意给定 $\varepsilon>0$。
对任意 $\varepsilon_1$ 和 $\varepsilon_2$（这两个数待定，将由 $\varepsilon$ 决定），按照定义，
我们可以选取 $N_1$ 和 $N_2$ 使得
\[
|\sum_{k=1}^{N_1} a_k-\sum_{k=1}^{\infty} a_k|<\varepsilon_1,\ |\sum_{k=1}^{N_2} b_k-\sum_{k=1}^{\infty} b_k|<\varepsilon_2.
\]
从而，我们有
\[
\begin{aligned}
& \ \ \ \big|(\sum_{k=1}^{N_1} a_k)(\sum_{k=1}^{N_2} b_k)-(\sum_{k=1}^{\infty} a_k)(\sum_{k=1}^{\infty} b_k)\big|\\
&\leqslant \big|(\sum_{k=1}^{N_1} a_k)(\sum_{k=1}^{N_2} b_k)-(\sum_{k=1}^{N_1} a_k)(\sum_{k=1}^{\infty} b_k)\big|+\big|(\sum_{k=1}^{N_1} a_k)(\sum_{k=1}^{\infty} b_k)-(\sum_{k=1}^{\infty} a_k)(\sum_{k=1}^{\infty} b_k)\big|\\
&=\big|\sum_{k=1}^{N_1} a_k\big|\big|\sum_{k=1}^{N_2} b_k-\sum_{k=1}^{\infty} b_k\big|+\big|\sum_{k=1}^{N_1} a_k-\sum_{k=1}^{\infty} a_k\big|\big|\sum_{k=1}^{\infty} b_k\big|\\
&\leqslant \varepsilon_1 \big|\sum_{k=1}^{\infty} a_k\big|+\varepsilon_2 \big|\sum_{k=1}^{\infty} b_k\big|
\end{aligned}
\]
所以，可以适当地选取 $\varepsilon_1$ 和 $\varepsilon_2$
（比如 $\displaystyle\varepsilon_1=\varepsilon_2
=\dfrac{\varepsilon}{2}\bigl(\sum_{k=1}^{\infty} a_k+\sum_{k=1}^{\infty} b_k\bigr)^{-1}$）
使得上面式子的右端小于 $\varepsilon$。
最后，对于任意的 $N_1,N_2$都存在足够大的 $N$，
使得 $\{c_1,\cdots,c_N\}$ 已经囊括了所有的 $a_ib_j$ 形式的项，
其中 $1\leqslant i\leqslant N_1$，$1\leqslant j\leqslant N_2$，此时，
\[
(\sum_{k=1}^{N_1} a_k)(\sum_{k=1}^{N_2} b_k) \leqslant C_N \leqslant (\sum_{k=1}^{N_1'} a_k)(\sum_{k=1}^{N_2'} b_k),
\]
于是
\[
\big|C_N-\bigl( \sum_{k=1}^\infty a_k\bigr)\bigl( \sum_{k=1}^\infty b_k\bigr)\big|<\varepsilon.
\]
这就完成了正项级数情形的证明。

为了证明绝对收敛的情形，我们要把级数分拆成两个部分。
首先对于任意的实数其中给定实数 $x$，我们定义
\[
x^+=\begin{cases}
x, \ \ \text{如果 $x\geqslant 0$；}\\
0,\ \ \text{如果 $x\leqslant 0$，}
\end{cases} \ \ \  x^-=\begin{cases}0, \ \ \text{如果 $x\geqslant 0$；}\\
-x,\ \ \text{如果 $x\leqslant 0$。}
\end{cases}
\]
所以，$x=x^+-x^-$。从而，我们将 $\displaystyle \sum_{k=1}^\infty a_k$ 分拆为
\[
\sum_{k=1}^\infty a_k= \sum_{k=1}^\infty a^+_k- \sum_{k=1}^\infty a^-_k.
\]
由于 $|x^\pm| \leqslant |x|$，根据绝对收敛性，$\displaystyle\sum_{k=1}^\infty a_k^\pm$ 均收敛。
类似地讨论对 $\displaystyle \sum_{k=1}^\infty b_k$ 也成立，其中我们将它分解为
\[
\sum_{k=1}^\infty b_k= \sum_{k=1}^\infty b^+_k- \sum_{k=1}^\infty b^-_k.
\]
对于数列 $\{c_n\}_{n\geqslant 1}$ 的任意一项有 $c_n=a_ib_j$，我们有
\[
c_n=\underbrace{a_i^+b_j^+}_{c_n^{++}}+\underbrace{a_i^-b_j^-}_{c_n^{--}}-(\underbrace{a_i^+b_j^-}_{c_n^{+-}}+\underbrace{a_i^-b_j^+}_{c_n^{-+}}).
\]
所以，我们将 $\displaystyle \sum_{k=1}^\infty c_n$ 分拆为四个级数的和（差）：
\[
\sum_{k=1}^\infty c_n = \sum_{k=1}^\infty c_n^{++}+\sum_{k=1}^\infty c_n^{--}-\sum_{k=1}^\infty c_n^{+-}-\sum_{k=1}^\infty c_n^{-+}.
\]
根据刚证明的关于正项级数的结论，上面右端的每个级数都收敛，
所以 $\displaystyle \sum_{k=1}^\infty c_n$ 也收敛。另外，利用关于正项级数的结论我们还有
\[
\begin{aligned}
\sum_{k=1}^\infty c_n &=\bigl( \sum_{k=1}^\infty a^+_k\bigr)\bigl( \sum_{k=1}^\infty b^+_k\bigr)+\bigl( \sum_{k=1}^\infty a^-_k\bigr)\bigl( \sum_{k=1}^\infty b^-_k\bigr)-\bigl( \sum_{k=1}^\infty a^+_k\bigr)\bigl( \sum_{k=1}^\infty b^-_k\bigr)-\bigl( \sum_{k=1}^\infty a^-_k\bigr)\bigl( \sum_{k=1}^\infty b^+_k\bigr)\\
&=\bigl( \sum_{k=1}^\infty a^+_k -\sum_{k=1}^\infty a^-_k\bigr)\bigl( \sum_{k=1}^\infty b^+_k-\sum_{k=1}^\infty b^-_k\bigr)\\
&=\bigl( \sum_{k=1}^\infty a_k\bigr)\bigl( \sum_{k=1}^\infty b_k\bigr).
\end{aligned}
\]
命题得到了证明。
:::

::: remark*
上述绝对收敛部分定理对于复数的情形也成立。
证明的过程中，我们需要进一步将一个复数再分解成实部和虚部之后，再对它们分别作上述分拆。
:::

::: exercise*
试证明级数形式的Fubini定理：
假设级数 $\displaystyle \sum_{k=2}^\infty \bigl(\sum_{j=1}^{k-1} a_jb_{k-j}\bigr)$
是绝对收敛的（复数）级数，那么，我们有
\[
\sum_{i=1}^\infty \bigl(\sum_{j=1}^\infty a_ib_{j}\bigr)=\bigl( \sum_{k=1}^\infty a_k\bigr)\bigl( \sum_{k=1}^\infty b_k\bigr)=\sum_{j=1}^\infty \bigl(\sum_{i=1}^\infty a_ib_{j}\bigr).
\]
:::

::: theorem
指数函数 $\exp\colon \mathbb{C}\rightarrow \mathbb{C}$ 满足：
对任意的 $z_1,z_2\in \mathbb{C}$，我们都有
\[
e^{z_1+z_2}=e^{z_1}\cdot e^{z_2}.
\]
特别地，对任意的 $z\in \mathbb{C}$，我们有 $\exp(z)\neq 0$；
对任意的 $x\in \mathbb{R}$，我们有 $\exp(x)>0$。
（用代数的语言讲，$\exp\colon (\mathbb{C},+)\rightarrow (\mathbb{C}-\{0\},\times)$ 是群同态）
:::

::: proof
我们已经知道 $e^{z}=\displaystyle\sum_{k=0}^\infty \frac{z^k}{k!}$ 是绝对收敛的级数，
利用上面的性质（保证了下面的所有操作都合法），我们有
\[
\begin{aligned}
e^{z_1}\cdot e^{z_2}&=\bigl(\sum_{k=0}^\infty \frac{z_1^k}{k!}\bigr)\bigl(\sum_{k=0}^\infty \frac{z_2^k}{k!}\bigr)=\sum_{k=0}^\infty \sum_{i+j=k}\frac{z_1^i}{i!}\frac{z_2^j}{j!}\\
&=\sum_{k=0}^\infty\frac{1}{k!} \sum_{i+j=k}\frac{k!}{i!j!} z_1^i \cdot z_2^j{\color{red}=}\sum_{k=0}^\infty\frac{1}{k!}(z_1+z_2)^k=e^{z_1+z_2}.
\end{aligned}
\]
我们注意到，为了上面的红色等号成立，我们已经隐含地用到了 $z_1\cdot z_2=z_2\cdot z_1$。

另外，我们注意到一个很简单但是很重要的事实（用定义）：
\[
e^0=1.
\]
为了说明 $e^z\neq 0$，我们只需要观察到 $e^z\cdot e^{-z}=e^0=1$ 即可；
为了说明 $e^x>0$，其中 $x\in \mathbb{R}$，我们首先用定义说明如果 $x>0$，那么 $e^{x}>0$，
进一步对于 $-x$（$x>0$），我们有 $e^{-x}=\bigl(e^x\bigr)^{-1}>0$。
:::

::: exercise*
证明，函数 $\exp(x)$ 在 $\mathbb{R}$ 上是严格递增的。
特别地，$\exp\colon \mathbb{R}\rightarrow \mathbb{R}_{>0}$ 是单射。
:::

实际上，$\exp\colon \mathbb{R}\rightarrow \mathbb{R}_{>0}$ 是满射（从而可以定义 $\log$ 函数），
我们还需要等待必要的工具来完成这个证明。

## 三角函数的定义

利用指数映射 $\exp(z)$，我们可以定义正弦和余弦函数：
\[
\cos z =\frac{e^{iz}+e^{-iz}}{2} = \sum_{k=0}^\infty \frac{(-1)^k z^{2k}}{(2k)!}, \ \ \sin z =\frac{e^{iz}-e^{-iz}}{2i} = \sum_{k=0}^\infty \frac{(-1)^k z^{2k+1}}{(2k+1)!}.
\]
换句话说，目前 $\sin(z)$ 和 $\cos(z)$ 是用级数来定义的。特别地，我们有**Euler公式**：
\[
e^{iz}=\cos z + i \sin z.
\]

::: remark*
- 1\) 另外，关于正切函数余切函数等，我们仍然和中学一样，通过正弦和余弦的商的定义。

- 2\) 中学数学里我们是这样定义三角函数的：假设 $\triangle ABC$ 是直角三角形，
  $\angle B$ 是直角，$\angle A = \theta$，那么 $\sin(\theta)=\dfrac{|BC|}{|AC|}$。
  我们将证明我们所定义的三角函数也满足这个性质。这将是一个很深刻的定理，
  因为我们的函数只用极限就可以定义，目前没有任何的证据表明它实际上还可以几何地被定义。

:::

现在是一个绝佳的时机来展示函数代数性质的应用，利用 $e^{z_1+z_2}=e^{z_1}\cdot e^{z_2}$，
我们可以证明有关三角函数的熟知的性质：

- 1\) 对任意的 $z\in \mathbb{C}$，都有 $(\cos z)^2+(\sin z)^2 =1$。

  按照定义，
  \[
  (\cos z)^2+(\sin z)^2=\frac{\bigl(e^{iz}+e^{-iz}\bigr)^2}{4}-\frac{\bigl(e^{iz}-e^{-iz}\bigr)^2}{4}=1.
  \]

- 2\) 对任意 $x\in \mathbb{R}$，都有 $\big|e^{ix}\big|=1$，其中 $\big|\cdot\big|$ 是取复数的模长。
  特别地，对于 $x\in \mathbb{R}$，我们有 $|\sin(x)|\leqslant 1$ 和 $|\cos(x)|\leqslant 1$。

  这是前一公式的推论，因为如果 $x\in \mathbb{R}$，那么 $\sin(x)\in \mathbb{R}$，
  $\cos(x)\in \mathbb{R}$。

- 3\) 三角函数的和角公式：对任意的实数 $x$ 和 $y$，
  \[
  \cos(x+y)=\cos x\cos y-\sin x\sin y,\ \ \sin(x+y)=\sin x\cos y+\cos x\sin y.
  \]

  根据 $\exp$ 的性质，
  \[
  \cos(x+y)+i \sin(x+y)=e^{ix}\cdot e^{iy}=\bigl(\cos(x)+i \sin(x)\bigr)\bigl(\cos(y)+i \sin(y)\bigr).
  \]
  展开比较实部和虚部即可（因为此时 $\sin(x)$ 和 $\cos(x)$ 都是实数）。

::: remark*
中学中所熟知的关于三角函数的性质都是由以上几个性质通过代数运算得来的。
所以，我们之后仍然可以熟练使用所熟悉的关于三角函数的公式。
:::
