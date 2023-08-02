# el-select-icon

基于elementui的图标选择

## 安装

```
npm i vue-styles-button
```

## 使用

```
<script setup lang="ts">
import { Button } from "vue3-vue-styles-button";
</script>

<template>
  <Button class="button">普通</Button>
  <Button class="button" rounded>普通圆角</Button>
  <Button class="button" type="gradient">渐变</Button>
  <Button class="button" type="gradientText" rounded>文字渐变</Button>
  <Button class="button" disable>禁用</Button>
</template>

<style scoped lang="scss">
.button {
  width: 240px;
  height: 50px;
  margin-bottom: 16px;
}
</style>

```
