---
title: 向量空间
---

{@chap:vectors}

这是一份用于查看章节、编号与跨页引用的简短讲义。相关背景可参见 [[顶点代数]]。

::: definition [向量空间] {@def:vector-space}
域 $K$ 上的向量空间是配备加法与数乘、满足通常公理的集合 $V$。
:::

## 基与维数 {@sec:basis}

::: theorem [基的存在性] {@thm:basis}
每个有限维向量空间都存在一组基。
:::

::: proof
从线性无关的向量组出发，不断补入不在其张成空间中的向量，直到张成整个空间。
:::

```math {@eq:expansion}
v = \sum_{i=1}^{n} a_i e_i
```

## 后续内容* {@sec:next}

线性映射的定义见 @def:linear-map，核的性质见 @thm:kernel。可以直接跳到 [核与单射](@sec:kernel)。

[@sella]
