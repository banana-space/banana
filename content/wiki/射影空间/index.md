---
title: 射影空间
categories: [微分几何]
---

<disambiguation>
关于[[代数几何]]中的射影空间，请参见[[射影空间（代数几何）]]。
</disambiguation>

<problems>
- “作为流形”“性质”各节需要扩充。
</problems>

**射影空间**是[[几何学]]中的重要对象，
起源于[[射影几何]]。
它由向 $n$ 维[[仿射空间]]中加入[[无穷远点]]而得。
例如，在[[仿射平面]]中，平行线并不相交；
而在[[射影平面]]中，每组平行线相交于一个无穷远点。

[[域]] $k$ 上的 $n$ 维射影空间可以定义为[[向量空间]]
$V = k^{n+1}$ 中所有过原点直线的集合，
也就是所有方向的集合。换言之，
\[
\mathbb{P}^n_k = (V \setminus \{ 0 \}) / {\sim},
\]
其中等价关系 $\sim$ 定义为 $v \sim w$
当且仅当存在非零的 $\lambda \in k$，使得 $\lambda v = w$。
因此，$\mathbb{P}^n_k$ 的元素常常记为
\[
x = [x_0 : x_1 : \cdots : x_n],
\]
其中 $x_0, \dotsc, x_n \in k$。
这样，所有点 $[1 : x_1 : \cdots : x_n]$ 构成的子空间就是一个 $n$ 维仿射空间，
而其他点，即 $x_0 = 0$ 的点，构成一个 $\mathbb{P}_k^{n-1}$，
这些就是相对于上述仿射空间而言的无穷远点。

零维射影空间是[[单点空间]]。
一维、二维的射影空间分别称为[[射影直线]]、[[射影平面]]。

在[[微分几何]]与[[代数拓扑]]中，
常常考虑[[实射影空间]] $\mathbb{RP}^n = \mathbb{P}_{\mathbb{R}}^n$、
[[复射影空间]] $\mathbb{CP}^n = \mathbb{P}_{\mathbb{C}}^n$，
乃至[[四元射影空间]] $\mathbb{HP}^n = \mathbb{P}_{\mathbb{H}}^n$。
它们都是[[紧空间|紧]]、[[光滑流形]]，维数分别为 $n$、$2n$、$4n$。
它们也具有自然的 [[CW 复形]]结构。

射影空间是 [[Graßmann 流形]]的一个特例。

## 定义

### 作为集合

::: definition [射影空间，作为集合]
设 $k$ 是[[域]]，$V$ 是 $k$-[[向量空间]]。则 $V$ 的**射影空间**定义为
\[
\mathbb{P} (V) = (V \setminus \{ 0 \}) / {\sim},
\]
其中等价关系 $\sim$ 定义为 $v \sim w$
当且仅当存在非零的 $\lambda \in k$，使得 $\lambda v = w$。

当 $V = k^{n+1}$ 时，得到的射影空间称为 $k$ 上的 **$n$ 维射影空间**，
记为 $\mathbb{P}_k^n$。
此时，每个点 $x \in \mathbb{P}^n$ 可以写成
\[
x = [x_0 : x_1 : \cdots : x_n],
\]
其中 $x_0, \dotsc, x_n \in k$ 是不全为零的元素，
称为 $x$ 的**齐次坐标**。对非零常数 $\lambda \in k$，有
\[
[x_0 : x_1 : \cdots : x_n] =
[\lambda x_0 : \lambda x_1 : \cdots : \lambda x_n].
\]

当 $k = \mathbb{R}$ 或 $\mathbb{C}$ 时，
将 $\mathbb{P}_k^n$ 分别记作 $\mathbb{RP}^n$、$\mathbb{CP}^n$，
并赋予其[[商拓扑]]。
:::

### 作为流形

## 性质

由于每一种射影空间均有许多特殊的构造，其性质参见以下子条目。

- [[有限射影空间]]
- [[实射影空间]]
- [[复射影空间]]
- [[四元数射影空间]]
- [[射影空间 (概形)]]

```terms
射影空间:
  en: projective space
  fr: espace projectif :m
  de: projektiver Raum :m
  la: spatium projectivum :n
  grc: προβολικὸς χῶρος :m
```
