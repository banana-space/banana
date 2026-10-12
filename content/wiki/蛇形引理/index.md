---
title: 蛇形引理
categories: [同调代数]
notices:
  - name: 问题
    items:
      - “证明”一节中“首先，我们得到一些信息”之后的第一项句子不完整。
      - “证明”一节中第二个引理的第 2 项缺少结论。
      - “证明”一节中蛇形引理的证明里 $S'$、$S_0$、$S_1$ 等记号混用，部分态射的方向与名称似乎与前文不符（例如 $Y' \twoheadrightarrow Y$ 似乎应为单态射，最后一个图表底行的 $X'$ 似乎应为 $X$），论证需要整理。
---

**蛇形引理**是说，在[[Abel 范畴]]中，如果有如下图中实线所示的[[交换图]]：
```math {@图表:蛇形引理}
\begin{tikzcd}
& \operatorname{ker}' \arrow[r] \arrow[d] & \operatorname{ker} \arrow[r] \arrow[d] & \operatorname{ker}'' \arrow[d] & \\
& X' \arrow[d] \arrow[r,"f"]  & X \arrow[d] \arrow[r,"g"]  & X'' \arrow[r] \arrow[d, ""{coordinate, name=Z}] & 0  \\
0 \arrow[r] & Y' \arrow[r,"u"] \arrow[d] & Y \arrow[r,"v"] \arrow[d] & Y'' \arrow[d] & \\
& \operatorname{coker}' \arrow[uuurr, "\delta" description, crossing over, dashed, leftarrow, rounded corners, to path= {-- ([xshift=-2ex]\tikztostart.west) |- (Z) [near end]\tikztonodes -| ([xshift=2ex]\tikztotarget.east) -- (\tikztotarget) } ] \arrow[r] & \operatorname{coker} \arrow[r] & \operatorname{coker}'' &
\end{tikzcd}
```
其中

- $X' \xrightarrow{f} X \xrightarrow{g} X'' \to 0$ 和
  $0 \to Y' \xrightarrow{u} Y \xrightarrow{v} Y''$ 均正合，

- $\operatorname{ker}' \coloneqq \operatorname{ker}(X' \to Y') \hookrightarrow X'$，
  $\operatorname{ker}$、$\operatorname{ker}''$、$\operatorname{coker}'$、$\operatorname{coker}$、
  $\operatorname{coker}''$ 以此类推。

## 陈述

::: theorem {@定理:蛇形引理}
对于 Abel 范畴 $\cal{A}$ 中的图表 @图表:蛇形引理，
则
$\operatorname{ker}' \to \operatorname{ker} \to \operatorname{ker}'' \xrightarrow{\delta} \operatorname{coker}' \to \operatorname{coker} \to \operatorname{coker}''$
为[[正合列]]。
如果图表中 $f \colon X' \to X$ [[单态射|单]]（或 $v \colon Y \to Y''$ 满），
则 $\operatorname{ker}' \to \operatorname{ker}$（或
$\operatorname{coker} \to \operatorname{coker}''$）亦然。
:::

## 证明

### 蛇形引理-连接态射

现在我们来构建连接态射 $\delta$，
在[[模范畴]]中连接态射 $\delta\colon \operatorname{ker}'' \dashrightarrow \operatorname{coker}'$
的构造为以下三步：

1. 对于给定的 $x''\in \operatorname{ker}''$，
   由 $X\to X'' \to 0$ 的正合性可取 $x\in X$ 使得 $x\mapsto x''$。

2. 令 $y \in Y$ 为 $x$ 在 $X \to Y$ 下的[[像]]，
   由图表交换可知 $y \in \operatorname{ker}(Y \to Y'')$。

