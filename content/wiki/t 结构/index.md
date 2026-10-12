---
title: t 结构
aliases: [t-结构, 核心, 心]
categories: [同调代数]
---

[[同调代数]]中，**t 结构**是[[三角范畴]]或[[稳定 $\infty$-范畴]]的附加结构，
模拟 [[Abel 范畴]] $\mathcal{A}$
的[[导出范畴]] $\mathsf{D}(\mathcal{A})$ 中
$\mathsf{D}_{\ge0}(\mathcal{A})$ 与
$\mathsf{D}_{\le0}(\mathcal{A})$ 两个子范畴。
它可以认为是导出范畴构造的一种逆，从三角范畴反过来得到 Abel 范畴，
并给其中对象赋予取值在 Abel 范畴的各阶同调。
t 结构是[[错致层]]的基础，由 [[Beilinson]]、[[Bernstein]]、
[[Deligne]] 在《[[Faisceaux pervers]]》中引入。

## 定义

::: definition {@thm:定义}
设 $\mathcal{C}$ 为[[三角范畴]]或[[稳定 $\infty$-范畴]]。
$\mathcal{C}$ 的 **t 结构**，指的是二元组
$(\mathcal{C}_{\ge0},\mathcal{C}_{\le0})$，满足：

1. $\mathcal{C}_{\ge0}$ 和 $\mathcal{C}_{\le0}$
   都是 $\mathcal{C}$ 的[[满子范畴]]，且关于同构封闭，
   即只要包含某个对象，就包含与之同构的所有对象。

2. {@平移} 对 $n\in\mathbb{Z}$，记
   $\mathcal{C}_{\ge n}=\mathcal{C}_{\ge0}[n]$，
   $\mathcal{C}_{\le n}=\mathcal{C}_{\le0}[n]$。
   则 $\mathcal{C}_{\ge1}\subseteq\mathcal{C}_{\ge0}$，
   $\mathcal{C}_{\le0}\subseteq\mathcal{C}_{\le1}$。

3. {@0} 对 $x\in\mathcal{C}_{\ge1}$，
   $y\in\mathcal{C}_{\le0}$，有
   $\operatorname{Hom}_\mathcal{C}(x,y)=0$。

4. {@截断} 对 $x\in\mathcal{C}$，存在[[正合三角]]
   $x'\to x\to x''$，其中 $x'\in\mathcal{C}_{\ge1}$，
   $x''\in\mathcal{C}_{\le0}$。

:::

::: remark
这里使用同调记号。使用上同调记号则是 $\mathcal{C}^{\ge0}
  =\mathcal{C}_{\le0}$，$\mathcal{C}^{\le0}=
  \mathcal{C}_{\ge0}$，或更一般地，$\mathcal{C}^{\ge n}
  =\mathcal{C}_{\le-n}$，$\mathcal{C}^{\le n}=
  \mathcal{C}_{\ge-n}$。
:::

::: remark
显然，[条件 2](@平移) 可以推出对整数 $n\ge m$，
$\mathcal{C}_{\ge n}\subseteq\mathcal{C}_{\ge m}$，
$\mathcal{C}_{\le m}\subseteq\mathcal{C}_{\le n}$。
:::

::: remark
在稳定无穷范畴情形，上面的[条件 3](@0) 指的是映射空间，
而非映射谱。以下说明稳定无穷范畴 $\mathcal{C}$ 的
t 结构相当于其[[同伦范畴]] $\mathrm{h}\mathcal{C}$
的 t 结构。显然除[条件 3](@0) 之外的条件都一样，故只需说明，
在有其它条件时，以下条件能推出[条件 3](@0)：

- 3$'$. 对 $x\in\mathcal{C}_{\ge1}$，
  $y\in\mathcal{C}_{\le0}$，有
  $\pi_0\operatorname{Hom}_\mathcal{C}(x,y)=0$。

这是因为对 $n\in\mathbb{N}$，有 $x[n]\in\mathcal{C}_{\ge{n+1}}
  \subseteq\mathcal{C}_{\ge1}$，从而对
