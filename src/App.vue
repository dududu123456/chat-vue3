<script setup lang="ts">
import io from "socket.io-client";
import useMainStore from "@/store";
import { toRefs } from "@vue/reactivity";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const mainStore = useMainStore();

const router = useRouter();

const { socketObj, userId } = toRefs(mainStore);

// 未登录
if (!userId) {
  router.replace("/login");
}

const handleMsg = (data) => {
  console.log("-----------handleMsg", data);
};

const initSocket = () => {
  const socket = io("http://127.0.0.1:7001");
  socket.on("connect", () => {
    console.log("connect");
    // userSocketId = socket.id;
    socket.on("msg", handleMsg);
    socket.emit("join");
    socketObj.value = socket;
  });

  // 接收在线用户信息
  socket.on("online", (msg) => {
    console.log("#online,", msg);
  });

  // 系统事件
  socket.on("disconnect", (msg) => {
    console.log("#disconnect", msg);
  });

  socket.on("disconnecting", () => {
    console.log("#disconnecting");
  });

  socket.on("error", () => {
    console.log("#error");
  });
};

initSocket();

// socketRef.value.emit("message", {
//   userId: userSocketId,
//   msg: "213",
// });
</script>

<template>
  <router-view />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
