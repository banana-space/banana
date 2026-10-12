---
title: 面积元与体积元
---

## 面积*

考虑平面上由向量 $\vec{u} = (u_1, u_2)$ 和 $\vec{v} = (v_1, v_2)$ 张成的平行四边形。

```tikz
\begin{tikzpicture}
  \draw[fill=blue!30] (0,0) -- (3,1) -- (4,3) -- (1,2) -- cycle;
  \draw[->, thick] (0,0) -- (3,1) node[below right] {$\vec{u} = (u_1, u_2)$};
  \draw[->, thick] (0,0) -- (1,2) node[above left] {$\vec{v} = (v_1, v_2)$};
  \draw[thick, dashed] (3,1) -- (4,3);
  \draw[thick, dashed] (1,2) -- (4,3);
\end{tikzpicture}
```

它的面积用这两个向量可以表示为
$$
\text{面积}=|u_1 v_2 - u_2 v_1|
$$

::: example
平行四边形

```tikz
\begin{tikzpicture}
  \draw[fill=blue!30] (0,0) -- (3,1) -- (4,3) -- (1,2) -- cycle;
  \draw[->, thick] (0,0) -- (3,1) node[below right] {$\vec{u} = (3, 1)$};
  \draw[->, thick] (0,0) -- (1,2) node[above left] {$\vec{v} = (1, 2)$};
  \draw[thick, dashed] (3,1) -- (4,3);
  \draw[thick, dashed] (1,2) -- (4,3);
\end{tikzpicture}
```

的面积为
$$
\text{面积}=|3\times 2 - 1\times  1|=5
$$
:::

我们引入下面的记号表达
$$
\begin{vmatrix}
   u_1 & u_2\\ v_1 & v_2
\end{vmatrix}:= u_1v_2-u_2 v_1
$$
称为$2\times 2$矩阵
$
A=\begin{bmatrix}
   u_1 & u_2\\ v_1 & v_2
\end{bmatrix}
$的行列式。平行四边形面积为行列式$\begin{vmatrix}
   u_1 & u_2\\ v_1 & v_2
\end{vmatrix}$的绝对值。

观察到如果交换两行
$$
\begin{vmatrix}
   u_1 & u_2\\ v_1 & v_2
\end{vmatrix}= u_1v_2-u_2 v_1
\qquad
\begin{vmatrix}
   v_1 & v_2\\ u_1 & u_2
\end{vmatrix}= v_1u_2-v_2 u_1
$$
即
$$
\begin{vmatrix}
   u_1 & u_2\\ v_1 & v_2
\end{vmatrix}=-\begin{vmatrix}
   v_1 & v_2\\ u_1 & u_2
\end{vmatrix}
$$
我们可以把$\begin{vmatrix}
   u_1 & u_2\\ v_1 & v_2
\end{vmatrix}$理解为带符号的面积。这个符号和定向有关，即两个向量的相互顺序。

如果我们把其中一个向量做伸缩，那么面积也相应的伸缩。因此我们有如下性质
$$
\begin{vmatrix}
   \lambda u_1 & \lambda u_2\\ v_1 & v_2
\end{vmatrix}=\lambda \begin{vmatrix}
   u_1 & u_2\\ v_1 & v_2
\end{vmatrix}= \begin{vmatrix}
   u_1 & u_2\\ \lambda v_1 & \lambda v_2
\end{vmatrix}
$$

我们可以用一个代数方法来表述$2\times 2$矩阵的行列式。对于两个向量$\vec{u}, \vec{v}$，我们引入符号
$$
\vec{u}\wedge \vec{v}
$$
称为它们的**外积**。外积的基本运算规则是

- 反对称性：$\vec{u}\wedge \vec{v}=-\vec{v}\wedge \vec{u}$，特别有$\vec{u}\wedge \vec{u}=0$

- 线性性：
  \[
  \begin{aligned}
  &(\vec{u}+\vec{v})\wedge \vec{w}=\vec{u}\wedge \vec{w}+ \vec{v}\wedge \vec{w} \\
  &\vec{u}\wedge (\vec{v}+\vec{w})= \vec{u}\wedge \vec{v}+\vec{u}\wedge \vec{w}\\
  &(\lambda \vec{u})\wedge \vec{v}=\lambda (\vec{u}\wedge \vec{v})=\vec{u}\wedge (\lambda \vec{v})
  \end{aligned}
  \]

