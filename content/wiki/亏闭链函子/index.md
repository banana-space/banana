---
title: 亏闭链函子
aliases: [邻闭链函子, 亏闭链, 邻闭链]
categories: [层论]
navboxes: [层论]
---

在[[代数几何]]中，
**亏闭链函子**描述一族[[空间]]沿一个参数[[退化（代数几何）|退化]]时，
其拓扑如何变化。

具体地说，考虑一族空间 $(X_t)_{t \in D}$，
其中 $D$ 是复平面上的圆盘，
并设想 $X_0$ 有[[奇点]]，而其余的 $X_t$ 是光滑的。
当 $t$ 趋于 $0$ 时，$X_t$ 上有些[[闭链]]会缩成一点，消失在奇点处，
这些闭链称为**亏闭链**。

```tikz {caption="环面退化为坍缩环面。"}
\begin{tikzpicture}
\usetikzlibrary{arrows.meta}
\definecolor{tubeA}{HTML}{7F95B2}
\definecolor{tubeB}{HTML}{B9C8DB}
\definecolor{tubeC}{HTML}{E6ECF4}
\definecolor{tubeD}{HTML}{FAFBFD}
\definecolor{ink}{HTML}{36465C}
\definecolor{cycle}{HTML}{D23F2B}
\definecolor{disc}{HTML}{E9EEF5}
% 环面的明暗：25bp 是外轮廓，17.5bp 是管子最亮的一圈。
\pgfdeclareradialshading{torus}{\pgfpointorigin}{color(0bp)=(tubeA);
  color(8bp)=(tubeA); color(12bp)=(tubeB); color(15bp)=(tubeC);
  color(17.5bp)=(tubeD); color(20bp)=(tubeC); color(22.5bp)=(tubeB);
  color(25bp)=(tubeA); color(50bp)=(tubeA)}
% \fibre{位置}{管子在右端的半径}{外轮廓的控制点}{内轮廓的控制点}{标签}：
% 环面的左半边是两个半椭圆，右半边各用两段曲线，在 y = 0 处相接；
% 内轮廓与外轮廓方向相反，所以中间留空。
\def\R{.72}
\newcommand\fibre[7]{\begin{scope}[shift={(#1,0)}]
  \shadedraw[shading=torus, draw=ink, line width=.55pt, line join=round]
    (-.055,.775) .. controls (.535,.775) and (#3,#4) .. ({\R+#2},0)
      .. controls (#3,-#4) and (.535,-.775) .. (-.055,-.775)
      arc (270:90:.935 and .775) -- cycle
    (.065,-.27) .. controls (.365,-.27) and (#5,-#6) .. ({\R-#2},0)
      .. controls (#5,#6) and (.365,.27) .. (.065,.27)
      arc (90:270:.515 and .27) -- cycle;
  % 亏闭链：背面画虚线，正面画实线；半径为零时成为结点。
  \ifdim #2pt>0pt
    \begin{scope}[cm={#2,0,0,#2*.69,(\R,0)}]
      \draw[cycle, line width=.45pt, dash pattern=on 1.6pt off 1.3pt]
        (180:1) arc (180:360:1);
      \draw[cycle, line width=1pt, line cap=round] (0:1) arc (0:180:1);
    \end{scope}
    \pgfmathsetmacro\edge{\R+#2+.018}
  \else
    \fill[cycle] (\R,0) circle (1.6pt);
    \pgfmathsetmacro\edge{\R+.056}
  \fi
  % 标签与红色部分（圆周的线宽、结点的半径都算在内）的距离相同。
  \node[cycle, anchor=west] at ({\edge+.08},0) {#7};
\end{scope}}
% 底空间：圆盘、三个点、绕 0 的回路。
\fill[disc] (.35,-2.45) ellipse (4.85 and 1.05);
\foreach \x in {-2.85,0,2.85} {
  \draw[ink!45, line width=.45pt, dash pattern=on .4pt off 2pt,
    line cap=round] (\x,-.92) -- (\x,-2.45);
  \fill[ink] (\x,-2.45) circle (1.3pt);
}
\draw[ink!35, line width=1.4pt, -{Stealth[length=7pt, width=6.5pt]}]
  (2.85,-2.45) ++(105:.82 and .47) arc (105:430:.82 and .47);
% 三条纤维。
\fibre{-2.85}{.216}{.93}{.425}{.51}{.12}{$\delta$}
\fibre{0}{.092}{.85}{.305}{.615}{.18}{$\delta$}
\fibre{2.85}{0}{.865}{.27}{.605}{.225}{$p$}
% 映射 f。
\node[ink, scale=1.25] at (-5.4,.1) {$X$};
\node[ink, scale=1.25] at (-5.4,-2.45) {$D$};
\draw[ink, line width=1.1pt, -{Stealth[length=8pt, width=6.5pt]}]
  (-5.4,-.35) -- node[left, ink, pos=.45, scale=1.1] {$f$} (-5.4,-1.98);
\begin{scope}[ink]
  \node at (-2.85,1.08) {$X_t$};
  \node at (0,1.08) {$X_{t'}$};
  \node at (2.85,1.08) {$X_0$};
  \node at (-2.85,-2.7) {$t$};
  \node at (0,-2.7) {$t'$};
  \node at (2.85,-2.67) {$0$};
  \node at (3.95,-2.6) {$T$};
\end{scope}
\end{tikzpicture}
```

例如，上图中的[[复环面]] $X_t$ 退化为**坍缩环面** $X_0$，
此时缩掉的圆周 $\delta$ 就是亏闭链。
这里全空间 $X$ 是所有 $X_t$ 构成的复维数为 $2$ 的光滑空间，即复流形。

**亏闭链函子**刻画亏闭链对应的[[上同调]]类。
作为函子，它作用于 $X$ 上的[[层]] $\mathcal{F}$。
大致而言，考虑[[层上同调]]
\[
H^\bullet (X_t; \mathcal{F} |_{X_t}) .
\]
当 $t \to 0$ 时，该上同调会变动，
而变动（即亏损）的部分由 $X_0$ 上的层
$\varphi_f \mathcal{F}$ 描述。
该层即 $\mathcal{F}$ 的亏闭链，
其层上同调即上述上同调中变动的部分。
特别地，[[常值层]]的亏闭链描述了
$X_t$ 的[[奇异上同调]]当 $t \to 0$ 时变动的部分。
例如，在上图中，$X$ 上常值层的亏闭链是 $p$ 处的[[点层]]（带有[[移位]] $-1$），
它记录了闭链 $\delta$ 对应的 $1$ 维上同调类。
更一般地，常值层的亏闭链的茎由 [[Milnor 纤维]]的[[约化上同调]]给出。

