---
title: '斜置（$p$ 进几何）'
categories: [$p$ 进几何]
notices:
  - name: 问题
    items:
      - “性质”一节需要扩充。
navboxes: [P 进几何]
---

**斜置**将混特征的对象对应于纯特征 $p$ 的对象，
这种对应通常会诱导两类对象之间的等价，称为 **[[斜置等价]]**。

## 定义

以下列举出一些常见的斜置。

### 环

环的斜置将环对应至[[完美环]]。

::: definition [斜置]
[[环]] $R$ 的**斜置**，记作 $R^\flat$，指的是
$R/p$ 的极限[[完美化]]，即
$$
R^\flat=\lim(\cdots\to R/p\to R/p),
$$
这里这些映射都是 [[Frobenius 同态]]。
:::

::: remark
这个定义非常一般，但只在 $R$ [[完美胚]]时比较忠实地反映
$R$ 的性质。
:::

环的斜置中元素可以对应于原本的环中元素。

::: proposition [正置]
如 $R$ 为 $p$-完备，$a=(\ldots,a_1,a_0)\in R^\flat$，
对每个 $n$ 任取 $a_n\in R/p$ 的提升 $\widetilde{a_n}\in R$，
则极限
$$
a^\sharp=\lim_{n\to\infty}\widetilde{a_n}^{p^n}\in R
$$
存在，且不依赖 $\widetilde{a_n}$ 的选取。$a^\sharp$
称为 $a$ 的**正置**。它有另一种描述如下：考虑往第
$0$ 个坐标的自然投影 $R^\flat\to R/p$，用完美环
[[Witt 环]]的万有性质它有唯一提升
$\theta\colon W(R^\flat)\to R$，这样
$a^\sharp=\theta([a])$，其中 $[a]$ 表示
Teichmüller 代表元。
:::

也会谈论完美环本身的正置。

::: definition [正置]
完美环 $S$ 的**正置**指满足 $(S^\sharp)^\flat = S$
的[[完美胚环]] $S^\sharp$，它未必唯一。
可以证明，$S$ 的正置一一对应于完美[[棱镜]]
$W(S)$ 中由[[特异元]]生成的理想。
:::

### 完美胚空间

完美胚空间可以斜置为特征 $p$ 的完美胚空间。

::: definition
设 $(R,R^+)$ 是完美胚 [[Tate Huber 对]]，$\varpi\in R^+$
是其伪素元，满足 $\varpi^p\mid p$。
取 $\varpi^\flat\in R^{+\flat}$ 使其第 $0$ 个坐标是
$\varpi\bmod p$。令 $R^{\flat+}=R^{+\flat}$，
$R^\flat=R^{\flat+}[1/\varpi^\flat]$，
则 $(R^\flat,R^{\flat+})$
是特征 $p$ 完美胚 Tate Huber 对，且不依赖 $\varpi$、
$\varpi^\flat$ 的选取。称 $(R^\flat,R^{\flat+})$
为 $(R,R^+)$ 的**斜置**。
:::

可以证明（见[[斜置等价]]条目），
$\operatorname{Spa}(R,R^+)$ 和
$\operatorname{Spa}(R^\flat,R^{\flat+})$ 同胚，由
$x\mapsto(a\mapsto|a^\sharp(x)|)$ 给出。这样斜置就可以粘合。

::: definition
回忆[[完美胚空间]] $X$ 在局部上是完美胚 Tate Huber 对的[[进制谱]]。
于是其**斜置**，记作 $X^\flat$，
定义为其各个局部的斜置的进制谱的粘合。
:::

与环的情形相同，也可以定义正置的概念。

::: definition
特征 $p$ 完美胚空间 $S$ 的**正置**指满足
$(S^\sharp)^\flat = S$
的完美胚空间 $S^\sharp$，它未必唯一。
:::

### 进制空间

::: definition [进制空间]
记 $\mathsf{Perf}$ 为所有特征 $p$ [[完美胚空间]]构成的范畴，
进制空间 $X$ 的**斜置** $X^\Diamond$ 是以下函子：
\[
\begin{aligned}
  \mathsf{Perf} &\to \mathsf{Set} \\
  T \mapsto &\{(T^\sharp, T^\sharp \to X)\}.
\end{aligned}
\]
:::

如果 $X$ 是[[解析进制空间]]，
可以证明 $X^\Diamond$ 是[[钻石]]。
此时，这种斜置可以看作之前完美胚空间的斜置的[[投射平展]][[下降]]。

## 例子

- 特征 $p$ [[完美环]]的斜置显然是其自身。一般地，
  特征 $p$ 环的斜置是其极限完美化。

- 完美胚环
  $\mathbb{Z}_p^\text{cycl}=\left(\bigcup_{n=0}^\infty
    \mathbb{Z}_p[\zeta_{p^n}]\right)_p^\wedge$ 的斜置是
  $\mathbb{F}_p[[t^{p^{-\infty}}]]=
    \left(\bigcup_{n=0}^\infty
    \mathbb{F}_p[[t^{p^{-n}}]]\right)_t^\wedge$。
  这是 [[$(\varphi,\Gamma)$-模]]的主要原理。

## 性质

```terms
斜置:
  en: tilt
  fr: bascule :f
正置:
  en: untilt
  fr: débascule :f
```
