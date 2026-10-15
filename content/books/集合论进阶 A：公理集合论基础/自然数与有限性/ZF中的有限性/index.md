---
title: ZF中的有限性
---

我们现在简要讨论$ZF$中有限性概念的多样性。

::: definition
定义以下十四种有穷性。

1. $\mathrm{isFin}_I(x)$：$x$的任意不空子集族有包含关系下的极大/极小元（注意补集存在，只需要取一边，
   这里以极大为例），
   $\forall s(\exists t\in s\wedge \forall t\in s(t\subseteq x)\to \exists t\in s\forall r\in s(\neg t\subsetneqq r))$。
   此谓词$\Pi_1$。

2. $\mathrm{isFin}_{Ia}(x)$：$x$不是两个非$I$有穷集的不交并，
   $\neg\exists y\exists z(y\cap z=\varnothing\wedge x=y\cup z\wedge \neg\mathrm{isFin}(y)\wedge \neg\mathrm{isFin}(z))$。
   此谓词$\Pi_1$。

3. $\mathrm{isFin}_{II}(x)$：$x$的任意不空子集族若在包含关系下成为一个链，
   则有包含关系下的极大/极小元（注意补集存在，同样只需要取一边，这里以极大为例），
   $\forall s(\exists t\in s\wedge \forall t\in s(t\subseteq x)\wedge \forall t\in s\forall r\in s(t\subseteq r\vee r\subseteq t)\to \exists t\in s\forall r\in s(\neg t\subsetneqq r))$。
   此谓词$\Pi_1$。

4. $\mathrm{isFin}_{III}(x)$：不存在$\wp(x)$到$\wp(x)$真子集的双射，
   $\exists p(p=\wp(x)\wedge \mathrm{isDFin}(p))$。
   它显然又等价于
   $\neg\exists p\exists q\exists f(p=\wp(x)\wedge q\subseteq p\wedge q\not=p\wedge \mathrm{isBijOn}(f,p,q))$，
   因此此谓词$\Delta_2^{ZF}$。

5. （Dedekind有限）$\mathrm{isFin}_{IV}(x)$：不存在$x$到$x$真子集的双射，$\mathrm{isDFin}(x)$。
   此谓词$\Pi_1$。

6. $\mathrm{isFin}_{V}(x)$：$x=\varnothing$，或者不存在$\ulcorner 2\urcorner\times x$到$x$的双射；
   $x=\varnothing\vee \neg\exists p\exists f(p=x\times\{\{\varnothing\},\varnothing\}\wedge \mathrm{isBijOn}(f,x,p))$。
   此谓词$\Pi_1$。

7. $\mathrm{isFin}_{VI}(x)$：$x=\varnothing$，或者$x$是单点集，或者不存在$x\times x$到$x$的双射；
   $x=\varnothing\vee \exists y\in x(x=\{y\})\vee \neg\exists p\exists f(p=x\times x\wedge\mathrm{isBijOn}(f,x,p))$。
   此谓词$\Pi_1$。

8. $\mathrm{isFin}_{VII}(x)$：$\mathrm{isFin}_I(x)\vee\neg\exists r(\mathrm{isWOOn}(r,x))$。
   此谓词$\Pi_2$。

9. $\mathrm{isFin}_{\Delta_1}(x)$：$\mathrm{isFin}_{Ia}(x)$

10. $\mathrm{isFin}_{\Delta_2}(x)$：$x$的可线序化的分划必有穷，
    $\forall p\forall r(x=\bigcup p\wedge \forall a\in p\forall b\in p(a\cap b=\varnothing)\wedge \mathrm{isLOOn}(r,p)\to \mathrm{isFin}(p))$。
    此谓词$\Pi_1$。（注意$\mathrm{isFin}$是$\Delta_1^{ZF}$的谓词）

11. $\mathrm{isFin}_{\Delta_3}(x)$：$x$的可线序化的子集必有穷，
    $\forall p\forall r(p\subseteq x\wedge\mathrm{isLOOn}(r,p)\to \mathrm{isFin}(p))$。
    此谓词$\Pi_1$。

12. $\mathrm{isFin}_{\Delta_4}(x)$：不存在$x$到$\omega$的满射，
    $\neg\exists f\exists w(w=\omega\wedge \mathrm{isSurjOn}(f,x,w))$。此谓词$\Pi_1$。

13. $\mathrm{isFin}_{\Delta_5}(x)$：不存在$x$到$\mathrm{Succ}(x)$的满射，
    $\neg\exists f\exists y(y=x\cup\{x\}\wedge \mathrm{isSurjOn}(f,x,y))$。此谓词$\Pi_1$。

14. $\mathrm{isFin}_{D}(x)$：$x=\varnothing$，或者$x$是单点集，或者$x$是两个势严格小的集合的并集；
    $x=\varnothing\vee \exists y\in x(x=\{y\})\vee \exists y\exists z(x=y\cup z\wedge \neg\exists f(\mathrm{isBijOn}(f,x,y)\vee \mathrm{isBijOn}(f,x,z)))$。
    此谓词$\Sigma_2$。（这是Howard & Yorke引入的，并不是Dedekind有穷性）

我们指出以下加强有穷性的典范方案：若$\wp(x)$满足$Q$有穷性（这里$Q$是任意$\mathrm{isFin}$的下标），
则称$x$满足$Q''$有穷性，同样记为$\mathrm{isFin}_{Q''}$。
:::

