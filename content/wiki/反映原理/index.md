---
title: 反映原理
aliases: [反射原理]
categories: [集合论]
navboxes: [集合论]
---

<problems>
- “高阶反映原理”一节需要扩充。
- “等价性”一节的证明中，全局反映原理强化版本的公式里 $\bigwedge$ 的下标范围 $\mathfrak{i}=1,\dots,m$ 似乎应为 $i=0,\dots,m$；其后“$z\in u$”中的 $u$ 未经定义。
</problems>

**反映原理**，又称**反射原理**，是
[[Zermelo–Fraenkel 集合论]]中的一系列定理，大致说的是
[[von Neumann 宇宙]]的任意一条性质均被某个小模型（即集合）
所反映。也可将反映原理视为 [[Zermelo 集合论]]上的[[公理模式]]，
此时它与[[替换公理模式]]等价。

## 定义

反映原理是一类公理模式的统称，它们均源自以下信念：集合论大全宇宙$\mathbf{V}$是不可描述的，
因此全局真的句子必被实现为一个局部（集合）[[模型]]上的真句子。
例如，最经典版本的反映原理是按以下方式给出的。

::: definition
我们称以下公理模式为经典反映原理：任给一个一阶集合论公式$\varphi(x_1,\dots,x_n)$，
在$\varphi$处的经典反映原理$(Refl)_\varphi^{\mathbf{V}}$意指如下语句：
$$
\forall\alpha\in\mathbf{Ord}\exists\beta\in\mathbf{LimOrd}\forall x_1\dots\forall x_n\in V_\beta(\alpha\in\beta\wedge(\varphi\leftrightarrow\varphi^{V_\beta}))
$$
这里$\varphi^{V_\beta}$是$\varphi$在$V_\beta$上的[[相对化]]，
即将所有量词换为限制于$V_\beta$的有界量词形成的
（视$V_\beta$为常元之后的）$\Delta_0$句子。
:::

如果提取其证明关窍不难得到一个更广义的定义。

::: definition
我们称以下公理模式为类$\mathbf{W}$上的反映原理。
我们首先需要假设由公式$\psi(x,v_1,\dots,v_n)$和参数$v_1,\dots,v_n$
通过$x\in\mathbf{W}\leftrightarrow \psi$所定义的类$\mathbf{W}$满足以下性质：
存在一个公式$\psi(x,\alpha,v_1,\dots,v_n)$满足以下要求，

- $\forall \alpha\in\mathbf{Ord}\exists y(\forall x\in y\forall z\in x(z\in y)\wedge \forall x(x\in y\leftrightarrow \psi))$，
  这一传递集$y$将被我们记为$W_\alpha$；

- $\forall\alpha\in\mathbf{Ord}(W_\alpha\subseteq W_{\alpha+1})$；

- $\forall\alpha\in\mathbf{LimOrd}(W_\alpha=\bigcup_{\beta\in\alpha}W_\beta)$；

- $\forall x(x\in\mathbf{W}\leftrightarrow\exists \alpha\in\mathbf{Ord}(x\in W_\alpha))$。

现在，任给一个一阶集合论公式$\varphi(x_1,\dots,x_n)$，
在$\varphi$处的$\mathbf{W}$上的反映原理$(Refl)_\varphi^{\mathbf{W}}$意指如下语句：
$$
\forall\alpha\in\mathbf{Ord}\exists\beta\in\mathbf{LimOrd}\forall x_1\dots\forall x_n\in W_\beta(\alpha\in\beta\wedge(\varphi^{\mathbf{W}}\leftrightarrow\varphi^{W_\beta}))
$$
:::

如果我们提取单个$V_\alpha$的性质而非整个[[von Neumann 宇宙]]的层级结构，又有以下推广。
首先定义以下性质。

::: definition
我们称集合$x$超传递，记为$\mathrm{isSTrans}(x)$，
若$\exists y(y\in x)\wedge \forall y\in x(y\subseteq x\wedge \forall z\subseteq y(z\in x))$。
显然，极限序数$\alpha$对应的$V_\alpha$都是超传递集。
:::

