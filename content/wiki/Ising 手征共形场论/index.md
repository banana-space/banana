---
title: Ising 手征共形场论
categories: [共形场论]
---

**Ising 手征共形场论**是中心荷 $c=1/2$ 的
[[Virasoro代数|Virasoro]] [[极小模型]]的手征理论。
其[[顶点算子代数]]为 $L(\tfrac12,0)$。

四个自旋场的[[共形块]]有显式的代数函数表达式，
可用于检验[[交织算子]]的权关系，并计算[[算子乘积展开]]的系数。

## 模与初级场

记 $L(c,h)$ 为中心荷 $c$、最高权 $h$ 的不可约
[[Virasoro代数|Virasoro 最高权模]]。统一记
\[
M_h=L(\tfrac12,h),\qquad h\in\{0,\tfrac1{16},\tfrac12\}.
\]
其中 $M_0$ 是顶点算子代数自身的模。
$M_{1/16}$ 和 $M_{1/2}$ 的最高权向量分别记为 $\sigma$ 和 $\psi$。
真空、自旋与费米子三个手征初级态的权分别为 $0$、$1/16$ 和 $1/2$。
场 $\psi(z)$ 为手征 Majorana 费米子场。
下文的 $\sigma(z)$ 表示相应通道中的自旋交织算子，
其输入模和输出模由通道指定。具体计算中保留通道下标及归一化约定。

## 四自旋共形块

取 $M_{1/16}$ 的最高权向量 $\sigma$，其权为 $h_\sigma=1/16$。
将四个插入点置于 $\infty,1,z,0$，中间模为 $M_p$ 的共形块由矩阵元
\[
\mathcal F_p(z)=\langle\sigma',
  \widetilde{\mathcal Y}_p(\sigma,1)
  \mathcal Y_p(\sigma,z)\sigma\rangle
\]
给出。这里 $p=0,1/2$，两个交织算子的类型依次为
$\binom{M_{1/16}}{M_{1/16}\,M_p}$ 和 $\binom{M_p}{M_{1/16}\,M_{1/16}}$，
$\sigma'$ 在 $M_{1/16}$ 的最高权空间上取值为 $\langle\sigma',\sigma\rangle=1$，
并在其余权空间上为零。矩阵元先按 $z$ 展开，再取其收敛后的解析函数。

::: proposition [四自旋共形块]
将两个通道的首项系数均归一化为 $1$，则
\[
\begin{aligned}
  \mathcal F_0(z)
    &=\frac{\sqrt{(1+\sqrt{1-z})/2}}{[z(1-z)]^{1/8}},\\
  \mathcal F_{1/2}(z)
    &=\frac{\sqrt{2(1-\sqrt{1-z})}}{[z(1-z)]^{1/8}}.
\end{aligned}
\]
先在 $0<z<1$ 上取正实根，再作解析延拓。
:::

::: proof
这些函数可由 $M_{1/16}$ 中的零向量关系
$(L_{-2}-\tfrac43L_{-1}^2)\sigma=0$ 所给出的 [[BPZ 方程]]求得。
四个插入点固定后，方程为
\[
\frac43\mathcal F''(z)
+\frac{1-2z}{z(1-z)}\mathcal F'(z)
-\frac{1}{16z^2(1-z)^2}\mathcal F(z)=0.
\]
直接代入可验证上述两个函数满足方程。
在 $z=0$ 处令 $\mathcal F(z)=z^\alpha(1+O(z))$，得指标方程
\[
\frac43\alpha(\alpha-1)+\alpha-\frac1{16}=0.
\]
两根为 $-1/8$ 和 $3/8$，分别等于 $p-2h_\sigma$。
两根之差为非整数，每个指数对应的幂级数解由首项唯一确定。
上述显式函数的首项均已归一化为 $1$，因而分别给出所求共形块。
这与[[交织算子|权关系]]所预测的两种指数一致。
方程和显式共形块可参见 [@ArdonneSierra10, 第 II 节]。
:::

