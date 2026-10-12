---
title: 异质相等
aliases: [异质相等类型]
categories: [类型论]
navboxes: [类型论]
---

在[[依值类型论]]中，**异质相等类型**（又叫**John Major 相等类型**）
指一种[[相等类型]]的变种。它[[形成规则]]如下：

\[
\cfrac{Γ⊢ a:A \quad Γ⊢ b :B}
{Γ⊢ \operatorname{JM}_{A, B}(a, b)}
\]

作为对比，一般的相等类型形成规则要求 $b:A$ 而不是 $b:B$。

为了与异质相等类型区分，一般的相等类型也称为**同质**相等类型。
它的[[构造规则]]也是用[[自反性]]定义，即 \(\mathrm{refl}_{A, a} : \operatorname{JM}_{A,A}(a,a)\)。

将该类型以英国政治家 John Major 命名出自 [[Conor McBride]] 的博士论文[@McBride, § 5.1.3]，
原因是 John Major 想要跨越阶级的平等，精神上类似在类型论中讨论不同类型之间的相等，
而 John Major 并没有实现这个目标——不同阶级之间难以有平等，
精神上类似异质相等类型的构造子依然仅允许相同类型的值相等。

## 消去规则

异质相等类型可以看作是一种[[归纳族]]：

- [[形成规则]]
  \(\operatorname{JM}:\left( \sum_{A:\mathcal U}\sum_{B:\mathcal U} A × B \right) → \mathcal U\)
- [[构造规则]]
  \(\operatorname{refl}:\prod_{A:\mathcal U} \prod_{x:A} \operatorname{JM}(A, A, x, x)\)

但它可以选用两种不同的[[消去规则]]。一种与 [[J 公理]] 类似：

\[
\begin{aligned}
  & {\color{gray} Γ⊢ A : \mathcal U \quad Γ⊢ x : A} \\
  & Γ⊢ P : \Pi_{x: A}\Pi_{y:B} \operatorname{JM}_{A, B}(x, y) \to \mathcal U \\
  & Γ⊢ p : \Pi_{x : A} P(x, x, \mathrm{refl}_x) \\
  & Γ⊢ q : \operatorname{JM}_{A, B}(x, y) \\
  & \overline{Γ⊢ J(P, p, q) : P(x, y, q)}
\end{aligned}
\]

这个规则蕴涵 [[K 公理]]，
因为构造规则的类型 $\operatorname{JM}_{A,A}(a,a)$ 和形成规则的类型中有两处不同。
若将它 [[Ford 化]]可知它其实是两个连着的相等：

\[
\begin{aligned}
  \operatorname{JM}&:\prod_{A,B:\mathcal U} \prod_{a:A} \prod_{b:B} \mathcal U \\
  \operatorname{refl}&:\prod_{A,B:\mathcal U} \prod_{a:A} \prod_{b:B}
    \prod_{p:\operatorname{Id}(A, B)} \operatorname{Id}_B(\operatorname{转换}_p(a), b) \to \operatorname{JM}(A, B, a, b)
\end{aligned}
\]

换言之异质相等 \(\operatorname{JM}_{A,B}(a,b)\) 应该与
同质相等\(\operatorname{Id}_{\Sigma_{A:\mathcal U} A}(\braket{A,a}, \braket{B,b})\)等价，
而如果使用和同质相等类似的消去规则就相当于忽视了第一个等价，
也就是在断言任何类型之间的相等都是平凡的。

我们也可以重新定义消去规则使得它需要额外提供类型 $A, B$ 之间的相等，
这样做的话异质相等类型就不再有任何特殊性了。

## 宇宙层级

异质相等类型 [[Ford 化]]后用到了[[宇宙 (类型论)|宇宙]]，
因此在没有宇宙的类型论中只能定义蕴含 K 公理版本的消去规则。

在有宇宙层级的类型论中，若使用不蕴涵 K 公理版本的消去规则，
那么异质相等类型会比同质相等类型的层级高 $1$。
假设 $A:\mathcal{U}_i$，因此 $\Sigma_{A:\mathcal{U}_i} A : \mathcal U_{i+1}$。
回顾同质相等类型
\[
\cfrac{B : \mathcal U_j}{\operatorname{Id}_B(a, b) : \mathcal{U}_j}
\]
因此 $\operatorname{Id}_{\Sigma_{A:\mathcal U_i} A}(\dots) : \mathcal{U}_{i+1}$，
因此 $\operatorname{JM}_{A}(\dots) : \mathcal{U}_{i+1}$，
而 $\operatorname{Id}_{A}(\dots) : \mathcal{U}_{i}$。

## 参考文献

```bibliography
McBride:
  type: thesis
  title: Dependently Typed Functional Programs and their Proofs
  author: Conor McBride
  degree: phd
  institution: University of Edinburgh
  url: https://www.lfcs.inf.ed.ac.uk/reports/00/ECS-LFCS-00-419/ECS-LFCS-00-419.pdf
  year: 1999
```

```terms
异质相等:
  en: heterogeneous equality
```
