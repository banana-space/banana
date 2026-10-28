// KaTeX prints “No character metrics for '𝟙' …” for every glyph it has no
// metrics for (𝟙 and the mirrored letters, which BananaMath supplies; see
// _katex.scss). They are harmless, so build scripts drop them from the output.

const noise = /^No character metrics for .+ in style .+ and mode .+$/;

/** Copy a stream to `target` line by line, leaving out KaTeX's missing-metrics lines. */
export function pipeWithoutKatexNoise(stream, target) {
  let pending = '';
  stream.setEncoding('utf8');
  stream.on('data', chunk => {
    const lines = (pending + chunk).split('\n');
    pending = lines.pop();
    for (const line of lines) if (!noise.test(line)) target.write(`${line}\n`);
  });
  stream.on('end', () => { if (pending && !noise.test(pending)) target.write(pending); });
}
