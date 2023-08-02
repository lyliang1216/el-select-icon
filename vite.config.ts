import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VitePluginStyleInject from "vite-plugin-style-inject";
import dts from "vite-plugin-dts";
import { resolve } from "path";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
  },
  plugins: [vue(), VitePluginStyleInject(), dts({ include: "./packages" })],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      images: fileURLToPath(new URL("./src/assets/images", import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ["vue"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
    },
    lib: {
      entry: resolve(__dirname, "./packages/index.ts"),
      name: "SelectIcon",
      fileName: "bundle",
    },
  },
});
