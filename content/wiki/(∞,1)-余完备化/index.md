---
title: '$(\infty,1)$-余完备化'
categories: [高阶范畴论]
navboxes: [高阶范畴论]
---

::: convention
在本文中，

- [[范畴]]都指 [[$(\infty,1)$-范畴]]。

:::

**$(\infty,1)$-余完备化**是对 [[$(\infty,1)$-范畴]]的[[余完备化]]，
指向某个 $(\infty,1)$-范畴自由地加入某些形式的[[余极限]]，
而得到一个新的 $(\infty,1)$-范畴的构造。
例如，加入任意的余极限所得到的构造称为[[预层范畴]]，
加入任意的[[滤余极限]]所得到的范畴称为[[滤余完备化]]，
加入任意的[[筛余极限]]所得到的范畴称为[[筛余完备化]]。

## 定义

令 $\mathcal{K}$ 为一族小范畴，
考虑 $\mathsf{Cat}(\mathcal{K}) \subset \mathsf{Cat}$ 为如下子范畴：

- 对象为具备所有 $K$-余极限的范畴 $\mathcal{C}$（$K \in \mathcal{K}$）。

- 态射 $f \colon \mathcal{C} \to \mathcal{D}$ 为保持所有 $K$-余极限（$K \in \mathcal{K}$）的函子。

