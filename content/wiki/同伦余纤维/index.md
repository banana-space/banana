---
title: 同伦余纤维
categories: [同调代数]
---

<problems>
- 所有性质与例子都缺少准确的定义与设定。
</problems>

**同伦余纤维**是[[同伦论]]和[[范畴论]]中的一种[[万有构造]]，
是[[拓扑空间]]之间映射的[[映射锥]]、代数结构间同态的[[余核]]等概念的推广。

同伦余纤维的[[对偶]]概念是[[同伦纤维]]。

## 定义

::: definition [同伦余纤维]
设 $\mathcal{C}$ 是带有[[终对象]] $*$ 的 [[$(\infty,1)$-范畴]]，
$f \colon x \to y$ 是 $\mathcal{C}$ 中的[[态射]]。则 $f$ 的**同伦余纤维**
$\operatorname{Cone}(f)$ 是指[[推出]]
\[
\begin{tikzcd}
  x \ar[r, "f"] \ar[d] & y \ar[d] \\
  {*} \ar[r] & \operatorname{Cone}(f) \rlap{.}
\ar[ul, phantom, "\lrcorner", very near start]
\end{tikzcd}
\]
此时图中的 $x \xrightarrow{f} y \to \operatorname{Cone}(f)$
也称为**余纤维列**。
:::

## 性质

- 与普通的[[余纤维]]不同，在同伦等价意义下，同伦余纤维只依赖于 $f$ 的同伦等价类。

- 当 $f:A\to X$ 为[[余纤维化]]，同伦余纤维与余纤维给出的结果一致。

## 例子

::: example
对[[上链复形]]（或[[链复形]]）之间的态射可以定义映射锥。

具体来说，对上链复形间的态射 $f:X^\bullet \to Y^\bullet$，
定义上链复形 $Z^\bullet=\operatorname{Cone}(f)$：

$Z^\bullet$ 具有 $Z^n=Y^n\oplus X^{n+1}$，边界映射为
$d=\begin{pmatrix} d_Y & f \\ 0 & -d_X \end{pmatrix}$。
:::

::: remark
同伦余纤维是**商**的推广。

我们平凡地有$0\to Y\to \operatorname{Cone}(f) \to X[1]\to 0$ [[正合]]。

在上链复形对应的[[三角范畴]]中，余纤维序列对应[[正合三角]]
$X\xrightarrow{f}Y\to \operatorname{Cone}(f)\to X[1]$。

更进一步，三角范畴的[[Verdier公理]] (TR1) 要求任意映射都可延展为正合三角，这是映射锥存在性的推广。
:::

```terms
同伦余纤维:
  en: homotopy cofibre
  en-us: homotopy cofiber
```
