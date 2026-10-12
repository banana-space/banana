---
title: Brown 可表性定理
categories: [同调论, 同伦论]
navboxes: [代数拓扑]
---

::: convention
在本文中，

- [[生象]]是指 [[$\infty$-群胚]]，
  此处也可理解为 [[CW 复形]]。
  生象的范畴记为 $\mathsf{Ani}$，
  带点生象范畴记为 $\mathsf{Ani}_*$。
- 此处连通即指将生象视为拓扑空间的连通，
  也可指 $1$-[[连合]]。

:::

**Brown 可表性定理**是[[稳定同伦论]]中的基本定理。
它给出了连通带点生象上的反变函子可表的充要条件，
由此推出每个[[广义上同调理论]]都可以被某个[[谱 (拓扑学)|谱]]所表出。

## 定理陈述

### 广义上同调理论

::: definition
**[[广义上同调理论]]** 是指反变函子族
$E^* \colon \mathsf{Ani}_*^{\mathrm{op}} \to \mathsf{Ab}^{\mathbb{Z}}$
与 **[[纬悬]]同构** $\partial \colon E^*(-) \xrightarrow{\sim} E^{*+1}(\Sigma(-))$
构成的二元组，满足以下公理：

- **楔和公理**：$E^*$ 将余积映为直积。

- **正合性**：
  $\mathsf{Ani}_*$ 中的余纤维列 $X \to Y \to Z$ 诱导正合列 $E^*(Z) \to E^*(Y) \to E^*(X)$。

:::

::: remark
正合性公理允许我们将余纤维列不断向右延拓
（即 [[Puppe 序列]] $X \to Y \to Z \to \Sigma X \to \cdots$），
从而给出长正合列。
显然，每个谱 $E \in \mathsf{Sp}$ 均可表出一个广义上同调理论；
Brown 可表性定理的核心内容是其逆命题也成立。
:::

### 楔和公理与 Mayer–Vietoris 性质

为了陈述定理，需要将上述公理推广到取值于集合（而非 Abel 群）的函子。

::: definition {@def-wedge-mayer-vietoris}
考虑函子 $F \colon \mathsf{Ani}_*^{\mathrm{op}} \to \mathsf{Set}$。

1. 称 $F$ 满足**楔和公理**，是指 $F$ 将楔和映为直积。

