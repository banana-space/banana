---
title: Bonnet–Myers 定理
categories: [Riemann 几何]
---

<problems>
- “陈述与证明”一节最后的命题缺少证明。
</problems>

**Bonnet–Myers 定理**是[[Riemann 几何]]中的定理，
它表明，对[[曲率]]有正下界的[[完备 Riemann 流形]]，其直径有相应的上界。

## 陈述与证明

::: theorem [Bonnet–Myers] {@BM}
设[[自然数]] $n > 1$，
$M$ 是[[连通空间|连通]]的 $n$ 维[[完备 Riemann 流形]]，其 [[Ricci 曲率]]有正下界
$\operatorname{Ric}\ge(n-1)\lambda>0$，
则其直径$\operatorname{diam}M\le\pi/\sqrt{\lambda}$。
:::

::: proof
对任意 $0 < l < \operatorname{diam}M$，有两点 $p,q\in M$ 使 $d(p,q)=l$。
由完备性，存在连接 $p,q$ 的[[测地线]]$c\colon[0,l]\to M$。
取一组沿 $c$[[平行移动|平行]]的正交标架场 $e_1(t),\dots,e_n(t)$，
其中 $e_1(t)=\dot{c}(t)$。再取光滑函数 $f\colon[0,l]\to\mathbb{R}$，使得
\[
f(0)=f(l)=0,\quad
\int_0^l f'^2=\Big(\frac{\pi}{l}\Big)^2\int_0^l f^2>0,
\]
如$f(t)=\sin\big(\frac{\pi t}{l}\big)$。
考虑[[变分场]] $V_i(t)=f(t)e_i(t)$，$i=2,\dots,n$，
相应的能量记为 $E_i(s)$。由[[第二变分公式]]，
\[
\begin{aligned}
  0\le\sum_{i=2}^n\frac{d^2E_i}{ds^2}\bigg|_{s=0}
  &=\sum_{i=2}^n\int_0^l(|\dot{V}_i|^2-\langle R(V_i,\dot{c})\dot{c},V_i\rangle)\,dt\\
  &=\sum_{i=2}^n\int_0^l(f'^2-f^2\langle R(e_i,\dot{c})\dot{c},e_i\rangle)\,dt\\
  &=\int_0^l(n-1)f'^2-f^2\sum_{i=2}^n\operatorname{sec}(e_i,\dot{c})\,dt\\
  &=\int_0^l(n-1)f'^2-f^2\operatorname{Ric}(\dot{c},\dot{c})\,dt\\
  &\le\big[(n-1)\Big(\frac{\pi}{l}\Big)^2-(n-1)\lambda\big]\int_0^l f^2\,dt,
\end{aligned}
\]
得出 $l\le\pi/\sqrt{\lambda}$。
:::

::: corollary
设 $M$ 是[[连通空间|连通]]的[[完备 Riemann 流形]]，其Ricci曲率有正下界，
则 $M$ 是[[紧空间|紧]]的，且其[[基本群]] $\pi_1(M)$ 有限。
:::

::: proof
由 @BM，完备流形 $M$ 有界，故紧。
考虑其[[万有覆叠]] $\pi \colon \widetilde{M} \to M$，
且 $\widetilde{M}$ 自然是 Riemann 流形，$\pi$ 是局部微分同胚。
$\widetilde{M}$ 同样是Ricci曲率有正下界的完备流形，亦是紧的，
所以 $\pi$ 是有限覆盖，则 $\pi_1(M)$ 有限。
:::

::: proposition
@BM 取得等号，当且仅当$M$等距同构于[[球面]] $S^n(1/\sqrt{\lambda})$。
:::

```terms
Bonnet–Myers 定理:
  en: Bonnet–Myers theorem
```
