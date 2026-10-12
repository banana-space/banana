# 服务器部署

站点 `https://bananaspace.org/`：Apache 提供静态文件，`/api/` 转发到编辑接口；旧站（MediaWiki）只读，位于 `/legacy/`。服务器定时拉取 GitHub 上的 `banana-space/banana`，有新的提交就完整构建并发布。本文的文件都在 `deploy/` 中（Apache 配置除外，见下）。

## 布局

```
~/banana/                      运行服务的普通用户
  build/                       拉取、完整构建（含 .build/ 缓存）
  live/                        编辑接口在此运行，只在构建成功后切换到新的提交
  editor.env                   编辑接口的密钥（权限 600）
  failed                       最近一次构建失败的提交（成功后删除）
  started                      编辑接口最近一次启动时的提交
  started                      编辑接口最近一次启动时的提交
/var/www/banana/               归同一用户所有，部署不需要 root
  releases/<提交>/              每次构建的 public/，与上一版相同的文件为硬链接
  current -> releases/<提交>    Apache 的 DocumentRoot
/var/www/html/banana-space/    旧站，不变
```

`deploy/deploy.sh` 由 systemd 的用户定时器每次部署结束两分钟后运行一次：

1. `build/` 取得 `main` 的最新提交；与 `current` 相同则跳过。
2. 完整构建（`npm run build`，`package-lock.json` 变化时先 `npm ci`）。失败时记下这个提交，不再重试，直到出现更新的提交；站点与编辑接口保持原来的版本。
3. 复制到 `releases/<提交>/`，原子切换 `current`，Apache 不需要重新加载。
4. `live/` 切换到同一提交，重启编辑接口（约 10 秒）。构建期间编辑接口一直运行旧版本，因为它的 Hugo 监视自己的工作目录，所以两个工作目录必须分开。
5. 只保留最近 3 个版本。

每一步都可以重复：中断后再次运行时从未完成的一步继续。

## 准备

1. **服务器软件**：Node.js 22 以上、Git、rsync、OpenSSL，以及 Hugo Extended **0.167.0**（放在 `/usr/local/bin`；它内置的 KaTeX 须与 npm 包一致）。内存：编辑接口约 1 GB，完整构建期间更多，加上旧站的 MySQL 与 PHP，4 GB 的服务器应加 2–4 GB 交换空间，第一次构建时观察 `free -m`。磁盘：每个工作目录的 `.build/` 数 GB，每个版本约 500 MB（硬链接后增量很小）。
2. **仓库**：在 GitHub 上为 `main` 设规则：只能经 PR 合并、需要审阅、禁止强制推送。合并即发布，审阅就是发布前的检查；机器人令牌有写权限，这条规则也防止它直接写入 `main`。
3. **GitHub 登录与提交**：按 [在线编辑的 GitHub 设置](editor-setup.md) 的“正式部署”建 OAuth App（回调 `https://bananaspace.org/api/auth/callback`）与机器人令牌。
4. **域名**：为 `bananaspace.org` 加 A/AAAA 记录（根域名不能用 CNAME），`www` 保留。生效后取得同时包含两个名称的证书：`sudo certbot certonly --apache -d bananaspace.org -d www.bananaspace.org`。

