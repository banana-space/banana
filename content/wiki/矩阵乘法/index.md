---
title: 矩阵乘法
categories: [线性代数]
navboxes: [线性代数]
---

在[[线性代数]]中，**矩阵乘法**是[[矩阵]]的一种[[运算]]。
给定 $m \times n$ 矩阵 $A$ 和
$n \times r$ 矩阵 $B$，
其乘积 $A B$ 是一个新的 $m \times r$ 矩阵。
矩阵乘法满足[[结合律]]，但不满足[[交换律]]。

若将矩阵视为[[向量空间]]之间[[线性映射]]的表示，
则矩阵乘法对应了线性映射的[[复合]]。

## 定义

::: definition
设 $R$ 为[[环]]，
$A = (a_{i, j})_{1 \leq i \leq m, \ 1 \leq j \leq n}$
为 $R$ 上的 $m \times n$ 矩阵，
$B = (b_{j, k})_{1 \leq j \leq n, \ 1 \leq k \leq r}$
为 $R$ 上的 $n \times r$ 矩阵。

则 $A$ 与 $B$ 的**积**定义为 $m \times r$ 矩阵
$A B = (c_{i, k})_{1 \leq i \leq m, \ 1 \leq k \leq r}$，
其中
\[
c_{i, k} = \sum_{j = 1}^{n} a_{i, j} b_{j, k}.
\]
:::

上述定义可以如下记忆：

```tikz
\begin{tikzpicture}[scale=1.4]
    \begin{scope}
        \fill[cyan!10] (1.5, .5) rectangle (2, 1);
        \foreach \x in { 0, 0.5, ..., 2.5 } {
            \draw (\x, 0) -- (\x, 1.5);
        }
        \foreach \y in { 0, 0.5, ..., 1.5 } {
            \draw (0, \y) -- (2.5, \y);
        }
        \node[scale=1.2] at (1.25, -.25) {$AB$};
    \end{scope}
    \begin{scope}[shift={(0, 2)}]
        \fill[cyan!10] (1.5, 0) rectangle (2, 2);
        \foreach \x in { 0, 0.5, ..., 2.5 } {
            \draw (\x, 0) -- (\x, 2);
        }
        \foreach \y in { 0, 0.5, ..., 2 } {
            \draw (0, \y) -- (2.5, \y);
        }
        \node at (1.75, 1.75) {$b_{1, k}\vphantom{|}$};
        \node[rotate=90] at (1.75, 1.25) {${\cdots}$};
        \node[rotate=90] at (1.75, .75) {${\cdots}$};
        \node at (1.75, .25) {$b_{n, k}\vphantom{|}$};
        \node[scale=1.2] at (2.75, 1) {$B$};
    \end{scope}
    \begin{scope}[shift={(-2.5, 0)}]
        \fill[cyan!10] (0, .5) rectangle (2, 1);
        \foreach \x in { 0, 0.5, ..., 2 } {
            \draw (\x, 0) -- (\x, 1.5);
        }
        \foreach \y in { 0, 0.5, ..., 1.5 } {
            \draw (0, \y) -- (2, \y);
        }
        \node at (.25, .75) {$a_{i, 1}\vphantom{|}$};
        \node at (.75, .75) {${\cdots}$};
        \node at (1.25, .75) {${\cdots}$};
        \node at (1.75, .75) {$a_{i, n}\vphantom{|}$};
        \node[scale=1.2] at (1, -.25) {$A$};
    \end{scope}
    \draw[line width=1, cyan!75!black, -Stealth] (-.5, .75) -- (1.5, .75);
    \draw[line width=1, cyan!75!black, -Stealth] (1.75, 2) -- (1.75, 1);
    \node[cyan!75!black] at (1.75, .75) {$\pmb{c}_{\pmb{i, k}}\vphantom{|}$};
\end{tikzpicture}
```

```terms
矩阵乘法:
  en: matrix multiplication
```
