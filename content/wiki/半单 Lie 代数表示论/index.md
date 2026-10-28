---
title: 半单 Lie 代数表示论
categories: [Lie 理论]
navboxes: [Lie 理论]
---

<problems>
- “例子”一节 $\mathfrak{sl}_2$ 的例子中，基本权似乎应为 $\omega = \alpha/2$，而不是 $\alpha^\vee/2$（后者不在 $\mathfrak{h}^*$ 中）。
- “例子”一节 $\mathfrak{g}_2$ 的例子中，若 $\alpha_1$ 为长根，则 $L(\omega_1)$ 似乎是 $14$ 维的伴随表示，$L(\omega_2)$ 是 $7$ 维表示；文中两者的维数似乎对调了。
</problems>

**半单 Lie 代数表示论**研究[[半单 Lie 代数]]的[[Lie 代数表示|表示]]结构与分类。
在复数域（更一般地，特征零[[代数闭域]]）上，
有限维半单 Lie 代数的任意有限维表示都是[[半单对象|半单]]的，
其不可约表示都是由[[支配整权]]为最高权的表示，且由其最高权唯一决定。
通过[[Weyl 特征公式]]，可以计算这些表示的维数与权空间分布。

本文讨论半单 Lie 代数的有限维表示。
如果考虑无限维的最高权表示，则它们生成的范畴称为[[范畴 \(\mathcal{O}\)]]，它是[[最高权范畴]]，
其中对象的半单性一般不再成立，因此结构更复杂；
表示的最高权也未必是支配整权，详见该条目。

在物理学中，[[粒子]]的微观对称性，例如[[自旋]]，可以由半单 Lie 代数的表示描述。

## 主要结论

半单 Lie 代数的有限维表示具有极其规整的结构：
任何表示都可唯一分解为不可约表示的直和。

::: theorem [完全可约性]
设 \(\mathfrak{g}\) 是特征零[[代数闭域]]上的[[半单 Lie 代数]]。
任意有限维 \(\mathfrak{g}\)-[[Lie 代数表示|表示]]都[[完全可约]]，
即同构于有限个[[不可约表示]]的直和。
:::

不可约表示由最高权完全分类，最高权必须是支配整权。

::: theorem [最高权分类]
取定 [[Cartan 子代数]] \(\mathfrak{h} \subset \mathfrak{g}\)，
相应的[[根系]] \(\Phi \subset \mathfrak{h}^*\)，
单根集 \(\Delta\)，正根集 \(\Phi^+\) 与 [[Weyl 群]] \(W\)。
定义支配整权集
\[
P^+ = \{\lambda \in \mathfrak{h}^* \mid \langle \lambda, \alpha^\vee \rangle \in \mathbb{Z}_{\ge 0},\ \forall \alpha \in \Delta\},
\]
其中 \(\alpha^\vee\) 是相应的[[余根]]，
则对任意 $\lambda \in P^+$，存在唯一的不可约表示 $L(\lambda)$ 使其最高权为 $\lambda$。
且这些 $L(\lambda)$ 是同构意义下所有的不可约表示。
其中，对应于单权 $\omega_i$ 的表示称为基本表示。

在[[范畴 $\mathcal{O}$]] 中，可以构造 $L(\lambda)$ 如下：

- 对任意 \(\lambda \in \mathfrak{h}^*\)，
  存在[[Verma 模]] \(M(\lambda)\)，它以 \(\lambda\) 为最高权，
  且权空间为一维，
  并具有唯一的不可约商模，记作 \(L(\lambda)\)。

- 不可约模 \(L(\lambda)\) 是有限维的当且仅当 \(\lambda \in P^+\)。

:::

在几何的观点中，
[[Borel–Weil–Bott定理]]表明不可约表示是[[旗簇]]上代数线丛的层上同调。
换言之，不可约表示可以由 Cartan 子代数的一维表示通过[[抛物诱导]]得到。

表示的权分布与维数可通过根系与[[Weyl 特征公式]]精确计算。

::: theorem [Weyl 特征公式]
对于 \(\lambda \in P^+\)，模 \(L(\lambda)\) 的形式[[特征标]]定义为
\(\operatorname{ch} L(\lambda) = \sum_{\mu \in \mathfrak{h}^*} (\dim L(\lambda)_\mu) e^\mu\)。
令 \(\rho = \frac{1}{2} \sum_{\alpha \in \Phi^+} \alpha\)，
则有
\[
\operatorname{ch} L(\lambda) =
\frac{\sum_{w \in W} (-1)^{\ell(w)} e^{w(\lambda+\rho)-\rho}}
{\prod_{\alpha \in \Phi^+} (1-e^{-\alpha})}
= \frac{\sum_{w \in W} (-1)^{\ell(w)} e^{w(\lambda+\rho)}} {\sum_{w \in W} (-1)^{\ell(w)} e^{w\rho}},
\]
其中 \(\ell(w)\) 是 \(w\) 的[[Coxeter 群|长度]]。
特别地，有以下 Weyl 维数公式：
对任意 \(\lambda \in P^+\)，
\[
\dim L(\lambda) = \prod_{\alpha \in \Phi^+} \frac{\langle \lambda+\rho, \alpha^\vee \rangle}{\langle \rho, \alpha^\vee \rangle}.
\]
:::

表示的中心特征则通过 [[Harish-Chandra 同态]]归结为 Weyl 群作用下的不变多项式。

