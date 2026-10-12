---
title: Calkin 范畴
categories: [$K$ 理论]
navboxes: [高阶范畴论]
---

::: convention
在本文中，

- [[范畴]]都指 [[$(\infty,1)$-范畴]]，
  将经典的范畴称为 $1$-范畴。
- 记 $\mathsf{Cat}^{\mathrm{rex}}$
  为带有限余极限的小范畴及其间右正合函子所构成的范畴。
  记 $\mathsf{Cat}^{\mathrm{rex},\mathrm{idem}}$
  为其中[[幂等完备 (∞,1)-范畴]]所张成的全子范畴。
- 我们区分连合 k 理论以及非连合 K 理论，
  将前者记为 $\mathrm{k}$，后者记为 $\mathrm{K}$。

:::

**Calkin 范畴**是将连合[[代数 K 理论]]延拓为
非连合代数 K 理论的核心构造。
大致来说，对于带有限余极限的幂等完备小范畴 $\mathcal{C}$，
其 Calkin 范畴 $\mathsf{Calk}(\mathcal{C})$
是通过将 $\mathcal{C}$ 嵌入一个“足够大”的范畴后取商，
再做幂等完备化所得。
连合 K 理论的[[环路空间]]恰好等价于 Calkin 范畴的连合 K 理论，
即 $\mathrm{k}(\mathcal{C}) \simeq \Omega \mathrm{k}(\mathsf{Calk}(\mathcal{C}))$，
因此通过反复迭代 Calkin 构造，
可以系统地“解环”出负阶 K 群，
从而得到非连合代数 K 理论。

此外，Calkin 范畴可以推广到[[紧聚集范畴]]上，
给出连续 Calkin 范畴，
由此定义[[连续 K 理论]]（即 Efimov K 理论）。

## 动机

### 从余纤维列到环路空间

令 $\mathcal{C} \in \mathsf{Cat}^{\mathrm{rex},\mathrm{idem}}$。
考虑典范的 Yoneda 嵌入
$y \colon \mathcal{C} \hookrightarrow \mathsf{Ind}(\mathcal{C})$
以及取 $\aleph_1$-紧对象所得的嵌入
$j \colon \mathcal{C} \hookrightarrow
\mathsf{Ind}(\mathcal{C})^{\aleph_1}$。
由此得到自然的余纤维列：
\[
\mathcal{C} \xrightarrow{j}
\mathsf{Ind}(\mathcal{C})^{\aleph_1}
\to \mathsf{Ind}(\mathcal{C})^{\aleph_1} / \mathcal{C}.
\]
由于 $\mathcal{C}$ 幂等完备，
$j$ 全忠实且像关于收缩封闭。
此外，
$\mathsf{Ind}(j) = \hat{y} \colon
\mathsf{Ind}(\mathcal{C}) \to
\mathsf{Ind}(\mathsf{Ind}(\mathcal{C})^{\aleph_1})$
为强左伴随函子（参见下文连续 Calkin 范畴一节），
因此该序列为 [[Verdier 序列]]，
从而诱导连合 K 理论的纤维列：
\[
\mathrm{k}(\mathcal{C}) \to
\mathrm{k}(\mathsf{Ind}(\mathcal{C})^{\aleph_1}) \to
\mathrm{k}(\mathsf{Ind}(\mathcal{C})^{\aleph_1} / \mathcal{C}).
\]

进一步观察：
$\mathsf{Ind}(\mathcal{C})^{\aleph_1}$ 具有可数余极限
（实际上具有全体 $\aleph_1$-小余极限，
从而自动[[幂等完备 (∞,1)-范畴|幂等完备]]）。
经典的 Eilenberg 骗局蕴含
$\mathrm{k}(\mathsf{Ind}(\mathcal{C})^{\aleph_1}) \simeq 0$。
将此代入上述纤维列，得到：
\[
\mathrm{k}(\mathcal{C})
\simeq \Omega \mathrm{k}(
  \mathsf{Ind}(\mathcal{C})^{\aleph_1} / \mathcal{C}
).
\]

### 幂等完备性的障碍与负阶 K 群

