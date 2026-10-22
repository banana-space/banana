---
title: 产生、湮灭算子
aliases: [产生算子, 湮灭算子]
categories: [自由场论]
navboxes: [自由场论]
---

在[[量子场论]]中，**产生算子**和**湮灭算子**
分别把多粒子态变成粒子数增加或减少一个的态。
它们把[[单粒子空间]]中的[[波函数]]与 [[Fock 空间]]中的多粒子态联系起来：
产生算子把给定的单粒子态加入原有多粒子态，
湮灭算子则用给定波函数与一个粒子的波函数作内积，留下其余粒子的态。
对于[[全同粒子]]，这些作用还需遵守相应的统计规律：
[[Bose 子]]和 [[Fermi 子]]的算子分别满足
[[正则交换关系]]和[[正则反交换关系]]。

最简单的例子是[[量子谐振子]]的升降算子。
将谐振子的第 $n$ 个[[能级]]解释成同一模式中有 $n$ 个粒子的态，
升高或降低一个能级就对应产生或湮灭一个粒子。
自由 Bose 场的各个模式对应量子谐振子；
更一般地，[[自由场]]算子可由产生、湮灭算子的线性组合构造。
具体的场还需指定经典波形或时空测试函数与单粒子波函数的对应。

## 定义

设 $\mathfrak{h}$ 是复 [[Hilbert 空间]]，
[[内积空间|内积]] $\langle f, g \rangle$ 对第二个变量线性。
在相应的 Bose 或 Fermi Fock 空间
\[
\Gamma_+ (\mathfrak{h})
= \bigoplus_{n = 0}^\infty \operatorname{Sym}^n \mathfrak{h},
\qquad
\Gamma_- (\mathfrak{h})
= \bigoplus_{n = 0}^\infty \wedge^n \mathfrak{h}
\]
上，分别以 $\odot$ 和 $\wedge$ 记对称乘积与外积。
这里的[[对称代数|对称积]]、[[外代数|外积]]实现为 Hilbert [[张量积]]中的子空间，
内积由张量积继承；乘积通过对所有排列取平均来实现，反对称时带上排列的符号。
例如
\[
f \odot g = \frac{f \otimes g + g \otimes f}{2},
\qquad
f \wedge g = \frac{f \otimes g - g \otimes f}{2} .
\]
这固定了下述平方根因子所用的归一化约定。

::: definition [产生算子与湮灭算子]
给定 $f \in \mathfrak{h}$，Bose 和 Fermi **产生算子**分别定义为
\[
\begin{aligned}
  a_+^\dagger (f) \psi_n
  &= \sqrt{n + 1} \, f \odot \psi_n,
  && \psi_n \in \operatorname{Sym}^n \mathfrak{h}, \\
  a_-^\dagger (f) \psi_n
  &= \sqrt{n + 1} \, f \wedge \psi_n,
  && \psi_n \in \wedge^n \mathfrak{h} .
\end{aligned}
\]
它们的[[伴随算子]]
\[
a_\pm (f) = a_\pm^\dagger (f)^*
\]
称为相应的**湮灭算子**。
:::

以下省略统计类型的下标 $\pm$，并记[[真空]]向量为 $\Omega$。
产生算子在 $n$ 粒子扇区中加入波函数 $f$，并作相应的对称化或反对称化；
湮灭算子则与 $f$ 作内积，把态送到 $n - 1$ 粒子扇区。
特别地，
\[
a (f) \Omega = 0,
\qquad
a^\dagger (f) \Omega = f .
\]
产生算子对 $f$ 线性，湮灭算子对 $f$ 反线性。对 $\lambda \in \mathbb{C}$，有
\[
a^\dagger (\lambda f) = \lambda a^\dagger (f),
\qquad
a (\lambda f) = \overline{\lambda} \, a (f) .
\]
上述定义见 [@DerezinskiGerard2022, 第 3.4.2 节]。

::: remark
涉及 Bose 产生、湮灭算子乘积的代数公式，先在有限粒子态上理解，
即只含有限多个非零粒子数分量的向量。
非零的 Bose 产生、湮灭算子无界；Fermi 情形的算子则有界。
:::

### 动量与内部态标签