3. 由于 $Y' \to Y \to Y''$ 正合，存在唯一的 $y'\in Y'$ 使得 $y'\mapsto y$，
   令 $y' \mapsto \bar{y}' \in \operatorname{coker}'$。
   利用图表的交换性和正合性，
   可知第一步取的 $x$ 至多只差个 $X'\to X$ 的像，
   从而第二步的 $y$ 至多只差个 $X' \to Y' \hookrightarrow Y$ 的像，
   从而 $\bar{y}'$ 无关于 $x$ 的选取。
   于是连接态射 $\delta(x'') = \bar{y}'$ 是良定的。

在 Abel 范畴中虽然没有具体的元素概念，
但是注意到当我们操作模范畴时，
我们实际上是对于“一块”对象进行拖动，
因此我们可以全然类似地对于连接态射进行构造。
$X \to X'' \to 0$ 的正合性表明 $g\colon X\twoheadrightarrow X''$ 为满态射。
同理 $u \colon Y' \hookrightarrow Y$ 为单态射，
因此可以构造图表

```math {@公式:连接态射图表}
\begin{tikzcd}
0 \ar[r] & \operatorname{ker}(g) \ar[r,hook,"s"] \ar[d,equal] &X\times_{X''}\operatorname{ker}'' \ar[r,two heads] \ar[d]\ar[dr, phantom, pos=.2, "\ulcorner"]& \operatorname{ker}''\ar[d]\\
0 \ar[r] & \operatorname{ker}(g) \ar[r,hook] \ar[d,dashed] & X \ar[r,"g"]\ar[d] & X'' \ar[d,dashed]\ar[r] & 0\\
0 \ar[r] & Y' \ar[r,"u"]\ar[d]\ar[dr, phantom, pos=.8, "\lrcorner"]& Y \ar[r,two heads] \ar[d]& \operatorname{coker}(u) \ar[r]\ar[d,equal] &0\\
&\operatorname{coker}' \ar[r,hook] & \operatorname{coker}'\sqcup_{Y'}Y \ar[r,two heads,"t"]& \operatorname{coker}(u) \ar[r] &0
\end{tikzcd}
```

这样，
$X\times_{X''}\operatorname{ker}'' \to \operatorname{coker}'\sqcup_{Y'}Y$ 就相当于给出
$x'' \mapsto y'$，
现在我们只需要说明第 3 步中 $\delta$ 的良定性即可，
这在 Abel 范畴中实现为通过若干典范态射对其进行连接得出。
首先，我们得到一些信息：

- [[拉回（范畴论）|拉回]]保核而推出保余核表明左上角的 $\operatorname{ker}(g)$ 和右下角的
  $\operatorname{coker}(u)$。

- 而后由 $0\to Y' \xrightarrow{u} Y$ 正合可知
  $Y' = \operatorname{ker}(Y \twoheadrightarrow \operatorname{coker}(u))$。
  从而根据核的函子性给出 $\operatorname{ker}(g) \dashrightarrow Y'$，
  同理，余核的函子性给出 $X'' \dashrightarrow \operatorname{coker}(u)$。

- 不难发现第一行与最后一行是正合的，以第一行为例，
  只需验证 $X\times_{X''}\operatorname{ker}''$ 处的正合性即可，
  而其恰为 $\operatorname{ker}(g)$。

从而我们知道 $\operatorname{ker}'' \simeq \operatorname{coker}(s)$ 以及
$\operatorname{coker}' \simeq \operatorname{ker}(t)$。
那么，
我们只需要说明
$\delta_0 \colon X\times_{X''}\operatorname{ker}'' \to \operatorname{coker}'\sqcup_{Y'}Y$
这一态射穿过 $\operatorname{coker}(s)$ 以及 $\operatorname{ker}(t)$ 即可。
这相当于说 $\delta_0 s = 0$ 且 $t \delta_0 = 0$。
现在我们来说明这一点。

