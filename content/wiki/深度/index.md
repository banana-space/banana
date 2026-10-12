---
title: 深度
categories: [交换代数]
navboxes: [交换代数]
---

::: convention
在本文中，

- 所有环都指[[交换环]]。

:::

**深度**是个[[交换代数]]概念，是交换环上模的一个同调不变量，
大体描述其[[正则序列]]最长有多长。

## 定义

::: definition
$R$ 是环，$M$ 是 $R$-模，$I$ 是 $R$ 的理想。则 $M$ 的
**$I$-深度**，记作 $\operatorname{depth}_I(M)$，定义为
$$
\inf\{i\in\mathbb{N}\mid\operatorname{Ext}^i_R(R/I,M)\ne0\}.
$$

当 $(R,\mathfrak{m})$ 是[[局部环]]时，$M$ 的**深度**指的是
$M$ 的 $\mathfrak{m}$-深度，此时也在记号中省略 $\mathfrak{m}$。
局部环 $R$ 的深度指的是它作为自己的模的深度。
一般环的深度指的是其在各处局部化的深度上确界。
:::

::: remark {@显然性质}
依定义：

- 零模的深度是 $\infty$。

- 非零模的 $0$-深度是 $0$。

- 局部环 $(R,\mathfrak{m},k)$ 的模 $M$ 的深度是
  $0$ 等价于剩余域 $k$ 可以嵌入 $M$，于是也等价于
  $\mathfrak{m}$ 是 $M$ 的[[结合素理想]]。

:::

## 性质

首先是一般性质。

::: proposition {@模ext}
$R$ 是环，$M$ 是 $R$-模，$I$ 是 $R$ 的理想。则对 $R/I$-模 $N$
以及自然数 $i<\operatorname{depth}_I(M)$ 有
$\operatorname{Ext}^i_R(N,M)=0$。
:::

::: proof
把 $N$ 作 $R/I$-自由消解 $F_\bullet\to N$，其中
$$
F_\bullet=\cdots\to F_1\to F_0
$$
各项是自由 $R/I$-模。则有[[谱序列]]
$$
E_1^{p,q}=\operatorname{Ext}^q_R(F_p,M)\Rightarrow\operatorname{Ext}^{p+q}_R(N,M).
$$
由于各 $F_p$ 是自由 $R/I$-模，$\operatorname{Ext}^q_R(F_p,M)$
在 $q<\operatorname{depth}_I(M)$ 时为 $0$，即得欲证。
:::

::: corollary
$R$ 是环，$M$ 是 $R$-模，$I,J$ 是 $R$ 的理想。

- 如 $I\subseteq J$，则
  $\operatorname{depth}_I(M)\le\operatorname{depth}_J(M)$。

- 对 $n\in\mathbb{Z}_+$，
  $\operatorname{depth}_{I^n}(M)=\operatorname{depth}_I(M)$。

特别地，如 $I,J$ 有限生成且 $\sqrt{I}=\sqrt{J}$，
则 $\operatorname{depth}_I(M)=\operatorname{depth}_J(M)$，
即此时它只依赖于 $V(I)\subseteq\operatorname{Spec}R$。
:::

::: proof
如 $I\subseteq J$，则 $R/J$ 是 $R/I$-模，由 @模ext
立得结论。

对 $n\in\mathbb{Z}_+$，由上一段首先有
$\operatorname{depth}_{I^n}(M)\le\operatorname{depth}_I(M)$。
另一方面，对 $m=0,1,\ldots,n-1$，$I^m/I^{m+1}$
都是 $R/I$-模，故对 $i<\operatorname{depth}_I(M)$
有 $\operatorname{Ext}^i_R(I^m/I^{m+1},M)=0$，
于是由 $\operatorname{Ext}$ 的长正合列即知
$\operatorname{Ext}^i_R(R/I^n,M)=0$，
所以也有
$\operatorname{depth}_{I^n}(M)\ge\operatorname{depth}_I(M)$。
:::

