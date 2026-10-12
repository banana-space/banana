---
title: 伴随函子定理
categories: [范畴论]
navboxes: [范畴论]
---

**伴随函子定理**是在[[可表现范畴]]中抽象地得到[[伴随函子]]存在性的方法。

## 定理与证明

::: theorem
[[可表现范畴]]之间的函子有右伴随当且仅当其保持余极限，
有左伴随当且仅当其[[可达函子|可达]]且保持极限。
:::

::: proof
设 $\mathcal{C},\mathcal{D}$ 为可表现范畴。

如果 $F\colon\mathcal{C}\to\mathcal{D}$ 有右伴随，它当然保持余极限。

反过来如果 $F$ 保持余极限，要证明它有右伴随。由 $\mathcal{C}$ 可表现，
取[[正则基数]] $\kappa$ 使得 $\mathcal{C}$ 由 $\kappa$-紧对象子范畴
$\mathcal{C}^\kappa$ 生成。
定义函子 $G\colon\mathcal{D}\to\mathcal{C}$ 为
$$
Gd=\operatornamewithlimits{colim}_{(x,g)\in{\mathcal{C}^\kappa}_{F,/d}}x,
$$
其中 ${\mathcal{C}^\kappa}_{F,/d}$ 是[[逗号范畴]]
$\{(x,g)\mid x\in\mathcal{C}^\kappa,\,g\colon Fx\to d\}$。
我们来证 $G$ 就是 $F$ 的右伴随。由于 $\mathcal{C}$ 被
$\mathcal{C}^\kappa$ 生成，只需证对 $c\in\mathcal{C}^\kappa$
有 $\operatorname{Hom}_\mathcal{C}(c,Gd)=\operatorname{Hom}_\mathcal{D}(Fc,d)$。
由于 $\mathcal{C}^\kappa$ 有 $\kappa$-小余极限，以及
$F$ 保持余极限，不难发现 ${\mathcal{C}^\kappa}_{F,/d}$
也有 $\kappa$-小余极限；特别地它是 $\kappa$-滤的范畴。由于从
$\kappa$-紧对象出发的 $\operatorname{Hom}$ 与 $\kappa$-滤余极限交换，有
$$
\operatorname{Hom}_\mathcal{C}(c,Gd)=\operatornamewithlimits{colim}_{(x,g)\in{\mathcal{C}^\kappa}_{F,/d}}\operatorname{Hom}_\mathcal{C}(c,x).
$$
现在注意到任一 $(x,g)\in{\mathcal{C}^\kappa}_{F,/d}$
上的任一 $f\in\operatorname{Hom}_\mathcal{C}(c,x)$
实际上都是 $(c,g\circ Ff)$ 上的 $\operatorname{id}_c$
沿 $f$ 的像；故此余极限无非就是 $\operatorname{Hom}_\mathcal{D}(Fc,d)$。

如果 $G\colon\mathcal{D}\to\mathcal{C}$ 有左伴随，
它当然保持极限。设其左伴随为 $F$，
取正则基数 $\kappa$ 使得 $\mathcal{C}$ 由
$\mathcal{C}^\kappa$ 生成，再取正则基数 $\lambda\ge\kappa$ 使得
$F(\mathcal{C}^\kappa)\subseteq\mathcal{D}^\lambda$。
由于 $\mathcal{C}^\lambda$ 由 $\mathcal{C}^\kappa$ 在
$\lambda$-小余极限下生成，$\mathcal{D}^\lambda$ 又在这些余极限下封闭，
有 $F(\mathcal{C}^\lambda)\subseteq\mathcal{D}^\lambda$。由此不难发现
$G$ 保持 $\lambda$-滤余极限，即 $G$ 为 $\lambda$-可达。

反过来如果 $G$ 保持极限且可达，要证明它有左伴随。
这比前面的情形麻烦一些，故我们把主要部分放在 @余可表。
有该引理之后，对 $c\in\mathcal{C}$，就都有函子
$$
d\mapsto\operatorname{Hom}_\mathcal{C}(c,Gd)
$$
余可表；定义 $Fc$ 为 $\mathcal{D}$ 中余表示它的对象，
便得到 $G$ 的左伴随 $F$。
:::

::: lemma {@余可表}
设范畴 $\mathcal{D}$ 可表现，
函子 $G\colon\mathcal{D}\to\mathsf{Set}$ 可达且保持极限。
则它余可表。
:::

