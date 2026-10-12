---
title: 约化群模表示论
categories: [代数群理论]
notices:
  - name: 问题
    items:
      - “单表示的构造”一节需要扩充。
navboxes: [代数群理论]
---

**约化群模表示论**指[[特征 (代数)|特征]] $p$ 域上[[约化群]]的表示论。
此时与特征 $0$，即[[约化群常表示论]]的情形不同，并非所有表示都半单。
不过所有表示构成的范畴有[[最高权范畴]]的结构。

## 结论

以下固定特征 $p$ 域 $k$，$G$ 为 $k$ 上的[[分裂约化群]]，
$B$ 为它的 [[Borel 子群]]，$T$ 为它的[[极大环面]]，
$W$ 为它的 [[Weyl 群]]。

### 最高权范畴结构

与特征 $0$ 的情形相同，单表示仍与[[支配整权]]一一对应。

::: theorem [单表示分类]
对 $G$ 的[[支配整权]] $\lambda$，
存在（同构意义下）唯一的[[约化群表示|表示]] $L(\lambda)$，
使得 $L(\lambda)$ [[单对象|单]]，且最高权为 $\lambda$。
:::

由此可以定义最高权范畴结构。

::: theorem [最高权范畴结构]
$G$ 的所有有限维表示 $\mathsf{Rep}(G)$ 上有[[最高权范畴]]结构，
其中：

- 权之集是全部支配整权 $\mathrm{X}^+(T)$。
  其带有以下偏序集结构：
  $\lambda \leq \mu$ 当且仅当 $\mu - \lambda$ 是正根的非负线性组合。
- 由以上定理，每个 $\lambda$ 都对应单表示 $L(\lambda)$。
- [[余标准对象]] $N(\lambda)$（或 $\nabla(\lambda)$）是[[旗簇]]上 $G$-[[等变向量丛]]的[[整体截面]]
  $H^0(G/B, \mathcal{O}(w_0\lambda))$。
  这里 $\mathcal{O}(w_0\lambda)$ 表示 $B$ 的权为 $w_0\lambda$
  的一维表示对应的 $G$-等变向量丛，
  $w_0$ 表示 Weyl 群的最大元素。
- [[标准对象]] $M(\lambda)$（或 $\Delta(\lambda)$）
  是余标准对象 $N(\lambda)$ 的[[对偶表示]]。

:::

### 单表示的构造

## 例子

- 与特征 $0$ 的情形不同，在基域特征 $p$ 时，
  $\mathrm{SL}_2$ 的标准表示 $V$ 的 $p$ 次[[对称积]]
  $\operatorname{Sym}^pV$ 不是单表示：
  形如 $x \otimes x \cdots \otimes x$ 的元素生成的向量空间是
  $\operatorname{Sym}^pV$ 的子表示，
  也是权 $p\varpi$ 对应的单表示 $L(p\varpi)$。
  $\operatorname{Sym}^pV$ 则是它对应的余标准对象 $N(p\varpi)$。
  此外，$\operatorname{Sym}^pV$ 也不是半单表示。

```terms
模表示论:
  en: modular representation theory
  fr: théorie des représentations modulaire
```
