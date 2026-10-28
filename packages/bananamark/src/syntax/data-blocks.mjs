import { problem, sourceError, guarded } from '../messages.mjs';

/**
 * Data blocks: fenced blocks whose content is data about the page rather than part of it, such as a site's term
 * translations (```terms). bananamark knows none of them; the caller names each and reads
 * it (transformDocument's dataBlocks):
 *
 *   dataBlocks: { terms: { read: (source, { lang, fail }) => …, outsideEnvironments: true } }
 *
 * The block's fence takes no parameters and must be closed; outsideEnvironments: it must stand outside environments. read gets
 * the block's content and the page's lang, and reports errors with fail(message, offset), offset within source (the
 * error then names the line of the page). The block is left out of the page; what read returns is in the document's
 * meta.data, { name: [value of each block, in order] }, each name there even with no block.
 */

/** The names bananamark itself gives fenced blocks: math, and tikz and bibliography when they are on. */
const reservedNames = ({ tikz, bibliography } = {}) => ['math', ...(tikz ? ['tikz'] : []), ...(bibliography ? ['bibliography'] : [])];

export function checkDataBlocks(blocks, syntax) {
  const reserved = reservedNames(syntax);
  for (const [name, block] of Object.entries(blocks)) {
    if (!/^\w+$/.test(name) || reserved.includes(name)) throw sourceError('', problem('data_block_name', { name }));
    if (typeof block?.read !== 'function') throw sourceError('', problem('data_block_read', { name }));
  }
}

/** The data block at offset start: { name, value, end }, or undefined when there is none. */
export function readDataBlock(text, start, blocks, { lang, fail, inEnvironment }) {
  const fence = text.slice(start).match(/^ {0,3}(`{3,}|~{3,})(\w+)\b([^\n]*)(?:\n|$)/);
  if (!fence || !Object.hasOwn(blocks, fence[2])) return;
  const name = fence[2], block = blocks[name];
  if (fence[3].trim()) fail(problem('data_block_parameters', { name }), start);
  if (block.outsideEnvironments && inEnvironment) fail(problem('data_block_position', { name }), start);
  const close = new RegExp(`^ {0,3}${fence[1][0]}{${fence[1].length},}[ \\t]*(?:\\n|$)`, 'gm');
  const bodyStart = start + fence[0].length;
  close.lastIndex = bodyStart;
  const closing = close.exec(text);
  if (!closing) fail(problem('data_block_unclosed', { name }), start);
  const value = guarded(`${name}.read`, () => block.read(text.slice(bodyStart, closing.index), { lang, fail: (message, offset = 0) => fail(message, bodyStart + offset) }), message => fail(message, start));
  return { name, value, end: closing.index + closing[0].length };
}
