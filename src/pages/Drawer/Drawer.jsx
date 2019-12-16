// 引入React
import React from 'react'
import './Drawer.css'
import { Drawer, List, NavBar, Switch } from 'antd-mobile';
import Grabble from "../Grabble/Grabble.jsx"
import { Link } from "react-router-dom"
export default class Drawers extends React.Component {
  state = {
    open: false,
  }
  onOpenChange = (...args) => {
    console.log(args);
    this.setState({ open: !this.state.open });
  }
  changeLanguage = () => {
    this.setState({
      en: !this.state.en
    });
  }
  changeLanguage1 = () => {
    this.setState({
      en1: !this.state.en1
    });
  }
  render () {
    // fix in codepen
    const sidebar = (<List>
      <div className="Drawer">
        <div className="DrawerTop">
          <div className="DrawerTopOne">
            <img alt="" src="data:image/png;base64,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" />
            <h4>升级为VIP</h4>
            <p>畅享音乐特权</p>
          </div>
          <div className="DrawerTopOne">
            <img alt="" src="data:image/png;base64,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" />
            <h4>个性化中心</h4>
            <p>默认主题</p>
          </div>
          <div className="DrawerTopOne">
            <img alt="" src="./image/11.png" />
            <h4>消息中心</h4>
          </div>
        </div>
        <div>
          <div className="DrawerBody">
            仅wi-fi连接
          <Switch checked={this.state.en} onChange={this.changeLanguage} />
          </div>
          <div className="DrawerBody">
            定时关闭
          <Switch checked={this.state.en1} onChange={this.changeLanguage1} />
          </div>
          <div className="DrawerBody">
            免流量服务
          </div>
          <div className="DrawerBody">
            微云音乐网盘
          </div>
          <div className="DrawerBody">
            传歌到手机
          </div>
          <div className="DrawerBody">
            QPlay与车载音乐
          </div>
          <div className="DrawerBody">
            清理占用空间
          </div>
          <div className="DrawerBody">
            免费WIFI
          </div>
          <div className="DrawerBody">
            帮助与反馈
          </div>
          <div className="DrawerBody">
            关于QQ音乐
          </div>
        </div>
        <div className="DrawerBottom">
          <div>
            <img alt="" src="./image/icon-slider-setting.png" />
            <span>设置</span>
          </div>
          <div>
            <img alt="" src="./image/icon-slider-exit.png" />
            <span>退出登录</span>
          </div>
        </div>
      </div>
    </List>);

    return (<div>
      <Drawer
        className="my-drawer"
        style={{ minHeight: document.documentElement.clientHeight }}
        enableDragHandle
        sidebar={sidebar}
        open={this.state.open}
        onOpenChange={this.onOpenChange}
      >
        <NavBar className="NavBar" icon={<svg t="1576158341519" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6568" width="22" height="22"><path d="M120.63744 269.0304h782.76096C933.1712 269.0304 957.44 244.86912 957.44 215.04a53.88288 53.88288 0 0 0-54.04672-53.9904H120.63744C90.85952 161.0496 66.56 185.21088 66.56 215.04c0 30.01856 24.192 53.9904 54.07744 53.9904zM120.63744 565.9904h782.76096c29.7728 0 54.04672-24.16128 54.04672-53.98528a53.88288 53.88288 0 0 0-54.04672-53.99552H120.63744C90.85952 458.0096 66.56 482.17088 66.56 512c0 30.01856 24.192 53.9904 54.07744 53.9904zM120.63744 862.9504h782.76096c29.7728 0 54.04672-24.16128 54.04672-53.9904a53.88288 53.88288 0 0 0-54.04672-53.9904H120.63744C90.85952 754.9696 66.56 779.13088 66.56 808.96c0 30.01856 24.192 53.9904 54.07744 53.9904z" fill="#ffffff" p-id="6569"></path></svg>} onLeftClick={this.onOpenChange}>
          <Link to="/mypage">我的</Link>
          <Link to="/musicHall">音乐馆</Link>
          <Link to="/discovery" >发现</Link>
        </NavBar>
        <Grabble />
      </Drawer>
    </div>);
  }
}