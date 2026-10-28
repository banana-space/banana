---
title: 单子性
categories: [高阶代数]
navboxes: [高阶代数]
---

<problems>
- “Lurie–Barr–Beck 定理”一节的注及其后的说明中，“条件 1 和条件 2”似乎应指条件 2 中的两个子条件（条件 1 即单子性本身）。
</problems>

::: convention
在本文中，

- [[范畴]]都指 [[$(\infty,1)$-范畴]]。

:::

考虑[[伴随函子]]
\[
\begin{tikzcd}
  \mathcal{C}\ar[r, bend left,"F"]\ar[r,phantom,"\bot"] & \mathcal{D} \ar[l, bend left,"G"]
\end{tikzcd}
\]
在[[单子]]词条中，可以得知 $T = GF$ 为 $\mathcal{C}$ 上的单子。
自然地，可以考虑 $T$ 上的左模范畴 $\mathsf{LMod}_T(\mathcal{C})$。
此时，我们可以将 $T$ 上的左模视为对于 $\mathcal{D}$ 中信息的一种恢复
（比如 @Set-Mon）。
当 $T$ 上的左模可以完全地恢复出 $\mathcal{D}$ 中信息时，
我们就说 $\mathcal{D}$ 在 $\mathcal{C}$ 具有**单子性**。

## 定义

以下符号解释可参见[[单子]]词条的高阶范畴版本定义。

考虑复合函子
\[
\mathsf{End}(\mathcal{C}) \times \mathsf{Fun}(\mathcal{D},\mathcal{C}) \to \mathsf{Fun}(\mathcal{D},\mathcal{C}),
\quad (T,G) \mapsto T \circ G.
\]
这会使得 $\mathsf{Fun}(\mathcal{D},\mathcal{C})$ 在 $\mathsf{End}(\mathcal{C})$
上[[线性范畴|线性]]。
此时，
可以考虑单子 $T \in \mathsf{Alg}(\mathsf{End}(\mathcal{C}))$ 在
$\mathsf{Fun}(\mathcal{D},\mathcal{C})$ 上的左模。

::: definition
令 $G \colon \mathcal{D} \to \mathcal{C}$ 为函子，
$T$ 为 $\mathcal{C}$ 上的单子。
称 $G$ 为 $T$ 上的左模，
是指存在 $\overline{G} \in \mathsf{LMod}_T(\mathsf{Fun}(\mathcal{D},\mathcal{C}))$，
使得其在遗忘函子
$U_T \colon \mathsf{LMod}_T(\mathsf{Fun}(\mathcal{D},\mathcal{C})) \to \mathsf{Fun}(\mathcal{D},\mathcal{C})$
下的像为 $G$。
此时将左作用 $T \circ \overline{G} \to \overline{G}$ 简写为 $T \circ G \to G$。
:::

::: definition
考虑伴随
\[
\begin{tikzcd}
\mathcal{C}\ar[r, bend left,"F"]\ar[r,phantom,"\bot"] & \mathcal{D}, \ar[l, bend left,"G"]
\end{tikzcd}
\]
令 $T$ 为 $\mathcal{C}$ 上的单子。
如果 $G$ 为 $T$ 上的左模，
则称 $T$ 是 $G$ 上的**自同态单子**，
是指左作用 $a \colon T \circ G \to G$ 诱导出 $\mathsf{End}(\mathcal{C})$ 中的同构
\[
T \xRightarrow{\mathrm{id}_T \times u} T \circ G \circ F \xRightarrow{a \times \mathrm{id}_F} G \circ F,
\]
此处 $u \colon \operatorname{id}_{\mathcal{C}} \Rightarrow G \circ F$ 为该伴随的单位。
:::

