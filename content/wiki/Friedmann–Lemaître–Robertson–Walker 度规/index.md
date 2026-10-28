---
title: Friedmann–Lemaître–Robertson–Walker 度规
aliases: [Friedmann-Lemaître-Robertson-Walker 度规]
categories: [相对论]
---

<problems>
- “导出”一节中，截面曲率为 $k$ 的球面与双曲面的方程右端 $k^{-\frac1{2}}$、$|k|^{-\frac1{2}}$ 似乎应分别为 $k^{-1}$ 与 $-|k|^{-1}$。
- “大爆炸奇点”一节中，由连续性方程（$p \geq 0$ 时）得到的不等式似乎应为 $\rho \geq Ca^{-3}$。
</problems>

**Friedmann–Lemaître–Robertson–Walker 度规**是[[Einstein 场方程]]的解。
在物理上，
它描述一个均匀且各向同性的宇宙。

## 定义

设理想流体有[[能动张量]]
\[
T_{\mu\nu}=(p+\rho)U_{\mu}U_{\nu}+pg_{\mu\nu},
\]
其中 $U$ 是观者的四速，
故只有时间分量。

::: definition
**Friedmann–Lemaître–Robertson–Walker 度规**是在 $\mathbb{R}^4$ 上的如下度规：
\[
g=-dt^2+a(t)^2\left( \frac1{1-kr^2}dr^2+r^2(d\theta^2+\sin^2\theta d\phi^2) \right).
\]
其中 $k$ 取遍实数，
可分成三类：

1. $k>0$：
   代表[[球空间]]。

2. $k=0$：
   代表平直空间。

3. $k<0$：
   代表[[双曲空间]]。

而 $a(t)$ 满足[[Friedmann 方程]]：
\[
\begin{aligned}
    \frac{\dot{a}^2+k}{a^2}&=\frac{8\pi\rho}3.\\
    \frac{\ddot{a}}{a}&=-\frac{4\pi}3(\rho+3p).
\end{aligned}
\]
:::

::: remark
通过共形等价，
我们只需考虑宇宙的三种模型，
即 $k=0,\,1,\,-1$。
:::

::: remark
在定义中，
我们不需要[[连续性方程]]所加的限制，
因为连续性方程
\[
\dot{\rho}+3\frac{\dot{a}}{a}(p+\rho)=0
\]
可以容易地从两个 Friedmann 方程导出。
事实上这有道理，
因为在 @2 中将会看到 Friedmann 方程本质上是 Einstein 场方程，
所以已经蕴涵了连续性方程。
:::

## 导出 {@2}

均匀和各向同性的条件给出
\[
g=-dt^2+a(t)^2ds^2,
\]
其中 $ds^2$ 是一个在 $\mathbb{R}^3$ 上的度规。
再由各向同性性，
知 $ds^2$ [[截面曲率]]不依赖于截面的选取。
所以[[Schur 引理 (Riemann 几何)|Schur 引理]]说明 $ds^2$ 是[[常曲率空间]]，
因为物理上自然性，
在截面曲率为 $k$ 时不妨取最对称的情况：

1. $k>0$。
   取球面 $w^2+x^2+y^2+z^2=k^{-\frac1{2}}$。

2. $k=0$。
   取欧氏空间。

3. $k<0$。
   取双曲面 $-w^2+x^2+y^2+z^2=|k|^{-\frac1{2}}$。

然后限制在 $\mathbb{R}^3$ 上得到
\[
ds^2=\frac1{1-kr^2}dr^2+r^2(d\theta^2+\sin^2\theta d\phi^2).
\]
故可以计算出[[Ricci 曲率]]为
\[
\begin{aligned}
    R_{tt}&=-3\frac{\ddot{a}}{a},\\
    R_{ij}&=\left( \frac{\ddot{a}}{a}+2\frac{\dot{a}^2+k}{a^2} \right)g_{ij}.
\end{aligned}
\]
Einstein 场方程就给出
\[
3\frac{\dot{a}^2+k}{a^2}=G_{00}=8\pi T_{00}=8\pi\rho.
\]
这就是第一个 Friedmann 方程。
以及对 $i,j\neq t$ 求和给出
\[
-6\frac{\ddot{a}}{a}-3\frac{\dot{a}^2+k}{a^2}=g^{ij}G_{ij}=8\pi g^{ij}T_{ij}=8\pi\cdot3p.
\]
结合第一个 Friedmann 方程便得第二个 Friedmann 方程
\[
\frac{\ddot{a}}{a}=-\frac{4\pi}3(\rho+3p).
\]

## 宇宙学

Friedmann–Lemaître–Robertson–Walker 度规能够初步预测宇宙学的一些现象。

### 大爆炸奇点

由 $a>0$，
第二个 Friedmann 方程给出 $\ddot{a}<0$。
从而必有某个时间使得 $a=0$。
将其称为**大爆炸奇点**。
它的确在度规上表现奇性，
因为连续性方程可以写成
\[
\frac{d(a^3\rho)}{da}=-3pa^2,
\]
这说明当 $t\rightarrow0$ 时，
$\rho<Ca^{-3}$，
代入第一个 Friedmann 方程，
得到 $\lim_{t\rightarrow0}\dot{a}=\infty$。
两个特殊情况为：

- **尘埃宇宙**。
  即 $p=0$。
  故 $\rho\varpropto a^{-3}$。
  且在 $k=0$ 的情况下，
  $a\varpropto t^{\frac{2}3}$。

- **辐射宇宙**。
  即 $p=\frac1{3}\rho$。
  故 $\rho\varpropto a^{-4}$。
  且在 $k=0$ 的情况下，
  $a\varpropto t^{\frac{1}2}$。

### 宇宙学红移

实验证明宇宙存在红移，
即在不同星系间发出光的波长比接收光的波长更短。
直观来说，
也就是宇宙在膨胀。

设光从 $A$ 传至 $B$。
定义**红移因子**为
\[
z(t)=\frac{\nu|_A}{\nu|_B}-1.
\]
那么可以计算得
\[
z(t)=\frac{a|_B}{a|_A}-1\approx \frac{\dot{a}(t)}{a(t)}D(t),
\]
其中 $D(t)$ 是 $A$、
$B$ 之间的距离。
这就是[[Hubble 定律]]。
