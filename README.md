# mini-vue-devui

愿景：让每一个前端都能做出属于自己的组件库。

## 前言

大家好，我是[村长](https://space.bilibili.com/480140591)，欢迎关注我的公众号「[村长学前端](https://gitee.com/57code/picgo/raw/master/%E6%89%AB%E7%A0%81_%E6%90%9C%E7%B4%A2%E8%81%94%E5%90%88%E4%BC%A0%E6%92%AD%E6%A0%B7%E5%BC%8F-%E6%A0%87%E5%87%86%E8%89%B2%E7%89%88.png)」一起学习。

## 朴素的请求
请给本项目和[Vue DevUI](https://gitee.com/devui/vue-devui)点个star鼓励一下村长和kagol吧！


## 项目描述

此项目是华为开源组件库[Vue DevUI](https://gitee.com/devui/vue-devui)的mini版，是我和[DevUI](https://devui.design/)项目负责人[Kagol](https://github.com/kagol)老师一起做的B站直播节目【[我要做开源](https://space.bilibili.com/480140591/channel/seriesdetail?sid=411659)】中产出的学习项目，所以它不能用于实际项目开发。它的主要作用是带大家学习做开源的方法和如何建设一个组件库。这是一个长期的过程：我们要搭建项目基础架构，解决开发过程中遇到的各种各样的问题，设计和实现一些典型的组件。所以你完全可以把自己掌握学到的知识提交上来，一起完善这个项目。

## 快速开始

### 第一步：clone 源代码
```
git clone https://github.com/57code/mini-vue-devui.git
```

### 第二步：安装依赖

全局安装`yarn`和`lerna`
```
npm i -g yarn lerna
``

安装项目依赖
```
yarn
```

### 第三步：本地启动
```
lerna exec --scope mini-vue-devui yarn dev
```

## 使用 mini-vue-devui

### 第一步：创建一个`vite`+`vue3`的工程
```
yarn create vite vite-project --template vue
```

### 第二步：安装 mini-vue-devui
```
yarn add mini-vue-devui
```

### 第三步：使用 mini-vue-devui

修改`src/main.ts`文件
```
// 引入 MiniDevUI
import MiniDevUI from 'mini-vue-devui'

createApp(App)
.use(MiniDevUI) // 使用 MiniDevUI
.mount('#app')
```

## 历次直播

为了让大家更方便的观看学习，我给大家准备了该系列视频列表：

[【我要做开源】Vue DevUI开源指南](https://space.bilibili.com/480140591/channel/seriesdetail?sid=411659)

欢迎小伙们快乐学习的同时动动小手，三连一波鼓励一下村长吧！


## 文档链接

下面是Kagol在掘金发布的直播相关文档，大家学习之余，多多点赞鼓励他吧！

[组件库从0到1](https://juejin.cn/column/6961051124031815687)

## 致谢

[DevUI](https://devui.design/)团队的很多小伙伴都加入到我们直播分享中来，他们不仅亲自编写文档，还上场给大家做干货分享，真心感谢你们，下面是参加分享的小伙伴列表：

kagol：[github](https://github.com/kagol)、[掘金](https://juejin.cn/user/712139267650141)

wailen：[github](https://github.com/SituC)、[掘金](https://juejin.cn/user/2928754707411629)

iel：[github](https://github.com/RootWater)、[掘金](https://juejin.cn/user/1538972011203662)

