---
title: 自然演绎系统
notices:
  - name: 问题
    items:
      - “符号注释”中关于 $\exists \mathrm{E}$ 的条件“$y$ 不在 $\varphi$ 和 $\mathcal{D}_2$ 的其他假设中自由出现”里的 $\varphi$ 似乎应为该规则的结论 $\psi$。
navboxes: [逻辑学]
---

**自然演绎系统**是一个基于假设的证明系统，用于模拟人们日常的推理模式。

## 定义

::: definition [自然演绎系统]
经典一阶逻辑的自然演绎系统是一个由以下推理规则组成的证明系统：
\[
\begin{gathered}
      \frac{\begin{matrix}
          \mathcal{D}_1 \\
          \phi
        \end{matrix} \quad \begin{matrix}
          \mathcal{D}_2 \\
          \psi
      \end{matrix}}{\phi \wedge \psi}
      \wedge\!\mathrm{I}
      \qquad
      \frac{\begin{matrix}
          \mathcal{D}_1 \\
          \phi \wedge \psi
      \end{matrix}}{\phi}\wedge\!\mathrm{E_R}
      \qquad
      \frac{\begin{matrix}
          \mathcal{D}_1 \\
          \phi \wedge \psi
      \end{matrix}}{\psi}\wedge\!\mathrm{E_L} \\\\
      \frac{\begin{matrix}
          [\phi]^1 \\
          \mathcal{D}_1 \\
          \psi
      \end{matrix}}{\phi \to \psi}\to\!\mathrm{I},1
      \qquad
      \frac{\begin{matrix}
          \mathcal{D}_1 \\
          \phi \to \psi
        \end{matrix} \quad \begin{matrix}
          \mathcal{D}_2 \\
          \phi
      \end{matrix}}{\psi}
      \to\!\mathrm{E} \\\\
      \frac{\begin{matrix}
          \mathcal{D}_1 \\
          \phi
      \end{matrix}}{\phi \vee \psi}\vee\!\mathrm{I_R}
      \qquad
      \frac{\begin{matrix}
          \mathcal{D}_1 \\
          \phi
      \end{matrix}}{\psi \vee \phi}\vee\!\mathrm{I_L}
      \qquad
      \frac{\begin{matrix}
          \\
          \mathcal{D}_1 \\
          \phi \vee \psi
        \end{matrix} \quad \begin{matrix}
          [\phi]^1 \\
          \mathcal{D}_2 \\
          \varphi
        \end{matrix} \quad \begin{matrix}
          [\psi]^2 \\
          \mathcal{D}_3 \\
          \varphi
      \end{matrix}}{\varphi}
      \vee\!\mathrm{E},1,2 \\\\
      \frac{\begin{matrix}
          \mathcal{D}_1 \\
          \phi[y/x]
      \end{matrix}}{\forall x \phi}\forall\mathrm{I}
      \qquad
      \frac{\begin{matrix}
          \mathcal{D}_1 \\
          \forall x \phi
      \end{matrix}}{\phi[t/x]}\forall\mathrm{E}
      \qquad
      \frac{\begin{matrix}
          \mathcal{D}_1 \\
          \phi[t/x]
      \end{matrix}}{\exists x \phi}\exists\mathrm{I}
      \qquad
      \frac{\begin{matrix}
          \\
          \mathcal{D}_1 \\
          \exists x \phi
        \end{matrix} \quad \begin{matrix}
          [\phi[y/x]]^1 \\
          \mathcal{D}_2 \\
          \psi
      \end{matrix}}{\psi}
      \exists\mathrm{E},1 \\\\
      \frac{\begin{matrix}
          \\
          \mathcal{D}_1 \\
          \bot
      \end{matrix}}{\phi}
      \bot_i
      \qquad
      \frac{\begin{matrix}
          [\neg \phi]^1 \\
          \mathcal{D}_1 \\
          \bot
      \end{matrix}}{\phi}
      \bot_c,1
    \end{gathered}
\]
其中$\bot_i$规则表示爆炸律，$\bot_c$规则表示反证法（排中律）。

由于不包含量词，
经典命题逻辑的自然演绎系统就是以上的推理规则删去
$\forall \mathrm{I}$、$\forall \mathrm{E}$、
$\exists \mathrm{I}$、$\exists \mathrm{E}$。

对于经典一阶逻辑和经典命题逻辑的自然演绎系统，
在保留其他推理规则的情况下，如果删去$\bot_c$规则，
剩下的推理规则将组成直觉主义逻辑下的自然演绎系统，
如果同时删除$\bot_c$规则和$\bot_i$规则，
剩下的推理规则则将组成最小逻辑下的自然演绎系统。
:::

::: remark [符号注释]
$\mathcal{D}_i$ 表示被省略的推理部分，
$\begin{matrix}
    \mathcal{D}_i \\
    \phi
  \end{matrix}$
共同表示了一个证明树，
其中$\phi$占据着证明树的根部，
意为该证明树的结论。
$[\phi]^1$的方括号表示该公式是一个假设，
上标数字是该假设的编号，
推理分数线右方的数字表示相应编号的假设被解除。
下标$\mathrm{L}$和$\mathrm{R}$分别表示规则作用位置的左和右。
$\mathrm{I}$和$\mathrm{E}$分别表示引入和消去。

表达式$\phi[t/x]$表示用项$t$替换变元$x$，
如果$t$是一个变元$y$，则直接写作$\phi[y/x]$，
需要注意的是，这里$x$并不一定需要出现在$\phi$中，
如果不出现，替换后的公式仍是原式，
而在以上的$\forall \mathrm{I}$、$\forall \mathrm{E}$、
$\exists \mathrm{I}$、$\exists \mathrm{E}$规则中，
还有一些额外的要求：

- $\forall \mathrm{I}$、$\forall \mathrm{E}$、
  $\exists \mathrm{I}$、$\exists \mathrm{E}$：
  如果$x$出现在$\phi$中，那么$x$是$\phi$的一个自由变量。

- $\forall \mathrm{I}$：
  $y \notin \operatorname{FV}(\phi) \setminus \{x\}$
  且$y$不在$\mathcal{D}_1$的任何假设中自由出现。

- $\exists \mathrm{E}$：
  $y \notin \operatorname{FV}(\phi) \setminus \{x\}$
  且$y$不在$\varphi$和$\mathcal{D}_2$的其他假设中自由出现。

- $\forall \mathrm{E}$、$\exists \mathrm{I}$：
  $t$对于$x$自由，亦即替换后没有变量捕获的问题。

:::
