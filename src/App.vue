<script setup lang="ts">
import { ref } from "vue";
import { Button } from "../packages/index";

const disable = ref<boolean>(false);
</script>

<template>
  <div>
    <Button class="button" @click="disable = !disable">普通</Button>
    <Button class="button" rounded>普通圆角</Button>
    <Button class="button" type="gradient">渐变</Button>
    <Button class="button" type="gradientText" rounded :disable="disable">
      文字渐变
    </Button>
    <Button class="button" :disable="disable">禁用</Button>
  </div>
</template>

<style scoped lang="scss">
.button {
  width: 240px;
  height: 50px;
  margin-bottom: 16px;
}
</style>
