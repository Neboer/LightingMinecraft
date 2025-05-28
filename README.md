# Lighting Minecraft

_灵动 MC_ 的官方网站 2.1.2 版

LightingMC 2.1.2

部署实例： https://minecraft.neboer.site

# 灵动 MC

灵动 mc 是一个 Minecraft 公益服务器，成立于 2015 年。我们专注于原版的生存体验，并紧跟游戏版本更新。
服务器里有专门的技术人员和管理团队，我们拥有有爱的玩家社区，完善的服务器生态。
灵动 mc 专注于公益服，并且会始终积极推动 Minecraft 社区的发展！

我们致力于为广大玩家提供新鲜、活力、安全、有趣的 minecraft 游戏体验，在玩家共同的努力下，让多人原版生存也可以激动人心！

# 技术栈简介

Vue3，纯前端，静态页面。

没有使用框架和组件库，所采用的依赖有
- Vue3
- Vite工具
- fontawesome
- [lightgallery](https://www.lightgalleryjs.com/)
- vuepress

# 部署说明

在部署之前需要进行配置，配置的具体步骤如下：

首先，确定部署的目标网站名称，比如 `https://minecraft.neboer.site` ，作为网站的前缀，这个前缀简写成`<prefix>`。

1. 修改`src/config.json`，将`imageBedPrefix`改成`<prefix>/img`
2. 修改`src/config.json`，将`docHomepage`改成`<prefix>/doc`
3. 修改`docs/src/.vuepress/config.js`，将`base`改成`/doc/`
4. 修改`docs/src/.vuepress/config.js`，将`themeConfig.nav[0].link`改成`<prefix>`

站点部署在 https://minecraft.neboer.site 上，此设置可以通过配置文件调整。

1. 在当前目录下执行 `yarn build`，生成`/dist`。
2. 在`/docs`下执行`yarn build`，生成`/docs/src/.vuepress/dist`
3. 在部署目录下新建根路径`<root-folder>/`，这个是 Web 的根目录。
4. 将`/dist/`内的全部内容递归拷贝到`<root-folder>/`下。
5. 新建文件夹`<root-folder>/doc`，将`/docs/src/.vuepress/dist`内全部内容拷贝到`<root-folder>/doc/`下。
6. 新建文件夹`<root-folder>/img`，将`/src/assets/images/gallery/`内的两个文件夹`ori`和`thumbnail`拷贝到`<root-folder>/img/`下。
7. 将静态文件目录`<root-folder>`部署到目标站点。

# 静态资源下载
src/assets目录下的内容并未提供，但你可以在 https://minecraft.neboer.site 上获取。

# 协议与版权声明

本网站 https://minecraft.neboer.site 基于GPL-3.0协议开源，其中的内容（文字和图片）以CC-BY协议发布。
