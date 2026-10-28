---
title: 格式塔
---

<problems>
- “性质”一节需要扩充，缺少 $n$-平展、$n$-紧合的定义。
</problems>

::: convention
在本文中，

- [[范畴]]都指 [[$(\infty,1)$-范畴]]。
- 取定[[正则基数]] $\kappa>\aleph_0$。实践中可径取
  $\kappa=\aleph_1$。
- 以 $\mathsf{Pr}^{\mathrm{L}}_\kappa$ 表示 $\kappa$-[[可表现范畴]]沿保
  $\kappa$-紧对象的左[[伴随函子]]构成的范畴。注意
  $\mathsf{Pr}^{\mathrm{L}}_\kappa$ 本身是个 $\kappa$-可表现范畴，其
  $\kappa$-紧对象为那些 $\kappa$-紧对象子范畴 [[$\kappa$-小]]者，
  即 $\mathsf{Pr}^{\mathrm{L}}_\kappa\in\mathsf{Pr}^{\mathrm{L}}_\kappa$。
  不仅如此，$\mathsf{Pr}^{\mathrm{L}}_\kappa$
  按 [[Lurie 张量积]] 自然构成
  $\kappa$-可表现[[对称幺半 (∞,1)-范畴|对称幺半范畴]]，
  即 $\mathsf{Pr}^{\mathrm{L}}_\kappa\in\mathsf{CAlg}(\mathsf{Pr}^{\mathrm{L}}_\kappa)$。

:::

**格式塔**是 [[Peter Scholze]] 和 [[Germán Stefanich]] 在 2025
年提出的概念，意在用[[范畴化]]的思想统合各类[[代数几何]]、[[解析几何]]对象。
[[概形]]、[[叠]]、[[解析叠]]等都是其特例。

## 定义

::: definition [$\kappa$-可表现 $n$-范畴]
对自然数 $n$ 归纳定义 **$\kappa$-可表现 $n$-范畴**的
$\kappa$-可表现[[对称幺半 (∞,1)-范畴|对称幺半范畴]]
$n\mathrm{Pr}\in\mathsf{CAlg}(\mathsf{Pr}^{\mathrm{L}}_\kappa)$ 如下：

- $0\mathrm{Pr}:=\mathsf{Ani}=\mathbb{1}_{\mathsf{Pr}^{\mathrm{L}}_\kappa}\in\mathsf{Pr}^{\mathrm{L}}_\kappa$
  为[[生象]]范畴，
  也即 $\mathsf{Pr}^{\mathrm{L}}_\kappa$ 的张量[[幺元]]。

- $n\mathrm{Pr}:=\mathsf{Mod}_{(n-1)\mathrm{Pr}}(\mathsf{Pr}^{\mathrm{L}}_\kappa)$ 为
  $(n-1)\mathrm{Pr}\in\mathsf{CAlg}(\mathsf{Pr}^{\mathrm{L}}_\kappa)$ 的[[模范畴]]。注意由于
  $\mathsf{Pr}^{\mathrm{L}}_\kappa$ 本身是 $\kappa$-可表现对称幺半范畴，
  其中交换代数对象的模范畴也是。

:::

::: remark
显然 $n\mathrm{Pr}$ 依赖于选定的正则基数 $\kappa$，
但由于我们自始至终固定一个 $\kappa$，为记号简明起见就不把它显式写出了。
:::

::: remark
$n\mathrm{Pr}$ 其实是 $(\infty,n+1)$-范畴，但这里强调其代数属性，
故不使用本百科对范畴习用的无衬线字体。此外容易发现 $1\mathrm{Pr}=\mathsf{Pr}^{\mathrm{L}}_\kappa$。
:::

::: definition [Stefanich 环]
**Stefanich 环** $A$ 指如下数据：

- 序列 $(A_n)_{n\in\mathbb{N}}$，其中 $A_n\in\mathsf{CAlg}(n\mathrm{Pr})$；

- 同构 $(A_n=\operatorname{End}_{A_{n+1}}(1))_{n\in\mathbb{N}}$，
  此处 $1\in A_{n+1}$ 指其幺元，$\operatorname{End}$ 指把
  $A_{n+1}\in(n+1)\mathrm{Pr}$ 看成
  $n\mathrm{Pr}$-[[充实 (∞,1)-范畴|充实范畴]]取得的 $n\mathrm{Pr}$
  中的自同态代数。由于 $A_{n+1}$ 对称幺半，其 $\operatorname{End}(1)$
  自然是交换代数。

Stefanich 环的范畴记作 $\mathsf{StRing}$，
显然 $\mathsf{StRing}\in\mathsf{CAlg}(\mathsf{Pr}^{\mathrm{L}}_\kappa)$。
:::

::: definition [格式塔]
定义范畴
$$
\mathsf{Gest}:=\mathsf{StRing}^\mathrm{op},
$$
其中对象称为**格式塔**。
:::

## 例子

- $\mathrm{pt}:=(\mathrm{pt},0\mathrm{Pr},1\mathrm{Pr},\ldots)$ 是 $\mathsf{StRing}$ 的[[始对象]]，
亦即格式塔范畴的[[终对象]]。

- $\emptyset:=(\mathrm{pt},\mathrm{pt},\ldots)$ 是 $\mathsf{StRing}$ 的[[终对象]]，
亦即格式塔范畴的[[始对象]]。

- 球谱 $\mathbb{S}:=(\Omega^\infty\mathbb{S},
\mathsf{Sp},\mathsf{Mod}_\mathsf{Sp},\mathsf{Mod}_{\mathsf{Mod}_\mathsf{Sp}},\ldots)\in\mathsf{StRing}$ 是 Stefanich 环。
[[谱代数几何]]里的所有对象都是其代数。

## 性质

::: theorem
对任意 $A\in\mathsf{StRing}$ 和 $n\in\mathbb{N}$，
$$
\mathsf{Ind}_\kappa(({\mathsf{StRing}_{A/}^{n\text{-}\mathrm{ét}}})^\mathrm{op})
$$
是[[(∞,1)-意象|意象]]。
:::

```terms
格式塔:
  en: gestalt
  de: Gestalt
```
