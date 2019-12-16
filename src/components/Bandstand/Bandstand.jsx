import React, { Component } from 'react'
import avatar from '../../assets/images/topic-tianfuzhen.jpeg'
import pause from '../../assets/icon-control-pause.png'
import play from '../../assets/icon-control-play.png'
import menu from '../../assets/icon-control-play.png'
import list from '../../assets/icon-play-list.png'
import './style.styl'
import Pubsub from 'pubsub-js'
export default class Bandstand extends Component {
  state = {
    isPlay:false
  }
  changeStatus = () => {
    const isPlay = !this.state.isPlay
    this.setState({
      isPlay
    })
  }
  showPlayList(){
    Pubsub.publish('showList',true)
  }
  showPlayDetail(){
    console.log(111);
    Pubsub.publish('showDetail',true)
  }
  render() {
    return (
      <div className="container">
        <div className="footer">
          <div className="left">
            <img src={avatar} onClick={this.showPlayDetail}  alt="avatar" className={this.state.isPlay?'play' : ''}/>
          </div>
          <div className="center">
            <p className="title">泡沫</p>
            <p className="singer">邓紫棋</p>
          </div>
          <div className="right">
            <img className="play" onClick={this.changeStatus} src={this.state.isPlay?pause:play} alt="play"/>
            <img className="list" src={list} alt="list" onClick={this.showPlayList}/>
          </div>
        </div>
        
      </div>
    )
  }
}
