---
title: de Rham 上同调
aliases: [De Rham 上同调, De Rham 定理]
categories: [微分几何, 同调论]
notices:
  - name: 消歧义
    about: 流形的上同调理论
    see:
      - topic: 代数几何中的相应理论
        page: 代数 de Rham 上同调
navboxes: [同调与上同调]
---

**[[Georges de Rham|de Rham]] 上同调**
是连接[[微分几何]]与[[代数拓扑]]的纽带，
它将[[光滑流形]]的[[奇异上同调]]与[[微分形式]]联系起来。

**de Rham 定理**说明，
任何光滑流形的 de Rham 上同调同构于其[[奇异上同调]]。

## 定义

::: definition [de Rham 上同调]
[[光滑流形]] $X$ 的 **de Rham 复形**是以下[[链复形]]：
\[
\cdots \to 0
\to \Omega^0 (X)
\xrightarrow{d} \Omega^1 (X)
\xrightarrow{d} \Omega^2 (X)
\to \cdots,
\]
其中 $\Omega^k (X)$ 是 $X$ 上 $k$ 次[[微分形式]]的空间，
$d$ 是[[外微分]]。

设整数 $k \geq 0$。
则 $X$ 的 $k$ 阶 **de Rham 上同调** $H^k_{\mathrm{dR}} (X)$
定义为 de Rham 复形的[[链上同调]]：
\[
H^k_{\mathrm{dR}} (X) =
\frac{\ker \bigl( d \colon \Omega^k (X) \to \Omega^{k+1} (X) \bigr)}
{\operatorname{im} \bigl( d \colon \Omega^{k-1} (X) \to \Omega^k (X) \bigr)},
\]
也就是所有[[闭形式|闭 $k$-形式]]的空间
[[商空间 (线性代数)|商]]掉所有[[恰当形式|恰当 $k$-形式]]的空间。
:::

## de Rham 定理

::: theorem [de Rham]
设 $X$ 是[[光滑流形]]。则
\[
H^k_{\mathrm{dR}} (X) \simeq H^k (X; \mathbb{R}),
\]
其中右边是 $X$ 的[[奇异上同调]]。
并且，这一同构由[[配对]]
\[
\begin{aligned}
  H^k_{\mathrm{dR}} (X) \times H_k (X; \mathbb{R}) & \to \mathbb{R}, \\
  ([\omega], [c]) & \mapsto \int_c \omega
\end{aligned}
\]
及同构 $H^k (X; \mathbb{R}) \simeq H_k (X; \mathbb{R})^\vee$ 给出。
:::

```terms
de Rham 上同调:
  en: de Rham cohomology
  fr: cohomologie de de Rham :f
  de: De-Rham-Kohomologie :f
```
