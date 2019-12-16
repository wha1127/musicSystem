import React from 'react';
import './style.css';

class Discovery extends React.Component {
  render () {
    const discoveryListOne = [
      {
        text: '乐见大牌: GAI说唱惊喜轰炸, PGONE爆理想型',
        music: '天干物燥-GAT',
        image: '../../static/images/news-cover-one.jpeg',
        author: '乐见大牌',
        read: 9527
      },
      {
        text: '有些男女之情,比爱情更让人羡慕',
        music: '富士山下-陈奕迅',
        image: '../../static/images/news-cover-two.jpg',
        author: '淘漉音乐',
        read: 9527
      },
      {
        text: '评论志|最怕回忆突然锋利,翻滚不息',
        music: '突然好想你-五月天',
        image: '../../static/images/news-cover-three.jpg',
        author: '大冲音像店',
        read: 9527
      },
    ];


    const discoveryListTWO = [
      {
        text: 'S.H.E: 十年女团, 十年回忆',
        music: 'S.H.E | 十年女团, 十年回忆-微音',
        image: '../../static/images/discovery-she.jpg',
        author: '微音',
        read: 9527
      },
      {
        text: '张韶涵: 好久不见, 回来就好',
        music: '潘多拉 | 潘多拉,暖心女声',
        image: '../../static/images/discovery-zhangshaohan.jpeg',
        author: '淘漉音乐',
        read: 9527
      },
      {
        text: '背景音集结 电子盛宴, 自带BUFF',
        music: 'Time Learper-Hinlil',
        image: '../../static/images/discovery-ali.jpeg',
        author: '微音',
        read: 9527
      },
    ];


    const topicList = [
      {
        image: '../../static/images/topic-lizongsheng.jpeg',
        title: '#又见.李宗盛',
        text: '戳到了心坎的一句歌词'
      },
      {
        image: '../../static/images/topic-linyoujia.jpg',
        title: '#又见.林宥嘉',
        text: '曾经听了那首歌泪流不止?'
      },
      {
        image: '../../static/images/topic-chenyixun.jpeg',
        title: '#又见.陈奕迅',
        text: '循环播放次数最多的一首歌??'
      },
      {
        image: '../../static/images/topic-tianfuzhen.jpg',
        title: '#又见.田馥甄',
        text: '夜长梦很多,你就不要想起我'
      },
    ];



    return (
      <div className="qqmusic-home-body">
        <ul className="qqmusic-discovery-list">
          {
            discoveryListOne.map(function (item, index) {
              return (
                <li className="qqmusic-discovery-item" key={index}>
                  <div className="qqmusic-discovery-item-left">
                    <p className="text">{item.text}</p>
                    <p className="music"><img className="music-image" src='../../assets/icon-music-black.png' alt='' />{item.music}</p>
                    <p className="extra">{item.author} 阅读 {item.read}</p>
                  </div>
                  <div className="qqusic-discovery-item-right">
                    <img className="image" src={item.image} alt='' />
                  </div>
                </li>
              )
            })
          }
        </ul>

        <div className="qqmusic-discovery-carousel">
          <div className="top"><span className="tag">发现*话题</span></div>
          <div className="bottom">
            <ul className="list">
              {
                topicList.map(function (item, index) {
                  return (
                    <li className="item" key={index}>
                      <img className="image" src={item.image} alt="" />
                      <div className="mask">
                        <h4 className="title">{item.title}</h4>
                        <p className="text">{item.text}</p>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>

        <ul className="qqmusic-discovery-list" style={{ marginBottom: '0.3rem' }}>
          {
            discoveryListTWO.map(function (item, index) {
              return (
                <li className="qqmusic-discovery-item" key={index}>
                  <div className="qqmusic-discovery-item-left">
                    <p className="text">{item.text}</p>
                    <p className="music"><img className="music-image" src="../../assets/icon-music-black.png" alt=""></img></p>
                    <p className="extra">{item.author}阅读{item.read}</p>
                  </div>
                  <div className="qqmusic-discovery-item-right">
                    <img className="image" style={{ width: "110px", height: "110px" }} src={item.image} alt="" />
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div >
    )
  }
}
export default Discovery;