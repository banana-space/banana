// bananamark-tikz's errors, in English (passed to bananamark's messages as a caller's tables).
export default {
  tikz_failed: "TikZ compilation failed: {message}",
  tikz_command: "TikZ diagrams cannot use {command}",
  tikz_unsafe: "the TikZ diagram's output has something not allowed: {found}",
  tikz_total_timeout: "too many or too complex TikZ diagrams: compiling them took more than {seconds} s in all",
  tikz_timeout: "TikZ compilation took more than {seconds} s; check for loops or an overly complex diagram",
  tikz_worker_exit: "the TikZ compiler exited unexpectedly ({code})",
};
