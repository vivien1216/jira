/*
 * @Author: vivien
 * @Date: 2022-04-05 20:45:12
 * @Last Modified by: vivien
 * @LastEditTime: 2022-04-05 21:46:14
 */
import React, { ReactNode } from "react";
import { AuthProvider } from "./auth-context";

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
