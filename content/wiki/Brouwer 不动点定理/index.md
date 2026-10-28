---
title: Brouwer 不动点定理
categories: [一般拓扑]
---

<problems>
- “构造性证明”“应用”各节需要扩充。
</problems>

**Brouwer 不动点定理**是[[拓扑学]]中的定理，
它表明了[[球体]]到自身的连续映射必有不动点。

## 陈述与证明

::: theorem [Brouwer 不动点定理]
设 $D^n$ 是 [[Euclid 空间]]中的单位[[球体]]，
则对任意连续映射 $f \colon D^n \to D^n$，
存在 $x \in D^n$，使得 $f(x) = x$。
:::

### 使用代数拓扑

::: proof
如不然，记 $S^{n-1}$ 为单位球面，则映射
\[
\pi \colon D^n \to S^{n-1}, \quad
x \mapsto 射线\ f(x)x\ 与\ S^{n-1}\ 的交点
\]
与含入映射 $i \colon S^{n-1} \to D^n$ 之复合为恒等映射。
于是它对应的 $n-1$ 阶[[约化同调群]]映射
\[
\widetilde H_{n-1}(S^{n-1}) \to
\widetilde H_{n-1}(D^n) \to
\widetilde H_{n-1}(S^{n-1})
\]
之复合是恒等映射。但 $\widetilde H_{n-1}(D^n) = 0$，
$\widetilde H_{n-1}(S^{n-1}) = \mathbb{Z}$，矛盾。
:::

### 构造性证明

## 应用

```terms
Brouwer 不动点定理:
  en: Brouwer fixed-point theorem
  de: Fixpunktsatz von Brouwer
  fr: théorème du point fixe de Brouwer
```
