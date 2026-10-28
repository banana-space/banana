---
title: 椭圆曲面
categories: [代数曲面论]
navboxes: [代数几何]
---

<problems>
- “Tate 算法”“曲面分类”各节需要扩充。
- “分类”一节中，奇异纤维的相交矩阵是半负定的，似乎应为仿射 Cartan 矩阵的负倍数，而不是 Cartan 矩阵的倍数。
- “$X_{IV^*}$ 的具体计算”中，检查 $C_0$、$C_1$ 相交时 $C_1$ 在该仿射片中似乎应为 $V_1=W_1=0$；检查 $C_{2A}$、$C_{3A}$ 相交时方程似乎应为 $V_3^2=W_3U_3^2+U_3W_3+1$，$C_3$ 似乎应为 $W_3=0$。
- “$X_{II^*}$ 的具体计算”第 5 步的方程似乎应为 $Y_5^2=(u_5T_5-1)(u_5+(u_5T_5-1)T_5)$。
- “$X_{II^*}$ 的具体计算”中，$C_2$ 似乎没有无穷远处的奇点；第 7、8 步消解的似乎分别是 $C_4$ 与 $C_3$ 的无穷远奇点。
</problems>

在[[代数几何]]与[[复几何]]中，
**椭圆曲面** 指具有椭圆[[纤维化 (几何学)|纤维化]]的曲面，
即存在该曲面到某条[[代数曲线|曲线]]的[[紧合态射]]，
使得几乎所有（除去一个零维子集外，下同）的[[纤维]]都是[[亏格]] $1$ 的[[光滑概形|光滑]]曲线。
由于这些光滑纤维可以看作未选定基点的[[椭圆曲线]]，因此得名。

我们通常考虑的曲面与基曲线都是光滑的，而纤维不一定光滑，这些不光滑的纤维被称为**奇异纤维**。
极小椭圆曲面上的奇异纤维被 [[Kunihiko Kodaira|Kodaira]] 分类，
这些奇异纤维的相交情况可以被[[ADE 分类|ADE]]类的[[仿射 Dynkin 图]]所刻画。

椭圆曲面是[[代数曲面]]的重要例子。特别地，满足特定条件的椭圆曲面还是[[K3 曲面]]。
同时，它们也是复曲面理论与[[四维流形]]理论中被了解得较为充分的一类流形。

椭圆曲面在[[弦论]]中也有重要应用。

## 定义

### 代数几何

::: definition [代数椭圆曲面]
设 $E$ 是域 $k$ 上的[[光滑概形|光滑]][[代数曲面]]。
若存在[[满射 (代数几何)|满]]的[[紧合态射]] $f \colon E \to B$，满足：

- 基底 $B$ 是[[光滑概形|光滑]][[代数曲线]]。

- 对任意 $x \in B$，纤维 $f^{-1} (x)$ [[连通空间|连通]]。

- 在 $B$ 的[[普遍点]] $\xi$ 处 $f$ 的纤维 $f^{-1}(\xi)$ 是光滑代数曲线，亏格为 $1$。

则称 $E$ 为（代数）**椭圆曲面**。
若闭点 $x\in B$ 满足 $f^{-1}(x)\subset E$ 不是[[光滑簇]]，则称 $f^{-1}(x)$ 为 $f$ 的**奇异纤维**。
:::

### 复几何

::: definition [复椭圆曲面]
设 $E$ 是光滑[[复流形|复曲面]]。
若存在满、全纯的[[紧合映射]] $f:E\to B$ 与离散点集 $S\subset B$，满足：

- 基底 $B$ 为光滑复曲线，即 [[Riemann 面]]。

- 对任意 $x \in B$，纤维 $f^{-1} (x)$ [[连通空间|连通]]。

- $f$ 的限制 $f|_{f^{-1} (B \setminus S)} \colon f^{-1} (B \setminus S) \to B \setminus S$
  是全纯[[浸没]]，其纤维是亏格为 $1$ 的紧 [[Riemann 面]]。

则称 $E$ 为（复）**椭圆曲面**。
对满足条件的最小 $S$，其中的点 $s\in S$ 对应的纤维 $f^{-1}(s)$ 称为 $f$ 的**奇异纤维**。
:::

## 奇异纤维

### 分类

椭圆纤维化中几乎所有纤维是光滑椭圆曲线。每个奇异纤维由若干条有理曲线并成，
可能带有奇点或非零的重数（这些纤维作为概形通常不是[[既约概形]]）。
[[Kunihiko Kodaira]] 与 [[André Néron]] 各自独立地对所有可能的纤维进行了分类，
而 Tate 算法可用于确定定义在数域上的椭圆曲线的纤维类型。

下表列出了极小（指该纤维化不能分解为更小的纤维化；
严格来说是指其奇异纤维中不包含自相交数为 $-1$ 的光滑有理曲线）
椭圆曲面中所有可能的奇异纤维类型。表中给出了：

- 纤维的 Kodaira 记号；

- 纤维的 Néron 记号；

- 纤维的不可约分支数（除 $I_0$ 型外均为有理曲线），以及具体情况；

- 纤维形状的示意图；

- 分支的相交矩阵，它要么是 $1\times 1$ 的零矩阵，
  要么是仿射 Cartan 矩阵（给出了对应的仿射 Dynkin 图记号）；

- 带有各分支的重数的 Dynkin 图。

