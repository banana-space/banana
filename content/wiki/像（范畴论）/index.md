---
title: 像（范畴论）
categories: [范畴论]
navboxes: [范畴论]
notices:
  - name: 问题
    items:
      - “性质”一节中定理的证明最后一步的等式似乎有误。
      - “例子”一节需要扩充。
---

在[[范畴论]]中，
[[态射]]的**像**是集合间[[映射 (集合论)|映射]]的[[像]]在一般[[范畴]]中的推广。

具体地说，我们用如下[[万有性质]]来定义态射的像：
态射 \(f \colon A \to B\) 的像将其分解为两个态射
的复合 \(A \xrightarrow{e} \operatorname{im} f \xhookrightarrow{m} B\)，
其中 $m$ 为[[单态射]]，
并且 \(\operatorname{im} f\) 需要是所有可能的分解中最小的。

像的[[对偶]]是[[余像]]。

## 定义

::: definition
设 $\mathcal{C}$ 为范畴，
$\mathcal{M}$ 为 $\mathcal{C}$ 中一族[[态射]]。
例如，可取为 $\mathcal{C}$ 中所有的[[单态射]]。

对态射 \(f \colon A \to B\)，
如果存在 \(f\) 的分解 \(A \xrightarrow{e} \operatorname{im} f \xrightarrow{m} B\)，
其中 \(m \in \mathcal{M}\)，并且对于任何其它这样的分解
\(A \xrightarrow{e'} C \xrightarrow{m'} B\)，都有唯一的态射 \(u\) 使得下图交换：
\[
\begin{tikzcd}
  & \operatorname{im} f \ar[dr, "m"]\ar[dd, dashed, "u"{description}] & \\
  A\ar[ur, "e"]\ar[dr, "e'"] & & B \\
  & C\ar[ur, "m'"]
\end{tikzcd}
\]
则称 \(\operatorname{im} f\)（配备上态射 \(e,m\)）为 \(f\) 的\(\mathcal{M}\)-**像**。

当 \(\mathcal{M}\) 取为所有单态射构成的类时，
\(\mathcal{M}\)-像直接称为**像**。
:::

除了取 \(\mathcal{M}\) 为所有的单态射外，还经常取其为所有[[正则单态射]]，
得到的是[[正则像]]，在一些文献中也直接称为像。
常将 \(\mathcal{M}\) 取为单态射构成的类的子类，
此时定义中的唯一性可以去掉。

## 性质

::: theorem
在范畴中有相关极限时，\(f : A \to B\) 的正则像可以构造
为[[推出]] \(\pi_1, \pi_2 : B \rightrightarrows B \underset{A}{\sqcup} B\)
的[[等子]] \(m : \operatorname{im} f \to B\)。
:::

::: proof
首先需要构造态射 \(e : A \to \operatorname{im} f\)。由推出的性质，
\(\pi_1 \circ f = \pi_2 \circ f\)。因此由等子的性质，
存在唯一的 \(e : A \to \operatorname{im} f\) 使得 \(m \circ e = f\)。

其次需要证明泛性质。对于任何分解 \(A \xrightarrow{e'} C \xrightarrow{m'} B\)，
使得 \(m'\) 是正则单态射，由定义存在 \(p_1, p_2 : B \rightrightarrows D\) 使得
\(m'\) 是它们的等子。因此 \(p_1 \circ m' = p_2 \circ m'\)，
进而 \(p_i \circ (m' \circ e') = p_i \circ f\) 相等。根据推出的性质有唯一的态射
\(u : B \underset{A}{\sqcup} B \to D\) 使得 \(u \circ \pi_i = p_i\)。
最后得到 \(\pi_i \circ m \circ u = \pi_i \circ p_i\) 相等，从而由等子的性质得到
存在唯一的 \(v : \operatorname{im} f \to C\)，即 \(\operatorname{im} f \subseteq C\)，满足条件。
:::

这在[@lww2]中直接作为正则像的定义。

## 例子

## 参考文献

```bibliography
lww2:
  type: book
  author: 李文威
  year: 2023
  title: '代数学方法: 线性代数'
  url: https://www.wwli.asia/downloads/books/Al-jabr-2.pdf
```

```terms
像:
  en: image
  fr: image :f
  de: Bild :n
  grc: εἰκών :f
  la: imago :f
```
