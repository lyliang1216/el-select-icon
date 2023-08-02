/**
 * Copy https://github.com/element-plus/element-plus/blob/dev/global.d.ts
 * 为了解决某些依赖（比如 vxe-table 4.2.7-beta.0 ~ 4.3.11 和 vue-router 4.2.0）导致的没有 Element Plus 组件类型提示的问题
 */

declare module "vue" {
  export interface GlobalComponents {
    ElButton: typeof import("element-plus")["ElButton"];
    ElIcon: typeof import("element-plus")["ElIcon"];
    ElPopover: typeof import("element-plus")["ElPopover"];
  }
}

export {};
