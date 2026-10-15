---
title: 稳定 Dold–Kan 对应
categories: [高阶范畴论]
notices:
  - name: 问题
    items:
      - “$G''$ 为范畴等价”一节中，$\mathcal{J}^k$ 在计算 $(k,[-1])$ 处左 Kan 扩张（余极限）的图表中似乎应为共尾的，而不是共首的。
navboxes: [高阶范畴论]
---

::: convention
在本文中，

- [[范畴]]都指 [[$(\infty,1)$-范畴]]，
  将经典的范畴称为 $1$-范畴。
- 为避免单纯对象与滤链的记号冲突，
  使用 $\star$ 作为下标表示滤链，
  $\bullet$ 作为下标表示单纯对象。

:::

**稳定 Dold–Kan 对应**是 [[Dold–Kan 对应]]在[[稳定范畴]]中的类比。
经典的 Dold–Kan 对应建立了 Abel 范畴上的单纯对象与非负次链复形之间的等价；
稳定 Dold–Kan 对应则将其提升到 $(\infty,1)$-范畴的层面，
建立了稳定范畴上的[[单纯对象]]与非负[[滤链]]之间的等价。

## 定理陈述

::: theorem {@thm-stable-DK}
令 $\mathcal{C}$ 为稳定范畴，则有范畴等价
\[
\mathsf{Fun}(\mathbb{\Delta}^{\mathrm{op}},\mathcal{C}) \simeq \mathsf{Fun}(\mathbb{Z}_{\geq 0},\mathcal{C}).
\]
此处将 $\mathsf{Fun}(\mathbb{Z}_{\geq 0},\mathcal{C})$ 识别为非负[[滤链]]范畴
$\mathsf{Fil}_{\geq 0}(\mathcal{C})$。
:::

::: remark
与经典 Dold–Kan 对应的对比：
经典情况下，对于 Abel 范畴 $\mathcal{A}$，有 $1$-范畴的等价
\[
\mathsf{Fun}(\mathbb{\Delta}^{\mathrm{op}},\mathcal{A}) \simeq \mathsf{Ch}_{\geq 0}(\mathcal{A}),
\]
其中右侧为非负次链复形。
在稳定范畴中，链复形的角色被滤链所取代：
滤链通过取分次对象可以恢复链复形，
但滤链本身携带了比链复形更多的信息（即各分次之间的扩张数据）。
:::

## 构造

### 从单纯对象到滤链 {@sec-simp-to-fil}

令 $X_{\bullet} \colon \mathbb{\Delta}^{\mathrm{op}} \to \mathcal{C}$ 为稳定范畴 $\mathcal{C}$
中的单纯对象。
通过取其[[骨架 (单纯对象)|骨架]]滤链，得到单纯对象的链
\[
\mathrm{sk}_0(X) \to \mathrm{sk}_1(X) \to \mathrm{sk}_2(X) \to \cdots
\]
再逐项取[[几何实现 (单纯对象)|几何实现]]，即得 $\mathcal{C}$ 中的滤链
\[
|\mathrm{sk}_0(X)| \to |\mathrm{sk}_1(X)| \to |\mathrm{sk}_2(X)| \to \cdots
\]

### 从滤链到单纯对象

反方向的构造需要经过链复形作为中间步骤。

::: definition (构造) [从滤链到链复形]
令 $F_{\star}$ 为 $\mathcal{C}$ 中的非负滤链。
对于 $s \geq 0$，定义 **$s$-分次对象**为
\[
\mathrm{gr}^s_{F} \coloneqq \operatorname{cofib}(F_s \to F_{s+1}) = F_{s+1} / F_s.
\]
由正合列
\[
\mathrm{gr}^s_F \to F_{s+2} / F_s \to \mathrm{gr}^{s+1}_F
\]
以及平移，可以定义微分态射 $d \colon \mathrm{gr}^{s+1}_F \to \mathrm{gr}^s_F[1]$。
直接验证可得 $d \circ d = 0$，从而给出链复形
\[
\cdots \to \mathrm{gr}^2_{F_{\star}}[-2] \to \mathrm{gr}^1_{F_{\star}}[-1] \to \mathrm{gr}^0_{F_{\star}} \to 0.
\]
这定义了函子
\[
\mathrm{gr}_{(-)}^* \colon \mathsf{Fil}_{\geq 0}(\mathcal{C}) \to \mathsf{Ch}_{\geq 0}(h\mathcal{C}).
\]
:::