显然，这些有穷性应当按强度有一个排序。
我们首先要指出三个重要引理，但是并不去分情况证明（否则要写的内容就太多了！）

::: lemma [$ZF$，有穷性记号的势不变性]
任给有穷性记号$Q$，若存在$x$到$y$的双射，
则$\mathrm{isFin}_{Q}(x)\leftrightarrow\mathrm{isFin}_{Q}(y)$。
:::

::: lemma [$ZF$，有穷性记号基本引理]
任给有穷性记号$Q$，集合$x$和$y$，
总有$\mathrm{isFin}_Q(x)\leftrightarrow \mathrm{isFin}_Q(x\cup\{y\})$。
:::

::: lemma [$ZF$，自然数有穷引理]
任给有穷性记号$Q$，所有自然数都是$Q$有穷的，且$\omega$不是$Q$有穷的。
:::

::: remark*
自然数有穷引理是有穷性记号基本引理和数学归纳法的显然推论。
:::

我们接着给出$ZF$中有穷性的强度顺序列表。
这个列表中每一步推断都是不可逆的，
但是证明不可倒过来推断需要做非常多的独立性命题论证（这相当于是在证明这两个记号的$E$命题独立于
$ZF$），我们不详细叙述。

::: theorem [$ZF$] {@thm:有穷性的强度}
我们宣称下列命题。（连续$\to$指的是每一步均可弱化，请勿理解为默认略去右结合括号的单个命题。）

1. $I$是标准有限/Kuratowski有限。

2. $I\to Ia\to II\to III\to V''\to \Delta_5\to IV\to V\to VI\to VII\to VII''$

3. $II\to \Delta_3\to IV\to D\to VII$

4. $V''\to VI''\to V$