::: proposition {@基变换}
$R\to R'$ 是环同态，$I$ 是 $R$ 的理想，记 $I'=IR'$。
则对 $R'$-模 $M$ 有
$\operatorname{depth}_I(M)=\operatorname{depth}_{I'}(M)$。
:::

::: proof
由谱序列
$$
E_2^{p,q}=\operatorname{Ext}^p_{R'}(\operatorname{Tor}_q^R(R',R/I),M)\Rightarrow\operatorname{Ext}^{p+q}_R(R/I,M)
$$
以及每个 $\operatorname{Tor}_i^R(R',R/I)$
都是 $R'/I'$-模，用 @模ext 知
$$
\operatorname{Ext}^i(R/I,M)=\begin{cases}
  0,&i<\operatorname{depth}_{I'}(M);\\
  \operatorname{Ext}^i_{R'}(R'/I',M),&i=\operatorname{depth}_{I'}(M);
\end{cases}
$$
此即欲证。
:::

::: proposition [局部化]
$R$ 是 [[Noether 环]]，$I$ 是其理想，$S$ 是其[[乘性子集]]。
则对任意 $R$-模 $M$，
$\operatorname{depth}_I(M)\le\operatorname{depth}_{S^{-1}I}(S^{-1}M).$
:::

::: proof
由于 $S^{-1}I=I(S^{-1}R)$，用 @基变换 知不等号右边等于
$\operatorname{depth}_I(S^{-1}M)$。于是由
$S^{-1}M$ 是一些 $M$ 的滤余极限以及从 Noether 环有限生成模出发的
$\operatorname{Ext}$ 与滤余极限交换，即得结论。
:::

下面我们将深度与[[正则序列]]联系起来。

::: lemma {@非零因子}
$R$ 是环，$M$ 是 $R$-模，$I$ 是 $R$ 的理想。
如 $r\in I$ 是 $M$ 的[[非零因子]]，则
$\operatorname{depth}_I(M)=\operatorname{depth}_I(M/rM)+1$。
:::

::: proof
首先 $\operatorname{depth}_I(M)>0$，
因为等于 $0$ 的话 $\operatorname{Hom}(R/I,M)\ne0$
说明 $I$ 中元素都是 $M$ 的零因子。写短正合列
$$
0\to M\to M\to M/rM\to0
$$
的 $\operatorname{Ext}$ 长正合列，有
$$
\cdots\to\operatorname{Ext}^{i-1}_R(R/I,M)\to
\operatorname{Ext}^{i-1}_R(R/I,M/rM)\to
\operatorname{Ext}^i_R(R/I,M)\to
\operatorname{Ext}^i_R(R/I,M)\to\cdots
$$
所以：

- 如 $i<\operatorname{depth}_I(M)$，就有
  $\operatorname{Ext}^{i-1}_R(R/I,M)
      =\operatorname{Ext}^i_R(R/I,M)=0$，
  从而 $\operatorname{Ext}^{i-1}_R(R/I,M/rM)=0$。

- 如 $i=\operatorname{depth}_I(M)$，就有
  $\operatorname{Ext}^i_R(R/I,M)\ne0$，
  而 $r\in I$ 于是 $\operatorname{Ext}^i_R(R/I,M)$
  的自映射“乘以 $r$”是 $0$，从而
  $\operatorname{Ext}^{i-1}_R(R/I,M/rM)\ne0$。

综上所述，$\operatorname{depth}_I(M)=\operatorname{depth}_I(M/rM)+1$。
:::

::: theorem {@正则序列刻画}
$R$ 是 [[Noether 环]]，$M$ 是其[[有限生成模]]。则：

- $\operatorname{depth}_I(M)$ 是 $I$ 中
  $M$-[[正则序列]]的最大长度。

- $I$ 中任一 $M$-正则序列都能续至
  $\operatorname{depth}_I(M)$ 的长度。

特别地，$I$ 中的极长 $M$-正则序列等长，
长度为 $\operatorname{depth}_I(M)$。
:::

::: proof
由 @非零因子，只需证如 $\operatorname{depth}_I(M)>0$，
$I$ 中就有 $M$ 的非零因子。$\operatorname{depth}_I(M)>0$ 无非是
$\operatorname{Hom}(R/I,M)=0$，即 $M$ 中每个元素的零化子都不包含 $I$。
这说明 $M$ 的每个结合素理想都不包含 $I$。由[[结合素理想]]的理论，
$M$ 只有有限个结合素理想，且并起来就是 $M$ 的[[零因子]]集。
故由[[素理想回避]]，$I$ 中有 $M$ 的非零因子。
:::

然后是一些估计。

::: proposition [被生成元个数控制]
$R$ 是环，$I=(a_1,\ldots,a_n)$ 是其中 $n$ 元生成的理想。
则对任意 $R$-模 $M$，$\operatorname{depth}_I(M)$
要么不超过 $n$，要么是 $\infty$。
:::

::: proof
考虑 $a_1,\ldots,a_n$ 的 [[Koszul 复形]] $K_\bullet$。
它是个由自由 $R$-模组成的链复形，只在下标 $0,1,\ldots,n$ 非零；
它各阶同调都是 $R/I$-模，且零阶同调是 $R/I$。现设
$\operatorname{depth}_I(M)=\delta<\infty$。
则由谱序列
$$
E_2^{p,q}=\operatorname{Ext}^p_R(H_q(K_\bullet),M)\Rightarrow\operatorname{Ext}^{p+q}_R(K_\bullet,M)
$$
以及 @模ext，
$$
\operatorname{Ext}^i_R(K_\bullet,M)=\begin{cases}
  0,&i<\delta;\\
  \operatorname{Ext}^i_R(R/I,M),&i=\delta;
\end{cases}
$$
另一方面，$K_\bullet$ 由自由 $R$-模组成，故可直接计算
$$
\operatorname{Ext}^i_R(K_\bullet,M)=H^i(\operatorname{RHom}_R(K_\bullet,M)),
$$
只可能在 $i=0,1,\ldots,n$ 非零。故 $\delta\le n$。
:::

::: lemma {@结合素理想}
$(R,\mathfrak{m})$ 是 Noether 局部环，$M$ 是其上有限生成模。
$r\in\mathfrak{m}$ 是 $M$ 的非零因子，
$\mathfrak{p}\in\operatorname{Ass}(M)$。设 $\mathfrak{q}$
是包含 $\mathfrak{p}+(r)$ 的素理想中极小者。则
$\mathfrak{q}\in\operatorname{Ass}(M/rM)$。
:::

::: proof
由[[结合素理想]]的定义，可取 $N\subseteq M$，
$N\cong R/\mathfrak{p}$。用 [[Artin–Rees 引理]]取
$n\in\mathbb{N}$ 使得 $r^nM\cap N\subseteq rN$。考虑
$N$ 在 $M/r^nM$ 中的像 $Q$，则 $Q\cong\frac{N}{r^nM\cap N}$，
故 $N/rN$ 是 $Q$ 的商模。而 $Q$ 显然是 $N/r^nN$ 的商模，
所以 $\operatorname{Supp}(Q)
  =\operatorname{Supp}(N/rN)=V(\mathfrak{p}+(r))$。
于是 $\mathfrak{q}$ 是 $\operatorname{Supp}(Q)$
中极小素理想，故属于 $\operatorname{Ass}(Q)$。
现由 $Q\subseteq M/r^nM$，知
$\operatorname{Ass}(Q)\subseteq\operatorname{Ass}(M/r^nM)$。
最后，$r$ 是 $M$ 的非零因子，故 $M/r^nM$ 有滤链，
每一项同构于 $M/rM$。于是 $\operatorname{Ass}(M/r^nM)\subseteq\operatorname{Ass}(M/rM)$，
得到结论。
:::

::: theorem
$(R,\mathfrak{m})$ 是 Noether 局部环，$M$ 是其上有限生成模。
则对任意 $\mathfrak{p}\in\operatorname{Ass}(M)$，
$\operatorname{depth}(M)\le\dim R/\mathfrak{p}$。
特别地，非零有限生成模的深度为有限。
:::

::: proof
对 $\delta=\operatorname{depth}(M)$ 归纳。$\delta=0$
自不必证。如 $\delta>0$，由 @正则序列刻画，
可取 $r\in\mathfrak{m}$ 是 $M$ 的非零因子，则自然
$r\notin\mathfrak{p}$。于是由[[维数理论 (交换代数)|维数理论]]，
$\dim R/(\mathfrak{p}+(r))=\dim R/\mathfrak{p}-1$，
故可取素理想 $\mathfrak{q}$，在 $\mathfrak{p}+(r)$
上极小，$\dim R/\mathfrak{q}=\dim R/\mathfrak{p}-1$。
由 @结合素理想，$\mathfrak{q}\in\operatorname{Ass}(M/rM)$；
由 @非零因子，$\operatorname{depth}(M/rM)=\operatorname{depth}(M)-1$；
二者结合，由归纳假设即得结论。
:::

::: remark
“Noether 局部环上非零有限生成模深度有限”实际上比此命题容易得多。
直接的证明留作练习。
:::

最后是变换基环时的性质。

::: proposition
设 $(R,\mathfrak{m},k)\to(S,\mathfrak{n},\ell)$ 是 Noether
局部环的局部同态，$M$ 是有限生成 $R$-模，$N$ 是有限生成 $S$-模，
在 $R$ 上平坦。则
$$
\operatorname{depth}_{\mathfrak{n}}(M\otimes_RN)=
\operatorname{depth}_{\mathfrak{m}}(M)
+\operatorname{depth}_{\mathfrak{n}}(N/\mathfrak{m}N).
$$
:::

::: proof
对等号右边归纳。如等号右边为 $0$，则由 @显然性质，
$k$ 可以嵌入 $M$，且 $\ell$ 可以嵌入 $N/\mathfrak{m}N
  =k\otimes_RN$。由于 $N$ 在 $R$ 上平坦，这就说明 $\ell$
可以嵌入 $M\otimes_RN$，再次用 @显然性质
即知等号左边也是 $0$。

如 $\operatorname{depth}_{\mathfrak{m}}(M)>0$，取
$M$ 的非零因子 $r\in\mathfrak{m}$。由于 $N$ 在 $R$ 上平坦，
$r$ 在 $\mathfrak{n}$ 中的像是 $M\otimes_RN$ 的非零因子。
于是由 @非零因子 及归纳假设即得欲证。

如 $\operatorname{depth}_{\mathfrak{n}}(N/\mathfrak{m}N)>0$，
取 $N/\mathfrak{m}N$ 的非零因子 $s\in\mathfrak{n}$。
对映射 $s\colon N\to N$ 使用[[平坦模|平坦模局部判别法]]的推论，
知 $s$ 是 $N$ 的非零因子，且 $N/sN$ 在 $R$ 上平坦。
再对短正合列
$$
0\to N\to N\to N/sN\to0
$$
作 $M\otimes_R-$，知 $s$ 也是 $M\otimes_RN$ 的非零因子。
于是由 @非零因子 及归纳假设即得欲证。
:::

## 例子

- [[Cohen–Macaulay 模]]的深度等于其 [[Krull 维数]]。

- Noether 局部环 $(R,\mathfrak{m})$ 上有限生成模
  $M$ 的深度是 $0$ 当且仅当 $\mathfrak{m}\in\operatorname{Ass}_R(M)$。
  一个例子是 $R=k[[x,y]]/(x^2,xy)$，$M=R$，此时
  $\mathfrak{m}=\operatorname{Ann}_R(x)\in\operatorname{Ass}_R(M)$。
  此例中 $\dim R=1$，$\operatorname{depth}(R)<\dim R$。

## 推广

深度可推广至链复形。

::: definition
$R$ 是环，$C\in\mathsf{D}(R)$，$I$ 是 $R$ 的理想。
则 $C$ 的 **$I$-深度**，记作
$\operatorname{depth}_I(C)$，定义为
$$
\inf\{i\in\mathbb{Z}\mid\operatorname{Ext}_R^i(R/I,C)\ne0\},
$$
它可以是 $-\infty$、整数、$+\infty$。当 $(R,\mathfrak{m})$
是[[局部环]]时，$C$ 的**深度**指的是 $C$ 的
$\mathfrak{m}$-深度，此时也在记号中省略 $\mathfrak{m}$。
:::

它与[[局部上同调]]密切相关：

::: proposition
$R$ 是环，$I$ 是其有限生成理想，$C\in\mathsf{D}(R)$。则
$$
\operatorname{depth}_I(C)=
\inf\{i\in\mathbb{Z}\mid H^i_I(C)\ne0\}.
$$
特别地，此时 $I$-深度只依赖零点集 $V(I)\subseteq
  \operatorname{Spec}R$。
:::

::: proof
要证对任意 $d\in\mathbb{Z}$，$\operatorname{RHom}(R/I,C)
  \in\mathsf{D}^{\ge d}(R)$ 当且仅当 $R\Gamma_I(C)
  \in\mathsf{D}^{\ge d}(R)$。平移可不妨设 $d=0$。
现如 $R\Gamma_I(C)\in\mathsf{D}^{\ge0}(R)$，
则由 $R/I$ 是[[挠复形]]，用伴随性知
$\operatorname{RHom}(R/I,C)=
  \operatorname{RHom}(R/I,R\Gamma_I(C))\in
  \operatorname{RHom}(\mathsf{D}^{\le0}(R),
  \mathsf{D}^{\ge0}(R))=\mathsf{D}^{\ge0}(R)$。
另一方面如 $\operatorname{RHom}(R/I,C)
  \in\mathsf{D}^{\ge0}(R)$，则：

- 把任意 $N\in\mathsf{D}^{\le0}(R/I)$ 作
  $R/I$-自由消解，知 $\operatorname{RHom}(N,C)
      \in\mathsf{D}^{\ge0}(R)$；

- 对任一 $n\in\mathbb{Z}_+$，把任意
  $N\in\mathsf{D}^{\le0}(R/I^n)$ 拆成各项商属于
  $\mathsf{D}^{\le0}(R/I)$ 的滤链，知
  $\operatorname{RHom}(N,C)\in\mathsf{D}^{\ge0}(R)$；

- 最后写 $I=(a_1,\ldots,a_m)$，由于对任一
  $n\in\mathbb{Z}_+$，[[Koszul 复形]] $\operatorname{Kos}
      (a_1^n,\ldots,a_m^n)\in\mathsf{D}^{\le0}(R/I^{mn})$，知
  $$
  R\Gamma_I(C)=\operatornamewithlimits{colim}_n
  \operatorname{RHom}(\operatorname{Kos}
  (a_1^n,\ldots,a_m^n),C)\in\mathsf{D}^{\ge0}(R).
  $$

:::

```terms
深度:
  en: depth
  de: Tiefe :f
  fr: profondeur :f
  grc: βάθος :n
  la: profundum :n
```
