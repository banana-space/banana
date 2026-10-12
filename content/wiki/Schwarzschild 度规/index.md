---
title: Schwarzschild 度规
categories: [相对论]
notices:
  - name: 问题
    items:
      - “Kruskal 坐标系”一节中的几处公式似乎有误：按 $U$、$V$ 的定义，$r>r_{\text{s}}$ 似乎对应 $U<0<V$；$U$、$V$ 坐标下度规的系数似乎应为 $\frac{4r_{\text{s}}^3}{r}e^{-\frac{r}{r_{\text{s}}}}$，$T$、$X$ 坐标下也应带有因子 $e^{-\frac{r}{r_{\text{s}}}}$；$X^2-T^2$ 似乎应等于 $e^{\frac{r}{r_{\text{s}}}}\left(\frac{r}{r_{\text{s}}}-1\right)$，$r>0$ 的区域似乎应为 $X^2-T^2>-1$。
      - “Kruskal 坐标系”一节的图中没有标出 I～IV 区。
      - “近日点进动”一节中，$u_1$、$u_2$ 似乎应是远日点与近日点距离的倒数，而不是长轴、短轴的倒数；最后一式中的 $A$、$e$ 没有说明（似乎是轨道的半长轴与离心率）。
---

::: convention
在本文中，

- 为简洁起见，我们设定光速 $c = 1$，
  引力常数 $G=1$。

:::

**Schwarzschild 度规**是[[Einstein 场方程]]的基本[[真空解]]。
除了[[Minkowski 度规]]，
它是最早被发现的 Einstein 场方程的精确解。

在物理上，
它描述一个球对称恒星的外部引力场。

## 定义

::: definition
**Schwarzschild 度规**是在 $\mathbb{R}^4$ 上，
[[球坐标系]] $(t,r,\theta,\phi)$ 下的如下度规：
\[
g=-\left(1-\frac{r_{\text{s}}}{r}\right)dt^2
+\left(1-\frac{r_{\text{s}}}{r}\right)^{-1}dr^2
+r^2(d\theta^2+\sin^2\theta d\phi^2).
\]
其中 $r_{\text{s}}=2M$ 被称作 **Schwarzschild 半径**。
（$M$ 只是一个参数，
代表星体的质量。）
:::

::: remark
当 $r\rightarrow\infty$ 时，
Schwarzschild 度规近似于 Minkowski 度规。
这与物理上的意义是相容的：
远离重力源时时空趋于平直。
:::

## 导出

通过添加静态和球对称的限制，
我们可以把想要的 Einstein 真空解写成
\[
g=-e^{2A(r)}dt^2+e^{2B(r)}dr^2
+r^2(d\theta^2+\sin^2\theta d\phi^2).
\]
算出 [[Ricci 曲率]]
\[
\begin{aligned}
    R_{tt}&=-e^{2(A-B)}\left(-A''+A'B'-A'^2-2\frac{A'}{r}\right),\\
    R_{rr}&=-A''+A'B'-A'^2+2\frac{B'}{r},\\
    R_{\theta\theta}&=e^{-2B}\left( e^{2B}-1+r(B'-A') \right),\\
    R_{\phi\phi}&=\sin^2\theta R_{\theta\theta}.
\end{aligned}
\]

代入真空 Einstein 方程 $R_{ab}=0$ 得 $A'=-B'$。
再代入 $R_{\theta\theta}$ 方程得
\[
e^{2B}=\left( 1+\frac{C}r \right)^{-1}.
\]
其中 $C$ 待定。
那么就有
\[
g=-\left(1+\frac{C}{r}\right)dt^2
+\left(1+\frac{C}{r}\right)^{-1}dr^2
+r^2(d\theta^2+\sin^2\theta d\phi^2).
\]
为了求出 $C$，
使用低速时 Newton 近似，
径向测地线方程近似于
\[
\frac{d^2 x^r}{d t^2}=-\Gamma_{tt}^{r}\approx\frac{C}{2r^2}.
\]
而 Newton 方程
\[
\frac{d^2 x^r}{d t^2}=-\frac{M}{r^2}
\]
就给出了 $C=-2M=-r_{\text{s}}$，
即 Schwarzschild 度规。

