---
title: Bousfield 局部化
categories: [高阶范畴论]
notices:
  - name: 问题
    items:
      - “极限与余极限”一节命题中极限的公式 $\lim_{\mathcal{I}} K \simeq G(\lim_{\mathcal{I}} K)$ 两侧的写法似乎有误，右侧似乎应为 $\mathcal{C}$ 中的极限 $\lim_{\mathcal{I}} GK$。
      - “谱的 Bousfield 局部化”一节的注中，取 $E = H\mathbb{Z}/p$ 得到的似乎并不是通常的 $p$-局部化（对连通谱而言似乎是 $p$-完备化）。
navboxes: [高阶范畴论]
---

::: convention
在本文中，

- [[范畴]]都指 [[$(\infty,1)$-范畴]]，
  将经典的范畴称为 $1$-范畴。

:::

**Bousfield 局部化**是[[范畴论]]中一种
带有[[伴随函子|伴随]]关系的[[局部化 (范畴论)|局部化]]。
大致来说，Bousfield 局部化是通过指定一类“应当视为同构”的态射，
将范畴“缩小”到由局部对象所构成的全子范畴，
而这一缩小过程具有万有性质且可以通过伴随函子来实现。

Bousfield 局部化在[[稳定同伦论]]中用于构造谱的各种局部化
（如 $E$-局部谱），
在意象论中用于刻画[[同余类 (范畴论)|左正合局部化]]，
在[[可表现范畴]]中用于刻画可达局部化
（参见[[分解系]]）。

## 定义

::: definition
考虑[[伴随函子|伴随]]
\[
\begin{tikzcd}
  \mathcal{C}
    \ar[r, bend left, "F"]
    \ar[r, phantom, "\bot"]
    & \mathcal{D}
    \ar[l, bend left, "G"]
\end{tikzcd}
\]

- 若 $G$ 为全忠实函子，
  则称该伴随为**左 Bousfield 局部化**。

- 若 $F$ 为全忠实函子，
  则称该伴随为**右 Bousfield 局部化**。

无特别说明时，Bousfield 局部化指左 Bousfield 局部化。
:::

::: remark
直观上，左 Bousfield 局部化将 $\mathcal{D}$
等同于 $\mathcal{C}$ 的一个“反射子范畴”：
$G$ 全忠实意味着 $\mathcal{D}$
可以视为 $\mathcal{C}$ 的全子范畴，
而 $F$ 为“反射函子”，
将 $\mathcal{C}$ 中的对象“投影”到 $\mathcal{D}$ 中最近的对象上。
:::

## 性质

### 万有性质

以下命题说明 Bousfield 局部化确实是一种范畴局部化。

::: proposition
考虑左 Bousfield 局部化
\[
\begin{tikzcd}
  \mathcal{C}
    \ar[r, bend left, "F"]
    \ar[r, phantom, "\bot"]
    & \mathcal{D}
    \ar[l, bend left, "G"]
\end{tikzcd}
\]
令 $W \subseteq \mathrm{Ar}(\mathcal{C})$
为 $F$ 映为同构的态射所构成的类。
则对于任意范畴 $\mathcal{E}$，
前复合 $F$ 给出范畴等价
\[
\mathsf{Fun}(\mathcal{D}, \mathcal{E})
\xrightarrow{\;\sim\;}
\mathsf{Fun}^W(\mathcal{C}, \mathcal{E}),
\]
其中 $\mathsf{Fun}^W(\mathcal{C}, \mathcal{E})$
为将 $W$ 中态射映为同构的函子所张成的全子范畴。