亏闭链函子常通过**邻闭链函子**来定义。
后者描述与 $X_0$ 相邻的空间 $X_t$ 的上同调，
取值也是 $X_0$ 上的层。
例如，在上图中，考虑将圆周 $\delta$ 捏成一点的映射 $X_t \to X_0$，
则常值层的邻闭链是 $X_t$ 上常值层沿该映射的[[导出前推层]]，
从而其层上同调给出 $X_t$ 的上同调。
常值层的亏闭链则是其邻闭链与 $X_0$ 上常值层之间相差的部分。

亏闭链、邻闭链还带有[[单值]]作用。
让 $t$ 绕 $0$ 旋转一周时 $X_t$ 回到自身，
这能作用于 $X_t$ 的上同调，从而也作用于亏闭链、邻闭链。
例如，上图中，单值 $T$ 是沿 $\delta$ 的 [[Dehn 扭转]]。

在相差[[移位]]的意义下，亏闭链函子保持[[错致层]]，
且与 [[Verdier 对偶]]交换。

亏闭链函子由 [[Grothendieck]] 引入 [@SGA7I, 第 I 讲]，
[[Deligne]] 进一步发展了这一理论 [@SGA7II, 第 XIII、XIV 讲]。

## 定义

亏闭链函子在几种层论中都有定义，我们将在下面几个小节中依次介绍。
后文将主要讨论第一种，但大部分内容在其他几种中也有对应。

### 复解析空间上的层

设 $D \subset \mathbb{C}$ 是以 $0$ 为圆心的开圆盘，
$f \colon X \to D$ 是[[复解析空间]]的全纯映射，
并考虑纤维 $X_0 = f^{-1} (0)$。
如引言所述，我们想要把附近纤维
$X_t = f^{-1} (t)$
的上同调搬到 $X_0$ 上。
不过直接考虑 $X_t$ 的上同调并不是最好的办法，
因为这依赖于 $t$ 的选取，也难以看出其如何随 $t$ 而变化。

解决这一问题的办法是考虑去心圆盘 $D^* = D \setminus \{ 0 \}$，
并将其展开成其[[万有覆叠]]
$\pi \colon \widetilde{D}^* \to D^*$，
这是纤维为 $\mathbb{Z}$ 的覆叠。
例如，可以取
$\widetilde{D}^* = \{ z \in \mathbb{C} \mid \operatorname{Re} z < \log r \}$，
其中 $r$ 为圆盘半径，
而映射 $\pi$ 就是[[指数函数]] $\exp$。

由于 $\widetilde{D}^*$ 可缩，
如果假设 $f$ 在 $D^*$ 上是[[纤维丛]]，
那么拉回 $\widetilde{X}^* = X \times_D \widetilde{D}^*$
就同伦等价于任一个 $X_t$。
在一般情形，我们也把 $\widetilde{X}^*$ 看成一个不依赖选取的邻近纤维。
记 $X^* = X \setminus X_0$，则有映射
\[
X_0 \overset{i}{\longrightarrow} X \overset{j}{\longleftarrow} X^*
\overset{\pi}{\longleftarrow} \widetilde{X}^* ,
\]
其中 $i$ 是闭嵌入，$j$ 是开嵌入，$\pi$ 是纤维为 $\mathbb{Z}$ 的覆叠。
通过这一串映射，就能典范地把上述邻近纤维 $\widetilde{X}^*$
的上同调转移到 $X_0$ 上，
从而定义邻闭链函子。

::: definition [邻闭链函子、亏闭链函子]
在上述情形下，设 $\Lambda$ 是交换 [[Noether 环]]，
记 $\mathsf{D}^+ (X; \Lambda)$ 为 $X$ 上
$\Lambda$-模层的下有界[[导出范畴]]，
视为[[稳定 $(\infty, 1)$-范畴]]。
本条目中的六函子和整体截面函子 $\Gamma$ 都指[[导出函子]]。

- **邻闭链函子** $\psi_f \colon \mathsf{D}^+ (X; \Lambda) \to \mathsf{D}^+ (X_0; \Lambda)$
  定义为
  \[
  \psi_f = i^* \, (j \pi)_* \, (j \pi)^* .
  \]
  由[[伴随函子]] $(j \pi)^* \dashv (j \pi)_*$ 的单位诱导的映射
  \[
  \operatorname{sp} \colon i^* \longrightarrow \psi_f ,
  \]
  称为**特化映射**。

- **亏闭链函子**
  $\varphi_f \colon \mathsf{D}^+ (X; \Lambda) \to \mathsf{D}^+ (X_0; \Lambda)$
  定义为特化映射的[[同伦余纤维]]，即有[[正合三角]]
  \[
  i^* \overset{\operatorname{sp}}{\longrightarrow}
  \psi_f \overset{\operatorname{can}}{\longrightarrow}
  \varphi_f ,
  \]
  其中 $\operatorname{can}$ 称为**典范映射**。
:::

大致来说，特化映射可以视为将附近的纤维
$X_t$（这里由 $\widetilde{X}^*$ 代替）的同调类通过取
$t \to 0$ 的极限而转移到特殊纤维 $X_0$ 上；
上面定义的映射与此方向相反，因为那是上同调上的对偶映射。
亏闭链函子则记录了特化映射与同构相差多少。
我们也利用了稳定 $(\infty, 1)$-范畴中同伦余纤维的函子性来定义函子 $\varphi_f$，
这是不能仅从[[三角范畴]]中的映射锥得到的。

::: remark [移位]
不少文献把 $\psi_f [-1]$ 和 $\varphi_f [-1]$ 记作 $\psi_f$ 和 $\varphi_f$，
因为移位后的函子把错致层变为错致层，见 @thm:perverse。
:::

下面，我们考虑让 $t$ 绕 $0$ 旋转一周得到的[[单值]]信息。

::: definition [单值]
考虑 $\widetilde{D}^*$ 的覆叠变换
$\tau \colon z \mapsto z + 2 \pi \mathrm{i}$，
这对应了让 $t = \exp z$ 绕 $0$ 逆时针旋转一周。

- 沿 $\tau$ 拉回诱导的自同构
  $T \colon \psi_f \overset{\sim}{\to} \psi_f$
  称为**单值**。

- 上述自同构及典范的同伦
  $T \circ \operatorname{sp} \simeq \operatorname{sp}$
  诱导了自同构
  $T \colon \varphi_f \overset{\sim}{\to} \varphi_f$，
  也称为**单值**。

