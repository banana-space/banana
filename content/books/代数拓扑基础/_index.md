---
title: 代数拓扑基础
---
这是《代数拓扑基础》（本科生课《代数拓扑(H)》）课程的讲义。
这一课程从单纯同调论开始，讨论复形的同调和上同调相关的内容。
谢谢从前有一只呜喵的授权。

在课程讲授的安排中，有一些内容需要解释：

- (1) 单纯同调论。本课程相较于一些经典的代数拓扑教材，
  花费了相当多的时间在单纯复形的同调以及单纯逼近定理和代数重分定理等细节上。
  这一方面是因为使用的教材由 Munkres 所著，在其 $\textit{Elements of Algebraic Topology}$
  一书的前两章中花费了大量篇幅事无巨细地讨论了单纯同调中的细节，
  另一方面是因为希望在单纯同调的讨论中建立起的思想和技巧
  可以类似地推广到奇异复形和胞腔复形上，以降低理解难度。

- (2) 正合序列和一些相关结论。囿于开课时间，抽象代数的课程尚未进行到正合序列的内容，
  为了内容的完整性，在第 3 章结束对相对同调的讨论中，需要补充正合序列的相关结论以供后续使用。

- (3) 上同调理论。限于课程时间，我们没有进一步讨论上同调环的内容。
  这篇讲义的本意是忠实地记录课程中授课教师的板书，
  因此在结束万有系数定理的证明之后没有再做进一步讨论。

注：在2022,2023学年的实际授课（吕志）中，上同调部分教到了上同调环，并且期末考核也考到了。

课程的主线按照下图进行，我们主要讨论单纯同调及其导出的同调群，
奇异同调理论和 CW 复形的同调。在课程的最后，我们讨论一些上同调的理论。

```tikz
\begin{tikzpicture}
        \node (P) at (0,0) {Poincar\'e};
        \node (FG) at (3.5,0.6) {fundamental group};
        \node (L) at (7.5,0.6) {homotopy};
        \node (HG) at (3.5,-0.6) {(co)homology group};
        \node (H) at (7.5,-0.6) {(co)homology theory};
        \node (GH) at (12.5,-0.6) {generalized (co)homology theory};
        \node (KT) at (17.25,-0.2) {$ K $-theory};
        \node (CD) at (17.35,-1) {cobordism theory};
        \draw[->] (P) -- (FG);
        \draw[->] (FG) -- (L);
        \draw[->] (P) -- (HG);
        \draw[->] (HG) -- (H);
        \draw[->] (H) -- (GH);
        \draw[->] (GH) -- (KT);
        \draw[->] (GH) -- (CD);
        \pgfsetfillopacity{0.15}
        \fill[cyan] (1.9,-0.4) rectangle (9.1,-0.8);
        \pgfsetfillopacity{1}
        \node (KP) at (5.5,-1.1) {key};
    \end{tikzpicture}
```
