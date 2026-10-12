---
title: 超覆盖
categories: [高阶范畴论]
navboxes: [高阶范畴论]
---

::: convention
在本文中，

- [[范畴]]都指 [[$(\infty,1)$-范畴]]。
- [[意象]]都指 [[$(\infty,1)$-意象]]。

:::

**超覆盖**是高阶范畴论中用于检验[[意象]]的[[超完备性]]的核心工具。

在意象 $\mathcal{T}$ 中，
我们通常将[[有效满态射]] $f \colon X \twoheadrightarrow Y$
视为对象 $Y$ 的一个**覆盖**。
由此诱导的 [[Čech 脉]] $\check{C}(f)$ 构成了一个增广于 $Y$ 上的单纯对象，
其 $n$-单形恰为 $X$ 在 $Y$ 上的 $(n+1)$ 重纤维积 $X^{\times_Y (n+1)}$。

然而，在处理一些问题时，仅使用 Čech 脉往往不够，
我们需要比一般覆盖更具柔性的概念。
**超覆盖**本质上是对普通覆盖的单纯推广：
它不再要求各单纯层级必须形如 $X^{\times_Y (n+1)}$，
而是允许在每一步都自由选取新的加细。

具体而言，$Y$ 上的超覆盖是切片意象 $\mathcal{T}_{/Y}$ 中的一个单纯对象 $X_{\bullet}$，
其大致结构如下：

- 第 $0$ 层提供基础覆盖：选取有效满射 $X_0 \twoheadrightarrow Y$。

- 第 $1$ 层对纤维积进行加细：选取有效满射 $X_1 \twoheadrightarrow X_0 \times_Y X_0$。

- 一般地，第 $n$ 层对前 $n-1$ 层所决定的“相容边界”进行加细：
  选取有效满射 $X_n \twoheadrightarrow (\operatorname{cosk}_{n-1} X)_n$。

通过这种逐层给出有效加细的方式，超覆盖能够捕获普通覆盖无法触及的高阶同伦粘合数据。
正是由于这种柔性，超覆盖成为判定意象超完备性的自然判据。

## 定义

::: definition [超覆盖]
令 $\mathcal{T}$ 为意象，
考虑单纯对象 $U_{\bullet} \in \mathsf{Fun}(\mathbb{\Delta}^{\mathrm{op}},\mathcal{T})$。

- 称 $U_{\bullet}$ 为 $\mathcal{T}$ 的**超覆盖**，
  是指对于每个 $n \geq 0$，$(n-1)$-[[余骨架 (单纯对象)|余骨架]]所给出的配对态射
  \[
  U_n \to (\operatorname{cosk}_{n-1} U)_n
  \]
  均为有效满射。

- 称 $U_{\bullet}$ 为**有效超覆盖**，
  是指 $\operatorname{colim}_{\mathbb{\Delta}^{\mathrm{op}}} U_{\bullet}$ 为 $\mathcal{T}$
  的终对象。

- 对于 $X \in \mathcal{T}$，$X$ 上的**超覆盖**是指切片意象 $\mathcal{T}_{/X}$ 中的超覆盖。

:::

::: remark
超覆盖条件中出现的配对态射 $U_n \to (\operatorname{cosk}_{n-1} U)_n$ 有如下直观：
$(\operatorname{cosk}_{n-1} U)_n$ 收集了由 $U_0, \dots, U_{n-1}$
（以及它们之间的面映射和退化映射）所决定的全部“$n$-单形的边界数据”，
而超覆盖条件要求 $U_n$ 能够有效满地覆盖这些边界数据，
即每个相容的边界都能被提升为实际的 $n$-单形。
:::

## 直观解构

以下对较低阶数 $n$ 具体展开超覆盖条件。

- **$n = 0$**：单纯对象的 $(-1)$-余骨架定义为取值终对象的常值单纯对象，
  因此 $(\mathrm{cosk}_{-1}U)_0 = \ast$。
  此时超覆盖条件即要求 $U_0 \to \ast$ 为有效满射，
  也就是说 $U_0$ 是“非空”的（即 $0$-[[连合 (范畴论)|连合]]对象）。

