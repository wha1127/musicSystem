import React, { Component } from 'react';
import back from '../../assets/icon-control-down.png'
import singer from '../../assets/images/topic-tianfuzhen.jpeg'
import './style.styl'
import { Carousel } from 'antd-mobile'
import next from '../../assets/icon-music-next.png'
import prev from '../../assets/icon-music-prev.png'
import play from '../../assets/icon-music-play.png'
import stop from '../../assets/icon-music-pause.png'
import Pubsub from 'pubsub-js'
class PlayDetail extends Component {
  state = {
    isPlay: false,
    isShow: false
  }
  changeStatus = () => {
    const isPlay = !this.state.isPlay
    this.setState({
      isPlay
    })
  }
  hideDetail = () => {
    const isShow = !this.state.isShow
    console.log(111);
    this.setState({
      isShow
    })
  }
  componentDidMount(){
    console.log(222);
    this.pubsub_token = Pubsub.subscribe('showDetail',(msg,isShow) => {
      this.setState({
        isShow
      })
    })
  }
  componentWillUnmount () {
    Pubsub.unsubscribe(this.pubsub_token)
  }
  render () {
    return this.state.isShow ? (
      <div className={this.state.isShow ? "detailContainer show" : "detailContaine"}>
        <div className="detailTop">
          <img className="back" onClick={this.hideDetail} src={back} alt="" />
          <p className="music-title">泡沫</p>
          <p className="music-author">邓紫棋</p>
        </div>
        <div className="detailMid">
          <Carousel autoplay={false}>
            {
              [(
                <div key="1" className="carousel-one">
                  <img className={this.state.isPlay ? "music-cover active" : "music-cover"} src={singer} alt="singer" />
                </div>
              ),
              (
                <div key="2" className="carousel-two" >
                  <ul className="lyricList">
                    <li>111</li>
                  </ul>
                </div>
              )]
            }
          </Carousel>
        </div>
        <div className="detailBottom">
          <div className="progress">
            <span className="currentPlayTime">0:00</span>
            <div className="progress-wrapper">
              <div className="progress-inner" ></div>
              <span className="progress-btn" ></span>
            </div>
            <span className="totalPlayTime">04:19</span>
          </div>
          
        </div>
        <div className="controlBtn">
            <img className="prev" src={prev} />
            <img className="status" src={this.state.isPlay ? stop : play} onClick={this.changeStatus} />
            <img className="next" src={next} />
          </div>
        <div className="detailBg"></div>
        <div className="bgMask"></div>
      </div>
    ): null
  }
}

export default PlayDetail;