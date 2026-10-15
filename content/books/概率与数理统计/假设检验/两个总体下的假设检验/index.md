---
title: 两个总体下的假设检验
---
本节将讨论一些两个总体下的假设检验问题。我们用
$X_{1,1},\ldots,X_{1,n_1}$表示第一个总体的样本容量为$n_1$的样本，
用$X_{2,1},\ldots,X_{2,n_2}$表示第二个总体的样本容量为$n_2$的样本，
且$X_{1,1},\ldots,X_{1,n_1},X_{2,1},\ldots,X_{2,n_2}$相互独立。
此外，用如下符号
\[
    \overline{X}_k = \frac{1}{n_k}\sum_{i=1}^n X_{k,i},\qquad
    S_k^2 = \frac{1}{n_k-1}\sum_{i=1}^n\big(X_{k,i}-\overline{X}_k\big),\qquad k=1,2
\]
来表示两组样本$X_{1,1},\ldots,X_{1,n_1}$与
$X_{2,1},\ldots,X_{2,n_2}$各自的样本均值和样本方差。
符号$\overline{x}_1,s_1^2$与$\overline{x}_2,s_2^2$则代表
获取到样本值$x_{1,1},\ldots,x_{1,n_1}$与$x_{2,1},\ldots,x_{2,n_2}$
以后算得的各自的样本均值与样本方差值。

## 两个正态总体期望之差的假设检验*

设两个总体分别服从正态分布$\mathcal{N}(\mu_1,\sigma_1^2)$与
$\mathcal{N}(\mu_2,\sigma_2^2)$。我们根据两个总体方差信息的
知晓程度，讨论几种容易求解的情况。

**两总体方差均已知的情况。** 设两个总体的方差
$\sigma_1^2,\sigma_2^2$均已知。考虑如下假设检验问题：
\[
    H_0: \mu_1-\mu_2=\Delta_0,\qquad H_1:\mu_1-\mu_2\neq\Delta_0,
\]
其中$\Delta_0$为一给定实数。由于两个总体的方差均已知，故可以考虑
用如下双侧检验统量进行假设检验：

```math {@eq:test_statistic_two_normal_mean_diff_var_known}
Z = \frac{\overline{X}_1-\overline{X}_2-\Delta_0}{\sqrt{\sigma_1^2/n_1+\sigma_2^2/n_2}}.
```

不难看出，检验统计量$Z$在原假设$H_0$下服从标准正态分布
$\mathcal{N}(0,1)$。故在获得样本观测值
$x_{1,1},\ldots,x_{1,n_1}$与$x_{2,1},\ldots,x_{2,n_2}$后，
相应的$p$值为
\[
    \hat{p} = 2\left(1-\Phi(|z|)\right),
    \qquad z = \frac{\overline{x}_1-\overline{x}_2-\Delta_0}{\sqrt{\sigma_1^2/n_1+\sigma_2^2/n_2}}.
\]
若事先给定了显著性水平$\alpha$，则拒绝域由
\[
    |z|>z_{\alpha/2}
\]
给出。

若备择假设被替换为$H_1:\mu_1-\mu_2>\Delta_0$或
$H_1:\mu_1-\mu_2<\Delta_0$，则可以将
@eq:test_statistic_two_normal_mean_diff_var_known
作为单侧检验统计量进行假设检验，相关的推导留给读者自己完成。
表\ref{table:test_two_normal_mean_diff_var_known} 总结了
方差已知时，两个正态总体期望之差的假设检验方法。

方差$\sigma_1^2,\sigma_2^2$已知时，两个正态总体期望之差$\mu_1-\mu_2$的假设检验方法
\label{table:test_two_normal_mean_diff_var_known}
\begin{tabular}{ccccc}
!原假设$H_0$ & !备择假设$H_1$ & !检验统计量 & !拒绝域 & !$p$值 \\
$\mu_1-\mu_2=\Delta_0$ & $\mu_1-\mu_2>\Delta_0$ & $Z=\dfrac{\overline{X}_1-\overline{X}_2-\Delta_0}{\sqrt{\sigma_1^2/n_1+\sigma_2^2/n_2}}$ & $z>z_{\alpha}$ & $1-\Phi(z)$ \\
$\mu_1-\mu_2=\Delta_0$ & $\mu_1-\mu_2<\Delta_0$ & $Z=\dfrac{\overline{X}_1-\overline{X}_2-\Delta_0}{\sqrt{\sigma_1^2/n_1+\sigma_2^2/n_2}}$ & $z<-z_{\alpha}$ & $\Phi(z)$ \\
$\mu_1-\mu_2=\Delta_0$ & $\mu_1-\mu_2\neq\Delta_0$ & $Z=\dfrac{\overline{X}_1-\overline{X}_2-\Delta_0}{\sqrt{\sigma_1^2/n_1+\sigma_2^2/n_2}}$ & $|z|>z_{\alpha/2}$ & $2(1-\Phi(|z|))$
\end{tabular}

