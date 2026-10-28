---
title: Lagrange 子流形
categories: [辛几何]
navboxes: [辛几何]
---

<problems>
- “实射影空间”一节中的 $\rho_{\mathrm{FS}}$ 没有定义。
- “Floer 同调”“Donaldson 范畴与 Fukaya 范畴”各节需要扩充。
</problems>

在[[辛几何]]中，
**Lagrange 子流形**是[[辛流形]]的一类特殊的[[子流形]]，
其维数恰为原来辛流形的一半，且辛形式在该子流形上的限制为 $0$。
Lagrange 子流形也是满足后一条件的子流形中维数最大的。

例如，考虑 [[Euclid 空间]] $\mathbb{R}^{2n}$，
记 $(p^1, \dotsc, p^n, q_1, \dotsc, q_n)$ 为其坐标，
并考虑辛形式 $\omega = \sum_i d p^i \wedge d q_i$。
则形如 $\mathbb{R}^n \times \{ (q_1, \dotsc, q_n) \} \subset \mathbb{R}^{2n}$
的子流形都是 Lagrange 子流形。
并且，一般辛流形中的 Lagrange 子流形在局部上皆有如此形式，
这是 [[Darboux 定理]]的推论。

## 定义

::: definition
设 $(X, \omega)$ 为 $2n$ 维[[辛流形]]。
称[[子流形]] $i \colon L \hookrightarrow X$ 为 **Lagrange 子流形**，
若满足以下等价条件之一：

- 每点 $x \in L$ 处[[切空间]]
  $\mathrm{T}_x L \subset \mathrm{T}_x X$
  都是 [[Lagrange 子空间]]。

- $\dim L = n$，并且 $L$ 是**迷向子流形**，
  即满足 $i^* \omega = 0$。
:::

Lagrange 子流形也是维数极大的迷向子流形。

## 例子

### 余切丛的零截面

对任意光滑流形$L$，在其余切丛上取[[辛流形|典范辛形式]]$(M,-d\lambda)$，
则零截面$L_0\subset T^*L$是一个Lagrange子流形。
事实上，下方的Lagrange邻域定理告诉我们，
反过来讲每一个Lagrange子流形在某个邻域上都可以被看成余切丛的零截面。

### 实射影空间

取复射影空间上的[[Fubini–Study 形式]]
$(\mathbb{C}\mathrm{P}^n,\omega_{\mathrm{FS}})$。有一个实射影空间的自然嵌入
\[
\mathbb{R}\mathrm{P}^n=\{[z_0,\dots,z_n]:z_i\in\mathbb{R}\}
\subset\mathbb{C}\mathrm{P}^n.
\]
令$\pi\colon\mathbb{C}^{n+1}-\{0\}\rightarrow \mathbb{C}\mathrm{P}^n$为商映射，下列图表交换
\[
\begin{tikzcd}
  \mathbb{R}^{n+1}-\{0\}\ar[r, hook]\ar[d, "\pi"] & \mathbb{C}^{n+1}-\{0\}\ar[d, "\pi"]\\
  \mathbb{R}\mathrm{P}^n\ar[r,hook]&\mathbb{C}\mathrm{P}^n
\end{tikzcd}
\]
由于$\rho_{\mathrm{FS}}$限制在$T(\mathbb{R}^{n+1}-\{0\})$上为$0$，
而$\rho_{\mathrm{FS}}=\pi^*\omega_{\mathrm{FS}}$，
于是$\omega_{\mathrm{FS}}$限制在$T\mathbb{R}\mathrm{P}^n$上为$0$，
这是一个Lagrange子流形。

### Clifford 环面

仍然记$\pi\colon\mathbb{C}^{n+1}-\{0\}\rightarrow \mathbb{C}\mathrm{P}^n$为商映射，
取环面$T^{n+1}\subset\mathbb{C}^{n+1}-\{0\}$，
类似于上方的讨论，
它的像$\pi(T^{n+1})\subset\mathbb{C}\mathrm{P}^n$也是Lagrange子流形（仍然取Fubini–Study形式）。

## 性质

### Lagrange 邻域

上方的例子中，余切丛的零截面是结构非常简单又自然的，而且余切丛上的辛形式还是恰当的，
那么如果能将问题转化到余切丛上，相关的讨论就会容易许多。
类似于 [[Darboux 定理]]，对于 Lagrange 子流形，
它的邻域也有一个典范的用余切丛的描述。

