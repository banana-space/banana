---
title: 一阶语言中的证明
notices:
  - name: 问题
    items:
      - '“自由替换”引理似乎一般不成立：例如 $\varphi=\forall y(P(x,y))$、$t=y$ 时，按定义 $\mathrm{sub}^x_t$ 对 $\varphi$ 不是无冲突替换。'
      - “定义函数”中翻译操作第 4 项给出的 $\mathrm{T}(\phi')$ 似乎应为 $\neg\forall y_1(\dots(\mathrm{T}(t_1)\to(\dots\to\neg P_m(\dots))))$ 的形式（与第 2 项一致）；现在的写法要求所有 $y_i$ 都满足条件。
---

## Hilbert式推演系统一例

接下来，我们在最少的语境下定义证明这个概念。我们用到的定义方法并不是最简单的，但它是最经典的。

::: definition [全称概括]
对公式$\varphi$，
我们称形如$\forall x_{m_1}(\forall x_{m_2}(...(\forall x_{m_n}(\varphi))))$的公式为它的全称概括，
这里$n$和$m_1,...,m_n$都是自然数。
:::

::: definition [逻辑公理]
我们称以下八类公式的全称概括为逻辑公理。

1. $\varphi\to(\psi\to\varphi)$，这里$\varphi$和$\psi$是任意两个公式。

2. $(\varphi\to(\psi\to\phi))\to((\varphi\to\psi)\to(\varphi\to\phi))$，这里$\varphi$、
   $\psi$和$\phi$是任意三个公式。

3. $(\neg\psi\to\neg\varphi)\to((\neg\psi\to\varphi)\to\psi)$，这里$\varphi$和$\psi$是任意两个公式。

4. $\forall x(\varphi)\to\mathrm{sub}^x_t(\varphi)$，这里$\mathrm{sub}^x_t$对$\varphi$是无冲突替换。

5. $\forall x(\varphi\to\psi)\to(\forall x(\varphi)\to\forall x(\psi))$

6. $\varphi\to\forall x(\varphi)$，这里$x$不在$\varphi$中自由出现。

7. $x\approx x$。

8. $x\approx y\to(\varphi\to\varphi')$，这里$\varphi$是一个原子公式，
   $\varphi'$是把$\varphi$中的一部分$x$替换为$y$得到的新的原子公式。

所有的逻辑公理可以列举出来，我们记这个列举为$\Lambda_{fol}$。fol是first order logic的简写。
:::

::: remark*
所有的公理可以被列举出来并不是一件平凡的事实。
:::

::: definition [证明]
列举有穷或无穷个公式$\{\varphi_0,\varphi_1,...\}$，我们记这个列举为$\Gamma$。
我们称有序的有穷公式序列$\{\phi_0,\phi_1,...,\phi_n\}$是从$\Gamma$到公式$\phi_n$的证明，
若对每个下标$i\leq n$：

1. $\phi_i$是公理，或

2. $\phi_i$是某个$\varphi_k$，或

3. 存在两个小于$i$的下标$j,k$，使得$\phi_j$形如$(\phi_k\to\phi_i)$。

如果存在$\Gamma$到$\varphi$的证明，则称$\Gamma$证明$\varphi$，记为$\Gamma\vdash_{\Lambda}\varphi$，
通常简记为$\Gamma\vdash\varphi$。

如果我们的$\Gamma$没有列举任何公式，则特别地记之为$\varnothing$。
$\varnothing\vdash\varphi$通常简记为$\vdash\varphi$。
我们将在$\vdash\varphi$时称$\varphi$为一个定理。
:::

接下来，我们摆出一些关于证明的元定理，读者可以自行尝试证明它们。
它们都是常见的证明手段，因此直接承认其正确性也没太大关系。

::: lemma [循环替换]
如果$y$作为符号不在公式$\varphi$中出现，
则对任意变元$x$总有$\mathrm{sub}^y_x$对$\mathrm{sub}^x_y(\varphi)$是无冲突替换，
且进一步有$\mathrm{sub}^y_x(\mathrm{sub}^x_y(\varphi))$就是$\varphi$。
:::

::: lemma [自由替换]
对任意$\varphi$的自由变元$x$和项$t$，总有$\mathrm{sub}^x_t(\varphi)$是无冲突替换。
:::

::: lemma [约束替换]
任给公式$\varphi$、项$t$与变元$x$，我们总能构造一个公式$\phi$，满足：

1. $\varphi\vdash\phi$且$\phi\vdash\varphi$。

2. $\mathrm{sub}^x_t$对$\phi$是无冲突替换。

:::

::: theorem [概括定理]
如果$x$不在$\Gamma$的任何公式中自由出现，且$\Gamma\vdash\varphi$，
则$\Gamma\vdash\forall x(\varphi)$。
:::

::: theorem [紧致定理]
如果$\Gamma\vdash\varphi$，
则可以列举出$\Gamma$中的有限个公式$_{fin}\Gamma=\{\varphi_0,...,\varphi_n\}$使得
$_{fin}\Gamma\vdash\varphi$。fin是finite的简写。
:::

::: theorem [演绎定理]
$\{\varphi_0,...,\varphi_n\}\vdash\varphi$当且仅当
$\{\varphi_0,...,\varphi_{n-1}\}\vdash(\varphi_n\to\varphi)$。
:::

::: theorem [逆否定理]
$\{\varphi_0,...,\varphi_n\}\vdash\neg\varphi$当且仅当
$\{\varphi_0,...,\varphi_{n-1},\varphi\}\vdash\neg\varphi_n$。
:::

::: theorem [反证法]
如果有公式$\psi$使得$\{\varphi_0,...,\varphi_n,\varphi\}\vdash\psi$且
$\{\varphi_0,...,\varphi_n,\varphi\}\vdash\neg\psi$，则$\{\varphi_0,...,\varphi_n\}\vdash\varphi$。
:::

## 公理化理论

接下来，我们讨论给定了一些非逻辑公理后能证明的全体公式。

::: definition [公理]
任意一次对有穷或无穷个公式$\{\varphi_0,...\}$的列举$\Lambda$都可以称作公理组，其中的公式称作公理。
:::

::: definition [公理组中的证明与定理]
类比$\Lambda=\Lambda_{fol}$的情况，我们可以定义$\Gamma\vdash_{\Lambda}\varphi$。
这称作公理组中的证明。

我们将在$\vdash_{\Lambda}\varphi$即$\Lambda\vdash\varphi$时称$\varphi$是公理组$\Lambda$下的定理。
:::

::: definition [一致与完全]
如果存在公式$\varphi$使得$\vdash_{\Lambda}\varphi$且$\vdash_{\Lambda}\neg\varphi$，
则称公理组$\Lambda$不一致。如果$\Lambda$不是不一致的，则称$\Lambda$是一致的。

如果对任何公式$\varphi$，总有$\vdash_{\Lambda}\varphi$或$\vdash_{\Lambda}\neg\varphi$之一，
则称公理组$\Lambda$完全。如果$\Lambda$不是完全的，则称$\Lambda$是不完全的。
:::

::: remark*
显然按照这个定义不一致的公理组一定是完全的，但我们很少考虑这种堪称恶堕的情况。
:::

我们的数学总是在某个公理系统下进行推理，并证明各种各样的定理。
然而，我们还常常进行定义，以简化定理的表述，在此我们有必要对这一行动做一形式化的解释。
我们显然只能定义两种对象：一种是谓词，一种是函数。我们将在下面处理它们。

::: definition [定义谓词]
在语言$\mathcal{L}=(n_f,n_P,a_f,a_P)$的公理组$\Lambda$下，
含有$n$个自由变元$x_{m_1},...,x_{m_n}$的公式$\varphi$定义了一个$n$元谓词$P_\varphi$指的是以下行为：

考虑新的语言$\mathcal{L}'=(n_f,n_P+1,a_f,a_P')$，$a_P'$与$a_P$对$m<n_P$的取值相同，
且$a_P'(n_P)$等于上面指定的$n$。
我们记这一新语言中的$P_{n_P}$为$P_\varphi$，并考虑以下的翻译操作$\mathrm{T}$，
它将$\mathcal{L}'$下的公式$\phi'$翻译为$\mathcal{L}$中的公式$\mathrm{T}(\phi')$：

1. 对形如$P_m(t_1,...,t_k)$的$\phi'$，若$m<n_P$则$\mathrm{T}(\phi')$就是$\phi'$，
   若$m=n_P$则$\mathrm{T}(\phi')$是
   $\mathrm{sub}^{x_{m_1}}_{t_1}(...(\mathrm{sub}^{x_{m_n}}_{t_n}(\varphi')))$，
   显然这$n$次替换对$\varphi'$都是无冲突的。

2. 别的情况归纳新增的部分没有变化。

显然$\mathcal{L}$中的公式与项都可以自然地视为$\mathcal{L}'$中的公式与项，
因此$\Lambda$也可以视为$\mathcal{L}'$的公理组。
我们向其中再引入全体以下两条公理，形成一个$\mathcal{L}'$中的公理组$\Lambda'$：

1. $\varphi(x_{m_1},...,x_{m_n})\to P_\varphi(x_{m_1},...,x_{m_n})$

2. $P_\varphi(x_{m_1},...,x_{m_n})\to\varphi(x_{m_1},...,x_{m_n})$

另一个显然的观察是对$\mathcal{L}$中的公式$\phi$总有$\mathrm{T}(\phi)=\phi$。
:::

::: theorem
在$\mathcal{L}'$中总有$\mathrm{T}(\phi')\vdash_{\Lambda'}\phi'$且
$\phi'\vdash_{\Lambda'}\mathrm{T}(\phi')$。
:::

::: proof
归纳，细节是简单的。
:::

::: corollary
特别地，
在$\mathcal{L}'$中$\vdash_{\Lambda'}\phi'$当且仅当在$\mathcal{L}$中
$\vdash_{\Lambda}\mathrm{T}(\phi')$。因此，$\Lambda'$与$\Lambda$具有相同的一致性和完全性。
:::

::: definition [定义函数]
在语言$\mathcal{L}=(n_f,n_P,a_f,a_P)$的公理组$\Lambda$下，
一个含有$n+1$个自由变元$x_{m_0},x_{m_1},...,x_{m_n}$的公式$\varphi$若还满足
$$
\vdash_{\Lambda}\forall x_{m_1}(...(\forall x_{m_n}(\neg\forall y(\mathrm{sub}^{x_{m_0}}_y(\varphi)\to\neg\forall x_{m_0}(\varphi\to y\approx x_{m_0})))))
$$
则我们说$\varphi$定义了一个$n$元函数$f_{\varphi}$的时候指的是以下行为：

考虑新的语言$\mathcal{L}'=(n_f+1,n_P,a_f',a_P)$，$a_f'$与$a_f$对$m<n_f$取值相同，
且$a_f'(n_f)$等于上面指定的$n$。
我们记这一新语言中的$f_{n_f}$为$f_\varphi$，并考虑以下的翻译操作$\mathrm{T}$，
它将$\mathcal{L}'$下的项$t'$和公式$\phi'$都翻译为$\mathcal{L}$中的公式：

1. 对于形如$x_m$的项$t'$，$\mathrm{T}(t')$就是$y\approx x_m$，
   这里$y$是一个新引入的不同于$x_m$的变元符号。

2. 对于形如$f_m(t_1,...,t_{a_f'(m)})$且$m<n_f$的项$t'$，
   列举每个项$t_i$的自由变元记为$t_i(x_{i,1},...,x_{i,k_i})$，
   假定$\mathrm{T}(t_i)$新引入的变元符号是$y_i$，由自由替换引理不妨设以上所有变元符号皆两两不同，
   这个$\mathrm{T}(t')$是
   $\neg\forall y_1(...(\forall y_{a_f'(m)}(\mathrm{T}(t_1)\to(...\to(\mathrm{T}(t_{a_f'(m)})\to\neg y\approx f_m(y_1,...,y_{a_f'(m)}))))))$，
   这里$y$是一个新引入的不同于以上所有变元符号的变元符号。

3. 对于形如$f_m(t_1,...,t_{a_f'(m)})$且$m=n_f$的项$t'$，此时$a_f'(m)=n$，
   仍列举每个项$t_i$的自由变元记为$t_i(x_{i,1},...,x_{i,k_i})$，
   假定$\mathrm{T}(t_i)$新引入的变元符号是$y_i$，由自由替换引理不妨设以上所有变元符号皆两两不同，
   且均与$x_{m_0},...,x_{m_n}$两两不同，
   这个$\mathrm{T}(t')$是
   $\neg\forall y_1(...(\forall y_n(\mathrm{T}(t_1)\to(...\to(\mathrm{T}(t_n)\to\neg \mathrm{sub}^{x_{m_0}}_{y}(\mathrm{sub}^{x_{m_1}}_{y_1}(...(\mathrm{sub}^{x_{m_n}}_{y_n}(\varphi)))))))))$，
   这里$y$是一个新引入的不同于以上所有变元符号的变元符号。

4. 对于形如$P_m(t_1,...,t_{a_P(m)})$的公式$\phi'$，
   仍列举每个项$t_i$的自由变元记为$t_i(x_{i,1},...,x_{i,k_i})$，
   假定$\mathrm{T}(t_i)$新引入的变元符号是$y_i$，不妨设以上所有变元符号皆两两不同，
   $\mathrm{T}(\phi')$是
   $\forall y_1(...(\forall y_{a_P(m)}(\neg(\mathrm{T}(t_1)\to(...\to(\mathrm{T}(t_{a_P(m)})\to\neg P_m(y_1,...,y_{a_{P}(m)})))))))$。

5. 对于别的情况的公式，归纳新增的部分没有变化。

显然$\mathcal{L}$中的公式与项都可以自然地视为$\mathcal{L}'$中的公式与项，
因此$\Lambda$也可以视为$\mathcal{L}'$的公理组。
我们向其中再引入全体以下两条公理，形成一个$\mathcal{L}'$中的公理组$\Lambda'$：

1. $\varphi(x_{m_0},x_{m_1},...,x_{m_n})\to x_{m_0}\approx f_\varphi(x_{m_1},...,x_{m_n})$

2. $x_{m_0}\approx f_\varphi(x_{m_1},...,x_{m_n})\to\varphi(x_{m_0},x_{m_1},...,x_{m_n})$

:::

::: theorem
对$\mathcal{L}$中的公式$\phi$，
将之视为$\mathcal{L}'$中的公式后得到的$\mathrm{T}(\phi)$仍是$\mathcal{L}$中的公式，
且$\phi\vdash\mathrm{T}(\phi)$且$\mathrm{T}(\phi)\vdash\phi$。
:::

::: proof
归纳，细节繁而不难。
:::

::: theorem
在$\mathcal{L}'$中总有$\mathrm{T}(\phi')\vdash_{\Lambda'}\phi'$且
$\phi'\vdash_{\Lambda'}\mathrm{T}(\phi')$。
:::

::: proof
归纳，细节繁而不难。
:::

::: corollary
特别地，
在$\mathcal{L}'$中$\vdash_{\Lambda'}\phi'$当且仅当在$\mathcal{L}$中
$\vdash_{\Lambda}\mathrm{T}(\phi')$。因此，$\Lambda'$与$\Lambda$具有相同的一致性和完全性。
:::

最后，我们定义一些通用的逻辑符号。用它们写的句子将被视为对应的句子转写。

::: definition
我们定义以下符号。

1. $\exists x(\varphi)$指的是$\neg\forall x(\neg\varphi)$。

2. $\varphi\vee\psi$指的是$\neg\varphi\to\psi$。

3. $\varphi\wedge\psi$指的是$\neg(\neg\varphi\vee\neg\psi)$。

4. $\varphi\leftrightarrow\psi$指的是$(\varphi\to\psi)\wedge(\psi\to\varphi)$。

:::
