import { relative } from 'node:path';

/**
 * 预处理错误消息通常以 "文件:行号: " 开头；拆出位置，路径改为相对仓库根目录（root 以 / 结尾），
 * 消息中的其他绝对路径也去掉 root 前缀。file 为错误所属文件（消息中没有路径时使用）。
 * 错误带有列号（error.column，从 1 起）时一并给出，供编辑器标出位置。
 */
export function describeError(root, error, file) {
  const match = error.message.match(/^(\/[^\n]*?\.(?:md|ya?ml))(?::(\d+))?: ([\s\S]*)$/);
  const path = match?.[1] ?? file;
  return {
    file: path && path.startsWith(root) ? relative(root, path).split('\\').join('/') : path ?? null,
    line: match?.[2] ? Number(match[2]) : null,
    ...(Number.isInteger(error.column) ? { column: error.column } : {}),
    message: (match?.[3] ?? error.message).replaceAll(root, ''),
  };
}
