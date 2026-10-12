---
title: 超越扩张
categories: [域论]
notices:
  - name: 问题
    items:
      - “定义”一节需要扩充。
      - “性质”一节中“任意两组超越基有相同的基数”的定理缺少证明。
navboxes: [域论]
---

**超越扩张**是与[[代数扩张]]相对的概念，
指的是并非代数扩张的[[域扩张]]。换句话说，对于域扩张 $K/k$，
如果扩域 $K$ 中存在[[超越元]] $\alpha\in K$，
即不存在非零多项式 $P(X)\in k[X]$，$P(\alpha)=0$，那么
$K/k$ 就是一个超越扩张。

例如，对于任意域 $k$，一元[[函数域]] $k(x)/k$ 就是超越扩张，$x$ 就是一个超越元；
$\mathbb{R}/\mathbb{Q}$ 是超越扩张，[[$\mathrm{e}$]]、[[$\pi$]] 都是超越元。

## 定义

## 性质

::: definition [代数相关]
设 $K/k$ 是域扩张。
子集 $\mathcal{X}\subset K$ 中如果存在 $n\ge 1$ 个元素
$x_1,x_2,\ldots,x_n\in \mathcal{X}$，
使得存在非零多项式 $P\in k[X_1,\ldots, X_n]$ 满足
\[
P(x_1,\ldots,x_n)=0,
\]
就说 $\mathcal{X}$ 在 $k$ 上 **[[代数相关]]**，
反之，说它在 $k$ 上**代数无关**。
:::

这是[[代数元]]、[[超越元]]概念的自然推广：
单元集 $\{\alpha\}$ 在 $k$ 上代数相关等价于说
$\alpha$ 是 $k$ 上的代数元。

::: definition [超越基]
扩域 $K/k$ 的极大代数无关子集称为扩张 $K/k$ 的 **[[超越基]]**。
:::

::: theorem [超越基的存在性]
任意域扩张都存在超越基。
:::

::: theorem
域扩张 $K/k$ 的任意两组超越基有相同的[[基数]]。
:::

::: definition [超越次数]
域扩张 $K/k$ 任一超越基的[[基数]]叫做 $K/k$ 的 **[[超越次数]]**，
记作 $\operatorname{tr.deg}(K/k)$。
:::

设 $\{a_i\}_{i\in I}$ 是域扩张 $K/k$ 的一组超越基，
一般不一定有 $K=k(a_i)_{i\in I}$。

::: definition [纯超越扩张]
设 $\{a_i\}_{i\in I}$ 是域扩张 $K/k$ 的一组超越基，
如果 $K=k(a_i)_{i\in I}$，就说 $K/k$ 是 **[[纯超越扩张]]**。
:::

例如，$k(x)/k$ 就是超越次数为 $1$ 的纯超越扩张，
$\{x\}$ 是它的一组超越基。

::: theorem
任意域扩张一定可以分解成两步：
先添加超越基，再作[[代数扩张]]。
换句话说，如果 $\{a_i\}_{i\in I}$ 是 $K/k$ 的超越基，
那么 $K/k(a_i)_{i\in I}$ 是代数扩张。
:::

::: proof
显然 $k(a_i)_{i\in I}$ 是 $K$ 的子域。
如果 $K$ 中存在 $k(a_i)_{i\in I}$ 上的超越元 $\alpha$，那么
$\{a_i\}_{i\in I}\cup\{\alpha\}$ 在 $k$ 上代数无关，
这和超越基的极大性矛盾。
:::

::: theorem
如果 $\mathcal{X},\mathcal{Y}$ 是扩张 $K/k, L/K$ 的超越基，
那么 $\mathcal{X} \cup \mathcal{Y}$ 是 $L/k$ 的超越基，
\[
\operatorname{tr.deg}(L/k)=\operatorname{tr.deg}(K/k)+\operatorname{tr.deg}(L/K).
\]
:::

```terms
超越扩张:
  en: transcendental extension
  de: transzendente Erweiterung
  fr: extension transcendante
  grc: ὑπερβατικὴ ἐπέκτασις
  la: extensio transcendens
超越次数:
  en: transcendental degree
  de: Transzendenzgrad
  fr: degré de transcendance
  grc: ὑπερβατικὸς βαθμός
  la: gradus transcendentiae
超越基:
  en: transcendence basis
  de: Transzendenzbasis
  fr: base de transcendance
  grc: ὑπερβατικὴ βάσις
  la: basis transcendentiae
```
