import { createHmac, timingSafeEqual } from 'node:crypto';

// 签名的 cookie：服务器不保存会话，重启后会话仍然有效。值为 base64url(JSON) + "." + HMAC-SHA256。

const encode = value => Buffer.from(JSON.stringify(value)).toString('base64url');

export function sign(secret, value) {
  const payload = encode(value);
  return `${payload}.${createHmac('sha256', secret).update(payload).digest('base64url')}`;
}

/** The signed value, or undefined when the signature is wrong or the value has expired (exp, in ms). */
export function verify(secret, text) {
  if (typeof text !== 'string') return;
  const [payload, signature, extra] = text.split('.');
  if (!payload || !signature || extra !== undefined) return;
  const expected = createHmac('sha256', secret).update(payload).digest();
  const given = Buffer.from(signature, 'base64url');
  if (given.length !== expected.length || !timingSafeEqual(given, expected)) return;
  let value;
  try { value = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8')); } catch { return; }
  if (!value || typeof value !== 'object' || !(value.exp > Date.now())) return;
  return value;
}

export function parseCookies(header = '') {
  const cookies = new Map();
  for (const part of header.split(';')) {
    const index = part.indexOf('=');
    if (index > 0) cookies.set(part.slice(0, index).trim(), part.slice(index + 1).trim());
  }
  return cookies;
}

/** A Set-Cookie value; maxAge in seconds (0 deletes the cookie). */
export function cookie(name, value, { maxAge, secure, path = '/api/' }) {
  return [`${name}=${value}`, `Path=${path}`, `Max-Age=${maxAge}`, 'HttpOnly', 'SameSite=Lax', ...(secure ? ['Secure'] : [])].join('; ');
}
