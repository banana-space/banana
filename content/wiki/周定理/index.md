---
title: 周定理
categories: [复代数几何]
---

<disambiguation>
注意与[[周引理]]区分。
</disambiguation>

<problems>
- “陈述与证明”一节缺少证明来源的参考文献。
- “推广”一节需要扩充。
</problems>

**周定理**是[[复几何]]和[[代数几何]]理论中的基本定理，由[[周炜良]]在1949年证明，
是[[代数几何–解析几何对应]]的一个部分。
简单来说，定理将射影[[复解析空间]]与$\mathbb C$上的[[射影代数簇]]对应起来。

从拓扑上看，在[[解析拓扑]]下闭的射影对象在[[Zariski 拓扑]]下也是闭的。
这样复解析方法也就能在代数几何中发挥作用。

## 陈述与证明

::: theorem [周定理] {@周定理}
每个射影复解析空间 $X$ 都是代数的，即 $X$ 是有限多个齐次复多项式的公共零点集。
:::

以下证明来自 Cartan、Remmert 和 Stein：

::: proof
设$\sigma:\mathbb C^{n+1}\setminus\{0\}\to\mathbb P^n$为自然投影。
则对闭解析子簇$X\subset\mathbb P^n$，定义$V=\sigma^{-1}(X)\cup\{0\}\subset\mathbb C^{n+1}$。
由[[Remmert–Stein 定理]]，它也是$\mathbb C^{n+1}$中的解析闭子簇。
进一步，$V$还是锥，即若$z\in V$，则对一切$t\in\mathbb C$有$tz\in V$。

现在我们来证明任意复解析锥$V$总是有限多个齐次多项式的零点集。由$0$处的解析性，
我们能取定原点为圆心的开球$B$和一系列$B$中全纯函数$f_1,\cdots,f_k$使
\[
B\cap V=\{z\in B:\forall i, f_i(z)=0\}.
\]
可以选取$B$足够小使$f_i$们的幂级数展开都绝对收敛从而避开收敛性问题。
现设$f_j=\sum_{m=0}^\infty f_{j,m}(z)$，
其中$f_{j,m}$表示$f_j$的[[Taylor 展开]]中齐$m$次的多项式部分。
显然$f_j(tz)=\sum_{m=0}^\infty t^mf_{j,m}(z)$，
因此对固定的$z\in V$，$f_j(tz)=0$对$|t|<1$成立。
看作单变量的解析函数可知它恒$0$，这意味着$f_{j,m}(z)=0$对$z\in V$成立。

由此得知$V\cap B$是由一族齐次多项式$(f_{j,m})$的零点集定义的，
由齐次性$V$也是由$(f_{j,m})$的零点集定义的，
由于多项式环$\mathbb C[z_1,\cdots,z_{n+1}]$是[[Noether 环]]，
故$V$可以只由其中有限多个齐次多项式的零点定义。

现将诸资料沿$\sigma$投影，立刻得知$\sigma(V)=X$是射影复代数簇。
:::

## 推广

## 应用

周定理立刻能应用到态射上去。

::: corollary
射影复流形间的全纯态射$f:V\to W$总是代数的。
:::

::: proof
对$V\subset\mathbb P^n,W\subset\mathbb P^m$，
取[[Segre 嵌入]] $i:\mathbb P^n\times\mathbb P^m\hookrightarrow\mathbb P^{nm+n+m}$。
考虑像流形$X:=\{i(v,f(v)):v\in V\}\subset\mathbb P^{nm+n+m}$，容易得知它是闭的。
$V$是复流形所以$V$自然是解析的，$f$是全纯的，故$(v,f(v))$被$y-f(x)$以及定义$V$的零点确定，
这表明$X$解析。
应用 @周定理 可知$V,W,X$都是代数的。

假设确定$X$的多项式集为$\{f_n(x,y)\}, x\in\mathbb P^n,y\in\mathbb P^m$。
对于处于一般位置的$v\in V$（合理选取坐标与$f_n$的系数在$\mathbb Q$超越），
考虑诸$\{f_n(v,y)\}$看作一系列$\mathbb P^m$上的多项式的存在唯一交点（记重数），为$w:=f(v)$。
由$\mathbb C$是代数闭的，此时$f_n$生成的理想为极大理想$\mathfrak m$。
由[[Hilbert 零点定理]] $\mathfrak m=(y-w)$，
这表明$f_n(v,y)$的$\mathbb C[y]$系数线性组合能得到$y-w$。
考虑$f_n$系数和$v$在$\mathbb Q$张成的域$K$，
线性代数表明$f_n(v,y)$的$K[y]$系数线性组合就能得到$y-w_0$，其中$w_0\in K$。
所以由唯一性$w=w_0\in K$，主元$v$，可得$f_n$系数的域中的多项式$g$使$g(v)-w=0$，由于$v$的超越性，
$f_n(v,g(v))=0$作为多项式成立。
由此不难得知$f$必恒等于$g$，从而是代数态射。
:::

::: corollary
[[Riemann 面]]总是代数曲线。
:::

::: proof
由[[Kodaira 嵌入定理]]（也可以初等地使用[[Riemann–Roch 定理]]），
Riemann 面总是射影的，然后应用 @周定理。
:::

```terms
周定理:
  en: Chow's theorem
  de: Satz von Chow
  fr: théorème de Chow
```
