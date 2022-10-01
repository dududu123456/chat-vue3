<script setup lang="ts">
import useMainStore from "@/store";
import { reactive, toRefs } from "@vue/reactivity";
import { storeToRefs } from "pinia";
import { loginOrRegister } from "@/request";
import { useRouter } from "vue-router";

const mainStore = useMainStore();

const router = useRouter();

const state = reactive({
  name: "",
  password: "",
});

const clickToLogin = () => {
  loginOrRegister({ email: state.name, password: state.password }).then((res) => {
    console.log("--------------res", res);
    const { code, data } = res;
    if (code === "0") {
      mainStore.$state.userId = data.id;
      window.localStorage.setItem("userId", data.id);
      router.replace({ path: "/home" });
    }
  });
};

const { name, password } = toRefs(state);
</script>

<template>
  <div>Login</div>
  <div class="input-container">
    <input v-model="name" placeholder="Name" />
  </div>
  <div class="input-container">
    <input v-model="password" placeholder="Password" />
  </div>

  <div class="button" @click="clickToLogin">Login/Register</div>
</template>

<style lang="less" scoped>
.input-container {
  margin: 40px;
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
