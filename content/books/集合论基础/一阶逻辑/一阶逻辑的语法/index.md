---
title: 一阶逻辑的语法
notices:
  - name: 问题
    items:
      - “语言的扩张”一节中，关于无嵌套公式的定理、可定义扩张的翻译定理与保守性定理缺少证明，翻译函数 $\mathrm{Trans}$ 的定义缺少具体内容。
      - “证明”一节的逻辑公理定义中称“以下六类公式”，但列出了八条。
---

我们先来考虑一类最简单的逻辑系统，它容许有穷长的公式。

## 语言对象的定义

::: definition
一个一阶语言要求提供以下资料：

1. 一个固定的可列集$X=\{x_n|n\in\omega\}$，这里面的元素称为变元符号。

2. 一个固定的集合$\mathrm{LSym}=\{\forall,\neg,\to,\approx,(,),,\}$，最后的逗号是这个集合中的元素。

3. 一个集合$\mathcal{F}=\{f_i|i\in I_F\}$和一个$a_F:\mathcal{F}\to\omega$，
   $\mathcal{F}$中的元素称为函数符号，$a_F$给它的值称为这个函数的元数。

4. 一个集合$\mathcal{P}=\{P_i|i\in I_P\}$和一个$a_P:\mathcal{P}\to\omega$，
   $\mathcal{P}$中的元素称为谓词符号，$a_P$给它的值称为这个谓词的元数。

不妨要求它们两两不交。
我们将它们合计为$\mathcal{L}=\{a_F,a_P\}$，但很多时候我们会根据上下文来确定元数，
所以也会写$\mathcal{L}=\{\mathcal{F},\mathcal{P}\}$。

我们将记它的字符表为$\mathrm{Char}=X\cup\mathrm{LSym}\cup\mathcal{F}\cup\mathcal{P}$，
因为我们已经默认了这些集合两两不交因此我们也默认可以从一个字符$c\in\mathrm{Char}$
直接看出它是以上四个集合中哪一个集合中的元素。

我们将记$\mathrm{Char}^{<\omega}=\{f:n\to\mathrm{Char}|n\in\omega\}$中的元素$f:n\to\mathrm{Char}$为
$\langle f(0),...,f(n-1)\rangle$，称为一个字符串。
字符串的串接操作我们记为$\Box$，
即
$\langle f_0,...,f_{n-1}\rangle\Box\langle g_0,...,g_{m-1}\rangle=\langle f_0,...,f_{n-1},g_0,...,g_{m-1}\rangle$。

我们称$|\mathcal{L}|=|\mathrm{Char}^{<\omega}|=\mathrm{max}\{\aleph_0,|\mathrm{Char}|\}$
为这个语言的基数。
:::

::: remark*
如果没有选择公理，$\mathcal{F}$与$\mathcal{P}$上面是否有良序就可能造成阻碍，
我们会默认它们是良序化了的。
我们会用$\mathcal{L}::I_F$来指代这个语言中的刚才的定义中提到的指标集$I_F$，
同样的记法可以在符号使用过多的时候避免一定的困惑，就好像是在访问一个结构体的内部对象一样。
:::

::: definition
给定一个$\mathcal{L}$，我们要指定其中一些具有特殊意义的字符串。

我们如下递归地定义项：

1. $\langle x_n\rangle$是项。

2. 如果$t_0,...,t_{n-1}$是项，$f$是$n$元函数符号，
   则
   $\langle f,(\rangle\Box t_0\Box\langle ,\rangle\Box t_1\Box...\Box \\t_{n-1}\Box\langle )\rangle$
   是项。

所有项构成的集合不妨记为$\mathrm{Term}\subseteq\mathrm{Char}^{<\omega}$。

我们如下递归地定义公式：

1. 如果$t_0,t_1$是项，则$t_0\Box\langle\approx\rangle\Box t_1$是公式。

2. 如果$t_0,...,t_{n-1}$是项，$P$是$n$元谓词符号，
   则
   $\langle P,(\rangle\Box t_0\Box\langle ,\rangle\Box t_1\Box...\Box \\t_{n-1}\Box\langle )\rangle$
   是公式。