5. $I=III''=V''''$，$III=IV''$

6. $\Delta_1=Ia$，$\Delta_2=II$，$\Delta_4=III$，$IV$当且仅当不存在$\omega$到$x$的单射。

:::

::: lemma [Läuchli] {@lem:Läuchli}
$x$无穷则$|\wp(\mathrm{FinSub}(x))|=|(\wp(\mathrm{FinSub}(x)))^\omega|$。
:::

::: proof
我们来定义如下两种从$\wp([x]^n)$（这里$n$是自然数）到自己的映射（下面$k$同样是自然数）：

1. $g_{n,k}(a)=\{y\in [x]^n|\forall z\in [x]^k(y\subseteq z\to\exists t\in a(t\subseteq z))\}$；

2. $d_{n,k}(a)=g_{n,k}(a)\backslash a$。

我们断言它们有如下性质。

1. $\forall a\subseteq [x]^n(a\subseteq g_{n,k}(a))$；

2. $g_{n,k}\circ g_{n,k}=g_{n,k}$；

3. $k\leq l\to \forall a\subseteq [x]^n(g_{n,k}(a)\subseteq g_{n,l}(a))$。

来证明第一条。
如果$y\in a$，我们证明$y\in g_{n,k}(a)$，
也就是证明$\forall z\in [x]^k(y\subseteq z\to\exists t\in a(t\subseteq z))$，显然这$t$就是$y$自己。

来证明第二条。
第一条已经说明$g_{n,k}(a)\subseteq g_{n,k}(g_{n,k}(a))$，只需证明倒过来的方向；
假定$y\in g_{n,k}(g_{n,k}(a))$，我们要证明$y\in g_{n,k}(a)$。
拆掉定义我们已知$\forall z\in [x]^k(y\subseteq z\to\exists t'\in g_{n,k}(a)(t'\subseteq z))$，
也就是
$\forall z\in [x]^k(y\subseteq z\to\exists t'(t'\subseteq z\wedge \forall z'\in [x]^k(t'\subseteq z'\to \exists t\in a(t\subseteq z'))))$，
而我们要证明$\forall z\in [x]^k(y\subseteq z\to\exists t\in a(t\subseteq z))$；
给$z$并有$y\subseteq z$，条件给我们一个莫名其妙的$t'\subseteq z$，我们继续把$z'$取为$z$，
则$t'\subseteq z'=z$，于是存在$t\in a$使得$t\in z'=z$，这就是我们要的$t$。

来证明第三条。
同样证明$\forall z\in [x]^k(y\subseteq z\to\exists t\in a(t\subseteq z))$则
$\forall z\in [x]^l(y\subseteq z\to\exists t\in a(t\subseteq z))$，
这是因为后面这个大小为$l$的$z$可以取一个大小为$k$的子$z$放进条件里得到$t$来作为原本这个$z$的子集。
这里可以选是因为这样的子$z$只有有穷多个。

现在我们接着定义$d_{n,k}^{j}$为$d_{n,k}$迭代复合$j$个所得的函数，当然$d_{n,k}^0$就是恒等函数。
这个定义也就是$d_{n,k}^{j+1}=d_{n,k}\circ d_{n,k}^j=(g_{n,k}\circ d_{n,k}^j)\backslash d_{n,k}^j$，
由第一条我们就可以倒过来说$d_{n,k}^j=(g_{n,k}\circ d_{n,k}^j)\backslash d_{n,k}^{j+1}$，这是第四条。

**断言。** 如果$d_{n,k}^j$的值域不是单点集，则$j\leq n$。

**证明。** 我们需要使用有穷版本的Ramsey定理。
对$n\leq k$、$y\subseteq x$和$a\subseteq [x]^n$，当$|y|\leq n$时定义下列谓词：

1. $\psi(y,a,z)$定义为$z\subseteq x\backslash y\wedge \forall w\in[z]^{n-|y|}(y\cup w\in a)$；

2. $\varphi(y,a)$定义为$\forall m\in\omega\exists z\subseteq x(m\leq |z|\wedge\psi(y,a,z))$。

注意到$y\in a\subseteq [x]^n$时任给$z\subseteq x\backslash y$都有$\psi(y,a,z)$，
换言之此时任给$y\in a$都有$\varphi(y,a)$。
我们断言：如果$\varphi(y,d_{n,k}(a))$，则存在$y'\subsetneq y$使得$\varphi(y',a)$；
这立即推出不可能有$\varphi(\varnothing,d_{n,k}(a))$。

我们先来证明这个断言。
事实上我们只需证明任给$m\geq k$我们都有$y'\subsetneq y$和$z\in[x]^m$使得$\psi(y',a,z)$；
鉴于$y$的真子集只有有穷多个而$m$有无穷多个，
鸽巢原理指出一定就有一个$y'\subsetneq y$见证对任意大的$m$此事成立，换言之$\varphi(y',a)$。

有穷Ramsey定理指出任给$m,i,j\in\omega$，
当$i\leq m$且$j\geq 1$时都存在最小的$N=N_{m,i,j}\geq m$使得任何$[N]^i$的$j$染色都有$N$的$m$
大小的同质子集。
具体到这个证明中，已有$m\geq k$，我们取$m'=\mathrm{max}\{N_{m,i,2}|0\leq i\leq n\}$，
再取$m''=N_{m',k-|y|,2^{|y|}}$。
$\varphi(y,d_{n,k}(a))$中取$m$为此$m''$，
我们得到$s\subseteq x$使得$m''\leq |s|$且$\psi(y,d_{n,k}(a),s)$，
换言之$s\subseteq x\backslash y$且$\forall w\in[s]^{n-|y|}(y\cup w\in d_{n,k}(a))$。

对$y$的每个子集$y'$，我们定义$a(y')=\{t\in [s]^{k-|y|}|\exists t'\subseteq t(y'\cup t'\in a)\}$，
此时必有$\bigcup_{y'\subseteq y}a(y')=[s]^{k-|y|}$。
取定$t\in[s]^{k-|y|}$，我们证明必有$y'\subseteq y$和$t'\subseteq t$使得$y'\cup t'\in a$；首先，
$k\geq n$说明$|t|=k-|y|\geq n-|y|$，于是我们可以随便选一个$t$的大小为$n-|y|$的子集$u$，
根据$\psi(y,d_{n,k}(a),s)$我们就有$y\cup u\in d_{n,k}(a)$，于是$y\cup u$本身不属于$a$，
但任何包含它的$x$的大小为$k$的$x$子集都有$a$中元素为其子集；$t\cup y$恰好是一个这样的东西，
于是有$a$中元素$v$为其子集，显然$v=(t\cap v)\cup(y\cap v)$，括号里就是我们要的$t'$与$y'$。

现在鉴于$m''=N_{m',k-|y|,2^{|y|}}\leq |s|$，$y'\subseteq y$又恰有$2^{|y|}$个，
一定有同质子集$s'\in[s]^{m'}$使得$[s']^{k-|y|}$被染成同色，
换言之有$y'\subseteq y$使得$[s']^{k-|y|}\subseteq a(y')$，注意此时已有$s'\subseteq x\backslash y'$。
我们定义$b=\{w'\in [s']^{n-|y'|}|y'\cup w'\in a\}$，$b'=[s']^{n-|y'|}\backslash b$，
则它们又给出$[s']^{n-|y'|}$的二色划分，
鉴于$|s'|=m'\geq N_{m,n-|y'|,w}$我们又得到同质子集$z\in [s']^m$，
$[z]^{n-|y'|}$或者是$b$的子集或者是$b'$的子集。

我们说明这$z$就是断言所要的，让$\psi(y',a,z)$成立的$z$。
这也就是要证明$[z]^{n-|y'|}$一定是$b$的子集，而我们其实只需证明它与$b$交不空；
注意到$[z]^{k-|y|}\subseteq [s']^{k-|y|}\subseteq a(y')$，
任何$z$的大小为$k-|y|$的子集都有与$y'$之并属于$a$的子集，
而我们这里最终得到的子集就见证了一开始所要的交集不空。
当然还要证明$y'\subsetneq y$，这是因为$y'=y$时，
$\psi(y,d_{n,k}(a),s)$显然说明$\psi(y',d_{n,k}(a),z)$，又有$\psi(y',a,z)$，但$d_{n,k}(a)$与$a$不交，
这只能说明$[z]^{n-|y|}$空，但这是不可能的。

证完了里面这层断言，我们来证明一开始想要的断言。
任取$y\in d_{n,k}^j(a)$，$|y|=n$说明任给$z\subseteq x\backslash y$都有$\psi(y,d_{n,k}^j(a),z)$，
于是$x$无穷就说明$\varphi(y,d_{n,k}^j(a))$；
重复用上断言我们将得到一列$y=y_j\supsetneq y_{j-1}\supsetneq ...\supsetneq y_{0}$，
于是$n=|y_j|\geq j$。

作为这个断言的推论，我们立即知道$d_{n,k}^n=g_{n,k}\circ d_{n,k}^n$，这是第五条。

现在我们来定义
$f_{n,k}:\wp([x]^n)\to\wp([x]^k),a\mapsto\{y\in [x]^k|\exists z\in a(z\subseteq y)\}$，
并令$I_{n,k}=\{a\in [x]^n|g_{n,k}(a)=a\}$，最后令$\bar{f}_{n,k}=f_{n,k}\upharpoonright I_{n,k}$。
显然$k\leq l$时$I_{n,l}\subseteq I_{n,k}$，这是第六条。
我们额外证明$\bar{f}_{n,k}$单：假定$g_{n,k}(a_1)=a_1$而$g_{n,k}(a_2)=a_2$，
若$\bar{f}_{n,k}(a_1)=f_{n,k}(a_1)=f_{n,k}(a_2)=\bar{f}_{n,k}(a_2)$，
则$a_1\subseteq g_{n,k}(a_2)=a_2$而$a_2\subseteq g_{n,k}(a_1)=a_1$，换言之$a_1=a_2$。

我们终于准备好来定义单射$F:(\wp(\mathrm{FinSub}(x)))^\omega\to\wp(\mathrm{FinSub}(x))$了：
对$A=\{a_s\subseteq\mathrm{FinSub}(x)|s\in\omega\}$，令$k(s,n,j)=2^s\cdot 3^n\cdot 5^j$，
$$
F(A)=\bigcup_{s\in\omega}\bigcup_{n\in\omega}(\bigcup_{0\leq j\leq n}f_{n,k(s,n,j)}\circ g_{n,k(s,n,n)}\circ d_{n,k(s,n,n)}^j(a_s\cap [x]^n))
$$

只需验证$F$单。
方便起见，记$a_{s,n}=a_s\cap [x]^n$，$a_{s,n,j}=g_{n,k(s,n,n)}\circ d_{n,k(s,n,n)}^j(a_{s,n})$，
$b_{s,n,j}=f_{n,k(s,n,j)}(a_{s,n,j})$，
则构造即为$F(A)=\bigcup_{s\in\omega}\bigcup_{n\in\omega}\\(\bigcup_{0\leq j\leq n}b_{s,n,j})$。
鉴于$b_{s,n,j}\subseteq [x]^{k(s,n,j)}$且$k(s,n,j)$作为函数单，
我们其实知道$b_{s,n,j}=F(A)\cap [x]^{k(s,n,j)}$。
第二条说$a_{s,n,j}\in I_{n,k(s,n,n)}$，$j\leq n$和第六条又说$a_{s,n,j}\in I_{n,k(s,n,j)}$，
于是事实上$b_{s,n,j}=\bar{f}_{n,k(s,n,j)}(a_{s,n,j})$，
不妨倒过来写成$a_{s,n,j}=\bar{f}^{-1}_{n,k(s,n,j)}(b_{s,n,j})$。
第四和第五条说
$a_{s,n}=a_{s,n,0}\backslash(a_{s,n,1}\backslash(...(a_{s,n,n-1}\backslash a_{s,n,n})))$，
而$a_s=\bigcup_{n\in\omega}a_{s,n}$，这给出了从$F(A)$算出$A$的完整方案。
:::

::: proof [@thm:有穷性的强度 的证明]
逐一验证。

1. $I$是标准有限/Kuratowski有限：
   来证明$\mathrm{isFin}(x)\to\mathrm{isFin}_I(x)\to\mathrm{isKFin}(x)$。

   1. $\mathrm{isFin}(x)\to\mathrm{isFin}_I(x)$：如果$x$已经与自然数$n$有了双射，
      由有穷性记号的势不变性，我们只要对自然数$n$验证$\mathrm{isFin}_I(n)$。
      查找自然数有穷引理的证明即可。

   2. $\mathrm{isFin}_I(x)\to\mathrm{isKFin}(x)$：如果$x$已知$I$有穷，来验证它同样Kuratowski有穷；
      换言之，给定一个$s\subseteq\wp(x)$满足诸条件，我们要验证$s=\wp(x)$。
      $s\subseteq\wp(x)$带进$I$有穷的条件可见其极大元必须是$x$（否则它可以并一个单点集，
      从而与极大性矛盾），我们只要继续验证$\forall y\subseteq x(y\in s)$。
      分离$s_y=\{t\in s|t\subseteq y\}\subseteq\wp(x)$，我们断言其极大元恰好是$y$，
      从而总有$y\in s_y\subseteq s$；这一断言的证明过程也是完全相同的。

2. $I\to Ia$：证逆否，若$x$不是$Ia$有穷的，则$x$是两个不标准有限（进而特别地不空）集的不交并，
   因此$x$有一个不标准有限的真子集，$x$也就不可能标准有限。

3. $Ia\to II$：反证，若$x$有一个不空子集族链$s$无极大元，
   但同时又有$x$的两个不交子集必至少有一个标准有限。
   因为$s$不空，任取$t\in s$，有$t$与$(\bigcup s)\backslash t$是$x$的两个不交子集。
   若后者标准有限，则可归纳证明$s$有极大元，因此只能是前者标准有限，
   即$\forall t\in s(\mathrm{isFin}(t))$，
   替代公理模式进而给出从$s$到$\omega$的一个子集$s'$的保序双射（取$t\in s$双射到的$n$）。
   如果$s'$是$I$有穷的，则$s'$有极大元，即$s$有极大元，矛盾，故必有$s'$不是$I$有穷的，
   再注意到$s'\subseteq\omega$，
   用替代公理模式就能得知存在$s'$到$\omega$的保序双射（任给$n\in s'$存在$m\in\omega$使得$n$是第$m$
   个数），换言之$s$到$\omega$有保序双射。
   假定$s=\{t_n|n\in\omega\}$从小到大排好，
   我们令$y=\bigcup_{n\in\omega}(t_{2n+1}\backslash t_{2n})$，
   $z=\bigcup_{n\in\omega}(t_{2n+2}\backslash t_{2n})$，则$y\cap z=\varnothing$，
   且容易验证二者均是标准无穷集，矛盾。

4. $II\to III$：我们利用$III=\Delta_4$证逆否，即若存在$x$到$\omega$的满射，
   则存在$x$的不空子集族链无极大元。
   显然若$f:x\to\omega$是满射，只需取不空子集族单调升链$f^{-1}(\ulcorner\mathfrak{n}\urcorner)$，
   不难验证其无极大元；注意这个子集族由替代公理模式得证是集合。

5. $III\to V''$：证逆否，若存在$\wp(x)$到$\ulcorner 2\urcorner\times\wp(x)$的双射，
   则存在$\wp(x)$到其真子集$p$的双射；直接取$\{\varnothing\}\times\wp(x)$的逆像即可。

6. $V''\to\Delta_5$：证逆否，若存在$x$到$\mathrm{Succ}(x)$的满射，
   则存在$\wp(x)$到$\ulcorner 2\urcorner\times\wp(x)$的双射。
   事实上由Cantor–Bernstein–Schröder定理不妨设$f:x\to \mathrm{Succ}(x)$是双射，
   我们知道$f^{-1}:\wp(\mathrm{Succ}(x))\to\wp(x)$同样是双射，
   同时我们还有自然的双射
   $g:\ulcorner 2\urcorner\times\wp(x)\to \wp(\mathrm{Succ}(x)),(\varnothing,t)\mapsto t,(\{\varnothing\},t)\mapsto t\cup\{x\}$，
   两个双射合起来即得。

7. $\Delta_5\to IV$：证逆否，若存在$x$到其真子集$y$的双射，则存在$x$到$\mathrm{Succ}(x)$的满射；
   把$y$双射到$x$，然后把$x\backslash y$全部打到$\{x\}$单点上即可。

8. $IV\to V$：证逆否，若存在$x$到$\ulcorner 2\urcorner\times x$的双射，
   则存在$x$到其真子集$y$的双射；同样直接取$\{\varnothing\}\times x$的逆像即可。

9. $V\to VI$：证逆否，若$x$至少有两个点且有$x\times x$到$x$的双射，
   则存在$x$到$\ulcorner 2\urcorner\times x$的双射；把这两个点双射为$\ulcorner 2\urcorner$，
   然后用Cantor–Bernstein–Schröder定理。

10. $VI\to VII$：证逆否，若$x$上有良序且标准无穷，则$x$至少有两个点且有$x\times x$到$x$的双射；
    这时$x$同构于某无穷序数，对此序数使用Gödel Pairing Function即得。

11. $VII\to VII''$：若$x$标准有穷则$\wp(x)$亦标准有穷，若$x$不可良序化则$\wp(x)$亦不可良序化。

12. $II\to \Delta_3$：我们利用$II=\Delta_2$证逆否，
    即若$x$有无穷子集可线序化则$x$有无穷可线序化分划。
    这个分划以线序化的无穷子集中的每个单点和这无穷子集的补集构成，
    其上线序自然继承（把补集弄到最小元或最大元的地方即可）。

13. $\Delta_3\to IV$：我们利用$IV$当且仅当不存在$\omega$到$x$的单射证逆否，
    即若有$\omega$到$x$的单射，则有$x$的无穷可线序化子集；这是平凡的，
    因为单射的像集甚至是无穷可良序化子集。

14. $IV\to D$：证逆否，若$x$既非空集也非单点集，
    且$y\cup z=x$推出有$x$到$y$的双射或有$x$到$z$的双射，来证明有$x$到其真子集的双射。
    由于$x$不空，取$a\in x$；现在$x\backslash\{a\}$是$x$的真子集，
    且$\{a\}\cup(x\backslash\{a\})=x$。
    由于$x$不是单点集，$x$到$\{a\}$无双射，故$x$到$x\backslash\{a\}$有双射，即为所求。

15. $D\to VII$：证逆否，若$x$无穷且可良序化，则$x$既非空集也非单点集，
    且$y\cup z=x$能推出有$x$到$y$的双射或有$x$到$z$的双射。
    $x$既非空集也非单点集是显然的，因为我们在这前提下不妨设$x$是个无穷序数$\theta\geq\omega$。
    由于$ZF$可证$\aleph_\alpha+\aleph_\beta=\aleph_{\mathrm{max}(\alpha,\beta)}$，结论是显然的。

16. $V''\to VI''$：这是因为$V\to VI$。

17. $VI''\to V$：若$\wp(x)$是$VI$有穷的，由于$\wp(x)$至少是单点集，
    要不然$x=\varnothing$（此时$\wp(x)=\{\varnothing\}$是单点集），
    要不然不存在$\wp(x)\times \wp(x)$到$\wp(x)$的双射；
    我们证明后情况发生时同样不存在$\ulcorner 2\urcorner\times x$到$x$的双射。
    反证，若存在$\ulcorner 2\urcorner\times x$到$x$的双射，
    则同样有$\ulcorner 2\urcorner^{\ulcorner 2\urcorner\times x}$到$\ulcorner 2\urcorner^x$的双射，
    前者自然双射于$(\ulcorner 2\urcorner^x)^{\ulcorner 2\urcorner}$而自然双射于$\wp(x)^{(2)}$，
    后者自然双射于$\wp(x)$，于是构造完成。

18. $I=III''$：分两个方向证明。

    1. $I\to III''$：由于熟知$I''=I$，直接由$I\to III$有$I=I''\to III''$。

    2. $III''\to I$：利用$\Delta_4=III$施行反证，若$x$无穷，
       即对任意自然数$n$均不存在$n$到$x$的双射，我们证明存在$\wp(x)$到$\omega$的满射。
       归纳不难证明对任意自然数$n$均存在$x$的真子集$y_n$与之双射，
       于是我们直接令满射$f:\wp(x)\to\omega$为$y\mapsto n$若$y$双射于$n$（$n\not=\varnothing$），
       或$y\mapsto\varnothing$若$y=\varnothing$或不存在$n\in\omega$双射于$y$。

19. $III=IV''$：由定义显然。

20. $\Delta_1=Ia$：由定义显然。

21. $\Delta_2=II$：分两个方向证明。

    1. $\Delta_2\to II$：如果$x$的任意可线序化的分划均有穷，
       我们来证明其不空子集族链$C\subseteq \wp(x)$必有最大元。
       对$y\in C$考察$C_y=\{z\in C|z\subsetneqq y\}$，
       则有$x$的分划$\{y\backslash \bigcup C_y|y\in C\}\cup (x\backslash\bigcup C)$，
       其上线序可指定为$\forall y\in C((x\backslash\bigcup C)<y\backslash \bigcup C_y)$且
       $y_1\backslash \bigcup C_{y_1}<y_2\backslash \bigcup C_{y_2}$当且仅当$y_1\subsetneqq y_2$。
       于是这分划有穷，自然有$C$有穷，进而可以取到最大元。

    2. $II \to\Delta_2$：证逆否，如果有一个$x$的可线序化的分划$P$无穷，
       我们来构造其不空子集族链$C\subseteq \wp(x)$使之没有最大元或没有最小元。
       对$y\in P$考虑$P_y=\bigcup_{z\in P,z<y}z$。
       由于$P$无穷，其上的线序$<$必然不是双良序（注意$ZF$中已有标准有限等价于近标准有限），
       于是存在$P$的子集$Q$构成$<$关系下的无穷升链或无穷降链，
       对应的$C=\{P_y|y\in Q\}$就没有极大元或极小元。

22. $\Delta_4=III$：分两个方向证明。

    1. $III\to \Delta_4$：
       利用$IV$当且仅当不存在$\omega$到$x$的单射（从而$III$当且仅当不存在$\omega$到$\wp(x)$
       的单射）反证，若存在$x$到$\omega$的满射$f$，
       取对应的单射$f^{-1}:\wp(\omega)\to\wp(x)$在$\omega\subseteq\wp(\omega)$上的限制即得$\omega$到
       $\wp(x)$的单射。

    2. $\Delta_4\to III$：同理反证，若存在$\omega$到$\wp(x)$的单射$f$，
       通过取并集不妨设$n<m\to f(n)\subsetneqq f(m)$，我们构造$x$到$\omega$的满射$g$；若$y\in x$，
       令$n\not=\varnothing$且$y\in f(n)\wedge\forall m\in\omega(n<m\to y\not\in f(m))$时$g(y)=n$，
       $y\in f(\varnothing)\wedge\forall m\in\omega(m\not=\varnothing\to y\not\in f(m))$或
       $\forall n\in\omega\exists m\in\omega(n<m\wedge y\in f(m))$或
       $\neg\exists n\in\omega(y\in f(n))$时$g(y)=\varnothing$即可。

23. $IV$当且仅当不存在$\omega$到$x$的单射：分两个方向证明。

    1. $IV$推出此命题：反证，若存在$\omega$到$x$的单射$f$，
       则$x$和其真子集$x\backslash\{f(\varnothing)\}$之间有自然的双射：
       $f(n)\mapsto f(\mathrm{Succ}(n))$，其余点不动。

    2. 此命题推出$IV$：同反证，若存在$x$到其真子集$y$的双射$f$，我们来构造$\omega$到$x$的单射。
       注意到$y$是真子集，任取一点$a\in x\backslash y$，
       然后重新考察$f$在$x_0=y\cup\{a\}\subseteq x$上的限制$F$。
       我们先用归纳法证明对每个$n\in\omega\backslash\{\varnothing\}$存在$x_0$的子集$x_n$与$n$双射，
       且存在点$a_n\in x_n$使得$F$限制在$x_n\backslash\{a_n\}$上的像集是$x_n\backslash\{a\}$；
       直观上这直接通过令$x_n=\{a,F(a),F(F(a)),...\}$即可实现。
       最后只需论证$n\mapsto a_n=x_n\backslash x_{n-1}$是$\omega\backslash\{\varnothing\}$到$x$
       的单射，这通过归纳给出的描述不难实现。

24. $I=V''''$：显然$I=III''\to V''''$，我们只需证明$V''''\to I$，换言之就是证明：如果集合$x$无穷，
    则$\ulcorner 2\urcorner\times\wp(\wp(x))$与$\wp(\wp(x))$等势。

    现在我们不但要证明$\ulcorner 2\urcorner\times\wp(\wp(x))$与$\wp(\wp(x))$等势，
    其实还要证明$\wp(\omega)\times\wp(\wp(x))$与$\wp(\wp(x))$等势。
    我们记$\mathrm{InfSub}(x)=\wp(x)\backslash\mathrm{FinSub}(x)$，
    则$\wp(\wp(x))$显然与$\wp(\mathrm{FinSub}(x))\times\wp(\mathrm{InfSub}(x))$等势；
    Läuchli引理（@-lem:Läuchli）弱化一下说$\wp(\mathrm{FinSub}(x))$与$(\wp(\mathrm{FinSub}(x)))^2$
    等势，而显然又有$\wp(\mathrm{FinSub}(x))$被$\wp(\omega)$单射，于是显然。