由 $X' \xrightarrow{f} X \xrightarrow{g} X''$ 的正合性可知
$\operatorname{ker}(g) = \operatorname{im}(f)$。
而 $\operatorname{ker}(g) \dashrightarrow Y'$ 实际上可以表现为
\[
\begin{tikzcd}
  \operatorname{coim}(f) \ar[r,"\simeq"] &\operatorname{ker}(g)\ar[d,hook]\\
  X' \ar[d]\ar[r]\ar[u,two heads] &X\ar[d]\\
  Y' \ar[d] \ar[r] & Y\ar[d]\\
  \operatorname{coker}' \ar[r] & \operatorname{coker}
\end{tikzcd}
\]
而 $X'\to Y' \to \operatorname{coker}'$ 为 $0$，
根据满态射定义可知
$\operatorname{ker}(g) \dashrightarrow Y' \to \operatorname{coker}' \to \operatorname{coker}(u)$
自然为 $0$。
对偶得到另一边的情况。
由此给出连接态射
\[
X\times_{X''}\operatorname{ker}'' \twoheadrightarrow \operatorname{coker}(s) \xrightarrow{\exists !}\operatorname{ker}(t) \hookrightarrow \operatorname{coker}'\sqcup_{Y'}Y
\]

### 蛇形引理

现在就可以正式的说明什么是蛇形引理了。
为在 Abel 范畴中证明 @定理:蛇形引理，我们需要在 Abel 范畴中说明如何给出正合列。
不难发现对于复形 $X' \xrightarrow{f} X \xrightarrow{g} X''$。
其为复形相当于在说 $\operatorname{im}(f) \subset \operatorname{ker}(g)$，
而正合相当于说 $\operatorname{im}(f)$ 完全占满 $\operatorname{ker}(g)$。
从而对于任意使得 $\operatorname{im}(h) \subset \operatorname{ker}(g)$ 的态射 $S \xrightarrow{h} X$，
都有 $h^{-1}(\operatorname{im}(f)) \twoheadrightarrow S$。
因此我们可以使用这一逼近的思想来说明如何得到正合的复形，
将上述讨论形式的写出得到

::: lemma
设 $X' \xrightarrow{f} X \xrightarrow{g} X''$ 为复形，
则此复形正合当且仅当对任何满足 $gh = 0$ 的态射 $S \xrightarrow{h} X$，
存在态射 $S' \to X'$ 和满态射 $S' \twoheadrightarrow S$ 使得下图交换
\[
\begin{tikzcd}
  S' \ar[d]\ar[r,two heads]& S \ar[d,"h"]\\
  X' \ar[r,"f"]& X.
\end{tikzcd}
\]
:::

::: remark
注意到这种证明方法如果要用在后文的证明中，
则你需要找出一个已经正合的序列来得到这一满射。
:::

再添加一个技术性的引理，就可以对于蛇形引理进行证明

::: lemma {@引理:技术性引理-蛇形}
考虑实线部分的图表
\[
\begin{tikzcd}
  X \ar[r,"e"] \ar[d,"a"] & C \ar[r,"m"]\ar[d,dashed] &Y\ar[d,"b"]\\
  X' \ar[r,"e'"] & C' \ar[r,"m'"] &Y'
\end{tikzcd}
\]
并且假设 $e$ 和 $e'$ 满（或 $m$ 和 $m'$ 单）

1. 若存在虚线所述之 $\varphi$ 使得图表左半（或右半）交换，
   则另一半也交换；
   此 $\varphi$ 若存在则唯一。

2. 若 $a$ 满（或 $b$ 单），且 $\varphi$ 存在

:::

现在，我们可以来证明蛇形引理。

::: proof
后半部分是显然的，
只需证明前半部分所给出的正合列即可。
根据对偶性，
只需说明
$\operatorname{ker}' \to \operatorname{ker} \to \operatorname{ker}'' \to \operatorname{coker}'$
是正合的。
事实上 $\operatorname{ker}' \to \operatorname{ker} \to \operatorname{ker}''$
的正合性证明也相当简单。

