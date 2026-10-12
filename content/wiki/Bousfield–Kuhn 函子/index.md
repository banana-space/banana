---
title: Bousfield–Kuhn 函子
categories: [色谱同伦论]
notices:
  - name: 问题
    items:
      - “构造”一节中 $\Phi_V(X)$ 仅依赖于 $\Sigma^\infty V$ 的论证需要展开。
      - “应用”一节需要扩充。
---

**Bousfield–Kuhn 函子**是[[不稳定色谱同伦论]]中的基本构造，
说明了[[谱 (拓扑学)|谱]]的 [[$T(n)$-局部化]]只依赖于底空间。

## 构造

设 $n$ 是正整数。设 $V$ 是 $\ge n$ 型的有限带基点生象，
带 [[$v_n$ 自映射]] $v\colon\Sigma^tV\to V$，其中
$t$ 是正整数。则对带基点生象 $X$，图表
$$
\operatorname{Hom}_*(V,X)\to\operatorname{Hom}_*(\Sigma^tV,X)\to
\operatorname{Hom}_*(\Sigma^{2t}V,X)\to\cdots
$$
的余极限自然成为 $t$-周期谱的底空间，记该谱为
$\Phi_V(X)$。不难发现它仅依赖于
$\Sigma^\infty V$，实际上是个函子
$$
\Phi_-\colon(\mathsf{Sp}_{\ge n}^\mathrm{fin})^\mathrm{op}\to
\mathsf{Fun}(\mathsf{Ani}_*,\mathsf{Sp}).
$$

::: theorem
存在唯一函子 $\Phi\colon\mathsf{Ani}_*\to\mathsf{Sp}$ 满足：

1. 它落在 [[$T(n)$-局部]]谱中。

2. 有对 $E\in\mathsf{Sp}_{\ge n}^\mathrm{fin}$
   函子性的同构 $\Phi_E(-)=\operatorname{Hom}(E,\Phi(-))$，
   右边是 $\mathsf{Sp}$ 的内 $\operatorname{Hom}$ 函子。

此外还有 $\mathsf{Sp}$ 的自函子的自然同构
$\Phi\circ\Omega^\infty=L_{T(n)}$。这个 $\Phi$
就是 **Bousfield–Kuhn 函子**。
:::

## 应用

```terms
Bousfield–Kuhn 函子:
  en: Bousfield–Kuhn functor
```
