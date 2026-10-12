---
title: 分配律
categories: [一般代数]
navboxes: [初等代数]
---

**分配律**是由两个[[二元运算]]满足的一种性质。
例如，在[[自然数]]的运算中，[[乘法]]对[[加法]]满足分配律，是指等式
\[
a \cdot (b + c) = a \cdot b + a \cdot c
\]
成立。一般而言，如果两个二元运算满足类似的性质，则称它们满足分配律。

## 定义

::: definition
设[[集合]] $X$ 上具有[[二元运算]] $*, + \colon X \times X \to X$。

- 称 $*$ 对 $+$ 满足**左分配律**，如果对任意 $a, b, c \in X$，都有
  \[
  a * (b + c) = a * b + a * c.
  \]

- 称 $*$ 对 $+$ 满足**右分配律**，如果对任意 $a, b, c \in X$，都有
  \[
  (b + c) * a = b * a + c * a.
  \]

- 称 $*$ 对 $+$ 满足**分配律**，如果 $*$ 对 $+$ 既满足左分配律，又满足右分配律。

特别地，如果 $*$ 满足[[交换运算|交换律]]，
则上述三条等价，并直接称为分配律。
:::

## 例子

- 在[[环]]、[[域]]等[[代数结构]]中，乘法对加法满足分配律。
  另外，乘法对减法也满足分配律。

- 在 [[Boole 代数]]中，或、与运算互相满足分配律。

  - 特别地，一个[[集合]]的[[子集]]的[[并集|并]]、[[交集|交]]运算互相满足分配律。

```terms
分配律:
  en: distributive law
  fr: loi de distribution :f
  de: Distributivgesetz :n
  ja: 分<ぶん>配<ぱい>法<ほう>則<そく>
  ko: 분배법칙 (分配法則)
左分配律:
  en: left distributive law
  fr: loi de distribution à gauche :f
  de: linksdistributive Regel :f
  ja: 左<ひだり>分<ぶん>配<ぱい>法<ほう>則<そく>
  ko: 좌분배법칙 (左分配法則)
右分配律:
  en: right distributive law
  fr: loi de distribution à droite :f
  de: rechtsdistributive Regel :f
  ja: 右<みぎ>分<ぶん>配<ぱい>法<ほう>則<そく>
  ko: 우분배법칙 (右分配法則)
分配性:
  en: distributivity
  fr: distributivité :f
  de: Distributivität :f
左分配性:
  en: left distributivity
  fr: distributivité à gauche :f
  de: Linksdistributivität :f
右分配性:
  en: right distributivity
  fr: distributivité à droite :f
  de: Rechtsdistributivität :f
```
