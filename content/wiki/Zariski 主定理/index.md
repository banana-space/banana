---
title: Zariski 主定理
categories: [概形论]
---

**Zariski 主定理**是[[拟有限态射]]的结构定理，
说的是[[分离态射|分离]]拟有限态射都[[开浸入]][[有限态射]]。
它也是[[平展态射]]、[[非分歧态射]]结构定理证明中重要的一步。

有的文献会把百科中的 [[Zariski 连通性定理]]称为 Zariski 主定理。

## 陈述与证明

以下命题是说相对正规化和平展基变换交换，之后移到[[平展态射]]处。

::: proposition
记态射 $f\colon X\to S$ 的相对正规化为 $X\to S'\to S$。
对平展态射 $T\to S$，记 $f_T\colon X_T\to T$
的相对正规化为 $X_T\to T'\to T$。则 $T'=S'_T$，
为 $S'$ 沿 $T\to S$ 基变换。
:::

::: proof
相对正规化为 Zariski 局部，故可设 $T$ 拟紧、分离；
又平展同态 $T\to S$ 是开映射，把 $S$ 换成像集可设
$T\to S$ 为满。设其各几何纤维点数最多为 $n$，对 $n$ 归纳。
$n=0$ 时不用证。$n>0$ 时考虑对角线 $\Delta_{T/S}\colon T\to
T\times_ST$。由于 $T\to S$ 平展、分离，$\Delta_{T/S}$
是开闭浸入。令 $U$ 为其补集，则两个投影 $U\to T$
各几何纤维点数最多为 $n-1$，故由归纳假设 $U'=T'_U$。
而对角线到 $T$ 的投影是同构，所以 $(T\times_ST)'=
T'_{T\times_ST}$，特别地 $T'$ 沿两个投影基变换到
$T\times_ST$ 所得结果一样。由[[平坦下降]]，存在整 $S$-概形
$S''$ 使得 $S''_T=T'$，且映射 $X_T\to T'$ 也可下降为
$X\to S''$。注意 $S''\to S$ 为整同态，
故由相对正规化的万有性质，$X\to S''$ 唯一地穿过 $S'$；
另一方面由 $T$ 上这一万有性质，$X_T\to S'_T$ 唯一地穿过 $T'$，
然后又能下降为 $X\to S'$ 穿过 $S''$。这样就有 $S'$
和 $S''$ 互相的映射，由唯一性知两个方向的复合都是恒同，
$S'=S''$，故 $T'=S'_T$。
:::

下面是 Zariski 主定理对一般[[概形]]的陈述。
其实证明的一大部分已经在 [[Hensel 环]]条目完成。

::: theorem {@典范}
设 $f\colon X\to S$ 是[[分离态射|分离]][[有限型态射]]，
$\nu\colon S'\to S$ 为[[相对正规化]]，即 $\mathcal{O}_S$
在 $f_*\mathcal{O}_X$ 中的整闭包的[[相对素谱]]。以
$f'\colon X\to S'$ 记自然态射。记 $U=\{x\in X\mid
\text{$f$ 在 $x$ 拟有限}\}$，则有 $U$ 为开集，
$f'|_U$ 为开浸入，$f'^{-1}(f'(U))=U$。特别地，
分离[[拟有限态射]]典范地开浸入[[整态射]]。
:::

::: proof
取 $x\in U$，并记 $s=f(x)$。设 $S$ 在 $s$ 处
[[Hensel 化]]为 $R$，则 $\operatorname{Spec}R$ 是平展
$S$-概形沿仿射转移态射的极限。由相对正规化和平展基变换交换、
可以过渡到极限，知 $f_R\colon X_R\to\operatorname{Spec}R$
的相对正规化为 $S'_R$。这样由 [[Hensel 环]]的等价刻画，
$X_R$ 可分解为 $X_{R,0}\sqcup X_R'$，其中 $X_{R,0}$
在 $R$ 上有限，$X_R'$ 特殊纤维没有离散点。显然 $x\in
X_{R,0}$。容易看出 $X_R\to\operatorname{Spec}R$
的相对正规化 $S'_R$ 形如 $S'_{R,0}\sqcup S''_R$，其中
$X_{R,0}$ 沿 $f'_R$ 同构到 $S'_{R,0}$。
于是由[[过渡到极限]]，存在 $s$ 的平展邻域 $T$ 以及 $X_T$
的分解 $X_{T,0}\sqcup X_T'$，满足 $X_{T,0}$
在 $T$ 上有限，包含 $x$，且沿 $f'_T$ 同构到 $S'_T$
的开闭子概形。由于 $T\to S$ 为平展，故为拟有限，从而
$X_{T,0}\to S$ 拟有限。考虑 $X_{T,0}$ 沿平展态射
$X_T\to X$ 的像 $U_0$，则它为 $X$ 的拟紧开子概形，
为有限型，又由 $X_{T,0}\to S$ 拟有限便知 $U_0\to S$
拟有限，$U_0\subseteq U$。每个 $x\in U$ 都有开邻域
$U_0\subseteq U$，所以 $U$ 为开。由上面对 Hensel
局部化的分析不难看出，在 $f$ 的每根纤维上，$f'|_U$ 都是单射，
且满足 $f'^{-1}(f'(U))=U$；所以 $f'|_U$ 整体地是单射，
且集合论地满足 $f'^{-1}(f'(U))=U$。最后只剩证明 $f'|_U$
是开浸入。由于已经证明它是单射，只需对每个 $x\in U$
证明它在 $x$ 的局部是开浸入；此时我们可以对 $S$ 做平展局部化到
$T$，这样由上述 $X_{T,0}\to S'_T$ 是开闭浸入即得结论。
:::