3. 如果$\varphi$是公式，则$\langle\neg\rangle\Box\varphi$是公式。

4. 如果$\varphi$和$\psi$是公式，
   则$\langle(\rangle\Box\varphi\Box\langle\to\rangle\Box\psi\Box\langle)\rangle$是公式。

5. 如果$\varphi$是公式，$x$是变元符号，
   则$\langle\forall,x,(\rangle\Box\varphi\Box\langle)\rangle$是公式。

所有公式构成的集合不妨记为$\mathrm{Formula}\subseteq\mathrm{Char}^{<\omega}$。
全体形如$t_0\approx t_1$或$P(t_0,...,t_{n-1})$的公式均称为原子公式，
构成的集合记为$\mathrm{AFormula}$。
不含量词$\forall$的公式称作无量词公式，全体无量词公式构成的集记为$\mathrm{qfFormula}$。

由于显而易见的原因，今后我们会在元语言里面直接操作字符串，
例如$\langle\neg\rangle\Box\varphi$就会直接写成$\neg\varphi$。
:::

::: remark*
这里的递归定义基于以下事实：$\mathrm{Char}$有一个天然的良序，
进而$\mathrm{Char}^{<\omega}$上也有一个天然的良序。
我们所做的事就是在这个良序上给出一个判断，指出每个字符串是项或者不是项，是公式或者不是公式。
如果你不会构造$\mathrm{Char}^{<\omega}$上的这个良序，可以看定理5.7.13。
:::

## 证明

接下来是证明的概念，我们目前还是先用Hilbert式的推演系统。首先我们复刻之前定义过的对公式的操作。

::: definition [自由出现]
我们称变元$x$在公式$\varphi$中出现，若$x\in\mathrm{dom}\varphi$。
由于$\varphi$有穷，我们得到一个函数$\mathrm{Var}:\mathrm{Formula}\to [X]^{<\omega}$，
这里$[X]^{<\omega}=\{_{fin}X\subseteq X||_{fin}X|<\aleph_0\}$，它指出出现在这个公式中的全体变元。

对每个变元$x$，我们对公式$\varphi$递归地定义$x\in\mathrm{fVar}(\varphi)$，
称作$x$在$\varphi$中自由出现，如下：

1. $x$在$t_0\approx t_1$中自由出现当且仅当它出现。

2. $x$在$P(t_0,...,t_{n-1})$中自由出现当且仅当它出现。

3. $x$在$\neg\varphi$中自由出现当且仅当它在$\varphi$中自由出现。

4. $x$在$(\varphi\to\psi)$中自由出现当且仅当它在$\varphi$或$\psi$中自由出现。

5. $x$在$\forall x_n(\varphi)$中自由出现当且仅当它在$\varphi$中自由出现且$x_n$不是$x$。

自然地，我们定义的这个性质给出一个函数$\mathrm{fVar}:\mathrm{Formula}\to [X]^{<\omega}$，
它指出自由出现在这个公式中的全体变元。
我们有时也会写$\varphi(x_0,...,x_n)$以指出$\mathrm{fVar}(\varphi)=\{x_0,...,x_n\}$。

如果$\mathrm{fVar}(\varphi)=\varnothing$，则称$\varphi$是一个闭公式，或者称之为一个语句。
通常我们用$\sigma,\tau$等符号表示语句，全体语句构成$\mathrm{Formula}$的子集$\mathrm{Sentence}$。
:::

::: definition [无冲突替换]
给定$x\in X$与$t\in\mathrm{Term}$，
我们定义一个操作$\mathrm{sub}^x_t:\mathrm{Formula}\to\mathrm{Formula}$，
它递归地将公式变为另一个公式：

1. $\mathrm{sub}^x_t(t_0\approx t_1)$是$\varphi=t_0\approx t_1$这一字符串中所有$x$出现的地方都将$x$
   替换为$t$得到的新公式。
   具体而言，
   我们将$\varphi$分解为
   $\varphi_0\Box\langle x\rangle\Box\varphi_1\Box...\Box\\\langle x\rangle\Box\varphi_n$，
   使得$\varphi_i$中$x$均不出现，
   然后令$\mathrm{sub}^x_t(\varphi)=\varphi_0\Box t\Box\varphi_1\Box...\Box t\Box\varphi_n$

