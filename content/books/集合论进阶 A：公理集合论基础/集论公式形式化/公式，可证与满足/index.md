---
title: 公式，可证与满足
---

<problems>
- 谓词 $\mathrm{Sub}_{pv}$ 定义中的条件 $s(i)=u\wedge s'(i)=v$ 似乎应为 $s(i)=v\wedge s'(i)=u$，与文字描述一致。
- 预函数 $w(u,s)$ 中 $w_2$ 的表达式里 $n$ 似乎没有定义，而引入的 $k$ 没有使用。
</problems>

我们来看Devlin的传世名著中使用的编码方案，它虽然非常自然，但却不能在Devlin原来设想的语境中实现。

::: definition
我们用$\langle x_0,...,x_{\mathfrak{n}-1}\rangle$指代函数$f$，
其定义域为$\ulcorner\mathfrak{n}\urcorner$，
并将每个$0\leq\mathfrak{i}<\mathfrak{n}$对应的
$\ulcorner\mathfrak{i}\urcorner\in\ulcorner\mathfrak{n}\urcorner$映到$x_\mathfrak{i}$。
它将被称作一个长为$\mathfrak{n}$的元序列。

对于元序列$s=\langle x_0,...,x_{\mathfrak{n}-1}\rangle$与
$t=\langle y_0,...,y_{\mathfrak{m}-1}\rangle$，
我们称元序列$s\frown t=\langle x_0,...,x_{\mathfrak{n}-1},y_0,...,y_{\mathfrak{m}-1}\rangle$为$s$与
$t$的串接（concatenation）。

对于元序列$s=\langle x_0,...,x_{\mathfrak{n}-1}\rangle$，
称$\mathfrak{n}=\mathrm{length}(s)$为其长度，$x_{\mathfrak{n}-1}=||s||$为其末项。

我们形式化一个$\Delta_0$谓词判断集合是否是序列：
$\mathrm{isSeq}(x)\Leftrightarrow \mathrm{isFun}(x)\wedge\mathrm{isNat}(\mathrm{dom}(x))$。
对于这类形式化版本的序列，$\mathrm{length}$和$||\cdot||$都是基础函数，
但串接操作是$\Delta_1^{T_{Ar}}$的，
这是因为$s=t_1\frown t_2$当且仅当
$\mathrm{isSeq}(s)\wedge\mathrm{isSeq}(t_1)\wedge\mathrm{isSeq}(t_2)\wedge\mathrm{dom}(s)=\mathrm{dom}(t_1)+\mathrm{dom}(t_2)\wedge\forall i\in\mathrm{dom}(t_1)(t_1(i)=s(i))\wedge\forall i\in\mathrm{dom}(t_2)(t_2(i)=s(i+\mathrm{dom}(t_1)))$
涉及加法。
:::

::: remark*
注意区分$\langle\varnothing\rangle$与$\varnothing=\langle\rangle$，后者是长度为$0$的唯一序列，
通常称之为空序列。序列不是元组。今后我们通常认为元序列是（形式化版本的）序列的一种特别情况。
:::

现在，我们来用元序列编码以所有集合为常元符号的集合论语言$\mathcal{L}_V$，
每个概念均又有对应的形式化版本的谓词。

::: definition
做以下约定。

1. 对变元符号$x_\mathfrak{n}$，
   做编码
   $\ulcorner x_{\mathfrak{n}}\urcorner=(\ulcorner 2\urcorner,\ulcorner\mathfrak{n}\urcorner)$。
   造$\Delta_0$谓词来判断集合是否是变元符号的编码，
   即
   $\mathrm{isVarSym}(x)\Leftrightarrow\exists n\in\bigcup\bigcup x(\mathrm{isNat}(n)\wedge x=(\ulcorner 2\urcorner,n))$。

2. 对集合$x$，做其常元符号$\dot{x}$的编码$\ulcorner\dot{x}\urcorner=(\ulcorner 3\urcorner,x)$。
   对应的造出$\Delta_0$谓词来判断集合是否是常元符号的编码，
   即
   $\mathrm{isConSym}(x)\Leftrightarrow \exists y\in\bigcup\bigcup x(x=(\ulcorner 3\urcorner,y))$。