::: theorem [中心特征与Harish-Chandra同构]
记 \(Z(\mathfrak{g})\) 为[[泛包络代数]] \(U(\mathfrak{g})\) 的中心。
存在代数同构（Harish-Chandra同态）
\[
\xi: Z(\mathfrak{g}) \stackrel{\sim}{\longrightarrow} S(\mathfrak{h})^{W_\bullet},
\]
其中 \(S(\mathfrak{h})\) 是 \(\mathfrak{h}\) 上的[[对称代数]]，
\(W\) 在 \(\mathfrak{h}^*\) 上作用由
$w_\bullet(\lambda)=w(\lambda +\rho)-\rho$ 给出。
:::

## 例子

### \(\mathfrak{sl}_2\) 的表示

::: example
考虑 \(\mathfrak{g} = \mathfrak{sl}_2(\mathbb{C})\)。
其根系 \(\Phi = \{\alpha, -\alpha\}\)，
单根 \(\alpha\)，正根 \(\Phi^+ = \{\alpha\}\)，
\(\rho = \alpha/2\)。
余根满足 \(\langle \alpha, \alpha^\vee \rangle = 2\)。
基本权 \(\omega = \alpha^\vee/2\)，
支配整权形如 \(\lambda = n\omega\)，
\(n \in \mathbb{Z}_{\ge 0}\)。由Weyl维数公式，
\[
\dim L(n\omega) = \frac{\langle n\omega + \rho, \alpha^\vee \rangle}{\langle \rho, \alpha^\vee \rangle} = \frac{n+1}{1} = n+1.
\]
因此，\(\mathfrak{sl}_2\) 的有限维不可约表示由维数完全分类：
对每个非负整数 \(n\) 存在唯一的 \(n+1\) 维不可约表示 \(L(n\omega)\)，
其权为 \(-n\omega, (-n+2)\omega, \dots, n\omega\)。

设 \(V = \mathbb{C}^2\) 为 \(\mathfrak{sl}_2\) 的二维自然表示，
其最高权为 \(\omega\)。
则 \(n+1\) 维不可约表示 \(L(n\omega)\) 同构于 \(V\) 的 \(n\) 次[[对称积]]
\(\operatorname{Sym}^n V\)。
因此，所有有限维不可约表示均可由基本表示的对称积构造得到。
:::

### \(\mathfrak{sl}_3\) 的表示

::: example
对于 \(\mathfrak{g} = \mathfrak{sl}_3(\mathbb{C})\)，
记单根为 \(\alpha_1, \alpha_2\)，
单权为 \(\omega_1, \omega_2\)。
此时 \(\rho = \omega_1 + \omega_2\)。
支配整权为 \(\lambda = m_1 \omega_1 + m_2 \omega_2\)，
其中 \(m_1, m_2 \in \mathbb{Z}_{\ge 0}\)。Weyl维数公式给出
\[
\dim L(m_1, m_2) = \frac{1}{2}(m_1+1)(m_2+1)(m_1+m_2+2).
\]
基本表示 \(L(1,0)\) 为三维定义表示 \(V\)，
其[[对偶表示]] \(L(0,1)\) 为三维共轭表示 \(V^*\)。
伴随表示 \(L(1,1)\) 的维数为八维，记作 \(\mathbf{8}\)。

一般不可约表示 \(L(m_1, m_2)\) 可作为
\(\operatorname{Sym}^{m_1} V \otimes \operatorname{Sym}^{m_2} (\wedge^2 V)\) 的不可约直和项实现；
由于 \(\wedge^2 V \cong V^*\)，
这等价于在 \(V^{\otimes m_1} \otimes (V^*)^{\otimes m_2}\)
中提取相应的[[Schur函子]]成分（对应于两行的[[Young图]]）。
:::

对一般的 $\mathfrak{sl}_n$，
Weyl特征公式的展开诱导出[[Kostant重数公式]]，
将权空间维数表示为分拆函数的交替和，
张量积分解的系数由[[Littlewood–Richardson 规则]]描述，
并与[[对称函数]]理论中的[[Schur函数]]乘法相对应。

### 例外 Lie 代数 \(\mathfrak{g}_2\) 的表示

::: example
[[例外 Lie 代数]] [[$\mathrm{G}_2$|\(\mathfrak{g}_2\)]] 的根系含有 \(12\) 个根，
单根系 \(\{\alpha_1, \alpha_2\}\)，其中 \(\alpha_1\) 为长根，
\(\alpha_2\) 为短根。
两个基本表示 \(L(\omega_1)\) 与 \(L(\omega_2)\) 的维数分别为 \(7\) 和 \(14\)。

七维基本表示 \(L(\omega_1)\)
可通过[[八元数]]代数 \(\mathbb{O}\) 的虚部上的自然作用实现；
十四维表示 \(L(\omega_2)\) 恰为 \(\mathfrak{g}_2\) 的伴随表示。
一般的有限维不可约表示可由这些基本表示通过张量积分解得到。
:::

## 推广

对于无限维 Lie 代数，
[[仿射 Lie 代数]]与更一般的 [[Kac–Moody代数]] 的表示论可视为半单情形的推广。
可积最高权表示的分类与 [[Weyl–Kac 特征公式]]类似于半单情形。

特征 $0$ 代数闭域上[[半单代数群|半单]]（或[[约化群|约化]]）
[[代数群]]的表示论与半单 Lie 代数的表示论框架完全相同，
且在代数群[[单连通]]时，代数群的表示与其 Lie 代数的表示一一对应。
具体参见条目[[约化群常表示论]]。

在特征 \(p>0\) 的域上，半单（或约化）代数群的表示论则稍有不同：
完全可约性不再成立，但表示构成的范畴仍为[[最高权范畴]]，
单表示也对应于支配整权，参见条目[[约化群模表示论]]。
此时其 Lie 代数不是正确的考虑对象，
而相应的 [[$p$-Lie 代数]]的表示的结构也类似。
