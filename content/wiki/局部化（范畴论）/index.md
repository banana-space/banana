---
title: 局部化（范畴论）
aliases: [范畴局部化]
categories: [范畴论]
navboxes: [范畴论]
---

在[[范畴论]]中，
**局部化**是将[[范畴]]中的部分[[态射]]变得[[同构|可逆]]，
而得到新范畴的操作，类似于[[交换代数]]中[[环]]的[[局部化]]。
例如，在[[拓扑空间范畴]] $\mathsf{Top}$ 中，
若将所有[[同伦等价]]变得可逆，得到的新范畴就是[[同伦拓扑空间范畴]] $\mathsf{hTop}$。

局部化常常可以与[[高阶范畴]]联系起来。
具体地说，范畴的局部化不仅可以视为普通范畴，
还可以视为高阶范畴，该高阶范畴刻画了局部化所引入的[[同伦 (范畴论)|同伦]]、高阶同伦的信息。
例如，在 $\mathsf{Top}$ 中，若将所有[[同伦等价]]变得可逆，
则可从此过程中得到拓扑空间之间映射的[[同伦]]的信息，
进而得到拓扑空间的 [[$(\infty, 1)$-范畴]]。
其[[对象]]为拓扑空间，$1$-态射为[[连续映射]]，$2$-态射为映射间的[[同伦]]，
$3$-态射为同伦间的同伦，如此等等。

## 定义

### 对普通范畴

::: definition [弱等价范畴] {@弱等价范畴}
**[[弱等价范畴]]** 是指二元组 $(\mathcal{C}, \mathsf{W})$，其中

- $\mathcal{C}$ 是[[范畴]]。

- $\mathsf{W}$ 是 $\mathcal{C}$ 中一族[[态射]]构成的[[类]]。

并且，$\mathsf{W}$ 满足以下性质：

- $\mathsf{W}$ 包含所有[[同构]]。

