---
title: '$(\infty,1)$-算畴'
aliases: [∞-算畴]
categories: [高阶代数]
navboxes: [高阶代数]
---

<problems>
- “模型结构”一节需要扩充。
</problems>

**$(\infty,1)$-算畴**是[[高阶代数]]中的基本概念，
是[[算畴]]和[[多元范畴]]在 [[$(\infty,1)$-范畴]]意义下的推广，
其中，从一族对象到一个对象的多元态射构成一个 [[$\infty$-群胚]]，而不只是[[集合]]。

$(\infty,1)$-算畴可以用来刻画同伦意义下的[[代数结构]]，
包括[[结合代数]]、[[交换代数 (代数结构)|交换代数]]等。
例如，同伦意义下的结合代数是 [[$\mathbb{A}_\infty$-代数]]，
同伦意义下的交换代数是 [[$\mathbb{E}_\infty$-代数]]。

## 定义

### 通过全范畴

::: definition
令 $\mathsf{Fin}_*$ 为[[带点有限集范畴]]，其对象为 $(I, *)$，
其中 $I$ 为[[有限集]]，而 $* \in I$；态射为保持 $*$ 的映射。
记 ${\langle n \rangle} = \{ *, 1, 2, \dots, n\} \in \mathsf{Fin}_*$，
显然 $\mathsf{Fin}_*$ 与所有 ${\langle n \rangle}$ 生成的满子范畴等价。

令 $f \colon I \to J$ 为 $\mathsf{Fin}_*$ 中的态射。
若对任意 $x \in J \setminus \{*\}$，$f^{-1}(x)$ 都为单点集，
就说 $f$ 是**惰性态射**。

对任意 $n$，
记 $\rho^i \colon {\langle n \rangle} \to {\langle 1 \rangle}$ 为 $\rho^i(i) = 1, \rho^i(j) = *$
决定的态射。
:::

::: definition [$(\infty,1)$-算畴]
**$(\infty,1)$-算畴**指二元组 $\mathcal{O} = (\mathcal{O}^\otimes, p)$，其中

- $\mathcal{O}^\otimes$ 是 [[$(\infty,1)$-范畴]]，称为 $\mathcal{O}$ 的**全范畴**。

- $p \colon \mathcal{O}^\otimes \to \mathsf{Fin}_*$ 是 [[$(\infty,1)$-函子]]。

它们满足如下条件：
记 $\mathcal{O}^\otimes_{{\langle n \rangle}} = p^{-1}({\langle n \rangle})$
为 $p$ 于 ${\langle n \rangle}$ 处的纤维，则

1. 对 $\mathsf{Fin}_*$ 中的任意惰性态射 $f \colon {\langle m \rangle} \to {\langle n \rangle}$，
   及任意 $C \in \mathcal{O}^\otimes_{{\langle m \rangle}}$，
   $f$ 总可以提升为 $\mathcal{O}^\otimes$ 中的 [[纤维范畴|$p$-推出]]态射 $\bar{f} \colon C \to C'$。
   特别地，
   $f$ 诱导了 $(\infty,1)$-函子
   $f_! \colon \mathcal{O}^\otimes_{{\langle m \rangle}} \to \mathcal{O}^\otimes_{{\langle n \rangle}}$。

2. 对任意态射 $f \colon {\langle m \rangle} \to {\langle n \rangle}$，
   及
   $C \in \mathcal{O}^\otimes_{{\langle m \rangle}}, C' \in \mathcal{O}^\otimes_{{\langle n \rangle}}$，
   记
   $\operatorname{Map}_{\mathcal{O}^\otimes}^f(C, C') = p^{-1}(f) \subset \operatorname{Map}_{\mathcal{O}^\otimes}(C, C')$。

   对每个 $1 \leq i \leq n$，将 $\rho^i$ 提升为 $p$-推出态射 $\bar{\rho}^i \colon C' \to C'_i$。
   则诸 $\bar{\rho}^i$ 诱导的映射
   \[
   \operatorname{Map}_{\mathcal{O}^\otimes}^f(C, C') \to \prod_{i = 1}^n \operatorname{Map}_{\mathcal{O}^\otimes}^{\rho^i \circ f}(C, C'_i)
   \]
   为[[同伦等价]]。

