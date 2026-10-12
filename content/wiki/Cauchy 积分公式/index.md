---
title: Cauchy 积分公式
categories: [复分析]
notices:
  - name: 区分
    pages:
      - Cauchy 积分定理
      - Cauchy 重积分公式
navboxes: [复分析]
---

**Cauchy 积分公式**说明，
[[全纯函数]]在某个点的值（及其各阶[[导数]]）
可由一个围绕该点的[[曲线积分]]决定，
而这个积分只涉及函数在该曲线上的取值。

## 陈述与证明

::: theorem [Cauchy 积分公式]
设

- $U \subset \mathbb{C}$ 是[[单连通空间|单连通]][[开集]]。

- $f \colon U \to \mathbb{C}$ 是[[全纯函数]]。

- $\gamma \colon S^1 \to U$ 是[[可求长曲线|可求长]] [[Jordan 曲线]]，以[[逆时针]]定向。

- $z_0 \in U$ 是 $\gamma$ [[Jordan 曲线定理|内部]]一点。

则

- $f (z_0)$ 由以下[[曲线积分]]给出：
  \[
  f (z_0) =
  \frac{1}{2 \pi \mathrm{i}}
  \oint_{\gamma} \frac{f (z)}{z - z_0} \, d z.
  \]

- 更一般地，$f$ 在 $z_0$ 处的 $n$ 阶[[导数]]由以下曲线积分给出：
  \[
  f^{(n)} (z_0) =
  \frac{n!}{2 \pi \mathrm{i}}
  \oint_{\gamma} \frac{f (z)}{(z - z_0)^{n+1}} \, d z.
  \]

:::

::: proof
先证明第一个公式。
函数 $f (z) / (z - z_0)$ 在 $U \setminus \{ z_0 \}$ 上全纯，
因此由 [[Cauchy 积分定理]]，
它沿 $\gamma$ 的积分等于沿圆周 $|z - z_0| = \varepsilon$ 的积分，
其中 $\varepsilon > 0$ 足够小。而这个积分等于
\[
\begin{aligned}
  & \phantom{=}
  \frac{1}{2 \pi \mathrm{i}}
  \oint_{|z - z_0| = \varepsilon} \frac{f (z)}{z - z_0} \, d z \\
  & = \frac{1}{2 \pi \mathrm{i}}
  \int_0^{2 \pi} \frac {
    f (z_0 + \varepsilon \mathrm{e}^{\mathrm{i} \theta})
  }{ \varepsilon \mathrm{e}^{\mathrm{i} \theta} } \,
  \varepsilon \mathrm{i} \mathrm{e}^{\mathrm{i} \theta} \, d \theta \\
  & = \frac{1}{2 \pi}
  \int_0^{2 \pi} f (z_0 + \varepsilon \mathrm{e}^{\mathrm{i} \theta}) \, d \theta,
\end{aligned}
\]
当 $\varepsilon \to 0$ 时，这个积分趋于 $f (z_0)$。
而这个积分并不依赖于 $\varepsilon$，因此它就等于 $f (z_0)$。

再证明第二个公式。取 $r > 0$ 使得闭球 $\bar{B}_r (z_0) \subset U$，
则对任何 $z \in B_r (z_0)$ 和 $\zeta \in \partial B_r (z_0)$，有
\[
\frac{1}{\zeta-z}
= \frac{1}{(\zeta-z_0) \bigl(1-\frac{z-z_0}{\zeta-z_0} \bigr)}
= \sum_{n=0}^\infty \frac{(z-z_0)^n}{(\zeta-z_0)^{n+1}},
\]
并且对固定的 $z$，这个级数关于 $\zeta \in \partial B_r (z_0)$ 一致收敛。
因此，
\[
\begin{aligned}
  f (z)
  & = \frac{1}{2 \pi \mathrm{i}}
  \oint_{|\zeta - z_0| = r} \frac{f (\zeta)}{\zeta - z} \, d \zeta \\
  & = \sum_{n = 0}^\infty
  \biggl[
    \frac{1}{2 \pi \mathrm{i}}
    \oint_{|\zeta - z_0| = r}
    \frac{f (\zeta)}{(\zeta - z_0)^{n+1}} \,
    d \zeta
  \biggr]
  (z - z_0)^n.
\end{aligned}
\]
这说明 $f$ 在 $B_r (z_0)$ 中能写成收敛的 [[Taylor 级数]]。
因此，它在 $z_0$ 处的各阶导数由 Taylor 级数的系数给出。
最后，由 [[Cauchy 积分定理]]，
曲线 $|z - z_0| = r$ 可以换成任何满足假设的曲线 $\gamma$。
:::

```terms
Cauchy 积分公式:
  en: Cauchy's integral formula
  de: cauchysche Integralformel :f
  fr: formule intégrale de Cauchy :f
```
