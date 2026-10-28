# Data blocks

Data blocks are fenced blocks holding data about the page, which the caller names and reads (`dataBlocks`); they are not shown in the body, and what they read comes with the result (`data`). These examples have one data block, `notes`, read as its text, and allowed only outside environments.

Data blocks are not in the body.

```````````````````````````````` example
前段

```notes
关于这一页的数据。
```

后段
.
<p>前段</p>
<p>后段</p>
````````````````````````````````

A fence with a name not registered is still a code block.

```````````````````````````````` example
```sources
群: 某书
```
.
<pre class="bm-code-block" data-highlight="sources"><code>群: 某书</code></pre>
````````````````````````````````

A data block in an environment is an error (`outsideEnvironments`).

```````````````````````````````` example
::: theorem
```notes
数据
```
:::
.
!error data_block_position {"name":"notes"}
````````````````````````````````

A data block's fence takes no parameters.

```````````````````````````````` example
```notes 参数
群
```
.
!error data_block_parameters {"name":"notes"}
````````````````````````````````