我们不详细讨论外积的构造，我们通过一些例子来熟悉这个运算。记$\mathbb{R} ^2$的标准基为
$$
\vec{e}_1=(1,0)\quad \vec{e}_2=(0,1)
$$
对向量
$\vec{u}=(u_1, u_2)=u_1 \vec{e}_1+ u_2 \vec{e}_2, \vec{v}=(v_1,v_2)=v_1\vec{e}_1+v_2\vec{e}_2,$
其外积为
\[
\begin{aligned}
\vec{u}\wedge \vec{v}&=(u_1 \vec{e}_1+ u_2 \vec{e}_2)\wedge \vec{v}=u_1 \vec{e}_1\wedge \vec{v}+ u_2 \vec{e}_2\wedge \vec{v}\\
&=u_1 \vec{e}_1\wedge (v_1\vec{e}_1+v_2\vec{e}_2)+ u_2 \vec{e}_2\wedge (v_1\vec{e}_1+v_2\vec{e}_2)
\\
&=u_1v_2 \vec{e}_1\wedge \vec{e}_2+ u_2v_1 \vec{e}_2\wedge \vec{e}_1\\
&=(u_1v_2-u_2v_1)\vec{e}_1\wedge \vec{e}_2
\end{aligned}
\]

我们观察到
$$
\vec{u}\wedge \vec{v}=\begin{vmatrix}
   u_1 & u_2\\ v_1 & v_2
\end{vmatrix}\vec{e}_1\wedge \vec{e}_2
$$
因此外积不仅给出了一个便于记忆的行列式的计算方法，而且给出了它的几何解释：

- $\vec{u}\wedge \vec{v}$是$\vec{u}, \vec{v}$张成的平行四边形的面积元

- $\vec{e}_1\wedge \vec{e}_2$是单位向量$\vec{e}_1,\vec{e}_2$张成的单位面积元

它们之间的比例就是平行四边形面积（带符号）。

::: example
计算$\vec{u}=(2,1), \vec{v}=(1,-1)$张成平行四边形面积

```tikz
\begin{tikzpicture}
  \draw[fill=blue!30] (0,0) -- (1,-1) -- (3,0) -- (2,1) -- cycle;
  \draw[->, thick] (0,0) -- (2,1) node[above right] {\small $\vec{u} = (2, 1)$};
  \draw[->, thick] (0,0) -- (1,-1) node[below left] {\small $\vec{v} = (1, -1)$};
\end{tikzpicture}
```

$$
\begin{vmatrix}
 2 & 1\\ 1 & -1
\end{vmatrix}=2\cdot (-1)-1 \cdot 1=-3
$$
这里的负号是由于$\vec{u}, \vec{v}$的定向顺序（顺时针）和$\vec{e}_1, \vec{e}_2$
的定向顺序（逆时针）相反。平行四边形的面积为$3$。
:::

## 体积*

考虑空间中由向量 $\vec{u} = (u_1, u_2, u_3)$，
$\vec{v} = (v_1, v_2, v_3)$ 和 $\vec{w} = (w_1, w_2, w_3)$ 张成的平行六面体。

```tikz
\begin{tikzpicture}[scale=1.5]
  \draw[->, thick] (0,0,0) -- (2,1,0) node[right] {$\vec{w}$};
  \draw[->, thick] (0,0,0) -- (1,2,1) node[right] {$\vec{v}$};
  \draw[->, thick] (0,0,0) -- (1,0,1.5) node[right] {$\vec{u}$};
  \draw[dashed] (2,1,0) -- (3,3,1) -- (1,2,1);
  \draw[dashed] (2,1,0) -- (3,1,1.5) -- (1,0,1.5);
  \draw[dashed] (1,2,1) -- (2,2,2.5) -- (1,0,1.5);
  \draw (3,3,1) -- (4,3,2.5) -- (3,1,1.5);
  \draw (4,3,2.5) -- (2,2,2.5);
\end{tikzpicture}
```

我们同样可以通过这3个向量的坐标来计算它的体积。

回顾与空间$\mathbb{R} ^3$中的向量相关的基本构造：

