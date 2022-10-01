import * as axios from "axios";
import { REQUEST_METHOD } from "../config/common";

const commonRequest = ({ url, data = {}, method = REQUEST_METHOD.GET }) => {
  url = 'api/' + url;
  console.log("------req", url, data);
  return new Promise((resolve, reject) => {
    if (method === REQUEST_METHOD.GET) {
      let newUrl = url;
      if (data || data === {}) {
        newUrl += "?";
        Object.keys(data).forEach((i) => {
          newUrl += `${i}=${data[i]}&`;
        });
        newUrl = newUrl.slice(0, newUrl.length - 1);
      }

      axios
        .get(newUrl)
        .then((res) => {
          console.log("------------------res", res);
          const { data } = res;
          resolve(data);
        })
        .catch((err) => {
          console.log("------------------err", err);
          reject(err);
        });
    } else {
      axios
        .post(url, data)
        .then((res) => {
          console.log("------------------res", res);
          const { data } = res;
          resolve(data);
        })
        .catch((err) => {
          console.log("------------------err", err);
          reject(err);
        });
    }
  });
};

// const COMMON_URL = 'http://127.0.0.1:7001/';
const COMMON_URL = "";

export const getUserList = () => {
  return commonRequest({ url: COMMON_URL + "user/list" });
};

export const getUserDetailById = (data) => {
  return commonRequest({ url: COMMON_URL + "user/findById2", data });
};

// 登录/注册
export const loginOrRegister = (data) => {
  return commonRequest({
    url: COMMON_URL + "user/loginOrRegister",
    data,
    method: REQUEST_METHOD.POST,
  });
};

// 查询group群组，根据userId
export const getChatListByUserId = (data) => {
  return commonRequest({ url: COMMON_URL + "chat/getChatListByUserId", data });
};

// 查询messageList，根据chatId，即获取群消息
export const getMessageListByChatId = (data) => {
  return commonRequest({ url: COMMON_URL + "message/getMessageListByChatId", data });
};

// 查询userList，根据chatId，即获取群成员
export const getUserListByChatId = (data) => {
  return commonRequest({url: COMMON_URL + "chat/getUserListByChatId", data});
}