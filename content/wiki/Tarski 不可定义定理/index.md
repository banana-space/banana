---
title: Tarski 不可定义定理
categories: [模型论]
notices:
  - name: 问题
    items:
      - “历史”一节需要扩充。
---

**Tarski 不可定义定理**大致说的是，
在足够强的[[形式系统]]里，
语义上的真理是不可以被这个系统本身所定义的。
它可以被视作说谎者悖论、
[[Russell 悖论]]等“自指”的思想在形式语言里的产物。

## 历史

## 定理与证明

::: theorem [Tarski] {@Tarski}
如果一个带否定连接词 $\neg$、
[[Gödel 编号]] $\#$ 的形式系统 $T$
以及其上的一个模型 $\mathcal{M}$ 满足如下的**对角线引理**：

对于任意只含一个自由变元 $x$ 的公式 $\varphi(x)$，
存在语句 $\gamma$ 使得
$\mathcal{M}\models\gamma\leftrightarrow \varphi(\#\gamma)$，

则集合 $\#\operatorname{Th}(\mathcal{M})$ 不是[[可定义集]]。
:::

::: proof
若否，
设 $\operatorname{True}(x)$ 定义此集合，
即 $\mathcal{M}\models\operatorname{True}(\#\varphi)$ 等价于
$\mathcal{M}\models\varphi$。
但在对角线引理中取 $\varphi=\neg\operatorname{True}$，
得到对某个 $\gamma$，
$\mathcal{M}\models\gamma\leftrightarrow \neg\operatorname{True}(\#\gamma)$。

如果 $\mathcal{M}\models\gamma$，
则 $\mathcal{M}\models\operatorname{True}(\#\gamma)$，
与 $\mathcal{M}\models\gamma\leftrightarrow \neg\operatorname{True}(\#\gamma)$ 矛盾！
反之亦然，
得到矛盾。
:::

## 应用

一个足够强的形式系统是 $1$ 阶[[Peano 算术]] $\mathsf{PA}_1$，
它带有标准的 Gödel 编号。

::: proposition
如果 $\mathbb{N}$ 是 $\mathsf{PA}_1$ 的模型，
那么它就满足对角线引理。
:::

::: proof
首先，
如下的函数可以延拓到某个[[可定义集|可定义函数]]：

```math
\begin{aligned}
    d\colon\#& \operatorname{Free}(x)&\rightarrow& \mathbb{N}\\
    &\# \phi&\mapsto& \# \phi(\#\phi).
\end{aligned}
```

这是因为它是[[递归可枚举集合|递归可枚举函数]]，
从而在[[算术阶层]]里属于 $\Sigma^0_1$（[[Post 定理]]），
故它可定义。
取 $\gamma$ 为 $\chi(\#\chi)$，
其中
\[
\chi(x)=\exists y(y=d(x)\wedge \varphi(y)).
\]
下验证 $\mathbb{N}\models\gamma\leftrightarrow \varphi(\#\gamma)$。

- 一方面，
  如果 $\mathbb{N}\models\gamma$，
  则 $\mathbb{N}\models\varphi(d(\#\chi))$，
  即 $\mathbb{N}\models\varphi(\#\chi(\#\chi))$，
  即 $\mathbb{N}\models\varphi(\#\gamma)$。

- 另一方面，
  假设 $\mathbb{N}\models\varphi(\#\gamma)$。
  我们有 $x=\#\chi$、
  $y=\#\gamma$ 满足 $\mathbb{N}\models y=d(x)$。
  结合 $\mathbb{N}\models\varphi(\#\gamma)$，
  得到 $\mathbb{N}\models\exists y(y=d(\#\chi)\wedge \varphi(y))$，
  即 $\mathbb{N}\models\gamma$。

综合两方面得到命题。
:::

::: remark
由 Tarski 定理（@-Tarski）得到
$\# \operatorname{Th}(\mathbb{N})$ 是不可定义集。
但是 Gödel 编号本身给出 $\# \operatorname{Th}(\mathsf{PA}_1)$ 是可定义集，
这说明 $\mathsf{PA}_1$ 有非标准模型，
证明了[[Gödel 不完备性定理|Gödel 第一不完备定理]]。
:::

```terms
Tarski 不可定义定理:
  en: Tarski's undefinability theorem
  fr: théorème de Tarski
  de: Tarskis Undefinierbarkeitssatz
```
