---
title: K3 曲面
categories: [复几何, 代数曲面论]
navboxes: [代数几何]
---

<problems>
- “椭圆纤维化”一节需要扩充。
</problems>

在[[复几何]]中，
**K3 曲面**是一类二维[[复流形]]，
是所有[[紧空间|紧]]、[[连通空间|连通]]二维 [[Calabi–丘流形]]中除了[[复环面]]以外的那些，
也是所有[[单连通空间|单连通]]的那些。
K3 曲面都具有 [[Kähler 流形]]的结构，并且，
由于二维 Calabi–丘流形的条件意味着该复流形具有处处非零的[[全纯微分形式|全纯 $2$-形式]]，
从而是[[全纯辛形式]]，
这也赋予了 K3 曲面[[超 Kähler 流形]]的结构。

在[[代数几何]]中，也有相应的 **K3 曲面**的概念，
是指满足类似条件的二维 [[Calabi–丘簇]]。

K3 曲面是以 [[Ernst Kummer|Kummer]]、[[Erich Kähler|Kähler]]、[[Kunihiko Kodaira|Kodaira]]
三人的名字首字母命名的。

## 定义

### 复 K3 曲面

::: definition
（**复**）**K3 曲面**是指二维[[紧空间|紧]]、[[连通空间|连通]][[复流形]] $X$，
满足以下条件：

- $X$ 是 [[Calabi–丘流形]]。
  即 $X$ 的[[典范丛]] $K_X$ 同构于平凡线丛 $\mathcal{O}_X$。

- $X$ [[单连通空间|单连通]]。

:::

这里，$X$ 单连通的条件仅是为了剔除那些[[复环面]]，
因此该条件可以换成很多与之等价的条件。

### 代数 K3 曲面

::: definition
[[域]] $k$ 上的（**代数**）**K3 曲面**
是指 $k$ 上[[紧合簇|紧合]]、[[光滑簇|光滑]]的[[代数曲面]] $X$，
满足以下条件：

- $X$ 是 [[Calabi–丘簇]]，
  即 $X$ 的[[典范丛]] $K_X$ 同构于平凡线丛 $\mathcal{O}_X$。

- [[凝聚层上同调]] $H^1 (X, \mathcal{O}_X) = 0$。

:::

域上的 K3 曲面一定是[[射影簇|射影]]的。实际上任何光滑完备曲面都是这样，
Goodman 证明了只要对这样的曲面取一个非空的仿射开集，它的补集就是一个[[丰沛]][[除子]]。

## 例子

::: example
如下方程定义的光滑射影曲面称 **[[Fermat 四次曲面]]**：
\[
X:=\{x^4+y^4+z^4+w^4=0\}\subset\mathbb P^3.
\]
实际上$\mathbb P^3$中光滑的四次曲面都是K3 曲面：
因为根据[[Lefschetz 超平面定理]]以及Hodge 理论，$H^1(X)$平凡，而根据[[法丛正合列]]，
对$d$次超曲面$X\subset\mathbb P^n$有$K_X\cong O(d-n-1)|_X$。
代入$d=4,n=3$结合$O(0)$是平凡[[线丛]]得知$K_X\cong\mathcal O_X$。

类似地，$\mathbb P^4$中二次和三次超曲面的[[完全交]]是K3 曲面；
$\mathbb P^5$中三个二次超曲面的完全交是 K3 曲面。
以上三者次数分别为$4,6,8$，称类型$(4),(2,3),(2,2,2)$的K3 曲面。
在[[加权射影空间]]中有更多类似的完全交例子。
:::

::: example
**[[Kummer 曲面]]** 构造如下，考虑一个二维的[[Abel 簇]] $A$，商掉关系$a\mapsto -a$后，
得到一个具有$16$个[[奇点]]的曲面$X$，这些奇点恰好是原先Abel 簇上的全部$16$个$2$-挠的点。
它的[[极小消解]] $\widetilde X$ 也被称为 **（光滑）Kummer 曲面**，这是一个K3 曲面。

特别地，当$A$是某[[亏格]] $2$的[[曲线]]的[[Jacobi 簇]]时，Kummer 证明了$X=A/\pm$
能作为四次曲面嵌入$\mathbb P^3$，且这$16$个奇点均为[[节点]]。这与上一个例子互相呼应。

我们以复环面$A=\mathbb C^2/\Gamma$为例，假设$\mathbb C^2$的坐标为$(z,w)$，
那么在原点局部，$A$上取$a\mapsto -a$的不变函数由$r=z^2,s=zw,t=w^2$生成，
所以$X$在原点附近形如$rt=s^2$，因此是一个节点（[[du Val 奇点]] $\mathrm{A}_1$）。

