---
title: Pascal 定理
categories: [初等几何]
notices:
  - name: 问题
    items:
      - “用射影几何”一节中的点 $A$–$F$、$P$、$Q$、$X$、$Y$、$Z$ 没有说明，与定理陈述中的记号不一致，且缺少相应的图。
      - “用椭圆曲线的群结构”一节的论证过于简略，没有说明图中各点与定理中六点的对应关系。
navboxes: [Euclid 几何]
---

**Pascal 定理**是个[[射影几何]]定理，
说的是[[圆锥曲线]]上的三对点如下图般交叉连线，产生的三个交点共线。

```tikz
\usetikzlibrary{arrows}
\begin{tikzpicture}[line cap=round,line join=round,>=triangle 45,x=1.0cm,y=1.0cm]
\clip(-4.369944444771729,-4.184526419671727) rectangle (4.413260280400763,4.372888071062797);
\draw [rotate around={45.:(0.,0.)},line width=0.8pt] (0.,0.) ellipse (4.242640687119285cm and 3.cm);
\draw [line width=0.8pt,color=yellow,domain=-4.369944444771729:4.413260280400763] plot(\x,{(-2.6436407132837627-2.628899900861959*\x)/5.552804804088902});
\draw [line width=0.8pt,color=yellow,domain=-4.369944444771729:4.413260280400763] plot(\x,{(-12.034198383529674-5.982462110111134*\x)/-2.0390098804865975});
\draw [line width=0.8pt,color=cyan,domain=-4.369944444771729:4.413260280400763] plot(\x,{(--11.323556719597038-2.504893961311211*\x)/4.585507145402472});
\draw [line width=0.8pt,color=cyan,domain=-4.369944444771729:4.413260280400763] plot(\x,{(--12.018174523900065-5.3122251674098235*\x)/0.840424772951256});
\draw [line width=0.8pt,color=magenta,domain=-4.369944444771729:4.413260280400763] plot(\x,{(--4.965422025571348-0.4531540083167076*\x)/6.625068530431764});
\draw [line width=0.8pt,color=magenta,domain=-4.369944444771729:4.413260280400763] plot(\x,{(-5.9952656596437475-6.614047423664497*\x)/-4.711828526594951});
\draw [line width=0.8pt,dash pattern=on 3pt off 3pt,domain=-4.369944444771729:4.413260280400763] plot(\x,{(--3.367617935364185--0.9401802570523993*\x)/3.920548715277844});
\begin{scriptsize}
\draw [fill=red] (-3.0258531516201703,0.9564579567289104) circle (1.0pt);
\draw [fill=red] (-3.0253016470774754,-2.974264200387721) circle (1.0pt);
\draw [fill=green] (-0.9862917665908781,3.008197909723414) circle (1.0pt);
\draw [fill=green] (2.5269516524687314,-1.6724419441330485) circle (1.0pt);
\draw [fill=blue] (1.6865268795174755,3.6397832232767753) circle (1.0pt);
\draw [fill=blue] (3.5992153788115937,0.5033039484122028) circle (1.0pt);
\draw [fill=yellow] (-1.8718077683058236,0.41009086823495744) circle (1.0pt);
\draw [fill=magenta] (-0.35520160942779855,0.7737856650231523) circle (1.0pt);
\draw [fill=cyan] (2.0487409469720204,1.3502711252873567) circle (1.0pt);
\end{scriptsize}
\end{tikzpicture}
```

## 陈述

::: theorem
[[圆锥曲线]] $\Gamma$ 上有六个点 $A_1,A_2,A_3$，
$B_1,B_2,B_3$。分别以 $\ell_1,\ell_2,\ell_3$ 记直线
$A_2B_3,A_3B_1,A_1B_2$，以 $m_1,m_2,m_3$ 记直线
$A_3B_2,A_1B_3,A_2B_1$，再以 $X_1,X_2,X_3$ 记交点
$\ell_1m_1,\ell_2m_2,\ell_3m_3$。则 $X_1,X_2,X_3$
共线。
:::

它的对偶是 [[Brianchon 定理]]；
圆锥曲线退化为两条直线的情形是 [[Pappus 定理]]（见下文的注）；
[[Cayley–Bacharach 定理]]是它的推广。

## 证明

### 用坐标几何

