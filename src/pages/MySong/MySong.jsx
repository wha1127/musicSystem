import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import './Mysong.styl'
import vip from '../../assets/icon-user-rank.png'
import { Grid } from 'antd-mobile'
import pic1 from '../../assets/images/broadcasting-station-run.jpeg'
import pic2 from '../../assets/images/broadcasting-station-specific.jpeg'
export default class MySong extends Component {
  render () {
    const list = [
      {
        text: '本地歌曲',
        img: require('../../assets/icon-grid-music.png')
      },
      {
        text: '下载歌曲',
        img: require('../../assets/icon-grid-download.png')
      },
      {
        text: '最近播放',
        img: require('../../assets/icon-grid-recent.png')
      },
      {
        text: '我喜欢',
        img: require('../../assets/icon-grid-favorite.png')
      },
      {
        text: '下载MV',
        img: require('../../assets/icon-grid-mv.png')
      },
      {
        text: '已购音乐',
        img: require('../../assets/icon-grid-buy.png')
      }
    ]
    return (
      <div>
        <Header />
        <div className="content">
          <div className="content-top">
            <div className="content-left">
              <i className="listenTime"></i>
              <span>0分钟</span>
            </div>
            <img className="avatar" src="https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2052372606,1200247783&fm=179&app=42&f=JPEG?w=121&h=121" alt="头像" />
            <div className="content-right">
              <i className="vip"></i>
              <span>开通</span>
            </div>
          </div>
          <div className="split">
            <span className="splitText">椰子油</span>
            <img src={vip} alt={vip} className="vip" />
          </div>
          <div className="content-bottom">
            <Grid className="list"
              data={list} columnNum={3} hasLine={false}
              renderItem={
                item => (
                  <div className="itemList">
                    <img src={item.img} alt="" />
                    <span>{item.text}</span>
                  </div>
                )
              }
            />
          </div>
        </div>
        <div className="radio">
          <div className="row">
            <div className="left">
              <img src={pic1} />
            </div>
            <div className="right">
              <p className="station-title">个性电台</p>
              <p className="station-text">偶遇身边的音乐</p>
            </div>
          </div>
          <div className="splitLine"></div>
          <div className="row">
            <div className="left">
              <img src={pic2} />
            </div>
            <div className="right">
              <p className="station-title">个性电台</p>
              <p className="station-text">偶遇身边的音乐</p>
            </div>
          </div>
        </div>
        <div className="menus">
            
        </div>
      </div>
    )
  }
}
