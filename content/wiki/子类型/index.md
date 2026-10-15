---
title: 子类型
categories: [类型论]
navboxes: [类型论]
---

在[[类型论]]中，**子类型**是[[集合]]之间[[子集]]概念的类比。

[[集合论]]中的子集有两种观点，集合$A$的子集$B$一方面可以视作$A$的幂集中的元素$B\in\mathcal{P}(A)$，
另一方面可以视作集合$B$到集合$A$的嵌入$i \colon B \hookrightarrow A$。
与之相对应，类型论也有两种子类型的概念，被称为**质料子类型**和**结构子类型**。

## 定义

### 质料子类型

::: definition
记$\Omega \equiv \mathrm{Prop}$为[[命题宇宙]]（或将其视作[[子对象分类子]]的真值对象），
定义$A$的**幂类型**为从$A$到$\Omega$的[[函数类型]]：

$$
\mathcal{P}(A) :\equiv (A \to \Omega)
$$
:::

::: definition
定义$A$的**质料子类型**为其幂类型中的元素$B \colon \mathcal{P}(A)$。
:::

::: definition
定义$A$中元素$x \colon A$和质料子类型$B \colon \mathcal{P}(A)$
之间的**局部属于关系**$x \in_A B$为：
$$
x \in_A B :\equiv B(x)
$$
:::

### 结构子类型

::: definition
对于函数$f \colon B \to A$，我们称$f$为**嵌入**，
当且仅当对任意$x, y \colon B$，函数
$$
\mathrm{ap}_f \colon (x =_B y) \to (f(x) =_A f(y))
$$
为[[等价 (类型论)|等价]]。
:::

::: definition
$A$的**结构子类型**是二元组$(B, i_B)$，
其中$B$是类型，$i_B$是$B$到$A$的嵌入$i_B \colon B \hookrightarrow A$。
:::

### 质料子类型与结构子类型的比较

质料子类型和结构子类型之间有一一对应的关系。

给定质料子类型$P_B \colon \mathcal{P}(A)$，其对应的结构子类型可以表达为：
$$
i_B \colon B\equiv\sum_{x \colon A}P_B(x) \hookrightarrow A\\(x, y) \mapsto x
$$

反之，给定结构子类型$i_B \colon B \hookrightarrow A$，相应质料子类型可以表达为：

$$
P_B = \left( \lambda x \colon A.\sum_{y \colon B}i_B(y) =_A x \right) \colon \mathcal{P}(A)
$$

另外，定义函数$\lambda x.1 \colon 1 \to \Omega$，那么可将其视作一种子类型分类子。
具体来说，质料子类型$P_B \colon \mathcal{P}(A)$
与其对应的结构子类型$(B, i_B \colon B \hookrightarrow A)$可构成如下的[[拉回]]图表：

\[
\begin{tikzcd}
  B \ar[d, hook, "i_B"] \ar[r]
  \ar[dr, phantom, pos=.2, "\ulcorner"]
    & 1 \ar[d, hook, "\lambda x.1"] \\
  A \ar[r, "P_B"] & \Omega
\end{tikzcd}
\]

### 外延子类型

::: remark* (警告)
本定义不被主流数学界所采用。
:::

::: definition
若对于任意 $u$ 满足 $\Gamma\vdash u:A$，都有 $\Gamma\vdash u:B$，
那么 $A$ 是 $B$ 的**子类型**，记作 $A:<B$。

该定义可以写作类型规则：
\[
\cfrac{\Gamma\vdash A :< B \quad \Gamma\vdash u:A}{\Gamma\vdash u:B}
\]
该性质又叫**Liskov 替换原则**。
:::

这种子类型的定义存在明显的问题。
若 $A:<B$，那么 $A$ 的实例就是 $B$ 的实例，这使得一个值可以对应多个不等价的类型，
违背了类型论中的内涵性思想。

```terms
子类型:
  en: subtype
质料子类型:
  en: material subtype
结构子类型:
  en: structural subtype
局部属于关系:
  en: local membership relation
Liskov 替换原则:
  en: Liskov substitution principle (LSP)
```
