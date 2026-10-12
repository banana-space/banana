---
title: 环面
aliases: [圆环面]
categories: [一般拓扑, 微分几何]
notices:
  - name: 区分
    pages:
      - 复环面
      - 代数环面
---

**环面** $T^2$ 是如下图所示的[[拓扑空间]]，
也能视为二维[[光滑流形]]。

```tikz
\begin{tikzpicture}[line width=1, scale=.6]
    \useasboundingbox (-3.2, -1.6) rectangle (3.2, 1.6);
    \draw (0,0) ellipse (3 and 1.5);
    \begin{scope}
        \clip (0,-1.8) ellipse (3 and 2.5);
        \draw (0,2.2) ellipse (3 and 2.5);
    \end{scope}
    \begin{scope}
        \clip (0,2.2) ellipse (3 and 2.5);
        \draw (0,-2.2) ellipse (3 and 2.5);
    \end{scope}
\end{tikzpicture}
```

环面[[同胚]]于[[圆周]] $S^1$ 与自身的[[积空间]] $S^1 \times S^1$。

对任意自然数 $n$，也将 $S^1$ 与自身的 $n$ 重乘积称为环面，记为 $T^n = (S^1)^n$。

## 定义

::: definition [环面]
设 $n$ 为[[自然数]]。则 $n$ 维**环面**是指 $n$ 维[[光滑流形]]
\[
T^n = (S^1)^n,
\]
即[[圆周]] $S^1$ 与自身的 $n$ 重[[积空间]]。
:::

## 性质

- 环面 $T^n$ 是[[紧空间]]。

- 环面 $T^n$ 的[[切丛]]是[[平凡丛]]。

- 映射 $\mathbb{R}^n \to (S^1)^n$ 是环面 $T^n$ 的[[万有覆叠]]。
  从而，环面的[[基本群]]是 $\pi_1 (T^n) \simeq \mathbb{Z}^n$，
  而高阶[[同伦群]]为零。

```terms
环面:
  en: torus
  fr: tore :m
  de: Torus :m
  ja: トーラス
  ko: [원환면 (圓環面), 토러스]
```
