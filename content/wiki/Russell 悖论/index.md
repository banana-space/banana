---
title: Russell 悖论
aliases: [罗素悖论]
categories: [集合论]
---

<problems>
- “历史注记”一节第三段末尾的方括号中有一句尚未翻译的英文和译者留言，该节译文也需要润色。
- “历史注记”一节倒数第二段关于 Gödel 定理与 Frege 纲领的论述，与其后括号中的评论意见相互矛盾，需要整理。
</problems>

**Russell 悖论**是 1901 年由英国数学家 [[Bertrand Russell]]
发现的集合论悖论，是逻辑学、集合论的悖论中最著名的。Russell
悖论指出，无限制的[[分出公理]]与[[外延公理]]矛盾。该悖论亦由 Ernst Zermelo
于 1899 年独立发现，但他并未发表，只告诉了 Göttingen 大学的
David Hilbert、Edmund Husserl 等学者。Cantor，
集合论的奠基者，于 19 世纪 90 年代末，已预见到形式化他的理论将导致矛盾，
并写信告诉 Hilbert 与 Richard Dedekind，这就是[[Burali-Forti 悖论]]。

## 陈述

无限制分出公理假设对每个性质 $P(x)$ 都存在一个集合
$\{x\mid P(x)\}$ 恰包含满足此性质的东西。现考虑
$$
R=\{x\mid x\notin x\}.
$$
那么依定义，$R\in R$ 推出 $R\notin R$，$R\notin R$ 推出
$R\in R$，即得悖论。故无限制分出公理不可能成立。

两种主要的避免该悖论的方法在 1908 年出现：Russell
自己的[[Russell 简单类型论]]和 Zermelo 集合论。具体地说，Zermelo
限制了分出公理的使用。Zermelo 集合论随着 Abraham Fraenkel与Thoralf Skolem分别独立
的进一步发展，已成为现代数学中标准的 [[ZFC 集合论]]。
Russell 和 Zermelo 解决悖论的主要区别在于，
Zermelo 保持标准逻辑语言，修改集合论公理，
而 Russell 则修改逻辑语言本身。
ZFC 所使用的标准逻辑语言后被 Thoralf Skolem 延续Frege的方式整理为一个[[一阶语言]]。

## 通俗形式

较常见的通俗形式是**理发师悖论**，即如一个理发师恰给
“不给自己理发”的人理发，那么他是否给自己理发呢？
他不管给不给自己理发，都将违反自己的原则。

## 回应

矛盾可以推出任意命题，因此 Russell 悖论动摇了集合论的基础。
由于集合论被视为所有其他数学分支的公理化基石，
Russell 悖论威胁着整个数学的基础。在 20 世纪初，
这激发了大量的研究来发展无矛盾的集合论。

1908 年，Ernst Zermelo 提出了一套集合论公理，
用他的较弱的分出公理代替了无限制分出公理，避免了集合论悖论。
20 世纪 20 年代，Abraham Fraenkel、Thoralf Skolem 以及
Zermelo 自己改进了这套公理，形成了 [[ZFC 集合论]]。
直到今日，ZFC 仍是典范的公理化集合论的方法。

ZFC 并不假设对每个性质 $P$，都有集合 $\{x\mid P(x)\}$
恰包含满足该性质的东西。它只说，如已经有个集合 $X$，
则有满足该性质的元素构成的子集 $\{x\in X\mid P(x)\}$。
为弥补这一减弱对实际构造集合的限制，ZFC 中还有好几条公理来凭空构造集合。
上面悖论中的对象 $R$ 在 ZFC 中做不出，这就避免了悖论。
在 ZFC 的一些扩展中，$R$ 可作为[[类]]出现。

