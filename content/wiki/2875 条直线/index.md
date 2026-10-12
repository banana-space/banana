---
title: $2875$ 条直线
aliases: ['2875']
categories: [计数几何]
navboxes: [计数几何]
---

**$2875$ 条直线**是[[计数几何]]中的著名结论，是说：
在[[射影空间]] $\mathbb{P}^4$ 中，处于一般位置的[[五次三维簇]]中含有
$2875$ 条[[射影直线|直线]]。

这一结论可以通过[[代数几何]]中的标准方法证明。
然而，[@CandelasEtal1991] 提出一种用[[镜像对称]]以计算这一数目的方法。
他们构造了与该五次三维簇互为“镜像”的 [[Calabi–丘流形]]，
并通过该镜像上的计算得到了正确的数目。
这也是最早说明镜像对称在数学上具有深刻含义的结论之一。

## 推广

根据[[代数几何]]中的标准方法证明，也就是看作直线的[[Hilbert 概形]]（作为[[Graßmann 形]]的子概形，
也称作[[Fano 概形]]），
将其表示成重言商丛的对称积的最高阶[[陈类]]，
我们不难看出 $2875$ 条直线问题就是[[$27$ 条直线]]问题的推广。
因此类似方法也可解决下述问题：

::: exercise
$\mathbb P^n$内一般位置的$d=2n-3$次的超曲面上的直线个数是多少？
:::

例如，一样的方法可以计算得到，
$\mathbb P^8$内一般位置的$13$次的超曲面上的直线个数是$210776836330775$（利用Macaulay 2编程得到）。
当然这个方法成立得益于如下结果：

::: theorem
如果$X\subset\mathbb P^n$是一般位置的$d\geq1$次的超曲面，那么其 Fano 概形是既约的且维数是$2n-d-3$。
:::

::: proof
参见 [@3264andallthat, 定理 6.34]。
:::

## 参考文献

原始文献：

```bibliography
CandelasEtal1991:
  type: article
  author: ['Candelas, Philip', 'de la Ossa, Xenia C.', 'Green, Paul S.', 'Parkes, Linda']
  year: 1991
  title: A pair of Calabi–Yau manifolds as an exactly soluble superconformal theory
  journaltitle: Nuclear Physics B
  volume: 359
  number: 1
  pages: '21-74'
  doi: 10.1016/0550-3213(91)90292-6
  zbmath: '1098.32506'
  label: 'Candelas 等, 1991'
```

更多参考：

```bibliography
3264andallthat:
  type: book
  author: ['Eisenbud, David', 'Harris, Joe']
  year: 2016
  title: '3264 and All That: A Second Course in Algebraic Geometry'
  publisher: Cambridge University Press
```
