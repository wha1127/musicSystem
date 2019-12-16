import React, { Component } from 'react'
import './Collect.css'
import classnames from 'classnames'
import { withRouter } from 'react-router-dom'
//引入pubSub
//import PubSub from 'pubsub-js'
//@withRouter
let songList2 = []
class Collect extends Component {
  /* constructor(props) {
    super(props)
    this.state = {
      activeTab: 1,
      songList: []
    }
  } */
  state = {
    activeTab: 1,
    songList: []
  }
  componentDidMount() {
    /* PubSub.subscribe('addValue', (msg, data) => {
      console.log(msg, data)
      this.setState({
        songList: data
      })
    }) */
    console.log(111)
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
  isCollect(tabIndex) {
    this.setState({
      activeTab: tabIndex
    })
  }
  // 跳转到新增页面
  goNewSong = () => {
    console.log(this.props.history)
    this.props.history.push('/newsong')
  }
  // 跳转到歌曲管理页面
  goManageSong = () => {
    this.props.history.push('/manageSong')
  }
  render() {
    //console.log(this.state.songList)
    const { activeTab, songList } = this.state
    return (
      <div>
        <div className="newSong">
          {/* 新建布局上部分 */}
          <div className="newSong-top">
            <p
              className={classnames(activeTab === 1 ? 'active' : '')}
              onClick={() => this.isCollect(1)}
            >
              自建歌单
            </p>
            <span className="shu">|</span>
            <p
              className={classnames(activeTab === 2 ? 'active' : '')}
              onClick={() => this.isCollect(2)}
            >
              收藏歌单
            </p>
            <div className="newSong-icon">
              <img
                onClick={this.goNewSong}
                src="./image/icon-songmenu-add.png"
                alt=""
                style={activeTab !== 1 ? { display: 'none' } : {}}
              />
              <img
                src="./image/icon-songmenu.png"
                alt=""
                onClick={this.goManageSong}
              />
            </div>
          </div>
          {/* 新建布局下部分 */}
          <div
            className="newSong-bottom"
            style={activeTab !== 1 ? { display: 'none' } : {}}
          >
            <ul>
              {songList.map((item, index) => {
                if (songList && item !== null) {
                  return (
                    <li className="newSongItem" key={index}>
                      <div className="masking-left">
                        <img src="./image/icon-songmenu-add.png" alt="" />
                      </div>
                      <div className="masking-right">
                        <p>{item}</p>
                        <p className="masking-right-number">
                          {songList.length}首
                        </p>
                      </div>
                    </li>
                  )
                } else {
                  console.log(11)
                  return (
                    <li
                      className="newSongItem"
                      onClick={this.goNewSong}
                      key={index}
                    >
                      <div className="masking-left">
                        <img src="./image/icon-songmenu-add.png" alt="" />
                      </div>
                      <div className="masking-right">
                        <p>新建歌单</p>
                      </div>
                    </li>
                  )
                }
              })}
            </ul>
          </div>
        </div>
        {/* 我的新建布局 */}
        <div
          className="collect-bottom"
          style={activeTab !== 2 ? { display: 'none' } : {}}
        >
          <ul>
            <li className="collectItem">
              <div className="maskings-left">
                <img src="###" alt="" />
              </div>
              <div className="maskings-right">
                <p>新建歌单</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default withRouter(Collect)
