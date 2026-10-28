---
title: 有效意象
categories: [递归论, 层论]
---

<problems>
- “有效范畴”一节需要扩充。
</problems>

**有效意象**或**可计算意象**是一个[[初等意象]]。
它刻画了（包括高阶函数的）可计算性的概念。

## 定义

以防混淆，提前说明本文均假定排中律成立。直觉主义中的可计算性非常复杂。

### 具现

在[[逻辑]]中（不一定是[[直觉主义]]），
常常可以把证明看作是某种可计算函数。
如 \(\psi \to \chi\) 的证明可以看成一个函数，输入一个 \(\psi\) 的证明，输出一个 \(\chi\) 的证明。
[[具现]]就是将这种可计算性解释形式化的一种方法。这里只列举 Kleene 具现的规则。

取定递归的[[双射]] \(\langle-,-\rangle : \mathbb N
\times \mathbb N \to \mathbb N\) 作为配对函数，
使得它对应的投影 \(\pi_1, \pi_2\) 也是递归函数。再取
\(\iota_1, \iota_2 : \mathbb N \to
\mathbb N\)，使得二者都是单射，值域构成自然数集合的划分，
并且其逆 \(\mathbb N \to \{\mathsf{left},
\mathsf{right}\} \times \mathbb N\)
也是可计算的。最后取定所有（部分）递归函数的 Gödel 编码，
则有一个部分递归函数 \(\mathrm{eval} : \mathbb N \times
\mathbb N \to \mathbb N\)，使得 \(\mathrm{eval}(e, n)\) 是 \(e\) 编码的部分递归函数在 \(n\) 处的值。无歧义时，我们直接写作 \(e(n)\)。

::: definition
我们递归定义“自然数 \(n\) 具现了命题 \(\varphi\)”这个
关系：

- 如果 \(\varphi\) 是真的原子命题，则 \(0\) 具现了 \(\varphi\)。

- \(\langle m, n \rangle\) 具现了 \(\psi \land \chi\)，
  当且仅当 \(m\) 具现了 \(\psi\) 且 \(n\) 具现了 \(\chi\)。

- \(\iota_1(m)\) 具现了 \(\psi \lor \chi\)，当且仅当 \(m\) 具现了 \(\psi\)。对 \(\iota_2\) 同理。

- \(e\) 具现了 \(\psi \to \chi\)，当且仅当对于任何具现了 \(\psi\) 的 \(n\)，
  \(e(n)\) 都具现了 \(\chi\)。

- \(\langle m , n \rangle\) 具现了 \(\exists x. \psi(x)\)，
  当且仅当 \(n\) 具现了 \(\psi(\lceil m \rceil)\)。
  其中 \(\lceil m \rceil\) 表示 \(m\) 在形式语言中对应的表达式，即
  \[
  \underbrace{\mathtt{SS}\dots\mathtt S}_{m\text{个}}\mathtt0.
  \]

- \(e\) 具现了 \(\forall x. \psi(x)\)，当且仅当对于所有的 \(n\)，
  \(e(n)\) 都具现了 \(\psi(\lceil n\rceil)\)。

:::

其中原子命题以及其真值，在不同的理论中各有规定。
在这里，原子命题是 \(M = N\)，其中 \(M, N\) 是由一些全递归函数构成的表达式。
\(\bot\) 是某个固定的原子假命题，如 \(\mathtt0=\mathtt1\)。
\(\neg \psi\) 是 \(\psi \to \bot\) 的缩写。

::: theorem
如果某个句子在 [[Heyting 算术]] 系统中可证，那么这个句子可具现。
:::

但是请读者注意下面这个例子：

::: example
令 \(\psi\) 是一个句子。那么 \(\psi \lor \neg\psi\) 总是可具现。

这是因为如果 \(\psi\) 被某个 \(n\) 具现，那么 \(\iota_1(n)\) 就具现了 \(\psi \lor \neg\psi\)。
不然的话，任何自然数 \(e\) 都具现了 \(\neg\psi\)，因为按照定义，
对于任何具现 \(\psi\) 的自然数 \(n\)，\(e(n)\) 都具现了 \(\mathtt0=\mathtt1\)。
由于不存在这样的自然数，这是[[空真]]的。
:::

### 有效范畴

仅仅有自然数上的可计算性，在研究其他对象时就需要反复提到自然数的编码细节。
而有效范畴则打包了这些信息，使得可以更自由地使用可计算性的概念。

Kleene 具现相当于给每个句子赋了一个 \(\mathbb N\) 的子集作为其“广义真值”。
因此我们说这是给每个句子赋予了 \(2^\mathbb N\)-真值。
同理，我们可以定义一个 \(2^\mathbb N\)–谓词为一个函数（不一定可计算）\(f : X \to 2^\mathbb N\)。
这些谓词之间也有命题逻辑的连词，只需要逐点使用上面命题的逻辑运算即可。

