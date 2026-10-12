---
title: 分离变量法
categories: [常微分方程论]
notices:
  - name: 问题
    items:
      - '“‘线性方程组’型”一节中，分子分母同时除以 $x$ 后得到的式子里的 $\frac{x}{y}$ 似乎应为 $\frac{y}{x}$；情形 (1) 中的 $\frac{X}{Y}$ 似乎同样应为 $\frac{Y}{X}$，等式左边似乎应为 $\frac{\mathrm{d} Y}{\mathrm{d} X}$。'
      - '情形 iii 中的函数 $g$ 未加说明，似乎指 $g(u) = f\left(\frac{ku + c_1}{u + c_2}\right)$。'
      - '“‘线性方程组’型”一节最后的例子中，积分结果右边的 $\ln \left| u^2 + 2u - 1 \right|$ 似乎应为 $-\ln \left| u^2 + 2u - 1 \right|$（与之后的结果 $Y^2 + 2XY - X^2 = c_1$ 一致）。'
navboxes: [常微分方程]
---

求解[[常微分方程]]时，**分离变量法**是一种初等的求解方法。主要应用场景为以下特殊的一阶微分方程。

- 变量分离方程 $ \mathrm{d} y / \mathrm{d} x = f(x) g(y) $；

- 需要转化的情形，例如：

  - 齐次方程 $ \mathrm{d} y / \mathrm{d} x = f \left ( y / x \right ) $；

  - $ \mathrm{d} y / \mathrm{d} x = f \left ( a x + b y +c \right ) $；

  - $ \mathrm{d} y / \mathrm{d} x = f\left ( \frac{a_1 x + b_1 y +c_1}{a_2 x + b_2 y +c_2} \right ) $；

## 最基本的情形

本节介绍分离变量法最为“明显”的应用场景。

### 方法

设函数 $f(x)$、$g(y)$ 分别为 $x$、$y$ 的连续函数，我们称形如
\[
\frac{\mathrm{d} y }{\mathrm{d} x } = f(x) g(y)
\]
的常微分方程为**变量分离方程**。方程左侧是 $y$ 关于 $x$ 的导数，也即微商。
当 $g(y) \ne 0$ 时，我们结合微分与微商的关系，进行移项：
\[
\frac{1}{ g(y) } \mathrm{d}y = f(x) \mathrm{d}x .
\]

可以看到，方程的左、右两边变成了两个“独立”的微分。因此我们只需要对两边同时积分：
\[
\int \frac{1}{ g(y) } \mathrm{d}y =  \int f(x) \mathrm{d}x,
\]
就能求解原方程。需要注意的是，式中积分生成的常数 $c$ 必须使得方程有意义。

### 例子

::: example {@eg1}
求解方程：
\[
\frac{\mathrm{d} y }{\mathrm{d} x } = x y.
\]
:::

对应到我们在上一小节的例子，可以知道 $f(x) = x$、$g(y) = y$。
不过在进行变形之前，我们需要**注意不要漏掉特解**。
在变量分离方程中，这个特解就是 $g(y) = y = 0$ 的平凡情形。

当 $g(y) = y = 0$ 时，把解 $y = 0$ 代入方程验证发现等号成立，于是它是原方程的一个特解。

再来考虑 $g(y) = y \ne 0$ 时，先把它除过去的同时把 $\mathrm{d} x$ 乘过来：
\[
\frac{1}{y} \mathrm{d} y = x \mathrm{d} x;
\]
两边再同时积分：
\[
\ln | y | = \frac{1}{2} x^2 + \bar{c}.
\]

其中 $\bar{c}$ 是不定积分产生的常数。再整理一下，根据指数运算法则把 $\bar{c}$ 落下来就有：
\[
y = c \exp \left ( \frac{1}{2} x^2 \right ).
\]

其中 $c = \pm \exp \bar{c}$。若允许 $c = 0$，我们就可以用上式包含 $ y = 0 $ 这个特解。

## 结合变量代换的应用

现在我们需要着眼于那些不太“显然”的情况。

### 齐次方程

我们称形如
\[
\frac{\mathrm{d} y }{\mathrm{d} x } = f \left ( \frac{y}{x} \right )
\]
的方程为**齐次微分方程**，其中 $f(u)$ 为关于 $u$ 的连续函数。

这一方程不能直接进行变量分离，但是我们可以作**变量代换** $u = y / x$，即 $ y = u x $。
两边对 $x$ 求导有
\[
\frac{\mathrm{d} y }{\mathrm{d} x} = x \frac{\mathrm{d} u }{\mathrm{d} x } + u.
\]
这样我们就可以把左边的微商项和 $y / x$ 换为 $u$ 相关的项了。代入并整理可得
\[
\frac{\mathrm{d} u }{\mathrm{d} x} = \frac{ f(u) - u }{ x }.
\]
这是一个变量分离方程。对这个方程求解后还原变量即可得解。

