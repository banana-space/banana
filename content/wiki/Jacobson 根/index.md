---
title: Jacobson 根
categories: [一般环论]
---

**Jacobson 根**，俗称**大根**，指的是[[环]]的所有[[极大理想]]的交。对一般环，
所有极大左理想的交和所有极大右理想的交是一样的。它最重要的性质是
[[Nakayama 引理]]。

## 定义

::: proposition {@基本命题}
对一般环 $R$，以下几个子集相同：

1. $R$ 的所有极大左理想的交。

2. $R$ 的所有极大右理想的交。

3. 所有[[单模|单]]左 $R$-模的[[零化子]]的交。

4. 所有[[单模|单]]右 $R$-模的[[零化子]]的交。

5. $\{x\in R\mid\forall a\in R,\,1-ax\,有左逆\}$。

6. $\{x\in R\mid\forall a\in R,\,1-xa\,有右逆\}$。

7. $\{x\in R\mid 1+Rx\subseteq R^\times\}$。

8. $\{x\in R\mid 1+xR\subseteq R^\times\}$。

9. $\{x\in R\mid 1+RxR\subseteq R^\times\}$。

:::

::: proof
以 $J_k$ 表示第 $k$ 条定义的子集。

对极大左理想 $\mathfrak{m}$，$R/\mathfrak{m}$ 为单左 $R$-模，
$\operatorname{Ann}(R/\mathfrak{m})\subseteq\operatorname{Ann}(\bar{1}\in R/\mathfrak{m})=\mathfrak{m}$，
故 $J_3\subseteq J_1$。反过来对单左 $R$-模 $M$，
$\operatorname{Ann}(M)=\bigcap_{0\ne m\in M}\operatorname{Ann}(m)$，
而由于 $M$ 单，每个 $\operatorname{Ann}(m)$ 都是极大左理想，故 $J_1\subseteq J_3$。
于是 $J_1=J_3$。同样地 $J_2=J_4$。

如 $x\notin J_1$，取极大左理想 $\mathfrak{m}\notni x$，
则 $Rx+\mathfrak{m}=R$。于是 $1+Rx$ 和 $\mathfrak{m}$ 有交，
$x\notin J_5$。反过来如 $x\in J_1$，
则对任一 $a\in R$，$ax$ 在每个极大理想中，于是 $1-ax$ 就不在任一极大理想中，
故其有左逆，$x\in J_5$。于是 $J_1=J_5$。同样地 $J_2=J_6$。

如 $x\in J_5$，任取 $a\in R$，$1-ax$ 都有左逆，设为 $u$，
即 $u(1-ax)=1$。展开、移项得 $u=1+uax$；由于 $x\in J_5$，
$u$ 也有左逆，故 $u$ 有两边逆，于是 $u\in R^\times$，推出
$1-ax\in R^\times$。即 $J_5\subseteq J_7$。显然 $J_7\subseteq J_5$，
故 $J_5=J_7$。同样 $J_6=J_8$。

注意如 $1-ax\in R^\times$，不难验证 $1+x(1-ax)^{-1}a$ 给出 $1-xa$ 的逆，
所以 $J_7=J_8$。这样便有 $J_1=J_2=J_3=J_4=J_5=J_6=J_7=J_8$，
且为双边理想，记为 $J$。显然 $J_9\subseteq J$，尚需证 $J\subseteq J_9$。

最后，如 $x\in J$，那么 $RxR\subseteq J$，
即 $RxR$ 包含于每个极大左理想、每个极大右理想。
这样一来，$1+RxR$ 中元素就不在任一极大左理想、极大右理想中，
于是 $x\in J_9$。即 $J\subseteq J_9$。命题得证。
:::

::: definition [Jacobson 根]
@基本命题 中的子集称为 $R$ 的 Jacobson 根。
由定义它是 $R$ 的双边理想。
:::

::: remark
需要注意的是，Jacobson 根可能不是所有极大双边理想的交，
因为极大左理想未必都包含一个极大双边理想。请看下面的例子。
:::

## 例子

- [[局部环]]的 Jacobson 根是其极大理想。

- 由 [[Hilbert 零点定理]]，域上有限生成的环，
  其 Jacobson 根等于[[幂零根]]。

- [[单环]]的 Jacobson 根是 $0$。

- [[半单环]]的 Jacobson 根是 $0$。

- 域上 $n\times n$ 的上三角矩阵构成环。其 Jacobson
  根等于幂零根，由严格上三角矩阵组成。

- 对交换环 $A$，一元多项式环 $A[x]$ 的 Jacobson 根等于幂零根，
  为所有系数都幂零者组成的理想。

::: example
本例展示 Jacobson 根可以真包含于所有极大双边理想的交。
取域 $k$ 以及 $k$ 上可数维线性空间 $V$，取 $R=\operatorname{End}_k(V)$。
$V$ 有自然的左 $R$-模结构，且显然是单模。由 $R$ 的定义，
$\operatorname{Ann}_R(V)=0$，故 $R$ 的 Jacobson 根为 $0$。
下证其极大双边理想唯一且不为 $0$。

令 $I=\{r\in R\mid\dim_k(\operatorname{im}(r))<\infty\}$，
即像集有限维的那些线性映射组成的双边理想，现在来证明它就是唯一的极大双边理想。
为此需要说明对任一 $x\notin I$，都有 $RxR=R$。依 $I$ 的定义，
$\operatorname{im}(x)$ 不为有限维，为可数维，故可取同构
$\operatorname{im}(x)\cong V$。由于线性空间的包含都是直和项，
可将其延拓为映射 $a\colon V\to V$。现用同构定理将以上同构视为
$V\cong V/\ker(x)$。类似地，可将其提升为映射 $b\colon V\to V$。
由构造，$axb=1$，故 $RxR=R$。

于是 $R$ 只有一个极大双边理想即 $I$，其所有极大双边理想的交为 $I$，
真包含 Jacobson 根 $0$。
:::

## 性质

::: proposition
$R$ 是环，$J$ 是其 Jacobson 根。对双边理想 $I\subseteq J$，
$J/I$ 是 $R/I$ 的 Jacobson 根。对一般的双边理想 $I$，
$(J+I)/I$ 包含于 $R/I$ 的 Jacobson 根。
:::

::: proof
这都是第三同构定理的显然推论。
:::

::: proposition
Jacobson 根包含[[幂零根]]。如果环为左 [[Artin 环|Artin]] 或右 Artin，
则二者相等。
:::

::: proof
由于 $(1-x)^{-1}=1+x+x^2+\cdots$，立得幂零根包含于 Jacobson 根。
后一句话见 [[Artin 环]]条目中左 Artin 环左 Noether 的证明。
:::

以下 Nakayama 引理说明，Jacobson 根在生成一个模时是多余的。

::: theorem [Nakayama 引理]
$R$ 是环，$J$ 是其 Jacobson 根，$M$ 是有限生成左 $R$-模，
$N\subseteq M$。如果 $M=N+JM$，那么 $M=N$。
:::

::: proof
$M=N+JM$ 即 $M/N=J(M/N)$。由主条目 [[Nakayama 引理]]中的版本，
有 $M/N=0$，即 $M=N$。
:::

```terms
Jacobson 根:
  en: Jacobson radical
  de: Jacobson-Radikal :n
  fr: radical de Jacobson :m
```
