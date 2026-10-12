---
title: Brauer 群
categories: [代数论, 代数几何]
notices:
  - name: 问题
    items:
      - “概形”一节中 Grothendieck 定理的证明不完整。
navboxes: [非交换代数]
---

一个[[域]] $k$ 的 **Brauer 群**指的是 $k$ 上[[中心单代数]]的
[[Morita 等价]]类在[[张量积]]下构成的群。
它在[[代数数论]]特别是[[类域论]]中有重要意义，
是[[局部类域论]]中不变量映射的定义域。

Brauer 群等于 $k$ [[平展景|平展]]结构层的乘法群的二阶[[层上同调]]。
它还能推广到[[交换环]]、[[概形]]，甚至可表现对称幺半稳定无穷范畴上。

## 定义

::: definition
域 $k$ 的 **Brauer 群**，记作 $\operatorname{Br}(k)$，
是个[[交换群]]，其元素是 $k$ 上有限维[[中心单代数]]的
[[Morita 等价]]类，乘法是在 $k$ 上做张量积。
:::

::: remark
从定义并不立即看出它是群，因为看不出逆元。以下构造之。
对 $k$ 上中心单代数 $A$，记 $n=\dim_kA$，则由于 $A$ 是自身的[[双模]]，
有自然的环同态
$$
A\otimes_kA^\text{op}\to\operatorname{End}_k(A)\cong\operatorname{M}_n(k),
$$
$$
a\otimes a'\mapsto(x\mapsto axa').
$$
当 $A$ 是矩阵环时可显式验证它是同构；对一般的 $A$，
基变换到[[代数闭域]]上，由于代数闭域上中心单代数都是矩阵环，
即知它总是同构。由 $\operatorname{M}_n(k)$ Morita 等价于
$k$，可知 $A^\text{op}$ 就是 $A$ 在 $\operatorname{Br}(k)$
中的逆元。
:::

::: remark
由 [[Artin–Wedderburn 定理]]，$k$ 上中心单代数 $A$ 都形如
$\operatorname{M}_n(D)$，其中 $D$ 是 $k$
上中心[[除环]]。由于 $D$ 实际上是单左 $A$-模的自同态环，
它由 $A$ 的 Morita 等价类决定。这样，$\operatorname{Br}(k)$
的元素也可视为 $k$ 上中心除环的同构类。
:::

## 性质

其最重要的性质是上同调表达：

