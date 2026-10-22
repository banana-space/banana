---
title: 单粒子空间
categories: [自由场论]
navboxes: [自由场论]
---

在[[量子场论]]中，**单粒子空间**是描述某种[[粒子]]的单粒子态的复 [[Hilbert 空间]]，
其中的向量可看作不同[[动量]]、[[自旋]]的态[[叠加态|叠加]]而成的波包。
例如，[[自由标量粒子]]的单粒子波函数定义在正能量[[质量壳]]上，
其模平方给出相应的动量[[概率分布]]。

从[[时空对称性]]出发，单粒子空间承载 [[Poincaré 群]]的[[不可约表示|不可约]][[酉表示]]，
粒子的[[质量]]和自旋由这一表示决定；
从[[自由场]]出发，则可把[[经典场]]的正频部分作为单粒子[[波函数]]。

由单粒子空间 $\mathfrak{h}$ 可以构造 [[Fock 空间]]：
$n$ 个相同 [[Bose 子]]或 [[Fermi 子]]的态分别属于
[[对称代数|对称积]] $\operatorname{Sym}^n \mathfrak{h}$
或[[外代数|外积]] $\wedge^n \mathfrak{h}$，
再对所有粒子数作直和。
自由系统的总[[能量]]是各粒子能量之和，
单粒子的对称性作用也随之扩张到多粒子态。

在 [[Minkowski 空间]]中，自由场可根据正能量条件选取标准的正频部分。
一般[[弯曲时空]]未必具有时间平移对称性，
因而也未必有自然选定的[[真空]]和单粒子空间
[@KhavkineMoretti2015, 第 2.6、2.7 节]。
在相互作用理论中，稳定粒子的单粒子态仍可用于构造渐近[[散射态]]；
要以这些散射态描述全部物理态，还需满足[[渐近完备性]]。

在 [[Euclid 空间]]中，自由实标量场也有辅助单粒子空间和对称 Fock 表述。
利用[[反射正性]]进行 [[Osterwalder–Schrader 公理|Osterwalder–Schrader 重构]]，
可得到相应的物理单粒子空间 [@JaffeRitter2007]。

## 定义

### 由 Poincaré 群表示定义

设 $M$ 是 $d$ 维 [[Minkowski 空间]]，其中 $d \geq 2$，
度量号差为 $(1, d - 1)$，并已选定时空定向和未来方向。
采用[[自然单位制]] $c = \hbar = 1$。
记 $T = (M, +)$ 为平移群，
$G$ 为保时向正定向 [[Lorentz 群]] $\mathrm{SO}^+ (1, d - 1)$ 的[[万有覆叠]]。
相应连通 Poincaré 群的万有覆叠是[[半直积]]
\[
\widetilde{\mathcal{P}} = T \rtimes G .
\]
在 $3 + 1$ 维，$G \simeq \mathrm{SL}_2 (\mathbb{C})$，是 Lorentz 群的二重覆叠，
允许将整数和半整数自旋统一作为通常的线性表示处理。
而在 $2 + 1$ 维，这一万有覆叠是无限重覆叠。

动量属于 $T^*$，以下通过度量把 $T^*$ 与 $M$ 等同。
固定质量 $m \geq 0$ 及标准动量 $k \in H_m^+$，其中
\[
H_m^+ =
\{ p \in M \mid p^2 = m^2, \ p \neq 0, \ p \text{ 未来指向} \}
\]
是**正能量质量壳**。
令 $\mathcal{O}_k = G k \subset H_m^+$ 为动量轨道，
$W_k = \{ g \in G \mid g k = k \}$ 为 $k$ 的**小群**，并记
\[
\chi_k \colon T \longrightarrow \mathrm{U}(1),
\qquad a \longmapsto \mathrm{e}^{\mathrm{i} k \cdot a} .
\]
小群由保持标准动量不变的变换组成，其表示描述粒子的内部自由度。
以下用 $V$ 表示 $W_k$ 的不可约酉表示，
其作用记为 $D \colon W_k \to \mathrm{U}(V)$。

::: definition [单粒子表示与单粒子空间] {@def:induced-one-particle}
由 $(k, V)$ 确定的**单粒子表示**是酉[[诱导表示]]
\[
U_{k, V}
= \operatorname{Ind}_{T \rtimes W_k}^{\widetilde{\mathcal{P}}}
(\chi_k \otimes V),
\]
其中 $\chi_k \otimes V$ 指 $T \rtimes W_k$ 上的表示
$(a, w) \mapsto \chi_k (a) D (w)$。
它的表示空间称为相应粒子的**单粒子空间**，记为 $\mathfrak{h}_{k, V}$。
该表示限制到 $G$ 后满足
\[
U_{k, V} |_G \simeq \operatorname{Ind}_{W_k}^G V .
\]
这一空间可取为
\[
\mathfrak{h}_{k, V} = L^2 (G / W_k, G \times_{W_k} V) .
\]
:::

