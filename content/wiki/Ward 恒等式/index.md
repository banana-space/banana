---
title: Ward 恒等式
aliases: [Ward–Takahashi 恒等式, Ward-Takahashi 恒等式]
categories: [量子场论]
notices:
  - name: 提示
    text: '本条目中定理的叙述和证明使用了[[路径积分]]，因此是半严格的。'
  - name: 问题
    items:
      - “共形场论中”一节需要扩充。
---

**Ward 恒等式**是[[量子场论]]中的重要恒等式，
直观地说，
它表明了把[[场 (物理)|场]]的[[对称性]]相应的[[守恒流]]
作用于场的[[多点函数]]的结果。

一些文献会用 Ward 恒等式之名称呼这里的 [[Schwinger–Dyson 方程]]。

## 陈述与证明

::: theorem [Ward 恒等式]
设场 $\phi$ 有一族连续对称性，由
\[
\begin{aligned}
  x' &= f_t(x) \\
  \phi' &= \mathcal{G}_t(\phi)
\end{aligned}
\]
给出，其中 $t$ 为此一族对称性的参数。定义无穷小对称性为
\[
\mathcal{G}(\phi) =
\lim_{t \to 0} \frac{\mathcal{G}_t(\phi) - \phi}{t}.
\]
若相应的[[守恒流]]为 $j = j^\mu(\phi)(x)$，则
\[
\frac{\partial}{\partial x^\mu}
\langle j^\mu(x) \phi(x_1) \cdots \phi(x_n) \rangle
= \sum_{i = 1}^n \delta(x - x_i)
\langle \phi(x_1) \cdots \mathcal{G}(\phi)(x_i) \cdots \phi(x_n) \rangle.
\]
这里的导数是对 $x$ 取。
:::

::: proof
记 $X = \phi(x_1) \cdots \phi(x_n)$
（注意：我们这里所有的场乘积都是[[时序乘积]]），
则
\[
\langle X \rangle = \int [d\phi] X \mathrm{e}^{-S(\phi)}
\]
假设[[路径积分]]的测度 $[d\phi]$ 在变换
\[
\phi'_t(x) = \phi(x) + t\omega(x)\mathcal{G}(\phi)(x)
\]
之下不变（其中 $t$ 为参数，$\omega$ 为任意“好的”函数），
则由 [[Noether 定理]]有在一阶近似下
\[
\langle X \rangle = \int [d\phi'] X \mathrm{e}^{-S(\phi')}
= \int [d\phi] (X+\delta X) \mathrm{e}^{-S(\phi) + t\int dx j^\mu \partial_\mu \omega}
\]
其中
\[
\delta X = t\sum_{i = 1}^n
\phi(x_1) \cdots \omega(x_i) \mathcal{G}(\phi)(x_i) \cdots \phi(x_n).
\]
因此比对 $\langle X \rangle$ 的两种表达可得
\[
\langle \delta X \rangle
= - t \int dx\ (\partial_\mu \omega)(\langle j^\mu X \rangle)
= t\int dx\ \omega \partial_\mu \langle j^\mu X \rangle
\]
注意到 $\delta X$ 中
\[
\omega(x_i) \mathcal{G}(\phi)(x_i)
= \int dx\ \delta(x-x_i) \omega(x) \mathcal{G}(\phi)(x_i)
\]
则由 $\omega$ 的任意性，定理得证。
:::

::: remark
物理学家喜欢在无穷小对称性前面乘虚数单位 $\mathrm{i}$，
因此物理书中 Ward 恒等式经常与此处给出的恒等式差一个系数。
:::

::: remark
对多个场的一族对称性，同样有相应的恒等式，这仅是个平凡的推广。
:::

## 应用

### 共形场论中

### 量子电动力学中

考虑[[量子电动力学]]，[[作用量]]密度为
\[
-\mathrm{i}\mathcal{L} = \bar{\psi}(\mathrm{i}\gamma^\mu\partial_\mu - m)\psi
- \frac{1}{4} F_{\mu\nu}F^{\mu\nu} -
e\bar{\psi} \gamma^\mu \psi A_\mu -
\frac{\lambda}{2} (\partial_\mu A^\mu)^2
\]

则它有整体规范对称性 $\psi \mapsto \mathrm{e}^{-\mathrm{i} \alpha} \psi$，
相应的[[守恒流]]为 $j^\mu = \mathrm{i}\bar{\psi}\gamma^\mu\psi$。

考虑乘积 $X = \psi_1(x_1) \cdots \psi_n(x_n)
\bar{\psi}_1(y_1) \cdots \bar{\psi}_n(y_n)$，
代入恒等式，则有

\[
\begin{aligned}
  &\partial_\mu \langle j^\mu(x) \psi_1(x_1) \cdots \psi_n(x_n)
  \bar{\psi_1}(y_1) \cdots \bar{\psi_n}(y_n) \rangle \\
  =& -\mathrm{i}\sum_{i = 1}^n (\delta(x - x_i) - \delta(x - y_i))
  \langle \psi_1(x_1) \cdots \psi_n(x_n)
  \bar{\psi_1}(y_1) \cdots \bar{\psi_n}(y_n) \rangle
\end{aligned}
\]

取 $n = 1$（事实上对一般的 $n$ 也有类似结论，只是叙述起来比较麻烦），
并分别对 $x, x_1, y_1$ 做 [[Fourier 变换]]，
即作用
\[
\int dx \int dx_1 \int dy_1 \mathrm{e}^{-\mathrm{i} kx} \mathrm{e}^{\mathrm{i} qx_1} \mathrm{e}^{-\mathrm{i} py_1}
\]
于其上，等式成为：
\[
\begin{aligned}
  &(2\pi)^4 \delta(q-p-k) \mathrm{i} k_\mu \Gamma^\mu(p+k, p) S(p+k) S(p) \\
  &= (2\pi)^4 \delta(q-p-k) (S(p+k) - S(p))
\end{aligned}
\]
其中 $\Gamma^\mu$、$S$ 分别为[[不可约顶角]]和完全[[传播子]]。
即有

\[
-\mathrm{i} k_\mu \Gamma^\mu(p+k, p) = S(p+k)^{-1} - S(p)^{-1}.
\]

此结论在[[重整化]]理论中有重要应用，
称为**Ward–Takahashi 恒等式**。

```terms
Ward 恒等式:
  en: Ward identity
  de: Ward-Identität
  fr: identité de Ward
```
