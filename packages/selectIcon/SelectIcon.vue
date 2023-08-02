<script lang="ts" setup>
import { ClickOutside as vClickOutside } from "element-plus";
import { ref } from "vue";

import iconNames from "./iconNames";
import { onMounted } from "vue";

defineProps<{
  iconName: string;
}>();
const emit = defineEmits<{
  (event: "update:iconName", data: string): void;
}>();
const slots = defineSlots();

const visible = ref<boolean>(false);

const handle = (data: string) => {
  emit("update:iconName", data);
  visible.value = false;
};

const checkHidden = (arr: string[], str: string) => {
  if (!str) return false;
  const words = str.split(" ");
  const result = words.some((word) => arr.includes(word));
  return result;
};

const handleClickOutside = (data: any) => {
  if (
    !checkHidden(
      ["el-popper", "el-popper__arrow", "handle-button"],
      data.srcElement?.className
    ) &&
    !checkHidden(
      ["handle-button"],
      data.target?.offsetParent?.firstElementChild?.className
    ) &&
    !checkHidden(
      ["handle-button"],
      data.target?.parentNode?.offsetParent?.firstElementChild?.className
    )
  ) {
    visible.value = false;
  }
};

onMounted(() => {
  console.log(slots);
});
</script>

<template>
  <el-popover
    :visible="visible"
    placement="bottom"
    :width="600"
    trigger="click"
  >
    <template #reference>
      <el-button
        v-if="!slots.default"
        class="handle-button"
        :icon="iconName"
        @click="visible = true"
        >{{ iconName || "选择图标" }}</el-button
      >
      <div class="custom-target" v-else @click="visible = true">
        <slot></slot>
      </div>
    </template>
    <div class="icon-list" v-click-outside="handleClickOutside">
      <template v-for="item in iconNames" :key="item">
        <div class="icon-item" :title="item" @click="handle(item)">
          <el-icon>
            <component :is="item" />
          </el-icon>
          <p class="icon-name">
            {{ item }}
          </p>
        </div>
      </template>
    </div>
  </el-popover>
</template>

<style lang="scss" scoped>
.icon-list {
  height: 300px;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.icon-item {
  margin: 0 8px 8px 0;
  padding: 8px;
  box-sizing: border-box;
  width: 80px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 18px;
  border: 1px solid #eee;
  border-radius: 4px;
  &:hover {
    border-color: #999;
    cursor: pointer;
  }
}
.icon-name {
  font-size: 12px;
  height: 24px;
  margin: 12px 0 0 0;
  width: 100%;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.handle-button {
  :deep(.el-icon) {
    font-size: 18px;
  }
}
</style>
