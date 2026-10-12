---
title: 自然数（类型论）
aliases: [自然数类型]
categories: [类型论]
navboxes: [类型论]
---

**自然数类型**是[[自然数]]在[[类型论]]中的类比，它在[[简单类型论]]和[[依值类型论]]里都可以定义，
但规则稍有不同。

## 类型规则 {@rules}

沿用[[自然数]]的记号，自然数类型记作 $\mathbb{N}$。

### 构造规则

以下规则模仿 [[Peano 公理]]和[[归纳法]]。

\[
Γ⊢ 0:\mathbb{N}
\quad
\cfrac{Γ⊢ u:\mathbb{N}}{Γ⊢ s(u):\mathbb{N}}
\]

不引起混淆的情况下，可以将 $s(u)$ 写作 $s~u$。

::: remark
此处刻意避免了将后继操作定义为一个具有[[函数类型]]的操作符，
这是为了确保函数类型的[[典范形式]]只有它的构造规则。在实际使用时，
可以使用 $λx. s(x)$ 作为后继操作的函数形式。
:::

常常使用 $1$ 表示 $s~0$，$2$ 表示 $s(s~0)$，以此类推，
但 $1$ 也表示[[单位类型]]，因此最好不要在两者同时出现的时候使用这种简写。

可以直接将 $\mathbb{N}$ 视为由如上两构造子生成的[[归纳类型]]并自动得到[[消去规则]]，
也可以单独给出消去规则。

### 消去规则

简单类型的消去规则：

\[
\cfrac{Γ⊢ a: A\quad
     Γ⊢ b:\mathbb{N}→ A→ A \quad
     Γ⊢ u : \mathbb{N}}
 {Γ⊢ \operatorname{rec}_{\mathbb{N}}(a, b, u) : A}
\]

简单类型的计算规则：

\[
{\operatorname{rec}_{\mathbb{N}}(a, b, 0)=a:A}
\\
{\operatorname{rec}_{\mathbb{N}}(a, b, s~u)=b(u, \operatorname{rec}_{\mathbb{N}}(a, b, u)):A}
\]

[[依值类型论]]中的消去规则需要用到[[宇宙 (类型论)|宇宙]]：

\[
\cfrac{Γ⊢ P:\mathbb{N} → \mathcal U\quad
     Γ⊢ a: P(0)\quad
     Γ⊢ b: \prod_{n:\mathbb{N}} P(n)→ P(s~n) \quad
     Γ⊢ u : \mathbb{N}}
 {Γ⊢ \operatorname{rec}_{\mathbb{N}}(P, a, b, u) : P(u)}
\]

计算规则基本一致，不再赘述。

自然数类型的[[唯一性规则]]十分复杂，参见该词条。

## 局限

### 加法

使用以上任意一种方式定义的 $\operatorname{rec}_{\mathbb{N}}$ 都不能定义出二元函数
$+:\mathbb{N} → \mathbb{N} → \mathbb{N}$
使得对于任意 $Γ⊢ a:\mathbb{N}$ 同时满足如下两条计算规则：

\[
\begin{aligned}
Γ ⊢ a+0 &= a :\mathbb{N} \\
Γ ⊢ 0+a &= a :\mathbb{N}
\end{aligned}
\]

使用一些[[模式匹配]]的变种可以解决该问题。

## 性质

::: theorem
对于任意 $n:\mathbb{N}$，如下命题不成立：
\[
\operatorname{Id}(0, s~n)
\]
换言之，如下命题成立：
\[
\operatorname{Id}(0, s~n) → \varnothing
\]
:::

相关定义见[[相等类型]]、[[单位类型]]和[[空类型]]，注意 $1$ 是单位类型而不是自然数 $s(0)$。

::: proof
假设存在 $p:\operatorname{Id}(0, s~n)$，定义
\[
\begin{aligned}
  f&:\mathbb{N} → \mathcal U\\
  f&(n):=\operatorname{rec}_{\mathbb{N}}(1, λm.λx.~\varnothing, n)
\end{aligned}
\]
注意 $f(0)=1, f(s~n)=\varnothing$。
根据相等类型的性质，可以从 $p$ 得到 $q:\operatorname{Id}(f(0), f(s~n))$，
即 $q:\operatorname{Id}(1, \varnothing)$。
再次根据相等类型的性质，可以从 $q$ 推出如下函数存在：
\[
g:1 → \varnothing
\]
应用该函数即可得到空类型的实例 $g(\star) :\varnothing$。
:::

## 范畴语义

$\mathbb{N}$ 可以定义为一种[[归纳类型]]，它对应的[[自函子]]是：

\[
F(X) = 1 + X
\]

在这个视角下，$\operatorname{rec}_{\mathbb{N}}$
就对应了这个[[始代数]]诱导的唯一态射，如下图所示：

\[
\begin{tikzcd}
  1 \ar[r, "0"] \ar[dr, "a"'] & \mathbb{N} \ar[r, "s"]
    \ar[d, dashed, "\operatorname{rec}_{\mathbb{N}}"] & \mathbb{N}
    \ar[d, dashed, "\operatorname{rec}_{\mathbb{N}}"] \\
  & A \ar[r, "b"] & A
\end{tikzcd}
\]

上图也可以画成自环的形式：

\[
\begin{tikzcd}
  1 \ar[r, "0"] \ar[dr, "a"'] & \mathbb{N} \ar[out=120,in=60,loop, "s"]
    \ar[d, dashed, "\operatorname{rec}_{\mathbb{N}}"]  \\
  & A \ar[out=240,in=300,loop, "b"']
\end{tikzcd}
\]

不过一般不这么画，因为此时“图表交换”的定义不明确。
以该交换图作为[[万有性质]]定义的对象 $\mathbb{N}$ 叫做**自然数对象**。
