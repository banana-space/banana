---
title: Boole 代数
aliases: [Boole 环, 布尔代数, 完备 Boole 代数]
categories: [命题逻辑, 交换代数]
navboxes: [逻辑学, 代数结构]
---

**Boole 代数**是一种[[代数结构]]，
用来描述经典[[命题逻辑]]。
它的元素可以看作经典的命题，
这些命题可以进行[[与]]、[[或]]、[[非]]等[[运算]]，
并且满足[[排中律]]。

[[集合论]]中的[[代数 (集合论)|代数]]是 Boole 代数的特例，
命题的与、或、非对应于某个固定集合的[[子集]]的[[交集|交]]、[[并集|并]]、[[补集|补]]。
这也是集合论中的代数命名的原因。

## 定义

### 显式定义

::: definition [Boole 代数]
**Boole 代数**是六元组 $( B, \bot, \top, \vee, \wedge, \neg )$，其中

- $B$ 是[[集合]]。

- $\bot, \top \in B$ 是两个元素，有时也记为 $0, 1$，
  称为**假**和**真**。

- $\vee, \wedge$ 是 $B$ 上的[[二元运算]]，称为**或**和**与**。

- $\neg$ 是 $B$ 上的[[一元运算]]，称为**非**。

它们满足以下性质：

- $(B, \bot, \vee)$ 和 $(B, \top, \wedge)$ 分别构成[[交换运算|交换]][[幺半群]]。
  换言之，有以下性质：

  - （**[[结合运算|结合律]]**）对任意 $a, b, c \in B$，有
    \[
    \begin{aligned}
      a \vee (b \vee c) & = (a \vee b) \vee c, \\
      a \wedge (b \wedge c) & = (a \wedge b) \wedge c.
    \end{aligned}
    \]

  - （**[[交换运算|交换律]]**）对任意 $a, b \in B$，有
    \[
    \begin{aligned}
      a \vee b = b \vee a, \\
      a \wedge b = b \wedge a.
    \end{aligned}
    \]

  - （**[[单位律]]**）对任意 $a \in B$，有
    \[
    \begin{aligned}
      a \vee \bot = a, \\
      a \wedge \top = a.
    \end{aligned}
    \]

- （**[[吸收律]]**）对任意 $a, b \in B$，有
  \[
  \begin{aligned}
    a \wedge (a \vee b) & = a, \\
    a \vee (a \wedge b) & = a.
  \end{aligned}
  \]

- （**[[分配律]]**）对任意 $a, b, c \in B$，有
  \[
  \begin{aligned}
    a \wedge (b \vee c) & = (a \wedge b) \vee (a \wedge c), \\
    a \vee (b \wedge c) & = (a \vee b) \wedge (a \vee c).
  \end{aligned}
  \]

- （**[[互补律]]**）对任意 $a \in B$，有
  \[
  \begin{aligned}
    a \vee \neg a & = \top , \\
    a \wedge \neg a & = \bot .
  \end{aligned}
  \]

在无歧义时，将这个六元组记为 $B$。
:::

从以上公理出发，还能得出以下运算律：

- （**[[幂等律]]**）对任意 $a \in B$，有
  \[
  \begin{aligned}
    a \vee a & = a, \\
    a \wedge a & = a.
  \end{aligned}
  \]

- 对任意 $a \in B$，有
  \[
  \begin{aligned}
    a \vee \top & = \top, \\
    a \wedge \bot & = \bot.
  \end{aligned}
  \]

- 有
  \[
  \begin{aligned}
    \neg \bot & = \top, \\
    \neg \top & = \bot.
  \end{aligned}
  \]

- （**[[对合|对合律]]**）对任意 $a \in B$，有
  \[
  \neg \neg a = a.
  \]

也可以定义下列运算：

- 定义 **[[蕴涵]]** 运算 $\to$ 为
  \[
  a \to b = \neg a \vee b.
  \]

- 定义 **[[对称差]]** 运算 $\triangle$ 为
  \[
  a \mathbin{\triangle} b = (a \wedge \neg b) \vee (b \wedge \neg a).
  \]
  以对称差为加法，以 $\wedge$ 为乘法，
  Boole 代数可以看作[[交换环]]，
  也是[[有限域]] $\mathbb{F}_2$ 上的[[交换代数 (代数结构)|交换代数]]。

### 等价定义

::: definition {@格定义}
Boole 代数是具有最大元、最小元、补的[[分配格]]。
即它是偏序集 $(B,\le)$，具有最大元 $\top$，最小元 $\bot$，
每两个元素 $a,b$ 具有上确界 $a\vee b$，下确界 $a\wedge b$，
$\vee$ 与 $\wedge$ 互相满足分配律，且每个元素 $a$
都有补 $\neg a\in B$，意思是满足 $a\vee\neg a=\top$，
$a\wedge\neg a=\bot$。
:::

