<script setup lang="ts">
import {
  getUserList,
  getUserDetailById,
  getMessageListByChatId,
} from "@/request";
import { onMounted, reactive, toRefs } from "@vue/runtime-core";
onMounted(() => {
  // getUserList().then((res) => {
  //   console.log("getUserList", res);
  // });
  // getUserDetailById({ id: 1 }).then((res) => {
  //   console.log("getUserDetailById", res);
  // });
});
</script>

<template>
  <div>UserList</div>
</template>
