---
title: Kleisli 范畴
categories: [范畴代数]
navboxes: [范畴论]
---

<problems>
- “使用自由代数”“性质”各节需要扩充。
</problems>

在[[范畴论]]中，**Kleisli 范畴**对于[[单子]] $T$ 和[[范畴]] $\mathcal C$ 而言，
是指对象继承自 $\mathcal C$ 而态射形如 $\mathcal C(X, T(Y))$ 的范畴。
在这种情况下，态射复合需要进行一次单子的复合操作。

## 定义

### 使用自由代数

### 使用 Kleisli 态射

::: definition
对于 $\mathcal C$ 上的单子 $T$，Kleisli 范畴 $\mathcal C_T$ 包含如下数据：

- [[对象]]为 $\mathcal C$ 中的对象，

- [[态射]] $\mathcal C_T(X, Y)$ 为 $\mathcal C(X, T(Y))$，又叫 **Kleisli 态射**，

- 对于 $f∈\mathcal C_T(X, Y), g∈\mathcal C_T(Y, Z)$，
  它们的[[复合]]（又叫 **Kleisli 复合**）定义为
  \[
  \begin{aligned}
    &g \circ f \colon X \overset{f}{\longrightarrow} T (Y) \overset{T (g)}{\longrightarrow} T \big(T (Z)\big) \overset{\mu_Z}{\longrightarrow} T (Z)\\
    &g \circ f :=  μ_Z \circ T(g) \circ f
  \end{aligned}
  \]
  其中 $μ_Z$ 是 $T$ 的复合操作，

- [[恒同态射]]定义为 $T$ 的单位元 $η_X\colon X → T(X)$。

:::

## 性质

```terms
Kleisli 范畴:
  en: Kleisli category
```
