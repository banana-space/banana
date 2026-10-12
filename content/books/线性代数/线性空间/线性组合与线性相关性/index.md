---
title: 线性组合与线性相关性
---

## 线性组合*

线性空间中的元素通常可以通过一些比较基本的元素表达出来。例如可以把$\mathbb{R}^3$中的矢量写成

```tikz
\begin{tikzpicture}[scale=0.8]
  \draw[thick,->] (0,0,0) -- (4,0,0);
  \draw[thick,->] (0,0,0) -- (0,3,0);
  \draw[thick,->] (0,0,0) -- (0,0,3);

  \draw[thick,->,red] (0,0,0) -- (2,3,1);
  \node at (4,2.5,1)  {\small $\vec{v}=a \vec{i} + b \vec{j} + c \vec{k}$};
\end{tikzpicture}
```

这里$\vec{v}=(a,b,c)$。$\ \vec{i},\ \vec{j},\ \vec{k}$是单位向量
$$
\vec{i}=(1,0,0)\quad \vec{j}=(0,1,0)\quad \vec{k}=(0,0,1)
$$

::: definition
设$\mathbf{v}_1,\cdots, \mathbf{v}_m\in V$，$\lambda_1, \cdots, \lambda_m\in k$。则向量
$$
\mathbf{u}=\lambda_1 \mathbf{v}_1+\cdots+\lambda_m \mathbf{v}_m
$$
称为向量$\mathbf{v}_1,\cdots, \mathbf{v}_m$的线性组合，
或者称$\mathbf{u}$可以由$\mathbf{v}_1,\cdots, \mathbf{v}_m$线性表达。
所有可以由$\mathbf{v}_1,\cdots, \mathbf{v}_m$线性表达的向量构成的集合记为
$$
\operatorname{Span}\{\mathbf{v}_1,\cdots, \mathbf{v}_m\}
$$
:::

::: proposition
$\operatorname{Span}\{\mathbf{v}_1,\cdots, \mathbf{v}_m\}$是$V$的线性子空间。
:::

::: proof
设$\mathbf{u}, \mathbf{v}\in \operatorname{Span}\{\mathbf{v}_1,\cdots, \mathbf{v}_m\}$，即
$$
\mathbf{u}=\alpha_1 \mathbf{v}_1+\cdots+\alpha_m \mathbf{v}_m \qquad \mathbf{v}=\beta_1 \mathbf{v}_1+\cdots+\beta_m \mathbf{v}_m
$$
$$
\Longrightarrow \mathbf{u}+\mathbf{v}=(\alpha_1+\beta_1) \mathbf{v}_1+\cdots+(\alpha_m+\beta_m) \mathbf{v}_m
$$
属于$\operatorname{Span}\{\mathbf{v}_1,\cdots, \mathbf{v}_m\}$。类似可证数乘封闭。
:::

::: example
$\mathbb{R}^3$中 $\operatorname{Span}\{\vec{u},\vec{v}\}$是由$\vec{u},\vec{v}$
两个向量张成的平面（这里假设$\vec{u},\vec{v}$不共线）

```tikz
\usetikzlibrary{calc}
\begin{tikzpicture}[scale=1.5]
  \draw[->] (0,0,0) -- (3,0,0);
  \draw[->] (0,0,0) -- (0,3,0) ;
  \draw[->] (0,0,0) -- (0,0,2) ;
  \draw[thick,->,red] (0,0,0) -- (2,1,1) node[above] {$\vec{u}$};
  \draw[thick,->,blue] (0,0,0) -- (1,2,0.5) node[above] {$\vec{v}$};
  \filldraw[draw=green,fill=green!20,opacity=0.5]
    (-1.5,-1,-1) -- (2,0,1) -- ($(2,1,1)+(1.3,1.8,0.5)$) -- (0,2,0.5) -- cycle;
\end{tikzpicture}
```

:::

::: example
微分方程
$$
f''(x)+f(x)=0
$$
所有的解构成的线性空间可以写成
$$
\operatorname{Span}\{\cos(x),\sin(x)\}
$$
:::

线性表达的方式有可能并不唯一。例如考虑
$$
\vec{v}_1=(1,-1,0),\quad \vec{v}_2=(0,1,-1), \quad \vec{v}_3=(1,0,-1)
$$
则向量$\vec{u}=(2,0,-2)$可以线性表达为
$$
\vec{u}=\vec{v}_1+\vec{v}_2+\vec{v}_3
$$
也可以线性表达为
$$
\vec{u}=2\vec{v}_1+2\vec{v}_2
$$

