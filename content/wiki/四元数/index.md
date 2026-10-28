---
title: 四元数
aliases: [四元数环]
categories: [数系, 代数论]
navboxes: [数系]
---

<problems>
- “定义”“性质”各节需要扩充。
</problems>

**四元数**是形如
\[
a + b \mathrm{i} + c \mathrm{j} + d \mathrm{k}
\]
的[[数]]，其中 $a, b, c, d$ 是[[实数]]，元素 $\mathrm{i}, \mathrm{j}, \mathrm{k}$ 满足
\[
\begin{gathered}
  \mathrm{i}^2 = \mathrm{j}^2 = \mathrm{k}^2 = -1, \\
  \mathrm{i} \mathrm{j} = - \mathrm{j} \mathrm{i} = \mathrm{k}, \\
  \mathrm{j} \mathrm{k} = - \mathrm{k} \mathrm{j} = \mathrm{i}, \\
  \mathrm{k} \mathrm{i} = - \mathrm{i} \mathrm{k} = \mathrm{j}.
\end{gathered}
\]
四元数的乘法不满足[[交换律]]，但非零元素都有乘法逆元，
因此，所有四元数构成一个[[除环]]，
它同时也是[[实数域]]上的[[中心单代数]]。

所有四元数的集合通常记为 $\mathbb{H}$。

## 定义

::: definition [四元数]
**四元数环** $\mathbb{H}$
是 $\mathbb{R}$-[[代数|结合代数]]，它作为 $\mathbb{R}$-[[向量空间]]是
\[
\mathbb{R}^4 = \mathbb{R} 1 \oplus \mathbb{R} \mathrm{i} \oplus \mathbb{R} \mathrm{j} \oplus \mathbb{R} \mathrm{k}
\]
其中，$1, \mathrm{i}, \mathrm{j}, \mathrm{k}$ 是 $\mathbb{H}$ 中的四个元素，
满足 $1$ 为乘法单位元，
\[
\begin{gathered}
  \mathrm{i}^2 = \mathrm{j}^2 = \mathrm{k}^2 = -1, \\
  \mathrm{i} \mathrm{j} = - \mathrm{j} \mathrm{i} = \mathrm{k}, \\
  \mathrm{j} \mathrm{k} = - \mathrm{k} \mathrm{j} = \mathrm{i}, \\
  \mathrm{k} \mathrm{i} = - \mathrm{i} \mathrm{k} = \mathrm{j}.
\end{gathered}
\]
可以验证这唯一地给出了 $\mathbb{R}$-代数的结构。
这时 $\mathbb{H}$ 的元素称为**四元数**。
:::

与[[复数]]一样，也可以谈论四元数的范数和共轭。

::: definition [范数]
四元数 $x = a + b\mathrm{i} + c\mathrm{j} + d\mathrm{k}$
（$a, b, c, d \in \mathbb{R}$）
的**范数**或**模**是
\[
\|x\| = (a^2 + b^2 + c^2 + d^2)^{\frac{1}{2}}.
\]
:::

::: definition [共轭]
四元数 $x = a + b\mathrm{i} + c\mathrm{j} + d\mathrm{k}$
（$a, b, c, d \in \mathbb{R}$）
的**共轭**是
\[
x^* = \bar{x} =
a - b\mathrm{i} - c\mathrm{j} - d\mathrm{k}.
\]
:::

## 性质

### 共轭与范数

正如在复数中，一个元素乘它自己的共轭是它的范数的平方。

::: proposition
对任意 $x \in \mathbb{H}$，$xx^* = x^*x = \|x\|^2$。
:::

从而对非零元素 $x$ 都有逆 $\frac{x^*}{\|x\|^2}$。
因此

::: proposition
$\mathbb{H}$ 是除环。
:::

不过在复数中共轭是[[自同构]]，此时它是个[[反自同构]]。

::: proposition
对任意 $x, y \in \mathbb{H}$，

- $(x^*)^* = x$。

