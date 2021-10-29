import type { App } from 'vue'
import Tree from './src/tree'

// 声明为插件，可以引入组件
Tree.install = function(app: App): void {
  app.component(Tree.name, Tree)
}

export { Tree }

// 单独引入Tree，为后面按需做基础
export default {
  title: 'Tree 树',
  category: '数据展示',
  status: '20%',
  install(app: App): void {
    app.use(Tree as any)
  }
}

