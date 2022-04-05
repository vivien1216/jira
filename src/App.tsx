/*
 * @Author: vivien
 * @Date: 2021-12-08 19:36:05
 * @Last Modified by: vivien
 * @LastEditTime: 2022-04-05 22:01:06
 */
import "./App.css";
import { useAuth } from "screens/context/auth-context";
import { AuthenticatedApp } from "authenticated-app";
import { UnauthenticatedApp } from "unauthenticated-app";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
