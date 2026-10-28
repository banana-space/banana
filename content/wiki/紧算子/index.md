---
title: 紧算子
categories: [泛函分析]
navboxes: [泛函分析]
---

<problems>
- “性质”一节后半部分起使用的记号 $\mathscr{B}_0(X,Y)$、$B_X$ 等未加说明。
- “谱理论”一节中，命题“设 $T\in \mathscr{B}_0(X,Y)$，当 $\dim X=\infty$ 时……”讨论谱 $\sigma(T)$，似乎应要求 $Y=X$。
</problems>

在[[泛函分析]]中，**紧算子**是[[拓扑向量空间]]
（例如 [[Banach 空间]]）之间的一类[[线性算子]]。
紧算子具有类似[[秩]]有限的算子的性质。

## 定义

::: definition {@thm:定义}
设 $X,Y$ 是[[完备空间|完备]][[拓扑向量空间]]。
称线性算子 $T\colon X\to Y$ 是**紧算子**，
指的是存在 $X$ 中[[开集]] $U\ni0$ 使得
$\overline{T(U)}$ 是 $Y$ 中[[紧集]]。
:::

::: remark
由于对 $X$ 中任一开集 $U\ni0$ 以及其中有界子集 $B\ni0$，
存在 $t\in\mathbb{R}_+$ 使得 $tU\supseteq B$，
可知有界集在紧算子下的像[[预紧]]。于是如 $X$
是[[局部有界拓扑向量空间]]，$B$ 是 $0$ 的有界邻域，
则 $T$ 是紧算子等价于 $\overline{T(B)}$ 是 $Y$ 中紧集，
亦等价于有界集在 $T$ 下的像预紧。特别地如 $X$ 是
[[Banach 空间]]，则 $T$ 是紧算子当且仅当单位球的像预紧。
:::

::: remark
如 $X,Y$ 都是[[局部有界拓扑向量空间]]，
则由于此时紧与列紧等价，$T\colon X\to Y$ 是紧算子等价于
$X$ 的有界集在 $T$ 下的像预列紧。写出来就是：对 $X$
的任意有界序列 $(x_n)$，序列 $(Tx_n)$ 有收敛子列。
:::

## 性质

::: proposition
紧算子都连续。
:::

::: proof
设 $T\colon X\to Y$ 是紧算子，取 @thm:定义 中的开集
$U$。对 $Y$ 中任一开集 $V\ni0$，由于 $\overline{T(U)}$
是紧集，特别地有界，故存在 $t\in\mathbb{R}_+$ 使得 $tV\supseteq
\overline{T(U)}$。于是 $t^{-1}U\subseteq T^{-1}(V)$，
即 $T^{-1}(V)$ 包含 $0$ 的邻域。故 $T$ 连续。
:::

::: proposition {@复合}
紧算子两边复合连续算子仍为紧算子。
:::

::: proof
设 $S\colon W\to X$，$T\colon X\to Y$ 是连续算子。
如 $S$ 紧，则由于连续映射把紧集映射到紧集，不难发现 $TS$ 紧。
如 $T$ 紧，取 @thm:定义 中的开集 $U$，不难发现 $W$
中开集 $S^{-1}(U)$ 满足 @thm:定义，所以 $TS$ 紧。
:::

::: proposition {@有限维}
设 $X,Y$ 是完备拓扑向量空间，$X$ 局部有界，$T\colon X\to Y$
是连续线性算子，像集 $\operatorname{im}(T)$ 闭。
则 $\operatorname{im}(T)$ 有限维当且仅当 $T$ 紧。
:::

::: proof
用 @复合，可不妨设 $Y=\operatorname{im}(T)$，
即 $T$ 是满射。取 $X$ 中有界开集 $B\ni0$，则 $T$ 紧等价于
$\overline{T(B)}$ 紧。现如 $Y$ 有限维，则其中有界集的闭包紧，
而 $T$ 连续，把有界集映射到有界集，所以 $\overline{T(B)}$
自然紧。反过来如 $T$ 紧，则由[[开映射定理]] $T(B)$ 是开集。
$Y$ 中开集的闭包紧，故 $Y$ 有限维。
:::

::: proposition {@闭}
设 $X,Y$ 是完备拓扑向量空间，$X$ 局部有界。
取 $X$ 中有界开集 $B\ni0$，给连续算子空间
$\mathscr{B}(X,Y)$ 赋予拓扑如下：形如 $U_{B,V}=
\{T\in\mathscr{B}(X,Y)\mid T(B)\subseteq V\}$ 的集合组成
$0$ 的邻域基，其中 $V$ 取遍 $Y$ 中 $0$ 的邻域。
则紧算子构成 $\mathscr{B}(X,Y)$ 的闭子空间。
:::

