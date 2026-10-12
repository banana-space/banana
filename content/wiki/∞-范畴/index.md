---
title: '$\infty$-范畴'
aliases: [无穷范畴]
categories: [高阶范畴论]
navboxes: [高阶范畴论]
---

**$\infty$-范畴**（或**无穷范畴**）
是[[高阶范畴论]]的主要研究对象，
是[[范畴]]、[[$2$-范畴]]、[[$n$-范畴]]等概念的推广。
大致来说，$\infty$-范畴由以下信息组成：

- 一族[[对象]]。

- 在对象 $x, y$ 之间，可以有 [[$1$-态射]] $f \colon x \to y$。

- 在 $1$-态射 $f, g \colon x \to y$ 之间，可以有 [[$2$-态射]]
  $\alpha \colon f \Rightarrow g$。

\[
\begin{tikzcd}[column sep=4em]
  x
  \ar[r, bend left=45, looseness=1.25, "f"]
  \ar[r, bend right=45, looseness=1.25, "g"']
  \ar[r, phantom, "\Downarrow"]
  \ar[r, phantom, pos=.65, "\scriptstyle \alpha"]
  & y
\end{tikzcd}
\]

- 在 $2$-态射 $\alpha, \beta \colon f \Rightarrow g$ 之间，
  可以有 $3$-态射 $\xi \colon \alpha \Rrightarrow \beta$。

\[
\begin{tikzcd}[column sep=6em]
  x
  \ar[r, bend left=45, looseness=1.25, "f"]
  \ar[r, bend right=45, looseness=1.25, "g"']
  \ar[r, phantom, pos=.35, "\Longrightarrow"{rotate=-90}]
  \ar[r, phantom, pos=.25, "\scriptstyle \alpha"]
  \ar[r, phantom, pos=.65, "\Longrightarrow"{rotate=-90}]
  \ar[r, phantom, pos=.75, "\scriptstyle \beta"]
  \ar[r, phantom, pos=.51, "\Rrightarrow"]
  \ar[r, phantom, pos=.5, shift left=3, "\scriptstyle \xi"]
  & y
\end{tikzcd}
\]

- 如此下去，直至无穷。

在文献中，“$\infty$-范畴”也常常特指 [[$(\infty, 1)$-范畴]]（@infty-n），
但我们不采用这种约定。

## 想法

我们先给出 $\infty$-范畴的一个典型例子。

::: example [拓扑空间的 $\infty$-范畴] {@拓扑空间例}
[[拓扑空间]]构成的 $\infty$-范畴由以下信息组成：

- 其对象为所有[[拓扑空间]]。

- 其 $1$-态射为拓扑空间之间的[[连续映射]]。

- 其 $2$-态射为连续映射之间的[[同伦]]。

- 其 $3$-态射为同伦之间的同伦，

- ...

:::

在此例中，注意到同伦（即 $2$-态射）的复合并不严格满足[[结合运算|结合律]]，
因为将三个同伦复合起来的两种方式之间相差一个重参数化。
也就是说，结合律只在相差高阶同伦的意义下满足。

事实上，
正如在普通范畴中，我们只在相差[[同构]]的意义下谈论其对象，
在 $\infty$-范畴中，我们并不谈论具体的某个对象、态射、高阶态射，
而都是只在相差同伦的意义下谈论它们。
它们应满足的性质，例如复合的结合律、单位律等，也都只在相差同伦的意义下满足。
这些同伦又需要满足相差更高阶同伦的运算律，直至无穷。
这是 $\infty$-范畴相较于普通范畴的主要不同之处。

一类具有较完善理论的 $\infty$-范畴称为 [[$(\infty, n)$-范畴]]。
这里给出不严格的定义。

::: definition [$(\infty, n)$-范畴] {@infty-n}
设 $n \geq 0$ 为[[自然数]]。
**[[$(\infty, n)$-范畴]]** 是指满足以下性质的 $\infty$-范畴：

- 对任意 $m > n$，该 $\infty$-范畴的所有 $m$-态射都在同伦意义下可逆。

为避免歧义，
一般的 $\infty$-范畴也被称为 **$(\infty, \infty)$-范畴**。
:::

例如，@拓扑空间例 中的 $\infty$-范畴是 [[$(\infty, 1)$-范畴]]，
因为[[连续映射]]间的同伦总是可逆的。

## 定义

在 $\infty$-范畴论中，我们常常将 $\infty$-范畴视作一种抽象的对象，
并通过多种方式来描述它，每种方式就能给出 $\infty$-范畴的一种定义。
这些定义是互相等价的，
我们将其视为 $\infty$-范畴的不同模型。
下面列举一些常见的观点。

### 通过单纯集

一种较常用的方法是，将 $\infty$-范畴定义为满足某种条件的[[单纯集]]。
单纯集的 $0$ 维单形对应了 $\infty$-范畴的[[对象]]，
$1$ 维单形对应了 $\infty$-范畴的 [[$1$-态射]]，
而高维单形则描述了态射间的同伦。具体来说，

- **$(\infty, 0)$-范畴**，即 **[[$\infty$-群胚]]**，
  定义为 [[Kan 复形]]。

- **[[$(\infty, 1)$-范畴]]** 定义为[[拟范畴]]。

但这种方法只能定义上述两种范畴，
而无法定义 $(\infty, 2)$-范畴或更高的 $\infty$-范畴。

### 通过内范畴

另一种方法是在 $\infty$-范畴论中考虑 [[$n$ 重范畴]]，以定义 [[$(∞, n)$-范畴]]。
大致来说，从 [[$\infty$-群胚]]的范畴 $\infty\text{-}\mathsf{Grpd}$ 出发，
做 $n$ 次[[内 $(∞, 1)$-范畴]]的操作，得到的就是“$n$ 重 $(\infty, 1)$-范畴”。
但该范畴含有多余的信息，例如，
像在普通的 $n$ 重范畴中一样，$1$-态射可以有 $n$ 个不同的方向，
这并不是 $(∞, n)$-范畴应该有的信息。
因此，我们再要求这些方向中，除了其中一个以外，其余都是平凡的。
这样就能得到正确的 $(∞, n)$-范畴的概念。

这一想法可以借助 [[$n$ 重完备 Segal 空间]]的概念而严格写下来。
具体而言，在这种方法中，

- **$(\infty, 0)$-范畴**，即 **[[$\infty$-群胚]]**，
  定义为 [[Kan 复形]]。

- **[[$(\infty, 1)$-范畴]]** 定义为[[完备 Segal 空间]]。

- **[[$(\infty, n)$-范畴]]** 定义为 [[$n$ 重完备 Segal 空间]]。

### 一般的 $\infty$-范畴

一般的 $\infty$-范畴，即 $(\infty, \infty)$-范畴，
并没有公认的定义，但一种定义方式如下。
如果已经定义了 [[$(∞, n)$-范畴]]，则可以从它出发而定义 $(\infty, \infty)$-范畴。
大致来说，$(\infty, \infty)$-范畴的范畴可以定义为[[极限 (范畴论)|极限]]
\[
\lim \Bigl(
  \cdots \to (\infty, 2) \text{-} \mathsf{Cat}
  \to (\infty, 1) \text{-} \mathsf{Cat}
  \to (\infty, 0) \text{-} \mathsf{Cat}
\Bigr).
\]
也就是说，一个 $(\infty, \infty)$-范畴就是对每个 $n$
给出一个 $(\infty, n)$-范畴 $\mathcal{C}_n$，
使得 $\mathcal{C}_{n-1}$ 由 $\mathcal{C}_n$ 扔掉不可逆 $n$-态射而得。
参见 [@MO134099]。

## 参考文献

$(\infty, 1)$-范畴论的标准参考：

```bibliography
Lurie2009:
  type: book
  title: Higher topos theory
  author: 'Lurie, Jacob'
  year: 2009
  series: Ann. Math. Stud.
  number: 170
  publisher: Princeton University Press
  doi: 10.1515/9781400830558
  zbmath: '1175.18001'
  url: https://people.math.harvard.edu/~lurie/papers/highertopoi.pdf
```

以下讨论了一般的 $(\infty, \infty)$-范畴的定义：

```bibliography
MO134099:
  type: online
  site: MathOverflow
  title: 'Is there an accepted definition of $(∞,∞)$ category?'
  url: https://mathoverflow.net/q/134099
```

```terms
'$\infty$-范畴':
  en: '$\infty$-category'
  de: '$\infty$-Kategorie :f'
  fr: '$\infty$-catégorie :f'
无穷范畴:
  en: infinity category
  de: Unendlich-Kategorie :f
  fr: catégorie infinie :f
```
