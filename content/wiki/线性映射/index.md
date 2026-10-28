---
title: 线性映射
categories: [线性代数]
navboxes: [线性代数]
---

<problems>
- “例子”一节需要扩充。
</problems>

**线性映射**是[[向量空间]]之间的一种[[映射]]，
保持向量的加法、数乘。
它是[[线性代数]]主要研究的映射。
例如，映射
\[
\begin{aligned}
  f \colon \quad \mathbb{R}^2 & \longrightarrow \mathbb{R}^2, \\
  (x, y) & \longmapsto (3 x + y, \ x + 2 y)
\end{aligned}
\]
就是一个线性映射，它可以用下图描述：
\[
\begin{tikzpicture}
  \begin{scope}[shift={(-3,0)}]
    \draw[black!70, -stealth] (-2.1, 0) -- (2.1, 0);
    \draw[black!70, -stealth] (0, -2.1) -- (0, 2.1);
    \node[black!70] at (2.3, 0) {$x$};
    \node[black!70] at (0, 2.3) {$y$};
    \node[black!70] at (.2, -.2) {$O$};
    \foreach \i in {-3, ..., 3} {
      \draw[thick, blue!30!cyan!80!black] (-1.8, \i*.48) -- (1.8, \i*.48);
      \draw[thick, blue!30!cyan!80!black] (\i*.48, -1.8) -- (\i*.48, 1.8);
    }
  \end{scope}
  \node at (0, 0) {$\longrightarrow$};
  \node at (0, .3) {$f$};
  \begin{scope}[shift={(3,0)}]
    \foreach \i in {-3, ..., 3} {
      \draw[very thin, black!20] (-1.8, \i*.48) -- (1.8, \i*.48);
      \draw[very thin, black!20] (\i*.48, -1.8) -- (\i*.48, 1.8);
    }
    \draw[black!70, -stealth] (-2.1, 0) -- (2.1, 0);
    \draw[black!70, -stealth] (0, -2.1) -- (0, 2.1);
    \node[black!70] at (2.3, 0) {$x$};
    \node[black!70] at (0, 2.3) {$y$};
    \node[black!70] at (.2, -.2) {$O$};
    \clip (-1.8, -1.8) rectangle (1.8, 1.8);
    \foreach \i in {-2, ..., 2} {
      \draw[thick, blue!30!cyan!80!black] (-1.8, \i*.8-.6) -- (1.8, \i*.8+.6);
      \draw[thick, blue!30!cyan!80!black] (\i*1.2-.9, -1.8) -- (\i*1.2+.9, 1.8);
    }
  \end{scope}
\end{tikzpicture}
\]
这里，左边的蓝色网格是单位坐标网格，
它被映射 $f$ 变成右边的扭曲、放大的蓝色网格。

向量空间是[[域]]上的[[模]]，线性映射就是[[模同态]]。

## 定义

::: definition [线性映射] {@线性映射}
给定域 $\mathbb{k}$ 和两个 $\mathbb{k}$-[[向量空间]] $V,W$，
如果[[映射 (集合论)|映射]] $f\colon V\to W$ 满足对任意 $a, b \in \mathbb{k}$
和任意向量 $x, y \in V$，都有
\[
f (a x + b y) = a f (x) + b f (y),
\]
就称 $f$ 是从 $V$ 到 $W$ 的**线性映射**。
:::

通常也使用以下术语：

- 线性映射也称为 **[[线性算子]]**、**线性同态**。
  为避免歧义，有时也称 **$\mathbb{k}$-线性映射**。

- 从 $V$ 到 $V$ 自身的线性映射也称为 $V$ 上的 **[[线性变换]]**。

- 从 $V$ 到 $\mathbb{k}$ 的线性映射也称为
  $V$ 上的 **[[线性函数]]** 或 **[[线性泛函]]**。

- 如果一个线性映射是[[单射]]，则称为 **[[线性嵌入]]**，或简称**嵌入**。

- 如果一个线性映射是[[双射]]，则称为 **[[线性同构]]**。

- 从 $V$ 到 $V$ 的线性同构也称为 $V$ 的 **[[线性自同构]]**。

## 性质

### 矩阵表示

有限维向量空间之间的线性映射可以用[[矩阵]]来表示。

