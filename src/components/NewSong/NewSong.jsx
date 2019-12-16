import React, { Component } from 'react'
import './NewSong.css'
//import PubSub from 'pubsub-js'
class NewSong extends Component {
  save = () => {
    let value = this.refs.values.value.trim()
    localStorage.setItem('addValue', value)
    this.props.history.push('/mypage')
  }
  render() {
    return (
      <div className="NewSong-wrapper">
        {/* 头部部分 */}
        <div className="NewSong-header">
          <img
            src="./image/icon-arrow-left.png"
            alt=""
            onClick={() => this.props.history.goBack()}
          />
          <span className="newSong-title">新建歌单</span>
          <span className="NewSong-save" onClick={this.save}>
            保存
          </span>
        </div>
        {/* 输入部分 */}
        <div className="importBox-out">
          <input
            ref="values"
            className="importBox"
            type="text"
            placeholder="请输入内容"
          />
        </div>
      </div>
    )
  }
}

export default NewSong
