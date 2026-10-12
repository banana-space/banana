---
title: Gödel 不完备性定理
aliases: [Godel 不完备性定理]
categories: [谓词逻辑]
notices:
  - name: 问题
    items:
      - '“Gödel 第一不完备性定理”一节中，对角线引理之后那条引理的证明称 $\operatorname{True}(x)$ 属于 $\Sigma^0_1$ 即“所有量词都是有界的”，这似乎不对：$\Sigma^0_1$ 公式可以含无界的存在量词，证明似乎需要改用 $\Sigma_1$ 完备性。'
      - “影响”一节需要扩充。
---

**Gödel 不完备性定理**包括
**Gödel 第一不完备性定理**与**Gödel 第二不完备性定理**。
前者指的是一阶[[Peano 算术]]系统，
只要是[[相容(一阶逻辑)|相容]]的，
就不是[[完备(一阶逻辑)|完备]]的，
并且甚至无法添加有限个[[语句]]来完备化 Peano 算术。
后者则指的是此系统不能证明本身的自洽性。

## Gödel 第一不完备性定理

### 陈述

::: theorem [Gödel 第一不完备性定理] {@firstincomplete}
任何包含 [[Peano 算术|$\mathsf{PA}_1$]]，
[[递归(理论)|递归]]的，
且相容的[[理论]] $T$ 都不是完备的。
:::

### 证明