::: proof
两个紧算子的线性组合紧比较显然，证明略去。下证紧算子构成
$\mathscr{B}(X,Y)$ 的闭子集。为此任取 $T\in\mathscr{B}
(X,Y)$ 在紧算子集合的闭包内，要证 $T$ 紧。由于 $Y$ 完备，
只需证 $T(B)$ [[全有界]]。任取 $Y$ 中开集 $V\ni0$，
不妨设 $V=-V$。由 $T$ 在闭包内，可取紧算子 $S$ 使得
$S-T\in U_{B,V}$。由 $S$ 紧，$S(B)$ 全有界，从而存在
$x_1,\ldots,x_n\in B$ 使得 $S(B)\subseteq
\bigcup_{i=1}^n(Sx_i+V)$，换言之对任一 $x\in B$
存在 $i$ 使得 $Sx-Sx_i\in V$。由于 $S-T\in U_{B,V}$，
这推出 $Tx-Tx_i\in 3V$，于是 $T(B)\subseteq
\bigcup_{i=1}^n(Tx_i+3V)$。所以 $T(B)$ 全有界。
:::

::: remark
首先 @闭 中 $\mathscr{B}(X,Y)$ 的拓扑显然和
$B$ 的选取无关。其次 $X,Y$ 是 Banach 空间时，取 $B$
为 $X$ 的单位球，该拓扑就是[[算子范数]]诱导的拓扑。
:::

下设 $X,Y$ 都是 [[Banach 空间]]。

::: proposition
设$T\in \mathscr{B}_0(X,Y)$，$X$的序列$\left\{x_n\right\}$
弱收敛于$x$，则$\left\{Tx_n\right\}$收敛于$Tx$。
:::

::: proof
$\left\{x_n\right\}$是有界序列
（对$\left\{x_n^{**}\right\}$使用一致有界原理），
所以$\left\{Tx_n\right\}$是相对列紧集。
而由$\left\{x_n\right\}$弱收敛于$x$得到$\left\{Tx_n\right\}$弱收敛于$Tx$，
所以$\left\{Tx_{n}\right\}$的任何收敛子列只能收敛于$Tx$，
这表明$\left\{Tx_n\right\}$收敛于$Tx$。
:::

::: proposition [Schauder] {@T^*紧}
设$T\in \mathscr{B}(X,Y)$。$T\in \mathscr{B}_0(X,Y)$
当且仅当$T^*\in \mathscr{B}_0(Y^*,X^*)$。
:::

