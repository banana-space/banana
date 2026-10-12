---
title: 复微分形式
categories: [微分几何, 复几何]
notices:
  - name: 问题
    items:
      - “操作”一节需要扩充。
---

**复微分形式**是可以取[[复数|复]]系数的[[微分形式]]。

[[复流形]]上的复微分形式是[[复几何]]的核心研究对象之一，
也是 [[Hodge 理论]]建立的基础。

## 定义

::: definition [复微分形式]
[[光滑流形]] $X$ 上的 $k$ 阶**复微分形式**，
或者说**复 $k$-形式**，
是指[[向量丛]]
\[
\wedge^k (\mathrm{T}^* X) \otimes_{\mathbb{R}} \mathbb{C}
\]
的光滑[[截面]]。所有复 $k$-形式的空间通常记为
$\mathcal{A}^k (X; \mathbb{C})$ 或 $\Omega^k (X; \mathbb{C})$。
:::

## $(p, q)$-形式

### 通过坐标定义

在[[复流形]] $X$ 上，取全纯的局部坐标 $(z^1, \dotsc, z^n)$，
记 $z^i = x^i + \mathrm{i} y^i$，其中 $x^i$、$y^i$ 为实坐标。
则可定义复 $1$-形式
\[
\begin{aligned}
  d z^i & = d x^i + \mathrm{i} \, d y^i, \\
  d \bar{z}^i & = d x^i - \mathrm{i} \, d y^i.
\end{aligned}
\]
因为 $d x^i$ 与 $d y^i$ 都可以写成 $d z^i$ 与 $d \bar{z}^i$ 的线性组合，
所以任何 $\omega \in \mathcal{A}^k (X; \mathbb{C})$ 都能写成
\[
\omega =
\sum_{\substack{ p + q = k \\ i_1 < \cdots < i_p \\ j_1 < \cdots < j_q }}
f_{i_1, \, \cdots, \, i_p \, ; \ j_1, \, \cdots, \, j_q} \
d z^{i_1} \wedge \cdots \wedge d z^{i_p} \wedge
d \bar{z}^{j_1} \wedge \cdots \wedge d \bar{z}^{j_q}
\]
的形式，
其中 $f_{i_1, \, \cdots, \, i_p \, ; \ j_1, \, \cdots, \, j_q}$
是复值光滑函数。

::: definition [$(p, q)$-形式]
在[[复流形]] $X$ 上，在上述记号下，形如
\[
\omega = f \
d z^{i_1} \wedge \cdots \wedge d z^{i_p} \wedge
d \bar{z}^{j_1} \wedge \cdots \wedge d \bar{z}^{j_q}
\]
的形式称为 **$(p, q)$-形式**。
所有 $(p, q)$-形式的空间通常记为
$\mathcal{A}^{p, q} (X)$ 或 $\Omega^{p, q} (X)$，
这一空间不依赖于全纯坐标的选取。
:::

这样，我们就有
\[
\mathcal{A}^k (X; \mathbb{C}) =
\bigoplus_{p + q = k} \mathcal{A}^{p, q} (X).
\]

### 坐标无关定义

上述定义也可以写成坐标无关的形式。
在[[复流形]] $X$ 上，在每个 $x \in X$ 处，
都有[[复结构]]带来的算子
\[
\begin{aligned}
  J \colon \mathrm{T}^*_x X & \to \mathrm{T}^*_x X, \\
  \alpha & \mapsto \mathrm{i} \alpha,
\end{aligned}
\]
这里与 $\mathrm{i}$ 相乘的操作是将 $\mathrm{T}^*_x X$
视为复向量空间而进行的。
因为 $J^2 = -\mathrm{id}$，
所以 $J$ 的[[特征值]]必为 $\pm \mathrm{i}$。
因此，余切空间的[[复化]] $\mathrm{T}^*_x X \otimes_{\mathbb{R}} \mathbb{C}$
可以分成[[特征子空间]]的[[直和]]：
\[
\mathrm{T}^*_x X \otimes_{\mathbb{R}} \mathbb{C} =
(\mathrm{T}^*_x X)^{1,0} \oplus (\mathrm{T}^*_x X)^{0,1},
\]
其中 $(\mathrm{T}^*_x X)^{1,0}$ 与 $(\mathrm{T}^*_x X)^{0,1}$
分别为特征值 $\mathrm{i}$ 与 $-\mathrm{i}$ 的特征子空间。
事实上，在局部坐标下（记号同上小节），有
\[
\begin{aligned}
  J (d x^i) & = -d y^i, \\
  J (d y^i) & = d x^i,
\end{aligned}
\]
从而
\[
\begin{aligned}
  (\mathrm{T}^*_x X)^{1,0} & =
  \bigoplus_{i = 1}^{n} \,
  \mathbb{C} \cdot d z^i, \\
  (\mathrm{T}^*_x X)^{0,1} & =
  \bigoplus_{i = 1}^{n} \,
  \mathbb{C} \cdot d \bar{z}^i.
\end{aligned}
\]
这也说明，每个点 $x \in X$ 处的特征子空间
$(\mathrm{T}^*_x X)^{1,0}$ 与 $(\mathrm{T}^*_x X)^{0,1}$
分别拼成向量丛 $\mathrm{T}^* X \otimes_{\mathbb{R}} \mathbb{C}$
的两个子丛，且有向量丛的直和
\[
\mathrm{T}^* X \otimes_{\mathbb{R}} \mathbb{C} =
(\mathrm{T}^* X)^{1,0} \oplus (\mathrm{T}^* X)^{0,1}.
\]

::: definition [$(p, q)$-形式]
[[复流形]] $X$ 上的 **$(p, q)$-形式**是复向量丛
\[
\wedge^p (\mathrm{T}^* X)^{1,0} \otimes
\wedge^q (\mathrm{T}^* X)^{0,1}
\]
的光滑截面，这里[[外积]]、[[张量积]]都在 $\mathbb{C}$ 上进行。
所有 $(p, q)$-形式的空间通常记为
$\mathcal{A}^{p, q} (X)$ 或 $\Omega^{p, q} (X)$。
:::

通过嵌入
\[
\begin{aligned}
  \wedge^p (\mathrm{T}^* X)^{1,0} \otimes
  \wedge^q (\mathrm{T}^* X)^{0,1} & \to
  \wedge^{p+q} (\mathrm{T}^* X) \otimes_{\mathbb{R}} \mathbb{C}, \\
  \alpha \otimes \beta & \mapsto
  \alpha \wedge \beta,
\end{aligned}
\]
可以将 $(p, q)$ 形式看作 $(p + q)$ 阶复微分形式。
在这个意义下，我们有直和分解
\[
\mathcal{A}^k (X; \mathbb{C}) =
\bigoplus_{p + q = k} \mathcal{A}^{p, q} (X).
\]

## 操作

```terms
复微分形式:
  en: complex differential form
'$(p, q)$-形式':
  en: '$(p, q)$-form'
```
