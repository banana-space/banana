---
title: Dynkin 图
aliases: [仿射 Dynkin 图]
categories: [Lie 理论]
notices:
  - name: 问题
    items:
      - “自同构”一节中 $\mathrm{D}_4$ 与 $\mathrm{E}_6$ 两项缺少 Lie 代数侧的说明。
      - “折叠”一节中，$\widetilde{\mathrm{D}}_{n+1}\to \widetilde{\mathrm{B}}_n\to \mathrm D_{n+2}^{(2)}$ 与 $\widetilde{\mathrm{D}}_4\to \widetilde{\mathrm{B}}_3\to \mathrm D_4^{(2)}\to\mathrm A_2^{(2)}$ 两项中 $\mathrm D^{(2)}$ 的下标似乎与“仿射 Dynkin 图”一节的编号约定（$\mathrm{D}_{k+1}^{(2)}$ 有 $k+1$ 个顶点）不符；按图中的顶点数，似乎应分别为 $\mathrm D_n^{(2)}$ 和 $\mathrm D_3^{(2)}$。
navboxes: [Lie 理论]
---

**Dynkin 图**
是一组允许有向边和重边的有限[[图]]，由[[Eugene Dynkin]]定义。

每个Dynkin 图都有一个字母 A–G 加上正整数下标构成的编号 $X_n$（例如 $\mathrm{A}_1,\mathrm{F}_4$
等）。
其中字母 A、B、C、D 对应
[[特殊线性群|$(\mathrm{A}_n)_{n\ge 1}$]]、
[[特殊正交群|$(\mathrm{B}_n)_{n\ge 2}$]]、
[[辛群|$(\mathrm{C}_n)_{n\ge 3}$]]、
[[特殊正交群|$(\mathrm{D}_n)_{n\ge 4}$]] 四个无限族；
字母 E、F、G 对应例外族，共包含五个图 [[E6|$\mathrm{E}_6$]]、[[E7|$\mathrm{E}_7$]]、
[[E8|$\mathrm{E}_8$]]、[[F4|$\mathrm{F}_4$]]、[[$\mathrm{G}_2$]]。

Dynkin 图和很多数学对象的分类联系密切。它们分类[[根系]]，从而也就分类：

- [[代数闭域]]上[[半单 Lie 代数]]。

- [[分裂约化群]]的[[同源]]类。

所有 Dynkin 图中，只有 A、D、E 三类仅含单边，即没有重边。
这些 Dynkin 图被用于以下分类问题，也称为 [[ADE 分类]]：

- [[$\mathrm{SO}(3)$]] 和 [[$\mathrm{SU}(2)$]] 的有限[[子群]]。

- [[代数闭域]]上，只有有限种[[不可分解对象|不可分解]][[箭图表示|表示]]的[[箭图]]。

- [[du Val 奇点]]，也称 ADE 奇点。

通常我们考察[[连通]]的Dynkin 图，它们对应于分类中的单对象。
对于不连通的Dynkin 图，我们也可以逐个考虑其[[连通分支]]。
在记号上，常使用 $X_m\times Y_n$ 表示 $X_m$ 和 $Y_n$ 的无交并，
可推广到多个分支的情况。

每个Dynkin 图都对应一个 [[Cartan 矩阵]]，类似于[[邻接矩阵]]，完全刻画了该 Dynkin 图的信息。

[[Coxeter 群]]的分类使用和 Dynkin 图类似的**Coxeter 图**。
Coxeter 图包含去掉边定向的 Dynkin 图 A–G 类（此时B 类和 C 类 Coxeter 图同构），
并额外引入了 H、I 两类。

Dynkin 图可以推广为**仿射 Dynkin 图**，它们源于对仿射Lie 代数的分类，
可以在 Dynkin 图的基础上折叠并加入一些额外结构得到。

如果Cartan 矩阵的[[特征值]]全正，则它们对应于有限的Coxeter 群，
因此也称普通的Dynkin 图为**有限 Dynkin 图**，
通常不加定语修饰的Dynkin 图也指有限 Dynkin 图。
如果Cartan 矩阵的特征值全非负且含零，则对应于仿射 Dynkin 图。

## 分类

::: definition
一个 Dynkin 图或仿射 Dynkin 图的**秩**指其总顶点数。
若其不包含重边，则称之为**单边**的。
:::

### 有限 Dynkin 图

有限 Dynkin 图 $X_n$ 的分类如下：

```tikz
\begin{tikzpicture}[scale=.8, every path/.style={line width=.75}]
    \begin{scope}
        \node at (-1, 0) {$\mathrm{A}_n$};
        \draw (0, 0) -- (2.4, 0) (3.1, 0) -- (5.5, 0);
        \draw[dotted] (2.4, 0) -- (3.1, 0);
        \foreach \x in {0, 1, 2, 3.5, 4.5, 5.5} {
            \draw[fill=white] (\x, 0) circle (.1);
        }
    \end{scope}
    \begin{scope}[shift={(0, -1)}]
        \node at (-1, 0) {$\mathrm{B}_n$};
        \draw (0, 0) -- (2.4, 0) (3.1, 0) -- (4.5, 0)
            (4.5, .05) -- (5.5, .05) (4.5, -.05) -- (5.5, -.05)
            (4.95, .15) -- (5.1, 0) -- (4.95, -.15);
        \draw[dotted] (2.4, 0) -- (3.1, 0);
        \foreach \x in {0, 1, 2, 3.5, 4.5, 5.5} {
            \draw[fill=white] (\x, 0) circle (.1);
        }
    \end{scope}
    \begin{scope}[shift={(0, -2)}]
        \node at (-1, 0) {$\mathrm{C}_n$};
        \draw (0, 0) -- (2.4, 0) (3.1, 0) -- (4.5, 0)
            (4.5, .05) -- (5.5, .05) (4.5, -.05) -- (5.5, -.05)
            (5.05, .15) -- (4.9, 0) -- (5.05, -.15);
        \draw[dotted] (2.4, 0) -- (3.1, 0);
        \foreach \x in {0, 1, 2, 3.5, 4.5, 5.5} {
            \draw[fill=white] (\x, 0) circle (.1);
        }
    \end{scope}
    \begin{scope}[shift={(0, -3.2)}]
        \node at (-1, 0) {$\mathrm{D}_n$};
        \draw (0, 0) -- (2.4, 0) (3.1, 0) -- (4.5, 0)
            (4.5, 0) -- (5.5, .5) (4.5, 0) -- (5.5, -.5);
        \draw[dotted] (2.4, 0) -- (3.1, 0);
        \foreach \x in {0, 1, 2, 3.5, 4.5} {
            \draw[fill=white] (\x, 0) circle (.1);
        }
        \foreach \y in {.5, -.5} {
            \draw[fill=white] (5.5, \y) circle (.1);
        }
    \end{scope}
    \foreach \n in {6, 7, 8} {
        \pgfmathsetmacro{\m}{\n - 2}
        \begin{scope}[shift={(0, 2 - 1.8 * \m)}]
            \node at (-1, 0) {$\mathrm{E}_{\n}$};
            \draw (0, 0) -- (\m, 0) (2, 1) -- (2, 0);
            \foreach \x in {0, ..., \m} {
                \draw[fill=white] (\x, 0) circle (.1);
            }
            \draw[fill=white] (2, 1) circle (.1);
        \end{scope}
    }
    \begin{scope}[shift={(0, -9.8)}]
        \node at (-1, 0) {$\mathrm{F}_4$};
        \draw (0, 0) -- (1, 0) (2, 0) -- (3, 0)
            (1, .05) -- (2, .05) (1, -.05) -- (2, -.05)
            (1.45, .15) -- (1.6, 0) -- (1.45, -.15);
        \foreach \x in {0, 1, 2, 3} {
            \draw[fill=white] (\x, 0) circle (.1);
        }
    \end{scope}
    \begin{scope}[shift={(0, -10.8)}]
        \node at (-1, 0) {$\mathrm{G}_2$};
        \draw (0, .08) -- (1, .08) (0, 0) -- (1, 0) (0, -.08) -- (1, -.08)
            (.4, .2) -- (.6, 0) -- (.4, -.2);
        \foreach \x in {0, 1} {
            \draw[fill=white] (\x, 0) circle (.1);
        }
    \end{scope}
\end{tikzpicture}
```