2. 称 $F$ 具有**Mayer–Vietoris 性质**，是指对于连通带点生象的任意推出图表
   \[
   \begin{tikzcd}
     C \ar[r,"k"]\ar[d,"l"'] \ar[dr,phantom,very near end,"\ulcorner"] & A\ar[d,"i"]\\
     B \ar[r,"j"'] & X
   \end{tikzcd}
   \]
   诱导的映射 $(i^*,j^*) \colon F(X) \twoheadrightarrow F(A) \times_{F(C)} F(B)$ 均为满射。

:::

::: remark
若 $F$ 满足楔和公理，则对于 $X \in \mathsf{Ani}_*$，
由 $\operatorname{Hom}(\Sigma^2 X, -)$ 的性质（[[Eckmann–Hilton 论证]]），
$F(\Sigma^2 X)$ 自然带有 Abel 群结构。
因此，楔和公理保证了在取两次纬悬后，$F$ 自动穿过 Abel 群范畴。
:::

::: remark {@rmk-Mayer--Vietoris}
若 $F$ 穿过 $\mathsf{Ab}$，则 Mayer–Vietoris 性质可以从正合性推出。
具体而言，考虑如下交换立方体（其中左右面为自明的推出）：
\[
\begin{tikzcd}
  \ast \ar[rr] \ar[dr] \ar[dd] && C \ar[dr,"k"] \ar[dd, pos = 0.3,"l"'] \\
  & A \ar[dd, crossing over]\ar[rr,equal, near start, crossing over] && A \ar[dd,"i"] \\
  B \ar[rr,equal, near start] \ar[dr] && B \ar[dr,"j"'] \\
  & A \vee B \ar[rr,"f"']  && X
\end{tikzcd}
\]
可知 $A \vee B \to X$ 的余纤维即为 $C(f)$，而 $C(f) \simeq \Sigma C$。
旋转三角使其成为余纤维列 $C \to A \vee B \to X$，作用上 $F$ 即可得到正合列：
\[
F(X) \xrightarrow{(i^*,j^*)} F(A) \times F(B) \xrightarrow{k^*-l^*} F(C).
\]
若 $F$ 满足楔和公理，这一序列可向右自然延拓为完整的长正合列。
:::

### 定理陈述

::: theorem [Brown] {@thm-Brown}
令 $\mathsf{Ani}_{*}^{\geq 1}$ 为连通带点生象所构成的全子范畴。
则函子 $F \colon (\mathsf{Ani}_*^{\geq 1})^{\mathrm{op}} \to \mathsf{Set}$ 可表，
当且仅当其满足**楔和公理**以及 **Mayer–Vietoris 性质**。
:::

::: remark [警告]
带点以及连通性的条件均不可缺少，否则存在反例。
:::

## 证明

必要性是显然的（可表函子保持全体极限，楔和公理与 Mayer–Vietoris 性质均由此给出）。
以下证明充分性。

### 万有元

证明的核心工具是万有元的概念。

::: definition
令 $Z \in \mathsf{Ani}_*^{\geq 1}$，$\xi \in F(Z)$。
由 [[Yoneda 引理]]，
$\xi$ 定义了自然变换 $T_{\xi} \colon \operatorname{Hom}_{\mathsf{Ani}_*}(-,Z) \to F(-)$，
将 $f$ 映为 $f^* \xi$。

- 称 $\xi$ 为 **$n$-万有元**（$n \geq 1$），
  是指 $T_{\xi} \colon \pi_k(Z) \to F(S^k)$ 在 $1 \leq k < n$ 上为双射，且在 $k = n$ 时为满射。

- 若 $\xi$ 对所有 $n$ 均为 $n$-万有元，则称 $\xi$ 为**万有元**。

$F$ 可表当且仅当存在 $Z$ 及其上的万有元 $\xi$ 使得 $T_{\xi}$ 为自然同构。
:::

### 第一步：逐级逼近

我们构造一列态射 $Z_1 \to Z_2 \to \cdots$ 以及 $n$-万有元 $\xi_n \in F(Z_n)$。

取
\[
Z_1 \coloneqq \bigvee_{m \geq 1} \bigvee_{\gamma \in F(S^m)} S^m.
\]
由楔和公理，$F(Z_1) \simeq \prod_{m \geq 1} \prod_{\gamma \in F(S^m)} F(S^m)$。
选取 $\xi_1$ 使其在 $F(S^m)$ 处的投影恰为 $\gamma$，
则 $T_{\xi_1} \colon \pi_k(Z_1) \twoheadrightarrow F(S^k)$ 对所有 $k \geq 1$ 均为满射，
故 $\xi_1$ 为 $1$-万有元。

假设已构造 $Z_n$ 及其上的 $n$-万有元 $\xi_n$。
为将 $n$-万有元提升为 $(n+1)$-万有元，
需要“注释掉”映射 $T_{\xi_n} \colon \pi_n(Z_n) \to F(S^n)$ 的多余核。
定义核集合
\[
K_n \coloneqq \{ f \in \operatorname{Hom}(S^n, Z_n) \mid f^*\xi_n = 0 \in F(S^n) \},
\]
并取 $Z_{n+1}$ 为如下推出：
\[
\begin{tikzcd}
  \bigvee_{f \in K_n} S^n \ar[r] \ar[d] \ar[dr,phantom,very near end,"\ulcorner"] & Z_n \ar[d] \\
  \ast \ar[r] & Z_{n+1}
\end{tikzcd}
\]

直观上，这是将 $K_n$ 中的每个球面沿圆盘 $D^{n+1} \simeq \ast$ 填满，
从而在 $\pi_n$ 中消灭对应的核元素。
由 Mayer–Vietoris 性质，存在 $\xi_{n+1} \in F(Z_{n+1})$ 使得其限制到 $Z_n$ 上恢复 $\xi_n$。
此时 $\pi_n$ 上的映射变为双射，故 $\xi_{n+1}$ 为 $(n+1)$-万有元。

### 第二步：取序列余极限

定义 $Z \coloneqq \operatorname{colim}_n Z_n$。
在 $\mathsf{Ani}_*$ 中，序列余极限可以表示为如下推出：
\[
\begin{tikzcd}
  \bigvee_{n \geq 0} Z_n \ar[r] \ar[d] \ar[dr,phantom,very near end,"\ulcorner"] & \bigvee_{k \geq 0} Z_{2k} \ar[d] \\
  \bigvee_{k \geq 0} Z_{2k+1} \ar[r] & Z
\end{tikzcd}
\]

利用楔和公理与 Mayer–Vietoris 性质，
可以将各 $\xi_n$ 拼凑为全局的 $\xi \in F(Z)$。
由于球面 $S^k$ 是紧的（即 $\operatorname{Hom}(S^k, -)$ 保持序列余极限），
$\xi$ 成为真正的万有元。

### 第三步：验证自然同构

对于任意 $X \in \mathsf{Ani}_*^{\geq 1}$，
需要说明 $T_{\xi} \colon \operatorname{Hom}(X,Z) \to F(X)$ 既满又单。

**满射。** 选取 $\eta \in F(X)$，
考虑 $\widetilde{X} \coloneqq X \vee Z$ 及
$\widetilde{\eta} \coloneqq (\eta, \xi) \in F(\widetilde{X})$。
对 $(\widetilde{X}, \widetilde{\eta})$ 重复第一步和第二步的构造，
得到 $\widetilde{Z}$ 以及万有元 $\widetilde{\xi} \in F(\widetilde{Z})$，
连同态射 $\widetilde{f} \colon \widetilde{X} \to \widetilde{Z}$ 满足
$\widetilde{f}^* \widetilde{\xi} = \widetilde{\eta}$。

令 $g$ 为复合 $Z \hookrightarrow X \vee Z \xrightarrow{\widetilde{f}} \widetilde{Z}$。
由于 $g^* \widetilde{\xi} = \xi$，且 $\xi$ 和 $\widetilde{\xi}$ 均为万有元，
交换图表迫使 $g_* \colon \pi_k(Z) \xrightarrow{\sim} \pi_k(\widetilde{Z})$ 为同构。
由 [[Whitehead 定理]]，$g$ 为同伦等价。
此时复合态射 $X \hookrightarrow \widetilde{X} \xrightarrow{\widetilde{f}} \widetilde{Z} \simeq Z$
即给出了 $\eta$ 的原像。

**单射。** 给定 $f, g \colon X \to Z$ 满足 $f^*\xi = g^*\xi = \eta$，构造推出：
\[
\begin{tikzcd}
  X \vee X \ar[r,"{(f,g)}"] \ar[d,"{(\mathrm{id}_X,\mathrm{id}_X)}"'] \ar[dr,phantom,very near end,"\ulcorner"] & Z \ar[d] \\
  X \ar[r] & \widetilde{X}
\end{tikzcd}
\]

由 Mayer–Vietoris 性质，
存在 $\widetilde{\eta} \in F(\widetilde{X})$ 对应于由 $f^*\xi = g^*\xi$ 给出的相容数据。
从 $(\widetilde{X}, \widetilde{\eta})$ 出发同样可构造万有生象 $\widetilde{Z}$ 与万有元
$\widetilde{\xi}$。
再次利用 Whitehead 定理可知典范态射 $Z \to \widetilde{X} \to \widetilde{Z}$ 为同伦等价。
因此 $\widetilde{X} \to \widetilde{Z}$ 提供了 $f$ 与 $g$ 在 $Z$ 中同伦的见证，
从而 $T_\xi(f) = T_\xi(g)$ 蕴含 $f \sim g$。$\square$

## 推论：广义上同调理论的可表性

::: proposition
每个广义上同调理论 $h^*$ 均可被某个谱 $E \in \mathsf{Sp}$ 所表出。
:::

::: proof
核心在于说明 $h^0 \colon (\mathsf{Ani}_*^{\geq 1})^{\mathrm{op}} \to \mathsf{Ab}$
满足 @thm-Brown 的条件。
楔和公理由广义上同调理论的定义直接给出。
对于 Mayer–Vietoris 性质，
利用 @rmk-Mayer--Vietoris 中推出方块诱导的长正合列进行追图，
即得 $(i^*,j^*) \colon h^0(X) \twoheadrightarrow h^0(A) \times_{h^0(C)} h^0(B)$ 为满射。

由 @thm-Brown，对每个 $n \geq 0$，
存在连通带点生象 $Z_n$ 表出 $h^n$。
配合纬悬同构 $h^n(X) \simeq h^{n+1}(\Sigma X)$ 以及 Yoneda 引理，
得到同伦等价 $Z_n \simeq \Omega Z_{n+1}$，
从而序列 $(Z_n)_{n \geq 0}$ 构成了谱 $E$。
:::

::: remark
此推论将“广义上同调理论”这一公理化的代数概念
与“谱”这一几何化的对象之间建立了完整的对应。
它是稳定同伦论中从公理到构造的范式性结果，
表明 Eilenberg–Steenrod 公理（去除维数公理）的全部解恰好由谱给出。
:::

## 参考文献

```bibliography
LurieHA:
  type: book
  author: 'Lurie, Jacob'
  title: Higher algebra
  url: https://www.math.ias.edu/~lurie/papers/HA.pdf
```

```terms
Brown 可表性定理:
  en: Brown representability theorem
万有元:
  en: universal element
```