- （**三选二性质**）对 $\mathcal{C}$ 中任何交换图
  \[
  \begin{tikzcd}[column sep=small]
    x \ar[dr, "f"'] \ar[rr, "g \circ f"] & & z \\
    & y \rlap{ ,} \ar[ur, "g"']
  \end{tikzcd}
  \]
  若 $f, g, g \circ f$ 三者中有两者属于 $\mathsf{W}$，
  则第三者也属于 $\mathsf{W}$。

:::

::: definition [局部化] {@局部化}
设 $(\mathcal{C}, \mathsf{W})$ 是[[弱等价范畴]]（@弱等价范畴）。
范畴 $\mathcal{C}$ 关于 $\mathsf{W}$ 的**局部化**是指
范畴 $\mathcal{C} [\mathsf{W}^{-1}]$，带有[[函子]]
\[
i \colon \mathcal{C} \longrightarrow \mathcal{C} [\mathsf{W}^{-1}],
\]
它将 $\mathsf{W}$ 中所有态射都映到 $\mathcal{C} [\mathsf{W}^{-1}]$ 中的[[同构]]，
并满足以下[[万有性质]]：

- 对任意范畴 $\mathcal{D}$，及[[函子]] $F \colon \mathcal{C} \to \mathcal{D}$，
  若 $F$ 将 $\mathsf{W}$ 中所有态射都映到 $\mathcal{D}$ 中的同构，
  则存在函子 $\tilde{F} \colon \mathcal{C} [\mathsf{W}^{-1}] \to \mathcal{D}$，
  使得以下图表在相差[[自然同构]]的意义下交换：
  \[
  \begin{tikzcd}[column sep={3em,between origins}]
    \mathcal{C} \ar[dr, "i"'] \ar[rr, "F"] && \mathcal{D} \\
    & \mathcal{C} [\mathsf{W}^{-1}] \rlap{ .} \ar[ur, dashed, "\tilde{F}"']
  \end{tikzcd}
  \]
  并且，这样的 $\tilde{F}$ 在相差自然同构的意义下唯一。

:::

不严格地说，范畴的局部化总是存在。
唯一的问题是，局部化可能会使态射集 $\mathcal{C} [\mathsf{W}^{-1}] (x, y)$
成为[[真类]]，而超过集合的大小。
但这不是重要的问题，可以通过限制 $\mathcal{C}$ 的大小而解决。

### 对高阶范畴

高阶范畴也有局部化的概念。
并且，若将普通范畴视为高阶范畴并局部化，可以得到真正的高阶范畴，而不总是普通范畴。
因此，@局部化 中的局部化可以看成下述 @无穷范畴局部化 中高阶范畴的影子。

::: definition [弱等价 $(\infty, 1)$-范畴] {@弱等价无穷范畴}
**弱等价 $(\infty, 1)$-范畴**是指二元组 $(\mathcal{C}, \mathsf{W})$，其中

- $\mathcal{C}$ 是 [[$(\infty, 1)$-范畴]]。

- $\mathsf{W}$ 是 $\mathcal{C}$ 中一族 [[$1$-态射]]构成的[[类]]。

并且，$\mathsf{W}$ 满足以下性质：

- $\mathsf{W}$ 包含所有[[同构]]，即所有可逆 $1$-态射。

- （**三选二性质**）对 $\mathcal{C}$ 中任何交换图
  \[
  \begin{tikzcd}[column sep=small]
    x \ar[dr, "f"'] \ar[rr, "g \circ f"] & & z \\
    & y \rlap{ ,} \ar[ur, "g"']
  \end{tikzcd}
  \]
  若 $f, g, g \circ f$ 三者中有两者属于 $\mathsf{W}$，
  则第三者也属于 $\mathsf{W}$。

:::

::: definition [局部化] {@无穷范畴局部化}
设 $(\mathcal{C}, \mathsf{W})$
是弱等价 $(\infty, 1)$-范畴（@弱等价无穷范畴）。
则 $\mathcal{C}$ 关于 $\mathsf{W}$ 的**局部化**是指
$(\infty, 1)$-范畴 $\mathcal{C} [\mathsf{W}^{-1}]$，
带有 [[$(\infty, 1)$-函子]]
\[
i \colon \mathcal{C} \longrightarrow \mathcal{C} [\mathsf{W}^{-1}],
\]
它将 $\mathsf{W}$ 中所有 $1$-态射都映到
$\mathcal{C} [\mathsf{W}^{-1}]$ 中的同构，
并满足以下[[万有性质]]：

- 对任意 $(\infty, 1)$-范畴 $\mathcal{D}$，
  及 $(\infty, 1)$-函子 $F \colon \mathcal{C} \to \mathcal{D}$，
  若 $F$ 将 $\mathsf{W}$ 中所有 $1$-态射都映到 $\mathcal{D}$ 中的同构，
  则存在 $(\infty, 1)$-函子 $\tilde{F} \colon \mathcal{C} [\mathsf{W}^{-1}] \to \mathcal{D}$，
  使得以下图表交换：
  \[
  \begin{tikzcd}[column sep={3em,between origins}]
    \mathcal{C} \ar[dr, "i"'] \ar[rr, "F"] && \mathcal{D} \\
    & \mathcal{C} [\mathsf{W}^{-1}] \rlap{ .} \ar[ur, dashed, "\tilde{F}"']
  \end{tikzcd}
  \]
  并且，所有这样的 $\tilde{F}$ 构成的空间是[[可缩空间]]。

:::

## 例子

- 考虑弱等价范畴 $(\mathsf{Top}, \mathsf{HE})$，
  其中 $\mathsf{HE}$ 是所有[[同伦等价]]构成的类。
  则 $\mathsf{Top} [\mathsf{HE}^{-1}]$
  等价于[[同伦拓扑空间范畴]] $\mathsf{hTop}$。

- 考虑弱等价范畴 $(\mathsf{Top}, \mathsf{WHE})$，
  其中 $\mathsf{WHE}$ 是所有[[弱同伦等价]]构成的类。
  则 $\mathsf{Top} [\mathsf{WHE}^{-1}] \simeq \mathsf{hCW}$。

- 对任何[[模型范畴]] $(\mathcal{C}, \mathsf{Cof}, \mathsf{Fib}, \mathsf{W})$，
  局部化 $\mathcal{C} [\mathsf{W}^{-1}]$
  等价于其[[同伦范畴]] $\mathrm{Ho} (\mathcal{C})$。

```terms
局部化:
  en: [localize, localization]
  de: [lokalisieren, Lokalisierung :f]
  fr: [localiser, localisation :f]
  grc: [ἑντοπίζω, ἑντοπισμός :m]
  la: [localizo, localizatio :f]
```