- 首先证明 $\operatorname{ker}' \to \operatorname{ker} \to \operatorname{ker}''$ 正合，
  那么就需要说明其为复形，不难发现其由 $X' \to X \to X''$ 诱导，因此自然为复形。
  接下来说明其正合性，这就要求找到某个 $S'$，
  现在假定存在 $S$ 使得 $S \to \operatorname{ker} \to \operatorname{ker}''$ 为 $0$。
  而复合上 $\operatorname{ker} \to X$ 可知 $S \to X\to X''$ 为 $0$，
  根据 $X' \to X \to X''$ 的正合性得到
  因此得到图表
  \[
  \begin{tikzcd}
    S' \ar[d]\ar[r,two heads] & S\ar[d,"\psi"]\ar[dr,"0"] \\
    X' \ar[r,"f"]& X\ar[r,"g"] & X''.
  \end{tikzcd}
  \]
  接下来说明 $S' \to X'$ 穿过 $\operatorname{ker}'$，
  为此只需说明 $S' \to X' \to Y'$ 为 $0$ 即可，
  而 $Y' \twoheadrightarrow Y$ 以及
  $S' \to S \to \operatorname{ker} \to X \to Y$ 为 $0$，
  从而由图表的交换性以及满态射性质可知 $S' \to X' \to Y'$ 为 $0$。
  从而得到图表
  \[
  \begin{tikzcd}
    S' \ar[d]\ar[r,two heads] & S\ar[d,"\psi"]\ar[dr,"0"] \\
    \operatorname{ker}'\ar[r]\ar[d,hook] & \operatorname{ker} \ar[r]\ar[d,hook]& \operatorname{ker}''\ar[d,hook]\\
    X' \ar[r,"f"]& X\ar[r,"g"] & X''.
  \end{tikzcd}
  \]
  使用 @引理:技术性引理-蛇形 就可以直接得到上半部分图表的交换性。
  这样就完成了 $\operatorname{ker}' \to \operatorname{ker} \to \operatorname{ker}''$ 的正合性验证。