| Kodaira 记号 | Néron 记号 | 不可约分支数与几何描述 | 纤维形状示意图 | 相交矩阵 | Dynkin 图 |
| --- | --- | --- | --- | --- | --- |
| $I_0$ | $A$ | $1$（非奇异，光滑椭圆曲线） | $\begin{tikzpicture}[baseline=-0.5ex, scale=0.4] \draw[thick, domain=-1:1.8, samples=100] plot (\x, {sqrt(\x^3+1)}); \draw[thick, domain=-1:1.8, samples=100] plot (\x, {-sqrt(\x^3+1)}); \end{tikzpicture}$ | $0$ | $\begin{tikzpicture}[scale=0.6, baseline=-0.5ex, every path/.style={line width=.75}] \draw[fill=white] (0,0) circle (.35); \node at (0,0) {\footnotesize 1}; \end{tikzpicture}$ |
| $I_1$ | $B_1$ | $1$（带有一个节点） | $\begin{tikzpicture}[baseline=-0.5ex, scale=0.7] \draw[thick, domain=-1:.8, samples=100] plot (\x, {\x*sqrt(\x+1)}); \draw[thick, domain=-1:.8, samples=100] plot (\x, {-\x*sqrt(\x+1)}); \end{tikzpicture}$ | $0$ | $\begin{tikzpicture}[scale=0.6, baseline=-0.5ex, every path/.style={line width=.75}] \draw[fill=white] (0,0) circle (.35); \node at (0,0) {\footnotesize 1}; \end{tikzpicture}$ |
| $I_2$ | $B_2$ | $2$（交于两个不同的点） | $\begin{tikzpicture}[baseline=-0.5ex, scale=1] \draw[thick] (-.5,-.15) to[bend left=60] (.5,-.15); \draw[thick] (-.5,.15) to[bend right=60] (.5,.15); \end{tikzpicture}$ | $\widetilde{\mathrm{A}}_1$ | $\begin{tikzpicture}[scale=0.6, baseline=-0.5ex, every path/.style={line width=.75}] \draw (0, .15) -- (1, .15) (0, -.15) -- (1, -.15); \draw[fill=white] (0,0) circle (.35); \node at (0,0) {\footnotesize 1}; \draw[fill=white] (1,0) circle (.35); \node at (1,0) {\footnotesize 1}; \end{tikzpicture}$ |
| $I_v\ (v\ge 3)$ | $B_v$ | $v$（交于 $v$ 个不同的点） | $\begin{tikzpicture}[baseline=-0.5ex, scale=1] \draw[thick] (-0.6, 0.2) -- (0.1, 0.8); \draw[thick] (0.6, 0.2) -- (-0.1, 0.8); \draw[thick] (-0.5, 0.5) -- (-0.3, -0.6); \draw[thick] (0.5, 0.5) -- (0.3, -0.6); \draw[thick] (-0.5, -0.4) -- (-0.15, -0.4); \draw[thick, dotted] (-0.15, -0.4) -- (0.15, -0.4); \draw[thick] (0.15, -0.4) -- (0.5, -0.4); \end{tikzpicture}$ | $\widetilde{\mathrm{A}}_{v-1}$ | $\begin{tikzpicture}[scale=0.6, baseline=-0.5ex, every path/.style={line width=.75}] \draw (-1, 0) -- (1, 0) (1.5, 0) -- (3.5, 0) (-1,0) -- (1.25, -1) -- (3.5, 0); \draw[dotted] (1, 0) -- (1.5, 0); \foreach \x in {-1, 0.3, 2.2, 3.5} {\draw[fill=white] (\x, 0) circle (.35); \node at (\x, 0) {\footnotesize 1};} \draw[fill=white] (1.25, -1) circle (.35); \node at (1.25, -1) {\footnotesize 1}; \end{tikzpicture}$ |
| $mI_v\ \substack{(v\ge 0,\\ m\ge 2)}$ | - | 带有重数 $m$ 的 $I_v$ | - | - | - |
| $II$ | $C_1$ | $1$（带有一个尖点） | $\begin{tikzpicture}[baseline=-0.5ex, scale=1] \draw[thick, domain=0:.8, samples=100] plot (\x, {sqrt(\x^3)}); \draw[thick, domain=0:.8, samples=100] plot (\x, {-sqrt(\x^3)}); \end{tikzpicture}$ | $0$ | $\begin{tikzpicture}[scale=0.6, baseline=-0.5ex, every path/.style={line width=.75}] \draw[fill=white] (0,0) circle (.35); \node at (0,0) {\footnotesize 1}; \end{tikzpicture}$ |
| $III$ | $C_2$ | $2$（二阶相切于一点） | $\begin{tikzpicture}[baseline=-0.5ex, scale=1] \draw[thick] (-0.5, 0.3) to[out=-30, in=180] (0, 0) to[out=0, in=210] (0.5, 0.3); \draw[thick] (-0.5, -0.3) to[out=30, in=180] (0, 0) to[out=0, in=150] (0.5, -0.3); \end{tikzpicture}$ | $\widetilde{\mathrm{A}}_1$ | $\begin{tikzpicture}[scale=0.6, baseline=-0.5ex, every path/.style={line width=.75}] \draw (0, .15) -- (1, .15) (0, -.15) -- (1, -.15); \draw[fill=white] (0,0) circle (.35); \node at (0,0) {\footnotesize 1}; \draw[fill=white] (1,0) circle (.35); \node at (1,0) {\footnotesize 1}; \end{tikzpicture}$ |
| $IV$ | $C_3$ | $3$（三条曲线交于一点） | $\begin{tikzpicture}[baseline=-0.5ex, scale=0.8] \draw[thick] (-0.5,-0.4) -- (0.5,0.4); \draw[thick] (-0.5,0.4) -- (0.5,-0.4); \draw[thick] (0,-0.6) -- (0,0.6); \end{tikzpicture}$ | $\widetilde{\mathrm{A}}_2$ | $\begin{tikzpicture}[scale=0.6, baseline=-0.5ex, every path/.style={line width=.75}] \draw (0,0) -- (1.5,0) -- (0.75, 1.2) -- cycle; \foreach \x/\y in {0/0, 1.5/0, 0.75/1.2} {\draw[fill=white] (\x,\y) circle (.35); \node at (\x,\y) {\footnotesize 1};} \end{tikzpicture}$ |
| $I_0^*$ | $C_4$ | $5$ | $\begin{tikzpicture}[baseline=-0.5ex, scale=0.8] \draw[thick] (-0.8,0) -- (0.8,0); \foreach \x in {-0.4,-0.15,0.15,0.4} \draw[thick] (\x,-0.3) -- (\x,0.3); \end{tikzpicture}$ | $\widetilde{\mathrm{D}}_4$ | $\begin{tikzpicture}[scale=0.6, baseline=-0.5ex, every path/.style={line width=.75}] \draw (0, 1) -- (1, 0) -- (0, -1) (2, 1) -- (1, 0) -- (2, -1); \foreach \x/\y in {0/1, 0/-1, 2/1, 2/-1} {\draw[fill=white] (\x,\y) circle (.35); \node at (\x,\y) {\footnotesize 1};} \draw[fill=white] (1,0) circle (.35); \node at (1,0) {\footnotesize 2}; \end{tikzpicture}$ |
| $I_v^*\ (v\ge 1)$ | $C_{5,v}$ | $5+v$ | $\begin{tikzpicture}[baseline=-0.5ex, scale=0.8] \draw[thick] (-1.2,0) -- (-0.3,0); \draw[thick, dotted] (-0.3,.5) -- (0.3,.5); \draw[thick] (-.7,.5) -- (-.3,.5); \draw[thick] (.3,.5) -- (.7,.5); \draw[thick] (0.3,0) -- (1.2,0); \draw[thick] (-1,-0.3) -- (-1,0.3); \draw[thick] (-0.7,-0.3) -- (-0.7,0.3); \draw[thick] (-0.4,-0.3) -- (-0.4,0.7); \draw[thick] (0.4,-0.3) -- (0.4,0.7); \draw[thick] (0.7,-0.3) -- (0.7,0.3); \draw[thick] (1,-0.3) -- (1,0.3); \end{tikzpicture}$ | $\widetilde{\mathrm{D}}_{4+v}$ | $\begin{tikzpicture}[scale=0.6, baseline=-0.5ex, every path/.style={line width=.75}] \draw (0, 1) -- (1, 0) -- (1.6, 0) (2.4, 0) -- (3, 0) -- (4, 1) (3, 0) -- (4, -1) (0, -1) -- (1, 0); \draw[dotted] (1.6, 0) -- (2.4, 0); \foreach \x in {1, 3} {\draw[fill=white] (\x, 0) circle (.35); \node at (\x, 0) {\footnotesize 2};} \foreach \y in {1, -1} {\draw[fill=white] (0, \y) circle (.35); \node at (0, \y) {\footnotesize 1}; \draw[fill=white] (4, \y) circle (.35); \node at (4, \y) {\footnotesize 1};} \end{tikzpicture}$ |
| $IV^*$ | $C_6$ | $7$ | $\begin{tikzpicture}[baseline=-0.5ex, scale=0.8] \draw[thick] (-1.2, 0) -- (1.2, 0); \draw[thick] (-0.6, -0.5) -- (-0.6, 0.5); \draw[thick] (0, -0.5) -- (0, 0.5); \draw[thick] (0.6, -0.5) -- (0.6, 0.5); \draw[thick] (-0.9, 0.3) -- (-0.3, 0.3); \draw[thick] (-0.3, -0.3) -- (0.3, -0.3); \draw[thick] (0.3, 0.3) -- (0.9, 0.3); \end{tikzpicture}$ | $\widetilde{\mathrm{E}}_6$ | $\begin{tikzpicture}[scale=0.6, baseline=-0.5ex, every path/.style={line width=.75}] \draw (0, 0) -- (4, 0) (2, 0) -- (2, 2); \foreach \x/\w in {0/1, 1/2, 2/3, 3/2, 4/1} {\draw[fill=white] (\x, 0) circle (.35); \node at (\x, 0) {\footnotesize \w};} \foreach \y/\w in {1/2, 2/1} {\draw[fill=white] (2, \y) circle (.35); \node at (2, \y) {\footnotesize \w};} \end{tikzpicture}$ |
| $III^*$ | $C_7$ | $8$ | $\begin{tikzpicture}[baseline=-0.5ex, scale=0.8] \draw[thick] (-1.4, 0) -- (1.4, 0); \draw[thick] (0, -0.5) -- (0, 0.5); \draw[thick] (-0.7, -0.5) -- (-0.7, 0.5); \draw[thick] (0.7, -0.5) -- (0.7, 0.5); \draw[thick] (-1.4, 0.3) -- (-0.4, 0.3); \draw[thick] (0.4, -0.3) -- (1.4, -0.3); \draw[thick] (-1, 0.1) -- (-1, 1); \draw[thick] (1, -1) -- (1, -0.1); \end{tikzpicture}$ | $\widetilde{\mathrm{E}}_7$ | $\begin{tikzpicture}[scale=0.6, baseline=-0.5ex, every path/.style={line width=.75}] \draw (0, 0) -- (6, 0) (3, 0) -- (3, 1); \foreach \x/\w in {0/1, 1/2, 2/3, 3/4, 4/3, 5/2, 6/1} {\draw[fill=white] (\x, 0) circle (.35); \node at (\x, 0) {\footnotesize \w};} \draw[fill=white] (3, 1) circle (.35); \node at (3, 1) {\footnotesize 2}; \end{tikzpicture}$ |
| $II^*$ | $C_8$ | $9$ | $\begin{tikzpicture}[baseline=-0.5ex, scale=0.8] \draw[thick] (-1.8, 0) -- (1.4, 0); \draw[thick] (0, -0.4) -- (0, 0.4); \draw[thick] (0.8, -0.6) -- (0.8, 1); \draw[thick] (0.5, 0.6) -- (1.4, 0.6); \draw[thick] (-.5, .3) -- (-.5, -1.2); \draw[thick] (-1.8, -.9) -- (0, -.9); \draw[thick] (-1, -.5) -- (-1, -2.1); \draw[thick] (-1.8, -1.8) -- (-.5, -1.8); \draw[thick] (-1.5, -1.3) -- (-1.5, -2.8); \end{tikzpicture}$ | $\widetilde{\mathrm{E}}_8$ | $\begin{tikzpicture}[scale=0.6, baseline=-0.5ex, every path/.style={line width=.75}] \draw (0, 0) -- (7, 0) (2, 0) -- (2, 1); \foreach \x/\w in {0/2, 1/4, 2/6, 3/5, 4/4, 5/3, 6/2, 7/1} {\draw[fill=white] (\x, 0) circle (.35); \node at (\x, 0) {\footnotesize \w};} \draw[fill=white] (2, 1) circle (.35); \node at (2, 1) {\footnotesize 3}; \end{tikzpicture}$ |

