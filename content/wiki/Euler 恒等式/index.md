---
title: Euler 恒等式
categories: [复分析]
---

<problems>
- “通过几何”一节需要扩充。
</problems>

**Euler 恒等式**是一个[[复数]]中的恒等式：
\[
\mathrm{e}^{\mathrm{i}\pi} + 1 = 0.
\]
它被一些人认为具有很强的数学美感。

## 证明

### 通过数学分析

由[[指数函数]]、[[正弦函数]]、[[余弦函数]]的[[无穷级数]]形式，
可以得到
\[
\mathrm{e}^{\mathrm{i}x} =
\cos(x) + \mathrm{i} \sin(x),
\quad \forall x \in \mathbb{C}.
\]
（即 [[Euler 公式]]）
这样代入 $x = \pi$，可得
\[
\mathrm{e}^{\mathrm{i}\pi} =
\cos(\pi) + \mathrm{i} \sin(\pi) = -1 + 0 = -1.
\]

不过上面的证明实际上隐藏了一些信息，
比如需要证明 $\cos$、$\sin$ 等[[三角函数]]的经典定义
和它们的无穷级数定义相同等。
更多细节可以参见相关条目，或[数学分析](/books/数学分析/)。

### 通过几何

```terms
Euler 恒等式:
  en: Euler's identity
  de: eulersche Identität
  fr: identité d'Euler
  la: Euleri identitas
```
