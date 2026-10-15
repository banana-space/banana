---
title: 回顾集论语言
---
让我们首先回顾集合论语言。

::: definition
默认的集合论语言$\mathcal{L}_{\in}=\{\in,=\}$是带有二元谓词$\in$的含等词语言。正如算术语言将$\forall n(n\leq m\to...)$简记为$\forall n\leq m...$，我们将$\forall x(x\in y\to...)$记为$\forall x\in y...$，将$\exists x(x\in y\wedge...)$记为$\exists x\in y...$，并合称这两种形式的量词为受限(Restricted)量词。这同样指出一系列对公式的复杂度分层，我们称之为Levy层级：

- 我们首先定义这个层级最底端的公式类，称为$\Delta_0$公式：

  - $x\in y$和$x=y$是$\Delta_0$公式。

  - 如果$\phi,\psi$是$\Delta_0$公式，则$\neg\phi,\phi\wedge\psi,\phi\vee\psi,\phi\to\psi,\phi\leftrightarrow\psi$同样是$\Delta_0$公式。

  - 如果$\phi$是$\Delta_0$公式，则$\forall x\in y(\phi)$和$\exists x\in y(\phi)$是$\Delta_0$公式。

  - 除此之外别无$\Delta_0$公式。

- 我们现在交错地定义$\Sigma_\mathfrak{n}$和$\Pi_\mathfrak{n}$语句如下：

  - $\Delta_0$公式同时被视为$\Sigma_0$公式和$\Pi_0$公式。

  - 若$\phi$是$\Sigma_\mathfrak{n}$公式，则$\forall x(\phi)$是$\Pi_{\mathfrak{n}+1}$公式，$\exists x(\phi)$是$\Sigma_\mathfrak{n}$公式。

  - 若$\phi$是$\Pi_\mathfrak{n}$公式，则$\forall x(\phi)$是$\Pi_{\mathfrak{n}}$公式，$\exists x(\phi)$是$\Sigma_{\mathfrak{n}+1}$公式。

  - 若$\mathfrak{n}<\mathfrak{m}$，而$\phi$是$\Sigma_\mathfrak{n}$公式或$\Pi_\mathfrak{n}$公式，则我们同样认为$\phi$是$\Sigma_\mathfrak{m}$公式和$\Pi_\mathfrak{m}$公式。

更多的时候，我们要考虑理论$T$下的Levy层级。

- 给定集合论理论$T$，如果公式$\phi$和$\psi$满足$T\vdash \phi\leftrightarrow\psi$，且$\psi$是$\Gamma_\mathfrak{n}$公式（$\Gamma$代指$\Sigma,\Pi,\Delta$三种符号之一，下同），则称$\phi$是$\Gamma_\mathfrak{n}^T$公式。

- 记仅含经典一阶逻辑公理的集合论理论为$\mathrm{CFOL}$，我们今后默认一切集合论理论$T$都是$\mathrm{CFOL}$的扩张。$\Gamma_\mathfrak{n}^{\mathrm{CFOL}}$公式将简称为$\Gamma_\mathfrak{n}$公式。

- 如果集合论理论$T$下，公式$\phi$同时是$\Sigma_\mathfrak{n}^T$公式，也是$\Pi_\mathfrak{n}^T$公式，则称$\phi$是$\Delta_\mathfrak{n}^T$公式。特别地简称$\Delta_\mathfrak{n}^{\mathrm{CFOL}}$公式为$\Delta_\mathfrak{n}$公式。

:::

我们来指出一些对于公式复杂度的事实。

::: theorem [元定理]
考虑高复杂度的公式被逻辑连接词连接后的复杂度。

- 对于$\neg\phi$：如果$\phi$是$\Sigma_\mathfrak{n}^T$的，则其否定是$\Pi_\mathfrak{n}^T$的；如果$\phi$是$\Pi_\mathfrak{n}^T$的，则其否定是$\Sigma_\mathfrak{n}^T$的；如果$\phi$是$\Delta_\mathfrak{n}^T$的，则其否定同样是$\Delta_\mathfrak{n}^T$的。

- 对于$\phi\wedge\psi$和$\phi\vee\psi$：如果它们同是$\Gamma_\mathfrak{n}^T$公式，则连接后仍是$\Gamma_{\mathfrak{n}}^T$公式；如果它们一个是$\Sigma_\mathfrak{n}^T$公式，另一个是$\Pi_\mathfrak{n}^T$公式，则连接后是$\Delta_{\mathfrak{n}+1}^T$公式。

- 对于$\phi\to\psi$：将它理解为$\neg\phi\vee\psi$。

- 对于$\phi\leftrightarrow \psi$：将它理解为$(\phi\wedge\psi)\vee(\neg\phi\wedge\neg\psi)$。

:::

::: proof
简单的一阶逻辑练习。
:::

::: remark*
受限量化只在加在$\Delta_0$公式上时才不增加公式复杂度。
:::