在编号中，下标 $n$ 总是指图中顶点个数，也是它们的秩。

在严格的记号中，为保证记号的唯一性，
只在 $n\ge 2$ 时使用 $\mathrm B_n$，
只在 $n\ge 3$ 时使用 $\mathrm C_n$，
只在 $n\ge 4$ 时使用 $\mathrm D_n$。
此外有时候也会使用不严格的记号 $\mathrm E_n$。

关于不严格记号的使用，详见 @例外同构。

### 仿射 Dynkin 图

仿射 Dynkin 图分为三个系列，记号为 $X_n^{(i)}$，这里 $X_n$ 是原本的有限 Dynkin 图记号，
$i=1,2,3$ 表示系列编号，和有限 Dynkin 图的[折叠](@折叠)现象的重数有关。

- 其中，$X_n^{(1)}$ 是最常见的系列，也被称为**扩展 Dynkin 图**，
  也被记作 $\widetilde X_n=X_n^{(1)}=X_n^+$。
  每个扩展 Dynkin 图都来自于一个有限的 Dynkin 图，
  并在其基础上添加一个额外的顶点和从该顶点连出的若干条边得到，因为它们并未发生折叠（重数为 $1$），
  故由此得名。

  扩展 Dynkin 图 $\widetilde X_n$ 的分类如下：

  ```tikz
  \begin{tikzpicture}[scale=.8, every path/.style={line width=.75}]
      \begin{scope}
          \node at (-1, 0) {$\widetilde{\mathrm{A}}_n$};
          \draw (0, 0) -- (2.4, 0) (3.1, 0) -- (5.5, 0) (0,0) -- (2.75, -1) -- (5.5, 0);
          \draw[dotted] (2.4, 0) -- (3.1, 0);
          \foreach \x in {0, 1, 2, 3.5, 4.5, 5.5} {
              \draw[fill=white] (\x, 0) circle (.1);
          }
          \draw[fill=black] (2.75, -1) circle (.1);
      \end{scope}
      \begin{scope}[shift={(0, -2)}]
          \node at (-1, 0) {$\widetilde{\mathrm{B}}_n$};
          \draw (0, .5) -- (1, 0) -- (2.4, 0) (3.1, 0) -- (4.5, 0)
              (4.5, .05) -- (5.5, .05) (4.5, -.05) -- (5.5, -.05)
              (4.95, .15) -- (5.1, 0) -- (4.95, -.15) (0, -.5) -- (1, 0);
          \draw[dotted] (2.4, 0) -- (3.1, 0);
          \foreach \x in {1, 2, 3.5, 4.5, 5.5} {
              \draw[fill=white] (\x, 0) circle (.1);
          }
          \draw[fill=white] (0, .5) circle (.1);
          \draw[fill=black] (0, -.5) circle (.1);
      \end{scope}
      \begin{scope}[shift={(0, -3.5)}]
          \node at (-1, 0) {$\widetilde{\mathrm{C}}_n$};
          \draw (1, 0) -- (2.4, 0) (3.1, 0) -- (4.5, 0)
              (4.5, .05) -- (5.5, .05) (4.5, -.05) -- (5.5, -.05)
              (5.05, .15) -- (4.9, 0) -- (5.05, -.15)
              (0, .05) -- (1, .05) (0, -.05) -- (1, -.05)
              (.45, .15) -- (.6, 0) -- (.45, -.15);
          \draw[dotted] (2.4, 0) -- (3.1, 0);
          \foreach \x in {1, 2, 3.5, 4.5, 5.5} {
              \draw[fill=white] (\x, 0) circle (.1);
          }
          \draw[fill=black] (0, 0) circle (.1);
      \end{scope}
      \begin{scope}[shift={(0, -5.2)}]
          \node at (-1, 0) {$\widetilde{\mathrm{D}}_n$};
          \draw (0, .5) -- (1, 0) -- (2.4, 0) (3.1, 0) -- (4.5, 0)
              (4.5, 0) -- (5.5, .5) (4.5, 0) -- (5.5, -.5)
              (0, -.5) -- (1, 0);
          \draw[dotted] (2.4, 0) -- (3.1, 0);
          \foreach \x in {1, 2, 3.5, 4.5} {
              \draw[fill=white] (\x, 0) circle (.1);
          }
          \foreach \y in {.5, -.5} {
              \draw[fill=white] (5.5, \y) circle (.1);
          }
          \draw[fill=white] (0, .5) circle (.1);
          \draw[fill=black] (0, -.5) circle (.1);
      \end{scope}
      \foreach \n in {6, 7, 8} {
          \pgfmathsetmacro{\m}{\n - 2}
          \pgfmathsetmacro{\k}{1 - (\n - 7)^2}
          \pgfmathsetmacro{\l}{-\k - 1}
          \begin{scope}[shift={(\k, -1 - 1.8 * \m)}]
              \node at (\l, 0) {$\widetilde{\mathrm{E}}_{\n}$};
              \draw (0, 0) -- (\m, 0) (2, 1) -- (2, 0);
              \foreach \x in {0, ..., \m} {
                  \draw[fill=white] (\x, 0) circle (.1);
              }
              \draw[fill=white] (2, 1) circle (.1);
          \end{scope}
      }
      \draw[fill=black] (2, -6.2) circle (.1);
      \draw[fill=black] (0, -10) circle (.1);
      \draw[fill=black] (7, -11.8) circle (.1);
      \draw (2, -6.3) -- (2, -7.1) (6.1, -11.8) -- (6.9, -11.8)
            (.1, -10) -- (.9, -10);
      \begin{scope}[shift={(1, -12.8)}]
          \node at (-2, 0) {$\widetilde{\mathrm{F}}_4$};
          \draw (0, 0) -- (1, 0) (2, 0) -- (3, 0)
              (1, .05) -- (2, .05) (1, -.05) -- (2, -.05)
              (1.45, .15) -- (1.6, 0) -- (1.45, -.15)
              (-1, 0) -- (0, 0);
          \foreach \x in {0, 1, 2, 3} {
              \draw[fill=white] (\x, 0) circle (.1);
          }
          \draw[fill=black] (-1, 0) circle (.1);
      \end{scope}
      \begin{scope}[shift={(1, -13.8)}]
          \node at (-2, 0) {$\widetilde{\mathrm{G}}_2$};
          \draw (0, .08) -- (1, .08) (0, 0) -- (1, 0) (0, -.08) -- (1, -.08)
              (.4, .2) -- (.6, 0) -- (.4, -.2)
              (-1, 0) -- (0, 0);
          \foreach \x in {0, 1} {
              \draw[fill=white] (\x, 0) circle (.1);
          }
          \draw[fill=black] (-1, 0) circle (.1);
      \end{scope}
  \end{tikzpicture}
  ```

  在编号中，下标 $n$ 总是指图中白色的顶点个数。黑色的顶点为额外添加所得者，不计入下标数字的统计。
  此时，秩总是 $n+1$。

  特别地，$\widetilde{\mathrm{A}}_1$ 形如

  ```tikz
  \begin{tikzpicture}[scale=.8, every path/.style={line width=.75}]
      \begin{scope}
          \node at (-1, 0) {$\widetilde{\mathrm{A}}_1$};
          \draw (0, .05) -- (1, .05) (0, -.05) -- (1, -.05)
          (.25, .15) -- (.1, 0) -- (.25, -.15)
          (.75, .15) -- (.9, 0) -- (.75, -.15);
          \draw[fill=white] (0, 0) circle (.1);
          \draw[fill=black] (1, 0) circle (.1);
      \end{scope}
  \end{tikzpicture}
  ```

  在严格的记号中，
  只在 $n\ge 3$ 时使用 $\widetilde{\mathrm{B}}_n$，
  只在 $n\ge 2$ 时使用 $\widetilde{\mathrm{C}}_n$，
  只在 $n\ge 4$ 时使用 $\widetilde{\mathrm{D}}_n$。