- 同伦 $T \circ \operatorname{sp} \simeq \operatorname{sp}$
  给出同伦 $(T - 1) \circ \operatorname{sp} \simeq 0$，
  因此 $T - 1$ 经 $\operatorname{can}$ 分解，得到**变差映射**
  $\operatorname{var} \colon \varphi_f \to \psi_f$，满足
  \[
  \operatorname{var} \circ \operatorname{can} \simeq T - 1 ,
  \qquad
  \operatorname{can} \circ \operatorname{var} \simeq T - 1 .
  \]
:::

上面的最后一点说明，单值造成的变化可以完全由亏闭链上的信息描述。
下面 @thm:picard-lefschetz 的 Picard–Lefschetz 公式是这一点的具体形式。

关于单值的方向，当 $f$ 在 $D^*$ 上是纤维丛时，
设 $h \colon X_t \to X_t$ 是沿逆时针环路平行移动得到的同胚，
则 $T$ 在 $H^\bullet (X_t; \Lambda)$ 上就是 $(h^*)^{-1}$，
在同调上则是 $h_*$。

亏闭链、邻闭链的茎可以由具体的几何对象来描述：
在一点 $x \in X_0$ 处，我们只考虑 $x$ 附近的一小块纤维，
称为 **[[Milnor 纤维]]**。
具体来说，在 $x$ 附近把 $X$ 嵌入 $\mathbb{C}^N$，
并记 $B_\varepsilon (x) \subset X$ 为以 $x$ 为中心、
半径为 $\varepsilon$ 的开球（关于诱导度量），
则 $f$ 在 $x$ 处的 Milnor 纤维定义为
\[
M_x = B_\varepsilon (x) \cap f^{-1} (t) ,
\qquad 0 < |t| \ll \varepsilon \ll 1 .
\]

::: proposition {@prop:stalks}
设 $\mathcal{F}$ 是[[可构造层|可构造层复形]]。
则对任一点 $x \in X_0$ 及任意 $k$，有
\[
\mathcal{H}^k (\psi_f \mathcal{F})_x \simeq H^k (M_x; \mathcal{F}) ,
\qquad
\mathcal{H}^k (\varphi_f \mathcal{F})_x
\simeq H^{k + 1} (B_\varepsilon (x), M_x; \mathcal{F}) ,
\]
并且其单值作用由 Milnor 纤维的单值诱导。
特别地，对常值层 $\Lambda_X$，有
\[
\mathcal{H}^k (\varphi_f \Lambda_X)_x \simeq \tilde{H}^k (M_x; \Lambda) ,
\]
即 $M_x$ 的[[约化上同调]]。
:::

见 [@MaximSchurmann2022, 命题 4.11、推论 4.14、例 4.15]。

### 概形上的平展层

对[[概形]]上的平展层，可以仿照上面的做法定义 [@SGA7II, 第 XIII 讲, 2.1]。
此时圆盘换成 [[Hensel 环|Hensel]] [[离散赋值环]]的谱 $S$：
它的闭点 $s$ 相当于圆心，普遍点 $\eta$ 相当于 $D^*$，
而几何普遍点 $\bar{\eta}$ 相当于 $\widetilde{D}^*$。
单值作用则换成 [[Galois 群]]的作用。

::: definition [邻闭链函子、亏闭链函子]
设 $f \colon X \to S$ 是[[有限型态射]]，
$\Lambda$ 是挠环，其阶与 $S$ 的剩余特征互素。
记 $\bar{S}$ 为 $S$ 在 $\bar{\eta}$ 中的正规化，$\bar{s}$ 为其闭点，
并考虑基变换 $X_{\bar{s}} \overset{\bar{\imath}}{\to} X_{\bar{S}}
\overset{\bar{\jmath}}{\leftarrow} X_{\bar{\eta}}$。
对 $X$ 上 $\Lambda$-模层的平展下有界复形 $\mathcal{F}$，
定义其**邻闭链**
\[
\psi_f \mathcal{F} = \bar{\imath}^* \, \bar{\jmath}_* \,
(\mathcal{F} |_{X_{\bar{\eta}}}) ,
\]
并定义**亏闭链** $\varphi_f \mathcal{F}$ 为特化映射
$\mathcal{F} |_{X_{\bar{s}}} \to \psi_f \mathcal{F}$ 的同伦余纤维。

[[Galois 群]] $\operatorname{Gal} (\bar{\eta} / \eta)$
作用在这些函子上；
[[惯性群]]的每个元素 $\sigma$ 给出变差映射
$\operatorname{Var} (\sigma) \colon \varphi_f \mathcal{F} \to \psi_f \mathcal{F}$。
:::

此时，Milnor 纤维的类比是 $X_{(\bar{x})} \times_{\bar{S}} \bar{\eta}$，
其中 $X_{(\bar{x})}$ 是 $X_{\bar{S}}$ 在几何点 $\bar{x}$ 处的[[严格 Hensel 化]]，
而 $\psi_f \mathcal{F}$ 在 $\bar{x}$ 处的茎是
$\Gamma (X_{(\bar{x})} \times_{\bar{S}} \bar{\eta}; \mathcal{F})$
[@SGA7II, 第 XIII 讲, 命题 2.1.4]。

### D-模

[[D-模]]也有邻闭链、亏闭链函子。
对 D-模而言，这些函子不需要拓扑构造，而可以从一个滤链中直接读出。

设 $\mathcal{M}$ 是复流形 $X$ 上的[[正则完整 D-模|正则完整左 D-模]]，
其相应错致层的单值是[[拟幂幺元|拟幂幺]]的，
并设 $f \colon X \to \mathbb{C}$ 是全纯函数。
把 $\mathcal{M}$ 沿 $f$ 的图像
$X \to X \times \mathbb{C}$ 前推，得到 $\mathcal{M}_f$。
记 $t$ 为 $\mathbb{C}$ 上的坐标。
**Kashiwara–Malgrange 滤链**是 $\mathcal{M}_f$ 上
以 $\mathbb{Q}$ 为指标的递减滤链 $V^\alpha$，
满足适当的有限性条件，并且
$t V^\alpha \subset V^{\alpha + 1}$、$\partial_t V^\alpha \subset V^{\alpha - 1}$，
而 $\partial_t t - \alpha$ 在 $\operatorname{gr}_V^\alpha \mathcal{M}_f$ 上幂零。
此时
\[
\psi_f \mathcal{M} = \bigoplus_{0 < \alpha \leq 1} \operatorname{gr}_V^\alpha \mathcal{M}_f ,
\qquad
\varphi_f \mathcal{M} = \bigoplus_{0 \leq \alpha < 1} \operatorname{gr}_V^\alpha \mathcal{M}_f ,
\]
其中 $\operatorname{gr}_V^\alpha$ 对应于单值的特征值为
$\mathrm{e}^{-2 \pi \mathrm{i} \alpha}$ 的部分。
在 [[Riemann–Hilbert 对应]]下，
它们对应于错致层的 $\psi_f [-1]$ 和 $\varphi_f [-1]$
[@Malgrange1983; @Kashiwara1983; @BudurSaito2005, 第 4 节; @Saito2016, 2.1、A.2 节]。

