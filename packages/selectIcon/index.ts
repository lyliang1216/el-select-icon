import type { App } from "vue";
import SelectIcon from "./SelectIcon.vue";


// 使用install方法，在app.use挂载
SelectIcon.install = (app: App) => {
  app.component(SelectIcon.__name as string, SelectIcon);
};

export default SelectIcon;
