---
title: '$\mathbb{A}_n$-代数'
aliases: [An-代数]
categories: [高阶代数]
navboxes: [高阶代数]
---

::: convention
在本文中，

- [[范畴]]都指 [[$(\infty,1)$-范畴]]。

:::

[[高阶代数]]中，**$\mathbb{A}_n$-代数**是[[结合代数 (范畴论)|结合代数]]的推广，
它不要求完整的结合律，只要求 $n$ 个元素相乘可以同伦连贯地结合。
当底范畴为 $(n-2)$-范畴时，$\mathbb{A}_n$-代数就是结合代数。

## 定义

我们用[[代数模式]]定义，这样比较简明。

::: definition [$\mathbb{A}_n$ 模式]
对正整数 $n$，考虑截断单形范畴 $\mathbb{\Delta}_{\le n}^\mathrm{op}$，即不多于 $n+1$
个元素的[[全序集]]依保序映射构成的范畴之反，
也是 $\mathbb{\Delta}^\mathrm{op}$ 的[[满子范畴]]，由单形
$[0],[1],\ldots,[n]$ 组成。把它做成[[代数模式]]如下：

- 惰性映射是区间含入之反，即全序集 $I$ 到全序集
  $J$ 的惰性映射为 $J$ 到 $I$ 的保序单射，满足对 $I$ 中元素
  $i'\le i\le i''$，只要 $i'$ 和 $i''$ 在 $J$ 的像中，
  $i$ 就也在 $J$ 的像中；

- 活性映射是保持端点的映射之反，即全序集 $I$ 到全序集
  $J$ 的活性映射为 $J$ 到 $I$ 的保序映射，把 $\min J$
  和 $\max J$ 映到 $\min I$ 和 $\max I$；

- 初等对象是二元集 $[1]$；

记此代数模式为 $\mathbb{A}_n$，称为 **$\mathbb{A}_n$ 模式**。
在整个 $\mathbb{\Delta}^\mathrm{op}$ 上以同样方法定义的代数模式记作
$\mathbb{A}_\infty$，称为 **$\mathbb{A}_\infty$ 模式**或**结合模式**。
这些代数模式之间有一列显然的含入映射
$$
\mathbb{A}_1\to\mathbb{A}_2\to\cdots\to\mathbb{A}_\infty=\mathbb{\Delta}^\mathrm{op}.
$$
:::

::: definition [$\mathbb{A}_n$-代数]
设 $\mathcal{C}$ 是[[幺半范畴]]，视为[[推出纤维化]]
$\mathcal{C}^\otimes\to\mathbb{A}_\infty$。$\mathcal{C}$
中的 **$\mathbb{A}_n$-代数**指[[俯范畴|俯]]于 $\mathbb{A}_\infty$
上的函子 $A^\otimes\colon\mathbb{A}_n\to\mathcal{C}^\otimes$，
把惰性映射打到推出边。其**底对象**指 $[1]\in\mathbb{A}_n$
的像，记作 $A\in\mathcal{C}$。无歧义时也以 $A$
表示这个 $\mathbb{A}_n$-代数。

$\mathcal{C}$ 中 $\mathbb{A}_n$-代数构成的范畴记作
$\mathsf{Alg}_{\mathbb{A}_n}(\mathcal{C})$。
:::

::: remark
显然我们不需要 $\mathcal{C}$ 是幺半范畴来定义其中
$\mathbb{A}_n$-代数，只需要 $\mathcal{C}$ 是 $\mathbb{A}_n$-幺半范畴就够了。
不过实际情况下 $\mathcal{C}$ 通常都是幺半范畴。
:::

## 性质

以下定理给出 $\mathbb{A}_n$-代数和 $\mathbb{A}_{n+1}$-代数之间的差距。

::: theorem {@associahedron}
设 $\mathcal{C}$ 是幺半范畴，$n$ 是正整数，
$A$ 是 $\mathcal{C}$ 中 $\mathbb{A}_n$-代数。则我们有自然的以
$S^{n-2}$ 参数化的一族映射 $A^{\otimes(n+1)}\to A$
（即映射 $S^{n-2}\to\operatorname{Hom}_{\mathcal{C}}(A^{\otimes(n+1)},A)$），
它沿 $S^{n-2}\to*$ 的延拓对应于 $A$ 的 $\mathbb{A}_{n+1}$-代数结构。
换言之，如以 $P_n$ 记有两个对象 $0$、$1$，映射空间为
$$
\operatorname{Hom}(0,0)=\operatorname{Hom}(1,1)=*,\,\operatorname{Hom}(0,1)=S^{n-2},\,\operatorname{Hom}(1,0)=\varnothing
$$
的范畴，以 $P$ 记箭头范畴 $[1]$，即偏序集 $\{0,1\}$ 对应的范畴，
则我们有范畴的拉回图表
\[
\begin{tikzcd}
  \mathsf{Alg}_{\mathbb{A}_{n+1}}(\mathcal{C})\ar[d]\ar[r]&\mathsf{Fun}(P,\mathcal{C})\ar[d]\\
  \mathsf{Alg}_{\mathbb{A}_n}(\mathcal{C})\ar[r]&\mathsf{Fun}(P_n,\mathcal{C})
\end{tikzcd}
\]
其中左边的箭头是遗忘函子，右边的箭头由显然的函子 $P_n\to P$
诱导，横向箭头如上面所述。
:::

::: remark
显然 @associahedron 中的 $\mathcal{C}$
只需要是 $\mathbb{A}_{n+1}$-幺半范畴。
:::

::: remark {@inductive}
显然 $\mathcal{C}$ 中 $\mathbb{A}_1$-代数就是其中的对象，
不带任何代数结构。由 @associahedron，
$\mathbb{A}_n$-代数相当于 $\mathcal{C}$ 中的对象 $A$
附带归纳定义的一系列 $S^{k-3}\to
\operatorname{Hom}_{\mathcal{C}}(A^{\otimes k},A)$ 沿
$S^{k-3}\to*$ 的延拓，$k=2,\ldots,n$。
:::

::: remark
当 $\mathcal{C}$ [[稳定 (∞,1)-范畴|稳定]]或[[谱 (拓扑学)|谱]][[充实范畴|充实]]时，映射
$S^{n-2}\to\operatorname{Hom}_{\mathcal{C}}(A^{\otimes(n+1)},A)$
的映射沿 $S^{n-2}\to*$ 的延拓相当于其在
$\Omega^\infty(\hom_{\mathcal{C}}(A^{\otimes(n+1)},A)[2-n])$
中对应的点的零伦，其中 $\hom$ 表示映射谱。当 $\mathcal{C}$
为[[链复形 (∞,1)-范畴|链复形]][[充实范畴|充实]]时，
此种无穷环路空间中的元素可由闭链表示，零伦则相当于把它写成边缘。
所以此时 @inductive 相当于把归纳定义的一列闭链写成边缘。
这就是一些古老文献中 $\mathbb{A}_n$-代数及 $\mathbb{A}_\infty$-代数的定义。
把这作为定义过于手动，常常不方便操作。
:::

```terms
'$\mathbb{A}_n$-代数':
  en: '$\mathbb{A}_n$-algebra'
```