然而，商范畴
$\mathsf{Ind}(\mathcal{C})^{\aleph_1} / \mathcal{C}$
不一定幂等完备，因此无法直接迭代上述构造。
自然的做法是取其幂等完备化。
由共尾性定理，稠密嵌入
\[
\mathsf{Ind}(\mathcal{C})^{\aleph_1} / \mathcal{C}
\hookrightarrow
(\mathsf{Ind}(\mathcal{C})^{\aleph_1}
/ \mathcal{C})^{\mathrm{idem}}
\]
在连合 K 理论的 $1$-[[连合]]覆盖上诱导等价。
因此，对于幂等完备的 $\mathcal{C}$，有：
\[
\mathrm{k}(\mathcal{C})
\simeq \tau_{\geq 0} \Omega \mathrm{k}\!\left(
  (\mathsf{Ind}(\mathcal{C})^{\aleph_1}
  / \mathcal{C})^{\mathrm{idem}}
\right).
\]

值得强调的是，
$\mathrm{k}_0((\mathsf{Ind}(\mathcal{C})^{\aleph_1}
/ \mathcal{C})^{\mathrm{idem}})$
并不一定为零。
右侧的“额外”$\pi_0$ 信息正是 $\mathcal{C}$ 的负阶 K 群的来源：
它测量了商范畴距离幂等完备性的障碍，
从而为将代数 K 理论延拓为整个谱铺平了道路。

## 定义

::: definition [Calkin 范畴]
对于
$\mathcal{C} \in \mathsf{Cat}^{\mathrm{rex},\mathrm{idem}}$，
定义其 **Calkin 范畴**为：
\[
\mathsf{Calk}(\mathcal{C})
\coloneqq (\mathsf{Ind}(\mathcal{C})^{\aleph_1}
/ \mathcal{C})^{\mathrm{idem}}.
\]
对于一般的
$\mathcal{C} \in \mathsf{Cat}^{\mathrm{rex}}$
以及 $n \geq 0$，递归地定义：
\[
\mathsf{Calk}^0(\mathcal{C})
= \mathcal{C}^{\mathrm{idem}},
\qquad
\mathsf{Calk}^{n+1}(\mathcal{C})
\coloneqq \mathsf{Calk}(\mathsf{Calk}^n(\mathcal{C})).
\]
该构造给出自函子
$\mathsf{Calk} \colon
  \mathsf{Cat}^{\mathrm{rex},\mathrm{idem}} \to
  \mathsf{Cat}^{\mathrm{rex},\mathrm{idem}}$。
:::

由上述动机，对于所有 $n \geq 0$ 恒有：
\[
\tau_{\geq 0} \Omega \mathrm{k}(\mathsf{Calk}^{n+1}(\mathcal{C}))
\simeq \mathrm{k}(\mathsf{Calk}^n(\mathcal{C})).
\]
这一组相容的等价自然地引导我们给出非连合 K 理论的定义。

## 非连合代数 K 理论

::: definition [非连合代数 K 理论]
令 $\mathcal{C} \in \mathsf{Cat}^{\mathrm{rex}}$。
$\mathcal{C}$ 的**非连合代数 K 理论**定义为谱
$\mathrm{K}(\mathcal{C})$，其满足
\[
\tau_{\geq -n} \mathrm{K}(\mathcal{C})
\simeq \Omega^n \mathrm{k}(\mathsf{Calk}^n(\mathcal{C}))
\]
并且 $\mathrm{K}(\mathcal{C})
  \simeq \operatorname{colim}_n
  \tau_{\geq -n} \mathrm{K}(\mathcal{C})$。
对于 $n \in \mathbb{Z}$，定义
$\mathrm{K}_n(\mathcal{C}) \coloneqq \pi_n(\mathrm{K}(\mathcal{C}))$。
:::

::: remark
直观上，非连合 K 理论是通过反复“解环”得到的：
连合 K 理论 $\mathrm{k}(\mathcal{C})$
是谱 $\mathrm{K}(\mathcal{C})$ 的连合覆盖，
而每次迭代 Calkin 构造都将谱向负方向延拓一阶。
整个谱 $\mathrm{K}(\mathcal{C})$ 就是这些逐阶延拓的余极限。
:::

