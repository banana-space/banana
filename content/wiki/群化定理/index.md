---
title: 群化定理
categories: [高阶代数]
navboxes: [高阶代数]
---

**群化定理**是[[高阶代数]]中的定理，由 [[Dusa McDuff]]
和 [[Graeme Segal]] 于 1976 年证明。
此定理给出了在满足一定条件时，
[[$\mathbb{E}_k$-幺半群]]的[[群化]]的具体构造，
从而证明了[[代数 $K$ 理论]]的
[[Quillen $+$ 构造]]正是群化，
也就是 [[Grothendieck 群]]的高阶代数版本。

## $\mathbb{E}_1$ 情形

本节设 $M$ 是 $\mathbb{E}_1$-幺半群，$R$ 是 $\mathbb{E}_1$-环。
以 $M^\text{gp}$ 记 $M$ 的[[群化]]，以 $R[M]$ 记幺半群环
$R\otimes_\mathbb{S}\Sigma^\infty_+M$，以 $\pi_M$ 记
$\operatorname{im}(\pi_0(M)\to\pi_0(R[M]))$，
是 $\pi_0(R[M])$ 的[[乘性子集]]。

::: theorem
$R[M^\text{gp}]$ 是范畴
$$
\{R[M]\to A\mid A\in\mathsf{Ring}_{\mathbb{E}_1},\,
\operatorname{im}(\pi_M)\subseteq\pi_0(A)^\times\}
$$
的始对象。
:::

::: proof
对 $\mathbb{E}_1$-$R$-代数 $A$ 计算
\[
\begin{aligned}
  &\phantom{=}\{f\in\operatorname{Hom}_
  {{\mathsf{Ring}_{\mathbb{E}_1/R}}}(R[M],A)\mid
  f(\pi_M)\subseteq\pi_0(A)^\times\}\\
  &=\{f\in\operatorname{Hom}_
  {\mathsf{Mon}_{\mathbb{E}_1}}(M,A)\mid
  f(\pi_0(M))\subseteq\pi_0(A)^\times\}\\
  &=\operatorname{Hom}_
  {\mathsf{Mon}_{\mathbb{E}_1}}(M,A^\times)\\
  &=\operatorname{Hom}_{\mathsf{Grp}_{\mathbb{E}_1}}
  (M^\text{gp},A^\times)\\
  &=\operatorname{Hom}_{\mathsf{Ring}_{\mathbb{E}_1/R}}
  (R[M^\text{gp}],A),
\end{aligned}
\]
即得结论。
:::

::: corollary
设乘性子集 $\pi_R\subseteq\pi_*(R[M])$ 满足左
[[Ore 条件]]，比如 $\pi_R$ 包含于 $\pi_*(R[M])$ 的中心。
则 $\pi_*(R[M^\text{gp}])=\pi_R^{-1}\pi_*(R[M])$，
即 $R[M^\text{gp}]=\operatornamewithlimits{colim}
  _{m\in M}m^{-1}R[M]$ 作为右 $R[M]$-模，
其中 $m^{-1}R[M]$ 是一元生成自由模，生成元叫 $m^{-1}$，
转移映射如记号所描述。
:::

::: proof
这是 [@HA]，7.2.3.20。
:::

## $\mathbb{E}_\infty$ 情形

本节设 $M$ 是 $\mathbb{E}_\infty$-幺半群。仍以 $M^\text{gp}$
记 $M$ 的群化。取 $\pi_0(M)$ 的一组生成元 $\{m_i\}_{i\in I}$，
其中指标集 $I$ 是[[序数]]。把这些 $\pi_0(M)$ 的元素提升到 $M$，
仍记为 $m_i$。对 $i\le I$ 归纳定义
$$
M_i=\begin{cases}
  M,&i=0;\\
  \operatornamewithlimits{colim}(M_j\xrightarrow{m_j}M_j
  \xrightarrow{m_j}\cdots),&i=j+1;\\
  \operatornamewithlimits{colim}_{j<i}M_j,&
  \text{$i>0$ 为极限序数};
