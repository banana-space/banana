---
title: 附录
notices:
  - name: 问题
    items:
      - 35.4 (c) 的最后一段（“so $s$ is a face of precisely two $m$-simplices iff $h(s)\in\operatorname{Bd} M$”）似乎与前一段的结论矛盾，像是多余的残句。
---

- 4\.3 (a) $\mathbb{Z}/m\oplus\mathbb{Z}/n$ contains an element $(n,m)$ of order $mn$,
  so $\mathbb{Z}/m\oplus\mathbb{Z}/n\simeq\mathbb{Z}/mn$.

  (b) $G\simeq\mathbb{Z}/2\oplus\mathbb{Z}/9\oplus\mathbb{Z}/4\oplus\mathbb{Z}/9$.

  (c) $3,6=2\cdot3,36=4\cdot9$.

  (d) $30=3\cdot2\cdot5,180=9\cdot4\cdot5$.

- 6\.4 (a) $H_1(X_n)=\mathbb{Z}^{2n}$, $H_2(X_n)=\mathbb{Z}$.

  (b) $H_1(Y_n)=\mathbb{Z}^{n-1}\oplus\mathbb{Z}/2$, $H_2(Y_n)=0$.

- 9\.6 Using Exercise 39.2, $H_i(K,K_0)\simeq\tilde{H}_i(K/K_0)
  =\tilde{H}_i(\sigma/\operatorname{Bd}\sigma)\simeq\tilde{H}_i(S^2)
  =\begin{cases}\mathbb{Z},&n=2\\0,&\text{else}\end{cases}$.

- 10\.3 $H_i(S;\mathbb{Z}/3)=\begin{cases}\mathbb{Z}/3,&i=0\\\mathbb{Z}/3,&i=1\\0,&i=2\end{cases}$.
  $H_i(S;\mathbb{Z}/4)=\begin{cases}\mathbb{Z}/4,&i=0\\\mathbb{Z}/4\oplus\mathbb{Z}/2,&i=1\\\mathbb{Z}/2,&i=2\end{cases}$.

- 14\.1 $f(a)=A',N'$, $f(b)=B'$, $f(c)=C'$, $f(d)=C'$, $f(e)=E'$,
  $f(f)=E',F'$, $f(g)=F',G'$, $f(h)=G',H'$, $f(i)=I'$, $f(j)=J'$,
  $f(k)=K',L'$, $f(l)=L'$, $f(m)=L',M'$, $f(n)=N'$, $f(o)=O'$,
  altogether $2^6=64$ simplicial approximations.

- 21\.2 (a) Note that the ball $|z|\le c\simeq$ an interior point $0$,
  and so is image $h(|z|\le c)\simeq h(0)$ in $\mathbb{R}^2-0$.
  In particular, the boundary $h(S_c)$ collapses into a point $h(0)$.
  It follows that $h_*\{S_c\}=h_*\{0\}=0$.

  (b) Set $F(z,t)=z^n+t(a_{n-1}z^{n-1}+\cdots+a_0)$.
  The image of $F$ never meets $0$ if $c$ is sufficiently large
  since $|F(z,t)|\ge c^n-t(|a_{n-1}|c^{n-1}+\cdots+|a_0|)>0$.
  This is a homotopy between $F(-,1)=h$ and $F(-,0)=k$.

  (c) $h_*=k_*\colon H_1(S_c)\to H_1(\mathbb{R}^2-0)$ by (b), yet $h_*=0,k_*=n$.

- 22\.4 (a) $F(-,t)\colon M\to M$ for a fixed $t\in(-\epsilon,\epsilon)$
  is a map with no fixed point, and $\simeq\operatorname{id}$ as $-$ varies from $t$ to $0$.
  Then $\chi(M)=\Lambda(\operatorname{id})=0$.

  (b) Exactly those with $\chi(M)=0$, i.e. the torus or the Klein bottle.

