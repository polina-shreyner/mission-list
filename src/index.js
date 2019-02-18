import React from "react";
import ReactDOM from "react-dom";
import classNames from "classnames/bind"
import {MissionList} from "./components/MissionList/MissionList";
import {Filters} from "./components/Filters/Filters";

import style from "./index.module.css";

const cx = classNames.bind(style);

console.log(style);
function App() {
  return (
    <div className={cx('app')}>
      <h1 className={cx('app__header')}>Launches</h1>
      <Filters />
      <MissionList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
