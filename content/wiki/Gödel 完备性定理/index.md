---
title: Gödel 完备性定理
aliases: [Godel 完备性定理]
categories: [模型论]
navboxes: [逻辑学]
---

<problems>
- “应用”一节需要扩充。
</problems>

**Gödel 完备性定理**是[[数理逻辑]]中的基本定理，
它说明了[[一阶语言]]的完备性，
即语义蕴涵与句法蕴涵等价。

通俗来说，
Gödel 完备性定理说明了“所有真的命题都是可证明的”。

## 定理

::: theorem [Gödel 完备性定理] {@Gödel-完备性定理}
设 $\mathcal{L}$ 是一个一阶语言，
$\Phi$ 是其中的某个公式集，
而 $\chi$ 是其中的某个公式。
那么我们有：
\[
\Phi\vdash\chi\iff\Phi\models\chi.
\]
:::

## 证明

我们采取 [[Leon Henkin|Henkin]] 的证明。

### 模型存在定理

首先只需要证明如下的模型存在定理：

::: theorem [模型存在定理] {@thm:模型存在定理}
如果语句集 $\Phi$（句法）相容，
即 $\Phi\not\vdash\bot$，
则 $\Phi$ 存在一个模型。
:::

模型存在定理可以推出 Gödel 完备性定理（@-Gödel-完备性定理）。
首先无妨假设 Gödel 完备性定理中的 $\Phi$ 只包含语句：
否则只需要把那些自由出现的变元视作一个新语言 $\mathcal{L}'$ 中的常数，
而 $\mathcal{L}'$ 也仅仅只在 $\mathcal{L}$ 上添加这些常数。
然后我们证明：

- $\Phi\vdash\chi\Rightarrow \Phi\models\chi$ 是明显的：
  验证[[推导规则]]每一步即可。

- 假设 $\Phi\models\chi$。
  则有 $\Phi\cup\{\neg\chi\}$ 没有模型。
  由模型存在定理（@-thm:模型存在定理），
  知 $\Phi\cup\{\neg\chi\}\vdash\bot$。
  利用排中律和否定规则便得 $\Phi\vdash\chi$。

下面我们证明模型存在定理（@-thm:模型存在定理）。

### Henkin 语言

首先我们需要扩充语言 $\mathcal{L}$ 和语句集 $\Phi$。

在实质性地构造之前，
我们先把“$=$”和其公理加进 $\mathcal{L}$。
它不影响证明。

::: definition {@Henkin语言}
- 我们按如下步骤定义 $\mathcal{L}^*$：

  1. 对于 $\mathcal{L}$ 中的语句 $\exists x \varphi$，
     我们定义常数 $c_{(x,\varphi)}$。
     定义
     \[
     \mathcal{L}^{(1)}=\mathcal{L}\sqcup\{c_{(x,\varphi)}\}_{\exists x\varphi\text{ 是语句}}.
     \]

  2. 定义 $\mathcal{L}^{(2)}=\left( \mathcal{L}^{(1)} \right)^{(1)}$。
     以此类推 $\mathcal{L}^{(n)}$。

  3. 定义
     \[
     \mathcal{L}^*=\bigcup_{n}\mathcal{L}^{(n)}.
     \]

  $\mathcal{L}^*$ 被称作 **Henkin 语言**。

- 对于 $\mathcal{L}^*$ 中的语句 $\exists x\varphi$，
  记
  \[
  \eta_{(x,\varphi)}:=
  \exists x\varphi\rightarrow \varphi\{x\mapsto c_{(x,\varphi)}\}.
  \]
  它被称为 **Henkin 公理**。

:::

::: lemma
$\Phi\cup \{\eta_{(x,\varphi)}\}_{\exists x\varphi\text{ 是语句}}$ 在 $\mathcal{L}^*$ 中相容。
:::

::: proof
首先 $\Phi$ 在 $\mathcal{L}^*$ 中相容。
若否，
则 $\Phi\vdash_{\mathcal{L}^*}\bot$。
从而存在一段[[演绎]]使得其叶的后件形如 $\phi\in\Phi$，
其根的后件是 $\bot$，
每个节点的后件是 $\mathcal{L}^*$ 中的公式。
但是 $\mathcal{L}^*$ 的公式只是 $\mathcal{L}$ 的公式添加一些常数，
所以我们可以把所有出现在节点后件公式中，
却不在 $\mathcal{L}$ 中的常数替换成不出现在这段演绎的变元。
由于叶和根的后件是 $\mathcal{L}$ 中的公式，
所以这个替换不影响叶和根；
但替换之后所有节点的后件都是 $\mathcal{L}$ 的公式，
故 $\Phi\vdash_{\mathcal{L}}\bot$，
与 $\Phi$ 的相容性矛盾。

