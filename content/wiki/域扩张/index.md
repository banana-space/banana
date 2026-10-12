---
title: 域扩张
categories: [域论]
navboxes: [域论]
---

**域扩张**指[[域]]的包含关系，是[[域论]]的研究对象之一。
域扩张常常通过从一个域出发，构造一个包含它的更大的域而得到。

## 定义

::: definition [域扩张、次数]
设 $K$ 是[[域]]，$k \subseteq K$ 是其子域，
则称 $K$ 是 $k$ 的**域扩张**（或**扩张**），记作 $K/k$。
$K$ 自然地是 $k$-线性空间，其维数称为 $K/k$ 的**次数**，记作 $[K:k]$。
:::

::: remark
如果 $f \colon k \to K$ 是[[域]]之间的[[环同态]]，
那么这个同态一定是[[单射]]，从而 $K/k$ 是域扩张，这是因为域只有平凡的[[理想]]。
:::

::: definition [子扩张、合成]
对域 $k\subseteq F\subseteq K$，也称 $F/k$ 为 $K/k$
的**子扩张**。对 $K/k$ 的两个子扩张 $E/k$、$F/k$
它们的**合成** $EF$ 指的是 $K$ 中包含 $E$ 与 $F$
的最小的域。
:::

## 性质

域扩张有些简单性质。

::: proposition
对域扩张 $L/K/k$，$[L:K][K:k]=[L:k]$。
:::

::: proof
设 $\{x_i\}_{i\in I}$ 为 $K$ 在 $k$ 上的一组基，
$\{y_j\}_{j\in J}$ 为 $L$ 在 $K$ 上的一组基，
则不难发现 $\{x_iy_j\}_{i\in I,\,j\in J}$ 为 $L$ 在 $k$
上的一组基。
:::

::: proposition [域扩张保持特征]
若 $K/k$ 是域扩张，则
\[
\operatorname{char}K
=
\operatorname{char}k.
\]
:::

它还有些较深刻的理论，参见以下主条目。

- [[Galois 理论]]
- [[类域论]]

## 范畴视角

::: proposition [扩张域作为交换代数对象]
设 $K/k$ 是域扩张。则 $K$ 自然地是[[向量空间范畴]]
\[
(\mathsf{Vect}_k,\otimes_k,k)
\]
中的交换代数对象。
:::

具体而言，其乘法与单位态射分别为
\[
m\colon K\otimes_k K\longrightarrow K,
\qquad
x\otimes y\longmapsto xy,
\]
以及
\[
\eta\colon k\longrightarrow K,
\qquad
a\longmapsto a\cdot 1_K.
\]
它们满足结合律、单位律与交换律：
\[
m\circ(m\otimes\operatorname{id}_K)
=
m\circ(\operatorname{id}_K\otimes m),
\]
\[
m\circ(\eta\otimes\operatorname{id}_K)
=
\lambda_K,
\qquad
m\circ(\operatorname{id}_K\otimes\eta)
=
\rho_K,
\]
以及
\[
m\circ\tau_{K,K}=m,
\]
其中 $\lambda_K\colon k\otimes_kK\to K$ 与
$\rho_K\colon K\otimes_kk\to K$ 是自然的单位同构，
而
\[
\tau_{K,K}\colon K\otimes_kK\longrightarrow K\otimes_kK,
\qquad
x\otimes y\longmapsto y\otimes x
\]
是对称同构。

::: proof
由于 $K$ 中的乘法关于两个变量分别是 $k$-线性的，
它诱导出良定义的 $k$-线性映射
\[
m\colon K\otimes_kK\longrightarrow K.
\]
域 $K$ 中乘法的结合律、单位律与交换律分别给出上述态射恒等式。
因此 $(K,m,\eta)$ 是 $\mathsf{Vect}_k$ 中的交换含幺代数对象。
:::

进一步，扩张域作为代数对象是[[除环|可除]]的。

::: proposition [扩张域可除]
设 $K/k$ 是域扩张，并将 $K$ 视为
$\mathsf{Vect}_k$ 中的交换含幺代数对象
\[
(K,m,\eta).
\]
则 $K$ 是 $\mathsf{Vect}_k$ 中的交换[[除环|除代数]]。
:::

::: proposition [扩张域上的线性空间]
设 $K/k$ 是域扩张，并将 $K$ 视为
$\mathsf{Vect}_k$ 中的交换代数对象。则有典范的范畴等价
\[
\mathsf{Vect}_K
\simeq
(\mathsf{Vect}_k)_K^{\mathrm{loc}},
\]
其中 $(\mathsf{Vect}_k)_K^{\mathrm{loc}}$ 表示
$\mathsf{Vect}_k$ 中的局部左 $K$-[[模对象|模范畴]]。

事实上，由于 $\mathsf{Vect}_k$ 是对称幺半范畴，每个
$K$-模都是局部模，因而
\[
(\mathsf{Vect}_k)_K^{\mathrm{loc}}
=
(\mathsf{Vect}_k)_K.
\]
若两边分别装备通常的张量积 $\otimes_K$ 与相对张量积，
则上述等价还是对称幺半范畴等价。
:::

::: proof
$\mathsf{Vect}_k$ 中的一个左 $K$-模对象是一个 $k$-线性空间
$V$，连同一个 $k$-线性态射
\[
\rho\colon K\otimes_kV\longrightarrow V,
\]
满足模的结合律与单位律
\[
\rho\circ(m\otimes\operatorname{id}_V)
=
\rho\circ(\operatorname{id}_K\otimes\rho),
\qquad
\rho\circ(\eta\otimes\operatorname{id}_V)
=
\lambda_V.
\]
令
\[
a\cdot v=\rho(a\otimes v),
\qquad
a\in K,\quad v\in V,
\]
这些态射恒等式恰好说明 $V$ 是一个 $K$-线性空间。

