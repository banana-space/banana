---
title: Fock 空间
categories: [自由场论]
navboxes: [自由场论]
---

在[[量子场论]]和[[量子多体理论]]中，**Fock 空间**
是同时描述不同粒子数的态的 [[Hilbert 空间]]。
[[自由场]]的标准[[真空]]表示以 Fock 空间为[[态空间|量子态空间]]。
它由[[单粒子空间]]的各次张量幂构造：
对相同的 [[Bose 子]]取对称张量，对相同的 [[Fermi 子]]取反对称张量，
再把所有粒子数的空间作直和。
零粒子扇区包含真空，[[产生、湮灭算子]]则连接相邻的粒子数扇区。

例如，自由实 [[Klein–Gordon 场]]的态空间
是正能量[[质量壳]]上的单粒子空间所生成的 Bose Fock 空间。

Fock 构造自然带有粒子数分解、真空和产生、湮灭算子。
描述具体自由场时，还需给出单粒子[[动力学]]、[[时空对称性]]作用，
以及场算子与单粒子态之间的对应。

某些[[相互作用]]模型仍可在 Fock 空间上定义，
此时 [[Hamilton 算符|Hamilton 算子]]含有相互作用项，粒子数未必守恒。
在相互作用场论的散射描述中，Fock 空间还可用于组织渐近的入射、出射多粒子态。
要以这些[[散射态]]得到全部物理态，还需满足[[渐近完备性]]
[@DerezinskiGerard2022, 第 22.2.5、22.3.3 节; @Tong, 第 3.2 节]。

## 定义

设 $\mathfrak{h}$ 是复 Hilbert 空间，[[内积空间|内积]]对第二个变量线性。
记 $\operatorname{Sym}^n \mathfrak{h}$ 和 $\wedge^n \mathfrak{h}$
分别为其第 $n$ 次[[对称代数|对称积]]和[[外代数|外积]]。
这里把它们实现为 Hilbert [[张量积]] $\mathfrak{h}^{\otimes n}$
中的对称张量与反对称张量组成的[[闭线性子空间|闭子空间]]，并继承其内积。
约定 $\operatorname{Sym}^0 \mathfrak{h} = \wedge^0 \mathfrak{h} = \mathbb{C}$。

::: definition [Fock 空间]
以 $\mathfrak{h}$ 为单粒子空间的 **Bose Fock 空间**和
**Fermi Fock 空间**分别为
\[
\Gamma_+ (\mathfrak{h})
= \bigoplus_{n = 0}^\infty \operatorname{Sym}^n \mathfrak{h},
\qquad
\Gamma_- (\mathfrak{h})
= \bigoplus_{n = 0}^\infty \wedge^n \mathfrak{h} .
\]
这里的直和是 Hilbert [[直和]]：其元素是序列
$\Psi = (\Psi_0, \Psi_1, \dotsc)$，满足
\[
\| \Psi \|^2 = \sum_{n = 0}^\infty \| \Psi_n \|^2 < \infty .
\]
其中 $\Psi_n$ 属于相应的第 $n$ 次对称积或外积。
第 $n$ 个直和项称为 **$n$ 粒子扇区**。
向量
\[
\Omega = (1, 0, 0, \dotsc)
\]
称为**真空向量**。
:::

交换两个粒子时，对称张量不变，反对称张量改变符号，
分别对应 Bose 统计和 Fermi 统计。
零粒子扇区是一维的，即 $\mathbb{C} \Omega$。

粒子数确定为 $n$ 的归一化态完全位于第 $n$ 个扇区。
一般态可以同时有多个非零分量；
对归一化向量 $\Psi$，测得粒子数为 $n$ 的概率是 $\| \Psi_n \|^2$，
由此得到粒子数的[[概率分布]]。

一些文献用 $\Gamma_s$、$\Gamma_a$ 或
$\mathcal{F}_s$、$\mathcal{F}_a$ 表示这两个空间。
上述构造见 [@DerezinskiGerard2022, 第 3.3.1 节]。

## 例子

