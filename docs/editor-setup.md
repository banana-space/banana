# 在线编辑的 GitHub 设置

在线编辑（`/edit/`）需要三样东西：一个 GitHub OAuth App 用于登录，一个 token 用于创建 PR，一个会话密钥。本文按步骤说明本地试用与正式部署时怎样设置。设计与接口见 [预览与检查](preview.md)。

## 它们各自做什么

- **OAuth App：确认“你是谁”。** 用户点“用 GitHub 登录”，跳到 GitHub 的授权页面；同意后 GitHub 把用户送回网站，附上一个一次性凭证，网站用它查到用户名后即丢弃。登录不请求任何权限，网站拿不到用户的仓库。
- **Token：真正创建 PR。** 网站用它在站点仓库中建分支 `edit/<用户名>/…`、写入 commit（作者是登录的用户）、打开 PR。它只对站点仓库有权限。
- **会话密钥：给登录 cookie 签名。** 用户登录后，浏览器保存一个签名的 cookie（30 天）；没有密钥无法伪造。

三者都放在环境变量里，不进入仓库。

## 本地试用

以下假设你把仓库 fork 到自己的账号下，为 `<你的账号>/<仓库名>`，serve 运行在 `http://127.0.0.1:1414`。

### 1. 建 OAuth App

1. 打开 <https://github.com/settings/applications/new>（Settings → Developer settings → OAuth Apps → New OAuth App）。
2. 填写：

   | 字段 | 本地试用 |
   | --- | --- |
   | Application name | 香蕉空间（本地测试） |
   | Homepage URL | `http://127.0.0.1:1414` |
   | Authorization callback URL | `http://127.0.0.1:1414/api/auth/callback` |

   回调地址必须与浏览器地址栏中的主机名一致：用 `127.0.0.1` 打开编辑器，就不能用 `localhost`。一个 OAuth App 只有一个回调地址，本地与正式站点各建一个。
3. 点 **Register application**，复制 **Client ID**。
4. 点 **Generate a new client secret**，复制 secret。它只显示一次，丢失后只能重新生成。

### 2. 建 token

fine-grained token 只能访问其所有者（个人或组织）名下的仓库。仓库在个人账号下时，只能用该账号自己的 token，PR 由该账号发起。

1. 打开 <https://github.com/settings/personal-access-tokens/new>（Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token）。
2. 填写：

   | 字段 | 填写 |
   | --- | --- |
   | Token name | `banana-api-local` |
   | Expiration | 30 或 90 天 |
   | Resource owner | `<你的账号>` |
   | Repository access | Only select repositories → `<仓库名>` |
   | Repository permissions | Contents：Read and write；Pull requests：Read and write（Metadata 自动为只读） |

3. 生成后复制 token（`github_pat_…`），它也只显示一次。

### 3. 写密钥文件

生成会话密钥：

```sh
openssl rand -hex 32
```

在仓库根目录新建 `.env.api`（已被 git 忽略）：

```
BANANA_SESSION_SECRET=上面生成的随机字符串
BANANA_GITHUB_CLIENT_ID=第 1 步的 Client ID
BANANA_GITHUB_CLIENT_SECRET=第 1 步的 Client secret
BANANA_GITHUB_TOKEN=第 2 步的 github_pat_…
```

### 4. 推送本地提交

提交时，服务器检查 GitHub 上该文件是否仍是编辑开始时的版本，不同则报告“页面已被修改”。编辑器读取的是本地的内容，所以先让 GitHub 上的目标分支与本地一致：

```sh
git push origin main
```

### 5. 启动

serve 转发 `/api/`，API 读取密钥文件：

```sh
npm run serve -- --port 1414 --api http://127.0.0.1:8787
npm run api -- --env-file .env.api --github-repo <你的账号>/<仓库名> --base-url http://127.0.0.1:1414/ --environment development
```

API 打印 `listening on http://127.0.0.1:8787/api/` 后即可使用；开头没有 “not configured” 的警告，说明密钥都已读到。

### 6. 试一遍

1. 打开 `http://127.0.0.1:1414/edit/?path=wiki/正则环/index.md`，点“用 GitHub 登录”。第一次会出现 GitHub 的授权页面（不请求任何仓库权限），同意后回到编辑器，右上角显示头像和名字。
2. 修改一点内容，点“提交…”，写一句说明后提交。对话框显示“提交成功”；仓库中出现分支 `edit/<用户名>/…` 和一个以页面标题为标题的 PR。
3. 再修改、再提交，显示“已更新 PR”：仍是同一个 PR，多了一个 commit。
4. 刷新编辑器，上方显示“正在编辑你的 PR #… 中的版本”，内容是 PR 中的版本。
5. 冲突：在 GitHub 网页上修改 PR 分支中的这个文件，再从编辑器提交，编辑器以比较视图显示两个版本的差异；确认后再次提交即可。

## 正式部署

与本地试用的不同之处：

1. **OAuth App**：另建一个（最好建在组织 `banana-space` 名下：组织的 Settings → Developer settings → OAuth Apps），Homepage URL 为站点地址，回调地址为 `https://<站点>/api/auth/callback`。
2. **Token**：站点仓库 `banana-space/banana` 属于组织，可以由一个机器人账号发起 PR：
   1. 注册一个机器人 GitHub 账号，邀请它加入 `banana-space`，并给它站点仓库的写权限（Write）。
   2. 组织的 Settings → Personal access tokens：允许 fine-grained token 访问组织资源（可以设为需要批准）。
   3. 用机器人账号建 fine-grained token：Resource owner 选 `banana-space`，Repository access 只选 `banana`，权限同上（Contents、Pull requests 读写）。若组织要求批准，由组织管理员在 Settings → Personal access tokens → Pending requests 中批准。
   4. token 有有效期，到期前需要重新生成并更新密钥文件。
3. **密钥文件**：`~/banana/api.env`（权限 600），由 `deploy/install.sh` 生成，会话密钥已随机填好，只需填写 GitHub 的三个值。正式环境必须设置 `BANANA_SESSION_SECRET`，否则每次重启后所有人都需要重新登录。
4. **启动参数**：

   ```sh
   npm run api -- --github-repo banana-space/banana --env-file ~/banana/api.env
   ```

   不加 `--base-url` 时使用 site.yaml 的 `baseURL`（即站点地址），不加 `--environment` 时使用 production，与正式构建一致；不要使用 `--dev-user`。服务器上由 systemd 单元 `deploy/banana-api.service` 以这些参数运行，见 [服务器部署](deploy.md)。

## 常见问题

- **GitHub 提示 redirect_uri 不匹配**：OAuth App 的回调地址与 `--public-url`（默认为 `--base-url` 的源）不一致。
- **登录回来后提示 “the login expired or did not start here”**：打开编辑器所用的主机名与回调地址不同（`localhost` 与 `127.0.0.1`），浏览器因此没有带上登录用的 cookie；或者登录超过 10 分钟没有完成。
- **提交时提示 “GitHub refused the submission”**：token 过期、权限不足，或仓库名不对。API 的终端输出中有 GitHub 返回的具体原因。
- **总是提示页面已被修改**：GitHub 上目标分支的这个文件与编辑器读取的版本不同，通常是本地内容还没有推送，或服务器还没有部署最新的提交。
