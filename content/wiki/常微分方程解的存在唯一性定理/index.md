---
title: 常微分方程解的存在唯一性定理
aliases: [常微分方程解的存在唯一性, Picard–Lindelöf 定理, Cauchy–Lipschitz 定理]
categories: [常微分方程论]
navboxes: [常微分方程]
---

<problems>
- “定理与证明”一节中延拓解的论证里，区间 $[t_0,t_0+t_1+b'/M]$ 似乎应为 $[t_0,t_1+b'/M]$；条件 $h^*\le t_1\le h$ 似乎应为 $t_0+h^*\le t_1\le t_0+h$。
- “推广”一节需要扩充，例如 Peano 存在定理及 Arzelà–Ascoli 定理在其中的应用。
</problems>

**常微分方程解的存在唯一性定理**，也叫
**Picard–Lindelöf 定理**、
**Picard 存在性定理**、
**Cauchy–Lipschitz 定理**，
说的是在一定条件下，[[常微分方程]]的[[初值问题]]存在唯一的局部解。

## 定理与证明

::: theorem [常微分方程解的存在唯一性定理]
对于初值问题
\[
\begin{cases}
  \dfrac{\mathrm{d} \mathbf{x}}{\mathrm{d} t}=\mathbf{f}(\mathbf{x},t),\\
  \mathbf{x}(t_0)=\mathbf{x}_0,
\end{cases}
\]
如果 $\mathbf{f}(\mathbf{x},t)$ 在矩形闭区域
$D=\{(\mathbf{x},t)\mid |t-t_0|\le a,\| \mathbf{x}-\mathbf{x}_0\| \le b\}$
上连续，并且在 $D$ 中对 $\mathbf{x}$ 满足
[[Lipschitz 连续映射|Lipschitz 条件]]：
\[
\|\mathbf{f}(\mathbf{x},t)-\mathbf{f}(\mathbf{y},t)\|\le L\|\mathbf{x}-\mathbf{y}\|,
(\mathbf{x},t),(\mathbf{y},t)\in D,
\]
令 $M=\max_{D} \|f\|, h=\min\{a,b/M\}$，
则在 $[t_0-h,t_0+h]$ 上上述初值问题存在唯一的解。
:::

::: proof
我们将说明这只是[[压缩映射定理]]的推论。
为此，我们要证明初值问题的解是一个空间上某个压缩变换的不动点。
令 $h^*=\min\{h, 1/L\}$。
我们取空间 $\mathscr{B}=C[t_0-h^*,t_0+h^*]$，即 $[t_0-h^*,t_0+h^*]$ 上一切连续函数构成的空间，
按极大值范数 $\|u\|:=\max_{[t_0-h^*,t_0+h^*]}|u|$ 构成一个 Banach 空间。一个序列在这个空间中
收敛等价于[[一致收敛]]。
然后我们在 $\mathscr{B}$ 上定义 Picard 映射 $A:\mathscr{B}\to\mathscr{B}$，
\[
(A\phi)(t)=
\mathbf{x}_0+\int_{t_0}^t \mathbf{f}(\phi(t),t) \, \mathrm{d} t, \quad
\phi\in \mathscr{B},
\]
则如果 $A\phi=\phi$，则
\[
\phi'(t)=\mathbf{f}(\phi(t),t), \quad \phi(t_0)=\mathbf{x}_0,
\]
即 $\phi$ 是初值问题在区间 $[t_0-h^*,t_0+h^*]$ 上的解；
反之通过对初值问题的任一 $[t_0-h^*,t_0+h^*]$ 上的解积分也可知它是 Picard 映射的不动点。

下面只要验证 $A$ 是压缩映射。设 $\phi,\psi\in \mathscr{B}$，
则
\[
\begin{aligned}
  |(A\phi-A\psi)(t)|
  & = \left| \int_{t_0}^t (\mathbf{f}(\phi(t),t)-\mathbf{f}(\psi(t),t)) \, \mathrm{d} t \right| \\
  & \le \left| \int_{t_0}^t |\mathbf{f}(\phi(t),t)-\mathbf{f}(\psi(t),t)| \, \mathrm{d} t \right| \\
  & \le L|t-t_0|\|\phi-\psi\| \\
  & \le Lh^*\|\phi-\psi\|,
\end{aligned}
\]
故
\[
\|A\phi-A\psi\| \le Lh^*\|\phi-\psi\|,
\]
因为 $Lh^*<1$，所以 $A$ 是压缩映射。

