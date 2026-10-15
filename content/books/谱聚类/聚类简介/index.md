---
title: 聚类简介
---

首先简要介绍无监督学习中的聚类问题。
这一部分主要参考：

- The Elements of Statistical Learning [@hastie-tibshirani-friedman09]，Section 14.3

- 邓婉璐老师《多元统计分析》课程

**聚类**，也称数据分组、数据划分，作为**探索性数据分析**【Exploratory Data Analysis，
EDA】的方法之一，在统计学、计算科学、生物学、社会学、心理学等学科具有重要的应用。

简单建模：数据点 $x_1,\cdots,x_N$ 之间存在某种**相似关系**【similarity】或**距离**【distance】，
我们想要对它们做一个划分，使得类内相似度高（距离小），类间相似度低（距离大）。

最简单的聚类方法有**层次聚类法**【Hierarchical Approach】和**分割聚类法**【Partitioning Approach】，
后者以 K-means 方法为代表。

## 层次聚类法

层次聚类法有两种方式：**集聚**【Agglomerative】和**分散**【Divisive】。以前者为例：

1. 初始状态：每个数据点自成一类；

2. 每次将相似度最高（距离最小）的两类聚为一类；

3. 形成一个树状图。

其优点是操作非常直观，但也有如下局限性：

- 相似度（距离）有多种选取：Single Linkage，Complete Linkage，Group Average，
  Distance between Centroids，……

- 计算复杂度高

- 集聚过程不可逆

## K-means 方法

考虑优化问题
\[
\begin{array}{rl}
\min & \sum_{i=1}^N \sum_{k=1}^K u_{ik}d^2(x_i,y_k) \\ \text{s.t.} & \sum_{k=1}^K u_{ik} = 1,\quad u_{ik}\in\{0,1\}, \quad i=1,\cdots,N
\end{array}
\]
这个约束指的是：对每个 $i$，只有一个 $u_{ik} = 1$，即 $x_i$ 属于第 $k$ 类。
$y_k$ 表示第 $k$ 类的均值（重心）
$$
y_k = \frac{\sum_{i=1}^N u_{ik}x_i}{\sum_{i=1}^N u_{ik}}.
$$
对于每个 $i$，当所有 $y_k$ 给定时，易见 $u_{ik} = 1$ 当且仅当
$$
k = \arg\min_{1\le l\le K} d^2(x_i,y_l).
$$

由此可见这是一个**交替更新**的过程【Alternating optimization procedure】：

1. 给定类别数 $K$，以及初始分类（或任取 $K$ 个数据点）；

2. 在上一分类的基础上，如果有某个数据点离某个类的中心（均值）更近（与目前所在类的中心相比），
   则将该点归入该“最近”的类，并更新所有类的中心；

3. 重复执行上一步的操作，直到没有可以调整的点为止，算法停止。

优点：计算量为 $O(KN^2)$，较为高效（一般来说 $K<<N$）

局限性：

- 类别数 $K$ 的选择有所考究

- 对初始点、离群点比较敏感

- 当不同类呈现出不同尺寸、不同密度、非凸等形状时，聚类效果不佳

- 只能收敛到局部最优解

- 对于某些特定的数据类型，我们并不能直接取均值（例如：花的颜色；分词算法）

## 参考文献*

```bibliography
hastie-tibshirani-friedman09:
  type: book
  author: [Trevor Hastie, Robert Tibshirani, Jerome Friedman]
  title: 'The Elements of Statistical Learning: Data Mining, Inference, and Prediction'
  edition: 2
  series: Springer Series in Statistics
  publisher: Springer
  year: 2009
```
