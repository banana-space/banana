---
title: Morera 定理
categories: [复分析]
navboxes: [复分析]
---

在[[复分析]]中，
**[[Giacinto Morera|Morera]] 定理**是判断一个函数是否[[全纯函数|全纯]]的条件。
[[Cauchy 积分定理]]说明，
在[[复平面]]上，
全纯函数沿[[闭曲线]]的积分为 $0$。
而 Morera 定理则说明，
满足这一条件的函数必为全纯函数。

## 叙述与证明

::: theorem [Morera]
设 $U \subset \mathbb{C}$ 为[[开集]]，
$f \colon U \to \mathbb{C}$ 为[[连续函数]]。则下列等价：

1. $f$ [[全纯函数|全纯]]。

2. 对 $U$ 中任意[[零伦]]的[[可求长曲线|可求长]][[闭曲线]] $\gamma$，
   [[曲线积分]]
   \[
   \oint_\gamma f (z) \, d z = 0.
   \]

3. 对 $U$ 内的任意[[三角形]] $T$（实心、包含边界），
   曲线积分
   \[
   \oint_{\partial T} f (z) \, d z = 0,
   \]
   其中 $\partial T$ 为 $T$ 的[[边界]]。

:::

::: proof
1 $\Rightarrow$ 2 是由于 [[Cauchy 积分定理]]；
2 $\Rightarrow$ 3 是平凡的。
下面证明 3 $\Rightarrow$ 1。

只需证明 $f$ 在每个点 $p \in U$ 附近全纯。
不妨记 $p = 0$。取 $r > 0$，
使以之为半径的开球 $V = B_r (0) \subset U$。
对 $z \in V$，定义
\[
F (z) = \int_0^z f (z) \, d z,
\]
这里是沿着直线段做[[曲线积分]]。
对任意 $\varepsilon, \theta \in \mathbb{R}$，
若 $z + \varepsilon \mathrm{e}^{\mathrm{i} \theta} \in V$，
则对以 $0, z, z + \varepsilon \mathrm{e}^{\mathrm{i} \theta}$ 为顶点的三角形用条件 3，知
\[
F (z + \varepsilon \mathrm{e}^{\mathrm{i} \theta}) =
F (z) + \mathrm{e}^{\mathrm{i} \theta}
\int_0^\varepsilon f (z + x \mathrm{e}^{\mathrm{i} \theta}) \, d x.
\]
由[[微积分基本定理|微积分第一基本定理]]，
知 $\varepsilon \to 0$ 时，上述积分为 $\varepsilon f (z) + o (\varepsilon)$。
这说明对 $z' \in \mathbb{C}$，当 $z' \to 0$ 时
\[
F (z + z') = F (z) + z' f (z) + o (|z'|).
\]
故由全纯函数的定义，$F$ 全纯，且 $F' = f$。
由 [[Cauchy 积分公式]]，$F''$ 存在，故 $f$ 全纯。
:::

```terms
Morera 定理:
  en: Morera's theorem
  fr: théorème de Morera
  de: Satz von Morera
```
