// 引入React
import React from 'react'
import './Grabble.css'
import { InputItem, Icon } from 'antd-mobile';
import DrawerBody from "./DrawerBody/DrawerBody.jsx"
import { Switch, Route } from "react-router-dom"
import Discovery from "../Discovery/index.jsx"
import MusicHall from "../MusicHall/MusicHall.jsx"
export default class Grabble extends React.Component {
  state = {
    isHeadMasking: true,
    inputValue: ""
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
  saveValue = (inputValue) => {
    this.setState({
      inputValue
    })
  }
  render () {
    const { inputValue } = this.state
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
        <Switch>
          {/* <Route path="" component={}></Route> */}
          <Route path="/musicHall" component={MusicHall}></Route>
          <Route path="/discovery" component={Discovery}></Route>
        </Switch>
        <div id="headMasking" className="headMasking">
          <div>
            <div className="headMaskingTop">
              <Icon type="left" size="lg" onClick={this.goGrabble} />
              <div className="headMaskingTopInput">
                <InputItem
                  clear
                  placeholder="支持音乐搜索"
                  value={inputValue}
                ></InputItem>
              </div>
              <span>搜索</span>
            </div>
          </div>
          <DrawerBody saveValue={this.saveValue} />
        </div>
      </div>
    )
  }
}