- 而 $X_n^{(2)},X_n^{(3)}$ 也被称为**扭仿射 Dynkin 图**。
  每个扭仿射 Dynkin 图都来自于一个有限的 Dynkin 图 $X_n$（只包含ADE 类）的折叠，
  并在其基础上添加一个额外的顶点和从该顶点连出的一条边得到。

  扭仿射 Dynkin 图 $X_n^{(2)}$ 的分类如下：

  ```tikz
  \begin{tikzpicture}[scale=.8, every path/.style={line width=.75}]
      \begin{scope}
          \node at (-1, 0) {$\mathrm{A}_{2k-1}^{(2)}$};
          \draw (0, .5) -- (1, 0) -- (2.4, 0) (3.1, 0) -- (4.5, 0)
              (4.5, .05) -- (5.5, .05) (4.5, -.05) -- (5.5, -.05)
              (5.1, .15) -- (4.95, 0) -- (5.1, -.15) (0, -.5) -- (1, 0);
          \draw[dotted] (2.4, 0) -- (3.1, 0);
          \foreach \x in {1, 2, 3.5, 4.5, 5.5} {
              \draw[fill=white] (\x, 0) circle (.1);
          }
          \draw[fill=white] (0, .5) circle (.1);
          \draw[fill=black] (0, -.5) circle (.1);
      \end{scope}
      \begin{scope}[shift={(0, -1.5)}]
          \node at (-1, 0) {$\mathrm{A}_{2k}^{(2)}$};
          \draw (1, 0) -- (2.4, 0) (3.1, 0) -- (4.5, 0)
              (4.5, .05) -- (5.5, .05) (4.5, -.05) -- (5.5, -.05)
              (5.05, .15) -- (4.9, 0) -- (5.05, -.15)
              (0, .05) -- (1, .05) (0, -.05) -- (1, -.05)
              (.6, .15) -- (.45, 0) -- (.6, -.15);
          \draw[dotted] (2.4, 0) -- (3.1, 0);
          \foreach \x in {1, 2, 3.5, 4.5, 5.5} {
              \draw[fill=white] (\x, 0) circle (.1);
          }
          \draw[fill=black] (0, 0) circle (.1);
      \end{scope}
      \begin{scope}[shift={(0, -2.5)}]
          \node at (-1, 0) {$\mathrm{D}_{k+1}^{(2)}$};
          \draw (1, 0) -- (2.4, 0) (3.1, 0) -- (4.5, 0)
              (4.5, .05) -- (5.5, .05) (4.5, -.05) -- (5.5, -.05)
              (4.9, .15) -- (5.05, 0) -- (4.9, -.15)
              (0, .05) -- (1, .05) (0, -.05) -- (1, -.05)
              (.6, .15) -- (.45, 0) -- (.6, -.15);
          \draw[dotted] (2.4, 0) -- (3.1, 0);
          \foreach \x in {1, 2, 3.5, 4.5, 5.5} {
              \draw[fill=white] (\x, 0) circle (.1);
          }
          \draw[fill=black] (0, 0) circle (.1);
      \end{scope}
      \begin{scope}[shift={(0, -3.5)}]
          \node at (-1, 0) {$\mathrm{E}_6^{(2)}$};
          \draw (0, 0) -- (2, 0)
              (2, .05) -- (3, .05) (2, -.05) -- (3, -.05)
              (2.55, .15) -- (2.4, 0) -- (2.55, -.15)
              (3, 0) -- (4, 0);
          \foreach \x in {1, 2, 3, 4} {
              \draw[fill=white] (\x, 0) circle (.1);
          }
          \draw[fill=black] (0, 0) circle (.1);
      \end{scope}
  \end{tikzpicture}
  ```

  编号中的 $k$（注意不是整个下标）总是指图中白色的顶点个数。
  黑色的顶点为额外添加所得者，不计入统计。
  此时，秩总是 $k+1$。

  特别地，$\mathrm{A}_2^{(2)}$ 形如：

  ```tikz
  \begin{tikzpicture}[scale=.8, every path/.style={line width=.75}]
      \begin{scope}
          \node at (-1, 0) {$\mathrm{A}_2^{(2)}$};
          \draw (0, .1) -- (1, .1) (0, .033) -- (1, .033)
                (0, -.1) -- (1, -.1) (0, -.033) -- (1, -.033)
                (.6, .2) -- (.4, 0) -- (.6, -.2);
          \draw[fill=white] (1, 0) circle (.1);
          \draw[fill=black] (0, 0) circle (.1);
      \end{scope}
  \end{tikzpicture}
  ```

  在严格的记号中，
  只在 $k\ge 3$ 时使用 $\mathrm{A}_{2k-1}^{(2)}$，
  只在 $k\ge 2$ 时使用 $\mathrm{D}_{k+1}^{(2)}$。

  扭仿射 Dynkin 图 $X_n^{(3)}$ 只有一个：

  ```tikz
  \begin{tikzpicture}[scale=.8, every path/.style={line width=.75}]
      \begin{scope}
          \node at (-2, 0) {$\mathrm{D}_4^{(3)}$};
          \draw (0, .08) -- (1, .08) (0, 0) -- (1, 0) (0, -.08) -- (1, -.08)
              (.6, .2) -- (.4, 0) -- (.6, -.2)
              (-1, 0) -- (0, 0);
          \foreach \x in {0, 1} {
              \draw[fill=white] (\x, 0) circle (.1);
          }
          \draw[fill=black] (-1, 0) circle (.1);
      \end{scope}
  \end{tikzpicture}
  ```

## 应用

### 半单Lie 代数

Dynkin 图最经典也是最早的应用就是对代数闭域上半单 Lie 代数的分类，这些 Lie 代数被根系完全决定。
尽管早在19世纪末，Wilhelm Killing 就已经完成了分类，但其证明缺乏严谨性，
后来 Élie Cartan 在博士论文中给出了严谨的证明。
直到1947 年，Eugene Dynkin 利用 Dynkin 图给出了如今标准的分类流程。
后来 [[Jean-Pierre Serre]] 对其过程进行了一些补充，不过证明的核心思想没有改变。

考察这些 Dynkin 图对应的 Coxeter 图（去掉边的定向），
它们的有限反射群是这些 Lie 代数根系的等距对称群，也被称为[[Weyl 群]]。
因此 A–G 类 Coxeter 图分类了有限 Weyl 群。

A–D 类四个无限族对应半单Lie 代数族：

- $\mathrm{A}_n$：$\mathfrak{sl}_{n+1}$，[[特殊线性群]]的李代数。

- $\mathrm{B}_n$：$\mathfrak{so}_{2n+1}=\mathfrak{o}_{2n+1}$，奇数阶[[特殊正交群]]的李代数。

- $\mathrm{C}_n$：$\mathfrak{sp}_{2n}$，[[辛群]]的李代数。

- $\mathrm{D}_n$：$\mathfrak{so}_{2n}=\mathfrak{o}_{2n}$，偶数阶[[特殊正交群]]的李代数。

对于 $\mathrm{E}_6,\mathrm{E}_7,\mathrm{E}_8,\mathrm{F}_4,\mathrm{G}_2$：
它们对应五个例外李群的李代数。

## 性质

### Cartan 矩阵

::: definition
对每个Dynkin 图，存在一个与之关联的方阵，称为 **[[Cartan 矩阵]]**，具体定义如下：

对于秩为 $n$ 的 Dynkin 图，对其全体顶点用正整数 $1,\cdots,n$ 进行标记。
则其 Cartan 矩阵是一个 $n\times n$ 的矩阵 $A=(a_{ij})_{n\times n}$，
满足如下要求：

