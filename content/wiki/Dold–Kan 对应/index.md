---
title: Dold–Kan 对应
categories: [同调代数]
notices:
  - name: 问题
    items:
      - “幺半性”一节中 Alexander–Whitney 映射的定义缺失。
      - “交换群情形”一节单射性的证明中，$\varepsilon(\alpha)\in X_n$ 似乎应为 $\varepsilon(x)\in X_n$。
navboxes: [同调代数]
---

**Dold–Kan 对应**是[[幂等完备范畴|幂等完备]][[加性范畴]]的[[链复形]]和[[单纯对象]]之间的[[范畴等价]]，
名称来自数学家 [[Albrecht Dold]] 和 [[Dan Kan]]。

## 陈述

设 $\mathcal{A}$ 是[[加性范畴]]，$\mathsf{Ch}_{\ge0}(\mathcal{A})$
表示 $\mathcal{A}$ 的同调非负[[链复形]]构成的范畴，即
$\mathsf{Ch}(\mathcal{A})$ 的[[满子范畴]]
$$
\{C_\bullet\in\mathsf{Ch}(\mathcal{A})\mid\forall n<0,\,C_n=0\}.
$$

::: definition [从链复形到单纯对象] {@DK}
对 $C\in\mathsf{Ch}_{\ge0}(\mathcal{A})$，定义
$\mathcal{A}$ 的[[单纯对象]] $\operatorname{DK}(C)$ 如下：

- 对 $n\in\mathbb{N}$，定义 $\operatorname{DK}_n(C)=
      \bigoplus_{\alpha\colon[n]\twoheadrightarrow[k]}C_k$，
  这里 $\alpha$ 取遍 $\mathbb{\Delta}$ 中 $[n]=\{0,1,\ldots,n\}$ 到
  $[k]=\{0,1,\ldots,k\}$ 的所有满射。

