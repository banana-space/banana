---
title: Schur 引理
categories: [模论]
---

**Schur 引理**指的是，
[[单模]]间的[[同态]]要么是同构，要么是 $0$。

## 陈述与证明

::: theorem [Schur]
$R$ 是[[环]]，$M,N$ 是单左 $R$-模，$f\colon M\to N$
是同态。则 $f$ 要么是同构，要么是 $0$。
:::

::: proof
$\ker(f)$ 是 $M$ 的子模，$\operatorname{im}(f)$ 是 $N$
的子模。由于 $M,N$ 单，它们要么是 $0$，要么是全部。
只要 $\ker(f)=M$ 或 $\operatorname{im}(f)=0$，就有 $f=0$。
如果 $\ker(f)=0$ 且 $\operatorname{im}(f)=N$，$f$ 就是同构。
:::

## 推论

::: corollary
单模的[[自同态环]]是[[除环]]。
:::

::: proof
同构无非是可逆的同态，所以 Schur 引理说明此自同态环的元素要么可逆要么是 $0$，
故它是除环。
:::

::: remark
一个模自同态环是除环，它没道理是单模。例如 $\operatorname{End}_\mathbb{Z}(\mathbb{Q})=\mathbb{Q}$，
但 $\mathbb{Q}$ 作为 $\mathbb{Z}$-模当然不单。
:::

```terms
Schur 引理:
  en: Schur's lemma
  de: Lemma von Schur
  fr: lemme de Schur
```