## 坐标系

在 $r=0$ 和 $r=r_{\text{s}}$ 处，
Schwarzschild 度规是退化的。
与 $r=0$ 处表现为引力奇点不同的是，
$r=r_{\text{s}}$ 只是坐标奇点。
在物理上，
$r>r_{\text{s}}$ 当然是正常的空间（渐近平直区），
而 $r=r_{\text{s}}$ 的超曲面称为**事件视界**，
$r<r_{\text{s}}$ 的地方称为**Schwarzschild 黑洞**。

下面是几个依次建立的能够消除坐标奇性的坐标系，
从而能够联系黑洞区和渐近平直区。

### 乌龟坐标 {@3.1}

考虑类光径向测地线 $t=t(\lambda)$、
$r=r(\lambda)$，
因为 $\frac{\partial}{\partial t}$ 是一个[[Killing 场]]，
所以测地线方程满足：
\[
t'(\lambda)=-\left(1-\frac{r_{\text{s}}}{r}\right)^{-1},
\]
以及
\[
t'(\lambda)^2=
\left(1-\frac{r_{\text{s}}}{r}\right)^{-2}r'(\lambda)^2.
\]
解得 $r'(\lambda)=\pm1$，
从而代入方程解得
\[
t(r)=C\pm\left(
r+r_{\text{s}}\log \left|
\frac{r}{r_{\text{s}}}-1 \right| \right).
\]
其中 $r_*=r+r_{\text{s}}\log \left|\frac{r}{r_{\text{s}}}-1\right|$
就被称作**乌龟坐标**。
测地线代表的即是 $t\pm r_*$ 为常数。
当光线从 $r>r_{\text{s}}$ 出发时，
以坐标时 $t$ 观测就不可能在有限时间内看到光线穿过事件视界而到达黑洞，
而乌龟坐标则精确地描述了到达事件视界的时间的增长速率。

### Eddington–Finkelstein 坐标系

