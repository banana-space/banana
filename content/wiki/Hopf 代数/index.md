---
title: Hopf 代数
categories: [代数论]
navboxes: [代数结构]
---

**Hopf 代数**是一种[[代数结构]]，
它同时具有[[代数 (代数结构)|代数]]和[[余代数]]的结构，且二者相容。

在[[代数–几何对偶]]的观点下，
Hopf 代数对应于有[[群]]结构的空间。
交换 Hopf 代数对应[[群概形]]（@equiv-CHAlg-AGSch），
一般的 Hopf 代数则可以视为交换 Hopf 代数的[[量子化]]，
即对应[[非交换空间]]。

在 [[Tannaka–Krein 对偶]]的观点下，Hopf 代数对应于[[刚性幺半范畴]]
（即同时具有“[[张量积]]”与“[[对偶]]”运算的范畴）。

## 定义

::: definition [Hopf 代数]
[[域]] $k$ 上的 **Hopf 代数**是六元组 $(A, m, e, \mu, \varepsilon, \iota)$，
其中

- $(A, m, e, \mu, \varepsilon)$ 是 $k$-[[双代数]]。具体而言，

  - $A$ 是 $k$-[[向量空间]]。

  - $(A, m, e)$ 是 $k$-[[结合代数|代数]]（称为它的**底代数**），
    其中 $m \colon A \otimes_k A \to A$ 是乘法，
    $e \colon k \to A$ 是单位。

  - $(A, \mu, \varepsilon)$ 是 $k$-[[余代数]]，
    其中 $\mu \colon A \to A \otimes_k A$ 是余乘，
    $\varepsilon \colon A \to k$ 是余单位。

  - 这些运算满足相容条件，即
    $\mu, \varepsilon$ 是代数同态。等价地说，$m, e$ 是余代数同态。

- $\iota \colon A \to A$ 是 $k$-线性映射，
  称为**对合映射**或**余逆**。

满足下述条件：

- 复合映射
  \[
  \begin{aligned}
    m \circ (\mathrm{id} \otimes \iota) \circ \mu & \colon
    A \to A \otimes A \to A \otimes A \to A \\
    m \circ (\iota \otimes \mathrm{id}) \circ \mu & \colon
    A \to A \otimes A \to A \otimes A \to A \\
  \end{aligned}
  \]
  都等于
  \[
  e \circ \varepsilon \colon A \to k \to A.
  \]

在不引起歧义时，上述六元组简记为 $A$。
:::

::: definition
**交换 Hopf 代数**指的是乘法 $m$ 为[[交换运算]]的代数。
:::

::: definition
域 $k$ 上 Hopf 代数之间的同态定义为与其所有运算相容的映射。
$k$ 上所有 Hopf 代数范畴构成一范畴，记为 $\mathsf{HAlg}_k$，
所有交换 Hopf 代数构成的范畴记为 $\mathsf{CHAlg}_k$。
:::

## 性质

::: proposition [对偶Hopf代数] {@dual-Hopf-algebra}
Hopf代数$H$的[[对偶空间]]$H^*:=\mathrm{Hom}(H, k)$自动是Hopf代数。
其乘法由$H$的余乘法诱导，余乘法由$H$的乘法诱导，单位和余单位也与$H$的余单位和单位互相诱导。
:::

::: proposition
Hopf 代数 $A$ 的有限维（左或右，下不妨设为左）模
（即其底代数上的模）范畴
$_A \mathsf{Mod}$ 是[[刚性幺半范畴]]。
其中，

- 张量积运算 $\otimes$ 为：对两个 $A$ 模 $V_1, V_2$，
  [[张量积]] $V_1 \otimes_k V_2$ 上有自然 $A \otimes A$ 模结构。
  通过余乘 $\mu \colon A \to A \otimes A$ 给出其 $A$ 模结构。

- 对偶运算 $(-)^\vee$ 为：对 $A$ 模 $V$，
  向量空间 $\operatorname{Hom}_k (V, k)$ 上有自然
  $A^{\mathrm{op}}$ 模结构，
  通过余逆 $A \to A^{\mathrm{op}}$ 给出其 $A$ 模结构。

