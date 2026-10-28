---
title: 常见定义速查
---

<problems>
- $\mathrm{isRelOn}(R,x)$的定义似乎循环引用了自身，右边似乎应为$\mathrm{isRel}(R,x,x)$；$\mathrm{isFunOn}(f,x,y)$的定义中$\mathrm{isRelOn}(R,x,y)$似乎应为$\mathrm{isRel}(f,x,y)$。
- 等价关系$\mathrm{isEquiOn}$的定义中$\mathrm{isPOon}$似乎应为$\mathrm{isPreOon}$（偏序加对称只给出恒等关系）。
- 良基关系$\mathrm{isWFOn}$与良序关系$\mathrm{isWOOn}$的定义中，$\forall b\in y((a,b)\in R)$似乎应为$\forall b\in y(\neg((b,a)\in R))$（$R$-极小元）。
</problems>

我们来考虑一个最简单的弱集合论。

::: definition
考虑以下集合论。

- （最简单的集合论）$S_0$：外延、空集、对集、并集、差集。

- （受限集合论）$ReS_0$：$S_0$加$\Delta_0$分离公理模式。

:::

我们考虑它能允许集论语言扩展出哪些东西。

::: definition [$ReS_0$]
定义以下$\Delta_0$函数符号。

1. （零元函数，空集）$x=\varnothing\leftrightarrow\forall y\in x(y\not= y)$

2. （二元函数，
   对集）$z=\{x,y\}\leftrightarrow x\in z\wedge y\in z\wedge \forall w\in z(w=x\vee w=y)$

3. （一元函数，
   并集）$y=\bigcup x\leftrightarrow \forall z\in y\exists w\in x(z\in w)\wedge \forall w\in x\forall z\in w(z\in y)$

4. （二元函数，并集）$z=x\cup y\leftrightarrow z=\bigcup\{x,y\}$

5. （二元函数，
   差集）$z=x\backslash y\leftrightarrow \forall w\in x(w\not\in y\to w\in z)\wedge\forall w\in z(w\in x\wedge w\not\in y)$

6. （二元函数，
   交集）$z=x\cap y\leftrightarrow \forall w\in x(w\in y\to w\in z)\wedge\forall w\in z(w\in x\wedge w\in y)$

7. （一元函数，
   交集）$z=\bigcap x\leftrightarrow \forall w\in z\exists y\in x(w\in y)\wedge\forall w\in z\forall y\in x(w\in y)\wedge \forall y\in x\forall w\in y(\forall y'\in x(w\in y')\to w\in z)$

8. （二元函数，
   Wiener–Kuratowski二元组/有序对）$z=(x,y)\leftrightarrow \exists a\in z\exists b\in z(z=\{a,b\}\wedge a=\{x,x\}\wedge b=\{x,y\})$

9. （$\mathfrak{n}\geq 2$元函数，
   Wiener–Kuratowski$\mathfrak{n}$
   元组）$z=(x_0,...,x_{\mathfrak{n-1}})_{WK}\leftrightarrow z=(x_0,(x_1,(...,(x_{\mathfrak{n}-2},x_{\mathfrak{n}-1})...)))$

10. （$\mathfrak{n}\geq 2$元函数，
    元组）$z=(x_0,...,x_{\mathfrak{n-1}})\leftrightarrow z=(...((x_0,x_1),x_2),...,x_{\mathfrak{n}-1})$

11. （一元函数，
    有序对投影到第$1$
    个分量）$y= x_{(2)}^{(0)}\leftrightarrow\exists u\in x\exists z\in u(x= (y,z))\vee(\neg\exists u\in x\exists z\in u(x= (y,z))\wedge y= \varnothing)$

12. （一元函数，
    有序对投影到第$2$
    个分量）$z= x_{(2)}^{(1)}\leftrightarrow\exists v\in x\exists y\in v(x= (y,z))\vee(\neg\exists v\in x\exists y\in v(x= (y,z))\wedge z= \varnothing)$

