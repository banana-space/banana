---
title: 扩旋量群
aliases: [Pin 群, Pin(n)]
categories: [Lie 理论]
navboxes: [Lie 群]
---

**扩旋量群** $\mathrm{Pin} (n)$
是一个[[实数|实]] [[Lie 群]]，
其之于[[正交群]] $\mathrm{O} (n)$
正如[[旋量群]] $\mathrm{Spin} (n)$ 之于[[特殊正交群]] $\mathrm{SO} (n)$。
也就是说，有 Lie 群的[[正合列]]
\[
1 \to \mathbb{Z}_2 \to \mathrm{Pin} (n) \to \mathrm{O} (n) \to 1.
\]

## 定义

设 $V$ 是 $n$ 维实[[向量空间]]，带有[[二次型]] $Q \colon V \to \mathbb{R}$。
记 $\mathrm{Cl} (V)$ 为对应的 [[Clifford 代数]]，
$\mathrm{Cl} (V)^\times$ 为其中可逆元构成的乘法群。

::: definition [扩旋量群]
**扩旋量群**
\[
\mathrm{Pin} (V)
\subset \mathrm{Cl} (V)^\times
\]
定义为所有形如 $v_1 v_2 \cdots v_k$
的元素构成的[[子群]]，
其中 $v_1, \dotsc, v_k \in V$ 满足 $Q (v_i) = \pm 1$。

当 $Q$ [[正定二次型|正定]]时，得到的扩旋量群也记为 $\mathrm{Pin} (n)$
或 $\mathrm{Pin}_+ (n)$；当它负定时，扩旋量群也记为 $\mathrm{Pin}_- (n)$。
若 $Q$ 非退化，且[[符号 (二次型)|符号]]为 $(p,q)$，
得到的扩旋量群记为 $\mathrm{Pin} (p,q)$。
:::

```terms
扩旋量群:
  en: pin group
```