::: example
对于 $\mathcal{C} \in \mathsf{Cat}^{\mathrm{rex}}$，
自然映射 $\mathrm{k}(\mathcal{C}) \to \mathrm{K}(\mathcal{C})$
在 $\pi_n$（$n \geq 1$）上为同构，
在 $\pi_0$ 上为单射。
当 $\mathcal{C}$ 幂等完备时，
$\pi_0$ 上也为同构，
即 $\mathrm{k}(\mathcal{C}) \to \mathrm{K}(\mathcal{C})$ 为连合覆盖。

负阶 K 群的首项由定义给出：
\[
\mathrm{K}_{-1}(\mathcal{C})
= \mathrm{k}_0(\mathsf{Calk}(\mathcal{C})).
\]
这个群精确地测量了商范畴
$\mathsf{Ind}(\mathcal{C})^{\aleph_1} / \mathcal{C}$
距离幂等完备性的障碍。

当 $R$ 为正则环时，取 $\mathcal{C} = \mathsf{Perf}(R)$，
对应的商范畴天然幂等完备，
从而全体严格负阶 K 群均消失，
即 $\mathrm{K}(R) \simeq \mathrm{k}(R)$。
:::

## 性质

### Calkin 函子的性质

::: proposition {@prop-Calk-properties}
Calkin 函子
$\mathsf{Calk} \colon
  \mathsf{Cat}^{\mathrm{rex},\mathrm{idem}} \to
  \mathsf{Cat}^{\mathrm{rex},\mathrm{idem}}$
具有以下性质：

1. **滤余极限处的 Verdier 性质**：
   给定滤图表
   $\mathcal{C}_{\bullet} \colon
        I \to \mathsf{Cat}^{\mathrm{rex},\mathrm{idem}}$，
   滤余极限处的自然序列
   \[
   \operatorname{colim}_i \mathcal{C}_i
   \xrightarrow{j}
   \operatorname{colim}_i
   \mathsf{Ind}(\mathcal{C}_i)^{\aleph_1}
   \to
   \operatorname{colim}_i
   \mathsf{Calk}(\mathcal{C}_i)
   \]
   中，$j$ 全忠实，
   $j_+$ 的像关于收缩封闭，
   且 $\mathsf{Ind}(j)$ 为强左伴随。

2. **保持 K 理论正合序列**：
   若 $\mathsf{Cat}^{\mathrm{rex},\mathrm{idem}}$
   中的余纤维列
   $\mathcal{C} \to \mathcal{D} \to \mathcal{E}$
   诱导 $\mathrm{k}$ 理论的纤维列，
   则
   $\mathsf{Calk}(\mathcal{C}) \to
        \mathsf{Calk}(\mathcal{D}) \to
        \mathsf{Calk}(\mathcal{E})$
   也诱导 $\mathrm{k}$ 理论的纤维列。

3. **与带点化和稳定化交换**：
   在自函子层面，
   存在自然的 $\mathrm{k}$-等价：
   \[
   \mathsf{Calk}(-)_+
   \simeq_{\mathrm{k}} \mathsf{Calk}((-)_+),
   \qquad
   \mathsf{SW}(\mathsf{Calk}(-))
   \simeq_{\mathrm{k}} \mathsf{Calk}(\mathsf{SW}(-)).
   \]

4. **在 $\mathrm{k}$-等价意义下保持滤余极限**：
   对于滤图表 $\mathcal{C}_{\bullet}$，
   \[
   \mathrm{k}\!\left(
     \operatorname{colim}_i
     \mathsf{Calk}(\mathcal{C}_i)
   \right)
   \xrightarrow{\;\simeq\;}
   \mathrm{k}\!\left(
     \mathsf{Calk}\!\left(
       \operatorname{colim}_i
       \mathcal{C}_i
     \right)
   \right).
   \]

:::

### 非连合 K 理论的性质

::: corollary {@cor-K-properties}
非连合 K 理论函子
$\mathrm{K} \colon \mathsf{Cat}^{\mathrm{rex}} \to \mathsf{Sp}$
具有以下性质：