- 对角线 $a_{ii}=2$ 对一切 $i=1,\cdots,n$ 成立。

- 对顶点 $i\ne j$，如果它们之间没有边，则令 $a_{ij}=a_{ji}=0$。

- 对顶点 $i\ne j$，如果它们之间有单边，形如：

  ```tikz
  \begin{tikzpicture}[scale=.8, every path/.style={line width=.75}]
      \begin{scope}
          \node at (0, .3) {\scriptsize $i$};
          \node at (1, .3) {\scriptsize $j$};
          \draw (0, 0) -- (1, 0);
          \draw[fill=white] (0, 0) circle (.1);
          \draw[fill=white] (1, 0) circle (.1);
      \end{scope}
  \end{tikzpicture}
  ```

  则令 $a_{ij}=a_{ji}=-1$。

- 对顶点 $i\ne j$，如果它们之间有 $i$ 指向 $j$ 的 $k$ 重边，形如：

  ```tikz
  \begin{tikzpicture}[scale=.8, every path/.style={line width=.75}]
      \begin{scope}
          \node at (0, .3) {\scriptsize $i$};
          \node at (1, .3) {\scriptsize $j$};
          \draw (0, .05) -- (1, .05) (0, -.05) -- (1, -.05)
          (.45, .15) -- (.6, 0) -- (.45, -.15);
          \draw[fill=white] (0, 0) circle (.1);
          \draw[fill=white] (1, 0) circle (.1);
      \end{scope}
      \begin{scope}[shift={(0, -1)}]
          \node at (0, .3) {\scriptsize $i$};
          \node at (1, .3) {\scriptsize $j$};
          \draw (0, .08) -- (1, .08) (0, 0) -- (1, 0) (0, -.08) -- (1, -.08)
              (.4, .2) -- (.6, 0) -- (.4, -.2);
          \foreach \x in {0, 1} {
              \draw[fill=white] (\x, 0) circle (.1);
          }
      \end{scope}
      \begin{scope}[shift={(0, -2)}]
          \node at (0, .3) {\scriptsize $i$};
          \node at (1, .3) {\scriptsize $j$};
          \draw (0, .1) -- (1, .1) (0, .033) -- (1, .033)
                (0, -.1) -- (1, -.1) (0, -.033) -- (1, -.033)
                (.4, .2) -- (.6, 0) -- (.4, -.2);
          \foreach \x in {0, 1} {
              \draw[fill=white] (\x, 0) circle (.1);
          }
      \end{scope}
  \end{tikzpicture}
  ```

  则令 $a_{ij}=-k$，$a_{ji}=-1$。

此外在扩展的记号中，也会使用其他的边，它们与 Cartan 矩阵元的对应关系为：

- 对顶点 $i\ne j$，
  如果它们之间有 $i$ 和 $j$ 互指的 $k$ 重边（仅在 $\widetilde{\mathrm{A}}_1$ 中出现，$k=2$），形如：

  ```tikz
  \begin{tikzpicture}[scale=.8, every path/.style={line width=.75}]
      \begin{scope}
          \node at (0, .3) {\scriptsize $i$};
          \node at (1, .3) {\scriptsize $j$};
          \draw (0, .05) -- (1, .05) (0, -.05) -- (1, -.05)
          (.25, .15) -- (.1, 0) -- (.25, -.15)
          (.75, .15) -- (.9, 0) -- (.75, -.15);
          \draw[fill=white] (0, 0) circle (.1);
          \draw[fill=white] (1, 0) circle (.1);
      \end{scope}
  \end{tikzpicture}
  ```

  则令 $a_{ij}=a_{ji}=-k$。

- 对顶点 $i\ne j$，如果它们之间有 $k$ 重（无向）边，形如：

  ```tikz
  \begin{tikzpicture}[scale=.8, every path/.style={line width=.75}]
      \begin{scope}
          \node at (0, .3) {\scriptsize $i$};
          \node at (1, .3) {\scriptsize $j$};
          \draw (0, .05) -- (1, .05) (0, -.05) -- (1, -.05);
          \draw[fill=white] (0, 0) circle (.1);
          \draw[fill=white] (1, 0) circle (.1);
      \end{scope}
  \end{tikzpicture}
  ```

  则令 $a_{ij}=a_{ji}=-\sqrt k$。

- 对顶点 $i\ne j$，如果它们之间有带正整数对 $(a,b)$ 标记的边，形如：

  ```tikz
  \begin{tikzpicture}[scale=.8, every path/.style={line width=.75}]
      \begin{scope}
          \node at (0, .3) {\scriptsize $i$};
          \node at (1, .3) {\scriptsize $j$};
          \node at (.5, -.3) {\scriptsize $(a,b)$};
          \draw (0, 0) -- (1, 0);
          \draw[fill=white] (0, 0) circle (.1);
          \draw[fill=white] (1, 0) circle (.1);
      \end{scope}
  \end{tikzpicture}
  ```

  则令 $a_{ij}=-a$，$a_{ji}=-b$。

:::

### 例外同构 {@例外同构}

<see>[[例外同源]]</see>

在不严格的记号中，不同编号的 Dynkin 图在编号较小时可能同构，枚举如下。

- $\mathrm B_1\cong\mathrm C_1\cong\mathrm A_1$

- $\mathrm B_2\cong\mathrm C_2$

- $\mathrm D_2\cong\mathrm A_1\times\mathrm A_1$

- $\mathrm D_3\cong\mathrm A_3$

- $\mathrm E_3\cong\mathrm A_1\times\mathrm A_2$

- $\mathrm E_4\cong\mathrm A_4$

- $\mathrm E_5\cong\mathrm D_5$

这些例外同构也导致它们分类的数学对象具有例外同构或例外同源。

### 自同构

一些Dynkin 图也具有非平凡[[自同构]]，
它们是 $\{\mathrm{A}_n\}_{n\ge 2},\{\mathrm{D}_n\}_{n\ge 4},\mathrm E_6$。
这些图的自同构对应着分类的数学对象的[[外自同构]]。所有自同构列举如下。

- $\mathrm{A}_n$ 在 $n\ge 2$ 时具有[[循环群]] $\mathbb Z_2$ 自同构，将整条链倒置。

  在Lie 代数侧，$\mathfrak{sl}_{n+1}$ 在典范表示下具有外自同构 $X\mapsto -X^t$。
  而对于 $\mathfrak{sl}_2$，不难发现 $-X^t=PXP^{-1}$ 是[[内自同构]]，
  这里 $P=\begin{pmatrix}0&1\\-1&0\end{pmatrix}=\exp\begin{pmatrix}0&\pi/2\\-\pi/2&0\end{pmatrix}$。

- $\mathrm{D}_n$ 在 $n\ge 5$ 时具有循环群 $\mathbb Z_2$ 自同构，交换分叉顶点连出的两个叶子节点。

  在Lie 代数侧，
  $\mathfrak{so}_{2n}$ 在典范表示下可以被任意一个 $\mathrm{O}(2n)$ 中行列式为 $-1$
  的矩阵共轭得到外自同构。

- 特别地，$\mathrm{D}_4$ 具有[[置换群]] $\mathfrak S_3$ 自同构，置换分叉顶点连出的三个叶子节点，
  该现象也被称为**三重性**。

- $\mathrm{E}_6$ 具有[[循环群]] $\mathbb Z_2$ 自同构，交换分叉顶点连出的两个长为 $2$ 的链。

在正特征下，某些带重边的Dynkin 图将会具有额外的“自同构”。
具体来说，特征为 $p$ 时，自同构允许忽略 $p$ 重边的箭头方向。
这意味着 $\mathrm{B}_2\cong\mathrm{C}_2$ 以及 $\mathrm{F}_4$ 在特征 $2$ 时具有额外自同构
$\mathbb Z_2$；
在特征 $3$ 时 $\mathrm{G}_2$ 具有额外自同构 $\mathbb Z_2$。

<see>[[Lie 型单群]]</see>