:::

::: remark*
其实这里还有三个没被比较的有穷性：$\Delta_3''$、$\Delta_5''$和$D''$。
注意很多有穷性都表述为某个对象的不存在，且证明中也常常反证，
我们在直觉主义集合论里理应把这些证明视作对应的无穷性之间的强弱关系。
:::

显然，如果我们有选择公理（任何集合均可良序化），则最强的$I$有穷和最弱的$VII''$有穷都是等价的，
所以这个有穷性层级就全部坍塌了；我们现在倒过来考虑这个层级在哪里坍塌能引发全部的坍塌。

::: definition
我们简写下列关于有穷性的命题。

1. $E(Q_1,Q_2)$：两个有穷性$Q_1$与$Q_2$等价，
   $\forall x(\mathrm{isFin}_{Q_1}(x)\leftrightarrow \mathrm{isFin}_{Q_2}(x))$。

2. $C(Q)$：$Q$有穷的非空集族上存在选择函数，
   $\forall x(\forall y\in x\exists z\in y\wedge \mathrm{isFin}_Q(x)\to\exists f\exists z(z=\bigcup x\wedge\mathrm{isFunOn}(f,x,z)\wedge\forall y\in x(f(y)\in y)))$。

3. $C^-(Q)$：$Q$有穷的标准无穷非空集族上存在部分选择函数，
   $\forall x(\forall y\in x\exists z\in y\wedge\mathrm{isFin}_Q(x)\wedge\neg\mathrm{isFin}(x)\to \exists f\exists z\exists w(w\subseteq x\wedge\neg\mathrm{isFin}(w)\wedge z=\bigcup w\wedge\mathrm{isFunOn}(f,w,z)\wedge\forall y\in w(f(y)\in y)))$。