- $\mathbb{\Delta}$ 中映射 $\beta\colon[n']\to[n]$
  给出的映射 $\operatorname{DK}_n(C)\to\operatorname{DK}_{n'}(C)$ 在
  $\alpha\colon[n]\twoheadrightarrow[k]$，
  $\alpha'\colon[n']\twoheadrightarrow[k']$
  对应的直和分量定义如下：

  - 如 $k'=k$ 且图表
    \[
    \begin{tikzcd}
      {[n']}\ar[r,"\beta"]\ar[d,"\alpha'"']&{[n]}\ar[d,"\alpha"]\\
      {[k']}\ar[r,"\operatorname{id}"']&{[k]}
    \end{tikzcd}
    \]
    交换，则 $C_k\to C_{k'}$ 是[[恒同映射]] $\operatorname{id}_{C_k}$。

  - 如 $k'=k-1$ 且图表
    \[
    \begin{tikzcd}
      {[n']}\ar[r,"\beta"]\ar[d,"\alpha'"']&{[n]}\ar[d,"\alpha"]\\
      {[k']}\ar[r,"+1"']&{[k]}
    \end{tikzcd}
    \]
    交换，则 $C_k\to C_{k'}$ 是边缘映射
    $\partial_k\colon C_k\to C_{k-1}$。

  - 其它情况下 $C_k\to C_{k'}$ 是零映射。

换言之，$\operatorname{DK}(C)$ 是以下[[半单纯对象]]沿含入函子
$\mathbb{\Delta}_单^\mathrm{op}\to\mathbb{\Delta}^\mathrm{op}$ 的左 [[Kan 扩张]]：
\[
\begin{tikzcd}
  \cdots\ar[r,"\partial",shift left=3]\ar[r,shift left=1]\ar[r,shift right=1]\ar[r,shift right=3]&C_2\ar[r,"\partial",shift left=2]\ar[r]\ar[r,shift right=2]&C_1\ar[r,"\partial",shift left]\ar[r,shift right]&C_0
\end{tikzcd}
\]
这里的箭头从上到下依次对应从 $[n-1]$ 到 $[n]$ 的跳过 $0$、
跳过 $1$、……、跳过 $n$ 的单射，
而未标出的箭头都使用零映射。

$\operatorname{DK}(C)$ 称为链复形 $C$ 的 **Dold–Kan 对象**，函子
$\operatorname{DK}\colon\mathsf{Ch}_{\ge0}(\mathcal{A})\to\mathsf{Fun}(\mathbb{\Delta}^\mathrm{op},\mathcal{A})$
称为 **Dold–Kan 对应**。
:::

::: definition [从单纯对象到链复形] {@NC}
对 $\mathcal{A}$ 的单纯对象 $X$，
定义链复形 $\operatorname{C}(X)$ 如下：

- 对 $n\in\mathbb{N}$，定义 $\operatorname{C}_n(X)=X_n$。

- 对 $n\in\mathbb{Z}_+$，定义边缘映射
  $\operatorname{C}_n(X)\to\operatorname{C}_{n-1}(X)$ 为
  $$
  \sum_{i=0}^n(-1)^id_n^i\colon X_n\to X_{n-1},
  $$
  其中 $d_n^i\colon X_n\to X_{n-1}$
  对应于跳过 $i$ 的映射 $[n-1]\to[n]$。

称 $\operatorname{C}(X)$ 为单纯对象 $X$ **对应的链复形**。
另定义链复形 $\operatorname{N}(X)$ 如下：

- 对 $n\in\mathbb{N}$，定义 $\operatorname{N}_n(X)$ 为映射
  $$
  (d_n^i)_{i=1}^n\colon X_n\to\bigoplus_{i=1}^nX_{n-1}
  $$
  的[[核 (代数)|核]]。

- 对 $n\in\mathbb{Z}_+$，定义边缘映射 $\operatorname{N}_n(X)\to\operatorname{N}_{n-1}(X)$
  为 $d_n^0\colon X_n\to X_{n-1}$ 的限制。

注意由于 $\mathcal{A}$ 仅仅是加性范畴，
上面的核未必存在，$\operatorname{N}(X)$ 也未必良定义。如良定义，
则称 $\operatorname{N}(X)$ 为单纯对象 $X$ 对应的**正规链复形**。
函子
$\operatorname{N}\colon\mathsf{Fun}(\mathbb{\Delta}^\mathrm{op},\mathcal{A})\to\mathsf{Ch}(\mathcal{A})$
如良定义，也称为 **Dold–Kan 对应**。
:::

::: theorem [Dold–Kan] {@thm}
@DK 中的函子
$$
\operatorname{DK}\colon\mathsf{Ch}_{\ge0}(\mathcal{A})\to
\mathsf{Fun}(\mathbb{\Delta}^\mathrm{op},\mathcal{A})
$$
[[满忠实函子|满忠实]]。如 $\mathcal{A}$ [[幂等完备范畴|幂等完备]]，
则它是[[范畴等价]]，其逆由 @NC 中的函子
$$
\operatorname{N}\colon\mathsf{Fun}(\mathbb{\Delta}^\mathrm{op},\mathcal{A})\to
\mathsf{Ch}_{\ge0}(\mathcal{A})
$$
给出，特别地函子 $\operatorname{N}$ 良定义。此时显然的含入映射
$\operatorname{N}\to\operatorname{C}$ 是[[链同伦等价]]。
:::

::: remark {@op}
对 $\mathcal{A}^\mathrm{op}$ 使用 @thm，
可得从上同调非负链复形到[[余单纯对象]]的满忠实函子
$$
\operatorname{DK}\colon\mathsf{Ch}^{\ge0}(\mathcal{A})\to\mathsf{Fun}(\mathbb{\Delta},\mathcal{A}),
$$
且在 $\mathcal{A}$ 幂等完备时是范畴等价。
此时也称这些构造为 **Dold–Kan 对应**、
**正规链复形**。
:::

## 证明

### 交换群情形

先证 $\mathcal{A}=\mathsf{Ab}$ 为[[交换群]]范畴的情况。
此时 @NC 中的函子 $\operatorname{N}$ 良定义，只需验证它与 @DK
中的函子 $\operatorname{DK}$ 互逆。为此我们先说明 $\operatorname{N}$ 是 $\operatorname{DK}$
的[[右伴随]]，且单位映射
$\operatorname{id}_{\mathsf{Ch}_{\ge0}(\mathsf{Ab})}\to\operatorname{N}\circ\operatorname{DK}$
是同构。

@DK 中已经说明，函子 $\operatorname{DK}$ 可分解为
$$
\mathsf{Ch}_{\ge0}(\mathsf{Ab})\to\mathsf{Fun}(\mathbb{\Delta}_单^\mathrm{op},\mathsf{Ab})\to\mathsf{Fun}(\mathbb{\Delta}^\mathrm{op},\mathsf{Ab}),
$$
其中第二个箭头是左 Kan 扩张，第一个箭头是把链复形
$C_\bullet$ 打到半单纯对象 $C_\bullet$，其中
$d^0_n\colon C_n\to C_{n-1}$ 是边缘映射 $\partial_n$，
其它面映射 $(d^i_n)_{i=1}^n$ 都是零映射。依定义左 Kan
扩张的右伴随是限制；故由函子 $\operatorname{N}$ 的定义立知它是 $\operatorname{DK}$
的右伴随。对 $C\in\mathsf{Ch}_{\ge0}(\mathsf{Ab})$ 计算
\[
\begin{aligned}
  \operatorname{N}_n(\operatorname{DK}(C))&=\bigcap_{i=1}^n
  \ker(d_n^i\colon\operatorname{DK}_n(C)\to\operatorname{DK}_{n-1}(C))\\
  &=\bigcap_{i=1}^n\ker\left(d_n^i\colon
  \bigoplus_{\alpha\colon[n]\twoheadrightarrow[k]}C_k
  \to\bigoplus_{\alpha'\colon[n-1]\twoheadrightarrow[k]}C_k\right);
\end{aligned}
\]
由 $\operatorname{DK}_n(C)$ 的定义，$\operatorname{id}_{[n]}$ 对应的分量 $C_n$ 被各
$d_n^i$，$i=1,\ldots,n$ 打到 $0$；而容易发现对每个 $k<n$
的满射 $\alpha\colon[n]\twoheadrightarrow[k]$ 都存在
$1,\ldots,n$ 中某个 $i$ 使得限制映射
$\alpha'\colon[n]\setminus i\to[k]$ 仍然是满射，此时
$d_n^i$ 在 $\alpha$，$\alpha'$ 对应的分量上就是 $\operatorname{id}$；
所以 $\operatorname{N}_n(\operatorname{DK}(C))=C_n$，单位映射
$\operatorname{id}\to\operatorname{N}\circ\operatorname{DK}$ 是[[自然同构]]。

接下来需要证余单位映射 $\varepsilon\colon\operatorname{DK}\circ\operatorname{N}\to\operatorname{id}$
也是自然同构。

先证它单：取单纯交换群 $X$ 及非零元 $x\in\operatorname{DK}_n(\operatorname{N}(X))$，
要证 $\varepsilon(x)\ne0$。由 $\operatorname{DK}$ 的定义，$x$ 是以满射
$\alpha\colon[n]\twoheadrightarrow[k]$ 编号的一族
$x_\alpha\in\operatorname{N}_k(X)$；由于 $x\ne0$，必有某个 $\alpha$
使得 $x_\alpha\ne0$；按 $(k,\min\alpha^{-1}(0),\ldots,
\min\alpha^{-1}(k))$ 的[[字典序]]取最小的满足 $x_\alpha\ne0$
的 $\alpha\colon[n]\twoheadrightarrow[k]$。令
$\beta\colon[k]\to[n]$ 为映射 $i\mapsto\min\alpha^{-1}(i)$，
则不难发现 $\varepsilon(\alpha)\in X_n$ 沿 $\beta$ 限制到
$X_k$ 所得元素为 $x_\alpha\ne0$，所以 $\varepsilon(x)\ne0$。

再证它满：对单纯交换群 $X$，我们对 $n\in\mathbb{N}$ 归纳证明
$\varepsilon_n\colon\operatorname{DK}_n(\operatorname{N}(X))\to X_n$ 满。为此对
$i=0,1,\ldots,n$ 归纳证明
$$
X_{n,i}=\bigcap_{j=i+1}^n\ker(d_n^j)\subseteq X_n
$$
在 $\varepsilon_n$ 的像中。$i=0$ 时显然，因为依定义
$X_{n,0}=\operatorname{N}_n(X)$。对 $0<i\le n$，任取 $x\in X_{n,i}$，
要证明它在 $\varepsilon_n$ 的像中。定义
$\alpha\colon[n]\to[n]$ 为
$$
\alpha(j)=\begin{cases}
  j,&j\ne i;\\
  i-1,&j=i;
\end{cases}
$$
并令 $x'=\alpha^*(x)\in X_n$。由于 $\alpha$ 穿过第
$i-1$ 个退化映射 $[n]\to[n-1]$，所以 $x'$ 来自
$s_{n-1}^{i-1}\colon X_{n-1}\to X_n$，故由对 $n$
的归纳假设及 $\varepsilon$ 的自然性，它在 $\varepsilon_n$
的像中。又 $\alpha$ 与 $\operatorname{id}_{[n]}$ 在 $[n]\setminus i$
一样，所以 $d_n^i(x)=d_n^i(x')$；对 $j>i$，含入映射
$[n]\setminus j\to[n]$ 复合 $\alpha$ 之后仍然跳过 $j$，
所以 $d_n^j(x')=0$；由此可见 $x-x'\in X_{n,i-1}$，
由对 $i$ 的归纳假设，它也在 $\varepsilon_n$ 的像中。
故 $x$ 在 $\varepsilon_n$ 的像中，定理得证。

::: remark {@n=x/d}
令 $\operatorname{D}_n(X)$ 为 $X_n$ 中退化单形组成的子群，即
$$
\operatorname{D}_n(X)=\sum_{i=0}^{n-1}\operatorname{im}(s_{n-1}^i)\subseteq X_n.
$$
则上面 $\varepsilon_n$ 满的证明说明复合映射
$$
\operatorname{N}_n(X)\to X_n\to X_n/\operatorname{D}_n(X)
$$
是满射。由于
$$
d_n^j\circ s_{n-1}^i=\begin{cases}
  \operatorname{id},&j\in\{i,i+1\},\\
  0,&其它,
\end{cases}
$$
容易发现 $\operatorname{D}_n(X)\cap\operatorname{N}_n(X)=0$，
所以以上复合映射实际上是同构。
:::

### 一般情形

由于[[预层]]范畴所有的[[极限]]、[[余极限]]都是逐项取的，
所以由交换群范畴情形立得预层范畴 $\mathsf{Fun}(\mathcal{A}^\mathrm{op},\mathsf{Ab})$
情形。单纯对象、链复形、函子 $\operatorname{DK}$ 的构造显然关于加性函子自然，
故由[[米田嵌入]]满忠实以及交换图表
\[
\begin{tikzcd}
  \mathsf{Ch}_{\ge0}(\mathcal{A})\ar[r,"\operatorname{DK}"]\ar[d,"y"']&\mathsf{Fun}(\mathbb{\Delta}^\mathrm{op},\mathcal{A})\ar[d,"y"]\\
  \mathsf{Ch}_{\ge0}(\mathsf{Fun}(\mathcal{A}^\mathrm{op},\mathsf{Ab}))\ar[r,"\sim","\operatorname{DK}"']&\mathsf{Fun}(\mathbb{\Delta}^\mathrm{op},\mathsf{Fun}(\mathcal{A}^\mathrm{op},\mathsf{Ab}))
\end{tikzcd}
\]
即知 $\operatorname{DK}$ 也满忠实。由此还可以发现，$\mathcal{A}$
的单纯对象 $X_{\bullet}$ 在 $\operatorname{DK}$ 的像中当且仅当其米田像对应的正规链复形
$\operatorname{N}(y(X_{\bullet}))$ 各项[[可表函子|可表]]。由 $\operatorname{DK}$ 的定义，
$\operatorname{N}_n(y(X_{\bullet}))$ 是
$\operatorname{DK}_n(\operatorname{N}(y(X_{\bullet})))=y(X_n)$ 的直和项，
而后者依定义可表；故只要 $\mathcal{A}$ 幂等完备，
就有可表预层的直和项可表，从而 $\operatorname{DK}$ [[本质满函子|本质满]]，
所以是[[范畴等价]]。

::: remark
同样的论证说明函子 $\operatorname{N}$ 也可由 @n=x/d 中的
$X/\operatorname{D}(X)$ 给出。具体地说，如 $\mathcal{A}$
幂等完备，则对其任意单纯对象 $X$ 以及任意 $n\in\mathbb{N}$，映射
$$
(s_{n-1}^i)_{i=1}^{n-1}\colon
\bigoplus_{i=1}^{n-1}X_{n-1}\to X_n
$$
都有[[余核]]，且它与 $\operatorname{N}_n(X)$ 依 @n=x/d
典范同构。
:::

## 幺半性

当 $\mathcal{A}$ 有加性[[幺半范畴|幺半]]结构 $\otimes$ 时，
逐项张量积给出 $\mathsf{Fun}(\mathbb{\Delta}^\mathrm{op},\mathcal{A})$ 的幺半结构，
[[链复形张量积]]给出 $\mathsf{Ch}_{\ge0}(\mathcal{A})$ 的幺半结构。
但 Dold–Kan 对应并不幺半，而只是松幺半、反松幺半：

::: definition [Eilenberg–Zilber 映射]
对链复形 $C,D\in\mathsf{Ch}_{\ge0}(\mathcal{A})$ 定义
**Eilenberg–Zilber 映射**
$$
\operatorname{EZ}\colon\operatorname{DK}(C\otimes D)\to\operatorname{DK}(C)\otimes\operatorname{DK}(D)
$$
如下：由 @DK 中的左 Kan 扩张描述，只需指定
$(C\otimes D)_n$ 中元素在 $\operatorname{DK}_n(C)\otimes\operatorname{DK}_n(D)$
中的像，使其 $d_n^0$ 是链复形边缘映射，
$d_n^1,\ldots,d_n^n$ 都是 $0$。那么对 $p+q=n$ 以及
$c_p\in C_p$，$d_q\in D_q$ 定义
$$
\operatorname{EZ}(c_p\otimes d_q)=\sum_{\alpha,\beta}
\operatorname{sgn}(\alpha,\beta)c_{p,\alpha}\otimes d_{q,\beta},
$$
其中 $\alpha\colon[n]\twoheadrightarrow[p]$，
$\beta\colon[n]\twoheadrightarrow[q]$
取遍所有使得 $(\alpha,\beta)\colon[n]\to[p]\times[q]$
是单射的组合，$\operatorname{sgn}(\alpha,\beta)\in\{\pm1\}$ 表示置换
$$
(\min\alpha^{-1}(1),\ldots,\min\alpha^{-1}(p),
\min\beta^{-1}(1),\ldots,\min\beta^{-1}(q))\in\mathfrak{S}_n
$$
的符号，$c_{p,\alpha}$ 和 $d_{q,\beta}$ 分别表示
$\alpha$ 和 $\beta$ 对应的直和分量里的 $c_p$ 和 $d_q$。
不难发现这确实与两边的半单纯结构相容。

以上定义显然可以推广到多个链复形 $C_1,\ldots,C_k$
的张量积，且与两边的结合律相容。如 $\otimes$ 对称，
亦不难验证它与交换律相容。这给出函子 $\operatorname{DK}$ 的反松
（对称）幺半结构。
:::

::: definition [Alexander–Whitney 映射]

:::

::: proposition
上面定义的 $\operatorname{EZ}$ 和 $\operatorname{AW}$ 是互逆的同伦等价，且
$\operatorname{AW}\circ\operatorname{EZ}=\operatorname{id}$；但反过来复合不是 $\operatorname{id}$，
故它们不是同构。
:::

::: corollary
Dold–Kan 对应给出结合单纯代数和结合微分分次代数之间的对应
$$
\operatorname{DK}\colon\mathsf{DGA}_{\ge0}(\mathcal{A})\to\mathsf{sAlg}(\mathcal{A}),
$$
$$
\operatorname{N}\colon\mathsf{sAlg}(\mathcal{A})\to\mathsf{DGA}_{\ge0}(\mathcal{A}),
$$
且 $\operatorname{N}\circ\operatorname{DK}=\operatorname{id}$。二者在相应的同伦范畴上是范畴等价。
:::

::: corollary
Dold–Kan 对应给出交换单纯代数到交换微分分次代数的函子
$$
\operatorname{N}\colon\mathsf{sCAlg}(\mathcal{A})\to\mathsf{CDGA}_{\ge0}(\mathcal{A}).
$$
:::

::: remark
承 @op，可对 $\mathcal{A}^\mathrm{op}$ 使用以上定理及推论。
此时这些箭头会反向，即变为 $\operatorname{DK}\circ\operatorname{N}=\operatorname{id}$，
而交换代数之间的函子变为
$$
\operatorname{DK}\colon\mathsf{CDGA}^{\ge0}(\mathcal{A})\to\mathsf{csCAlg}(\mathcal{A}).
$$
:::

::: remark
交换代数之间的函子只有当 $\mathcal{A}$ 为 $\mathbb{Q}$-线性，
即 $\operatorname{Hom}$ 的取值都是 $\mathbb{Q}$-线性空间时，才在同伦范畴上是等价。
:::

```terms
Dold–Kan 对应:
  en: Dold–Kan correspondence
```