Eddington–Finkelstein 坐标系利用乌龟坐标对 Schwarzschild 度规进行了重写。
定义**内向 Eddington–Finkelstein 坐标**
\[
v=t+r_*,\,t'=v-r,
\]
在坐标系 $(t',r)$ 下 Schwarzschild 度规为
\[
g=-\left(1-\frac{r_{\text{s}}}{r}\right)dt'^2
+\frac{2r_{\text{s}}}{r}dt'dr
+\left( 1+\frac{r_{\text{s}}}{r} \right)dr^2
+r^2(d\theta^2+\sin^2\theta d\phi^2).
\]
类光径向测地线方程为 $v=C$ 或 $v-2r_*=C$，
如图（红线和蓝线都是测地线）：

```tikz
\begin{tikzpicture}
  \draw[->] (0, 0) -- (6, 0) node[right] {$r$};
  \draw[->] (0, -3) -- (0, 3) node[above] {$t'$};
  \draw[scale=1, domain=-3:3, smooth, variable=\x, red] plot ({pow(1.5,\x)+1.8}, {\x});
  \draw[scale=1, domain=-3:3, smooth, variable=\y, red]  plot ({2}, {\y});
  \draw[scale=1, domain=-3:3, smooth, variable=\z, red]  plot ({-pow(1.3,\z)+2.4}, {\z});
  \draw[scale=1, domain=0:6, smooth, variable=\a, blue]  plot ({\a}, {3-\a});
  \draw[scale=1, domain=0:5, smooth, variable=\a, blue]  plot ({\a}, {2-\a});
  \draw[scale=1, domain=0:4, smooth, variable=\a, blue]  plot ({\a}, {1-\a});
  \draw[scale=1, domain=0:3, smooth, variable=\a, blue]  plot ({\a}, {-\a});
\end{tikzpicture}
```

我们把 $t'$ 看成新坐标系下的时间坐标，
在此时间下，
蓝线代表内向光线，
通过有限时间后光可以从渐近平直区穿过事件视界进入黑洞区；
红线代表外向光线，
当 $r>r_{\text{s}}$ 时它们会逐渐逃离事件视界，
而当 $r<r_{\text{s}}$ 时它们无法从黑洞区“跃迁”至渐近平直区，
且会在有限时间内掉入 $r=0$ 处的引力奇点。

同理可以定义**外向 Eddington–Finkelstein 坐标**为
\[
u=t-r_*,\,t'=u-r.
\]
它具有和内向 Eddington–Finkelstein 坐标相似的几何。

### Kruskal 坐标系

虽然直观，
但是 Eddington–Finkelstein 坐标系无法消除 $r=r_{\text{s}}$ 的坐标奇性。
就算在 $u,v$ 坐标系下，
仍然会有项 $-\left(1-\frac{r_{\text{s}}}{r}\right)dudv$ 出现。
但是测地线都是平直的，
所以只需要选取合适的参数化即可。
先只考虑 $r>r_{\text{s}}$ 的情况，
定义如下参数化：
\[
\begin{cases}
  U=-e^{ -\frac{u}{2r_{\text{s}}} }\\
  V=e^{ \frac{v}{2r_{\text{s}}} }.
\end{cases}
\]
可以算出 Schwarzschild 度规在此坐标下为
\[
g=-\frac{4r_{\text{s}}}{r}e^{-\frac{r}{r_{\text{s}}}}dUdV
+r^2(d\theta^2+\sin^2\theta d\phi^2).
\]
这在 $r=r_{\text{s}}$ 时是非退化的。
定义**Kruskal 坐标系**为
\[
T=\frac1{2}(V+U),\,X=\frac1{2}(V-U).
\]
则 Schwarzschild 度规在此坐标下为
\[
g=\frac{4r_{\text{s}}}{r}(-dT^2+dX^2)
+r^2(d\theta^2+\sin^2\theta d\phi^2),
\]
其中 $r$ 要满足
\[
X^2-T^2=e^{-\frac{r}{r_{\text{s}}}}\left( \frac{r}{r_{\text{s}}}-1 \right).
\]
此时 $r>r_{\text{s}}$ 对应着 $U,V>0$，
但是无妨考虑整个 $r>0$ 的区域，
即 $X^2-T^2>1$，
在这块区域上 Schwarzschild 度规非退化。

```tikz
\begin{tikzpicture}
  \draw[->] (-3, 0) -- (3, 0) node[right] {$X$};
  \draw[->] (0, -3) -- (0, 3) node[above] {$T$};
  \draw[scale=1, domain=-3:3, smooth, variable=\x, red] plot ({\x}, {\x});
  \draw[scale=1, domain=-3:3, smooth, variable=\y, red] plot ({\y}, {-\y});
  \draw[scale=1, domain=-3:3, smooth, variable=\z, very thick, black] plot ({\z}, {sqrt(\z*\z+1)});
  \draw[scale=1, domain=-3:3, smooth, variable=\z, very thick, black] plot ({\z}, {-sqrt(\z*\z+1)});
  \draw[scale=1, domain=2:3, smooth, variable=\w, blue] plot ({\w}, {2.5-\w});
  \draw[scale=1, domain=2:3, smooth, variable=\w, blue] plot ({\w}, {-2.5+\w});
  \draw[scale=1, domain=1.5:2.5, smooth, variable=\w, blue] plot ({\w}, {2-\w});
  \draw[scale=1, domain=1.5:2.5, smooth, variable=\w, blue] plot ({\w}, {-2+\w});
\end{tikzpicture}
```

如图所示，
两条双曲线是 $r=0$ 的引力奇点；
两条红线是事件视界；
渐近平直区被 I 区代表；
而黑洞区可以更加精确地定义成 II 区，
并且所有内向的光线都将通过事件视界进入黑洞区；
III 区代表另外一个渐近平直区，
它和 I 区所发生的事件无因果关系，
互不干扰（“镜像宇宙”）；
IV 区称作**白洞区**，
所有外向的光线都通过事件视界从白洞区进入渐近平直区，
即 I 区。

### Penrose 图

Schwarzschild 度规的 **Penrose 图**定义为如下坐标
\[
\begin{cases}
  u'=\arctan U\\
  v'=\arctan V.
\end{cases}
\]
在这个坐标系下，
整个 Kruskal 时空[[共形等价|共形地]]被拉到如下的有限图：

```tikz
\begin{tikzpicture}
  \draw[scale=1, domain=-3:0, smooth, variable=\x, red] plot ({\x}, {3+\x});
  \draw[scale=1, domain= 0:3, smooth, variable=\x, red] plot ({\x}, {3-\x});
  \draw[scale=1, domain= 0:3, smooth, variable=\x, red] plot ({\x}, {-3+\x});
  \draw[scale=1, domain=-3:0, smooth, variable=\x, red] plot ({\x}, {-3-\x});
  \draw[scale=1, domain=-1.5:1.5, smooth, variable=\y, blue] plot ({\y}, {\y});
  \draw[scale=1, domain=-1.5:1.5, smooth, variable=\y, blue] plot ({\y}, {-\y});
  \draw[scale=1, domain=-1.5:1.5, smooth, variable=\z, very thick, black] plot ({\z}, {1.5});
  \draw[scale=1, domain=-1.5:1.5, smooth, variable=\z, very thick, black] plot ({\z}, {-1.5});
\end{tikzpicture}
```

## 测地线

在 @3.1 中已经讨论了径向类光的 Schwarzschild 测地线。
对于一般的测地线，
由球对称性知它一定会在一个包含原点的平面里运动，
故不妨设这个平面被 $\theta=\frac{\pi}2$ 决定。

利用类时和转动 Killing 场以及测地线本身的性质，
知测地线此时满足三个方程（参数化方程、能量守恒、角动量守恒）：
\[
\begin{aligned}
  \left(1-\frac{r_{\text{s}}}{r}\right)t'(\lambda)^2&=
  \left(1-\frac{r_{\text{s}}}{r}\right)^{-1}r'(\lambda)^2
  +r^2\phi'(\lambda)^2+\kappa.\\
  t'(\lambda)&=E\left(1-\frac{r_{\text{s}}}{r}\right)^{-1}.\\
  \phi'(\lambda)&=\frac{L}{r^2}.
\end{aligned}
\]
其中 $\kappa$ 为
\[
\kappa=\begin{cases}
  1,&\text{类时测地线}.\\
  0,&\text{类光测地线}.
\end{cases}
\]
而 $E$ 和 $L$ 的物理意义是单位质量下的总能量和角动量。
代入得
\[
r'(\lambda)^2=E^2
-\left(1-\frac{r_{\text{s}}}{r}\right)\left(\frac{L^2}{r^2}+\kappa\right).
\]
所以得到
\[
r'(\phi)^2=\frac{E^2r^4}{L^2}-
\left(1-\frac{r_{\text{s}}}{r}\right)\left(r^2+\kappa\frac{r^4}{L^2}\right).
\]
利用换元 $u=r^{-1}$，
得方程

```math {@equ}
u'(\phi)^2=\frac{E^2}{L^2}-
\left(1-ur_{\text{s}}\right)\left(u^2+\frac{\kappa}{L^2}\right).
```

若右边的三次多项式有三个根 $u_1$、$u_2$、$u_3$，
则解得 $u$ 为

```math {@geosol}
u(\phi)=u_1+(u_2-u_1)
\operatorname{sn}^2\left( \frac1{2}\sqrt{r_{\text{s}}(u_3-u_1)}\phi
+\delta;\sqrt{\frac{u_2-u_1}{u_3-u_1}} \right).
```

其中 $\delta$ 代表初始位置，
$\operatorname{sn}(n;k)$ 代表[[Jacobi 椭圆函数|Jacobi 椭圆正弦]]。

## 天文学的实验验证

### 引力红移

引力红移指的是远离引力源时，
光的频率变低，
波长变长。

设光的世界线为 $\mathbf{p}=\mathbf{p}(\tau)$。
静态观者在 $A$、$B$ 两点测得的光的波长 $\lambda$、$\lambda'$ 满足
\[
\frac{\lambda}{\lambda'}=
\frac{\langle\mathbf{p}'(\tau)|_B,\partial_B\rangle}
{\langle\mathbf{p}'(\tau)|_A,\partial_A\rangle},
\]
其中 $\partial_A$、$\partial_B$ 分别代表类时单位向量。
由于 $\frac{\partial}{\partial t}$ 是 Killing 场，
故有 $\langle\mathbf{p}'(\tau)|_B,\frac{\partial}{\partial t}\rangle
=\langle\mathbf{p}'(\tau)|_A,\frac{\partial}{\partial t}\rangle$。
从而
\[
\frac{\lambda}{\lambda'}=
\frac{\sqrt{1-\frac{r_{\text{s}}}{r_A}}}
{\sqrt{1-\frac{r_{\text{s}}}{r_B}}}.
\]
这说明当 $r_B>r_A$ 时波长增大，
且增大的程度被**红移因子** $\sqrt{1-\frac{r_{\text{s}}}{r}}$ 代表。

### 近日点进动

解 @geosol 的正质量 Newton 近似为
\[
u=u_1+(u_2-u_1)\sin^2\left( \frac1{2}\phi+\delta \right),
\]
代表[[离心率]]为 $\frac{u_2-u_1}{u_2+u_1}$ 的[[圆锥曲线]]，
与[[Kepler 定律]]相符合，
即行星轨道是以恒星为其中一个[[焦点]]的椭圆。
但是实验验证其近日点并不是不变的，
它会规律地绕恒星转动，
这被称作**近日点进动**。
Schwarzschild 度规对行星轨道的修正能够推导出近日点的进动，
并且与实验数据吻合。

由于 $\operatorname{sn}$ 的周期为 $2K$，
其中 $K$ 为[[椭圆积分]]
\[
K=\int_0^1\frac1{\sqrt{(1-x^2)(1-\frac{u_2-u_1}{u_3-u_1}x^2)}}dx,
\]
知每一次 $u$ 回到最大值时 $\phi$ 的变化为（在 Newton 近似的意义下）
\[
\Delta\phi=\frac{4K}{\sqrt{r_{\text{s}}(u_3-u_1)}}
=\frac{4K}{\sqrt{1-r_{\text{s}}(u_2+2u_1)}}
\approx 4K+2Kr_{\text{s}}(u_2+2u_1).
\]
下面估算 $K$：
\[
\begin{aligned}
  K&\approx\int_0^1\frac1{\sqrt{1-x^2}}
  \left(1+\frac1{2}\frac{u_2-u_1}{u_3-u_1}x^2\right)dx\\
  &=\int_0^{\frac{\pi}2}\left(1+\frac1{2}\frac{u_2-u_1}{u_3-u_1}\sin^2y\right)dy\\
  &=\frac{\pi}2\left( 1+\frac1{4}\frac{u_2-u_1}{u_3-u_1} \right).
\end{aligned}
\]
而 Newton 近似给出 $\frac{u_2-u_1}{u_3-u_1}\approx r_{\text{s}}(u_2-u_1)$。
从而一个周期造成的 $\phi$ 的偏移量近似为
\[
\delta\phi=\Delta\phi-2\pi\approx\frac{3}{2}\pi r_{\text{s}}(u_1+u_2).
\]
然而 $u_1$、$u_2$ 分别代表长轴、短轴的倒数，
故有
\[
\delta\phi\approx\frac{6\pi M}{A(1-e^2)}.
\]

### 星光偏折

当光线从无穷远处经过引力源附近，
由于引力的“拉扯”，
它的方向将会改变，
这个现象叫**星光偏折**。

解 @geosol 的 $0$ 质量 Newton 近似也为
\[
u=u_1+(u_2-u_1)\sin^2\left( \frac1{2}\phi+\delta \right),
\]
也代表离心率为 $\frac{u_2-u_1}{u_2+u_1}$ 的圆锥曲线，
但是因为 $u_1<0<u_2$ 知其是一条[[双曲线]]，
并且离心率可以近似为
\[
\frac{u_2-u_1}{u_2+u_1}\approx\frac{2L}{r_{\text{s}}E}.
\]
故偏折角 $\delta$ 满足
\[
\tan\delta=\frac1
{\sqrt{\left( \frac{2L}{r_{\text{s}}E} \right)^2-1}}.
\]
从而
\[
\delta\approx\frac{2r_{\text{s}}E}{L}=\frac{4ME}{L}.
\]

```terms
Schwarzschild 度规:
  en: Schwarzschild metric
  de: Schwarzschild-Metrik
  fr: métrique de Schwarzschild
```