现在$A\to X$是[[分歧覆盖]]，$A$上的处处非零的全纯$2$-形式$dz\wedge dw$在$a\mapsto -a$下不变，
因此也是$X$上处处非零的全纯$2$-形式。在消解下
\[
dz\wedge dw=\frac{dr\wedge dt}{4zw}=\frac{dr\wedge dt}{4s}.
\]
进而可以检查它也是极小消解$\widetilde X$上处处非零的全纯$2$-形式，因此$K_{\widetilde X}$平凡。

最后$H^1(\mathcal O_{\widetilde X})\cong H^1(\mathcal O_X)$，
同构于$H^1(\mathcal O_{A})\cong H^{0,1}(A)$在$a\mapsto -a$作用下不变的子空间。
然而$H^{0,1}(A)$的一组基为$d\bar z,d\bar w$，故$a\mapsto -a$作用下它们都取负，
从而$H^1(\mathcal O_{\widetilde X})=0$。
:::

::: example
设$C\subset\mathbb P^2$是六次曲线。
取$\mathcal L\cong \mathcal O_{\mathbb P^2}(3)$为$\mathcal O(C)\cong \mathcal O_{\mathbb P^2}(6)$
的平方根。
换言之，取定同构$\mathcal L^2\cong \mathcal O(C)$和[[截面]] $\sigma\in\Gamma(\mathcal L^2)$。
现在考虑二重覆叠$\pi:X\to\mathbb P^2$在$C$处[[分歧]]，
具体来说可以看作$\operatorname{Tot}(\mathcal L^*)$上由局部方程$t^2=\sigma$决定的曲面，
计算得到
\[
\pi_*\mathcal O_X\cong\mathcal O_{\mathbb P^2}\oplus \mathcal O_{\mathbb P^2}(-3).
\]
于是$H^1(X,\mathcal O_X)=0$，此外典范丛
\[
K_X\cong\pi^*(K_{\mathbb P^2}\otimes \mathcal O_{\mathbb P^2}(3))\cong\pi^*\mathcal O_{\mathbb P^2}\cong\mathcal O_X.
\]
由此可知$X$是K3 曲面。
:::

### 椭圆纤维化

一类重要的K3 曲面的例子是所谓的[[椭圆曲面]]，这样的K3 曲面称为**椭圆K3 曲面**。
最常见的例子是$X\to\mathbb P^1$，满足除了$\mathbb P^1$的有限多个点外，
其余点的纤维都是亏格$1$的光滑[[椭圆曲线]]。
而在那些点处的纤维则是奇异的[[有理曲线]]，Kodaira 曾对其奇异纤维进行分类。
在一般情况下，由于欧拉示性数的计算，奇异纤维共有$\chi=24$个，且每个纤维都是节点椭圆曲线。

::: example
每个含一条直线$L$的$\mathbb P^3$中光滑四次曲面就是椭圆K3 曲面。
纤维化由向$L$的投影给出。另外，$\mathbb P^3$中光滑四次曲面模空间是$19$维的，
其中带有直线者是$18$维的。
:::

一个K3 曲面$X$具有椭圆纤维化当且仅当存在非零$u\in\operatorname{Pic}(X)$使得$u^2=0$。

## 性质

- K3 曲面总具有如下的 [[Hodge 菱形]]：
  \[
  \begin{array}{ccccc}
    && 1 \\
    & 0 && 0 \\
    1 && \clap{20} && 1 \\
    & 0 && 0 \\
    && 1 && \rlap{ .}
  \end{array}
  \]

::: proof
由[[复共轭]]和[[Serre 对偶]]，除了中间一行外其余[[Hodge 数]]已被决定，
而根据[[Dolbeault 上同调]]性质，
$H^{0,2}(X) = H^0(X, K_X) = H^0(X, \mathcal O_X) = \mathbb C$，
故只需证明 $h^{1,1} = 20$。根据曲面的 [[Noether 公式]]（[[Riemann–Roch 定理]]），
$\chi(\mathcal O_X) = (K_X \cdot K_X + \chi(X))/12$，
由于 $\chi(\mathcal O_X) = 2$ 以及
$K_X \cdot K_X = \mathcal O_X \cdot \mathcal O_X = 0$，
我们得到 $X$ 的[[Euler 示性数]] $\chi(X) = 24$，由此可知 $h^{1,1} = 20$。
:::

- K3 曲面是[[Kodaira 维数]]为 $0$ 的四类曲面中的一类。