特征值不为 $1$ 的部分在两边是同一项，典范映射是恒等映射。
对特征值为 $1$ 的部分，在相差可逆因子的意义下，典范映射和变差映射就是
$-\partial_t \colon \operatorname{gr}_V^1 \to \operatorname{gr}_V^0$ 和
$t \colon \operatorname{gr}_V^0 \to \operatorname{gr}_V^1$；
其复合 $t \circ (-\partial_t)$ 是 $N = (2 \pi \mathrm{i})^{-1} \log T$，
而不是 $T - 1$。

### 混 Hodge 模

复解析空间上的[[混 Hodge 模]]是带有额外结构的
$\mathbb{Q}$ 系数[[错致层]]，
这里的额外结构包括其复化对应的[[正则完整 D-模]]上的 [[Hodge 滤链]]，
以及错致层、D-模两者上的[[权滤链]]。
它们构成 Abel 范畴 $\mathsf{MHM} (X)$。

对复代数簇 $X$ 上的函数 $f$，有正合函子
\[
\psi_f^\mathrm{H} , \, \varphi_f^\mathrm{H} \colon
\mathsf{MHM} (X) \longrightarrow \mathsf{MHM} (X_0) ,
\]
它们在错致层的部分上是 $\psi_f [-1]$、$\varphi_f [-1]$，
在 D-模的部分上是上一小节中的 $\psi_f$、$\varphi_f$
[@MaximSchurmann2018, 第 4 节]。

单值 $T$ 不保持 Hodge 滤链，因此不是混 Hodge 模的态射。
设 $T = T_\mathrm{s} T_\mathrm{u}$ 是它的半单部分与幂幺部分之积，
则 $T_\mathrm{s}$ 是混 Hodge 模的自同构，
而 $N = (2 \pi \mathrm{i})^{-1} \log T_\mathrm{u}$
是到 [[Tate 扭转]]的态射 $\psi_f^\mathrm{H} \to \psi_f^\mathrm{H} (-1)$。
在 $\psi_f^\mathrm{H}$ 上，Hodge 滤链由 [[$V$ 滤链]]诱导，
权滤链则由 $N$ 以某种方式决定。
混 Hodge 模的定义要求这仍给出混 Hodge 模，
从而亏闭链函子也是混 Hodge 模定义的一部分 [@Saito1988; @Saito1990]。

按单值的特征值是否为 $1$，亏闭链分解为
\[
\varphi_f^\mathrm{H} = \varphi_{f, 1}^\mathrm{H} \oplus \varphi_{f, \neq 1}^\mathrm{H} ,
\]
其中 $\varphi_{f, \neq 1}^\mathrm{H}$ 同构于邻闭链中相应的部分
[@Saito2016, 2.1、A.2 节]。
因此，文献中常只写出 $\psi_f^\mathrm{H}$ 和 $\varphi_{f, 1}^\mathrm{H}$。

## 例子

我们沿用定义中的记号。若无特别说明，以下都考虑复解析空间上的层。

::: example [常值族]
设 $X = X_0 \times D$ 是纤维恒为 $X_0$ 的族，
$f \colon X \to D$ 是投影，
并记 $p \colon X \to X_0$ 为到 $X_0$ 的投影。
则对形如 $\mathcal{F} = p^* \mathcal{G}$ 的层，
其中 $\mathcal{G} \in \mathsf{D}^+ (X_0; \Lambda)$，都有
\[
\psi_f \mathcal{F} \simeq \mathcal{G} , \qquad
\varphi_f \mathcal{F} \simeq 0 ,
\]
并且单值 $T$ 为[[恒同映射]]。
这是因为 $\widetilde{D}^*$ 可缩，从而对任意开集 $U \subset X_0$，
$\mathcal{F}$ 在 $U \times \widetilde{D}^*$ 上的上同调
就是 $\mathcal{G}$ 在 $U$ 上的上同调。
特别地，常值层的亏闭链为零，即使 $X_0$ 有奇点也是如此。
:::

::: example [支在 $X_0$ 上的层]
考虑 $X$ 上形如 $\mathcal{F} = i_* \mathcal{G}$ 的层，
其中 $i \colon X_0 \to X$ 是含入映射，
$\mathcal{G} \in \mathsf{D}^+ (X_0; \Lambda)$。则
\[
\psi_f \mathcal{F} \simeq 0 , \qquad
\varphi_f \mathcal{F} \simeq \mathcal{G} [1] ,
\]
单值 $T$ 为[[恒同映射]]。
这是由于 $j^* i_* \mathcal{G} = 0$。
:::

::: example [$z^n$]
设 $D \subset \mathbb{C}$ 是单位圆盘，
$f \colon X = D \to D$ 是分歧的 $n$ 重覆叠 $f (z) = z^n$，
其中 $n \geq 1$。

则 $X_0$ 是一点，
而 Milnor 纤维 $M_0$ 是 $n$ 个点，单值 $T$ 轮换这些点。
因此常值层的邻闭链是
$\psi_f \Lambda_D \simeq \Lambda^{\oplus n}$，
特化映射 $\Lambda \to \Lambda^{\oplus n}$ 是对角映射，
从而亏闭链是 $\varphi_f \Lambda_D \simeq \Lambda^{\oplus n} / \Lambda$。
:::

::: example [坍缩环面] {@ex:pinched}
设 $D = \{ t \in \mathbb{C} \mid |t| < 4/27 \}$，
$X \subset \mathbb{P}^2 \times D$ 是方程
\[
y^2 z = x^3 + x^2 z + t z^3
\]
定义的复曲面，$f \colon X \to D$ 是到 $t$ 的投影。
当 $t \neq 0$ 时，$X_t$ 是[[椭圆曲线]]，拓扑上是环面。
而 $X_0$ 是带[[结点]]的三次曲线 $y^2 = x^2 (x + 1)$，
由球面 $\mathbb{P}^1$ 粘合两点得到，拓扑上是坍缩环面，其结点为 $p = [0 : 0 : 1]$。
这就是引言图中的一族空间。

