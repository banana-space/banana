---
title: 其他代数簇的计算
---

<problems>
- “爆破的平展上同调”一节中推论的长正合列似乎应为 $\cdots\to H^p_{\operatorname{ét}}(X,K)\to H^p_{\operatorname{ét}}(Z,K|_Z)\oplus H^p_{\operatorname{ét}}(\mathrm{Bl}_ZX,b^{-1}K)\to H^p_{\operatorname{ét}}(E,K|_E)\to H^{p+1}_{\operatorname{ét}}(X,K)\to\cdots$。
</problems>

## 带奇点曲线的上同调

::: proposition
设$X$是代数闭域$k$上的射影曲线，有一个结点$x$，设$n$可逆，则
\[
H_{\operatorname{ét}}^q(X,\mathbb{Z}/n\mathbb{Z})= \left\{
\begin{array}{cc}
\mathbb{Z}/n\mathbb{Z} & q=0,\\
(\mathbb{Z}/n\mathbb{Z})^{\oplus 2g+1} & q=1,\\
\mathbb{Z}/n\mathbb{Z}  & q=2,\\
0&q\geq 3.
\end{array}\right.
\]
:::

::: proof
取正规化$f:X^{\nu}\to X$，
我们有短正合列$0\to\mathbb{Z}/n\mathbb{Z}\to f_*(\mathbb{Z}/n\mathbb{Z})\to Q\to 0$。
不难得知$H^0_{\operatorname{ét}}(X,Q)=\mathbb{Z}/n\mathbb{Z}$且当$i>0$时候
$H^i_{\operatorname{ét}}(X,Q)=0$。
于是因为$f$有限，引长正合列得到
\[
\begin{tikzcd}[row sep=small, column sep=small]
0 \arrow[r]&H_{\operatorname{ét}}^0(X,\mathbb{Z}/n\mathbb{Z}) \arrow[r] & \mathbb{Z}/n\mathbb{Z} \arrow[r ,"f"]\arrow[d, phantom, ""{coordinate, name=Z}] & \mathbb{Z}/n\mathbb{Z} \arrow[dll, rounded corners, to path={ -- ([xshift=2ex]\tikztostart.east) |- (Z) [near end]\tikztonodes -| ([xshift=-2ex]\tikztotarget.west) -- (\tikztotarget)}] \\
&H^{1}_{\operatorname{ét}}(X,\mathbb{Z}/n\mathbb{Z}) \arrow[r] & H^{1}_{\operatorname{ét}}(X^{\nu},\mathbb{Z}/n\mathbb{Z}) \arrow[r]\arrow[d, phantom, ""{coordinate, name=Z}] & 0 \arrow[dll, rounded corners, to path={ -- ([xshift=2ex]\tikztostart.east) |- (Z) [near end]\tikztonodes -| ([xshift=-2ex]\tikztotarget.west) -- (\tikztotarget)}]\\
&H^{2}_{\operatorname{ét}}(X,\mathbb{Z}/n\mathbb{Z}) \arrow[r] & H^{2}_{\operatorname{ét}}(X^{\nu},\mathbb{Z}/n\mathbb{Z}) \arrow[r] &0.
\end{tikzcd}
\]
不难得知$H_{\operatorname{ét}}^0(X,\mathbb{Z}/n\mathbb{Z})=\mathbb{Z}/n\mathbb{Z}$且$f=0$，
故$H_{\operatorname{ét}}^1(X,\mathbb{Z}/n\mathbb{Z})=(\mathbb{Z}/n\mathbb{Z})^{\oplus 2g+1}$。
而$H_{\operatorname{ét}}^2(X,\mathbb{Z}/n\mathbb{Z})=\mathbb{Z}/n\mathbb{Z}$也不难看出。
:::

::: remark
可以推广至$n$个一般奇点的情况，略去。
:::

## 爆破的平展上同调

::: proposition {@BlowingUpCoh}
设$X$是概形，而$Z\subset X$是有限型拟凝聚理想层定义的闭子概形。考虑爆破：
\[
\begin{tikzcd}
  E & {\mathrm{Bl}_ZX} \\
  Z & X
  \arrow["b", from=1-2, to=2-2]
  \arrow["j", hook, from=1-1, to=1-2]
  \arrow["\pi"', from=1-1, to=2-1]
  \arrow["i"', hook, from=2-1, to=2-2]
  \arrow["c"{description}, from=1-1, to=2-2]
\end{tikzcd}
\]
则对任何$K\in D_{\operatorname{tor}}^+(X_{\operatorname{ét}})$都有好三角
\[
K\to Ri_*(K|_Z)\oplus Rb_*(b^{-1}K)\to Rc_*(K|_E)\to K[1].
\]
:::

::: proof
设$K=\mathscr{F}^*$。由于$i_*$正合，得到$Ri_*(K|_Z)=i_*(\mathscr{F}^*|_Z)$。
取内射预解$b^{-1}\mathscr{F}^*\to\mathscr{I}^*$，
不难得知$b_*\mathscr{I}^*\simeq Rb_*(b^{-1}K)$。
根据紧合基变换得到$\pi_*(\mathscr{I}^*|_E)=(b_*\mathscr{I}^*)|_Z\simeq R\pi_*(K|_E)$。
因此$Ri_*(K|_Z)\oplus Rb_*(b^{-1}K)\to Rc_*(K|_E)$即为
\[
i_*(\mathscr{F}^*|_Z)\oplus b_*(\mathscr{I}^*)\to i_*(b_*(\mathscr{I}^*)|_Z).
\]
考虑伴随$\mathscr{F}^*\to b_*\mathscr{I}^*$和$\mathscr{F}^*\to i_*(\mathscr{F}^*|_Z)$，进而得到
\[
\mathscr{F}^*\to i_*(\mathscr{F}^*|_Z)\oplus b_*\mathscr{I}^*.
\]
只需要证明这个映射拟同构于上面那个的核。
只需要考虑茎，对点在$Z$的内外分别计算即可，这个十分简单，我们略去。
:::

::: corollary
设$X$是概形，而$Z\subset X$是有限型拟凝聚理想层定义的闭子概形。考虑爆破：
\[
\begin{tikzcd}
  E & {\mathrm{Bl}_ZX} \\
  Z & X
  \arrow["b", from=1-2, to=2-2]
  \arrow["j", hook, from=1-1, to=1-2]
  \arrow["\pi"', from=1-1, to=2-1]
  \arrow["i"', hook, from=2-1, to=2-2]
  \arrow["c"{description}, from=1-1, to=2-2]
\end{tikzcd}
\]
则对任何$K\in D_{\operatorname{tor}}^+(X_{\operatorname{ét}})$都有长正合列
\[
\cdots\to H^p_{\operatorname{ét}}(X,K)\to H^p_{\operatorname{ét}}(\mathrm{Bl}_ZX,b^{-1}K)
\to H^p_{\operatorname{ét}}(Z,K|_Z)\to H^{p+1}_{\operatorname{ét}}(X,K)\to\cdots.
\]
:::

::: proof
根据 @BlowingUpCoh，直接取$R\Gamma$和上同调即可。
:::
