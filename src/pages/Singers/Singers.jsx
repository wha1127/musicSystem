import React, { Component } from 'react'
import { Icon } from 'antd-mobile'
import './Singers.css'
import { reqSingerList } from '../../api/index.js'

class Singers extends Component {
  state = {
    singerList: []
  }
  async componentDidMount () {
    const result = await reqSingerList()
    // console.log(result)
    if (result.data.code === 0) {
      const singerList = result.data.data
      this.setState({
        singerList
      })
      // console.log(singerList)
    } else {
      console.log('搞错了')
    }
  }
  render () {
    const { singerList } = this.state
    return (
      <div className='singer-outer'>
        <div className="back">
          <Icon type="left" className='Icon' onClick={() => (this.props.history.goBack())} />
          <span>歌手</span>
        </div>
        <div className='singer-ranking'>
          <div className='ranking-style'>
            <img src="/static/images/shandian.png" alt="" />
            <span>能量榜</span>
            <span>热门榜</span>
            <span>飙升榜</span>
          </div>
          <h2 className='ranking-singer'>NO.1肖战</h2>
          <p className='ranking-text'>恭喜占领本期榜单封页</p>
          <div className='ranking-img'>
            <img src="/static/images/songmenu-one.jpeg" alt="" />
            <img src="/static/images/songmenu-six.jpeg" alt="" />
            <img src="/static/images/topic-linyoujia.jpg" alt="" />
            <Icon type="right" className='Icon-right' />
          </div>
          <p className='ranking-fans'>- 粉丝贡献前三名 -</p>
          <img className='bgImg' src="/static/images/xiaozhan.png" alt="" />
        </div>
        <ul className='singerList'>
          {
            singerList.map((singer, index) => (
              <li className='singerItem' key={index}>
                <p className='singer-rank'>
                  <img src="/static/images/huangguan.png" alt="" />
                  {singer.number}</p>
                <img className='singer-photo' src={singer.avatarImage} alt="" />
                <div className="nengliang">
                  <p>{singer.name}</p>
                  <p>
                    <img src="/static/images/nengliang.png" alt="" />
                    {singer.amount}
                  </p>
                </div>
                <p className='singer-call'>打榜</p>
              </li>
            ))
          }

        </ul>
      </div>
    )
  }
}

export default Singers