自同构及额外自同构与Lie 型单群的理论关系密切。

首先这些额外自同构并不带来它们对应代数群的自同构，
它们仅会带来这些概形在[[有限域]] $\mathbb F_q\ (q=p^f)$ 上的闭点集构成有限群的一些外自同构。
例如 $4245696$ 阶的[[有限单群分类|有限单群]] [[Chevalley 群]] $\mathrm{G}_2(3)$ 就具有外自同构群
$\mathbb Z_2$；
类似地，
$3311126603366400$ 阶的有限单群 Chevalley 群 $\mathrm{F}_4(2)$ 也具有外自同构群 $\mathbb Z_2$，
它们都来自根系的额外自同构。

另外图自同构还会带来一些其他的Lie 型单群构造，
它们是[[Steinberg 群]] ${}^2\mathrm A_n,{}^2\mathrm D_n,{}^2\mathrm E_6,{}^3\mathrm D_4$。
额外自同构带来构造[[Suzuki 群]] ${}^2\mathrm B_2(2^{2n+1})$、
[[Ree 群]] ${}^2\mathrm F_4(2^{2n+1}),{}^2\mathrm G_2(3^{2n+1})$ 以及 [[Tits 群]]
${}^2\mathrm F_4(2)'$。

### 折叠 {@折叠}

从一个具有非平凡自同构的适当的单边 Dynkin 图（或仿射 Dynkin 图）出发，
可以通过商掉部分或全部对称性，得到一个新的 Dynkin 图，这一操作被称为**折叠**。
在Lie 代数侧，这对应于取外自同构的不变子代数。
折叠操作也可以完全使用根系定义，而无需借助 Dynkin 图。
实际上，每一个有重边的 Dynkin 图（或仿射 Dynkin 图）都来自于折叠。

需要注意，在Dynkin 图侧，为了保证商是一个新的 Dynkin 图，
折叠要求：自同构的任意轨道中，包含的顶点之间没有互相连边。
否则商将含有顶点连到自己的圈，这是不被允许的。
对应在根系侧，折叠要求：自同构的任意轨道中，包含的根都必须是互相垂直的。
这意味着并非对所有自同构都能进行操作，例如 $\mathrm A_{2k}$ 的非平凡自同构就不对应折叠。

构造商图时，如果原图中一个顶点 $v$ 出发的 $k$ 条单边 $vv_1,\cdots,vv_k$ 被商为同一条，
那么商图中就得到一条从 $\tilde v$ 出发指向 $\tilde v_1=\cdots=\tilde v_k$ 的 $k$ 重边。

有限 Dynkin 图具有以下四类折叠：

- 二重折叠 $\mathrm{A}_{2n-1}\to\mathrm{C}_n$。

  ```tikz
  \begin{tikzpicture}[scale=.8, every path/.style={line width=.75}]
  \begin{scope}[shift={(0, 0)}]
          \node at (-1, -.5) {$\mathrm{A}_{2n-1}$};
          \draw (0, 0) -- (2.4, 0) (3.1, 0) -- (4.5, 0)
          (0, -1) -- (2.4, -1) (3.1, -1) -- (4.5, -1)
              (4.5, 0) -- (5.5, -.5) -- (4.5, -1);
          \draw[dotted] (2.4, 0) -- (3.1, 0);
          \draw[dotted] (2.4, -1) -- (3.1, -1);
          \foreach \x in {0, 1, 2, 3.5, 4.5} {
              \draw[fill=white] (\x, 0) circle (.1);
              \draw[fill=white] (\x, -1) circle (.1);
          }
          \draw[fill=white] (5.5, -.5) circle (.1);
          \end{scope}
      \node at (-1, -1.25) {$\downarrow$};
  \begin{scope}[shift={(0, -2)}]
          \node at (-1, 0) {$\mathrm{C}_n$};
          \draw (0, 0) -- (2.4, 0) (3.1, 0) -- (4.5, 0)
              (4.5, .05) -- (5.5, .05) (4.5, -.05) -- (5.5, -.05)
              (5.05, .15) -- (4.9, 0) -- (5.05, -.15);
          \draw[dotted] (2.4, 0) -- (3.1, 0);
          \foreach \x in {0, 1, 2, 3.5, 4.5, 5.5} {
              \draw[fill=white] (\x, 0) circle (.1);
          }\end{scope}
  \end{tikzpicture}
  ```

- 二重折叠 $\mathrm{D}_{n+1}\to\mathrm{B}_n$。

  ```tikz
  \begin{tikzpicture}[scale=.8, every path/.style={line width=.75}]
  \begin{scope}[shift={(0, 0)}]
          \node at (-1, -.5) {$\mathrm{D}_{n+1}$};
          \draw (0, -.5) -- (2.4, -.5) (3.1, -.5) -- (4.5, -.5)
              (5.5, 0) -- (4.5, -.5) -- (5.5, -1);
          \draw[dotted] (2.4, -.5) -- (3.1, -.5);
          \foreach \x in {0, 1, 2, 3.5, 4.5} {
              \draw[fill=white] (\x, -.5) circle (.1);
          }
          \draw[fill=white] (5.5, 0) circle (.1);
          \draw[fill=white] (5.5, -1) circle (.1);
          \end{scope}
      \node at (-1, -1.25) {$\downarrow$};
  \begin{scope}[shift={(0, -2)}]
          \node at (-1, 0) {$\mathrm{B}_n$};
          \draw (0, 0) -- (2.4, 0) (3.1, 0) -- (4.5, 0)
              (4.5, .05) -- (5.5, .05) (4.5, -.05) -- (5.5, -.05)
              (4.9, .15) -- (5.05, 0) -- (4.9, -.15);
          \draw[dotted] (2.4, 0) -- (3.1, 0);
          \foreach \x in {0, 1, 2, 3.5, 4.5, 5.5} {
              \draw[fill=white] (\x, 0) circle (.1);
          }\end{scope}
  \end{tikzpicture}
  ```

- 三重折叠 $\mathrm{D}_{4}\to\mathrm{G}_2$。

  ```tikz
  \begin{tikzpicture}[scale=.8, every path/.style={line width=.75}]
  \begin{scope}[shift={(0, 0)}]
          \node at (-1, -.5) {$\mathrm{D}_4$};
          \draw (1, 0) -- (0, -.5) -- (1, -1)
                (0, -.5) -- (1, -.5);
          \foreach \y in {0, -.5, -1} {
              \draw[fill=white] (1, \y) circle (.1);
          }
          \draw[fill=white] (0, -.5) circle (.1);
          \end{scope}
      \node at (-1, -1.25) {$\downarrow$};
  \begin{scope}[shift={(0, -2)}]
          \node at (-1, 0) {$\mathrm{G}_2$};
          \draw (0, .08) -- (1, .08) (0, 0) -- (1, 0) (0, -.08) -- (1, -.08)
              (.4, .2) -- (.6, 0) -- (.4, -.2);
          \foreach \x in {0, 1} {
              \draw[fill=white] (\x, 0) circle (.1);
          }\end{scope}
  \end{tikzpicture}
  ```

- 二重折叠 $\mathrm{E}_{6}\to\mathrm{F}_4$。

  ```tikz
  \begin{tikzpicture}[scale=.8, every path/.style={line width=.75}]
  \begin{scope}[shift={(0, 0)}]
          \node at (-1, -.5) {$\mathrm{E}_6$};
          \draw (0, -.5) -- (1, -.5) -- (2, 0) -- (3, 0)
              (1, -.5) -- (2, -1) -- (3, -1);
          \foreach \x in {2, 3} {
              \draw[fill=white] (\x, 0) circle (.1);
              \draw[fill=white] (\x, -1) circle (.1);
          }
          \foreach \x in {0, 1} {
              \draw[fill=white] (\x, -.5) circle (.1);
          }
          \end{scope}
      \node at (-1, -1.25) {$\downarrow$};
  \begin{scope}[shift={(0, -2)}]
          \node at (-1, 0) {$\mathrm{F}_4$};
          \draw (0, 0) -- (1, 0) (2, 0) -- (3, 0)
              (1, .05) -- (2, .05) (1, -.05) -- (2, -.05)
              (1.45, .15) -- (1.6, 0) -- (1.45, -.15);
          \foreach \x in {0, 1, 2, 3} {
              \draw[fill=white] (\x, 0) circle (.1);
          }\end{scope}
  \end{tikzpicture}
  ```