- 长度：$\vec{v}=(v_1,v_2,v_3)$的长度$|\vec{v}|:=\sqrt{v_1^2+v_2^2+v_3^2}$

- 点乘（内积）：$\vec{v}=(v_1,v_2,v_3), \ \vec{w}=(w_1,w_2,w_3)$
  $$
  \vec{v}\cdot \vec{w}:= v_1w_1+v_2w_2+v_3w_3
  $$

  点乘（内积）的几何含义为

  ```tikz
  \begin{tikzpicture}[x=0.75pt,y=0.75pt,yscale=-1,xscale=1,scale=0.8]
  \draw    (95,172) -- (238,170.03) ;
  \draw [shift={(240,170)}, rotate = 179.21] [color={rgb, 255:red, 0; green, 0; blue, 0 }  ][line width=0.75]    (10.93,-3.29) .. controls (6.95,-1.4) and (3.31,-0.3) .. (0,0) .. controls (3.31,0.3) and (6.95,1.4) .. (10.93,3.29)   ;
  \draw    (95,172) -- (177.56,92.39) ;
  \draw [shift={(179,91)}, rotate = 136.04] [color={rgb, 255:red, 0; green, 0; blue, 0 }  ][line width=0.75]    (10.93,-3.29) .. controls (6.95,-1.4) and (3.31,-0.3) .. (0,0) .. controls (3.31,0.3) and (6.95,1.4) .. (10.93,3.29)   ;
  \draw  [draw opacity=0] (126.66,144.03) .. controls (132.59,145.15) and (137.65,149.24) .. (139.56,155.17) .. controls (141.29,160.57) and (140.01,166.24) .. (136.63,170.51) -- (122.84,160.54) -- cycle ; \draw   (126.66,144.03) .. controls (132.59,145.15) and (137.65,149.24) .. (139.56,155.17) .. controls (141.29,160.57) and (140.01,166.24) .. (136.63,170.51) ;
  \draw (223,177) node [anchor=north west][inner sep=0.75pt]    {$\vec{w}$};
  \draw (144,70) node [anchor=north west][inner sep=0.75pt]    {$\vec{v}$};
  \draw (143,140) node [anchor=north west][inner sep=0.75pt]    {$\theta $};
  \draw (238,113) node [anchor=north west][inner sep=0.75pt]    {$\vec{v} \cdot \vec{w} \ \ =|\vec{v} \ ||\vec{w} \ |\cos \theta $};
  \end{tikzpicture}
  ```

  例如 $\vec{v}\cdot \vec{v}=|\vec{v}|^2$。

- 叉乘：$\vec{v}=(v_1,v_2,v_3), \ \vec{w}=(w_1,w_2,w_3)$的叉乘为
  $$
  \vec{v}\times \vec{w}:=(v_2w_3-v_3w_2, v_3w_1-v_1w_3, v_1w_2-v_2w_1)
  $$
  $\vec{v}\times \vec{w}$是$\mathbb{R} ^3$中的向量，其方向与$\vec{v}$和$\vec{w}$垂直，
  指向按照右手拇指法则，长度为$\vec{v}$和$\vec{w}$围成的平行四边形面积。

  ```tikz
  \begin{tikzpicture}[x=0.75pt,y=0.75pt,yscale=-1,xscale=1,scale=0.8]
  \draw    (199,214) -- (342,212.03) ;
  \draw [shift={(344,212)}, rotate = 179.21] [color={rgb, 255:red, 0; green, 0; blue, 0 }  ][line width=0.75]    (10.93,-3.29) .. controls (6.95,-1.4) and (3.31,-0.3) .. (0,0) .. controls (3.31,0.3) and (6.95,1.4) .. (10.93,3.29)   ;
  \draw  [dash pattern={on 0.84pt off 2.51pt}]  (199,214) -- (281.56,134.39) ;
  \draw [shift={(283,133)}, rotate = 136.04] [color={rgb, 255:red, 0; green, 0; blue, 0 }  ][line width=0.75]    (10.93,-3.29) .. controls (6.95,-1.4) and (3.31,-0.3) .. (0,0) .. controls (3.31,0.3) and (6.95,1.4) .. (10.93,3.29)   ;
  \draw  [draw opacity=0] (230.66,186.03) .. controls (236.59,187.15) and (241.65,191.24) .. (243.56,197.17) .. controls (245.29,202.57) and (244.01,208.24) .. (240.63,212.51) -- (226.84,202.54) -- cycle ; \draw   (230.66,186.03) .. controls (236.59,187.15) and (241.65,191.24) .. (243.56,197.17) .. controls (245.29,202.57) and (244.01,208.24) .. (240.63,212.51) ;
  \draw    (199,214) -- (201.96,80) ;
  \draw [shift={(202,78)}, rotate = 91.26] [color={rgb, 255:red, 0; green, 0; blue, 0 }  ][line width=0.75]    (10.93,-3.29) .. controls (6.95,-1.4) and (3.31,-0.3) .. (0,0) .. controls (3.31,0.3) and (6.95,1.4) .. (10.93,3.29)   ;
  \draw (327,219) node [anchor=north west][inner sep=0.75pt]    {\small $\vec{v}$};
  \draw (248,112) node [anchor=north west][inner sep=0.75pt]    {\small $\vec{w}$};
  \draw (247,182) node [anchor=north west][inner sep=0.75pt]    {\small $\theta $};
  \draw (351,115) node [anchor=north west][inner sep=0.75pt]    {\small $|\vec{w} \ \times \ \vec{v} |\ =|\vec{w} \ ||\vec{v} \ |\sin \theta $};
  \draw (140,74) node [anchor=north west][inner sep=0.75pt]    {\small $\vec{v} \times \vec{w}$};
  \end{tikzpicture}
  ```