1. $\mathrm{K}$ 关于幂等完备化不变。
   自然映射 $\mathrm{k}(\mathcal{C}) \to \mathrm{K}(\mathcal{C})$
   在 $\pi_0$ 上为单射，在 $\pi_n$（$n \geq 1$）
   上为同构。
   当 $\mathcal{C}$ 幂等完备时，
   $\mathrm{k}(\mathcal{C}) \to \mathrm{K}(\mathcal{C})$ 为[[连合]]覆盖。

2. $\mathrm{K}$ 保持滤余极限和有限乘积。

3. **Eilenberg 骗局**：
   若存在保持有限余极限的函子
   $F \colon \mathcal{C} \to \mathcal{C}$
   使得 $F \sqcup \operatorname{id} \simeq F$，
   则 $\mathrm{K}(\mathcal{C}) \simeq 0$。

4. 若 $\mathsf{Cat}^{\mathrm{rex},\mathrm{idem}}$
   中的序列
   $\mathcal{C} \to \mathcal{D} \to \mathcal{E}$
   诱导 $\mathrm{k}$ 理论纤维列，
   则也诱导 $\mathrm{K}$ 理论纤维列。

5. $\mathrm{K}$ 将典范映射
   $\mathcal{C} \to \mathcal{C}_+$ 与
   $\mathcal{C} \to \mathsf{SW}(\mathcal{C})$
   送至等价。

此外，给定连合 $\mathrm{k}$ 理论，
性质 1 与 4 已唯一确定函子 $\mathrm{K}$。
:::

## 推广：连续 Calkin 范畴

