---
title: 辛同胚
categories: [辛几何]
navboxes: [辛几何]
---

<problems>
- “Moser 同痕”一节的引理似乎需要假设 $M$ 是闭流形；并且结论中的 $\psi_t$ 一般不是辛同痕，而只是满足 $\psi_t^*\omega_t=\omega_0$ 的同痕。
- “Moser 同痕”一节的推论似乎需要假设 $M_1$、$M_2$ 连通、定向且彼此微分同胚，结论中的 $F$ 应为微分同胚。
- “不可压缩定理”一节需要扩充。
</problems>

在[[辛几何]]中，
**辛同胚**是指[[辛流形]]间保持辛结构的[[微分同胚]]。

## 定义

::: definition
设$(M_i,\omega_i)$为辛流形（$i=1,2$）。
称[[微分同胚]] $F\colon M_1\rightarrow M_2$
为**辛同胚**，如果它保持辛结构，即 $F^*\omega_2=\omega_1$。
:::

另外，
一族光滑[[同痕]] $(\psi_t\colon M\rightarrow M)_{t \in [0, 1]}$
称为**辛同痕**，是指每个$\psi_t$都是辛同胚。

## 性质

### Moser 同痕

Moser 同痕是构造辛同胚（同痕）的一个重要手段。

::: lemma
设$M$为光滑流形，$\omega_t$为$M$上光滑的一族辛形式（$t\in[0,1]$），满足
\[
\frac{d}{dt}\omega_t=d\sigma_t
\]
对于一族光滑的$\sigma_t\in\Omega^1(M)$成立，
则存在辛同痕$\psi_t\colon M\rightarrow M$
使得$\omega_0=\psi_t^*\omega_t$。
:::

::: proof
注意到
\[
\frac{d}{dt}\psi_t^*\omega_t=\psi_t^*\left( \frac{d}{dt}\omega_t+\mathcal{L}_{X_t}\omega_t \right),
\]
再使用Cartan公式和非退化性取出$X_t$即可。
可以看出，这个手段只依赖于闭和非退化性，并不一定需要辛形式，
例如$\omega_t$为一族体积形式也是可以的。
:::

作为一个直接的推论，有以下结果：

::: corollary
设$M_i$为闭流形，$dV_i$为体积形式，并且满足
\[
\int_{M_1}dV_1=\int_{M_2}dV_2,
\]
即体积相等，则存在保体积同胚$F\colon M_1\rightarrow M_2$，即
\[
F^*dV_2=dV_1.
\]
:::

推广这个结果，可以得到称为Moser 同痕的手段：

::: theorem [Moser 同痕]
设$M$为光滑流形，$Q\subset M$为紧子流形，
$\omega_1,\omega_2\in\Omega^2(M)$为闭的$2$-形式，
它们在$Q$上相等并且对所有$q\in Q$它们在$T_qM$上非退化，
则存在$Q$的邻域$\mathcal{N}_1,\mathcal{N}_2$
以及微分同胚$\psi\colon\mathcal{N}_1\rightarrow\mathcal{N}_2$使得
\[
\psi|_Q=\operatorname{id},\quad \omega_1=\psi^*\omega_2.
\]
:::

这个定理会在处理各种“辛邻域”相关的结论时起到很大的作用（例如[[Darboux 定理]]）。

### 不可压缩定理

```terms
辛同胚:
  en: symplectomorphism
```