::: -remark [异议]
为何此处我们选取“元定理”这一术语呢？
:::

::: -remark [回应]
在这一章中，我们必须时刻警惕所作的论断究竟是在某个（弱）集合论内部形式地给出，还是在某个特定的集合论外部给出的。对于后一种定理，我们将采取将其特别标注为元定理的方式来做出区别。具体而言，我们有两种理解外部元定理的方案：

- 这些元定理涉及了一些并不生活在我们正在处理的具体集合宇宙中的对象，例如（元逻辑的）公式、（绝对标准的元）自然数，因此（暂时）不能被理解为某一个具体集合宇宙内部的定理。

- 这些元定理是对于公式阐明的定理，因此我们正生活在的世界要临时地被理解为元元语境（以保证元定理具有正确的形式化版本）。

:::

接下来，我们来回顾最广为人知的集合论理论：$ZFC$。

::: definition
我们给（默认可数变元的一阶）集合论语言$\mathcal{L}_{\in}=\{\in\}$提名以下公理：

1. 外延公理(Ext)：$\forall z\in x(z\in y)\wedge\forall z\in y(z\in x)\to x=y$

2. 空集公理(Emp)：$\exists x\forall y\in x(y\not= y)$

3. 对集公理(Pair)：$\forall x\forall y\exists z(x\in z\wedge y\in z\wedge\forall w\in z(w=x\vee w=y))$

4. 并集公理(Union)：$\forall x\exists y(\forall z\in y\exists w\in x(z\in w)\wedge \forall w\in x\forall z\in w(z\in y))$

5. 差集公理(Diff)：$\forall x\forall y\exists z(\forall w\in x(w\not\in y\to w\in z)\wedge\forall w\in z(w\in x\wedge w\not\in y))$

6. （集合）基础公理(Found)：$\forall x(\exists y\in x\to\exists y\in x(\forall z\in y(z\not\in x)\wedge\forall z\in x(z\not\in y)))$

7. 传递包括公理(TCo)：$\forall x\exists y(x\in y\wedge\forall z\in y\forall w\in z(w\in y))$

8. 传递闭包公理(TCl)：$\forall x\exists y(\forall w\forall a(a\in w\to w\in y\to a\in y)\wedge \forall z(\forall w\forall a(a\in w\to w\in z\to a\in z)\to\forall w(w\in x\to w\in z)\to\forall w(w\in y\to w\in z)))$

9. 卡氏积公理(Cart)：$\forall x\forall y\exists z\forall w(w\in z\leftrightarrow \exists a\exists b(a\in x\wedge b\in y\wedge \forall u(u\in w\leftrightarrow(\forall v(v\in u\leftrightarrow v= a)\vee \forall v(v\in u\leftrightarrow (v= a\vee v= b))))))$

10. 幂集公理(Pow)：$\forall x\exists z(\forall y\in z\forall w\in y(w\in x)\wedge\forall y(\forall w\in y(w\in x)\to y\in z))$

11. 弱无穷公理(wInf)：$\exists x(\exists y\in x\wedge\forall y\in x\exists z\in x(y\in z))$

12. 无穷公理(Inf)：$\exists x(\exists y(y\in x\wedge \neg\exists z(z\in y))\wedge \forall y(y\in x\to \exists z(z\in x\wedge \forall w(w\in z\leftrightarrow(w\in y\vee w= y)))))$

13. 强无穷公理(sInf)：$\exists w(\exists x\in w\neg(\exists y\in x)\wedge\forall x\in w\exists y\in w(\forall z\in y(z= x\vee z\in x)\wedge x\in y\wedge \forall z\in x(z\in y))\wedge \forall x\in w(\exists y\in x\to\exists y\in x(\forall z\in x(z= y\vee z\in y)\wedge\forall z\in y(z\in x)))\wedge \forall x\in w\forall y\in w(x= y\vee x\in y\vee y\in x)\wedge \forall x\in w\forall y\in x\forall z\in y(z\in x)\wedge \forall x\in w\forall y\in x(y\in w))$

14. 选择公理(AC)：$\forall x(\exists y\in x\wedge\forall y\in x\exists z\in y\wedge\forall y\in x\forall z\in x(y\not=z\to\forall w\in y(w\not\in z)\wedge \forall w\in z(w\not\in y))\to \exists f(\forall y\in x\exists z\in f(z\in y)\wedge \forall z\in f\exists y\in x(z\in y)))$

15. 良序公理(WO)：$\forall x\exists r(\mathrm{isWOOn}(r,x))$

在一阶语言的讨论中，我们默认一个类就是一个$\mathcal{L}_\in$公式$\varphi(x_1,...,x_\mathfrak{n})$，这里小括号中的符号有序列表穷尽其自由变元且不含其约束变元（换言之，可以出现公式中并未出现的变元符号）。我们列举以下公理模式。

