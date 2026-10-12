---
title: Faà di Bruno 公式
aliases: [Faa di Bruno 公式]
categories: [实分析]
---

**Faà di Bruno 公式**是计算[[复合函数]]的高阶[[导数]] $(f \circ g)^{(n)}$ 的公式，
也是[[链式法则]]的对于高阶导数的推广。

## 陈述和证明

::: theorem [Faà di Bruno 公式] {@thm-faa-di-bruno}
设 $n$ 是[[自然数]]，假设

- 函数 $g \colon \mathbb{R} \to \mathbb{R}$ 在 $x \in \mathbb{R}$ 处具有 $n$ 阶[[导数]]。

- 函数 $f \colon \mathbb{R} \to \mathbb{R}$ 在 $g (x) \in \mathbb{R}$ 处具有 $n$ 阶导数。

则[[复合函数]] $f \circ g$ 在 $x$ 处也具有 $n$ 阶导数，并且
\[
\begin{aligned}
  (f \circ g)^{(n)} (x) & =
  \sum_{
    \substack{
      m_1, \, \dotsc, \, m_n \in \mathbb{N} \\
      1 m_1 + \cdots + n m_n = n
    }
  }
  \frac{n!}{m_1! \, 1!^{m_1} \cdots m_n! \, n!^{m_n}} \cdot
  f^{(m_1 + \cdots + m_n)} (g (x)) \,
  g' (x)^{m_1} \cdots g^{(n)} (x)^{m_n}.
\end{aligned}
\]
这个公式也可以写成
\[
(f \circ g)^{(n)} (x) =
\sum_{P} f^{(|P|)} (g (x))
\prod_{p \in P} g^{(|p|)} (x),
\]
其中 $P$ 取遍 $\{ 1, \dotsc, n \}$ 的所有[[无序分割]]。
:::

::: proof
我们有
\[
\begin{aligned}
  f (g (x + \varepsilon))
  & = f \biggl(
    g (x) +
    \frac{g' (x)}{1!} \varepsilon +
    \cdots +
    \frac{g^{(n)} (x)}{n!} \varepsilon^n +
    o (\varepsilon^n)
  \biggr) \\
  & =
  \sum_{k = 0}^n
  \frac{f^{(k)} (g (x))}{k!}
  \biggl(
    \frac{g' (x)}{1!} \varepsilon +
    \cdots +
    \frac{g^{(n)} (x)}{n!} \varepsilon^n +
    o (\varepsilon^n)
  \biggr)^k + o (\varepsilon^n).
\end{aligned}
\]
因此，$(f \circ g)^{(n)} (x)$ 就是
$n!$ 乘以上式中 $\varepsilon^n$ 的系数，从而
\[
\begin{aligned}
  (f \circ g)^{(n)} (x)
  & = n! \sum_{k = 0}^n
  \frac{f^{(k)} (g (x))}{k!}
  \sum_{
    \substack{
      m_1 + \cdots + m_n = k \\
      1 m_1 + \cdots + n m_n = n
    }
  }
  \frac{k!}{m_1! \, \cdots \, m_n!}
  \biggl( \frac{g' (x)}{1!} \biggr)^{m_1} \cdots
  \biggl( \frac{g^{(n)} (x)}{n!} \biggr)^{m_n},
\end{aligned}
\]
这即是想要的表达式。
:::

::: remark
@thm-faa-di-bruno 也可以等价叙述如下：
对于[[形式幂级数]]
$a (x) = \sum_{n=1}^\infty a_n x^n$ 和
$b (x) = \sum_{n=1}^\infty b_n x^n$，我们记
\[
a (b (x)) = \sum_{n=1}^\infty c_n x^n,
\]
则
\[
c_n =
\sum_{
  \substack{
    m_1, \, \dotsc, \, m_n \in \mathbb{N} \\
    1 m_1 + \cdots + n m_n = n
  }
}
\binom{m_1 + \cdots + m_n}{m_1, \dotsc, m_n} \,
a_{m_1 + \cdots + m_n} \,
b_1^{m_1} \cdots b_n^{m_n}.
\]
:::

```terms
Faà di Bruno 公式:
  en: Faà di Bruno's formula
  de: Formel von Faà di Bruno
  fr: formule de Faà di Bruno
```
