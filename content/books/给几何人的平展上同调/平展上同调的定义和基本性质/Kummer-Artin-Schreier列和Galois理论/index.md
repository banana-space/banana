---
title: Kummer/Artin-Schreier列和Galois理论
---

{@sec:kummer-artin-schreier-galois}

[为了方便我们只讨论Kummer正合列的情况，对Artin-Schreier正合列
可以自行类比（留作练习）。]

考虑有限Galois扩张$E/F$，为了方便假设$G:=\mathrm{Gal}(E/F)$。
代入Kummer正合列我们有$G$-模的正合列
\[
1\to\mu_n(E)\to E^{\times}\to E^{\times n}\to1.
\]
引长正合列得到
\[
1\to\mu_n(F)\to F^{\times}\to E^{\times n}\cap F^{\times}
\to H^1(G,\mu_n(E))\to H^1(G,E^{\times})=1
\]
其中最后一项见Hilbert定理90（@Hilbert90）。
至此我们得到
\[
E^{\times n}\cap F^{\times}/F^{\times n}\cong H^1(G,\mu_n(E))
\]
将$x^n$打到$[\sigma\mapsto\sigma(x)/x]$。

现在假设$\mu_n(E)=\mu_n(F)$，则$G$在$\mu_n(E)$作用平凡，
故而$H^1(G,\mu_n(E))=\operatorname{Hom}(G,\mu_n(F))$。故此时有
\[
E^{\times n}\cap F^{\times}/F^{\times n}\cong \operatorname{Hom}(G,\mu_n(F)).
\]

::: theorem
假设$n\geq 1$且$F$包含本原$n$次单位根，则我们有双射：
\[
{\{F^{\operatorname{sep}}/E/F:E/F\text{为满足}\exp(E/F)|n\text{的有限Abel扩张}\}}
\leftrightarrow{\{F^{\times n}<\Delta ^{\times}:(\Delta/F^{\times n})<\infty\}}
\]
为$E\mapsto E^{\times n}\cap F^{\times}=:\Delta_E$和$\Delta\mapsto F(\sqrt[n]{\Delta})$。
其中$F(\sqrt[n]{\Delta})$为$\{x^n-a:a\in\Delta\}$在$F$上的分裂域。

另外，这些还满足：

- (a) 对上述对应$E\leftrightsquigarrow\Delta$诱导出完美对：
  \[
  \operatorname{Gal}(E/F)\times\Delta/F^{\times n}\to\mu_n(F),\quad (\sigma,\bar{a})\mapsto\sigma\sqrt[n]{a}/\sqrt[n]{a}
  \]
  且$[E:F]=(\Delta:F^{\times n})$。

- (b) 对于上述对应$E\leftrightsquigarrow\Delta$和$E'\leftrightsquigarrow\Delta'$，
  我们有$E\cap E'\leftrightsquigarrow\Delta\cap\Delta'$和$EE'\leftrightsquigarrow\Delta\Delta'$。

:::

::: proof
均根据上述的推导不难看出。
:::
