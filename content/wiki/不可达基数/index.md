---
title: 不可达基数
categories: [集合论]
---

**不可达基数**，
又称**强不可达基数**，
顾名思义，
即是那些不可以被比它小的[[基数]]所达到的基数：
首先其[[共尾类]] $\operatorname{cf}(\kappa)=\kappa$，
其次它也不能被[[幂集]]所达到：
\[
\lambda<\kappa\Rightarrow 2^{\lambda}<\kappa.
\]

一个较弱的相关概念是弱不可达基数。

## 定义

::: definition
一个[[不可数]]，
[[正则基数|正则]]
且满足
\[
\lambda<\kappa\Rightarrow 2^{\lambda}<\kappa
\]
的基数被称为**不可达基数**。此（对$\kappa$之）条件也被称作（$\kappa$）强极限。
:::

::: definition
一个[[不可数]]，
[[正则基数|正则]]
且不是[[后继基数]]的基数被称为**弱不可达基数**。
:::

以下命题显然：

::: proposition
不可达基数是弱不可达基数。
如果承认[[广义连续统假设]]，
则反之亦然。
:::

::: lemma {@Vkappa}
如果 $\text{ZFC}$ 是相容的，
且 $\kappa$ 是不可达基数，
则 [[von Neumann 宇宙|$V_{\kappa}$]] 是 $\text{ZFC}$ 的一个[[模型]]。
:::

::: proof
由于 $V_{\kappa}$ 是[[传递集合]]，
外延公理，
二元集公理，
并公理和选择公理显然以 $V_{\kappa}$ 作为模型。
因为 $\lambda<\kappa\Rightarrow 2^{\lambda}<\kappa$，
知对任意 $x\in V_{\kappa}$，
$\mathcal{P}(x)\in V_{\kappa}$。
且因为传递性 $\mathcal{P}(x)=y$ 验证
\[
V_{\kappa}\models\forall z(z\in y\leftrightarrow z\subset x),
\]
即幂集公理以 $V_{\kappa}$ 作为模型。
替换公理同理，
因为对于任意[[映射]] $F$，
任意 $x\in V_{\kappa}$，
由 $\kappa$ 的正则性 知 $F(x)\in V_{\kappa}$，
此 $F(x)$ 验证替换公理中的 $u$。
:::

我们将上引理扩展为一个对不可达基数的等价刻画。
注意，由于我们默认在$\mathsf{ZFC}$中施行证明，因此此定理无需假设其相容性：如果它不相容，
那么它可以证明任何命题，自然也能证明以下定理。

::: theorem
$\kappa$是不可达基数，当且仅当任给$V_\kappa$幂集的子集$X$，
我们考虑以$X$为二阶常元符号在$(V_\kappa,\in)$上含参可定义的全体$V_\kappa$的子集构成的集
$\mathrm{Def}(V_\kappa,X)$，
它总是二阶集合论$\mathsf{NBG+AC}$的模型。
:::

::: proof
如果$\kappa$不可达，先来验证$\operatorname{Def}(V_\kappa,X)\vDash\mathsf{NBGC}$。
由于$\kappa$强极限自然极限，那些和$\mathsf{ZFC}$相同的公理同上引理得证；
由于我们考虑了全体可定义集，二阶概括公理模式也被自动满足，所以我们只需验证二阶替换公理模式。

假定$F\subseteq V_\kappa$是一个类函数，
即$F$中元素均为$V_\kappa$中集合形成的二元有序对集合，任给$x\in V_\kappa$，
须证明$\{y\in V_\kappa|\exists z\in x((z,y)\in F)\}\in V_\kappa$。
我们考虑函数$R=\operatorname{rank}_{\in}(F(-)):x\to\kappa$，
由于$x\in V_\kappa$我们有$|x|<\kappa$，
因此由$\kappa$正则我们知道$\sup(\operatorname{ran}(R))<\kappa$，
不妨设左侧序数为$\theta$，则所求集是$\{y\in V_\theta|\exists z\in x((z,y)\in F)\}$，
它显然属于$V_{\theta+1}$，从而属于$V_\kappa$。

现在证明反过来的方向，不妨证明更弱的定理：
如果$V_{\kappa+1}$（视为自然的二阶集合论结构）满足$\mathsf{NBG+AC}$，则$\kappa$不可数、正则、
强极限。
不可数因为它满足无穷公理和幂集公理显然，幂集公理还顺带指出$\kappa$已为极限基数，
我们分别验证正则和强极限。

先证正则。若不然，假定共尾列$F\colon\alpha\to\kappa$见证此事，
则由二阶替代公理模式，$\alpha\in V_\kappa$
就说明$F``\alpha=\kappa\in V_\kappa$，矛盾。

再证强极限。若不然，假定$\lambda<\kappa\leq 2^\lambda$，
则有从$\lambda$的幂集到$\kappa$的满射$F\subseteq V_{\kappa+1}$，
同上运用二阶替代公理模式可得矛盾。
:::

注意，
此处使用$\mathsf{NBG+AC}$而非$\mathsf{NBGC}$
是因为后者要求的作为二阶常元的全局选择函数/全局良序可能不是含$X$可定义的。

此外，还有一个只运用一阶模型论语言的等价刻画。

::: theorem
任意序数$\kappa$是不可达基数，
当且仅当任给$R\subseteq V_\kappa$都存在$\alpha\in\kappa$使得$(V_\alpha,\in,R\cap V_\alpha)$是
$(V_\kappa,\in,R)$的初等子模型。此处$R$视为扩展一个谓词符号进入集合论语言后的对应解释。
:::

