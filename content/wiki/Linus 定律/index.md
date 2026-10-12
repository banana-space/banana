---
title: Linus 定律
categories: [计算机科学]
---

在[[软件工程]]中，**Linus 定律**是关于多人协作调试的一项经验判断。
大意是，参与测试和检查的人足够多，背景足够多样，
就更容易有人发现缺陷，并有人看出问题所在。
Eric S. Raymond 在《The Cathedral and the Bazaar》（《大教堂与集市》）中
提出这一表述，并以 Linux 的创建者 Linus Torvalds 的名字命名。
[@Raymond1998, Release Early, Release Often 一节]

## 表述与含义

Raymond 用下面这句格言描述多人参与软件调试的好处。

> Given enough eyeballs, all bugs are shallow.

可译为“只要有足够多的人检查，所有缺陷都容易被看清。”
Raymond 还给出了较完整的表述。当测试者和共同开发者足够多时，
几乎每个问题都能很快得到明确描述，并有人看出修复办法。
这里的“shallow”指问题对某位参与者而言容易理解和定位，
与缺陷造成的后果是否严重无关。
[@Raymond1998, Release Early, Release Often 一节，第 8 条经验]

发现异常的人与找到原因、完成修复的人可以不同。
用户即使不会修改代码，也能通过报告异常帮助开发者找到错误。

Raymond 将这一想法用于解释 Linux 和 fetchmail 的开发经验。
用户在不同环境中运行程序，会遇到开发者未曾遇到的问题。
开发者各有所长，可以从不同角度查找原因。
修复后及时发布新版本，也能减少其他人重复排查同一个错误的时间。
[@Raymond1998, Release Early, Release Often 和 When Is A Rose Not A Rose? 两节]

## 历史背景

20 世纪 90 年代，Linux 的开发者通过互联网协作，
频繁发布新版本，接收用户的错误报告和代码修改。
Raymond 原先认为，操作系统这类复杂软件需要由小群开发者精心设计，
等到较为完善后再发布。Linux 的开发方式促使他重新考虑这个看法。
他将小群开发者集中构建、发布间隔较长的方式比作“大教堂”，
将广泛接受贡献、频繁发布和修改的方式比作“集市”。
[@Raymond1998, The Cathedral and the Bazaar 一节]

1996 年，Raymond 接手邮件获取程序 popclient，后来将其发展为 fetchmail，
并尝试采用 Linux 式的协作方式。
1997 年 5 月，他在 Linux Kongress 会议上报告《大教堂与集市》，
用 Linux 和 fetchmail 的经验讨论多人协作为何能够改善软件。
Linus 定律就是文中对协作调试的一项概括。
本文所引的期刊版本于 1998 年发表于 First Monday。
[@Raymond1998, The Mail Must Get Through 和 Version and Change History 两节]

这篇文章也参与了随后关于开源开发的讨论。
1998 年 1 月，Netscape 宣布计划公开浏览器套件 Communicator 的源代码。
据 Raymond 在文章后记中的记述，Netscape 的技术负责人来信称，
他的文章是促成这一决定的重要启发。
[@Raymond1998, Epilog: Netscape Embraces the Bazaar! 一节]
同年 2 月，“open source”这一名称在一次讨论会上提出，
Open Source Initiative 也于同年成立，推广开放源码的开发方式。
[@OSIHistory]

## 例子与类比

下面几个例子中，人们不断尝试，并把已经确认的结果留给后来者。

::: example [随机配对的拼图]
把拼图看作反复随机配对的过程。
每次拼错就放开重试，拼对后则永久连接，以后不能拆散。
一次失败只消耗时间，一次成功却会留下结果。
即使连续几次都没有拼对，已经拼好的部分也不会减少。
随着尝试继续，新拼好的部分接到旧的部分上，图案便逐渐完整。
:::

::: example [缺陷修复的积累]
一个用户发现程序在空输入时出错，开发者据此修好这个问题。
后来另一个用户发现程序无法处理某种文件，开发者又补上相应的处理办法。
如果修好的问题不再出现，修改也不引入新缺陷，
不同时间完成的修复就能逐项保留下来，剩余问题越来越少。
:::

::: example [人类知识的积累]
人们通过试验、观察和推理获得知识，再通过文字、教学和其他记录传给后人。
学习者可以直接学习已有的算术方法和几何定理，
再用它们解决新的问题，无需重新经历最初发现这些方法和定理的过程。

一次探索可能没有结果，过去已经掌握的知识仍然可以保留。
一个人的探索可以中断，其他人也能依据留下的记录继续工作。
只要结论可靠、适用条件明确且记录得以保存，
后人就可以从前人已经到达的地方继续探索。
:::

::: example [数学证明的协作检查]
设一份证明中的可测函数列几乎处处收敛，
作者据此交换了极限与积分，却没有核实其他条件。
一位读者指出这个缺口，另一位读者找到一个共同的可积控制函数，
从而补上了使用[[Lebesgue 积分|控制收敛定理]]的依据。

将补全的论证整理为引理，并列明假设，以后就可以直接引用。
:::

::: example [文献校对与 Wiki 编辑]
设几位编辑共同校对一份数字化文献。
有人擅长辨认字形，有人熟悉专名，有人能察觉公式中的漏项。
每发现一处识别错误，就对照原件改正并记下修改依据。
后来的编辑可以查看记录，继续校对其余部分。
:::

