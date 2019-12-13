import React, { Component } from 'react'
//import { Button, WhiteSpace, WingBlank } from 'antd-mobile'
import './App.css'
import Drawer from './pages/Drawer/Drawer.jsx'
class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Drawer />
        {/* 我的 页面上部分布局 */}
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
        {/* 我的 页面下部分布局 */}
        <div className="myBottom">
          {/* 电台布局 */}
          <div className="myBottom-broadcasting">
            {/* 个性电台布局 */}
            <div className="myBottom-individuality">
              <img src="./images/broadcasting-station-specific.jpeg" alt="" />
              <div className="myBottom-size myBottom-box">
                <p>个性电台</p>
                <p>偶遇身边好音乐</p>
              </div>
            </div>
            {/* 跑步电台布局 */}
            <div className="myBottom-individuality">
              <img src="./images/broadcasting-station-run.jpeg" alt="" />
              <div className="myBottom-size">
                <p>跑步电台</p>
                <p>QQ音乐xNike,让运动乐在其中</p>
              </div>
            </div>
          </div>

          {/* 我的新建布局 */}
          <div className="newSong">
            {/* 新建布局上部分 */}
            <div className="newSong-top">
              <p className="active">自建歌单</p>
              <span className="shu">|</span>
              <p>收藏歌单</p>
              <div className="newSong-icon">
                <img src="./image/icon-songmenu-add.png" alt="" />
                <img src="./image/icon-songmenu.png" alt="" />
              </div>
            </div>
            {/* 新建布局下部分 */}
            <div className="newSong-bottom">
              <ul>
                <li className="newSongItem">
                  <div className="masking-left">
                    <img src="./image/icon-songmenu-add.png" alt="" />
                  </div>
                  <div className="masking-right">
                    <p>新建歌单</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
