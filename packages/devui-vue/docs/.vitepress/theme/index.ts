import Theme from "vitepress/dist/client/theme-default";
import Tree from "../../../devui/tree";

// 主题样式
import 'vitepress-theme-demoblock/theme/styles/index.css'
// 插件的组件，主要是demo组件
import { registerComponents } from "./register-components.js";

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(Tree);

    // 注册demoblock插件需要用到的两个组件
    registerComponents(app);
  },
};
