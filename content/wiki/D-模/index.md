---
title: D-模
aliases: [D 模]
categories: [代数几何]
notices:
  - name: 区分
    pages:
      - D 膜
---

**D-模**是一种几何结构。
[[空间]] $X$ 上的 D-模是指 $X$ 上[[微分算子]]构成的[[环]][[层]] $\mathcal{D}_X$
的[[模层]]。
大致而言，D-模是某种推广的[[向量丛]]，
而微分算子的作用可以视为对该向量丛的截面求方向导数，
故而给出该向量丛上的[[平坦联络]]。

## 定义

### 对代数簇

::: definition [D-模]
设 $k$ 是[[域]]，$X$ 是 $k$ 上[[光滑代数簇]]，
记 $\Theta_X$ 为其[[切层]]。
记 $\mathcal{E}\mkern-2mu\mathit{nd}_{k} (\mathcal{O}_X)$ 为 $\mathcal{O}_X$
作为 $k$-向量空间层的自同态环层。
定义子层
\[
\mathcal{D}_X \subset \mathcal{E}\mkern-2mu\mathit{nd}_{k} (\mathcal{O}_X)
\]
为 $\mathcal{O}_X$ 与 $\Theta_X$ 生成的子环层，
其中 $\mathcal{O}_X$ 以乘法作用于自身，$\Theta_X$ 以方向导数作用于 $\mathcal{O}_X$。

则 $X$ 上的 **D-模**是指 $\mathcal{D}_X$-[[模层]]。
由于 $\mathcal{D}_X$ 不交换，所以需要区分左 D-模与右 D-模。
:::

```terms
D-模:
  en: D-module
```