::: example
对于$\mathbb{R} ^3$中的标准基

```tikz
\begin{tikzpicture}[x=0.75pt,y=0.75pt,yscale=-1,xscale=1,scale=0.9]
\draw    (169,143) -- (99.37,217.54) ;
\draw [shift={(98,219)}, rotate = 313.05] [color={rgb, 255:red, 0; green, 0; blue, 0 }  ][line width=0.75]    (10.93,-3.29) .. controls (6.95,-1.4) and (3.31,-0.3) .. (0,0) .. controls (3.31,0.3) and (6.95,1.4) .. (10.93,3.29)   ;
\draw    (169,143) -- (281,143) ;
\draw [shift={(283,143)}, rotate = 180] [color={rgb, 255:red, 0; green, 0; blue, 0 }  ][line width=0.75]    (10.93,-3.29) .. controls (6.95,-1.4) and (3.31,-0.3) .. (0,0) .. controls (3.31,0.3) and (6.95,1.4) .. (10.93,3.29)   ;
\draw    (169,143) -- (168.02,45) ;
\draw [shift={(168,43)}, rotate = 89.43] [color={rgb, 255:red, 0; green, 0; blue, 0 }  ][line width=0.75]    (10.93,-3.29) .. controls (6.95,-1.4) and (3.31,-0.3) .. (0,0) .. controls (3.31,0.3) and (6.95,1.4) .. (10.93,3.29)   ;
\draw (36,167) node [anchor=north west][inner sep=0.75pt]    {\small $\vec{e}_1 =( 1,0,0)$};
\draw (225,148) node [anchor=north west][inner sep=0.75pt]    {\small $\vec{e}_2 =(0,1,0)$};
\draw (122,16) node [anchor=north west][inner sep=0.75pt]    {\small $\vec{e}_3 =( 0,0,1)$};
\draw (306,38) node [anchor=north west][inner sep=0.75pt]    {\small $ \begin{array}{l}
\vec{e}_1 \times \vec{e}_2 =\vec{e}_3 =-\vec{e}_2 \times \vec{e}_1\\
\vec{e}_2 \times \vec{e}_3 =\vec{e}_1 =-\vec{e}_3 \times \vec{e}_2\\
\vec{e}_3 \times \vec{e}_1 =\vec{e}_2 =-\vec{e}_1 \times \vec{e}_3
\end{array}$};
\end{tikzpicture}
```

:::

由平行六面体的体积公式：
体积=底面积$\times$高。我们把$\vec{v},\vec{w}$张成的面作为底面，得到
$$
\text{体积}=\vec{u}\cdot(\vec{v}\times \vec{w})\ \text{的绝对值}
$$
同样，我们可以把$\vec{u}\cdot(\vec{v}\times \vec{w})$理解为带符号的体积。
它的正负号和3个向量$\vec{u},\vec{v},\vec{w}$的定向有关。

