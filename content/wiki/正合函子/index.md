---
title: 正合函子
aliases: [左正合函子, 右正合函子]
categories: [同调代数]
---

**正合函子**是一类[[函子]]，
其性质类似于 [[Abel 范畴]]中保持[[正合列]]的[[加性函子]]。

## 定义

### Abel 范畴之间

::: definition
称 [[Abel 范畴]]间[[加性函子]] $F\colon\mathcal{A}\to\mathcal{B}$

- 左正合，

- 右正合，

- 正合，

分别指对 $\mathcal{A}$ 中任意[[短正合列]]
$0\to X\to Y\to Z\to0$，都有

- $0\to FX\to FY\to FZ$，

- $FX\to FY\to FZ\to0$，

- $0\to FX\to FY\to FZ\to0$，

正合。显然正合当且仅当既左正合又右正合。
:::

### 一般范畴之间

上述定义能推广至一般范畴，仍是十分重要的性质。

::: definition
$F\colon\mathcal{C}\to\mathcal{D}$ 是一般范畴之间的函子。

- 如 $\mathcal{C}$ 有有限[[极限 (范畴论)|极限]]，则称
  $F$ **左正合**，指其保持有限极限。

- 如 $\mathcal{C}$ 有有限[[余极限]]，则称
  $F$ **右正合**，指其保持有限余极限。

- 如 $\mathcal{C}$ 有有限极限、余极限，则称 $F$
  **正合**，指其既左正合又右正合。

:::

不难验证当 $F$ 是 Abel 范畴之间加性函子时，以上定义和上面等价。

由于左[[伴随函子|伴随]]保持所有余极限，右伴随保持所有极限，故只要 $\mathcal{C}$
中有有限极限、余极限，就总有左伴随右正合，右伴随左正合。

```terms
正合:
  en: exact
  de: exakt
  fr: exact
左正合:
  en: left exact
  de: linksexakt
  fr: exact à gauche
右正合:
  en: right exact
  de: rechtsexakt
  fr: exact à droite
```