::: remark*
采取WK为元组的标准定义还是采取我们这里的反WK为元组的标准定义都没关系，
它们主要是在处理多元函数时有所区别：若采取WK元组，
$f(x_0,...,x_{\mathfrak{n}-1})$就要理解为$f(x_0)(x_1)...(x_{\mathfrak{n}-1})$，
读$\mathrm{dom}(f)$就会得到全体$x_0$；若采取反WK元组，
$f(x_0,...,x_{\mathfrak{n}-1})$就要理解为$f((x_0,...,x_{\mathfrak{n}-1}))$，
读$\mathrm{dom}(f)$就会得到全体元组$(x_0,...,x_{\mathfrak{n}-1})$。笔者喜欢后一种理解。
:::

定义以下$\Delta_0$谓词与预函数。

1. （二元谓词，包含于）$x\subseteq y\leftrightarrow \forall z\in x(z\in y)$

2. （一元谓词，
   是有序对）$\mathrm{isOPair}(x)\leftrightarrow\exists a\in x\exists b\in x\exists y\in a\exists z\in b(x= (y,z))$

3. （一元谓词，是关系）$\mathrm{isRel}(x)\leftrightarrow\forall y\in x(\mathrm{isOPair}(y))$

4. （三元谓词，
   是某两个集合之间的关系）$\mathrm{isRel}(R,x,y)\leftrightarrow\mathrm{isRel}(R)\wedge\forall u\in R\exists a\in x\exists b\in y(u=(a,b))$

5. （二元谓词，是某个集合之上的关系）$\mathrm{isRelOn}(R,x)\leftrightarrow\mathrm{isRelOn}(R,x,x)$

6. （二元预函数，
   （二元）卡氏积）$z=x\times y\leftrightarrow \forall u\in z\exists a\in x\exists b\in y(u=(a,b))\wedge\forall a\in x\forall b\in y\exists u\in z(u=(a,b))$

7. （$\mathfrak{n}\geq 2$元预函数，
   $\mathfrak{n}$
   元卡氏积）$z=x_0\times...\times x_{\mathfrak{n}-1}\leftrightarrow z=((...((x_0\times x_1)\times x_2)...\times x_{\mathfrak{n}-2})\times x_{\mathfrak{n}-1})$

8. （一元预函数，
   $\mathfrak{n}$重卡氏幂）$z=x^{(\mathfrak{n})}\leftrightarrow z=x\times...\times x$（重复
   $\mathfrak{n}$次）

9. （一元预函数，
   幂集）$z=\wp x\leftrightarrow\forall y\in z\forall w\in y(w\in x)\wedge\forall y(\forall w\in y(w\in x)\to y\in z)$，
   这个预函数$\Pi_1$。

接着定义以下$\Delta_0$函数。

1. （一元函数，
   定义域）$y= \mathrm{dom}(x)\leftrightarrow\forall z\in y\exists w\in x(z= w^{(0)}_{(2)})\wedge \forall w\in x\forall u\in w\forall v\in u(v= w^{(0)}_{(2)}\to v\in y)$

2. （一元函数，
   值域）$y= \mathrm{ran}(x)\leftrightarrow\forall z\in y\exists w\in x(z= w^{(1)}_{(2)})\wedge \forall w\in x\forall u\in w\forall v\in u(v= w^{(1)}_{(2)}\to v\in y)$

3. （二元函数，
   限制）$z= x\upharpoonright y\leftrightarrow\forall w\in z(\mathrm{isOPair}(w)\wedge w\in x\wedge\exists a\in w\exists b\in a(a=\{b\}\wedge b\in y))\wedge\forall b\in y\exists w\in z\exists a\in w(a=\{b\})$

4. （二元函数，
   像集）$z= x``y\leftrightarrow\forall w\in z\exists u\in x\exists b\in y(\mathrm{isOPair}(u)\wedge\exists v_1\in u\exists v_2\in u(v_1= \{b\}\wedge v_2=\{b,w\}))\wedge\forall b\in y(\exists u\in x(\mathrm{isOPair}(u)\wedge\exists v_1\in u(v_1=\{b\}))\to\exists w\in z\exists u\in x(\mathrm{isOPair}(u)\wedge\exists v_1\in u\exists v_2\in u(v_1= \{b\}\wedge v_2=\{b,w\})))$

