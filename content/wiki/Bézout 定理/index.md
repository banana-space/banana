---
title: Bézout 恒等式
aliases: [Bézout 引理]
categories: [初等数论]
notices:
  - name: 消歧义
    about: '[[数论]]中的恒等式'
    see:
      - topic: '[[代数几何]]中的相交点计数'
        page: 'Bézout 定理'
navboxes: [初等数论]
---

**Bézout 恒等式**是[[数论]]中的一个基本定理, 大致上说, 
对任意[[整数]] $a, b$, 它们的[[最大公因数]] $d$ 
可以写成 $a, b$ 在[[整数环]]上的[[线性组合]].

## 定义

::: definition [Bézout 恒等式] {@def-Bézout-id}
  对任意整数 $a,b$ 以及 $d = \gcd(a,b)$, 存在整数 $x, y$ 满足等式
\[
ax + by = d.
\]
:::

::: proof {@proof-Bézout-id}
  若 $a = b = 0$, 结论显然成立. 下令 $a \neq 0$.

  考虑[[集合]] $S = \set{ax + by \mid x,y \in 
  \mathbb{Z} 且 ax + by > 0}$. 因为 $a, -a$ 其一必属于 $S$,
  所以 $S$ [[空集|非空]]. 

  由于[[自然数]]有[[良序|良序性]], 故 $S$ 有[[最小元]], 设为 $m$.
  下证 $m = \gcd(a,b)$.

  考虑 $a$ 关于 $m$ 的[[带余数除法]], 有 $a = mq + r$, 其中 
  $0 \le r < m$. 因为 $m \in S$, 所以 
  $\exists s,t \in \mathbb{Z}$ 满足
  \[
  \begin{aligned}
    r
    &= a - mq\\
    &= a - (as+bt)q\\
    &= a(1-sq) - btq \in S \cup \set{0}.
  \end{aligned}
  \]
  然而, $m$ 是 $S$ 中最小者, 这连同 $0 \le r < m$ 使得 $r = 0$.
  所以 $a = mq$, 同理可得 $m | b$.

  下证 $m$ 是所有公因数中最大者. 设 $a,b$ 的公因数 
  $c$ 满足 $a = cu$ 且 $b = cv$,
  则
  \[
    \begin{aligned}
    m
    &= ax + by\\
    &= cux + cvy\\
    &= c(ux+vy),
  \end{aligned}
  \]
  由于 $m > 0$, 这说明 $c \le m$.
:::

::: remark
  在 @proof-Bézout-id 中, 所有步骤都可在[[主理想整环]]中进行.
  所以 Bézout 恒等式在主理想整环中亦成立; 特别的, Bézout 恒等式对
  [[域]]上的[[一元多项式]]成立.
:::

## 相关概念

- [[Bézout 整环]]
- [[Hilbert 零点定理]]

```terms
Bézout 恒等式:
  en: Bézout's identity
  fr: identité de Bézout :f
```