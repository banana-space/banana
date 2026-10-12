---
title: 类域论
categories: [代数数论]
notices:
  - name: 问题
    items:
      - “历史”“应用”各节需要扩充。
---

**类域论**是[[代数数论]]中的一个论题。
在现代意义下，它的研究对象为[[局部域]]或[[整体域]]的[[绝对 Galois 群]]的 [[Abel 化]]。

## 历史

## 主定理

### 局部类域论

<see>[[局部类域论]]</see>

::: theorem [互反映射]
给定[[局部域]] $K$，对其所有有限 [[Galois 扩张]] $L$，存在相容的同构，称为
**互反映射**：
\[
K^\times / N_{L/K} L^\times \to \operatorname{Gal}(L/K)^\text{ab}.
\]
其中 $N$ 为[[范数（域扩张）|范数]]映射。
相容性指对域扩张 $L'\supset L\supset K$，如下的图表交换：
\[
\begin{tikzcd}
   K^\times / N_{L'/K} L'^\times \ar[r] \ar[d] & \operatorname{Gal}(L'/K)^\text{ab}\ar[d] \\
  K^\times / N_{L/K} L^\times \ar[r] & \operatorname{Gal}(L/K)^\text{ab}.
\end{tikzcd}
\]
其中两个横箭头为互反映射，竖箭头为投影。
:::

::: theorem [存在性定理]
$K^\times$中形如 $N_{L/K} L^\times$ 的子群正是 $K^\times$ 的有限指数开子群。
:::

::: remark
若$K$是特征为0的局部域，则$K^{\times n}$是开集，因此有限指数子群为开子群。对
正特征的局部域则并非如此。有限指数开子群在$1$处适合邻域基的条件，由此得到的拓扑
称为**范数拓扑**，其严格粗糙于$K^\times$在赋值下的拓扑。
:::

以上二定理立即推出下面的定理，它给出了 [[Galois 群]]的 [[Abel 化]]的信息：

::: theorem
给定局部域 $K$，存在同构（也称为**互反映射**）：
\[
\widehat{K^\times} \to \operatorname{Gal}(\bar{K}/K)^\text{ab}，
\]
前者表示 $K^\times$ 在范数拓扑下的完备化。
:::

### 整体类域论

<see>[[整体类域论]]</see>

::: theorem [互反映射]
给定[[整体域]] $K$，对其所有有限 [[Galois 扩张]] $L$，存在相容的同构，称为
**互反映射**：
\[
C_K / N_{L/K} C_L \to \operatorname{Gal}(L/K)^\text{ab}.
\]
其中 $N$ 为[[范数（域扩张）|范数]]映射，$C$ 代表[[加元环|理元类群]]。
相容性指对域扩张 $L'\supset L \supset K$，如下的图表交换：
\[
\begin{tikzcd}
  C_K / N_{L'/K} C_{L'} \ar[r] \ar[d] & \operatorname{Gal}(L'/K)^\text{ab} \ar[d] \\
  C_K / N_{L/K} C_L \ar[r] & \operatorname{Gal}(L/K)^\text{ab}.
\end{tikzcd}
\]
其中两个横箭头为互反映射，竖箭头为投影。
:::

::: theorem [存在性定理]
$C_K$中形如$N_{L/K} C_L$ 的子群正是 $C_K$ 的有限指数开子群。
:::

::: remark
即使对数域$K$，$C_K$也存在有限指数的子群不是开子群。
:::

以上二定理立即推出下面的定理，它给出
[[Galois 群]]的 [[Abel 化]]的信息：

::: theorem
给定整体域 $K$，存在同构（也称为**互反映射**）：
\[
\widehat{C_K} \to \operatorname{Gal}(\bar{K}/K)^\text{ab} ，
\]
前者表示 $C_K$ 在范数拓扑下的完备化。
:::

## 应用

- [[类群]]
- [[Kronecker–Weber 定理]]
- [[Kronecker 青春之梦]]

```terms
类域论:
  en: class field theory
  de: Klassenkörpertheorie
  fr: théorie des corps de classes
```
