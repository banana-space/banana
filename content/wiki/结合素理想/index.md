---
title: 结合素理想
aliases: [嵌入素理想]
categories: [交换代数]
navboxes: [交换代数]
---

::: convention
在本文中，

- 所有环都指[[交换环]]。

:::

**结合素理想**是[[交换代数]]中的重要概念，是[[准素分解]]理论的现代版本。
代数地看，它是可以作为模中元素[[零化子]]的素理想；几何地看，
它是[[拟凝聚层]]截面[[支集]]的不可约分支。

## 定义

::: definition
$A$ 是环，$M$ 是 $A$-模。称素理想 $\mathfrak{p}\subseteq A$
为 $M$ 的**结合素理想**，指的是存在 $m\in M$
使得 $\mathfrak{p}=\operatorname{Ann}_A(m)$。
$M$ 的所有结合素理想的集合记作 $\operatorname{Ass}_A(M)$，
无歧义时也可省去下标 $A$。$\operatorname{Ass}_A(M)$
中的极小元称为 $M$ 的**极小素理想**，其余的称为**嵌入素理想**。
常将环 $A$ 作为自身的模的结合（嵌入）素理想简称为环
$A$ 的结合（嵌入）素理想。
:::

::: remark
虽然此定义相当一般，但它只对 [[Noether 环]]表现良好。
一般环上要用[[弱结合素理想]]。
:::

## 性质

注意由定义不能看出它存在；我们首先对非零模证明存在性。
显然零模没有结合素理想。

::: proposition
设 $A$ 是 [[Noether 环]]，$M$ 是非零 $A$-模，则 $\operatorname{Ass}_A(M)\ne\emptyset$。
此外，$M$ 中非零元的零化子都包含于某个结合素理想；换言之，
$M$ 的[[零因子]]集是其所有结合素理想的并。
:::

::: proof
考虑理想集合
$$
\{\operatorname{Ann}(m)\mid m\in M,\,m\ne0\}.
$$
由 Noether，它有极大元，设为 $\mathfrak{p}=\operatorname{Ann}(m)$，
我们来证 $\mathfrak{p}$ 为素理想。取 $a,b\notin\mathfrak{p}$，
则 $am\ne0$，且 $\operatorname{Ann}(am)\supseteq\operatorname{Ann}(m)$，
故由极大知 $\operatorname{Ann}(am)=\operatorname{Ann}(m)$。
于是 $b\notin\operatorname{Ann}(am)$，故 $abm\ne0$，
$ab\notin\operatorname{Ann}(m)=\mathfrak{p}$。所以 $\mathfrak{p}$ 素。
对一个固定元素的零化子，考虑上述集合里面包含它的理想中极大者，
即得后一句话。
:::

::: example
$A$ 是环，$\mathfrak{p}$ 是其素理想，则 $\operatorname{Ass}_A(A/\mathfrak{p})=\{\mathfrak{p}\}$。
:::

其次是关于模的性质。

::: proposition {@子模商模}
设有 $A$-模短正合列
$$
0\to N\to M\to Q\to0.
$$
则
$\operatorname{Ass}(N)\subseteq\operatorname{Ass}(M)\subseteq\operatorname{Ass}(N)\cup\operatorname{Ass}(Q)$。
第二个包含在正合列分裂时为等号。
:::

::: proof
第一个包含为显然，我们来证第二个。设
$\mathfrak{p}=\operatorname{Ann}(m)\in\operatorname{Ass}(M)$，
记 $m$ 在 $Q$ 中的像为 $\bar{m}$，则
$\operatorname{Ann}(\bar{m})\supseteq\mathfrak{p}$。
如这是等号则 $\mathfrak{p}\in\operatorname{Ass}(Q)$。
如这是真包含，取 $a\in\operatorname{Ann}(\bar{m})\setminus\mathfrak{p}$，
则 $a\bar{m}=0$ 而 $am\ne0$，即 $am\in N$ 且非零。
由 $\mathfrak{p}$ 是素理想易知 $\operatorname{Ann}(am)=\mathfrak{p}$，
即 $\mathfrak{p}\in\operatorname{Ass}(N)$。
所以 $\operatorname{Ass}(M)\subseteq\operatorname{Ass}(N)\cup\operatorname{Ass}(Q)$。
正合列分裂时，$N$ 和 $Q$ 都是 $M$ 的子模，故也有
$\operatorname{Ass}(M)\supseteq\operatorname{Ass}(N)\cup\operatorname{Ass}(Q)$，
所以两边相等。
:::

