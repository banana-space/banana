---
title: 截断类型
categories: [同伦类型论]
navboxes: [类型论]
---

**$n$-截断类型**是一种[[高阶归纳类型]]。
在[[$n$-类型]]的视角下，截断类型即是在 $n$ 层截断某个类型。
它是[[逻辑截断类型]]的推广。

## 类型规则

\[
\cfrac{Γ ⊢ A}{Γ ⊢ |A|_n}
\]

### 构造规则

需要用到 $\operatorname{isHLvl}$，在[[$n$-类型]]里有定义。

\[
\cfrac{Γ ⊢ a:A}{Γ ⊢ \|a\|_n:|A|_n}\quad
{Γ ⊢ \operatorname{trunc}:\operatorname{isHLvl}(|A|_n, n)}
\]

### 消去规则

$n$-截断类型只能被映射到其它的 $n$-类型，
这和[[逻辑截断类型]]是一致的。

\[
\cfrac{Γ ⊢ f:A → B \quad Γ ⊢ p:\operatorname{isHLvl}(B,n)}
{Γ ⊢ \operatorname{rec}_{|A|_n}(f, p):A → B}
\]

计算规则：

\[
\begin{aligned}
  \operatorname{rec}_{|A|_n}(f, p)(\|a\|_n)&=f(a):B\\
  \underbrace{\operatorname{ap}_{\operatorname{ap}_{\cdots\operatorname{ap}_{\operatorname{rec}_{|A|_n}(f, p)}}}}_{一共 n+2 次 \operatorname{ap}}
  (\operatorname{trunc}(\cdots))&=p(\cdots):\cdots
\end{aligned}
\]

第二条规则由于 $n$-类型本身的定义复杂导致参数很多、很难写出，
推荐借助更容易理解（但有类型错误）的写法来理解直觉：

\[
\operatorname{rec}_{|A|_n}(f, p)(\operatorname{trunc}) = p : \operatorname{isHLvl}(B,n)
\]

```terms
$n$-截断类型:
  en: $n$-truncation
```