3. 对原子公式$x\in y$（此处$x,y$既可以是变元符号也可以是常元符号，下同），
   做编码
   $\ulcorner x\in y\urcorner=\langle 0,4,\ulcorner x\urcorner,\ulcorner y\urcorner,1\rangle$。

4. 对原子公式$x=y$，
   做编码$\ulcorner x=y\urcorner=\langle 0,5,\ulcorner x\urcorner,\ulcorner y\urcorner,1\rangle$。

5. 造出$\Delta_0$谓词来判断集合是否是原子公式的编码，
   即
   $\mathrm{isPFml}(x)\Leftrightarrow \mathrm{isFun}(x)\wedge\mathrm{dom}(x)=\ulcorner 5\urcorner\wedge x(\ulcorner 0\urcorner)=\ulcorner 0\urcorner\wedge (x(\ulcorner 1\urcorner)=\ulcorner 4\urcorner\vee x(\ulcorner 1\urcorner)=\ulcorner 5\urcorner)\wedge (\mathrm{isVarSym}(x(\ulcorner 2\urcorner))\vee\mathrm{isConSym}(x(\ulcorner 2\urcorner)))\wedge (\mathrm{isVarSym}(x(\ulcorner 3\urcorner))\vee\mathrm{isConSym}(x(\ulcorner 3\urcorner)))\wedge x(\ulcorner 4\urcorner)=\ulcorner 1\urcorner$

6. 归纳定义公式的编码。

   1. $\varphi\to\psi$的编码是
      $\ulcorner\varphi\to\psi\urcorner=\langle 0,6\rangle\frown\ulcorner\varphi\urcorner\frown\ulcorner\psi\urcorner\frown\langle\ulcorner 1\urcorner\rangle$。

   2. $\neg\varphi$的编码是
      $\ulcorner\neg\varphi\urcorner=\langle 0,7\rangle\frown\ulcorner\varphi\urcorner\frown\langle\ulcorner 1\urcorner\rangle$。

   3. $\exists x_{\mathfrak{n}}(\varphi)$的编码是
      $\ulcorner\exists x_{\mathfrak{n}}(\varphi)\urcorner=\langle 0,8,\ulcorner x_{\mathfrak{n}}\urcorner\rangle\frown\ulcorner\varphi\urcorner\frown\langle\ulcorner 1\urcorner\rangle$。

7. 造出谓词来判断集合是否是某种特定公式的编码。

   1. $\Delta_0$，是用属于产生的原子公式：
      $\mathrm{isInFml}(s,x,y)\Leftrightarrow \mathrm{isFun}(s)\wedge\mathrm{dom}(s)=\ulcorner 5\urcorner\wedge s(\ulcorner 0\urcorner)=\ulcorner 0\urcorner\wedge s(\ulcorner 1\urcorner)=\ulcorner 4\urcorner\wedge s(\ulcorner 2\urcorner)=x\wedge s(\ulcorner 3\urcorner)=y\wedge x(\ulcorner 4\urcorner)=\ulcorner 1\urcorner$

   2. $\Delta_0$，是用等于产生的原子公式：
      $\mathrm{isEqFml}(s,x,y)\Leftrightarrow \mathrm{isFun}(s)\wedge\mathrm{dom}(s)=\ulcorner 5\urcorner\wedge s(\ulcorner 0\urcorner)=\ulcorner 0\urcorner\wedge s(\ulcorner 1\urcorner)=\ulcorner 5\urcorner\wedge s(\ulcorner 2\urcorner)=x\wedge s(\ulcorner 3\urcorner)=y\wedge x(\ulcorner 4\urcorner)=\ulcorner 1\urcorner$

   3. $\Delta_1^{T_{Ar}}$，是用蕴含产生的公式：
      $\mathrm{isToFml}(s,t_1,t_2)\Leftrightarrow \mathrm{isSeq}(s)\wedge\mathrm{isSeq}\\(t_1)\wedge\mathrm{isSeq}(t_2)\wedge \mathrm{dom}(s)=\mathrm{dom}(t_1)+\mathrm{dom}(t_2)+3\wedge s(\ulcorner 0\urcorner)=\ulcorner 0\urcorner\wedge s(\ulcorner 1\urcorner)=\ulcorner 6\urcorner\wedge ||s||=\ulcorner 1\urcorner\wedge \forall i\in \mathrm{dom}(t_1)(t_1(i)=s(i+2))\wedge \forall i\in\mathrm{dom}(t_2)(t_2(i)=s(i+\mathrm{dom}(t_1)+2))$

   4. $\Delta_0$，是加否定产生的公式：
      $\mathrm{isNegFml}(s,t)\Leftrightarrow \mathrm{isSeq}(s)\wedge\mathrm{isSeq}(t)\wedge\mathrm{dom}(s)=\mathrm{Succ}^{(3)}\mathrm{dom}(t)\wedge s(\ulcorner 0\urcorner)=\ulcorner 0\urcorner\wedge s(\ulcorner 1\urcorner)=\ulcorner 7\urcorner\wedge ||s||=\ulcorner 1\urcorner\wedge \forall i\in\mathrm{dom}(t)(t(i)=s(\mathrm{Succ}^{(2)}i))$

   5. $\Delta_0$，是存在量化产生的公式：
      $\mathrm{isExiFml}(s,t,x)\Leftrightarrow \mathrm{isSeq}(s)\wedge\mathrm{isSeq}\\(t)\wedge \mathrm{isVarSym}(x)\wedge \mathrm{dom}(s)=\mathrm{Succ}^{(4)}\mathrm{dom}(t)\wedge s(\ulcorner 0\urcorner)=\ulcorner 0\urcorner\wedge s(\ulcorner 1\urcorner)=\ulcorner 8\urcorner\wedge s(\ulcorner 2\urcorner)=x\wedge ||s||=\ulcorner 1\urcorner\wedge \forall i\in\mathrm{dom}(t)(t(i)=s(\mathrm{Succ}^{(3)}i))$

