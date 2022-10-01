import * as VueRouter from "vue-router";
import Home from "@/views/home/index.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: "/chatList",
    name: "ChatList",
    component: () => import('@/views/chatList/index.vue'),
  },
  {
    path: "/chatDetail",
    name: "ChatDetail",
    component: () => import('@/views/chatDetail/index.vue'),
  },
  {
    path: "/userList",
    name: "UserList",
    component: () => import('@/views/userList/index.vue'),
  },
  {
    path: "/userDetail",
    name: "UserDetail",
    component: () => import('@/views/userDetail/index.vue'),
  },
];

const router = VueRouter.createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: VueRouter.createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

export default router;
