---
title: Hecke $L$ 函数
categories: [解析数论]
notices:
  - name: 问题
    items:
      - “Dirichlet 定理”“素数定理”各节需要扩充。
      - “解析延拓与函数方程”一节中，完备化 $\Lambda(\chi,s)$ 的 Gamma 因子里似乎缺少变量 $s$（例如似乎应为 $\Gamma_{\mathbb{R}}(s+|m_v|+i\varphi_v)$）。
---

**Hecke $L$ 函数**是 [[Dirichlet $L$ 函数]]
的推广，
它关心比[[Dirichlet 特征]]更加一般的[[Hecke 特征]]。

## 定义

::: definition
给一个 Hecke 特征 $\chi\colon\mathbb{I}_K/K^{\times}\rightarrow U(1)$，
假设[[导子(数论)|导子]]是 $\mathfrak{f}_{\chi}$。
定义 $\chi$ 的 Hecke $L$ 函数为
\[
L(\chi,s)=\prod_{\mathfrak{p}\nmid \mathfrak{f}_{\chi}}
\frac1{1-\chi(\mathfrak{p})N(\mathfrak{p})^{-s}}.
\]
这里 $\chi(\mathfrak{p})$ 定义成 $\chi(\pi_{\mathfrak{p}})$，
它是良定的，
因为 $\mathfrak{p}\nmid \mathfrak{f}_{\chi}$。
:::

::: remark
当我们取 $K=\mathbb{Q}$，
Hecke 特征为如下的自然同态
\[
\pi\colon\mathbb{I}_{\mathbb{Q}}/{\mathbb{Q}}^{\times}
\twoheadrightarrow\left( \mathbb{R}_{>0}\prod_{p}(1+p^{v_p(m)}) \right)
\bigg\backslash\mathbb{I}_{\mathbb{Q}}\bigg/{\mathbb{Q}}^{\times}
\cong \left( \mathbb{Z}/m\mathbb{Z} \right)^{\times}
\]
与 Dirichlet 特征
\[
\chi\colon\left( \mathbb{Z}/m\mathbb{Z} \right)^{\times}
\rightarrow U(1)
\]
的复合，
则给出的 Hecke $L$ 函数就是 Dirichlet $L$ 函数
\[
L(\chi,s)=\prod_p\frac1{1-\chi(p)p^{-s}}.
\]
:::

::: remark
如果取 $\chi$ 是平凡特征，
那么 Hecke $L$ 函数是 [[Dedekind $\zeta$ 函数]]
$\zeta_{K}(s)$。
:::

## 性质

### 解析延拓与函数方程

取定 Hecke 特征 $\chi$，
以及标准的加性特征 $\psi_{\mathfrak{p}}\colon K_{\mathfrak{p}}\rightarrow U(1)$。

::: notation*
我们记：

- 对于 $v\mid\infty$，
  记
  \[
  n_v=\begin{cases}
    1,&K_v=\mathbb{R};\\
    2,&K_v=\mathbb{C},
  \end{cases}
  \]
  记 $\varphi_v$、$m_v$ 满足：
  \[
  \chi_v(x)=\left( \frac{x}{|x|} \right)^{m_v}
  |x|^{in_v\varphi_v}.
  \]

- 取 Hecke $L$ 函数的完备化为
  \[
  \Lambda(\chi,s)=
  (|\Delta_{K/\mathbb{Q}}|N(\mathfrak{f}_{\chi}))^{\frac{s}2}
  \prod_{v\mid\mathbb{R}}\Gamma_{\mathbb{R}}\left( |m_v|+i\varphi_v \right)
  \prod_{v\mid\mathbb{C}}\Gamma_{\mathbb{C}}\left( \frac{|m_v|}2+i\varphi_v \right)
  L(\chi,s).
  \]

- 取 $M=\sum_{v\mid\infty}|m_v|$。

- 取 [[Gauß 和]]
  \[
  \tau_{\mathfrak{p}}(\chi)=
  \sum_{u\in\mathcal{O}^{\times}_{K_{\mathfrak{p}}}/
  1+\mathfrak{f}_{\chi,\mathfrak{p}}}
  (\psi_{\mathfrak{p}}\chi_{\mathfrak{p}})
  (u/\varpi_{\mathfrak{p}}^{\operatorname{val}_{\mathfrak{p}}(\mathfrak{d}_{\chi})}).
  \]

- 取常数
  \[
  W(\chi)=i^{-M}
  N(\mathfrak{f}_{\chi})^{-\frac1{2}}
  \prod_{\mathfrak{p}\mid\mathfrak{f}_{\chi}}
  \tau_{\mathfrak{p}}(\chi)
  \prod_{\mathfrak{p}\nmid\mathfrak{f}_{\chi}}
  \chi(\mathfrak{d}_{K/\mathbb{Q},\mathfrak{p}}^{-1}).
  \]

:::

Hecke 最早证明了如下结果：

::: theorem
对于 Hecke 特征 $\chi$，
设它的共轭为 $\overline{\chi}$，
则 $\Lambda$ 可以延拓为 $\mathbb{C}$ 上的[[亚纯函数]]，
并有函数方程
\[
\Lambda(\chi,s)=W(\chi)\Lambda(\overline{\chi},1-s).
\]
:::

1950 年 Tate 受到 Dedekind $\zeta$ 函数的函数方程证明的启发，
发展了一套“[[理元群]]上 Fourier 分析”的办法（[[Tate 论题]]），
从而简洁地证明了 Hecke $L$ 函数的函数方程。
详见：

<see>[[Tate 论题]]</see>

### 零点与极点

受到 [[Riemann $\zeta$ 函数]]中关于零点性质的启发，
我们有如下关于零点的定理：

::: theorem
对于任一 Hecke 特征 $\chi$，
有
\[
L(\chi,1+it)\ne0,\,\forall\, t\in\mathbb{R}.
\]
:::

证明也几乎完全类似于 $\zeta_{\mathbb{Q}}(s)$ 时的情况。

## 应用

### Dirichlet 定理

### 素数定理

```terms
Hecke $L$ 函数:
  en: Hecke $L$-function
  fr: fonction $L$ de Hecke
```
