---
title: 穿过
categories: [范畴论]
navboxes: [范畴论]
---

在[[范畴论]]中，
称某个[[范畴]]中的[[态射]] $f \colon x \to y$
**穿过**某个[[对象]] $z$，意思是说 $f$ 可以分解为[[复合态射]]
\[
x \xrightarrow{g} z \xrightarrow{h} y.
\]
换言之，这是说存在态射 $g \colon x \to z$ 以及 $h \colon z \to y$，
使得 $f = h \circ g$。

有时，当我们说态射 $f \colon x \to y$ 穿过对象 $z$ 时，
语境中已经隐含了态射 $g, h$ 中的一个。
此时，说 $f$ **穿过** $z$，就是说 $g, h$ 中未被隐含的那一个存在，
使得 $f = h \circ g$。
例如，对[[交换环]] $A$ 及元素 $a \in A$，
若[[环同态]] $f \colon A \to B$ 将 $a$ 映到 $B$ 中的可逆元素，
则 $f$ 穿过[[局部化]] $A [a^{-1}]$。
此时，映射 $A \to A [a^{-1}]$ 就是语境中隐含的，
这是局部化自带的映射。

```terms
穿过:
  en: to factor through
```
