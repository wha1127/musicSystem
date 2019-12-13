import React, { Component } from 'react'
import Header from '../src/components/Header/Header'

export default class MySong extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="content">
          <div className="content-top">
            <span>
              <i className="listenTime"></i>
              <span>0分钟</span>
            </span>
            <img src="https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2052372606,1200247783&fm=179&app=42&f=JPEG?w=121&h=121" alt="头像"/>
            <span>
              <i className="vip"></i>
              <span>开通</span>
            </span>
          </div>
          <div className="content-bottom">
            
          </div>
        </div>
      </div>
    )
  }
}