映射 $g W_k \mapsto g k$ 给出[[齐性空间]] $G / W_k$ 与动量轨道 $\mathcal{O}_k$ 之间的同构。
$G \times_{W_k} V$ 是以 $V$ 为纤维的[[关联丛]]，
这里的 $L^2$ 是其平方可积[[截面]]组成的 Hilbert 空间，
积分按轨道上的不变测度计算。
因此，$V$ 描述固定动量处的自旋或极化态，
$\mathfrak{h}_{k, V}$ 则容纳整个动量轨道上的波包。

当 $m > 0$ 或 $d \geq 3$ 时，$\mathcal{O}_k = H_m^+$。
在 $1 + 1$ 维的无质量情形中，未来[[光锥]]的两条射线各构成一个轨道，
对应向左和向右运动的粒子。

等价地，诱导空间的元素可以用满足
\[
F (g w) = D (w)^{-1} F (g)
\qquad (g \in G, \ w \in W_k)
\]
的[[可测函数]] $F \colon G \to V$ 表示，
平方可积性按[[商空间]] $G / W_k$ 上的不变测度定义。
选择同一轨道上的不同标准动量，得到等价的单粒子表示。

[[Wigner 分类]]把相应的正能量不可约 Poincaré 群表示归结为这些诱导表示。
这里要求不可约的是 Poincaré 群表示 $U_{k, V}$；
将它限制到 Lorentz 群的覆叠 $G$ 后，
所得表示 $\operatorname{Ind}_{W_k}^G V$ 未必仍然不可约。
构造和分类见 [@Weinberg1995, 第 2.5 节; @BekaertBoulanger2006, 第 3 节]。

### 自旋与螺旋度

本节仅讨论 $3 + 1$ 维 Minkowski 空间，此时 $G \simeq \mathrm{SL}_2 (\mathbb{C})$。
粒子的自旋和[[螺旋度]]由小群表示 $V$ 的类型确定。

::: definition [自旋]
若 $m > 0$，取静止动量 $k = (m, 0, 0, 0)$，则 $W_k \simeq \mathrm{SU}(2)$。
它的不可约酉表示为
\[
V_j \simeq \operatorname{Sym}^{2j} \mathbb{C}^2,
\qquad j = 0, \tfrac{1}{2}, 1, \ldots,
\]
其中 $\mathbb{C}^2$ 是 $\mathrm{SU}(2)$ 的标准表示。
称相应粒子的**自旋**为 $j$。
此时 $\dim V_j = 2j + 1$。
:::

因此，自旋为 $j$ 的有质量粒子在固定动量处有 $2j + 1$ 个独立的内部态。
平凡表示 $V_0 = \mathbb{C}$ 对应自旋为零的标量粒子。

::: definition [螺旋度]
若 $m = 0$，取 $k = (\kappa, 0, 0, \kappa)$，其中 $\kappa > 0$。
此时 $W_k$ 是 [[Euclid 群|特殊 Euclid 群]] $\mathrm{ISO}(2)$ 的二重覆叠，
其平移[[正规子群]] $N \simeq \mathbb{R}^2$ 的[[商群]] $W_k / N$
同构于[[旋量群]] $\mathrm{Spin}(2)$。
若 $N$ 在 $V$ 上作用平凡，则 $V$ 由该商群的[[特征标|一维特征]]给出：
\[
D_\lambda (R_\theta) = \mathrm{e}^{-\mathrm{i} \lambda \theta},
\qquad \lambda \in \tfrac{1}{2} \mathbb{Z} .
\]
其中 $R_\theta$ 是绕标准动量方向旋转角度 $\theta$ 的覆叠群元素，
参数 $\theta$ 的周期为 $4 \pi$。
称相应粒子的**螺旋度**为 $\lambda$，并记该小群表示为 $V_\lambda$。
:::

采用旋转算子 $U (R_\theta) = \mathrm{e}^{-\mathrm{i} \theta J_3}$ 的约定，
$\lambda$ 就是[[角动量]]沿动量方向的分量。
每个固定螺旋度表示在每个动量处只有一个独立的[[极化]]态。
若 $N$ 的作用非平凡，则得到[[连续自旋表示]]。
自旋和螺旋度的表示分类见 [@Weinberg1995, 第 2.5、2.7 节]。

### 由经典线性场构造