2. $\mathrm{sub}^x_t(P(t_0,...,t_{n-1}))$是$\varphi= P(t_0,...,t_{n-1})$这一字符串中所有$x$
   出现的地方都将$x$替换为$t$得到的新公式，具体操作同上。

3. $\mathrm{sub}^x_t(\neg\varphi)$是$\neg\mathrm{sub}^x_t(\varphi)$。

4. $\mathrm{sub}^x_t((\varphi\to\psi))$是$(\mathrm{sub}^x_t(\varphi)\to\mathrm{sub}^x_t(\psi))$。

5. 若$y=x$则$\mathrm{sub}^x_t(\forall y(\varphi))$仍然是$\forall y(\varphi)$，
   若$y\not=x$则$\mathrm{sub}^x_t(\forall y(\varphi))$是$\forall y(\mathrm{sub}^x_t(\varphi))$。

我们继续递归地对每个公式$\phi$定义$\mathrm{sub}^x_t$对$\phi$是否是无冲突替换。

1. 形如$t_0\approx t_1$的公式$\phi$，$\mathrm{sub}^x_t$对$\phi$总是无冲突替换。

2. 形如$P(t_1,...,t_n)$的公式$\phi$，$\mathrm{sub}^x_t$对$\phi$总是无冲突替换。

3. 形如$\neg\varphi$的公式$\phi$，
   $\mathrm{sub}^x_t$对$\phi$是无冲突替换当且仅当$\mathrm{sub}^x_t$对$\varphi$是无冲突替换。

4. 形如$(\varphi\to\psi)$的公式$\phi$，
   $\mathrm{sub}^x_t$对$\phi$是无冲突替换当且仅当$\mathrm{sub}^x_t$对$\varphi$和$\psi$
   都是无冲突替换。

5. 形如$\forall y(\varphi)$的公式$\phi$，
   $\mathrm{sub}^x_t$对$\phi$是无冲突替换当且仅当$x$不在$\phi$中自由出现，
   或$\mathrm{sub}^x_t$对$\varphi$是无冲突替换且$y$不在$t$中出现。

我们将在无冲突替换时将$\mathrm{sub}$写成$\mathrm{Sub}$以示区别。
:::

::: remark*
我们写$x=y$指的是这两个字符是同一个字符，这与公式$x\approx y$不一样。
:::

接下来，我们定义逻辑公理。

::: definition [逻辑公理]
对任何公式$\varphi$，
每个形如$\forall x_{n_0}(\forall x_{n_1}(...\forall x_{n_{m-1}}(\varphi)))$的公式都称为$\varphi$
的全称概括，这里$n_0,...,n_{m-1}$是任意$m$个自然数，$m$也是自然数。
$\varphi$的全体全称概括构成的集合记为$\bar{\forall}\varphi$，称为$\varphi$的全称闭包。

我们称以下六类公式的全称概括为逻辑公理。

1. $\varphi\to(\psi\to\varphi)$，这里$\varphi$和$\psi$是任意两个公式。

2. $(\varphi\to(\psi\to\phi))\to((\varphi\to\psi)\to(\varphi\to\phi))$，这里$\varphi$，
   $\psi$和$\phi$是任意三个公式。

3. $(\neg\psi\to\neg\varphi)\to((\neg\psi\to\varphi)\to\psi)$，这里$\varphi$和$\psi$是任意两个公式。

4. $\forall x(\varphi)\to\mathrm{Sub}^x_t(\varphi)$，这里$\mathrm{Sub}^x_t$对$\varphi$是无冲突替换。

5. $\forall x(\varphi\to\psi)\to(\forall x(\varphi)\to\forall x(\psi))$

6. $\varphi\to\forall x(\varphi)$，这里$x$不在$\varphi$中自由出现。

7. $x\approx x$。