那么什么时候线性表达的方式是唯一的？为了回答这个问题，需要引入线性相关的概念。

## 线性相关性*

::: definition
$V$中向量$\mathbf{v}_1,\cdots, \mathbf{v}_m$称为是线性相关的，
如果存在不全为$0$的数$\lambda_1, \cdots, \lambda_m\in k$使得
$$
\lambda_1 \mathbf{v}_1+\cdots+ \lambda_m\mathbf{v}_m=\mathbf{0}
$$
否则，称$\mathbf{v}_1,\cdots, \mathbf{v}_m$是线性无关的。
:::

如果$\mathbf{v}_1,\cdots, \mathbf{v}_m$是线性相关的，
即存在不全为$0$的数$\lambda_1, \cdots, \lambda_m\in k$使得
$$
\lambda_1 \mathbf{v}_1+\cdots+ \lambda_m\mathbf{v}_m=\mathbf{0}
$$
不妨设其中$\lambda_i\neq 0$，则
$$
\mathbf{v_i}=-{1\over \lambda_i}\left(\lambda_1 \mathbf{v}_1+\cdots+\lambda_{i-1} \mathbf{v}_{i-1}+\lambda_{i+1} \mathbf{v}_{i+1}+\cdots \lambda_m\mathbf{v}_m\right)
$$
即$\mathbf{v}_i$可以由其他的向量线性表达。

反之亦然，如果$\mathbf{v}_1,\cdots, \mathbf{v}_m$中有某个向量可以被其他向量线性表达，不妨设
$$
\mathbf{v}_i=\alpha_1 \mathbf{v}_1+\cdots+\alpha_{i-1} \mathbf{v}_{i-1}+\alpha_{i+1} \mathbf{v}_{i+1}+\cdots \alpha_m\mathbf{v}_m
$$
则
$$
\alpha_1 \mathbf{v}_1+\cdots+\alpha_{i-1} \mathbf{v}_{i-1}+(-1)\mathbf{v}_i+\alpha_{i+1} \mathbf{v}_{i+1}+\cdots \alpha_m\mathbf{v}_m=\mathbf{0}
$$
因此$\mathbf{v}_1,\cdots, \mathbf{v}_m$线性相关。由此我们证明了如下结论

::: proposition
向量$\mathbf{v}_1,\cdots, \mathbf{v}_m$线性相关当且仅当存在其中某个向量可以被其他向量线性表达。
:::

因此我们可以把线性相关的向量理解为这些向量中有冗余的线性信息。

::: example
两个非零向量$\mathbf{v}_1, \mathbf{v_2}$是线性相关的当且仅当它们在同一直线上，
即存在$\lambda\neq 0$使得

$$
\mathbf{v}_2=\lambda \mathbf{v}_1
$$

```tikz
\begin{tikzpicture}
  \draw (-2,0) -- (4,0);
  \draw[->, thick, red] (0,0) -- (1,0) node[above, midway] {$\mathbf{v}_1$};
  \draw[->, thick, blue] (0,0) -- (3,0) node[above, midway] {$\mathbf{v}_2$};
  \draw[->, thin] (-2.5,0) -- (4.5,0) ;
\end{tikzpicture}
```

:::

::: example
考虑$\mathbb{R}^3$中的向量
$$
\vec{v}_1=(1,-1,0),\quad \vec{v}_2=(0,1,-1), \quad \vec{v}_3=(-1,0,1)
$$
可以看出
$$
\vec{v}_1+\vec{v}_2+\vec{v}_3=\mathbf{0}
$$
因此它们是线性相关的。比如$\vec{v}_3$可以线性表达为
$$
\vec{v}_3=-\vec{v}_1-\vec{v}_2
$$
:::

::: example
$\mathbb{R}^3$中的3个向量$\vec{v}_1,\vec{v}_2,\vec{v}_3$是线性相关的当且仅当它们在同一个平面上。
实际上，不妨设
$$
\vec{v}_3=a\vec{v}_1+b\vec{v}_2.
$$
则$\vec{v}_3$包含在$\vec{v}_1$和$\vec{v}_2$张成的平面。

```tikz
\begin{tikzpicture}
  \filldraw[draw=green,fill=green!20,opacity=0.5] (-2,-0.5) -- (3,-0.5) -- (1.5,2.5) -- cycle;
  \draw[thick,->,red] (0,0) -- (1,0) node[below] {$\vec{v}_1$};
  \draw[thick,->,blue] (0,0) -- (0.5,1) node[above left] {$\vec{v}_2$};
  \draw[thick,->,purple] (0,0) -- (1.5,1) node[above right] {$\vec{v}_3$};
\end{tikzpicture}
```

