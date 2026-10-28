---
title: 曲率（Hermite 流形）
aliases: [Hermite 流形上的曲率]
categories: [复几何, Riemann 几何]
---

<disambiguation>
关于其它种类的曲率，请参见[[曲率]]。
</disambiguation>

<problems>
- “实双截曲率”的定义中，左边写作 $B_\mathbb{R}(e,X)$，右边用的是记号 $R$；按上下文似乎应为 $B_\mathbb{R}(e,a)$ 与陈联络的曲率 $\Theta$。
- 命题“两个 Levi-Civita 曲率的关系”中前两个等式完全相同，第二个似乎应为另一组分量（如 $\hat{R}^m_{jkl}=R^m_{jkl}$）。
- 命题“Kähler 情形”缺少证明。
</problems>

给定 [[Hermite 流形]]$(X,\omega)$，我们可在其上定义
以下几种互不相同的[[联络]]与[[曲率]]。

## $T^{1,0}X$上的陈联络及曲率

利用全纯切丛$T^{1,0}X$上的[[Hermite 度量]]$h$，我们定义相应的[[陈联络]]$\nabla$：
\[
\nabla:\Gamma(X,T^{1,0}X)\to \Gamma(X,T_\mathbb{C}^*X\otimes T^{1,0}X).
\]
在局部坐标下，陈联络有表达式（在以下行文中我们使用 Einstein 求和约定，
略去求和符号）：
\[
\begin{aligned}
  \nabla\left( \frac{\partial}{\partial z^j} \right)&=\Gamma^l_{kj}
  \mathrm{d} z^k\otimes \frac{\partial}{\partial z^l}\\
  &=(h^{l\overline{m}}\partial_k h_{j\overline{m}} )
  \mathrm{d} z^k\otimes \frac{\partial}{\partial z^l}.
\end{aligned}
\]
这里 $h^{l\overline{m}}$表示$\overline{h^{-1}}$的$(l,m)$分量，
$h=(h_{i\overline{j}})$此处被视为正定 Hermite 矩阵。

