---
title: 命题逻辑
categories: [命题逻辑]
navboxes: [逻辑学]
---

在[[逻辑学]]中，**命题逻辑**可以看作是一种“零阶逻辑”（相比于[[一阶逻辑]]和[[高阶逻辑]]），
也就是不含任何[[变量]]绑定的逻辑。

## 推导规则

<see>[[推导规则]]</see>

下文中，[[相继式]]记作 $Γ ⊢ \varphi$，
其中 $Γ$ 是[[命题]]的[[集合]]，代表[[语境]]，$\varphi$、$\chi$ 等符号表示单个命题。
为了可读性，将类似 $Γ \cup \set{\varphi}$ 等拼接语境的集合操作全部用
$Γ, \varphi$ 这样的用逗号分隔的写法表示。

### 命题逻辑

- [[结构性规则]]：
  \[
  \frac{}{\varphi⊢\varphi}
  \qquad\qquad
  \frac{Γ⊢\chi}{Γ,\varphi⊢\chi}
  \]

- [[无矛盾律]]：
  \[
  \frac{Γ⊢\varphi\qquadΓ⊢\neg\varphi}{Γ⊢\bot}
  \qquad\qquad
  \frac{Γ⊢\bot}{Γ⊢\chi}
  \]
  后者又叫爆炸律。

- [[排中律]]：
  \[
  \frac{Γ⊢\neg(\neg\chi)}
    {Γ⊢\chi}
  \]

- 否定规则：
  \[
  \frac{Γ,\varphi⊢\bot}{Γ⊢\neg\varphi}
  \qquad\qquad
  \frac{Γ⊢\neg\varphi}
  {Γ, \varphi ⊢\bot}
  \]

- [[与]]规则：
  \[
  \frac{Γ⊢\chi_1\qquadΓ⊢\chi_2}{Γ⊢\chi_1\wedge\chi_2}
  \qquad\qquad
  \frac{Γ⊢\chi_1\wedge\chi_2}
    {Γ⊢\chi_1}
  \qquad\qquad
  \frac{Γ⊢\chi_1\wedge\chi_2}
    {Γ⊢\chi_2}
  \]

- [[或]]规则：
  \[
  \frac{Γ⊢\chi_1}
  {Γ⊢\chi_1\vee\chi_2}
  \qquad\qquad
  \frac{Γ ⊢\chi_2}
  {Γ⊢\chi_1\vee\chi_2}
  \]
  \[
  \frac{Γ⊢\chi_1\vee\chi_2\qquad
    Γ,\chi_1⊢\varphi\qquad
    Γ,\chi_2⊢\varphi}
    {Γ⊢\varphi}
  \]

- [[演绎定理]]：
  \[
  \frac{Γ,\chi⊢\varphi}
    {Γ⊢\chi\to\varphi}
  \]

- [[肯定前件]]：
  \[
  \frac{Γ⊢\chi\to\varphi\qquadΓ⊢\chi}
    {Γ⊢\varphi}
  \]

### 极小命题逻辑

由经典命题逻辑去除爆炸律（无矛盾律右项）和排中律得到。

在极小命题逻辑中可由排中律推出爆炸律。

### 直觉主义命题逻辑

由极小命题逻辑添加爆炸律得到。

```terms
命题逻辑:
  en: propositional logic
爆炸律:
  en: principle of explosion
  la: ex falso quodlibet
```