:::

这些定义首先直接给出一些显然的事实。

::: theorem [$ZF$]
我们给出以下事实，不加证明。

1. $C(I)$且$C^-(I)$。

2. 任给有穷性$Q$总有$E(I,Q)\to C(Q)$且$C(Q)\to C^-(Q)$。

3. 任给有穷性满足$Q_1\to Q_2$，总有$C(Q_2)\to C(Q_1)$且$C^-(Q_2)\to C^-(Q_1)$。

:::

这立即指出，我们可以将有穷性的强度列表复制两份并反转箭头方向，作为对应的$C(Q)$和$C^-(Q)$的强度列表；
而且还能平行地指出$C(Q)\to C^-(Q)$这一系列箭头。
这一整张表上可加入还有许多，例如$Q_1\to Q_2$但$C^-(Q_2)\to C(Q_1)$有哪些可能，
$Q_1\to Q_2$但$C(Q_1)\to C^-(Q_2)$有哪些可能，诸多$E(Q_1,Q_2)$的强度，以及诸多推断的独立性等等；
笔者也不确定这张表现在可以做到多完善，但想来并非所有能问的问题都已被解答。
我们只是指出一些已知与$AC$等价的命题。

::: theorem [$ZF$] {@thm:与AC等价的有穷性命题}
$AC$与下列命题中的每一个都等价：$E(I,D)$、$E(I,VI)$、$E(V,VI)$、$E(VI,VII)$、$C(VII)$、$C(VII'')$。
:::

