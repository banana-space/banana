---
title: 纤维模式
categories: [高阶代数]
navboxes: [高阶代数]
---

::: convention
在本文中，

- [[范畴]]都指 [[$(\infty,1)$-范畴]]。

:::

**纤维模式**是[[代数模式]]上 Segal 纤维化条件的适当减弱，
使其在交换模式 $\mathsf{Fin}_*$ 上给出[[(∞,1)-算畴|算畴]]，在结合模式
$\mathbb{\Delta}^{\mathrm{op},\flat}$ 上给出[[平面 (∞,1)-算畴|平面算畴]]。

## 定义

::: definition
设 $\mathcal{O}$ 是[[代数模式]]。$\mathcal{O}$
上的**纤维模式**指函子 $\pi\colon
  \mathcal{P}\to\mathcal{O}$，满足：

1. $\mathcal{O}$ 中惰性映射都有
   $\pi$-推出提升。

2. 对所有 $o\in\mathcal{O}$，
   $$
   \begin{tikzcd}
     \mathcal{P}\times_\mathcal{O}\mathcal{O}^活_{/o}\ar[r]\ar[d]&\lim_{e\in\mathcal{O}^初_{o/}}(\ar[d]\mathcal{P}\times_\mathcal{O}\mathcal{O}^活_{/e})\\
     \mathcal{O}^活_{/o}\ar[r]&\lim_{e\in\mathcal{O}^初_{o/}}\mathcal{O}^活_{/e}
   \end{tikzcd}
   $$
   是范畴的纤维方块。这里的横向箭头由惰性-活性分解诱导。

此时定义 $\mathcal{P}$ 中

- 惰性映射为在 $\mathcal{O}$ 中惰性映射上的推出边；

- 活性映射为在 $\mathcal{O}$ 中活性映射上的映射；

- 初等对象为在 $\mathcal{O}$ 中初等对象上的对象；

则 $\mathcal{P}$ 也成为代数模式。
:::

## 参考文献

```bibliography
barkan2022envelopesalgebraicpatterns:
  type: preprint
  title: Envelopes for Algebraic Patterns
  author: [Shaul Barkan, Rune Haugseng, Jan Steinebrunner]
  year: 2022
  arxiv: '2208.07183'
```

```terms
纤维模式:
  en: fibrous pattern
```
