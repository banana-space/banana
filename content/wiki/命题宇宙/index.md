---
title: 命题宇宙
aliases: [命题（类型论）]
categories: [类型论]
navboxes: [类型论]
---

<disambiguation>
关于其他含义，请参见[[构造演算]]。
</disambiguation>

**命题宇宙**是特殊的[[宇宙 (类型论)|宇宙]]，
它仅包含命题，而不是所有[[类型]]，一般记作 $\mathrm{Prop}$。
若某类型要么存在唯一实例、要么没有实例，那么这个类型被认为是一个命题，
这个观点来源于[[Curry–Howard 对应]]。

::: definition {@命题}
若对于类型 $\Gamma\vdash A$ 存在如下证明
\[
\prod_{a,b:A} \operatorname{Id}_A(a, b)
\]
那么 $A$ 是一个**命题**。换言之，$A$ 的任意实例命题等价。
:::

这意味着 $A$ 要么等价于[[空类型]]，要么等价于[[单位类型]]。
这里的命题对应着[[$n$-类型]]中 $n=-1$ 的情况。
命题宇宙就是包含这样的类型的宇宙。

在[[Russell 简单类型论]]和[[构造演算]]的传统中，
命题宇宙都满足[[非直谓性 (类型论)|非直谓性]]，但这不是必须的。

## 定义

命题宇宙有多种不同的方式定义。
有一个重要的辅助定义 $\operatorname{isProp}$，用到了[[$\Pi$ 类型]]和[[相等类型]]：

\[
\operatorname{isProp} A:= \prod_{a:A,b:A} \operatorname{Id}_A(a, b)
\]

这个定义对应了[[同伦类型论]]中[[同伦层级]]为 $-1$ 的情况。

### 内部定义 {@weak}

使用[[$\Sigma$ 类型]]和[[宇宙 (类型论)|宇宙]]，可以直接定义命题的宇宙：

\[
\mathrm{Prop}:=\sum_{A:\mathcal U}(\operatorname{isProp}A)
\]

任何满足 $\operatorname{isProp}$ 的类型都可以被放进这个版本的命题宇宙中，
由于这个性质我们认为它是**完备**的。

### 严格定义 {@sprop}

\[
\Gamma\vdash {\mathrm{Prop}}
\]

严格的命题宇宙只包含一部分预先设定好的命题，
也就是说某个类型是否是严格的命题这件事是类型论中先验的、在语法层面上就可以知道的事情，
也就是说，严格的命题宇宙存在一些“漏网之鱼”：某些类型满足 $\operatorname{isProp}$ 却不属于该宇宙。

严格的宇宙如此严格，不仅是因为它对“哪些类型是命题”严格，
更因为它对命题的定义严格：任何“证明”都相等。

\[
\cfrac{\Gamma\vdash A:{\mathrm{Prop}}
\quad \Gamma\vdash a:A
\quad \Gamma\vdash b:A}
{\Gamma\vdash a=b:A}
\]

该宇宙可以定义为非直谓的，见[@Jesper]。

### 理想定义 {@ideal}

融合 @sprop 和 @weak 可以得到最强的定义，
这必须用到 [[Tarski 宇宙]]，
因为同时需要如下两个条件：

- $\mathrm{Prop}$ 是一个独立于 $\mathcal U$ 的宇宙，
  它等价于后者满足 $\operatorname{isProp}$ 的子集。
  这是为了使得它可以被底层的规则直接操纵。
- [[降级公理]]，即 $\mathrm{Prop}$ 需要有足够强的构造规则，
  即任何满足命题的要求的类型都存在一个等价的命题。
  这里等价的定义可以任取，只要足够类似同构即可。

于是我们在 @sprop 的基础上给出如下构造规则：

\[
\cfrac{\Gamma\vdash A\quad p:\operatorname{isProp}A}
{\Gamma\vdash R(A, p):\mathrm{Prop}}
\]

再加上如下规则，就满足了[[降级公理]]的需求：