这一分类表可以通过如下几何论证得出：纤维中各不可约分支的相交矩阵必须是半负定的、连通的、对称的，
并且（由极小性假设）对角线上没有 $-1$。
满足这些条件的矩阵只能是 $0$ 矩阵，或者是 ADE 型仿射 Dynkin 图的 Cartan 矩阵的倍数。

相交矩阵几乎完全决定了纤维的类型，仅有以下三种例外情况（以 Kodaira 记号和 Néron 记号表示）：

- 若相交矩阵为 $0$，则该纤维可以是一条光滑椭圆曲线（类型 $I_0$、$A$），
  也可以是带有一个普通二重点的有理曲线（类型 $I_1$、$B_1$），
  或者是带有一个尖点的有理曲线（类型 $II$、$C_1$）。

- 若相交矩阵为仿射 $\widetilde{\mathrm{A}}_1$，说明有 $2$ 个分支且相交数总和为 $2$。
  它们可以在两个不同的点分别以一阶相交（类型 $I_2$、$B_2$），
  也可以在同一个点以二阶相切（类型 $III$、$C_2$）。

- 若相交矩阵为仿射 $\widetilde{\mathrm{A}}_2$，说明有 $3$ 个分支且两两相交。
  它们可以两两交于 $3$ 个不同的点（类型 $I_3$、$B_3$），或者三条曲线共点交于一点（类型 $IV$、
  $C_3$）。