::: definition
我们考虑以下两个公理模式。任给$\varphi(x_1,\dots,x_n)$

- 局部反映原理$(PRefl)_\varphi$声称
  $$
  \forall x_1\dots\forall x_n(\varphi\to\exists c(\mathrm{isSTrans}(c)\wedge\varphi^c))
  $$

- 全局反映原理$(CRefl)_\varphi$声称
  $$
  \exists c(\mathrm{isSTrans}(c)\wedge\forall x_1\in c\dots\forall x_n\in c(\varphi\leftrightarrow \varphi^c))
  $$

:::

不同集合论书籍所指的反映原理可能是上述四者任何之一的等价形式，读者遇到时不妨自行根据书籍前文辨别。

## 等价性

我们证明以下事实。

::: theorem [$\mathsf{Z}$]
以上四个反映原理（模式）均与替换公理模式等价。
:::

::: proof
我们先用$\mathsf{ZF}$证明最一般的任意类上的反映原理。
取一层级$W_\alpha(\alpha\in\mathbf{Ord})$和序数$\alpha$，
我们来造序数$\beta>\alpha$使得$\varphi^{\mathbf{W}}\leftrightarrow\varphi^{W_\beta}$对每组
$x_1,\dots,x_n\in W_\beta$成立。
取$\varphi$的构造序列，
展现其全体自由变元以为
$\varphi_0(x_1^0,\dots,x_{m_0}^0),\varphi_1(x_1^1,\dots,x_{m_1}^1),\dots,\varphi_k(x_1^k,\dots,x_{m_k}^k)\equiv\varphi$，
不妨设构造过程仅允许使用原始公式、否定符号、合取符号和存在量化。
我们对每个$\varphi_i(i=0,\dots,k)$定义序数值函数
$f_i\colon\mathbf{V}^{m_i}\to\mathbf{Ord}$，
其取值当$\varphi_i$并非经存在量化而来时恒为$0$；
当$\varphi_i$形如$\exists y(\varphi_j)$，
其中$j<i$时，令$f_i(x_1^i,\dots,x_{m_i}^i)$的值是最小的满足下述条件的序数$\gamma$：
如果存在$y\in\mathbf{W}$使得$\varphi_j$为真，
就存在$y\in W_\gamma$使得$\varphi_j$为真。
注意，如果不存在$y\in\mathbf{W}$使得$\varphi_j$为真，按定义这$\gamma=0$。
现在定义序数函数$F\colon\mathbf{Ord}\to\mathbf{Ord}$如下：
给定$\alpha$，
定义$F(\alpha)$为序数集合
$\{f_i(x_1^i,\dots,x_{m_i}^i)\mid1\leq i\leq k,x_{t}^i\in V_\alpha,1\leq t\leq m_i\}$的严格上确界，
只需证明可数列$\alpha,F(\alpha),F(F(\alpha)),\dots,F^{(r)}(\alpha),\dots$的上确界$\beta$
是所要的序数。

我们首先验证$f_i``V_\beta^{m_i}<\beta$。
给定$x_1^i,\dots,x_{m_i}^i\in V_\beta$，
由于$V_\beta$是可列多个$V_{F^{(r)}(\alpha)}$的并，
存在自然数$R$使得此时选定的全体$x_t^i$都属于$V_{F^{(R)}(\alpha)}$，
于是由定义它们输入$f_i$后获得的序数值要严格小于$F(F^{(R)}(\alpha))=F^{(R+1)}(\alpha)$
这个严格上确界，而后者显然小于$\beta$。
接下来我们对$i$施行归纳来证明每条$(Refl)_{\varphi_i}^\mathbf{W}$都按此处由$\alpha$至$\beta$
的构造为真。
如果$f_i$是平凡函数，对应的归纳步骤也是平凡的；
如果$\varphi_i$形如$\exists y(\varphi_j)$而$f_i$不平凡，证明关窍与上论证完全相类。