8. 指明公式的构造序列。

   在元语言中，某个公式的构造序列是个有穷长的序列，其中元素均为公式，且每个公式或者是原子公式，
   或者是前面的公式由逻辑连接词连接而成，或者是前面的公式存在量化而成，
   且最后一个元素恰好就是开始指出的那个公式。

   因此，
   这个$\Delta_1^{T_{Ar}}$谓词写为
   $\mathrm{isBuiltSeq}(S)\Leftrightarrow \mathrm{isSeq}(S)\wedge \forall i\in\mathrm{dom}(S)(\\\mathrm{isPFml}(S(i))\vee \exists j\in i\exists k\in i(\mathrm{isToFml}(S(i),S(j),S(k)))\vee \exists j\in i(\\\mathrm{isNegFml}(S(i),S(j)))\vee \exists j\in i\exists x\in\mathrm{ran}(s)(\mathrm{isExiFml}(S(i),S(j),x)))$

   我们称$\Delta_1^{T_{Ar}}$谓词
   $\mathrm{isBuiltFrom}(s,S)\Leftrightarrow \mathrm{isBuiltSeq}(S)\wedge ||S||=s$。

9. 判断一集合是否可以被解读为一个公式。

   显然，我们会得到谓词$\mathrm{isFml}(s)\Leftrightarrow \exists S(\mathrm{isBuiltFrom}(s,S))$，
   它$\Sigma_1^{T_{Ar}}$，但我们将要证明它是$\Delta_1^{T_{Ar}}$的，为此需要做一些准备。
   如果可以用某个函数$A(s)$让$\mathrm{isBuiltFrom}(s,S)\to S\in A(s)$，
   那么我们就可以把$\exists S(\mathrm{isBuiltFrom}(s,S))$变成
   $\exists S\in A(s)(\mathrm{isBuiltFrom}(s,S))$。

   临时取函数
   $A(x)=\bigcup_{n\in\mathrm{dom}(x)}(\bigcup_{m\in\mathrm{dom}(x)}(\mathrm{ran}(x)^{\mathrm{Succ}(m)}))^{\mathrm{Succ}(n)}$，
   回想我们之前的相关论述，$T_{Ar}$中可证若$x$是序列（从而是有穷集）则$A(x)$必然同样存在且是有穷集。

   现在，
   $\exists S\in A(s)(\mathrm{isBuiltFrom}(s,S))$可以写为
   $\forall T(A(s)\subseteq T\to\exists S\in T(\mathrm{isBuiltFrom}(s,S)))$，
   注意到$A(s)\subseteq T$是$\forall x(x\in A(s)\to x\in T)$，
   而$x\in A(s)$等价于
   $\exists n\in\mathrm{dom}(s)(\mathrm{isFun}(x)\wedge \mathrm{dom}(x)=\mathrm{Succ}(n)\wedge \forall y(y\in\mathrm{ran}(x)\leftrightarrow \exists m\in\mathrm{dom}(s)(\mathrm{isFunOn}(y,\mathrm{Succ}(m),\mathrm{ran}(s)))))$
   是$\Pi_1$公式，于是整个谓词的复杂度也可为$\Pi_1^{T_{Ar}}$。