::: example [一个模式]
设 $\mathfrak{h} = \mathbb{C} e$，$\| e \| = 1$。
Bose 情形每个粒子数扇区都是一维的，因而
\[
\Gamma_+ (\mathbb{C}) \simeq \ell^2 (\{ 0, 1, 2, \dotsc \}) .
\]
其标准正交基为 $|n\rangle = e^{\otimes n}$，并取 $|0\rangle = \Omega$。
这正是[[量子谐振子]]的粒子数基。

Fermi 情形有 $e \wedge e = 0$，因此
\[
\Gamma_- (\mathbb{C}) = \mathbb{C} \Omega \oplus \mathbb{C} e .
\]
一个模式只能有零个或一个 Fermi 子。
:::

::: example [有限多个模式]
若 $\dim \mathfrak{h} = d \geq 1$，则
\[
\dim \operatorname{Sym}^n \mathfrak{h} = \binom{d + n - 1}{n},
\qquad
\dim \wedge^n \mathfrak{h} = \binom{d}{n} .
\]
其中 $n > d$ 时第二个维数为零。
因此 Fermi Fock 空间的维数是 $2^d$，
而非零单粒子空间的 Bose Fock 空间总是无穷维的。
:::

例如，$\Gamma_+ (\mathbb{C})$ 与 $\Gamma_+ (\mathbb{C}^2)$
作为 Hilbert 空间同构，但在 $n \geq 1$ 时，
它们的 $n$ 粒子扇区的维数分别为 $1$ 与 $n + 1$。
因此，它们之间不存在保持粒子数分解的[[酉映射|酉同构]]。
这说明粒子数分解是 Fock 空间中需要保留的结构。

::: example [自由实标量场]
在 $3 + 1$ 维 [[Minkowski 空间]]中，取[[质量]] $m > 0$，
$\omega_{\boldsymbol{p}} = \sqrt{|\boldsymbol{p}|^2 + m^2}$。
自由实 Klein–Gordon 场的标准态空间为
\[
\Gamma_+ (\mathfrak{h}_m),
\qquad
\mathfrak{h}_m
= L^2 \left( \mathbb{R}^3,
\frac{d^3 \boldsymbol{p}}{(2 \pi)^3 \, 2 \omega_{\boldsymbol{p}}} \right) .
\]
第 $n$ 个扇区可实现为对 $n$ 个[[动量]]变量对称的函数，
其平方可积性按上述动量测度的 $n$ 重乘积定义。
自由[[能量]]算子在该扇区中是[[乘法算子]]
\[
(H \Psi_n) (\boldsymbol{p}_1, \dotsc, \boldsymbol{p}_n)
= \left( \sum_{j = 1}^n \omega_{\boldsymbol{p}_j} \right)
\Psi_n (\boldsymbol{p}_1, \dotsc, \boldsymbol{p}_n) .
\]
它把每个粒子的能量相加；这里选择真空能量为零，即 $H \Omega = 0$。
:::

多粒子态的对称性及自由标量场的粒子解释可参见
[@Tong, 第 2.4 节]。

## 性质

### 粒子数算子

**粒子数算子** $N$ 是在第 $n$ 个扇区上取值为 $nI$ 的[[自伴算子]]，
其中 $I$ 是恒等算子。
真空扇区是 $\ker N = \mathbb{C} \Omega$，
单粒子扇区是 $\ker (N - 1) \simeq \mathfrak{h}$。
不同粒子数的扇区彼此正交。

### 产生、湮灭算子

[[波函数]] $f \in \mathfrak{h}$ 的产生算子 $a^\dagger (f)$
把一个粒子加入原有态，湮灭算子 $a (f)$ 则移除相应的粒子。
两者分别连接第 $n$ 个扇区与第 $n + 1$、$n - 1$ 个扇区，并满足
\[
a (f) \Omega = 0,
\qquad
a^\dagger (f) \Omega = f .
\]
这里把 $f$ 视为单粒子扇区中的向量。
采用上述内积约定，$a^\dagger (f)$ 对 $f$ 线性，$a (f)$ 对 $f$ 反线性。

