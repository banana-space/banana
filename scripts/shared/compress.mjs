import { constants, zstdCompressSync, zstdDecompressSync } from 'node:zlib';

// What the build keeps compressed (generated pages in memory, rendered bodies and serve's record on disk): zstd at
// its first level packs the site's 441 MB of generated pages into 30 MB in about 0.2 s, deflate's fastest level into
// 43 MB in about 0.8 s.

/** Compressed bytes. */
export const pack = bytes => zstdCompressSync(bytes, { params: { [constants.ZSTD_c_compressionLevel]: 1 } });

/** The bytes pack compressed. */
export const unpack = bytes => zstdDecompressSync(bytes);
