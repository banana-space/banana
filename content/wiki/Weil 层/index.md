---
title: Weil 层
categories: [代数几何]
notices:
  - name: 问题
    items:
      - “性质”一节 Grothendieck 迹公式中的 $s^{-|k(x)|}$ 与 $s^{-q}$ 似乎应为 $|k(x)|^{-s}$ 与 $q^{-s}$。
      - “例子”一节中 $\mathbb{L}_b$ 来自平展层的条件似乎应为 $b\in\overline{\mathbb{Z}_\ell}^\times$。
---

::: convention
在本文中，

- $\mathbb{F}_q$ 是 $q$ 元[[有限域]]，$p$ 是其[[特征 (代数)|特征]]，
  $\mathbb{F}$ 是选定的[[代数闭包]]。
- $\ell$ 是不等于 $p$ 的[[素数]]，$\mathbb{Z}_\ell$、$\mathbb{Q}_\ell$
  表示 [[p 进数|$\ell$ 进数]]，$\overline{\mathbb{Q}_\ell}$
  表示 $\mathbb{Q}_\ell$ 的[[代数闭包]]。

:::

**Weil 层**是[[有限域]]上[[概形]]上[[平展层]]的推广，
用来证明 [[Weil 猜想]]的 Riemann 猜想部分。粗略地说，
设 $X_0$ 是 $\mathbb{F}_q$ 上的概形，$X=X_0\times_{\mathbb{F}_q}\mathbb{F}$，
则由 [[Galois 下降]]，$X_0$ 上的平展层 $A_0$ 等价于其在
$X$ 的基变换 $A$ 附带关于 Galois 群 $\operatorname{Gal}(\mathbb{F}/\mathbb{F}_q)=\hat{\mathbb{Z}}$
的下降数据。Weil 层即是把这个 $\hat{\mathbb{Z}}$-下降数据减弱为
$\mathbb{Z}$-下降数据。

## 定义

::: definition [Weil 层] {@def}
设 $X_0$ 是 $\mathbb{F}_q$ 上的概形，以 $X$ 记 $X_0$ 在 $\mathbb{F}$
上的基变换。注意 $X_0$ 的 $q$ 次方 Frobenius 自同态
$F_0\colon X_0\to X_0$ 是 $X_0$ 作为 $\mathbb{F}_q$-概形的自同态。
把它从 $\mathbb{F}_q$ 基变换到 $\mathbb{F}$，所得映射记作 $F\colon X\to X$，
称为 **[[Frobenius 态射|几何 Frobenius 自同态]]**。

$X_0$ 上的 **Weil 层**指序对 $(A,F_A)$，其中 $A$
是 $X$ 上[[平展景|平展]][[层]]，$F_A\colon F^*A\cong A$
是同构。无歧义时也以 $A$ 表示整个 Weil 层。这里的层可以是集合层、
Abel 群层、[[生象]]层、[[链复形]]层等等。
:::

::: remark [平展层都是 Weil 层] {@etale-weil}
设 $A_0$ 是 $X_0$ 上的平展层。则它可视为 $X_0$ 上的
Weil 层如下：注意 $F_0\colon X_0\to X_0$ 在拓扑空间上是
$\operatorname{id}$，诱导平展景的态射也是 $\operatorname{id}$，故有同构
${F_0}_A\colon F_0^*A_0\cong{\operatorname{id}^*}A_0=A_0$；令 $A$ 为 $A_0$
在 $X$ 的基变换，把 ${F_0}_A$ 也基变换，得同构
$F_A\colon F^*A\cong A$，此即 $A_0$ 对应的 Weil 层。
:::

::: remark [叠观点] {@X/F}
以 $\mathsf{Perf}_\mathbb{F}$ 记[[完美环|完美]] $\mathbb{F}$-代数的[[范畴]]，
带[[平展拓扑]]，其上的集合层称为**完美层**，
生象层称为**完美叠**。把 $\mathbb{F}$ 上概形用
[[Yoneda 函子]]视为完美层，即
$X(R):=\operatorname{Map}_\mathbb{F}(\operatorname{Spec}(R),X)$，则 $F\colon X\to X$
诱导完美层 $X$ 的自同构，而 $X_0$ 上的 Weil 层就是商叠
$X/F$ 上的平展层。
:::

::: remark
容易发现 $X_0$ 上的 Weil 层只依赖 $\mathbb{F}_p$-概形 $X_0$ 本身，
不依赖基域 $\mathbb{F}_q$：这是因为如 $q=p^d$，则
$X_0\times_{\mathbb{F}_p}\mathbb{F}$ 为 $d$ 个 $X=X_0\times_{\mathbb{F}_q}\mathbb{F}$
的无交并，其 $p$ 次方 Frobenius 可视为轮换 $d$ 个 $X$，
在换回原位时变为 $F\colon X\to X$，故以 $\mathbb{F}_q$
为基域和以 $\mathbb{F}_p$ 为基域定义出来的 Weil 层一样。
用 @X/F 的观点，这就是说商叠 $X/F$ 不依赖 $\mathbb{F}_q$，
也即 $X_0\mapsto X/F$ 构成函子
$\mathsf{Sch}_{\mathbb{F}_p}\to\mathsf{Sh}_\mathrm{ét}(\mathsf{Perf}_\mathbb{F})$。
:::

