---
title: 例外同源
aliases: [例外同形]
categories: [Lie 理论]
navboxes: [Lie 理论, Lie 群]
---

**例外同源**是指[[典型群]]之间的[[同源]]，
即有限[[覆叠空间|覆叠]]。

典型群对应 A、B、C、D 型 [[Dynkin 图]]。
不同编号的 Dynkin 图在编号较小时可能同构，
例如 $\mathrm{A}_3 = \mathrm{D}_3$，
此时相应的典型群之间就存在例外同源。

由于[[Lie 群]]覆叠不改变[[Lie 代数]]，
因此对应的 Lie 代数之间就存在同构，称之为**例外同构**。

特别地，到[[特殊正交群]]的覆叠说明，
[[旋量群]] $\mathrm{Spin} (n)$ 当 $n \leq 6$ 时同构于某些典型群。

| Dynkin 图 | 复 Lie 群 | 紧实形式 |
| :-: | :-: | :-: |
| $\mathrm{A}_n$ | [[特殊线性群\|$\mathrm{SL} (n+1; \mathbb{C})$]] | [[特殊酉群\|$\mathrm{SU} (n+1)$]] |
| $\mathrm{B}_n$ | [[特殊正交群\|$\mathrm{SO} (2n+1; \mathbb{C})$]] | [[特殊正交群\|$\mathrm{SO} (2n+1; \mathbb{R})$]] |
| $\mathrm{C}_n$ | [[辛群\|$\mathrm{Sp} (2n; \mathbb{C})$]] | [[酉辛群\|$\mathrm{USp} (n)$]] |
| $\mathrm{D}_n$ | [[特殊正交群\|$\mathrm{SO} (2n; \mathbb{C})$]] | [[特殊正交群\|$\mathrm{SO} (2n; \mathbb{R})$]] |

## 列举

### $\mathrm{A}_1 = \mathrm{B}_1$

对复 Lie 群，有二重覆叠
\[
\mathrm{SL} (2; \mathbb{C}) \longrightarrow
\mathrm{SO} (3; \mathbb{C}),
\]
定义如下：
设 $V \simeq \mathbb{C}^2$，
带有非零线性映射 $\langle - \rangle \colon {\wedge^2 \, V} \to \mathbb{C}$。
对任意线性映射 $f \colon V \to V$，
有 $\det f = 1$ 当且仅当 $f$ 保持该双线性型不变。
故 $\mathrm{SL} (V)$ 由保持 $\langle - \rangle$ 不变的 $V$ 的自同构组成。

令 $W = \operatorname{Sym}^2 V \simeq \mathbb{C}^3$，
则 $W$ 带有[[对称双线性型]]
\[
\mathopen{\langle\mkern-4mu\langle} v_1 \otimes v_2, \ v_3 \otimes v_4 \mathclose{\rangle\mkern-4mu\rangle} =
\langle v_1, v_3 \rangle \langle v_2, v_4 \rangle +
\langle v_1, v_4 \rangle \langle v_2, v_3 \rangle .
\]
若 $f \in \mathrm{SL} (V)$，
则 $\operatorname{Sym}^2 f \in \mathrm{SO} (W)$。
这就定义了映射 $\mathrm{SL} (V) \to \mathrm{SO} (W)$。
它是二重覆叠，其核为 $\{ \pm 1 \}$。
这也说明，
\[
\mathrm{SL} (2; \mathbb{C}) \simeq \mathrm{Spin} (3; \mathbb{C}),
\]
其中右边是[[旋量群]]。

将上述二重覆叠限制在不同的[[实形式]]上，得到二重覆叠
\[
\begin{aligned}
  \mathrm{SU} (2) & \longrightarrow \mathrm{SO} (3; \mathbb{R}), \\
  \mathrm{SU} (1, 1) \simeq
  \mathrm{SL} (2; \mathbb{R}) & \longrightarrow \mathrm{SO} (2, 1).
\end{aligned}
\]
这些覆叠说明
\[
\begin{aligned}
  \mathrm{SU} (2) & \simeq \mathrm{Spin} (3), \\
  \mathrm{SL} (2; \mathbb{R}) & \simeq \mathrm{Spin} (2, 1).
\end{aligned}
\]

### $\mathrm{A}_1 = \mathrm{C}_1$

对复 Lie 群，有同构
\[
\mathrm{SL} (2; \mathbb{C}) \simeq
\mathrm{Sp} (2; \mathbb{C}),
\]
因为在 $2$ 维[[辛向量空间]]上，
线性映射保持辛形式当且仅当其行列式为 $1$。