::: definition
定义$3\times 3$矩阵的行列式为
$$
\begin{vmatrix}
 u_1 & u_2 & u_3\\
 v_1 & v_2 & v_3\\
 w_1 & w_2 & w_3
\end{vmatrix}:=\vec{u}\cdot(\vec{v}\times \vec{w})
$$
:::

由$
\vec{v}\times \vec{w}=(v_2w_3-v_3w_2, v_3w_1-v_1w_3, v_1w_2-v_2w_1)
$
$$
\begin{vmatrix}
 u_1 & u_2 & u_3\\
 v_1 & v_2 & v_3\\
 w_1 & w_2 & w_3
\end{vmatrix}=u_1(v_2w_3-v_3w_2)-u_2(v_1w_3-v_3w_1)+u_3(v_1w_2-v_2w_1)
$$

叉乘满足反对称性：
\[
\vec{v}\times \vec{w}=-\vec{w}\times \vec{v}\quad \text{特别地}\quad \vec{v}\times \vec{v}=0
\]
由此对于$3\times 3$的行列式，如果对换其中任何两行则行列式的值差一个负号。例如
$$
\begin{vmatrix}
 u_1 & u_2 & u_3\\
 v_1 & v_2 & v_3\\
 w_1 & w_2 & w_3
\end{vmatrix}=-\begin{vmatrix}
 u_1 & u_2 & u_3\\
 w_1 & w_2 & w_3\\
 v_1 & v_2 & v_3
\end{vmatrix}
=-\begin{vmatrix}
 v_1 & v_2 & v_3\\
 u_1 & u_2 & u_3\\
 w_1 & w_2 & w_3
\end{vmatrix}
$$

特别地，如果有两行向量相同，则行列式为$0$
$$
\begin{vmatrix}
 u_1 & u_2 & u_3\\
 u_1 & u_2 & u_3\\
 w_1 & w_2 & w_3
\end{vmatrix}=0
$$
几何上，当$\vec{v}=\vec{u}$时，平行六面体塌缩成一个二维面，其体积为$0$。

如果我们把其中一个向量做伸缩，那么体积也相应的伸缩。即我们有如下性质
$$
\begin{vmatrix}
 \lambda u_1 & \lambda u_2 & \lambda u_3\\
 v_1 & v_2 & v_3\\
 w_1 & w_2 & w_3
\end{vmatrix}=\begin{vmatrix}
  u_1 & u_2 & u_3\\
\lambda v_1 & \lambda v_2 & \lambda v_3\\
 w_1 & w_2 & w_3
\end{vmatrix}=\lambda \begin{vmatrix}
 u_1 & u_2 & u_3\\
 v_1 & v_2 & v_3\\
 w_1 & w_2 & w_3
\end{vmatrix}
$$

我们同样可以用外积来表示体积元和行列式。对于$\mathbb{R} ^3$中的$3$个向量，考虑它们的外积
$$
\vec{u}\wedge \vec{v} \wedge \vec{w}
$$
外积的代数运算法则和$\mathbb{R} ^2$的情况一样，满足：

- 反对称性：交换任意两个向量差一个负号
  $$
  \vec{u}\wedge \vec{v} \wedge \vec{w}=-\vec{v}\wedge \vec{u} \wedge \vec{w}=-\vec{u}\wedge \vec{w} \wedge \vec{v}=-\vec{w}\wedge \vec{v} \wedge \vec{u}
  $$

- 线性性：关于各分量都具有线性性，例如
  $$
  \vec{u}\wedge (\vec{v}_1+\vec{v}_2) \wedge \vec{w}=\vec{u}\wedge \vec{v}_1 \wedge \vec{w}+\vec{u}\wedge \vec{v}_2 \wedge \vec{w}
  $$

