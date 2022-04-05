/*
 * @Author: vivien
 * @Date: 2022-04-05 20:48:44
 * @Last Modified by: vivien
 * @LastEditTime: 2022-04-05 22:19:26
 */
// 在真实环境中，如果使用firebase这种第三方auth服务的话，本文件不需要开发者开发

import { User } from "screens/project-list/search-panel";

const apiUrl = process.env.REACT_APP_API_URL;

const localStorageKey = "__auth_provider_token__";

export const getToken = () => window.localStorage.getItem(localStorageKey);

export const handleUserResponce = ({ user }: { user: User }) => {
  window.localStorage.setItem(localStorageKey, user.token || "");
  return user;
};

export const login = (data: { username: string; password: string }) => {
  return fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (response) => {
    if (response.ok) {
      return handleUserResponce(await response.json());
    } else {
      return Promise.reject(data);
    }
  });
};

export const register = (data: { username: string; password: string }) => {
  return fetch(`${apiUrl}/register`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (response) => {
    if (response.ok) {
      return handleUserResponce(await response.json());
    } else {
      return Promise.reject(data);
    }
  });
};

export const logout = async () =>
  window.localStorage.removeItem(localStorageKey);