限制在实形式上，有
\[
\begin{aligned}
  \mathrm{SU} (2) & \simeq \mathrm{USp} (1), \\
  \mathrm{SL} (2; \mathbb{R}) & \simeq \mathrm{Sp} (2; \mathbb{R}).
\end{aligned}
\]

### $\mathrm{A}_1 \times \mathrm{A}_1 = \mathrm{D}_2$

这里，两个 Dynkin 图都由两个孤立点构成。

对复 Lie 群，有二重覆叠
\[
\mathrm{SL} (2; \mathbb{C}) \times \mathrm{SL} (2; \mathbb{C}) \longrightarrow
\mathrm{SO} (4; \mathbb{C}),
\]
定义如下。和上面一样，设 $V \simeq \mathbb{C}^2$，
带有非零线性映射 $\langle - \rangle \colon {\wedge^2 \, V} \to \mathbb{C}$。
则 $\mathrm{SL} (V)$ 由保持 $\langle - \rangle$ 不变的 $V$ 的自同构组成。

令 $W = V \otimes V$，
则 $W$ 带有[[对称双线性型]]
\[
\mathopen{\langle\mkern-4mu\langle} v_1 \otimes v_2, \ v_3 \otimes v_4 \mathclose{\rangle\mkern-4mu\rangle} =
\langle v_1, v_3 \rangle \langle v_2, v_4 \rangle .
\]
若 $f, g \in \mathrm{SL} (V)$，
则 $f \otimes g \in \mathrm{SO} (W)$。
这就定义了映射 $\mathrm{SL} (V) \times \mathrm{SL} (V) \to \mathrm{SO} (W)$。
它是二重覆叠，其核为 $\{ \pm 1 \}$。
这也说明，
\[
\mathrm{SL} (2; \mathbb{C}) \times \mathrm{SL} (2; \mathbb{C}) \simeq \mathrm{Spin} (4; \mathbb{C}),
\]
其中右边是[[旋量群]]。

限制在实形式上，有二重覆叠
\[
\begin{aligned}
  \mathrm{SU} (2) \times \mathrm{SU} (2)
  & \longrightarrow \mathrm{SO} (4; \mathbb{R}), \\
  \mathrm{SL} (2; \mathbb{C})
  & \longrightarrow \mathrm{SO} (3, 1), \\
  \mathrm{SL} (2; \mathbb{R}) \times \mathrm{SL} (2; \mathbb{R})
  & \longrightarrow \mathrm{SO} (2, 2).
\end{aligned}
\]
这些覆叠说明
\[
\begin{aligned}
  \mathrm{SU} (2) \times \mathrm{SU} (2)
  & \simeq \mathrm{Spin} (4), \\
  \mathrm{SL} (2; \mathbb{C})
  & \simeq \mathrm{Spin} (3, 1), \\
  \mathrm{SL} (2; \mathbb{R}) \times \mathrm{SL} (2; \mathbb{R})
  & \simeq \mathrm{Spin} (2, 2).
\end{aligned}
\]

### $\mathrm{B}_2 = \mathrm{C}_2$

对复 Lie 群，有二重覆叠
\[
\mathrm{Sp} (4; \mathbb{C}) \longrightarrow
\mathrm{SO} (5; \mathbb{C}),
\]
定义如下。设 $V \simeq \mathbb{C}^4$，
带有辛形式 $\langle - \rangle \colon {\wedge^2 \, V} \to \mathbb{C}$，记为 $\omega$。
则 $\omega$ 诱导了同构 $V \simeq V^\vee$，
进而有 $V^\vee$ 上的辛形式，
我们记为 $\omega^\vee \colon {\wedge^2 \, V^\vee} \to \mathbb{C}$。

