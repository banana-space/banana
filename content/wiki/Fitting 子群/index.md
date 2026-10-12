---
title: Fitting 子群
categories: [有限群论]
notices:
  - name: 问题
    items:
      - “性质”一节需要扩充。
      - 'Fitting 定理的证明中，按 $L_0:=L$、$L_n:=[L_{n-1},L]$ 的定义，$L_n$ 是 $n+1$ 个 $L$ 的交换子，与 $[\underbrace{L,\cdots,L}_n]$ 以及“$L_s$ 是 $2^s$ 个 $[X_1,\cdots,X_s]$ 的乘积”的下标似乎差一。'
---

**Fitting 子群**是一个重要的有限群论研究对象，最早由[[Hans Fitting]]提出。
对[[有限群]]$G$，它总是存在最大的[[正规子群|正规]][[幂零群|幂零子群]]$F(G)$，
这群被称为$G$的Fitting 子群。
对于$G$是有限[[可解群]]的情况，$F(G)$表现良好。

## 定义

::: definition
对有限群$G$，它的全体正规幂零子群生成的子群$F(G)$称为$G$的**Fitting 子群**。
:::

而上述构造的幂零性由下面的Fitting 定理和[[数学归纳法]]保证。

::: theorem [Fitting]
对有限群$G$的两个幂零正规子群$H_1,H_2$，它们的乘积（生成的子群）$H_1H_2\le G$也是幂零正规子群。

进一步地，若用$c(H)$表示一个幂零群$H$的最短中心列长度，则$c(H_1H_2)\le c(H_1)+c(H_2)$。
:::

::: proof
为证明幂零性，我们考虑$L:=H_1H_2$的下中心列。
即设
$L_0:=L, L_{n}:=[L_{n-1},L]=\langle xyx^{-1}y^{-1}:x\in L_{n-1},y\in L\rangle=[\underbrace{L,\cdots,L}_n]$
不断取交换子生成的群，
现在我们声称$L_s$是全体$2^s$个$[X_1,\cdots,X_s]$的乘积，其中$X_i$要么为$H_1$要么为$H_2$。

这件事来自于如下的观察，若$A,B,C$为$G$的正规子群，则$[AB,C]=[A,C][B,C]$（不妨设$bc=c_1b$，
由此计算得$[ab,c]=[a,c_1][b^{-1},c_1]^{-1}$，另一边包含显然），
类似地$[A,BC]=[A,B][A,C]$都是正规子群。另外我们还将用到$[A,B]\le A$。

现在对于$s>c(H_1)+c(H_2)$，则$X_1,\cdots,X_s$中要么$H_1$出现了$c(H_1)+1$次，
要么$H_2$出现了$c(H_2)+1$次。
我们声称此时$[X_1,\cdots,X_s]$总是$0$。
对$s$归纳容易证明如果$X_i$都是正规子群，
若其中$A$出现$k$次则$[X_1,\cdots,X_s]\le[\underbrace{A,\cdots,A}_k]$。
（倘若$X_s\ne A$则$[X_1,\cdots,X_s]\le[X_1,\cdots,X_{s-1}]\le [\underbrace{A,\cdots,A}_k]$，
否则$X_s=A$将导致
$[X_1,\cdots,X_s]\le[[\underbrace{A,\cdots,A}_{k-1}],A]=[\underbrace{A,\cdots,A}_k]$。）
于是$s>c(H_1)+c(H_2)$时$L_s=0$从而$L$的下中心列长度不超过$c(H_1)+c(H_2)$，结论得证。
:::

## 性质