- 接下来证明比较复杂的 $\operatorname{ker} \to \operatorname{ker}'' \to \operatorname{coker}'$
  一段。
  这一段的复杂源于涉及连接态射的构造，
  首先我们确定目标，
  对于 $S \xrightarrow{\psi} \operatorname{ker}'' \xrightarrow{\delta} \operatorname{coker}'$ 为 $0$
  的 $S$
  仍然需要给出某个
  \[
  \begin{tikzcd}
    S_0 \ar[r,two heads]\ar[d] & S\ar[d,"\psi"]\ar[dr,"0"]\\
    \operatorname{ker} \ar[r] & \operatorname{ker}'' \ar[r,dashed, "\delta"] & \operatorname{coker}'
  \end{tikzcd}
  \]
  目前只有 $X\times_{X''}\operatorname{ker}'' \to \operatorname{ker}'' \to 0$ 的正合性，
  可以给出交换图表
  \[
  \begin{tikzcd}
    S_1 \ar[r,two heads]\ar[d] & S \ar[d,"\psi"]\ar[dr, "0"]\\
    X\times_{X''}\operatorname{ker}'' \ar[r] & \operatorname{ker}'' \ar[r] &0
  \end{tikzcd}
  \]
  那么接下来要做的就是想方设法将 $S_1$ 与 $X\to Y$ 扯上关系，
  相当于说我们要考虑
  \[
  S_1 \to X\times_{X''}\operatorname{ker}'' \to X \to Y.
  \]
  不难发现其复合上 $Y \xrightarrow{v} Y''$ 后为 $0$（根据图表的交换性，
  这相当于说经过 $X\times_{X''}\operatorname{ker}'' \to \operatorname{ker}'' \to X'' \to Y''$）
  从而其穿过 $\operatorname{ker}(v) \simeq \operatorname{im}{u} \simeq Y'$（$u$ 为单），
  即 $S_1 \xrightarrow{\xi} Y' \xrightarrow{u} Y$。
  接下来构造 $S' \to X'$，
  然后复合上 $f \colon X' \to X$ 和 $u \colon Y' \to Y$ 就行了（当然，
  考虑 $S' \to X\times_{X''}\operatorname{ker}'' = X\times_{X''}\operatorname{ker}'' \to X \to Y$
  也能给出态射，但是不难发现我们没有道理说明其穿过 $\operatorname{ker}$）。
  但是在此之前需要说明 $S \to Y' \to \operatorname{coker}'$ 为 $0$
  （不然它不是个复形，$X' \to Y' \to \operatorname{coker}'$ 的正合性无从施展）。
  因此考虑
  \[
  \begin{tikzcd}
    S \ar[r,"\psi"] & \operatorname{ker}'' \ar[r,dashed,"\delta"] & \operatorname{coker}' \ar[d,hook]\\
    S_1 \ar[u,two heads] \ar[r] & X\times_{X''}\operatorname{ker}''\ar[u]\ar[r,"\delta_0"]\ar[d] &\operatorname{coker}'\sqcup_{Y'}Y\\
    & X \ar[r] & Y \ar[u].
  \end{tikzcd}
  \]
  由假设可知第一行的合成为 $0$。
  从而由满态射和单态射的泛性质立刻得知第二行的合成也为 $0$。
  考虑图表 @公式:连接态射图表 的左下角可知这相当于说
  \[
  S_1 \to Y' \to Y \to \operatorname{coker}'\sqcup_{Y'}Y
  \]
  为 $0$，从而 $S_1 \to Y' \to \operatorname{coker}'$ 为 $0$。

  现在对于 $X' \to Y' \to \operatorname{coker}'$ 这一正合列，可得
  \[
  \begin{tikzcd}
    S' \ar[r,two heads]\ar[d,"k"]& S_1 \ar[d,"\xi"]\ar[dr,"0"]\\
    X' \ar[r]\ar[d,"f"]& Y' \ar[r]\ar[d,"u"] & \operatorname{coker}'\ar[d]\\
    X \ar[r] & Y \ar[r] & \operatorname{coker}
  \end{tikzcd}
  \]
  现在我们就得到了两个从 $S' \to X$ 的态射，
  分别为前文构造的 $k$ 以及在构造之前提到的
  $S' \to X\times_{X''}\operatorname{ker}'' = X\times_{X''}\operatorname{ker}'' \to X \to Y$。
  现在我们来试图勾连这两个态射，记 $X'\xrightarrow{a} Y'$ 且 $X \xrightarrow{b} Y$
  \[
  \begin{tikzcd}
    S_0 \ar[r, two heads]\ar[d,"k"]\ar[drr, pos=0.7 ,"\lambda"]& S_1 \ar[d,crossing over,"\lambda"]\ar[r] & X\times_{X''}\operatorname{ker}''\ar[d]\\
    X' \ar[r,"a"] \ar[d,"f"] & Y' \ar[d,"u"]& X\ar[dl,"b"]\\
    X \ar[r,"b"] &Y
  \end{tikzcd}
  \]
  可知图表的交换性，
  从而有 $b\lambda = bfk$。
  因此 $\lambda -fk\colon S_0 \to X$ 穿过
  $\operatorname{ker} = \operatorname{ker}(b) \hookrightarrow X$ 分解。
  现在就得到了图表
  \[
  \begin{tikzcd}
    S_0\ar[dd,bend right = {40 pt},"\lambda -fk"']\ar[d]\ar[r,two heads] & S_1 \ar[r,two heads] & S\ar[d,"\psi"]\\
    \operatorname{ker} \ar[rr]\ar[d,hook] && \operatorname{ker}''\ar[d,hook]\\
    X' \ar[rr,"g"]&& X''.
  \end{tikzcd}
  \]
  其交换性是显然的，
  不难发现 $S' = S_0$，
  因此证明了 $\operatorname{ker} \to \operatorname{ker}'' \to \operatorname{coker}'$ 的正合性。

:::

```terms
蛇形引理:
  en: snake lemma
```