::: example
以上第二个包含常常为严格。观察
$$
0\to\mathbb{Z}\to\mathbb{Z}\to\mathbb{Z}/n\to0.
$$
:::

用结合素理想可将有限生成模拆成较简单的模。

::: proposition
$A$ 是 Noether 环，$M$ 是有限生成 $A$-模。则存在滤链
$$
0=M_0\subsetneqq M_1\subsetneqq\cdots\subsetneqq M_{n-1}\subsetneqq M_n=M,
$$
以及一列素理想 $\mathfrak{p}_1,\ldots,\mathfrak{p}_n$，使得
$M_i/M_{i-1}\cong A/\mathfrak{p}_i$。
:::

::: proof
考虑子模集合
$$
\{N\subseteq M\mid命题对\,N\,成立\}.
$$
它非空，因为 $0$ 在其中。由于 $M$ 是 Noether 模，
以上集合有极大元，设为 $N$，要证 $N=M$。如果 $N\subsetneqq M$，
取 $M/N$ 的结合素理想 $\mathfrak{p}$ 以及元素 $\bar{m}$
使得 $\operatorname{Ann}(\bar{m})=\mathfrak{p}$，
则 $A\bar{m}\cong A/\mathfrak{p}$。取 $\bar{m}$
一个原像 $m\in M$，令 $N'=N+Am$，则 $N'\supsetneqq N$，
$N'/N=A\bar{m}\cong A/\mathfrak{p}$，于是将 $N$
的滤链最后放上 $N'$，得命题对 $N'$ 成立，与 $N$ 极大矛盾！
故 $N=M$，命题对 $M$ 成立。
:::

由此可得重要的有限性。

::: corollary
$A$ 是 Noether 环，$M$ 是有限生成 $A$-模。则
$\operatorname{Ass}_A(M)$ 有限。
:::

::: proof
由以上两命题立得结论。
:::

::: proposition [与局部化的关系] {@局部化}
$A$ 是 Noether 环，$M$ 是 $A$-模，$S\subseteq A$ 是[[乘性子集]]。则
$$
\operatorname{Ass}_A(S^{-1}M)=\operatorname{Ass}_{S^{-1}A}(S^{-1}M)=\operatorname{Ass}_A(M)\cap\operatorname{Spec}S^{-1}A.
$$
自然映射
$$
M\to\prod_{\mathfrak{p}\in\operatorname{Ass}_A(M)}M_\mathfrak{p}
$$
是单射。
:::

::: proof
用局部化的定义及其理想对应，第一个等号以及
$\operatorname{Ass}_A(M)\cap\operatorname{Spec}S^{-1}A\subseteq\operatorname{Ass}_A(S^{-1}M)$
都是显然的，甚至无需 Noether。现取 $\mathfrak{p}\in\operatorname{Ass}_A(S^{-1}M)$，
设其为 $\operatorname{Ann}_A(m/s)$，$m\in M$，$s\in S$。
由 Noether 知 $\mathfrak{p}$ 有限生成，设其为 $(a_1,\ldots,a_n)$。
则由 $a_im/s=0$ 知存在 $s_i\in S$ 使得 $a_is_im\in M$ 是 $0$。
由此不难发现 $\operatorname{Ann}_A(s_1\cdots s_nm)=\mathfrak{p}$，
于是 $\mathfrak{p}\in\operatorname{Ass}_A(M)\cap\operatorname{Spec}S^{-1}A$。

