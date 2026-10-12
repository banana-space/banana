---
title: 有限域
aliases: [$q$ 元域, $p$ 元域]
categories: [域论]
navboxes: [域论]
---

在[[代数学]]中，**有限域**是指由有限个元素构成的[[域]]。

对[[素数]] $p$ 而言，域 $\mathbb{F}_p = \mathbb{Z} / p\mathbb{Z}$ 是最简单的有限域，
它有 $p$ 个元素。其中的加法、乘法就是整数模 $p$ 的加法、乘法。

一般而言，所有有限域都形如 $\mathbb{F}_{p^n}$，其中 $p$ 是素数，$n$ 是正整数。
该有限域有 $p^n$ 个元素，可以从 $\mathbb{F}_p$ 通过[[扩域]]得到。

例如，考虑域
\[
\mathbb{F}_3 [\sqrt{-1}] = \{ a + b \sqrt{-1} \mid a, b \in \mathbb{F}_3 \}.
\]
可以验证它在自然的加法、乘法下构成域。
它有 $9$ 个元素，因此这样就通过 $\mathbb{F}_3$ 的扩域得到了有限域 $\mathbb{F}_9$。

## 定义

::: definition [有限域]
**有限域**是含有有限个元素的域。
:::

所有有限域都能以下面的方式给出。

::: definition [$q$ 元域]
- 对[[素数]] $p$，
  [[环]] $\mathbb{Z} / p\mathbb{Z}$ 是[[域]]，称为 **$p$ 元域**，
  记作 $\mathbb{F}_p$。

- 对素数 $p$ 及正整数 $n$，记 $q = p^n$。
  [[多项式]] $x^q - x$ 在 $\mathbb{F}_p$
  上的[[分裂域]]含有 $q$ 个元素，称为 **$q$ 元域**，
  记作 $\mathbb{F}_q$。

:::

## 性质

::: proposition [分类]
任意有限域必同构于上述 $q = p^n$ 元域。
此时域的[[特征 (环论)|特征]]为 $p$。
:::

::: proposition [加法群与乘法群]
域 $\mathbb{F}_{p^n}$ 的加法群是 $(\mathbb{Z} / p\mathbb{Z})^{\oplus n}$，
它的乘法群是[[循环群]] $\mathbb{Z} / (p^n - 1)\mathbb{Z}$。
:::

::: proposition [包含关系]
存在有限域间的嵌入
$\mathbb{F}_{q_1} \to \mathbb{F}_{q_2}$，
其中 $q_1 = p_1^n$，$q_2 = p_2^m$，
当且仅当 $p_1 = p_2 = p$ 且 $n \mid m$。
且此时 $\mathbb{F}_{p^m}$ 中具有唯一的 $p^n$ 元子域。
由此可无歧义地谈论[[域扩张]]
$\mathbb{F}_{p^m} / \mathbb{F}_{p^n}$。
:::

::: proposition [代数闭包]
[[余极限]] $\operatorname{colim} \mathbb{F}_{q^n}$
（其中 $n$ 取遍正整数，其间的箭头为取定的某个嵌入映射）
给出了 $\mathbb{F}_q$ 的[[代数闭包]]
$\overline{\mathbb{F}}_q$。
:::

::: proposition [自同构]
对 $p^n$ 元域 $\mathbb{F}_{p^n}$，
由 $x \mapsto x^p$（称为 **[[Frobenius 映射]]**）
定义的映射 $\operatorname{F}$ 是它的[[自同构]]。
$\mathbb{F}_{p^n}$ 的所有自同构为 $\operatorname{F}^k$ 形式，
且 $\operatorname{F}^n$ 为[[恒等映射]]。
:::

::: proposition [完美性]
$\mathbb{F}_q$ 是[[完美域]]。
:::

::: proposition [Galois 群]
[[域扩张]] $\mathbb{F}_{p^m} / \mathbb{F}_{p^n}$
的 [[Galois 群]]是[[循环群]] $\mathbb{Z} / \frac{m}{n}\mathbb{Z}$，
由上述 $\operatorname{F}^n$ [[生成 (群论)|生成]]。
由此有限域的[[绝对 Galois 群]]是 $\widehat{\mathbb{Z}}$。
:::

::: remark [类比]
可以将有限域类比于[[圆周]] $\mathbb{S}^1$，
域扩张理论相应于[[覆叠空间]]理论。
例如嵌入 $\mathbb{F}_q \to \mathbb{F}_{q^n}$
对应于[[覆叠空间|覆叠]] $\mathbb{S}^1 \to \mathbb{S}^1$，
它由 $x \mapsto x^n$ 给出。
:::

```terms
有限域:
  en: finite field
  de: endlicher Körper
  fr: corps fini
  grc: πεπερασμένον σῶμα
  la: corpus finitum
```