::: example
求解方程：
\[
\frac{\mathrm{d} y }{\mathrm{d} x} = \frac{y}{x} + \tan \frac{y}{x}.
\]
:::

这个方程由于正切函数项，无法直接变量分离。我们可作变量变换 $u = y / x$，同时左边的微商项要变为
\[
\frac{\mathrm{d} y }{\mathrm{d} x} = x \frac{\mathrm{d} u }{\mathrm{d} x } + u.
\]
代入原方程可得
\[
\frac{\mathrm{d} u }{\mathrm{d} x} = \frac{ \tan u }{x}.
\]
是一个变量分离方程。根据 @eg1 的过程，当 $\tan u \ne 0$ 时，分离变量得
\[
\cot u \mathrm{d} u = \frac{\mathrm{d} x}{ x },
\]
积分得到
\[
\ln \left| \sin u \right| = \ln \left| x \right| + \bar{c}
\]
其中 $\bar{c}$ 为任意常数，再令 $ c = \pm \exp \bar{c}$，得到隐式解
\[
\sin u = cx.
\]
再考虑 $ \tan u = 0 $ 的情形：此时必有 $ \sin u = 0 $，因此允许 $c = 0$ 即可包含此特解。

最后，**不要忘记还原变量**，即
\[
\sin \frac{y}{x} = cx.
\]

### “线性组合”型

方程如其名。设 $f(u)$ 为 $u$ 的连续函数，本小节我们考虑形如
\[
\frac{\mathrm{d} y }{\mathrm{d} x} = f \left ( a x + b y +c \right )
\]
的方程。

同样地，我们可以作变量代换 $ u = ax + by $，两边微分有
\[
\frac{\mathrm{d} u }{\mathrm{d} x} = a + b \frac{\mathrm{d} y }{\mathrm{d} x }.
\]
代入原方程，可得
\[
\frac{\mathrm{d} u }{\mathrm{d} x} = a + b f(u).
\]
这是一个变量分离方程。

::: example
求解方程：
\[
\frac{\mathrm{d} y }{\mathrm{d} x} = \left( x + y \right)^2 .
\]
:::

这个方程含有交叉乘积项 $2xy$，因此做不到变量分离。令 $ u = x + y$，根据微分法则有
\[
\frac{\mathrm{d} u }{\mathrm{d} x} = 1 + \frac{\mathrm{d} y }{\mathrm{d} x },
\]
代入原方程即
\[
\frac{\mathrm{d} u }{\mathrm{d} x} = 1 + u^2 .
\]

分离变量求解得到 $\arctan u = x + c $，其中 $c$ 为任意常数。还原变量可得
\[
\arctan ( x + y ) = x + c.
\]

### “线性方程组”型

设 $f(u)$ 为 $u$ 的连续函数，本小节我们考虑形如
\[
\frac{\mathrm{d} y }{\mathrm{d} x} = f \left ( \frac {a_1 x + b_1 y + c_1 }{a_2 x + b_2 y + c_2 } \right)
\]
的方程。如此命名的原因是右侧含有神似方程组的项。

方便起见，我们定义它对应的线性**代数方程组**（为防止混淆，
本小节在叙述时会加粗以区分微分方程与代数方程。）
\[
\begin{cases}
  a_1 x + b_1 y + c_1 = 0, \\
  a_2 x + b_2 y + c_2 = 0;
\end{cases}
\]
和如下的系数行列式：
\[
D =  \det( \mathbf{D} ) =
\begin{vmatrix}
  a_1 & b_1 \\
  a_2 & b_2
\end{vmatrix} .
\]

结合[[线性方程组]]理论，我们可以首先排除 $c_1 = c_2 = 0$ 的齐次（平凡）情形。
因为只需在原**微分方程**的分子分母同时除以 $x$，即可化为形如
\[
\frac{ \mathrm{d} y }{ \mathrm{d} x} = f \left ( \frac {a_1 + b_1 \frac{x}{y} }{a_2 + b_2 \frac{x}{y} } \right)
\]
的齐次微分方程。

现在我们只需对**代数方程**的系数行列式 $D$ 进行讨论：

