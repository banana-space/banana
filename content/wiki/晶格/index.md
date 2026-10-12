---
title: 晶格
categories: [晶格论]
notices:
  - name: 消歧义
    see:
      - topic: 其它含义
        page: 格（多义词）
  - name: 问题
    items:
      - “性质”一节中命题的证明不完整：没有说明格的商 $V/\Gamma$ 紧，也没有说明 $V/\Gamma$ 紧时 $m = n$。
      - “分类”一节需要扩充。
navboxes: [Euclid 几何]
---

**晶格**，简称**格**，
是 $\mathbb{R}^n$ 上同构于 $\mathbb{Z}^n$ 且离散的一类子群，
在[[数论]]、[[群论]]与 [[Lie 理论]]中
有重要应用。由于一些格问题的计算复杂性，其与密码学也密切相关。
在材料科学与固态物理中，它是晶体结构的框架。

## 定义

::: definition [晶格]
对 $n$ 维实向量空间 $V$，
$V$ 中的**晶格** $\Gamma$ 是由
$n$ 个
线性无关的向量 $v_1,\dots,v_n$ 生成的子群
\[
\Gamma = \mathbb{Z}v_1 +\cdots + \mathbb{Z}v_n.
\]
其中 $v_1,\dots,v_n$ 称为格 $\Gamma$ 的基，集合
\[
\Phi =
\{ x_1v_1 +\cdots + x_nv_n \mid x_i \in \mathbb{R},0 \le x_i < 1 \}
\]
称为 $\Gamma$ 的基本域。
:::

直观上，晶格就是用规则的瓷砖（基本域）平铺整个空间。
如赋予 $V$ [[内积空间|内积]]结构 $\langle-,-\rangle$，则可以定义晶格的余体积，即基本域的体积。

::: definition [余体积]
晶格 $\Gamma$ 的**余体积** $d(\Gamma)$ 是
$\Phi$ 的测度，计算可得
\[
d(\Gamma) = {\left| \det(\langle v_i,v_j\rangle) \right|}^{1/2}.
\]
:::

[[Minkowski 定理]]将 $d(\Gamma)$ 与中心对称凸集 $S$ 的体积，同
$S$ 中所含格点的个数联系起来。

## 性质

不同的向量组有可能给出相同的格，
两组向量 $v_1,\dots,v_n$ 与 $v_1',\dots,v_n'$
张成相同的格，当且仅当它们的转移矩阵
$T \in \mathrm{GL}_n(\mathbb{Z})$。
如下性质给出了格的不依赖于基的刻画。

::: proposition
$V$ 的子群 $\Gamma$ 是格，
当且仅当 $\Gamma$ 离散且 $V/\Gamma$ 紧。
:::

::: proof
若 $\Gamma$ 是格，将基本区域中心平移到原点，其内部即为原点与其余点
不交的开邻域。

若 $\Gamma$ 为离散子群，则由于 Hausdorff 拓扑群的局部紧子群是闭子群，
$\Gamma$ 为闭集。设 $V_0$ 为 $\Gamma$ 张成的子空间，维数为 $m$。取
$u_1,\dots,u_m \in \Gamma$ 为 $V_0$ 的基，考虑完备格
\[
\Gamma_0 = \mathbb{Z}u_1 + \cdots + \mathbb{Z}u_m \subseteq \Gamma,
\]
则指数 $(\Gamma:\Gamma_0)$ 有限，因为
$\Gamma/\Gamma_0 \subseteq V_0 /\Gamma_0$ 是环面上的离散闭子集。
根据[[有限生成 Abel 群分类定理]]，$\Gamma$ 是秩为 $m$ 的自由 Abel 群，
其$\mathbb{Z}$-基也是 $\mathbb{R}$ 线性无关的，因为它们张成了 $V_0$。
:::

## 分类

如赋予向量空间 $V$ 内积结构，可以考虑晶格 $\Gamma$ 的[[等距同构]]群，
并按照此对称性分类。

```terms
晶格:
  en: lattice
  de: Gitter :n
  fr: réseau :m
```