$X$ 是光滑的，并且 $f$ 只在 $p$ 处有[[临界点]]。
在 $p$ 附近，取局部坐标
\[
u = y - x \sqrt{1 + x} ,
\qquad
v = y + x \sqrt{1 + x} ,
\]
则 $f = u v$。
因此，Milnor 纤维 $M_p$ 是环带 $\{ u v = t \}$，
它同伦等价于圆周 $\delta = \{ u v = t, \ |u| = |v| \}$；
在其余的点 $x \in X_0$ 处，$M_x$ 是圆盘。
由 @prop:stalks，
\[
\mathcal{H}^0 (\psi_f \Lambda_X) \simeq \Lambda_{X_0} ,
\qquad
\mathcal{H}^1 (\psi_f \Lambda_X) \simeq \Lambda_p ,
\qquad
\varphi_f \Lambda_X \simeq \Lambda_p [-1] ,
\]
其中 $\Lambda_p$ 是 $p$ 处茎为 $\Lambda$ 的点层。
:::

::: example [非退化临界点] {@ex:morse}
设 $X \subset \mathbb{C}^{n + 1}$ 是原点的邻域，
$f = x_0^2 + \cdots + x_n^2$。
则 Milnor 纤维 $M_0$ 微分同胚于 $n$ 维球面的切丛的单位圆盘丛，
同伦等价于 $S^n$，从而 $\varphi_f \Lambda_X \simeq \Lambda_0 [-n]$。

我们将上述球面 $S^n$ 对应的亏闭链称为**亏球面**。
例如，引言的图示就描述了 $n = 1$ 的情况，
即 @ex:pinched 中点 $p$ 附近的局部模型。
:::

::: example [孤立奇点]
设 $X \subset \mathbb{C}^{n + 1}$ 是原点的邻域，
$f$ 只在原点有临界点，其中 $f (0) = 0$。
Milnor 证明了 $M_0$ 同伦等价于 $\mu$ 个 $n$ 维球面的[[单点并]]，其中
\[
\mu = \dim_\mathbb{C} \mathbb{C} \{ x_0, \ldots, x_n \}
/ (\partial f / \partial x_0, \ldots, \partial f / \partial x_n)
\]
是 **[[Milnor 数]]** [@Milnor1968]。
因此 $\varphi_f \Lambda_X \simeq \Lambda_0^{\oplus \mu} [-n]$。
例如，对[[尖点]] $f = x_0^2 + x_1^3$，有 $\mu = 2$，$M_0$ 是挖去一点的环面。
:::

## 性质

下面仍沿用定义中的记号。若无特别说明，都考虑复解析空间上的层。

### 支集

在全空间 $X$ 光滑时，亏闭链只可能出现在 $f$ 的[[临界点]]处，
也即 $X_0$ 的[[奇点]]处：

::: proposition [支集] {@prop:support}
设 $X$ 是复流形，$\mathcal{F}$ 是可构造层复形，
并假设其上同调层都是[[局部系]]。
若 $f$ 在某点 $x \in X_0$ 处是[[浸没]]，
则 $\varphi_f \mathcal{F}$ 在 $x$ 附近为零。

特别地，$\varphi_f \Lambda_X$ 的支集包含于 $f$ 在 $X_0$ 上的[[临界点]]集，
也即由 $f$ 定义的解析子空间 $X_0$（可能不既约）的[[奇点]]集。
:::

::: proof
此时 $B_\varepsilon (x)$ 和 $M_x$ 都可缩，因此 $H^* (B_\varepsilon (x), M_x; \mathcal{F}) = 0$。
由 @prop:stalks 即得。
:::

::: remark
更一般地，设 $X$ 是复流形，$\mathcal{F}$ 是可构造层复形。
若 $df_x$ 不在 $\mathcal{F}$ 的[[奇异支集]]中，
则 $(\varphi_f \mathcal{F})_x = 0$ [@KashiwaraSchapira1990]。
:::

### 紧合前推

亏闭链函子与[[紧合映射|紧合]]前推交换：

::: proposition [紧合前推] {@prop:proper}
设 $g \colon Y \to X$ 是[[紧合映射]]，$g_0 \colon Y_0 \to X_0$ 是它在 $X_0$ 上的限制。
则有与特化映射、单值相容的同构
\[
(g_0)_* \, \psi_{f g}
\simeq \psi_f \, g_* ,
\qquad
(g_0)_* \, \varphi_{f g}
\simeq \varphi_f \, g_* .
\]
:::

::: proof
第一式由[[基变换定理|紧合基变换]]得到：
它把 $(g_0)_* i^*$ 换成 $i^* g_*$，
而 $j \pi$ 是局部同胚，其拉回与 $g_*$ 交换。
第一式与特化映射相容，取同伦余纤维即得第二式。
:::

### 邻闭链与附近纤维的上同调

将 @prop:proper 中的 $g \colon Y \to X$ 与 $f \colon X \to D$
分别换成 $f \colon X \to D$ 与 $\mathrm{id} \colon D \to D$，
并注意到在后一种记号下，
$f_* \mathcal{F}$ 的上同调层在足够小的 $D^*$ 上是局部系，就得到：

::: proposition [邻闭链与附近纤维的上同调] {@prop:nearby}
设 $f$ 紧合，$\mathcal{F}$ 是可构造层复形，
$D$ 足够小。则对任意 $t \in D^*$，
有自然的同构 $\Gamma (X_0; \psi_f \mathcal{F})
\simeq \Gamma (X_t; \mathcal{F})$，
并且有长正合列
\[
\cdots \longrightarrow
H^k (X_0; \mathcal{F}) \longrightarrow
H^k (X_t; \mathcal{F}) \longrightarrow
H^k (X_0; \varphi_f \mathcal{F}) \longrightarrow
H^{k + 1} (X_0; \mathcal{F}) \longrightarrow
\cdots .
\]
特别地，若 $\varphi_f \mathcal{F} = 0$，
则 $X_0$ 和 $X_t$ 的 $\mathcal{F}$ 系数上同调同构。
:::

::: example [坍缩环面的上同调] {@ex:pinched-cohomology}
继续考虑 @ex:pinched。
由 $\varphi_f \Lambda_X \simeq \Lambda_p [-1]$，
只有 $H^1 (X_0; \varphi_f \Lambda_X) \simeq \Lambda$ 不为零，
因此 @prop:nearby 中的长正合列给出
$H^0 (X_0; \Lambda) \simeq H^0 (X_t; \Lambda)$，以及
\[
0 \longrightarrow
H^1 (X_0; \Lambda) \longrightarrow
H^1 (X_t; \Lambda) \longrightarrow
\Lambda \longrightarrow
H^2 (X_0; \Lambda) \longrightarrow
H^2 (X_t; \Lambda) \longrightarrow
0 .
\]
最后一个映射是 $\Lambda$ 到自身的满射，因而是同构，于是
\[
0 \longrightarrow
\Lambda \longrightarrow
\Lambda^{\oplus 2} \longrightarrow
\Lambda \longrightarrow
0 .
\]
这里的映射 $H^1 (X_t; \Lambda) \to \Lambda$ 是在 $\delta$ 上取值（可能差一个符号）。
也就是说，$X_t$ 上的上同调类来自 $X_0$，当且仅当它在亏闭链 $\delta$ 上为零。
一般的非退化临界点也有类似的正合列 [@SGA7II, 第 XV 讲, 定理 3.4]。
:::