### 例子

::: example [$j$-不变量为一次函数的例子]
考虑
\[
\begin{aligned}
&X:=\{([x:y:z],[s:t])\in \mathbb P^2\times \mathbb P^1 : t^6\cdot y^2z=4t^6\cdot x^3-3st^2(s-t)^3\cdot xz^2+s(s-t)^5\cdot z^3\}. \\
&X\mapsto \mathbb P^1,\quad ([x:y:z],[s:t])\mapsto [s:t].
\end{aligned}
\]

其中 $[s:t]$ 可视作椭圆曲线族的参数，对应纤维记作 $X_{[s:t]}$。
通过计算方程及其偏导数生成的理想，不难证明 $X$ 仅在点 $s=t,x=y=0$ 以及直线 $t=z=0$ 处奇异，
这些点附近的表现将在后文具体阐述。

因此在 $t\ne s,0$ 处的纤维定义了一个 $\mathbb A^1\backslash\mathrm{pt}$ 上的椭圆曲面，
计算得到其 [[j-不变量|$j$-不变量]] 为 $j(X_{[s:t]})=1728(s/t)$，而三次部分（等式右边，
关于$x/z$）的[[判别式]]为 $432s^2(s-t)^9t^{13}$。
所以奇异纤维位于 $s=0$（尽管 $j(X_{[0:t]})=0\ne \infty$，但是纤维仍是奇异的，
关于奇异纤维的 $j$-不变量见 @monodromy）。

$X_{[0:1]}$ 即 $y^2z=4x^3$，它是尖点曲线，按照分类该奇异纤维类型为 $II$。

对于 $s=t$ 或 $t=0$，需要先对奇点作消解，我们先展示 $t=0$ 的情况。

- 对 $t=0$，不妨在局部 $s=1$ 考虑，方程为
  \[
  t^6\cdot y^2 z=4t^6\cdot x^3-3t^2(1-t)^3\cdot xz^2+(1-t)^5\cdot z^3.
  \]
  取新坐标 $[X:Y:Z]$ 为 $X=t^2x,Y=t^3y,Z=z$，此时原方程作
  \[
  \begin{aligned}
  Y^2Z=4X^3-3(1-t)^3\cdot XZ^2+(1-t)^5\cdot Z^3.
  \end{aligned}
  \]
  其在 $t\ne 1$ 时光滑。令 $t=0$，得到 $Y^2Z=4X^3-3XZ^2+Z^3=(X+Z)(2X-Z)^2$。
  于是所得的簇是关于参数 $t\ne 1$ 的椭圆曲面，相当于消解了 $t=0$ 处的奇点，
  且在 $t=0$ 处的奇异纤维是 $I_1$。

- 可以证明 $s=t$ 处经过消解后得到的奇异纤维类型为 $III^*$。
  在下一个例子将展示方程更简洁的族用于进行直观计算，其本质和此例相同。

:::

::: example [奇异纤维为 $IV^*,III^*,II^*$ 的例子]
定义
\[
\begin{aligned}
X_{IV^*} &:=\{([x:y:z],t)\in \mathbb P^2\times \mathbb A^1 : y^2z=x^3+t^3xz^2+t^4z^3\}, \\
X_{III^*} &:=\{([x:y:z],t)\in \mathbb P^2\times \mathbb A^1 : y^2z=x^3+t^3xz^2+t^5z^3\}, \\
X_{II^*} &:=\{([x:y:z],t)\in \mathbb P^2\times \mathbb A^1 : y^2z=x^3+t^4xz^2+t^5z^3\}. \\
\end{aligned}
\]
我们仅关注上述族在 $t=0$ 附近的表现。经过不断爆破消解，将得到 $IV^*,III^*,II^*$ 类的奇异纤维。
由于 $t=0$ 时只有 $x=y=0$ 处奇异，我们将从此点开始爆破。为便捷，我们总考虑仿射局部，设 $z=1$。
:::

::: proof [$X_{IV^*}$的具体计算]
方程为 $y^2=x^3+t^3x+t^4$。
当 $t=0$ 时我们得到有理曲线 $C_0:=\{y^2=x^3,t=0\}$，其重数为 $1$。逐次爆破流程如下：

1. 爆破原点得到三个仿射片，根据标准的构造，它们的坐标分别是
   \[
   (X_1,Y_1,T_1)=\left(x,\frac yx,\frac tx\right),\left(\frac xy,y,\frac ty\right),
   \left(\frac xt,\frac yt,t\right).
   \]
   计算它们的方程得到
   \[
   \begin{aligned}
   Y_1^2 &= X_1+T_1^3X_1^2+T_1^4X_1^2, \\
   1 &= X_1^3Y_1+T_1^3X_1Y_1^2+T_1^4Y_1^2, \\
   Y_1^2 &= T_1X_1^3+T_1^2X_1+T_1^2.
   \end{aligned}
   \]
   经检查只有第三个仿射片中产生了新的奇点，位于 $(X_1,Y_1,T_1)=(0,0,0)$。
   此时 $T_1=0$ 上具有有理曲线 $C_1:=\{Y_1=0,T_1=0\}$，$(x,y,t)=(X_1T_1,Y_1T_1,T_1)$，
   其重数为 $2$（因为方程在 $T_1=0$ 时为 $Y_1^2=0$）。