**两总体方差未知，但已知它们相等的情况。** 设两个总体的方差
$\sigma_1^2,\sigma_2^2$均未知，但已知二者相等（即
$\sigma_1^2=\sigma_2^2$）。考虑如下假设检验问题：
\[
    H_0: \mu_1-\mu_2=\Delta_0,\qquad H_1:\mu_1-\mu_2\neq\Delta_0,
\]
其中$\Delta_0$为一给定实数。需注意的是，上述问题中$H_0$与$H_1$
均为复合假设。

我们参考相同情形下对$\mu_1-\mu_2$进行区间估计时枢轴量的设计方法
（见[第8.3节](/books/概率与数理统计/区间估计/两个总体下的区间估计/)第1小节第二部分内容），
取

```math {@eq:test_statistic_two_normal_mean_diff_var_equal}
T = \frac{\overline{X}_1-\overline{X}_2-\Delta_0}{\sqrt{S_p^2(1/n_1+1/n_2)}}
```

为检验统计量，其中
\[
    S_p^2 = \frac{(n_1-1)S_1^2+(n_2-2)S_2^2}{n_1+n_2-2}
\]
为合并方差。依照[第8.3节](/books/概率与数理统计/区间估计/两个总体下的区间估计/)第1小节
第二部分的推导，可知在原假设$H_0$下$T$服从自由度为$n_1+n_2-2$的
$t$分布。由此可得，在获得样本观测值$x_{1,1},\ldots,x_{1,n_1}$
与$x_{2,1},\ldots,x_{2,n_2}$后，相应的$p$值为
\[
    \hat{p} = 2\!\left(1-F^t_{n_1+n_2-2}(|t|)\right),
    \qquad t = \frac{\overline{x}_1-\overline{x}_2-\Delta}{\sqrt{s_p^2(1/n_1+1/n_2)}},
\]
其中$s_p^2$为将样本值代入统计量$S_p^2$后的取值，
$F^t_{n_1+n_2-2}$为分布$t(n_1+n_2-2)$的分布函数。
若事先给定了显著性水平$\alpha$，则拒绝域由
\[
    |t|>t_{\alpha/2}(n_1+n_2-2)
\]
给出。

若备择假设被替换为$H_1:\mu_1-\mu_2>\Delta_0$或
$H_1:\mu_1-\mu_2<\Delta_0$，则可以将
@eq:test_statistic_two_normal_mean_diff_var_equal
作为单侧检验统计量进行假设检验，相关的推导留给读者自己完成。
表\ref{table:test_two_normal_mean_diff_var_equal} 总结了
方差已知时，两个正态总体期望之差的假设检验方法。

