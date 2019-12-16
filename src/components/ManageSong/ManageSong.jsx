import React, { Component } from 'react'
import './ManageSong.css'
import { List, Checkbox } from 'antd-mobile'
const CheckboxItem = Checkbox.CheckboxItem
let songList2 = []
class ManageSong extends Component {
  state = {
    songList: []
  }
  
  //页面渲染完
  componentDidMount() {
    let songList1 = localStorage.getItem('addValue')
    if (songList1) {
      songList2.push(songList1)
    } else {
      songList2 = [null]
    }

    this.setState({
      songList: songList2
    })
  }
  
  // 点击事件
  onChange (item, index) {
    console.log(item, index)
    
  }
  //删除事件
  delete=()=>{
    console.log(222)
  }
  render() {
    const { songList } = this.state
    return (
      <div className="ManageSong-wrapper">
        {/* 头部部分 */}
        <div className="ManageSong-header">
          <img
            src="./image/icon-arrow-left.png"
            alt=""
            onClick={() => this.props.history.goBack()}
          />
          <span className="ManageSong-title">管理自建歌单</span>
          <span className="ManageSong-save"></span>
        </div>
        {/* 内容部分 */}
        <div className="ManageSong-content">
          <List renderHeader={() => '歌单每一项'} ref="parent">
            {songList.map((item, index) => {
              
              return <CheckboxItem
                  ref="checkboxItem"
                  key={index}
                  onChange={() => this.onChange(item,index)}
                >
                  {item}
                </CheckboxItem>
              
            })}
          </List>

          <li className="ManageSong-Item"></li>
        </div>
        {/* Footer */}
        <div className="ManageSong-footer">
          <img src="./image/icon-songmenu-delete.png" alt="" onClick={this.delete} />
          <span>删除</span>
        </div>
      </div>
    )
  }
}

export default ManageSong