::: lemma [$ZF$] {@lem:选择函数与良序}
若$C(Q)$且$\wp(x)$是$Q$有限的，则$x$可良序化。
:::

::: proof
若$\wp(x)$是$Q$有限的，则$\wp(x)\backslash\{\varnothing\}$仍然是$Q$有限的，
于是$C(Q)$指出存在其选择函数$F:\wp(x)\backslash\{\varnothing\}\to x$，
接下来的过程照抄$AC\to WO$的证明即可。
:::

::: lemma [$ZF$] {@lem:并与积双射}
如果$x$是集合，$y$是可良序化的集合，$x\cap y=\varnothing$且$x\cup y$双射于$x\times y$，
则$x$单射到$y$或$y$单射到$x$。
:::

::: proof
假定$x\times y=x'\cup y'$且$x$与$x'$双射、$y$与$y'$双射、$x'\cap y'=\varnothing$。
如果存在$a\in x$使得$\forall b\in y((a,b)\in x')$，则$b\mapsto (a,b)$给出$y$到$x'$的单射；
否则$\forall a\in x\exists b_a\in y((a,b_a)\in y')$，则$a\mapsto (a,b_a)$给出$x$到$y'$的单射。
:::

::: proof [@thm:与AC等价的有穷性命题 的证明]
$AC$推出这一系列命题中的每个；已知$I\to D$、$I\to VI$、$V\to VI$、
$VI\to VII$和$C(VII'')\to C(VII)$，因此只需证明下列命题：

1. $C(VII)\to AC$：我们显然不是冲着选择公理$AC$去的，而是冲着良序原则$WO$去的。
   我们利用 @lem:选择函数与良序。

   现在假定$C(VII)$，我们来证明每个集合都可良序化。
   反证，若$x$不可良序化，则$\wp(x)$必须也不可良序化，于是$\wp(x)$是$VII$有限的，
   这由 @lem:选择函数与良序 又说明$x$是可良序化的，矛盾。

2. $(D\to I)\to AC$：我们需要一个中间形式。

   **定义。** 令$CN4$为以下命题：
   $\forall x\forall y(\exists f(\mathrm{isInjOn}(f,\omega,y))\to \exists f(\\\mathrm{isBijOn}(f,x\cup y,x)\vee\mathrm{isBijOn}(f,x\cup y,y)))$。

   我们来证明$(D\to I)\to CN4$且$CN4\to WO$。

   1. $(D\to I)\to CN4$：注意到$x\cup y=x\cup y$直接满足$D$无穷的使用条件，
      只需证明此时$x\cup y$是$I$无穷的（即不能被任何自然数双射到）。
      否则，$y\subseteq x\cup y$也会是$I$有穷的，这与$y$是$IV$无穷的矛盾。

   2. $CN4\to WO$：任给集合$x$，我们证明它可良序化。如果$x$是$I$有穷集则显然可良序化。
      对任意$I$无穷集合$x$，我们取$y$为其Hartogs数，则自然有$\omega\leq y$，
      于是$x\cup y$或者与$y$双射或者与$x$双射。
      如果是后者，则限制后我们会得到$y$到$x$的单射，与Hartogs数的定义矛盾；
      因此必然有$x\cup y$与$y$双射，从而$x\cup y$可良序化，自然$x$可良序化。

3. $(VI\to I)\to AC$：首先我们利用 @lem:并与积双射。

   因此，我们不妨证明$I$无穷集合$x$与其Hartogs数$y$总有$x\cup y$双射于$x\times y$，
   这结合 @lem:并与积双射 和$y$不单射到$x$就说明$x$单射到$y$，从而$x$可良序化。
   注意显然有$x\cup y$到$x\times y$的单射，
   由Cantor–Bernstein–Schröder定理只需再构造一个$x\times y$到$x\cup y$的单射。
   注意$x\cup y$同样显然是$I$无穷集，条件就让它双射于$(x\cup y)^{(2)}$，
   后者自然双射于$x^{(2)}\cup(\ulcorner 2\urcorner\times (x\times y))\cup y^{(2)}$，
   而$x\times y$自然单射到这个集合，即证。

4. $(VI\to V)\to AC$：注意到上个证明中我们事实证明了以下断言：若$x\cup y$双射于$(x\cup y)^{(2)}$，
   此处$y$是$x$的Hartogs数，则$x$可良序化。
   要证明任何$I$无穷集合$x$都可良序化，我们考虑证明任意$x$均可嵌入一个更大的集合$a$中，
   且$a$满足$a\cup b$双射于$(a\cup b)^{(2)}$，此处$b$是$a$的Hartogs数，从而$a$可良序化，
   从而$x$可良序化。观察到以下事实。

   **断言（杨）。** 任给$I$无穷集合$x$，若$x\cap\omega=\varnothing$，
   则总有$z=\wp(x\cup \omega)$满足$z$与$\ulcorner 2\urcorner\times z$双射。

   **证明。** 显然只要造$\ulcorner 2\urcorner\times z$到$z$的单射。
   我们令$(\varnothing,x'\cup s)\mapsto x'\cup\{\varnothing\}\cup\{2n+2|n\in s\}$而
   $(\{\varnothing\},x'\cup s)\mapsto x'\cup\{\{\varnothing\}\}\cup\{2n+3|n\in s\}$即可，
   这里$2n+2$是自然数运算。

   现在对$I$无穷集合$x$，不妨设$x\cap\omega=\varnothing$，用断言将$x$嵌入$z$中，
   假设$z$的Hartogs数是$y$，又不妨设$z\cap y=\varnothing$，
   于是$\ulcorner 2\urcorner\times(z\cup y)$自然双射于$z\cup y$，
   于是由$VI\to V$知$(z\cup y)^{(2)}$同样双射于$z\cup y$，于是$z$可良序化，进而$x$可良序化，证毕。

5. $(VII\to VI)\to AC$：
   $VI$无穷推出$VII$无穷和Gödel Pairing Function共同保证了任意$I$无穷集合$x$均满足$x\times x$双射于
   $x$，也就是说$(VII\to VI)\to(VI\to I)$。

:::
