import React, {Component} from 'react';
import classNames from "classnames/bind"

import style from "./Filters.module.css";

const cx = classNames.bind(style);

export class Filters extends Component {
  render() {
    return(
      <div className={cx('filter')}>
        <div className={cx('filter__launch-site')}>
          <label>Launch Site</label>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div className={cx('filter__rocket')}>
          <label>Rocket</label>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
      </div>
    );
  }
}