方差$\sigma_1^2,\sigma_2^2$未知但相等时，两个正态总体期望之差$\mu_1-\mu_2$的假设检验方法
\label{table:test_two_normal_mean_diff_var_equal}
\begin{tabular}{ccccc}
!$H_0$ & !$H_1$ & !检验统计量 & !拒绝域 & !$p$值 \\
$\mu_1\!-\!\mu_2\!=\!\Delta_0$ & $\mu_1\!-\!\mu_2\!>\!\Delta_0$ & $\displaystyle T\!=\!\frac{\overline{X}_1-\overline{X}_2-\Delta_0}{\sqrt{S_p^2(1/n_1\!+\!1/n_2)}}$ & $t>t_{\alpha}(n_1\!+\!n_2\!-\!2)$ & $1\!-\!F^t_{n_1+n_2-2}(t)$ \\
$\mu_1\!-\!\mu_2\!=\!\Delta_0$ & $\mu_1\!-\!\mu_2\!<\!\Delta_0$ & $\displaystyle T\!=\!\frac{\overline{X}_1-\overline{X}_2-\Delta_0}{\sqrt{S_p^2(1/n_1\!+\!1/n_2)}}$ & $t<-t_{\alpha}(n_1\!+\!n_2\!-\!2)$ & $F^t_{n_1+n_2-2}(t)$ \\
$\mu_1\!-\!\mu_2\!=\!\Delta_0$ & $\mu_1\!-\!\mu_2\!\neq\!\Delta_0$ & $\displaystyle T\!=\!\frac{\overline{X}_1-\overline{X}_2-\Delta_0}{\sqrt{S_p^2(1/n_1\!+\!1/n_2)}}$ & $|t|>t_{\alpha/2}(n_1\!+\!n_2\!-\!2)$ & $2\!\left(1\!-\!F^t_{n_1+n_2-2}(|t|)\right)$
\end{tabular}

**（${}^\star$）两总体方差未知，且不能事先认为它们相等的情况。**
这种情况下，如下形式的假设检验问题
\[
    H_0: \mu_1-\mu_2=\Delta_0,\qquad H_1: \mu_1-\mu_2\neq \Delta_0
\]
（以及对$\mu_1-\mu_2$进行区间估计的问题）
被称为**Behrens–Fisher问题**，它曾是应用统计领域的一个
著名问题。对于Behrens–Fisher问题，理想情况下，我们希望找到一个
检验统计量$T$，使其满足如下条件：

1. $T$在原假设$H_0$下的概率分布是确切已知的
   （尤其是与方差$\sigma_1^2,\sigma_2^2$无关的）；

2. $T$可以表示为
   \[
       T = \phi\!\left(\overline{X}_1,\overline{X}_2,S_1^2,S_2^2\right),
   \]
   其中$\phi$是一个性态良好的函数。

3. 设$x_{1,1},\ldots,x_{1,n_1},x_{2,1},\ldots,x_{2,n_2}$
   为一组样本值。对任意实数$\alpha\neq0$及$\beta$，将样本值做变换
   \[
       x_{k,i}\mapsto \alpha x_{k,i}+\beta,
       \quad\forall i=1,\ldots,n_k,\,k=1,2
   \]
   后不会改变$p$值。

4. 设$x_{1,1},\ldots,x_{1,n_1},x_{2,1},\ldots,x_{2,n_2}$
   与$x_{1,1}',\ldots,x_{1,n_1}',x_{2,1}',\ldots,x_{2,n_2}'$
   为两组样本值，且有$|\overline{x}_1-\overline{x}_2-\Delta_0|
>|\overline{x}_1'-\overline{x}_2'-\Delta_0|,$
   $s_1^2=s_1'^2,$ $s_2^2=s_2'^2,$ 则前一组样本的$p$值小于
   后一组样本的$p$值；

上述四条性质都是比较自然的。然而，Linnik等人的工作[@linnik1968statistical]
基本上否定了具备上述性质的检验统计量的存在性，这也就是为什么
Behrens–Fisher问题曾长期是应用统计领域的难题。这里我们提及
两种较易实现的针对Behrens–Fisher问题的检验法；为简单起见设
$\Delta_0=0$。

- Bartlett–Scheffé检验：此类检验法可看成是由配对检验法
  衍生出来的。具体而言，对于两个样本容量相等（也就是$n_1=n_2$）的情形，
  考虑将$X_{1,i}$与$X_{2,i}$配成一对$(X_{1,i},X_{2,i})$，则由于
  $
