---
title: KP与可计算性
notices:
  - name: 问题
    items:
      - 本页面需要扩充。
---

本节研究一个并非来源于内模型，而是来源于可计算性理论的弱集合论，它由Kripke–Platek命名。

::: definition
$KP$由$GJ_0$加上集合基础公理、$\Pi_1$基础公理模式和$\Delta_0$局部收集公理模式得到。
$KPI$由$KP$加上无穷公理得到，$KP_0$由$KP$去掉$\Pi_1$基础公理模式得到。
:::

::: remark
局部收集公理模式和收集公理模式只要有对集操作就是等价的。
:::

显然，$KP\supseteq \Pi_1-DB$，因此$T_{Ar}$做得的$KP$也做得；$KPI\supseteq \Pi_1-GJI$，
因此$T_{Sat}$做得的$KPI$也做得。
