---
title: 归纳递归
categories: [类型论]
notices:
  - name: 问题
    items:
      - “具现语义”“范畴语义”各节需要扩充，可参考 [Peter Dybjer 关于归纳定义的论文](https://www.cse.chalmers.se/~peterd/papers/inductive.html)。
navboxes: [类型论]
---

**归纳递归**是对[[归纳类型]]（或[[归纳族]]）的扩展，
允许构造子的类型一定程度地违反[[严格正性]]，
极大地提高了类型论的[[证明论强度]]。

也可以对[[高阶归纳类型]]进行类似的拓展，得到“高阶归纳递归”。

也可以对[[互归纳]]进行类似的拓展，得到“互归纳递归”。
再加上[[互递归]]对互归纳的特殊情况，可以得到“互归纳互递归”。
将这些功能全部放到一起，可以合成出“[[高阶互归纳互递归]]”的类型，
这是在[[依值类型论]]中定义自己的有力工具。

## 定义

::: definition
在[[语境]] $Γ$ 中，一组**归纳递归**的定义是二元组 $(D, f)$：

- $Γ ⊢ D:A → \mathcal U$ 是一个像[[归纳族]]的类型，

- $Γ ⊢ f:D → X$ 是一个**简单类型**的函数（$X$ 是任意类型，可以引用语境 $Γ$，但不能引用参数），
  在这个阶段姑且当作公理，

- $D$ 的构造子 $Γ ⊢ \operatorname{con}_i:\prod_{x:C_i} D(u_i)$ 的参数 $C_i$
  由满足[[严格正性]]的类型或者对 $f$ 的函数应用
  （这里超出了归纳类型的能力，但该类型仍然很像一个归纳类型）生成，

- 有了构造子后，推出 $D$ 对应的消去子，

- $f$ 使用 $D$ 的消去子定义出函数的行为。

:::

使用[[互递归]]消除的手法可以将归纳递归拓展到一个类型、多个函数的情况。
若需要考虑多个类型，则需要用到[[互归纳]]。

若要非常严格地形式化定义而不用到公理、切换定义的属性等“违规”操作，
则需要用到[[语汇理论]]。

## 语义

### 具现语义

### 范畴语义

## 例子

::: example
[[依值类型论]]的 Tarski [[宇宙 (类型论)|宇宙]]可以使用归纳递归在类型论内部定义。
此处给出一个仅含[[$\Pi$ 类型]]的定义：

- $U:\mathcal U$ 是宇宙——它的实例对应类型的**表示**，
- $\operatorname{el} : U → \mathcal U$ 对于每个类型的表示，给出对应的类型，
- $π : \prod_{A:U} \prod_{B:\operatorname{el}(A) → U} U$ 是 $\Pi$ 类型的表示，
  其中 $A$ 是定义域的类型的表示、$B$ 是值域的类型的表示，
  很明显，$B$ 是一个含有 $A$ 的实例的表达式，
- $\operatorname{el}(π(A, B))= \prod_{x:\operatorname{el}(A)} \operatorname{el}(B(x))$
  使用模式匹配的语法定义了 $\operatorname{el}$。

:::

该例子演示了归纳递归提高[[证明论强度]]的原因：它可以将类型论自己的宇宙表示出来。

## 参考资料

```bibliography
IndRec:
  type: article
  title: A General Formulation of Simultaneous Inductive-Recursive Definitions in Type Theory
  author: 'Dybjer, Peter'
  year: 2000
  journaltitle: Journal of Symbolic Logic
  volume: 65
  doi: 10.2307/2586554
```

```terms
归纳递归:
  en: induction-recursion
```