1. 分离公理模式(Sep)：$\mathfrak{n}+1$个变元，$\forall v_0...\forall v_{\mathfrak{n}-1}\forall x\exists y\forall z(z\in y\leftrightarrow(z\in x\wedge \varphi(z,v_0,...,v_{\mathfrak{n}-1})))$

2. 收集公理模式(Coll)：$\mathfrak{n}+2$个变元，$\forall v_0...\forall v_{\mathfrak{n}-1}(\forall x\exists y(\varphi(x,y,v_0,...,\\v_{\mathfrak{n}-1}))\to \forall a\exists b\forall x\in a\exists y\in b(\varphi(x,y,v_0,...,v_{\mathfrak{n}-1})))$

3. 局部收集公理模式(LColl)：$\mathfrak{n}+2$个变元，$\forall a\forall v_0...\forall v_{\mathfrak{n}-1}(\forall x\in a\exists y(\varphi(x,\\y,v_0,...,v_{\mathfrak{n}-1}))\to \exists b\forall x\in a\exists y\in b(\varphi(x,y,v_0,...,v_{\mathfrak{n}-1})))$

4. 替代公理模式(Rep)：$\mathfrak{n}+2$个变元，$\forall v_0...\forall v_{\mathfrak{n}-1}(\forall x\exists y\forall z(z= y\leftrightarrow\varphi(x,z,v_0,...,v_{\mathfrak{n}-1}))\to\forall a\exists b\forall z(z\in b\leftrightarrow\exists x\in a(\varphi(x,z,v_0,...,v_{\mathfrak{n}-1}))))$

5. 基本(rudimentary)替代公理模式(rRep)：$\mathfrak{n}+1$个变元，$\forall x\exists w\forall v_0\in x...\forall v_{\mathfrak{n}-1}\in x\exists t\in w\forall u(u\in t\leftrightarrow (u\in x\wedge \varphi(u,v_0,...,v_{\mathfrak{n}-1})))$

6. 强替代公理模式(SRep)：$\mathfrak{n}+2$个变元，$\forall a\forall v_0...\forall v_{\mathfrak{n}-1}(\forall x\in a\exists y(\varphi(x,y,\\v_0,...,v_{\mathfrak{n}-1}))\to\exists f(\mathrm{isFun}(f)\wedge\mathrm{dom}(f)=a\wedge \forall x\in a(f(x)\not=\varnothing)\wedge \forall x\in a\forall y\in f(x)(\varphi(x,y,v_0,...,v_{\mathfrak{n}-1}))))$

7. 归纳公理模式(Ind)：$\mathfrak{n}+1$个变元，$\forall v_0...\forall v_{\mathfrak{n}-1}(\forall x(\forall y(y\in x\to\varphi(y,v_0,\\...,v_{\mathfrak{n}-1}))\to \varphi(x,v_0,...,v_{\mathfrak{n}-1}))\to\forall x(\varphi(x,v_0,...,v_{\mathfrak{n}-1})))$

8. 基础公理模式(Fnd)：$\mathfrak{n}+1$个变元，$\forall v_0...\forall v_{\mathfrak{n}-1}(\exists x(\varphi(x,v_0,...,v_{\mathfrak{n}-1}))\to\exists x(\varphi(x,v_0,...,v_{\mathfrak{n}-1})\wedge \forall y\in x(\neg\varphi(y,v_0,...,v_{\mathfrak{n}-1}))))$

9. 反射公理模式(Refl)：$\mathfrak{n}$个变元，$\forall v_0...\forall v_{\mathfrak{n}-1}(\varphi\to\exists c(\mathrm{isSTrans}(c)\wedge\varphi^c))$，这里$\varphi^c$是$\varphi$对$c$的相对化，即将$\varphi$中所有无约束量词变为受限于$c$的量词所得公式。

10. 全反射公理模式(CRefl)：$\mathfrak{n}$个变元，$\exists c(\mathrm{isSTrans}(c)\wedge \forall v_0\in c...\forall v_{\mathfrak{n}-1}\in c(\varphi\leftrightarrow \varphi^c))$。

这些公理模式都需要我们在元语言中对公式$\varphi$作量化，默认是对全部公式量化。如果他们量化范围是$\Gamma_\mathfrak{n}$公式（$\Gamma=\Sigma,\Pi,\Delta$），则称对应的公理模式是$\Gamma_\mathfrak{n}$公理模式，在需要简写时将$\Gamma_{\mathfrak{n}}$作为公理模式的下标。

$Z$意指以下公理组：外延，对集，并集，基础，幂集，无穷，分离模式。$ZF$在$Z$的基础上加入了替代公理模式，$ZC$在$Z$的基础上加入了选择公理，$ZFC$在$Z$的基础上加入了替代公理模式和选择公理。
:::

::: theorem
$ZFC$可证以上列举的全体公理和公理模式。
:::

::: proof
人人熟知。
:::
