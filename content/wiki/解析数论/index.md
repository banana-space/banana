---
title: 解析数论
categories: [解析数论]
---

<problems>
- “历史”“加性数论”“Diophantus 问题”各节需要扩充。
- “乘性数论”一节中 $\pi(x;a,q)$ 的定义式似乎给出的是素数的集合而不是其个数；按 $p=an+q$ 的写法，模是 $a$，推广的素数定理中的 $\phi(q)$ 似乎应为 $\phi(a)$。
</problems>

**解析数论**为数论中的分支，它使用由[[数学分析]]中发展出的方法作为工具来解决[[数论]]中的问题。
一般人们认为解析数论的开端是Dirichlet于1837年引入[[Dirichlet L 函数]]来首次证明[[Dirichlet 素数定理|Dirichlet 同余类定理]]的时候。
解析数论中广为人知的成果包括在质数（包括[[素数定理]]和[[Riemann zeta 函数]]）和加性数论（例如[[Goldbach 猜想]]和[[Waring 问题]]）方面的结论。

## 历史

## 问题和结论

解析数论的定理及成果通常不是有关整数精确结构的结果——这方面用代数或是几何上的工具比较合适。
解析数论的定理一般会给出一些数论相关函数的范围与估计。

### 乘性数论

Euclid 证明了质数有无限多个，而一个重要的问题是找到质数的渐近分布，
也就是可以大略描述有多少质数小于给定的整数。
Gauß 在计算大量的质数后提出其猜想，他认为小于或等于一个很大整数$N$的质数个数，接近以下的定积分：
\[
\int_2^N\frac{dt}{\log t}.
\]
Riemann 在1859年利用[[复分析]]以及一个特殊的亚纯函数（后来称为[[Riemann zeta 函数]]）来推导
小于等于给定实数$x$的质数个数的解析解。
值得一提的是，Riemann 公式的主要项就是上述的积分，因此让 Gauß 的猜想更加重要。
Riemann 找到了解析解中的误差项和 Riemann $\zeta$ 函数在复平面上的零点的密切关系，
因此质数分布的形式也和 Riemann $\zeta$ 函数的复零点有关。
Hadamard 和 de la Vallée Poussin 采用 Riemann 的想法，通过对 $\zeta$ 函数零点分布的研究，
致力证明 Gauß 的猜想。如果记 $\pi(x)$ 为小于等于 $x$ 的质数个数，那么他们证明了
\[
\lim_{x\rightarrow\infty}\frac{\pi(x)}{x/\log x}=1.
\]
（解析数论中，通常记$\log x$为底数为$e$的自然对数。）
上述的结果被称为质数定理，是解析数论的核心结果。
简单地说，质数定理意为给定一个大数字$N$，小于等于$N$的质数个数大约有$N/\log(N)$个。

更一般地，人们同样可以对质数在等差数列中的分布提出相同的问题，即对于
\[
\pi(x;a,q):=\{p\leq x:p=an+q,n\in\mathbb N\}
\]
的估计，其中$(a,q)=1$。
作为解析数论最初的应用，Dirichlet 证明了当 $(a,q)=1$ 时，等差数列 $\{an+q\}$ 中含有无穷多个质数。
质数定理可以被推广为
\[
\lim_{x\rightarrow\infty}\frac{\pi(x;a,q)\phi(q)}{x/\log x}=1,
\]
其中$\phi$为[[Euler 函数]]。

另外，数论中仍然有许多现有方法无法解决的猜想，如[[孪生素数猜想]]等。
如果假设[[Elliott–Halberstam 猜想]]是正确的，
那么人们证明了存在无穷多个质数$p$使得某个$p+k$也是质数，其中$k$是不大于$12$的正偶数。
无条件地（即若不假设任何猜想），人们已经证明存在无穷多个质数$p$使得某个$p+k$也是质数，
其中$k$是不大于$246$的正偶数。

### 加性数论

### Diophantus 问题

## 主要方法

### Dirichlet 级数

<see>[[Dirichlet 级数]]</see>

### Riemann zeta 函数

<see>[[Riemann zeta 函数]]</see>

```terms
解析数论:
  en: analytic number theory
  de: Analytische Zahlentheorie
  fr: théorie analytique des nombres
```
