---
title: '幂等完备 $(\infty,1)$-范畴'
categories: [高阶范畴论]
navboxes: [高阶范畴论]
---

::: convention
在本文中，

- [[范畴]]都指 [[$(\infty,1)$-范畴]]，
  将经典的范畴称为 $1$-范畴。

:::

**幂等完备 $(\infty,1)$-范畴**（又称 **Karoubi $(\infty,1)$-范畴**）
是[[幂等完备范畴]]向 [[$(\infty,1)$-范畴]]的推广，
是指全体[[幂等态射]]均分裂的 $(\infty,1)$-范畴。
幂等完备性是比余完备性更弱的条件，
在[[稳定范畴]]与[[代数 K 理论]]中有重要应用。

## 定义

在 $1$-范畴中，幂等元可以简单地定义为满足 $e^2 = e$ 的自态射。
在 $(\infty,1)$-范畴中，这一条件需要推广为涉及无穷多高阶相容性的函子条件。
为此我们引入以下两个辅助范畴。

::: definition
**[[收缩]]的万有范畴**是指由以下 $1$-范畴 $\mathsf{Ret}$：

- 对象为 $0, 1$。

- 态射集为
  \[
  \begin{aligned}
    \operatorname{Hom}_{\mathsf{Ret}}(0,0) = \{\mathrm{id}_0\}& , \quad \operatorname{Hom}_{\mathsf{Ret}}(1,1) = \{\mathrm{id}_1,e\},\\
    \operatorname{Hom}_{\mathsf{Ret}}(0,1) = \{i\} &,\quad
    \operatorname{Hom}_{\mathsf{Ret}}(1,0) = \{r\},
  \end{aligned}
  \]
  满足以下关系：
  \[
  r \circ i = \mathrm{id}_0, \quad
  i \circ r = e, \quad
  e \circ i = i, \quad
  e \circ e = e, \quad
  r \circ e = r.
  \]

直观地说，$\mathsf{Ret}$ 编码了一个万有的收缩对：
$0$ 经 $i$ 嵌入 $1$ 后经 $r$ 收回，而 $e = i \circ r$ 是 $1$ 上相应的幂等元。

**幂等元的万有范畴** $\mathsf{Idem}$ 定义为 $\mathsf{Ret}$ 中由对象 $1$ 张成的全子范畴。
:::

::: definition
令 $\mathcal{C}$ 为范畴。

- $\mathcal{C}$ 中的**幂等元**是指函子 $e \colon \mathsf{Idem} \to \mathcal{C}$。

- 称幂等元 $e$ 是**分裂**的，是指 $e$ 作为 $\mathsf{Idem}$-型图表具有余极限。

- 称 $\mathcal{C}$ 为**幂等完备范畴**，是指 $\mathcal{C}$ 中每个幂等元均分裂。

:::

::: definition
令 $\mathcal{C}$ 为范畴，
其**幂等完备化**是指[[(∞,1)-余完备化|余完备化]] $\mathcal{P}^{\{\mathsf{Idem}\}}(\mathcal{C})$，
也记为 $\mathcal{C}^{\mathrm{idem}}$。
直观上，$\mathcal{C}^{\mathrm{idem}}$ 是在 $\mathcal{C}$ 中自由添加全体幂等元的分裂所得的范畴。
:::

::: remark [与 $1$-范畴情况的差别] {@rmk-idempotent-split}
在 $1$-范畴中，对于幂等元 $e \colon X \to X$，
可以通过取有限（余）极限的方式使其分裂，
例如取 $e$ 与 $\operatorname{id}_X$ 的等子或余等子。
但在 $(\infty,1)$-范畴中这一做法失效，
原因在于有限余极限无法记录无穷高阶相容性。
具体地说，条件 $e^2 \simeq e$ 给出的同伦可以通过不同的组合方式
产生两个不同的同构 $e^3 \simeq e$，
这些高阶同伦数据之间还需要满足进一步的相容性，以此类推。
$\mathsf{Idem}$-型图表的作用正是将所有这些高阶相容性一次性地编码起来。
:::

## 例子

- 任意具有序列余极限的范畴都是幂等完备范畴。
  特别地，[[可表现范畴]]是幂等完备范畴。
- 任意具有可数余积的稳定范畴是幂等完备的。

## 性质

### 幂等元与收缩

以下命题解释了序列余极限与幂等元分裂之间的联系，
也阐明了 @rmk-idempotent-split 中为何有限余极限需要被替换为序列余极限。

::: proposition
考虑由如下构造给出的函子 $F \colon \mathbb{N} \to \mathsf{Idem}$：

- 对对象，$F(n) = 1$。

- 对态射，$F(n \to n+1) = e$。

则 $F$ 为[[共尾函子]]。
:::

此命题表明，$\mathsf{Idem}$-型图表的余极限可以等价地改写为 $\mathbb{N}$-型序列的余极限，
这正是“序列余极限蕴含幂等完备性”的原因。

::: proposition
每个收缩 $r \colon \mathsf{Ret} \to \mathcal{C}$ 都可以表示为[[左 Kan 扩张]]：

\[
\begin{tikzcd}
  \mathsf{Idem} \ar[d, hookrightarrow] \ar[dr, "r|_{\mathsf{Idem}}"] & \\
  \mathsf{Ret} \ar[r, "r"'] & \mathcal{C}
\end{tikzcd}
\]

反之，函子 $e \colon \mathsf{Idem} \to \mathcal{C}$
可以左 Kan 扩张到 $\mathsf{Ret}$ 上当且仅当 $e$ 分裂。
:::

由此可得幂等完备性的等价刻画：

::: proposition
限制函子 $\mathsf{Fun}(\mathsf{Ret},\mathcal{C}) \to \mathsf{Fun}(\mathsf{Idem},\mathcal{C})$
是全忠实函子，其本质像恰为 $\mathcal{C}$ 中分裂的幂等元所构成的全子范畴。
:::

### 幂等完备化与原子对象

幂等完备化可以通过预层范畴中的原子性对象来具体描述。

::: definition
令 $\mathcal{C}$ 为具有小余极限的局部小范畴。
称 $X \in \mathcal{C}$ 具有**原子性**，
是指 $\operatorname{Hom}$ 函子 $\operatorname{Hom}_{\mathcal{C}}(X,-)$ 保持全体小余极限。
:::

::: proposition
有如下范畴等价：

\[
\mathsf{Fun}^{\mathrm{atm}}(\mathcal{C}^{\mathrm{op}},\mathsf{Ani}) \simeq \mathcal{C}^{\mathrm{idem}},
\]

其中 $\mathsf{Fun}^{\mathrm{atm}}(\mathcal{C}^{\mathrm{op}},\mathsf{Ani})$
是预层范畴 $\mathsf{Fun}(\mathcal{C}^{\mathrm{op}},\mathsf{Ani})$
中全体原子性对象所张成的全子范畴。
:::

换言之，幂等完备化中的对象恰好对应于预层范畴中那些“最小”的预层——即保余极限的可表函子的直和项。

::: proposition
对于稳定范畴 $\mathcal{C}$，其幂等完备化 $\mathcal{C}^{\mathrm{idem}}$ 仍为稳定范畴。
:::

```terms
'幂等完备 $(\infty,1)$-范畴':
  en: 'idempotent complete $(\infty,1)$-category'
```