定义以下$\Delta_0$的谓词与预函数。

1. （一元谓词，
   是函数）$\mathrm{isFun}(x)\leftrightarrow\forall y\in x(\mathrm{isOPair}(y))\wedge \forall u_1\in x\forall u_2\in x\forall v_1^1\in u_1\forall v_1^2\in u_1\forall v_2^1\in u_2\forall v_2^2\in u_2(u_1=\{v_1^1,v_1^2\}\wedge u_2=\{v_2^1,v_2^2\}\wedge v_1^1= v_2^1\wedge\mathrm{isSingSet}(v_1^1)\to v_1^2= v_2^2)$

2. （三元谓词，
   是某两个集合之间的函数）$\mathrm{isFunOn}(f,x,y)\leftrightarrow\\\mathrm{isRelOn}(R,x,y)\wedge\forall z\in x\exists u\in y\forall v\in y((z,v)\in f\leftrightarrow u= v)$

3. （一元谓词，是双射），$\mathrm{isBij}$：
   $\mathrm{isBij}(f)$定义为
   $\mathrm{isFun}(f)\wedge\forall x\in f\forall y\in f(\exists u\in x\exists v\in u(u= \{v\}\wedge u\in y)\to x= y)$

4. （三元谓词，
   是某两个集合之间的单射）$\mathrm{isInjOn}(f,x,y)\leftrightarrow\\\mathrm{isFunOn}(f,x,y)\wedge\forall u\in x\forall v\in x(\exists w\in y((u,w)\in f\wedge(v,w)\in f)\to u= v)$

5. （三元谓词，
   是某两个集合之间的满射）$\mathrm{isSurjOn}(f,x,y)\leftrightarrow\\\mathrm{isFunOn}(f,x,y)\wedge\forall w\in y\exists z\in x((z,w)\in f)$

6. （三元谓词，
   是某两个集合之间的双射）$\mathrm{isBijOn}(f,x,y)\leftrightarrow\\\mathrm{isInjOn}(f,x,y)\wedge\mathrm{isSurjOn}(f,x,y)$

7. （一元预函数，
   恒等）$f= \mathrm{id}(x)\leftrightarrow\mathrm{isFunOn}(f,x,x)\wedge \mathrm{isEquiOn}(f,x)$

8. （二元预函数，
   复合）记公式$\varphi_0(f,g,h)$为
   $\mathrm{isFun}(f)\wedge\mathrm{isFun}(g)\wedge\mathrm{isFun}(h)$\
   公式$\varphi_1(f,g,h)$为
   $\forall u_1\in h\forall v_1^1\in u_1(\exists x\in v_1^1(v_1^1=\{x\})\to\exists v_1^2\in u_1\exists x\in v_1^2\exists y\in v_1^2\exists u_2\in g\exists v_2^1\in u_2\exists v_2^2\in u_2\exists z\in v_2^2\exists u_0\in f\exists v_0^1\in u_0\exists v_0^2\in u_0(v_1^1=\{x\}\wedge v_1^2=\{x,y\}\wedge v_2^1=\{y\}\wedge v_2^2=\{y,z\}\wedge v_0^1=\{x\}\wedge v_0^2= \{x,z\}\wedge u_1=\{v_1^1,v_1^2\}\wedge u_2=\{v_2^1,v_2^2\}\wedge u_0= \{v_0^1,v_0^2\}))$\
   公式$\varphi_2(f,h)$为
   $\forall u_0\in f\forall v_0^1\in u_0(\exists x\in v_0^1(v_0^1=\{x\})\to\exists u_1\in h(v_0^1\in u_1))$\
   公式$\varphi_3(g,h)$为
   $\exists u_1\in h\exists v_1^2\in u_1\exists y\in v_1^2\forall u_2\in g\forall v_2^1\in u_2(\neg(v_2^1=\{y\}))$\
   则
   $f= g\circ h\leftrightarrow(\varphi_1(f,g,h)\wedge\varphi_2(f,h)\wedge\neg\varphi_3(g,h)\wedge\varphi_0(f,g,h))\vee((\neg\varphi_0(f,g,h)\vee\varphi_3(g,h))\wedge f=\varnothing)$\
   直观上，$\varphi_0$说它们仨都是函数，$\varphi_1$说每个形如$g(h(x))$的东西都是某个$f(x)$，
   $\varphi_2$说$\mathrm{dom}(f)\subseteq\mathrm{dom}(h)$，
   $\neg\varphi_3$说$\mathrm{ran}(h)\subseteq\mathrm{dom}(g)$。

