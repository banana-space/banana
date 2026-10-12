---
title: 基本类
categories: [同调论]
navboxes: [代数拓扑]
---

在[[代数拓扑]]中，
$n$ 维[[连通空间|连通]]、[[紧空间|紧]]、[[定向流形|定向]][[流形]] $X$
的**基本类**是[[普通同调]]的元素
\[
[X] \in H_n (X; \mathbb{Z}),
\]
也就是 $X$ 自己所代表的[[奇异同调|奇异 $n$-圈]]在[[奇异同调]]中对应的元素。

在 [[Poincaré 对偶]]下，$H_n (X; \mathbb{Z})$ 等同于第 $0$ 阶[[普通上同调]]
$H^0 (X; \mathbb{Z}) \simeq \mathbb{Z}$。
此时，基本类对应于上同调的单位元 $1 \in H^0 (X; \mathbb{Z})$，
从而是 $H_n (X; \mathbb{Z}) \simeq \mathbb{Z}$ 作为 [[Abel 群]]的两个生成元之一。
事实上，这两个生成元对应了 $X$ 的不同[[定向]]：
若取相反的定向，则基本类就会变成相反的元素。

基本类是流形上[[积分]]所需要的关键信息。
对上述流形 $X$ 上的 $n$ 阶[[微分形式]] $\omega$，积分
\[
\int_X \omega \in \mathbb{R}
\]
也就是同调、上同调间的配对 $\langle [X], [\omega] \rangle$，
其中 $[\omega] \in H^n (X; \mathbb{R})$
是 $\omega$ 在 [[de Rham 上同调]]中对应的上同调类。
在这种观点下，积分运算 $\int_X {} (-)$ 作为 $H^n (X; \mathbb{R})$ 上的[[线性函数]]
等同于 $X$ 的基本类。

```terms
基本类:
  en: fundamental class
  fr: classe fondamentale :f
  de: fundamentale Klasse :f
  ja: 基<き>本<ほん>類<るい>
  ko: 기본류 (基本類)
```
