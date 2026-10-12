// The part of Node's Buffer the preprocessing uses: Buffer.from(text).toString('base64').
export const Buffer = {
  from(text) {
    return {
      toString(encoding) {
        if (encoding !== 'base64') throw new Error(`Buffer: ${encoding} is not supported in the browser`);
        let binary = '';
        for (const byte of new TextEncoder().encode(text)) binary += String.fromCharCode(byte);
        return btoa(binary);
      },
    };
  },
};