仿射 Dynkin 图具有以下这些折叠：

- $\widetilde{\mathrm{A}}_{kn-1}\to \widetilde{\mathrm{A}}_{n-1}$。

  ```tikz
  \begin{tikzpicture}[scale=.8, every path/.style={line width=.75}]
  \begin{scope}[shift={(0, 0)}]
          \draw (5.5, 0) -- (0, -1) (5.5, -2) -- (0, 0)
          (0, -2) -- (2.4, -1.56) (3.1, -1.44) -- (5.5, -1);
          \node at (-1, -1) {$\widetilde{\mathrm{A}}_{kn-1}$};
          \foreach \y in {0, -1, -2}{
          \draw (0, \y) -- (2.4, \y) (3.1, \y) -- (5.5, \y);
          \draw[dotted] (2.4, \y) -- (3.1, \y);}
          \draw[dotted] (2.4, -1.56) -- (3.1, -1.44);
          \foreach \x in {0, 1, 2, 3.5, 4.5, 5.5} {
          \foreach \y in {0, -1, -2}{
              \draw[fill=white] (\x, \y) circle (.1);
          }}
          \end{scope}
      \node at (-1, -2.4) {$\downarrow$};
  \begin{scope}[shift={(0, -3.5)}]
          \node at (-1, -.25) {$\widetilde{\mathrm{A}}_{n-1}$};
          \draw (1, 0) -- (2.4, 0) (3.1, 0) -- (4.5, 0)
              (1, 0) -- (0, -.5) -- (5.5, -.5) -- (4.5, 0);
          \draw[dotted] (2.4, 0) -- (3.1, 0);
          \foreach \x in {1, 2, 3.5, 4.5} {
              \draw[fill=white] (\x, 0) circle (.1);}
          \foreach \x in {0, 5.5} {
              \draw[fill=white] (\x, -.5) circle (.1);
          }\end{scope}
  \end{tikzpicture}
  ```

  特别地，当 $k=n=2$ 时有 $\widetilde{\mathrm{A}}_3\to \widetilde{\mathrm{A}}_1$。

  ```tikz
  \begin{tikzpicture}[scale=.8, every path/.style={line width=.75}]
  \begin{scope}[shift={(0, 0)}]
          \node at (-1, -.5) {$\widetilde{\mathrm{A}}_3$};
          \draw (0, 0) -- (1, 0) -- (0, -1) -- (1, -1) -- (0, 0);
          \foreach \x in {0, 1} {
          \foreach \y in {0, -1} {
              \draw[fill=white] (\x, \y) circle (.1);
          }}
          \end{scope}
      \node at (-1, -1.25) {$\downarrow$};
  \begin{scope}[shift={(0, -2)}]
          \node at (-1, 0) {$\widetilde{\mathrm{A}}_1$};
          \draw (0, .05) -- (1, .05) (0, -.05) -- (1, -.05)
          (.25, .15) -- (.1, 0) -- (.25, -.15)
          (.75, .15) -- (.9, 0) -- (.75, -.15);
          \foreach \x in {0, 1}{
          \draw[fill=white] (\x, 0) circle (.1);}
      \end{scope}
  \end{tikzpicture}
  ```

- $\widetilde{\mathrm{A}}_{2n-1}\to \widetilde{\mathrm{C}}_{n}$。

  ```tikz
  \begin{tikzpicture}[scale=.8, every path/.style={line width=.75}]
  \begin{scope}[shift={(0, 0)}]
          \node at (-1, -.5) {$\widetilde{\mathrm{A}}_{2n-1}$};
          \draw (1, 0) -- (2.4, 0) (3.1, 0) -- (4.5, 0)
          (1, -1) -- (2.4, -1) (3.1, -1) -- (4.5, -1)
              (4.5, 0) -- (5.5, -.5) -- (4.5, -1)
              (1, 0) -- (0, -.5) -- (1, -1);
          \draw[dotted] (2.4, 0) -- (3.1, 0);
          \draw[dotted] (2.4, -1) -- (3.1, -1);
          \foreach \x in {1, 2, 3.5, 4.5} {
              \draw[fill=white] (\x, 0) circle (.1);
              \draw[fill=white] (\x, -1) circle (.1);
          }
          \draw[fill=white] (5.5, -.5) circle (.1);
          \draw[fill=white] (0, -.5) circle (.1);
          \end{scope}
      \node at (-1, -1.25) {$\downarrow$};
  \begin{scope}[shift={(0, -2)}]
          \node at (-1, 0) {$\widetilde{\mathrm{C}}_{n}$};
          \draw (1, 0) -- (2.4, 0) (3.1, 0) -- (4.5, 0)
              (4.5, .05) -- (5.5, .05) (4.5, -.05) -- (5.5, -.05)
              (5.05, .15) -- (4.9, 0) -- (5.05, -.15)
              (1, .05) -- (0, .05) (1, -.05) -- (0, -.05)
              (.45, .15) -- (.6, 0) -- (.45, -.15);
          \draw[dotted] (2.4, 0) -- (3.1, 0);
          \foreach \x in {0, 1, 2, 3.5, 4.5, 5.5} {
              \draw[fill=white] (\x, 0) circle (.1);
          }\end{scope}
  \end{tikzpicture}
  ```

- $\widetilde{\mathrm{D}}_{n+1}\to \widetilde{\mathrm{B}}_n\to \mathrm D_{n+2}^{(2)}$。

  ```tikz
  \begin{tikzpicture}[scale=.8, every path/.style={line width=.75}]
  \begin{scope}[shift={(0, 0)}]
          \node at (-1, -.5) {$\widetilde{\mathrm{D}}_{n+1}$};
          \draw (1, -.5) -- (2.4, -.5) (3.1, -.5) -- (4.5, -.5)
              (5.5, 0) -- (4.5, -.5) -- (5.5, -1)
              (0, 0) -- (1, -.5) -- (0, -1);
          \draw[dotted] (2.4, -.5) -- (3.1, -.5);
          \foreach \x in {1, 2, 3.5, 4.5} {
              \draw[fill=white] (\x, -.5) circle (.1);}
          \foreach \x in {0, 5.5}{
          \draw[fill=white] (\x, 0) circle (.1);
          \draw[fill=white] (\x, -1) circle (.1);}
          \end{scope}
      \node at (-1, -1.4) {$\downarrow$};
  \begin{scope}[shift={(0, -2.5)}]
          \node at (-1, 0) {$\widetilde{\mathrm{B}}_n$};
          \draw (1, 0) -- (2.4, 0) (3.1, 0) -- (4.5, 0)
              (4.5, .05) -- (5.5, .05) (4.5, -.05) -- (5.5, -.05)
              (4.9, .15) -- (5.05, 0) -- (4.9, -.15)
              (0, .5) -- (1, 0) -- (0, -.5);
          \draw[dotted] (2.4, 0) -- (3.1, 0);
          \foreach \x in {1, 2, 3.5, 4.5, 5.5} {
              \draw[fill=white] (\x, 0) circle (.1);}
          \draw[fill=white] (0, .5) circle (.1);
          \draw[fill=white] (0, -.5) circle (.1);
          \end{scope}
      \node at (-1, -3.5) {$\downarrow$};
  \begin{scope}[shift={(0, -4.5)}]
          \node at (-1, 0) {$\mathrm D_{n+2}^{(2)}$};
          \draw (1, 0) -- (2.4, 0) (3.1, 0) -- (4.5, 0)
              (4.5, .05) -- (5.5, .05) (4.5, -.05) -- (5.5, -.05)
              (4.9, .15) -- (5.05, 0) -- (4.9, -.15)
              (1, .05) -- (0, .05) (1, -.05) -- (0, -.05)
              (.6, .15) -- (.45, 0) -- (.6, -.15);
          \draw[dotted] (2.4, 0) -- (3.1, 0);
          \foreach \x in {0, 1, 2, 3.5, 4.5, 5.5} {
              \draw[fill=white] (\x, 0) circle (.1);}
          \end{scope}
  \end{tikzpicture}
  ```

