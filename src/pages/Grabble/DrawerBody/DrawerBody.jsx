// 引入React
import React from 'react'
import './DrawerBody.css'
export default class DrawersBody extends React.Component {

  render () {
    return (
      <div>
        <div className="DrawersBodyTop">
          <h4>热门搜索</h4>
          <ul>
            <li>邓紫棋</li>
            <li>全孝盛</li>
            <li>张靓颖</li>
            <li>周杰伦</li>
            <li>薛之谦</li>
            <li>林俊杰</li>
          </ul>
        </div>
        <div className="DrawersBodyBottom">
          <h4>搜索历史</h4>
          <ul>
            <li>
              <img src="./image/icon-record-recent.png" alt="" />
              <p>周杰伦</p>
              <img src="./image/icon-record-close.png" alt="" />
            </li>
            <li>
              <img src="./image/icon-record-recent.png" alt="" />
              <p>周杰伦</p>
              <img src="./image/icon-record-close.png" alt="" />
            </li>
            <li>
              <img src="./image/icon-record-recent.png" alt="" />
              <p>周杰伦</p>
              <img src="./image/icon-record-close.png" alt="" />
            </li>
          </ul>
        </div>
      </div>
    )
  }
}