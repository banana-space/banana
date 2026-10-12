---
title: 编码–解码法
aliases: [编码-解码法]
categories: [同伦类型论]
notices:
  - name: 问题
    items:
      - '“无交并的编码”“无交并的解码”两节中道路的方向似乎不一致，例如 $\operatorname{码}_a(\operatorname{inl} v)$ 先后写作 $\operatorname{Id}_A(a, v)$ 与 $\operatorname{Id}_A(v, a)$。'
---

**编码–解码法**是[[同伦类型论]]中的一种证明给定一点的[[道路空间]]和其它类型同构的手法。

本文假设读者对同伦类型论相关的概念有基本的了解，
例如道路空间、[[相等类型]]及其归纳公理 [[J 规则]]、[[高阶归纳类型]]等。

## 类型论相关背景

我们使用如下辅助定义：

- $\operatorname{ap}_f: \operatorname{Id}(a, b) → \operatorname{Id}(f(a), f(b))$ 为把一个函数 $f$
  应用到一条道路上的操作，在 [[J 规则]]中有证明。

- $\operatorname{传送}:\operatorname{Id}(A, B)→ A→ B$，也是通过 [[J 规则]]证明。

本词条借助较为简单的无交并类型来正式介绍编码–解码法，
然后再引入编码–解码法处理较为复杂的[[圆周类型]]的例子。

## 例子：无交并

[[无交并类型]]是一个有两个构造子的类型，这两个构造子满足如下性质：

- 单射：
  由 $\operatorname{Id}(\operatorname{inl} a, \operatorname{inl} b)$ 可以得到
  $\operatorname{Id}(a, b)$。
- 不交：
  由 $\operatorname{Id}(\operatorname{inl} a, \operatorname{inr} b)$ 可以得到[[空类型]]
  $\varnothing$。

现在尝试证明它。

### 无交并的编码

给定 $a:A$，定义：

\[
\operatorname{码}_a:=\operatorname{rec}_+(λ x.\operatorname{Id}(x, a), λ x.\varnothing)
\]

读者应该能根据上面的定义推断出 $\operatorname{码}_a:A+ B→ \mathcal U$。
这就是“编码–解码法”这个名字里的“码”了。
使用[[模式匹配]]可以更直观地观察到它的行为：

\[
\begin{aligned}
  \operatorname{码}_a(\operatorname{inl} x)&:=\operatorname{Id}(x, a)\\
  \operatorname{码}_a(\operatorname{inr} x)&:=\varnothing
\end{aligned}
\]

考虑 $u:A+ B$ 和 $p:\operatorname{Id}_{A+ B}(\operatorname{inl} a, u)$，有：

\[
\operatorname{ap}_{\operatorname{码}_a}(p):\operatorname{Id}_{\mathcal U}(\operatorname{Id}_A(a, a), \operatorname{码}_a(u))
\]

注意我们得到的是一个类型之间的相等关系，左边是 $a$ 上的[[环路空间]]，右边是 $u$ 对应的码。
借助 $\operatorname{传送}$ 我们可以得到一个从左到右的函数，然后再把 $\operatorname{refl}_a$ 喂给它：

\[
\operatorname{传送}(\operatorname{ap}_{\operatorname{码}_a}(p), \operatorname{refl}_a):\operatorname{码}_a(u)
\]

上面的这个构造就是无交并类型的编码操作了。定义：

\[
\operatorname{编码}_a(u):=λ p.\operatorname{传送}(\operatorname{ap}_{\operatorname{码}_a}(p), \operatorname{refl}_a)
\]

不难看出：

\[
\operatorname{编码}_a:\prod_{u:A + B} \operatorname{Id}_{A+ B}(\operatorname{inl} a, u) → \operatorname{码}_a(u)
\]

分别令 $u=\operatorname{inl} v$ 或者 $u=\operatorname{inr} v$
就可以分别构造证明前面说的单射和不交两个性质：

- $u=\operatorname{inl} v$ 的话，
  那么 $\operatorname{码}_a(\operatorname{inl} v)=\operatorname{Id}_A(a, v)$，
  所以 $\operatorname{编码}_a(u)$ 的类型也就是
  $\operatorname{Id}_{A+ B}(\operatorname{inl} a, \operatorname{inl} v)→\operatorname{Id}_A(a, v)$。
- $u=\operatorname{inr} v$ 的情况留给读者。

观察编码操作的类型，它可以看作是一个参数化的函数，
从 $\operatorname{Id}_{A+ B}(\operatorname{inl} a, u)$ 到 $\operatorname{码}_a(u)$。
这个函数的输入是从定点 $\operatorname{inl} a$ 出发的道路空间，输出是这个定点周围的“码”。
接下来我们将会定义它的逆，以证明这个函数是一个同构。

