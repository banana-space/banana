---
title: Curry 化
categories: [类型论]
---

**Curry 化**是一种定义多参数[[映射]]的手段，
将之转化为一连串单参数的映射。

例如，映射
\[
f\colon X × Y → Z
\]
在经过 Curry 化后，它变成
\[
f\colon X → (Y → Z)
\]
这样就绕开了 $×$ 符号的使用。
这可以推广到多参数的情形，例如映射
\[
f\colon X_1 × X_2 × \cdots × X_n → Z
\]
经过 Curry 化后，变成
\[
f\colon X_1 → (X_2 → \cdots → (X_n → Z))
\]

将后者转化为前者的思想叫做**去 Curry 化**。

```terms
Curry 化:
  en: currying
去 Curry 化:
  en: uncurrying
```
