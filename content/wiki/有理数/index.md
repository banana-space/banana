---
title: 有理数
aliases: [有理数域, 分数]
categories: [数系, 域论]
navboxes: [数系, 域论]
---

**有理数**是指形如 $m/n$ 的[[数]]，
其中 $m, n$ 均为[[整数]]，且 $n \neq 0$。
有理数和**分数**是同义词，
其唯一区别在于有理数更强调这个数本身，分数则更强调 $m/n$ 这个形式。

所有有理数的集合记为 $\mathbb{Q}$，
它上面同时有代数结构、拓扑结构、序结构。

## 定义

::: definition [有理数]
有理数是 $\mathbb{Z} \times (\mathbb{Z}-\{0\})$ 在如下[[等价关系]]下的[[等价类]]：
$(a,b)$ 和 $(c,d)$ 等价当且仅当 $ad=bc$。
$(a,b)$ 所在的等价类记为 $a/b$ 或 $\dfrac{a}{b}$。
:::

### 域结构

::: definition [四则运算]
有理数的[[加法]]定义为 $a/b + c/d=(ad + bc)/(bd)$；
有理数的[[乘法]]定义为 $(a/b) \cdot (c/d)=(ac)/(bd)$。

对有理数 $a/b$，它的[[相反数]]定义为 $-a/b=(-a)/b$；
如果 $a\neq 0$，它的[[倒数]]定义为 $b/a$。
有理数的[[减法]]和[[除法]]分别定义为加上相反数和乘以倒数。
:::

::: definition
**有理数域** $\mathbb{Q}$ 是有理数在上述运算下构成的[[域]]。
它是[[整数]]环 $\mathbb{Z}$ 的[[分式域]]。
:::

### 序结构

::: definition [序结构]
有理数上有自然的[[全序]]结构，即
\[
\frac{p}{q} \le \frac{r}{s} \iff ps^2q \le rq^2s.
\]
这里不能约去两边的 \(s,q\)，因为它们可能是负数。
此时它与上述[[域]]结构一起赋予了有理数[[序域]]结构。
:::

有理数的序结构有很强的唯一性：

::: theorem
任何可数稠密无端点全序都同构于有理数的序。
:::

强调序结构时，将有理数记作 \(\boldsymbol\eta\)。

### 拓扑结构

$\mathbb{Q}$ 带有以下几种常见的[[拓扑空间|拓扑]]，
使它与域结构下成为[[拓扑域]]。

#### Archimedes 拓扑

$\mathbb{Q}$ 的 **Archimedes 拓扑**是由[[距离]]函数 $d (x, y) = |x - y|$
[[度量空间|诱导的拓扑]]，它同时也是上述序结构诱导的[[序拓扑]]。
$\mathbb{Q}$ 关于这个拓扑的[[完备化]]是[[实数]]域 $\mathbb{R}$。

#### $p$ 进拓扑

对[[素数]] $p$ 而言，
$\mathbb{Q}$ 的 **$p$ 进拓扑**是由[[距离]]函数
$d_p (x, y) = p^{-n}$
[[度量空间|诱导的拓扑]]，
其中 $n$ 是 $x - y$ 的[[素因子分解]]中 $p$ 的次数。
$\mathbb{Q}$ 关于这个拓扑的[[完备化]]是 [[$p$ 进数]]域 $\mathbb{Q}_p$。

```terms
有理数:
  en: rational number
  de: rationale Zahl :f
  fr: nombre rationnel :m
  grc: ῥητὸς ἀριθμός :m
  la: numerus rationalis :m
分数:
  en: fraction
  de: Bruchzahl :f
  fr: fraction :f
  grc: κλάσμα :n
  la: fractio :f
```