### 无交并的解码

从编码操作的类型可以很轻易地看出解码操作应有的类型：

\[
\operatorname{解码}_a: \prod_{u:A + B} \operatorname{码}_a(u) → \operatorname{Id}_{A+ B}(\operatorname{inl} a, u)
\]

我们借助 $\operatorname{rec}_+$ 来定义解码操作。

- 如果 $u=\operatorname{inl} v$，
  那么参数类型
  $\operatorname{码}_a(u)=\operatorname{码}_a(\operatorname{inl} v)=\operatorname{Id}_A(v, a)$，
  此时返回类型也随之变为 $\operatorname{Id}_{A+B}(\operatorname{inl} a, \operatorname{inl} v)$，
  通过 $\operatorname{ap}_{\operatorname{inl}}$ 即可简单实现这个转换。
- 如果 $u=\operatorname{inr} v$，
  那么 $\operatorname{码}_a(u)=\operatorname{码}_a(\operatorname{inr} v)=\varnothing$，
  此时返回类型是什么已经不再重要。

因此：

\[
\operatorname{解码}_a(u):=\operatorname{rec}_+(\operatorname{ap}_{\operatorname{inl}}, \operatorname{rec}_\varnothing)
\]

### 编码和解码互逆

接下来我们需要证明编码和解码两个函数互逆。
证明很直接，其中一个方向是使用[[J 公理]]直接得到结果，另一个方向是使用模式匹配，留作习题。

::: remark
在[[立方类型论]]中，由于 [[Swan 问题]]导致 $\operatorname{传送}$ 计算性质较差，
比起同伦类型论还需要额外多出一些步骤。
:::

## 例子：圆

圆类型类似的性质如下：

::: proposition
任何 $p:\operatorname{Id}_{S^1}(\operatorname{base}, \operatorname{base})$ 都生成自形如
$p_1\cdot p_2 \cdot \dots \cdot p_m$
的表达式，其中 $p_i$ 为 $\operatorname{loop}$ 或者 $\neg\operatorname{loop}$。
用构造主义逻辑的话来讲，就是存在一个整数 $n$ 使得
$\operatorname{loop}$ 和自己相连 $n$ 次得到的道路等价于 $p$，其中负数代表反向相连。
:::

我们尝试证明它。这个证明用到了[[泛等公理]]的性质（$\beta$ 规则）：

\[
\operatorname{ua}_β:\prod_{e:A≃ B}
\operatorname{Id}(\operatorname{传送}(\operatorname{ua} e), e.1)
\]
其中 $e.1$ 是指取出 $A≃ B$ 中对应的函数。
在[[立方类型论]]中，如上性质是类型论中的计算性质。

除此之外，我们还需要用到整数上由 $+1$ 操作形成的自同构：

\[
\begin{aligned}
  &s: \mathbb Z ≃ \mathbb Z\\
  &s.1(x) = x+1
\end{aligned}
\]

### 圆周的编码

由于圆周的构造子不需要参数，因此定义“码”如下：

\[
\operatorname{码} := \operatorname{rec}_{S¹}(\mathbb Z, s)
\]

读者应该能推断出 $\operatorname{码} : S¹ → \mathcal U$。
不难看出 $\operatorname{传送}(\operatorname{码}(\operatorname{loop}))$
等价于 $s.1$，也就是 $λx. x+1$。同样的，在[[立方类型论]]中如上性质由计算即可得到。

用类似的思路可以定义编码操作：

\[
\operatorname{编码}_x:= λp. \operatorname{传送}(\operatorname{ap}_{\operatorname{码}}(p), 0)
\]

其中 $0:\mathbb Z$ 是整数。不难看出，

\[
\operatorname{编码}_x : \operatorname{Id}(\operatorname{base}, x) → \operatorname{码}(x)
\]

### 圆周的解码

从编码操作的类型可以看出解码操作应该有如下类型：

\[
\operatorname{解码}_x : \operatorname{码}(x) → \operatorname{Id}(\operatorname{base}, x)
\]

解码操作需要处理如下两种情况（第二个情况的类型过于复杂，第一次阅读推荐跳过）：

\[
\begin{aligned}
  &\operatorname{解码}_{\operatorname{base}} : \mathbb{Z} → \operatorname{Id}_{S¹}(\operatorname{base}, \operatorname{base}) \\
  &\operatorname{ap}_{\operatorname{解码}}({\operatorname{loop}}) : \operatorname{Id}_{\mathbb{Z} → \operatorname{Id}_{S¹}(\operatorname{base}, \operatorname{base})}
  (\operatorname{解码}_{\operatorname{base}}, \operatorname{传送}(\operatorname{ap}_{λx. \operatorname{码}(x) → \operatorname{Id}(\operatorname{base}, x)}(\operatorname{loop}), \operatorname{解码}_{\operatorname{base}})) \\
\end{aligned}
\]