:::

::: remark
刚性幺半范畴要求的结构态射 $V^\vee \otimes V \to k$ 由 $f \otimes x \mapsto f(x)$ 给出。
注意如果换成 $V \otimes V^\vee \to k$，则这不构成模同态，
因此 $V^\vee$ 只构成右对偶，不构成左对偶。
:::

::: proposition {@equiv-CHAlg-AGSch}
域 $k$ 上的交换 Hopf 代数范畴与 $k$ 上的[[仿射群概形]]范畴等价，二互逆[[函子]]为：
\[
\begin{aligned}
  \operatorname{Spec} \colon & \mathsf{CHAlg}_k \to \mathsf{AGSch} \\
  \mathcal{O} \colon & \mathsf{AGSch} \to \mathsf{CHAlg}_k.
\end{aligned}
\]
在此二函子下，Hopf 代数的余运算与群概形的运算相互对应。
:::

## 例子

- 由 @equiv-CHAlg-AGSch，仿射群概形的整体截面有 Hopf 代数结构。

- 对有限群 $G$，群代数 $k[G]$ 有 Hopf 代数结构，
  因此群表示有对偶、张量积、同态等操作：
  - 余乘 $k[G] \to k[G] \otimes k[G]$ 由 $g \mapsto g \otimes g$ 诱导。

  - 余逆 $k[G] \to k[G]^{\mathrm{op}}$ 由 $g \to g^{-1}$ 诱导。

  - 余单位 $k[G] \to k$ 由 $g \mapsto 1$ 诱导。

  由 @dual-Hopf-algebra，我们知道群函数$\mathrm{Fun}(G):=\mathrm{Hom}(k[G], k)$也是个Hopf代数。
- [[Lie 代数]]的[[泛包络代数]]有 Hopf 代数结构。

- 可通过[[群概形]]量子化构造非交换 Hopf 代数，
  以下是群概形 $\operatorname{SL}(2)$ 与量子群 $\operatorname{SL}_q(2)$ 之对应：
  - $\operatorname{SL}(2)$ 的坐标环代数为
    $\mathcal O(\operatorname{SL}(2))=k[X_{1,1},X_{1,2},X_{2,1},X_{2,2}]$，
    其同构于四元多项式环；
    $\operatorname{SL}_q(2)$ 的坐标环代数在形式上仍为 $\mathcal O(\operatorname{SL}(2))$，
    规定量子化乘法如下
    \[
    \begin{aligned}
      &X_{1,2}X_{1,1}=qX_{1,1}X_{1,2}, \quad X_{2,1}X_{1,1}=qX_{1,1}X_{2,1},\\
      &X_{2,2}X_{2,1}=qX_{2,1}X_{2,2}, \quad X_{2,2}X_{1,2}=qX_{1,2}X_{2,2},\\
      &X_{2,1}X_{1,2}=X_{1,2}X_{2,1}, \quad X_{1,1}X_{2,2}-X_{2,2}X_{1,1}=(q^{-1}-q)X_{1,2}X_{2,1}.
    \end{aligned}
    \]

  - $\operatorname{SL}(2)$ 与 $\operatorname{SL}_q(2)$ 的单位同一般 $k$-代数定义。

  - $k[\operatorname{SL}(2)]$ 与 $k[\operatorname{SL}_q(2)]$ 上的余乘均由
    $\displaystyle \mu: X_{i,j}=\sum_{1\leq l\leq 2}X_{i,l}\otimes X_{l,j}$ 给出。

  - $k[\operatorname{SL}(2)]$ 与 $k[\operatorname{SL}_q(2)]$ 上的余单位均为
    $\varepsilon (X_{i,j})=\delta _{i,j}$。

  - $k[\operatorname{SL}(2)]$ 与 $k[\operatorname{SL}_q(2)]$ 上的余逆均为
    $\iota (X_{i,j})=(-1)^{i+j}X_{3-j,3-i}$。

```terms
Hopf 代数:
  en: Hopf algebra
  de: Hopf-Algebra :f
  fr: algèbre de Hopf :f
```
