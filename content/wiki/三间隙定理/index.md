---
title: 三间隙定理
categories: [组合几何]
---

**三间隙定理**是[[组合学]]中的定理，
它是说，若将 $(n + 1)$ 个点放在[[圆周]]上[[辐角]]为
$0, \theta, 2\theta, \dotsc, n \theta$ 的位置，
则相邻点对所夹的圆弧角度最多能取三个不同的值。
等价地说，对于任何[[实数]] $\alpha$ 和[[自然数]] $n$，
实数 $\alpha, 2\alpha, \dotsc, n \alpha$ 的[[小数部分]]
将 $[0,1]$ 分成的子区间最多有三个不同长度。

```tikz
\begin{tikzpicture}[every node/.append style={circle,fill,minimum size=5pt,inner sep=0}]
    \pgfmathsetmacro{\angle}{log2(3/2)*360}
    \foreach \i in {0, 1} \draw[line width=2, green!50!black!50] (\angle*\i:2) arc (\angle*\i:\angle*(\i+12)-360*7:2);
    \foreach \i in {2, 3, 4} \draw[line width=2, cyan!50] (\angle*\i:2) arc (\angle*\i:\angle*(\i+7)-360*4:2);
    \foreach \i in {10, 11, 12, 13} \draw[line width=2, orange!50] (\angle*\i:2) arc (\angle*\i:\angle*(\i-10)+360*6:2);
    \draw[line width=2, orange!50] (\angle*9:2) arc (\angle*9:\angle*4+360*3:2);
    \draw(2,0)node[label=right:0]{}--(\angle:2);
    \draw(\angle:2)node[label=\angle:$\theta$]{}
    \foreach \i in{2,...,13}{--(\angle*\i:2)node[label=\angle*\i:$\i\theta$]{}};
\end{tikzpicture}
```

## 证明

将 $n$ 个点放在圆周上辐角为
$\theta, 2\theta, \dotsc, n \theta$ 的位置，
定义**间隙**为在两个相邻位置的点之间的圆弧所对的圆心角。

如果间隙的端点在 $θ$ 的倍数序列中出现得晚于任何其他相同长度的间隙，
则将其定义为**末间隙**。
根据这个定义，对每个间隙长度，都有唯一的末间隙，具有此长度。

如果 $A$ 是末间隙，则旋转 $θ$ 为 $A + θ$ 不是间隙
（因为它具有相同的长度并且端点出现得晚一步）。
发生这种情况可能是 $A$ 的端点之一为最后一个点 $nθ$
（这样 $A + θ$ 的一个端点 $(n+1)\theta$ 不是给定点），
或者 $n$ 个点 $\theta, 2\theta, \dots, n\theta$
之一落在 $A+θ$ 内（因为间隙的两个端点必须在圆上相邻）。

这个落在 $A+θ$ 内的点只可能是第一个点 $\theta$
（否则在序列中的前一个点将落在弧 $A$ 内，
与 $A$ 是间隙的假设相矛盾），因此 $0$ 落在弧 $A$ 内。

因此，最多有 3 个末间隙，点 $n\theta$ 的左、右侧各 1 个，
最后一个是使得 $0$ 落在它内的间隙。

因为最多有 3 个末间隙，所以最多有 3 个间隙长度。

```terms
三间隙定理:
  en: three-gap theorem
  fr: théorème des trois longueurs
```
