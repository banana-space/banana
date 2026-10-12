---
title: Jacobi 簇
categories: [模空间论]
notices:
  - name: 问题
    items:
      - “性质”一节需要扩充。
navboxes: [计数几何]
---

[[代数曲线]] $X$ 的 **Jacobi 簇** $J (X)$
是从它构造的一个[[代数簇]]，
它是 $X$ 上的 $0$ 次[[线丛]]的[[模空间]]，
也是 $X$ 的 [[Picard 群]]中次数为 $0$ 的部分 $\operatorname{Pic}^0 (X)$。
由此可知道，$J (X)$ 是一个 [[Abel 簇]]，
其群结构由线丛的[[张量积]]给出。

若 $X$ 是[[亏格]] $g$ 的[[光滑簇|光滑]]复代数曲线，
则 $J (X)$ 同构于 $g$ 维[[复环面]] $\mathbb{C}^g / \Lambda$，
其中 $\Lambda \subset \mathbb{C}^g$ 为秩 $2g$ 的[[晶格]]。

## 定义

### 一般定义

::: definition
[[代数曲线]] $X$ 的 **Jacobi 簇** $J (X)$
定义为其 [[Picard 簇]] $\operatorname{Pic}^0 (X)$，
即 [[Picard 概形]] $\operatorname{Pic} (X)$ 中单位元所在的[[连通分支]]：
\[
J (X) = \operatorname{Pic}^0 (X).
\]
:::

若 $X$ [[光滑簇|光滑]]，则该连通分支也就是
[[Picard 群]]中所有 $0$ 次线丛构成的子群。
对一般的 $X$，该连通分支由在 $X$ 的每个[[不可约分支]]上次数均为 $0$ 的线丛构成。

### 对光滑复曲线

若 $X$ 是[[亏格]] $g$ 的[[光滑簇|光滑]]复代数曲线，则 $J (X)$ 可以如下构造。
定义映射 $i \colon H_1 (X; \mathbb{Z}) \to H^0 (X, \Omega_X^1)^\vee$ 为
\[
i ([\gamma]) \colon \omega \mapsto \int_\gamma \omega,
\]
其中 $\gamma$ 为 $X$ 上的闭曲线，
$\omega \in H^0 (X, \Omega^1_X)$ 为 $X$ 上的[[全纯微分形式|全纯 $1$-形式]]。
定义
\[
J (X) = H^0 (X, \Omega_X^1)^\vee / H_1 (X; \mathbb{Z}).
\]
注意到由 [[Serre 对偶]]，有
$H^0 (X, \Omega_X^1)^\vee \simeq H^1 (X, \mathcal{O}_X) \simeq \mathbb{C}^g$，
而 $H_1 (X; \mathbb{Z}) \simeq \mathbb{Z}^{2g}$ 为其中的[[晶格]]，
故 $J (X)$ 同构于复 $g$ 维[[环面]]。

我们来证明这样定义出的 $J (X)$ 与 $\operatorname{Pic}^0 (X)$ 一样。
由[[指数正合列]]诱导的[[长正合列]]
\[
\cdots \to
H^1 (X; \mathbb{Z}) \xrightarrow{\alpha}
H^1 (X, \mathcal{O}_X) \xrightarrow{\beta}
H^1 (X, \mathcal{O}_X^\times) \xrightarrow{\delta}
H^2 (X; \mathbb{Z}) \to \cdots ,
\]
而 $\alpha$ 就是之前的映射 $i$ 复合上 [[Poincaré 对偶]]
$H^1 (X; \mathbb{Z}) \simeq H_1 (X; \mathbb{Z})$，故
\[
\begin{aligned}
  J (X) & \simeq
  H^0 (X, \Omega_X^1)^\vee / H_1 (X; \mathbb{Z}) \\
  & \simeq
  H^1 (X, \mathcal{O}_X) / H^1 (X; \mathbb{Z}) \\
  & \simeq
  \operatorname{im} \beta = \ker \delta \\
  & \simeq \operatorname{Pic}^0 (X),
\end{aligned}
\]
其中，我们有典范同构
$H^1 (X, \mathcal{O}_X^\times) \simeq \operatorname{Pic} (X)$，
且映射 $\delta$ 将线丛映到其次数。

## 性质

```terms
Jacobi 簇:
  en: Jacobian variety
  fr: variété jacobienne :f
  de: Jacobi-Varietät :f
```