在坐标平面考虑问题，并以曲线的字母表示定义它的多项式。具体地说，
以 $\Gamma$ 表示二次多项式，使得方程 $\Gamma=0$ 定义圆锥曲线
$\Gamma$，六条直线类同。把两组三条直线的定义多项式乘起来，
得到两个三次多项式 $\ell_1\ell_2\ell_3$ 与 $m_1m_2m_3$。
由于这两组三条直线不同，这两个三次多项式线性无关。由条件，
它们都在 $A_1,A_2,A_3$，$B_1,B_2,B_3$，$X_1,X_2,X_3$ 为零。
任取点 $C\in\Gamma$ 异于 $A_1,A_2,A_3$，$B_1,B_2,B_3$，
然后适当取不全为零的系数 $\lambda,\mu$ 使得
$\lambda\ell_1\ell_2\ell_3+\mu m_1m_2m_3$ 在 $C$ 处为零。
现在三次多项式 $\lambda\ell_1\ell_2\ell_3+\mu m_1m_2m_3$
与二次多项式 $\Gamma$ 有至少七个公共零点：$A_1,A_2,A_3$，
$B_1,B_2,B_3$，$C$。由于 $7>3\times2$，这说明它们有公因子。
由于 $\Gamma$ 是圆锥曲线，并非两条直线，为不可约，
所以只可能是它整除 $\lambda\ell_1\ell_2\ell_3+\mu m_1m_2m_3$。
于是设
$$
\lambda\ell_1\ell_2\ell_3+\mu m_1m_2m_3=f\Gamma,
$$
则 $f$ 为一次多项式，零点集为直线。上式左边在 $X_1,X_2,X_3$ 为零，
而由于圆锥曲线和直线只能交两个点，$\Gamma$ 在这三点不为零，
所以只有 $f$ 在这三个点为零，即 $X_1,X_2,X_3$ 共线。

::: remark
这里用到 $\Gamma$ 不可约。当 $\Gamma$ 是两条相异直线相乘时，
在上述证明中取 $C$ 为两线交点，不难得到同样的结论。这就是
[[Pappus 定理]]。
:::

::: remark
由此可见 Pascal 定理在任何[[域]]的[[射影平面]]上都成立。
:::

### 用 Euclid 几何

![](Pascal_theorem.jpg?width=200)

利用[[射影变换]]，实际上只需证明圆锥曲线为[[圆]]的情形。
为了证明 $X_1,X_2,X_3$ 共线，实际上只需要证明
$\angle A_1X_2X_3=\angle B_3X_2X_1$，或者
$\angle B_1X_2X_3=\angle A_3X_2X_1$。
注意到下面的引理：

::: lemma
设 $\alpha,\beta,\gamma,\delta>0$，满足
$\alpha+\beta=\gamma+\delta<\pi$。如果
\[
\frac{\sin\alpha}{\sin\beta}=\frac{\sin\gamma}{\sin\delta}
\]
则 $\alpha=\gamma,\beta=\delta$。
:::

引理的证明是基本的三角运算。根据引理，只需要证明
\[
\frac{\sin\angle A_1X_2X_3}{\sin\angle B_1X_2X_3}
=\frac{\sin\angle B_3X_2X_1}{\sin\angle A_3X_2X_1}
\]
根据[[正弦定理]]：
\[
\frac{\sin\angle A_1X_2X_3}{\sin\angle X_2A_1X_3}
=\frac{A_1X_3}{X_2X_3},
\frac{\sin\angle B_1X_2X_3}{\sin\angle X_2B_1X_3}
=\frac{B_1X_3}{X_2X_3}
\]
于是
\[
\frac{\sin\angle A_1X_2X_3}{\sin\angle B_1X_2X_3}
=\frac{A_1X_3}{B_1X_3}\cdot
\frac{\sin\angle X_2A_1X_3}{\sin\angle X_2B_1X_3}
\]
进一步，根据圆的性质
\[
\frac{A_1X_3}{B_1X_3}=\frac{A_1A_2}{B_1B_2},\frac{\sin\angle X_2A_1X_3}{\sin\angle X_2B_1X_3}=\frac{B_2B_3}{A_2A_3}
\]
所以
\[
\frac{\sin\angle A_1X_2X_3}{\sin\angle B_1X_2X_3}=\frac{A_1A_2\cdot B_2B_3}{B_1B_2\cdot A_2A_3}
\]
同理可证得$\dfrac{\sin\angle B_3X_2X_1}{\sin\angle A_3X_2X_1}$
也是此值。

