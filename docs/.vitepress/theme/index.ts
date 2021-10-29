import Theme from "vitepress/dist/client/theme-default";
import Tree from "../../../devui/tree";

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(Tree);
  },
};