\end{cases}
$$
然后记 $M_\infty=M_I$。由于 $M$ 是 $\mathbb{E}_\infty$-幺半群，
被 $M$ 左作用的空间到自身的左乘映射是左等变的。由此可把 $M_\infty$
做成被 $M$ 左作用的空间，带左等变自然映射 $M\to M_\infty$，
且 $\pi_0(M_\infty)=\pi_0(M)^\text{gp}$，
$\pi_n(M_\infty)=\operatornamewithlimits{colim}
_{m\in\pi_0(M)}\pi_n(M,m)$，对 $n\in\mathbb{Z}_+$。对 $i\le I$ 归纳，
不难定义自然映射 $M_\infty\to M^\text{gp}$，使得复合
$M\to M_\infty\to M^\text{gp}$ 是[[群化]]定义中的映射。
如果该自然映射给出 $M_\infty=M^\text{gp}$，那么 $M^\text{gp}$
就比较显式了。可惜事与愿违：

::: example {@自由交换幺半群}
对 $n\in\mathbb{N}$，以 $\mathfrak{S}_n$ 记 $n$ 元[[对称群]]。令
$M=\bigsqcup_{n\in\mathbb{N}}B\mathfrak{S}_n$ 为一元生成自由
$\mathbb{E}_\infty$-幺半群，则 $\pi_0(M)=\mathbb{N}$。取
$m\in B\mathfrak{S}_1\subseteq M$，作出
$$
M_\infty=\operatornamewithlimits{colim}
(M\xrightarrow{m}M\xrightarrow{m}\cdots)=
\bigsqcup_{n\in\mathbb{Z}}B\mathfrak{S}_\infty,
$$
其中 $\mathfrak{S}_\infty=\operatornamewithlimits{colim}
  _{n\in\mathbb{N}}\mathfrak{S}_n$。然而 $M^\text{gp}$ 是一元生成自由
$\mathbb{E}_\infty$-群，也就是 $\Omega^\infty
  \Sigma^\infty_+*$；于是其同伦群是[[球谱]]的[[稳定同伦群]]，
与 $M_\infty$ 只在零阶、一阶非零的同伦群大相径庭。

如将 $\mathfrak{S}_\infty$ 看作 $\mathbb{Z}_+$ 的一些置换，则
$M_\infty$ 上的乘以 $m$ 相当于把无交并处的下标平移
$1$，然后把置换变成各个数加一，$1\in\mathbb{Z}_+$ 保持不动的置换，
因为 $M$ 中的乘以 $m$ 由自然含入 $\mathfrak{S}_1\times\mathfrak{S}_n
  \to\mathfrak{S}_{n+1}$ 诱导。显然这并非同构，这从另一方面说明
$M_\infty\ne M^\text{gp}$。
:::

于是我们来刻画 $M_\infty$ 何时等于 $M^\text{gp}$。

::: proposition {@刻画}
以下几条等价：

1. $M$ 在 $M_\infty$ 以同构作用，即每个 $m\in M$
   在 $M_\infty$ 的作用都是同构。

2. $M_\infty$ 是 $M$ 打到的被 $M$
   以同构作用的空间中初始者。

3. $M_\infty=M^\text{gp}$，作为带 $M$ 作用的空间。

4. $\pi_1(M_\infty)$ [[交换群|交换]]。

5. $\pi_1(M_\infty)$ [[亚交换群|亚交换]]。

6. 对任意 $i\in I$，存在 $n>1$ 使得自然映射
   $$
   \mathfrak{S}_n\to\pi_1(M,m_i^n)\to\pi_1(M_\infty,m_i^n)
   $$
   的核包含 $n$ 阶轮换。

:::

::: proof
- 1 推 2：由 $M_\infty$ 的构造不难发现，只要空间 $X$
  被 $M_\infty$ 以同构作用，就有
  $\operatorname{Hom}_M(M,X)
      =\operatorname{Hom}_M(M_\infty,X)$，由此即得结论。

- 2 推 3：只需证 $M^\text{gp}$ 满足条件 2 中万有性质。
  为此设 $X$ 被 $M$ 以同构作用，且给定等变映射 $M\to X$，
  亦即给定 $x\in X$。以同构作用，相当于作用由映射
  $M\to\operatorname{Aut}(X)$ 给出；由群化的定义，
  它自然延拓为 $M^\text{gp}\to\operatorname{Aut}(X)$，
  即 $M^\text{gp}$ 作用在 $X$ 上。那么给定的 $x\in X$
  就给出 $M^\text{gp}\to X$。这里每一步都是唯一的，
  所以 $M^\text{gp}$ 满足条件 2 的万有性质。

