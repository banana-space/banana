---
title: 给几何人的平展上同调
---

本笔记是我学习时候（2023年）记的笔记，为了在介绍基础理论的同时来阐述这些和代数拓扑、
复几何类似的结果和性质。
正如题所言，这个笔记是作为（代数）几何人的笔者写的，所以有很多细节我认为就算不知道也无妨，
还有自己就能推理的无聊
细节（主要集中在交换代数和点集拓扑）就会被我略去。因此可能不适合其他方向的人观看。

【笔记记录人】：温尊

## 参考文献*

```bibliography
ProEtale13:
  type: preprint
  author: [Bhargav Bhatt, Peter Scholze]
  title: The pro-étale topology for schemes
  year: 2013
  arxiv: '1309.1198'

BottTu82:
  type: book
  author: [Raoul Bott, Loring W. Tu]
  title: Differential Forms in Algebraic Topology
  year: 1982
  publisher: Springer

ConradNagata07:
  type: article
  author: Brian Conrad
  title: Deligne’s notes on Nagata compactifications
  year: 2007
  journaltitle: Journal of the Ramanujan Mathematical Society
  volume: 22
  number: 3

SGA-4-1/2:
  type: book
  author: Pierre Deligne
  title: Cohomologie Étale (SGA 4-1/2)
  year: 1977
  publisher: Springer

Weil-II:
  type: article
  author: Pierre Deligne
  title: La conjecture de Weil. II
  year: 1980
  journaltitle: Pub. Math. IHES
  volume: 52

FGAexplained:
  type: book
  author: [Barbara Fantechi, Lothar Göttsche, Luc Illusie, Steven L. Kleiman, Nitin Nitsure, Angelo Vistoli]
  title: Fundamental Algebraic Geometry, Grothendieck’s FGA Explained
  year: 2005
  publisher: AMS

Freitag88:
  type: book
  author: [Eberhard Freitag, Reinhardt Kiehl]
  title: Étale Cohomology and the Weil Conjecture
  year: 1988
  publisher: Springer
  location: Berlin, Heidelberg

Fulton98:
  type: book
  author: William Fulton
  title: Intersection Theory
  edition: 2
  year: 1998
  publisher: Springer

GH78:
  type: book
  author: [Phillip Griffiths, Joseph Harris]
  title: Principles of Algebraic Geometry
  year: 1978
  publisher: Wiley

AGChern58:
  type: article
  author: Alexander Grothendieck
  title: La théorie des classes de Chern
  year: 1958
  journaltitle: Bull. Soc. Math. France
  volume: 86

SGA-IV:
  type: book
  author: [Alexander Grothendieck, Michael Artin, J.-L. Verdier]
  title: Théorie des Topos et Cohomologie Etale des Schémas (SGA 4)
  volume: 2
  year: 1972
  publisher: Springer-Verlag

SGA-I:
  type: book
  author: [Alexander Grothendieck, Michèle Raynaud]
  title: Revêtements étales et groupe fondamental (SGA 1)
  year: 1971
  publisher: Springer-Verlag

SpanierAT66:
  type: book
  author: Edwin H. Spanier
  title: Algebraic Topology
  year: 1966
  publisher: Springer

hartshorne1977algebraic:
  type: book
  author: Robin Hartshorne
  title: Algebraic Geometry
  series: Graduate Texts in Mathematics
  number: 52
  year: 1977
  publisher: Springer

Hatcher02:
  type: book
  author: Allen Hatcher
  title: Algebraic Topology
  year: 2002
  publisher: Cambridge University Press

Huy05:
  type: book
  author: Daniel Huybrechts
  title: Complex Geometry, An Introduction
  year: 2005
  publisher: Springer

Ful06:
  type: book
  author: 'Fu, Lei'
  title: Algebraic Geometry
  year: 2006
  publisher: TsingHua and Springer

Ful15:
  type: book
  author: 'Fu, Lei'
  title: Étale Cohomology Theory
  edition: Revised
  year: 2015
  publisher: World Scientific

Lee12:
  type: book
  author: John M. Lee
  title: Introduction to Smooth Manifolds
  year: 2012
  publisher: Springer
  location: New York

Mil80:
  type: book
  author: James S. Milne
  title: Étale Cohomology
  year: 1980
  publisher: Princeton University Press

milneLEC:
  type: book
  author: James S. Milne
  title: Lectures on Étale Cohomology
  year: 2013
  url: https://www.jmilne.org/math/CourseNotes/LEC.pdf

milneCFT:
  type: book
  author: James S. Milne
  title: Class Field Theory
  year: 2020
  url: https://www.jmilne.org/math/CourseNotes/CFT.pdf

AAG07:
  type: book
  author: Amnon Neeman
  title: Algebraic and Analytic Geometry
  year: 2007
  publisher: Cambridge University Press

Olsson16:
  type: book
  author: Martin Olsson
  title: Algebraic Spaces and Stacks
  year: 2016
  publisher: AMS

PureMotives13:
  type: book
  author: [Jacob P. Murre, Jan Nagel, Chris A. M. Peters]
  title: Lectures on the Theory of Pure Motives
  year: 2013
  publisher: AMS

StacksProject:
  type: online
  site: Stacks Project
  author: {literal: Stacks project collaborators}
  title: The Stacks project
  year: 2023
  url: https://stacks.math.columbia.edu

GAGA56:
  type: article
  author: Jean-Pierre Serre
  title: Géométrie algébrique et géométrie analytique
  year: 1956
  journaltitle: Annales de l’Institut Fourier
  volume: 6

Serre2000:
  type: book
  author: Jean-Pierre Serre
  title: Local Algebra
  year: 2000
  publisher: Springer

VoisinHdg-I:
  type: book
  author: Claire Voisin
  title: Hodge Theory and Complex Algebraic Geometry I
  year: 2002
  publisher: Cambridge University Press
```
