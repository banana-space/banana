---
title: 辛向量空间
categories: [线性代数]
notices:
  - name: 问题
    items:
      - “性质”一节需要扩充。
---

**辛向量空间**是带有[[非退化双线性型|非退化]]的[[交错双线性型]]的[[向量空间]]。

辛向量空间是[[辛流形]]的局部结构，
即后者的[[切空间]]具有辛向量空间的结构。

## 定义

::: definition [辛向量空间]
[[域]] $\mathbb{k}$ 上的**辛向量空间**是二元组
$(V, \omega)$，其中

- $V$ 是 $\mathbb{k}$-[[向量空间]]。

- $\omega$ 是 $V$ 上[[非退化双线性型|非退化]]的[[交错双线性型]]，称为**辛形式**。
  也就是说，$\omega \colon V \times V \to \mathbb{k}$ 满足以下条件：

  - **[[双线性型|双线性]]**：
    $\omega$ 关于两个分量都[[线性映射|线性]]。

  - **[[交错双线性型|交错]]**：
    对任何 $v \in V$，有 $\omega (v, v) = 0$。

  - **[[非退化双线性型|非退化]]**：
    如果 $v \in V$ 满足对任何 $v' \in V$ 都有 $\omega (v, v') = 0$，
    那么 $v = 0$。

:::

## 性质

```terms
辛向量空间:
  en: symplectic vector space
  fr: espace vectoriel symplectique :m
  de: symplektischer Vektorraum :m
辛形式:
  en: symplectic form
  fr: forme symplectique :f
  de: symplektische Form :f
```