3. 对任意 $C_1, \dots, C_n \in \mathcal{O}^\otimes_{{\langle 1 \rangle}}$，
   存在 $C \in \mathcal{O}^\otimes_{{\langle n \rangle}}$ 及
   $\rho^i \colon {\langle n \rangle} \to {\langle 1 \rangle}$
   的 $p$-推出提升 $C \to C_i$。

:::

::: remark
条件 3 等价于说对任意 $n$，映射 $\rho^i_!$ 诱导了 $(\infty,1)$-范畴的等价
\[
\mathcal{O}^\otimes_{{\langle n \rangle}} \simeq (\mathcal{O}^\otimes_{{\langle 1 \rangle}})^n.
\]
事实上，条件 1、2 保证了该函子是全忠实的。
:::

::: remark
将 [[$(\infty,1)$-范畴]] $\mathcal{O}^\otimes_{{\langle 1 \rangle}}$ 也记作 $\mathcal{O}$。
由上条注记，
$\mathcal{O}^\otimes_{{\langle n \rangle}}$ 的对象可以典范地记作 $C = (C_1, C_2, \dots, C_n)$，
其中 $C_i \in \mathcal{O}$。

定义 [[$\infty$-群胚]]
\[
\mathcal{O} ((C_i)_{1 \leq i \leq n}, C')
= \operatorname{Map}_{\mathcal{O}^\otimes}^\beta((C_1, \dots, C_n), C'),
\]
其中 $\beta$ 为态射 $\beta(k) = 1, \beta(*) = *$。
此空间在同伦意义下是典范的。

因此，我们可以认为 $(\infty,1)$-算畴 $\mathcal{O}^\otimes$ 包含了 $(\infty,1)$-范畴 $\mathcal{O}$
及其上配备的“多元态射”$\mathcal{O} (-, -)$ 的结构，
这些态射的复合满足类似于[[多元范畴]]的结合律，但是仅在同伦意义下成立。
这样的定义避免了对高维的结合律（例如[[五边形公理]]）的复杂讨论。
:::

::: definition
设 $(\mathcal{O}^\otimes, p)$ 为 $(\infty,1)$-算畴。
若 $f$ 为 $\mathcal{O}^\otimes$ 的态射，使得 $p(f)$ 惰性且 $f$ 是 $p$-推出，
则称 $f$ 为**惰性态射**。
:::

::: definition [$(\infty,1)$-算畴态射]
设 $(\mathcal{O}^\otimes, p)$ 和 $(\mathcal{O}^{\prime\otimes}, p')$ 均为 $(\infty,1)$-算畴。
则 $(\mathcal{O}^\otimes, p)$ 到 $(\mathcal{O}^{\prime\otimes}, p')$ 的态射即为 $(\infty,1)$-函子
$F \colon \mathcal{O}^\otimes \to \mathcal{O}^{\prime\otimes}$，
使得 $p' \circ F = p$，且 $F$ 将惰性态射映到惰性态射。
:::

## 例子

- 设 $\mathcal{C}$ 为[[多元范畴]]，
  记 $\mathcal{C}^\otimes$ 为其全范畴，则全范畴的构造自然诱导了函子
  $\mathcal{C}^\otimes \to \mathsf{Fin}_*$。不难验证其满足定义中要求的性质。

  特别地，算畴可以看作诸 $\mathcal{O}^\otimes_{{\langle n \rangle}}$ 都可缩的 $(\infty,1)$-算畴。

- $\mathsf{Fin}_*$ 配备恒等函子是 $(\infty,1)$-算畴，
  记作 $\mathsf{Comm}$ 或 $\mathbb{E}_\infty$，称为 **[[$\mathbb{E}_\infty$ 算畴]]**。
  事实上，它就是将[[交换算畴]]视为 $(\infty,1)$-算畴而得到的。

## 模型结构

## 参考文献

```bibliography
LurieHA:
  type: book
  author: Jacob Lurie
  year: 2017
  title: Higher Algebra
  url: https://www.math.ias.edu/~lurie/papers/HA.pdf
```

```terms
'$(\infty,1)$-算畴':
  en: '$(\infty,1)$-operad'
  fr: '$(\infty,1)$-opérade :f'
```
