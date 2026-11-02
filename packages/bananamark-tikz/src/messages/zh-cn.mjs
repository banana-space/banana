// bananamark-tikz's errors, in Chinese (passed to bananamark's messages as a caller's tables).
export default {
  tikz_failed: "TikZ 编译失败：{message}",
  tikz_command: "TikZ 图形中不能使用 {command}",
  tikz_unsafe: "TikZ 图形的输出中有不允许的内容：{found}",
  tikz_total_timeout: "TikZ 图形太多或太复杂：编译共超过 {seconds} 秒",
  tikz_timeout: "TikZ 编译超过 {seconds} 秒；请检查循环或过于复杂的图形",
  tikz_worker_exit: "TikZ 编译进程意外结束（{code}）",
};
