import axios from "axios";
import NProgress from "nprogress";
import { promptMsg } from "@/infrastructure/axios/code";

const config = {
  baseURL: "/api",
  timeout: 1000000,
};

const axiosInstance = axios.create(config);

/**
 * 请求拦截器
 */
axiosInstance.interceptors.request.use(
  (config) => {
    NProgress.start();
    return Promise.resolve(config);
  },
  (error) => Promise.reject(error)
);

/**
 * 响应拦截器
 */
axiosInstance.interceptors.response.use(
  (response) => {
    NProgress.done();
    const { base_rsp } = response.data;
    if (base_rsp && base_rsp.code !== 0) {
      promptMsg(base_rsp.msg, base_rsp.code, response.config.url);
    }
    return Promise.resolve(response.data);
  },
  (error) => Promise.reject(error)
);

/**
 * api post
 */
export const ApiPost = (url = "", data = {}, config) => {
  try {
    return axiosInstance.post(url, data, config);
  } catch (err) {
    throw new Error("An error occurred while making a POST request:", err);
  }
};

/**
 * api get
 */
export const ApiGet = (url = "", config) => {
  try {
    return axiosInstance.get(url, config);
  } catch (err) {
    throw new Error("An error occurred while making a GET request:", err);
  }
};
