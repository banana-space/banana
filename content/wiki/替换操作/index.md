---
title: 替换操作
categories: [类型论]
navboxes: [类型论]
---

在[[类型论]]中，**替换操作**是指：

- 对于表达式 $u$ 和 $v$ 以及在 $u$ 中出现的一个[[变量名]] $x$ 而言，
  将 $u$ 中的 $x$ 替换为 $v$ 的操作。

- 同时进行多组如上所述操作的操作。

我们使用 $u[x\mapsto v]$、$u[x:=v]$ 或者 $u[v/x]$ 来表示替换操作。

## 基本思想

替换操作需要保证类型正确，比如考虑表达式 $x:\mathbb{N} \vdash x+1$，
此时就要求 $x$ 必须得被替换成一个
$\mathbb{N}$ 类型的实例。在类型论里，如果有表达式 $Γ\vdash u$，
其中 $Γ$ 是一个[[语境]]，那么对它的替换一般是将 $Γ$
中的变量一次性全部替换掉，这意味着对于 $Γ$ 里的每个变量，都需要有一个对应的表达式去替换。

假设 $σ$ 代表一组表达式，$Γ$ 代表一组类型，那么用 $σ:Γ$ 表示
“$σ$ 里的第 i 个表达式拥有 $Γ$ 里第 i 个类型”。
如果 $σ$ 里的表达式是在一个语境 $Δ$ 里定义的，那么又记作

\[
Δ\vdash σ:Γ
\]

这里 $σ$ 就代表了一个替换操作。它的用法就是给定任意 $Γ\vdash u$，
这个 $u$ 几乎可以是任何类型论中的研究对象（值、类型、语境，甚至是其它的替换操作），
然后将其中对 $Γ$ 的引用替换掉，而替换后的结果则会引用到 $Δ$ 中的变量，
因为 $σ$ 里对 $Δ$ 的引用被带入进了 $u$。替换结果记作 $uσ$，
于是有 $Δ\vdash uσ$。

### 作为态射

因为一个替换 $σ$ 是由一组值组成的，所以我们可以对替换进行替换，
具体来说就是将某个替换中所有的值全部用另一个替换操作掉。
写成推理规则的话，不难发现它有如下类型：

$$
\cfrac{{Γ\vdash σ:Γ'} \quad
{Γ'\vdash Γ:Γ''}}
{Γ\vdash Γσ : Γ''}
$$

这个“对替换进行替换”的操作是满足[[结合律]]的，再加上显然存在的“什么也不做”的替换
$Γ\vdash \mathbb 1_{Γ}:Γ$作为[[恒同态射]]，可以得到一个以替换为态射的范畴，
这便是**语境的范畴**，记作 $\mathsf{Ctx}$。
[[Vladimir Voevodsky]]称之为**C 系统**。

### 作为函子

<see>[[概括范畴]]</see>

替换操作在[[范畴语义]]的视角下是[[纤维范畴]]的诱导函子。

## 符号

记号 $u[v/x]$ 可以这么理解：首先类比分式的乘法 $u\times \frac v x$，
这个过程将 $u$ 中的 $x$ 约掉，再将结果乘以 $v$。这个过程类似替换操作的
“将 $u$ 中的 $x$ 的引用替换为 $v$”。

但实际上替换操作的符号有非常多变种，
以下是一些例子，部分来自[MathOverflow](https://mathoverflow.net/q/243084/134524)和[@Oracle]：

- [[Haskell Curry]] 使用 $[v/x]u$（前置、名字在后，使用除号、中括号）。

- [[Alfred Tarski]] 使用 $u(v/x)$（后置、名字在后，使用除号、小括号）。

- [[Kurt Gödel]] 使用 $\operatorname{Subst} u{v\choose x}$（后置、名字在下，使用组合符号）。

- $n$Lab 使用 $u[v/x]$（后置、名字在后，使用除号、中括号）。

- [[Alonzo Church]] 使用 $S^x_v u|$（前置、名字在上，使用上下标和竖线）。

- 现代类型论论文中，可能会使用 $\set{}$、$()$、
  $\llbracket\rrbracket$ 或者 $\lBrace \rBrace$ 代替中括号，
  可能会使用 $[x\to v]$、$[v\leftarrow x]$、$[x:=v]$、$[{}^v/{}_x]$、$[v\backslash x]$、
  $[x\backslash v]$、$[x/v]$、$[v/x]$、$[\frac v x]$ 等符号表示变量替换。
  甚至有同一篇文章中使用互斥的符号的情况，参见[@Oracle]。

## 具体情况

<see>[[简单类型 lambda 演算]]、[[依值类型论]]</see>

## 参考文献

```bibliography
Oracle:
  type: article
  author: 'Steele Jr., Guy L.'
  year: 2017
  title: It’s Time for a New Old Language
  publisher: Oracle
  url: https://groups.csail.mit.edu/mac/users/gjs/6.945/readings/Steele-MIT-April-2017.pdf
```

```terms
替换操作:
  en: substitution
```
