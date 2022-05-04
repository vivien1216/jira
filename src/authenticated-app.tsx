/*
 * @Author: vivien
 * @Date: 2022-04-05 20:49:47
 * @Last Modified by: vivien
 * @LastEditTime: 2022-05-04 23:07:36
 */
import { ProjectListScreen } from "screens/project-list";
import { useAuth } from "screens/context/auth-context";
import React from "react";

export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <div>
      <button onClick={logout}>登出</button>
      <ProjectListScreen />
    </div>
  );
};
