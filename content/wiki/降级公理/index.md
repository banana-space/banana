---
title: 降级公理
categories: [同伦类型论]
navboxes: [类型论]
---

**降级公理**是同伦类型论中类似[[分歧类型论]]中的规约公理的公理，
它指一种将原本属于更大[[宇宙 (类型论)|宇宙]]的类型“移动到”更小宇宙中的公理。
这个“移动”的思想通过给出一个属于更小宇宙、但等价（类似同构）于原类型的新类型的方式实现。

降级公理延拓了[[命题宇宙]]的管辖范围，使得它包含全部的命题。
由于命题宇宙可以被定义为[[非直谓性 (类型论)|非直谓]]的，
降级公理大大增加了能非直谓使用的类型的数量。

## 定义

首先借助 [[$\Pi$ 类型]]定义何为命题：

\[
\operatorname{isProp} A:= \prod_{a:A} \prod_{b:A} \operatorname{Id}_A(a, b)
\]

::: definition
**降级公理**指如下等价成立：
\[
\left( \sum_{A:\mathcal U}\operatorname{isProp} A \right) ≃ \operatorname{Prop}
\]
其中：
- $\mathcal U, \Sigma$ 分别指[[宇宙 (类型论)|宇宙]]、[[$\Sigma$ 类型]]。
- $\simeq$ 指[[等价 (类型论)]]，可以理解为一种同构。降级公理不依赖等价的具体定义。
- $\operatorname{Prop}$ 指[[命题宇宙]]，一般来说是非直谓的（否则降级公理就没有意义了）。

:::

```terms
降级公理:
  en: axiom of resizing
```