设 $e \in \mathfrak{h}$ 是单位向量，
把只占据 $e$ 模式的归一化 $n$ 粒子态记为 $|n\rangle$。
在 Bose 情形，
\[
a (e) |n\rangle = \sqrt{n} \, |n - 1\rangle,
\qquad
a^\dagger (e) |n\rangle = \sqrt{n + 1} \, |n + 1\rangle .
\]
其中 $a (e) |0\rangle = 0$。
若只考虑一个 Fermi 模式，则只有
$|0\rangle = \Omega$、$|1\rangle = e$ 两种占据态。
产生算子把 $|0\rangle$ 变成 $|1\rangle$，
湮灭算子把 $|1\rangle$ 变回 $|0\rangle$，而
\[
a^\dagger (e) |1\rangle = 0 .
\]
这体现了同一单粒子态不能被两个相同 Fermi 子占据。

多模式中的 Bose 算子满足[[正则对易关系]]，
Fermi 算子满足相应的[[正则反对易关系|反对易关系]]。
它们的构造见[[产生、湮灭算子]]及 [@DerezinskiGerard2022, 第 3.4 节]。

在相应的自由场表示中，Fock 真空给出典型的[[准自由态]]，
其高阶场关联函数可由二点函数求出
[@DerezinskiGerard2022, 第 17 章]。

### 二次量子化

::: definition [酉映射的二次量子化]
设 $U \colon \mathfrak{h}_1 \to \mathfrak{h}_2$ 是复 Hilbert 空间之间的[[酉映射]]。
其在 Bose 或 Fermi Fock 空间上的 **[[二次量子化]]** 分别为酉映射
\[
\Gamma_+ (U) = \bigoplus_{n = 0}^\infty \operatorname{Sym}^n U,
\qquad
\Gamma_- (U) = \bigoplus_{n = 0}^\infty \wedge^n U .
\]
:::

这里 $\operatorname{Sym}^n U$ 和 $\wedge^n U$
是 $U^{\otimes n}$ 在相应对称积或外积上的限制，零次作用取为恒等。
这个构造保持真空及粒子数。对可复合的酉映射 $U_1$、$U_2$，有
\[
\Gamma_\pm (U_2 U_1) = \Gamma_\pm (U_2) \Gamma_\pm (U_1),
\qquad
\Gamma_\pm (I) = I .
\]
这给出了 Fock 构造对酉映射的[[函子|函子性]]。

::: definition [自伴算子的二次量子化]
设 $b$ 是单粒子空间上的自伴算子。
由[[强连续酉群]] $t \mapsto \mathrm{e}^{-\mathrm{i} t b}$ 得到 Fock 空间上的
强连续酉群 $t \mapsto \Gamma_\pm (\mathrm{e}^{-\mathrm{i} t b})$。
由 [[Stone 定理]]，该酉群有唯一的自伴生成元，
记为 $d\Gamma (b)$，称为 $b$ 的**二次量子化**，即
\[
\Gamma_\pm (\mathrm{e}^{-\mathrm{i} t b})
= \mathrm{e}^{-\mathrm{i} t \, d\Gamma (b)} .
\]
:::

在第 $n$ 个扇区上，$d\Gamma (b)$ 对每个粒子分别作用 $b$，再将结果相加：
\[
b \otimes I \otimes \cdots \otimes I
+ \cdots +
I \otimes \cdots \otimes I \otimes b,
\]
其中算子限制到相应的对称积或外积；在零粒子扇区上为零。
因此，$d\Gamma (b)$ 表示各粒子的相应物理量之和，特别地，
\[
N = d\Gamma (I) .
\]
取 $b$ 为单粒子能量算子，便得到各粒子能量相加的自由 Hamilton 算子。
单粒子动力学和时空对称性也由 $\Gamma_\pm$ 扩张到自由多粒子系统。
这两个构造见 [@DerezinskiGerard2022, 第 3.3.3 节]。

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
  note: 2013 年初版的开放获取再版，第 3.3、3.4 节及第 17、22 章。

Tong:
  type: preprint
  author: David Tong
  title: Quantum Field Theory
  url: 'https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/qfthtml.html'
  note: 第 2 节讨论自由场，第 3.2 节讨论散射态。
```

```terms
Fock 空间:
  en: Fock space
Bose Fock 空间:
  en: bosonic Fock space
Fermi Fock 空间:
  en: fermionic Fock space
粒子数扇区:
  en: particle-number sector
真空向量:
  en: vacuum vector
粒子数算子:
  en: number operator
二次量子化:
  en: second quantization
```