换言之，对于任意函子
$H \colon \mathcal{C} \to \mathcal{E}$，
若 $H$ 将 $W$ 中态射映为同构，
则存在本质唯一的函子 $\tilde{H}$
使得如下图表交换：
\[
\begin{tikzcd}
  \mathcal{C}
    \ar[dr, "F"']
    \ar[rr, "H"]
    && \mathcal{E} \\
    & \mathcal{D}
    \ar[ur, dashed, "\tilde{H}"']
\end{tikzcd}
\]
:::

### 极限与余极限

::: proposition
令 $F \dashv G \colon \mathcal{D}
  \hookrightarrow \mathcal{C}$
为左 Bousfield 局部化。
若 $\mathcal{C}$ 完备（或余完备），
则 $\mathcal{D}$ 也完备（或余完备）。
更具体地，对于图表
$K \colon \mathcal{I} \to \mathcal{D}$，
极限和余极限可以表示为
\[
\lim_{\mathcal{I}} K
\simeq G(\lim_{\mathcal{I}} K),
\qquad
\operatorname{colim}_{\mathcal{I}} K
\simeq F(\operatorname{colim}_{\mathcal{I}} GK).
\]
:::

::: remark
第一个公式说明
$\mathcal{D}$ 中的极限在 $\mathcal{C}$ 中计算即可
（因为 $G$ 全忠实且右伴随保持极限）。
第二个公式说明
$\mathcal{D}$ 中的余极限需要先在 $\mathcal{C}$ 中计算，
再用 $F$ 投影回 $\mathcal{D}$。
特别地，$F$ 保持余极限，
但一般不保持极限。
:::

### 刻画

::: proposition
令 $\mathcal{C}$ 为范畴，
$L \colon \mathcal{C} \to \mathcal{C}$ 为函子，
记 $L\mathcal{C} \subseteq \mathcal{C}$
为其本质像。
则以下条件等价：

1. 存在左 Bousfield 局部化
   $F \dashv G \colon \mathcal{D}
        \hookrightarrow \mathcal{C}$
   使得 $G \circ F \simeq L$。

2. $L$ 为含入
   $L\mathcal{C} \hookrightarrow \mathcal{C}$
   的左伴随。

3. 存在自然变换
   $\alpha \colon \mathrm{id}_{\mathcal{C}} \to L$，
   使得对于任意 $C \in \mathcal{C}$，
   态射 $L(\alpha_C)$ 与 $\alpha_{LC}$
   均为等价 $LC \xrightarrow{\sim} L^2 C$。

:::

::: remark
条件 (3) 表明 $L$ 为“幂等单子”：
自然变换 $\alpha$ 扮演单位的角色，
而 $L \circ \alpha \simeq \alpha \circ L$ 的条件
保证了 $L$ 在 $L\mathcal{C}$ 上为恒等。
这一刻画在实际构造 Bousfield 局部化时非常有用：
只需给出一个满足条件 (3) 的自函子 $L$，
即自动获得 Bousfield 局部化。
:::

## 例子

### 谱的 Bousfield 局部化

::: example
令 $E$ 为[[谱 (拓扑学)|谱]]。

- 称 $\mathsf{Sp}$ 中的态射
  $f \colon X \to Y$ 为 **$E$-等价**，
  是指 $f \otimes E \colon X \otimes E
        \to Y \otimes E$ 为同构。

- 称 $L \in \mathsf{Sp}$ 为 **$E$-局部的**，
  是指对于任意 $E$-等价 $f$，
  诱导的映射
  $f^* \colon \operatorname{map}(Y, L)
        \to \operatorname{map}(X, L)$ 为同构。

记 $\mathsf{Sp}_E \subseteq \mathsf{Sp}$
为全体 $E$-局部谱所构成的全子范畴，
则包含函子具有左伴随
$L_E \colon \mathsf{Sp} \to \mathsf{Sp}_E$，
使得 $\mathsf{Sp}_E$ 为 $\mathsf{Sp}$
关于 $E$-等价的左 Bousfield 局部化。
:::

::: remark
这一构造在[[稳定同伦论]]中有广泛应用。
例如，取 $E = H\mathbb{Z}/p$ 得到 $p$-局部化。
:::

### 截断

::: example
令 $\mathcal{C}$ 为配有 [[t 结构]]的
[[稳定 (∞,1)-范畴|稳定范畴]]
（采用同调约定）。
则[[截断 (范畴论)|截断]]函子
$\tau_{\leq n} \colon \mathcal{C}
  \to \mathcal{C}_{\leq n}$
为左 Bousfield 局部化。
:::

### 层化

::: example
令 $(\mathcal{C}, \tau)$ 为[[(∞,1)-景|景]]。
则包含函子
$\mathsf{Shv}_\tau(\mathcal{C})
  \hookrightarrow \mathsf{PSh}(\mathcal{C})$
具有左伴随（层化函子），
构成左 Bousfield 局部化。
此时 $W$ 为全体 $\tau$-局部同构所构成的类。
:::

### 可表现范畴的可达局部化

::: example
令 $\mathcal{C}$ 为[[可表现范畴]]，
$\Sigma$ 为 $\mathcal{C}$ 中小生成的[[分解系|强饱和类]]。
记 $\mathsf{Loc}_\Sigma(\mathcal{C})
  \subset \mathcal{C}$
为全体 $\Sigma$-局部对象所张成的全子范畴。
则包含函子具有可达的左伴随
$\mathrm{L} \colon \mathcal{C}
  \to \mathsf{Loc}_\Sigma(\mathcal{C})$，
构成左 Bousfield 局部化，
且 $\mathsf{Loc}_\Sigma(\mathcal{C})$ 仍为可表现范畴。
:::

::: remark
此例建立了如下对应：
\[
\left\{
  \text{$\mathcal{C}$ 上小生成的强饱和类}
\right\}
\;\longleftrightarrow\;
\left\{
  \text{$\mathcal{C}$ 的可达 Bousfield 局部化}
\right\}.
\]
给定强饱和类 $\Sigma$ 可以构造局部化 $\mathrm{L}$；
反过来给定局部化 $\mathrm{L}$
可以取核 $\operatorname{ker}(\mathrm{L})$ 得到强饱和类；
且这两个构造互逆。
详见[[分解系]]中的讨论。

对比意象中的情况：
可表现范畴中，小生成的强饱和类对应于可达 Bousfield 局部化；
意象中，小生成的[[同余类 (范畴论)|同余类]]
对应于左正合 Bousfield 局部化。
后者的额外“左正合”条件由同余类的基变换封闭性保证。
:::

### 意象中的局部化

::: example
令 $\mathcal{T}$ 为[[(∞,1)-意象|意象]]，
$K$ 为小生成的[[同余类 (范畴论)|同余类]]。
则商态射 $\mathcal{T} \to \mathcal{T}/K$
为左正合的左 Bousfield 局部化。
反过来，意象的每个左正合 Bousfield 局部化
都由某个小生成同余类给出。
:::

```terms
Bousfield 局部化:
  en: Bousfield localization
左 Bousfield 局部化:
  en: left Bousfield localization
右 Bousfield 局部化:
  en: right Bousfield localization
```