记$\mathbb{R} ^3$的标准基为
$$
\vec{e}_1=(1,0,0)\quad \vec{e}_2=(0,1,0)\quad \vec{e}_3=(0,0,1)
$$
对于向量
\[
\begin{aligned}
\vec{u}&=(u_1,u_2,u_3)=u_1 \vec{e}_1+ u_2 \vec{e}_2+ u_3 \vec{e}_3\\
\vec{v}&=(v_1,v_2,v_3)=v_1 \vec{e}_1+ v_2 \vec{e}_2+ v_3 \vec{e}_3\\
\vec{w}&=(w_1,w_2,w_3)=w_1 \vec{e}_1+ w_2 \vec{e}_2+ w_3 \vec{e}_3
\end{aligned}
\]
我们可以按照外积的运算法则来计算$\vec{u}\wedge \vec{v} \wedge \vec{w}$
\[
\begin{aligned}
\vec{u}\wedge \vec{v} \wedge \vec{w}=u_1 \vec{e}_1\wedge \vec{v} \wedge \vec{w}+u_2\vec{e}_2\wedge \vec{v} \wedge \vec{w}+u_3\vec{e}_3\wedge \vec{v} \wedge \vec{w}
\end{aligned}
\]
其中
\[
\begin{aligned}
\vec{e}_1\wedge \vec{v} \wedge \vec{w}=&\vec{e}_1\wedge (v_2 \vec{e}_2+v_3 \vec{e}_3) \wedge (w_2 \vec{e}_2+w_3 \vec{e}_3)\\
=&(v_2w_3-v_3w_2) \vec{e}_1\wedge\vec{e}_2\wedge\vec{e}_3
\end{aligned}
\]
因此
\[
\begin{aligned}
&\vec{u}\wedge \vec{v} \wedge \vec{w}\\=& u_1 \vec{e}_1\wedge \vec{v} \wedge \vec{w}+u_2\vec{e}_2\wedge \vec{v} \wedge \vec{w}+u_3\vec{e}_3\wedge \vec{v} \wedge \vec{w}\\
=&u_1(v_2w_3-v_3w_2)\vec{e}_1\wedge\vec{e}_2\wedge\vec{e}_3 + u_2(v_1w_3-v_3w_1)\vec{e}_2\wedge\vec{e}_1\wedge\vec{e}_3  + u_3(v_1w_2-v_2w_1) \vec{e}_3\wedge\vec{e}_1\wedge\vec{e}_2\\
=&\left(u_1(v_2w_3-v_3w_2)-u_2(v_1w_3-v_3w_1)+u_3(v_1w_2-v_2w_1) \right)\vec{e}_1\wedge\vec{e}_2\wedge\vec{e}_3
\end{aligned}
\]

对比行列式的公式，我们发现
$$
\vec{u}\wedge \vec{v} \wedge \vec{w}=\begin{vmatrix}
 u_1 & u_2 & u_3\\
 v_1 & v_2 & v_3\\
 w_1 & w_2 & w_3
\end{vmatrix} \vec{e}_1\wedge\vec{e}_2\wedge\vec{e}_3
$$
这给出了$3\times 3$矩阵行列式的几何解释：

- $\vec{u}\wedge \vec{v} \wedge \vec{w}$是$\vec{u}, \vec{v}, \vec{w}$张成平行六面体的体积元

- $\vec{e}_1\wedge \vec{e}_2\wedge \vec{e}_3$是单位向量$\vec{e}_i$张成的单位体积元

它们之间的比例就是平行六面体体积（带符号），即$3\times 3$矩阵的行列式
$$
 \begin{vmatrix}
 u_1 & u_2 & u_3\\
 v_1 & v_2 & v_3\\
 w_1 & w_2 & w_3
\end{vmatrix}
$$

利用外积的反对称性：
$$
\vec{u}\wedge \vec{v} \wedge \vec{w}=-\vec{u}\wedge \vec{w} \wedge \vec{v}=-\vec{v}\wedge \vec{u} \wedge \vec{w}
$$
我们很容易得出前述行列式的反对称性
$$
\begin{vmatrix}
 u_1 & u_2 & u_3\\
 v_1 & v_2 & v_3\\
 w_1 & w_2 & w_3
\end{vmatrix}=-\begin{vmatrix}
 u_1 & u_2 & u_3\\
 w_1 & w_2 & w_3\\
 v_1 & v_2 & v_3
\end{vmatrix}
=-\begin{vmatrix}
 v_1 & v_2 & v_3\\
 u_1 & u_2 & u_3\\
 w_1 & w_2 & w_3
\end{vmatrix}
$$

