<script setup lang="ts">
import { getUserList, getUserDetailById } from "@/request";
import { onMounted } from "@vue/runtime-core";

onMounted(() => {
  getUserList().then((res) => {
    console.log("getUserList", res);
  });

  getUserDetailById({id: 1}).then((res) => {
    console.log("getUserDetailById", res);
  });
});
</script>

<template>
  <div>Home</div>
</template>
