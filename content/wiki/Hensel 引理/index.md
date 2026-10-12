---
title: Hensel 引理
categories: [交换代数]
notices:
  - name: 问题
    items:
      - “推论”一节中推论 2.1 的证明里，$r$ 既表示系数赋值的最小值，又表示 $g_0 = x^r$ 的次数，这两处似乎应是不同的量；证明中用到的是因式分解形式的 Hensel 引理，本条目没有给出其陈述。
navboxes: [交换代数]
---

::: convention
在本文中，

- 所有环都指[[交换环]]。

:::

**Hensel 引理**是个[[交换代数]]中的定理，
说的是[[完备环]]上多项式在剩余域的单根可以提升到环上。它是
[[Newton 迭代]]的非 Archimedes 类比，
在[[代数数论]]和[[代数几何]]中有广泛应用。

## 定理与证明

::: theorem [Hensel]
$R$ 是环，$I$ 是其理想，$R$ 关于 $I$ [[完备环|完备]]。
设 $f\in R[x]$ 和 $a_0\in R/I$ 满足
$\bar{f}(a_0)=0$，$\bar{f}'(a_0)\in(R/I)^\times$，
其中 $\bar{f}\in R/I[x]$ 为 $f$ 模 $I$。
则存在唯一 $a\in R$，在 $R/I$ 的像为 $a_0$，
且满足 $f(a)=0$。
:::

::: proof
以 $f_n$ 表示 $f$ 模 $I^{n+1}$。我们归纳证明存在唯一
$a_n \in R/I^{n+1}$ 使得 $f_n(a_n) = 0$ 且
$a_n \equiv a_{n-1} \pmod{I^n}$。这样由完备性即可得到结论。

$n=0$ 时就是条件。$n>0$ 时由归纳假设已知 $a_{n-1}$
存在唯一。首先任取 $b \in R/I^{n+1}$ 使其模 $I^n$
等于 $a_{n-1}$，则 $f_n(b) \in I^n/I^{n+1}$。
现在 $a_n$ 需要满足 $a_n\in b+I^n/I^{n+1}$，
且 $f_n(a_n)=0$。于是设 $a_n=b+c$，$c\in I^n/I^{n+1}$。
则由 $c^2=0$，有
$$
f_n(a_n)=f_n(b)+f'_n(b)c.
$$
注意 $f'_n(b)$ 模 $I$ 等于 $\bar{f}'(a_0)$，由条件为可逆，
故它本身在 $R/I^{n+1}$ 中可逆。于是 $f_n(a_n)=0$
等价于 $c=-\frac{f_n(b)}{f'_n(b)}$。由此即知 $a_n$
存在唯一。
:::

## 推论

::: corollary {@prop3}
$(A, \mathfrak{m})$ 是完备的[[离散赋值环]]，剩余域为 $k$，分式域为 $K$。
若 $f \in K[x]$ 是一个不可约多项式，
且首项系数和常数项均在 $A$ 中，那么 $f \in A[x]$。
:::

::: proof
利用反证法，假设该结论不成立。
设 $\mathfrak{m} = (\pi),f(x) = \sum_{i=0}^n f_ix^i\ (f_n \neq 0)$，
记 $r = \min \{v_{\mathfrak{m}}(f_i) \}$，
则 $F = \pi^{-r}f \in A[x]$。
由反证假设，$\bar{F} = g_0 h_0$，
其中，$g_0 = x^r,\ 0<r<n,\ x \nmid h_0$。
进而我们利用 Hensel 引理，可知存在 $g,h \in A[x]$，
使得 $\deg(g) = \deg(g_0)$，$F = gh$。
由 $g$ 的次数可知这是一个非平凡分解，这与 $f$ 不可约相矛盾。
:::

::: remark
这对于一般的完备局部环并不成立，如 $k[[x,y]]$ 是完备局部环，
但 $T^2-\frac{y}{x}T+1$ 不可约。
:::

::: corollary
$A$是一个完备的离散赋值环，其分式域为 $K$。$L/K$ 是一个 $n$ 次[[域扩张]]。
则 $\alpha$ 在 $A$ 上整当且仅当 $N_{L/K}(\alpha) \in A$。
:::

::: proof
记 $\alpha$ 的[[极小多项式]]为 $f$，$e = [L:K(\alpha)]$。
若 $\alpha$ 在 $A$ 上整，由于 $A$ 是整闭的，故 $f \in A[x]$（具体证明参见条目[[整同态]]），
$N_{L/K}(\alpha) = (-1)^nf(0)^e \in A$。

若 $N_{L/K}(\alpha) = (-1)^nf(0)^e \in A$，
则由于 $A$ 整闭，故 $f(0) \in A$。
$f$ 是极小多项式，显然首项系数在 $A$ 中，且不可约。
故由 @prop3，$f \in A[x]$，故 $\alpha$ 在 $A$ 上整。
:::

## 推广

Hensel 引理中的单根条件可以放松，
只要一开始的根在模理想的高次方时存在。

::: theorem
$R$ 是环，$I$ 是其理想，$R$ 关于 $I$ 完备。
设 $f\in R[x]$ 和 $a_0\in R$ 满足
$f(a_0)\in f'(a_0)^2I$。则存在 $a\in R$
模 $f'(a_0)I$ 同余 $a_0$，且 $f(a)=0$。
如 $f'(a_0)\in R$ 不是[[零因子]]，则 $a$ 唯一。
:::

还可将求根推广为因式分解。

## 例子

- Hensel 引理最典型的使用场景是 [[$p$ 进数|$p$ 进整数]]
  $\mathbb{Z}_p$。比如对 $f(x)=x^p-x$ 使用，由于
  $f'(x)\equiv-1\pmod p$ 显然可逆，
  其在 $\mathbb{F}_p$ 的根 $0,1,\ldots,p-1$
  都在 $\mathbb{Z}_p$ 有唯一提升。换言之，$\mathbb{Z}_p$ 中有 $p-1$
  次[[单位根]]。

- 仍考虑 $\mathbb{Z}_p$，对 $x^2-a$ 使用 Hensel 引理，
  其中 $p\nmid a$。当 $p>2$ 时这说明 $a$ 在 $\mathbb{Z}_p$
  中是平方当且仅当它在 $\mathbb{F}_p$ 中是平方，即
  $a\bmod p$ 是[[二次剩余]]。
  $p=2$ 时这说明 $a$ 在 $\mathbb{Z}_2$ 中是平方当且仅当它在
  $\mathbb{Z}/8$ 中是平方，即 $a\equiv1\pmod8$。

```terms
Hensel 引理:
  en: Hensel's lemma
  de: henselsches Lemma
  fr: lemme de Hensel
```
