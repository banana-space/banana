---
title: 环绕数（纽结论）
categories: [纽结论]
---

<problems>
- 不符合本站的写作风格。
</problems>

**环绕数**是一个[[同痕]]不变量，它衡量出两条有向封闭曲线互相环绕的次数。

设 $A, B$ 是有向[[链环]] $L$ 的两个分支。

我们定义 $A$ 与 $B$的环绕数 $\operatorname{link}(A, B)$ 为圈 $A$ 与圈 $B$ 交叉处
（既不包括 $A$ 自我交叉点，也不包括 $B$ 自我交叉点，更不包括 $A, B$ 与其余分支交叉点）
的正负号总和的一半。
规定，在投影图中，从上线的箭头旋转到下线的箭头的最小转角是反时钟方向的，为正交叉点；
顺时钟方向的为负。

```tikz
\begin{tikzpicture}
    \draw[->, thick] (-1,0) -- (1,0);
    \draw[thick,shorten >=1mm] (0,-1) -- (0,0); \draw[->, thick,shorten <=1mm] (0,0) -- (0,1);
    \node at (0.5,-0.3) {$+\frac{1}{2}$};

    \draw[thick,shorten >=1mm] (3,0) -- (4,0);\draw[->, thick,shorten <=1mm] (4,0) -- (5,0);
    \draw[->, thick] (4,-1) -- (4,1);
    \node at (4.5,-0.3) {$-\frac{1}{2}$};
\end{tikzpicture}
```

$\operatorname{link}(A, B)$ 是同痕不变量，因为 R1 变换只涉及分支自我交叉点，
与环绕数无关；而 R2、R3 也明显地不影响环绕数的值。

## 性质

1. 当 $A, B$ 之一的走向反转时，环绕数要改变正负号，因为 $A$ 与 $B$ 的交叉点的正负号都变了。

   然而如果 $A, B$ 的走向同时反转，它们的环绕数不变。

2. 设 $L$ 是有向的双分支链环，$L^*$ 是 $L$ 的镜像。
   \[
   \operatorname{link}(L^*)=-\operatorname{link}(L)
   \]

## 度数定义

定义映射 $L: A \times B\rightarrow S^2$ 为
\[
L(x, y) = \frac{x - y}{\|x - y\|},
\]
其中$A \times B$赋予乘积定向，$S^2$赋予标准定向。则$A$与$B$的环绕数定义为该映射的[[映射度]]：
\[
\operatorname{link}(A,B) = \deg(L).
\]
几何直观上，当投影到某方向时，交叉点的符号对应于映射$L$覆盖对应方向的次数，符号总和的一半即为度数。

映射$L$的度数可表示为  **高斯积分**：
\[
\operatorname{link}(A, B) = \frac{1}{4\pi} \int_{A \times B} \frac{(x - y) \cdot (dx \times dy)}{\|x - y\|^3},
\]

## 微分形式定义

设$A$和$B$为$S^3$中两个不相交的有向闭合曲线。

选取$A$和$B$的不相交开邻域$W_A$和$W_B$，
并选取紧支[[Poincaré 对偶]]$\eta_A \in H_c^2(W_A)$和$\eta_B \in H_c^2(W_B)$。
此处$\eta_A$和$\eta_B$分别对应于$A$和$B$的“几何对偶”形式，满足对任意紧支1-形式$\alpha$，有
\[
\int_{W_A} \eta_A \wedge \alpha = \int_A \alpha \quad \text{和} \quad \int_{W_B} \eta_B \wedge \alpha = \int_B \alpha.
\]

将$\eta_A$和$\eta_B$零延拓到整个$S^3$（仍记作$\eta_A$和$\eta_B$）。
由于$S^3$的[[De Rham 上同调]]$H^2_{\text{DR}}(S^3)=0$，存在全局定义的1-形式$\omega_A$和$\omega_B$，
使得
\[
d\omega_A = \eta_A \quad \text{和} \quad d\omega_B = \eta_B.
\]

定义$A$与$B$的环绕数为
\[
\operatorname{link}(A, B) = \int_{S^3} \omega_A \wedge \eta_B.
\]
此积分可理解为$\omega_A$（对应[[Seifert 面]]$D$，
满足$\partial D = A$）与$\eta_B$（对应$B$的几何对偶）的交截作用。

由$\eta_B = d\omega_B$和[[Stokes 定理]]，积分可改写为
\[
\int_{S^3} \omega_A \wedge d\omega_B = \int_{S^3} d(\omega_A \wedge \omega_B) - \int_{S^3} d\omega_A \wedge \omega_B = -\int_{S^3} \eta_A \wedge \omega_B,
\]
结合$\eta_A$与$\eta_B$的紧支不相交性，
可得对称性$\operatorname{link}(A, B) = \operatorname{link}(B, A)$。

```terms
环绕数:
  en: linking number
```