::: proof
设$T$是紧算子，注意到$B_{Y^*}$的元素一致有界且等度连续
（$\|f\|\leq1$，且$|f(y)-f(y')|\leq\|y-y'\|$），
由Arzelà–Ascoli 定理，存在一列
$\left\{f_n\right\}\subset B_{Y^*}$
在紧集$\overline{T(B)}$上一致收敛，这等价于
$\left\{T^*f_n\right\}=\left\{f_nT\right\}\subset X^*$
收敛，故$T^*$是紧算子。

设$T^*$是紧算子，由前面所证得
$T^{**}\in \mathscr{B}_0(X^{**},Y^{**})$，
于是$T(B_{X})$是相对列紧集$T^{**}(B_{X^{**}})$的子集
因而也是相对列紧集，故$T$是紧算子。
:::

::: proposition
有限秩算子是紧算子。而且，对Hilbert空间$\mathcal{H}$，
$\mathscr{B}_0(\mathcal{H})$等于
$\mathcal{H}$上有限秩算子全体的闭包。
:::

::: proof
由有限维赋范线性空间中的有界闭集是紧集得有限秩算子是紧算子。

对$T\in\mathscr{B}_0(\mathcal{H})$，
像集$\operatorname{im}(T)=\cup_{n=1}^{\infty}T(nB)$可分，
故存在$\operatorname{im}(T)$的可数正交基
$\left\{e_n\mid n\geq1\right\}$。
令$P_n$为$\mathcal{H}$到子空间
$\operatorname{span}\left\{e_1,\cdots,e_n\right\}$的投影，
并令$T_n=P_nT$，则$T_n$是有限秩算子。下证$T_n$收敛于$T$。

这是因为，对任意$\epsilon>0$和$h\in B_{\mathcal{H}}$，
存在有限个$h_1,\cdots,h_m\in B$使得
$T(B)\subset\cup_{1\leq i\leq m}{B(T(h_i),\epsilon)}$，
令$n$充分大，就有
$\forall1\leq i\leq m$，$\|T_nh_i-Th_i\|<\epsilon$，
于是对于使$Th\in B(T(h_i),\epsilon)$的$h_i$有
$$
\|T_nh-Th\|\leq\|T_nh_i-Th_i\|+\|T_nh_i-T_nh\|
+\|Th_i-Th\|<(1+2\|T\|)\epsilon.
$$
:::

::: remark
容易看出，后一命题对于有Schauder基的Banach空间也成立。
但此命题并非对任何Banach空间都成立。
:::

::: proposition {@im是闭子空间}
设$T\in \mathscr{B}_0(X)$，对$\lambda\neq0$，
$\ker(T-\lambda I)$是有限维空间，
且$\operatorname{im}(T-\lambda I)$是闭子空间。
:::

::: proof
$T$限制在$\ker(T-\lambda I)$上仍是紧算子，
而此时$T=\lambda I$，所以$\ker(T-\lambda I)$是有限维空间。

因此，存在闭子空间$M$使$X=M\oplus\ker(T-\lambda I)$。
要证$\operatorname{im}(T-\lambda I)$是闭子空间，
即证明$T-\lambda I$限制在$M$上的像集是闭的，
只需证明存在$c>0$使得
$\forall x\in M,\|(T-\lambda I)x\|\geq c\|x\|$。

若否，则存在$M$中的序列$\left\{x_n\right\}$
使$\|x_n\|=1$且$(T-\lambda I)x_n\rightarrow0$。
由$T$是紧算子，存在$\left\{Tx_n\right\}$的子列
$\left\{Tx_{n_k}\right\}$收敛于某$x_0\in X$，
则$\lambda x_{n_k}\rightarrow x_0$。
于是$x_0\in M$且$(T-\lambda I)x_0=0$，这说明$x_0=0$，
与$\|x_0\|=\lim_{k\rightarrow\infty}
\|\lambda x_{n_k}\|=|\lambda|$相矛盾。
:::

## 谱理论

记算子$T$的谱为$\sigma(T)$。

::: proposition {@0是聚点}
设$T\in \mathscr{B}_0(X,Y)$，当$\dim X=\infty$时
$0\in\sigma(T)$，且$0$是$\sigma(T)$唯一可能的聚点。
:::

::: proof
假设$0\notin\sigma(T)$，即$T$存在有界逆，
则$\operatorname{id}_X$是紧算子，得到$\dim X<\infty$。

假设$\sigma(T)$有聚点$\lambda\neq0$，则存在一列互异的特征值
$\lambda_n\rightarrow\lambda$
且$|\lambda_n|>\frac{|\lambda|}{2}$。
设$x_n$为$\lambda_n$的一个特征向量，
$M_n=\operatorname{span}\left\{x_1,\cdots,x_n\right\}$，
则$M_n\subsetneq M_{n+1}$。
由Riesz引理，存在$y_n\in M_n$使得
$\|y_n\|=1$且$d(y_n,M_{n-1})>\frac{1}{2}$，
由于$(T-\lambda_n I)y_n\in M_{n-1}$，
得当$n>m$时$\frac{(T-\lambda_n I)y_n}
{\lambda_n}-T\frac{y_m}{\lambda_m}\in M_{n-1}$，所以
\[
\Bigl\| T\frac{y_n}{\lambda_n}-T\frac{y_m}{\lambda_m} \Bigr\| =
\Bigl\| y_n+\frac{(T-\lambda_n I)y_n}{\lambda_n}
  -T\frac{y_m}{\lambda_m} \Bigr\| >
\frac{1}{2}.
\]
而由$\|\frac{y_n}{\lambda_n}\|<\frac{1}{|\lambda|/2}$得
$\left\{T\frac{y_n}{\lambda_n}\right\}$有收敛子列，矛盾。
:::

::: proposition {@Fredholm-Alternative}
设$T\in \mathscr{B}_0(X)$，$\lambda\neq0$，
$\ker(T-\lambda I)=0$当且仅当
$\operatorname{im}(T-\lambda I)=X$。
:::

::: proof
假设$\operatorname{im}(T-\lambda I)=X$
而$\ker(T-\lambda I)\neq0$，记$M_n=\ker(T-\lambda I)^n$，
则存在$x_1\in M_1$且$x_1\neq0$以及$\left\{x_n\right\}$
满足$(T-\lambda I)x_{n+1}=x_n$，
于是$(T-\lambda I)^n x_{n+1}=x_1\neq0$而
$(T-\lambda I)^{n+1} x_{n+1}=(T-\lambda I)x_1=0$，
所以$M_n\subsetneq M_{n+1}$。
之后重复 @0是聚点 的相应证明过程即可，
其中的$\lambda_n=\lambda$。

假设$\ker(T-\lambda I)=0$，则
$\overline{\operatorname{im}(T^*-\lambda I)}
=\ker(T-\lambda I)^\bot=X^*$，
由 @im是闭子空间 及闭值域定理得
$\operatorname{im}(T^*-\lambda I)$也是闭子空间，
所以$\operatorname{im}(T^*-\lambda I)=X^*$，
由前面所证得$\ker(T^*-\lambda I)=0$，所以
$\operatorname{im}(T-\lambda I)
=^\bot\ker(T^*-\lambda I)=X$。
:::

::: corollary
设$T\in \mathscr{B}_0(X)$，
$\lambda\in\sigma(T) \setminus \{0\}$，
则$\lambda$是$T$的特征值。
:::

::: remark
设$T\in\mathscr{B}_0(X)$，以下两个命题之一成立：

- 对每个$f\in X$，方程$u-Tu=f$有唯一解；

- 齐次方程$u-Tu=0$有$n$个线性无关解（$n\in \mathbb{Z}^+$）。

这是因为，要么$I-T$可逆，要么$\ker(I-T)$为非平凡的有限维空间。
:::

有如下更一般的结论。

::: proposition
设$T\in \mathscr{B}_0(X)$，$\lambda\neq0$，
成立
$$
\dim\ker(T-\lambda I)=\dim\ker(T^*-\lambda I)
=\dim X/\operatorname{im}(T-\lambda I)
=\dim X^*/\operatorname{im}(T^*-\lambda I).
$$
:::

::: proof
先证明$\dim\ker(T-\lambda I)\geq\dim X/\operatorname{im}(T-\lambda I)$。

记$n=\dim\ker(T-\lambda I)$。
@Fredholm-Alternative 证明了$n=0$的情况。
假设$n\geq1$，下面将其转化为$n=0$的情况。

假设$\dim X/\operatorname{im}(T-\lambda I)\geq n+1$，
即存在线性无关的$[y_1],\cdots,[y_{n+1}]
\in X/\operatorname{im}(T-\lambda I)$。
设$\left\{e_1,\cdots,e_n\right\}$
为$\ker(T-\lambda I)$的一组基，
令$f_1,\cdots,f_n\in X^*$使得$f_i(e_j)=\delta_{ij}$，
定义算子$S$为
$$
Sx=Tx+\sum_{i=1}^{n}f_i(x)y_i,
$$
$S$是紧算子与有限秩算子的和，故也是紧算子。
断言$\ker(S-\lambda I)=0$。

设$x\in\ker(S-\lambda I)$，即
$$
(T-\lambda I)x+\sum_{i=1}^{n}f_i(x)y_i=0,
$$
于是$\sum_{i=1}^{n}f_i(x)[y_i]=[0]$，得$f_i(x)=0$，
所以$x\in\ker(T-\lambda I)$，
再使用$f_i(x)=0$得$x=0$，断言成立。

那么，由 @Fredholm-Alternative 得
$\operatorname{im}(S-\lambda I)=X$，
但$y_{n+1}\notin\operatorname{im}(S-\lambda I)$，矛盾。

根据 @T^*紧，$T^*$也是紧算子，所以也有
$\dim\ker(T^*-\lambda I)\geq
\dim X/\operatorname{im}(T^*-\lambda I)$。由此得到，
\[
\begin{aligned}
  \dim\ker(T-\lambda I)
  & \geq \dim X/\operatorname{im}(T-\lambda I) \\
  & = \dim (X/\operatorname{im}(T-\lambda I))^* \\
  & = \dim\operatorname{im}(T-\lambda I)^\bot \\
  & = \dim\ker(T^*-\lambda I)\geq\dim X^*/\operatorname{im}(T^*-\lambda I) \\
  & = \dim(\ker(T-\lambda I))^* \\
  & = \dim\ker(T-\lambda I).
\end{aligned}
\]
其中用到了对$X$的闭子空间$M$，$(X/M)^*\simeq M^\bot$，
且$X^*/M^\bot\simeq M^*$。
:::

```terms
紧算子:
  en: compact operator
  fr: opérateur compact
  de: kompakter Operator
  la: operator compactus
  grc: συμπαγὴς τελέστης
```
