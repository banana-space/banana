---
title: 紧合映射
categories: [一般拓扑]
notices:
  - name: 消歧义
    about: '[[拓扑学]]里的概念'
    see:
      - topic: '[[代数几何]]里的概念'
        page: 紧合态射
---

**紧合映射**是[[拓扑空间]]之间的一类[[连续映射]]。
紧合映射的[[纤维]]都为[[紧空间]]，
故可视为紧空间在[[相对观点]]下的推广。

## 定义

::: definition [紧合映射]
设 $p\colon X \to B$ 为[[拓扑空间]]之间的[[连续映射]]。
称 $p$ 为**紧合映射**，如果满足以下条件：

- 对任意 \(b \in B\)，任意一族 $X$ 的
  满足 \(p^{-1}(b) \subset \bigcup_{i\in I}U_i\) 的开集 \((U_i)_{i \in I}\)，
  都存在 $b$ 的邻域 \(V\)，以及 $I$ 的有限子集 \(J\)，满足
  \(p^{-1}(V) \subset \bigcup_{j\in J}U_{j}\)。

:::

在文献中，也常将紧合映射定义为满足
“[[紧空间|紧]][[子空间拓扑|子空间]]的[[原像]]仍是紧子空间”
的连续映射。这一定义稍弱于上述定义，
但当 $B$ 为[[紧生成空间|紧生成]] [[Hausdorff 空间]]时等价于上述定义
（@紧生成空间等价刻画）。

## 例子

- [[恒同映射]]是紧合映射。闭子空间的[[含入映射]]也是紧合映射。

- 投影映射 $p \colon X \times Y \to Y$ 紧合，
  当且仅当 $X$ 是[[紧空间]]。

## 性质

### 等价刻画

紧合映射有许多刻画方式。其中之一利用了[[滤子]]的概念。为陈述它我们引入如下概念。

::: definition {@definition:space-associated-with-filter}
令 \(\mathscr{F}\) 为集合 \(T\) 上的滤子。
定义 \(T_{\mathscr{F}} = T \sqcup \{\omega\}\) 为向 \(T\) 中额外加入一点得到的集合。
定义 \(T_{\mathscr{F}}\) 上拓扑如下：它的开集为 $T$ 中任何子集；或者为形如
\(A \sqcup \{\omega\}\) 的子集，其中 \(A \in \mathscr{F}\)。
:::

::: theorem {@theorem:characterization-properness}
令 \(p\colon X \to B\) 为拓扑空间之间的连续映射。则下述陈述等价。

1. {@item:proper-from-definition} \(p\) 为紧合映射。

2. {@item:preproper-closed} \(p\) 是[[闭映射]]，且对任何 $B$ 的紧子空间 \(K\)，
   $p^{-1}(K)$ 也是紧的。

3. {@item:perfect} \(p\) 是[[闭映射]]，且对任何 \(b \in B\)，\(p^{-1}(b)\) 是紧的。

4. {@item:filter-proper} 若 \(\mathscr{F}\) 为 \(X\) 上一滤子，且
   \(p_{\ast}\mathscr{F}\) 收敛于 \(b \in B\)，则存在
   \(x \in p^{-1}(b)\) 使得 \(x\) 为 \(\mathscr{F}\) 的聚点。

5. {@item:valuative-criterion-properness} 对任何装备了[[滤子|超滤]]的集合 \((T,\mathscr{U})\)，
   以及任意的拓扑空间范畴中的实交换图
   \[
   \begin{tikzcd}
     T \ar[hook]{d} \ar{r}{t} & X \ar{d}{p} & \\
     T_{\mathscr{U}} \ar[swap]{r}{t_{\mathscr{U}}} \ar[dotted]{ru}& B
   \end{tikzcd},
   \]
   都存在虚箭头使得整个图交换。

6. {@item:base-change-proper} 对任何连续映射 \(B' \to B\)，令 \(X' = X\times_B B'\)，
   则底变换映射 \(p'\colon X' \to B'\) 是紧合映射。

7. {@item:universally-closed} $p$ 是**泛闭映射**，
   即对任何连续映射，\(B' \to B\)，令 \(X' = X\times_B B'\)。
   则底变换映射 \(p'\colon X' \to B'\) 是闭映射。

8. {@item:product-projection-closed} 对任何拓扑空间 \(T\)，映射
   \(p\times \mathbb{1}_{T} \colon X \times T \to B \times T\)
   为闭映射。

:::

::: theorem {@紧生成空间等价刻画}
设 $p\colon X \to B$ 为拓扑空间之间的连续映射。
若 $B$ 为[[紧生成空间|紧生成]] [[Hausdorff 空间]]，则下列等价：

- $p$ 是紧合映射。

- 对 $B$ 的任何紧子空间 $K$，其原像 $p^{-1}(K)$ 是 $X$ 的紧子空间。

:::

::: proof
根据 @theorem:characterization-properness
[第 2 款](@item:preproper-closed)，只需证明 $p$ 是闭映射。
令 $A$ 为 $X$ 的闭子集。对任何 $B$ 的紧子集 $K$，
$p(A) \cap K = p(A \cap p^{-1}(K))$。根据假设，
$p^{-1}(K)$ 紧。由于 $A \cap p^{-1}(K)$ 是 $p^{-1}(K)$
的闭子集，它也是紧的。因此 $p(A \cap p^{-1}(K))$ 是紧空间。
由于 $B$ 是 Hausdorff 空间，$p(A \cap p^{-1}(K))$ 是闭的。
由于 $B$ 紧生成，$p(A)$ 是闭的。这就完成了证明。
:::

```terms
紧合映射:
  en: proper map
  de: eigentliche Abbildung
  fr: application propre
  grc: ἴδιος ἀπεικονισμός
  la: adhibitio propria
```