## 例子

::: example {@Fq}
由于 $\operatorname{Spec}(\mathbb{F})$ 是一个几何点，$\operatorname{Spec}(\mathbb{F}_q)$
上的集合 Weil 层就是集合 $A$ 附带自同构 $F_A\colon A\cong A$，
它来自平展层当且仅当 $F_A$ 来自连续 $\hat{\mathbb{Z}}$-作用，
即对任意 $a\in A$ 都存在 $n_a\in\mathbb{Z}_+$ 使得 $F_A^{n_a}(a)=a$。

类似地，$\operatorname{Spec}(\mathbb{F}_q)$ 上的 $\overline{\mathbb{Q}_\ell}$-Weil
层就是 $\overline{\mathbb{Q}_\ell}$-线性空间 $V$ 附带自同构
$F_V\colon V\cong V$。如 $V$ 是一维线性空间，则 $F_V$
由一个非零的数给出。常将 $b\in\overline{\mathbb{Q}_\ell}^\times$
对应的一维 $\overline{\mathbb{Q}_\ell}$-Weil 层记作 $\mathbb{L}_b$；
它来自平展层当且仅当 $b\in\overline{\mathbb{Z}_\ell}$。

按 @X/F 的观点，$\operatorname{Spec}(\mathbb{F}_q)$ 对应的商叠是 $*/\mathbb{Z}$，
态射 $\operatorname{Spec}(\mathbb{F}_{q^n})\to\operatorname{Spec}(\mathbb{F}_q)$ 对应 $*/\mathbb{Z}$
到自身的
$n$ 重覆叠。
:::

## 性质

::: theorem
设环 $\Lambda$ 为 $\mathbb{Z}/\ell^n$-代数，或 $\mathbb{Q}_\ell$
的[[代数扩张]]，或 $\mathbb{Z}_\ell$ 在其中的整闭包，
或更一般地设[[凝聚态环]] $\Lambda$ 为核 $\mathbb{Z}_\ell$-代数。
则 $\mathbb{F}_p$-概形上的 $\mathsf{D}(\Lambda)$-Weil 层有[[六函子理论]]，
使得[[局部有限型态射]]都有 $!$ 函子。这里 $\mathsf{D}(\Lambda)$
表示核 $\Lambda$-模的[[导出 $(\infty,1)$-范畴]]。
:::

::: proof
由 @X/F 不难把定理化归到通常 $\ell$
进平展层的六函子理论。
:::

::: proposition
@etale-weil 描述的平展层到 Weil 层的函子满忠实。
:::

::: theorem
设 $X_0$ 是 $\mathbb{F}_q$ 上的代数簇，$A$ 是 $X_0$ 上的
$\overline{\mathbb{Q}_\ell}$-Weil 局部系，即取值为有限维
$\overline{\mathbb{Q}_\ell}$-线性空间的局部常 Weil 层。

1. 如 $X_0$ [[正规概形|正规]]、[[几何连通态射|几何连通]]，
   $A$ 不可约，则 $A$ 来自平展层当且仅当其行列式层
   $\det(A)$ 来自平展层。因此总存在
   $a\in\overline{\mathbb{Q}_\ell}^\times$ 使得
   $A\otimes\mathbb{L}_a$ 来自平展层。

2. 一般情况下总存在滤链
   $$
   0=A_0\subset A_1\subset\cdots\subset A_r=A
   $$
   以及 $a_1,\ldots,a_r\in\overline{\mathbb{Q}_\ell}^\times$，
   使得每个 $A_i/A_{i-1}$ 都还是局部系，且
   $A_i/A_{i-1}\otimes\mathbb{L}_{a_i}$ 来自平展层。

:::

::: corollary [Grothendieck 迹公式]
设 $X_0$ 是 $\mathbb{F}_q$ 上的代数簇，$X$ 是其在 $\mathbb{F}$ 的基变换，
$A$ 是 $X_0$ 上的 $\overline{\mathbb{Q}_\ell}$-[[完美复形]]值
Weil 层。定义 $A$ 的 **$L$ 函数**为
$$
L(X_0,A,s)=\prod_{x\in|X_0|}
\det(1-s^{-|k(x)|}F_x\mid A_{\bar{x}}),
$$
其中 $|X_0|$ 表示 $X_0$ 中闭点的集合，$k(x)$ 表示
$x$ 的剩余域，$\bar{x}$ 表示 $x$ 的几何点，
$F_x\colon A_{\bar{x}}\cong A_{\bar{x}}$
表示 $A$ 沿含入映射 $x\to X_0$ 拉回到
$x$ 之后依 @Fq 所得自同构。则
$$
L(X_0,A,s)=\det(1-s^{-q}F_A\mid\operatorname{R\Gamma}_\mathrm{c}(X,A)),
$$
其中 $\operatorname{R\Gamma}_\mathrm{c}$ 表示紧支平展上同调。
:::

```terms
Weil 层:
  en: Weil sheaf
```