9. （二元谓词，
   是分裂对）记公式$\varphi(f,g)$为
   $\forall u_2\in g\forall v_2^1\in u_2\forall v_2^2\in u_2(\exists y\in v_2^1\exists x\in v_2^2(v_2^1=\{y\}\wedge v_2^2=\{y,x\}\wedge u_2=\{v_2^1,v_2^2\})\to \exists y\in v_2^1\exists x\in v_2^2\exists u_1\in f\exists v_1^1\in u_1(v_2^1=\{y\}\wedge v_2^2=\{y,x\}\wedge v_1^1=\{x\}\wedge u_1=\{v_1^1,v_2^2\}))$\
   则
   $\mathrm{isSplitPair}(f,g)\leftrightarrow\mathrm{isFun}(f)\wedge\mathrm{isFun}(g)\wedge\varphi(f,g)$\
   直观上，$\varphi(f,g)$说$\forall y\in\mathrm{dom}(g)((y,y)\in f\circ g)$。

10. （二元谓词，
    是逆）$\mathrm{isInverse}(f,g)\leftrightarrow\mathrm{isSplitPair}(f,g)\wedge\mathrm{isSplitPair}(g,f)$

定义以下$\Delta_0$的谓词。

1. （二元谓词，
   自反关系）$\mathrm{isReflOn}(R,x)\leftrightarrow\mathrm{isRelOn}(R,x)\wedge\forall y\in x((y,y)\in R)$

2. （二元谓词，
   非自反关系）$\mathrm{isNReflOn}(R,x)\leftrightarrow\mathrm{isRelOn}(R,x)\wedge\forall y\in x(\neg((y,y)\in R))$

3. （二元谓词，
   对称关系）$\mathrm{isSymOn}(R,x)\leftrightarrow\mathrm{isRelOn}(R,x)\wedge\forall y\in x\forall z\in x((y,z)\in R\to (z,y)\in R)$

4. （二元谓词，
   非对称关系）$\mathrm{isNSymOn}(R,x)\leftrightarrow\mathrm{isRelOn}(R,x)\wedge\forall y\in x\forall z\in x((y,z)\in R\to \neg((z,y)\in R))$

5. （二元谓词，
   反对称关系）$\mathrm{isASymOn}(R,x)\leftrightarrow\mathrm{isRelOn}(R,x)\wedge\forall y\in x\forall z\in x((y,z)\in R\to (z,y)\in R\to z= y)$

6. （二元谓词，
   传递关系）$\mathrm{isTransOn}(R,x)\leftrightarrow\mathrm{isRelOn}(R,x)\wedge\forall y\in x\forall z\in x\forall w\in x((y,z)\in R\to(z,w)\in R\to(y,w)\in R)$

7. （二元谓词，
   线关系）$\mathrm{isLinOn}(R,x)\leftrightarrow\mathrm{isRelOn}(R,x)\wedge\forall y\in x\forall z\in x((y,z)\in R\vee(z,y)\in R)$

8. （二元谓词，
   三岐关系）$\mathrm{isTriOn}(R,x)\leftrightarrow\mathrm{isRelOn}(R,x)\wedge\forall y\in x\forall z\in x((y,z)\in R\vee(z,y)\in R\vee z= y)$

