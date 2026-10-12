---
title: 几何不变量理论
aliases: [GIT, 商簇]
categories: [计数几何]
navboxes: [计数几何]
---

在[[代数几何]]中，**几何不变量理论**（英文缩写 **GIT**）
指对[[代数簇]] $X$ 关于[[代数群]] $G$ 的作用构造**商簇** $X // G$ 的理论，
是构造[[模空间]]的一种主要方法。

商簇 $X // G$ 并非严格的商：一般不存在满足[[商空间]]所有性质的商簇。
其原因在于，严格意义的商 $X / G$ 应当是[[商叠]]，
它是[[代数叠]]，而未必是代数簇。
商簇 $X // G$ 则是在某种意义下逼近商叠 $X / G$ 的代数簇。
例如，$X // G$ 的点并不总是对应 $X$ 中的 $G$-轨道，而可能对应多个轨道，
这些轨道在取商的过程中被迫合并。

对[[仿射簇]] $X$，商簇 $X // G$ 仍是仿射簇，
可以直接通过对函数环取 $G$-不变元得到。
而对[[射影簇]]或[[拟射影簇]]，则情况更为复杂，
一般不能自然得到含有 $X$ 中所有点的商簇。
此时需选定 $X$ 上一个 $G$-等变[[丰沛线丛]] $L$，称为[[稳定条件]]，
它确定 $X$ 中的一个开集 $X^\mathrm{ss} \subset X$，
称为**半稳定点**之集，
而商簇 $X^\mathrm{ss} // G$ 只包含这些半稳定点，并对它们取商。
不同的稳定条件一般给出不同的商簇。

几何不变量理论可由商叠推广到一般的[[代数叠]]，
即[[优模空间]]理论。

## 构造

### 仿射商簇

设 $k$ 是[[域]]，$X = \operatorname{Spec} A$ 是其上的[[仿射簇]]，
[[约化群]] $G$ [[群作用|作用]]于 $X$。定义**仿射商簇**
\[
X // G = \operatorname{Spec} A^G,
\]
其中 $A^G \subset A$ 是由 $G$-[[不变元]]构成的子 $k$-代数。
这里，称元素 $f \in A$ 为 $G$-不变元，
是指 $a^* (f) = \mathrm{pr}_2^* (f)$，
其中 $a, \mathrm{pr}_2 \colon G \times X \to X$ 分别为群作用映射与[[投影]]。
由 @Hilbert--Nagata-定理，仿射商簇仍是代数簇。

环的[[含入映射]] $A^G \hookrightarrow A$ 诱导了映射
$\pi \colon X \to X // G$。
该映射的[[纤维]]未必是单个 $G$-[[轨道]]，
而可能是若干 $G$-轨道之并。
见后文的例子和“轨道闭包”一节。

### 射影空间商簇

设 $k$ 是[[域]]，
$X = \mathbb{P}_k^n$ 是[[射影空间 (代数几何)|射影空间]]，
[[约化群]] $G$ 线性地作用于 $X$。
即 $G$ 通过[[线性映射]]作用于
[[仿射空间 (代数几何)|仿射空间]] $\mathbb{A}_k^{n+1}$，
从而诱导 $X$ 上的作用。
记[[分次环]] $A = k [x_0, \dotsc, x_n]$，从而
$X = \operatorname{Proj} A$。此时 $G$ 也作用于 $A$。

称点 $x \in X$ 为**半稳定点**，
如果存在正次数的齐次 $G$-不变元 $f \in A^G$，
使得 $f (x) \neq 0$。
半稳定点之集记为 $X^\mathrm{ss} \subset X$。
定义其**射影商簇**
\[
X^\mathrm{ss} // G = \operatorname{Proj} A^G.
\]

若记仿射锥上的商映射为
\[
\pi \colon \mathbb{A}_k^{n+1} \longrightarrow \operatorname{Spec} A^G,
\]
则 $X^\mathrm{ss}$ 正对应于仿射锥中去掉零锥
$\pi^{-1} (\pi (0))$ 后的射影化。
因而存在自然映射
\[
X^\mathrm{ss} \longrightarrow X^\mathrm{ss} // G.
\]

### 拟射影商簇

设 $k$ 是[[域]]，$X$ 是其上的[[拟射影簇]]，
[[约化群]] $G$ 作用于 $X$。
构造商簇时采用的策略如下：
先取一个[[浸入 (代数几何)|浸入]] $X \hookrightarrow \mathbb{P}_k^n$，
使得 $G$ 在线性作用于 $\mathbb{P}_k^n$ 时，
其限制即为 $X$ 上原有的作用。
由此可从上一小节的射影商构造获得 $X$ 的商簇。