自由 Bose 场还可以从经典场的波动出发，选择其正频部分，
再把正频振幅组成的空间作为单粒子空间。
以下内积对第二个变量线性。

::: definition [单粒子结构]
设 $S$ 是经典实线性场的解空间，
$\sigma$ 是由场与其[[共轭动量]]确定的[[辛向量空间|辛形式]]。
**单粒子结构**是复 Hilbert 空间 $\mathfrak{h}$
及实线性映射 $K \colon S \to \mathfrak{h}$，满足

1. $K (S) + \mathrm{i} K (S)$ 在 $\mathfrak{h}$ 中稠密；

2. 对所有 $u, v \in S$，有
   \[
   2 \operatorname{Im} \langle K u, K v \rangle = \sigma (u, v) .
   \]

称 $\mathfrak{h}$ 为这一结构的**单粒子空间**。
:::

这里，$u \in S$ 表示一个经典波形，
$K u$ 是与该经典波形对应的复单粒子波函数。
第一个条件表示这些经典波形给出的波函数足以生成整个单粒子空间。
第二个条件使经典的辛结构与量子场的[[正则对易关系]]相容：
以经典波形 $u$ 为标签写出相应的场算子
\[
\Phi_K (u) = a (K u) + a^\dagger (K u),
\]
其中 $a$ 和 $a^\dagger$ 分别为[[产生、湮灭算子|湮灭与产生算子]]。
它们满足 $[\Phi_K (u), \Phi_K (v)] = \mathrm{i} \sigma (u, v) I$。
内积的实部则给出场涨落的大小，与所选的[[准自由态]]有关。
这一定义适用于更一般的实辛空间；构造见
[@KhavkineMoretti2015, 命题 11]。

## 例子

::: example [自由标量粒子]
在 $3 + 1$ 维 Minkowski 空间中，质量 $m > 0$ 的标量粒子没有自旋自由度。
标准动量可取 $k = (m, 0, 0, 0)$，其小群是 $\mathrm{SU}(2)$，
标量粒子对应小群的平凡表示 $V_0 = \mathbb{C}$。
因此其单粒子空间为
\[
\mathfrak{h}_m = L^2 (H_m^+, d\mu_m),
\qquad
d\mu_m (p) = \frac{d^3 \boldsymbol{p}}{(2 \pi)^3 \, 2 \omega_{\boldsymbol{p}}},
\qquad
\omega_{\boldsymbol{p}} = \sqrt{|\boldsymbol{p}|^2 + m^2} .
\]
对称性在动量波函数上的作用简化为
\[
(U (a, \Lambda) f) (p)
= \mathrm{e}^{\mathrm{i} p \cdot a} f (\Lambda^{-1} p) .
\]
质量壳测度的 Lorentz 不变性保证这一作用是酉的。
:::

::: example [有质量且自旋为 $j$ 的粒子]
在 $3 + 1$ 维 Minkowski 空间中，质量 $m > 0$、自旋
$j \in \{ 0, \tfrac{1}{2}, 1, \ldots \}$ 的粒子，
对应 $\mathrm{SU}(2)$ 的表示 $V_j = \operatorname{Sym}^{2j} \mathbb{C}^2$。
其单粒子空间可写为
\[
\mathfrak{h}_{m, j}
= L^2 (H_m^+, d\mu_m; \mathbb{C}^{2j + 1}) .
\]
波函数的分量 $f_r (p)$ 对应 $r = -j, -j + 1, \ldots, j$ 的自旋标签。
因此，“固定一个动量”以后，仍有 $2j + 1$ 个独立的自旋态。
:::

::: example [无质量的固定螺旋度粒子]
在 $3 + 1$ 维 Minkowski 空间中，无质量粒子的固定螺旋度 $\lambda$
由小群的一维表示 $V_\lambda$ 给出。
取标准动量 $k = (\kappa, 0, 0, \kappa)$，其中 $\kappa > 0$，
相应的单粒子表示为 $U_{k, V_\lambda}$。
[[光子]]的两种物理极化分别对应 $V_{+1}$ 和 $V_{-1}$，
其单粒子空间为
\[
\mathfrak{h}_{k, V_{+1}} \oplus \mathfrak{h}_{k, V_{-1}} .
\]
单个螺旋度已经给出连通 Poincaré 群覆叠的不可约表示；
[[空间反演]]则将螺旋度 $\lambda$ 与 $-\lambda$ 交换。
:::

