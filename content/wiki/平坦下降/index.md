---
title: 平坦下降
aliases: [忠实平坦下降]
categories: [概形论]
---

**平坦下降**，又叫**忠实平坦下降**，
是[[交换代数]]和[[代数几何]]中一类命题的统称，
其表述为对[[平坦景]]中的开覆盖 $\{ U_i \to U \}$，
从基于 $\{U_i\}$ 的对象和性质可以得到基于 $U$ 的对象和性质。

## 陈述

### 对象的下降

对象的下降可以视为“粘接性质”在[[景]]上的推广，
例如，对概形 $S$ 以及它在 [[Zariski 拓扑]]意义下的开覆盖
$\{ U_i \to U \}$，给定每个开集 $U_i$ 上的[[层]] $\mathcal{F}_i$，
如果将这些层在它们的公共区域相容地粘起来，则可以得到 $U$ 上的层。
在[[叠]]的语言中，这即是说一些 [[平坦景|fpqc 景]]上的函子构成叠。

::: proposition [层的下降]
记 $\mathcal{C}$ 是 [[平坦景|fpqc 景]]，函子
\[
\begin{gathered}
  X \mapsto \mathsf{QCoh}(X) \\
  X \mapsto \mathsf{Coh}(X) \\
  X \mapsto \mathsf{Vect}(X)
\end{gathered}
\]
构成 $\mathcal{C}$ 上的[[叠]]。
其中后面三范畴分别为 $X$ 上的[[拟凝聚层]]范畴、[[凝聚层]]范畴、[[局部自由层]]范畴。
具体地说，对开覆盖 $\{U_i \to U \}_{i \in I}$，有

- 对 $U$ 上的拟凝聚层（凝聚层、局部自由层）$\mathcal{M}$、$\mathcal{N}$，有如下[[正合列]]：
  \[
  \operatorname{Hom}_U (\mathcal{M}, \mathcal{N}) \to \prod_i \operatorname{Hom} (\mathcal{M}_i, \mathcal{N}_i)
  \rightrightarrows \prod_{ij} \operatorname{Hom}(\mathcal{M}_{ij}, \mathcal{N}_{ij})
  \]
  其中下标表示相应的[[拉回层]]，而 $U_{ij} := U_i \times_U U_j$，
  箭头由相应的投影诱导。

- 记 $U_{ijk} = U_i \times_U U_j \times_U U_k$。
  给定一族拟凝聚层（凝聚层、局部自由层），
  如果给定了同构
  $\mathcal{M}_i |_{U_{ij}} \overset{\sim}{\to} \mathcal{M}_j |_{U_{ij}}$，
  使得图表
  \[
  \begin{tikzcd}
    (\mathcal{M}_i |_{U_{ij}}) |_{U_{ijk}}
    \ar[d, "\simeq"'] \ar[r, "\simeq"] &
    (\mathcal{M}_j |_{U_{ij}}) |_{U_{ijk}} \ar[r, "\simeq"] &
    (\mathcal{M}_j |_{U_{jk}}) |_{U_{ijk}} \ar[d, "\simeq"] \\
    (\mathcal{M}_i |_{U_{ik}}) |_{U_{ijk}} \ar[r, "\simeq"] &
    (\mathcal{M}_k |_{U_{ik}}) |_{U_{ijk}} \ar[r, "\simeq"] &
    (\mathcal{M}_k |_{U_{jk}}) |_{U_{ijk}}
  \end{tikzcd}
  \]
  交换，那么存在拟凝聚层（凝聚层、局部自由层）$\mathcal{M}$，
  以及同构
  $\mathcal{M} |_{U_i} \overset{\sim}{\to} \mathcal{M}_i$，
  使得图表
  \[
  \begin{tikzcd}
    (\mathcal{M} |_{U_i}) |_{U_{ij}}
    \ar[d, "\simeq"'] \ar[r, "\simeq"] &
    \mathcal{M}_i |_{U_{ij}} \ar[d, "\simeq"] \\
    (\mathcal{M} |_{U_j}) |_{U_{ij}} \ar[r, "\simeq"] &
    \mathcal{M}_j |_{U_{ij}}
  \end{tikzcd}
  \]

:::

::: proposition [概形的下降]
下面三函子构成 [[平坦景|fpqc 景]]上的[[叠]]：
\[
\begin{gathered}
  X \mapsto \mathsf{Aff}(X) \\
  X \mapsto \mathsf{QAff}(X) \\
  X \mapsto \mathsf{AlgSp}(X)
\end{gathered}
\]
其中三范畴分别为 $X$ 上的[[仿射态射]]、[[拟仿射态射]]、[[代数空间]]构成的范畴。
（如果只考虑这些范畴中满足某些条件，例如[[平坦]]、[[平展]]的对象，结论仍然正确）。
:::

### 性质的下降

对 [[平坦景|fpqc 景]]上的开覆盖 $\{ U_i \to U \}$，$U_i$ 上的性质可以反推 $U$ 的性质，
这是 Zariski 拓扑下[[局部性质]]在平坦景下推广。
例如：

::: proposition [层性质的下降]
对概形 $U$ 上的层 $\mathcal{F}$，
如果其在每个 $U_i$ 上的[[拉回层]]都是[[拟凝聚层]]（[[凝聚层]]、[[局部自由层]]），
那么 $\mathcal{F}$ 本身也满足此性质。
:::

::: proposition [态射性质的下降]
对概形 $U$ 以及态射 $X \to U$，
如果其在每个 $U_i$ 上的[[基变换]]满足某态射性质
（例如[[分离]]、[[紧合]]、[[平坦]]、[[平展]]、[[光滑]]、[[仿射]]、[[有限]]），
那么 $X$ 本身也满足此性质。
:::

## 推论

::: proposition
对 $X$ 上 [[平坦景|fpqc 景]] 与 [[Zariski 景]]之间的态射
\[
u \colon X_{\mathrm{fpqc}} \to X_{\mathrm{Zar}},
\]
函子
\[
u^* \colon \mathsf{QCoh}(X_{\mathrm{Zar}}) \to \mathsf{QCoh}(X_{\mathrm{fpqc}})
\]
是范畴等价，其中二范畴分别为相应[[赋环空间]]上的[[拟凝聚层]]
（[[凝聚层]]、[[局部自由层]]）范畴。
:::

```terms
平坦下降:
  en: flat descent
  de: flacher Abstieg
  fr: descente plate
```