### 单值

下面的命题大致是说，邻闭链中在单值作用下不变的部分给出 $X^*$ 的上同调：

::: proposition {@prop:wang}
对 $\mathcal{F} \in \mathsf{D}^+ (X; \Lambda)$，有余纤维列
\[
i^* j_* j^* \mathcal{F} \longrightarrow
\psi_f \mathcal{F} \overset{T - 1}{\longrightarrow}
\psi_f \mathcal{F} .
\]
:::

::: proof
$\pi$ 是 $\mathbb{Z}$-主丛，
因此对 $X^*$ 上的层 $\mathcal{G}$，
$\pi_* \pi^* \mathcal{G}$ 局部上是可数个 $\mathcal{G}$ 的积，
$T - 1$ 是相邻两项之差，它是满射，核为 $\mathcal{G}$。
于是有余纤维列
$\mathcal{G} \to \pi_* \pi^* \mathcal{G}
\to \pi_* \pi^* \mathcal{G}$。
取 $\mathcal{G} = j^* \mathcal{F}$，并作用 $i^* j_*$ 即得。
:::

在茎上，这就是 Milnor 纤维化的[[王序列]]。

在[[非退化临界点]]的情形，单值由 [[Picard–Lefschetz 公式]]给出：

::: theorem [Picard–Lefschetz 公式] {@thm:picard-lefschetz}
设 $X$ 是 $n + 1$ 维复流形，其中 $n \geq 1$。
假设 $f$ 紧合，其临界点只有 $X_0$ 上的一点 $p$，
且它是[[非退化临界点]]。
记 $\delta \in H_n (X_t; \mathbb{Z})$ 为亏球面的同调类（@ex:morse）。
则单值在 $H_n (X_t; \mathbb{Z})$ 上的作用为
\[
T (\gamma) = \gamma - (-1)^{n (n - 1) / 2} \, \langle \gamma, \delta \rangle \, \delta ,
\]
其中 $\langle -, - \rangle$ 是[[相交数]]。
:::

见 [@SGA7II, 第 XIV 讲, 定理 3.2.11; @SGA7II, 第 XV 讲, 定理 3.4; @Lamotke1981]。

由于 $T - 1 = \operatorname{var} \circ \operatorname{can}$，
上述公式可以如下理解：映射
$\operatorname{can} \colon H^n (X_t; \Lambda) \to H^n (X_0; \varphi_f \Lambda_X) \simeq \Lambda$
是与 $\delta$ 配对，
而 $\operatorname{var}$ 把 $1 \in \Lambda$ 映到 $\delta$ 的 [[Poincaré 对偶]]（可能差一个符号）。
这里单值写在同调上，它在上同调上的作用由对偶得到。

::: example [坍缩环面的单值] {@ex:pinched-monodromy}
继续考虑 @ex:pinched。
此时 $n = 1$，单值 $T$ 是沿 $\delta$ 的 Dehn 扭转：

```tikz {caption="沿 $\delta$ 的 Dehn 扭转。"}
\begin{tikzpicture}
\usetikzlibrary{arrows.meta}
\definecolor{tubeA}{HTML}{7F95B2}
\definecolor{tubeB}{HTML}{B9C8DB}
\definecolor{tubeC}{HTML}{E6ECF4}
\definecolor{tubeD}{HTML}{FAFBFD}
\definecolor{ink}{HTML}{36465C}
\definecolor{cycle}{HTML}{D23F2B}
\definecolor{path}{HTML}{1F5FAE}
\pgfdeclareverticalshading{tube}{100bp}{color(0bp)=(tubeA);
  color(25bp)=(tubeA); color(36bp)=(tubeB); color(47bp)=(tubeC);
  color(57bp)=(tubeD); color(66bp)=(tubeC); color(72bp)=(tubeB);
  color(75bp)=(tubeA); color(100bp)=(tubeA)}
% \sheet{位置}：从侧面看环带 {uv = t}，两端是半径 .73 的椭圆，腰部半径为 .55。
\newcommand\sheet[1]{\begin{scope}[shift={(#1,0)}]
  \fill[tubeA!85!black, draw=ink, line width=.55pt]
    (-1.6,0) ellipse (.146 and .73);
  \shadedraw[shading=tube, draw=ink, line width=.55pt, line join=round]
    (-1.6,.73) .. controls (-.8,.57) and (-.4,.55) .. (0,.55)
      .. controls (.4,.55) and (.8,.57) .. (1.6,.73)
      arc (90:-90:.146 and .73)
      .. controls (.8,-.57) and (.4,-.55) .. (0,-.55)
      .. controls (-.4,-.55) and (-.8,-.57) .. (-1.6,-.73)
      arc (-90:90:.146 and .73) -- cycle;
  % 绕它一周的亏闭链：背面画虚线，正面画实线。
  \draw[cycle, line width=.45pt, dash pattern=on 1.6pt off 1.3pt]
    (0,.55) arc (90:270:.11 and .55);
  \draw[cycle, line width=1pt, line cap=round]
    (0,-.55) arc (-90:90:.11 and .55);
\end{scope}}
\sheet{0}
\sheet{5.2}
% 道路 gamma。
\begin{scope}[path, line cap=round]
  \draw[line width=1pt] (-1.45,0) -- (1.75,0);
  \fill (-1.45,0) circle (1.3pt) (1.75,0) circle (1.3pt);
\end{scope}
% 道路 T(gamma)：它绕到背面的部分画虚线。
\begin{scope}[shift={(5.2,0)}, path, line cap=round]
  \draw[line width=1pt] (-1.45,0) -- (-1.02,0)
    .. controls (-.7,0) and (-.5,-.6) .. (-.38,-.56);
  \draw[line width=.5pt, dash pattern=on 1.8pt off 1.4pt]
    (-.38,-.56) .. controls (-.25,-.51) and (.01,.62) .. (.38,.56);
  \draw[line width=1pt] (.38,.56) .. controls (.67,.61) and (.95,0) .. (1.28,0)
    -- (1.75,0);
  \fill (-1.45,0) circle (1.3pt) (1.75,0) circle (1.3pt);
\end{scope}
\draw[ink!80, line width=.5pt, -{Stealth[length=4.5pt]}]
  (2.2,0) -- node[above, ink] {$T$} (3.1,0);
\node[cycle] at (.2,.82) {$\delta$};
\node[cycle] at (5.4,.82) {$\delta$};
\node[path] at (-.95,.2) {$\gamma$};
\node[path] at (4.3,.3) {$T (\gamma)$};
\end{tikzpicture}
```