对于两族范畴 $\mathcal{K} \subset \mathcal{K}'$，
自然有遗忘函子 $\mathsf{Cat}(\mathcal{K}') \to \mathsf{Cat}(\mathcal{K})$。
该遗忘函子有左伴随，由如下构造给出：

::: definition {@def-K'-cocompletion}
令 $\mathcal{K} \subset \mathcal{K}'$ 为两族小范畴，
$\mathcal{C} \in \mathsf{Cat}(\mathcal{K})$。
**$\mathcal{C}$ 关于 $\mathcal{K}'$ 的余完备化**
$\mathcal{P}_{\mathcal{K}}^{\mathcal{K}'}(\mathcal{C})$
由如下泛性质刻画：
存在万有函子 $\mathcal{C} \to \mathcal{P}_{\mathcal{K}}^{\mathcal{K}'}(\mathcal{C})$，
使得对任意 $\mathcal{D} \in \mathsf{Cat}(\mathcal{K}')$，有等价

$$
\mathsf{Fun}^{\mathcal{K}}(\mathcal{C},\mathcal{D}) \simeq \mathsf{Fun}^{\mathcal{K}'}(\mathcal{P}_{\mathcal{K}}^{\mathcal{K}'}(\mathcal{C}),\mathcal{D}),
$$

其中 $\mathsf{Fun}^{\mathcal{K}}$ 表示由保持所有
$K$-余极限（$K \in \mathcal{K}$）的函子所构成的全子范畴。
:::

这个框架可以通过代数类比来理解：
将不同形状的余极限类比为不同的代数结构。
例如取 $\mathcal{K}$ 对应 $\mathsf{Ab}$，$\mathcal{K}'$ 对应 $\mathsf{CAlg}$，
那么进行 $\mathcal{K}'$-余完备化就相当于让 Abel 群 $A$ 自由生成一个交换环 $\operatorname{Sym}(A)$
——在保持现有 $\mathcal{K}$-余极限的情况下，自由加入 $\mathcal{K}'$-余极限。
正如从环到乘法幺半群的遗忘函子有左伴随一样，
遗忘一部分“余极限结构”的操作通常也有左伴随，即自由地补上被遗忘的部分。

::: remark
令 $\mathcal{C}$ 为小范畴。
若 $\mathcal{K}' = \mathrm{all}$（全体小范畴）且 $\mathcal{K} = \varnothing$，
则 $\mathcal{P}^{\mathrm{all}}(\mathcal{C}) = \mathsf{PShv}(\mathcal{C})$。
当 $\mathcal{K}$ 非空而 $\mathcal{K}' = \mathrm{all}$ 时，
$\mathcal{P}_{\mathcal{K}}^{\mathrm{all}}(\mathcal{C})$ 可等价为 $\mathsf{PShv}(\mathcal{C})$
关于以下一类映射的局部化：

$$
\{\alpha_X \colon \operatorname{colim}_{i \in I} y(X_i) \to y(\operatorname{colim}_{i \in I} X_i) \mid I \in \mathcal{K},\, X \colon I \to \mathcal{C}\}.
$$
:::

## 例子

- 对于小范畴 $\mathcal{C}$，取 $\mathcal{K} = \varnothing$，$\mathcal{K}' = \mathrm{all}$，
  则 $\mathcal{P}^{\mathrm{all}}(\mathcal{C}) = \mathsf{PShv}(\mathcal{C})$。

- 对于小范畴 $\mathcal{C}$ 以及正则基数 $\kappa$，
  取 $\mathcal{K} = \varnothing$，$\mathcal{K}' = \{\kappa\text{-滤范畴}\}$，
  则 $\mathcal{P}^{\mathcal{K}'}(\mathcal{C}) = \mathsf{Ind}_{\kappa}(\mathcal{C})$，
  称为 **$\kappa$-滤余完备化**。
  当 $\kappa = \aleph_0$ 时，简称为滤余完备化。

- 对于小范畴 $\mathcal{C}$，取 $\mathcal{K} = \varnothing$，$\mathcal{K}' = \{\text{筛范畴}\}$，
  则 $\mathcal{P}^{\mathcal{K}'}(\mathcal{C}) = \mathsf{sInd}(\mathcal{C})$，
  称为**筛余完备化**，
  有时也记为 $\mathsf{PShv}_{\Sigma}(\mathcal{C})$
  或 $\mathcal{P}_{\Sigma}(\mathcal{C})$。

  由于筛余极限可分解为滤余极限与几何实现，
  亦可取 $\mathcal{K} = \varnothing$，
  $\mathcal{K}' = \{\mathbb{\Delta}^{\operatorname{op}}\} \cup \{\text{滤范畴}\}$。

- 对于范畴 $\mathcal{C}$，取 $\mathcal{K} = \varnothing$，$\mathcal{K}' = \{\mathsf{Idem}\}$，
  则 $\mathcal{P}^{\mathcal{K}'}(\mathcal{C}) = \mathcal{C}^{\mathrm{idem}}$ 为 $\mathcal{C}$
  的幂等完备化。
  此处 $\mathsf{Idem}$ 定义如下：
  先构造收缩的万有范畴 $\mathsf{Ret}$，其由如下推出给出：

  $$
  \begin{tikzcd}
    \{0 < 2\} \ar[r] \ar[d] \ar[dr,phantom,very near end,"\ulcorner"] & [2] \ar[d]\\
    \ast \ar[r] & \mathsf{Ret}
  \end{tikzcd}
  $$

  具体地说，$\mathsf{Ret}$ 有两个对象 $0, 1$，
  其态射由 $f \colon 0 \to 1$ 与 $r \colon 1 \to 0$（满足 $r \circ f = \operatorname{id}_0$）生成。
  取 $\mathsf{Idem} \subset \mathsf{Ret}$ 为 $1$ 所张成的全子范畴即可。

## 互补结构

::: definition
令 $\mathcal{K}$ 和 $\mathcal{K}'$ 为两类小范畴。
记 $\mathcal{K} \perp \mathcal{K}'$，并称 $\mathcal{K}$ 为 $\mathcal{K}'$ 的**补集**，
是指对于任意带有 $\mathcal{K}'$-余极限的范畴 $\mathcal{C}$，
有等价
$\mathcal{P}^{\mathcal{K}}(\mathcal{C}) \simeq \mathcal{P}_{\mathcal{K}'}^{\mathrm{all}}(\mathcal{C})$。
:::

需要注意 $\perp$ 并不对称：
$\mathcal{K} \perp \mathcal{K}'$ 不蕴含 $\mathcal{K}' \perp \mathcal{K}$。

::: remark
对于 $\mathcal{K} \perp \mathcal{K}'$，有以下性质：

1. 在 $\mathsf{An}$ 中，$\mathcal{K}$-余极限与 $\mathcal{K}'$-极限相交换。

2. 对于任意范畴 $\mathcal{C}$，
   有
   $\mathcal{P}^{\mathcal{K} \cup \mathcal{K}'}(\mathcal{C}) \simeq \mathcal{P}^{\mathrm{all}}(\mathcal{C})$。
   换言之，$\mathsf{PShv}(\mathcal{C})$ 是在可表函子的基础上同时自由加入
   $\mathcal{K}$-余极限与 $\mathcal{K}'$-余极限的产物。

:::

::: example {@ex-complementary-pairs}
以下为互补类的例子：

1. $\{\text{滤范畴}\} \perp \{\text{有限范畴}\}$：
   $\mathsf{Ind}(\mathcal{C}) \simeq \mathcal{P}_{\mathrm{fin}}^{\mathrm{all}}(\mathcal{C})$。

2. 对于正则基数 $\kappa$，
   $\{\kappa\text{-滤范畴}\} \perp \{\kappa\text{-小范畴}\}$：
   $\mathsf{Ind}_{\kappa}(\mathcal{C}) \simeq \mathcal{P}_{\kappa\text{-sm}}^{\mathrm{all}}(\mathcal{C})$。

3. $\{\text{弱可缩范畴}\} \perp \{\text{空范畴}\}$：
   $\mathcal{P}^{\mathrm{w.c.}}(\mathcal{C}) \simeq \mathcal{P}_{\{\varnothing\}}^{\mathrm{all}}(\mathcal{C}) = \mathsf{Fun}_*(\mathcal{C}^{\operatorname{op}},\mathsf{An})$，
   即将 $\varnothing \in \mathcal{C}$ 映为 $\ast \in \mathsf{An}$ 的函子所构成的范畴。

4. $\{\text{筛范畴}\} \perp \{\text{有限集}\}$：
   $\mathsf{sInd}(\mathcal{C}) \simeq \mathcal{P}_{\mathrm{FinSet}}^{\mathrm{all}}(\mathcal{C})$。
   这意味着筛余完备化恰好是在有限余积的基础上，自由添入其余所有余极限。

5. $\{\text{范畴}\} \perp \varnothing$。

6. $\{\text{生象}\} \perp \{\text{弱可缩范畴}\}$。
   这也是 $\perp$ 不满足对称性的一个例子。

7. $\{n\text{-群胚}\} \perp \{\text{弱 } n\text{-连通范畴}\}$。

:::

```terms
'$(\infty,1)$-余完备化':
  en: '$(\infty,1)$-cocompletion'
```
