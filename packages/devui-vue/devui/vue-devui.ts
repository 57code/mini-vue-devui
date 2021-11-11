import type { App } from 'vue'
import TreeInstall, { Tree } from './tree'

const installs = [
  TreeInstall,
]

export {
  Tree,
}

export default {
  version: '0.0.1',
  // 实现vue3插件，需要实现一个install方法
  // 将来接收一个App实例，createApp()
  install(app: App): void {
    installs.forEach((p) => app.use(p as any))
  }
}