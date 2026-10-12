---
title: 谓词逻辑
categories: [谓词逻辑]
navboxes: [逻辑学]
---

在[[逻辑学]]中，**谓词逻辑**是在[[命题逻辑]]的基础上加入**量词**得到的逻辑，
量词包括[[全称]]和[[存在]]两个[[逻辑连接词]]。

根据量词的强大程度，谓词逻辑可以进一步被分类为[[一阶逻辑]]、[[二阶逻辑]]乃至[[高阶逻辑]]等。
[[Russell 简单类型论]]是一种高阶逻辑的例子。

## 推导规则

<see>[[推导规则]]</see>

下文中，[[相继式]]记作 $Γ ⊢ \varphi$，
其中 $Γ$ 是[[命题]]的[[集合]]，代表[[语境]]，$\varphi$、$\chi$ 等符号表示单个命题。
为了可读性，将类似 $Γ \cup \set{\varphi}$ 等拼接语境的集合操作全部用
$Γ, \varphi$ 这样的用逗号分隔的写法表示。

- [[全称概括]]：如果 $x$ 不是 $Γ$ 中公式的自由变元，则：
  \[
  \frac{Γ⊢\chi}{Γ⊢∀ x.\chi}
  \]

- [[全称列举]]：
  \[
  \frac{Γ⊢∀ x.\chi}{Γ⊢\chi[x\mapsto t]}
  \]

- [[存在概括]]：
  \[
  \frac{Γ⊢\chi[x\mapsto t]}{Γ⊢\exists x.\chi}
  \]

- [[存在列举]]：
  如果 $x$ 不是 $Γ,\chi$ 中公式的自由变元，则：
  \[
  \frac{Γ⊢\exists x.\varphi\qquadΓ,\varphi⊢\chi}
    {Γ⊢\chi}
  \]

```terms
谓词逻辑:
  en: predicate logic
谓词:
  en: predicate
  de: Prädikat :n
  fr: prédicat :m
  grc: κατηγότημα :n
  la: praedicatum :n
量词:
  en: quantifier
  de: Quantor :m
  fr: quantificateur :m
  grc: ποσοδείκτης :m
  la: quantificator :m
```
