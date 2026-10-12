---
title: 代数闭包
categories: [域论]
navboxes: [域论]
---

[[域]] $k$ 的**代数闭包**是包含 $k$ 的最小[[代数闭域]]，
也是向 $k$ 添加其中所有非常值[[多项式]]的根而得到的域。

## 定义

::: definition [代数闭包]
设 $k$ 是[[域]]。
如[[域扩张]] $K/k$ 为[[代数扩张]]，且 $K$ 为[[代数闭域]]，则称
$K$ 为 $k$ 的**代数闭包**。
:::

代数闭包总存在（@thm:存在性），并在相差同构的意义下唯一。

## 例子

- [[代数闭域]]的代数闭包是其自身。

- [[有理数]]域 $\mathbb{Q}$ 的代数闭包是[[代数数]]域 $\bar{\mathbb{Q}}$。

- [[实数]]域 $\mathbb{R}$ 的代数闭包是[[复数]]域 $\mathbb{C}$。

## 性质

### 存在性

::: theorem {@thm:存在性}
每个域都有代数闭包。若 $K$ 为 $k$ 的代数闭包，
$\Omega\supseteq k$ 为代数闭域，则存在 $k$-嵌入
（即保持 $k$ 不动的嵌入）$K\hookrightarrow\Omega$；如
$\Omega/k$ 也是代数闭包，则该嵌入是同构。特别地，$k$
的代数闭包都同构，将其记作 $k^\mathrm{a}$。
:::

证明依赖[[选择公理]]，以 [[Zorn 引理]]的方式应用。

::: proof
先证存在性。取集合 $S\supseteq k$ 满足 $|S|>\max\{|k|,
\aleph_0\}$。考虑集合
$$
\{F/k\text{ 代数扩张}\mid F\subseteq S\}
$$
及其上的偏序：$E\le F$ 指 $E\subseteq F$ 且含入映射是域同态。
它显然非空，因为平凡扩张属于它；
显然每条链都有上界，就是把那些扩张并起来。故它有极大元 $K/k$。
下证 $K$ 代数闭。设 $L/K$ 为代数扩张，则 $L/k$ 也是代数扩张。
由下面的引理，$|K|\le|L|<|S|$，故存在集合单射 $L\setminus K
\to S\setminus K$，即存在单射 $\varphi\colon L\to S$，
$\varphi|_K=\operatorname{id}$。
用 $\varphi$ 将 $L$ 的域结构搬到 $\varphi(L)$ 上去，
得代数扩张 $\varphi(L)/k$，$\varphi(L)\subseteq S$。
由 $K$ 极大立得 $\varphi(L)=K$，即 $L=K$，故 $K$ 代数闭。

再证唯一性。考虑集合
$$
\{(E,\varphi)\mid k\subseteq E\subseteq K,\,
\varphi\colon E\hookrightarrow\Omega\text{ 为 $k$-嵌入}\}
$$
及其上的偏序：$(E,\varphi)\le(F,\psi)$ 指 $E\subseteq F$
且 $\psi|_E=\varphi$。它显然非空，因为平凡扩张属于它；
显然每条链都有上界，就是把扩张和映射都并起来。故它有极大元
$F/k$，$\psi\colon F\hookrightarrow\Omega$。要证 $F=K$。
若其不然，则存在 $a\in K\setminus F$。由单扩张的结构，
$F(a)\cong F[x]/f(x)$ 对首一不可约 $f(x)\in F[x]$。
由于 $\Omega$ 代数闭，$f(x)$ 在 $\Omega$ 有根 $a'$，
于是有嵌入 $F(a)\hookrightarrow\Omega$，$a\mapsto a'$，
延拓 $\psi$，与 $(F,\psi)$ 的极大性矛盾！故 $F=K$，即存在
$k$-嵌入 $K\hookrightarrow\Omega$。

如 $\Omega/k$ 也是代数闭包，则它是代数扩张，从而 $\Omega/K$
是代数扩张，由 $K$ 代数闭知 $\Omega=K$。
:::

### 大小

::: lemma
$F/k$ 为代数扩张。则 $|F|\le\max\{|k|,\aleph_0\}$。
:::

::: proof
记 $A=\max\{|k|,\aleph_0\}$。先证 $|k[x]|\le A$。
由于每个多项式都是常数或者对某个正整数 $n$ 的 $n$ 次多项式，
而 $n$ 次多项式的集合通过取系数能嵌入 $k^{n+1}$，故
$$
|k[x]|\le\sum_{n=0}^\infty |k|^{n+1}
\le\sum_{n=0}^\infty A^{n+1}=\sum_{n=0}^\infty A
=\aleph_0A=A.
$$
再证引理本身。考虑映射“取极小多项式”$\colon F\to k[x]$。
由多项式零点只有有限个，得
$$
|F|\le\aleph_0|k[x]|\le\aleph_0A=A.
$$
基数算术的具体细节参见[[基数]]。
:::

```terms
代数闭包:
  en: algebraic closure
  de: algebraischer Abschluss :m
  fr: clôture algébrique :f
```
