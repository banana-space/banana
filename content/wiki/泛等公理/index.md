---
title: 泛等公理
categories: [同伦类型论]
navboxes: [类型论]
---

<problems>
- “结构等价原则”一节需要扩充。
</problems>

**泛等公理**是[[同伦类型论]]的核心要素之一，是一个类型论公理，
可以表述如下：
[[宇宙 (类型论)|宇宙]]中的[[相等类型]]与相应类型间的所有[[等价 (类型论)|等价]]构成的类型相等价。
也就是说，对类型 $A, B$，有
\[
\operatorname{Id} (A,B) ≃ (A≃ B) ,
\]
其中 $\operatorname{Id}$ 是宇宙 $\mathcal{U}$ 中的相等类型，
而等式右边仅取决于类型 $A, B$ 而不依赖它们在 $\mathcal{U}$ 中的名字。
换言之，这一公理要求宇宙具有好的性质，
以使得其中的相等类型是我们所希望的。

实际上，上述公式不是最好的定义，
因为类型论中的[[J 公理]]本身能给出一个操作：

\[
\operatorname{coe}_≃ : \operatorname{Id}(A,B)\to (A ≃ B) .
\]

泛等公理更常见的描述是“$\operatorname{coe}_≃$ 是一个等价”。

## 定义与等价表述

::: definition
任何类型 $A$ 到自身都有恒同等价。由 J 原理可给出映射
\[
\operatorname{coe}_≃ : \operatorname{Id}(A,B)\to (A ≃ B) .
\]
称某宇宙 $\mathcal{U}$ 满足**泛等公理**，
当且仅当该映射本身是等价。
:::

泛等公理的直接推论是可以将类型等价转化为
其在 $\mathcal{U}$ 中名字之间道路，且这个转换本身是等价。
\[
\begin{aligned}
  \operatorname{ua}&:(A≃ B) → \operatorname{Id}(A,B) \\
  \operatorname{ua}_β&:\prod_{e:A≃ B}
    \operatorname{Id}(\operatorname{coe}_≃(\operatorname{ua} e), e)\\
  \operatorname{ua}_η&:\prod_{p:\operatorname{Id}(A, B)}
     \operatorname{Id}(\operatorname{ua}(\operatorname{coe}_≃ p), p)
\end{aligned}
\]

直观上说，若将 $\operatorname{ua}$ 操作类比为一种构造规则的话，
那么 $\operatorname{coe}_≃:\operatorname{Id}(A,B) \to A≃ B$ 就是它的消去规则，
然后 $\operatorname{ua}_β$ 就是它的计算规则、$\operatorname{ua}_η$ 是唯一性规则。

事实上，以上三个组件在逻辑上等价于泛等公理，
即这三者可以推导出泛等公理成立，而由泛等公理也可以构造出它们。
不过由于这三个组件不构成[[命题宇宙|命题]]，一般不直接将其作为公理。

另一个等价表述是开头提到的
\[
(A = B) \simeq (A \simeq B).
\]
此类型也与泛等公理有逻辑等价。
这是因为一旦类型 $R : X \to X \to \mathcal{U}$ 满足 \(\sum_{a : X} R(a, b)\) 可缩，
就必然有 \((a = b) \to R(a, b)\) 是等价。
这里代入 \(X\) 为宇宙类型，\(R(A, B)\) 为 \(A \simeq B\) 即可。

## 推论

泛等公理有很多非常深刻的推论。

### 函数外延性

<see>[[函数外延性]]</see>

::: definition {@def:funExt}
[[函数外延性]]指如下命题：对于函数 $f, g:A\to B$，
\[
\mathrm{funExt}:\left(\prod_{a:A} \operatorname{Id}_{B}(f(a), g(a))\right)
  \to \operatorname{Id}_{A\to B}(f,g)
\]
:::

将 $\operatorname{Id}$ 写成等号的话 @def:funExt 会更直观一些：
\[
\mathrm{funExt}:\prod_{a:A} (f(a)= g(a))
  \to f=g
\]

