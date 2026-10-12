---
title: 完美复形
categories: [同调代数, 层论]
notices:
  - name: 问题
    items:
      - “推广”一节需要扩充。
---

**完美复形**是由[[有限生成模|有限生成]][[投射模]]组成的有界[[链复形]]，
是链复形[[无穷范畴]]中的[[紧对象]]。

## 定义

::: definition
$R$ 是[[环]]，$\mathsf{D}(R)$ 是其左模[[导出范畴]]。称
$R$-左模[[链复形]] $K_\bullet$ 为**完美复形**，
指的是各 $K_n$ 都是[[有限生成模|有限生成]][[投射模|投射]] $R$-模，
且存在 $N\in\mathbb{N}$ 使得当 $|n|>N$ 时 $K_n=0$。
称 $K\in\mathsf{D}(R)$ **完美**，
指的是它可由完美复形代表。$\mathsf{D}(R)$
中所有完美对象组成的[[满子范畴]]记作
$\mathsf{D}^\text{perf}(R)$。
:::

::: remark
常把[[拟同构]]于完美复形者都称为完美复形。
:::

::: definition
$X$ 是[[概形]]（[[代数空间]]、[[代数叠]]），$\mathsf{D}(X)$
是其[[拟凝聚导出范畴]]。称 $K\in\mathsf{D}(X)$
**完美**，或称其为**完美复形**，
指的是对任一[[交换环]] $R$ 及任一态射 $f\colon
  \operatorname{Spec}R\to X$，都有 $f^*K\in\mathsf{D}(R)$
完美。$\mathsf{D}(X)$ 中所有完美对象组成的[[满子范畴]]记作
$\mathsf{D}^\text{perf}(X)$。
:::

::: remark
下面将会看到，这等价于存在 Zariski（平展、光滑）覆盖
$\{f_i\colon\operatorname{Spec}R_i\to X\}_{i\in I}$，
使得各 $f_i^*K\in\mathsf{D}(R_i)$ 完美。
:::

## 性质

::: proposition
完美复形关于有限直和、取锥、取直和项封闭。
:::

::: proposition
对环同态 $R\to S$ 以及 $K\in\mathsf{D}(R)$ 完美，
$S\otimes_RK\in\mathsf{D}(S)$ 也完美。
这里张量积表示导出张量积。
:::

::: proposition [平坦下降] {@平坦下降}
对[[交换环]]的[[忠实平坦同态]] $R\to S$，$K\in\mathsf{D}(R)$
完美当且仅当 $S\otimes_RK\in\mathsf{D}(S)$ 完美。
:::

::: corollary
对[[概形]]（[[代数空间]]、[[代数叠]]）$X$ 及其 fpqc 覆盖
$\{f_i\colon U_i\to X\}_{i\in I}$，$K\in\mathsf{D}(X)$
完美当且仅当各 $f_i^*K\in\mathsf{D}(U_i)$ 都完美。
:::

::: theorem [幂零下降] {@幂零下降}
设 $R$ 是[[交换环]]，$I$ 是其[[幂零理想]]，
$K\in\mathsf{D}(R)$。如 $R/I\otimes_RK\in\mathsf{D}(R/I)$
完美，则 $K$ 为完美。
:::

::: theorem [粘连] {@粘连}
设 $R$ 是交换环，$I,J$ 是其理想，$I\cap J=0$，
$K\in\mathsf{D}(R)$。如 $R/I\otimes_RK\in\mathsf{D}(R/I)$
和 $R/J\otimes_RK\in\mathsf{D}(R/J)$ 都完美，则 $K$
为完美。
:::

下面是完美复形的范畴论刻画。

::: theorem
环上完美复形正是其[[导出范畴]]中[[紧对象]]。
:::

::: theorem
交换环（概形、代数空间）上完美复形正是其（拟凝聚）
导出范畴中[[可对偶对象]]。
:::

以下刻画的证明，参见条目[[伪凝聚复形]]。

::: theorem
完美复形正是 [[$\operatorname{Tor}$-幅度]]有限的[[伪凝聚复形]]。
:::

完美复形一个重要的性质是它常常能生成所有的复形。注意这对环是平凡的。

::: theorem
设 $X$ 是[[拟紧拟分离概形]]（代数空间），$Z$ 是其[[闭子概形]]
（闭子空间），使得 $X\setminus Z$ [[拟紧概形|拟紧]]。以
$\mathsf{D}_Z(X)$ 记 $\mathsf{D}(X)$ 中支在 $Z$ 上者，
$\mathsf{D}_Z^\text{perf}(X)$ 记其中完美者。则存在
$K\in\mathsf{D}_Z^\text{perf}(X)$ 生成 $\mathsf{D}_Z(X)$，
换言之如 $C\in\mathsf{D}_Z(X)$ 满足
$R{\operatorname{Hom}}_X(K,C)=0$，就有 $C=0$。
:::

## 例子

- 有限生成投射模是完美复形。

- $(R,\mathfrak{m},k)$ 是 [[Noether 环|Noether]]
  [[局部环]]。则 $k\in\mathsf{D}^\text{perf}(R)$
  当且仅当 $R$ 是[[正则环]]。

- @幂零下降 中幂零不能换成局部幂零。
  考虑[[赋值环]] $(R,\mathfrak{m},k)$，值群包含于 $\mathbb{R}$
  但不离散，取元素 $\pi\in\mathfrak{m}$。则
  $\mathfrak{m}/\pi$ 在 $R/\pi$ 局部幂零，
  $k$ 是 $(R/\pi)/(\mathfrak{m}/\pi)=k$
  上完美复形，但不是 $R/\pi$ 上完美复形。

## 推广

完美复形可推广到 [[$\mathbb{E}_1$-环]]上。

::: definition
$R$ 是 $\mathbb{E}_1$-环，$\mathsf{D}(R)$ 是其导出范畴。
称 $K\in\mathsf{D}(R)$ **完美**，指它是 $R$
的若干平移的有限余极限的收缩。
:::

::: theorem
$R$ 上完美复形正是 $\mathsf{D}(R)$ 中的[[紧对象]]。
当 $R$ 是 [[$\mathbb{E}_2$-环]]时，它正是
$\mathsf{D}(R)$ 中的[[可对偶对象]]。
:::

::: proposition
对 $\mathbb{E}_1$-环同态 $R\to S$ 以及
$K\in\mathsf{D}(R)$ 完美，
$S\otimes_RK\in\mathsf{D}(S)$ 也完美。
:::

以下是 @平坦下降、@幂零下降、@粘连 在 $\mathbb{E}_\infty$-环情形的类比，
虽然并不能完全覆盖它们。

::: theorem [下降]
对 $\mathbb{E}_\infty$-环的[[可下降映射]] $R\to S$，
$K\in\mathsf{D}(R)$ 完美当且仅当 $S\otimes_RK\in
  \mathsf{D}(S)$ 完美。
:::

（可以写谱概形、谱叠情形。）

```terms
完美复形:
  en: perfect complex
  de: vollkommener Komplex
  fr: complexe parfait
  grc: τέλειον σύμπλοκον
  la: complex perfectus
```
