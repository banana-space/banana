---
title: 自由概率论
categories: [概率论]
---

<problems>
- “自由独立性”“非交换随机变量的分布”“自由中心极限定律”各节需要扩充。
</problems>

**自由概率论**是研究非交换随机变量的理论，
其中“自由性”是经典概率论中独立性的类比。
该理论于1986年左右由Dan Voiculescu建立。

## 定义

::: definition
$(\mathcal{A},\varphi)$ 称为非交换概率空间，
其中 $\mathcal{A}$ 是 $\mathbb{C}$ 上的含幺代数，
$\varphi\colon \mathcal{A}\to \mathbb{C}$
是线性映射，满足 $\varphi(1_A)=1$。
:::

习惯上，我们称 $\mathcal{A}$ 中的元素为非交换随机变量。
$\varphi$ 称为 $\mathcal{A}$ 上的一个态，
是概率论中期望的类比。
不同于经典的概率论，
我们不关心随机变量给出的概率分布，
而关心随机变量的各阶矩的值。

::: example
设 $(\Omega,\mathcal{M},\mathbb{P})$
是一个概率空间，则 $N$ 阶随机矩阵的集合
$$
\mathcal{A}=\{A|A\colon\Omega\to M_N(\mathbb{C})
\ \text{可测}\}
$$
配上态 $\varphi=\mathbb{E}\circ\operatorname{tr}$
即是一个非交换概率空间。
其中 $\operatorname{tr}=\operatorname{Tr}/N$
是归一化的迹。
:::

## 自由独立性

## 非交换随机变量的分布

## 自由中心极限定律
