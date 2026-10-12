---
title: '$\alpha$-同构'
aliases: [Alpha-同构]
categories: [模型论]
notices:
  - name: 问题
    items:
      - “性质”一节第一个命题中的蕴含 $\mathcal{M}\cong_{\alpha}\mathcal{N}\Rightarrow\mathcal{M}\cong_{\omega}\mathcal{N}$ 似乎需要假设 $\alpha\ge\omega$。
---

在[[模型论]]里，
**$\alpha$-同构**衡量的是两个[[模型]]间最多能有多少部分同构。
一般来说，
\[
\mathcal{M}\cong\mathcal{N}\Rightarrow
\mathcal{M}\cong_{\infty}\mathcal{N}\Rightarrow
\mathcal{M}\cong_{\alpha}\mathcal{N}\Rightarrow
\mathcal{M}\cong_{\omega}\mathcal{N}\Rightarrow
\mathcal{M}\equiv\mathcal{N}.
\]
而**往返法**指的是用 $\alpha$-同构来证明模型之间的等价/同构的方法。

## 定义

在如下定义里，
$A$ 和 $B$ 都是有限集。

::: definition [$0$-同构]
设[[一阶语言]] $\mathcal{L}$ 的两个模型 $\mathcal{M}$ 与 $\mathcal{N}$ 以及
$f\colon\mathcal{M}\supset A\rightarrow B\subset\mathcal{N}$
满足 $\langle A\rangle\cong_{\mathcal{L}} \langle B\rangle$，
则称 $A$ 和 $B$ 是 **$0$-同构**的，
也就是说，
它们满足相同的不含量词的公式，
记作 $A\cong_0 B$。
如果 $\emptyset_{\mathcal{M}}\cong_0\emptyset_{\mathcal{N}}$，
则称模型 $\mathcal{M}$ 与 $\mathcal{N}$ 是 **$0$-同构**的，
记作 $\mathcal{M}\cong_0\mathcal{N}$。
:::

然后递归地定义：

::: definition [$\alpha$-同构]
设 $\alpha$ 为[[序数]]。
如果存在 $A\subset\mathcal{M}$ 与 $B\subset\mathcal{N}$ 的一个 $\alpha$-同构，
满足：

- 对任意 $x\in\mathcal{M}$，
  存在 $y\in\mathcal{N}$，
  $A\cup\{x\}\cong_{\alpha}B\cup\{y\}$。

- 对任意 $y\in\mathcal{N}$，
  存在 $x\in\mathcal{M}$，
  $B\cup\{y\}\cong_{\alpha}A\cup\{x\}$。

且上述的 $\alpha$-同构与 $A$、
$B$ 之间的 $\alpha$-同构相容，
则称 $A$ 与 $B$ 是 **($\alpha+1$)-同构**的，
记作 $A\cong_{\alpha+1}B$。

对于[[极限序数]] $\alpha$，
$A\cong_{\alpha}B$ 定义成对于任何 $\beta<\alpha$，
$A\cong_{\beta}B$。

如果 $\emptyset_{\mathcal{M}}\cong_\alpha\emptyset_{\mathcal{N}}$，
则称模型 $\mathcal{M}$ 与 $\mathcal{N}$ 是 **$\alpha$-同构**的，
记作 $\mathcal{M}\cong_\alpha\mathcal{N}$。
:::

::: definition [$\infty$-同构]
如果存在一族 $\mathcal{M}$ 的子集 与 $\mathcal{N}$ 的子集之间的 $0$-同构 $\Sigma$，
使得 $(\emptyset_{\mathcal{M}}\cong_0\emptyset_{\mathcal{N}})\in\Sigma$，
且满足如下的**往返条件**：

- （往）对任意 $(\mathcal{M}\supset A\cong_0 B\subset\mathcal{N})\in\Sigma$，
  任意 $x\in\mathcal{M}$，
  存在 $y\in\mathcal{N}$ 使得 $A\cup\{x\}\cong_0 B\cup\{y\}$。
  且所有的这些 $0$-同构的扩张都在 $\Sigma$ 中。

- （返）对任意 $(\mathcal{M}\supset A\cong_0 B\subset\mathcal{N})\in\Sigma$，
  任意 $y\in\mathcal{N}$，
  存在 $x\in\mathcal{M}$ 使得 $B\cup\{y\}\cong_0 A\cup\{x\}$。
  且所有的这些 $0$-同构的扩张都在 $\Sigma$ 中。

则称 $\mathcal{M}$ 与 $\mathcal{N}$ 是 **$\infty$-同构**的，
记为 $\mathcal{M}\cong_{\infty}\mathcal{N}$。
:::

::: remark
容易看出，
$\mathcal{M}$ 与 $\mathcal{N}$ 是 **$\infty$-同构**的，
等价于对足够大的 $\alpha$，
$\mathcal{M}$ 与 $\mathcal{N}$ 是 **$\alpha$-同构**的。
:::