反之，任意 $K$-线性空间 $V$ 的标量乘法都是关于 $k$
双线性的，因而唯一诱导出一个作用态射
\[
\rho_V\colon K\otimes_kV\longrightarrow V,
\qquad
a\otimes v\longmapsto av,
\]
使 $V$ 成为 $\mathsf{Vect}_k$ 中的 $K$-模对象。

在这两个描述下，模对象之间的态射恰好是 $K$-线性映射，
所以得到范畴等价
\[
\mathsf{Vect}_K\simeq(\mathsf{Vect}_k)_K.
\]
另一方面，$\mathsf{Vect}_k$ 的编织是对称的，故对任意
$K$-模 $V$，
\[
c_{V,K}\circ c_{K,V}
=
\operatorname{id}_{K\otimes_kV}.
\]
因此所有 $K$-模自动满足局部性条件，从而
\[
(\mathsf{Vect}_k)_K
=
(\mathsf{Vect}_k)_K^{\mathrm{loc}}.
\]
最后，相对张量积 $V\otimes_KW$ 正是通常的 $K$-线性空间
张量积，并且其张量单位是 $K$，所以这个等价保持对称幺半结构。
:::

## 例子

::: example [平凡扩张]
对任意域 $k$，$k/k$ 是次数为 $1$ 的平凡扩张：
\[
[k:k]=1.
\]
:::

::: example
\[
\mathbb{Q}(\sqrt{2})/\mathbb{Q}.
\]
其中
\[
\mathbb{Q}(\sqrt{2})
=
\{a+b\sqrt{2}\mid a,b\in\mathbb{Q}\}.
\]
由于 $x^2-2$ 在 $\mathbb{Q}[x]$ 中不可约，
$\{1,\sqrt{2}\}$ 是 $\mathbb{Q}(\sqrt{2})$ 在
$\mathbb{Q}$ 上的一组基，因而
\[
[\mathbb{Q}(\sqrt{2}):\mathbb{Q}]=2.
\]
:::

::: example
复数域是实数域的二次扩张：
\[
\mathbb{C}=\mathbb{R}(i),
\qquad
[\mathbb{C}:\mathbb{R}]=2.
\]
一组 $\mathbb{R}$-基为 $\{1,i\}$。
:::

::: example [分圆扩张]
设 $n$ 是正整数，
\[
\zeta_n=e^{2\pi i/n}
\]
是一个本原 $n$ 次[[单位根]]。扩张
\[
\mathbb{Q}(\zeta_n)/\mathbb{Q}
\]
称为第 $n$ 个**分圆扩张**。
:::

更一般地：

::: example [单代数扩张]
设 $f(x)\in k[x]$ 是次数为 $n$ 的
[[不可约多项式]]。则商环
\[
K=k[x]/(f(x))
\]
是域，并自然地包含 $k$。
若 $\alpha$ 表示 $x$ 在商环中的像，则
\[
K=k(\alpha),
\qquad
f(\alpha)=0,
\]
且
\[
\{1,\alpha,\ldots,\alpha^{n-1}\}
\]
是 $K$ 在 $k$ 上的一组基。因此
\[
[K:k]=n.
\]
:::

例如，多项式 $x^3-2$ 在 $\mathbb{Q}[x]$ 中不可约，
所以
\[
[\mathbb{Q}(\sqrt[3]{2}):\mathbb{Q}]=3.
\]
这个扩张是可分扩张，但不是正规扩张，因为
$x^3-2$ 的另外两个复根不属于
$\mathbb{Q}(\sqrt[3]{2})$。

::: example
设 $t$ 是域 $k$ 上的[[超越元]]。
则有理函数域 $k(t)$ 是 $k$ 的超越扩张。
元素
\[
1,t,t^2,\ldots
\]
在 $k$ 上线性无关，因而
\[
[k(t):k]=\infty.
\]
:::

::: example
所有[[代数数]]构成的域 $\overline{\mathbb{Q}}$
是 $\mathbb{Q}$ 的代数扩张，但不是有限扩张：
\[
[\overline{\mathbb{Q}}:\mathbb{Q}]=\infty.
\]
这个例子说明代数扩张不一定是有限扩张；
反之，每个有限扩张都是代数扩张。
:::

::: example
设
\[
E=\mathbb{Q}(\sqrt{2}),
\qquad
F=\mathbb{Q}(\sqrt{3})
\]
都包含在 $\mathbb{R}$ 中。它们在 $\mathbb{R}$ 中的合成为
\[
EF=\mathbb{Q}(\sqrt{2},\sqrt{3}).
\]
一组 $\mathbb{Q}$-基为
\[
\{1,\sqrt{2},\sqrt{3},\sqrt{6}\},
\]
所以
\[
[EF:\mathbb{Q}]=4.
\]
这也给出域扩张塔
\[
\mathbb{Q}
\subseteq
\mathbb{Q}(\sqrt{2})
\subseteq
\mathbb{Q}(\sqrt{2},\sqrt{3}),
\]
其中两个相邻扩张的次数都是 $2$。
:::

```terms
域扩张:
  en: field extension
  de: Körpererweiterung :f
  fr: extension de corps :f
  grc: ἐπέκτασις σωμάτων :f
  la: extensio corporum :f
扩张:
  en: extension
  de: Erweiterung :f
  fr: extension :f
  grc: ἐπέκτασις :f
  la: extensio :f
```