2. 继续爆破 $(X_1,Y_1,T_1)=(0,0,0)$。仍然得到三个仿射片，其中有奇点的仅有
   \[
   (X_2,Y_2,T_2)=\left(X_1,\frac {Y_1}{X_1},\frac {T_1}{X_1}\right)=\left(\frac xt,\frac yx,\frac{t^2}x\right).
   \]
   曲线的方程为
   \[
   \begin{aligned}
   Y_2^2=T_2X_2^2+T_2^2X_2+T_2^2.
   \end{aligned}
   \]
   奇点位于 $(X_2,Y_2,T_2)=(0,0,0)$。
   对应地 $(x,y,t)=(X_2^2T_2,X_2^2Y_2T_2,X_2T_2)$。
   此时 $X_2=0$ 上具有有理曲线 $C_{2A}:=\{Y_2=T_2,X_2=0\}$ 和 $C_{2B}:=\{Y_2=-T_2,X_2=0\}$，
   它们的重数皆为 $1$。

3. 继续爆破 $(X_2,Y_2,T_2)=(0,0,0)$。其中有奇点的仅有
   \[
   (X_3,Y_3,T_3)=\left(X_2,\frac {Y_2}{X_2},\frac {T_2}{X_2}\right)=\left(\frac xt,\frac {yt}{x^2},\frac{t^3}{x^2}\right).
   \]
   曲线的方程为
   \[
   \begin{aligned}
   Y_3^2=T_3X_3+T_3^2X_3+T_3^2.
   \end{aligned}
   \]
   奇点位于 $(X_3,Y_3,T_3)=(0,0,0)$。
   对应地 $(x,y,t)=(X_3^3T_3,X_3^4Y_3T_3,X_3^2T_3)$。
   此时 $X_3=0$ 上具有有理曲线 $C_{3A}:=\{Y_3=T_3,X_3=0\}$ 和 $C_{3B}:=\{Y_3=-T_3,X_3=0\}$，
   它们的重数皆为 $2$，因为 $t=X_3^2T_3$ 中具有两重 $X_3$。

4. 最后一次，爆破 $(X_3,Y_3,T_3)=(0,0,0)$，将不再包含奇点。
   此时将额外得到一条有理曲线，例如我们在如下仿射坐标下考察
   \[
   (X_4,Y_4,T_4)=\left(\frac{X_3}{T_3},\frac {Y_3}{T_3},T_3\right)=\left(\frac {x^3}{t^4},\frac {y}{t^2},\frac{t^3}{x^2}\right).
   \]
   曲线的方程为
   \[
   Y_4^2=X_4+T_4X_4+1.
   \]
   对应地 $(x,y,t)=(X_4^3T_4^4,X_4^4Y_4T_4^6,X_4^2T_4^3)$。
   此时 $T_4=0$ 上具有有理曲线 $C_4:=\{Y_4^2=X_4+1,T_4=0\}$，重数为 $3$，
   因为 $t=X_4^2T_4^3$ 中具有三重 $T_4$。

至此我们得到了重数 $1$ 的有理曲线 $C_0,C_{2A},C_{2B}$，重数 $2$ 的有理曲线 $C_1,C_{3A},C_{3B}$，
重数 $3$ 的有理曲线 $C_4$。
最后简单地检查相交情况。

- $C_0,C_1$ 的相交：在第一次爆破的另一个仿射片 $(U_1,V_1,W_1)=\left(\frac tx,\frac yx,x\right)$ 中，
  原方程严格变换为 $V_1^2=W_1+U_1^3W_1^2+U_1^4W_1^2$。
  此时 $C_0$ 为 $V_1^2=W_1$，而 $C_1$ 为 $U_1=V_1=0$，它们交于原点 $(U_1,V_1,W_1)=(0,0,0)$。

- $C_{2A},C_{3A}$ 的相交：
  在第三次爆破的另一个仿射片 $(U_3,V_3,W_3)=\left(\frac{X_2}{T_2},\frac{Y_2}{T_2},T_2\right)$ 中，
  方程为 $V_3^2=W_3U_3^2+U_3+1$。
  此时 $C_3$ 为 $U_3=0 \implies V_3^2=1$，其分支 $C_{3A}$ 对应 $V_3=1$；
  而 $C_{2A}$ 的严格变换为 $U_3=0,V_3=1$，
  在 $W_3=T_2=t^2/x=0$ 上它们交于点 $(U_3,V_3,W_3)=(0,1,0)$。
  类似地，$C_{2B}$ 和 $C_{3B}$ 交于 $(0,-1,0)$。

- $C_{3A},C_4$ 的相交：在仿射片 $(X_4,Y_4,T_4)$ 中，例外除子 $C_4$ 为 $T_4=0$。
  $C_{3A}$ 的严格变换为 $X_4=0,Y_4=1$，它们交于点 $(0,1,0)$。
  类似地，$C_{3B}$ 和 $C_{4}$ 交于 $(0,-1,0)$。

- $C_1,C_4$ 的相交：
  在第四次爆破的另一个仿射片 $(U_4,V_4,W_4)=\left(\frac{T_3}{X_3},\frac{Y_3}{X_3},X_3\right)$ 中，
  例外除子 $C_4$ 为 $W_4=0$，$C_1$ 的严格变换为 $U_4=V_4=0$，它们交于原点 $(0,0,0)$。

可以检查，其他有理曲线对不存在交点，
由此得到我们需要的中心为 $C_4$（重数 3）的 $\widetilde{E_6}$ Dynkin 图。

```tikz
\begin{tikzpicture}[scale=1, baseline=-0.5ex, every path/.style={line width=.75}]
    \draw (0, 0) -- (4, 0) (2, 0) -- (2, 2);
    \foreach \x in {0, 1, 2, 3, 4} { \draw[fill=white] (\x, 0) circle (.4);}
    \foreach \y in {1, 2} { \draw[fill=white] (2, \y) circle (.4);}
    \node at (0, 0) {\footnotesize $1C_{2A}$};
    \node at (1, 0) {\footnotesize $2C_{3A}$};
    \node at (2, 0) {\footnotesize $3C_4$};
    \node at (3, 0) {\footnotesize $2C_{3B}$};
    \node at (4, 0) {\footnotesize $1C_{2B}$};
    \node at (2, 1) {\footnotesize $2C_1$};
    \node at (2, 2) {\footnotesize $1C_0$};
\end{tikzpicture}
```

