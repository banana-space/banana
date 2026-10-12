---
title: P/NP 问题
categories: [问题, 递归论]
navboxes: [千禧年大奖难题]
---

在[[计算机科学]]中，
**P/NP 问题**是著名的未解难题，指的是以下问题：

- 是否有 **P = NP**？
  换言之，[[P 问题]]是否与 [[NP 问题]]相同？

这里，P 问题是指能在多项式[[时间复杂度]]内可以找到解的问题，
而 NP 问题是指给定一个解，能在多项式时间复杂度内可以验证其是否正确的问题。

当然，所有 P 问题都是 NP 问题。因此，上述问题可以重新表述为：

- NP 问题是否都是 P 问题？换言之，是否所有 NP 问题都能在多项式时间内解决？

在目前，[[Turing 机]]是主流的计算模型。
想要使用 Turing 机在多项式时间内解决 NP 问题显得异常困难。
然而，如果允许使用强于 Turing 机的计算模型，该问题则更有可能解决。

## 后果

如果 P = NP，那么：

- [[密码学]]里利用 NP 问题的加密手段都能在多项式时间内破解。

- 某些数学猜想将可以被计算机解决，比如[[Riemann 猜想]]。

## 参考资料

```bibliography
np:
  type: incollection
  title: The complexity of theorem-proving procedures
  author: 'Cook, Stephen A.'
  year: 1971
  booktitle: Proceedings of the Third Annual ACM Symposium on Theory of Computing
  location: 'Shaker Heights, Ohio, USA'
  publisher: Association for Computing Machinery
  series: STOC '71
  pages: 151–158
  doi: 10.1145/800157.805047
```
