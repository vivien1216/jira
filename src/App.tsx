/*
 * @Author: vivien
 * @Date: 2021-12-08 19:36:05
 * @Last Modified by: vivien
 * @LastEditTime: 2022-05-04 23:01:55
 */
import "./App.css";
import { useAuth } from "screens/context/auth-context";
import { AuthenticatedApp } from "authenticated-app";
import { UnauthenticatedApp } from "unauthenticated-app";
import React from "react";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