:::

::: proof [$X_{III^*}$的具体计算]
方程为 $y^2=x^3+t^3x+t^5$。当 $t=0$ 时得到有理曲线 $C_0:=\{y^2=x^3,t=0\}$，重数为 $1$。
逐次爆破流程如下：

1. 爆破原点。在仿射片 $(X_1,Y_1,T_1)=\left(\frac xt,\frac yt,t\right)$ 中，方程严格变换为
   \[
   Y_1^2 = T_1X_1^3+T_1^2X_1+T_1^3.
   \]
   奇点位于 $(0,0,0)$。此时 $T_1=0$ 上具有有理曲线 $C_1:=\{Y_1=0,T_1=0\}$，其重数为 $2$。

2. 继续爆破 $(0,0,0)$。
   在仿射片 $(X_2,Y_2,T_2)=\left(X_1,\frac{Y_1}{X_1},\frac{T_1}{X_1}\right)$ 中，方程为
   \[
   Y_2^2 = X_2T_2(X_2+T_2+T_2^2).
   \]
   此时 $X_2=0$ 给出例外除子 $C_2:=\{Y_2=0,X_2=0\}$。
   由于 $t=T_1=X_2T_2$，且方程为 $Y_2^2=0$，$C_2$ 的重数为 $1\times 2=2$。
   通过计算偏导数，发现 $C_2$ 上有两个奇点：$(X_2,Y_2,T_2)=(0,0,0)$ 以及 $(0,0,-1)$。

3. 先爆破 $(0,0,0)$。
   在仿射片 $(X_3,Y_3,T_3)=\left(\frac{X_2}{T_2},\frac{Y_2}{T_2},T_2\right)$ 中，方程为
   \[
   Y_3^2 = X_3T_3(X_3+1+T_3).
   \]
   此时 $T_3=0$ 给出例外除子 $C_3:=\{Y_3=0,T_3=0\}$。
   由于 $t=X_3T_3^2$，且方程为 $Y_3^2=0$，$C_3$ 的重数为 $2\times 2=4$。
   $C_3$ 上存在三个奇点：$(X_3,Y_3,T_3)=(0,0,0)$、$(-1,0,0)$，
   以及在另一个仿射片 $X_3\to\infty$ 处的奇点。这导致了 $C_3$ 将分出三个分支。

4. 爆破 $C_3$ 上的奇点 $(0,0,0)$。
   在仿射片 $(X_{4},Y_{4},T_{4})=\left(\frac{X_3}{T_3},\frac{Y_3}{T_3},T_3\right)$ 中，方程为
   \[
   Y_{4}^2 = X_{4}(X_{4}T_{4}+1+T_{4}).
   \]
   此时 $T_{4}=0$ 给出有理曲线 $C_{4A}:=\{Y_{4}^2=X_{4},T_{4}=0\}$。
   由于 $t=X_3T_3^2=X_{4}T_{4}^3$ 且曲线约化，故 $C_{4A}$ 重数为 $3$。

5. 爆破 $C_3$ 上的奇点 $(-1,0,0)$。
   令 $X_3 = -1+u$，取仿射片 $(u_4,y_4,T_4)=\left(\frac{u}{T_3},\frac{Y_3}{T_3},T_3\right)$，方程为
   \[
   y_4^2 = (u_4T_4-1)(u_4+1).
   \]
   此时 $T_{4}=0$ 给出有理曲线 $C_{4B}:=\{y_4^2=-(u_4+1),T_{4}=0\}$。
   由于 $t=X_3T_3^2=(-1+u_4T_4)T_{4}^2$，重数为 $2$。

6. 爆破 $C_3$ 在无穷远处的奇点。
   取 $(U_3,V_3,W_3)=\left(X_2,\frac{Y_2}{X_2},\frac{T_2}{X_2}\right)$，方程为
   \[
   V_3^2=U_3W_3(1+W_3+U_3W_3^2).
   \]
   奇点位于原点，爆破取 $(U_{4},V_{4},W_{4})=\left(\frac{U_3}{W_3},\frac{V_3}{W_3},W_3\right)$，
   方程为
   \[
   V_{4}^2 = U_{4}(1+W_{4}+U_{4}W_{4}^3).
   \]
   $W_{4}=0$ 给出曲线 $C_{4C}:=\{V_{4}^2=U_{4},W_{4}=0\}$。
   由于 $t=X_2T_2=U_3^2W_3=U_{4}^2W_{4}^3$，其中 $W_4$ 重数为 $3$，故 $C_{4C}$ 重数为 $3$。

7. 最后，回到第 2 步，爆破 $C_2$ 上的另一个奇点 $(0,0,-1)$。
   令 $T_2 = -1+v$，取 $(X_5,Y_5,v_5)=\left(\frac{X_2}{v},\frac{Y_2}{v},v\right)$，方程为
   \[
   Y_5^2=X_5(v_5-1)(X_5+v_5-1).
   \]
   $v_5=0$ 给出曲线 $C_5:=\{Y_5^2=X_5(1-X_5),v_5=0\}$。
   由于 $t=X_2T_2 = X_5v_5(v_5-1)$，$v_5$ 的重数为 $1$，故 $C_5$ 重数为 $1$。

相交情况如下，与 $\widetilde{E_7}$ Dynkin 图相符。

```tikz
\begin{tikzpicture}[scale=1, baseline=-0.5ex, every path/.style={line width=.75}]
    \draw (0, 0) -- (6, 0) (3, 1) -- (3, 0);
    \foreach \x in {0, 1, 2, 3, 4, 5, 6} { \draw[fill=white] (\x, 0) circle (.4);}
    \draw[fill=white] (3, 1) circle (.4);
    \node at (0, 0) {\footnotesize $1C_0$};
    \node at (1, 0) {\footnotesize $2C_1$};
    \node at (2, 0) {\footnotesize $3C_{4C}$};
    \node at (3, 0) {\footnotesize $4C_3$};
    \node at (4, 0) {\footnotesize $3C_{4A}$};
    \node at (5, 0) {\footnotesize $2C_2$};
    \node at (6, 0) {\footnotesize $1C_5$};
    \node at (3, 1) {\footnotesize $2C_{4B}$};
\end{tikzpicture}
```

:::

