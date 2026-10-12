---
title: 分离有限型映射的下叹号函子
---

我们通常需要如下紧化作为基础：

::: theorem [Nagata紧化]
设概形$S$拟紧拟分离且$f:X\to S$分离有限型，则存在如下分解：
\[
\begin{tikzcd}
  X & {\overline{X}} \\
  & S
  \arrow["f"', from=1-1, to=2-2]
  \arrow["j", from=1-1, to=1-2]
  \arrow["{\bar{f}}", from=1-2, to=2-2]
\end{tikzcd}
\]
其中$j$是概形论稠密的开浸入且$\bar{f}$是紧合的。
:::

::: proof
异常复杂，现代证明见[@ConradNagata07]。
:::

::: definition
设$f:X\to Y$分离有限型，对$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}})$定义
\[
(f_!\mathscr{F})(U):=\{s\in (f_*\mathscr{F})(U):\operatorname{supp}(s)\text{在}S\text{上紧合}\}.
\]
:::

::: proposition
设$f:X\to Y$分离有限型，设$\mathscr{F}\in\operatorname{Ab}(X_{\operatorname{ét}})$。

(i)当$f$还是平展的，则$f_!$是零扩张函子；

(ii)若$f$紧合，则$f_!\mathscr{F}=f_*\mathscr{F}$；

(iii)取一个Nagata紧化$f=\bar{f}\circ j$，则$f_!\cong \bar{f}_*\circ j_!$。
:::

::: proof
(i)这个是比较繁琐的，
首先要说明分离平展的时候零扩张可以单射到直像（参考[@StacksProject, Tag 0F4L]），
其次要证明二者相同（参考[@StacksProject, Tag 0F4Y]）；

(ii)是平凡的；(iii)不难构造出单射$f_!(j^{-1}j_!\mathscr{F})\to\bar{f}_*j_!\mathscr{F}$
（比如[@StacksProject, Tag 0F53]）。根据 @001 (iii)，只需说明满射即可，但这是平凡的。
:::
