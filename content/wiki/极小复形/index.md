---
title: 极小复形
categories: [同调代数, 交换代数]
navboxes: [交换代数]
---

<problems>
- “例子”一节需要扩充。
</problems>

**极小复形**是 [[Noether 环|Noether]][[局部环]]特有的构造，
可用来探知[[同调维数]]，以及证明一些[[半连续]]性。

## 定义

::: definition {@thm:定义}
$(R,\mathfrak{m},k)$ 为左 Noether 的局部环。称左 $R$-模[[链复形]]
$$
\cdots\to F_1\to F_0\to F_{-1}\to\cdots
$$
为**极小复形**，指它右有界，各项均为有限秩自由 $R$-模，
且对每个 $n\in\mathbb{Z}$，$d(F_n)\subseteq\mathfrak{m}F_{n-1}$。
换言之，$F_\bullet/\mathfrak{m}F_\bullet$ 的边缘映射都是 $0$。
对链复形 $K_\bullet$，其**极小消解**指一极小复形
$F_\bullet$ 以及[[拟同构]] $f\colon F_\bullet\to K_\bullet$，
即 $f$ 是复形同态，诱导各阶同调群映射是同构。
:::

## 性质

最重要的性质是

::: theorem {@存在性}
记号同 @thm:定义。如链复形 $K_\bullet$ 的同调右有界，
且都是有限生成模，则它有极小消解 $f\colon F_\bullet\to K_\bullet$，且在同构意义下唯一。
此时任一[[投射消解]]到极小消解的任一映射都是逐项满射。
:::

::: proof
我们来对 $n\in\mathbb{Z}$ 归纳作部分消解 $F_{\bullet\le n}\to K_\bullet$，
展开写即
$$
\begin{tikzcd}
  \cdots\ar[r]&0\ar[r]\ar[d]&F_n\ar[r]\ar[d,"f_n"]&F_{n-1}\ar[r]\ar[d,"f_{n-1}"]&\cdots\\
  \cdots\ar[r]&K_{n+1}\ar[r]&K_n\ar[r]&K_{n-1}\ar[r]&\cdots
\end{tikzcd}
$$
并要求它是部分极小消解，指：

1. {@消解} $H_i(f)\colon H_i(F_{\bullet\le n})\to H_i(K_\bullet)$
   在 $i<n$ 时是同构，$i=n$ 时是满射。

2. {@极小} 对 $i\le n$，$d(F_i)\subseteq\mathfrak{m}F_{i-1}$。
   不仅如此，$(f_n,d)\colon F_n\to K_n\oplus F_{n-1}$
   诱导的映射 $F_n\to H_n(\operatorname{cone}(F_{\bullet\le n-1}\to K_\bullet))$
   在模 $\mathfrak{m}$ 之后是同构。

显然 $n\ll0$ 时，对所有 $i\le n$ 取 $F_i=0$，就已满足以上条件。
于是只需做归纳步。令 $C_\bullet=\operatorname{cone}(F_{\bullet\le n}\to K_\bullet)$
为[[映射锥]]，则由[条件 1](@消解)，$H_{\le n}(C_\bullet)=0$。
于是令 $M=H_{n+1}(C_\bullet)$，则有正合列

```math {@四项正合列}
0\to H_{n+1}(K_\bullet)\to M\to\ker(F_n\to F_{n-1})\to H_n(K_\bullet)\to0.
```

由 $R$ Noether，$K_\bullet$ 各阶同调有限生成，$F_i$
有限生成，不难得到 $M$ 也有限生成，故 $M/\mathfrak{m}M$
是 $k$ 上有限维线性空间。取其一组基，然后取同样个数的元素生成的自由模
$F_{n+1}$，并取该基在 $M$ 上的提升，定义出映射 $g\colon F_{n+1}\to M$。
由 [[Nakayama 引理]]这是满射。现用以上正合列中的映射
$M\to\ker(F_n\to F_{n-1})$ 将此 $F_{n+1}$ 接到 $F_n$
上，得链复形 $F_{\bullet\le n+1}$。最后由于
$$
M=\frac{\ker(K_{n+1}\oplus F_n\to K_n\oplus F_{n-1})}{\operatorname{im}(K_{n+2}\to K_{n+1}\oplus F_n)},
$$
可再将 $F_{n+1}\to M$ 提升为 $h\colon F_{n+1}\to\ker(K_{n+1}\oplus F_n\to K_n\oplus F_{n-1})$，
定义出部分消解 $F_{\bullet\le n+1}\to K_\bullet$ 如下：
$$
\begin{tikzcd}
  \cdots\ar[r]&0\ar[r]\ar[d]&F_{n+1}\ar[r]\ar[d,"f_{n+1}"]&F_n\ar[r]\ar[d,"f_n"]&F_{n-1}\ar[r]\ar[d,"f_{n-1}"]&\cdots\\
  \cdots\ar[r]&K_{n+2}\ar[r]&K_{n+1}\ar[r]&K_n\ar[r]&K_{n-1}\ar[r]&\cdots
\end{tikzcd}
$$
其中 $f_{n+1}$ 就是 $h$ 往 $K_{n+1}$ 的投影。注意 $h$ 是到
$\ker(K_{n+1}\oplus F_n\to K_n\oplus F_{n-1})$ 的映射，正好保证
$f_{n+1}$ 右边的正方形交换以及 $F_{n+1}\to F_n\to F_{n-1}$ 复合是 $0$。
下证此部分消解是极小的。