::: proof
取正则基数 $\lambda$ 使得 $\mathcal{D}$ 由 $\mathcal{D}^\lambda$
生成，且 $G$ 为 $\lambda$-可达。考虑范畴
$$
\tilde{\mathcal{D}}=\{(y,x)\mid y\in\mathcal{D},\,x\in Gy\},
$$
其中
$$
\operatorname{Hom}((y,x),(y',x'))=\{g\colon y\to y'\mid(Gg)(x)=x'\},
$$
则它自然是 $\mathcal{D}$ 上[[纤维范畴]]。由 $G$ 保持极限，
不难发现 $\tilde{\mathcal{D}}$ 中有任意极限，且与到 $\mathcal{D}$
的投影交换。以 $\tilde{\mathcal{D}}^\lambda$
记 $\mathcal{D}^\lambda$ 在其中的原像，则它是小的满子范畴。
以 $(d,a)$ 记 $\tilde{\mathcal{D}}^\lambda$ 在
$\tilde{\mathcal{D}}$ 中的极限。由 $G$ 为 $\lambda$-可达，
将 $d$ 写成 $\mathcal{D}^\lambda$ 中元素的 $\lambda$-滤余极限，
可知存在 $(d',a')\in\tilde{\mathcal{D}}^\lambda$ 以及
$g\colon d'\to d$ 使得 $(Gg)(a')=a$。

现一方面有 $\mathcal{D}^\lambda$ 上 Yoneda 函子 $h^{d'}$
到 $G$ 的自然变换 $g\mapsto(Gg)(a')$；另一方面由
$(d,a)$ 是 $\tilde{\mathcal{D}}^\lambda$ 在
$\tilde{\mathcal{D}}$ 中的极限，对任一 $y\in\mathcal{D}^\lambda$，
$x\in Gy$，都有典范映射 $g_x\colon d\to y$ 满足
$(Gg_x)(a)=x$，这样给出 $G$ 到 $h^d$ 的自然变换；
由这些东西的取法，不难发现复合映射
$$
G\to h^d\to h^{d'}\to G
$$
为恒同。换言之，作为 $\mathcal{D}^\lambda$ 上的函子，
$G$ 是 $h^{d'}$ 的[[收缩]]，即有 $h^{d'}$ 的幂等自映射，
像为 $G$；由 Yoneda 引理，这来自 $d'$ 的幂等自映射；
由 $\mathcal{D}$ 可表现，该幂等自映射在 $\mathcal{D}$
中有像，且显然在 $\mathcal{D}^\lambda$ 中。
由此不难验证该像余表示 $G$，故 $G$ 余可表。
:::

## 推广至 $\infty$-范畴

此定理可推广至[[无穷范畴]]。

::: theorem
[[可表现无穷范畴]]之间的函子有右伴随当且仅当其保持余极限，
有左伴随当且仅当其[[可达函子|可达]]且保持极限。
:::

## 应用

在各种[[六函子]]的现代处理中，最难定义的 $f^!$
通常是直接对 $f_!$ 用伴随函子定理给出的。

::: example [拟凝聚层]
设 $f\colon X\to Y$ 是[[拟紧拟分离]][[概形]]的[[紧合态射|紧合]][[有限表现态射]]。
以 $\mathsf{D}(-)$ 记概形的[[拟凝聚导出无穷范畴]]。
则 $f_!:=Rf_*\colon\mathsf{D}(X)\to\mathsf{D}(Y)$
保持余极限，故由伴随函子定理其有右伴随，记作 $f^!$。
:::

::: example [通常拓扑]
设 $f\colon X\to Y$ 是[[局部紧 Hausdorff 空间]]的[[连续映射]]。
固定系数环 $k$，以 $\mathsf{D}(-,k)$ 记拓扑空间的 $\mathsf{D}(k)$
值层范畴。如 $f$ 是闭浸入，定义 $f_!=f_*$，由伴随函子定理它有右伴随，
记作 $f^!$，则由于闭浸入前推保持[[紧对象]]，其右伴随 $f^!$
保持余极限。对一般的 $f$，定义紧支前推
$f_!\colon\mathsf{D}(X,k)\to\mathsf{D}(Y,k)$ 为
$$
f_!A=\operatornamewithlimits{colim}_{i\colon K\subseteq X,\;K\to Y\,紧合}f_*i_*i^!A.
$$
由 $i^!$ 保持余极限，$(fi)_*$ 是紧合映射前推亦保持余极限，
由伴随函子定理它有右伴随，记作 $f^!$。
:::

::: example [平展层]
设 $f\colon X\to Y$ 是[[拟紧拟分离]][[概形]]的[[有限表现态射]]，
$k$ 是系数环。则用 [[Nagata 紧化]]以及[[开浸入]]的 $j_!$
可以定义 $f_!$。由伴随函子定理它有右伴随，这就是 $f^!$。
:::

此外，完全导出的语境下，[[余切复形]]也是用伴随函子定理定义的。
作为 $A$-代数范畴和 $A$-代数附带其上模的范畴之间的函子，
$B\mapsto(B,\mathbb{L}_{B/A})$ 定义为
$(B,M)\mapsto B\oplus M$ 的左伴随，其中 $B\oplus M$ 是 $B$ 的[[平凡平方加厚]]，
即 $M$ 和自身的乘法定为 $0$。

```terms
伴随函子定理:
  en: adjoint functor theorem
  fr: théorème de foncteur adjoint
  la: theorema de functore adjuncto
```