9. （二元谓词，
   预序）$\mathrm{isPreOon}(R,x)\leftrightarrow\mathrm{isReflOn}(R,x)\wedge\mathrm{isTransOn}(R,x)$

10. （二元谓词，
    严格预序）$\mathrm{isSPreOon}(R,x)\leftrightarrow\mathrm{isNReflOn}(R,x)\wedge\mathrm{isTransOn}\\(R,x)$

11. （二元谓词，
    偏序）$\mathrm{isPOon}(R,x)\leftrightarrow\mathrm{isPreOon}(R,x)\wedge\mathrm{isASymOn}(R,x)$

12. （二元谓词，
    严格偏序）$\mathrm{isSPOon}(R,x)\leftrightarrow\mathrm{isSPreOon}(R,x)\wedge\mathrm{isNSymOn}\\(R,x)$

13. （二元谓词，
    线序）$\mathrm{isLOon}(R,x)\leftrightarrow\mathrm{isPOon}(R,x)\wedge\mathrm{isLinOn}(R,x)$

14. （二元谓词，
    严格线序）$\mathrm{isSLOon}(R,x)\leftrightarrow\mathrm{isSPOon}(R,x)\wedge\mathrm{isTriOn}(R,x)$

15. （二元谓词，
    等价关系）$\mathrm{isEquiOn}(R,x)\leftrightarrow\mathrm{isPOon}(R,x)\wedge\mathrm{isSymOn}(R,x)$

16. （二元谓词，
    外延关系）$\mathrm{isExtOn}(R,x)\leftrightarrow\mathrm{isRelOn}(R,x)\wedge\forall y\in x\forall z\in x(\forall w\in x((w,y)\in R\leftrightarrow(w,z)\in R)\to y= z)$

定义以下$\Delta_0$的谓词与函数符号。

1. （一元谓词，是传递集）$\mathrm{isTrans}(x)\leftrightarrow\forall y\in x\forall z\in y(z\in x)$

2. （一元谓词，
   是序数）$\mathrm{isOrd}(x)\leftrightarrow\mathrm{isTrans}(x)\wedge\forall y\in x\forall z\in x(y\in z\vee z\in y\vee y= z)$

3. （一元函数，
   后继）$y= \mathrm{Succ}(x)\leftrightarrow\forall z\in y(z\in x\vee z= x)\wedge x\in y\wedge x\subseteq y$

4. （一元谓词，
   是后继序数）$\mathrm{isSuccOrd}(x)\leftrightarrow\mathrm{isOrd}(x)\wedge \exists y\in x(x= \mathrm{Succ}(y))$

5. （一元谓词，
   是极限序数）$\mathrm{isLimOrd}(x)\leftrightarrow\mathrm{isOrd}(x)\wedge \forall y\in x\exists z\in x(z= \mathrm{Succ}(y))$

定义以下$\Pi_1$谓词。

1. （二元谓词，
   是良基关系）$\mathrm{isWFOn}(R,x)\leftrightarrow \mathrm{isRelOn}(R,x)\wedge \forall y(\exists a\in y\wedge y\subseteq x\to \exists a\in y\forall b\in y((a,b)\in R))$。

2. （二元谓词，
   是良序关系）$\mathrm{isWOOn}(R,x)\leftrightarrow \mathrm{isLOOn}(R,x)\wedge \forall y(\exists a\in y\wedge y\subseteq x\to \exists a\in y\forall b\in y((a,b)\in R))$。

3. （一元谓词，
   是超传递集）$\mathrm{isSTrans}(x)\leftrightarrow \exists y\in x\wedge \forall y\in x\forall z(z\in y\vee\forall w\in z(w\in y)\to z\in x)$

:::

::: proof
验证诸函数及预函数良定略。
:::

$ReS_0$能论证大多数我们熟知的所有仅用到以上概念的集合论命题，我们不会继续一一验证并展开讨论。
