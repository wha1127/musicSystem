import React, { Component } from 'react'
//引入Antd组件库
// import { Icon } from 'antd-mobile'
import Swiper from 'swiper/js/swiper.js'
import 'swiper/css/swiper.min.css'
import './MusicHall.css'

class MusicHall extends Component {
  componentDidMount () {
    //可以加上你需要的条件等，然后生成Swiper对象，
    //一定要检查是不是每次都生成了Swiper对象，否则可能出现不滑动的情况和别的情况等
    new Swiper('.swiper-container', {
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
      observer: true,//修改swiper自己或子元素时，自动初始化swiper
      observeParents: true,//修改swiper的父元素时，自动初始化swiper
      //自动播放
      autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
      }
    });
  }

  render () {
    return (
      <div className='musicHall-outer'>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src="/static/images/carousel-cover-one.jpg" alt="风景" />
            </div>
            <div className="swiper-slide">
              <img src="/static/images/carousel-cover-two.jpg" alt="风景" />
            </div>
            <div className="swiper-slide">
              <img src="/static/images/carousel-cover-three.jpg" alt="风景" />
            </div>
            <div className="swiper-slide">
              <img src="/static/images/carousel-cover-four.jpg" alt="风景" />
            </div>
            <div className="swiper-slide">
              <img src="/static/images/carousel-cover-five.jpg" alt="风景" />
            </div>
            <div className="swiper-slide">
              <img src="/static/images/carousel-cover-six.jpg" alt="风景" />
            </div>
            <div className="swiper-slide">
              <img src="/static/images/carousel-cover-seven.jpg" alt="风景" />
            </div>
            <div className="swiper-slide">
              <img src="/static/images/carousel-cover-eight.jpg" alt="风景" />
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
        <ul className="navList clearfix">
          <li className="nav-item">
            <img src="/assets/icon-grid-singer.png" alt="" />
            <span>歌手</span>
          </li>
          <li className="nav-item">
            <img src="/assets/icon-grid-rank.png" alt="" />
            <span>排行</span>
          </li>
          <li className="nav-item">
            <img src="/assets/icon-grid-radio.png" alt="" />
            <span>电台</span>
          </li>
          <li className="nav-item">
            <img src="/assets/icon-grid-categories.png"
              alt="" />
            <span>分类歌单</span>
          </li>
          <li className="nav-item">
            <img src="/assets/icon-grid-video.png" alt="" />
            <span>视频MV</span>
          </li>
          <li className="nav-item">
            <img src="/assets/icon-grid-buy.png" alt="" />
            <span>数字专辑</span>
          </li>
        </ul>
        <div className="musicList-container">
          <div className="musicList-header">
            <span>歌单推荐</span>
            <img src="/assets/icon-circle-right.png" alt="" />
          </div>
          <ul className="musicList clearfix">
            <li className='music-item'>
              <img className='big-img' src="/static/images/songmenu-five.jpeg" alt="" />
              <div className='icon-left'>
                <img className='listenImg' src="/assets/icon-music-amount.png" alt="" />
                <span>1.7万</span>
              </div>
              <img className='small-img' src="/assets/icon-music-link.png" alt="" />
              <p>《王者荣耀》风骚走位必备BGM</p>
            </li>
            <li className='music-item'>
              <img className='big-img' src="/static/images/songmenu-five.jpeg" alt="" />
              <div className='icon-left'>
                <img className='listenImg' src="/assets/icon-music-amount.png" alt="" />
                <span>1.7万</span>
              </div>
              <img className='small-img' src="/assets/icon-music-link.png" alt="" />
              <p>《王者荣耀》风骚走位必备BGM</p>
            </li>
            <li className='music-item'>
              <img className='big-img' src="/static/images/songmenu-five.jpeg" alt="" />
              <div className='icon-left'>
                <img className='listenImg' src="/assets/icon-music-amount.png" alt="" />
                <span>1.7万</span>
              </div>
              <img className='small-img' src="/assets/icon-music-link.png" alt="" />
              <p>《王者荣耀》风骚走位必备BGM</p>
            </li>
            <li className='music-item'>
              <img className='big-img' src="/static/images/songmenu-five.jpeg" alt="" />
              <div className='icon-left'>
                <img className='listenImg' src="/assets/icon-music-amount.png" alt="" />
                <span>1.7万</span>
              </div>
              <img className='small-img' src="/assets/icon-music-link.png" alt="" />
              <p>《王者荣耀》风骚走位必备BGM</p>
            </li>
            <li className='music-item'>
              <img className='big-img' src="/static/images/songmenu-five.jpeg" alt="" />
              <div className='icon-left'>
                <img className='listenImg' src="/assets/icon-music-amount.png" alt="" />
                <span>1.7万</span>
              </div>
              <img className='small-img' src="/assets/icon-music-link.png" alt="" />
              <p>《王者荣耀》风骚走位必备BGM</p>
            </li>
            <li className='music-item'>
              <img className='big-img' src="/static/images/songmenu-five.jpeg" alt="" />
              <div className='icon-left'>
                <img className='listenImg' src="/assets/icon-music-amount.png" alt="" />
                <span>1.7万</span>
              </div>
              <img className='small-img' src="/assets/icon-music-link.png" alt="" />
              <p>《王者荣耀》风骚走位必备BGM</p>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default MusicHall