虽然 ZFC 中的 [[von Neumann 宇宙|von Neumann 层级]]描述了类似于类型层级的概念，
但 ZFC 本身对[[类型]]只字不提。Zermelo 本人从不接受 Skolem
用[[一阶语言]]对 ZFC 的表述。如 José Ferreirós 所强调，
Zermelo 坚持“分出公理中的性质、替换公理中的函数应能够是
‘完全任意的’ [ganz-beliebig]；”这一说法的现代解释是 Zermelo
希望包括高阶量化，以避免 [[Löwenheim–Skolem 定理|Skolem 佯谬]]。
大约在 1930 年，Zermelo 也（显然独立于 von Neumann 地）
引入了良基公理。因此，如 Ferreirós 所观察，
“通过禁止‘循环’和‘不接地’的集合，
它（ZFC）融合了[[类型论]]的一个重要动机——论元类型原则
（大抵指所论及的东西都得有个类型——译者注）。”
Zermelo 偏好的[[二阶逻辑|二阶]] ZFC 包含良基公理，
且允许丰富的层级结构。Ferreirós 写道：“Zermelo 的‘层级’
本质上与 Gödel、Tarski 给出的[[Russell 简单类型论]]的现代版本中的类型是一回事。”
Zermelo 将其模型展开成的累积层次，
实际上可描述为允许超限类型的累积类型论的宇宙。
（一旦我们从非[[谓词]]化的观点出发，放弃类是构造出来的这一想法，
接受超限类型就是自然的。）因此，简单类型论和 ZFC
基本可视为谈论相同的目标对象的系统，而主要区别在于，
类型论依赖于强高阶逻辑，而 Zermelo 采用二阶逻辑，
ZFC 也可用一阶逻辑写出。层级结构的一阶‘描述’要弱得多，
正如[[Löwenheim–Skolem 定理|可数模型存在]]，
即 Skolem 佯谬，所表明。但它有些重要的优点。

ZFC 中，只要给定了个集合 $A$，便能用分离公理定义 $B=\{x\in A\mid x\notin x\}$
为 $A$ 中不包含自己的元素所构成的集合。Russell 悖论的论证表明
$B\notin A$。这也就说明 ZFC 中没有万集之集。

由 Zermelo 等人，特别是 John von Neumann 的工作，ZFC 所“自然”
描述的对象的结构最终清晰起来：它们组成 [[von Neumann 宇宙]] $V$，
而 $V$ 是由空集出发[[超限]]地迭代幂集运算建起来的。于是，
现在又有了非公理化地作集合论推理而又能避免 Russell
悖论的方法——只讨论 $V$ 的元素。至于集合是否适于以这种方式看待，
便是[[数学哲学]]的争论了。

Russell 悖论的其它基本方案更近于[[类型论]]的解决方案包括
Quine 的[[新基础集合论]]与 [[Scott–Potter 集合论]]。

## 历史注记

Russell 是于 1901 年五月或者六月发现这个悖论的。他在 1919
年写的 *Introduction to Mathematical Philosophy*（《数学哲学导论》）
中自己解释道，他“试图在 Cantor 对‘没有最大基数’的证明中找漏洞”。
1902 年，他给
Gottlob Frege 写信发表了他在 Frege 1879 年的著作
*Begriffsschrift*（《概念文字》）
中发现的悖论，并从逻辑和集合论两个角度，
从 Frege 对谓词的定义出发，框出以下问题：

> 我只遇到一个困难。你说谓词（此处指带自由变元的语句
> ——译者注）可以作为变元。我以前也这么认为，
> 但现在由于以下矛盾我十分怀疑。令 $w$ 为谓词
> “不谓自身之谓词”。那么 $w$ 是否谓其自身？
> 每一个答案都推出其否定。因此我们必须认为 $w$ 并非谓词。
> 同样地，没有类恰能包含所有不属于自身的类。由此，
> 我得出结论，某些情况下，由一个句子定义出来的对象 [Menge]
> 并不能组成一个整体。

Russell 在他 1903 年的 *The Principles of Mathematics*
（《数学原理》）一书中继续详细阐述了此事。
他在书中重复了自己第一次发现此悖论的经历：

> 在离开基本问题之前，有必要再仔细观察一下这个已经提到的，
> 关于不谓自身之谓词的奇怪矛盾。
> 我可以说是在努力重整 Cantor 的证明时来到这里的……

