---
title: 主理想整环
aliases: [PID]
categories: [交换代数]
notices:
  - name: 问题
    items:
      - “性质”一节中的“维数为 $1$”与“主理想整环上的模”一节中的“同调维数是 $1$”似乎应为“至多为 $1$”（域也是主理想整环，此时两者都是 $0$）。
navboxes: [交换代数]
---

**主理想整环**（一些文献中简称 **PID**）是[[理想]]都是[[主理想]]的[[整环]]。

[[Euclid 整环]]一定是主理想整环（@ED-is-PID），
所以[[整数环]]和[[一元多项式环]]都是主理想整环。

主理想整环一定是[[唯一分解整环]]（@PID-is-UID）。

主理想整环可以视为一条[[光滑曲线]]的[[函数环]]（@PID-is-DD），
此时这条曲线的 [[Picard 群]]是 $0$。

## 定义

::: definition
设 $R$ 为[[整环]]，若 $R$ 的[[理想]]都是[[主理想]]，$R$ 就叫做**主理想整环**。
:::

## 性质

::: proposition {@ED-is-PID}
[[Euclid 整环]]是主理想整环。
:::

::: proposition {@PID-is-UID}
主理想整环是[[唯一分解整环]]。
:::

::: proposition {@PID-is-NT}
主理想整环是 [[Noether 环]]。
:::

::: proposition {@PID-is-DD}
主理想整环是 [[Dedekind 环]]，
即[[维数 (交换代数)|维数]]为 $1$ 的[[正则环]]。
:::

## 例子

- [[整数环]]
- [[一元多项式环]]
- [[Euclid 整环]]

## 主理想整环上的模

::: proposition {@sub-free}
主理想整环上的[[自由模]]的[[子模]]仍为自由模。
特别地，主理想整环上，[[投射模]]与[[自由模]]二者等价。
:::

::: proposition {@flt-eq-tor}
主理想整环上，[[平坦模]]与[[无挠模]]二者等价。
:::

::: proof
记此环为 $R$，由
$R$-模 $M$ 平坦等价于对 $R$ 的任意理想 $I$，
映射 $I \otimes M \to R \otimes M$ 为单射。
由于 $I$ 形如 $(a)$，此映射即为 $\cdot a \colon M \to M$。
此即为无挠条件。
:::

::: proposition {@inj-eq-div}
主理想整环上，[[内射模]]与[[可除模]]二者等价。
特别地，内射模的[[商模]]仍是内射模。
:::

::: proof
记此环为 $R$，由 [[Baer 判别法]]，对模 $M$，
$M$ 内射等价于对 $R$ 的任意理想 $I$，映射
$\operatorname{Hom}(R, M) \to \operatorname{Hom}(I, M)$ 是满射。
由于 $I = (a)$，上述映射即为 $\cdot a \colon M \to M$。
此即为可除条件。
:::

::: proposition
主理想整环上 [[Ext|$\operatorname{Ext}$]]
和 [[Tor|$\operatorname{Tor}$]] 函子的[[同调维数]]是 $1$。
:::

::: proof
对任意模 $M$，由 @sub-free，存在自由消解
\[
0 \to F^{-1} \to F^0 \to M \to 0.
\]
由 $\operatorname{Ext}$ 和 $\operatorname{Tor}$ 的定义即知结论。
:::

::: proposition
<see>[[主理想整环上有限生成模的结构定理]]</see>

- 循环分解：
  主理想整环 $R$ 上的有限生成模必同构于如下形式：
  \[
  R^{\oplus n} \oplus \bigoplus_{i=1}^m R / (a_i),
  \]
  其中 $a_i$ [[整除]] $a_{i-1}$，且 $a_i$ 均不可逆。
  此分解唯一。

- 准素分解：
  主理想整环 $R$ 上的有限生成模必同构于如下形式：
  \[
  R^{\oplus n} \oplus \bigoplus_{i=1}^m R / (a_i^{k_i}),
  \]
  其中 $a_i$ 为 $R$ 中素元。
  此分解中 $n$ 与集合 $\{ a_i^{k_i} \}$ 唯一。

此时上述 $n$ 称为模 $M$ 的**秩**。
:::

```terms
主理想整环:
  en: principal ideal domain
  de: Hauptidealring
  fr: anneau principal
  grc: περιοχή κυρίων ἰδεώδων
  la: anellus principalis
```