:::

## 线性无关性*

下面我们来考察线性无关性。
$\mathbf{v}_1,\cdots, \mathbf{v}_m$是线性无关的等价表述为：
如果$\lambda_1, \cdots, \lambda_m\in k$满足
$$
\lambda_1 \mathbf{v}_1+\cdots+ \lambda_m\mathbf{v}_m=\mathbf{0}
$$
则一定有
$$
\lambda_1= \cdots= \lambda_m=0
$$
换言之，零元只能由$\mathbf{v}_1,\cdots, \mathbf{v}_m$平凡地线性表达。

::: example
考虑$\mathbb{R}^3$中相互垂直的单位向量
$$
\vec{i}=(1,0,0)\quad \vec{j}=(0,1,0)\quad \vec{k}=(0,0,1)
$$
假如有$\lambda_1, \lambda_2, \lambda_3\in \mathbb{R}$使得
$$
\lambda_1 \vec{i}+\lambda_2 \vec{j}+\lambda_3\vec{k}=\mathbf{0}
$$
即$(\lambda_1, \lambda_2,\lambda_3)=\mathbf{0}$是零向量，则每个分量都是$0$
$$
\lambda_1=\lambda_2=\lambda_3=0
$$
因此$\vec{i},\vec{j},\vec{k}$是线性无关的。它们不在同一平面上。
:::

::: proposition
假设$S=\{\mathbf{v}_1,\cdots, \mathbf{v}_m\}$线性无关，则$S$的任意子集的向量组都是线性无关的。
:::

::: proof
不妨考虑子集$\{\mathbf{v}_1,\cdots, \mathbf{v}_s\}\ (s\leq m)$。假设
$$
\lambda_1\mathbf{v}_1+\cdots +\lambda_s \mathbf{v}_s=\mathbf{0}
$$
把它写成
$$
\lambda_1\mathbf{v}_1+\cdots +\lambda_s \mathbf{v}_s+ 0 \mathbf{v}_{s+1}+\cdots+ 0 \mathbf{v}_m=\mathbf{0}
$$
由$S$的线性无关性可以推知$ \lambda_1=\cdots=\lambda_s=0$。
因此$\{\mathbf{v}_1,\cdots, \mathbf{v}_s\}$是线性无关的。
:::

::: example
我们知道$\mathbb{R}^3$中向量
$$
\vec{i}=(1,0,0)\quad \vec{j}=(0,1,0)\quad \vec{k}=(0,0,1)
$$
是线性无关的。因此其中任意两个，比如$\vec{i}$和$\vec{j}$，是线性无关的。
:::

::: proposition
假设$\mathbf{v}_1,\cdots, \mathbf{v}_m$线性无关，$\mathbf{u}$是它们的线性组合。则存在唯一的
$\lambda_1, \cdots, \lambda_m\in k$使得
$$
\mathbf{u}=\lambda_1 \mathbf{v}_1+\cdots+\lambda_m \mathbf{v}_m
$$
:::

::: proof
假设$\mathbf{u}$有两个线性表达
$$
\mathbf{u}=\lambda_1 \mathbf{v}_1+\cdots+\lambda_m \mathbf{v}_m\quad \mathbf{u}=\mu_1 \mathbf{v}_1+\cdots+\mu_m \mathbf{v}_m
$$
两式相减我们得到
$$
(\lambda_1-\mu_1) \mathbf{v}_1+\cdots+(\lambda_m-\mu_m) \mathbf{v}_m=\mathbf{0}
$$
由线性无关性可知，$ \lambda_1=\mu_1,\cdots,\lambda_m=\mu_m$。
:::

因此如果$\mathbf{v}_1,\cdots, \mathbf{v}_m$是线性无关的向量，
则$\operatorname{Span}\{\mathbf{v}_1,\cdots, \mathbf{v}_m\}$中任一向量$\mathbf{u}$可以唯一表达为
$$
\mathbf{u}=\lambda_1 \mathbf{v}_1+\cdots+\lambda_m \mathbf{v}_m
$$
因此$\mathbf{u}$可以一一对应于一组数$(\lambda_1,\cdots,\lambda_m)$。
这组数可以想象成标识$\mathbf{u}$的“坐标”。我们之后将会系统讨论这个坐标表达的方法。