8. $x\approx y\to(\varphi\to\varphi')$，这里$\varphi$是一个原子公式，
   $\varphi'$是把$\varphi$中的一部分$x$替换为$y$得到的新的原子公式。
   这个部分替换的具体细节可以参考之前我们定义替换时所做的操作。

我们记所有逻辑公理构成的集合为$\mathrm{Fol}\subseteq\mathrm{Formula}$。
Fol是first order logic的首字母缩写。
:::

最后，我们定义证明这一概念。

::: definition
满足以下条件的$\mathrm{Formula}^{<\omega}$中的元素$\langle\varphi_0,...,\varphi_n\rangle$
将被称作从公式集$\Gamma\subseteq\mathrm{Formula}$到公式$\varphi_n$的证明序列：对于任意的$i\in n+1$，
$\varphi_i$满足

1. $\varphi_i\in\mathrm{Fol}$，或

2. $\varphi_i\in\Gamma$，或

3. $\exists j,k\in i(\varphi_j=(\varphi_k\to\varphi_i))$，这个等号是指作为字符串相等。
   这个行为又称作应用分离规则（MP，Modus Ponens）从$\varphi_j$和$\varphi_k$中得到$\varphi_i$，
   或者说是用$\varphi_k$从$\varphi_j$中分离出$\varphi_i$。

如果存在$\Gamma$到$\varphi$的证明序列，则称$\Gamma$证明$\varphi$，记为$\Gamma\vdash\varphi$。
我们将$\{\psi\}\vdash\varphi$简记为$\psi\vdash\varphi$。
:::

我们顺带定义理论的概念。

::: definition
$\mathrm{Sentence}$的子集称作理论。我们通常用$T$代表一个理论。
:::

最后，我们指出一致与完全的概念。

::: definition
我们会把一个第七条逻辑公理的一个全称概括$\forall x_0(x_0\approx x_0)$记为$\top$，
将$\neg\top$记为$\bot$。

对句子集$\Gamma$，如果$\Gamma\not\vdash\bot$，则称$\Gamma$是一致的。
如果任给语句$\sigma$都有$\Gamma\vdash\sigma$或$\Gamma\vdash\neg\sigma$，则称$\Gamma$是完全的。
注意，完全性并不要求证明或证否每个公式。
:::

## 证明的性质

我们来形式化一系列元定理，换言之它们都是关于证明的定理。下面提到的$\Gamma$默认是一个公式集。

::: theorem [证明的紧致性]
如果$\Gamma\vdash\varphi$，
则存在$\Gamma$的有穷子集$_{fin}\Gamma\subseteq\Gamma$使得$_{fin}\Gamma\vdash\varphi$。
:::

::: proof
任取一个证明序列，将其中出现过的全体$\Gamma$中的公式收集起来。
由于证明序列是有穷长的，所收集到的公式自然也只有有穷多个，且显然这些公式足以证明$\varphi$。
:::

接下来，我们先给出两个重要定理。

::: theorem [演绎定理]
$\Gamma\cup\{\psi\}\vdash\varphi$当且仅当$\Gamma\vdash(\psi\to\varphi)$。
:::

::: proof
当是因为我们可以往证明序列里面加一个$\psi$，然后用它从$\psi\to\varphi$中分离出$\varphi$。

为了证明仅当，
我们设$\langle \varphi_0,...,\varphi_{n-1},\varphi_n=\varphi\rangle$是一个$\Gamma\cup\{\psi\}$到
$\varphi$的证明，我们归纳地证明对每个$i\in n+1$都有$\Gamma\vdash(\psi\to\varphi_i)$即可。

1. 如果$\varphi_i\in\mathrm{Fol}\cup\Gamma\cup\{\psi\}$，
   用$\varphi_i$自己就可以直接从第一条逻辑公理中分离出$\psi\to\varphi_i$。

2. 如果$\varphi_i$是由$\varphi_{k}$从$\varphi_j=(\varphi_k\to\varphi_i)$中分离而来的，
   根据归纳假设我们有$\Gamma\vdash(\psi\to\varphi_k)$和
   $\Gamma\vdash(\psi\to(\varphi_j\to\varphi_i))$，将这两个证明序列拼在一起，
   然后用$(\psi\to(\varphi_k\to\varphi_i))$从第二条逻辑公理中分离出
   $((\psi\to\varphi_k)\to(\psi\to\varphi_i))$，
   再用$(\psi\to\varphi_k)$从其中分离出$(\psi\to\varphi_i)$。

因此归纳完毕，取$i=n$即得到$\Gamma\vdash(\psi\to\varphi)$。
:::

::: theorem [概括定理]
如果$\Gamma\vdash\varphi$且$x$不在$\Gamma$的任何公式中自由出现，则$\Gamma\vdash\forall x(\varphi)$。
:::

::: proof
假设$\langle\varphi_0,...,\varphi_n=\varphi\rangle$是$\Gamma$到$\varphi$的证明序列，
我们归纳地证明对每个$i\in n+1$都有$\Gamma\vdash\forall x(\varphi_i)$。

1. 如果$\varphi_i\in\mathrm{Fol}$，则根据定义有$\forall x(\varphi_i)\in\mathrm{Fol}$。

2. 如果$\varphi_i\in\Gamma$，则我们可以用$\varphi_i$从第六条逻辑公理中分离出$\forall x(\varphi_i)$。

3. 如果$\varphi_i$是由$\varphi_{k}$从$\varphi_j=(\varphi_k\to\varphi_i)$中分离而来的，
   根据归纳假设我们有$\Gamma\vdash\forall x(\varphi_k)$和
   $\Gamma\vdash\forall x(\varphi_j\to\varphi_i)$，将这两个证明序列拼在一起，
   然后用$\forall x(\varphi_k\to\varphi_i)$从第五条逻辑公理中分离出
   $(\forall x(\varphi_k)\to\forall x(\varphi_i))$，
   再用$\forall x(\varphi_k)$从其中分离出$\forall x(\varphi_i)$。

因此归纳完毕，取$i=n$即得到$\Gamma\vdash\forall x(\varphi)$。
:::

::: remark*
可以看出，演绎定理和概括定理的证明方法是完全一样的。
:::

关于交换量词，我们有以下显然的定理。

::: theorem
$\forall x(\forall y(\varphi))\vdash\forall y(\forall x(\varphi))$对任何公式$\varphi$成立。
:::

::: proof
用第四条公理得出$\forall x(\forall y(\varphi))\vdash\varphi$，
然后再根据$x,y$均不在左侧自由出现用概括定理把量词按照我们需要的顺序装上去即可。
:::

因此，我们做以下方便的约定。

::: definition
$\forall x\forall y(\varphi)$是$\forall x(\forall y(\varphi))$的简写，
$\varphi\to\psi\to\phi$是$(\varphi\to(\psi\to\phi))$的简写。
:::

关于否定和$\bot$的关系，我们仍然有以下元定理。
它们的证明都只用到前三条逻辑公理，详细的证明我们留给读者。

::: theorem
任给公式$\varphi$和$\psi$，我们总有以下定理：

1. $\vdash\neg\neg\varphi\to\varphi$

2. $\vdash\varphi\to\neg\neg\varphi$

3. $\vdash((\varphi\to\psi)\to((\varphi\to\neg\psi)\to\neg\varphi))$

4. $\vdash(\neg\varphi\to(\varphi\to\psi))$

5. $\vdash((\varphi\to\psi)\to(\neg\psi\to\neg\varphi))$

6. $\vdash((\varphi\to\psi)\to((\varphi\to\neg\psi)\to\neg\varphi))$

7. $\vdash(\varphi\to(\neg\psi\to\neg(\varphi\to\psi)))$

类似的只用前三条逻辑公理就能证明的事实我们今后不再特别指出。
:::

关于等词公理给出的一些结果，我们也列举如下，并不再证明。

::: theorem
除了公理$\forall x(x\approx x)$外，我们有以下定理：

1. $\vdash\forall x\forall y(x\approx y\to y\approx x)$

2. $\vdash\forall x\forall y\forall z(x\approx y\to y\approx z\to x\approx z)$

3. $\vdash\forall x_{r_0}...\forall x_{r_{n-1}}\forall x_{s_0}...\forall x_{s_{n-1}}(x_{r_0}\approx x_{s_0}\to...\to x_{r_{n-1}}\approx x_{s_{n-1}}\to P(x_{r_0},\\...,x_{r_{n-1}})\to P(x_{s_0},...,x_{s_{n-1}}))$，
   这里$P$是任意一个$n$元谓词符号。

4. $\vdash\forall x_{r_0}...\forall x_{r_{n-1}}\forall x_{s_0}...\forall x_{s_{n-1}}(x_{r_0}\approx x_{s_0}\to...\to x_{r_{n-1}}\approx x_{s_{n-1}}\to f(x_{r_0},\\...,x_{r_{n-1}})\approx f(x_{s_0},...,x_{s_{n-1}}))$，
   这里$f$是任意一个$n$元函数符号。

:::

我们最后来证明那些关于替换的元定理。

::: theorem [自由替换]
对任意$\varphi$的自由变元$x$和任意项$t$，总有$\mathrm{sub}^x_t(\varphi)$是无冲突替换。
:::

::: proof
对$\varphi$的结构归纳，根据无冲突替换的定义进行证明是简单的。
:::

::: theorem [循环替换]
如果$y$作为符号不在公式$\varphi$中出现，
则对任意变元$x$总有$\mathrm{sub}^y_x$对$\mathrm{sub}^x_y(\varphi)$是无冲突替换，
且进一步有$\mathrm{sub}^y_x(\mathrm{sub}^x_y(\varphi))$就是$\varphi$。
:::

::: proof
这是因为$y$在$\mathrm{sub}^x_y(\varphi)$中一定作为自由变元出现。
:::

::: theorem [约束替换]
任给公式$\varphi$，项$t$与变元$x$，我们总能构造一个公式$\varphi'$，满足：

1. $\varphi\vdash\varphi'$且$\varphi'\vdash\varphi$。

2. $\mathrm{sub}^x_t$对$\varphi'$是无冲突替换。

:::

::: proof
固定$t$和$x$，我们对$\varphi$的结构作归纳。

1. $\varphi$形如$t_0\approx t_1$，则令$\varphi'=\varphi$。

2. $\varphi$形如$P(t_0,...,t_{n-1})$，则令$\varphi'=\varphi$。

3. $\varphi$形如$\neg\psi$，则令$\varphi'=\neg\psi'$。

4. $\varphi$形如$(\psi\to\phi)$，则令$\varphi'=(\psi'\to\phi')$。

5. $\varphi$形如$\forall y(\psi)$，则新选一个不在$\psi'$和$t$中出现且不同于$x,y$的新变元符号$z$，
   令$\varphi'=\forall z(\mathrm{sub}^y_z(\psi'))$。

