<script setup lang="ts">
import { ref } from "vue";
import { SelectIcon } from "../packages/index";

const iconName = ref<string>("Setting");
</script>

<template>
  <div>
    <SelectIcon v-model:icon-name="iconName" />
    <SelectIcon v-model:icon-name="iconName">
      <el-button>选择的图标是{{ iconName }}</el-button>
    </SelectIcon>
  </div>
</template>

<style scoped lang="scss"></style>
