---
title: 真等变谱
categories: [等变同伦论]
notices:
  - name: 问题
    items:
      - “$G$-Mackey 函子”的定义中，$G$-Mackey 函子似乎应是 $\mathsf{Span}(\mathsf{Fin}_G)$（而非 $\mathsf{Fin}_G$）到 $\mathcal{A}$ 的半加性函子。
      - “用 Mackey 函子”一节末尾所说谱值 $G$-Mackey 函子与真 $G$-谱等价的证明尚未给出。
      - “与带作用谱的关系”“关于群的函子性”“例子”各节需要扩充。
---

::: convention
在本文中，

- [[范畴]]都指 [[$(\infty,1)$-范畴]]。

:::

**真等变谱**是[[拓扑谱|谱]]的[[等变同伦论]]类比，
是[[等变稳定同伦论]]的基本研究对象。

## 定义

传统上，真等变谱是用正交谱的模型范畴定义的。这里我们直接采用
[[$(\infty,1)$-范畴]]论定义。

设 $G$ 是[[紧 Lie 群]]或[[投射有限群]]。
沿用[[等变生象]]条目中的记号，以 $\mathsf{Ani}_G$ 记
[[$G$-生象]]的范畴，并考虑带基点范畴 $(\mathsf{Ani}_G)_*$，
按[[缩积]]视为[[对称幺半范畴]]。对 $G$ 的每个有限维实表示 $V$，
回忆**表示球**指带基点 $G$-生象 $S^V$，它把
$A\in\mathsf{Orb}_G$ 打到实线性空间
$\operatorname{Map}_G(A,V)$ 的一点紧化，视为带基点生象。

::: definition [真 $G$-谱]
**真 $G$-谱的范畴** $\mathsf{Sp}_G$
是[[可表现范畴|可表现]]对称幺半范畴 $(\mathsf{Ani}_G)_*$
逆掉表示球所得范畴。具体地说，
$(\mathsf{Ani}_G)_*\to\mathsf{Sp}_G$
是从 $(\mathsf{Ani}_G)_*$ 出发、保余极限、
把所有表示球打到[[可逆对象]]的对称幺半函子中初始者。
$\mathsf{Sp}_G$ 的对象称为**真 $G$-谱**。
:::

::: remark
用抽象废话不难得到 $\mathsf{Sp}_G$ 存在，
为[[紧生成范畴|紧生成]]对称幺半范畴，有紧幺元，张量积保持紧对象。
这是因为 $(\mathsf{Ani}_G)_*$ 有这些性质，且表示球在其中紧。
:::

::: remark
一维平凡表示的表示球即 $S^1$。故 $S^1$ 在
$\mathsf{Sp}_G$ 中可逆，即函子 $\Sigma(-)=S^1\otimes-$
是等价，故 $\mathsf{Sp}_G$ 是[[稳定范畴]]。
:::

### 用 Mackey 函子

对[[投射有限群]] $G$，真 $G$-谱也可使用 [[Mackey 函子]]定义。

::: definition [$\mathsf{Span}$ 构造]
设范畴 $\mathcal{C}$ 有任意[[纤维积]]。
$\mathsf{Span}(\mathcal{C})$ 指对象和
$\mathcal{C}$ 一样，但 $X,Y\in\mathcal{C}$
间的映射为形如 $X\gets S\to Y$ 的图表，复合规则为
$$
(Y\gets T\to Z)\circ(X\gets S\to Y)=
(X\gets S\times_YT\to Z)
$$
的范畴。更严格地说，$\mathsf{Span}(\mathcal{C})$
作为[[完备 Segal 空间|完备 Segal 生象]]定义为
$$
[n]\mapsto\operatorname{Fun}_\mathrm{cart}
([n]^2_+,\mathcal{C}),
$$
其中 $[n]^2_+$ 为 $[n]^\mathrm{op}\times[n]$
的满子范畴，由顶点集 $\{(i,j)\mid i\ge j\}$ 生成，
$\operatorname{Fun}_\mathrm{cart}$
表示保持纤维积的函子组成的生象。
:::

::: remark
如 $\mathcal{C}$ 是 $1$-范畴，则
$\mathsf{Span}(\mathcal{C})$ 仅仅是 $(2,1)$-范畴，
也可手动定义。
:::

::: remark
如 $\mathcal{C}$ 还有任意有限余积，则不难发现
$\mathsf{Span}(\mathcal{C})$ 为[[半加性范畴]]，
直和对应 $\mathcal{C}$ 中余积，映射加法也是余积。
:::

以 $\mathsf{Fin}_G$ 表示带 $G$ 作用的有限集构成的范畴。

::: definition [$G$-Mackey 函子]
设 $\mathcal{A}$ 为[[半加性范畴]]。**取值在
$\mathcal{A}$ 的 $G$-Mackey 函子**指 $\mathsf{Fin}_G$
到 $\mathcal{A}$ 的半加性函子，它们构成的范畴记作
$\mathsf{Mack}_G(\mathcal{A})$。
:::

我们将在后面的小节证明谱值 $G$-Mackey 函子与真 $G$-谱等价，
即 $\mathsf{Mack}_G(\mathsf{Sp})=\mathsf{Sp}_G$。

## 运算与性质

### 与带作用谱的关系

### 关于群的函子性

## 例子

```terms
真等变谱:
  en: genuine equivariant spectrum
真 $G$-谱:
  en: genuine $G$-spectrum
表示球:
  en: representation sphere
```