::: proof [$X_{II^*}$的具体计算]
方程为 $y^2=x^3+t^4x+t^5$。当 $t=0$ 时得到有理曲线 $C_0:=\{y^2=x^3,t=0\}$，重数为 $1$。
逐次爆破流程如下：

1. 爆破原点。在仿射片 $(X_1,Y_1,T_1)=\left(\frac xt,\frac yt,t\right)$ 中，方程严格变换为
   \[
   Y_1^2 = T_1X_1^3+T_1^3X_1+T_1^3.
   \]
   奇点位于 $(0,0,0)$。此时 $T_1=0$ 给出有理曲线 $C_1:=\{Y_1=0,T_1=0\}$，重数为 $2$。

2. 继续爆破 $(0,0,0)$。
   在仿射片 $(X_2,Y_2,T_2)=\left(X_1,\frac{Y_1}{X_1},\frac{T_1}{X_1}\right)$ 中，方程为
   \[
   Y_2^2 = X_2T_2(X_2+X_2T_2^2+T_2^2).
   \]
   此时 $X_2=0$ 给出例外除子 $C_2:=\{Y_2=0,X_2=0\}$。由于 $t=T_1=X_2T_2$，重数为 $1\times 2=2$。
   奇点位于 $(X_2,Y_2,T_2)=(0,0,0)$。其还有一个无穷远处的奇点，消解情况详见后文。

3. 爆破 $(0,0,0)$。
   在仿射片 $(X_3,Y_3,T_3)=\left(\frac{X_2}{T_2},\frac{Y_2}{T_2},T_2\right)$ 中，方程为
   \[
   Y_3^2 = X_3T_3(X_3+X_3T_3^2+T_3).
   \]
   此时 $T_3=0$ 给出例外除子 $C_3:=\{Y_3=0,T_3=0\}$。
   由于 $t=X_2T_2=X_3T_3^2$，重数为 $2\times 2=4$。
   奇点位于 $(X_3,Y_3,T_3)=(0,0,0)$。其还有一个无穷远处的奇点，消解情况详见后文。

4. 爆破 $(0,0,0)$。
   在仿射片 $(X_4,Y_4,T_4)=\left(\frac{X_3}{T_3},\frac{Y_3}{T_3},T_3\right)$ 中，方程为
   \[
   Y_4^2 = X_4T_4(X_4+X_4T_4^2+1).
   \]
   此时 $T_4=0$ 给出例外除子 $C_4:=\{Y_4=0,T_4=0\}$。
   由于 $t=X_3T_3^2=X_4T_4^3$，重数为 $3\times 2=6$。
   通过求导发现 $C_4$ 上存在两个奇点：$(0,0,0)$ 与 $(-1,0,0)$。

5. 爆破 $C_4$ 上的奇点 $(-1,0,0)$。
   令 $X_4 = -1+u$，取仿射片 $(u_5,Y_5,T_5)=\left(\frac{u}{T_4},\frac{Y_4}{T_4},T_4\right)$，方程为
   \[
   Y_5^2 = (u_5T_5-1)(u_5+(u_5-1)T_5).
   \]
   $T_5=0$ 给出有理曲线 $C_5:=\{Y_5^2=-u_5,T_5=0\}$。
   由于 $t=(u_5T_5-1)T_5^3 \sim T_5^3$ 且曲线约化，故 $C_5$ 重数为 $3$。

6. 爆破 $C_4$ 上的奇点 $(0,0,0)$。
   取仿射片 $(X_6,Y_6,T_6)=\left(\frac{X_4}{T_4},\frac{Y_4}{T_4},T_4\right)$，方程为
   \[
   Y_6^2 = X_6(X_6T_6+X_6T_6^3+1).
   \]
   $T_6=0$ 给出有理曲线 $C_6:=\{Y_6^2=X_6,T_6=0\}$。
   由于 $t=X_4T_4^3=X_6T_6^4$ 且曲线约化，故 $C_6$ 重数为 $4$。

7. 考虑 $C_3$ 的无穷远奇点消解。
   取仿射片 $(U_1,V_1,W_1)=\left(X_3,\frac{Y_3}{X_3},\frac{T_3}{X_3}\right)$，方程为
   \[
   V_1^2 = U_1W_1(1+U_1^2W_1^2+W_1).
   \]
   此时 $t=X_3T_3^2=U_1^3W_1^2$，曲线 $\{V_1=0,U_1=0\}$ 对应的仍是重数 $6$ 的 $C_4$。
   由于在原点仍有奇异，再取仿射片 $(U_2,V_2,W_2)=\left(\frac{U_1}{W_1},\frac{V_1}{W_1},W_1\right)$，
   方程为
   \[
   V_2^2 = U_2(1+U_2^2W_2^4+W_2).
   \]
   其（以及另外两个仿射片中）再无奇点，此时 $t=U_1^3W_1^2=U_2^3W_2^5$，由于 $W_2$ 重数为 $5$，
   所以得到重数 $5$ 的曲线 $C_7$。

8. 考虑 $C_2$ 的无穷远奇点消解。
   取仿射片 $(U_3,V_3,W_3)=\left(X_2,\frac{Y_2}{X_2},\frac{T_2}{X_2}\right)$，方程为
   \[
   V_3^2=U_3W_3(1+U_3^2W_3^2+U_3W_3^2).
   \]
   此时 $t=X_2T_2=U_3^2W_3$，曲线 $\{V_3=0,U_3=0\}$ 对应的仍是重数 $4$ 的 $C_3$。
   由于在原点仍有奇异，再取仿射片 $(U_4,V_4,W_4)=\left(\frac{U_3}{W_3},\frac{V_3}{W_3},W_3\right)$，
   方程为
   \[
   V_4^2=U_4(1+U_4^2W_4^4+U_4W_4^3).
   \]
   其（以及另外两个仿射片中）再无奇点，此时 $t=U_3^2W_3=U_4^2W_4^3$，由于 $W_4$ 重数为 $3$，
   所以得到重数 $3$ 的曲线 $C_8$。

最终相交情况为：

