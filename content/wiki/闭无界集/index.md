---
title: 闭无界集
categories: [集合论]
---

<problems>
- “性质”一节定理证明的“极限步”中，“找到 $\alpha<\beta\in\lambda$”似乎应为 $\beta\in C$，“$\beta_\theta(\eta\leq\theta<\lambda)$”中的 $\eta$ 似乎应为 $\xi$，“指出 $\beta\in\xi$”似乎应为 $\beta\in C_\xi$。
</problems>

闭无界集是集合论中一种常见的集合。

## 定义

::: definition
给定基数$\kappa$的子集$C$，我们命名以下几种性质：

1. 对序数$\gamma\in\kappa$无界，记为$\mathrm{UB}_\gamma(C):\bigcup(\gamma\cap C)=\gamma$

2. 无界，记为$\mathrm{UB}(C):\mathrm{UB}_\kappa(C)$

3. 闭，记为$\mathrm{CL}(C):\forall\gamma\in\kappa(\mathrm{UB}_\gamma(C)\to\gamma\in C)$

4. 闭无界，记为$\mathrm{CLUB}(C):\mathrm{CL}(C)\wedge\mathrm{UB}(C)$

:::

直观上，闭无界集是一类非常大的集合。

## 性质

为了简单地描述闭无界集的性质，我们重新考虑$\kappa$上的一个滤，它称作闭无界滤。

::: definition
令$\mathcal{F}_{\mathrm{CLUB}}(\kappa)=\{X\subseteq\kappa|\exists C\subseteq X(\mathrm{CLUB}(C))\}$
为$\kappa$上的闭无界滤。

称滤$\mathcal{F}$是$\kappa$完备的，
若任给$\lambda<\kappa$和$\{F_\alpha|\alpha\in\lambda\}\subseteq\mathcal{F}$均有
$\bigcap_{\alpha\in\lambda}F_\alpha\in\mathcal{F}$。显然由定义每个滤都是$\omega$完备的。

给定一些$\{X_\alpha|\alpha\in\kappa\}\subseteq\mathscr{P}(\kappa)$，
我们定义其对角交为
$\Delta_{\alpha\in\kappa}X_\alpha=\{\xi\in\kappa|\xi\in\bigcap_{\alpha\in\xi}X_\alpha\}$。

称$\kappa$上的滤$\mathcal{F}$是正规的，若它对对角交封闭。
:::

::: theorem
对不可数正则基数$\kappa$，$\mathcal{F}_{\mathrm{CLUB}}$是$\kappa$完备的正规滤。
:::

::: proof
换言之，我们在证明小于$\kappa$个闭无界集的交还是闭无界集，且闭无界集族的对角交也是闭无界集。
我们不妨设取出的集列都是递降的，因为我们总可以用之前所有集的交集来代替它而不改变交和对角交的结果。

首先，
给定任意序数$\lambda<\kappa$和
$\{C_\alpha\subseteq\kappa|\alpha\in\lambda,\mathrm{CLUB}(C_\alpha)\}$，
记$C=\bigcap_{\alpha\in\lambda}C_\alpha$，我们来证明$\mathrm{CLUB}(C)$。

首先验证$\mathrm{CL}(C)$，也就是任给基数$\delta<\kappa$证明$\mathrm{CL}_\delta(C)$，
即给定了单调的$f:\delta\to C$要证明$\gamma=\lim_{\beta\in\delta}f(\beta)\in C$。
任给$\alpha\in\lambda$，只要证明$\gamma\in C_\alpha$，
而这是由$f:\delta\to C\subseteq C_{\alpha}$和$C_\alpha$自己的$\delta$闭性质决定的。

其次验证$\mathrm{UB}(C)$，这需要我们对$\lambda$进行归纳。

1. 后继步：只需证明两个闭无界集的交还是无界集。
   对$C=C_0\cap C_1$和任意的$\alpha\in\kappa$，我们需要一个$\beta\in C$满足$\alpha<\beta$。
   由于$C_0$与$C_1$均无界，交替取$\alpha<\beta_0\in C_0$，$\beta_0<\beta_1\in C_1$，
   $\beta_1<\beta_2\in C_0$，……，然后取$\beta=\lim_{n\in\omega}\beta_n$。
   由于$C_0$与$C_1$均闭，$\beta\in C_0\cap C_1=C$满足要求。

2. 极限步：对极限序数$\lambda$，我们仍然要对任意$\alpha$找到$\alpha<\beta\in\lambda$。
   取$\alpha<\beta_0\in C_0$，然后归纳地要求$\lim_{\theta<\xi}\beta_\theta<\beta_\xi\in C_\xi$。
   由于$\kappa$正则，这个序列的极限$\beta=\lim_{\xi\in\lambda}\beta_\xi$仍在$\kappa$之中，
   而对任意$\xi\in\lambda$，$\beta_\theta(\eta\leq\theta<\lambda)$的极限是$\beta$指出$\beta\in\xi$，
   故$\beta\in C=\bigcap_{\xi\in\lambda}C_\xi$。

另一方面，给定一列$\{C_\alpha\subseteq\kappa|\alpha\in\kappa,\mathrm{CLUB}(C_\alpha)\}$，
记$C=\Delta_{\alpha\in\kappa}C_\alpha$，我们来证明$\mathrm{CLUB}(C)$。

首先验证$\mathrm{CL}(C)$。
对满足$\bigcup(\gamma\cap C)=\gamma$的序数，我们希望$\gamma\in C$，
也就是$\alpha<\gamma\to\gamma\in C_\alpha$。
注意$X_\alpha=\{\beta\in C|\alpha<\beta<\gamma\}\subseteq C_\alpha$即得
$\gamma=\mathrm{sup}(X_\alpha)\in C_\alpha$。

其次验证$\mathrm{UB}(C)$。
给定$\alpha<\kappa$，我们需要$\alpha<\beta\in C$；取$\alpha<\beta_0\in C_0$，
然后归纳地令$\beta_n<\beta_{n+1}\in C_{\beta_n}$，
则$\beta=\lim_{n\in\omega}\beta_n$是所需的那个$\beta$。
:::
