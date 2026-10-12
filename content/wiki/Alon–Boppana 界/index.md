---
title: Alon–Boppana 界
categories: [图论]
---

**Alon–Boppana 界**是[[图]]的
[[Laplace 算子 (图论)|Laplace 算子]]次小特征值的一个上界。

## 定理与证明

::: theorem [Alon] {@alon}
设无向图 $G=(V,E)$ 各顶点的[[度 (图论)|度]]至多为 $d$，
且有两条边相距至少 $2k$。设 $\lambda$ 为 $G$ 的
Laplace 算子
$$
(\Delta f)(v)=d(v)f(v)-\sum_{uv=e\in E}f(u)
$$
在子空间 $\left\{f\colon\sum_{v\in V}f(v)=0\right\}$
上的最小特征值。则
$$
\lambda\le d-2\sqrt{d-1}+\frac{2\sqrt{d-1}-1}{k}.
$$
:::

::: proof
由于 $\Delta$ 半正定，只需举出函数 $f$ 满足
$$
\sum_{v\in V}f(v)=0,\,
\frac{\left<\Delta f,f\right>}{\left<f,f\right>}\le
d-2\sqrt{d-1}+\frac{2\sqrt{d-1}-1}{k}.
$$
设定理陈述中两条边的顶点集分别为 $U_0$、$V_0$，并以 $U_i$
记离 $U_0$ 距离为 $i$ 的顶点的集合，以 $V_i$ 记离 $V_0$
距离为 $i$ 的顶点的集合，则由条件，点集
$$
\bigcup_{i=0}^{k-1}U_i,\,\bigcup_{i=0}^{k-1}V_i
$$
无交，且二者之间没有连边。另外对 $i>0$ 总有
$$
|U_i|\le(d-1)|U_{i-1}|,\,|V_i|\le(d-1)|V_{i-1}|.
$$
令
$$
f_U=\sum_{i=0}^{k-1}\frac{\mathbb{1}_{U_i}}{(d-1)^{i/2}},\,
f_V=\sum_{i=0}^{k-1}\frac{\mathbb{1}_{V_i}}{(d-1)^{i/2}},
$$
其中 $\mathbb1$ 表示[[指示函数]]。取 $f=af_U-bf_V$
为二者的适当线性组合使得 $\sum_{v\in V}f(v)=0$，
其中 $a,b\in\mathbb{R}_+$。记
$$
A_1=a^2\sum_{i=0}^{k-1}\frac{|U_i|}{(d-1)^i},
$$
$B_1$ 为同样的式子将 $a,U$ 换成 $b,V$。则
$\left<f,f\right>=A_1+B_1$。记
$$
A_2=a^2\left(\sum_{i=0}^{k-2}|U_i|(d-1)
\left(\frac{1}{(d-1)^{i/2}}-\frac{1}{(d-1)^{(i+1)/2}}
\right)^2+|U_{k-1}|(d-1)\left(\frac{1}{(d-1)^{(k-1)/2}}
\right)^2\right),
$$
$B_2$ 类似。则由条件不难发现
$$
\left<\Delta f,f\right>=
\sum_{uv=e\in E}(f(u)-f(v))^2\le A_2+B_2,
$$
故只需证
$$
\frac{A_2+B_2}{A_1+B_1}\le
d-2\sqrt{d-1}+\frac{2\sqrt{d-1}-1}{k},
$$
为此只需证 $A_2/A_1$ 和 $B_2/B_1$ 皆不大于上式右边。而
$$
\frac{A_2}{a^2}=
\sum_{i=0}^{k-1}\frac{|U_i|}{(d-1)^i}(d-2\sqrt{d-1})
+\frac{|U_{k-1}|}{(d-1)^{k-1}}(2\sqrt{d-1}-1)\le
\frac{A_1}{a^2}
\left(d-2\sqrt{d-1}+\frac{2\sqrt{d-1}-1}{k}\right),
$$
因为数列 $|U_i|(d-1)^{-i}$ 关于 $i$ 单调不增；$B_2/B_1$
类似。定理得证。
:::

::: corollary
设 $\{G_n=(V_n,E_n)\}_{n\in\mathbb{N}}$ 是一列有限图，满足各顶点的度至多为 $d$，
且 $\lim_{n\to\infty}|V_n|=+\infty$。以 $\lambda(G_n)$
记 $G_n$ 的 Laplace 算子的次小特征值。则
$$
\limsup_{n\to\infty}\lambda(G_n)\le d-2\sqrt{d-1}.
$$
:::

::: proof
由于 $G_n$ 各顶点的度至多为 $d$，点数又趋于无穷，
其直径必然趋于无穷。故 @alon 式子中第三项趋于 $0$。
:::

::: remark
设 $G$ 是 $d$-[[正则图]]，以 $A$ 记 $G$ 的[[邻接矩阵]]，
则 $\Delta=d-A$，@alon 相当于说 $A$
的次大特征值不小于 $2\sqrt{d-1}-\frac{2\sqrt{d-1}-1}{k}$。
:::

::: remark
$2\sqrt{d-1}$ 这个数来自 $d$-[[正则树]]的谱。
:::

```terms
Alon–Boppana 界:
  en: Alon–Boppana bound
```