由压缩映射定理，
我们已经有初值问题在 $[t_0-h^*,t_0+h^*]$ 上的解 $\phi$。
当 $h^*<h$ 时，我们证明这个解可以延拓到 $[t_0-h,t_0+h]$ 上。
这时，$1/L<h$。不妨假设 $\phi$ 已经向右延拓到了
$[t_0,t_1]$ 上，$h^*\le t_1\le h$，
考虑初值问题
\[
\begin{cases}
  \dfrac{\mathrm{d} \mathbf{x}}{\mathrm{d} t}=\mathbf{f}(\mathbf{x},t),\\
  \mathbf{x}(t_1)=\phi(t_1)
\end{cases}
\]
的唯一解 $\phi^*$，这里 $\mathbf{f}$ 在
$\|t-t_1\|\le a'$，$\|\mathbf{x}-\phi(t_1)\|\le b'$
上连续并对同一个 $L$ 满足 Lipschitz 条件，
$a'=a-(t_1-t_0)$，
$b'=b-\|\phi(t_1)-\mathbf{x}_0\|$。
那么 $\phi^*$ 在 $t_1$ 的左侧与 $\phi$ 重合。我们观察它向右
可以延伸多远。令 $h'=\min\{a',b'/M\}$，

- 如果 $1/L<h'$，则 $\phi$ 可以沿 $\phi^*$ 延伸到
  $[t_0,t_1+1/L]$；

- 如果 $1/L>h'$，则 $\phi$ 或者可以延伸到
  $[t_0,t_1+a']=[t_0,t_0+a]$，或者可以延伸到
  $[t_0,t_0+t_1+b'/M]\supset [t_0,t_0+b/M]$，
  其中包含关系是因为
  \[
  \begin{aligned}
    b/M & = (b'+\|\phi(t_1)-\mathbf{x}_0\|)/M \\
    & = (b'+\|\phi(t_1)-\phi(t_0)\|)/M \\
    & \le (b'+M(t_1-t_0))/M \\
    & = b'/M+t_1-t_0.
  \end{aligned}
  \]

总之，$\phi$ 可以在至多
$a/(1/L)+1$ 步内向右延伸到 $[t_0,t_0+h]$ 上。向左延伸同理。我们于是得到
$[t_0-h,t_0+h]$ 上的唯一解。
:::

::: remark
- 如果 $\mathbf{f}$ 带一个和 $\mathbf{x},t$ 无关的参数 $\mathbf{p}$，并且
  $\mathbf{f}$ 连续依赖于 $\mathbf{p}$，则用同样的手法可以证明解也是连续依赖于
  $\mathbf{p}$ 的。又，如果考虑初值问题
  \[
  \begin{cases}
    \dfrac{\mathrm{d} \mathbf{x}}{\mathrm{d} t}=\mathbf{f}(\mathbf{x}+\mathbf{x}_0,t), \\
    \mathbf{x}(t_0)=0,
  \end{cases}
  \]
  则解 $\phi$ 连续依赖于 $\mathbf{x}_0$，
  从而 $\phi+\mathbf{x}_0$ 连续依赖于 $\mathbf{x}_0$，
  而 $\phi+\mathbf{x}_0$ 又恰是
  \[
  \begin{cases}
    \dfrac{\mathrm{d} \mathbf{x}}{\mathrm{d} t}=\mathbf{f}(\mathbf{x},t),\\
    \mathbf{x}(t_0)=\mathbf{x}_0
  \end{cases}
  \]
  的解，我们就证明了解是连续依赖于初值的。

- 根据压缩映射原理，我们选取常值函数 $\phi_0(t)=\mathbf{x}_0$ 作为初始解，
  再使用 Picard 映射反复迭代，则最终将收敛于真实解。这称为 **[[Picard 迭代法]]**。
:::

## 推广

```terms
常微分方程解的存在唯一性定理:
  en: existence and uniqueness theorem for solutions to ordinary differential equations
```