利用外积的线性性，例如
$$
\vec{u}\wedge (\lambda\vec{v}+\mu\vec{q}) \wedge \vec{w}=\lambda \vec{u}\wedge \vec{v} \wedge \vec{w}+\mu\vec{u}\wedge \vec{q} \wedge \vec{w}
$$
我们得出行列式关于任一行的线性性
\[
\begin{aligned}
&\begin{vmatrix}
 u_1 & u_2 & u_3\\
 \lambda v_1+\mu q_1 & \lambda v_2+\mu q_2 & \lambda v_3+\mu q_3\\
 w_1 & w_2 & w_3
\end{vmatrix}
=\lambda \begin{vmatrix}
 u_1 & u_2 & u_3\\
 v_1 & v_2 & v_3\\
 w_1 & w_2 & w_3
\end{vmatrix}+\mu\begin{vmatrix}
 u_1 & u_2 & u_3\\
 q_1 & q_2 & q_3\\
 w_1 & w_2 & w_3
\end{vmatrix}
\end{aligned}
\]

最后，由行列式的具体公式
$$
\begin{vmatrix}
 u_1 & u_2 & u_3\\
 v_1 & v_2 & v_3\\
 w_1 & w_2 & w_3
\end{vmatrix}=u_1(v_2w_3-v_3w_2)-u_2(v_1w_3-v_3w_1)+u_3(v_1w_2-v_2w_1)
$$
我们得到$3$阶行列式和$2$阶行列式之间的关系
$$
\begin{vmatrix}
 u_1 & u_2 & u_3\\
 v_1 & v_2 & v_3\\
 w_1 & w_2 & w_3
\end{vmatrix}=u_1\begin{vmatrix} v_2 & v_3\\ w_2 & w_3\end{vmatrix}-u_2\begin{vmatrix} v_1 & v_3\\ w_1 & w_3\end{vmatrix}+u_3\begin{vmatrix} v_1 & v_2\\ w_1 & w_2\end{vmatrix}
$$
我们将看到一般的行列式都有类似的性质。

::: example
\[
\begin{aligned}
\begin{vmatrix}
1 & 2 & 3 \\
0 & -1 & 4 \\
2 & 1 & -2
\end{vmatrix}  = &
1 \cdot \begin{vmatrix}
-1 & 4 \\
1 & -2
\end{vmatrix} -
2 \cdot \begin{vmatrix}
0 & 4 \\
2 & -2
\end{vmatrix} +
3 \cdot \begin{vmatrix}
0 & -1 \\
2 & 1
\end{vmatrix}\\
=& 1\cdot (2-4)-2\cdot (0-8)+3 \cdot (0-(-2))\\
=& -2+16+6=20
\end{aligned}
\]
:::

::: example [3维空间叉乘的行列式表示]
$\mathbb{R} ^3$中两个向量$\vec{v}=(v_1,v_2,v_3), \ \vec{w}=(w_1,w_2,w_3)$的叉乘
$$
\vec{v}\times \vec{w}=(v_2w_3-v_3w_2, v_3w_1-v_1w_3, v_1w_2-v_2w_1)
$$
可以表达为行列式
$$
\vec{v}\times \vec{w}=\begin{vmatrix}
\vec{e}_1 & \vec{e}_2 & \vec{e}_3\\
v_1 & v_2 & v_3\\
w_1 & w_2 & w_3
\end{vmatrix}
$$
这里行列式的第一行为$\mathbb{R} ^3$的标准基。
虽然第一行的元素不是数字，我们还是形式地用如上行列式的公式来计算。可以看出
\[
\begin{aligned}
\begin{vmatrix}
\vec{e}_1 & \vec{e}_2 & \vec{e}_3\\
v_1 & v_2 & v_3\\
w_1 & w_2 & w_3
\end{vmatrix}=&\begin{vmatrix}
v_2 & v_3\\
w_2 & w_3
\end{vmatrix} \vec{e}_1- \begin{vmatrix}
v_1 &  v_3\\
w_1 &  w_3
\end{vmatrix}\vec{e}_2+ \begin{vmatrix}
v_1 & v_2 \\
w_1 & w_2
\end{vmatrix}\vec{e}_3\\
=&(v_2w_3-v_3w_2, v_3w_1-v_1w_3, v_1w_2-v_2w_1)=\vec{v}\times \vec{w}
\end{aligned}
\]
:::
