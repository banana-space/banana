---
title: 平展上同调和极限一瞥
---

我们这里只给出叙述，不给出证明，详细细节参考[@StacksProject, Tag 03Q4]。

::: definition
设$I$是预序集，考虑逆系统$(X_i,f_{i'i})_{I}$。
一个在其上定义的层系统$(\mathscr{F}_i,\varphi_{i'i})$为满足

(i)层$\mathscr{F}_i\in\operatorname{Sh}(X_{i,\operatorname{ét}})$；

(ii)对$i'\geq i$，
有$\operatorname{Sh}(X_{i,\operatorname{ét}})$内的映射
$\varphi_{i'i}:f_{i'i}^{-1}\mathscr{F}_i\to\mathscr{F}_{i'}$

使得$\varphi_{i''i}=\varphi_{i''i'}\circ f_{i''i'}^{-1}\varphi_{i'i}$。
:::

::: theorem [[@StacksProject, Tag 09YQ]] {@ColimSheaf}
考虑定向逆系统$(X_i,f_{i'i})_{I}$使得$X_i$拟紧拟分离且$f_{i'i}$仿射。
对于其上定义的层系统$(\mathscr{F}_i,\varphi_{i'i})$，
假设$f_i:X=\varprojlim X_i\to X_i$且$\mathscr{F}:=\varinjlim f_i^{-1}\mathscr{F}_i$，则有
\[
\varinjlim H^i_{\operatorname{ét}}(X_i,\mathscr{F}_i)\cong H^i_{\operatorname{ét}}(X,\mathscr{F}).
\]
:::

::: remark
若只取层的极限，则不需要转移映射仿射。
:::
