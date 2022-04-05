/*
 * @Author: vivien
 * @Date: 2021-12-08 19:36:05
 * @Last Modified by: vivien
 * @LastEditTime: 2022-04-05 16:43:18
 */
import "./App.css";
import { ProjectListScreen } from "screens/project-list";
// import { TsReactTest } from "try-use-array";
import { LoginScreen } from "screens/login";

function App() {
  return (
    <div className="App">
      <ProjectListScreen />
      <LoginScreen />
    </div>
  );
}

export default App;