将$W_\alpha$层级取为$V_\alpha$层级即可由任意类上的反映原理推至经典反映原理，
而后者通过显然的论证推出局部反映原理和全局反映原理。我们分别用二者证明替代公理模式。

运用局部反映原理的证明是简单的。
假定$\forall x_1\dots\forall x_n\exists z\forall y(y=z\leftrightarrow\varphi(y,x_1,\dots,x_n))$，
须证明
$\forall p\exists q\forall x_1\in p\dots\forall x_n\in p\exists z\in q\forall y(y=z\leftrightarrow\varphi(y,x_1,\dots,x_n))$。
考虑公式$\forall x_1\in p\dots\forall x_n\in p \exists y(\varphi(y,x_1,\dots,x_n))$，
此公式仅$\exists y$一个非有界的量词，$p$一个自由变元，
因此局部反映原理说任给一个$p$，如果这句话是对的，
那么存在一个（甚至是超传递的）$c$使得这句话相对化到$c$也是对的；
由于这句话按假定确实对每个$p$都是对的，
确实对每个$p$都有$c$使得$\forall x_1\in p\dots\forall x_n\in p\exists y\in c(\varphi)$，
而我们要的$q$只需从$c$中分离出来。

运用全局反映原理的证明稍显复杂，因为它起手就说存在$c$，不给我们将参数$p$放进去的机会。
因此，首先需要证明其强化版本：假定$\varphi_0,\dots,\varphi_m$均有自由变元$x_1,\dots,x_n$，
则
$\forall z\exists c(z\in c\wedge\mathrm{isSTrans}(c)\wedge \forall x_1\in c\dots\forall x_n\in c(\bigwedge_{\mathfrak{i}=1,\dots,m}(\varphi_i\leftrightarrow \varphi_i^c)))$。
我们先来证明没有要求某个特定的$z\in u$的特例。
我们考察公式$\chi(t,x_1,\dots,x_n)$，
它是$(t=i)\wedge\varphi_i$的析取（$i$从$0$跑到$m$）。
对此句子使用全反射得到超传递集$c$，
它让
$\forall t\in c\forall v_0\in c\dots\forall v_{\mathfrak{n}-1}\in c(\chi\leftrightarrow\chi^c)$。
现在鉴于$c$超传递，诸自然数$i$必均属于$c$（事实上$V_\omega\subseteq c$），
从而我们只需要在此公理上把$t$真的从$1$到$m$全部取一遍。

现在把$z$塞进去。在这一系列$\varphi_i$之外，我们再添加两个公式：
第一个是我们要证明的句子不曾全称量化$z$的那一部分，它记为$\varphi_{{m}+1}(z)$；
第二个是我们要证明的句子，也就是$\exists z(\varphi_{{m}+1})$，它记为$\varphi_{{m}+2}$；
这${m}+2$个公式共有$z,x_1,\dots,x_n$共${n}+1$个自由变元。
对他们全体使用上个版本的加强，我们得到超传递集$c$，它满足：

1. $\forall x_1\dots\forall x_n(\varphi_i\leftrightarrow \varphi_i^c)$，此处$i$跑遍$0$到$m$；

2. $\forall z\in c(\varphi_{m+1}\leftrightarrow \varphi_{m+1}^c)$；

3. $\varphi_{m+2}\leftrightarrow \varphi_{m+2}^c$。

对每个$z\in c$，我们已有的这个$c$确实见证$\varphi_{m+1}$，
因此确实也有$\forall z\in c(\varphi_{m+1}^c)$；
但这就是$\varphi_{m+2}^c$，所以我们其实知道$\varphi_{m+2}$是对的，这完成了证明。

接下来的证明与局部反映原理所用的方法完全一样。
:::

## 高阶反映原理

```terms
反映原理:
  en: reflection principle
```