::: example [自由实标量 Bose 场的单粒子结构]
在 $3 + 1$ 维 Minkowski 空间中，考虑质量 $m > 0$ 的实 [[Klein–Gordon 场]]。
取 $S$ 为具有光滑紧支撑初始数据的实 [[Klein–Gordon 方程]]解组成的空间，
并令
\[
\sigma (u, v) = \int_{\mathbb{R}^3}
(u \, \partial_t v - v \, \partial_t u) \, d^3 \boldsymbol{x} .
\]
这个积分与所选时间无关。
每个实解都可以写成
\[
u (x) = u_f^+ (x) + \overline{u_f^+ (x)},
\qquad
u_f^+ (x) = \int_{H_m^+}
f (p) \, \mathrm{e}^{-\mathrm{i} p \cdot x} \, d\mu_m (p) .
\]
其中 $u_f^+$ 只含时间因子 $\mathrm{e}^{-\mathrm{i} \omega_{\boldsymbol{p}} t}$，
称为**正频部分**。
取 $\mathfrak{h}_m = L^2 (H_m^+, d\mu_m)$ 并令 $K u = f$，便有
\[
\sigma (u, v) = 2 \operatorname{Im} \langle K u, K v \rangle .
\]
实解的负频部分由正频部分唯一确定，因此 $K$ 保留了完整经典解的信息。

更具体地，设 $q (\boldsymbol{x}) = u (0, \boldsymbol{x})$ 是初始场值，
$\pi (\boldsymbol{x}) = \partial_t u (0, \boldsymbol{x})$ 是初始共轭动量。
采用空间 [[Fourier 变换]]
\[
\widetilde{q} (\boldsymbol{p})
= \int \mathrm{e}^{-\mathrm{i} \boldsymbol{p} \cdot \boldsymbol{x}}
q (\boldsymbol{x}) \, d^3 \boldsymbol{x},
\]
并以相同约定定义 $\widetilde{\pi}$，则
\[
(K u) (\boldsymbol{p})
= \omega_{\boldsymbol{p}} \widetilde{q} (\boldsymbol{p})
+ \mathrm{i} \widetilde{\pi} (\boldsymbol{p}) .
\]
因此，$K$ 把实的场值和共轭动量合成复的单粒子振幅。
这给出与前述自旋为零的 Poincaré 群表示相同的单粒子空间。
:::

## 性质

### 诱导表示的动量坐标

@def:induced-one-particle 的抽象诱导空间可以写成通常的动量波函数空间。
对每个 $p \in \mathcal{O}_k$ 可测地选择 $L (p) \in G$，使 $L (p) k = p$，
再选定 $V$ 的标准正交基。
对等变函数 $F$ 取 $f (p) = F (L (p))$，就得到
\[
\mathfrak{h}_{k, V} \simeq L^2 (\mathcal{O}_k, d\mu_m; V),
\qquad
d\mu_m (p) = \left.
\frac{d^{d - 1} \boldsymbol{p}}{(2 \pi)^{d - 1} \, 2 p^0}
\right|_{\mathcal{O}_k} .
\]
其中 $p^0 = \sqrt{|\boldsymbol{p}|^2 + m^2}$ 是能量，
$\boldsymbol{p}$ 是 $d - 1$ 维空间动量，
$f$ 的分量 $f_r (p)$ 是动量和内部态的[[概率幅|概率振幅]]。
标准变换 $L (p)$ 的选择相当于选择各动量处的内部基底，
不改变所得表示的等价类。

对 $\Lambda \in G$，令
\[
R (\Lambda, p) = L (\Lambda p)^{-1} \Lambda L (p) \in W_k .
\]
这个小群元素称为 **Wigner 旋转**。
先作用 $L (p)$ 再作用 $\Lambda$，或直接作用 $L (\Lambda p)$，
都将标准动量 $k$ 变为 $\Lambda p$；$R (\Lambda, p)$ 记录了两者之间的差别。
诱导表示在动量坐标中的作用为
\[
(U_{k, V} (a, \Lambda) f) (p)
= \mathrm{e}^{\mathrm{i} p \cdot a}
D \bigl( R (\Lambda, \Lambda^{-1} p) \bigr) f (\Lambda^{-1} p) .
\]
因此，平移给出动量相关的相位，
Lorentz 变换改变动量并通过小群表示 $V$ 作用于内部态。

也可用 $|p, r\rangle$ 表示动量为 $p$、内部态标签为 $r$ 的广义态，写成
\[
P^\mu |p, r\rangle = p^\mu |p, r\rangle,
\qquad
|f\rangle = \sum_r \int_{\mathcal{O}_k} f_r (p) \, |p, r\rangle \, d\mu_m (p) .
\]
采用归一化约定
\[
\langle p, r | q, s \rangle
= (2 \pi)^{d - 1} \, 2 p^0 \,
\delta^{(d - 1)} (\boldsymbol{p} - \boldsymbol{q}) \, \delta_{r s},
\]
便有 $\| f \|^2 = \sum_r \int |f_r (p)|^2 \, d\mu_m (p)$。
对归一化波包，$|f_r (p)|^2 \, d\mu_m (p)$ 给出相应的动量和内部态概率。