得到链复形后，可以利用经典 Dold–Kan 对应将其对应回同伦范畴 $h\mathcal{C}$ 中的单纯对象。
稳定 Dold–Kan 对应的核心在于证明这一过程可以提升到 $\mathcal{C}$ 自身（而非仅在同伦范畴上）。

::: remark [为何可以绕过幂等完备性]
经典 Dold–Kan 对应的证明中，本质上使用[[幂等完备范畴|幂等完备性]]的地方在于：
正规化链复形函子 $\operatorname{N}_n$ 的值为 $X_n$ 的直和项，
即
\[
X_n \simeq \operatorname{N}_n(X_{\bullet}) \oplus \operatorname{D}_n(X_{\bullet})
\]
虽然稳定范畴 $\mathcal{C}$ 的同伦范畴 $h\mathcal{C}$ 未必幂等完备，
但 $h\mathcal{C}$ 作为[[三角范畴]]具有以下性质：
- 若态射 $i \colon X \to Y$ 具有左逆，则 $Y \simeq X \oplus X'$，
  其中 $i$ 表为 $(\mathrm{id}_X, 0)$。

这足以使 Dold–Kan 对应在同伦范畴层面成立。
:::

## 证明

### 证明策略

受 @sec-simp-to-fil 中骨架滤链构造的启发，
我们引入一个辅助指标范畴，将单纯对象和滤链“桥接”起来，
然后通过一系列中间等价完成证明。

::: definition (构造) [辅助指标范畴]
定义 $1$-范畴 $\mathcal{J}_+ \subset \mathbb{Z}_{\geq 0} \times \mathbb{\Delta}_+^{\mathrm{op}}$
为由满足 $m \leq n$ 的二元组 $(n,[m])$ 所张成的全子范畴，
其中 $\mathbb{\Delta}_+$ 为增广单纯范畴（即在 $\mathbb{\Delta}$ 中添加空对象 $[-1]$）。
此时：

- $n \in \mathbb{Z}_{\geq 0}$ 表示滤链的层级。

- $[m] \in \mathbb{\Delta}_+^{\mathrm{op}}$ 表示增广单纯对象的阶数。

将 $\mathcal{J}_+$ 的低阶部分画出如下：
\[
\begin{tikzcd}
  \cdots & {(2,[-1])} & {(1,[-1])} & {(0,[-1])} \\
  \cdots & {(2,[0])} & {(1,[0])} & {(0,[0])} \\
  \cdots & {(2,[1])} & {(1,[1])} \\
  \cdots & {(2,[2])}
  \arrow[from=1-2, to=1-1]
  \arrow[from=1-3, to=1-2]
  \arrow[from=1-4, to=1-3]
  \arrow[from=2-2, to=1-2]
  \arrow[from=2-2, to=2-1]
  \arrow[from=2-2, to=3-2]
  \arrow[from=2-3, to=1-3]
  \arrow[from=2-3, to=2-2]
  \arrow[from=2-3, to=3-3]
  \arrow[from=2-4, to=1-4]
  \arrow[from=2-4, to=2-3]
  \arrow[shift left=3, from=3-2, to=2-2]
  \arrow[shift right=3, from=3-2, to=2-2]
  \arrow[from=3-2, to=3-1]
  \arrow[shift right=2, from=3-2, to=4-2]
  \arrow[shift left=2, from=3-2, to=4-2]
  \arrow[shift left=3, from=3-3, to=2-3]
  \arrow[shift right=3, from=3-3, to=2-3]
  \arrow[from=3-3, to=3-2]
  \arrow[shift left=4, from=4-2, to=3-2]
  \arrow[shift right=4, from=4-2, to=3-2]
  \arrow[from=4-2, to=3-2]
  \arrow[from=4-2, to=4-1]
\end{tikzcd}
\]
其中第一行 $(n,[-1])$ 对应滤链各项的几何实现，下方的三角区域对应骨架滤链的具体展开。