::: corollary
分离[[拟有限态射]][[拟仿射态射|拟仿射]]。
:::

::: proof
如 $f\colon X\to S$ 分离拟有限，取相对正规化 $S'$，
则 $X\to S'$ 为拟紧开浸入，$S'\to S$ 为[[整同态]]，
特别地[[仿射同态|仿射]]，故 $f$ 拟仿射。
:::

::: theorem
设 $f\colon X\to S$ 是分离拟有限态射，$S$ 是[[拟紧拟分离概形]]。
则 $f$ 能分解为开浸入 $j\colon X\to T$ 与[[有限态射]]
$\pi\colon T\to S$。
:::

::: proof
取相对正规化 $\nu\colon S'\to S$，则由 @典范，
自然态射 $f'\colon X\to S'$ 是[[开浸入]]。现在
$\nu_*\mathcal{O}_{S'}$ 在 $\mathcal{O}_S$ 上整；由 $S$
拟紧拟分离知其等于其有限子代数的并；对应地 $S'=\lim_{i\in I}
S_i$，每个 $S_i\to S$ 有限。把 $S'$ 的拟紧开子概形 $X$ 过渡到极限，
知存在 $i\in I$ 以及 $X_i\subseteq S_i$，在 $S'$ 的原像为
$X$。现对 $j\ge i$，记 $X_i$ 在 $S_j$ 中原像为 $X_j$，
记 $\mathcal{A}_j$ 为 $S_j\to S_i$
对应的 $\mathcal{O}_{S_i}$-代数，记 $\mathcal{A}'$ 为
$S'\to S_i$ 对应的 $\mathcal{O}_{S_i}$-代数。则由
$S_i$ 的取法有 $\mathcal{A}_j$ 之间转移映射为单射，
$\mathcal{A}'=\operatornamewithlimits{colim}_j
\mathcal{A}_j$。将此等式限制到 $X_i$ 上，由 $X$
为有限型知对充分大的 $j$ 有 $\mathcal{A}'|_{X_i}=
\mathcal{A}_j|_{X_i}$，即 $X=X_j$，这样取 $T=S_j$
即满足要求。
:::

::: corollary
[[拟有限态射|拟有限]][[紧合态射]]为[[有限态射|有限]]。
:::

::: proof
设 $f\colon X\to S$ 为拟有限紧合态射。如定理所述作分解
$X\to T\to S$，其中 $X\to T$ 为[[开浸入]]。
由[[对角态射]]论证易知 $X\to T$ 紧合，故也是闭浸入。
所以 $X$ 在 $S$ 上整，由其有限型便知有限。
:::

::: remark
这里的证明稍显繁琐，但能得到尽可能一般的结论。Noether
情形有些更简单的证明，比如参见 [@fu, 定理 1.10.13]。
:::

## 参考文献

```bibliography
fu:
  type: book
  label: 扶磊
  author: 扶磊
  year: 2015
  title: Étale Cohomology Theory
  series: Nankai Tracts in Mathematics
  number: 14
  publisher: World Scientific
```

```terms
Zariski 主定理:
  en: Zariski's main theorem
  de: Hauptsatz von Zariski
  fr: théorème principal de Zariski
```
