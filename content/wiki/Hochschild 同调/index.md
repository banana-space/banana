---
title: Hochschild 同调
categories: [非交换几何, 高阶代数]
notices:
  - name: 问题
    items:
      - “对 $\mathbb{E}_1$-代数”“基本性质”“杠消解”“HKR 滤链”“例子”各节需要扩充。
navboxes: [高阶代数]
---

**Hochschild 同调**是对交换环 $R$
上[[结合代数]] $A$ 定义的[[同调]]理论，
记作 $\operatorname{HH}(A/R)$ 或 $\operatorname{HH}(A)$。
直观地看，Hochschild 同调是沿[[圆周]] $S^1$ 做[[导出张量积]]

```tikz
\begin{tikzpicture}
    \node at (-2.5, 0) {$\operatorname{HH} (A) \enspace =$};
    \foreach \i in {0, ..., 5} {
        \node[rotate=\i * 60 - 90] at (\i * 60 : 1) {$A$};
        \node[rotate=\i * 60 - 60] at (\i * 60 + 30 : 1) {$\otimes$};
        \node[rotate=\i * 60 - 60] at (\i * 60 + 30 : 0.75) {$\scriptscriptstyle A$};
    }
\end{tikzpicture}
```

图中的张量积是 $A$-左模、右模的张量积。
因为 $A \otimes_A A \simeq A$，所以该张量积与图中 $A$ 的个数无关（当然至少需要 $2$ 个）。

上述定义也可以自然地推广到[[高阶代数]]中。
对 [[$\mathbb{E}_\infty$-环]]同态 $R \to A$，
Hochschild 同调 $\operatorname{HH}(A/R)$
就是 $A$ 在[[圆周]]上的[[余极限]]，
它是万有的带有圆周[[群作用|作用]]的 $A$-代数。
用这一万有性质，可以证明 Hochschild 同调的许多函子性与基变换的结论。

## 定义

### 对结合代数

::: definition
对[[交换环]] $R$（常取为[[域]]）
和 $R$-[[结合代数]] $A$，
其 **Hochschild 同调** $\operatorname{HH}(A/R)$ 是 $R$-[[链复形]]
\[
A \ \underset{\hspace{.55em} A \, \underset{R}{\otimes} \, A^{\mathrm{op}}}
{\overset{\mathbb{L}}{\otimes}} \ A .
\]
对一般的 $A$-[[双模]] $M$，亦可定义 **Hochschild 同调**
$\operatorname{HH}(A/R, M)$ 为
\[
A \ \underset{\hspace{.55em} A \, \underset{R}{\otimes} \, A^{\mathrm{op}}}
{\overset{\mathbb{L}}{\otimes}} \ M.
\]
:::

### 对 $\mathbb{E}_1$-代数

### 对 $\mathbb{E}_\infty$-代数

以下所述的 $\mathbb{E}_\infty$-环均在[[谱范畴]] $\mathsf{Sp}$ 中。

::: definition [Hochschild 同调]
设 $R \to A$ 是 [[$\mathbb{E}_\infty$-环]]同态，
其 **Hochschild 同调** $\operatorname{HH}(A/R)$ 为
$\mathbb{E}_\infty$-$R$-代数范畴中的[[余幂]] $A \otimes \mathbb{T}$，
即常值图表 $\mathbb{T}\to A$ 在此范畴中的[[余极限]]。
这里 $\mathbb{T}$ 表示[[圆周]]。

当 $R = \mathbb{Z}$ 时此同调通常简写为 $\operatorname{HH}(A)$，
当 $R$ 为[[球谱]] $\mathbb{S}$ 时，
此同调称为 **[[拓扑 Hochschild 同调]]**。
:::

::: definition [圆周作用]
$\operatorname{HH}(A/R)$ 带有典范的 $\mathbb{T}$-作用：
事实上，它是以下图表
\[
\begin{tikzcd}
{*} \ar[d] \ar[r, "*\mapsto A"]
& \{\mathbb{E}_{\infty}\text{-}R\text{-代数}\}
\\ \mathrm{B} \mathbb{T} \ar[ur, dashed]
\end{tikzcd}
\]
的水平映射沿映射 $* \to \mathrm{B} \mathbb{T}$ 的[[左 Kan 扩张]]在一点处的取值。
:::

由 Kan 扩张的万有性质，Hochschild 同调也可用以下万有性质来定义。

::: definition [万有定义]
对 $\mathbb{E}_\infty$-环同态 $R\to A$，
考虑以下二元组构成的范畴：

- 一个带有 $\mathbb{T}$-作用的
  $\mathbb{E}_\infty$-$R$-代数 $B$，
  即函子 $\mathrm{B} \mathbb{T} \to \{\mathbb{E}_\infty\text{-}R\text{-代数}\}$，
  使其在一点处取值为 $B$；

- 一个 $\mathbb{E}_\infty$-$R$-代数同态 $A \to B$
  （它未必与 $\mathbb{T}$-作用相容）。

**Hochschild 同调** $\operatorname{HH}(A/R)$
为此范畴中的始对象。
:::

## 性质

### 基本性质

### 杠消解

### HKR 滤链

## 例子

```terms
Hochschild 同调:
  en: Hochschild homology
  de: Hochschild-Homologie :f
  fr: homologie de Hochschild :f
```
