---
title: Vojta 字典
categories: [复分析, 解析数论]
---

在[[数论]]特别是[[Diophantus 逼近]]中，
Vojta 字典给出了[[Roth 定理]]和[[Nevanlinna 理论]]的精确的对应。
在 Osgood 观察到 Roth 定理的陈述非常类似于[[Nevanlinna 第二主定理]]后，
Vojta 于其博士论文中建立了完整的对应，联系了 Nevanlinna 理论与数论两个研究风格完全不同的领域。

## 单变量情形时的字典

| [[Nevanlinna 理论]] | [[Roth 定理]] |
| --- | --- |
| $f: \mathbf{C} \to \mathbf{C}$，非常值 | $\{b\} \subset k$，无限 |
| $r$ | $b$ |
| $\theta$ | $v \in S$ |
| $f(re^{i\theta})$ | $\Vert b\Vert_v, v \in S$ |
| $\text{ord}_z f$ | $\text{ord}_v f, v \notin S$ |
| $\log\frac{r}{\vert z\vert}$ | $\log N_v$ |
| 特征函数 $T(r) = \int_0^{2\pi}\log^+\vert f(re^{i\theta})\vert\frac{\text{d} \theta}{2\pi} + N(\infty,r)$ | 对数高度 $h(b) = \frac1{[k:\mathbf{Q}]}\sum_v \log^+\Vert b\Vert_v$ |
| 邻近函数 $m(a,r)=\int_{0}^{2 \pi} \log^+\left\vert\frac{1} {f ( r e^{i \theta} )-a}\right\vert\frac{\text{d} \theta} {2\pi} $ | 邻近函数 $m(a, b) = \frac1{[k:\mathbf{Q}]}\sum_{v \in S} \log^+\left\Vert\frac1{b-a}\right\Vert_v$ |
| 计数函数 $N(a,r)=\sum_{\vert w\vert<r}\log\frac{r}{\vert w\vert}$ | 计数函数 $N(a, b) = \frac1{[k:\mathbf{Q}]}\sum_{v \notin S} \log^+\left\Vert\frac1{b-a}\right\Vert_v$ |
| 第一主定理 $N(a,r) + m (a,r) = T (r) + O (1)$ | 高度的性质 $N(a,b) + m(a,b) = h(b) + O(1) $ |
| 第二主定理 $\sum_{i=1}^m m(a_{i},r)\le 2T(r)-N_{1}(r) + O(r\log T(r)) $ | Roth 猜测的改良 $\sum_{i=1}^m m(a_{i},b)\le 2h(b)+O(\log h(b)) $ |
| $\delta(a)=\liminf_{r\to\infty}\frac{m(a,r)}{T(r)} $ | $\delta(a)=\liminf_{b}\frac{m(a,b)}{h(b)} $ |
| $\delta$ 关系 $\sum_{a \in \mathbf{C}}\delta(a) \le 2$ | Roth 定理 $\sum_{a \in k}\delta(a) \le 2$ |
| Jensen 公式 $\log\vert c_\lambda\vert=\int_0^{2\pi}\log\vert f(re^{i\theta})\vert\frac{\text{d}\theta}{2\pi}+N(\infty,r)-N(0,r)$ | 算术 Jensen 公式 $\sum_v\log\Vert b\Vert_v = 0$ |
