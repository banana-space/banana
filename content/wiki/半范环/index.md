---
title: 半范环
categories: [一般环论]
---

**半范环**是带[[半范数]]的[[环]]。

## 定义

::: definition
**半范环**指[[环]] $R$ 附带函数
$$
|\cdot|\colon R\to\mathbb{R}_{\ge0},
$$
称为**半范**，满足：

- $|0|=0$，$|{-1}|\le1$。

- 对 $x,y\in R$，$|x+y|\le|x|+|y|$，
  $|xy|\le|x||y|$。

如有歧义，可将 $R$ 的半范 $|\cdot|$ 记作 $|\cdot|_R$。

半范环的**同态**指[[环同态]] $f\colon R\to S$，
满足对任意 $x\in R$，$|f(x)|_S\le|x|_R$。
:::

::: remark
由于 $1=(-1)(-1)$，$|{-1}|\le1$ 推出 $|1|\le1$，
但反之不然，故这里要求 $|{-1}|\le1$。当然也可以要求
$|1|\le1$ 以及 $|{-x}|=|x|$，这是等价的。

不要求 $|1|=1$ 是为了包含[[零环]]。但如 $|1|<1$，
则由 $|1x|\le|1||x|$ 便知每个元素的半范都是 $0$。
:::

::: definition [非 Archimedes 性]
称半范环 $R$ 为**非 Archimedes**，或称**非阿**，
指它满足如下**超距不等式**：对 $x,y\in R$，
$$
|x+y|\le\max\{|x|,|y|\}.
$$
:::

## 例子

::: example
每个环都按如下**离散范数**构成半范环：
$$
|x|=\begin{cases}
  0,&x=0;\\
  1,&x\ne0.
\end{cases}
$$
:::

::: example
[[Banach 环]]是完备的半范环。
:::

::: example
对交换半范环 $R$ 以及非负实数 $r$，可作半范环 $R[T]_r$，
它作为环就是[[多项式环]] $R[T]$，半范定义为
$$
|a_0+a_1T+\cdots+a_nT^n|=
|a_0|_R+|a_1|_Rr+\cdots+|a_n|_Rr^n.
$$
在交换半范 $R$-代数的范畴中，它[[可表函子|余表示]]函子
$$
S\mapsto\{x\in S:|x|\le r\}.
$$
:::

## 性质

::: proposition
交换半范环的范畴有所有[[余极限]]，可描述如下：

- [[始对象]]是[[整数]]环 $\mathbb{Z}$，半范是[[绝对值]]。

- 对半范环同态 $B\gets A\to C$，
  其[[推出]]是环的[[张量积]] $B\otimes_AC$，
  半范定义为
  $$
  |x|=\inf\left\{\sum_{i=1}^n|b_i|_B|c_i|_C:
  n\in\mathbb{N},\,x=\sum_{i=1}^nb_i\otimes c_i\right\}.
  $$

- 对半范环的滤图表 $(A_i)_{i\in I}$，
  其[[滤余极限]]是环的滤余极限 $\operatornamewithlimits{colim}_{i\in I}A_i$，
  半范定义为
  $$
  |x|=\inf\{|a_i|_{A_i}:a_i\mapsto x\}.
  $$

:::

::: proposition {@com-ass}
交换半范环构成[[紧聚集范畴]]，生成元可取为
$(\mathbb{Z}[T]_r)_{r\in\mathbb{Q}}$，[[紧态射]]生成族可取为
$(\operatorname{id}\colon\mathbb{Z}[T]_r\to\mathbb{Z}[T]_s)_{r>s}$。
:::

::: remark
上面两个命题中的范畴论性质不需要交换，
对结合半范环或其它一些半范代数对象也成立。
:::

::: remark
@com-ass 推出交换半范环有所有[[极限 (范畴论)|极限]]。
这也可以具体描述如下：半范环图表 $(A_i)_{i\in I}$ 的极限是
$$
\left\{(a_i)_{i\in I}\in\lim_{i\in I}A_i:
\sup_{i\in I}|a_i|_{A_i}<\infty\right\},
$$
这里 $\lim_{i\in I}A_i$ 表示环范畴中的极限；
$(a_i)_{i\in I}$ 的半范为 $\sup_{i\in I}|a_i|_{A_i}$。
换言之，半范环取底集不保持极限，但对每个 $r\in\mathbb{R}_{\ge0}$，函子
$$
R\mapsto\{x\in R:|x|\le r\}
$$
保持极限。
:::

::: proposition
如交换半范环 $R$ 满足 $|x^n|_R=|x|_R^n$ 对所有 $x\in R$，
$n\in\mathbb{N}$，则以下几条等价：

1. $R$ 非阿。

2. 存在绝对值大于 $1$ 的整数，其在 $R$
   中的半范小于等于 $1$。

3. 每个整数在 $R$ 中的半范都小于等于 $1$。

:::

::: proof
- 1推2 如 $R$ 非阿，则 $|2|_R=|1+1|_R\le
  \max\{|1|_R,|1|_R\}=|1|_R\le1$。

- 2推3 设 $d$ 是这样的整数。如 $d<0$ 则用
  $|{-d}|_R\le|{-1}|_R|d|_R$ 把 $d$ 换成 $-d$；
  故可设 $d>0$。设
  $C=\max\{|0|_R,|1|_R,\ldots,|d-1|_R\}$。
  则由 $d$ 进制展开便知对 $n\in\mathbb{Z}_+$，
  $$
  |n|_R=|a_0+a_1d+\cdots+a_kd^k|_R\le
  |a_0|+|a_1|+\cdots+|a_k|\le C(k+1),
  $$
  其中 $k=\lfloor\log_d(n)\rfloor$。对 $n^m$ 使用知
  $|n|_R^m\le|n^m|_R\le C(\log_d(n^m)+1)=C(m\log_d(n)+1)$，
  令 $m\to\infty$ 知 $|n|_R\le1$。对负数使用
  $|{-n}|_R\le|{-1}|_R|n|_R$ 即可。

- 3推1 对 $x,y\in R$，$n\in\mathbb{N}$，由二项式展开，
  $$
  |x+y|_R^n\le|(x+y)^n|_R\le
  \sum_{i=0}^n\left|\binom{n}{i}\right|_R|x|_R^i|y|_R^{n-i}
  \le\sum_{i=0}^n|x|_R^i|y|_R^{n-i}\le
  (n+1)\max\{|x|_R^n,|y|_R^n\};
  $$
  令 $n\to\infty$ 即得超距不等式。

:::

```terms
半范环:
  en: seminormed ring
```