::: lemma {@lem:funExt}
泛等公理蕴涵函数的外延性。
换言之，同伦类型论中函数的外延性总是成立。
:::

首先，在[[函数类型]]中已经指出 @def:funExt 并不总是成立。
但它的反向函数却总是成立：如果 $f=g$，那么一定有 $\Pi_{a:A} (f(a)= g(a))$，
这是因为类型论中，相等的表达式可以互相代换，因此 $f=g$ 的话可知
\[
\left( \Pi_{a:A} f(a)= g(a) \right)
=
\left( \Pi_{a:A} f(a)= f(a) \right)
\]
而后者显然成立。

另外，[[相等类型]]有一个重要的性质：
\[
A ≃ \Sigma_{a:A}\Sigma_{b:A} a=b
\]
这是因为 $\Sigma_{a:A}\Sigma_{b:A} a=b$ 这个类型中 $\Sigma_{b:A} a=b$ 这个部分没有任何信息，
它只是把 $a$ 的存在重复了一遍。
根据这两件事，可以证明 @lem:funExt。

::: proof
根据相等类型的性质和泛等公理，可知 $B=\Sigma_{a:B}\Sigma_{b:B} a=b$，
因此
\[
(\Sigma_{f:A\to B}\Sigma_{g:A\to B} f=g)=
(A\to B)=
(A\to \Sigma_{a:B}\Sigma_{b:B} a=b)
\]
至此证明已经基本结束，只需一些比较繁琐的手法将 $\Pi_{a:A} f(x)= g(x)$
转换成 $\Pi_{a:A} \Sigma_{a:B}\Sigma_{b:B} a=b$ 的特例后，
用上面的连等即可得到 $f=g$。
:::

### 命题的外延性

<see>[[命题宇宙]]</see>

::: definition
如下命题叫做**命题外延性**：对于[[命题宇宙|命题]] $A, B$，有
\[
(A \to B) \times (B \to A) \to \operatorname{Id}(A, B)
\]
:::

::: lemma
泛等公理蕴涵命题的外延性。换言之，同伦类型论中命题的外延性总是成立。
:::

::: proof
命题的外延性假设如下函数存在：
\[
\begin{aligned}
  f:A \to B \\
  g:B \to A
\end{aligned}
\]
要通过泛等公理证明 $\operatorname{Id}(A, B)$ 的话只需证明 $A≃ B$ 即可。
根据命题本身的性质可知对于任意 $a:A$，有 $g(f(a)):A$ 和 $a$ 命题等价、反之亦然。
:::

### 结构等价原则

### K 公理

<see>[[K 公理]]</see>

::: lemma
令 $2$ 为拥有两个互不相等实例的类型，
泛等公理蕴涵如下等价关系：
\[
\operatorname{Id}(\operatorname{Id}(2, 2), 2)
\]
:::

::: proof
类型 $\operatorname{Id}(2, 2)$ 拥有两个实例，一个由泛等公理加上“交换 $2$ 的两个元素”这一等价给出，
另一个是[[恒同函数]]。
:::

::: theorem
泛等公理提供了 [[K 公理]]的反例。
:::

::: proof
根据 K 公理，有 $\operatorname{Id}(\operatorname{Id}(2, 2), 1)$，
其中 $1$ 是[[单位类型]]。
显然 $1\ne 2$。
:::

这也可以作为一种“J 公理不能推出 K 公理”的矫枉过正的证明，
因为泛等公理和 J 公理是相容的。

## 参考文献

```bibliography
hott-book:
  type: book
  title: 'Homotopy type theory: Univalent foundations of mathematics'
  author: 'Univalent Foundations Program, The'
  year: 2013
  publisher: Institute for Advanced Study
```

```terms
泛等公理:
  en: univalence axiom
  fr: axiome d'univalence
  la: axioma de univalentia
  ja: 一<いっ>価<か>性<せい>公<こう>理<り>
```
