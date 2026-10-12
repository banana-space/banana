---
title: Markdown 与引用
---

{@guide:syntax}

指南和讲义使用与百科相同的 Markdown、数学公式、定理与参考文献语法。[[奇异上同调]] 是一个百科链接。

## 定理与标签

```markdown
::: theorem [示例] {@thm:example}
定理正文。
:::

由 @thm:example 可知……
```

在指南或讲义中，`@` 标签可引用同一组页面中的目标；页首单独一行 `{@标签}` 为整页声明标签。

## 章节与编号

章节顺序在根目录的 `collection.yaml` 中声明。具体开发与写作说明见项目的 `docs/collections.md`。

排版建议见 @guide:style。