如非零元 $m\in M$ 在上面的自然映射的核中，取 $Am\subseteq M$
的结合素理想 $\mathfrak{p}$；以 $Am$ 中其他元素替换
$m$ 可不妨设 $\mathfrak{p}=\operatorname{Ann}(m)$。
由 @子模商模，$\mathfrak{p}$ 是 $M$ 的结合素理想；
于是 $m$ 在局部化 $M\to M_\mathfrak{p}$ 的核中，说明存在
$s\notin\mathfrak{p}$ 使得 $sm=0$，与
$\mathfrak{p}=\operatorname{Ann}(m)$ 矛盾！命题得证。
:::

回忆 $A$-模 $M$ 的[[支集]]指的是满足 $M_\mathfrak{p}\ne0$
的素理想 $\mathfrak{p}$ 的集合，记作 $\operatorname{Supp}_A(M)$，
无歧义时常省略下标 $A$。

::: theorem [与支集的关系]
$\operatorname{Ass}_A(M)\subseteq\operatorname{Supp}_A(M)$。
如 $A$ Noether，则 $\operatorname{Supp}_A(M)$
中极小者都在 $\operatorname{Ass}_A(M)$ 中。特别地，如 $M$ 有限生成，则有
$\overline{\operatorname{Ass}_A(M)}=\operatorname{Supp}_A(M)$，
$\sqrt{\operatorname{Ann}_A(M)}=\bigcap_{\mathfrak{p}\in\operatorname{Ass}_A(M)}\mathfrak{p}$。
:::

::: proof
如 $\mathfrak{p}\in\operatorname{Ass}_A(M)$，
则由上一个命题 $\mathfrak{p}A_\mathfrak{p}\in
  \operatorname{Ass}_{A_\mathfrak{p}}(M_\mathfrak{p})$，
故 $M_\mathfrak{p}\ne0$，所以 $\operatorname{Ass}_A(M)\subseteq\operatorname{Supp}_A(M)$。
如 $\mathfrak{p}\in\operatorname{Supp}_A(M)$ 极小，
则 $\operatorname{Supp}_{A_\mathfrak{p}}(M_\mathfrak{p})=\{\mathfrak{p}\}$，
故 $\operatorname{Ass}_{A_\mathfrak{p}}(M_\mathfrak{p})=\{\mathfrak{p}\}$，
由上一个命题 $\mathfrak{p}\in\operatorname{Ass}_A(M)$。
如 $M$ 有限生成则 $\operatorname{Supp}_A(M)=V(\operatorname{Ann}(M))$，
在 $A$ 的谱中是闭集，由此不难得到最后一句话。
:::

::: proposition
$A$ 是 Noether 环，$f\colon M\to N$ 是 $A$-模同态。如果对每个
$\mathfrak{p}\in\operatorname{Ass}_A(M)$，$f$ 在 $\mathfrak{p}$ 处局部化都是单射，
那么 $f$ 就是单射。
:::

::: proof
记 $K=\ker(f)$，则它是 $M$ 的子模，故它的结合素理想都是 $M$ 的结合素理想。
由条件，对每个这样的素理想 $\mathfrak{p}$ 都有 $K_\mathfrak{p}=0$；
这样由 @局部化 最后一句话便知 $K=0$，$f$ 是单射。
:::

## 例子

- 整环的结合素理想只有 $0$。

- 固定域 $k$，考虑 $A=k[x,y]/(xy,y^2)$。
  则 $\operatorname{Ass}(A)=\{(y),(x,y)\}$，其中 $(y)$ 为极小素理想，$(x,y)$ 为嵌入素理想。

## 应用

常将结合素理想有限性与[[素理想回避]]一起使用，来得到模的非零因子。
结合素理想在 [[Cohen–Macaulay 环]]和[[正则环]]的理论中也是常用工具。

```terms
结合素理想:
  en: associated prime ideal
  de: assoziiertes Primideal
  fr: idéal premier associé
嵌入素理想:
  en: embedded prime
  de: eingebettetes Primideal
  fr: idéal premier plongé
```
