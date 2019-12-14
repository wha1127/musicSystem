import React, { Component } from 'react'
import './Collect.css'
import classnames from 'classnames'
import { withRouter } from 'react-router-dom'
@withRouter()
class Collect extends Component {
  state = {
    activeTab: 1
  }

  isCollect(tabIndex) {
    this.setState({
      activeTab: tabIndex
    })
  }
  goNewSong = () => {
    console.log(this.props.history)
    this.props.history.push('/newsong')
  }
  render() {
    const { activeTab } = this.state
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
                src="./image/icon-songmenu-add.png"
                alt=""
                style={activeTab !== 1 ? { display: 'none' } : {}}
              />
              <img src="./image/icon-songmenu.png" alt="" />
            </div>
          </div>
          {/* 新建布局下部分 */}
          <div
            className="newSong-bottom"
            style={activeTab !== 1 ? { display: 'none' } : {}}
          >
            <ul>
              <li className="newSongItem" onClick={this.goNewSong}>
                <div className="masking-left">
                  <img src="./image/icon-songmenu-add.png" alt="" />
                </div>
                <div className="masking-right">
                  <p>新建歌单</p>
                </div>
              </li>
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

export default Collect