令 $W' = \wedge^2 \, V$，则 $\omega^\vee \in W'$。
定义 $W'$ 上的对称双线性型
\[
\mathopen{\langle\mkern-4mu\langle} v_1 \wedge v_2, \ v_3 \wedge v_4 \mathclose{\rangle\mkern-4mu\rangle} =
\langle v_1, v_3 \rangle \langle v_2, v_4 \rangle -
\langle v_1, v_4 \rangle \langle v_2, v_3 \rangle.
\]
若 $f \in \mathrm{Sp} (V)$，
则 $\wedge^2 \, f \in \mathrm{SO} (W')$。
而 $\wedge^2 \, f$ 一定保持 $\omega^\vee \in W'$ 不动，
故正交地作用在 $W = (\omega^\vee)^\perp \subset W'$ 上。
这就定义了映射 $\mathrm{Sp} (V) \to \mathrm{SO} (W)$。
它是二重覆叠，其核为 $\{ \pm 1 \}$。
这也说明，
\[
\mathrm{Sp} (4; \mathbb{C}) \simeq \mathrm{Spin} (5; \mathbb{C}).
\]

限制在实形式上，有二重覆叠
\[
\begin{aligned}
  \mathrm{USp} (2)
  & \longrightarrow \mathrm{SO} (5; \mathbb{R}), \\
  \mathrm{USp} (1, 1)
  & \longrightarrow \mathrm{SO} (4, 1), \\
  \mathrm{Sp} (4; \mathbb{R})
  & \longrightarrow \mathrm{SO} (3, 2).
\end{aligned}
\]
这些覆叠说明
\[
\begin{aligned}
  \mathrm{USp} (2)
  & \simeq \mathrm{Spin} (5), \\
  \mathrm{USp} (1, 1)
  & \simeq \mathrm{Spin} (4, 1), \\
  \mathrm{Sp} (4; \mathbb{R})
  & \simeq \mathrm{Spin} (3, 2).
\end{aligned}
\]

### $\mathrm{A}_3 = \mathrm{D}_3$

对复 Lie 群，有二重覆叠
\[
\mathrm{SL} (4; \mathbb{C}) \longrightarrow
\mathrm{SO} (6; \mathbb{C}),
\]
定义如下。设 $V \simeq \mathbb{C}^4$，
带有一个非零线性映射 $\langle - \rangle \colon {\wedge^4 \, V} \to \mathbb{C}$。
对任意线性映射 $f \colon V \to V$，
有 $\det f = 1$ 当且仅当 $f$ 保持该多线性型不变。
故 $\mathrm{SL} (V)$ 由保持 $\langle - \rangle$ 不变的 $V$ 的自同构组成。

令 $W = \wedge^2 \, V$。
定义 $W$ 上的对称双线性型
\[
\mathopen{\langle\mkern-4mu\langle} v_1 \wedge v_2, \ v_3 \wedge v_4 \mathclose{\rangle\mkern-4mu\rangle} =
\langle v_1 \wedge v_2 \wedge v_3 \wedge v_4 \rangle.
\]
若 $f \in \mathrm{SL} (V)$，
则 $\wedge^2 \, f \in \mathrm{SO} (W)$。
这就定义了映射 $\mathrm{SL} (V) \to \mathrm{SO} (W)$。
它是二重覆叠，其核为 $\{ \pm 1 \}$。
这也说明，
\[
\mathrm{SL} (4; \mathbb{C}) \simeq \mathrm{Spin} (6; \mathbb{C}).
\]

限制在实形式上，有二重覆叠
\[
\begin{aligned}
  \mathrm{SU} (4)
  & \longrightarrow \mathrm{SO} (6; \mathbb{R}), \\
  \mathrm{SL} (2; \mathbb{H})
  & \longrightarrow \mathrm{SO} (5, 1), \\
  \mathrm{SU} (2, 2)
  & \longrightarrow \mathrm{SO} (4, 2), \\
  \mathrm{SL} (4; \mathbb{R})
  & \longrightarrow \mathrm{SO} (3, 3).
\end{aligned}
\]
这些覆叠说明
\[
\begin{aligned}
  \mathrm{SU} (4)
  & \simeq \mathrm{Spin} (6), \\
  \mathrm{SL} (2; \mathbb{H})
  & \simeq \mathrm{Spin} (5, 1), \\
  \mathrm{SU} (2, 2)
  & \simeq \mathrm{Spin} (4, 2), \\
  \mathrm{SL} (4; \mathbb{R})
  & \simeq \mathrm{Spin} (3, 3).
\end{aligned}
\]

## 参考文献

```bibliography
Garrett2015:
  type: preprint
  author: 'Garrett, Paul'
  title: Sporadic isogenies to orthogonal groups
  year: 2015
  url: https://www-users.cse.umn.edu/~garrett/m/v/sporadic_isogenies.pdf
Tao2011:
  type: online
  site: What's new
  author: 'Tao, Terence'
  title: Exceptional isogenies between the classical Lie groups
  year: 2011
  url: https://terrytao.wordpress.com/2011/03/11/exceptional-isogenies-between-the-classical-lie-groups/
```

```terms
例外同源:
  en: exceptional isogeny
  fr: isogénie exceptionnelle
例外同构:
  en: exceptional isomorphism
```
