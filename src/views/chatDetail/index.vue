<script setup lang="ts">
import useMainStore from "@/store";
import { reactive, toRefs } from "@vue/reactivity";
import { storeToRefs } from "pinia";

const mainStore = useMainStore();

const { socketObj } = storeToRefs(mainStore);

const state = reactive({
  message: "",
});

const sendMessage = () => {
  socketObj.value.emit("message", {
    userId: socketObj.value.id,
    msg: state.message,
  });
};

socketObj.value.on("msg", (data) => {
  console.log("-----------socketObj.value.on msg", data);
});

const { message } = toRefs(state);
</script>

<template>
  <div>ChatDetail</div>
  <div class="input-container">
    <input v-model="message" />
    <span @click="sendMessage">Send</span>
  </div>
</template>

<style lang="less" scoped>
.input-container {
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    margin-right: 20px;
    padding: 5px 20px;
    width: 80%;
    height: 30px;
  }
}
</style>