## 性质

::: proposition
有如下蕴含关系：
\[
\mathcal{M}\cong\mathcal{N}\Rightarrow
\mathcal{M}\cong_{\infty}\mathcal{N}\Rightarrow
\mathcal{M}\cong_{\alpha}\mathcal{N}\Rightarrow
\mathcal{M}\cong_{\omega}\mathcal{N}\Rightarrow
\mathcal{M}\equiv\mathcal{N}.
\]
其中 $\mathcal{M}\cong\mathcal{N}$、
$\mathcal{M}\equiv\mathcal{N}$ 分别代表模型的[[同构(模型)|同构]]与[[模型等价|等价]]。
:::

::: proof
前四个显然。
下证最后一个。
$\mathcal{M}\cong_{\omega}\mathcal{N}$ 意味着任意 $n$，
$\mathcal{M}\cong_{n}\mathcal{N}$，
即 $\emptyset_{\mathcal{M}}\cong_{n}\emptyset_{\mathcal{N}}$。
下归纳证明任意 $n$，
如果 $A\cong_nB$
则其 $n$ 阶[[型]]相同，
即 $\operatorname{tp}_n(A)=\operatorname{tp}_n(B)$。

- $n=0$。
  即它们满足相同的不含量词，
  参数在 $A$、
  $B$ 中的公式，
  这由 $A\cong_{0}B$ 推出。

- 假设 $n$ 时成立。
  任意 $\varphi\in\operatorname{tp}_{n+1}(A)$
  可以等价于写成 $\exists x\chi(x,a)$，
  $\chi\in\operatorname{tp}_n(A)$。
  $\mathcal{M}\models\exists x\chi(x)$ 给出了 $a'\in\mathcal{M}$，
  $\mathcal{M}\models\chi(a',a)$。
  由 $A\cong_{n+1}B$，
  知存在 $b'\in\mathcal{N}$ 使 $A\cup\{a'\}\cong_n B\cup\{b'\}$，
  从而 $\operatorname{tp}_n(A\cup\{a'\})=\operatorname{tp}_n(B\cup\{b'\})$。
  故 $\mathcal{N}\models\chi(b',b)$，
  从而 $\varphi\in\operatorname{tp}_{n+1}(B)$。
  反之亦然。

因此 $\emptyset_{\mathcal{M}}\cong_{n}\emptyset_{\mathcal{N}}$ 意味着
$\operatorname{tp}_n(\emptyset_{\mathcal{M}})=\operatorname{tp}_n(\emptyset_{\mathcal{N}})$，
但是
\[
\operatorname{Th}(\mathcal{M})=\bigcup_n\operatorname{tp}_n(\emptyset_{\mathcal{M}}),
\]
所以 $\operatorname{Th}(\mathcal{M})=\operatorname{Th}(\mathcal{N})$，
即 $\mathcal{M}\equiv\mathcal{N}$。
:::

::: proposition {@denombrable}
如果 $\mathcal{M}$ 与 $\mathcal{N}$ 都是[[可数]]模型，
那么
\[
\mathcal{M}\cong_{\infty}\mathcal{N}\Rightarrow
\mathcal{M}\cong\mathcal{N}.
\]
:::

::: proof
设 $\mathcal{M}=\{a_n\}$，
$\mathcal{N}=\{b_n\}$。
由 $(\emptyset_{\mathcal{M}}\cong_0\emptyset_{\mathcal{N}})\in\Sigma$
知存在 $b_{f(1)}$ 使得 $(a_1\cong_0b_{f(1)})\in\Sigma$，
进而存在 $a_{g(1)}$ 使得 $(\{a_1,a_{g(1)}\}\cong_0\{b_1,b_{f(1)}\})\in\Sigma$。
再依次添加 $a_2$、
$b_2$、
$\cdots$（如果已经在像集里就不用添加），
即可穷尽 $\mathcal{M}$ 与 $\mathcal{N}$，
即存在整个 $\mathcal{M}$ 到整个 $\mathcal{N}$ 上的 $0$-同构，
故 $\mathcal{M}\cong\mathcal{N}$。
:::

## 例子

### 无界稠密全序理论

[[Georg Cantor|Cantor]]最先证明如下结果：

::: theorem [Cantor]
所有可数无界稠密全序集都同构于 $(\mathbb{Q},<)$。
:::

以 $\alpha$-同构的观点看，
这个定理是因为：

::: proposition
理论 $\mathsf{DLO}$ 的任两个模型都是 $\infty$-同构的，
因为所有的 $0$-同构 $A\cong_0 B$ 都是 $1$-同构。
:::

再由 @denombrable 得到它们同构。

### Ehrenfeucht–Fraïssé 博弈

<see>[[Ehrenfeucht–Fraïssé 博弈]]</see>
