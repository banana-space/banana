---
title: 拓扑子空间
aliases: [子空间拓扑, 开子空间, 闭子空间]
categories: [一般拓扑]
notices:
  - name: 问题
    items:
      - “性质”一节需要扩充。
navboxes: [一般拓扑]
---

[[拓扑空间]]的**拓扑子空间**（简称**子空间**）是指其[[子集]]，
并带上原来拓扑空间上的拓扑所诱导的拓扑，以成为拓扑空间。
这一拓扑称为**子空间拓扑**。

## 定义

::: definition [拓扑子空间] {@拓扑子空间}
设 $X$ 是[[拓扑空间]]，$Y \subset X$ 是其[[子集]]。
定义 $Y$ 上的**子空间拓扑**如下：

- 集合 $U \subset Y$ 是 $Y$ 的[[开集]]，
  当且仅当存在 $X$ 的开集 $U' \subset X$，
  使得 $U = U' \cap Y$。

集合 $Y$ 带上子空间拓扑，成为拓扑空间，
称为 $X$ 的**拓扑子空间**，或简称**子空间**。

另外，还使用以下术语：

- 若 $Y$ 为 $X$ 中的[[开集]]，则称拓扑空间 $Y$ 为 $X$ 的**开子空间**。

- 若 $Y$ 为 $X$ 中的[[闭集]]，则称拓扑空间 $Y$ 为 $X$ 的**闭子空间**。

:::

::: remark
在 @拓扑子空间 的记号下，
$Y$ 上的子空间拓扑是使得[[含入映射]] $Y \hookrightarrow X$
连续的最小的拓扑，即开集最少的拓扑，
称为[[弱拓扑]]。
:::

## 性质

```terms
拓扑子空间:
  en: topological subspace
  fr: sous-espace topologique
  de: topologischer Teilraum
  grc: τοπολογικὸς ὑποχῶρος
  la: subspatium topologicum
子空间拓扑:
  en: subspace topology
  de: Teilraumtopologie
  fr: topologie induite
  grc: τοπολογία ὑποχώρου
  la: topologia subspatii
```