::: example
平面$\mathbb{R}^2$中的向量$\vec{v}_1=(1,0)$和$\vec{v}_2=(1,1)$不共线，因此是线性无关的。
它们的线性组合张成整个平面
$$
\mathbb{R}^2=\operatorname{Span}\{\vec{v}_1, \vec{v}_2\}
$$
对于向量$\vec{u}=(a,b)$，我们把它线性表达为
$$
(a,b)=\lambda_1\vec{v}_1+\lambda_2\vec{v}_2=(\lambda_1+\lambda_2, \lambda_2)
$$
对比分量我们可以解出$\lambda_1=a-b, \lambda_2=b$。例如
$$
(3,2)=1\vec{v}_1+2\vec{v}_2
$$
:::

```tikz
\begin{tikzpicture}
  \draw[->, thin] (-1,0) -- (4,0);
  \draw[->, thin] (0,-1) -- (0,3);
  \draw[->, thick, red] (0,0) -- (1,0) node[below, midway] {$\vec{v}_1$};
  \draw[->, thick, red] (0,0) -- (1,1) node[above left, midway] {$\vec{v}_2$};
  \draw[->, thick, red] (1,0) -- (3,2) node[right, midway] {2$\vec{v}_2$};
  \draw[->, thick, blue] (0,0) -- (3,2) node[above right] {$(3,2)={\color{red}{1}}\vec{v}_1+{\color{red}{2}}\vec{v}_2$};
\end{tikzpicture}
```

向量$(3,2)$如果用$\vec{v}_1,\vec{v}_2$来线性表达的话，它被标记的“坐标”是$1$和$2$。
这个和原始的坐标$3$和$2$是不一样的。我们之后会详细讨论它们的关系。

::: definition
设$S, T\subset V$是线性空间$V$的两个子集。
我们称$S$可以由$T$线性表达，如果$S$中的每个向量都可以由$T$线性表达，即
$$
S\subset \operatorname{Span} T
$$
$S$和$T$称为线性等价，如果$S$和$T$可以相互线性表达，即$S$可以被$T$线性表达，$T$可以被$S$线性表达。
:::

::: proposition
$S$可以被$T$线性表达当且仅当$\operatorname{Span}  S\subset \operatorname{Span} T$
:::

::: proof
假设$\operatorname{Span} S\subset \operatorname{Span} T$。
由$S\subset \operatorname{Span} S$ 知$S\subset \operatorname{Span} T$，即$S$可以被$T$线性表达。

反之，假设$S$可以被$T$线性表达。对$\operatorname{Span} S$中任一向量$\mathbf{u}$，它可以线性表达为
$$
\mathbf{u}=\lambda_1 \mathbf{v}_1+\cdots+ \lambda_m \mathbf{v}_m\quad \text{其中}\quad \mathbf{v}_i\in S\subset \operatorname{Span} T
$$
$\operatorname{Span} T$是线性空间，因此$\mathbf{u}\in \operatorname{Span} T$。
:::

::: proposition
$S$和$T$线性等价当且仅当$\operatorname{Span}
 S=\operatorname{Span} T$。
:::

::: proof
由前述命题可知
\[
\begin{aligned}
\text{$S$ 可以被 $T$ 线性表达$\Leftrightarrow\operatorname{Span} S\subset \operatorname{Span} T$}\\
\text{$T$ 可以被 $S$ 线性表达$\Leftrightarrow\operatorname{Span} T\subset \operatorname{Span} S$}
\end{aligned}
\]
因此$S$和$T$线性等价当且仅当$\operatorname{Span}  S=\operatorname{Span}  T$。
:::

::: example
考虑$\mathbb{R}^2$中的向量。
如果两个向量$\vec{v}_1,\vec{v}_2$不共线，另外两个$\vec{u}_1,\vec{u}_2$也不共线，则
$$
\operatorname{Span}\{\vec{v}_1,\vec{v}_2\}=\mathbb{R}^2=\operatorname{Span}\{\vec{u}_1,\vec{u}_2\}
$$
都张成整个平面，故$\{\vec{v}_1,\vec{v}_2\}$与$\{\vec{u}_1,\vec{u}_2\}$线性等价。
:::

::: example
设$S=\{\vec{v}_1,\vec{v}_2\}$是$\mathbb{R}^3$不共线的两个向量，
$T=\{\vec{u}_1,\vec{u}_2\}$是$\mathbb{R}^3$另外两个不共线的向量。则$S$与$T$线性等价当且仅当
$S$和$T$张成$\mathbb{R}^3$中同一个平面。
:::
