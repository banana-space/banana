---
title: 区间（同伦类型论）
categories: [同伦类型论]
notices:
  - name: 消歧义
    see:
      - page: 区间类型
navboxes: [类型论]
---

在[[同伦类型论]]中，**区间**是一个[[高阶归纳类型]]，对应作为[[拓扑空间]]的[[标准区间]] $I$。

## 类型规则

区间类型记作 $I$，区别于[[立方类型论]]中的区间类型 $\mathbb I$。
$\mathbb I$ 之于 $I$，
正如[[单形]]的区间$\Delta^1$之于[[Kan 复形]]$\bullet\xrightarrow\cong\bullet$。

### 构造规则

注意区分此处的 $0$ 和同名的[[自然数类型]]的构造规则。

\[
\cfrac{Γ\vdash}{Γ\vdash 0:I}
\quad
\cfrac{Γ\vdash}{Γ\vdash 1:I}
\quad
\cfrac{Γ\vdash}{Γ\vdash\operatorname{seg}:\operatorname{Id}_{I}(0, 1)}
\]

这条规则可以直观理解为：
区间中含有两个点（称为基点），且这两个点相连。

### 消去规则

简单类型的消去规则：

\[
\cfrac{
 Γ\vdash b_0:X \quad
 Γ\vdash b_1:X \quad
 Γ\vdash p:\operatorname{Id}_X(b_0, b_1)}
{Γ\vdash\operatorname{rec}_{I}(b_0,b_1,p):I\to X}
\]

### 计算规则

简单类型的计算规则：

\[
{\operatorname{rec}_{I}(b_0,b_1, p)(0)=b_0:X}
\\
{\operatorname{rec}_{I}(b_0,b_1, p)(1)=b_1:X}
\\
{\operatorname{ap}_{\operatorname{rec}_{I}(b_0, b_1, p)}(\mathrm{seg})=
  p:\operatorname{Id}_I(b_0, b_1)}
\]

第二条规则可以看作是 $\operatorname{rec}_{I}(b_0,b_1, p)(\mathrm{seg})=p$ 的严谨写法。

## 性质

::: lemma
泛等公理蕴涵区间类型和[[单位类型]]命题等价，
换言之两类型同构。
:::

这也意味着区间类型在同伦意义上是[[可缩空间]]。

## 应用

::: lemma
区间类型的规则蕴涵[[函数类型]]的外延性。
:::

这是除了[[泛等公理]]之外在同伦类型论中的另一种证明该性质的方法，
证明方法和[[立方类型论]]中的相同。
