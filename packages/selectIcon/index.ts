import type { App } from "vue";
import SelectIcon from "./SelectIcon.vue";

import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

// 使用install方法，在app.use挂载
SelectIcon.install = (app: App) => {
  app.component(SelectIcon.__name as string, SelectIcon);
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
  }
  (app as any).use(ElementPlus);
};

export default SelectIcon;