先看[条件 1](@消解)。回忆 $g\colon F_{n+1}\to M$ 是满射。
于是由正合列 @四项正合列 有
$$
H_n(F_{\bullet\le n+1})=\operatorname{coker}(F_{n+1}\to\ker(F_n\to F_{n-1}))=H_n(K_\bullet),
$$
以及
$$
H_{n+1}(F_{\bullet\le n+1})=\ker(F_{n+1}\to F_n)\twoheadrightarrow\ker(M\to F_n)=H_{n+1}(K_\bullet).
$$
再看[条件 2](@极小)。此条件的第二句话无非是 $F_{n+1}\to M$
在模 $\mathfrak{m}$ 之后是同构，而这就是 $F_{n+1}$ 的构造方法。
而欲证其第一句话则需观察归纳假设的第二句话。由归纳假设，映射
$$
F_n\to H_n(\operatorname{cone}(F_{\bullet\le n-1}\to K_\bullet))=\frac{\ker(K_n\oplus F_{n-1}\to K_{n-1}\oplus F_{n-2})}{\operatorname{im}(K_{n+1}\to K_n\oplus F_{n-1})}
$$
模 $\mathfrak{m}$ 之后是同构。而由于 $F_{\bullet\le n+1}\to K_\bullet$
是链复形同态，不难看出 $F_{n+1}\to F_n$ 和以上映射复合得 $0$。
于是有 $F_{n+1}\to F_n$ 模 $\mathfrak{m}$ 之后为 $0$，
即 $d(F_{n+1})\subseteq\mathfrak{m}F_n$。

这样，由归纳法，我们就能取出完整消解 $f\colon F_\bullet\to K_\bullet$。
以上[条件 1](@消解) 和 [2](@极小) 立即推出它是极小消解。

以下我们先证定理的后一句话再证唯一性。任取投射消解
$p\colon P_\bullet\to K_\bullet$ 与映射 $q\colon P_\bullet\to F_\bullet$。
由于 $q$ 是消解之间的映射，图表
$$
\begin{tikzcd}
  P_\bullet\ar[rr,"q"]\ar[rd,"p"']&&F_\bullet\ar[ld,"f"]\\
  &K_\bullet&
\end{tikzcd}
$$
交换，特别地 $q$ 是拟同构。所以由于 $P_\bullet$ 和 $F_\bullet$
都是右有界投射复形，有 $q$ 是[[链同伦等价]]。于是
$\bar{q}\colon P_\bullet/\mathfrak{m}P_\bullet\to F_\bullet/\mathfrak{m}F_\bullet$
也是链同伦等价，而由极小的定义 $F_\bullet/\mathfrak{m}F_\bullet$
的微分都是 $0$，从而 $\bar{q}$ 是逐项满射，故由 [[Nakayama 引理]]
$q$ 也是逐项满射。现在如果 $P_\bullet$ 也极小，就会有反过来的逐项满射
$r\colon F_\bullet\to P_\bullet$，于是 $q\circ r$ 与 $r\circ q$
分别是 $F_\bullet$ 和 $P_\bullet$ 到自身的逐项满射；
但它们各项都是 Noether 环上有限秩自由模，故二满射都是同构，
从而 $q$ 和 $r$ 也都是同构（虽然未必互逆），故极小消解在同构意义下唯一。
:::

::: remark
从证明可以看出，以上唯一性不典范。
:::

## 例子

## 应用

::: corollary
记号和条件同 @thm:定义 与 @存在性。令
$d=\sup\{n\in\mathbb{Z}\mid F_n\ne0\}$，则
$$
d=\sup\{n\in\mathbb{Z}\mid\operatorname{Tor}_n(k,K_\bullet)\ne0\}
=\sup\{n\in\mathbb{Z}\mid\operatorname{Ext}^n(K_\bullet,k)\ne0\}.
$$
如果 $K_\bullet$ 只有一个非零项 $M$ 在 $0$ 处，则
$$
d=\operatorname{fd}(M)=\inf\{n\in\mathbb{N}\mid\operatorname{Tor}_{n+1}(k,M)=0\}
=\operatorname{pd}(M)=\inf\{n\in\mathbb{N}\mid\operatorname{Ext}^{n+1}(M,k)=0\}.
$$
:::

::: proof
用极小消解 $F_\bullet$ 计算导出函子，由 $F_\bullet/\mathfrak{m}F_\bullet$
的边缘映射都是 $0$，立得结论。
:::

::: corollary
左 Noether 局部环 $(R,\mathfrak{m},k)$ 的左整体维数与 $\operatorname{Tor}$-维数等于
$$
\inf\{n\in\mathbb{N}\mid\operatorname{Tor}_{n+1}(k,-)=0\}=\inf\{n\in\mathbb{N}\mid\operatorname{Ext}^{n+1}(-,k)=0\},
$$
即 $k$ 作为右 $R$-模的[[平坦维数]]及其作为左 $R$-模的[[内射维数]]。
如 $R$ 双边 Noether，则此数还等于
$$
\inf\{n\in\mathbb{N}\mid\operatorname{Tor}_{n+1}(k,k)=0\}.
$$
:::

::: proof
由于计算[[整体维数]]与 [[$\operatorname{Tor}$-维数]]都只需检查有限生成的模，
由上一个推论立得前一句话。后一句话则是因为计算 $k$
的[[平坦维数]]只需检查有限生成模，然后对另一个参数再用上一个推论。
:::

```terms
极小复形:
  en: minimal complex
  de: minimaler Komplex
  fr: complexe minimal
  la: complex minimus
极小消解:
  en: minimal resolution
  de: minimale Auflösung
  fr: résolution minimale
  la: resolutio minima
```
