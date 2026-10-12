---
title: 参与编辑
---

{@help:editor}

在香蕉空间，有两种方式参与编辑：

- [在线编辑](@sec:online)，并直接提交。

- [在本地编辑](@sec:offline)，并通过 GitHub 提交。

香蕉空间的全部内容都在 GitHub 仓库 [banana-space/banana](https://github.com/banana-space/banana) 中。
两种编辑方式都在该仓库中创建 PR（拉取请求），
由维护者审阅后合并入网站。

## 在线编辑 {@sec:online}

点击页面右下角的 “编辑本页” 按钮，即可开始编辑。

点击指向不存在的条目的链接后选择 “创建条目”，也可以开始编辑。

在编辑器中，点击“预览”按钮或按 Ctrl+S（或 Cmd+S）查看预览。
你的编辑会作为草稿自动保存在浏览器中，直到你提交为止。

点击“提交”按钮会将你的修改提交为 GitHub PR。
提交后，你也可以接着修改你的 PR。

若有关于具体条目的问题，请在
[GitHub Discussions](https://github.com/banana-space/banana/discussions) 中发起讨论。

## 在本地编辑 {@sec:offline}

在线编辑每次只能编辑一个页面。
若想要批量修改，或者修改讲义目录、分类树结构、学科导航框等元数据，
则需要直接在 GitHub 仓库中提交 PR。流程如下：

1. 将仓库 [banana-space/banana](https://github.com/banana-space/banana) 
   在你自己的 GitHub 账户中创建分支（fork）。

2. 按照仓库中的说明，把仓库克隆到本地并运行本地服务器。
   在本地修改文件，并在本地服务器上查看结果。

3. 对结果满意后，提交 PR（拉取请求），由维护者审阅后合并。

若遇到困难，可以在
[GitHub Discussions](https://github.com/banana-space/banana/discussions) 中发起讨论。

### 页面在哪里

百科条目位于 `content/wiki/<标题>/index.md`，
条目用到的图片放在同一个文件夹中。详见 @help:typesetting。

讲义位于 `content/books/<标题>/` 文件夹，
其中 `collection.yaml` 定义章节结构，
讲义的每一页位于一个子文件夹。详见 @help:books。

分类树的结构在 `data/categories.yaml`。详见 @help:page。

学科导航框在 `content/navboxes/<标题>.yaml`。详见 @help:notices。
