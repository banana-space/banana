---
title: Čech 脉
categories: [范畴论]
---

**Čech 脉**是[[范畴论]]中的一种构造。
其想法来自于[[几何学]]中，为计算[[空间]]的[[上同调]]，
可以将空间用一些较简单的[[开集]]来[[开覆盖|覆盖]]，
使得上同调在这些开集上是便于计算的，
再通过研究这些开集两两之交、每三个之交，等等，
它们各自的上同调及其间的关系，
来最终还原出，或者说粘出，原空间的上同调。
这一技术称为 [[Čech 上同调]]。

而上述例子只是一般的 [[$(\infty, 1)$-范畴]]中粘合问题的一个特例。
事实上，上同调理论也是人们最早接触这类问题的例子。
上述方法实际上适用于更一般的问题，
即给定空间上的某个 [[$(\infty, 1)$-层]]，
如果已知空间的某个开覆盖上该 $(\infty, 1)$-层的取值，
我们想由此得出整个空间上该 $(\infty, 1)$-层的取值。
回忆在普通层论中，这是[[层]]的定义的一部分，
此时实际上只用到 Čech 脉的一个截断，
仅考虑两两相交，而不必考虑更多个开集相交。
对一般的 $(\infty, 1)$-层而言，
我们则需要考虑任意 $n$ 个开集之交，因此需要整个 Čech 脉；
$(\infty, 1)$-层在 Čech 脉上取值的[[极限 (范畴论)|极限]]就是它在整个空间上的取值。

## 定义

在具有[[拉回]]的[[范畴]] $\mathcal C$ 中，
态射 $U \to X$ 的 **Čech 脉**定义为 $\mathcal C$ 的[[单纯对象]]
\[
\check{C} (U \to X) = \biggl(
\begin{tikzcd}[column sep=2em]
  \cdots \quad
  U \times_X U \times_X U
  \ar[r, shift left=4] \ar[r] \ar[r, shift right=4]
  & U\times_X U
  \ar[r, shift left=2] \ar[r, shift right=2]
  \ar[l, shift left=2] \ar[l, shift right=2]
  & U
  \ar[l]
\end{tikzcd}
\biggr).
\]

## 例子

- 设 $X$ 为[[拓扑空间]]，$(U_i)_{i \in I}$ 为 $X$ 的[[开覆盖]]。令 $U=\coprod_i U_i$，
  则映射 $U \to X$ 的 Čech 脉为单纯拓扑空间
  \[
  \check{C} (U \to X) = \biggl(
  \begin{tikzcd}[column sep=2em]
    \cdots \quad
    \coprod_{i,j,k} U_{ijk}
    \ar[r, shift left=4] \ar[r] \ar[r, shift right=4]
    & \coprod_{i,j} U_{ij}
    \ar[r, shift left=2] \ar[r, shift right=2]
    \ar[l, shift left=2] \ar[l, shift right=2]
    & \coprod_{i} U_i
    \ar[l]
  \end{tikzcd}
  \biggr).
  \]
  其中 $U_{ij} = U_i\cap U_j$ 等等。

```terms
Čech 脉:
  en: Čech nerve
```