正在 Frege 准备他的 *Grundgesetze der Arithmetik*
（《算术基本律》）
第二卷的时候，Russell 就此悖论写信给 Frege。Frege 马上回应了
Russell；他在 1902 年 6 月 22 日就回了信。Frege
随后写了个附录承认该悖论，并提出了一个 Russell 在《数学原理》
中为此背书，但后来有人认为不太满意的解决办法。对应地，
Russell 也去到打字机旁，增加了一个关于类型论的附录。[For his part,
Russell had his work at the printers and he added
an appendix on the doctrine of types. 我不明白怎么翻译。
中文各句之间衔接也不太自然，可能有个人看一遍这些中文然后重述会得到更好的。]

Ernst Zermelo 在他 1908 年的
（与他的“第一个公理集合论”同时发表的）
*A new proof of the possibility of a well-ordering*
（《良序定理的新证明》）一书中称他先发现了 Cantor [[朴素集合论]]中的悖论。
他说：“然而，即便 Russell 悖论的基本形式，也足以说服他们
[J. König, Jourdain, F. Bernstein]，
解决困难的办法不是放弃良序，而是限制集合的概念。”
他在脚注 9 中称：

> 1903，366–368 页。然而，我自己独立于 Russell 发现了此悖论，
> 并在 1903 年之前就与 Hilbert 教授等人交流过。

Frege 给 Hilbert 寄了一份他的《算术基本律》。
如上所述，Frege 的最后一卷提到了 Russell 与他说的悖论。
1903 年 11 月 7 日，Hilbert 收到 Frege 的最后一卷书后，
给他写了一封信，提到 Russell 悖论，“我相信 Zermelo
博士已在三四年前发现”。Zermelo 的论证的书面版本可在
Edmund Husserl 的遗稿中找到。

1923 年，Ludwig Wittgenstein 提出以下“解决”Russell
悖论的办法：

> 一个函数不能做其本身参数的原因是函数的符号已经包含了其参数的原型，
> 因而不能包含它自己。这是因为，比如假设函数 $F(\cdot)$
> 可以是它自己的参数。这样就有个命题 $F(F(\cdot))$，
> 其中外层的 $F$ 和内层的 $F$ 必须有不同的含义，
> 因为内层的函数形式是 $O(\cdot)$ 而外层的形式是 $Y(O(\cdot))$。
> 只有字母 $F$ 是这两个函数的共同点，但字母本身并不说明问题。
> 只要我们将 $F(F(\cdot))$ 写成
> $\operatorname{do}: F(O(\cdot)).\ O(\cdot)=F(\cdot)$
> 而不是 $F(F(\cdot))$，事情马上就清楚了。这解决了 Russell
> 悖论。（*Tractatus Logico-Philosophicus*（《逻辑哲学论》），**3**.333）

Russell 和 Alfred North Whitehead 写了三卷本《数学原理》，
希望完成 Frege 未竟的事业。他们试图用专门设计的[[类型论]]来消除
Russell 悖论。虽然他们成功给算术建了地基，
但他们的办法并不显然是纯逻辑的。虽然《数学原理》避免了已知的悖论，
允许了大量数学推导，它的体系又带来了新问题。

无论如何，Kurt Gödel 在 1930–1931 年证明了《数学原理》
中在称为[[一阶逻辑]]的大部分逻辑系统，
是[[Gödel 完备性定理|完备]]的，而 [[Peano 算术]]只要相容就会不完备。
这被广泛——虽然不是被所有人——认为是证明了 Frege
的逻辑学纲领不可能完成。
（这是谁写的？完备性定理与不完备性定理说的是完全两件事，
与一阶逻辑完备性相对应的是高阶逻辑在标准语义下的不完备性。
把Russell悖论视为对集合论的攻击完全是荒谬的，
这是对Frege作为逻辑学家乱用作为概念外延的集合概念的惩罚而不是对Cantor，
Zermelo等集合论奠基者的惩罚。）

纪念 Russell 悖论一百周年的国际会议在 2001 年于慕尼黑举行，
会议记录也已出版。

```terms
Russell 悖论:
  en: Russell's paradox
  de: Russellsche Antinomie
  fr: Paradoxe de Russell
```