其次证明如果 $\varPhi$ 是 $\mathcal{L}^*$ 中相容的语句集，
且其中的语句不含 $c_{(x,\varphi)}$，
那么 $\varPhi\cup\{\eta_{(x,\varphi)}\}$ 也是 $\mathcal{L}^*$ 中相容的公式集。
若否，
则 $\varPhi\vdash\neg\eta$。
通过推导规则便知 $\varPhi\vdash\exists x\varphi$
且 $\varPhi\vdash\neg \varphi\{x\mapsto c_{(x,\varphi)}\}$。
因为 $\varPhi$ 中的语句不含 $c_{(x,\varphi)}$，
利用与第一段同样的替换可得 $\varPhi\vdash\neg \varphi\{x\mapsto y\}$，
其中 $y$ 是不出现在 $\varPhi$ 中的变元。
全称概括告诉我们 $\varPhi\vdash\forall y\neg \varphi\{x\mapsto y\}$，
即 $\varPhi\vdash\neg\exists y\varphi\{x\mapsto y\}$。
所以 $\varPhi\vdash\neg\exists x\varphi$（由存在列举）。
结合 $\varPhi\vdash\exists x\varphi$ 知这与 $\varPhi$ 的相容性矛盾。

从而引理得证：
我们只需从 $\Phi$ 开始，
一步步添加 Henkin 公理，
每一步都利用上一段的论述即证。
:::

最后我们利用[[Lindenbaum 引理]]将上述语句集扩充成 $\mathcal{L}^*$ 上的一个完备理论，
记为 $\Phi^*$。

### Henkin 模型

::: definition
定义如下 $\mathcal{L}^*$ - 结构：

- $A=\mathcal{C}^*/\sim$，
  其中 $\mathcal{C}^*$ 是 $\mathcal{L}^*$ 中所有常数，
  $\sim$ 是等价关系 $c\sim d\iff \Phi^*\vdash c=d$。

- 对于 $n$ 元函数 $f$，
  $f[A]([c_1],\ldots,[c_n])=c_{(x,\exists x\, x=f(c_1,\ldots,c_n))}$。

- 对于 $n$ 元谓词 $p$，
  $([c_1],\ldots,[c_n])\in p[A]\iff \Phi^*\vdash p([c_1],\ldots,[c_n])$。

显然此定义是良定的，
且 Henkin 公理（@-Henkin语言）告诉我们常数在此结构下保持不变
（即 $c\sim c_{(x,\exists x\,x=c)}$）。
:::

::: lemma
对于任意 $\mathcal{L}^*$ 中的语句 $\varphi$，
有
\[
A\models \varphi\iff \Phi^*\vdash\varphi.
\]
:::

::: proof
对 $\varphi$ 递推。

- 语句 $\varphi$ 最基础的形式是 $p([c_1],\ldots,[c_n])$。
  此时 $A\models\varphi$ 等价于 $([c_1],\ldots,[c_n])\in p[A]$，
  也就是等价于 $\Phi^*\vdash\varphi$。

- 对形成语句的规则逐一验证（需要用到 $\Phi^*$ 的完备性），
  唯一不平凡的验证是对规则 $\varphi=\exists x\chi$ 的验证
  （$\forall$ 可以通过 $\neg\exists\neg$ 消去）。

  如果 $\Phi^*\vdash\varphi$，
  那么 Henkin 公理（@-Henkin语言）说明
  $\Phi^*\vdash\chi\{x\mapsto c_{(x,\chi)}\}$。
  从而便说明 $A$ 是语句 $\chi\{x\mapsto c_{(x,\chi)}\}$ 的模型。
  由 $A\models \exists x\chi$ 的定义可以直接得到
  $A\models\varphi$。

  另一方面，
  如果 $A\models\varphi$，
  则存在 $c$ 使得 $A\models\chi\{x\mapsto c\}$，
  从而有 $\Phi^*\vdash\chi\{x\mapsto c\}$。
  存在概括说明 $\Phi^*\vdash\varphi$。

从而证明了引理。
:::

### 完成证明

::: proof [@thm:模型存在定理 的证明]
取上述 $\Phi^*$ - 模型 $A$，
由于 $\Phi\subset\Phi^*$，
知 $\mathcal{L}^*$ - 结构 $A$ 也是 $\Phi$ 的模型。
但是 $\mathcal{L}^*$ 是 $\mathcal{L}$ 的扩充，
所以作为 $\mathcal{L}$ - 结构，
$A$ 也是 $\Phi$ 的模型。
:::

对于不可数语言，证明完备性定理需要使用 [[Zorn 引理]]。

## 应用

::: theorem [向下 Löwenheim–Skolem 定理]
若可数句子集$T$是一致的，$\mathcal{L}$为一个可数语言，则它有一个论域至多$\aleph_0$的模型。
:::

::: proof
在完备性定理的证明中，我们证明了存在极大一致且具有见证性的$\Delta$使得$T \subseteq \Delta$。
$\Delta$满足项模型的商模型$A/\sim$。显然它的论域$A/\sim$是至多可数的。
:::

Löwenheim–Skolem–Tarski 定理要比这要强：如果一个一阶逻辑语言$\mathcal{L}$的理论存在无穷大的模型，
那么这个模型存在一个基数至多为$|\mathcal{L}|+\aleph_0$的子模型；还可以要求，
在不违背模型基数要求的情况下，原模型中任意元素被包含进子模型内。这一性质 Henkin 模型不满足。