\[
\cfrac{\Gamma\vdash A\quad p:\operatorname{isProp}A}
{\Gamma\vdash e(A, p):\operatorname{el}(R(A, p))\simeq A}
\]

### 弱定义

@ideal 过于理想，因为它隐含了一种从 $\operatorname{isProp}$ 中的命题相等到类型论内部的相等的转换，
这会使得类型论的性质过强，接近[[外延类型论]]。
因此，可以将 @ideal 中 @sprop 的部分换成如下规则：

\[
\cfrac{\Gamma\vdash A:\mathrm{Prop}}
{\Gamma\vdash \operatorname{inProp}(A):\operatorname{isProp}A}
\]

这样就消除了命题相等到相等的转化。

## 性质

### 外延性

<see>[[泛等公理]]</see>

我们希望互相蕴涵的命题相等，但这并不总是成立（至少在 [[Martin-Löf 类型论]]中不能证明）。

::: definition [命题外延性]
对于**命题** $A, B$，如下命题叫做**命题外延性**：
\[
(A \to B) \times (B \to A) \to \operatorname{Id}(A, B)
\]
:::

泛等公理蕴涵命题的外延性。

### 一致性

为了确保[[一致性 (类型论)|一致性]]，类似 @sprop 中的命题不能被“转换”为一般的类型。
换言之，考虑 $A:\mathrm{Prop}, B:\mathcal U$，[[函数类型]]
\[
A → B
\]
的实例只能是常数函数，不能对参数进行类似[[模式匹配]]的消去。

::: example [反例]
考虑如下类型：
- $2:\mathcal U$ 为有两个不同实例 $y, n$ 的类型（显然 $y\ne n$），
- $2_p : \mathrm{Prop}$ 为有两个不同证明 $y_p, n_p$ 的命题（根据命题的性质，有 $y_p =n_p$）。

考虑对参数进行消去的[[模式匹配]]函数：
\[
\begin{aligned}
  f &: 2_p → 2 \\
  f &(y_p) = y \\
  f &(n_p) = n
\end{aligned}
\]
将 $y_p =n_p$ 的证明通过以上函数映射到一个 $y=n$ 的证明，矛盾。
:::

[[选择公理 (类型论)|选择公理]]在一定程度上解除了该限制。

## 范畴语义

[[依值类型论]]中性质合适的命题宇宙对应它[[范畴语义]]中的[[子对象分类子]]。
令 $Ω$ 为 $\mathrm{Prop}$，再考虑等价于[[单位类型]]的类型 $\Sigma_{A:\mathrm{Prop}} A$，
子对象分类子的[[交换图]]可以重新诠释：

\[
\begin{tikzcd}
  \Gamma,A \ar[rr, "证明 \operatorname{isProp}A"] \ar[d, "\pi_A"] && \Sigma_{A:\mathrm{Prop}} A \ar[d, "取第一项"] \\
  \Gamma \ar[rr, dashed, "{R(A, p)}"] && \mathrm{Prop}
\end{tikzcd}
\]

该交换图指出若存在某类型 $Γ ⊢ A$ 使得该图表存在右上部分，
然后左边的 $\pi_A$ 又是类型本身的定义一定能给出的，
那么就一定存在唯一的 $R(A, p):\mathrm{Prop}$ 对应之。
也就是说，若我们能证明 $\operatorname{isProp}A$，那么存在唯一的命题等价于 $A$。

## 参考资料

```bibliography
Jesper:
  type: article
  title: Definitional Proof-Irrelevance without K
  author: ['Gilbert, Gaëtan', 'Cockx, Jesper', 'Sozeau, Matthieu', 'Tabareau, Nicolas']
  year: 2019
  journaltitle: Proc. ACM Program. Lang.
  publisher: Association for Computing Machinery
  location: 'New York, NY, USA'
  volume: 3
  number: POPL
  doi: 10.1145/3290316
```

```terms
命题宇宙:
  en: universe of propositions
命题外延性:
  en: propositional extensionality
```
