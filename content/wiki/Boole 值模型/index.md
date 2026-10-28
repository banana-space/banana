---
title: Boole 值模型
categories: [模型论, 集合论]
---

<problems>
- “定义”一节中定义“模型”之前的注里，不等式 $\chi(m_i)\le\bigwedge_{\varphi\in\Phi}\varphi(m_i)$ 的方向似乎写反了，按 $\Phi\vdash\chi$ 似乎应为 $\bigwedge_{\varphi\in\Phi}[\varphi(m_i)]\le[\chi(m_i)]$。
- “应用”一节需要扩充。
</problems>

**Boole 值模型**是[[数理逻辑]]中[[模型]]的推广，
将其中语句的真值推广到任意[[完备 Boole 代数]]上。
取适当的 Boole 代数和 Boole 值模型，可使一些[[集合论]]命题成立，
从而证明相容性结论。这是一种形式的[[力迫法]]。

## 定义

::: definition [结构]
设 $B$ 是[[完备 Boole 代数]]，$\mathcal{L}$ 是一阶语言。
$\mathcal{L}$ 的 **$B$ 值结构**，或称**取值在
$B$ 的 Boole 值结构**，指的是：

- 一个[[集合]] $M$；

- 对 $\mathcal{L}$ 的每个 $n$ 元函数 $f$
  指定一个映射 $f_M\colon M^n\to M$，每个 $n$ 元谓词
  $p$ 指定一个映射 $p_M\colon M^n\to B$；

通常以 $M$ 代表以上所有信息，而在记号中略去 $f_M$，$p_M$
等。
:::

::: definition [真值] {@真值}
记号承上。设 $P(x_1,\ldots,x_n)$ 是 $\mathcal{L}$ 的公式，
$x_1,\ldots,x_n$ 是其所有的自由变元。则对
$m_1,\ldots,m_n\in M$，递归定义 **$P$ 在
$m_1,\ldots,m_n$ 处的真值** $[P(m_1,\ldots,m_n)]\in B$
如下：

- 如 $P(x_1,\ldots,x_n)=
      p(t_1(x_1,\ldots,x_n),\ldots,t_k(x_1,\ldots,x_n))$
  是元公式，其中 $t_1,\ldots,t_k$ 是项，$p$ 是 $k$
  元谓词，则
  $$
  [P(m_1,\ldots,m_n)]=
  p_M(t_1(m_1,\ldots,m_n),\ldots,t_k(m_1,\ldots,m_n)).
  $$

- 如 $P=\neg Q$，则 $[P]=\neg[Q]$。

- 如 $P=Q\wedge R$，则 $[P]=[Q]\wedge[R]$。

- 如 $P=Q\vee R$，则 $[P]=[Q]\vee[R]$。

- 如 $P=\forall xQ(x)$，则
  $[P]=\bigwedge_{m\in M}[Q(m)]$。

- 如 $P=\exists xQ(x)$，则
  $[P]=\bigvee_{m\in M}[Q(m)]$。

上面在记号中隐去 $P,Q,R$ 的无关自由变元。
注意最后两条用到了 Boole 代数 $B$ 的完备性。
回忆语句指的是没有自由变元的公式，从而每个语句都有个取值在
$B$ 的真值。可能有歧义时，也将 $[P]$ 写作 $[P]_M$。
:::

::: remark
记号承上。不难发现如含有自由变元 $\{x_i\}_{i\in I}$
的公式集 $\Phi$ 和公式 $\chi$ 满足 $\Phi\vdash\chi$，即
$\Phi$ 句法蕴涵 $\chi$，则对任意指定的 $m_i\in M$ 都有
$$
\chi(m_i)\le\bigwedge_{\varphi\in\Phi}\varphi(m_i).
$$
:::

::: definition [模型]
记号承上。设 $T=(\mathcal{L},\Phi)$ 是[[一阶理论]]，
其中 $\Phi$ 是公理集。如对每个 $\varphi\in\Phi$
都有 $[\varphi]_M=1$，则称 $M$ 是 $T$ 的 **$B$ 值模型**，
或称**取值在 $B$ 的 Boole 值模型**。
:::

::: remark
于是如 $T\vdash\chi$，就有 $[\chi]=1$。
:::

::: remark [真类变体]
有时需要讨论 $M$ 是[[真类]]的情形。此时只要定义中的映射
$f_M$，$p_M$ 都由显式公式给出，整套定义就可沿用。
（注意即便 $M$ 是真类，$\{[Q(m)]\mid m\in M\}\subseteq B$
也是集合，所以其在 $B$ 中有上下确界，从而 @真值
没有问题。）
:::

## 例子

- 当 [[Boole 代数]] $B=2$ 时，
  Boole 值模型便退化为[[模型]]。

- [[Boole 值 von Neumann 宇宙]]是 [[ZFC]] 的
  Boole 值模型。

## 应用

```terms
Boole 值模型:
  en: Boolean-valued model
```
