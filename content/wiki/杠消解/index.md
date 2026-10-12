---
title: 杠消解
categories: [同调代数]
notices:
  - name: 问题
    items:
      - “对于单子”一节需要扩充。
---

**杠消解**是 \(\mathbb{Z}\) 作为 \(\mathbb{Z}[G]\)-模
（\(\mathbb{Z}\) 作为平凡 \(G\)-模）的一个自由消解。

设 \(EG\) 是以 \(G\) 为对象集且每两个对象之间恰有一个态射的范畴。
类比于万有 \(G\)-[[主丛]]的全空间，\(EG\) 的[[脉]]是一个可缩的单纯集，
因此它对应的复形构成一个[[消解]]（见 [[Dold–Kan 对应]]）。
“杠”消解的名称来源于记号 \(g[g_1|g_2|\cdots|g_n]\)，
表示 \(EG\) 的 \(n\)-单形
\([g,gg_1,gg_1g_2,\cdots,gg_1g_2\cdots g_n]\)。

## 定义

### 对于群

::: definition [杠消解]
设 \(G\) 为群。
关于 \(G\) 的**杠消解**是如下 \(\mathbb{Z}[G]\)-模序列，

```math {@bar}
\cdots \to F_2 \overset{d}{\to} F_1 \overset{d}{\to} F_0 \overset{\epsilon}{\to} \mathbb{Z} \to 0,
```

其中 \(F_n\) 是所有符号 \([g_1|g_2|\cdots|g_n]\)（\(g_1,\cdots,g_n \in G\)）生成的自由
\(\mathbb{Z}[G]\)-模，
\(F_0\) 是一个符号 \([\,]\) 生成的自由左 \(\mathbb{Z}[G]\)-模，
\(\epsilon\colon F_0\to \mathbb{Z}\) 将 \([\,]\) 映射到 \(1\)，
边界同态 \(d\colon F_{n} \to F_{n-1}\) 由下式定义，
\(d = \sum_{i=0}^n (-1)^i d_i\)，
\[
d_i([g_1|g_2|\cdots|g_n]) =
\begin{cases}
  g_1[g_2|\cdots |g_n] & i = 0 \\
  [g_1|\cdots | g_ig_{i+1}|\cdots|g_n] & 1\leq i<n\\
  [g_1|\cdots |g_{n-1}] & i = n
\end{cases}.
\]
例如
- \(d\colon F_1\to F_0\) 的定义为 \(d([g]) = g[\,]-[\,]\)；
- \(d\colon F_2\to F_1\) 的定义为 \(d([g|h]) = g[h]-[gh] + [g]\)；
- \(d\colon F_3\to F_2\) 的定义为 \(d([f|g|h]) = f[g|h]-[fg|h]+[f|gh]-[f|g]\)。

:::

### 对于单子

::: definition
设 \((T,\mu,\varepsilon)\) 是范畴 \(\mathsf C\) 上的[[单子]]。
:::

## 性质

::: theorem
@bar 是正合列。
:::

::: proof
我们只需证明 @bar 作为 Abel 群复形正合。

考虑 Abel 群同态 \(\{s_n\}_{n\geq -1}\)，其中
\(s_{-1}\colon \mathbb{Z}\to F_0, 1\mapsto [\,]\)，
对 \(n\geq 0\)，
\[
s_n\colon F_n\to F_{n+1},\,
g[g_1|\cdots |g_n] \mapsto [g|g_1|\cdots|g_n].
\]
可直接验证 \(\epsilon s_{-1} = 1\)，
\(ds_n+s_{n-1}d = 1\, (n\geq 0)\)，
即 \(\{s_n\}_{n\geq -1}\) 给出了 @bar 作为 Abel 群复形的收缩。
:::
