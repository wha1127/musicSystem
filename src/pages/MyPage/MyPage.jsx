import React, { Component } from 'react'
//import Drawer from './pages/Drawer/Drawer.jsx'
//引入组价
import Collect from '../Collect/Collect.jsx'
//引入电台组件
import Broadcasting from '../../components/Broadcasting/Broadcasting.jsx'
//引入头部组件
import MyTop from '../../components/MyTop/MyTop.jsx'

import './MyPage.css'
class MyPage extends Component {
  render() {
    return (
      <div className="wrapper">
        {/* <Drawer /> */}
        {/* 我的 页面上部分布局 */}
        <MyTop />
        {/* 我的 页面下部分布局 */}
        <div className="myBottom">
          {/* 电台布局 */}
          <Broadcasting />

          {/* 我的新建布局 */}
          
            <Collect/>
          
        </div>
      </div>
    )
  }
}
export default MyPage
