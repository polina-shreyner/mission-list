import React from 'react';
import classNames from "classnames/bind"

import style from "./MissionBlock.module.css";

const cx = classNames.bind(style);

export function MissionBlock () {
  return (
    <div className={cx('mission-block')}>
      <div className={cx('mission-block__image')}>
        <img alt={'mission_patch_small'}/>
      </div>
      <div className={cx('mission-block__info')}>
        <div className={cx('mission-block__info_title')}>
          <h3>Mission Name</h3>
          <div>20.01.2019</div>
        </div>
        <div className={cx('mission-block__info_text')}>
          <p>тут очень длинный текст</p>
        </div>
      </div>
    </div>
  );
}
