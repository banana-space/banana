---
title: '$\mathbb{E}_n$-代数'
aliases: [En-代数, E1-代数, E2-代数, '$\mathbb{E}_1$-代数', '$\mathbb{E}_2$-代数']
categories: [高阶代数]
navboxes: [高阶代数]
---

**$\mathbb{E}_n$-代数**，
也就是 [[$\mathbb{E}_n$ 算畴]]上的 [[$(\infty, 1)$-算畴代数]]，
是[[交换幺半群]]在[[高阶代数]]中的推广。
大致来说，
$\mathbb{E}_n$-代数是某个[[对称幺半 $(\infty, 1)$-范畴]] $\mathcal{C}$ 中的对象 $X$，
带有[[二元运算]] $X \otimes X \to X$，
并满足在不超过 $n$ 阶同伦的意义下相容的[[交换律]]与[[结合律]]。
例如，在[[拓扑空间范畴]]这一对称幺半 $(\infty, 1)$-范畴中，
[[拓扑空间]]的 $n$ 阶[[环路空间]]就有 $\mathbb{E}_n$-代数的结构。

另一方面，$\mathbb{E}_n$-代数也可以视为带有 $n$ 个相容的结合运算的结构
（@相容结合）。
对于 $n$ 阶环路空间，在不同方向上的复合就是这 $n$ 个运算。

当底范畴 $\mathcal{C}$ 的同伦层级小于 $n$ 时，
$\mathbb{E}_n$-代数等价于[[交换代数 (范畴论)|交换代数]]（@截断）。
这一事实是[[Eckmann–Hilton 论证]]的推广，
后者大致表明了集合范畴中的 $\mathbb{E}_2$-代数是[[交换幺半群]]。

$\mathbb{E}_n$-代数使用 [[$(\infty, 1)$-算畴]]的语言来严格定义，
具体来说，某个[[对称幺半 $(\infty,1)$-范畴]] $\mathcal{C}$ 中的
$\mathbb{E}_n$-代数就是其中
[[$\mathbb{E}_n$ 算畴]]的[[(∞,1)-算畴代数|算畴代数]]。

## 定义

::: definition [$\mathbb{E}_n$-代数]
[[对称幺半 $(\infty, 1)$-范畴]] $\mathcal{C}$
中的 **$\mathbb{E}_n$-代数**是 [[$\mathbb{E}_n$ 算畴]]在其中的
[[$(\infty, 1)$-算畴代数]]。
:::

## 例子

- 对[[带点拓扑空间|带点拓扑空间范畴]]的对象 $X$，
$X$ 上的 $n$ 阶[[环路空间]] $\Omega^n X$ 是 $\mathbb{E}_n$-代数。
反之可以证明，
任意[[群状]] $\mathbb{E}_n$-代数均[[弱同伦等价]]于某个 $\Omega^n X$。

- [[对称幺半 $(\infty,1)$-范畴]] $\mathcal{C}$ 中的 $\mathbb{E}_0$-代数就是
其中的对象 $X$ 配备态射 $\mathbf{1}\to X$，
其中 $\mathbf{1}$ 为 $\mathcal{C}$ 的[[幺半范畴|单位对象]]。

- $\mathbb{E}_1$-代数等价于[[代数对象|结合代数]]，
即 [[$\mathbb{A}_\infty$-代数]]。

- 在[[集合范畴]]中，$\mathbb{E}_1$-代数等价于[[幺半群]]；
而对 $n\geq 2$，$\mathbb{E}_n$-代数等价于[[交换幺半群]]
（在 @截断 的观点下，这是因为集合范畴是 [[范畴|$1$-范畴]]）。

- 作为上一例的推广，
[[积幺半范畴]]中的 $\mathbb{E}_1$-代数等价于其中的[[代数对象|幺半对象]]，
而对 $n\geq 2$，$\mathbb{E}_n$-代数等价于[[交换幺半对象]]。

- 在[[范畴的范畴]]（视为 [[$(2,1)$-范畴]]中），
$\mathbb{E}_1$-代数等价于[[幺半范畴]]；
$\mathbb{E}_2$-代数等价于[[辫幺半范畴]]；
而对 $n\geq 3$，$\mathbb{E}_n$-代数等价于[[对称幺半范畴]]
（在 @截断 的观点下，这是因为范畴的范畴是 [[$2$-范畴]]）。

## 性质

$\mathbb{E}_n$-代数描述了[[交换律]]与[[结合律]]不超过 $n$ 阶的相容性。
下面的命题说明如果范畴没有更高阶的结构，
则 $\mathbb{E}_n$-代数等价于交换代数，
即 [[$\mathbb{E}_\infty$-代数]]。

::: proposition {@截断}
如[[对称幺半 $(\infty, 1)$-范畴]] $\mathcal{C}$
是 [[n-范畴|$(n-1)$-范畴]]，
则其上 $\mathbb{E}_n$-代数的范畴
$\mathbb{E}_n \text{-} \mathsf{Alg} (\mathcal{C})$
等价于 [[$\mathbb{E}_\infty$-代数]]的范畴
$\mathbb{E}_\infty \text{-} \mathsf{Alg} (\mathcal{C})$。
:::

以下的命题表明了 $\mathbb{E}_n$-代数也可以视为带有 $n$ 个相容的[[结合运算]]
（即 $\mathbb{E}_1$-代数的结构）的结构。

::: proposition {@相容结合}
对自然数 $n, n'$，有范畴等价
\[
\mathbb{E}_n \text{-} \mathsf{Alg}
(\mathbb{E}_{n'} \text{-} \mathsf{Alg} (\mathcal{C}))
\simeq \mathbb{E}_{n+n'} \text{-} \mathsf{Alg} (\mathcal{C}).
\]
:::

```terms
'$\mathbb{E}_n$-代数':
  en: '$\mathbb{E}_n$-algebra'
  fr: '$\mathbb{E}_n$-algèbre :f'
```