对于第一个情况，对于输入的整数 $n$，我们需要返回“转了 $n$ 圈”的环路，因此可以感性地定义如下：

\[
\begin{aligned}
  &\operatorname{解码}_{\operatorname{base}}(0) = \operatorname{refl}_{\operatorname{base}}\\
  &\operatorname{解码}_{\operatorname{base}}(正~n) = \underbrace{\operatorname{loop} \cdot \operatorname{loop} \cdot \dots \cdot \operatorname{loop}}_{n~次}\\
  &\operatorname{解码}_{\operatorname{base}}(负~n) = ¬(\underbrace{\operatorname{loop} \cdot \operatorname{loop} \cdot \dots \cdot \operatorname{loop}}_{n~次})
\end{aligned}
\]

负数的情况也可以使用如下等价的定义：

\[
\operatorname{解码}_{\operatorname{base}}(负~n) = \underbrace{(¬\operatorname{loop}) \cdot (¬\operatorname{loop}) \cdot \dots \cdot (¬\operatorname{loop})}_{n~次}
\]

接下来还需要证明这个操作被“绕着 $\operatorname{loop}$ 转一圈”保持。
注意到
$\operatorname{传送}(\operatorname{ap}_{λx. \operatorname{码}(x) → \operatorname{Id}(\operatorname{base}, x)}(\operatorname{loop}), \operatorname{解码}_{\operatorname{base}})$
的类型为：

\[
\operatorname{码}(\operatorname{base}) → \operatorname{Id}(\operatorname{base}, \operatorname{base})
\]

按照定义这等于

\[
\mathbb{Z} → \operatorname{Id}_{S¹}(\operatorname{base}, \operatorname{base})
\]

一番整理后我们可以得到如下等价的命题：

\[
\prod_{n:\mathbb{Z}} \operatorname{Id}_{\operatorname{Id}_{S¹}(\operatorname{base}, \operatorname{base})}(
  \operatorname{解码}_{\operatorname{base}}(n),
  \operatorname{传送}(\operatorname{ap}_{λx. \operatorname{码}(x) → \operatorname{Id}(\operatorname{base}, x)}(\operatorname{loop}), \operatorname{解码}_{\operatorname{base}})(n)
)
\]

证明思路大致如下：

\[
\begin{aligned}
    & \operatorname{传送}(\operatorname{ap}_{λx. \operatorname{码}(x) → \operatorname{Id}(\operatorname{base}, x)}(\operatorname{loop}),
        \operatorname{解码}_{\operatorname{base}})(n) && 根据 \operatorname{传送} 对函数类型的性质 \\
  ={} & \operatorname{传送}(\operatorname{ap}_{λx. \operatorname{Id}(\operatorname{base}, x)}(\operatorname{loop}), \operatorname{解码}_{\operatorname{base}}(\operatorname{传送}(\operatorname{ap}_{\operatorname{码}}(¬\operatorname{loop}), n))) && 展开第二个 \operatorname{传送} \\
  ={} & \operatorname{传送}(\operatorname{ap}_{λx. \operatorname{Id}(\operatorname{base}, x)}(\operatorname{loop}), \operatorname{解码}_{\operatorname{base}}(n-1)) && 展开第一个 \operatorname{传送} \\
  ={} & \operatorname{loop} \cdot \operatorname{解码}_{\operatorname{base}}(n-1) && 展开解码 \\
  ={} & \operatorname{loop} \cdot \operatorname{解码}_{\operatorname{base}}(n) \cdot ¬\operatorname{loop} && 整理 \\
  ={} & \operatorname{解码}_{\operatorname{base}}(n)
\end{aligned}
\]

### 编解码互逆

思路类似，但涉及大量技术细节，因此略过，但编解码的互逆会给出如下等价：

\[
\prod_{x:S¹} \operatorname{Id}(\operatorname{Id}(\operatorname{base}, x), \operatorname{码}(x))
\]

令 $x := \operatorname{base}$ 可以得到

\[
\operatorname{Id}(\operatorname{Id}(\operatorname{base}, \operatorname{base}), \mathbb{Z})
\]

换言之，$S¹$ 的环路空间等价于整数。

## 参考文献

```bibliography
pi1s1:
  type: preprint
  title: Calculating the Fundamental Group of the Circle in Homotopy Type Theory
  author: ['Licata, Daniel R.', 'Shulman, Michael']
  year: 2013
  arxiv: '1301.3443'
```