- **$n = 1$**：单纯对象的 $0$-余骨架由 $U_0$ 完全决定，
  计算可得 $(\mathrm{cosk}_{0}U)_1 = U_0 \times U_0$。
  此时超覆盖条件即要求 $(d_1,d_0) \colon U_1 \to U_0 \times U_0$ 为有效满射。
  直观上，这意味着 $U_0$ 中任意两个“点”都可以被某条“边”连接。

- **$n = 2$**：计算可得 $(\mathrm{cosk}_{1}U)_2 = U_1 \times_{U_0} U_1 \times_{U_0} U_1$。
  此时超覆盖条件即要求 $U_2 \to U_1 \times_{U_0} U_1 \times_{U_0} U_1$ 为有效满射。
  直观上，这意味着任意三条首尾相连构成“三角形边界”的边，都可以被某个“$2$-单形”填充。

对比之下，Čech 脉 $\check{C}(f)$ 的各层由 $f$ 完全确定（即 $\check{C}_n(f) = X^{\times_Y (n+1)}$），
没有选取新加细的自由度。
超覆盖的优势在于：在每一步都允许选取更精细的覆盖，从而更灵活地处理高阶相容性问题。

## 例子

- 对于有效满射 $f \colon X \twoheadrightarrow Y$，
  Čech 脉 $\check{C}(f)$ 是 $\mathcal{T}_{/Y}$ 中的超覆盖。
  这是因为每个配对态射 $\check{C}_n(f) \to (\operatorname{cosk}_{n-1} \check{C}(f))_n$ 均为同构，
  而同构当然是有效满射。
  因此，Čech 脉是超覆盖的“刚性”特例。
- 考虑 $\infty$-连合对象 $U \in \mathcal{T}$（即对所有 $n$ 均为 $n$-连合的对象），
  取值为 $U$ 的常值单纯对象为 $\mathcal{T}$ 中的超覆盖。
  此时配对态射 $U \to (\operatorname{cosk}_{n-1} U)_n$ 的有效满性由 $U$ 的 $\infty$-连合性保证。

## 性质

### 超覆盖的余极限

::: proposition
令 $\mathcal{T}$ 为意象，$U_{\bullet}$ 为 $\mathcal{T}$ 中的超覆盖，
则典范态射 $\operatorname{colim}_{\mathbb{\Delta}^{\mathrm{op}}} U_{\bullet} \to \ast$
为 $\infty$-连合态射。
:::

::: remark
此命题表明超覆盖的几何实现“几乎”是终对象：它与终对象之间的差距仅在于“$\infty$ 阶”的同伦信息。
有效超覆盖则更进一步，要求几何实现恰好是终对象，即这一差距完全消失。
:::

### 与超完备化的关系

::: proposition
令 $\mathcal{T}$ 为意象，
考虑超完备化函子 $\mathrm{L} \colon \mathcal{T} \to \mathcal{T}^{\mathrm{hyp}}$。
则单纯对象 $U_{\bullet}$ 为 $\mathcal{T}$ 中的超覆盖当且仅当 $\mathrm{L}(U_{\bullet})$
为 $\mathcal{T}^{\mathrm{hyp}}$ 中的超覆盖。
:::

::: remark
换言之，超覆盖的概念在超完备化下保持不变。
这说明超覆盖是由意象的“拓扑”层面决定的，与超完备性这一“同伦”层面的性质无关。
:::

### 超完备性的判据

以下定理是超覆盖理论的核心结果，它将意象的超完备性这一整体性质归结为逐个超覆盖的有效性检验。

::: theorem
令 $\mathcal{T}$ 为意象，以下条件等价：

1. $\mathcal{T}$ 是超完备的。

2. 对于每个 $X \in \mathcal{T}$，
   所有 $X$ 上的超覆盖均是有效的。

:::

::: remark
此定理提供了验证超完备性的具体途径。
例如，对于拓扑空间 $X$ 上的层范畴 $\mathsf{Shv}(X)$，
可以利用具体的拓扑开覆盖构造超覆盖，
然后通过检验这些超覆盖的有效性来判定 $\mathsf{Shv}(X)$ 是否超完备。
事实上，对于足够好的拓扑空间（例如具有有限同伦维数的空间），超完备性自动成立。
:::

```terms
超覆盖:
  en: hypercover
```
