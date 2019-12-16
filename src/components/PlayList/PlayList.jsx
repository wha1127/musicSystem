import React, { Component } from 'react';
import bin from '../../assets/icon-list-clear.png'
import playing from '../../assets/icon-music-playing.png'
// import './style.styl'
import './style.less'
import close from '../../assets/icon-record-close.png'
import Pubsub from 'pubsub-js'
class PlayList extends Component {
  state = {
    isShow: false
  }
  showPlayList = (event) => {
    event.preventDefault()
    const isShow = !this.state.isShow
    this.setState({
      isShow
    })
  }
  componentDidMount () {
    this.pubsub_token = Pubsub.subscribe('showList', (msg,isShow) => {
      this.setState({
        isShow
      })
      console.log(this.state.isShow);
    })
  }
  componentWillUnmount () {
    Pubsub.unsubscribe(this.pubsub_token)
  }
  render () {
    {
      return (
        <div className={this.state.isShow?'playListContainer show':'playListContainer'} onClick={this.showPlayList}>
          <div  className={this.state.isShow?'musicList show':'musicList'}>
            <div className="listTop">
              <p className="title">播放列表</p>
              <img src={bin} className="bin" alt="delete" />
            </div>
            <ul className="listContent">
              <li className="listItem isPlaying">
                Dream It Possible - 张靓颖
                <img src={playing} alt="playing" className="playing" />
                <img className="close" src={close} alt={close} />
              </li>
              <li className="listItem">七里香 - 周杰伦
                <img className="close" src={close} alt={close} />
              </li>
              <li className="listItem">泡沫 - 邓紫棋
                <img className="close" src={close} alt={close} />
              </li>
            </ul>
          </div>
          <div className="bottom" onClick={this.showPlayList}>关闭</div>
        </div>
      )
    }
  }
}

export default PlayList;