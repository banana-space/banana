---
title: Kähler 微分
aliases: [Kahler 微分, 微分模, Kähler 微分层]
categories: [交换代数]
navboxes: [交换代数]
---

::: convention
在本文中，

- 所有环都指[[交换环]]。

:::

**Kähler 微分**是[[余切丛]]及[[微分形式]]在[[代数几何]]中的对应物。

## 定义

::: definition [环的 Kähler 微分] {@环定义}
[[环同态]] $R\to A$ 的 **Kähler 微分**或称**微分模**，也称
$A$ 在 $R$ 上的 Kähler 微分，记作 $\Omega_{A/R}$，
指的是由记号 $\mathrm{d}a$，$a\in A$ 在关系

- $\mathrm{d}(a+b)=\mathrm{d}a+\mathrm{d}b$；

- $\mathrm{d}(ab)=a\mathrm{d}b+b\mathrm{d}a$；

- $\mathrm{d}r=0$，$r\in R$；

下生成的 $A$-[[模]]。换言之，
$$
\Omega_{A/R}=\frac{\bigoplus_{a\in A}A\mathrm{d}a}
{(\mathrm{d}(a+b)-\mathrm{d}a-\mathrm{d}b)_{a,b\in A}+(\mathrm{d}(ab)-a\mathrm{d}b-b\mathrm{d}a)_{a,b\in A}
+(\mathrm{d}r)_{r\in R}}.
$$
环 $A$ 的 **Kähler 微分**或称**微分模**指的是 $A$ 在 $\mathbb{Z}$
上的 Kähler 微分，也记作 $\Omega_A$。
:::

::: remark [万有性质]
依定义立知 $A$ 到 $\Omega_{A/R}$ 的映射 $a\mapsto \mathrm{d}a$
是 $R$-[[导子]]，且是其中万有者。换言之，有对 $A$-模 $M$
自然的同构
$$
\operatorname{Hom}_A(\Omega_{A/R},M)=
\operatorname{Der}_R(A,M),
$$
$$
f\mapsto(a\mapsto f(\mathrm{d}a)).
$$
由 [[Yoneda 引理]]，这完全刻画了 $A$-模 $\Omega_{A/R}$。
也可把这当作定义，而把 @环定义 当作构造。
:::