归纳地可见$\varphi$与$\varphi'$仅仅是约束变元（不自由的变元）不同。
我们归纳地证明这个构造满足题中两个要求，唯一值得注意的就是第五条归纳满足第一条要求的证明。

对$\varphi'=\forall z(\mathrm{sub}^y_z(\psi'))$的情况，一方面：归纳假设给出$\psi\vdash\psi'$，
所以$\forall y(\psi)\vdash\forall y(\psi')$，
由$z$不在$\psi'$中出现可知$\forall y(\psi')\vdash\mathrm{sub}^y_z(\psi')$，
最后由$z$不在$\forall y(\psi')$中出现用概括定理得到
$\forall y(\psi')\vdash \forall z(\mathrm{sub}^y_z(\psi'))$；另一方面，
$\forall z(\mathrm{sub}^y_z(\psi'))\vdash\mathrm{sub}^z_y\mathrm{sub}^y_z(\psi')$，
根据循环替换右侧就是$\psi'$，然后归纳假设给出$\psi'\vdash\psi$，
最后$y$不在左侧自由出现和概括定理指出$\forall z(\mathrm{sub}^y_z(\psi'))\vdash\forall y(\psi)$。
:::

## 语言的扩张

::: definition
我们称语言$\mathcal{L}'$是语言$\mathcal{L}$的一个扩张，或者$\mathcal{L}$是$\mathcal{L}'$的收缩，
若$\mathcal{L}::a_F\subseteq\mathcal{L}'::a_F$，且$\mathcal{L}::a_P\subseteq\mathcal{L}'::a_P$。
:::

我们先指出大部分常用的逻辑连接词的形式化。

::: definition
我们作以下简写方案。

1. $\neg\forall x(\neg(\varphi))$写为$\exists x(\varphi)$。

2. $(\neg\varphi\to\psi)$写为$(\varphi\vee\psi)$。

3. $\neg(\varphi\to\neg\psi)$写为$(\varphi\wedge\psi)$。

4. $((\varphi\to\psi)\wedge(\psi\to\varphi))$写为$(\varphi\leftrightarrow\psi)$。

5. $\exists y(\forall z(\mathrm{sub}^y_z(\varphi)\leftrightarrow y\approx z))$写为
   $\exists !y(\varphi)$，这里$y$在$\varphi$中自由出现，$z$不在$\varphi$中出现。

:::

我们现在来关心一类特别的扩张，它好像能说的更多，但其实只是说得更方便。

::: definition
给定语言$\mathcal{L}$上的理论$T$，再给定$\mathcal{L}'$作为$\mathcal{L}$的扩张。
我们特别命名以下$\mathcal{L}'$句子：

1. 一个$n$元谓词符号$P\in\mathcal{L}'::\mathcal{P}$的$\mathcal{L}$定义指的是形如
   $\forall x_0...\forall x_{n-1}(P(x_0\\,...,x_{n-1})\leftrightarrow \varphi_P)$的句子，
   这里$\varphi_P$是一个自由变元集包含于$\{x_0,...,\\x_{n-1}\}$的$\mathcal{L}$公式。

2. 一个$n$元函数符号$f\in\mathcal{L}'::\mathcal{F}$的$\mathcal{L}$定义指的是形如
   $\forall x_0...\forall x_{n-1}\forall x_n(\\f(x_0,...,x_{n-1})\approx x_n\leftrightarrow \varphi_f)$
   的句子，这里$\varphi_f$是一个自由变元集包含于$\{x_0,...,x_n\}$的$\mathcal{L}$公式。

对函数符号$f$的$\mathcal{L}$定义，
如果$T\vdash\forall x_0...\forall x_{n-1}\exists !x_{n}(\varphi_f)$，则称$T$确证这个定义，
此时称这个定义是$T$定义。谓词符号的定义无需确证条件也可直接称为$T$定义。
:::

::: definition
一个$\mathcal{L}'$的理论$T'$称作$\mathcal{L}$理论$T$的可定义扩张，若：

1. $\mathcal{L}'$是$\mathcal{L}$的扩张，$T\subseteq T'$。

2. 存在一个从（$\mathcal{L}'$中不在$\mathcal{L}$中的全体符号）到（$T'$中不属于$T$
   的全体句子）的双射，它给每个符号配备一个与之唯一对应的$T$定义。

我们此时记$T\subseteq_{\mathrm{def}}T'$。
:::

可定义扩张最重要的事实是保守。事实上，我们可以把可定义扩张的公式翻译成原语言中的公式。
首先，我们需要一个引理。

::: definition
如果一个公式中所有的原子公式片段都形如$x\approx y$或$P(x_{m_0}\\,...,x_{m_{n-1}})$或
$f(x_{m_0},...,x_{m_{n-1}})\approx y$，则称这是一个无嵌套公式。
:::

::: theorem
任何公式$\varphi$都存在一个典范的无嵌套公式$\mathrm{unNest}(\varphi)$，
满足$\vdash(\varphi\leftrightarrow\mathrm{unNest}(\varphi))$。
:::

::: definition
对可定义扩张$T\subseteq_{\mathrm{def}}T'$，
我们记$\varphi_f$为与$f\in\mathcal{L}'::\mathcal{F}\backslash\mathcal{L}::\mathcal{F}$唯一对应的$T$
定义，同理记$\varphi_P$。

我们来定义一个典范的翻译函数
$\mathrm{Trans}:\mathcal{L}'::\mathrm{Formula}\to\mathcal{L}::\mathrm{Formula}$如下：
:::

::: theorem [可定义扩张的翻译]
对可定义扩张$T\subseteq_{\mathrm{def}}T'$，
总有$T'\vdash\varphi\leftrightarrow\mathrm{Trans}\varphi$。
:::

::: theorem [可定义扩张的保守性]
如果$T\subseteq_{\mathrm{def}}T'$，则对任何$\mathcal{L}$公式$\varphi$，
总有$T\vdash\varphi$当且仅当$T'\vdash\varphi$。
:::