```tikz
\begin{tikzpicture}[scale=1, baseline=-0.5ex, every path/.style={line width=.75}]
    \draw (0, 0) -- (7, 0) (5, 1) -- (5, 0);
    \foreach \x in {0, 1, 2, 3, 4, 5, 6, 7} { \draw[fill=white] (\x, 0) circle (.4);}
    \draw[fill=white] (5, 1) circle (.4);
    \node at (0, 0) {\footnotesize $1C_0$};
    \node at (1, 0) {\footnotesize $2C_1$};
    \node at (2, 0) {\footnotesize $3C_8$};
    \node at (3, 0) {\footnotesize $4C_3$};
    \node at (4, 0) {\footnotesize $5C_7$};
    \node at (5, 0) {\footnotesize $6C_4$};
    \node at (6, 0) {\footnotesize $4C_6$};
    \node at (7, 0) {\footnotesize $2C_2$};
    \node at (5, 1) {\footnotesize $3C_5$};
\end{tikzpicture}
```

契合 $\widetilde{E_8}$ Dynkin 图的相交构型。
:::

### 单值化 {@monodromy}

考虑在 $E\to B$ 的每个奇异纤维 $s\in B$ 附近，$H_1(X_b,\underline{\mathbb Z})\ (b\in B)$
构成 $B$ 上的局部常 $\mathbb Z^2$ 值层。
在 $s\in B$ 附近取一个绕 $s$ 一周的环路 $\gamma:[0,1]\to B,\ \gamma(0)=\gamma(1)$，
满足环路的内部仅有 $s$ 一个点有奇异纤维。
那么沿着环路一圈的同时 $H_1(X_{\gamma(0)},\mathbb Z)\cong \mathbb Z^2$ 连续形变到自身，
且保持线性性以及定向。
于是一组基下，这视作线性变换便定义了一个 $\mathrm{SL}_2(\mathbb Z)$ 中的矩阵
（差矩阵共轭类的意义下只与奇异纤维本身的结构有关，与基以及环路的选取无关），
它被称为单值化矩阵。

下面的表格记录了在各类奇异纤维点处的单值化矩阵、$j$-不变量的极限、
奇异纤维的光滑点处构成群结构的信息。

| 奇异纤维（Kodaira 记号） | 单值化矩阵 | $j$-不变量 | 群结构 |
| --- | --- | --- | --- |
| $I_v$ | $\begin{pmatrix}1&v \\0&1\end{pmatrix}$ | $\infty$ | $\mathbb{Z}/v \times \mathbb{C}^{*}$ |
| $II$ | $\begin{pmatrix}1&1\\-1&0\end{pmatrix}$ | $0$ | $\mathbb{C}$ |
| $III$ | $\begin{pmatrix}0&1\\-1&0\end{pmatrix}$ | $1728$ | $\mathbb{Z}/2\times \mathbb{C}$ |
| $IV$ | $\begin{pmatrix}0&1\\-1&-1\end{pmatrix}$ | $0$ | $\mathbb{Z}/3\times \mathbb{C}$ |
| $I_0^*$ | $\begin{pmatrix}-1&0\\0&-1\end{pmatrix}$ | 某个 $\mathbb{C}$ 中的数 | $(\mathbb{Z}/2)^{2}\times \mathbb{C}$ |
| $I_v^*\ (v\geq 1)$ | $\begin{pmatrix}-1&-v \\0&-1\end{pmatrix}$ | $\infty$ | $v$ 为偶数时为 $(\mathbb{Z}/2)^{2}\times \mathbb{C}$，$v$ 为奇数时为 $\mathbb{Z}/4\times \mathbb{C}$ |
| $IV^*$ | $\begin{pmatrix}-1&-1\\1&0\end{pmatrix}$ | $0$ | $\mathbb{Z}/3\times \mathbb{C}$ |
| $III^*$ | $\begin{pmatrix}0&-1\\1&0\end{pmatrix}$ | $1728$ | $\mathbb{Z}/2\times \mathbb{C}$ |
| $II^*$ | $\begin{pmatrix}0&-1\\1&1\end{pmatrix}$ | $0$ | $\mathbb{C}$ |

有趣的是 $II,III,IV$ 类的单值化矩阵和 $II^*,III^*,IV^*$ 类者在同一个共轭类，
$I_v,I_v^*$ 类的单值化矩阵则差一个 $-\mathrm{id}$。

对于类型为 $II$、$III$、$IV$、$I_0^*$、$IV^*$、$III^*$、$II^*$ 的奇异纤维，
其单值化矩阵在 $\mathrm{SL}(2,\mathbb{Z})$ 中具有有限阶。
这反映了椭圆纤维化在此类纤维处具有潜在好约化的性质。
也就是说，在对基曲线作有限分歧覆盖后，奇异纤维可以用光滑椭圆曲线替换。
表中 $j$-不变量描述了出现的具体是哪条光滑曲线。
注意到：在复数域上，$j$-不变量为 $0$ 的曲线是自同构群阶为 $6$ 的唯一椭圆曲线，
而 $j$-不变量为 $1728$ 的曲线是自同构群阶为 $4$ 的唯一椭圆曲线。
（所有其他椭圆曲线的自同构群阶都为 $2$。）

对于带有截面的椭圆纤维化（也称为 **Jacobi 椭圆纤维化**），每条纤维的光滑部分都具有群结构。
对于奇异纤维，其光滑部分的群结构如表所示，这里为了方便假定基域为复数域。
值得注意的是，对于相交矩阵由仿射 Dynkin 图 $\tilde{\Gamma}$ 给出的奇异纤维，
其光滑部分的连通分支群同构于以 Dynkin 图 $\Gamma$ 为根系的单连通单李群的中心，如表中所列。
了解奇异纤维的群结构对于计算椭圆纤维化的 [[Mordell–Weil 定理|Mordell–Weil 群]]（截面群）很有用，
特别是其挠子群。

### Tate 算法

## 曲面分类

### 一般例子

- 椭圆曲线和任何曲线的[[积概形|积]]是椭圆曲面，且没有奇异纤维。

- 代数闭域上，所有[[Kodaira 维数]]为 $1$ 的射影代数曲面都是椭圆曲面。

- 所有复[[Enriques 曲面]]都是椭圆曲面，即 [[K3 曲面]]关于 $2$ 元[[循环群]]作用的商。

```terms
椭圆曲面:
  en: elliptic surface
  ja: 楕<だ>円<えん>曲<きょく>面<めん>
奇异纤维:
  en: singular fiber
  ja: 特<とく>異<い>ファイバー
```