- 24\.7 The long exact sequence we shall use is
  \[
  \begin{tikzcd}
      0\rar&H_2(K;G)\rar&H_2(K;G')\rar&H_2(K;G'')\ar[dll,"\beta_*"description]& \\
       &H_1(K;G)\rar&H_1(K;G')\rar&H_1(K;G'')\ar[dll,"\beta_*"description]& \\
       &H_0(K;G)\rar&H_0(K;G')\rar&H_0(K;G'')\rar&0\\
  \end{tikzcd}
  \]

  (a) For $|K|=P^2$ and $0\to\mathbb{Z}\to\mathbb{Z}\to\mathbb{Z}/2\to0$, we have
      \[
      \begin{tikzcd}
          0\rar&0\rar&0\rar&\mathbb{Z}/2\ar[dll,"1"description]& \\
           &\mathbb{Z}/2\rar&\mathbb{Z}/2\rar&\mathbb{Z}/2\ar[dll,"0"description]& \\
           &\mathbb{Z}\rar&\mathbb{Z}\rar&\mathbb{Z}/2\rar&0.\\
      \end{tikzcd}
      \]
      For $|K|=P^2$ and $0\to\mathbb{Z}/2\to\mathbb{Z}/4\to\mathbb{Z}/2\to0$, we have
      \[
      \begin{tikzcd}
          0\rar&\mathbb{Z}/2\rar&\mathbb{Z}/2\rar&\mathbb{Z}/2\ar[dll,"1"description]& \\
           &\mathbb{Z}/2\rar&\mathbb{Z}/2\rar&\mathbb{Z}/2\ar[dll,"0"description]& \\
           &\mathbb{Z}/2\rar&\mathbb{Z}/4\rar&\mathbb{Z}/2\rar&0.\\
      \end{tikzcd}
      \]

  (b) For $|K|=$ Klein and $0\to\mathbb{Z}\to\mathbb{Z}\to\mathbb{Z}/2\to0$, we have
      \[
      \begin{tikzcd}
          0\rar&0\rar&0\rar&\mathbb{Z}/2\ar[dll,"{(0,1)}"description]& \\
           &\mathbb{Z}\oplus\mathbb{Z}/2\rar&\mathbb{Z}\oplus\mathbb{Z}/2\rar&\mathbb{Z}/2\oplus\mathbb{Z}/2\ar[dll,"0"description]& \\
           &\mathbb{Z}\rar&\mathbb{Z}\rar&\mathbb{Z}/2\rar&0.\\
      \end{tikzcd}
      \]
      For $|K|=$ Klein and $0\to\mathbb{Z}/2\to\mathbb{Z}/4\to\mathbb{Z}/2\to0$, we have
      \[
      \begin{tikzcd}
          0\rar&\mathbb{Z}/2\rar&\mathbb{Z}/2\rar&\mathbb{Z}/2\ar[dll,"{(0,1)}"description]& \\
           &\mathbb{Z}/2\oplus\mathbb{Z}/2\rar&\mathbb{Z}/4\oplus\mathbb{Z}/2\rar&\mathbb{Z}/2\oplus\mathbb{Z}/2\ar[dll,"0"description]& \\
           &\mathbb{Z}/2\rar&\mathbb{Z}/4\rar&\mathbb{Z}/2\rar&0.\\
      \end{tikzcd}
      \]

- 25\.3 $S^{n+1}$ is the suspension of $S^n$, and let
  $Sf\colon(w*S^n)/S^n\to(w*S^n)/S^n$ induced by $f$
  be the suspension of $f$. The naturality of the boundary maps
  in the long exact sequence of the pair $(w*S^n,S^n)$
  gives the commutative diagram, so $\deg Sf=\deg f$.
  \[
  \begin{tikzcd}
      \tilde{H}_{n+1}(S^{n+1})\ar[r,"\simeq"',"\partial"]\ar[d,"Sf_*"]&\tilde{H}_n(S^n)\ar[d,"f_*"]\\
      \tilde{H}_{n+1}(S^{n+1})\ar[r,"\simeq"',"\partial"]&\tilde{H}_n(S^n)
  \end{tikzcd}
  \]
  The conclusion follows from induction
  and $k\colon S^1\to S^1,k(z)=z^n$ has degree $n$.

- 26\.2 Let us take a look at a grotesque diagram below.
  \[
  \begin{tikzcd}
      &H_p(X)\ar[rr,"\color{lime}{i_*}",bend left=30]\ar[dr,"\color{blue}{j_*}"]& &H_p(X,A)\ar[rr,"\beta",bend left=30]\ar[dr,"\color{lime}{\partial_*}"]& &H_{p-1}(A,B)\ar[rr,"\color{red}{\partial_*}",bend left=30]\ar[dr,"\pi"]& &H_{p-2}(B)\\
      H_p(A)\ar[ur,"\color{lime}{k_*}"']\ar[dr,"\color{red}{i_*}"]& &H_p(X,B)\ar[ur,"\eta"']\ar[dr,"\color{blue}{\partial_*}"]& &H_{p-1}(A)\ar[ur,"\color{red}{i_*}"']\ar[dr,"\color{lime}{k_*}"]& &H_{p-1}(X,B)\ar[ur,"\color{blue}{\partial_*}"']& \\
      &H_p(A,B)\ar[rr,"\color{red}{\partial_*}"',bend right=30]\ar[ur,"\pi"']& &H_{p-1}(B)\ar[rr,"\color{blue}{j_*}"',bend right=30]\ar[ur,"\color{red}{i_*}"']& &H_{p-1}(X)\ar[ur,"\color{blue}{j_*}"']& &
  \end{tikzcd}
  \]
  The three sequences whose maps are of the same color are exact. From the exactness of
  \[
  H_p(A)\stackrel{i_*}{\longrightarrow}H_p(A)\stackrel{\pi_*}{\longrightarrow}H_p(A,A)
  \stackrel{\partial_*}{\longrightarrow}H_{p-1}(A)
  \]
  we deduce that
  $H_p(A,A)=0$, and due to the commutativity (as all four maps are mere inclusions) of
  \[
  \begin{tikzcd}
      &H_p(X,B)\ar[dr,"\eta"]&\\
      H_p(A,B)\ar[ur,"\pi"]\ar[dr,"\eta'"]&&H_p(X,A)\\
      &H_p(A,A)\ar[ur,"\pi'"]&
  \end{tikzcd}
  \]
  we get $\eta\circ\pi=0$. Then apply the braid lemma in Exercise 1(b),
  we obtain the exactness of the sequence with Greek alphabets above the arrows in the above diagram.

- 26\.3 [@Hatcher] Section 2.2 Exercise 38, p.159.

- 29\.1 (b) By (a), $H_p(\text{tsc})=\begin{cases}\mathbb{Z}^2,&p=0\\0,&p>0\end{cases}$.

- 31\.3 $j\colon(X,A)\to(X,X)$ is a homotopy equivalence, so $H_p(X,A)=H_p(X,X)=0$.

- 31\.5 [@Hatcher] Theorem 2.10, p.111.
  \[
  \begin{aligned}
      \partial D_{\Delta_p}i_p&=\sum_{j\le i}(-1)^i(-1)^j
      l((\epsilon_0,0),\dots,(\widehat{\epsilon_j,0}),\dots,(\epsilon_i,0),(\epsilon_i,1),\dots,(\epsilon_p,1))\\
      &+\sum_{j\ge i}(-1)^i(-1)^{j+1}
      l((\epsilon_0,0),\dots,(\epsilon_i,0),(\epsilon_i,1),\dots,(\widehat{\epsilon_j,1}),\dots,(\epsilon_p,1)).
  \end{aligned}
  \]
  The terms with $i=j$ in the two sums cancel except for
  $l((\widehat{\epsilon_0,0}),(\epsilon_0,1),\dots,(\epsilon_p,1))$,
  which is $j\circ i_p=j_\#(i_p)$,
  and $-l((\epsilon_0,0),\dots,(\epsilon_p,0),(\widehat{\epsilon_p,1}))$,
  which is $-i\circ i_p=-i_\#(i_p)$.
  The terms with $i\ne j$ are exactly $-D_{\Delta_p}\partial i_p$ since
  \[
  \begin{aligned}
      D_{\Delta_p}\partial i_p&=\sum_{i<j}(-1)^i(-1)^j
      l((\epsilon_0,0),\dots,(\epsilon_i,0),(\epsilon_i,1),\dots,(\widehat{\epsilon_j,1}),\dots,(\epsilon_p,1))\\
      &+\sum_{j>i}(-1)^{i-1}(-1)^j
      l((\epsilon_0,0),\dots,(\widehat{\epsilon_j,0}),\dots,(\epsilon_i,0),(\epsilon_i,1),\dots,(\epsilon_p,1)).
  \end{aligned}
  \]

- 33\.1 Let $X_1$ be the arc minus the ends $(0,-1)$ and $(1,\sin 1)$,
  and $X_2$ be $X$ minus a point of $X_1$.
  $X_1,X_2$ is an open covering of $X$, yielding an exact sequence
  $$
  H_1(X_1)\oplus H_1(X_2)\longrightarrow H_1(X)
  \stackrel{\partial}{\longrightarrow}H_0(X_1\cap X_2)
  \stackrel{i}{\longrightarrow}H_0(X_1)\oplus H_0(X_2)
  $$
  All path components of $X_1$ and $X_2$ are contractible, so
  $H_1(X_1)\oplus H_1(X_2)=0$, and consequently
  $H_1(X)\simeq\mathrm{im}\,\partial=\ker i=0$. And $H_0(X)=\mathbb{Z}$ since $X$ is contractible.

- 33\.3 $S^n$ is the sphere with equator $S^{n-1}$ and latitude $[-1,1]$,
  identifying $S^{n-1}\times1$ to a north pole
  and $S^{n-1}\times(-1)$ to a south pole. Hence
  $H_p(S^n)=\begin{cases}\mathbb{Z},&p=0,n\\0,&\text{else}\end{cases}$.

- 35\.4 (a) As $\overline{\operatorname{St}}\, v$
  is contractible and all of its homology groups vanish
  except for $p=0$, for $p>0$
  $H_p(\operatorname{Lk} v)\simeq H_p(\overline{\operatorname{St}}\, v-v)
  \simeq H_{p+1}(\overline{\operatorname{St}}\, v,\overline{\operatorname{St}}\, v-v)
  =\begin{cases}\mathbb{Z},&p=n-1\\0,&\text{else}\end{cases}$ when $x\in\operatorname{Int} M$
  or $0$ when $x\in\operatorname{Bd} M$.

  (b) Suppose that there is a simplex $\sigma$ of dimension less than $m$
  that is not a face of any simplex of dimension $m$.
  Then $\operatorname{Lk}\hat{\sigma}=\operatorname{Bd}\sigma$ is a sphere of dimension less than
  $m-1$,
  contradicting (a) for $v=\hat{\sigma}$ and $K\cup\operatorname{sd}\sigma$ in place of $K$.

  (c) $s$ cannot be a face of three simplices of maximal dimension, for otherwise
  the interiors of two of the simplices would overlap.
  If there are two $m$-simplices with $s$ being a face,
  then $\hat{s}$ is an interior point of $K$.
  Therefore $s$ is a face of precisely two $m$-simplices
  iff $\hat{s}$ is an interior point for any neighborhood of $\hat{s}$ in $K$,
  iff $h(s)\in\operatorname{Int} M$;
  on the contrary $s$ is a face of precisely one $m$-simplex iff $h(s)\in\operatorname{Bd} M$.

  so $s$ is a face of precisely two $m$-simplices
  iff $h(s)\in\operatorname{Bd} M$.

- 35\.5 $S^3\simeq\operatorname{Bd}(B^2\times B^2)=(B^2\times\operatorname{Bd} B^2)\cup(\operatorname{Bd} B^2\times B^2)
  \simeq T_1\cup T_2$, and $T_1\cap T_2\simeq\operatorname{Bd} B^2\times\operatorname{Bd} B^2=S^1\times S^1=$
  a hollow torus $T$, so
  \[
  \begin{tikzcd}
      0\rar&H_3(T)\rar&H_3(T_1)\oplus H_3(T_2)\rar&H_3(S^3)
      \rar&H_2(T)\rar&H_2(T_1)\oplus H_2(T_2)\rar&H_2(S^3)\\
      &0\ar[u,equal]&0\ar[u,equal]&\mathbb{Z}\rar["1"]\ar[u,equal]
      &\mathbb{Z}\ar[u,equal]&0\ar[u,equal]&0\ar[u,equal]\\
      \rar&H_1(T)\rar&H_1(T_1)\oplus H_1(T_2)\rar&H_1(S^3)
      \rar&H_0(T)\rar&H_0(T_1)\oplus H_0(T_2)\rar&H_0(S^3)\\
      &\mathbb{Z}\oplus\mathbb{Z}\rar["{(1,-1)}"]\ar[u,equal]&\mathbb{Z}\oplus\mathbb{Z}\ar[u,equal]
      &0\ar[u,equal]&\mathbb{Z}\ar[u,equal]&\mathbb{Z}\oplus\mathbb{Z}\ar[u,equal]&\mathbb{Z}\ar[u,equal]
  \end{tikzcd}
  \]

- 38\.1 [@Rotman] Lemma 8.18, Theorem 8.19, pp.201–2.

  Lemma. For a cell $e\in X$, the closure $\bar{e}$
  lies in a finite CW subcomplex.

  Proof. We proceed by induction on $p=\dim e$;
  the statement is obviously true when $p=0$.
  If $p>0$, then Theorem 38.2(a) gives $\bar{e}-e=g(\operatorname{Bd} B)\subset X^{p-1}$.
  By “closure-finiteness”,
  $\bar{e}$ meets only finitely many cells other than $e$, say, $e_1,\dots,e_m$,
  and we have just seen that $\dim e_i\le p-1$ for all $i$.
  By induction, there is a finite CW subcomplex $X_i$ containing $\bar{e}_i$,
  for $i=1,\dots,m$, and each $X_i$ is closed.
  But $\bar{e}\subset e\cup X_1\cup\cdots\cup X_m$, so that this union of
  finitely many cells is closed and hence is a finite CW subcomplex.

  (a) For each cell $e$ with $A\cap e\ne\varnothing$,
  choose a point $a_e\in A\cap e$,
  and let $E$ be the set comprised of all such $a_e$.
  For each cell $e$, the lemma says that there is a finite CW subcomplex $X_e$
  containing $\bar{e}$. Therefore $E\cap\bar{e}\subset E\cap X_e$ is a finite set
  and hence is closed in $\bar{e}$. Since $X$ has the weak topology,
  $E$ is closed in $X$; indeed the same argument shows that
  every subset of $E$ is closed in $X$, hence $E$ is discrete.
  But $E$ is also compact, being a closed subset of $A$. Thus $E$ is finite,
  so that $A$ meets only finitely many cells $e$, say, $e_1,\dots,e_m$.

  (b) By the lemma again, there are finite CW subcomplexes $X_i$
  with $\bar{e}_i\subset X_i$ for $i=1,\dots,m$.
  It follows that $A$ lies in the finite CW subcomplex
  $\bigcup\limits_{1\le i\le m}X_i$.

- 38\.4 (a) This is a special case of the proposition, having nothing to do with
  CW complexes, that $X\times Y$ is compactly generated
  if $X$ is compactly generated Hausdorff and $Y$ is locally compact.
  For the proof, cf. [@Hatcher] Theorem A.15, p.531.

  (b) Let $\{f_\alpha\colon B_\alpha\to X\}_\alpha$
  be the family of the characteristic maps of $X$,
  $\{g_\beta\colon B_\beta\to Y\}_\beta$
  be the family of the characteristic maps of $Y$. Then
  $\{(f_\alpha,g_\beta)\colon B_\alpha\times B_\beta\to X\times Y\}_{\alpha,\beta}$
  is a CW complex structure on $X\times Y$.
  Observe that every compact set $A$ of $X\times Y$ lies in
  the product of its projections onto $X$ and $Y$,
  and the two projections are compact and hence
  lie in finite subcomplexes of $X$ and $Y$ according to Exercise 38.1,
  so $A$ lies in the image of a finite union of products $B_\alpha\times B_\beta$.
  Hence the product CW structure generates $X\times_C Y$.

- 38\.5 [@LW] Theorem 1.7, p.80.

  Let $X$ be a regular cell complex.
  Let $T(X)$ denote the abstract simplicial complex
  with vertices corresponding to the cells of $X$ and
  $n$-simplices members of the set
  $\{(e_0,e_1,\dots,e_n)\mid\text{each }e_i\text{ is a cell, }
  e_0\subsetneq e_1\subsetneq\dots\subsetneq e_n\}$.
  Let $|T(X)|$ be the geometric realization of this complex.
  We define a homeomorphism $\Psi\colon|T(X)|\to X$ such that
  if $e$ is a cell of $X$, $\Psi^{-1}(e)$ is a subcomplex of $|T(X)|$.

  The map $\Psi$ is constructed by first noticing that
  $T(X)=\bigcup\limits_n T(X^n)$ and inductively constructing
  $\Psi^n\colon|T(X^n)|\to X^n$ so that $\Psi^n$ defines a triangulation of
  each cell of dimension less than $n+1$
  which contains the triangulated boundary of the cell as a subcomplex.
  First observe that if $\Psi^{n-1}$ is defined and $e^n$ is an $n$-cell,
  then $\operatorname{Bd} e^n$ is a subcomplex of $X^{n-1}$,
  and $(\Psi^{n-1})^{-1}(\operatorname{Bd} e^n)$ is a subcomplex of $|T(X^n)|$
  which is homeomorphic to the $(n-1)$-sphere.
  The usual conical construction enables us to
  extend $\Psi^{n-1}$ over $|T(X^n)|$.

  Geometrically, we are performing a generalized
  barycentric subdivision of the complex $X$.
  The new vertices correspond to the “barycenters” of the cells of $X$.
  The new cells correspond to the cones over the new $(n-1)$-cells of $X$
  with vertices at the “barycenters” of the $n$-cells.

- 39\.2 [@Hatcher] Proposition 2.22, p.124.

  Let $V$ be a neighborhood of $A$ in $X$ that deformation retracts onto $A$.
  We have a commutative diagram
  \[
  \begin{tikzcd}
      H_p(X,A)\ar[r]\ar[d,"q_*"]&H_p(X,V)\ar[d,"q_*"]&H_p(X-A,V-A)\ar[l]\ar[d,"q_*"]\\
      H_p(X/A,A/A)\ar[r]&H_p(X/A,V/A)&H_p(X/A-A/A,V/A-A/A)\ar[l]
  \end{tikzcd}
  \]
  The upper left horizontal map is an isomorphism since
  in the long exact sequence of the triple $(X,V,A)$
  the groups $H_p(V,A)$ are zero for all $p$,
  because a deformation retraction of $V$ onto $A$
  gives a homotopy equivalence of pairs $(V,A)\simeq(A,A)$, and $H_p(A,A) = 0$.
  The deformation retraction of $V$ onto $A$
  induces a deformation retraction of $V/A$ onto $A/A$,
  so the same argument shows that
  the lower left horizontal map is an isomorphism as well.
  The other two horizontal maps are isomorphisms directly from excision.
  The right-hand vertical map $q$ is an isomorphism
  since $q$ restricts to a homeomorphism on the complement of $A$.
  From the commutativity of the diagram it follows that
  the left-hand $q_*$ is an isomorphism.

- 39\.3 $D_p(A)$ is a free abelian group with a basis $\{(f_\alpha)_*(\gamma):f_\alpha$
  is a characteristic map for a $p$-cell of $A\}$,
  and inclusion simply maps each $p$-cell of $A$ to itself in $X$.

  (a) According to Five-lemma, the isomorphisms between
  the homology groups of CW complexes and simplicial homology groups
  induce isomorphisms between the relative ones.
  \[
  \begin{tikzcd}
      H_p(\mathcal{D}(A))\ar[r]\ar[d,"\simeq"]&H_p(\mathcal{D}(X))\ar[r]\ar[d,"\simeq"]
      &H_p(\mathcal{D}(X,A))\ar[r]\ar[d]
      &H_{p-1}(\mathcal{D}(A))\ar[r]\ar[d,"\simeq"]&H_{p-1}(\mathcal{D}(X))\ar[d,"\simeq"]\\
      H_p(A)\ar[r]&H_p(X)\ar[r]&H_p(X,A)\ar[r]&H_{p-1}(A)\ar[r]&H_{p-1}(X)
  \end{tikzcd}
  \]
  (b) Let $X_p=X^p\cup A$ for all integers $p$. Repeat the proof of Theorem 39.4,
  replacing $H_i(X_p)$ by $H_i(X_p,A)$ and $H_i(X)$ by $H_i(X,A)$, we get
  $H_i(X_p,X_{p-1})\simeq H_i(X,A)$ (for a detailed proof,
  see [@Jiang] Section 3.2, 3.3, pp.99–104).

  Plus, the isomorphism between
  $\mathcal{D}(X,A)\simeq\bigoplus\limits_\alpha H_p(B^p_\alpha,S^{p-1}_\alpha)$
  and $H_p(X_p,X_{p-1})$ is given by
  \[
  \bigoplus\limits_\alpha H_p(B^p,S^{p-1})
  \stackrel{\bigoplus\limits_\alpha(f_\alpha)_*}{\longrightarrow}
  H_p(X_p,X_{p-1}),\quad
  H_p(X_p,X_{p-1})
  \stackrel{\bigoplus\limits_\alpha(q_\alpha)_*}{\longrightarrow}
  \bigoplus\limits_\alpha H_p(B^p,S^{p-1}),
  \]
  where the index $\alpha$ is taken over all $p$-cells in $X-A$,
  $f_\alpha$ is the characteristic map for $e^p_\alpha$, and
  $q_\alpha$ is the quotient map collapsing $X^p-e^p_\alpha$ to a point.

- 39\.4 (a) Let $\gamma$ be the map induced by the following diagram
  \[
  \begin{tikzcd}
      (E^n_+,S^{n-1})\ar[r,hookrightarrow]\ar[d,"\simeq"',"g"]&(S^n,E^n_-)\ar[d,"h"]\\
      (\sigma,\operatorname{Bd}\sigma)\ar[r,"\gamma",dashed]&(S^n,x_0)
  \end{tikzcd}
  \]
  where $E^n_-$ is the hemisphere with the south pole $x_0$,
  $g$ is a homeomorphism, $h$ is a homotopy equivalence
  stretching $E^n_+$ to cover $S^n$, and the inclusion
  induces an isomorphism in homology since
  \[
  H_n(E^n_+,S^{n-1})\simeq H_n(S^n-U,E^n_--U)\simeq H_n(S^n,E^n_-)
  \]
  where $U$ is a small disk neighborhood of $x_0$, and
  the first isomorphism is by homotopy equivalence and the second by excision.

  Suppose that $\phi$ is multiplication by $d$, then it is the homomorphism
  induced by $\gamma$ composite a map from $S^n$ to $S^n$ of degree $d$.

  (b) This is because the inclusions induce an isomorphism
  $\oplus(i_\alpha)_*\colon\bigoplus\limits_\alpha H_n(S^n_\alpha,p)\to H_n(X,p)$.

  (c) For $p>0$, $B_{p-1}$, a subgroup of the free group $C_{p-1}$,
  is also free and thus projective. It follows that there is
  a homomorphism $k_{p-1}\colon B_{p-1}\to C_p$ such that
  $\partial\circ k_{p-1}=\operatorname{id}_{B_{p-1}}$,
  and therefore $C_p=k_{p-1}B_{p-1}\oplus Z_p$.
  \[
  \begin{tikzcd}
      & & & B_{p-1}\ar[d,equal]\ar[dl,"k_{p-1}"',dashed] & \\
      0\ar[r]&Z_p\ar[r]&C_p\ar[r,"\partial"]&B_{p-1}\ar[r]&0
  \end{tikzcd}
  \]
  For $p=0$, $H_0(C)=C_0/\partial C_1=C_0/\partial U_1$,
  and $A\coloneqq k_{-1}H_0(C)$ is non-trivial.
  \[
  \begin{tikzcd}
      & & & H_0(C)\ar[d,equal]\ar[dl,"k_{-1}"',dashed] & \\
      0\ar[r]&U_1\ar[r,"\partial"]&C_0\ar[r,"/\partial U_1"]&H_0(C)\ar[r]&0
  \end{tikzcd}
  \]
  (d) By (c), it suffices to construct a CW complex $X$
  whose cellular chain complex is isomorphic to
  $\partial\colon U_n\to Z_{n-1}\to0\to\cdots\to0\to\mathbb{Z}$ for each $n$
  (and $\partial U_1$ in place of $Z_{-1}$ for $n=0$)
  where the final $\mathbb{Z}$ is generated by a point in $A$,
  since $\partial=0$ on $Z_n$ and $\mathrm{im}\,\partial\subset\ker\partial$.

  Both $U_n$ and $Z_{n-1}$ are free abelian groups, bases denoted
  $\{x_\alpha\}$ and $\{y_\beta\}$, and write
  $\partial x_\alpha=\sum\limits_\beta d_{\beta\alpha}y_\beta$.
  Let $X^n=\bigvee\limits_\alpha S^n_\alpha$. We construct $X$ from $X^n$
  by attaching cells $e^{n+1}_\beta$ via maps $f_\beta\colon S^n\to X^n$
  such that the projection onto the summand $S^n_\alpha$
  has degree $d_{\beta\alpha}$. Plus, generate $A$ by other points if $|A|>1$.

- 43\.2 (a) Let us take
  \[
  \sigma_2^*,\ \ \sigma_1^*-\sigma_2^*,\ \ \sigma_2^*-\sigma_3^*,\ \
  \sigma_3^*-\sigma_4^*,\ \ \sigma_4^*-\sigma_5^*,\ \ \sigma_5^*-\sigma_6^*
  \]
  as a basis for $Z^2(C,E)$, and
  \[
  e_7^*,\ \ e_1^*,\ \ e_2^*,\ \ e_3^*,\ \ e_4^*,\ \ e_5^*,\ \
  e_1^*+e_2^*+e_3^*+e_4^*+e_5^*+e_6^*,\ \
  e_2^*+e_3^*-e_7^*+e_8^*,\ \ e_4^*+e_5^*-e_8^*+e_9^*
  \]
  as a basis for $C^1(C,E)$.
  We see that $\delta e_i^*=\sigma_i^*-\sigma_{i+1}^*$ for $i=1,\dots,5$; and
  \[
  \delta e_6^*=\sigma_6^*-\sigma_1^*,\quad\delta e_7^*=\sigma_2^*,
  \quad\delta e_8^*=\sigma_4^*,\quad\delta e_9^*=\sigma_6^*.
  \]
  Thus $\delta$ is surjective, i.e. $H^2(C,E)=0$.

  ```tikz
  \begin{tikzpicture}
      \draw[->,>=stealth](0,0)to(0,1);\draw[->,>=stealth](6,0)to(6,1);
      \draw[->,>=stealth](0,0)to(1,0);\draw[->,>=stealth](0.9,0)to(3,0);
      \draw[->,>=stealth](2.9,0)to(5,0);\draw(4.9,0)to(6,0);
      \draw(0,0.9)to(0,2)to(6,2)to(6,0.9);\draw(2,0.9)to(2,2)to(1.2,1.2);
      \draw(4,0.9)to(4,2)to(3.2,1.2);\draw(6,2)to(5.2,1.2);
      \draw[->,>=stealth](2,0)to(2,1);\draw[->,>=stealth](4,0)to(4,1);
      \draw[->,>=stealth](0,0)to(1.3,1.3);\draw[->,>=stealth](2,0)to(3.3,1.3);
      \draw[->,>=stealth](4,0)to(5.3,1.3);
      \draw[->,>=stealth](0.3,1.3)arc (-150:30:0.3);
      \draw[->,>=stealth](2.3,1.3)arc (-150:30:0.3);
      \draw[->,>=stealth](4.3,1.3)arc (-150:30:0.3);
      \draw[->,>=stealth](1.1,0.4)arc (-150:30:0.3);
      \draw[->,>=stealth](3.1,0.4)arc (-150:30:0.3);
      \draw[->,>=stealth](5.1,0.4)arc (-150:30:0.3);
      \draw (0,2.2) node {$v_0$};\draw (2,2.2) node {$v_1$};
      \draw (4,2.2) node {$v_2$};\draw (6,2.2) node {$v_0$};
      \draw (0,-0.2) node {$v_3$};\draw (2,-0.2) node {$v_4$};
      \draw (4,-0.2) node {$v_5$};\draw (6,-0.2) node {$v_3$};
      \draw (0.6,1.4) node {$\sigma_1$};\draw (2.6,1.4) node {$\sigma_3$};
      \draw (4.6,1.4) node {$\sigma_5$};\draw (1.4,0.5) node {$\sigma_2$};
      \draw (3.4,0.5) node {$\sigma_4$};\draw (5.4,0.5) node {$\sigma_6$};
      \draw (-0.25,0.9) node {$e_6$};\draw (6.25,0.9) node {$e_6$};
      \draw (2.25,0.9) node {$e_2$};\draw (4.25,0.9) node {$e_4$};
      \draw (1.2,1.5) node {$e_1$};\draw (3.2,1.5) node {$e_3$};
      \draw (5.2,1.5) node {$e_5$};\draw (1,-0.2) node {$e_7$};
      \draw (3,-0.2) node {$e_8$};\draw (5,-0.2) node {$e_9$};
  \end{tikzpicture}
  ```

  Note that $\delta(e_1^*+\cdots+e_6^*)=0$, and
  \[
  \delta(e_2^*+e_3^*-e_7^*+e_8^*)=0,\quad\delta(e_4^*+e_5^*-e_8^*+e_9^*)=0.
  \]
  That is to say, $e_1^*+\cdots+e_6^*,e_2^*+e_3^*-e_7^*+e_8^*,
  e_4^*+e_5^*-e_8^*+e_9^*$ constitute a basis for $1$-cocycles;
  but they are $1$-coboundaries as well, as
  \[
  -\delta(v_3^*+v_4^*+v_5^*)=e_1^*+\cdots+e_6^*,\quad
  -\delta v_4^*=e_2^*+e_3^*-e_7^*+e_8^*,\quad
  -\delta v_5^*=e_4^*+e_5^*-e_8^*+e_9^*,
  \]
  and therefore $H^1(C,E)=0$. Finally, $H^0(C,E)=0$.

  (b) The exact sequence
  \[
  \begin{tikzcd}
      0 \ar[r]& H^0(C,E) \ar[r]& H^0(C) \ar[r,"\simeq"]& H^0(E) &\\
      \ar[r]& H^1(C,E) \ar[r]& H^1(C) \ar[r,"\simeq"]& H^1(E) &\\
      \ar[r]& H^2(C,E) \ar[r]& H^2(C) \ar[r,"\simeq"]& H^2(E) \ar[r]& 0
  \end{tikzcd}
  \]
  yields $H^i(C) \simeq H^i(E)=\begin{cases}\mathbb{Z},&i=0,1\\0,&i=2\end{cases}$.

- 43\.3 (a), (b), (f).

- 44\.3 This is inferred by a general fact that
  if a chain map between free chain complexes $\phi \colon C \to C'$
  induces isomorphisms $\phi_* \colon H_p(C) \to H_p(C')$
  on homology groups for all $p$, then it also induces isomorphisms
  $\phi^* \colon H^p(C';G) \to H^p(C;G)$ on cohomology groups
  with any coefficient group $G$ for all $p$.
  The proof of the fact is an application of the Five-lemma to the diagram below.
  \[
  \begin{tikzcd}
      0\ar[r] & \operatorname{Ext}(H_{p-1}(C),G)\ar[r] & H^p(C;G)\ar[r] & \operatorname{Hom}(H_p(C),G)\ar[r] & 0\\
      0\ar[r] & \operatorname{Ext}(H_{p-1}(C'),G)\ar[r]\ar[u,"\simeq"'] & H^p(C';G)\ar[r]\ar[u,dashed] & \operatorname{Hom}(H_p(C'),G)\ar[r]\ar[u,"\simeq"'] & 0
  \end{tikzcd}
  \]

## 参考文献*

```bibliography
Hatcher:
  type: book
  label: Hatcher
  author: A. Hatcher
  title: Algebraic Topology
  publisher: Cambridge University Press
  year: 2002
Jiang:
  type: book
  label: Jiang
  author: 姜伯驹
  title: 同调论
  series: 北京大学数学教学系列丛书
  publisher: 北京大学出版社
  year: 2007
LW:
  type: book
  label: Lu&Wei
  author: [Lundell, Weingram]
  title: The Topology of CW Complexes
  series: The University Series in Higher Mathematics
  publisher: Van Nostrand Reinhold Company
  year: 1969
Rotman:
  type: book
  label: Rotman
  author: J. J. Rotman
  title: An Introduction to Algebraic Topology
  series: Graduate Texts in Mathematics
  number: 119
  publisher: Springer
  year: 1998
```
