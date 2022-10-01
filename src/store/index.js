import { defineStore } from 'pinia'

const userId = window.localStorage.getItem("userId");

const useMainStore = defineStore('mian', {
  state: () => {
    return { 
      count: 0,
      // socket对象
      socketObj: null,
      // 用户id
      userId: +userId,
     }
  },
  // 也可以定义为
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    },
  },
})

export default useMainStore;