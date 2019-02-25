import React from 'react';
import {MissionBlock} from "./MissionBlock/MissionBlock"
import classNames from "classnames/bind"

import style from "./MissionList.module.css";

const cx = classNames.bind(style);

export function MissionList () {
  return (
    <div className={cx('mission-list')}>
      <ul>
        <li>
          <MissionBlock/>
        </li>
      </ul>
    </div>
  );
}