容易验证此时 $(B,\bot,\top,\vee,\wedge,\neg)$ 构成前述定义的
Boole 代数。反过来，对于前述定义的 Boole 代数 $B$，定义
$$
a\le b\iff a\vee b=b\iff a\wedge b=a,
$$
便给了 $B$ 以分配格结构，显然具有最大元 $\top$，最小元 $\bot$，
补 $\neg$。

::: definition {@环定义}
Boole 代数 $B$ 是[[交换环]]，满足对任意 $a\in B$，
$a^2=a$。
:::

此定义与前述等价。一方面，上面已经说过 Boole 代数关于 $\triangle$
和 $\wedge$ 构成交换环。在吸收律中代入 $b=\bot$ 即得
$a\wedge a=a$。反过来，对于如上交换环，定义 $a\wedge b=ab$，
$\neg a=1-a$，$a\vee b=1-(1-a)(1-b)=a+b-ab$，不难验证
$(B,0,1,\vee,\wedge,\neg)$ 构成前述定义的 Boole 代数。
强调环结构时常称 $B$ 为 **Boole 环**。

## 例子

1. {@幂集} 对集合 $X$，其幂集 $P(X)$ 关于空集、全集、并、交、补构成
   Boole 代数。

2. [[集合代数]]是 Boole 代数。这是上一例的子代数。

3. {@正则开集} 对[[拓扑空间]] $X$，
   其**正则开集代数**定义为：
   \[
   \mathrm{RO}(X) =
   \{ U \subseteq X\text{ 开} \mid
   {(\bar{U})}^\circ=U \},
   \]
   即闭包的内部等于自身的开集，其中 $\top=X$，$\bot=\varnothing$，
   $U\vee V={(\overline{U\cup V})}^\circ$，
   $U\wedge V=U\cap V$，$\neg U={(X\setminus U)}^\circ$。
   不难验证这构成 Boole 代数。

4. {@测度空间} 对[[测度空间]] $(X,\mathcal{M},\mu)$，在 $\mathcal{M}$
   上定义[[等价关系]]
   \[
   A \sim B \iff
   \mu (A \mathbin{\triangle} B) = 0,
   \]
   则 $\mathcal{M}/\sim$ 是 Boole 代数。它是 $\mathcal{M}$
   的商代数。

## 性质

### 完备性

::: definition [完备 Boole 代数]
说 Boole 代数**完备**，指其依 @格定义
构成[[完备格]]，即具有任意[[上确界]]、[[下确界]]，
而不只是两个元素的上下确界。此时任意上确界、
下确界也称为任意并、交。
:::

以上的[例 1](@幂集)、[例 3](@正则开集) 都完备；
当[例 4](@测度空间) 中的测度为 $\sigma$-有限时，它也完备。

::: proposition
完备 Boole 代数中，交与任意并分配，并与任意交分配。
:::

::: proof
只证前半句，后半句一样。需对任一元素 $a$ 以及任一族元素
$b_i$ 证明
$$
a\wedge\bigvee_ib_i=
\bigvee_i(a\wedge b_i).
$$
由于它们都小于等于 $a$，只需证 $a$ 减去它们相等，即
$$
a\wedge\neg\left(a\wedge\bigvee_ib_i\right)
=a\wedge\neg\bigvee_i(a\wedge b_i).
$$
计算上式左边等于
$$
a\wedge\left(\neg a\vee\neg\bigvee_ib_i\right)
=a\wedge\neg\bigvee_ib_i=a\wedge\bigwedge_i\neg b_i
=\bigwedge_i(a\wedge\neg b_i),
$$
右边等于
$$
a\wedge\bigwedge_i(\neg a\vee\neg b_i)
=\bigwedge_i(a\wedge(\neg a\vee\neg b_i))
=\bigwedge_i(a\wedge\neg b_i),
$$
确实相等。
:::

### 理想

Boole 代数的理想就是其依 @环定义 视为环的[[理想]]。
也就是非空的 $I\subseteq B$，满足

- 对 $a\in I$，$x\in B$，$a\wedge x\in I$；

- 对 $a,b\in I$，$a\vee b\in I$。

用 @格定义 的话，上面第一个条件相当于向下封闭。
**商代数** $B/I$ 指 $B$ 商去等价关系
\[
x \sim y \iff
x \mathbin{\triangle} y \in I;
\]
不难验证 $B$ 的各种运算在 $B/I$ 上良定义，让 $B/I$ 成为 Boole
代数。

### 滤子

[[滤子]]是理想的对偶概念，即 $F\subseteq B$ 是滤子当且仅当
$1-F:=\{1-f\mid f\in F\}$ 是理想。写出来就是 $F$ 非空且满足

- 对 $f\in F$，$x\in B$，$f\vee x\in F$；

- 对 $f,g\in F$，$f\wedge g\in F$。

用 @格定义 的话，上面第一个条件相当于向上封闭。

```terms
Boole 代数:
  en: Boolean algebra
  de: boolesche Algebra
  fr: algèbre de Boole
```
