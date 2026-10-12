---
title: 高阶归纳类型（同伦类型论）
categories: [同伦类型论]
notices:
  - name: 消歧义
    see:
      - page: 高阶归纳类型
navboxes: [类型论]
---

在[[同伦类型论]]中，**高阶归纳类型**特指允许构造子的返回类型是归纳类型上的[[相等类型]]、
这些相等类型上的相等类型、等等的[[归纳类型]]。
此处“$X$ 上的相等类型”指对于某些 $x, y:X$ 而言的 $\operatorname{Id}_X(x, y)$。

例如，考虑如下类型：

- 类型定义为 $S^1$。
- 构造子 $\operatorname{base}:S^1$，
- 构造子 $\operatorname{loop}:\operatorname{Id}(\operatorname{base}, \operatorname{base})$。

它的消去规则或者说[[模式匹配]]需要确保：$\operatorname{base}$ 被映射到某个值 $x:X$、
$\operatorname{loop}$ 被映射到某个相等证明 $\operatorname{Id}_X(x, x)$。

以上类型便是[[圆周（同伦类型论）]]，是典型的高阶归纳类型。

## 定义

高阶归纳类型目前没有非常精准的定义，
只有一些具体的例子。
这是因为[[严格正性]]的条件还没有被很好地推广到高阶归纳类型的情况。

## 例子

- [[圆周（同伦类型论）]]
- [[区间（同伦类型论）]]
- [[纬悬（同伦类型论）]]
- [[整数（同伦类型论）]] 的部分构造
- [[逻辑截断类型]]、[[截断类型]]

```terms
高阶归纳类型:
  en: higher inductive type
  fr: type inductif supérieur
  la: typus inductivus superior
```