:::

现在，我们获得了$\Delta_1^{T_{Ar}}$的谓词$\mathrm{isFml}$。

我们接下来编码相应的语法概念。
我们先考虑可证的命题如何刻画，
也就是在默认全体一阶逻辑公理和全体集合常元自带的属于关系真命题下可证的句子。
为此，我们需要先编码自由出现和无冲突替换两个概念。
由于这个语言的项不是变元就是常元，我们先来考虑把变元换成常元的操作。

::: definition
我们先定义谓词$\mathrm{Sub}_{c}(s,s',v,t)$，
它意味着$s'$是将$s$中所有变元$v$自由出现之处改为常元$t$所得之公式，下标$c$表示$t$是个常元。
显然，我们要模仿公式归纳法来做这件事。

我们首先考虑$s,s'$都是原始公式的情形，
此谓词显然可以以$\Delta_0$方式写为
$\mathrm{Sub}_{c}^{pf}(s,s',v,t)\Leftrightarrow \mathrm{isPFml}(s)\wedge\mathrm{isPFml}(s')\wedge \mathrm{isVarSym}(v)\wedge\mathrm{isConSym}(t)\wedge \exists t_1\in\mathrm{ran}(s)\wedge\exists t_2\in\mathrm{ran}(s)((\mathrm{isInFml}(s,t_1,t_2)\wedge ((t_1\not=v\wedge t_2\not=v\wedge s=s')\vee(t_1=v\wedge t_2\not=v\wedge \mathrm{isInFml}(s',t,t_2))\vee(t_1\not=v\wedge t_2=v\wedge \mathrm{isInFml}(s',t_1,t))\vee(t_1=v\wedge t_2=v\wedge \mathrm{isInFml}(s',t,t))))\vee(\mathrm{isEqFml}(s,t_1,t_2)\wedge ((t_1\not=v\wedge t_2\not=v\wedge s=s')\vee(t_1=v\wedge t_2\not=v\wedge \mathrm{isEqFml}(s',t,t_2))\vee(t_1\not=v\wedge t_2=v\wedge \mathrm{isEqFml}(s',t_1,t))\vee(t_1=v\wedge t_2=v\wedge \mathrm{isEqFml}(s',t,t)))))$。

为了考虑$s,s'$是任意公式的情形，势必引入其构造序列$S$与$S'$，我们希望它们的元素可以一一对应，
使得$\mathrm{Sub}_{c}$这个关系递归地延续到$||S||=s$和$||S'||=s'$上。
我们把判别条件拆出来临时分别命名。

1. $\Delta_0$谓词$A(v,t)\Leftrightarrow \mathrm{isVarSym}(v)\wedge\mathrm{isConSym}(t)$