在原点附近展开，得到
\[
\begin{aligned}
  \mathcal F_0(z)
    &=z^{-1/8}\left(1+\frac{z^2}{64}
      +\frac{z^3}{64}+O(z^4)\right),\\
  \mathcal F_{1/2}(z)
    &=z^{3/8}\left(1+\frac z4
      +\frac{9z^2}{64}+O(z^3)\right).
\end{aligned}
\]
括号中的幂级数在 $|z|<1$ 收敛。
围绕 $0$ 逆时针延拓一周，两个共形块分别乘以
$e^{-\pi i/4}$ 和 $e^{3\pi i/4}$。
这也实现了[[复数次幂形式级数]]中的形式代入 $z\mapsto e^{2\pi i}z$。

## 后裔系数

沿用上述记号，将 $M_p$ 的最高权向量记为 $v_p$，
其中 $v_0=\mathbf1$，$v_{1/2}=\psi$。
将交织算子归一化为
\[
\mathcal Y_p(\sigma,z)\sigma
  =z^{p-1/8}\sum_{N\geq0}v_{p,N}z^N,
\qquad v_{p,0}=v_p.
\]

::: proposition [后裔系数的递推约束]
对整数 $m\geq1$ 和 $N\geq0$，有
\[
L_m v_{p,N}
  =\bigl(p+N-m+(m-1)h_\sigma\bigr)v_{p,N-m},
\]
其中负指标的系数取零。
:::

::: proof
由[[交织算子|模式交换关系]]与 $L_m\sigma=0$，得
\[
L_m\mathcal Y_p(\sigma,z)\sigma
  =z^m\left(z\partial_z+(m+1)h_\sigma\right)
    \mathcal Y_p(\sigma,z)\sigma.
\]
比较 $z^{p-1/8+N}$ 的系数，即得结论。
:::

由真空条件 $L_{-1}\mathbf1=0$，真空模的一级空间为零。
二级和三级空间分别由 $L_{-2}\mathbf1$ 和 $L_{-3}\mathbf1$ 张成。
三级后裔 $L_{-1}L_{-2}\mathbf1$ 也属于后一个张成空间，因为
\[
L_{-1}L_{-2}\mathbf1
  =[L_{-1},L_{-2}]\mathbf1+L_{-2}L_{-1}\mathbf1
  =L_{-3}\mathbf1.
\]
其余三级后裔 $L_{-2}L_{-1}\mathbf1$ 和 $L_{-1}^3\mathbf1$ 均为零。

设 $v_{0,2}=aL_{-2}\mathbf1$，$v_{0,3}=bL_{-3}\mathbf1$。
由 $L_2L_{-2}\mathbf1=(c/2)\mathbf1$ 及
$L_1L_{-3}\mathbf1=4L_{-2}\mathbf1$，得
\[
a\frac c2=h_\sigma,\qquad 4b=2a.
\]
代入 $c=1/2$，得到
\[
\mathcal Y_0(\sigma,z)\sigma
  =z^{-1/8}\left(\mathbf1+\frac{z^2}{4}L_{-2}\mathbf1
    +\frac{z^3}{8}L_{-3}\mathbf1+O(z^4)\right).
\]

在 $M_{1/2}$ 中，二级零向量关系为
$(L_{-2}-\tfrac34L_{-1}^2)\psi=0$。
设 $v_{1/2,1}=aL_{-1}\psi$，$v_{1/2,2}=bL_{-1}^2\psi$。
递推式取 $m=1$ 分别给出 $a=1/2$ 与 $4b=3a/2$，故
\[
\mathcal Y_{1/2}(\sigma,z)\sigma
  =z^{3/8}\left(\psi+\frac z2L_{-1}\psi
    +\frac{3z^2}{16}L_{-1}^2\psi+O(z^3)\right).
\]
这里 $O(z^k)$ 表示括号内从第 $k$ 级起的后裔项。

