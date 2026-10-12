---
title: 实现–脉伴随
categories: [同伦代数]
navboxes: [同伦代数]
---

**实现–脉伴随**是[[单纯集]]的[[几何实现 (单纯集)|几何实现]]在一般情况下的推广。
由于几何实现定义为[[左 Kan 扩张]]，
因此实际上对于任意余完备范畴 $\mathcal{D}$，
给定函子 $F\colon \mathcal{C} \to \mathcal{D}$ 都可以定义 $\mathcal{C}$
中对象在其上的“实现”以及其对应的[[脉]]。

## 定义

::: definition [$F$-实现] {@def-F-realization}
令 $\mathcal{C}$ 为范畴，$\mathcal{D}$ 为[[完备|余完备]]范畴，
对于函子 $F \colon \mathcal{C} \to \mathcal{D}$，
其**实现** $|{-}|^1_F$ 定义为左 Kan 扩张
\[
\begin{tikzcd}
  \cal{C} \ar[dr, "F"]\ar[d,"y"] \\
  \mathsf{PSh}(\mathcal{C}) \ar[r,"|{-}|^1_F"'] & \mathcal{D},
\end{tikzcd}
\]
即 $|{-}|^1_F \coloneqq \operatorname{Lan}_y F$，若使用[[余端]]的语言表述即为，
对于预层 $X$，其 $F$ 实现定义为
\[
|X|^1_F \simeq \int^C \mathsf{PSh}(\mathcal{C})(y(C),X)\otimes FC
\]
:::

事实上，如上定义的 $F$-实现存在右伴随，
将右伴随称为 $F$-脉。

::: definition [$F$-脉] {@def-F-nerve}
称函子 $\mathrm{N}^1_F \colon \mathcal{D}\to \mathsf{PSh}(\mathcal{C})$ 为 $F$ 的**脉**，
是指对于 $D \in \mathcal{D}$，$\mathrm{N}^1_F(D)$ 定义为函子 $C \mapsto \mathcal{D}(F(C),D)$。
:::

::: theorem
令 $\mathcal{C}$ 为范畴，$\mathcal{D}$ 为余完备范畴，
对于函子 $F \colon \mathcal{C} \to \mathcal{D}$，
有伴随函子
\[
|{-}|^1_F \dashv \mathrm{N}^1_F.
\]
:::

::: proof
[@Loregian_2021, [Proposition 3.2.2](https://arxiv.org/pdf/1501.02503#theorem.3.2.2)]
:::

## $(\infty,1)$-范畴上的实现–脉伴随

此外，还可以进行纵向的推广，即将 $\mathcal{C}$ 变为 $(\infty,1)$-范畴，
此时 $\mathcal{D}$ 就需要变为余完备的 $(\infty,1)$-范畴。
只需将 $F$ 修改为 $(\infty,1)$-范畴之间的函子即可给出实现–脉伴随的 $(\infty,1)$-版本，
此时只需将 @def-F-realization 以及 @def-F-nerve 改成 $(\infty,1)$-范畴中的对应版本，
仍有定理：

::: theorem {@thm-inf-cat-realization-nerve}
令 $\mathcal{C}$ 为 $(\infty,1)$-范畴，$\mathcal{D}$ 为余完备 $(\infty,1)$-范畴。
对于 $(\infty,1)$-范畴之间的函子 $F \colon \mathcal{C} \to \mathcal{D}$，
有伴随函子
\[
|{-}|_F \dashv \mathrm{N}_F
\]
:::

::: proof
[@Kerodon, [04BF](https://kerodon.net/tag/04BF)]
:::

## 例子

取 $\mathcal{C} = \mathbb{\Delta}$，则

- 若选定 $\mathcal{D}= \mathsf{Top}$，
  取 $F \colon \mathbb{\Delta}\to \mathsf{Top}$ 为 $[n]\mapsto \Delta^n$ 时，
  就恢复出[[几何实现 (单纯集)|几何实现]]，
  对应的 $F$-脉称为[[奇异单纯集]]。

- 若选定 $\mathcal{D} = \mathsf{Cat}$，
  取 $F \colon \mathbb{\Delta} \hookrightarrow \mathsf{Cat}$ 将 $[n]$ 视同[[全序集]]，
  则 $|{-}|^1_F$ 将单纯集映为其[[同伦范畴]]，且 $\mathrm{N}^1_F$ 为范畴的[[脉]]。

- 若选定 $\mathcal{D} = \mathsf{Cat}_{\mathsf{sSet}}$ 为[[单纯范畴]]所构成的范畴，
  取 $F \colon \mathbb{\Delta} \hookrightarrow \mathsf{Cat}_{\mathsf{sSet}}$
  将 $[n]$ 视同其[[道路范畴]] $\mathfrak{C}^n$（有些文献中记为 $\mathrm{Path}[n]$），
  则对应实现 $|{-}|^1_F$ 为广义几何实现 $\mathfrak{C}$，
  而 $\mathrm{N}^1_F$ 为[[同伦脉]]（或称[[单纯脉]]），
  记为 $\mathfrak{N}$（有些文献中记为 $\mathrm{N}^{\operatorname{hc}}$）。

- 接下来将 $\mathsf{sSet}$ 改为 $\mathsf{sAb}$ 为单纯 Abel 群范畴
  （由[[充实范畴 Yoneda 引理]]可知仍然可以讨论脉与实现）。
  若选定 $\mathcal{D} = \mathsf{Ch}_{\geq 0}(\mathsf{Ab})$ 为连通[[链复形]]范畴，
  选定函子 $F \colon \mathbb{\Delta} \to \mathsf{Ch}_{\geq 0}(\mathsf{Ab})$，
  将 $[n]$ 映为 $\mathrm{N}_*(\mathbb{Z}(\Delta)[n])$
  为[[Dold–Kan 对应|正规化链复形]]，
  则 $|{-}|_F$ 为正规化链复形，
  且 $\mathrm{N}_F$ 为 [[Dold–Kan 对应]]
  $\mathrm{DK} \colon \mathrm{Ch}_{\geq 0}(\mathsf{Ab})\to \mathsf{sAb}$。

接下来给出 $(\infty,1)$-范畴中的例子：

- 取 $\mathcal{D}$ 为任意余完备 $(\infty,1)$-范畴，
  $F \colon \mathrm{N}(\mathbb{\Delta}) \to \mathcal{D}$ 为任意 $(\infty,1)$-范畴间的函子，
  则有 $(\infty,1)$-版本的实现–脉伴随
  \[
  \begin{tikzcd}
     \mathsf{sAni} \ar[r,bend left = 40pt,"|{-}|_F"] & \mathcal{D}\ar[l,bend left = 40pt,"\operatorname{N}_F"]
  \end{tikzcd}
  \]

- 特别地，取 $\mathcal{D} = \mathsf{Cat}_{\infty}$
  为 $(\infty,1)$-范畴所构成的 $(\infty,1)$-范畴，
  且 $F$ 将 $[n]$ 映为全序集（视为 $\mathsf{Cat}$ 中的对象，
  通过 $\mathrm{N}(\mathsf{Cat})\subset \mathsf{Cat}_{\infty}$ 视为后者中的对象），
  给出的实现 $|{-}|_F$ 称为[[结合范畴]]，
  一般记为 $\operatorname{asscat}\colon \mathsf{sAni} \to \mathsf{Cat}_{\infty}$，
  而脉 $\operatorname{N}_F$ 称为[[Rezk 脉]]，
  一般记为 $\operatorname{N}^r$。

## 参考资料

使用端与余端定义实现–脉伴随：

```bibliography
Loregian_2021:
  type: book
  title: (Co)end Calculus
  doi: 10.1017/9781108778657
  publisher: Cambridge University Press
  author: 'Loregian, Fosco'
  year: 2021
```

$(\infty,1)$-范畴中的实现–脉伴随：

```bibliography
Kerodon:
  type: book
  title: Kerodon
  author: Jacob Lurie
  year: 2018
  url: https://kerodon.net
```

```terms
$F$-实现:
  en: $F$-realization
$F$-脉:
  en: $F$-nerve
```