修改时间取自 Git 历史（见 [开发文档](README.md#其他约定)），所以工作目录必须是完整的克隆，不能用 `--depth`。

## 安装

以运行服务的普通用户（不是 root）执行：

```sh
git clone https://github.com/banana-space/banana.git ~/banana/live
~/banana/live/deploy/install.sh
```

`install.sh` 克隆 `build/`；用 sudo 建立 `/var/www/banana`（归本用户所有）并执行 `loginctl enable-linger`（用户单元在未登录时也运行）；生成 `editor.env`（会话密钥已随机生成）；安装并启用 `banana-editor.service`、`banana-deploy.service`、`banana-deploy.timer`。可以重复运行；修改了 `deploy/` 中的单元文件后，重新运行它以安装新的版本。

然后：

1. 在 `~/banana/editor.env` 中填写 GitHub 的三个值。
2. 第一次部署（完整构建，要编译全部 TikZ 图形，需要几分钟以上），之后开始定时检查：

   ```sh
   systemctl --user start banana-deploy
   systemctl --user start banana-deploy.timer
   ```

`node` 不在 `/usr/local/bin` 或 `/usr/bin` 中时（例如用 nvm 安装），修改两个 service 文件的 `PATH`。

## Apache

站点配置 `deploy/apache-site.conf` 不在仓库中（已被 git 忽略，由管理员保存，手动复制到服务器）。它是完整的站点配置：`http://` 与 `www` 永久跳转到 `https://bananaspace.org/`；静态站点；`/api/` 转发到 `127.0.0.1:8787`；旧站的 `/legacy/wiki/<页面>` 与 `/legacy/w/`，旧地址 `/w/…` 跳转到 `/legacy/w/…`。需要 `a2enmod ssl rewrite proxy proxy_http deflate`。它取代原来的 `/var/www/html/.htaccess`：旧站的短地址改为 `Alias`，`/static/` 与 503 页面 `/errors/` 照旧指向原来的文件，CPU 过载时的 503 与对最近更改、RSS、链入页面的限制移到配置中，只作用于 `/legacy/`。

- `<Directory /var/www/html/banana-space>` 中 PHP 的处理方式须与服务器原来的一致（mod_php，或 php-fpm 的 `SetHandler`）。
- 维护 cookie 的值不进仓库：在服务器上建 `/etc/apache2/conf-enabled/banana-secrets.conf`（权限 600），写一行 `Define BANANA_MAINTENANCE_COOKIE <值>`。
- 切换后删除（或改名）`/var/www/html/.htaccess`：`/legacy/w/` 的请求映射到 `/var/www/html/banana-space/`，Apache 仍会读取上级目录的 `.htaccess`，其中的规则会重复生效。原来以 `/var/www/html` 为 DocumentRoot 的默认站点（如 `000-default.conf`）也要停用或改为跳转，否则它继续以旧的方式提供旧站。
- 产生 `/run/cpu-overloaded` 的监控也会看到完整构建：构建期间旧站可能返回 503。构建以 `Nice=10` 运行，监控若只计正常优先级的 CPU 时间（`/proc/stat` 的 user 与 system，不含 nice），则不受影响。

旧的 `/wiki/<页面>` 由新站接管：迁移过来、名称相同的条目，Apache 自动补上末尾的 `/`；改了名或没有迁移的页面显示新站的 404 页面。

## 旧站只读

`LocalSettings.php`：

```php
$wgServer = "https://bananaspace.org";
$wgScriptPath = "/legacy/w";
$wgArticlePath = "/legacy/wiki/$1";
$wgResourceBasePath = $wgScriptPath;
// $wgUploadPath、$wgLogos 等若写了绝对地址，也改到 /legacy/w/ 下。

// 只读，登录照常：撤销所有人（'*' 包括已登录的用户）的写入权限。
foreach ( [ 'edit', 'createpage', 'createtalk', 'upload', 'reupload', 'move', 'delete', 'createaccount' ] as $right ) {
	$wgRevokePermissions['*'][$right] = true;
}
$wgSiteNotice = "旧站已只读。新站：[https://bananaspace.org/ bananaspace.org]";
```

不用 `$wgReadOnly`：它禁止一切数据库写入，可能使登录失败。修改 `LocalSettings.php` 本身会使 MediaWiki 的解析缓存失效；如果启用了 `$wgUseFileCache`，清空文件缓存。旧站渲染所依赖的其他服务保持运行。

## 切换步骤

新站先在 `bananaspace.org` 上运行、试用，此时 `www.bananaspace.org` 仍是旧站：

1. 完成上面的准备与安装。Apache 中先只启用新站的 `bananaspace.org` 部分（不含旧站与跳转）。
2. 试用：页面与搜索；用 GitHub 登录；在编辑器中提交一次修改，确认仓库中出现 PR；合并它，几分钟后站点更新。
3. 切换（几分钟）：备份旧站的数据库与 `images/`；修改 `LocalSettings.php`；换上完整的 `apache-site.conf`；`sudo apachectl configtest && sudo systemctl reload apache2`。
4. 检查：`/legacy/wiki/<页面>` 能打开、能登录、不能编辑；`https://www.bananaspace.org/w/index.php?title=X` 跳转到 `https://bananaspace.org/legacy/w/index.php?title=X`；`/wiki/<已迁移的条目>` 打开新站。

## 日常

- **日志**：`journalctl --user -u banana-deploy`（部署与构建输出）、`journalctl --user -u banana-editor`（编辑接口）。`systemctl --user list-timers` 显示下一次检查的时间。
- **立即部署**：`systemctl --user start banana-deploy`。
- **构建失败**：站点保持原来的版本，失败的提交记在 `~/banana/failed`。推送修复后自动部署；要重试同一提交（例如失败是因为网络），删除这个文件。
- **回退**：在 GitHub 上 revert 有问题的提交。直接改 `current` 只是临时的，下一次检查会重新发布 `main`。
- **令牌到期**：机器人令牌有有效期，到期前在 GitHub 上重新生成，写入 `editor.env`，再 `systemctl --user restart banana-editor`。
- **修改部署脚本**：`deploy.sh` 从 `live/` 运行，随部署更新；单元文件修改后须在服务器上重新运行 `install.sh`。
