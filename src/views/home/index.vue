<script setup lang="ts" name="Home">
import { getUserListByChatId, getMessageListByChatId } from "@/request";
import { reactive, toRefs } from "@vue/runtime-core";
import MessageItem from "@/views/home/components/MessageItem.vue";

// all全局群 chatId
const ALL_GROUP_CHAT_ID = 1;

const state = reactive({
  // 群成员列表
  userListOfCurrChat: [],
  // 消息列表
  handledMsgList: [],
});

// 获取群成员列表
getUserListByChatId({ id: ALL_GROUP_CHAT_ID }).then((res) => {
  console.log("getMessageListByChatId", res);
  const { data } = res;
  state.userListOfCurrChat = data;
});

// 获取全局群messageList
getMessageListByChatId({ id: ALL_GROUP_CHAT_ID }).then((res) => {
  console.log("getMessageListByChatId", res);
  const { data } = res;
  state.handledMsgList = data;
});

// 获取userInfo，根据id
const getUserInfoByUserId = (id) => {
  return state.userListOfCurrChat.find((i) => i.id === id);
};

const { handledMsgList, userListOfCurrChat } = toRefs(state);
</script>

<template>
  <div class="home-container">
    <div>Home</div>
    <section v-for="item in handledMsgList" :key="item.id">
      <message-item
        :message="item"
        :user="getUserInfoByUserId(item.send_user_id)"
      />
    </section>
  </div>
</template>

<style lang="less" scoped>
.home-container {
  margin: 20px;
}
</style>