共形块的系数还包含另一个三点矩阵元。
真空通道中，Ward 恒等式给出
$\langle\sigma(\infty)\sigma(1)T(0)\rangle=h_\sigma$，
其中 $T$ 为共形态 $L_{-2}\mathbf1$ 对应的场。
因而共形块中 $z^2$ 的系数为 $\tfrac14h_\sigma=1/64$。
另一个通道将三点函数归一化为
$\langle\sigma(\infty)\sigma(1)\psi(w)\rangle=(1-w)^{-1/2}$。
在 $w=0$ 处取一、二阶导数，分别得到 $1/2$ 和 $3/4$。
与上述后裔系数相乘，得 $1/4$ 和 $9/64$，
与显式共形块的展开一致。

## 手征归一化与通道变换

首项归一化便于比较后裔系数。为讨论不同通道之间的变换，
也常对共形块作常数倍的调整。
由上述显式函数在 $0<z<1$ 上直接计算，得
\[
\begin{pmatrix}\mathcal F_0(1-z)\\\mathcal F_{1/2}(1-z)\end{pmatrix}
=\frac1{\sqrt2}
\begin{pmatrix}1&1/2\\2&-1\end{pmatrix}
\begin{pmatrix}\mathcal F_0(z)\\\mathcal F_{1/2}(z)\end{pmatrix}.
\]
这里两侧分别使用 $z\to1$ 与 $z\to0$ 的通道基，
等式按前文的正实分支确定。

::: remark [对称的通道归一化]
保持真空块不变，将另一个块乘以正数 $s$。
变换矩阵的两个非对角元便分别为 $1/(2s\sqrt2)$ 和 $2s/\sqrt2$。
若要求它们相等，则 $s=1/2$。因此取
\[
\mathcal B_0=\mathcal F_0,\qquad
\mathcal B_{1/2}=\tfrac12\mathcal F_{1/2},
\]
可得对称的通道变换
\[
\begin{pmatrix}\mathcal B_0(1-z)\\\mathcal B_{1/2}(1-z)\end{pmatrix}
=\frac1{\sqrt2}
\begin{pmatrix}1&1\\1&-1\end{pmatrix}
\begin{pmatrix}\mathcal B_0(z)\\\mathcal B_{1/2}(z)\end{pmatrix}.
\]
同时 $\mathcal B_{1/2}(z)=\tfrac12z^{3/8}(1+O(z))$。
:::

四点块由两个三点顶点组成，因此这个首项系数是两个顶点系数的乘积。
进一步约定两个顶点系数相等且为正，并取手征二点归一化
\[
\langle\sigma(z)\sigma(0)\rangle=z^{-1/8},\qquad
\langle\psi(z)\psi(0)\rangle=z^{-1},
\]
则每个顶点的系数 $C$ 满足 $C^2=1/2$，从而 $C=1/\sqrt2$。
这给出 [@ArdonneSierra10, 第 II 节式 (7)] 所采用的手征 OPE 约定。
在此约定下，两个通道中的交织算子分别为
\[
\widehat{\mathcal Y}_0=\mathcal Y_0,\qquad
\widehat{\mathcal Y}_{1/2}=\tfrac1{\sqrt2}\mathcal Y_{1/2}.
\]
因此费米子通道的展开为
\[
\widehat{\mathcal Y}_{1/2}(\sigma,z)\sigma
  =\frac{z^{3/8}}{\sqrt2}\left(
    \psi+\frac z2L_{-1}\psi
    +\frac{3z^2}{16}L_{-1}^2\psi+O(z^3)\right).
\]
真空通道沿用前节的展开。
这里 $1/\sqrt2$ 依赖所选的三点顶点归一化。
重新缩放交织算子时，其全部系数按同一比例变化，
后裔项相对于首项的系数保持不变。

## 参考文献

```bibliography
ArdonneSierra10:
  type: preprint
  author: ['Ardonne, Eddy', 'Sierra, Germán']
  title: Chiral correlators of the Ising conformal field theory
  year: 2010
  arxiv: '1008.2863'
```

BPZ 方程、手征 OPE 与共形块的归一化见 [@ArdonneSierra10, 第 II 节式 (5)、(7)、(10)、(11)]。
本文的 $\mathcal F_{1/2}$ 取首项系数为 $1$，为该文相应四点块的 $2$ 倍
（按本文的插入点次序及正实分支）。

```terms
Ising 手征共形场论:
  en: chiral Ising conformal field theory
```