设 $f \colon V \to W$ 是线性映射，且 $V, W$ 是有限维向量空间。
取 $V$ 的一组[[基]] $\{ v_1, \dotsc, v_n \}$
和 $W$ 的一组基 $\{ w_1, \dotsc, w_m \}$。
那么，由基的定义，每个向量 $f (v_i) \in W$ 都可以唯一地写成向量 $w_j$ 的[[线性组合]]。
也就是说，存在一系列常数 $a_{i,j} \in \mathbb{k}$，使得
\[
\begin{aligned}
  & f (v_1) = a_{1,1} \, w_1 + a_{2,1} \, w_2 + \cdots + a_{m,1} \, w_m, \\
  & f (v_2) = a_{1,2} \, w_1 + a_{2,2} \, w_2 + \cdots + a_{m,2} \, w_m, \\
  & \dotsc \ \dotsc, \\
  & f (v_n) = a_{1,n} \, w_1 + a_{2,n} \, w_2 + \cdots + a_{m,n} \, w_m.
\end{aligned}
\]
我们定义 $m \times n$ [[矩阵]]
\[
A = \begin{pmatrix}
  a_{1,1} & a_{1,2} & \cdots & a_{1,n} \\
  a_{2,1} & a_{2,2} & \cdots & a_{2,n} \\
  \vdots & \vdots & \ddots & \vdots \\
  a_{m,1} & a_{m,2} & \cdots & a_{m,n}
\end{pmatrix}.
\]
我们称 $A$ 为线性映射 $f$ 关于 $V$ 的基 $\{ v_i \}$、$W$ 的基 $\{ w_j \}$
的**矩阵表示**。

矩阵表示可以将线性映射化为[[矩阵乘法]]。
具体地说，对任意向量 $v \in V$，
设 $v = x_1 v_1 + \cdots + x_n v_n$。
我们定义列向量 ${\bm x} = (x_1, \dotsc, x_n)^\top$，
则线性映射的结果 $f (v) \in W$ 可以用矩阵乘法
\[
A \cdot {\bm x}
\]
表示。也就是说，如果我们将 $f (v)$ 写成基向量 $\{ w_j \}$ 的线性组合：
\[
f (v) = y_1 \, w_1 + \cdots + y_m \, w_m \, ,
\]
记 ${\bm y} = (y_1, \dotsc, y_m)^\top$，则一定有
\[
A \cdot {\bm x} = {\bm y}.
\]

### 核与像

可以定义线性映射的核与像，
由此定义的概念“零度”和“秩”是线性映射的重要量度。

::: definition [核空间]
对于 $\mathbb{k}$-线性映射 $f\colon V\to W$，
集合 $f^{-1}(0)=\{x\in V \mid f(x)=0\in W\}$ 构成一个向量空间，
称为 $f$ 的 **[[核 (代数)|核]]**，通常记作 $\ker f$。
如果其[[维数 (线性代数)|维数]]有限，则称其维数为 $f$ 的**零度**。
:::

::: definition [像空间]
对于 $\mathbb{k}$-线性映射 $f\colon V\to W$，
集合 $f(V)=\{f(x)\in W \mid x\in V\}$ 构成一个向量空间，
称为 $f$ 的 **[[像]]**，通常记作 $\operatorname{im} f$，
如果其[[维数 (线性代数)|维数]]有限，则称其维数为 $f$ 的**秩**。
:::

此二量满足以下关系，称为 **[[秩–零度定理]]**。

\[
\dim \ker f + \dim \operatorname{im} f = \dim V.
\]

## 例子

```terms
线性映射:
  en: linear map
  de: lineare Abbildung :f
  fr: application linéaire :f
  grc: γραμμικὸς ἀπεικονισμός :m
  la: adhibitio linearis :f
线性函数:
  en: linear function
  de: lineare Funktion :f
  fr: fonction linéaire :f
  grc: γραμμικὸς ἀπεικονισμός :m
  la: functio linearis :f
秩:
  en: rank
  de: Rang :m
  fr: rang :m
  grc: τάξις :f
  la: gradus :m
零度:
  en: nullity
  fr: nullité :f
  grc: μηδενία :f
  la: nullitas :f
```
