---
title: 推出纤维化
aliases: [拉回纤维化]
categories: [高阶范畴论]
notices:
  - name: 问题
    items:
      - “例子”一节第二项中，$s$ 被说成把箭头映为其来源，但随后的论述（$s (x \xrightarrow{f} y) = y$、推出态射当且仅当 $g$ 为同构、拉回纤维化当且仅当有拉回）似乎对应的是取目标的函子；该项中 $X, Y$ 与 $x, y$ 的记号也不一致。
      - “直化”一节中，诱导函子 $\mathcal{E}_{x} \xleftarrow{\sim} \mathsf{Ar}^{\operatorname{cocart}}(\mathcal{C}) \rightarrow \mathcal{E}_y$ 的中间项似乎应为 $\mathsf{Ar}^{\operatorname{cocart}}(\mathcal{E})$ 在 $f$ 上的纤维。
navboxes: [高阶范畴论]
---

::: convention
在本文中，

- [[范畴]]均指 [[$(\infty,1)$-范畴]]。

:::

**推出纤维化**是[[纤维范畴|异纤维范畴]]的高阶版本。
粗略来说，推出纤维化是指这样的函子 $p \colon \mathcal{E} \to \mathcal{C}$，
对于 $x \in \mathcal{C}$，
纤维 $\mathcal{E} \times_{\mathcal{C}} \{x\}$ 的纤维关于 $x$ 具有函子性，
即对于 $\mathcal{C}$ 中态射 $f \colon x \to y$，
它将会诱导出函子 $f_! \colon \mathcal{E}_x \to \mathcal{E}_y$。

## 定义

::: definition
考虑函子 $p \colon \mathcal{E} \to \mathcal{C}$。

