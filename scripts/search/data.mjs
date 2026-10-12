// Display data travels in one Pagefind metadata field. Pagefind 1.5 indexes
// every metadata field and keeps only alphanumeric characters, so the JSON is
// written one byte per Braille pattern (U+2800–U+28FF, a symbol category):
// the field yields no search terms at all, unlike base64 whose fragments
// would match prefix and fuzzy queries. static/js/search.js decodes it.
export function encodeSearchData(value) {
  return Array.from(new TextEncoder().encode(JSON.stringify(value)), byte => String.fromCharCode(0x2800 + byte)).join('');
}

export function decodeSearchData(text) {
  return JSON.parse(new TextDecoder().decode(Uint8Array.from(text, char => char.charCodeAt(0) - 0x2800)));
}
