---
title: 分歧类型论
categories: [类型论]
---

**分歧类型论**是[[Russell 简单类型论]]的原型，
它可以看作一种过度[[直谓]]的“不简单的类型论”。

在分歧类型论中，最底层的“性质”不能用其它上的[[谓词]]定义，比如：

> 我是数学家。

中的“是数学家”就是一个底层的性质，这样的性质是**直谓的**。
如果使用了谓词，比如：

> 我拥有所有数学家拥有的精神品质。

这个性质就涉及到了“所有数学家”，所以是**非直谓的**，
这样的性质就比前面的性质高一层。

令 $n<m$，分歧类型论仅允许通过第 $n$ 层的性质来定义 $m$ 层的性质。
这种限制大大降低了分歧类型论作为[[数学的基础]]的强度，
因为有过多的数学概念的定义本身就会提升层级，比如[[序列]]在定义的时候需要用到元素上的大小关系，
这就导致序列这个概念本身需要有一个层级，比如使用第 $k$ 层的性质定义的序列就处于第 $k+1$ 层，
而该序列的性质则在 $k+2$ 层，等等。

因为上述原因，在 [@PM] 中出现了如下公理：

::: definition [规约公理]
对于任何第 $k$ 层的性质，都存在一个逻辑上等价的第 $1$ 层的性质。
:::

这个公理使得分歧类型论的性质分层没有任何意义，于是便诞生了不分层的[[Russell 简单类型论]]。

## 参考资料

```bibliography
PM:
  type: book
  title: Principia Mathematica
  edition: 2
  author: ['Whitehead, Alfred North', 'Russell, Bertrand']
  year: 1927
  publisher: Cambridge Univ. Press
  location: Cambridge
  url: https://cds.cern.ch/record/268025
```

```terms
分歧类型论:
  en: ramified type theory
```
