---
title: Bayes 定理
categories: [概率论]
navboxes: [概率论]
---

**Bayes 定理**是一个描述[[条件概率]]的公式：
\[
\mathbb{P}(A \mid B) = \frac{\mathbb{P}(B \mid A) \, \mathbb{P}(A)}{\mathbb{P}(B)},
\]

如果事件 $A$ 是原因，事件 $B$ 是结果，则 Bayes 定理可以从 $\mathbb{P}(B \mid A)$ 算出
$\mathbb{P}(A \mid B)$，也就是“执果索因”。

## 定理与证明

::: theorem [Bayes 定理]
对于[[概率空间]] $(\Omega, \mathcal{F}, \mathbb{P})$ 的[[事件]] $A$ 和 $B$，
若 $\mathbb{P}(B) \neq 0$，
则有
\[
\mathbb{P}(A \mid B) = \frac{\mathbb{P}(B \mid A) \, \mathbb{P}(A)}{\mathbb{P}(B)},
\]
其中 $\mathbb{P}(A \mid B)$ 和 $\mathbb{P}(B \mid A)$
表示[[条件概率]]。
:::

::: proof
根据条件概率的定义计算即可。因为
\[
\mathbb{P}(A\mid B)=\frac{\mathbb{P}(AB)}{\mathbb{P}(B)},\quad
\mathbb{P}(B\mid A)=\frac{\mathbb{P}(AB)}{\mathbb{P}(A)}
\]
两式相除得到
\[
\frac{\mathbb{P}(A\mid B)}{\mathbb{P}(B\mid A)}=\frac{\mathbb{P}(A)}{\mathbb{P}(B)}
\]
变形即证。
:::

如果有一系列不交事件 $(A_i)_{1 \leq i \leq n}$ 满足
\[
\bigcup_{i=1}^{n} A_i = \Omega,
\]
则借助[[全概率公式]]，Bayes 定理还可以表示为：对任意 $1 \leq i \leq n$，
\[
\mathbb{P}(A_i \mid B) = \frac{\mathbb{P}(B \mid A_i)\mathbb{P}(A_i)}{\sum_{j=1}^n \mathbb{P}(B \mid A_j)\mathbb{P}(A_j)}.
\]

## 解释

在概率和统计的研究中，有两种派别：频率学派和 Bayes 学派。频率学派认为概率是客观存在的
量，我们需要做的就是找到手段计算或者估计它。而 Bayes 学派则不认为概率是一个固定不变的
值，而是一种“相信的程度”，可以随着主体获取的信息改变。

对于 Bayes 定理，这两个学派的解释也不同。对于频率学派而言，$B$ 发生了也不意味着 $A$
的概率发生了改变，$\mathbb{P}(A \mid B)$ 只是把考察范围缩小到了 $B$；对于 Bayes 学派而言，
$B$ 的发生即意味着新的信息，需要对 $A$ 的评估进行修正。
$\mathbb{P}(A)$被称作 $A$ 的先验概率，$\mathbb{P}(B \mid A)$ 是在已知 $B$ 下的 $A$ 的“似然性”，
而 $\mathbb{P}(A \mid B)$ 则是更新后的 $A$ 的后验概率。

## 应用

Bayes 定理在数学中是简单的，但其实际应用十分广泛。
下面举两个实际应用例子。

### 检测问题

假设一个常规的吸毒检测结果的灵敏度和特异度均为 $99\%$，
即吸毒者每次检测呈阳性（+）的概率为$99\%$。而不吸毒者每次检测呈阴性（-）的概率为$99\%$。
假设某公司对全体雇员进行吸毒检测，通过事先探查得知大概有 $0.5\%$ 的雇员吸毒。
我们来计算一位雇员如果检测结果呈阳性，他（她）吸毒的概率。

用 $D$ 表示雇员吸毒的事件，$N$ 表示不吸毒，$+$ 表示检测结果
为阳性。根据 Bayes 定理：
\[
\begin{aligned}
  \mathbb{P}(D \mid +) &= \frac{\mathbb{P}(+ \mid D)\mathbb{P}(D)}{\mathbb{P}(+)}\\
             &= \frac{\mathbb{P}(+ \mid D)\mathbb{P}(D)}{\mathbb{P}(+ \mid D)\mathbb{P}(D) + \mathbb{P}(+ \mid N)\mathbb{P}(N)}\\
             &= \frac{99 \% \times 0.5 \%}{99 \% \times 0.5 \% + 1 \% \times 99.5 \%}\\
             &\approx 0.3322.
\end{aligned}
\]
也就是检测结果呈阳性的雇员吸毒的概率仅为 $33.22\%$，即使灵敏度
和特异度已经很高。其原因在于吸毒比率很低，导致检测变得容易出错，
或者说出现“假阳性”现象。

### 假设与证据

在许多领域中都需要提出假设，一般记为 $H$。为了说明假设确实是
有道理的，常引入一个或一些证据，记为 $E$。可以把它们都看成是随机事件。
作为证据，当然要有 $\mathbb{P}(E)>0$。
根据 Bayes 定理：
\[
\mathbb{P}(H \mid E)=\frac{\mathbb{P}(E \mid H)\mathbb{P}(H)}{\mathbb{P}(E)}
\]
等式左边是假设在证据前提下成立的概率。为了使得证据确实支持假设，
我们需要引入证据后假设成立的概率高于引入之前。这也就是说
\[
\mathbb{P}(H \mid E)\geq \mathbb{P}(H)
\]
也就是$\mathbb{P}(E \mid H)\geq \mathbb{P}(E)$。
结合[[全概率公式]]：
$\mathbb{P}(E)=\mathbb{P}(E \mid H)\mathbb{P}(H)+\mathbb{P}(E \mid \bar H)(1-\mathbb{P}(H))$，
代入计算得
\[
\mathbb{P}(E \mid H)\geq \mathbb{P}(E \mid \bar H)
\]
上式可以通俗地解释为：证据在假设成立时比假设不成立时更有可能出现。
考虑比值 $\dfrac{\mathbb{P}(E \mid H)}{\mathbb{P}(E \mid \bar H)}$，它
表示了证据支持假设的程度，比值越大越支持。在司法领域，有时需要使用
这样的定量方法以衡量证据支持假设的程度。

```terms
Bayes 定理:
  en: Bayes' theorem
  fr: théorème de Bayes :m
  de: Satz von Bayes :m
  ja: Bayes の定<てい>理<り>
  ko: Bayes 정리
```