- $(x + y)^* = x^* + y^*$。

- $(xy)^* = y^* x^*$。

:::

由此，范数具有乘性。

::: corollary
对任意 $x, y \in \mathbb{H}$，
$\|xy\| = \|yx\| = \|x\|\|y\|$。
:::

::: proof
$\|xy\|^2 = (xy)(xy)^* = xy y^* x^* = x\|y\|^2 x^* =
  \|x\|^2\|y\|^2$。
:::

由范数的乘性，我们知道 $\|\cdot\|$ 是一个从 $\mathbb H$ 的乘法群 $\mathbb H^\times$
到 $\mathbb R^+$ 的群同态，它的核是所有范数为 $1$ 的四元数，可以记为 $\mathbb H_1$。

取出 $\mathbb H$ 中所有实部为 $0$（$a = 0$）的四元数，
它们组成一个三维实线性子空间 $\mathbb H_{a = 0}$。
由范数为 $1$ 的四元数 $q \in \mathbb H_1$ 可以诱导
$\mathbb H_{a = 0}$（作为三维实线性空间的）旋转
（$x \mapsto q x q^{-1}$，$x \in \mathbb H_{a = 0}$）。
通过下面陈述的嵌入 $\mathbb H \to \mathrm{M}_2(\mathbb{C})$，
可以验证 $\mathbb H_1 \cong \operatorname{SU}(2)$。
注意到 $\pm 1 \in \mathbb H_1$ 诱导出的是同一个旋转，
这给出了 $\operatorname{SU}(2) \to \operatorname{SO}(3)$ 的二重复叠。

### 作为除环

如下命题说明在[[除环]]的意义下不能再拓展数系。
不过如果放弃结合律，则仍可以继续扩展，而得到[[八元数]]。

::: proposition
[[实数域]] $\mathbb{R}$ 上的有限维[[中心单代数]]必为
$\mathrm{M}_n(\mathbb{R})$ 或 $\mathrm{M}_n(\mathbb{H})$。
这样 $\mathbb{H}$ 对应了 $\mathbb{R}$ 的
[[Brauer 群]]的唯一非平凡元素。
特别地，$\mathbb{R}$ 上有限维除环仅有 $\mathbb{R}$、$\mathbb{C}$、$\mathbb{H}$。
:::

此外，由于 $\mathbb{C}$ 上的中心单代数必然形如 $\mathrm{M}_n(\mathbb{C})$，
我们有如下结论：

::: proposition
$\mathbb H \otimes_{\mathbb{R}} \mathbb{C} \simeq \mathrm{M}_2(\mathbb{C})$。
:::

此同构也可以通过 [[Pauli 矩阵]]显式构造：

::: proof
我们这样定义从 $\mathbb H$ 到 $M_2(\mathbb C)$ 的单同态：

```math {@homo:H-to-M_2-C}
A \colon a + b \mathrm i + c \mathrm j + d \mathrm k
    \mapsto a + b \mathrm i \sigma_z
    + c \mathrm i \sigma_y + d \mathrm i \sigma_x =
    \begin{pmatrix}
        a + b \mathrm i & c + d \mathrm i \\
        -c + d \mathrm i & a - b \mathrm i
    \end{pmatrix}.
```

其中
\[
\begin{aligned}
  \sigma_x = - \mathrm i A(\mathrm k),
  &&
  \sigma_y = - \mathrm i A(\mathrm j),
  &&
  \sigma_z = - \mathrm i A(\mathrm i)
\end{aligned}
\]
是 Pauli 矩阵，满足性质 $\{\sigma_i, \sigma_j\} = 2 \delta_{ij}$，
而 $[\sigma_i, \sigma_j] = 2 \mathrm i \varepsilon_{ijk} \sigma_k$。
由此可以验证它确实是同构。
:::

```terms
四元数:
  en: quaternion
  de: Quaternion :f
  fr: quaternion :m
  grc: τετράδιον :n
  la: quaternio :m
```