Calkin 范畴的构造可以从
$\mathsf{Cat}^{\mathrm{rex},\mathrm{idem}}$
推广到[[紧聚集范畴]] $\mathsf{Pr}^L_{\mathrm{ca}}$ 上，
由此定义[[连续 K 理论]]。
具体而言，我们的目标是给出延拓：
\[
\begin{tikzcd}
  \mathsf{Cat}^{\mathrm{rex},\mathrm{idem}}
    \ar[r,"\mathsf{Calk}"]
    \ar[d,hook,"\mathsf{Ind}"]
    & \mathsf{Cat}^{\mathrm{rex},\mathrm{idem}} \\
  \mathsf{Pr}^L_{\mathrm{ca}}
    \ar[ur,dashed,"\mathsf{Calk}^{\mathrm{cont}}"']
\end{tikzcd}
\]

### 构造

对于紧聚集范畴 $\mathcal{C}$，
考虑 $\mathsf{Pr}^L_{\mathrm{ca}}$ 中的余纤维列
\[
\mathcal{C} \xhookrightarrow{\hat{y}}
\mathsf{Ind}(\mathcal{C}^{\aleph_1})
\to \mathsf{Ind}(\mathcal{C}^{\aleph_1}) / \mathcal{C}.
\]
由于 $\mathsf{Pr}^L_{\mathrm{ca}} \to \mathsf{Pr}^L$
保持余极限，而 $\mathsf{Pr}^L$ 中的余极限
对应于 $\mathsf{Pr}^R$ 中的极限，
上述余纤维可以通过右伴随的纤维来计算。
$\hat{y}$ 的右伴随为余极限函子
$k \colon \mathsf{Ind}(\mathcal{C}^{\aleph_1})
\to \mathcal{C}$，
因此 $\mathsf{Ind}(\mathcal{C}^{\aleph_1}) / \mathcal{C}$
可辨认为 $k$ 在终对象处的纤维：
\[
\begin{tikzcd}
  \mathsf{Ind}(\mathcal{C}^{\aleph_1}) / \mathcal{C}
    \ar[r] \ar[d]
    \ar[dr,phantom,very near start,"\lrcorner"]
    & \mathsf{Ind}(\mathcal{C}^{\aleph_1})
    \ar[d,"k"] \\
  \ast \ar[r,"\ast"]
    & \mathcal{C}
\end{tikzcd}
\]
由于 $\ast \to \mathcal{C}$ 全忠实，
$\mathsf{Ind}(\mathcal{C}^{\aleph_1}) / \mathcal{C}$
可以辨认为 $\mathsf{Ind}(\mathcal{C}^{\aleph_1})$
中全体在 $k$ 下映到终对象的对象所构成的全子范畴。

::: proposition {@prop-quotient-cg}
令 $\mathcal{C}$ 为紧聚集范畴。
则函子
$\mathsf{Ind}(\mathcal{C}^{\aleph_1})
  \to \mathsf{Ind}(\mathcal{C}^{\aleph_1}) / \mathcal{C}$
为 [[Bousfield 局部化]]，
且
$\mathsf{Ind}(\mathcal{C}^{\aleph_1}) / \mathcal{C}$
为紧生成范畴。
:::

::: proof
该函子的右伴随为包含
$k^{-1}(\ast)
  \hookrightarrow \mathsf{Ind}(\mathcal{C}^{\aleph_1})$，
全忠实性显然，故确为 Bousfield 局部化。

为证紧生成性，需说明包含函子保持滤余极限。
设 $(X_i)_{i \in I}$ 为 $k^{-1}(\ast)$ 中的滤图表。
由于 $k$ 作为左伴随保持一切余极限，有
\[
k(\operatorname{colim}_i X_i)
\simeq \operatorname{colim}_i k(X_i)
\simeq \operatorname{colim}_i \ast
\simeq \ast.
\]
因此 $\operatorname{colim}_i X_i \in k^{-1}(\ast)$，
包含函子保持滤余极限，
从而局部化函子保持紧对象。
由于 $\mathsf{Ind}(\mathcal{C}^{\aleph_1})$ 紧生成，
其紧对象的像在局部化后仍生成整个范畴。
:::

根据 Gabriel–Ulmer 对偶，
$\mathsf{Ind}(\mathcal{C}^{\aleph_1}) / \mathcal{C}$
作为紧生成范畴，其紧对象范畴
$(\mathsf{Ind}(\mathcal{C}^{\aleph_1})
/ \mathcal{C})^{\aleph_0}$
为带有限余极限的幂等完备范畴。

::: definition [连续 Calkin 范畴]
令 $\mathcal{C}$ 为紧聚集范畴。
$\mathcal{C}$ 的**连续 Calkin 范畴**定义为
\[
\mathsf{Calk}^{\mathrm{cont}}(\mathcal{C})
\coloneqq
(\mathsf{Ind}(\mathcal{C}^{\aleph_1})
/ \mathcal{C})^{\aleph_0}.
\]
:::

### 余纤维列性质

::: proposition {@prop-cont-calk-cofiber}
对于紧聚集范畴 $\mathcal{C}$，
存在右正合函子
$p \colon \mathcal{C}^{\aleph_1}
  \to \mathsf{Calk}^{\mathrm{cont}}(\mathcal{C})$，
使得
$\mathsf{Ind}(p) \colon
  \mathsf{Ind}(\mathcal{C}^{\aleph_1}) \to
  \mathsf{Ind}(\mathsf{Calk}^{\mathrm{cont}}(\mathcal{C}))$
为 Bousfield 局部化，且有余纤维列
\[
\mathcal{C} \xrightarrow{\hat{y}}
\mathsf{Ind}(\mathcal{C}^{\aleph_1})
\xrightarrow{\mathsf{Ind}(p)}
\mathsf{Ind}(
  \mathsf{Calk}^{\mathrm{cont}}(\mathcal{C})
).
\]
此外，$\mathsf{Ind}(p)^R$ 保持推出。
:::

::: proof
$\mathsf{Ind}(p)$ 即 @prop-quotient-cg 中的
Bousfield 局部化。
该局部化保持紧对象，
因此由 Gabriel–Ulmer 对偶恢复出
小范畴层面的右正合函子 $p$。

$\mathsf{Ind}(p)^R$ 保持推出的论证：
$\mathsf{Ind}(p)^R$ 为包含
$k^{-1}(\ast)
  \hookrightarrow \mathsf{Ind}(\mathcal{C}^{\aleph_1})$。
设 $A, B, C \in k^{-1}(\ast)$ 构成推出图表，
其推出 $A \cup_C B$
在 $\mathsf{Ind}(\mathcal{C}^{\aleph_1})$ 中计算。
由于 $k$ 保持推出，有
$k(A \cup_C B) \simeq
  k(A) \cup_{k(C)} k(B)
  \simeq \ast \cup_{\ast} \ast
  \simeq \ast$，
从而 $A \cup_C B \in k^{-1}(\ast)$。
:::

### 与 Calkin 范畴的相容性

::: proposition {@prop-cont-extends-calk}
对于
$\mathcal{C} \in \mathsf{Cat}^{\mathrm{rex},\mathrm{idem}}$，
有范畴等价
\[
\mathsf{Calk}^{\mathrm{cont}}(\mathsf{Ind}(\mathcal{C}))
\simeq \mathsf{Calk}(\mathcal{C}).
\]
即连续 Calkin 范畴确实是 Calkin 范畴
沿 $\mathsf{Ind}$ 的延拓。
:::

::: proof
将 $\mathsf{Ind}(\mathcal{C})$ 代入余纤维列，
利用 $\mathcal{C}$ 幂等完备从而
$\mathcal{C} \simeq
  \mathsf{Ind}(\mathcal{C})^{\aleph_0}
  \subset \mathsf{Ind}(\mathcal{C})^{\aleph_1}$，
可将 $\hat{y}$ 辨认为 $\mathsf{Ind}(y)$。
由 Gabriel–Ulmer 对偶从余纤维列恢复：
\[
\mathsf{Calk}^{\mathrm{cont}}(\mathsf{Ind}(\mathcal{C}))
\simeq
(\mathsf{Ind}(\mathcal{C})^{\aleph_1}
/ \mathcal{C})^{\aleph_0}
\simeq
(\mathsf{Ind}(\mathcal{C})^{\aleph_1}
/ \mathcal{C})^{\mathrm{idem}}
= \mathsf{Calk}(\mathcal{C}).
\]
其中第二个等价成立，
因为紧生成范畴的紧对象范畴自动幂等完备。
:::

### 连续 K 理论

::: definition [连续 K 理论]
令 $\mathcal{C}$ 为紧聚集范畴。
$\mathcal{C}$ 的**连续 K 理论**
（又称 **Efimov K 理论**）定义为
\[
\mathrm{K}^{\mathrm{cont}}(\mathcal{C})
\coloneqq
\Omega \mathrm{K}(
  \mathsf{Calk}^{\mathrm{cont}}(\mathcal{C})
).
\]
:::

::: remark
对于 $n \geq 1$，定义
$\mathsf{Calk}^{\mathrm{cont},n}(\mathcal{C})
  \coloneqq
  \mathsf{Calk}^{n-1}(
    \mathsf{Calk}^{\mathrm{cont}}(\mathcal{C})
  )$，
则有
$\mathrm{K}^{\mathrm{cont}}(\mathcal{C})_{-n}
  \simeq
  \mathrm{k}_0(\mathsf{Calk}^{\mathrm{cont},n}(\mathcal{C}))$。
即连续 K 理论的负阶同伦群
可以通过先做一次连续 Calkin 构造，
再反复迭代通常的 Calkin 构造来逐步“解环”得到。

由 @prop-cont-extends-calk，
当 $\mathcal{C} = \mathsf{Ind}(\mathcal{D})$
为紧生成范畴时，
$\mathrm{K}^{\mathrm{cont}}(\mathcal{C})
  \simeq \Omega \mathrm{K}(\mathsf{Calk}(\mathcal{D}))$，
从而连续 K 理论在紧生成范畴上
恢复了通常的非连合 K 理论
（差一个平移）。
:::

## 参考文献

```bibliography
efimov2025ktheorylocalizinginvariantslarge:
  type: preprint
  title: K-theory and localizing invariants of large categories
  author: Alexander I. Efimov
  year: 2025
  arxiv: '2405.12169'
CDHNLMNS:
  type: preprint
  author: ['Calmès, Baptiste', 'Dotto, Emanuele', 'Harpaz, Yonatan', 'Hebestreit, Fabian', 'Land, Markus', 'Moi, Kristian', 'Nardin, Denis', 'Nikolaus, Thomas', 'Steimle, Wolfgang']
  title: 'Hermitian K-theory for stable $\infty$-categories II: Cobordism categories and additivity'
  year: 2021
```

```terms
Calkin 范畴:
  en: Calkin category
连续 Calkin 范畴:
  en: continuous Calkin category
非连合代数 K 理论:
  en: non-connective algebraic K-theory
```