固定粒子种类及其不可约单粒子表示，
选定[单粒子空间的动量表述](/wiki/单粒子空间/#诱导表示的动量坐标)后，写
$\mathfrak{h} = L^2 (\mathcal{O}, d\mu; V)$。
这里 $\mathcal{O}$ 是动量轨道，$d\mu$ 是轨道上的不变测度，
$V$ 是描述内部自由度的[[小群]]表示空间。
选定 $V$ 的标准正交基 $(e_v)$，
以 $|p, v\rangle$ 表示动量为 $p$、内部态对应于 $e_v$ 的广义单粒子态。
在 $3 + 1$ 维，指标 $v$ 可取[[自旋]]分量或[[极化]]标签；
固定[[螺旋度]]的不可约表示中，$V$ 是一维的，该指标只有一个取值。
本节省略已固定的粒子种类标签；$v$ 仅标记该表示内部的态。

采用归一化约定
\[
\langle p, v | q, w \rangle = \delta_{vw} \delta_\mu (p, q),
\]
其中 $\delta_\mu$ 是相对于 $d\mu$ 的 [[Dirac $\delta$ 函数]]，即
$\int \delta_\mu (p, q) g (q) \, d\mu (q) = g (p)$。

::: definition [动量标记的产生、湮灭算子]
设 $\Psi_n$ 属于相应的 $n$ 粒子扇区。
动量标记的**产生算子** $a^\dagger_{p, v}$ 定义为与 $|p, v\rangle$ 的乘积：
\[
\begin{aligned}
  a^\dagger_{p, v} \Psi_n &= \sqrt{n + 1} \, |p, v\rangle \odot \Psi_n
  && \text{（Bose）}, \\
  a^\dagger_{p, v} \Psi_n &= \sqrt{n + 1} \, |p, v\rangle \wedge \Psi_n
  && \text{（Fermi）} .
\end{aligned}
\]
相应的**湮灭算子**定义为其形式伴随
\[
a_{p, v} = (a^\dagger_{p, v})^* .
\]
它们分别加入、移除动量为 $p$、内部态标签为 $v$ 的粒子。
:::

若同时讨论多种粒子，则另用 $\alpha$ 标记种类，写成
$a_{\alpha, p, v}$、$a^\dagger_{\alpha, p, v}$。
不同种类各自有相应的动量轨道、小群表示和统计类型。
若同一种物理粒子包含多个不可约分量，也须明确所用的分量，
例如光子的两个螺旋度分量。

对真空有
\[
a_{p, v} \Omega = 0,
\qquad
a^\dagger_{p, v} \Omega = |p, v\rangle .
\]
采用这些标签时，@prop:relations 中的关系写为
\[
\begin{aligned}
  [a_{p, v}, a^\dagger_{q, w}] &= \delta_{vw} \delta_\mu (p, q) I
  && \text{（Bose）}, \\
  \{ a_{p, v}, a^\dagger_{q, w} \} &= \delta_{vw} \delta_\mu (p, q) I
  && \text{（Fermi）},
\end{aligned}
\]
例如在 $3 + 1$ 维 [[Minkowski 空间]]中，设粒子的[[质量]]为 $m \geq 0$，
取 $c = 1$、$p = (E_{\boldsymbol{p}}, \boldsymbol{p})$，
$E_{\boldsymbol{p}} = \sqrt{|\boldsymbol{p}|^2 + m^2}$，并令
\[
\begin{aligned}
  d\mu (p) &= \frac{d^3 \boldsymbol{p}}{(2 \pi)^3 \, 2 E_{\boldsymbol{p}}}, \\
  \delta_\mu (p, q) &= (2 \pi)^3 \, 2 E_{\boldsymbol{p}}
  \delta^{(3)} (\boldsymbol{p} - \boldsymbol{q}) .
\end{aligned}
\]
这与本文采用的单粒子内积一致。
另一些文献把上述算子除以 $\sqrt{2 E_{\boldsymbol{p}}}$，
使关系右边不含 $2 E_{\boldsymbol{p}}$；再除以 $(2 \pi)^{3/2}$，
便得到纯三维 $\delta$ 归一化。使用时应同时核对动量态和积分测度的约定
[@Tong, 第 2.4.1、5.2 节]。

::: remark
连续动量标签的算子常直观地视为算子值函数；
严格地说，它们是算子值[[分布（泛函分析）|分布]]，上述公式在分布意义下理解。
这里 $v$ 是正交基标签；若直接用 $V$ 中的向量标记，
则产生算子对内部向量线性，湮灭算子反线性，
上述关系中的 $\delta_{vw}$ 换成相应的内积。
:::

## 例子

::: example [单个 Bose 模式]
设 $e \in \mathfrak{h}$ 为单位向量。
在 $\Gamma_+ (\mathbb{C} e)$ 中记
\[
|n\rangle = \frac{a^\dagger (e)^n}{\sqrt{n!}} \Omega .
\]
这些向量构成标准正交基，并且
\[
a (e) |n\rangle = \sqrt{n} \, |n - 1\rangle,
\qquad
a^\dagger (e) |n\rangle = \sqrt{n + 1} \, |n + 1\rangle .
\]
其中 $a (e) |0\rangle = 0$。
[[频率]]为 $\omega > 0$ 的量子谐振子的 [[Hamilton 算子]]是
\[
H = \hbar \omega \bigl( a^\dagger (e) a (e) + I / 2 \bigr),
\]
其中 $I$ 是恒等算子。
因此，产生、湮灭算子使[[能量]]分别增加或减少 $\hbar \omega$。
:::

::: example [单个 Fermi 模式]
设 $e$ 是单位单粒子向量。
在 $\Gamma_- (\mathbb{C} e)$ 中只有 $|0\rangle = \Omega$、$|1\rangle = e$ 两种占据态，
并且
\[
a^\dagger (e) |0\rangle = |1\rangle,
\qquad
a (e) |1\rangle = |0\rangle,
\qquad
a (e) |0\rangle = a^\dagger (e) |1\rangle = 0 .
\]
同一个模式不能再加入第二个 Fermi 子。
:::

::: example [多个模式]
设 $(e_j)_{j \in J}$ 是 $\mathfrak{h}$ 的标准正交基，并固定指标的次序。
占据数基由
\[
|(n_j)_{j \in J}\rangle
= \prod_{j \in J} \frac{a^\dagger (e_j)^{n_j}}{\sqrt{n_j!}} \Omega
\]
给出，其中只有有限多个 $n_j$ 非零。
$n_j$ 称为模式 $e_j$ 的**占据数**。
Bose 情形允许 $n_j \in \mathbb{Z}_{\geq 0}$；
Fermi 情形只允许 $n_j \in \{ 0, 1 \}$。
乘积只取非零占据数的模式，并按既定次序排列。
在 Fermi 情形中，交换两个不同模式的产生算子会改变符号。
:::

## 性质

### 交换关系与统计

记算子的[[交换子]]和[[反交换子]]分别为
\[
[A, B] = A B - B A,
\qquad
\{ A, B \} = A B + B A .
\]

::: proposition [正则交换关系与正则反交换关系] {@prop:relations}
在 Bose Fock 空间上，**[[正则交换关系]]** 为
\[
[a (f), a (g)] = [a^\dagger (f), a^\dagger (g)] = 0,
\qquad
[a (f), a^\dagger (g)] = \langle f, g \rangle I .
\]
在 Fermi Fock 空间上，相应的 **[[正则反交换关系]]** 为
\[
\{ a (f), a (g) \} = \{ a^\dagger (f), a^\dagger (g) \} = 0,
\qquad
\{ a (f), a^\dagger (g) \} = \langle f, g \rangle I .
\]
:::

::: proof [关系的由来]
考察 $a (f) a^\dagger (g) \psi_n$。
湮灭算子既可以与刚加入的波函数 $g$ 配对，得到 $\langle f, g \rangle \psi_n$，
也可以与原有粒子的波函数配对。
后一部分对应于先湮灭再产生的 $a^\dagger (g) a (f) \psi_n$。
对称乘积中交换两个粒子不改变符号，外积中则改变符号。
按排列展开，便有
\[
a (f) a^\dagger (g) \psi_n
= \langle f, g \rangle \psi_n
\mathbin\pm a^\dagger (g) a (f) \psi_n,
\]
其中 $+$ 对应 Bose 情形，$-$ 对应 Fermi 情形。
同理可得两次产生及两次湮灭之间的关系。
:::

这些关系见 [@DerezinskiGerard2022, 定理 3.51、3.52]。
在 Fermi 情形中取 $g = f$，得到 $a^\dagger (f)^2 = 0$。
这正是 [[Pauli 不相容原理]]的代数表达：同一单粒子态不能由两个全同 Fermi 子占据。

### 粒子数与占据数

设 $N$ 是 [Fock 空间中的粒子数算子](/wiki/Fock_空间/#粒子数算子)。
产生、湮灭算子分别把粒子数增加、减少 $1$，因此
\[
[N, a^\dagger (f)] = a^\dagger (f),
\qquad
[N, a (f)] = -a (f) .
\]
对单位向量 $e$，$a^\dagger (e) a (e)$ 给出模式 $e$ 的占据数。
在 Fermi 情形中，它是[[正交投影]]，特征值只有 $0$ 和 $1$。

### 与场算子的联系

在 Bose Fock 空间上，相应的场算子写成
\[
\Phi (f) = \frac{a (f) + a^\dagger (f)}{\sqrt{2}} .
\]
它对 $f$ 实线性。由 @prop:relations 得到
\[
[\Phi (f), \Phi (g)]
= \mathrm{i} \operatorname{Im} \langle f, g \rangle I .
\]
相应的 [[Weyl 算子]] $W (f) = \mathrm{e}^{\mathrm{i} \Phi (f)}$ 满足
\[
W (f) W (g)
= \mathrm{e}^{-\mathrm{i} \operatorname{Im} \langle f, g \rangle / 2} W (f + g) .
\]
这些场算子及其指数形式见 [@DerezinskiGerard2022, 第 9.1.1、9.1.2 节]。

若 $K \colon S \to \mathfrak{h}$ 是经典实解空间 $S$ 上的
[单粒子结构](/wiki/单粒子空间/#由经典线性场构造)，相应自由场算子为
\[
\Phi_K (u) = a (K u) + a^\dagger (K u) = \sqrt{2} \, \Phi (K u),
\qquad u \in S .
\]

### 对称性与自由动力学

设 $U$ 是单粒子空间上的[[酉映射]]，
其[[二次量子化]] $\Gamma_\pm (U)$ 满足
\[
\begin{aligned}
  \Gamma_\pm (U) a^\dagger (f) \Gamma_\pm (U)^{-1} &= a^\dagger (U f), \\
  \Gamma_\pm (U) a (f) \Gamma_\pm (U)^{-1} &= a (U f) .
\end{aligned}
\]
这说明单粒子对称性如何作用于产生、湮灭算子。
上述协变关系见 [@DerezinskiGerard2022, 命题 3.53]。

若 $h$ 是单粒子自伴能量算子，取 $U (t) = \mathrm{e}^{-\mathrm{i} t h / \hbar}$，
便得到自由多粒子系统的时间演化
\[
\Gamma_\pm (U (t)) = \mathrm{e}^{-\mathrm{i} t H / \hbar},
\qquad H = d\Gamma (h) .
\]
当 $h f = \varepsilon f$ 时，产生 $f$ 模式的粒子使能量增加 $\varepsilon$。
这一指数关系见 [@DerezinskiGerard2022, 第 3.2.2、3.3.3 节]。
有[[相互作用]]时，Hamilton 算子不必具有 $d\Gamma (h)$ 的形式，
也未必保持上述自由模式的粒子数。

## 参考文献*

```bibliography
DerezinskiGerard2022:
  type: book
  author: [Jan Dereziński, Christian Gérard]
  title: Mathematics of Quantization and Quantum Fields
  year: 2022
  publisher: Cambridge University Press
  series: Cambridge Monographs on Mathematical Physics
  doi: '10.1017/9781009290876'
  note: 2013 年初版的开放获取再版。第 3.4.2 节讨论产生、湮灭算子及其交换关系，第 9.1.1、9.1.2 节讨论 Bose 场算子和 Weyl 算子。

Tong:
  type: preprint
  author: David Tong
  title: Quantum Field Theory
  url: 'https://davidtong.org/teaching/quantum-field-theory/qfthtml/qfthtml.html'
  note: 第 2.4.1 节讨论动量态归一化，第 5.2 节讨论带自旋指标的 Fermi 产生、湮灭算子。
```

```terms
产生算子:
  en: creation operator
湮灭算子:
  en: annihilation operator
粒子数算子:
  en: number operator
占据数:
  en: occupation number
正则交换关系:
  en: canonical commutation relations
正则反交换关系:
  en: canonical anticommutation relations
```
