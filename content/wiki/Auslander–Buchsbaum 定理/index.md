---
title: Auslander–Buchsbaum 定理
categories: [交换代数]
notices:
  - name: 问题
    items:
      - “陈述与证明”一节的第二个引理（投射模与局部自由的等价）似乎需要假设 $M$ 有限表现，否则一般不成立；正文的应用中 $P$ 是 Noether 环的理想，不受影响。
  - name: 区分
    pages:
      - Auslander–Buchsbaum 公式
navboxes: [交换代数]
---

**Auslander–Buchsbaum 定理**是个[[交换代数]]定理，内容为：[[正则局部环]]
都是[[唯一分解整环]]。

## 陈述与证明

::: theorem [Auslander–Buchsbaum 定理] {@AB}
任何正则局部环$(A,\mathfrak{m})$都是唯一分解整环。
:::

证明用到以下三个引理。

::: lemma {@height-one}
如果有诺特整环满足高度$1$的素理想都是主理想，则其为唯一分解整环。
:::

::: lemma {@local-free}
对交换环$A$上的模$M$而言，下列条件等价：

- $M$是$A$-投射模。

- 对$A$的任何极大理想$\mathfrak{m}$，$M_\mathfrak{m}$是$A_\mathfrak{m}$-自由模。
:::

::: lemma {@stably-free}
有限生成投射模若有有限自由消解则为[[稳定自由模]]。
:::

::: proof
对$A$的[[Krull 维数|维数]]$\dim A$归纳。如果$\dim A=0$则$A$是[[域]]故显然为唯一分解整环。
如果$\dim A=1$则$A$是[[离散赋值环]]，自然也是唯一分解整环。

如果$\dim A < n ~ ~(n>1)$时命题都成立，下面证明$\dim A=n$时命题成立。取$x\in \mathfrak{m}
  \setminus \mathfrak{m}^2$，则$\{x\}$能延拓到$A$的一个[[参数系]]，从而$A/xA$也是
正则局部环，从而是[[整环]]；这表明$x$是$A$的素元。记$S=\{1,x,x^2,\cdots\}$是$x$生成
的[[乘闭子集]]，根据[[唯一分解整环]]的等价刻画，只需证明$A_x:=S^{-1}A$是[[唯一分解整环]]
即可。再根据 @height-one，我们只需证明$A_x$的任何高度$1$的素理想$P$都是其主理想。

记$\mathfrak{p}=P\cap A$，那么$P=\mathfrak{p}A_x$。由于$A$是正则局部环，
其[[整体维数]]$\operatorname{gl.dim} A<\infty$，故$\mathfrak{p}$
作为有限生成$A$-模有有限[[消解 (同调代数)|投射消解]]。
利用[[Schanuel 引理]]，容易得到$\mathfrak{p}$有
[[消解 (同调代数)|有限自由消解]]。所以$A_x$-模$P$也有有限自由消解。

对$A_x$的任何素理想$Q$来说，$x\notin Q$，故$(A_x)_Q=A_{Q\cap A}$比$A$的维数低。同时
由于它还是$A$在素理想处的局部化，根据[[Serre 定理]]$(A_x)_Q$是正则局部环；于是可以利用
归纳假设，知道$(A_x)_Q$是唯一分解整环，且$P_Q$要么高度$1$（从而根据唯一分解整环的性质
是主理想），要么是$(A_x)_Q$本身；无论如何$P_Q$是$(A_x)_Q$-有限自由模。
根据 @local-free，得到$P$是$A_x$-投射模。

综上，$P$是有有限自由消解的$A_x$-投射模。
利用 @stably-free，得到$P$是$A_x$-稳定自由模，
即存在正整数$m,r\geq 0$使得$A_x^{m+r}\simeq P\oplus A_x^m $。
在$P$处取局部化，根据$P$高度为$1$及[[Serre 定理]]得到$(A_x)_P$是维数$1$的正则局部环，
即离散赋值环，且$P(A_x)_P$成为主理想；
再利用离散赋值环上有限生成模的结构定理，两边取[[秩 (自由模)|秩]]，得到$r$必须是1。

记上面的同构$A_x^{m+r}\simeq P\oplus A_x^m$为$\varphi: A_x^{m+1}\rightarrow P\oplus A_x^m$。
取左边$A_x^{m+1}$的[[基|基底]]为
$(e_0,\cdots, e_m)$，右边$A_x^{m}$的基底为
$(f_1,\cdots, f_m)$，同时视$P$为$A_x$的$A_x$-子模并记该$A_x$的基底为$(f_0)$，则存在系数矩阵
$M=(a_{ij})_{i=0,j=0}^{m,m}$使得
$$
\varphi(e_i)=\sum_{j=0}^m a_{ij} f_j.
$$

下面考虑
$$
e'_0=\sum_{i=0}^m a'_{i0}e_i, ~ ~ e'_j=\varphi^{-1}(f_j) ~ ~ (0<j\leq m).
$$
其中$a'_{ij}$是$M$在$(i,j)$处的代数余子式。由于$(e_i)$是基，所以存在系数矩阵
$N\in A_x^{(m+1)\times (m+1)}$使得
$$
(e'_0, \cdots, e'_m)^T=N(e_0, \cdots, e_m)^T
$$
（这里$T$表示转置，下同）且显然有$N$的第一行第$k$列是$a'_{k0}$。于是由构造方法有
$$
\left(\operatorname{diag}(\det M,1,\cdots,1)\right)(f_0,\cdots, f_m)^T
= (\varphi(e'_0),\cdots, \varphi(e'_m))^T= NM(f_0,\cdots, f_m)^T.
$$
从而$NM=\operatorname{diag}(\det M,1,\cdots,1)$。取行列式，并利用$A_x$是整环，得到：
$$
\det N=1.
$$
于是$(e'_0, \cdots, e'_m)$也是$A_x^{m+1}=\left<(e_0,\cdots, e_m)\right>$的[[基]]。
考虑这组基，得到
$$
Pf_0=A_x\varphi (e'_0)=\det M\cdot A_xf_0，~ ~ A_xf_j=A_x\varphi(e'_j) ~ ~ (0<j\leq m) .
$$
从而$P=\det M\cdot A_x$，是$A_x$的主理想。

综上所述，$A_x$的任何高度$1$的素理想$P$都是其主理想，所以$A_x$是唯一分解整环，从而$A$也是
唯一分解整环。
:::

```terms
Auslander–Buchsbaum 定理:
  ja: Auslander–Buchsbaum の定<てい>理<り>
```