取 $H_1 (X_t; \mathbb{Z})$ 的基 $\delta$、$\gamma$，其中 $\langle \delta, \gamma \rangle = 1$，则
\[
T (\delta) = \delta ,
\qquad
T (\gamma) = \gamma + \delta .
\]
特别地，$T$ 在 $\varphi_f \Lambda_X$ 上平凡，因为它对偶于 $\delta$ 的类。
:::

### 错致层

亏闭链函子（经过移位）保持[[错致层]]，
从而给出错致层 Abel 范畴间的[[正合函子]]。

::: theorem [亏闭链保持错致层] {@thm:perverse}
设 $\Lambda$ 是域。则

- 函子 $\psi_f$、$\varphi_f$ 把有界可构造层复形范畴
  $\mathsf{D}^\mathrm{b}_\mathrm{c} (X; \Lambda)$
  映到 $\mathsf{D}^\mathrm{b}_\mathrm{c} (X_0; \Lambda)$。

- 函子 $\psi_f [-1]$、$\varphi_f [-1]$ 把错致层范畴 $\mathsf{Perv} (X)$ 映到
  $\mathsf{Perv} (X_0)$。

- 函子 $\psi_f [-1]$、$\varphi_f [-1]$ 与 [[Verdier 对偶]] $\mathbb{D}$ 交换，
  即有自然同构
  \[
  \mathbb{D} \, \psi_f [-1] \simeq \psi_f [-1] \, \mathbb{D} ,
  \qquad
  \mathbb{D} \, \varphi_f [-1] \simeq \varphi_f [-1] \, \mathbb{D} ,
  \]
  并且这些同构把单值 $T$ 变为 $T^{-1}$。
:::

见 [@Verdier1985, 第 3 节]。
对于与 Verdier 对偶的交换，系数环 $\Lambda$ 只需是
有限 Krull 维数的正则 Noether 环 [@Massey2016]。
此时 $\operatorname{can}$ 和 $\operatorname{var}$ 也互相对偶，
但由于 $T$ 变为 $T^{-1}$，
使 $\mathbb{D} (\operatorname{var})$ 对应 $\operatorname{can}$ 的同构，
与使 $\mathbb{D} (\operatorname{can})$ 对应 $\operatorname{var}$ 的同构
不能取为同一个 [@Massey2023, 第 3、4 节]。

特别地，若 $\mathcal{F}$ 和 $i^* \mathcal{F} [-1]$ 都是错致层，
则定义中的余纤维列给出错致层的短正合列
\[
0 \longrightarrow
i^* \mathcal{F} [-1] \longrightarrow
\psi_f \mathcal{F} [-1] \longrightarrow
\varphi_f \mathcal{F} [-1] \longrightarrow
0 .
\]

下面的定理说明，$X$ 上的错致层可以由以下信息恢复出来：
$X^*$ 上的错致层作为其限制，
加上 $X_0$ 上的错致层作为其亏闭链，
以及联系两者的映射 $\operatorname{can}$ 和 $\operatorname{var}$。
这样的粘合结论也启发了错致层的[[范畴化]]，即[[错致范畴]]的概念。

::: theorem [粘合] {@thm:gluing}
设 $\Lambda$ 是域。
范畴 $\mathsf{Perv} (X)$ 等价于如下四元组 $(\mathcal{G}, \mathcal{V}, c, v)$ 的范畴，其中

- $\mathcal{G} \in \mathsf{Perv} (X^*)$ 是
  $\mathsf{D}^\mathrm{b}_\mathrm{c} (X; \Lambda)$ 中某个对象的限制；

- $\mathcal{V} \in \mathsf{Perv} (X_0)$；

- $c \colon \psi_f \mathcal{G} [-1] \to \mathcal{V}$
  和 $v \colon \mathcal{V} \to \psi_f \mathcal{G} [-1]$ 是态射，满足 $v \circ c = T - 1$。

这一等价把 $\mathcal{F}$ 映到
$(j^* \mathcal{F}, \varphi_f \mathcal{F} [-1],
\operatorname{can}, \operatorname{var})$。
:::

这里 $\mathcal{G}$ 的延拓条件对代数可构造层而言是自动的，
但对解析可构造层不一定满足，例如 $D^*$ 中各点 $1/n$ 处点层之和就不能延拓成 $D$ 上的可构造层。
这一命题是 [@Verdier1985, 推论 1]，其中的变差映射与这里差一个符号。
[@Beilinson1987, 命题 3.1] 在代数的情形给出了只用单值幂幺部分的版本。

::: proof
记 $\mathcal{G} = j^* \mathcal{F}$。
证明分为三步。

首先，在 $\mathsf{D}^\mathrm{b}_\mathrm{c} (X; \Lambda)$ 中重新组织信息。
$\mathcal{F}$ 的信息等价于 $\mathcal{G}$、$i^* \mathcal{F}$ 和映射
$i^* \mathcal{F} \to i^* j_* \mathcal{G}$ 这三个信息。
由 @prop:wang，这个映射相当于
$\operatorname{sp} \colon i^* \mathcal{F} \to \psi_f \mathcal{G}$
以及同伦 $(T - 1) \circ \operatorname{sp} \simeq 0$。
取同伦余纤维，这又相当于 $\varphi$ 和映射
$\operatorname{can} \colon \psi_f \mathcal{G} \to \varphi$、
$\operatorname{var} \colon \varphi \to \psi_f \mathcal{G}$，
以及同伦 $\operatorname{var} \circ \operatorname{can} \simeq T - 1$。

其次，判断何时得到错致层。
比较 $i^* \mathcal{F} \to i^* j_* \mathcal{G} \to \psi_f \mathcal{G}$
的同伦余纤维，可知 $i^! \mathcal{F} [1]$ 是 $\operatorname{var}$ 的同伦纤维。
于是，若 $\mathcal{G}$ 和 $\varphi [-1]$ 都是错致层，则由 @thm:perverse，
$i^* \mathcal{F}$ 和 $i^! \mathcal{F}$ 分别落在错致 t-结构的 $\leq 0$ 和 $\geq 0$ 部分，
所以 $\mathcal{F}$ 是错致层；反之亦由 @thm:perverse。

最后，错致层之间的映射空间是离散的，
因此上述同伦只是条件 $v \circ c = T - 1$，而不是额外的信息。
:::