::: remark [函子性] {@函子性}
显然对环同态 $R\to A\to A'$ 有自然的 $A$-模同态
$\Omega_{A/R}\to\Omega_{A'/R}$，从而有 $A'$-模同态
$\Omega_{A/R}\otimes_AA'\to\Omega_{A'/R}$。对环同态
$R\to R'\to A$ 有自然的 $A$-模同态
$\Omega_{A/R}\to\Omega_{A/R'}$，且为满射。
:::

由下面的 @基变换 和 @局部化，Kähler 微分
$\Omega_{A/R}$ 在 $R$ 和 $A$ 的[[局部化]]下都表现良好，
因此可以对概形定义。

::: definition [概形的 Kähler 微分]
[[概形]][[态射]] $f\colon X\to S$ 的 **Kähler 微分**，
也称 $X$ 在 $S$ 上的 Kähler 微分，记作 $\Omega_{X/S}$，
指的是 $X$ 上的[[拟凝聚层]]，满足对 $S$ 的[[仿射开集]]
$U=\operatorname{Spec}R$ 和 $f^{-1}(U)$ 的仿射开集
$V=\operatorname{Spec}A$，其在 $V$ 上的取值为
$\Omega_{A/R}$。由 @基变换 和 @局部化，
这的确给出 $X$ 上的拟凝聚层。
:::

::: remark
由环的 Kähler 微分的万有性质与函子性容易得到概形
Kähler 微分的同样性质，即

- 有自然的 $f^{-1}\mathcal{O}_S$-导子
  $\mathcal{O}_X\to\Omega_{X/S}$，
  诱导对 $X$ 上拟凝聚层 $\mathcal{F}$ 自然的同构
  $$
  \operatorname{Hom}_{\mathcal{O}_X}
  (\Omega_{X/S},\mathcal{F})=
  \operatorname{Der}_{f^{-1}\mathcal{O}_S}
  (\mathcal{O}_X,\mathcal{F}).
  $$
  这里 $f^{-1}\mathcal{O}_S$-导子指满足 Leibniz 法则的
  $f^{-1}\mathcal{O}_S$-模层同态。

- 对概形态射 $g\colon X'\to X$ 有自然的
  $\mathcal{O}_{X'}$-同态 $g^*\Omega_{X/S}\to
      \Omega_{X'/S}$。对 $f$ 的分解 $X\to S'\to S$
  有自然的 $\mathcal{O}_X$-同态 $\Omega_{X/S}\to
      \Omega_{X/S'}$，且为满射。

:::

上面定义的 Kähler 微分相当于[[余切丛]]，即一阶微分。
高阶微分则定义为一阶微分的[[外积]]。

::: definition [高阶 Kähler 微分]
对自然数 $i$，环同态 $R\to A$ 的 **$i$ 阶
Kähler 微分**或称 **$i$ 阶微分模**，也称 $A$
在 $R$ 上的 $i$ 阶 Kähler 微分，记作 $\Omega_{A/R}^i$，
指的是 $A$-模 $\bigwedge^i\Omega_{A/R}$，
即 $\Omega_{A/R}$ 在 $A$ 上的 $i$ 次外积。对概形态射
$X\to S$ 也有同样的概念，记作 $\Omega_{X/S}^i$，
指的是 $X$ 上拟凝聚层 $\bigwedge^i\Omega_{X/S}$，
即 $\Omega_{X/S}$ 在 $\mathcal{O}_X$ 上的 $i$ 次外积。
:::

这里也有和[[微分形式]]一样的[[外微分]]操作。

::: definition [外微分]
对自然数 $i$ 和环同态 $R\to A$，**外微分**指 $R$-模同态
$$
\mathrm{d}\colon\Omega_{A/R}^i\to\Omega_{A/R}^{i+1},
$$
$$
\mathrm{d}(a_0\mathrm{d}a_1\wedge\cdots\wedge
\mathrm{d}a_i)=\mathrm{d}a_0\wedge\mathrm{d}a_1\wedge
\cdots\wedge\mathrm{d}a_i.
$$
换言之，它是自然映射 $\mathrm{d}\colon A\to\Omega_{A/R}$
的 [[Koszul 复形]]。不难验证其良定义，对外积满足
[[Leibniz 法则]]，且 $\mathrm{d}^2=0$。
对概形态射 $X\to S$ 也有同样的概念，此时外微分是
$f^{-1}\mathcal{O}_S$-模层同态。
:::

## 性质

在研究 Kähler 微分时，其万有性质非常方便。

::: proposition [基变换] {@基变换}
对环同态 $R\to A$，$R\to R'$，记 $A'=A\otimes_RR'$，
则有自然同构 $\Omega_{A'/R'}=\Omega_{A/R}\otimes_AA'$。
特别地，如 $S$ 是 $R$ 中[[乘法子集]]，则
$\Omega_{S^{-1}A/S^{-1}R}=S^{-1}\Omega_{A/R}$。
:::

::: proof
由万有性质只需对 $A'$-模 $N$ 验证
$$
\operatorname{Der}_{R'}(A',N)=
\operatorname{Der}_R(A,N).
$$
注意限制映射是左边到右边的映射，反过来沿 $R\to R'$ 标量延拓，即
$d\mapsto(a\otimes r'\mapsto r'da)$
是右边到左边的映射，且它们显然互逆，即得结论。
:::

::: proposition [局部化] {@局部化}
对环同态 $R\to A$ 及 $A$ 中[[乘法子集]] $S$，
$\Omega_{S^{-1}A/R}=S^{-1}\Omega_{A/R}$。
:::

::: proof
由万有性质只需对 $S^{-1}A$-模 $N$ 验证
$$
\operatorname{Der}_R(S^{-1}A,N)=
\operatorname{Der}_R(A,N).
$$
注意限制映射是左边到右边的映射，反过来
$d\mapsto(a/s\mapsto da/s-ads/s^2)$ 是右边到左边的映射，
且它们显然互逆，即得结论。
:::

::: proposition [张量积] {@张量积}
对环同态 $R\to A$，$R\to B$，记 $C=A\otimes_RB$，则
$\Omega_{C/R}=\Omega_{A/R}\otimes_RB\oplus
  A\otimes_R\Omega_{B/R}$。
:::

::: proof
由万有性质只需对 $C$-模 $N$ 验证
$$
\operatorname{Der}_R(C,N)=\operatorname{Der}_R(A,N)
\times\operatorname{Der}_R(B,N).
$$
注意限制映射是左边到右边的映射，反过来
$(d_A,d_B)\mapsto((a\otimes b)\mapsto
  d_Aa\otimes b+a\otimes d_Bb)$ 是右边到左边的映射，
且它们显然互逆，即得结论。
:::

::: proposition
如环同态 $R\to A$ 在环范畴中是[[满态射]]，则
$\Omega_{A/R}=0$。特别地，局部化和环满射的微分模都是 $0$。
:::

::: proof
一般地，对 $A$-模 $M$，乘法映射 $M\otimes_RA\to M$
总是满射，所以只要 $M\otimes_RA=0$ 便有 $M=0$。
现由 $R\to A$ 是满态射，有乘法映射 $A\otimes_RA\to A$
是同构。于是
$$
\Omega_{A/R}\otimes_RA=\Omega_{A\otimes_RA/A}
=\Omega_{A/A}=0,
$$
从而 $\Omega_{A/R}=0$。
:::

::: proposition
设环同态 $R\to A$ 有表现
$A=R[x_i]_{i\in I}/(f_j)_{j\in J}$。则
$$
\Omega_{A/R}=\frac{\bigoplus_{i\in I}A\mathrm{d}x_i}
{(\mathrm{d}f_j)_{j\in J}},
$$
其中
$$
\mathrm{d}f_j=\sum_{i\in I}\frac{\partial f_j}{\partial x_i}{\mathrm{d}x_i}
\in\bigoplus_{i\in I}A{\mathrm{d}x_i}.
$$
特别地，如 $R\to A$ 有限型，则 $\Omega_{A/R}$ 为有限型
$A$-模；如 $R\to A$ 有限表现，则 $\Omega_{A/R}$
为有限表现 $A$-模。
:::

::: proof
由 [[Leibniz 法则]]，$A$ 的 $R$-导子由其在一组
$R$-生成元的值决定。由此不难发现
$\frac{\bigoplus_{i\in I}A\mathrm{d}x_i}{(\mathrm{d}f_j)_{j\in J}}$
满足 Kähler 微分的万有性质。
:::

下面的定理给出 Kähler 微分的另一个定义，
其好处是在概形情形可以整体定义，而不用先在仿射开集做然后粘合。

::: theorem
对环同态 $R\to A$，记 $I_{A/R}=\ker(A\otimes_RA\to A)$
为对角线映射也即乘法映射的核。则 $I_{A/R}$ 是
$A\otimes_RA$-模，基变换 $I_{A/R}\otimes_{A\otimes_RA}A
  =I_{A/R}/I_{A/R}^2$ 是 $A$-模。$A$ 到它的映射
$$
a\mapsto\overline{1\otimes a-a\otimes1}
$$
是 $R$-导子，且诱导的映射 $\Omega_{A/R}\to
  I_{A/R}/I_{A/R}^2$ 是同构。
换言之，$\Omega_{A/R}$ 可以定义为 $I_{A/R}/I_{A/R}^2$。

对概形态射 $X\to S$，对角线
$\Delta_{X/S}\colon X\to X\times_SX$
总是[[浸入 (代数几何)|浸入]]。令 $U$ 为 $X\times_SX$ 中闭集
$\overline{\Delta_{X/S}}\setminus\Delta_{X/S}$
之补，视为[[开子概形]]，则 $\Delta_{X/S}$ 是到 $U$
的闭浸入。令 $\mathcal{I}_{X/S}$ 为此闭浸入的理想层，
则 $\mathcal{I}_{X/S}/\mathcal{I}_{X/S}^2=
  \Delta_{X/S}^*\mathcal{I}_{X/S}$ 可视为 $X$ 上拟凝聚层。
此时也有自然同构 $\Omega_{X/S}=
  \mathcal{I}_{X/S}/\mathcal{I}_{X/S}^2$。
:::

::: proof
定理的概形部分不难由环的部分粘合而得，故只需证环的部分。
为此需要证明 $a\mapsto\overline{1\otimes a-a\otimes1}$
诱导对 $A$-模 $M$ 自然的同构
$$
\operatorname{Hom}_A(I_{A/R}/I_{A/R}^2,M)=
\operatorname{Der}_R(A,M).
$$
考虑环 $T_M=A\oplus M$，定义为
$(a,m)(a',m')=(aa',am'+a'm)$。直和投影
$p_M\colon T_M\to A$ 是 $A$-同态，其核 $I_M$ 满足
$I_M^2=0$，且 $I_M$ 作为 $T_M/I_M=A$ 上的模就是 $M$；
直和含入 $i_M\colon A\to T_M$ 也是 $A$-同态。沿 $i_M$
把 $T_M$ 视为 $A$-代数从而视为 $R$-代数，
则导子的定义恰好说明映射
$$
\operatorname{Der}_R(A,M)\to\{i\in
\operatorname{Hom}_R(A,T_M)\mid
p_M\circ i=\operatorname{id}\}
$$
$$
d\mapsto(a\mapsto(a,da))
$$
是双射。现对导子 $d$ 记其对应同态为 $i_d\colon A\to T_M$，
并考虑同态 $f\colon A\otimes_RA\to T_M$，
在第一个 $A$ 是 $i_M$，在第二个 $A$ 是 $i_d$。
则对任一 $a\in A$，
$$
f(1\otimes a-a\otimes1)=i_d(a)-i_M(a)
=(a,da)-(a,0)=(0,da)\in I_M,
$$
从而 $f$ 诱导映射 $I_{A/R}\to I_M$。注意 $I_M$ 的
$A\otimes_RA$-模结构就是 $M$ 沿
$A\otimes_RA\to A$ 视为 $A\otimes_RA$-模，知
$f$ 诱导 $A$-模同态 $I_{A/R}/I_{A/R}^2\to M$。
这样我们就得到从 $\operatorname{Der}_R(A,M)$
到 $\operatorname{Hom}_A(I_{A/R}/I_{A/R}^2,M)$
的映射。注意整个过程每一步都可逆，故它是双射；由以上对
$f(1\otimes a-a\otimes1)$ 的计算易知它就是
$A$ 到 $I_{A/R}/I_{A/R}^2$ 的导子
$a\mapsto\overline{1\otimes a-a\otimes1}$
诱导的映射之逆。
:::

::: proposition {@正合列}
对环同态 $R\to A\to B$，
$$
0\to\Omega_{A/R}\otimes_AB\to\Omega_{B/R}\to
\Omega_{B/A}\to0
$$
右正合。如 $A\to B$ 是满射，核为 $I$，则
$$
0\to I/I^2\to\Omega_{A/R}\otimes_AB\to
\Omega_{B/R}\to0
$$
右正合，且当 $A\to B$ 有截面时为分裂正合。
这里第一个映射为 $I$ 到 $\Omega_{A/R}$ 的映射
$a\mapsto \mathrm{d}a$ 基变换到 $B$。
:::

::: proof
由 @环定义 可直接看出
$$
\Omega_{A/R}\otimes_AB\to\Omega_{B/R}\to
\Omega_{B/A}\to0
$$
正合。同样可直接看出如 $A\to B$ 是满射，则
$\ker(\Omega_{A/R}\to\Omega_{B/R})$ 作为 $A$-模由
$\mathrm{d}a$，$a\in I$ 生成。基变换到 $B$ 便知
$$
I/I^2\to\Omega_{A/R}\otimes_AB\to
\Omega_{B/R}\to0
$$
正合。如 $f\colon A\to B$ 有截面，记其为 $s$，则
$A=B\oplus I$。于是有 $A$ 到 $I/I^2$ 的导子
$a\mapsto\overline{a-s(f(a))}$，诱导 $A$-模同态
$\Omega_{A/R}\to I/I^2$，即 $B$-模同态
$\Omega_{A/R}\otimes_AB\to I/I^2$，
不难验证其为映射 $I/I^2\to\Omega_{A/R}\otimes_AB$
之左逆，于是
$$
0\to I/I^2\to\Omega_{A/R}\otimes_AB\to
\Omega_{B/R}\to0
$$
分裂正合。
:::

::: remark
@正合列 中，如 $A\to B$ 形式光滑，则第一个复形正合；
如 $R\to B$ 形式光滑，则第二个复形正合。
参见条目[[形式光滑同态]]及[[朴素余切复形]]。
:::

::: remark
本节中这些对环陈述的命题显然对概形也都成立，
为简明起见就不逐一对概形再写一遍了。
:::

## 例子

- 设 $A$ 为 $R$ 上[[多项式环]]即 $A=R[x_i]_{i\in I}$。
  则 $\Omega_{A/R}$ 为 $A$ 上[[自由模]]，由
  $\mathrm{d}x_i$，$i\in I$ 自由生成。
  这不论用原始定义还是万有性质都很容易看出。

## 推广

在环同态 $R\to A$ 不[[光滑同态|光滑]]时，Kähler 微分表现欠佳。
此时正确的对象是[[余切复形]]，它亦可对概形定义。

```terms
Kähler 微分:
  en: Kähler differential
  de: Kähler-Differential
  fr: différentielle de Kähler
```