::: proof
假定$\kappa$不可达，我们更强地证明这些$\alpha$形成$\kappa$的一个[[闭无界集]]。
闭性质显然是因为这些结构自然形成一条初等链，而其余极限自然与诸位初等等价。
验证其无界无非是使用证明[[反射原理]]的经典手法，
即考察诸结构$(V_{\alpha_0},\in,R\cap V_{\alpha_0})$上的取值秩极小的Skolem函数的值域，
然后取诸值域上确界的上确界记为$\alpha_1$；
重复$\omega$次，由$\kappa$正则极限即得最终得到的$\alpha=\alpha_\omega$仍属于$\kappa$，
而它指标一个初等子模型则只需利用[[Tarski–Vaught判别法]]。

假定$\kappa$满足后述要求，我们依次证明它是不可数序数、正则基数、强极限基数。

假定$\kappa$并非不可数序数，即有满射$F\colon\omega\to\kappa$。
首先，$\kappa$不能是$\omega$，
因为$(V_\omega,\in)\vDash(Pow)$但任何自然数$n\in\omega$均不使$(V_n,\in)\vDash(Pow)$。
因为类似的原因，
可以假定大于$\omega$的序数$\alpha\in\kappa$让$(V_\alpha,\in,F\cap V_\alpha)\prec(V_\kappa,\in,F)$；
由于$\omega\in\alpha$，对每个$n\in\omega\in\alpha$都应当有$(n,F(n))\in F\cap V_\alpha$，
从而应当有$F(n)\in V_\alpha$，但这证明$F``\omega=\kappa\subseteq V_\alpha$，
换言之$\kappa\leq\alpha$，这就矛盾了。

假定$\kappa$并非正则基数，即有满射$F\colon\theta\to\kappa$。证明细节全然同上。

假定$\kappa$并非强极限基数，即有满射$F\colon P(\theta)\to\kappa$。
我们反射$F\cup\{\theta\}$，
然后先读出$V_\alpha\cap(F\cup\{\theta\})$中唯一的序数$\theta$并顺带证明$\theta\in\alpha$，
然后由$\kappa$已被证明是极限序数得到$\alpha$必须是极限序数，从而$P(\theta)\in V_\alpha$，
然后同样得到矛盾。
:::

对此要求的详细研究请参考词条[[不可描述基数]]。

## 相容性

设 $I$ 是如下[[一阶语句]]：

$I=$“存在不可达基数”。

::: proposition
我们有
\[
\vdash\operatorname{Con}(\text{ZFC})
\rightarrow\operatorname{Con}(\text{ZFC}+\neg I)
\]
（这等价于在 $\text{ZFC}$ 相容时有 $\text{ZFC}\nvdash I$），
以及
\[
\nvdash\operatorname{Con}(\text{ZFC})
\rightarrow\operatorname{Con}(\text{ZFC}+I).
\]
换言之，
一方面 $\text{ZFC}$ 不能证明不可达基数的存在性；
另一方面，
无法说明 $I$ 与 $\text{ZFC}$ 相容。
:::

::: proof
先证第一条。
假设 $\text{ZFC}$ 相容，
那么由 @Vkappa 知 $V_{\kappa}$ 也是 $\text{ZFC}$ 的一个模型。
且易证：

$V_{\kappa}\models$“$\lambda$ 是不可达基数”$\iff$
$\lambda$ 是不可达基数。

所以如果 $\text{ZFC}\vdash I$，
则取出最小的不可达基数 $\kappa$，
那么 $V_{\kappa}$，
作为 $\text{ZFC}$ 的模型，
不包含一个不可达基数，
与 $\text{ZFC}\vdash I$ 矛盾，
故 $\text{ZFC}\nvdash I$。

再证第二条。
假设 $\text{ZFC}$ 相容能够推出 $\text{ZFC}$ 与 $I$ 相容。
注意到 $\text{ZFC}+I\vdash\operatorname{Con}(\text{ZFC})$，
因为前者推出 $V_{\kappa}$ 是 $\text{ZFC}$ 的一个模型，
故说明 $\text{ZFC}$ 相容。
从而有
\[
\text{ZFC}+I\vdash\operatorname{Con}(\text{ZFC}+I),
\]
与 [[Gödel 不完备性定理|Gödel 第二不完备性定理]]矛盾。
:::

此外，借用[[可构造宇宙]]作为内模型，我们可以证明弱不可达基数并未消减相容性强度。

::: theorem
$\mathsf{ZFC}+$“存在不可达基数”相容，当且仅当$\mathsf{ZFC}+$“存在弱不可达基数”相容。
:::

::: proof
只需证明不可达基数在$\mathbf{L}$中仍不可达，这是因为$\mathbf{L}\subseteq\mathbf{V}$，
从而不会加入对不可数、正则和强极限性质的反例。
于是二理论均与其加入公理$\mathbf{V=L}$的版本等相容性，
但加入$\mathbf{V=L}$的后果即为$\mathsf{GCH}$成立，于是弱不可达就是不可达。
:::

## 宇宙公理

<see>[[Grothendieck 宇宙]]</see>

```terms
不可达基数:
  en: inaccessible cardinal
  de: unerreichbare Kardinalzahl
  fr: cardinal inaccessible
  la: cardinalis inaccessibilis
```
