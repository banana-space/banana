# 对照检查

`npm run compare`（`scripts/compare.mjs`、`scripts/compare/`）把一个基准提交与本工作目录各完整构建一次，逐个比较两边的 `public/`，把差异按种类归并写成报告。用来确认不应改变页面的修改（重构、升级依赖、修改三个包）确实没有改变页面，有意的改变只出现在预期之处。

```sh
npm run compare                       # 基准为 origin/main（先 fetch），报告写到 .build/compare/report.md
npm run compare -- --base <提交>       # 指定基准
npm run compare -- --skip-base        # 基准不重新构建，用上次的结果
npm run compare -- --skip-result      # 本工作目录不重新构建
npm run compare -- --report <文件>     # 报告写到别处
```

- 基准在 `.build/compare/base/` 中检出（git worktree，分离 HEAD），在那里完整构建。依赖相同时复制本目录的 `node_modules`（克隆或硬链接，不用符号链接），也复制 TikZ 缓存：没有它时完整构建要慢得多（见 [TikZ 图形](tikz.md)）。两边的 `content/` 不同时会提示，报告中也包括内容造成的差异。
- 比较时 HTML 的每个标签、每段文字各占一行，用 Myers 算法求差异；差异按“改了哪种行、在哪种行之后、在哪种文件中”归并，同一个原因造成的上千个页面的差异只报告一次，并附一个例子。
- 搜索索引比较每个页面解码后的 Pagefind fragment（送进索引的文字与字段）；其余的 Pagefind 文件由它们决定，不另外比较。
- 允许的差异写在 `scripts/compare/allowed.mjs`：每条是一个说明加一个改写函数，比较前作用于两边，应当尽量窄。现在的条目是站点生成器与 Hugo 的构建之间的差异，与仍用 Hugo 构建的 main 对照时需要，合并之后可以去掉。
- 报告中也写两边的构建时间，以及构建中最大的单个进程的峰值内存（macOS 与 Linux 上用 `time` 测得）。
- 有差异（允许的除外）时退出码为 1。

`tests/compare.mjs` 测试差异的计算与归并。
