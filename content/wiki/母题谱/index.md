---
title: 母题谱
categories: [母题同伦论]
notices:
  - name: 问题
    items:
      - “定义”一节缺少 $\mathsf{H}(S)_*[(\mathbb{P}^1,\infty)^{-1}]$ 的具体构造。
      - “性质”一节需要扩充。
---

::: convention
在本文中，

- [[范畴]]都指 [[$(\infty,1)$-范畴]]。
- [[概形]]全都[[拟紧概形|拟紧]][[拟分离概形|拟分离]]。
- 对[[景]] $(\mathcal{C},\tau)$，以
  $\mathsf{Sh}_\tau(\mathcal{C})$ 记其上[[生象]]值层的范畴。
- 对概形 $S$，以 $\mathsf{Sch}_S$ 记其上概形构成的范畴，以
  $\mathsf{Sm}_S$ 记其中[[光滑态射|光滑]]者构成的满子范畴。

:::

**母题谱**，或称 **$\mathbb{A}^1$-母题谱**，
由 [[Voevodsky]] 等人引入，是[[谱 (拓扑学)|谱]]的
$\mathbb{A}^1$-同伦论类比。

## 定义

固定概形 $S$。

::: definition
回忆 $S$ 上[[母题伦型]]的范畴
$$
\mathsf{H}(S)=\{F\in\mathsf{Sh}_{\mathrm{Nis}}(\mathsf{Sm}_S)\mid\forall X\in\mathsf{Sm}_S,\,
F(X)=F(X\times\mathbb{A}^1)\}.
$$
考虑其[[带点对象范畴]] $\mathsf{H}(S)_*$，
它关于[[缩积 (范畴论)|缩积]]构成[[对称幺半范畴]]。
考虑 **Tate 对象** $(\mathbb{P}^1,\infty)$，
即带基点 $\infty$ 的射影直线。$S$ 上**母题谱**范畴，
记作 $\mathsf{SH}(S)$，指在[[可表现范畴|可表现]]对称幺半范畴的范畴
$\mathsf{CAlg}(\mathsf{Pr}^{\mathrm{L}})$ 里[[俯范畴|俯]]于 $\mathsf{H}(S)_*$ 下，且
$(\mathbb{P}^1,\infty)$ 被打到[[可逆对象]]的范畴之中初始者；
简而言之
$$
\mathsf{SH}(S):=\mathsf{H}(S)_*[(\mathbb{P}^1,\infty)^{-1}].
$$
:::

::: remark [稳定性]
显然 $(\mathbb{P}^1,\infty)\cong(\mathbb{P}^1,1)$；由于
[[Nisnevich 拓扑]]细于 [[Zariski 景|Zariski 拓扑]]，
\[
\begin{tikzcd}
  (\mathbb{G}_m,1)\ar[r]\ar[d]&(\mathbb{A}^1_\infty,1)=*\ar[d]\\
  *=(\mathbb{A}^1_0,1)\ar[r]&(\mathbb{P}^1,1)
\end{tikzcd}
\]
是 $\mathsf{H}(S)_*$ 中的推出图表，这里 $\mathbb{A}^1_0$、$\mathbb{A}^1_\infty$
分别表示 $0,\infty\in\mathbb{P}^1$ 附近的 $\mathbb{A}^1$。
换言之，$(\mathbb{P}^1,1)=\Sigma(\mathbb{G}_m,1)=S^1\wedge(\mathbb{G}_m,1)$。
故逆掉 $(\mathbb{P}^1,1)$ 就逆掉了带点 $S^1$。
由此可知 $\mathsf{SH}(S)$ 是[[稳定 $(\infty,1)$-范畴]]。
:::

## 性质

```terms
母题谱:
  en: motivic spectrum
```