## 参考文献

原始文献：

```bibliography
SGA7I:
  type: book
  editor: Alexander Grothendieck
  title: Groupes de monodromie en géométrie algébrique
  year: 1972
  series: Lecture Notes in Mathematics
  volume: 288
  publisher: Springer
  label: SGA 7 I

SGA7II:
  type: book
  editor: [Pierre Deligne, Nicholas Katz]
  title: Groupes de monodromie en géométrie algébrique
  year: 1973
  series: Lecture Notes in Mathematics
  volume: 340
  publisher: Springer
  label: SGA 7 II
```

教材与综述：

```bibliography
KashiwaraSchapira1990:
  type: book
  author: [Masaki Kashiwara, Pierre Schapira]
  title: Sheaves on Manifolds
  year: 1990
  series: Grundlehren der mathematischen Wissenschaften
  volume: 292
  publisher: Springer

Dimca2004:
  type: book
  author: Alexandru Dimca
  title: Sheaves in Topology
  year: 2004
  series: Universitext
  publisher: Springer

MaximSchurmann2022:
  type: incollection
  author: [Laurențiu Maxim, Jörg Schürmann]
  title: Constructible sheaf complexes in complex geometry and applications
  booktitle: Handbook of Geometry and Topology of Singularities III
  editor: [José Luis Cisneros-Molina, Lê Dũng Tráng, José Seade]
  publisher: Springer
  year: 2022
  pages: 679--791
  arxiv: '2105.13069'
```

Milnor 纤维与 Picard–Lefschetz 公式：

```bibliography
Milnor1968:
  type: book
  author: John Milnor
  title: Singular Points of Complex Hypersurfaces
  year: 1968
  series: Annals of Mathematics Studies
  volume: 61
  publisher: Princeton University Press

Lamotke1981:
  type: article
  author: Klaus Lamotke
  title: The topology of complex projective varieties after S. Lefschetz
  journaltitle: Topology
  volume: 20
  number: 1
  year: 1981
  pages: 15--51
```

错致层、Verdier 对偶与粘合：

```bibliography
BBD1982:
  type: article
  author: [Alexander Beilinson, Joseph Bernstein, Pierre Deligne]
  title: Faisceaux pervers
  journaltitle: Astérisque
  volume: 100
  year: 1982

Verdier1985:
  type: article
  author: Jean-Louis Verdier
  title: Extension of a perverse sheaf over a closed subspace
  journaltitle: Astérisque
  volume: 130
  year: 1985
  pages: 210--217

Beilinson1987:
  type: incollection
  author: Alexander Beilinson
  title: How to glue perverse sheaves
  booktitle: K-Theory, Arithmetic and Geometry
  series: Lecture Notes in Mathematics
  volume: 1289
  publisher: Springer
  year: 1987
  pages: 42--51

Massey2016:
  type: article
  author: David B. Massey
  title: Natural commuting of vanishing cycles and the Verdier dual
  journaltitle: Pacific Journal of Mathematics
  volume: 284
  number: 2
  year: 2016
  pages: 431--437
  doi: '10.2140/pjm.2016.284.431'
  arxiv: '0908.2799'

Massey2023:
  type: preprint
  author: David B. Massey
  title: Verdier dualizing and the variation map
  year: 2023
  arxiv: '2308.07819'
```

D-模与混 Hodge 模：

```bibliography
Malgrange1983:
  type: article
  author: Bernard Malgrange
  title: Polynômes de Bernstein–Sato et cohomologie évanescente
  journaltitle: Astérisque
  volume: 101--102
  year: 1983
  pages: 243--267

Kashiwara1983:
  type: incollection
  author: Masaki Kashiwara
  title: Vanishing cycle sheaves and holonomic systems of differential equations
  booktitle: Algebraic Geometry (Tokyo/Kyoto, 1982)
  series: Lecture Notes in Mathematics
  volume: 1016
  publisher: Springer
  year: 1983
  pages: 134--142

Saito1988:
  type: article
  author: Morihiko Saito
  title: Modules de Hodge polarisables
  journaltitle: Publications of the Research Institute for Mathematical Sciences
  volume: 24
  number: 6
  year: 1988
  pages: 849--995

Saito1990:
  type: article
  author: Morihiko Saito
  title: Mixed Hodge modules
  journaltitle: Publications of the Research Institute for Mathematical Sciences
  volume: 26
  number: 2
  year: 1990
  pages: 221--333

BudurSaito2005:
  type: article
  author: [Nero Budur, Morihiko Saito]
  title: Multiplier ideals, $V$-filtration, and spectrum
  journaltitle: Journal of Algebraic Geometry
  volume: 14
  year: 2005
  pages: 269--282
  arxiv: 'math/0305118'

Saito2016:
  type: preprint
  author: Morihiko Saito
  title: A young person's guide to mixed Hodge modules
  year: 2016
  arxiv: '1605.00435'

MaximSchurmann2018:
  type: incollection
  author: [Laurențiu Maxim, Jörg Schürmann]
  title: Characteristic classes of mixed Hodge modules and applications
  booktitle: Schubert Varieties, Equivariant Cohomology and Characteristic Classes
  publisher: European Mathematical Society
  year: 2018
  pages: 159--202
  doi: '10.4171/182-1/8'
  arxiv: '1307.5152'
```

```terms
亏闭链函子:
  en: vanishing cycle functor
  fr: foncteur des cycles évanescents :m
  de: Funktor der verschwindenden Zyklen :m
  ja: [消<しょう>失<しつ>輪<りん>体<たい>関<かん>手<しゅ>, 消<しょう>滅<めつ>サイクル関<かん>手<しゅ>]
邻闭链函子:
  en: nearby cycle functor
  fr: foncteur des cycles proches :m
  ja: [隣<りん>接<せつ>輪<りん>体<たい>関<かん>手<しゅ>, 近<きん>接<せつ>サイクル関<かん>手<しゅ>]
亏闭链:
  en: vanishing cycle
  fr: cycle évanescent :m
  de: verschwindender Zyklus :m
  ja: [消<しょう>失<しつ>輪<りん>体<たい>, 消<しょう>滅<めつ>サイクル]
邻闭链:
  en: nearby cycle
  fr: cycle proche :m
  ja: [隣<りん>接<せつ>輪<りん>体<たい>, 近<きん>接<せつ>サイクル]
坍缩环面:
  en: pinched torus
亏球面:
  en: vanishing sphere
特化映射:
  en: specialization map
典范映射:
  en: canonical map
变差映射:
  en: variation map
Kashiwara–Malgrange 滤链:
  en: Kashiwara–Malgrange filtration
```