X_{1,i}\sim\mathcal{N}(\mu_1,\sigma_1^2)
$，$X_{2,i}\sim\mathcal{N}(\mu_2,\sigma_2^2)$，
  且$X_{1,i}$与$X_{2,i}$相互独立，可知$X_{1,i}-X_{2,i}$服从
  正态分布$\mathcal{N}(\mu_1-\mu_2,\sigma_1^2+\sigma_2^2)$。
  接下来取检验统计量为
  \[
      T = \frac{\overline{X}_1-\overline{X}_2}{\sqrt{S_D^2/n}},
  \]
  其中
  \[
      S_D^2 = \frac{1}{n-1}\sum_{i=1}^n \big(X_{1,i}-\overline{X}_1-X_{2,i}+\overline{X}_2\big)^2,
  \]
  则在原假设$H_0$下$T$服从自由度为$n-1$的$t$分布，此后依照通常的
  $t$检验步骤计算$p$值/拒绝域即可。上述方法还可推广到
  $n_1\neq n_2$的情形；见Scheffé的原始论文[@scheffe1943solutions]
  以及教材[@dudewicz1988modern]第9.9节。
  Bartlett–Scheffé检验法的优点在于检验统计量在原假设下的分布
  是确切已知而与$\sigma_1^2$和$\sigma_2^2$无关的，而缺点则是检验结果
  会与配对的次序相关，且与接下来介绍的$t^\ast$检验法相比，在显著性水平
  与样本容量保持一致时，它通常更不容易在备择假设成立时拒绝原假设，
  从而第II类错误的概率更高。

- $t^\ast$检验：该类检验法基于如下统计量：
  \[
      T^\ast = \frac{\overline{X}_1-\overline{X}_2}{\sqrt{S_1^2/n_1+S_2^2/n_2}}.
  \]
  直观上看，$T^\ast$相当于将
@eq:test_statistic_two_normal_mean_diff_var_known
  中的方差替换为样本方差，故应当是一个合理的检验统计量，且不难看出
  原假设$H_0$下$T^\ast$的分布关于原点对称，故可以考虑用$|T^\ast|$
  做单侧检验。然而，$|T^\ast|$在原假设$H_0$下并不服从一个
  确切已知的分布，其分布与方差之比$\sigma_1^2/\sigma_2^2$有关；
  更具体地说，给定$c>0$，原假设下的概率$\mathbb{P}(|T^\ast|\geq c)$
  是$\sigma_1^2/\sigma_2^2$的函数，我们将这个函数暂记为
  $\beta(\sigma_1^2/\sigma_2^2;c)$。我国概率统计学科的奠基人、
  著名数学家许宝𫘧先生在他攻读博士期间完成的论文[@hsu1938contribution]
  中对$\beta(\sigma_1^2/\sigma_2^2;c)$的性质进行了详细的研究，
  其中的结论指出
  \[
      \begin{aligned}
      \sup_{\sigma_1^2,\sigma_2^2} \beta(\sigma_1^2/\sigma_2^2;c) &= 2\!\left(1-F^t_{\min\{n_1,n_2\}-1}(c)\right), \\
      \min_{\sigma_1^2,\sigma_2^2} \beta(\sigma_1^2/\sigma_2^2;c) &= 2\!\left(1-F^t_{n_1+n_2-2}(c)\right).
      \end{aligned}
  \]
  基于此，我们可以令$p$值为
  \[
      \hat{p} = \sup_{\sigma_1^2,\sigma_2^2}
      \beta\!\left(\sigma_1^2/\sigma_2^2;|t^\ast|\right)
      =2\!\left(1
      -F^t_{\min\{n_1,n_2\}-1}(|t^\ast|)
      \right),
  \]
  而显著性水平$\alpha$下的拒绝域则由
  \[
      |t^\ast|>t_{\alpha/2}(\min\{n_1,n_2\}-1)
  \]
  给出，该拒绝域给出的实际显著性水平可以保证小于等于$\alpha$。
  不过在$\sigma_1^2$与$\sigma_2^2$相差不大的情况下，上述$p$值
  与拒绝域会稍显保守。Welch [@welch1949further]则提出了如下近似：
  \[
      \beta(\sigma_1^2/\sigma_2^2;|t^\ast|)
      \approx 2\!\left(1-F^t_{\nu}(|t^\ast|)\right),
  \]
  其中[^1]
  \[
      \nu = \frac{(s_1^2/n_1+s_2^2/n_2)^2}{\frac{(s_1^2/n_1)^2}{n_1-1}
      +\frac{(s_2^2/n_2)^2}{n_1-1}}.
  \]
  相应的拒绝域则由$|t^\ast|>t_{\alpha/2}(\nu)$给出，但应当指出，
  该拒绝域给出的实际显著性水平并不能严格保证小于等于$\alpha$。