- $\widetilde{\mathrm{D}}_{2n}\to \mathrm A_{2n-1}^{(2)}\to \mathrm A_{2n-2}^{(2)}$。

  ```tikz
  \begin{tikzpicture}[scale=.8, every path/.style={line width=.75}]
  \begin{scope}[shift={(0, 0)}]
          \node at (-1, -1.5) {$\widetilde{\mathrm{D}}_{2n}$};
          \draw (1, -.5) -- (2.4, -.5) (3.1, -.5) -- (4.5, -.5) -- (5.5, -1.5)
              (0, 0) -- (1, -.5) -- (0, -1);
          \draw (1, -2.5) -- (2.4, -2.5) (3.1, -2.5) -- (4.5, -2.5) -- (5.5, -1.5)
              (0, -3) -- (1, -2.5) -- (0, -2);
          \foreach \y in {-.5, -2.5} {
          \draw[dotted] (2.4, \y) -- (3.1, \y);
          \foreach \x in {1, 2, 3.5, 4.5} {
              \draw[fill=white] (\x, \y) circle (.1);}}
          \foreach \y in {0, -1, -2, -3}{
          \draw[fill=white] (0, \y) circle (.1);}
          \draw[fill=white] (5.5, -1.5) circle (.1);
          \end{scope}
      \node at (-1, -2.9) {$\downarrow$};
  \begin{scope}[shift={(0, -4.5)}]
          \node at (-1, 0) {$\mathrm A_{2n-1}^{(2)}$};
          \draw (1, 0) -- (2.4, 0) (3.1, 0) -- (4.5, 0)
              (4.5, .05) -- (5.5, .05) (4.5, -.05) -- (5.5, -.05)
              (5.05, .15) -- (4.9, 0) -- (5.05, -.15)
              (0, .5) -- (1, 0) -- (0, -.5);
          \draw[dotted] (2.4, 0) -- (3.1, 0);
          \foreach \x in {1, 2, 3.5, 4.5, 5.5} {
              \draw[fill=white] (\x, 0) circle (.1);}
          \draw[fill=white] (0, .5) circle (.1);
          \draw[fill=white] (0, -.5) circle (.1);
          \end{scope}
      \node at (-1, -5.5) {$\downarrow$};
  \begin{scope}[shift={(0, -6.5)}]
          \node at (-1, 0) {$\mathrm A_{2n-2}^{(2)}$};
          \draw (1, 0) -- (2.4, 0) (3.1, 0) -- (4.5, 0)
              (4.5, .05) -- (5.5, .05) (4.5, -.05) -- (5.5, -.05)
              (5.05, .15) -- (4.9, 0) -- (5.05, -.15)
              (1, .05) -- (0, .05) (1, -.05) -- (0, -.05)
              (.6, .15) -- (.45, 0) -- (.6, -.15);
          \draw[dotted] (2.4, 0) -- (3.1, 0);
          \foreach \x in {0, 1, 2, 3.5, 4.5, 5.5} {
              \draw[fill=white] (\x, 0) circle (.1);}
          \end{scope}
  \end{tikzpicture}
  ```

- $\widetilde{\mathrm{D}}_4\to \widetilde{\mathrm{B}}_3\to \mathrm D_4^{(2)}\to\mathrm A_2^{(2)}$。

  ```tikz
  \begin{tikzpicture}[scale=.8, every path/.style={line width=.75}]
  \begin{scope}[shift={(0, 0)}]
          \node at (-1, -.5) {$\widetilde{\mathrm{D}}_4$};
          \draw (1, -.17) -- (0, -.5) -- (1, -.85)
                (1, -1.5) -- (0, -.5) -- (1, .5);
          \foreach \y in {.5, -.17, -.85, -1.5} {
              \draw[fill=white] (1, \y) circle (.1);
          }
          \draw[fill=white] (0, -.5) circle (.1);
          \end{scope}
      \node at (-1, -1.7) {$\downarrow$};
  \begin{scope}[shift={(0, -2.5)}]
          \node at (-1, -.5) {$\widetilde{\mathrm{B}}_3$};
          \draw (0, -.5) -- (1, -.85)
                (1, -1.5) -- (0, -.5)
                (0, -.45) -- (1, .25) (0, -.55) -- (1, .15)
                (.4, -.06) -- (.6, -.06) -- (.6, -.26);
          \foreach \y in {.2, -.85, -1.5} {
              \draw[fill=white] (1, \y) circle (.1);
          }
          \draw[fill=white] (0, -.5) circle (.1);
          \end{scope}
      \node at (-1, -4.3) {$\downarrow$};
  \begin{scope}[shift={(0, -5)}]
          \node at (-1, -.5) {$\mathrm D_4^{(2)}$};
          \draw (0, -.45) -- (1, .25) (0, -.55) -- (1, .15)
                (.4, -.06) -- (.6, -.06) -- (.6, -.26)
                (0, -.55) -- (1, -1.25) (0, -.45) -- (1, -1.15)
                (.4, -.94) -- (.6, -.94) -- (.6, -.74);
          \foreach \y in {.2, -1.2} {
              \draw[fill=white] (1, \y) circle (.1);
          }
          \draw[fill=white] (0, -.5) circle (.1);
          \end{scope}
      \node at (-1, -6.4) {$\downarrow$};
   \begin{scope}[shift={(0, -7.3)}]
          \node at (-1, 0) {$\mathrm{A}_2^{(2)}$};
          \draw (0, .1) -- (1, .1) (0, .033) -- (1, .033)
                (0, -.1) -- (1, -.1) (0, -.033) -- (1, -.033)
                (.4, .2) -- (.6, 0) -- (.4, -.2);
          \draw[fill=white] (1, 0) circle (.1);
          \draw[fill=white] (0, 0) circle (.1);
      \end{scope}
  \end{tikzpicture}
  ```

- $\widetilde{\mathrm{D}}_4\to \widetilde{\mathrm{G}}_2$。

  ```tikz
  \begin{tikzpicture}[scale=.8, every path/.style={line width=.75}]
  \begin{scope}[shift={(0, 0)}]
          \node at (-2, -.5) {$\widetilde{\mathrm{D}}_4$};
          \draw (1, 0) -- (0, -.5) -- (1, -1)
                (-1, -.5) -- (0, -.5) -- (1, -.5);
          \foreach \y in {0, -.5, -1} {
              \draw[fill=white] (1, \y) circle (.1);
          }
          \draw[fill=white] (0, -.5) circle (.1);
          \draw[fill=white] (-1, -.5) circle (.1);
          \end{scope}
      \node at (-2, -1.25) {$\downarrow$};
  \begin{scope}[shift={(0, -2)}]
          \node at (-2, 0) {$\widetilde{\mathrm{G}}_2$};
          \draw (0, 0) -- (-1, 0)
              (0, .08) -- (1, .08) (0, 0) -- (1, 0) (0, -.08) -- (1, -.08)
              (.4, .2) -- (.6, 0) -- (.4, -.2);
          \foreach \x in {-1, 0, 1} {
              \draw[fill=white] (\x, 0) circle (.1);
          }\end{scope}
  \end{tikzpicture}
  ```

