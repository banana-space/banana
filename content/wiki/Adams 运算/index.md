---
title: Adams 运算
categories: [$K$ 理论]
navboxes: [向量丛与 K 理论]
---

<problems>
- “定义”一节需要扩充。
</problems>

在[[代数拓扑]]中，
**Adams 运算**是[[拓扑 $K$ 理论]]上的一种运算。
具体而言，对[[拓扑空间]] $X$ 及[[整数]] $k$，有 Adams 运算
\[
\psi^k \colon K (X) \longrightarrow K (X),
\]
其中 $K (X)$ 为 $X$ 的拓扑 $K$ 理论。
该运算大致定义如下：若向量丛 $E$ 是 $n$ 个[[线丛]]的直和，即
\[
E \simeq L_1 \oplus \cdots \oplus L_n,
\]
则 $\psi^k$ 将 $E$ 映到向量丛
\[
\psi^k (E) \simeq
L_1^{\otimes k} \oplus \cdots \oplus L_n^{\otimes k}.
\]
这一操作可以定义在整个 $K (X)$ 上，是 $K (X)$ 到自身的环同态。

Adams 运算给 $K (X)$ 赋予 [[$\lambda$-环]]的结构。

## 定义

## 参考文献

原始文献：

```bibliography
Adams1962:
  type: article
  author: J. F. Adams
  title: Vector fields on spheres
  year: 1962
  journaltitle: Ann. Math.
  volume: 75
  pages: '603-632'
  doi: 10.2307/1970213
  zbmath: '0112.38102'
```

文中 §5 定义了 Adams 运算。

```terms
Adams 运算:
  en: Adams operation
```