关于Behrens–Fisher问题的讨论还可参考[@dudewicz1988modern]
第9.9节、[@cox1974theoretical]例5.6与第5.2（iv）节，
以及论文[@scheffe1970practical]。

## 两个正态总体方差的假设检验*

设两个总体各自服从正态分布$\mathcal{N}(\mu_1,\sigma_1^2)$
与$\mathcal{N}(\mu_2,\sigma_2^2)$，其中期望$\mu_1,\mu_2$
与方差$\sigma_1^2,\sigma_2^2$均未知。考虑如下假设检验问题：
\[
    H_0: \sigma_1^2=\sigma_2^2,
    \qquad H_1:\sigma_1^2\neq \sigma_2^2.
\]
注意$H_0$与$H_1$均为复合假设。对于该假设检验问题，可令

```math {@eq:test_statistic_two_normal_var_ratio}
F = \frac{S_1^2}{S_2^2}
```

为双侧检验统计量。在原假设$H_0$下，$F$服从自由度为
$(n_1-1,n_2-1)$的$F$分布。故在获得样本观测值
$x_{1,1},\ldots,x_{1,n_1}$与$x_{2,1},\ldots,x_{2,n_2}$后，
相应的$p$值为
\[
    \begin{aligned}
    \hat{p} ={} & 2\min\left\{
    \mathbb{P}_{H_0}\!\left(
    \frac{S_1^2}{S_2^2}\geq \frac{s_1^2}{s_2^2}
    \right),
    \mathbb{P}_{H_0}\!\left(
    \frac{S_1^2}{S_2^2}\leq \frac{s_1^2}{s_2^2}
    \right)
    \right\} \\[2pt]
    ={} &
    2\min\left\{
    1-F^F_{n_1-1,n_2-1}\!\left(\frac{s_1^2}{s_2^2}\right),
    F^F_{n_1-1,n_2-1}\!\left(\frac{s_1^2}{s_2^2}\right)
    \right\},
    \end{aligned}
\]
其中$F^F_{n_1-1,n_2-1}$表示分布$F(n_1-1,n_2-1)$的分布函数。
而若事先给定显著性水平$\alpha$，则由临界值计算式
@eq:hypothesis_testing_critical_value_two-sided_2  可得
\[
    c_\alpha^u = F_{\alpha/2}(n_1-1,n_2-1),
    \qquad
    c_\alpha^l = F_{1-\alpha/2}(n_1-1,n_2-1),
\]
故拒绝域由
\[
    \frac{s_1^2}{s_2^2}
    >F_{\alpha/2}(n_1-1,n_2-1)\ \text{或}\
    \frac{s_1^2}{s_2^2}
    <F_{1-\alpha/2}(n_1-1,n_2-1)
\]
给出。

若备择假设被替换为$H_1:\sigma_1^2>\sigma_2^2$或
$H_1:\sigma_1^2<\sigma_2^2$，则可以将
@eq:test_statistic_two_normal_var_ratio
作为单侧检验统计量进行假设检验，相关的推导留给读者自己完成。
表\ref{table:test_two_normal_var_ratio} 总结了期望未知时，
对两个正态总体的方差进行假设检验的方法。

期望未知时，两个正态总体方差之比$\sigma_1^2/\sigma_2^2$的假设检验方法
\label{table:test_two_normal_var_ratio}
\begingroup
\begin{tabular}{ccccc}
!$H_0$ & !$H_1$ & !检验统计量 & !拒绝域 & !$p$值 \\
$\dfrac{\sigma_1^2}{\sigma_2^2}=1$
& $\dfrac{\sigma_1^2}{\sigma_2^2}>1$
& $F=\dfrac{S_1^2}{S_2^2}$ & $\dfrac{s_1^2}{s_2^2}>f_{\alpha}(n_1\!-\!1,n_2\!-\!1)$
& $1\!-\!F^F_{n_1-1,n_2-1}\!\left(\dfrac{s_1^2}{s_2^2}\right)$ \\
$\dfrac{\sigma_1^2}{\sigma_2^2}=1$
& $\dfrac{\sigma_1^2}{\sigma_2^2}<1$
& $F=\dfrac{S_1^2}{S_2^2}$ & $\dfrac{s_1^2}{s_2^2}<f_{1-\alpha}(n_1\!-\!1,n_2\!-\!1)$
& $F^F_{n_1-1,n_2-1}\!\left(\dfrac{s_1^2}{s_2^2}\right)$ \\
$\dfrac{\sigma_1^2}{\sigma_2^2}=1$
& $\dfrac{\sigma_1^2}{\sigma_2^2}\neq 1$
& $F=\dfrac{S_1^2}{S_2^2}$
& $\begin{aligned}
& \dfrac{s_1^2}{s_2^2}>f_{\alpha/2}(n_1\!-\!1,n_2\!-\!1)\ \text{或} \\[2pt]
& \dfrac{s_1^2}{s_2^2}<f_{1-\alpha/2}(n_1\!-\!1,n_2\!-\!1)
\end{aligned}$ & $\begin{aligned}
2\min\!\bigg\{
F^F_{n_1-1,n_2-1}\!\left(\frac{s_1^2}{s_2^2}\right)\!, \\[2pt]
1-F^F_{n_1-1,n_2-1}\!\left(\frac{s_1^2}{s_2^2}\right)\!
\bigg\}
\end{aligned}$
\end{tabular}
\endgroup

