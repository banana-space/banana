---
title: 单纯对象
categories: [高阶范畴论, 同伦代数]
navboxes: [同伦代数, 高阶范畴论]
---

范畴 $\mathcal{C}$ 中的**单纯对象**
是指[[单纯集|单形范畴]] $\mathbb{\Delta}$ 到 $\mathcal{C}$ 的[[反变函子]]。

## 定义

::: definition [单纯对象] {@def-sobj}
范畴 $\mathcal{C}$ 中的**单纯对象**是指函子
$X_{\bullet} \colon \mathbb{\Delta}^{\operatorname{op}} \to \mathcal{C}$。
范畴 $\mathcal{C}$ 中全体单纯对象所构成的范畴
无非是取值于 $\mathcal{C}$ 的[[预层|预层范畴]]
$\mathsf{Fun}(\mathbb{\Delta}^{\operatorname{op}},\mathcal{C})$，
一般记为 $\mathsf{s}\mathcal{C}$。
:::

::: definition (变体)
范畴 $\mathcal{C}$ 中的**余单纯对象**是指函子 $X^{\bullet} \colon \mathbb{\Delta} \to \mathcal{C}$。
范畴 $\mathcal{C}$ 中全体余单纯对象所构成的范畴一般记为 $\mathsf{cs}\mathcal{C}$ 或
$\mathsf{c}\mathcal{C}$。
:::

对于 $\mathbb{\Delta}$ 中的态射 $f \colon [m]\to [n]$ 与 $\mathcal{C}$ 中的单纯对象
$X$（或余单纯对象），
一般将对应态射记为 $f^* \colon X_n \to X_m$（或 $f_* \colon X^m\to X^n$），
在不引起歧义时去掉星号。

### 半单纯对象

若在单形范畴 $\mathbb{\Delta}$ 中删去全体退化态射，
即只保留保序单射，所得到的范畴记为 $\mathbb{\Delta}_{单}$，称为**半单形范畴**。
此时单纯对象变为

::: definition [半单纯对象]
范畴 $\mathcal{C}$ 中的**半单纯对象**是指函子
$X_{\bullet} \colon \mathbb{\Delta}_{单}^{\operatorname{op}} \to \mathcal{C}$。
:::

::: definition (变体)
范畴 $\mathcal{C}$ 中的**余半单纯对象**是指函子
$X^{\bullet} \colon \mathbb{\Delta}_{单} \to \mathcal{C}$。
:::

### 增广单纯对象

若在单形范畴 $\mathbb{\Delta}$ 中加入空集（记为 $[-1]$）则得到增广单形范畴 $\mathbb{\Delta}_{+}$，
此时单纯对象变为

::: definition [增广单纯对象]
范畴 $\mathcal{C}$ 中的**增广单纯对象**是指函子
$X_{\bullet} \colon \mathbb{\Delta}_{+}^{\operatorname{op}} \to \mathcal{C}$。
:::

::: definition (变体)
范畴 $\mathcal{C}$ 中的**余增广单纯对象**是指函子
$X^{\bullet} \colon \mathbb{\Delta}_{+} \to \mathcal{C}$。
:::

单纯对象 $X$ 的增广版本相当于在单纯对象的信息中增加一段态射 $X_0 \to X_{-1}$
以及交换图表
\[
\begin{tikzcd}
  X_1 \ar[r,shift left = 1,"d_0"]\ar[r,shift right = 1,"d_1"'] &X_0 \ar[r,"\epsilon"]&X_{-1}
\end{tikzcd}
\]
余单纯对象的增广化不过是对偶版本。

::: remark
一般而言，对于单纯对象 $X_{\bullet}$，
记其对应的增广版本为 $\overline{X}_{\bullet}$，
不难发现有 $\overline{X}_{\bullet}\mid_{\mathbb{\Delta}^{\operatorname{op}}} = X_{\bullet}$。
余单纯对象的增广版本同样记为 $\overline{X}^{\bullet}$。
:::

类似可以定义增广半单纯对象以及余增广半单纯对象

::: definition [增广半单纯对象]
范畴 $\mathcal{C}$ 中的**增广半单纯对象**是指函子
$X_{\bullet} \colon \mathbb{\Delta}_{+,单}^{\operatorname{op}} \to \mathcal{C}$。
:::

::: definition (变体)
范畴 $\mathcal{C}$ 中的**余增广半单纯对象**是指函子
$X^{\bullet} \colon \mathbb{\Delta}_{+,单} \to \mathcal{C}$。
:::

## 性质

::: proposition
$\mathbb{\Delta}_{单} \to \mathbb{\Delta}$ 是
[[共尾函子|共始函子]]。
:::

::: proof
[@Kerodon, [04RE](https://kerodon.net/tag/04RE)]
:::

::: proposition
对于带有有限[[余积]]的范畴 $\mathcal{C}$，
令 $X_{\bullet}$ 为其半单纯对象，
则存在 $\mathcal{C}$ 中的单纯对象 $X^+_{\bullet}$ 使得下图为[[左 Kan 扩张]]
\[
\begin{tikzcd}
  \mathbb{\Delta}_{单}^{\operatorname{op}}\ar[dr,"X"]\ar[d,hook]\\
  \mathbb{\Delta}^{\operatorname{op}} \ar[r,"X^+"'] & \mathcal{C}
\end{tikzcd}
\]
:::

::: proof
[@Kerodon, [04S4](https://kerodon.net/tag/04S4)]
:::

## 参考资料

```bibliography
Kerodon:
  type: book
  title: Kerodon
  author: Jacob Lurie
  year: 2018
  url: https://kerodon.net
```

```terms
单纯对象:
  en: simplicial object
增广单纯对象:
  en: augmented simplicial object
半单纯对象:
  en: semisimplicial object
```