## 尝试与积累的概率解释

前面的例子包含两个条件。尝试要有机会成功，成功的结果还要能够保留。
下面先计算反复尝试的成功概率，再讨论保留结果后整个任务如何逐步完成。

### 反复尝试

固定一个待解决的问题，设事件 $A_i$ 表示第 $i$ 次尝试成功，
并记 $p_i = \mathbb{P}(A_i)$。
若 $A_1, \ldots, A_n$ [[独立事件|相互独立]]，则由补事件公式可得
\[
\mathbb{P}\left(\bigcup_{i=1}^n A_i\right)
= 1 - \prod_{i=1}^n (1 - p_i).
\]
若每次成功的概率均为 $p \in (0,1)$，上式化为 $1-(1-p)^n$。
增加一次尝试带来的概率增量为 $p(1-p)^n$，随 $n$ 增大而减小。

这些尝试可以来自不同的人，也可以发生在不同时间。
对拼图，成功表示找到一个正确配对。
对软件，则需要明确考察的是发现某个缺陷，还是完成它的修复。
两者的成功概率通常不同。

::: remark [尝试之间的相关性]
实际尝试未必相互独立。若所有人运行相同的测试，
又都不熟悉同一部分代码，他们可能反复遗漏同一个错误。
在极端情形 $A_1 = \cdots = A_n$ 下，
至少成功一次的概率始终等于 $\mathbb{P}(A_1)$。
因此，使用上述公式时需要核实独立性假设，并按实际尝试估计成功概率。
:::

### 成功结果的保留

设一项任务有 $M \geq 1$ 个待完成的部分，
每个部分一旦完成就永久保留，失败的尝试不改变已有结果。
记第 $t$ 轮结束时已完成的部分数为 $K_t$，初始时 $K_0 = 0$，
并以 $Q_t = K_t/M$ 表示完成比例。则每次实际过程都满足
\[
Q_{t+1} \geq Q_t.
\]
这个单调性来自结果的保留，无需概率假设。

再假设每轮对每个尚未完成的部分尝试一次，成功概率均为 $p \in (0,1)$，
且对同一个部分，各轮尝试相互独立。
由上一小节的计算，每个部分经过 $t$ 轮完成的概率为 $1-(1-p)^t$。
对完成指示变量求和，由期望的线性性可得
\[
\mathbb{E}[Q_t] = 1-(1-p)^t.
\]
进一步，由并集的概率不等式，
\[
\mathbb{P}(K_t < M) \leq M(1-p)^t \longrightarrow 0.
\]
由于完成后不会退回未完成状态，整项任务以概率 $1$ 在有限轮内完成。
这里不要求不同部分之间的尝试相互独立。

::: remark [模型的适用范围]
对拼图，可以把待完成的部分取为一组正确配对，
这一简化忽略了几何位置对尝试顺序的限制。
对软件，可以取一批固定的缺陷，但需假设修复不被撤销，也不引入新缺陷。
人类知识的积累则没有预先给定的有限任务清单，
所以知识得以保存并不意味着所有问题最终都能解决。
:::

## 适用条件与局限

::: remark [公开代码与实际检查]
公开代码之后，仍需要有人花时间阅读和测试。
参与者可能集中检查熟悉的模块，留下无人关注的部分。
维护者还需要复现报告的问题、修复代码并发布新版本。如果这些工作无人处理，
增加报告数量只会使待处理的问题越积越多。
:::

::: example [Heartbleed]
Heartbleed 是开源密码库 OpenSSL 中的一处缺陷，
会使受影响的软件泄露内存内容。
含有缺陷的 OpenSSL 1.0.1 于 2012 年 3 月发布，
修复版本 1.0.1g 于 2014 年 4 月发布。
[@Heartbleed2014, What versions of the OpenSSL are affected? 一节]
这个被广泛使用的开源库中，严重缺陷仍存在了两年多。
:::

::: remark [检验经验判断的条件]
Linus 定律中的“足够多”没有给出具体人数或检查时间。
检验它时，需要说明有多少人实际参与检查、检查了哪些部分，
以及发现和修复缺陷各用了多长时间。
:::

## 参考文献

```bibliography
Raymond1998:
  type: article
  author: Eric S. Raymond
  year: 1998
  title: The Cathedral and the Bazaar
  journaltitle: First Monday
  volume: 3
  doi: 10.5210/fm.v3i2.578
  url: https://firstmonday.org/ojs/index.php/fm/article/download/578/499?inline=1
  note: 'Linus 定律的表述见 Release Early, Release Often 一节'
OSIHistory:
  type: online
  site: Open Source Initiative
  year: 2006
  title: History of the Open Source Initiative
  url: https://opensource.org/about/history-of-the-open-source-initiative
  note: '机构历史页面, 后续持续更新'
Heartbleed2014:
  type: online
  site: heartbleed.com
  author: Codenomicon
  year: 2014
  title: The Heartbleed Bug
  url: https://heartbleed.com/
  note: '漏洞发现团队发布的说明网站, 后续持续更新'
```

```terms
Linus 定律:
  en: Linus's law
```
