import { cp, mkdtemp, readFile, rm, symlink, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

export const projectRoot = fileURLToPath(new URL('../../', import.meta.url));
const defaults = ['scripts', 'assets', 'static', 'i18n', 'data', 'content', 'site.yaml'];

// 测试使用固定的示例内容和分类树，不依赖、也不复制项目中的真实条目。
const fixtures = join(projectRoot, 'tests/fixtures');

export async function createProject(name, paths = defaults) {
  const root = await mkdtemp(join(tmpdir(), `banana-${name}-`));
  try {
    for (const path of paths) {
      const source = path === 'content' || path.startsWith('content/') ? join(fixtures, path) : join(projectRoot, path);
      await cp(source, join(root, path), { recursive: true });
    }
    if (paths.includes('data')) await cp(join(fixtures, 'data'), join(root, 'data'), { recursive: true });
    await symlink(join(projectRoot, 'node_modules'), join(root, 'node_modules'));
    if (paths.includes('site.yaml')) {
      // Tests use example.org rather than the production address.
      const config = (await readFile(join(root, 'site.yaml'), 'utf8')).replace(/^baseURL: .*$/m, 'baseURL: https://example.org/');
      await writeFile(join(root, 'site.yaml'), config);
    }
    return root;
  } catch (error) { await rm(root, { recursive: true, force: true }); throw error; }
}

export function buildProject(root, extra = []) {
  execFileSync(process.execPath, ['scripts/prebuild.mjs', ...extra], { cwd: root, stdio: 'pipe' });
  execFileSync(process.execPath, ['scripts/site.mjs', ...extra], { cwd: root, stdio: 'pipe' });
}
