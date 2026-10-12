---
title: Kummer理论和Artin-Schreier列
---

## 基本正合列

类似于复几何里的正合列
$0\to\mathbb{Z}\to\mathbb{C}\stackrel{\exp}{\longrightarrow}\mathbb{C}^*\to 0$，
尽管我们此时没有$\exp$，但可以有如下的近似正合列（以此取逆极限来模拟）：

::: theorem [Kummer正合列] {@KummerSeq}
给定概形$X$和正整数$n$使得$n$在$X$内可逆（不被任何剩余类域的特征整除），则
有$\operatorname{Ab}(X_{\operatorname{ét}})$内的正合列
\[
0\to\bm{\mu}_{n,X}\to\mathbb{G}_{m,X}\stackrel{t\mapsto t^n}{\longrightarrow}\mathbb{G}_{m,X}\to0.
\]
:::

::: proof
显然$\bm{\mu}_{n,X}$为$\mathbb{G}_{m,X}\stackrel{t\mapsto t^n}{\longrightarrow}\mathbb{G}_{m,X}$
的核。
故只需要证明满射。
取$U=\operatorname{Spec} A$是仿射的平展$X$-概形，任取$a\in\Gamma(U,\mathbb{G}_{m,X})$，
根据假设知典范映射$V=\operatorname{Spec} A[t]/(t^n-a)\to U$
是平展映射。注意到对应的环同态是有限自由的，故忠实平坦，于是是满射。
因此$V\to U$是平展覆盖，根据 @ExactEtSheaf 即可得到结论。
:::

::: theorem [Artin-Schreier列] {@Artin-SchreierSeq}
给定概形$X$和素数$p$使得在$\Gamma(X,\mathscr{O}_X)$内$p=0$，则
有$\operatorname{Ab}(X_{\operatorname{ét}})$内的正合列
\[
0\to\underline{\mathbb{Z}/p\mathbb{Z}}_X\to\mathbb{G}_{a,X}\stackrel{t\mapsto t^p-t}{\longrightarrow}\mathbb{G}_{a,X}\to0.
\]
:::

::: proof
类似于Kummer正合列，
注意到此时$\operatorname{Spec} A[t]/(t^p-t-a)\to\operatorname{Spec} A$是平展覆盖即可。
:::

## 和Galois理论的联系

见第 @sec:kummer-artin-schreier-galois 节。
