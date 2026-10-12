---
title: 二面体群
categories: [有限群论]
navboxes: [群论]
---

在[[群论]]中，**二面体群**是一类基本的[[有限群]]。
对自然数 $n$，二面体群 $\mathrm{D}_n$ 是[[正 $n$ 边形]]的所有对称变换构成的群，
即给定某个正 $n$ 边形，考虑所有能使该正 $n$ 边形与自身重合的[[旋转]]、[[反射]]的操作，
这些操作所构成的群。

而**无穷二面体群**则是上述定义的推广，它是一个无限群。

特别地，二面体群和无穷二面体群都是[[Coxeter 群]]，
它们的Coxeter 图一般被记作 $I_2(n),I_2(\infty)$，
即两个顶点间连一条标记为 $n$ 或 $\infty$ 的边：

\[
\begin{tikzcd}[arrows=-]
  I_2(n):=\quad \bullet \ar[r,"n"] & \bullet \\
  I_2(\infty):=\quad \bullet \ar[r,"\infty"] & \bullet
\end{tikzcd}
\]

在退化情形下，一般记$A_2=I_2(3), BC_2=I_2(4), G_2=I_2(6)$。

## 定义

::: definition [二面体群]
设 $n$ 为正整数。
则 $2n$ 阶**二面体群** $\mathrm{D}_n$
是由生成元 $r, s$ 和关系
\[
r^n = s^2 = 1, \quad
srs = r^{-1}
\]
定义的群。这里，$r$ 称为**旋转**，$s$ 称为**反射**。

当 $n \geq 3$ 时，
$\mathrm{D}_n$ 可视为[[正 $n$ 边形]]的所有对称变换构成的群，
即所有能使该正 $n$ 边形与自身重合的[[旋转]]、[[反射]]操作关于变换的[[复合]]构成的群。
:::

::: definition [无穷二面体群]
**无穷二面体群**$\mathrm{D}_\infty$是由生成元 $r,s$ 和关系
\[
s^2=1,\quad srs=r^{-1}
\]
定义的群，类似二面体群定义的那样，把 $r$ 称为**旋转**，$s$ 称为**反射**。
:::

## 例子

- \(\mathrm{D}_1=\mathrm{C}_2=\mathbb Z/2\mathbb Z\) 是二阶[[循环群]]，
  \(\mathrm{D}_2=\mathrm{C}_2\times\mathrm{C}_2\) 是[[Klein 群]]，即两个二阶[[循环群]]的[[直积]]，
  此二者为$\mathrm{D}_n$一族中所有的[[交换群]]。

- \(\mathrm{D}_3\) 是正三角形对应的二面体群，
  它包含 3 个旋转操作（旋转 \(0^{\circ}, 120^{\circ}, 240^{\circ}\)）和 3 个反射操作，共 6 个元素。
  特别地，$\mathrm{D}_3$ 作用在三个顶点上使它同构于三阶[[置换群]] $\mathfrak S_3$。

- \(\mathrm{D}_4\) 是正方形对应的二面体群。
  其中旋转操作有 \(r^0 = 1\)（旋转 \(0^{\circ}\)），\(r^1\)（旋转 \(90^{\circ}\)），
  \(r^2\)（旋转 \(180^{\circ}\)），\(r^3\)（旋转 \(270^{\circ}\)）；
  反射操作 \(s\) 有沿对角线和对边中点连线的 4 种
  （即$s,rs,r^2s,r^3s$四个元素），总共 8 个元素。
  它也是 $\mathfrak S_4$ 的 [[Sylow 子群|Sylow $2$-子群]]。

## 性质

### 基本性质

- \(|\mathrm{D}_{n}| = 2n\)，
  这是因为正 \(n\) 边形有 \(n\) 种不同角度的旋转（包括恒等旋转）以及 \(n\) 种不同的反射。
  通过在正 $n$ 边形顶点上作用，有自然的嵌入$\mathrm{D}_n\hookrightarrow\mathfrak S_n$。

- $\mathrm{D}_n$有一个指数 $2$ 的[[正规子群]] $\mathrm{C}_n=\langle r\rangle\subset\mathrm{D}_n$
  包含了正$n$边形的所有旋转，这是一个$n$阶的循环群，
  相当于正$n$边形的保[[定向]]的对称变换构成的子群。

- 当 \(n \geq 3\) 时，\(\mathrm{D}_{n}\) 是非交换群。
  例如在 \(\mathrm{D}_4\) 中，先旋转 \(90^{\circ}\) 再沿某条对角线反射，
  与先沿该对角线反射再旋转 \(90^{\circ}\)，得到的结果不同，即 \(rs \neq sr\)。

- 无穷二面体群 $\mathrm{D}_\infty\cong \mathrm{C}_2*\mathrm{C}_2$，
  这里 $C_2\cong\mathbb Z/2\mathbb Z$ 是二阶循环群，$*$ 表示群的[[自由积]]。即
  \[
  \mathrm{D}_\infty\cong\langle s,t:s^2=t^2=1\rangle,
  \]
  这里 $t=rs$，是与 $s$“相邻”的反射。不难检查此时 $\mathrm{D}_\infty$ 包含的全体元素形如：
  \[
  \mathrm{D}_\infty=\{1,s,t,st,ts,sts,tst,stst,tsts,\cdots\}.
  \]

- 所有有限二面体群 $\mathrm{D}_n$ 都是无穷二面体群 $\mathrm{D}_\infty$ 的商。
  如果两个正整数 $m\mid n$ 具有整除关系，
  则具有典范的满射 $\mathrm{D}_n\twoheadrightarrow\mathrm{D}_m$
  以及典范的嵌入 $\mathrm{D}_m \hookrightarrow \mathrm{D}_n$。

```terms
二面体群:
  en: dihedral group
```
