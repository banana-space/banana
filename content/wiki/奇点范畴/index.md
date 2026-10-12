---
title: 奇点范畴
categories: [代数几何, 同调代数]
---

**奇点范畴**是刻画[[概形]]奇性的[[稳定 $(\infty,1)$-范畴]]，
由概形的[[凝聚导出范畴]]商去[[完美复形]]组成的[[满子范畴]]得到。

## 定义

::: definition [环的奇点范畴]
设 $R$ 是[[凝聚环]]，$\mathsf{D}(R)$ 表示
$R$-模的[[导出 $(\infty,1)$-范畴]]，
它是[[稳定 $(\infty,1)$-范畴]]。
考虑其两个[[满子范畴]]：

- 凝聚导出范畴 $\mathsf{D}^\mathrm{b}_\mathrm{coh}(R)$，
  其对象为有界凝聚复形，
  即只有有限个同调非零且都是[[有限表现模]]的复形。

- 完美复形范畴 $\mathsf{Perf}(R)$，其对象为[[完美复形]]，
  即有限长的有限生成投射 $R$-模复形。

显然它们也稳定，且 $\mathsf{Perf}(R)\subseteq\mathsf{D}^\mathrm{b}_\mathrm{coh}(R)$。
商范畴 $\mathsf{D}^\mathrm{b}_\mathrm{coh}(R)/\mathsf{Perf}(R)$ 称为 $R$
的**奇点范畴**，记作 $\mathsf{D}_\mathrm{sg}(R)$。
:::

::: remark
这里 $R$ 可以不交换；只要 $R$ 左凝聚，就可以考虑左
$R$-模的奇点范畴。非交换代数中，
奇点范畴有时被称为**稳定导出范畴**；
这个名称与[[稳定 $(\infty,1)$-范畴]]毫无关系，
而与[[表示论]]中的[[稳定模范畴]]密切相关。
:::

::: definition [概形的奇点范畴]
设 $X$ 是[[凝聚概形]]，$\mathsf{D}(X)$ 表示 $X$
上拟凝聚复形的 [[$(\infty,1)$-范畴]]，
它是[[稳定 $(\infty,1)$-范畴]]。
考虑其两个[[满子范畴]]：

- 凝聚导出范畴 $\mathsf{D}^\mathrm{b}_\mathrm{coh}(X)$，
  其对象为只有有限个同调非零且都是[[凝聚层]]的复形。

- 完美复形范畴 $\mathsf{Perf}(X)$，其对象为[[完美复形]]，
  即在各仿射开集上都是环的完美复形者。

显然它们也稳定，且 $\mathsf{Perf}(X)\subseteq\mathsf{D}^\mathrm{b}_\mathrm{coh}(X)$。
商范畴 $\mathsf{D}^\mathrm{b}_\mathrm{coh}(X)/\mathsf{Perf}(X)$ 称为 $X$
的**奇点范畴**，记作 $\mathsf{D}_\mathrm{sg}(X)$。
:::

## 性质

::: proposition
对左凝聚环 $R$，$\mathsf{D}_\mathrm{sg}(R)=0$ 等价于每个有限表现左
$R$-模的[[投射维数]]都有限；这在 $R$ [[交换环|交换]]、
[[诺特环|诺特]]时也等价于 $R$ 是[[正则环]]。
:::

::: remark
于是当 $R$ 的[[整体维数]]有限时 $\mathsf{D}_\mathrm{sg}(R)=0$。
反过来不成立，因为有无限维的正则环，
例子参见[[维数理论 (交换代数)|维数理论]]条目。
:::

::: proposition
对诺特概形 $X$，$\mathsf{D}_\mathrm{sg}(X)=0$ 当且仅当 $X$ 是[[正则概形]]。
:::

```terms
奇点范畴:
  en: singularity category
```
