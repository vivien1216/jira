/*
 * @Author: vivien
 * @Date: 2022-04-03 16:04:00
 * @Last Modified by: vivien
 * @LastEditTime: 2022-05-04 23:08:17
 */
import React from "react";
import { useArray, useMount } from "utils";

export const TsReactTest = () => {
  const persons: { name: string; age: number }[] = [
    { name: "jack", age: 25 },
    { name: "ma", age: 22 },
  ];

  const { value, add, removeIndex, clear } = useArray(persons);

  useMount(() => {
    // console.log(value.notExist);
    // add({ name: "david" });
    // removeIndex("123");
  });

  return (
    <div>
      <button onClick={() => add({ name: "john", age: 22 })}>add john</button>
      <button onClick={() => removeIndex(0)}>remove 0</button>
      <button style={{ marginBottom: "50px" }} onClick={() => clear()}>
        clear
      </button>
      {value.map((person, index) => (
        <div style={{ marginBottom: "30px" }} key={index}>
          <span style={{ color: "red" }}>{index}</span>
          <span>{person.name}</span>
          <span>{person.age}</span>
        </div>
      ))}
    </div>
  );
};