1. 称 $\mathcal{E}$ 中态射 $\varphi \colon e \to e'$ 为 **$p$-推出态射**，
   是指对于 $\mathcal{E}$ 中对象 $e''$，交换图
   \[
   \begin{tikzcd}
     \operatorname{Hom}_{\mathcal{E}}(e',e'') \ar[r,"-\circ \varphi"]\ar[d,"p"] & \operatorname{Hom}_{\mathcal{E}}(e,e'')\ar[d,"p"]\\
     \operatorname{Hom}_{\mathcal{C}}(p(e'),p(e'')) \ar[r,"-\circ p(\varphi)"] & \operatorname{Hom}_{\mathcal{C}}(p(e),p(e''))
   \end{tikzcd}
   \]
   为拉回图表。
   粗略而言，$\varphi$ 为 $p$-推出态射相当于说在下图中
   \[
   \begin{tikzcd}
     & e' \ar[dr,dashed,"\exists!"] \\
     e\ar[ur,"\varphi"] \ar[rr] && e''
   \end{tikzcd}
   \overset{p}{\rightsquigarrow}
   \begin{tikzcd}
     & p(e') \ar[dr] \\
     p(e)\ar[ur,"p(\varphi)"] \ar[rr] && p(e'')
   \end{tikzcd}
   \]
   如果右图中的交换图表存在，
   则存在唯一的左图中的虚线箭头 $e' \to e''$ 使得左图交换。

2. 称 $p$ 为**推出纤维化**，
   是指对于 $\mathcal{C}$ 中每个态射 $f \colon x \to y$，
   以及 $e \in \mathcal{E}_x$，
   都存在 $p$-推出态射 $\varphi \colon e \to e'$ 使得 $p(\varphi) = f$。
   此时也将 $\varphi$ 称为 $f$ 的 **$p$-推出提升**。

3. 令 $p \colon \mathcal{E} \to \mathcal{C}$ 与 $p' \colon \mathcal{E}' \to \mathcal{C}$
   为两个推出纤维化，
   考虑 $\mathcal{C}$ 上的函子 $F \colon \mathcal{E} \to \mathcal{E}'$，
   即它给出交换图
   \[
   \begin{tikzcd}
     \mathcal{E} \ar[rr,"F"]\ar[dr,"p"] && \mathcal{E}'\ar[dl,"p'"]\\
     & \mathcal{C}
   \end{tikzcd}
   \]
   如果 $F$ 将 $\mathcal{E}$ 中的 $p$-推出态射映为 $\mathcal{E}'$ 中的 $p'$-推出态射，
   就称 $F$ 为**推出纤维化间的态射**。

4. 令 $\mathcal{C}$ 为小范畴，
   记
   \[
   \mathsf{Cocart}(\mathcal{C}) \subseteq \mathsf{Cat}_{/\mathcal{C}}
   \]
   为全体形如 $\mathcal{E} \to \mathcal{C}$ 的推出纤维化所张成的非全子范畴。

:::

对偶地，我们也可以考虑拉回纤维化。

::: definition
考虑函子 $p \colon \mathcal{E} \to \mathcal{C}$。

1. 称 $\mathcal{E}$ 中态射 $\varphi \colon e \to e'$ 为 **$p$-拉回态射**，
   是指对于 $\mathcal{E}$ 中对象 $e''$，交换图
   \[
   \begin{tikzcd}
     \operatorname{Hom}_{\mathcal{E}}(e'',e) \ar[r,"\varphi \circ -"] \ar[d,"p"] & \operatorname{Hom}_{\mathcal{E}}(e'',e')\ar[d]\\
     \operatorname{Hom}_{\mathcal{C}}(p(e''),p(e)) \ar[r,"p(\varphi) \circ -"] & \operatorname{Hom}_{\mathcal{C}}(p(e''),p(e')).
   \end{tikzcd}
   \]

2. 称 $p$ 为**拉回纤维化**，
   是指对于 $\mathcal{C}$ 中每个态射 $f \colon x \to y$，
   以及 $e' \in \mathcal{E}_y$ 都存在 $p$-拉回态射 $\varphi \colon e \to e'$
   使得 $p(\varphi) = f$。
   此时也将 $\varphi$ 称为 $f$ 的 **$p$-拉回提升**。

3. 类似定义拉回纤维化间的态射。

4. 令 $\mathcal{C}$ 为小范畴，记
   \[
   \mathsf{Cart}(\mathcal{C}) \subseteq \mathsf{Cat}_{/\mathcal{C}}
   \]
   为全体拉回纤维化所构成的非全子范畴。

:::

::: notation {@notation-transport}
对于 $e \in \mathcal{E}_x$，
有时我们也将 $f$ 的 $p$-推出提升记为 $\varphi \colon e \to f_! e$，
此时将 $f_! e$ 称为 $e$ 沿 $f$ 的**推出**。
:::

## 例子

- 对于任意对象 $x \in \mathcal{C}$，
  函子 $\mathcal{C}_{x/} \to \mathcal{C}$ 自动为推出纤维化，
  事实上，它是[[左纤维化]]。
- 令 $\mathcal{E} = \mathsf{Ar}(\mathcal{C})$ 为 $\mathcal{C}$ 的[[箭头范畴]]，
  此时 $\mathcal{E}$ 中对象形如 $(x \xrightarrow{f} y)$，
  而从 $(x \xrightarrow{f} y)$ 到 $(x' \xrightarrow{f'} y')$ 的态射 $\varphi$ 形如 $\mathcal{C}$
  中的交换图
  \[
  \begin{tikzcd}
    x \ar[r,"g"] \ar[d,"f"] & x'\ar[d,"f'"]\\
    y \ar[r,"h"] & y'.
  \end{tikzcd}
  \]
  考虑函子 $s \colon \mathsf{Ar}(\mathcal{C}) \to \mathcal{C}$，
  将 $\mathcal{C}$ 中的箭头打到其来源（即将 $f \colon x \to y$ 映为 $x$）。
  那么
  - $\mathcal{E}$ 中态射 $\varphi$ 为 $s$-推出态射当且仅当 $g$ 为同构。
    事实上，$s$ 在任何情况下都会是推出纤维化，
    比如说给定 $(X \xrightarrow{f} Y)$ 以及 $h \colon s (x \xrightarrow{f} y) = y \to y'$，
    只需令 $X' = X$，$g = \operatorname{id}_X$ 就可以得到提升。
  - $\mathcal{E}$ 中态射 $\varphi$ 为 $s$-拉回态射当且仅当 $\varphi$ 所代表的交换图为拉回，
    因此 $s$ 为拉回纤维化当且仅当 $\mathcal{C}$ 具有所有的拉回。

## 性质

::: proposition
$p \colon \mathcal{E} \to \mathcal{C}$ 为拉回纤维化当且仅当 $p^{\operatorname{op}}$ 为推出纤维化。
:::

::: proposition
令 $p \colon \mathcal{E} \to \mathcal{C}$ 为函子，
考虑 $\mathcal{C}$ 中态射 $f \colon x \to y$，
对于 $e \in \mathcal{E}_x$，
记 $L(e,f) \subseteq \mathcal{E}_{e/} \times_{\mathcal{C}_{x/}}\{f\}$
为全体关于 $f$ 的形如 $\varphi \colon e \to e'$ 的 $p$-推出提升所张成的全子范畴，
则 $L(e,f)$ 要么为空要么可缩。
:::

::: proposition {@prop-cocart-mor}
对于函子 $p \colon \mathcal{E} \to \mathcal{C}$，记
\[
\mathsf{Ar}^{\operatorname{cocart}}(\mathcal{E}) \subseteq \mathsf{Ar}(\mathcal{E})
\]
为全体 $p$-推出态射所张成的全子范畴。
则

1. 函子
   \[
   \mathsf{Ar}^{\operatorname{cocart}}(\mathcal{E}) \to \mathcal{E} \times_{p,\mathcal{C},s} \mathsf{Ar}(\mathcal{C}) ,
    \quad (\varphi \colon e \to e'), \mapsto (e,p\varphi)
   \]
   是全忠实的。

2. 当函子 $p$ 为推出纤维化时，上述函子为范畴等价。

:::

::: proposition {@prop-compose-pullback}
推出/拉回纤维化关于函子的复合与拉回封闭。
:::

::: proposition
考虑推出纤维化所构成的图表
\[
\begin{tikzcd}
  \mathcal{E}' \ar[d,"p'"']\ar[r] & \mathcal{E} \ar[d,"p"]\\
  \mathcal{C}' \ar[r,"\varphi"] & \mathcal{C},
\end{tikzcd}
\]
该图表为拉回当且仅当对于每个 $c' \in \mathcal{C}'$，
都有 $\mathcal{E}'_{c'} \xrightarrow{\sim} \mathcal{E}_{\varphi(c')}$ 为范畴等价。
:::

## 直化

令 $p \colon \mathcal{E} \to \mathcal{C}$ 为推出纤维化。
考虑交换图
\[
\begin{tikzcd}
  \mathcal{E} \ar[d,"p"] & \mathsf{Ar}^{\operatorname{cocart}} (\mathcal{E}) \ar[l,"s"] \ar[r,"t"] \ar[d] & \mathcal{E} \ar[d,"p"]\\
  \mathcal{C} & \mathsf{Ar}(\mathcal{C}) \ar[l,"s"] \ar[r,"t"] & \mathcal{C},
\end{tikzcd}
\]
@prop-cocart-mor 说明左侧的方块为拉回，
从而通过极限的交换性，
对于 $\mathcal{C}$ 中态射 $f \colon x \to y$，
这诱导出函子
\[
\mathcal{E}_{x} \xleftarrow{\sim} \mathsf{Ar}^{\operatorname{cocart}}(\mathcal{C}) \rightarrow \mathcal{E}_y.
\]
它就是 @notation-transport 在 $p$ 为推出纤维化时所对应的函子。
那么此时对于可复合的态射 $f \colon x \to y$，$g \colon y \to z$，
可考虑图表
\[
\begin{tikzcd}
  && {\mathsf{Ar}^{\operatorname{cocart}}(\mathcal{E})} \\
  && {\mathsf{Fun}_{\operatorname{cocart}}([2],\mathcal{E})} \\
  & {\mathsf{Ar}^{\operatorname{cocart}}(\mathcal{E})} && {\mathsf{Ar}^{\operatorname{cocart}}(\mathcal{E})} \\
  {\mathcal{E}} && {\mathcal{E}} && {\mathcal{E}}
  \arrow["s"', bend left={-24pt}, from=1-3, to=4-1]
  \arrow["t", bend left={24pt}, from=1-3, to=4-5]
  \arrow["{d_1}", from=2-3, to=1-3]
  \arrow[from=2-3, to=3-2]
  \arrow[from=2-3, to=3-4]
  \arrow["s"', from=3-2, to=4-1]
  \arrow["t"', from=3-2, to=4-3]
  \arrow["s", from=3-4, to=4-3]
  \arrow["t", from=3-4, to=4-5]
\end{tikzcd}
\]
其中 $\mathsf{Fun}_{\operatorname{cocart}}([2],\mathcal{E}) \subseteq \mathsf{Fun}([2],\mathcal{E})$
表示其内全体打到 $\mathcal{E}$ 中的 $p$-推出态射的对象所张成的全子范畴。
从而得知中间的方块为拉回。
从而对于 $g,f$ 取纤维得到
\[
\begin{tikzcd}
  && {\mathsf{Ar}^{\operatorname{cocart}}(\mathcal{E})_{g,f}} \\
  && {\mathsf{Fun}([2],\mathcal{E})_{g,f}} \\
  & {\mathsf{Ar}^{\operatorname{cocart}}(\mathcal{E})_f} && {\mathsf{Ar}^{\operatorname{cocart}}(\mathcal{E})_g} \\
  {\mathcal{E}_x} && {\mathcal{E}_y} && {\mathcal{E}_z}
  \arrow["\simeq"{marking, allow upside down}, draw=none, from=1-3, to=2-3]
  \arrow["\simeq"', bend left={-24pt}, from=1-3, to=4-1]
  \arrow["\simeq", bend left={24pt}, from=1-3, to=4-5]
  \arrow[from=2-3, to=3-2]
  \arrow[from=2-3, to=3-4]
  \arrow["s"', from=3-2, to=4-1]
  \arrow["t"', from=3-2, to=4-3]
  \arrow["s", from=3-4, to=4-3]
  \arrow["t", from=3-4, to=4-5]
\end{tikzcd}
\]
这相当于说
\[
(g \circ f)_! \simeq g_! f_!
\]
而不难看出该构造对应于[[伸展]]的复合，
从而可归纳给出高阶相容性。
因此给出函子
\[
\mathsf{St}^{\operatorname{cocart}}_{\mathcal{C}} \colon \mathsf{Cocart}(\mathcal{C}) \to \mathsf{Fun}(\mathcal{C},\mathsf{Cat}).
\]
在[[高阶范畴论]]中，
一个基本定理就是说上述函子为范畴等价。

::: theorem [直化定理，推出纤维化]
对于范畴 $\mathcal{C}$，
函子
\[
\mathsf{St}^{\operatorname{cocart}}_{\mathcal{C}} \colon \mathsf{Cocart}(\mathcal{C}) \to \mathsf{Fun}(\mathcal{C},\mathsf{Cat}).
\]
为范畴等价，
此时我们将 $\mathsf{St}^{\operatorname{cocart}}$ 称为 **（推出）直化**，
将其逆记为 $\mathsf{Un}^{\operatorname{cocart}}$ 称为 **（推出）反直化**。
:::

注意到，对于范畴的拉回图表
\[
\begin{tikzcd}
  \mathcal{E}' \ar[d,"p'"']\ar[r]\ar[dr,phantom,pos = 0.2,"\lrcorner"] & \mathcal{E} \ar[d,"p"]\\
  \mathcal{C}' \ar[r,"\varphi"] & \mathcal{C}
\end{tikzcd}
\]
其中 $p$ 为推出纤维化，
根据 @prop-compose-pullback 可知 $p'$ 也为推出纤维化，
此时如果 $\mathsf{St}^{\operatorname{cocart}}_{\mathcal{C}}(p) = F$，
那么可以推知 $\mathsf{St}^{\operatorname{cocart}}_{\mathcal{C}'}(p') = F \circ \varphi$。
由此说明 $\mathsf{St}_{(-)}^{\operatorname{cocart}}$ 具有自然性。

::: remark
由于 $\mathsf{Cart}(\mathcal{C}) \simeq \mathsf{Cocart}(\mathcal{C}^{\operatorname{op}})$，
因此对于拉回纤维化 $p \colon \mathcal{E} \to \mathcal{C}$，
可以考虑 $p^{\operatorname{op}}$ 的直化，
不难发现这还是将 $c \in \mathcal{C}$ 映为 $\mathcal{E}_c$
（注意并非 $\mathcal{E}_c^{\operatorname{op}}$，
事实上，$[0]$ 上的直化给出 $\mathsf{Cat}$ 的恒等函子）。
因此可以这样给出拉回纤维化的直化为复合
\[
\mathsf{St}_{\mathcal{C}}^{\operatorname{cart}} \colon
\mathsf{Cart}(\mathcal{C}) \xrightarrow{(-)^{\operatorname{op}}}
\mathsf{Cocart}(\mathcal{C}^{\operatorname{op}}) \xrightarrow{\mathsf{St}^{\operatorname{cocart}}_{\mathcal{C}^{\operatorname{op}}}}
\mathsf{Fun}(\mathcal{C}^{\operatorname{op}},\mathsf{Cat})
\]
:::

```terms
推出纤维化:
  en: cocartesian fibration
```