$x\in\mathcal{C}_{\ge1}$，$y\in\mathcal{C}_{\le0}$，有
$\pi_n\operatorname{Hom}_\mathcal{C}(x,y)=\pi_0
  \operatorname{Hom}_\mathcal{C}(x[n],y)=0$，即映射空间可缩。
:::

::: definition
称稳定 $\infty$-范畴 $\mathcal{C}$ 的 t 结构
$(\mathcal{C}_{\ge0},\mathcal{C}_{\le0})$ 为：

- **左有界**，指 $\mathcal{C}=
  \bigcup_{n\in\mathbb{Z}}\mathcal{C}_{\le n}$。

- **右有界**，指 $\mathcal{C}=
  \bigcup_{n\in\mathbb{Z}}\mathcal{C}_{\ge n}$。

- **有界**，指它左有界且右有界。

- **左分离**，指
  $\bigcap_{n\in\mathbb{Z}}\mathcal{C}_{\ge n}=0$。

- **右分离**，指
  $\bigcap_{n\in\mathbb{Z}}\mathcal{C}_{\le n}=0$。

- **左完备**，指
  $\mathcal{C}=\lim_{n\to\infty}\mathcal{C}_{\le n}$，
  其中极限在 $\infty$-范畴的 $\infty$-范畴
  $\mathsf{Cat}_\infty$ 中取，转移映射是 $\tau_{\le n}$。

- **右完备**，指
  $\mathcal{C}=\lim_{n\to-\infty}\mathcal{C}_{\ge n}$，
  其中极限在 $\infty$-范畴的 $\infty$-范畴
  $\mathsf{Cat}_\infty$ 中取，转移映射是 $\tau_{\ge n}$。

:::

::: definition
设 $\mathcal{C}$ 为[[可表现无穷范畴|可表现]]稳定无穷范畴。
称 t 结构 $(\mathcal{C}_{\ge0},\mathcal{C}_{\le0})$
为**可达**或**可表现**，指的是子范畴
$\mathcal{C}_{\ge0}\subseteq\mathcal{C}$ 为可表现。
:::

## 性质

以下沿用 @thm:定义 中记号。

::: proposition [截断]
@thm:定义 的[条件 4](@截断) 中的 $x'$ 与 $x''$ 唯一。
分别将其记作 $\tau_{\ge1}x$ 与 $\tau_{\le0}x$，
并对 $n\in\mathbb{Z}$ 记 $\tau_{\le n}x=\tau_{\le0}(x[-n])[n]$，
另一边类似，称为关于该 t 结构的**截断**。则
$\tau_{\ge n}$ 是 $\mathcal{C}$ 到 $\mathcal{C}_{\ge n}$
的函子，$\tau_{\le n}$ 是 $\mathcal{C}$ 到
$\mathcal{C}_{\le n}$ 的函子，且这些函子两两交换。
:::

::: theorem [心]
满子范畴 $\mathcal{C}_{\ge0}\cap\mathcal{C}_{\le0}$
是 [[Abel 范畴]]。称之为 t 结构的**心**，
记作 $\mathcal{C}^\heartsuit$。
:::

::: proposition [同调]
对 $x\in\mathcal{C}$，记 $H_n(x)=
  (\tau_{\ge n}\tau_{\le n}x)[-n]\in\mathcal{C}^\heartsuit$，
称为 $x$ 关于该 t 结构的**同调**。则对[[正合三角]]
$x\to y\to z$，序列
$$
\cdots\to H_n(x)\to H_n(y)\to H_n(z)\to H_{n-1}(x)\to\cdots
$$
为 $\mathcal{C}^\heartsuit$ 中长正合列。
:::

下面的命题说明 t 结构被其半边子范畴决定，
且在可表现情形可用半边子范畴作出 t 结构。

::: proposition
二元组 $(\mathcal{C}_{\ge0},\mathcal{C}_{\le0})$
中两者相互决定。具体地说，
$$
\mathcal{C}_{\le0}=\{y\in\mathcal{C}\mid\forall
x\in\mathcal{C}_{\ge1},\,\operatorname{Hom}_\mathcal{C}
(x,y)=0\},\\
\mathcal{C}_{\ge0}=\{x\in\mathcal{C}\mid\forall
y\in\mathcal{C}_{\le-1},\,\operatorname{Hom}_\mathcal{C}
(x,y)=0\}.
$$
:::

