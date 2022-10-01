<script setup lang="ts" name="MessageItem">
import { toRefs } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import { storeToRefs } from "pinia";
import useMainStore from "@/store";

const mainStore = useMainStore();

const { userId } = storeToRefs(mainStore);

const props = defineProps({
  message: {
    type: Object,
    default: {},
  },
  user: {
    type: Object,
    default: {},
  },
});

const { message, user } = toRefs(props);

// 是否是自己
const isSelf = computed(() => user.value.id === userId.value);
</script>

<template>
  <div class="message-item-container" :class="isSelf ? 'reverse' : ''">
    <div class="name">{{ user.name }}</div>
    <p class="message">{{ message.content }}</p>
  </div>
</template>

<style lang="less" scoped>
.message-item-container {
  width: 100%;
  margin-top: 20px;
  display: flex;

  &.reverse {
    flex-direction: row-reverse;
  }

  .name {
    width: 36px;
    height: 36px;
    background-color: aquamarine;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }

  .message {
    margin: 0 20px;

    max-width: calc(100% - 72px - 40px);
    box-sizing: border-box;
    padding: 3px 10px;

    background-color: #ececec;
    border-radius: 6px;
    word-break: break-word;
    line-height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