需注意，这样的浸入 $X \hookrightarrow \mathbb{P}_k^n$ 未必存在。
当它存在时，不同的选取也会给出不同的商簇。

浸入 $X \hookrightarrow \mathbb{P}_k^n$
给出 $X$ 上 $G$-[[等变向量丛|等变]]的[[丰沛线丛]] $L$。
这样的 $G$-等变线丛 $L$ 称为关于群作用
$G \curvearrowright X$ 的 **[[稳定条件]]**，
相应商簇将取决于 $L$。

称点 $x \in X$ 为关于 $L$ 的**半稳定点**，
如果存在正整数 $n$ 及 $L$ 的张量积 $L^{\otimes n}$ 的 $G$-不变截面
$f \in \Gamma(X, L^{\otimes n})^G$，使得开集
\[
X_f = \{x \in X \mid f(x) \neq 0\} \subset X
\]
是[[仿射簇]]，且 $x \in X_f$。
半稳定点之集记为 $X^\mathrm{ss} = X^\mathrm{ss}(L)$。
它是 $G$-不变的开集。

定义**商簇** $X^\mathrm{ss} // G$
为将所有仿射商簇 $X_f // G$ 粘合而成的簇，这里 $f$ 取遍上述截面。
可以说明对两个这样的截面 $f$ 与 $g$，开集
$X_f \cap X_g$ 仿射，且 $(X_f \cap X_g) // G$
定义了 $X_f // G$ 与 $X_g // G$ 中的开集，从而这样的粘合是可行的。
存在自然的投影映射
\[
X^\mathrm{ss} \longrightarrow X^\mathrm{ss} // G.
\]
对代数闭域上的几何点，
其纤维与轨道闭包的关系同样由后文“轨道闭包”一节刻画。

当 $X$ 是射影簇时，也有
\[
X^\mathrm{ss} // G \simeq
\operatorname{Proj} \biggl( \bigoplus_{n \geq 0} \Gamma(X, L^{\otimes n})^G \biggr),
\]
其中右边以 $n$ 为分次，上标 $G$ 表示取 $G$-不变部分。

## 例子

- 设 $\operatorname{char} k \neq 2$。令[[循环群]]
  $\mathbb{Z} / 2 \mathbb{Z}$ 作用于仿射直线 $\mathbb{A}^1$，由
  $x \mapsto -x$ 给出。则由定义，仿射商簇
  $\mathbb{A}^1 // (\mathbb{Z} / 2 \mathbb{Z}) \simeq \mathbb{A}^1$，
  商映射
  $\mathbb{A}^1 \to \mathbb{A}^1$
  由 $x \mapsto x^2$ 给出。

- 设 $\operatorname{char} k \neq 2$。令 $\mathbb{Z} / 2 \mathbb{Z}$
  作用于仿射平面 $\mathbb{A}^2$，由 $(x, y) \mapsto (-x, -y)$ 给出。
  则仿射商簇
  $\mathbb{A}^2 // (\mathbb{Z} / 2 \mathbb{Z}) \simeq
  \{ a b = c^2 \} \subset \mathbb{A}^3$。
  这是 $\mathrm{A}_1$ 型 [[Du Val 奇点]]。
  商映射
  $\mathbb{A}^2 \to \{ a b = c^2 \}$
  由 $(x, y) \mapsto (x^2, y^2, xy)$ 给出。

- 令[[乘法群概形|乘法群]] $\mathbb{G}_\mathrm{m}$ 以标量乘法作用于仿射空间
  $\mathbb{A}^n$。则由定义，仿射商簇
  $\mathbb{A}^n // \mathbb{G}_\mathrm{m} \simeq \operatorname{Spec} k$
  是单点簇。

- 令 $\mathbb{G}_\mathrm{m}$ 以权 $(1, -1)$ 作用于 $\mathbb{A}^2$，
  即 $t \cdot (x, y) = (tx, t^{-1} y)$。
  则由定义，仿射商簇
  $\mathbb{A}^2 // \mathbb{G}_\mathrm{m} \simeq \mathbb{A}^1$，
  商映射
  $\mathbb{A}^2 \to \mathbb{A}^1$
  由 $(x, y) \mapsto xy$ 给出。
  此例中，$\mathbb{A}^1$ 的除 $0$ 之外的闭点都对应于单个 $\mathbb{G}_\mathrm{m}$-轨道，
  但 $0 \in \mathbb{A}^1$ 的原像 $\{ x y = 0 \}$ 则是 $3$ 个轨道的并。

