---
title: Deligne–Serre 提升引理
aliases: [Deligne-Serre 提升引理]
categories: [交换代数]
notices:
  - name: 问题
    items:
      - 不符合本站的写作风格。
      - 文中夹杂英文。
      - '过度使用记号 $\forall$。'
      - 缺少术语翻译。
      - 定理陈述中的条件 $0\neq f\in M$ 似乎应为 $f\notin\mathfrak{m}M$（对 $f\in\mathfrak{m}M$，同余条件总是成立，结论却未必成立）。
navboxes: [交换代数]
---

**Deligne–Serre提升引理**是一个[[交换代数]]的命题，
说的是如何将“只在同余意义下成立的[[Hecke特征形式]]”提升为真正的[[Hecke特征形式]]，
其在模形式的同余问题里具有重要应用。

## 陈述

固定一些记号。

- $(R,\mathfrak{m})$是一个离散赋值环，剩余域为$k$，分式域为$K$。

- $M$是一个有限秩的自由$R$-模。

- $S\subset\operatorname{End}_R(M)$是一族两两交换的自同态。（可想象成是Hecke算子。）

::: theorem [Deligne–Serre]
若有$0\neq f\in M$及$(a_T)_{T\in S}\subseteq k$，
满足$\forall T\in S,Tf\equiv a_T f\ (\operatorname{mod} \mathfrak{m} M)$，则存在

- 离散赋值环$(R',\mathfrak{m}')$，分式域$K'$，
  满足$R\subseteq R'$，$\mathfrak{m}'\cap R=\mathfrak{m}$，$K'$是$K$的有限扩张；

- $0\neq f'\in R'\otimes_{R} M$及$(a_T')_{T \in S}\subseteq R'$，

满足$\forall T\in S,Tf'=a_T'f'$，
且$\forall T\in S,a_T'\equiv a_T\ (\operatorname{mod} \mathfrak{m}')$。
:::

## 证明

**Step 1：** 可以取到满足定理陈述第一条的环扩张$R'$，使得$S$中的算子的特征值均在$R'$内。

::: proof
令$\mathbb{T}\subseteq\operatorname{End}_R(M)$是由$S$生成的$R$-代数。
由于$\operatorname{End}_R(M)$是有限秩自由$R$-模，子模$\mathbb{T}$亦然（利用$R$是主理想整环）。
取$T_1,\cdots,T_n$为$\mathbb{T}$在$R$上的一组基，
在$K$中添加$T_1,\cdots,T_n$的极小多项式的根（注意它们在$R$上整），
可得到$K$的有限扩张$K'$。

取$R$在$K'$中的整闭包$\tilde{R}$，则由[[Krull–Akizuki定理]]得到$\tilde{R}$是Dedekind环。
取$\tilde{R}$的一个极大理想$\tilde{\mathfrak{m}}$，那么容易验证
$(R',\mathfrak{m}')=(\tilde{R}_{\tilde{\mathfrak{m}}},\tilde{\mathfrak{m}}\tilde{R}_{\tilde{\mathfrak{m}}})$
即满足要求。
:::

为使记号轻便，通过用$R'\otimes_{R} M$替换$M$，用$R'\otimes_{R}\mathbb{T}$替换$\mathbb{T}$，
以下假设$R$已满足**Step 1**中性质。

**Step 2：** 构造定理陈述第二条中的$\{a_T'\}_{T\in S}$。

::: proof
考虑由$T\mapsto a_T$确定的环同态$\lambda\colon\mathbb{T}\rightarrow k$。
由于$R\subseteq\mathbb{T}$，$\lambda$是满射，从而$\ker(\lambda)$是$\mathbb{T}$的极大理想。
选取$\ker(\lambda)$的一个极小素理想$\wp$，其中的元素都是$\mathbb{T}$中的零因子。
由于$\mathbb{T}$在$R$上自由，从而$\wp\cap R=\{0\}$。

记$\mathbb{T}_K=K\otimes_R\mathbb{T}$，其是$\mathbb{T}$对$R-\{0\}$的局部化，
因此由上所述$\wp$在$\mathbb{T}_K$中生成一个素理想$\mathfrak{p}$。
注意到$\mathbb{T}_K$是一个Artin环，因此$\mathfrak{p}$也是一个极大理想。于是由**Step 1**，
\[
K\cong \mathbb{T}_K/\mathfrak{p}\cong (\mathbb{T}/\wp)\otimes_R K.
\]
但注意到$\mathbb{T}/\wp$是$R$的整扩张且$R$在$K$中整闭，因此$\mathbb{T}/\wp\cong R$。
于是考查环同态$\lambda'\colon\mathbb{T}\rightarrow \mathbb{T}/\wp\cong R$，
对任意$T\in S$，令$a_T'=\lambda'(T)$即为所求。

选取$\tilde{a_T}\in R$是$a_T$的一个提升，则$(T-\tilde{a_T})\in\ker(\lambda)$。
因此$\lambda'(T-\tilde{a_T})=a_T'-\tilde{a_T}\in \mathfrak{m}$，
这就意味着$a_T'\equiv \tilde{a_T}\equiv a_T (\operatorname{mod}\mathfrak{m})$，
满足定理陈述中的同余性质。
:::

**Step 3** 构造定理所需的$f'$。

::: proof
记$M_K=M\otimes_R K$。由于$\mathbb{T}_K\subseteq \operatorname{End}_K(M_K)$，
易见$\operatorname{Ann}_{\mathbb{T}_K}(M_K)=\{0\}$，
从而$\mathfrak{p}\in\operatorname{Supp}_{\mathbb{T}_K}(M_K)$。

但另一方面，$\mathfrak{p}$是$\mathbb{T}_K$的极小素理想，因此由[[结合素理想]]的理论可知，
$\mathfrak{p}\in\operatorname{Ass}_{\mathbb{T}_K}(M_K)$。
从而存在$f'\in M_K$使得$\mathfrak{p}=\operatorname{Ann}_{\mathbb{T}_K}(f')$，
通过适当调整系数可使$f'\in M$，则由于$(T-a_T')\in\mathfrak{p}$，成立$Tf'=a_T'f'$，
这个$f'$即为定理所求。
:::