- 3 推 4：$\mathbb{E}_\infty$-群的基本群当然交换。

- 4 推 5：交换群当然亚交换。

- 5 推 6：取 $n=5$，则[[交错群]] $\mathfrak{A}_5$ 是[[完美群]]。
  由 $M_\infty$ 的构造，其所有的连通分支伦型都一样，所以
  $\pi_1(M_\infty,m_i^5)$ 为亚交换群。于是 $\mathfrak{A}_5$
  在映射的核中，而五阶轮换在 $\mathfrak{A}_5$ 中。

- 6 推 1：只需证能够生成 $\pi_0(M)$ 的这些
  $\{m_i\}_{i\in I}$ 在 $M_\infty$ 作用都可逆。
  为此先对任意 $m\in M$ 以及带 $M$ 作用的空间 $X$
  观察构造
  $$
  X_m=\operatornamewithlimits{colim}
  (X\xrightarrow{m}X\xrightarrow{m}\cdots).
  $$
  一般地，$m'\in M$ 在 $X_m$ 的作用由图表
  \[
  \begin{tikzcd}
    X\ar[r,"m"]\ar[d,"m'"']
    &X\ar[r,"m"]\ar[d,"m'"']\ar[ld,Rightarrow,"\tau"']
    &X\ar[r,"m"]\ar[d,"m'"']\ar[ld,Rightarrow,"\tau"']
    &\cdots\ar[ld,Rightarrow,"\tau"']\\
    X\ar[r,"m"']&X\ar[r,"m"']&X\ar[r,"m"']&\cdots
  \end{tikzcd}
  \]
  给出，其中 $\tau=\tau(m,m')$ 是交换 $m$ 和 $m'$ 的
  $2$-态射。注意当 $m'=m$ 时，$\tau$ 由自然映射
  $\mathfrak{S}_2\to\pi_1(M,m^2)$ 下非平凡元素的像给出。
  此时把上面映射复合一个图表平移，得映射
  \[
  \begin{tikzcd}
    X\ar[r,"m"]\ar[rd,"m"']
    &X\ar[r,"m"]\ar[rd,"m"']\ar[d,Rightarrow,"\tau"']
    &X\ar[r,"m"]\ar[rd,"m"']\ar[d,Rightarrow,"\tau"']
    &\cdots\\
    X\ar[r,"m"']&X\ar[r,"m"']&X\ar[r,"m"']&\cdots
  \end{tikzcd}
  \]
  注意只要 $\tau=\operatorname{id}_{m^2}$，
  上面的图表映射的余极限就是 $\operatorname{id}$，
  再上面那个图表映射的余极限就是同构。但其实：

  - 不需要 $\tau=\operatorname{id}_{m^2}$，
    因为可以把上图每 $n-1$ 个平行四边形合为一个，
    这样 $n-1$ 个 $2$-态射合起来就是 $n$ 阶轮换在映射
    $\mathfrak{S}_n\to\pi_1(M,m^n)$ 下的像给出的态射，
    从而只需这个是 $\operatorname{id}_{m^n}$。

  - 也不需要它本身是 $\operatorname{id}_{m^n}$，
    只需要在余极限 $X_m$ 上等于
    $\operatorname{id}_{m^n}$，上图的余极限就是同构。

  - 同样，由于我们只关心在 $M_\infty$ 是不是同构，
    所以只需要 $n$ 阶轮换在映射
    $\mathfrak{S}_n\to\pi_1(M_\infty,m^n)$ 下的像是
    $\operatorname{id}_{m^n}$，而这就是条件 6。

:::

::: corollary {@亚交换}
如 $M$ 每个连通分支的同伦群都亚交换，则 $M_\infty=M^\text{gp}$。
:::

::: proof
条件保证了 @刻画 的条件 6 成立。
:::

最后我们用 [[$+$ 构造]]来较显式地写出 $M^\text{gp}$。
注意 $+$ 构造保持有限乘积，所以 $M^+$ 自然从 $M$ 继承
$\mathbb{E}_\infty$-幺半群结构。由于 $\pi_0(M)=\pi_0(M^+)$，
可用完全相同的元素作 $(M^+)_\infty$。

::: theorem
$(M_\infty)^+=(M^+)_\infty=M^\text{gp}$。
:::

::: proof
先证第一个等号。由 @亚交换，$(M^+)_\infty=
  (M^+)^\text{gp}$，故其基本群交换。于是由
[[$+$ 构造]]的万有性质，只需对基本群亚交换的空间 $X$ 证明
$\operatorname{Hom}(M_\infty,X)=
  \operatorname{Hom}((M^+)_\infty,X)$。为此先对一个元素
$m\in M$ 观察
$$
M_m=\operatornamewithlimits{colim}
(M\xrightarrow{m}M\xrightarrow{m}\cdots).
$$
注意
\[
\begin{aligned}
  \operatorname{Hom}(M_m,X)
  &=\lim(\cdots\xrightarrow{m}\operatorname{Hom}(M,X)
  \xrightarrow{m}\operatorname{Hom}(M,X))\\
  &=\lim(\cdots\xrightarrow{m}\operatorname{Hom}(M^+,X)
  \xrightarrow{m}\operatorname{Hom}(M^+,X))\\
  &=\operatorname{Hom}((M^+)_m,X);
\end{aligned}
\]
将此计算超限迭代，即可得到 $\operatorname{Hom}
  (M_\infty,X)=\operatorname{Hom}((M^+)_\infty,X)$。

再证第二个等号。由 @亚交换，只需证
$M^\text{gp}=(M^+)^\text{gp}$。由于
$\mathbb{E}_\infty$-群各个连通分支的基本群都交换，
用 $+$ 构造的万有性质及其保持
$\mathbb{E}_\infty$-幺半群结构不难得到结论。
:::

::: corollary
$\pi_1(M_\infty)$ 的[[换位子群]][[完美群|完美]]。
:::

::: proof
这是因为 $\pi_1(M_\infty)$ 商掉极大完美子群之后等于
$\pi_1((M_\infty)^+)=\pi_1(M^\text{gp})$，为交换群。
:::

::: example
记号承 @自由交换幺半群。则 $\mathbb{Z}\times
  (B\mathfrak{S}_\infty)^+=(M_\infty)^+=M^\text{gp}
  =\Omega^\infty\Sigma_+^\infty*=\Omega^\infty\mathbb{S}$，
为[[球谱]]的[[无穷环路空间]]。此即
**Barratt–Priddy–Quillen 定理**。
:::

::: example
令 $M$ 为有限维复线性空间关于直和构成的
$\mathbb{E}_\infty$-幺半群 $\bigsqcup_{n\in\mathbb{N}}
  B{\operatorname{GL}_n(\mathbb{C})}\simeq
  \bigsqcup_{n\in\mathbb{N}}B{\operatorname{U}(n)}$，
取 $m\in B{\operatorname{U}(1)}$ 作 $M_\infty$。
则由 $\operatorname{U}(n)$ 都连通，$M$
的各个连通分支基本群都平凡，得 $M_\infty=M^\text{gp}$，
容易算出它等于 $\bigsqcup_{n\in\mathbb{Z}}B\mathrm{U}$，
其中 $\mathrm{U}=\operatornamewithlimits{colim}_{n\in\mathbb{N}}
  \operatorname{U}(n)$。常把这个
$\mathbb{E}_\infty$-群记作 $\operatorname{ku}$。
:::

::: example
设 $R$ 是[[环]]，令 $M$ 为[[有限生成模|有限生成]][[投射模|投射]]
$R$-模关于直和构成的 $\mathbb{E}_\infty$-幺半群，即
$\bigsqcup_PB{\operatorname{Aut}(P)}$，其中 $P$
取遍有限生成投射模的同构类。则不难算出
$M_\infty=K_0(R)\times B{\operatorname{GL}(R)}$，
其中 $\operatorname{GL}(R)=\operatornamewithlimits{colim}
  _{n\in\mathbb{N}}\operatorname{GL}_n(R)$。所以 $M^\text{gp}
  =(M_\infty)^+=K_0(R)\times B{\operatorname{GL}(R)}^+$。
所以 [[Quillen $+$ 构造]]实际上就是[[群化]]。
:::

## 参考文献

```bibliography
HA:
  type: book
  author: Jacob Lurie
  year: 2017
  title: Higher Algebra
  url: https://www.math.ias.edu/~lurie/papers/HA.pdf
  label: HA
```

```terms
群化定理:
  en: group completion theorem
  fr: théorème de symétrisation
  grc: θεώρημα ὁμαδισοῦ
  la: theorema de catervificatione
```