- Kodaira 证明了所有 K3 曲面作为 $4$ 维[[光滑流形]]都[[微分同胚]]。
  Robert Friedman 和 John Morgan 证明了每个微分同胚于 K3 曲面的复曲面都是K3 曲面，
  但是Kodaira 和 Michael Freedman 证明了存在一些光滑复曲面同胚于K3 却不微分同胚于K3。

- 根据单连通性和[[万有系数定理]]，
  K3 曲面的中间上同调无挠，$H^2(X,\mathbb Z)\cong\mathbb Z^{22}$。
  它上面具有[[相交配对]]或说[[杯积]]，给出非退化的对称[[双线性型]]
  \[
  \smile:H^2(X,\mathbb Z)\times H^2(X,\mathbb Z)\to H^4(X,\mathbb Z)\cong \mathbb Z,
  \]
  这结构被称为**K3 格**。[[Poincaré 对偶]]保证该双线性型是[[幺模]]的，
  即它的[[Gram 矩阵]][[行列式]]模长为$1$，更具体地，根据[[Hodge 指标定理]]它的[[指标]]为$(3,-19)$，
  也就是说正负特征重数为$3,19$。而且由于 $c_1(X)=0$，于是它的第二[[Whitney 类]]也为 $0$。
  这表明 $X$ 是[[旋]]的，这意味着它满足$\alpha\smile\alpha\in2\mathbb Z$对一切$\alpha\in H^2$。
  实际上根据Freedman 的分类，$\mathbb Z^{22}$ 上满足上述指标条件和偶自相交条件的幺模双线性型唯一，为
  \[
  \Pi_{3,19}=(-\mathrm E_8)^{\oplus 2}\oplus U^{\oplus 3}.
  \]
  其中$\mathrm E_8$表示正定的例外根系[[E8|$\mathrm{E}_8$]]的根格，矩阵为
  \[
  \mathrm E_8=
  \begin{pmatrix}
   2 & -1 & 0 & 0 & 0 & 0 & 0 & 0 \\
   -1 & 2 & -1 & 0 & 0 & 0 & 0 & 0 \\
   0 & -1 & 2 & -1 & 0 & 0 & 0 & 0 \\
   0 & 0 & -1 & 2 & -1 & 0 & 0 & 0 \\
   0 & 0 & 0 & -1 & 2 & -1 & 0 & -1 \\
   0 & 0 & 0 & 0 & -1 & 2 & -1 & 0 \\
   0 & 0 & 0 & 0 & 0 & -1 & 2 & 0 \\
   0 & 0 & 0 & 0 & -1 & 0 & 0 & 2
  \end{pmatrix}
  \]
  而$U$是双曲平面格，矩阵为$\begin{pmatrix}0&1\\1&0\end{pmatrix}$。

- K3 曲面具有整体[[Torelli 定理]]：即 K3 曲面被它的[[Hodge 结构]]决定。
  实际上如果K3 曲面$X,Y$间具有$H^2(X,\mathbb Z)\to H^2(Y,\mathbb Z)$的**Hodge 同构**，
  即要求它保持K3 格的相交形式，且诱导$H^0(X,K_X)\subset H^2(X,\mathbb C)$到$H^0(Y,K_Y)$的同构，
  则$X,Y$同构。

- [[11/8 猜想|$\frac{11}8$ 猜想]]，由Yukio Matsumoto 提出，预测对每个满足偶自相交条件的、
  可定向的单连通光滑四维流形 $X$，
  都有 $b_2(X)\ge \frac{11}{8}|\sigma(X)|$，其中 $\sigma(X)$ 是 $X$ 的指标。
  当 $X$ 是K3 曲面时，根据前文计算有 $b_2(X)=22, \sigma(X)=3-19=-16$，
  此时不等式取等。
  如果猜想成立，
  将能推出每个满足前面条件的流形 $X$ 都同胚于若干K3 曲面与若干 $S^2\times S^2$ 的[[连通和]]。

## 参考文献

```bibliography
Huybrechts:
  type: book
  author: Daniel Huybrechts
  title: Lectures on K3 surfaces
  year: 2016
  publisher: Cambridge University Press
  doi: 10.1017/CBO9781316594193
  zbmath: '1360.14099'
  url: https://www.math.uni-bonn.de/people/huybrech/K3Global.pdf
```

```terms
K3 曲面:
  en: K3 surface
  fr: surface K3 :f
  de: K3-Fläche :f
  ja: K3 曲<きょく>面<めん>
  ko: K3 곡면 (K3 曲面)
```
