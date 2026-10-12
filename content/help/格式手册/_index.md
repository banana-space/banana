---
title: 格式手册
---

{@help:format}

本文介绍香蕉空间页面源码的写法。
写作风格与规范请参见 @help:style。

香蕉空间的语法基于 [Markdown](https://commonmark.org/help/)，
并在增加了定理环境、引用、参考文献等语法。
以下是一个简短示例：

````markdown
---
title: 群
categories: [群论]
---

在[[代数学]]中，**群**是一种[[代数结构]]，
是指带有满足某些性质的[[二元运算]]的[[集合]]。

## 定义

::: definition [群] {@def:group}
**群**是指集合 $G$ 及映射 $G \times G \to G$，$(a, b) \mapsto ab$，满足：

- 对任意 $a, b, c \in G$，有 $(ab) c = a (bc)$。

- ...
:::

由 @def:group，...

```terms
群:
  en: group
```
````