- 令 $\mathbb{G}_\mathrm{m}$ 以权 $(1, -1)$ 作用于射影直线 $\mathbb{P}^1$，
  即 $t \cdot [x : y] = [tx : t^{-1} y]$。
  在射影空间商簇的构造中，半稳定点之集为
  \[
  (\mathbb{P}_k^1)^\mathrm{ss}
  = \mathbb{P}_k^1 \setminus \{[1 : 0], [0 : 1]\}.
  \]
  商簇 $(\mathbb{P}_k^1)^\mathrm{ss} // \mathbb{G}_\mathrm{m}$ 是单点簇。
  事实上，此为上例的射影化；上例中 $\{ x y = 0 \}$
  包含的两个非零轨道对应于此处被剔除的点 $[1 : 0]$ 与 $[0 : 1]$。

## 性质

### 有限生成性

::: theorem [Hilbert–Nagata 定理] {@Hilbert--Nagata-定理}
设 $G$ 是域 $k$ 上的[[约化群]]，
并设 $G$ 作用于有限生成交换 $k$-代数 $A$。
则不变元环 $A^G$ 仍是有限生成 $k$-代数。
:::

这保证了上文构造的仿射商簇仍是仿射簇，
也是几何不变量理论中仅考虑约化群的主要原因。

### 万有性质

::: proposition
设 $X = \operatorname{Spec} A$ 是域 $k$ 上的仿射簇，
并设[[约化群]] $G$ 作用于 $X$。
令 $\pi \colon X \to X // G$ 为自然态射。
则 $\pi$ 是 $G$-不变态射。
对任意仿射簇 $Y$ 与任意 $G$-不变态射 $f \colon X \to Y$，
存在唯一态射 $\overline{f} \colon X // G \to Y$，
使得
\[
f = \overline{f} \circ \pi.
\]
类似性质对拟射影商簇构造中的态射
$X^\mathrm{ss} \to X^\mathrm{ss} // G$ 也成立。
:::

### 轨道闭包

::: proposition
设 $k$ 是[[代数闭域]]，$G$ 是[[约化群]]，
$X$ 是仿射簇，
并设 $\pi \colon X \to X // G$ 为仿射商映射。

- $\pi$ 的每个纤维包含唯一的闭 $G$-轨道。

- 对任意 $x, y \in X$，有 $\pi(x) = \pi(y)$
  当且仅当 $\overline{Gx} \cap \overline{Gy} \neq \varnothing$。

类似性质对拟射影商簇构造中的态射
$X^\mathrm{ss} \to X^\mathrm{ss} // G$ 也成立。
:::

### 稳定点

在 $k$ 为[[代数闭域]]时，称半稳定点 $x \in X^\mathrm{ss}$
为**稳定点**，如果其 $G$-轨道 $Gx$ 在 $X^\mathrm{ss}$ 中闭，
且其[[稳定子]]有限。
稳定点之集记为 $X^\mathrm{s}$。

::: proposition
设 $k$ 是[[代数闭域]]，$G$ 是[[约化群]]，
$X$ 是具有 $G$-等变丰沛线丛 $L$ 的拟射影簇。
则稳定点集 $X^\mathrm{s}$ 是 $G$-不变开集，
复合映射
\[
X^\mathrm{s} \hookrightarrow X^\mathrm{ss} \to X^\mathrm{ss} // G
\]
的像是开子簇 $X^\mathrm{s} // G \subset X^\mathrm{ss} // G$，
且其中每个纤维对应一个 $G$-轨道。
:::

## 参考文献

基本教材：

```bibliography
MumfordFogartyKirwan1994:
  type: book
  title: Geometric invariant theory
  author: ['Mumford, D.', 'Fogarty, J.', 'Kirwan, F.']
  year: 1994
  series: Ergebnisse der Mathematik und ihrer Grenzgebiete
  number: 34
  publisher: Springer-Verlag
  doi: 10.1007/978-3-319-65907-7
```

```terms
几何不变量理论:
  en: geometric invariant theory (GIT)
  de: geometrische Invariantentheorie :f
  fr: théorie géométrique des invariants :f
  ja: 幾<き>何<か>学<がく>的<てき>不<ふ>変<へん>式<しき>論<ろん>
  ko: 기하학적 불변식론 (幾何學的 不變式論)
```