- (1) $D \ne 0$ 的情形。

  这种情况下，**代数方程**具有唯一的解
  \[
  \begin{cases}
    x = \alpha, \\
    y = \beta.
  \end{cases}
  \]
  此时想要把不齐次的**代数方程**化为齐次方程，只需要作如下变换：
  \[
  \begin{cases}
    X = x - \alpha, \\
    Y = y - \beta;
  \end{cases}
  \]
  则可以将**代数方程**化为
  \[
    \begin{cases}
    a_1 X + b_1 Y = 0, \\
    a_2 X + b_2 Y = 0.
  \end{cases}
  \]
  从而**微分方程**变为
  \[
  \frac{ \mathrm{d} y }{ \mathrm{d} x} = f \left ( \frac {a_1 + b_1 \frac{X}{Y} }{a_2 + b_2 \frac{X}{Y} } \right) = g\left( \frac{X}{Y} \right).
  \]
  它是一个齐次方程。

- (2) $D = 0$ 的情形。

  行列式 $D$ 的值为 $0$ 可以继续细分为以下三种子情形

  - i. $ a_1 = b_1 = 0 $ 或 $ a_2 = b_2 = 0 $：

    此时原微分方程变为
    \[
    \frac{\mathrm{d} y }{\mathrm{d} x} = f \left ( \frac { c_1 }{a_2 x + b_2 y + c_2 } \right) = g ( a_2 x + b_2 y +c_2 );
    \]
    或
    \[
    \frac{\mathrm{d} y }{\mathrm{d} x} = f \left ( \frac {a_1 x + b_1 y + c_1 }{ c_2 } \right) = g ( a_1 x + b_1 y +c_1 );
    \]
    这样的方程可以根据上一小节的方法求解。

  - ii. $b_1 = b_2 = 0$ 或 $a_1 = a_2 = 0$：

    此时原微分方程变为
    \[
    \frac{\mathrm{d} y }{\mathrm{d} x} = f \left ( \frac {a_1 x + c_1 }{a_2 x + c_2 } \right);
    \]
    或
    \[
    \frac{\mathrm{d} y }{\mathrm{d} x} = f \left ( \frac {b_1 y + c_1 }{b_2 y + c_2 } \right);
    \]
    这些都是变量分离方程。

  - iii. $\frac{a_1}{a_2} = \frac{b_1}{b_2} = k$：

    此时令 $ u = a_2 x + b_2 y $，此时 $ \mathrm{d} u = a_2 \mathrm{d} x + b_2 \mathrm{d} y $，
    对等号右边也有
    \[
    f \left ( \frac {a_1 x + b_1 y + c_1 }{a_2 x + b_2 y + c_2 } \right) = f \left ( \frac { k ( a_2 x + b_2 y ) + c_1 }{a_2 x + b_2 y + c_2 } \right) = f \left ( \frac { ku + c_1 }{u + c_2 } \right)
    \]
    此时原**微分方程**变为
    \[
    \frac{\mathrm{d} u }{\mathrm{d} x} = a_2 + b_2 g(u).
    \]
    它是一个变量分离方程。

::: example
解微分方程：
\[
\frac{ \mathrm{d} y }{ \mathrm{d} x} = \frac{x - y + 1}{x + y -3}.
\]
:::

由上面的分析，首先解它对应的代数方程
\[
\begin{cases}
  x - y + 1 = 0, \\
  x + y - 3 = 0.
\end{cases}
\]
得到唯一解 $(x,y) = (1,2)$，再作代换
\[
\begin{cases}
  X = x - 1, \\
  Y = y - 2.
\end{cases}
\]
由此，原方程变为
\[
\frac{ \mathrm{d} Y }{ \mathrm{d} X} = \frac{X - Y}{X + Y}.
\]
这是一个齐次微分方程。令 $Y = uX$，当 $ 1 - 2u - u^2 \ne 0$ 时，原方程化为
\[
\frac{\mathrm{d}X}{X} = \frac{ 1 + u }{ 1 - 2u - u^2 } \mathrm{d}u,
\]
积分可得
\[
\ln X^2 = \ \ln \left| u^2 + 2u - 1 \right| + \bar{c}.
\]
还原即可得
\[
Y^2 + 2XY - X^2 = c_1,
\]
即
\[
(y-2)^2 + 2(x-1)(y-2) - (x-1)^2 = c_1 .
\]
易验证当 $ 1 - 2u - u^2 = 0$ 时，即
\[
Y^2 + 2XY - X^2 = 0
\]
也是原方程的一个解，只需令 $c_1 = 0$ 即可。因此方程的解为
\[
y^2 + 2xy - x^2 - 6y - 2x = c.
\]

### 乘积与商的情形

令 $u = xy$、$v = \frac{y}{x}$，它们的微分分别为：
\[
\mathrm{d}u =  x\mathrm{d}y + y\mathrm{d}x,\quad \mathrm{d}v = \frac{x\mathrm{d}y-y\mathrm{d}x}{x^2}.
\]

它们可以处理含有乘积 $xy$ 和商 $x/y$ 的方程。