设$L\subset (M,\omega)$是紧的 Lagrange 子流形，构造邻域的一个好办法是找出管状邻域，
而相容近复结构又可以给出自然的 [[Riemann 度量]]。于是
取$J$为$M$上的相容[[辛流形|近复结构]]，$g$为诱导的 Riemann 度量。重要的观察是
\[
g(v,Ju)=\omega(v,J^2u)=\omega(u,v)=0,\quad u,v\in T_pL,
\]
于是法丛$\nu L=JTL$。另一方面，$g$又可以给出丛同构
\[
\Phi\colon T^*M\rightarrow TM,\quad g(\Phi(\theta),X)=\theta(X),
\]
则可以考虑管状邻域
\[
\theta_p\mapsto \exp_p(J_p\Phi_p(\theta_p)).
\]
验证条件使用 [[辛同胚|Moser 同痕]]，有以下结果：

::: theorem [Weinstein 邻域定理]
设$L\subset (M,\omega)$为紧Lagrange子流形，$L_0\subset T^*L$为零截面，
则存在$L$的邻域$\mathcal{N}(L)$，$L_0$的邻域$\mathcal{N}(L_0)$以及[[辛同胚]]
\[
\psi\colon\mathcal{N}(L)\rightarrow\mathcal{N}(L_0),
\]
其中$T^*L$上取典范辛形式$-d\lambda$。
:::

### 恰当 Lagrange 嵌入

在恰当辛流形上，辛形式可以对 Lagrange 子流形做出进一步限制，这让它能够被一个“生成函数”所描述。

考虑更为特殊的情况，设有恰当辛流形$(M,-d\lambda)$，
一个Lagrange嵌入$\iota\colon L\hookrightarrow M$称作$\lambda$-恰当的，如果
\[
\iota^*\lambda=dS
\]
是恰当形式，此时函数$S$称作它的$\lambda$-生成函数。

::: remark
虽然恰当辛流形的辛形式是确定的，但是它被表示为$-d\lambda$的形式是不唯一的，
因此Lagrange嵌入关于某个$\lambda$恰当
并不能说明它关于所有这样的$\lambda$都恰当。
:::

一个典型的恰当Lagrange嵌入的例子如下。对于微分同胚$\psi\colon M\rightarrow M$，可以考虑其图像
\[
\mathit{gr}_\psi\colon M\rightarrow M\times M,\quad p\mapsto(p,\psi(p)).
\]
当$M$上配备辛形式$\omega$时，$M\times M$上有自然的辛形式$(-\omega)\oplus\omega$。
于是按照定义，$\psi$是辛同胚当且仅当$\mathit{gr}_\psi$是Lagrange嵌入。
特别地，如果$\omega=-d\lambda$恰当，则可以找到$\alpha\in\Omega^1(M\times M)$使得
\[
\alpha|_{\Delta}=0,\quad (-\omega)\oplus\omega=-d\alpha.
\]
一个自然的问题是：[[辛同胚|Hamilton同胚]]的图像是否恰当？

::: lemma
设$(M,-d\lambda)$为恰当辛流形，则$\psi_t\colon M\rightarrow M$
是[[辛同胚|Hamilton同痕]]当且仅当存在光滑的一族$F_t$使得
\[
\psi_t^*\lambda-\lambda=dF_t.
\]
特别地，如果$\psi_t$为Hamilton向量场$X_{t}$生成的流，
$H_t$为对应的含时Hamilton函数，则可以取
\[
F_t=\int_0^t(\lambda(X_s)+H_s)\circ\psi_sds.
\]
:::

::: corollary
如果$\iota\colon L\hookrightarrow M$是恰当Lagrange嵌入，
则对任意Hamilton同胚$\psi\colon M\rightarrow M$，
$\psi\circ\iota$也是恰当Lagrange嵌入，特别地，$\mathit{gr}_\psi$是恰当的。
:::

::: proof
直接计算
\[
(\psi\circ\iota)^*\lambda
=\iota^*(\psi^*\lambda-\lambda)+\iota^*\lambda
=\iota^*dF+dS=d(F\circ\iota+S).
\]
特别地，Hamilton同胚的图像可以表示为对角线映射与第二个分量上同胚的复合，
由定义，这是一个恰当Lagrange嵌入和一个Hamilton同胚的复合，因而也是恰当的。
:::

在一般的情况下，即使$(M,\omega)$不是恰当的，由Lagrange邻域定理，
对于离$L$充分近（因为在充分近的邻域上可以写为余切丛上的典范辛形式，这是恰当的）
的Hamilton同胚，仍然可以用上方的方式进行讨论。

## Lagrange 相交理论

### Floer 同调

### Donaldson 范畴与 Fukaya 范畴

```terms
Lagrange 子流形:
  en: Lagrangian submanifold
```