不难发现，此时 $T$ 在 $G$ 上的作用诱导出函子
\[
G' \colon \mathcal{D} \to \mathsf{LMod}_T(\mathcal{C}), \quad d \mapsto G(d).
\]
且 $G$ 可写为复合 $\mathcal{D} \xrightarrow{G'} \mathsf{LMod}_T(\mathcal{C}) \to \mathcal{C}$。

::: definition
考虑伴随
\[
\begin{tikzcd}
\mathcal{C}\ar[r, bend left,"F"]\ar[r,phantom,"\bot"] & \mathcal{D}, \ar[l, bend left,"G"]
\end{tikzcd}
\]
令 $T$ 为 $G$ 上的自同态单子。
若 $G' \colon \mathcal{D} \to \mathsf{LMod}_T(\mathcal{C})$ 为范畴等价，
则称 $G$ 使得 $\mathcal{D}$ 在 $\mathcal{C}$ 上具有**单子性**。
:::

## 例子

::: example {@Set-Mon}
考虑[[自由–遗忘伴随]]
\[
\begin{tikzcd}
\mathsf{Set} \ar[r, bend left,"F"]\ar[r,phantom,"\bot"] & \mathsf{Mon} \ar[l, bend left,"U"]
\end{tikzcd}
\]
此时单子 $T = F \circ U$ 将 $X$ 映为
\[
T(X) = \coprod_{n \geq 0} X^n,
\]
即 $T(X)$ 中的元素为一串长度为 $n \in \mathbb{N}$ 的“字”$(x_1,\cdots,x_n)$。
此时伴随对的单位将 $x \in X$ 映为长度为 $1$ 的字 $(x)$。
此时余单位 $c$ 所诱导出的函子 $UcF \colon T^2(X) \to X$ 的效果可视为将“字的字”展开，比如
\[
((x_1,\cdots,x_n),(y_1,\cdots,y_m),\cdots) \mapsto (x_1,\cdots,x_n,y_1,\cdots,y_m,\cdots).
\]
而此时指定左 $T$-模 $M$，
相当于对于集合 $M$ 上每个字 $(x_1,\cdots,x_n)$ 指定乘法 $a(x_1,\cdots,x_n) = x_1\cdots x_n$。
满足：

- $a(x) = x$；

- $a(a(x_1,\cdots,x_n),a(y_1,\cdots,y_m),\cdots) = a(x_1,\cdots,x_n,y_1,\cdots,y_m,\cdots)$。

因此可知 $T$-左模即为幺半群。
更进一步可知，自由函子 $F$ 使得 $\mathsf{Mon}$ 在 $\mathsf{Set}$ 上具有单子性，
即 $\mathsf{LMod}_T(\mathsf{Set}) \simeq \mathsf{Mon}$。
:::

更多例子建议参考[@LurieHA, §[4.7.3](https://www.math.ias.edu/~lurie/papers/HA.pdf#subsection.4.7.3)]中的例子。

## Lurie–Barr–Beck 定理

<see>[[Barr–Beck–Lurie 定理]]</see>

以下定理精准直观地描绘出了单子性所需满足的条件。

::: theorem [Lurie–Barr–Beck] {@Lurie-Barr-Beck}
考虑伴随
\[
\begin{tikzcd}
\mathcal{C}\ar[r, bend left,"F"]\ar[r,phantom,"\bot"] & \mathcal{D}, \ar[l, bend left,"G"]
\end{tikzcd}
\]
则以下条件等价：

1. {@1} $G$ 使得 $\mathcal{D}$ 在 $\mathcal{C}$ 上具有单子性；

2. {@2} $G$ 满足以下条件：
   - 函子 $G \colon \mathcal{D} \to \mathcal{C}$ 是保守的，
     即 $\mathcal{D}$ 中态射 $g \colon D \to D'$ 为 $\mathcal{D}$ 中的同构
     当且仅当 $G(g)$ 为 $\mathcal{C}$ 中的同构；
   - 令 $V$ 为 $\mathcal{D}$ 中的 $G$-[[分裂单纯对象]]。
     则 $V$ 在 $\mathcal{D}$ 中存在余极限，
     且该余极限被 $G$ 所保持。
:::

::: remark
可将[条件 1](@1)和[条件 2](@2)改写为：

- 令 $V \colon \mathbb{\Delta}^{\mathrm{op}} \to \mathcal{D}$ 为 $G$-分裂对象。
  则其延拓 $\overline{V} \colon \mathbb{\Delta}^{\mathrm{op},\rhd} \to \mathcal{D}$ 为余极限图表
  当且仅当 $G \circ \overline{V}$ 为余极限图表。
:::

最后来解释 @Lurie-Barr-Beck 所言何物。
令 $\mathcal{C}$ 为范畴，且将其视为 $\mathsf{End}(\mathcal{C})$-线性范畴。
则有交换图
\[
\begin{tikzcd}
  \mathsf{LMod}(\mathcal{C}) \ar[rr,"\theta"]\ar[dr,"p"'] && \mathcal{C} \times \mathsf{Alg}(\mathsf{End}(\mathcal{C}))\ar[dl,"p'"]\\
  & \mathsf{Alg}(\mathsf{End}(\mathcal{C})),
\end{tikzcd}
\]
其中 $\theta$ 为 $p$ 以及遗忘函子 $\mathsf{LMod}(\mathcal{C}) \to \mathcal{C}$ 的乘积。
此时容易发现 $p$ 与 $p'$ 均为[[拉回纤维化]]。
且 $\theta$ 为拉回纤维化间的函子，即保持拉回边的函子。
因此考虑 $p$ 和 $p'$ 所给出的直化 $F$ 和 $F'$。
$\theta$ 诱导出自然变换 $F \Rightarrow F'$。
此处我们可以较为显式地给出 $F$ 和 $F'$ 长什么样：

- $F \colon \mathsf{Alg}(\mathsf{End}(\mathcal{C}))^{\mathrm{op}} \to \mathsf{Cat}$
  将单子 $T$ 映为其在 $\mathcal{C}$ 上的左模范畴 $\mathsf{LMod}_T(\mathcal{C})$。

- $F' \colon \mathsf{Alg}(\mathsf{End}(\mathcal{C}))^{\mathrm{op}} \to \mathsf{Cat}$
  为取值于 $\mathcal{C}$ 的常值函子。

因此可将该自然变换视为函子
\[
\alpha \colon \mathsf{Alg}(\mathsf{End}(\mathcal{C}))^{\mathrm{op}} \to \mathsf{Cat}_{/\mathcal{C}}.
\]
此时不难发现 $\alpha$ 会是全忠实的，
而 @Lurie-Barr-Beck 实则在说 $\alpha$ 的本质像是什么，
即 $G \colon \mathcal{D} \to \mathcal{C}$ 落在 $\alpha$ 的本质像中，
当且仅当其具有左伴随，且其满足[条件 1](@1)和[条件 2](@2)。

因此，得到以下观点
\[
\{\mathcal{C} \, 上的单子\} \hookrightarrow \{\mathcal{C}\,上的范畴\}.
\]

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
单子性:
  en: monadic
```
