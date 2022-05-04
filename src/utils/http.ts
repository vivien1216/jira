/*
 * @Author: vivien
 * @Date: 2022-04-05 22:14:13
 * @Last Modified by: vivien
 * @LastEditTime: 2022-05-04 17:44:40
 */
import qs from "qs";
import * as auth from "auth-provider";
import { useAuth } from "screens/context/auth-context";

const apiUrl = process.env.REACT_APP_API_URL;

interface Config extends RequestInit {
  token?: string;
  data?: object;
}

export const http = async (
  endpoint: string,
  { data, token, headers, ...customConfig }: Config = {}
) => {
  const config = {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": data ? "application/json" : "",
    },
    ...customConfig,
  };

  if (config.method.toUpperCase() === "GET") {
    endpoint += `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data || {});
  }

  // axios 和 fetch 的表现不一样，axios可以直接在返回状态不为2xx的时候抛出异常
  return window
    .fetch(`${apiUrl}/${endpoint}`, config)
    .then(async (response) => {
      if (response.status === 401) {
        await auth.logout();
        window.location.reload();
        return Promise.reject({ message: "请重新登录" });
      }
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
};

export const useHttp = () => {
  const { user } = useAuth();
  // utility type 的用法：用泛型给它传入一个其他类型，然后utility type对这个类型进行某种操作
  return (...[endpoint, config]: Parameters<typeof http>) =>
    http(endpoint, { ...config, token: user?.token });
};

// // 类型别名、Utility Type 讲解
// // 联合类型
// let mayFavoriteNumber: string | number;
// mayFavoriteNumber = 'seven';
// mayFavoriteNumber = 7;

// let jackFavoriteNumber: string | number;

// // 类型别名在很多情况下可以和interface互换
// // interface Person {
// //     name: string
// // }

// // type Person = {name: string}
// // const xiaoming:Person = {name: "xiaoming"}

// // 类型别名，interface在这种情况下无法替代
// type FavoriteNumber = string | number;
// let roseFavoriteNumber:FavoriteNumber = 6;

// // interface也没法实现Utility type
// type Person = {
//     name: string;
//     age: number;
// }

// const xiaoming:Partial<Person> = {};
// const shenMiRen:Omit<Person, 'name' | 'age'> = {}
// type PersonKeys = keyof Person;
// type PersonOnlyName = Pick<Person, "name" | "age">
// type Age  = Exclude<PersonKeys, "name">

// // Parcital的实现
// type Partical<T> = {
//     [P in keyof T]?: T[P]
// }