下述的推理过程对所有满足 @firstincomplete 的条件的理论 $T$ 都类似，
所以我们只对 $T=\mathsf{PA}_1$ 证明。
取标准的[[Gödel 编号]] $\mathop{\#}$，
并且设 $\operatorname{True}(x)$ 定义 $\mathop{\#}\operatorname{Th}(\mathsf{PA}_1)$。

::: lemma [对角线引理] {@diagonal}
对于任意只含一个自由变元 $x$ 的公式 $\varphi(x)$，
存在语句 $\gamma$ 使得
\[
\mathsf{PA}_1\vdash\gamma\leftrightarrow \varphi(\mathop{\#}\gamma).
\]
:::

::: proof
首先，
如下的函数可以延拓到某个[[可定义集|可定义函数]]：
\[
\begin{matrix}
  d\colon&\mathop{\#} \operatorname{Free}(x)&\rightarrow& \mathbb{N}\\
  &\mathop{\#} \phi&\mapsto& \mathop{\#} \phi(\mathop{\#}\phi).
\end{matrix}
\]
这是因为它是[[递归可枚举集合|递归可枚举函数]]，
从而在[[算术阶层]]里属于 $\Sigma^0_1$（[[Post 定理]]），
故它可定义。
取 $\gamma$ 为 $\chi(\mathop{\#}\chi)$，
其中
\[
\chi(x)=\exists y(y=d(x)\wedge \varphi(y))
\]
且 $\mathop{\#}\chi$ 代表句法上的“$\mathop{\#}\chi$”，
即
\[
\mathop{\#}\chi:=S(\cdots S(0)).
\]
下验证 $\mathsf{PA}_1\vdash\gamma\leftrightarrow \varphi(\mathop{\#}\gamma)$。

- 一方面 $\mathsf{PA}_1\cup\{\gamma\}\vdash \varphi(\mathop{\#}\gamma)$。
  这是因为 $d$ 的假设说明
  $\mathsf{PA}_1\vdash(y=d(\mathop{\#}\chi)\rightarrow y=\mathop{\#}\gamma)$，
  并且 $\{\gamma\}\vdash\exists y(y=d(\mathop{\#}\chi)\wedge \varphi(y))$，
  由存在列举得
  \[
    \begin{array}{c}
    \underline{\mathsf{PA}_1\cup\{\gamma\}\vdash\exists y(y=d(\mathop{\#}\chi)\wedge \varphi(y))\qquad
    \mathsf{PA}_1\cup\{\gamma\}\cup\{y=d(\mathop{\#}\chi)\wedge \varphi(y)\}\vdash y=\mathop{\#}\gamma\wedge\varphi(y)}\\
    \mathsf{PA}_1\cup\{\gamma\}\vdash\varphi(\mathop{\#}\gamma).
  \end{array}
  \]

- 另一方面 $\mathsf{PA}_1\cup\{\varphi(\mathop{\#}\gamma)\}\vdash\gamma$。
  这是因为
  $\mathsf{PA}_1\cup\{\varphi(\mathop{\#}\gamma)\}\vdash\mathop{\#}\gamma=d(\mathop{\#}\chi)\wedge\varphi(\mathop{\#}\gamma)$，
  由存在概括得 $\mathsf{PA}_1\cup\{\varphi(\mathop{\#}\gamma)\}\vdash\gamma$。

综上两方面，
利用演绎定理得到 $\mathsf{PA}_1\vdash\gamma\leftrightarrow \varphi(\mathop{\#}\gamma)$。
:::

::: lemma {@cert}
对于任意语句 $\varphi$，
如果 $\mathsf{PA}_1\vdash\varphi$，
那么 $\mathsf{PA}_1\vdash\operatorname{True}(\mathop{\#}\varphi)$。
:::

::: proof
由 $\operatorname{True}(x)$ 的定义知
$\mathsf{PA}_1\vdash\varphi\iff\mathbb{N}\vDash\operatorname{True}(\mathop{\#}\varphi)$。
我们想证明不仅仅是对 $\mathbb{N}$，
而是对 $\mathsf{PA}_1$ 的任何模型都有上述关系。
但是注意 $\mathop{\#}\operatorname{Th}(\mathsf{PA}_1)$ 是[[递归可枚举集合]]，
故 $\operatorname{True}(x)$ 可被选作属于 $\Sigma^0_1$，
即所有量词都是有界的。
由于 $\operatorname{True}(\mathop{\#}\varphi)$ 所有量词都是有界的，
故它等价于某个不含量词者，
因为 $\mathsf{PA}_1$ 包含如下公理：
\[
\exists x\le n\rightarrow x=0\vee\cdots\vee x=n.
\]
但是不含量词者如果以 $\mathbb{N}$ 作为模型，
就必定以所有 $\mathsf{PA}_1$ 的模型作为模型，
再由[[Gödel 完备性定理]]得到 $\mathsf{PA}_1\vdash\operatorname{True}(\mathop{\#}\varphi)$。
:::

::: proof [Gödel 第一不完备性定理的证明] {@firstproof}
在对角线引理（@-diagonal）中取 $\varphi=\neg\operatorname{True}(x)$，
得
\[
\mathsf{PA}_1\vdash\gamma\leftrightarrow \neg\operatorname{True}(\mathop{\#}\gamma).
\]
从而：

- 如果 $\mathsf{PA}_1\vdash\gamma$，
  则 @cert 说明 $\mathsf{PA}_1\vdash\operatorname{True}(\mathop{\#}\gamma)$，
  矛盾。

- 如果 $\mathsf{PA}_1\vdash\neg\gamma$，
  则 $\mathsf{PA}_1\vdash\operatorname{True}(\mathop{\#}\gamma)$，
  故 $\mathbb{N}\vDash\operatorname{True}(\mathop{\#}\gamma)$，
  即 $\mathsf{PA}_1\vdash\gamma$，
  也矛盾。

也就是说，
$\mathsf{PA}_1$ 无法证明 $\gamma$ 也无法证明 $\neg\gamma$。
:::

### Tarski 不可定义定理 {@Tarski}

<see>[[Tarski 不可定义定理]]</see>

我们也可以仅仅利用语义来证明 @firstincomplete。
由于 $T$ 相容，
它有模型 $\mathcal{M}$。
下面的过程对所有这样的模型都类似，
所以我们只对 $\mathcal{M}=\mathbb{N}$ 为标准模型时证明。

利用 Tarski 不可定义定理，
得到 $\mathop{\#} \operatorname{Th}(\mathbb{N})$ 不是可定义集。
但是 $\mathop{\#} \operatorname{Th}(T)$ 是可定义集，
因为它是由一些递归的公理出发，
通过[[推导规则]]产生的 Gödel 数的集合。
故
\[
\operatorname{Th}(\mathbb{N})\neq
\operatorname{Th}(T).
\]
从而 $T$ 不是完备的。

## Gödel 第二不完备性定理

延续上一节的记号。

### 陈述

::: theorem [Gödel 第二不完备性定理] {@secondincomplete}
任何包含 $\mathsf{PA}_1$，
递归的，
且相容的理论 $T$ 都满足
\[
T\nvdash\neg\operatorname{True}(\mathop{\#}\bot).
\]
一般也把 $\neg\operatorname{True}(\mathop{\#}\bot)$ 记作 $\operatorname{Con}(T)$。
:::

::: remark
它是“$T$ 不能证明自身相容性”的句法翻译。
因为“能证明自身相容性”代表“能证明 $T\nvdash\bot$”，
即“能证明 $\mathbb{N}\nvDash\operatorname{True}(\mathop{\#}\bot)$”，
即“能证明 $\mathbb{N}\vDash\neg\operatorname{True}(\mathop{\#}\bot)$”，
即 $T\vdash\neg\operatorname{True}(\mathop{\#}\bot)$。
:::

### 证明

下述的推理过程对所有满足 @secondincomplete 的条件的理论 $T$ 都类似，
所以我们只对 $T=\mathsf{PA}_1$ 证明。
取标准的[[Gödel 编号]] $\mathop{\#}$，
并且设 $\operatorname{True}(x)$ 定义 $\mathop{\#}\operatorname{Th}(\mathsf{PA}_1)$。

::: lemma
Peano 算术 $\mathsf{PA}_1$ 满足如下条件，
被称作[[Bernays–Hilbert–Löb 条件]]：

1. 如果 $\mathsf{PA}_1\vdash\varphi$，
   那么 $\mathsf{PA}_1\vdash\operatorname{True}(\mathop{\#}\varphi)$。

2. $\mathsf{PA}_1\vdash\operatorname{True}(\mathop{\#}(\varphi\rightarrow\chi))
   \rightarrow(\operatorname{True}(\mathop{\#}\varphi)\rightarrow\operatorname{True}(\mathop{\#}\chi))$。

3. $\mathsf{PA}_1\vdash\operatorname{True}(\mathop{\#}\varphi)\rightarrow\operatorname{True}(\mathop{\#}\operatorname{True}(\mathop{\#}\varphi))$。

:::

::: proof
逐一检验：

1. 这就是 @cert。

2. 只需证明
   $\mathsf{PA}_1\cup\{\operatorname{True}(\mathop{\#}(\varphi\rightarrow\chi))\}
      \cup\{\operatorname{True}(\mathop{\#}\varphi)\}\vdash\operatorname{True}(\mathop{\#}\chi)$。
   考虑如下语义“$y$ 作为 Gödel 数所代表的一串序列表示一个证明序列，
   在 $\mathsf{PA}_1$ 中证明$x$ 作为 Gödel 数所代表的公式”，
   它是可以被一个 $\Sigma_1$ 中的公式 $\operatorname{Prov}(x,y)$ 定义的关系。
   考虑如下语句
   \[
   \operatorname{ModusPonens}(x,y):=\operatorname{Prov}(\mathop{\#} \varphi,x)\wedge\operatorname{Prov}(\mathop{\#}(\varphi\rightarrow\chi),y)
   \rightarrow\operatorname{Prov}(\mathop{\#}\chi,c(x,y)),
   \]
   其中 $c(x,y)$ 代表连接 $x$、$y$ 这两个序列（语义上即是把两个证明拼接成一个证明），
   是一个递归可枚举函数，
   故可以被 $\Sigma_1$ 中的公式定义。
   那么
   \[
   \mathsf{PA}_1\vdash\operatorname{ModusPonens}(x,y),
   \]
   因为 $\operatorname{ModusPonens}(x,y)$ 是属于 $\Sigma_1$ 的，
   由 @cert 的证明一样的道理，
   只需证明其在 $\mathbb{N}$ 中满足，
   但是这就是 $\operatorname{Prov}$ 的定义。

   从而进行如下演绎：

   - $\{\operatorname{True}(\mathop{\#}\varphi)\}\vdash
     \exists x\operatorname{Prov}(\mathop{\#}\varphi,x)$。

   - $\{\operatorname{True}(\mathop{\#}(\varphi\rightarrow\chi))\}\vdash
     \exists y\operatorname{Prov}(\mathop{\#}(\varphi\rightarrow\chi),y)$。

   - $\mathsf{PA}_1\cup\{\operatorname{True}(\mathop{\#}(\varphi\rightarrow\chi))\}
     \cup\{\operatorname{True}(\mathop{\#}\varphi)\}
     \vdash\exists z\operatorname{Prov}(\mathop{\#}\chi,z)$。

   - $\{\exists z\operatorname{Prov}(\mathop{\#}\chi,z)\}\vdash\operatorname{True}(\mathop{\#}\chi)$。

   这说明结论成立。

3. 事实上我们可以对所有属于 $\Sigma_1$ 中的公式 $\psi$ 证明：
   \[
   \mathsf{PA}_1\vdash\psi\rightarrow\operatorname{True}(\mathop{\#}\psi).
   \]
   由第一条得，
   对任意的 $\varphi$ 的一个证明，
   我们都可以构造出 $\operatorname{True}(\mathop{\#}\varphi)$ 的一个证明，
   在 Gödel 编号后，
   它也定义了一个递归可枚举函数。
   而
   \[
   \operatorname{Prov}(\mathop{\#}\varphi,x)\rightarrow\operatorname{Prov}(\operatorname{True}(\mathop{\#}\varphi),f(x))
   \]
   是 $\Sigma_1$ 中的公式，
   在 $\mathbb{N}$ 里验证便可以得到
   \[
   \mathsf{PA}_1\vdash
   \operatorname{Prov}(\mathop{\#}\varphi,x)\rightarrow\operatorname{Prov}(\operatorname{True}(\mathop{\#}\varphi),f(x)).
   \]
   从而
   $\mathsf{PA}_1\vdash\operatorname{True}(\mathop{\#}\varphi)\rightarrow\operatorname{True}(\mathop{\#}\operatorname{True}(\mathop{\#}\varphi))$。

验证完毕。
:::

::: proof [Gödel 第二不完备性定理的证明]
取与 @firstproof 中一样的 $\gamma$：
\[
\mathsf{PA}_1\vdash\gamma\leftrightarrow \neg\operatorname{True}(\mathop{\#}\gamma).
\]
进行如下推导：

- $\mathsf{PA}_1\vdash\gamma\rightarrow (\operatorname{True}(\mathop{\#}\gamma)\rightarrow\bot)$。

- $\mathsf{PA}_1\vdash\operatorname{True}(\mathop{\#}(\gamma\rightarrow (\operatorname{True}(\mathop{\#}\gamma)\rightarrow\bot)))$。

- $\mathsf{PA}_1\vdash\operatorname{True}(\mathop{\#}\gamma)\rightarrow (\operatorname{True}(\mathop{\#}\operatorname{True}(\mathop{\#}\gamma))\rightarrow\operatorname{True}(\mathop{\#}\bot))$。

- $\mathsf{PA}_1\vdash\operatorname{True}(\mathop{\#}\gamma)\rightarrow\operatorname{True}(\mathop{\#}\bot)$。

- $\mathsf{PA}_1\vdash\neg\operatorname{True}(\mathop{\#}\bot)\rightarrow\neg\operatorname{True}(\mathop{\#}\gamma)$。

- $\mathsf{PA}_1\vdash\neg\operatorname{True}(\mathop{\#}\bot)\rightarrow\gamma$。

如果 $\mathsf{PA}_1\vdash\neg\operatorname{True}(\mathop{\#}\bot)$，
那么 $\mathsf{PA}_1\vdash\gamma$，
我们已经在 @firstproof 中说明这违背 $T$ 的相容性。
:::

### Löb 定理

<see>[[Löb 定理]]</see>

Löb 定理把第二不完备性定理的证明更加形式化，
其陈述为：

::: theorem
如果一个形式系统（$T$, $\operatorname{Prov}$）满足**对角线引理**：

对于任意只含一个自由公式变元 $X$ 的公式 $F(X)$，
存在语句 $\gamma$ 使得
$T\vdash\gamma\leftrightarrow F(\operatorname{Prov}(\gamma))$，

且满足[[Bernays–Hilbert–Löb 条件]]：

1. 如果 $T\vdash\varphi$，
   那么 $T\vdash\operatorname{Prov}(\varphi)$。

2. $T\vdash\operatorname{Prov}((\varphi\rightarrow\chi))
   \rightarrow(\operatorname{Prov}(\varphi)\rightarrow\operatorname{Prov}(\chi))$。

3. $T\vdash\operatorname{Prov}(\varphi)\rightarrow\operatorname{Prov}(\operatorname{Prov}(\varphi))$。

那么对任意公式 $\psi$，
都有“如果可以证明‘$\psi$ 的可证明性可以推出 $\psi$’，
那么 $\psi$ 就是可以证明的”。
用形式语言说就是
\[
\begin{array}{c}
  \underline{T\vdash\operatorname{Prov}(\psi)\rightarrow\psi}\\
  T\vdash\psi
\end{array}.
\]
:::

它蕴涵第二不完备性定理（@-secondincomplete），
因为取 $\operatorname{Prov}=\operatorname{True}(\mathop{\#})$，
$\psi=\bot$ 即可。

## 影响

```terms
Gödel 不完备性定理:
  en: Gödel's incompleteness theorems
  fr: théorèmes d'incomplétude de Gödel
  de: gödelsche Unvollständigkeitssätze
```
