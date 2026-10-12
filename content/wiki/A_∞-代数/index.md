---
title: '$\mathbb{A}_\infty$-代数'
aliases: [A∞-代数]
categories: [高阶代数]
notices:
  - name: 问题
    items:
      - “性质”一节需要扩充。
navboxes: [高阶代数]
---

::: convention
在本文中，

- [[范畴]]都指 [[$(\infty,1)$-范畴]]。

:::

**$\mathbb{A}_\infty$-代数**是[[结合代数]]在[[高阶代数]]中的推广，
即[[幺半 $(∞,1)$-范畴]]中的对象，带有结合的乘法。在
[[$(∞,1)$-范畴]]的语境下，常简单称之为**结合代数**。

## 定义

::: definition [单形范畴]
回忆 **[[单形范畴]]** $\mathbb{\Delta}$ 的定义：

- 其对象为所有形如 $[n] = \{0,\dotsc,n\}$ 的集合，
  其中 $n \geq 0$。

- 态射集 $\mathbb{\Delta}([m],[n])$
  由所有从 $[m]$ 到 $[n]$ 的保序映射
  （即保持 $\leq$ 关系的映射）构成。

称映射 $f\colon[m]\to[n]$ 为：

- **活性**，指 $f$ 保持最大值、最小值，
  即 $f(0)=0$，$f(m)=n$。

- **惰性**，指 $f$ 为区间含入，即对 $0\le k<m$，
  $f(k+1)=f(k)+1$。

也称 $\mathbb{\Delta}^\mathrm{op}$ 中的对应映射为活性、惰性。显然，$\mathbb{\Delta}$
中任一映射 $f$ 都唯一分解如 $f=i\circ a$，
其中 $a$ 为活性，$i$ 为惰性；所以，$\mathbb{\Delta}^\mathrm{op}$
中任一映射 $\varphi$ 都唯一分解如 $\varphi=\alpha\circ\iota$，
其中 $\alpha$ 为活性，$\iota$ 为惰性。
:::

::: remark
上面的定义取自[[代数模式]]。此概念在编码高阶代数结构时较为常用。
:::

::: definition {@def}
设 $\mathcal{C}$ 是幺半范畴，依定义视为[[推出纤维化]]
$\mathcal{C}^\otimes\to\mathbb{\Delta}^\mathrm{op}$。$\mathcal{C}$
中**结合代数**，或称 **$\mathbb{A}_\infty$-代数**，
指[[截面]] $A^\otimes\colon\mathbb{\Delta}^\mathrm{op}\to\mathcal{C}^\otimes$，
满足惰性映射的像都是推出边（或称余笛卡尔边）。称
$[1]\in\mathbb{\Delta}^\mathrm{op}$ 的像 $A^\otimes([1])\in\mathcal{C}$
为此结合代数的**底对象**，简记作 $A$。无歧义时也以
$A$ 表示此结合代数。

$\mathcal{C}$ 中所有结合代数构成的范畴记作 $\mathsf{Alg}(\mathcal{C})$。
:::

::: remark
记号承 @def。由[[幺半 $(∞,1)$-范畴]]的定义，
$\mathcal{C}^\otimes$ 在 $[n]\in\mathbb{\Delta}^\mathrm{op}$ 上的纤维为
$\mathcal{C}^\otimes_{[n]}=\mathcal{C}^n$，且
$\mathcal{C}^n$ 到 $\mathcal{C}$ 的 $n$ 个投影对应于
$\mathbb{\Delta}^\mathrm{op}$ 中 $[n]$ 到 $[1]$ 的 $n$ 个惰性映射，即 $[1]$
分别作为 $\{0,1\},\ldots,\{n-1,n\}$ 含入 $[n]$。
所以由于 $A^\otimes$ 把惰性映射打到推出边，就有
$A^\otimes([n])=(A,\ldots,A)\in\mathcal{C}^n$。
现观察 $\mathbb{\Delta}^\mathrm{op}$ 中 $[n]$ 到 $[1]$ 的活性映射，即把
$[1]$ 打到 $\{0,n\}\subset[n]$。
由[[幺半 $(∞,1)$-范畴]]条目中所述，$(A,\ldots,A)\in
\mathcal{C}^n$ 沿此活性映射的推出为 $n$ 个 $A$ 的张量积
$A\otimes\cdots\otimes A$，故 $A^\otimes$ 给出映射
$$
A\otimes\cdots\otimes A\to A,
$$
此即 $A$ 的 **（$n$ 元）乘法**。$n=0$ 时这成为映射
$\mathbb{1}_{\mathcal{C}}\to A$，此即 $A$ 的**幺元**。
:::

## 性质

```terms
'$\mathbb{A}_\infty$-代数':
  en: '$\mathbb{A}_\infty$-algebra'
```
