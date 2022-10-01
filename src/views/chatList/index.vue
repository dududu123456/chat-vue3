<script setup lang="ts">
import useMainStore from "@/store";
import { reactive, toRefs } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { storeToRefs } from "pinia";
import { getChatListByUserId } from "../../request";

const mainStore = useMainStore();

const { userId } = storeToRefs(mainStore);

const state = reactive({
  groupList: [],
});

onMounted(() => {
  getChatListByUserId({ id: userId.value }).then((res) => {
    console.log("res", res);
    state.groupList = res.data;
  });
});

const { groupList } = toRefs(state);
</script>

<template>
  <div>ChatList</div>
  <div v-for="item in groupList" :key="item.id">
    <span>id: {{ item.id }}</span>
    <span>userId: {{ item.user_id }}</span>
    <span>chatId: {{ item.chat_id }}</span>
  </div>
</template>
