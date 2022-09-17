import * as axios from "axios";
import { REQUEST_METHOD } from "../config/common";

const commonRequest = ({ url, data = {}, method = REQUEST_METHOD.GET }) => {
  return new Promise((resolve, reject) => {
    if (method === REQUEST_METHOD.GET) {
      let newUrl = url;
      if (data && data === {}) {
        newUrl += "?";
        Object.keys(data).forEach((i) => {
          newUrl += `${i}=${data[i]}&`;
        });
        newUrl = newUrl.splice(0, newUrl.length - 1);
      }

      axios
        .get(newUrl)
        .then((res) => {
          console.log("------------------res", res);
          resolve(res);
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
          resolve(res);
        })
        .catch((err) => {
          console.log("------------------err", err);
          reject(err);
        });
    }
  });
};


// const COMMON_URL = 'http://127.0.0.1:7001/';
const COMMON_URL = ''

export const getUserList = () => {
  return commonRequest({url: COMMON_URL + 'user/list'})
}


export const getUserDetailById = (data) => {
  return commonRequest({url: COMMON_URL + 'user/findById2', data})
}