::: theorem
$\operatorname{Br}(k)=H^2_\text{\'et}(\operatorname{Spec}k,\mathbb{G}_m)$。
:::

::: proof
先作从 $\operatorname{Br}(k)$ 到 $H^2_\text{\'et}(\operatorname{Spec}k,\mathbb{G}_m)$
的映射。设 $A$ 是 $k$ 上中心单代数。由于代数闭域上中心单代数都是矩阵环，
$A$ 张量积到 $k$ 的代数闭包 $k^\text{a}$ 之后是矩阵环，设其为
$\operatorname{M}_n(k^\text{a})$。考虑 $k$ 上交换环到集合的函子

```math {@主丛}
R\mapsto\operatorname{Isom}_R(A\otimes_kR,\operatorname{M}_n(R)),
```

其中 $\operatorname{Isom}_R$ 表示 $R$-代数同构。
写出 $A$ 和 $\operatorname{M}_n$ 各自的一组基，
将保持乘法的条件写出来，不难发现该函子定义了 $k$ 上[[有限表现概形]]。
由于 $\operatorname{Aut}(\operatorname{M}_n)=\operatorname{PGL}_n$
为光滑群概形，以上函子是 fpqc-$\operatorname{PGL}_n$-主丛
（因被 $\operatorname{Spec}k^\text{a}$ 平凡化），
故它也是光滑的。[[光滑态射]]平展局部上有[[截面]]，
故它实际上是平展 $\operatorname{PGL}_n$-主丛。对正合列
$$
1\to\mathbb{G}_m\to\operatorname{GL}_n\to\operatorname{PGL}_n\to1
$$
写出上同调长正合列，
用 [[Hilbert 定理 90]] 即 $H^1_\text{\'et}(\operatorname{Spec}k,\operatorname{GL}_n)=0$，有

```math {@同调类}
H^1_\text{\'et}(\operatorname{Spec}k,\operatorname{PGL}_n)\hookrightarrow H^2_\text{\'et}(\operatorname{Spec}k,\mathbb{G}_m);
```

$A$ 给出的 $H^2_\text{\'et}(\operatorname{Spec}k,\mathbb{G}_m)$
类就定义为主丛 @主丛 的 $H^1$ 类在该映射的像。
暂把 $H^1$ 类和它映射到的 $H^2$ 类都记作 $[A]$。
我们需要证明 $A\mapsto[A]$ 作为从 $\operatorname{Br}(k)$
出发的映射良定，且是群同构。

先证 $[A\otimes_kB]=[A]+[B]$。注意矩阵张量积映射
$$
\operatorname{GL}_n\times\operatorname{GL}_m\to\operatorname{GL}_{nm}
$$
在 $\operatorname{PGL}$ 上诱导的映射正是
$\operatorname{M}_n\otimes\operatorname{M}_m\cong
  \operatorname{M}_{nm}$ 诱导的映射
$$
\operatorname{Aut}(\operatorname{M}_n)\times\operatorname{Aut}(\operatorname{M}_m)\to\operatorname{Aut}(\operatorname{M}_{nm}),
$$
且有交换图表
\[
\begin{tikzcd}
  1\ar[r]&\mathbb{G}_m\times\mathbb{G}_m\ar[r]\ar[d]&\operatorname{GL}_n\times\operatorname{GL}_m\ar[r]\ar[d]&\operatorname{PGL}_n\times\operatorname{PGL}_m\ar[r]\ar[d]&1\\
  1\ar[r]&\mathbb{G}_m\ar[r]&\operatorname{GL}_{mn}\ar[r]&\operatorname{PGL}_{mn}\ar[r]&1
\end{tikzcd}
\]
其中第一个竖箭头是乘法。由上同调长正合列的函子性，有图表
\[
\begin{tikzcd}
  H^1_\text{\'et}(\operatorname{Spec}k,\operatorname{PGL}_n)\times H^1_\text{\'et}(\operatorname{Spec}k,\operatorname{PGL}_m)\ar[r]\ar[d]&H^2_\text{\'et}(\operatorname{Spec}k,\mathbb{G}_m)\times H^2_\text{\'et}(\operatorname{Spec}k,\mathbb{G}_m)\ar[d]\\
  H^1_\text{\'et}(\operatorname{Spec}k,\operatorname{PGL}_{nm})\ar[r]&H^2_\text{\'et}(\operatorname{Spec}k,\mathbb{G}_m)
\end{tikzcd}
\]
交换。左上角的元素 $([A],[B])$ 沿两条路映射到右下角，
得到元素分别是 $[A\otimes_kB]$ 与 $[A]+[B]$，故二者相等。

现如 $A=\operatorname{M}_d(D)$，$D$ 是除环，则
$A=D\otimes_k\operatorname{M}_d(k)$，故
$[A]=[D]+[\operatorname{M}_d(k)]$。依定义，$\operatorname{M}_d(k)$
给出的主丛平凡，对应的类是 $0$，所以 $[A]=[D]$。故
$[A]$ 只依赖于 $A$ 的 Morita 等价类，即其良定。上一段证明了其保持群结构，
还剩证明它是同构。

单射比较好证。如 $[A]=0$，由于映射 @同调类 是单射，
$A$ 给出的 $\operatorname{PGL}$-主丛已经平凡，故 $A$
是矩阵环，在 $\operatorname{Br}(k)$ 中平凡。满射就比较麻烦。
取 $\alpha\in H^2_\text{\'et}(\operatorname{Spec}k,\mathbb{G}_m)$，
要找到中心单代数 $A$ 使得 $[A]=\alpha$。注意只需证它来自某个
$H^1_\text{\'et}(\operatorname{Spec}k,\operatorname{PGL}_n)$
的某个元素，因为沿该元素下降矩阵代数，就会得到想要的中心单代数。
由于可分闭域的平展上同调平凡，$\alpha$ 拉回到 $k$ 的可分闭包得 $0$，
故其拉回到某个有限可分扩张已经得 $0$。设 $F/k$ 是这样的扩张，次数为 $n$，
则 $F$ 左乘作用在自己就给出嵌入 $F\hookrightarrow\operatorname{M}_n(k)$。
以 $\mathbb{G}_{m,F/k}$ 记群概形 $R\mapsto(F\otimes_kR)^\times$，
则同样地它能嵌入 $\operatorname{GL}_n$。写 $k$ 上群概形的交换图
\[
\begin{tikzcd}
  1\ar[r]&\mathbb{G}_m\ar[r]\ar[d,equal]&\mathbb{G}_{m,F/k}\ar[r]\ar[d]&Q\ar[r]\ar[d]&1\\
  1\ar[r]&\mathbb{G}_m\ar[r]&\operatorname{GL}_n\ar[r]&\operatorname{PGL}_n\ar[r]&1
\end{tikzcd}
\]
并考虑其上同调长正合列
\[
\begin{tikzcd}
  H^1_\text{\'et}(\operatorname{Spec}k,Q)\ar[r]\ar[d]&H^2_\text{\'et}(\operatorname{Spec}k,\mathbb{G}_m)\ar[r]\ar[d,equal]&H^2_\text{\'et}(\operatorname{Spec}k,\mathbb{G}_{m,F/k})\\
  H^1_\text{\'et}(\operatorname{Spec}k,\operatorname{PGL}_n)\ar[r]&H^2_\text{\'et}(\operatorname{Spec}k,\mathbb{G}_m)\ar[r]&{}
\end{tikzcd}
\]
由于 $\mathbb{G}_{m,F/k}$ 无非是 $F$ 上的平展层 $\mathbb{G}_m$
沿有限平展映射 $\operatorname{Spec}F\to\operatorname{Spec}k$
的前推，所以
$H^2_\text{\'et}(\operatorname{Spec}k,\mathbb{G}_{m,F/k})=H^2_\text{\'et}(\operatorname{Spec}F,\mathbb{G}_m)$，
且上图右上映射对应于自然的拉回映射。由 $F$ 的取法，
$\alpha$ 被该映射打到 $0$，故它来自 $H^1_\text{\'et}(\operatorname{Spec}k,Q)$，
自然也来自 $H^1_\text{\'et}(\operatorname{Spec}k,\operatorname{PGL}_n)$。
:::

## 例子

- 由 [[Wedderburn 小定理]]，[[有限域]]的 Brauer 群是 $0$。

- 由[[曾定理]]，[[$\mathrm{C}_k$ 域|$\mathrm{C}_1$ 域]]的 Brauer 群是 $0$。
  特别地，对[[代数闭域]] $k$ 上[[代数曲线]] $X$，
  $\operatorname{Br}(k(X))=0$。

- 由于 $\mathbb{R}$ 上除环只有 $\mathbb{R},\mathbb{C},\mathbb{H}$，
  其中只有 $\mathbb{R}$ 和 $\mathbb{H}$ 是中心的，所以
  $\operatorname{Br}(\mathbb{R})=\mathbb{Z}/2$。

- 由[[局部类域论]]，非 Archimedes
  [[局部域]]的 Brauer 群是 $\mathbb{Q}/\mathbb{Z}$。

- 设 $F$ 为[[整体域]]。由[[整体类域论]]，
  $$
  \operatorname{Br}(F)=\ker\left(\bigoplus_v\operatorname{Br}(F_v)\to\mathbb{Q}/\mathbb{Z}\right),
  $$
  其中 $v$ 取遍 $F$ 的[[位点]]，映射为每个位点不变量映射之和。
  换言之，$F$ 上中心单代数被其在各个位点的完备化确定，
  且只在有限个位点上非平凡；
  给定各个位点上中心单代数，它们只要不变量之和为 $0$，
  就可以粘成 $F$ 上中心单代数。

## 推广

### 概形

[[概形]]的 Brauer 群，经典的定义是用 [[Azumaya 代数]]替换中心单代数。

::: definition
概形 $X$ 的 **Brauer 群**，记作 $\operatorname{Br}(X)$，
是个交换群，其元素是 $X$ 上 Azumaya 代数的等价类，
等价关系是在各个仿射开集上 [[Morita 等价]]。
$X$ 的**上同调 Brauer 群**，记作 $\operatorname{Br}'(X)$，
定义为 $H^2_\text{\'et}(X,\mathbb{G}_m)_\text{tor}$，
即平展层 $\mathbb{G}_m$ 的二阶上同调中的挠元。
:::

和域上类似地，我们仍有 Brauer 群到上同调的自然映射。

::: proposition
Brauer 群到上同调 Brauer 群有自然的单射。
:::

但这里它未必是同构，因为一般的概形上没有足够的向量丛来作出
Azumaya 代数。只在 $X$ 上有[[丰沛线丛]]时它才是同构。

::: theorem [Gabber]
如 $X$ 有丰沛线丛，则 $\operatorname{Br}(X)=\operatorname{Br}'(X)$。
:::

另外，乘法群层的二阶平展上同调常常本身就是挠的。

::: theorem [Grothendieck]
如 $X$ 是 [[Noether 概形]]，满足其每个[[严格 Hensel 化]]都是[[唯一分解整环]]，
就有 $H^2_\text{\'et}(X,\mathbb{G}_m)$ 是挠群。
:::

::: proof
条件显然推出 $X$ [[正规概形|正规]]。逐个连通分支考虑，可不妨设 $X$
是整的。由条件有平展层正合列
$$
1\to\mathbb{G}_m\to K_X\to\operatorname{Div}_X\to0,
$$
其中 $K_X$ 表示分式域常层，$\operatorname{Div}_X$ 表示 [[Weil 除子]]层。
以此正合列考察上同调，结合域上已知情形即得结论。之后我再详细写。
:::

### 范畴

也可定义[[可表现无穷范畴|可表现]][[对称幺半无穷范畴|对称幺半]][[稳定无穷范畴]]的
Brauer $\mathbb{E}_\infty$-群。

回忆所有可表现稳定无穷范畴的范畴 $\mathsf{Pr}^L_\text{st}$
具有自然的对称幺半结构 [[Lurie 张量积]]，
而可表现对称幺半稳定无穷范畴就是这一对称幺半结构下的对称代数。
换言之，所有可表现对称幺半稳定无穷范畴的范畴就是
$\mathsf{CAlg}(\mathsf{Pr}^L_\text{st})$。

::: definition
可表现对称幺半稳定无穷范畴 $\mathcal{C}$ 的 **Brauer 群**，
记作 $\operatorname{Br}(\mathcal{C})$，定义为
$\mathsf{Pr}^L_\text{st}$ 中可逆 $\mathcal{C}$-模关于张量积构成的
$\mathbb{E}_\infty$-群。
:::

::: remark
如概形 $X$ 上有 Azumaya 代数 $\mathcal{A}$，则
$\mathsf{D}(\mathcal{A})$ 是可逆 $\mathsf{D}(X)$-模。
:::

Brauer 群是 [[Picard 群]]的不连通[[解环]]，故也是乘法群
$\mathbb{G}_m(\mathcal{C})=\operatorname{Aut}(1_\mathcal{C})$
的二次解环：

::: proposition
$$
\Omega\operatorname{Br}(\mathcal{C})=\operatorname{Pic}(\mathcal{C}),\,
\Omega^2\operatorname{Br}(\mathcal{C})=\mathbb{G}_m(\mathcal{C}).
$$
:::

对（经典）概形 $X$，以 $\mathsf{D}(X)$ 记其拟凝聚层无穷范畴，
则 $\mathsf{D}(X)$ 的 Brauer 群的 $\pi_0$ 就是 $H^1(X,\mathbb{Z})\times H^2(X,\mathbb{G}_m)$。

```terms
Brauer 群:
  en: Brauer group
  de: Brauergruppe
  fr: groupe de Brauer
```