::: definition
对于两个 \(X\) 上的 \(2^\mathbb N\)–谓词 \(\psi, \phi\)，定义**蕴涵**关系 \(\psi \vdash_X \phi\)：
它为真当且仅当集合
\[
\bigcap_{x\in X}(\psi \to \phi)(x)
\]
非空。
:::

这与 \(\psi \to \phi\) 的定义不同：后者对于每个 \(x \in X\) 可以用不同的自然数具现对应的命题；
前者需要找到一个统一的自然数具现。

这样一来，\(\vdash_X\) 就构成了谓词的偏序。
并且这个偏序中 \(\psi \land \phi\) 是交运算，\(\psi\lor\phi\) 是并运算。
并且有 \(\chi \vdash_X \psi \to \phi\) 等价于 \(\chi \land \psi \vdash_X \phi\)，从而有指数对象。

接下来，我们也可以定义量词 \(\forall,\exists\)。注意上面定义的量词取值范围是自然数。
而下面要定义的则有更一般的取值集合。

设 \(f : X \to Y\) 是一个函数。
那么由函数复合，
任何一个 \(Y\) 上的 \(2^{\mathbb N}\)–谓词 \(\phi\) 都自然导出一个 \(X\) 上的 \(2^\mathbb N\)–谓词
\(f^*\phi\)：我们定义 \((f^*\phi)(x) = \phi(f(x))\) 即可。这对于 \(\vdash\) 来说是单调的。
对于熟悉范畴论的读者，可以直接用[[伴随函子]]的概念定义 \(\forall, \exists\)。
\[
\exists f \dashv f^* \dashv \forall f.
\]
但是对于不那么熟悉这些定义的读者，也可以用下面这个更浅显的定义：

::: definition
定义 \(\forall f, \exists f\) 为从 \(X\) 的 \(2^\mathbb N\)–谓词到 \(Y\) 的
\(2^\mathbb N\)–谓词的函数。
\[
\exists f(\phi) = y \mapsto \bigcup_{x\in f^{-1}\{y\}}\phi(x)
\]
\[
\forall f(\phi) = y \mapsto \{e \in \mathbb N \mid \forall x \in f^{-1}\{y\}, e(0) \in \phi(x)\}
\]
:::

如果 \(f : X \to \{\star\}\)，那么这两个量词就退化成我们熟悉的量词。
而如果 \(f : X \times Y \to X\) 为投影函数，则量词就是对 \(y \in Y\) 做量化。

有了必要的工具，我们可以开始定义有效范畴 \(\mathsf{Eff}\) 了。

::: definition
\(\mathsf{Eff}\) 中的对象是一个集合 \(X\) 与 \(X \times X\) 上的一个
\(2^\mathbb N\)–谓词（即二元关系）\(\approx\)，满足
\[
\begin{aligned}
  x \approx y &\vdash y \approx x\\
  x \approx y \land y \approx z &\vdash x \approx z.
\end{aligned}
\]
注意并没有自反性。我们记 \(x \approx x\) 为 \(E(x)\)。
范畴里的态射 \((X, \approx) \to (Y, \approx)\) 为 \(X \times Y\) 上满足一些条件的
\(2^\mathbb N\)–谓词的等价类：
\[
\begin{aligned}
  F(x, y) \land x \approx x' \land y \approx y' &\vdash F(x', y')\\
  F(x, y) &\vdash E(x) \land E(y)\\
  F(x, y) \land F(x, y') &\vdash y \approx y'\\
  E(x) &\vdash \exists y. F(x, y)
\end{aligned}
\]
如果 \(F(x,y) \vdash G(x,y)\) 且 \(G(x,y) \vdash F(x,y)\)，则认为 \(F\) 和 \(G\) 等价。
:::

::: theorem
\(\mathsf{Eff}\) 是[[意象]]。
:::

## 性质

我们有函子 $\Gamma(X) = \hom(1, X)$ 取出某个对象的点集。
此函子有右伴随 $\nabla(X)$，它给此集合配备余离散的有效结构，
即令 $X \times X$ 上配备的 $2^{\mathbb N}$–谓词为
$$
\phi(x, y) = \begin{cases} \mathbb N & (x = y) \\ \varnothing & (x \ne y)\end{cases}
$$
那么常函数 $r(n) = 1$ 即可为此谓词的对称性与传递性提供证据。
此函子 $\nabla$ 是[[全忠实函子]]，
并且这给出了[[子意象]] $\mathsf{Set} \hookrightarrow \mathsf{Eff}$。

此意象中有[[自然数对象]]，记作 $\mathbb N$。其集合为 $\mathbb N$，
而其上配备的二元谓词为 $\phi(m, n) = \{m\} \cap \{n\}$。

::: theorem
$\hom(\mathbb N^n, \mathbb N)$ 是传统意义上的 \(n\) 元全[[可计算函数]]集合。
:::

这证明了有效意象确实刻画了原本的可计算函数。而不难验证
$\hom(\nabla \mathbb N, \nabla \mathbb N)$ 这个集合就是集合论
中的（不一定可计算的）全体函数的集合。

```terms
有效意象:
  en: effective topos
```