利用此联络，我们定义对应的曲率
\[
\Theta=\nabla^2=(\nabla'+\overline{\partial})^2=
\nabla'\overline{\partial}+\overline{\partial}\nabla' \in
\Gamma(X,\Lambda^{1,1}T_\mathbb{C}^*X \otimes \mathrm{End} (T^{1,0}X)).
\]

在局部坐标下：

\[
\Theta=\Theta^m_{j\overline{k}l}\mathrm{d} z^j\wedge \mathrm{d} \overline{z}^k
\otimes \mathrm{d} z^l \otimes
\frac{\partial}{\partial z^m},
\]

这里

\[
\Theta^m_{j\overline{k}l}
=-\frac{\partial \Gamma^m_{jl}}{\partial \overline{z}^k}.
\]

利用 Hermite 度量对上述曲率张量进行缩并，我们得到
\[
\begin{aligned}
  \Theta&=(\Theta_{j\overline{k}l}^n h_{n\overline{m}})\mathrm{d} z^j
  \wedge
  \mathrm{d} \overline{z}^k \otimes \mathrm{d} z^l \otimes \mathrm{d} \overline{z}^m\\
  &=\Theta_{j\overline{k}l\overline{m}}\mathrm{d} z^j\wedge
  \mathrm{d} \overline{z}^k
  \otimes \mathrm{d} z^l \otimes \mathrm{d} \overline{z}^m.
\end{aligned}
\]

我们一般不具体区分上述两种不同的曲率张量，在它们两者间互相转换是容易的。
在下文中，我们通常使用第二种曲率张量。

利用局部坐标，我们可将曲率张量的分量具体写出：
\[
\Theta_{j\overline{k}l\overline{m}}=
-\frac{\partial^2 h_{l\overline{m}}}
{\partial z^j \partial \overline{z}^k}+h^{p\overline{q}}
\frac{\partial h_{p\overline{m}}}{\partial \overline{z}^k}
\frac{\partial h_{l\overline{q}}}{\partial z^j}.
\]

在一般的文献与书籍里，我们把如上定义的曲率称作 Hermite 流形 $(X,\omega)$的曲率。
我们还有

::: definition
$(X,\omega)$上有如下曲率记号

- **全纯双截曲率**：对于 $X,Z\in T^{1,0}X$，
  我们定义 $X,Z$方向的全纯双截曲率为
  \[
  B(X,Z)=\frac{\Theta(X,\overline{X},Z,\overline{Z})}
  {|X|^2|Z|^2}.
  \]

- **全纯截曲率**：对于 $X\in T^{1,0}X$，我们定义 $X$方向的
  全纯截曲率为
  \[
  H(X)=B(X,X)=\frac{\Theta(X,\overline{X},X,\overline{X})}
  {|X|^4}.
  \]

- **实双截曲率**[@YZ19]：若 $e=\{e_1,\cdots,e_n\}$为
  $T^{1,0}X$在点$p$处的标准正交基，$a=\{a_1,\cdots,a_n\}$是一列非负实数，
  满足 $|a|^2=a_1^2+\cdots+a_n^2>0$，
  那么 $(e,a)$方向的实双截曲率为
  \[
  B_\mathbb{R}(e,X)=\frac{1}{|a|^2}\sum_{j,k}R_{j\overline{j}k
  \overline{k}}a_j a_k.
  \]

- **第一 Ricci 曲率**：它是如下张量
  $Ric^{(1)}(\omega):= i \Theta^{(1)}_{j\overline{k}}\mathrm{d} z^j
        \wedge
         \mathrm{d} \overline{z}^k$，其中
   \[
   \Theta^{(1)}_{j\overline{k}}=h^{l\overline{m}}
   \Theta_{j\overline{k}l\overline{m}}=-\frac
   {\partial^2 \log (\det h_{l\overline{m}}) }
   {\partial z^j \partial \overline{z}^k}.
   \]

- **第二 Ricci 曲率**：它是如下张量
  $Ric^{(2)}(\omega):=
        i \Theta^{(2)}_{j\overline{k}}\mathrm{d} z^j \wedge
         \mathrm{d} \overline{z}^k$，其中
   \[
    \Theta^{(2)}_{j\overline{k}}=h^{l\overline{m}}
   \Theta_{l\overline{m}j\overline{k}}.
   \]

- **第三 Ricci 曲率**：它是如下张量
  $Ric^{(3)}(\omega):
        = i \Theta^{(3)}_{j\overline{k}}\mathrm{d} z^j \wedge
         \mathrm{d} \overline{z}^k$，其中
   \[
    \Theta^{(3)}_{j\overline{k}}=h^{l\overline{m}}
   \Theta_{j\overline{m}l\overline{k}}.
   \]

- **标量曲率**：它是$X$上函数 $s=h^{l\overline{m}}
  h^{j\overline{k}}  \Theta_{j\overline{k}l\overline{m}}$。

:::

::: remark {@Hermite-曲率的对称性}
Hermite 流形的曲率张量有如下的对称关系：
\[
\Theta_{j\overline{k}l\overline{m}}=
\overline{\Theta_{ k \overline{j} m \overline{l}}}.
\]
与黎曼流形的曲率张量不同，我们一般不能将 Hermite 曲率张量的前两个与后两
个分量调换，亦即：
\[
\Theta_{j\overline{k}l\overline{m}}
\neq \Theta_{l\overline{m}j\overline{k}}.
\]
这种对称性的缺失也表明一般情况下，前面所定义的三种 Ricci 曲率互不相同。
:::

## $T_\mathbb{C} X$上的 Levi-Civita 联络及曲率

利用 $T_\mathbb{R} X$上的[[黎曼度量]]，我们得到 $T_\mathbb{R} X$上的 [[Levi-Civita 联络]]。将这个
联络 $\mathbb{C}$ 线性地扩张至$T_\mathbb{C} X$，我们得到了 $T_\mathbb{C} X$ 上的联络 $\nabla^{LC}$：
\[
\nabla^{LC}\colon\Gamma(X,T_\mathbb{C} X)\to \Gamma(X,T_\mathbb{C}^*X \otimes T_\mathbb{C} X).
\]

在局部坐标下，$\nabla^{LC}$的 Christoffel 符号可写为：
\[
\begin{aligned}
  \Gamma^l_{jk}&=\frac{1}{2}h^{l\overline{m}}\left(
  \frac{\partial h_{j\overline{m}}}{\partial z^k}+\frac{\partial
  h_{k\overline{m}}}{\partial z^j} \right),
  \quad
  \Gamma^{l}_{\overline{j}k}=\frac{1}{2}h^{l\overline{m}}\left(
  \frac{\partial h_{k\overline{m}}}{\partial \overline{z}^j}-
  \frac{\partial h_{k\overline{j}}}{\partial \overline{z}^m}
   \right),
  \\
  \Gamma^{\overline{l}}_{jk}&=0,
\end{aligned}
\]
其余的 Christoffel 符号可由如下的关系给出
\[
\Gamma_{AB}^C=\Gamma_{BA}^C,\quad \overline{\Gamma^{C}_{AB}}
=\Gamma_{\overline{A}\overline{B}}^{\overline{C}},
\]
这里 $A,B,C\in \{1,2,\cdots,n,\overline{1},\overline{2},\cdots,
\overline{n}\}$。

利用上述联络，我们定义如下曲率：
\[
R(X,Y,Z,W)=g(\nabla^{LC}_X\nabla^{LC}_Y Z-
\nabla^{LC}_Y\nabla^{LC}_X Z-\nabla^{LC}_{[X,Y]}Z,W).
\]

由于 $\nabla^{LC}$是 $(T_\mathbb{R} X,g)$所对应的 Levi-Civita 联络的线性延拓，
所以上述曲率是对应实流形曲率的复化。因此$R$具有同黎曼流形曲率相同的对称性，这
与上文由陈联络定义的曲率不同。（回忆 @Hermite-曲率的对称性）

利用坐标，我们可以写出曲率分量的具体式子：
\[
R^D_{ABC}=-\left(
\frac{\partial \Gamma^D_{AC}}{\partial z^B}-
\frac{\partial \Gamma^D_{BC}}{\partial z^A}+
\Gamma^F_{AC}\Gamma^D_{BF}-\Gamma_{BC}^{F}\Gamma_{AF}^{D}
\right).
\]
特别地，
\[
R^{m}_{j\overline{k}l}=-\left(
\frac{\partial \Gamma^m_{jl}}{\partial \overline{z}^k}-
\frac{\partial \Gamma^m_{\overline{k}l}}{\partial z^j}+
\Gamma^n_{jl}\Gamma^m_{\overline{k}n}-
\Gamma_{\overline{k}l}^{n}\Gamma_{jn}^{m}-
\Gamma^{\overline{n}}_{\overline{k}l}\Gamma^m_{j\overline{n}}
\right).
\]

## $T^{1,0}X$上的 Levi-Civita 联络及曲率

利用$T_\mathbb{C} X$上的 Levi-Civita 联络，我们得到
$T^{1,0}X$上的联络 $\hat{\nabla}^{LC}$，这由如下构造给出：
\[
\hat{\nabla}^{LC}\colon\Gamma(X,T^{1,0} X) \to
\Gamma(X,T^*_\mathbb{C} X \otimes T_\mathbb{C} X) \to
\Gamma(X,T^*_\mathbb{C} X \otimes T^{1,0} X),
\]
其中第一个态射由 $\nabla^{LC}$ 给出，第二个态射是 $T_\mathbb{C} X$到 $T^{1,0}X$的自然投影。

由于$\nabla^{LC}$与$X$的黎曼度量相容，容易验证 $\hat{\nabla}^{LC}$与
Hermite 度量 $h$相容，即
\[
\mathrm{d} h(s,t)= h(\hat{\nabla}^{LC} s, t)+ h ( s , \hat{\nabla}^{LC} t)
\quad 对\, s ,t \in \Gamma(X,T^{1,0} X) .
\]

利用局部坐标，可将$\hat{\nabla}^{LC}$表示为如下形式：
\[
\hat{\nabla}^{LC}_{\frac{\partial}{\partial z^j}}
\left(\frac{\partial}
{\partial z^k}\right)=
\hat{\Gamma}^l_{jk}\frac{\partial}{\partial
z^l},
\quad
\hat{\nabla}^{LC}_{\frac{\partial}{\partial \overline{z}^j}}
\left(\frac{\partial}
{\partial z^k}\right)=
\hat{\Gamma}^l_{\overline{j}k}
\frac{\partial}{\partial z^l},
\]
其中
\[
\hat{\Gamma}^l_{jk}=\frac{1}{2}h^{l\overline{m}}\left(
\frac{\partial h_{k\overline{m} } }{\partial z^j} +\frac{\partial
h_{j\overline{m}}}{\partial z^k}
\right),
\quad
\hat{\Gamma}^l_{\overline{j}k}=\frac{1}{2}h^{l\overline{m}}\left(
\frac{\partial h_{k\overline{m}}}{\partial \overline{z}^j}
-\frac{\partial h_{k\overline{j}}}{\partial \overline{z}^m}\right).
\]

$\hat{\nabla}^{LC}$的曲率张量 $\hat{R}\in \Gamma(X,\Lambda^{1,1}T_\mathbb{C}^*X
\otimes \mathrm{End}(T^{1,0}X))$由下式定义：
\[
\hat{R}(X,Y)s=\hat{\nabla}^{LC}_X\hat{\nabla}^{LC}_Y s-
\hat{\nabla}^{LC}_Y\hat{\nabla}^{LC}_X s-
\hat{\nabla}^{LC}_{[X,Y]} s.
\]
使用局部坐标，$\hat{R}$可写为：
\[
\begin{aligned}
  \hat{R}^m_{j\overline{k}l}=-\left(
  \frac{\partial \hat{\Gamma}^m_{jl}}{\partial \overline{z}^k}-
  \frac{\partial \hat{\Gamma}^m_{\overline{k}l}}{\partial z^j}+
  \hat{\Gamma}^n_{jl}\hat{\Gamma}^m_{\overline{k}n}-
  \hat{\Gamma}^n_{\overline{k}l}\hat{\Gamma}^m_{jn}
   \right),
   \\
  \hat{R}^m_{jkl}=-\left(
  \frac{\partial \hat{\Gamma}^m_{jl}}{\partial z^k}-
  \frac{\partial \hat{\Gamma}^m_{kl}}{\partial z^j}+
  \hat{\Gamma}^n_{jl}\hat{\Gamma}^m_{kn}-
  \hat{\Gamma}^n_{kl}\hat{\Gamma}^m_{jn}
   \right),
   \\
  \hat{R}^m_{\overline{j}\overline{k}l}=-\left(
  \frac{\partial \hat{\Gamma}^m_{\overline{j}l}}{\partial \overline{z}^k}-
  \frac{\partial \hat{\Gamma}^m_{\overline{k}l}}{\partial \overline{z}^j}+
  \hat{\Gamma}^n_{\overline{j}l}\hat{\Gamma}^m_{\overline{k}n}-
  \hat{\Gamma}^n_{\overline{k}l}\hat{\Gamma}^m_{\overline{j}n}
   \right).
\end{aligned}
\]

利用 Hermite 度量，我们可定义
\[
\hat{R}_{ABl\overline{m}}=\hat{R}_{ABl}^n h_{n\overline{m}}.
\]

## 上述三者的关系

::: proposition [两个 Levi-Civita 曲率的关系]
我们有
\[
\hat{R}^m_{\overline{j}\overline{k}l}
=R^m_{\overline{j}\overline{k}l},\quad
\hat{R}^m_{\overline{j}\overline{k}l}
=R^m_{\overline{j}\overline{k}l},
\]
且
\[
R^m_{j\overline{k}l}-\hat{R}^m_{j\overline{k}l}=
\hat{\Gamma}^{m}_{j\overline{n}}\overline{\hat{\Gamma}^n_{k\overline{l}}}.
\]
:::

::: proof
直接计算。
:::

::: proposition [Kähler 情形] {@kahler-情形的等价}
设 $(X,\omega)$为 Hermite 流形，以下三条等价：

- $\mathrm{d} \omega=0$。

- $\nabla^{LC} J=0$。

- $T^{1,0}X$上的陈联络$\nabla$与 $\hat{\nabla}^{LC}$相等。

:::

::: remark
当 $(X,\omega)$为 Kähler 流形时，对于 $U,V\in T^{1,0}X$，我们有
\[
\nabla^{LC}_U V\in T^{1,0}X,\quad
\nabla^{LC}_{\overline{U}} V \in T^{1,0}X,
\]
于是$\nabla^{LC}_U V=\hat{\nabla}^{LC}_U V=\nabla_U V$，
$\nabla^{LC}_{\overline{U}} V=\nabla_{\overline{U}} V$。

由于
\[
g(U,\overline{V})=\frac{1}{2}h(U,V),
\]
我们有
\[
\frac{1}{2}\Theta(U,\overline{V},Y,\overline{Z})=
R(U,\overline{V},Y,\overline{Z})\quad 对\, U,V,Y,Z\in T^{1,0}X.
\]
:::

## 参考文献

```bibliography
YZ19:
  type: article
  author: [杨晓奎, 郑方阳]
  title: On real bisectional curvature for Hermitian manifolds
  journaltitle: Transactions of the American Mathematical Society
  volume: 371
  number: 4
  year: 2019
  pages: 2703–2718
  doi: 10.1090/tran/7445
  label: YZ19
```

```terms
全纯双截曲率:
  en: holomorphic bisectional curvature
  fr: courbure bissectionnelle holomorphe
  la: curvatura bisectionalis holomorpha
全纯截曲率:
  en: holomorphic sectional curvature
  fr: courbure sectionnelle holomorphe
  la: curvatura sectionalis holomorpha
实双截曲率:
  en: real bisectional curvature
  fr: courbure bissectionnelle réelle
  la: curvatura bisectionalis realis
```
