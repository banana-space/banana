---
title: 完备 Segal 空间
categories: [高阶范畴论]
notices:
  - name: 问题
    items:
      - “模型范畴结构”一节需要扩充。
navboxes: [同伦代数, 高阶范畴论]
---

在[[高阶范畴论]]中，
**完备 Segal 空间**是 [[$(\infty, 1)$-范畴]]的一种模型，
即定义 $(\infty, 1)$-范畴的一种方式。
完备 Segal 空间是一类具有良好性质的 [[Segal 空间]]。

具体而言，对 Segal 空间 $X$，它看起来像是 $(\infty, 1)$-范畴，
并带有一层冗余的信息，即所有 [[$n$-态射]]不仅构成[[集合]]，
还构成[[空间]]，即 [[Kan 复形]] $X_n$。
而 $(\infty, 1)$-范畴本身已经具备足够的信息，
以告诉我们应该如何将 $n$-态射的集合视为空间。
当这些信息与 Segal 空间的结构所提供的信息一致时，
该 Segal 空间就是完备 Segal 空间，
它与 $(\infty, 1)$-范畴含有同样的信息，故可用于定义 $(\infty, 1)$-范畴。

需要注意的是，使用完备 Segal 空间来定义 $(\infty, 1)$-范畴时，
并不能直接使用 Segal 空间的同构来描述 $(\infty, 1)$-范畴的[[范畴等价]]，
因为后者更弱，正如普通范畴间的范畴等价弱于[[范畴同构]]。
该现象可以通过[[模型范畴]]的理论来准确地描述，
也就是说，$(\infty, 1)$-范畴的等价是完备 Segal 空间的模型范畴中的弱等价。

完备 Segal 空间可以推广为 [[$n$ 重完备 Segal 空间]]，
以定义 [[$(\infty, n)$-范畴]]。

## 定义

::: definition
设 $X$ 是 [[Segal 空间]]。

- $X$ 的**同伦范畴**是以下定义的[[范畴]] $\mathsf{Ho} (X)$：

  - 其[[对象]]为 $X_0$ 的顶点，即 $(X_0)_0$ 的元素。

  - 对 $x, y \in (X_0)_0$，其间的[[态射]]集为
    \[
    \mathsf{Ho} (X) (x, y) =
    \pi_0 \bigl( (X_1)_{x, y} \bigr),
    \]
    这里 $(X_1)_{x, y}$ 是映射 $(d_1, d_0) \colon X_1 \to X_0 \times X_0$
    于 $(x, y)$ 处的[[同伦纤维]]。
    注意到该映射由 $\mathbb{\Delta}$ 中的态射 $0, 1 \colon [0] \to [1]$ 诱导。

  - 态射复合由映射
    \[
    (X_1)_{x, y} \times (X_1)_{y, z}
    \simeq (X_2)_{x, y, z} \xrightarrow{d_1} (X_1)_{x, z}
    \]
    给出。这里 $(X_2)_{x, y, z}$ 是映射
    $X_2 \to X_0 \times X_0 \times X_0$ 于 $(x, y, z)$ 的同伦纤维，
    该映射由 $\mathbb{\Delta}$ 中的态射 $0, 1, 2 \colon [0] \to [2]$ 诱导。
    左边的同伦等价是由 Segal 空间的公理。

- 称 $f \in X_1$ 为**同伦等价**，
  如果它对应于 $\mathsf{Ho} (X)$ 中的[[同构]]。

- 定义 $X_\simeq \subset X_1$ 为所有同伦等价构成的子 Kan 复形。
  这是 $X_1$ 的一些连通分支构成的子 Kan 复形。

- 称 $X$ 为**完备 Segal 空间**，如果退化映射
  \[
  s_0 \colon X_0 \longrightarrow X_\simeq
  \]
  是 Kan 复形的同伦等价。

:::

以上定义可见于 [@Rezk2001]。

## 例子

- 设 $\mathcal{C}$ 是[[小范畴]]。

  - 设 $X = \mathfrak{N} (\mathcal{C})$ 是 $\mathcal{C}$ 的[[脉]]，
    将其视为单纯 Kan 复形，也就是将各集合 $X_n$ 视为离散的 Kan 复形。
    由脉的定义，知 $X$ 是 Segal 空间。

    然而，$\mathfrak{N} (\mathcal{C})$ 一般不是完备 Segal 空间。
    这是因为，$X_0$ 与“$\mathcal{C}$ 中对象构成的空间”不同，
    在后者中，同构的对象需要视为空间中的同一个点。
    例如，若有两个同构但不相等的对象，则它们在 $X_0$ 中是分散的点，
    这就破坏了完备性。

  为了将 $\mathcal{C}$ 视为完备 Segal 空间，可以使用以下构造：

  - 定义 Segal 空间 $X$ 如下：令
    \[
    X_n = \mathfrak{N} \bigl(
      \mathsf{Fun} (\Delta[n], \mathcal{C})^\simeq
    \bigr),
    \]
    其中 $(-)^\simeq$ 表示范畴中的极大群胚，
    范畴 $\Delta[n]$ 如图表
    \[
    0 \to 1 \to \cdots \to n
    \]
    所示。则这里的 $X$ 是完备 Segal 空间。

## 性质

### 模型范畴结构

## 参考文献

```bibliography
Rezk2001:
  type: article
  title: A model for the homotopy theory of homotopy theory
  author: 'Rezk, Charles'
  year: 2001
  journaltitle: Trans. Am. Math. Soc.
  volume: 353
  number: 3
  pages: 973–1007
  doi: 10.1090/s0002-9947-00-02653-2
  arxiv: math/9811037
  zbmath: '0961.18008'
```

```terms
完备 Segal 空间:
  en: complete Segal space
  fr: espace de Segal complet :m
```