::: remark
具有确定动量的 $|p, r\rangle$ 是广义本征态，
如同通常[[量子力学]]中的[[平面波]]，不能归一化为 Hilbert 空间中的单位向量。
单粒子 Hilbert 空间中的向量是上述平方可积波包。
:::

### 与正频解及场算子的关系

在 $3 + 1$ 维自由实标量场中，动量波函数 $f$ 对应的正频波包 $u_f^+$ 满足
\[
(\partial_t^2 - \Delta + m^2) u_f^+ = 0 .
\]
其 Klein–Gordon 内积为
\[
(u_f^+, u_g^+)_\mathrm{KG}
= \mathrm{i} \int_{\mathbb{R}^3}
\bigl( \overline{u_f^+} \, \partial_t u_g^+
- (\partial_t \overline{u_f^+}) \, u_g^+ \bigr) \, d^3 \boldsymbol{x}
= \langle f, g \rangle .
\]
因而也可以把单粒子空间看成正频解的 Hilbert 空间
[@Derezinski2026, 第 8.5 节]。
这里并不要求波函数在整个时空上平方可积。

设 $\Omega$ 是 Fock 真空，$a^\dagger (f)$ 是产生算子。
单粒子波包就是 $|f\rangle = a^\dagger (f) \Omega$，
其与场的联系可以写成
\[
\langle \Omega | \varphi (x) | f \rangle = u_f^+ (x) .
\]
也就是说，经典正频波包也出现在真空与单粒子态之间的场矩阵元中。

::: remark
这里把 $\varphi (x)$ 直观地看作算子值函数。
严格地说，连续时空中的场通常是算子值[[分布（泛函分析）|分布]]，
上述公式可在与测试函数配对后理解。
:::

## 参考文献*

```bibliography
Weinberg1995:
  type: book
  author: Steven Weinberg
  title: The Quantum Theory of Fields
  volume: 1
  year: 1995
  publisher: Cambridge University Press
  doi: '10.1017/CBO9781139644167'
  note: 第 2.5 节从小群诱导表示讨论单粒子态。原书采用三维 Dirac $\delta$ 归一化，本文采用 Lorentz 不变测度和相应的动量态归一化。

BekaertBoulanger2006:
  type: preprint
  author: [Xavier Bekaert, Nicolas Boulanger]
  title: The unitary representations of the Poincaré group in any spacetime dimension
  year: 2006
  arxiv: 'hep-th/0611263'
  note: 2021 年修订版，第 3.1--3.3 节讨论诱导表示、动量轨道及小群分类。

JaffeRitter2007:
  type: article
  author: [Arthur Jaffe, Gordon Ritter]
  title: Quantum Field Theory on Curved Backgrounds. I. The Euclidean Functional Integral
  year: 2007
  journaltitle: Communications in Mathematical Physics
  volume: 270
  number: 2
  pages: 545--572
  doi: '10.1007/s00220-006-0166-2'
  arxiv: 'hep-th/0609003'

Derezinski2026:
  type: preprint
  author: Jan Dereziński
  title: Mathematical Introduction to Quantum Field Theory
  year: 2026
  url: 'https://users.fuw.edu.pl/~derezins/qft-lectures.pdf'
  note: 2026 年 10 月 19 日版本，第 4.2、8.5 节。

KhavkineMoretti2015:
  type: incollection
  author: [Igor Khavkine, Valter Moretti]
  title: 'Algebraic QFT in Curved Spacetime and quasifree Hadamard states: an introduction'
  booktitle: Advances in Algebraic Quantum Field Theory
  editor: [Romeo Brunetti, Claudio Dappiaggi, Klaus Fredenhagen, Jakob Yngvason]
  year: 2015
  pages: 191--251
  publisher: Springer
  doi: '10.1007/978-3-319-21353-8_5'
  arxiv: '1412.5945'
```

```terms
单粒子空间:
  en: one-particle space
单粒子结构:
  en: one-particle structure
单粒子表示:
  en: one-particle representation
小群:
  en: little group
自旋:
  en: spin
Wigner 旋转:
  en: Wigner rotation
正能量质量壳:
  en: positive-energy mass shell
正频部分:
  en: positive-frequency part
螺旋度:
  en: helicity
```