## 应用

::: example
在文献[@Ribet76]中，K.Ribet解决了Herbrand定理的另一方向，
这是[[正则素数]]的Kummer判别法的一种加细，后来人们把这个定理称为[[Herbrand–Ribet定理]]。

他把问题转化为构造出一个合适的$\operatorname{mod}\ \mathfrak{p}$ Galois表示。
通过[[Eisenstein级数]]的同余关系，
可以构造一个“只在同余意义下成立的[[Hecke特征形式]]”，
它“满足”所需的Galois表示的同余性质。
然后利用[[Deligne–Serre提升引理]]，他得以将其提升为真正的[[Hecke特征形式]]，
从而使用当时Deligne–Serre–Shimura等人利用[[模形式]]构造Galois表示的结果，
获得了一个真正的Galois表示。

这种方式在后来[@Mazur-Wiles84]证明$\mathbb{Q}$上的[[Iwasawa主猜想]]的工作中得到了深刻的推广。
:::

::: example
[[Langlands–Tunnell定理]]断言若
$\rho\colon\operatorname{Gal}(\overline{\mathbb{Q}}/\mathbb{Q})
  \rightarrow\mathrm{GL}_2(\mathbb{C})$是一个连续不可约奇表示，
且$\rho$的像是可解群，则存在一个权为$1$的[[新形式]]$f$，
使得$L(s,f)$和$L(s,\rho)$的Euler因子除了有限个素数之外都相同。

设$E$是$\mathbb{Q}$上的一条半稳定椭圆曲线，
且其$\operatorname{mod}\ 3$ Galois表示$\overline{\rho}_{E,3}$绝对不可约。
著名的[@Wiles95]使用[[Langlands–Tunnell定理]]说明
$\overline{\rho}_{E,3}$具有来自权为$1$的新形式的模性，
而后利用[[Deligne–Serre提升引理]]将其提升为权为$2$的新形式，
从而进入了[[模性提升定理]]的起手步骤。

这个例子中的推导是相对初等的，仍是[[Eisenstein级数]]的同余性质的应用。
感兴趣的读者可以参阅[@Wiles95]第五章的开头部分。
:::

## 参考文献

```bibliography
Deligne1974FormesMD:
  type: article
  title: Formes modulaires de poids 1
  author: [Pierre Deligne, Jean-Pierre Serre]
  journaltitle: Annales scientifiques de l'École normale supérieure
  year: 1974
  volume: 7
  pages: '507-530'
  url: https://api.semanticscholar.org/CorpusID:116892658
Ribet76:
  type: article
  author: 'Ribet, Kenneth'
  year: 1976
  pages: '151-162'
  title: 'A modular construction of unramified $p$-extension of $\mathbb{Q}(\mu_p)$'
  volume: 34
  journaltitle: Inventiones Mathematicae
  doi: 10.1007/BF01403065
Mazur-Wiles84:
  type: article
  title: 'Class fields of abelian extensions of $\mathbb{Q}$'
  author: [Barry Mazur, Andrew Wiles]
  journaltitle: Inventiones mathematicae
  year: 1984
  volume: 76
  pages: '179-330'
  doi: 10.1007/BF01388599
Wiles95:
  type: article
  url: http://scienzamedia.uniroma2.it/~eal/Wiles-Fermat.pdf
  author: Andrew Wiles
  journaltitle: Annals of Mathematics
  number: 3
  pages: 443–551
  publisher: Annals of Mathematics
  title: Modular elliptic curves and Fermat's Last Theorem
  urldate: '2023-09-18'
  volume: 141
  year: 1995
```
