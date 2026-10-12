---
title: '$A_\mathrm{crys}$'
aliases: [Acrys]
categories: [$p$ 进几何, 代数数论]
notices:
  - name: 问题
    items:
      - “性质”一节最后的注记需要扩充：尚未具体写出如何用下降计算一般环的晶体上同调。
---

::: convention
在本文中，

- 所有环都指[[交换环]]。
- $p$ 为一固定[[素数]]。

:::

$A_\text{crys}$ 是 [[Jean-Marc Fontaine]]
引入的众多[[周期环]]中的一个，与[[晶体上同调]]联系紧密。

## 定义

::: definition
对 $p$-完备环 $R$，定义 $A_\text{crys}(R)$ 为
[[$A_{\inf}$|$A_{\inf}(R)$]] 沿 $\ker(\theta)$ 的[[除幂包]]的
$p$-完备化，其中 $\theta\colon A_{\inf}(R)\to R$
是自然映射。
也将 $A_\text{crys}(\mathcal{O}_{\mathbb{C}_p})$ 记作
$A_\text{crys}$，其中 $\mathbb{C}_p$ 为 [[$p$ 进复数]]，
$\mathcal{O}_{\mathbb{C}_p}$ 为其整数环。
:::

::: remark
由[[除幂包]]的定义，$\theta$ 延拓为自然映射
$A_\text{crys}(R)\to R$。将其记作
$\epsilon_\text{crys}$，其核记作 $I_\text{crys}(R)$，
则 $I_\text{crys}(R)$ 自带除幂结构。
:::

::: remark
这在 $R$ [[半完美胚]]时勉强比较合理，
而在 $R$ [[完美胚]]时是合理的对象。
:::

## 性质

::: proposition
$A_\text{crys}(R)=A_\text{crys}(R/p)$。
:::

::: theorem [与晶体上同调的联系]
设 $R$ 为特征 $p$ [[半完美环]]。则
$$
A_\text{crys}(R)=R\Gamma_\text{crys}(R/\mathbb{Z}_p),
$$
右边指的是 $R$ 在 $(\mathbb{Z}_p,(p))$ 上的[[晶体上同调]]。
事实上，$(A_\text{crys}(R),I_\text{crys}(R))$
是 $R$ 的[[除幂]]投射加厚中初始者。
:::

::: remark
有了以上定理，便可对一般的环 $R$，用下降来计算晶体上同调。
:::
