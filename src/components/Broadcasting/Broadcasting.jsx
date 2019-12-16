import React, { Component } from 'react'
import './Broadcasting.css'
class Broadcasting extends Component {
  render() {
    return (
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
    )
  }
}
export default Broadcasting
