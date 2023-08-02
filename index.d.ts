import SelectIcon from "./dist/packages/selectIcon/SelectIcon.vue";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    SelectIcon: typeof SelectIcon;
  }
}
