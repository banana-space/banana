---
title: 自由场
aliases: [自由量子场]
categories: [自由场论]
navboxes: [自由场论]
---

在[[量子场论]]中，**自由场**是描述无相互作用粒子的[[量子场]]。
经典场在每个时空点给出一个场值，
量子场的 $\Phi (x)$ 则是作用于量子态空间上的局域场算子。
对于自由场，它作用在由[[单粒子空间]]构造的 [[Fock 空间]]上：
作用于[[真空]]时产生单粒子激发，作用于已有粒子的态时则加入或移去一个粒子。

自由经典场满足线性运动方程，可按正频与负频模式分解。
量子化后，正频部分的振幅成为湮灭算子，负频部分的振幅成为产生算子；
局域场由各个模式叠加而成，因而应是[[产生、湮灭算子]]的一次线性组合。
省略粒子种类指标，其[[模展开（量子场论）|模展开]]大致为
\[
\Phi (x) = \sum_r \int
\left(
  u_r (p) \otimes a_{p,r} \, \mathrm{e}^{-\mathrm{i} p \cdot x}
  + v_r (p) \otimes a^\dagger_{p,r} \, \mathrm{e}^{\mathrm{i} p \cdot x}
\right) d\mu (p) .
\]
这里 $p$、$r$ 分别标记动量与内部态，$u_r$、$v_r$ 是模系数，
积分按正能量动量轨道上的不变测度进行。
场在时空对称性下的变换方式则沿用对应经典场的协变性。
有相互作用时，场算子一般不再为固定的自由产生、湮灭算子的一次线性组合。

自由场的典型例子包括[[Klein-Gordon 场|实标量场]]、带荷标量场、[[Proca 场]]和 [[Dirac 场]]等。
它会满足一些好的性质，如 Fock 真空中的高阶关联函数可由二点函数按 [[Wick 定理]]计算。

## 定义

设 $M = \mathbb{R}^{1,d-1}$ 是 $d \geq 2$ 维 [[Minkowski 空间]]，
度量号差取 $(+, -, \ldots, -)$，并令 $\hbar = c = 1$。
记 $L = \widetilde{\mathrm{SO}}^+ (1, d-1)$ 为保时向正定向 [[Lorentz 群]]的[[万有覆叠]]，
$G = M \rtimes L$ 为相应的 [[Poincaré 群]]覆叠。
对 $g = (b, \Lambda) \in G$，写 $gx = \Lambda x + b$；
这里 $L$ 通过覆叠映射作用于 $M$。

设 $E$ 是对应经典场的取值空间（必要时取复化），$D$ 是其上的有限维 Lorentz 表示。
表示 $D$ 对应于经典场的类型：如标量场取平凡表示，向量场取自然表示，旋量场取旋量表示。

给定正能量的单粒子[[酉表示]] $(\mathfrak{h}, U_1)$，记
\[
\mathcal{H} = \Gamma_\pm (\mathfrak{h}),
\qquad U = \Gamma_\pm (U_1)
\]
为相应的 Fock 空间及其上的群表示，$\Omega$ 为单位真空向量。
$\mathfrak{h}$ 可包含若干种粒子，但在一个 Bose 或 Fermi Fock 空间中，
各分量须具有相同的统计类型。
内积对第二个变量线性，故 $a^\dagger (f)$ 对 $f$ 线性，$a (f)$ 对 $f$ 反线性。

::: definition [自由场] {@def:free-field}
类型为 $E$ 的**自由场**是算子值函数
\[
\Phi \colon M \longrightarrow E \otimes \operatorname{End} (\mathcal{H}) .
\]
对 $\ell \in E^*$，记
\[
\Phi_\ell (x) = (\ell \otimes \mathrm{id}) \Phi (x)
\]
为与对偶向量 $\ell$ 收缩得到的算子值场。要求：

1. **线性形式。** 对每个 $\ell \in E^*$，场具有形式
   \[
   \Phi_\ell (x) = a (\xi_\ell (x)) + a^\dagger (\eta_\ell (x)),
   \]
   其中 $\xi_\ell (x)$、$\eta_\ell (x)$ 是单粒子空间中的广义向量。
2. **协变性。** 对任意 $g = (b, \Lambda) \in G$，有
   \[
   \bigl(D (\Lambda) \otimes \operatorname{Ad}_{U (g)}\bigr) \Phi (x) = \Phi (gx),
   \]
   其中 $\operatorname{Ad}_{U (g)} (A) = U (g) A U (g)^{-1}$。
