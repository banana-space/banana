---
title: 平展上同调简介
---

<problems>
- Weil 猜想 (i) 中的有理性公式似乎应为 $S_X(t)=\prod_{i=0}^{2n}S_i(t)^{(-1)^{i+1}}$。
</problems>

何为平展上同调？举一个简单的例子，取$X$为$\mathbb{C}$上的代数簇，
其解析化$X^{\operatorname{an}}$可以对应奇异上同调$H^i(X^{\operatorname{an}},\mathbb{Z})$满足

(i)是有限生成$\mathbb{Z}$模；

(ii)群$H^i(X^{\operatorname{an}},\mathbb{C})$有额外的结构；

(iii)和代数链有关系。

所以平展上同调的目标就是定义一个类似奇异上同调的上同调理论（满足类似性质的上同调称为Weil上同调理论，
还有其他的Weil上同调理论，例如
经典的de Rham上同调、代数de Rham上同调和晶体上同调）使其适用于更加一般的概形上去。

在平展上同调中，我们会发现挠系数的上同调，
例如$\mathbb{Z}/n\mathbb{Z}$系数的上同调可以比较好的模拟奇异上同调。但会发现
$H^2_{\operatorname{ét}}(\mathbb{P}_{\mathbb{C}}^1,\mathbb{Z})=0$而
$H^2(\mathbb{P}^1(\mathbb{C}),\mathbb{Z})=\mathbb{Z}$并不能很好的模拟奇异上同调，另一方面
我们发现如下结果：

::: theorem [Serre]
不存在上同调理论$H^*$使得(i)具有函子性；(ii)满足Künneth公式；
(iii)对所有椭圆曲线$E$满足$H^1(E)\cong\mathbb{Q}^2$。
:::

::: proof [基本思路]
取$E$为超奇异椭圆曲线，有一个事实是$\mathrm{End}(E)\otimes\mathbb{Q}$是不分裂四元数代数。
根据(i)(ii)不难得到$\mathrm{End}(E)$作用在$E$上
会诱导出$\mathrm{End}(E)$在$H^1(E)$，
进而诱导出代数同态$\mathrm{End}(E)\otimes\mathbb{Q}\to\mathrm{Mat}_{2\times 2}(\mathbb{Q})$。
而根据基本的表示论，这种同态一定不存在！故而没有这种上同调理论。
:::

为了在非挠系数下也可以模仿奇异上同调，我们会定义类似的$\ell$-进上同调理论，
其中$\ell$和特征$p$互素（不满足这个情况的需要晶体上同调理论）：
\[
H^i_{\operatorname{ét}}(X,\mathbb{Z}_{\ell})=\varprojlim H^i_{\operatorname{ét}}(X,\mathbb{Z}/\ell^n\mathbb{Z})\text{ 和 }
H^i_{\operatorname{ét}}(X,\mathbb{Q}_{\ell})=H^i_{\operatorname{ét}}(X,\mathbb{Z}_{\ell})\otimes_{\mathbb{Z}_{\ell}}\mathbb{Q}_{\ell},
\]
这样也可以得到比较好的模拟。

顺便一提，类似代数拓扑一样，在概形情况下也可以模拟拓扑的基本群。
给定概形和固定的几何点$(X,\bar{x})$，可以定义$\pi_1^{\operatorname{ét}}(X,\bar{x})$
为平展基本群，其定义事实上是从代数拓扑里偷的，运用了覆叠变换群和拓扑基本群的关系来定义，十分合理。
当然之后还有更多的类似不变量，例如
高阶的平展同伦群等。

另一个发展平展上同调，乃至Grothendieck发展代数几何的重要动机就是Weil猜想：

::: conjecture [Weil猜想]
设$X$是$\mathbb{F}_q$上$n$维光滑紧合几何整的簇，设
\[
S_X(t)=\exp\left(\sum_{n>0}\frac{\# X(\mathbb{F}_{q^n})}{n}t^n\right),
\]
则

(i)函数$S_X(t)$是有理函数，即$S_X(t)=\prod_{i=0}^{2n}(-1)^{i+1}S_i(t)$，
其中$S_i$是满足一定条件的整系数多项式；

(ii)满足函数方程$S_X(q^{-n}t^{-1})=\pm q^{nE/2}t^ES_X(t)$其中$E$是$X$欧拉示性数；

(iii)所有零点和极点的绝对值为$q^{j/2}$其中$j\in\mathbb{Z}$；

(iv)若$X$提升为代数整数环$R\subset\mathbb{C}$上的光滑射影簇$Y$，则对于$i=0,...,2n$，
流形$Y(\mathbb{C})$的Betti数为$S_i(t)$的次数$b_i$。
:::

::: proof [最后结果]
(i)由Dwork运用$H^1$的有限生成性得到结果；

(ii)由Grothendieck运用Poincaré对偶得到；

(iii)(iv)由Deligne证明。
:::

因此平展上同调是相当成功的上同调理论，而本笔记就是为了在介绍基础理论的同时来阐述这些和代数拓扑、
复几何类似的结果和性质。
正如题所言，这个笔记是作为几何人的笔者写的，所以有很多我认为就算不知道也无妨，
或者自己就能推理的无聊细节（主要集中在交换代数和点集拓扑）
就会被我略去（当然大部分情况只是我懒得写了）。
因此可能不适合其他方向的人观看，推荐[@StacksProject, Tag 0BQ6, 03N1]，
扶磊教授的书[@Ful15]和Milne的传世经典[@Mil80]，我们也会多次引用里面的某些细节。

前置知识：至少是经典代数几何教材[@hartshorne1977algebraic]的前三章，还有光滑、
无分歧和平展映射的基本性质，还有基本的导出范畴，懂一些
下降理论。
而会一些基本的代数拓扑和复几何更好，你也会注意到平展上同调是研究概形的拓扑，
而凝聚上同调是研究概形的几何。
