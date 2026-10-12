---
title: 连续映射
aliases: [连续函数, 连续, 连续性]
categories: [一般拓扑]
---

**连续映射**（或**连续函数**）是一类[[映射]]，
当其自变量小幅变化时，其取值也只是小幅变化，而不会跳跃。

在[[数学分析]]中，连续映射常常用 [[epsilon-delta 语言|$\varepsilon$-$\delta$ 语言]]描述，
即对任意给定 $ \varepsilon > 0$，
存在 $\delta > 0$，
使得自变量的变动不超过 $\delta$ 时，
映射值的变动不超过 $\varepsilon$。

对于[[拓扑空间]]之间的映射而言，
连续映射恰好是那些使[[开集]]的[[原像]]仍为开集的映射。

## 定义

### 通过 $\varepsilon$-$\delta$ 语言

::: definition [连续映射]
设 $X, Y$ 是[[度量空间]]，设 $x \in X$ 为一点。
[[集合]]间[[映射 (集合论)|映射]] $f \colon X \to Y$
称为在 $x$ 处**连续**，
若对任意 $\varepsilon > 0$，
存在 $ \delta > 0$，
使得对任意 $x' \in X$，
当 $d (x, x') < \delta $ 时，
总有 $d (f(x), f(x')) < \varepsilon$。

上述映射 $f$ 称为**连续映射**，
若它在 $X$ 的每个点处都连续。
:::

::: definition [连续函数]
当上述集合 $Y$ 取为某种“数”，
尤其是带有通常度量的[[实数]]和[[复数]]时，
此映射称为**连续函数**。
:::

### 对拓扑空间

::: definition [连续映射]
设 $X, Y$ 是[[拓扑空间]]，设 $x \in X$ 为一点。
[[集合]]间[[映射 (集合论)|映射]] $f \colon X \to Y$
称为在 $x$ 处**连续**，
若对 $f (x)$ 的任意[[邻域]] $U \subset Y$，
其[[原像]] $f^{-1} (U) \subset X$ 是 $x$ 的邻域。

上述映射 $f$ 称为**连续映射**，
若 $Y$ 的每个[[开集]]的原像都是 $X$ 的开集。
这等价于它在 $X$ 的每个点处都连续。
:::

::: definition [连续函数]
当上述集合 $Y$ 取为某种“数”，
尤其是带有通常拓扑的[[实数]]和[[复数]]时，
此映射称为**连续函数**。
:::

## 性质

::: proposition
对拓扑空间映射 $ f\colon X \to Y$，$f$ 在 $x$ 处连续当且仅当
对任何[[网]] $x_\alpha \to x$，都有 $f(x_\alpha) \to f(x)$。
若 $X$ 第一可数，则网也可以改为[[点列]]。
:::

```terms
连续映射:
  en: continuous map
  de: stetige Abbildung
  fr: application continue
  grc: συνεχὴς ἀπεικονισμός
  la: applicatio continua
  ja: 連<れん>続<ぞく>写<しゃ>像<ぞう>
连续函数:
  en: continuous function
  de: stetige Funktion
  fr: fonction continue
  grc: συνεχὴς συνάρτησις
  la: functio continua
  ja: 連<れん>続<ぞく>関<かん>数<すう>
连续:
  en: continuous
  de: stetig
  fr: continu
  grc: συνεχής
  la: continuus
  ja: 連<れん>続<ぞく>
连续性:
  en: continuity
  de: Stetigkeit :f
  fr: continuité :f
  grc: συνέχεια :f
  la: continuitas :f
```
