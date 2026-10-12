---
title: Zariski 景
aliases: [Zariski 局部]
categories: [代数几何]
notices:
  - name: 消歧义
    see:
      - topic: '[[概形]]作为[[拓扑空间]]的拓扑'
        page: Zariski 拓扑
navboxes: [代数几何]
---

在[[代数几何]]中，**Zariski 景**
即[[概形]][[范畴]]配以 **Zariski 拓扑**而得到的[[景]]，
是概形范畴上的诸多常用的拓扑之一，也是其中最粗的，即开集最少的。
Zariski 拓扑的开覆盖即通常拓扑意义下的[[开覆盖]]。

概形范畴上的一些常用拓扑列举如下，
按由粗到细排列：

**Zariski** $<$
[[Nisnevich 景|Nisnevich]] $<$
[[平展景|平展]] $<$
[[光滑景|光滑]] $<$
[[合割景|合割]] $<$
[[平坦景|fppf]] $<$
[[平坦景|fpqc]]

## 定义

记 $\mathsf{Sch}$ 为[[概形]]范畴。

::: definition
设 $X$ 为[[概形]]。

- $X$ 上的**大 Zariski 景** $\mathsf{Sch}_{/X,\, \mathrm{Zar}}$
  定义为[[俯范畴]] $\mathsf{Sch}_{/X}$，
  其中开覆盖为 $(f_i \colon U_i \to U)_{i \in I}$，
  其中诸 $f_i$ 为[[开浸入]]，
  且 $\coprod_{i \in I} U_i \to U$ 为[[满射 (代数几何)|满射]]。

- $X$ 上的**小 Zariski 景** $X_{\mathrm{Zar}}$
  为大 Zariski 景 $\mathsf{Sch}_{/X,\, \mathrm{Zar}}$
  中由所有开浸入 $U \to X$ 构成的[[全子范畴]]，开覆盖的定义同上。

:::

## 参考文献

参见 [@stacks, Tag 020N]。

```bibliography
stacks:
  type: online
  site: The Stacks project
  title: The Stacks project
  url: https://stacks.math.columbia.edu/
```

```terms
Zariski 景:
  en: Zariski site
```