- $\widetilde{\mathrm{E}}_6\to \widetilde{\mathrm{F}}_4$。

  ```tikz
  \begin{tikzpicture}[scale=.8, every path/.style={line width=.75}]
  \begin{scope}[shift={(0, 0)}]
          \node at (-3, -.5) {$\widetilde{\mathrm{E}}_6$};
          \draw (2, 0) -- (1, 0) -- (0, -.5) -- (1, -1) -- (2, -1)
                (0, -.5) -- (-2, -.5);
          \foreach \x in {0, -1, -2} {
              \draw[fill=white] (\x, -.5) circle (.1);
          }
          \foreach \x in {1, 2} {
              \draw[fill=white] (\x, -1) circle (.1);
              \draw[fill=white] (\x, 0) circle (.1);
          }
          \end{scope}
      \node at (-3, -1.25) {$\downarrow$};
  \begin{scope}[shift={(0, -2)}]
          \node at (-3, 0) {$\widetilde{\mathrm{F}}_4$};
          \draw (-2, 0) -- (0, 0)
              (0, .05) -- (1, .05) (0, -.05) -- (1, -.05)
              (.45, .15) -- (.6, 0) -- (.45, -.15) (1, 0) -- (2, 0);
          \foreach \x in {-2, -1, 0, 1, 2} {
              \draw[fill=white] (\x, 0) circle (.1);
          }\end{scope}
  \end{tikzpicture}
  ```

- $\widetilde{\mathrm{E}}_6\to \mathrm D_4^{(3)}$。

  ```tikz
  \begin{tikzpicture}[scale=.8, every path/.style={line width=.75}]
  \begin{scope}[shift={(0, 0)}]
          \node at (-1, -.5) {$\widetilde{\mathrm{E}}_6$};
          \draw (2, 0) -- (1, 0) -- (0, -.5) -- (1, -1) -- (2, -1)
                (0, -.5) -- (1, -.5) -- (2, -.5);
          \foreach \y in {0, -.5, -1} {
              \draw[fill=white] (1, \y) circle (.1);
              \draw[fill=white] (2, \y) circle (.1);
          }
          \draw[fill=white] (0, -.5) circle (.1);
          \end{scope}
      \node at (-1, -1.25) {$\downarrow$};
  \begin{scope}[shift={(0, -2)}]
          \node at (-1, 0) {$\mathrm D_4^{(3)}$};
          \draw (0, .08) -- (1, .08) (0, 0) -- (1, 0) (0, -.08) -- (1, -.08)
              (.4, .2) -- (.6, 0) -- (.4, -.2) (1, 0) -- (2, 0);
          \foreach \x in {0, 1, 2} {
              \draw[fill=white] (\x, 0) circle (.1);
          }\end{scope}
  \end{tikzpicture}
  ```

- $\widetilde{\mathrm{E}}_7\to\mathrm E_6^{(2)}$。

  ```tikz
  \begin{tikzpicture}[scale=.8, every path/.style={line width=.75}]
  \begin{scope}[shift={(0, 0)}]
          \node at (-1, -.5) {$\widetilde{\mathrm{E}}_7$};
          \draw (0, -.5) -- (1, -.5) -- (2, 0) -- (3, 0) -- (4, 0)
              (1, -.5) -- (2, -1) -- (3, -1) -- (4, -1);
          \foreach \x in {2, 3, 4} {
              \draw[fill=white] (\x, 0) circle (.1);
              \draw[fill=white] (\x, -1) circle (.1);
          }
          \foreach \x in {0, 1} {
              \draw[fill=white] (\x, -.5) circle (.1);
          }
          \end{scope}
      \node at (-1, -1.25) {$\downarrow$};
  \begin{scope}[shift={(0, -2)}]
          \node at (-1, 0) {$\mathrm E_6^{(2)}$};
          \draw (0, 0) -- (1, 0) (2, 0) -- (3, 0) -- (4, 0)
              (1, .05) -- (2, .05) (1, -.05) -- (2, -.05)
              (1.45, .15) -- (1.6, 0) -- (1.45, -.15);
          \foreach \x in {0, 1, 2, 3, 4} {
              \draw[fill=white] (\x, 0) circle (.1);
          }\end{scope}
  \end{tikzpicture}
  ```

类似地，对于Coxeter 图也有折叠现象。

### 嵌入

Dynkin 图间也存在一些嵌入关系，不过根系间也存在一些嵌入不能实现为Dynkin 图的嵌入，典例为
$\mathrm A_2$ 和 $\mathrm G_2$ 之间的关系。我们知道：

```tikz
\begin{tikzpicture}
    \begin{scope}[scale=.75, shift={(0, 0)}]
    \draw[fill=black] (0.75,1.3) circle (.05);
    \draw[fill=black] (0.75,-1.3) circle (.05);
    \draw[fill=black] (-0.75,1.3) circle (.05);
    \draw[fill=black] (-0.75,-1.3) circle (.05);
    \draw[fill=black] (1.5,0) circle (.05);
    \draw[fill=black] (-1.5,0) circle (.05);
    \draw[fill=black] (0,0.87) circle (.05);
    \draw[fill=black] (0,-0.87) circle (.05);
    \draw[fill=black] (0.75,0.43) circle (.05);
    \draw[fill=black] (0.75,-0.43) circle (.05);
    \draw[fill=black] (-0.75,-0.43) circle (.05);
    \draw[fill=black] (-0.75,0.43) circle (.05);
    \draw (0.75,1.3) -- (-0.75,-1.3);
    \draw (0.75,-1.3) -- (-0.75,1.3);
    \draw (-1.5,0) -- (1.5,0);
    \draw (0,0.87) -- (0,-0.87);
    \draw (0.75,0.43) -- (-0.75,-0.43);
    \draw (0.75,-0.43) -- (-0.75,0.43);
    \node at (0,-2) {$\mathrm G_2$};\end{scope}
    \begin{scope}[scale=1, shift={(5, 0)}]
    \draw[fill=black] (0,0.87) circle (.05);
    \draw[fill=black] (0,-0.87) circle (.05);
    \draw[fill=black] (0.75,0.43) circle (.05);
    \draw[fill=black] (0.75,-0.43) circle (.05);
    \draw[fill=black] (-0.75,-0.43) circle (.05);
    \draw[fill=black] (-0.75,0.43) circle (.05);
    \draw (0,0.87) -- (0,-0.87);
    \draw (0.75,0.43) -- (-0.75,-0.43);
    \draw (0.75,-0.43) -- (-0.75,0.43);
    \node at (0,-1.5) {$\mathrm A_2$};\end{scope}
    \end{tikzpicture}
```

几何上根系 $\mathrm{A}_2$ 有两类嵌入 $\mathrm{G}_2$ 的方法，
分别是将 $\mathrm{A}_2$ 六个根打到 $\mathrm{G}_2$ 的六个长根或者六个短根。
然而 Dynkin 图上二者并没有作为[[诱导子图]]的嵌入关系（即小图的顶点并不能作为大图顶点的子集，
使得小图具有所有大图中对应顶点的边）。

在诱导子图关系下，Dynkin 图的极大Dynkin 子图为：

- $\mathrm{A}_{n+1}$：$\mathrm{A}_n$（具有两个共轭的嵌入，在Dynkin 图自同构下共轭，下同）。
- $\mathrm{B}_{n+1}$：$\mathrm{A}_n$、$\mathrm{B}_n$。
- $\mathrm{C}_{n+1}$：$\mathrm{A}_n$、$\mathrm{C}_n$。
- $\mathrm{D}_{n+1}$：$\mathrm{A}_n$（具有两个共轭）、$\mathrm{D}_n$。
- $\mathrm{E}_{n+1}$：$\mathrm{A}_n$、$\mathrm{D}_n$、$\mathrm{E}_n$（特别地，
  对于 $\mathrm E_6$ 有 $\mathrm D_5\cong\mathrm E_5$ 互相共轭）。
- $\mathrm{F}_4$：$\mathrm{B}_3$、$\mathrm{C}_3$。
- $\mathrm{G}_2$：$\mathrm{A}_1$（具有两个共轭）。

```terms
Dynkin 图:
  en: Dynkin diagram
  de: Dynkin-Diagramm :n
  fr: diagrammes de Dynkin :m
```