2. $\Delta_1^{T_{Ar}}$谓词
   $B(s,S,S')\Leftrightarrow \mathrm{isBuiltFrom}(s,S)\wedge\mathrm{isBuiltSeq}(S')\\\wedge \mathrm{dom}(S)=\mathrm{dom}(S')$

3. $\Delta_1^{T_{Ar}}$谓词
   $C(s,s',S,S')\Leftrightarrow \forall i\in\mathrm{dom}(S)(\mathrm{Sub}_{c}^{pf}(S(i),S'(i),v,t)\vee (\exists j\in i\exists k\in i(\mathrm{isToFml}(S(i),S(j),S(k))\wedge \mathrm{isToFml}(S'(i),S'(j),S'(k)\\)))\vee \exists j\in i(\mathrm{isNegFml}(S(i),S(j))\wedge \mathrm{isNegFml}(S'(i),S'(j)))\vee \exists j\in i(\\\mathrm{isExiFml}(S(i),S(j),v)\wedge S'(i)=S(i))\vee \exists j\in i\exists u\in\mathrm{ran}(s)(\mathrm{isVarSym}(u)\\\wedge u\not=v\wedge \mathrm{isExiFml}(S(i),S(j),u)\wedge \mathrm{isExiFml}(S'(i),S'(j),u)))$

现在，
只需证明
$T_{Ar}\vdash \mathrm{isFml}(s)\wedge \exists S\exists S'(A(v,t)\wedge B(s,S,S')\wedge C(s,s',S,\\S')\wedge ||S'||=s')\leftrightarrow \mathrm{isFml}(s)\wedge \forall S\forall S'(A(v,t)\wedge B(s,S,S')\wedge C(s,s',S,S')\to ||S'||=s')$
即可得到我们所想要的这个$\Delta_1^{T_{Ar}}$谓词$\mathrm{Sub}_{c}(s,s',v,t)$。
这个等价性只需要在$\mathrm{dom}(S)$上面归纳$S'$。
:::

有了这种替换，是否自由出现就非常易于判断。我们还能顺带判断公式是否是句子。

::: definition
考虑$\Delta_1^{T_{Ar}}$谓词
$\mathrm{BddHere}(s,v,i)\Leftrightarrow \mathrm{isVarSym}(v)\wedge\mathrm{isFml}(s)\wedge i\in\mathrm{dom}(s)\wedge s(i)=v\wedge \exists s'(\mathrm{Sub}_{c}(s,s',v,\ulcorner\varnothing\urcorner)\wedge s'(i)=v)$，
它显然可证等价于
$\mathrm{isVarSym}(v)\wedge\mathrm{isFml}(s)\wedge i\in\mathrm{dom}(s)\wedge s(i)=v\wedge \forall s'(\mathrm{Sub}_{c}(s,s',v,\ulcorner\varnothing\urcorner)\to s'(i)=v)$，
能判断$v$在$s$中$i$处出现时是否是受限出现。

进一步，
做$\Delta_1^{T_{Ar}}$谓词
$\mathrm{isSen}(s)\Leftrightarrow \mathrm{isFml}(s)\wedge \forall v\in\mathrm{ran}(s)(\mathrm{isVarSym}\\(v)\to \mathrm{Sub}_{c}(s,s,v,\ulcorner\varnothing\urcorner))$
判断$s$是不是一个句子。
:::

把变元换成变元的操作就很简单了。

