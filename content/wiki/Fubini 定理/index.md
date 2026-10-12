---
title: Fubini 定理
notices:
  - name: 问题
    items:
      - 不符合本站的写作风格。
      - '定理中 $f_{x}$、$f^{y}$ 的定义似乎有误，似乎应为截口函数 $f_x(y) = f(x,y)$、$f^y(x) = f(x,y)$，而不是集合。'
---

**Fubini 定理**主要阐述的是[[乘积测度]]空间中[[二重积分]]与[[累次积分]]的关系。

## 定理

::: theorem
对于 [[$\sigma$-有限]]的[[测度空间]]
$(X,\mathscr{A},\mu)$、$(Y,\mathscr{B},\nu)$，
若 $f\colon X\times Y\to[-\infty,+\infty]$ 且 $f$ 是 $\mu\times\nu$-可积的，
那么
\[
\int_{X\times Y}f\,\mathrm{d}(\mu\times\nu)
=\int_{X}\bigg(\int_{Y}f_{x}\,\mathrm{d}\nu\bigg)\mathrm{d}\mu
=\int_{Y}\bigg(\int_{X}f^{y}\,\mathrm{d}\mu\bigg)\mathrm{d}\nu
\]
进一步地，对于测度 $\mu$、$\nu$、$\mu\times\nu$ 的完备化 $\overline{\mu}$、$\overline{\nu}$、
$\overline{\mu\times\nu}$，有
\[
\int f\,\mathrm{d}(\overline{\mu\times\nu})
=\iint f(x,y)\overline{\nu}(\mathrm{d}y)\overline{\mu}(\mathrm{d}x)
=\iint f(x,y)\overline{\mu}(\mathrm{d}x)\overline{\nu}(\mathrm{d}y)
\]

其中 $f_{x}=\{y\in Y\colon f(x)=y\}$，$f^{y}=\{x\in X\colon f(x)=y\}$。
:::
