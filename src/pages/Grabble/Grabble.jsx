// 引入React
import React from 'react'
import './Grabble.css'
import { InputItem, Icon } from 'antd-mobile';
import DrawerBody from "./DrawerBody/DrawerBody.jsx"
export default class Grabble extends React.Component {
  state = {
    isHeadMasking: true
  }
  goMasking = () => {
    const headMasking = document.getElementById("headMasking")
    if (this.state.isHeadMasking) {
      this.setState({
        isHeadMasking: false
      })
      headMasking.className = "headMasking isHeadMasking"
    }
  }
  goGrabble = () => {
    const headMasking = document.getElementById("headMasking")
    if (!this.state.isHeadMasking) {
      this.setState({
        isHeadMasking: true
      })
      headMasking.className = "headMasking"
    }
  }
  render () {
    return (
      <div>
        <div className="headBottom" onClick={this.goMasking}>
          <div className="search">
            <img src="./image/icon-search-default.png" alt="" />
            <span className="text">搜索</span>
          </div>
        </div>
        {/* 
        
        所有组件在这里引入
        
        */}
        <div id="headMasking" className="headMasking">
          <div>
            <div className="headMaskingTop">
              <Icon type="left" size="lg" onClick={this.goGrabble} />
              <div className="headMaskingTopInput">
                <InputItem
                  clear
                  placeholder="支持音乐搜索"
                ></InputItem>
              </div>
              <span>搜索</span>
            </div>
          </div>
          <DrawerBody />
        </div>
      </div>
    )
  }
}
