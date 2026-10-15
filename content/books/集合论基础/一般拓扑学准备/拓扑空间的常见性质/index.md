---
title: 拓扑空间的常见性质
---
本节用以介绍拓扑空间们可能具有的性质。

::: definition [分离公理]
以下这些空间$X$的性质有时又被称作拓扑空间满足的分离公理或分离性质。我们默认出现的$U$和$V$都是开集，$C$和$D$都是闭集，$f:X\rightarrow [0,1]$是连续函数。

$(T_1,Frechet)\,\,\forall x\in X\forall y\in X(x\not=y\rightarrow\exists U\ni x(y\not\in U))$

$(T_2,Hausdorff)\,\,\forall x\in X\forall y\in X(x\not=y\rightarrow\exists U\ni x\exists V\ni y(U\cap V=\varnothing))$

$(T_{2.5},Urysohn)\,\,\forall x\in X\forall y\in X(x\not=y\rightarrow\exists C\ni x\exists D\ni y(C\cap D=\varnothing))$

$(R,Regular)\,\,\forall x\in X\forall C\subseteq X(x\not\in C\rightarrow \exists U\in x\exists V\supseteq C(U\cap V=\varnothing))$

$(CR,CompletelyRegular)\,\,\forall x\in X\forall C\subseteq X(x\not\in C\rightarrow \exists f(f(x)=0\wedge f(C)=\{1\}))$

$(N,Normal)\,\,\forall C\subseteq X\forall D\subseteq X(C\cap D=\varnothing\rightarrow\exists U\supseteq C\exists V\supseteq D(U\cap V=\varnothing))$

$(CN,CompletelyNormal)\,\,\forall A\subseteq X\forall B\subseteq X(A\cap \mathrm{Cl}(B)=\mathrm{Cl}(A)\cap B=\varnothing\rightarrow\exists U\supseteq A\exists V\supseteq B(U\cap V=\varnothing))$

$(PN,PerfectlyNormal)\,\,\forall C\subseteq X\forall D\subseteq X(C\cap D=\varnothing\rightarrow\exists f(C=f^{-1}(\{0\})\wedge D=f^{-1}(\{1\})))$

$(T_3,RegularHausdorff)R+T_1$

$(T_{3.5},CompletelyRegularHausdorff,Tychonoff)CR+T_1$

$(T_4,NormalHausdorff)N+T_1$

$(T_5,CompletelyNormalHausdorff)CN+T_1$

$(T_6,PerfectlyNormalHausdorff)PN+T_1$
:::

然后是可数性。

::: definition [可数公理]
以下这些性质有时又被称作拓扑空间满足的可数公理或可数性质。

$(C_1)$：空间的每个点都有可数的邻域基。

$(C_2)$：空间有一个可数基。

$(S,Seperable)$：空间有一个可数稠密子集。

$Lindelof$：每个开覆盖都有可数子覆盖。
:::

::: remark*
虽然Lindelof长得非常像紧致性，但是可数紧致性另有其人。
:::

最后是连通性和紧致性。

::: definition [连通性]
以下这些性质是各种不同强弱和方向的拓扑空间连通性的描述。

连通(connected)：不存在开集$U,V$使得$X=U\cup V$且$\varnothing=U\cap V$。

不连通(disconnected)：存在开集$U,V$使得$X=U\cup V$且$\varnothing=U\cap V$。

道路连通（path connected）：对任何$x,y\in X$都有一条道路，即连续函数$f:[0,1]\rightarrow X$使得$f(0)=x\wedge f(1)=y$。

完全不连通（totally disconnected）：对任何$x,y\in X$都有两个开集$U\ni x,V\ni y$使得$X=U\cup V$且$\varnothing=U\cap V$。

零维（zero dimentional）：存在一组开闭基。

局部连通（locally connected）：在每点的每个邻域之内都存在此点的连通邻域。

局部道路连通（locally path connected）：在每点的每个邻域之内都存在此点的道路连通邻域。
:::

::: definition [紧致性]
以下这些性质是各种不同表述下的拓扑空间紧致性。

紧致(compactess)：每个开覆盖都有有限的子覆盖。

列紧致/预紧致（sequential compactness/precompactness）：每个点列都有收敛的子列。

滤子紧致：每个滤子所有元素的闭包之交非空。

极限点紧致（limit point compactness,Frechet's compactness,Bolzano-Weierstrass property）：每个无穷子集都有极限点。

仿紧致(paracompactness)：每个开覆盖都有局部有限的开加细。

局部紧致（local compactess）：每个点处都有紧致的子空间。

可数紧致/$\aleph_0$-紧致：每个可数开覆盖都有有限的子覆盖。
:::

::: remark*
集合$X$的滤子$\mathcal{B}$指的是一个幂集$\wp (X)$的真子集，且$X$的  包含$\mathcal{B}$中任意有限个元素的交  的子集均亦在$\mathcal{B}$中。
:::

滤子紧致的名字是作者自己起的名字，事实上它在任何时候都和紧致等价。不难意识到，滤子紧致就是闭区间套的广义形式。

::: theorem
任何空间紧致当且仅当滤子紧致。
:::

::: proof
紧致推滤子紧致：对滤子$\mathcal{B}$，考察$\mathcal{C}=\{X\backslash\mathrm{Cl}(B)|B\in\mathcal{B}\}$，它是$X$的开覆盖，于是有有限子覆盖，不妨设$X\backslash\mathrm{Cl}(B_i)$们构成一个有限子覆盖，则$\bigcap_{i}\mathrm{Cl}(B_i)$就是$\bigcap_{B\in\mathcal{B}}\mathrm{Cl}(B)$，而滤子显然有有限交性质，从而这东西不空。

滤子紧致推紧致：对开覆盖$\mathcal{C}$，如果它不存在有限子覆盖，考察这开覆盖的全体元素的补集构成的集合，在这集合中通过加入全体$X$中包含其中任意元素的子集使之成为一滤子，这滤子的全体元素闭包的交不空，然而它应当包含于全体开覆盖元素补集之交，后者是个空集，矛盾。
:::