定义 $\mathcal{J} \subset \mathcal{J}_+$ 为由满足 $0 \leq m \leq n$ 的二元组 $(n,[m])$
所张成的全子范畴（即去掉 $[-1]$ 那一行）。
:::

骨架滤链满足一个关键条件：对于 $s \leq m \leq n$，
有 $(\mathrm{sk}_m X)_s \simeq (\mathrm{sk}_n X)_s$。
因此，我们引入以下函子范畴。

::: definition
定义 $\mathsf{Fun}^0(\mathcal{J},\mathcal{C}) \subset \mathsf{Fun}(\mathcal{J},\mathcal{C})$
为由满足以下条件的函子 $F$ 所张成的全子范畴：
对于 $s \leq m \leq n$，态射 $F(m,[s]) \to F(n,[s])$ 均为同构。

类似地，
定义 $\mathsf{Fun}^0(\mathcal{J}_+,\mathcal{C})$ 为 $\mathsf{Fun}^0(\mathcal{J},\mathcal{C})$
中的函子沿包含 $\mathcal{J} \hookrightarrow \mathcal{J}_+$ 做左 Kan 扩张所得的全子范畴。
:::

现在，各自然函子诱导出如下图表：
\[
\mathsf{Fun}(\mathbb{\Delta}^{\mathrm{op}},\mathcal{C}) \xrightarrow{G} \mathsf{Fun}^0(\mathcal{J},\mathcal{C}) \xleftarrow{G'} \mathsf{Fun}^0(\mathcal{J}_+,\mathcal{C}) \xrightarrow{G''} \mathsf{Fun}(\mathbb{Z}_{\geq 0},\mathcal{C}).
\]
其中：

- $G$ 由投影 $p \colon \mathcal{J} \to \mathbb{\Delta}^{\mathrm{op}}$（将 $(n,[m])$ 映为
  $[m]$）诱导。

- $G'$ 由包含 $\mathcal{J} \hookrightarrow \mathcal{J}_+$ 诱导（限制函子）。

- $G''$ 由包含 $\mathbb{Z}_{\geq 0} \hookrightarrow \mathcal{J}_+$（将 $n$ 映为 $(n,[-1])$）诱导。

@thm-stable-DK 归结为证明 $G$、$G'$、$G''$ 均为范畴等价。

### 技术引理

以下引理是证明 $G''$ 为等价的关键，它体现了稳定性的核心作用。

::: lemma {@lem-Kan-extension}
令 $\mathcal{C}$ 为稳定范畴，$n \geq 0$，
$F \colon \mathbb{\Delta}_{+,\leq n}^{\mathrm{op}} \to \mathcal{C}$ 为函子。
则以下条件等价：

1. $F$ 为 $F|_{\mathbb{\Delta}_{\leq n}^{\mathrm{op}}}$ 的左 Kan 扩张。

2. $F$ 为 $F|_{\mathbb{\Delta}_{+,\leq n-1}^{\mathrm{op}}}$ 的右 Kan 扩张。

:::

::: remark
此引理的直观含义是：在稳定范畴中，
几何实现（左 Kan 扩张到 $[-1]$）与余骨架（右 Kan 扩张从低阶数据）给出相同的结果。
这正是稳定性（即有限极限与有限余极限一致）的直接体现。
:::

### $G$ 为范畴等价

定义以下截断版本的指标范畴：

- $\mathcal{J}^{\leq k}$：$\mathcal{J}$ 中由满足 $m \leq n \leq k$ 的 $(n,[m])$ 所张成的全子范畴。

- $\mathcal{J}^{k}$：$\mathcal{J}$ 中由满足 $m \leq n = k$ 的 $(n,[m])$ 所张成的全子范畴。

投影 $p$ 限制为等价 $\mathcal{J}^k \simeq \mathbb{\Delta}_{\leq k}^{\mathrm{op}}$。

我们说明限制函子诱导等价
$\mathsf{Fun}^0(\mathcal{J}^{\leq k},\mathcal{C}) \xrightarrow{\sim} \mathsf{Fun}(\mathcal{J}^k,\mathcal{C})$。
考虑沿全忠实包含 $\iota \colon \mathcal{J}^k \hookrightarrow \mathcal{J}^{\leq k}$ 的右 Kan 扩张：
\[
\begin{tikzcd}
  \mathcal{J}^{k} \ar[d,hook,"\iota"'] \ar[dr,"H"]\\
  \mathcal{J}^{\leq k} \ar[r,"\operatorname{Ran}_{\iota} H"'] & \mathcal{C}.
\end{tikzcd}
\]
这诱导出全忠实函子
$\iota_* \colon \mathsf{Fun}(\mathcal{J}^k,\mathcal{C}) \to \mathsf{Fun}(\mathcal{J}^{\leq k},\mathcal{C})$。
其本质像恰为 $\mathsf{Fun}^0(\mathcal{J}^{\leq k},\mathcal{C})$：

对于 $s \leq m \leq n \leq k$，下范畴 $\mathcal{J}^k_{(m,[s])/} \simeq \mathcal{J}^k_{(n,[s])/}$，
因此右 Kan 扩张的逐点公式保证
$\operatorname{Ran}_\iota H(m,[s]) \to \operatorname{Ran}_\iota H(n,[s])$ 为同构。
反过来，
任意 $F \in \mathsf{Fun}^0(\mathcal{J}^{\leq k},\mathcal{C})$ 均可验证
$F \simeq \operatorname{Ran}_\iota(F|_{\mathcal{J}^k})$。

由此得到一列等价：
\[
G_k \colon \mathsf{Fun}(\mathbb{\Delta}_{\leq k}^{\mathrm{op}},\mathcal{C}) \xrightarrow{\sim} \mathsf{Fun}(\mathcal{J}^k,\mathcal{C}) \xrightarrow{\sim} \mathsf{Fun}^0(\mathcal{J}^{\leq k},\mathcal{C}).
\]
取 $k \to \infty$ 的极限，由于等价的极限仍为等价，
得 $G \simeq \operatorname{lim}_k G_k$ 为范畴等价。

::: remark [另一视角]
也可以用局部化的语言理解 $G$ 为等价。
记 $W = \{(m,[s]) \to (n,[s]) \mid s \leq m \leq n\}$ 为需要反转的态射类，
则 $\mathsf{Fun}^0(\mathcal{J},\mathcal{C}) \simeq \mathsf{Fun}(\mathcal{J}[W^{-1}],\mathcal{C})$。

投影 $p' \colon \mathcal{J} \to \mathbb{Z}_{\geq 0}$（将 $(n,[m])$ 映为 $n$）是余笛卡尔纤维化，
而 $W$ 恰好是 $p'$-[[推出纤维化|推出态射]]的全体。
由 $\mathsf{Cat}$ 中的余极限计算公式，
\[
\mathcal{J}[W^{-1}] \simeq \operatorname{colim}_{n \in \mathbb{Z}_{\geq 0}} \mathcal{J}_n,
\]
其中纤维 $\mathcal{J}_n \simeq \mathbb{\Delta}_{\leq n}^{\mathrm{op}}$。
此余极限恰为 $\mathbb{\Delta}^{\mathrm{op}}$，
从而
$\mathsf{Fun}^0(\mathcal{J},\mathcal{C}) \simeq \mathsf{Fun}(\mathbb{\Delta}^{\mathrm{op}},\mathcal{C})$。
:::

### $G'$ 为范畴等价

包含 $\mathcal{J} \hookrightarrow \mathcal{J}_+$ 为全忠实函子。
对于 $(n,[-1]) \in \mathcal{J}_+$，切片范畴 $\mathcal{J}_{/(n,[-1])}$ 是有限的。
由于稳定范畴 $\mathcal{C}$ 具有有限余极限，左 Kan 扩张存在。

根据 $\mathsf{Fun}^0(\mathcal{J}_+,\mathcal{C})$ 的定义，
其中的函子恰好是 $\mathsf{Fun}^0(\mathcal{J},\mathcal{C})$ 中函子的左 Kan 扩张。
由于全忠实嵌入的限制函子在 Kan 扩张的子范畴上给出等价，$G'$ 为范畴等价。

### $G''$ 为范畴等价

这是证明中最微妙的部分，需要用到 @lem-Kan-extension。

定义 $\mathcal{J}_+^{\leq k}$ 为 $\mathcal{J}_+$ 中由满足 $m \leq n \leq k$ 或 $m = -1$ 的 $(n,[m])$
所张成的全子范畴。
记 $\mathcal{D}(k) \coloneqq \mathsf{Fun}^0(\mathcal{J}_+^{\leq k},\mathcal{C})$
为满足稳定性条件以及在 $n \leq k$ 的 $(n,[-1])$ 处为左 Kan 扩张的函子范畴。

有极限分解
\[
\mathsf{Fun}^0(\mathcal{J}_+,\mathcal{C}) \simeq \operatorname{lim}\left( \cdots \to \mathcal{D}(k) \to \mathcal{D}(k-1) \to \cdots \to \mathcal{D}(-1) \right),
\]
其中 $\mathcal{D}(-1) \simeq \mathsf{Fun}(\mathbb{Z}_{\geq 0},\mathcal{C})$。
因此只需说明每个限制映射 $\mathcal{D}(k) \to \mathcal{D}(k-1)$ 均为等价。

将此限制分解为两步：
\[
\mathcal{D}(k) \xrightarrow{\theta} \mathcal{D}'(k) \xrightarrow{\theta'} \mathcal{D}(k-1),
\]
其中 $\mathcal{D}'(k)$ 定义在
$\mathcal{J}_0^{\leq k} \coloneqq \mathcal{J}_+^{\leq k} \setminus \{(k,[k])\}$ 上。

- **$\theta'$ 为等价**：
  $\mathcal{D}'(k)$ 中的函子由其在 $\mathcal{J}_+^{\leq k-1}$ 上的限制加上 $(k,[-1])$
  处的左 Kan 扩张条件所确定。
  由于 Kan 扩张本质唯一，$\theta'$ 为等价。
- **$\theta$ 为等价**：需要说明 $(k,[k])$ 处的值由其余数据唯一确定。
  根据 $\mathcal{D}(k)$ 的定义，
  任意 $F \in \mathcal{D}(k)$ 在 $(k,[-1])$ 处为 $F|_{\mathcal{J}^{\leq k}}$ 的左 Kan 扩张。
  注意到 $\mathcal{J}^k \simeq \mathbb{\Delta}_{\leq k}^{\mathrm{op}}$ 在计算 $(k,[-1])$
  处 Kan 扩张的图表中是共首的。

此时引用 @lem-Kan-extension：由于 $\mathcal{C}$ 为稳定范畴，
从 $\mathbb{\Delta}_{\leq k}^{\mathrm{op}}$ 出发的左 Kan 扩张等价于从
$\mathbb{\Delta}_{+,\leq k-1}^{\mathrm{op}} \simeq \mathcal{J}_+^{k-1}$ 出发的右 Kan 扩张。
而 $\mathcal{J}_+^{k-1} \subseteq \mathcal{J}_0^{\leq k}$，
因此 $(k,[k])$ 处的值由 $\mathcal{D}'(k)$ 中已有的数据通过右 Kan 扩张唯一确定。
从而 $\theta$ 为等价。

两步均为等价，故 $G''$ 为范畴等价。$\square$

## 推广

@thm-stable-DK 有如下截断版本。

::: proposition
令 $\mathcal{C}$ 为稳定范畴，$n \geq 0$，则有范畴等价
\[
\mathsf{Fun}(\mathbb{\Delta}_{\leq n}^{\mathrm{op}},\mathcal{C}) \simeq \mathsf{Fun}([0,n],\mathcal{C}),
\]
其中 $[0,n] \subset \mathbb{Z}_{\geq 0}$ 为由 $0, 1, \dots, n$ 所张成的全子范畴。
:::

::: remark
这一截断版本可以直接从 @thm-stable-DK 的证明中读出：
只需将证明中的极限 $k \to \infty$ 截断到 $k = n$ 即可。
它在[[谱序列]]理论中有重要应用：
有限长的滤链对应于有限阶截断的单纯对象。
:::

## 参考文献

```bibliography
LurieHA:
  type: book
  author: 'Lurie, Jacob'
  title: Higher Algebra
  year: 2017
  note: §1.2.4
  url: https://www.math.ias.edu/~lurie/papers/HA.pdf
```

```terms
稳定 Dold–Kan 对应:
  en: stable Dold–Kan correspondence
分次对象:
  en: graded piece
```