::: definition
考虑$\Delta_1^{T_{Ar}}$谓词$\mathrm{Sub}_{pv}(s,s',v,u)$，
它意味着$s'$是将$s$中部分变元$v$自由出现之处改为变元$u$所得之公式，下标$p$表示只有部分被改变，
下标$v$表示$u$是个变元：
$\mathrm{isFml}(s)\wedge\mathrm{isFml}(s')\wedge\mathrm{dom}(s)=\mathrm{dom}(s')\wedge\forall i\in\mathrm{dom}(s)(s(i)\not=s'(i)\to s(i)=u\wedge s'(i)=v\wedge \neg\mathrm{BddHere}(s,v,i))$。

当然也可以考虑$\Delta_1^{T_{Ar}}$谓词$\mathrm{Sub}_{v}(s,s',v,u)$，
它意味着$s'$是将$s$中所有变元$v$自由出现之处改为变元$u$所得之公式：
$\mathrm{Sub}_{pv}(s,s',v,u)\wedge \forall i\in\mathrm{dom}(s)(s(i)=u\wedge\neg\mathrm{BddHere}(s,v,i)\to s'(i)=u)$。
:::

我们现在来考虑给定公理集$T$下的证明概念。

::: definition
做以下约定。

1. 造出$\Delta_1^{T_{Ar}}$谓词$\mathrm{isAxSet}(T)\Leftrightarrow \forall s\in T(\mathrm{isSen}(s))$
   判断$T$是公理集。我们不默认逻辑公理在公理集之中。

2. 造出$\Delta_1^{T_{Ar}}$谓词$\mathrm{isPfSeq}(S,T)$判断$S$是否是公理集$T$下的一个证明序列：
   $\mathrm{isAxSet}(T)\wedge \mathrm{isSeq}(S)\wedge \forall s\in\mathrm{ran}(S)(\mathrm{isFml}(s))\wedge \forall i\in\mathrm{dom}(S)(S(i)\in T\vee \exists j\in i\exists k\in i(\mathrm{isToFml}(S(j),S(k),S(i))))$

3. 造出$\Sigma_1$谓词$\mathrm{Bwb}(s,T)$判断$s$是否在公理集$T$下可证：
$\exists S(\mathrm{isPfSeq}(S,T)\wedge ||S||=s)$

鉴于全体无常元逻辑公理由原始递归函数枚举，
不妨设这个$\Delta_1^{T_{Ar}}$常元符号为$\mathrm{LAxioms}$。
:::

这与我们在算术语言中得到的经验是一样的（那时候$\mathrm{Bwb}$也是个递归可枚举但不递归的关系）。
我们甚至可以考虑继续复刻不动点引理，从而证明集合论版本的第一不完备性定理，
但我们这里不再展开这些和逻辑学关系更大的内容了。

现在继续考虑满足关系。
因为（全局）真不可定义，我们退而求其次地编码一个集合和其上默认的属于结构满足一个句子的情况。

::: definition
我们同样把条件拆成几个部分分别临时命名。

1. $\Delta_0$谓词
   $\mathrm{Sat}^{pf}(s,x)\Leftrightarrow \exists a\in x(s=\ulcorner a=a\urcorner)\vee \exists a\in x\exists b\in x(b\in a\wedge s=\ulcorner b\in a\urcorner)$

2. $\Delta_1^{T_{Ar}}$谓词
   $E(x,\chi)\Leftrightarrow \mathrm{isFml}(\chi)\wedge\forall c\in\mathrm{ran}(\chi)(\mathrm{isConSym}(c)\to \exists d\in x(c=\ulcorner d\urcorner))$

3. $\Delta_1^{T_{Ar}}$谓词
   $A(s,x)\Leftrightarrow x\not=\varnothing\wedge \mathrm{isSen}(s)\wedge \forall c\in\mathrm{ran}(s)(\mathrm{isConSym}(c)\to \exists d\in x(c=\ulcorner d\urcorner))$

4. $\Delta_1^{T_{Ar}}$谓词
   $B(s,f,g)\Leftrightarrow \mathrm{isSeq}(f)\wedge\mathrm{isSeq}(g)\wedge\mathrm{dom}(f)=\mathrm{dom}(g)\wedge \forall i\in\mathrm{dom}(f)\forall a\in f(i)\cup g(i)(\mathrm{isSeq}(a)\wedge \mathrm{dom}(a)\subseteq\mathrm{dom}(s))$

5. $\Delta_1^{T_{Ar}}$谓词
   $C(x,f,\chi)\Leftrightarrow (\chi\in f(\varnothing)\leftrightarrow (\mathrm{isPFml}(\chi)\wedge \forall c\in\mathrm{ran}(\chi)\\(\mathrm{isConSym}(c)\to \exists d\in x(c=\ulcorner d\urcorner))))\wedge\forall j\in\mathrm{dom}(f)\forall i\in j(\chi\in f(\mathrm{Succ}(i))\leftrightarrow (\chi\in f(i)\vee \exists \theta_1,\theta_2\in f(i)(\mathrm{isToFml}(\chi,\theta_1,\theta_2))\vee \exists \theta\in f(i)(\mathrm{isNegFml}(\chi,\theta))\vee \exists \theta\in f(i)\exists v\in\mathrm{ran}(\chi)(\mathrm{isVarSym}(v)\wedge\mathrm{isExiFml}(\\\chi,\theta,v))))$

6. $\Delta_1^{T_{Ar}}$谓词
   $D(x,f,g,\chi)\Leftrightarrow (\chi\in g(\varnothing)\leftrightarrow \mathrm{Sat}^{pf}(\chi,x))\wedge \forall j\in\mathrm{dom}(f)\\\forall i\in j(\chi\in g(\mathrm{Succ}(i))\leftrightarrow (\chi\in g(i)\vee \exists \theta_1,\theta_2\in f(i)(\mathrm{isToFml}(\chi,\theta_1,\theta_2)\wedge ((\theta_1\in g(i)\wedge \theta_2\in g(i))\vee (\theta_1\not\in g(i)\wedge \mathrm{isSen}(\theta_1))))\vee \exists \theta\in f(i)(\mathrm{isNegFml}(\chi,\\\theta)\wedge \theta\not\in g(i)\wedge\mathrm{isSen}(\theta))\vee \exists \theta_1\in f(i)\exists \theta_2\in g(i)\exists v\in\mathrm{ran}(\chi)\exists a\in x(\mathrm{isVarSym}(v)\wedge \mathrm{isExiFml}(\chi,\theta_1,v)\wedge \mathrm{Sub}_c(\chi,\theta_2,v,\ulcorner a\urcorner))))$

7. $\Sigma_2$谓词
   $\mathrm{Sat}(s,x)\Leftrightarrow A(s,x)\wedge \exists f\exists g\forall\chi(s\in||g||\wedge B(s,f,g)\wedge(E(x,\chi)\to(C(x,f,\chi)\wedge D(x,f,g,\chi))))$

:::

::: remark*
$\chi$是可能被装进$f$的公式，$f$里面装着不长于$s$的所有可能将要被判断的公式，
$g$里面装着所有确实被判断了的句子，我们其实是在对公式的复杂度递归。
:::

想要改进$\mathrm{Sat}$的复杂度，
我们就必须用一个函数来从$s$算出一个包含所有可能的$\chi$构成的集合的集合，
但$T_{Ar}$贫乏的构造能力阻止了我们。
幸运的是，我们只需要加强公理系统就能完成这项工作，且有许多互不蕴含的公理系统都能做这件事。

我们需要的东西长成这样：

::: definition
定义以下函数和预函数。

1. $\Sigma_1$预函数$u=\mathrm{Seq}(a,n)$为以下句子：
   $\exists f(\mathrm{isSeq}(f)\wedge \mathrm{isNat}(n)\wedge n=\mathrm{dom}(f)\wedge u=\bigcup\mathrm{ran}(f)\wedge \forall i\in n(\forall x\in f(i)(\mathrm{isSeq}(x)\wedge i=\mathrm{dom}(x)\wedge \forall j\in i(x(j)\in a))\wedge \forall j\in i\forall x\in f(j)\forall p\in a(i=\mathrm{Succ}(j)\to x\cup\{(j,p)\}\in f(i))))$。
   它让$u$收集到所有长度小于$n$的$a$中元素构成的序列。

2. $\Delta_0$预函数$b=\mathrm{VarSym}$为以下句子：
   $(\ulcorner 2\urcorner,\ulcorner 0\urcorner)\in b\wedge \forall x\in b((\ulcorner 2\urcorner,\mathrm{Succ}\\(x^{(1)}_{(2)}))\in b)\wedge\forall x\in b(\mathrm{isVarSym}(x))$。
   它说$b$里面装着所有变元符号，显然如果有$(Inf)$这就是个函数了。

3. $\Delta_0$预函数$c=\mathrm{ConSym}(a)$为以下句子：
   $\forall x\in a(\ulcorner \dot{x}\urcorner\in c)\wedge \forall y\in c\exists x\in a(y=\ulcorner\dot{x}\urcorner)$。
   它说$c$里装着所有$a$中元素作为常元符号的编码；显然如果有$(rRep)$显然这就是个函数了。

4. $\Delta_0$预函数$w=w(u,s)$为以下句子：$w=w_1\cup w_2$，
   其中
   $w_1=\bigcup_{m\in\mathrm{dom}(s)}(\ulcorner 9\urcorner\cup \mathrm{VarSym}\cup \mathrm{ConSym}(u))^{\mathrm{Succ}(m)}$，
   而
   $w_2=\bigcup_{m\in\mathrm{dom}(s)}\\(\bigcup_{k\in\mathrm{dom}(s)}(\ulcorner 9\urcorner\cup \mathrm{VarSym}\cup \mathrm{ConSym}(u))^{\mathrm{Succ}(m)})^{\mathrm{Succ}(n)}$。
   $w_1$让$w$收集到所有长度不超过$s$的常元符号属于$u$的公式，
   $w_2$收集到这些公式的长度不超过$s$的序列。

:::

先来看$\Pi_1-GJI$，它是$\Pi_1-GJ$加上无穷公理所得的公理系统。

::: theorem (元定理)
$\mathrm{Sat}$是$\Delta_1^{\Pi_1-GJI}$的。
:::

::: proof
根据我们的讨论，$w(u,s)$已经是函数了，我们只要再验证$\mathrm{Seq}$也是函数；
为证明$\forall a\forall n\exists u\exists f(...)$，只需对$n$归纳后面的$\Sigma_1$句子。

现在首先写出$\mathrm{Sat}(s,u)$的$\Sigma_1$形式：
$\exists w\exists x\exists y\exists a\exists b(a=\mathrm{ConSym}(u)\wedge b=\mathrm{VarSym}\wedge x=\mathrm{Seq}(\ulcorner 9\urcorner\cup a\cup b,\mathrm{Succ}(\mathrm{dom}(s)))\wedge y=\mathrm{Seq}(x,\mathrm{Succ}(\mathrm{dom}(s)))\wedge w=x\cup y\wedge \mathrm{Sat}'(s,u,w))$。
这里$\mathrm{Sat}'(s,u,w)$把$\mathrm{Sat}(s,u)$中的$\forall\chi$换成了$\forall \chi\in w$，
因而$\Sigma_1$。
另一方面，鉴于$\neg\mathrm{Sat}(s,u)$当且仅当$\mathrm{Sat}(\neg s,u)$，
我们立即知道$\mathrm{Sat}$也有$\Pi_1$形式。
:::

接下来讨论[从DB到DS](@sec:从DB到DS)一节中引入的$DS$。

::: theorem (元定理)
$\mathrm{Sat}$是$\Delta_1^{DS}$的。
:::

::: proof
先来证明$\mathrm{Seq}$是函数。
只要连续两次用$\Delta_{0}$分离：第一次从$\mathrm{FinSub}(\omega\times a)$里面取出有穷函数，
第二次从这个集合的有穷子集族里面取出定义域属于$n$的函数。
显然我们可以让它$\Delta_1^{DS}$，
只要把$\exists f(u=\bigcup\mathrm{ran}(f)\wedge...)$换成
$\forall f(...\to u=\bigcup\mathrm{ran}(f))$。

接下来证明$w$是函数。
只要注意$\mathrm{ConSym}$可以从某些卡氏积的有穷子集族里面分离出来因而是函数，以下完全同上。
:::

今后，我们将把$\Pi_1-GJI$和$DS$合称为$T_{Sat}$，
因此在需要$\Delta_1$的满足关系时只需保证是$T_{Sat}$的扩张。显然$T_{Sat}\supsetneq T_{Ar}$。

接下来，我们来讨论上述形式化语言$\mathcal{L}_\in$中的模型论。
一个简单的事实是，全体无常元公式构成的集合可以在$DS$中得证是集，但其上良序则直接是可定义的。
因此，常元符号取于某集$c$的全体公式是否是集取决于是否有无穷公理和有穷子集族公理，
而是否可良序化则取决于$c$上是否有一个可用的良序。因此，我们直接有：

::: theorem [$ZFC$]
任给$\mathrm{LAxioms}$的扩张$T$，其中常元符号构成一集$c$，记$\kappa=\aleph_0+|c|$，我们有：

1. （完备性）$T$有不可证的命题，当且仅当$T$被某集满足。

2. （紧致性）$T$可被满足，当且仅当$T$的有穷子集均可被满足。

3. （下行LS）若有$T$的无穷模型，则有$T$的基数不超过$\kappa$的模型。

:::

::: proof
这都是熟知的结论，但熟知的诸证明都大肆利用了良序原理。
:::

我们另外指出它们与选择公理的强相关性。

::: theorem [Karagila]
$ZF$中任给$\aleph$数$\kappa$，$(LS)_\kappa$等价于$(DC)+(AC)_\kappa$。
这里$(LS)_\kappa$说任给基数不大于$\kappa$的语言$\mathcal{L}$，
其上理论有无穷模型则有基数不大于$\kappa$的模型。
:::

::: theorem [Henkin]
$ZF$中一阶逻辑紧致性等价于一阶逻辑完备性，也等价于超滤引理。
:::