## 大样本情形下比例之差的假设检验*

设两个样本分别服从参数为$p_1$与$p_2$的伯努利分布，考虑如下原假设
与备择假设给出的假设检验问题：
\[
    H_0: p_1=p_2,\qquad H_1:p_1\neq p_2.
\]
我们只考虑样本容量$n_1$与$n_2$均足够大的情形。由中心极限定理可得，
随机变量

```math
\tilde{Z} = \frac{\overline{X}_1-\overline{X}_2}{\sqrt{p_1(1-p_1)/n_1+p_2(1-p_2)/n_2}}
```

在原假设$H_0$下近似服从标准正态分布$\mathcal{N}(0,1)$，然而
$\tilde{Z}$依赖于未知的参数$p_1,p_2$，不能直接作为检验统计量，
故类似于[第8.3节](/books/概率与数理统计/区间估计/两个总体下的区间估计/)最后一小节中
针对比例之差设计枢轴量的方法，我们考虑在大样本情形下将$p_1$与$p_2$
替换为它们的点估计量。不过，注意到原假设$H_0$下$p_1$与$p_2$取
相同的值，因而可以用
\[
    \widehat{\Pi} = \frac{\sum_{i=1}^{n_1}X_{1,i}+\sum_{i=1}^{n_2}X_{2,i}}{n_1+n_2}
\]
将两个样本合并起来对原假设下的$p_1=p_2$进行估计；有时会将
$\widehat{\Pi}$称为**合并比例**[^2]。
当$n_1+n_2$足够大时，$\widehat{\Pi}$可以作为原假设下$p_1=p_2$
的一个很好的近似。故我们最终取
\[
    Z = \frac{\overline{X}_1-\overline{X}_2}{
    \sqrt{\widehat{\Pi}(1-\widehat{\Pi})(1/n_1+1/n_2)}}
\]
为双侧检验估计量，它在原假设$H_0$下近似服从标准正态分布
$\mathcal{N}(0,1)$。由此可得$p$值为
\[
    \hat{p} = 2\!\left(1-\Phi(|z|)\right),
\]
其中
\[
    z = \frac{\overline{x_1}-\overline{x}_2}{
    \sqrt{\widehat{\pi}(1-\widehat{\pi})(1/n_1+1/n_2)}},
    \qquad
    \widehat{\pi} = \frac{\sum_{i=1}^{n_1}x_{1,i}+\sum_{i=1}^{n_2}x_{2,i}}{n_1+n_2}.
\]
而若事先设定了显著性水平$\alpha$，则拒绝域由
\[
    |z|> z_{\alpha/2}
\]
给出。

对于备择假设为$H_1:p_1<p_2$或$H_1:p_1>p_2$的单侧检验问题，
仍可利用上述方法导出相应的$p$值与拒绝域，我们将具体的推导留给读者完成。

[^1]: 该式给出的$\nu$一般不为整数，但仍可代入$t$分布 概率密度函数的定义式中并算出相应的分布函数值。
[^2]: 若原假设 换为$H_0:p_1-p_2=\Delta_0$，其中$\Delta_0$为非零值， 则不能再用合并比例来构造检验统计量。