### 用3D几何

[Dandelin 的三维证明](https://math.stackexchange.com/questions/4273954/dandelins-proof-of-pascals-theorem)
利用[[单叶双曲面]]来提升问题至三维空间。具体步骤如下：

在给定的单叶双曲面上，取其两组[[母线]]分别为红线和蓝线。

从中选择各三条交替颜色的直线构成一个非平面六边形。

每个顶点处构成的角平面（由该顶点两边确定）与对应对角顶点的角平面相交于一条直线。

当用平面与双曲面相交得到圆锥曲线时，这些角平面交线正好落在平面上，从而证明了对边交点共线。

### 用射影几何

采用射影变换保持[[交比]]的证明如下：

四元组 $ABCE$ 从点 $D$ 投影到直线 $AB$ 得到四元组 $ABPX$，

四元组 $ABCE$ 从点 $F$ 投影到直线 $BC$ 得到四元组 $QBCY$。

因此有
$$
R(AB; PX) = R(QB; CY),
$$
这两个四元组中的一个点$B$重合，所以连接其他3组对应点的直线 $AQ,PC,XY$ 必共点，
从而得出 $X,Y,Z$ 共线。

### 用椭圆曲线的群结构

$\Gamma$ 与直线 $X_1X_2$ 的并集为一条退化的[[椭圆曲线]]，
椭圆曲线的群结构具有结合律，$(A+B)+C=A+(B+C)$，
故 $A,B+C,(-A-B)-C$ 三点共线。

```tikz
\begin{tikzpicture}
\draw (0.,0.) circle (2.cm);
\draw (-1.6144748594411353,1.1804536959290384)-- (1.1112647554172845,-1.6628561703789546);
\draw (-2.31,0.026)-- (2.42,0.026);
\draw (-1.561569863199769,-1.249599760861955)-- (-0.34294549060959584,1.9703777278660413);
\draw (-0.34294549060959584,1.9703777278660413)-- (1.1112647554172845,-1.6628561703789546);
\draw (0.9324590786272381,1.7693275747259585)-- (-0.1410589909123262,-1.99501938864834);
\draw [dash pattern=on 3pt off 3pt] (-1.6144748594411353,1.1804536959290384)-- (-0.1410589909123262,-1.99501938864834);
\draw (-1.561569863199769,-1.249599760861955)-- (0.9324590786272381,1.7693275747259585);
\begin{scriptsize}
\tikzset{every node/.style={blue}}
\draw[fill=blue](-1.6144748594411353,1.1804536959290384) circle (2pt);
\draw (-1.8,1.4) node {$B{+}C$};
\draw[fill=blue](1.1112647554172845,-1.6628561703789546) circle (2pt);
\draw (1.4,-1.9) node {${-}B{-}C$};
\draw[fill=blue](-0.5077575755456926,0.026) circle (2pt);
\draw (-0.5,0.3) node {$O$};
\draw[fill=blue](0.9324590786272381,1.7693275747259585) circle (2pt);
\draw (1.1,2) node {$A{+}B$};
\draw[fill=blue](-1.561569863199769,-1.249599760861955) circle (2pt);
\draw (-1.9,-1.5) node {${-}A{-}B$};
\draw[fill=blue](-0.34294549060959584,1.9703777278660413) circle (2pt);
\draw (-0.4,2.2) node {$B$};
\draw[fill=blue](-1.0788096688511286,0.026) circle (2pt);
\draw (-1.1,0.3) node {$A$};
\draw[fill=blue](-0.1410589909123262,-1.99501938864834) circle (2pt);
\draw (-0.3,-2.3) node {$({-}A{-}B){-}C$};
\draw[fill=blue](0.4352961787128994,0.026) circle (2pt);
\draw (0.5,0.3) node {$C$};
\end{scriptsize}
\end{tikzpicture}
```

```terms
Pascal 定理:
  en: Pascal's theorem
  de: Satz von Pascal
  fr: théorème de Pascal
  la: theorema Pascalium
```
