import React, { Component } from 'react'
import './MyTop.css'
class MyTop extends Component {
  render() {
    return (
      <div className="myTop">
        <div className="myTop-portrait">
          <div className="myTop-portrait-btn">
            <img src="./image/icon-user-audition.png" alt="试听" />
            <span>0分钟</span>
          </div>
          <img className="profile" src="./image/touxiang.png" alt="头像" />
          <div className="myTop-portrait-btn">
            <img src="./image/icon-user-dredge.png" alt="会员" />
            <span>开通</span>
          </div>
        </div>
        {/* 椰子油 */}
        <div className="coconut">
          <span className="coconut-size">椰子油</span>
        </div>
        <div className="diamond">
          <img src="./image/icon-user-rank.png" alt="钻石" />
        </div>
        {/* 列表 */}
        <ul className="IconList">
          <li className="IConItem">
            <img src="./image/icon-grid-music.png" alt="localhost" />
            <p>本地歌曲</p>
          </li>
          <li className="IConItem">
            <img src="./image/icon-grid-download.png" alt="" />
            <p>下载歌曲</p>
          </li>
          <li className="IConItem">
            <img src="./image/icon-grid-recent.png" alt="" />
            <p>最近播放</p>
          </li>
          <li className="IConItem">
            <img src="./image/icon-grid-favorite.png" alt="" />
            <p>我喜欢</p>
          </li>
          <li className="IConItem">
            <img src="./image/icon-grid-mv.png" alt="" />
            <p>下载MV</p>
          </li>
          <li className="IConItem">
            <img src="./image/icon-grid-video.png" alt="" />
            <p>已购音乐</p>
          </li>
        </ul>
      </div>
    )
  }
}
export default MyTop
