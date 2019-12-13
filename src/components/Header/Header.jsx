import './Header.styl';
import menuList from '../../assets/icon-menu-list.png'
import songMenu from '../../assets/icon-songmenu-add.png'
import React, { Component } from 'react'

export default class App extends Component {
  render () {
    return (
      <div className="home">
        <div className="header">
          <div className="header-left">
            <img src={menuList} alt={menuList} />
          </div>
          <div className="header-mid">
            <span>我的</span>
            <span>音乐馆</span>
            <span>发现</span>
          </div>
          <div className="header-right">
            <img src={songMenu} alt={songMenu} />
          </div>
        </div>
        <div className="bottom">
          <div className="search">
            <i className="search-icon"></i>
            <span className="text">搜索</span>
          </div>
        </div>
      </div>
    )
  }
}