::: theorem
设 $\mathcal{C}$ 是可表现稳定无穷范畴，$\mathcal{C}'
  \subseteq\mathcal{C}$ 是可表现满子范畴，对余极限、扩张封闭，
即 $\mathcal{C}'$ 的对象在 $\mathcal{C}$ 中的余极限都属于
$\mathcal{C}'$，且对正合三角 $x\to y\to z$，只要
$x,z\in\mathcal{C}'$ 就有 $y\in\mathcal{C}'$。
则存在唯一 t 结构
$(\mathcal{C}_{\ge0},\mathcal{C}_{\le0})$ 使得
$\mathcal{C}_{\ge0}=\mathcal{C}'$。
:::

## 例子

- 对任何 $\mathcal{C}$，总有两个平凡的 t 结构
  $(\mathcal{C},0)$ 与 $(0,\mathcal{C})$，心都是 $0$。

- 对 [[Abel 范畴]] $\mathcal{A}$ 的[[导出范畴]]
  $\mathsf{D}(\mathcal{A})$，总有 $(\mathsf{D}_{\ge0}
    (\mathcal{A}),\mathsf{D}_{\le0}(\mathcal{A}))$
  是 t 结构，称为 $\mathsf{D}(\mathcal{A})$
  的**标准 t 结构**，其心是 $\mathcal{A}$。

- [[拓扑谱|谱]]的 $\infty$-范畴 $\mathsf{Sp}$
  也有**标准 t 结构** $(\mathsf{Sp}_{\ge0},
    \mathsf{Sp}_{\le0})$，定义为 $\mathsf{Sp}_{\ge0}=
    \{X\in\mathsf{Sp}\mid\forall n<0,\,\pi_nX=0\}$，
  心是 $\mathsf{Ab}$。

- 如 $\mathcal{C}$ 带有 t 结构，$I$ 是小范畴，则
  $$
  \mathsf{Fun}_{\ge0(\le0)}(I,\mathcal{C})=
  \mathsf{Fun}(I,\mathcal{C}_{\ge0(\le0)})
  $$
  给出函子范畴 $\mathsf{Fun}(I,\mathcal{C})$ 的
  t 结构，心为 $\mathsf{Fun}(I,\mathcal{C}^\heartsuit)$。

- 还有一个有用的例子是 [[Beilinson t 结构]]：
  如 $\mathcal{C}$ 带有 t 结构，则[[滤对象]]范畴
  $$
  \mathsf{Fil}(\mathcal{C})=
  \mathsf{Fun}(\mathbb{Z}^\text{op},\mathcal{C})=
  \{\cdots\to X^1\to X^0\to X^{-1}\to\cdots\mid
  X^n\in\mathcal{C},\,\forall n\in\mathbb{Z}\}
  $$
  可赋予 Beilinson t 结构如下：
  $$
  \mathsf{Fil}^\text{B}_{\le0}(\mathcal{C})=
  \{X\in\mathsf{Fil}(\mathcal{C})\mid
  X^n\in\mathcal{C}_{\le-n},\,\forall n\in\mathbb{Z}\}.
  $$
  如 $\mathcal{A}$ 是 Abel 范畴，$\mathcal{C}$ 为
  $\mathsf{D}(\mathcal{A})$ 附带标准 t 结构，
  则对上链复形 $C^\bullet$，以 $X^n$ 记暴力截断
  $$
  \cdots\to0\to C^n\to C^{n+1}\to\cdots
  $$
  在 $\mathsf{D}(\mathcal{A})$ 中代表的对象，则滤复形
  $$
  \cdots\to X^1\to X^0\to X^{-1}\to\cdots
  $$
  就在 $\mathsf{Fil}^\text{B}_{\le0}(\mathcal{C})$
  中。该 t 结构的心是链复形 Abel 范畴 $\mathsf{Ch}(\mathcal{A})$。

```terms
t 结构:
  en: t-structure
  de: t-Struktur :f
  fr: t-structure :f
  grc: t-δομή :f
  la: t-structura :f
```
