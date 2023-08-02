<script setup lang="ts">
import { computed } from "vue";

interface ButtonGradientProps {
  type?: "normal" | "gradient" | "gradientText";
  rounded?: boolean;
  disable?: boolean;
}

const props = withDefaults(defineProps<ButtonGradientProps>(), {
  type: "normal",
  rounded: false,
  disable: false,
});
// 圆角
const roundedClass = computed(() => (props.rounded ? " v-rounded" : ""));
// 禁用
const disableClass = computed(() => (props.disable ? " v-disable" : ""));
// 渐变
const gradientClass = computed(() =>
  props.type === "gradient" && !props.disable ? " v-gradient" : ""
);
// 文字渐变
const gradientTextClass = computed(() =>
  props.type === "gradientText" && !props.disable
    ? " v-gradient v-gradient-text"
    : ""
);
</script>

<template>
  <div
    :class="
      'v-button' +
      roundedClass +
      disableClass +
      gradientClass +
      gradientTextClass
    "
  >
    <button>
      <span class="v-button-span">
        <slot></slot>
      </span>
    </button>
  </div>
</template>

<style scoped lang="scss">
button {
  background: transparent;
  color: transparent;
  border: 0;
  margin: 0;
  padding: 0;
  outline: none;
  width: 100%;
  height: 100%;
}
.v-button {
  display: inline-block;
  width: 120px;
  height: 40px;
  border: 1.5px solid #939393;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 6px;
  .v-button-span {
    padding: 0 16px;
    font-style: normal;
    font-weight: 500;
    color: #262626;
    line-height: 100%;
  }
  &.v-rounded {
    border-radius: 100px;
  }
  &.v-disable {
    color: #939393;
  }
  &.v-gradient {
    border-color: transparent;
    background-image: linear-gradient(#fff, #fff),
      linear-gradient(to right, #621407, #cc2a0e, #621407);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }
  &.v-gradient-text {
    .v-button-span {
      background: linear-gradient(to right, #981f0b, #cc2a0e, #981f0b);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }
  }
}
.v-button + .v-button {
  margin-left: 16px;
}
</style>