3. **[[定域性]]。** 对任意 $\ell, k \in E^*$，若 $x, y$ 类空分离，即 $(x-y)^2 < 0$，则
   \[
   [\Phi_\ell (x), \Phi_k (y)]_\varepsilon
   = [\Phi_\ell (x), \Phi_k (y)^\dagger]_\varepsilon = 0 .
   \]
   这里 $[A, B]_\varepsilon = AB - \varepsilon BA$，
   Bose 场取 $\varepsilon = 1$，Fermi 场取 $\varepsilon = -1$。
4. 场及其伴随作用于真空所得的单粒子态生成 $\mathfrak{h}$。
:::

这里将取值空间 $E$ 写在第一个张量因子，使 $D$ 与算子共轭分别作用于对应的因子。
协变性来自于经典场的协变性：经典场 $\phi_{\mathrm{cl}} \colon M \to E$ 按
\[
(g \cdot \phi_{\mathrm{cl}}) (x)
= D (\Lambda) \phi_{\mathrm{cl}} (g^{-1} x)
\]
变换。从单粒子表示构造协变自由场的观点见 [@Weinberg1995, 第 5.1 节]。

::: remark
这里 $\operatorname{End} (\mathcal{H})$ 仅作为算子空间的形式记号。
严格地说，场通常是[算子值分布](/wiki/量子场/#算子值分布)，
逐点公式中的单粒子波函数和算子也应允许取广义意义。
例如，以光滑紧支撑函数对时空位置积分后，场作用于真空才通常给出真正的单粒子向量。
上述逐点公式可在这一分布框架中严格化；以下仍使用算子值函数的记号。
:::

### 坐标表述

选定 $E$ 的基 $(e_A)$ 及其对偶基 $(e^A)$，令
$\Phi_A (x) = \Phi_{e^A} (x) = (e^A \otimes \mathrm{id}) \Phi (x)$，
则 $\Phi (x) = \sum_A e_A \otimes \Phi_A (x)$。
协变性可以写为
\[
U (b, \Lambda) \Phi_A (x) U (b, \Lambda)^{-1}
= \sum_B D (\Lambda^{-1})_{AB} \Phi_B (\Lambda x + b) .
\]

再选定[单粒子表示的动量坐标](/wiki/单粒子空间/#诱导表示的动量坐标)，写成
\[
\mathfrak{h} = \bigoplus_\alpha L^2 (\mathcal{O}_\alpha, d\mu_\alpha; V_\alpha) .
\]
这里 $\alpha$ 标记粒子种类及其不可约分量，$\mathcal{O}_\alpha$ 是正能量动量轨道，
$V_\alpha$ 是相应的[[小群]]表示空间，$d\mu_\alpha$ 是不变测度。
取 $V_\alpha$ 的标准正交基，以 $r$ 标记内部态，则
\[
\Phi_A (x)
= \sum_{\alpha, r} \int_{\mathcal{O}_\alpha}
\left(
  u_A^{\alpha r} (p) \, a_{\alpha,p,r} \, \mathrm{e}^{-\mathrm{i} p \cdot x}
  + v_A^{\alpha r} (p) \, a^\dagger_{\alpha,p,r} \, \mathrm{e}^{\mathrm{i} p \cdot x}
\right) d\mu_\alpha (p) .
\]
这就是[[模展开（量子场论）|模展开]]。
其中 $p \cdot x = p^0 x^0 - \boldsymbol{p} \cdot \boldsymbol{x}$，
$a_{\alpha,p,r}$、$a^\dagger_{\alpha,p,r}$ 是
[动量标记的产生、湮灭算子](/wiki/产生、湮灭算子/#动量与内部态标签)。
模函数 $u_A^{\alpha r}$、$v_A^{\alpha r}$ 是场在所选基下的模展开系数，
须同时满足协变性与定域性的要求。
场分量 $A$ 与单粒子的内部态 $r$ 是不同的标签。

由于 $p^0 > 0$，含 $\mathrm{e}^{-\mathrm{i} p \cdot x}$ 的湮灭部分称为**正频部分**，
含 $\mathrm{e}^{\mathrm{i} p \cdot x}$ 的产生部分称为**负频部分**。
这两部分通常不单独满足定域性；完整场的类空交换关系依赖二者的组合。

## 例子

### 实标量场

质量为 $m > 0$ 的实标量场取值于 Lorentz 群的平凡表示 $E = \mathbb{C}$。
它的单粒子表示是由[[小群]]的平凡表示得到的[[诱导表示]]，动量表述为
\[
\mathfrak{h} = L^2 (H_m^+, d\mu_m),
\qquad
H_m^+ = \{p : p^2 = m^2,\ p^0 > 0\} .
\]
令 $k_x (p) = \mathrm{e}^{\mathrm{i} p \cdot x}$ 为相应的广义单粒子波函数。
相应的标量自由场为
\[
\varphi (x) = a (k_x) + a^\dagger (k_x) .
\]
它满足 $\varphi (x)^\dagger = \varphi (x)$。
这就是自由实 [[Klein–Gordon 场]]。

取质量壳上的 Lorentz 不变测度
\[
d\mu_m (p) = \frac{d^{d-1} \boldsymbol{p}}{(2\pi)^{d-1} 2 E_{\boldsymbol{p}}},
\qquad E_{\boldsymbol{p}} = \sqrt{|\boldsymbol{p}|^2 + m^2},
\]
便得到通常的表达式
\[
\varphi (x) = \int_{H_m^+}
\left(a_p \, \mathrm{e}^{-\mathrm{i} p \cdot x}
      + a_p^\dagger \, \mathrm{e}^{\mathrm{i} p \cdot x}\right) d\mu_m (p) .
\]
质量壳条件使其满足 $(\Box + m^2) \varphi = 0$；
具体交换关系与二点函数见 [@Tong, 第 2.2、2.6、2.7 节]。

### 带荷标量场

带荷标量场的 Lorentz 表示仍是 $E = \mathbb{C}$，
单粒子表示则包含粒子与反粒子两个分量：
\[
\mathfrak{h} = \mathfrak{h}_{\mathrm{p}} \oplus \mathfrak{h}_{\mathrm{a}},
\qquad
\mathfrak{h}_{\mathrm{p}} \simeq \mathfrak{h}_{\mathrm{a}}
\simeq L^2 (H_m^+, d\mu_m) .
\]
内部 $\mathrm{U} (1)$ 对称性通过互逆的[[特征标]]作用在两个分量上。
相应的 Bose 自由场为
\[
\begin{aligned}
\phi (x) &= a (k_x \oplus 0) + a^\dagger (0 \oplus k_x), \\
\phi (x)^\dagger &= a (0 \oplus k_x) + a^\dagger (k_x \oplus 0) .
\end{aligned}
\]
$\phi$ 湮灭粒子、产生反粒子，$\phi^\dagger$ 的作用相反；二者互为伴随而不相等。
若以 $a_p, b_p$ 分别记两种粒子的湮灭算子，则
\[
\phi (x) = \int_{H_m^+}
\left(a_p \, \mathrm{e}^{-\mathrm{i} p \cdot x}
      + b_p^\dagger \, \mathrm{e}^{\mathrm{i} p \cdot x}\right) d\mu_m (p) .
\]
两种粒子的荷相反，但质量相同，场仍满足 Klein–Gordon 方程
[@Tong, 第 2.5 节]。

### 向量场

在 $3 + 1$ 维，取 $E = \mathbb{C}^{1,3}$ 及 Lorentz 群的自然四矢量表示 $D$。
对于有质量粒子，它在旋转小群下分解为 $V_0 \oplus V_1$，
因此向量类型的场可以描述自旋 $0$ 或 $1$ 的粒子。

设 $m > 0$，令 $\mathcal{V} \to H_m^+$ 为纤维 $\mathcal{V}_p = p^\perp$ 的[[向量丛]]，
在纤维上取正定内积 $\langle v, w \rangle_p = -\overline v \cdot w$。
自旋为 $1$ 的单粒子空间为
\[
\mathfrak{h} = L^2 (H_m^+, d\mu_m; \mathcal{V}) .
\]
选取纤维的标准正交[[极化]]基 $\varepsilon_r (p)$，$r = 1, 2, 3$。
在相应的 Bose Fock 空间上，定义自由实 [[Proca 场]]
\[
A (x) = \sum_{r = 1}^3 \int_{H_m^+}
\left(
  \varepsilon_r (p) \, a_{p,r} \, \mathrm{e}^{-\mathrm{i} p \cdot x}
  + \overline{\varepsilon_r (p)} \, a^\dagger_{p,r} \, \mathrm{e}^{\mathrm{i} p \cdot x}
\right) d\mu_m (p) .
\]
它描述具有三个极化态的有质量自旋 $1$ 粒子，满足 Proca 方程，其等价形式为
\[
(\Box + m^2) A = 0,
\qquad \operatorname{div} A = 0 .
\]
这也是有质量向量粒子理论的自由部分
[@Weinberg1995, 第 5.3 节]。

向量类型的自旋 $0$ 例子则由前面的实标量场给出：
$B = \operatorname{grad} \varphi$ 同样按四矢量变换，
但它的单粒子表示仍是原来的自旋 $0$ 表示。
因此，场的取值类型与粒子的自旋是相关而不同的数据
[@Weinberg1995, 第 5.3 节，式 (5.3.19)]。

::: remark
自由 [[Maxwell 场]]也有物理意义，但其四势具有[[规范对称性|规范冗余]]。
在只含物理光子的两个螺旋度的正定 Fock 空间上，非零四势不能严格按四矢量协变，
其变换须允许附加的规范变换。
场强则可作为严格协变的局域自由场，取值类型是反对称二阶张量
[@Weinberg1995, 第 5.9 节]。
:::

### Dirac 场

在 $3 + 1$ 维，设 $m > 0$，取四维 Dirac [[旋量]]表示
$(\Sigma, D_{\mathrm{D}})$ 作为场的取值空间。
记 $\not p$ 为动量 $p$ 在这一 [[Clifford 代数]]表示中的作用，
$S^\pm$ 为质量壳 $H_m^+$ 上的[[向量丛]]，其纤维为
\[
S_p^\pm = \ker (\not p \mp m) .
\]
粒子与反粒子的单粒子空间分别为
\[
\mathfrak{h}_{\mathrm{p}} = L^2 (H_m^+, d\mu_m; S^+),
\qquad
\mathfrak{h}_{\mathrm{a}} = L^2 (H_m^+, d\mu_m; \overline{S^-}) .
\]
它们采用标准的正定不变纤维内积，并配备质量为 $m$、自旋为 $1/2$ 的正能量酉诱导表示。
在 $\Gamma_- (\mathfrak{h}_{\mathrm{p}} \oplus \mathfrak{h}_{\mathrm{a}})$ 上，
自由 [[Dirac 场]]定义为
\[
\psi (x) = \sum_{r = 1}^2 \int_{H_m^+}
\left(
  u_r (p) \, a_{p,r} \, \mathrm{e}^{-\mathrm{i} p \cdot x}
  + v_r (p) \, b_{p,r}^\dagger \, \mathrm{e}^{\mathrm{i} p \cdot x}
\right) d\mu_m (p),
\]
其中 $u_r (p) \in S_p^+$、$v_r (p) \in S_p^-$ 是与所选内部态基对应的标准归一化模旋量，
$a_{p,r}$、$b_{p,r}$ 分别湮灭粒子与反粒子。
它满足 Dirac 方程 $(\mathrm{i} \not\partial - m) \psi = 0$
[@Tong, 第 4.7.3、5.2 节]。

## 性质

### 场类型与小群表示

固定模展开中的一个不可约单粒子分量，并省略粒子种类指标。
选标准动量 $k$，记其[[小群]]为
\[
W = \{w \in L : wk = k\},
\]
相应的不可约小群表示为 $(V, \tau)$。
把标准动量处的湮灭模与产生模分别记为线性映射
\[
u (k) \colon V \longrightarrow E,
\qquad
v (k) \colon \overline{V} \longrightarrow E .
\]
其中 $\overline V$ 带有共轭表示 $\overline\tau$。

由[[诱导--限制伴随]]，可知

::: proposition [小群相容条件] {@prop:little-group}
$u (k)$、$v (k)$ 分别是从 $V$、$\overline V$ 到[[群表示|限制表示]] $D|_W$ 的同态。
且给定同态 $u (k)$、$v (k)$，在上述线性模展开的约定下，
可以唯一确定仅含这一单粒子分量的协变场（但未必满足定域性），形如
\[
\begin{aligned}
\Phi (x)
={}& \sum_r \int_{\mathcal{O}}
  \mathrm{e}^{-\mathrm{i} p \cdot x}
  \bigl(D (L (p)) u (k) e_r\bigr) \otimes a_{p,r} \, d\mu (p) \\
&+ \sum_r \int_{\mathcal{O}}
  \mathrm{e}^{\mathrm{i} p \cdot x}
  \bigl(D (L (p)) v (k) \overline{e_r}\bigr) \otimes a^\dagger_{p,r} \, d\mu (p) .
\end{aligned}
\]
其中 $\mathcal{O} = Lk$ 是动量轨道，$d\mu$ 为其上的不变测度，
$(e_r)$ 是 $V$ 的标准正交基，$L (p) \in L$ 满足 $L (p) k = p$，且 $L (k) = 1$
[@Weinberg1995, 第 5.1 节]。
:::

多个单粒子分量的场由相应各项求和得到；带荷场的湮灭项与产生项可以对应不同的粒子种类。

### 自由动力学

设单粒子时间平移为 $U_1 (t) = \mathrm{e}^{\mathrm{i} t h}$，其中 $h \geq 0$ 是单粒子能量算子。
多粒子 [[Hamilton 算子]]是它的二次量子化：
\[
H = d\Gamma (h) \geq 0,
\qquad H \Omega = 0 .
\]
在 $n$ 粒子扇区上，$H$ 是各个单粒子能量之和；
因此自由演化保持粒子数；这里已将真空能量取为零。
场在 [[Heisenberg 绘景]]中的时间演化为
\[
\Phi (t, \boldsymbol{x})
= \bigl(\mathrm{id}_E \otimes \operatorname{Ad}_{\mathrm{e}^{\mathrm{i} t H}}\bigr)
\Phi (0, \boldsymbol{x}) .
\]
这正是协变条件对时间平移的限制。
自由场对产生、湮灭算子线性，Hamilton 算子则是这些算子的二次式
[@DerezinskiGerard2022, 第 3.3.3 节]。

### 二点函数与交换关系

令 $\omega_0 (A) = \langle \Omega, A \Omega \rangle$。
以下以 $F, G, F_i$ 表示形如 $\Phi_\ell (x)$ 的算子或其伴随，
逐点公式仍按分布理解。记
\[
W (F, G) = \omega_0 (FG)
\]
为真空二点函数。真空在 $U$ 下不变，因而二点函数满足相应的 Lorentz 协变律与平移不变性。
由产生、湮灭算子的
[[正则交换关系]]或[[正则反交换关系]]可知
\[
[F, G]_\varepsilon
= \bigl(W (F, G) - \varepsilon W (G, F)\bigr) I .
\]
因此相应的[[交换子]]或反交换子是单位算子的数值系数倍数，系数可按分布理解。
这些交换关系不依赖态的选择。

若 $F, G$ 的时空位置类空分离，则由[[定域性]]，上式为零；
二点函数本身却不必为零。
定域性表达局域操作的交换性质，并不要求类空区域之间没有量子关联。
对于 Fermi 场，由偶数个场构成的局域可观测量在类空分离时仍然交换。

### 真空关联函数与 Wick 定理

Fock 真空的单点函数为零，其高阶关联函数满足 [[Wick 定理]]。
对任意这样的 $F_1, \ldots, F_{2n}$，有
\[
\omega_0 (F_1 \cdots F_{2n})
= \sum_{P \in \mathcal{P}_2 (2n)} s_\varepsilon (P)
\prod_{(i,j) \in P,\ i < j} W (F_i, F_j) .
\]
这里 $\mathcal{P}_2 (2n)$ 为所有两两配对的集合。
Bose 情形 $s_\varepsilon (P) = 1$；
Fermi 情形则取将原次序排成各对相邻的次序所需的排列符号，
其中每对内部保持 $i < j$，各对按首指标递增排列。
奇数个这样的算子的真空期望为零。
这说明 Fock 真空是[[准自由态]]，但自由场的一般态不必满足这一配对公式
[@DerezinskiGerard2022, 第 17.1.1、17.2.1 节]。

Wick 定理也有包含[[正规序（量子场论）|正规序]]项的算子形式。
含有场算子的正规序项的真空期望为零，在一般态中的期望却未必为零；
因而算子的 Wick 展开不意味着任意态都是准自由态
[@Tong, 第 3.3.2 节]。

## 相关概念

- [[量子场]]、[[单粒子空间]]、[[Fock 空间]]
- [[产生、湮灭算子]]、[[模展开（量子场论）|模展开]]、[[二次量子化]]
- [[正则交换关系]]、[[正则反交换关系]]、[[定域性]]
- [[准自由态]]、[[Wick 定理]]、[[正规序（量子场论）|正规序]]

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
  note: 第 5 章从单粒子表示构造协变的自由场，讨论因果性、反粒子与运动方程。
Tong:
  type: preprint
  author: David Tong
  title: Quantum Field Theory
  url: 'https://davidtong.org/teaching/quantum-field-theory/qfthtml/qfthtml.html'
  note: 第 2 章讨论标量场，第 3.3.2 节讨论 Wick 定理，第 4、5 章讨论 Dirac 场。
DerezinskiGerard2022:
  type: book
  author: [Jan Dereziński, Christian Gérard]
  title: Mathematics of Quantization and Quantum Fields
  year: 2022
  publisher: Cambridge University Press
  doi: '10.1017/9781009290876'
  note: 2013 年初版的开放获取再版。第 3.3.3 节讨论二次量子化，第 17 章讨论准自由态，第 18.2.2 节讨论正能量 Fermi 量子化。
```

```terms
自由场:
  en: free field
模函数:
  en: mode function
正频部分:
  en: positive-frequency part
负频部分:
  en: negative-frequency part
带荷场:
  en: charged field
```
