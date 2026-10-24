---
title: 自由场论
aliases: [自由量子场论]
categories: [自由场论]
navboxes: [自由场论]
---

在[[量子场论]]中，**自由场论**研究没有相互作用的量子场。
它把场的激发看作粒子，多粒子的能量由各个粒子的能量相加得到。
经典自由场通常由二次作用量和线性运动方程描述；
量子化后，各个独立模式成为可产生或湮灭的粒子激发。

本文以 [[Minkowski 空间]]上自由场的[[真空]]表述为主。
其基本结构包括[[单粒子空间]]、[[Fock 空间]]及其上的[[自由场|场算子]]，
这些结构描述了粒子的质量、自旋或螺旋度，与场的时空变换方式，
也能计算场的传播和关联函数。
[[量子谐振子]]提供最简单的单模式原型，也可视为 $0+1$ 维标量场，
一般情况下的模型则包括标量场、旋量场、向量场等
[@Tong, 第 2、4、5、6 章]。

自由场论也有其它表述方式.
自由场可在[[热平衡态]]下研究；在[[弯曲时空]]中，真空与粒子解释也可能依赖额外选择。
[[代数量子场论|代数表述]]先给出场代数，再由量子态确定表示
[@KhavkineMoretti2015, 第 1、2 节]；
[[Euclid 量子场论|Euclid 表述]]则从 Euclid 关联函数出发，
在满足[[反射正性]]等条件时重构相应的量子理论 [@JaffeRitter2007]。

自由场论既是可以明确求解的一类量子理论，也是[[微扰量子场论]]的出发点。
“自由”描述的是动力学；自由场中的一般态仍可具有量子关联，
并不一定由二点函数完全决定。

## 基本结构

### 态空间

在 Minkowski 空间中，粒子的时空对称性由 [[Poincaré 群]]的正能量表示描述,
作为[[单粒子空间]]。
它的不可约分量给出不同类型的粒子，粒子的内部自由度由相应的[[小群]]表示确定。
把单粒子空间的各次对称积或外积作直和，便得到 Bose 或 Fermi
[[Fock 空间]]作为整个量子态空间。

在 Fock 空间中,
[[产生、湮灭算子]]连接相邻的粒子数扇区。
[[二次量子化]]则把单粒子的对称性和动力学扩展到多粒子态空间
[@Weinberg1995, 第 2、4 章]。

### 场与动力学

[[自由场]]算子是产生、湮灭算子的线性组合，
它的[[模展开（量子场论）|模展开]]将它写成各个动量模式的叠加。
它满足与相应经典场相同的协变方式，且相应经典场的类型与粒子的对应的表示相关.

自由多粒子 Hamilton 算子由单粒子能量的二次量子化给出。
它保持粒子数，并使各个粒子独立演化。
具体的运动方程及场算子由各模型确定
[@Weinberg1995, 第 4、5 章]。

### 量子态与关联函数

Fock 真空是最常用的参考态。
此时场的高阶关联函数可由二点函数按 [[Wick 定理]]计算，
[[正规序（量子场论）|正规序]]则用于整理场算子的乘积。
[[准自由态]]概括了这种由二点函数控制高阶关联的结构，
但自由场中的一般态不必是准自由态
[@Tong, 第 2.3、2.7、3.3 节]。

## 典型模型

自由场的具体模型主要按场的类型、粒子质量与内部自由度区分。
以下模型展示了上述结构的几种主要情形；
涉及自旋和螺旋度时，采用 $3 + 1$ 维 Minkowski 空间。

| 模型 | 在自由场论中的作用 |
| --- | --- |
| [[量子谐振子]] | 单个玻色模式的原型，展示粒子数基和升降算子 |
| [[Klein–Gordon 场]] | 自旋为零的标量场，包含实场与带荷复场 |
| [[Dirac 场]] | 描述自旋 $1/2$ 粒子及其反粒子的旋量场 |
| [[Weyl 场]] | 描述无质量手性旋量的自由场 |
| [[Majorana 场]] | 满足电荷共轭实条件的旋量场，粒子与反粒子相同 |
| [[Proca 场]] | 有质量、自旋为 $1$ 的向量场 |
| [[Maxwell 场]] | 描述无质量光子的自由规范场，场强是反对称张量 |

这些模型共用粒子态、Fock 构造和模展开等语言，
但运动方程、统计类型、极化及约束各有不同。
特别是，规范势含有冗余，描述其物理态时还须处理[[规范对称性]]
[@Tong, 第 4、5、6 章]。

## 与相互作用理论的联系

在微扰论中，通常从自由理论出发，把相互作用作为额外项加入 Hamilton 算子或作用量。
自由场的传播子、正规序和 Wick 定理为 [[Feynman 图]]计算提供基本工具。
这并不意味着相互作用场始终具有自由场的一次线性模展开
[@Tong, 第 3 章]。

在[[散射理论]]中，自由多粒子态还用于描述相互作用粒子的渐近入射态和出射态。
自由理论因此既可作为独立模型研究，也可作为组织更一般场论的基础。

## 参考文献*

```bibliography
Tong:
  type: preprint
  author: David Tong
  title: Quantum Field Theory
  url: 'https://davidtong.org/teaching/quantum-field-theory/qfthtml/qfthtml.html'
  note: 第 2 章介绍自由标量场，第 3 章介绍相互作用与微扰论，第 4、5、6 章介绍旋量场和电磁场。
Weinberg1995:
  type: book
  author: Steven Weinberg
  title: The Quantum Theory of Fields
  volume: 1
  year: 1995
  publisher: Cambridge University Press
  doi: '10.1017/CBO9781139644167'
  note: 第 2、4、5 章分别讨论单粒子表示、多粒子态和量子场的构造。
KhavkineMoretti2015:
  type: incollection
  author: [Igor Khavkine, Valter Moretti]
  title: 'Algebraic QFT in Curved Spacetime and quasifree Hadamard states: an introduction'
  booktitle: Advances in Algebraic Quantum Field Theory
  editor: [Romeo Brunetti, Claudio Dappiaggi, Klaus Fredenhagen, Jakob Yngvason]
  year: 2015
  publisher: Springer
  pages: 191--251
  doi: '10.1007/978-3-319-21353-8_5'
  arxiv: '1412.5945'
JaffeRitter2007:
  type: article
  author: [Arthur Jaffe, Gordon Ritter]
  title: 'Quantum Field Theory on Curved Backgrounds. I. The Euclidean Functional Integral'
  journaltitle: Communications in Mathematical Physics
  volume: 270
  pages: 545--572
  year: 2007
  doi: '10.1007/s00220-006-0166-2'
  arxiv: 'hep-th/0609003'
```

```terms
自由场论:
  en: free field theory
```
